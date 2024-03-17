import './App.css';
import backend from './backend';
import Header from './components/Header';
import Main from './components/Main';
import IProductsObgect from './module';

function App() {
  
  const products:IProductsObgect[]= backend[0].products

  return (
   
    <div className={`w-[100%] h-[100%] flex flex-col justify-center`}>
      <Header/>
    

      <Main props={products}/>

    </div>
   
  );
}

export default App;
