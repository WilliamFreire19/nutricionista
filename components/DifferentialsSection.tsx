'use client';

export default function DifferentialsSection() {
  const differentials = [
    {
      icon: 'ri-microscope-line',
      title: 'Nutrição Baseada em Evidência',
      description: 'Todas as recomendações são fundamentadas em pesquisas científicas atualizadas e práticas clínicas comprovadas.',
      color: 'bg-blue-50 border-blue-200'
    },
    {
      icon: 'ri-user-heart-line',
      title: 'Plano Alimentar Personalizado',
      description: 'Cada plano é único, considerando suas preferências, rotina, objetivos e necessidades nutricionais específicas.',
      color: 'bg-green-50 border-green-200'
    },
    {
      icon: 'ri-customer-service-2-line',
      title: 'Suporte Entre Consultas',
      description: 'Tire suas dúvidas pelo WhatsApp e receba orientações sempre que precisar durante seu acompanhamento.',
      color: 'bg-purple-50 border-purple-200'
    },
    {
      icon: 'ri-global-line',
      title: 'Atendimento Online e Presencial',
      description: 'Flexibilidade total para escolher o formato que melhor se adapta à sua rotina e localização.',
      color: 'bg-orange-50 border-orange-200'
    },
    {
      icon: 'ri-book-open-line',
      title: 'Educação Nutricional',
      description: 'Aprenda sobre alimentação saudável para fazer escolhas conscientes e manter resultados a longo prazo.',
      color: 'bg-pink-50 border-pink-200'
    },
    {
      icon: 'ri-refresh-line',
      title: 'Acompanhamento Contínuo',
      description: 'Monitoramento regular com ajustes no plano conforme sua evolução e mudanças nas necessidades.',
      color: 'bg-yellow-50 border-yellow-200'
    }
  ];

  return (
    <section className="py-20 bg-[#0D0FF6]/3">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Por Que Escolher Meu Atendimento
          </h2>
          <div className="w-20 h-1 bg-[#188CFF] mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Conheça os diferenciais que tornam meu trabalho único e eficaz
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {differentials.map((differential, index) => (
            <div 
              key={index}
              className={`p-8 rounded-2xl border-2 ${differential.color} hover:shadow-lg transition-shadow`}
            >
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-md">
                  <i className={`${differential.icon} text-[#188CFF] w-8 h-8 flex items-center justify-center`}></i>
                </div>
                <h3 className="text-xl font-bold text-gray-900">
                  {differential.title}
                </h3>
              </div>
              
              <p className="text-gray-700 leading-relaxed text-center">
                {differential.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="bg-white rounded-3xl p-8 shadow-lg max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Compromisso com Seus Resultados
            </h3>
            <p className="text-gray-600 text-lg mb-8">
              Meu objetivo é muito mais do que prescrever uma dieta. É educar, apoiar e 
              acompanhar você em uma jornada de transformação sustentável e duradoura.
            </p>
            
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold text-[#188CFF] mb-2">100%</div>
                <div className="text-gray-600">Personalizado</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-[#188CFF] mb-2">24h</div>
                <div className="text-gray-600">Suporte WhatsApp</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-[#188CFF] mb-2">5+</div>
                <div className="text-gray-600">Anos de Experiência</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}