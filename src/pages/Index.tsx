
import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, Shield, Truck, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const Index = () => {
  const benefits = [
    {
      icon: <Heart className="h-8 w-8 text-orange-500" />,
      title: 'Amor pelos Pets',
      description: 'Cada produto é selecionado pensando no bem-estar do seu pet'
    },
    {
      icon: <Shield className="h-8 w-8 text-blue-500" />,
      title: 'Qualidade Garantida',
      description: 'Trabalhamos apenas com as melhores marcas do mercado'
    },
    {
      icon: <Truck className="h-8 w-8 text-orange-500" />,
      title: 'Entrega Rápida',
      description: 'Receba seus produtos no conforto da sua casa'
    },
    {
      icon: <Clock className="h-8 w-8 text-blue-500" />,
      title: 'Atendimento Ágil',
      description: 'Suporte personalizado via WhatsApp'
    }
  ];

  return (
    <div className="min-h-screen animate-fade-in-up">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-accent/20 to-secondary/20 py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-secondary/5"></div>
        <div className="container mx-auto px-4 relative">
          <div className="max-w-5xl mx-auto text-center">
            {/* Logo */}
            <div className="mb-8 animate-paw-bounce">
              <img 
                src="/lovable-uploads/504ac006-59be-4f6a-9f1a-9a4035026ae5.png" 
                alt="Estilo de Bicho" 
                className="h-24 md:h-32 w-auto mx-auto drop-shadow-lg"
              />
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Tudo o que seu pet precisa em um só lugar!
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed max-w-3xl mx-auto">
              Produtos de qualidade, preços justos e muito carinho por cada pet. 
              Sua loja de confiança para cuidar de quem você mais ama.
            </p>

            {/* Store Info Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8 max-w-4xl mx-auto">
              {/* Location Card */}
              <Card className="p-6 hover:shadow-lg transition-shadow cursor-pointer group" 
                    onClick={() => window.open('https://www.google.com/maps/search/?api=1&query=Pet+Shop+Estilo+de+Bicho+Av.+Padre+Lourenço+da+Costa-Rodovia+Br-459,+2394+-+Nossa+Sra.+de+Fatima,+Itajubá+-+MG,+37502-507', '_blank')}>
                <CardContent className="p-0 text-center">
                  <div className="text-primary mb-3 group-hover:animate-bounce-soft">
                    <svg className="w-8 h-8 mx-auto" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <h3 className="font-bold text-lg mb-2 text-foreground">Nossa Localização</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Avenida Padre Lourenço 2394<br />
                    Nossa Senhora de Fátima<br />
                    Itajubá, MG - 37502507
                  </p>
                  <p className="text-xs text-primary mt-2 group-hover:underline">
                    Clique para abrir no Maps
                  </p>
                </CardContent>
              </Card>

              {/* Hours Card */}
              <Card className="p-6 hover:shadow-lg transition-shadow">
                <CardContent className="p-0 text-center">
                  <div className="text-primary mb-3">
                    <svg className="w-8 h-8 mx-auto" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <h3 className="font-bold text-lg mb-3 text-foreground">Horário de Funcionamento</h3>
                  <div className="space-y-2 text-sm">
                    <div>
                      <p className="font-medium text-foreground">Loja</p>
                      <p className="text-muted-foreground">Segunda a Sábado: 8:00 - 20:00</p>
                      <p className="text-muted-foreground">Domingo: 8:00 - 12:00</p>
                    </div>
                    <div className="pt-2 border-t border-border">
                      <p className="font-medium text-foreground">Delivery</p>
                      <p className="text-muted-foreground">Segunda a Sábado: 8:30 - 19:00</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                asChild 
                size="lg" 
                className="bg-orange-500 hover:bg-orange-600 text-white border-2 border-orange-500 hover:border-orange-600 shadow-lg hover:shadow-xl transition-all duration-300 text-lg px-8 py-3 font-semibold"
              >
                <Link to="/banho-tosa">Banho e Tosa</Link>
              </Button>
              <Button 
                asChild 
                size="lg" 
                className="bg-blue-500 hover:bg-blue-600 text-white border-2 border-blue-500 hover:border-blue-600 shadow-lg hover:shadow-xl transition-all duration-300 text-lg px-8 py-3 font-semibold"
              >
                <Link to="/contate-nos">Entrar em Contato</Link>
              </Button>
            </div>
          </div>
        </div>
        
        {/* Decorative paw prints */}
        <div className="absolute top-10 left-10 text-primary/20 animate-paw-bounce">
          <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 20 20">
            <path d="M10 12L8 10l-2 2 2 2 2-2zm0-4L8 6 6 8l2 2 2-2z"/>
          </svg>
        </div>
        <div className="absolute bottom-10 right-10 text-secondary/20 animate-paw-bounce" style={{animationDelay: '0.3s'}}>
          <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
            <path d="M10 12L8 10l-2 2 2 2 2-2zm0-4L8 6 6 8l2 2 2-2z"/>
          </svg>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-accent/30">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4 animate-slide-in">
            <span className="text-foreground">Nossos</span>{' '}
            <span className="text-primary">Serviços</span>
          </h2>
          <p className="text-xl text-muted-foreground text-center mb-16 animate-slide-in">
            Cuidados especializados para o seu pet
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Link to="/banho-tosa">
              <Card className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 hover:scale-105 overflow-hidden h-full animate-slide-in border-2 border-transparent hover:border-orange-400">
                <CardContent className="p-0">
                  <div className="aspect-video overflow-hidden">
                    <img 
                      src="/lovable-uploads/f75abd98-9e3a-4263-aa1a-56e8e2f07c4a.png" 
                      alt="Banho e Tosa"
                      className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6 bg-white group-hover:bg-gray-50 transition-all duration-300">
                    <h3 className="text-2xl font-bold mb-2 text-orange-700 group-hover:text-orange-800 transition-colors duration-300">
                      Banho e Tosa
                    </h3>
                    <p className="text-orange-600">Cuidados profissionais para deixar seu pet limpo e bonito</p>
                  </div>
                </CardContent>
              </Card>
            </Link>

            <Link to="/contate-nos">
              <Card className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 hover:scale-105 overflow-hidden h-full animate-slide-in border-2 border-transparent hover:border-blue-400">
                <CardContent className="p-0">
                  <div className="aspect-video overflow-hidden">
                    <img 
                      src="/lovable-uploads/f8b9c434-2886-4d05-925c-a5fb433a2737.png" 
                      alt="Contato"
                      className="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6 bg-white group-hover:bg-gray-50 transition-all duration-300">
                    <h3 className="text-2xl font-bold mb-2 text-blue-700 group-hover:text-blue-800 transition-colors duration-300">
                      Entre em Contato
                    </h3>
                    <p className="text-blue-600">Tire suas dúvidas e agende serviços via WhatsApp</p>
                  </div>
                </CardContent>
              </Card>
            </Link>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-secondary/20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 animate-slide-in">
            <span className="text-foreground">Por que escolher o</span>{' '}
            <span className="text-secondary">Estilo de Bicho?</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="text-center p-6 hover:shadow-lg transition-all duration-500 hover:-translate-y-2 animate-slide-in group" 
                    style={{animationDelay: `${index * 0.1}s`}}>
                <CardContent className="pt-6">
                  <div className="flex justify-center mb-4 group-hover:animate-bounce-soft">
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-foreground">
                    {benefit.title}
                  </h3>
                  <p className="text-muted-foreground">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-secondary-foreground mb-6 animate-slide-in">
            Pronto para cuidar melhor do seu pet?
          </h2>
          <p className="text-xl text-secondary-foreground/80 mb-8 max-w-2xl mx-auto animate-slide-in">
            Entre em contato conosco via WhatsApp e descubra como podemos 
            ajudar a deixar seu pet de estimação ainda mais feliz!
          </p>
          <Button 
            asChild 
            size="lg" 
            className="bg-orange-500 text-white hover:bg-orange-600 text-lg px-8 py-3"
          >
            <a 
              href="https://wa.me/5535998759887?text=Olá! Gostaria de saber mais sobre os serviços do Estilo de Bicho."
              target="_blank"
              rel="noopener noreferrer"
            >
              Falar no WhatsApp
            </a>
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 bg-foreground text-background">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm">
            © 2025 Estilo de Bicho. Site desenvolvido por <span className="font-semibold">Daniel de Oliveira</span>.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
