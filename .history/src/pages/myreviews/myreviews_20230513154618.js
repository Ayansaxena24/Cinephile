import React from "react";
import { Link } from "react-router-dom";
import reviewsData from "./myreviews";

const MyReviews = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="sm:flex sm:items-center sm:justify-between">
            <h1 className="text-3xl font-bold leading-tight text-gray-900">
              My Reviews
            </h1>
            <div className="mt-4 flex sm:mt-0 sm:ml-4">
              <Link
                to="/"
                className="ml-3 inlin-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Back to Home
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
        <div className="bg-white overflow-hidden shadow-xl sm:rounded-lg">
          <div className="px-4 py-5 sm:p-6">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
              {reviewsData.map((review) => (
                <div key={review.id}>
                  <div className="bg-white overflow-hidden shadow-lg rounded-lg h-full">
                    <img
                      className="h-64 w-full object-cover"
                      src={review.poster_path}
                      alt={`${review.title} Poster`}
                    />
                    <div className="p-6">
                      <h2 className="text-2xl font-bold leading-7 text-gray-900 mb-4">
                        {review.title}
                      </h2>
                      <div className="text-gray-700 text-base mb-4">
                        {review.description}
                      </div>
                      <div className="flex items-center">
                        <svg
                          className="w-5 h-5 text-yellow-400 mr-2"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 1l2.928 5.66L19 7.316l-4.11 4.243L15.764 19 10 15.46 4.236 19l1.875-7.44L1 7.316l5.072-.656L10 1z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <span className="font-bold text-gray-900">
                          {review.rating}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyReviews;
