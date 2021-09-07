import React, { useEffect, useState } from "react";

const Tasklist = ({ getTasks, deleteTask, tasks, setTasks }) => {
  const [states,setState] = useState("")
  useEffect(() => {
    async function fetchData() {
      const result = await getTasks();
      setState(result.data);
    }
    fetchData();
  }, [tasks]);
  const conditionalRendering = () => {
    if (states) {
      return states.map((task) => {
        console.log(task);
        return (
          <tr class="positive" key={task.id}>
            <td>{task.description}</td>
            <td>{task.completed.toString()}</td>
            <td>
              <button
                onClick={async() => {
                  const result = await deleteTask(task._id);
                  setState(result.data);
                }}
                class="negative ui button"
              >
                Delete
              </button>
            </td>
          </tr>
        );
      });
    } else {
      return (
        <tr class="negative">
          <td></td>
          <td></td>
          <td></td>
        </tr>
      );
    }
  };
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
              </tr>
            </thead>
            <tbody>{conditionalRendering()}</tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Tasklist;
