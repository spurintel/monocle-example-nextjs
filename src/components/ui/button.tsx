import { Button as HeadlessButton } from '@headlessui/react';
import { forwardRef } from 'react';
import clsx from 'clsx';

const Button = forwardRef<
  HTMLButtonElement,
  React.ButtonHTMLAttributes<HTMLButtonElement>
>(({ className, ...props }, ref) => {
  return (
    <HeadlessButton
      ref={ref}
      className={clsx(
        'inline-flex items-center justify-center gap-2 rounded-lg px-3 py-1.5 text-sm font-semibold',
        'bg-purple-500/90 backdrop-blur-sm',
        'border border-purple-400/50 shadow-[0_0_15px_rgba(168,85,247,0.15)]',
        'text-black',
        'relative overflow-hidden',
        'hover:bg-purple-500 hover:border-purple-400',
        'focus:outline-none focus:ring-2 focus:ring-purple-400',
        className
      )}
      {...props}
    />
  );
});

Button.displayName = 'Button';

export { Button };
