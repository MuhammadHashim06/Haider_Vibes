import React, { useState } from 'react';
import './css/bootstrap.css';
import './Card2.css'



const Card2 = ({ title, imageUrl, text,fileUrl }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  const handleDownload = () => {
    window.open(fileUrl);
  };

  return (
    <div className="col-lg-4 col-md-6 col-sm-12">
    <div
      className={`card ${isHovered ? 'hovered' : ''}` }
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <img className="card-img-top" src={imageUrl} alt="Card image cap" />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{text}</p>
        {isHovered && (
          <a href="#" className="btn btn-primary" onClick={handleDownload}>
            Download
          </a>
        )}
      </div>
      </div>
    </div>
  );
};

export default Card2;

