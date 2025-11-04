# 🎓 Centro de Educación Bilingüe Carmelitano San José

Sitio web oficial del Centro de Educación Bilingüe Carmelitano San José - Una plataforma moderna y profesional para presentar nuestra institución educativa.

![Next.js](https://img.shields.io/badge/Next.js-16.0.1-black?style=for-the-badge&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0.0-blue?style=for-the-badge&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4.0-38B2AC?style=for-the-badge&logo=tailwind-css)

## 🌐 Repositorio

🔗 **[GitHub Repository](https://github.com/ingricardotoro/carmelitano)**

## ✨ Características

### 🖥️ Diseño Profesional
- **Diseño inspirado** en sitios web modernos y profesionales
- **Responsive design** que se adapta a todos los dispositivos
- **Animaciones suaves** con Framer Motion para una experiencia fluida
- **Paleta de colores** institucional con gradientes elegantes

### 📱 Secciones Principales
- **🏠 Inicio** - Hero section con carrusel de imágenes
- **👥 Nosotros** - Historia, misión, visión y valores
- **📚 Modalidades** - Programas educativos ofrecidos
- **🖼️ Galería** - Fotografías organizadas por categorías
- **📋 Matrícula** - Información de inscripción y becas
- **📧 Contáctanos** - Formulario de contacto y ubicación

### 🎯 Funcionalidades Especiales
- **Navegación suave** entre secciones con scroll animado
- **Galería fotográfica** con lightbox y navegación por categorías
- **Formulario de contacto** con validación en tiempo real
- **Optimización de imágenes** con Next.js Image
- **SEO optimizado** con metadata dinámico

## 🛠️ Tecnologías Utilizadas

| Tecnología | Versión | Propósito |
|------------|---------|-----------|
| **Next.js** | 16.0.1 | Framework React con App Router |
| **TypeScript** | 5.0+ | Tipado estático para JavaScript |
| **Tailwind CSS** | 3.4.0 | Framework de CSS utility-first |
| **Framer Motion** | 12.23.24 | Animaciones y transiciones |
| **Lucide React** | - | Iconografía moderna |
| **React Hook Form** | - | Manejo de formularios |

## 🚀 Instalación y Desarrollo

### Prerrequisitos
- Node.js 18.0 o superior
- npm o yarn

### Instalación
```bash
# Clonar el repositorio
git clone https://github.com/ingricardotoro/carmelitano.git

# Navegar al directorio
cd carmelitano

# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev
```

### Scripts Disponibles
```bash
npm run dev      # Servidor de desarrollo
npm run build    # Construcción para producción
npm run start    # Servidor de producción
npm run lint     # Verificar código con ESLint
```

## 📁 Estructura del Proyecto

```
carmelitano/
├── public/
│   ├── images/
│   │   ├── banner/          # Imágenes del carrusel
│   │   ├── gallery/         # Galería fotográfica
│   │   └── logo.jpeg        # Logo institucional
├── src/
│   ├── app/
│   │   ├── galeria/         # Página de galería
│   │   ├── layout.tsx       # Layout principal
│   │   └── page.tsx         # Página de inicio
│   └── components/
│       ├── layout/
│       │   ├── Header.tsx   # Navegación principal
│       │   └── Footer.tsx   # Pie de página
│       └── sections/
│           ├── HeroSection.tsx
│           ├── AboutSection.tsx
│           ├── ModalitiesSection.tsx
│           ├── Gallery.tsx
│           ├── EnrollmentSection.tsx
│           └── ContactSection.tsx
```

## 🎨 Galería Fotográfica

La galería está organizada en categorías:

- **📚 Giras y Retiros Espirituales** - Actividades pedagógicas y espirituales
- **👨‍🎓 Actividades Académicas** - Momentos de aprendizaje en el aula
- **🌱 Reforestación** - Proyectos ambientales estudiantiles
- **🎓 Graduados** - Celebraciones y logros académicos

Cada categoría incluye:
- Vista de cuadrícula responsive
- Lightbox para visualización ampliada
- Navegación entre imágenes con teclado
- Descripción de cada fotografía

## 🌐 Despliegue

### Vercel (Recomendado)
```bash
# Instalar Vercel CLI
npm i -g vercel

# Desplegar
vercel
```

### Otras Plataformas
- **Netlify**: Conectar repositorio y despliegue automático
- **AWS Amplify**: Hosting con CI/CD integrado
- **GitHub Pages**: Para sitios estáticos

## 📊 Características Técnicas

### Performance
- **Lazy Loading** de imágenes y componentes
- **Optimización automática** de imágenes con Next.js
- **Bundle splitting** para cargas más rápidas
- **Core Web Vitals** optimizados

### SEO
- **Meta tags** dinámicos para cada página
- **Structured data** para motores de búsqueda
- **Open Graph** tags para redes sociales
- **Sitemap** automático

### Accesibilidad
- **Navegación por teclado** completa
- **Screen reader** friendly
- **Contraste de colores** WCAG 2.1 AA
- **Focus management** apropiado

## 📞 Contacto

**Centro de Educación Bilingüe Carmelitano San José**
- 🌐 Sitio web: [https://github.com/ingricardotoro/carmelitano](https://github.com/ingricardotoro/carmelitano)
- 📧 Email: info@carmelitanosanjose.edu
- 📱 Redes sociales: 
  - [Facebook](https://www.facebook.com/p/Instituto-Carmelitano-San-José-Oficial-100063891044026/)
  - [Instagram](https://www.instagram.com/instituto_carmelitano_san_jose/)

## 🤝 Contribución

Las contribuciones son bienvenidas. Por favor:

1. Fork el proyecto
2. Crear una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abrir un Pull Request

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo `LICENSE` para más detalles.

---

**Desarrollado con ❤️ para la comunidad educativa del Centro de Educación Bilingüe Carmelitano San José**