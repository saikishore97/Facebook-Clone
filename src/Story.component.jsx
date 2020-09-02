import React from 'react';
import './Story.styles.css';
import {Avatar} from '@material-ui/core';

function Story({image,profilepic,profilename}) {
    return (
        <div style={{backgroundImage : `url(${image})`}} className="story">
            <Avatar className="story__avatar" src={profilepic}/>
            <h4>{profilename}</h4>
        </div>
    )
}

export default Story;
