import { useState, useEffect } from "react"
import TitleCard from "../components/TitleCard"
import { getBackgoundImgs } from "../services/api"


export default function Home() {
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
            <TitleCard imgObjs={findImgType("cat")} />
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