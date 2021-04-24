import { Card, CardText, CardBody, CardTitle, CardFooter } from 'reactstrap'
import { Link } from 'react-router-dom';

function RenderCard({post}) {
    return (
        <Card>
            <CardBody>
                <CardTitle><Link to={`/post/${post.id}`}>{post.title}</Link></CardTitle>
                <CardText>{post.body}</CardText>
                <CardFooter>
                    {post.urgency}{' '}
                    {post.pay}{' '}
                    {post.date}
                </CardFooter>
            </CardBody>
        </Card>
    )
}

function PostCarousel(props) {
    
    const posts = props.items.map(item => {
        return (
            <div key={item.id} className="col-md-6 my-1">
                <RenderCard post={item} />
            </div>
        );
    });
    
    return (
        <div className="row">
            {posts}
        </div>
    );
}

export default PostCarousel;