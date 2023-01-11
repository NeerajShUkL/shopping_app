import Navbar from "./component/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Cart, Checkout, Home, LoginPage, Profile } from "./pages";
import { Box } from "@mui/material";
import Footer from "./component/Footer";

function App() {
  return (
    <Box sx={{position: "relative", height: "100vh",}}>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route index element={<Home />} />
          <Route path="/shopping_app" element={<Home />} />
          <Route path="/credential" element={<LoginPage />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/cart/checkout" element={<Checkout />} />
        </Routes>
        <Footer />
      </BrowserRouter>
      
    </Box>
  );
}

export default App;
