import React from 'react';
import Hero from './HeroPieceComponent';
import Carousel from './CarouselComponent';
import Featured from './FeaturedComponent';

function Home(props) {
    return (
        <React.Fragment>
            <Hero />
            <h2>What's in Need</h2>
            <Carousel items={props.need} />
            <hr />
            <h2>What's in Offer</h2>
            <Carousel items={props.offer} />
            <hr />
            <h2>Featured Oddjobbers</h2>
            <Featured items={props.users} />
        </React.Fragment>
    )
}

export default Home;