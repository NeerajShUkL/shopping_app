import { IitemCard, Product } from './../../types';
import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import axios from 'axios'
import { PRODUCT_API } from '../../utils/utils'

export interface CartState {
    cartItem: Array<number>,
    cartProduct: Array<IitemCard>,
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
      clearCart: (state) => {
        state.cartItem = []
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
      clearCartProduct: (state) => {
        state.cartProduct = []
      },
      addTotalPrice: (state) => {
        const total: number = state.cartProduct?. reduce( (accumulator, item) => { return accumulator + Number(item. price); }, 0);
        state.totalPrice = Number(total.toFixed(2))
      }
      
     },
   
  })
  
  export const { addCartItem, removeCartItem, addCartProduct, removeCartProduct, addTotalPrice, clearCart, clearCartProduct } = cartSlice.actions
  
  export default cartSlice.reducer