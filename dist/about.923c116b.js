// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function(modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
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

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this,
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x) {
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
  newRequire.register = function(id, exports) {
    modules[id] = [
      function(require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function() {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function() {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"3qvO1":[function(require,module,exports) {
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d751713988987e9331980363e24189ce";
module.bundle.HMR_BUNDLE_ID = "946cafe294e8ecfb570da607923c116b"; // @flow
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: mixed;
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
*/ var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {
            });
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets/*: {|[string]: boolean|} */ , acceptedAssets/*: {|[string]: boolean|} */ , assetsToAccept/*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
    return HMR_PORT || location.port;
}
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == 'https:' && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? 'wss' : 'ws';
    var ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/');
    // $FlowFixMe
    ws.onmessage = function(event/*: {data: string, ...} */ ) {
        checkedAssets = {
        };
        acceptedAssets = {
        };
        assetsToAccept = [];
        var data = JSON.parse(event.data);
        if (data.type === 'update') {
            // Remove error overlay if there is one
            removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH
            );
            // Handle HMR Update
            var handled = false;
            assets.forEach((asset)=>{
                var didAccept = asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
                if (didAccept) handled = true;
            });
            if (handled) {
                console.clear();
                assets.forEach(function(asset) {
                    hmrApply(module.bundle.root, asset);
                });
                for(var i = 0; i < assetsToAccept.length; i++){
                    var id = assetsToAccept[i][1];
                    if (!acceptedAssets[id]) hmrAcceptRun(assetsToAccept[i][0], id);
                }
            } else window.location.reload();
        }
        if (data.type === 'error') {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error('🚨 [parcel]: ' + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
            }
            // Render the fancy html overlay
            removeErrorOverlay();
            var overlay = createErrorOverlay(data.diagnostics.html);
            // $FlowFixMe
            document.body.appendChild(overlay);
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function(e) {
        console.warn('[parcel] 🚨 Connection to the HMR server was lost');
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log('[parcel] ✨ Error resolved');
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement('div');
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.codeframe ? diagnostic.codeframe : diagnostic.stack;
        errorHTML += `\n      <div>\n        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">\n          🚨 ${diagnostic.message}\n        </div>\n        <pre>\n          ${stack}\n        </pre>\n        <div>\n          ${diagnostic.hints.map((hint)=>'<div>' + hint + '</div>'
        ).join('')}\n        </div>\n      </div>\n    `;
    }
    errorHTML += '</div>';
    overlay.innerHTML = errorHTML;
    return overlay;
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute('href', // $FlowFixMe
    link.getAttribute('href').split('?')[0] + '?' + Date.now());
    // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute('href');
            var hostname = getHostname();
            var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(window.location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrApply(bundle/*: ParcelRequire */ , asset/*:  HMRAsset */ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === 'css') {
        reloadCSS();
        return;
    }
    let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
    if (deps) {
        var fn = new Function('require', 'module', 'exports', asset.output);
        modules[asset.id] = [
            fn,
            deps
        ];
    } else if (bundle.parent) hmrApply(bundle.parent, asset);
}
function hmrAcceptCheck(bundle/*: ParcelRequire */ , id/*: string */ , depsByBundle/*: ?{ [string]: { [string]: string } }*/ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToAccept.push([
        bundle,
        id
    ]);
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) return true;
    return getParents(module.bundle.root, id).some(function(v) {
        return hmrAcceptCheck(v[0], v[1], null);
    });
}
function hmrAcceptRun(bundle/*: ParcelRequire */ , id/*: string */ ) {
    var cached = bundle.cache[id];
    bundle.hotData = {
    };
    if (cached && cached.hot) cached.hot.data = bundle.hotData;
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData);
    });
    delete bundle.cache[id];
    bundle(id);
    cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
    });
    acceptedAssets[id] = true;
}

},{}],"6RHTD":[function(require,module,exports) {
var _navigationJs = require("./navigation.js");
const genre = document.querySelector(".section-genre");
const header = document.querySelector("header");
const stickyNav = document.querySelector(".sticky-nav");
const stickyMob = document.querySelector(".stick-mobile");
const ticketBtn = document.querySelector(".ticket");
const ticketBtnMob = document.querySelector(".ticket-mobile");
const lightDesktop = document.querySelector(".light-toggle-desktop");
const darkDesktop = document.querySelector(".dark-toggle-desktop");
const lightMob = document.querySelector(".light-toggle-mob");
const darkMob = document.querySelector(".dark-toggle-mob");
const navMob = document.querySelector(".nav-mob");
const hamburger = document.querySelector(".hamburger");
const close = document.querySelector(".close");
const root = document.querySelector(":root");
if (localStorage.theme === "dark") root.style.setProperty("--dottedColor", "#fff");
else root.style.setProperty("--dottedColor", "#3c4859");
_navigationJs.stickyFunc(stickyNav, header, ticketBtn);
_navigationJs.stickyFunc(stickyMob, header);
const imageTarget = document.querySelectorAll("img[data-src]");
const loadImg = function(entries, observer) {
    // const [entry] = entries;
    entries.forEach((entry)=>{
        if (!entry.isIntersecting) return;
        entry.target.src = entry.target.dataset.src;
        entry.target.addEventListener("load", function() {
            entry.target.classList.remove("image-filter");
        });
        imgObserver.unobserve(entry.target);
    });
};
const imgObserver = new IntersectionObserver(loadImg, {
    root: null,
    threshold: 0,
    rootMargin: "20px"
});
imageTarget.forEach((img)=>imgObserver.observe(img)
); // const sectionObserverFunc = function (entries, observer) {
 //   const [entry] = entries;
 //   if (!entry.isIntersecting) return;
 //   entry.target.classList.remove("opacity-0", "transform", "translate-y-28");
 //   observer.unobserve(entry);
 // };
 // const sectionObserver = new IntersectionObserver(sectionObserverFunc, {
 //   root: null,
 //   threshold: 0.5,
 // });
 // allSections.forEach((section) => {
 //   sectionObserver.observe(section);
 //   section.classList.add(
 //     "opacity-0",
 //     "transition-all",
 //     "duration-700",
 //     "transform",
 //     "translate-y-28"
 //   );
 // });
 // sectionObserver.observe(footer);
 // footer.classList.add("opacity-0", "transform", "translate-y-28");

},{"./navigation.js":"57nKR"}],"57nKR":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "stickyNav", ()=>stickyNav
);
parcelHelpers.export(exports, "stickyMob", ()=>stickyMob
);
parcelHelpers.export(exports, "hamburger", ()=>hamburger
);
parcelHelpers.export(exports, "close", ()=>close
);
parcelHelpers.export(exports, "ticketBtn", ()=>ticketBtn
);
parcelHelpers.export(exports, "ticketBtnMob", ()=>ticketBtnMob
);
parcelHelpers.export(exports, "lightDesktop", ()=>lightDesktop
);
parcelHelpers.export(exports, "darkDesktop", ()=>darkDesktop
);
parcelHelpers.export(exports, "lightMob", ()=>lightMob
);
parcelHelpers.export(exports, "darkMob", ()=>darkMob
);
parcelHelpers.export(exports, "navMob", ()=>navMob
);
parcelHelpers.export(exports, "logo", ()=>logo
);
parcelHelpers.export(exports, "stickyFunc", ()=>stickyFunc
);
const stickyNav = document.querySelector(".sticky-nav");
const stickyMob = document.querySelector(".stick-mobile");
const hamburger = document.querySelector(".hamburger");
const close = document.querySelector(".close");
const ticketBtn = document.querySelector(".ticket");
const ticketBtnMob = document.querySelector(".ticket-mobile");
const lightDesktop = document.querySelector(".light-toggle-desktop");
const darkDesktop = document.querySelector(".dark-toggle-desktop");
const lightMob = document.querySelector(".light-toggle-mob");
const darkMob = document.querySelector(".dark-toggle-mob");
const navMob = document.querySelector(".nav-mob");
const logo = document.querySelectorAll(".logo");
const root = document.querySelector(":root");
let entry;
function stickyFunc(type, targetElement, btn) {
    const stickyNavFunc = function(entries, observer) {
        [entry] = entries;
        if (!entry.isIntersecting) {
            if (localStorage.theme !== "dark") logo.forEach((lg)=>lg.src = "img/logo-dark.png"
            );
            type.classList.add("bg-white", "dark:bg-gray-800", // "opacity-95",
            "text-primaryLight", "shadow-lg", "dark:text-gray-50");
            if (btn) {
                btn.classList.remove("bg-white", "dark:text-gray-700", "text-gray-700");
                btn.classList.add("bg-primaryLight", "dark:bg-gray-50", "dark:text-gray-700", "text-gray-50");
            }
        } else {
            logo.forEach((lg)=>lg.src = "img/logo-white.png"
            );
            type.classList.remove("bg-white", // "opacity-95",
            "shadow-lg", "text-primaryLight", "dark:bg-gray-800", "dark:text-gray-50");
            if (btn) {
                btn.classList.remove("bg-primaryLight", "text-gray-50", "dark:bg-gray-50", "dark:text-gray-700");
                btn.classList.add("bg-white", "text-gray-700", "dark:text-gray-700");
            }
        }
    };
    const headerObserver = new IntersectionObserver(stickyNavFunc, {
        root: null,
        threshold: 0.95
    });
    headerObserver.observe(targetElement);
}
// stickyFunc(stickyNav, ticketBtn, header);
// stickyFunc(stickyMob, header);
/* Audio link for notification */ const openClose = function(e) {
    // let audio = new Audio("/public/img/pop4.mp3");
    // audio.play();
    e.preventDefault();
    if (navMob.classList.contains("hidden")) {
        navMob.classList.add("flex");
        navMob.classList.remove("hidden");
    } else {
        navMob.classList.remove("flex");
        navMob.classList.add("hidden");
    }
};
hamburger.addEventListener("click", openClose);
close.addEventListener("click", openClose);
const themeToggleBtnDesktop = document.getElementById("theme-toggle-btn-desktop");
const themeToggleBtnMob = document.getElementById("theme-toggle-btn-mob");
const allSections = document.querySelectorAll("section");
const footer = document.querySelector("footer");
window.addEventListener("load", ()=>{
    const resetDarkToggleBtn = function(light, dark) {
        if (localStorage.theme === "dark") {
            light.classList.add("hidden");
            dark.classList.remove("hidden");
            root.style.setProperty("--lightColor", "white");
        } else root.style.setProperty("--lightColor", "#6e01f2");
    };
    resetDarkToggleBtn(lightDesktop, darkDesktop);
    resetDarkToggleBtn(lightMob, darkMob);
});
const themeToggleFunc = function(light, dark) {
    // let audio = new Audio("/public/img/preview.mp3");
    // audio.play();
    if (!localStorage.getItem("theme") || localStorage.theme === "light") {
        if (entry.isIntersecting || !entry.isIntersecting) logo.forEach((lg)=>lg.src = "img/logo-white.png"
        );
        root.style.setProperty("--dottedColor", "#fff");
        light.classList.add("hidden");
        dark.classList.remove("hidden");
        localStorage.theme = "dark";
        document.documentElement.classList.add("dark");
        root.style.setProperty("--lightColor", "white");
    } else if (localStorage.theme === "dark") {
        if (entry.isIntersecting) logo.forEach((lg)=>lg.src = "img/logo-white.png"
        );
        else logo.forEach((lg)=>lg.src = "img/logo-dark.png"
        );
        root.style.setProperty("--dottedColor", "#3c4859");
        light.classList.remove("hidden");
        dark.classList.add("hidden");
        localStorage.theme = "light";
        document.documentElement.classList.remove("dark");
        root.style.setProperty("--lightColor", "#6e01f2");
    }
};
themeToggleBtnDesktop.addEventListener("click", (e)=>{
    e.preventDefault();
    themeToggleFunc(lightDesktop, darkDesktop);
});
themeToggleBtnMob.addEventListener("click", (e)=>{
    e.preventDefault();
    themeToggleFunc(lightMob, darkMob);
});
const ticketModal = function(e) {
    e.preventDefault();
    const modalMarkup = ``;
};
ticketBtn.addEventListener("click", ticketModal);

},{"@parcel/transformer-js/src/esmodule-helpers.js":"367CR"}],"367CR":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, '__esModule', {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === 'default' || key === '__esModule') return;
        // Skip duplicate re-exports when they have the same value.
        if (key in dest && dest[key] === source[key]) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}]},["3qvO1","6RHTD"], "6RHTD", "parcelRequire13fe")

//# sourceMappingURL=about.923c116b.js.map
