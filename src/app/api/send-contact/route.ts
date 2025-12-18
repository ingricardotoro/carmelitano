import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'
import { ContactEmail } from '@/emails/ContactEmail'

export async function POST(request: NextRequest) {
  try {
    // Validar que las variables de entorno estén configuradas
    if (!process.env.ZEPTOMAIL_SMTP_HOST || !process.env.ZEPTOMAIL_SMTP_USER || !process.env.ZEPTOMAIL_SMTP_PASS) {
      console.error('Variables de entorno de ZeptoMail no configuradas')
      return NextResponse.json(
        { error: 'Configuración de correo no disponible' },
        { status: 500 }
      )
    }

    // Obtener datos del formulario
    const body = await request.json()
    const { name, email, phone, department, subject, message } = body

    // Validar campos requeridos
    if (!name || !email || !department || !subject || !message) {
      return NextResponse.json(
        { error: 'Todos los campos requeridos deben estar completos' },
        { status: 400 }
      )
    }

    // Validar formato de email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Correo electrónico inválido' },
        { status: 400 }
      )
    }

    // Configurar destinatarios
    const contactEmailTo = process.env.CONTACT_EMAIL_TO?.split(',').map(e => e.trim()) || ['info@carmelitanosanjose.edu.hn']
    const zeptomailFrom = process.env.ZEPTOMAIL_FROM || 'noreply@carmelitanosanjose.edu.hn'

    // Crear el transportador de nodemailer con ZeptoMail SMTP
    const transporter = nodemailer.createTransport({
      host: process.env.ZEPTOMAIL_SMTP_HOST,
      port: parseInt(process.env.ZEPTOMAIL_SMTP_PORT || '587'),
      secure: false, // true para puerto 465, false para otros puertos
      auth: {
        user: process.env.ZEPTOMAIL_SMTP_USER,
        pass: process.env.ZEPTOMAIL_SMTP_PASS,
      },
      tls: {
        rejectUnauthorized: false // Permitir certificados autofirmados si es necesario
      }
    })

    // Verificar la conexión SMTP
    try {
      await transporter.verify()
      console.log('Servidor SMTP listo para enviar correos')
    } catch (error) {
      console.error('Error al verificar conexión SMTP:', error)
      return NextResponse.json(
        { error: 'Error de conexión con el servidor de correo' },
        { status: 500 }
      )
    }

    // Generar el HTML del correo para el instituto
    const emailHtml = ContactEmail({
      name,
      email,
      phone: phone || '',
      department,
      subject,
      message
    })

    // Enviar correo al instituto
    const mailOptions = {
      from: `"Instituto Carmelitano Web" <${zeptomailFrom}>`,
      to: contactEmailTo,
      replyTo: email,
      subject: `📩 Nueva Consulta Web: ${subject}`,
      html: emailHtml,
      headers: {
        'X-Priority': '3',
        'X-Mailer': 'Instituto Carmelitano Website'
      }
    }

    const info = await transporter.sendMail(mailOptions)
    console.log('Correo enviado al instituto:', info.messageId)

    return NextResponse.json(
      { 
        success: true, 
        message: 'Mensaje enviado correctamente',
        messageId: info.messageId
      },
      { status: 200 }
    )
  } catch (error) {
    console.error('Error en la API de contacto:', error)
    
    // Proporcionar mensajes de error más específicos
    if (error instanceof Error) {
      if (error.message.includes('EAUTH')) {
        return NextResponse.json(
          { error: 'Error de autenticación con el servidor de correo' },
          { status: 500 }
        )
      } else if (error.message.includes('ECONNECTION')) {
        return NextResponse.json(
          { error: 'No se pudo conectar al servidor de correo' },
          { status: 500 }
        )
      }
    }
    
    return NextResponse.json(
      { error: 'Error interno del servidor. Por favor intenta nuevamente.' },
      { status: 500 }
    )
  }
}
