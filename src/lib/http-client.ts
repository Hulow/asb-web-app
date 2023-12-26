import { config } from "@/config/config";

export interface FetchOptions {
  method: string;
  headers: {
    Authorization: string;
  };
}

export async function httpClient(method: string, endpoint: string) {
  const url = config.asbBaseUrl + endpoint;

  const options: FetchOptions = {
    method: method,
    headers: {
      Authorization: config.asbKeyUrl,
    },
  };
  const response = await fetch(url, options);
  return await response.json();
}
