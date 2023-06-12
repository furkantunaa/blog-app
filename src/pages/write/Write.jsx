import "./Write.css";
import Photo from "../../assets/view.jpg";
import { Link } from "react-router-dom";

const Write = () => {
  return (
    <div className="write">
      <img className="writeimg" src={Photo} alt="" />
      <div className="writeform">
        <div className="writeformgroup">
          <label htmlFor="fileInput">
            <i className="writeicon fa-solid fa-plus"></i>
          </label>
          <input type="file" id="fileInput" style={{ display: "none" }} />
          <input
            type="text"
            placeholder="Title"
            className="writeinput"
            autoFocus={true}
          />
        </div>
        <div className="writeformgroup">
          <textarea
            placeholder="tell your story..."
            type="text"
            className="writeinput writetext"
          ></textarea>
        </div>
        <button className="writesubmit">Publish</button>
      </div>
    </div>
  );
};

export default Write;
