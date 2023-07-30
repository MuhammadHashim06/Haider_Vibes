import React from 'react';
import './css/bootstrap.css';
import './Card2.css'


const Card = ({ imageSrc, title, link }) => {
  return (
    <div className="col-lg-4 col-md-6 col-sm-12">
      <div className="card" style={{ width: '100%' }}>
        <img className="card-img-top" src={imageSrc} alt="Card image cap" />
        <div className="card-body">
          <h5 className="card-title">
            <a href={link} className="card-link">{title}</a>
          </h5>
        </div>
      </div>
    </div>
  );
};

export default Card;
