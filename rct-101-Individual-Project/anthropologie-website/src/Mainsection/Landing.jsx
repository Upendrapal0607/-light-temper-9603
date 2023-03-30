
import { BigSmallPoster, ImagePoster, MothersDayImage, Para, TopPoster, TopRatedPicks } from "./MultipleLandingCart";

export function LandingPage(){
    // style={{alignContent:'center',alignItems:"center"}}
    return <div>
        <TopPoster />
        <ImagePoster />
        <BigSmallPoster />
        <MothersDayImage />
        <TopRatedPicks />

        
    </div>
}