export const getToken = () => .get(Keys.tokenKey)
export const setToken = (token: string) => localStorage.set(token)
export const removeToken = () => Cookies.remove(Keys.tokenKey)
