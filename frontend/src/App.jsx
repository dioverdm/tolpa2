import { Route, Routes } from "react-router-dom";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import ProtectedRoute from "./components/route/ProtectedRoute";
import Home from "./components/home/Home";

function App() {
  return (
    <Routes>
      <Route path="/" >
        <Route index element={<ProtectedRoute Component={Home} />} />
        <Route index element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
      </Route>
    </Routes>
  );
}

export default App;
