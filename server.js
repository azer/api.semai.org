var resources = require("./index");
var server = require("json-resources");

var routes = {
  search: resources.search,
  'author': resources.author,
  'authors': resources.authors,
  '*': home
};

module.exports = server(routes).start;

function home (_, callback) {
  callback(undefined, {
    'endpoints': {
      '/search/:keyword:': 'Search poems & authors',
      '/authors': 'List all authors',
      '/author/:author:': 'List all poems of given author',
      '/author/:author:/:title:': 'Outputs specified poem'
    }
  });
}
