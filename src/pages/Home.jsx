import Hero from "../components/Hero";
import CourseCard from "../components/CourseCard";
import { courses } from "../data/courses";
import "../styles/Home.css";

function Home() {
  return (
    <div className="home">
      {/* The hero section is starting the page before the course cards. */}
      <Hero />

      {/* The featured course grid is being filled from shared course data. */}
      <section className="featured-courses">
        <h2 className="section-title">Popular Courses</h2>

        <p className="section-subtitle">
          Explore our industry-focused courses designed to help students gain
          practical skills, enhance their careers, and achieve academic
          excellence.
        </p>

        <div className="course-grid">
          {courses.map(({ id, image, title, instructor, duration, level, description }) => (
            <CourseCard
              key={id}
              id={id}
              image={image}
              title={title}
              instructor={instructor}
              duration={duration}
              level={level}
              description={description}
            />
          ))}
        </div>
      </section>

      {/* The why-us block is showing the short value points below the cards. */}
      <section className="why-us">
        <div className="why-us-container">
          <h2 className="section-title">Why Choose ScholarSphere?</h2>

          <p className="section-subtitle">
            We provide high-quality education through experienced instructors,
            practical learning, and flexible online study options.
          </p>

          <div className="why-us-grid">
            <div className="why-card">
              <h3>Experienced Faculty</h3>
              <p>
                Learn from industry professionals and experienced educators with
                practical expertise.
              </p>
            </div>

            <div className="why-card">
              <h3>Flexible Learning</h3>
              <p>
                Access course materials anytime, anywhere, from desktop,
                tablet, or mobile devices.
              </p>
            </div>

            <div className="why-card">
              <h3>Career Support</h3>
              <p>
                Receive career guidance, mentoring, and certification to help
                achieve your professional goals.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
