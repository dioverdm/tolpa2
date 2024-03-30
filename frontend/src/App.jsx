import { Route, Routes } from "react-router-dom";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import ProtectedRoute from "./components/route/ProtectedRoute";
import Home from "./components/home/Home";

function App() {
  return (
    <Routes>
      <Route path="/" element={<ProtectedRoute Component={Home} />} >
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
      </Route>
    </Routes>
  );
}

export default App;
