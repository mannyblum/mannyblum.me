import ProjectHeader from '@/components/projects/Header';
import { Outlet } from 'react-router';

export default function Projects() {
  return (
    <div className="my-4 py-4 container h-screen mx-auto font-['Inter']">
      <ProjectHeader />
      <Outlet />
    </div>
  );
}
