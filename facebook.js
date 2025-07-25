var facebook = function(items){

var facebook_items = items.reduce(function(acc, item){
    acc.push({
        id: item.item_id,
        quantity: item.quantity
    })
    return acc
}, []);

    return facebook_items
};

module.exports = facebook;