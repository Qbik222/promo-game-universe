"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
(function () {
  var _Number;
  var apiURL = 'https://fav-prom.com/api_game_universe';
  var getActiveWeek = function getActiveWeek(promoStartDate, weekDuration) {
    var currentDate = new Date();
    var weekDates = [];
    var Day = 24 * 60 * 60 * 1000;
    var Week = weekDuration * Day;
    var formatDate = function formatDate(date) {
      return "".concat(date.getDate().toString().padStart(2, "0"), ".").concat((date.getMonth() + 1).toString().padStart(2, "0"));
    };
    var calculateWeekPeriod = function calculateWeekPeriod(weekIndex) {
      var baseStart = promoStartDate.getTime();
      var start = new Date(baseStart + weekIndex * Week);
      var end = new Date(start.getTime() + (weekDuration * Day - 1));
      return {
        start: start,
        end: end
      };
    };
    var activeWeekIndex = null;

    // Перевірка поточного тижня
    for (var i = 0; i < 10; i++) {
      // Обмежуємо 10 тижнями (якщо потрібно більше, просто змініть лічильник)
      var _calculateWeekPeriod = calculateWeekPeriod(i),
        start = _calculateWeekPeriod.start,
        end = _calculateWeekPeriod.end;
      if (currentDate >= start && currentDate <= end) {
        activeWeekIndex = i + 1;
        break;
      }
    }
    return activeWeekIndex;
  };
  var promoStartDate = new Date("2025-05-05T00:00:00");
  var weekDuration = 10;
  var isVerifiedUser = false;
  var periodAmount = 2; // кількість періодів в акції, треба для кешування інфи з табли

  var tableData = [];
  var activeWeek = getActiveWeek(promoStartDate, weekDuration) || 1;
  // let activeWeek = 2

  if (activeWeek > 2) activeWeek = 2;
  var mainPage = document.querySelector(".fav-page"),
    unauthMsgs = document.querySelectorAll('.unauth-msg'),
    participateBtns = document.querySelectorAll('.part-btn'),
    redirectBtns = document.querySelectorAll('.btn-join'),
    loader = document.querySelector(".spinner-overlay"),
    cardPopupIcons = document.querySelectorAll('.card__popup'),
    preloader = document.querySelector('.popup--preloader'),
    preloaderCards = preloader.querySelectorAll('.card__inner'),
    preloaderPrize = preloader.querySelector('.card__inner--prize'),
    box = document.querySelector('.box__open'),
    logoBox = document.querySelector('.box__logo'),
    boxCap = document.querySelector('.box__open-cap');
  var ukLeng = document.querySelector('#ukLeng');
  var enLeng = document.querySelector('#enLeng');
  var toggleClasses = function toggleClasses(elements, className) {
    return elements.forEach(function (el) {
      return el.classList.toggle("".concat(className));
    });
  };
  var toggleTranslates = function toggleTranslates(elements, dataAttr) {
    return elements.forEach(function (el) {
      el.setAttribute('data-translate', "".concat(dataAttr));
      el.innerHTML = i18nData[dataAttr] || '*----NEED TO BE TRANSLATED----*   key:  ' + dataAttr;
      el.removeAttribute('data-translate');
    });
  };
  var loaderBtn = false;

  // let locale = "en"
  var locale = sessionStorage.getItem("locale") || "uk";
  if (ukLeng) locale = 'uk';
  if (enLeng) locale = 'en';
  var debug = false;
  if (debug) hideLoader();
  var i18nData = {};
  var translateState = true;
  // let userId = null;
  var userId = (_Number = Number(sessionStorage.getItem("userId"))) !== null && _Number !== void 0 ? _Number : null;
  function createGlitchLayers() {
    var layers = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 3;
    var container = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
    var wrap = document.createElement('div');
    wrap.className = 'glitch__layers';
    for (var i = 0; i < layers; i++) {
      var layer = document.createElement('div');
      layer.className = 'glitch__layer';
      wrap.appendChild(layer);
    }
    if (container) {
      var target = typeof container === 'string' ? document.querySelector(container) : container;
      if (target) target.appendChild(wrap);
    }
    return wrap;
  }
  function removeGlitchLayers(container) {
    var target = typeof container === 'string' ? document.querySelector(container) : container;
    if (!target) return;
    var glitch = target.querySelector('.glitch__layers');
    if (glitch) glitch.remove();
  }
  var request = function request(link, extraOptions) {
    return fetch(apiURL + link, _objectSpread({
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    }, extraOptions || {})).then(function (res) {
      if (!res.ok) throw new Error('API error');
      return res.json();
    })["catch"](function (err) {
      console.error('API request failed:', err);

      // reportError(err);
      //
      // document.querySelector('.fav-page').style.display = 'none';
      // if (window.location.href.startsWith("https://www.favbet.hr/")) {
      //     window.location.href = '/promocije/promocija/stub/';
      // } else {
      //     window.location.href = '/promos/promo/stub/';
      // }

      return Promise.reject(err);
    });
  };
  function hideLoader() {
    loader.classList.add("hide");
    document.body.style.overflow = "auto";
    mainPage.classList.remove("loading");
  }
  function init() {
    return _init.apply(this, arguments);
  }
  function _init() {
    _init = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
      var attempts, maxAttempts, attemptInterval, tryDetectUserId, quickCheckAndRender, waitForUserId;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            quickCheckAndRender = function _quickCheckAndRender() {
              setTimeout(hideLoader, 600);
              // checkUserAuth()
              //     .then(loadUsers)
              //     .then(() =>{
              //         setTimeout(hideLoader, 300);
              //         document.querySelectorAll(".table__tabs-item").forEach((tab, i) =>{
              //             tab.classList.remove('active');
              //             if(i === activeWeek - 1) tab.classList.add('active');
              //         })
              //         // renderUsers(activeWeek, tableData);
              //         participateBtns.forEach(btn => btn.addEventListener('click', participate));
              //     })

              // shakeUntil(box, getUserPrize, logoBox).then(res =>{
              //     showPreloader(res);
              // })

              updateSlider();

              // showPrizeForPreloader("prize1")

              document.querySelectorAll('.card__inner').forEach(function (card) {
                card.addEventListener('click', function () {
                  card.classList.toggle('is-flipped');
                });
              });
              buttonsLeft.forEach(function (btn) {
                btn.addEventListener('click', function () {
                  moveSlider(-1);
                  btn.style.pointerEvents = 'none';
                  setTimeout(function () {
                    btn.style.pointerEvents = 'initial';
                  }, 1000);
                });
              });
              buttonsRight.forEach(function (btn) {
                btn.addEventListener('click', function () {
                  moveSlider(1);
                  btn.style.pointerEvents = 'none';
                  setTimeout(function () {
                    btn.style.pointerEvents = 'initial';
                  }, 1000);
                });
              });
              slider.addEventListener('mousedown', handleStart);
              slider.addEventListener('touchstart', handleStart);
              document.addEventListener('mousemove', handleMove);
              document.addEventListener('touchmove', handleMove);
              document.addEventListener('mouseup', handleEnd);
              document.addEventListener('touchend', handleEnd);
              document.querySelector('.popups').addEventListener('click', function (e) {
                var openPopupEl = document.querySelector('.popup.active');
                if (openPopupEl) {
                  var _openPopupEl$querySel;
                  var contentWrap = openPopupEl.querySelector('.popup__wrap');
                  var closeBtn = (_openPopupEl$querySel = openPopupEl.querySelector('.card__close')) !== null && _openPopupEl$querySel !== void 0 ? _openPopupEl$querySel : openPopupEl.querySelector('.popup__close');
                  if (contentWrap && !contentWrap.contains(e.target)) {
                    closeAllPopups();
                  }
                  if (e.target === closeBtn) {
                    closeAllPopups();
                  }
                }
              });
              cardPopupIcons.forEach(function (icon) {
                icon.addEventListener('click', function () {
                  var dataAttr = this.getAttribute("data-popup");
                  openPopupByAttr(dataAttr);
                });
              });
            };
            tryDetectUserId = function _tryDetectUserId() {
              if (window.store) {
                var state = window.store.getState();
                userId = state.auth.isAuthorized && state.auth.id || '';
              } else if (window.g_user_id) {
                userId = window.g_user_id;
              }
            };
            attempts = 0;
            maxAttempts = 20;
            attemptInterval = 50;
            waitForUserId = new Promise(function (resolve) {
              var interval = setInterval(function () {
                tryDetectUserId();
                if (userId || attempts >= maxAttempts) {
                  quickCheckAndRender();
                  clearInterval(interval);
                  resolve();
                }
                attempts++;
              }, attemptInterval);
            });
            _context.next = 8;
            return waitForUserId;
          case 8:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }));
    return _init.apply(this, arguments);
  }
  function loadTranslations() {
    return request("/new-translates/".concat(locale, "?nocache=1")).then(function (json) {
      i18nData = json;
      translate();
    });
  }

  // function showPrizeByDataAttr(dataAttr) {
  //     const cards = preloaderPrize.querySelectorAll('.card__inner');
  //
  //     cards.forEach(card => {
  //         const back = card.querySelectorAll('.card__back')
  //         back.forEach(item => {
  //             item.classList.add('hide');
  //             if(item.getAttribute("data-prize") === dataAttr) {
  //                 item.classList.remove("hide")
  //             }
  //         })
  //
  //
  //     })
  //
  // }

  function clearPreloaderState() {
    var allCardsInner = document.querySelectorAll('.card__inner'),
      allCardBack = document.querySelectorAll('.card__back'),
      popupPreloader = document.querySelector('.popup--preloader');
    allCardsInner.forEach(function (card) {
      card.classList.remove('is-flipped');
      card.classList.add('is-hide');
    });
    popupPreloader.classList.remove('active');
    allCardBack.forEach(function (card) {
      card.classList.add('hide');
    });
  }
  function showPreloader(prize) {
    openPopupByAttr('preloader');
    showPrizeByDataAttr(prize);
    setTimeout(function () {
      preloaderCards.forEach(function (card, i) {
        setTimeout(function () {
          card.classList.remove('is-hide');
        }, i * 250);
        setTimeout(function () {
          preloaderPrize.classList.add('is-flipped');
          setTimeout(function () {
            clearPreloaderState();
            setTimeout(function () {
              openPopupByAttr(prize);
            }, 800);
          }, 2000);
        }, 1250);
      });
    }, 200);
  }
  // showPreloader();

  function getUserPrize() {
    return new Promise(function (resolve) {
      setTimeout(function () {
        return resolve('prize1');
      }, 1000); // тут отримуєм приз який випав юзеру
    });
  }

  function shakeUntil(el, waitPromise, logo) {
    var opts = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
    var _opts$amplitude = opts.amplitude,
      amplitude = _opts$amplitude === void 0 ? 4 : _opts$amplitude,
      _opts$duration = opts.duration,
      duration = _opts$duration === void 0 ? 500 : _opts$duration,
      _opts$axis = opts.axis,
      axis = _opts$axis === void 0 ? 'x' : _opts$axis;
    var stop;
    if (logo) {
      logo.classList.add('active');
    }
    if (el.animate) {
      var keyframes = axis === 'x' ? [{
        transform: 'translateX(0)'
      }, {
        transform: "translateX(-".concat(amplitude, "px)")
      }, {
        transform: "translateX(".concat(amplitude, "px)")
      }, {
        transform: 'translateX(0)'
      }] : [{
        transform: 'translateY(0)'
      }, {
        transform: "translateY(-".concat(amplitude, "px)")
      }, {
        transform: "translateY(".concat(amplitude, "px)")
      }, {
        transform: 'translateY(0)'
      }];
      var anim = el.animate(keyframes, {
        duration: duration,
        iterations: Infinity,
        easing: 'linear'
      });
      stop = function stop() {
        anim.cancel();
        el.style.transform = '';
        if (logo) {
          setTimeout(function () {
            logo.classList.remove('active');
          }, 4000);
        }
      };
    } else {
      var start = null,
        rafId = 0,
        running = true;
      var loop = function loop(t) {
        if (start === null) start = t;
        var phase = (t - start) % duration / duration * Math.PI * 2;
        var delta = Math.sin(phase) * amplitude;
        el.style.transform = axis === 'x' ? "translateX(".concat(delta, "px)") : "translateY(".concat(delta, "px)");
        if (running) rafId = requestAnimationFrame(loop);
      };
      rafId = requestAnimationFrame(loop);
      stop = function stop() {
        running = false;
        cancelAnimationFrame(rafId);
        el.style.transform = '';
        if (logo) {
          setTimeout(function () {
            logo.classList.remove('active');
          }, 4000);
        }
      };
    }
    return Promise.resolve(waitPromise)["finally"](function () {
      stop();
    });
  }
  function checkUserAuth() {
    console.log(userId);
    if (userId) {
      var _iterator = _createForOfIteratorHelper(unauthMsgs),
        _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var unauthMes = _step.value;
          unauthMes.classList.add('hide');
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
      return request("/favuser/".concat(userId, "?nocache=1")).then(function (res) {
        if (res.userid) {
          participateBtns.forEach(function (item) {
            return item.classList.add('hide');
          });
          redirectBtns.forEach(function (item) {
            return item.classList.remove('hide');
          });
          isVerifiedUser = true;
          console.log(isVerifiedUser);
        } else {
          participateBtns.forEach(function (item) {
            return item.classList.remove('hide');
          });
          redirectBtns.forEach(function (item) {
            return item.classList.add('hide');
          });
          isVerifiedUser = false;
        }
      });
    } else {
      var _iterator2 = _createForOfIteratorHelper(redirectBtns),
        _step2;
      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          var redirectBtn = _step2.value;
          redirectBtn.classList.add('hide');
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }
      var _iterator3 = _createForOfIteratorHelper(participateBtns),
        _step3;
      try {
        for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
          var participateBtn = _step3.value;
          participateBtn.classList.add('hide');
        }
      } catch (err) {
        _iterator3.e(err);
      } finally {
        _iterator3.f();
      }
      var _iterator4 = _createForOfIteratorHelper(unauthMsgs),
        _step4;
      try {
        for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
          var _unauthMes = _step4.value;
          _unauthMes.classList.remove('hide');
        }
      } catch (err) {
        _iterator4.e(err);
      } finally {
        _iterator4.f();
      }
      return Promise.resolve(false);
    }
  }
  function reportError(err) {
    var reportData = {
      origin: window.location.href,
      userid: userId,
      errorText: (err === null || err === void 0 ? void 0 : err.error) || (err === null || err === void 0 ? void 0 : err.text) || (err === null || err === void 0 ? void 0 : err.message) || 'Unknown error',
      type: (err === null || err === void 0 ? void 0 : err.name) || 'UnknownError',
      stack: (err === null || err === void 0 ? void 0 : err.stack) || ''
    };
    fetch('https://fav-prom.com/api-cms/reports/add', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(reportData)
    })["catch"](console.warn);
  }
  function translate() {
    var elems = document.querySelectorAll('[data-translate]');
    if (elems && elems.length) {
      if (translateState) {
        elems.forEach(function (elem) {
          var key = elem.getAttribute('data-translate');
          elem.innerHTML = i18nData[key] || '*----NEED TO BE TRANSLATED----*   key:  ' + key;
          if (i18nData[key]) {
            elem.removeAttribute('data-translate');
          }
        });
      } else {
        console.log("translation works!");
      }
    }
    if (locale === 'en') {
      mainPage.classList.add('en');
    }
    refreshLocalizedClass(mainPage);
  }
  function refreshLocalizedClass(element) {
    var baseCssClass = "";
    if (!element) {
      return;
    }
    for (var _i = 0, _arr = ['uk', 'en']; _i < _arr.length; _i++) {
      var lang = _arr[_i];
      element.classList.remove(baseCssClass + lang);
    }
    element.classList.add(baseCssClass + locale);
  }
  function renderUsers(weekNum) {
    var userData = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
    weekNum = Number(weekNum);
    userData = userData.find(function (week) {
      return week.week === weekNum;
    }).users;
    console.log(userData);
    var currentUser = userData.find(function (user) {
      return user.userid === userId;
    });
    console.log(userId);
    console.log(currentUser);
    console.log(isVerifiedUser);
    if (userId && !currentUser && isVerifiedUser) {
      userData = [].concat(_toConsumableArray(userData), [{
        userid: userId,
        points: 0
      }]);
    }
    console.log(userData);
    populateUsersTable(userData, userId, weekNum, currentUser, isVerifiedUser);
  }
  function populateUsersTable(users, currentUserId, week, currentUser, isVerifiedUser) {
    console.log(users);
    resultsTable.innerHTML = '';
    resultsTableOther.innerHTML = '';
    if (!(users !== null && users !== void 0 && users.length)) return;
    var isTopCurrentUser = currentUser && users.slice(0, 10).some(function (user) {
      return user.userid === currentUserId;
    });
    var topUsersLength = !userId || isTopCurrentUser ? 13 : 10;
    var topUsers = users.slice(0, topUsersLength);

    // console.log(users);
    topUsers.forEach(function (user) {
      displayUser(user, user.userid === currentUserId, resultsTable, topUsers, isTopCurrentUser, week);
    });
    // console.log(isTopCurrentUser)
    console.log(isVerifiedUser);
    if (isVerifiedUser && !currentUser) {
      console.log('user verified');
      displayUser(currentUser, true, resultsTableOther, users, false, week);
    }
    if (!isTopCurrentUser && currentUser) {
      isVerifiedUser = false;
      displayUser(currentUser, true, resultsTableOther, users, false, week);
    }
  }
  function displayUser(user, isCurrentUser, table, users, isTopCurrentUser, week) {
    var renderRow = function renderRow(userData) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var _options$highlight = options.highlight,
        highlight = _options$highlight === void 0 ? false : _options$highlight,
        _options$neighbor = options.neighbor,
        neighbor = _options$neighbor === void 0 ? false : _options$neighbor;
      var userRow = document.createElement('div');
      userRow.classList.add('table__row');
      var userPlace = users.indexOf(userData) + 1;
      var prizeKey = debug ? null : getPrizeTranslationKey(userPlace, week);
      if (userPlace <= 3) {
        userRow.classList.add("place".concat(userPlace));
      }
      if (highlight || isCurrentUser && !neighbor) {
        userRow.classList.add('you');
      } else if (neighbor) {
        userRow.classList.add('_neighbor');
      }
      userRow.innerHTML = "\n            <div class=\"table__row-item\">\n                ".concat(userPlace < 10 ? '0' + userPlace : userPlace, "\n                ").concat(isCurrentUser && !neighbor ? '<span class="you">' + translateKey("you") + '</span>' : '', "\n            </div>\n            <div class=\"table__row-item\">\n                ").concat(isCurrentUser && !neighbor ? userData.userid : maskUserId(userData.userid), "\n            </div>\n            <div class=\"table__row-item\">\n                ").concat(Number(userData.points).toFixed(2), "\n            </div>\n            <div class=\"table__row-item\">\n                ").concat(prizeKey ? translateKey(prizeKey) : ' - ', "\n            </div>\n        ");
      table.append(userRow);
    };
    if (isCurrentUser && !isTopCurrentUser) {
      var index = users.indexOf(user);
      if (users[index - 1]) {
        renderRow(users[index - 1], {
          neighbor: true
        });
      }
      renderRow(user, {
        highlight: true
      });
      if (users[index + 1]) {
        renderRow(users[index + 1], {
          neighbor: true
        });
      }
    } else {
      renderRow(user);
    }
  }
  function translateKey(key, defaultValue) {
    if (!key) {
      return;
    }
    var needKey = debug ? key : "*----NEED TO BE TRANSLATED----* key: ".concat(key);
    defaultValue = needKey || key;
    return i18nData[key] || defaultValue;
  }
  function maskUserId(userId) {
    return "**" + userId.toString().slice(2);
  }
  function getPrizeTranslationKey(place, week) {
    if (place <= 3) return "prize_".concat(week, "-").concat(place);
    if (place <= 10) return "prize_".concat(week, "-4-10");
    if (place <= 25) return "prize_".concat(week, "-11-25");
    if (place <= 50) return "prize_".concat(week, "-26-50");
    if (place <= 75) return "prize_".concat(week, "-51-75");
    if (place <= 100) return "prize_".concat(week, "-76-100");
    if (place <= 125) return "prize_".concat(week, "-101-125");
    if (place <= 150) return "prize_".concat(week, "-126-150");
    if (place <= 175) return "prize_".concat(week, "-151-175");
    if (place <= 200) return "prize_".concat(week, "-176-200");
  }
  function showPrizeByDataAttr(prize) {
    var allPrizes = document.querySelectorAll('[data-prize]');
    var currentPrize = document.querySelector("[data-prize=\"".concat(prize, "\"]"));
    if (currentPrize && allPrizes) {
      allPrizes.forEach(function (prize) {
        prize.classList.add('hide');
      });
      currentPrize.classList.remove('hide');
    }
  }
  function participate() {
    if (!userId) {
      return;
    }
    var params = {
      userid: userId
    };
    fetch(apiURL + '/user/', {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      method: 'POST',
      body: JSON.stringify(params)
    }).then(function (res) {
      return res.json();
    }).then(function (res) {
      console.log(res);
      loaderBtn = true;
      toggleClasses(participateBtns, "loader");
      toggleTranslates(participateBtns, "loader");
      setTimeout(function () {
        toggleTranslates(participateBtns, "loader_ready");
        toggleClasses(participateBtns, "done");
        toggleClasses(participateBtns, "loader");
      }, 500);
      setTimeout(function () {
        checkUserAuth();
        loadUsers("?nocache=1").then(function (res) {
          renderUsers(activeWeek, tableData);
        });
      }, 1000);
    })["catch"](function (err) {
      console.error('API request failed:', err);
      reportError(err);
      document.querySelector('.fav-page').style.display = 'none';
      if (window.location.href.startsWith("https://www.favbet.hr/")) {
        window.location.href = '/promocije/promocija/stub/';
      } else {
        window.location.href = '/promos/promo/stub/';
      }
      return Promise.reject(err);
    });
  }
  function loadUsers(parametr) {
    var requests = [];
    tableData.length = 0;
    var _loop = function _loop() {
      var week = i; // або будь-яка логіка для формування номера тижня
      var req = request("/users/".concat(week).concat(parametr ? parametr : "")).then(function (data) {
        console.log(data);
        tableData.push({
          week: week,
          users: data
        });
      });
      requests.push(req);
    };
    for (var i = 1; i <= periodAmount; i++) {
      _loop();
    }
    return Promise.all(requests)["catch"](function (error) {
      console.error('Error loading users:', error);
    });
  }

  //slider

  var buttonsRight = document.querySelectorAll('.prize__move-right'),
    buttonsLeft = document.querySelectorAll('.prize__move-left'),
    slider = document.querySelector('.cards'),
    items = slider.querySelectorAll('.card'),
    totalItems = items.length,
    dots = document.querySelectorAll('.prize__dots-item');
  var currentIndex = 2;
  var startX = 0;
  var isDragging = false;
  function updateSlider() {
    items.forEach(function (item, index) {
      var distance = (index - currentIndex + totalItems) % totalItems;
      item.classList.remove('_left', '_left1', '_left2', '_right', '_right1', '_right2', '_active', '_hide-slide');
      if (index === currentIndex) {
        item.classList.add('_active');
        createGlitchLayers(3, item);
        return;
      } else {
        removeGlitchLayers(item);
      }
      if (distance === 1) {
        item.classList.add('_right1');
      } else if (distance === 2) {
        item.classList.add('_right2');
      } else if (distance === totalItems - 1) {
        item.classList.add('_left1');
      } else if (distance === totalItems - 2) {
        item.classList.add('_left2');
      } else {
        item.classList.add('_hide-slide');
      }
    });
    updateDots();
  }
  function updateDots() {
    dots.forEach(function (item, i) {
      item.classList.remove('_active');
      if (i === currentIndex) {
        item.classList.add('_active');
      }
    });
  }
  function moveSlider(offset) {
    currentIndex = (currentIndex + offset + totalItems) % totalItems;
    updateSlider();
  }
  function handleStart(event) {
    isDragging = true;
    startX = event.clientX || event.touches[0].clientX;
  }
  function handleMove(event) {
    if (!isDragging) return;
    var currentX = event.clientX || event.touches[0].clientX;
    var diffX = currentX - startX;
    if (Math.abs(diffX) > 50) {
      moveSlider(diffX > 0 ? -1 : 1);
      isDragging = false;
    }
  }
  function handleEnd() {
    isDragging = false;
  }

  //slider

  // function openPopupByAttr(popupAttr) {
  //     const allPopups = document.querySelectorAll('.popup');
  //     allPopups.forEach(p => p.classList.remove('active'));
  //     document.body.style.overflow = 'hidden';
  //
  //     console.log(popupAttr);
  //
  //     const targetPopup = document.querySelector(`.popup[data-popup="${popupAttr}"]`);
  //     if (targetPopup) {
  //         targetPopup.classList.add('active');
  //         document.querySelector('.popups').classList.remove('opacity');
  //     }
  // }

  function closeAllPopups() {
    document.querySelectorAll('.popup').forEach(function (p) {
      return p.classList.remove('active');
    });
    document.querySelector('.popups').classList.add('opacity-overlay');
    document.body.style.overflow = 'auto';
  }
  function initOpenBox() {
    shakeUntil(box, getUserPrize(), logoBox).then(function (prize) {
      boxCap.classList.add("open");
      return new Promise(function (resolve) {
        setTimeout(function () {
          boxCap.classList.remove("open");
          resolve(prize);
        }, 2000);
      });
    }).then(function (prize) {
      showPreloader(prize);
    });
  }
  loadTranslations().then(init); // запуск ініту сторінки

  // init()

  // /// test

  document.addEventListener("DOMContentLoaded", function () {
    var _document$querySelect;
    (_document$querySelect = document.querySelector(".menu-btn")) === null || _document$querySelect === void 0 ? void 0 : _document$querySelect.addEventListener("click", function () {
      var _document$querySelect2;
      (_document$querySelect2 = document.querySelector(".menu-test")) === null || _document$querySelect2 === void 0 ? void 0 : _document$querySelect2.classList.toggle("hide");
    });
  });
  var lngBtn = document.querySelector(".lng-btn");
  lngBtn.addEventListener("click", function () {
    if (sessionStorage.getItem("locale")) {
      sessionStorage.removeItem("locale");
    } else {
      sessionStorage.setItem("locale", "en");
    }
    window.location.reload();
  });
  var authBtn = document.querySelector(".auth-btn");
  authBtn.addEventListener("click", function () {
    if (userId) {
      sessionStorage.removeItem("userId");
    } else {
      sessionStorage.setItem("userId", "100300268");
    }
    window.location.reload();
  });
  var popupsMenu = document.querySelector(".popups-btn");
  popupsMenu.addEventListener("click", function () {
    document.querySelector(".menu-popup").classList.toggle("hide");
  });
  document.querySelector(".open-box").addEventListener("click", function () {
    initOpenBox();
  });
})();

// після тесту видали цю функцію і розкоменти аналогічну в функції виклику
function openPopupByAttr(popupAttr) {
  var allPopups = document.querySelectorAll('.popup');
  allPopups.forEach(function (p) {
    return p.classList.remove('active');
  });
  console.log(popupAttr);
  var targetPopup = document.querySelector(".popup[data-popup=\"".concat(popupAttr, "\"]"));
  if (targetPopup) {
    document.body.style.overflow = 'hidden';
    targetPopup.classList.add('active');
    document.querySelector('.popups').classList.remove('opacity-overlay');
  }
}
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOlsiYXBpVVJMIiwiZ2V0QWN0aXZlV2VlayIsInByb21vU3RhcnREYXRlIiwid2Vla0R1cmF0aW9uIiwiY3VycmVudERhdGUiLCJEYXRlIiwid2Vla0RhdGVzIiwiRGF5IiwiV2VlayIsImZvcm1hdERhdGUiLCJkYXRlIiwiZ2V0RGF0ZSIsInRvU3RyaW5nIiwicGFkU3RhcnQiLCJnZXRNb250aCIsImNhbGN1bGF0ZVdlZWtQZXJpb2QiLCJ3ZWVrSW5kZXgiLCJiYXNlU3RhcnQiLCJnZXRUaW1lIiwic3RhcnQiLCJlbmQiLCJhY3RpdmVXZWVrSW5kZXgiLCJpIiwiaXNWZXJpZmllZFVzZXIiLCJwZXJpb2RBbW91bnQiLCJ0YWJsZURhdGEiLCJhY3RpdmVXZWVrIiwibWFpblBhZ2UiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJ1bmF1dGhNc2dzIiwicXVlcnlTZWxlY3RvckFsbCIsInBhcnRpY2lwYXRlQnRucyIsInJlZGlyZWN0QnRucyIsImxvYWRlciIsImNhcmRQb3B1cEljb25zIiwicHJlbG9hZGVyIiwicHJlbG9hZGVyQ2FyZHMiLCJwcmVsb2FkZXJQcml6ZSIsImJveCIsImxvZ29Cb3giLCJib3hDYXAiLCJ1a0xlbmciLCJlbkxlbmciLCJ0b2dnbGVDbGFzc2VzIiwiZWxlbWVudHMiLCJjbGFzc05hbWUiLCJmb3JFYWNoIiwiZWwiLCJjbGFzc0xpc3QiLCJ0b2dnbGUiLCJ0b2dnbGVUcmFuc2xhdGVzIiwiZGF0YUF0dHIiLCJzZXRBdHRyaWJ1dGUiLCJpbm5lckhUTUwiLCJpMThuRGF0YSIsInJlbW92ZUF0dHJpYnV0ZSIsImxvYWRlckJ0biIsImxvY2FsZSIsInNlc3Npb25TdG9yYWdlIiwiZ2V0SXRlbSIsImRlYnVnIiwiaGlkZUxvYWRlciIsInRyYW5zbGF0ZVN0YXRlIiwidXNlcklkIiwiTnVtYmVyIiwiY3JlYXRlR2xpdGNoTGF5ZXJzIiwibGF5ZXJzIiwiY29udGFpbmVyIiwid3JhcCIsImNyZWF0ZUVsZW1lbnQiLCJsYXllciIsImFwcGVuZENoaWxkIiwidGFyZ2V0IiwicmVtb3ZlR2xpdGNoTGF5ZXJzIiwiZ2xpdGNoIiwicmVtb3ZlIiwicmVxdWVzdCIsImxpbmsiLCJleHRyYU9wdGlvbnMiLCJmZXRjaCIsImhlYWRlcnMiLCJ0aGVuIiwicmVzIiwib2siLCJFcnJvciIsImpzb24iLCJlcnIiLCJjb25zb2xlIiwiZXJyb3IiLCJQcm9taXNlIiwicmVqZWN0IiwiYWRkIiwiYm9keSIsInN0eWxlIiwib3ZlcmZsb3ciLCJpbml0IiwidHJ5RGV0ZWN0VXNlcklkIiwicXVpY2tDaGVja0FuZFJlbmRlciIsInNldFRpbWVvdXQiLCJ1cGRhdGVTbGlkZXIiLCJjYXJkIiwiYWRkRXZlbnRMaXN0ZW5lciIsImJ1dHRvbnNMZWZ0IiwiYnRuIiwibW92ZVNsaWRlciIsInBvaW50ZXJFdmVudHMiLCJidXR0b25zUmlnaHQiLCJzbGlkZXIiLCJoYW5kbGVTdGFydCIsImhhbmRsZU1vdmUiLCJoYW5kbGVFbmQiLCJlIiwib3BlblBvcHVwRWwiLCJjb250ZW50V3JhcCIsImNsb3NlQnRuIiwiY29udGFpbnMiLCJjbG9zZUFsbFBvcHVwcyIsImljb24iLCJnZXRBdHRyaWJ1dGUiLCJvcGVuUG9wdXBCeUF0dHIiLCJ3aW5kb3ciLCJzdG9yZSIsInN0YXRlIiwiZ2V0U3RhdGUiLCJhdXRoIiwiaXNBdXRob3JpemVkIiwiaWQiLCJnX3VzZXJfaWQiLCJhdHRlbXB0cyIsIm1heEF0dGVtcHRzIiwiYXR0ZW1wdEludGVydmFsIiwid2FpdEZvclVzZXJJZCIsInJlc29sdmUiLCJpbnRlcnZhbCIsInNldEludGVydmFsIiwiY2xlYXJJbnRlcnZhbCIsImxvYWRUcmFuc2xhdGlvbnMiLCJ0cmFuc2xhdGUiLCJjbGVhclByZWxvYWRlclN0YXRlIiwiYWxsQ2FyZHNJbm5lciIsImFsbENhcmRCYWNrIiwicG9wdXBQcmVsb2FkZXIiLCJzaG93UHJlbG9hZGVyIiwicHJpemUiLCJzaG93UHJpemVCeURhdGFBdHRyIiwiZ2V0VXNlclByaXplIiwic2hha2VVbnRpbCIsIndhaXRQcm9taXNlIiwibG9nbyIsIm9wdHMiLCJhbXBsaXR1ZGUiLCJkdXJhdGlvbiIsImF4aXMiLCJzdG9wIiwiYW5pbWF0ZSIsImtleWZyYW1lcyIsInRyYW5zZm9ybSIsImFuaW0iLCJpdGVyYXRpb25zIiwiSW5maW5pdHkiLCJlYXNpbmciLCJjYW5jZWwiLCJyYWZJZCIsInJ1bm5pbmciLCJsb29wIiwidCIsInBoYXNlIiwiTWF0aCIsIlBJIiwiZGVsdGEiLCJzaW4iLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJjYW5jZWxBbmltYXRpb25GcmFtZSIsImNoZWNrVXNlckF1dGgiLCJsb2ciLCJ1bmF1dGhNZXMiLCJ1c2VyaWQiLCJpdGVtIiwicmVkaXJlY3RCdG4iLCJwYXJ0aWNpcGF0ZUJ0biIsInJlcG9ydEVycm9yIiwicmVwb3J0RGF0YSIsIm9yaWdpbiIsImxvY2F0aW9uIiwiaHJlZiIsImVycm9yVGV4dCIsInRleHQiLCJtZXNzYWdlIiwidHlwZSIsIm5hbWUiLCJzdGFjayIsIm1ldGhvZCIsIkpTT04iLCJzdHJpbmdpZnkiLCJ3YXJuIiwiZWxlbXMiLCJsZW5ndGgiLCJlbGVtIiwia2V5IiwicmVmcmVzaExvY2FsaXplZENsYXNzIiwiZWxlbWVudCIsImJhc2VDc3NDbGFzcyIsImxhbmciLCJyZW5kZXJVc2VycyIsIndlZWtOdW0iLCJ1c2VyRGF0YSIsImZpbmQiLCJ3ZWVrIiwidXNlcnMiLCJjdXJyZW50VXNlciIsInVzZXIiLCJwb2ludHMiLCJwb3B1bGF0ZVVzZXJzVGFibGUiLCJjdXJyZW50VXNlcklkIiwicmVzdWx0c1RhYmxlIiwicmVzdWx0c1RhYmxlT3RoZXIiLCJpc1RvcEN1cnJlbnRVc2VyIiwic2xpY2UiLCJzb21lIiwidG9wVXNlcnNMZW5ndGgiLCJ0b3BVc2VycyIsImRpc3BsYXlVc2VyIiwiaXNDdXJyZW50VXNlciIsInRhYmxlIiwicmVuZGVyUm93Iiwib3B0aW9ucyIsImhpZ2hsaWdodCIsIm5laWdoYm9yIiwidXNlclJvdyIsInVzZXJQbGFjZSIsImluZGV4T2YiLCJwcml6ZUtleSIsImdldFByaXplVHJhbnNsYXRpb25LZXkiLCJ0cmFuc2xhdGVLZXkiLCJtYXNrVXNlcklkIiwidG9GaXhlZCIsImFwcGVuZCIsImluZGV4IiwiZGVmYXVsdFZhbHVlIiwibmVlZEtleSIsInBsYWNlIiwiYWxsUHJpemVzIiwiY3VycmVudFByaXplIiwicGFydGljaXBhdGUiLCJwYXJhbXMiLCJsb2FkVXNlcnMiLCJkaXNwbGF5Iiwic3RhcnRzV2l0aCIsInBhcmFtZXRyIiwicmVxdWVzdHMiLCJyZXEiLCJkYXRhIiwicHVzaCIsImFsbCIsIml0ZW1zIiwidG90YWxJdGVtcyIsImRvdHMiLCJjdXJyZW50SW5kZXgiLCJzdGFydFgiLCJpc0RyYWdnaW5nIiwiZGlzdGFuY2UiLCJ1cGRhdGVEb3RzIiwib2Zmc2V0IiwiZXZlbnQiLCJjbGllbnRYIiwidG91Y2hlcyIsImN1cnJlbnRYIiwiZGlmZlgiLCJhYnMiLCJwIiwiaW5pdE9wZW5Cb3giLCJsbmdCdG4iLCJyZW1vdmVJdGVtIiwic2V0SXRlbSIsInJlbG9hZCIsImF1dGhCdG4iLCJwb3B1cHNNZW51IiwicG9wdXBBdHRyIiwiYWxsUG9wdXBzIiwidGFyZ2V0UG9wdXAiXSwibWFwcGluZ3MiOiI7OzsrQ0FDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEQSxDQUFDLFlBQVk7RUFBQTtFQUVULElBQU1BLE1BQU0sR0FBRyx3Q0FBd0M7RUFFdkQsSUFBTUMsYUFBYSxHQUFHLFNBQWhCQSxhQUFhLENBQUlDLGNBQWMsRUFBRUMsWUFBWSxFQUFLO0lBQ3BELElBQU1DLFdBQVcsR0FBRyxJQUFJQyxJQUFJLEVBQUU7SUFDOUIsSUFBSUMsU0FBUyxHQUFHLEVBQUU7SUFFbEIsSUFBTUMsR0FBRyxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLElBQUk7SUFDL0IsSUFBTUMsSUFBSSxHQUFHTCxZQUFZLEdB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Q2hFLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLFNBQVMsQ0FBQyxDQUFDb0IsU0FBUyxDQUFDMkIsTUFBTSxDQUFDLGlCQUFpQixDQUFDO0VBQ3pFO0FBQ0oiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiAoKSB7XG5cbiAgICBjb25zdCBhcGlVUkwgPSAnaHR0cHM6Ly9mYXYtcHJvbS5jb20vYXBpX2dhbWVfdW5pdmVyc2UnXG5cbiAgICBjb25zdCBnZXRBY3RpdmVXZWVrID0gKHByb21vU3RhcnREYXRlLCB3ZWVrRHVyYXRpb24pID0+IHtcbiAgICAgICAgY29uc3QgY3VycmVudERhdGUgPSBuZXcgRGF0ZSgpO1xuICAgICAgICBsZXQgd2Vla0RhdGVzID0gW107XG5cbiAgICAgICAgY29uc3QgRGF5ID0gMjQgKiA2MCAqIDYwICogMTAwMDtcbiAgICAgICAgY29uc3QgV2VlayA9IHdlZWtEdXJhdGlvbiAqIERheTtcblxuICAgICAgICBjb25zdCBmb3JtYXREYXRlID0gKGRhdGUpID0+XG4gICAgICAgICAgICBgJHtkYXRlLmdldERhdGUoKS50b1N0cmluZygpLnBhZFN0YXJ0KDIsIFwiMFwiKX0uJHsoZGF0ZS5nZXRNb250aCgpICsgMSkudG9TdHJpbmcoKS5wYWRTdGFydCgyLCBcIjBcIil9YDtcblxuICAgICAgICBjb25zdCBjYWxjdWxhdGVXZWVrUGVyaW9kID0gKHdlZWtJbmRleCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgYmFzZVN0YXJ0ID0gcHJvbW9TdGFydERhdGUuZ2V0VGltZSgpO1xuICAgICAgICAgICAgY29uc3Qgc3RhcnQgPSBuZXcgRGF0ZShiYXNlU3RhcnQgKyB3ZWVrSW5kZXggKiBXZWVrKTtcbiAgICAgICAgICAgIGxldCBlbmQgPSBuZXcgRGF0ZShzdGFydC5nZXRUaW1lKCkgKyAod2Vla0R1cmF0aW9uICogRGF5IC0gMSkpO1xuICAgICAgICAgICAgcmV0dXJuIHsgc3RhcnQsIGVuZCB9O1xuICAgICAgICB9O1xuXG4gICAgICAgIGxldCBhY3RpdmVXZWVrSW5kZXggPSBudWxsO1xuXG4gICAgICAgIC8vINCf0LXRgNC10LLRltGA0LrQsCDQv9C+0YLQvtGH0L3QvtCz0L4g0YLQuNC20L3Rj1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDEwOyBpKyspIHsgLy8g0J7QsdC80LXQttGD0ZTQvNC+IDEwINGC0LjQttC90Y/QvNC4ICjRj9C60YnQviDQv9C+0YLRgNGW0LHQvdC+INCx0ZbQu9GM0YjQtSwg0L/RgNC+0YHRgtC+INC30LzRltC90ZbRgtGMINC70ZbRh9C40LvRjNC90LjQuilcbiAgICAgICAgICAgIGNvbnN0IHsgc3RhcnQsIGVuZCB9ID0gY2FsY3VsYXRlV2Vla1BlcmlvZChpKTtcbiAgICAgICAgICAgIGlmIChjdXJyZW50RGF0ZSA+PSBzdGFydCAmJiBjdXJyZW50RGF0ZSA8PSBlbmQpIHtcbiAgICAgICAgICAgICAgICBhY3RpdmVXZWVrSW5kZXggPSBpICsgMTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBhY3RpdmVXZWVrSW5kZXg7XG4gICAgfTtcblxuICAgIGNvbnN0IHByb21vU3RhcnREYXRlID0gbmV3IERhdGUoXCIyMDI1LTA1LTA1VDAwOjAwOjAwXCIpO1xuICAgIGNvbnN0IHdlZWtEdXJhdGlvbiA9IDEwO1xuXG4gICAgbGV0IGlzVmVyaWZpZWRVc2VyID0gZmFsc2U7XG5cbiAgICBsZXQgcGVyaW9kQW1vdW50ID0gMiAvLyDQutGW0LvRjNC60ZbRgdGC0Ywg0L/QtdGA0ZbQvtC00ZbQsiDQsiDQsNC60YbRltGXLCDRgtGA0LXQsdCwINC00LvRjyDQutC10YjRg9Cy0LDQvdC90Y8g0ZbQvdGE0Lgg0Lcg0YLQsNCx0LvQuFxuXG4gICAgbGV0IHRhYmxlRGF0YSA9IFtdXG4gICAgbGV0IGFjdGl2ZVdlZWsgPSBnZXRBY3RpdmVXZWVrKHByb21vU3RhcnREYXRlLCB3ZWVrRHVyYXRpb24pIHx8IDE7XG4gICAgLy8gbGV0IGFjdGl2ZVdlZWsgPSAyXG5cbiAgICBpZiAoYWN0aXZlV2VlayA+IDIpIGFjdGl2ZVdlZWsgPSAyXG5cblxuICAgIGNvbnN0IG1haW5QYWdlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5mYXYtcGFnZVwiKSxcbiAgICAgICAgdW5hdXRoTXNncyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy51bmF1dGgtbXNnJyksXG4gICAgICAgIHBhcnRpY2lwYXRlQnRucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5wYXJ0LWJ0bicpLFxuICAgICAgICByZWRpcmVjdEJ0bnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuYnRuLWpvaW4nKSxcbiAgICAgICAgbG9hZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zcGlubmVyLW92ZXJsYXlcIiksXG4gICAgICAgIGNhcmRQb3B1cEljb25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNhcmRfX3BvcHVwJyksXG4gICAgICAgIHByZWxvYWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wb3B1cC0tcHJlbG9hZGVyJyksXG4gICAgICAgIHByZWxvYWRlckNhcmRzID0gcHJlbG9hZGVyLnF1ZXJ5U2VsZWN0b3JBbGwoJy5jYXJkX19pbm5lcicpLFxuICAgICAgICBwcmVsb2FkZXJQcml6ZSA9IHByZWxvYWRlci5xdWVyeVNlbGVjdG9yKCcuY2FyZF9faW5uZXItLXByaXplJyksXG4gICAgICAgIGJveCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ib3hfX29wZW4nKSxcbiAgICAgICAgbG9nb0JveCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ib3hfX2xvZ28nKSxcbiAgICAgICAgYm94Q2FwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJveF9fb3Blbi1jYXAnKVxuXG4gICAgY29uc3QgdWtMZW5nID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3VrTGVuZycpO1xuICAgIGNvbnN0IGVuTGVuZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNlbkxlbmcnKTtcblxuICAgIGNvbnN0IHRvZ2dsZUNsYXNzZXMgPSAoZWxlbWVudHMsIGNsYXNzTmFtZSkgPT4gZWxlbWVudHMuZm9yRWFjaChlbCA9PiBlbC5jbGFzc0xpc3QudG9nZ2xlKGAke2NsYXNzTmFtZX1gKSk7XG4gICAgY29uc3QgdG9nZ2xlVHJhbnNsYXRlcyA9IChlbGVtZW50cywgZGF0YUF0dHIpID0+IGVsZW1lbnRzLmZvckVhY2goZWwgPT4ge1xuICAgICAgICBlbC5zZXRBdHRyaWJ1dGUoJ2RhdGEtdHJhbnNsYXRlJywgYCR7ZGF0YUF0dHJ9YClcbiAgICAgICAgZWwuaW5uZXJIVE1MID0gaTE4bkRhdGFbZGF0YUF0dHJdIHx8ICcqLS0tLU5FRUQgVE8gQkUgVFJBTlNMQVRFRC0tLS0qICAga2V5OiAgJyArIGRhdGFBdHRyO1xuICAgICAgICBlbC5yZW1vdmVBdHRyaWJ1dGUoJ2RhdGEtdHJhbnNsYXRlJyk7XG4gICAgfSk7XG5cbiAgICBsZXQgbG9hZGVyQnRuID0gZmFsc2VcblxuICAgIC8vIGxldCBsb2NhbGUgPSBcImVuXCJcbiAgICBsZXQgbG9jYWxlID0gc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbShcImxvY2FsZVwiKSB8fCBcInVrXCJcblxuICAgIGlmICh1a0xlbmcpIGxvY2FsZSA9ICd1ayc7XG4gICAgaWYgKGVuTGVuZykgbG9jYWxlID0gJ2VuJztcblxuICAgIGxldCBkZWJ1ZyA9IGZhbHNlXG5cbiAgICBpZiAoZGVidWcpIGhpZGVMb2FkZXIoKVxuXG4gICAgbGV0IGkxOG5EYXRhID0ge307XG4gICAgY29uc3QgdHJhbnNsYXRlU3RhdGUgPSB0cnVlO1xuICAgIC8vIGxldCB1c2VySWQgPSBudWxsO1xuICAgIGxldCB1c2VySWQgPSBOdW1iZXIoc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbShcInVzZXJJZFwiKSkgPz8gbnVsbFxuXG4gICAgZnVuY3Rpb24gY3JlYXRlR2xpdGNoTGF5ZXJzKGxheWVycyA9IDMsIGNvbnRhaW5lciA9IG51bGwpIHtcbiAgICAgICAgY29uc3Qgd3JhcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICB3cmFwLmNsYXNzTmFtZSA9ICdnbGl0Y2hfX2xheWVycyc7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGF5ZXJzOyBpKyspIHtcbiAgICAgICAgICAgIGNvbnN0IGxheWVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICBsYXllci5jbGFzc05hbWUgPSAnZ2xpdGNoX19sYXllcic7XG4gICAgICAgICAgICB3cmFwLmFwcGVuZENoaWxkKGxheWVyKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoY29udGFpbmVyKSB7XG4gICAgICAgICAgICBjb25zdCB0YXJnZXQgPSB0eXBlb2YgY29udGFpbmVyID09PSAnc3RyaW5nJyA/IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoY29udGFpbmVyKSA6IGNvbnRhaW5lcjtcbiAgICAgICAgICAgIGlmICh0YXJnZXQpIHRhcmdldC5hcHBlbmRDaGlsZCh3cmFwKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gd3JhcDtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiByZW1vdmVHbGl0Y2hMYXllcnMoY29udGFpbmVyKSB7XG4gICAgICAgIGNvbnN0IHRhcmdldCA9IHR5cGVvZiBjb250YWluZXIgPT09ICdzdHJpbmcnID8gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcihjb250YWluZXIpIDogY29udGFpbmVyO1xuICAgICAgICBpZiAoIXRhcmdldCkgcmV0dXJuO1xuICAgICAgICBjb25zdCBnbGl0Y2ggPSB0YXJnZXQucXVlcnlTZWxlY3RvcignLmdsaXRjaF9fbGF5ZXJzJyk7XG4gICAgICAgIGlmIChnbGl0Y2gpIGdsaXRjaC5yZW1vdmUoKTtcbiAgICB9XG5cbiAgICBjb25zdCByZXF1ZXN0ID0gZnVuY3Rpb24gKGxpbmssIGV4dHJhT3B0aW9ucykge1xuICAgICAgICByZXR1cm4gZmV0Y2goYXBpVVJMICsgbGluaywge1xuICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgICdBY2NlcHQnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIC4uLihleHRyYU9wdGlvbnMgfHwge30pXG4gICAgICAgIH0pXG4gICAgICAgICAgICAudGhlbihyZXMgPT4ge1xuICAgICAgICAgICAgICAgIGlmICghcmVzLm9rKSB0aHJvdyBuZXcgRXJyb3IoJ0FQSSBlcnJvcicpO1xuICAgICAgICAgICAgICAgIHJldHVybiByZXMuanNvbigpO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5jYXRjaChlcnIgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0FQSSByZXF1ZXN0IGZhaWxlZDonLCBlcnIpO1xuXG4gICAgICAgICAgICAgICAgLy8gcmVwb3J0RXJyb3IoZXJyKTtcbiAgICAgICAgICAgICAgICAvL1xuICAgICAgICAgICAgICAgIC8vIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mYXYtcGFnZScpLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgICAgICAgICAgLy8gaWYgKHdpbmRvdy5sb2NhdGlvbi5ocmVmLnN0YXJ0c1dpdGgoXCJodHRwczovL3d3dy5mYXZiZXQuaHIvXCIpKSB7XG4gICAgICAgICAgICAgICAgLy8gICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gJy9wcm9tb2NpamUvcHJvbW9jaWphL3N0dWIvJztcbiAgICAgICAgICAgICAgICAvLyB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIC8vICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9ICcvcHJvbW9zL3Byb21vL3N0dWIvJztcbiAgICAgICAgICAgICAgICAvLyB9XG5cbiAgICAgICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QoZXJyKTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaGlkZUxvYWRlcigpe1xuICAgICAgICBsb2FkZXIuY2xhc3NMaXN0LmFkZChcImhpZGVcIilcbiAgICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5vdmVyZmxvdyA9IFwiYXV0b1wiXG4gICAgICAgIG1haW5QYWdlLmNsYXNzTGlzdC5yZW1vdmUoXCJsb2FkaW5nXCIpXG4gICAgfVxuXG4gICAgYXN5bmMgZnVuY3Rpb24gaW5pdCgpIHtcbiAgICAgICAgbGV0IGF0dGVtcHRzID0gMDtcbiAgICAgICAgY29uc3QgbWF4QXR0ZW1wdHMgPSAyMDtcbiAgICAgICAgY29uc3QgYXR0ZW1wdEludGVydmFsID0gNTA7XG5cbiAgICAgICAgZnVuY3Rpb24gdHJ5RGV0ZWN0VXNlcklkKCkge1xuICAgICAgICAgICAgaWYgKHdpbmRvdy5zdG9yZSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHN0YXRlID0gd2luZG93LnN0b3JlLmdldFN0YXRlKCk7XG4gICAgICAgICAgICAgICAgdXNlcklkID0gc3RhdGUuYXV0aC5pc0F1dGhvcml6ZWQgJiYgc3RhdGUuYXV0aC5pZCB8fCAnJztcbiAgICAgICAgICAgIH0gZWxzZSBpZiAod2luZG93LmdfdXNlcl9pZCkge1xuICAgICAgICAgICAgICAgIHVzZXJJZCA9IHdpbmRvdy5nX3VzZXJfaWQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuXG5cblxuXG4gICAgICAgIGZ1bmN0aW9uIHF1aWNrQ2hlY2tBbmRSZW5kZXIoKSB7XG4gICAgICAgICAgICBzZXRUaW1lb3V0KGhpZGVMb2FkZXIsIDYwMCk7XG4gICAgICAgICAgICAvLyBjaGVja1VzZXJBdXRoKClcbiAgICAgICAgICAgIC8vICAgICAudGhlbihsb2FkVXNlcnMpXG4gICAgICAgICAgICAvLyAgICAgLnRoZW4oKCkgPT57XG4gICAgICAgICAgICAvLyAgICAgICAgIHNldFRpbWVvdXQoaGlkZUxvYWRlciwgMzAwKTtcbiAgICAgICAgICAgIC8vICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi50YWJsZV9fdGFicy1pdGVtXCIpLmZvckVhY2goKHRhYiwgaSkgPT57XG4gICAgICAgICAgICAvLyAgICAgICAgICAgICB0YWIuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XG4gICAgICAgICAgICAvLyAgICAgICAgICAgICBpZihpID09PSBhY3RpdmVXZWVrIC0gMSkgdGFiLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xuICAgICAgICAgICAgLy8gICAgICAgICB9KVxuICAgICAgICAgICAgLy8gICAgICAgICAvLyByZW5kZXJVc2VycyhhY3RpdmVXZWVrLCB0YWJsZURhdGEpO1xuICAgICAgICAgICAgLy8gICAgICAgICBwYXJ0aWNpcGF0ZUJ0bnMuZm9yRWFjaChidG4gPT4gYnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgcGFydGljaXBhdGUpKTtcbiAgICAgICAgICAgIC8vICAgICB9KVxuXG5cbiAgICAgICAgICAgIC8vIHNoYWtlVW50aWwoYm94LCBnZXRVc2VyUHJpemUsIGxvZ29Cb3gpLnRoZW4ocmVzID0+e1xuICAgICAgICAgICAgLy8gICAgIHNob3dQcmVsb2FkZXIocmVzKTtcbiAgICAgICAgICAgIC8vIH0pXG5cbiAgICAgICAgICAgIHVwZGF0ZVNsaWRlcigpXG5cbiAgICAgICAgICAgIC8vIHNob3dQcml6ZUZvclByZWxvYWRlcihcInByaXplMVwiKVxuXG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY2FyZF9faW5uZXInKS5mb3JFYWNoKGNhcmQgPT4ge1xuICAgICAgICAgICAgICAgIGNhcmQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNhcmQuY2xhc3NMaXN0LnRvZ2dsZSgnaXMtZmxpcHBlZCcpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG5cblxuXG4gICAgICAgICAgICBidXR0b25zTGVmdC5mb3JFYWNoKGJ0biAgPT4ge1xuICAgICAgICAgICAgICAgIGJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgbW92ZVNsaWRlcigtMSk7XG4gICAgICAgICAgICAgICAgICAgIGJ0bi5zdHlsZS5wb2ludGVyRXZlbnRzID0gJ25vbmUnO1xuICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHsgYnRuLnN0eWxlLnBvaW50ZXJFdmVudHMgPSAnaW5pdGlhbCc7IH0sIDEwMDApO1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgYnV0dG9uc1JpZ2h0LmZvckVhY2goYnRuICA9PiB7XG4gICAgICAgICAgICAgICAgYnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBtb3ZlU2xpZGVyKDEpO1xuICAgICAgICAgICAgICAgICAgICBidG4uc3R5bGUucG9pbnRlckV2ZW50cyA9ICdub25lJztcbiAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7IGJ0bi5zdHlsZS5wb2ludGVyRXZlbnRzID0gJ2luaXRpYWwnOyB9LCAxMDAwKTtcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfSlcblxuICAgICAgICAgICAgc2xpZGVyLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIGhhbmRsZVN0YXJ0KTtcbiAgICAgICAgICAgIHNsaWRlci5hZGRFdmVudExpc3RlbmVyKCd0b3VjaHN0YXJ0JywgaGFuZGxlU3RhcnQpO1xuXG4gICAgICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCBoYW5kbGVNb3ZlKTtcbiAgICAgICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNobW92ZScsIGhhbmRsZU1vdmUpO1xuXG4gICAgICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgaGFuZGxlRW5kKTtcbiAgICAgICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoZW5kJywgaGFuZGxlRW5kKTtcblxuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBvcHVwcycpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBvcGVuUG9wdXBFbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wb3B1cC5hY3RpdmUnKTtcbiAgICAgICAgICAgICAgICBpZihvcGVuUG9wdXBFbCl7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGNvbnRlbnRXcmFwID0gb3BlblBvcHVwRWwucXVlcnlTZWxlY3RvcignLnBvcHVwX193cmFwJyk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGNsb3NlQnRuID0gb3BlblBvcHVwRWwucXVlcnlTZWxlY3RvcignLmNhcmRfX2Nsb3NlJykgPz8gb3BlblBvcHVwRWwucXVlcnlTZWxlY3RvcignLnBvcHVwX19jbG9zZScpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoY29udGVudFdyYXAgJiYgIWNvbnRlbnRXcmFwLmNvbnRhaW5zKGUudGFyZ2V0KSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2xvc2VBbGxQb3B1cHMoKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBpZihlLnRhcmdldCA9PT0gY2xvc2VCdG4pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsb3NlQWxsUG9wdXBzKCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBjYXJkUG9wdXBJY29ucy5mb3JFYWNoKGljb24gPT4ge1xuICAgICAgICAgICAgICAgIGljb24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoKXtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZGF0YUF0dHIgPSB0aGlzLmdldEF0dHJpYnV0ZShcImRhdGEtcG9wdXBcIilcbiAgICAgICAgICAgICAgICAgICAgb3BlblBvcHVwQnlBdHRyKGRhdGFBdHRyKTtcbiAgICAgICAgICAgICAgICB9KVxuXG4gICAgICAgICAgICB9KVxuXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgY29uc3Qgd2FpdEZvclVzZXJJZCA9IG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBpbnRlcnZhbCA9IHNldEludGVydmFsKCgpID0+IHtcbiAgICAgICAgICAgICAgICB0cnlEZXRlY3RVc2VySWQoKTtcbiAgICAgICAgICAgICAgICBpZiAodXNlcklkIHx8IGF0dGVtcHRzID49IG1heEF0dGVtcHRzKSB7XG4gICAgICAgICAgICAgICAgICAgIHF1aWNrQ2hlY2tBbmRSZW5kZXIoKTtcbiAgICAgICAgICAgICAgICAgICAgY2xlYXJJbnRlcnZhbChpbnRlcnZhbCk7XG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYXR0ZW1wdHMrKztcbiAgICAgICAgICAgIH0sIGF0dGVtcHRJbnRlcnZhbCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGF3YWl0IHdhaXRGb3JVc2VySWQ7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gbG9hZFRyYW5zbGF0aW9ucygpIHtcbiAgICAgICAgcmV0dXJuIHJlcXVlc3QoYC9uZXctdHJhbnNsYXRlcy8ke2xvY2FsZX0/bm9jYWNoZT0xYClcbiAgICAgICAgICAgIC50aGVuKGpzb24gPT4ge1xuICAgICAgICAgICAgICAgIGkxOG5EYXRhID0ganNvbjtcbiAgICAgICAgICAgICAgICB0cmFuc2xhdGUoKTtcbiAgICAgICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8vIGZ1bmN0aW9uIHNob3dQcml6ZUJ5RGF0YUF0dHIoZGF0YUF0dHIpIHtcbiAgICAvLyAgICAgY29uc3QgY2FyZHMgPSBwcmVsb2FkZXJQcml6ZS5xdWVyeVNlbGVjdG9yQWxsKCcuY2FyZF9faW5uZXInKTtcbiAgICAvL1xuICAgIC8vICAgICBjYXJkcy5mb3JFYWNoKGNhcmQgPT4ge1xuICAgIC8vICAgICAgICAgY29uc3QgYmFjayA9IGNhcmQucXVlcnlTZWxlY3RvckFsbCgnLmNhcmRfX2JhY2snKVxuICAgIC8vICAgICAgICAgYmFjay5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgIC8vICAgICAgICAgICAgIGl0ZW0uY2xhc3NMaXN0LmFkZCgnaGlkZScpO1xuICAgIC8vICAgICAgICAgICAgIGlmKGl0ZW0uZ2V0QXR0cmlidXRlKFwiZGF0YS1wcml6ZVwiKSA9PT0gZGF0YUF0dHIpIHtcbiAgICAvLyAgICAgICAgICAgICAgICAgaXRlbS5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZVwiKVxuICAgIC8vICAgICAgICAgICAgIH1cbiAgICAvLyAgICAgICAgIH0pXG4gICAgLy9cbiAgICAvL1xuICAgIC8vICAgICB9KVxuICAgIC8vXG4gICAgLy8gfVxuXG5cbiAgICBmdW5jdGlvbiBjbGVhclByZWxvYWRlclN0YXRlKCl7XG4gICAgICAgIGNvbnN0IGFsbENhcmRzSW5uZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY2FyZF9faW5uZXInKSxcbiAgICAgICAgICAgIGFsbENhcmRCYWNrID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNhcmRfX2JhY2snKSxcbiAgICAgICAgICAgIHBvcHVwUHJlbG9hZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBvcHVwLS1wcmVsb2FkZXInKTtcblxuICAgICAgICBhbGxDYXJkc0lubmVyLmZvckVhY2goY2FyZCA9PiB7XG4gICAgICAgICAgICBjYXJkLmNsYXNzTGlzdC5yZW1vdmUoJ2lzLWZsaXBwZWQnKTtcbiAgICAgICAgICAgIGNhcmQuY2xhc3NMaXN0LmFkZCgnaXMtaGlkZScpO1xuICAgICAgICB9KVxuICAgICAgICBwb3B1cFByZWxvYWRlci5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcblxuICAgICAgICBhbGxDYXJkQmFjay5mb3JFYWNoKChjYXJkKSA9PiB7XG4gICAgICAgICAgICBjYXJkLmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTtcbiAgICAgICAgfSlcblxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHNob3dQcmVsb2FkZXIocHJpemUpIHtcbiAgICAgICAgICAgIG9wZW5Qb3B1cEJ5QXR0cigncHJlbG9hZGVyJylcbiAgICAgICAgICAgIHNob3dQcml6ZUJ5RGF0YUF0dHIocHJpemUpXG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICBwcmVsb2FkZXJDYXJkcy5mb3JFYWNoKChjYXJkLCBpKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT57XG4gICAgICAgICAgICAgICAgICAgICAgICBjYXJkLmNsYXNzTGlzdC5yZW1vdmUoJ2lzLWhpZGUnKTtcbiAgICAgICAgICAgICAgICAgICAgfSwgaSAqIDI1MClcbiAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PntcbiAgICAgICAgICAgICAgICAgICAgICAgIHByZWxvYWRlclByaXplLmNsYXNzTGlzdC5hZGQoJ2lzLWZsaXBwZWQnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT57XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xlYXJQcmVsb2FkZXJTdGF0ZSgpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PntcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3BlblBvcHVwQnlBdHRyKHByaXplKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sIDgwMClcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sIDIwMDApXG4gICAgICAgICAgICAgICAgICAgIH0sIDEyNTApXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH0sIDIwMCk7XG4gICAgfVxuICAgIC8vIHNob3dQcmVsb2FkZXIoKTtcblxuICAgIGZ1bmN0aW9uIGdldFVzZXJQcml6ZSgpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKHJlc29sdmUgPT4ge1xuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiByZXNvbHZlKCdwcml6ZTEnKSwgMTAwMCk7IC8vINGC0YPRgiDQvtGC0YDQuNC80YPRlNC8INC/0YDQuNC3INGP0LrQuNC5INCy0LjQv9Cw0LIg0Y7Qt9C10YDRg1xuICAgICAgICB9KTtcbiAgICB9XG5cblxuICAgIGZ1bmN0aW9uIHNoYWtlVW50aWwoZWwsIHdhaXRQcm9taXNlLCBsb2dvLCBvcHRzID0ge30pIHtcbiAgICAgICAgY29uc3QgeyBhbXBsaXR1ZGUgPSA0LCBkdXJhdGlvbiA9IDUwMCwgYXhpcyA9ICd4JyB9ID0gb3B0cztcbiAgICAgICAgbGV0IHN0b3A7XG5cbiAgICAgICAgaWYgKGxvZ28pe1xuICAgICAgICAgICAgbG9nby5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChlbC5hbmltYXRlKSB7XG4gICAgICAgICAgICBjb25zdCBrZXlmcmFtZXMgPSBheGlzID09PSAneCdcbiAgICAgICAgICAgICAgICA/IFt7IHRyYW5zZm9ybTogJ3RyYW5zbGF0ZVgoMCknIH0sIHsgdHJhbnNmb3JtOiBgdHJhbnNsYXRlWCgtJHthbXBsaXR1ZGV9cHgpYCB9LCB7IHRyYW5zZm9ybTogYHRyYW5zbGF0ZVgoJHthbXBsaXR1ZGV9cHgpYCB9LCB7IHRyYW5zZm9ybTogJ3RyYW5zbGF0ZVgoMCknIH1dXG4gICAgICAgICAgICAgICAgOiBbeyB0cmFuc2Zvcm06ICd0cmFuc2xhdGVZKDApJyB9LCB7IHRyYW5zZm9ybTogYHRyYW5zbGF0ZVkoLSR7YW1wbGl0dWRlfXB4KWAgfSwgeyB0cmFuc2Zvcm06IGB0cmFuc2xhdGVZKCR7YW1wbGl0dWRlfXB4KWAgfSwgeyB0cmFuc2Zvcm06ICd0cmFuc2xhdGVZKDApJyB9XTtcbiAgICAgICAgICAgIGNvbnN0IGFuaW0gPSBlbC5hbmltYXRlKGtleWZyYW1lcywgeyBkdXJhdGlvbiwgaXRlcmF0aW9uczogSW5maW5pdHksIGVhc2luZzogJ2xpbmVhcicgfSk7XG4gICAgICAgICAgICBzdG9wID0gKCkgPT4ge1xuICAgICAgICAgICAgICAgIGFuaW0uY2FuY2VsKCk7XG4gICAgICAgICAgICAgICAgZWwuc3R5bGUudHJhbnNmb3JtID0gJyc7XG4gICAgICAgICAgICAgICAgaWYgKGxvZ28pe1xuICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+e1xuICAgICAgICAgICAgICAgICAgICAgICAgbG9nby5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcbiAgICAgICAgICAgICAgICAgICAgfSwgNDAwMClcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbGV0IHN0YXJ0ID0gbnVsbCwgcmFmSWQgPSAwLCBydW5uaW5nID0gdHJ1ZTtcbiAgICAgICAgICAgIGNvbnN0IGxvb3AgPSB0ID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoc3RhcnQgPT09IG51bGwpIHN0YXJ0ID0gdDtcbiAgICAgICAgICAgICAgICBjb25zdCBwaGFzZSA9ICgodCAtIHN0YXJ0KSAlIGR1cmF0aW9uKSAvIGR1cmF0aW9uICogTWF0aC5QSSAqIDI7XG4gICAgICAgICAgICAgICAgY29uc3QgZGVsdGEgPSBNYXRoLnNpbihwaGFzZSkgKiBhbXBsaXR1ZGU7XG4gICAgICAgICAgICAgICAgZWwuc3R5bGUudHJhbnNmb3JtID0gYXhpcyA9PT0gJ3gnID8gYHRyYW5zbGF0ZVgoJHtkZWx0YX1weClgIDogYHRyYW5zbGF0ZVkoJHtkZWx0YX1weClgO1xuICAgICAgICAgICAgICAgIGlmIChydW5uaW5nKSByYWZJZCA9IHJlcXVlc3RBbmltYXRpb25GcmFtZShsb29wKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICByYWZJZCA9IHJlcXVlc3RBbmltYXRpb25GcmFtZShsb29wKTtcbiAgICAgICAgICAgIHN0b3AgPSAoKSA9PiB7XG4gICAgICAgICAgICAgICAgcnVubmluZyA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIGNhbmNlbEFuaW1hdGlvbkZyYW1lKHJhZklkKTsgZWwuc3R5bGUudHJhbnNmb3JtID0gJyc7XG4gICAgICAgICAgICAgICAgaWYgKGxvZ28pe1xuICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+e1xuICAgICAgICAgICAgICAgICAgICAgICAgbG9nby5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcbiAgICAgICAgICAgICAgICAgICAgfSwgNDAwMClcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh3YWl0UHJvbWlzZSkuZmluYWxseSgoKSA9PntcbiAgICAgICAgICAgIHN0b3AoKVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjaGVja1VzZXJBdXRoKCkge1xuICAgICAgICBjb25zb2xlLmxvZyh1c2VySWQpXG4gICAgICAgIGlmICh1c2VySWQpIHtcbiAgICAgICAgICAgIGZvciAoY29uc3QgdW5hdXRoTWVzIG9mIHVuYXV0aE1zZ3MpIHtcbiAgICAgICAgICAgICAgICB1bmF1dGhNZXMuY2xhc3NMaXN0LmFkZCgnaGlkZScpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHJlcXVlc3QoYC9mYXZ1c2VyLyR7dXNlcklkfT9ub2NhY2hlPTFgKVxuICAgICAgICAgICAgICAgIC50aGVuKHJlcyA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChyZXMudXNlcmlkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwYXJ0aWNpcGF0ZUJ0bnMuZm9yRWFjaChpdGVtID0+IGl0ZW0uY2xhc3NMaXN0LmFkZCgnaGlkZScpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlZGlyZWN0QnRucy5mb3JFYWNoKGl0ZW0gPT4gaXRlbS5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlJykpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaXNWZXJpZmllZFVzZXIgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coaXNWZXJpZmllZFVzZXIpXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwYXJ0aWNpcGF0ZUJ0bnMuZm9yRWFjaChpdGVtID0+IGl0ZW0uY2xhc3NMaXN0LnJlbW92ZSgnaGlkZScpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlZGlyZWN0QnRucy5mb3JFYWNoKGl0ZW0gPT4gaXRlbS5jbGFzc0xpc3QuYWRkKCdoaWRlJykpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaXNWZXJpZmllZFVzZXIgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGZvciAobGV0IHJlZGlyZWN0QnRuIG9mIHJlZGlyZWN0QnRucykge1xuICAgICAgICAgICAgICAgIHJlZGlyZWN0QnRuLmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZvciAobGV0IHBhcnRpY2lwYXRlQnRuIG9mIHBhcnRpY2lwYXRlQnRucykge1xuICAgICAgICAgICAgICAgIHBhcnRpY2lwYXRlQnRuLmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZvciAoY29uc3QgdW5hdXRoTWVzIG9mIHVuYXV0aE1zZ3MpIHtcbiAgICAgICAgICAgICAgICB1bmF1dGhNZXMuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZScpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKGZhbHNlKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHJlcG9ydEVycm9yKGVycikge1xuICAgICAgICBjb25zdCByZXBvcnREYXRhID0ge1xuICAgICAgICAgICAgb3JpZ2luOiB3aW5kb3cubG9jYXRpb24uaHJlZixcbiAgICAgICAgICAgIHVzZXJpZDogdXNlcklkLFxuICAgICAgICAgICAgZXJyb3JUZXh0OiBlcnI/LmVycm9yIHx8IGVycj8udGV4dCB8fCBlcnI/Lm1lc3NhZ2UgfHwgJ1Vua25vd24gZXJyb3InLFxuICAgICAgICAgICAgdHlwZTogZXJyPy5uYW1lIHx8ICdVbmtub3duRXJyb3InLFxuICAgICAgICAgICAgc3RhY2s6IGVycj8uc3RhY2sgfHwgJydcbiAgICAgICAgfTtcblxuICAgICAgICBmZXRjaCgnaHR0cHM6Ly9mYXYtcHJvbS5jb20vYXBpLWNtcy9yZXBvcnRzL2FkZCcsIHtcbiAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShyZXBvcnREYXRhKVxuICAgICAgICB9KS5jYXRjaChjb25zb2xlLndhcm4pO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHRyYW5zbGF0ZSgpIHtcbiAgICAgICAgY29uc3QgZWxlbXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS10cmFuc2xhdGVdJylcbiAgICAgICAgaWYgKGVsZW1zICYmIGVsZW1zLmxlbmd0aCkge1xuICAgICAgICAgICAgaWYodHJhbnNsYXRlU3RhdGUpe1xuICAgICAgICAgICAgICAgIGVsZW1zLmZvckVhY2goZWxlbSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGtleSA9IGVsZW0uZ2V0QXR0cmlidXRlKCdkYXRhLXRyYW5zbGF0ZScpO1xuICAgICAgICAgICAgICAgICAgICBlbGVtLmlubmVySFRNTCA9IGkxOG5EYXRhW2tleV0gfHwgJyotLS0tTkVFRCBUTyBCRSBUUkFOU0xBVEVELS0tLSogICBrZXk6ICAnICsga2V5O1xuICAgICAgICAgICAgICAgICAgICBpZiAoaTE4bkRhdGFba2V5XSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgZWxlbS5yZW1vdmVBdHRyaWJ1dGUoJ2RhdGEtdHJhbnNsYXRlJyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJ0cmFuc2xhdGlvbiB3b3JrcyFcIilcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAobG9jYWxlID09PSAnZW4nKSB7XG4gICAgICAgICAgICBtYWluUGFnZS5jbGFzc0xpc3QuYWRkKCdlbicpO1xuICAgICAgICB9XG4gICAgICAgIHJlZnJlc2hMb2NhbGl6ZWRDbGFzcyhtYWluUGFnZSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcmVmcmVzaExvY2FsaXplZENsYXNzKGVsZW1lbnQpIHtcbiAgICAgICAgY29uc3QgYmFzZUNzc0NsYXNzID0gXCJcIlxuICAgICAgICBpZiAoIWVsZW1lbnQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBmb3IgKGNvbnN0IGxhbmcgb2YgWyd1aycsICdlbiddKSB7XG4gICAgICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoYmFzZUNzc0NsYXNzICsgbGFuZyk7XG4gICAgICAgIH1cbiAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKGJhc2VDc3NDbGFzcyArIGxvY2FsZSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcmVuZGVyVXNlcnMod2Vla051bSwgdXNlckRhdGEgPSBbXSkge1xuICAgICAgICB3ZWVrTnVtID0gTnVtYmVyKHdlZWtOdW0pO1xuICAgICAgICB1c2VyRGF0YSA9IHVzZXJEYXRhLmZpbmQod2VlayA9PiB7XG4gICAgICAgICAgICByZXR1cm4gd2Vlay53ZWVrID09PSB3ZWVrTnVtXG4gICAgICAgIH0pLnVzZXJzO1xuXG4gICAgICAgIGNvbnNvbGUubG9nKHVzZXJEYXRhKTtcblxuICAgICAgICBjb25zdCBjdXJyZW50VXNlciA9IHVzZXJEYXRhLmZpbmQodXNlciA9PiB1c2VyLnVzZXJpZCA9PT0gdXNlcklkKTtcblxuICAgICAgICBjb25zb2xlLmxvZyh1c2VySWQpXG4gICAgICAgIGNvbnNvbGUubG9nKGN1cnJlbnRVc2VyKVxuICAgICAgICBjb25zb2xlLmxvZyhpc1ZlcmlmaWVkVXNlcilcblxuICAgICAgICBpZih1c2VySWQgJiYgIWN1cnJlbnRVc2VyICYmIGlzVmVyaWZpZWRVc2VyKXtcbiAgICAgICAgICAgIHVzZXJEYXRhID0gWy4uLnVzZXJEYXRhLCB7dXNlcmlkOiB1c2VySWQsIHBvaW50czogMH1dXG4gICAgICAgIH1cbiAgICAgICAgY29uc29sZS5sb2codXNlckRhdGEpO1xuXG4gICAgICAgIHBvcHVsYXRlVXNlcnNUYWJsZSh1c2VyRGF0YSwgdXNlcklkLCB3ZWVrTnVtLCBjdXJyZW50VXNlciwgaXNWZXJpZmllZFVzZXIpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHBvcHVsYXRlVXNlcnNUYWJsZSh1c2VycywgY3VycmVudFVzZXJJZCwgd2VlaywgY3VycmVudFVzZXIsIGlzVmVyaWZpZWRVc2VyKSB7XG5cbiAgICAgICAgY29uc29sZS5sb2codXNlcnMpO1xuICAgICAgICByZXN1bHRzVGFibGUuaW5uZXJIVE1MID0gJyc7XG4gICAgICAgIHJlc3VsdHNUYWJsZU90aGVyLmlubmVySFRNTCA9ICcnO1xuICAgICAgICBpZiAoIXVzZXJzPy5sZW5ndGgpIHJldHVybjtcblxuICAgICAgICBjb25zdCBpc1RvcEN1cnJlbnRVc2VyID0gY3VycmVudFVzZXIgJiYgdXNlcnMuc2xpY2UoMCwgMTApLnNvbWUodXNlciA9PiB1c2VyLnVzZXJpZCA9PT0gY3VycmVudFVzZXJJZCk7XG5cbiAgICAgICAgY29uc3QgdG9wVXNlcnNMZW5ndGggPSAhdXNlcklkIHx8IGlzVG9wQ3VycmVudFVzZXIgID8gMTMgOiAxMDtcblxuICAgICAgICBjb25zdCB0b3BVc2VycyA9IHVzZXJzLnNsaWNlKDAsIHRvcFVzZXJzTGVuZ3RoKTtcblxuICAgICAgICAvLyBjb25zb2xlLmxvZyh1c2Vycyk7XG4gICAgICAgIHRvcFVzZXJzLmZvckVhY2godXNlciA9PiB7XG4gICAgICAgICAgICBkaXNwbGF5VXNlcih1c2VyLCB1c2VyLnVzZXJpZCA9PT0gY3VycmVudFVzZXJJZCwgcmVzdWx0c1RhYmxlLCB0b3BVc2VycywgaXNUb3BDdXJyZW50VXNlciwgd2Vlayk7XG4gICAgICAgIH0pO1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhpc1RvcEN1cnJlbnRVc2VyKVxuICAgICAgICBjb25zb2xlLmxvZyhpc1ZlcmlmaWVkVXNlcilcbiAgICAgICAgaWYoaXNWZXJpZmllZFVzZXIgJiYgIWN1cnJlbnRVc2VyKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygndXNlciB2ZXJpZmllZCcpO1xuICAgICAgICAgICAgZGlzcGxheVVzZXIoY3VycmVudFVzZXIsIHRydWUsIHJlc3VsdHNUYWJsZU90aGVyLCB1c2VycywgZmFsc2UsIHdlZWspO1xuICAgICAgICB9XG4gICAgICAgIGlmICghaXNUb3BDdXJyZW50VXNlciAmJiBjdXJyZW50VXNlcikge1xuICAgICAgICAgICAgaXNWZXJpZmllZFVzZXIgPSBmYWxzZTtcbiAgICAgICAgICAgIGRpc3BsYXlVc2VyKGN1cnJlbnRVc2VyLCB0cnVlLCByZXN1bHRzVGFibGVPdGhlciwgdXNlcnMsIGZhbHNlLCB3ZWVrKTtcbiAgICAgICAgfVxuXG5cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBkaXNwbGF5VXNlcih1c2VyLCBpc0N1cnJlbnRVc2VyLCB0YWJsZSwgdXNlcnMsIGlzVG9wQ3VycmVudFVzZXIsIHdlZWspIHtcblxuICAgICAgICBjb25zdCByZW5kZXJSb3cgPSAodXNlckRhdGEsIG9wdGlvbnMgPSB7fSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgeyBoaWdobGlnaHQgPSBmYWxzZSwgbmVpZ2hib3IgPSBmYWxzZSB9ID0gb3B0aW9ucztcbiAgICAgICAgICAgIGNvbnN0IHVzZXJSb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIHVzZXJSb3cuY2xhc3NMaXN0LmFkZCgndGFibGVfX3JvdycpO1xuXG4gICAgICAgICAgICBjb25zdCB1c2VyUGxhY2UgPSB1c2Vycy5pbmRleE9mKHVzZXJEYXRhKSArIDE7XG4gICAgICAgICAgICBjb25zdCBwcml6ZUtleSA9IGRlYnVnID8gbnVsbCA6IGdldFByaXplVHJhbnNsYXRpb25LZXkodXNlclBsYWNlLCB3ZWVrKTtcblxuICAgICAgICAgICAgaWYgKHVzZXJQbGFjZSA8PSAzKSB7XG4gICAgICAgICAgICAgICAgdXNlclJvdy5jbGFzc0xpc3QuYWRkKGBwbGFjZSR7dXNlclBsYWNlfWApO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoaGlnaGxpZ2h0IHx8IGlzQ3VycmVudFVzZXIgJiYgIW5laWdoYm9yKSB7XG4gICAgICAgICAgICAgICAgdXNlclJvdy5jbGFzc0xpc3QuYWRkKCd5b3UnKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAobmVpZ2hib3IpIHtcbiAgICAgICAgICAgICAgICB1c2VyUm93LmNsYXNzTGlzdC5hZGQoJ19uZWlnaGJvcicpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB1c2VyUm93LmlubmVySFRNTCA9IGBcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0YWJsZV9fcm93LWl0ZW1cIj5cbiAgICAgICAgICAgICAgICAke3VzZXJQbGFjZSA8IDEwID8gJzAnICsgdXNlclBsYWNlIDogdXNlclBsYWNlfVxuICAgICAgICAgICAgICAgICR7aXNDdXJyZW50VXNlciAmJiAhbmVpZ2hib3IgPyAnPHNwYW4gY2xhc3M9XCJ5b3VcIj4nICsgdHJhbnNsYXRlS2V5KFwieW91XCIpICsgJzwvc3Bhbj4nIDogJyd9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0YWJsZV9fcm93LWl0ZW1cIj5cbiAgICAgICAgICAgICAgICAke2lzQ3VycmVudFVzZXIgJiYgIW5laWdoYm9yID8gdXNlckRhdGEudXNlcmlkIDogbWFza1VzZXJJZCh1c2VyRGF0YS51c2VyaWQpfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGFibGVfX3Jvdy1pdGVtXCI+XG4gICAgICAgICAgICAgICAgJHtOdW1iZXIodXNlckRhdGEucG9pbnRzKS50b0ZpeGVkKDIpfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGFibGVfX3Jvdy1pdGVtXCI+XG4gICAgICAgICAgICAgICAgJHtwcml6ZUtleSA/IHRyYW5zbGF0ZUtleShwcml6ZUtleSkgOiAnIC0gJ31cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICBgO1xuXG4gICAgICAgICAgICB0YWJsZS5hcHBlbmQodXNlclJvdyk7XG4gICAgICAgIH07XG4gICAgICAgIGlmIChpc0N1cnJlbnRVc2VyICYmICFpc1RvcEN1cnJlbnRVc2VyKSB7XG4gICAgICAgICAgICBjb25zdCBpbmRleCA9IHVzZXJzLmluZGV4T2YodXNlcik7XG4gICAgICAgICAgICBpZiAodXNlcnNbaW5kZXggLSAxXSkge1xuICAgICAgICAgICAgICAgIHJlbmRlclJvdyh1c2Vyc1tpbmRleCAtIDFdLCB7IG5laWdoYm9yOiB0cnVlIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmVuZGVyUm93KHVzZXIsIHsgaGlnaGxpZ2h0OiB0cnVlIH0pO1xuICAgICAgICAgICAgaWYgKHVzZXJzW2luZGV4ICsgMV0pIHtcbiAgICAgICAgICAgICAgICByZW5kZXJSb3codXNlcnNbaW5kZXggKyAxXSwgeyBuZWlnaGJvcjogdHJ1ZSB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJlbmRlclJvdyh1c2VyKTtcbiAgICAgICAgfVxuICAgIH1cblxuXG4gICAgZnVuY3Rpb24gdHJhbnNsYXRlS2V5KGtleSwgZGVmYXVsdFZhbHVlKSB7XG4gICAgICAgIGlmICgha2V5KSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgbGV0IG5lZWRLZXkgPSBkZWJ1ZyA/IGtleSA6IGAqLS0tLU5FRUQgVE8gQkUgVFJBTlNMQVRFRC0tLS0qIGtleTogJHtrZXl9YFxuXG4gICAgICAgIGRlZmF1bHRWYWx1ZSA9ICBuZWVkS2V5IHx8IGtleTtcbiAgICAgICAgcmV0dXJuIGkxOG5EYXRhW2tleV0gfHwgZGVmYXVsdFZhbHVlO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIG1hc2tVc2VySWQodXNlcklkKSB7XG4gICAgICAgIHJldHVybiBcIioqXCIgKyB1c2VySWQudG9TdHJpbmcoKS5zbGljZSgyKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBnZXRQcml6ZVRyYW5zbGF0aW9uS2V5KHBsYWNlLCB3ZWVrKSB7XG4gICAgICAgIGlmIChwbGFjZSA8PSAzKSByZXR1cm4gYHByaXplXyR7d2Vla30tJHtwbGFjZX1gO1xuICAgICAgICBpZiAocGxhY2UgPD0gMTApIHJldHVybiBgcHJpemVfJHt3ZWVrfS00LTEwYDtcbiAgICAgICAgaWYgKHBsYWNlIDw9IDI1KSByZXR1cm4gYHByaXplXyR7d2Vla30tMTEtMjVgO1xuICAgICAgICBpZiAocGxhY2UgPD0gNTApIHJldHVybiBgcHJpemVfJHt3ZWVrfS0yNi01MGA7XG4gICAgICAgIGlmIChwbGFjZSA8PSA3NSkgcmV0dXJuIGBwcml6ZV8ke3dlZWt9LTUxLTc1YDtcbiAgICAgICAgaWYgKHBsYWNlIDw9IDEwMCkgcmV0dXJuIGBwcml6ZV8ke3dlZWt9LTc2LTEwMGA7XG4gICAgICAgIGlmIChwbGFjZSA8PSAxMjUpIHJldHVybiBgcHJpemVfJHt3ZWVrfS0xMDEtMTI1YDtcbiAgICAgICAgaWYgKHBsYWNlIDw9IDE1MCkgcmV0dXJuIGBwcml6ZV8ke3dlZWt9LTEyNi0xNTBgO1xuICAgICAgICBpZiAocGxhY2UgPD0gMTc1KSByZXR1cm4gYHByaXplXyR7d2Vla30tMTUxLTE3NWA7XG4gICAgICAgIGlmIChwbGFjZSA8PSAyMDApIHJldHVybiBgcHJpemVfJHt3ZWVrfS0xNzYtMjAwYDtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBzaG93UHJpemVCeURhdGFBdHRyKHByaXplKXtcbiAgICAgICAgY29uc3QgYWxsUHJpemVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW2RhdGEtcHJpemVdJyk7XG4gICAgICAgIGNvbnN0IGN1cnJlbnRQcml6ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLXByaXplPVwiJHtwcml6ZX1cIl1gKTtcblxuICAgICAgICBpZiAoY3VycmVudFByaXplICYmIGFsbFByaXplcykge1xuICAgICAgICAgICAgYWxsUHJpemVzLmZvckVhY2gocHJpemUgPT4ge1xuICAgICAgICAgICAgICAgIHByaXplLmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICBjdXJyZW50UHJpemUuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZScpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcGFydGljaXBhdGUoKSB7XG4gICAgICAgIGlmICghdXNlcklkKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgcGFyYW1zID0geyB1c2VyaWQ6IHVzZXJJZCB9O1xuICAgICAgICBmZXRjaChhcGlVUkwgKyAnL3VzZXIvJywge1xuICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgICdBY2NlcHQnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkocGFyYW1zKVxuICAgICAgICB9KS50aGVuKHJlcyA9PiByZXMuanNvbigpKVxuICAgICAgICAgICAgLnRoZW4ocmVzID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXMpO1xuICAgICAgICAgICAgICAgIGxvYWRlckJ0biA9IHRydWVcbiAgICAgICAgICAgICAgICB0b2dnbGVDbGFzc2VzKHBhcnRpY2lwYXRlQnRucywgXCJsb2FkZXJcIilcbiAgICAgICAgICAgICAgICB0b2dnbGVUcmFuc2xhdGVzKHBhcnRpY2lwYXRlQnRucywgXCJsb2FkZXJcIilcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+e1xuICAgICAgICAgICAgICAgICAgICB0b2dnbGVUcmFuc2xhdGVzKHBhcnRpY2lwYXRlQnRucywgXCJsb2FkZXJfcmVhZHlcIilcbiAgICAgICAgICAgICAgICAgICAgdG9nZ2xlQ2xhc3NlcyhwYXJ0aWNpcGF0ZUJ0bnMsIFwiZG9uZVwiKVxuICAgICAgICAgICAgICAgICAgICB0b2dnbGVDbGFzc2VzKHBhcnRpY2lwYXRlQnRucywgXCJsb2FkZXJcIilcbiAgICAgICAgICAgICAgICB9LCA1MDApXG4gICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKT0+e1xuICAgICAgICAgICAgICAgICAgICBjaGVja1VzZXJBdXRoKClcbiAgICAgICAgICAgICAgICAgICAgbG9hZFVzZXJzKFwiP25vY2FjaGU9MVwiKS50aGVuKHJlcyA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZW5kZXJVc2VycyhhY3RpdmVXZWVrLCB0YWJsZURhdGEpXG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgfSwgMTAwMClcblxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5jYXRjaChlcnIgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0FQSSByZXF1ZXN0IGZhaWxlZDonLCBlcnIpO1xuXG4gICAgICAgICAgICAgICAgcmVwb3J0RXJyb3IoZXJyKTtcblxuICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mYXYtcGFnZScpLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgICAgICAgICAgaWYgKHdpbmRvdy5sb2NhdGlvbi5ocmVmLnN0YXJ0c1dpdGgoXCJodHRwczovL3d3dy5mYXZiZXQuaHIvXCIpKSB7XG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gJy9wcm9tb2NpamUvcHJvbW9jaWphL3N0dWIvJztcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9ICcvcHJvbW9zL3Byb21vL3N0dWIvJztcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QoZXJyKTtcbiAgICAgICAgICAgIH0pO1xuICAgIH1cbiAgICBmdW5jdGlvbiBsb2FkVXNlcnMocGFyYW1ldHIpIHtcbiAgICAgICAgY29uc3QgcmVxdWVzdHMgPSBbXTtcbiAgICAgICAgdGFibGVEYXRhLmxlbmd0aCA9IDBcblxuICAgICAgICBmb3IgKGxldCBpID0gMTsgaSA8PSBwZXJpb2RBbW91bnQ7IGkrKykge1xuICAgICAgICAgICAgY29uc3Qgd2VlayA9IGk7IC8vINCw0LHQviDQsdGD0LTRjC3Rj9C60LAg0LvQvtCz0ZbQutCwINC00LvRjyDRhNC+0YDQvNGD0LLQsNC90L3RjyDQvdC+0LzQtdGA0LAg0YLQuNC20L3Rj1xuICAgICAgICAgICAgY29uc3QgcmVxID0gcmVxdWVzdChgL3VzZXJzLyR7d2Vla30ke3BhcmFtZXRyID8gcGFyYW1ldHIgOiBcIlwifWApLnRoZW4oZGF0YSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZGF0YSk7XG4gICAgICAgICAgICAgICAgdGFibGVEYXRhLnB1c2goeyB3ZWVrLCB1c2VyczogZGF0YSB9KTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICByZXF1ZXN0cy5wdXNoKHJlcSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gUHJvbWlzZS5hbGwocmVxdWVzdHMpXG4gICAgICAgIC5jYXRjaChlcnJvciA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBsb2FkaW5nIHVzZXJzOicsIGVycm9yKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG5cblxuLy9zbGlkZXJcblxuICAgIGNvbnN0IGJ1dHRvbnNSaWdodCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5wcml6ZV9fbW92ZS1yaWdodCcpLFxuICAgICAgICBidXR0b25zTGVmdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5wcml6ZV9fbW92ZS1sZWZ0JyksXG4gICAgICAgIHNsaWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jYXJkcycpLFxuICAgICAgICBpdGVtcyA9IHNsaWRlci5xdWVyeVNlbGVjdG9yQWxsKCcuY2FyZCcpLFxuICAgICAgICB0b3RhbEl0ZW1zID0gaXRlbXMubGVuZ3RoLFxuICAgICAgICBkb3RzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnByaXplX19kb3RzLWl0ZW0nKVxuXG4gICAgbGV0IGN1cnJlbnRJbmRleCA9IDI7XG4gICAgbGV0IHN0YXJ0WCA9IDA7XG4gICAgbGV0IGlzRHJhZ2dpbmcgPSBmYWxzZTtcblxuXG4gICAgZnVuY3Rpb24gdXBkYXRlU2xpZGVyKCkge1xuICAgICAgICBpdGVtcy5mb3JFYWNoKChpdGVtLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgZGlzdGFuY2UgPSAoaW5kZXggLSBjdXJyZW50SW5kZXggKyB0b3RhbEl0ZW1zKSAlIHRvdGFsSXRlbXM7XG5cbiAgICAgICAgICAgIGl0ZW0uY2xhc3NMaXN0LnJlbW92ZShcbiAgICAgICAgICAgICAgICAnX2xlZnQnLCAnX2xlZnQxJywgJ19sZWZ0MicsXG4gICAgICAgICAgICAgICAgJ19yaWdodCcsICdfcmlnaHQxJywgJ19yaWdodDInLFxuICAgICAgICAgICAgICAgICdfYWN0aXZlJywgJ19oaWRlLXNsaWRlJ1xuICAgICAgICAgICAgKTtcblxuICAgICAgICAgICAgaWYgKGluZGV4ID09PSBjdXJyZW50SW5kZXgpIHtcbiAgICAgICAgICAgICAgICBpdGVtLmNsYXNzTGlzdC5hZGQoJ19hY3RpdmUnKTtcbiAgICAgICAgICAgICAgICBjcmVhdGVHbGl0Y2hMYXllcnMoMywgaXRlbSlcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgICByZW1vdmVHbGl0Y2hMYXllcnMoIGl0ZW0pXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChkaXN0YW5jZSA9PT0gMSkge1xuICAgICAgICAgICAgICAgIGl0ZW0uY2xhc3NMaXN0LmFkZCgnX3JpZ2h0MScpO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChkaXN0YW5jZSA9PT0gMikge1xuICAgICAgICAgICAgICAgIGl0ZW0uY2xhc3NMaXN0LmFkZCgnX3JpZ2h0MicpO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChkaXN0YW5jZSA9PT0gdG90YWxJdGVtcyAtIDEpIHtcbiAgICAgICAgICAgICAgICBpdGVtLmNsYXNzTGlzdC5hZGQoJ19sZWZ0MScpO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChkaXN0YW5jZSA9PT0gdG90YWxJdGVtcyAtIDIpIHtcbiAgICAgICAgICAgICAgICBpdGVtLmNsYXNzTGlzdC5hZGQoJ19sZWZ0MicpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBpdGVtLmNsYXNzTGlzdC5hZGQoJ19oaWRlLXNsaWRlJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICB1cGRhdGVEb3RzKClcbiAgICB9XG5cbiAgICBmdW5jdGlvbiB1cGRhdGVEb3RzKCl7XG4gICAgICAgIGRvdHMuZm9yRWFjaCgoaXRlbSwgaSkgPT4ge1xuICAgICAgICAgICAgaXRlbS5jbGFzc0xpc3QucmVtb3ZlKCdfYWN0aXZlJyk7XG4gICAgICAgICAgICBpZihpID09PSBjdXJyZW50SW5kZXgpIHtcbiAgICAgICAgICAgICAgICBpdGVtLmNsYXNzTGlzdC5hZGQoJ19hY3RpdmUnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBtb3ZlU2xpZGVyKG9mZnNldCkge1xuICAgICAgICBjdXJyZW50SW5kZXggPSAoY3VycmVudEluZGV4ICsgb2Zmc2V0ICsgdG90YWxJdGVtcykgJSB0b3RhbEl0ZW1zO1xuICAgICAgICB1cGRhdGVTbGlkZXIoKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBoYW5kbGVTdGFydChldmVudCkge1xuICAgICAgICBpc0RyYWdnaW5nID0gdHJ1ZTtcbiAgICAgICAgc3RhcnRYID0gZXZlbnQuY2xpZW50WCB8fCBldmVudC50b3VjaGVzWzBdLmNsaWVudFg7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaGFuZGxlTW92ZShldmVudCkge1xuICAgICAgICBpZiAoIWlzRHJhZ2dpbmcpIHJldHVybjtcblxuICAgICAgICBjb25zdCBjdXJyZW50WCA9IGV2ZW50LmNsaWVudFggfHwgZXZlbnQudG91Y2hlc1swXS5jbGllbnRYO1xuICAgICAgICBjb25zdCBkaWZmWCA9IGN1cnJlbnRYIC0gc3RhcnRYO1xuXG4gICAgICAgIGlmIChNYXRoLmFicyhkaWZmWCkgPiA1MCkge1xuICAgICAgICAgICAgbW92ZVNsaWRlcihkaWZmWCA+IDAgPyAtMSA6IDEpO1xuICAgICAgICAgICAgaXNEcmFnZ2luZyA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaGFuZGxlRW5kKCkge1xuICAgICAgICBpc0RyYWdnaW5nID0gZmFsc2U7XG4gICAgfVxuXG4vL3NsaWRlclxuXG4gICAgLy8gZnVuY3Rpb24gb3BlblBvcHVwQnlBdHRyKHBvcHVwQXR0cikge1xuICAgIC8vICAgICBjb25zdCBhbGxQb3B1cHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucG9wdXAnKTtcbiAgICAvLyAgICAgYWxsUG9wdXBzLmZvckVhY2gocCA9PiBwLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpKTtcbiAgICAvLyAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5vdmVyZmxvdyA9ICdoaWRkZW4nO1xuICAgIC8vXG4gICAgLy8gICAgIGNvbnNvbGUubG9nKHBvcHVwQXR0cik7XG4gICAgLy9cbiAgICAvLyAgICAgY29uc3QgdGFyZ2V0UG9wdXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAucG9wdXBbZGF0YS1wb3B1cD1cIiR7cG9wdXBBdHRyfVwiXWApO1xuICAgIC8vICAgICBpZiAodGFyZ2V0UG9wdXApIHtcbiAgICAvLyAgICAgICAgIHRhcmdldFBvcHVwLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xuICAgIC8vICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBvcHVwcycpLmNsYXNzTGlzdC5yZW1vdmUoJ29wYWNpdHknKTtcbiAgICAvLyAgICAgfVxuICAgIC8vIH1cblxuICAgIGZ1bmN0aW9uIGNsb3NlQWxsUG9wdXBzKCkge1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucG9wdXAnKS5mb3JFYWNoKHAgPT4gcC5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKSk7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wb3B1cHMnKS5jbGFzc0xpc3QuYWRkKCdvcGFjaXR5LW92ZXJsYXknKTtcbiAgICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5vdmVyZmxvdyA9ICdhdXRvJztcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBpbml0T3BlbkJveCgpe1xuICAgICAgICBzaGFrZVVudGlsKGJveCwgZ2V0VXNlclByaXplKCksIGxvZ29Cb3gpLnRoZW4ocHJpemUgPT4ge1xuICAgICAgICAgICAgYm94Q2FwLmNsYXNzTGlzdC5hZGQoXCJvcGVuXCIpO1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKHJlc29sdmUgPT4ge1xuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBib3hDYXAuY2xhc3NMaXN0LnJlbW92ZShcIm9wZW5cIik7XG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUocHJpemUpO1xuICAgICAgICAgICAgICAgIH0sIDIwMDApO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pLnRoZW4ocHJpemUgPT4ge1xuICAgICAgICAgICAgc2hvd1ByZWxvYWRlcihwcml6ZSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuXG4gICAgbG9hZFRyYW5zbGF0aW9ucygpXG4gICAgICAgIC50aGVuKGluaXQpIC8vINC30LDQv9GD0YHQuiDRltC90ZbRgtGDINGB0YLQvtGA0ZbQvdC60LhcblxuICAgIC8vIGluaXQoKVxuXG4gICAgLy8gLy8vIHRlc3RcblxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsICgpID0+IHtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tZW51LWJ0blwiKT8uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWVudS10ZXN0XCIpPy5jbGFzc0xpc3QudG9nZ2xlKFwiaGlkZVwiKTtcbiAgICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICBjb25zdCBsbmdCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmxuZy1idG5cIilcblxuICAgIGxuZ0J0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICBpZiAoc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbShcImxvY2FsZVwiKSkge1xuICAgICAgICAgICAgc2Vzc2lvblN0b3JhZ2UucmVtb3ZlSXRlbShcImxvY2FsZVwiKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oXCJsb2NhbGVcIiwgXCJlblwiKTtcbiAgICAgICAgfVxuICAgICAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKCk7XG4gICAgfSk7XG5cbiAgICBjb25zdCBhdXRoQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hdXRoLWJ0blwiKVxuXG4gICAgYXV0aEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT57XG4gICAgICAgIGlmKHVzZXJJZCl7XG4gICAgICAgICAgICBzZXNzaW9uU3RvcmFnZS5yZW1vdmVJdGVtKFwidXNlcklkXCIpXG4gICAgICAgIH1lbHNle1xuICAgICAgICAgICAgc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbShcInVzZXJJZFwiLCBcIjEwMDMwMDI2OFwiKVxuICAgICAgICB9XG4gICAgICAgIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKVxuICAgIH0pO1xuXG4gICAgY29uc3QgcG9wdXBzTWVudSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucG9wdXBzLWJ0blwiKTtcblxuICAgIHBvcHVwc01lbnUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tZW51LXBvcHVwXCIpLmNsYXNzTGlzdC50b2dnbGUoXCJoaWRlXCIpO1xuICAgIH0pXG5cbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm9wZW4tYm94XCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PntcbiAgICAgICAgaW5pdE9wZW5Cb3goKTtcbiAgICB9KVxuXG59KSgpO1xuXG4vLyDQv9GW0YHQu9GPINGC0LXRgdGC0YMg0LLQuNC00LDQu9C4INGG0Y4g0YTRg9C90LrRhtGW0Y4g0ZYg0YDQvtC30LrQvtC80LXQvdGC0Lgg0LDQvdCw0LvQvtCz0ZbRh9C90YMg0LIg0YTRg9C90LrRhtGW0Zcg0LLQuNC60LvQuNC60YNcbmZ1bmN0aW9uIG9wZW5Qb3B1cEJ5QXR0cihwb3B1cEF0dHIpIHtcbiAgICBjb25zdCBhbGxQb3B1cHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucG9wdXAnKTtcbiAgICBhbGxQb3B1cHMuZm9yRWFjaChwID0+IHAuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJykpO1xuXG4gICAgY29uc29sZS5sb2cocG9wdXBBdHRyKTtcblxuICAgIGNvbnN0IHRhcmdldFBvcHVwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLnBvcHVwW2RhdGEtcG9wdXA9XCIke3BvcHVwQXR0cn1cIl1gKTtcbiAgICBpZiAodGFyZ2V0UG9wdXApIHtcbiAgICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5vdmVyZmxvdyA9ICdoaWRkZW4nO1xuICAgICAgICB0YXJnZXRQb3B1cC5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBvcHVwcycpLmNsYXNzTGlzdC5yZW1vdmUoJ29wYWNpdHktb3ZlcmxheScpO1xuICAgIH1cbn1cblxuIl19
