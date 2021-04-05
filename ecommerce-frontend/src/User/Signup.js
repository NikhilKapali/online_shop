import React, { useState } from 'react'
import Layout from '../Core/Layout'
import { Link } from 'react-router-dom'
import { signup } from "../auth"

const Signup = () => {

    const [values, setValues] = useState({
        name: '',
        email: '',
        password: '',
        error: '',
        success: false
    });

    const { name, email, password, success, error } = values;

    const handleChange = name => event => {
        setValues({ ...values, error: false, [name]: event.target.value })
    }

    const clickSubmit = event => {
        event.preventDefault();
        setValues({ ...values, error: false })
        signup({ name, email, password })
            .then(data => {
                if (data.error) {
                    setValues({ ...values, error: data.error, success: false })
                }
                else {
                    setValues({
                        ...values,
                        name: '',
                        email: '',
                        password: '',
                        error: '',
                        success: true
                    })
                }
            })

    }

    const signUpForm = () => (
        <form className="form-signin">
            {/* <img className="mb-4" src="/docs/5.0/assets/brand/bootstrap-logo.svg" alt="" width="72" height="57" /> */}
            <h1 className="h3 mb-3 fw-normal">Please Sign Up</h1>
            <div className="form-floating">
                <label htmlFor="floatingInput">Full Name</label>

                <input onChange={handleChange('name')} value={name} type="name" className="form-control" id="floatingInput" placeholder="Your Name" />
            </div>
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

    const showSuccess = () => {
        return (<div className="alert alert-info" style={{ display: success ? '' : 'none' }}>
            New Account Created <Link to="/signin" className="btn btn-success">SignIn?</Link>
        </div>)
    }

    return (
        <Layout title="SignUp" description="Node React App" className="container col-md-8 offset-md-2">
            {showSuccess()}
            {showError()}
            {signUpForm()}
        </Layout>
    )
}

export default Signup
