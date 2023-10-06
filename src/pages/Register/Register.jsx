import { Link } from "react-router-dom";
import Navbar from "../shared/Navbar/Navbar";
import { useContext } from "react";
import { AuthContext } from "../shared/providers/AuthProviders";



const Register = () => {

    const {createUser} =useContext(AuthContext);
    

    const handleRegiser = e =>{
        e.preventDefault();
        console.log(e.currentTarget);
        const form =new FormData (e.currentTarget)
        const name = form.get('name');
        const photo = form .get('photo');
        const email =form.get('email');
        const password =form .get('password');

        console.log(name,photo,email,password);
        // 
        createUser(email,password)
        .then(result =>{
          console.log(result.user);
        })
        .catch(error =>{
          console.error(error);
        })
    }

    return (
        <div>
        <Navbar></Navbar>
  
        <div>
          <h3 className="text-center text-3xl
          my-10 font-semibold">Please Register </h3>
  
          <form onSubmit={handleRegiser} className="md:w-1/4 lg:w-1/2 mx-auto">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="Name"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Photo URL</span>
              </label>
              <input
                type="text"
                name="photo"
                placeholder="Photo Url."
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="Enter email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="password"
                name="password"
                className="input input-bordered"
                required
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Register</button>
            </div>
          </form>
  
           <p className="text-center font-bold pt-4">Already have your account? <Link className="text-blue-500" to='/login'> 
            Login 
           </Link></p>
        </div>
      </div>
    );
};

export default Register;