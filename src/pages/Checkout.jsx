import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, MapPin, CreditCard, Smartphone, Loader2 } from 'lucide-react';
import { useCart } from '../contexts/CartContext';
import { cepService } from '../services/cepService';

const Checkout = () => {
  const { items, getCartTotal } = useCart();
  const [currentStep, setCurrentStep] = useState(1);
  const [loading, setLoading] = useState(false);
  
  // Estados do formulário
  const [customerData, setCustomerData] = useState({
    name: '',
    email: '',
    phone: '',
    document: ''
  });

  const [addressData, setAddressData] = useState({
    cep: '',
    logradouro: '',
    numero: '',
    complemento: '',
    bairro: '',
    localidade: '',
    uf: '',
    estado: ''
  });

  const [deliveryOption, setDeliveryOption] = useState('delivery'); // 'delivery' ou 'pickup'
  const [paymentMethod, setPaymentMethod] = useState('pix'); // 'pix' ou 'card'

  const formatPrice = (price) => {
    return `R$ ${price.toFixed(2).replace('.', ',')}`;
  };

  const handleCepChange = async (e) => {
    const cep = e.target.value;
    setAddressData(prev => ({ ...prev, cep }));

    // Auto-busca quando CEP tem 8 dígitos
    if (cep.replace(/\D/g, '').length === 8) {
      setLoading(true);
      try {
        const result = await cepService.fetchAddressByCep(cep);
        
        if (result.success) {
          setAddressData(prev => ({
            ...prev,
            cep: result.data.cep,
            logradouro: result.data.logradouro,
            bairro: result.data.bairro,
            localidade: result.data.localidade,
            uf: result.data.uf,
            estado: result.data.estado
          }));
        } else {
          alert(`Erro ao buscar CEP: ${result.error}`);
        }
      } catch (error) {
        alert('Erro ao consultar CEP. Tente novamente.');
      } finally {
        setLoading(false);
      }
    }
  };

  const handleInputChange = (section, field, value) => {
    if (section === 'customer') {
      setCustomerData(prev => ({ ...prev, [field]: value }));
    } else if (section === 'address') {
      setAddressData(prev => ({ ...prev, [field]: value }));
    }
  };

  const validateStep = (step) => {
    switch (step) {
      case 1:
        return customerData.name && customerData.email && customerData.phone;
      case 2:
        if (deliveryOption === 'pickup') return true;
        return addressData.cep && addressData.logradouro && addressData.numero && 
               addressData.bairro && addressData.localidade && addressData.uf;
      case 3:
        return paymentMethod;
      default:
        return false;
    }
  };

  const nextStep = () => {
    if (validateStep(currentStep)) {
      setCurrentStep(prev => Math.min(prev + 1, 4));
    } else {
      alert('Por favor, preencha todos os campos obrigatórios.');
    }
  };

  const prevStep = () => {
    setCurrentStep(prev => Math.max(prev - 1, 1));
  };

  const generateWhatsAppMessage = () => {
    const total = getCartTotal();
    const itemsList = items.map(item => 
      `• ${item.name} - Qtd: ${item.quantity} - ${formatPrice(item.price * item.quantity)}`
    ).join('\n');

    const deliveryInfo = deliveryOption === 'delivery' 
      ? `📍 *Endereço de Entrega:*\n${addressData.logradouro}, ${addressData.numero}${addressData.complemento ? ` - ${addressData.complemento}` : ''}\n${addressData.bairro} - ${addressData.localidade}/${addressData.uf}\nCEP: ${addressData.cep}\n\n`
      : '📍 *Retirada:* Cliente irá retirar no local\n\n';

    const paymentInfo = paymentMethod === 'pix' ? '💳 *Pagamento:* PIX' : '💳 *Pagamento:* Cartão';

    return `🌸 *Pedido - Alice Zinsly* 🌸

👤 *Dados do Cliente:*
Nome: ${customerData.name}
Email: ${customerData.email}
Telefone: ${customerData.phone}
${customerData.document ? `Documento: ${customerData.document}` : ''}

🛍️ *Itens do Pedido:*
${itemsList}

💰 *Total: ${formatPrice(total)}*

${deliveryInfo}${paymentInfo}

Obrigada por escolher meus acessórios feitos com amor! 💕`;
  };

  const handleFinishOrder = () => {
    const message = generateWhatsAppMessage();
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/5511999999999?text=${encodedMessage}`;
    
    window.open(whatsappUrl, '_blank');
  };

  if (items.length === 0) {
    return (
      <main className="flex-grow container mx-auto p-4 md:p-8 pt-24 md:pt-32">
        <div className="text-center py-16">
          <h1 className="text-4xl font-bold text-text-dark mb-4">
            Carrinho vazio
          </h1>
          <p className="text-lg text-gray-600 mb-8">
            Adicione alguns itens ao carrinho antes de finalizar a compra.
          </p>
          <Link to="/acessorios" className="btn-floral-primary">
            Ver Acessórios
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="flex-grow container mx-auto p-4 md:p-8 pt-24 md:pt-32">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="flex items-center gap-4 mb-8">
          <Link to="/carrinho" className="text-text-dark hover:text-floral-green-text">
            <ArrowLeft size={24} />
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold text-text-dark">
            Finalizar Compra
          </h1>
        </div>

        {/* Progress Steps */}
        <div className="flex justify-between mb-8">
          {[1, 2, 3, 4].map((step) => (
            <div 
              key={step}
              className={`flex items-center ${step < 4 ? 'flex-1' : ''}`}
            >
              <div 
                className={`w-10 h-10 rounded-full flex items-center justify-center font-bold ${
                  currentStep >= step 
                    ? 'bg-floral-green text-text-dark' 
                    : 'bg-gray-300 text-gray-600'
                }`}
              >
                {step}
              </div>
              {step < 4 && (
                <div 
                  className={`flex-1 h-1 mx-2 ${
                    currentStep > step ? 'bg-floral-green' : 'bg-gray-300'
                  }`}
                />
              )}
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Formulário */}
          <div className="lg:col-span-2">
            {/* Etapa 1: Dados do Cliente */}
            {currentStep === 1 && (
              <div className="checkout-step active">
                <h2 className="text-2xl font-bold text-text-dark mb-6">
                  Dados do Cliente
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-text-dark font-medium mb-2">
                      Nome Completo *
                    </label>
                    <input
                      type="text"
                      value={customerData.name}
                      onChange={(e) => handleInputChange('customer', 'name', e.target.value)}
                      className="form-input w-full"
                      placeholder="Seu nome completo"
                    />
                  </div>
                  <div>
                    <label className="block text-text-dark font-medium mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      value={customerData.email}
                      onChange={(e) => handleInputChange('customer', 'email', e.target.value)}
                      className="form-input w-full"
                      placeholder="seu@email.com"
                    />
                  </div>
                  <div>
                    <label className="block text-text-dark font-medium mb-2">
                      Telefone *
                    </label>
                    <input
                      type="tel"
                      value={customerData.phone}
                      onChange={(e) => handleInputChange('customer', 'phone', e.target.value)}
                      className="form-input w-full"
                      placeholder="(11) 99999-9999"
                    />
                  </div>
                  <div>
                    <label className="block text-text-dark font-medium mb-2">
                      CPF/CNPJ
                    </label>
                    <input
                      type="text"
                      value={customerData.document}
                      onChange={(e) => handleInputChange('customer', 'document', e.target.value)}
                      className="form-input w-full"
                      placeholder="000.000.000-00"
                    />
                  </div>
                </div>
              </div>
            )}

            {/* Etapa 2: Endereço de Entrega */}
            {currentStep === 2 && (
              <div className="checkout-step active">
                <h2 className="text-2xl font-bold text-text-dark mb-6">
                  Entrega
                </h2>
                
                {/* Opções de entrega */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  <label className="flex items-center p-4 border-2 rounded-lg cursor-pointer hover:bg-gray-50">
                    <input
                      type="radio"
                      name="delivery"
                      value="delivery"
                      checked={deliveryOption === 'delivery'}
                      onChange={(e) => setDeliveryOption(e.target.value)}
                      className="mr-3"
                    />
                    <MapPin size={20} className="mr-2" />
                    <span>Entrega em casa</span>
                  </label>
                  <label className="flex items-center p-4 border-2 rounded-lg cursor-pointer hover:bg-gray-50">
                    <input
                      type="radio"
                      name="delivery"
                      value="pickup"
                      checked={deliveryOption === 'pickup'}
                      onChange={(e) => setDeliveryOption(e.target.value)}
                      className="mr-3"
                    />
                    <span>Retirar no local</span>
                  </label>
                </div>

                {/* Formulário de endereço */}
                {deliveryOption === 'delivery' && (
                  <div className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div>
                        <label className="block text-text-dark font-medium mb-2">
                          CEP *
                        </label>
                        <div className="relative">
                          <input
                            type="text"
                            value={addressData.cep}
                            onChange={handleCepChange}
                            className="form-input w-full"
                            placeholder="00000-000"
                            maxLength="9"
                          />
                          {loading && (
                            <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                              <Loader2 size={20} className="animate-spin text-floral-green" />
                            </div>
                          )}
                        </div>
                      </div>
                      <div className="md:col-span-2">
                        <label className="block text-text-dark font-medium mb-2">
                          Logradouro *
                        </label>
                        <input
                          type="text"
                          value={addressData.logradouro}
                          onChange={(e) => handleInputChange('address', 'logradouro', e.target.value)}
                          className="form-input w-full"
                          placeholder="Nome da rua"
                        />
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div>
                        <label className="block text-text-dark font-medium mb-2">
                          Número *
                        </label>
                        <input
                          type="text"
                          value={addressData.numero}
                          onChange={(e) => handleInputChange('address', 'numero', e.target.value)}
                          className="form-input w-full"
                          placeholder="123"
                        />
                      </div>
                      <div className="md:col-span-2">
                        <label className="block text-text-dark font-medium mb-2">
                          Complemento
                        </label>
                        <input
                          type="text"
                          value={addressData.complemento}
                          onChange={(e) => handleInputChange('address', 'complemento', e.target.value)}
                          className="form-input w-full"
                          placeholder="Apto, bloco, etc."
                        />
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div>
                        <label className="block text-text-dark font-medium mb-2">
                          Bairro *
                        </label>
                        <input
                          type="text"
                          value={addressData.bairro}
                          onChange={(e) => handleInputChange('address', 'bairro', e.target.value)}
                          className="form-input w-full"
                          placeholder="Nome do bairro"
                        />
                      </div>
                      <div>
                        <label className="block text-text-dark font-medium mb-2">
                          Cidade *
                        </label>
                        <input
                          type="text"
                          value={addressData.localidade}
                          onChange={(e) => handleInputChange('address', 'localidade', e.target.value)}
                          className="form-input w-full"
                          placeholder="Nome da cidade"
                        />
                      </div>
                      <div>
                        <label className="block text-text-dark font-medium mb-2">
                          UF *
                        </label>
                        <input
                          type="text"
                          value={addressData.uf}
                          onChange={(e) => handleInputChange('address', 'uf', e.target.value)}
                          className="form-input w-full"
                          placeholder="SP"
                          maxLength="2"
                        />
                      </div>
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* Etapa 3: Pagamento */}
            {currentStep === 3 && (
              <div className="checkout-step active">
                <h2 className="text-2xl font-bold text-text-dark mb-6">
                  Forma de Pagamento
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <label className="flex items-center p-4 border-2 rounded-lg cursor-pointer hover:bg-gray-50">
                    <input
                      type="radio"
                      name="payment"
                      value="pix"
                      checked={paymentMethod === 'pix'}
                      onChange={(e) => setPaymentMethod(e.target.value)}
                      className="mr-3"
                    />
                    <Smartphone size={20} className="mr-2" />
                    <span>PIX</span>
                  </label>
                  <label className="flex items-center p-4 border-2 rounded-lg cursor-pointer hover:bg-gray-50">
                    <input
                      type="radio"
                      name="payment"
                      value="card"
                      checked={paymentMethod === 'card'}
                      onChange={(e) => setPaymentMethod(e.target.value)}
                      className="mr-3"
                    />
                    <CreditCard size={20} className="mr-2" />
                    <span>Cartão</span>
                  </label>
                </div>
              </div>
            )}

            {/* Etapa 4: Confirmação */}
            {currentStep === 4 && (
              <div className="checkout-step active">
                <h2 className="text-2xl font-bold text-text-dark mb-6">
                  Confirmar Pedido
                </h2>
                <div className="bg-floral-lavender p-6 rounded-lg">
                  <p className="text-lg text-text-dark mb-4">
                    Seu pedido será enviado via WhatsApp para finalização.
                  </p>
                  <p className="text-text-dark">
                    Você será redirecionado para o WhatsApp com todas as informações do pedido.
                    A Alice entrará em contato para confirmar os detalhes e o pagamento.
                  </p>
                </div>
              </div>
            )}

            {/* Botões de navegação */}
            <div className="flex justify-between mt-8">
              {currentStep > 1 && (
                <button onClick={prevStep} className="btn-floral-secondary">
                  Voltar
                </button>
              )}
              <div className="ml-auto">
                {currentStep < 4 ? (
                  <button onClick={nextStep} className="btn-floral-primary">
                    Continuar
                  </button>
                ) : (
                  <button onClick={handleFinishOrder} className="btn-floral-primary">
                    Finalizar via WhatsApp
                  </button>
                )}
              </div>
            </div>
          </div>

          {/* Resumo do pedido */}
          <div className="lg:col-span-1">
            <div className="bg-floral-lavender rounded-xl shadow-md p-6 border border-floral-pink sticky top-32">
              <h2 className="text-2xl font-bold text-text-dark mb-6">Resumo do Pedido</h2>
              
              <div className="space-y-3 mb-6">
                {items.map((item) => (
                  <div key={item.id} className="flex justify-between text-sm">
                    <span>{item.name} x{item.quantity}</span>
                    <span>{formatPrice(item.price * item.quantity)}</span>
                  </div>
                ))}
              </div>

              <hr className="border-gray-300 mb-4" />
              
              <div className="space-y-3 mb-6">
                <div className="flex justify-between">
                  <span className="text-gray-600">Subtotal:</span>
                  <span className="font-semibold">{formatPrice(getCartTotal())}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Frete:</span>
                  <span className="font-semibold">A combinar</span>
                </div>
                <hr className="border-gray-300" />
                <div className="flex justify-between text-lg font-bold">
                  <span>Total:</span>
                  <span>{formatPrice(getCartTotal())}</span>
                </div>
              </div>

              <div className="p-4 bg-white rounded-lg border border-floral-pink">
                <h3 className="font-semibold text-text-dark mb-2">
                  <i className="fas fa-heart text-floral-pink mr-2"></i>
                  Feito com Amor
                </h3>
                <p className="text-sm text-gray-600">
                  Cada acessório é criado com muito carinho pela Alice. 
                  Obrigada por apoiar meu cantinho criativo!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Checkout;

