import React, { useState, useEffect } from "react";
import { fetchUsers, deleteUser } from "../../api";
import './add.css'; // Make sure you have the custom CSS for styling
import { Link } from "react-router-dom";

const UserList = () => {
  const [users, setUsers] = useState([]);

  // Fetch users when the component is mounted
  useEffect(() => {
    fetchUsers().then((res) => setUsers(res.data));
  }, []);

  // Delete user handler
  const handleDelete = (id) => {
    deleteUser(id).then(() => setUsers(users.filter((user) => user.id !== id)));
  };

  return (
    <div className="user-list-container">
      <h2>User Management</h2>
      <table className="user-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Role</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.role}</td>
              <td>{user.status}</td>
              <td>
                <Link to={`/edit-user/${user.id}`} className="btn btn-warning">
                  Edit
                </Link>
                <button
                  className="btn btn-danger"
                  onClick={() => handleDelete(user.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="add-user-btn">
        <Link to="/add-user" className="btn btn-primary">
          Add User
        </Link>
      </div>
    </div>
  );
};

export default UserList;
