import React from "react";
import styles from "./IconInput.module.css";

type IconInputProps = {
  placeholder?: string;
  value: string;
  disabled?: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: () => void;
  icon?: string;
  type?: React.HTMLInputTypeAttribute;
};

export const IconInput: React.FC<IconInputProps> = ({
  placeholder,
  value,
  disabled,
  onChange,
  onBlur,
  icon,
  type = "text",
}: IconInputProps) => {
  return (
    <div className={styles["container"]}>
      <div className={styles["input-wrapper"]}>
        {icon && (
          <i
            className={`fas ${icon} ${styles["icon"]}`}
            role="icon"
            aria-hidden="true"
          />
        )}
        <input
          type={type}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          placeholder={placeholder}
          disabled={disabled}
          className={styles["input"]}
        />
      </div>
    </div>
  );
};
