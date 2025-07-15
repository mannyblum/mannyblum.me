import { MouseEvent } from 'react';
import { useNavigate } from 'react-router';

export default function Intro() {
  const navigate = useNavigate();

  const openProjectsLink = (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();

    navigate('/projects/');
  };
  return (
    <section className="intro card shadow">
      <header>
        <h1>Manny Blum</h1>
        <h2>Front-End/UI/UX Engineer</h2>
      </header>
      <a
        className="download-btn"
        href="/manny-blum-2025-resume-v9.pdf"
        download
      >
        Download Resume
      </a>
      <a className="download-btn projects" onClick={openProjectsLink} download>
        Projects
      </a>
    </section>
  );
}
