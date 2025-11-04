'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, GraduationCap } from 'lucide-react'

const navigation = [
  { name: 'Inicio', href: '#inicio', id: 'inicio', type: 'scroll' },
  { name: 'Nosotros', href: '#nosotros', id: 'nosotros', type: 'scroll' },
  { name: 'Modalidades', href: '#modalidades', id: 'modalidades', type: 'scroll' },
  { name: 'Galería', href: '/galeria', id: 'galeria', type: 'link' },
  { name: 'Matrícula', href: '#matricula', id: 'matricula', type: 'scroll' },
  { name: 'Contáctanos', href: '#contacto', id: 'contacto', type: 'scroll' },
]

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('inicio')

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY
      setScrolled(scrollPosition > 50)

      // Detectar sección activa
      const sections = navigation.map(item => item.id)
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i])
        if (section) {
          const rect = section.getBoundingClientRect()
          if (rect.top <= 100) {
            setActiveSection(sections[i])
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      const headerHeight = 80
      const elementPosition = element.offsetTop - headerHeight
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      })
    }
    setIsOpen(false)
  }

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-200/20' 
          : 'bg-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center space-x-3"
          >
            <div className="bg-primary-600 p-2 rounded-xl">
              {/* <GraduationCap className="h-8 w-8 text-white" /> */}
            <Image
                src="/images/logo.jpeg"
                alt="Centro de Educación Bilingüe Carmelitano San José"
                width={32}
                height={32}
                className="rounded-lg object-cover"
            />
            </div>
            <div>
              <h1 className={`text-xl font-bold font-display ${
                scrolled ? 'text-gray-900' : 'text-white'
              }`}>
                Carmelitano
              </h1>
              <p className={`text-sm ${
                scrolled ? 'text-gray-600' : 'text-white/80'
              }`}>
                San José
              </p>
            </div>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => {
              const getTextColor = () => {
                if (scrolled) {
                  return activeSection === item.id 
                    ? 'text-primary-600' 
                    : 'text-gray-700 hover:text-primary-600'
                } else {
                  return activeSection === item.id
                    ? 'text-white' 
                    : 'text-white/80 hover:text-white'
                }
              }

              if (item.type === 'link') {
                return (
                  <Link key={item.name} href={item.href}>
                    <motion.span
                      className={`text-sm font-medium transition-all duration-300 relative cursor-pointer ${getTextColor()}`}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {item.name}
                    </motion.span>
                  </Link>
                )
              }

              return (
                <motion.button
                  key={item.name}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-sm font-medium transition-all duration-300 relative ${getTextColor()}`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {item.name}
                  {activeSection === item.id && (
                    <motion.div
                      layoutId="activeSection"
                      className={`absolute -bottom-1 left-0 right-0 h-0.5 ${
                        scrolled ? 'bg-primary-600' : 'bg-white'
                      }`}
                      initial={false}
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </motion.button>
              )
            })}
            
            <motion.button
              onClick={() => scrollToSection('matricula')}
              className="btn-primary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Matricúlate
            </motion.button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <motion.button
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 rounded-lg ${
                scrolled ? 'text-gray-700' : 'text-white'
              }`}
              whileTap={{ scale: 0.95 }}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </motion.button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden bg-white border-t border-gray-200 shadow-lg"
            >
              <div className="px-2 pt-2 pb-3 space-y-1">
                {navigation.map((item) => {
                  if (item.type === 'link') {
                    return (
                      <Link key={item.name} href={item.href}>
                        <motion.span
                          className="block w-full text-left px-3 py-2 rounded-md text-base font-medium transition-colors duration-300 text-gray-700 hover:text-primary-600 hover:bg-gray-50 cursor-pointer"
                          whileHover={{ x: 4 }}
                        >
                          {item.name}
                        </motion.span>
                      </Link>
                    )
                  }

                  return (
                    <motion.button
                      key={item.name}
                      onClick={() => scrollToSection(item.id)}
                      className={`block w-full text-left px-3 py-2 rounded-md text-base font-medium transition-colors duration-300 ${
                        activeSection === item.id
                          ? 'text-primary-600 bg-primary-50'
                          : 'text-gray-700 hover:text-primary-600 hover:bg-gray-50'
                      }`}
                      whileHover={{ x: 4 }}
                    >
                      {item.name}
                    </motion.button>
                  )
                })}
                <motion.button
                  onClick={() => scrollToSection('matricula')}
                  className="w-full mt-4 btn-primary"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Matricúlate
                </motion.button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  )
}