import { createSlice } from '@reduxjs/toolkit';

export interface InitialState {
    isOpenCostСalculation:boolean
    isOpenConsultation:boolean
    isOpenMobileMenu: boolean
    thisModal: {
      costСalculation:string,
      consultation:string,
      mobileMenu: string,
      modal:string
    }
}

const initialState:InitialState = {
  isOpenCostСalculation: false,
  isOpenConsultation: false,
  isOpenMobileMenu:false,
  thisModal: {
    costСalculation:'costСalculation',
    consultation: 'consultation',
    mobileMenu: 'MobileMenu',
    modal: 'modal'
  }
};

const isOpenModelSlice = createSlice({
  name: 'OpenModal',
  initialState,

  reducers: {
   HadleIsOpenModal: (state, actions) => {
const data:string= actions.payload
if(data === state.thisModal.consultation){
  state.isOpenConsultation = !state.isOpenConsultation
  state.isOpenCostСalculation = false
  state.isOpenMobileMenu = false
}if(data === state.thisModal.costСalculation){
  state.isOpenCostСalculation = !state.isOpenCostСalculation
  state.isOpenConsultation = false
  state.isOpenMobileMenu = false
}
if(data === state.thisModal.mobileMenu){
  state.isOpenMobileMenu = true
  state.isOpenConsultation = false
  state.isOpenCostСalculation = false
}
if(data == state.thisModal.modal){
  state.isOpenMobileMenu = false
  state.isOpenConsultation = false
  state.isOpenCostСalculation = false
}

    },
    
  },
});

export const { HadleIsOpenModal} = isOpenModelSlice.actions;

export default isOpenModelSlice.reducer;