import { FamilyState } from './familyState';
import { FamilyAction, FAMILY_ACTIONS } from './familyActions';

export function familyReducer(state: FamilyState, action: FamilyAction): FamilyState {
  switch (action.type) {
    case FAMILY_ACTIONS.OPEN_ADD_CHILD_MODAL:
      return { ...state, isAddChildModalOpen: true };
    case FAMILY_ACTIONS.CLOSE_ADD_CHILD_MODAL:
      return { ...state, isAddChildModalOpen: false };
    case FAMILY_ACTIONS.ADD_CHILD:
      return { ...state, children: [...state.children, action.child], isAddChildModalOpen: false };
    case FAMILY_ACTIONS.OPEN_INVITE_MODAL:
      return { ...state, isInviteModalOpen: true };
    case FAMILY_ACTIONS.CLOSE_INVITE_MODAL:
      return { ...state, isInviteModalOpen: false };
    default:
      return state;
  }
}
