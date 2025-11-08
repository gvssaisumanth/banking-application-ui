import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { accountSchema } from "./schema";
import type { AccountFormData } from "./schema";
import { useCreateAccount } from "../../queries/accounts/useCreateAccount";

export function CreateAccountForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<AccountFormData>({
    resolver: yupResolver(accountSchema),
    mode: "onBlur",
  });

  const {
    mutate: createAccount,
    isPending,
    isSuccess,
    isError,
    error,
  } = useCreateAccount();

  const onSubmit = (data: AccountFormData) => {
    createAccount(data, {
      onSuccess: (response) => {
        alert(
          `Account created successfully! Account Number: ${response.accountNumber}`
        );
        reset();
      },
      onError: (err) => {
        alert(`Failed to create account: ${err.message}`);
      },
    });
  };

  return (
    <div className="bg-gradient-to-br from-blue-50 to-indigo-100 py-12">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">
            Create New Account
          </h2>
          <p className="text-gray-600 mb-8">
            Fill in the details to open a new bank account
          </p>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            {/* Customer Information */}
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Customer Information
              </h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Customer ID <span className="text-red-500">*</span>
                  </label>
                  <input
                    {...register("customerId")}
                    type="text"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                    placeholder="CUST123456"
                  />
                  {errors.customerId && (
                    <p className="mt-1 text-sm text-red-600">
                      {errors.customerId.message}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Customer Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    {...register("customerName")}
                    type="text"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                    placeholder="John Doe"
                    maxLength={255}
                  />
                  {errors.customerName && (
                    <p className="mt-1 text-sm text-red-600">
                      {errors.customerName.message}
                    </p>
                  )}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <input
                      {...register("email")}
                      type="email"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                      placeholder="john.doe@example.com"
                    />
                    {errors.email && (
                      <p className="mt-1 text-sm text-red-600">
                        {errors.email.message}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number{" "}
                      <span className="text-gray-400">(Optional)</span>
                    </label>
                    <input
                      {...register("phoneNumber")}
                      type="tel"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                      placeholder="+11234567890"
                    />
                    {errors.phoneNumber && (
                      <p className="mt-1 text-sm text-red-600">
                        {errors.phoneNumber.message}
                      </p>
                    )}
                    <p className="mt-1 text-xs text-gray-500">
                      Format: E.164 (e.g., +11234567890)
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Account Details
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Account Type <span className="text-red-500">*</span>
                  </label>
                  <select
                    {...register("accountType")}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                  >
                    <option value="">Select account type</option>
                    <option value="SAVINGS">Savings Account</option>
                    <option value="CURRENT">Current Account</option>
                    <option value="SALARY">Salary Account</option>
                    <option value="FIXED_DEPOSIT">Fixed Deposit Account</option>
                  </select>
                  {errors.accountType && (
                    <p className="mt-1 text-sm text-red-600">
                      {errors.accountType.message}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Currency <span className="text-red-500">*</span>
                  </label>
                  <input
                    {...register("currency")}
                    type="text"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent uppercase"
                    placeholder="USD"
                    maxLength={3}
                    style={{ textTransform: "uppercase" }}
                  />
                  {errors.currency && (
                    <p className="mt-1 text-sm text-red-600">
                      {errors.currency.message}
                    </p>
                  )}
                  <p className="mt-1 text-xs text-gray-500">
                    3-letter ISO 4217 code (e.g., USD, EUR, GBP)
                  </p>
                </div>
              </div>
            </div>

            {/* Account Type Information */}
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <h4 className="text-sm font-semibold text-blue-900 mb-2">
                Account Type Information
              </h4>
              <ul className="text-sm text-blue-800 space-y-1">
                <li>
                  <strong>SAVINGS:</strong> Standard savings account with
                  interest
                </li>
                <li>
                  <strong>CURRENT:</strong> Business/checking account with no
                  interest
                </li>
                <li>
                  <strong>SALARY:</strong> Account for salary credits with
                  special benefits
                </li>
                <li>
                  <strong>FIXED_DEPOSIT:</strong> Fixed-term deposit account
                  with higher interest
                </li>
              </ul>
            </div>

            {/* Submit Buttons */}
            <div className="flex gap-4 pt-4">
              <button
                type="submit"
                disabled={isSubmitting}
                className="flex-1 bg-indigo-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-indigo-700 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors"
              >
                {isSubmitting ? "Creating Account..." : "Create Account"}
              </button>
              <button
                type="button"
                onClick={() => reset()}
                className="px-6 py-3 border-2 border-gray-300 text-gray-700 rounded-lg font-semibold hover:bg-gray-50 transition-colors"
              >
                Reset
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
