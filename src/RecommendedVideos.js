import React from 'react'
import "./RecommendedVideos.css"
import { profiles } from "./data"
import Avatar from "@material-ui/core/Avatar"
// import pa from "./images/IMG_8721.JPG"
const RecommendedVideos = () => {
    return (
        <div className="recommendedVideos">
            <h2>Recommended</h2>
            <div className="recommendedVideos__videos"> 
               {profiles.map((profile) => {
                const {id,title,timestamp,views,channelImage,channel,image}=profile
                return (
    <div className="videoCard">
    <img className="videoCard__thumbnail" src={image} alt=""/>    
                     
                
    <div className="videoCard__info  flex" key={id}>
    <Avatar className="videoCard__avatar" alt={channel} src={channelImage}/>
    
       <div className="videoCard__text">
        <h4>{title}</h4>
        <p>{channel}</p>
        <p> {views} Views * {timestamp}</p>
                            </div>
                            </div>
    </div>
                )
            }
            )}
            </div>
        </div>
    )
}

export default RecommendedVideos
