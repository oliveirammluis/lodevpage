import React from 'react';
import '../styles/Blog.css';

const Blog = () => {
  return (
    <section className="blog-section blog-section--under-construction relative overflow-hidden bg-dark-gradient">

      <h2 className="blog-section__title text-2xl font-bold text-white flex justify-center items-center gap-2 relative z-10">
        <span>Blog</span>
      </h2>
      <div className="blog-section__construction-message relative z-10">
        <h3 className="blog-section__construction-title text-3xl font-bold text-white">Under Construction</h3>
        <p className="blog-section__construction-text text-lg text-white">
          The Blog page is being prepared. Come back later for more content!
        </p>
      </div>
    </section>
  );
};

export default Blog;
