import './App.css';
import Ibackend from './backend';
import Footer from './components/Footer';
import Header from './components/Header';
import Main from './components/Main';
import IProductsObgect from './module';
import backend from './backend'

function App() {
  
  

  return (
   
    <div className={`w-[100%] h-[100%] flex flex-col justify-center`}>
      <Header/>
    

      <Main props={backend.products} backendProps = {backend}/>

      <Footer/>

    </div>
   
  );
}

export default App;
