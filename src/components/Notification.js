import React from "react";
import "./notification.css";

const Notification = () => {
  return (
    <div className="notification-container">
      <h1>Notifications</h1>
      <section className="notification-section">
        <h2>Recent Notifications</h2>
        <ul className="notification-list">
          <li className="notification-item">
            <p>
              <strong>New Message:</strong> You have received a new message from
              John Doe.
            </p>
            <span className="notification-time">2 mins ago</span>
          </li>
          <li className="notification-item">
            <p>
              <strong>System Update:</strong> Your system has been updated
              successfully.
            </p>
            <span className="notification-time">30 mins ago</span>
          </li>
          <li className="notification-item">
            <p>
              <strong>New Connection:</strong> Jane Smith has sent you a
              connection request.
            </p>
            <span className="notification-time">1 hour ago</span>
          </li>
        </ul>
      </section>
      <section className="notification-section">
        <h2>Older Notifications</h2>
        <ul className="notification-list">
          <li className="notification-item">
            <p>
              <strong>Meeting Reminder:</strong> Don't forget your meeting with
              the team tomorrow.
            </p>
            <span className="notification-time">1 day ago</span>
          </li>
          <li className="notification-item">
            <p>
              <strong>Subscription:</strong> Your subscription has been renewed.
            </p>
            <span className="notification-time">2 days ago</span>
          </li>
        </ul>
      </section>
    </div>
  );
};

export default Notification;
