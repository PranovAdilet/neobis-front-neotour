import React from 'react';
import Home from "./pages/Home/Home";
import {Navigate, Route, Routes} from "react-router-dom";
import Description from "./pages/Description/Description";
import Login from "./components/Components/Auth/Login";
import Registration from "./components/Components/Auth/Registration";
import {useSelector} from "react-redux";
import {selectUser} from "./store/reducers/Auth";


function App() {

    const {isAuth} = useSelector(selectUser)

    return (
        <div className="App">
            <Routes>
                {isAuth ? (
                    <>
                        <Route path="/main" element={<Home />} />
                        <Route path="/descr/:id" element={<Description />} />
                        <Route path="*" element={<Navigate to="/main" />} />
                    </>
                ) : (
                    <>
                        <Route path="/signIn" element={<Login />} />
                        <Route path="/signUp" element={<Registration />} />
                        <Route path="*" element={<Navigate to="/signIn" />} />
                    </>
                )}
            </Routes>
        </div>
    )
}

export default App;
