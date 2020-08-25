import React from 'react'
import { useDrag } from 'react-dnd'


export default function CardDND({ isDragging, text }) {
  const [{ opacity }, dragRef] = useDrag({
    item: { type: "dd", text },
    collect: (monitor) => ({
      opacity: monitor.isDragging() ? 0.5 : 1
    })
  })
  return (
    <div ref={dragRef} style={{ opacity }}>
      {text}
    </div>
  )
}