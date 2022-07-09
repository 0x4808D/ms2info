import cacheData from "memory-cache";

export async function fetchWithCache<T>(url: string, options: any) {
  const value = cacheData.get(url);
  if (value) {
    return value;
  } else {
    const hours = 24;
    const res = await fetch(url, options);
    const data: T = await res.json();
    cacheData.put(url, data, hours * 1000 * 60 * 60);
    return data;
  }
}
