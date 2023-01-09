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

const categories: string[] = [
  "electronics",
  "jewelery",
  "men's clothing",
  "women's clothing",
];

const Home: React.FC = () => {
 const [value, setValue] = useState<string>("")


  const handleSelectedCategory = (e: SelectChangeEvent<string>, child: ReactNode) => {
    console.log(e.target.value)
    setValue(prev => e.target.value as string)
  }

  return (
    <Box sx={{ flexGrow: 1, mx: "auto", marginTop: 10, p: 3 }}>
      <Grid
        container
        sx={{ justifyContent: "space-between", width: "100%", marginBottom: 2 }}
      >
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
                value={value}
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
        <Box display="inline" text-align="Right">
          <FormControl sx={{ m: 1, width: 250 }}>
            <>
              <InputLabel id="demo-simple-select-label">
                All Category
              </InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={value}
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
    </Box>
  );
};

export default Home;
