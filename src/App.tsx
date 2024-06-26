
import Ibackend from './backend';
import Footer from './components/Footer';
import Header from './components/Header';
import Main from './components/Main';
import backend from './backend'
import Modal from './components/Modal';
import { useSelector } from 'react-redux';
import { RootState } from './store/store';


function App() {
  const state = useSelector((state:RootState) => state)


  return (
   
    <div className={`w-[100%] h-[100%] flex flex-col justify-center relative`}>
      <Header/>
    

      <Main props = {backend}/>

      <Footer/>
<div className={`absolute w-[100%] h-[100%] bg-[#000000] transition ease-out duration-300 z-50  ${state.counter.isOpenCostСalculation||state.counter.isOpenConsultation? 'visible bg-opacity-75':'bg-opacity-0 z-[-1]'} `}>
      </div>
      <Modal props={backend.HelpSearch} propsMobile={backend}/>
    </div>
   
  );
}

export default App;
