import { Child } from './child';

export interface FamilyChild extends Child {
  weeklySpend: string;
  nextAllowanceDate: string;
}
