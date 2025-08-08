import React, { useState } from 'react';
import './Elements.css';

const Elements = () => {
  // Track active container (dot)
  const [activeDot, setActiveDot] = useState(0);

  // Each container holds 3 cards
  const containers = [
    [
      { sale: 'FOR SALE', image: '04.png', title: 'Skyper Pool Apartment', price: '$280,000' },
      { sale: 'FOR RENT', image: '08.png', title: 'North Dillard Street', price: '$25,000' },
      { sale: 'FEATURED', image: '12.png', title: 'Eaton Garth Penthouse', price: '$180,000' },
    ],
    [
      { sale: 'FOR SALE', image: '12.png', title: 'Eaton Garth Penthouse', price: '$300,000' },
      { sale: 'FOR RENT', image: '08.png', title: 'North Dillard Street', price: '$30,000' },
      { sale: 'FEATURED', image: '04.png', title: 'Skyper Pool Apartment', price: '$200,000' },
    ],
    [
      { sale: 'FOR SALE', image: '08.png', title: 'North Dillard Street', price: '$320,000' },
      { sale: 'FOR RENT', image: '12.png', title: 'Eaton Garth Penthouse', price: '$35,000' },
      { sale: 'FEATURED', image: '04.png', title: 'Skyper Pool Apartment', price: '$250,000' },
    ],
  ];

  return (
    <div className="Elements">
      <h2>Homes For You</h2>
      <p>Based on your view history</p>

      {/* Image Container */}
      <div className="slick-list">
        {/* Show only active container */}
        {containers[activeDot].map((card, index) => (
          <div className="SEC1" key={index}>
            {/* Sale Badge */}
            <div className={index === 0 ? 'sale' : index === 1 ? 'sale2' : 'sale3'}>
              <p>{card.sale}</p>
            </div>
            {/* Second badge for "FEATURED" */}
            {card.sale === 'FEATURED' && (
              <div className="sale4">
                <p>FEATURED</p>
              </div>
            )}

            {/* Image */}
            <img src={card.image} alt={card.title} />

            {/* Title & Price */}
            <div className="title-price">
              <p className="title-text">{card.title}</p>
              <span className="price">{card.price}</span>
            </div>

            {/* Location */}
            <div className="property-location">
              <img src="Icon.png" alt="Location Icon" />
              <p>1020 Bloomingdale Ave</p>
            </div>

            {/* Property Meta */}
            <div className="property-meta">
              <div className="meta-item">
                <img src="Icon (1).png" alt="beds" />
                <span>4 Beds</span>
              </div>
              <div className="meta-item1">
                <img src="Icon (2).png" alt="baths" />
                <span>2 Baths</span>
              </div>
              <div className="meta-item2">
                <img src="Vector (1).png" alt="sqft" />
                <span>450 sqft</span>
              </div>
            </div>
          </div>
        ))}

        {/* Dots Navigation */}
        <div className="TabList">
          {containers.map((_, index) => (
            <span
              key={index}
              className={activeDot === index ? 'dot-active' : 'dot'}
              onClick={() => setActiveDot(index)}
            >
              {activeDot === index && <span className="inner-dot"></span>}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Elements;
