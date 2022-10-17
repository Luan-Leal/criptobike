import brazil from "../../../assets/brasil.svg";
import usa from "../../../assets/usa.svg";
import "./index.scss";

function Modal() {
  return (
    <div className="modal">
      <div className="modalContent">
        <div className="flag">
          <a href="">
            <img src={brazil} alt="" />
            <p>Português (BR)</p>
          </a>
          <a href="">
            <img src={usa} alt="" />
            <p>English (EN)</p>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Modal;
