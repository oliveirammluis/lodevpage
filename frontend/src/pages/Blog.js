// src/pages/Blog.js
import React from 'react';
import '../styles/Blog.css';

const posts = [
  {
    title: 'Full Stack Web Developer Bootcamp',
    date: 'May 2025',
    category: 'Course',
    description: 'An intensive bootcamp focused on React, Node.js, PostgreSQL, and best development practices.'
  },
  {
    title: 'Bit By Bid',
    date: 'April 2025',
    category: 'Personal Project',
    description: 'A platform for submitting RFPs built with HTML, CSS, JS, and PostgreSQL.'
  },
  {
    title: 'Advanced Excel Workshop',
    date: 'June 2020',
    category: 'Workshop',
    description: 'Hands-on workshop covering formulas, dashboards, and automation with VBA.'
  },
  {
    title: 'Portfolio Website – mugiwara.dev',
    date: 'May 2025',
    category: 'Personal Project',
    description: 'A SPA built using React, JavaScript, and Tailwind CSS to showcase projects, experience, and blog content.'
  },
  {
    title: 'Metalúrgica Website',
    date: 'May 2025',
    category: 'Professional Project',
    description: 'Corporate website for a metalworking company using React, TypeScript, Tailwind CSS, and Next.js, with multilingual support and Google Maps integration.'
  }
];

function Blog() {
  return (
    <section className="blog-section">
      <div className="blog-posts">
        {posts.map((post, index) => (
          <div key={index} className="blog-post">
            <h3 className="post-title">{post.title}</h3>
            <div className="post-meta">{`${post.category} · ${post.date}`}</div>
            <p className="post-desc">{post.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Blog;
