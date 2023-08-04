import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import MyReviews from "../../pages/myreviews/myreviews";

const Header = () => {
    return (
        <div className="header shadow-xl shadow-gray-800 rounded-xl left-0">
            <div className="headerLeft px-1">
                <Link to="/IMDB-Clone"><img id="header_icon" alt="imdb" src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/IMDB_Logo_2016.svg/2560px-IMDB_Logo_2016.svg.png" /></Link>
                <Link to="/movies/popular"><span>POPULAR</span></Link>
                <Link to="/movies/top_rated"><span>Top Rated</span></Link>
                <Link to="/movies/upcoming"><span>Upcoming</span></Link>
                <Link to="/movies/Reviews"><span>My Reviews</span></Link>
            </div>
            <div className="h-10 w-10 scale">
            <label class="switch">
                <input type="checkbox" checked="checked" />
                <div class="button">
                    <div class="light"></div>
                    <div class="dots"></div>
                    <div class="characters"></div>
                    <div class="shine"></div>
                    <div class="shadow"></div>
                    </div>
                    </label>
                    </div>
        </div>
    )
}

export default Header
