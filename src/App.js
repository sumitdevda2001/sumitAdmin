import Topbar from "./components/topbar/Topbar";
import "./app.css";
import Sidebar from "./components/sidebar/Sidebar";
import Home from "./pages/home/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserList from "./pages/userList/UserList.jsx"

function App() {
  return (
    <>
      <Topbar />
      <BrowserRouter>
        <div className="container">
          <Sidebar />{" "}
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/users" element={<UserList />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}
export default App;
