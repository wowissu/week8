
const tokenKey = 'token-key'

export function setToken(token: string) {
  localStorage.setItem(tokenKey, token);
}

export function getToken() {
  return localStorage.getItem(tokenKey);
}