// components/BECityButton.tsx
import React from 'react'

interface BECityButtonProps {
  variant?: 'primary' | 'secondary' | 'danger' | 'success'
  size?: 'sm' | 'md' | 'lg'
  children: React.ReactNode
  onClick?: () => void
  disabled?: boolean
  type?: 'button' | 'submit' | 'reset'
  className?: string
}

export default function BECityButton({
  variant = 'primary',
  size = 'md',
  children,
  onClick,
  disabled = false,
  type = 'button',
  className = '',
}: BECityButtonProps) {
  const baseStyles =
    'font-bold transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg shadow-md'

  const variants = {
    primary: 'bg-becity-blue-900 hover:bg-becity-blue-800 text-white focus:ring-becity-blue-900',
    secondary: 'bg-becity-purple-900 hover:bg-becity-purple-800 text-white focus:ring-becity-purple-900',
    danger: 'bg-red-600 hover:bg-red-700 text-white focus:ring-red-600',
    success: 'bg-green-600 hover:bg-green-700 text-white focus:ring-green-600',
  }

  const sizes = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-6 py-2.5 text-base',
    lg: 'px-8 py-3.5 text-lg',
  }

  return (
    <button
      type={type}
      className={`
        ${baseStyles}
        ${variants[variant]}
        ${sizes[size]}
        disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100
        ${className}
      `}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  )
}
