import React, { useState, useEffect, useRef } from "react";
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";
import ToggleSwitch from "./ToggleSwitch"; // 導入切換開關
import "./App.css";

function App() {
  // 狀態管理
  const [todos, setTodos] = useState([]); // 代辦事項列表
  const listEndRef = useRef(null); // 用於滾動到列表底部的參考
  const [showCompletedFirst, setShowCompletedFirst] = useState(false); // 是否顯示已完成的代辦事項
  const [prevTodoCount, setPrevTodoCount] = useState(0); // 記錄上一次的代辦事項數量

  // 添加新的代辦事項
  const addTodo = (task) => {
    if (task.trim()) {
      const newTodo = { id: Date.now(), text: task, completed: false };
      setTodos((prevTodos) => [...prevTodos, newTodo]);
      // 自動滾動到列表底部
      requestAnimationFrame(() => {
        listEndRef.current?.scrollIntoView({ behavior: "smooth" });
      });
    }
  };

  // 切換代辦事項的完成狀態
  const toggleTodo = (id) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  // 移除代辦事項
  const removeTodo = (id) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  // 切換顯示已完成的代辦事項
  const toggleShowCompleted = () => {
    setShowCompletedFirst((prev) => !prev);
  };

  // 排序代辦事項
  const sortedTodos = [...todos].sort((a, b) => {
    return showCompletedFirst
      ? a.completed === b.completed ? 0 : a.completed ? 1 : -1
      : a.id - b.id;
  });

  // 當代辦事項數量變化時自動滾動
  useEffect(() => {
    if (todos.length > prevTodoCount) {
      listEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }
    setPrevTodoCount(todos.length); // 更新上一次的代辦事項數量
  }, [todos]);

  return (
    <div className="app">
      <h1>To-do list</h1>
      <p>Add things to do</p>

      <TodoList
        todos={sortedTodos}
        toggleTodo={toggleTodo}
        removeTodo={removeTodo}
        listEndRef={listEndRef}
      />

      <ToggleSwitch 
        checked={showCompletedFirst}
        onChange={toggleShowCompleted}
      />
      
      <TodoInput addTodo={addTodo} />
    </div>
  );
}

export default App;
