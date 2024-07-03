import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faNewspaper,
  faHome,
  faUsers,
  faCommentDots,
  faCog,
  faBell,
  faUserShield,
} from "@fortawesome/free-solid-svg-icons";
import favicon from "../images/favicon.png";
import "./navbar.css";

const Navbar = () => {
  const [activeItem, setActiveItem] = useState("Home");

  useEffect(() => {
    const path = window.location.pathname;
    if (path === "/newfeed") setActiveItem("Newsfeed");
    else if (path === "/findlawyers") setActiveItem("Find Lawyers");
    else if (path === "/connections") setActiveItem("Connections");
    else if (path === "/chats") setActiveItem("Chats");
    else if (path === "/notifications") setActiveItem("Notifications");
    else if (path === "/settings") setActiveItem("Settings");
    else if (path === "/admin") setActiveItem("Admin");
    else setActiveItem("Home");
  }, []);

  const handleClick = (item) => {
    setActiveItem(item);
  };

  return (
    <nav className="navbar">
      <ul className="navbar-menu">
        <li className="navbar-item navbar-item-left bold-item">
          <img src={favicon} alt="favicon" className="navbar-favicon" />
          DVOCASE
        </li>
        <li className="navbar-item navbar-item-center">
          <button
            className={activeItem === "Newsfeed" ? "active" : ""}
            onClick={() => handleClick("Newsfeed")}
          >
            <a
              style={{
                textDecoration: "none",
                color: activeItem === "Newsfeed" ? "white" : "black",
              }}
              href="/newfeed"
            >
              <FontAwesomeIcon icon={faNewspaper} />
              &nbsp; Newsfeed
            </a>
          </button>
        </li>
        <li className="navbar-item navbar-item-center">
          <button
            className={activeItem === "Find Lawyers" ? "active" : ""}
            onClick={() => handleClick("Find Lawyers")}
          >
            <a
              style={{
                textDecoration: "none",
                color: activeItem === "Find Lawyers" ? "white" : "black",
              }}
              href="/findlawyers"
            >
              <FontAwesomeIcon icon={faUsers} />
              &nbsp; Find Lawyers
            </a>
          </button>
        </li>
        <li className="navbar-item navbar-item-center navbar-item-home">
          <button
            className={activeItem === "Home" ? "active" : ""}
            onClick={() => handleClick("Home")}
          >
            <a
              style={{
                textDecoration: "none",
                color: activeItem === "Home" ? "white" : "black",
              }}
              href="/"
            >
              <FontAwesomeIcon icon={faHome} />
              &nbsp; Home
            </a>
          </button>
        </li>
        <li className="navbar-item navbar-item-center">
          <button
            className={activeItem === "Connections" ? "active" : ""}
            onClick={() => handleClick("Connections")}
          >
            <a
              style={{
                textDecoration: "none",
                color: activeItem === "Connections" ? "white" : "black",
              }}
              href="/connections"
            >
              <FontAwesomeIcon icon={faUsers} />
              &nbsp; Connections
            </a>
          </button>
        </li>
        <li className="navbar-item navbar-item-center">
          <button
            className={activeItem === "Chats" ? "active" : ""}
            onClick={() => handleClick("Chats")}
          >
            <a
              style={{
                textDecoration: "none",
                color: activeItem === "Chats" ? "white" : "black",
              }}
              href="/chats"
            >
              <FontAwesomeIcon icon={faCommentDots} />
              &nbsp; Chats
            </a>
          </button>
        </li>
        <li className="navbar-item navbar-item-right">
          <button
            className={activeItem === "Settings" ? "active" : ""}
            onClick={() => handleClick("Settings")}
          >
            <a
              style={{
                textDecoration: "none",
                color: activeItem === "Settings" ? "white" : "black",
              }}
              href="/settings"
            >
              <FontAwesomeIcon icon={faCog} />
            </a>
          </button>
        </li>
        <li className="navbar-item navbar-item-right">
          <button
            className={activeItem === "Notifications" ? "active" : ""}
            onClick={() => handleClick("Notifications")}
          >
            <a
              style={{
                textDecoration: "none",
                color: activeItem === "Notifications" ? "white" : "black",
              }}
              href="/notifications"
            >
              <FontAwesomeIcon icon={faBell} />
            </a>
          </button>
        </li>
        <li className="navbar-item navbar-item-right">
          <button
            className={activeItem === "Admin" ? "active" : ""}
            onClick={() => handleClick("Admin")}
          >
            <a
              style={{
                textDecoration: "none",
                color: activeItem === "Admin" ? "white" : "black",
              }}
              href="/admin"
            >
              <FontAwesomeIcon icon={faUserShield} />
            </a>
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
