import { createSlice, PayloadAction , createAsyncThunk} from '@reduxjs/toolkit'
import axios from 'axios'
import { HomeState } from '../../types'
import { PRODUCT_API, PRODUCT_API_FOR_CATEGORY } from '../../utils/utils'


  
  const initialState: HomeState = {
    products: [],
    category: "",
  }

  // export const fetchProdudctData = createAsyncThunk()
  export const fetchProdudctData = createAsyncThunk(
    'users/fetchProdudctData',
    async () => {
      const response = await axios.get(PRODUCT_API)
                       .then(res => res.data)
       return response
    }
  )

  export const fetchProdudctDataCategory = createAsyncThunk(
    'users/fetchProdudctDataCategory',
    async (category: string) => {
      const response = await axios.get(`${PRODUCT_API_FOR_CATEGORY}${category}`)
                       .then(res => res.data)
       return response
    }
  )
  
  export const HomeSlice = createSlice({
    name: 'home',
    initialState,
    reducers: { 
        setCategory: (state, action: PayloadAction<string>) => {
          state.category = action.payload
        }
    },
    extraReducers: (builder) => {
      builder.addCase(fetchProdudctData.fulfilled, (state, action) => {
        state.products = (action.payload)
      })
      builder.addCase(fetchProdudctDataCategory.fulfilled, (state, action) => {
        state.products = (action.payload)
      })
    },
  })
  
  export const { setCategory } = HomeSlice.actions
  
  export default HomeSlice.reducer