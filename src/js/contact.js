$('#send').click(function() {
  'use strict';
  var email = document.getElementById('email').value;
  var message = document.getElementById('message').value;
  var name = document.getElementById('name').value;
  $.ajax({
    type: 'POST',
    url: 'https://mandrillapp.com/api/1.0/messages/send.json',
    data: {
      'key': window.key,
      'message': {
        'from_email': email,
        'from_name': name,
        'to': [
          {
            'email': window.soleadoEmail,
            'name': window.soleadoName,
            'type': 'to'
          }
        ],
      'autotext': 'true',
      'subject': window.subject,
      'html': message
    }
  }
 }).done(function() {
    $('#contact-caption').text('YOUR INFO HAS BEEN SENT');
  });
});
