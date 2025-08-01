'use client';

import { useState } from 'react';

export default function BeforeAfterSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const results = [
    {
      name: 'Maria Santos',
      age: 34,
      goal: 'Emagrecimento',
      result: 'Perdeu 20kg em 12 meses',
      description: 'Conseguiu mudar completamente seus hábitos alimentares e ganhou mais disposição.',
      before: '/antes1.jpg',
      after: '/depois1.jpg'
    },
    {
      name: 'João Silva',
      age: 28,
      goal: 'Ganho de Massa Muscular',
      result: 'Ganhou 8kg de massa magra',
      description: 'Melhorou significativamente sua performance nos treinos com a alimentação adequada.',
      before: 'https://readdy.ai/api/search-image?query=before%20muscle%20gain%20transformation%20man%2C%20fitness%20nutrition%20journey%2C%20healthy%20weight%20gain%20progress%2C%20professional%20healthcare%20documentation%2C%20fitness%20transformation&width=300&height=400&seq=before-2&orientation=portrait',
      after: 'https://readdy.ai/api/search-image?query=after%20muscle%20gain%20transformation%20man%2C%20fitness%20nutrition%20success%2C%20healthy%20weight%20gain%20results%2C%20professional%20healthcare%20documentation%2C%20successful%20fitness%20transformation&width=300&height=400&seq=after-2&orientation=portrait'
    },
    {
      name: 'Ana Costa',
      age: 42,
      goal: 'Controle do Diabetes',
      result: 'Normalizou os níveis de glicose',
      description: 'Aprendeu a controlar a diabetes através de uma alimentação equilibrada.',
      before: 'https://readdy.ai/api/search-image?query=after%20diabetes%20control%20transformation%20woman%2C%20health%20improvement%20success%2C%20medical%20nutrition%20therapy%20results%2C%20professional%20healthcare%20documentation%2C%20successful%20health%20transformation&width=300&height=400&seq=after-3&orientation=portrait',
      after: 'https://readdy.ai/api/search-image?query=before%20diabetes%20control%20transformation%20woman%2C%20health%20improvement%20journey%2C%20medical%20nutrition%20therapy%20progress%2C%20professional%20healthcare%20documentation%2C%20health%20transformation&width=300&height=400&seq=before-3&orientation=portrait'
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % results.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + results.length) % results.length);
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Resultados Reais dos Meus Pacientes
          </h2>
          <div className="w-20 h-1 bg-[#188CFF] mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Veja as transformações incríveis que acontecem quando você segue um plano personalizado
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            <div className="bg-gray-50 rounded-3xl p-8 lg:p-12">
              <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center">
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-[#188CFF] to-[#0D0FF6] rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-lg">{currentSlide + 1}</span>
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900">
                        {results[currentSlide].name}
                      </h3>
                      <p className="text-gray-600">
                        {results[currentSlide].age} anos • {results[currentSlide].goal}
                      </p>
                    </div>
                  </div>

                  <div className="bg-[#0D0FF6]/10 p-6 rounded-2xl">
                    <h4 className="text-xl font-semibold text-[#188CFF] mb-2">
                      Resultado Alcançado
                    </h4>
                    <p className="text-2xl font-bold text-gray-900 mb-3">
                      {results[currentSlide].result}
                    </p>
                    <p className="text-gray-700">
                      {results[currentSlide].description}
                    </p>
                  </div>

                  <div className="flex items-center space-x-2">
                    {[...Array(5)].map((_, i) => (
                      <i key={i} className="ri-star-fill text-yellow-400 w-5 h-5 flex items-center justify-center"></i>
                    ))}
                    <span className="ml-2 text-gray-600 text-sm">Muito satisfeita com os resultados!</span>
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center">
                      <div className="relative">
                        <img 
                          src={results[currentSlide].before}
                          alt="Antes"
                          className="w-full h-64 object-cover object-top rounded-xl"
                        />
                        <div className="absolute bottom-2 left-2 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                          Antes
                        </div>
                      </div>
                    </div>
                    <div className="text-center">
                      <div className="relative">
                        <img 
                          src={results[currentSlide].after}
                          alt="Depois"
                          className="w-full h-64 object-cover object-top rounded-xl"
                        />
                        <div className="absolute bottom-2 left-2 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                          Depois
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <button 
              onClick={prevSlide}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white shadow-lg rounded-full flex items-center justify-center hover:bg-gray-50 transition-colors cursor-pointer"
            >
              <i className="ri-arrow-left-line text-[#188CFF] w-6 h-6 flex items-center justify-center"></i>
            </button>
            
            <button 
              onClick={nextSlide}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white shadow-lg rounded-full flex items-center justify-center hover:bg-gray-50 transition-colors cursor-pointer"
            >
              <i className="ri-arrow-right-line text-[#188CFF] w-6 h-6 flex items-center justify-center"></i>
            </button>
          </div>

          <div className="flex justify-center mt-8 space-x-2">
            {results.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-colors cursor-pointer ${
                  currentSlide === index ? 'bg-[#188CFF]' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}