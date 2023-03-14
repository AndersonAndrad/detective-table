export const addToLocalStorage = (key: string, data: any) => {
  localStorage.setItem(key, JSON.stringify(data));
}

export const getToLocalStorage = (key: string) => {
  const items = localStorage.getItem(key)

  if (!items || !items.length) return []

  return JSON.parse(items)
}

export const removeToLocalStorage = (key: string) => {
  localStorage.removeItem(key);
} 