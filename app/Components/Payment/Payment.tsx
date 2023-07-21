import React from 'react'
import './payment.css'
type Props = {}

function Payment({}: Props) {
  return (
    <div className='payment'>
        <h1 style={{textAlign:'center'}} >Payment Method</h1><hr/>
                <div className='contents'>
                        <h2>Toatal Amount</h2>
                </div>
            <div className="bottm">

                        <div>
                             <button className='payNowBtn'>Pay Now</button>
                        </div>
                        <div>
                             <button className='payLeterBtn'>Pay Later</button>
                        </div>
                </div>
     
                
    </div>

  )
}

export default Payment