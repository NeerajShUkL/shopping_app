import { Typography, Paper } from "@mui/material";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import React from "react";
// import { useSelector } from "react-redux";
// import { RootState } from "../store/store";

const Footer: React.FC = () => {
  // const { cartItem } = useSelector((state: RootState) => state.cart);

  return (
    <Paper
      sx={{
        position: "relative",
        bottom: 0,
        width: "100%",
      }}
      // component="footer"
      variant="outlined"
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            flexGrow: 1,
            justifyContent: "center",
            display: "flex",
            my: 1,
          }}
        >
          {/* <Link href="/">
            <Image priority src="/Logo.svg" width={75} height={30} alt="Logo" />
          </Link> */}
        </Box>

        <Box
          sx={{
            flexGrow: 1,
            justifyContent: "center",
            display: "flex",
            mb: 2,
          }}
        >
          <Typography variant="caption" color="initial">
            Copyright ©2023. [] Limited
          </Typography>
        </Box>
      </Container>
    </Paper>
  );
};

export default Footer;
