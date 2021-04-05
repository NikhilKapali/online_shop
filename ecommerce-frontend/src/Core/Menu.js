import { React, Fragment } from "react";
import { Link, withRouter } from "react-router-dom";
import { signout, isAuthenticated } from "../auth";

const isActive = (history, path) => {
    if (history.location.pathname === path) {
        return { color: '#ff9900' }
    }
    else {
        return { color: 'white' }
    }
}

function Menu({ history }) {
    return (
        <div>
            <ul className="nav nav-tabs bg-primary">
                <li className="nav-item">
                    <Link className="nav-link" to="/" style={isActive(history, '/')}>Home</Link>
                </li>
                {!isAuthenticated() && (
                    <Fragment>
                        <li className="nav-item">
                            <Link className="nav-link" to="/signin" style={isActive(history, '/signin')}>SignIn</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/signup" style={isActive(history, '/signup')}>SignUp</Link>
                        </li>
                    </Fragment>
                )}
                {isAuthenticated() && (
                    <li className="nav-item">
                        <span className="nav-link" onClick={() => signout(() => {
                            history.push('/signin')
                        })}
                            style={{ cursor: 'pointer', color: "white" }}>Log Out</span>
                    </li>
                )}
            </ul>
        </div>
    );
}

export default withRouter(Menu);
