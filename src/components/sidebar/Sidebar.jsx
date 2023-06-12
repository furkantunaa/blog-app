import "./Sidebar.css";

const Sidebar = () => {
  return (
    <div className="Sidebar">
      <div className="SidebarItem">
        <span className="SidebarTitle">ABOUT ME</span>
        <img
          className="SidebarImg"
          src="https://images.unsplash.com/photo-1528738716593-1306c2b538ec?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8d29tYW4lMjBmbG93ZXJzfGVufDB8fDB8fA%3D%3D&w=1000&q=80"
          alt=""
        />
        <p>
          Writing a blog is a great way to position yourself as an authority in
          your field and captivate your readers’ attention. Do you want to
          improve your site’s SEO ranking? Consider topics that focus on
          relevant keywords and relate back to your website or business. You can
          also add hashtags (#vacation #dream #summer) throughout your posts to
          reach more people, and help visitors search for relevant content.
          Blogging gives your site a voice, so let your business’ personality
          shine through. Choose a great image to feature in your post or add a
          video for extra engagement. Are you ready to get started? Simply
          create a new post now.
        </p>
      </div>
      <div className="SidebarItem">
        <span className="SidebarTitle">CATEGORIES</span>
        <ul className="SideBarList">
          <li className="SidebarListItem">Lıfe</li>
          <li className="SidebarListItem">Musıc</li>
          <li className="SidebarListItem">Style</li>
          <li className="SidebarListItem">Sport</li>
          <li className="SidebarListItem">Tech</li>
          <li className="SidebarListItem">Cinema</li>
        </ul>
      </div>
      <div className="SidebarItem">
        <span className="SidebarTitle">FOLLOW US</span>
        <div className="SidebarSocial">
          <i className="SidebarIcon fa-brands fa-facebook-f"></i>
          <i className="SidebarIcon fa-brands fa-twitter"></i>
          <i className="SidebarIcon fab fa-pinterest-square"></i>
          <i className="SidebarIcon fab fa-instagram-square"></i>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
