import React, { Component } from 'react'
import { Jumbotron } from 'reactstrap';
import SearchToggle from './SearchToggleComponent';

export class HeroPiece extends Component {
    render() {
        const background ={
            backgroundImage: "url(/assets/images/handymans-apron.jpg)",
            backgroundPosition: "center top",
            backgroundSize: "cover"
        }
        return (
            <Jumbotron fluid style={background}>
                <div className="container">
                    <div className="row mx-auto" id="searchDiv">
                        <div className="col-10 mx-auto" id="searchSelect">
                            <SearchToggle />
                        </div>
                        <div className="col-10 mx-auto">
                            <form className="form-group">
                                <input className="form-control mx-auto" type="text" placeholder="Search" />
                            </form>
                        </div>
                    </div>
                </div>
            </Jumbotron>
        )
    }
}

export default HeroPiece
