(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD
    define([], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS
    module.exports = factory();
  } else {
    // Browser globals (root is window)
    root.mapSwitch = factory();
  }
}(typeof self !== 'undefined' ? self : this, function () {
  const mapSwitch = (map) => {
    if (typeof map !== 'object' || map === null) {
      throw new Error('Invalid map argument');
    }
    return (value) => (map[value] || map.default || (() => undefined))();
  };

  return mapSwitch;
}));