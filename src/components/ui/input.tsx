import { forwardRef } from 'react';
import { Input as HeadlessInput } from '@headlessui/react';
import clsx from 'clsx';

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: string;
}

const Input = forwardRef<HTMLInputElement, InputProps>(({ ...props }, ref) => {
  return (
    <div className="relative">
      <HeadlessInput
        className={clsx(
          'mt-3 block w-full rounded-lg border border-purple-400/40 bg-white/5 px-3 py-1.5 text-sm/6 text-purple-300 font-mono',
          'shadow-[0_0_15px_rgba(168,85,247,0.15)]',
          'focus:not-data-focus:outline-none data-focus:outline-2 data-focus:-outline-offset-2 data-focus:outline-purple-400/25'
        )}
        ref={ref}
        {...props}
      />
    </div>
  );
});

Input.displayName = 'Input';

export { Input };
