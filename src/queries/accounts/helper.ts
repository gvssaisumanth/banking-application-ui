import type {
  CreateAccountRequest,
  CreateAccountResponse,
} from "../../models/Accounts";
import type { ApiError } from "../../models/Errors/types";

import { getApiUrl } from "../../clients/utils";
import { ACCOUNT_API_END_POINTS } from "../../clients/account.ts/account-routes";

export const createAccountMutation = async (
  data: CreateAccountRequest
): Promise<CreateAccountResponse> => {
  const response = await fetch(getApiUrl(ACCOUNT_API_END_POINTS.create), {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    const error: ApiError = await response.json();
    throw new Error(error.message || "Failed to create account");
  }

  return response.json();
};
