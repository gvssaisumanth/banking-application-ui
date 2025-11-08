import type { AccountType } from "../../models/Accounts";

export const ACCOUNT_TYPE_OPTIONS: Array<{
  value: AccountType;
  label: string;
}> = [
  { value: "SAVINGS", label: "Savings Account" },
  { value: "CURRENT", label: "Current Account" },
  { value: "SALARY", label: "Salary Account" },
  { value: "FIXED_DEPOSIT", label: "Fixed Deposit Account" },
];

export const ACCOUNT_TYPE_DESCRIPTIONS: Record<AccountType, string> = {
  SAVINGS: "Standard savings account with interest",
  CURRENT: "Business/checking account with no interest",
  SALARY: "Account for salary credits with special benefits",
  FIXED_DEPOSIT: "Fixed-term deposit account with higher interest",
};
