import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Signup from '../src/User/Signup'
import Signin from '../src/User/Signin'
import Home from '../src/Core/Home';


function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact path component={Home} />
                <Route path="/signin" exact component={Signin} />
                <Route path="/signup" exact component={Signup} />
            </Switch>
        </BrowserRouter>
    )
}

export default Routes
