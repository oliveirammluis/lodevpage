import React from 'react';

const techs = [
  'React', 'Tailwind CSS', 'Node.js', 'PostgreSQL', 'Express', 'JavaScript',
  'HTML5', 'CSS3', 'Git', 'GitHub', 'AWS', 'Vite'
];

function TechMarquee() {
  return (
    <div className="overflow-hidden whitespace-nowrap bg-black text-white py-4">
      <div className="animate-marquee inline-block">
        {techs.map((tech, index) => (
          <span key={index} className="mx-8 text-xl">
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
}

export default TechMarquee;
