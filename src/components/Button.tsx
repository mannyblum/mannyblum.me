import { ArrowLeftIcon } from '@primer/octicons-react';
import classNames from 'classnames';
import { MouseEvent, ReactElement } from 'react';
import { twMerge } from 'tailwind-merge';

type ButtonProps = {
  children: string;
  endIcon?: ReactElement;
  variant?: string;
  className?: string;
  onClick: (e: MouseEvent<HTMLButtonElement>) => void;
};

export default function Button({
  endIcon,
  variant,
  children,
  onClick,
  ...rest
}: ButtonProps) {
  const classes = twMerge(
    classNames(
      rest.className,
      'bg-primary px-2 py-1 border-2 text-black font-bold flex items-center gap-1 cursor-pointer uppercase',
      {
        'bg-green-500 hover:bg-green-600': variant === 'primary',
        'bg-[#a78bfa] hover:bg-[#8b5cf6]': variant === 'secondary',
        'bg-white pl-3 pr-4 py-2 border-4 border-black': variant === 'vanilla',
      },
    ),
  );

  return (
    <button className={classes} onClick={onClick}>
      <>{variant === 'vanilla' ? <ArrowLeftIcon size={16} /> : null}</>
      <span className="font-bold text-xs">{children}</span>
      <>{endIcon ?? endIcon}</>
    </button>
  );
}
