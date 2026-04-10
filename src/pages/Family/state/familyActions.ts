import { FamilyChild } from '../../../types/family';

export const FAMILY_ACTIONS = {
  OPEN_ADD_CHILD_MODAL: 'OPEN_ADD_CHILD_MODAL',
  CLOSE_ADD_CHILD_MODAL: 'CLOSE_ADD_CHILD_MODAL',
  ADD_CHILD: 'ADD_CHILD',
  OPEN_INVITE_MODAL: 'OPEN_INVITE_MODAL',
  CLOSE_INVITE_MODAL: 'CLOSE_INVITE_MODAL',
} as const;

export type FamilyAction =
  | { type: typeof FAMILY_ACTIONS.OPEN_ADD_CHILD_MODAL }
  | { type: typeof FAMILY_ACTIONS.CLOSE_ADD_CHILD_MODAL }
  | { type: typeof FAMILY_ACTIONS.ADD_CHILD; child: FamilyChild }
  | { type: typeof FAMILY_ACTIONS.OPEN_INVITE_MODAL }
  | { type: typeof FAMILY_ACTIONS.CLOSE_INVITE_MODAL };

export const openAddChildModal = (): FamilyAction => ({
  type: FAMILY_ACTIONS.OPEN_ADD_CHILD_MODAL,
});

export const closeAddChildModal = (): FamilyAction => ({
  type: FAMILY_ACTIONS.CLOSE_ADD_CHILD_MODAL,
});

export const addChild = (child: FamilyChild): FamilyAction => ({
  type: FAMILY_ACTIONS.ADD_CHILD,
  child,
});

export const openInviteModal = (): FamilyAction => ({
  type: FAMILY_ACTIONS.OPEN_INVITE_MODAL,
});

export const closeInviteModal = (): FamilyAction => ({
  type: FAMILY_ACTIONS.CLOSE_INVITE_MODAL,
});
