import { FaBook, FaBriefcase } from "react-icons/fa";

const ResumeSection = () => {
  const education = [
    {
      institution: "Federal University Of Technology Minna",
      degree: "B-Tech Mathematics/Statistics",
      duration: "2021 – 2026",
    },

  ];

  const experience = [
    {
      role: "Team Lead/Manager",
      company: "DA-TECH ICT",
      location: "Gwarimpa, FCT-Abuja.",
      duration: "2024 – Present",
      responsibilities: [
        "Leadership & Coordination: Guide team members across different departments and keep projects on track.",
        "Project Management: Plan, execute, and monitor project timelines, resources, and deliverables.",
        "Client Interaction: Communicate with clients, understand requirements, and translate them into actionable tasks.",
        "Branding: Design brand assets including logos, colors, typography.",
        "Tech Advisory: Recommend software, systems, or tools to improve business efficiency.",
   
      ],
    },

    {
        role: "Computer Operator/Graphic Design Manager",
        company: "Frankcona Business Enterprise ",
        location: "Wuse II, FCT-Abuja.",
        duration: "2022 – 2024",
        duration: "July 2022 – March 2024",
        tenure: "(2yrs +)",
        responsibilities: [
          "Lead the visual branding and identity of the organization or projects",
          "Supervise creation of graphics for web, print, social media, ads, packaging, etc.",
          "Translate business goals into visual solutions.",
          "Manage printing, scanning, and other peripheral operations.",
          "Handle file management: storing, retrieving, and organizing digital files securely.",
     
        ],
      },
    {
        role: "Website Designer/Social Media Manager ",
        company: "Citizens’ Health Education & Development Initiative (CHEDI)",
        location: "Wuse II, FCT-Abuja.",
        duration: "2023 – 2023",
        duration: "May 2023 – July 2023",
        tenure: "(3mos)",
        responsibilities: [
          "Website Design & Socail Media Management",
          "Ensure Mobile Responsiveness: Optimize layouts for phones, tablets, and desktops to ensure smooth browsing across devices.",
          "Campaign Planning and Execution: Create and manage strategic social media campaigns to boost engagement and visibility.",
          "Social Media Ads: Set up and manage Facebook, Instagram, and Google Ads campaigns for events, products, or promotions.",
          "Live Streaming Setup: Prepare and manage live broadcasts for special events (e.g., conferences, webinars, religious gatherings).",
     
        ],
      },
    {
        role: "Director Of Graphic Design",
        company: "Divine Master Graphics Business Center",
        location: "New Karu, Keffi-Abuja.",
        duration: "2020 – 2020",
        duration: "March 2020 – July 2022",
        tenure: "(2yrs +)",
        responsibilities: [
          "Freelance Web Design for Clients Requesting for Website Design",
          "Director of Graphic Design & Cybe Cafe Printing Press",
          "Oversee branding, logo design, posters, flyers, business cards, banners, and other print materials.",
          "Design web banners, sliders, and icons tailored to each client’s content.",
          "Recommend best materials and finishing options (e.g., gloss, matte, lamination) for client jobs.",
     
        ],
      },

  ];


  return (
    <section className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-12">Resume</h2>

        {/* Education Section */}
        <div className="mb-16">
          <div className="flex items-center mb-8">
            <FaBook className="text-yellow-400 text-2xl mr-4" />
            <h3 className="text-2xl font-semibold">Education</h3>
          </div>
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-6 top-0 h-full w-0.5 bg-gray-600"></div>
            {education.map((edu, index) => (
              <div key={index} className="mb-8 relative flex items-start">
                {/* Timeline Dot */}
                <div className="absolute left-6 w-4 h-4 bg-yellow-400 rounded-full -ml-[7px] mt-1"></div>
                {/* Text Content */}
                <div className="pl-12">
                  <h4 className="text-xl font-semibold">{edu.institution}</h4>
                  <p className="text-gray-300">{edu.degree}</p>
                  <p className="text-gray-400">{edu.duration}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Experience Section */}
        <div>
          <div className="flex items-center mb-8">
            <FaBriefcase className="text-yellow-400 text-2xl mr-4" />
            <h3 className="text-2xl font-semibold">Experience</h3>
          </div>
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-6 top-0 h-full w-0.5 bg-gray-600"></div>
            {experience.map((exp, index) => (
              <div key={index} className="mb-8 relative flex items-start">
                {/* Timeline Dot */}
                <div className="absolute left-6 w-4 h-4 bg-yellow-400 rounded-full -ml-[7px] mt-1"></div>
                {/* Text Content */}
                <div className="pl-12">
                  <h4 className="text-xl font-semibold">{exp.role}</h4>
                  <p className="text-gray-300">
                    {exp.company} 
                  </p>
                  <p className="text-gray-300">
                    {exp.location}
                  </p>
                  <p className="text-gray-400">
                    {exp.duration} {exp.tenure}
                  </p>
                  <ul className="mt-4 space-y-2">
                    {exp.responsibilities.map((resp, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="w-2 h-2 bg-yellow-400 rounded-full mt-2 mr-3"></span>
                        <span className="text-gray-300">{resp}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResumeSection;