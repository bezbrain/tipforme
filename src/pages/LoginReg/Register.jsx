import Logo from "../../component/Logo";
import { FaTimesCircle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import styles from "../../styles/login-reg-styles/reg.module.css";
import { useGlobalContent } from "../../context";
import ShortFooter from "../../component/short-footer";

const Register = () => {
  const { navRegInput, setNavRegInput } = useGlobalContent();

  const navigate = useNavigate();

  const handleSendCode = (e) => {
    e.preventDefault();
    setNavRegInput(true);
  };

  if (!navRegInput) {
    return (
      <>
        <main className={styles.main} style={{ height: "85vh" }}>
          <div>
            <Logo />
          </div>
          <form onSubmit={handleSendCode} style={{ height: "70%" }}>
            <div>
              <p>Enter your phone number</p>
              <p>We’ll text you a code so we can confirm that it’s you.</p>
            </div>
            <input type="number" placeholder="Phone number" />
            <div>
              <p>
                By tapping Send code, you’re confirming that you’re authorized
                to use the number entered and agree to receive SMS texts to
                verify you own the number. Carrier fees may apply.
              </p>
              <button type="submit">Send code</button>
              <p onClick={() => navigate("/signin")}>Back to Login</p>
            </div>
          </form>
        </main>
        <ShortFooter />
      </>
    );
  }
  return (
    <>
      <main className={styles.main} style={{ height: "80vh" }}>
        <form style={{ height: "fitContent" }}>
          <Logo />
          <p>Complete Registration</p>
          <section className={styles.inputEmail}>
            <div>
              <FaTimesCircle className={styles.eraseText} />
            </div>
            <input type="text" placeholder="First Name" />
          </section>
          <section className={styles.inputEmail}>
            <div>
              <FaTimesCircle className={styles.eraseText} />
            </div>
            <input type="text" placeholder="Last Name" />
          </section>
          <section className={styles.inputEmail}>
            <div>
              <FaTimesCircle className={styles.eraseText} />
            </div>
            <input type="text" placeholder="Username" />
          </section>
          <section className={styles.inputEmail}>
            <div>
              <FaTimesCircle className={styles.eraseText} />
            </div>
            <input type="text" placeholder="Email Address" />
          </section>
          <section className={styles.inputPass}>
            <div>
              <FaTimesCircle className={styles.eraseText} />
            </div>
            <input type="password" placeholder="Enter password" />
          </section>
          <section className={styles.inputPass}>
            <div>
              <FaTimesCircle className={styles.eraseText} />
            </div>
            <input type="password" placeholder="Confirm password" />
          </section>
          <button type="submit">Sign up</button>
        </form>
      </main>
      <ShortFooter />
    </>
  );
};

export default Register;
