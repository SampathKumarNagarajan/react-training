import React,{useState, useEffect} from 'react';
const MusicPlayer = (props) => {
    
    // props.song.play();
    return(
        
            <div class="player-main">
                <div class="main-current">
                    <div class="current-keyvisual">
                        <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/329679/music-player-freebie-photo.png" />
                    </div>
                    <div class="current-info">
                        <h1>Blame</h1>
                        <p>KYLE</p>
                    </div>
                </div>
                <div class="main-control">
                <div class="btn _previous">
                </div>
                <div class="btn _pause">
                </div>
                <div class="btn _next">
                </div>
                <div class="btn _timeline">
                    <span class="current-time">1:32</span>
                    <span class="timescope">
                    <span class="timescope-dot"></span>
                    </span>
                    <span class="end-time">4:00</span>
                </div>
            </div>
        </div>
    
    )
}


export default MusicPlayer;