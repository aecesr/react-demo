import "./assets/base.css";
// import {} from "react";
import { Button } from "antd";
import { Outlet } from "react-router-dom";
function App() {
  return (
    <div>
      <Button type="primary" loading>
        Loading
      </Button>
      <Outlet></Outlet>
    </div>
  );
}

export default App;
