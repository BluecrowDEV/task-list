import { Task } from './task';

export interface State {
  status: number;
  savedTasks: Task[];
  newTaskValue: string;
}
