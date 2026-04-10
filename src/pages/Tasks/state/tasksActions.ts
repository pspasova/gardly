export type TasksAction =
  | { type: 'PAY_TASK'; taskId: string }
  | { type: 'OPEN_ADD_TASK_MODAL' }
  | { type: 'CLOSE_ADD_TASK_MODAL' };

export const payTask = (taskId: string): TasksAction => ({ type: 'PAY_TASK', taskId });
export const openAddTaskModal = (): TasksAction => ({ type: 'OPEN_ADD_TASK_MODAL' });
export const closeAddTaskModal = (): TasksAction => ({ type: 'CLOSE_ADD_TASK_MODAL' });
