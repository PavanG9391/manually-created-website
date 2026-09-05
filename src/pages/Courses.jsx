import CourseCard from "../components/CourseCard";
import { courses } from "../data/courses";
import "../styles/Courses.css";

function Courses() {
  return (
    <div className="courses-page">
      {/* The course catalogue is showing the full list in one page. */}
      <section className="courses-header">
        <h1>Our Courses</h1>

        <p>
          Explore our comprehensive range of courses designed to develop
          practical skills, strengthen academic knowledge, and prepare you
          for successful careers in today's competitive world.
        </p>
      </section>

      {/* The cards are being rendered from the shared course dataset. */}
      <section className="courses-container">
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
    </div>
  )
}

export default Courses
