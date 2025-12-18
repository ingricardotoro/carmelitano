'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock,
  Send,
  User,
  MessageSquare,
  Calendar,
  CheckCircle,
  X
} from 'lucide-react'
import { FaFacebook, FaInstagram, FaTiktok } from 'react-icons/fa'

const contactInfo = [
  {
    icon: MapPin,
    title: 'Dirección',
    details: [
      'Aldea Santa Rosa, km3 Salida Sur',
      'Distrito Central',
      'Francisco Morazán'
    ],
    color: 'from-blue-500 to-cyan-500'
  },
  {
    icon: Phone,
    title: 'Teléfonos',
    details: [
      '+504 2226-4074',
      '+504 2226-4073',
      'WhatsApp: +504 9316-5278'
    ],
    color: 'from-green-500 to-emerald-500'
  },
  {
    icon: Mail,
    title: 'Correos Electrónicos',
    details: [
      'info@carmelitanosanjose.edu.hn',
      'scarmelitano@yahoo.com',
      //'icsj2022@gmail.com',
    ],
    color: 'from-purple-500 to-indigo-500'
  },
  {
    icon: Clock,
    title: 'Horarios de Atención',
    details: [
      'Lunes a Viernes',
      '7:00 AM - 2:00 PM',
      'Sábados y Diciembre: 8:00 AM - 12:00 PM'
    ],
    color: 'from-orange-500 to-red-500'
  }
]

const departments = [
  { value: 'admisiones', label: 'Admisiones y Matrícula' },
  { value: 'academico', label: 'Departamento Académico' },
  { value: 'administracion', label: 'Administración' },
  { value: 'pastoral', label: 'Pastoral Estudiantil' },
  { value: 'psicologia', label: 'Psicología Educativa' },
  { value: 'actividades', label: 'Actividades Extracurriculares' },
  { value: 'otros', label: 'Otros Asuntos' }
]

const socialLinks = [
  { 
    name: 'Facebook', 
    icon: FaFacebook, 
    href: 'https://www.facebook.com/p/Instituto-Carmelitano-San-Jos%C3%A9-Oficial-100063891044026/?locale=es_LA', 
    color: 'hover:bg-blue-600',
    followers: '2.5K'
  },
  { 
    name: 'Instagram', 
    icon: FaInstagram, 
    href: 'https://www.instagram.com/instituto_carmelitano_san_jose/', 
    color: 'hover:bg-pink-600',
    followers: '1.8K'
  },
  { 
    name: 'TikTok', 
    icon: FaTiktok, 
    href: 'https://www.tiktok.com/@carmelitano.san.jose', 
    color: 'hover:bg-sky-500',
    followers: '950'
  }
]

export default function ContactSection() {
  const [isClient, setIsClient] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    department: '',
    subject: '',
    message: '',
    agreeToTerms: false
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
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

  useEffect(() => {
    setIsClient(true)
  }, [])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simular envío del formulario
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    setIsSubmitting(false)
    setIsSubmitted(true)
    
    // Reset form after success
    setTimeout(() => {
      setIsSubmitted(false)
      setFormData({
        name: '',
        email: '',
        phone: '',
        department: '',
        subject: '',
        message: '',
        agreeToTerms: false
      })
    }, 3000)
  }

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
      // Enviar datos a la API
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
      
      // Reset form and close modal after success
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
    <section id="contacto" className="py-20 bg-white">
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
            Contáctanos
          </h2>
          <p className="section-subtitle">
            Estamos aquí para resolver todas tus dudas y acompañarte en el proceso 
            de formar parte de nuestra familia educativa.
          </p>
        </motion.div>

        {/* Contact Info Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {contactInfo.map((info, index) => (
            <motion.div
              key={info.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className={`bg-gradient-to-r ${info.color} p-3 rounded-full w-fit mb-4`}>
                <info.icon className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold mb-3">{info.title}</h3>
              <div className="space-y-1">
                {info.details.map((detail, detailIndex) => (
                  <div key={detailIndex} className="text-gray-600 text-sm">
                    {detail}
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-gray-50 rounded-2xl p-8"
          >
            <h3 className="text-2xl font-bold font-display mb-6">
              Envíanos un Mensaje
            </h3>

            {!isClient ? (
              <div className="text-center py-12">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary-600 mx-auto mb-4"></div>
                <p className="text-gray-600">Cargando formulario...</p>
              </div>
            ) : isSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-12"
              >
                <div className="bg-green-100 p-4 rounded-full w-fit mx-auto mb-4">
                  <CheckCircle className="h-12 w-12 text-green-600" />
                </div>
                <h4 className="text-xl font-semibold text-green-800 mb-2">
                  ¡Mensaje Enviado!
                </h4>
                <p className="text-green-600">
                  Gracias por contactarnos. Te responderemos pronto.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Nombre Completo *
                    </label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
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
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors duration-300"
                        placeholder="tu@email.com"
                      />
                    </div>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Teléfono
                    </label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors duration-300"
                        placeholder="+506 0000-0000"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Departamento *
                    </label>
                    <select
                      name="department"
                      value={formData.department}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors duration-300"
                    >
                      <option value="">Selecciona un departamento</option>
                      {departments.map((dept) => (
                        <option key={dept.value} value={dept.value}>
                          {dept.label}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Asunto *
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors duration-300"
                    placeholder="Asunto de tu consulta"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Mensaje *
                  </label>
                  <div className="relative">
                    <MessageSquare className="absolute left-3 top-4 h-5 w-5 text-gray-400" />
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={5}
                      className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors duration-300 resize-none"
                      placeholder="Escribe tu mensaje aquí..."
                    />
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <input
                    type="checkbox"
                    name="agreeToTerms"
                    checked={formData.agreeToTerms}
                    onChange={handleInputChange}
                    required
                    className="mt-1 h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
                  />
                  <label className="text-sm text-gray-600">
                    Acepto los términos y condiciones y autorizo el tratamiento 
                    de mis datos personales conforme a la política de privacidad.
                  </label>
                </div>

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-primary-600 hover:bg-primary-700 disabled:bg-gray-400 text-white font-semibold py-3 rounded-lg transition-colors duration-300 flex items-center justify-center space-x-2"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                      <span>Enviando...</span>
                    </>
                  ) : (
                    <>
                      <Send className="h-5 w-5" />
                      <span>Enviar Mensaje</span>
                    </>
                  )}
                </motion.button>
              </form>
            )}
          </motion.div>

          {/* Additional Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* Map Placeholder */}
            <div className="bg-gray-200 rounded-2xl h-64 flex items-center justify-center">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4763.06536761303!2d-87.18958142490477!3d14.02182788639879!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f6fbdb3d8d52f4d%3A0xd0097295a61d7043!2sInstituto%20Carmelitano%20San%20Jos%C3%A9!5e1!3m2!1ses!2shn!4v1762223800576!5m2!1ses!2shn" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-2xl"
                title="Ubicación Instituto Carmelitano San José"
              />
            </div>

            {/* Social Media */}
            <div className="bg-gradient-to-br from-primary-600 to-secondary-500 rounded-2xl p-8 text-white">
              <h4 className="text-xl font-bold mb-6">Síguenos en Redes Sociales</h4>
              <div className="space-y-4">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`flex items-center justify-between p-4 bg-white/20 rounded-lg hover:bg-white/30 transition-all duration-300`}
                  >
                    <div className="flex items-center space-x-3">
                      <social.icon className="h-6 w-6" />
                      <span className="font-medium">{social.name}</span>
                    </div>
                    <span className="text-sm text-white/80">
                      {social.followers} seguidores
                    </span>
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Quick Contact */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h4 className="text-xl font-bold mb-6">Contacto Directo</h4>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="bg-green-100 p-3 rounded-full">
                    <Phone className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <p className="font-semibold">Llamada Directa</p>
                    <p className="text-gray-600 text-sm">+504 2226-4074</p>
                      <p className="text-gray-600 text-sm">+504 2226-4073</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="bg-blue-100 p-3 rounded-full">
                    <MessageSquare className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <p className="font-semibold">WhatsApp</p>
                    <p className="text-gray-600 text-sm">+504 9316-5278</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="bg-purple-100 p-3 rounded-full">
                    <Calendar className="h-6 w-6 text-purple-600" />
                  </div>
                  <div>
                    <p className="font-semibold">Agendar Cita</p>
                    <p className="text-gray-600 text-sm">Visita personalizada</p>
                  </div>
                </div>
              </div>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsAppointmentModalOpen(true)}
                className="w-full mt-6 bg-primary-600 hover:bg-primary-700 text-white font-semibold py-3 rounded-lg transition-colors duration-300"
              >
                Agendar Visita
              </motion.button>
            </div>
          </motion.div>
        </div>
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