import React from "react"; // 引入 React
import "./ToggleSwitch.css"; // 引入樣式

// ToggleSwitch 組件
function ToggleSwitch({ checked, onChange }) {
  return (
    <div className="toggle-container"> {/* 開關容器 */}
      <span className="toggle-text"> {/* 開關文字 */}
        Move done things to the end? {/* 文字內容 */}
      </span>
      <label className="switch"> {/* 開關標籤 */}
        <input 
          type="checkbox" 
          checked={checked} 
          onChange={onChange} // 當開關狀態改變時調用 onChange 函數
        />
        <span className="slider"></span> {/* 滑塊 */}
      </label>
    </div>
  );
}

export default ToggleSwitch; // 導出 ToggleSwitch 組件
