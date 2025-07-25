var window = {};

var items = [
    {
        "item_name": "Glycolic Acid 7 %",
        "item_id": "1220479",
        "item_category": "",
        "item_brand": "The Ordinary",
        "item_main_category": "Gesichtswasser (120108)",
        "item_product_classification": "",
        "net_price": 10.25,
        "gross_price": 12.2,
        "quantity": "1",
        "item_name_affiliate": "The Ordinary;Glycolic Acid 7 %",
        "item_type": "PRODUCT"
    },
    {
        "item_name": "Direct Acids",
        "item_id": "015557",
        "item_category": "",
        "item_brand": "The Ordinary",
        "item_main_category": "Gesichtspeeling (120107)",
        "item_product_classification": "Pflege / Make-Up",
        "net_price": 9.08,
        "gross_price": 10.8,
        "quantity": "1",
        "item_name_affiliate": "The Ordinary;Direct Acids",
        "item_type": "PRODUCT"
    }
];

var facebook_items = items.reduce(function(acc, item){
    acc.push({
        id: item.item_id,
        quantity: item.quantity
    })
    return acc
}, []);



console.log(facebook_items);

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

var awin_item_ids = [];
var awin_item_quantities = [];
var awin_item_names = [];
var awin_item_categories = [];
var awin_item_prices = [];

 var sProductData = items.reduce(function (acc, item) {
          awin_item_ids.push(item.item_id);
          awin_item_quantities.push(item.quantity);
          awin_item_names.push(item.item_name_affiliate);
          awin_item_categories.push(item.item_main_category);
          awin_item_prices.push(item.net_price);
          return (
            acc +
            "AW:P|" +
            '1234' +
            "|" +
            'test1234' +
            "|" +
            item.item_id +
            "|" +
            item.item_brand +
            ";" +
            item.item_name +
            "|" +
            item.net_price +
            "|" +
            item.quantity +
            "|" +
            "" +
            "|" +
            "gc10" +
            "|" +
            item.item_main_category +
            "\r\n"
          );
        }, "");

console.log(sProductData);