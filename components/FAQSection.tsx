'use client';

import { useState } from 'react';

export default function FAQSection() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const faqs = [
    {
      question: 'Posso fazer consulta online?',
      answer: 'Sim! Oferço atendimento tanto presencial quanto online por videochamada. O atendimento online tem a mesma qualidade e eficácia do presencial, com total comodidade para você.'
    },
    {
      question: 'Você prescreve medicamentos para emagrecer?',
      answer: 'Não, como nutricionista não posso prescrever medicamentos. Meu trabalho se concentra na educação alimentar, mudança de hábitos e orientações nutricionais baseadas em evidências científicas.'
    },
    {
      question: 'Como funciona o acompanhamento entre consultas?',
      answer: 'Você terá meu WhatsApp para tirar dúvidas, compartilhar dificuldades e receber orientações. Também envio lembretes, receitas e dicas motivacionais durante seu acompanhamento.'
    },
    {
      question: 'Quanto tempo para ver os primeiros resultados?',
      answer: 'Os primeiros resultados podem aparecer já nas primeiras 2-3 semanas, como mais disposição e melhora na digestão. Resultados visuais e de peso geralmente aparecem entre 4-6 semanas, variando de pessoa para pessoa.'
    },
    {
      question: 'Você atende crianças e adolescentes?',
      answer: 'Sim, atendo crianças e adolescentes sempre com o acompanhamento e consentimento dos pais. O foco é na educação alimentar e criação de hábitos saudáveis para toda a família.'
    },
    {
      question: 'Aceita algum plano de saúde?',
      answer: 'Atualmente trabalho como particular, mas forneço recibo para que você possa solicitar reembolso ao seu plano de saúde conforme as regras de cobertura de cada operadora.'
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Perguntas Frequentes
          </h2>
          <div className="w-20 h-1 bg-[#188CFF] mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Tire suas principais dúvidas sobre o atendimento nutricional
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors cursor-pointer"
              >
                <h3 className="text-lg font-semibold text-gray-900 pr-4">
                  {faq.question}
                </h3>
                <div className={`w-8 h-8 flex items-center justify-center rounded-full bg-[#0D0FF6]/10 transition-transform ${
                  openFAQ === index ? 'rotate-180' : ''
                }`}>
                  <i className="ri-arrow-down-s-line text-[#188CFF] w-5 h-5 flex items-center justify-center"></i>
                </div>
              </button>
              
              {openFAQ === index && (
                <div className="px-8 pb-6">
                  <div className="pt-4 border-t border-gray-100">
                    <p className="text-gray-700 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-6">
            Ainda tem dúvidas? Fale comigo diretamente!
          </p>
          <a 
            href="https://wa.me/5591991883384?text=Olá,%20tenho%20algumas%20dúvidas%20sobre%20o%20atendimento%20nutricional."
            className="bg-[#188CFF] text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-blue-600 transition-colors inline-flex items-center whitespace-nowrap cursor-pointer"
          >
            <i className="ri-whatsapp-line w-5 h-5 flex items-center justify-center mr-2"></i>
            Conversar no WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}