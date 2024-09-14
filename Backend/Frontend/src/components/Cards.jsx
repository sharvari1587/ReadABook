import React from "react";

function Cards({ item }) {
  const handleReadNowClick = () => {
    // Open the PDF link in a new tab
    window.open(
      "https://drive.google.com/file/d/1mfJqEK-0RkQvem6JRLqxLmswRsTB4yAh/view?usp=drive_link",
      "_blank"
    );
  };

  return (
    <div className="max-w-sm mx-auto mt-4 p-4">
      <div className="card w-full bg-white shadow-lg hover:shadow-2xl transform hover:scale-105 transition duration-300 dark:bg-slate-900 dark:text-white dark:border dark:border-gray-700 rounded-lg">
        {/* Image */}
        <figure className="overflow-hidden rounded-t-lg">
          <img
            src={item.image}
            alt={item.name}
            className="w-full h-48 object-cover hover:scale-110 transition-transform duration-300"
          />
        </figure>

        {/* Card Body */}
        <div className="card-body p-5">
          <h2 className="card-title text-xl font-semibold mb-2 text-gray-900 dark:text-white flex items-center">
            {item.name}
            <div className="ml-3 py-1 px-3 bg-pink-300 text-white rounded-full text-sm">
              {item.category}
            </div>
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mb-4">{item.title}</p>

          <div className="card-actions flex justify-between items-center">
            {/* Price */}
            <div className="badge badge-outline px-3 py-2 text-gray-700 dark:text-gray-300 text-lg">
              ${item.price}
            </div>
            {/* Read Now Button */}
            <button
              className="bg-pink-500 text-white px-4 py-2 rounded-full hover:bg-pink-600 transition-colors duration-300"
              onClick={handleReadNowClick}
            >
              Read Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cards;
