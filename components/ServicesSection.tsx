'use client';

export default function ServicesSection() {
  const services = [
    {
      id: 'consulta-online',
      icon: 'ri-video-line',
      title: 'Consulta Online',
      description: 'Atendimento personalizado no conforto da sua casa',
      features: [
        'Consulta por videochamada',
        'Plano alimentar personalizado',
        'Material educativo digital',
        'Flexibilidade de horários'
      ],
      price: 'A partir de R$ 120',
      popular: false
    },
    {
      id: 'acompanhamento-mensal',
      icon: 'ri-calendar-check-line',
      title: 'Acompanhamento Mensal',
      description: 'Monitoramento contínuo para resultados duradouros',
      features: [
        '4 consultas mensais',
        'Ajustes no plano alimentar',
        'Suporte via WhatsApp',
        'Receitas exclusivas',
        'Acompanhamento de exames'
      ],
      price: 'R$ 400/mês',
      popular: true
    },
    {
      id: 'nutricao-gestantes',
      icon: 'ri-parent-line',
      title: 'Nutrição para Gestantes',
      description: 'Cuidado especial para mães e bebês',
      features: [
        'Plano nutricional pré-natal',
        'Controle de peso saudável',
        'Orientação sobre suplementação',
        'Preparo para amamentação'
      ],
      price: 'A partir de R$ 150',
      popular: false
    },
    {
      id: 'consulta-familiar',
      icon: 'ri-team-line',
      title: 'Consulta Familiar',
      description: 'Transforme os hábitos de toda a família',
      features: [
        'Avaliação de toda a família',
        'Cardápio familiar saudável',
        'Educação nutricional infantil',
        'Receitas práticas e saborosas'
      ],
      price: 'A partir de R$ 200',
      popular: false
    }
  ];

  const scrollToContact = (serviceId: string, serviceName: string) => {
    // Salvar o serviço selecionado no localStorage
    localStorage.setItem('selectedService', JSON.stringify({ id: serviceId, name: serviceName }));
    
    // Rolar para o formulário de contato
    const element = document.getElementById('contato');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="servicos" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Serviços e Planos da Dra. Carolina
          </h2>
          <div className="w-20 h-1 bg-[#188CFF] mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Escolha o plano que melhor se adapta às suas necessidades e objetivos
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <div 
              key={index}
              className={`relative bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 p-8 animate-fade-in-up hover:-translate-y-3 ${
                service.popular ? 'ring-2 ring-[#188CFF] transform scale-105 shadow-2xl' : ''
              }`}
              style={{animationDelay: `${index * 0.1}s`}}
            >
              {service.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 animate-bounce-gentle">
                  <div className="bg-gradient-to-r from-[#188CFF] to-[#0D0FF6] text-white px-6 py-2 rounded-full text-sm font-semibold whitespace-nowrap shadow-lg">
                    ⭐ Mais Popular
                  </div>
                </div>
              )}

              <div className="text-center mb-6">
                <div className={`w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-4 transition-all duration-300 hover:scale-110 ${
                  service.popular 
                    ? 'bg-gradient-to-br from-[#188CFF] to-[#0D0FF6] shadow-lg' 
                    : 'bg-[#0D0FF6]/10 hover:bg-[#188CFF]/10'
                }`}>
                  <i className={`${service.icon} w-10 h-10 flex items-center justify-center ${
                    service.popular ? 'text-white' : 'text-[#188CFF]'
                  }`}></i>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-sm">
                  {service.description}
                </p>
              </div>

              <ul className="space-y-3 mb-8">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start animate-slide-in-right" style={{animationDelay: `${(index * 0.1) + (featureIndex * 0.05)}s`}}>
                    <div className="w-5 h-5 bg-[#188CFF]/10 rounded-full flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                      <i className="ri-check-line text-[#188CFF] w-3 h-3 flex items-center justify-center"></i>
                    </div>
                    <span className="text-gray-700 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <div className="text-center mb-6">
                <div className={`text-2xl font-bold mb-1 ${
                  service.popular ? 'text-[#188CFF]' : 'text-gray-900'
                }`}>
                  {service.price}
                </div>
              </div>

              <button 
                onClick={() => scrollToContact(service.id, service.title)}
                className={`w-full text-center py-4 px-4 rounded-2xl font-semibold transition-all duration-300 cursor-pointer block whitespace-nowrap hover:scale-105 hover:shadow-lg ${
                  service.popular
                    ? 'bg-gradient-to-r from-[#188CFF] to-[#0D0FF6] text-white hover:shadow-xl'
                    : 'bg-gray-100 text-gray-700 hover:bg-gradient-to-r hover:from-[#188CFF] hover:to-[#0D0FF6] hover:text-white'
                }`}
              >
                Escolher Este Plano
              </button>
            </div>
          ))}
        </div>

        <div className="text-center mt-12 animate-fade-in-up" style={{animationDelay: '0.8s'}}>
          <div className="bg-white rounded-2xl p-8 shadow-xl max-w-2xl mx-auto">
            <p className="text-gray-600 mb-6">
              Dúvidas sobre qual plano escolher? A Dra. Carolina está aqui para te ajudar!
            </p>
            <a 
              href="https://wa.me/5591991883384?text=Olá,%20Dra.%20Carolina!%20Tenho%20dúvidas%20sobre%20os%20planos%20de%20atendimento."
              className="bg-gradient-to-r from-[#188CFF] to-[#0D0FF6] text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-xl transition-all duration-300 hover:scale-105 inline-flex items-center whitespace-nowrap cursor-pointer"
            >
              <i className="ri-whatsapp-line w-5 h-5 flex items-center justify-center mr-2"></i>
              Tirar Dúvidas no WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}