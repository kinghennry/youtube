import React from 'react'
import "./VideoRow.css"
import {rows} from "./rows"
const VideoRow = () => {
    // 37 views•3 May 2020
    return (
        <div >
             {rows.map((row) => {
                const {id,description,link,timestamp,subs,views,channel,image,text}=row
                return (
                <div className="videoRow" key={id}>
                    <img src={image} alt=""/>
                        <div className="videoRow__text">
                            <a href={link} target="_blank" rel="noopener noreferrer">
                            <h3>{description}</h3>
                            </a>
                            <p className="videoRow__headline">
                                {channel} • {" "}
                                <span className="videoRow__subs">
                                    <span className="videoRow__subsNumber">
                                        {subs}  subscribers
                                    </span>
                                </span> {" "} 
                              {views} views • {timestamp}</p>
                            <p className="videoRow__desc">
                                {text }
                            </p>
                        </div>
                </div>
                )
            }
            )}
        </div>
    )
}
export default VideoRow
              
