import React from "react";
import { SlLocationPin } from "react-icons/sl";
import { Link } from "react-router-dom";

const HotJobsCard = ({ job }) => {
  const {
    _id,
    title,
    company,
    company_logo,
    requirements,
    description,
    location,
    salaryRange,
  } = job;
  return (
    <div>
      <div className="card card-compact bg-base-100 shadow-xl">
        <div className="flex gap-4 m-3">
          <figure>
            <img className="w-16" src={company_logo} alt="Shoes" />
          </figure>
          <div>
            <h3 className="text-xl font-semibold">{company}</h3>
            <div className="flex gap-1 items-center">
              <SlLocationPin />
              <p>{location}</p>
            </div>
          </div>
        </div>
        <div className="card-body">
          <h2 className="card-title">
            {title}
            <div className="badge badge-secondary">NEW</div>
          </h2>
          <p>{description}</p>
          <div className="flex gap-2 flex-wrap">
            {requirements.map((skill, idx) => (
              <p key={idx} className="border rounded-lg px-3 bg-gray-200">
                {skill}
              </p>
            ))}
          </div>
          <div className="card-actions justify-end items-center mt-3">
            <p>
              Salary: {salaryRange.min} - {salaryRange.max}{" "}
              {salaryRange.currency}
            </p>
            <Link to={`/jobs/${_id}`}>
              <button className="btn btn-primary">Apply</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HotJobsCard;
