import React,{useState, useEffect} from 'react';
import MusicPlayer from './MusicPlayer';
import { connect } from 'react-redux';
import {getCurrentAudio, 
    incCurrentAudioIndex,
    decCurrentAudioIndex, 
    playAudio, 
    pauseAudio, 
    updateAudioStatus
} from '../../redux/actions/AudioActions';



const MusicPlayerApp = (props) => {
    
    let [counter, setCounter] = useState(0);

    props.audio.current_audio.addEventListener('timeupdate', updateCounter);
    props.audio.current_audio.addEventListener('ended', props.incrementCurrentAudioIndex);
    

    function updateCounter() {
       let currentTime = parseInt(this.currentTime)
       setCounter(currentTime);
    }

    const playPauseAudio = () => {
        if(props.audio.is_audio_paused)
            props.playAudio()
        else    
            props.pauseAudio()
        props.updateAudioStatus();
    }

    const handleDrag = (e) => {
        props.audio.current_audio.currentTime = e.target.value
    }
    
    const incrementCurrentAudioIndex = () => {
        let index = props.audio.current_audio_index;
        if(index + 1 >= props.audio.audio_list.length)
            index = 0;
        else
            index += 1;
        props.incCurrentAudioIndex(index);
    }

    const decrementCurrentAudioIndex = () => {
        let decIndex = props.audio.current_audio_index;
        if(decIndex - 1 <= -1)
            decIndex = (props.audio.audio_list.length - 1);
        else
            decIndex -= 1;
        props.decCurrentAudioIndex(decIndex);
    }
    // useEffect(() => {
    //     if(counter > 10){
    //         setCounter(0);
    //         props.incCurrentAudioIndex();
    //     }

    // },[counter])
    return(
        <div>
            This is a simeple music player app 
            <p>
                {counter}
            </p>
            <button onClick= {decrementCurrentAudioIndex}>Prev</button>
            <button onClick={playPauseAudio} >click</button>
            <button onClick= {incrementCurrentAudioIndex}>Next</button>
            
            {/* <button  onClick={pauseAudio}>Pause</button> */}
            <input type="range" min="0" max={props.audio.current_audio.duration} step="1"  value ={counter} onChange={(e) => handleDrag(e)}/>
            {/* <div class="music-player">
                <MusicPlayer song={props.audio.current_audio}/>
            </div> */}
            
        </div>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        getCurrentAudio: () => dispatch(getCurrentAudio()),
        incCurrentAudioIndex: (index) => dispatch(incCurrentAudioIndex(index)),
        decCurrentAudioIndex: () => dispatch(decCurrentAudioIndex()),
        updateAudioStatus: () => dispatch(updateAudioStatus()),
        playAudio: () => dispatch(playAudio()),
        pauseAudio: () => dispatch(pauseAudio())
    }
}
const mapStateToProps = (state) => {
    return {
       audio: state.Audio,
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(MusicPlayerApp);
