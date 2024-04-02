import { createSlice } from '@reduxjs/toolkit';

export interface InitialState {
isValidForm:boolean
ValidContent:{
    number:number
}
}

const initialState:InitialState = {
    isValidForm: false,
    ValidContent:{
        number:0
    }
}

const validFormSlice = createSlice({
  name: 'OpenModal',
  initialState,

  reducers: {
   HadleIsSearchForm: (state, actions) => {
const data:number= actions.payload
state.isValidForm = true
state.ValidContent.number=data
  }
},
});

export const { HadleIsSearchForm} = validFormSlice.actions;

export default validFormSlice.reducer;