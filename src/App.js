import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import AboutUs from './components/AboutUs';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Header from './components/Header';
import Main from './components/Main';
import Newsletter from './components/Newsletter';
import Shop from './components/Shop';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Header />
      <Routes>
        <Route path="aboutus" element={<AboutUs />} />
        <Route path="shop" element={<Shop />} />
        <Route path="contact" element={<Contact />} />
      </Routes>
      <Main />
      <Newsletter />
      <Footer />
    </div>
    </BrowserRouter>
  );
}

export default App;
