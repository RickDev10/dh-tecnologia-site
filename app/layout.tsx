import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Toaster } from 'react-hot-toast'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'DH Tecnologia - Transformação Digital com IA',
  description: 'O parceiro desafiador em transformação digital. Construímos Agentes de IA que geram ROI real para seu negócio.',
  keywords: 'IA, Inteligência Artificial, Automação, Transformação Digital, Agentes de IA, DH Tecnologia',
  authors: [{ name: 'DH Tecnologia' }],
  openGraph: {
    title: 'DH Tecnologia - Transformação Digital com IA',
    description: 'O parceiro desafiador em transformação digital. Construímos Agentes de IA que geram ROI real para seu negócio.',
    url: 'https://dhtecnologia.com.br',
    siteName: 'DH Tecnologia',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'DH Tecnologia - Transformação Digital com IA',
      },
    ],
    locale: 'pt_BR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'DH Tecnologia - Transformação Digital com IA',
    description: 'O parceiro desafiador em transformação digital. Construímos Agentes de IA que geram ROI real para seu negócio.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#f97316" />
      </head>
      <body className={inter.className}>
        {children}
        <Toaster
          position="top-right"
          toastOptions={{
            duration: 4000,
            style: {
              background: '#1e293b',
              color: '#fff',
              border: '1px solid #f97316',
            },
            success: {
              iconTheme: {
                primary: '#f97316',
                secondary: '#fff',
              },
            },
          }}
        />
      </body>
    </html>
  )
}
