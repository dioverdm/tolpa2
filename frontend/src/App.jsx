import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";

function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      {/* <ProtectedRoute path="/chat" element={<ChatSection />} /> */}
    </Routes>
  );
}

export default App;
