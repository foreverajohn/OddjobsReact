import React from 'react'

function UserProfile({user}) {
    return (
        <React.Fragment>
            <div className="container mt-5">
                <div className="row">
                    <div className="col-md-4 mb-3">
                        <div className="card">
                            <div className="card-body">
                                <div className="image d-flex flex-column align-items-center text-center">
                                    <img src={user.pic} alt={user.name} className="rounded-circle" height="80" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-8">
                        <div className="card mb-4">
                            <div className="card-body">
                                <div className="row">
                                    <div className="col-sm-3">
                                        <h6 className="mb-0">Full Name</h6>
                                    </div>
                                    <div className="col-sm-9 text-secondary">
                                        {user.name}
                                    </div>
                                </div>
                                <hr />
                                <div className="row">
                                    <div className="col-sm-3">
                                        <h6 className="mb-0">Email</h6>
                                    </div>
                                    <div className="col-sm-9 text-secondary">
                                        {user.email}
                                    </div>
                                </div>
                                <hr />
                                <div className="row">
                                    <div className="col-sm-3">
                                        <h6 className="mb-0">Phone</h6>
                                    </div>
                                    <div className="col-sm-9 text-secondary">
                                        {user.phone}
                                    </div>
                                </div>
                                <hr />
                                <div className="row">
                                    <div className="col-sm-3">
                                        <h6 className="mb-0">Oddjobs Score</h6>
                                    </div>
                                    <div className="col-sm-9 text-secondary">
                                        {user.score}
                                    </div>
                                </div>
                                <hr />
                                <div className="row">
                                    <div className="col-sm-3">
                                        <h6 className="mb-0">Address</h6>
                                    </div>
                                    <div className="col-sm-9 text-secondary">
                                        {user.address}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col mb-3">
                                <div className="card h-100">
                                    <h5 className="card-header">Leave a Comment:</h5>
                                    <div className="card-body">
                                        <form>
                                            <div className="form-group">
                                            <textarea className="form-control" rows="3"></textarea>
                                            </div>
                                            <button type="submit" className="btn btn-primary">Submit</button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="media my-4">
                            <img className="d-flex mr-3 rounded-circle" src="img/rosalina.png" height="64" alt="" />
                            <div className="media-body">
                                <h5 className="mt-0">Rosalina Munoz</h5>
                                Mario is a great plumber, I'd recommend him any day!
                            </div>
                        </div>
                    </div>
                </div>      
            </div>
        </React.Fragment>
    )
}

export default UserProfile
