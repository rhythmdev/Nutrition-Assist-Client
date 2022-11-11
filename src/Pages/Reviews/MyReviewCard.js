import React from "react";

import { MdDelete, MdEditNote } from "react-icons/md";

const ReviewCard = ({usrReview}) => {

    const {email, userName, photoURL, review, date} = usrReview;
  
  return (
    <tr>
    <th>
      <label>
     <MdDelete/>
      </label>
    </th>
    <td>
      <div className="flex items-center space-x-3">
        <div className="avatar">
          <div className="mask mask-squircle w-14 h-14">
            <img
              src={photoURL}
              alt=""
            />
          </div>
        </div>
        <div>
          <div className="font-bold">{userName}</div>
          <div className="text-sm opacity-50">{email}</div>
        </div>
      </div>
    </td>
    <td className="font-semibold">
    {review}
    
    </td>
    <td>{date}</td>
    <th>
      <button className="btn btn-ghost btn-xs">details</button>
    </th>
  </tr>
  );
};

export default ReviewCard;
