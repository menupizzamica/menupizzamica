import React, { useState } from 'react';
import { ShoppingCart, X, MessageCircle, Zap, ChevronDown } from 'lucide-react';

export default function PizzamicaMejorada() {
  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);
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
    { id: 'bananamica', name: 'BANANAMICA', emoji: '🍌', desc: 'Crema chantilly + plátano + salsa de manjar + salsa de chocolate + mostacillas' },
    { id: 'chocomica', name: 'CHOCOMICA', emoji: '🍫', desc: 'Crema chantilly + chocolate blanco + cubitos + mostacillas + salsa de chocolate' },
    { id: 'cookiemica', name: 'COOKIEMICA', emoji: '🍪', desc: 'Crema chantilly + oreo triturado + salsa de chocolate' },
    { id: 'candymica', name: 'CANDYMICA', emoji: '🍬', desc: 'Crema chantilly + kukis + salsa de caramelo + mostacillas de colores' },
    { id: 'berrymica', name: 'BERRYMICA', emoji: '🫐', desc: 'Crema chantilly rosada + merenguitos + salsa de frambuesa + mostacillas' },
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

  const calculateTotal = () => cart.reduce((sum, item) => sum + item.price, 0);

  const generateWhatsappMessage = () => {
    let message = '🍕 ¡Hola! Quiero hacer un pedido de PIZZAMICA 🍕\n\n';
    message += `👤 NOMBRE: ${nombre || '(No especificado)'}\n`;
    message += `⏰ HORARIO: ${horario === 'para-ahora' ? 'Para ahora' : horario === 'especifico' ? 'Confirmar por chat' : 'Mañana o después'}\n\n`;
    message += `====================\nPRODUCTOS:\n====================\n\n`;
    
    cart.forEach((item) => {
      message += `${item.emoji} ${item.name} ${item.size ? `(${item.size})` : ''}\n`;
      if (item.type === 'delivery' && direccion) message += `📍 Dir: ${direccion}\n`;
      message += `   $${item.price.toLocaleString('es-CL')}\n\n`;
    });

    message += `====================\n💰 TOTAL: $${calculateTotal().toLocaleString('es-CL')}\n====================\n\n✨ ¡Gracias! ✨`;
    return encodeURIComponent(message);
  };

  const whatsappLink = `https://wa.me/56950249329?text=${generateWhatsappMessage()}`;

  return (
    <div className="min-h-screen bg-black text-white font-sans overflow-x-hidden">
      <style>{`
        .glow-text { text-shadow: 0 0 20px rgba(34, 197, 94, 0.8), 0 0 40px rgba(34, 197, 94, 0.6); }
        .glow-btn { background: linear-gradient(135deg, #22c55e, #16a34a); box-shadow: 0 0 30px rgba(34, 197, 94, 0.6); transition: all 0.3s ease; }
        .glow-btn:hover { transform: scale(1.05); }
        .glow-btn-red { background: linear-gradient(135deg, #dc2626, #991b1b); box-shadow: 0 0 30px rgba(220, 38, 38, 0.6); transition: all 0.3s ease; }
        .card-gradient { background: linear-gradient(135deg, rgba(34, 197, 94, 0.15), rgba(34, 197, 94, 0.1)); border: 1px solid rgba(34, 197, 94, 0.3); }
        .card-gradient-red { background: linear-gradient(135deg, rgba(220, 38, 38, 0.15), rgba(220, 38, 38, 0.1)); border: 1px solid rgba(220, 38, 38, 0.3); }
        @keyframes float { 0%, 100% { transform: translateY(0px); } 50% { transform: translateY(-10px); } }
        .float-animation { animation: float 3s ease-in-out infinite; }
      `}</style>

      {/* HERO */}
      <section className="relative py-16 px-4 text-center">
        <div className="absolute inset-0 opacity-20 bg-gradient-to-r from-green-900 via-black to-red-900"></div>
        <div className="relative z-10">
          <h1 className="text-6xl md:text-7xl font-black mb-4 glow-text uppercase">PIZZAMICA</h1>
          <p className="text-lg mb-8">🍕 Estilo Napolitano • Masa Delgada • 100% Artesanal</p>
          <div className="inline-block p-1 bg-gradient-to-r from-red-600 to-red-900 rounded-2xl mb-8">
            <div className="bg-black p-8 rounded-2xl">
              <p className="text-5xl font-black mb-2">$19.990</p>
              <p className="text-xl text-red-400 font-bold uppercase tracking-widest">2 Pizzas + Bebida 1.5L</p>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#menu" className="glow-btn px-8 py-4 rounded-xl font-bold flex items-center justify-center gap-2">
              <Zap size={20}/> Ver Menú
            </a>
            <a href={whatsappLink} target="_blank" className="glow-btn-red px-8 py-4 rounded-xl font-bold flex items-center justify-center gap-2">
              <MessageCircle size={20}/> Pedir Ahora
            </a>
          </div>
        </div>
      </section>

      {/* PIZZAS */}
      <section id="menu" className="py-12 px-4 max-w-5xl mx-auto">
        <h2 className="text-4xl font-black text-center mb-10 glow-text uppercase">Nuestras Pizzas</h2>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-12">
          {pizzas.map(pizza => (
            <div key={pizza.id} className="card-gradient p-4 rounded-xl text-center hover:scale-105 transition-transform">
              <div className="text-4xl mb-2">{pizza.emoji}</div>
              <h3 className="text-sm font-bold mb-3">{pizza.name}</h3>
              <button 
                onClick={() => addToCart({ type: 'pizza', name: pizza.name, emoji: pizza.emoji, price: pizzaPrice })}
                className="w-full bg-green-500 py-2 rounded-lg text-xs font-black"
              >Agregar</button>
            </div>
          ))}
        </div>
      </section>

      {/* WAFFLES */}
      <section className="py-12 px-4 max-w-5xl mx-auto border-t border-zinc-800">
        <h2 className="text-4xl font-black text-center mb-10 glow-text uppercase text-red-500">Waffles Mica</h2>
        <div className="grid md:grid-cols-2 gap-4">
          {waffles.map(waffle => (
            <div key={waffle.id} className="card-gradient-red p-5 rounded-xl flex gap-4 items-center">
              <span className="text-4xl float-animation">{waffle.emoji}</span>
              <div className="flex-1">
                <h3 className="font-black text-red-400">{waffle.name}</h3>
                <p className="text-xs opacity-70 mb-3">{waffle.desc}</p>
                <div className="flex gap-2">
                  <button onClick={() => addToCart({ type: 'waffle', name: waffle.name, emoji: waffle.emoji, price: waffleEntero, size: 'Entero' })} className="flex-1 bg-green-600 py-1 rounded text-[10px] font-bold">Entero</button>
                  <button onClick={() => addToCart({ type: 'waffle', name: waffle.name, emoji: waffle.emoji, price: waffleMitad, size: 'Mitad' })} className="flex-1 bg-red-600 py-1 rounded text-[10px] font-bold">Mitad</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-12 text-center opacity-50 text-xs border-t border-zinc-900 mt-10">
        <p>🍕 PIZZAMICA - Andacollo 🍕</p>
        <p>© 2024 Pizzamica. Todos los derechos reservados.</p>
      </footer>

      {/* CARRITO FLOTANTE */}
      <div className="fixed bottom-6 right-6 z-50">
        <button onClick={() => setShowCart(true)} className="glow-btn p-5 rounded-full relative">
          <ShoppingCart />
          {cart.length > 0 && <span className="absolute -top-1 -right-1 bg-red-600 w-5 h-5 flex items-center justify-center rounded-full text-[10px]">{cart.length}</span>}
        </button>
      </div>

      {/* MODAL CARRITO */}
      {showCart && (
        <div className="fixed inset-0 bg-black/90 z-[60] flex items-center justify-center p-4">
          <div className="bg-zinc-900 w-full max-w-md rounded-2xl border border-green-500/30 overflow-hidden">
            <div className="p-6 border-b border-zinc-800 flex justify-between items-center">
              <h3 className="text-xl font-bold">Tu Pedido</h3>
              <button onClick={() => setShowCart(false)}><X /></button>
            </div>
            
            <div className="p-6 max-h-[60vh] overflow-y-auto space-y-4">
              {cart.length === 0 ? <p className="text-center opacity-50">El carrito está vacío</p> : 
                cart.map(item => (
                  <div key={item.id} className="flex justify-between items-center bg-black/40 p-3 rounded-lg">
                    <div>
                      <p className="font-bold text-sm">{item.emoji} {item.name}</p>
                      {item.size && <p className="text-[10px] text-green-400 uppercase">{item.size}</p>}
                    </div>
                    <div className="flex items-center gap-4">
                      <span className="font-bold text-sm">${item.price.toLocaleString('es-CL')}</span>
                      <button onClick={() => removeFromCart(item.id)} className="text-red-500 text-xs">✕</button>
                    </div>
                  </div>
                ))
              }

              {cart.length > 0 && (
                <div className="pt-4 space-y-3">
                  <input type="text" placeholder="👤 Tu nombre" className="w-full bg-black border border-zinc-700 p-3 rounded-lg text-sm" value={nombre} onChange={e => setNombre(e.target.value)} />
                  <div className="flex gap-2">
                    <button onClick={() => addToCart({ type: 'delivery', name: 'Delivery', emoji: '🚗', price: deliveryPrice })} className="flex-1 bg-zinc-800 p-2 rounded-lg text-[10px] font-bold">🚗 + Delivery</button>
                    <button onClick={() => addToCart({ type: 'retiro', name: 'Retiro', emoji: '🏪', price: 0 })} className="flex-1 bg-zinc-800 p-2 rounded-lg text-[10px] font-bold">🏪 Retiro Gratis</button>
                  </div>
                  {cart.some(i => i.type === 'delivery') && (
                    <input type="text" placeholder="📍 Dirección en Andacollo" className="w-full bg-black border border-red-900 p-3 rounded-lg text-sm" value={direccion} onChange={e => setDireccion(e.target.value)} />
                  )}
                </div>
              )}
            </div>

            <div className="p-6 bg-zinc-800/50">
              <div className="flex justify-between text-2xl font-black mb-4">
                <span>TOTAL</span>
                <span className="text-green-400">${calculateTotal().toLocaleString('es-CL')}</span>
              </div>
              <a href={whatsappLink} target="_blank" className="glow-btn-red w-full py-4 rounded-xl font-bold flex justify-center items-center gap-2">
                <MessageCircle size={20} /> Pedir por WhatsApp
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
