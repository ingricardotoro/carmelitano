'use client'

import { motion } from 'framer-motion'
import { 
  MapPin, 
  Phone, 
  Mail, 
  Facebook, 
  Instagram, 
  Twitter,
  YoutubeIcon,
  GraduationCap,
  Heart,
  Users,
  BookOpen
} from 'lucide-react'

const footerLinks = {
  education: [
    { name: 'Preescolar', href: '#modalidades' },
    { name: 'Primaria', href: '#modalidades' },
    { name: 'Secundaria', href: '#modalidades' },
    { name: 'Programas Especiales', href: '#modalidades' },
  ],
  services: [
    { name: 'Matrícula', href: '#matricula' },
    //{ name: 'Becas', href: '#matricula' },
    { name: 'Actividades', href: '#nosotros' },
    { name: 'Talleres', href: '#nosotros' },
  ],
  about: [
    { name: 'Nuestra Historia', href: '#nosotros' },
    { name: 'Misión y Visión', href: '#nosotros' },
    //{ name: 'Equipo Docente', href: '#nosotros' },
    { name: 'Instalaciones', href: '/galeria' },
  ],
}

const socialLinks = [
  { name: 'Facebook', icon: Facebook, href: 'https://www.facebook.com/p/Instituto-Carmelitano-San-Jos%C3%A9-Oficial-100063891044026/?locale=es_LA', color: 'hover:text-blue-600' },
  { name: 'Instagram', icon: Instagram, href: 'https://www.instagram.com/instituto_carmelitano_san_jose/', color: 'hover:text-pink-600' },
  { name: 'YouTube', icon: YoutubeIcon, href: 'https://www.youtube.com/', color: 'hover:text-sky-500' },
]

const stats = [
  { icon: Users, number: '500+', label: 'Estudiantes' },
  { icon: BookOpen, number: '15+', label: 'Años de Experiencia' },
  { icon: GraduationCap, number: '98%', label: 'Tasa de Graduación' },
  { icon: Heart, number: '100%', label: 'Compromiso' },
]

export default function Footer() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId.replace('#', ''))
    if (element) {
      const headerHeight = 80
      const elementPosition = element.offsetTop - headerHeight
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      })
    }
  }

  return (
    <footer className="bg-gray-900 text-white">
      {/* Stats Section */}
      <div className="border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="flex justify-center mb-4">
                  <div className="bg-primary-600 p-3 rounded-full">
                    <stat.icon className="h-6 w-6" />
                  </div>
                </div>
                <div className="text-3xl font-bold text-primary-400 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-400 text-sm">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="col-span-1 lg:col-span-2"
          >
            <div className="flex items-center space-x-3 mb-6">
              <div className="bg-primary-600 p-2 rounded-xl">
                {/* <GraduationCap className="h-8 w-8 text-white" /> */}
                <img 
                    src="/images/logo.jpeg"
                    alt="Centro de Educación Bilingüe Carmelitano San José" 
                    className="h-8 w-8 object-contain"
                />
              </div>
              <div>
                <h3 className="text-xl font-bold font-display">
                  Centro de Educación Bilingüe
                </h3>
                <p className="text-primary-400">Carmelitano San José</p>
              </div>
            </div>
            
            <p className="text-gray-400 mb-6 max-w-md">
              Formamos líderes del futuro con una educación integral que combina 
              excelencia académica, valores cristianos y competencias bilingües 
              para un mundo globalizado.
            </p>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-gray-400">
                <MapPin className="h-5 w-5 text-primary-400" />
                <span>Aldea Santa Rosa km3, Salida Sur Tegucigalpa</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-400">
                <Phone className="h-5 w-5 text-primary-400" />
                <span>+504 2226-4074</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-400">
                <Mail className="h-5 w-5 text-primary-400" />
                <span>scarmelitano@yahoo.com</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4 mt-6">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  className={`p-2 bg-gray-800 rounded-lg transition-colors duration-300 ${social.color}`}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <social.icon className="h-5 w-5" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Education Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h4 className="text-lg font-semibold mb-4 text-primary-400">
              Educación
            </h4>
            <ul className="space-y-2">
              {footerLinks.education.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-gray-400 hover:text-white transition-colors duration-300 text-sm"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h4 className="text-lg font-semibold mb-4 text-primary-400">
              Servicios
            </h4>
            <ul className="space-y-2">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-gray-400 hover:text-white transition-colors duration-300 text-sm"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2025 Centro de Educación Bilingüe Carmelitano San José. 
              Todos los derechos reservados.
            </p>
            {/* <div className="flex space-x-6 mt-4 md:mt-0">
              <button className="text-gray-400 hover:text-white text-sm transition-colors duration-300">
                Política de Privacidad
              </button>
              <button className="text-gray-400 hover:text-white text-sm transition-colors duration-300">
                Términos de Uso
              </button>
            </div> */}
          </div>
        </div>
      </div>
    </footer>
  )
}