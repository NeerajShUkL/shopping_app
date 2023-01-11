import { IitemCard, Product } from './../../types';
import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import axios from 'axios'
import { PRODUCT_API } from '../../utils/utils'

export interface CartState {
    cartItem: number[],
    cartProduct: Product[],
  }
  
  const initialState: CartState = {
    cartItem: [],
    cartProduct: []
  }
  
  console.log("icis", initialState.cartItem)

  export const fetchCartProdudctData = createAsyncThunk(
    'users/fetchCartProdudctData',
    async (id: number) => {
      const response = await axios.get(`${PRODUCT_API}/${id}`)
                       .then(res => res.data)
       return response
    }
  )

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
     },
    extraReducers: (builder) => {
      builder.addCase(fetchCartProdudctData.fulfilled, (state, action: PayloadAction<Product>) => {
        const newCartProduct = initialState.cartProduct
        // console.log("abc", newCartProduct)
        state.cartProduct = [...newCartProduct , action.payload]
      })
    },
  })
  
  export const { addCartItem, removeCartItem } = cartSlice.actions
  
  export default cartSlice.reducer