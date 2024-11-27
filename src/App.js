import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UserList from "./components/UserManagement/UserList";
import RoleList from "./components/RoleManagement/RoleList";
import PermissionList from "./components/PermissionManagement/PermissionList";
import Dashboard from "./components/Shared/Dashboard";
import AddUser from "./components/UserManagement/AddUser";
import EditUser from "./components/UserManagement/EditUser";
import EditRole from "./components/RoleManagement/EditRole";
function App() {
  return (
    <Router>
      <div className="container">
        <h1 className="text-center mt-4">Role-Based Access Control</h1>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/add-user" element={<AddUser />} />
          <Route path="/edit-user/:id" element={<EditUser/>} />
          <Route path="/edit-role/:roleId" element={<EditRole />} />
          <Route path="/users" element={<UserList />} />
          <Route path="/roles" element={<RoleList />} />
          <Route path="/permissions" element={<PermissionList />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
