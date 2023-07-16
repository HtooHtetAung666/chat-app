import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Login } from "./pages/Login";
import { Chat } from "./pages/Chat";
import { Navbar } from "./components/Navbar";
import { PrivateRoute } from "./routes/PrivateRoute";
import { AuthProvider } from "./context/AuthContext";

function App() {
  return (
  <AuthProvider>
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Login/>} />
        <Route path="/chat" element={<PrivateRoute><Chat/></PrivateRoute>} />
      </Routes>
    </Router>
  </AuthProvider>
  );
}

export default App;
