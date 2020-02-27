import React, {Component, StyleSheet} from 'react';
import '../../assets/css/Header.scss';
import search from '../../assets/icons/search.png';


export default class HeaderComponent extends Component {

    constructor() {
        super();
    }

    render() {
        return (
            <header className={"mainHeader"}>
                <div className={"headerContainer"}>
                    <div className={"baselineContainer"}>
                        <span className={"baseline"}>Tidy</span>
                    </div>
                    <img src={search} className={"searchIcon"}></img>
                    <input type={"text"} className={"searchBar"} placeholder={"Search"}/>
                    <div className={"accountBar"}>
                        <button className={"newMailButton"} onClick={this.props.showNewMessage}>Nouveau</button>
                        <div className={"accountInfo"}>
                            <span className={"accountUsername"}>Jean Richard</span>
                            <span className={"accountLink"}>Mon compte</span>
                        </div>
                    </div>
                </div>
            </header>
        );
    }
}

