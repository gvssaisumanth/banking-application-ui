import * as yup from "yup";
import type { CreateAccountRequest, AccountType } from "./types";

export const accountSchema: yup.ObjectSchema<CreateAccountRequest> = yup.object(
  {
    customerId: yup.string().required("Customer ID is required"),
    accountType: yup
      .mixed<AccountType>()
      .oneOf(
        ["SAVINGS", "CURRENT", "SALARY", "FIXED_DEPOSIT"],
        "Invalid account type"
      )
      .required("Account type is required"),
    currency: yup
      .string()
      .required("Currency is required")
      .matches(/^[A-Z]{3}$/, "Currency must be 3-letter ISO code")
      .length(3, "Currency must be exactly 3 characters"),
    customerName: yup
      .string()
      .required("Customer name is required")
      .max(255, "Customer name must not exceed 255 characters"),
    email: yup
      .string()
      .required("Email is required")
      .email("Invalid email format"),
    phoneNumber: yup
      .string()
      .matches(/^\+?[1-9]\d{1,14}$/, "Invalid phone number format")
      .optional(),
  }
);

export type AccountFormData = CreateAccountRequest;
