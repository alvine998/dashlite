import React from "react";

interface InputProps {
  label: string;
  type?: string;
  name: string;
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
  autoFocus?: boolean;
}

const Input: React.FC<InputProps> = ({
  label,
  type = "text",
  name,
  placeholder,
  value,
  onChange,
  required = false,
  autoFocus = false,
}) => {
  return (
    <div className="flex flex-col space-y-2 mt-2">
      <label htmlFor={name} className="text-sm font-semibold text-gray-700">
        {label}
      </label>
      <input
        autoFocus={autoFocus}
        type={type}
        name={name}
        id={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 w-full max-w-xs sm:max-w-md md:max-w-lg"
      />
    </div>
  );
};

export default Input;
