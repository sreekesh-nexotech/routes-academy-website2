import React from 'react';

// Reusable ButtonLink component
interface ButtonLinkProps {
  href: string;
  label: string;
  variant?: 'primary' | 'secondary';
  className?: string;
}

const ButtonLink = ({ href, label, variant = 'secondary', className = '' }: ButtonLinkProps) => {
  const baseClasses = "px-4 py-2 rounded-md transition-colors duration-200 block text-center";
  
  const primaryClasses = "text-white bg-blue-600 hover:bg-blue-700";
  const secondaryClasses = "text-gray-700 border border-gray-300 hover:bg-gray-100";

  const variantClasses = variant === 'primary' ? primaryClasses : secondaryClasses;

  return (
    <a href={href} className={`${baseClasses} ${variantClasses} ${className}`}>
      {label}
    </a>
  );
};

export default ButtonLink;
