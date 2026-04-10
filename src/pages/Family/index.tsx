import { useReducer, useState } from 'react';
import { Plus } from 'lucide-react';
import { familyReducer } from './state/familyReducer';
import { initialFamilyState, FamilyState } from './state/familyState';
import { openAddChildModal, openInviteModal, addChild } from './state/familyActions';
import { getSearchParam } from '../../utils/url';
import ChildCard from './components/ChildCard/ChildCard';
import InviteBanner from './components/InviteBanner/InviteBanner';

const getInitialState = (): FamilyState => {
  const modal = getSearchParam('modal');
  return {
    ...initialFamilyState,
    isAddChildModalOpen: modal === 'addChild',
    isInviteModalOpen: modal === 'invite',
  };
};

export default function Family() {
  const [state, dispatch] = useReducer(familyReducer, undefined, getInitialState);
  const [newName, setNewName] = useState('');
  const [newAge, setNewAge] = useState('');

  const handleAddChild = () => {
    if (!newName.trim() || !newAge.trim()) return;
    dispatch(addChild({
      id: Date.now().toString(),
      name: newName.trim(),
      age: parseInt(newAge),
      accountLabel: 'Savings Account',
      avatarUrl: `https://api.dicebear.com/7.x/adventurer/svg?seed=${encodeURIComponent(newName.trim())}`,
      balance: '£0.00',
      weeklySpend: '£0.00',
      nextAllowanceDate: 'Not set',
    }));
    setNewName('');
    setNewAge('');
  };

  return (
    <div className="flex flex-col gap-8">
      <div className="flex items-start justify-between">
        <div>
          <h1 className="font-headline font-extrabold text-3xl text-night">Your Family</h1>
          <p className="text-night/60 font-body mt-1">Manage your children's accounts</p>
        </div>
        <button
          onClick={() => dispatch(openAddChildModal())}
          className="flex items-center gap-2 bg-primary text-white font-label font-semibold text-sm px-5 py-2.5 rounded-xl hover:bg-primary/90 transition-colors"
        >
          <Plus size={16} />
          Add Child
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {state.children.map((child) => (
          <ChildCard key={child.id} child={child} />
        ))}
      </div>

      <InviteBanner onInvite={() => dispatch(openInviteModal())} />

      {state.isAddChildModalOpen && (
        <div
          className="fixed inset-0 bg-night/40 backdrop-blur-sm z-50 flex items-center justify-center"
          onClick={() => dispatch({ type: 'CLOSE_ADD_CHILD_MODAL' })}
        >
          <div
            id="modal-dialog"
            className="bg-white rounded-2xl p-8 shadow-xl max-w-sm w-full mx-4"
            onClick={(e) => e.stopPropagation()}
          >
            <h2 className="font-headline font-bold text-xl text-night mb-1">Add a Child</h2>
            <p className="text-night/50 text-sm font-body mb-6">A new account will be created for them.</p>

            <div className="flex flex-col gap-4 mb-6">
              <div>
                <label className="block text-xs font-label font-semibold text-night/50 uppercase tracking-wide mb-1.5">
                  Child's name
                </label>
                <input
                  type="text"
                  value={newName}
                  onChange={(e) => setNewName(e.target.value)}
                  placeholder="e.g. Emma"
                  className="w-full border border-night/10 rounded-xl px-4 py-2.5 text-sm text-night placeholder-night/30 focus:outline-none focus:ring-2 focus:ring-primary/30"
                />
              </div>
              <div>
                <label className="block text-xs font-label font-semibold text-night/50 uppercase tracking-wide mb-1.5">
                  Age
                </label>
                <input
                  type="number"
                  value={newAge}
                  onChange={(e) => setNewAge(e.target.value)}
                  placeholder="e.g. 8"
                  min="1"
                  max="17"
                  className="w-full border border-night/10 rounded-xl px-4 py-2.5 text-sm text-night placeholder-night/30 focus:outline-none focus:ring-2 focus:ring-primary/30"
                />
              </div>
            </div>

            <div className="flex gap-3">
              <button
                onClick={() => dispatch({ type: 'CLOSE_ADD_CHILD_MODAL' })}
                className="flex-1 border border-night/10 text-night/60 font-label font-semibold py-2.5 rounded-xl hover:bg-night/5 transition-colors text-sm"
              >
                Cancel
              </button>
              <button
                onClick={handleAddChild}
                disabled={!newName.trim() || !newAge.trim()}
                className="flex-1 text-white font-label font-semibold py-2.5 rounded-xl transition-opacity hover:opacity-90 disabled:opacity-40 text-sm"
                style={{ background: 'radial-gradient(circle at 100% 100%, #F472C0 0%, #E040A0 28%, #C02888 55%, #C02888 100%)' }}
              >
                Add Child
              </button>
            </div>
          </div>
        </div>
      )}

      {state.isInviteModalOpen && (
        <div
          className="fixed inset-0 bg-night/40 backdrop-blur-sm z-50 flex items-center justify-center"
          onClick={() => dispatch({ type: 'CLOSE_INVITE_MODAL' })}
        >
          <div
            id="modal-dialog"
            className="bg-white rounded-2xl p-8 shadow-xl max-w-sm w-full mx-4"
            onClick={(e) => e.stopPropagation()}
          >
            <h2 className="font-headline font-bold text-xl text-night mb-2">Invite a Partner</h2>
            <p className="text-night/60 text-sm font-body mb-6">
              Partner invitations are coming soon. You'll be able to co-manage your family account together.
            </p>
            <button
              onClick={() => dispatch({ type: 'CLOSE_INVITE_MODAL' })}
              className="w-full bg-secondary text-white font-label font-semibold py-2.5 rounded-xl hover:bg-secondary/90 transition-colors"
            >
              Got it
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
