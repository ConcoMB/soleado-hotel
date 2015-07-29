$('#send').click(function() {
  'use strict';
  alert("HOLA");
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
            'email': window.soleado_email,
            'name': window.soleado_name,
            'type': 'to'
          }
        ],
      'autotext': 'true',
      'subject': window.subject,
      'html': message
    }
  }
 }).done(function(response) {
    $("#contact-caption").text("YOUR INFO HAS BEEN SENT")
  });
});
