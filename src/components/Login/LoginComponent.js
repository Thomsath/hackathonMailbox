import React, {Component, StyleSheet} from 'react';
import '../../assets/css/Login.scss';
import ConnectBtn from "../ConnectBtn";


export default class LoginComponent extends Component {

    constructor() {
        super();
    }

    render() {
        return (

            <div className={"loginContainer"}>
                <span className={"loginPageTitle"}>Tidy</span>
                <div className={"loginFormContainer"}>
                    <input type={"text"} className="emailInput" placeholder={"adresse email"}/>
                    <input type={"password"} className="passwordInput" placeholder={"mot de passe"}/>
                    <div className={"linksContainer"}>
                        <a href={"#"} className={"forgottenPasswordLink"}>Mot de passe oublié?</a>
                        <button className={"loginButton"}>Se connecter</button>
                    </div>
                </div>
                <ConnectBtn/>

            </div>

        );
    }
}
