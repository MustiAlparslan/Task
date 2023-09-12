import { createSlice } from '@reduxjs/toolkit'
import { LocalStorage } from '../utils/localStorage';

const initialState = {
    favorites: LocalStorage.isHave("favorites")
}

export const favoritesSlice = createSlice({
  name: 'Favorites',
  initialState,
  reducers: {
    deleteFavorite: (state, action) => {
      const newBasket = state.favorites.filter(item => item.id !== action.payload.id);
      state.favorites = newBasket; 

    },
    
   setFavorites: (state, action) => {
      const itemIndex = state.favorites.findIndex(item => item.id === action.payload.id);

      if (itemIndex !== -1) {
        state.favorites[itemIndex].quantity = (state.favorites[itemIndex].quantity || 1) + 1;
      } else {
        state.favorites.push({...action.payload, quantity: 1});
      }
    },
  },
})

export const { deleteFavorite, setFavorites } = favoritesSlice.actions

export default favoritesSlice.reducer