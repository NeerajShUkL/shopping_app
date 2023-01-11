import { Box, TextField, Typography } from "@mui/material";
import React, { useState } from "react";

interface ShippingAddres {
  fname: string;
  lname: string;
  address: string;
}

const Checkout: React.FC = () => {
  const [shippingA, setShippingA] = useState<ShippingAddres>({
    fname: "",
    lname: "",
    address: "",
  });

  const handleShippingAddress = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setShippingA({ ...shippingA, [name]: value });
  };

  return (
    <Box
      component="form"
      sx={{
        display: "flex",
        flexGrow: 1,
        m: "auto",
        marginTop: 10,
        minHeight: "70%",
        p: 3,
      }}
    >
      <div>
        <TextField
          required
          id="outlined-required"
          label="First Name"
          value={shippingA.fname}
          name="fname"
          onChange={handleShippingAddress}
        />
        <TextField
          required
          id="outlined-required"
          label="Last Name"
          value={shippingA.lname}
          name="lname"
          onChange={handleShippingAddress}
        />
        <TextField
          fullWidth
          required
          id="outlined-required"
          label="Address"
          value={shippingA.address}
          name="address"
          onChange={handleShippingAddress}
        />
      </div>
    </Box>
  );
};

export default Checkout;
