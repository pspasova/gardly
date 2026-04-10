import { useReducer } from 'react';
import { Plus, CheckSquare } from 'lucide-react';
import { tasksReducer } from './state/tasksReducer';
import { initialTasksState, TasksState } from './state/tasksState';
import { payTask, openAddTaskModal, closeAddTaskModal } from './state/tasksActions';
import { getSearchParam } from '../../utils/url';
import { TASK_STATS } from '../../constants/tasks';
import TaskCard from './components/TaskCard/TaskCard';

const getInitialTasksState = (): TasksState => {
  const modal = getSearchParam('modal');
  return { ...initialTasksState, isAddTaskModalOpen: modal === 'addTask' };
};

export default function Tasks() {
  const [state, dispatch] = useReducer(tasksReducer, undefined, getInitialTasksState);

  const pendingTasks = state.tasks.filter((t) => t.status === 'pending');
  const completedTasks = state.tasks.filter((t) => t.status === 'ready-to-pay' || t.status === 'paid');

  return (
    <div className="flex flex-col gap-8">
      {/* Header */}
      <div className="flex items-start justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900" style={{ fontFamily: 'Inter, sans-serif' }}>
            Tasks & Rewards
          </h1>
          <p className="text-sm text-gray-500 mt-1" style={{ fontFamily: 'Inter, sans-serif' }}>
            Assign tasks, SumUp pays instantly on completion.
          </p>
        </div>
        <div className="flex items-center gap-1.5 bg-gray-900 rounded px-3 py-1.5">
          <CheckSquare className="w-3 h-3 text-white" />
          <span className="text-xs font-semibold text-white tracking-wide" style={{ fontFamily: 'Inter, sans-serif' }}>
            Powered by SumUp
          </span>
        </div>
      </div>

      {/* Stats row */}
      <div className="grid grid-cols-3 gap-4">
        <div className="border border-gray-200 rounded-lg p-6">
          <p className="text-xs font-medium text-gray-400 uppercase tracking-widest mb-4">Pending</p>
          <p className="text-4xl font-bold text-gray-900">{TASK_STATS.pending.count}</p>
          <p className="text-sm text-gray-500 mt-2">£{TASK_STATS.pending.total.toFixed(2)} total</p>
        </div>
        <div className="border border-gray-200 rounded-lg p-6">
          <p className="text-xs font-medium text-gray-400 uppercase tracking-widest mb-4">Completed this week</p>
          <p className="text-4xl font-bold text-gray-900">{TASK_STATS.completedThisWeek.count}</p>
          <p className="text-sm text-gray-500 mt-2">£{TASK_STATS.completedThisWeek.total.toFixed(2)} total</p>
        </div>
        <div className="border border-gray-200 rounded-lg p-6">
          <p className="text-xs font-medium text-gray-400 uppercase tracking-widest mb-4">Paid out (SumUp)</p>
          <p className="text-4xl font-bold" style={{ color: '#00A650' }}>
            £{TASK_STATS.paidViaSumUp.total.toFixed(2)}
          </p>
          <p className="text-sm text-gray-500 mt-2">all time</p>
        </div>
      </div>

      {/* Task columns */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Pending */}
        <div className="flex flex-col gap-4">
          <h2 className="text-sm font-semibold text-gray-400 uppercase tracking-widest">
            Pending tasks
          </h2>
          {pendingTasks.map((task) => (
            <TaskCard key={task.id} task={task} />
          ))}
          {pendingTasks.length === 0 && (
            <p className="text-sm text-gray-400 py-4">No pending tasks.</p>
          )}
        </div>

        {/* Completed & Paid */}
        <div className="flex flex-col gap-4">
          <h2 className="text-sm font-semibold text-gray-400 uppercase tracking-widest">
            Completed & paid
          </h2>
          {completedTasks.map((task) => (
            <TaskCard key={task.id} task={task} onPay={(id) => dispatch(payTask(id))} />
          ))}
          {completedTasks.length === 0 && (
            <p className="text-sm text-gray-400 py-4">No completed tasks yet.</p>
          )}
        </div>
      </div>

      {/* Add Task button */}
      <button
        onClick={() => dispatch(openAddTaskModal())}
        className="w-full flex items-center justify-center gap-2 bg-black text-white font-semibold py-4 rounded-lg hover:bg-gray-800 transition-colors"
        style={{ fontFamily: 'Inter, sans-serif' }}
      >
        <Plus className="w-4 h-4" />
        Assign a new task to Sadie or Samson
      </button>

      {/* Add Task modal (coming soon) */}
      {state.isAddTaskModalOpen && (
        <div
          className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50 flex items-center justify-center"
          onClick={() => dispatch(closeAddTaskModal())}
        >
          <div
            id="modal-dialog"
            className="bg-white rounded-xl p-8 shadow-xl max-w-sm w-full mx-4 border border-gray-200"
            onClick={(e) => e.stopPropagation()}
          >
            <h2 className="font-bold text-xl text-gray-900 mb-2" style={{ fontFamily: 'Inter, sans-serif' }}>
              Assign a Task
            </h2>
            <p className="text-gray-500 text-sm mb-6" style={{ fontFamily: 'Inter, sans-serif' }}>
              Task creation is coming soon. You'll be able to assign tasks and set rewards here.
            </p>
            <button
              onClick={() => dispatch(closeAddTaskModal())}
              className="w-full bg-black text-white font-semibold py-2.5 rounded-md hover:bg-gray-800 transition-colors"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              Got it
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
