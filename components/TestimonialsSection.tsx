'use client';

import { useState } from 'react';

export default function TestimonialsSection() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  
  const testimonials = [
    {
      name: 'Carla Mendes',
      age: 35,
      goal: 'Emagrecimento saudável',
      text: 'A consulta com a nutricionista mudou completamente minha relação com a comida. Perdi 12kg de forma saudável e sustentável. O acompanhamento foi fundamental para manter a motivação!',
      rating: 5,
      photo: 'https://readdy.ai/api/search-image?query=happy%20woman%20testimonial%20photo%2C%20satisfied%20patient%20smiling%2C%20healthcare%20success%20story%2C%20professional%20portrait%20photography%2C%20natural%20lighting%2C%20confident%20expression&width=200&height=200&seq=testimonial-1&orientation=squarish'
    },
    {
      name: 'Roberto Alves',
      age: 42,
      goal: 'Controle do colesterol',
      text: 'Estava com colesterol alto e não sabia como mudar minha alimentação. Com as orientações recebidas, consegui normalizar meus exames em apenas 3 meses. Recomendo muito!',
      rating: 5,
      photo: 'https://readdy.ai/api/search-image?query=middle%20aged%20man%20testimonial%20photo%2C%20satisfied%20male%20patient%20smiling%2C%20healthcare%20success%20story%2C%20professional%20portrait%20photography%2C%20natural%20lighting%2C%20confident%20expression&width=200&height=200&seq=testimonial-2&orientation=squarish'
    },
    {
      name: 'Fernanda Costa',
      age: 28,
      goal: 'Ganho de energia',
      text: 'Sempre me sentia cansada e sem energia. Depois de seguir o plano alimentar personalizado, minha disposição melhorou muito! Agora tenho energia para trabalhar e cuidar da família.',
      rating: 5,
      photo: 'https://readdy.ai/api/search-image?query=young%20woman%20testimonial%20photo%2C%20energetic%20female%20patient%20smiling%2C%20healthcare%20success%20story%2C%20professional%20portrait%20photography%2C%20natural%20lighting%2C%20vibrant%20expression&width=200&height=200&seq=testimonial-3&orientation=squarish'
    },
    {
      name: 'Lucas Santos',
      age: 31,
      goal: 'Ganho de massa muscular',
      text: 'Como atleta, precisava de orientação especializada para otimizar minha alimentação. Os resultados foram além das expectativas - melhorei meu desempenho e composição corporal.',
      rating: 5,
      photo: 'https://readdy.ai/api/search-image?query=athletic%20young%20man%20testimonial%20photo%2C%20satisfied%20fitness%20patient%20smiling%2C%20sports%20nutrition%20success%20story%2C%20professional%20portrait%20photography%2C%20natural%20lighting%2C%20strong%20expression&width=200&height=200&seq=testimonial-4&orientation=squarish'
    },
    {
      name: 'Patricia Lima',
      age: 38,
      goal: 'Alimentação familiar',
      text: 'Aprendi a preparar refeições saudáveis para toda a família. Meus filhos agora comem verduras sem reclamar! O investimento valeu cada centavo.',
      rating: 5,
      photo: 'https://readdy.ai/api/search-image?query=mother%20testimonial%20photo%2C%20happy%20family%20nutrition%20patient%20smiling%2C%20healthcare%20success%20story%2C%20professional%20portrait%20photography%2C%20natural%20lighting%2C%20caring%20expression&width=200&height=200&seq=testimonial-5&orientation=squarish'
    }
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="depoimentos" className="py-20 bg-[#0D0FF6]/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            O Que Dizem Meus Pacientes
          </h2>
          <div className="w-20 h-1 bg-[#188CFF] mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Depoimentos reais de pessoas que transformaram suas vidas
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-lg">
              <div className="text-center mb-8">
                <img 
                  src={testimonials[currentTestimonial].photo}
                  alt={testimonials[currentTestimonial].name}
                  className="w-24 h-24 rounded-full mx-auto mb-6 object-cover object-top"
                />
                
                <div className="flex justify-center mb-4">
                  {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                    <i key={i} className="ri-star-fill text-yellow-400 w-6 h-6 flex items-center justify-center"></i>
                  ))}
                </div>
                
                <blockquote className="text-xl text-gray-700 leading-relaxed mb-6 italic">
                  "{testimonials[currentTestimonial].text}"
                </blockquote>
                
                <div>
                  <h4 className="text-xl font-semibold text-gray-900">
                    {testimonials[currentTestimonial].name}
                  </h4>
                  <p className="text-gray-600">
                    {testimonials[currentTestimonial].age} anos • {testimonials[currentTestimonial].goal}
                  </p>
                </div>
              </div>
            </div>

            <button 
              onClick={prevTestimonial}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white shadow-lg rounded-full flex items-center justify-center hover:bg-gray-50 transition-colors cursor-pointer"
            >
              <i className="ri-arrow-left-line text-[#188CFF] w-6 h-6 flex items-center justify-center"></i>
            </button>
            
            <button 
              onClick={nextTestimonial}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white shadow-lg rounded-full flex items-center justify-center hover:bg-gray-50 transition-colors cursor-pointer"
            >
              <i className="ri-arrow-right-line text-[#188CFF] w-6 h-6 flex items-center justify-center"></i>
            </button>
          </div>

          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-colors cursor-pointer ${
                  currentTestimonial === index ? 'bg-[#188CFF]' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>

        <div className="text-center mt-12">
          <a 
            href="https://wa.me/5591991883384?text=Olá,%20gostaria%20de%20agendar%20uma%20consulta%20nutricional."
            className="bg-[#188CFF] text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-blue-600 transition-colors inline-flex items-center whitespace-nowrap cursor-pointer"
          >
            <i className="ri-whatsapp-line w-5 h-5 flex items-center justify-center mr-2"></i>
            Quero Ser o Próximo Depoimento
          </a>
        </div>
      </div>
    </section>
  );
}