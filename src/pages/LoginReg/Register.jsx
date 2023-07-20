import Logo from "../../component/Logo";
import { FaTimesCircle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import styles from "../../styles/login-reg-styles/reg.module.css";
import { useGlobalContent } from "../../context";
import ShortFooter from "../../component/short-footer";

const Register = () => {
  const {
    navRegInput,
    setNavRegInput,
    regInputs,
    setRegInputs,
    phoneCodeInput,
    setPhoneCodeInput,
  } = useGlobalContent();

  const { firstName, lastName, username, email, password, confirmPassword } =
    regInputs;

  const navigate = useNavigate();

  const handleSendCode = (e) => {
    e.preventDefault();
    setNavRegInput(true);
  };

  const handleInputChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setRegInputs({
      ...regInputs,
      [name]: value,
    });
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
            <input
              type="number"
              placeholder="Phone number"
              value={phoneCodeInput}
              onChange={(e) => setPhoneCodeInput(e.target.value)}
            />
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
            <input
              type="text"
              placeholder="First Name"
              name="firstName"
              value={firstName}
              onChange={handleInputChange}
            />
          </section>
          <section className={styles.inputEmail}>
            <div>
              <FaTimesCircle className={styles.eraseText} />
            </div>
            <input
              type="text"
              placeholder="Last Name"
              name="lastName"
              value={lastName}
              onChange={handleInputChange}
            />
          </section>
          <section className={styles.inputEmail}>
            <div>
              <FaTimesCircle className={styles.eraseText} />
            </div>
            <input
              type="text"
              placeholder="Username"
              name="username"
              value={username}
              onChange={handleInputChange}
            />
          </section>
          <section className={styles.inputEmail}>
            <div>
              <FaTimesCircle className={styles.eraseText} />
            </div>
            <input
              type="text"
              placeholder="Email Address"
              name="email"
              value={email}
              onChange={handleInputChange}
            />
          </section>
          <section className={styles.inputPass}>
            <div>
              <FaTimesCircle className={styles.eraseText} />
            </div>
            <input
              type="password"
              placeholder="Enter password"
              name="password"
              value={password}
              onChange={handleInputChange}
            />
          </section>
          <section className={styles.inputPass}>
            <div>
              <FaTimesCircle className={styles.eraseText} />
            </div>
            <input
              type="password"
              placeholder="Confirm password"
              name="confirmPassword"
              value={confirmPassword}
              onChange={handleInputChange}
            />
          </section>
          <button type="submit">Sign up</button>
        </form>
      </main>
      <ShortFooter />
    </>
  );
};

export default Register;
