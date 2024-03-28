import { createSlice } from '@reduxjs/toolkit';

export interface InitialState {
    isOpenCostСalculation:boolean
    isOpenConsultation:boolean
    thisModal: {
      costСalculation:string,
      consultation:string,
    }
}

const initialState:InitialState = {
  isOpenCostСalculation: false,
  isOpenConsultation: false,
  thisModal: {
    costСalculation:'costСalculation',
    consultation: 'consultation'
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
}if(data === state.thisModal.costСalculation){
  state.isOpenCostСalculation = !state.isOpenCostСalculation
  state.isOpenConsultation = false
}

    },
    
  },
});

export const { HadleIsOpenModal} = isOpenModelSlice.actions;

export default isOpenModelSlice.reducer;