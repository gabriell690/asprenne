
import React from 'react';
import { motion } from 'framer-motion';
import { Star, Users, Shield, FileText, Map } from 'lucide-react';
import { Button } from '@/components/ui/button';
// Removed useToast as direct links are now used

const Hero = () => {
  // Removed handleFiliarClick and handleConhecerClick functions

  const stats = [
    {
      icon: Users,
      number: "15.000+",
      label: "Associados ativos",
      color: "text-green-500"
    },
    {
      icon: Shield,
      number: "35",
      label: "Anos de atuação",
      color: "text-yellow-500"
    },
    {
      icon: FileText,
      number: "500+",
      label: "Ações coletivas",
      color: "text-red-500"
    },
    {
      icon: Map,
      number: "9 Estados",
      label: "Norte e Nordeste",
      color: "text-blue-400"
    }
  ];

  return (
    <section className="relative bg-white py-16 px-4 overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-gray-900"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center gap-2 bg-[#fbbf24] text-gray-900 px-4 py-2 rounded-full mb-6 shadow-sm"
            >
              <Star className="w-4 h-4 fill-current" />
              <span className="font-semibold text-sm">Há mais de 35 anos ao seu lado</span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-[#1e3a5f]"
            >
              Defendendo os direitos dos{' '}
              <span className="text-[#fbbf24]">Servidores</span>{' '}
              <span className="text-[#fbbf24]">Públicos</span>
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="text-lg text-gray-600 mb-8 leading-relaxed"
            >
              A ASPRENNE atua na defesa dos interesses e direitos dos servidores públicos das regiões Norte e Nordeste, promovendo valorização profissional, benefícios exclusivos e representação ativa.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button
                asChild // Render as a child element, allowing <a> to be used
                className="bg-[#fbbf24] hover:bg-[#f59e0b] text-gray-900 font-semibold px-8 py-6 text-base rounded-md transition-all hover:scale-105 hover:shadow-xl shadow-md"
              >
                <a href="https://wa.me/558388864953?text=Ol%C3%A1!%20Gostaria%20de%20filiar-me%20a%20ASPRENNE" target="_blank" rel="noopener noreferrer">
                  Filie-se Agora
                  <motion.span
                    animate={{ x: [0, 5, 0] }}
                    transition={{ repeat: Infinity, duration: 1.5 }}
                    className="ml-2"
                  >
                    →
                  </motion.span>
                </a>
              </Button>
              <Button
                asChild // Render as a child element, allowing <a> to be used
                variant="outline"
                className="bg-white hover:bg-gray-50 text-[#1e3a5f] font-semibold px-8 py-6 text-base rounded-md border-2 border-[#1e3a5f] transition-all hover:scale-105 hover:shadow-xl"
              >
                <a href="https://www.instagram.com/asprenne/" target="_blank" rel="noopener noreferrer">
                  Conheça a ASPRENNE
                </a>
              </Button>
            </motion.div>
          </motion.div>

          {/* Right Column - Stats Cards */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                whileHover={{ scale: 1.05, translateY: -5 }}
                className="bg-white rounded-xl p-6 border border-gray-100 shadow-lg hover:shadow-xl transition-all"
              >
                <div className={`${stat.color} mb-4`}>
                  <stat.icon className="w-10 h-10" />
                </div>
                <div className="text-3xl md:text-4xl font-bold text-[#1e3a5f] mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 text-sm">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
