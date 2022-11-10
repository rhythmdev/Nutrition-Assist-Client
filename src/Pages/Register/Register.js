import React, { useContext, useState } from "react";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import auth from "../../assets/auth.svg";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvide";

const Register = () => {
  const { createUser, setUser } = useContext(AuthContext);
  const [error, setError] = useState("");

  const handelSignUp = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const photoURL = form.photoURL.value;
    const email = form.email.value;
    const password = form.password.value;
    console.log(name, photoURL, email, password);

    createUser(email, password)
      .then((result) => {
        const user = result.user;

        setUser({
          name: name,
          email: email,
          photoURL: photoURL,
          uid: user.uid,
        });

        setError("");
        toast.success("Registration Successful");
        form.reset();
      })
      .catch((error) => {
        setError(toast.error(error.message));
      });
  };

  return (
    <div>
      <div className="hero w-full my-20">
        <div className="hero-content grid gap-20 md:grid-cols-2 flex-col lg:flex-row">
          <div className="text-center lg:text-left">
            <img className="w-full" src={auth} alt="" />
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 py-14 ">
            <h1 className="text-5xl text-center font-bold">Sign Up</h1>
            <form onSubmit={handelSignUp} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo</span>
                </label>
                <input
                  type="text"
                  name="photoURL"
                  placeholder="Photo URL"
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
                  placeholder="Email"
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
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control mt-6">
                <input
                  className="btn border-0 bg-green-200 text-gray-800 hover:bg-green-400 font-semibold"
                  type="submit"
                  value="Sign Up"
                />
              </div>
            </form>

            <p className="text-center">
              Already have an account?{" "}
              <Link className="text-green-600 font-bold" to="/login">
                Login
              </Link>{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
