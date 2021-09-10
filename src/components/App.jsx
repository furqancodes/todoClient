import React, { useState, useEffect } from "react";

import Input from "./Input";
import Tasklist from "./Tasklist";
import Update from "./Update";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { getTasks } from "../services/task";

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [update, setUpdate] = useState("");

  const fetchTasks = async () => {
    const result = await getTasks();
    if (result && result.data) {
      setTasks(result.data);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <div className="ui container">
            <Input fetchTasks={fetchTasks} />
            <Tasklist
              tasks={tasks}
              fetchTasks={fetchTasks}
              setUpdate={setUpdate}
            />
          </div>
        </Route>
        <Route path="/update">
          <Update update={update} fetchTasks={fetchTasks} />
        </Route>
      </Switch>
    </Router>
  );
};
export default App;
