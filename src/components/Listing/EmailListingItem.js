import React, {Component, StyleSheet} from 'react';

export default class EmailListingItem extends Component {

    constructor() {
        super();
        this.state = {
          subject: ""
        };
    }

    componentDidMount(prevProps, prevState, snapshot) {
        console.log(this.props.message)
        this.props.message.payload.headers.map(item => {
            if(item['name'] === "Subject") {
                this.setState({
                    subject: item['value']
                });
            }
        });
    }

    render() {
        return (
            <li onClick={() => this.props.customClickEvent(this.props.message)} data-index={this.props.index}>
                {this.state.subject &&
                    <h3>{this.state.subject}</h3>
                }
                <p>{this.props.message.snippet}</p>
            </li>
        );
    }
}

