import { useCallback } from 'react';

interface IFilterRadioProps {
  name: string;
  label: string;
  value: string | null;
  checked: boolean;
  onSelect: (value: string | null) => void;
}

export const FilterRadio = ({ name, label, value, checked, onSelect }: IFilterRadioProps) => {
  const handleChange = useCallback(() => onSelect(value), [onSelect, value]);

  return (
    <label className="flex cursor-pointer items-center gap-2 text-sm text-foreground">
      <input
        type="radio"
        name={name}
        checked={checked}
        onChange={handleChange}
        className="size-4 accent-primary"
      />
      {label}
    </label>
  );
};
