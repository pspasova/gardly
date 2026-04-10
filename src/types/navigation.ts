import { LucideIcon } from 'lucide-react';

export interface NavItem {
  label: string;
  icon: LucideIcon;
  active?: boolean;
}

export interface QuickAction {
  label: string;
  icon: LucideIcon;
}
