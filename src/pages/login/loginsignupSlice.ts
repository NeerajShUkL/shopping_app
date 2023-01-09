import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface LoginSignupState {

  }
  
  const initialState: LoginSignupState = {
    
  }
  
  export const loginsignupSlice = createSlice({
    name: 'credential',
    initialState,
    reducers: {
      
    },
  })
  
  export const { } = loginsignupSlice.actions
  
  export default loginsignupSlice.reducer