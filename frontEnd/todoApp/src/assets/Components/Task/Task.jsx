import React, { useState } from 'react';
import { Briefcase, User, Target } from 'lucide-react';

// Main App component
const Tasks = () => {
  // State to hold the list of tasks
  const [tasks, setTasks] = useState([]);
  // State for the new task name input
  const [newTaskName, setNewTaskName] = useState('');
  // State for the category of the new task, defaults to 'Business'
  const [newTaskCategory, setNewTaskCategory] = useState('Business');

  // Function to handle adding a new task
  const handleAddTask = (e) => {
    // Prevent the form from submitting and refreshing the page
    e.preventDefault();
    if (newTaskName.trim() === '') {
      // Don't add a task if the name is empty
      return;
    }

    // Create a new task object
    const newTask = {
      id: Date.now(), // Unique ID for the task
      name: newTaskName,
      category: newTaskCategory,
      dateCreated: new Date().toLocaleDateString(), // Get the current date in a readable format
    };

    // Update the tasks state by adding the new task
    setTasks([...tasks, newTask]);
    // Clear the input field for the next task
    setNewTaskName('');
  };

  // Function to get the appropriate icon based on the task category
  const getIcon = (category) => {
    switch (category) {
      case 'Business':
        return <Briefcase size={20} />;
      case 'Personal':
        return <User size={20} />;
      case 'Goal':
        return <Target size={20} />;
      default:
        return null;
    }
  };

  return (
    <div className="app-container">

      <div className="header">
        <h1>Task Dashboard</h1>
      </div>

      {/* Task input form */}
      <form onSubmit={handleAddTask} className="task-form">
        <div className="task-input-container">
          <input
            type="text"
            value={newTaskName}
            onChange={(e) => setNewTaskName(e.target.value)}
            placeholder="Enter a new task..."
            className="task-input"
          />
          <div className="category-buttons">
            <button
              type="button"
              onClick={() => setNewTaskCategory('Business')}
              className={`category-button ${newTaskCategory === 'Business' ? 'active' : ''}`}
            >
              <Briefcase size={16} /> Business
            </button>
            <button
              type="button"
              onClick={() => setNewTaskCategory('Personal')}
              className={`category-button ${newTaskCategory === 'Personal' ? 'active' : ''}`}
            >
              <User size={16} /> Personal
            </button>
            <button
              type="button"
              onClick={() => setNewTaskCategory('Goal')}
              className={`category-button ${newTaskCategory === 'Goal' ? 'active' : ''}`}
            >
              <Target size={16} /> Goal
            </button>
          </div>
        </div>
        <button type="submit" className="add-button">
          Add Task
        </button>
      </form>

      {/* Task list display */}
      <div className="task-list">
        {tasks.length > 0 ? (
          tasks.map((task) => (
            <div key={task.id} className="task-card">
              <div className="task-info">
                {getIcon(task.category)}
                <div className="task-details">
                  <span className="task-name">{task.name}</span>
                  <span className="task-date">Created: {task.dateCreated}</span>
                </div>
              </div>
              <div
                className={`task-category ${
                  task.category === 'Business' ? 'category-business' :
                  task.category === 'Personal' ? 'category-personal' :
                  'category-goal'
                }`}
              >
                {task.category}
              </div>
            </div>
          ))
        ) : (
          <p style={{ textAlign: 'center', color: '#6b7280' }}>No tasks added yet.</p>
        )}
      </div>
    </div>
  );
};

export default Tasks;