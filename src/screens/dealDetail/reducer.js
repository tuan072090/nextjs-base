const defaultState = {
    title: "deal test"
};

export function dealReducer(state, action) {

    switch (action.type) {
        case 'add':
            return {
                ...state, ...action.data
            };
        // ... other actions ...
        default:
            return defaultState;
    }
}
