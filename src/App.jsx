
import React from 'react';
import { Helmet } from 'react-helmet';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import NewsSection from '@/components/NewsSection';
import DiarioOficialSection from '@/components/DiarioOficialSection';
import ResearchSection from '@/components/ResearchSection';
import AboutSection from '@/components/AboutSection';
import ServicesSection from '@/components/ServicesSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import { Toaster } from '@/components/ui/toaster';

function App() {
  return (
    <>
      <Helmet>
        <title>ASPRENNE - Associação dos Servidores Públicos das Regiões Norte e Nordeste</title>
        <meta name="description" content="A ASPRENNE atua na defesa dos interesses e direitos dos servidores públicos das regiões Norte e Nordeste, promovendo valorização profissional, benefícios exclusivos e representação ativa." />
      </Helmet>
      <div className="min-h-screen flex flex-col bg-white">
        {/* Main Hero Banner Image Section */}
        <div className="w-full bg-white">
          <img 
            src="https://horizons-cdn.hostinger.com/1f8f9a5a-76d7-4fc3-b3b9-4d248982fcdd/e2316a412f9a2d6445d5b3f4abd8d497.png" 
            alt="ASPRENNE - Associação de Servidores Públicos das Regiões Norte e Nordeste - Equipe unida"
            className="w-full h-auto object-cover max-h-[800px] block"
          />
        </div>

        <Header />
        
        <main className="flex-1">
          <div id="inicio">
            <Hero />
          </div>
          <div id="noticias">
            <NewsSection />
          </div>
          <div id="diario">
            <DiarioOficialSection />
          </div>
          <div id="pesquisas">
            <ResearchSection />
          </div>
          <div id="quem-somos">
            <AboutSection />
          </div>
          <div id="servicos">
            <ServicesSection />
          </div>
          <div id="contato">
            <ContactSection />
          </div>
        </main>
        <Footer />
        <Toaster />
      </div>
    </>
  );
}

export default App;
