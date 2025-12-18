import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'
import { AppointmentEmail } from '@/emails/AppointmentEmail'

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
    const { name, email, phone, preferredDate, preferredTime, message } = body

    // Validar campos requeridos
    if (!name || !email || !phone || !preferredDate || !preferredTime) {
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
    const emailTo = process.env.CONTACT_EMAIL_TO?.split(',').map(e => e.trim()) || ['info@carmelitanosanjose.edu.hn']
    const zeptomailFrom = process.env.ZEPTOMAIL_FROM || 'noreply@carmelitanosanjose.edu.hn'

    // Crear el transportador de nodemailer con ZeptoMail SMTP
    const transporter = nodemailer.createTransport({
      host: process.env.ZEPTOMAIL_SMTP_HOST,
      port: parseInt(process.env.ZEPTOMAIL_SMTP_PORT || '587'),
      secure: false,
      auth: {
        user: process.env.ZEPTOMAIL_SMTP_USER,
        pass: process.env.ZEPTOMAIL_SMTP_PASS,
      },
      tls: {
        rejectUnauthorized: false
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

    // Generar el HTML del correo
    const emailHtml = AppointmentEmail({
      name,
      email,
      phone,
      preferredDate,
      preferredTime,
      message: message || ''
    })

    // Enviar correo al instituto
    const mailOptions = {
      from: `"Instituto Carmelitano Web" <${zeptomailFrom}>`,
      to: emailTo,
      replyTo: email,
      subject: `🗓️ Nueva Solicitud de Visita - ${name}`,
      html: emailHtml,
      headers: {
        'X-Priority': '3',
        'X-Mailer': 'Instituto Carmelitano Website'
      }
    }

    const info = await transporter.sendMail(mailOptions)
    console.log('Correo de cita enviado al instituto:', info.messageId)

    // Enviar correo de confirmación al solicitante
    try {
      const timeSlotLabel = preferredTime === 'morning' 
        ? 'Mañana (7:00 AM - 11:00 AM)' 
        : preferredTime === 'midday' 
        ? 'Mediodía (11:00 AM - 2:00 PM)' 
        : 'Sábado (8:00 AM - 12:00 PM)'

      await transporter.sendMail({
        from: `"Instituto Carmelitano San José" <${zeptomailFrom}>`,
        to: email,
        subject: '✅ Confirmación de Solicitud de Visita - Instituto Carmelitano',
        html: `
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body style="margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; background-color: #f4f4f5;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #f4f4f5; padding: 40px 20px;">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0" style="background-color: #ffffff; border-radius: 16px; overflow: hidden; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">
          <tr>
            <td style="background: linear-gradient(135deg, #1e40af 0%, #7c3aed 100%); padding: 40px 30px; text-align: center;">
              <h1 style="margin: 0; color: #ffffff; font-size: 28px; font-weight: bold;">
                ✅ Solicitud Recibida
              </h1>
            </td>
          </tr>
          <tr>
            <td style="padding: 40px 30px;">
              <p style="margin: 0 0 20px 0; color: #374151; font-size: 16px; line-height: 1.6;">
                Estimado/a <strong>${name}</strong>,
              </p>
              <p style="margin: 0 0 20px 0; color: #374151; font-size: 16px; line-height: 1.6;">
                Hemos recibido tu solicitud de visita al Instituto Carmelitano San José. Nos pondremos en contacto contigo pronto para confirmar la disponibilidad de la fecha y horario solicitados.
              </p>
              <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom: 30px;">
                <tr>
                  <td style="background-color: #eff6ff; border-left: 4px solid #1e40af; padding: 20px; border-radius: 8px;">
                    <h2 style="margin: 0 0 15px 0; color: #1e40af; font-size: 18px; font-weight: 600;">
                      📋 Detalles de tu Solicitud
                    </h2>
                    <table width="100%" cellpadding="8" cellspacing="0">
                      <tr>
                        <td style="color: #6b7280; font-size: 14px; font-weight: 600; width: 140px;">Fecha:</td>
                        <td style="color: #111827; font-size: 14px;">${new Date(preferredDate).toLocaleDateString('es-HN', { 
                          weekday: 'long', 
                          year: 'numeric', 
                          month: 'long', 
                          day: 'numeric' 
                        })}</td>
                      </tr>
                      <tr>
                        <td style="color: #6b7280; font-size: 14px; font-weight: 600;">Horario:</td>
                        <td style="color: #111827; font-size: 14px;">${timeSlotLabel}</td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>
              <p style="margin: 0 0 20px 0; color: #374151; font-size: 16px; line-height: 1.6;">
                Si tienes alguna pregunta mientras tanto, no dudes en contactarnos.
              </p>
              <p style="margin: 0; color: #374151; font-size: 16px; line-height: 1.6;">
                ¡Esperamos verte pronto!
              </p>
            </td>
          </tr>
          <tr>
            <td style="background-color: #f9fafb; padding: 30px; text-align: center; border-top: 1px solid #e5e7eb;">
              <p style="margin: 0 0 10px 0; color: #1e40af; font-size: 18px; font-weight: bold;">
                Instituto Carmelitano San José
              </p>
              <p style="margin: 0 0 5px 0; color: #6b7280; font-size: 13px;">
                Aldea Santa Rosa, km3 Salida Sur, Distrito Central
              </p>
              <p style="margin: 0 0 5px 0; color: #6b7280; font-size: 13px;">
                📞 +504 2226-4074 | WhatsApp: +504 9316-5278
              </p>
              <p style="margin: 0; color: #6b7280; font-size: 13px;">
                📧 info@carmelitanosanjose.edu.hn
              </p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>
        `,
        headers: {
          'X-Priority': '3',
          'X-Mailer': 'Instituto Carmelitano Website'
        }
      })
      console.log('Correo de confirmación enviado al solicitante')
    } catch (confirmError) {
      console.error('Error al enviar correo de confirmación:', confirmError)
      // No fallar la operación completa si falla el correo de confirmación
    }

    return NextResponse.json(
      { 
        success: true, 
        message: 'Solicitud de cita enviada correctamente',
        messageId: info.messageId
      },
      { status: 200 }
    )
  } catch (error) {
    console.error('Error en la API de citas:', error)
    
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
