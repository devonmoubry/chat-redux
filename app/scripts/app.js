import { createStore } from 'redux';
import loginView from './login-view.js';
import chatView from './chat-view.js';
// import messageRender from './messages.js';


export default function app () {

  const initialState = {
    currentUser: '',
    msgs: [],
    view: loginView
  };

  const appReducer = function (currentState, action) {

    if ( currentState === undefined ) {
      return initialState;
    }

    switch ( action.type ) {
      case "TESTING":
        //console.log(currentState);
        return currentState;

      case "LOGIN":
        var newState = {
          currentUser: action.user,
          view: chatView
        };

        return Object.assign({}, currentState, { newState });

      case "ADD_MSG":
        var newMsg = currentState.msgs.slice();
        newMsg.push(action.msg);
        return Object.assign({}, currentState, { msg: newMsg });

      case "REMOVE_MSG":
        // ajax stuff
        return currentState;

      default:
        return currentState;
    }
  };

    const store = createStore(appReducer);

    const render = function () {
      let state = store.getState();
      $('#app').html(state.view(store));

      console.log("Rendered with state: ", state);
    }
    store.dispatch({ type: "TESTING" });
    store.subscribe(render);
    //store.dispatch({ type: "ADD_MSG", msg: 'Hey girl hey'});
    store.dispatch({ type: "LOGIN", user: 'girl'});
//     store.dispatch({ type: "TESTING" });
//     store.dispatch({ type: "REMOVE_MSG", index: 1});
//     store.dispatch({ type: "TESTING" });
 };
