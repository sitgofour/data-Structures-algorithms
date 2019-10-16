//Action
// a plain JavaScript object that must have a key called
// type and a string value

{
    type: "LOGOUT_USER"
}

// The action can have any number of additional keys


////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////


// Reducer

// a function that accepts the state and an 
// action and return a new state (entire state object)


function rootReducer(state={}, action){
    switch(action.type) {
        case "LOGOUT_USER":
            return {...state, login: false}
        case "LOGIN_USER":
            return {...state, login: true}
        default: 
            return state;
    }
}


// CREATING A STORE

// Use the Redux createStore function which accepts the root 
// reducer as a parameter

const store = Redux.createStore(rootReducer);