import LoginForm from "./LoginForm/LoginForm";
import styles from "./Login.module.css";

export const Login = () => {
  return (
    <div className={styles["container"]}>
      <LoginForm />
    </div>
  );
};
