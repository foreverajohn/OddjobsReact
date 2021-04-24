import React from 'react';
import Hero from './HeroPieceComponent';
import PostCarousel from './PostCarouselComponent';
import Featured from './FeaturedComponent';

function Home(props) {
    return (
        <React.Fragment>
            <Hero />
            <div className="container">
                <h2>What's in Need</h2>
                <PostCarousel items={props.need} />
                <hr />
                <h2>What's in Offer</h2>
                <PostCarousel items={props.offer} />
                <hr />
                <h2>Featured Oddjobbers</h2>
                <Featured items={props.users} />
            </div>
        </React.Fragment>
    )
}

export default Home;