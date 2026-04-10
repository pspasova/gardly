import { useReducer } from 'react';
import { useNavigate } from 'react-router-dom';
import { dashboardReducer } from './state/dashboardReducer';
import { initialDashboardState } from './state/dashboardState';
import { getSearchParam } from '../../utils/url';
import {
  selectChild,
  updateAllowance,
  openEditAllowance, closeEditAllowance,
  openAccountDetails, closeAccountDetails,
  closeCardDetails,
} from './state/dashboardActions';
import { CHILD_ACCOUNT_DETAILS, CHILD_CARD_DETAILS } from '../../constants/dashboard';
import ChildSelector from './components/ChildSelector/ChildSelector';
import BalanceCard from './components/BalanceCard/BalanceCard';
import QuickActions from './components/QuickActions/QuickActions';
import AllowanceBanner from './components/AllowanceBanner/AllowanceBanner';
import TransactionList from './components/TransactionList/TransactionList';
import EditAllowanceModal from './components/EditAllowanceModal/EditAllowanceModal';
import AccountDetailsModal from './components/AccountDetailsModal/AccountDetailsModal';
import CardDetailsModal from './components/CardDetailsModal/CardDetailsModal';

const getInitialModal = () => {
  const modal = getSearchParam('modal');
  const childParam = getSearchParam('child');
  const validChild = initialDashboardState.children.find((c) => c.id === childParam);
  return {
    ...initialDashboardState,
    selectedChildId: validChild ? validChild.id : initialDashboardState.selectedChildId,
    isEditAllowanceOpen: modal === 'allowance',
    isAccountDetailsOpen: modal === 'account',
    isCardDetailsOpen: modal === 'card',
  };
};

export default function Dashboard() {
  const navigate = useNavigate();
  const [state, dispatch] = useReducer(dashboardReducer, undefined, getInitialModal);

  const selectedChild = state.children.find((c) => c.id === state.selectedChildId)!;
  const transactions = state.childTransactions[state.selectedChildId] ?? [];
  const allowance = state.childAllowances[state.selectedChildId]!;
  const accountDetails = CHILD_ACCOUNT_DETAILS[state.selectedChildId];

  const handleSwitchChild = () => {
    const currentIndex = state.children.findIndex((c) => c.id === state.selectedChildId);
    const nextIndex = (currentIndex + 1) % state.children.length;
    dispatch(selectChild(state.children[nextIndex].id));
  };

  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 pt-6">
        <div className="lg:col-span-4 flex flex-col gap-5">
          <ChildSelector child={selectedChild} onSwitch={handleSwitchChild} />
          <BalanceCard childName={selectedChild.name} balance={selectedChild.balance} />
          <QuickActions
            onAccountDetails={() => dispatch(openAccountDetails())}
            onCardDetails={() => navigate(`/cards?child=${state.selectedChildId}`)}
          />
        </div>

        <div className="lg:col-span-8 flex flex-col gap-5">
          <AllowanceBanner
            allowance={allowance}
            onEdit={() => dispatch(openEditAllowance())}
          />
          <TransactionList transactions={transactions} />
        </div>
      </div>

      {state.isEditAllowanceOpen && (
        <EditAllowanceModal
          childName={selectedChild.name}
          allowance={allowance}
          onSave={(updated) => dispatch(updateAllowance(state.selectedChildId, updated))}
          onClose={() => dispatch(closeEditAllowance())}
        />
      )}

      {state.isAccountDetailsOpen && accountDetails && (
        <AccountDetailsModal
          childName={selectedChild.name}
          details={accountDetails}
          onClose={() => dispatch(closeAccountDetails())}
        />
      )}

      {state.isCardDetailsOpen && CHILD_CARD_DETAILS[state.selectedChildId] && (
        <CardDetailsModal
          childName={selectedChild.name}
          childId={state.selectedChildId}
          details={CHILD_CARD_DETAILS[state.selectedChildId]}
          onClose={() => dispatch(closeCardDetails())}
        />
      )}

    </>
  );
}
