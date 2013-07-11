exports.javascript = function(element, code, filename) {
  console.log('Processing', filename);
  var doc = element.ownerDocument, window = doc && doc.parentWindow;
  if (window) {
    try {
      window.run(code, filename);
    } catch (e) {
      console.log(window.run);
      console.log(e.stack);
      var msg = 'Running ' + filename + ' failed.';
      var reason = {error: e, filename: filename}
      console.log(msg, reason);
      element.raise('error', msg, reason);
    }
  }
};
