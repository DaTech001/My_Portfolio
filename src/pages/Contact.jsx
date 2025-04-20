import React from 'react';

// Font Awesome imports for social media icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXTwitter, faInstagram, faFacebook, faLinkedin, faWhatsapp } from '@fortawesome/free-brands-svg-icons';

const Contact = () => {
  return (
    <div className="bg-gray-900 min-h-screen py-16 flex items-center justify-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl font-bold text-white mb-12">Connect With Me</h1>
        <div className="flex flex-col md:flex-row justify-center items-center gap-6 md:gap-8">

            {/* WhatsApp Icon */}
                    <a
            href="http://wa.me/2349137026585"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative"
          >
            <FontAwesomeIcon
              icon={faWhatsapp}
              className="text-white text-4xl md:text-5xl hover:text-green-500 transition-colors duration-300"
            />
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 group-hover:animate-glow transition-opacity duration-300">
              <div className="w-full h-full rounded-full bg-green-500/30 blur-md"></div>
            </div>
          </a>

              
              {/* LinkedIn Icon */}
                    <a
            href="https://www.linkedin.com/in/ayodele-david/"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative"
          >
            <FontAwesomeIcon
              icon={faLinkedin}
              className="text-white text-4xl md:text-5xl hover:text-blue-700 transition-colors duration-300"
            />
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 group-hover:animate-glow transition-opacity duration-300">
              <div className="w-full h-full rounded-full bg-blue-700/30 blur-md"></div>
            </div>
          </a>



          {/* X Icon */}
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative"
          >
            <FontAwesomeIcon
              icon={faXTwitter}
              className="text-white text-4xl md:text-5xl hover:text-blue-400 transition-colors duration-300"
            />
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 group-hover:animate-glow transition-opacity duration-300">
              <div className="w-full h-full rounded-full bg-blue-400/30 blur-md"></div>
            </div>
          </a>

          {/* Instagram Icon */}
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative"
          >
            <FontAwesomeIcon
              icon={faInstagram}
              className="text-white text-4xl md:text-5xl hover:text-pink-500 transition-colors duration-300"
            />
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 group-hover:animate-glow transition-opacity duration-300">
              <div className="w-full h-full rounded-full bg-pink-500/30 blur-md"></div>
            </div>
          </a>

          {/* Facebook Icon */}
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative"
          >
            <FontAwesomeIcon
              icon={faFacebook}
              className="text-white text-4xl md:text-5xl hover:text-blue-600 transition-colors duration-300"
            />
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 group-hover:animate-glow transition-opacity duration-300">
              <div className="w-full h-full rounded-full bg-blue-600/30 blur-md"></div>
            </div>
          </a>


        </div>
      </div>

      {/* Inline CSS for glowing animation */}
      <style>
        {`
          @keyframes glow {
            0% {
              box-shadow: 0 0 5px rgba(255, 255, 255, 0.3), 0 0 10px rgba(255, 255, 255, 0.2);
            }
            50% {
              box-shadow: 0 0 10px rgba(255, 255, 255, 0.5), 0 0 20px rgba(255, 255, 255, 0.4);
            }
            100% {
              box-shadow: 0 0 5px rgba(255, 255, 255, 0.3), 0 0 10px rgba(255, 255, 255, 0.2);
            }
          }

          .animate-glow {
            animation: glow 1.5s infinite;
          }
        `}
      </style>
    </div>
  );
};

export default Contact;