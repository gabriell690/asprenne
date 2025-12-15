
import React from 'react';
import { motion } from 'framer-motion';
import { BarChart2, PieChart, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';

const ResearchSection = () => {
  const { toast } = useToast();

  const handleVote = () => {
    toast({
      title: "Voto registrado!",
      description: "Obrigado por participar desta pesquisa. 📊",
      className: "bg-green-600 text-white border-none",
    });
  };

  return (
    <section id="pesquisas" className="py-20 bg-[#1e3a5f] text-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#fbbf24] opacity-5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
      
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="md:w-1/2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Sua voz define <span className="text-[#fbbf24]">nossos rumos</span>
              </h2>
              <p className="text-gray-300 mb-8 text-lg leading-relaxed">
                A ASPRENNE valoriza a participação democrática. Participe de nossas pesquisas de opinião e ajude a definir as prioridades da nossa atuação para o próximo ano.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-white/10 rounded-lg">
                    <BarChart2 className="w-6 h-6 text-[#fbbf24]" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Transparência nos Dados</h3>
                    <p className="text-sm text-gray-400">Todos os resultados são auditados e publicados mensalmente no Diário Oficial.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-white/10 rounded-lg">
                    <PieChart className="w-6 h-6 text-[#fbbf24]" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Impacto Real</h3>
                    <p className="text-sm text-gray-400">As pesquisas fundamentam nossas pautas de reivindicação junto aos governos.</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          <div className="md:w-1/2 w-full">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="bg-white text-gray-900 rounded-2xl p-8 shadow-2xl"
            >
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-bold text-[#1e3a5f]">Pesquisa Ativa</h3>
                <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider flex items-center gap-1">
                  <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                  Em andamento
                </span>
              </div>
              
              <div className="mb-6">
                <h4 className="text-lg font-semibold mb-4">Qual deve ser a prioridade da campanha salarial 2026?</h4>
                <div className="space-y-3">
                  {['Reajuste linear de 15%', 'Aumento no vale-alimentação', 'Melhoria no plano de saúde', 'Plano de carreira unificado'].map((option, idx) => (
                    <label key={idx} className="flex items-center p-3 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer transition-colors group">
                      <input type="radio" name="poll" className="w-4 h-4 text-[#1e3a5f] focus:ring-[#1e3a5f] border-gray-300" />
                      <span className="ml-3 text-gray-700 group-hover:text-[#1e3a5f] font-medium">{option}</span>
                    </label>
                  ))}
                </div>
              </div>

              <Button 
                onClick={handleVote}
                className="w-full bg-[#1e3a5f] hover:bg-[#2d4f7f] text-white py-6 text-lg font-semibold shadow-lg hover:shadow-xl transition-all"
              >
                Registrar meu voto
              </Button>
              <p className="text-center text-xs text-gray-500 mt-4">
                * Votação exclusiva para associados e servidores cadastrados.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResearchSection;
