import React, { useEffect, useState } from "react";
import "./Movie.css";
import { useParams } from "react-router-dom";
import { reviewsData } from "../myreviews/reviewsData";

const Movie2 = () => {
    const [currentMovieDetail, setMovie] = useState([]);
    const {id} = useParams();
    console.log(currentMovieDetail)

    useEffect(() => {
        getData()
        window.scrollTo(0,0)
    }, [])

    const getData = () => {
        reviewsData.forEach(reviews => {
            if (reviews.id == id) {
                setMovie(reviews);
            }
        })
    }

    return (
        <div className="movie">
            <div className="movie_intro">
            <img className="movie__backdrop" src={currentMovieDetail ? currentMovieDetail.backdrop_path : null} />
            </div>
        <div className="movie__detail">
            <div className="movie__detailLeft">
                <div className="movie__posterBox">
                    <img className="movie__poster" src={currentMovieDetail ? currentMovieDetail.poster_path : null} />
                </div>
            </div>
        <div className="movie_detailRight">
            <div className="movie_detailRightTop">
            <div className="movie__name">{currentMovieDetail ? currentMovieDetail.original_title : ""}</div>
            <div className="movie__tagline">{currentMovieDetail ? currentMovieDetail.tagline : ""}</div>
            <div className="movie__rating">
                            {currentMovieDetail ? currentMovieDetail.vote_average: ""} <i className="fas fa-star" />
                            <span className="movie__voteCount">{currentMovieDetail ? "(" + currentMovieDetail.vote_count + ") votes" : ""}</span>
            </div>
            <div className="movie__runtime">{currentMovieDetail ? currentMovieDetail.runtime + " mins" : ""}</div>
            <div className="movie__releaseDate">{currentMovieDetail ? "Release date: " + currentMovieDetail.release_date : ""}</div>
            <div className="movie__genres">
                {
                    currentMovieDetail && currentMovieDetail.genres
                    ?
                    currentMovieDetail.genres.map(genre => (
                        <><span className="movie_genre" id={genre.id}>{genre.name}</span></>
                    ))
                    :""
                }
            </div>
        </div>
        <div className="movie_detailRightBottom">
            <div className="synopsisText">Synopsis</div>
            <div>{currentMovieDetail ? currentMovieDetail.overview : ""}</div>
            </div>

        </div>
        </div>
        <div className="movie__links">
                <div className="movie__heading">Useful Links</div>
                {
                    currentMovieDetail && currentMovieDetail.homepage && <a href={currentMovieDetail.homepage} target="_blank" style={{textDecoration: "none"}}><p><span className="movie__homeButton movie__Button">Homepage <i className="newTab fas fa-external-link-alt"></i></span></p></a>
                }
                {
                    currentMovieDetail && currentMovieDetail.imdb_id && <a href={"https://www.imdb.com/title/" + currentMovieDetail.imdb_id} target="_blank" style={{textDecoration: "none"}}><p><span className="movie__imdbButton movie__Button">IMDb<i className="newTab fas fa-external-link-alt"></i></span></p></a>
                }
        </div>
        <div className="movie__heading">Production companies</div>
            <div className="movie__production">
                {
                    currentMovieDetail && currentMovieDetail.production_companies && currentMovieDetail.production_companies.map(company => (
                        <>
                            {
                                company.logo_path 
                                && 
                                <span className="productionCompanyImage">
                                    <img className="movie__productionComapany" src={company.logo_path} />
                                    <span>{company.name}</span>
                                </span>
                            }
                        </>
                    ))
                }
            </div>
            <div>
                <p className="text-3xl">Review</p>
                <p>Stranger Things, the Netflix original series created by the Duffer Brothers, is a captivating blend of '80s nostalgia, supernatural thrills, and heartfelt storytelling that has taken the world by storm. Set in the small town of Hawkins, Indiana, in the 1980s, the show masterfully weaves together elements of science fiction, horror, and adventure to deliver an unforgettable viewing experience. One of the show's greatest strengths lies in its exceptional ensemble cast. The young group of actors, including Finn Wolfhard, Millie Bobby Brown, Gaten Matarazzo, Caleb McLaughlin, Noah Schnapp, and Sadie Sink, bring their characters to life with remarkable depth and charisma. Their chemistry is palpable, and their performances perfectly capture the essence of friendship and the innocence of childhood. Stranger Things strikes a delicate balance between paying homage to classic '80s films and carving out its own unique identity. From the Spielbergian sense of wonder to the eerie atmosphere reminiscent of Stephen King novels, the series effortlessly transports viewers back in time while adding a fresh twist to the genre. The attention to detail in the production design, wardrobe, and soundtrack further enhance the nostalgic atmosphere, leaving viewers immersed in the world of Hawkins. The storyline is a captivating blend of mystery, suspense, and supernatural occurrences. The show introduces the Upside Down, a parallel dimension filled with terrifying creatures, and the mysterious experiments conducted by the Hawkins National Laboratory. As the characters uncover dark secrets and face otherworldly dangers, the tension builds, keeping audiences on the edge of their seats with each episode. While the supernatural elements provide an adrenaline-pumping thrill, Stranger Things excels in its ability to explore genuine human emotions and relationships. The show delves deep into themes of friendship, love, loss, and the strength of familial bonds. The heartwarming dynamic between the characters and their unwavering loyalty to one another make the show emotionally resonant, allowing viewers to connect with the story on a profound level. Stranger Things is an absolute gem that manages to capture the spirit of a bygone era while offering a fresh and exciting narrative. It's a show that appeals to both die-hard '80s enthusiasts and newcomers alike, thanks to its expertly crafted blend of genres and compelling characters. Whether you're craving nostalgia, supernatural chills, or heartfelt storytelling, Stranger Things is a must-watch that will leave you eagerly anticipating the next installment.</p>
            </div>
        </div>
    )
}

export default Movie2