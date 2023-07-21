import React from 'react'
import NavBar from '../Components/Navbar/NavBar'
import Payment from '../Components/Payment/Payment'
type Props = {}

function page({}: Props) {
  return (
    <div>
        <NavBar/>
        <Payment/>
    </div>
  )
}

export default page