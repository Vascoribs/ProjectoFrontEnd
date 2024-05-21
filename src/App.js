import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Main from './components/Main';
import Newsletter from './components/Newsletter';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <Newsletter />
      <Footer />
    </div>
  );
}

export default App;
