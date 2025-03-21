import React from 'react';
import Swal from 'sweetalert2';

const AddCoffee = () => {

  const handleAddCoffee = event => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const chef = form.chef.value;
    const supplier = form.supplier.value;
    const taste = form.taste.value;
    const category = form.category.value;
    const details = form.details.value;
    const photo = form.photo.value;
    const coffeeUser = { name, chef, supplier, taste, category, details, photo };
    console.log(coffeeUser);
    //Client side to server side data sending
    fetch('http://localhost:5000/coffees', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(coffeeUser)
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            title: "Coffee Added Successfully",
            text: "You clicked the button!",
            icon: "success"
          });
          form.reset();
        }
      })

  }
  return (
    <div className='w-10/12 mx-auto mt-24 bg-[#F4F3F0]'>
      <div>
        <h2 className='text-3xl font-bold text-center py-8'>Add New Coffee</h2>
        <p className='text-center text-gray-500 pb-10'>It is a long established fact that a reader will be distraceted by the readable content of a page when looking at <br /> its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed <br /> to using Content here.</p>
      </div>
      <form onSubmit={handleAddCoffee}>
        <div className='md:flex items-center w-1/2 gap-5 mx-auto pb-5 justify-center'>
          <div className='w-full'>
            <label className="fieldset-label pb-2 text-black">Name</label>
            <input type="text" className="input" name='name' placeholder="Enter Coffee name" required />
          </div>
          <div className='w-full'>
            <label className="fieldset-label pb-2 text-black">Chef</label>
            <input type="text" className="input" name='chef' placeholder="Enter Coffee chef" required />
          </div>
        </div>
        <div className='md:flex items-center w-1/2 gap-5 mx-auto pb-5 justify-center'>
          <div className='w-full'>
            <label className="fieldset-label pb-2 text-black">Supplier</label>
            <input type="text" className="input" name='supplier' placeholder="Enter Coffee supplier" required />
          </div>
          <div className='w-full'>
            <label className="fieldset-label pb-2 text-black">Taste</label>
            <input type="text" className="input" name='taste' placeholder="Enter coffee taste" required />
          </div>
        </div>
        <div className='md:flex items-center w-1/2 gap-5 mx-auto pb-5 justify-center'>
          <div className='w-full'>
            <label className="fieldset-label pb-2 text-black">Category</label>
            <input type="text" className="input" name='category' placeholder="Enter Coffee category" required />
          </div>
          <div className='w-full'>
            <label className="fieldset-label pb-2 text-black">Details</label>
            <input type="text" className="input" name='details' placeholder="Enter Coffee details" required />
          </div>
        </div>
        <div className='w-6/12 mx-auto pb-5'>
          <label className="fieldset-label text-black">Photo</label>
          <input type="text" className="input w-full" name='photo' placeholder="Enter photo URL" required />
        </div>
        <div className='w-6/12 mx-auto pb-10'>
          <input type="submit" className='btn w-full bg-[#D2B48C] border-2 border-black' value="Add Coffee" />
        </div>
      </form>
    </div>
  );
};

export default AddCoffee;