'use client';

import { useState, useEffect } from 'react';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const services = [
    { id: 'consulta-online', name: 'Consulta Online' },
    { id: 'acompanhamento-mensal', name: 'Acompanhamento Mensal' },
    { id: 'nutricao-gestantes', name: 'Nutrição para Gestantes' },
    { id: 'consulta-familiar', name: 'Consulta Familiar' },
    { id: 'outros', name: 'Outros / Dúvidas Gerais' }
  ];

  useEffect(() => {
    // Verificar se há um serviço selecionado no localStorage
    const selectedService = localStorage.getItem('selectedService');
    if (selectedService) {
      try {
        const service = JSON.parse(selectedService);
        setFormData(prev => ({
          ...prev,
          service: service.id
        }));
        // Limpar o localStorage após usar
        localStorage.removeItem('selectedService');
      } catch (error) {
        console.error('Erro ao recuperar serviço selecionado:', error);
      }
    }
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    if (!formData.name || !formData.email || !formData.service || !formData.message) {
      setSubmitMessage('Por favor, preencha todos os campos.');
      setIsSubmitting(false);
      return;
    }

    if (formData.message.length > 500) {
      setSubmitMessage('Mensagem deve ter no máximo 500 caracteres.');
      setIsSubmitting(false);
      return;
    }

    // Encontrar o nome do serviço selecionado
    const selectedService = services.find(s => s.id === formData.service);
    const serviceName = selectedService ? selectedService.name : formData.service;

    // Enviar para WhatsApp
    const whatsappMessage = `Olá, Dra. Carolina! Meu nome é ${formData.name}.%0AEmail: ${formData.email}%0AServiço de interesse: ${serviceName}%0AMensagem: ${formData.message}`;
    const whatsappUrl = `https://wa.me/5591991883384?text=${whatsappMessage}`;
    
    window.open(whatsappUrl, '_blank');
    
    setSubmitMessage('Redirecionando para o WhatsApp...');
    setFormData({ name: '', email: '', service: '', message: '' });
    setIsSubmitting(false);
  };

  return (
    <section id="contato" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Entre em Contato com a Dra. Carolina
          </h2>
          <div className="w-20 h-1 bg-[#188CFF] mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Estou aqui para esclarecer suas dúvidas e ajudar você a dar o primeiro passo
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div className="animate-slide-in-left">
            <div className="bg-gradient-to-br from-[#0D0FF6]/5 to-[#188CFF]/10 rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-shadow duration-500">
              <h3 className="text-2xl font-bold text-gray-900 mb-8">
                Envie Sua Mensagem
              </h3>
              
              <form id="contact-form" onSubmit={handleSubmit} className="space-y-6">
                <div className="animate-fade-in-up" style={{animationDelay: '0.1s'}}>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Nome Completo *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#188CFF] focus:border-transparent outline-none transition-all duration-300 text-sm hover:border-[#188CFF]/50"
                    placeholder="Digite seu nome completo"
                    required
                  />
                </div>

                <div className="animate-fade-in-up" style={{animationDelay: '0.2s'}}>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    E-mail *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#188CFF] focus:border-transparent outline-none transition-all duration-300 text-sm hover:border-[#188CFF]/50"
                    placeholder="Digite seu e-mail"
                    required
                  />
                </div>

                <div className="animate-fade-in-up" style={{animationDelay: '0.3s'}}>
                  <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                    Serviço de Interesse *
                  </label>
                  <div className="relative">
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 pr-8 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#188CFF] focus:border-transparent outline-none transition-all duration-300 text-sm hover:border-[#188CFF]/50 appearance-none bg-white"
                      required
                    >
                      <option value="">Selecione um serviço</option>
                      {services.map((service) => (
                        <option key={service.id} value={service.id}>
                          {service.name}
                        </option>
                      ))}
                    </select>
                    <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                      <i className="ri-arrow-down-s-line text-gray-400 w-5 h-5 flex items-center justify-center"></i>
                    </div>
                  </div>
                </div>

                <div className="animate-fade-in-up" style={{animationDelay: '0.4s'}}>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Mensagem *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={5}
                    maxLength={500}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#188CFF] focus:border-transparent outline-none transition-all duration-300 text-sm resize-none hover:border-[#188CFF]/50"
                    placeholder="Conte um pouco sobre seus objetivos e dúvidas..."
                    required
                  ></textarea>
                  <div className="text-right text-xs text-gray-500 mt-1">
                    {formData.message.length}/500 caracteres
                  </div>
                </div>

                <div className="animate-fade-in-up" style={{animationDelay: '0.5s'}}>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-[#188CFF] to-[#0D0FF6] text-white py-4 px-6 rounded-xl font-semibold hover:shadow-xl transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap cursor-pointer"
                  >
                    {isSubmitting ? 'Enviando...' : 'Enviar Mensagem'}
                  </button>
                </div>

                {submitMessage && (
                  <div className={`text-center p-3 rounded-xl animate-fade-in ${
                    submitMessage.includes('Redirecionando') ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                  }`}>
                    {submitMessage}
                  </div>
                )}
              </form>
            </div>
          </div>

          <div className="space-y-8 animate-slide-in-right">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-8">
                Informações de Contato
              </h3>
              
              <div className="space-y-6">
                {[
                  {
                    icon: 'ri-whatsapp-line',
                    title: 'WhatsApp',
                    content: '(91) 99188-3384',
                    link: 'https://wa.me/5591991883384',
                    linkText: 'Iniciar conversa',
                    delay: '0.1s'
                  },
                  {
                    icon: 'ri-mail-line',
                    title: 'E-mail',
                    content: 'dra.carolina@nutricao.com',
                    delay: '0.2s'
                  },
                  {
                    icon: 'ri-map-pin-line',
                    title: 'Localização',
                    content: 'Belém - PA',
                    subContent: 'Atendimento presencial e online',
                    delay: '0.3s'
                  },
                  {
                    icon: 'ri-time-line',
                    title: 'Horário de Atendimento',
                    content: 'Segunda a Sexta: 8h às 18h',
                    subContent: 'Sábado: 8h às 12h',
                    delay: '0.4s'
                  }
                ].map((item, index) => (
                  <div key={index} className="flex items-start animate-fade-in-up" style={{animationDelay: item.delay}}>
                    <div className="w-12 h-12 bg-[#0D0FF6]/10 rounded-full flex items-center justify-center mr-4 flex-shrink-0 hover:bg-[#188CFF]/10 transition-colors duration-300">
                      <i className={`${item.icon} text-[#188CFF] w-6 h-6 flex items-center justify-center`}></i>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">{item.title}</h4>
                      <p className="text-gray-600">{item.content}</p>
                      {item.subContent && (
                        <p className="text-sm text-gray-500">{item.subContent}</p>
                      )}
                      {item.link && (
                        <a 
                          href={item.link}
                          className="text-[#188CFF] hover:underline cursor-pointer transition-colors duration-300"
                        >
                          {item.linkText}
                        </a>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gray-50 rounded-2xl p-6 animate-fade-in-up" style={{animationDelay: '0.6s'}}>
              <h4 className="font-semibold text-gray-900 mb-4">Consultório (quando presencial)</h4>
              <div className="aspect-w-16 aspect-h-9">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.6937341723485!2d-48.50493262571595!3d-1.379739235670157!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x92a48c4999cb11f3%3A0x4f8b8f8f8f8f8f8!2sBel%C3%A9m%2C%20PA!5e0!3m2!1spt!2sbr!4v1629999999999!5m2!1spt!2sbr"
                  width="100%"
                  height="200"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="rounded-xl"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}