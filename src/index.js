var window = {};
var awin = require('../awin.js');
var items =require('../items.json');
var facebook = require('../facebook.js');

console.log(JSON.stringify(facebook(items)));
console.log(items);

console.log(awin);
awin(items);
