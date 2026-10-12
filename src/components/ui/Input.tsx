import type { UseFormRegisterReturn } from 'react-hook-form';

interface IInputProps {
  id: string;
  label: string;
  name?: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
  register?: UseFormRegisterReturn;
  error?: string;
}

export const Input = ({ id, label, name, type = 'text', placeholder, required, register, error }: IInputProps) => (
  <div>
    <label htmlFor={id} className="block text-sm font-medium text-gray-600">
      {label}
    </label>
    <input
      id={id}
      name={name}
      type={type}
      placeholder={placeholder}
      required={required}
      aria-invalid={!!error}
      {...register}
      className={`mt-1.5 block h-11 w-full rounded-md border px-3 text-foreground outline-none transition-colors focus:ring-2 ${
        error ? 'border-error focus:ring-error/20' : 'border-border focus:border-primary focus:ring-primary/20'
      }`}
    />
    {error && <p className="mt-1 text-xs text-error">{error}</p>}
  </div>
);
