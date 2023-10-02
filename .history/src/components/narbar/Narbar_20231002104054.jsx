import "./narbar.scss";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsIcon from "@mui/icons-material/Notifications";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { useState } from "react";
import { Link } from "react-router-dom";

const Narbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  window.onscroll = () => {
    setIsScrolled(window.pageYOffset === 0 ? false : true);
    return () => (window.onscroll = null);
  };
  return (
    <div className={isScrolled ? "narbar scrolled" : "narbar"}>
      <div className="container">
        <div className="left">
          <span className="logo">TheANIME</span>
          <span>Homepage</span>
          <span>Series</span>
          <span>Movies</span>
          <Link to="/register">
            <span>Sign up</span>
          </Link>
          <span>Sign in</span>
        </div>
        <div className="right">
          <SearchIcon className="icon" />
          <span>KID</span>
          <NotificationsIcon className="icon" />
          <img
            src="https://thotinhbuon.com/wp-content/uploads/2016/10/tho-tinh-hoang-hon-buon-tho-tam-trang-co-don-luc-xe-chieu-2.jpg"
            alt=""
          />
          <div className="profile">
            <ArrowDropDownIcon className="icon" />
            <div className="options">
              <span>Settings</span>
              <span>Logout</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Narbar;
