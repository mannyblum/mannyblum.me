import { MouseEvent } from 'react';
import { useNavigate } from 'react-router';

export default function ProjectHeader() {
  const navigate = useNavigate();

  const openResumeLink = (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();

    navigate('/');
  };

  return (
    <div className="flex items-center justify-between relative">
      <h1 className="text-5xl md:text-7xl font-black mb-4 relative inline-block">
        <span className="relative z-10 uppercase">My Projects</span>
        <div className="absolute -bottom-2 left-0 w-full h-4 bg-yellow-400 -rotate-1 z-0"></div>
      </h1>
      <a
        className="download-btn text-2xl hover:text-black! hover:font-bold! cursor-pointer"
        onClick={openResumeLink}
        download
      >
        Resume
      </a>
    </div>
  );
}
