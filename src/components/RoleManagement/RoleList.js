import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { fetchRoles, deleteRole } from "../../api";
import './role.css';

const RoleList = () => {
  const [roles, setRoles] = useState([]);
  const navigate = useNavigate(); // For navigation

  useEffect(() => {
    const getRoles = async () => {
      try {
        const res = await fetchRoles();
        setRoles(res.data || []); // Ensure roles is an array
      } catch (error) {
        console.error("Failed to fetch roles:", error);
        setRoles([]); // Set an empty array if the fetch fails
      }
    };

    getRoles();
  }, []);

  const handleDelete = async (id) => {
    try {
      await deleteRole(id);
      setRoles((prevRoles) => prevRoles.filter((role) => role.id !== id));
    } catch (error) {
      console.error("Failed to delete role:", error);
    }
  };

  const handleEdit = (roleId) => {
    navigate(`/edit-role/${roleId}`); // Navigate to the edit page with role ID
  };

  return (
    <div>
      <h2>Role Management</h2>
      <table className="table">
        <thead>
          <tr>
            <th>Role</th>
            <th>Permissions</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {roles.map((role) => (
            <tr key={role.id}>
              <td>{role.name || "N/A"}</td>
              <td>
                {Array.isArray(role.permissions)
                  ? role.permissions.join(", ")
                  : "No Permissions"}
              </td>
              <td>
                <button
                  className="btn btn-danger"
                  onClick={() => handleDelete(role.id)}
                >
                  Delete
                </button>
                <button
                  className="btn btn-primary"
                  onClick={() => handleEdit(role.id)}
                  style={{ marginLeft: "10px" }}
                >
                  Edit
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default RoleList;
