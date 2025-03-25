import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import CoffeeCard from '../components/Layout/CoffeeCard';
import Navbar from '../components/Header/Navbar';

const Main = () => {
  const loadedCoffee = useLoaderData();
  const [coffees, setCoffees] = useState(loadedCoffee);
  return (
    <div className='w-10/12 mx-auto'>
      <Navbar></Navbar>
      <p className='text-2xl font-black py-5 text-center'>All coffees Data : {coffees.length}</p>
      <div className='grid grid-cols-1 md:grid-cols-2 mx-auto gap-10'>
        {
          coffees.map(coffee => <CoffeeCard key={coffee._id} coffee={coffee} coffees={coffees} setCoffees={setCoffees}></CoffeeCard>)
        }
      </div>
    </div>
  );
};

export default Main;