import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function JobCard({ job }) {
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    const savedJobs =
      JSON.parse(localStorage.getItem("savedJobs")) || [];

    setSaved(savedJobs.some((savedJob) => savedJob.id === job.id));
  }, [job.id]);

  const toggleSave = () => {
    const savedJobs =
      JSON.parse(localStorage.getItem("savedJobs")) || [];

    if (saved) {
      const updatedJobs = savedJobs.filter(
        (savedJob) => savedJob.id !== job.id
      );

      localStorage.setItem(
        "savedJobs",
        JSON.stringify(updatedJobs)
      );

      setSaved(false);
    } else {
      savedJobs.push(job);

      localStorage.setItem(
        "savedJobs",
        JSON.stringify(savedJobs)
      );

      setSaved(true);
    }
  };

  return (
    <div className="job-card">

      <div className="company-logo">
        {job.company.charAt(0)}
      </div>

      <div className="job-info">

        <div className="job-title-row">
          <h3>{job.title}</h3>

          <button
            className={`save-btn ${saved ? "saved" : ""}`}
            onClick={toggleSave}
            title={saved ? "Remove saved job" : "Save job"}
          >
            {saved ? "❤️" : "♡"}
          </button>
        </div>

        <p className="company">
          {job.company}
        </p>

        <div className="job-meta">
          <span>📍 {job.location}</span>
          <span>💼 {job.type}</span>
        </div>

        <p className="salary">
          💰 {job.salary}
        </p>

        <span className="category">
          {job.category}
        </span>

        <Link
          to={`/job/${job.id}`}
          className="view-btn"
        >
          View Details
        </Link>

      </div>
    </div>
  );
}

export default JobCard;