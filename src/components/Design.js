import React from "react";
import Card from "./Data";
import "./Design.css";

const Design = () => {
  const cardsData1 = [
    {
      title: "Recent Studies",
      items: [
        {
          text: "consectetur adipiscing elit",
          daysAgo: 2,
          status: "Completed",
        },
        {
          text: "Lorem ipsum dolor sit amet",
          daysAgo: 1,
          status: "Inprogress",
        },
      ],
    },
    // Add more card data as needed
  ];

  const cardsData2 = {
    title: "Get complete flow with the design",
    subTitle: "Document Drafting",
    items: [{ text: "Pre" }, { text: "Post" }],
  };

  const stages = ["Start", "Middle", "Alignment", "Center", "End", "Stop"];
  return (
    <div className="layout">
      {/* First set of cards */}
      {cardsData1.map((card, index) => (
        <Card key={`card1_${index}`} title={card.title} items={card.items} />
      ))}

      {/* Second set of cards */}
      <div className="caseflow-card">
        <div className="caseflow-container">
          <h4 className="text-left">{cardsData2.title}</h4>
          <h4 className="text-left" style={{ color: "blue" }}>
            {cardsData2.subTitle}
          </h4>
          <h4 className="text-left">
            <span className="stage-dot"></span> CaseFlow
          </h4>
          {cardsData2.items.map((item, index) => (
            <div key={`card2_${index}`} className="caseflow-item">
              <span className="flow-name">{item.text}</span>
            </div>
          ))}
          <h4 className="text-left">
            <span className="stage-dot"></span> Documentation
          </h4>
          {cardsData2.items.map((item, index) => (
            <div key={`card2_${index}`} className="caseflow-item">
              <span className="flow-name">{item.text}</span>
            </div>
          ))}
          <h4 className="text-left">
            <span className="stage-dot"></span> Applications
          </h4>
          {cardsData2.items.map((item, index) => (
            <div key={`card2_${index}`} className="caseflow-item">
              <span className="flow-name">{item.text}</span>
            </div>
          ))}
          <div className="stage-line"></div>
        </div>
      </div>
      <div className="chartflow-card">
        <div className="stages-container">
          <div className="stage-line"></div>
          {stages.map((stage, index) => (
            <div className="stage" key={index}>
              <div
                className={`stage-dot ${
                  stage === "Start" || stage === "Middle" ? "filled" : ""
                }`}
              ></div>
              <div className="stage-text">{stage}</div>
            </div>
          ))}
          <a style={{ textDecoration: "none", color: "black" }} href="/content">
            <button className="chartflow-button">Continue</button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Design;
