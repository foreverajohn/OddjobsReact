import React from 'react'

function PostDescription(props) {
    return (
        <React.Fragment>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <div className="title pt-3">
                            <h1>{props.post.title}</h1>
                        </div>    
                        <div className="user-meta">
                            <p className="lead">Posted by {props.post.author}</p>
                        </div>
                    </div>
                    <div className="col-10 pr-6 pt-5 align-self-end">
                        <p>{props.post.body}</p>
                        <p className="text-muted">{props.post.date}</p>   
                        <button type="button" className="btn btn-primary mb-5" data-toggle="modal" data-target="#offerModal">Offer to help!</button>
                        <hr />         
                    </div>
                </div>
                <div className="row">
                    <div className="col-10 pt-5">
                        <form>
                            <div className="form-group">
                                <label><h5>Ask something:</h5></label>
                                <textarea className="form-control" rows="3" placeholder="Say something"></textarea>
                                <button type="submit" className="btn btn-primary mt-3">Submit</button>
                            </div>
                        </form>
                    </div>
                </div> 
            </div>
        </React.Fragment>
    )
}

export default PostDescription
