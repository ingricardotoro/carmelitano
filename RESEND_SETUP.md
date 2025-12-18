# Configuración de Resend para el Instituto Carmelitano San José

Este proyecto utiliza [Resend](https://resend.com/) para el envío de correos electrónicos desde el formulario de agendamiento de visitas.

## Configuración Inicial

### 1. Crear una cuenta en Resend

1. Ve a [https://resend.com/](https://resend.com/) y crea una cuenta
2. Confirma tu correo electrónico

### 2. Obtener tu API Key

1. Accede a tu dashboard de Resend
2. Ve a la sección "API Keys" en [https://resend.com/api-keys](https://resend.com/api-keys)
3. Haz clic en "Create API Key"
4. Dale un nombre descriptivo (ej: "Instituto Carmelitano Production")
5. Selecciona los permisos necesarios (recomendado: "Sending access")
6. Copia la API key generada

### 3. Configurar tu Dominio (Recomendado para producción)

Para usar tu propio dominio en lugar del dominio de prueba:

1. Ve a "Domains" en tu dashboard de Resend
2. Haz clic en "Add Domain"
3. Ingresa tu dominio (ej: `carmelitanosanjose.edu.hn`)
4. Sigue las instrucciones para agregar los registros DNS:
   - SPF
   - DKIM
   - DMARC
5. Espera la verificación (puede tomar hasta 48 horas)

### 4. Configurar Variables de Entorno

Edita el archivo `.env.local` en la raíz del proyecto:

```env
# API Key de Resend (requerido)
RESEND_API_KEY=re_tu_api_key_aqui

# Correo remitente (usar dominio verificado o onboarding@resend.dev para pruebas)
EMAIL_FROM=Instituto Carmelitano <noreply@carmelitanosanjose.edu.hn>

# O para pruebas:
# EMAIL_FROM=Instituto Carmelitano <onboarding@resend.dev>

# Correos que recibirán las notificaciones (separados por comas)
EMAIL_TO=info@carmelitanosanjose.edu.hn,scarmelitano@yahoo.com
```

## Uso en Desarrollo

### Con dominio de prueba (onboarding@resend.dev)

Resend proporciona un dominio de prueba que puedes usar inmediatamente sin configuración DNS:

```env
EMAIL_FROM=Instituto Carmelitano <onboarding@resend.dev>
```

**Limitaciones del dominio de prueba:**
- Solo puedes enviar correos a direcciones de correo que hayas agregado y verificado en tu cuenta de Resend
- Los correos pueden ser marcados como spam con mayor frecuencia
- No es recomendado para producción

### Agregar correos de prueba

1. Ve a "Settings" > "Email Addresses" en tu dashboard
2. Agrega las direcciones de correo donde quieres probar
3. Confirma cada dirección desde su bandeja de entrada

## Uso en Producción

1. **Verifica tu dominio** siguiendo los pasos de la sección 3
2. **Actualiza EMAIL_FROM** con tu dominio verificado:
   ```env
   EMAIL_FROM=Instituto Carmelitano <noreply@carmelitanosanjose.edu.hn>
   ```
3. **Monitorea tus envíos** desde el dashboard de Resend

## Estructura de Archivos

```
src/
├── app/
│   └── api/
│       └── send-appointment/
│           └── route.ts          # API endpoint para envío de correos
├── components/
│   └── sections/
│       └── ContactSection.tsx    # Componente con formulario de citas
└── emails/
    └── AppointmentEmail.tsx      # Template HTML del correo
```

## Funcionalidades Implementadas

✅ Envío de correo al instituto con los detalles de la cita
✅ Correo de confirmación automático al solicitante
✅ Template HTML responsive y profesional
✅ Validación de datos del formulario
✅ Manejo de errores
✅ Indicadores de carga y éxito

## Límites y Planes

### Plan Gratuito
- 100 correos por día
- 3,000 correos por mes
- Perfecto para comenzar

### Plan Pro (si necesitas más)
- $20/mes por 50,000 correos
- Sin límite diario
- Soporte prioritario

## Solución de Problemas

### Error: "Configuración de correo no disponible"
- Verifica que `RESEND_API_KEY` esté configurada en `.env.local`
- Reinicia el servidor de desarrollo

### Los correos no llegan
- Verifica que el dominio esté verificado (si no usas onboarding@resend.dev)
- Revisa los logs en el dashboard de Resend
- Verifica la carpeta de spam

### Error 403 o 401
- Tu API key puede ser inválida o no tener los permisos correctos
- Genera una nueva API key desde el dashboard

## Recursos Adicionales

- [Documentación de Resend](https://resend.com/docs)
- [Guía de verificación de dominio](https://resend.com/docs/dashboard/domains/introduction)
- [API Reference](https://resend.com/docs/api-reference/emails/send-email)

## Soporte

Si tienes problemas con la configuración de Resend:
- Revisa la [documentación oficial](https://resend.com/docs)
- Contacta al soporte de Resend desde tu dashboard
- Revisa los logs de la aplicación en la consola del navegador
