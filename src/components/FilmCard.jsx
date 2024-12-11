import { Link, useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { useEffect } from "react";
import { setFilm, setLoading } from "../redux/filmSlice";


function FilmCard() {
    const {id} = useParams();
    const dispatch = useAppDispatch();
    const {film, loading} = useAppSelector((state)=> state.film);

    useEffect(()=>{
        dispatch(setLoading(true));
        dispatch(setFilm(null));
        const url = `https://www.omdbapi.com/?apikey=64405bd2&i=${id}`;
        fetch(url)
        .then(r => r.json())
        .then(data=>{
            dispatch(setFilm(data));
            dispatch(setLoading(false));
        });
    }, []);

    return(
        <div className="container py-3">
            {loading && <div>Загрузка...</div>}
            {film && (
                <>
                    <div className="d-flex justfy-content-between align-items-center mb-3">
                        <h2>{film['Title']} ({film['Year']})</h2>
                        <Link to="/">Назад к списку</Link>
                    </div>
                    <div className="d-flex">
                        <img className="me-5" src={film['Poster']} alt={film['Title']}/>
                        <div className="d-flex fs-5">
                            <div className="me-3 fw-lighter">
                                <p>Режиссер:</p>
                                <p>Жанр:</p>
                                <p>Продолжительность:</p>
                                <p>Актеры:</p>
                                <p>IMDB Rating:</p>
                            </div>
                            <div>
                                <p>{film['Director']}</p>
                                <p>{film['Genre']}</p>
                                <p>{film['Runtime']}</p>
                                <p>{film['Actors']}</p>
                                <p>{film['imdbRating']}</p>
                            </div>
                        </div>
                    </div>
                </>
            )}
        </div>
    )
}

export default FilmCard;