import React from 'react';

const techs = [
    'Project Management', 'Account Management', 'Operations Management', 'Transportation Planning',
    'CSS', 'Model View-Controller (MVC)', 'Java Database Connectivity', 'REST API', 'ES6', 
    'Tomcat', 'Maven', 'Scrum', 'Agile Methodologies', 'Testing', 'JUnit', 'SQL', 'Git', 
    'jQuery', 'Bootstrap (Framework)', 'JavaScript', 'HTML', 'SOAP', 'Web Applications', 
    'Web Development', 'Programming', 'Object-Oriented Programming (OOP)', 'Spring Framework', 
    'Spring MVC', 'Java'
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
