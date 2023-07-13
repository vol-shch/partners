import './App.css';
import Banner from './components/Banner/Banner';
import Header from './components/Header/Header';
import Important from './components/Important/Important';
import Services from './components/Servises/Services';
import Plan from './components/Plan/Plan';
import Cooperation from './components/Cooperation/Cooperation';
import Form from './components/Form/Form';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <div className='App__container'>
      <Banner />
      <Services />
      <Important />
      <Plan />
      <Cooperation />
      </div>
      <Form />
      <Footer />
    </div>
  );
}

export default App;
