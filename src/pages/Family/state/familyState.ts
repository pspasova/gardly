import { FamilyChild } from '../../../types/family';
import { MOCK_FAMILY_CHILDREN } from '../../../constants/family';

export interface FamilyState {
  children: FamilyChild[];
  isAddChildModalOpen: boolean;
  isInviteModalOpen: boolean;
}

export const initialFamilyState: FamilyState = {
  children: MOCK_FAMILY_CHILDREN,
  isAddChildModalOpen: false,
  isInviteModalOpen: false,
};
