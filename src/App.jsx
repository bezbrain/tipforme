import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginReg from "./pages/LoginReg";
import SharedLayouts from "./pages/SharedLayouts";
import Home from "./pages/Home";
import Error from "./pages/Error";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SharedLayouts />}>
          <Route index element={<Home />} />
          <Route path="*" element={<Error />} />
        </Route>
        <Route path="signin" element={<LoginReg />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
