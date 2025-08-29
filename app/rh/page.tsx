'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { 
  Users, 
  UserCheck, 
  GraduationCap, 
  TrendingUp,
  Shield,
  Clock,
  Zap,
  ArrowRight,
  CheckCircle,
  FileText,
  MessageSquare,
  Briefcase
} from 'lucide-react'
import toast from 'react-hot-toast'
import Header from '@/components/Header'

const RHPage = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const handleScheduleMeeting = () => {
    toast.success('Abrindo WhatsApp...')
    const message = encodeURIComponent('Olá! Gostaria de saber mais sobre o Agente de RH da DH Tecnologia.')
    const whatsappUrl = `https://wa.me/5514991239292?text=${message}`
    setTimeout(() => {
      window.open(whatsappUrl, '_blank')
    }, 1000)
  }

  const features = [
    {
      icon: UserCheck,
      title: 'Triagem Automática',
      description: 'Sistema inteligente que analisa currículos e qualifica candidatos automaticamente, identificando os melhores perfis.',
      color: 'from-orange-500 to-red-500'
    },
    {
      icon: GraduationCap,
      title: 'Onboarding Digital',
      description: 'Processo de integração automatizado que acelera a adaptação de novos funcionários à empresa.',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: MessageSquare,
      title: 'FAQ Inteligente',
      description: 'Sistema de perguntas frequentes que responde dúvidas de funcionários sobre políticas e procedimentos.',
      color: 'from-green-500 to-emerald-500'
    }
  ]

  const benefits = [
    {
      icon: TrendingUp,
      title: 'Eficiência no Recrutamento',
      description: 'Redução de até 70% no tempo de triagem de candidatos',
      value: '70%'
    },
    {
      icon: Shield,
      title: 'Satisfação dos Funcionários',
      description: 'Onboarding digital aumenta a satisfação e retenção de novos colaboradores',
      value: '85%'
    },
    {
      icon: Clock,
      title: 'Tempo de Resposta',
      description: 'Resposta instantânea a consultas de funcionários sobre políticas',
      value: '< 30s'
    }
  ]

  const useCases = [
    {
      icon: FileText,
      title: 'Triagem de Candidatos',
      description: 'Análise automática de currículos e perfil de candidatos para identificar os melhores matches.',
      features: ['Análise de currículos', 'Matching de perfis', 'Ranking de candidatos']
    },
    {
      icon: GraduationCap,
      title: 'Processo de Onboarding',
      description: 'Automação completa do processo de integração de novos funcionários.',
      features: ['Documentação digital', 'Treinamentos online', 'Acompanhamento de progresso']
    },
    {
      icon: MessageSquare,
      title: 'Suporte a Funcionários',
      description: 'Sistema de FAQ inteligente que responde dúvidas sobre políticas e procedimentos.',
      features: ['Base de conhecimento', 'Respostas personalizadas', 'Escalação quando necessário']
    }
  ]

  return (
    <main className="min-h-screen bg-dark-950">
      <Header />
      {/* Hero Section */}
      <section className="pt-20 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-dark-950 via-dark-900 to-dark-800"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(249,115,22,0.1),transparent_50%)]"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="flex items-center justify-center mb-6">
              <div className="w-20 h-20 bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl flex items-center justify-center">
                <Users className="w-10 h-10 text-white" />
              </div>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              Agente de <span className="text-gradient bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">RH</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
              Revolucione sua gestão de recursos humanos com IA inteligente. Triagem automática, onboarding digital e suporte completo aos funcionários.
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
              Tecnologia avançada que automatiza e otimiza todos os processos de recursos humanos.
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
                <div className="bg-gradient-to-br from-dark-800 to-dark-900 rounded-2xl p-8 border border-dark-700 hover:border-orange-500/50 transition-all duration-300 h-full">
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
              Números que falam por si: transformação real na gestão de recursos humanos.
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
                <div className="bg-gradient-to-br from-dark-800 to-dark-900 rounded-2xl p-8 border border-dark-700 hover:border-orange-500/50 transition-all duration-300">
                  <div className="w-16 h-16 bg-gradient-to-br from-dark-700 to-dark-800 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 border border-dark-600">
                    <benefit.icon className="w-8 h-8 text-orange-400" />
                  </div>
                  
                  <div className="text-4xl font-bold text-orange-400 mb-4">{benefit.value}</div>
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
              Aplicações práticas que transformam a gestão de recursos humanos.
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
                <div className="bg-gradient-to-br from-dark-800 to-dark-900 rounded-2xl p-8 border border-dark-700 hover:border-orange-500/50 transition-all duration-300 h-full">
                  <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <useCase.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-4">{useCase.title}</h3>
                  <p className="text-gray-300 mb-6 leading-relaxed">{useCase.description}</p>
                  
                  <div className="space-y-3">
                    {useCase.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-3">
                        <CheckCircle className="w-5 h-5 text-orange-500 flex-shrink-0" />
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
            <div className="bg-gradient-to-r from-orange-500/10 to-red-500/10 rounded-2xl p-8 border border-orange-500/20 max-w-4xl mx-auto">
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Pronto para revolucionar seu RH?
              </h3>
              <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
                Agende uma demonstração personalizada e descubra como o Agente de RH pode transformar sua gestão de recursos humanos em semanas.
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

export default RHPage
