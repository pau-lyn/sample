import "./styles.scss";

const Portfolio = () => {
  return (
    <div className="portfolio">
      <h1>My Work</h1>
      <div className="projects">
        {/* Repeat this block for each project */}
        <div className="project">
          <h2>Project Title</h2>
          <p>Description of the project.</p>
          <a href="link-to-project" target="_blank" rel="noopener noreferrer">
            View Project
          </a>
        </div>
        {/* End of project block */}
      </div>
    </div>
  );
};

export default Portfolio;
