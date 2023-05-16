import React, { useEffect, useState } from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "./Card.css";
import { Link } from "react-router-dom";
import 'react-loading-skeleton/dist/skeleton.css';

const Cards = ({ movie }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1500); // for 1.5 secs
  }, []);

  if (!movie) {
    return null; // If movie is undefined or null, return null to handle the case
  }

  const { id, title, poster_path, release_date, vote_average, overview } = movie;

  return (
    <>
      {isLoading ? (
        <div className="cards">
          <SkeletonTheme baseColor="#202020" highlightColor="#444">
            <Skeleton height={300} duration={2} count={3} />
          </SkeletonTheme>
        </div>
      ) : (
        <Link
          to={`/movie/${id}`}
          style={{ textDecoration: "none", color: "white" }}
        >
          <div className="cards">
            <img
              className="cards_img"
              src={`https://image.tmdb.org/t/p/original${poster_path: ""}`}
              alt={title}
              ></img>
              <div className="cards_overlay">
              <div className="card_title">{title}</div>
              <div className="card_runtime">
              {release_date}
              <span className="card_rating">
              {vote_average}
              <i className="fas fa-star"></i>
              </span>
              </div>
              <div className="card_description">
              {overview.slice(0, 18) + "..."}
              </div>
              </div>
              </div>
              </Link>
              )}
              </>
              );
              };
              
              export default Cards;
