import React from 'react';

interface CardProps {
  title: string;
  subtitle?: string;
  img?: string;
  url?: string;
}

const Card: React.FC<CardProps> = ({ title, subtitle, img, url }) => {
  return (
    <a href={url} target="_blank" rel="noopener noreferrer" className="card">
      {img && <img src={img} alt={title} className="card-image" />}
      <div className="card-content">
        <h4 className="card-title">{title}</h4>
        {subtitle && <p className="card-subtitle">{subtitle}</p>}
      </div>
    </a>
  );
};

export default Card;