import React, { useEffect, useState } from 'react';
import '../styles/Work.css';
import { Github } from 'lucide-react';

const Work = () => {
  const [repos, setRepos] = useState([]);
  const [flippedCards, setFlippedCards] = useState({});

  useEffect(() => {
    fetch('https://api.github.com/users/oliveirammluis/repos')
      .then((res) => res.json())
      .then((data) => {
        const sortedRepos = data
          .filter(repo => !repo.fork)
          .sort((a, b) => new Date(b.updated_at) - new Date(a.updated_at));
        setRepos(sortedRepos);
      })
      .catch((error) => console.error('Error fetching repos:', error));
  }, []);

  const handleFlip = (id) => {
    setFlippedCards((prev) => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  return (
    <section className="work-section relative overflow-hidden bg-blur">
      {/* Conteúdo principal */}
      <h2 className="work-title text-2xl font-bold text-white flex items-center gap-2 relative z-10">
        <Github size={28} className="text-[#58a6ff] hover:text-[#79c0ff] transition-colors duration-300" />
        <span>My GitHub Projects</span>
      </h2>
      <div className="work-grid relative z-10">
        {repos.map((repo) => {
          const isFlipped = flippedCards[repo.id];
  
          return (
            <div
              key={repo.id}
              className={`work-card${isFlipped ? ' flipped' : ''}`}
              onClick={() => handleFlip(repo.id)}
            >
              <div className="card-inner">
                <div className="card-front">
                  <h3 className="work-repo-name">{repo.name}</h3>
                  <img
                    src={`/images/${repo.name}.png`}
                    alt={`${repo.name} preview`}
                    className="project-image"
                  />
                  <p className="work-repo-updated">
                    Last updated: {new Date(repo.updated_at).toLocaleDateString()}
                  </p>
                </div>
                <div className="card-back">
                  <p className="work-repo-description">
                    {repo.description || 'No description provided.'}
                  </p>
                  <a
                    className="work-repo-link"
                    href={repo.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                  >
                    View on GitHub
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Work;
