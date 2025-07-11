
import React from 'react';
import { Droplets, Scissors, Heart, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const BanhoTosa = () => {
  const handleBanhoClick = () => {
    const message = "Olá! Gostaria de marcar um banho para o meu pet, teria disponibilidade?";
    const whatsappUrl = `https://wa.me/5535998759887?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleBanhoTosaClick = () => {
    const message = "Olá! Gostaria de marcar um banho e tosa para o meu pet, teria disponibilidade?";
    const whatsappUrl = `https://wa.me/5535998759887?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const services = [
    {
      icon: <Droplets className="h-12 w-12 text-blue-500" />,
      title: "Banho Completo",
      description: "Shampoo especial, condicionador, secagem e perfume",
      features: ["Produtos hipoalergênicos", "Água aquecida", "Secagem profissional"]
    },
    {
      icon: <Scissors className="h-12 w-12 text-orange-500" />,
      title: "Tosa Completa",
      description: "Corte profissional adaptado à raça e preferência",
      features: ["Corte na tesoura", "Máquina profissional", "Acabamento perfeito"]
    },
    {
      icon: <Heart className="h-12 w-12 text-pink-500" />,
      title: "Cuidados Especiais",
      description: "Limpeza de ouvidos, corte de unhas e escovação",
      features: ["Higiene completa", "Cuidados com segurança", "Carinho e paciência"]
    },
    {
      icon: <Star className="h-12 w-12 text-yellow-500" />,
      title: "Tratamentos",
      description: "Hidratação, antipulgas e cuidados dermatológicos",
      features: ["Produtos veterinários", "Tratamentos especializados", "Pele e pelagem saudáveis"]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-500 to-orange-500 py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Banho e Tosa
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto mb-8">
            Cuidados profissionais para deixar seu pet ainda mais bonito e saudável. 
            Nossa equipe especializada oferece todo o carinho que seu animal merece.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              onClick={handleBanhoClick}
              size="lg" 
              className="bg-white text-blue-600 hover:bg-gray-100 text-lg px-8 py-3"
            >
              Agendar Banho
            </Button>
            <Button 
              onClick={handleBanhoTosaClick}
              variant="outline" 
              size="lg" 
              className="border-white text-white hover:bg-white/10 text-lg px-8 py-3"
            >
              Agendar Banho e Tosa
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">
              <span className="text-gray-800">Cuidados</span>{' '}
              <span className="text-orange-500">Especializados</span>
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              No Estilo de Bicho, entendemos que cada pet é único e merece cuidados especiais. 
              Nossa equipe de profissionais qualificados utiliza produtos de alta qualidade e 
              técnicas adequadas para cada tipo de pelagem e temperamento. Priorizamos o 
              bem-estar e conforto do seu animal durante todo o processo, garantindo uma 
              experiência tranquila e resultados excepcionais.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-blue-500">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-white">
            Nossos Serviços
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="h-full hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6 text-center h-full flex flex-col">
                  <div className="flex justify-center mb-4">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-gray-800">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-4 flex-grow">
                    {service.description}
                  </p>
                  <ul className="text-sm text-gray-500 space-y-1">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center justify-center">
                        <span className="w-2 h-2 bg-orange-500 rounded-full mr-2"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6 text-gray-800">
              Pronto para agendar?
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Entre em contato conosco via WhatsApp e agende o melhor cuidado para seu pet. 
              Nossa equipe está pronta para atender você com todo carinho!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                onClick={handleBanhoClick}
                size="lg" 
                className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-lg px-8 py-3"
              >
                Agendar Banho
              </Button>
              <Button 
                onClick={handleBanhoTosaClick}
                size="lg" 
                className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-lg px-8 py-3"
              >
                Agendar Banho e Tosa
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BanhoTosa;
