import "./index.scss";

function Card({ image, distance }) {
  return (
    <div className="cardDiv">
      <div>
        <img className="nfts" src={image} alt="" />
        <div className="nftCard">
          <span>{distance} km</span>
        </div>
      </div>
    </div>
  );
}

export default Card;
