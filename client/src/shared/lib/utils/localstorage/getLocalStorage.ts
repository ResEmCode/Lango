export const getLocalStorage = <T extends string>(title: string): T | undefined => {
  const data = localStorage.getItem(title);

  if (!data) {
    return;
  }

  if (typeof data !== 'string') {
    return;
  }

  return data as T;
};
