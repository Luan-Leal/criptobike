import AppStore from "../../../assets/app-store-logo.svg";

import "./index.scss";

function AndroidDownloadCard() {
  return (
    <div className="border">
      <a className="card" href="">
        <img src={AppStore} alt="" />
        <p>
          Download on the <br /> <span>App Store</span>
        </p>
      </a>
    </div>
  );
}

export default AndroidDownloadCard;
