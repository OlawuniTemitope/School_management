/** @type {String[]} */
export const publicRoutes: string[] =[
]
/** @type {String[]} */
export const authRoutes: string[] = [
    "/auth/login" ,
    "/auth/register",
    "/auth/error",
    "/auth/reset",
]
/** @type {String} */
export const apiRoutePrefix: string ="/api/auth"
/** @type {String} */
export  const DEFAULT_LOGIN_REDIRECT: string ="/"