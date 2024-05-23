import './App.css';
import AboutUs from './components/AboutUs';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Header from './components/Header';
import Main from './components/Main';
import Newsletter from './components/Newsletter';
import Shop from './components/Shop';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function App() {
  return (
    <div className="App">
      <Header />
      <AboutUs />
      <Shop />
      <Contact />
      <Main />
      <Newsletter />
      <Footer />
    </div>
  );
}

export default App;
