import { Child } from '../../../types/child';
import { Transaction } from '../../../types/transaction';
import { Allowance } from '../../../types/allowance';
import { MOCK_CHILDREN, CHILD_TRANSACTIONS, CHILD_ALLOWANCES } from '../../../constants/dashboard';

export interface DashboardState {
  children: Child[];
  selectedChildId: string;
  childTransactions: Record<string, Transaction[]>;
  childAllowances: Record<string, Allowance>;
  isLoadingChild: boolean;
  isEditAllowanceOpen: boolean;
  isAccountDetailsOpen: boolean;
  isCardDetailsOpen: boolean;
}

export const initialDashboardState: DashboardState = {
  children: MOCK_CHILDREN,
  selectedChildId: MOCK_CHILDREN[0].id,
  childTransactions: CHILD_TRANSACTIONS,
  childAllowances: CHILD_ALLOWANCES,
  isLoadingChild: false,
  isEditAllowanceOpen: false,
  isAccountDetailsOpen: false,
  isCardDetailsOpen: false,
};
