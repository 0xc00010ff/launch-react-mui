import { useColorScheme } from "@mui/joy/styles";
import { useEffect } from "react";
import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";

import Dashboard from "./dashboard";

export default function Pages() {
  const { setMode } = useColorScheme();
  useEffect(() => {
    setMode("dark");
  }, [setMode]);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/dashboard" />} />
        <Route path="/dashboard/*" element={<Dashboard />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
}
