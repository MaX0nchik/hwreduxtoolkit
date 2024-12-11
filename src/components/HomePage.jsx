import { Alert, Button, Col, Form, Row } from "react-bootstrap";
import { setError, setFilms, setStatus } from "../redux/filmsSlice";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { Link } from "react-router-dom";
import FilmItem from "./FilmItem";


function HomePage() {
    const dispatch = useAppDispatch();
    const {films, status, error} = useAppSelector((state)=>state.films);
    const {favorites} = useAppSelector((state)=> state.favorites);

    const searchHandler = (event) => {
        dispatch(setStatus("loading"));
        dispatch(setFilms([]));
        const url = `https://www.omdbapi.com/?apikey=64405bd2&s=${event.target.value}`;
        fetch(url)
        .then(r=>r.json())
        .then(data=>{
            if (data.Response === 'False'){
                dispatch(setStatus("error"));
                dispatch(setError(data.Error));
                return;
            }
            dispatch(setFilms(data.Search));
            dispatch(setStatus(""));
        })

    }


    return(
        <div className="container py-1">
            <Row>
                <Col lg={10}>
                    <Form className="d-flex mb-3">
                        <Form.Control type="text" name="search" className="me-2" placeholder="Найти" onChange={searchHandler}/>
                        <Button variant="secondary" type="submit">Поиск</Button>
                    </Form>
                </Col>
                <Col>
                    <Link to="/favorites" className="float-end">
                        <Button variant="warning"> Избранное ({favorites.length})</Button>
                    </Link>
                </Col>
            </Row>
            {status === "loading" && <div>Загрузка...</div>}
            {status === "error" && <Alert variant="secondary">{error}</Alert>}
            {films && (
                <ul className="p-1 d-flex flex-wrap justify-content-between">
                    {films.map((film)=> <FilmItem key={film.id} film={film}/>)}
                </ul>
            )}
        </div>
    );
}

export default HomePage;