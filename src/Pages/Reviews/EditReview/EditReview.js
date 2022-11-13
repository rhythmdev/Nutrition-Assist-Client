import React from "react";
import toast from "react-hot-toast";
import { useLoaderData, useNavigate } from "react-router-dom";
import useSetTitle from "../../../hooks/useSetTitle";

const EditReview = () => {
  const fixedReview = useLoaderData();
  const navigate = useNavigate();

  useSetTitle("Edit Review");

  const handelEditReview = (event) => {
    event.preventDefault();
    const review = event.target.review.value;
    const newReview = { review };
    fetch(
      `https://nutrition-assist-server.vercel.app/editReview/${fixedReview._id}`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newReview),
      }
    )
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
      <h1 className="text-3xl font-bold text-center mt-10">Edit Review</h1>
      <div className="flex justify-center my-10">
        <div className="w-1/2">
          <form onSubmit={handelEditReview}>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-4 text-center"
                htmlFor="review"
              >
                Your Review
              </label>
              <textarea
                className="shadow appearance-none border rounded w-full h-28 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-center font-semibold"
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
                Update Review
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditReview;
