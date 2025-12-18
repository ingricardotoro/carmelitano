# Configuración de ZeptoMail para el Instituto Carmelitano San José

Este proyecto utiliza [ZeptoMail de Zoho](https://www.zeptomail.com/) para el envío de correos electrónicos desde el formulario de contacto mediante SMTP.

## ¿Qué es ZeptoMail?

ZeptoMail es un servicio de correo transaccional de Zoho, especializado en el envío de correos automáticos desde aplicaciones web. Es una alternativa confiable a servicios como SendGrid o Amazon SES.

## Configuración Inicial

### 1. Crear una cuenta en ZeptoMail

1. Ve a [https://www.zeptomail.com/](https://www.zeptomail.com/) y crea una cuenta
2. Verifica tu correo electrónico
3. Accede al panel de control de ZeptoMail

### 2. Agregar y Verificar tu Dominio

**Importante:** Para enviar correos en producción, necesitas verificar tu dominio.

1. En el panel de ZeptoMail, ve a **"Mail Agents"** > **"Add Mail Agent"**
2. Selecciona **"Domain"** y agrega tu dominio (ej: `carmelitanosanjose.edu.hn`)
3. ZeptoMail te proporcionará registros DNS que debes agregar:
   - **SPF (TXT)**: Para autenticar que estás autorizado a enviar correos desde tu dominio
   - **DKIM (TXT)**: Para firmar digitalmente tus correos
   - **Tracking Domain (CNAME)** (opcional): Para seguimiento de correos

#### Ejemplo de registros DNS:
```
Tipo: TXT
Host: @
Valor: v=spf1 include:zeptomail.net ~all

Tipo: TXT  
Host: zeptomail._domainkey
Valor: [El valor DKIM que te proporcione ZeptoMail]
```

4. Agrega estos registros en tu panel de administración de DNS (donde gestionas tu dominio)
5. Espera la verificación (puede tomar de 15 minutos a 48 horas)
6. Una vez verificado, verás un estado "Verified" en ZeptoMail

### 3. Obtener Credenciales SMTP

1. En el panel de ZeptoMail, ve a **"SMTP"** en el menú
2. Haz clic en **"Add SMTP"** o utiliza las credenciales existentes
3. Copia las credenciales SMTP que te proporciona:
   - **SMTP Host:** `smtp.zeptomail.com`
   - **SMTP Port:** `587` (recomendado) o `465`
   - **SMTP Username:** (ejemplo: `emailappsmtp.mda88cc0a33c`)
   - **SMTP Password:** (una clave larga generada automáticamente)

### 4. Configurar Variables de Entorno

Edita el archivo `.env.local` en la raíz del proyecto con tus credenciales:

```env
# ZeptoMail SMTP Configuration
ZEPTOMAIL_SMTP_HOST=smtp.zeptomail.com
ZEPTOMAIL_SMTP_PORT=587
ZEPTOMAIL_SMTP_USER=tu_usuario_smtp_aqui
ZEPTOMAIL_SMTP_PASS=tu_contraseña_smtp_aqui

# Correo remitente (debe usar tu dominio verificado)
ZEPTOMAIL_FROM=noreply@carmelitanosanjose.edu.hn

# Correos que recibirán las consultas (separados por comas)
CONTACT_EMAIL_TO=info@carmelitanosanjose.edu.hn,scarmelitano@yahoo.com
```

## Uso en Desarrollo

### Modo de Prueba (Sandbox)

Para desarrollo, ZeptoMail permite usar un modo sandbox limitado:

1. Ve a **"Settings"** > **"Sandbox"** en el panel de ZeptoMail
2. Agrega las direcciones de correo que usarás para pruebas
3. Verifica cada dirección desde su bandeja de entrada
4. Usa estas direcciones en `CONTACT_EMAIL_TO` durante el desarrollo

**Limitaciones del Sandbox:**
- Solo puedes enviar a direcciones verificadas en tu cuenta
- Límite de correos por día reducido
- Los correos llevan una marca de "Sandbox"

### Reiniciar el Servidor de Desarrollo

Después de configurar las variables de entorno:

```bash
# Detén el servidor si está corriendo (Ctrl+C)
# Luego inicia nuevamente
npm run dev
```

## Uso en Producción

### Requisitos para Producción

1. ✅ **Dominio verificado** en ZeptoMail
2. ✅ **Registros DNS configurados** (SPF, DKIM)
3. ✅ **Variables de entorno configuradas** en tu servidor
4. ✅ **Plan adecuado** según el volumen de correos

### Configurar en Vercel/Netlify

Si despliegas en Vercel, Netlify u otro servicio:

1. Ve a las configuraciones de tu proyecto
2. Agrega las variables de entorno:
   - `ZEPTOMAIL_SMTP_HOST`
   - `ZEPTOMAIL_SMTP_PORT`
   - `ZEPTOMAIL_SMTP_USER`
   - `ZEPTOMAIL_SMTP_PASS`
   - `ZEPTOMAIL_FROM`
   - `CONTACT_EMAIL_TO`
3. Redespliega la aplicación

## Estructura de Archivos

```
src/
├── app/
│   └── api/
│       └── send-contact/
│           └── route.ts          # API endpoint con SMTP de ZeptoMail
├── components/
│   └── sections/
│       └── ContactSection.tsx    # Componente con formulario de contacto
└── emails/
    └── ContactEmail.tsx          # Templates HTML de correos
```

## Funcionalidades Implementadas

✅ **Correo al Instituto:**
- Notificación completa de la consulta
- Información del remitente
- Departamento seleccionado
- Mensaje completo
- Botón de respuesta directa

✅ **Correo de Confirmación:**
- Confirmación automática al remitente
- Resumen de la consulta enviada
- Tiempo estimado de respuesta
- Información de contacto directo

✅ **Características Técnicas:**
- Validación de datos del formulario
- Manejo de errores robusto
- Reintentos automáticos
- Indicadores de carga y éxito
- Templates HTML responsive

## Límites y Planes de ZeptoMail

### Plan Gratuito (Free)
- **10,000 correos/mes** gratis permanente
- Sin límite diario específico
- Sin expiración
- Perfecto para sitios pequeños/medianos

### Planes Pagos (si necesitas más)
- **PAY AS YOU GO:** $2.50 por cada 10,000 correos adicionales
- **MONTHLY:** Desde $7.50/mes por 25,000 correos
- Sin compromisos a largo plazo
- Escalamiento flexible

## Monitoreo y Logs

### Ver logs de envíos:

1. Ve al panel de ZeptoMail
2. Accede a **"Email Logs"**
3. Filtra por:
   - Fecha y hora
   - Estado (Enviado, Fallido, Rebotado)
   - Dirección de destino
   - Asunto

### Métricas importantes:
- **Delivery Rate:** Tasa de entrega exitosa
- **Bounce Rate:** Tasa de rebote
- **Complaint Rate:** Tasa de quejas (spam)

## Solución de Problemas

### Error: "Error de autenticación con el servidor de correo"
- Verifica que `ZEPTOMAIL_SMTP_USER` y `ZEPTOMAIL_SMTP_PASS` sean correctos
- Asegúrate de que el SMTP esté habilitado en tu cuenta de ZeptoMail

### Los correos no llegan
1. Verifica que el dominio esté verificado en ZeptoMail
2. Revisa los logs en el panel de ZeptoMail
3. Verifica la carpeta de spam del destinatario
4. Confirma que los registros SPF y DKIM estén configurados

### Error: "No se pudo conectar al servidor de correo"
- Verifica que `ZEPTOMAIL_SMTP_HOST` sea `smtp.zeptomail.com`
- Confirma que el puerto sea `587` o `465`
- Revisa que tu firewall permita conexiones SMTP salientes

### Los correos van a spam
- Asegúrate de que los registros SPF y DKIM estén configurados
- Evita palabras comunes de spam en los asuntos
- Mantén una buena reputación de remitente
- Usa un correo `From` de tu dominio verificado

## Mejores Prácticas

1. **Siempre usa tu dominio verificado** para el correo remitente
2. **Configura SPF y DKIM** correctamente
3. **Monitorea tus métricas** regularmente en el panel de ZeptoMail
4. **Responde rápido** a las consultas para mantener buena reputación
5. **Usa plantillas HTML** limpias y profesionales
6. **Incluye opción de reply-to** con el correo del remitente
7. **No envíes spam** o correos no solicitados

## Diferencias con Resend

| Característica | ZeptoMail (SMTP) | Resend (API) |
|---------------|------------------|--------------|
| Protocolo | SMTP | REST API |
| Integración | Nodemailer | SDK de Resend |
| Límite Gratuito | 10,000/mes | 3,000/mes |
| Configuración | DNS completo | Más simple |
| Flexibilidad | Alta (SMTP estándar) | Media (API específica) |
| Monitoreo | Panel completo | Panel básico |

## Recursos Adicionales

- [Documentación oficial de ZeptoMail](https://www.zoho.com/zeptomail/help/)
- [Guía de configuración DNS](https://www.zoho.com/zeptomail/help/domain-authentication.html)
- [API de ZeptoMail](https://www.zoho.com/zeptomail/help/api/)
- [Mejores prácticas de entregabilidad](https://www.zoho.com/zeptomail/help/deliverability.html)

## Soporte

Si tienes problemas con la configuración de ZeptoMail:
- Revisa la [documentación oficial](https://www.zoho.com/zeptomail/help/)
- Contacta al soporte de ZeptoMail desde tu panel
- Revisa los logs de la aplicación en la consola del servidor
- Verifica el estado del servicio en [status.zoho.com](https://status.zoho.com/)
