import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import RegisterForm from "./components/pages/register_form/FormSignup"
import SignInForm from "./components/pages/signin_form/siginform";
import Subscribers from "./components/pages/subscribers/subscribers";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Template from "./components/pages/template/template";
import "grapesjs/dist/css/grapes.min.css"

function App() {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={SignInForm} />
                <Route exact path="/register" component={RegisterForm}></Route>
                <Route exact path="/subscribers" component={Subscribers}></Route>
                <Route exact path="/template" component={Template}></Route>
            </Switch>
        </Router>
    );
}

export default App;
