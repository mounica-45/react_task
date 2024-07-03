// Layout.js
import React from "react";
import Card from "./Card";
import FileUploadCard from "./FileUploadCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes, faFilePdf } from "@fortawesome/free-solid-svg-icons";
import "./layout.css";

const Layout = () => {
  const cardsData1 = [
    {
      title: "Recent Studies",
      items: [
        { text: "Dog bite", daysAgo: 2, status: "Completed" },
        { text: "Cat scratch", daysAgo: 1, status: "Inprogress" },
        { text: "cat bite", daysAgo: 1, status: "Completed" },
        { text: "Bird pecking", daysAgo: 7, status: "Failed" },
      ],
    },
    // Add more card data as needed
  ];

  const cardsData2 = {
    title: "Get complete flow with the design",
    subTitle: "Document Drafting",
    items: [{ text: "Pre" }],
  };

  return (
    <div className="layout">
      {/* First set of cards */}
      {cardsData1.map((card, index) => (
        <Card key={`card1_${index}`} title={card.title} items={card.items} />
      ))}

      {/* Second set of cards */}
      <div className="casflow-card">
        <h3 className="text-left">{cardsData2.title}</h3>

        {cardsData2.items.map((item, index) => (
          <div key={`card2_${index}`} className="casflow-item">
            <span className="flow-name">{item.text}</span>
          </div>
        ))}

        {/* Additional cards with specific functionality */}
        <FileUploadCard title="File Upload" />

        <h4 className="text-left">Documentation</h4>

        <div className="subcard">
          <div className="subcard-header">
            <div className="icon-and-title">
              <FontAwesomeIcon
                icon={faFilePdf}
                className="pdf-icon"
                style={{ color: "#cd5c5c" }}
              />
              <h4>Closeable Card</h4>
            </div>
            <FontAwesomeIcon icon={faTimes} className="close-icon" />
          </div>
        </div>
        <div className="subcard">
          <div className="subcard-header">
            <div className="icon-and-title">
              <FontAwesomeIcon
                icon={faFilePdf}
                className="pdf-icon"
                style={{ color: "#cd5c5c" }}
              />
              <h4>Closeable Card</h4>
            </div>
            <FontAwesomeIcon icon={faTimes} className="close-icon" />
          </div>
        </div>
        <div className="subcard">
          <div className="subcard-header">
            <div className="icon-and-title">
              <FontAwesomeIcon
                icon={faFilePdf}
                className="pdf-icon"
                style={{ color: "#cd5c5c" }}
              />
              <h4>Closeable Card</h4>
            </div>
            <FontAwesomeIcon icon={faTimes} className="close-icon" />
          </div>
        </div>
        <a style={{ textDecoration: "none", color: "black" }} href="/design">
          <button className="chartflow">Start</button>
        </a>
      </div>
    </div>
  );
};

export default Layout;
