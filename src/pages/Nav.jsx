import { Link, useLocation } from "react-router-dom";
import { FaUserCircle, FaCaretDown } from "react-icons/fa";
import Logo from "../component/Logo";
import styles from "../styles/nav.module.css";

const Nav = () => {
  const location = useLocation();

  return (
    <header
      className={styles.header}
      style={{
        backgroundColor: location.pathname === "/" ? "#b5864a" : "#fff",
      }}
    >
      <Logo />
      <nav>
        <ul>
          <div>
            <li>
              Send & Receive
              <FaCaretDown />
            </li>
            <section>
              <Link>How it works</Link>
              <Link>Fund Account</Link>
              <Link>Tip Person</Link>
              <Link>Manage Balance</Link>
            </section>
          </div>
          <li>
            <Link>Help Center</Link>
          </li>
          <li>
            <Link>Login</Link>
          </li>
          <li>
            <Link>
              Profile <FaUserCircle />
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Nav;
