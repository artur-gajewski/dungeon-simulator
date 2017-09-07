import { browserHistory } from 'react-router'

export default(state = {data: {}, progress: 0}, payload) => {
    switch (payload.type) {
        case 'SET_ADVENTURE_DATA':
            return {
                data: payload.data,
                progress: 0
            }
        case 'INCREMENT_PROGRESS':
            return {
                data: state.data,
                progress: state.progress + 1
            }
        case 'DECREMENT_PROGRESS':
            return {
                data: state.data,
                progress: state.progress - 1
            }
        default:
            return state;
    }
};

export function setAdventure(data) {
    return function(dispatch, getState) {
        dispatch({
            type: 'SET_ADVENTURE_DATA',
            data,
            progress: 0
        });

        browserHistory.push('/adventure');
    };
};

export function goBackward() {
    return function(dispatch, getState) {
        dispatch({
            type: 'DECREMENT_PROGRESS'
        });
    };
};

export function goForward() {
    return function(dispatch, getState) {
        dispatch({
            type: 'INCREMENT_PROGRESS'
        });
    };
};

export function adventureNotSet() {
    return function(dispatch, getState) {
        dispatch({
            type: 'NO_ADVENTURE_DATA'
        });

        browserHistory.push('/list');
    };
};
