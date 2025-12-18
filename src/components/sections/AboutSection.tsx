'use client'

import { useState } from 'react'
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
  Star,
  User,
  Mail,
  Phone,
  Calendar,
  CheckCircle,
  X
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
  const [isAppointmentModalOpen, setIsAppointmentModalOpen] = useState(false)
  const [appointmentData, setAppointmentData] = useState({
    name: '',
    email: '',
    phone: '',
    preferredDate: '',
    preferredTime: 'morning',
    message: ''
  })
  const [isAppointmentSubmitting, setIsAppointmentSubmitting] = useState(false)
  const [isAppointmentSubmitted, setIsAppointmentSubmitted] = useState(false)

  const handleAppointmentInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setAppointmentData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleAppointmentSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsAppointmentSubmitting(true)
    
    try {
      const response = await fetch('/api/send-appointment', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(appointmentData)
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || 'Error al enviar la solicitud')
      }

      setIsAppointmentSubmitting(false)
      setIsAppointmentSubmitted(true)
      
      setTimeout(() => {
        setIsAppointmentSubmitted(false)
        setIsAppointmentModalOpen(false)
        setAppointmentData({
          name: '',
          email: '',
          phone: '',
          preferredDate: '',
          preferredTime: 'morning',
          message: ''
        })
      }, 3000)
    } catch (error) {
      console.error('Error al enviar solicitud de cita:', error)
      setIsAppointmentSubmitting(false)
      alert('Hubo un error al enviar tu solicitud. Por favor intenta nuevamente o contáctanos directamente.')
    }
  }

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
            onClick={() => setIsAppointmentModalOpen(true)}
            className="mt-8 bg-white text-primary-600 font-semibold px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors duration-300"
          >
            Agendar Visita
          </motion.button>
        </motion.div>
      </div>

      {/* Appointment Modal */}
      {isAppointmentModalOpen && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
          >
            {/* Modal Header */}
            <div className="sticky top-0 bg-gradient-to-r from-primary-600 to-secondary-500 text-white p-6 rounded-t-2xl flex items-center justify-between">
              <div>
                <h3 className="text-2xl font-bold font-display">Agendar Visita</h3>
                <p className="text-white/90 text-sm mt-1">Reserva tu visita personalizada</p>
              </div>
              <button
                onClick={() => setIsAppointmentModalOpen(false)}
                className="p-2 hover:bg-white/20 rounded-lg transition-colors duration-300"
              >
                <X className="h-6 w-6" />
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-6">
              {/* Schedule Info */}
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
                <div className="flex items-start space-x-3">
                  <Clock className="h-5 w-5 text-blue-600 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-blue-900 mb-2">Horarios de Atención</h4>
                    <div className="space-y-1 text-sm text-blue-800">
                      <p>• <strong>Lunes a Viernes:</strong> 7:00 AM - 2:00 PM</p>
                      <p>• <strong>Sábados:</strong> 8:00 AM - 12:00 PM (mediodía)</p>
                      <p className="text-blue-600 mt-2">• Domingos y festivos cerrado</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Appointment Form */}
              {isAppointmentSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
                >
                  <div className="bg-green-100 p-4 rounded-full w-fit mx-auto mb-4">
                    <CheckCircle className="h-12 w-12 text-green-600" />
                  </div>
                  <h4 className="text-xl font-semibold text-green-800 mb-2">
                    ¡Cita Agendada!
                  </h4>
                  <p className="text-green-600">
                    Te confirmaremos tu cita por correo electrónico o teléfono.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleAppointmentSubmit} className="space-y-5">
                  <div className="grid md:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Nombre Completo *
                      </label>
                      <div className="relative">
                        <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                        <input
                          type="text"
                          name="name"
                          value={appointmentData.name}
                          onChange={handleAppointmentInputChange}
                          required
                          className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors duration-300"
                          placeholder="Tu nombre completo"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Correo Electrónico *
                      </label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                        <input
                          type="email"
                          name="email"
                          value={appointmentData.email}
                          onChange={handleAppointmentInputChange}
                          required
                          className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors duration-300"
                          placeholder="tu@email.com"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Teléfono *
                      </label>
                      <div className="relative">
                        <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                        <input
                          type="tel"
                          name="phone"
                          value={appointmentData.phone}
                          onChange={handleAppointmentInputChange}
                          required
                          className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors duration-300"
                          placeholder="+504 0000-0000"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Fecha Preferida *
                      </label>
                      <div className="relative">
                        <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                        <input
                          type="date"
                          name="preferredDate"
                          value={appointmentData.preferredDate}
                          onChange={handleAppointmentInputChange}
                          required
                          min={new Date().toISOString().split('T')[0]}
                          className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors duration-300"
                        />
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Horario Preferido *
                    </label>
                    <select
                      name="preferredTime"
                      value={appointmentData.preferredTime}
                      onChange={handleAppointmentInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors duration-300"
                    >
                      <option value="morning">Mañana (7:00 AM - 11:00 AM)</option>
                      <option value="midday">Mediodía (11:00 AM - 2:00 PM)</option>
                      <option value="saturday">Sábado (8:00 AM - 12:00 PM)</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Mensaje Adicional
                    </label>
                    <textarea
                      name="message"
                      value={appointmentData.message}
                      onChange={handleAppointmentInputChange}
                      rows={3}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors duration-300 resize-none"
                      placeholder="¿Hay algo específico que te gustaría conocer durante tu visita?"
                    />
                  </div>

                  <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                    <p className="text-sm text-yellow-800">
                      <strong>Nota:</strong> Una vez enviada tu solicitud, nos pondremos en contacto contigo para confirmar la disponibilidad de la fecha y hora seleccionadas.
                    </p>
                  </div>

                  <div className="flex gap-3">
                    <motion.button
                      type="button"
                      onClick={() => setIsAppointmentModalOpen(false)}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="flex-1 bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold py-3 rounded-lg transition-colors duration-300"
                    >
                      Cancelar
                    </motion.button>
                    <motion.button
                      type="submit"
                      disabled={isAppointmentSubmitting}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="flex-1 bg-primary-600 hover:bg-primary-700 disabled:bg-gray-400 text-white font-semibold py-3 rounded-lg transition-colors duration-300 flex items-center justify-center space-x-2"
                    >
                      {isAppointmentSubmitting ? (
                        <>
                          <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                          <span>Agendando...</span>
                        </>
                      ) : (
                        <>
                          <Calendar className="h-5 w-5" />
                          <span>Confirmar Cita</span>
                        </>
                      )}
                    </motion.button>
                  </div>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </section>
  )
}