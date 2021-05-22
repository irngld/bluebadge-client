    
const updateToken = (newToken) => {
  localStorage.setItem('token', newToken);
  // setSessionToken(newToken);
}

const clearToken = () => {
  
  // localStorage.clear();
  localStorage.removeItem('token');
}



  export { updateToken, clearToken};