interface AppointmentEmailProps {
  name: string
  email: string
  phone: string
  preferredDate: string
  preferredTime: string
  message: string
}

const timeSlotLabels: Record<string, string> = {
  morning: 'Mañana (7:00 AM - 11:00 AM)',
  midday: 'Mediodía (11:00 AM - 2:00 PM)',
  saturday: 'Sábado (8:00 AM - 12:00 PM)'
}

export const AppointmentEmail = ({
  name,
  email,
  phone,
  preferredDate,
  preferredTime,
  message
}: AppointmentEmailProps) => {
  const timeSlotLabel = timeSlotLabels[preferredTime] || preferredTime
  
  return `
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Nueva Solicitud de Cita</title>
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
                📅 Nueva Solicitud de Visita
              </h1>
              <p style="margin: 10px 0 0 0; color: #e0e7ff; font-size: 14px;">
                Instituto Carmelitano San José
              </p>
            </td>
          </tr>

          <!-- Content -->
          <tr>
            <td style="padding: 40px 30px;">
              <p style="margin: 0 0 20px 0; color: #374151; font-size: 16px; line-height: 1.6;">
                Se ha recibido una nueva solicitud de visita al centro educativo. A continuación los detalles:
              </p>

              <!-- Información del Solicitante -->
              <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom: 30px;">
                <tr>
                  <td style="background-color: #f9fafb; border-left: 4px solid #1e40af; padding: 20px; border-radius: 8px;">
                    <h2 style="margin: 0 0 15px 0; color: #1e40af; font-size: 18px; font-weight: 600;">
                      👤 Información del Solicitante
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
                          <a href="tel:${phone}" style="color: #1e40af; text-decoration: none;">${phone}</a>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>

              <!-- Detalles de la Cita -->
              <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom: 30px;">
                <tr>
                  <td style="background-color: #fef3c7; border-left: 4px solid #f59e0b; padding: 20px; border-radius: 8px;">
                    <h2 style="margin: 0 0 15px 0; color: #92400e; font-size: 18px; font-weight: 600;">
                      📆 Detalles de la Visita
                    </h2>
                    <table width="100%" cellpadding="8" cellspacing="0">
                      <tr>
                        <td style="color: #78350f; font-size: 14px; font-weight: 600; width: 140px;">Fecha Preferida:</td>
                        <td style="color: #111827; font-size: 14px; font-weight: 600;">${new Date(preferredDate).toLocaleDateString('es-HN', { 
                          weekday: 'long', 
                          year: 'numeric', 
                          month: 'long', 
                          day: 'numeric' 
                        })}</td>
                      </tr>
                      <tr>
                        <td style="color: #78350f; font-size: 14px; font-weight: 600;">Horario:</td>
                        <td style="color: #111827; font-size: 14px; font-weight: 600;">${timeSlotLabel}</td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>

              ${message ? `
              <!-- Mensaje Adicional -->
              <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom: 30px;">
                <tr>
                  <td style="background-color: #f0fdf4; border-left: 4px solid #10b981; padding: 20px; border-radius: 8px;">
                    <h2 style="margin: 0 0 15px 0; color: #065f46; font-size: 18px; font-weight: 600;">
                      💬 Mensaje Adicional
                    </h2>
                    <p style="margin: 0; color: #111827; font-size: 14px; line-height: 1.6; white-space: pre-wrap;">
                      ${message}
                    </p>
                  </td>
                </tr>
              </table>
              ` : ''}

              <!-- Acciones Recomendadas -->
              <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom: 20px;">
                <tr>
                  <td style="background-color: #eff6ff; border: 1px solid #bfdbfe; padding: 20px; border-radius: 8px;">
                    <h3 style="margin: 0 0 10px 0; color: #1e40af; font-size: 16px; font-weight: 600;">
                      📋 Próximos Pasos
                    </h3>
                    <ul style="margin: 0; padding-left: 20px; color: #374151; font-size: 14px; line-height: 1.8;">
                      <li>Verificar la disponibilidad de la fecha y horario solicitado</li>
                      <li>Contactar al solicitante para confirmar la cita</li>
                      <li>Preparar la información relevante para la visita</li>
                      <li>Enviar confirmación y detalles de la visita</li>
                    </ul>
                  </td>
                </tr>
              </table>

              <!-- Call to Action -->
              <table width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td align="center" style="padding: 20px 0;">
                    <a href="mailto:${email}" style="display: inline-block; background: linear-gradient(135deg, #1e40af 0%, #7c3aed 100%); color: #ffffff; text-decoration: none; padding: 14px 32px; border-radius: 8px; font-weight: 600; font-size: 16px;">
                      Responder al Solicitante
                    </a>
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
                  Este correo fue generado automáticamente desde el formulario web
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
