import React from 'react'
import './Banner.css'

export default function Banner() {
  return (
    <div className="scroll-images-container">
        <div className="scroll-images">
            <img  className="scroll-image"  src="https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg" alt="" />
           <img  className="scroll-image"  src="https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg" alt="" />
            <img  className="scroll-image"  src="https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
            <img className="scroll-image" src="https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
        </div>
    </div>
  )
}