import {
  ArrowUpRight,
  CheckCircle2,
  Code2,
  Github,
  Layers3,
  Linkedin,
  Mail,
  MapPin,
  Sparkles,
} from "lucide-react";

const profile = {
  name: "Guillermo V C. Sango",
  role: "Software Developer / Bridge Engineer",
  tagline:
    "I develop web, enterprise, automation, and business systems across C#, Java, Python, JavaScript, TypeScript, React, Angular, .NET, and cloud-backed stacks.",
  location: "Cavite, Philippines / Remote",
  email: "guill.sango@gmail.com",
  github: "",
  linkedin: "",
};

const projects = [
  {
    title: "Boiler Heat Calculation",
    type: "Engineering Software",
    summary:
      "Created a workflow for boiler drawings by using calculated Excel data and inserting it into AutoCAD-focused software.",
    impact:
      "Worked as developer, tester, documenter, and presenter using C# and ASP.NET Core.",
    stack: ["C#", "ASP.NET Core", "Excel", "AutoCAD"],
  },
  {
    title: "Manhour Business Intelligence",
    type: "BI Web App",
    summary:
      "Developed a web page for processing work logs, reports, and project activity into a business intelligence workflow.",
    impact: "Contributed frontend, backend, testing, and implementation work.",
    stack: ["Vue.js", "TypeScript", "Python", "PostgreSQL"],
  },
  {
    title: "UAS Air Traffic Management",
    type: "Backend / Cloud System",
    summary:
      "Contributed to the design and backend development of an Unmanned Aerial System for air traffic management in Japan.",
    impact:
      "Implemented core business logic, integrated cloud-based services, and coordinated with Japanese engineers and stakeholders across basic and detailed design work.",
    stack: [
      "Java",
      "Spring Boot",
      "CockroachDB",
      "AWS EC2",
      "Docker",
      "Gradle",
    ],
  },
  {
    title: "AWAG Backend Development",
    type: "Backend / API Development",
    summary:
      "Developed and maintained backend services and REST APIs for the AWAG system in Japan using Java and Spring Boot.",
    impact:
      "Implemented core business logic, database integration, API endpoints, unit tests, integration tests, code reviews, and troubleshooting across Agile and documentation workflows.",
    stack: [
      "Java",
      "Spring Boot",
      "PostgreSQL",
      "JUnit",
      "Mockito",
      "Docker",
      "Gradle",
    ],
  },
  {
    title: "Odoo ERP Development & Customization",
    type: "Full Stack / ERP Development",
    summary:
      "Developed and customized Odoo modules and business workflows to support enterprise business operations.",
    impact:
      "Worked on custom models, views, business logic, API integrations, CRM, Sales, Inventory, Project Management, HR, workflow automation, testing, deployment, user support, and Odoo 18 functional certification.",
    stack: [
      "Odoo 18",
      "Python",
      "PostgreSQL",
      "XML",
      "JavaScript",
      "REST API",
      "Docker",
    ],
  },
  {
    title: "Selenium Automation Tester",
    type: "Automation",
    summary:
      "Automated test scripts to reduce manual testing effort and improve repeatability across target workflows.",
    impact:
      "Owned the main developer and tester responsibilities using Python automation.",
    stack: ["Python", "Selenium"],
  },
  {
    title: "Approval Document Routing",
    type: "Workflow Automation",
    summary:
      "Automated approval routing for documents, requests, and forms to reduce paper usage and remove time-consuming manual steps.",
    impact:
      "Delivered development, testing, and documentation for a cloud-backed approval process.",
    stack: ["Power Automate", "Microsoft Forms", "Azure", "Box"],
  },
  {
    title: "Salesforce Forms",
    type: "Business Tools",
    summary:
      "Created Salesforce forms to support internal business data collection and process needs.",
    impact: "Handled development, testing, and documentation responsibilities.",
    stack: ["Salesforce"],
  },
  {
    title: "COBOL Conversion to Java",
    type: "Modernization",
    summary:
      "Converted COBOL-based functionality into Java for a modernization project with database and cloud integration needs.",
    impact: "Ongoing developer work using Java, PostgreSQL, and AWS environments.",
    stack: ["Java", "PostgreSQL", "AWS"],
  },
  {
    title: "RFID Tag Parking Lot",
    type: "Freelance System",
    summary:
      "Developed an RFID tagging system for efficient vehicle entry and parking management.",
    impact:
      "Built and tested a practical parking workflow using Arduino, C#, and MongoDB.",
    stack: ["Arduino", "C#", "MongoDB"],
  },
  {
    title: "Children Application Game",
    type: "Game Development",
    summary:
      "Designed and developed an interactive educational game application with puzzles, mini games, and child-friendly UI.",
    impact: "Built gameplay and optimized features with C# and the Unity game engine.",
    stack: ["Unity", "C#"],
  },
  {
    title: "Video Streaming",
    type: "Web Feature",
    summary:
      "Developed a video streaming feature for a church web application to support remote access to services and events.",
    impact:
      "Implemented dynamic video pages with JavaScript, Express.js, MongoDB, and EJS.",
    stack: ["JavaScript", "Express.js", "MongoDB", "EJS"],
  },
  {
    title: "Local Governance Information System",
    type: "Government System",
    summary:
      "Designed and implemented a system for managing local government records, documents, financial data, and operations.",
    impact:
      "Added authentication, role-based access control, and data protection using C# and PostgreSQL.",
    stack: ["C#", "PostgreSQL", "Security"],
  },
];

const strengths = [
  "Bridge engineering with Japanese stakeholders",
  "ERP & business systems",
  "Odoo 18 and ERP implementation",
  "Business process analysis",
  "Workflow automation",
  "Functional consulting",
  "System configuration",
  "React, Angular, Vue.js, Electron.js",
  "C#, Java, Python, JavaScript, TypeScript",
  ".NET, ASP.NET Core, FastAPI, Express.js",
  "PostgreSQL, MySQL, MongoDB, AWS",
  "API integration, deployment, and maintenance",
  "Help desk, remote desktop, and troubleshooting",
  "Technical documentation, training, and Agile/Scrum",
];

const timeline = [
  {
    label: "Jan 2026 - Present",
    title:
      "Senior Associate Research and Development Engineer, Advanced World Solutions",
    detail:
      "Serves as a bridge engineer between Japanese clients and development teams, translating requirements into technical specifications while contributing to C#, Java, Python, JavaScript, TypeScript, React, Angular, .NET, API, database, cloud, deployment, testing, and documentation work.",
  },
  {
    label: "Aug 2024 - Dec 2025",
    title: "System Engineer, ADInteractive Co., Ltd. - Sapporo, Japan",
    detail:
      "Partnered with business teams and end users to identify goals, define system requirements, produce technical documentation, build software in C#, Java, and Python, and support deployment, configuration, training, and adoption.",
  },
  {
    label: "Nov 2023 - Aug 2024",
    title: "Application System Engineer / Consultant, Fujitsu",
    detail:
      "Collaborated with clients and stakeholders to define business and technical requirements, develop custom applications, manage deployment processes, and provide training and documentation for new systems.",
  },
  {
    label: "Sep 2021 - Nov 2023",
    title: "IT Engineer, JFE Techno Manila",
    detail:
      "Worked across technical support and software development, participated in project presentations and Japanese documentation, joined software committees, and was selected as a Japanese Language Master Candidate.",
  },
  {
    label: "May 2021 - Present",
    title: "Freelance Software Developer",
    detail:
      "Works directly with clients to analyze needs, design technical solutions, build bespoke software applications in C#, Java, Python, and related technologies, and support full project lifecycles from concept to implementation.",
  },
  {
    label: "Jan 2021 - May 2021",
    title:
      "Backend Programmer Intern, Lyceum of the Philippines University - Cavite",
    detail:
      "Collaborated with developers on backend solutions and gained hands-on experience with programming languages and frameworks commonly used in backend development.",
  },
];

const stats = [
  { value: "5+", label: "Years software work" },
  { value: "13", label: "Featured projects" },
  { value: "2", label: "Working languages" },
];

const assetPath = (fileName) => `${import.meta.env.BASE_URL}${fileName}`;

function App() {
  return (
    <div className="site-shell">
      <header className="site-header" aria-label="Primary navigation">
        <a className="brand-mark" href="#top" aria-label="Guillermo home">
          G
        </a>
        <nav className="nav-links">
          <a href="#work">Work</a>
          <a href="#skills">Skills</a>
          <a href="#experience">Experience</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <main id="top">
        <section className="hero-section" aria-labelledby="hero-title">
          <img
            className="hero-image"
            src={assetPath("portfolio-hero.png")}
            alt=""
            aria-hidden="true"
          />
          <div className="hero-overlay" />
          <div className="hero-content">
            <div className="hero-layout">
              <div className="hero-text">
                <p className="eyebrow">
                  <Code2 size={18} aria-hidden="true" />
                  {profile.role}
                </p>
                <h1 id="hero-title">{profile.name}</h1>
                <p className="hero-copy">{profile.tagline}</p>
                <div className="hero-actions" aria-label="Portfolio actions">
                  <a className="button button-primary" href="#work">
                    View Work
                    <ArrowUpRight size={20} aria-hidden="true" />
                  </a>
                  <a
                    className="button button-secondary"
                    href={`mailto:${profile.email}`}
                  >
                    Contact Me
                    <Mail size={20} aria-hidden="true" />
                  </a>
                </div>
              </div>
              <div className="profile-portrait" aria-label="Profile photo">
                <img
                  src={assetPath("profile.png")}
                  alt="Guillermo V C. Sango"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="stats-strip" aria-label="Portfolio highlights">
          {stats.map((item) => (
            <div className="stat-item" key={item.label}>
              <strong>{item.value}</strong>
              <span>{item.label}</span>
            </div>
          ))}
        </section>

        <section className="intro-section" aria-labelledby="about-title">
          <div className="section-kicker">
            <Sparkles size={18} aria-hidden="true" />
            About
          </div>
          <div className="intro-grid">
            <h2 id="about-title">
              Software developer and bridge engineer with local and Japan-based
              experience.
            </h2>
            <div className="intro-copy">
              <p>
                I have worked across enterprise systems, web applications,
                automation, technical support, and software deployment, with direct
                experience communicating with Japanese clients and translating
                business needs into technical tasks.
              </p>
              <p>
                I earned a Bachelor of Information Technology from Lyceum of the
                Philippines University - Cavite Campus. I speak Japanese at a
                business level and English fluently.
              </p>
            </div>
          </div>
        </section>

        <section className="work-section" id="work" aria-labelledby="work-title">
          <div className="section-heading">
            <div>
              <div className="section-kicker">
                <Layers3 size={18} aria-hidden="true" />
                Selected Work
              </div>
              <h2 id="work-title">Projects built for clarity and momentum.</h2>
            </div>
            <p>
              Selected professional and freelance systems from engineering,
              automation, business workflow, modernization, and public-sector work.
            </p>
          </div>
          <div className="project-grid">
            {projects.map((project) => (
              <article className="project-card" key={project.title}>
                <span className="project-type">{project.type}</span>
                <h3>{project.title}</h3>
                <p>{project.summary}</p>
                <div className="project-impact">
                  <CheckCircle2 size={18} aria-hidden="true" />
                  <span>{project.impact}</span>
                </div>
                <div className="tag-list" aria-label={`${project.title} stack`}>
                  {project.stack.map((item) => (
                    <span key={item}>{item}</span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="skills-section" id="skills" aria-labelledby="skills-title">
          <div className="skills-copy">
            <div className="section-kicker">
              <CheckCircle2 size={18} aria-hidden="true" />
              Skills
            </div>
            <h2 id="skills-title">Full-stack delivery with bridge engineering depth.</h2>
            <p>
              My background combines application development, bridge engineering,
              technical support, documentation, deployment, and client-facing
              delivery across multiple stacks.
            </p>
          </div>
          <div className="strength-list">
            {strengths.map((strength) => (
              <div className="strength-item" key={strength}>
                <CheckCircle2 size={18} aria-hidden="true" />
                <span>{strength}</span>
              </div>
            ))}
          </div>
        </section>

        <section
          className="experience-section"
          id="experience"
          aria-labelledby="experience-title"
        >
          <div className="section-heading compact">
            <div>
              <div className="section-kicker">
                <MapPin size={18} aria-hidden="true" />
                Experience
              </div>
              <h2 id="experience-title">
                Work history across international and Japan-facing software teams.
              </h2>
            </div>
          </div>
          <div className="timeline">
            {timeline.map((item) => (
              <article className="timeline-item" key={item.title}>
                <span>{item.label}</span>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.detail}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="contact-section" id="contact" aria-labelledby="contact-title">
          <div>
            <div className="section-kicker">
              <Mail size={18} aria-hidden="true" />
              Contact
            </div>
            <h2 id="contact-title">Let's build something useful.</h2>
            <p>
              Send over a project idea, collaboration request, or role that needs a
              developer with web, enterprise, automation, and Japan-facing bridge
              engineering experience.
            </p>
          </div>
          <div className="contact-actions">
            <a className="button button-primary" href={`mailto:${profile.email}`}>
              Email
              <Mail size={20} aria-hidden="true" />
            </a>
            {profile.github && (
              <a
                className="button button-dark"
                href={profile.github}
                target="_blank"
                rel="noreferrer"
              >
                GitHub
                <Github size={20} aria-hidden="true" />
              </a>
            )}
            {profile.linkedin && (
              <a
                className="button button-dark"
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
                <Linkedin size={20} aria-hidden="true" />
              </a>
            )}
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <span>{profile.name}</span>
        <span>{profile.location}</span>
      </footer>
    </div>
  );
}

export default App;
