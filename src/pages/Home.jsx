import { Link } from "react-router-dom";

function Home() {
  const handleContactSubmit = (e) => {
    e.preventDefault();
    alert("Message sent successfully! 🎉");
  };

  return (
    <section className="home">

      {/* ================= HERO ================= */}
      <div className="hero">
        <div className="hero-content">
          <h1>
            Find Your <span>Dream Job</span>
          </h1>

          <p>
            Discover exciting career opportunities and connect
            with companies looking for talented people like you.
          </p>

          <div className="hero-buttons">
            <Link to="/jobs" className="primary-btn">
              Explore Jobs
            </Link>

            <Link to="/register" className="secondary-btn">
              Create Account
            </Link>
          </div>
        </div>

        <div className="hero-card">
          <div className="search-icon">🔎</div>
          <h2>10,000+</h2>
          <p>Job Opportunities</p>
        </div>
      </div>


      {/* ================= FEATURES ================= */}
      <div className="features">

        <div className="feature-card">
          <div>💼</div>
          <h3>Find Jobs</h3>
          <p>
            Search thousands of job opportunities from different
            companies.
          </p>
        </div>

        <div className="feature-card">
          <div>🏢</div>
          <h3>Top Companies</h3>
          <p>
            Discover career opportunities from leading companies.
          </p>
        </div>

        <div className="feature-card">
          <div>🚀</div>
          <h3>Build Career</h3>
          <p>
            Take the next step toward your professional career.
          </p>
        </div>

      </div>


      {/* ================= STATISTICS ================= */}
      <div className="stats-section">

        <div className="stat-item">
          <h2>10,000+</h2>
          <p>Jobs Available</p>
        </div>

        <div className="stat-item">
          <h2>5,000+</h2>
          <p>Registered Users</p>
        </div>

        <div className="stat-item">
          <h2>1,000+</h2>
          <p>Companies</p>
        </div>

        <div className="stat-item">
          <h2>95%</h2>
          <p>Success Rate</p>
        </div>

      </div>


      


      {/* ================= ABOUT ================= */}
      <div className="about-section">

        <div className="about-content">

          <span className="about-label">
            ABOUT US
          </span>

          <h2>
            Build Your Career With CareerConnect
          </h2>

          <p>
            CareerConnect is a modern job portal designed to help
            job seekers discover opportunities and connect with
            companies.
          </p>

          <p>
            Search for jobs, save your favorite opportunities,
            apply for positions and manage your applications
            from one simple dashboard.
          </p>

          <Link to="/jobs" className="primary-btn">
            Explore Jobs →
          </Link>

        </div>


        <div className="about-features">

          <div className="about-box">
            <span>🔍</span>
            <h3>Easy Job Search</h3>
            <p>
              Find jobs based on your skills and location.
            </p>
          </div>

          <div className="about-box">
            <span>📄</span>
            <h3>Easy Application</h3>
            <p>
              Apply for jobs with a simple application process.
            </p>
          </div>

          <div className="about-box">
            <span>📊</span>
            <h3>Track Applications</h3>
            <p>
              Manage and track your applications easily.
            </p>
          </div>

          <div className="about-box">
            <span>🚀</span>
            <h3>Career Growth</h3>
            <p>
              Discover opportunities for your professional growth.
            </p>
          </div>

        </div>

      </div>


      {/* ================= CONTACT ================= */}
      <div className="contact-section">

        <div className="contact-info">

          <span className="about-label">
            CONTACT US
          </span>

          <h2>
            Have Questions?
          </h2>

          <p>
            If you have any questions or feedback about
            CareerConnect, feel free to contact us.
          </p>


          <div className="contact-item">
            <span>📧</span>

            <div>
              <h3>Email</h3>
              <p>support@careerconnect.com</p>
            </div>
          </div>


          <div className="contact-item">
            <span>📞</span>

            <div>
              <h3>Phone</h3>
              <p>+91 74xxxxxxxx</p>
            </div>
          </div>


          <div className="contact-item">
            <span>📍</span>

            <div>
              <h3>Location</h3>
              <p>Pune, Maharashtra, India</p>
            </div>
          </div>

        </div>


        <div className="contact-form">

          <h2>
            Send Us a Message
          </h2>

          <form onSubmit={handleContactSubmit}>

            <input
              type="text"
              placeholder="Your Name"
              required
            />

            <input
              type="email"
              placeholder="Your Email"
              required
            />

            <textarea
              placeholder="Your Message"
              rows="5"
              required
            ></textarea>

            <button
              type="submit"
              className="submit-application"
            >
              Send Message
            </button>

          </form>

        </div>

      </div>

    </section>
  );
}

export default Home;