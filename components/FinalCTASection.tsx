"use client";

export default function FinalCTASection() {
  return (
    <section
      className="py-20 relative"
      style={{
        backgroundImage: `linear-gradient(rgba(24, 140, 255, 0.9), rgba(13, 15, 246, 0.9)), url('https://readdy.ai/api/search-image?query=healthy%20lifestyle%20transformation%2C%20fresh%20vegetables%20fruits%20smoothie%20bowl%2C%20motivational%20wellness%20background%2C%20natural%20lighting%2C%20inspiring%20health%20journey%2C%20vibrant%20colors%2C%20clean%20eating%20concept&width=1920&height=600&seq=cta-bg&orientation=landscape')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-5xl font-bold mb-8">
            Sua Transformação Começa Hoje
          </h2>

          <p className="text-xl mb-8 leading-relaxed">
            Não deixe para amanhã o que pode mudar sua vida hoje. Milhares de
            pessoas já transformaram sua saúde e bem-estar.
            <strong> Você pode ser a próxima!</strong>
          </p>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-time-line text-white w-8 h-8 flex items-center justify-center"></i>
              </div>
              <h3 className="text-xl font-bold mb-2">Resultados Rápidos</h3>
              <p className="text-white/90">
                Primeiros resultados em 2-3 semanas
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-shield-check-line text-white w-8 h-8 flex items-center justify-center"></i>
              </div>
              <h3 className="text-xl font-bold mb-2">Método Comprovado</h3>
              <p className="text-white/90">
                Mais de 500 pacientes transformados
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-heart-line text-white w-8 h-8 flex items-center justify-center"></i>
              </div>
              <h3 className="text-xl font-bold mb-2">Acompanhamento Total</h3>
              <p className="text-white/90">
                Suporte contínuo até atingir seus objetivos
              </p>
            </div>
          </div>

          <div className="space-y-6">
            <div className="text-2xl font-semibold">
              ⏰ Vagas limitadas para este mês!
            </div>

            <p className="text-lg">
              Para garantir atendimento de qualidade, aceito um número limitado
              de novos pacientes por mês.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="https://wa.me/5591991883384?text=Olá,%20quero%20agendar%20minha%20consulta%20nutricional."
                className="bg-white text-[#188CFF] px-10 py-5 rounded-full font-bold text-xl hover:bg-gray-100 transition-colors inline-flex items-center whitespace-nowrap cursor-pointer shadow-lg"
              >
                <i className="ri-whatsapp-line w-6 h-6 flex items-center justify-center mr-3"></i>
                Agendar Minha Consulta
              </a>
            </div>

            <div className="flex items-center justify-center space-x-4 text-sm">
              <div className="flex items-center">
                <i className="ri-check-line w-4 h-4 flex items-center justify-center mr-1"></i>
                Atendimento humanizado
              </div>
              <div className="flex items-center">
                <i className="ri-check-line w-4 h-4 flex items-center justify-center mr-1"></i>
                Plano personalizado
              </div>
              <div className="flex items-center">
                <i className="ri-check-line w-4 h-4 flex items-center justify-center mr-1"></i>
                Resultados garantidos
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
