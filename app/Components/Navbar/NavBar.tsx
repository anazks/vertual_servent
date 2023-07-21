import React from 'react'
import './nav.css'
import Link from 'next/link'
type Props = {}

export default function NavBar() {
  return (
    <div className='nav'>
        <div className='logo'>
            <img src='https://cdn0.iconfinder.com/data/icons/luxury-services-first-class-business-vip/273/high-class-service-003-1024.png'/>
            <div className='title'>
                <h3><b><i><Link href="/">E-SERVENT </Link> </i></b></h3>
            </div>
        </div>
    </div>
  )
}