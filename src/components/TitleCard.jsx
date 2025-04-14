

const TitleCard = (imgObjs) => {


    return(
        <div>
            <h1>City Among the Stars: Huntsville</h1>
            <img src={imgObjs.url} alt={imgObjs.alt} />
            <p> Nestled in the heart of Alabama, Huntsville, the City Among the Stars, blends Southern charm with cosmic ambition. From its pivotal role in space exploration to its thriving tech scene, it’s a place where history, innovation, and adventure converge. Explore a city that truly reaches for the stars!
            </p>
        </div>
    );

}


export default TitleCard;