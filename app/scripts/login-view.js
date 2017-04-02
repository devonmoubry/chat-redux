export default function ( store ) {
  console.log('The login view!');

  let $html = $(`
    <section id="loginContainer">
      <h1>Welcome to Dev Chat!</h1>
      <p id="instructions">Please type your username to enter Dev Chat.</p>
      <form id="submitUsername">
        <input type="text" required="" value="Devon" placeholder="username">
        <input type="submit" value="Join Chat" id="submitUsername">
      </form>
    </section>
  `);

  $($html).find('#submitUsername').submit(function(event) {
    event.preventDefault();
    console.log('the login button works!');

  });

  return $html;
}
