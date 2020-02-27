import React, { Component, StyleSheet } from 'react';
import '../../assets/css/Header.scss';
import search from '../../assets/icons/search.png';
import leaf from '../../assets/icons/leaf.png';
import card from '../../assets/icons/card.png';



export default class HeaderComponent extends Component {

    constructor() {
        super();
        this.state = {
            displayCard: 'none'
        };
    }

    displayCard() {
        let displayStyle = (this.state.displayCard === 'none') ? 'block' : 'none'
        this.setState({
            displayCard: displayStyle
        })
    }

    render() {
        return (
            <header className={"mainHeader"}>
                <div className={"headerContainer"}>
                    <div className={"baselineContainer"}>
                        <span className={"baseline"}>Tidy</span>
                    </div>
                    <div className={"secondHeaderContainer"}>
                        <img src={search} className={"searchIcon"}></img>
                        <input type={"text"} className={"searchBar"} placeholder={"Search"} />
                    </div>
                    <div className={"accountBar"}>
                        <button className={"newMailButton"}>Nouveau</button>
                        <div className={"accountInfo"}>
                            <img src={leaf} style={{ width: 30 }} />
                            <span className={"accountUsername"}>Votre emprunte carbone</span>
                            <button className={"consumeCarbone"} onClick={() => this.displayCard()}>{(parseInt(this.props.nbMessages) * 0.10).toFixed(1)} KG</button>
                            <div className={'notifCardCarbone'} style={{ display: this.state.displayCard }}>
                                <div>
                                    <span>
                                        <img src={card} /> <span>{this.props.nbMessages}</span> mails <span>non ouvert</span>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        );
    }
}

