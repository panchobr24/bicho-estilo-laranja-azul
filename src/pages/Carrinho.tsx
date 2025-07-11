
import React from 'react';
import { Minus, Plus, Trash2, ShoppingBag } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { useCart } from '@/contexts/CartContext';
import { toast } from '@/hooks/use-toast';
import { Link } from 'react-router-dom';
import { Form, FormItem, FormLabel, FormControl, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { useForm } from 'react-hook-form';

const Carrinho = () => {
  const { items, removeItem, updateQuantity, clearCart, getTotalPrice } = useCart();
  const [paymentType, setPaymentType] = React.useState('');
  const [needsChange, setNeedsChange] = React.useState(false);
  const form = useForm({
    defaultValues: {
      address: '',
      payment: '',
      changeFor: '',
    },
  });

  const handleFinalizePurchase = (data) => {
    if (items.length === 0) {
      toast({
        title: "Carrinho vazio",
        description: "Adicione produtos ao carrinho antes de finalizar.",
        variant: "destructive",
      });
      return;
    }

    const total = getTotalPrice();
    const itemsList = items.map(item => 
      `• ${item.name} (${item.quantity}x) - R$ ${(item.price * item.quantity).toFixed(2).replace('.', ',')}`
    ).join('\n');

    let paymentMsg = `Forma de pagamento: ${data.payment}`;
    if (data.payment === 'dinheiro') {
      paymentMsg += data.changeFor ? ` (troco para R$ ${data.changeFor})` : ' (sem troco)';
    }

    const message = `*Pedido - Estilo de Bicho*\n\n*Produtos:*\n${itemsList}\n\n*Total: R$ ${total.toFixed(2).replace('.', ',')}*\n\nEndereço: ${data.address}\n${paymentMsg}\n\nGostaria de finalizar este pedido. Obrigado!`;
    
    const whatsappUrl = `https://wa.me/5535998759887?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
    
    toast({
      title: "Redirecionando para WhatsApp",
      description: "Você será redirecionado para finalizar seu pedido.",
    });
  };

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <ShoppingBag className="h-24 w-24 text-gray-400 mx-auto mb-8" />
            <h1 className="text-3xl font-bold text-gray-800 mb-4">
              Seu carrinho está vazio
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Que tal adicionar alguns produtos incríveis para seu pet?
            </p>
            <Button asChild size="lg" className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700">
              <Link to="/racoes">Ver Produtos</Link>
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-center mb-12">
            <span className="text-gray-800">Seu</span>{' '}
            <span className="text-orange-500">Carrinho</span>
          </h1>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Items List */}
            <div className="lg:col-span-2 space-y-4">
              {items.map((item) => (
                <Card key={item.id} className="overflow-hidden">
                  <CardContent className="p-0">
                    <div className="flex flex-col sm:flex-row items-center sm:items-start p-4 gap-4">
                      <img 
                        src={item.image} 
                        alt={item.name}
                        className="w-20 h-20 object-cover rounded-lg mb-2 sm:mb-0"
                      />
                      <div className="flex-1 w-full">
                        <h3 className="font-bold text-lg text-gray-800 text-center sm:text-left">
                          {item.name}
                        </h3>
                        <p className="text-orange-500 font-bold text-center sm:text-left">
                          R$ {item.price.toFixed(2).replace('.', ',')}
                        </p>
                        <div className="flex items-center justify-center sm:justify-start space-x-2 mt-2">
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          >
                            <Minus className="h-4 w-4" />
                          </Button>
                          <span className="w-8 text-center font-bold">
                            {item.quantity}
                          </span>
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          >
                            <Plus className="h-4 w-4" />
                          </Button>
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => removeItem(item.id)}
                            className="text-red-500 hover:text-red-700 ml-2"
                          >
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Summary */}
            <div className="lg:col-span-1">
              <Card className="sticky top-24">
                <CardContent className="p-6">
                  <h2 className="text-2xl font-bold mb-6 text-gray-800">
                    Resumo do Pedido
                  </h2>
                  {/* Formulário de endereço e pagamento */}
                  <Form {...form}>
                    <form onSubmit={form.handleSubmit(handleFinalizePurchase)} className="space-y-4 mb-6">
                      <FormItem>
                        <FormLabel>Endereço de entrega</FormLabel>
                        <FormControl>
                          <Input placeholder="Rua, número, bairro, cidade" {...form.register('address', { required: true })} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                      <FormItem>
                        <FormLabel>Forma de pagamento</FormLabel>
                        <FormControl>
                          <select
                            className="w-full border rounded-md px-3 py-2"
                            {...form.register('payment', { required: true })}
                            onChange={e => {
                              form.setValue('payment', e.target.value);
                              setPaymentType(e.target.value);
                              setNeedsChange(e.target.value === 'dinheiro');
                            }}
                          >
                            <option value="">Selecione</option>
                            <option value="credito">Cartão de Crédito</option>
                            <option value="debito">Cartão de Débito</option>
                            <option value="pix">Pix</option>
                            <option value="dinheiro">Dinheiro</option>
                          </select>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                      {paymentType === 'dinheiro' && (
                        <FormItem>
                          <FormLabel>Troco para quanto?</FormLabel>
                          <FormControl>
                            <Input placeholder="Ex: 50,00" {...form.register('changeFor')} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                      <Button 
                        type="submit"
                        className="w-full bg-orange-500 text-white hover:bg-orange-600 text-lg py-3 hover:animate-success-pulse transition-all"
                        disabled={!form.watch('address') || !form.watch('payment') || (paymentType === 'dinheiro' && !form.watch('changeFor'))}
                      >
                        Finalizar Compra
                      </Button>
                    </form>
                  </Form>
                  <Button 
                    variant="outline"
                    onClick={clearCart}
                    className="w-full border-red-500 text-red-500 hover:bg-red-50"
                  >
                    Limpar Carrinho
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carrinho;
