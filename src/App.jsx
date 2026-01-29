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

// ✅ Import local (profissional / funciona no build)
import bannerAsprenne from './banner-asprenne.png';

function App() {
  return (
    <>
      <Helmet>
        <title>ASPRENNE - Associação dos Servidores Públicos das Regiões Norte e Nordeste</title>
        <meta
          name="description"
          content="A ASPRENNE atua na defesa dos interesses e direitos dos servidores públicos das regiões Norte e Nordeste, promovendo valorização profissional, benefícios exclusivos e representação ativa."
        />
      </Helmet>

      <div className="min-h-screen flex flex-col bg-white">
        {/* ✅ HEADER FIRST (profissional) */}
        <Header />
{/* Banner principal FULL WIDTH */}
<div className="w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw]">
  <img
    src={bannerAsprenne}
    alt="ASPRENNE - Associação dos Servidores Públicos das Regiões Norte e Nordeste"
    className="w-full h-[300px] sm:h-[420px] md:h-[560px] object-cover"
  />
</div>

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