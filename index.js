window = {};
var facebook_lib = require("./facebook_lib.js");
var facebook = require("./facebook.js");
var awin = require("./awin.js")

var items = require("./items.json")

facebook_lib()

console.log(facebook(items))

console.log(awin(items));