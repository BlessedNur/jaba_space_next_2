import React from 'react';

interface InputFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  className?: string;
  variant?: 'default' | 'dark';
}

const InputField: React.FC<InputFieldProps> = ({
  label,
  error,
  className = '',
  variant = 'default',
  ...props
}) => {
  const baseClasses = 'w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-colors';
  
  const variantClasses = {
    default: 'bg-white border-gray-300 text-gray-900 placeholder-gray-500',
    dark: 'bg-gray-800 border-gray-600 text-white placeholder-gray-400'
  };

  const errorClasses = error ? 'border-red-500 focus:ring-red-500' : '';
  
  const inputClasses = `${baseClasses} ${variantClasses[variant]} ${errorClasses} ${className}`;

  return (
    <div className="w-full">
      {label && (
        <label className="block text-sm font-medium text-gray-700 mb-2">
          {label}
        </label>
      )}
      <input className={inputClasses} {...props} />
      {error && (
        <p className="mt-1 text-sm text-red-600">{error}</p>
      )}
    </div>
  );
};

export default InputField;