export const siteConfig = {
  name: "Nathan Tsao",
  title: "",
  description: "Personal website",
  url: "https://www.nathantsao.com",
  ogImage: "https://www.nathantsao.com/og.svg",
  resume: "/files/Nathan_Tsao_resume_public.pdf",
  emailAddress: "tsao.nathan@gmail.com",
  location: "Bay Area, CA",
  heroBlurb: "Applied Machine Learning Engineer with experience in generative AI, reinforcement learning, and scalable machine learning. Seeking full-time ML Engineer positions.",
  about: "I received my MS from UT Austin in 2025, and BS from UIUC in 2022. During my Master's studies, I developed machine learning algorithms for scalable electrical network modeling and human activity recognition using batteryless sensors as a graduate research assistant. I was also recently a research intern at NASA Ames Research Center (Summer 2025). Interested in deep learning, generative AI, and humanoid robots.",
  currentlyWorking: "Working on murcanti: e-commerce mobile app for door-to-door shipping between Taiwan & U.S.!",
  socialLinks: [
    {
      name: "GitHub",
      url: "https://github.com/nathan-t4",
      icon: "github"
    },
    {
      name: "LinkedIn",
      url: "https://linkedin.com/in/nathan-tsao",
      icon: "linkedin"
    },
    {
      name: "Email",
      url: "javascript:void(0)",
      icon: "✉️",
      isEmail: true
    },
    {
      name: "CV",
      url: "/cv",
      icon: "📄"
    }
  ],
  showNSkills: 6,
  skills: [
    'Deep Learning',
    'Generative AI',
    'Python',
    'PyTorch',
    'Robotics',
    'JAX',
    'Ray',
    'Linux',
    'Docker',
    'Stable-Baselines3',
    'Git',
    'Dart',
  ],
  featuredProjects: {
    1: {
      title: "Causal Diffusion Guidance",
      image: "/projects/causal_diffusion/morpho_mnist_causal_diagram.png",
      link: "/projects/causal_diffusion"
    },
    2: {
      title: "Traffic Following Autonomous Aircraft",
      image: "/projects/traffic_following/sim.png",
      link: "/projects/traffic_following"
    },
    3: {
      title: "Human Activity Recognition with Batteryless Sensors",
      image: "/projects/batteryless/architecture.png",
      link: "/projects/batteryless"
    },
    4: {
      title: "Neural Port-Hamiltonian Differential Algebraic Equations",
      image: "/projects/nphdae/architecture.png",
      link: "/projects/nphdae"
    }
  },
  experience: [
    {
      title: "Autonomous Aircraft Operations Research Intern",
      company: "NASA Ames Research Center",
      location: "Mountain View, CA",
      period: "June 2025 - August 2025",
      description: "Researching how reinforcement learning driven traffic following behavior among autonomous aircraft in dense airspaces improves travel time and safety."
    },
    {
      title: "Hardware Engineering Intern",
      company: "Berkeley Lights",
      location: "Berkeley, CA",
      period: "June 2022 - September 2022",
      description: "Automated data-acquisition and calibration pipeline in Python.\n Designed hardware and software integration for custom temperature calibration sensors."
    }
  ],
  researchExperience: [
    {
      title: "Graduate Research Assistant",
      institution: "University of Texas at Austin: Autonomous Systems Group",
      location: "Austin, TX",
      period: "December 2023 - May 2025",
      description: "Designed compositional machine learning frameworks for differential-algebraic systems, enabling scalable modeling of electrical networks.\n Developed a low-power, low-latency human activity recognition model optimized for batteryless sensors, resulting in 15-50% relative improvement over baselines.",
      publications: [
        "Cyrus Neary*, Nathan Tsao*, and Ufuk Topcu. Neural Port-Hamiltonian Differential Algebraic Equations for Compositional Learning of Electrical Networks. Accepted to CDC 2025.",
        "Geffen Cooper*, Nathan Tsao*, Filippos Fotiadis, Ufuk Topcu, Radu Marculescu. Learning from Sparse and Asynchronous Data Streams for Batteryless Sensors. Under review at NeurIPS 2025."
      ]
    },
    {
      title: "Visiting Research Assistant",
      institution: "University of California, Berkeley: Hybrid Robotics Group",
      location: "Berkeley, CA",
      period: "May 2022 - January 2023",
      description: "Implemented a reinforcement learning-based locomotion balancing controller for tailed quadruped robots.\n Integrated hardware with custom actuators and motor controllers for robust RL deployment.",
      publications: []
    },
    {
      title: "Undergraduate Research Assistant",
      institution: "University of Illinois Urbana-Champaign: RoboDesign Lab",
      location: "Urbana, IL",
      period: "January 2022 - May 2022",
      description: "Prototyped a low-cost force-sensing humanoid robot foot using elastomers and Hall sensors.\n Applied Gaussian processes to estimate force signals in humanoid robot feet.",
      publications: []
    }
  ],
  education: [
    {
      degree: "Master of Science",
      school: "University of Texas at Austin",
      location: "Austin, TX",
      period: "August 2023 - May 2025",
      description: "GPA: 3.74. \n Thesis: Neural Port-Hamiltonian Differential Algebraic Equations \n Major: Mechanical Engineering (ML-focused)"
    },
    {
      degree: "Bachelor of Science",
      school: "University of Illinois Urbana-Champaign",
      location: "Urbana, IL",
      period: "August 2019 - May 2022",
      description: "GPA: 3.87 \n Major: Mechanical Engineering"
    }
  ],
  relevantCoursework: [
    "Reinforcement Learning",
    "Statistical Machine Learning", 
    "Theoretical Statistics",
    "Convex Optimization"
  ],
  awards: [
    {
      title: "Dr. J. Parker Lamb Endowed Presidential Fellowship",
      institution: "University of Texas at Austin",
      year: "2023",
      description: "Nominated by the Walker Department of Mechanical Engineering."
    },
    {
      title: "Highest Honors",
      institution: "University of Illinois Urbana-Champaign",
      year: "2022",
      description: "Awarded to students with at least a 3.8 Illinois GPA and continual commitment to service and education."
    },
    {
      title: "Dean's List",
      institution: "University of Illinois Urbana-Champaign",
      year: "2019-2022",
      description: "Awarded to undergraduate students in the top 20 percent of their college class."
    }
  ],
  teaching: [
    {
      course: "ASE 370C Feedback Control Systems",
      institution: "University of Texas at Austin",
      location: "Austin, TX",
      period: "January 2025 - May 2025",
      role: "Graduate Teaching Assistant"
    },
    {
      course: "ME 314D Dynamics",
      institution: "University of Texas at Austin",
      location: "Austin, TX",
      period: "September 2023 - December 2023",
      role: "Graduate Teaching Assistant"
    }
  ]
}; 