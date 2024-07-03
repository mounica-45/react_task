import React, { useState, useEffect } from "react";
import Card from "./home";
import "./content.css";

const Content = () => {
  const [activeTab, setActiveTab] = useState("Questions");

  useEffect(() => {
    const path = window.location.pathname;
    if (path === "/qcontact") setActiveTab("Contact");
    else if (path === "/qabout") setActiveTab("About");
    else if (path === "/content") setActiveTab("Questions");
    else setActiveTab("Home");
  }, []);

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const cardsData1 = [
    {
      title: "Recent Studies",
      items: [
        { text: "Dog bite", daysAgo: 2, status: "Completed" },
        { text: "Cat scratch", daysAgo: 1, status: "Inprogress" },
        { text: "Cat bite", daysAgo: 1, status: "Completed" },
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
      <div className="caseflo-card">
        {/* Navbar for card-2 */}
        <nav className="card-navbar">
          <ul className="navbar-nav">
            <li className="nav-item">
              <button
                className={`nav-button ${activeTab === "Home" ? "active" : ""}`}
                onClick={() => handleTabClick("Home")}
              >
                Home
              </button>
            </li>
            <li className="nav-item">
              <button
                className={`nav-button ${
                  activeTab === "Contact" ? "active" : ""
                }`}
                onClick={() => handleTabClick("Contact")}
              >
                Contact
              </button>
            </li>
            <li className="nav-item">
              <button
                className={`nav-button ${
                  activeTab === "About" ? "active" : ""
                }`}
                onClick={() => handleTabClick("About")}
              >
                About
              </button>
            </li>
            <li className="nav-item questions">
              <button
                className={`nav-button ${
                  activeTab === "Questions" ? "active" : ""
                }`}
                onClick={() => handleTabClick("Questions")}
              >
                Questions
              </button>
            </li>
          </ul>
        </nav>

        {/* Content that changes with active tab */}
        {activeTab === "Questions" && (
          <div>
            <h3 className="text-left">Questions</h3>
            <div className="buttons-container">
              <button className="add-button">By Petitioner</button>
              <button className="remove-button">By Respondent</button>
            </div>
            <div className="questions-container">
              <div className="big-question">
                <h4>
                  1. What are the main challenges faced in your current project?
                </h4>
                <p>
                  The main challenges include managing stakeholder expectations,
                  ensuring timely delivery of milestones, and integrating new
                  technologies smoothly into the existing infrastructure.
                </p>
              </div>
              <div className="big-question">
                <h4>
                  2. What are the main challenges faced in your current project?
                </h4>
                <p>
                  The main challenges include managing stakeholder expectations,
                  ensuring timely delivery of milestones, and integrating new
                  technologies smoothly into the existing infrastructure.
                </p>
              </div>
              <div className="big-question">
                <h4>
                  3. What are the main challenges faced in your current project?
                </h4>
                <p>
                  The main challenges include managing stakeholder expectations,
                  ensuring timely delivery of milestones, and integrating new
                  technologies smoothly into the existing infrastructure.
                </p>
              </div>
              <div className="big-question">
                <h4>
                  4. What are the main challenges faced in your current project?
                </h4>
                <p>
                  The main challenges include managing stakeholder expectations,
                  ensuring timely delivery of milestones, and integrating new
                  technologies smoothly into the existing infrastructure.
                </p>
              </div>
            </div>
          </div>
        )}

        {activeTab !== "Questions" && (
          <div>
            {/* <h3 className="text-left">{activeTab}</h3> */}
            {/* Add content for Home, Contact, and About tabs here */}
            {/* Example content: */}

            <div>
              <h3>{activeTab}</h3>
              {/* <div className="buttons-container">
                <button className="add-button">{activeTab}</button>
                <button className="remove-button">{activeTab}Respondent</button>
              </div> */}
              <h3 className="text-center">
                This is the {activeTab} tab content.
              </h3>
              <div className="questions-container">
                <div className="big-question">
                  <h4>
                    1. What are the main challenges faced in your current
                    project?
                  </h4>
                  <p>
                    The main challenges include managing stakeholder
                    expectations, ensuring timely delivery of milestones, and
                    integrating new technologies smoothly into the existing
                    infrastructure.
                  </p>
                </div>
                <div className="big-question">
                  <h4>
                    2. What are the main challenges faced in your current
                    project?
                  </h4>
                  <p>
                    The main challenges include managing stakeholder
                    expectations, ensuring timely delivery of milestones, and
                    integrating new technologies smoothly into the existing
                    infrastructure.
                  </p>
                </div>
                <div className="big-question">
                  <h4>
                    3. What are the main challenges faced in your current
                    project?
                  </h4>
                  <p>
                    The main challenges include managing stakeholder
                    expectations, ensuring timely delivery of milestones, and
                    integrating new technologies smoothly into the existing
                    infrastructure.
                  </p>
                </div>
                <div className="big-question">
                  <h4>
                    4. What are the main challenges faced in your current
                    project?
                  </h4>
                  <p>
                    The main challenges include managing stakeholder
                    expectations, ensuring timely delivery of milestones, and
                    integrating new technologies smoothly into the existing
                    infrastructure.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Content;
