/* data.jsx — portfolio content. Swap placeholders / images here. */

// Project categories used for filtering
const CATEGORIES = ["Computer Vision", "Generative AI", "Data Science", "Full-stack"];

// Each project: images is an array of slides.
// To use a real image/gif later: { src: "media/foo.gif", kind: "gif", label: "Live demo" }
// Leave src null to render a labeled placeholder.
const PROJECTS = [
  {
    id: "neural-fields",
    title: "Aerial Scene Segmentation",
    category: "Computer Vision",
    year: "2025",
    desc: "Real-time semantic segmentation of drone imagery for land-use mapping. Custom lightweight decoder runs at 60fps on edge hardware.",
    tags: ["PyTorch", "ONNX", "TensorRT", "Segmentation"],
    images: [
      { src: null, label: "Segmentation overlay", kind: "img" },
      { src: null, label: "Inference demo", kind: "gif" },
      { src: null, label: "Confusion matrix", kind: "img" },
      { src: null, label: "Edge benchmark", kind: "img" },
    ],
    links: [{ label: "Case study", href: "#" }, { label: "GitHub", href: "#" }],
  },
  {
    id: "rag-copilot",
    title: "Research Copilot",
    category: "Generative AI",
    year: "2025",
    desc: "Agentic RAG assistant over 40k internal papers with citation-grounded answers, query planning, and a self-correcting retrieval loop.",
    tags: ["LLM", "RAG", "LangGraph", "pgvector", "Agents"],
    images: [
      { src: null, label: "Chat interface", kind: "gif" },
      { src: null, label: "Retrieval graph", kind: "img" },
      { src: null, label: "Eval dashboard", kind: "img" },
    ],
    links: [{ label: "Live demo", href: "#" }, { label: "Write-up", href: "#" }],
  },
  {
    id: "churn-engine",
    title: "Churn Propensity Engine",
    category: "Data Science",
    year: "2024",
    desc: "Gradient-boosted survival model predicting subscriber churn 30 days out, surfacing SHAP-driven intervention cohorts. Lifted retention 11%.",
    tags: ["XGBoost", "SHAP", "dbt", "Airflow"],
    images: [
      { src: null, label: "Feature importance", kind: "img" },
      { src: null, label: "Cohort dashboard", kind: "img" },
      { src: null, label: "Lift curve", kind: "img" },
    ],
    links: [{ label: "Methodology", href: "#" }],
  },
  {
    id: "diffusion-studio",
    title: "Texture Diffusion Studio",
    category: "Generative AI",
    year: "2024",
    desc: "Fine-tuned latent diffusion pipeline for seamless material textures, with a ControlNet sketch-to-texture mode and a tiling-aware sampler.",
    tags: ["Diffusion", "ControlNet", "Diffusers", "CUDA"],
    images: [
      { src: null, label: "Generation reel", kind: "gif" },
      { src: null, label: "Sketch → texture", kind: "gif" },
      { src: null, label: "Tiling preview", kind: "img" },
      { src: null, label: "Latent walk", kind: "gif" },
    ],
    links: [{ label: "Gallery", href: "#" }, { label: "Model card", href: "#" }],
  },
  {
    id: "pose-coach",
    title: "Real-time Pose Coach",
    category: "Computer Vision",
    year: "2023",
    desc: "On-device pose estimation that scores movement form against reference motion and gives corrective feedback — all in the browser via WebGPU.",
    tags: ["MediaPipe", "WebGPU", "TFLite", "WASM"],
    images: [
      { src: null, label: "Pose tracking", kind: "gif" },
      { src: null, label: "Form scoring UI", kind: "img" },
      { src: null, label: "Skeleton overlay", kind: "gif" },
    ],
    links: [{ label: "Try it", href: "#" }, { label: "GitHub", href: "#" }],
  },
  {
    id: "ml-platform",
    title: "Lakehouse ML Platform",
    category: "Full-stack",
    year: "2023",
    desc: "End-to-end platform for training, versioning, and serving models — feature store, experiment tracker, and a one-click deploy UI used by 6 teams.",
    tags: ["FastAPI", "React", "Kubernetes", "MLflow", "Postgres"],
    images: [
      { src: null, label: "Deploy console", kind: "img" },
      { src: null, label: "Experiment runs", kind: "gif" },
      { src: null, label: "Architecture", kind: "img" },
    ],
    links: [{ label: "Overview", href: "#" }],
  },
];

const EXPERIENCE = [
  {
    when: "2024 — Now",
    now: true,
    role: "AI Engineer",
    org: "Helix Research Labs",
    desc: "Lead applied research on multimodal retrieval and agentic systems. Ship production LLM features and own the eval harness end-to-end.",
    stack: ["LLMs", "Agents", "PyTorch", "Triton"],
  },
  {
    when: "2022 — 2024",
    role: "Machine Learning Engineer",
    org: "Northwind Vision",
    desc: "Built the computer-vision stack for aerial analytics — data pipelines, model training, and edge deployment to fleets of drones.",
    stack: ["Segmentation", "ONNX", "Airflow", "AWS"],
  },
  {
    when: "2021 — 2022",
    role: "Data Scientist",
    org: "Meridian Analytics",
    desc: "Owned churn and LTV models for a 2M-user product. Translated experiments into shipped interventions with measurable revenue lift.",
    stack: ["XGBoost", "dbt", "SQL", "Causal Inference"],
  },
  {
    when: "2019 — 2021",
    role: "Research Assistant",
    org: "University Vision & Learning Group",
    desc: "Published on self-supervised representation learning. Maintained the lab's shared GPU training infrastructure and benchmarks.",
    stack: ["Self-supervised", "Research", "CUDA", "LaTeX"],
  },
];

const SKILLS = [
  {
    title: "Machine Learning",
    note: "From research prototype to production model.",
    tags: ["PyTorch", "TensorFlow", "JAX", "scikit-learn", "Transformers", "Diffusers", "ONNX / TensorRT"],
  },
  {
    title: "Generative AI",
    note: "LLM apps, agents, and evaluation.",
    tags: ["RAG", "LangGraph", "Fine-tuning", "Diffusion", "Prompt Eng.", "Evals", "Vector DBs"],
  },
  {
    title: "Engineering",
    note: "Reliable systems around the models.",
    tags: ["Python", "TypeScript", "FastAPI", "React", "Postgres", "Docker", "Kubernetes"],
  },
  {
    title: "Data & MLOps",
    note: "Pipelines, tracking, and scale.",
    tags: ["dbt", "Airflow", "Spark", "MLflow", "W&B", "AWS / GCP", "Ray"],
  },
];

const TOOLS = ["PyTorch", "Transformers", "LangGraph", "CUDA", "FastAPI", "React", "Diffusers", "ONNX", "Kubernetes", "pgvector", "Triton", "W&B"];

Object.assign(window, { CATEGORIES, PROJECTS, EXPERIENCE, SKILLS, TOOLS });
