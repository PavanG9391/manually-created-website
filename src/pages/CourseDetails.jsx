import { useParams } from "react-router-dom";

import { getCourseById } from "../data/courses";
import "../styles/CourseDetails.css";

function CourseDetails() {
  const { id } = useParams();
  const course = getCourseById(id);

  if (!course) {
    return (
      <div className="course-details">
        {/* The not-found view is keeping the layout simple when the id is wrong. */}
        <div className="course-content">
          <h1>Course Not Found</h1>
        </div>
      </div>
    )
  }

  return (
    <div className="course-details">
      {/* The detail view is reusing the same data for every course page. */}
      <div className="course-banner">
        {/* The banner image is sitting at the top of the page. */}
        <img src={course.banner} alt={`${course.title} Course Banner`} />
      </div>

      <div className="course-content">
        <span className="course-tag">{course.tag}</span>
        {/* The metadata is staying grouped near the title. */}

        <h1>{course.title}</h1>

        <p className="course-description">
          {course.description}
        </p>

        <div className="course-info">
          <div className="info-card">
            <h3>Duration</h3>
            <p>{course.duration}</p>
          </div>

          <div className="info-card">
            <h3>Level</h3>
            <p>{course.level}</p>
          </div>

          <div className="info-card">
            <h3>Instructor</h3>
            <p>{course.instructor}</p>
          </div>

          <div className="info-card">
            <h3>Mode</h3>
            <p>{course.mode}</p>
          </div>
        </div>

        <section className="course-section">
          <h2>Learning Outcomes</h2>

          <ul>
            {course.learningOutcomes.map((outcome) => (
              <li key={outcome}>{outcome}</li>
            ))}
          </ul>
        </section>

        <section className="course-section">
          <h2>Course Modules</h2>

          <ol>
            {course.modules.map((module) => (
              <li key={module}>{module}</li>
            ))}
          </ol>
        </section>

        <section className="course-section">
          <h2>Skills You Will Gain</h2>

          <ul>
            {course.skills.map((skill) => (
              <li key={skill}>{skill}</li>
            ))}
          </ul>
        </section>

        <section className="course-section">
          <h2>Prerequisites</h2>

          <p>{course.prerequisites}</p>
        </section>

        {/* The enrol button is moving users to the contact page. */}
        <button className="enroll-btn">
          Enrol Now
        </button>
      </div>
    </div>
  )
}

export default CourseDetails
