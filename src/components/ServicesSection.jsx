
import React from 'react';
import { motion } from 'framer-motion';
import { Scale, HeartHandshake, Building2, GraduationCap, Plane, Wallet } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';

const ServicesSection = () => {
  const { toast } = useToast();

  const handleServiceClick = (service) => {
    toast({
      title: "Serviço solicitado",
      description: `Você demonstrou interesse em: ${service}. Nossa equipe entrará em contato.`,
    });
  };

  const services = [
    {
      icon: Scale,
      title: "Assistência Jurídica",
      description: "Corpo de advogados especialistas em direito administrativo e previdenciário à disposição."
    },
    {
      icon: HeartHandshake,
      title: "Convênios de Saúde",
      description: "Parcerias com clínicas, laboratórios e planos de saúde com tabelas diferenciadas."
    },
    {
      icon: GraduationCap,
      title: "Cursos e Capacitação",
      description: "Bolsas de estudo em faculdades e cursos de qualificação profissional gratuitos."
    },
    {
      icon: Wallet,
      title: "Clube de Vantagens",
      description: "Descontos exclusivos em farmácias, supermercados e lojas de varejo parceiras."
    },
    {
      icon: Plane,
      title: "Turismo e Lazer",
      description: "Excursões anuais e colônia de férias com preços subsidiados para a família."
    },
    {
      icon: Building2,
      title: "Apoio Institucional",
      description: "Suporte para demandas administrativas e mediação de conflitos no ambiente de trabalho."
    }
  ];

  return (
    <section id="servicos" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-[#1e3a5f] font-semibold tracking-wider uppercase text-sm mb-2 block">Benefícios Exclusivos</span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#1e3a5f] mb-6">Nossos Serviços</h2>
          <div className="w-24 h-1 bg-[#fbbf24] mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:border-[#fbbf24]/50 hover:shadow-lg transition-all cursor-pointer group"
              onClick={() => handleServiceClick(service.title)}
            >
              <div className="w-14 h-14 bg-[#1e3a5f] rounded-lg flex items-center justify-center mb-6 group-hover:bg-[#fbbf24] transition-colors duration-300">
                <service.icon className="w-7 h-7 text-white group-hover:text-[#1e3a5f] transition-colors duration-300" />
              </div>
              <h3 className="text-xl font-bold text-[#1e3a5f] mb-3">{service.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-6">
                {service.description}
              </p>
              <div className="flex items-center text-[#1e3a5f] font-semibold text-sm group-hover:text-[#fbbf24] transition-colors">
                Saiba mais
                <span className="ml-2">→</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
