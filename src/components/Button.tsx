import React from 'react';

interface ButtonProps {
  label: string;
  onClick: () => void;
  color?: 'primary' | 'secondary' | 'danger' | 'success' | 'warning';
  size?: 'small' | 'medium' | 'large';
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  label,
  onClick,
  color = 'primary',
  size = 'medium',
  disabled = false,
}) => {
  // Set button color classes based on the color prop
  const colorClasses = {
    primary: 'bg-blue-500 hover:bg-blue-600 text-white',
    secondary: 'bg-gray-500 hover:bg-gray-600 text-white',
    danger: 'bg-red-500 hover:bg-red-600 text-white',
    success: 'bg-green-500 hover:bg-green-600 text-white',
    warning: 'bg-yellow-500 hover:bg-yellow-600 text-white',
  };

  // Set button size classes based on the size prop
  const sizeClasses = {
    small: 'px-4 py-2 text-sm',
    medium: 'px-6 py-3 text-base',
    large: 'px-8 py-4 text-lg',
  };

  return (
    <button
      onClick={onClick}
      className={`rounded-md ${colorClasses[color]} ${sizeClasses[size]} w-full disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200`}
      disabled={disabled}
    >
      {label}
    </button>
  );
};

export default Button;
