import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Cart from './components/Cart/Cart'
import Checkout from './components/Checkout/Checkout';
import Homepage from "./pages/Homepage";
import Menu from './components/Menu/Menu';
import About from './components/About/About';
import Contact from './components/Contact/Contact';

import {CartProvider} from './context/CartContext';
import Footer from './components/Footer/Footer';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <CartProvider>
          <NavBar />
            <Routes>
              <Route path="/" element={<Homepage/>}/>
              <Route path="/category/books" element={<ItemListContainer/>}/>
              <Route path="/category/menu" element={<Menu/>}/>
              <Route path="/category/about" element={<About/>}/>
              <Route path="/category/contact" element={<Contact/>}/>
              <Route path="/item/:itemId" element={<ItemDetailContainer/>}/>
              <Route path="/cart" element={<Cart/>}/>
              <Route path="/checkout" element={<Checkout/>}/>
              <Route path="*" element={<h1> ERROR 404 NOT FOUND</h1>}/>
            </Routes>
          <Footer />
        </CartProvider>
      </BrowserRouter>
    </div>
  )
}

export default App;



