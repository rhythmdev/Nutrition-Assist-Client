import React from "react";
import toast from "react-hot-toast";
import { useLoaderData, useNavigate } from "react-router-dom";

const EditReview = () => {
  const fixedReview = useLoaderData();
  const navigate = useNavigate();

  const handelEditReview = (event) => {
    event.preventDefault();
    const review = event.target.review.value;
    const newReview = { review };
    fetch(`http://localhost:5000/editReview/${fixedReview._id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newReview),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          toast.success("Review Updated Successfully");
        }
        navigate("/myReviews");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <h1 className="text-3xl font-bold text-center">Edit Review</h1>
      <div className="flex justify-center">
        <div className="w-1/2">
          <form onSubmit={handelEditReview}>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="review"
              >
                Review
              </label>
              <textarea
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="review"
                type="text"
                placeholder="Your Review..."
                defaultValue={fixedReview.review}
              />
            </div>
            <div className="flex justify-center">
              <button
                className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="submit"
              >
                Update
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditReview;
