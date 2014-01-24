var io = require("level-json")('./data');

module.exports = {
  search: search,
  author: author,
  authors: authors,
  poem: poem
};

function author (params, callback) {
  if (params.length > 1) {
    return poem.apply(undefined, arguments);
  }

  io.get(params[0], callback);
}

function authors (params, callback) {
  io.get('authors', callback);
}

function search (params, callback) {
  io.get('keywords', function (error, index) {
    if(error) return callback(error);

    var input = params[0].split(' ');
    var result = [];

    var key, i;
    for(key in index){
      i = input.length;

      while(i--){
        if(key.indexOf(input[i]) > -1){
          result = result.concat(index[key]);
        }
      }
    }

    callback(undefined, result);

  });
}

function poem (params, callback) {
  io.get(params.join('/'), callback);
}
