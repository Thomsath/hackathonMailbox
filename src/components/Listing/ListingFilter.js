import React, {Component, StyleSheet} from 'react';
import {listMessages} from './../../utils/gmailApi';
import EmailListingItem from "./EmailListingItem";

export default class ListingFilter extends Component {

    constructor() {
        super();
        this.state = {
            isSelected: false
        };
    }

    render() {
        console.log(this.props.labels);
        return (
            <div className={"searchScroll"}>
                <div className={"containerSearchItem"}>
                    {this.props.labels &&
                    this.props.labels.map(label => {
                        return <span className={this.state.isSelected ? "searchItem selected" : "searchItem"} onClick={this.handleClick}>{label.name}</span>
                    })
                    }
                </div>
            </div>
        )
    }
}
