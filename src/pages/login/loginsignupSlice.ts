import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface LoginSignupState {
    loginStatus: boolean,
    
  }
  
  const initialState: LoginSignupState = {
    loginStatus: false,
  }
  
  export const loginsignupSlice = createSlice({
    name: 'credential',
    initialState,
    reducers: {
      setLoginStatus: (state) => {
        state.loginStatus = !initialState.loginStatus
      }
    },
  })
  
  export const {setLoginStatus } = loginsignupSlice.actions
  
  export default loginsignupSlice.reducer