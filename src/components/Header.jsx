
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { User, Menu, X, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('inicio');
  const { toast } = useToast();

  const handleAssociadoClick = () => {
    toast({
      title: "🚧 Este recurso ainda não está implementado",
      description: "Você pode solicitar esta funcionalidade no seu próximo prompt! 🚀",
    });
  };

  const menuItems = [
    { label: 'Início', href: '#inicio' },
    { label: 'Notícias', href: '#noticias' },
    { label: 'Diário Oficial', href: '#diario' },
    { label: 'Pesquisas', href: '#pesquisas' },
    { label: 'Quem Somos', href: '#quem-somos' },
    { label: 'Serviços', href: '#servicos' },
    { label: 'Contato', href: '#contato' }
  ];

  // Handle active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      // Offset to help trigger the active state a bit earlier when the section enters the view
      const scrollPosition = window.scrollY + 250; 

      for (const item of menuItems) {
        const sectionId = item.href.replace('#', '');
        const element = document.getElementById(sectionId);
        
        if (element) {
          const { offsetTop, offsetHeight } = element;
          // Check if the scroll position is currently inside the section
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(sectionId);
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check on mount
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Smooth scroll handler with offset for sticky header
  const scrollToSection = (e, href) => {
    e.preventDefault();
    const sectionId = href.replace('#', '');
    const element = document.getElementById(sectionId);
    
    if (element) {
      const headerOffset = 140; // Approx height of sticky header + buffer
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
      
      setActiveSection(sectionId);
      setMobileMenuOpen(false);
    }
  };

  return (
    <header className="w-full sticky top-0 z-50 shadow-sm transition-all">
      {/* Top Bar */}
      <div className="bg-[#1e3a5f] text-white py-2 px-4">
        <div className="max-w-7xl mx-auto flex justify-end items-center">
          <button
            onClick={handleAssociadoClick}
            className="flex items-center gap-2 text-sm hover:text-gray-200 transition-colors"
          >
            <User className="w-4 h-4" />
            <span>Área do Associado</span>
          </button>
        </div>
      </div>

      {/* Main Header */}
      <div className="bg-white border-b border-gray-200 py-4 px-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* ASPRENNE Logo in Header */}
          <img
            src="https://horizons-cdn.hostinger.com/1f8f9a5a-76d7-4fc3-b3b9-4d248982fcdd/663f4324cb791b625136f47a0cfc36a4.jpg"
            alt="ASPRENNE - Associação dos Servidores Públicos das Regiões Norte e Nordeste (Round logo)"
            className="h-10 sm:h-12 w-auto object-contain cursor-pointer"
            onClick={(e) => scrollToSection(e, '#inicio')}
          />

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {menuItems.map((item, index) => {
              const isActive = activeSection === item.href.substring(1);
              return (
                <a
                  key={index}
                  href={item.href}
                  onClick={(e) => scrollToSection(e, item.href)}
                  className={`px-4 py-2 text-sm font-medium transition-all rounded-md ${
                    isActive
                      ? 'bg-[#1e3a5f] text-white hover:bg-[#2d4f7f]'
                      : 'text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  {item.label}
                </a>
              );
            })}
          </nav>

          {/* Search Icon */}
          <button
            onClick={() => {
              toast({
                title: "🚧 Este recurso ainda não está implementado",
                description: "Você pode solicitar esta funcionalidade no seu próximo prompt! 🚀",
              });
            }}
            className="hidden lg:block p-2 hover:bg-gray-100 rounded-md transition-colors"
          >
            <Search className="w-5 h-5 text-gray-600" />
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 hover:bg-gray-100 rounded-md transition-colors"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6 text-gray-700" />
            ) : (
              <Menu className="w-6 h-6 text-gray-700" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="lg:hidden bg-white border-b border-gray-200 py-4 px-4"
        >
          <nav className="flex flex-col gap-2">
            {menuItems.map((item, index) => {
              const isActive = activeSection === item.href.substring(1);
              return (
                <a
                  key={index}
                  href={item.href}
                  onClick={(e) => scrollToSection(e, item.href)}
                  className={`px-4 py-3 text-sm font-medium transition-all rounded-md ${
                    isActive
                      ? 'bg-[#1e3a5f] text-white'
                      : 'text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  {item.label}
                </a>
              );
            })}
          </nav>
        </motion.div>
      )}
    </header>
  );
};

export default Header;
