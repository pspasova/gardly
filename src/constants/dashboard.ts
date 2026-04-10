import { LayoutDashboard, Users, PiggyBank, ClipboardList, CreditCard, Landmark } from 'lucide-react';
import { Child } from '../types/child';
import { Transaction } from '../types/transaction';
import { Allowance } from '../types/allowance';
import { NavItem, QuickAction } from '../types/navigation';
import { ChartBar } from '../types/chart';

export const PARENT_AVATAR_URL =
  'https://api.dicebear.com/9.x/avataaars/png?seed=Milena&top=straight02&hairColor=2c1b18&skinColor=ffdbb4&facialHairProbability=0&accessoriesProbability=0&clothing=blazerAndShirt&mouth=smile&eyebrows=defaultNatural&eyes=happy&size=128';

export const NAV_LINKS: string[] = ['Dashboard', 'Family', 'Savings', 'Cards'];

export const SIDEBAR_NAV_ITEMS: NavItem[] = [
  { label: 'Dashboard', icon: LayoutDashboard, active: true },
  { label: 'Family', icon: Users },
  { label: 'Savings', icon: PiggyBank },
  { label: 'Tasks', icon: ClipboardList },
  { label: 'Cards', icon: CreditCard },
];

export const QUICK_ACTIONS: QuickAction[] = [
  { label: 'Account Details', icon: Landmark },
  { label: 'Card Details', icon: CreditCard },
];

export const CHART_DAYS: string[] = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

export const CHART_BARS: ChartBar[] = [
  { height: '40%', colorClass: 'bg-accent/40' },
  { height: '60%', colorClass: 'bg-accent/40' },
  { height: '30%', colorClass: 'bg-accent/40' },
  { height: '80%', colorClass: 'bg-primary/50' },
  { height: '50%', colorClass: 'bg-accent/40' },
  { height: '90%', colorClass: 'bg-accent/40' },
  { height: '45%', colorClass: 'bg-secondary/50' },
];

export const MOCK_CHILDREN: Child[] = [
  {
    id: '1',
    name: 'Sadie',
    age: 10,
    accountLabel: 'Savings Account',
    avatarUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/133.png',
    balance: '£42.50',
  },
  {
    id: '2',
    name: 'Samson',
    age: 9,
    accountLabel: 'Savings Account',
    avatarUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/6.png',
    balance: '£18.20',
  },
];

export const CHILD_TRANSACTIONS: Record<string, Transaction[]> = {
  '1': [
    { id: '1', merchant: 'Steam Store', category: 'Gaming', date: 'Yesterday', amount: '-£12.99', isPositive: false },
    { id: '2', merchant: 'Weekly Allowance', category: 'Allowance', date: 'Friday', amount: '+£10.00', isPositive: true },
    { id: '3', merchant: 'School Cafeteria', category: 'Food & Drink', date: '08 Apr', amount: '-£4.50', isPositive: false },
    { id: '4', merchant: 'Waterstones', category: 'Books', date: '05 Apr', amount: '-£8.99', isPositive: false },
  ],
  '2': [
    { id: '1', merchant: 'Roblox', category: 'Gaming', date: 'Today', amount: '-£4.99', isPositive: false },
    { id: '2', merchant: 'Weekly Allowance', category: 'Allowance', date: 'Friday', amount: '+£5.00', isPositive: true },
    { id: '3', merchant: 'School Canteen', category: 'Food & Drink', date: '08 Apr', amount: '-£2.50', isPositive: false },
    { id: '4', merchant: 'Birthday Money', category: 'Top-up', date: '01 Apr', amount: '+£20.00', isPositive: true },
  ],
};

export const CHILD_ALLOWANCES: Record<string, Allowance> = {
  '1': { amount: '£10.00', nextDate: 'Friday 10 Apr' },
  '2': { amount: '£5.00', nextDate: 'Friday 10 Apr' },
};

export const CARD_LABEL = 'Glacial Debit Card';

export interface AccountDetails {
  accountName: string;
  accountNumber: string;
  sortCode: string;
  iban: string;
  bankName: string;
}

export interface CardDetails {
  cardholderName: string;
  cardNumber: string;
  fullCardNumber: string;
  cvv: string;
  expiry: string;
  cardType: string;
  status: 'Active' | 'Frozen' | 'Cancelled';
}

export const CHILD_ACCOUNT_DETAILS: Record<string, AccountDetails> = {
  '1': {
    accountName: 'Sadie Green',
    accountNumber: '12345678',
    sortCode: '40-47-84',
    iban: 'GB29 NWBK 4047 8412 3456 78',
    bankName: 'Gardly Bank',
  },
  '2': {
    accountName: 'Samson Green',
    accountNumber: '87654321',
    sortCode: '40-47-84',
    iban: 'GB29 NWBK 4047 8487 6543 21',
    bankName: 'Gardly Bank',
  },
};

export const CHILD_CARD_DETAILS: Record<string, CardDetails> = {
  '1': {
    cardholderName: 'Sadie Green',
    cardNumber: '**** **** **** 4242',
    fullCardNumber: '4929 1837 6254 4242',
    cvv: '382',
    expiry: '08/28',
    cardType: 'Visa Debit',
    status: 'Active',
  },
  '2': {
    cardholderName: 'Samson Green',
    cardNumber: '**** **** **** 5353',
    fullCardNumber: '4716 2983 0147 5353',
    cvv: '519',
    expiry: '11/27',
    cardType: 'Visa Debit',
    status: 'Active',
  },
};

export interface InactiveCard {
  cardholderName: string;
  cardNumber: string;
  fullCardNumber: string;
  cvv: string;
  expiry: string;
  cardType: string;
  status: 'Cancelled' | 'Expired';
  closedDate: string;
}

export const CHILD_INACTIVE_CARDS: Record<string, InactiveCard[]> = {
  '2': [
    {
      cardholderName: 'Samson Green',
      cardNumber: '**** **** **** 1847',
      fullCardNumber: '4716 2983 0147 1847',
      cvv: '274',
      expiry: '03/24',
      cardType: 'Visa Debit',
      status: 'Expired',
      closedDate: 'Mar 2024',
    },
    {
      cardholderName: 'Samson Green',
      cardNumber: '**** **** **** 9012',
      fullCardNumber: '4929 1837 6254 9012',
      cvv: '631',
      expiry: '08/23',
      cardType: 'Visa Debit',
      status: 'Cancelled',
      closedDate: 'Aug 2023',
    },
  ],
};
