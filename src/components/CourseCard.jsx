import { Link } from "react-router-dom";
import "../styles/CourseCard.css";

function CourseCard({
  id,
  image,
  title,
  instructor,
  duration,
  level,
  description,
}) {
  return (
    <div className="course-card">
      {/* The course card is showing image, details, and the detail link together. */}
      <img src={image} alt={title} className="course-image" />

      <div className="course-content">
        {/* The content block is keeping the summary stacked in one place. */}
        <h3>{title}</h3>

        <p className="course-instructor">
          <strong>Instructor:</strong> {instructor}
        </p>

        <p className="course-info">
          <span>{duration}</span>
          <span>{level}</span>
        </p>

        <p className="course-description">
          {description}
        </p>

        {/* The link is taking users into the matching course details page. */}
        <Link to={`/course-details/${id}`} className="course-btn">
          View Details
        </Link>
      </div>
    </div>
  )
}

export default CourseCard
