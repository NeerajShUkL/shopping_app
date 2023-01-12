export {default as Profile} from './profile/Profile';
export {default as LoginPage} from './login/LoginPage';
export {default as SignupPage} from './login/SignupPage';

export {default as Home} from './home/Home';
export {default as Checkout} from './checkout/Checkout';
export {default as Payment} from './checkout/Payment';
export {default as Cart} from './cart/Cart';
export {default as ItemCard} from './card/ItemCard';

// CUSTOM CSS
export const categories: string[] = [
    "electronics",
    "jewelery",
    "men's clothing",
    "women's clothing",
  ];
  
  export const filterGrid = {
    justifyContent: "space-between",
    width: "100%",
    marginTop: 5,
    p: 2,
    alignItems: "center",
    backgroundColor: "white",
    borderRadius: 1.5,
  };
  
 export const productCardGrid = {
    alignItems: "center",
    justifyContent: "space-between",
    // margin: "auto",
    my: 3,
  };