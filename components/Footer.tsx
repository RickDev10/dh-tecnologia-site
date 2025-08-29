'use client'

import { motion } from 'framer-motion'
import { 
  Mail, 
  Phone, 
  MapPin,
  ArrowUp,
  Heart
} from 'lucide-react'

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const currentYear = new Date().getFullYear()

  const footerLinks = {
    services: [
      { name: 'Agentes de IA', href: '#services' },
      { name: 'Automação', href: '#services' },
      { name: 'Consultoria', href: '#services' },
      { name: 'Implementação', href: '#services' },
    ],
    company: [
      { name: 'Sobre Nós', href: '#about' },
      { name: 'Equipe', href: '#about' },
      { name: 'Carreiras', href: '#careers' },
      { name: 'Contato', href: '#contact' },
    ],
    resources: [
      { name: 'Blog', href: '/blog' },
      { name: 'Documentação', href: '/docs' },
      { name: 'Suporte', href: '/support' },
      { name: 'FAQ', href: '/faq' },
    ],
  }



  const contactInfo = [
    { icon: Mail, text: 'contato@dhtecnologia.com.br', href: 'mailto:contato@dhtecnologia.com.br' },
    { icon: Phone, text: '+55 (14) 99123-9292', href: 'https://wa.me/5514991239292' },
    { icon: MapPin, text: 'Jaú, SP - Brasil', href: '#' },
  ]

  return (
    <footer id="contact" className="bg-dark-950 border-t border-dark-800 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(249,115,22,0.05),transparent_50%)]"></div>
      
      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8 mb-12">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-1"
          >
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-primary-500 to-primary-600 rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-xl">DH</span>
              </div>
              <span className="text-white font-bold text-2xl">Tecnologia</span>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              DH Tecnologia é um parceiro de soluções de IA que impulsiona a produtividade e escalabilidade do seu negócio através de agentes inteligentes e automação avançada.
            </p>
          </motion.div>

          {/* Services Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4 className="text-white font-semibold text-lg mb-6">Serviços</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.1 + index * 0.1 }}
                >
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-primary-500 transition-colors duration-200 hover:translate-x-1 inline-block"
                  >
                    {link.name}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Company Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="text-white font-semibold text-lg mb-6">Empresa</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
                >
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-primary-500 transition-colors duration-200 hover:translate-x-1 inline-block"
                  >
                    {link.name}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h4 className="text-white font-semibold text-lg mb-6">Contato</h4>
            <div className="space-y-4">
              {contactInfo.map((contact, index) => (
                <motion.a
                  key={index}
                  href={contact.href}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                  className="flex items-center space-x-3 text-gray-400 hover:text-primary-500 transition-colors duration-200 group"
                >
                  <contact.icon className="w-5 h-5 text-primary-500 group-hover:scale-110 transition-transform duration-200" />
                  <span>{contact.text}</span>
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="border-t border-dark-800 pt-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-2 text-gray-400">
              <span>&copy; {currentYear} DH Tecnologia. Todos os direitos reservados.</span>
              <Heart className="w-4 h-4 text-primary-500" />
            </div>
            
            <div className="flex items-center space-x-6">
              <a href="/privacy" className="text-gray-400 hover:text-primary-500 transition-colors duration-200">
                Política de Privacidade
              </a>
              <a href="/terms" className="text-gray-400 hover:text-primary-500 transition-colors duration-200">
                Termos de Uso
              </a>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll to Top Button */}
      <motion.button
        onClick={scrollToTop}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-8 right-8 w-12 h-12 bg-gradient-to-r from-primary-500 to-primary-600 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 z-50"
        aria-label="Voltar ao topo"
      >
        <ArrowUp className="w-6 h-6 text-white" />
      </motion.button>
    </footer>
  )
}

export default Footer
