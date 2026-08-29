import {type ChangeEvent, type SubmitEvent, useState} from 'react';

const useInput = (initialValue: string) => {
  const [value, setValue] = useState<string>(initialValue)

  return {
    value,
    onChange: (e: ChangeEvent<HTMLInputElement>) => setValue(e.target.value),
  }
}

const LoginForm = () => {
  const username = useInput('admin')
  const password = useInput('123')

    const handleSubmit = (e: SubmitEvent<HTMLFormElement>) => {
        e.preventDefault()
        console.log(username.value, password.value)
    }

    return (
        <form className="col-6 mx-auto" onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label" htmlFor="username">Username</label>
            <input
                type="text"
                className="form-control"
                id="username"
                name="username"
                placeholder="Username"
                {...username}
            />
          </div>

          <div className="mb-3">
            <label className="form-label" htmlFor="password">Password</label>
            <input
                type="password"
                className="form-control"
                id="password"
                name="password"
                placeholder="Password"
                {...password}
            />
          </div>

          <button type="submit" className="btn btn-primary">
            Login
          </button>
        </form>
        )
}

export default LoginForm