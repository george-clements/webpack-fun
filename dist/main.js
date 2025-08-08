(() => {
  var e = {
      190: (e) => {
        e.exports = function (e, t) {
          try {
            return e(t);
          } catch (e) {
            ((window.b.dmp_errors = window.b.dmp_errors || []),
              window.b.dmp_errors.push(e.stack.slice(0, 200)),
              "function" == typeof ineum && ineum("reportError", e, { componentStack: "webpack", meta: { source: "webpack_fun" } }));
          }
        };
      },
      226: (e) => {
        e.exports = {};
      },
      406: (e) => {
        "use strict";
        e.exports = JSON.parse(
          '[{"item_name":"Glycolic Acid 7 %","item_id":"1220479","item_category":"","item_brand":"The Ordinary","item_main_category":"Gesichtswasser (120108)","item_product_classification":"","net_price":10.25,"gross_price":12.2,"quantity":"1","item_name_affiliate":"The Ordinary;Glycolic Acid 7 %","item_type":"PRODUCT"},{"item_name":"Direct Acids","item_id":"015557","item_category":"","item_brand":"The Ordinary","item_main_category":"Gesichtspeeling (120107)","item_product_classification":"Pflege / Make-Up","net_price":9.08,"gross_price":10.8,"quantity":"1","item_name_affiliate":"The Ordinary;Direct Acids","item_type":"PRODUCT"}]'
        );
      },
      451: () => {
        console.log("hello_world");
      },
      572: (e) => {
        e.exports = function (e) {
          return e.reduce(function (e, t) {
            return (e.push({ id: t.item_id, quantity: t.quantity }), e);
          }, []);
        };
      },
      679: (e, t, i) => {
        var r = i(226);
        (i(190),
          (e.exports = function (e) {
            var t = [],
              i = [],
              n = [],
              a = [],
              o = [];
            return (
              (r.awin = "AW:P"),
              e.reduce(function (e, r) {
                return (
                  t.push(r.item_id),
                  i.push(r.quantity),
                  n.push(r.item_name_affiliate),
                  a.push(r.item_main_category),
                  o.push(r.net_price),
                  e + "AW:P|123456|test1234|" + r.item_id + "|" + r.item_brand + ";" + r.item_name + "|" + r.net_price + "|" + r.quantity + "||gc10|" + r.item_main_category + "\r\n"
                );
              }, "")
            );
          }));
      }
    },
    t = {};
  function i(r) {
    var n = t[r];
    if (void 0 !== n) return n.exports;
    var a = (t[r] = { exports: {} });
    return (e[r](a, a.exports, i), a.exports);
  }
  var r = i(190);
  window.b = {};
  var n = i(679),
    a = i(406),
    o = i(572);
  (i(451),
    console.log(JSON.stringify(o(a))),
    r(function () {
      console.log(cheese);
    }),
    n(a));
})();
