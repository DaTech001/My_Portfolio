import { useState, useEffect } from "react";
import {
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiReact,
  SiNodedotjs,
  SiMysql,
  SiMongodb,
  SiAdobephotoshop,
  SiTailwindcss,
  SiBootstrap,
  SiGithub,
} from "react-icons/si";
import { FaPaintBrush, FaBriefcase, FaShareSquare } from "react-icons/fa"; // Generic icons for Canva, Corel Draw, Zoho, Buffer

const SkillsSection = () => {
  const [flippedCards, setFlippedCards] = useState({});
  const [showMore, setShowMore] = useState(false);

  // Auto-flip the first card every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setFlippedCards((prev) => ({
        ...prev,
        0: !prev[0], // Toggle the first card (index 0)
      }));
    }, 4000); // Every 4 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  // Toggle flip state for a specific card
  const toggleFlip = (index) => {
    setFlippedCards((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  // Toggle show more/less
  const toggleShowMore = () => {
    setShowMore((prev) => !prev);
  };

  // Updated Skills data
  const skills = [
    {
      title: "JavaScript",
      icon: <SiJavascript className="text-yellow-400" />,
      details: "Front-End: JavaScript, React",
    },
    {
      title: "HTML5",
      icon: <SiHtml5 className="text-orange-600" />,
      details: "Front-End: HTML5 for semantic markup",
    },
    {
      title: "CSS3",
      icon: <SiCss3 className="text-blue-600" />,
      details: "Front-End: CSS3 for responsive design",
    },
    {
      title: "React",
      icon: <SiReact className="text-cyan-400" />,
      details: "Front-End: React for dynamic UIs",
    },
    {
      title: "Node.js",
      icon: <SiNodedotjs className="text-green-600" />,
      details: "Back-End: Node.js for server-side development",
    },
    {
      title: "MySQL",
      icon: <SiMysql className="text-blue-700" />,
      details: "Databases: MySQL for relational data management",
    },
    {
      title: "MongoDB",
      icon: <SiMongodb className="text-green-500" />,
      details: "Databases: MongoDB for NoSQL solutions",
    },
    {
      title: "Adobe Photoshop",
      icon: <SiAdobephotoshop className="text-purple-600" />,
      details: "Graphic Design: Adobe Photoshop for stunning visuals",
    },
    {
      title: "Canva",
      icon: <FaPaintBrush className="text-green-500" />,
      details: "Graphic Design: Canva for creative designs",
    },

    {
      title: "Corel Draw",
      icon: <FaPaintBrush className="text-orange-600" />,
      details: "Graphic Design: Corel Draw for vector graphics",
    },
    {
      title: "Zoho",
      icon: <FaBriefcase className="text-gray-400" />,
      details: "Business Tools: Zoho for CRM and productivity",
    },
    {
      title: "Buffer",
      icon: <FaShareSquare className="text-blue-500" />,
      details: "Digital Marketing: Buffer for social media management",
    },
    {
      title: "TailwindCSS",
      icon: <SiTailwindcss className="text-cyan-500" />,
      details: "Front-End: TailwindCSS for utility-first styling",
    },
    {
      title: "Bootstrap",
      icon: <SiBootstrap className="text-purple-600" />,
      details: "Front-End: Bootstrap for responsive frameworks",
    },
    {
      title: "GitHub",
      icon: <SiGithub className="text-gray-400" />,
      details: "Tools: GitHub for version control and collaboration",
    },
  ];

  // Split skills into visible (first 8) and hidden (rest)
  const visibleSkills = skills.slice(0, 8);
  const hiddenSkills = skills.slice(8);

  return (
    <section className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Professional Write-Up */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">My Skills</h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            With 5 years of experience as a full-stack developer, graphic
            designer, digital marketer, IT consultant, and more, I bring a
            diverse skill set to deliver end-to-end solutions. From crafting
            responsive front-end interfaces to building scalable back-end
            systems, I leverage modern tools and methodologies to create impactful
            projects that drive results.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {visibleSkills.map((skill, index) => (
            <div
              key={index}
              className="relative w-full h-40 perspective-1000"
              role="button"
              tabIndex={0}
              aria-expanded={flippedCards[index] || false}
              aria-controls={`skill-back-${index}`}
              onClick={() => toggleFlip(index)}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  toggleFlip(index);
                }
              }}
            >
              {/* Card Container with Flip Animation */}
              <div
                className={`relative w-full h-full transition-transform duration-500 transform-style-preserve-3d cursor-pointer hover:scale-105 ${
                  flippedCards[index] ? "rotate-y-180" : ""
                }`}
              >
                {/* Front of the Card */}
                <div className="absolute inset-0 bg-gray-800 rounded-lg shadow-lg flex flex-col items-center justify-center p-4 backface-hidden">
                  <div className="text-5xl mb-2">{skill.icon}</div>
                  <h3 className="text-lg font-semibold">{skill.title}</h3>
                </div>

                {/* Back of the Card */}
                <div className="absolute inset-0 bg-gray-800 rounded-lg shadow-lg flex items-center justify-center p-4 backface-hidden rotate-y-180">
                  <p className="text-gray-300 text-center text-sm">
                    {skill.details}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Hidden Skills (Toggled) */}
        <div
          className={`grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 mt-6 transition-all duration-300 ${
            showMore ? "block" : "hidden"
          }`}
        >
          {hiddenSkills.map((skill, index) => (
            <div
              key={index + visibleSkills.length}
              className="relative w-full h-40 perspective-1000"
              role="button"
              tabIndex={0}
              aria-expanded={flippedCards[index + visibleSkills.length] || false}
              aria-controls={`skill-back-${index + visibleSkills.length}`}
              onClick={() => toggleFlip(index + visibleSkills.length)}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  toggleFlip(index + visibleSkills.length);
                }
              }}
            >
              {/* Card Container with Flip Animation */}
              <div
                className={`relative w-full h-full transition-transform duration-500 transform-style-preserve-3d cursor-pointer hover:scale-105 ${
                  flippedCards[index + visibleSkills.length] ? "rotate-y-180" : ""
                }`}
              >
                {/* Front of the Card */}
                <div className="absolute inset-0 bg-gray-800 rounded-lg shadow-lg flex flex-col items-center justify-center p-4 backface-hidden">
                  <div className="text-5xl mb-2">{skill.icon}</div>
                  <h3 className="text-lg font-semibold">{skill.title}</h3>
                </div>

                {/* Back of the Card */}
                <div className="absolute inset-0 bg-gray-800 rounded-lg shadow-lg flex items-center justify-center p-4 backface-hidden rotate-y-180">
                  <p className="text-gray-300 text-center text-sm">
                    {skill.details}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Show More / Show Less Button */}
        <div className="text-center mt-8">
          <button
            onClick={toggleShowMore}
            className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600 transition-colors duration-200"
          >
            {showMore ? "Show Less" : "Show More"}
          </button>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;