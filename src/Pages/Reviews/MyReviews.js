import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvide';

const MyReviews = () => {
    const {user} = useContext(AuthContext);
    const [reviews, setReviews] = useState([]);

    //** Get all reviews from mongodb */
    useEffect(() => {
        fetch(`http://localhost:5000/reviews?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [user?.email])

    return (
        <div>
            <h1 className="text-3xl font-bold text-center my-8">My Reviews</h1>
            <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-12">
                {
                    reviews?.map(review => <div className="card lg:card-side bg-base-100 shadow-xl">
                        <figure>
                            <img src={review.photoURL} alt="" />
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title">{review.userName}</h2>
                            <p>{review.review}</p>
                            <p>{review.date}</p>
                        </div>
                    </div>)
                }

                </div>
                            
                                                    
                            

        </div>
    );
};

export default MyReviews;