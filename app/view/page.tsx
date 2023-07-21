import React from 'react'
import './page.css'
import NavBar from '../Components/Navbar/NavBar'
import Link from 'next/link'
function page() {
  return (
    <div>
        <NavBar/>
        <div className='singleView'>
            <img src='https://images.pexels.com/photos/1633578/pexels-photo-1633578.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'/>
            <div className='bottom'>
                  <button className='view'>$350</button>
                  <button className='back'>
                    <Link href="/products">Back</Link>
                  </button>
            </div>
        </div>
        <div className='description'>
            <span>
                  <i>
                      <b>
                           Generate Lorem Ipsum placeholder text for use in your graphic, print and web layouts, and discover plugins for your favorite writing, design and blogging tools.
                      </b>
                  </i>
            </span>
        </div>
        <div className='statusBar'>
              <h2>Available</h2>
        </div>
    </div>
  )
}

export default page