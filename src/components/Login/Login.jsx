import React, { useContext } from 'react';
import { AuthContext } from '../../provider/AuthProvider';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const Login = () => {
  const { loginUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLoginUser = event => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);

    //Login user with firebase
    loginUser(email, password)
      .then(result => {
        console.log(result.user);
        toast('🦄 Login successfully!', {
          autoClose: 3000,
          theme: "dark",
        })
        navigate("/")
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
            <h1 className="text-4xl text-center font-bold">Login now!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
              quasi. In deleniti eaque aut repudiandae et a id nisi.
            </p>
          </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <div className="card-body">
              <form onSubmit={handleLoginUser} className="fieldset">
                <label className="fieldset-label">Email</label>
                <input type="email" className="input" name='email' placeholder="Email" required />
                <label className="fieldset-label">Password</label>
                <input type="password" className="input" name='password' placeholder="Password" required />
                <div><a className="link link-hover">Forgot password?</a></div>
                <button className="btn btn-neutral mt-4">Login</button>
              </form>
              <p>Don't have an account? please <Link to="/register" className='text-blue-700 underline'>register</Link> now</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;