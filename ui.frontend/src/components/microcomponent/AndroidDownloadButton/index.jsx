import GooglePlay from "../../../assets/google-play-logo.svg";

import "./index.scss";

function AndroidDownloadCard() {
  return (
    <div className="border">
      <a className="card" href="">
        <img src={GooglePlay} alt="" />
        <p>
          Get it on <br /> <span>Google Play</span>
        </p>
      </a>
    </div>
  );
}

export default AndroidDownloadCard;
