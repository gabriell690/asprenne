
import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';

const NewsSection = () => {
  const { toast } = useToast();

  const handleReadMore = () => {
    toast({
      title: "🚧 Leitura indisponível no momento",
      description: "O artigo completo estará disponível em breve. 🚀",
    });
  };

  const news = [
    {
      title: "ASPRENNE garante reajuste salarial para servidores estaduais",
      date: "14 Dez 2025",
      category: "Conquistas",
      image_alt: "Reunião de diretoria com documentos na mesa",
      excerpt: "Após intensas negociações, conseguimos garantir o reajuste inflacionário para todos os servidores da base..."
    },
    {
      title: "Novo convênio médico disponível para associados do Norte",
      date: "10 Dez 2025",
      category: "Benefícios",
      image_alt: "Profissional de saúde atendendo paciente",
      excerpt: "Expandimos nossa rede de parceiros de saúde. Agora contamos com um novo plano com cobertura regional..."
    },
    {
      title: "Assembleia Geral Extraordinária: Participe das decisões",
      date: "05 Dez 2025",
      category: "Eventos",
      image_alt: "Auditório cheio de pessoas levantando as mãos",
      excerpt: "Convocamos todos os associados para a votação do novo estatuto e definição das pautas prioritárias para 2026..."
    }
  ];

  return (
    <section id="noticias" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-[#1e3a5f] mb-4"
          >
            Últimas Notícias
          </motion.h2>
          <div className="w-24 h-1 bg-[#fbbf24] mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {news.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-xl overflow-hidden shadow-lg border border-gray-100 hover:shadow-xl transition-all group"
            >
              <div className="relative h-48 overflow-hidden">
                <div className="absolute top-4 left-4 z-10 bg-[#fbbf24] text-[#1e3a5f] text-xs font-bold px-3 py-1 rounded-full">
                  {item.category}
                </div>
                <img alt={item.image_alt} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1652086939922-9582b3367e61" />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
                  <Calendar className="w-4 h-4 text-[#fbbf24]" />
                  <span>{item.date}</span>
                </div>
                <h3 className="text-xl font-bold text-[#1e3a5f] mb-3 line-clamp-2 group-hover:text-[#2d4f7f] transition-colors">
                  {item.title}
                </h3>
                <p className="text-gray-600 mb-4 line-clamp-3 text-sm">
                  {item.excerpt}
                </p>
                <Button 
                  variant="link" 
                  className="p-0 text-[#1e3a5f] font-semibold hover:text-[#fbbf24] transition-colors group/btn"
                  onClick={handleReadMore}
                >
                  Ler mais
                  <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewsSection;
