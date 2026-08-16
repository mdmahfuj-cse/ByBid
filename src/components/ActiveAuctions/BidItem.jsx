import React from 'react';
import ImageWithSuspense from './ImageWithSuspense';

const BidItem = ({ item, onAddToFavorites, isFavorited }) => {
  const { title, image, currentBidPrice, timeLeft } = item;

  return (
    <div className="border rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105">
      <ImageWithSuspense src={image} alt={title} className="w-full h-56 object-cover" />
      <div className="p-4">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <div className="flex justify-between items-center mb-4">
          <p className="text-lg font-bold text-indigo-600">
            ${currentBidPrice.toFixed(2)}
          </p>
          <p className="text-sm text-gray-500">⏳ {timeLeft}</p>
        </div>
        <div className="flex justify-between items-center">
          <button className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700 transition-colors">
            Bid Now
          </button>
          <button
            onClick={() => onAddToFavorites(item)}
            disabled={isFavorited}
            className={`text-2xl transition-colors ${
              isFavorited
                ? "text-red-500 cursor-not-allowed"
                : "text-gray-400 hover:text-red-500"
            }`}
            aria-label={`Add ${title} to favorites`}
          >
            {isFavorited ? "❤️" : "♡"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default BidItem;
