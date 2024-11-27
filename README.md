
# RBAC (Role-Based Access Control) UI

This project is a Role-Based Access Control (RBAC) UI system that allows administrators to manage users, roles, and permissions in a web application. The application allows users to:
- Create, view, edit, and delete users
- Assign roles to users
- Create, view, edit, and delete roles
- Manage permissions (Read, Write, Delete) for each role

The front end is built using **React.js** and it communicates with a backend API to manage users, roles, and permissions.



## Features

- **User Management**:
  - Add new users with roles and status.
  - Edit user details and update roles or status.
  - Delete users from the system.
  - Display a list of all users with details like name, role, and status.

- **Role Management**:
  - Add new roles with specified permissions.
  - Edit existing roles and their permissions.
  - Delete roles from the system.
  - Display a list of all roles with assigned permissions.

- **Permission Management**:
  - Each role can have specific permissions assigned to it (Read, Write, Delete).
  - Permissions can be assigned when creating or editing roles.

- **Dashboard**:
  - Displays key statistics about the system, including:
    - Total number of users.
    - Total number of roles.
    - Total number of permissions.


## Tech Stack


- **Frontend**: 
  - **React.js** for building the user interface.
  - **React Router DOM** for navigation and routing.
  - **CSS** for styling (custom styles defined in CSS files).
  - **useState** and **useEffect** hooks for state management and component lifecycle.
  
- **Backend** (assumed to be implemented):
  - **JSON Server**: A simple API built using a `db.json` file to store the data (users, roles, permissions).
  - **API Handling**: The front-end communicates with the API using the `api.js` file that provides functions for CRUD operations on users, roles, and permissions.

- **State Management**: 
  - **React State**: `useState` for managing state variables for users, roles, and permissions.
  
- **Routing**:
  - **React Router**: Used to navigate between different pages of the application (e.g., User Management, Role Management, Dashboard).

## Installation


Follow these steps to get the project up and running on your local machine.

**1.Clone the Repository**\
Clone this repository to your local machine.
```bash
  git clone https://github.com/LeelaDeepak2468/RBAC_ProjectWork.git
 cd role-management-system
```
**2.Install Dependencies**\
Install the necessary dependencies for the frontend and backend.

**Frontend Dependencies (React):**\
In the root directory, run the following command to install the frontend dependencies:
```bash
  npm install npm install react-router-dom axios react-bootstrap bootstrap

```
**JSON Server:**\
Install JSON Server globally if you don’t have it already:
```bash
  npm install -g json-server
```
**3. Start the Application**\
**Start JSON Server**\
To start the JSON Server, use the following command:
```bash
   json-server --watch db.json --port 5000
```
This will start the mock backend server on http://localhost:5000.

**Start Frontend Server**\
To start the React application:
```bash
   npm start
```
**4. Access the Application**\
Once both the JSON Server and the frontend are running, you can access the Role Management System by navigating to http://localhost:3000 in your browser.



## How to Use

**Add  User and Role**
- Navigate to the **Users** section.
- Click **Add User**.
- Enter a name, **select a role**, and set the user status.
- Click **Add Use** to create the user.
**Delete a User**
- Navigate to the **Users** Section
- Click the Delete button next to the **User** you want to remove.
**Edit a Role**
- Navigate to the Roles section.
- Click on a role to edit.
- Update the permissions.
- Click Save Changes.
**Delete a Role**
- Navigate to the Roles section.
- Click the Delete button next to the role you want to remove.


## API Reference

#### /users
- GET: Fetch all users.
- POST: Add a new user.

#### /roles
- GET: Fetch all records
- POST: Add a new role.
- PUT: Update a role by ID.
- DELETE: Delete a role by ID.

#### /permissions
- GET: Fetch available permissions.




## Contributing

We welcome contributions! If you would like to contribute to this project, please follow these steps:

- Fork the repository.
- Create a new branch.
- Make your changes.
- Commit your changes with a clear message.
- Push to your forked repository.
- Open a pull request.

## Acknowledgements

 - This project was built to demonstrate role-based access control using React and JSON Server.
- Thanks to the open-source community for their contributions to various libraries and tools.

