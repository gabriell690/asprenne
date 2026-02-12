import React, { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Calendar, ArrowRight, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";

// ✅ Import da imagem da notícia (garanta que esse caminho exista)
import asprenneIpsemImg from "../assets/news/asprenne-ipsem.jpg";

// Fallback caso alguma notícia não tenha imagem
const DEFAULT_NEWS_IMAGE =
  "https://images.unsplash.com/photo-1652086939922-9582b3367e61?auto=format&fit=crop&w=1600&q=80";

export default function NewsSection() {
  const { toast } = useToast();

  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState(null);

  const news = useMemo(
    () => [
      {
        id: "asprenne-ipsem",
        category: "Eventos",
        date: "03 Dez 2025",
        title: "Diretoria da ASPRENNE foi recebida pelo presidente do IPSEM",
        excerpt:
          "Encontro no IPSEM reuniu diretoria do instituto e representantes da ASPRENNE para tratar de pautas como reajuste, quinquênios, gratificações e participação das entidades.",
        image: asprenneIpsemImg,
        image_alt:
          "Diretoria da ASPRENNE em reunião com o presidente do IPSEM em Campina Grande",
        content: [
          "Um encontro institucional de alto nível foi realizado na terça-feira (03), no IPSEM – Instituto de Previdência do Servidor Municipal de Campina Grande, reunindo a diretoria do instituto e representantes da ASPRENNE.",
          "A reunião contou com a presença do presidente do IPSEM, Dr. Floriano Brito Júnior, acompanhado de sua assessoria jurídica.",
          "Pela ASPRENNE estiveram presentes o presidente da associação Olavo Rodrigues, a diretora Maria do Rosário e a assessoria jurídica da Associação, comandada pelo Dr. Leônidas Chaves e a Dra. Eluiza Leal.",
          "Na pauta, o reajuste dos aposentados, a correção dos quinquênios e a situação atual das gratificações, a contribuição do servidor ativo e inativo, além do funcionamento do Conselho do IPSEM e a participação das entidades.",
          "A diretoria da ASPRENNE avaliou positivamente o encontro e reforçou a importância do diálogo institucional permanente para avançar nas demandas dos servidores."
        ],
      },

      // As demais podem ficar como estavam (sem content -> toast)
      {
        id: "convenio-medico",
        category: "Benefícios",
        date: "10 Dez 2025",
        title: "Novo convênio médico disponível para associados do Norte",
        excerpt:
          "Expandimos nossa rede de parceiros de saúde. Agora contamos com um novo plano com cobertura regional...",
        image: DEFAULT_NEWS_IMAGE,
      },
      {
        id: "assembleia",
        category: "Eventos",
        date: "05 Dez 2025",
        title: "Assembleia Geral Extraordinária: Participe das decisões",
        excerpt:
          "Convocamos todos os associados para a votação do novo estatuto e definição das pautas prioritárias para 2026...",
        image: DEFAULT_NEWS_IMAGE,
      },
    ],
    []
  );

  const handleReadMore = (item) => {
    // ✅ se tiver conteúdo, abre modal
    if (item?.content?.length) {
      setSelected(item);
      setOpen(true);
      return;
    }

    // ⛔ se não tiver, mantém aviso
    toast({
      title: "🚧 Em breve",
      description: "A versão completa desta notícia será publicada em breve.",
    });
  };

  // ✅ fecha modal ao clicar fora (overlay)
  const closeModal = () => {
    setOpen(false);
    setSelected(null);
  };

  return (
    <section id="noticias" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-[#1e3a5f] mb-4"
          >
            Últimas Notícias
          </motion.h2>
          <div className="w-24 h-1 bg-[#fbbf24] mx-auto rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {news.map((item, index) => (
            <motion.article
              key={item.id || index}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              className="bg-white rounded-xl overflow-hidden shadow-lg border border-gray-100 hover:shadow-xl transition-all group"
            >
              <div className="relative h-48 overflow-hidden">
                <div className="absolute top-4 left-4 z-10 bg-[#fbbf24] text-[#1e3a5f] text-xs font-bold px-3 py-1 rounded-full">
                  {item.category}
                </div>

                <img
                  src={item.image || DEFAULT_NEWS_IMAGE}
                  alt={item.image_alt || item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
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
                  variant="outline"
                  className="border-[#1e3a5f] text-[#1e3a5f] hover:bg-[#1e3a5f] hover:text-white transition-colors"
                  onClick={() => handleReadMore(item)}
                >
                  Ler mais <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </motion.article>
          ))}
        </div>
      </div>

      {/* ✅ MODAL (sem shadcn dialog) */}
      {open && selected && (
        <div
          className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center p-4"
          onClick={closeModal}
          role="dialog"
          aria-modal="true"
        >
          <div
            className="bg-white rounded-2xl max-w-3xl w-full overflow-hidden shadow-2xl relative"
            onClick={(e) => e.stopPropagation()}
          >
            {/* header imagem */}
            <div className="relative">
              <div className="h-56 w-full overflow-hidden">
                <img
                  src={selected.image || DEFAULT_NEWS_IMAGE}
                  alt={selected.image_alt || selected.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <button
                onClick={closeModal}
                className="absolute top-3 right-3 bg-white/95 hover:bg-white text-[#1e3a5f] rounded-full p-2 shadow"
                aria-label="Fechar"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* corpo */}
            <div className="p-6">
              <div className="flex items-center justify-between flex-wrap gap-3 mb-4">
                <span className="bg-[#fbbf24] text-[#1e3a5f] text-xs font-bold px-3 py-1 rounded-full">
                  {selected.category}
                </span>

                <div className="flex items-center gap-2 text-sm text-gray-500">
                  <Calendar className="w-4 h-4 text-[#fbbf24]" />
                  <span>{selected.date}</span>
                </div>
              </div>

              <h2 className="text-2xl font-bold text-[#1e3a5f]">
                {selected.title}
              </h2>

              <div className="mt-4 space-y-3 text-gray-700 leading-relaxed max-h-[55vh] overflow-y-auto pr-2">
                {(selected.content || []).map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>

              <div className="mt-6 flex justify-end">
                <Button
                  className="bg-[#1e3a5f] hover:bg-[#2d4f7f]"
                  onClick={closeModal}
                >
                  Fechar
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
