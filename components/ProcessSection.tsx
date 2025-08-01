'use client';

export default function ProcessSection() {
  const steps = [
    {
      icon: 'ri-calendar-check-line',
      title: 'Agendamento',
      description: 'Agende sua consulta pelo WhatsApp de forma rápida e prática',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: 'ri-user-heart-line',
      title: 'Consulta Detalhada',
      description: 'Avaliação completa do seu histórico, hábitos e objetivos',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: 'ri-file-list-3-line',
      title: 'Plano Personalizado',
      description: 'Receba seu plano alimentar exclusivo e orientações práticas',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: 'ri-heart-pulse-line',
      title: 'Acompanhamento',
      description: 'Monitoramento constante e ajustes conforme sua evolução',
      color: 'from-blue-500 to-blue-600'

    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-[#0D0FF6]/3 via-white to-[#188CFF]/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Como Funciona o Atendimento da Dra. Carolina
          </h2>
          <div className="w-20 h-1 bg-[#188CFF] mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Um processo estruturado e personalizado para garantir os melhores resultados
          </p>
        </div>

        <div className="relative max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-4 gap-8 lg:gap-4">
            {steps.map((step, index) => (
              <div 
                key={index} 
                className="relative animate-fade-in-up hover:scale-105 transition-all duration-500"
                style={{animationDelay: `${index * 0.2}s`}}
              >
                <div className="bg-white p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 text-center relative overflow-hidden">
                  {/* Background decorativo */}
                  <div className="absolute top-0 right-0 w-20 h-20 opacity-5 transform rotate-12">
                    <i className={`${step.icon} text-6xl text-gray-400`}></i>
                  </div>
                  
                  <div className="relative z-10">
                    {/* Número do passo */}
                    <div className="absolute -top-4 -left-4 w-8 h-8 bg-gradient-to-br from-[#188CFF] to-[#0D0FF6] text-white rounded-full flex items-center justify-center text-sm font-bold shadow-lg animate-bounce-gentle">
                      {index + 1}
                    </div>
                    
                    {/* Ícone principal - SEM CAIXA */}
                    <div className="mb-6 flex items-center justify-center">
                      <i className={`${step.icon} text-6xl bg-gradient-to-br ${step.color} bg-clip-text text-transparent hover:scale-110 transition-transform duration-300`}></i>
                    </div>
                    
                    <h3 className="text-xl font-bold text-gray-900 mb-4">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
                
                {/* Seta conectora */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:flex absolute top-1/2 -right-2 transform -translate-y-1/2 z-20">
                    <div className="w-6 h-6 bg-white rounded-full shadow-lg flex items-center justify-center animate-pulse">
                      <i className="ri-arrow-right-line text-[#188CFF] w-4 h-4 flex items-center justify-center"></i>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-16 animate-fade-in-up" style={{animationDelay: '1s'}}>
          <div className="bg-white rounded-2xl p-8 shadow-xl max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Pronta para Começar sua Transformação?
            </h3>
            <p className="text-gray-600 mb-6">
              O primeiro passo é sempre o mais importante. Vamos conversar sobre seus objetivos!
            </p>
            <a 
              href="https://wa.me/5591991883384?text=Olá,%20Dra.%20Carolina!%20Gostaria%20de%20começar%20minha%20transformação%20nutricional."
              className="bg-gradient-to-r from-[#188CFF] to-[#0D0FF6] text-white px-10 py-4 rounded-full font-semibold text-lg hover:shadow-xl transition-all duration-300 hover:scale-105 inline-flex items-center whitespace-nowrap cursor-pointer"
            >
              <i className="ri-whatsapp-line w-5 h-5 flex items-center justify-center mr-3"></i>
              Começar Transformação
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}