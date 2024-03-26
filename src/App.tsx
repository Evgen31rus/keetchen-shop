
import Ibackend from './backend';
import Footer from './components/Footer';
import Header from './components/Header';
import Main from './components/Main';
import IProductsObgect from './module';
import backend from './backend'
import Modal from './components/Modal';

function App() {
  
  

  return (
   
    <div className={`w-[100%] h-[100%] flex flex-col justify-center relative`}>
      <Header/>
    

      <Main props = {backend}/>

      <Footer/>
<div className={`absolute w-[100%] h-[100%] bg-[#000000] bg-opacity-75  z-30 hidden`}>
      <Modal props={backend.HelpSearch}/>
      </div>
    </div>
   
  );
}

export default App;
