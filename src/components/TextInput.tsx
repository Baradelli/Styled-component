import { InputHTMLAttributes, ReactNode } from 'react';
import { Slot } from '@radix-ui/react-slot';

export interface TextInputRootProps {
  children: ReactNode;
}

const TextInputRoot = ({ children }: TextInputRootProps) => (
  <div className="flex items-center gap-3 py-4 px-3 h-12 rounded bg-gray-800 text-gray-100 text-xs placeholder:text-gray-400 w-full focus-within:ring-2 ring-cyan-300">
    {children}
  </div>
);

TextInputRoot.displayName = 'TextInputRoot.Root';

export interface TextInputIconProps {
  children: ReactNode;
}

const TextInputIcon = ({ children }: TextInputIconProps) => (
  <Slot className="w-6 h-6 text-gray-400">{children}</Slot>
);

TextInputIcon.displayName = 'TextInput.Icon';

export interface TextInputInputProps extends InputHTMLAttributes<HTMLInputElement> {}

const TextInputInput = (props: TextInputInputProps) => (
  <input
    className="bg-transparent flex-1 outline-none text-gray-100 text-xs placeholder:text-gray-400 w-full"
    {...props}
  />
);

TextInputInput.displayName = 'TextInputInput.Input';

export const TextInput = {
  Root: TextInputRoot,
  Icon: TextInputIcon,
  Input: TextInputInput,
};
