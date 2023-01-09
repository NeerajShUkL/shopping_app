import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface HomeState {

  }
  
  const initialState: HomeState = {
    
  }
  
  export const HomeSlice = createSlice({
    name: 'home',
    initialState,
    reducers: {
      
    },
  })
  
  export const { } = HomeSlice.actions
  
  export default HomeSlice.reducer