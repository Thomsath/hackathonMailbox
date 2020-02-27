import React, {Component, StyleSheet} from 'react';
import '../../assets/css/Mailbox.scss';
// import arrow from '../../assets/icons/arrow.png';
// import bin from '../../assets/icons/bin.png';
// import cross from '../../assets/icons/cross.png';
import mail from '../../assets/icons/mail.svg';
import {listLabels} from "../../utils/gmailApi";
import EmailListingItem from "../Listing/EmailListingItem";


export default class MailboxComponent extends Component {
    constructor() {
        super();
        this.state = {
            labels: null
        }
    }
    componentDidMount() {
        this.fetchLabels()
    };

    fetchLabels() {
        listLabels(this.setLabel)
    };

    setLabel = (labels) => {
        this.setState({
            labels
        });
    };

    render() {
        return (
            <div className={"mailBoxNavigation"}>
                <ul className={"navLinkContainer"}>
                    <li className={"navLinkItem"}>
                        <a href={"#"} className={"navLink"}>Boite de réception</a>
                    </li>
                    <li className={"navLinkItem"}>
                        <i className="fas fa-external-link-alt navLinkIcon"></i>

                        <a href={"#"} className={"navLink"}>Envoyés</a>
                    </li>
                    <li className={"navLinkItem"}>
                        <a href={"#"} className={"navLink"}>Indésirables</a>
                    </li>
                    <li className={"navLinkItem"}>
                        <a href={"#"} className={"navLink"}>Corbeille</a>
                    </li>
                </ul>

                <span className={"navHr"}></span>

                <div className={"archiveContainer"}>
                    <span className={"archiveTitle"}>Archives</span>
                    <ul className={"archiveLinkContainer"}>
                        <li className={"archiveLinkItem"}>Mails importants</li>
                        <li className={"archiveLinkItem"}>Comptabilité</li>
                        <li className={"archiveLinkItem"}>Ressources humaines</li>

                    </ul>
                </div>

                <span className={"navHr"}></span>

                <div className={"labelContainer"}>
                    <span className={"labelTitle"}>Labels</span>
                    <ul className={"labelLinkContainer"}>
                        {this.state.labels &&
                        this.state.labels.map((value, index) => {
                            return (
                                <>
                                <li className={"labelLinkItem"}>{value.name}</li>
                                </>
                                )

                        })
                        }
                    </ul>
                </div>

            </div>
        );
    }
}

