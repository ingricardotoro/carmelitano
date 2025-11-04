import type { Metadata } from 'next'
import { Inter, Poppins } from 'next/font/google'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
})

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-poppins',
})

export const metadata: Metadata = {
  title: 'Centro de Educación Bilingüe Carmelitano San José',
  description: 'Educación de calidad con enfoque bilingüe. Formando líderes del futuro con valores cristianos y excelencia académica.',
  keywords: ['educación bilingüe', 'colegio', 'educación cristiana', 'San José', 'Carmelitano'],
  openGraph: {
    title: 'Centro de Educación Bilingüe Carmelitano San José',
    description: 'Educación de calidad con enfoque bilingüe. Formando líderes del futuro con valores cristianos y excelencia académica.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className={`${inter.variable} ${poppins.variable}`}>
      <body className="font-sans antialiased">
        {children}
      </body>
    </html>
  )
}