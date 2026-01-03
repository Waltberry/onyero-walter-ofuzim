// frontend/src/data/mock.js
export const portfolioData = {
  profile: {
    fullName: "Onyero Walter Ofuzim",
    title: "Data & Software Engineer",
    tagline: "Data Professional (Analyst / Data Engineer) | Software Engineer | Control Systems (System ID/MPC) | Network Engineer",
    email: "onyero.ofuzim@gmail.com",
    phone: "+1 403 605 0955",
    location: "Calgary, AB, Canada",
    photo: "https://customer-assets.emergentagent.com/job_a603944d-6191-46e4-bd9b-36fb9e092e4d/artifacts/gvuhwyn9_ChatGPT%20Image%20Dec%2030%2C%202025%2C%2003_23_12%20AM.png",
    links: {
      github: "https://github.com/Waltberry",
      linkedin: "https://linkedin.com/in/onyero-walter-ofuzim",
      researchgate: "https://www.researchgate.net/profile/Onyero-Ofuzim?ev=hdr_xprf"
    },
    summary: "Engineer with ~2 years combined experience across data/analytics engineering, control systems, and battery modeling. Builds reproducible pipelines (PySpark/Delta/dbt/Airflow), ML prototypes (scikit-learn/XGBoost/PyTorch), and physics-based Li-ion models (SPMe/DFN in PyBaMM). Comfortable across Python/SQL/JS/Java, CI/CD (GitHub Actions), containers (Docker), and dashboards (Power BI/Streamlit). Proven track record shipping projects, mentoring as a TA, and delivering measurable ops/quality improvements in telco network analytics.",
    availability: "Immediate (MSc defense Jan/Feb)"
  },

  experience: [
    {
      id: 1,
      title: "Graduate Research/Teaching Assistant",
      company: "University of Calgary",
      department: "Alberta Innovates (DICE) / TC Energy",
      location: "Calgary, AB",
      dates: "Jan 2024 – Present",
      highlights: [
        "Built SPMe/DFN Li-ion models (PyBaMM/MATLAB); designed EKF/UKF observers; validated with bench cycling data",
        "Parameter estimation for kinetics/diffusion via NLLS & PSO; sensitivity + Monte Carlo uncertainty",
        "Implemented degradation (SEI, LAM, R0 rise) and life-cycle forecasts",
        "Authored requirements, V&V plans, and unit tests; maintained Git traceability",
        "TA for Controls, Optimization, Software Practices, and Computer Organization"
      ]
    },
    {
      id: 2,
      title: "Lead Technology Specialist / Network Support Analyst",
      company: "MTN",
      department: "NPQA (Core Performance)",
      location: "Lagos, Nigeria",
      dates: "Aug 2022 – Nov 2023",
      highlights: [
        "Led 5-person analyst team; Python automations + KPI analytics (Excel/Power BI) reduced downtime ~15%",
        "Built SNMP-driven health views; scripted workflows and incident reporting"
      ]
    },
    {
      id: 3,
      title: "Graduate Research Assistant",
      company: "University of Benin",
      department: "",
      location: "Nigeria",
      dates: "Jan 2020 – Aug 2021",
      highlights: [
        "Prototyped GSM-enabled battery monitoring/control device; co-authored IoT battery paper"
      ]
    },
    {
      id: 4,
      title: "Network Operations/Support Engineering Intern",
      company: "MTN",
      department: "NSMC",
      location: "Lagos, Nigeria",
      dates: "Nov 2019 – May 2020",
      highlights: [
        "Supported TX/IP MPLS, Data & Internet Services, NSS; SNMP monitoring; Excel dashboards for RCA"
      ]
    }
  ],

  education: [
    {
      id: 1,
      degree: "M.Sc., Electrical & Software Engineering",
      school: "University of Calgary",
      location: "Calgary, AB",
      dates: "Jan 2024 – Present",
      gpa: "3.85",
      status: "Defense: Jan/Feb",
      focus: ["Advanced Control & System Identification", "AI/ML", "Battery Modelling (SPMe/DFN)"]
    },
    {
      id: 2,
      degree: "M.Sc., Financial Engineering (Non-thesis)",
      school: "WorldQuant University (Online)",
      location: "Online",
      dates: "2025 – Present",
      focus: ["Quantitative Finance", "Statistical Modelling", "Python for Markets"]
    },
    {
      id: 3,
      degree: "Non-degree: Full-Stack Web Development",
      school: "University of Helsinki (Online)",
      location: "Online",
      dates: "Oct 2025",
      focus: ["GraphQL", "TypeScript", "CI/CD", "Containers", "Relational DBs", "React Native"]
    },
    {
      id: 4,
      degree: "B.Eng., Electrical/Electronic Engineering",
      school: "University of Benin",
      location: "Benin, Nigeria",
      dates: "Completed",
      focus: []
    }
  ],

  skills: {
    "Data Engineering & Cloud": [
      "PySpark/Spark", "Delta Lake", "Databricks", "dbt", "Airflow", "Kafka",
      "AWS (S3/Glue/Lambda)", "Azure Databricks", "GCP BigQuery",
      "PostgreSQL", "MySQL", "Snowflake"
    ],
    "ML & Analytics": [
      "scikit-learn", "XGBoost/LightGBM", "TensorFlow", "PyTorch", "MLflow",
      "Power BI", "Feature Engineering", "Time-Series (Prophet)"
    ],
    "Controls & Battery Systems": [
      "Classical/State-space Control", "EKF/UKF observers", "System ID (ARX/BJ/PEM)",
      "MPC concepts", "SPMe/DFN battery models (PyBaMM)", "MATLAB/Simulink"
    ],
    "Languages & Dev": [
      "Python", "C/C++", "MATLAB", "Java", "JavaScript/TypeScript", "R",
      "Bash", "SQL", "Git/GitHub", "Docker", "Kubernetes"
    ],
    "Testing & CI/CD": [
      "pytest", "unittest", "GoogleTest", "GitHub Actions", "Jenkins",
      "TDD habits", "Jira/Agile"
    ]
  },

  featuredProjects: [
    {
      id: 1,
      name: "Kubernetes Cost Visibility Lab",
      summary: "Kind cluster with Kyverno label policies, OpenCost, kube-prometheus-stack, and a FastAPI /cost-report proxy for allocation data.",
      stack: ["Kubernetes", "Helm", "Kyverno", "OpenCost", "Prometheus", "Grafana", "FastAPI"],
      links: {
        repo: "https://github.com/Waltberry/k8s-cost-lab",
        api: "https://github.com/Waltberry/cost-report-api"
      }
    },
    {
      id: 2,
      name: "kubeops-fastapi-operator",
      summary: "KOPF operator managing FastAPI + Postgres with CRDs, reconciliation, rollouts, and runbooks.",
      stack: ["Python", "Kubernetes", "KOPF", "PostgreSQL"],
      links: {
        repo: "https://github.com/Waltberry/kubeops-fastapi-operator"
      }
    },
    {
      id: 3,
      name: "Olist Medallion Lakehouse",
      summary: "PySpark + Delta medallion pipeline with Power BI export & SLA KPIs.",
      stack: ["PySpark", "Delta Lake", "Power BI"],
      links: {
        repo: "https://github.com/Waltberry/olist-medallion"
      }
    },
    {
      id: 4,
      name: "Municipal Service Requests Portal",
      summary: "React UI + ASP.NET Core API + EF Core with PostgreSQL/SQL Server; validation, pagination, unit tests.",
      stack: ["React", "C#/.NET", "EF Core", "SQL"],
      links: {
        repo: "https://github.com/Waltberry/municipal-service-portal"
      }
    },
    {
      id: 5,
      name: "Databricks Mini-Lakehouse",
      summary: "Delta Bronze stream + Python Silver/Gold + MLflow; Docker validation tools.",
      stack: ["Scala", "Python", "Delta Lake", "MLflow", "Docker"],
      links: {
        repo: "https://github.com/Waltberry/Databricks_-free-_Lakehouse"
      }
    },
    {
      id: 6,
      name: "PEM Electrolyzer Battery Prediction (NARX)",
      summary: "NARX/LSTM models forecasting V from A; predictive maintenance signal.",
      stack: ["Python", "NARX", "LSTM", "Battery Modeling"],
      links: {
        paper: "https://www.researchgate.net/publication/386466076"
      }
    },
    {
      id: 7,
      name: "Clinic Inbox Agent",
      summary: "AI-assisted triage dashboard; classify messages and propose next actions.",
      stack: ["FastAPI", "PostgreSQL", "Next.js", "Tailwind"],
      links: {
        repo: "https://github.com/Waltberry/clinic-inbox-agent"
      }
    },
    {
      id: 8,
      name: "flowpilot-scada",
      summary: "PLC/HMI/SCADA tank control via Modbus TCP + InfluxDB + Grafana; optional OpenPLC ST.",
      stack: ["Modbus TCP", "InfluxDB", "Grafana", "OpenPLC"],
      links: {
        repo: "https://github.com/Waltberry/flowpilot-scada"
      }
    }
  ],

  certifications: {
    "Data & Cloud": [
      "Docker & Kubernetes Masterclass (Packt, Sep 2025)",
      "DeepLearning.AI/AWS Data Engineering (Sep 2025)",
      "Snowflake Data Engineering (Sep 2025)",
      "Mastering Azure Databricks (Jul 2025)",
      "Data Engineer in Python (DataCamp, Nov 2024)"
    ],
    "ML & AI": [
      "Stanford Machine Learning (2021)",
      "Deep Learning with PyTorch: GAN (2022)",
      "Fine-Tune BERT (TF) (2022)",
      "Supervised Learning with scikit-learn / XGBoost (2022)"
    ],
    "Software & Programming": [
      "Meta: Programming with JavaScript/Python/DBs (2023)",
      "Linux Foundation: OSS Dev, Linux & Git (2023)",
      "Android App with Kotlin (2023)"
    ],
    "Robotics & Autonomy": [
      "UPenn Robotics series (2022–2023)",
      "Self-Driving Car Fundamentals (Udacity, 2022)",
      "Modern Robotics (Northwestern, 2021)"
    ]
  }
};
