interface ContactEmailProps {
  name: string
  email: string
  phone: string
  department: string
  subject: string
  message: string
}

const departmentLabels: Record<string, string> = {
  admisiones: 'Admisiones y Matrícula',
  academico: 'Departamento Académico',
  administracion: 'Administración',
  pastoral: 'Pastoral Estudiantil',
  psicologia: 'Psicología Educativa',
  actividades: 'Actividades Extracurriculares',
  otros: 'Otros Asuntos'
}

export const ContactEmail = ({
  name,
  email,
  phone,
  department,
  subject,
  message
}: ContactEmailProps) => {
  const departmentLabel = departmentLabels[department] || department
  
  return `
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Nueva Consulta Web</title>
</head>
<body style="margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; background-color: #f4f4f5;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #f4f4f5; padding: 40px 20px;">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0" style="background-color: #ffffff; border-radius: 16px; overflow: hidden; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">
          
          <!-- Header -->
          <tr>
            <td style="background: linear-gradient(135deg, #1e40af 0%, #7c3aed 100%); padding: 40px 30px; text-align: center;">
              <h1 style="margin: 0; color: #ffffff; font-size: 28px; font-weight: bold;">
                💬 Nueva Consulta Web
              </h1>
              <p style="margin: 10px 0 0 0; color: #e0e7ff; font-size: 14px;">
                Formulario de Contacto - Instituto Carmelitano San José
              </p>
            </td>
          </tr>

          <!-- Content -->
          <tr>
            <td style="padding: 40px 30px;">
              <p style="margin: 0 0 20px 0; color: #374151; font-size: 16px; line-height: 1.6;">
                Se ha recibido una nueva consulta desde el formulario web. A continuación los detalles del mensaje:
              </p>

              <!-- Información del Remitente -->
              <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom: 30px;">
                <tr>
                  <td style="background-color: #f9fafb; border-left: 4px solid #1e40af; padding: 20px; border-radius: 8px;">
                    <h2 style="margin: 0 0 15px 0; color: #1e40af; font-size: 18px; font-weight: 600;">
                      👤 Información del Remitente
                    </h2>
                    <table width="100%" cellpadding="8" cellspacing="0">
                      <tr>
                        <td style="color: #6b7280; font-size: 14px; font-weight: 600; width: 140px;">Nombre:</td>
                        <td style="color: #111827; font-size: 14px;">${name}</td>
                      </tr>
                      <tr>
                        <td style="color: #6b7280; font-size: 14px; font-weight: 600;">Correo:</td>
                        <td style="color: #111827; font-size: 14px;">
                          <a href="mailto:${email}" style="color: #1e40af; text-decoration: none;">${email}</a>
                        </td>
                      </tr>
                      <tr>
                        <td style="color: #6b7280; font-size: 14px; font-weight: 600;">Teléfono:</td>
                        <td style="color: #111827; font-size: 14px;">
                          ${phone ? `<a href="tel:${phone}" style="color: #1e40af; text-decoration: none;">${phone}</a>` : '<span style="color: #9ca3af;">No proporcionado</span>'}
                        </td>
                      </tr>
                      <tr>
                        <td style="color: #6b7280; font-size: 14px; font-weight: 600;">Departamento:</td>
                        <td style="color: #111827; font-size: 14px;">${departmentLabel}</td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>

              <!-- Asunto -->
              <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom: 30px;">
                <tr>
                  <td style="background-color: #fef3c7; border-left: 4px solid #f59e0b; padding: 20px; border-radius: 8px;">
                    <h2 style="margin: 0 0 10px 0; color: #92400e; font-size: 18px; font-weight: 600;">
                      📋 Asunto
                    </h2>
                    <p style="margin: 0; color: #111827; font-size: 15px; font-weight: 600;">
                      ${subject}
                    </p>
                  </td>
                </tr>
              </table>

              <!-- Mensaje -->
              <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom: 30px;">
                <tr>
                  <td style="background-color: #f0fdf4; border-left: 4px solid #10b981; padding: 20px; border-radius: 8px;">
                    <h2 style="margin: 0 0 15px 0; color: #065f46; font-size: 18px; font-weight: 600;">
                      💬 Mensaje
                    </h2>
                    <div style="color: #111827; font-size: 14px; line-height: 1.8; white-space: pre-wrap; background-color: #ffffff; padding: 15px; border-radius: 6px; border: 1px solid #d1fae5;">
${message}
                    </div>
                  </td>
                </tr>
              </table>

              <!-- Información de Respuesta -->
              <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom: 20px;">
                <tr>
                  <td style="background-color: #eff6ff; border: 1px solid #bfdbfe; padding: 20px; border-radius: 8px;">
                    <h3 style="margin: 0 0 10px 0; color: #1e40af; font-size: 16px; font-weight: 600;">
                      ⚡ Acción Requerida
                    </h3>
                    <p style="margin: 0; color: #374151; font-size: 14px; line-height: 1.6;">
                      Esta consulta fue enviada a través del formulario de contacto web y requiere una respuesta oportuna. 
                      Por favor, responde directamente al correo del remitente para brindar la información solicitada.
                    </p>
                  </td>
                </tr>
              </table>

              <!-- Call to Action -->
              <table width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td align="center" style="padding: 20px 0;">
                    <a href="mailto:${email}?subject=Re:%20${encodeURIComponent(subject)}" style="display: inline-block; background: linear-gradient(135deg, #1e40af 0%, #7c3aed 100%); color: #ffffff; text-decoration: none; padding: 14px 32px; border-radius: 8px; font-weight: 600; font-size: 16px;">
                      Responder a ${name}
                    </a>
                  </td>
                </tr>
              </table>

              <!-- Metadata -->
              <table width="100%" cellpadding="0" cellspacing="0" style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e7eb;">
                <tr>
                  <td>
                    <p style="margin: 0; color: #9ca3af; font-size: 12px; text-align: center;">
                      Consulta recibida el ${new Date().toLocaleDateString('es-HN', { 
                        weekday: 'long', 
                        year: 'numeric', 
                        month: 'long', 
                        day: 'numeric',
                        hour: '2-digit',
                        minute: '2-digit'
                      })}
                    </p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="background-color: #f9fafb; padding: 30px; text-align: center; border-top: 1px solid #e5e7eb;">
              <p style="margin: 0 0 10px 0; color: #1e40af; font-size: 18px; font-weight: bold;">
                Instituto Carmelitano San José
              </p>
              <p style="margin: 0 0 5px 0; color: #6b7280; font-size: 13px;">
                Aldea Santa Rosa, km3 Salida Sur, Distrito Central, Francisco Morazán
              </p>
              <p style="margin: 0 0 5px 0; color: #6b7280; font-size: 13px;">
                📞 +504 2226-4074 | +504 2226-4073 | WhatsApp: +504 9316-5278
              </p>
              <p style="margin: 0; color: #6b7280; font-size: 13px;">
                📧 info@carmelitanosanjose.edu.hn
              </p>
              <div style="margin-top: 15px; padding-top: 15px; border-top: 1px solid #e5e7eb;">
                <p style="margin: 0; color: #9ca3af; font-size: 12px;">
                  Este correo fue generado automáticamente desde el formulario de contacto web
                </p>
              </div>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>
  `.trim()
}

export const ContactConfirmationEmail = ({
  name,
  department,
  subject
}: Pick<ContactEmailProps, 'name' | 'department' | 'subject'>) => {
  const departmentLabel = departmentLabels[department] || department
  
  return `
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
                ✅ Mensaje Recibido
              </h1>
            </td>
          </tr>
          <tr>
            <td style="padding: 40px 30px;">
              <p style="margin: 0 0 20px 0; color: #374151; font-size: 16px; line-height: 1.6;">
                Estimado/a <strong>${name}</strong>,
              </p>
              <p style="margin: 0 0 20px 0; color: #374151; font-size: 16px; line-height: 1.6;">
                Hemos recibido tu mensaje y será derivado al departamento correspondiente para su atención. Nuestro equipo se pondrá en contacto contigo lo antes posible.
              </p>
              <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom: 30px;">
                <tr>
                  <td style="background-color: #eff6ff; border-left: 4px solid #1e40af; padding: 20px; border-radius: 8px;">
                    <h2 style="margin: 0 0 15px 0; color: #1e40af; font-size: 18px; font-weight: 600;">
                      📋 Resumen de tu Consulta
                    </h2>
                    <table width="100%" cellpadding="8" cellspacing="0">
                      <tr>
                        <td style="color: #6b7280; font-size: 14px; font-weight: 600; width: 140px;">Asunto:</td>
                        <td style="color: #111827; font-size: 14px;">${subject}</td>
                      </tr>
                      <tr>
                        <td style="color: #6b7280; font-size: 14px; font-weight: 600;">Departamento:</td>
                        <td style="color: #111827; font-size: 14px;">${departmentLabel}</td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>
              <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom: 20px;">
                <tr>
                  <td style="background-color: #fef3c7; border: 1px solid #fde68a; padding: 15px; border-radius: 8px;">
                    <p style="margin: 0; color: #78350f; font-size: 14px; line-height: 1.6;">
                      <strong>⏱️ Tiempo de respuesta:</strong> Nuestro equipo responde generalmente en un plazo de 24 a 48 horas hábiles.
                    </p>
                  </td>
                </tr>
              </table>
              <p style="margin: 0 0 20px 0; color: #374151; font-size: 16px; line-height: 1.6;">
                Si tu consulta es urgente, puedes contactarnos directamente por teléfono o WhatsApp.
              </p>
              <p style="margin: 0; color: #374151; font-size: 16px; line-height: 1.6;">
                ¡Gracias por tu interés en el Instituto Carmelitano San José!
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
  `.trim()
}
