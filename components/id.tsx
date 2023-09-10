import React, { useState } from 'react';
import './id.scss';

const UniqueIdGenerator = () => {
  const generateUniqueId = () => {
    const min = 10000000000000;
    const max = 99999999999999;
    return Math.round(Math.random() * (max - min) + min);
  };

  const [uniqueId] = useState(generateUniqueId());

  return (
    <div >
      <p className='chrome'>ID: {uniqueId}</p>
      
    </div>
  );
};

export default UniqueIdGenerator;

