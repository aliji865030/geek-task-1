// store.js
import { createStore, combineReducers } from 'redux';

// Initial state
const initialProductsState = {
  products: [
    { id: 1, name: 'Product 1', price: 100 },
    { id: 2, name: 'Product 2', price: 200 },
    { id: 3, name: 'Product 3', price: 300 },
  ],
  cart: []
};

// Reducer
const productsReducer = (state = initialProductsState, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      const existingItem = state.cart.find(item => item.id === action.payload.id);
      if (existingItem) {
        return {
          ...state,
          cart: state.cart.map(item => 
            item.id === action.payload.id ? { ...item, quantity: item.quantity + 1 } : item
          )
        };
      } else {
        return {
          ...state,
          cart: [...state.cart, { ...action.payload, quantity: 1 }]
        };
      }
    case 'REMOVE_FROM_CART':
      const itemToRemove = state.cart.find(item => item.id === action.payload);
      if (itemToRemove.quantity > 1) {
        return {
          ...state,
          cart: state.cart.map(item =>
            item.id === action.payload ? { ...item, quantity: item.quantity - 1 } : item
          )
        };
      } else {
        return {
          ...state,
          cart: state.cart.filter(item => item.id !== action.payload)
        };
      }
    default:
      return state;
  }
};

// Combine reducers
const rootReducer = combineReducers({
  productsState: productsReducer
});

// Create store
const store = createStore(rootReducer);

export default store;
