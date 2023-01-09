import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface CartState {

  }
  
  const initialState: CartState = {
    
  }
  
  export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
      
    },
  })
  
  export const { } = cartSlice.actions
  
  export default cartSlice.reducer