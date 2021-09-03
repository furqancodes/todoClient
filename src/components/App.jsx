import React, { useEffect, useState } from "react";

import Task from "../api/task";
import Input from "./Input";
import Tasklist from "./Tasklist";

const App = () => {
  const addTask = async (description, completed) => {
    const addresponse = await Task.post("/add", {
      description,
      completed,
    });
    console.log(addresponse)
  };
  return (
    <div className="ui container">
      <Input addTask={addTask}/>
      <Tasklist />
    </div>
  );
};
export default App;
