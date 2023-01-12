import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { ShippingAddres } from '../../types'

export interface CheckoutState {
      checkoutDetails: Array<ShippingAddres>
  }
  
  const initialState: CheckoutState = {
    checkoutDetails: []
  }
  
  export const checkoutSlice = createSlice({
    name: 'checkout',
    initialState,
    reducers: {
      setCheckoutDetails: (state, action: PayloadAction<ShippingAddres>) => {
          state.checkoutDetails.push(action.payload);
      }
    },
  })
  
  export const { setCheckoutDetails } = checkoutSlice.actions
  
  export default checkoutSlice.reducer