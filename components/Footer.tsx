'use client';

export default function Footer() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="animate-fade-in-up">
            <div className="font-['Pacifico'] text-2xl text-[#188CFF] mb-6 hover:scale-105 transition-transform duration-300">
              Dra. Carolina Mendes
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Transformando vidas através da nutrição personalizada e do cuidado humanizado.
            </p>
            <div className="flex space-x-4">
              {[
                { icon: 'ri-instagram-line', link: 'https://www.instagram.com' },
                { icon: 'ri-facebook-line', link: 'https://www.facebook.com' },
                { icon: 'ri-whatsapp-line', link: 'https://wa.me/5591991883384' }
              ].map((social, index) => (
                <a 
                  key={index}
                  href={social.link}
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-[#188CFF] transition-all duration-300 hover:scale-110 cursor-pointer animate-bounce-gentle"
                  style={{animationDelay: `${index * 0.2}s`}}
                >
                  <i className={`${social.icon} w-5 h-5 flex items-center justify-center`}></i>
                </a>
              ))}
            </div>
          </div>

          <div className="animate-fade-in-up" style={{animationDelay: '0.2s'}}>
            <h4 className="font-semibold text-lg mb-6">Links Rápidos</h4>
            <ul className="space-y-3">
              {[
                { name: 'Sobre Mim', id: 'sobre' },
                { name: 'Serviços', id: 'servicos' },
                { name: 'Depoimentos', id: 'depoimentos' },
                { name: 'Contato', id: 'contato' }
              ].map((item, index) => (
                <li key={item.id}>
                  <button 
                    onClick={() => scrollToSection(item.id)}
                    className="text-gray-300 hover:text-[#188CFF] transition-all duration-300 cursor-pointer hover:translate-x-2 animate-slide-in-left"
                    style={{animationDelay: `${index * 0.1}s`}}
                  >
                    {item.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div className="animate-fade-in-up" style={{animationDelay: '0.4s'}}>
            <h4 className="font-semibold text-lg mb-6">Serviços</h4>
            <ul className="space-y-3 text-gray-300">
              {[
                'Consulta Online',
                'Acompanhamento Mensal', 
                'Nutrição para Gestantes',
                'Consulta Familiar',
                'Educação Nutricional'
              ].map((service, index) => (
                <li 
                  key={index}
                  className="hover:text-[#188CFF] transition-colors duration-300 animate-fade-in"
                  style={{animationDelay: `${index * 0.1}s`}}
                >
                  {service}
                </li>
              ))}
            </ul>
          </div>

          <div className="animate-fade-in-up" style={{animationDelay: '0.6s'}}>
            <h4 className="font-semibold text-lg mb-6">Contato</h4>
            <div className="space-y-4">
              {[
                { icon: 'ri-whatsapp-line', text: '(91) 99188-3384' },
                { icon: 'ri-mail-line', text: 'dra.carolina@nutricao.com' },
                { icon: 'ri-map-pin-line', text: 'Belém - PA' }
              ].map((contact, index) => (
                <div 
                  key={index}
                  className="flex items-center hover:scale-105 transition-transform duration-300 animate-slide-in-right"
                  style={{animationDelay: `${index * 0.1}s`}}
                >
                  <i className={`${contact.icon} w-5 h-5 flex items-center justify-center mr-3 text-[#188CFF]`}></i>
                  <span className="text-gray-300">{contact.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 mt-12">
          <div className="flex flex-col md:flex-row justify-between items-center animate-fade-in-up">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2024 Dra. Carolina Mendes. Todos os direitos reservados.
            </div>
            <div className="text-gray-400 text-sm">
              CRN 12345/PA • CNPJ: 00.000.000/0001-00
            </div>
          </div>
        </div>
      </div>

      {/* WhatsApp Flutuante */}
      <a
        href="https://wa.me/5591991883384"
        className="fixed bottom-6 right-6 w-16 h-16 bg-green-500 rounded-full flex items-center justify-center shadow-2xl hover:bg-green-600 transition-all duration-300 hover:scale-110 z-50 cursor-pointer animate-bounce-gentle"
        aria-label="WhatsApp"
      >
        <i className="ri-whatsapp-line text-white w-8 h-8 flex items-center justify-center"></i>
      </a>
    </footer>
  );
}