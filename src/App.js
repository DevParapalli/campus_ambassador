import React from "react";
import { useState } from "react";
import Home from "./pages/home";
import "./style/app.scss";
import Nav from "./components/navbar";
import { Routes, Route } from "react-router-dom";
import Tasks from "./pages/tasks";
import TaskDetails from "./pages/tasksDetails";
import Login from "./pages/login";
import Faq from "./pages/faq";
import Scores from "./pages/scores";
import Team from "./pages/team";
import Form from "./pages/login_forms";

function App() {
  const [close, setClose] = useState(true);
  const [navbarVisible, setNavbarVisible] = useState(false);
  return (
    <div>
      {navbarVisible ? (
        <Nav
          close={close}
          setClose={setClose}
          navbarVisible={navbarVisible}
          setNavbarVisible={setNavbarVisible}
        />
      ) : (
        <></>
      )}
      <Routes>
        <Route path="/" element={<Form></Form>} />
        <Route
          path="/home"
          element={
            <Home
              close={close}
              setClose={setClose}
              setNavbarVisible={setNavbarVisible}
            />
          }
        />
        <Route
          path="/tasks"
          element={<Tasks close={close} setClose={setClose} />}
        />
        <Route
          path="/team"
          element={<Team close={close} setClose={setClose} />}
        />
        <Route
          path="/faq"
          element={<Faq close={close} setClose={setClose} />}
        />
        <Route
          path="/scores"
          element={<Scores close={close} setClose={setClose} />}
        />
        <Route
          path="/taskdetails"
          element={<TaskDetails close={close} setClose={setClose} />}
        />
      </Routes>
    </div>
  );
}

export default App;
