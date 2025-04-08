import React, { useState } from "react";
import "./TodoInput.css";

/* TodoInput 元件 */
function TodoInput({ addTodo }) {
  const [task, setTask] = useState(""); // 使用 state 存儲任務

  /* 提交表單處理函數 */
  const handleSubmit = (e) => {
    e.preventDefault(); // 防止頁面重新加載
    const currentScrollPosition = window.pageYOffset; // 獲取當前滾動位置
    addTodo(task); // 添加任務
    setTask(""); // 清空輸入框
    window.scrollTo(0, currentScrollPosition); // 恢復滾動位置
  };

  return (
    <div className="input-container"> 
      <form onSubmit={handleSubmit} className="todo-input">
        <input 
          type="text" 
          value={task} 
          onChange={(e) => setTask(e.target.value)} // 更新任務
          placeholder="Add a task..." 
        />
        <button type="submit">+</button> {/* 提交按鈕 */}
      </form>
    </div>
  );
}

export default TodoInput; 
