import { useState } from "react";
import jobs from "../data/jobs";
import JobCard from "../components/JobCard";

function Jobs() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  const filteredJobs = jobs.filter((job) => {
    const searchMatch =
      job.title.toLowerCase().includes(search.toLowerCase()) ||
      job.company.toLowerCase().includes(search.toLowerCase()) ||
      job.location.toLowerCase().includes(search.toLowerCase());

    const categoryMatch =
      category === "All" || job.category === category;

    return searchMatch && categoryMatch;
  });

  return (
    <section className="jobs-page">
      <div className="jobs-header">
        <h1>Find Your Next Job</h1>
        <p>Search for opportunities that match your skills.</p>
      </div>

      <div className="search-section">
        <input
          type="text"
          placeholder="Search job, company or location..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="All">All Categories</option>
          <option value="Development">Development</option>
          <option value="Design">Design</option>
          <option value="HR">HR</option>
          <option value="Business">Business</option>
        </select>
      </div>

      <div className="jobs-container">
        {filteredJobs.length > 0 ? (
          filteredJobs.map((job) => (
            <JobCard key={job.id} job={job} />
          ))
        ) : (
          <div className="no-jobs">
            <h2>No Jobs Found</h2>
            <p>Try another search or category.</p>
          </div>
        )}
      </div>
    </section>
  );
}

export default Jobs;