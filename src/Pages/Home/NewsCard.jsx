import { AiOutlineShareAlt, AiFillEye } from "react-icons/Ai";
import { BsBookmark } from "react-icons/Bs";
import { useState } from "react";
import { Link } from "react-router-dom";
const NewsCard = ({ news }) => {
  const {
    _id,
    title,
    rating,
    total_view,
    author,
    thumbnail_url,
    image_url,
    details,
    others_info,
  } = news;
  const datePart = author.published_date
    ? author.published_date.split(" ")[0]
    : "";

  return (
    <div>
      {/* Author part */}
      <div className="flex mb-3 items-center justify-between bg-gray-300 p-4 rounded-md">
        <div className="flex gap-3 items-center ml-4">
          <div>
            <img src={author.img} className="h-10 w-10 rounded-full" />
          </div>
          <div>
            <h1 className="font-bold">
              {author?.name ? author.name : "Own reporter"}
            </h1>
            <p>{datePart}</p>
          </div>
        </div>
        <div className="flex items-center gap-2 mr-4">
          <div className="cursor-pointer">
            <BsBookmark></BsBookmark>
          </div>
          <div className="cursor-pointer">
            <AiOutlineShareAlt></AiOutlineShareAlt>
          </div>
        </div>
      </div>
      <h1 className="text-bold text-2xl text-left p-3">{title}</h1>
      <div className="my-2">
        <img src={image_url} />
      </div>
      {details.length > 250 ? (
        <p className="p-3">
          {details.slice(0, 250)}{" "}
          <Link to={`/news/${_id}`} className="text-red-500 px-2 block">
            Read More
          </Link>{" "}
        </p>
      ) : (
        <p className="p-3">{details}</p>
      )}
      <div className="flex mb-3 items-center justify-between p-4 rounded-md">
        <div className="flex gap-3 items-center ml-2">
          <div className="rating">
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-orange-400"
            />
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-orange-400"
              checked
            />
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-orange-400"
            />
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-orange-400"
            />
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-orange-400"
            />
          </div>
          <div>
            <h1>{rating.number}</h1>
          </div>
        </div>
        <div className="flex items-center gap-2 mr-4">
          <div className="cursor-pointer text-xl">
            <AiFillEye></AiFillEye>
          </div>
          <div className="cursor-pointer">
            <p>{total_view}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
