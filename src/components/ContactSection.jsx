
import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, Send, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';

const ContactSection = () => {
  const { toast } = useToast();

  const handleSubmit = (e) => {
    e.preventDefault();
    toast({
      title: "Mensagem enviada!",
      description: "Recebemos seu contato e retornaremos em breve. ✅",
    });
    // You can add form reset logic here if needed
  };

  const handleWhatsAppClick = () => {
    window.open('https://wa.me/558388864953?text=Ol%C3%A1!%20Gostaria%20de%20filiar-me%20a%20ASPRENNE', '_blank');
  };

  return (
    <section id="contato" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info & Map */}
          <div>
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="mb-8"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-[#1e3a5f] mb-6">Entre em Contato</h2>
              <p className="text-gray-600 mb-8">
                Estamos prontos para atender você. Utilize o formulário ou um de nossos canais de atendimento direto.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-[#1e3a5f]/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-[#1e3a5f]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#1e3a5f]">Sede Regional</h3>
                    <p className="text-gray-600 text-sm">R. Afonso Campos, 152 - Subsolo - Sala 11 - Centro, <br />Campina Grande - PB, CEP:  58400-235</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-[#1e3a5f]/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-[#1e3a5f]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#1e3a5f]">Telefones</h3>
                    <p className="text-gray-600 text-sm">(83) 8886-4953 / (83) 8886-4953</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-[#1e3a5f]/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-[#1e3a5f]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#1e3a5f]">E-mail</h3>
                    <p className="text-gray-600 text-sm">contato@asprenne.org.br</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-[#1e3a5f]/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Clock className="w-5 h-5 text-[#1e3a5f]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#1e3a5f]">Horário de Atendimento</h3>
                    <p className="text-gray-600 text-sm">Segunda a Sexta: 08h às 17h</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Google Map Embed */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="rounded-xl overflow-hidden h-80 shadow-md border border-gray-200 relative bg-gray-100"
            >
              <iframe 
                src="https://maps.google.com/maps?q=-7.2194731,-35.8817481&t=&z=17&ie=UTF8&iwloc=&output=embed"
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Localização ASPRENNE"
                className="w-full h-full"
              ></iframe>
            </motion.div>
          </div>

          {/* Form */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-gray-50 p-8 rounded-2xl border border-gray-100 shadow-sm"
          >
            <h3 className="text-xl font-bold text-[#1e3a5f] mb-6">Envie sua mensagem</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="firstName" className="text-sm font-medium text-gray-700">Nome</label>
                  <input type="text" id="firstName" required className="w-full p-3 rounded-lg border border-gray-200 focus:border-[#1e3a5f] focus:ring-1 focus:ring-[#1e3a5f] outline-none transition-all" placeholder="Seu nome" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="lastName" className="text-sm font-medium text-gray-700">Sobrenome</label>
                  <input type="text" id="lastName" required className="w-full p-3 rounded-lg border border-gray-200 focus:border-[#1e3a5f] focus:ring-1 focus:ring-[#1e3a5f] outline-none transition-all" placeholder="Seu sobrenome" />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium text-gray-700">E-mail</label>
                <input type="email" id="email" required className="w-full p-3 rounded-lg border border-gray-200 focus:border-[#1e3a5f] focus:ring-1 focus:ring-[#1e3a5f] outline-none transition-all" placeholder="seu@email.com" />
              </div>

              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-medium text-gray-700">Assunto</label>
                <select id="subject" className="w-full p-3 rounded-lg border border-gray-200 focus:border-[#1e3a5f] focus:ring-1 focus:ring-[#1e3a5f] outline-none transition-all bg-white">
                  <option>Filiação</option>
                  <option>Dúvidas Jurídicas</option>
                  <option>Imprensa</option>
                  <option>Outros</option>
                </select>
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-gray-700">Mensagem</label>
                <textarea id="message" required rows="4" className="w-full p-3 rounded-lg border border-gray-200 focus:border-[#1e3a5f] focus:ring-1 focus:ring-[#1e3a5f] outline-none transition-all resize-none" placeholder="Como podemos ajudar?"></textarea>
              </div>

              <Button type="submit" className="w-full bg-[#1e3a5f] hover:bg-[#152e4a] text-white font-bold py-6 text-lg">
                Enviar Mensagem
                <Send className="w-5 h-5 ml-2" />
              </Button>
            </form>

            <div className="mt-6 text-center">
              <span className="text-gray-600">Ou fale conosco diretamente via:</span>
              <Button onClick={handleWhatsAppClick} className="w-full mt-4 bg-green-500 hover:bg-green-600 text-white font-bold py-6 text-lg">
                WhatsApp
                <MessageCircle className="w-5 h-5 ml-2" />
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
