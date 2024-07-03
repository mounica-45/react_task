import React from "react";
import "./Connections.css";

const Connections = () => {
  return (
    <div className="connections-container">
      <h4 className="text-center">This is the Connections Page</h4>
      <p>
        Welcome to the Connections section. Here you can find information about
        professional networks, upcoming networking events, and resources to help
        you build your connections.
      </p>
      <div className="connection-list">
        <div className="connection-item">
          <h5>Networking Event: Tech Meetup</h5>
          <p>
            Join us for a networking event focused on the latest trends in
            technology. Date: July 15th, 2024.
          </p>
        </div>
        <div className="connection-item">
          <h5>Professional Network: LinkedIn</h5>
          <p>
            Connect with professionals in your field and stay updated with
            industry news on LinkedIn.
          </p>
        </div>
        <div className="connection-item">
          <h5>Webinar: Building Effective Connections</h5>
          <p>
            Learn how to build and maintain professional relationships in this
            upcoming webinar. Date: August 5th, 2024.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Connections;
