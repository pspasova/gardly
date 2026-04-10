import { Task } from '../../../types/task';
import { MOCK_TASKS } from '../../../constants/tasks';

export interface TasksState {
  tasks: Task[];
  isAddTaskModalOpen: boolean;
}

export const initialTasksState: TasksState = {
  tasks: MOCK_TASKS,
  isAddTaskModalOpen: false,
};
