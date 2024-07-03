import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTimes,
  faArrowLeft,
  faFilePdf,
} from "@fortawesome/free-solid-svg-icons";
import "./home.css";

const Home = () => {
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
      <h4 className="text-left">
        <span className="upload-heading">Uploads</span>&emsp;
        <span className="upload-count">4/5</span>
      </h4>

      {/* Card 1 with subcards */}
      <div className="card1">
        {/* Example subcards */}
        <div className="subcard">
          <FontAwesomeIcon
            icon={faFilePdf}
            className="pdf-icon"
            style={{ color: "#cd5c5c" }}
          />
          Subcard Title 2.pdf
        </div>
        <div className="subcard">
          <FontAwesomeIcon
            icon={faFilePdf}
            className="pdf-icon"
            style={{ color: "#cd5c5c" }}
          />
          Subcard Title.pdf
        </div>
        <div className="subcard">
          <FontAwesomeIcon
            icon={faFilePdf}
            className="pdf-icon"
            style={{ color: "#cd5c5c" }}
          />
          Subcard.pdf
        </div>
        <div className="subcard">
          <FontAwesomeIcon
            icon={faFilePdf}
            className="pdf-icon"
            style={{ color: "#cd5c5c" }}
          />
          card.pdf
        </div>
      </div>
    </div>
  );
};

export default Home;
