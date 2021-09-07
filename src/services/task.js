import Task from "../api";

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