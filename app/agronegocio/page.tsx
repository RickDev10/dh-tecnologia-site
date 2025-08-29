'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { 
  BarChart3, 
  MapPin, 
  Database, 
  TrendingUp,
  Shield,
  Clock,
  Zap,
  ArrowRight,
  CheckCircle,
  Users,
  Truck,
  Leaf
} from 'lucide-react'
import toast from 'react-hot-toast'
import Header from '@/components/Header'

const AgronegocioPage = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const handleScheduleMeeting = () => {
    toast.success('Abrindo WhatsApp...')
    const message = encodeURIComponent('Olá! Gostaria de saber mais sobre o Agente Agronegócio da DH Tecnologia.')
    const whatsappUrl = `https://wa.me/5514991239292?text=${message}`
    setTimeout(() => {
      window.open(whatsappUrl, '_blank')
    }, 1000)
  }

  const features = [
    {
      icon: Database,
      title: 'Coleta de Dados Inteligente',
      description: 'Sistema automatizado de coleta de dados de colheitas e plantios em tempo real, integrando informações de múltiplas fontes.',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: MapPin,
      title: 'Localização em Tempo Real',
      description: 'Rastreamento GPS dos operadores e equipamentos, permitindo monitoramento preciso da localização e movimentação da equipe.',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: BarChart3,
      title: 'Análise de Estoque',
      description: 'Controle inteligente de insumos, combustíveis e recursos, com alertas automáticos para reposição e otimização de custos.',
      color: 'from-purple-500 to-pink-500'
    }
  ]

  const benefits = [
    {
      icon: TrendingUp,
      title: 'Aumento de Produtividade',
      description: 'Otimização de processos agrícolas com redução de até 40% no tempo de operação',
      value: '40%'
    },
    {
      icon: Shield,
      title: 'Controle Total',
      description: 'Visibilidade completa das operações com dados em tempo real',
      value: '100%'
    },
    {
      icon: Clock,
      title: 'Economia de Tempo',
      description: 'Redução significativa no tempo de gestão e tomada de decisões',
      value: '60%'
    }
  ]

  const useCases = [
    {
      icon: Leaf,
      title: 'Monitoramento de Culturas',
      description: 'Acompanhamento detalhado do desenvolvimento das plantações, com alertas para pragas, doenças e condições climáticas.',
      features: ['Sensores IoT', 'Imagens de satélite', 'Análise preditiva']
    },
    {
      icon: Users,
      title: 'Gestão de Operadores',
      description: 'Controle de equipe com localização em tempo real, histórico de atividades e otimização de rotas.',
      features: ['GPS tracking', 'Relatórios de produtividade', 'Gestão de turnos']
    },
    {
      icon: Truck,
      title: 'Controle de Recursos',
      description: 'Gestão inteligente de estoque de insumos, combustíveis e equipamentos com alertas automáticos.',
      features: ['Controle de estoque', 'Alertas de reposição', 'Análise de custos']
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
              <div className="w-20 h-20 bg-gradient-to-r from-green-600 to-green-400 rounded-2xl flex items-center justify-center">
                <BarChart3 className="w-10 h-10 text-white" />
              </div>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              Agente <span className="text-gradient bg-gradient-to-r from-green-500 to-green-400 bg-clip-text text-transparent">Agronegócio</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
              Revolucione sua operação agrícola com IA inteligente. Coleta de dados, localização em tempo real e gestão completa de recursos em uma única plataforma.
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
              Tecnologia avançada que transforma dados em insights acionáveis para maximizar sua produtividade agrícola.
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
              Números que falam por si: transformação real na gestão agrícola.
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
              Aplicações práticas que transformam a realidade do campo.
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
                  <div className="w-16 h-16 bg-gradient-to-br from-green-600 to-green-400 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
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
            <div className="bg-gradient-to-r from-green-500/10 to-green-600/10 rounded-2xl p-8 border border-green-500/20 max-w-4xl mx-auto">
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Pronto para revolucionar sua operação agrícola?
              </h3>
              <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
                Agende uma demonstração personalizada e descubra como o Agente Agronegócio pode transformar sua produtividade em semanas.
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

export default AgronegocioPage
