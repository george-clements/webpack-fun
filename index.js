var window = {};

var items = require("./items.json")

var facebook_items = items.reduce(function (acc, item) {
  acc.push({
    id: item.item_id,
    quantity: item.quantity
  })
  return acc
}, []);

console.log(facebook_items);

if (!window.fbq) {
  require("./facebook.js")
}

var awin = require("./awin.js")
awin(items);