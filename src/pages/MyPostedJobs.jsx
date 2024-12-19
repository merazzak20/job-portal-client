import React, { useEffect, useState } from "react";
import useAuth from "../hooks/UseAuth";

const MyPostedJobs = () => {
  const [myJob, setMyJob] = useState([]);
  const { user } = useAuth();
  console.log(user);

  useEffect(() => {
    fetch(`http://localhost:5000/jobs?email=${user.email}`)
      .then((res) => res.json())
      .then((data) => setMyJob(data));
  }, [user.email]);
  return (
    <div>
      <p>My posted jobs: {myJob.length}</p>
    </div>
  );
};

export default MyPostedJobs;
