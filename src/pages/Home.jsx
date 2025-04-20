import { useState, useEffect } from "react";
import { Link } from "react-router-dom";  
import SkillsSection from "../components/SkillsSection";


const Home = () => {
  const [typedText, setTypedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const fullName = "David A. Ayodele"; // Replace with your actual name
  const typingSpeed = 150; // Speed of typing (ms)
  const deletingSpeed = 100; // Speed of deleting (ms)
  const pauseDuration = 2000; // Pause before deleting (ms)

  useEffect(() => {
    const handleTyping = () => {
      if (!isDeleting && typedText.length < fullName.length) {
        // Typing
        setTypedText(fullName.slice(0, typedText.length + 1));
      } else if (!isDeleting && typedText.length === fullName.length) {
        // Pause before deleting
        setTimeout(() => setIsDeleting(true), pauseDuration);
      } else if (isDeleting && typedText.length > 0) {
        // Deleting
        setTypedText(fullName.slice(0, typedText.length - 1));
      } else if (isDeleting && typedText.length === 0) {
        // Reset to typing
        setIsDeleting(false);
      }
    };

    const timer = setTimeout(
      handleTyping,
      isDeleting ? deletingSpeed : typingSpeed
    );

    return () => clearTimeout(timer); // Cleanup
  }, [typedText, isDeleting]);

  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Hi, I’m{" "}
            <span className="inline-block relative">
              {typedText}
              <span className="absolute right-0 top-0 h-full w-1 bg-white animate-blink"></span>
            </span>
          </h1>
          <p className="text-lg md:text-xl mb-8">
            Full-Stack Developer & Creative Professional with 5 Years of
            Experience
          </p>
          <Link
            to="/projects"
            className="bg-white text-blue-600 px-6 py-3 rounded-md font-medium hover:bg-gray-200 transition"
          >
            Explore My Work
          </Link>
        </div>
      </section>


      {/* Skills Section */}
      <SkillsSection />

    </div>
  );
};

export default Home;