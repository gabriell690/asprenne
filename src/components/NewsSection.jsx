import React, { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Calendar, ArrowRight, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";

// ✅ Import da imagem da notícia (garanta que esse caminho exista)
import asprenneIpsemImg from "../assets/news/asprenne-ipsem.jpg";
import prefcampImg from "../assets/news/prefcamp.jpg";
import pdcImg from "../assets/news/pdc.jpg";
import sesumaImg from "../assets/news/sesuma.jpg";

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
        date: "03 de Dezembro de 2025",
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
       {
        id: "prefcamp",
        category: "Eventos",
        date: "12 de Fevereiro de 2026 ",
        title: "Prefeitura de Campina Grande decreta ponto facultativo no Carnaval 2026",
        excerpt:
          "De acordo com o decreto, não haverá expediente na segunda-feira (16), terça-feira (feriado nacional) e quarta-feira (18 de fevereiro)",
        image: prefcampImg,
        image_alt:
          "carnaval em campina grande, prefeitura de campina grande, ponto facultativo carnaval",
        content: [
          "A Prefeitura de Campina Grande decretou ponto facultativo nas repartições públicas municipais durante o período do Carnaval 2026. O decreto, assinado pelo prefeito Bruno Cunha Lima, deverá ser publicado numa das próximas edições do Semanário Oficial do Município.",
          "De acordo com o decreto, não haverá expediente na segunda-feira (16), terça-feira (feriado nacional) e quarta-feira (18 de fevereiro), em virtude das festividades carnavalescas e da Quarta-feira de Cinzas.",
          "O retorno das atividades administrativas ocorrerá na quinta-feira (19), com funcionamento normal dos órgãos da administração direta e indireta do município.",
          "A medida segue o modelo adotado em anos anteriores, garantindo a suspensão temporária das atividades administrativas durante o período carnavalesco, assegurando aos servidores municipais uma pausa prolongada.",
          
        ],
      },
       {
        id: "pdc",
        category: "Eventos",
        date: "12 de Fevereiro de 2026 ",
        title: "Parques de Campina Grande funcionarão em horário especial neste feriadão de Carnaval",
        excerpt:
          "Parques de Campina Grande funcionarão em horário especial neste feriadão de Carnaval",
        image: pdcImg,
        image_alt:
          "parque da criança em campina grande, parque do povo em campina grande, horário especial carnaval",
        content: [
          "A Prefeitura de Campina Grande, por meio da Secretaria de Esporte, Juventude e Lazer (Sejel), informa à população e aos desportistas em geral que neste período de Carnaval os parques da cidade funcionarão nos mesmos horários praticados aos finais de semana.",
          "Com isso, estes espaços funcionarão no período de 5h até às 18h. A medida vale para o funcionamento do Parque da Liberdade, Parque da Criança e para a Vila Olímpica Plínio Lemos.",
          "Os horários são os mesmos praticados aos finais de semana e nos demais feriados, ou seja, já são de conhecimento dos frequentadores dos parques da cidade administrados pela Sejel.",
          
        ],
      },
       {
        id: "sesuma",
        category: "Eventos",
        date: "12 de Fevereiro de 2026 ",
        title: "Coleta de lixo será normal durante o Carnaval em Campina Grande e funcionamento das Feiras",
        excerpt:
          "A coleta domiciliar de resíduos sólidos não sofrerá nenhuma alteração em Campina Grande durante o período de carnaval.",
        image: sesumaImg,
        image_alt:
          "coleta de lixo em campina grande, sesuma campina grande, funcionamento feiras campina grande carnaval",
        content: [
          "A Prefeitura de Campina Grande, através da Secretaria de Serviços Urbanos e Meio Ambiente (SESUMA), informa que a coleta domiciliar de resíduos sólidos não sofrerá nenhuma alteração em Campina Grande durante o período de carnaval.",
          "As equipes de coletores seguirão o cronograma habitual estabelecido pela empresa responsável pelo serviço na cidade. Todos os demais serviços serão mantidos, sem alteração.",
          "O secretário da Sesuma, Dorgival Vilar, orienta que a população coloque o lixo na frentes das suas moradias apenas nos dias e horários da coleta naquela localidade. As equipes fazem a rota durante o dia e a noite, dependendo do setor já conhecido dos moradores: “Vamos trabalhar normalmente, pois a limpeza é essencial e necessária para evitar acúmulo de lixo e também que as pessoas joguem os resíduos em áreas proibidas. Esta é a orientação do prefeito Bruno Cunha Lima, que não mede esforços para que Campina Grande continue com uma coleta de excelência”, disse Dorgival.",
          "A coleta ocorrerá três dias semanais, com parte da cidade nas segundas, quartas e sextas-feiras, e as demais, terças, quintas e sábados. A área central é atendida diariamente, com exceção do domingo, mas mesmo assim a Sesuma mantém equipes plantonistas.",
        ],
      },


      // As demais podem ficar como estavam (sem content -> toast,
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
