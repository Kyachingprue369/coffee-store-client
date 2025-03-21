import React from 'react';
import { useLoaderData } from 'react-router-dom';

const UpdateCoffee = () => {
  const coffees = useLoaderData();
  console.log(coffees);
  return (
    <div>
      <p>This is UpdateCoffee Pages</p>
    </div>
  );
};

export default UpdateCoffee;