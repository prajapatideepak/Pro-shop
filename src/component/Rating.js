import React from "react";

export default function Rating({ value, text, color }) {
  return (
    <div className="text-sm mb-4">
      <span>
        <i
          style={{ color }}
          className={
            value >= 1
              ? "fa fa-star"
              : value >= 0.5
              ? "fa fa-star-half"
              : "far fa-star"
          }
          aria-hidden="true"
        ></i>
        <i
          style={{ color }}
          className={
            value >= 2
              ? "fa fa-star"
              : value >= 1.5
              ? "fa fa-star-half"
              : "far fa-star"
          }
          aria-hidden="true"
        ></i>
        <i
          style={{ color }}
          className={
            value >= 3
              ? "fa fa-star"
              : value >= 2.5
              ? "fa fa-star-half"
              : "far fa-star"
          }
          aria-hidden="true"
        ></i>
        <i
          style={{ color }}
          className={
            value >= 4
              ? "fa fa-star"
              : value >= 3.5
              ? "fa fa-star-half"
              : "far fa-star"
          }
          aria-hidden="true"
        ></i>
        <i
          style={{ color }}
          className={
            value >= 5
              ? "fa fa-star"
              : value >= 4.5
              ? "fa fa-star-half"
              : "far fa-star"
          }
          aria-hidden="true"
        ></i>
      </span>
      <span>
        {" "}
        from <span className="font-bold">{text}</span> Reviews
      </span>
    </div>
  );
}

Rating.defaultProps = {
  color: "#f8e825",
};
