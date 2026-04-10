import { ReactElement } from 'react';
import { Task } from '../../../../types/task';
import { ASSIGNEE_LABELS, ASSIGNEE_INITIALS } from '../../../../constants/tasks';

interface TaskCardProps {
  task: Task;
  onPay?: (taskId: string) => void;
}

const STATUS_BADGE: Record<Task['status'], ReactElement> = {
  pending: (
    <span className="px-2.5 py-1 text-xs font-medium rounded-md bg-gray-100 text-gray-500 tracking-wide uppercase">
      Pending
    </span>
  ),
  'ready-to-pay': (
    <span className="px-2.5 py-1 text-xs font-medium rounded-md bg-black text-white tracking-wide uppercase">
      Ready to Pay
    </span>
  ),
  paid: (
    <span className="px-2.5 py-1 text-xs font-medium rounded-md text-[#00A650] tracking-wide uppercase" style={{ backgroundColor: 'rgba(0,166,80,0.1)' }}>
      Paid via SumUp ✓
    </span>
  ),
};

export default function TaskCard({ task, onPay }: TaskCardProps) {
  return (
    <div className="bg-white border border-gray-200 rounded-lg p-5 flex flex-col gap-3">
      <div className="flex items-start justify-between gap-3">
        <div className="flex items-center gap-2.5 min-w-0">
          <div className="w-8 h-8 rounded-full bg-gray-900 text-white text-xs font-semibold flex items-center justify-center flex-shrink-0">
            {ASSIGNEE_INITIALS[task.assignedTo]}
          </div>
          <div className="min-w-0">
            <p className="font-semibold text-[15px] text-gray-900 leading-tight">{task.name}</p>
            <p className="text-sm text-gray-500 mt-0.5">{ASSIGNEE_LABELS[task.assignedTo]}</p>
          </div>
        </div>
        <p className="font-bold text-lg text-gray-900 flex-shrink-0">£{task.reward.toFixed(2)}</p>
      </div>

      <div className="flex items-center justify-between">
        <p className="text-xs text-gray-400 uppercase tracking-wide">{task.dueDate}</p>
        {STATUS_BADGE[task.status]}
      </div>

      {task.status === 'ready-to-pay' && onPay && (
        <button
          onClick={() => onPay(task.id)}
          className="w-full mt-1 bg-black text-white text-sm font-semibold py-2.5 rounded-md hover:bg-gray-800 transition-colors"
        >
          Pay with SumUp →
        </button>
      )}
    </div>
  );
}
