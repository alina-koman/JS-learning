import {useActionState} from "react"
import {fakeLogin} from "../utils/fakeLogin.ts"
import type {LoginDataInterface} from "../types/loginData.interface.ts";

interface State {
    data: LoginDataInterface | null
    error: string | null
}

const LoginForm = () => {

    const [state, submitAction] = useActionState<State, FormData>(login, {
        data: null,
        error: null
    })

    async function login(prevState: State , formData: FormData){
        const username = formData.get('username') as string
        const password = formData.get('password') as string

        try {
            const data = await fakeLogin({username, password})
            console.log(data)
            return {data, error: null}
        } catch (error: unknown) {
            if (error instanceof Error) {
                return {...prevState, error: error.message}
            } else {
                return {...prevState, error: 'An unknown error has occurred.'}
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

        <button type={"submit"}>
            Log in
        </button>
        {state.data && <p className="login-form__message login-form__message--success">{state.data.username}</p>}
        {state.error && <p className="login-form__message login-form__message--error">{state.error}</p>}
    </form>
  )
}

export default LoginForm