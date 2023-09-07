import React from 'react'

export default function ItemListContainer({ greeting }) {
    return (
      <div className="bg-[#111111] mt-4  flex justify-center shadow-md">
        
        <p className="text-xl text-white font-semibold">{greeting}</p>
      </div>
    );
  }
  
