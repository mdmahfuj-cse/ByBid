const Favorites = ({ favorites, onRemoveFromFavorites }) => {
  // Calculate the total price of all favorited items
  const totalPrice = favorites.reduce((total, item) => total + item.currentBidPrice, 0);

  return (

    <div className="card bg-base-100 shadow-xl">
        <div className="card-body">
            <h2 className="card-title text-2xl">Favorite Items</h2>
            <div className="divider my-0"></div>
            {favorites.length === 0 ? (
            <p className="text-center text-gray-500 py-4">No items added to favorites yet.</p>
            ) : (
            <ul className="space-y-2">
                {favorites.map(item => (
                <li key={item.id} className="flex justify-between items-center p-2 rounded-lg hover:bg-base-200">
                    <div>
                    <h4 className="font-semibold">{item.title}</h4>
                    <p className="text-sm text-gray-500">${item.currentBidPrice.toFixed(2)} - {item.bidsCount} bids</p>
                    </div>
                    <button 
                    onClick={() => onRemoveFromFavorites(item)} 
                    className="text-red-500 hover:text-red-700 text-xl"
                    aria-label={`Remove ${item.title} from favorites`}
                    >
                    ❌
                    </button>
                </li>
                ))}
            </ul>
            )}
            <div className="divider my-0"></div>
            <div className="text-right mt-2">
                <p className="text-lg font-bold">Total: <span className="text-primary">${totalPrice.toFixed(2)}</span></p>
            </div>
        </div>

    </div>
  );
};

export default Favorites;
