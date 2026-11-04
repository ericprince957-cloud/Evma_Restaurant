import React, { useState, useEffect } from 'react';
import LocationGate from './components/LocationGate';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Menu from './components/Menu';
import Cart from './components/Cart';
import BookCook from './components/BookCook';
import Checkout from './components/Checkout';
import Footer from './components/Footer';
import { CartProvider } from './context/CartContext';

function App() {
  const [locationGranted, setLocationGranted] = useState(false);
  const [showCart, setShowCart] = useState(false);
  const [showCheckout, setShowCheckout] = useState(false);

  return (
    <CartProvider>
      <div className="min-h-screen bg-stone-50 font-sans">
        {!locationGranted ? (
          <LocationGate onGranted={() => setLocationGranted(true)} />
        ) : (
          <>
            <Navbar onCartClick={() => setShowCart(true)} />
            <Hero />
            <Menu />
            <BookCook />
            <Footer />
            {showCart && <Cart onClose={() => setShowCart(false)} onCheckout={() => { setShowCart(false); setShowCheckout(true); }} />}
            {showCheckout && <Checkout onClose={() => setShowCheckout(false)} />}
          </>
        )}
      </div>
    </CartProvider>
  );
}

export default App;
