import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUpload } from "@fortawesome/free-solid-svg-icons";
import "./fileUploadCard.css";

const FileUploadCard = ({ title }) => {
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleFileUpload = () => {
    if (file) {
      console.log("File uploaded:", file);
      // Handle file upload logic here
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setFile(e.dataTransfer.files[0]);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  return (
    <div className="file-upload-card">
      {/* <h3>{title}</h3> */}
      <div className="upload-icon">
        <FontAwesomeIcon icon={faUpload} />
      </div>
      <div
        className="drag-and-drop"
        onDrop={handleDrop}
        onDragOver={handleDragOver}
      >
        Drag and drop a file here or{" "}
        <label className="file-upload-link">
          <input
            type="file"
            accept=".pdf, .doc, .docx, .png, .jpg, .jpeg"
            onChange={handleFileChange}
            hidden
          />
          upload a file
        </label>
      </div>
      {file && <p>Selected file: {file.name}</p>}
      {/* <button onClick={handleFileUpload}>Upload</button> */}
      <p>Max uploads: 1</p>
      <p>Accepted formats: .pdf, .doc, .docx, .png, .jpg, .jpeg</p>
    </div>
  );
};

export default FileUploadCard;
