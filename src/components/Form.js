import React from "react";

const Form = (props) => {
  return (
    <form noSubmit={props.submit}>
      <input
        type="text"
        value={props.value}
        onChange={props.change}
        placeholder="Wpisz miasto"
      />
      <button>Wyszukaj miasto</button>
    </form>
  );
};

export default Form;
