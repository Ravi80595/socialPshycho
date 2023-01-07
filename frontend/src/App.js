// import './App.css';

import Login from "Pages/SignLoginPage/Login";
import Navbar from "Components/Navbar";
import Home from "Pages/HomePage/Home";
import Signup from "Pages/SignLoginPage/Signup";
import AllRoutes from "Routes/AllRoutes";

function App() {
  return (
    <div className="app">
      {/* <Navbar/> */}
      {/* <Signup/> */}
      {/* <Login/> */}
      <AllRoutes/>
      {/* <Home/> */}
    </div>
  );
}

export default App;
