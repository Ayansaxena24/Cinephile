// reviewsData.js
import Inception from "./Inception.jpg";
import InceptionPoster from "./InceptionPoster.jfif"
export const reviewsData = [
  // {
  //   id: 1,
  //   title: "The Shawshank Redemption",
  //   poster_path:
  //     "https://image.tmdb.org/t/p/w500/q6y0Go1tsGEsmtFryDOJo3dEmqu.jpg",
  //   rating: 9.3,
  //   description:
  //     "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
  // },
  // {
  //   id: 2,
  //   title: "The Godfather",
  //   poster_path:
  //     "https://image.tmdb.org/t/p/w500/rPdtLWNsZmAtoZl9PK7S2wE3qiS.jpg",
  //   rating: 9.2,
  //   description:
  //     "An organized crime dynasty's aging patriarch transfers control of his clandestine empire to his reluctant son.",
  // },
  // {
  //   id: 3,
  //   title: "The Dark Knight",
  //   poster_path:
  //     "https://image.tmdb.org/t/p/w500/1hRoyzDtpgMU7Dz4JF22RANzQO7.jpg",
  //   rating: 9.0,
  //   description:
  //     "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.",
  // },
  {
    id: 1,
    title: "Inception",
    poster_path: Inception,
    rating: 9.3,
    backdrop_path: InceptionPoster,
    description:
      "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
      id: 1,
      backdrop_path: "./images/inception_backdrop.jpg",
      poster_path: "./images/inception_poster.jpg",
      original_title: "Inception",
      tagline: "Your mind is the scene of the crime",
      vote_average: 8.5,
      vote_count: 2178,
      runtime: 148,
      release_date: "2010-07-13",
      genres: [
          {
              id: 28,
              name: "Action"
          },
          {
              id: 12,
              name: "Adventure"
          },
          {
              id: 878,
              name: "Science Fiction"
          },
      ],
      homepage: "http://inceptionmovie.warnerbros.com/",
      imdb_id: "tt1375666",
      overview: "Cobb, a skilled thief who commits corporate espionage by infiltrating the subconscious of his targets is offered a chance to regain his old life as payment for a task considered to be impossible: \"inception\", the implantation of another person's idea into a target's subconscious."
  }
  },

];
