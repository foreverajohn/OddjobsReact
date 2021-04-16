import React from 'react'
import { Card, CardText, CardBody, CardTitle } from 'reactstrap'

function RenderCard({user}) {
    return (
        <div className="card mt-2">
            <div className="card-header">
                <a href="profile.html"><h4>{user.name}</h4></a>
            </div>
            <div className="card-body">
                <div className="image"> 
                <a href="#"> <img src={user.pic} class="rounded-circle" height="64" width="64" /> </a>
                </div>
                <div className="card-text"> 
                    <p>{user.bio}</p>
                    <div class="ratings ml-2"> 
                        {user.score} <i className="fa fa-star"></i> 
                    </div>
                </div>
            </div>
            <div className="card-footer"> 
                <button className="btn btn-primary btn-block">Contact</button>                               
            </div>
        </div>
    )
}

function Featured(props) {

    const profiles = props.items.map(item => {
        return (
            <div key={item.id} className="col-md-5 m-1">
                <RenderCard user={item} />
            </div>
        );
    });

    return (
        <div className="container">
            <div className="row">
                {profiles}
            </div>
        </div>
    )
}

export default Featured;
