export const getItemsFromLocalStorage = (key) => {
  const storedItems = localStorage.getItem(key);
  return storedItems ? JSON.parse(storedItems) : [];
};
export const setItemsToLocalStorage = (key, items) => {
  localStorage.setItem(key, JSON.stringify(items));
};

export const getItems = (key) => {
  return localStorage.getItem(key);
};

export const setItems = (key, item) => {
  localStorage.setItem(key, item);
};
