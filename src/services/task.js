import Task from "../api";
import Slack from "../api/slack"
require("dotenv").config();

export const addTask = async (description, completed) => {
  const taskList = await Task.post("/add", {
    description,
    completed,
  });
  return taskList;
};

export const getTasks = async () => {
  const taskList = await Task.get("/show");
  return taskList;
};

export const deleteTask = async (taskid) => {
  const taskList = await Task.delete(`/tasks/${taskid}`);
  return taskList;
};

export const postSlack = async () => {
  const taskList = await Slack.post( "", {
    text: `all tasks`,
  });
  return taskList
};
