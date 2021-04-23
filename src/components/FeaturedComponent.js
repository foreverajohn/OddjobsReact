import React from 'react'
import { Card, CardText, CardBody, CardTitle } from 'reactstrap'
import { Link } from 'react-router-dom';

function RenderCard({user}) {
    return (
        <Card className="mt-2">
            <CardTitle>
                <Link to={`/user/${user.name}`}><h4>{user.name}</h4></Link>
            </CardTitle>
            <CardBody>
                <div className="image"> 
                    <img src={user.pic} alt={user.name} class="rounded-circle" height="64" width="64" />
                </div>
                <CardText> 
                    <p>{user.bio}</p>
                    <div class="ratings ml-2"> 
                        {user.score} <i className="fa fa-star"></i> 
                    </div>
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
