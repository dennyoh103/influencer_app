import React, {useState, useEffect} from 'react'
import CampaignTitle from './CampaignTitle';

// This is the 'main' component that will be rendering the campaign data.
// For the sake of this project, I'm feeding JSON data into this component only with hooks
// From here, I'm passing in props to other sub-components 
function Campaign() {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [campaigns, setCampaigns] = useState([]);
  
    useEffect(() => {
      fetch("https://www.plugco.in/public/take_home_sample_feed")
        .then(res => res.json())
        .then(
          (result) => {
            setIsLoaded(true);
            setCampaigns(result.campaigns);
          },

          (error) => {
            setIsLoaded(true);
            setError(error);
          }
        )
    }, [])
  
    if (error) {
      return <div>Error: Not able to load the data successfully</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <div>
            <CampaignTitle campaigns={campaigns}/>
        </div>
      );
    }
  }

export default Campaign