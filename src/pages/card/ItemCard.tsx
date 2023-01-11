import {
  Card,
  CardActionArea,
  CardMedia,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import RemoveShoppingCartIcon from '@mui/icons-material/RemoveShoppingCart';
import { useDispatch, useSelector } from "react-redux";
import { addCartItem, addCartProduct, addTotalPrice, AppDispatch, removeCartItem, removeCartProduct, RootState } from "../../store/store";
import { IitemCard } from "../../types";
// import { useEffect } from "react";

const priceStack = {
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
  height: 30,
  p: 2,
};
const ItemCard = (props: IitemCard) => {
  const { id,addInCart, image, price, title } = props;

  const dispatch = useDispatch<AppDispatch>();

    const {cartItem, cartProduct } = useSelector((state: RootState) => state.cart);

    // console.log("cI", cartItem)
    //  console.log("cp", cartProduct)

  const handleCartAddItem = () => {
    console.log("cI", cartItem)
    if(addInCart){
      dispatch(removeCartItem(id));
      dispatch(removeCartProduct(id));
      dispatch(addTotalPrice());
      
    }else {
      dispatch(addCartItem(id));
      dispatch(addCartProduct(props));
      dispatch(addTotalPrice());
    }
  }

  // useEffect(() => {
  //   if(cartItem){
  //     cartItem?.map((id: number) => dispatch(fetchCartProdudctData(id)) )
  //   }

  // },[cartItem])

  return (
    <Card sx={{ maxWidth: 300, margin: 'auto', p: 1 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          sx={{
            width: "100%",
            height: 280,
            objectFit: "contain",
          }}
          image={image}
          alt="green iguana"
          // onClick={handleMovieCardDetail}
        />
        <Typography sx={priceStack}>  {title?.length <= 18
              ? title
              : title?.substring(0, 25) + "..."} </Typography>
        <Stack sx={priceStack}>
          <Typography
            display="inline"
            text-align="left"
            variant="h6"
            sx={{ maxWidth: "50%" }}
          >
            ${price}
          </Typography>
          <IconButton
            aria-label="add to favorites"
            sx={{
              maxWidth: "30%",

              borderRadius: 1,
            }}

            onClick={handleCartAddItem}
          >
            {addInCart? <RemoveShoppingCartIcon />:  <AddShoppingCartIcon />}
          </IconButton>
        </Stack>
      </CardActionArea>
    </Card>
  );
};

export default ItemCard;
