export function saveUser(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}
