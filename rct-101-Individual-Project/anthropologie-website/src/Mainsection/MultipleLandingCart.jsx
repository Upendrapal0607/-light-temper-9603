import logo1 from '../Image/TopImagePoster1.jpg';
import logo2 from '../Image/Refarmation.jpg';
import image1 from '../Image/image1.jpg';
import image2 from '../Image/image2.jpg';
import image3 from '../Image/image3.jpg';
import image4 from '../Image/image4.jpg';
import "./Landing.css";
export function TopPoster() {

    return (
        <div>
        <div className='Poster1-Image'>
            <div className='Image-poster-1'>

            <img  src={logo1} alt="" />
            </div>
            <div className='Image-poster-2'>
            <img  src={logo2} alt="" />

            </div>
        </div>
        </div>
    )
}

export function ImagePoster(){
    return <div>
        <div className='image-poster' style={{marginBottom:"30px"}}>
            <div className='image-poster-box'><img src={image1} alt="" />
          <div style={{marginTop:"-50px"}}>
          <button style={{border:"2px solid red",padding:"6px",backgroundColor:"white"}}>Shop New</button>
          </div>
            </div>
            <div className='image-poster-box'><img src={image2} alt="" /></div>
            <div className='image-poster-box'><img src={image3} alt="" /></div>
            <div className='image-poster-box'><img src={image4} alt="" /></div>
        </div>
    </div>
}