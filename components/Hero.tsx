'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { ArrowRight, Play, Bot, Zap, TrendingUp } from 'lucide-react'
import toast from 'react-hot-toast'

const Hero = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const handleScheduleMeeting = () => {
    toast.success('Redirecionando para agendamento...')
    setTimeout(() => {
      window.open('https://calendly.com/dhtecnologia', '_blank')
    }, 1000)
  }

  const handleWatchDemo = () => {
    toast.success('Abrindo demonstração...')
    // Aqui você pode adicionar a lógica para abrir um vídeo ou demo
  }

  const stats = [
    { icon: Bot, value: '7,000+', label: 'Profissionais de IA' },
    { icon: Zap, value: '24/7', label: 'Operação Contínua' },
    { icon: TrendingUp, value: '300%', label: 'Aumento de ROI' },
  ]

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-dark-950 via-dark-900 to-dark-800"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(249,115,22,0.1),transparent_50%)]"></div>
      
      {/* Floating Elements */}
      <motion.div
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-20 left-10 w-4 h-4 bg-primary-500 rounded-full opacity-30"
      />
      <motion.div
        animate={{ y: [0, 20, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-40 right-20 w-6 h-6 bg-primary-400 rounded-full opacity-20"
      />
      <motion.div
        animate={{ y: [0, -15, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-40 left-20 w-3 h-3 bg-primary-600 rounded-full opacity-40"
      />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-8"
          >
            <div className="space-y-6">
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight"
              >
                Construímos{' '}
                <span className="text-gradient bg-gradient-to-r from-primary-500 to-primary-600 bg-clip-text text-transparent">
                  Agentes de IA
                </span>{' '}
                que geram ROI
              </motion.h1>
              
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-xl text-gray-300 leading-relaxed max-w-2xl"
              >
                O parceiro desafiador em transformação digital. Confiado por mais de 7.000 profissionais de IA: 
                Agentes testados em batalha e blueprint comprovado que realmente funcionam.
              </motion.p>
            </div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="grid grid-cols-3 gap-6"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  className="text-center"
                >
                  <div className="flex items-center justify-center mb-2">
                    <stat.icon className="w-6 h-6 text-primary-500" />
                  </div>
                  <div className="text-2xl font-bold text-white">{stat.value}</div>
                  <div className="text-sm text-gray-400">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleScheduleMeeting}
                className="btn-primary flex items-center justify-center space-x-2"
              >
                <span>Agendar Reunião</span>
                <ArrowRight size={20} />
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleWatchDemo}
                className="btn-secondary flex items-center justify-center space-x-2"
              >
                <Play size={20} />
                <span>Ver Demonstração</span>
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Visual Demo */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            <div className="relative">
              {/* Main Card */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="bg-gradient-to-br from-dark-800 to-dark-900 rounded-2xl p-8 border border-dark-700 shadow-2xl"
              >
                <div className="space-y-6">
                  {/* AI Agent Demo */}
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-primary-500 to-primary-600 rounded-full flex items-center justify-center">
                      <Bot className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-white font-semibold">DH AI Assistant</h3>
                      <p className="text-gray-400 text-sm">Online • Respondendo</p>
                    </div>
                  </div>

                  {/* Chat Messages */}
                  <div className="space-y-4">
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 1 }}
                      className="bg-dark-700 rounded-lg p-4"
                    >
                      <p className="text-gray-300">Olá! Como posso ajudar hoje?</p>
                    </motion.div>
                    
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 1.5 }}
                      className="bg-dark-700 rounded-lg p-4"
                    >
                      <p className="text-gray-300">Analisando seus dados...</p>
                    </motion.div>
                    
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 2 }}
                      className="bg-primary-500/20 border border-primary-500/30 rounded-lg p-4"
                    >
                      <p className="text-primary-300 flex items-center">
                        <span className="loading-dots">Processando</span>
                      </p>
                    </motion.div>
                  </div>

                  {/* Metrics */}
                  <div className="grid grid-cols-3 gap-4 pt-4 border-t border-dark-700">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-primary-500">98%</div>
                      <div className="text-xs text-gray-400">Precisão</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-primary-500">24/7</div>
                      <div className="text-xs text-gray-400">Disponível</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-primary-500">5s</div>
                      <div className="text-xs text-gray-400">Resposta</div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary-500/20 to-transparent rounded-2xl blur-3xl -z-10"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Hero
