const API_ROOT = `http://localhost:3000`;
const HEADERS = {
  'Content-Type': 'application/json',
  'Accept': 'application/json',
  //'Access-Control-Allow-Origin': '*',
  //'Access-Control-Allow-Methods': 'GET, POST, PATCH, PUT, DELETE, OPTIONS'
};
export const createUser = (user) => {
    console.log("API:", user)
    return fetch(`${API_ROOT}/users`, {
      method: 'POST',
      headers: HEADERS,
      body: JSON.stringify(user)
    })
    .then(res => res.json())
  }