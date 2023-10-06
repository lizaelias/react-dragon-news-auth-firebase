import { Link, useNavigate , useLocation } from "react-router-dom";
import Navbar from "../shared/Navbar/Navbar";
import { useContext } from "react";
import { AuthContext } from "../shared/providers/AuthProviders";

const Login = () => {
  const { signIn } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const email = form.get("email");
    const password = form.get("password");

    signIn(email, password)
      .then((result) => {
        console.log(result.user);
        navigate(location?.state ? location.state : "/"); 
      })
      .catch((error) => {
        console.error(error);
      });
  };



  return (
    <div>
      <Navbar></Navbar>

      <div>
        <h3 className="text-center text-3xl
        my-10 font-semibold">Please Login </h3>

        <form onSubmit={handleLogin} className="md:w-1/4 lg:w-1/2 mx-auto">
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
            <button className="btn btn-primary">Login</button>
          </div>
        </form>

         <p className="text-center font-bold pt-4">Dont's have your account <Link className="text-blue-500" to='/register'> 
          Register 
         </Link></p>
      </div>
    </div>
  );
};

export default Login;
