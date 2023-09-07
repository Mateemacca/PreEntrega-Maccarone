import React from 'react'
import './ItemList.css'
export default function ItemListContainer(props) {
  return (
    <div className="bg-[#111111] mt-4  flex justify-center">
      <span className="text-white gradient-text">{props.greeting}</span>
    </div>
  );
}
  
