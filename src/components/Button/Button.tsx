import React from "react";
import styles from "./Button.module.css";

type ButtonProps = {
  type?: "button" | "submit" | "reset";
  isLoading?: boolean;
  disabled?: boolean;
  className?: string;
  children: React.ReactNode;
  onClick?: () => void;
};

export const Button: React.FC<ButtonProps> = ({
  type = "button",
  isLoading = false,
  disabled = false,
  className = "",
  children,
  onClick,
}) => {
  const isDisabled = isLoading || disabled;

  return (
    <button
      type={type}
      disabled={isDisabled}
      className={`${styles["button"]} ${
        isLoading ? styles["loading"] : ""
      } ${className}`}
      onClick={onClick}
      role="button"
    >
      {isLoading ? (
        <span className={styles["spinner"]} aria-hidden="true" />
      ) : (
        children
      )}
    </button>
  );
};
