// frontend/src/data/mock.js

export const portfolioData = {
  profile: {
    fullName: "Onyero Walter Ofuzim",
    title: "Data / Analytics Engineer • Software Engineer • Controls (SysID/MPC) • Network Engineer",
    tagline:
      "Data Engineering • Lakehouse/ETL • Backend APIs • Battery Modeling & Control • Network Analytics",
    email: "onyero.ofuzim@gmail.com",
    phone: "+1 403 605 0955",
    location: "Calgary, AB, Canada",
    photo:
      "https://customer-assets.emergentagent.com/job_a603944d-6191-46e4-bd9b-36fb9e092e4d/artifacts/gvuhwyn9_ChatGPT%20Image%20Dec%2030%2C%202025%2C%2003_23_12%20AM.png",
    links: {
      github: "https://github.com/Waltberry",
      linkedin: "https://linkedin.com/in/onyero-walter-ofuzim",
      portfolio: "https://waltberry.github.io/onyero-walter-ofuzim/",
      researchgate: "https://www.researchgate.net/profile/Onyero-Ofuzim?ev=hdr_xprf",
    },
    summary:
      "Engineer with ~2+ years combined experience across data/analytics engineering, backend software, control systems, and battery modeling. I build reproducible pipelines (Spark/Delta/dbt-style), APIs (FastAPI/.NET/Node), QA automation (pytest/Selenium), and physics-based Li-ion models (SPMe/DFN) with estimation (EKF/UKF) and System ID (ARX/BJ/PEM). Strong delivery habits: clear docs, testing, CI, and portfolio-quality repos.",
    availability: "Immediate (MSc defense soon: Jan–Mar 2026)",
    quickFacts: [
      "Canada work-eligible (PGWP) • Open to relocate across Canada",
      "M.Sc. Electrical & Software Engineering @ University of Calgary (GPA 3.85) • Defense expected Winter 2026",
      "Strengths: ownership, clear documentation, testable code, practical engineering judgement",
    ],
  },


  awards: [
    {
      id: "aw-1",
      title: "Department of Electrical and Software Engineering Funding",
      issuer: "Department of Electrical and Software Engineering, University of Calgary",
      date: "Jan 2024",
      details: "Graduate funding support for M.Sc. studies (Schulich School of Engineering).",
    },
    {
      id: "aw-2",
      title: "Department / Faculty Scholarship Award (Exceptional Student)",
      issuer: "Faculty of Engineering, University of Calgary",
      date: "Jan 2024",
      details:
        "Exceptional student award recognizing outstanding academic performance and research potential.",
    },

    {
      id: "aw-3",
      title: "International Graduate Tuition Award",
      issuer: "Office of the Provost, University of Calgary",
      date: "Jan 2024",
      details: "Tuition award supporting international graduate studies.",
    },
    {
      id: "aw-4",
      title: "Sri Lanka Imanust Graduate Scholarship Engineering Award",
      issuer: "S. C. (Chan) and Dhamitha Wirasinghe",
      date: "Jan 2024",
      details: "Engineering scholarship award (University of Calgary).",
    },
    {
      id: "aw-5",
      title: "Federal Government of Nigeria Scholarship",
      issuer: "Federal Government of Nigeria",
      date: "Sep 2017",
      details:
        "Awarded to full-time university students meeting CGPA requirements (≥4.0/5.0 or equivalent).",
    },
    {
      id: "aw-6",
      title: "Jim Ovia Undergraduate Scholarship",
      issuer: "Jim Ovia Foundation",
      date: "Dec 2016",
      details:
        "Awarded based on intellectual ability, leadership, and commitment to societal impact.",
    },
    {
      id: "aw-7",
      title: "Delta State Bursary and Scholarship (DSBSB)",
      issuer: "Delta State Government / DSBSB",
      date: "Jan 2016",
      details: "Bursary for Deltans in tertiary institutions.",
    },
  ],

  experience: [
    {
      id: 1,
      title: "Graduate Research Assistant / Graduate Teaching Assistant",
      company: "University of Calgary",
      department: "Alberta Innovates (DICE) / TC Energy",
      location: "Calgary, AB",
      dates: "Jan 2024 – Present",
      highlights: [
        "Built physics-based Li-ion models (SPMe/DFN) in Python (PyBaMM) and MATLAB; designed SOC/SOE observers (EKF/UKF) and validated against bench cycling data",
        "Developed parameter-estimation pipelines for kinetics, diffusion, and transport via nonlinear least squares and PSO; ran sensitivity and Monte Carlo studies to quantify uncertainty",
        "Implemented degradation models (SEI growth, LAM, R0 rise) and coupled capacity fade + resistance growth to state equations for life-cycle prediction",
        "Built hybrid data+physics estimators using ARX/BJ/NARX baselines and LSTM prototypes; generated early-warning indicators and simple RUL forecasts from health features",
        "Authored requirements + acceptance criteria; created V&V plans and simulation harnesses with scenario suites, assertions, and unit tests; maintained traceability with Git",
        "TA for Controls, Optimization, Software Engineering Practices, and Computer Organization; mentored students on Git, testing, and clean design",
      ],
    },
    {
      id: 2,
      title: "Lead Technology Specialist / Network Support Analyst",
      company: "MTN",
      department: "NPQA (Core Performance)",
      location: "Lagos, Nigeria",
      dates: "Aug 2022 – Nov 2023",
      highlights: [
        "Led/mentored a 5-person analyst team delivering KPI analytics and incident insights for core performance quality assurance",
        "Built Python automation scripts for reporting + analysis; improved incident response workflows and reduced downtime by ~15% (reported internally)",
        "Worked heavily with terminals + Linux + Bash; supported SNMP monitoring configurations and proactive health tracking",
        "Partnered cross-functionally to triage network faults and convert recurring issues into repeatable playbooks and dashboards",
      ],
    },
    {
      id: 3,
      title: "Real Estate Assistant (Unlicensed)",
      company: "CIR REALTY",
      department: "",
      location: "Calgary, AB",
      dates: "May 2024 – Aug 2024",
      highlights: [
        "Supported admin workflows, listings, and client coordination; strengthened professional communication and operational organization",
      ],
    },
    {
      id: 4,
      title: "Undergraduate Research Assistant",
      company: "University of Benin",
      department: "Dept. of Electrical/Electronic Engineering",
      location: "Benin, Nigeria",
      dates: "Jan 2020 – Aug 2021",
      highlights: [
        "Prototyped GSM-enabled battery monitoring/control device; contributed to documentation and publication work",
      ],
    },
    {
      id: 5,
      title: "Network Operations/Support Engineering Intern",
      company: "MTN",
      department: "NSMC",
      location: "Lagos, Nigeria",
      dates: "Nov 2019 – May 2020",
      highlights: [
        "Supported TX/IP MPLS, Data & Internet Services, and NSS operations; monitored network health via SNMP",
        "Built Excel dashboards for daily/weekly reporting and RCA support",
      ],
    },
    {
      id: 6,
      title: "Automation/Electrical Engineer Intern",
      company: "Nigerian Bottling Company (Coca-Cola HBC)",
      department: "",
      location: "Lagos, Nigeria",
      dates: "Aug 2019 – Nov 2019",
      highlights: [
        "Troubleshot electrical/automation systems; performed inspections and QA; improved documentation flow via structured work orders",
      ],
    },
  ],

  education: [
    {
      id: 1,
      degree: "M.Sc., Electrical & Software Engineering",
      school: "University of Calgary",
      location: "Calgary, AB",
      dates: "Jan 2024 – Present",
      gpa: "3.85",
      status: "Defense: Jan–Mar 2026 (expected)",
      focus: [
        "Advanced Control & System Identification",
        "AI/ML",
        "Battery Modelling (SPMe/DFN)",
        "Software Engineering",
      ],
    },
    {
      id: 2,
      degree: "M.Sc., Financial Engineering (Non-thesis)",
      school: "WorldQuant University (Online)",
      location: "Online",
      dates: "2025 – Present",
      focus: ["Quantitative Finance", "Statistical Modelling", "Python for Markets"],
    },
    {
      id: 3,
      degree: "Non-degree: Full-Stack Web Development",
      school: "University of Helsinki (Online, Free)",
      location: "Online",
      dates: "Oct 2025",
      focus: [
        "GraphQL",
        "TypeScript",
        "CI/CD",
        "Containers",
        "Relational DBs",
        "React Native",
      ],
    },
    {
      id: 4,
      degree: "B.Eng., Electrical/Electronic Engineering",
      school: "University of Benin",
      location: "Benin, Nigeria",
      dates: "2021",
      focus: ["Power/Electronics", "Control", "Embedded Systems (foundational)"],
    },
  ],

  skills: {
    "Data Engineering & Cloud": [
      "PySpark/Spark",
      "Delta Lake",
      "Databricks",
      "dbt (concepts/tests)",
      "Airflow/Prefect (concepts)",
      "Kafka (basics)",
      "AWS (S3/Glue/Lambda/IAM/CloudWatch)",
      "Azure Databricks (basics)",
      "GCP BigQuery (basics)",
      "PostgreSQL",
      "MySQL",
      "Snowflake (SQL)",
      "DuckDB",
    ],
    "ML & Analytics": [
      "scikit-learn",
      "XGBoost/LightGBM",
      "TensorFlow",
      "PyTorch",
      "MLflow (basics)",
      "Feature Engineering",
      "Time-Series (Prophet)",
      "Power BI",
      "Excel (advanced)",
    ],
    "Controls & Battery Systems": [
      "Classical/State-space Control",
      "EKF/UKF observers",
      "System ID (ARX/BJ/PEM)",
      "MPC concepts",
      "SPMe/DFN battery models (PyBaMM)",
      "MATLAB/Simulink",
    ],
    "Languages & Dev": [
      "Python",
      "C/C++",
      "MATLAB",
      "Java",
      "JavaScript/TypeScript",
      "R",
      "Bash",
      "SQL",
      "Git/GitHub",
      "Docker",
      "Kubernetes (basics)",
    ],
    "Testing & CI/CD": [
      "pytest",
      "unittest",
      "Behave (Gherkin)",
      "Selenium",
      "GitHub Actions",
      "Jenkins/Travis (exposure)",
      "TDD habits",
      "Jira/Agile",
    ],
  },

  projects: {
    "Data Engineering & Lakehouse": [
      {
        id: "de-1",
        name: "Mobility Lakehouse (Polyglot) — Local Dockerized Platform",
        summary:
          "End-to-end local lakehouse: Kafka→Spark(Scala)→Delta Bronze/Silver/Gold, Airflow+Great Expectations checks, Trino SQL marts, Prometheus/Grafana metrics, and a React data-catalog UI.",
        stack: ["Kafka", "Spark/Scala", "Delta", "Airflow", "Great Expectations", "Trino", "Prometheus", "Grafana", "Docker", "React/TS"],
        links: { repo: "https://github.com/Waltberry/mobility-lakehouse" },
      },
      {
        id: "de-2",
        name: "Olist Medallion Lakehouse",
        summary:
          "PySpark + Delta medallion pipeline (Bronze/Silver/Gold), KPI marts for delivery SLA and revenue; exported curated outputs for BI.",
        stack: ["PySpark", "Delta Lake", "Power BI"],
        links: { repo: "https://github.com/Waltberry/olist-medallion" },
      },
      {
        id: "de-3",
        name: "Databricks Mini-Lakehouse (Scala + Python) — with Docker Tools",
        summary:
          "Structured Streaming to Delta Bronze, Python Silver/Gold, lightweight data contracts/quality checks, MLflow logging, and local validation tooling via Docker.",
        stack: ["Databricks", "Scala", "Python", "Delta Lake", "MLflow", "Docker"],
        links: { repo: "https://github.com/Waltberry/Databricks_-free-_Lakehouse" },
      },
      {
        id: "de-4",
        name: "OSS Lakehouse in Docker (No Cloud) — Spark + Delta + MinIO + MLflow",
        summary:
          "Minimal reproducible lakehouse stack locally: Spark master/worker + Delta, MinIO S3 storage, MLflow server, JupyterLab env, and sample medallion flows.",
        stack: ["Spark", "Delta", "MinIO", "MLflow", "Docker", "Jupyter"],
        links: { repo: "https://github.com/Waltberry/OSS-Lakehouse" },
      },
      {
        id: "de-5",
        name: "Synapse-Style SQL on Files (DuckDB & Spark) — Dockerized",
        summary:
          "Practice querying CSV/JSON/Parquet directly in a lake-style folder layout with DuckDB and Spark SQL; includes copy pipelines and Parquet transforms.",
        stack: ["DuckDB", "Spark SQL", "Python", "Docker"],
        links: { repo: "https://github.com/Waltberry/Synapse-local-SQL" },
      },
    ],

    "Cloud / Kubernetes / Platform": [
      {
        id: "plat-1",
        name: "Kubernetes Cost Visibility Lab",
        summary:
          "Kind cluster with Kyverno label policies, OpenCost, kube-prometheus-stack, and a FastAPI /cost-report proxy for namespace/controller allocation reporting.",
        stack: ["Kubernetes", "Helm", "Kyverno", "OpenCost", "Prometheus", "Grafana", "FastAPI"],
        links: {
          repo: "https://github.com/Waltberry/k8s-cost-lab",
          api: "https://github.com/Waltberry/cost-report-api",
        },
      },
      {
        id: "plat-2",
        name: "kubeops-fastapi-operator",
        summary:
          "KOPF operator managing FastAPI + Postgres with CRDs, reconciliation, rollouts, tests, and runbooks.",
        stack: ["Python", "Kubernetes", "KOPF", "PostgreSQL"],
        links: { repo: "https://github.com/Waltberry/kubeops-fastapi-operator" },
      },
    ],

    "Backend & Full-Stack": [
      {
        id: "be-1",
        name: "Municipal Service Requests Portal",
        summary:
          "React UI + ASP.NET Core API + EF Core with PostgreSQL/SQL Server; validation, pagination, and tests.",
        stack: ["React", "C#/.NET", "EF Core", "SQL"],
        links: { repo: "https://github.com/Waltberry/municipal-service-portal" },
      },
      {
        id: "be-2",
        name: "Banking System (.NET) — Modular Learning System",
        summary:
          "Production-style modular banking system using ASP.NET Core, EF Core, Clean Architecture patterns, and testing.",
        stack: [".NET", "ASP.NET Core", "EF Core", "SQLite", "Swagger", "xUnit"],
        links: { repo: "https://github.com/Waltberry/BankingSystem" },
      },
      {
        id: "be-3",
        name: "Clinic Inbox Agent",
        summary:
          "AI-assisted triage dashboard: classify messages by category/urgency and propose actions. Backend FastAPI + DB; frontend Next.js + Tailwind.",
        stack: ["FastAPI", "SQLite/PostgreSQL", "Next.js", "Tailwind"],
        links: { repo: "https://github.com/Waltberry/clinic-inbox-agent" },
      },
      {
        id: "be-4",
        name: "Order Notifications Demo",
        summary:
          "Real-time order status updates with FastAPI WebSockets and React/TypeScript UI. Broadcasts events on create/update.",
        stack: ["FastAPI", "WebSockets", "React", "TypeScript"],
        links: { repo: "https://github.com/Waltberry/order-notifications-demo" },
      },
      {
        id: "be-5",
        name: "Order Dispatch Simulator",
        summary:
          "Simulates assigning orders to drivers with multiple strategies (nearest/load-balanced/batched) and compares operational metrics in a Streamlit dashboard.",
        stack: ["Python", "FastAPI", "Streamlit", "pytest"],
        links: { repo: "https://github.com/Waltberry/order-dispatch-simulator" },
      },
      {
        id: "be-6",
        name: "Tiny Trip Planner",
        summary:
          "Small full-stack demo app for itineraries. React+TS+Leaflet frontend, Node/Express backend, structured for portfolio reuse.",
        stack: ["React", "TypeScript", "Leaflet", "Node.js", "Express"],
        links: { repo: "https://github.com/Waltberry/tiny-trip-planner" },
      },
      {
        id: "be-7",
        name: "Staff Management API (Java Spring Boot)",
        summary:
          "RESTful service for employee management demonstrating Spring Boot API patterns and JSON responses.",
        stack: ["Java", "Spring Boot", "REST"],
        links: { repo: "https://github.com/Waltberry/StaffManagementAPI" },
      },
      {
        id: "be-8",
        name: "Cafeteria Menu RAG/LLM Assistant",
        summary:
          "RAG assistant answering questions about menus/allergens. Ingestion chunking + embeddings into pgvector; FastAPI backend + Streamlit chat UI; Dockerized.",
        stack: ["Python", "FastAPI", "Streamlit", "PostgreSQL", "pgvector", "Docker", "RAG"],
        links: { repo: "https://github.com/Waltberry/Cafeteria-Menu-RAG-Assistant" },
      },
    ],

    "Testing / QA Automation": [
      {
        id: "qa-1",
        name: "API Smoke Tests — reqres.in",
        summary:
          "CI-friendly API smoke pack with retries, HTML/JUnit reporting, and negative tests for a public demo API.",
        stack: ["Python", "pytest", "requests", "CI"],
        links: { repo: "https://github.com/Waltberry/api-smoke-reqres" },
      },
      {
        id: "qa-2",
        name: "UI E2E — SauceDemo (Behave + Selenium)",
        summary:
          "E2E test suite automating a purchase flow using Gherkin + Page Object Model; runs in GitHub Actions.",
        stack: ["Python", "Selenium", "Behave", "GitHub Actions"],
        links: { repo: "https://github.com/Waltberry/ui-e2e-saucedemo-behave" },
      },
    ],

    "Networking & Systems": [
      {
        id: "net-1",
        name: "Cisco-Style Multi-Client TCP Echo Server",
        summary:
          "BSD sockets server supporting multiple clients using poll(), partial read/write handling, and clean protocol behavior.",
        stack: ["C++", "BSD Sockets", "poll()", "Linux"],
        links: { repo: "https://github.com/Waltberry/cisco-echo-server" },
      },
      {
        id: "net-2",
        name: "SNMP Network Health Dashboard",
        summary:
          "SNMP polling + SQLite storage + FastAPI endpoints and a NOC-style dashboard UI. Ready to extend to Grafana.",
        stack: ["Python", "FastAPI", "SQLite", "SNMP"],
        links: { repo: "https://github.com/Waltberry/network_snmp_health_dashboard" },
      },
      {
        id: "net-3",
        name: "High-Performance Systems & Algorithms Bench",
        summary:
          "Benchmarking/experimentation suite for performance-critical code with repeatable runs and correctness checks.",
        stack: ["C++", "Python", "Benchmarking"],
        links: { repo: "https://github.com/Waltberry/hp-systems-algorithms-bench" },
      },
    ],

    "Controls / Battery / Industrial": [
      {
        id: "ctrl-1",
        name: "Flowpilot SCADA (PLC/HMI/SCADA Tank Control)",
        summary:
          "Modbus TCP + InfluxDB + Grafana + Node-RED dashboard; supports Python PLC simulator and optional OpenPLC structured text.",
        stack: ["Modbus TCP", "Node-RED", "InfluxDB", "Grafana", "OpenPLC"],
        links: { repo: "https://github.com/Waltberry/flowpilot-scada" },
      },
      {
        id: "ctrl-2",
        name: "Kalman Filter — 1D Position Tracker (Streamlit)",
        summary:
          "Interactive Kalman Filter demo with tunable process/measurement noise; exports data for analysis.",
        stack: ["Python", "Kalman Filter", "Streamlit"],
        links: { repo: "https://github.com/Waltberry/kalman-filter-demo" },
      },
      {
        id: "ctrl-3",
        name: "LV Switchboard — Approval Package (Mini Project)",
        summary:
          "Simplified LV switchboard design package mirroring an approval set: drawings + schedules; practiced CAD tooling.",
        stack: ["AutoCAD Electrical", "QElectroTech", "LibreCAD"],
        links: { repo: "https://github.com/Waltberry/LV-Switchboard" },
      },
      {
        id: "ctrl-4",
        name: "PEM Electrolyzer Battery Prediction (NARX)",
        summary:
          "NARX/LSTM experiments forecasting voltage from current history for predictive maintenance signals.",
        stack: ["Python", "NARX", "LSTM", "Time-Series"],
        links: {
          paper:
            "https://www.researchgate.net/publication/386466076_Proton_Exchange_Membrane_Electrolyzer_Battery_Data_Prediction_Using_NARX_Nonlinear_AutoRegressive_with_Exogenous_Inputs_Neural_Network_Model",
        },
      },
    ],

    "ML / Analytics Projects": [
      {
        id: "ml-1",
        name: "E-Commerce Recommender System (Streamlit)",
        summary:
          "Modular recommendation engine with popularity, item-similarity, and hybrid strategies; designed to resemble batch + streaming architecture patterns.",
        stack: ["Python", "Streamlit", "Recommenders", "Data Pipelines"],
        links: { repo: "https://github.com/Waltberry/recommender-system" },
      },
      {
        id: "ml-2",
        name: "Customer Churn Prediction (Telecom Case Study)",
        summary: "Churn modeling workflow: feature engineering, model training, and evaluation for churn risk insights.",
        stack: ["Python", "scikit-learn", "ML"],
        links: {
          repo: "https://github.com/Waltberry/Customer-Churn-Prediction-in-a-Telecom-Company",
        },
      },
      {
        id: "ml-3",
        name: "Data-Driven Insights for Donor Selection",
        summary:
          "ML analysis to identify high-potential donors and improve fundraising targeting decisions.",
        stack: ["Python", "ML", "Analytics"],
        links: { repo: "https://github.com/Waltberry/Data-Driven_Insights_for_Donor_Selection" },
      },
      {
        id: "ml-4",
        name: "Stock Monitor",
        summary:
          "Application for monitoring market trends and analyzing stock signals (learning/portfolio project).",
        stack: ["Python", "Data", "Visualization"],
        links: { repo: "https://github.com/Waltberry/StockMonitor" },
      },
    ],

    "Embedded / IoT": [
      {
        id: "iot-1",
        name: "Arduino Temperature Warning System (IoT)",
        summary:
          "NTC thermistor temperature monitoring with LED alerts; foundational embedded + sensing build.",
        stack: ["Arduino", "Sensors", "Embedded C"],
        links: { repo: "https://github.com/Waltberry/Arduino-Temperature-Warning-System-IoT-" },
      },
      {
        id: "iot-2",
        name: "Battery Monitoring & Control Device using IoT (PIC16F887 + GSM)",
        summary:
          "Remote battery monitoring/control device integrating PIC microcontroller and GSM/GPRS module; research and build documentation.",
        stack: ["PIC16F887", "GSM/GPRS", "Embedded C", "IoT"],
        links: {
          paper:
            "https://www.researchgate.net/publication/369377501_Design_and_Construction_of_a_Remote_Battery_Monitoring_and_Control_Device_Using_the_Internet_of_Things_IoT",
        },
      },
    ],

    "Product / Stakeholder Demos": [
      {
        id: "demo-1",
        name: "AI for Sales Enablement — Offline Demo",
        summary:
          "Deterministic prototype that ingests opportunities and produces KPIs, risk scoring, recommendations, and draft follow-up emails (LLM-ready later).",
        stack: ["Python", "CSV", "Rules/Heuristics", "Dashboards"],
        links: { repo: "https://github.com/Waltberry/ai-sales-enablement-demo" },
      },
      {
        id: "demo-2",
        name: "LLM Pilot Playbook Dashboard",
        summary:
          "Dashboard for structuring LLM pilot conversations: use-case framing, cost/latency estimation, and evaluation discussion without calling paid APIs.",
        stack: ["Web App", "Product Thinking", "LLM Ops (concepts)"],
        links: { repo: "https://github.com/Waltberry/llm-pilot-playbook-dashboard" },
      },
    ],

    "Mobile": [
      {
        id: "mob-1",
        name: "CashAdvanceApp (React Native)",
        summary:
          "React Native demo simulating cash advance requests; includes testing setup with RN Testing Library and Detox (Android E2E).",
        stack: ["React Native", "TypeScript", "Jest", "Detox"],
        links: { repo: "https://github.com/Waltberry/CashAdvanceApp" },
      },
    ],

    "BI / Dashboards": [
      {
        id: "bi-1",
        name: "Supplier Quality & Capability Dashboard (Power BI)",
        summary:
          "One-page operational dashboard integrating defect rates, Cp/Cpk capability, and NCR aging to drive weekly containment and 8D actions.",
        stack: ["Power BI", "Quality KPIs", "Operations Analytics"],
        links: {
          repo: "https://github.com/Waltberry/Supplier-Quality-Capability-Dashboard-Power-BI-.git",
        },
      },
    ],
  },

  publications: [
    {
      id: "pub-1",
      title:
        "Proton Exchange Membrane Electrolyzer Battery Data Prediction Using NARX (Nonlinear AutoRegressive with Exogenous Inputs) Neural Network Model",
      authors: "Desiree Leal, Onyero Walter Ofuzim",
      venue: "ResearchGate (preprint / publication entry)",
      year: "2025",
      links: {
        paper:
          "https://www.researchgate.net/publication/386466076_Proton_Exchange_Membrane_Electrolyzer_Battery_Data_Prediction_Using_NARX_Nonlinear_AutoRegressive_with_Exogenous_Inputs_Neural_Network_Model",
      },
    },
    {
      id: "pub-2",
      title:
        "Design and Construction of a Remote Battery Monitoring and Control Device Using the Internet of Things (IoT)",
      authors: "Onyero Walter Ofuzim (and co-authors where applicable)",
      venue: "ResearchGate (project/thesis publication entry)",
      year: "2021",
      links: {
        paper:
          "https://www.researchgate.net/publication/369377501_Design_and_Construction_of_a_Remote_Battery_Monitoring_and_Control_Device_Using_the_Internet_of_Things_IoT",
      },
    },
    {
      id: "pub-3",
      title: "Kinematic Analysis of Omnidirectional Mecanum Wheeled Robot (Co-author)",
      authors: "Onyero Walter Ofuzim (and co-authors where applicable)",
      venue: "ResearchGate (publication entry)",
      year: "2023",
      links: {
        paper:
          "https://www.researchgate.net/publication/367412380_Kinematic_Analysis_of_Omnidirectional_Mecanum_Wheeled_Robot",
      },
    },
  ],

  openSource: [
    {
      id: "oss-1",
      org: "Meshery (Layer5)",
      role: "Contributor",
      dates: "Dec 2025 – Present",
      summary:
        "Engaging with Meshery community; scoping issues across server/operator (Go) and UI (React/Next); onboarding tasks, triage, small fixes, tests, and docs improvements.",
      links: { home: "https://meshery.io/" },
    },
  ],

  jobSimulations: {
    "Forage / Virtual Experience Programs": [
      "GE Engineering Virtual Experience (Aug 2022) — practical modules across energy sectors",
      "J.P. Morgan Software Engineering (May 2024) — env setup + Perspective graphs",
      "Blackbird Australia Software Engineering (Jun 2024) — cloud infra + A/B testing ideas",
      "JPMorgan Agile Simulation (Jun 2024) — user stories, sprint rituals, Trello workflows",
      "JPMorgan SWE Lite (Jun 2024) — ticket resolution + tests for credit card rewards system",
      "Citi ICG Technology SWE (Jun 2024) — UML, ML system recommendations, Java visualization tool",
      "HPE Software Engineering (Jul 2024) — REST service proposal + Spring Boot + unit tests",
      "Lyft Back-End Engineering (Jul 2024) — UML class diagram + refactor + TDD features",
      "Ford EV Engineering (Jul 2024) — PID tuning analysis + cost-benefit studies",
      "Siemens Mobility Ops Industrial Engineer (Aug 2024) — bottleneck + layout optimization proposal",
      "Siemens Mobility Project Manager (Aug 2024) — KPI/dashboard management + stakeholder challenges",
      "JPMorgan Quant Research (Sep 2024) — PD estimation + dynamic programming for FICO binning",
    ],
  },

  certifications: {
    "Data & Cloud": [
      "Docker & Kubernetes Masterclass (Packt, Sep 2025)",
      "DeepLearning.AI / AWS Data Engineering Professional Certificate (Sep 2025)",
      "Snowflake Data Engineering Professional Certificate (Sep 2025)",
      "Mastering Azure Databricks for Data Engineers (Packt, Jul 2025)",
      "Data Engineer in Python (DataCamp, Nov 2024)",
      "Data Analyst in SQL (DataCamp, May 2023)",
      "Introduction to Power BI (DataCamp, Feb 2023)",
      "Big Data Fundamentals with PySpark (DataCamp, Sep 2022)",
      "Introduction to PySpark (DataCamp, Aug 2022)",
      "Introduction to Airflow in Python (DataCamp, Aug 2022)",
      "Introduction to AWS Boto in Python (DataCamp, Aug 2022)",
      "AWS Cloud Concepts (DataCamp, Aug 2022)",
      "Database Design (DataCamp, Aug 2022)",
      "Intermediate SQL Server (DataCamp, Aug 2022)",
      "Intro to Relational Databases (DataCamp, Aug 2022)",
      "Intro to SQL Server (DataCamp, Aug 2022)",
      "PostgreSQL Summary Stats & Window Functions (DataCamp, Jun 2022)",
      "Intermediate SQL (DataCamp, Jun 2022)",
      "SQL Fundamentals (DataCamp, Jun 2022)",
      "Joining Data in SQL (DataCamp, May 2022)",
    ],
    "Machine Learning & AI": [
      "Machine Learning — Stanford Online (Dec 2021)",
      "Deep Learning with PyTorch: GAN — Coursera (Sep 2022)",
      "Fine-Tune BERT for Text Classification (TensorFlow) — Coursera (Sep 2022)",
      "Aerial Image Segmentation with PyTorch — Coursera (Sep 2022)",
      "Object Localization with TensorFlow — Coursera (Sep 2022)",
      "Tweet Emotion Recognition with TensorFlow — Coursera (Sep 2022)",
      "Tesla Stock Price Prediction (Prophet) — Coursera (Sep 2022)",
      "Build your first AI Stock Predictor (Amazon Forecast) — Coursera (Jan 2022)",
      "Create a Superhero Name Generator (TensorFlow) — Coursera (Jan 2022)",
      "Hyperparameter Tuning with Keras Tuner — Coursera (Jan 2022)",
      "Build your first ML Pipeline (Dataiku) — Coursera (Dec 2021)",
      "Supervised Learning with scikit-learn — DataCamp (Jul 2022)",
      "Extreme Gradient Boosting with XGBoost — DataCamp (Jul 2022)",
      "Statistical Thinking in Python (Part 1 & 2) — DataCamp (May 2022)",
      "Unsupervised Learning in Python — DataCamp (May 2022)",
      "Dimensionality Reduction in Python — DataCamp (Jul 2022)",
      "Machine Learning with Tree-Based Models in Python — DataCamp (May 2022)",
      "Machine Learning for Everyone — DataCamp (May 2022)",
    ],
    "Software & Programming": [
      "Programming with JavaScript — Meta (Oct 2023)",
      "Programming in Python — Meta (Aug 2023)",
      "Databases for Back-End Development — Meta (Sep 2023)",
      "Database Structures & Management with MySQL — Meta (Aug 2023)",
      "Advanced MySQL Topics — Meta (Aug 2023)",
      "Programming Fundamentals in Kotlin — Meta (Jun 2023)",
      "Open Source Software Development, Linux and Git — Linux Foundation (Jul 2023)",
      "Version Control — Meta (Jun 2023)",
      "Create an Android App with Kotlin — Coursera (Jul 2023)",
      "Developing Python Packages — DataCamp (Jun 2022)",
      "Object-Oriented Programming in Python — DataCamp (Jun 2022)",
      "Python Programmer Track — DataCamp (Jun 2022)",
      "Python Programming — DataCamp (Aug 2022)",
    ],
    "Robotics & Autonomy": [
      "Robotics series — University of Pennsylvania (Oct 2022–Mar 2023)",
      "Self-Driving Car Fundamentals — Udacity (Feb 2022)",
      "Introduction to Self-Driving Cars — University of Toronto (Jan 2022)",
      "Modern Robotics: Foundations — Northwestern University (Dec 2021)",
      "Cooperation in Autonomous Vehicles — IEEE (Oct 2022)",
      "Developing & Validating Control Systems for CAVs — IEEE (Oct 2022)",
    ],
    "Analytics / BI & Excel": [
      "Excel Basics for Data Analysis — IBM (Jul 2022)",
      "Excel Essentials for Data Analytics (IBM Badge) — IBM (Jul 2022)",
      "Python for Data Science and AI (IBM Badge) — IBM (Aug 2022)",
      "Introduction to Data Analytics — IBM (Apr 2022)",
      "Data Analytics Essentials (IBM Badge) — IBM (Apr 2022)",
    ],
    "Languages": ["Beginner German (CEFR A1) — Linguaphone (Dec 2013)"],
  },
};
