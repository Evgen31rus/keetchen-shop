import './App.css';
import backend from './backend';
import Footer from './components/Footer';
import Header from './components/Header';
import Main from './components/Main';
import IProductsObgect from './module';

function App() {
  
  
  const products:IProductsObgect[]= backend.products

  return (
   
    <div className={`w-[100%] h-[100%] flex flex-col justify-center`}>
      <Header/>
    

      <Main props={products}/>

      <Footer/>

    </div>
   
  );
}

export default App;
