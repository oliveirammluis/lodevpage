import React, { useState } from 'react';
import '../styles/Blog.css';

const posts = [
  {
    title: 'Full Stack Web Developer Bootcamp',
    date: 'May 2025',
    category: 'Course',
    description: 'An intensive bootcamp focused on React, Node.js, PostgreSQL, and best development practices.',
    certificate: '/CodeforAll.pdf'
  },
  {
    title: 'Bit By Bid',
    date: 'April 2025',
    category: 'Group Project',
    description: 'A robust platform for submitting RFPs, built using Java, Spring Boot, HTML, CSS, JavaScript, Bootstrap, tsparticles, and PostgreSQL. Deployed on AWS EC2 with a strong Git workflow, emphasizing collaboration, code quality, and hands-on DevOps.',
    projectLink: 'http://ec2-13-60-169-55.eu-north-1.compute.amazonaws.com' 
  },
  {
    title: 'Advanced Excel Workshop',
    date: 'June 2020',
    category: 'Course',
    description: 'Certified Udemy course covering formulas, dashboards, and automation with VBA.',
    certificate: '/Udemy.pdf'
  },
  {
    title: 'Portfolio Website – mugiwara.dev',
    date: 'May 2025',
    category: 'Personal Project',
    description: 'LoDevPage is a personal developer portfolio built with React and Tailwind CSS. It includes an introduction, dynamic content, a showcase of GitHub repositories (via the GitHub API), and a blog section for formations, workshops, and projects.'
  },
  {
    title: 'Metalúrgica Website',
    date: 'May 2025',
    category: 'Professional Project',
    description: 'Corporate website for a metalworking company using React, TypeScript, Tailwind CSS, and Next.js, with multilingual support and Google Maps integration.'
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

  const filteredPosts = activeCategory === 'All'
    ? posts
    : posts.filter(post => post.category === activeCategory);

  const categories = ['All', ...new Set(posts.map(post => post.category))];

  return (
    <section className="blog-section">
      <h2 className="blog-title">My Blog</h2>

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
            <p className="post-desc">{post.description}</p>

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
    className="certificate-button"
  >
    View Project
  </a>
)}

            
          </div>
        ))}
      </div>
    </section>
  );
}

export default Blog;
