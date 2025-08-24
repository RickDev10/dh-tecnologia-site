'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { 
  Search, 
  Code, 
  Rocket, 
  CheckCircle,
  ArrowRight,
  Target,
  Zap,
  Shield
} from 'lucide-react'

const Process = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const steps = [
    {
      number: '01',
      icon: Search,
      title: 'Mapeamento de Oportunidades de IA',
      description: 'Conduzimos um diagnóstico abrangente de 3 semanas com seus stakeholders para identificar gargalos e quantificar ROIs de automação de IA.',
      features: [
        'Análise de processos atuais',
        'Identificação de gargalos',
        'Quantificação de ROI',
        'Roadmap personalizado'
      ],
      color: 'from-blue-500 to-cyan-500'
    },
    {
      number: '02',
      icon: Code,
      title: 'Construção e Teste Rápido',
      description: 'Nossa equipe cria ferramentas personalizadas que se adequam às suas necessidades de negócio, construindo demos funcionais em dias, não meses.',
      features: [
        'Desenvolvimento ágil',
        'Prototipagem rápida',
        'Testes iterativos',
        'Feedback contínuo'
      ],
      color: 'from-purple-500 to-pink-500'
    },
    {
      number: '03',
      icon: Rocket,
      title: 'Implantação Segura em Produção',
      description: 'Implantamos e gerenciamos todos os agentes de IA exclusivamente em suas instalações para garantir máxima segurança de dados e conformidade.',
      features: [
        'Deploy on-premise',
        'Monitoramento 24/7',
        'Suporte técnico',
        'Atualizações contínuas'
      ],
      color: 'from-green-500 to-emerald-500'
    }
  ]

  const benefits = [
    {
      icon: Target,
      title: 'Resultados Mensuráveis',
      description: 'ROI claro e métricas de performance em tempo real',
      value: '300%'
    },
    {
      icon: Zap,
      title: 'Implementação Rápida',
      description: 'De protótipo a produção em semanas, não meses',
      value: '3x'
    },
    {
      icon: Shield,
      title: 'Segurança Garantida',
      description: 'Dados protegidos com infraestrutura própria',
      value: '100%'
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  }

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-dark-900 to-dark-950"></div>
      
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
            Como identificamos e resolvemos rapidamente{' '}
            <span className="text-gradient">gargalos</span> com soluções avançadas baseadas em IA
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto">
            Nossa metodologia comprovada garante resultados rápidos e mensuráveis, 
            transformando seus processos em semanas, não meses.
          </p>
        </motion.div>

        {/* Process Steps */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid lg:grid-cols-3 gap-8 mb-20"
        >
          {steps.map((step, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -10 }}
              className="relative group"
            >
              {/* Connection Line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-primary-500 to-transparent transform -translate-y-1/2 z-0"></div>
              )}

              <div className="bg-gradient-to-br from-dark-800 to-dark-900 rounded-2xl p-8 border border-dark-700 hover:border-primary-500/50 transition-all duration-300 h-full relative z-10">
                {/* Step Number */}
                <div className="flex items-center justify-between mb-6">
                  <div className={`w-16 h-16 bg-gradient-to-r ${step.color} rounded-xl flex items-center justify-center`}>
                    <step.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-6xl font-bold text-dark-600 group-hover:text-primary-500 transition-colors duration-300">
                    {step.number}
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold text-white mb-4">{step.title}</h3>
                <p className="text-gray-300 mb-6 leading-relaxed">{step.description}</p>

                {/* Features */}
                <div className="space-y-3">
                  {step.features.map((feature, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, x: -20 }}
                      animate={inView ? { opacity: 1, x: 0 } : {}}
                      transition={{ delay: 0.5 + idx * 0.1 }}
                      className="flex items-center space-x-3"
                    >
                      <CheckCircle className="w-5 h-5 text-primary-500 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </motion.div>
                  ))}
                </div>

                {/* Hover Glow */}
                <div className="absolute inset-0 bg-gradient-to-r from-primary-500/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Benefits Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center mb-16"
        >
          <h3 className="text-3xl md:text-4xl font-bold mb-6">
            Resultados que <span className="text-gradient">falam por si</span>
          </h3>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Nossa abordagem comprovada garante resultados rápidos e mensuráveis para seu negócio.
          </p>
        </motion.div>

        {/* Benefits Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid md:grid-cols-3 gap-8"
        >
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -5, scale: 1.02 }}
              className="text-center group"
            >
              <div className="bg-gradient-to-br from-dark-800 to-dark-900 rounded-2xl p-8 border border-dark-700 hover:border-primary-500/50 transition-all duration-300">
                {/* Icon */}
                <div className="w-16 h-16 bg-gradient-to-br from-dark-700 to-dark-800 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 border border-dark-600">
                  <benefit.icon className="w-8 h-8 text-primary-500" />
                </div>

                {/* Value */}
                <div className="text-4xl font-bold text-primary-500 mb-4">{benefit.value}</div>

                {/* Content */}
                <h4 className="text-xl font-semibold text-white mb-4">{benefit.title}</h4>
                <p className="text-gray-400 leading-relaxed">{benefit.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-primary-500/10 to-primary-600/10 rounded-2xl p-8 border border-primary-500/20">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Pronto para começar sua transformação?
            </h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Agende uma consulta gratuita e descubra como podemos transformar seus processos com IA em apenas algumas semanas.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-primary flex items-center space-x-2 mx-auto"
            >
              <span>Agendar Consulta Gratuita</span>
              <ArrowRight size={20} />
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Process
