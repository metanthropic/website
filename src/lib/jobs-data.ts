export interface JobPost {
  slug: string;
  title: string;
  department: string; // Parent Category (e.g., "Applied AI Engineering")
  team: string;       // Sub-Category (e.g., "Growth", "Platform")
  location: string;
  salary: string;
  description: string;
  responsibilities: string[];
  requirements: string[];
  isManager?: boolean;
}

export const JOB_POSTS: JobPost[] = [
  // --- DEPARTMENT: APPLIED AI ENGINEERING ---
  {
    slug: 'backend-engineer-growth',
    title: 'Backend Software Engineer, Growth',
    department: 'Applied AI Engineering',
    team: 'Growth',
    location: 'San Francisco',
    salary: '$160K – $385K + Equity',
    description: `We are looking for an experienced backend engineer to join our Growth team. You will spearhead high-impact projects that amplify the user base of our flagship reasoning models. Your role will include optimizing account access, notifications, and fostering value discovery for our enterprise API.

As we are in the nascent stages of growth at Metanthropic, we will rely on you to discover pivotal areas where strategic bets can catalyze significant impact. We value engineers who are impact-driven, autonomous, and have a strong intuition for unlocking the magic of interpretable AI for the world.`,
    responsibilities: [
      "Drive long-term growth of our platform through data analysis and experimentation.",
      "Partner with frontend and mobile engineers to deploy scalable backend systems.",
      "Execute on projects by working closely with research, design, and data science teams.",
      "Build low-latency APIs that serve our reasoning traces to millions of users."
    ],
    requirements: [
      "Shipped features that optimize user funnels (landing pages, purchase flows).",
      "Highly analytical with experience designing and implementing A/B tests.",
      "Strong proficiency in Python, Go, or Rust.",
      "Comfortable with ambiguity and rapidly changing constraints in a startup environment."
    ]
  },
  {
    slug: 'data-engineering-manager',
    title: 'Data Engineering Manager',
    department: 'Applied AI Engineering',
    team: 'Data Infrastructure',
    location: 'San Francisco',
    salary: '$405K – $490K + Equity',
    isManager: true,
    description: `We’re looking for an experienced leader to scale Metanthropic’s Data Engineering team. You will define the data strategy for our core AI Platform, Search, and Financial Engineering, ensuring that our most critical assets are high quality, trustworthy, and ready to power the next generation of scientific discovery.

This is a hands-on leadership role. You will lead a team building the pipelines that underpin analytics, safety monitoring, and model development.`,
    responsibilities: [
      "Build, manage, and grow a diverse, high-performing Data Engineering team.",
      "Guide data architecture decisions to ensure scalability and reliability.",
      "Partner with Finance and Research teams to anticipate future data needs.",
      "Champion data governance and privacy practices that uphold our ethical standards."
    ],
    requirements: [
      "10+ years of experience in data engineering, including leadership roles.",
      "Experience scaling modern data platforms (Snowflake, Databricks, Spark).",
      "Strong technical expertise in Python, Scala, or Java.",
      "Passion for building operationally excellent systems."
    ]
  },
  {
    slug: 'api-platform-engineer',
    title: 'Software Engineer, API Platform',
    department: 'Applied AI Engineering',
    team: 'Platform',
    location: 'London',
    salary: '£120K – £200K + Equity',
    description: `Metanthropic's API is the interface through which the world interacts with verified, interpretable intelligence. As a Platform Engineer, you will build the distributed systems that serve our models with low latency and high reliability.

You will work on the bleeding edge of inference optimization, ensuring that our "Glass Box" features (like thought traces) are delivered efficiently to millions of users.`,
    responsibilities: [
      "Scale our global API gateway to handle millions of concurrent requests.",
      "Optimize inference latency for large-scale reasoning models.",
      "Implement robust rate-limiting and authentication systems.",
      "Work closely with research teams to deploy new model architectures to production."
    ],
    requirements: [
      "Strong background in distributed systems and microservices.",
      "Proficiency in Golang, Rust, or C++.",
      "Experience with high-throughput, low-latency systems (gRPC, Kafka).",
      "Passion for building developer-first products."
    ]
  },

  // --- DEPARTMENT: RESEARCH ---
  {
    slug: 'research-engineer-pretraining',
    title: 'Research Engineer, Pre-Training',
    department: 'Research',
    team: 'Pre-Training',
    location: 'San Francisco',
    salary: '$295K – $440K + Equity',
    description: `As a Research Engineer on the Pre-Training team, you will be responsible for the foundational systems that train our largest models. You will work at the intersection of hardware and algorithms, optimizing training loops that run across thousands of GPUs.

This role is critical to our mission. You are not just running jobs; you are architecting the "physics" of how our models learn, ensuring stability and efficiency at massive scales.`,
    responsibilities: [
      "Design and implement massive-scale distributed training jobs.",
      "Debug complex numerical instability issues in large models.",
      "Optimize CUDA kernels and communication primitives for custom hardware.",
      "Collaborate with researchers to test novel architectural improvements."
    ],
    requirements: [
      "Strong programming skills in Python and C++.",
      "Experience training large language models (LLMs) on multi-node clusters.",
      "Deep understanding of PyTorch internals and distributed training strategies (FSDP, Megatron).",
      "Excitement about Metanthropic’s 'Physics of AGI' approach."
    ]
  },
  {
    slug: 'research-scientist-reasoning',
    title: 'Research Scientist, Reasoning',
    department: 'Research',
    team: 'Reasoning',
    location: 'New York',
    salary: '$300K – $500K + Equity',
    description: `True intelligence requires more than pattern matching. It requires reasoning. We are looking for Research Scientists to advance the state of the art in "System 2" thinking—building models that can plan, critique their own logic, and solve multi-step problems reliably.

You will work on our novel "Native Reasoning" architecture, moving beyond simple chain-of-thought prompting to mathematically constrained inference paths.`,
    responsibilities: [
      "Develop novel pre-training objectives that encourage logical coherence.",
      "Design datasets and environments that test long-horizon planning.",
      "Publish research in top-tier conferences (NeurIPS, ICML, ICLR).",
      "Work with the safety team to ensure reasoning capabilities remain aligned."
    ],
    requirements: [
      "PhD in Machine Learning, Mathematics, Computer Science, or equivalent.",
      "Track record of published research in reasoning, reinforcement learning, or search.",
      "Strong mathematical maturity and ability to derive new algorithms from first principles.",
      "Desire to solve the hardest problems in AI."
    ]
  },

  // --- DEPARTMENT: SAFETY ---
  {
    slug: 'alignment-scientist',
    title: 'Research Scientist, Alignment',
    department: 'Safety',
    team: 'Alignment',
    location: 'London',
    salary: '£140K – £220K + Equity',
    description: `Metanthropic’s core mission is to build safe AGI. As an Alignment Scientist, you will work on our "Constitutional AI" framework, ensuring our models remain helpful and harmless even as they scale to super-human capabilities.

You will not just be training models; you will be dissecting them. We focus on mechanistic interpretability—understanding the internal weights and activations that lead to specific behaviors.`,
    responsibilities: [
      "Develop novel techniques for visualizing and editing model internal states.",
      "Run adversarial testing campaigns ('Red Teaming') against our latest reasoning engines.",
      "Publish findings in top-tier conferences to advance the field of AI Safety.",
      "Collaborate with policy teams to define technical standards for AGI deployment."
    ],
    requirements: [
      "PhD in Machine Learning, Computer Science, or equivalent experience.",
      "Track record of published research in AI Safety, Interpretability, or Robustness.",
      "Deep understanding of transformer architectures and reinforcement learning.",
      "A principled, ethical approach to the development of powerful technologies."
    ]
  },

  // --- DEPARTMENT: GO TO MARKET ---
  {
    slug: 'solutions-architect',
    title: 'Solutions Architect',
    department: 'Go To Market',
    team: 'Sales Engineering',
    location: 'New York',
    salary: '$200K – $310K + Equity',
    description: `As a Solutions Architect, you will bridge the gap between Metanthropic’s frontier research and our enterprise partners. You will help the world’s leading organizations integrate "Glass Box" AI into their most critical workflows, from pharmaceutical research to financial modeling.

You will be the technical face of Metanthropic for our customers, helping them understand not just what our models can do, but how to verify and trust the results.`,
    responsibilities: [
      "Design custom AI implementations for Fortune 500 partners.",
      "Provide technical guidance on fine-tuning, retrieval (RAG), and prompt engineering.",
      "Act as the feedback loop between customers and our research team.",
      "Build prototypes and proof-of-concepts to demonstrate the value of interpretable AI."
    ],
    requirements: [
      "Experience in a technical consulting or sales engineering role.",
      "Proficiency in Python/TypeScript and familiarity with modern AI stacks.",
      "Excellent communication skills for translating complex research into business value.",
      "Willingness to travel occasionally to client sites."
    ]
  },

  // --- DEPARTMENT: SECURITY ---
  {
    slug: 'security-engineer',
    title: 'Security Engineer',
    department: 'Security',
    team: 'Security Engineering',
    location: 'Remote (US)',
    salary: '$180K – $350K + Equity',
    description: `Protecting the infrastructure that powers the world's most advanced AI is a critical responsibility. As a Security Engineer at Metanthropic, you will secure our model weights, training data, and production environments against advanced persistent threats.

We believe that security is a prerequisite for safety. You will work to harden our cloud infrastructure and ensure that our research remains secure.`,
    responsibilities: [
      "Harden Kubernetes clusters and cloud infrastructure (AWS/Azure).",
      "Conduct internal red-teaming exercises to identify vulnerabilities.",
      "Implement zero-trust networking principles across our research environment.",
      "Automate threat detection and incident response workflows."
    ],
    requirements: [
      "Strong background in cloud security and infrastructure hardening.",
      "Experience with offensive security (Red Teaming) or threat modeling.",
      "Proficiency in Go, Python, or Rust.",
      "Uncompromising integrity and discretion."
    ]
  }
];
