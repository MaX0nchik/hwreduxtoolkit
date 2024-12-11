import { configureStore } from "@reduxjs/toolkit";
import filmReducer from './filmSlice';
import filmsReducer from './filmsSlice';
import favoriteReducer from './favoriteFilmsSlice';

export const store = configureStore({
    reducer: {
        film: filmReducer,
        films: filmsReducer,
        favorites: favoriteReducer,
    },
});

export default store;