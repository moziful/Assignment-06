import { useState } from 'react';
import './App.css'
import 'react-toastify/dist/ReactToastify.css';
import Hero from './components/hero';
import Navbar from './components/navbar';
import Stats from './components/stats';
import Products from './components/products';
import Steps from './components/steps';
import Pricing from './components/pricing';
import Transform from './components/transform';
import Footer from './components/footer';
import { ToastContainer } from 'react-toastify';




function App() {
  const [cartItems, setCartItems] = useState([]);

  return (
    <>
    <Navbar cartCount={cartItems.length} />
    <Hero />
    <Stats />
    <Products cartItems={cartItems} setCartItems={setCartItems} />
    <Steps />
    <Pricing />
    <Transform />
    <Footer />
    <ToastContainer position="top-right" autoClose={2000} />
    </>
  );
}

export default App
