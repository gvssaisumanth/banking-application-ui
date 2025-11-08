export type AccountType = "SAVINGS" | "CURRENT" | "SALARY" | "FIXED_DEPOSIT";

export interface CreateAccountRequest {
  customerId: string;
  accountType: AccountType;
  currency: string;
  customerName: string;
  email: string;
  phoneNumber?: string;
}

//
export interface CreateAccountResponse {
  accountId: string;
  customerId: string;
  accountNumber: string;
  accountType: string;
  currency: string;
  status: string;
  customerName: string;
  email: string;
  phoneNumber: string;
  createdAt: string;
}
