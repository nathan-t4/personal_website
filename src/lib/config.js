export const siteConfig = {
  name: "Nathan Tsao",
  title: "",
  description: "Personal website",
  url: "https://www.nathantsao.com",
  ogImage: "https://www.nathantsao.com/og.svg",
  resume: "/files/Nathan_Tsao_resume_public.pdf",
  emailAddress: "tsao.nathan@gmail.com",
  location: "Bay Area, CA",
  heroBlurb: "Machine learning research engineer with two years of academic research (MS @ UT Austin) and internship experience (NASA). Seeking full-time machine learning engineer position.",
  about: "I received my MS from UT Austin in May 2025, and BS from UIUC in 2022. My master's thesis research was on developing neural port-Hamiltonian differential algebraic equations, with applications to scalable data-driven modeling of electrical networks. Current an autonomous aircraft operations research intern @ NASA Ames.",
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
  showNSkills: 4,
  skills: [
    'Deep Learning',
    'Generative AI',
    'Python',
    'PyTorch',
    'Linux',
    'Dart',
    'Jax',
    'Docker',
    'Stable-Baselines3',
    'Git'
  ],
  featuredProjects: {
    1: {
      title: "Causal Diffusion Guidance",
      image: "/projects/causal_diffusion/morpho_mnist_causal_diagram.png",
      link: "/projects/causal_diffusion"
    },
    2: {
      title: "Human Activity Recognition with Batteryless Sensors",
      image: "/projects/batteryless/architecture.png",
      link: "/projects/batteryless"
    },
    3: {
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
      description: "Researching how traffic following behavior in dense airspaces effect aircraft performance metrics. \n Developing GPU-accelerated multi-modal traffic simulation of the Bay Area to guide infrastructure development of Unmanned Aerial Vehicles."
    },
    {
      title: "Hardware Engineering Intern",
      company: "Berkeley Lights",
      location: "Berkeley, CA",
      period: "June 2022 - September 2022",
      description: "Developed mechanical and electrical design of temperature calibration sensor for the OptoSelect chip. \n Automated data acquisition and calibration pipeline using Python scripts."
    }
  ],
  researchExperience: [
    {
      title: "Graduate Research Assistant",
      institution: "University of Texas at Austin: Autonomous Systems Group",
      location: "Austin, TX",
      period: "December 2023 - May 2025",
      description: "Developed a scalable electrical circuit modeling framework using compositional machine learning models. \n Created low-energy and fast-inference human activity recognition algorithm for batteryless sensors.",
      publications: [
        "Cyrus Neary*, Nathan Tsao*, and Ufuk Topcu. Neural Port-Hamiltonian Differential Algebraic Equations for Compositional Learning of Electrical Networks. Under review at CDC 2025.",
        "Geffen Cooper*, Nathan Tsao*, Filippos Fotiadis, Ufuk Topcu, Radu Marculescu. Learning from Sparse and Asynchronous Data Streams for Batteryless Sensors. Under review at NeurIPS 2025."
      ]
    },
    {
      title: "Visiting Research Assistant",
      institution: "University of California, Berkeley: Hybrid Robotics Group",
      location: "Berkeley, CA",
      period: "May 2022 - January 2023",
      description: "Led team to design the hardware and RL controller design of an actuated tail for quadruped robots. \n Created inexpensive 3D-printed quasi-direct-drive actuators with custom FOC motor controller.",
      publications: []
    },
    {
      title: "Undergraduate Research Assistant",
      institution: "University of Illinois Urbana-Champaign: RoboDesign Lab",
      location: "Urbana, IL",
      period: "January 2022 - May 2022",
      description: "Prototyped a low-cost force-sensing humanoid robot foot using elastomers and Hall sensors.",
      publications: []
    }
  ],
  education: [
    {
      degree: "Master of Science in Mechanical Engineering",
      school: "University of Texas at Austin",
      location: "Austin, TX",
      period: "August 2023 - May 2025",
      description: "GPA: 3.74. \n Thesis: Neural Port-Hamiltonian Differential Algebraic Equations"
    },
    {
      degree: "Bachelor of Science in Mechanical Engineering",
      school: "University of Illinois Urbana-Champaign",
      location: "Urbana, IL",
      period: "August 2019 - May 2022",
      description: "GPA: 3.87"
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