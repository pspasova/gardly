export type TaskStatus = 'pending' | 'ready-to-pay' | 'paid';
export type TaskAssignee = 'sadie' | 'samson';

export interface Task {
  id: string;
  name: string;
  assignedTo: TaskAssignee;
  reward: number;
  dueDate: string;
  status: TaskStatus;
}
