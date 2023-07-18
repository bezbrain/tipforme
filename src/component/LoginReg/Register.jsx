import Logo from "../Logo";
import styles from "../../styles/login-reg-styles/reg.module.css";
import { useGlobalContent } from "../../context";

const Register = () => {
  const { setNavLoginReg } = useGlobalContent();
  return (
    <main className={styles.main}>
      <div>
        <Logo />
      </div>
      <form>
        <div>
          <p>Enter your phone number</p>
          <p>We’ll text you a code so we can confirm that it’s you.</p>
        </div>
        <input type="number" placeholder="Phone number" />
        <div>
          <p>
            By tapping Send code, you’re confirming that you’re authorized to
            use the number entered and agree to receive SMS texts to verify you
            own the number. Carrier fees may apply.
          </p>
          <button>Send code</button>
          <p onClick={() => setNavLoginReg(false)}>Back to Login</p>
        </div>
      </form>
    </main>
  );
};

export default Register;
