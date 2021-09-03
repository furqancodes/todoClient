import React, { useState } from "react";
const Input = ({addTask}) => {
  const [input, setInput] = useState("");
  const [checkbox, setCheckBox] = useState(false);
  const onFormSubmit=(e)=>{
    e.preventDefault()
    addTask(input,checkbox)
  }
  return (
    <div class="ui small input centered grid" style={{ marginTop: "2rem" }}>
      <form onSubmit={onFormSubmit}>
        <input
          type="text"
          placeholder="Description"
          value={input}
          onChange={(e) => {
            setInput(e.target.value);
          }}
        ></input>
        <div class="ui toggle checkbox">
          <input
            type="checkbox"
            name="public"
            value={checkbox}
            onClick={() => {
              setCheckBox(!checkbox);
            }}
          />
          <label>Subscribe to weekly newsletter</label>
        </div>
        <button class="ui teal button">add</button>
      </form>
    </div>
  );
};
export default Input;
