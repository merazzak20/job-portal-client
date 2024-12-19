import React from "react";
import { useNavigate } from "react-router-dom";

import Swal from "sweetalert2";

const AddJob = () => {
  const navigate = useNavigate();
  const handleAdd = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const initialData = Object.fromEntries(formData.entries());
    console.log(initialData);
    const { min, max, currency, ...newJob } = initialData;
    newJob.salaryRange = {
      min,
      max,
      currency,
    };
    newJob.requirements = newJob.requirements.split("\n");
    newJob.responsibilities = newJob.responsibilities.split("\n");
    console.log(newJob);

    fetch("http://localhost:5000/jobs", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newJob),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Your work has been saved",
            showConfirmButton: false,
            timer: 1500,
          });
          navigate("/myPostedJob");
        }
      });
  };
  return (
    <div>
      <h1 className="text-3xl font-bold text-center mt-4">Add Job</h1>
      <form onSubmit={handleAdd} className="card-body">
        {/* Title */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Job Title</span>
          </label>
          <input
            type="text"
            placeholder="Job Title"
            name="title"
            className="input input-bordered"
            required
          />
        </div>

        {/* application Deadline */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Application Deadline</span>
          </label>
          <input
            type="date"
            placeholder="Application Deadline"
            name="applicationDeadline"
            className="input input-bordered"
            required
          />
        </div>

        {/* Company Name */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Company Name</span>
          </label>
          <input
            type="text"
            placeholder="Company Name"
            name="company"
            className="input input-bordered"
            required
          />
        </div>

        {/* Company Logo */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Company Logo URL</span>
          </label>
          <input
            type="text"
            placeholder="Company Logo URL"
            name="logo"
            className="input input-bordered"
            required
          />
        </div>

        {/* Hr Name */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">HR Name</span>
          </label>
          <input
            type="text"
            placeholder="HR Name"
            name="hr"
            className="input input-bordered"
            required
          />
        </div>

        {/* Hr Email */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">HR Email</span>
          </label>
          <input
            type="text"
            placeholder="HR Email"
            name="hrEmail"
            className="input input-bordered"
            required
          />
        </div>

        {/* Job Location */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Job Location</span>
          </label>
          <input
            type="text"
            placeholder="Job Location"
            name="location"
            className="input input-bordered"
            required
          />
        </div>

        {/* Job Type */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Job Type</span>
          </label>
          <select
            name="type"
            defaultValue={"Job Type"}
            className="select select-bordered w-full max-w-xs"
          >
            <option disabled>Job Type</option>
            <option>Full-Time</option>
            <option>Hybrid</option>
            <option>Intern</option>
            <option>Remote</option>
          </select>
        </div>

        {/* Job Category */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Job Category</span>
          </label>
          <select
            name="category"
            defaultValue={"Job Category"}
            className="select select-bordered w-full max-w-xs"
          >
            <option disabled>Job Category</option>
            <option>Engineering</option>
            <option>Finance</option>
            <option>Marketing</option>
          </select>
        </div>

        {/* Salary Range */}
        <p className="mt-4">Salary Range</p>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-3">
          <div className="form-control">
            <input
              type="text"
              placeholder="Salary Min"
              name="min"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <input
              type="text"
              placeholder="Salary Max"
              name="max"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <select
              name="currency"
              defaultValue={"Currency"}
              className="select select-bordered w-full max-w-xs"
            >
              <option disabled>Currency</option>
              <option>BDT</option>
              <option>USD</option>
              <option>INR</option>
            </select>
          </div>
        </div>

        {/* Job Description */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Job Description</span>
          </label>

          <textarea
            className="textarea input-bordered"
            placeholder="Job Description"
            name="description"
            required
          ></textarea>
        </div>

        {/* Job Requirements */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Job Requirements</span>
          </label>

          <textarea
            className="textarea input-bordered"
            placeholder="each requirements in new line"
            name="requirements"
            required
          ></textarea>
        </div>

        {/* Job Responsibility */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Job Responsibility</span>
          </label>

          <textarea
            className="textarea input-bordered"
            placeholder="each responsibility in new line"
            name="responsibilities"
            required
          ></textarea>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-neutral rounded-none">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default AddJob;
