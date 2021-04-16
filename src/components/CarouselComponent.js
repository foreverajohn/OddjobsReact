import { Card, CardText, CardBody, CardTitle } from 'reactstrap'

function RenderCard({post}) {
    return (
        <Card>
            <CardBody>
                <CardTitle>{post.title}</CardTitle>
                <CardText>{post.body}</CardText>
            </CardBody>
        </Card>
    )
}

function Carousel(props) {
    
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

export default Carousel;