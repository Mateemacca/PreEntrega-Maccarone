import React from 'react'
import './itemslist.css'
export default function ItemList({children}) {
  return (
    <div className='grid grid-cols-3 gap-12 grid-rows-2 max-w-[1248px] mx-auto grilla'>{children}</div>
  )
}
