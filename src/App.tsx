import React from 'react';
import Home from "./pages/Home/Home";
import {Route, Routes} from "react-router-dom";
import Description from "./pages/Description/Description";


function App() {
  return (
    <div className="App">
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/descr/:id" element={<Description/>}/>
        </Routes>
    </div>
  );
}

export default App;
