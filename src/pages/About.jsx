
import ResumeSection from "../components/ResumeSection";

const About = () => {
    return (
      <div className="bg-gray-900 min-h-screen py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Intro */}
          <section className="text-center mb-16">
          <img
              src="./images/profile.jpg" // Replace with your headshot
              alt="Profile"
              className="w-50 h-50 rounded-full mx-auto "
            />
            <p className="text-lg max-w-2xl mx-auto">
            To be recognized as an outstanding professional by working diligently and
            intelligently, both individually and as part of a team.
            I aim to solve problems effectively and deliver exceptional results in every task or
            operation I undertake.
            </p>
          </section>
  
            {/* Resume Section */}
            <ResumeSection />

        </div>
      </div>
    );
  };
  
  export default About;