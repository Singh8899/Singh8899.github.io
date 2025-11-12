const data ={
  "bio": [
    `
      <h2>Hi there 👋, I'm <strong>Jaspinder Singh</strong>!</h2>
      <p>🚀 <strong>AI Engineer | Machine Learning Researcher | Computer Vision &amp; NLP Enthusiast</strong></p>
      <p>I specialize in <strong>Artificial Intelligence, Machine Learning, and Deep Learning</strong>, with a strong focus on:</p>
      <ul>
        <li><strong>Natural Language Processing (NLP)</strong></li>
        <li><strong>Computer Vision</strong></li>
        <li><strong>Large Language Models (LLMs)</strong></li>
        <li><strong>Retrieval-Augmented Generation (RAG)</strong></li>
        <li><strong>Multimodal AI Systems</strong></li>
      </ul>
      <p>I'm passionate about building intelligent AI-driven solutions, fine-tuning LLMs, and developing real-world applications that combine language, vision, and reasoning.</p>
      <hr />
      <h3>About Me</h3>
      <ul>
        <li>🎓 <strong>Master's Degree in AI Engineering</strong> at the <strong>University of Bologna</strong></li>
        <li>💼 AI Engineer &amp; Researcher, working on Vision-Language Models (VLMs), RAG pipelines, and LLM fine-tuning</li>
        <li>🛠️ Experienced in <strong>PyTorch, TensorFlow, LangChain,</strong> and <strong>Transformers</strong></li>
        <li>🔬 Interested in multimodal understanding, reasoning, and AI interpretability</li>
        <li>🌱 Currently exploring advanced LLM alignment, planning with feedback loops, and vision-language grounding</li>
      </ul>
    `
  ],
  "skills": [
    "Python",
    "PyTorch",
    "Hugging Face",
    "LangChain",
    "FastAPI",
    "Docker",
    "AWS",
    "Azure",
    "Deep Learning",
    "Computer Vision",
    "Vision-Language Models (VLMs)",
    "Natural Language Processing (NLP)",
    "RAG / Retrieval-Augmented Generation",
    "Model Optimization & Distributed Training",
    "OpenCV",
    "Pandas, NumPy",
    "CI/CD",
    "Git"
  ],
  "experience": [
    {
      "title": "BMW Group",
      "duration": "Apr 2025 - Present",
      "subtitle": "AI Engineer Intern",
      "details": [
        "Built comprehensive GUI agent system for in-car AI interactions and integrated end-to-end AI components for deployment in vehicles.",
        "Designed evaluation frameworks and annotation tools for model assessment and applied context engineering to improve conversational AI reliability.",
        "Researched and optimized small language models for automotive tasks focusing on performance and real-time constraints.",
        "Developed scalable REST APIs and cloud integrations (FastAPI, Docker, AWS/Azure) for production deployments."
      ],
      "tags": ["Python","PyTorch","FastAPI"],
      "icon": "car"
    },
    {
      "title": "Freelancer",
      "duration": "Jan 2024 - Present",
      "subtitle": "ML / AI Engineer",
      "details": [
        "Developed and fine-tuned LLM and VLM systems for client projects, focusing on domain adaptation and inference efficiency.",
        "Implemented agentic and RAG pipelines and built full-stack ML deployments with containerization and cloud services.",
        "Designed visual anomaly detection systems and end-to-end ML pipelines for production use."
      ],
      "tags": ["LLMs","VLMs","Docker"],
      "icon": "briefcase"
    },
    {
      "title": "VisLab (an Ambarella Inc. company)",
      "duration": "Nov 2024 - Apr 2025",
      "subtitle": "AI Engineer Intern",
      "details": [
        "Implemented pedestrian intention forecasting models using Conv-DNNs, LSTMs and vision-language techniques for autonomous driving.",
        "Integrated multimodal perception pipelines and fine-tuned VLMs on custom datasets for improved situational awareness.",
        "Worked on multi-GPU training, distributed training setups and performance profiling for real-time systems."
      ],
      "tags": ["PyTorch","VLM","Distributed Training"],
      "icon": "car"
    }
  ],
  "education": [
    {
      "title": "Master Engineering in Artificial Intelligence",
      "duration": "Sep 2023 - Oct 2025",
      "subtitle": "University of Bologna - GPA 4.0/4 with Honours",
      "details": [],
      "tags": [],
      "icon": "graduation-cap"
    },
    {
      "title": "Bachelor Engineering in Automation",
      "duration": "Sep 2020 - Oct 2023",
      "subtitle": "University of Bologna - GPA 3.8/4",
      "details": [],
      "tags": [],
      "icon": "graduation-cap"
    }
    ,
    {
      "title": "Microsoft Certified: Azure AI Fundamentals",
      "duration": "Oct 2025",
      "subtitle": "Microsoft",
      "details": [
        "Credential ID: 82B2E57A1297CAB8",
        "Credential URL: https://learn.microsoft.com/api/credentials/share/it-it/JaspinderSingh-7538/82B2E57A1297CAB8?sharingId=3151791608CED9B9"
      ],
      "tags": ["Certification"],
      "icon": "certificate"
    },
    {
      "title": "Google Data Analytics Professional Certificate",
      "duration": "Apr 2024",
      "subtitle": "Google",
      "details": [
        "Credential URL: https://www.credly.com/badges/80c421cf-7945-4ec8-9031-3cf807b069de/linked_in_profile"
      ],
      "tags": ["Certification"],
      "icon": "certificate"
    }
  ],
  "contactLinks": [
    {
      "label": "Email",
      "link": "mailto:singhjaspinder10@gmail.com",
      "icon": "fa fa-envelope"
    },
    {
      "label": "LinkedIn",
      "link": "https://www.linkedin.com/in/jaspinder8898",
      "icon": "fa-brands fa-linkedin"
    },
    {
      "label": "GitHub",
      "link": "https://github.com/Singh8899",
      "icon": "fa-brands fa-github"
    }
  ],
  "footer": [
    {
      "label": "Links",
      "data": [
        {
          "text": "Github",
          "link": "https://github.com/Singh8899"
        }
      ]
    },
    {
      "label": "copyright-text",
      "data": [
        "Built with HTML, CSS, JavaScript, and ❤️"
      ]
    }
  ]
}

export const bio = data.bio;

export const skills = data.skills;

export const experience = data.experience

export const education = data.education

export const contactLinks = data.contactLinks

export const footer = data.footer;
