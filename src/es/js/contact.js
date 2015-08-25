$('#send').click(function() {
  'use strict';
  var email = document.getElementById('email').value;
  var message = document.getElementById('message').value;
  var name = document.getElementById('name').value;

  $.ajax({
    type: 'POST',
    url: 'https://api.sendgrid.com/api/mail.send.json',
    data: {
      api_user:window.user,
      api_key: window.key,
      to: window.soleadoEmail,
      toname: window.soleadoName,
      subject: window.subject,
      text: message,
      from: email,
      fromname: name
    }
  })
  $('#contact-caption').text('YOUR INFO HAS BEEN SENT');
});


