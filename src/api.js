import axios from "axios";

const API_URL = "http://localhost:5000";
const BASE_URL = "http://localhost:5000";

export const fetchUsers = () => axios.get(`${API_URL}/users`);
export const addUser = (user) => axios.post(`${API_URL}/users`, user);
export const updateUser = (id, user) => axios.put(`${API_URL}/users/${id}`, user);
export const deleteUser = (id) => axios.delete(`${API_URL}/users/${id}`);

export const fetchRoles = () => axios.get(`${API_URL}/roles`);
export const deleteRole = (id) => axios.delete(`${API_URL}/roles/${id}`);

export const fetchPermissions = () => axios.get(`${API_URL}/permissions`);

// Fetch dashboard stats
export const fetchDashboardStats = async () => {
  try {
    const response = await axios.get(`${API_URL}/dashboard`);
    return response.data;
  } catch (error) {
    console.error("Error fetching dashboard stats:", error);
    throw error;
  }
};

// Add a new role
export const addRole = async (role) => {
  try {
    const response = await fetch(`${API_URL}/roles`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name: role }),
    });

    if (!response.ok) {
      throw new Error("Failed to add role.");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error in addRole:", error);
    throw error;
  }
};

// Fetch a role by ID
export const fetchRoleById = async (roleId) => {
  return await axios.get(`${API_URL}/roles/${roleId}`);
};

// Update role
export const updateRole = async (roleId, roleData) => {
  return await axios.put(`${API_URL}/roles/${roleId}`, roleData);
};

export const updateDashboardStats = async (totalUsers, totalRoles, totalPermissions) => {
  try {
    const response = await axios.put(`${API_URL}/dashboard`, {
      totalUsers: totalUsers,
      totalRoles: totalRoles,
      totalPermissions: totalPermissions
    });
    return response.data;
  } catch (error) {
    console.error("Error updating dashboard:", error);
    throw error;
  }
};
// Update the dashboard
export const updateDashboard = async (dashboard) => {
  try {
    const response = await axios.put(`${API_URL}/dashboard`, dashboard);
    return response.data;
  } catch (error) {
    console.error("Error updating dashboard:", error);
    throw error;
  }
};

// Update total users in the dashboard
export const updateTotalUsers = async (newTotal) => {
  try {
    const response = await axios.put(`${API_URL}/dashboard`, { totalUsers: newTotal });
    return response.data;
  } catch (error) {
    console.error("Error updating total users:", error);
    throw error;
  }
};

// Update total permissions in the dashboard
export const updateTotalPermissions = async (newTotal) => {
  try {
    const response = await axios.put(`${API_URL}/dashboard`, { totalPermissions: newTotal });
    return response.data;
  } catch (error) {
    console.error("Error updating total permissions:", error);
    throw error;
  }
};

// Update total roles in the dashboard
export const updateTotalRoles = async (newTotal) => {
  try {
    const response = await axios.put(`${API_URL}/dashboard`, { totalRoles: newTotal });
    return response.data;
  } catch (error) {
    console.error("Error updating total roles:", error);
    throw error;
  }
};
