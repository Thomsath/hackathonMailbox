import React, {Component, StyleSheet} from 'react';
import { listMessages } from './../../utils/gmailApi';
import EmailListingItem from "./EmailListingItem";

export default class EmailListing extends Component {

    constructor() {
        super();
        this.state = {
            messages: [],
            messagesContent: [],
            message: null
        };
    }

    componentDidMount() {
        this.fetchMessages()
    }

    setMessage = (messages) => {
        this.setState({
            messages
        })
    };

    setMessageContent = (oldState, messagesContent) => {
        this.setState([...oldState, messagesContent]);
    };

    fetchMessages = async() => {
       listMessages('', this.setMessage);
    };

    setMessageState = (message) => {
        this.props.selectedMail(message);
    };

    render() {
        return (
            <ul className={"emailListing"}>
                {this.state.messages &&
                    this.state.messages.map((value, index) => {
                        return <EmailListingItem index={index} message={value} customClickEvent={this.setMessageState}/>
                    })
                }
            </ul>
        );
    }
}

