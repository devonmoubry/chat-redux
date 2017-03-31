export default function (  ) {
  console.log('Make the messages!');

  let $html = $(`
    <li>
    <div class="sender">message.sender</div>
    <div class="body">message.body</div>
    <div class="timestamp">moment(message.timestamp).format("ddd, MMM Do YY, h:mm a")</div>
    <a class="deleteMessage" id="message._id" href="#">
    <i class="fa fa-trash-o" aria-hidden="true"></i>
    </a>
    </li>
  `);

  $($html).find('.deleteMessage').click(function(event) {
    event.preventDefault();
    console.log('delete it! delete it!');
  })

  return $html;
};
