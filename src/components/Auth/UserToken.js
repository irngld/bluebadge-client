const updateToken = (newToken) => {
  localStorage.setItem("token", newToken);
  // setSessionToken(newToken);
};

const clearToken = () => {
  // localStorage.clear();
  localStorage.removeItem("token");
  localStorage.removeItem("user");
};

const setUser = (user) => {
  localStorage.setItem("user", JSON.stringify(user));
};

const getUser = () => {
  return localStorage.getItem("user");
};

export { updateToken, clearToken, setUser, getUser };
