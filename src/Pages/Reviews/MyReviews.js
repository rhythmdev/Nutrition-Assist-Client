import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvide";
import MyReviewCard from "../Reviews/MyReviewCard"

const MyReviews = () => {
  const { user } = useContext(AuthContext);

  const [reviews, setReviews] = useState([]);

  //** Get all reviews from mongodb */
  useEffect(
    () => {
      fetch(`http://localhost:5000/myreviews?email=${user?.email}`)
        .then((res) => res.json())
        .then((data) => setReviews(data));
    },
    [user?.email],
    reviews
  );

  return (
    <div>
      <h1 className="text-3xl font-bold text-center my-8">My Reviews</h1>
      <div className=" mt-12">
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
                
            {
              reviews === 0 &&
               <div className='w-full h-20 bg-slate-100'>


                <h1 className='text-lg text-center text-semibold'>No reviews were Added</h1>


              </div>
            }
              {reviews.map((review) => (
                <MyReviewCard key={review._id} usrReview={review}></MyReviewCard>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MyReviews;
