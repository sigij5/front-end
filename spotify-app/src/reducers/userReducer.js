


export const initialState = {
    username: '',
    password: '',
    favoriteSongs: [],
    suggestedSongs: [],
}

export const userReducer = (state = initialState, action) => {
    console.log(state, action);
    switch (action.type) {
        // case ADD_USER:
        //     const newUser = action.payload
        default:
            return state;
    }
}