import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheckCircle,
  faSpinner,
  faTimesCircle,
} from "@fortawesome/free-solid-svg-icons";
import "./card.css";

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

const Card = ({ title, items }) => {
  return (
    <div className="card">
      <h4 className="text-left">{title}</h4>
      <ul className="subcards">
        {items.map((item, index) => (
          <li key={index} className="subcard">
            <div className="item-content">
              <span className="item-text text-left">{item.text}</span>
            </div>
            <div className="item-meta">
              <span className="days-ago">{item.daysAgo} days ago</span>
              <span className={`status ${item.status}`}>
                {getStatusIcon(item.status)}
                {item.status}
              </span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Card;
