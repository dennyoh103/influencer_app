import React from 'react';
import MediaObject from './MediaObject.js';
import './CampaignVideos.css'

function CampaignVideos(props) {
    return (
        <div className='video_container'>
            {props.medias.map((media, i) => {
                return (
                    <div className='card' key={i}>
                        <MediaObject media={media}/>
                    </div>
                )
            })}
        </div>
    )
}

export default CampaignVideos
