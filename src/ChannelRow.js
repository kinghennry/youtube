import React from 'react'
import Avatar from "@material-ui/core/Avatar"
import "./ChannelRow.css"
import VerifiedIcon from "@material-ui/icons/CheckCircleOutlineOutlined"
const ChannelRow = ({image,channel,verified,subs,noOfVideos,description}) => {
    return (
        <div className="channelRow flex ai ">
            <Avatar className="channelRow__logo" alt={channel} src={image}/>
                <div className="channelRow__text flex fc">
                <h4 className="flex ai ">{channel} { verified && <VerifiedIcon/> }</h4>
                <p>
                    {subs} subscribers . {noOfVideos} videos
               </p>
                <p>{description }</p>
        </div>
        </div>
    )
}

export default ChannelRow
