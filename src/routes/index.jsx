import App from "../App";
import List from "../pages/List";
import Login from "../pages/Login";
import Edit from "../pages/Edit";
import Means from "../pages/Means";
import Register from "../pages/Register";

import { BrowserRouter, Route, Routes } from "react-router-dom";

const BaseRoute = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="/edit" element={<Edit />}></Route>
        <Route path="/means" element={<Means />}></Route>
        <Route path="/list" element={<List />}></Route>
      </Route>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/register" element={<Register />}></Route>
    </Routes>
  </BrowserRouter>
);

export default BaseRoute;
