import React, { useContext } from 'react';
import { AuthContext } from '../../provider/AuthProvider';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const Register = () => {
  const { createUser } = useContext(AuthContext)
  const navigate = useNavigate();

  const handleRegister = event => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;
    console.log(name, photo, email, password);
    createUser(email, password)
      .then(result => {
        console.log(result.user)
        const newUsers = { name, photo, email };
        // const createAtTime = result?.user?.metadata?.createTime;
        //save new user info to the database
        fetch('http://localhost:5000/users', {
          method: 'POST',
          headers: {
            'content-type': 'application/json'
          },
          body: JSON.stringify(newUsers)
        })
          .then(res => res.json())
          .then(data => {
            console.log(data);
            if (data.insertedId) {
              toast('🦄 Account created successfully!', {
                autoClose: 3000,
                theme: "dark",
              })
            }
            navigate("/")

          })

      })
      .catch(error => {
        console.log(error.message)
      })
  }
  return (
    <div>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col">
          <div className="text-center lg:text-left">
            <h1 className="text-4xl font-bold text-center">Register Now</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
              quasi. In deleniti eaque aut repudiandae et a id nisi.
            </p>
          </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <div className="card-body">
              <form onSubmit={handleRegister} className="fieldset">
                <label className="fieldset-label">Name</label>
                <input type="text" className="input" name='name' placeholder="Enter your name" required />
                <label className="fieldset-label">Photo URL</label>
                <input type="text" className="input" name='photo' placeholder="Enter your photo" required />
                <label className="fieldset-label">Email</label>
                <input type="email" className="input" name='email' placeholder="Email" required />
                <label className="fieldset-label">Password</label>
                <input type="password" className="input" name='password' placeholder="Password" required />
                <button className="btn btn-neutral mt-4">Register</button>
              </form>
              <p>Already have an account? Please <Link to="/login" className='text-blue-600 underline'>login</Link> now</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;