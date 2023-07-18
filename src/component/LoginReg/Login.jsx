import { FaEye, FaTimesCircle } from "react-icons/fa";
import Logo from "../Logo";
import styles from "../../styles/login-reg-styles/login.module.css";
import { useGlobalContent } from "../../context";

const Login = () => {
  const { setNavLoginReg } = useGlobalContent();

  return (
    <>
      <main className={styles.main}>
        <form>
          <Logo />
          <p>Log in or sign up</p>
          <div className={styles.inputEmail}>
            <div>
              <FaTimesCircle className={styles.eraseText} />
            </div>
            <input type="text" placeholder="Enter email or username" />
          </div>
          <div className={styles.inputPass}>
            <div>
              <FaEye className={styles.togglePass} />
            </div>
            <input type="password" placeholder="Enter password" />
          </div>
          <button>Sign in</button>
          <br />
          <button onClick={() => setNavLoginReg(true)}>Sign up</button>
        </form>
      </main>
    </>
  );
};

export default Login;
