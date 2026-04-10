import { Child } from '../../../types/child';
import { Allowance } from '../../../types/allowance';

export enum DashboardActionType {
  SELECT_CHILD = 'SELECT_CHILD',
  SET_LOADING_CHILD = 'SET_LOADING_CHILD',
  ADD_CHILD = 'ADD_CHILD',
  UPDATE_ALLOWANCE = 'UPDATE_ALLOWANCE',
  OPEN_EDIT_ALLOWANCE = 'OPEN_EDIT_ALLOWANCE',
  CLOSE_EDIT_ALLOWANCE = 'CLOSE_EDIT_ALLOWANCE',
  OPEN_ACCOUNT_DETAILS = 'OPEN_ACCOUNT_DETAILS',
  CLOSE_ACCOUNT_DETAILS = 'CLOSE_ACCOUNT_DETAILS',
  OPEN_CARD_DETAILS = 'OPEN_CARD_DETAILS',
  CLOSE_CARD_DETAILS = 'CLOSE_CARD_DETAILS',
}

export type DashboardAction =
  | { type: DashboardActionType.SELECT_CHILD; payload: string }
  | { type: DashboardActionType.SET_LOADING_CHILD; payload: boolean }
  | { type: DashboardActionType.ADD_CHILD; payload: Child }
  | { type: DashboardActionType.UPDATE_ALLOWANCE; payload: { childId: string; allowance: Allowance } }
  | { type: DashboardActionType.OPEN_EDIT_ALLOWANCE }
  | { type: DashboardActionType.CLOSE_EDIT_ALLOWANCE }
  | { type: DashboardActionType.OPEN_ACCOUNT_DETAILS }
  | { type: DashboardActionType.CLOSE_ACCOUNT_DETAILS }
  | { type: DashboardActionType.OPEN_CARD_DETAILS }
  | { type: DashboardActionType.CLOSE_CARD_DETAILS };

export const selectChild = (childId: string): DashboardAction => ({
  type: DashboardActionType.SELECT_CHILD,
  payload: childId,
});

export const setLoadingChild = (loading: boolean): DashboardAction => ({
  type: DashboardActionType.SET_LOADING_CHILD,
  payload: loading,
});

export const addChild = (child: Child): DashboardAction => ({
  type: DashboardActionType.ADD_CHILD,
  payload: child,
});

export const updateAllowance = (childId: string, allowance: Allowance): DashboardAction => ({
  type: DashboardActionType.UPDATE_ALLOWANCE,
  payload: { childId, allowance },
});

export const openEditAllowance = (): DashboardAction => ({ type: DashboardActionType.OPEN_EDIT_ALLOWANCE });
export const closeEditAllowance = (): DashboardAction => ({ type: DashboardActionType.CLOSE_EDIT_ALLOWANCE });
export const openAccountDetails = (): DashboardAction => ({ type: DashboardActionType.OPEN_ACCOUNT_DETAILS });
export const closeAccountDetails = (): DashboardAction => ({ type: DashboardActionType.CLOSE_ACCOUNT_DETAILS });
export const openCardDetails = (): DashboardAction => ({ type: DashboardActionType.OPEN_CARD_DETAILS });
export const closeCardDetails = (): DashboardAction => ({ type: DashboardActionType.CLOSE_CARD_DETAILS });
