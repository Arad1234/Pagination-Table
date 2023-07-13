# Weft Assignment

This project is a web application that displays a table of users with their name, email, and address. The user interface is designed using Material-UI (MUI) and MUI Data Grid. When a user clicks on a row, they will be navigated to a different URL displaying the user's posts. The project utilizes an external API to fetch user data and implements pagination. For the posts, it initially retrieves data from an external API and stores it in a MySQL Docker container using the Prisma ORM. The stack for this project includes React, TypeScript, React Query, Node.js, Express, MySQL, Prisma, and Zod for validation.

## Features

- Display a table of users with columns for name, email, and address.
- Design the user interface using Material-UI (MUI) and MUI Data Grid.
- Clicking on a user row navigates to a separate URL displaying the user's posts.
- Implement pagination for fetching user data from an external API.
- Fetch initial data for posts from an external API and store it in a MySQL Docker container using Prisma ORM.
- Utilize React, TypeScript, React Query, Node.js, Express, MySQL, Prisma, Docket, and Zod for validation.

## Installation

1. Clone the repository:

   ```shell
   https://github.com/Arad1234/home-assignment1.git
   ```

2. Install dependencies:

   ```shell
   cd client
   npm install
   cd server
   npm install
   ```

3. Set up the MySQL Docker container:

   - Make sure you have Docker installed on your system.
   - Run the following command to pull the MySQL Docker image:

     ```shell
     docker pull mysql:5.7.42
     ```

   - Start the MySQL container:

     ```shell
     docker run -d --name mysql-container -p 3306:3306 -e MYSQL_ROOT_PASSWORD=your_password mysql
     ```
     
     Replace `your_password` with the desired password for the MySQL root user.

4. Configure the Prisma connection:

   - Update the `DB_URL` in the `.env` file with your MySQL connection details.

5. Start the development server:

   ```shell
   npx nodemon
   ```

6. Open the application in your browser:

   ```
   http://localhost:5173
   ```

## Usage

- Browse the table of users, sorted by name.
- Click on a user row to navigate to their posts.
- Use pagination to navigate through the list of users.
- Explore the application and interact with the user interface.
