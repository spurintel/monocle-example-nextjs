import {
  Fieldset as HeadlessFieldset,
  Field as HeadlessField,
  Label as HeadlessLabel,
} from '@headlessui/react';

export const Fieldset = ({ children }: { children: React.ReactNode }) => {
  return <HeadlessFieldset className="space-y-8 ">{children}</HeadlessFieldset>;
};

export const Field = ({ children }: { children: React.ReactNode }) => {
  return <HeadlessField>{children}</HeadlessField>;
};

export const Label = ({ children }: { children: React.ReactNode }) => {
  return (
    <HeadlessLabel className="text-sm/6 font-medium text-purple-300 font-mono">
      {children}
    </HeadlessLabel>
  );
};
