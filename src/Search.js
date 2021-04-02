import React from 'react'
import TuneOutlinedIcon from '@material-ui/icons/TuneOutlined';
import "./Search.css"
import ChannelRow from "./ChannelRow"
import VideoRow from "./VideoRow"
const Search = () => {
    return (
        <div className="searchPage">
            <div className="searchPage__filter flex ai ">
               <TuneOutlinedIcon/> 
               <h2>FILTER</h2>
           </div>
            <hr />
            <ChannelRow
                image='https://yt3.ggpht.com/ytc/AAUvwnhZGh2eM-4heU2abltLWHvXxMgyBBhzwjQtoTTE-Q=s176-c-k-c0x00ffffff-no-rj-mo'
                channel='Yeshua Obi'
                verified
                subs='200k'
                noOfVideos={10}
                description="I'm Joshua Obi ,50% Igbo , 50% Yoruba ,100% Nigerian. I started photography in Hope's of gaining another outlet for..........  "
            />
            <hr />
            <VideoRow/>
        </div>
    )
}

export default Search
