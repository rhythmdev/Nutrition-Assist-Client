import React, { useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { Link, useLoaderData } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvide";
import useSetTitle from "../../hooks/useSetTitle";
import ServiceReviewCard from "../Home/Services/ServiceReviewCard";

const ServiceDetails = () => {
  const { user } = useContext(AuthContext);
  const [reviews, setReviews] = useState([]);
  const [control, setControl] = useState(false);

  useSetTitle("Service Details");

  const { _id, title, image, price, description } = useLoaderData();

  // ** handel user review input and set to mongodb */

  const handelAddReview = (event) => {
    event.preventDefault();
    const review = event.target.review.value;
    const userName = user?.displayName;
    const email = user?.email;
    const photoURL = user?.photoURL;

    const newReview = {
      review,
      userName,
      email,
      photoURL,
      serviceId: _id,
      date: new Date().toDateString(),
      serviceName: title,
    };

    fetch("http://localhost:5000/addReview", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newReview),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          setControl(!control);
          toast.success("Review added successfully");

          event.target.reset();
        }
      })
      .catch((err) => console.log(err));
  };

  //** Get all reviews from mongodb */
  useEffect(() => {
    fetch(`http://localhost:5000/reviews?serviceId=${_id}`)
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, [control, _id]);

  return (
    <div className="my-16">
      {/* service details area */}

      <div className="card lg:card-side bg-base-100 shadow-xl ">
        <figure>
          <img src={image} alt="" className="rounded-md h-full" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <p>{description}</p>
          <p className="card-title">Price: {price}$</p>
        </div>
      </div>

      {/* end of service details area */}

      {/* add review area */}
      {user?.email ? (
        <div className="flex flex-col max-w-xl p-8 shadow-sm rounded-xl lg:p-12 bg-gray-50 text-gray-800 mx-auto mt-14">
          <form onSubmit={handelAddReview}>
            <div className="flex flex-col items-center w-full">
              <h2 className="text-3xl font-semibold text-center">
                Add your opinion to {title}
              </h2>
              <div className="flex flex-col items-center py-6 space-y-3">
                <span className="text-center">How was your experience?</span>
              </div>
              <div className="flex flex-col w-full">
                <textarea
                  rows="3"
                  id="review"
                  name="review"
                  placeholder="Your Review..."
                  className="p-4 rounded-md resize-none text-gray-800 bg-gray-50"
                  required
                ></textarea>
                <button
                  type="submit"
                  className="px-8 block w-full mt-4 py-3 font-semibold rounded-full bg-green-200 text-gray-800 hover:bg-green-400"
                >
                  Leave feedback
                </button>
              </div>
            </div>
          </form>
        </div>
      ) : (
        <Link to="/login">
          <button className="px-8 block w-full mt-10 py-3 font-semibold rounded-full bg-green-200 text-gray-800 hover:bg-green-400 ">
            Please Login to add review
          </button>
        </Link>
      )}

      {/* end of add review area */}

      {/* show all review area */}
      <div>
        <h2 className="text-3xl font-semibold text-center mt-14">
          All Reviews of {title}
        </h2>
        <hr
          className="lg:w-2/5 md:w-2/4  mx-auto rounded-lg mt-2"
          style={{ borderTopWidth: "4px" }}
        />
        {reviews.length > 0 ? (
          <>
            <section className="my-8 bg-gray-100 text-gray-800">
              <div className="container flex flex-col items-center justify-center mx-auto lg:flex-row lg:flex-wrap lg:justify-evenly lg:px-10">
                {reviews.map((review) => (
                  <ServiceReviewCard
                    key={review._id}
                    newReview={review}
                  ></ServiceReviewCard>
                ))}
              </div>
            </section>
          </>
        ) : (
          <p className="text-center text-2xl font-semibold mt-5">
            No Reviews Found
          </p>
        )}
      </div>

      {/* end of show all review area */}
    </div>
  );
};

export default ServiceDetails;
