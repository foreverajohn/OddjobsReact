import React, { Component } from 'react'

export class SearchToggle extends Component {

    constructor(props) {
        super(props);
            this.state = {
                toggleClick: false
            };
        this.toggleSwitch = this.toggleSwitch.bind(this);
    };

    toggleSwitch() {
        this.setState({
            toggleClick: !this.state.toggleClick
        });
    }

    render() {
        let style = this.state.toggleClick ? {right: "60px"} : {right: "115px"}
        let need = this.state.toggleClick ? "/assets/images/Need_alt.svg" : "/assets/images/Need.svg"
        let offer = this.state.toggleClick ? "/assets/images/Offer_alt.svg" : "/assets/images/Offer.svg"
        return (
            <div onClick={this.toggleSwitch}>
                <p>I <span id="toggle"><img src="/assets/images/Rectangle 3.png" id="bgrect" />
                <img src="/assets/images/Rectangle 5.png" style={style} id="smrect" />
                <img src={need} id="need"/><img src={offer} id="offer"/></span> help with:</p>
            </div>
        )
    }
}

export default SearchToggle
