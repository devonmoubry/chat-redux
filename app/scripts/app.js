import { createStore } from 'redux';
import loginView from './login-view.js';
// import chatView from './chat-view.js';
// import messageRender from './messages.js';


export default function app () {
  const initialState = {
    msgs: [],
    view: loginView
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

  const render =  function () {
    let state = store.getState();
    $('#app').html(state.view(store));
  }

  const store = createStore(chatReducer);

  // render function will be executed
  // whenever an action is dispatched
  store.subscribe(render);

  store.dispatch({ type: "TESTING" });
}
