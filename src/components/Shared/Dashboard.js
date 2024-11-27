import React, { useEffect, useState } from "react";
import { fetchDashboardStats } from "../../api";
import { Link } from "react-router-dom";

const Dashboard = () => {
  const [stats, setStats] = useState({
    totalUsers: 0,
    totalRoles: 0,
    totalPermissions: 0,
  });

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const data = await fetchDashboardStats();
        setStats(data);
        console.log(data);
        setLoading(false);
      } catch (err) {
        setError("Failed to load dashboard statistics");
        setLoading(false);
      }
    };

    fetchStats();
  }, []);

  if (loading) return <p>Loading dashboard...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="container my-4">
      <h2 className="text-center">RBAC Admin Dashboard</h2>
      <div className="row mt-5">
        <div className="col-md-4">
          <div className="card text-center">
            <div className="card-body">
              <h5 className="card-title">Total Users</h5>
              <p className="card-text">{stats.totalUsers}</p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card text-center">
            <div className="card-body">
              <h5 className="card-title">Total Roles</h5>
              <p className="card-text">{stats.totalRoles}</p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card text-center">
            <div className="card-body">
              <h5 className="card-title">Total Permissions</h5>
              <p className="card-text">{stats.totalPermissions}</p>
            </div>
          </div>
        </div>
      </div>
    

    <div className="row mt-5">
        <div className="col-md-4">
          <div className="card text-center">
            <div className="card-body">
              <h5 className="card-title">User Management</h5>
              <p className="card-text">
                Manage users, assign roles, and control user statuses.
              </p>
              <Link to="/users" className="btn btn-primary">
                Go to Users
              </Link>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card text-center">
            <div className="card-body">
              <h5 className="card-title">Role Management</h5>
              <p className="card-text">
                Create, edit, and manage roles with associated permissions.
              </p>
              <Link to="/roles" className="btn btn-primary">
                Go to Roles
              </Link>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card text-center">
            <div className="card-body">
              <h5 className="card-title">Permission Management</h5>
              <p className="card-text">
                View and manage system-wide permissions for roles.
              </p>
              <Link to="/permissions" className="btn btn-primary">
                Go to Permissions
              </Link>
            </div>
          </div>
        </div>
      </div>
      </div>
  );
};

export default Dashboard;
