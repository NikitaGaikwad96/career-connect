import { useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import jobs from "../data/jobs";

function JobDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const job = jobs.find((job) => job.id === Number(id));

  const [showForm, setShowForm] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    qualification: "",
    experience: "",
  });

  if (!job) {
    return (
      <div className="not-found">
        <h1>Job Not Found</h1>
        <Link to="/jobs">← Back to Jobs</Link>
      </div>
    );
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleApply = (e) => {
    e.preventDefault();

    if (
      !formData.name ||
      !formData.email ||
      !formData.phone ||
      !formData.qualification
    ) {
      alert("Please fill all required fields.");
      return;
    }

    const applications =
      JSON.parse(localStorage.getItem("applications")) || [];

    const alreadyApplied = applications.some(
      (application) => application.jobId === job.id
    );

    if (alreadyApplied) {
      alert("You have already applied for this job.");
      return;
    }

    const newApplication = {
      id: Date.now(),
      jobId: job.id,
      jobTitle: job.title,
      company: job.company,
      location: job.location,
      salary: job.salary,
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      qualification: formData.qualification,
      experience: formData.experience,
      status: "Applied",
      date: new Date().toLocaleDateString(),
    };

    applications.push(newApplication);

    localStorage.setItem(
      "applications",
      JSON.stringify(applications)
    );

    alert("Application submitted successfully! 🎉");

    setShowForm(false);

    navigate("/dashboard");
  };

  return (
    <section className="job-details">

      <div className="details-container">

        <Link to="/jobs" className="back-link">
          ← Back to Jobs
        </Link>

        <div className="details-header">

          <div className="large-logo">
            {job.company.charAt(0)}
          </div>

          <div>
            <h1>{job.title}</h1>
            <h3>{job.company}</h3>
          </div>

        </div>

        <div className="details-grid">

          <div className="details-main">

            <h2>Job Description</h2>

            <p>{job.description}</p>

            <h2>Requirements</h2>

            <ul>
              <li>Good communication skills</li>
              <li>Problem solving skills</li>
              <li>Basic computer knowledge</li>
              <li>Ability to work in a team</li>
            </ul>

            <h2>Responsibilities</h2>

            <ul>
              <li>Work with the development team</li>
              <li>Complete assigned tasks</li>
              <li>Maintain project quality</li>
              <li>Learn new technologies</li>
            </ul>

          </div>

          <div className="details-sidebar">

            <h2>Job Information</h2>

            <p>📍 <strong>Location:</strong> {job.location}</p>

            <p>💼 <strong>Job Type:</strong> {job.type}</p>

            <p>💰 <strong>Salary:</strong> {job.salary}</p>

            <p>🏷️ <strong>Category:</strong> {job.category}</p>

            <button
  className="apply-btn"
  onClick={() => setShowForm(true)}
>
  Apply Now
</button>

          </div>

        </div>

        {/* Application Form */}

        {showForm && (
  <div className="application-box">
    <div className="application-header">
      <h2>Apply for {job.title}</h2>

      <button
        className="close-btn"
        onClick={() => setShowForm(false)}
      >
        ✕
      </button>
    </div>

    <form onSubmit={handleApply}>

      <label>Full Name *</label>
      <input
        type="text"
        name="name"
        placeholder="Enter your full name"
        value={formData.name}
        onChange={handleChange}
      />

      <label>Email *</label>
      <input
        type="email"
        name="email"
        placeholder="Enter your email"
        value={formData.email}
        onChange={handleChange}
      />

      <label>Phone Number *</label>
      <input
        type="tel"
        name="phone"
        placeholder="Enter your phone number"
        value={formData.phone}
        onChange={handleChange}
      />

      <label>Qualification *</label>
      <input
        type="text"
        name="qualification"
        placeholder="Example: BCS"
        value={formData.qualification}
        onChange={handleChange}
      />

      <label>Experience</label>
      <select
        name="experience"
        value={formData.experience}
        onChange={handleChange}
      >
        <option value="">Select Experience</option>
        <option value="Fresher">Fresher</option>
        <option value="1 Year">1 Year</option>
        <option value="2 Years">2 Years</option>
        <option value="3+ Years">3+ Years</option>
      </select>

      <button
        type="submit"
        className="submit-application"
      >
        Submit Application
      </button>

    </form>
  </div>
)}
      </div>

    </section>
  );
}

export default JobDetails;