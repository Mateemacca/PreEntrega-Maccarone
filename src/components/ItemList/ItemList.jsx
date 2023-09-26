import React from 'react'

export default function ItemList({children}) {
  return (
    <div className='grid grid-cols-4 gap-12 grid-rows-2 max-w-[80vw] mx-auto'>{children}</div>
  )
}
