import Login from "../component/LoginReg/Login";
import Register from "../component/LoginReg/Register";
import { useGlobalContent } from "../context";
import ShortFooter from "./short-footer";

const LoginReg = () => {
  const { navLoginReg } = useGlobalContent();

  return (
    <main style={{ height: "85vh" }}>
      {!navLoginReg && <Login />}
      {navLoginReg && <Register />}
      <ShortFooter />
    </main>
  );
};

export default LoginReg;
