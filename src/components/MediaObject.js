import React from 'react';
import { ButtonGroup, Button } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLink, faDownload, faPlay } from '@fortawesome/free-solid-svg-icons';
import './MediaObject.css';

function MediaObject(props) {

    //function for copying link to clipboard
    const copyToClipboard = () => {
        navigator.clipboard.writeText(props.media.tracking_link);
    }

    return (
        <>
            <div className='video' >
                <img src={props.media.cover_photo_url} alt='video thumbnail' className='video_thumbnail' />
                {props.media.media_type === 'video' &&
                    <FontAwesomeIcon icon={faPlay} className='playButton' />
                }
            </div>
            <div className='button'>
                <ButtonGroup>
                    <Button onClick={copyToClipboard}>
                        <span className='icon'><FontAwesomeIcon icon={faLink} /></span>
                    </Button>
                    {/* I was not able to find the way to trigger separate download window for this */}
                    <Button>
                        <span><FontAwesomeIcon icon={faDownload} /></span>
                    </Button>
                </ButtonGroup>
            </div>
        </>

    )
}

export default MediaObject