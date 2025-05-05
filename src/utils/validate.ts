export const validateEmail = (email: string) => {
  if (!email) {
    return "Email is required.";
  }

  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!re.test(String(email).toLowerCase())) {
    return "Email is invalid.";
  }

  return "";
};

export const validatePassword = (password: string) => {
  if (!password) {
    return "Password is required.";
  }

  if (password.length < 6) {
    return "Password must be at least 6 characters.";
  }

  return "";
};

export const validateForm = (
  email: string,
  password: string
): string | null => {
  let errorMessage = "";

  errorMessage = validateEmail(email);

  if (!errorMessage) {
    errorMessage = validatePassword(password);
  }

  return errorMessage;
};
