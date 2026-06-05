export const siteConfig = {
  name: "Nathan Tsao",
  title: "",
  description: "Personal website",
  url: "https://www.nathantsao.com",
  ogImage: "https://www.nathantsao.com/og.svg",
  resume: "/files/Nathan_Tsao_resume.pdf",
  emailAddress: "tsao.nathan@gmail.com",
  location: "Taipei, Taiwan",
  // heroBlurb: "AI Engineer with experience training models, deploying AI agents, developing full-stack websites, and controlling robots.",
  about: "I currently work as an Applied Scientist, and was previously a research intern at NASA Ames Research Center. I received my MS from UT Austin in 2025, and BS from UIUC in 2022.",
  // currentlyWorking: [
  //   "Translate images with <a href='https://www.translatenets.com' target='_blank' rel='noopener noreferrer' class='text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 underline'>TranslateNets</a>.",
  //   "Building <a href='https://murcanti.com' target='_blank' rel='noopener noreferrer' class='text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 underline'>Murcanti</a> for Taiwan-U.S. shipping. Try the <a href='https://murcanti.com/search' target='_blank' rel='noopener noreferrer' class='text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 underline'>Product Recommender chatbot</a>!",
  //   "Automatically create agent workflows Python code from text documents using <a href='https://github.com/nathan-t4/metaagent' target='_blank' rel='noopener noreferrer' class='text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 underline'>MetaAgent</a>.",
  //   // "Create your own wedding website for your special day using <a href='https://yourinvited.dev' target='_blank' rel='noopener noreferrer' class='text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 underline'>YourInvited</a>."
  // ],
  // currentlyWorking: [],
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
      name: "Google Scholar",
      url: "https://scholar.google.com/citations?user=Ot5yvmsAAAAJ&hl=en",
      icon: "scholar"
    },
    {
      name: "Email",
      url: "javascript:void(0)",
      icon: "✉️",
      isEmail: true
    },
    {
      name: "Resume",
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
    'AWS',
    'HuggingFace',
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
      link: "/projects/causal_diffusion"
    },
    2: {
      title: "Traffic Following Autonomous Aircraft",
      link: "/projects/traffic_following"
    },
    3: {
      title: "Human Activity Recognition with Batteryless Sensors",
      link: "/projects/batteryless"
    },
    4: {
      title: "Neural Port-Hamiltonian Differential Algebraic Equations",
      link: "/projects/nphdae"
    }
  },
  experience: [
    {
      title: "Autonomous Aircraft Operations Research Intern",
      company: "NASA Ames Research Center",
      location: "Mountain View, CA",
      period: "June 2025 - August 2025",
      description: "Developed a multi-agent path-planning framework for autonomous aircraft using reinforcement learning (Ray RLlib) to minimize average travel times."
    },
    {
      title: "Hardware Engineering Intern",
      company: "Berkeley Lights",
      location: "Berkeley, CA",
      period: "June 2022 - September 2022",
      description: "Automated data-acquisition and calibration pipelines in Python for temperature calibration of OptoSelect chip"
    }
  ],
  researchExperience: [
    {
      title: "Graduate Research Assistant",
      institution: "University of Texas at Austin: Autonomous Systems Group",
      location: "Austin, TX",
      period: "December 2023 - May 2025",
      description: "Designed and implemented compositional machine learning frameworks for differential-algebraic systems in JAX, enabling scalable modeling of electrical networks with >10x accuracy over baselines. \n Developed a low-power human activity recognition model optimized for batteryless sensors using PyTorch, resulting in 15-50\% relative improvement over baselines.",
      publications: [
        "Cyrus Neary*, Nathan Tsao*, and Ufuk Topcu. Neural Port-Hamiltonian Differential Algebraic Equations for Compositional Learning of Electrical Networks. Accepted to CDC 2025.",
        "Geffen Cooper*, Nathan Tsao*, Filippos Fotiadis, Ufuk Topcu, Radu Marculescu. Learning from Sparse and Asynchronous Data Streams for Batteryless Sensors. Preprint."
      ]
    },
    {
      title: "Visiting Research Assistant",
      institution: "University of California, Berkeley: Hybrid Robotics Group",
      location: "Berkeley, CA",
      period: "May 2022 - January 2023",
      description: "Implemented a reinforcement learning locomotion balancing controller for tailed quadruped robots using PyTorch and IsaacGym. \n Developed 3D printed robotic actuators with custom motor controllers written in C++.",
      publications: []
    },
    {
      title: "Undergraduate Research Assistant",
      institution: "University of Illinois Urbana-Champaign: RoboDesign Lab",
      location: "Urbana, IL",
      period: "January 2022 - May 2022",
      description: "Designed a <\$50 USD force-sensing humanoid robot foot prototype with Hall sensors using LabVIEW. \n Estimated humanoid robot foot force signals using Gaussian processes with scikit-learn.",
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