var awin = function(items){

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
            '123456' +
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
        return sProductData
    }

module.exports = awin;