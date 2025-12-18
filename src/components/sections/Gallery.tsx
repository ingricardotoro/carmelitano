'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  X, 
  ChevronLeft, 
  ChevronRight, 
  Camera, 
  MapPin, 
  Calendar,
  Users,
  Building,
  Trophy,
  Home,
  ArrowLeft
} from 'lucide-react'

// Configuración de categorías de la galería
const galleryCategories = [
  {
    id: 'eventos',
    name: 'Giras y Retiros Espirituales',
    icon: Building,
    description: 'Giras Pedagógicas y Retiros Espirituales',
    color: 'from-blue-500 to-cyan-500',
    // Por ahora uso placeholders, luego puedes reemplazar con las rutas reales
    images: [
      { src: '/images/gallery/giras_y_retiros/eventos (1).jpeg', title: 'Aula de Primaria', description: 'Ambiente de aprendizaje interactivo' },
      { src: '/images/gallery/giras_y_retiros/eventos (2).jpeg', title: 'Laboratorio de Ciencias', description: 'Equipado con tecnología moderna' },
      { src: '/images/gallery/giras_y_retiros/eventos (3).jpeg', title: 'Aula de Inglés', description: 'Espacio bilingüe especializado' },
      { src: '/images/gallery/giras_y_retiros/eventos (4).jpeg', title: 'Aula de Inglés', description: 'Espacio bilingüe especializado' },
      { src: '/images/gallery/giras_y_retiros/eventos (5).jpeg', title: 'Aula de Inglés', description: 'Espacio bilingüe especializado' },
      { src: '/images/gallery/giras_y_retiros/eventos (6).jpeg', title: 'Aula de Inglés', description: 'Espacio bilingüe especializado' },
      { src: '/images/gallery/giras_y_retiros/eventos (7).jpeg', title: 'Aula de Inglés', description: 'Espacio bilingüe especializado' },
      { src: '/images/gallery/giras_y_retiros/eventos (8).jpeg', title: 'Aula de Inglés', description: 'Espacio bilingüe especializado' },
      { src: '/images/gallery/giras_y_retiros/eventos (9).jpeg', title: 'Aula de Inglés', description: 'Espacio bilingüe especializado' },
      { src: '/images/gallery/giras_y_retiros/eventos (10).jpeg', title: 'Aula de Inglés', description: 'Espacio bilingüe especializado' },
      { src: '/images/gallery/giras_y_retiros/eventos (11).jpeg', title: 'Aula de Inglés', description: 'Espacio bilingüe especializado' },
      { src: '/images/gallery/giras_y_retiros/eventos (12).jpeg', title: 'Aula de Inglés', description: 'Espacio bilingüe especializado' },
      { src: '/images/gallery/giras_y_retiros/eventos (13).jpeg', title: 'Aula de Inglés', description: 'Espacio bilingüe especializado' },
      { src: '/images/gallery/giras_y_retiros/eventos (14).jpeg', title: 'Aula de Inglés', description: 'Espacio bilingüe especializado' },
      { src: '/images/gallery/giras_y_retiros/eventos (15).jpeg', title: 'Aula de Inglés', description: 'Espacio bilingüe especializado' },
      { src: '/images/gallery/giras_y_retiros/eventos (16).jpeg', title: 'Aula de Inglés', description: 'Espacio bilingüe especializado' },
    ]
  },
  {
    id: 'actividades',
    name: 'Actividades Académicas',
    icon: Users,
    description: 'Momentos de aprendizaje y crecimiento',
    color: 'from-green-500 to-emerald-500',
    images: [
      { src: '/images/gallery/actividades/activity (1).jpeg', title: 'Clase Interactiva', description: 'Metodología participativa' },
      { src: '/images/gallery/actividades/activity (2).jpeg', title: 'Proyecto Grupal', description: 'Trabajo colaborativo' },
      { src: '/images/gallery/actividades/activity (3).jpeg', title: 'Presentación', description: 'Desarrollo de habilidades comunicativas' },
      { src: '/images/gallery/actividades/activity (4).jpeg', title: 'Clase Interactiva', description: 'Metodología participativa' },
      { src: '/images/gallery/actividades/activity (5).jpeg', title: 'Proyecto Grupal', description: 'Trabajo colaborativo' },
      { src: '/images/gallery/actividades/activity (6).jpeg', title: 'Presentación', description: 'Desarrollo de habilidades comunicativas' },
      { src: '/images/gallery/actividades/activity (7).jpeg', title: 'Clase Interactiva', description: 'Metodología participativa' },
      { src: '/images/gallery/actividades/activity (8).jpeg', title: 'Proyecto Grupal', description: 'Trabajo colaborativo' },
      { src: '/images/gallery/actividades/activity (9).jpeg', title: 'Presentación', description: 'Desarrollo de habilidades comunicativas' },
      { src: '/images/gallery/actividades/activity (10).jpeg', title: 'Clase Interactiva', description: 'Metodología participativa' },
      { src: '/images/gallery/actividades/activity (11).jpeg', title: 'Proyecto Grupal', description: 'Trabajo colaborativo' },
      { src: '/images/gallery/actividades/activity (12).jpeg', title: 'Presentación', description: 'Desarrollo de habilidades comunicativas' },
      { src: '/images/gallery/actividades/activity (13).jpeg', title: 'Clase Interactiva', description: 'Metodología participativa' },
      { src: '/images/gallery/actividades/activity (14).jpeg', title: 'Proyecto Grupal', description: 'Trabajo colaborativo' },
      { src: '/images/gallery/actividades/activity (15).jpeg', title: 'Presentación', description: 'Desarrollo de habilidades comunicativas' },
      { src: '/images/gallery/actividades/activity (16).jpeg', title: 'Clase Interactiva', description: 'Metodología participativa' },
      { src: '/images/gallery/actividades/activity (17).jpeg', title: 'Proyecto Grupal', description: 'Trabajo colaborativo' },
      { src: '/images/gallery/actividades/activity (18).jpeg', title: 'Presentación', description: 'Desarrollo de habilidades comunicativas' },
      { src: '/images/gallery/actividades/activity (19).jpeg', title: 'Clase Interactiva', description: 'Metodología participativa' },
      { src: '/images/gallery/actividades/activity (20).jpeg', title: 'Proyecto Grupal', description: 'Trabajo colaborativo' },
      { src: '/images/gallery/actividades/activity (21).jpeg', title: 'Presentación', description: 'Desarrollo de habilidades comunicativas' },
      { src: '/images/gallery/actividades/activity (22).jpeg', title: 'Clase Interactiva', description: 'Metodología participativa' },
      { src: '/images/gallery/actividades/activity (23).jpeg', title: 'Proyecto Grupal', description: 'Trabajo colaborativo' },
      { src: '/images/gallery/actividades/activity (24).jpeg', title: 'Presentación', description: 'Desarrollo de habilidades comunicativas' },
      { src: '/images/gallery/actividades/activity (25).jpeg', title: 'Clase Interactiva', description: 'Metodología participativa' },
      { src: '/images/gallery/actividades/activity (26).jpeg', title: 'Proyecto Grupal', description: 'Trabajo colaborativo' },
      { src: '/images/gallery/actividades/activity (27).jpeg', title: 'Presentación', description: 'Desarrollo de habilidades comunicativas' },
      { src: '/images/gallery/actividades/activity (28).jpeg', title: 'Clase Interactiva', description: 'Metodología participativa' },
      { src: '/images/gallery/actividades/activity (29).jpeg', title: 'Proyecto Grupal', description: 'Trabajo colaborativo' },
      { src: '/images/gallery/actividades/activity (30).jpeg', title: 'Presentación', description: 'Desarrollo de habilidades comunicativas' },
      { src: '/images/gallery/actividades/activity (31).jpeg', title: 'Clase Interactiva', description: 'Metodología participativa' },
      { src: '/images/gallery/actividades/activity (32).jpeg', title: 'Proyecto Grupal', description: 'Trabajo colaborativo' },
      { src: '/images/gallery/actividades/activity (33).jpeg', title: 'Presentación', description: 'Desarrollo de habilidades comunicativas' },
      { src: '/images/gallery/actividades/activity (34).jpeg', title: 'Clase Interactiva', description: 'Metodología participativa' },
      { src: '/images/gallery/actividades/activity (35).jpeg', title: 'Proyecto Grupal', description: 'Trabajo colaborativo' },
      { src: '/images/gallery/actividades/activity (36).jpeg', title: 'Presentación', description: 'Desarrollo de habilidades comunicativas' },
      { src: '/images/gallery/actividades/activity (37).jpeg', title: 'Clase Interactiva', description: 'Metodología participativa' },
      { src: '/images/gallery/actividades/activity (38).jpeg', title: 'Proyecto Grupal', description: 'Trabajo colaborativo' },
    ]
  },
  {
    id: 'instalaciones',
    name: 'Instalaciones',
    icon: Calendar,
    description: 'Celebraciones y actividades comunitarias',
    color: 'from-purple-500 to-indigo-500',
    images: [
      { src: '/images/gallery/instalaciones/instalaciones (8).jpeg', title: 'Graduación', description: 'Celebrando logros académicos' },
      { src: '/images/gallery/instalaciones/instalaciones (2).jpeg', title: 'Festival Cultural', description: 'Diversidad y tradición' },
      { src: '/images/gallery/instalaciones/instalaciones (3).jpeg', title: 'Día de la Familia', description: 'Uniendo la comunidad educativa' },
      { src: '/images/gallery/instalaciones/instalaciones (4).jpeg', title: 'Graduación', description: 'Celebrando logros académicos' },
      { src: '/images/gallery/instalaciones/instalaciones (5).jpeg', title: 'Festival Cultural', description: 'Diversidad y tradición' },
      { src: '/images/gallery/instalaciones/instalaciones (6).jpeg', title: 'Día de la Familia', description: 'Uniendo la comunidad educativa' },
      { src: '/images/gallery/instalaciones/instalaciones (7).jpeg', title: 'Graduación', description: 'Celebrando logros académicos' },
      { src: '/images/gallery/instalaciones/instalaciones (1).jpeg', title: 'Festival Cultural', description: 'Diversidad y tradición' },
      { src: '/images/gallery/instalaciones/instalaciones (9).jpeg', title: 'Día de la Familia', description: 'Uniendo la comunidad educativa' },
    ]
  },
  {
    id: 'reforestacion',
    name: 'Reforestación',
    icon: MapPin,
    description: 'Actividades estudiantil de reforestación',
    color: 'from-orange-500 to-red-500',
    images: [
      { src: '/images/gallery/reforestacion/reforestacion (1).jpeg', title: 'Biblioteca', description: 'Centro de recursos educativos' },
      { src: '/images/gallery/reforestacion/reforestacion (2).jpeg', title: 'Cafetería', description: 'Espacio de convivencia' },
      { src: '/images/gallery/reforestacion/reforestacion (3).jpeg', title: 'Patio Central', description: 'Área de recreación' },
      { src: '/images/gallery/reforestacion/reforestacion (4).jpeg', title: 'Biblioteca', description: 'Centro de recursos educativos' },
      { src: '/images/gallery/reforestacion/reforestacion (5).jpeg', title: 'Cafetería', description: 'Espacio de convivencia' },
      { src: '/images/gallery/reforestacion/reforestacion (6).jpeg', title: 'Patio Central', description: 'Área de recreación' },
      { src: '/images/gallery/reforestacion/reforestacion (7).jpeg', title: 'Biblioteca', description: 'Centro de recursos educativos' },
      { src: '/images/gallery/reforestacion/reforestacion (8).jpeg', title: 'Cafetería', description: 'Espacio de convivencia' },
      { src: '/images/gallery/reforestacion/reforestacion (9).jpeg', title: 'Patio Central', description: 'Área de recreación' },
      { src: '/images/gallery/reforestacion/reforestacion (10).jpeg', title: 'Biblioteca', description: 'Centro de recursos educativos' },
      { src: '/images/gallery/reforestacion/reforestacion (11).jpeg', title: 'Cafetería', description: 'Espacio de convivencia' },
      { src: '/images/gallery/reforestacion/reforestacion (12).jpeg', title: 'Patio Central', description: 'Área de recreación' },
    ]
  },
  {
    id: 'graduados',
    name: 'Celebración Carmelitana',
    icon: Trophy,
    description: 'En Honor a nuestra fundadora Madre Clarita',
    color: 'from-yellow-500 to-orange-500',
    images: [
      { src: '/images/gallery/graduados/graduados (1).jpeg', title: 'Foto estudiantil', description: 'En Honor a Madre Clarita' },
      { src: '/images/gallery/graduados/graduados (2).jpeg', title: 'Foto estudiantil', description: 'En Honor a Madre Clarita' },
      { src: '/images/gallery/graduados/graduados (3).jpeg', title: 'Foto estudiantil', description: 'En Honor a Madre Clarita' },
      { src: '/images/gallery/graduados/graduados (4).jpeg', title: 'Foto estudiantil', description: 'En Honor a Madre Clarita' },
      { src: '/images/gallery/graduados/graduados (5).jpeg', title: 'Foto estudiantil', description: 'En Honor a Madre Clarita' },
      { src: '/images/gallery/graduados/graduados (6).jpeg', title: 'Foto estudiantil', description: 'En Honor a Madre Clarita' },
      { src: '/images/gallery/graduados/graduados (7).jpeg', title: 'Foto estudiantil', description: 'En Honor a Madre Clarita' },
      { src: '/images/gallery/graduados/graduados (8).jpeg', title: 'Foto estudiantil', description: 'En Honor a Madre Clarita' },
      { src: '/images/gallery/graduados/graduados (9).jpeg', title: 'Foto estudiantil', description: 'En Honor a Madre Clarita' },
      { src: '/images/gallery/graduados/graduados (10).jpeg', title: 'Foto estudiantil', description: 'En Honor a Madre Clarita' },
      { src: '/images/gallery/graduados/graduados (11).jpeg', title: 'Foto estudiantil', description: 'En Honor a Madre Clarita' },
      { src: '/images/gallery/graduados/graduados (12).jpeg', title: 'Foto estudiantil', description: 'En Honor a Madre Clarita' },
    ]
  }

  ,
  {
    id: 'graduacion25',
    name: 'Graduaciones año 2025',
    icon: Trophy,
    description: 'Ceremonias de graduación del año 2025',
    color: 'from-yellow-500 to-orange-500',
    images: [
      { src: '/images/gallery/graduacion25/graduacion1.jpg', title: 'Foto estudiantil', description: 'En Honor a Madre Clarita' },
      { src: '/images/gallery/graduacion25/graduacion2.jpg', title: 'Foto estudiantil', description: 'En Honor a Madre Clarita' },
      { src: '/images/gallery/graduacion25/graduacion3.jpg', title: 'Foto estudiantil', description: 'En Honor a Madre Clarita' },
      { src: '/images/gallery/graduacion25/graduacion4.jpg', title: 'Foto estudiantil', description: 'En Honor a Madre Clarita' },
      { src: '/images/gallery/graduacion25/graduacion5.jpg', title: 'Foto estudiantil', description: 'En Honor a Madre Clarita' },
      { src: '/images/gallery/graduacion25/graduacion6.jpg', title: 'Foto estudiantil', description: 'En Honor a Madre Clarita' },
      { src: '/images/gallery/graduacion25/graduacion7.jpg', title: 'Foto estudiantil', description: 'En Honor a Madre Clarita' },
      { src: '/images/gallery/graduacion25/graduacion8.jpg', title: 'Foto estudiantil', description: 'En Honor a Madre Clarita' },
      { src: '/images/gallery/graduacion25/graduacion9.jpg', title: 'Foto estudiantil', description: 'En Honor a Madre Clarita' },
      { src: '/images/gallery/graduacion25/graduacion10.jpg', title: 'Foto estudiantil', description: 'En Honor a Madre Clarita' },
      { src: '/images/gallery/graduacion25/graduacion11.jpg', title: 'Foto estudiantil', description: 'En Honor a Madre Clarita' },
      { src: '/images/gallery/graduacion25/graduacion11_2.jpg', title: 'Foto estudiantil', description: 'En Honor a Madre Clarita' },
      { src: '/images/gallery/graduacion25/graduacion11_3.jpg', title: 'Foto estudiantil', description: 'En Honor a Madre Clarita' },
      { src: '/images/gallery/graduacion25/graduacion12.jpg', title: 'Foto estudiantil', description: 'En Honor a Madre Clarita' },
      { src: '/images/gallery/graduacion25/graduacion13.jpg', title: 'Foto estudiantil', description: 'En Honor a Madre Clarita' },
      { src: '/images/gallery/graduacion25/graduacion14.jpg', title: 'Foto estudiantil', description: 'En Honor a Madre Clarita' },
      { src: '/images/gallery/graduacion25/graduacion15.jpg', title: 'Foto estudiantil', description: 'En Honor a Madre Clarita' },
      { src: '/images/gallery/graduacion25/graduacion16.jpg', title: 'Foto estudiantil', description: 'En Honor a Madre Clarita' },
      { src: '/images/gallery/graduacion25/graduacion17.jpg', title: 'Foto estudiantil', description: 'En Honor a Madre Clarita' },
    ]
  }
]

interface GalleryProps {
  readonly showHeader?: boolean
}

export default function Gallery({ showHeader = true }: Readonly<GalleryProps>) {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)
  const [selectedImage, setSelectedImage] = useState<number | null>(null)
  const [isLightboxOpen, setIsLightboxOpen] = useState(false)

  const getCurrentCategoryImages = () => {
    if (!selectedCategory) return []
    const category = galleryCategories.find(cat => cat.id === selectedCategory)
    return category?.images || []
  }

  const openLightbox = (imageIndex: number) => {
    setSelectedImage(imageIndex)
    setIsLightboxOpen(true)
  }

  const closeLightbox = () => {
    setIsLightboxOpen(false)
    setSelectedImage(null)
  }

  const nextImage = () => {
    const images = getCurrentCategoryImages()
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % images.length)
    }
  }

  const prevImage = () => {
    const images = getCurrentCategoryImages()
    if (selectedImage !== null) {
      setSelectedImage((selectedImage - 1 + images.length) % images.length)
    }
  }

  const resetView = () => {
    setSelectedCategory(null)
    setSelectedImage(null)
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Menú Superior de Navegación */}
      <motion.nav
        initial={{ y: -60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-200/20 sticky top-0 z-40"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo y Título */}
            <Link href="/" className="flex items-center space-x-3 hover:opacity-80 transition-opacity">
              <div className="bg-primary-600 p-2 rounded-xl">
                <Image
                  src="/images/logo.jpeg"
                  alt="Centro de Educación Bilingüe Carmelitano San José"
                  width={28}
                  height={28}
                  className="rounded-lg object-cover"
                />
              </div>
              <div>
                <h1 className="text-lg font-bold font-display text-gray-900">
                  Carmelitano San José
                </h1>
                <p className="text-xs text-gray-600">
                  Galería Fotográfica
                </p>
              </div>
            </Link>

            {/* Navegación */}
            <div className="flex items-center space-x-4">
              <Link href="/">
                <motion.button
                  className="flex items-center space-x-2 px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <ArrowLeft className="h-4 w-4" />
                  <span className="hidden sm:inline">Volver al Inicio</span>
                  <span className="sm:hidden">Inicio</span>
                </motion.button>
              </Link>
              
              <Link href="/#contacto">
                <motion.button
                  className="flex items-center space-x-2 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Home className="h-4 w-4" />
                  <span className="hidden sm:inline">Contáctanos</span>
                </motion.button>
              </Link>
            </div>
          </div>
        </div>
      </motion.nav>

      {showHeader && (
        <div className="bg-white shadow-sm border-b">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <div className="flex items-center justify-center mb-6">
                <div className="bg-primary-600 p-3 rounded-full mr-4">
                  <Camera className="h-8 w-8 text-white" />
                </div>
                <h1 className="text-4xl md:text-5xl font-bold font-display text-gradient">
                  Galería Fotográfica
                </h1>
              </div>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Descubre la vida académica, las instalaciones y los momentos especiales 
                que hacen única nuestra comunidad educativa.
              </p>
            </motion.div>
          </div>
        </div>
      )}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {selectedCategory === null ? (
          // Vista de categorías
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {galleryCategories.map((category, index) => (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                onClick={() => setSelectedCategory(category.id)}
                className="bg-white rounded-2xl shadow-lg overflow-hidden cursor-pointer hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              >
                {/* Header con gradiente */}
                <div className={`bg-gradient-to-r ${category.color} p-8 text-white`}>
                  <div className="flex items-center mb-4">
                    <category.icon className="h-8 w-8 mr-3" />
                    <h3 className="text-xl font-bold">{category.name}</h3>
                  </div>
                  <p className="text-white/90 text-sm">{category.description}</p>
                </div>

                {/* Preview de imágenes */}
                <div className="p-6">
                  <div className="grid grid-cols-3 gap-2 mb-4">
                    {category.images.slice(0, 3).map((image, imgIndex) => (
                      <div key={`${category.id}-preview-${imgIndex}`} className="aspect-square bg-gray-200 rounded-lg overflow-hidden">
                        {/* Placeholder para las imágenes */}
                        <div className="w-full h-full bg-gradient-to-br from-gray-300 to-gray-400 flex items-center justify-center">
                          {/* <Camera className="h-6 w-6 text-gray-500" /> */}
                        <img
                            src={image.src}
                            alt={image.title}
                            className="w-full h-full object-cover"
                        />
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="text-center">
                    <span className="text-gray-600 text-sm">
                      {category.images.length} fotografías
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        ) : (
          // Vista de imágenes de la categoría seleccionada
          <div>
            {/* Breadcrumb */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="mb-8"
            >
              <button
                onClick={resetView}
                className="flex items-center text-primary-600 hover:text-primary-700 font-medium"
              >
                <ChevronLeft className="h-5 w-5 mr-1" />
                Volver a categorías
              </button>
            </motion.div>

            {/* Título de la categoría */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center mb-12"
            >
              {(() => {
                const category = galleryCategories.find(cat => cat.id === selectedCategory)
                return category ? (
                  <>
                    <div className="flex items-center justify-center mb-4">
                      <category.icon className="h-8 w-8 text-primary-600 mr-3" />
                      <h2 className="text-3xl font-bold font-display">{category.name}</h2>
                    </div>
                    <p className="text-gray-600">{category.description}</p>
                  </>
                ) : null
              })()}
            </motion.div>

            {/* Grid de imágenes */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {getCurrentCategoryImages().map((image, index) => (
                <motion.div
                  key={`${selectedCategory}-${index}-${image.title}`}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  onClick={() => openLightbox(index)}
                  className="bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="aspect-square bg-gray-200 relative overflow-hidden">
                    {/* Placeholder para las imágenes */}
                    <div className="w-full h-full bg-gradient-to-br from-gray-300 to-gray-400 flex items-center justify-center hover:from-primary-100 hover:to-primary-200 transition-colors duration-300">
                      {/* <Camera className="h-12 w-12 text-gray-500" /> */}
                      <img
                            src={image.src}
                            alt={image.title}
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
                      <div className="bg-white bg-opacity-90 p-2 rounded-full opacity-0 hover:opacity-100 transition-opacity duration-300">
                        {/* <Camera className="h-6 w-6 text-gray-700" /> */}
                        <img
                            src={image.src}
                            alt={image.title}
                            className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 mb-1">{image.title}</h4>
                    <p className="text-gray-600 text-sm">{image.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {isLightboxOpen && selectedImage !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
            onClick={closeLightbox}
          >
            <div className="relative max-w-4xl max-h-full">
              {/* Botón cerrar */}
              <button
                onClick={closeLightbox}
                className="absolute top-4 right-4 z-10 bg-white bg-opacity-20 hover:bg-opacity-30 text-white p-2 rounded-full transition-all duration-300"
              >
                <X className="h-6 w-6" />
              </button>

              {/* Navegación */}
              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 bg-white bg-opacity-20 hover:bg-opacity-30 text-white p-3 rounded-full transition-all duration-300"
              >
                <ChevronLeft className="h-6 w-6" />
              </button>
              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 bg-white bg-opacity-20 hover:bg-opacity-30 text-white p-3 rounded-full transition-all duration-300"
              >
                <ChevronRight className="h-6 w-6" />
              </button>

              {/* Imagen */}
              <motion.div
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.9 }}
                className="bg-white rounded-lg overflow-hidden"
              >
                {(() => {
                  const images = getCurrentCategoryImages()
                  const currentImage = images[selectedImage]
                  return currentImage ? (
                    <>
                      <div className="aspect-video bg-gray-200 flex items-center justify-center">
                        {/* Placeholder para imagen ampliada */}
                        <div className="w-full h-full bg-gradient-to-br from-gray-300 to-gray-400 flex items-center justify-center">
                          {/* <Camera className="h-24 w-24 text-gray-500" /> */}
                          <img
                            src={currentImage.src}
                            alt={currentImage.title}
                            className="w-full h-full object-cover"
                        />
                        </div>
                      </div>
                      <div className="p-6">
                        <h3 className="text-xl font-bold mb-2">{currentImage.title}</h3>
                        <p className="text-gray-600">{currentImage.description}</p>
                        <div className="mt-4 text-sm text-gray-500">
                          {selectedImage + 1} de {images.length}
                        </div>
                      </div>
                    </>
                  ) : null
                })()}
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}