import { useState, useEffect } from "react"
import TitleCard from "../components/TitleCard"
import { getBackgoundImgs } from "../services/api"


export default function Home() {

    //My plan here is to have a backgroundImg objs. Howver they will be organized by same attributes. ie: for the title car background, this obj wont be used for the entertainment Imgs.
    const [backgroudImgs, setBackgroundImgs] = useState([])

    const findImgType = (imgType) => {return backgroudImgs.filter(item =>  item.type == imgType)}

    useEffect(() => {
        const loadApi = async () => {
            const backgroundImgObjs = await getBackgoundImgs();
            setBackgroundImgs(backgroundImgObjs);
        }
        loadApi();
    }, []);


    return(
        <div>
            <TitleCard imgObjs={findImgType("")} />
            <div>
                <ul>
                    <li>Entertainment</li>
                    <li>Food</li>
                    <li>Parks</li>
                    <li>About</li>
                </ul>
            </div>
        </div>
    )
}