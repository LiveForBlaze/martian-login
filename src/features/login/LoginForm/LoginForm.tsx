import React, { useState } from "react";
import styles from "./LoginForm.module.css";
import { Button, IconInput } from "@components";
import { validateEmail, validatePassword, validateForm } from "@utils/validate";
import { delay } from "@utils/delay";

const LoginForm: React.FC = () => {
  // State
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  // Handlers
  const handleChange =
    (setter: React.Dispatch<React.SetStateAction<string>>) =>
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setter(e.target.value);
      setError("");
    };

  const handleBlur = (field: "email" | "password") => () => {
    let error = "";
    if (field === "email") {
      error = validateEmail(email);
    } else {
      error = validatePassword(password);
    }

    if (error) {
      setError(error);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (error) {
      return;
    }

    const validationError = validateForm(email, password);
    if (validationError) {
      setError(validationError);
      return;
    }

    setIsSubmitting(true);
    try {
      await delay(1500);
      setSuccess(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleReset = () => {
    setEmail("");
    setPassword("");
    setError("");
    setSuccess(false);
  };

  // Render success screen
  if (success) {
    return (
      <div className={styles["success-message"]}>
        <h2 role="heading">Login Successful!</h2>
        <Button onClick={handleReset}>Back to Login</Button>
      </div>
    );
  }

  // Render form
  return (
    <div className={styles["login-container"]}>
      <h2 className={styles["login-title"]}>
        MARTIAN <i className="fa-solid fa-rocket" aria-hidden="true"></i> LOGIN
      </h2>
      <form onSubmit={handleSubmit} noValidate>
        <IconInput
          placeholder="Email"
          icon="fa-envelope"
          value={email}
          disabled={isSubmitting}
          onChange={handleChange(setEmail)}
          onBlur={handleBlur("email")}
        />

        <IconInput
          type="password"
          placeholder="Password"
          icon="fa-lock"
          value={password}
          disabled={isSubmitting}
          onChange={handleChange(setPassword)}
          onBlur={handleBlur("password")}
        />

        <div className={styles["form-error"]} aria-live="polite" role="alert">
          {error}
        </div>

        <Button type="submit" disabled={isSubmitting} isLoading={isSubmitting}>
          Login
        </Button>
      </form>
    </div>
  );
};

export default LoginForm;
