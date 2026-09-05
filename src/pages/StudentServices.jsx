import {
  FaBook,
  FaBriefcase,
  FaComments,
  FaLaptopCode,
  FaUsers,
  FaUserGraduate,
} from "react-icons/fa";
import ServiceCard from "../components/ServiceCard";
import "../styles/StudentServices.css";

function StudentServices() {
  return (
    <div className="student-services">
      {/* The student services page is showing support cards in a responsive grid. */}

      <section className="services-header">
        <h1>Student Services</h1>

        <p>
          We provide comprehensive support services to help students achieve
          academic success, career growth, and personal development throughout
          their learning journey.
        </p>
      </section>

      <section className="services-grid">
      {/* The reusable service card component is being used for every item. */}

        <ServiceCard icon={FaUserGraduate} title="Academic Advising">
          Get personalized guidance on course selection, study plans, and
          academic progress from experienced advisors.
        </ServiceCard>

        <ServiceCard icon={FaBriefcase} title="Career Support">
          Access resume building, interview preparation, internships, and
          career counselling to achieve your professional goals.
        </ServiceCard>

        <ServiceCard icon={FaBook} title="Digital Library">
          Explore thousands of e-books, journals, research papers, and online
          learning resources available anytime.
        </ServiceCard>

        <ServiceCard icon={FaUsers} title="Student Mentoring">
          Connect with experienced mentors for academic guidance, project
          support, and career development advice.
        </ServiceCard>

        <ServiceCard icon={FaLaptopCode} title="Technical Support">
          Receive prompt assistance for learning platforms, online classes,
          and technical issues throughout your studies.
        </ServiceCard>

        <ServiceCard icon={FaComments} title="Student Community">
          Join discussion forums, networking events, workshops, and student
          clubs to collaborate and build meaningful connections.
        </ServiceCard>

      </section>

    </div>
  );
}

export default StudentServices;
