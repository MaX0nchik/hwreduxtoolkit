import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    favorites: [],
}


const favoriteFilmsSlice = createSlice({
    name: 'favorites',
    initialState,
    reducers:{
        addFavorites(state, action) {
            state.favorites = [...state.favorites, action.payload];
        },
        removeFavorites(state, action){
            state.favorites = state.favorites.filter((film) => film.imdbID !== action.payload.imdbID);
        },
    },
});

export const {addFavorites, removeFavorites} = favoriteFilmsSlice.actions;
export default favoriteFilmsSlice.reducer;