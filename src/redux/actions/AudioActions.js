import { GET_CURRENT_AUDIO, 
    INC_CURRENT_AUDIO_INDEX,
    DEC_CURRENT_AUDIO_INDEX,
    PLAY_AUDIO,
    PAUSE_AUDIO,
    LOAD_AUDIO,
    UPDATE_AUDIO_STATUS
 } from './ActionTypes.js';

export const getCurrentAudio = () => async dispatch => {
    dispatch({
        type: GET_CURRENT_AUDIO,
    });
    dispatch(loadAudio());
    dispatch(playAudio());
}

export const incCurrentAudioIndex = (index) => async dispatch => {
    
    dispatch({
        type: INC_CURRENT_AUDIO_INDEX,
        payload: index
    });
    dispatch(getCurrentAudio());
};

export const decCurrentAudioIndex = (index) => async dispatch => {
    dispatch({
        type: DEC_CURRENT_AUDIO_INDEX,
        payload: index
    });
    dispatch(getCurrentAudio());
}
export const pauseAudio = () => async dispatch => {
    dispatch({
        type: PAUSE_AUDIO,
    });
};

export const loadAudio = () => async dispatch => {
    dispatch({
        type: LOAD_AUDIO,
    });
};

export const playAudio = () => async dispatch => {
    dispatch({
        type: PLAY_AUDIO,
    })
}

export const updateAudioStatus = () => async dispatch => {
    
        dispatch({
            type: UPDATE_AUDIO_STATUS,
        })
}

