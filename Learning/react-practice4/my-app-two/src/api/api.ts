import type {UserInterface} from "../types/user.interface.ts"
import {delay} from "../helpers/delay.ts";

const API_URL = "https://jsonplaceholder.typicode.com"
const API_USERS_ENDPOINT = API_URL + "/users"
const DELAY = 2000
const OPTIONS = {
    method: "GET",
    headers: {
        "Content-Type": "application/json",
        "User-Agent": "Mozilla/5.0",
    }
}

export const fetchData: Promise<UserInterface> = (async () => {
    const [response] = await Promise.all([
        fetch(API_USERS_ENDPOINT, OPTIONS),
        delay(DELAY)
    ])

    if (!response.ok) {
        throw new Error("Failed to fetch data")
    }
     return response.json()
})()