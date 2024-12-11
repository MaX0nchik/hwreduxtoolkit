import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    film: null,
    loading: false,
}

const filmSlice = createSlice({
    name: 'film',
    initialState,
    reducers:{
        setFilm(state,action){
            state.film = action.payload
        },
        setLoading(state, action){
            state.loading = action.payload
        },
    },
});

export const {setFilm, setLoading} = filmSlice.actions;
export default filmSlice.reducer;
