$(document).ready(function () {
  var limit, body, term;
  limit = 100;
  body = $(document.body);

  for (var i = 1; i <= limit; i ++) {
    term = ''
      + (i % 3 === 0 ? 'fizz ' : '')
      + (i % 5 === 0 ? 'buzz ' : '')
      || i.toString();
    body.append('<div>' + term.trim() + '</div>');
  }
})
