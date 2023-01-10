import React, { useEffect } from 'react'
import { ItemCard, productCardGrid } from '..';
import { Product } from '../../types';
import {
  Box,
  Grid,
} from "@mui/material";
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, fetchCartProdudctData, RootState } from '../../store/store';

const Cart: React.FC = () => {

  const dispatch = useDispatch<AppDispatch>();

    const {cartItem, cartProduct } = useSelector((state: RootState) => state.cart);
     console.log("cI", cartItem)
     console.log("cp", cartProduct)

  const carTData =
  cartProduct &&
  cartProduct?.map((productData: Product) => {
    let bool = false;
      cartItem.map((fid: number) => {
          if (fid === productData.id) {
            bool = true;
          }
        });
    return (
      <Grid
        sx={productCardGrid}
        item
        xs={12}
        sm={5}
        md={3}
        key={productData.id}
      >
        <ItemCard
          id={productData.id}
          addInCart={bool}
          title={productData.title}
          image={productData.image}
          price={productData.price}
        />
      </Grid>
    );
  });
  useEffect(() => {
    if(cartItem){
      cartItem.map((id: number) => dispatch(fetchCartProdudctData(id)) )
    }

  },[cartItem])
  return (
    <Box sx={{ flexGrow: 1, m: "auto", marginTop: 3, p: 3 }}>
    <Grid
      container
      sx={{ justifyContent: "center", alignItems: "center" }}
      spacing={2}
    >
      {carTData}
    </Grid>
  </Box>
  )
}

export default Cart