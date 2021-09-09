import React from "react";
import { deleteTask, postSlack } from "../services/task";

const Tasklist = ({ tasks, fetchTasks }) => {
  const pushSlack = async () => {
    await postSlack({tasks,message:"pushing to slackk"});
  };
  const remove = async (id) => {
    await deleteTask(id);
    fetchTasks();
  };

  if (tasks.length === 0) return <div>No Tasks!</div>;

  return (
    <div
      class="ui container"
      style={{
        width: "30%",
        marginTop: "12px",
        marginBottom: "120px",
      }}
    >
      <div class="ui middle aligned center aligned grid">
        <div style={{ marginBottom: "165px" }}>
          <table class="ui celled table">
            <thead>
              <tr>
                <th style={{ padding: "0.928571em 8.785714em" }}>
                  Description
                </th>
                <th style={{ padding: "0.928571em 8.785714em" }}>Completed</th>
                <th>Delete</th>
                <th>Update</th>
              </tr>
            </thead>
            <tbody>
              {tasks.map((task) => (
                <tr class="positive" key={task._id}>
                  <td>{task.description}</td>
                  <td>{task.completed.toString()}</td>
                  <td>
                    <button
                      onClick={() => remove(task._id)}
                      class="negative ui button"
                    >
                      Delete
                    </button>
                  </td>
                  <td>
                    <button
                      class="green ui button"
                    >
                      Edit
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <button class="teal ui button" onClick={() => {pushSlack()}}>
            Push to Slack
          </button>
        </div>
      </div>
    </div>
  );
};

export default Tasklist;
