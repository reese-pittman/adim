import '../../style/titleCardStyle.css'


function choosePicture(list){   
    return(list[Math.floor(Math.random()*list.length)])
}



const TitleCard = ({imgObjs} = props) => {

    console.log(imgObjs)

    return(
        {(imgObjs.length = 0) ? 
        <div>
         <p>THis is loading</p>
        </div>
            :     
        <div className="Title-block">
            <h2 className="header">City Among the Stars: Huntsville</h2>
            <img className="backImage" src={imgObjs[0].url} alt={imgObjs} />
            <p className="titleCard_desc"> Nestled in the heart of Alabama, Huntsville, the City Among the Stars, blends Southern charm with cosmic ambition. 
                From its pivotal role in space exploration to its thriving tech scene, it’s a place where history, innovation, 
                and adventure converge. Explore a city that truly reaches for the stars!
            </p>
        </div>
                    
        };
    );

}


export default TitleCard;