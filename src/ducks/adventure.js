export default(state = {}, payload) => {
    switch (payload.type) {
        case 'receive_adventure':
            return payload.adventure
        default:
            return state;
    }
};

export function receiveAdventure(adventure) {
    return {
        type: 'receive_adventure',
        adventure
    };
}

export function setAdventure(adventure) {
    console.log("OK");
    return function(dispatch, getState) {
        dispatch(receiveAdventure(adventure));
    };
};
