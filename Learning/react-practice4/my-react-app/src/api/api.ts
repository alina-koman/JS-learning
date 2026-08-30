import type {UserInterface} from "../types/user.interface.ts";
import {delay} from "../helpers/delay.ts";
import axios from "axios";

const  API_URL = 'https://jsonplaceholder.typicode.com/users'

export const fetchData = async (): Promise<UserInterface[]> => {
    try {
        await delay(2000)
        const response = await axios.get(API_URL)

        return response.data
    } catch (error: unknown) {
        if(axios.isAxiosError(error)) {
            throw new Error(`Error fetching data from API: ${error.message}`, {cause: error})
        }
        throw new Error(`Unknown error: `, {cause: error})
    }
}