"use client";

import Link from "next/link";

export default function HeroSection() {
  return (
    <section
      className="min-h-screen bg-gradient-to-br from-[#0D0FF6]/5 to-[#188CFF]/10 pt-20 flex items-center"
      style={{
        backgroundImage: `url('https://readdy.ai/api/search-image?query=professional%20nutritionist%20Dr%20Carolina%20Mendes%20consultation%20room%20with%20healthy%20foods%2C%20vegetables%2C%20fruits%2C%20modern%20office%20setting%20with%20natural%20lighting%2C%20clean%20white%20and%20blue%20color%20scheme%2C%20welcoming%20atmosphere%2C%20high%20quality%20photography&width=1920&height=1080&seq=hero-carolina&orientation=landscape')`,
        backgroundSize: "cover",
        backgroundPosition: "right center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="bg-white/90 backdrop-blur-sm w-full">
        <div className="container mx-auto px-4 py-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-slide-in-left">
              <div className="space-y-6">
                <div className="inline-flex items-center bg-[#0D0FF6]/10 text-[#188CFF] px-4 py-2 rounded-full text-sm font-medium animate-bounce-gentle">
                  <i className="ri-medal-line w-5 h-5 flex items-center justify-center mr-2"></i>
                  Mais de 500 pacientes transformados
                </div>

                <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight animate-fade-in-up">
                  Transforme sua
                  <span className="text-[#188CFF]"> saúde </span>
                  com a Dra. Carolina Mendes
                </h1>

                <p
                  className="text-xl text-gray-600 leading-relaxed animate-fade-in-up"
                  style={{ animationDelay: "0.3s" }}
                >
                  Descubra como uma alimentação equilibrada e acompanhamento
                  profissional podem revolucionar sua qualidade de vida e
                  bem-estar.
                </p>
              </div>

              <div
                className="flex flex-col sm:flex-row gap-4 animate-fade-in-up"
                style={{ animationDelay: "0.6s" }}
              >
                <Link
                  href="https://wa.me/5591991883384?text=Olá,%20Dra.%20Carolina!%20Gostaria%20de%20agendar%20uma%20consulta%20nutricional."
                  className="bg-[#188CFF] text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-blue-600 transition-all duration-300 hover:scale-105 text-center whitespace-nowrap cursor-pointer"
                >
                  <i className="ri-whatsapp-line w-5 h-5 flex items-center justify-center mr-2 inline-flex"></i>
                  Agendar Consulta Agora
                </Link>

                <button
                  onClick={() =>
                    document
                      .getElementById("sobre")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                  className="border-2 border-[#188CFF] text-[#188CFF] px-8 py-4 rounded-full font-semibold text-lg hover:bg-[#188CFF] hover:text-white transition-all duration-300 hover:scale-105 text-center whitespace-nowrap cursor-pointer"
                >
                  Conhecer Meu Trabalho
                </button>
              </div>

              <div
                className="flex items-center space-x-8 animate-slide-in-up"
                style={{ animationDelay: "0.9s" }}
              >
                <div className="text-center hover:scale-110 transition-transform duration-300">
                  <div className="text-3xl font-bold text-[#188CFF]">500+</div>
                  <div className="text-sm text-gray-600">
                    Pacientes Atendidos
                  </div>
                </div>
                <div className="text-center hover:scale-110 transition-transform duration-300">
                  <div className="text-3xl font-bold text-[#188CFF]">5+</div>
                  <div className="text-sm text-gray-600">
                    Anos de Experiência
                  </div>
                </div>
                <div className="text-center hover:scale-110 transition-transform duration-300">
                  <div className="text-3xl font-bold text-[#188CFF]">95%</div>
                  <div className="text-sm text-gray-600">Satisfação</div>
                </div>
              </div>
            </div>

            <div className="relative animate-slide-in-right">
              <div className="relative w-full max-w-md mx-auto">
                <img
                  src="/imagem1.jpg"
                  alt="Dra. Carolina Mendes"
                  className="w-full h-auto rounded-2xl shadow-2xl object-cover object-top hover:shadow-3xl transition-shadow duration-500"
                />
                <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg animate-pulse-gentle">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-[#0D0FF6]/10 rounded-full flex items-center justify-center">
                      <i className="ri-heart-pulse-line text-[#188CFF] w-6 h-6 flex items-center justify-center"></i>
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">
                        CRN Ativo
                      </div>
                      <div className="text-sm text-gray-600">
                        Dra. Carolina Mendes
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
