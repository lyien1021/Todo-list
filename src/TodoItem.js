import React from "react";
import "./TodoItem.css";

// TodoItem 組件
function TodoItem({ todo, toggleTodo, removeTodo }) {
  // 根據文字長度計算字體大小
  const calculateFontSize = (text) => {
    const length = text.length;
    if (length < 10) return "24px"; // 短文本大字體
    if (length < 20) return "20px"; // 中等長度中字體
    return "16px"; // 長文本小字體
  };

  return (
    <li className="todo-item" style={{ fontSize: calculateFontSize(todo.text) }}>
      {/* 復選框，根據完成狀態設定 checked 屬性 */}
      <input 
        type="checkbox" 
        checked={todo.completed} 
        onChange={() => toggleTodo(todo.id)} 
        className="checkbox" 
      />
      {/* 顯示任務文本，點擊可切換完成狀態 */}
      <span 
        className={todo.completed ? "completed" : ""} 
      >
        {todo.text}
      </span>
      {/* 垃圾桶按鈕，用於刪除任務 */}
      <button className="trash-can" onClick={() => removeTodo(todo.id)}>✖️</button>
    </li>
  );
}

export default TodoItem; // 導出 TodoItem 組件
