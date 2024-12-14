import React, { useContext } from "react";
import AuthContext from "../context/AuthContext";
import { Link, useNavigate, useParams } from "react-router-dom";
import useAuth from "../hooks/UseAuth";
import Swal from "sweetalert2";

const JobApply = () => {
  const { id } = useParams();
  const { user } = useAuth();
  const navigate = useNavigate();

  const handleApply = (e) => {
    e.preventDefault();

    const form = e.target;
    const linkedin = form.linkedin.value;
    const github = form.github.value;
    // console.log(linkedin, github);

    const jobApplication = {
      job_id: id,
      email: user.email,
      linkedin,
      github,
    };

    fetch("http://localhost:5000/job-applications", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(jobApplication),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Your work has been saved",
            showConfirmButton: false,
            timer: 1500,
          });
          navigate("/myApplications");
        }
      });
  };
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="card bg-base-100 w-full max-w-lg shrink-0 rounded-none p-10">
        <h2 className="text-center font-semibold text-2xl">Apply for Job</h2>
        <form onSubmit={handleApply} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">LinkedIn Url</span>
            </label>
            <input
              id="linkedin"
              type="url"
              placeholder="LinkedIn Url"
              name="linkedin"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Github Url</span>
            </label>
            <input
              type="url"
              placeholder="Github Url"
              name="github"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-neutral rounded-none">Apply</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default JobApply;
