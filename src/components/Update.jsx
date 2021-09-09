import React, { useState } from "react";
import { Link } from "react-router-dom";
import { updateTasks } from "../services/task";

const Update = ({ update }) => {
  const [input, setInput] = useState(update.description);
  const [checkbox, setCheckBox] = useState(update.completed);
  console.log(checkbox);
  const onFormSubmit = async (e) => {
    e.preventDefault();
    await updateTasks({
      id: update._id,
      description: input,
      completed: checkbox,
    });
  };
  return (
    <div className="ui container">
      <form class="ui form" onSubmit={onFormSubmit}>
        <div className="field">
          <label>Description</label>
          <input
            type="text"
            placeholder="Description"
            value={input}
            onChange={(e) => {
              setInput(e.target.value);
            }}
          ></input>
        </div>
        <div className="field">
          <div class="ui toggle checkbox">
            <input
              type="checkbox"
              name="public"
              value={checkbox}
              onClick={() => {
                setCheckBox(!checkbox);
              }}
            />
            <label>Compeleted</label>
          </div>
        </div>
        <button class="ui teal button" type="submit">
          Update
        </button>
      </form>
    </div>
  );
};

export default Update;
