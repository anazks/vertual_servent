import './menu.css'
import { url } from 'inspector'
import Link from 'next/link'
const API_URL = 'https://anasksunil.pythonanywhere.com/ViewCategory';
import axios from 'axios';
import  { JSXElementConstructor, PromiseLikeOfReactNode, ReactElement, ReactNode, ReactPortal, useEffect } from 'react'

const   getData = async()=>{
    try {
    const response = await axios.get(API_URL);
        // console.log(response.data,"---------")
        return response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}

getData();
    
 const  Menu=async()=> {
     const data = await getData();
    console.log(data,"0000")
  return (
    <div className='menu'>
   
   {
    data.map((item: { foodcategory_name: string;id:number })=>(
       <>
              {/* <div className='card' style={{ backgroundImage: `url(https://anasksunil.pythonanywhere.com/${item.category_image})` }}> */}
              <Link href={{pathname:"/products", query : { id: item.id } }}>
              
              <div className='card'>
              <img src={`https://anasksunil.pythonanywhere.com/${item.category_image}`} alt="" />

                        <div className="centered">
                            <h3>{item.foodcategory_name}</h3>
                        </div>
                </div>
                </Link>

        </>
     ))}
    </div>
  )
}

export default Menu;