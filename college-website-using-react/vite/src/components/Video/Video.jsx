import React ,{ useRef }from 'react'
import"./Video.css"
import video1 from "../../assets/video.mp4"

const Video = ({play,setPlay}) => {
    const player=useRef(null);
    const closePlayer=(e)=>{
        if(e.target==player.current){
            setPlay(false);
        }
    }
  return (
    <div className={`video ${play?' ':'hide'}`} ref={player} onClick={closePlayer}>
        <video src={video1} autoPlay muted controls></video>
    </div>
  )
}

export default Video