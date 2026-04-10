import { Task } from '../types/task';

export const MOCK_TASKS: Task[] = [
  { id: '1', name: 'Tidy bedroom', assignedTo: 'sadie', reward: 2.5, dueDate: 'Due today', status: 'pending' },
  { id: '2', name: 'Wash the dishes', assignedTo: 'samson', reward: 1.5, dueDate: 'Due tomorrow', status: 'pending' },
  { id: '3', name: 'Take out the bins', assignedTo: 'sadie', reward: 1.0, dueDate: 'Due tomorrow', status: 'pending' },
  { id: '4', name: 'Set the table', assignedTo: 'samson', reward: 1.0, dueDate: 'Due in 2 days', status: 'pending' },
  { id: '5', name: 'Finish homework', assignedTo: 'sadie', reward: 3.0, dueDate: 'Completed', status: 'ready-to-pay' },
  { id: '6', name: 'Walk the dog', assignedTo: 'samson', reward: 2.0, dueDate: 'Completed', status: 'ready-to-pay' },
  { id: '7', name: 'Help with groceries', assignedTo: 'sadie', reward: 5.0, dueDate: 'Paid', status: 'paid' },
  { id: '8', name: 'Clean bathroom', assignedTo: 'samson', reward: 4.0, dueDate: 'Paid', status: 'paid' },
];

export const TASK_STATS = {
  pending: { count: 4, total: 18.0 },
  completedThisWeek: { count: 6, total: 27.5 },
  paidViaSumUp: { total: 114.0 },
};

export const ASSIGNEE_LABELS: Record<string, string> = {
  sadie: 'Sadie',
  samson: 'Samson',
};

export const ASSIGNEE_INITIALS: Record<string, string> = {
  sadie: 'S',
  samson: 'Sa',
};
