import React, { lazy, useEffect } from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import { themeChange } from "theme-change";
import checkAuth from "./app/auth";
import initializeApp from "./app/init";

// Importing pages
const Layout = lazy(() => import("./containers/Layout"));
const Login = lazy(() => import("./pages/Login"));
const ForgotPassword = lazy(() => import("./pages/ForgotPassword"));
const Register = lazy(() => import("./pages/Register"));
const Documentation = lazy(() => import("./pages/Documentation"));
const Templates = lazy(() => import("./pages/templates"));
const Steps = lazy(() => import("./pages/protected/Steps"));
const Editor = lazy(() => import("./pages/protected/Editor"));
// Initializing different libraries
initializeApp();

// Check for login and initialize axios
const token = checkAuth();

function App() {
  useEffect(() => {
    // 👆 daisy UI themes initialization
    themeChange(false);
  }, []);

  return (
    <>
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/register" element={<Register />} />
          <Route path="/documentation" element={<Documentation />} />
          <Route path="/templates" element={<Templates />} />
          <Route path="/steps" element={<Steps />} />
          {/* Place new routes over this */}
          <Route path="/app/*" element={<Layout />} />
          <Route path="/editor" element={<Editor />} />
          <Route
            path="*"
            element={<Navigate to={token ? "/templates" : "/login"} replace />}
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
