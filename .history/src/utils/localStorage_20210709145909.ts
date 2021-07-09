export const getToken = () => .get(Keys.tokenKey)
export const setToken = (token: string) => localStorage.setItem('token',token)
export const removeToken = () => Cookies.remove(Keys.tokenKey)
