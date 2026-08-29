import {type SubmitEvent, useState} from 'react';

const LoginForm = () => {
    const [user, setUser] = useState('admin')
    const [password, setPassword] = useState('123')
    const handleSubmit = (e: SubmitEvent<HTMLFormElement>) => {
        e.preventDefault()
        console.log(user, password)
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
                    onChange={(e) => setUser(e.target.value)}
                    value={user}
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
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                />
            </div>

            <button type="submit" className="btn btn-primary">
                Login
            </button>
        </form>
    )
}

export default LoginForm