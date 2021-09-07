import React, { useState, useEffect } from "react";

import Input from "./Input";
import Tasklist from "./Tasklist";
import { getTasks } from "../services/task";

const App = () => {
    const [tasks, setTasks] = useState([]);

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
        <div className="ui container">
            <Input fetchTasks={fetchTasks} />
            <Tasklist tasks={tasks} fetchTasks={fetchTasks} />
        </div>
    );
};
export default App;
