import type {UserInterface} from "../types/user.interface.ts";

const  API_URL = 'https://jsonplaceholder.typicode.com/users'

export const fetchData = async (): Promise<UserInterface[]> => {
    try {
        await new Promise(resolve => setTimeout(resolve, 2000))
        const response = await fetch(API_URL)
        if (!response.ok) throw new Error(String(response.status))

        return response.json()
    } catch (error) {
        console.error('Error in the code: ', error)
        throw new Error('Error fetching data from API: ', {cause: error})
    }
}