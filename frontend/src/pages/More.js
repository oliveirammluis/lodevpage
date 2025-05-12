import React from 'react';
import '../styles/More.css';

const More = () => {
  return (
    <section className="more-section more-section--under-construction relative overflow-hidden bg-dark-gradient">
      <h2 className="more-section__title text-2xl font-bold text-white flex justify-center items-center gap-2 relative z-10">
        <span>More</span>
      </h2>
      <div className="more-section__construction-message relative z-10">
        <h3 className="more-section__construction-title text-3xl font-bold text-white">Under Construction</h3>
        <p className="more-section__construction-text text-lg text-white">
          The More page is being prepared. Come back later for more content!
        </p>
      </div>
    </section>
  );
};

export default More;
