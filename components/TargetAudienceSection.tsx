'use client';

export default function TargetAudienceSection() {
  const audiences = [
    {
      icon: 'ri-women-line',
      title: 'Mulheres',
      description: 'Emagrecimento saudável, equilíbrio hormonal e bem-estar feminino',
      color: 'from-pink-500 to-purple-600'
    },
    {
      icon: 'ri-run-line',
      title: 'Atletas',
      description: 'Performance esportiva, ganho de massa muscular e recuperação',
      color: 'from-orange-500 to-red-600'
    },
    {
      icon: 'ri-parent-line',
      title: 'Gestantes',
      description: 'Nutrição pré-natal, controle de peso e saúde do bebê',
      color: 'from-green-500 to-emerald-600'
    },
    {
      icon: 'ri-user-line',
      title: 'Idosos',
      description: 'Prevenção de doenças, manutenção da saúde e qualidade de vida',
      color: 'from-blue-500 to-indigo-600'
    },
    {
      icon: 'ri-emotion-happy-line',
      title: 'Crianças',
      description: 'Educação alimentar, crescimento saudável e bons hábitos',
      color: 'from-yellow-500 to-orange-500'
    },
    {
      icon: 'ri-heart-pulse-line',
      title: 'Doenças Crônicas',
      description: 'Diabetes, hipertensão, colesterol alto e outras condições',
      color: 'from-red-500 to-pink-600'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Para Quem É o Atendimento
          </h2>
          <div className="w-20 h-1 bg-[#188CFF] mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Atendo diversos públicos com necessidades específicas e abordagens personalizadas
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {audiences.map((audience, index) => (
            <div 
              key={index}
              className="group bg-white border border-gray-100 rounded-2xl p-8 hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
            >
              <div className={`w-16 h-16 bg-gradient-to-br ${audience.color} rounded-full flex items-center justify-center mx-auto mb-6`}>
                <i className={`${audience.icon} text-white w-8 h-8 flex items-center justify-center`}></i>
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 text-center mb-4">
                {audience.title}
              </h3>
              
              <p className="text-gray-600 text-center leading-relaxed">
                {audience.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-6">
            Não encontrou seu perfil? Cada pessoa é única e merece atenção especializada!
          </p>
          <a 
            href="https://wa.me/5591991883384?text=Olá,%20gostaria%20de%20conversar%20sobre%20meu%20caso%20específico."
            className="bg-[#188CFF] text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-blue-600 transition-colors inline-flex items-center whitespace-nowrap cursor-pointer"
          >
            <i className="ri-whatsapp-line w-5 h-5 flex items-center justify-center mr-2"></i>
            Conversar Sobre Meu Caso
          </a>
        </div>
      </div>
    </section>
  );
}