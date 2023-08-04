import React, { useEffect, useState } from "react";
import "./Home.css";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { Link } from 'react-router-dom';
import Cards from "../../components/card/Card";
import MovieList from "../../components/movielist/MovieList";

const Home = () => {

    const [ popularMovies, setPopularMovies ] = useState([]);
    
    useEffect(() => {
        fetch("https://api.themoviedb.org/3/movie/popular?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US")
        .then(res => res.json())
        .then(data => setPopularMovies(data.results))
        // .then(data => console.log(data.results))
    }, [])

    return (
        <>
           <div className="poster">
            <Carousel
                showThumbs={false}
                autoFocus={true}
                transitionTime={30}
                infiniteLoop={true}
                showStatus={false}
            >
                {
                    popularMovies.map(movie => (
                        <Link style={{textDecoration:"none",color:"white"}} to={`/movie/${movie.id}`} >
                            <div className="posterImage">
                                <img src={`https://image.tmdb.org/t/p/original${movie && movie.backdrop_path}`} alt="movie_image"/>
                            </div>
                            <div className="posterImage_overlay">
                                <div className="posterImage_title">{movie ? movie.original_title: ""}</div>
                                <div className="posterImage_runtime">
                                    {movie ? movie.release_date : ""}
                                    <span className="posterImage_rating">
                                    {movie ? movie.vote_average :""}
                                    <i className="fas fa-star" />{" "}
                                    </span>
                                </div>
                            <div className="posterImage_description">{movie ? movie.overview : ""}</div>
                        </div>
                        </Link>
                    ))
                }
            </Carousel>
            <MovieList />
           </div>
        </>
    )
}

export default Home
