import React, { MouseEvent } from 'react';

import { Task as TaskProtocol } from '../interfaces/task';

import '../styles/main.css';

interface Props {
  allTasks: TaskProtocol[];
  handleDelete: (event: MouseEvent, index: number) => void;
  handleEdit: (event: MouseEvent, index: number) => void;
}

function Task(props: Props): JSX.Element {
  return (
    <>
      {props.allTasks.length === 0 ? <p className="no-task-msg">You do not have any task</p> : ''}

      {props.allTasks.map((task: TaskProtocol, index: number): JSX.Element => {
        return (
          <>
            <div className="task-container">
              <p className="task-text">{task.text}</p>
              <div>
                <span
                  className="task-config-icon delete-task"
                  onClick={(event: MouseEvent) => props.handleDelete(event, index)}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="icon icon-tabler icon-tabler-trash"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    strokeWidth="1.75"
                    stroke="rgb(217, 83, 79)"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <line x1="4" y1="7" x2="20" y2="7" />
                    <line x1="10" y1="11" x2="10" y2="17" />
                    <line x1="14" y1="11" x2="14" y2="17" />
                    <path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12" />
                    <path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3" />
                  </svg>
                </span>
                <span
                  className="task-config-icon edit-task"
                  onClick={(event: MouseEvent) => props.handleEdit(event, index)}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="icon icon-tabler icon-tabler-pencil"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    strokeWidth="1.75"
                    stroke="rgb(91, 192, 222)"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M4 20h4l10.5 -10.5a1.5 1.5 0 0 0 -4 -4l-10.5 10.5v4" />
                    <line x1="13.5" y1="6.5" x2="17.5" y2="10.5" />
                  </svg>
                </span>
              </div>
            </div>
          </>
        );
      })}
    </>
  );
}

export default Task;
