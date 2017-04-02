import { createStore } from 'redux';
// import loginView from './login-view.js';
// import chatView from './chat-view.js';
// import messageRender from './messages.js';


export default function app () {
  const initialState = {
    items: []
  };

  const chatReducer = function( state, action ) {

    if ( state === undefined ) {
      state = initialState;
    }

    switch ( action.type ) {
      case "TESTING":
        console.log('It works!');
        console.log(state);
        return state;

      default:
        return state;
    }
  };

  const store = createStore(chatReducer);
  store.dispatch({ type: "TESTING" });

}
