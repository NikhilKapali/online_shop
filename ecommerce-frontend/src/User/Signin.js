import React, { useState } from 'react'
import Layout from '../Core/Layout'
import { Redirect } from 'react-router-dom'
import { signin, authenticate } from "../auth"

function Signin() {
    const [values, setValues] = useState({
        email: 'new@gail.com',
        password: 'bbbbbbbb1',
        error: '',
        loading: false,
        redirectToReferrer: false,
    });

    const { email, password, loading, error, redirectToReferrer } = values;

    const handleChange = name => event => {
        setValues({ ...values, error: false, [name]: event.target.value })
    }

    const clickSubmit = event => {
        event.preventDefault();
        setValues({ ...values, error: false, loading: true })
        signin({ email, password })
            .then(data => {
                if (data.error) {
                    setValues({ ...values, error: data.error, loading: false })
                }
                else {
                    authenticate(
                        data, () => {
                            setValues({
                                ...values,
                                redirectToReferrer: true
                            })
                        }
                    )
                }
            })

    }

    const signInForm = () => (
        <form className="form-signin">
            {/* <img className="mb-4" src="/docs/5.0/assets/brand/bootstrap-logo.svg" alt="" width="72" height="57" /> */}
            <h1 className="h3 mb-3 fw-normal">Please Sign In to Continue</h1>
            <div className="form-floating">
                <label htmlFor="floatingInput">Email address</label>

                <input onChange={handleChange('email')} value={email} type="email" className="form-control" id="floatingInput" placeholder="name@example.com" />
            </div>
            <div className="form-floating">
                <label htmlFor="floatingPassword">Password</label>

                <input onChange={handleChange('password')} value={password} type="password" className="form-control" id="floatingPassword" placeholder="Password" />
            </div>

            {/* <div className="checkbox mb-3">
                    <label>
                        <input type="checkbox" value="remember-me" /> Remember me
      </label>
                </div> */}
            <hr />
            <button onClick={clickSubmit} className="w-100 btn btn-lg btn-primary" type="submit">Sign UP</button>
            <p className="mt-5 mb-3 text-muted">&copy; 2021–2021</p>
        </form>
    )

    const showError = () => {
        return (<div className="alert alert-danger" style={{ display: error ? '' : 'none' }}>
            {error}
        </div>)
    }

    const showLoading = () => (
        loading && (
            <div className="alert alert-info">
                <h2>loading...</h2>
            </div>
        )
    );
    const redirectUser = () => {
        if (redirectToReferrer) {
            return <Redirect to="/" />
        }
    }
    return (
        <Layout title="SignIn" description="Node React App" className="container col-md-8 offset-md-2">
            {showLoading()}
            {showError()}
            {signInForm()}
            {redirectUser()}
        </Layout>
    )
}

export default Signin
