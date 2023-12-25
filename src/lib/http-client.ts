import { config } from "@/config/config";

export interface FetchOptions {
  method: string;
  headers: {
    Authorization: string;
  };
}

export async function httpClient(endpoint: string, options: FetchOptions) {
  const url = config.asbBaseUrl + endpoint;
  const response = await fetch(url, options);
  return await response.json();
}
