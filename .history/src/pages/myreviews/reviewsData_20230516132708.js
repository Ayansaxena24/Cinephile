// reviewsData.js
import Inception from "./Inception.jpg";
import InceptionPoster from "./InceptionPoster.jfif"
export const reviewsData = [
  {
    id: 1,
    title: "Inception",
    poster_path: Inception,
    rating: 9.3,
    backdrop_path: InceptionPoster,
    description:
      "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
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
      production_companies: [
        {
            id: 2,
            logo_path: "/7PzJdsLGlR7oW4J0J5Xcd0pHGRg.png",
            name: "Warner Bros. Pictures",
            origin_country: "US"
        },
        {
            id: 9993,
            logo_path: "/2Tc1P3Ac8M479naPp1kYT3izLS5.png",
            name: "Legendary Pictures",
            origin_country: "US"
        },
        {
            id: 4,
            logo_path: "/fycMZt242LVjagMByZOLUGbCvv3.png",
            name: "Syncopy",
            origin_country: "US"
        }
    ],
      overview: "Cobb, a skilled thief who commits corporate espionage by infiltrating the subconscious of his targets is offered a chance to regain his old life as payment for a task considered to be impossible: \"inception\", the implantation of another person's idea into a target's subconscious."
      
  },

];
