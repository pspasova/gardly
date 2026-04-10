export type TransactionCategory = 'Gaming' | 'Allowance' | 'Food & Drink' | 'Top-up' | 'Books' | 'Other';

export interface Transaction {
  id: string;
  merchant: string;
  category: TransactionCategory;
  date: string;
  amount: string;
  isPositive: boolean;
}
