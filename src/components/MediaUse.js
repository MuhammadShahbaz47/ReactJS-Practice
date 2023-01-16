import image from "../assets/images/image.jpg"
import video from "../assets/videos/video.mp4"

import ReactPlayer from 'react-player/youtube'

export default function MediaImport(){
    const ImgUrl = "https://picsum.photos/seed/picsum/200/300"
    return(
        <div>
            <h1 style={{textAlign:"center"}}>Using Image, Audio, Video Assets and React Player Package for Social Media Platforms</h1>

            <img src={image} width={200} alt='image1'/>

            <img src={require("../assets/images/image.jpg")} width={200} alt='image2'/>

            <img src={ImgUrl} width={200} height={200} alt='image3'/>

            <br/>

            <video src={video} width={300} height={200} controls/>

            <ReactPlayer url='https://www.youtube.com/watch?v=ysz5S6PUM-U' controls={true} />
        </div>
    )
}