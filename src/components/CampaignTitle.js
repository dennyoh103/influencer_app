import React from 'react'
import CampaignVideos from './CampaignVideos';
import './CampaignTitle.css';



function CampaignTitle(props) {
    return (
        <div className='campaign_box'>
            {props.campaigns.map((singleCampaign, i) => {
                return (
                    <div key={i}>
                        <div className='container'>
                            <div className='left'>
                                <img src={singleCampaign.campaign_icon_url} className='campaign_icon' />
                            </div>
                            <div className='right'>
                                <p className='campaign_name'>{singleCampaign.campaign_name}</p>
                                <p className='campaign_pay'>{singleCampaign.pay_per_install}per insall</p>
                            </div>
                        </div>
                        
                        <CampaignVideos medias={singleCampaign.medias} />
                    </div>
                )
            })}
        </div>
    )
}

export default CampaignTitle