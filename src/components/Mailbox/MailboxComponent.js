import React, { Component, StyleSheet } from 'react';
import '../../assets/css/Mailbox.scss';
// import arrow from '../../assets/icons/arrow.png';
// import bin from '../../assets/icons/bin.png';
// import cross from '../../assets/icons/cross.png';
import mail from '../../assets/icons/mail.svg';
import { listLabels } from "../../utils/gmailApi";
import EmailListingItem from "../Listing/EmailListingItem";
import card from '../../assets/icons/mail.svg';
import send from '../../assets/icons/send.svg';
import cross from '../../assets/icons/cross.svg';
import trash from '../../assets/icons/trash.svg';




export default class MailboxComponent extends Component {
    constructor() {
        super();
        this.state = {
            labels: null,
            styleForCard:  {}
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
    displayNotif(opacity) {
        this.setState({
            styleForCard: {opacity: opacity}
        })
    }








    render() {
        return (
            <div className={"mailBoxNavigation"}>
                <ul className={"navLinkContainer"}>
                    <li className={"navLinkItem"}>
        <a href={"#"} className={"navLink"}><img src={card} /> Boite de réception   <span> {this.props.nbMessages}</span></a>
                    </li>
                    <li className={"navLinkItem"}>
                        <i className="fas fa-external-link-alt navLinkIcon"></i>

                        <a href={"#"} className={"navLink"}><img src={send} />Envoyés</a>
                    </li>
                    <li className={"navLinkItem"}>
                        <a href={"#"} className={"navLink"}><img src={cross} />Indésirables</a>
                    </li>
                    <li className={"navLinkItem"}>
                        <a href={"#"} className={"navLink"}><img src={trash} />Corbeille</a>
                    </li>
                </ul>

                <span className={"navHr"}></span>

                <div className={"archiveContainer"}>
                    <span className={"archiveTitle"}>Archives</span>
                    <ul className={"archiveLinkContainer"}>
                        <li className={"archiveLinkItem"} onClick={() => this.displayNotif(1)}>Mails importants</li>
                        <li className={"archiveLinkItem"}>Comptabilité</li>
                        <li className={"archiveLinkItem"}>Ressources humaines</li>

                    </ul>
                </div>

                <span className={"navHr"}></span>

                <div className={"labelContainer"}>
                    <div style={this.state.styleForCard}>
                        <span>Attention</span>
                        38 mails seront supprimer lors de votre prochaine déconnexion
                        <button className={'btnNotif'}onClick={() => this.displayNotif(0)}>Vérifier ces mails</button>
                    </div>
                    <span className={"labelTitle"}>Labels</span>
                    <ul className={"labelLinkContainer"}>
                        {this.state.labels &&
                            this.state.labels.map((value, index) => {
                                return (
                                    <>
                                        <li className={"labelLinkItem"}><div></div>{value.name}</li>
                                    </>
                                )

                            })
                        }
                        <li className={"labelLinkItem"}><div></div>Commandes</li>
                        <li className={"labelLinkItem"}><div></div>Urgent</li>
                        <li className={"labelLinkItem"}><div></div>Dossier_3</li>
                    </ul>
                </div>

            </div>
        );
    }
}

