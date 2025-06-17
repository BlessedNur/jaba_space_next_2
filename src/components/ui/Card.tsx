import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'default' | 'dark' | 'orange';
  shadow?: boolean;
  rounded?: boolean;
}

const Card: React.FC<CardProps> = ({
  children,
  className = '',
  variant = 'default',
  shadow = true,
  rounded = true
}) => {
  const baseClasses = 'p-6';
  
  const variantClasses = {
    default: 'bg-white text-gray-800',
    dark: 'bg-gray-800 text-white',
    orange: 'bg-orange-500 text-white'
  };

  const shadowClass = shadow ? 'shadow-lg' : '';
  const roundedClass = rounded ? 'rounded-lg' : '';

  const classes = `${baseClasses} ${variantClasses[variant]} ${shadowClass} ${roundedClass} ${className}`;

  return (
    <div className={classes}>
      {children}
    </div>
  );
};

export default Card;