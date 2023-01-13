import React from "react";
import { filterGrid, ItemCard, productCardGrid } from "..";
import { IitemCard } from "../../types";
import { Box, Button, Grid, Paper, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import ShoppingCartCheckoutIcon from "@mui/icons-material/ShoppingCartCheckout";
import { useNavigate } from "react-router-dom";

const Cart: React.FC = () => {
  const navigate = useNavigate();

  const { cartItem, cartProduct, totalPrice } = useSelector(
    (state: RootState) => state.cart
  );
  //  console.log("cI", cartItem)
  //  console.log("cp", cartProduct)

  const warning = (
    <Box
      sx={{
        display: "flex",
        margin: "auto",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Paper elevation={0} sx={{ backgroundColor: "rgb(235, 235, 235)" }}>
        <h3>There is no Item</h3>
      </Paper>
    </Box>
  );

  const carTData =
    cartProduct &&
    cartProduct?.map((productData: IitemCard) => {
      let bool = false;
      cartItem?.map((fid: number) => {
        if (fid === productData.id) {
         return  bool = true;
        }else{
          return bool = false
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
    <Box sx={{ flexGrow: 1, m: "auto", marginTop: 10, minHeight: "70%", p: 3 }}>
      <Grid
        container
        sx={{ justifyContent: "start", alignItems: "center" }}
        spacing={2}
      >
        {cartItem?.length === 0 ? warning : carTData}
      </Grid>
      <Grid container sx={filterGrid}>
        <Box display="inline" text-align="left">
          <Typography
            // display="inline"
            // text-align="left"
            variant="h6"
            sx={{ maxWidth: 300 }}
          >
            Total: ${totalPrice}
          </Typography>
        </Box>
        <Box display="inline" text-align="Right">
          <Button
            variant="contained"
            disabled={!cartItem?.length}
            onClick={() => navigate("/cart/checkout")}
          >
            <ShoppingCartCheckoutIcon />
            Checkout
          </Button>
        </Box>
      </Grid>
    </Box>
  );
};

export default Cart;
