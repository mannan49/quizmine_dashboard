import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import DashboardContent from "./pages/DashboardContent";
import LoginForm from "./components/Login/LoginForm";
import DashboardLayout from "./components/Layout/DashboardLayout";
import AddMcqsPage from "./pages/AddMcqsPage";
import AddSkillsPage from "./pages/AddSkillsPage";
import UsersPage from "./pages/UsersPage";
import EditMcqsPage from "./pages/EditMcqsPage";
import DisplayMcqsPage from "./pages/DisplayMcqsPage";
import UpdateMcqPage from "./pages/UpdateMcqPage";
import { SharedDataProvider } from "./functions/SharedDataContext";
import ProtectedRoute from "./functions/ProtectedRoute"; // Import the adjusted ProtectedRoute component

function App() {
  return (
    <SharedDataProvider>
      <div className="App">
        <Routes>
          <Route path="/login" element={<LoginForm />} />
          <Route
            path="/"
            element={
              <ProtectedRoute>
                <DashboardLayout />
              </ProtectedRoute>
            }
          >
            <Route index element={<DashboardContent />} />
            <Route path="/mcqs" element={<AddMcqsPage />} />
            <Route path="/edit" element={<EditMcqsPage />} />
            <Route path="/edit-mcqs" element={<DisplayMcqsPage />} />
            <Route path="/update-mcq/:id" element={<UpdateMcqPage />} />
            <Route path="/skills" element={<AddSkillsPage />} />
            <Route path="/users" element={<UsersPage />} />
          </Route>
        </Routes>
      </div>
    </SharedDataProvider>
  );
}

export default App;
