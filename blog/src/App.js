import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Newsletter from './components/Newsletter';
import Prices from './components/Prices';
import Produtos from './components/Produtos';
import Qualidade from './components/Qualidade';
import Sobre from './components/Sobre';
import SuperInfo from './components/SuperInfo';
import Titile from './components/Titile';

function App() {
  return (
    <>
      <SuperInfo />
      <Header />
      <Titile />
      <Sobre />
      <Produtos />
      <Prices />
      <Qualidade />
      {/* <Newsletter /> */}
      <Footer />
    </>
  );
}

export default App;
