module.exports = function(json_file) {
  var converter = require('json-2-csv');
  var json2csvCallback = function (err, csv) {
    if (err) throw err;
  };
  return converter.json2csv(json_file, json2csvCallback);
}
