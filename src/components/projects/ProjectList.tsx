import ProjectCard from '@/components/projects/ProjectCard';
import projects from '@/data/projects.json';

export default function ProjectList() {
  return (
    <>
      <div className="">
        <p className="text-xl max-w-2xl mt-6 mb-8!">
          A collection of React components and applications I've built. Each
          piece demonstrates different skills and techniques.
        </p>
      </div>
      <div className="grid grid-cols-3 sm:grid-cols-2 gap-3">
        {projects.map((project) => {
          return <ProjectCard project={project} />;
        })}
      </div>
    </>
  );
}
