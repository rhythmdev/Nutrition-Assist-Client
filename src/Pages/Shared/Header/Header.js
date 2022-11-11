import React, { useContext } from "react";

import { Link } from "react-router-dom";
import logo from "../../../assets/logo.svg";
import { AuthContext } from "../../../contexts/AuthProvider/AuthProvide";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then()
      .catch((err) => console.error(err));
  };

  const menuItems = (
    <>
      <li className="font-semibold">
        <Link to="/">Home</Link>
      </li>
      <li className="font-semibold">
        <Link to="/services">Services</Link>
      </li>
      {user?.email ? (
        <>
          <li className="font-semibold">
            <Link to="/myreviews">My Reviews</Link>
          </li>
          <li className="font-semibold">
            <Link to="/blog">Add Service</Link>
          </li>
          <li className="font-semibold">
            <button onClick={handleLogOut} className="btn-ghost">
              Sign Out
            </button>
          </li>
        </>
      ) : (
        <li className="font-semibold">
          <Link to="/login">Login</Link>
        </li>
      )}

     
      <li className="font-semibold">
        <Link to="/blog">Blog</Link>
      </li>
    </>
  );

  return (
    <div>
      <div className="navbar h-20 pt-5 bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              {menuItems}
            </ul>
          </div>
          <Link to="/" className=" normal-case text-xl">
            <img src={logo} alt="" className="w-44 h-44 mt-5" />
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal p-0">{menuItems}</ul>
        </div>
        <div className="navbar-end">
          {user?.email ? (
            <>
              <p className="font-semibold mr-3">{user?.displayName}</p>
            </>
          ) : (
            <p className="font-semibold mr-3">Barry Allen</p>
          )}

          {user?.email ? (
            <div className="avatar online">
              <div className="w-10 rounded-full">
                <img src={user?.photoURL} alt="" />
              </div>
            </div>
          ) : (
            <div className="avatar online">
              <div className="w-10 rounded-full">
                <img src="https://placeimg.com/192/192/people" alt="" />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
