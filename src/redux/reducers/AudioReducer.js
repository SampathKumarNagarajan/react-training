import { GET_CURRENT_AUDIO, 
    INC_CURRENT_AUDIO_INDEX,
    DEC_CURRENT_AUDIO_INDEX,
    PLAY_AUDIO,
    PAUSE_AUDIO,
    UPDATE_AUDIO_STATUS,
    LOAD_AUDIO
 } from '../actions/ActionTypes.js';
import songOne from '../../public/assets/audio/Song1.mp3';
import songTwo from '../../public/assets/audio/Song2.mp3';
import songThree from '../../public/assets/audio/Song3.mp3';

const initialState = {
        current_audio_index: 0,
        current_audio: new Audio(songOne),
        is_audio_paused: true,
        audio_list: [songOne, songTwo, songThree]
}

export default function(state = initialState, action) {
    switch(action.type) {
        case GET_CURRENT_AUDIO:
            const current_audio = state.current_audio;
            current_audio.src = state.audio_list[state.current_audio_index]
        
            return {
               ...state,
               current_audio:current_audio
            }
            
        case INC_CURRENT_AUDIO_INDEX: 
            
            return {
                ...state,
                current_audio_index: action.payload,
            }

        case DEC_CURRENT_AUDIO_INDEX: 
            let decIndex = state.current_audio_index;
            if(decIndex - 1 <= -1)
                decIndex = (state.audio_list.length - 1);
            else
                decIndex -= 1;
            return {
                ...state,
                current_audio_index: decIndex,
            }        
        case UPDATE_AUDIO_STATUS:
            return {
                ...state,
                is_audio_paused: !state.is_audio_paused
            }
        
        case PLAY_AUDIO:
            state.current_audio.play();
            return {
                ...state,
            }

        case PAUSE_AUDIO:
            state.current_audio.pause();
            return {
                ...state,
            }

        case LOAD_AUDIO:
            state.current_audio.load();
            return {
                ...state,
            }
            
        default:
            return state;
    }
}