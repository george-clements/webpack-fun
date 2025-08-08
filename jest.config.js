require("jest-environment-jsdom");

module.exports = {
  setupFiles: ["./jest.setup.js"],
  testEnvironment: "jsdom"
  // other configurations...
};