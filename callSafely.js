var callSafely = function (fun, arg1) {
  try {
    return fun(arg1);
  } catch (e) {
    window.b.dmp_errors = window.b.dmp_errors || [];
    window.b.dmp_errors.push(e.stack.slice(0, 200));
    if (typeof ineum === "function") {
      ineum("reportError", e, { componentStack: "webpack", meta: { source: "webpack_fun" } });
    }
  }
};

module.exports = callSafely;
