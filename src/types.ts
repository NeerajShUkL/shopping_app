export interface SignUpCredential {
    fName: string,
    lName: string,
    email: string,
    phone: string,
    address: string,
    password: string,
}

export interface LoginCredential {
    email: string,
    phone: string,
    password: string,
}

export interface Rating {
    rate: number,
    count: number,
  }
  export interface Product {
    id: number,
    title: string,
    price: string,
    category: string,
    description: string,
    image: string,
    rating: Rating,
  }
  
  export interface HomeState {
      products: Product[],
      category: string,
    }

    export interface IitemCard {
      id: number,
      addInCart: boolean,
      title: string,
      image: string,
      price: string,
    }

    export interface ShippingAddres {
      fname: string;
      lname: string;
      address: string;
      city: string;
      zipcode: number | null;
      phone: number | null;
      state: string;
    }