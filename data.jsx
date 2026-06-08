/* data.jsx — portfolio content. Swap placeholders / images here. */

// Project categories used for filtering
const CATEGORIES = ["Computer Vision", "Natural Language Processing", "Data Science", "Full-stack", "Generative AI", "Robotics", "Misc"];

// Each project: images is an array of slides.
// To use a real image/gif: { src: "images/foo.gif", kind: "gif", label: "Live demo" }
// To embed a YouTube video: { src: "https://www.youtube.com/embed/VIDEO_ID", kind: "youtube", label: "Demo" }
// To embed a local video: { src: "images/foo.mp4", kind: "video", label: "Demo" }
// Leave src null to render a labeled placeholder.
const PROJECTS = [
  {
    id: "litgraph",
    title: "LitGraph",
    categories: ["Generative AI", "Full-stack"],
    year: "2025",
    desc: "Research assistant chatbot powered by a multi-agent workflow for deep literature research. Fetched papers are simultaneously visualised as an interactive knowledge graph, letting users explore connections between works as the agent reasons.",
    tags: ["Multi-agent", "RAG", "LLM", "Knowledge Graph", "React", "Python"],
    images: [
      { src: "images/LitGraph Landing Page.png", kind: "img", label: "Landing page" },
      { src: "images/LitGraph Chat.png", kind: "img", label: "Chat interface" },
      { src: "images/LitGraph Graph.png", kind: "img", label: "Paper graph" },
    ],
    links: [],
  },
  {
    id: "beetlebot",
    title: "Project BeetleBot",
    categories: ["Computer Vision", "Robotics"],
    year: "2024",
    desc: "SUTD Capstone project (team of 7). Fine-tuned an object detection model and deployed a quantized version for real-time bin tracking on a Raspberry Pi 5. Implemented ROS navigation with state machines and pathfinding algorithms.",
    tags: ["Object Detection", "Raspberry Pi 5", "ROS", "PyTorch", "Python"],
    images: [
      { src: "images/BeetleBot_Final.gif", kind: "gif", label: "BeetleBot demo" },
    ],
    links: [],
  },
  {
    id: "multimodal-hate-meme",
    title: "Multi-Modal Multilingual Hate Meme Classification",
    categories: ["Computer Vision", "Data Science"],
    year: "2024",
    desc: "Led a team of 5 training a multi-modal multilingual model on a machine-translated augmented dataset. Evaluated pre-training task alignment and feature-fusion approaches for hate meme detection across languages.",
    tags: ["Multimodal", "NLP", "Computer Vision", "PyTorch", "Transformers"],
    images: [
      { src: "images/multimodal_multilingual_hate_meme_classification.avif", kind: "img", label: "Project overview" },
    ],
    links: [],
  },
  {
    id: "sauvc",
    title: "Singapore Autonomous Underwater Vehicle Challenge",
    categories: ["Computer Vision", "Robotics"],
    year: "2023",
    desc: "UROP project (team of 6). Built ROS-based autonomous navigation, object detection trained on a synthetic Unity dataset, and custom state machines with specialized underwater maneuvers.",
    tags: ["ROS", "Computer Vision", "Unity", "Deep Learning", "Python"],
    images: [
      { src: "images/sauvc_img (1).jpg", kind: "img", label: "AUV competition" },
    ],
    links: [],
  },
  {
    id: "chest-xray",
    title: "Chest X-Ray Multi-Label Classification",
    categories: ["Computer Vision"],
    year: "2023",
    desc: "Identified 14 thoracic diseases from the ChestX-ray14 dataset using ResNet, DenseNet, and Vision Transformers. Compared architectures on multi-label classification performance.",
    tags: ["Computer Vision", "Deep Learning", "ResNet", "ViT", "PyTorch"],
    images: [
      { src: "images/ChestX-ray14-0000001144-46559e6f_9iVbS0m.jpg", kind: "img", label: "Chest X-ray sample" },
    ],
    links: [],
  },
  {
    id: "munchmatch",
    title: "MunchMatch",
    categories: ["Data Science", "Natural Language Processing", "Full-stack"],
    year: "2022",
    desc: "Restaurant selection platform built for the National AI Student Challenge 2022. Web-scraped 40,000+ TripAdvisor reviews and applied TF-IDF extraction, aspect-based sentiment analysis, and a semantic search engine.",
    tags: ["NLP", "Deep Learning", "Sentiment Analysis", "React", "Python"],
    images: [
      { src: "images/MunchMatch.png", kind: "img", label: "MunchMatch interface" },
    ],
    links: [],
  },
  {
    id: "amex-default",
    title: "American Express Default Prediction",
    categories: ["Data Science"],
    year: "2022",
    desc: "Kaggle competition — ranked 399th out of 4,874 teams (Top 9%). Built an ensemble of RNN, XGBoost, and CatBoost models on 50GB of time-series customer transaction data.",
    tags: ["XGBoost", "CatBoost", "RNN", "Ensemble", "Python"],
    images: [
      { src: "images/AMEX_proj.png", kind: "img", label: "Competition result" },
    ],
    links: [],
  },
  {
    id: "ascenda-loyalty",
    title: "Ascenda Loyalty Hotel Booking Platform",
    categories: ["Full-stack"],
    year: "2022",
    desc: "Full-stack white-label hotel booking platform built for 50.003 Elements of Software Construction, consuming the Ascenda Loyalty API. Includes end-to-end Selenium test coverage.",
    tags: ["React", "CSS", "Selenium", "REST API", "JavaScript"],
    images: [
      { src: "images/ascendaloyaltywebappimg.png", kind: "img", label: "Booking platform" },
    ],
    links: [],
  },
  {
    id: "teachers-space",
    title: "Teacher's Space Android App",
    categories: ["Full-stack"],
    year: "2022",
    desc: "50.001 Information Systems & Programming project. Android messaging, calling, and scheduling application connecting teachers and students, backed by Firebase Realtime Database.",
    tags: ["Android Studio", "Firebase", "Java", "Mobile"],
    images: [
      { src: "images/TeachersSpace_poster_cropped.png", kind: "img", label: "App poster" },
    ],
    links: [],
  },
  {
    id: "hate-speech",
    title: "Hate Speech Classification",
    categories: ["Data Science"],
    year: "2022",
    desc: "50.007 Machine Learning project (team of 4) — 2nd runner-up in cohort. Applied SVM, Random Forests, SMOTE for class imbalance, PCA for dimensionality reduction, and ensemble techniques.",
    tags: ["SVM", "Random Forest", "SMOTE", "PCA", "scikit-learn"],
    images: [
      { src: "images/ML_course_proj.png", label: "Results", kind: "img" },
    ],
    links: [],
  },
  {
    id: "asphalt-ai",
    title: "Asphalt AI",
    categories: ["Computer Vision"],
    year: "2021",
    desc: "CNN agent that plays Asphalt via real-time screen image classification using behavioral cloning. Trained on gameplay recordings to learn steering and acceleration decisions.",
    tags: ["CNN", "Behavioral Cloning", "Computer Vision", "Python", "OpenCV"],
    images: [
      { src: "https://www.youtube.com/embed/AB9uvA5YGME", kind: "youtube", label: "Gameplay demo" },
    ],
    links: [],
  },
  {
    id: "drone-simulation",
    title: "Drone Simulation + AI",
    categories: ["Robotics"],
    year: "2021",
    desc: "Physics-based drone simulation in Unity controlled by a PPO reinforcement learning agent trained with curriculum learning via ML-Agents.",
    tags: ["Unity", "ML-Agents", "Reinforcement Learning", "PPO", "C#"],
    images: [
      { src: "images/bandicam 2021-05-04 05-53-38-040.mp4", kind: "video", label: "Simulation demo" },
    ],
    links: [],
  },
  {
    id: "pacman",
    title: "Text-Based Pacman Clone",
    categories: ["Misc"],
    year: "2021",
    desc: "10.014 Computational Thinking for Design project. Terminal-based Pacman with ghosts, points, and power-ups. Features rule-based AI ghost behavior and real-time keyboard input handling.",
    tags: ["Python", "OOP", "Game Dev"],
    images: [
      { src: "https://www.youtube.com/embed/yOGLnUkVTP0", kind: "youtube", label: "Gameplay demo" },
    ],
    links: [],
  },
];

const EXPERIENCE = [
  {
    when: "Jul 2024 — Present",
    now: true,
    role: "AI Engineer",
    org: "SAA Architects Pte Ltd",
    desc: "Developing computational and generative AI tools to streamline and enhance the architectural design process.",
    stack: ["Generative AI", "LLMs", "Python", "Computational Design"],
  },
  {
    when: "Jun 2023 — Aug 2023",
    role: "AI Research Engineer Intern",
    org: "A*STAR (Institute for Infocomm Research)",
    desc: "Explored facial expression recognition methods including Facial Landmark extraction, HOG features, and OpenFace. Led self-supervised federated learning research. Co-authored IEEE ICDM 2023 workshop paper; published ICCE 2023 workshop paper as first author.",
    stack: ["Federated Learning", "Computer Vision", "Self-supervised Learning", "PyTorch"],
  },
  {
    when: "Oct 2022 — May 2023",
    role: "Undergraduate Research Assistant",
    org: "MARVL Lab (Computer Vision)",
    desc: "Conducted literature reviews on deep learning visual odometry methods. Co-authored a paper on visual odometry evaluation for autonomous driving in rain. Implemented Conditional GANs in PyTorch for rain droplet removal from vehicle footage.",
    stack: ["Visual Odometry", "GANs", "PyTorch", "Computer Vision"],
  },
  {
    when: "Aug 2022 — Dec 2022",
    role: "Data Science Intern",
    org: "Collins Aerospace",
    desc: "Trained XGBoost model predicting equipment repair delays, optimised via feature engineering and Optuna — raising accuracy by 20%. Developed interactive Dash Plotly dashboard for job prioritisation. Integrated SQL database automation saving 20 monthly labour hours.",
    stack: ["XGBoost", "Optuna", "Plotly Dash", "MySQL", "Python"],
  },
  {
    when: "Jul 2021 — Dec 2021",
    role: "Undergraduate Research Assistant",
    org: "Temasek Labs @ SUTD (Robotics Simulation)",
    desc: "Developed a dynamic simulation in Unity for human-robot teaming testing. Co-authored an IEEE SSRR 2022 peer-reviewed paper.",
    stack: ["Unity", "C#", "Robotics", "Simulation"],
  },
];

const SKILLS = [
  {
    title: "Programming Languages",
    note: "Core languages across ML, backend, and systems.",
    tags: ["Python", "JavaScript", "Java", "C#", "SQL"],
  },
  {
    title: "Machine Learning & AI",
    note: "From data wrangling to model deployment.",
    tags: ["PyTorch", "TensorFlow", "scikit-learn", "OpenCV", "NLTK", "spaCy", "NumPy", "Pandas"],
  },
  {
    title: "Software & Frameworks",
    note: "Tools for building full-stack and robotics systems.",
    tags: ["ROS", "React", "Flask", "FastAPI", "Unity Engine", "Android Studio", "Next.js", "Node.js"],
  },
  {
    title: "Cloud & Infrastructure",
    note: "Scalable deployment and data pipelines.",
    tags: ["Google Cloud Platform", "AWS", "Docker", "Git", "Hadoop", "Spark", "Tableau"],
  },
];

const TOOLS = ["PyTorch", "TensorFlow", "ROS", "React", "FastAPI", "OpenCV", "Unity", "Docker", "GCP", "AWS", "scikit-learn", "Pandas"];

const ACHIEVEMENTS = [
  {
    kind: "award",
    title: "Anthropic x AI Tinkerers TextArena Agent Hackathon",
    detail: "2nd Runner Up",
    org: "Anthropic x AI Tinkerers",
    year: "2024",
  },
  {
    kind: "award",
    title: "Google AI Trailblazer",
    detail: "Transformation Award",
    org: "Google",
    year: "2024",
  },
  {
    kind: "award",
    title: "HashTech Data Analytics & Cybersecurity Competition",
    detail: "Overall Champion",
    org: "HashTech",
    year: "2022",
  },
  {
    kind: "award",
    title: "AWS DeepRacer Dash",
    detail: "3rd Runner Up",
    org: "AWS",
    year: "2023",
  },
  {
    kind: "scholarship",
    title: "MTFA Founder's Scholarship",
    detail: "Recipient",
    org: "MTFA",
    year: "2023",
  },
  {
    kind: "publication",
    title: "IEEE ICDM 2023 Workshop",
    detail: "Co-authored paper on self-supervised federated learning",
    org: "IEEE",
    year: "2023",
  },
  {
    kind: "publication",
    title: "ICCE 2023 Workshop",
    detail: "First-author publication",
    org: "IEEE",
    year: "2023",
  },
  {
    kind: "publication",
    title: "IEEE SSRR 2022",
    detail: "Co-authored paper on human-robot teaming simulation",
    org: "IEEE",
    year: "2022",
  },
  {
    kind: "certification",
    title: "Google Professional Machine Learning Engineer",
    detail: "Professional Certification",
    org: "Google Cloud",
    year: "",
  },
  {
    kind: "certification",
    title: "Google Cloud Big Data and Machine Learning Fundamentals",
    detail: "Professional Certification",
    org: "Google Cloud",
    year: "",
  },
  {
    kind: "certification",
    title: "Google Data Analytics Professional Certification",
    detail: "Professional Certification",
    org: "Google",
    year: "",
  },
  {
    kind: "certification",
    title: "ETL and Data Pipelines with Shell, Airflow & Kafka",
    detail: "Certification",
    org: "IBM / Coursera",
    year: "",
  },
  {
    kind: "certification",
    title: "AI for Industry® — Foundations in AI",
    detail: "Certification",
    org: "AI Singapore",
    year: "",
  },
  {
    kind: "certification",
    title: "Unity Certified Associate Game Developer",
    detail: "Certification",
    org: "Unity Technologies",
    year: "",
  },
];

Object.assign(window, { CATEGORIES, PROJECTS, EXPERIENCE, SKILLS, TOOLS, ACHIEVEMENTS });
