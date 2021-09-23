export const setObjInLS = (key, value) => {
  localStorage.setItem(key, value);
};

export const getObjFromLS = () => {
  return localStorage.getItem("page");
};
