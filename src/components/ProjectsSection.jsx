import { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination, Autoplay } from "swiper/modules";
import Modal from "react-modal";

// Bind modal to the app element for accessibility
Modal.setAppElement("#root");

const ProjectsSection = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedAsset, setSelectedAsset] = useState(null);
  const [assetType, setAssetType] = useState(""); // "image" or "pdf"
  const [descriptionModalIsOpen, setDescriptionModalIsOpen] = useState(false);
  const [selectedDescription, setSelectedDescription] = useState("");

  const projects = [
    {
      id: "greendiamond",
      title: "Green Diamond Energy & Investment Energy ",
      category: "Web development & Graphic Designs",
      shortDescription: "A website showcasing renewable energy solutions.",
      description:
        "A website for Green Diamond Energy, showcasing renewable energy solutions with a responsive design. Also includes graphic design work such as logo, company profile, and letterhead.",
      fullDescription:
        "Project Date: May, 2024 \n\n Green Diamond Energy & Investment Energy Project — Renewable Energy Solutions\n\nI delivered a comprehensive solution for Green Diamond Energy, combining web development and graphic design:\n\n💻 Responsive Website Design: Created a fully responsive website to showcase renewable energy solutions, ensuring accessibility across devices.\n\n🎨 Brand Identity Development: Designed a cohesive brand identity including logo, company profile, and letterhead, reflecting the company’s commitment to sustainability.\n\n🖼️ Graphic Media Creation: Produced high-quality graphics for digital and print media, including promotional materials.\n\n🖨️ Print-Ready Deliverables: Managed the creation and delivery of print-ready files for professional use.\n\nThis project highlights my ability to integrate web development and graphic design to create a unified and impactful presence for a renewable energy company.",
      mockup: "../images/greendiamond.png",
      image: "../images/greendiamond.png",
      websiteUrl: "https://greendiamondenergy.com.ng",
      graphics: [
        { type: "image", src: "../images/greenlogo.jpg", label: "Logo" },
        { type: "pdf", src: "../images/greenprofile.pdf", label: "Company Profile" },
        { type: "pdf", src: "../images/greenletter.pdf", label: "Letterhead" },
      ],
      techStack: ["HTML", "CSS", "Bootstrap", "JavaScript", "PHP", "CorelDraw", "Canva"],
    },
    {
      id: "corpland-security",
      title: "Corpland Security International",
      category: "Web development & Graphic Designs",
      shortDescription: "A Security company website focused on delivering advanced security solutions.",
      description:
        "I developed a responsive website for Corpland Security International, a company focused on delivering advanced security solutions. The website showcases their services, expertise, and professional presence with a modern, mobile-friendly design.",
      fullDescription:
        "Project Date: July, 2024 \n\n Security Company Project — Full Digital & Brand Deployment\nI executed a complete digital and branding solution for a security company, covering both creative and technical aspects:\n\n💻 Responsive Website Design: Built a modern, user-friendly website that works seamlessly across all devices.\n\n🎨 Full Brand Identity Design: Developed the company's branding including logo design, color scheme, and typography for a consistent corporate image.\n\n🖼️ Graphic Media Creation: Designed all graphic content — from flyers and banners to business cards and branded materials.\n\n🖨️ Professional Printing Services: Delivered high-quality print-ready files and managed production for all physical materials.\n\n📽️ Media Presentation Support: Set up and managed media systems for corporate presentations and events.\n\n🧰 Software Installation & IT Setup: Provided software installation and configuration services tailored to the company’s operational needs.\n\nThis project demonstrates my ability to provide a complete business solution — combining web design, branding, IT services, and media support for a professional and cohesive outcome.",
      mockup: "../images/corpland.png",
      image: "../images/corpland.png",
      websiteUrl: "https://www.corplandsecurity.org.ng/",
      graphics: [
        { type: "image", src: "../images/corplogo.gif", label: "Logo" },
        { type: "pdf", src: "../images/corprofile.pdf", label: "Company Profile" },
        { type: "pdf", src: "../images/card.pdf", label: "Business Card" },
      ],
      techStack: ["HTML", "CSS", "Bootstrap", "JavaScript","Adobe Photoshop", "CorelDraw", "Canvas"],
    },
    {
      id: "pamasal-security",
      title: "Pamasal Security Technology",
      category: "Web development & Graphic Designs",
      shortDescription: "Identifying the need for streamlined, stress-free client interactions.",
      description:
        "Identifying the need for streamlined, stress-free client interactions, I integrated a user-friendly appointment and service booking system for security companines",
      fullDescription:
      "Project Date: December, 2024 \n\n Project Date: December, 2024 \n\n PAMASAL SECURITY AND TECHNOLOGY SERVICES LTD — Full Digital Transformation & Brand Deployment\nI delivered a comprehensive digital transformation and branding solution for Pamasal Security and Technology Services Ltd, aligning their operations with modern, user-centric, and internationally recognized standards:\n\n💻 Responsive Website Design: BDeveloped a sleek, secure, and fully responsive website that ensures smooth performance across all devices. The design emphasizes professionalism, trust, and accessibility, tailored specifically for the security industry.\n\n🌐 Online Service Booking Integration: Identifying the need for streamlined, stress-free client interactions, I integrated a user-friendly appointment and service booking system. Clients can now book any of the company’s services online, and the company receives instant notifications, improving response time and customer satisfaction.\n\n Complete Brand Identity Design:Established a consistent and modern brand identity, including:Logo Design, Corporate Color Palette, Typography & Visual Guidelines, Branded Stationery (letterhead, business cards)\n\n🖼️ Graphic Media Creation: Designonal Printing Services: Delivered high-quality print-ready files and managed production for all physical materials.\n\nThis project highlights my ability to offer a full-service solution from UI/UX design, branding, and media to IT support and business automation  delivering a seamless, internationally standard digital presence for a modern security firm.", 

      mockup: "../images/pamasal.png",
      image: "../images/pamasal.png",
      websiteUrl: "https://pamasalsecuritytech.com",
      graphics: [
        { type: "image", src: "../images/pamlogo.jpg", label: "Logo" },
        { type: "pdf", src: "../images/pamprofile.pdf", label: "Company Profile" },
        { type: "pdf", src: "../images/pamlettter.pdf", label: "Letterhead" },
      ],
      techStack: ["HTML", "CSS", "Bootstrap", "JavaScript","Adobe Photoshop", "CorelDraw", "Canvas", "Figma"],
    },
    {
      id: "nuel-petrogas",
      title: "NUEL PETROGAS & ENERGY",
      category: "Web development & Graphic Designs",
      shortDescription: "I spearheaded the creation of a dynamic online presence through website development",
      description:
        "I spearheaded the creation of a dynamic online presence through website development, graphic design, and social media projects",
      fullDescription:
        "Project Date: December, 2025 \n\n PROJECT SHOWCASE: NUEL PETROGAS ENERGY \n\nAs a lead developer and designer I was contacted by Nuel Petrogas Energy, I spearheaded the creation of a dynamic online presence through website development, graphic design, and social media projects. These initiatives were designed to elevate the brand’s visibility, engage stakeholders, and establish Nuel Petrogas Energy as a trusted player in the oil and gas sector. Below is an overview of the projects, the skills applied, and the valuable experience gained.\n\nPROJECT OVERVIEW:\n\n🔄 Website Development: The Nuel Petrogas Energy website serves as the digital cornerstone of the company, providing a professional platform to showcase its services in oil and gas exploration, production, and distribution. The website features a clean, responsive design with intuitive navigation, ensuring accessibility across devices and an engaging user experience for clients, partners, and stakeholders.\n\nGraphic Design: I created a suite of visual assets, including the company logo, banners, infographics, and promotional materials. These designs were crafted to align with the brand’s identity, emphasizing reliability, innovation, and sustainability in the energy sector. The graphics were used across digital and print media to enhance brand recognition and convey professionalism.\n\n🎨 Social Media Projects: To amplify Nuel Petrogas Energy’s reach, I developed and managed social media campaigns across platforms like LinkedIn, Twitter, and Instagram. These projects included content creation, post scheduling, and audience engagement strategies, designed to highlight the company’s achievements, share industry insights, and foster connections with a global audience.\n\nSKILLS UTILIZED \n\n Web Development, Graphic Design, Social Media Management, Project Management. \n\nEXPERIENCE GAINED. \n\nTechnical Proficiency: Enhanced expertise in Frontend web development. \n\n Creative Design: Developed a keen eye for branding in the energy sector, learning to balance aesthetic appeal with functional design. Improved skills in creating cohesive visual identities that resonate with professional audiences while maintaining versatility across digital and print formats. \n\n Digital Marketing: Gained insights into effective social media strategies, including content planning, audience targeting, and performance analysis. Learned to craft campaigns that align with industry trends, such as sustainability and innovation in oil and gas, to drive engagement and brand loyalty. \n\n Problem-Solving and Adaptability: Tackled challenges such as optimizing website performance for low-bandwidth users in Nigeria and adapting designs to meet client expectations. Overcame deployment issues by troubleshooting server configurations and ensuring cross-platform compatibility. \n\n Stakeholder Collaboration: Worked closely with Nuel Petrogas Energy’s team to align project deliverables with business goals, honing communication and feedback integration skills. This experience strengthened my ability to translate client visions into tangible digital solutions. \n\n IMPACT AND REFLECTION: \n\n The Nuel Petrogas Energy projects significantly enhanced the company’s digital footprint, establishing a professional online presence that reflects its commitment to excellence in the oil and gas industry. The website’s intuitive design and robust functionality have improved user engagement, while the graphic designs and social media campaigns have strengthened brand recognition and audience interaction. \n\n Through these projects, I deepened my technical and creative skill set, gaining a comprehensive understanding of full-stack development, graphic design, and digital marketing. The experience reinforced the importance of adaptability, attention to detail, and client collaboration in delivering high-impact solutions. Moving forward, I am equipped to take on more complex projects, leveraging these skills to create innovative and sustainable digital experiences.",
        mockup: "../images/nuel.png",
        image: "../images/nuel.png",
        websiteUrl: "https://nuelpetrogasenergy.com.ng",
        graphics: [
          { type: "image", src: "../images/nuellogo.jpg", label: "Logo" },
          { type: "pdf", src: "../images/nuelprofile.pdf", label: "Company Profile" },
          { type: "pdf", src: "../images/nuelletter.pdf", label: "Letterhead" },
        ],
      techStack: ["HTML", "CSS", "Bootstrap", "JavaScript","Adobe Photoshop", "CorelDraw", "Canvas", "Buffer", "Facebook Ads Manager"],
    },
    {
      id: "citizens-health",
      title: "Citizen's Health Education and Initiative",
      category: "Web development",
      shortDescription: "I designed and implemented a robust online presence through the development of the organization’s website",
      description:
        "I designed and implemented a robust online presence through the development of the organization’s website.",
      fullDescription:
        "Project Date: May, 2023 (3 mons) & December, 2024 (2 mons). \n\n PROJECT SHOWCASE: CITIZENS’ HEALTH EDUCATION & DEVELOPMENT INITIATIVE (CHEDI) \n\n As a web developer and socail media manager I was entrusted to work for  Citizens’ Health Education & Development Initiative (CHEDI), I designed and implemented a robust online presence through the development of the organization’s website and the management of its social media campaigns. These projects were crafted to enhance CHEDI’s visibility, promote its mission of improving healthcare access and education in Nigeria, and engage stakeholders effectively. Below is an overview of the projects, the technical skills applied, and the professional experience gained.\n\nPROJECT OVERVIEW: \n\nWebsite Development: The CHEDI website serves as a digital hub for the NGO, registered with the Corporate Affairs Commission since 2012, to communicate its commitment to addressing inadequate preventive healthcare information for communicable diseases (e.g., malaria, HIV/AIDS) and non-communicable diseases (e.g., cancer, hypertension). The website features a responsive, user-friendly interface with sections for About Us, Reports, Contact, and Donation options, enabling stakeholders to learn about CHEDI’s initiatives, such as maternal and newborn health programs and youth empowerment projects funded by partners like the World Bank and the Japanese Embassy. The site ensures accessibility across devices, providing a seamless experience for users in Nigeria and beyond.\n\nSocial Media Projects: I developed and executed social media strategies across platforms like LinkedIn, Twitter, and Facebook to amplify CHEDI’s outreach. The campaigns highlighted key initiatives, such as the FY2023 Empowerment Program for 60 youths in FCT, Nasarawa, and Niger States, and success stories like Amina’s maternal health journey and a beneficiary’s barbering salon in Keffi. Content included updates on CHEDI’s partnerships with organizations like the Bill & Melinda Gates Foundation and the Japanese Embassy, fostering engagement with donors, communities, and health advocates.\n\nEXPERIENCE GAINED:\n\nTechnical Expertise: Strengthened proficiency in Frontend web development  to deliver a high-performance website tailored to an NGO’s needs. Gained experience with WordPress integration for dynamic content management, enhancing the website’s functionality for non-technical users. \n\n Digital Outreach: Developed a nuanced understanding of social media strategies for NGOs, learning to craft compelling narratives around health and education initiatives. Improved skills in targeting diverse audiences, from donors (e.g., World Bank staff) to local communities, and leveraging analytics to boost engagement for campaigns like the FY2023 youth empowerment program. \n\n Problem-Solving: Addressed technical challenges, such as optimizing website performance for users with limited internet access. Adapted social media content to align with CHEDI’s mission while navigating platform-specific constraints, such as Twitter’s character limits. \n\nStakeholder Collaboration: Worked closely with CHEDI’s leadership, including Chief (Mrs.) Akunna Enyioha, to ensure the website and social media campaigns reflected the organization’s goals, such as reducing maternal and infant mortality. Honed skills in translating stakeholder feedback into actionable digital solutions, fostering trust and alignment. \n\n Sector-Specific Insights: Gained a deeper understanding of the NGO sector, particularly in health and education, by showcasing CHEDI’s transformative work, such as maternal health programs and youth empowerment initiatives. Learned to align digital projects with social impact goals, emphasizing accessibility and inclusivity for vulnerable populations in Nigeria. \n\nIMPACT AND REFLECTION: \n\n The CHEDI website and social media projects significantly enhanced the organization’s ability to communicate its mission and impact. The website provides a professional, accessible rendering of CHEDI’s work, from maternal health programs to youth empowerment, attracting partners like the Japanese Embassy and the Bill & Melinda Gates Foundation. Social media campaigns have increased engagement, sharing success stories like Amina’s safe delivery and the Keffi barber’s financial independence, thereby strengthening CHEDI’s community and donor relationships. \n\n Through these projects, I advanced my technical and strategic skills in web development and digital marketing, gaining a deeper appreciation for the role of technology in social impact. The experience of working with an NGO like CHEDI, dedicated to health and education since 2012, taught me the importance of user-centric design and targeted outreach in underserved regions. I am now better equipped to deliver impactful digital solutions for mission-driven organizations, with a focus on accessibility, scalability, and stakeholder alignment.",
      mockup: "../images/chedi..png",
      image: "../images/chedi..png",
      websiteUrl: "https://cheding.org/",
 
      techStack: [ "Adobe Photoshop", "CorelDraw", "Facebook", "Instagram", "X (Twitter)", "LinkedIn", "Facebook Ads Manager"],
    },
    {
      id: "afroshields",
      title: "Afroshields 247 Company Profile",
      category: "Graphic Designs",
      shortDescription: "A company profile design for Afroshields 247.",
      description:
        "A graphic design project creating a company profile for Afroshields 247, focusing on professional branding.",
      fullDescription:
        "Project Date: April, 2024. \n\n  Afroshields 247 Company Profile Project — Professional Branding\nI designed a company profile for Afroshields 247 to enhance their professional branding:\n\n🎨 Brand Identity Design: Created a cohesive brand identity with a focus on professionalism.\n\n🖼️ Graphic Design: Designed the company profile using Adobe Photoshop, Canva, and CorelDraw.\n\n🖌️ Visual Assets: Produced additional visual assets like icons and illustrations using FreePik.\n\n🖨️ Print-Ready Files: Delivered print-ready files for professional use.\n\nThis project showcases my ability to create visually appealing and professional branding materials.",
      mockup: "../images/afrologo.jpg",
      image: "../images/cover.jpg",
      graphics: [
        { type: "image", src: "../images/afrologo.jpg", label: "Logo" },
        { type: "pdf", src: "../images/afroprofile.pdf", label: "Company Profile" },
        { type: "pdf", src: "../images/afroletter.pdf", label: "Letterhead" },
        { type: "pdf", src: "../images/afrocard.pdf", label: "Business Card" },
      ],
      techStack: ["Adobe Photoshop", "Canva", "CorelDraw", "FreePik"],
    },
    {
      id: "primewatch-security",
      title: "Primewatch Security Brochure",
      category: "Graphic Designs",
      shortDescription: "Brochure design for presentation.",
      description:
        "A custom brochure design for Primewatch Security, emphasizing brand identity and visual appeal.",
      fullDescription:
        "Project Date: Feb, 2023. \n\n  Primewatch Security Brochure Project — Presentation Design\nI designed a custom brochure for Primewatch Security to enhance their presentations:\n\n🎨 Visual Design: Created a visually appealing brochure using Adobe Photoshop and Corel Draw.\n\n🖼️ Brand Consistency: Ensured the design aligns with the company’s brand identity.\n\n🖨️ Print-Ready Deliverables: Delivered high-quality print-ready files.\n\n📈 Marketing Impact: Designed the brochure to make a strong impact during presentations.\n\nThis project demonstrates my expertise in creating impactful graphic design materials for presentations.",
      mockup: "../images/primecover.jpg",
      image: "../images/primecover.jpg",
      graphics: [
        { type: "pdf", src: "../images/prime.pdf", label: "Presentaion Brochure" },
      ],
      techStack: ["Adobe Photoshop", "Canvas", "Corel Draw"],
    },
    {
      id: "corpland-security-brochure",
      title: "BEMT GLOBAL",
      category: "Graphic Designs",
      shortDescription: "Full graphic design for presentation.",
      description:
        "A promotional brochure for Corpland Security, designed to attract attention with vibrant visuals.",
      fullDescription:
        "Project Date: May, 2024. \n\n  BEMT GLobal Brochure Project — Promotional Design\nI designed a promotional brochure for  BEMT GLobal to attract attention:\n\n🎨 Vibrant Visuals: Created a visually striking brochure using Canva and Adobe Photoshop.\n\n🖼️ Brand Alignment: Ensured the design reflects Corpland Security’s brand identity.\n\n🖨️ Print-Ready Files: Delivered high-quality print-ready files for production.\n\n📈 Marketing Focus: Designed the brochure to effectively promote the company’s services.\n\nThis project highlights my ability to create promotional materials with strong visual impact.",
      mockup: "../images/bemtlogo.jpg",
      image: "../images/bemtlogo.jpg",
      graphics: [
        { type: "image", src: "../images/bemtlogo.jpg", label: "Logo" },
        { type: "pdf", src: "../images/bemtprofile.pdf", label: "Company Profile" },
      ],
      techStack: ["Canva", "Adobe Photoshop", "Corel Draw"],
    },
  ];

  // Handle scrolling to the project section when the page loads with a hash
  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.replace("#", ""));
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  // Handle click on a swiper box
  const handleProjectClick = (projectId) => {
    navigate(`/projects#${projectId}`);
    const element = document.getElementById(projectId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Handle asset click (open modal for graphics)
  const openModal = (asset) => {
    setSelectedAsset(asset.src);
    setAssetType(asset.type);
    setModalIsOpen(true);
  };

  // Close asset modal
  const closeModal = () => {
    setModalIsOpen(false);
    setSelectedAsset(null);
    setAssetType("");
  };

  // Handle "Read More" click (open description modal)
  const openDescriptionModal = (fullDescription) => {
    setSelectedDescription(fullDescription);
    setDescriptionModalIsOpen(true);
  };

  // Close description modal
  const closeDescriptionModal = () => {
    setDescriptionModalIsOpen(false);
    setSelectedDescription("");
  };

  // Prevent right-click on PDFs and images to limit downloads
  const preventRightClick = (e) => {
    e.preventDefault();
  };

  return (
    <section className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-8">Portfolio/Projects</h2>
        <p className="text-lg text-center text-gray-300 mb-12">
          Explore my projects with a 3D swipe effect, then dive into the details below.
        </p>

        {/* 3D Swiper */}
        <Swiper
          effect="coverflow"
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={3}
          spaceBetween={30}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          modules={[EffectCoverflow, Pagination, Autoplay]}
          className="mb-16"
          breakpoints={{
            320: { slidesPerView: 1 },
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {projects.map((project) => (
            <SwiperSlide key={project.id}>
              <div
                onClick={() => handleProjectClick(project.id)}
                className="bg-gray-800 rounded-lg shadow-xl overflow-hidden transform hover:scale-105 transition-all duration-300 cursor-pointer border-2 border-transparent hover:border-yellow-400"
              >
                {/* Project Image */}
                <div className="h-48 w-full overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                {/* Project Info */}
                <div className="p-4 text-center">
                  <h3 className="text-xl font-serif font-semibold text-gray-100">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 mt-2">{project.shortDescription}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Detailed Project List */}
        <div className="space-y-12">
          {projects.map((project) => (
            <div
              key={project.id}
              id={project.id}
              className="bg-gray-800 rounded-lg shadow-lg p-6 flex flex-col md:flex-row items-center"
            >
              <div className="md:w-1/2">
                <img
                  src={project.mockup}
                  alt={`${project.title} Mockup`}
                  className="w-full h-64 object-cover rounded-lg"
                  loading="lazy"
                />
              </div>
              <div className="md:w-1/2 md:pl-6 mt-4 md:mt-0">
                <h3 className="text-2xl font-serif font-semibold text-gray-100">
                  {project.title}
                </h3>
                <p className="text-gray-400">{project.category}</p>
                <p className="text-gray-300 mt-2">{project.description}</p>

                {/* Graphics Showcase (if applicable) */}
                {project.graphics && (
                  <div className="mt-4">
                    <h4 className="text-lg font-semibold text-gray-100 mb-1">Graphics Showcase</h4>
                    <p className="text-sm text-gray-400 mb-2">Please click on the showcase to view</p>
                    <div className="flex flex-wrap gap-2">
                      {project.graphics.map((asset, index) => (
                        <button
                          key={index}
                          onClick={() => openModal(asset)}
                          className="px-3 py-1 bg-gray-700 text-yellow-400 text-sm rounded-full hover:bg-gray-600 transition-colors"
                        >
                          {asset.label}
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {/* Buttons Container */}
                <div className="mt-4 flex gap-3">
                  {/* Visit Website Button (if applicable) */}
                  {project.websiteUrl && (
                    <a
                      href={project.websiteUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block px-4 py-2 bg-yellow-400 text-gray-900 font-semibold rounded-lg hover:bg-yellow-500 transition-colors"
                    >
                      Visit Website
                    </a>
                  )}

                  {/* Read More Button */}
                  <button
                    onClick={() => openDescriptionModal(project.fullDescription)}
                    className="inline-block px-4 py-2 bg-gray-600 text-yellow-400 font-semibold rounded-lg hover:bg-gray-500 transition-colors"
                  >
                    Read More
                  </button>
                </div>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mt-4">
                  {project.techStack.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-gray-700 text-yellow-400 text-sm rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal for Viewing Assets */}
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          className="w-full h-full flex items-center justify-center"
          overlayClassName="fixed inset-0 bg-black bg-opacity-90 z-50"
        >
          <div className="relative w-full h-full">
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-gray-300 hover:text-gray-100 text-2xl z-50"
            >
              ✕
            </button>
            {selectedAsset && assetType === "image" && (
              <img
                src={selectedAsset}
                alt="Asset Preview"
                className="w-full h-full object-contain"
                onContextMenu={preventRightClick}
              />
            )}
            {selectedAsset && assetType === "pdf" && (
              <iframe
                src={`${selectedAsset}#toolbar=0&navpanes=0`} // Disable toolbar to limit download options
                title="PDF Preview"
                className="w-full h-full"
                onContextMenu={preventRightClick}
              />
            )}
          </div>
        </Modal>

        {/* Modal for Viewing Full Description */}
        <Modal
          isOpen={descriptionModalIsOpen}
          onRequestClose={closeDescriptionModal}
          className="bg-gray-800 rounded-lg p-6 max-w-2xl mx-auto my-6 max-h-[80vh] overflow-y-auto"
          overlayClassName="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-start justify-center pt-6"
        >
          <div className="relative">
            <button
              onClick={closeDescriptionModal}
              className="absolute top-0 right-0 text-gray-300 hover:text-gray-100 text-2xl"
            >
              ✕
            </button>
            <div className="text-gray-100 whitespace-pre-line">
              {selectedDescription}
            </div>
          </div>
        </Modal>
      </div>
    </section>
  );
};

export default ProjectsSection;
