var io = require("level-json")('./data');
var glob = require('glob');

/*var index = require('../berraksular.com/poems/index/keywords.json');

var key;
for (key in index) {
  index[key] = index[key].map(function (el) {
    return { resource: '/author/' + el[0], title: el[1] };
  });
}

io.set('keywords', index, function (error, ok) {
  if(error) throw error;

  console.log('done');
});*/


/*io.get('keywords', function (error, index) {
  if(error) throw error;

  console.log(index);

});*/


glob('../berraksular.com/poems/*.json', function(error, files){

  files = files.map(require);

  files.forEach(function (poet) {
    var poems = poet.poems;
    var slugs = Object.keys(poet.poems);

    poet.poems = [];

    slugs.forEach(function (slug) {
      var poem = poems[slug];
      var key = poet.slug + '/' + slug;

      poem.resource = '/author/' + key;
      poem.author = '/author/' + poet.slug;

      poet.poems.push({ resource: '/author/' + key, title: poem.title });

      io.set(key, poem, function (){
        console.log('%s saved', poet.slug + '/' + slug);
      });
    });

    io.set(poet.slug, poet, function (){
      console.log('saved', poet.name);
    });
  });

});


/*var authors = require('../berraksular.com/poems/index/authors.json').map(function (el) {
  return {
    resource: '/author/' + el.filename.replace('.json', ''),
    name: require('../berraksular.com/poems/' + el.filename).name
  };
});

io.set('authors', authors, function (error, ok) {
  if(error) throw error;

  console.log('done');

});
*/
