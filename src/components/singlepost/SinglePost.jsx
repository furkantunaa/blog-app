import "./SinglePost.css";
import Photo from "../../assets/winter2.jpg";

const SinglePost = () => {
  return (
    <div className="singlepost">
      <div className="singlepostwrapper">
        <img className="singlepostimg" src={Photo} alt="" />
        <h1 className="singleposttitle">
          Create Relevant Content
          <div className="signlepostedit">
            <i className=" singleposticon  fa-regular fa-pen-to-square"></i>
            <i className="singleposticon   fa-solid fa-trash"></i>
          </div>
        </h1>
        <div className="singlepostinfo">
          <span className="singlepostautor">
            Autor:<b>Safak</b>
          </span>
          <span className="singlepostdate">1 hour ago</span>
        </div>
        <p className="singlepostdesc">
          “Do you have a design in mind for your blog? Whether you prefer a
          trendy postcard look or you’re going for a more editorial style blog -
          there’s a stunning layout for everyone.”
        </p>
      </div>
    </div>
  );
};

export default SinglePost;
