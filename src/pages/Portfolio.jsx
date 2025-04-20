const Portfolio = () => {
    return (
      <div className="bg-gray-100 min-h-screen py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-center mb-12">My Portfolio</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img
                src="https://via.placeholder.com/300x200"
                alt="Project 1"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h2 className="text-xl font-semibold mb-2">E-Commerce App</h2>
                <p className="text-gray-600 mb-4">
                  Built a full-stack app with React and MongoDB.
                </p>
                <p className="text-sm text-gray-500">
                  Skills: React, Node.js, MongoDB
                </p>
                <a
                  href="#"
                  className="text-blue-500 hover:underline mt-4 inline-block"
                >
                  View Project
                </a>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img
                src="https://via.placeholder.com/300x200"
                alt="Project 2"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h2 className="text-xl font-semibold mb-2">Brand Logo</h2>
                <p className="text-gray-600 mb-4">
                  Designed a logo for a startup using Illustrator.
                </p>
                <p className="text-sm text-gray-500">
                  Skills: Illustrator, Photoshop
                </p>
                <a
                  href="#"
                  className="text-blue-500 hover:underline mt-4 inline-block"
                >
                  View Project
                </a>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="p-6">
                <h2 className="text-xl font-semibold mb-2">SEO Campaign</h2>
                <p className="text-gray-600 mb-4">
                  Boosted client website traffic by 50% with targeted SEO.
                </p>
                <p className="text-sm text-gray-500">Skills: SEO, Analytics</p>
                <a
                  href="#"
                  className="text-blue-500 hover:underline mt-4 inline-block"
                >
                  View Project
                </a>
              </div>
            </div>
            {/* Add more projects based on your work */}
          </div>
        </div>
      </div>
    );
  };
  
  export default Portfolio;