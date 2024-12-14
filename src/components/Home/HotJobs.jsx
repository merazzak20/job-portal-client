import React, { useEffect, useState } from "react";
import HotJobsCard from "./HotJobsCard";

const HotJobs = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/jobs")
      .then((res) => res.json())
      .then((data) => setJobs(data));
  }, []);
  return (
    <div>
      <div className="mx-auto text-center my-5">
        <h2 className="text-4xl font-bold">Hot Jobs</h2>
        <p>Jobs are available</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
        {jobs.map((job) => (
          <HotJobsCard key={job._id} job={job}></HotJobsCard>
        ))}
      </div>
    </div>
  );
};

export default HotJobs;
