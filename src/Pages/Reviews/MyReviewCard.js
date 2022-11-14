import React from "react";

import { MdDelete, MdEditNote } from "react-icons/md";
import { Link } from "react-router-dom";
import useSetTitle from "../../hooks/useSetTitle";

const ReviewCard = ({ usrReview, handelDeleteReview }) => {
  const { _id, email, userName, photoURL, review, date, serviceName} = usrReview;

  useSetTitle("My Reviews");

  return (
    <tr>
      <th>
        <label>
          <button
            onClick={() => handelDeleteReview(_id)}
            className="btn btn-ghost btn-xs hover:bg-red-500"
          >
            <MdDelete />
          </button>
        </label>
      </th>
      <td>
        <div className="flex items-center space-x-3">
          <div className="avatar">
            <div className="mask mask-squircle w-14 h-14">
              <img src={photoURL} alt="" />
            </div>
          </div>
          <div>
            <div className="font-bold">{userName}</div>
            <div className="text-sm opacity-50">{email}</div>
          </div>
        </div>
      </td>
      <td className="font-semibold">{review}</td>
      <td>{serviceName}</td>
      <th>
        <Link to={`/editReview/${_id}`}>
          <button className="btn btn-ghost btn-xs hover:bg-green-500">
            {" "}
            <MdEditNote />
          </button>
        </Link>
      </th>
    </tr>
  );
};

export default ReviewCard;
