import Login from "../component/LoginReg/Login";
import Register from "../component/LoginReg/Register";
import { useGlobalContent } from "../context";
import ShortFooter from "../component/short-footer";

const LoginReg = () => {
  const { navLoginReg } = useGlobalContent();

  return (
    <main style={{ height: "85vh" }}>
      {!navLoginReg && <Login />}
      {navLoginReg && <Register />}
    </main>
  );
};

export default LoginReg;
