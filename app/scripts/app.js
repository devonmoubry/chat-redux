import { createStore } from 'redux';
import loginView from './login-view.js';
import chatView from './chat-view.js';

export default function app () {
  const initialState = {
    user: '',
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

      case "LOGIN":
        var newState =
          Object.assign({}, state, {user: action.user, view: chatView});
        return newState;

      case "ADD_MSG":
        var newMsgs = state.msgs.slice();
        newMsgs.push(action.msg);
        return Object.assign({}, state, { msgs: newMsgs });

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
