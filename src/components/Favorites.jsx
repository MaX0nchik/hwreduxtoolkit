import React from "react";
import { Link } from "react-router-dom";
import { useAppSelector } from "../redux/hooks";
import FilmItem from "./FilmItem";


function Favorites() {
    const {favorites} = useAppSelector((state)=> state.favorites);

    return(
        <div className="container py-3">
            <div className="d-flex justify-content-between align-items-center mb-1">
                <h2>Избранное</h2>
                <Link to="/">Назад</Link>
            </div>
            <ul className="p-1 d-flex flex-wrap justify-content-between">
                {favorites.map((film)=><FilmItem key={film.imdbID} film={film}/>)}
            </ul>
        </div>
    )
}

export default Favorites;