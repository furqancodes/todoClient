import Task from "../api";
require("dotenv").config();

export const addTask = async (description, completed) => {
  const response = await Task.post("/add", {
    description,
    completed,
  });
  return response;
};

export const getTasks = async () => {
  const taskList = await Task.get("/show");
  return taskList;
};

export const deleteTask = async (taskid) => {
  const response = await Task.delete(`/tasks/${taskid}`);
  return response;
};

export const postSlack = async({tasks,message})=>{
  const response = await Task.post("/slack",{
    message,
    tasks
  })
  return response
}