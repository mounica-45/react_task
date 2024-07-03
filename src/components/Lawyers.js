import React from "react";
import "./Lawyers.css";

const Lawyers = () => {
  return (
    <div className="lawyers-container">
      <h4 className="text-center">This is the Lawyers Component</h4>
      <p>
        Welcome to the Lawyers section. Here you can find information about
        various legal services, notable lawyers, and recent legal news.
      </p>
      <div className="lawyer-list">
        <div className="lawyer-item">
          <h5>John Doe</h5>
          <p>
            Specializes in corporate law and has over 20 years of experience.
          </p>
        </div>
        <div className="lawyer-item">
          <h5>Jane Smith</h5>
          <p>Expert in family law and known for her compassionate approach.</p>
        </div>
        <div className="lawyer-item">
          <h5>Michael Johnson</h5>
          <p>
            Focuses on criminal defense and has a strong track record of
            acquittals.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Lawyers;
