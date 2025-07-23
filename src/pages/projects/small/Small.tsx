import Button from '@/components/Resume/Button';
import { MouseEvent } from 'react';
import { Outlet, useNavigate } from 'react-router';

export default function Small() {
  const navigate = useNavigate();

  const handleGoBack = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    navigate(`/projects`);
  };

  return (
    <div className="mt-4">
      <Button variant="vanilla" onClick={handleGoBack}>
        Back to Gallery
      </Button>
      <div className="bg-white h-[100%] mt-4 border-4  border-black shadow-[4px_4px_0px_rgba(0,0,0,1)]">
        <Outlet />
      </div>
    </div>
  );
}
