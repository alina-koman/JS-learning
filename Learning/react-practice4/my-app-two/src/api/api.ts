import type {UserInterface} from "../types/user.interface.ts"
import {delay} from "../helpers/delay.ts"


const API_URL = "https://jsonplaceholder.typicode.com/users"

export const fetchData = async (): Promise<UserInterface[]> => {
    return delay(2000)
        .then(() => fetch(API_URL))
        .then((response: Response) => {
        if (!response.ok) {
            throw new Error("Failed to fetch data")
        }
        return response.json() as Promise<UserInterface[]>
    })
   .catch ((error)=> {
       console.log(error)
        return []
   })
}