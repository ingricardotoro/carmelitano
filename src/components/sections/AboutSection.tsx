'use client'

import { motion } from 'framer-motion'
import { 
  Heart, 
  Target, 
  Eye, 
  Users, 
  Award, 
  BookOpen,
  Clock,
  MapPin,
  Star
} from 'lucide-react'

const values = [
  {
    icon: Heart,
    title: 'Amor y Respeto',
    description: 'Cultivamos un ambiente de amor cristiano donde cada estudiante se siente valorado y respetado.'
  },
  {
    icon: BookOpen,
    title: 'Excelencia Académica',
    description: 'Buscamos la máxima calidad en todos nuestros procesos educativos y formativos.'
  },
  {
    icon: Users,
    title: 'Comunidad',
    description: 'Fomentamos el trabajo en equipo y la colaboración entre estudiantes, familias y educadores.'
  },
  {
    icon: Award,
    title: 'Integridad',
    description: 'Promovemos la honestidad, la responsabilidad y la coherencia en todas nuestras acciones.'
  }
]

const achievements = [
  {
    icon: Star,
    number: '15+',
    title: 'Años de Experiencia',
    description: 'Más de dos décadas formando líderes'
  },
  {
    icon: Users,
    number: '500+',
    title: 'Estudiantes Graduados',
    description: 'Profesionales exitosos en todo el mundo'
  },
  {
    icon: Award,
    number: '98%',
    title: 'Tasa de Éxito',
    description: 'Estudiantes que ingresan a universidades'
  },
  {
    icon: BookOpen,
    number: '12+',
    title: 'Programas Especiales',
    description: 'Actividades extracurriculares y deportes'
  }
]

const timeline = [
  {
    year: '2010',
    title: 'Fundación',
    description: 'Inicio de nuestro centro educativo con visión cristiana y bilingüe'
  },
  {
    year: '2015',
    title: 'Expansión de Instalaciones',
    description: 'Mejoras significativas en infraestructura y recursos educativos'
  },
  {
    year: '2017',
    title: 'Instalaciones de Laboratorios',
    description: 'Construcción de nuevas aulas y laboratorios modernos'
  },
  {
    year: '2019',
    title: 'Tecnología Educativa',
    description: 'Implementación de plataformas digitales y metodologías innovadoras'
  },
  {
    year: '2020',
    title: 'Educación Híbrida',
    description: 'Adaptación exitosa a modelos educativos presenciales y virtuales'
  },
  {
    year: '2023',
    title: 'Inicio de Area Bilingüe',
    description: 'Lanzamiento de nuestro programa académico 100% bilingüe español-inglés'
  }
]

export default function AboutSection() {
  return (
    <section id="nosotros" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="section-title text-gradient">
            Sobre Nosotros
          </h2>
          <p className="section-subtitle">
            Somos una institución educativa comprometida con la formación integral 
            de nuestros estudiantes, combinando excelencia académica con valores cristianos.
          </p>
        </motion.div>

        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-12 mb-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <div className="flex items-center mb-6">
              <div className="bg-primary-600 p-3 rounded-full mr-4">
                <Target className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold font-display">Misión</h3>
            </div>
            <p className="text-gray-600 leading-relaxed">
              Somos una Institución católica, que promueve los valores cristianos con un alto grado académico, que da testimonio de principios humanos, morales, espirituales, culturales, que desarrollen las competencias de aprendizaje formando integralmente a la niñez y adolescencia con ayuda de la comunidad educativa Hondureña.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <div className="flex items-center mb-6">
              <div className="bg-secondary-500 p-3 rounded-full mr-4">
                <Eye className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold font-display">Visión</h3>
            </div>
            <p className="text-gray-600 leading-relaxed">
              Ser una Institución católica que promueva una sólida formación académica con valores humanos, morales, culturales, cristianos y científicos, capaces de dar respuestas acertadas a los retos y desafíos de la sociedad Hondureña.
            </p>
          </motion.div>
        </div>

        {/* Values */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <h3 className="text-3xl font-bold font-display text-center mb-12">
            Nuestros Valores
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white p-6 rounded-xl shadow-lg text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="bg-primary-100 p-4 rounded-full w-fit mx-auto mb-4">
                  <value.icon className="h-8 w-8 text-primary-600" />
                </div>
                <h4 className="text-xl font-semibold mb-3">{value.title}</h4>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Achievements */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-primary-600 rounded-2xl p-12 mb-20 text-white"
        >
          <h3 className="text-3xl font-bold font-display text-center mb-12">
            Nuestros Logros
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.title}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="bg-white/20 p-4 rounded-full w-fit mx-auto mb-4">
                  <achievement.icon className="h-8 w-8" />
                </div>
                <div className="text-4xl font-bold mb-2">{achievement.number}</div>
                <h4 className="text-xl font-semibold mb-2">{achievement.title}</h4>
                <p className="text-primary-100">{achievement.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-3xl font-bold font-display text-center mb-12">
            Nuestra Historia
          </h3>
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-primary-200"></div>
            
            {timeline.map((item, index) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className={`relative flex items-center mb-12 ${
                  index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                }`}
              >
                <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8'}`}>
                  <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <div className="text-2xl font-bold text-primary-600 mb-2">
                      {item.year}
                    </div>
                    <h4 className="text-xl font-semibold mb-3">{item.title}</h4>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </div>
                
                {/* Timeline Dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary-600 rounded-full border-4 border-white shadow"></div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-gradient-to-r from-primary-600 to-secondary-500 rounded-2xl p-12 text-white text-center"
        >
          <h3 className="text-3xl font-bold font-display mb-6">
            ¿Quieres Conocer Más?
          </h3>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Te invitamos a visitarnos y conocer nuestras instalaciones, metodología 
            y el ambiente familiar que caracteriza a nuestra comunidad educativa.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6">
            <div className="flex items-center space-x-2">
              <MapPin className="h-5 w-5" />
              <span>Aldea Santa Rosa, km3 Salida Sur</span>
            </div>
            <div className="flex items-center space-x-2">
              <Clock className="h-5 w-5" />
              <span>Lun - Vie: 7:00 AM - 2:00 PM</span>
            </div>
            <div className="flex items-center space-x-2">
              <Clock className="h-5 w-5" />
              <span>Diciembre Lun - Vie: 8:00 AM - 12:00 M</span>
            </div>
          </div>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mt-8 bg-white text-primary-600 font-semibold px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors duration-300"
          >
            Agendar Visita
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}