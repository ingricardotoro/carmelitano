'use client'

import { motion } from 'framer-motion'
import { 
  FileText, 
  Calendar, 
  DollarSign, 
  CheckCircle,
  Clock,
  Star,
  Users,
  BookOpen,
  Award,
  Phone,
  Mail,
  MapPin,
  Download
} from 'lucide-react'

const enrollmentSteps = [
  {
    step: 1,
    icon: FileText,
    title: 'Entrevista Familiar',
    description: 'Reunión con la familia para conocer las expectativas y objetivos educativos.',
    documents: [
        'Presentación del proyecto educativo',
      'Conocimiento de las instalaciones',
      'Evaluación del perfil del estudiante',
      'Resolución de dudas y consultas'
      
    ]
  },
  {
    step: 2,
    icon: Users,
    title: 'Presentacion de Documentos',
    description: 'Entrega de la documentación requerida para el proceso de admisión.',
    documents: [
      'Certificado de nacimiento',
      'Certificados de notas previas',
      'Constancia de excelencia o muy buena conducta.',
      'Solvencia de pago del año anterior.',
      '2 fotografías tamaño carnet (Pre-básica)',
      'Fe de Bautismo (si es católico).'
    ]
  },
  {
    step: 3,
    icon: BookOpen,
    title: 'Examen de Admisión',
    description: 'Examen diagnóstico para determinar el nivel académico del estudiante.',
    documents: [
      'Evaluación de español',
      'Evaluación de inglés',
      'Evaluación de matemáticas',
      'Haber aprobado el examen de admisión con 75%.'
    ]
  },
  {
    step: 4,
    icon: CheckCircle,
    title: 'Confirmación de Matrícula',
    description: 'Formalización de la matrícula y pago de los aranceles correspondientes.',
    documents: [
      'Contrato de servicios educativos',
      'Pago de matrícula',
      'Seguro estudiantil',
      'Servicio de transporte (si aplica)',
      'Uniformes y materiales'
    ]
  }
]

const tuitionPlans = [
  {
    title: 'Preescolar en Español',
    subtitle: 'Kinder y Preparatoria',
    monthlyFee: 'L. 2,380',
    enrollmentFee: 'L. 3,450',
    features: [
      'Horario: 7:00 AM - 12:00 M',
      'Áreas verdes recreativas',
      'Espacio de estimulación temprana',
      'Acompañamiento psicopedagógico',
      'Personal capacitado'
    ],
    popular: false,
    color: 'from-pink-500 to-rose-500'
  },
  {
    title: 'Básica en Español',
    subtitle: 'De 1er a 6to Grado',
    monthlyFee: 'L. 2,680',
    enrollmentFee: 'L. 3,650',
    features: [
      'Horario: 7:00 AM - 2:00 PM',
      'Áreas verdes recreativas',
      'Departamento de psicología',
      'Actividades extracurriculares Incluidas',
      'Giras pedagógicas'
    ],
    popular: false,
    color: 'from-blue-500 to-cyan-500'
  },
  {
    title: 'Básica en Español ',
    subtitle: 'De 7mo a 9no Grado',
    monthlyFee: 'L. 3,210',
    enrollmentFee: 'L. 3,995',
    features: [
      'Horario: 7:00 AM - 2:00 PM',
      'Áreas verdes recreativas',
      'Laboratorios especializados',
      'Actividades extracurriculares Incluidas',
      'Giras pedagógicas'
    ],
    popular: false,
    color: 'from-green-500 to-emerald-500'
  },
  {
    title: 'Educ. Media en Español',
    subtitle: '10mo grado y BCH',
    monthlyFee: 'L. 3,352',
    enrollmentFee: 'L. 4,200',
    features: [
      'Horario: 7:00 AM - 2:00 PM',
      'Preparación universitaria',
      'Bachillerato Ciencias y Humanidades',
      'Actividades extracurriculares Incluidas',
      'Laboratorios especializados',
      'Robótica y Computación'
    ],
    popular: false,
    color: 'from-purple-500 to-purple-500'
  },
  {
    title: 'Prebasica Bilingüe',
    subtitle: 'Kinder y Preparatoria',
    monthlyFee: 'L. 3,700',
    enrollmentFee: 'L. 4,500',
    features: [
      'Horario: 7:00 AM - 12:00 M',
      'Áreas verdes recreativas',
      'Estimulación bilingüe',
      'Espacio de estimulación temprana',
      'Acompañamiento psicopedagógico',
    ],
    popular: false,
    color: 'from-pink-500 to-pink-500'
  },
  {
    title: 'Básica Bilingüe',
    subtitle: 'De 1er a 3er Grado',
    monthlyFee: 'L. 3,900',
    enrollmentFee: 'L. 4,800',
    features: [
      'Horario: 7:00 AM - 2:00 PM',
      'Áreas verdes recreativas',
      'Desarrollo bilingüe',
      'Departamento de psicología',
      'Actividades extracurriculares Incluidas',
      'Giras pedagógicas'
    ],
    popular: false,
    color: 'from-blue-500 to-cyan-500'
  }
]

const scholarships = [
  {
    title: 'Beca Académica',
    percentage: '20-50%',
    description: 'Para estudiantes con excelente rendimiento académico'
  },
  {
    title: 'Beca Deportiva',
    percentage: '15-30%',
    description: 'Para estudiantes destacados en disciplinas deportivas'
  },
  {
    title: 'Beca Social',
    percentage: '25-40%',
    description: 'Para familias con necesidades económicas demostradas'
  },
  {
    title: 'Beca de Hermanos',
    percentage: '10%',
    description: 'Descuento para segundo hijo en adelante'
  }
]

const importantDates = [
  {
    date: 'Noviembre - Diciembre',
    event: 'Proceso de Admisión',
    description: 'Período principal para nuevas solicitudes'
  },
  {
    date: 'Enero',
    event: 'Confirmación de Matrículas',
    description: 'Formalización y pago de inversiones educativas'
  },
  {
    date: 'Febrero',
    event: 'Inicio del Año Lectivo',
    description: 'Comienzo de clases regulares'
  },
  {
    date: 'Noviembre',
    event: 'Finalización del Año',
    description: 'Graduaciones y clausuras'
  }
]

export default function EnrollmentSection() {
  return (
    <section id="matricula" className="py-20 bg-gray-50">
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
            Proceso de Matrícula
          </h2>
          <p className="section-subtitle">
            Te acompañamos paso a paso en el proceso de admisión para que tu hijo 
            forme parte de nuestra familia educativa.
          </p>
        </motion.div>

        {/* Enrollment Steps */}
        <div className="mb-20">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold font-display text-center mb-12"
          >
            Pasos para la Matrícula
          </motion.h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {enrollmentSteps.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="text-center mb-6">
                  <div className="bg-primary-600 text-white rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold mx-auto mb-4">
                    {step.step}
                  </div>
                  <div className="bg-primary-100 p-3 rounded-full w-fit mx-auto mb-4">
                    <step.icon className="h-8 w-8 text-primary-600" />
                  </div>
                  <h4 className="text-lg font-semibold mb-2">{step.title}</h4>
                  <p className="text-gray-600 text-sm">{step.description}</p>
                </div>

                <div className="space-y-2">
                  {step.documents.map((document, docIndex) => (
                    <div key={docIndex} className="flex items-center space-x-2 text-sm">
                      <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                      <span className="text-gray-600">{document}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Tuition Plans */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <h3 className="text-3xl font-bold font-display text-center mb-12">
            Planes de Inversión Educativa
          </h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            {tuitionPlans.map((plan, index) => (
              <motion.div
                key={plan.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 ${
                  plan.popular ? 'ring-2 ring-primary-500 transform scale-105' : ''
                }`}
              >
                {plan.popular && (
                  <div className="bg-primary-600 text-white text-center py-2 text-sm font-semibold">
                    Más Popular
                  </div>
                )}
                
                <div className={`bg-gradient-to-r ${plan.color} p-6 text-white`}>
                  <h4 className="text-2xl font-bold mb-2">{plan.title}</h4>
                  <p className="text-white/90 mb-4">{plan.subtitle}</p>
                  <div className="text-3xl font-bold mb-2">{plan.monthlyFee}</div>
                  <div className="text-white/90 text-sm">por mes</div>
                </div>

                <div className="p-6">
                  <div className="mb-6">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-gray-600">Matrícula:</span>
                      <span className="font-semibold">{plan.enrollmentFee}</span>
                    </div>
                  </div>

                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-3">
                        <Star className="h-4 w-4 text-primary-600 flex-shrink-0" />
                        <span className="text-gray-600 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>

                   {/* <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`w-full py-3 rounded-lg font-semibold transition-all duration-300 ${
                      plan.popular
                        ? 'bg-primary-600 hover:bg-primary-700 text-white'
                        : 'bg-gray-100 hover:bg-primary-600 hover:text-white text-gray-700'
                    }`}
                  >
                    Solicitar Información
                  </motion.button>  */}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Scholarships */}
        {/* <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-white rounded-2xl p-12 mb-20"
        >
          <h3 className="text-3xl font-bold font-display text-center mb-12">
            Programa de Becas
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {scholarships.map((scholarship, index) => (
              <motion.div
                key={scholarship.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gradient-to-br from-primary-50 to-secondary-50 p-6 rounded-xl text-center"
              >
                <div className="bg-primary-600 text-white rounded-full w-16 h-16 flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {scholarship.percentage}
                </div>
                <h4 className="text-lg font-semibold mb-3">{scholarship.title}</h4>
                <p className="text-gray-600 text-sm">{scholarship.description}</p>
              </motion.div>
            ))}
          </div>

          <div className="text-center">
            <p className="text-gray-600 mb-6">
              Ofrecemos diversos programas de becas para apoyar a familias comprometidas 
              con la educación de excelencia.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-primary-600 hover:bg-primary-700 text-white font-semibold px-8 py-3 rounded-lg transition-colors duration-300"
            >
              Solicitar Beca
            </motion.button>
          </div>
        </motion.div> */}

        {/* Important Dates */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid lg:grid-cols-2 gap-12 items-center"
        >
          <div>
            <h3 className="text-3xl font-bold font-display mb-6">
              Fechas Importantes
            </h3>
            <div className="space-y-6">
              {importantDates.map((date, index) => (
                <motion.div
                  key={date.event}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="flex items-start space-x-4"
                >
                  <div className="bg-primary-600 text-white rounded-lg p-3 min-w-fit">
                    <Calendar className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="font-semibold text-primary-600 mb-1">
                      {date.date}
                    </div>
                    <h4 className="font-semibold text-gray-900 mb-1">
                      {date.event}
                    </h4>
                    <p className="text-gray-600 text-sm">
                      {date.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-br from-primary-600 to-secondary-500 rounded-2xl p-8 text-white">
            <h4 className="text-2xl font-bold mb-6">¿Necesitas más información?</h4>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5" />
                <span>+504  2226-4074    Cel: 9316-5278</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5" />
                <span>scarmelitano@yahoo.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5" />
                <span>Aldea Santa Rosa, km3 Salida Sur</span>
              </div>
              <div className="flex items-center space-x-3">
                <Clock className="h-5 w-5" />
                <span>Lun - Vie: 7:00 AM - 2:00 PM</span>
              </div>
              <div className="flex items-center space-x-3">
                <Clock className="h-5 w-5" />
                <span>Diciembre Lun - Vie: 8:00 AM - 12:00 M</span>
              </div>
            </div>

            <div className="space-y-3">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full bg-white text-primary-600 font-semibold py-3 rounded-lg hover:bg-gray-100 transition-colors duration-300"
              >
                Agendar Cita
              </motion.button>
              {/* <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full bg-white/20 hover:bg-white/30 text-white font-semibold py-3 rounded-lg transition-colors duration-300 flex items-center justify-center space-x-2"
              >
                <Download className="h-4 w-4" />
                <span>Descargar Prospecto</span>
              </motion.button> */}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}