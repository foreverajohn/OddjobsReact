import React from 'react'
import { Card, CardText, CardBody, CardTitle } from 'reactstrap'
import { Link } from 'react-router-dom';

function RenderCard({user}) {
    return (
        <Card className="mt-2">
            <CardTitle>
                <h4><Link to={`/user/${user.name}`}>{user.name}</Link></h4>
            </CardTitle>
            <CardBody>
                <div className="image"> 
                    <img src={user.pic} alt={user.name} className="rounded-circle" height="64" width="64" />
                </div>
                <CardText> 
                    {user.bio}
                    <span>{user.score} <i className="fa fa-star" /></span>
                </CardText>
            </CardBody>
            <div className="card-footer"> 
                <button className="btn btn-primary btn-block">Contact</button>                               
            </div>
        </Card>
    )
}

function Featured(props) {

    const profiles = props.items.map(item => {
        return (
            <div key={item.id} className="col-md-6 my-1">
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
