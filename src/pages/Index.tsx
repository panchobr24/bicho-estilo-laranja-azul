
import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, Shield, Truck, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const Index = () => {
  const categories = [
    {
      name: 'Rações',
      path: '/racoes',
      image: 'https://images.unsplash.com/photo-1589924691995-400dc9ecc119?w=400',
      description: 'Alimentação completa e balanceada'
    },
    {
      name: 'Petiscos',
      path: '/petiscos',
      image: 'https://images.unsplash.com/photo-1605568427561-40dd23c2acea?w=400',
      description: 'Sabores irresistíveis para seu pet'
    },
    {
      name: 'Brinquedos',
      path: '/brinquedos',
      image: 'https://images.unsplash.com/photo-1608344989906-9668d4c56ba9?w=400',
      description: 'Diversão garantida para todas as idades'
    },
    {
      name: 'Medicamentos',
      path: '/medicamentos',
      image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400',
      description: 'Cuidados veterinários essenciais'
    }
  ];

  const benefits = [
    {
      icon: <Heart className="h-8 w-8 text-orange-500" />,
      title: 'Amor pelos Animais',
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
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-orange-50 to-blue-50 py-20 wavy-border">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="text-orange-500">Estilo</span>{' '}
              <span className="text-blue-500">de Bicho</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 mb-8 leading-relaxed">
              Tudo o que seu pet precisa em um só lugar! Produtos de qualidade, 
              preços justos e muito carinho por cada animal.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                asChild 
                size="lg" 
                className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-lg px-8 py-3"
              >
                <Link to="/racoes">Ver Produtos</Link>
              </Button>
              <Button 
                asChild 
                variant="outline" 
                size="lg" 
                className="border-blue-500 text-blue-500 hover:bg-blue-50 text-lg px-8 py-3"
              >
                <Link to="/banho-tosa">Banho e Tosa</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4">
            <span className="text-gray-800">Nossas</span>{' '}
            <span className="text-orange-500">Categorias</span>
          </h2>
          <p className="text-xl text-gray-600 text-center mb-16">
            Descubra nossa seleção completa de produtos para seu pet
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {categories.map((category) => (
              <Link key={category.path} to={category.path}>
                <Card className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 overflow-hidden h-full">
                  <CardContent className="p-0">
                    <div className="aspect-square overflow-hidden">
                      <img 
                        src={category.image} 
                        alt={category.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-2xl font-bold mb-2 text-gray-800 group-hover:text-blue-600 transition-colors">
                        {category.name}
                      </h3>
                      <p className="text-gray-600">{category.description}</p>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 gradient-bg">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">
            <span className="text-gray-800">Por que escolher o</span>{' '}
            <span className="text-blue-500">Estilo de Bicho?</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow duration-300">
                <CardContent className="pt-6">
                  <div className="flex justify-center mb-4">
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-gray-800">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-500 to-blue-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Pronto para cuidar melhor do seu pet?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Entre em contato conosco via WhatsApp e descubra como podemos 
            ajudar a deixar seu animal de estimação ainda mais feliz!
          </p>
          <Button 
            asChild 
            size="lg" 
            className="bg-white text-blue-600 hover:bg-gray-100 text-lg px-8 py-3"
          >
            <a 
              href="https://wa.me/5535998759887?text=Olá! Gostaria de saber mais sobre os produtos do Estilo de Bicho."
              target="_blank"
              rel="noopener noreferrer"
            >
              Falar no WhatsApp
            </a>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Index;
