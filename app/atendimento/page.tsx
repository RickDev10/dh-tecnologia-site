'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { 
  Headphones, 
  MessageSquare, 
  Smartphone, 
  TrendingUp,
  Shield,
  Clock,
  Zap,
  ArrowRight,
  CheckCircle,
  Users,
  Globe,
  Phone
} from 'lucide-react'
import toast from 'react-hot-toast'
import Header from '@/components/Header'

const AtendimentoPage = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const handleScheduleMeeting = () => {
    toast.success('Abrindo WhatsApp...')
    const message = encodeURIComponent('Olá! Gostaria de saber mais sobre o Agente de Atendimento da DH Tecnologia.')
    const whatsappUrl = `https://wa.me/5514991239292?text=${message}`
    setTimeout(() => {
      window.open(whatsappUrl, '_blank')
    }, 1000)
  }

  const features = [
    {
      icon: Globe,
      title: 'Multi-canal',
      description: 'Atendimento integrado em múltiplos canais: WhatsApp, email, chat, telefone e redes sociais.',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: MessageSquare,
      title: 'Resolução Automática',
      description: 'IA avançada resolve até 80% das consultas automaticamente, sem intervenção humana.',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Users,
      title: 'Escalação Inteligente',
      description: 'Sistema inteligente que identifica quando escalar para atendentes humanos especializados.',
      color: 'from-purple-500 to-pink-500'
    }
  ]

  const benefits = [
    {
      icon: TrendingUp,
      title: 'Satisfação do Cliente',
      description: 'Resposta instantânea aumenta a satisfação do cliente em até 85%',
      value: '85%'
    },
    {
      icon: Shield,
      title: 'Disponibilidade 24/7',
      description: 'Atendimento ininterrupto, 24 horas por dia, 7 dias por semana',
      value: '24/7'
    },
    {
      icon: Clock,
      title: 'Tempo de Resposta',
      description: 'Resposta instantânea a consultas, eliminando filas de espera',
      value: '< 5s'
    }
  ]

  const useCases = [
    {
      icon: Phone,
      title: 'Suporte Técnico',
      description: 'Resolução automática de problemas técnicos comuns e escalação inteligente.',
      features: ['Diagnóstico automático', 'Soluções passo a passo', 'Escalação quando necessário']
    },
    {
      icon: MessageSquare,
      title: 'Vendas e Consultas',
      description: 'Atendimento a consultas de vendas, informações de produtos e orçamentos.',
      features: ['Catálogo de produtos', 'Cálculo de preços', 'Agendamento de vendas']
    },
    {
      icon: Users,
      title: 'FAQ Inteligente',
      description: 'Sistema de perguntas frequentes que aprende e melhora com cada interação.',
      features: ['Base de conhecimento', 'Aprendizado contínuo', 'Respostas personalizadas']
    }
  ]

  return (
    <main className="min-h-screen bg-dark-950">
      <Header />
      {/* Hero Section */}
      <section className="pt-20 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-dark-950 via-dark-900 to-dark-800"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(34,197,94,0.1),transparent_50%)]"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="flex items-center justify-center mb-6">
              <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center">
                <Headphones className="w-10 h-10 text-white" />
              </div>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              Agente de <span className="text-gradient bg-gradient-to-r from-green-500 to-emerald-500 bg-clip-text text-transparent">Atendimento</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
              Suporte ao cliente inteligente 24/7. Respostas instantâneas e precisas em múltiplos canais com escalação inteligente.
            </p>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleScheduleMeeting}
              className="btn-primary flex items-center space-x-2 mx-auto"
            >
              <span>Solicitar Demonstração</span>
              <ArrowRight size={20} />
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Funcionalidades <span className="text-gradient">Principais</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Tecnologia avançada que revoluciona o atendimento ao cliente com IA inteligente e disponibilidade total.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                whileHover={{ y: -10 }}
                className="group relative"
              >
                <div className="bg-gradient-to-br from-dark-800 to-dark-900 rounded-2xl p-8 border border-dark-700 hover:border-green-500/50 transition-all duration-300 h-full">
                  <div className={`w-16 h-16 bg-gradient-to-r ${feature.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-4">{feature.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 relative bg-dark-900">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Resultados <span className="text-gradient">Comprovados</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Números que falam por si: transformação real no atendimento ao cliente.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                whileHover={{ y: -5 }}
                className="text-center group"
              >
                <div className="bg-gradient-to-br from-dark-800 to-dark-900 rounded-2xl p-8 border border-dark-700 hover:border-green-500/50 transition-all duration-300">
                  <div className="w-16 h-16 bg-gradient-to-br from-dark-700 to-dark-800 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 border border-dark-600">
                    <benefit.icon className="w-8 h-8 text-green-400" />
                  </div>
                  
                  <div className="text-4xl font-bold text-green-400 mb-4">{benefit.value}</div>
                  <h4 className="text-xl font-semibold text-white mb-4">{benefit.title}</h4>
                  <p className="text-gray-400 leading-relaxed">{benefit.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Casos de <span className="text-gradient">Uso</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Aplicações práticas que transformam a experiência do cliente.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {useCases.map((useCase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                whileHover={{ y: -10 }}
                className="group relative"
              >
                <div className="bg-gradient-to-br from-dark-800 to-dark-900 rounded-2xl p-8 border border-dark-700 hover:border-green-500/50 transition-all duration-300 h-full">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <useCase.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-4">{useCase.title}</h3>
                  <p className="text-gray-300 mb-6 leading-relaxed">{useCase.description}</p>
                  
                  <div className="space-y-3">
                    {useCase.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-3">
                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                        <span className="text-gray-400">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative bg-dark-900">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="bg-gradient-to-r from-green-500/10 to-emerald-500/10 rounded-2xl p-8 border border-green-500/20 max-w-4xl mx-auto">
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Pronto para revolucionar seu atendimento?
              </h3>
              <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
                Agende uma demonstração personalizada e descubra como o Agente de Atendimento pode transformar sua experiência do cliente em semanas.
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleScheduleMeeting}
                className="btn-primary flex items-center space-x-2 mx-auto"
              >
                <span>Agendar Demonstração</span>
                <ArrowRight size={20} />
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  )
}

export default AtendimentoPage
