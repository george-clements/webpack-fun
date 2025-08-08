var window = {};
var awin = require('../awin.js');
var items = require('../items.json');
var facebook = require('../facebook.js');
require('../example_function.js');

console.log(JSON.stringify(facebook(items)));

awin(items);
var emotion = 'fun';

// alert('hello_world');