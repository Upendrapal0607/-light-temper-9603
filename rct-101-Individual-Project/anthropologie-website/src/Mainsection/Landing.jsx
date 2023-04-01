
import { Slider1, Slider2, SliderSpacer2 } from "./Carousel";
import { BigSmallPoster, ImagePoster, MoretoExplore, MothersDayImage, Para, TopPoster, TopRatedPicks } from "./MultipleLandingCart";

export function LandingPage(){
    // style={{alignContent:'center',alignItems:"center"}}
    return <div>
        <TopPoster />
        <ImagePoster />
        <BigSmallPoster />
        <MothersDayImage />
        <TopRatedPicks />
      <Slider1 />
<SliderSpacer2 />
 <Slider2 /> 
 <SliderSpacer2 /> 
<MoretoExplore />
        
    </div>
}