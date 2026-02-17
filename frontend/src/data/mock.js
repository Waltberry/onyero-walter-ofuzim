// frontend/src/data/mock.js
export const portfolioData = {
  profile: {
    fullName: "Onyero Walter Ofuzim",
    title: "Data / Software Engineer • Battery Modeling & Controls • Network Analytics",
    tagline:
      "Data Engineering • Analytics • Backend/API • Control Systems (SysID/MPC) • Battery Modeling (SPMe/DFN) • Network Engineering",
    email: "onyero.ofuzim@gmail.com",
    phone: "+1 403 605 0955",
    location: "Calgary, AB, Canada",
    photo:
      "https://customer-assets.emergentagent.com/job_a603944d-6191-46e4-bd9b-36fb9e092e4d/artifacts/gvuhwyn9_ChatGPT%20Image%20Dec%2030%2C%202025%2C%2003_23_12%20AM.png",
    links: {
      github: "https://github.com/Waltberry",
      portfolio: "https://waltberry.github.io/onyero-walter-ofuzim/",
      linkedin: "https://linkedin.com/in/onyero-walter-ofuzim",
      researchgate: "https://www.researchgate.net/profile/Onyero-Ofuzim?ev=hdr_xprf"
    },

    // punchier + more detailed — good for homepage hero
    summary:
      "Engineer with ~2+ years combined experience across data/analytics engineering, backend development, network analytics, and battery modeling & control. I build reproducible pipelines (ETL/ELT), APIs, dashboards, and physics-based Li-ion models (SPMe/DFN) with robust estimation (EKF/UKF) and system identification (ARX/BJ/PEM/NARX). Comfortable across Python/SQL/TypeScript/C#/.NET/C++, CI/CD, containers, and observability (Prometheus/Grafana). Proven track record shipping portfolio projects end-to-end, mentoring as a TA, and driving measurable operational improvements in telco performance analytics.",
    quickFacts: [
      "Canada work-eligible (PGWP) • Open to relocate across Canada",
      "M.Sc. Electrical & Software Engineering @ University of Calgary (GPA 3.85) • Defense expected Winter 2026",
      "Interests: Data platforms, reliability/observability, backend APIs, control & estimation, battery digital twins",
      "Strengths: ownership, clear documentation, testable code, practical engineering judgement"
    ],
    availability: "Immediate (MSc defense expected Winter 2026)",
    // optional badges displayed near header
    badges: [
      "Data Engineering",
      "Backend/API",
      "Battery Modeling",
      "System Identification",
      "Control & Estimation",
      "Network Analytics"
    ]
  },

  // ===================== EXPERIENCE =====================
  experience: [
    {
      id: 1,
      title: "Graduate Research Assistant / Graduate Teaching Assistant",
      company: "University of Calgary",
      department: "Alberta Innovates (DICE) / TC Energy",
      location: "Calgary, AB, Canada",
      dates: "Jan 2024 – Present",
      highlights: [
        "Built physics-based Li-ion models (SPMe/DFN) in Python (PyBaMM) and MATLAB; validated against lab cycling data and experiment logs.",
        "Designed SOC/SOE observers (EKF/UKF) and simulation harnesses for scenario testing (drive cycles, temperature/parameter sweeps).",
        "Developed parameter-estimation pipelines for kinetics/diffusion/transport via nonlinear least squares (NLLS) and PSO; ran sensitivity and Monte Carlo studies to quantify uncertainty.",
        "Implemented degradation models (SEI growth, loss of active material, R0 rise) and coupled capacity fade & resistance growth for life-cycle prediction.",
        "Built hybrid data+physics estimators for degradation trajectories using ARX/BJ/NARX and LSTM baselines; generated early-warning indicators and simple RUL-style forecasts.",
        "Authored requirements/acceptance criteria and V&V plans; created unit tests and regression checks; maintained traceability with Git and structured experiment notes.",
        "Performed trade studies on mesh density, solver tolerances, and observer gains to balance fidelity vs runtime for batch experiment campaigns.",
        "TA across multiple courses: Controls, Optimization, Software Engineering Practices for Data Management, Computer Organization/Architecture, Analog Circuits; mentored students on Git/testing/clean design."
      ],
      skills: [
        "Python",
        "PyBaMM",
        "MATLAB/Simulink",
        "System Identification",
        "EKF/UKF",
        "Optimization",
        "Unit Testing",
        "Technical Writing"
      ]
    },

    {
      id: 2,
      title: "Lead Technology Specialist (Analysis) / Network Support Analyst / Network Engineer Intern",
      company: "MTN",
      department: "NPQA (Core Performance) • NSMC rotation",
      location: "Lagos, Nigeria (HQ – Falomo Ikoyi / Ojota)",
      dates: "Aug 2022 – Nov 2023 (plus Nov 2019 – May 2020 internship)",
      highlights: [
        "Led/mentored analysts and owned KPI-driven network performance reporting; produced daily/weekly/monthly views for stakeholders.",
        "Used Python (pandas/automation scripts) + Excel/Power BI to analyze performance counters, incidents, and trends; improved incident response workflow and reduced downtime (~15% reported impact).",
        "Worked extensively with terminals (Linux/Bash) and SNMP configuration/monitoring; improved proactive fault detection and reporting speed.",
        "Supported troubleshooting across TX/IP MPLS, Data & Internet Services, and NSS unit; participated in escalation, RCA documentation, and joint problem resolution.",
        "Built operational dashboards and structured reporting templates; improved consistency, repeatability, and time-to-insight for recurring performance issues.",
        "Collaborated cross-functionally to integrate monitoring and reporting into operations routines; documented playbooks and handover notes."
      ],
      skills: [
        "Python",
        "Excel",
        "Power BI",
        "Linux/Bash",
        "SNMP",
        "Network Operations",
        "Incident/RCA Reporting",
        "Stakeholder Communication"
      ]
    },

    {
      id: 3,
      title: "Graduate Research Assistant",
      company: "University of Benin",
      department: "Department of Electrical/Electronic Engineering",
      location: "Benin, Nigeria",
      dates: "Jan 2020 – Aug 2021",
      highlights: [
        "Designed and prototyped a GSM-enabled battery monitoring & control device (PIC16F887 + A6 GSM/GPRS module) for remote telemetry and control.",
        "Developed embedded firmware + basic monitoring logic and documented system architecture and testing approach.",
        "Co-authored publication on IoT-enabled battery monitoring/control; contributed to design, implementation, and reporting."
      ],
      links: {
        publication:
          "https://www.researchgate.net/publication/369377501_Design_and_Construction_of_a_Remote_Battery_Monitoring_and_Control_Device_Using_the_Internet_of_Things_IoT"
      },
      skills: ["Embedded C", "Microcontrollers", "IoT", "GSM/GPRS", "Electronics", "Documentation"]
    },

    {
      id: 4,
      title: "Automation/Electrical Engineer Intern",
      company: "Nigerian Bottling Company (Coca-Cola HBC)",
      department: "Automation/Electrical Department",
      location: "Ikeja, Lagos, Nigeria",
      dates: "Aug 2019 – Nov 2019",
      highlights: [
        "Assisted with electrical maintenance and troubleshooting of plant equipment under supervision; performed inspections and basic QA checks.",
        "Created/maintained work orders and plant reports using Excel; improved maintenance documentation flow and consistency.",
        "Gained hands-on exposure to industrial electrical systems and plant operations."
      ],
      skills: ["Electrical Troubleshooting", "Excel Reporting", "Industrial Ops", "QA/Inspection"]
    },

    {
      id: 5,
      title: "Real Estate Assistant (Unlicensed)",
      company: "CIR REALTY",
      department: "Contract role",
      location: "Calgary, AB, Canada",
      dates: "May 2024 – Aug 2024",
      highlights: [
        "Supported administrative and coordination tasks for real estate operations (non-licensed assistant role).",
        "Improved tracking/communication flow by organizing documents, schedules, and follow-ups."
      ],
      skills: ["Coordination", "Communication", "Documentation"]
    }
  ],

  // ===================== EDUCATION =====================
  education: [
    {
      id: 1,
      degree: "M.Sc., Electrical & Software Engineering",
      school: "University of Calgary",
      location: "Calgary, AB, Canada",
      dates: "Jan 2024 – Present",
      gpa: "3.85",
      status: "Defense expected Winter 2026",
      focus: [
        "Advanced Control & Estimation",
        "System Identification",
        "Optimization",
        "AI/ML",
        "Battery Modelling (SPMe/DFN)"
      ],
      details: [
        "Research focus: physics-based Li-ion battery modeling (SPMe/DFN), estimation (EKF/UKF), system identification (ARX/BJ/PEM/NARX), and degradation-aware prediction.",
        "Built reproducible experiment pipelines and validation harnesses; emphasized V&V, traceability, and measurable model quality."
      ],
      coursework: [
        "Control Systems",
        "Applied Optimization",
        "Software Engineering Practices for Data Management",
        "Computer Organization/Architecture",
        "Analog Electronic Circuits"
      ]
    },
    {
      id: 2,
      degree: "M.Sc., Financial Engineering (Non-thesis)",
      school: "WorldQuant University (Online, Tuition-Free)",
      location: "Online",
      dates: "2025 – Present",
      focus: ["Quantitative Finance", "Statistical Modelling", "Python for Markets"],
      details: [
        "Ongoing graduate studies focused on modeling, financial data, and quantitative methods."
      ]
    },
    {
      id: 3,
      degree: "Non-degree Studies, Full-Stack Web Development",
      school: "University of Helsinki (Online, Free)",
      location: "Online",
      dates: "Oct 2025",
      focus: [
        "GraphQL",
        "TypeScript",
        "CI/CD",
        "Containers",
        "Relational DBs",
        "React Native"
      ],
      details: [
        "Hands-on modules and projects emphasizing modern web development, tooling, and deployment practices."
      ]
    },
    {
      id: 4,
      degree: "B.Eng., Electrical/Electronic Engineering",
      school: "University of Benin",
      location: "Benin, Nigeria",
      dates: "Completed 2021",
      focus: [
        "Electronics",
        "Power & Machines (foundation)",
        "Control (foundation)",
        "Embedded Systems (foundation)"
      ],
      details: [
        "Final-year work and early research exposure connected to embedded/IoT systems and energy monitoring."
      ]
    }
  ],

  // ===================== SKILLS =====================
  skills: {
    "Data Engineering & Platforms": [
      "SQL (CTEs, window functions, tuning)",
      "PostgreSQL",
      "MySQL",
      "SQLite",
      "Snowflake (familiar)",
      "BigQuery (familiar)",
      "PySpark / Spark",
      "Delta Lake / Parquet",
      "Databricks (CE + patterns)",
      "dbt (familiar)",
      "Airflow / Prefect (familiar)",
      "Kafka (basics)",
      "Data quality (Great Expectations / dbt tests)",
      "Lakehouse patterns (Bronze/Silver/Gold)",
      "Observability mindset (freshness, SLAs, metrics)"
    ],
    "Backend & Full-Stack": [
      "Python (FastAPI)",
      "Node.js (Express)",
      "C#/.NET (ASP.NET Core, EF Core)",
      "Java (Spring basics)",
      "REST APIs",
      "WebSockets",
      "Auth basics",
      "React + TypeScript",
      "Next.js (familiar)",
      "Swagger / OpenAPI",
      "ORMs (SQLAlchemy, EF Core)"
    ],
    "ML / Analytics": [
      "pandas / NumPy / SciPy",
      "scikit-learn",
      "XGBoost / LightGBM (familiar)",
      "TensorFlow",
      "PyTorch",
      "Time series (basics, Prophet familiarity)",
      "Feature engineering",
      "Model evaluation (metrics, CV basics)",
      "Power BI",
      "Excel (advanced)",
      "Streamlit",
      "Plotly/matplotlib"
    ],
    "Controls / Battery / Estimation": [
      "Classical & state-space control",
      "Observers (Kalman, EKF/UKF)",
      "System ID (ARX, Box-Jenkins, PEM, NARX)",
      "Optimization concepts (MPC familiarity)",
      "Battery models (SPMe/DFN via PyBaMM)",
      "MATLAB/Simulink",
      "Numerical methods (FD/FVM familiarity)"
    ],
    "DevOps / Tooling": [
      "Git/GitHub",
      "GitHub Actions",
      "Travis CI (familiar)",
      "Docker",
      "Kubernetes (basics)",
      "Helm (familiar)",
      "Prometheus/Grafana (familiar)",
      "Linux/Bash",
      "Make/CMake (familiar)",
      "Testing: pytest, unittest, xUnit (familiar), GoogleTest (familiar)"
    ],
    "Networking": [
      "SNMP monitoring",
      "TCP/UDP fundamentals",
      "Wireshark/tcpdump familiarity",
      "IP/MPLS exposure",
      "Network operations workflows (incidents, RCA, escalation)"
    ]
  },

  // ===================== FEATURED PROJECTS (homepage) =====================
  featuredProjects: [
    {
      id: 1,
      name: "Mobility Lakehouse (Polyglot, Local Docker Platform)",
      summary:
        "End-to-end local lakehouse platform: Kafka → Spark/Scala streaming → Delta Bronze/Silver/Gold, orchestration & DQ checks, metrics via Prometheus/Grafana, and a small TypeScript UI catalog.",
      stack: ["Kafka", "Spark/Scala", "Python/Airflow", "Delta Lake", "Docker", "Trino", "Prometheus", "Grafana", "TypeScript/React"],
      links: { repo: "https://github.com/Waltberry/mobility-lakehouse" },
      tags: ["Lakehouse", "Streaming", "DQ/Observability"]
    },
    {
      id: 2,
      name: "Kubernetes Cost Visibility Lab (OpenCost + Prometheus/Grafana + Kyverno)",
      summary:
        "Kind cluster cost-observability stack: Kyverno label policies, kube-prometheus-stack, OpenCost, and a FastAPI /cost-report proxy for allocation data.",
      stack: ["Kubernetes", "Helm", "Kyverno", "OpenCost", "Prometheus", "Grafana", "FastAPI"],
      links: {
        repo: "https://github.com/Waltberry/k8s-cost-lab",
        api: "https://github.com/Waltberry/cost-report-api"
      },
      tags: ["K8s", "Observability", "FinOps basics"]
    },
    {
      id: 3,
      name: "Olist Medallion Lakehouse (PySpark + Delta + Power BI export)",
      summary:
        "Bronze/Silver/Gold lakehouse pipeline on Olist e-commerce; Gold marts for SLA KPIs and business insights; Power BI-ready exports.",
      stack: ["PySpark", "Delta Lake", "Power BI"],
      links: { repo: "https://github.com/Waltberry/olist-medallion" },
      tags: ["ETL", "Lakehouse", "BI"]
    },
    {
      id: 4,
      name: "Municipal Service Requests Portal (React + ASP.NET Core + EF Core)",
      summary:
        "Full-stack CRUD portal with validation, pagination, relational DB, and testing patterns; clean structure for production-style workflows.",
      stack: ["React", "TypeScript", "C#/.NET", "ASP.NET Core", "EF Core", "SQL"],
      links: { repo: "https://github.com/Waltberry/municipal-service-portal" },
      tags: ["Full-stack", "API", "SQL"]
    },
    {
      id: 5,
      name: "Cafeteria Menu RAG Assistant (FastAPI + pgvector + Streamlit)",
      summary:
        "RAG assistant that answers questions about menus/allergens/nutrition; ingestion pipeline + embeddings + pgvector; Dockerized and configurable.",
      stack: ["Python", "FastAPI", "PostgreSQL", "pgvector", "Streamlit", "Docker", "RAG"],
      links: { repo: "https://github.com/Waltberry/Cafeteria-Menu-RAG-Assistant" },
      tags: ["RAG", "Vector DB", "Backend"]
    },
    {
      id: 6,
      name: "Flowpilot SCADA (Modbus TCP + Node-RED + InfluxDB + Grafana)",
      summary:
        "PLC/HMI/SCADA simulation for a tank control process using Modbus TCP; HMI via Node-RED; trending via InfluxDB+Grafana.",
      stack: ["Modbus TCP", "Node-RED", "InfluxDB", "Grafana", "Python", "OpenPLC (optional)"],
      links: { repo: "https://github.com/Waltberry/flowpilot-scada" },
      tags: ["SCADA", "Controls", "Telemetry"]
    },
    {
      id: 7,
      name: "Clinic Inbox Agent (FastAPI + Next.js)",
      summary:
        "AI-assisted triage dashboard: classify messages by urgency/category and propose actions; staff can confirm/override suggestions.",
      stack: ["FastAPI", "SQLite/PostgreSQL-ready", "Next.js", "Tailwind"],
      links: { repo: "https://github.com/Waltberry/clinic-inbox-agent" },
      tags: ["Agent-style UX", "Full-stack", "Product thinking"]
    },
    {
      id: 8,
      name: "Order Dispatch Simulator (FastAPI + Streamlit)",
      summary:
        "Simulates assigning delivery orders to drivers with multiple strategies (nearest/load-balanced/batched) and compares operational metrics.",
      stack: ["Python", "FastAPI", "Streamlit", "pytest"],
      links: { repo: "https://github.com/Waltberry/order-dispatch-simulator" },
      tags: ["Algorithms", "Ops metrics", "Simulation"]
    }
  ],

  // ===================== ALL PROJECTS (portfolio page) =====================
  // NOTE: This is intentionally “no hold back” — your portfolio can be long.
  projects: [
    // --- Data Engineering / Platforms ---
    {
      id: "p-mobility-lakehouse",
      category: "Data Engineering / Platform",
      name: "Mobility Lakehouse — Polyglot Local Platform",
      period: "2025",
      summary:
        "Dockerized end-to-end lakehouse platform demonstrating streaming, orchestration, data quality, metrics, and a small catalog UI — all locally.",
      highlights: [
        "Scala Spark Structured Streaming: Kafka → Delta Bronze, aggregations → Silver/Gold",
        "Python Airflow + Great Expectations: orchestration, data-quality checks, freshness SLAs",
        "Prometheus metrics + Grafana dashboards; optional webhooks for alerts",
        "Trino SQL marts + dbt-style modeling concepts; partitioning and performance awareness",
        "React/TypeScript mini data catalog for discovery and sample queries"
      ],
      stack: ["Docker Compose", "Kafka", "Spark/Scala", "Python", "Airflow", "Great Expectations", "Delta Lake", "Trino", "Prometheus", "Grafana", "React/TypeScript"],
      links: { repo: "https://github.com/Waltberry/mobility-lakehouse" }
    },
    {
      id: "p-oss-lakehouse",
      category: "Data Engineering / Platform",
      name: "OSS Lakehouse in Docker (Spark + Delta + MinIO + MLflow + Jupyter)",
      period: "2025",
      summary:
        "Minimal, reproducible lakehouse stack: Spark + Delta, MinIO (S3-compatible), MLflow server, and JupyterLab for local validation and experimentation.",
      highlights: [
        "Scala batch ingest → Delta Bronze on S3A (MinIO) with schema evolution patterns",
        "PySpark curation → Silver/Gold with lightweight data-quality checks",
        "MLflow-ready environment; demo artifacts stored in MinIO",
        "One-command bring-up via Docker Compose; good interview demo for platform thinking"
      ],
      stack: ["Spark", "Delta Lake", "MinIO", "MLflow", "Jupyter", "Docker"],
      links: { repo: "https://github.com/Waltberry/OSS-Lakehouse" }
    },
    {
      id: "p-olist",
      category: "Data Engineering",
      name: "Olist E-Commerce Medallion Pipeline",
      period: "2025",
      summary:
        "Bronze/Silver/Gold medallion lakehouse pipeline in PySpark + Delta Lake with BI export and SLA KPIs.",
      highlights: [
        "Ingested raw CSVs into curated Delta tables; built Gold marts for revenue and delivery SLA KPIs",
        "Engineered churn/RFM features and exported Parquet for analytics",
        "Designed Power BI reporting layer (late delivery rate by state and month)"
      ],
      stack: ["PySpark", "Delta Lake", "Power BI", "Parquet"],
      links: { repo: "https://github.com/Waltberry/olist-medallion" }
    },
    {
      id: "p-databricks-mini",
      category: "Data Engineering",
      name: "Databricks Mini-Lakehouse (Scala + Python) + Local Docker Validation Tools",
      period: "Nov 2025",
      summary:
        "Scala structured streaming → Delta Bronze on Databricks CE; Python Silver/Gold curation + data contracts; MLflow logging; local Docker tooling for validation.",
      highlights: [
        "Streaming ingest into Delta Bronze; medallion curation to Silver/Gold",
        "Lightweight data-quality checks and BI-ready export",
        "MLflow experiment logging patterns",
        "Docker tools to validate transforms locally"
      ],
      stack: ["Databricks", "Scala", "Python", "Delta Lake", "MLflow", "Docker"],
      links: { repo: "https://github.com/Waltberry/Databricks_-free-_Lakehouse" }
    },
    {
      id: "p-synapse-local-sql",
      category: "Data Engineering",
      name: "Synapse-Style SQL on Files (DuckDB & Spark) — Dockerized",
      period: "2025",
      summary:
        "Practice querying CSV/JSON/Parquet directly in a lake-style folder layout using DuckDB SQL and Spark SQL, locally.",
      highlights: [
        "DuckDB runner + Spark SQL runner share the same data folder",
        "Pipelines fetch sample data into lake folders; CETAS-style transforms",
        "Partitioned Parquet outputs; partition pruning mindset; views/tables over folders"
      ],
      stack: ["DuckDB", "Spark SQL", "Python", "Docker", "Parquet"],
      links: { repo: "https://github.com/Waltberry/Synapse-local-SQL" }
    },
    {
      id: "p-supplier-quality-powerbi",
      category: "Analytics / BI",
      name: "Supplier Quality & Capability Dashboard (Power BI)",
      period: "2025",
      summary:
        "Single-page ops dashboard integrating supplier incoming defects, process capability (Cp/Cpk), and NCR aging for weekly action.",
      highlights: [
        "Ranked supplier defect rate with volume vs defects breakdown",
        "Cp/Cpk by process & characteristic with trend sparkline for drift",
        "NCR backlog health: open count, median days open, aging buckets",
        "Actionable targets and weekly triage concept to reduce backlog"
      ],
      stack: ["Power BI", "Excel", "KPI design"],
      links: { repo: "https://github.com/Waltberry/Supplier-Quality-Capability-Dashboard-Power-BI-.git" }
    },

    // --- Kubernetes / DevOps / Observability ---
    {
      id: "p-k8s-cost-lab",
      category: "Kubernetes / Observability",
      name: "Kubernetes Cost Visibility Lab",
      period: "2025",
      summary:
        "Kind cluster with Kyverno label policies, OpenCost, kube-prometheus-stack, and a FastAPI /cost-report proxy for allocation data.",
      highlights: [
        "Policy enforcement for owner/team/cost-center labels with Kyverno",
        "Prometheus + Grafana dashboards; OpenCost allocation visibility",
        "FastAPI proxy service to expose cost allocation in a friendly endpoint"
      ],
      stack: ["Kubernetes", "Helm", "Kyverno", "OpenCost", "Prometheus", "Grafana", "FastAPI"],
      links: {
        repo: "https://github.com/Waltberry/k8s-cost-lab",
        api: "https://github.com/Waltberry/cost-report-api"
      }
    },
    {
      id: "p-kubeops-operator",
      category: "Kubernetes / Platform Engineering",
      name: "kubeops-fastapi-operator (KOPF)",
      period: "2025",
      summary:
        "Kubernetes Operator managing FastAPI + Postgres with CRDs, reconciliation logic, rollouts, tests, and runbooks.",
      highlights: [
        "Custom resources define app + DB desired state",
        "Reconciliation loops handle updates and drift",
        "Runbooks and operational patterns for learning real operator workflows"
      ],
      stack: ["Python", "Kubernetes", "KOPF", "PostgreSQL"],
      links: { repo: "https://github.com/Waltberry/kubeops-fastapi-operator" }
    },

    // --- Backend / Full Stack ---
    {
      id: "p-municipal-portal",
      category: "Full Stack / Backend",
      name: "Municipal Service Requests Portal",
      period: "2025",
      summary:
        "React UI + ASP.NET Core API + EF Core with PostgreSQL/SQL Server; validation, pagination, and production-style structure.",
      highlights: [
        "Separation of concerns: API, persistence, and UI layers",
        "Pagination and validation patterns; REST-first design",
        "Testing mindset and clean repo structure"
      ],
      stack: ["React", "TypeScript", "C#/.NET", "ASP.NET Core", "EF Core", "PostgreSQL/SQL Server"],
      links: { repo: "https://github.com/Waltberry/municipal-service-portal" }
    },
    {
      id: "p-banking-system",
      category: "Backend / Architecture",
      name: "Banking System (ASP.NET Core + EF Core + Clean Architecture)",
      period: "2025",
      summary:
        "Modular banking system built as a learning + portfolio project focusing on backend design, API development, persistence, and testing.",
      highlights: [
        "Clean Architecture approach (separation between API, domain, infra)",
        "Swagger/OpenAPI for API documentation; EF Core migrations for schema evolution",
        "Testing with xUnit patterns (where applicable)"
      ],
      stack: ["C#/.NET", "ASP.NET Core", "EF Core", "SQLite", "Swagger", "xUnit"],
      links: { repo: "https://github.com/Waltberry/BankingSystem" }
    },
    {
      id: "p-order-notifications",
      category: "Full Stack / Realtime",
      name: "Order Notifications Demo (FastAPI WebSockets + React TS)",
      period: "2025",
      summary:
        "Real-time order status updates: backend broadcasts events over WebSockets; frontend updates instantly without refresh.",
      highlights: [
        "WebSocket channel with initial snapshot + incremental events",
        "REST endpoints for create/update; simple in-memory store for demo clarity",
        "Clean split between backend/ and frontend/ folders"
      ],
      stack: ["FastAPI", "WebSockets", "React", "TypeScript", "Vite"],
      links: { repo: "https://github.com/Waltberry/order-notifications-demo" }
    },
    {
      id: "p-clinic-inbox-agent",
      category: "Full Stack / Product Demo",
      name: "Clinic Inbox Agent",
      period: "2025",
      summary:
        "AI-assisted triage dashboard: classify incoming messages and propose suggested actions; staff can override.",
      highlights: [
        "Urgency/category classification concept with explainable UI",
        "Backend designed SQLite-first but Postgres-ready patterns",
        "Clear product-style workflow: triage → review → action"
      ],
      stack: ["FastAPI", "SQLite", "Next.js", "Tailwind"],
      links: { repo: "https://github.com/Waltberry/clinic-inbox-agent" }
    },
    {
      id: "p-tiny-trip-planner",
      category: "Full Stack / Frontend",
      name: "Tiny Trip Planner",
      period: "2025",
      summary:
        "Small full-stack demo for building day-by-day itineraries with map view and list management.",
      highlights: [
        "React + TypeScript + Leaflet map visualization",
        "Node/Express backend; static demo data for simplicity",
        "Add/reorder/remove attractions by day"
      ],
      stack: ["React", "TypeScript", "Vite", "Leaflet", "Node.js", "Express"],
      links: { repo: "https://github.com/Waltberry/tiny-trip-planner" }
    },
    {
      id: "p-staff-management-api",
      category: "Backend / Java",
      name: "Staff Management API (Spring Boot)",
      period: "Jul 2024 – Sep 2024",
      summary:
        "RESTful service built in Java Spring Boot providing endpoints for employee management and JSON responses.",
      highlights: ["Basic REST patterns, controller/service structure, and clean repo organization."],
      stack: ["Java", "Spring Boot", "REST"],
      links: { repo: "https://github.com/Waltberry/StaffManagementAPI" }
    },

    // --- Testing / QA / Reliability ---
    {
      id: "p-api-smoke-reqres",
      category: "Testing / QA",
      name: "API Smoke Tests — reqres.in (pytest)",
      period: "2025",
      summary:
        "CI-friendly API smoke suite for a public demo API focusing on health checks, happy paths, negative cases, and lightweight schema checks.",
      highlights: [
        "Resilient test patterns: retries and safe handling for transient failures",
        "Report-friendly outputs (JUnit/HTML patterns depending on repo setup)",
        "Good example of pragmatic QA engineering and automation hygiene"
      ],
      stack: ["Python", "pytest", "requests", "CI"],
      links: { repo: "https://github.com/Waltberry/api-smoke-reqres" }
    },
    {
      id: "p-ui-e2e-saucedemo",
      category: "Testing / QA",
      name: "UI E2E — SauceDemo (Behave + Selenium)",
      period: "2025",
      summary:
        "End-to-end purchase flow automation using Gherkin + Page Object Model and CI-friendly Selenium setup.",
      highlights: [
        "Flow: login → add item → cart → checkout → finish",
        "Behave (Gherkin) for readable scenarios; POM for maintainability",
        "GitHub Actions-friendly approach for Chrome runs"
      ],
      stack: ["Python", "Selenium", "Behave", "GitHub Actions"],
      links: { repo: "https://github.com/Waltberry/ui-e2e-saucedemo-behave" }
    },

    // --- Systems / Networking ---
    {
      id: "p-cisco-echo-server",
      category: "Systems / Networking",
      name: "Cisco-Style Multi-Client TCP Echo Server (poll-based I/O)",
      period: "2025",
      summary:
        "Networking project demonstrating core systems building blocks: TCP sockets, multi-client I/O, partial reads/writes, and line protocols.",
      highlights: [
        "BSD sockets; `poll()` I/O; multi-client handling",
        "Line-based protocol framing; careful read/write correctness",
        "Good demo for reliability mindset in systems code"
      ],
      stack: ["C++", "BSD Sockets", "Linux"],
      links: { repo: "https://github.com/Waltberry/cisco-echo-server" }
    },
    {
      id: "p-snmp-health-dashboard",
      category: "Networking / Observability",
      name: "SNMP Network Health Dashboard (FastAPI + SQLite)",
      period: "2025",
      summary:
        "SNMP polling + storage + API + minimal web dashboard; exposes latest KPI samples and summary health views.",
      highlights: [
        "pysnmp polling (or stub/simulator mode) into SQLite via SQLAlchemy",
        "APIs: /interfaces/latest, /interfaces/summary + simple HTML dashboard",
        "Separation between collector, client, API, and DB models"
      ],
      stack: ["Python", "FastAPI", "SQLite", "SQLAlchemy", "SNMP"],
      links: { repo: "https://github.com/Waltberry/network_snmp_health_dashboard" }
    },
    {
      id: "p-hp-systems-bench",
      category: "Systems / Performance",
      name: "High-Performance Systems & Algorithms Bench",
      period: "2025",
      summary:
        "Benchmarking and experimentation suite for performance-critical systems programming and numerical algorithms.",
      highlights: [
        "Modern C++ simulation kernel + Python experiment runner for repeatability",
        "Correctness checks and performance analysis on Linux/Windows"
      ],
      stack: ["C++", "Python", "Benchmarking"],
      links: { repo: "https://github.com/Waltberry/hp-systems-algorithms-bench" }
    },

    // --- Controls / Battery / ML Research Demos ---
    {
      id: "p-kalman-demo",
      category: "Controls / Estimation",
      name: "Kalman Filter — 1D Position Tracker (Interactive Streamlit Demo)",
      period: "Nov 2025",
      summary:
        "Interactive linear Kalman Filter demo for a 1D constant-velocity model; tune noise parameters and visualize behavior in real time.",
      highlights: [
        "Shows truth vs noisy measurement vs filter estimate",
        "Live tuning of process/measurement noise and exportable results"
      ],
      stack: ["Python", "Streamlit", "Kalman Filter"],
      links: { repo: "https://github.com/Waltberry/kalman-filter-demo" }
    },
    {
      id: "p-pem-narx-paper",
      category: "Research / ML",
      name: "PEM Electrolyzer Battery Data Prediction Using NARX (Paper)",
      period: "2024–2025",
      summary:
        "Study on NARX neural networks for time-series prediction of battery/electrolyzer variables using historical outputs and exogenous inputs.",
      highlights: [
        "Forecasting voltage V from current A and history using NARX structures",
        "Benchmarked feedforward vs LSTM-based NARX ideas for predictive maintenance signals"
      ],
      stack: ["Python", "NARX", "LSTM", "Time-series ML"],
      links: {
        paper:
          "https://www.researchgate.net/publication/386466076_Proton_Exchange_Membrane_Electrolyzer_Battery_Data_Prediction_Using_NARX_Nonlinear_AutoRegressive_with_Exogenous_Inputs_Neural_Network_Model"
      }
    },
    {
      id: "p-iot-battery-paper",
      category: "Research / IoT",
      name: "Design & Construction of Remote Battery Monitoring/Control Device Using IoT (Paper)",
      period: "2021",
      summary:
        "IoT battery monitoring/control device using PIC microcontroller and GSM/GPRS module for remote telemetry/control.",
      highlights: [
        "Embedded design + GSM connectivity concept for remote monitoring",
        "Documentation and validation approach aligned with academic reporting"
      ],
      stack: ["Embedded C", "PIC MCU", "GSM/GPRS", "IoT"],
      links: {
        paper:
          "https://www.researchgate.net/publication/369377501_Design_and_Construction_of_a_Remote_Battery_Monitoring_and_Control_Device_Using_the_Internet_of_Things_IoT"
      }
    },

    // --- Product / ML Apps ---
    {
      id: "p-recommender-system",
      category: "ML / Product Demo",
      name: "E-Commerce Recommender System (Streamlit)",
      period: "Jun 2025",
      summary:
        "Recommendation engine demo using popularity, similarity, and hybrid/cart-aware approaches; designed to simulate batch + near-real-time flows.",
      highlights: [
        "Modular pipeline structure appropriate for scalable architectures",
        "Streamlit UI for interactive testing and demonstration"
      ],
      stack: ["Python", "Streamlit", "Recommenders", "Data pipelines"],
      links: { repo: "https://github.com/Waltberry/recommender-system" }
    },
    {
      id: "p-llm-pilot-playbook",
      category: "Product / AI (Offline Demo)",
      name: "LLM Pilot Playbook Dashboard",
      period: "2025",
      summary:
        "Offline dashboard to structure LLM pilot conversations (use cases, model strategies, latency/cost, evaluation metrics) without calling paid APIs.",
      highlights: [
        "Helps non-technical stakeholders reason about pilots and tradeoffs",
        "Templates for RAG/summarization/classification discussions"
      ],
      stack: ["Web app", "Configs", "Product thinking"],
      links: { repo: "https://github.com/Waltberry/llm-pilot-playbook-dashboard" }
    },
    {
      id: "p-ai-sales-enablement",
      category: "Product / AI (Offline Demo)",
      name: "AI for Sales Enablement — Offline Demo",
      period: "2025",
      summary:
        "Rule-based demo that ingests CSV opportunities to produce pipeline KPIs, simple risk scoring, next-step recommendations, and draft follow-up emails.",
      highlights: [
        "Deterministic and local (LLM-ready later via RAG/summarization/classification)",
        "Good example of turning data into actionable operational workflow"
      ],
      stack: ["Python", "CSV", "Rules/Scoring", "Dashboard mindset"],
      links: { repo: "https://github.com/Waltberry/ai-sales-enablement-demo" }
    },

    // --- Mobile ---
    {
      id: "p-cash-advance-app",
      category: "Mobile",
      name: "CashAdvanceApp (React Native + TypeScript)",
      period: "2025",
      summary:
        "React Native demo simulating cash advance requests and history; includes testing setup and E2E scaffolding.",
      highlights: [
        "React Navigation + context-based state management",
        "Testing with Jest + React Native Testing Library; Detox E2E scaffold"
      ],
      stack: ["React Native", "TypeScript", "Jest", "Detox"],
      links: { repo: "https://github.com/Waltberry/CashAdvanceApp" }
    },

    // --- Misc / Older but valid portfolio items ---
    {
      id: "p-arduino-temp-warning",
      category: "Embedded / IoT",
      name: "Arduino Temperature Warning System (IoT)",
      period: "Jun 2024",
      summary:
        "IoT-style temperature monitor using NTC thermistor with visual LED alerts.",
      highlights: ["Simple embedded sensing + alert logic; clear hardware-to-software integration."],
      stack: ["Arduino", "Sensors", "Embedded"],
      links: { repo: "https://github.com/Waltberry/Arduino-Temperature-Warning-System-IoT-" }
    },
    {
      id: "p-stock-monitor",
      category: "Analytics / App",
      name: "Stock Monitor",
      period: "Jun 2024",
      summary:
        "Application to monitor and analyze stock trends; focuses on data display and basic analysis workflows.",
      highlights: ["Demonstrates interest in finance + applied analytics tooling."],
      stack: ["Python", "Data Analysis"],
      links: { repo: "https://github.com/Waltberry/StockMonitor" }
    },

    // --- DataCamp / portfolio-style analysis repos (selected highlights) ---
    {
      id: "p-telecom-churn",
      category: "ML / Analytics",
      name: "Customer Churn Prediction (Telecom Case Study)",
      period: "Sep 2023",
      summary:
        "Churn modeling case study; demonstrates ML pipeline basics and evaluation thinking.",
      stack: ["Python", "ML"],
      links: { repo: "https://github.com/Waltberry/Customer-Churn-Prediction-in-a-Telecom-Company" }
    },
    {
      id: "p-donor-selection",
      category: "ML / Analytics",
      name: "Data-Driven Insights for Donor Selection",
      period: "Sep 2023",
      summary:
        "ML insights project to support fundraising campaign targeting and selection decisions.",
      stack: ["Python", "ML", "Analytics"],
      links: { repo: "https://github.com/Waltberry/Data-Driven_Insights_for_Donor_Selection" }
    }
  ],

  // ===================== PUBLICATIONS / RESEARCH LINKS =====================
  publications: [
    {
      id: "pub-narx-pem",
      title:
        "Proton Exchange Membrane Electrolyzer Battery Data Prediction Using NARX (Nonlinear AutoRegressive with Exogenous Inputs) Neural Network Model",
      venue: "ResearchGate",
      year: "2024/2025",
      authors: "Desiree Leal, Onyero Walter Ofuzim",
      link:
        "https://www.researchgate.net/publication/386466076_Proton_Exchange_Membrane_Electrolyzer_Battery_Data_Prediction_Using_NARX_Nonlinear_AutoRegressive_with_Exogenous_Inputs_Neural_Network_Model"
    },
    {
      id: "pub-iot-battery",
      title:
        "Design and Construction of a Remote Battery Monitoring and Control Device Using the Internet of Things (IoT)",
      venue: "ResearchGate",
      year: "2021",
      authors: "Onyero Walter Ofuzim (co-author)",
      link:
        "https://www.researchgate.net/publication/369377501_Design_and_Construction_of_a_Remote_Battery_Monitoring_and_Control_Device_Using_the_Internet_of_Things_IoT"
    },
    {
      id: "pub-mecanum-robot",
      title: "Kinematic Analysis of Omnidirectional Mecanum Wheeled Robot",
      venue: "ResearchGate",
      year: "2022/2023",
      authors: "Co-author",
      link:
        "https://www.researchgate.net/publication/367412380_Kinematic_Analysis_of_Omnidirectional_Mecanum_Wheeled_Robot"
    }
  ],

  // ===================== OPEN SOURCE / COMMUNITY =====================
  openSource: [
    {
      id: "oss-meshery",
      project: "Meshery (Layer5)",
      role: "Contributor",
      dates: "Dec 2025 – Present",
      summary:
        "Engaging with Meshery community: onboarding tasks, issue triage, bug reproduction, small fixes, tests, and docs improvements.",
      highlights: [
        "Reviewed contributing guides; set up local dev + lint/test workflow",
        "Scoped starter issues across Meshery Server/Operator (Go) and UI (React/Next/GraphQL)",
        "Focus areas: newcomer onboarding, documentation improvements, and small bug fixes"
      ],
      links: {
        org: "https://layer5.io/",
        project: "https://github.com/meshery/meshery"
      }
    }
  ],

  // ===================== JOB SIMULATIONS (Forage, etc.) =====================
  jobSimulations: [
    {
      id: "js-ge-2022",
      provider: "Forage",
      program: "GE Engineering Virtual Experience Program",
      date: "Aug 2022",
      highlights: ["Completed practical engineering tasks across GE business areas (simulation-based)."]
    },
    {
      id: "js-jpm-se-2024",
      provider: "Forage",
      program: "J.P. Morgan Software Engineering Virtual Experience",
      date: "May 2024",
      highlights: [
        "Set up local dev environment and resolved issues to ensure correct web application output.",
        "Used Perspective library to create live graphs for data visualization."
      ]
    },
    {
      id: "js-blackbird-2024",
      provider: "Forage",
      program: "Blackbird Australia Software Engineering Virtual Experience",
      date: "Jun 2024",
      highlights: [
        "Startup-style simulation: feature proposals, sprint retrospectives, and infra thinking (A/B testing context)."
      ]
    },
    {
      id: "js-jpm-agile-2024",
      provider: "Forage",
      program: "JPMorgan Chase & Co. Agile Job Simulation",
      date: "Jun 2024",
      highlights: [
        "Drafted/prioritized user stories, estimated effort, and managed flow using Trello.",
        "Led standups and participated in sprint reviews/retrospectives."
      ]
    },
    {
      id: "js-jpm-lite-2024",
      provider: "Forage",
      program: "JPMorgan Chase & Co. Software Engineering Lite",
      date: "Jun 2024",
      highlights: [
        "Completed tasks related to ticket resolution; implemented core class functionality and test suite."
      ]
    },
    {
      id: "js-citi-icg-2024",
      provider: "Forage",
      program: "Citi ICG Technology Software Development",
      date: "Jun 2024",
      highlights: [
        "Created UML state diagram for loan management process.",
        "Researched ML systems for credit risk; built a real-time risk visualization tool concept in Java."
      ]
    },
    {
      id: "js-hpe-2024",
      provider: "Forage",
      program: "Hewlett Packard Enterprise Software Engineering Job Simulation",
      date: "Jul 2024",
      highlights: [
        "Drafted proposal for a REST service; built Java Spring server for HTTP + JSON upload; wrote unit tests."
      ]
    },
    {
      id: "js-lyft-2024",
      provider: "Forage",
      program: "Lyft Back-End Engineering Job Simulation",
      date: "Jul 2024",
      highlights: [
        "Refactored an unfinished project; created UML class diagram; added functionality with test-driven development."
      ]
    },
    {
      id: "js-ford-ev-2024",
      provider: "Forage",
      program: "Ford EV Engineering Job Simulations",
      date: "Jul 2024",
      highlights: [
        "Battery tech and PID tuning tasks; analyzed data in Excel and reviewed Python PID tuning code.",
        "Cost/benefit analysis for EV batteries and LiDAR sensors; compared sensor types and presented findings."
      ]
    },
    {
      id: "js-siemens-ops-2024",
      provider: "Forage",
      program: "Siemens Mobility Operations Industrial Engineer Job Simulation",
      date: "Aug 2024",
      highlights: [
        "Identified bottleneck and proposed layout changes to improve production flow; created justification presentation."
      ]
    },
    {
      id: "js-siemens-pm-2024",
      provider: "Forage",
      program: "Siemens Mobility Project Manager Job Simulation",
      date: "Aug 2024",
      highlights: [
        "Developed strategic KPIs and dashboards; handled stakeholder feedback and construction challenges."
      ]
    },
    {
      id: "js-jpm-qr-2024",
      provider: "Forage",
      program: "JPMorgan Chase & Co. Quantitative Research Virtual Experience",
      date: "Sep 2024",
      highlights: [
        "Estimated probability of default; used dynamic programming to bucket FICO scores for default prediction."
      ]
    }
  ],

  // ===================== CERTIFICATIONS (expanded) =====================
  certifications: {
    "Data & Cloud": [
      "Docker & Kubernetes Masterclass (Beginner → Advanced) — Packt (Sep 2025)",
      "DeepLearning.AI / AWS Data Engineering Professional Certificate — DeepLearning.AI (Sep 2025)",
      "Snowflake Data Engineering Professional Certificate — Snowflake (Sep 2025)",
      "Mastering Azure Databricks for Data Engineers Specialization — Packt (Jul 2025)",
      "Data Engineer in Python (Career Track) — DataCamp (Nov 2024)",
      "Data Analyst in SQL (Career Track) — DataCamp (May 2023)",
      "Introduction to Power BI — DataCamp (Feb 2023)",
      "Big Data Fundamentals with PySpark — DataCamp (Sep 2022)",
      "Introduction to PySpark — DataCamp (Aug 2022)",
      "Introduction to Airflow in Python — DataCamp (Aug 2022)",
      "Introduction to AWS Boto in Python — DataCamp (Aug 2022)",
      "AWS Cloud Concepts — DataCamp (Aug 2022)",
      "Database Design — DataCamp (Aug 2022)",
      "Intermediate SQL Server — DataCamp (Aug 2022)",
      "Intro to Relational Databases — DataCamp (Aug 2022)",
      "Intro to SQL Server — DataCamp (Aug 2022)",
      "PostgreSQL Summary Stats & Window Functions — DataCamp (Jun 2022)",
      "Intermediate SQL — DataCamp (Jun 2022)",
      "SQL Fundamentals (Skill Track) — DataCamp (Jun 2022)",
      "Joining Data in SQL — DataCamp (May 2022)"
    ],
    "Machine Learning & AI": [
      "Machine Learning — Stanford Online (Dec 2021)",
      "Deep Learning with PyTorch: GAN — Coursera (Sep 2022)",
      "Fine-Tune BERT for Text Classification (TensorFlow) — Coursera (Sep 2022)",
      "Aerial Image Segmentation with PyTorch — Coursera (Sep 2022)",
      "Linear Regression with NumPy and Python — Coursera (Sep 2022)",
      "Object Localization with TensorFlow — Coursera (Sep 2022)",
      "Tesla Stock Price Prediction (Prophet) — Coursera (Sep 2022)",
      "Tweet Emotion Recognition with TensorFlow — Coursera (Sep 2022)",
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
      "Machine Learning for Everyone — DataCamp (May 2022)"
    ],
    "Software / Programming": [
      "Programming with JavaScript — Meta (Oct 2023)",
      "Programming in Python — Meta (Aug 2023)",
      "Databases for Back-End Development — Meta (Sep 2023)",
      "Database Structures & Management with MySQL — Meta (Aug 2023)",
      "Advanced MySQL Topics — Meta (Aug 2023)",
      "Programming Fundamentals in Kotlin — Meta (Jun 2023)",
      "Open Source Software Development, Linux and Git Specialization — Linux Foundation (Jul 2023)",
      "Version Control — Meta (Jun 2023)",
      "Create an Android App with Kotlin — Coursera (Jul 2023)",
      "Developing Python Packages — DataCamp (Jun 2022)",
      "Object-Oriented Programming in Python — DataCamp (Jun 2022)",
      "Python Programmer Track (Career Track) — DataCamp (Jun 2022)",
      "Python Programming (Skill Track) — DataCamp (Aug 2022)",
      "Python Data Science Toolbox (Parts 1 & 2) — DataCamp (Apr 2022)",
      "Python Fundamentals Track (Skill Track) — DataCamp (Apr 2022)"
    ],
    "Robotics & Autonomous Systems": [
      "Cooperation in Autonomous Vehicles — IEEE (Oct 2022)",
      "Developing & Validating Control Systems for Connected & Automated Vehicles — IEEE (Oct 2022)",
      "Robotics Specialization (Aerial, Motion Planning, Legged, Perception) — University of Pennsylvania (Oct 2022–Mar 2023)",
      "Self-Driving Car Fundamentals: Featuring Apollo — Udacity (Feb 2022)",
      "Introduction to Self-Driving Cars — University of Toronto (Jan 2022)",
      "Modern Robotics, Course 1: Foundations of Robot Motion — Northwestern University (Dec 2021)"
    ],
    "Analytics / BI & Excel": [
      "Excel Basics for Data Analysis — IBM (Jul 2022)",
      "Excel Essentials for Data Analytics (IBM Badge) — IBM (Jul 2022)"
    ],
    "IBM / Data Foundations": [
      "Python for Data Science and AI (IBM Badge) — IBM (Aug 2022)",
      "Python for Data Science, AI & Development — IBM (Aug 2022)",
      "Introduction to Data Analytics — IBM (Apr 2022)",
      "Data Analytics Essentials (IBM Badge) — IBM (Apr 2022)"
    ],
    "Additional Stats / Data (Selected)": [
      "Introduction to Statistics (Python & R) — DataCamp (Jun 2022)",
      "Introduction to NumPy — DataCamp (Jun 2022)",
      "Introduction to Regression with statsmodels in Python — DataCamp (Jun 2022)",
      "Introduction to Regression in R — DataCamp (Jun 2022)",
      "Intermediate Regression in R — DataCamp (Jun 2022)",
      "Data Types for Data Science in Python — DataCamp (Jun 2022)",
      "Functions for Manipulating Data in PostgreSQL — DataCamp (Jun 2022)",
      "Sampling in Python — DataCamp (Jun 2022)",
      "Software Engineering for Data Scientists in Python — DataCamp (Jun 2022)",
      "Unit Testing for Data Science in Python — DataCamp (Jun 2022)",
      "Cluster Analysis in R — DataCamp (Jun 2022)",
      "Data Scientist with R (Career Track) — DataCamp (Jun 2022)",
      "Exploratory Data Analysis (Python & R) — DataCamp (May 2022)",
      "Cleaning Data in Python & R — DataCamp (May 2022)"
    ],
    "Languages": ["Beginner German (CEFR A1) — Linguaphone (Dec 2013)"]
  },

  // ===================== OPTIONAL: CERT ROADMAP (nice for portfolio depth) =====================
  certificationRoadmap: [
    {
      track: "Data Engineering & Cloud",
      items: [
        "AWS Certified Data Analytics – Specialty (planned)",
        "Microsoft DP-203: Data Engineering on Azure (planned)",
        "Google Cloud Professional Data Engineer (planned)"
      ]
    },
    {
      track: "Machine Learning / AI",
      items: [
        "AWS Certified Machine Learning – Specialty (planned)",
        "TensorFlow Developer Certificate (planned)",
        "Generative AI Specialization (planned)"
      ]
    },
    {
      track: "Controls / Robotics",
      items: [
        "ROS Developer Certification (planned)",
        "Model Predictive Control short courses (planned)"
      ]
    },
    {
      track: "Professional / Standards",
      items: ["ITIL 4 Foundation (planned)", "Scrum Master (PSM/CSM) or PMP (planned)"]
    }
  ]
};
