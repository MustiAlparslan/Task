import { configureStore } from '@reduxjs/toolkit'
import BasketSlice from "./features/BasketSlice"
import FavoritesSlice from "./features/FavoritesSlice"
import SearchListSlice from './features/SearchListSlice';

export const localStorageMiddleware = store => next => action => {
  let result = next(action);
  localStorage.setItem('basket', JSON.stringify(store.getState().basket.basket));
  localStorage.setItem('favorites', JSON.stringify(store.getState().favorites.favorites));
  return result;
};

export const store = configureStore({
  reducer: {
    basket: BasketSlice,
    favorites: FavoritesSlice,
    searchList: SearchListSlice
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(localStorageMiddleware),
})