
function 
if (!window.localStorage) {
    console.log('浏览器版本太低，不支持localStorage')
} 

export const getToken = () => localStorage.getItem('token')
export const setToken = (token: string) => localStorage.setItem('token',token)
export const removeToken = () =>localStorage.removeItem('token')
