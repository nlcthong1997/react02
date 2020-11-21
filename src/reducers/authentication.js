const initialState = {
    logged: false
}

const authenticationReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'LOGIN': {
            return state;
        }
        default:
            return state;
    }
}


export default authenticationReducer;