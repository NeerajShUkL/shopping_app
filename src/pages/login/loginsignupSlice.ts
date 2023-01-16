import { createSlice } from '@reduxjs/toolkit'

export interface LoginSignupState {
    email: string,
    password: string,
    showPass: boolean,
    loginStatus: boolean,
    userDetails: Array<>,
  }
  
  const initialState: LoginSignupState = {
    email: "",
    password: "",
    showPass: false,
    loginStatus: false,
    userDetails: []

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