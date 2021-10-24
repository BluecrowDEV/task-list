import React, { ChangeEventHandler, FormEventHandler } from 'react';

import '../styles/main.css';

interface Props {
  handleSubmit: FormEventHandler;
  handleChange: ChangeEventHandler;
  newTaskValue: string;
}

function Form(props: Props): JSX.Element {
  return (
    <div className="input-container">
      <form action="#" onSubmit={props.handleSubmit} className="task-form">
        <input
          type="text"
          onChange={props.handleChange}
          value={props.newTaskValue}
          maxLength={26}
          placeholder="Max characters: 26"
        />
        <button type="submit">Write</button>
      </form>
    </div>
  );
}

export default Form;
