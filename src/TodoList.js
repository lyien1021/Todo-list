import React from "react";
import TodoItem from "./TodoItem";
import "./TodoList.css";

function TodoList({ todos, toggleTodo, removeTodo, listEndRef }) {
  // 計算已完成事項和總事項數量
  const completedCount = todos.filter(todo => todo.completed).length;
  const totalCount = todos.length;
  const completionRate = totalCount > 0 ? Math.round((completedCount / totalCount) * 100) : 0;

  return (
    <div>
      {/* 進度條容器 */}
      <div className="progress-container">
        <div className="completion-rate">{completionRate}%</div>
        <div className="progress-background">
          <div className="progress-bar" style={{ width: `${completionRate}%` }}></div>
        </div>
      </div>
      
      <div className="todo-list-container">
        <ul className="todo-list">
          {todos.map(todo => (
            <TodoItem 
              key={todo.id} 
              todo={todo} 
              toggleTodo={toggleTodo} 
              removeTodo={removeTodo} 
            />
          ))}
          <div ref={listEndRef}></div>
        </ul>
      </div>
    </div>
  );
}

export default TodoList;
