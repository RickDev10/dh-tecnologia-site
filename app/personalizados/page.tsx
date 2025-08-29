'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { 
  Settings, 
  Code, 
  Zap, 
  TrendingUp,
  Shield,
  Clock,
  ArrowRight,
  CheckCircle,
  Users,
  Database,
  Workflow
} from 'lucide-react'
import toast from 'react-hot-toast'
import Header from '@/components/Header'

const PersonalizadosPage = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const handleScheduleMeeting = () => {
    toast.success('Abrindo WhatsApp...')
    const message = encodeURIComponent('Olá! Gostaria de saber mais sobre os Agentes de IA Personalizados da DH Tecnologia.')
    const whatsappUrl = `https://wa.me/5514991239292?text=${message}`
    setTimeout(() => {
      window.open(whatsappUrl, '_blank')
    }, 1000)
  }

  const features = [
    {
      icon: Workflow,
      title: 'Workflow Customizado',
      description: 'Desenvolvimento de workflows de IA sob medida para seus processos de negócios únicos.',
      color: 'from-indigo-500 to-purple-500'
    },
    {
      icon: Code,
      title: 'Integração Nativa',
      description: 'Integração profunda com seus sistemas existentes, APIs e ferramentas de negócio.',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Zap,
      title: 'Escalabilidade',
      description: 'Arquitetura escalável que cresce junto com sua empresa e necessidades.',
      color: 'from-green-500 to-emerald-500'
    }
  ]

  const benefits = [
    {
      icon: TrendingUp,
      title: 'Eficiência Operacional',
      description: 'Automação de processos específicos aumenta a produtividade em até 200%',
      value: '200%'
    },
    {
      icon: Shield,
      title: 'Processos Únicos',
      description: 'Soluções desenvolvidas especificamente para suas necessidades e processos',
      value: '100%'
    },
    {
      icon: Clock,
      title: 'Tempo de Implementação',
      description: 'Desenvolvimento e implementação de soluções personalizadas em semanas',
      value: '2-4 semanas'
    }
  ]

  const useCases = [
    {
      icon: Database,
      title: 'Processamento de Documentos',
      description: 'Automação inteligente de processamento de faturas, contratos e documentos.',
      features: ['OCR avançado', 'Extração de dados', 'Validação automática']
    },
    {
      icon: Workflow,
      title: 'Monitoramento de Conformidade',
      description: 'Sistema de monitoramento contínuo para garantir conformidade regulatória.',
      features: ['Alertas automáticos', 'Relatórios de conformidade', 'Auditoria digital']
    },
    {
      icon: Code,
      title: 'Automação de Sistemas',
      description: 'Integração e automação de sistemas legados e novos sistemas.',
      features: ['APIs customizadas', 'Migração de dados', 'Sincronização em tempo real']
    }
  ]

  return (
    <main className="min-h-screen bg-dark-950">
      <Header />
      {/* Hero Section */}
      <section className="pt-20 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-dark-950 via-dark-900 to-dark-800"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(99,102,241,0.1),transparent_50%)]"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="flex items-center justify-center mb-6">
              <div className="w-20 h-20 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-2xl flex items-center justify-center">
                <Settings className="w-10 h-10 text-white" />
              </div>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              Agentes de IA <span className="text-gradient bg-gradient-to-r from-indigo-500 to-purple-500 bg-clip-text text-transparent">Personalizados</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
              Soluções de inteligência de workflow sob medida. Agentes de IA projetados especificamente para seus processos de negócios únicos.
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
              Tecnologia avançada desenvolvida especificamente para suas necessidades e processos únicos.
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
                <div className="bg-gradient-to-br from-dark-800 to-dark-900 rounded-2xl p-8 border border-dark-700 hover:border-indigo-500/50 transition-all duration-300 h-full">
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
              Números que falam por si: transformação real com soluções personalizadas.
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
                <div className="bg-gradient-to-br from-dark-800 to-dark-900 rounded-2xl p-8 border border-dark-700 hover:border-indigo-500/50 transition-all duration-300">
                  <div className="w-16 h-16 bg-gradient-to-br from-dark-700 to-dark-800 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 border border-dark-600">
                    <benefit.icon className="w-8 h-8 text-indigo-400" />
                  </div>
                  
                  <div className="text-4xl font-bold text-indigo-400 mb-4">{benefit.value}</div>
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
              Aplicações práticas que transformam processos específicos do seu negócio.
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
                <div className="bg-gradient-to-br from-dark-800 to-dark-900 rounded-2xl p-8 border border-dark-700 hover:border-indigo-500/50 transition-all duration-300 h-full">
                  <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <useCase.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-4">{useCase.title}</h3>
                  <p className="text-gray-300 mb-6 leading-relaxed">{useCase.description}</p>
                  
                  <div className="space-y-3">
                    {useCase.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-3">
                        <CheckCircle className="w-5 h-5 text-indigo-500 flex-shrink-0" />
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
            <div className="bg-gradient-to-r from-indigo-500/10 to-purple-500/10 rounded-2xl p-8 border border-indigo-500/20 max-w-4xl mx-auto">
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Pronto para soluções personalizadas?
              </h3>
              <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
                Agende uma demonstração personalizada e descubra como os Agentes de IA Personalizados podem transformar seus processos únicos em semanas.
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

export default PersonalizadosPage
