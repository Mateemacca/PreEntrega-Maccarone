import React, { useState } from 'react';
import './contador.css';

export default function Contador({ quantity, setQuantity, stock }) {
  const handleCountSumar = () => {
    if (quantity < stock) {
      setQuantity(quantity + 1);
    }
  };

  const handleCountRestar = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  }

  const maximoClass = quantity === stock ? 'maximo' : '';
  const minimoClass = quantity === 1 ? 'maximo' : '';

  return (
    <div className="items-center text-center mr-4 my-auto">
      <button
        type=""
        className={`${minimoClass} countBtn text-white font-bold mr-2 active:bg-gray-800`}
        onClick={handleCountRestar}
      >
        -
      </button>
      <span
        value={quantity}
        onInput={(e) => setQuantity(parseInt(e.target.innerText, 10))}
        className='inline-block p-0 text-center w-auto font-bold dark:text-black'
      >
        {quantity}
      </span>
      <button
        type=""
        id="sumarbtn"
        className={`${maximoClass} countBtn text-white font-bold ml-2 active:bg-gray-800`}
        onClick={handleCountSumar}
      >
        +
      </button>
    </div>
  );
}
