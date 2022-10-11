import "./index.scss";

function Card({ text, store }) {
  return (
    <div>
      <a className="card" href="">
        <img src={store} alt="" />
        <div>
          <span>{text}</span>
          <br />
          <strong>Google Play</strong>
        </div>
      </a>
    </div>
  );
}

export default Card;
