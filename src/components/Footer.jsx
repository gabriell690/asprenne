
import React from 'react';
import { motion } from 'framer-motion';
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

const Footer = () => {
  const { toast } = useToast();

  const handleLinkClick = (e) => {
    e.preventDefault();
    toast({
      title: "🚧 Este recurso ainda não está implementado",
      description: "Você pode solicitar esta funcionalidade no seu próximo prompt! 🚀",
    });
  };

  const footerLinks = {
    institutional: [
      { label: 'Quem Somos', href: '#quem-somos' },
      { label: 'Missão e Valores', href: '#missao' },
      { label: 'Diretoria', href: '#diretoria' },
      { label: 'Estatuto', href: '#estatuto' }
    ],
    services: [
      { label: 'Assistência Jurídica', href: '#juridica' },
      { label: 'Convênios', href: '#convenios' },
      { label: 'Benefícios', href: '#beneficios' },
      { label: 'Cursos e Capacitação', href: '#cursos' }
    ],
    support: [
      { label: 'Fale Conosco', href: '#contato' },
      { label: 'Perguntas Frequentes', href: '#faq' },
      { label: 'Ouvidoria', href: '#ouvidoria' },
      { label: 'Trabalhe Conosco', href: '#trabalhe' }
    ]
  };

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Twitter, href: '#', label: 'Twitter' }
  ];

  return (
    <footer className="bg-[#1e3a5f] text-white">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Logo and Description */}
          <div className="lg:col-span-1">
            <img 
              src="https://horizons-cdn.hostinger.com/1f8f9a5a-76d7-4fc3-b3b9-4d248982fcdd/e4bf59ba0809a57f59626f321746dd23.png" 
              alt="ASPRENNE Logo" 
              className="h-16 w-auto mb-4 brightness-0 invert"
            />
            <p className="text-sm text-gray-300 mb-4">
              Defendendo os direitos dos servidores públicos das regiões Norte e Nordeste há mais de 35 anos.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  onClick={handleLinkClick}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 bg-white/10 hover:bg-[#fbbf24] rounded-full flex items-center justify-center transition-all"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Institucional */}
          <div>
            <span className="text-lg font-semibold mb-4 block">Institucional</span>
            <nav className="flex flex-col gap-2">
              {footerLinks.institutional.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  onClick={handleLinkClick}
                  className="text-sm text-gray-300 hover:text-[#fbbf24] transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Serviços */}
          <div>
            <span className="text-lg font-semibold mb-4 block">Serviços</span>
            <nav className="flex flex-col gap-2">
              {footerLinks.services.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  onClick={handleLinkClick}
                  className="text-sm text-gray-300 hover:text-[#fbbf24] transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Contato */}
          <div>
            <span className="text-lg font-semibold mb-4 block">Contato</span>
            <div className="flex flex-col gap-3">
              <a
                href="tel:+55"
                onClick={handleLinkClick}
                className="flex items-start gap-2 text-sm text-gray-300 hover:text-[#fbbf24] transition-colors"
              >
                <Phone className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>(00) 0000-0000</span>
              </a>
              <a
                href="mailto:contato@asprenne.org.br"
                onClick={handleLinkClick}
                className="flex items-start gap-2 text-sm text-gray-300 hover:text-[#fbbf24] transition-colors"
              >
                <Mail className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>contato@asprenne.org.br</span>
              </a>
              <div className="flex items-start gap-2 text-sm text-gray-300">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>Regiões Norte e Nordeste do Brasil</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()} ASPRENNE. Todos os direitos reservados.
          </p>
          <nav className="flex gap-6">
            <a
              href="#privacidade"
              onClick={handleLinkClick}
              className="text-sm text-gray-400 hover:text-[#fbbf24] transition-colors"
            >
              Política de Privacidade
            </a>
            <a
              href="#termos"
              onClick={handleLinkClick}
              className="text-sm text-gray-400 hover:text-[#fbbf24] transition-colors"
            >
              Termos de Uso
            </a>
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
