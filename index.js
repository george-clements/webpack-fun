var window = {};

var items = require("./items.json");

var facebook = require("./facebook");

facebook(items);

require("./example_function");

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
  })(window, "", "script", "//connect.facebook.net/en_US/fbevents.js");
}

var awinProductData = require("./awin");
awinProductData(items);
