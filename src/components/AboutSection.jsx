
import React from 'react';
import { motion } from 'framer-motion';
import { Target, Eye, Heart, History } from 'lucide-react';

const AboutSection = () => {
  const cards = [
    {
      icon: Target,
      title: "Missão",
      description: "Representar e defender os servidores públicos, buscando a valorização profissional e a garantia de direitos constitucionais."
    },
    {
      icon: Eye,
      title: "Visão",
      description: "Ser a maior referência sindical do Norte e Nordeste, reconhecida pela ética, combatividade e transparência."
    },
    {
      icon: Heart,
      title: "Valores",
      description: "Ética, Democracia, Transparência, Solidariedade, Independência e Compromisso com a classe trabalhadora."
    }
  ];

  return (
    <section id="quem-somos" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1e3a5f] mb-6">Quem Somos</h2>
          <p className="max-w-3xl mx-auto text-gray-600 text-lg">
            A ASPRENNE é uma entidade sem fins lucrativos, fundada para unir forças em prol do serviço público de qualidade. Nossa história é marcada por lutas e vitórias.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {cards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="bg-gray-50 p-8 rounded-2xl border border-gray-100 text-center hover:shadow-lg transition-shadow"
            >
              <div className="w-16 h-16 bg-[#1e3a5f]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <card.icon className="w-8 h-8 text-[#1e3a5f]" />
              </div>
              <h3 className="text-xl font-bold text-[#1e3a5f] mb-4">{card.title}</h3>
              <p className="text-gray-600">{card.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Timeline Preview */}
        <div className="bg-[#1e3a5f] rounded-3xl p-8 md:p-12 text-white relative overflow-hidden">
          <div className="relative z-10 flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/3 text-center md:text-left">
              <div className="flex items-center gap-3 justify-center md:justify-start mb-4 text-[#fbbf24]">
                <History className="w-6 h-6" />
                <span className="font-bold tracking-wider uppercase">Nossa História</span>
              </div>
              <h3 className="text-3xl font-bold mb-4">35 Anos de Lutas e Conquistas</h3>
              <p className="text-gray-300 mb-6">Desde 1990, construindo um legado de respeito ao servidor público.</p>
            </div>

            <div className="md:w-2/3 w-full">
              <div className="flex justify-between items-center relative">
                <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-white/20 -translate-y-1/2"></div>
                
                {[
                  { year: '1990', label: 'Fundação' },
                  { year: '2000', label: 'Expansão' },
                  { year: '2015', label: 'Sede Própria' },
                  { year: '2025', label: 'Inovação' }
                ].map((item, idx) => (
                  <div key={idx} className="relative z-10 flex flex-col items-center">
                    <div className="w-4 h-4 rounded-full bg-[#fbbf24] border-4 border-[#1e3a5f] mb-3"></div>
                    <span className="text-xl font-bold text-white mb-1">{item.year}</span>
                    <span className="text-xs text-gray-400 uppercase tracking-wide">{item.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
