import { Card, CardText, CardBody, CardTitle, CardFooter } from 'reactstrap'
import Carousel from "react-elastic-carousel";
import { Link } from 'react-router-dom';
import Item from "../Item";

const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 3 },
    { width: 768, itemsToShow: 4 },
    { width: 1200, itemsToShow: 4 },
    { width: 1400, itemsToShow: 8 },
  ];

const background = {
    backgroundImage: "url(/assets/images/cork.jpg)",
    padding: '20px',
    borderRadius: '5px'
}

function RenderCard({post}) {
    return (
        <Card className='gig-card'>
            <CardBody>
                <CardTitle className='card-title'><Link to={`/post/${post.id}`}>{post.title}</Link></CardTitle>
                <CardText>{post.body}</CardText>
                <CardFooter className='card-footer'>
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
            <Item key={item.id} >
                <div className="col">
                    <RenderCard post={item} />
                </div>
            </Item>
        );
    });
    
    return (
        <div className="row" style={background} id="carousel-wrapper">
            <Carousel breakPoints={breakPoints}>
                {posts} 
            </Carousel>               
        </div>
    );
}

export default PostCarousel;