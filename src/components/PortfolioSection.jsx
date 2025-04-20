import { useState } from "react";

// Placeholder images (replace with actual image paths or URLs)
const projectImages = {
  greendiamond: "../images/greendiamond.png",
  corpland: "../images/corpland.png",
  nuel: "../images/nuel.png",
  chedi: "../images/chedi..png",
  pamasal: "../images/pamasal.png",
  greet1: "../images/chris.jpg",
  greet2: "../images/new.jpg",


};




const PortfolioSection = () => {
  const [activeTab, setActiveTab] = useState("All");

  const projects = [
    {
      id: "greendiamond",
      title: "Green Diamond",
      category: "Web-Development",
      image: projectImages.greendiamond,
      externalUrl: "https://greendiamondenergy.com.ng/", // Replace with actual URL
    },
    {
      id: "corpland-guru",
      title: "Corpland International",
      category: "Web-Development",
      image: projectImages.corpland,
      externalUrl: "https://corplandguru.com", // Replace with actual URL
    },
    {
      id: "nuel",
      title: "Nuel Oil & Gas",
      category: "Web-Development",
      image: projectImages.nuel,
      externalUrl: "https://nuel.com", // Replace with actual URL
    },
    {
      id: "pamasal",
      title: "Pamasal Security",
      category: "Web-Development",
      image: projectImages.pamasal,
      externalUrl: "https://pamasal.com", // Replace with actual URL
    },
    {
      id: "pamasal",
      title: "pamasal",
      category: "UI/UX",
      image: projectImages.pamasal,
      externalUrl: "https://pamasal.com", // Replace with actual URL
    },
    {
      id: "chedi",
      title: "CHEDI NGO",
      category: "Web-Development",
      image: projectImages.chedi,
      externalUrl: "https://chedi.com", // Replace with actual URL
    },
    {
      id: "greet2",
      title: "Seasons Greeting",
      category: "Graphic-Designs",
      image: projectImages.greet1,
      externalUrl: "http://localhost:5174/images/new.jpg", // Replace with actual URL (e.g., Behance or Dribbble link)
    },
    {
      id: "greet1",
      title: "New Year",
      category: "Graphic-Designs",
      image: projectImages.greet2,
      externalUrl: "http://localhost:5174/images/chris.jpg", // Replace with actual URL
    },
  ];

  const tabs = ["All", "Web-Development",  "UI/UX", "Graphic-Designs"];

  const filteredProjects =
    activeTab === "All"
      ? projects
      : projects.filter((project) => project.category === activeTab);

  return (
    <section className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-8">Portfolio</h2>

        {/* Tabs */}
        <div className="flex justify-center space-x-4 mb-8">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 rounded-md font-medium transition-colors ${
                activeTab === tab
                  ? "bg-yellow-400 text-gray-900"
                  : "bg-gray-700 text-gray-300 hover:bg-gray-600"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="space-y-8">
          {/* First Row: 3 Equal Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {filteredProjects.slice(0, 3).map((project) => (
              <a
                key={project.id}
                href={project.externalUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300"
              >
                {/* Image */}
                <div className="h-48 flex items-center justify-center bg-gray-800 ">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="max-h-full max-w-full object-contain"
                    loading="lazy"
                  />
                </div>

                {/* Text */}
                <div className="p-4 text-center">
                  <h3 className="text-lg font-semibold text-gray-900">{project.title}</h3>
                  <p className="text-gray-500">{project.category}</p>
                </div>
              </a>
            ))}
          </div>

          {/* Second Row: 3 Cards with Middle One Larger */}
          {filteredProjects.length > 3 && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {filteredProjects.slice(3, 6).map((project, index) => (
                <a
                  key={project.id}
                  href={project.externalUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`block bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300 ${
                    index === 1 ? "md:col-span-2" : ""
                  }`}
                >
                  {/* Image */}
                  <div
                    className={`${
                      index === 1 ? "h-64" : "h-48"
                    } flex items-center justify-center bg-gray-100`}
                  >
                    <img
                      src={project.image}
                      alt={project.title}
                      className="max-h-full max-w-full object-contain"
                      loading="lazy"
                    />
                  </div>

                  {/* Text */}
                  <div className="p-4 text-center">
                    <h3 className="text-lg font-semibold text-gray-900">{project.title}</h3>
                    <p className="text-gray-500">{project.category}</p>
                  </div>
                </a>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;