# Task Management Application

## Overview

This is a simple **Task Management Application** built using **React** and **React-Bootstrap**. It allows users to create, edit, delete, and track the status of tasks. The application is designed to help users manage tasks by categorizing them into **All**, **Done**, and **UnDone** categories with a dynamic user interface (UI) and responsive design.

---

## Features

- **Task Creation**: Create new tasks with a title and description.
- **Task Editing**: Edit task details (title and description).
- **Task Deletion**: Delete tasks with a confirmation modal.
- **Task Completion**: Mark tasks as completed or not completed, with visual feedback.
- **Toast Notifications**: Success/error messages displayed via toast notifications for various actions.
- **Responsive UI**: Mobile and desktop-friendly layout.

---

## Technologies Used

- **React**: JavaScript library for building the user interface.
- **React-Bootstrap**: Library for Bootstrap components like Buttons, Modals, and Toasts.
- **React Context API**: For managing global state (tasks, toast notifications) across components.
- **CSS**: Custom styles for layout and design, with Bootstrap for responsiveness.

---

## Getting Started

### Prerequisites

Ensure you have **Node.js** and **npm** installed on your system. You can verify their installation by running:

```bash
node -v
npm -v

If not installed, download Node.js from nodejs.org.
Installation

    Clone the Repository: Clone the repository to your local machine:

git clone https://github.com/yourusername/task-management-app.git

Install Dependencies: Navigate to the project directory and install the dependencies:

cd task-management-app
npm install

Run the Application: After installing dependencies, run the development server:

    npm start

    The application will be available at http://localhost:3000.

Folder Structure

src/
├── components/               # Contains React components
│   ├── CreateNewTask.js      # Component for creating new tasks
│   ├── DialogComponent.js    # Modal for task deletion confirmation
│   ├── EditingModel.js      # Modal for editing tasks
│   ├── MainContainerComponent.js  # Main container for task list and UI elements
│   ├── TaskComponent.js      # Component to display each task
│   ├── TabsComponent.js      # Component for task filters (All, Done, UnDone)
│   └── ToastComponent.js     # Toast notification component
├── Context/                  # React context for global state
│   ├── toastContext.js       # Context for managing toast notifications
│   └── tasksContext.js       # Context for managing tasks
├── App.js                    # Main entry point of the application
└── index.js                  # React entry point

How It Works
Task Creation

    Click on the "Add New Task" button to create a new task.
    A modal will appear where users can enter the task title and description.
    The new task is added to the list once created.

Task Editing

    Click the "Edit" button on any task to open the task editing modal.
    Modify the title or description of the task.
    Save the changes to update the task.

Task Completion

    Mark a task as "Done" by clicking the "Done" button.
    A toast notification will appear indicating the task's completion status (e.g., "Task completed" or "Task undone").

Task Deletion

    Click the "Delete" button to remove a task.
    A confirmation modal will appear asking the user to confirm the deletion.
    Once confirmed, the task will be deleted, and a toast message will notify the user of the action.

Task Filtering

    Tasks are organized under three categories:
        All: Shows all tasks.
        Done: Displays only completed tasks.
        UnDone: Displays only incomplete tasks.
    Users can switch between categories using the tabs at the top of the page.

Toast Notifications

    Toast notifications provide feedback for task creation, deletion, editing, and completion.
    The color of the toast changes based on the action performed (e.g., green for success, red for error).

How to Contribute

    Fork the Repository: Fork this repository to your GitHub account.
    Clone Your Fork: Clone the forked repository to your local machine.

git clone https://github.com/yourusername/task-management-app.git

Create a New Branch:

git checkout -b my-feature-branch

Make Changes: Implement your changes.
Commit and Push Changes:

    git add .
    git commit -m "Describe the changes made"
    git push origin my-feature-branch

    Create a Pull Request: Open a pull request with your changes to the main repository.

License

This project is licensed under the MIT License. See the LICENSE file for more information.
Acknowledgements

    React: For building the user interface.
    React-Bootstrap: For providing reusable UI components.
    FontAwesome: For icons used in buttons and toast notifications.