import TuneIcon from '@material-ui/icons/Tune';
import React from 'react'
import './SearchPage.css';
import ChannelRow from './ChannelRow';
import VideoRow from './VideoRow';

function SearchPage() {
    return (
        <div className="searchPage">
            <div className="searchPage__filter">
                <TuneIcon />
                <h2>FILTER</h2>
            </div>
            <hr/>
            <ChannelRow 
                image="https://www.w3schools.com/w3images/avatar2.png"
                channel="Karandeep Singh"
                verified
                subs="660K"
                noOfVideos={382}
                description="We create coding videos"
            />
            <hr />
            <VideoRow
                views="1.4M"
                subs="658K"
                description="we learn coding together"
                channel="Karandeep Singh"
                title="Learn CODE Together"
                image="https://i.ytimg.com/an_webp/2Uj1A9AguFs/mqdefault_6s_480x270.webp?du=3000&sqp=CLGX7_4F&rs=AOn4CLAuGy7iXJVc1S9yhQRi9P9OmQy2qQ"            
             />
            <VideoRow
                views="1.4M"
                subs="658K"
                description="we learn coding together"
                channel="Karandeep Singh"
                title="Learn CODE Together"
                image="https://i.ytimg.com/an_webp/2Uj1A9AguFs/mqdefault_6s_480x270.webp?du=3000&sqp=CLGX7_4F&rs=AOn4CLAuGy7iXJVc1S9yhQRi9P9OmQy2qQ"            
             />
            <VideoRow
                views="1.4M"
                subs="658K"
                description="we learn coding together"
                channel="Karandeep Singh"
                title="Learn CODE Together"
                image="https://i.ytimg.com/an_webp/2Uj1A9AguFs/mqdefault_6s_480x270.webp?du=3000&sqp=CLGX7_4F&rs=AOn4CLAuGy7iXJVc1S9yhQRi9P9OmQy2qQ"            
             />
            <VideoRow
                views="1.4M"
                subs="658K"
                description="we learn coding together"
                channel="Karandeep Singh"
                title="Learn CODE Together"
                image="https://i.ytimg.com/an_webp/2Uj1A9AguFs/mqdefault_6s_480x270.webp?du=3000&sqp=CLGX7_4F&rs=AOn4CLAuGy7iXJVc1S9yhQRi9P9OmQy2qQ"            
             />
            <VideoRow
                views="1.4M"
                subs="658K"
                description="we learn coding together"
                channel="Karandeep Singh"
                title="Learn CODE Together"
                image="https://i.ytimg.com/an_webp/2Uj1A9AguFs/mqdefault_6s_480x270.webp?du=3000&sqp=CLGX7_4F&rs=AOn4CLAuGy7iXJVc1S9yhQRi9P9OmQy2qQ"            
             />
            <VideoRow
                views="1.4M"
                subs="658K"
                description="we learn coding together"
                channel="Karandeep Singh"
                title="Learn CODE Together"
                image="https://i.ytimg.com/an_webp/2Uj1A9AguFs/mqdefault_6s_480x270.webp?du=3000&sqp=CLGX7_4F&rs=AOn4CLAuGy7iXJVc1S9yhQRi9P9OmQy2qQ"            
             />
            <VideoRow
                views="1.4M"
                subs="658K"
                description="we learn coding together"
                channel="Karandeep Singh"
                title="Learn CODE Together"
                image="https://i.ytimg.com/an_webp/2Uj1A9AguFs/mqdefault_6s_480x270.webp?du=3000&sqp=CLGX7_4F&rs=AOn4CLAuGy7iXJVc1S9yhQRi9P9OmQy2qQ"            
             />
            <VideoRow
                views="1.4M"
                subs="658K"
                description="we learn coding together"
                channel="Karandeep Singh"
                title="Learn CODE Together"
                image="https://i.ytimg.com/an_webp/2Uj1A9AguFs/mqdefault_6s_480x270.webp?du=3000&sqp=CLGX7_4F&rs=AOn4CLAuGy7iXJVc1S9yhQRi9P9OmQy2qQ"            
             />
        </div>
    )
}

export default SearchPage
