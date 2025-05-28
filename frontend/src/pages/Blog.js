import React, { useState, useCallback } from 'react';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';
import '../styles/Blog.css';

const posts = [
  {
    title: 'Full Stack Web Developer Bootcamp',
    date: 'May 2025',
    sortDate: '2025-05-02',
    category: 'Course',
    description: [
      "An immersive 14-week Full-Stack Programming Bootcamp by Code for All. Core modules included Java programming, Object-Oriented Programming, and software engineering principles.",
      "Covered advanced topics like concurrent and network programming (including multithreading), build systems, and testing. Gained experience in Spring Boot, Java Persistence, JDBC, and RDBMS with PostgreSQL.",
      "On the frontend, mastered JavaScript fundamentals, asynchronous programming, Single Page Applications (SPA), and GitHub version control workflows.",
      "Also explored AI integration using:",
      {
        type: "list",
        items: [
          "Generative AI",
          "Prompt Engineering",
          "Retrieval Augmented Generation (RAG)",
          "Function Calling"
        ]
      }
    ],
    certificate: '/CodeforAll.pdf'
  },
  {
    title: 'Bit By Bid',
    date: 'May 2025',
    sortDate: '2025-05-01',
    category: 'Group Project',
    description: `Bit By Bid — 3 days, 4 devs, 1 (almost) impossible mission 🚀

The challenge? Build a platform to streamline how tech teams respond to RFPs (Requests for Proposals) — faster, smarter, and reusable.
The timeframe? 72 hours.
The vibe? Full-on survival mode: ☕💻🔥

Through a whirlwind of commits, pull requests, and terminal wizardry, we launched *Bit By Bid* — a fullstack web app that:

- Gathers user input via a dynamic, user-friendly form
- Persists data in a robust PostgreSQL database
- Offers a smooth, responsive frontend with ✨ animated particles for extra flair
- Features a fully functional contact form for real-time outreach
- Was deployed manually to AWS EC2 — no fancy pipelines, just raw shell power 💪

👨‍💻 Tech stack that kept us alive:
Frontend: HTML, CSS, JavaScript, Bootstrap, tsparticles  
Backend: Spring Boot, JSON handling, PostgreSQL  
DevOps: Git workflow with structured branches, PRs, reviews, and blood-sweat-debug moments  
Deployment: Manual AWS EC2 setup via terminal — old-school and proud.`,
    projectLink: 'http://ec2-13-60-169-55.eu-north-1.compute.amazonaws.com'
  },
  {
    title: 'Advanced Excel Workshop',
    date: 'June 2020',
    sortDate: '2020-06-01',
    category: 'Course',
    description: [
      '🎓 Advanced Excel Workshop — 5-in-1 Career-Boosting Bundle',
      'Over 40 hours of video lessons and 400+ hands-on exercises, all grounded in real-world business scenarios to ensure immediate and applicable learning.',
      {
        type: 'list',
        items: [
          '1 – Basic & Intermediate Excel: Build a solid foundation of essential spreadsheet skills.',
          '2 – Advanced Excel: Master complex formulas across three full modules — Advanced Functions I, II, and III.',
          '3 – Excel Dashboards: Learn to create interactive, visually impactful dashboards that impress managers and recruiters.',
          '4 – Excel Power Query: Connect, import, and transform data efficiently and intelligently.',
          '5 – Excel VBA: Automate tasks and craft personalized solutions using Visual Basic for Applications.'
        ]
      },
      '🧭 Practical, Market-Driven Learning:',
      {
        type: 'list',
        items: [
          'Real-world business cases develop practical, in-demand skills',
          'Master advanced tools: pivot tables, macros, VBA, Solver, and Power Query',
          'Learn to analyze and solve real problems, make smarter decisions, and stand out professionally'
        ]
      },
      'This course was crafted to skyrocket your career and sharpen your edge in data-driven decision-making.'
    ],
    certificate: '/Udemy.pdf'
  },
  {
    title: 'Portfolio Website',
    date: 'May 2025',
    sortDate: '2025-05-05',
    category: 'Personal Project',
    description: `LO Dev Page — My Personal Developer Portfolio 🚀

What is it? A sleek, modern portfolio built with React and styled using Tailwind CSS, designed to showcase who I am and what I create.

Why React & Tailwind? React powers a dynamic and responsive user experience, while Tailwind CSS brings utility-first styling that keeps the code clean and maintainable.

What’s inside?
- An intro section that sets the tone with a personal touch
- Dynamic content that evolves as I update my skills and projects
- Integration with the GitHub API to pull in my latest repositories live
- A blog section sharing my journey, workshops, projects, and learning moments
- A fully functional contact form powered by EmailJS, enabling direct email outreach without a backend

Built to reflect continuous learning and passion for web development — this site is more than a portfolio: it's my digital playground.`
  },
  {
    title: 'Banana Yellow Project',
    date: 'March 2025',
    sortDate: '2025-03-01',
    category: 'Group Project',
    description: `Banana Yellow — Kernel Fried Chickens Go Flappy 🍌🐔

A group-built twist on the classic Flappy Bird game, developed during the <Code For All> Bootcamp using Java and the SimpleGraphics library.

With an extra crispy theme — Kernel Fried Chickens — we added fun visuals and quirky mechanics while focusing on clean, portable code.

Highlights:
- Fully functional 2D game with physics-inspired mechanics
- SimpleGraphics library for cross-platform compatibility
- Packaged into a .jar file to run on any machine 
- Versioned and developed collaboratively on GitHub with consistent commits and teamwork

Wrapped up on March 4th, 2025 — ready to run, flap, and cluck on any device 🐤💻`
  },
  {
    title: 'Precision Machining Website',
    date: 'May 2025',
    sortDate: '2025-05-20',
    category: 'Professional Project',
    description: `Metalworking Website — Real Needs, Real Code, Real Impact ⚙️

A professional-grade website built for a precision metalworking company, combining a clean UI with practical functionality — still in active development as we refine features and content based on real client feedback.

Developed with a modern stack — React, TypeScript, Tailwind CSS, and Next.js — this project serves as both a working solution and a technical exercise in building scalable, maintainable applications.

Highlights include:
- Company, products, and contact pages with a mobile-first, responsive design
- Multilingual support to expand reach across audiences
- Embedded Google Maps for location visibility
- Functional contact form integrated with EmailJS for direct, backend-free email communication
- Strong SEO configuration to boost search visibility and site ranking
- Modular architecture for smooth scaling and future-proof development

Deployment is in progress as we test, iterate, and align final touches with client expectations.`
  }
];


const getCategoryIcon = (category) => {
  switch (category) {
    case 'Course': return '📚';
    case 'Workshop': return '🛠️';
    case 'Personal Project': return '💡';
    case 'Professional Project': return '🌐';
    case 'Group Project': return '🤝';
    default: return '📝';
  }
};

function Blog() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredPosts = (activeCategory === 'All'
  ? posts
  : posts.filter(post => post.category === activeCategory)
).sort((a, b) => new Date(b.sortDate) - new Date(a.sortDate));


  const categories = ['All', ...new Set(posts.map(post => post.category))];

  // tsparticles init callback
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  const particlesOptions = {
    background: {
      color: {
        value: "#111827",
      },
    },
    fpsLimit: 60,
    interactivity: {
      events: {
        onClick: { enable: true, mode: "push" },
        onHover: { enable: true, mode: "repulse" },
        resize: true,
      },
      modes: {
        push: { quantity: 4 },
        repulse: { distance: 100, duration: 0.4 },
      },
    },
    particles: {
      color: { value: "#60a5fa" },
      links: {
        color: "#60a5fa",
        distance: 150,
        enable: true,
        opacity: 0.4,
        width: 1,
      },
      collisions: { enable: false },
      move: {
        directions: "none",
        enable: true,
        outModes: "bounce",
        random: false,
        speed: 1,
        straight: false,
      },
      number: {
        density: { enable: true, area: 800 },
        value: 50,
      },
      opacity: { value: 0.5 },
      shape: { type: "circle" },
      size: { value: { min: 1, max: 3 } },
    },
    detectRetina: true,
  };

  return (
    <section className="blog-section">
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={particlesOptions}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: 0,
        }}
      />

      <div style={{ position: 'relative', zIndex: 1 }}>
        <h2 className="glitch-title text-center text-4xl font-extrabold text-cyan-400 uppercase tracking-widest relative z-10">
          <span aria-hidden="true">My Blog</span>
          My Blog
          <span aria-hidden="true">My Blog</span>
        </h2>

        <div className="category-filter">
          {categories.map(cat => (
            <button
              key={cat}
              className={`filter-btn ${activeCategory === cat ? 'active' : ''}`}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="blog-posts">
          {filteredPosts.map((post, index) => (
            <div
              key={index}
              className={`blog-post ${post.certificate ? 'with-certificate' : ''}`}
            >
              <h3 className="post-title">{post.title}</h3>
              <div className="post-meta">
                {getCategoryIcon(post.category)} {post.category} · {post.date}
              </div>

              {Array.isArray(post.description) ? (
                <div className="post-desc space-y-3">
                  {post.description.map((item, idx) => {
                    if (typeof item === 'string') {
                      return <p key={idx}>{item}</p>;
                    }
                    if (item.type === 'list') {
                      return (
                        <ul key={idx} className="list-inside pl-4 space-y-1">
                          {item.items.map((li, i) => (
                            <li key={i}>{li}</li>
                          ))}
                        </ul>
                      );
                    }
                    return null;
                  })}
                </div>
              ) : (
                <div className="post-desc space-y-3">
                  {post.description.split('\n').map((line, idx) => (
                    <p key={idx}>{line}</p>
                  ))}
                </div>
              )}

              {post.certificate && (
                <a
                  href={post.certificate}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="certificate-button"
                >
                  View Certificate
                </a>
              )}

              {post.projectLink && (
                <a
                  href={post.projectLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link"
                >
                  Visit Project
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Blog;
