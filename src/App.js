import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import AboutUs from './components/AboutUs';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './components/Home';
import Newsletter from './components/Newsletter';
import Shop from './components/Shop';
import Articles from './components/Articles';
import ShoppingCart from './components/ShoppingCart';
import { CartContext, CartContextProvider } from './contexts/CartContext';

function App() {
  
  return (
    <CartContextProvider>
      <CartContext.Consumer>
        {
          context =>{

            return(
              <BrowserRouter>
                <div className="App">
                <Header />
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/aboutus" element={<AboutUs />} />
                  <Route path="/shop" element={<Shop />} />
                  <Route path="/contact" element={<Contact />} />
                  <Route path="/articles/:id" element={<Articles />} />
                  <Route path="/shoppingcart" element={<ShoppingCart />} />
                </Routes>
                <Newsletter />
                <Footer />
                </div>
            </BrowserRouter>


            )
          }
        }
       
      </CartContext.Consumer>
    </CartContextProvider>
  );
}

export default App;
