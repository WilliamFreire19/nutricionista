'use client';

import Link from 'next/link';

export default function Header() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="bg-white/95 backdrop-blur-sm fixed w-full top-0 z-50 shadow-sm animate-slide-down">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="font-['Pacifico'] text-2xl text-[#188CFF] hover:scale-105 transition-transform duration-300 cursor-pointer">
          Dra. Carolina Mendes
        </div>
        
        <nav className="hidden md:flex space-x-8">
          {[
            { name: 'Sobre', id: 'sobre' },
            { name: 'Serviços', id: 'servicos' },
            { name: 'Depoimentos', id: 'depoimentos' },
            { name: 'Contato', id: 'contato' }
          ].map((item, index) => (
            <button 
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="text-gray-700 hover:text-[#188CFF] transition-all duration-300 cursor-pointer hover:scale-105 animate-fade-in"
              style={{animationDelay: `${index * 0.1}s`}}
            >
              {item.name}
            </button>
          ))}
        </nav>

        <Link 
          href="https://wa.me/5591991883384?text=Olá,%20Dra.%20Carolina!%20Gostaria%20de%20agendar%20uma%20consulta%20nutricional."
          className="bg-[#188CFF] text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-600 transition-all duration-300 hover:scale-105 hover:shadow-lg whitespace-nowrap cursor-pointer animate-pulse-gentle"
        >
          Agendar Consulta
        </Link>
      </div>
    </header>
  );
}