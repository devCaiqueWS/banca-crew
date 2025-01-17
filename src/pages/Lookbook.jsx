import React from 'react';
import './style/Lookbook.css';
import { Helmet } from 'react-helmet';

const Lookbook = () => {
  const lookbookItems = [
    { id: 1, image: '/lookbook/look1.jpg', size: 'large' },
    { id: 2, image: '/lookbook/look2.jpg', size: 'medium' },
    { id: 3, image: '/lookbook/look3.jpg', size: 'small' },
    { id: 4, image: '/lookbook/look4.jpg', size: 'medium' },
    { id: 5, image: '/lookbook/look5.jpg', size: 'large' },
    { id: 6, image: '/lookbook/look6.jpg', size: 'small' },
    { id: 7, image: '/lookbook/look7.jpg', size: 'large' },
    { id: 8, image: '/lookbook/look8.jpg', size: 'medium' },
    { id: 9, image: '/lookbook/look9.jpg', size: 'small' }
  ];

  return (
    <>
      <Helmet>
        <title>BANCA | Lookbook</title>
      </Helmet>
      <div className="lookbook">
        <div className="lookbook-grid">
          {lookbookItems.map((item) => (
            <div key={item.id} className={`lookbook-item ${item.size}`}>
              <img src={item.image} alt={`Look ${item.id}`} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Lookbook;
