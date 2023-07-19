import { FaEye, FaTimesCircle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import Logo from "../../component/Logo";
import styles from "../../styles/login-reg-styles/login.module.css";
import { useGlobalContent } from "../../context";
import ShortFooter from "../../component/short-footer";

const Login = () => {
  const { navLoginReg, setNavLoginReg } = useGlobalContent();

  const navigate = useNavigate();
  const handleToSignUp = (e) => {
    e.preventDefault();
    navigate("/signup"); //To dynamically change the path to signup
  };

  return (
    <>
      <main className={styles.main} style={{ height: "85vh" }}>
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
          <button onClick={handleToSignUp}>Sign up</button>
        </form>
      </main>
      <ShortFooter />
    </>
  );
};

export default Login;
