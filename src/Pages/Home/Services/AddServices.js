import React, { useContext } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthProvider/AuthProvide";
import useSetTitle from "../../../hooks/useSetTitle";

const AddServices = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
 
  useSetTitle('Add Services');

  //** Add service handel */
  const handelAddService = (event) => {
    event.preventDefault();
    const form = event.target;
    const title = form.title.value;
    const price = form.price.value;
    const description = form.description.value;
    const image = form.image.value;
    const email = form.email.value;
    // console.log(title, price, description, image, email);
    const newService = {
      title,
      price,
      description,
      image,
      time: new Date().toLocaleTimeString(),
      email,
    };

    fetch("http://localhost:5000/addService", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newService),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          toast.success("Service added successfully");
          navigate("/services");
          form.reset();
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="my-14">
      <form onSubmit={handelAddService}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <div>
            <label
              className="block text-gray-700 text-sm font-bold mb-4 text-center"
              htmlFor="title"
            >
              Your Service Name
            </label>
            <input
              type="text"
              name="title"
              placeholder="Service Name"
              className="input input-bordered input-success w-full "
              required
            />
          </div>
          <div>
            <label
              className="block text-gray-700 text-sm font-bold mb-4 text-center"
              htmlFor="price"
            >
              Your Service Price
            </label>
            <input
              type="text"
              name="price"
              placeholder="Service Price"
              className="input input-bordered input-success w-full "
              required
            />
          </div>
          <div>
            <label
              className="block text-gray-700 text-sm font-bold mb-4 text-center"
              htmlFor="description"
            >
              Your Service Description
            </label>
            <input
              type="text"
              name="description"
              placeholder="Service Description"
              className="input input-bordered input-success w-full "
              required
            />
          </div>
          <div>
            <label
              className="block text-gray-700 text-sm font-bold mb-4 text-center"
              htmlFor="image"
            >
              Your Service Image
            </label>
            <input
              type="text"
              name="image"
              placeholder="Image URL(if possible hosted it on imgbb etc.)"
              className="input input-bordered input-success w-full "
              required
            />
          </div>
          <div>
            <input
              type="email"
              name="email"
              placeholder="email"
              className="input input-bordered input-success w-full "
              defaultValue={user?.email}
              readOnly
            />
          </div>
        </div>

        <button
          type="submit"
          className="px-8 block w-1/2 mt-10 py-3 font-semibold rounded-full bg-green-200 text-gray-800 hover:bg-green-400 mx-auto"
        >
          Add Service
        </button>
      </form>
    </div>
  );
};

export default AddServices;
