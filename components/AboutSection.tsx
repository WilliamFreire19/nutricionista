'use client';

export default function AboutSection() {
  return (
    <section id="sobre" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Sobre a Dra. Carolina Mendes
            </h2>
            <div className="w-20 h-1 bg-[#188CFF] mx-auto mb-8"></div>
            <p className="text-xl text-gray-600">
              Conheça minha história e abordagem personalizada para transformar vidas
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-slide-in-left">
              <div className="space-y-4">
                <h3 className="text-2xl font-semibold text-gray-900">
                  Minha Missão é Transformar Vidas
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Olá! Sou a Dra. Carolina Mendes, nutricionista apaixonada por ajudar pessoas a 
                  descobrirem o poder de uma alimentação equilibrada e consciente. Com mais de 5 anos 
                  de experiência, acredito que cada pessoa é única e merece um acompanhamento 
                  personalizado e acolhedor.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Minha abordagem vai além da prescrição de dietas. Trabalho com educação 
                  nutricional, mudança de hábitos sustentáveis e apoio emocional, sempre 
                  baseada em evidências científicas atuais.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-6 bg-[#0D0FF6]/5 rounded-xl hover:shadow-lg transition-all duration-300 hover:scale-105">
                  <div className="w-12 h-12 bg-[#188CFF] rounded-full flex items-center justify-center mx-auto mb-3">
                    <i className="ri-graduation-cap-line text-white w-6 h-6 flex items-center justify-center"></i>
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-1">Formação</h4>
                  <p className="text-sm text-gray-600">Nutrição - UFPA<br/>Pós-graduação em Nutrição Clínica</p>
                </div>
                
                <div className="text-center p-6 bg-[#0D0FF6]/5 rounded-xl hover:shadow-lg transition-all duration-300 hover:scale-105">
                  <div className="w-12 h-12 bg-[#188CFF] rounded-full flex items-center justify-center mx-auto mb-3">
                    <i className="ri-user-heart-line text-white w-6 h-6 flex items-center justify-center"></i>
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-1">Especialidade</h4>
                  <p className="text-sm text-gray-600">Nutrição Clínica<br/>Emagrecimento Saudável</p>
                </div>
              </div>
            </div>

            <div className="relative animate-slide-in-right">
              <img 
                src="/imagem2.jpg"
                alt="Dra. Carolina Mendes - Consulta Nutricional"
                className="w-full h-auto rounded-2xl shadow-lg object-cover object-top hover:shadow-2xl transition-shadow duration-300"
              />
              <div className="absolute top-6 right-6 bg-white p-4 rounded-xl shadow-lg animate-bounce-gentle">
                <div className="text-center">
                  <div className="text-2xl font-bold text-[#188CFF]">CRN</div>
                  <div className="text-xs text-gray-600">12345/PA</div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-16 grid md:grid-cols-3 gap-8">
            {[
              {
                icon: 'ri-heart-line',
                title: 'Atendimento Humanizado',
                description: 'Cada consulta é única, respeitando suas necessidades e objetivos pessoais.'
              },
              {
                icon: 'ri-microscope-line', 
                title: 'Baseado em Evidências',
                description: 'Todas as orientações são fundamentadas em pesquisas científicas atuais.'
              },
              {
                icon: 'ri-24-hours-line',
                title: 'Acompanhamento Contínuo', 
                description: 'Suporte entre consultas para garantir seu sucesso na jornada.'
              }
            ].map((item, index) => (
              <div 
                key={index}
                className="text-center p-6 border border-gray-100 rounded-xl hover:shadow-lg transition-all duration-300 hover:-translate-y-2 animate-fade-in-up"
                style={{animationDelay: `${index * 0.2}s`}}
              >
                <div className="w-16 h-16 bg-[#0D0FF6]/10 rounded-full flex items-center justify-center mx-auto mb-4 hover:bg-[#188CFF]/10 transition-colors duration-300">
                  <i className={`${item.icon} text-[#188CFF] w-8 h-8 flex items-center justify-center`}></i>
                </div>
                <h4 className="text-xl font-semibold text-gray-900 mb-2">{item.title}</h4>
                <p className="text-gray-600">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}