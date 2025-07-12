import React from 'react';
import { MessageCircle, Clock, MapPin, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const ContatetNos = () => {
  const handleWhatsAppClick = () => {
    const message = "Olá! Gostaria de entrar em contato com o Estilo de Bicho.";
    const whatsappUrl = `https://wa.me/5535998759887?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleLocationClick = () => {
    window.open('https://www.google.com/maps/search/?api=1&query=Pet+Shop+Estilo+de+Bicho+Av.+Padre+Lourenço+da+Costa-Rodovia+Br-459,+2394+-+Nossa+Sra.+de+Fatima,+Itajubá+-+MG,+37502-507', '_blank');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-orange-500 py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Contate-nos
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto mb-8">
            Estamos aqui para ajudar você e seu pet! Entre em contato conosco 
            através do WhatsApp ou visite nossa loja física.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              
              {/* WhatsApp Contact */}
              <Card className="p-8 hover:shadow-lg transition-shadow">
                <CardContent className="p-0 text-center">
                  <div className="text-green-500 mb-4">
                    <MessageCircle className="w-16 h-16 mx-auto" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-gray-800">
                    Fale Conosco no WhatsApp
                  </h3>
                  <p className="text-gray-600 mb-6">
                    Tire suas dúvidas, faça pedidos ou agende serviços 
                    diretamente pelo WhatsApp. Respondemos rapidamente!
                  </p>
                  <Button 
                    onClick={handleWhatsAppClick}
                    size="lg" 
                    className="bg-green-500 text-white hover:bg-green-600 text-lg px-8 py-3"
                  >
                    <MessageCircle className="w-5 h-5 mr-2" />
                    Conversar no WhatsApp
                  </Button>
                </CardContent>
              </Card>

              {/* Business Hours */}
              <Card className="p-8 hover:shadow-lg transition-shadow">
                <CardContent className="p-0 text-center">
                  <div className="text-blue-500 mb-4">
                    <Clock className="w-16 h-16 mx-auto" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-gray-800">
                    Horário de Funcionamento
                  </h3>
                  <div className="space-y-4 text-left">
                    <div>
                      <p className="font-semibold text-gray-800 mb-2">Loja Física</p>
                      <p className="text-gray-600">Segunda a Sábado: 8:00 - 20:00</p>
                      <p className="text-gray-600">Domingo: 8:00 - 12:00</p>
                    </div>
                    <div className="pt-4 border-t border-gray-200">
                      <p className="font-semibold text-gray-800 mb-2">Delivery</p>
                      <p className="text-gray-600">Segunda a Sábado: 8:30 - 19:00</p>
                      <p className="text-gray-600 text-sm mt-2">
                        *Não fazemos entregas aos domingos
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

            </div>
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8 text-gray-800">
              Nossa Localização
            </h2>
            
            <Card className="p-8 cursor-pointer hover:shadow-lg transition-shadow" 
                  onClick={handleLocationClick}>
              <CardContent className="p-0">
                <div className="text-orange-500 mb-4">
                  <MapPin className="w-12 h-12 mx-auto" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-gray-800">
                  Estilo de Bicho Pet Shop
                </h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Avenida Padre Lourenço da Costa, 2394<br />
                  Nossa Senhora de Fátima<br />
                  Itajubá, MG - CEP: 37502-507
                </p>
                <Button 
                  variant="outline" 
                  className="border-orange-500 text-orange-500 hover:bg-orange-50"
                >
                  <MapPin className="w-4 h-4 mr-2" />
                  Ver no Google Maps
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Additional Contact Info */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8 text-gray-800">
              Outras Formas de Contato
            </h2>
            
            <div className="bg-blue-50 p-8 rounded-lg">
              <Phone className="w-10 h-10 text-blue-500 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-4 text-gray-800">
                Telefone
              </h3>
              <p className="text-gray-600 mb-4">
                Para emergências ou informações rápidas:
              </p>
              <p className="text-2xl font-bold text-blue-600">
                (35) 99875-9887
              </p>
              <p className="text-sm text-gray-500 mt-2">
                Preferimos o WhatsApp para melhor atendimento
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContatetNos;
