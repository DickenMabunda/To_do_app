import React from 'react'
import { ListTodo, PlusCircle, Search } from 'lucide-react';
function Navbar() {
  return (
    <div>
    <nav className="navbar-container">
        <div className="navbar-brand">
          <ListTodo size={24} />
          <span className="navbar-title">Todo App</span>
        </div>
        <div className="navbar-links">
          <a href="#" className="navbar-link">
            <PlusCircle size={20} /> New Task
          </a>
          <a href="#" className="navbar-link">
            <Search size={20} /> Search
          </a>
          {/* Add more links as needed */}
        </div>
      </nav>
      </div>
  )
}

export default Navbar