import React from "react";
import "./Button.css";

const Button = ({
  children,
  href,
  type = "button",
  variant = "filled", // 'filled' | 'outline'
  className = "",
  ...props
}) => {
  const combinedClassName = `btn-reusable btn-reusable-${variant} ${className}`;

  if (href) {
    return (
      <a href={href} className={combinedClassName} {...props}>
        {children}
      </a>
    );
  }

  return (
    <button type={type} className={combinedClassName} {...props}>
      {children}
    </button>
  );
};

export default Button;
