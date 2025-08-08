window.b = require("./utag_data/de_cart.json");

test("mapping", () => {
  expect(b.dmp_errors).toStrictEqual([]);
});

test("george's test", () => {
    expect(typeof window.fetch === "function").toStrictEqual(true);
    expect(window.fetch).toHaveBeenCalledWith("https://www.test.co.uk");
    expect(window.fetch).toHaveBeenCalled(1);
})

var awin = require("../awin");
var items = require("../items.json");


test("awin_items", () => {
    expect(awin(items)).toContain("AW:P|123456|test1234|1220479|The Ordinary;Glycolic Acid 7 %|10.25|1||gc10|Gesichtswasser");
})