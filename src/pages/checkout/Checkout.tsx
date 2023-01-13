import {
  Box,
  Button,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { filterGrid } from "..";
import { AppDispatch, RootState, setCheckoutDetails } from "../../store/store";
import { ShippingAddres } from "../../types";



const Checkout: React.FC = () => {
  const [shippingDetails, setShippingDetails] = useState<ShippingAddres>({
    fname: "",
    lname: "",
    address: "",
    city: "",
    zipcode: "",
    phone: "",
    state: "",
  });

  const nevigate = useNavigate()
  const dispatch = useDispatch<AppDispatch>();

  const handleShippingAddress = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setShippingDetails({ ...shippingDetails, [name]: value });
  };

  const { cartItem} = useSelector(
    (state: RootState) => state.cart
  );

  const handleCheckoutFormSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    nevigate('/cart/checkout/payment')
    dispatch(setCheckoutDetails(shippingDetails))
  }

  return (
    <Box sx={{ flexGrow: 1, m: "auto", marginTop: 10, minHeight: "70%", p: 3 }}>
      <Grid container sx={filterGrid}>
        <Box display="inline" text-align="left">
          <Typography
            // display="inline"
            // text-align="left"
            variant="h6"
            sx={{ maxWidth: 300 }}
          >
            Checkout Details
          </Typography>
        </Box>
      </Grid>
      <Box component="form" onSubmit={handleCheckoutFormSubmit} sx={{ mt: 3, backgroundColor: "white", p: 3, }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="fname"
                  required
                  fullWidth
                  type="text"
                  id="fname"
                  value={shippingDetails.fname}
                  onChange={handleShippingAddress}
                  label="First Name"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  type="text"
                  id="lname"
                  label="Last Name"
                  name="lname"
                  autoComplete="family-name"
                  value={shippingDetails.lname}
                  onChange={handleShippingAddress}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  type="text"
                  id="address"
                  label="Address"
                  name="address"
                  autoComplete="address"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  name="city"
                  label="City"
                  type="text"
                  id="city"
                  autoComplete="new-city"
                  value={shippingDetails.city}
                  onChange={handleShippingAddress}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  name="state"
                  label="State"
                  type="text"
                  id="state"
                  autoComplete="new-state"
                  value={shippingDetails.state}
                  onChange={handleShippingAddress}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  name="zipcode"
                  label="Zipcode"
                  type="number"
                  id="zipcode"
                  autoComplete="new-zipcode"
                  value={shippingDetails.zipcode}
                  onChange={handleShippingAddress}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  name="phone"
                  label="Phone"
                  type="number"
                  id="phone"
                  autoComplete="new-phone"
                  value={shippingDetails.phone}
                  onChange={handleShippingAddress}
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              disabled={!cartItem?.length}
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Go For Payment
            </Button>
          </Box>
    </Box>
  );
};

export default Checkout;
