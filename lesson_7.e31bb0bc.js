// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"color.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Color =
/*#__PURE__*/
function () {
  function Color(r, g, b) {
    _classCallCheck(this, Color);

    this.r = minMax(r);
    this.g = minMax(g);
    this.b = minMax(b);

    function minMax(color) {
      switch (Math.abs(color) > 255) {
        case true:
          return color = 255;

        default:
          return Math.round(Math.abs(color));
      }
    }

    this.average = (this.r + this.g + this.b) / 3;
  }

  _createClass(Color, [{
    key: "toString",
    value: function toString() {
      return "rgb(".concat(this.r, ", ").concat(this.g, ", ").concat(this.b, ")");
    }
  }, {
    key: "toBlack",
    value: function toBlack() {
      this.r = 0;
      this.g = 0;
      this.b = 0;
      this.average = 0;
      return this;
    }
  }, {
    key: "toWhite",
    value: function toWhite() {
      this.r = 255;
      this.g = 255;
      this.b = 255;
      this.average = 255;
      return this;
    }
  }, {
    key: "getLightness",
    value: function getLightness() {
      return this.average;
    }
  }, {
    key: "toGrayscale",
    value: function toGrayscale() {
      this.r = Math.round(this.average);
      this.g = Math.round(this.average);
      this.b = Math.round(this.average);
      this.average = Math.round(this.average);
      return this;
    }
  }, {
    key: "invert",
    value: function invert() {
      this.r = 255 - this.r;
      this.g = 255 - this.g;
      this.b = 255 - this.b;
      this.average = (this.r + this.g + this.b) / 3;
      return this;
    }
  }, {
    key: "random",
    value: function random() {
      this.r = Math.round(Math.random() * 255);
      this.g = Math.round(Math.random() * 255);
      this.b = Math.round(Math.random() * 255);
      this.average = (this.r + this.g + this.b) / 3;
      return this;
    }
  }], [{
    key: "fromString",
    value: function fromString() {
      var str = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "rgb(0, 0, 0)";
      if (!(str.toString().indexOf('rgb(') == 0 && str.toString().indexOf(')') == str.length - 1)) str = "rgb(0, 0, 0)";
      var substring = str.toString().substring(4, str.length - 1).split(',').map(function (el) {
        return +el;
      });
      if (substring.map(function (e) {
        return typeof e == "number";
      }).indexOf(false) != -1) str = "rgb(0, 0, 0)";
      return new Color(substring[0], substring[1], substring[2]);
    }
  }]);

  return Color;
}();

exports.default = Color;
},{}],"index.js":[function(require,module,exports) {
"use strict";

var _color = _interopRequireDefault(require("./color"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var MiniSlider =
/*#__PURE__*/
function () {
  function MiniSlider() {
    var id = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'slider';

    _classCallCheck(this, MiniSlider);

    this.id = document.getElementById(id);
    this.slide = 0;
    this.hideAll();
    this.show(this.slide);
    this.createButtons();
    document.getElementById('nextButton').addEventListener('click', this.next.bind(this));
    document.getElementById('prevButton').addEventListener('click', this.prev.bind(this));
  }

  _createClass(MiniSlider, [{
    key: "hideAll",
    value: function hideAll() {
      for (var i = 0; i < this.id.childElementCount; i += 1) {
        this.id.children[i].style.display = 'none';
      }
    }
  }, {
    key: "show",
    value: function show(n) {
      this.hideAll();
      this.id.children[n].style.display = 'block';
      this.id.children[n].style.animation = 'change 2s ease-in-out';
    }
  }, {
    key: "createButtons",
    value: function createButtons() {
      this.id.parentElement.style.position = 'relative';
      var prevButton = document.createElement('button');
      prevButton.id = 'prevButton';
      prevButton.className = 'button';
      prevButton.innerHTML = '<--';
      prevButton.style.position = 'absolute';
      prevButton.style.top = '0';
      prevButton.style.left = '0';
      var nextButton = document.createElement('button');
      nextButton.id = 'nextButton';
      nextButton.className = 'button';
      nextButton.innerHTML = '-->';
      nextButton.style.position = 'absolute';
      nextButton.style.top = '0';
      nextButton.style.right = '0';
      this.id.parentElement.appendChild(prevButton);
      this.id.parentElement.appendChild(nextButton);
    }
  }, {
    key: "next",
    value: function next() {
      this.slide += 1;
      if (this.slide > this.id.childElementCount - 1) this.slide = 0;
      this.show(this.slide);
      document.getElementById('nextButton').style.borderColor = "".concat(new _color.default().random().toString());
    }
  }, {
    key: "prev",
    value: function prev() {
      this.slide -= 1;
      if (this.slide < 0) this.slide = this.id.childElementCount - 1;
      this.show(this.slide);
      document.getElementById('prevButton').style.borderColor = "".concat(new _color.default().random().toString());
    }
  }, {
    key: "destroy",
    value: function destroy() {
      this.id.parentElement.removeChild(document.getElementById('nextButton'));
      this.id.parentElement.removeChild(document.getElementById('prevButton'));
      this.id.parentElement.removeAttribute('style');
    }
  }]);

  return MiniSlider;
}();
},{"./color":"color.js"}],"node_modules/parcel/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "55866" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else {
        window.location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["node_modules/parcel/src/builtins/hmr-runtime.js","index.js"], null)
//# sourceMappingURL=/lesson_7.e31bb0bc.js.map