import React, { useEffect } from "react";
import { filterGrid, ItemCard, productCardGrid } from "..";
import { IitemCard, Product } from "../../types";
import { Box, Grid, Paper, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store/store";

const Cart: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();

  const { cartItem, cartProduct, totalPrice } = useSelector(
    (state: RootState) => state.cart
  );
  //  console.log("cI", cartItem)
  //  console.log("cp", cartProduct)

  const warning =  <Box
  sx={{
    display: "flex",
    margin: "auto",
    alignItems: "center",
    justifyContent: "center",
  }}
>
  <Paper elevation={0}>
    <h3>There is no Item</h3>
  </Paper>
</Box>

  const carTData =
    cartProduct &&
    cartProduct?.map((productData: IitemCard) => {
      let bool = false;
      cartItem?.map((fid: number) => {
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

  return (
    <Box sx={{ flexGrow: 1, m: "auto", marginTop: 3, p: 3 }}>
      <Grid
        container
        sx={{ justifyContent: "start", alignItems: "center" }}
        spacing={2}
      >
        {cartItem?.length === 0 ? warning : carTData }
      </Grid>
      <Grid container sx={filterGrid}>
        <Typography
          display="inline"
          text-align="left"
          variant="h6"
          sx={{ maxWidth: 300 }}
        >
          Total: ${totalPrice}
        </Typography>
        <Box display="inline" text-align="Right">
          
        </Box>
      </Grid>
    </Box>
  );
};

export default Cart;
