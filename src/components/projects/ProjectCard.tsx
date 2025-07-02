import { Project } from '@/types/Project';
import placeholder from '@assets/images/placeholder.svg';
import Button from '@components/Button';
import { ArrowUpRightIcon, MarkGithubIcon } from '@primer/octicons-react';
import { MouseEvent } from 'react';
import { useNavigate } from 'react-router';

type ProjectCardProps = {
  project: Project;
};

export default function ProjectCard({ project }: ProjectCardProps) {
  const navigate = useNavigate();

  const openDemoLink = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    navigate(project.demoUrl);
  };

  const openCodeLink = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
  };

  return (
    <div
      key={project.id}
      className="transition flex flex-col hover:shadow-[4px_4px_0px_rgba(0,0,0,1)] hover:-translate-x-2 hover:-translate-y-2 text-left project-card bg-white border-4 border-black p-4"
    >
      <div className="relative aspect-video w-full bg-gray-200 border-4 border-black mb-4">
        <img
          src={project.thumbnail ? `/images/${project.thumbnail}` : placeholder}
          alt="thumbnail"
          className="w-full h-full object-cover"
        />
        <p
          className={`absolute uppercase text-white font-black 
          text-[11px]! -top-1.5 -right-1.5 py-0.5 px-1 border-2 border-black rotate-3
          ${project.type.toLowerCase() === 'app' ? 'bg-red-400' : ''}
          ${project.type.toLowerCase() === 'css' ? 'bg-indigo-400' : ''}
          `}
        >
          {project.type}
        </p>
      </div>
      <div className="grow ">
        <div className="text-lg font-black mb-2">{project.name}</div>
        <div className="text-sm font-medium">{project.shortDescription}</div>
      </div>
      <hr className="border-2 my-4 border-black" />
      <div className=" flex justify-between items-center">
        <Button
          onClick={openDemoLink}
          endIcon={<ArrowUpRightIcon size={16} />}
          variant="primary"
        >
          Demo
        </Button>
        <Button
          onClick={openCodeLink}
          endIcon={<MarkGithubIcon size={16} />}
          variant="secondary"
        >
          Code
        </Button>
      </div>
    </div>
  );
}
