// add the new argument divID here
function Printer(divId) {
  divId = divId || 'console';
  var lineCount = 1;

  this.printLine = function() {

    m = lineCount + ': ' + Array.prototype.join.call(arguments, ' ');

    var n = document.createElement("pre"),
        t = document.createTextNode(m);

    n.appendChild(t);
    document.getElementById(divId).appendChild(n); // and use it here

    lineCount++;
  }
}

function fizzbuzz(limit, printer) {
  printer = printer || new Printer();
  for (var i = 1; i <= limit; i++) {
    printer.printLine(say(i));
  }
  
  function say(i) {
    i = ''
      + (i % 3 === 0 ? 'fizz ' : '')
      + (i % 5 === 0 ? 'buzz ' : '')
      || i.toString();
    return i.trim();
  }
}

function getLimit() {
  var limit = +(prompt('Supply a number >= 1'));
  return limit > 0 ? limit : (alert('Bad number'), getLimit());
}

fizzbuzz(getLimit());
