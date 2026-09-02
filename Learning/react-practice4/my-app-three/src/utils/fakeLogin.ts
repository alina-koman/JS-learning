import type {LoginDataInterface} from "../types/loginData.interface.ts";

export const fakeLogin = async ({username, password}: LoginDataInterface): Promise<LoginDataInterface> => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (!username.trim() || !password.trim()) {
                reject(new Error('Username and password are required'))
            } else {
                resolve({username, password})
            }
        }, 1000)
    })
}