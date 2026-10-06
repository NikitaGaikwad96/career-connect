import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";





function Dashboard() {
  const navigate = useNavigate();

  const removeApplication = (id) => {
  const updatedApplications = applications.filter(
    (application) => application.id !== id
  );

  setApplications(updatedApplications);

  localStorage.setItem(
    "applications",
    JSON.stringify(updatedApplications)
  );
};

  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [savedJobs, setSavedJobs] = useState([]);

  const [editMode, setEditMode] = useState(false);
const [editName, setEditName] = useState("");
const [editEmail, setEditEmail] = useState("");

const [darkMode, setDarkMode] = useState(
  localStorage.getItem("darkMode") === "true"
);

//usestate
const toggleDarkMode = () => {
  const newMode = !darkMode;

  setDarkMode(newMode);
  localStorage.setItem("darkMode", newMode);
};
useEffect(() => {
  document.body.classList.toggle("dark-mode", darkMode);
}, [darkMode]);

//useEffect
  useEffect(() => {
    const loggedIn = localStorage.getItem("loggedIn");

    if (loggedIn !== "true") {
      navigate("/login");
      return;
    }
    const storedName = localStorage.getItem("userName") || "User";
    const storedEmail = localStorage.getItem("userEmail") || "";

            setUserName(storedName);
            setUserEmail(storedEmail);

             setEditName(storedName);
              setEditEmail(storedEmail);

    const applicationData =
          JSON.parse(localStorage.getItem("applications")) || [];

            setApplications(applicationData);

    setUserName(localStorage.getItem("userName") || "User");
    setUserEmail(localStorage.getItem("userEmail") || "");

    const jobs =
      JSON.parse(localStorage.getItem("savedJobs")) || [];
    setSavedJobs(jobs);
  }, [navigate]);

  const removeSavedJob = (id) => {
    const updatedJobs = savedJobs.filter(
      (job) => job.id !== id
    );

    setSavedJobs(updatedJobs);

    localStorage.setItem(
      "savedJobs",
      JSON.stringify(updatedJobs)
    );
  };

  const handleLogout = () => {
    localStorage.removeItem("loggedIn");
    navigate("/login");
  };
      const [applications, setApplications] = useState([]);
  return (
    <section className="dashboard">

      <div className="dashboard-header">
        <div>
          <h1>Hello, {userName} 👋</h1>
          <p>Welcome to your CareerConnect dashboard.</p>
        </div>

        <button
          onClick={handleLogout}
          className="logout-btn"
        >
          Logout
        </button>
      </div>
     
      {/* Profile */}

      <div className="profile-card">

  <div className="profile-avatar">
    {userName.charAt(0).toUpperCase()}
  </div>

  {!editMode ? (
    <>
      <div className="profile-info">
        <h2>{userName}</h2>
        <p>{userEmail}</p>
      </div>

      <button
        className="edit-profile-btn"
        onClick={() => setEditMode(true)}
      >
        ✏️ Edit Profile
      </button>
    </>
  ) : (
    <div className="edit-profile-form">

      <input
        type="text"
        value={editName}
        onChange={(e) => setEditName(e.target.value)}
        placeholder="Full Name"
      />

      <input
        type="email"
        value={editEmail}
        onChange={(e) => setEditEmail(e.target.value)}
        placeholder="Email"
      />

      <div className="profile-buttons">

        <button
          className="save-profile-btn"
          onClick={() => {
            if (!editName || !editEmail) {
              alert("Please fill all fields.");
              return;
            }

            localStorage.setItem("userName", editName);
            localStorage.setItem("userEmail", editEmail);

            setUserName(editName);
            setUserEmail(editEmail);

            setEditMode(false);

            alert("Profile updated successfully! 🎉");
          }}
        >
          Save
        </button>

        <button
          className="cancel-profile-btn"
          onClick={() => setEditMode(false)}
        >
          Cancel
        </button>

      </div>

    </div>
  )}

</div>
      {/* Statistics */}

      <div className="dashboard-stats">

        <div className="stat-card">
          <span>💼</span>
          <h2>6</h2>
          <p>Available Jobs</p>
        </div>

        <div className="stat-card">
          <span>❤️</span>
          <h2>{savedJobs.length}</h2>
          <p>Saved Jobs</p>
        </div>

        <div className="stat-card">
          <span>📄</span>
          <h2>{applications.length}</h2>
          <p>Applications</p>
        </div>

      </div>

      {/* Saved Jobs */}

      <div className="saved-section">

        <div className="section-heading">
          <h2>❤️ Saved Jobs</h2>

          <Link to="/jobs">
            Find More Jobs →
          </Link>
        </div>

        {savedJobs.length === 0 ? (
          <div className="empty-saved">
            <div>💼</div>

            <h3>No Saved Jobs</h3>

            <p>
              Save jobs that you are interested in
              and find them here.
            </p>

            <Link
              to="/jobs"
              className="primary-btn"
            >
              Browse Jobs
            </Link>
          </div>
        ) : (
          <div className="saved-jobs-grid">

            {savedJobs.map((job) => (
              <div
                className="saved-job-card"
                key={job.id}
              >

                <div className="saved-job-top">

                  <div className="company-logo">
                    {job.company.charAt(0)}
                  </div>

                  <button
                    className="remove-save"
                    onClick={() =>
                      removeSavedJob(job.id)
                    }
                  >
                    ❤️
                  </button>

                </div>

                <h3>{job.title}</h3>

                <p className="company">
                  {job.company}
                </p>

                <p>📍 {job.location}</p>

                <p>💰 {job.salary}</p>

                <Link
                  to={`/job/${job.id}`}
                  className="view-btn"
                >
                  View Job
                </Link>

                <div className="applications-section">

  <div className="section-heading">
    <h2>📄 My Applications</h2>
  </div>

  {applications.length === 0 ? (
    <div className="empty-saved">
      <div>📄</div>

      <h3>No Applications Yet</h3>

      <p>
        Apply for jobs and track your applications here.
      </p>

      <Link
        to="/jobs"
        className="primary-btn"
      >
        Find Jobs
      </Link>
    </div>
  ) : (
    <div className="applications-list">

      {applications.map((application) => (
        <div
          className="application-card"
          key={application.id}
        >

          <div>
            <h3>{application.jobTitle}</h3>

            <p>{application.company}</p>

            <p>📍 {application.location}</p>

            <p>📅 Applied: {application.date}</p>
          </div>

          <span className="application-status">
            {application.status}
          </span>
            <button
            className="remove-application-btn"
            onClick={() => removeApplication(application.id)}
>
             🗑️ Remove
            </button>

        </div>
      ))}

    </div>
  )}

</div>

              </div>
            ))}

          </div>
        )}

      </div>

    </section>
  );
}

export default Dashboard;