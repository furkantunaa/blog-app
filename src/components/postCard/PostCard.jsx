import "./PostCard.css";
import Photo from "../../assets/winter-landscape-g3ca1175ea_1920.jpg";

const PostCard = () => {
  return (
    <div className="post-card">
      <img className="postImg" src={Photo} alt="" />
      <div className="postInfo">
        <div className="postCats">
          <span className="postCat">Musıc</span>
          <span className="postCat">Life</span>
        </div>
        <span className="postTitle">Create Relevant Content</span>
        <hr />
        <span className="postDate">1 hour ago</span>
      </div>
      <p className="postDesc">
        Welcome to your blog post. Use this space to connect with your readers
        and potential customers in a way that’s current and interesting. Think
        of it as an ongoing conversation where you can share updates about
        business, trends, news, and more.
      </p>
    </div>
  );
};

export default PostCard;
