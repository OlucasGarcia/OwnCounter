import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Home from "../pages/Home";
import Login from "../pages/Login";
import Dashboard from "../pages/Dashboard";
import Transactions from "../pages/Transactions";
import Reports from "../pages/Reports";

export default function AppRoutes() {
    return (
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/transactions" element={<Transactions />} />
                <Route path="/reports" element={<Reports />} />
                
                <Route 
                    path="*" 
                    element={<Navigate to="/dashboard" replace />}
                />
            </Routes>
    );
}