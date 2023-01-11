import { IitemCard, Product } from './../../types';
import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import axios from 'axios'
import { PRODUCT_API } from '../../utils/utils'

export interface CartState {
    cartItem: number[],
    cartProduct: IitemCard[],
    totalPrice: number,
  }
  
  const initialState: CartState = {
    cartItem: [],
    cartProduct: [],
    totalPrice: 0,
  }
  
  console.log("icis", initialState.cartItem)


  export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
      addCartItem: (state, action: PayloadAction<number>) => {
        console.log("ciinS", action.payload)
        state.cartItem?.push(action.payload)
      },
      removeCartItem: (state, action: PayloadAction<number>) => {
        console.log("ciinS", action.payload)
        state.cartItem?.splice(
          state.cartItem?.findIndex((fid: number) => fid === action.payload),
          1
        );
      },
      addCartProduct: (state, action: PayloadAction<IitemCard>) => {
        console.log("ciinS", action.payload)
        state.cartProduct?.push(action.payload)
      },
      removeCartProduct: (state, action: PayloadAction<number>) => {
        console.log("ciinS", action.payload)
        state.cartProduct?.splice(
          state.cartProduct?.findIndex((fid: IitemCard) => fid.id === action.payload),
          1
        );
      },
      addTotalPrice: (state) => {
        const total: number = state.cartProduct?. reduce( (accumulator, item) => { return accumulator + Number(item. price); }, 0);
        state.totalPrice = Number(total.toFixed(2))
      }
      
     },
   
  })
  
  export const { addCartItem, removeCartItem, addCartProduct, removeCartProduct, addTotalPrice } = cartSlice.actions
  
  export default cartSlice.reducer