

### Project Overview

The backend of the Employee Management Admin Panel is built with Node.js and Express. It provides the necessary APIs for managing employee information, including creating, reading, updating, and deleting employee records.

### Features

- **Authentication**: Secure login and logout functionality.
- **Employee Management**: APIs to add, edit, delete, and view employee details.
- **Validation**: Server-side validation for all input fields.
- **Image Upload**: Supports uploading employee images in jpg/png format.

### Technologies Used

- **Node.js**: JavaScript runtime for building server-side applications.
- **Express**: Web framework for Node.js.
- **MongoDB**: NoSQL database for storing employee data.
- **Mongoose**: ODM library for MongoDB and Node.js.


### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/yourusername/employee-management-backend.git
   cd employee-management-backend
   ```

2. **Install dependencies**:
```
   npm install
   ```

3. **Set up environment variables**:
   Create a `.env` file in the root directory and add the following variables:
   ```env
   PORT=5000
   MONGO_URI=your_mongo_connection_string
   
   ```

4. **Start the server**:
   ```bash
   npm run dev
   ```

### Usage

- **Authentication**: Use the login API to authenticate and obtain a JWT token.
- **Create Employee**: Use the create employee API to add new employee details.
- **Employee List**: Use the get employees API to fetch the list of employees.
- **Edit Employee**: Use the update employee API to modify existing employee details.
- **Delete Employee**: Use the delete employee API to remove employee records.

### API Endpoints

- **Login**: `/api/auth/login`
- **Create Employee**: `/api/employees`
- **Get Employees**: `/api/employees`
- **Update Employee**: `/api/employees/:id`
- **Delete Employee**: `/api/employees/:id`




### License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

Feel free to ask if you have any questions or need further assistance!
