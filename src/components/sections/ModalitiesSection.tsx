'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  Baby, 
  Users, 
  BookOpen, 
  GraduationCap,
  Clock,
  Calendar,
  MapPin,
  Star,
  Globe,
  Music,
  Palette,
  Zap,
  User,
  Mail,
  Phone,
  CheckCircle,
  X
} from 'lucide-react'

const educationLevels = [
  {
    icon: Baby,
    title: 'Preescolar',
    subtitle: 'Español e Inglés',
    ageRange: '4-6 años',
    description: 'Desarrollo integral temprano con metodologías lúdicas y estimulación bilingüe desde las primeras etapas.',
    features: [
      'Estimulación temprana bilingüe',
      'Desarrollo psicomotor',
      'Hábitos y valores',
      'Preparación para primaria'
    ],
    schedule: '7:00 AM - 12:00 PM',
    color: 'from-pink-500 to-rose-500'
  },
  {
    icon: Users,
    title: 'Primaria',
    subtitle: 'Español e Inglés(Hasta tercer grado)',
    ageRange: '6-12 años',
    description: 'Educación bilingüe sólida con enfoque en competencias básicas y desarrollo del pensamiento crítico.',
    features: [
      'Programa bilingüe intensivo',
      'Matemáticas y ciencias avanzadas',
      'Lectoescritura en ambos idiomas',
      'Proyectos de investigación'
    ],
    schedule: '7:00 AM - 2:00 PM',
    color: 'from-blue-500 to-cyan-500'
  },
  {
    icon: BookOpen,
    title: 'Secundaria',
    subtitle: 'Bach. Ciencias y Humanidades - Español',
    ageRange: '12-18 años',
    description: 'Formación integral con énfasis en liderazgo, preparación universitaria y competencias del siglo XXI.',
    features: [
      'Bachillerato en Humanidades',
      'Preparación universitaria',
      'Liderazgo estudiantil',
      'Proyectos de servicio social'
    ],
    schedule: '7:00 AM - 2:00 PM',
    color: 'from-green-500 to-emerald-500'
  },
  {
    icon: GraduationCap,
    title: 'Programas Especiales',
    subtitle: 'Actividades Extracurriculares',
    ageRange: 'Todas las edades',
    description: 'Programas extracurriculares que complementan la formación académica con arte, deporte y tecnología.',
    features: [
      'Deportes: Taekwondo, fútbol, baloncesto',
      'Artes: Piano, Pintura, Guitarra, flauta, Batería',
      'Academia de Inglés',
      'Matemáticas y Español'
    ],
    schedule: 'Sabado 8:00 AM - 12:00 M',
    color: 'from-purple-500 to-indigo-500'
  }
]

const specialPrograms = [
  {
    icon: Globe,
    title: 'Acompañamiento Psicológico',
    description: 'Apoyo emocional y desarrollo personal para estudiantes de todas las edades.'
  },
  {
    icon: Music,
    title: 'Arte y Cultura',
    description: 'Piano, Pintura, Guitarra, flauta, Batería'
  },
  {
    icon: Zap,
    title: 'Tecnología',
    description: 'Robótica, computación y competencias digitales'
  },
  {
    icon: Palette,
    title: 'Deportes',
    description: 'Fútbol, baloncesto, áreas verdes y actividades recreativas'
  }
]

const advantages = [
  'Educación 100% bilingüe español-inglés',
  'Metodologías activas de aprendizaje',
  'Seguridad privada y servicio de transporte',
  'Formación en valores cristianos',
  'Giras Pedagógicas y Retiros Espirituales',
  'Convenios con universidades nacionales para graduados',
  'Amplias áreas verdes',
  'Actividades extracurriculares diversas'
]

export default function ModalitiesSection() {
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
    <section id="modalidades" className="py-20 bg-white">
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
            Modalidades Educativas
          </h2>
          <p className="section-subtitle">
            Ofrecemos una educación integral adaptada a cada etapa del desarrollo, 
            desde preescolar hasta bachillerato, con programas especializados.
          </p>
        </motion.div>

        {/* Education Levels */}
        <div className="grid lg:grid-cols-2 gap-8 mb-20">
          {educationLevels.map((level, index) => (
            <motion.div
              key={level.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              {/* Header with gradient */}
              <div className={`bg-gradient-to-r ${level.color} p-8 text-white`}>
                <div className="flex items-center mb-4">
                  <div className="bg-white/20 p-3 rounded-full mr-4">
                    <level.icon className="h-8 w-8" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold font-display">{level.title}</h3>
                    <p className="text-white/90">{level.subtitle}</p>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="bg-white/20 px-3 py-1 rounded-full text-sm">
                    {level.ageRange}
                  </span>
                  <div className="flex items-center space-x-2 text-sm">
                    <Clock className="h-4 w-4" />
                    <span>{level.schedule}</span>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-8">
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {level.description}
                </p>

                <h4 className="font-semibold text-gray-900 mb-4">
                  Características principales:
                </h4>
                <ul className="space-y-2 mb-6">
                  {level.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-3">
                      <Star className="h-4 w-4 text-primary-600 flex-shrink-0" />
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full bg-gray-100 hover:bg-primary-600 hover:text-white text-gray-700 font-medium py-3 rounded-lg transition-all duration-300"
                >
                  Más Información
                </motion.button> */}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Special Programs */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <h3 className="text-3xl font-bold font-display text-center mb-12">
            Programas Especiales
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {specialPrograms.map((program, index) => (
              <motion.div
                key={program.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gradient-to-br from-primary-50 to-secondary-50 p-6 rounded-xl hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <div className="bg-primary-600 p-3 rounded-full w-fit mb-4">
                  <program.icon className="h-6 w-6 text-white" />
                </div>
                <h4 className="text-lg font-semibold mb-3">{program.title}</h4>
                <p className="text-gray-600 text-sm">{program.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Advantages Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-gray-50 rounded-2xl p-12"
        >
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold font-display mb-6">
                ¿Por qué elegir Carmelitano San José?
              </h3>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Nuestro centro educativo se distingue por ofrecer una educación integral 
                que combina excelencia académica, formación en valores y preparación 
                para los desafíos del futuro.
              </p>
              <div className="grid sm:grid-cols-2 gap-4">
                {advantages.map((advantage, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex items-center space-x-3"
                  >
                    <div className="bg-primary-600 p-1 rounded-full">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                    <span className="text-gray-700 text-sm">{advantage}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-primary-600 to-secondary-500 rounded-2xl p-8 text-white">
                <h4 className="text-2xl font-bold mb-4">Nuestros Horarios</h4>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span>Preescolar</span>
                    <span className="bg-white/20 px-3 py-1 rounded-full text-sm">
                      7:00 AM - 12:00 M
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Primaria</span>
                    <span className="bg-white/20 px-3 py-1 rounded-full text-sm">
                      7:00 AM - 2:00 PM
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Secundaria</span>
                    <span className="bg-white/20 px-3 py-1 rounded-full text-sm">
                      7:00 AM - 2:00 PM
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Extracurriculares Viernes</span>
                    <span className="bg-white/20 px-3 py-1 rounded-full text-sm">
                      1:00 PM - 3:00 PM
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Extracurriculares Sábado</span>
                    <span className="bg-white/20 px-3 py-1 rounded-full text-sm">
                      8:00 AM - 12:00 M
                    </span>
                  </div>
                </div>
                
                <div className="mt-6 pt-6 border-t border-white/20">
                  <div className="flex items-center space-x-2 text-sm">
                    <Calendar className="h-4 w-4" />
                    <span>Año lectivo: Febrero - Noviembre</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mt-16"
        >
          <h3 className="text-2xl font-bold font-display mb-4">
            ¿Listo para formar parte de nuestra familia educativa?
          </h3>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Descubre cómo podemos acompañar a tu hijo en su camino hacia el éxito académico y personal.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-primary"
              onClick={() => document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Solicitar Información
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsAppointmentModalOpen(true)}
              className="btn-secondary"
            >
              Agendar Visita
            </motion.button>
          </div>
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