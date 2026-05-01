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
    
    message += `${'='*30}\n`;
    message += `PRODUCTOS:\n`;
    message += `${'='*30}\n\n`;
    
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
        if (direccion.trim()) {
          message += `📍 Dirección: ${direccion}\n`;
        } else {
          message += `📍 Dirección: (A confirmar)\n`;
        }
        message += `   $${item.price.toLocaleString('es-CL')}\n\n`;
      } else if (item.type === 'retiro') {
        message += `🏪 ${item.name}\n`;
        message += `   $${item.price.toLocaleString('es-CL')}\n\n`;
      } else {
        message += `${item.emoji} ${item.name}\n`;
        message += `   $${item.price.toLocaleString('es-CL')}\n\n`;
      }
    });

    message += `${'='*30}\n`;
    message += `💰 TOTAL: $${calculateTotal().toLocaleString('es-CL')}\n`;
    message += `${'='*30}\n\n`;
    message += `✨ ¡Gracias por tu pedido! ✨`;

    return encodeURIComponent(message);
  };

  const whatsappNumber = '56950249329';
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${generateWhatsappMessage()}`;

  return (
    <div className="min-h-screen bg-black text-white font-sans overflow-x-hidden">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@700;800;900&family=Inter:wght@400;600&display=swap');
        
        * {
          font-family: 'Poppins', sans-serif;
        }

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

        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .float-animation {
          animation: float 3s ease-in-out infinite;
        }

        .slide-in {
          animation: slideIn 0.8s ease-out forwards;
        }

        .stagger-1 { animation-delay: 0.1s; }
        .stagger-2 { animation-delay: 0.2s; }
        .stagger-3 { animation-delay: 0.3s; }
        .stagger-4 { animation-delay: 0.4s; }
      `}</style>

      {/* HERO SECTION */}
      <section className="relative py-16 px-4 overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-green-500 rounded-full blur-3xl opacity-20"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-red-500 rounded-full blur-3xl opacity-20"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          {/* LOGO */}
          <div className="mb-6">
            <img src="data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Crect fill='%2316a34a' width='200' height='200'/%3E%3Ctext x='50' y='80' font-size='48' font-weight='900' fill='white' font-family='Arial'%3EPIZZA%3C/text%3E%3Ctext x='50' y='140' font-size='48' font-weight='900' fill='white' font-family='Arial'%3EMICA%3C/text%3E%3C/svg%3E" alt="PIZZAMICA" className="h-32 mx-auto mb-4" />
          </div>

          <h1 className="text-6xl md:text-7xl font-black mb-4 glow-text uppercase">
            PIZZAMICA
          </h1>

          <p className="text-lg text-white mb-8 max-w-2xl mx-auto">
            🍕 Estilo Napolitano • Masa Delgada • 100% Artesanal
          </p>

          {/* PROMO PRINCIPAL */}
          <div className="gradient-border-red mb-8 max-w-md mx-auto">
            <div className="card-gradient-red p-8 rounded-2xl bg-black">
              <p className="text-5xl font-black text-white mb-4">$19.990</p>
              <p className="text-2xl font-bold text-red-400 mb-2">PROMO IMPERDIBLE</p>
              <p className="text-white font-semibold">2 Pizzas + Bebida 1.5L</p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="#menu"
              className="glow-btn px-6 py-3 text-lg font-bold rounded-lg text-white cursor-pointer inline-flex items-center gap-2 justify-center"
            >
              <Zap size={24} />
              Ver Menú
            </a>
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="glow-btn-red px-6 py-3 text-lg font-bold rounded-lg text-white cursor-pointer inline-flex items-center gap-2 justify-center"
            >
              <MessageCircle size={24} />
              Pedir Ahora
            </a>
          </div>
        </div>
      </section>

      {/* CARRITO FLOTANTE */}
      <div className="fixed bottom-6 right-6 z-50">
        <button
          onClick={() => setShowCart(!showCart)}
          className="glow-btn p-4 rounded-full text-white font-bold flex items-center gap-2 relative"
        >
          <ShoppingCart size={28} />
          {cart.length > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs font-bold px-2 py-1 rounded-full">
              {cart.length}
            </span>
          )}
        </button>
      </div>

      {/* MODAL CARRITO */}
      {showCart && (
        <div className="fixed inset-0 bg-black bg-opacity-75 z-40 flex items-end sm:items-center justify-center p-4">
          <div className="card-gradient rounded-t-3xl sm:rounded-3xl w-full sm:max-w-md p-8 max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-2xl font-bold">Tu Carrito</h3>
              <button onClick={() => setShowCart(false)} className="text-gray-400 hover:text-white">
                <X size={28} />
              </button>
            </div>

            {cart.length === 0 ? (
              <p className="text-white text-center py-8">Tu carrito está vacío 🛒</p>
            ) : (
              <>
                {/* DATOS DEL CLIENTE */}
                <div className="bg-green-500 bg-opacity-20 border-l-4 border-green-400 p-4 rounded-lg mb-6">
                  <h4 className="text-white font-bold mb-4">📋 TUS DATOS</h4>
                  
                  <div className="mb-4">
                    <label className="text-white text-sm font-bold block mb-2">
                      👤 ¿Cuál es tu nombre?
                    </label>
                    <input
                      type="text"
                      value={nombre}
                      onChange={(e) => setNombre(e.target.value)}
                      placeholder="Tu nombre"
                      className="w-full bg-black border-2 border-green-400 text-white p-2 rounded text-sm placeholder-gray-500 focus:outline-none focus:border-green-300"
                    />
                  </div>

                  <div>
                    <label className="text-white text-sm font-bold block mb-2">
                      ⏰ ¿Cuándo lo quieres?
                    </label>
                    <div className="space-y-2">
                      <label className="flex items-center gap-2 cursor-pointer">
                        <input
                          type="radio"
                          name="horario"
                          value="para-ahora"
                          checked={horario === 'para-ahora'}
                          onChange={(e) => setHorario(e.target.value)}
                          className="w-4 h-4"
                        />
                        <span className="text-white text-sm">Para ahora (ASAP)</span>
                      </label>
                      <label className="flex items-center gap-2 cursor-pointer">
                        <input
                          type="radio"
                          name="horario"
                          value="especifico"
                          checked={horario === 'especifico'}
                          onChange={(e) => setHorario(e.target.value)}
                          className="w-4 h-4"
                        />
                        <span className="text-white text-sm">Hora específica (lo confirmo por chat)</span>
                      </label>
                      <label className="flex items-center gap-2 cursor-pointer">
                        <input
                          type="radio"
                          name="horario"
                          value="otro"
                          checked={horario === 'otro'}
                          onChange={(e) => setHorario(e.target.value)}
                          className="w-4 h-4"
                        />
                        <span className="text-white text-sm">Mañana o después</span>
                      </label>
                    </div>
                  </div>
                </div>

                <div className="space-y-3 mb-6">
                  {cart.map((item) => (
                    <div key={item.id} className="flex justify-between items-start bg-black bg-opacity-50 p-4 rounded-lg">
                      <div className="flex-1">
                        <p className="font-bold text-green-400">{item.emoji} {item.name}</p>
                        {item.size && <p className="text-sm text-white">Tamaño: {item.size}</p>}
                      </div>
                      <div className="text-right">
                        <p className="font-bold text-green-400">${item.price.toLocaleString('es-CL')}</p>
                        <button
                          onClick={() => removeFromCart(item.id)}
                          className="text-red-400 hover:text-red-300 text-sm mt-2"
                        >
                          ✕
                        </button>
                      </div>
                    </div>
                  ))}
                </div>

                {/* OPCIONES DE ENTREGA - PRESIONABLE */}
                {!cart.some(item => item.type === 'retiro' || item.type === 'delivery') && (
                  <>
                    <h4 className="text-white font-bold mb-3 text-center">¿Cómo recibes tu pedido?</h4>
                    <div className="flex gap-3 mb-6">
                      <button
                        onClick={() => addToCart({
                          type: 'retiro',
                          name: 'Retiro en Casa',
                          emoji: '🏪',
                          price: 0,
                          address: 'Pedro de Valdivia 12, Andacollo'
                        })}
                        className="flex-1 bg-green-500 hover:bg-green-600 py-4 rounded-lg font-bold transition-all text-white"
                      >
                        🏪 RETIRO<br/>
                        <span className="text-xs">Gratis</span>
                      </button>
                      <button
                        onClick={() => addToCart({
                          type: 'delivery',
                          name: 'Delivery a Domicilio',
                          emoji: '🚗',
                          price: deliveryPrice
                        })}
                        className="flex-1 bg-red-500 hover:bg-red-600 py-4 rounded-lg font-bold transition-all text-white"
                      >
                        🚗 DELIVERY<br/>
                        <span className="text-xs">$2.000</span>
                      </button>
                    </div>
                  </>
                )}

                {/* CAMPO DE DIRECCIÓN - SOLO SI HAY DELIVERY EN CARRITO */}
                {cart.some(item => item.type === 'delivery') && (
                  <div className="mb-4 p-4 bg-red-500 bg-opacity-20 border border-red-500 rounded-lg">
                    <label className="text-white font-bold text-sm block mb-2">
                      📍 Tu dirección de entrega:
                    </label>
                    <input
                      type="text"
                      value={direccion}
                      onChange={(e) => setDireccion(e.target.value)}
                      placeholder="Ej: Calle Principal 123"
                      className="w-full bg-black border-2 border-red-500 text-white p-3 rounded-lg font-bold placeholder-gray-500 focus:outline-none focus:border-red-400"
                    />
                  </div>
                )}

                {/* RESUMEN */}
                <div className="border-t border-green-500 pt-4">
                  <div className="flex justify-between text-2xl font-black text-green-400 mb-4">
                    <span>TOTAL:</span>
                    <span>${calculateTotal().toLocaleString('es-CL')}</span>
                  </div>

                  <a
                    href={whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="glow-btn-red w-full py-4 text-lg font-bold rounded-lg text-white cursor-pointer inline-flex items-center gap-2 justify-center"
                  >
                    <MessageCircle size={24} />
                    Pedir por WhatsApp
                  </a>
                </div>
              </>
            )}
          </div>
        </div>
      )}

      {/* SECCIÓN PIZZAS */}
      <section id="menu" className="py-12 px-4 relative bg-gradient-to-b from-black via-green-950 to-black">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-black text-center mb-2 glow-text uppercase">
            Nuestras Pizzas 🍕
          </h2>
          <p className="text-center text-white mb-6 text-sm font-semibold">
            Hechas al momento • Ingredientes frescos • Horneadas a la piedra
          </p>

          {/* PRECIO */}
          <div className="text-center mb-8 gradient-border rounded-lg p-4 bg-black max-w-sm mx-auto">
            <p className="text-white text-sm mb-1">Pizza Familiar</p>
            <p className="text-4xl font-black text-green-400">$10.990</p>
          </div>

          {/* GRID PIZZAS - MÁS COMPACTO */}
          <div className="grid grid-cols-2 md:grid-cols-5 gap-3 mb-8">
            {pizzas.map((pizza) => (
              <div key={pizza.id} className="card-gradient p-4 rounded-lg hover:transform hover:scale-105 transition-all">
                <div className="text-4xl mb-2 text-center">{pizza.emoji}</div>
                <h4 className="text-sm font-bold text-center mb-3 text-white">
                  {pizza.name}
                </h4>
                <button
                  onClick={() => addToCart({ type: 'pizza', name: pizza.name, emoji: pizza.emoji, price: pizzaPrice })}
                  className="w-full bg-green-500 hover:bg-green-600 py-2 rounded-lg font-bold transition-all text-xs"
                >
                  Agregar
                </button>
              </div>
            ))}
          </div>

          {/* PROMO DESTACADA - COMPACTA */}
          <div className="gradient-border-red rounded-2xl mb-8">
            <div className="card-gradient-red p-6 rounded-2xl">
              <div className="grid md:grid-cols-2 gap-6 items-center">
                <div>
                  <h3 className="text-2xl md:text-3xl font-black text-red-400 mb-3">
                    PROMO IMPERDIBLE 🔥
                  </h3>
                  <p className="text-lg font-bold text-white mb-3">
                    2 Pizzas Familiares + Bebida 1.5L
                  </p>
                  <p className="text-4xl font-black text-white mb-4">$19.990</p>
                  <button
                    onClick={() => addToCart({
                      type: 'promo',
                      name: 'Promo 2 Pizzas + Bebida',
                      emoji: '📦',
                      price: promoPrice,
                      pizza1: 'Margarita',
                      pizza2: 'Tu favorita'
                    })}
                    className="glow-btn-red w-full py-3 text-base font-bold rounded-lg text-white"
                  >
                    <ShoppingCart className="inline mr-2" size={20} />
                    Agregar al Carrito
                  </button>
                </div>
                <div className="text-5xl text-center float-animation">🍕🍕✨</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECCIÓN WAFFLES */}
      <section className="py-12 px-4 relative bg-gradient-to-b from-black via-red-950 to-black">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-black text-center mb-2 glow-text uppercase">
            Waffles Mica 🧇
          </h2>
          <p className="text-center text-white mb-6 text-sm font-semibold">
            Borde cubierto con chocolate • Sabor incomparable
          </p>

          {/* PRECIOS - MÁS COMPACTO */}
          <div className="flex justify-center gap-4 mb-6">
            <div className="text-center gradient-border rounded-lg p-4 bg-black">
              <p className="text-white text-xs mb-1">Entero</p>
              <p className="text-3xl font-black text-green-400">$4.990</p>
            </div>
            <div className="text-center gradient-border rounded-lg p-4 bg-black">
              <p className="text-white text-xs mb-1">Mitad</p>
              <p className="text-3xl font-black text-green-400">$2.990</p>
            </div>
          </div>

          {/* GRID WAFFLES - MÁS COMPACTO */}
          <div className="grid md:grid-cols-2 gap-4 mb-8">
            {waffles.map((waffle) => (
              <div key={waffle.id} className="card-gradient-red p-4 rounded-lg hover:transform hover:scale-105 transition-all">
                <div className="flex items-start gap-3">
                  <p className="text-3xl">{waffle.emoji}</p>
                  <div className="flex-1">
                    <h4 className="text-lg font-black text-red-400 mb-1">
                      {waffle.name}
                    </h4>
                    <p className="text-white text-xs leading-tight mb-3">
                      {waffle.desc}
                    </p>
                    <div className="flex gap-2">
                      <button
                        onClick={() => addToCart({
                          type: 'waffle',
                          name: waffle.name,
                          emoji: waffle.emoji,
                          price: waffleEntero,
                          size: 'Entero'
                        })}
                        className="flex-1 bg-green-500 hover:bg-green-600 py-1 rounded text-xs font-bold"
                      >
                        Entero
                      </button>
                      <button
                        onClick={() => addToCart({
                          type: 'waffle',
                          name: waffle.name,
                          emoji: waffle.emoji,
                          price: waffleMitad,
                          size: 'Mitad'
                        })}
                        className="flex-1 bg-red-500 hover:bg-red-600 py-1 rounded text-xs font-bold"
                      >
                        Mitad
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* ARMA TU WAFFLE */}
          <div className="gradient-border rounded-lg bg-black p-6 text-center">
            <h3 className="text-2xl font-black text-green-400 mb-3">¡ARMA EL TUYO! 🎨</h3>
            <p className="text-white text-sm mb-4">
              Base de chantilly + 2 agregados + salsa a elección
            </p>
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="glow-btn px-6 py-2 text-sm font-bold rounded-lg text-white cursor-pointer inline-flex items-center gap-2 justify-center"
            >
              <MessageCircle size={18} />
              Personalizar
            </a>
          </div>
        </div>
      </section>

      {/* SECCIÓN OPCIONES DE ENTREGA */}
      <section className="py-12 px-4 relative bg-gradient-to-b from-black via-green-950 to-black">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-black text-center mb-2 glow-text uppercase">
            ¿Cómo Recibes tu Pedido?
          </h2>
          <p className="text-center text-white mb-8 text-sm">Elige en el carrito</p>

          <div className="grid md:grid-cols-2 gap-4 mb-8">
            {/* RETIRO */}
            <div className="gradient-border rounded-lg bg-black p-6 text-center">
              <div className="text-5xl mb-3">🏪</div>
              <h3 className="text-xl font-black text-green-400 mb-2">RETIRO EN CASA</h3>
              <p className="text-white text-sm mb-3">
                <span className="font-bold">Pedro de Valdivia 12</span><br/>
                Andacollo
              </p>
              <p className="text-white text-xs italic mb-3">
                Al medio del cementerio y la escuela San Lorenzo
              </p>
              <p className="text-2xl font-black text-green-400">GRATIS</p>
            </div>

            {/* DELIVERY */}
            <div className="gradient-border-red rounded-lg bg-black p-6 text-center">
              <div className="text-5xl mb-3">🚗</div>
              <h3 className="text-xl font-black text-red-400 mb-2">DELIVERY A DOMICILIO</h3>
              <p className="text-white text-sm mb-3">
                Entrega en tu hogar
              </p>
              <p className="text-white text-xs mb-3">
                ✓ Solo en Andacollo<br/>
                ✓ Rápido y seguro
              </p>
              <p className="text-2xl font-black text-red-400">$2.000</p>
            </div>
          </div>

          {/* INSTRUCCIONES */}
          <div className="gradient-border rounded-lg bg-black p-6 text-center">
            <h3 className="text-lg font-black text-green-400 mb-3">⏱️ TIEMPO DE ESPERA</h3>
            <p className="text-white text-sm">
              Una vez que confirmes tu pedido por WhatsApp, te diremos cuánto tiempo demorará 🕐
            </p>
          </div>
        </div>
      </section>

      {/* SECCIÓN AGREGADOS */}
      <section className="py-12 px-4 relative">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-black text-center mb-8 glow-text uppercase">
            Más Opciones
          </h2>

          <div className="grid md:grid-cols-2 gap-4">
            {/* Donas */}
            <div className="card-gradient p-6 rounded-lg text-center hover:transform hover:scale-105 transition-all">
              <div className="text-5xl mb-3">🍩</div>
              <h3 className="text-lg font-bold mb-2">Donas Rellenas</h3>
              <p className="text-white text-sm mb-3">Dulces y deliciosas</p>
              <p className="text-3xl font-black text-green-400 mb-3">$1.500 c/u</p>
              <button
                onClick={() => addToCart({ type: 'dona', name: 'Dona Rellena', emoji: '🍩', price: donaPrice })}
                className="w-full bg-green-500 hover:bg-green-600 py-2 rounded-lg font-bold transition-all text-sm"
              >
                Agregar
              </button>
            </div>

            {/* Bebidas */}
            <div className="card-gradient p-6 rounded-lg text-center hover:transform hover:scale-105 transition-all">
              <div className="text-5xl mb-3">🥤</div>
              <h3 className="text-lg font-bold mb-2">Bebida 1.5L</h3>
              <p className="text-white text-sm mb-3">Refresco helado</p>
              <p className="text-3xl font-black text-green-400 mb-3">$2.500</p>
              <button
                onClick={() => addToCart({ type: 'drink', name: 'Bebida 1.5L', emoji: '🥤', price: drinkPrice })}
                className="w-full bg-green-500 hover:bg-green-600 py-2 rounded-lg font-bold transition-all text-sm"
              >
                Agregar
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* QUIÉNES SOMOS */}
      <section className="py-12 px-4 relative">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-black text-center mb-8 glow-text uppercase">
            Quiénes Somos
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <div className="text-5xl mb-4">👨‍🍳</div>
              <h3 className="text-2xl font-bold text-green-400 mb-4">Pasión por la Pizza</h3>
              <p className="text-sm text-white leading-relaxed mb-3">
                En PIZZAMICA preparamos pizzas deliciosas con cuidado y dedicación. Cada pizza es hecha con ingredientes frescos y amor en cada bocado.
              </p>
              <p className="text-sm text-white leading-relaxed">
                Nuestro equipo trabaja para que disfrutes de una pizza de calidad.
              </p>
            </div>

            <div className="gradient-border rounded-lg bg-black p-6">
              <h3 className="text-lg font-bold text-red-400 mb-4">Lo Que Ofrecemos</h3>

              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <span className="text-2xl">🍕</span>
                  <div>
                    <p className="font-bold text-white text-sm">Pizzas Napolitanas</p>
                    <p className="text-white text-xs">Estilo tradicional</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <span className="text-2xl">🧇</span>
                  <div>
                    <p className="font-bold text-white text-sm">Waffles Mica</p>
                    <p className="text-white text-xs">Sabores únicos</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <span className="text-2xl">🥬</span>
                  <div>
                    <p className="font-bold text-white text-sm">Ingredientes Frescos</p>
                    <p className="text-white text-xs">Seleccionados con cuidado</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <span className="text-2xl">⚡</span>
                  <div>
                    <p className="font-bold text-white text-sm">Listos al Momento</p>
                    <p className="text-white text-xs">Cocinados en vivo</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="py-12 px-4 relative">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-black mb-4 glow-text uppercase">
            ¿Qué estás esperando?
          </h2>
          <p className="text-xl font-bold text-white mb-6">
            Pide tu Pizzamica ahora
          </p>
          <p className="text-white text-sm mb-8">
            Calentitas, listas y deliciosas 🔥
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="#menu"
              className="glow-btn px-6 py-3 text-base font-bold rounded-lg text-white cursor-pointer inline-flex items-center gap-2 justify-center"
            >
              <Zap size={20} />
              Ver Menú
            </a>
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="glow-btn-red px-6 py-3 text-base font-bold rounded-lg text-white cursor-pointer inline-flex items-center gap-2 justify-center"
            >
              <MessageCircle size={20} />
              Pedir Ahora
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-green-500 border-opacity-30 py-8 px-4 text-center text-white text-sm">
        <p className="mb-1 font-bold">🍕 PIZZAMICA - Andacollo 🍕</p>
        <p className="mb-2">📱 WhatsApp: +56 9 5024 9329</p>
        <p className="text-xs opacity-80">© 2024 Pizzamica. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
}
