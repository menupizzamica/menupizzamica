import React, { useState } from 'react';
import { ShoppingCart, X, MessageCircle, Zap, ChevronDown } from 'lucide-react';

export default function PizzamicaMejorada() {
  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);
  const [selectedPizza, setSelectedPizza] = useState('pepperoni');
  const [selectedWaffle, setSelectedWaffle] = useState('bananamica');
  const [waffleSize, setWaffleSize] = useState('entero');
  const [direccion, setDireccion] = useState('');
  const [nombre, setNombre] = useState('');
  const [horario, setHorario] = useState('para-ahora');

  const pizzas = [
    { id: 'margarita', name: 'Margarita', emoji: '🧀' },
    { id: 'pepperoni', name: 'Pepperoni', emoji: '🌶️' },
    { id: 'napolitana', name: 'Napolitana', emoji: '🍅' },
    { id: 'jamon', name: 'Jamón', emoji: '🍖' },
    { id: 'italiana', name: 'Italiana', emoji: '🌿' },
  ];

  const waffles = [
    {
      id: 'bananamica',
      name: 'BANANAMICA',
      emoji: '🍌',
      desc: 'Crema chantilly + plátano + salsa de manjar + salsa de chocolate + mostacillas',
    },
    {
      id: 'chocomica',
      name: 'CHOCOMICA',
      emoji: '🍫',
      desc: 'Crema chantilly + chocolate blanco + cubitos + mostacillas + salsa de chocolate',
    },
    {
      id: 'cookiemica',
      name: 'COOKIEMICA',
      emoji: '🍪',
      desc: 'Crema chantilly + oreo triturado + salsa de chocolate',
    },
    {
      id: 'candymica',
      name: 'CANDYMICA',
      emoji: '🍬',
      desc: 'Crema chantilly + kukis + salsa de caramelo + mostacillas de colores',
    },
    {
      id: 'berrymica',
      name: 'BERRYMICA',
      emoji: '🫐',
      desc: 'Crema chantilly rosada + merenguitos + salsa de frambuesa + mostacillas',
    },
  ];

  const promoPrice = 19990;
  const pizzaPrice = 10990;
  const waffleEntero = 4990;
  const waffleMitad = 2990;
  const donaPrice = 1500;
  const drinkPrice = 2500;
  const deliveryPrice = 2000;

  const addToCart = (item) => {
    setCart([...cart, { ...item, id: `${item.type}-${Date.now()}` }]);
  };

  const removeFromCart = (id) => {
    setCart(cart.filter(item => item.id !== id));
  };

  const calculateTotal = () => {
    return cart.reduce((sum, item) => sum + item.price, 0);
  };

  const generateWhatsappMessage = () => {
    let message = '🍕 ¡Hola! Quiero hacer un pedido de PIZZAMICA 🍕\n\n';
    message += `👤 NOMBRE: ${nombre || '(No especificado)'}\n`;
    if (horario === 'para-ahora') {
      message += `⏰ HORARIO: Para ahora\n\n`;
    } else if (horario === 'especifico') {
      message += `⏰ HORARIO: (Confirmar por chat)\n\n`;
    } else {
      message += `⏰ HORARIO: Mañana o después\n\n`;
    }
    message += `${'='.repeat(20)}\n`;
    message += `PRODUCTOS:\n`;
    message += `${'='.repeat(20)}\n\n`;
    cart.forEach((item) => {
      if (item.type === 'promo') {
        message += `📦 PROMO: 2 Pizzas Familiares (${item.pizza1} + ${item.pizza2}) + Bebida 1.5L\n`;
        message += `   $${item.price.toLocaleString('es-CL')}\n\n`;
      } else if (item.type === 'pizza') {
        message += `🍕 Pizza ${item.name} Familiar\n`;
        message += `   $${item.price.toLocaleString('es-CL')}\n\n`;
      } else if (item.type === 'waffle') {
        message += `🧇 ${item.name} (${item.size})\n`;
        message += `   $${item.price.toLocaleString('es-CL')}\n\n`;
      } else if (item.type === 'delivery') {
        message += `🚗 ${item.name}\n`;
        message += `📍 Dirección: ${direccion || '(A confirmar)'}\n`;
        message += `   $${item.price.toLocaleString('es-CL')}\n\n`;
      } else if (item.type === 'retiro') {
        message += `🏪 ${item.name}\n`;
        message += `   $${item.price.toLocaleString('es-CL')}\n\n`;
      } else {
        message += `${item.emoji} ${item.name}\n`;
        message += `   $${item.price.toLocaleString('es-CL')}\n\n`;
      }
    });
    message += `${'='.repeat(20)}\n`;
    message += `💰 TOTAL: $${calculateTotal().toLocaleString('es-CL')}\n`;
    message += `${'='.repeat(20)}\n\n`;
    message += `✨ ¡Gracias por tu pedido! ✨`;
    return encodeURIComponent(message);
  };

  const whatsappNumber = '56950249329';
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${generateWhatsappMessage()}`;

  return (
    <div className="min-h-screen bg-black text-white font-sans overflow-x-hidden">
      <style>{`
        .glow-text {
          text-shadow: 0 0 20px rgba(34, 197, 94, 0.8), 0 0 40px rgba(34, 197, 94, 0.6);
        }
        .glow-btn {
          background: linear-gradient(135deg, #22c55e, #16a34a);
          box-shadow: 0 0 30px rgba(34, 197, 94, 0.6), 0 0 60px rgba(34, 197, 94, 0.4);
          transition: all 0.3s ease;
        }
        .glow-btn:hover {
          transform: scale(1.05);
          box-shadow: 0 0 50px rgba(34, 197, 94, 0.8), 0 0 80px rgba(34, 197, 94, 0.6);
        }
        .glow-btn-red {
          background: linear-gradient(135deg, #dc2626, #991b1b);
          box-shadow: 0 0 30px rgba(220, 38, 38, 0.6), 0 0 60px rgba(220, 38, 38, 0.4);
          transition: all 0.3s ease;
        }
        .glow-btn-red:hover {
          transform: scale(1.05);
          box-shadow: 0 0 50px rgba(220, 38, 38, 0.8), 0 0 80px rgba(220, 38, 38, 0.6);
        }
        .gradient-border {
          background: linear-gradient(135deg, #22c55e, #16a34a);
          padding: 2px;
          border-radius: 16px;
        }
        .gradient-border-red {
          background: linear-gradient(135deg, #dc2626, #991b1b);
          padding: 2px;
          border-radius: 16px;
        }
        .card-gradient {
          background: linear-gradient(135deg, rgba(34, 197, 94, 0.15), rgba(34, 197, 94, 0.1));
          border: 1px solid rgba(34, 197, 94, 0.3);
        }
        .card-gradient-red {
          background: linear-gradient(135deg, rgba(220, 38, 38, 0.15), rgba(220, 38, 38, 0.1));
          border: 1px solid rgba(220, 38, 38, 0.3);
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
        }
        .float-animation {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>

      {/* HERO SECTION */}
      <section className="relative py-16 px-4 overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-green-500 rounded-full blur-3xl opacity-20"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-red-500 rounded-full blur-3xl opacity-20"></div>
        </div>
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <h1 className="text-6xl md:text-7xl font-black mb-4 glow-text uppercase">PIZZAMICA</h1>
          <p className="text-lg text-white mb-8 max-w-2xl mx-auto">🍕 Estilo Napolitano • Masa Delgada • 100% Artesanal</p>
          <div className="gradient-border-red mb-8 max-w-md mx-auto">
            <div className="card-gradient-red p-8 rounded-2xl bg-black">
              <p className="text-5xl font-black text-white mb-4">$19.990</p>
              <p className="text-2xl font-bold text-red-400 mb-2">PROMO IMPERDIBLE</p>
              <p className="text-white font-semibold">2 Pizzas + Bebida 1.5L</p>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a href="#menu" className="glow-btn px-6 py-3 text-lg font-bold rounded-lg text-white cursor-pointer inline-flex items-center gap-2 justify-center">
              <Zap size={24} /> Ver Menú
            </a>
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="glow-btn-red px-6 py-3 text-lg font-bold rounded-lg text-white cursor-pointer inline-flex items-center gap-2 justify-center">
              <MessageCircle size={24} /> Pedir Ahora
            </a>
          </div>
        </div>
      </section>

      {/* SECCIÓN MENÚ (Simplificada para ejemplo) */}
      <section id="menu" className="py-12 px-4 bg-black">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-black text-center mb-8 glow-text">NUESTRAS PIZZAS</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {pizzas.map((pizza) => (
              <div key={pizza.id} className="card-gradient p-6 rounded-xl text-center">
                <span className="text-4xl block mb-2">{pizza.emoji}</span>
                <h3 className="font-bold mb-4">{pizza.name}</h3>
                <button 
                  onClick={() => addToCart({ type: 'pizza', name: pizza.name, emoji: pizza.emoji, price: pizzaPrice })}
                  className="bg-green-600 px-4 py-2 rounded-lg text-sm font-bold w-full"
                >
                  Agregar
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CARRITO FLOTANTE */}
      <div className="fixed bottom-6 right-6 z-50">
        <button onClick={() => setShowCart(!showCart)} className="glow-btn p-4 rounded-full text-white relative">
          <ShoppingCart size={28} />
          {cart.length > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-600 text-xs font-bold px-2 py-1 rounded-full">{cart.length}</span>
          )}
        </button>
      </div>

      {/* MODAL CARRITO (Muy básico) */}
      {showCart && (
        <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4">
          <div className="bg-zinc-900 p-8 rounded-2xl w-full max-w-md border border-green-500">
            <div className="flex justify-between mb-4">
              <h3 className="text-2xl font-bold">Tu Pedido</h3>
              <button onClick={() => setShowCart(false)}><X /></button>
            </div>
            <div className="space-y-4 mb-6 max-h-60 overflow-y-auto">
              {cart.map(item => (
                <div key={item.id} className="flex justify-between border-b border-zinc-800 pb-2">
                  <span>{item.emoji} {item.name}</span>
                  <span>${item.price.toLocaleString('es-CL')}</span>
                </div>
              ))}
            </div>
            <div className="flex justify-between text-xl font-bold mb-6">
              <span>Total:</span>
              <span className="text-green-400">${calculateTotal().toLocaleString('es-CL')}</span>
            </div>
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="glow-btn-red w-full py-4 rounded-xl font-bold flex justify-center gap-2">
              <MessageCircle /> Enviar a WhatsApp
            </a>
          </div>
        </div>
      )}
    </div>
  );
}
