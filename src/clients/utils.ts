import { API_BASE_URL } from "./constants";

type PathParams = Record<string, string | number>;

/**
 * Builds a complete API URL with path parameters
 * @param endpoint - The endpoint path (can contain :param placeholders)
 * @param params - Object with parameter values to replace in the path
 * @returns Complete URL with base URL and replaced parameters
 *
 * @example
 * getApiUrl(API_ENDPOINTS.ACCOUNTS.GET_BY_ID, { id: '123' })
 * // Returns: 'http://localhost:8080/api/accounts/123'
 */
export const getApiUrl = (endpoint: string, params?: PathParams): string => {
  let url = `${API_BASE_URL}${endpoint}`;

  if (params) {
    Object.entries(params).forEach(([key, value]) => {
      url = url.replace(`:${key}`, String(value));
    });
  }

  return url;
};

/**
 * Builds a URL with query parameters
 * @param endpoint - The endpoint path
 * @param queryParams - Object with query parameter key-value pairs
 * @returns Complete URL with query string
 *
 * @example
 * getApiUrlWithQuery(API_ENDPOINTS.ACCOUNTS.LIST, { page: 1, limit: 10 })
 * // Returns: 'http://localhost:8080/api/accounts?page=1&limit=10'
 */
export const getApiUrlWithQuery = (
  endpoint: string,
  queryParams?: Record<string, string | number | boolean>
): string => {
  const url = getApiUrl(endpoint);

  if (!queryParams) {
    return url;
  }

  const searchParams = new URLSearchParams();
  Object.entries(queryParams).forEach(([key, value]) => {
    searchParams.append(key, String(value));
  });

  const queryString = searchParams.toString();
  return queryString ? `${url}?${queryString}` : url;
};

// Export base URL for direct access if needed
export { API_BASE_URL };
