import React from 'react';
import Home from "./pages/Home/Home";
import {Route, Routes} from "react-router-dom";
import Description from "./pages/Description/Description";
import NotFound from "./pages/NotFound/NotFound";
import Login from "./components/Auth/Login";
import Registration from "./components/Auth/Registration";



function App() {
  return (
    <div className="App">
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/descr/:id" element={<Description/>}/>
            <Route path="*" element={<NotFound/>}/>
            <Route path="/signIn" element={<Login/>}/>
            <Route path="/signUp" element={<Registration/>}/>
        </Routes>
    </div>
  );
}

export default App;
