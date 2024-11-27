import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { fetchRoleById, updateRole } from "../../api";
import './role.css';

const EditRole = () => {
  const { roleId } = useParams(); // Get the role ID from the route
  const navigate = useNavigate();
  const [role, setRole] = useState({ name: "", permissions: [] });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const allPermissions = ["Read", "Write", "Delete"]; // Checkbox options

  // Fetch the role details by ID
  useEffect(() => {
    const getRoleDetails = async () => {
      try {
        const res = await fetchRoleById(roleId);
        // Ensure permissions is always an array, fallback to empty array if undefined
        setRole({
          ...res.data,
          permissions: Array.isArray(res.data.permissions) ? res.data.permissions : [],
        });
      } catch (error) {
        console.error("Failed to fetch role details:", error);
        setError("Failed to load role details.");
      }
    };

    getRoleDetails();
  }, [roleId]);

  // Handle permission checkbox changes
  const handlePermissionChange = (permission) => {
    setRole((prevRole) => {
      const updatedPermissions = prevRole.permissions.includes(permission)
        ? prevRole.permissions.filter((p) => p !== permission) // Remove if already selected
        : [...prevRole.permissions, permission]; // Add if not selected

      return { ...prevRole, permissions: updatedPermissions };
    });
  };

  // Handle form submission
  const handleSave = async (e) => {
    e.preventDefault();
    try {
      await updateRole(roleId, role); // API to update the role
      setSuccess("Role updated successfully.");
      setError("");
      navigate("/roles"); // Redirect to RoleList after updating
    } catch (err) {
      setError("Failed to update role.");
      console.error(err);
    }
  };

  return (
    <div className="form-container">
      <div className="card">
        <h3>Edit Role</h3>
        <form onSubmit={handleSave}>
          <div className="form-group">
            <label>Role Name:</label>
            <input
              type="text"
              value={role.name}
              readOnly // Role name is not editable
            />
          </div>
          <div className="form-group">
            <label>Permissions:</label>
            <div className="checkbox-group">
              {allPermissions.map((permission) => (
                <div key={permission} className="checkbox-item">
                  <input
                    type="checkbox"
                    value={permission}
                    checked={role.permissions && role.permissions.includes(permission)} // Safely check permissions
                    onChange={() => handlePermissionChange(permission)}
                  />
                  <label>{permission}</label>
                </div>
              ))}
            </div>
          </div>
          <button type="submit" className="btn btn-success">
            Save Changes
          </button>
        </form>

        {error && <p style={{ color: "red" }}>{error}</p>}
        {success && <p style={{ color: "green" }}>{success}</p>}
      </div>
    </div>
  );
};

export default EditRole;
