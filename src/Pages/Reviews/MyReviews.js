import React, { useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvide";
import MyReviewCard from "../Reviews/MyReviewCard";

const MyReviews = () => {
  const { user, logOut } = useContext(AuthContext);

  const [reviews, setReviews] = useState([]);
  const [control, setControl] = useState(false);

  //** Get all reviews from mongodb */
  useEffect(
    () => {
      fetch(
        `https://nutrition-assist-server.vercel.app/myReviews?email=${user?.email}`,
        {
          headers: {
            authorization: `Bearer ${localStorage.getItem("assistToken")}`,
          },
        }
      )
        .then((res) => {
          if (res.status === 401 || res.status === 403) {
            return logOut();
          }
          return res.json();
        })
        .then((data) => {
          setControl(!control);
          setReviews(data);
        });
    },
    [user?.email, logOut, control],
    reviews
  );

  //** delete review */
  const handelDeleteReview = (id) => {
    const agree = window.confirm("Do you actually want to delete this comment?");
    if (agree) {
      fetch(`https://nutrition-assist-server.vercel.app/reviews/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            toast.error("Review deleted successfully");
            const remainingReviews = reviews.filter(
              (review) => review._id !== id
            );
            setReviews(remainingReviews);
          }
        });
    }
  };

  //** edit review */
  const handelEditReview = (id) => {
    const agree = window.confirm("Are you sure to edit this review?");
    if (agree) {
      fetch(`https://nutrition-assist-server.vercel.app/reviews/${id}`, {
        method: "PATCH",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.modifiedCount > 0) {
            toast.success("Review edited successfully");
            const remainingReviews = reviews.filter(
              (review) => review._id !== id
            );
            setReviews(remainingReviews);
          }
        });
    }
  };

  return (
    <div>
      <h1 className="text-3xl font-bold text-center my-10 ">My Reviews</h1>

      {reviews.length < 1 ? (
        <div className="w-full p-10 rounded-md shadow-sm bg-gray-100 mb-5">
          <h1 className="text-2xl text-center  font-semibold">
            No reviews were Added
          </h1>
        </div>
      ) : (
        <div className="my-12">
          <div className="overflow-x-auto w-full">
            <table className="table w-full">
              <thead>
                <tr>
                  <th>Delete</th>
                  <th>User</th>
                  <th>Reviews</th>
                  <th>Date</th>
                  <th>Edit</th>
                </tr>
              </thead>
              <tbody>
                {reviews.map((review) => (
                  <MyReviewCard
                    key={review._id}
                    usrReview={review}
                    handelDeleteReview={handelDeleteReview}
                    handelEditReview={handelEditReview}
                  ></MyReviewCard>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
};

export default MyReviews;
