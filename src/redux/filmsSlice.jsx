import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    films:[],
    status: '',
    error:'',
}

const filmsSlice = createSlice({
    name: "films",
    initialState,
    reducers:{
        setFilms(state,action){
            state.films = action.payload;
        },
        setStatus(state,action){
            state.status = action.payload;
        },
        setError(state,action){
            state.error = action.payload;
        },
    },
});

export const {setFilms, setStatus, setError} = filmsSlice.actions;
export default filmsSlice.reducer;