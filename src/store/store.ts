import { configureStore } from '@reduxjs/toolkit'
import cartReducer from '../pages/cart/cartSlice'
import checkoutReducer from '../pages/checkout/checkoutSlice'
import homeReducer from '../pages/home/homeSlice'
import loginsignupReducer from '../pages/login/loginsignupSlice'


export const store = configureStore({
  reducer: {
        credential: loginsignupReducer,
        cart: cartReducer,
        home: homeReducer,
        checkout: checkoutReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch