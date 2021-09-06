import React,{useState} from "react";

import Task from "../api/task";
import Input from "./Input";
import Tasklist from "./Tasklist";

const App = () => {
  const [tasks, setTasks] = useState("");
  const addTask = async (description, completed) => {
    const taskList = await Task.post("/add", {
      description,
      completed,
    });
    return taskList
  };
  const getTasks = async () => {
    const taskList = await Task.get("/show");
    return taskList;
  };
  const deleteTask = async (taskid) => {
    const taskList = await Task.delete(`/tasks/${taskid}`);
    return taskList
  };
  return (
    <div className="ui container">
      <Input addTask={addTask} setTasks={setTasks} />
      <Tasklist getTasks={getTasks} deleteTask={deleteTask} tasks={tasks} setTasks={setTasks} />
    </div>
  );
};
export default App;
