import type {LoginDataInterface} from "./loginData.interface.ts";

export interface State {
    data: LoginDataInterface | null
    error: string | null
}