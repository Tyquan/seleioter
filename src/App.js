import { useEffect, useReducer} from 'react';
import escrapsReducer from './reducers/escraps';
import EscrapContext from './context/EscrapContext';
import './App.css';
import EscrapForm from './components/escrapform/EscrapForm';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import MainImage from './components/MainImage/MainImage';
import QuickFacts from './components/QuickFacts/QuickFacts';
import AcceptedProducts from './components/AcceptedProducts/AcceptedProducts';

function App() {

  const [escraps, dispatch] = useReducer(escrapsReducer);
  

  useEffect(() => {
    fetch('http://localhost:8080/api/V1/escraps')
      .then(response => response.json())
      .then(data => console.log("Escrap Data:", data));
  }, [])

  return (
    <EscrapContext.Provider value={{escraps, dispatch}}>
      <Header />
      <MainImage />
      <div className='container'>
        <br />
        <h1>Some Quick Facts:</h1>
        <br />
        <QuickFacts />
        <br />
      </div>
      <AcceptedProducts />
      <br />
      <div className='container'>
        <EscrapForm />
      </div>
      <Footer />
    </EscrapContext.Provider>
  );
}

export default App;
