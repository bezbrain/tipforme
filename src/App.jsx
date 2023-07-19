import { BrowserRouter, Routes, Route } from "react-router-dom";
import SharedLayouts from "./pages/SharedLayouts";
import Home from "./pages/Home";
import Error from "./pages/Error";
import Login from "./pages/LoginReg/Login";
import Register from "./pages/LoginReg/Register";

const App = () => {
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
