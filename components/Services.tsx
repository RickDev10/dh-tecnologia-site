'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { 
  TrendingUp, 
  Database, 
  Headphones, 
  Users, 
  Settings,
  ArrowRight,
  Zap,
  Shield,
  Clock,
  BarChart3
} from 'lucide-react'

const Services = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const services = [
    {
      icon: TrendingUp,
      title: 'Agentes de Vendas',
      description: 'Gestão inteligente de leads inbound. Agentes de vendas com IA que respondem instantaneamente aos leads recebidos, qualificam prospects e os nutrem através do funil de vendas.',
      features: ['Qualificação automática', 'Follow-up personalizado', 'Integração CRM'],
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Database,
      title: 'Agentes de Dados & Analytics',
      description: 'Agentes de analytics avançados que coletam, processam e analisam automaticamente dados empresariais para gerar insights acionáveis e relatórios abrangentes.',
      features: ['Análise preditiva', 'Dashboards automáticos', 'Alertas inteligentes'],
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Headphones,
      title: 'Agentes de Atendimento',
      description: 'Suporte ao cliente inteligente 24/7. Agentes de serviço ao cliente abrangentes que fornecem respostas instantâneas e precisas em múltiplos canais.',
      features: ['Multi-canal', 'Resolução automática', 'Escalação inteligente'],
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: Users,
      title: 'Agentes de RH',
      description: 'Agentes de RH que otimizam recrutamento, onboarding e consultas de funcionários, lidando com tudo desde triagem de candidatos até questões de política.',
      features: ['Triagem automática', 'Onboarding digital', 'FAQ inteligente'],
      color: 'from-orange-500 to-red-500'
    },
    {
      icon: BarChart3,
      title: 'Agente Agronegócio',
      description: 'Soluções inteligentes para o setor agrícola. Agentes especializados em coleta de dados de colheitas e plantios, análise de estoque de insumos e combustíveis, e localização em tempo real dos operadores.',
      features: ['Monitoramento de culturas', 'Localização em tempo real', 'Gestão de recursos'],
      color: 'from-green-600 to-green-400'
    },
    {
      icon: Settings,
      title: 'Agentes de IA Personalizados',
      description: 'Soluções de inteligência de workflow sob medida. Agentes de IA projetados para seus processos de negócios únicos, desde processamento de faturas até monitoramento de conformidade.',
      features: ['Workflow customizado', 'Integração nativa', 'Escalabilidade'],
      color: 'from-indigo-500 to-purple-500'
    }
  ]

  const features = [
    {
      icon: Shield,
      title: 'Segurança Empresarial',
      description: 'Implantações on-premise mantêm seus dados seguros e em conformidade dentro de sua própria infraestrutura.',
      color: 'text-green-400'
    },
    {
      icon: Clock,
      title: 'Operações 24/7',
      description: 'Agentes de IA trabalham continuamente, lidando com múltiplas conversas simultaneamente sem pausas.',
      color: 'text-blue-400'
    },
    {
      icon: Zap,
      title: 'Integração de Sistemas',
      description: 'Compatibilidade nativa com seus CRM, helpdesk e ferramentas de negócio existentes.',
      color: 'text-purple-400'
    },
    {
      icon: BarChart3,
      title: 'Analytics em Tempo Real',
      description: 'Dashboards abrangentes mostram métricas de performance e insights de ROI para otimização.',
      color: 'text-orange-400'
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  }

  return (
    <section id="services" className="py-20 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-dark-950 to-dark-900"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Grau empresarial. <span className="text-gradient">Velocidade de startup.</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Libere o poder transformador dos Agentes de IA e automação através dos nossos 5 verticais testados em batalha.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group relative"
            >
              <div className="bg-gradient-to-br from-dark-800 to-dark-900 rounded-2xl p-8 border border-dark-700 hover:border-primary-500/50 transition-all duration-300 h-full">
                {/* Icon */}
                <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className="w-8 h-8 text-white" />
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                <p className="text-gray-300 mb-6 leading-relaxed">{service.description}</p>

                {/* Features */}
                <div className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                      <span className="text-sm text-gray-400">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <motion.button
                  whileHover={{ x: 5 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => {
                    switch(service.title) {
                      case 'Agentes de Vendas':
                        window.location.href = '/vendas'
                        break
                      case 'Agentes de Dados & Analytics':
                        window.location.href = '/dados-analytics'
                        break
                      case 'Agentes de Atendimento':
                        window.location.href = '/atendimento'
                        break
                      case 'Agentes de RH':
                        window.location.href = '/rh'
                        break
                      case 'Agente Agronegócio':
                        window.location.href = '/agronegocio'
                        break
                      case 'Agentes de IA Personalizados':
                        window.location.href = '/personalizados'
                        break
                      default:
                        break
                    }
                  }}
                  className="flex items-center space-x-2 text-primary-500 hover:text-primary-400 transition-colors duration-200"
                >
                  <span className="font-semibold">Saiba mais</span>
                  <ArrowRight size={16} />
                </motion.button>

                {/* Hover Glow */}
                <div className="absolute inset-0 bg-gradient-to-r from-primary-500/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Features Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center mb-16"
        >
          <h3 className="text-3xl md:text-4xl font-bold mb-6">
            Por que superamos a <span className="text-gradient">concorrência</span>
          </h3>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Capacidades avançadas de IA que entregam resultados superiores mantendo seus dados seguros e suas operações funcionando perfeitamente 24 horas por dia.
          </p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className="text-center group"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-dark-800 to-dark-700 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 border border-dark-600">
                <feature.icon className={`w-8 h-8 ${feature.color}`} />
              </div>
              <h4 className="text-xl font-semibold text-white mb-4">{feature.title}</h4>
              <p className="text-gray-400 leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Services
