
import React from 'react';
import { motion } from 'framer-motion';
import { FileText, Download, Search, Filter } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';

const DiarioOficialSection = () => {
  const { toast } = useToast();

  const handleDownload = (docName) => {
    toast({
      title: "Iniciando download",
      description: `Baixando ${docName}... (Simulação)`,
      className: "bg-[#1e3a5f] text-white border-none",
    });
  };

  const publications = [
  ];

  return (
    <section id="diario" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-end md:items-center mb-10 gap-6">
          <div>
            <h2 className="text-3xl font-bold text-[#1e3a5f] mb-2 flex items-center gap-3">
              <FileText className="w-8 h-8 text-[#fbbf24]" />
              Diário Oficial
            </h2>
            <p className="text-gray-600">Acesse as publicações oficiais e documentos da associação.</p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
            <div className="relative">
              <input 
                type="date" 
                className="pl-3 pr-3 py-2 border rounded-md text-sm focus:ring-2 focus:ring-[#1e3a5f] outline-none w-full sm:w-auto"
              />
            </div>
            <Button className="bg-[#1e3a5f] hover:bg-[#2d4f7f] text-white">
              <Filter className="w-4 h-4 mr-2" />
              Filtrar
            </Button>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead className="bg-[#1e3a5f] text-white">
                <tr>
                  <th className="p-4 font-semibold text-sm">Data</th>
                  <th className="p-4 font-semibold text-sm">Documento</th>
                  <th className="p-4 font-semibold text-sm">Descrição</th>
                  <th className="p-4 font-semibold text-sm text-right">Ação</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {publications.map((pub, idx) => (
                  <motion.tr 
                    key={pub.id}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="hover:bg-gray-50 transition-colors group"
                  >
                    <td className="p-4 text-sm text-gray-600 font-medium whitespace-nowrap">{pub.date}</td>
                    <td className="p-4 text-sm text-[#1e3a5f] font-bold whitespace-nowrap">
                      <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs mr-2">{pub.type}</span>
                      {pub.id}
                    </td>
                    <td className="p-4 text-sm text-gray-700">{pub.description}</td>
                    <td className="p-4 text-right">
                      <Button 
                        variant="ghost" 
                        size="sm" 
                        onClick={() => handleDownload(pub.id)}
                        className="text-[#1e3a5f] hover:text-[#fbbf24] hover:bg-[#1e3a5f]/5"
                      >
                        <Download className="w-4 h-4 mr-2" />
                        PDF
                      </Button>
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DiarioOficialSection;
