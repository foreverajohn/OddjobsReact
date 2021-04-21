import { Card, CardText, CardBody, CardTitle, CardFooter } from 'reactstrap'

function RenderCard({post}) {
    return (
        <Card>
            <CardBody>
                <CardTitle>{post.title}</CardTitle>
                <CardText>{post.body}</CardText>
                <CardFooter>
                    {post.urgency} // 
                    {post.pay} // 
                    {post.age}
                </CardFooter>
            </CardBody>
        </Card>
    )
}

function PostCarousel(props) {
    
    const posts = props.items.map(item => {
        return (
            <div key={item.id} className="col-md-5 m-1">
                <RenderCard post={item} />
            </div>
        );
    });
    
    return (
        <div className="container">
            <div className="row">
                {posts}
            </div>
        </div>
    );
}

export default PostCarousel;