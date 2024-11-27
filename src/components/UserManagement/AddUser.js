import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { addRole, addUser, fetchUsers, fetchRoles, fetchPermissions,totalPermissions,updateTotalRoles,updateDashboardStats, updateTotalUsers } from "../../api";
import "./add.css"; // Importing CSS file for styling

const AddUser = () => {
  const [newUser, setNewUser] = useState({ name: "", role: "", status: "Active" });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [userCount, setUserCount] = useState(0);
  const [roleCount, setRoleCount] = useState(0);
  const navigate = useNavigate(); // Initialize useNavigate hook
  const [tp,setTp]=useState(0);

  // Fetch counts on load
  useEffect(() => {
    const fetchCounts = async () => {
      try {
        const users = await fetchUsers();
        const roles = await fetchRoles();
        const Permissions= await fetchPermissions();
        setUserCount(users.data.length);
        setRoleCount(roles.data.length);
        setTp(Permissions.data.length)
      } catch (err) {
        console.error("Failed to fetch counts:", err);
      }
    };
    fetchCounts();
  }, []);

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewUser({ ...newUser, [name]: value });
  };

  // Handle form submission
  const handleAddUser = async (e) => {
    e.preventDefault();
    try {
      if (!newUser.name || !newUser.role) {
        setError("Name and Role are required.");
        return;
      }
      await addUser(newUser);
      await addRole(newUser.role);

      // Update counts
      setUserCount(userCount + 1);
      setRoleCount(roleCount+ 1);
      
      await updateDashboardStats(userCount + 1, roleCount + 1, tp);
      setSuccess("User added successfully.");
      setError("");
      setNewUser({ name: "", role: "", status: "Active" }); // Reset form

      // Redirect to UserList page
      navigate("/users");
    } catch (err) {
      setError("Failed to add user. Please try again.");
      console.error(err);
    }
  };

  return (
    <div className="form-container">
      <div className="card">
        
        <form onSubmit={handleAddUser}>
          <div className="form-group">
            <label>Name:</label>
            <input
              type="text"
              name="name"
              value={newUser.name}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Role:</label>
            <input
              type="text"
              name="role"
              value={newUser.role}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Status:</label>
            <select
              name="status"
              value={newUser.status}
              onChange={handleInputChange}
            >
              <option value="Active">Active</option>
              <option value="Inactive">Inactive</option>
            </select>
          </div>
          <button type="submit" className="submit-button">
            Add User
          </button>
        </form>

        {/* Success/Error Messages */}
        {error && <p style={{ color: "red" }}>{error}</p>}
        {success && <p style={{ color: "green" }}>{success}</p>}
      </div>
    </div>
  );
};

export default AddUser;
