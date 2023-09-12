import { createSlice } from '@reduxjs/toolkit'
import { LocalStorage } from '../utils/localStorage';

const initialState = {
    basket:  LocalStorage.isHave("basket")
}

export const basketSlice = createSlice({
  name: 'Basket',
  initialState,
  reducers: {
    increaseProductQuantity : (state,action) => {
      const itemIndex = state.basket.findIndex(item => item.id === action.payload.id);
      if (itemIndex !== -1) {
          if(state.basket[itemIndex].quantity < 10){
            state.basket[itemIndex].quantity = (state.basket[itemIndex].quantity || 1) + 1;
          }
      } 
    },
    decreaseProductQuantity : (state,action) => {
      const itemIndex = state.basket.findIndex(item => item.id === action.payload.id);
      if (itemIndex !== -1) {
        state.basket[itemIndex].quantity = (state.basket[itemIndex].quantity || 1) - 1;
        
        if (state.basket[itemIndex].quantity === 0) {
          state.basket.splice(itemIndex, 1);
        }
      }
    },
    deleteBasket: (state, action) => {
      console.log("delete ", action.payload);
      const newBasket = state.basket.filter(item => item.id !== action.payload.id);
      state.basket = newBasket; 

    },
    
   setBasket: (state, action) => {
      const itemIndex = state.basket.findIndex(item => item.id === action.payload.id);

      if (itemIndex !== -1) {
        state.basket[itemIndex].quantity = (state.basket[itemIndex].quantity || 1) + 1;
      } else {
        state.basket.push({...action.payload, quantity: 1});
      }
    },
  },
})

export const { setBasket, deleteBasket, decreaseProductQuantity,increaseProductQuantity  } = basketSlice.actions

export const  totalMoney = (basket) => {
  let total  = 0 
  for(let i = 0; i <= basket.length; i++){
    if(basket[i]?.price !== undefined){
      total +=  basket[i]?.price * basket[i]?.quantity
    }
  }
  return total
}

export const  totalQuantity = (basket) => {
  let total  = 0 
  for(let i = 0; i <= basket.length; i++){
    if(basket[i]?.price !== undefined){
      total +=  basket[i]?.quantity
    }
  }
  return total
}


export default basketSlice.reducer