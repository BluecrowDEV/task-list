import React, { ChangeEvent, Component, MouseEvent } from 'react';

import Form from './components/Form';
import Task from './components/Task';

import './styles/main.css';

import { State } from './interfaces/state';
import { Task as TaskProtocol } from './interfaces/task';

export default class App extends Component {
  state: State = {
    status: -1,
    savedTasks: [],
    newTaskValue: '',
  };

  componentDidMount(): void {
    const savedTasks = JSON.parse(localStorage.getItem('Tasks') as string);

    if (!savedTasks) return;

    this.setState({ savedTasks: savedTasks });
  }

  componentDidUpdate(prevProps: State, prevState: State): void {
    const { savedTasks } = this.state;

    if (savedTasks === prevState.savedTasks) return;

    localStorage.setItem('Tasks', JSON.stringify(savedTasks));
  }

  handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    this.setState({
      newTaskValue: e.target.value,
    });
  };

  handleSubmit = (e: MouseEvent): void => {
    e.preventDefault();

    const { status, savedTasks } = this.state;
    const { newTaskValue } = this.state;
    newTaskValue.trim();

    if (newTaskValue === '') return;

    const newTasks = [...savedTasks];

    const newTask: TaskProtocol = {
      id: Date.now() + Math.floor(Math.random() * 10000),
      text: newTaskValue,
      createdAt: new Date(),
    };

    if (status === -1) {
      this.setState({
        savedTasks: [...newTasks, newTask],
        newTaskValue: '',
      });
    } else {
      newTasks[status] = newTask;

      this.setState({
        savedTasks: [...newTasks],
        status: -1,
      });
    }
  };

  handleDelete = (event: MouseEvent, index: number): void => {
    const { savedTasks } = this.state;
    const allTasks = [...savedTasks];

    allTasks.splice(index, 1);

    this.setState({
      savedTasks: [...allTasks],
    });
  };

  handleEdit = (event: MouseEvent, index: number): void => {
    const { savedTasks } = this.state;

    this.setState({
      status: index,
      newTaskValue: savedTasks[index].text,
    });
  };

  render(): JSX.Element {
    const { newTaskValue, savedTasks } = this.state;

    return (
      <div className="outer-container">
        <h1 className="title">Task List</h1>
        <Form
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
          newTaskValue={newTaskValue}
        />
        <Task allTasks={savedTasks} handleDelete={this.handleDelete} handleEdit={this.handleEdit} />
      </div>
    );
  }
}
