import { TasksState } from './tasksState';
import { TasksAction } from './tasksActions';

export function tasksReducer(state: TasksState, action: TasksAction): TasksState {
  switch (action.type) {
    case 'PAY_TASK':
      return {
        ...state,
        tasks: state.tasks.map((t) =>
          t.id === action.taskId ? { ...t, status: 'paid', dueDate: 'Paid' } : t
        ),
      };
    case 'OPEN_ADD_TASK_MODAL':
      return { ...state, isAddTaskModalOpen: true };
    case 'CLOSE_ADD_TASK_MODAL':
      return { ...state, isAddTaskModalOpen: false };
    default:
      return state;
  }
}
