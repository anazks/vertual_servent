'use client'
import React, { useEffect, useState } from 'react';
import './products.css';
import Link from 'next/link';
import axios from 'axios';
import { useSearchParams } from 'next/navigation';

const Products = () => {
  const search = useSearchParams();
  const cataID = search.get('id');
  const [data, setData] = useState([]);

  const getDishes = async () => {
    try {
      const dishes = await axios.get(`https://anasksunil.pythonanywhere.com/FoodmenuCategoryView/${cataID}`);
      return dishes.data;
    } catch (error) {
      console.log(error);
      return [];
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      const dishesData = await getDishes();
      setData(dishesData);
    };

    fetchData();
  }, [cataID]);

  return (
    <div className='menu'>
      {data.map((item:{food_price:number,id:number}) => (
        <div key={item.id} className='card' style={{ backgroundImage: `url(https://anasksunil.pythonanywhere.com/${item.food_image})` }}>
          <div className="centered">
            {/* <h3>Dish Name Here</h3> */}
            <button className='viewBtn'>
              <Link href="/view">View Details</Link>
            </button>
            <h2 className='prize'>$<b>{item.food_price}</b></h2>
          </div>
        </div>
      ))}
      <div className='Buttons'>
        <div className="btns">
          <button className='nextBtn'><Link href="/Checkout">Next</Link></button>
          <button className='addmoreBtn'><Link href="/">Add More</Link></button>
        </div>
      </div>
    </div>
  );
};

export default Products;
