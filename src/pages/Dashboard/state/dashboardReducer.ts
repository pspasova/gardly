import { DashboardState } from './dashboardState';
import { DashboardAction, DashboardActionType } from './dashboardActions';

export function dashboardReducer(state: DashboardState, action: DashboardAction): DashboardState {
  switch (action.type) {
    case DashboardActionType.SELECT_CHILD:
      return { ...state, selectedChildId: action.payload, isLoadingChild: false };

    case DashboardActionType.SET_LOADING_CHILD:
      return { ...state, isLoadingChild: action.payload };

    case DashboardActionType.ADD_CHILD:
      return { ...state, children: [...state.children, action.payload] };

    case DashboardActionType.UPDATE_ALLOWANCE:
      return {
        ...state,
        childAllowances: {
          ...state.childAllowances,
          [action.payload.childId]: action.payload.allowance,
        },
        isEditAllowanceOpen: false,
      };

    case DashboardActionType.OPEN_EDIT_ALLOWANCE:
      return { ...state, isEditAllowanceOpen: true };
    case DashboardActionType.CLOSE_EDIT_ALLOWANCE:
      return { ...state, isEditAllowanceOpen: false };

    case DashboardActionType.OPEN_ACCOUNT_DETAILS:
      return { ...state, isAccountDetailsOpen: true };
    case DashboardActionType.CLOSE_ACCOUNT_DETAILS:
      return { ...state, isAccountDetailsOpen: false };

    case DashboardActionType.OPEN_CARD_DETAILS:
      return { ...state, isCardDetailsOpen: true };
    case DashboardActionType.CLOSE_CARD_DETAILS:
      return { ...state, isCardDetailsOpen: false };

    default:
      return state;
  }
}
