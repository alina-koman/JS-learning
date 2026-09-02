import type {UserInterface} from "../types/user.interface.ts"
import {delay} from "../helpers/delay.ts"


const API_URL = "https://jsonplaceholder.typicode.com/users"

export const fetchData = async (): Promise<UserInterface[]> => {
   try {
       await delay(2000)

       const response = await fetch(API_URL)

       if (!response.ok) {
           throw new Error("Failed to fetch data")
       }

       return response.json()
   }
   catch (error: unknown) {
       if (error instanceof Error) {
           throw new Error(`Error fetching data from API: ${error.message}`, {cause: error})
       }
       throw new Error("Unknown error", {cause: error})
   }
}