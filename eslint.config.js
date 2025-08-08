module.exports = {
  rules: {
    "no-alert": "error",
    "no-restricted-syntax": [
      "error",
      {
        selector: "TemplateLiteral",
        message: "Template literals (backticks) are not allowed. Use string concatenation instead."
      }
    ]
  }
};
