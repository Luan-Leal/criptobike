import "./index.scss";

function Card({ image, title, text }) {
  return (
    <>
      <div className="cardRiding">
        <div className="circle">
          <img src={image} alt="" />
        </div>
        <h3>{title}</h3>
        <p>{text}</p>
      </div>
    </>
  );
}

export default Card;
