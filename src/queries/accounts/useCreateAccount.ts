import { useMutation } from "@tanstack/react-query";
import { createAccountMutation } from "./helper";

export const useCreateAccount = () => {
  return useMutation({
    mutationFn: createAccountMutation,
    onSuccess: (data) => {
      console.log("Successfully created", data);
    },
    onError: (error: Error) => {
      console.log("Failed to create", error.message);
    },
  });
};
