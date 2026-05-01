# 🍕 PIZZAMICA - Menú Digital

Menú interactivo y carrito de compras para Pizzamica Andacollo.

## 🚀 Características

- ✅ Menú de pizzas napolitanas
- ✅ Sección de waffles mica
- ✅ Carrito de compras interactivo
- ✅ Integración directa con WhatsApp
- ✅ Opción de retiro o delivery
- ✅ Campo para nombre y horario del pedido
- ✅ Responsive (funciona en móvil y desktop)
- ✅ Sin espacios vacíos, diseño compacto

## 📋 Requisitos

- Node.js 16+ 
- npm o yarn

## 🛠️ Instalación Local

```bash
# 1. Clonar el repositorio
git clone https://github.com/TU-USUARIO/menu-pizzamica.git
cd menu-pizzamica

# 2. Instalar dependencias
npm install

# 3. Ejecutar en local
npm start
```

La página se abrirá en `http://localhost:3000`

## 🌐 Desplegar en Vercel

### Opción 1: Automática (Recomendada)

1. Ve a [vercel.com](https://vercel.com)
2. Conecta tu cuenta GitHub
3. Selecciona este repositorio
4. Vercel lo desplegará automáticamente
5. Tu link será algo como: `menu-pizzamica.vercel.app`

### Opción 2: CLI de Vercel

```bash
# Instala Vercel CLI
npm install -g vercel

# Despliega
vercel

# Con dominio personalizado
vercel --prod
```

## 🎯 Configuración

### Cambiar número de WhatsApp

En `menu-pizzamica.jsx`, encuentra esta línea:

```javascript
const whatsappNumber = '56950249329';
```

Y cambia el número por el tuyo.

### Cambiar precios

En `menu-pizzamica.jsx`, busca estas constantes:

```javascript
const promoPrice = 19990;      // Promo 2 pizzas + bebida
const pizzaPrice = 10990;      // Pizza individual
const waffleEntero = 4990;     // Waffle entero
const waffleMitad = 2990;      // Waffle mitad
const donaPrice = 1500;        // Dona
const drinkPrice = 2500;       // Bebida
const deliveryPrice = 2000;    // Delivery
```

## 📱 Estructura

```
├── menu-pizzamica.jsx         # Componente principal
├── package.json               # Dependencias
├── tailwind.config.js         # Configuración Tailwind
├── .gitignore                 # Archivos a ignorar en Git
└── README.md                  # Este archivo
```

## 🎨 Personalización

### Cambiar colores

Los colores están definidos en `menu-pizzamica.jsx` en los estilos CSS. Busca:

- `#22c55e` = Verde (principal)
- `#dc2626` = Rojo (secundario)
- `#000000` = Negro (fondo)

### Cambiar logo

En la sección HERO, reemplaza el logo SVG con tu imagen.

## 📞 Contacto

**WhatsApp:** +56 9 5024 9329  
**Ubicación:** Pedro de Valdivia 12, Andacollo

## 📄 Licencia

Este proyecto es privado para Pizzamica Andacollo.

---

¡Hecho con ❤️ para Pizzamica!
