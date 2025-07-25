var window = {};
var awin = require('./awin.js');
var items = require('./items.json');

var facebook_items = items.reduce(function(acc, item){
    acc.push({
        id: item.item_id,
        quantity: item.quantity
    })
    return acc
}, []);

console.log(facebook_items);
require('./example_function');

if (!window.fbq) {
      !(function (f, b, e, v, n, t, s) {
        if (f.fbq) {
          return;
        }
        n = f.fbq = function () {
          n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments);
        };
        if (!f._fbq) {
          f._fbq = n;
        }
        n.push = n;
        n.loaded = !0;
        n.version = "2.0";
        n.queue = [];
      })(window, '', "script", "//connect.facebook.net/en_US/fbevents.js");
    }
  
console.log(awin);
awin(items);