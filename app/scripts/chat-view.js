import messagesView from './messages.js';

export default function chatView( store ) {
  console.log('The chat view!');

  let messages = messagesView(store).prop('outerHTML');
  console.log(messages);

  let $html = $(`
    <section id="chatContainer" class="hidden">
      ${messages}
      <form id="newMessage">
        <input type="text" name="add new message" value="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." placeholder="Message DevChat" id="message">
        <input class="submit" type="submit" value="Send Chat Message" id="sendMessage">
      </form>
    </section>
  `);

  // $html = $html.add($messages);

  $($html).find('#newMessage').submit(function(event) {
    event.preventDefault();
    console.log('the chat buttom works!');
    var body = event.target.elements['message'].value;
    var sender = store.getState().user;
    var timestamp = new Date();

    store.dispatch({ type: "ADD_MSG", body: body, sender: sender, timestamp: timestamp});
  });

  return $html;
};
