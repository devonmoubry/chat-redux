export default function chatView(store) {
  console.log('The chat view!');

  let $html = $(`
    <section id="chatContainer" class="hidden">
      <ul class="messages"></ul>
      <form id="messageWritingSpace">
        <input type="text" name="add new message" valeu="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." placeholder="Message DevChat">
        <input class="submit" type="submit" value="Send Chat Message" id="sendMessage">
      </form>
    </section>
  `)
  return $html;
};
