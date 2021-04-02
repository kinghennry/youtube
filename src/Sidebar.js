import React from 'react';
import './Sidebar.css'

import { icons } from "./data"
import { symbols } from "./data"


const Sidebar = () => {
    return (
        <div className="sideBar">            
            {icons.map((icon) => {
                const {id,text,img,selected}=icon
                return (
                    <div className= "sidebarRow flex ai " >
                        <span className={`sidebarRow__icon ${selected && "selected"}`}>{img}</span> 
        <h2 className="sidebarRow__title" key={id}>{text}</h2>
            </div>
                )
            }
            )}
            <hr />
             {symbols.map((symbol) => {
                const {id,text,img}=symbol
                return (
                    <div className= "sidebarRow flex ai " >
                        <span className="sidebarRow__icon">{img}</span> 
        <h2 className="sidebarRow__title" key={id}>{text}</h2>
            </div>
                )
            }
            )}
        <hr />

        </div>
    )
}

export default Sidebar
