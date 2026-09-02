import {useActionState} from "react"
import {fakeLogin} from "../utils/fakeLogin.ts"
import Button from "./Button.tsx"
import type { State } from "../types/state.interface.ts"

const LoginForm = () => {

    const [{data, error}, submitAction] = useActionState<State, FormData>(login, {
        data: null,
        error: null
    })

    async function login(_prevState: State , formData: FormData){
        const username = formData.get('username') as string
        const password = formData.get('password') as string

        try {
            const data = await fakeLogin({username, password})
            console.log(data)
            return {data, error: null}
        } catch (error: unknown) {
            if (error instanceof Error) {
                return {data: null, error: error.message}
            } else {
                return {data: null, error: 'An unknown error has occurred.'}
            }
        }
    }

  return (
    <form className="login-form" action={submitAction}>
        <div className="form-group">
            <label htmlFor="username">Username</label>
            <input
                type="text"
                id="username"
                autoComplete="off"
                placeholder="Enter username"
                name="username"
            />
        </div>

        <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
                type="password"
                id="password"
                autoComplete="off"
                placeholder="Enter password"
                name="password"
            />
        </div>

        <Button />
        {data && <p className="login-form__message login-form__message--success">{data.username}</p>}
        {error && <p className="login-form__message login-form__message--error">{error}</p>}
    </form>
  )
}

export default LoginForm