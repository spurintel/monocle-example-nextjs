import clsx from 'clsx';
import { HTMLAttributes, forwardRef } from 'react';

export const Card = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={clsx(
        'relative p-8 rounded-lg overflow-hidden',
        'bg-black/80 backdrop-blur-sm',
        'border border-purple-400/40 shadow-[0_0_15px_rgba(168,85,247,0.15)]',
        'before:absolute before:inset-0 before:bg-[linear-gradient(45deg,transparent_25%,rgba(168,85,247,0.1)_50%,transparent_75%)] before:pointer-events-none',
        'after:absolute after:inset-0 after:bg-[radial-gradient(circle_at_50%_50%,rgba(168,85,247,0.1),transparent_70%)] after:pointer-events-none',
        className
      )}
      {...props}
    />
  )
);

Card.displayName = 'Card';
