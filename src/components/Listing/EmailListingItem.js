import React, {Component, StyleSheet} from 'react';

export default class EmailListingItem extends Component {

    constructor() {
        super();
        this.state = {
            subject: "",
            date: "",
            from: "",
            className: "",
            selected: false
        };
    }

    componentDidMount(prevProps, prevState, snapshot) {
        this.props.message.payload.headers.map(item => {
            if (item['name'] === "Subject") {
                this.setState({
                    subject: item['value']
                });
            }
            if (item['name'] === 'Date') {
                this.setState({
                    date: item['value']
                });
            }
            if (item['name'] === 'From') {
                this.setState({
                    from: item['value']
                });
            };
            this.setLabelIds(this.props.message.labelIds);
        });
    }

    setLabelIds(ids) {
        let className = "";
        ids.map(id => {
            className += " " + id;
        });
        this.setState({
            className: className.toLowerCase()
        })
    }

    showFrom(from) {
        const start = from.indexOf('<');
        const end = from.indexOf('>');
        return from.substring(0, start);
    }

    showResumee(snippet) {
        return snippet.substring(0, 60) + '...';
    }

    render() {
        return (
            <>
            {
                this.state.className &&
                    !this.state.className.includes('sent') &&
                    <li onClick={() => {
                        this.props.customClickEvent(this.props.message, this.state.subject, this.state.date, this.state.from);
                        this.setState({selected: true})
                    }}
                        data-index={this.props.index}
                        className={this.state.selected ? "emailItem item" : "emailItem item" + this.state.className}>
                        {this.state.subject &&
                        <>
                            <p className={"fromLabel"}> {this.showFrom(this.state.from)}</p>
                            <h3 className={"bold subjectLabel"}>
                                <div className={'red'}></div>
                                <span className={"listingItemText"}>{this.state.subject}</span></h3>
                        </>
                        }
                        <p>{this.showResumee(this.props.message.snippet)}</p>
                    </li>
            }
            </>

        );
    }
}

