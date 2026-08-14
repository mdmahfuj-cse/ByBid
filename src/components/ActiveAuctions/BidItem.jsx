const BidItem = ({ bid }) => {
  return (
    <div>
      <img src={bid.image} alt={bid.title} />

      <h3>{bid.title}</h3>

      <p>${bid.currentBidPrice}</p>

      <p>{bid.timeLeft}</p>

      <p>{bid.bidsCount} bids</p>

      <button>
        ❤️ Bid Now
      </button>
    </div>
  );
};

export default BidItem;