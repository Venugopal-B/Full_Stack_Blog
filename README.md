# Full Stack Blog Website

## Overview
This is a full-stack blog website built with a client and server architecture. The project is divided into two main folders: `API` and `Client`. The `Client` folder contains the frontend code, while the `API` folder contains the backend code.

## Folder Structure
- **Client**: Contains the React.js frontend application.
- **API**: Contains the Node.js backend application.

## Prerequisites
Ensure you have the following installed on your machine:
- Node.js (which includes npm)
- PostgreSQL
- pgAdmin (for managing your PostgreSQL database)
- Visual Studio Code (or any preferred code editor)

## Getting Started

### Database Setup
1. **Install PostgreSQL:**
   - Download and install PostgreSQL from the official website: [PostgreSQL Downloads](https://www.postgresql.org/download/)
   
2. **Install pgAdmin:**
   - Download and install pgAdmin from the official website: [pgAdmin Downloads](https://www.pgadmin.org/download/)

3. **Create a Database:**
   - Open pgAdmin and connect to your PostgreSQL server.
   - Create a new database for the project.

4. **Configure Database Connection:**
   - Open the `db.js` file located in the `API` folder.
   - Replace the `database name`, `username`, and `password` placeholders with your actual database details.

### Project Setup

1. **Download the Project:**
   - Clone or download the project repository to your local machine.

2. **Open the Project:**
   - Open the project directory in Visual Studio Code.

### Running the Client

1. **Navigate to the Client Directory:**
   - Open the terminal in Visual Studio Code.
   - Navigate to the `Client` directory:
     ```bash
     cd Client
     ```

2. **Install Dependencies:**
   - In the terminal, run the following command to install the necessary dependencies:
     ```bash
     npm install
     ```

3. **Run the Client:**
   - To start the client development server, run:
     ```bash
     npm run dev
     ```

### Running the API

1. **Navigate to the API Directory:**
   - Open the terminal in Visual Studio Code.
   - Navigate to the `API` directory:
     ```bash
     cd API
     ```

2. **Install Dependencies:**
   - In the terminal, run the following command to install the necessary dependencies:
     ```bash
     npm install
     ```

3. **Run the API:**
   - To start the API server and run tests, run:
     ```bash
     npm test
     ```

## Contributing

If you wish to contribute to this project, please follow the standard guidelines for pull requests and issues.



## Contact

For any questions or feedback, please reach out to the project maintainers.

---

Happy coding! 🚀
