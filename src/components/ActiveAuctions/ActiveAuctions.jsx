import bids from "../../data/bids.json";
import BidItem from "./BidItem";

const ActiveAuctions = () => {
  return (
    <section>
      <h2>Active Auctions</h2>

      <div>
        {bids.map((bid) => (
          <BidItem
            key={bid.id}
            bid={bid}
          />
        ))}
      </div>
    </section>
  );
};

export default ActiveAuctions;