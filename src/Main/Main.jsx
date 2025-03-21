import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CoffeeCard from '../components/Layout/CoffeeCard';

const Main = () => {
  const coffees = useLoaderData();
  return (
    <div className='w-10/12 mx-auto'>
      <p>All Data : {coffees.length}</p>
      <div className='grid grid-cols-1 md:grid-cols-2 mx-auto gap-8'>
        {
          coffees.map(coffee => <CoffeeCard key={coffee._id} coffee={coffee}></CoffeeCard>)
        }
      </div>
    </div>
  );
};

export default Main;