interface Product {
    id: number;
    title: string;
    price: number;
  }
  
  const initialState: Product[] = [];
  
  const CartReducer = (state = initialState, action: { type: string; payload: Product }) => {
    switch (action.type) {
      case 'ADD_TO_CART':
        return [...state, action.payload];
      default:
        return state;
    }
  };
  
  export default CartReducer;
  