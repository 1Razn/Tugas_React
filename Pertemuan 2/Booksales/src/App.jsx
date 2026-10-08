import { BrowserRouter, Routes, Route } from "react-router";
import MainLayout from "./components/layout/MainLayout";
import AuthLayout from "./components/layout/AuthLayout";
import Home from "./Pages";
import Books from "./Pages/Books";
import Login from "./Pages/auth/Login";
import Register from "./Pages/auth/Register";
import Teams from "./Pages/Team";
import Contacts from "./Pages/Contact";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public Routes dengan MainLayout */}
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/books" element={<Books />} />
          <Route path="/team" element={<Teams />} />
          <Route path="/contact" element={<Contacts />} />
        </Route>

        {/* Auth Routes dengan AuthLayout */}
        <Route element={<AuthLayout />}>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;