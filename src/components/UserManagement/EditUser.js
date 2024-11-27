import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom"; // Import useNavigate
import { fetchUsers, updateUser } from "../../api";
import './add.css';

const EditUser = () => {
  const { id } = useParams(); // Get the user ID from the URL
  const navigate = useNavigate(); // Use useNavigate for programmatic navigation
  const [user, setUser] = useState({
    name: "",
    role: "",
    status: "Active",
  });

  // Fetch the user details based on the ID
  useEffect(() => {
    fetchUsers().then((res) => {
      const selectedUser = res.data.find((user) => user.id === parseInt(id));
      if (selectedUser) {
        setUser(selectedUser);
      }
    });
  }, [id]);

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    updateUser(id, user).then(() => {
      navigate("/users"); // Use navigate to redirect to the user list page
    });
  };

  return (
    <div className="edit-user-container">
      <div className="card">
        <h2>Edit User</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Name</label>
            <input
              type="text"
              name="name"
              value={user.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Role</label>
            <input
              type="text"
              name="role"
              value={user.role}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Status</label>
            <select
              name="status"
              value={user.status}
              onChange={handleChange}
              required
            >
              <option value="Active">Active</option>
              <option value="Inactive">Inactive</option>
            </select>
          </div>
          <div className="form-actions">
            <button type="submit" className="btn btn-primary">
              Save Changes
            </button>
            <button
              type="button"
              className="btn btn-secondary"
              onClick={() => navigate("/users")}
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditUser;
