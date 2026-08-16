import React, { Suspense } from "react";
import BidItem from "./BidItem";

const ActiveAuctions = ({ auctions, onAddToFavorites, favorites }) => {
  return (
    <section className="py-12">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold mb-8">Active Auctions</h2>
        <Suspense fallback={<div className="text-center">Loading auctions...</div>}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {auctions.map((item) => (
              <BidItem
                key={item.id}
                item={item}
                onAddToFavorites={onAddToFavorites}
                isFavorited={favorites.some((fav) => fav.id === item.id)}
              />
            ))}
          </div>
        </Suspense>
      </div>
    </section>
  );
};

export default ActiveAuctions;
