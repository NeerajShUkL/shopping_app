import { useEffect } from "react";
import {
  Box,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  Typography,
} from "@mui/material";
import { ReactNode, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  AppDispatch,
  fetchCartProdudctData,
  fetchProdudctData,
  fetchProdudctDataCategory,
  RootState,
  setCategory,
} from "../../store/store";
import { Product } from "../../types";
import ItemCard from "../card/ItemCard";
import { categories, filterGrid, productCardGrid } from "..";

const Home: React.FC = () => {
  // const [value, setValue] = useState<string>("");

  const dispatch = useDispatch<AppDispatch>();

  const { products, category } = useSelector((state: RootState) => state.home);
  const { cartItem, cartProduct } = useSelector(
    (state: RootState) => state.cart
  );

  console.log("cI", cartItem);
  console.log("cp", cartProduct);

  const handleSelectedCategory = (
    e: SelectChangeEvent<string>,
    child: ReactNode
  ) => {
    dispatch(setCategory(e.target.value as string));
  };

  // console.log("cat", category)

  useEffect(() => {
    if (category !== "") {
      dispatch(fetchProdudctDataCategory(category));
    } else {
      dispatch(fetchProdudctData());
    }
  }, [category]);

  useEffect(() => {
    if (cartItem) {
      cartItem.map((id: number) => dispatch(fetchCartProdudctData(id)));
    }
  }, [cartItem]);

  const cardContainer =
    products &&
    products?.map((productData: Product) => {
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

  console.log("products", products);
  return (
    <Box sx={{ flexGrow: 1, m: "auto", marginTop: 3, p: 3 }}>
      <Grid container sx={filterGrid}>
        <Typography
          display="inline"
          text-align="left"
          variant="h6"
          sx={{ maxWidth: 300 }}
        >
          {/* {Category} */}All Products
        </Typography>
        <Box display="inline" text-align="Right">
          <FormControl sx={{ m: 1, width: 250 }}>
            <>
              <InputLabel id="demo-simple-select-label">
                All Category
              </InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={category}
                label="Release Year"
                onChange={handleSelectedCategory}
              >
                {categories.map((category) => {
                  return (
                    <MenuItem key={category} value={category}>
                      {category}
                    </MenuItem>
                  );
                })}
              </Select>
            </>
          </FormControl>
        </Box>
      </Grid>
      <Grid
        container
        sx={{ justifyContent: "center", alignItems: "center" }}
        spacing={2}
      >
        {cardContainer}
      </Grid>
    </Box>
  );
};

export default Home;
