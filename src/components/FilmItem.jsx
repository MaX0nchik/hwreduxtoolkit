import { useSelector } from "react-redux";
import { useAppDispatch } from "../redux/hooks";
import { addFavorites, removeFavorites } from "../redux/favoriteFilmsSlice";
import { Card, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";


function FilmItem({film}){
    const dispatch = useAppDispatch();
    const {favorites} = useSelector((state)=>state.favorites);

    const addToFavorites = () => {
        dispatch(addFavorites(film));
    }

    const removeFromFavorites = () => {
        dispatch(removeFavorites(film));
    }

    const isInFavorites = () => {
        return favorites.includes(film);
    }


    return(
        <li className="d-flex list-item mb-5">
            <Card className="w-100">
                <Card.Body className="mb-3 p-1">
                    <Row style={{height: '200px'}}>
                        <Col lg={3}>
                            <Card.Img className="me-5 list-img" src={film.Poster} alt={film.Title}/>
                        </Col>
                        <Col className="d-flex flex-column justify-content-between align-items-center">
                            <div>
                                <Card.Title>{film.Title}</Card.Title>
                                <Card.Text>{film.Year}</Card.Text>
                            </div>
                            <div className="w-100 d-flex justify-content-between align-items-center">
                                {isInFavorites() ? <span className="material-icons favorites" onClick={removeFromFavorites}>favorite</span>
                                :<span className="material-icons favorites" onClick={addToFavorites}>favorite_border</span>}
                                <Link className="me-2" to={`/movies/${film.imdbID}`}>
                                    Детали
                                </Link>
                            </div>
                        </Col>
                    </Row>
                </Card.Body>
            </Card>
        </li>
    )
}

export default FilmItem;