import React, { useState, useEffect } from 'react';
import Login from './components/Login';
import College from './components/College';
import Navbar from './components/Navbar';
import FoodList from './components/FoodList';
import Cart from './components/Cart';
import Payment from './components/Payment';
import OrderHistory from './components/OrderHistory';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [view, setView] = useState('college'); // 'college', 'foodlist', 'cart', 'payment', 'history'
  const [category, setCategory] = useState('');
  
  const [cart, setCart] = useState([]);
  const [orders, setOrders] = useState([]);

  // Load orders from local storage on mount
  useEffect(() => {
    const savedOrders = localStorage.getItem('foodmunch_orders');
    if(savedOrders) {
      setOrders(JSON.parse(savedOrders));
    }
  }, []);

  const handleSuccessfulLogin = () => {
    setIsAuthenticated(true);
    setView('college');
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setCart([]);
    setView('college');
  };

  const changeView = (newView, cat = '') => {
    if(cat) setCategory(cat);
    setView(newView);
    window.scrollTo(0, 0);
  };

  const addToCart = (item) => {
    setCart(prev => {
      const existing = prev.find(i => i.id === item.id);
      if(existing) {
        return prev.map(i => i.id === item.id ? { ...i, qty: i.qty + 1 } : i);
      }
      return [...prev, { ...item, qty: 1 }];
    });
  };

  const updateQty = (id, amount) => {
    setCart(prev => {
      return prev.map(i => {
        if(i.id === id) {
          const newQty = i.qty + amount;
          return newQty > 0 ? { ...i, qty: newQty } : i;
        }
        return i;
      });
    });
  };

  const removeFromCart = (id) => {
    setCart(prev => prev.filter(i => i.id !== id));
  };

  const completeOrder = (total) => {
    const newOrder = {
      id: Math.floor(100000 + Math.random() * 900000),
      date: new Date().toLocaleString(),
      items: [...cart],
      total: total
    };
    const newOrders = [newOrder, ...orders];
    setOrders(newOrders);
    localStorage.setItem('foodmunch_orders', JSON.stringify(newOrders));
    setCart([]);
    alert('Payment Successful! Thank you for your order.');
    changeView('history');
  };

  if(!isAuthenticated) {
    return <Login onLogin={handleSuccessfulLogin} />;
  }

  const cartCount = cart.reduce((sum, item) => sum + item.qty, 0);

  return (
    <>
      <Navbar onLogout={handleLogout} changeView={changeView} cartCount={cartCount} />
      
      {view === 'college' && <College changeView={changeView} />}
      {view === 'foodlist' && <FoodList category={category} addToCart={addToCart} changeView={changeView} />}
      {view === 'cart' && <Cart cart={cart} updateQty={updateQty} removeFromCart={removeFromCart} changeView={changeView} />}
      {view === 'payment' && <Payment cart={cart} completeOrder={completeOrder} changeView={changeView} />}
      {view === 'history' && <OrderHistory orders={orders} changeView={changeView} />}
    </>
  );
}

export default App;
