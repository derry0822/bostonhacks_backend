var serverURL = 'http://localhost:3000'

function parse() {
  $.ajax('../data/test.json', {
    success: function(data) {
      console.log(data)
      for (var i = 0; i < 10; i++) {
        $('#names').append('<p>' + data[i].first_name + ' ' + data[i].last_name + '</p>')
      }
    },
    error: function() {
      console.log('error')
    }
  })
}

function post() {
  var obj = {};
  var serialize = $('#form').serializeArray();
  console.log(serialize);
  for (var i = 0; i < serialize.length; i++) {
    var name = serialize[i].name;
    console.log('name: ' + name);
    obj[name] = serialize[i].value;
    console.log('obj[name]: ' + obj[name]);
  }
  console.log(obj);

  $.ajax({
        url: '/form',
        type: 'POST',
        data: obj,
        success: function(data) {
          console.log('success');
        }
      });
}

function main() {
  $('#get').click(function() {
    $('#names').empty();
    parse();
  });
  $('#submit').click(function(e){
    e.preventDefault();
    post();
    console.log('success');
  })
}

$(document).ready(main);
