import { BrowserRouter, Routes, Route } from "react-router-dom";
// import LoginReg from "./pages/LoginReg";
import SharedLayouts from "./pages/SharedLayouts";
import Home from "./pages/Home";
import Error from "./pages/Error";
import { useGlobalContent } from "./context";
import Login from "./component/LoginReg/Login";
import Register from "./component/LoginReg/Register";

const App = () => {
  const { navLoginReg } = useGlobalContent();

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SharedLayouts />}>
          <Route index element={<Home />} />
          <Route path="*" element={<Error />} />
        </Route>
        <Route path="signin" element={<Login />} />
        <Route path="signup" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
