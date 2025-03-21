import { CiEdit } from "react-icons/ci";
import { GrView } from "react-icons/gr";
import { MdDelete } from "react-icons/md";


const CoffeeCard = ({ coffee }) => {
  const { name, details, photo } = coffee;
  return (
    <div>
      <div className="card card-side bg-base-100 shadow-sm">
        <figure>
          <img
            className="w-[150px] h-[150px]"
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
            <button className="btn"><CiEdit className="text-xl" /></button>
            <button className="btn"><MdDelete className="text-xl" /></button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoffeeCard;