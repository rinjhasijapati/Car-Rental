import React from 'react';
import whiteCar from "../../assets/white-car.png";
import car2 from "../../assets/car5.png";
import car3 from "../../assets/car6.png";

const carList = [
  {
    name: "BMW UX",
    price: 100,
    image: whiteCar,
    aosDelay: "0",
  },
  {
    name: "KIA UX",
    price: 140,
    image: car2,
    aosDelay: "500",
  },
  {
    name: "BMW UX",
    price: 100,
    image: car3,
    aosDelay: "1000",
  },
];
const CarList = () => {
  return (
    <div className='pb-24'>
      <div className='container'>
        <h1
          data-aos='fade-up'
          className='text-3xl sm:text-4xl font-semibold font-serif mb-3'
        >
          Lorem ipsum dolor
        </h1>
        <p 
          data-aos='fade-up'
          aos-delay='400'
          className='text-sm pb-10'
        >
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor iure
          nemo ab?
        </p>
        <div>{/*car listing*/}</div>
      </div>
    </div>
  )
}

export default CarList