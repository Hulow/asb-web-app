import { config } from "@/config/config";

export interface FetchOptions {
  method: string;
  headers: {
    Authorization: string;
  };
  cache: string;
}

export async function httpClient(method: string, endpoint: string) {
  const url = config.asbBaseUrl + endpoint;

  const options = {
    method: method,
    headers: {
      Authorization: config.asbKeyUrl,
    },
    cache: "no-cache",
  };
  const response = await fetch(url, {
    method: options.method,
    headers: { Authorization: options.headers.Authorization },
    cache: "no-store",
  });
  return await response.json();
}
