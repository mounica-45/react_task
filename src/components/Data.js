import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheckCircle,
  faSpinner,
  faTimesCircle,
  faArrowLeft,
} from "@fortawesome/free-solid-svg-icons";
import "./home.css";

const Data = ({ title, items }) => {
  const getStatusIcon = (status) => {
    switch (status.toLowerCase()) {
      case "completed":
        return (
          <FontAwesomeIcon
            icon={faCheckCircle}
            className="status-icon completed-icon"
          />
        );
      case "inprogress":
        return (
          <FontAwesomeIcon
            icon={faSpinner}
            className="status-icon inprogress-icon"
          />
        );
      case "failed":
        return (
          <FontAwesomeIcon
            icon={faTimesCircle}
            className="status-icon failed-icon"
          />
        );
      default:
        return null;
    }
  };
  const cardsData1 = [];

  const cardsData2 = {
    title: "Get complete flow with the design",
    subTitle: "Document Drafting",
    items: [{ text: "Pre" }],
  };

  const handleBackToHome = () => {
    // Logic for navigating back to home
    console.log("Navigating back to home...");
  };

  return (
    <div className="card">
      <div className="back-to-home-container">
        <a style={{ textDecoration: "none", color: "black" }} href="/">
          <FontAwesomeIcon icon={faArrowLeft} className="back-icon" />
        </a>
        <a style={{ textDecoration: "none", color: "black" }} href="/">
          <button className="back-to-home" onClick={handleBackToHome}>
            Back to Home
          </button>
        </a>
      </div>

      <h3 className="text-left">Given Information</h3>
      <hr />

      {/* Second heading with content */}
      <h3 className="text-left">Text entred</h3>

      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec purus
        feugiat, molestie ipsum et, consequat nibh. Suspendisse potenti.
      </p>
      <hr />

      {/* Third heading */}

      {/* Card 1 with subcards */}

      <h4 className="text-left">{title}</h4>
      <ul className="subcards">
        {items.map((item, index) => (
          <li key={index} className="subcard">
            <div className="item-meta">
              <span className="days-ago">{item.daysAgo} days ago</span>
              <span className={`status ${item.status}`}>
                {getStatusIcon(item.status)}
                {item.status}
              </span>
            </div>
            <div className="item-content">
              <span
                className="item-text text-center"
                style={{ color: "blue", display: "block", textAlign: "center" }}
              >
                {item.text}
              </span>
            </div>
            <div className="item-content">
              <span className="item-text text-left">10mins</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Data;
