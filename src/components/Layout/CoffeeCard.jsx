import { CiEdit } from "react-icons/ci";
import { GrView } from "react-icons/gr";
import { MdDelete } from "react-icons/md";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";


const CoffeeCard = ({ coffee, coffees, setCoffees }) => {
  const { _id, name, details, photo } = coffee;

  const handleDelete = _id => {
    console.log(_id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/coffees/${_id}`, {
          method: 'DELETE'
        })
          .then(res => res.json())
          .then(data => {
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your coffee has been deleted.",
                icon: "success"
              });
              const remaining = coffees.filter(coffee => coffee._id !== _id);
              setCoffees(remaining);
            }
          })
      }
    });
  }
  return (
    <div>
      <div className="card card-side bg-base-100 shadow-sm">
        <figure className="w-56 h-40">
          <img
            className="w-full h-full rounded-xl"
            src={photo}
            alt="Movie" />
        </figure>
        <div className="flex justify-between w-full mx-5 items-center">
          <div>
            <h2 className="card-title">Name: {name}</h2>
            <p>{details}</p>
          </div>
          <div className="card-actions flex-col justify-end">
            <button className="btn"><GrView className="text-xl" /></button>
            <Link to={`/updateCoffee/${_id}`}><button className="btn"><CiEdit className="text-xl" /></button></Link>
            <button onClick={() => handleDelete(_id)} className="btn"><MdDelete className="text-xl" /></button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoffeeCard;