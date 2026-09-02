import type {UserInterface} from "../types/user.interface.ts"
import {delay} from "../helpers/delay.ts"

const API_URL = "https://jsonplaceholder.typicode.com"
const API_USERS_ENDPOINT_VALID = API_URL + "/users"
const API_USERS_ENDPOINT_INVALID = API_URL + "/users/invalid"
const DELAY = 2000
const OPTIONS = {
    method: "GET",
    headers: {
        "Content-Type": "application/json",
        "User-Agent": "Mozilla/5.0",
    }
}

export const fetchData = async (simulateError = false ): Promise<UserInterface[]>   => {
    const [response] = await Promise.all([
        fetch(simulateError ? API_USERS_ENDPOINT_INVALID : API_USERS_ENDPOINT_VALID, OPTIONS),
        delay(DELAY)
    ])

    if (!response.ok) {
        throw new Error("Failed to fetch data")
    }
     return response.json()
}