import React, { useState, useEffect } from "react";
import { fetchPermissions } from "../../api";

const PermissionList = () => {
  const [permissions, setPermissions] = useState([]);

  useEffect(() => {
    fetchPermissions().then((res) => {
      console.log(res.data); // Debugging
      setPermissions(res.data);
    });
  }, []);

  return (
    <div>
      <h2>Permission Management</h2>
      {permissions.length > 0 ? (
        <table className="table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Permission Name</th>
            </tr>
          </thead>
          <tbody>
            {permissions.map((permission) => (
              <tr key={permission.id}>
                <td>{permission.id}</td>
                <td>{permission.name}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No permissions available</p>
      )}
    </div>
  );
};

export default PermissionList;
