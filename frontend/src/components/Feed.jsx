import React from 'react';
import { useEffect,useContext } from 'react';
import LeftNav from './LeftNav';
import VideoCard from './VideoCard'
import Carousel from './Carousel';
import AwesomeSlider from 'react-awesome-slider';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import 'react-awesome-slider/dist/styles.css';

import 'react-awesome-slider/dist/custom-animations/cube-animation.css';
import RightNav from './RightNav';
import { Context } from '../context/contextApi';

const Feed = () => {
    const AutoplaySlider = withAutoplay(AwesomeSlider);
    const { loading, searchResult } = useContext(Context);

    useEffect(() => {
        document.getElementById("root").classList.remove("custom-h");
    }, []);
    return (
        <>
              
  
        <div className="flex flex-row h-[calc(100%-56px)] bg-black">
            <LeftNav />
            
            <div className="grow flex justify-center flex-col w-[calc(100%-240px)] h-full overflow-y-auto">
                {/* <div className='bg-red-300'>Slider card</div> */}
                {/* <div className='flex px-40 mx-20 mb-20'><Carousel/></div> */}
                <div className='flex justify-center'>
                <div className='flex h-[60vh] mb-10  w-[140vh]'>
                <AutoplaySlider
                    play={true}
                    cancelOnInteraction={false} // should stop playing on user interaction
                    interval={3000}
                    // animation="cubeAnimation"
                    >
                        
                        <div data-src="https://images.hdqwalls.com/wallpapers/butterfly-dream-girl-4k-wb.jpg" />
                    
                    <div data-src="https://i.ytimg.com/vi/Yo0RIfqPiUw/maxresdefault.jpg" />
                    <div data-src="https://i.ytimg.com/vi/EyIvuigqDoA/maxresdefault.jpg" />
                    <div data-src="https://i.ytimg.com/vi/h5WxE6Tn2kU/maxresdefault.jpg" />
                    <div data-src="https://i.ytimg.com/vi/zthn3avIuow/maxresdefault.jpg" />
                    <div data-src="https://i.ytimg.com/vi/0tbF1IzxbcM/maxresdefault.jpg" />
                    <div data-src="https://i.ytimg.com/vi/kuniEyt3Qks/maxresdefault.jpg" />
                    
                     {/* <div data-src={searchResult[0]?.video.thumbnails[0]?.url} /> */}
            
                    
               </AutoplaySlider>
                </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 p-5">
                    {!loading &&
                        searchResult.map((item) => {
                            if (item.type !== "video") return false;
                            return (
                                <VideoCard
                                    key={item?.video?.videoId}
                                    video={item?.video}
                                />
                            );
                        })}
                        
                </div>
            </div>
            <RightNav/>
        </div>
        </>
    );
}

export default Feed;
