import React, { Component } from 'react'
import { Jumbotron } from 'reactstrap';

export class HeroPiece extends Component {
    render() {
        return (
            <div>
                <Jumbotron fluid>
                    <div className="container">
                        <div className="row mx-auto" id="searchDiv">
                            <div className="col-10 mx-auto" id="searchSelect">
                                <p>I help with:</p>
                            </div>
                            <div className="col-10 mx-auto">
                                <form className="form-group">
                                    <input className="form-control mx-auto" type="text" placeholder="Search" />
                                </form>
                            </div>
                        </div>
                    </div>
                </Jumbotron>
            </div>
        )
    }
}

export default HeroPiece
