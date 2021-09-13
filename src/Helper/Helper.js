export const setObjLS = (key, value) => {
  localStorage.setItem(key, value);
};

export const getObjLS = (key) => {
  return localStorage.getItem(`${key}`);
};
