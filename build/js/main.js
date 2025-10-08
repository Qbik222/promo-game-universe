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
              box.addEventListener('click', initOpenBox);
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
    mainPage.classList.remove('overlay');
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
var mainPage2 = document.querySelector('.fav-page');

// після тесту видали цю функцію і розкоменти аналогічну в функції виклику  mainPage2 > mainPage
function openPopupByAttr(popupAttr) {
  var allPopups = document.querySelectorAll('.popup');
  allPopups.forEach(function (p) {
    return p.classList.remove('active');
  });
  console.log(popupAttr);
  var targetPopup = document.querySelector(".popup[data-popup=\"".concat(popupAttr, "\"]"));
  if (targetPopup) {
    document.body.style.overflow = 'hidden';
    mainPage2.classList.add('overlay');
    targetPopup.classList.add('active');
    document.querySelector('.popups').classList.remove('opacity-overlay');
  }
}
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOlsiYXBpVVJMIiwiZ2V0QWN0aXZlV2VlayIsInByb21vU3RhcnREYXRlIiwid2Vla0R1cmF0aW9uIiwiY3VycmVudERhdGUiLCJEYXRlIiwid2Vla0RhdGVzIiwiRGF5IiwiV2VlayIsImZvcm1hdERhdGUiLCJkYXRlIiwiZ2V0RGF0ZSIsInRvU3RyaW5nIiwicGFkU3RhcnQiLCJnZXRNb250aCIsImNhbGN1bGF0ZVdlZWtQZXJpb2QiLCJ3ZWVrSW5kZXgiLCJiYXNlU3RhcnQiLCJnZXRUaW1lIiwic3RhcnQiLCJlbmQiLCJhY3RpdmVXZWVrSW5kZXgiLCJpIiwiaXNWZXJpZmllZFVzZXIiLCJwZXJpb2RBbW91bnQiLCJ0YWJsZURhdGEiLCJhY3RpdmVXZWVrIiwibWFpblBhZ2UiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJ1bmF1dGhNc2dzIiwicXVlcnlTZWxlY3RvckFsbCIsInBhcnRpY2lwYXRlQnRucyIsInJlZGlyZWN0QnRucyIsImxvYWRlciIsImNhcmRQb3B1cEljb25zIiwicHJlbG9hZGVyIiwicHJlbG9hZGVyQ2FyZHMiLCJwcmVsb2FkZXJQcml6ZSIsImJveCIsImxvZ29Cb3giLCJib3hDYXAiLCJ1a0xlbmciLCJlbkxlbmciLCJ0b2dnbGVDbGFzc2VzIiwiZWxlbWVudHMiLCJjbGFzc05hbWUiLCJmb3JFYWNoIiwiZWwiLCJjbGFzc0xpc3QiLCJ0b2dnbGUiLCJ0b2dnbGVUcmFuc2xhdGVzIiwiZGF0YUF0dHIiLCJzZXRBdHRyaWJ1dGUiLCJpbm5lckhUTUwiLCJpMThuRGF0YSIsInJlbW92ZUF0dHJpYnV0ZSIsImxvYWRlckJ0biIsImxvY2FsZSIsInNlc3Npb25TdG9yYWdlIiwiZ2V0SXRlbSIsImRlYnVnIiwiaGlkZUxvYWRlciIsInRyYW5zbGF0ZVN0YXRlIiwidXNlcklkIiwiTnVtYmVyIiwiY3JlYXRlR2xpdGNoTGF5ZXJzIiwibGF5ZXJzIiwiY29udGFpbmVyIiwid3JhcCIsImNyZWF0ZUVsZW1lbnQiLCJsYXllciIsImFwcGVuZENoaWxkIiwidGFyZ2V0IiwicmVtb3ZlR2xpdGNoTGF5ZXJzIiwiZ2xpdGNoIiwicmVtb3ZlIiwicmVxdWVzdCIsImxpbmsiLCJleHRyYU9wdGlvbnMiLCJmZXRjaCIsImhlYWRlcnMiLCJ0aGVuIiwicmVzIiwib2siLCJFcnJvciIsImpzb24iLCJlcnIiLCJjb25zb2xlIiwiZXJyb3IiLCJQcm9taXNlIiwicmVqZWN0IiwiYWRkIiwiYm9keSIsInN0eWxlIiwib3ZlcmZsb3ciLCJpbml0IiwidHJ5RGV0ZWN0VXNlcklkIiwicXVpY2tDaGVja0FuZFJlbmRlciIsInNldFRpbWVvdXQiLCJhZGRFdmVudExpc3RlbmVyIiwiaW5pdE9wZW5Cb3giLCJ1cGRhdGVTbGlkZXIiLCJjYXJkIiwiYnV0dG9uc0xlZnQiLCJidG4iLCJtb3ZlU2xpZGVyIiwicG9pbnRlckV2ZW50cyIsImJ1dHRvbnNSaWdodCIsInNsaWRlciIsImhhbmRsZVN0YXJ0IiwiaGFuZGxlTW92ZSIsImhhbmRsZUVuZCIsImUiLCJvcGVuUG9wdXBFbCIsImNvbnRlbnRXcmFwIiwiY2xvc2VCdG4iLCJjb250YWlucyIsImNsb3NlQWxsUG9wdXBzIiwiaWNvbiIsImdldEF0dHJpYnV0ZSIsIm9wZW5Qb3B1cEJ5QXR0ciIsIndpbmRvdyIsInN0b3JlIiwic3RhdGUiLCJnZXRTdGF0ZSIsImF1dGgiLCJpc0F1dGhvcml6ZWQiLCJpZCIsImdfdXNlcl9pZCIsImF0dGVtcHRzIiwibWF4QXR0ZW1wdHMiLCJhdHRlbXB0SW50ZXJ2YWwiLCJ3YWl0Rm9yVXNlcklkIiwicmVzb2x2ZSIsImludGVydmFsIiwic2V0SW50ZXJ2YWwiLCJjbGVhckludGVydmFsIiwibG9hZFRyYW5zbGF0aW9ucyIsInRyYW5zbGF0ZSIsImNsZWFyUHJlbG9hZGVyU3RhdGUiLCJhbGxDYXJkc0lubmVyIiwiYWxsQ2FyZEJhY2siLCJwb3B1cFByZWxvYWRlciIsInNob3dQcmVsb2FkZXIiLCJwcml6ZSIsInNob3dQcml6ZUJ5RGF0YUF0dHIiLCJnZXRVc2VyUHJpemUiLCJzaGFrZVVudGlsIiwid2FpdFByb21pc2UiLCJsb2dvIiwib3B0cyIsImFtcGxpdHVkZSIsImR1cmF0aW9uIiwiYXhpcyIsInN0b3AiLCJhbmltYXRlIiwia2V5ZnJhbWVzIiwidHJhbnNmb3JtIiwiYW5pbSIsIml0ZXJhdGlvbnMiLCJJbmZpbml0eSIsImVhc2luZyIsImNhbmNlbCIsInJhZklkIiwicnVubmluZyIsImxvb3AiLCJ0IiwicGhhc2UiLCJNYXRoIiwiUEkiLCJkZWx0YSIsInNpbiIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsImNhbmNlbEFuaW1hdGlvbkZyYW1lIiwiY2hlY2tVc2VyQXV0aCIsImxvZyIsInVuYXV0aE1lcyIsInVzZXJpZCIsIml0ZW0iLCJyZWRpcmVjdEJ0biIsInBhcnRpY2lwYXRlQnRuIiwicmVwb3J0RXJyb3IiLCJyZXBvcnREYXRhIiwib3JpZ2luIiwibG9jYXRpb24iLCJocmVmIiwiZXJyb3JUZXh0IiwidGV4dCIsIm1lc3NhZ2UiLCJ0eXBlIiwibmFtZSIsInN0YWNrIiwibWV0aG9kIiwiSlNPTiIsInN0cmluZ2lmeSIsIndhcm4iLCJlbGVtcyIsImxlbmd0aCIsImVsZW0iLCJrZXkiLCJyZWZyZXNoTG9jYWxpemVkQ2xhc3MiLCJlbGVtZW50IiwiYmFzZUNzc0NsYXNzIiwibGFuZyIsInJlbmRlclVzZXJzIiwid2Vla051bSIsInVzZXJEYXRhIiwiZmluZCIsIndlZWsiLCJ1c2VycyIsImN1cnJlbnRVc2VyIiwidXNlciIsInBvaW50cyIsInBvcHVsYXRlVXNlcnNUYWJsZSIsImN1cnJlbnRVc2VySWQiLCJyZXN1bHRzVGFibGUiLCJyZXN1bHRzVGFibGVPdGhlciIsImlzVG9wQ3VycmVudFVzZXIiLCJzbGljZSIsInNvbWUiLCJ0b3BVc2Vyc0xlbmd0aCIsInRvcFVzZXJzIiwiZGlzcGxheVVzZXIiLCJpc0N1cnJlbnRVc2VyIiwidGFibGUiLCJyZW5kZXJSb3ciLCJvcHRpb25zIiwiaGlnaGxpZ2h0IiwibmVpZ2hib3IiLCJ1c2VyUm93IiwidXNlclBsYWNlIiwiaW5kZXhPZiIsInByaXplS2V5IiwiZ2V0UHJpemVUcmFuc2xhdGlvbktleSIsInRyYW5zbGF0ZUtleSIsIm1hc2tVc2VySWQiLCJ0b0ZpeGVkIiwiYXBwZW5kIiwiaW5kZXgiLCJkZWZhdWx0VmFsdWUiLCJuZWVkS2V5IiwicGxhY2UiLCJhbGxQcml6ZXMiLCJjdXJyZW50UHJpemUiLCJwYXJ0aWNpcGF0ZSIsInBhcmFtcyIsImxvYWRVc2VycyIsImRpc3BsYXkiLCJzdGFydHNXaXRoIiwicGFyYW1ldHIiLCJyZXF1ZXN0cyIsInJlcSIsImRhdGEiLCJwdXNoIiwiYWxsIiwiaXRlbXMiLCJ0b3RhbEl0ZW1zIiwiZG90cyIsImN1cnJlbnRJbmRleCIsInN0YXJ0WCIsImlzRHJhZ2dpbmciLCJkaXN0YW5jZSIsInVwZGF0ZURvdHMiLCJvZmZzZXQiLCJldmVudCIsImNsaWVudFgiLCJ0b3VjaGVzIiwiY3VycmVudFgiLCJkaWZmWCIsImFicyIsInAiLCJsbmdCdG4iLCJyZW1vdmVJdGVtIiwic2V0SXRlbSIsInJlbG9hZCIsImF1dGhCdG4iLCJwb3B1cHNNZW51IiwibWFpblBhZ2UyIiwicG9wdXBBdHRyIiwiYWxsUG9wdXBzIiwidGFyZ2V0UG9wdXAiXSwibWFwcGluZ3MiOiI7OzsrQ0FDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEQSxDQUFDLFlBQVk7RUFBQTtFQUVULElBQU1BLE1BQU0sR0FBRyx3Q0FBd0M7RUFFdkQsSUFBTUMsYUFBYSxHQUFHLFNBQWhCQSxhQUFhLENBQUlDLGNBQWMsRUFBRUMsWUFBWSxFQUFLO0lBQ3BELElBQU1DLFdBQVcsR0FBRyxJQUFJQyxJQUFJLEVBQUU7SUFDOUIsSUFBSUMsU0FBUyxHQUFHLEVBQUU7SUFFbEIsSUFBTUMsR0FBRyxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLElBQUk7SUFDL0IsSUFBTUMsSUFBSSxH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UCxRQUFRLENBQUNDLGFBQWEsK0JBQXVCMFAsU0FBUyxTQUFLO0VBQy9FLElBQUlFLFdBQVcsRUFBRTtJQUNiN1AsUUFBUSxDQUFDaUUsSUFBSSxDQUFDQyxLQUFLLENBQUNDLFFBQVEsR0FBRyxRQUFRO0lBQ3ZDdUwsU0FBUyxDQUFDck8sU0FBUyxDQUFDMkMsR0FBRyxDQUFDLFNBQVMsQ0FBQztJQUNsQzZMLFdBQVcsQ0FBQ3hPLFNBQVMsQ0FBQzJDLEdBQUcsQ0FBQyxRQUFRLENBQUM7SUFDbkNoRSxRQUFRLENBQUNDLGFBQWEsQ0FBQyxTQUFTLENBQUMsQ0FBQ29CLFNBQVMsQ0FBQzJCLE1BQU0sQ0FBQyxpQkFBaUIsQ0FBQztFQUN6RTtBQUNKIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gKCkge1xuXG4gICAgY29uc3QgYXBpVVJMID0gJ2h0dHBzOi8vZmF2LXByb20uY29tL2FwaV9nYW1lX3VuaXZlcnNlJ1xuXG4gICAgY29uc3QgZ2V0QWN0aXZlV2VlayA9IChwcm9tb1N0YXJ0RGF0ZSwgd2Vla0R1cmF0aW9uKSA9PiB7XG4gICAgICAgIGNvbnN0IGN1cnJlbnREYXRlID0gbmV3IERhdGUoKTtcbiAgICAgICAgbGV0IHdlZWtEYXRlcyA9IFtdO1xuXG4gICAgICAgIGNvbnN0IERheSA9IDI0ICogNjAgKiA2MCAqIDEwMDA7XG4gICAgICAgIGNvbnN0IFdlZWsgPSB3ZWVrRHVyYXRpb24gKiBEYXk7XG5cbiAgICAgICAgY29uc3QgZm9ybWF0RGF0ZSA9IChkYXRlKSA9PlxuICAgICAgICAgICAgYCR7ZGF0ZS5nZXREYXRlKCkudG9TdHJpbmcoKS5wYWRTdGFydCgyLCBcIjBcIil9LiR7KGRhdGUuZ2V0TW9udGgoKSArIDEpLnRvU3RyaW5nKCkucGFkU3RhcnQoMiwgXCIwXCIpfWA7XG5cbiAgICAgICAgY29uc3QgY2FsY3VsYXRlV2Vla1BlcmlvZCA9ICh3ZWVrSW5kZXgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGJhc2VTdGFydCA9IHByb21vU3RhcnREYXRlLmdldFRpbWUoKTtcbiAgICAgICAgICAgIGNvbnN0IHN0YXJ0ID0gbmV3IERhdGUoYmFzZVN0YXJ0ICsgd2Vla0luZGV4ICogV2Vlayk7XG4gICAgICAgICAgICBsZXQgZW5kID0gbmV3IERhdGUoc3RhcnQuZ2V0VGltZSgpICsgKHdlZWtEdXJhdGlvbiAqIERheSAtIDEpKTtcbiAgICAgICAgICAgIHJldHVybiB7IHN0YXJ0LCBlbmQgfTtcbiAgICAgICAgfTtcblxuICAgICAgICBsZXQgYWN0aXZlV2Vla0luZGV4ID0gbnVsbDtcblxuICAgICAgICAvLyDQn9C10YDQtdCy0ZbRgNC60LAg0L/QvtGC0L7Rh9C90L7Qs9C+INGC0LjQttC90Y9cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMDsgaSsrKSB7IC8vINCe0LHQvNC10LbRg9GU0LzQviAxMCDRgtC40LbQvdGP0LzQuCAo0Y/QutGJ0L4g0L/QvtGC0YDRltCx0L3QviDQsdGW0LvRjNGI0LUsINC/0YDQvtGB0YLQviDQt9C80ZbQvdGW0YLRjCDQu9GW0YfQuNC70YzQvdC40LopXG4gICAgICAgICAgICBjb25zdCB7IHN0YXJ0LCBlbmQgfSA9IGNhbGN1bGF0ZVdlZWtQZXJpb2QoaSk7XG4gICAgICAgICAgICBpZiAoY3VycmVudERhdGUgPj0gc3RhcnQgJiYgY3VycmVudERhdGUgPD0gZW5kKSB7XG4gICAgICAgICAgICAgICAgYWN0aXZlV2Vla0luZGV4ID0gaSArIDE7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gYWN0aXZlV2Vla0luZGV4O1xuICAgIH07XG5cbiAgICBjb25zdCBwcm9tb1N0YXJ0RGF0ZSA9IG5ldyBEYXRlKFwiMjAyNS0wNS0wNVQwMDowMDowMFwiKTtcbiAgICBjb25zdCB3ZWVrRHVyYXRpb24gPSAxMDtcblxuICAgIGxldCBpc1ZlcmlmaWVkVXNlciA9IGZhbHNlO1xuXG4gICAgbGV0IHBlcmlvZEFtb3VudCA9IDIgLy8g0LrRltC70YzQutGW0YHRgtGMINC/0LXRgNGW0L7QtNGW0LIg0LIg0LDQutGG0ZbRlywg0YLRgNC10LHQsCDQtNC70Y8g0LrQtdGI0YPQstCw0L3QvdGPINGW0L3RhNC4INC3INGC0LDQsdC70LhcblxuICAgIGxldCB0YWJsZURhdGEgPSBbXVxuICAgIGxldCBhY3RpdmVXZWVrID0gZ2V0QWN0aXZlV2Vlayhwcm9tb1N0YXJ0RGF0ZSwgd2Vla0R1cmF0aW9uKSB8fCAxO1xuICAgIC8vIGxldCBhY3RpdmVXZWVrID0gMlxuXG4gICAgaWYgKGFjdGl2ZVdlZWsgPiAyKSBhY3RpdmVXZWVrID0gMlxuXG5cbiAgICBjb25zdCBtYWluUGFnZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZmF2LXBhZ2VcIiksXG4gICAgICAgIHVuYXV0aE1zZ3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcudW5hdXRoLW1zZycpLFxuICAgICAgICBwYXJ0aWNpcGF0ZUJ0bnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucGFydC1idG4nKSxcbiAgICAgICAgcmVkaXJlY3RCdG5zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmJ0bi1qb2luJyksXG4gICAgICAgIGxvYWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc3Bpbm5lci1vdmVybGF5XCIpLFxuICAgICAgICBjYXJkUG9wdXBJY29ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jYXJkX19wb3B1cCcpLFxuICAgICAgICBwcmVsb2FkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucG9wdXAtLXByZWxvYWRlcicpLFxuICAgICAgICBwcmVsb2FkZXJDYXJkcyA9IHByZWxvYWRlci5xdWVyeVNlbGVjdG9yQWxsKCcuY2FyZF9faW5uZXInKSxcbiAgICAgICAgcHJlbG9hZGVyUHJpemUgPSBwcmVsb2FkZXIucXVlcnlTZWxlY3RvcignLmNhcmRfX2lubmVyLS1wcml6ZScpLFxuICAgICAgICBib3ggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYm94X19vcGVuJyksXG4gICAgICAgIGxvZ29Cb3ggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYm94X19sb2dvJyksXG4gICAgICAgIGJveENhcCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ib3hfX29wZW4tY2FwJyk7XG5cbiAgICBjb25zdCB1a0xlbmcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdWtMZW5nJyk7XG4gICAgY29uc3QgZW5MZW5nID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2VuTGVuZycpO1xuXG4gICAgY29uc3QgdG9nZ2xlQ2xhc3NlcyA9IChlbGVtZW50cywgY2xhc3NOYW1lKSA9PiBlbGVtZW50cy5mb3JFYWNoKGVsID0+IGVsLmNsYXNzTGlzdC50b2dnbGUoYCR7Y2xhc3NOYW1lfWApKTtcbiAgICBjb25zdCB0b2dnbGVUcmFuc2xhdGVzID0gKGVsZW1lbnRzLCBkYXRhQXR0cikgPT4gZWxlbWVudHMuZm9yRWFjaChlbCA9PiB7XG4gICAgICAgIGVsLnNldEF0dHJpYnV0ZSgnZGF0YS10cmFuc2xhdGUnLCBgJHtkYXRhQXR0cn1gKVxuICAgICAgICBlbC5pbm5lckhUTUwgPSBpMThuRGF0YVtkYXRhQXR0cl0gfHwgJyotLS0tTkVFRCBUTyBCRSBUUkFOU0xBVEVELS0tLSogICBrZXk6ICAnICsgZGF0YUF0dHI7XG4gICAgICAgIGVsLnJlbW92ZUF0dHJpYnV0ZSgnZGF0YS10cmFuc2xhdGUnKTtcbiAgICB9KTtcblxuICAgIGxldCBsb2FkZXJCdG4gPSBmYWxzZVxuXG4gICAgLy8gbGV0IGxvY2FsZSA9IFwiZW5cIlxuICAgIGxldCBsb2NhbGUgPSBzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKFwibG9jYWxlXCIpIHx8IFwidWtcIlxuXG4gICAgaWYgKHVrTGVuZykgbG9jYWxlID0gJ3VrJztcbiAgICBpZiAoZW5MZW5nKSBsb2NhbGUgPSAnZW4nO1xuXG4gICAgbGV0IGRlYnVnID0gZmFsc2VcblxuICAgIGlmIChkZWJ1ZykgaGlkZUxvYWRlcigpXG5cbiAgICBsZXQgaTE4bkRhdGEgPSB7fTtcbiAgICBjb25zdCB0cmFuc2xhdGVTdGF0ZSA9IHRydWU7XG4gICAgLy8gbGV0IHVzZXJJZCA9IG51bGw7XG4gICAgbGV0IHVzZXJJZCA9IE51bWJlcihzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKFwidXNlcklkXCIpKSA/PyBudWxsXG5cbiAgICBmdW5jdGlvbiBjcmVhdGVHbGl0Y2hMYXllcnMobGF5ZXJzID0gMywgY29udGFpbmVyID0gbnVsbCkge1xuICAgICAgICBjb25zdCB3cmFwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHdyYXAuY2xhc3NOYW1lID0gJ2dsaXRjaF9fbGF5ZXJzJztcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsYXllcnM7IGkrKykge1xuICAgICAgICAgICAgY29uc3QgbGF5ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIGxheWVyLmNsYXNzTmFtZSA9ICdnbGl0Y2hfX2xheWVyJztcbiAgICAgICAgICAgIHdyYXAuYXBwZW5kQ2hpbGQobGF5ZXIpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjb250YWluZXIpIHtcbiAgICAgICAgICAgIGNvbnN0IHRhcmdldCA9IHR5cGVvZiBjb250YWluZXIgPT09ICdzdHJpbmcnID8gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcihjb250YWluZXIpIDogY29udGFpbmVyO1xuICAgICAgICAgICAgaWYgKHRhcmdldCkgdGFyZ2V0LmFwcGVuZENoaWxkKHdyYXApO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB3cmFwO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHJlbW92ZUdsaXRjaExheWVycyhjb250YWluZXIpIHtcbiAgICAgICAgY29uc3QgdGFyZ2V0ID0gdHlwZW9mIGNvbnRhaW5lciA9PT0gJ3N0cmluZycgPyBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGNvbnRhaW5lcikgOiBjb250YWluZXI7XG4gICAgICAgIGlmICghdGFyZ2V0KSByZXR1cm47XG4gICAgICAgIGNvbnN0IGdsaXRjaCA9IHRhcmdldC5xdWVyeVNlbGVjdG9yKCcuZ2xpdGNoX19sYXllcnMnKTtcbiAgICAgICAgaWYgKGdsaXRjaCkgZ2xpdGNoLnJlbW92ZSgpO1xuICAgIH1cblxuICAgIGNvbnN0IHJlcXVlc3QgPSBmdW5jdGlvbiAobGluaywgZXh0cmFPcHRpb25zKSB7XG4gICAgICAgIHJldHVybiBmZXRjaChhcGlVUkwgKyBsaW5rLCB7XG4gICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICAgJ0FjY2VwdCc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgLi4uKGV4dHJhT3B0aW9ucyB8fCB7fSlcbiAgICAgICAgfSlcbiAgICAgICAgICAgIC50aGVuKHJlcyA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKCFyZXMub2spIHRocm93IG5ldyBFcnJvcignQVBJIGVycm9yJyk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlcy5qc29uKCk7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmNhdGNoKGVyciA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcignQVBJIHJlcXVlc3QgZmFpbGVkOicsIGVycik7XG5cbiAgICAgICAgICAgICAgICAvLyByZXBvcnRFcnJvcihlcnIpO1xuICAgICAgICAgICAgICAgIC8vXG4gICAgICAgICAgICAgICAgLy8gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZhdi1wYWdlJykuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgICAgICAgICAvLyBpZiAod2luZG93LmxvY2F0aW9uLmhyZWYuc3RhcnRzV2l0aChcImh0dHBzOi8vd3d3LmZhdmJldC5oci9cIikpIHtcbiAgICAgICAgICAgICAgICAvLyAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSAnL3Byb21vY2lqZS9wcm9tb2NpamEvc3R1Yi8nO1xuICAgICAgICAgICAgICAgIC8vIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgLy8gICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gJy9wcm9tb3MvcHJvbW8vc3R1Yi8nO1xuICAgICAgICAgICAgICAgIC8vIH1cblxuICAgICAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChlcnIpO1xuICAgICAgICAgICAgfSk7XG5cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBoaWRlTG9hZGVyKCl7XG4gICAgICAgIGxvYWRlci5jbGFzc0xpc3QuYWRkKFwiaGlkZVwiKVxuICAgICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLm92ZXJmbG93ID0gXCJhdXRvXCJcbiAgICAgICAgbWFpblBhZ2UuY2xhc3NMaXN0LnJlbW92ZShcImxvYWRpbmdcIilcbiAgICB9XG5cbiAgICBhc3luYyBmdW5jdGlvbiBpbml0KCkge1xuICAgICAgICBsZXQgYXR0ZW1wdHMgPSAwO1xuICAgICAgICBjb25zdCBtYXhBdHRlbXB0cyA9IDIwO1xuICAgICAgICBjb25zdCBhdHRlbXB0SW50ZXJ2YWwgPSA1MDtcblxuICAgICAgICBmdW5jdGlvbiB0cnlEZXRlY3RVc2VySWQoKSB7XG4gICAgICAgICAgICBpZiAod2luZG93LnN0b3JlKSB7XG4gICAgICAgICAgICAgICAgY29uc3Qgc3RhdGUgPSB3aW5kb3cuc3RvcmUuZ2V0U3RhdGUoKTtcbiAgICAgICAgICAgICAgICB1c2VySWQgPSBzdGF0ZS5hdXRoLmlzQXV0aG9yaXplZCAmJiBzdGF0ZS5hdXRoLmlkIHx8ICcnO1xuICAgICAgICAgICAgfSBlbHNlIGlmICh3aW5kb3cuZ191c2VyX2lkKSB7XG4gICAgICAgICAgICAgICAgdXNlcklkID0gd2luZG93LmdfdXNlcl9pZDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG5cblxuXG5cbiAgICAgICAgZnVuY3Rpb24gcXVpY2tDaGVja0FuZFJlbmRlcigpIHtcbiAgICAgICAgICAgIHNldFRpbWVvdXQoaGlkZUxvYWRlciwgNjAwKTtcbiAgICAgICAgICAgIGJveC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGluaXRPcGVuQm94KTtcbiAgICAgICAgICAgIC8vIGNoZWNrVXNlckF1dGgoKVxuICAgICAgICAgICAgLy8gICAgIC50aGVuKGxvYWRVc2VycylcbiAgICAgICAgICAgIC8vICAgICAudGhlbigoKSA9PntcbiAgICAgICAgICAgIC8vICAgICAgICAgc2V0VGltZW91dChoaWRlTG9hZGVyLCAzMDApO1xuICAgICAgICAgICAgLy8gICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnRhYmxlX190YWJzLWl0ZW1cIikuZm9yRWFjaCgodGFiLCBpKSA9PntcbiAgICAgICAgICAgIC8vICAgICAgICAgICAgIHRhYi5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcbiAgICAgICAgICAgIC8vICAgICAgICAgICAgIGlmKGkgPT09IGFjdGl2ZVdlZWsgLSAxKSB0YWIuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XG4gICAgICAgICAgICAvLyAgICAgICAgIH0pXG4gICAgICAgICAgICAvLyAgICAgICAgIC8vIHJlbmRlclVzZXJzKGFjdGl2ZVdlZWssIHRhYmxlRGF0YSk7XG4gICAgICAgICAgICAvLyAgICAgICAgIHBhcnRpY2lwYXRlQnRucy5mb3JFYWNoKGJ0biA9PiBidG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBwYXJ0aWNpcGF0ZSkpO1xuICAgICAgICAgICAgLy8gICAgIH0pXG5cblxuICAgICAgICAgICAgLy8gc2hha2VVbnRpbChib3gsIGdldFVzZXJQcml6ZSwgbG9nb0JveCkudGhlbihyZXMgPT57XG4gICAgICAgICAgICAvLyAgICAgc2hvd1ByZWxvYWRlcihyZXMpO1xuICAgICAgICAgICAgLy8gfSlcblxuICAgICAgICAgICAgdXBkYXRlU2xpZGVyKClcblxuICAgICAgICAgICAgLy8gc2hvd1ByaXplRm9yUHJlbG9hZGVyKFwicHJpemUxXCIpXG5cbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jYXJkX19pbm5lcicpLmZvckVhY2goY2FyZCA9PiB7XG4gICAgICAgICAgICAgICAgY2FyZC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY2FyZC5jbGFzc0xpc3QudG9nZ2xlKCdpcy1mbGlwcGVkJyk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcblxuXG5cbiAgICAgICAgICAgIGJ1dHRvbnNMZWZ0LmZvckVhY2goYnRuICA9PiB7XG4gICAgICAgICAgICAgICAgYnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBtb3ZlU2xpZGVyKC0xKTtcbiAgICAgICAgICAgICAgICAgICAgYnRuLnN0eWxlLnBvaW50ZXJFdmVudHMgPSAnbm9uZSc7XG4gICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4geyBidG4uc3R5bGUucG9pbnRlckV2ZW50cyA9ICdpbml0aWFsJzsgfSwgMTAwMCk7XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICBidXR0b25zUmlnaHQuZm9yRWFjaChidG4gID0+IHtcbiAgICAgICAgICAgICAgICBidG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIG1vdmVTbGlkZXIoMSk7XG4gICAgICAgICAgICAgICAgICAgIGJ0bi5zdHlsZS5wb2ludGVyRXZlbnRzID0gJ25vbmUnO1xuICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHsgYnRuLnN0eWxlLnBvaW50ZXJFdmVudHMgPSAnaW5pdGlhbCc7IH0sIDEwMDApO1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9KVxuXG4gICAgICAgICAgICBzbGlkZXIuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgaGFuZGxlU3RhcnQpO1xuICAgICAgICAgICAgc2xpZGVyLmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoc3RhcnQnLCBoYW5kbGVTdGFydCk7XG5cbiAgICAgICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIGhhbmRsZU1vdmUpO1xuICAgICAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2htb3ZlJywgaGFuZGxlTW92ZSk7XG5cbiAgICAgICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCBoYW5kbGVFbmQpO1xuICAgICAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hlbmQnLCBoYW5kbGVFbmQpO1xuXG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucG9wdXBzJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IG9wZW5Qb3B1cEVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBvcHVwLmFjdGl2ZScpO1xuICAgICAgICAgICAgICAgIGlmKG9wZW5Qb3B1cEVsKXtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgY29udGVudFdyYXAgPSBvcGVuUG9wdXBFbC5xdWVyeVNlbGVjdG9yKCcucG9wdXBfX3dyYXAnKTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgY2xvc2VCdG4gPSBvcGVuUG9wdXBFbC5xdWVyeVNlbGVjdG9yKCcuY2FyZF9fY2xvc2UnKSA/PyBvcGVuUG9wdXBFbC5xdWVyeVNlbGVjdG9yKCcucG9wdXBfX2Nsb3NlJyk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChjb250ZW50V3JhcCAmJiAhY29udGVudFdyYXAuY29udGFpbnMoZS50YXJnZXQpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjbG9zZUFsbFBvcHVwcygpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGlmKGUudGFyZ2V0ID09PSBjbG9zZUJ0bikge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2xvc2VBbGxQb3B1cHMoKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGNhcmRQb3B1cEljb25zLmZvckVhY2goaWNvbiA9PiB7XG4gICAgICAgICAgICAgICAgaWNvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uICgpe1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBkYXRhQXR0ciA9IHRoaXMuZ2V0QXR0cmlidXRlKFwiZGF0YS1wb3B1cFwiKVxuICAgICAgICAgICAgICAgICAgICBvcGVuUG9wdXBCeUF0dHIoZGF0YUF0dHIpO1xuICAgICAgICAgICAgICAgIH0pXG5cbiAgICAgICAgICAgIH0pXG5cbiAgICAgICAgICAgIH1cblxuICAgICAgICBjb25zdCB3YWl0Rm9yVXNlcklkID0gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGludGVydmFsID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRyeURldGVjdFVzZXJJZCgpO1xuICAgICAgICAgICAgICAgIGlmICh1c2VySWQgfHwgYXR0ZW1wdHMgPj0gbWF4QXR0ZW1wdHMpIHtcbiAgICAgICAgICAgICAgICAgICAgcXVpY2tDaGVja0FuZFJlbmRlcigpO1xuICAgICAgICAgICAgICAgICAgICBjbGVhckludGVydmFsKGludGVydmFsKTtcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBhdHRlbXB0cysrO1xuICAgICAgICAgICAgfSwgYXR0ZW1wdEludGVydmFsKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgYXdhaXQgd2FpdEZvclVzZXJJZDtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBsb2FkVHJhbnNsYXRpb25zKCkge1xuICAgICAgICByZXR1cm4gcmVxdWVzdChgL25ldy10cmFuc2xhdGVzLyR7bG9jYWxlfT9ub2NhY2hlPTFgKVxuICAgICAgICAgICAgLnRoZW4oanNvbiA9PiB7XG4gICAgICAgICAgICAgICAgaTE4bkRhdGEgPSBqc29uO1xuICAgICAgICAgICAgICAgIHRyYW5zbGF0ZSgpO1xuICAgICAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLy8gZnVuY3Rpb24gc2hvd1ByaXplQnlEYXRhQXR0cihkYXRhQXR0cikge1xuICAgIC8vICAgICBjb25zdCBjYXJkcyA9IHByZWxvYWRlclByaXplLnF1ZXJ5U2VsZWN0b3JBbGwoJy5jYXJkX19pbm5lcicpO1xuICAgIC8vXG4gICAgLy8gICAgIGNhcmRzLmZvckVhY2goY2FyZCA9PiB7XG4gICAgLy8gICAgICAgICBjb25zdCBiYWNrID0gY2FyZC5xdWVyeVNlbGVjdG9yQWxsKCcuY2FyZF9fYmFjaycpXG4gICAgLy8gICAgICAgICBiYWNrLmZvckVhY2goaXRlbSA9PiB7XG4gICAgLy8gICAgICAgICAgICAgaXRlbS5jbGFzc0xpc3QuYWRkKCdoaWRlJyk7XG4gICAgLy8gICAgICAgICAgICAgaWYoaXRlbS5nZXRBdHRyaWJ1dGUoXCJkYXRhLXByaXplXCIpID09PSBkYXRhQXR0cikge1xuICAgIC8vICAgICAgICAgICAgICAgICBpdGVtLmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRlXCIpXG4gICAgLy8gICAgICAgICAgICAgfVxuICAgIC8vICAgICAgICAgfSlcbiAgICAvL1xuICAgIC8vXG4gICAgLy8gICAgIH0pXG4gICAgLy9cbiAgICAvLyB9XG5cblxuICAgIGZ1bmN0aW9uIGNsZWFyUHJlbG9hZGVyU3RhdGUoKXtcbiAgICAgICAgY29uc3QgYWxsQ2FyZHNJbm5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jYXJkX19pbm5lcicpLFxuICAgICAgICAgICAgYWxsQ2FyZEJhY2sgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY2FyZF9fYmFjaycpLFxuICAgICAgICAgICAgcG9wdXBQcmVsb2FkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucG9wdXAtLXByZWxvYWRlcicpO1xuXG4gICAgICAgIGFsbENhcmRzSW5uZXIuZm9yRWFjaChjYXJkID0+IHtcbiAgICAgICAgICAgIGNhcmQuY2xhc3NMaXN0LnJlbW92ZSgnaXMtZmxpcHBlZCcpO1xuICAgICAgICAgICAgY2FyZC5jbGFzc0xpc3QuYWRkKCdpcy1oaWRlJyk7XG4gICAgICAgIH0pXG4gICAgICAgIHBvcHVwUHJlbG9hZGVyLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xuXG4gICAgICAgIGFsbENhcmRCYWNrLmZvckVhY2goKGNhcmQpID0+IHtcbiAgICAgICAgICAgIGNhcmQuY2xhc3NMaXN0LmFkZCgnaGlkZScpO1xuICAgICAgICB9KVxuXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gc2hvd1ByZWxvYWRlcihwcml6ZSkge1xuICAgICAgICAgICAgb3BlblBvcHVwQnlBdHRyKCdwcmVsb2FkZXInKVxuICAgICAgICAgICAgc2hvd1ByaXplQnlEYXRhQXR0cihwcml6ZSlcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHByZWxvYWRlckNhcmRzLmZvckVhY2goKGNhcmQsIGkpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PntcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhcmQuY2xhc3NMaXN0LnJlbW92ZSgnaXMtaGlkZScpO1xuICAgICAgICAgICAgICAgICAgICB9LCBpICogMjUwKVxuICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+e1xuICAgICAgICAgICAgICAgICAgICAgICAgcHJlbG9hZGVyUHJpemUuY2xhc3NMaXN0LmFkZCgnaXMtZmxpcHBlZCcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PntcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGVhclByZWxvYWRlclN0YXRlKClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcGVuUG9wdXBCeUF0dHIocHJpemUpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSwgODAwKVxuICAgICAgICAgICAgICAgICAgICAgICAgfSwgMjAwMClcbiAgICAgICAgICAgICAgICAgICAgfSwgMTI1MClcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfSwgMjAwKTtcbiAgICB9XG4gICAgLy8gc2hvd1ByZWxvYWRlcigpO1xuXG4gICAgZnVuY3Rpb24gZ2V0VXNlclByaXplKCkge1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UocmVzb2x2ZSA9PiB7XG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHJlc29sdmUoJ3ByaXplMScpLCAxMDAwKTsgLy8g0YLRg9GCINC+0YLRgNC40LzRg9GU0Lwg0L/RgNC40Lcg0Y/QutC40Lkg0LLQuNC/0LDQsiDRjtC30LXRgNGDXG4gICAgICAgIH0pO1xuICAgIH1cblxuXG4gICAgZnVuY3Rpb24gc2hha2VVbnRpbChlbCwgd2FpdFByb21pc2UsIGxvZ28sIG9wdHMgPSB7fSkge1xuICAgICAgICBjb25zdCB7IGFtcGxpdHVkZSA9IDQsIGR1cmF0aW9uID0gNTAwLCBheGlzID0gJ3gnIH0gPSBvcHRzO1xuICAgICAgICBsZXQgc3RvcDtcblxuICAgICAgICBpZiAobG9nbyl7XG4gICAgICAgICAgICBsb2dvLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGVsLmFuaW1hdGUpIHtcbiAgICAgICAgICAgIGNvbnN0IGtleWZyYW1lcyA9IGF4aXMgPT09ICd4J1xuICAgICAgICAgICAgICAgID8gW3sgdHJhbnNmb3JtOiAndHJhbnNsYXRlWCgwKScgfSwgeyB0cmFuc2Zvcm06IGB0cmFuc2xhdGVYKC0ke2FtcGxpdHVkZX1weClgIH0sIHsgdHJhbnNmb3JtOiBgdHJhbnNsYXRlWCgke2FtcGxpdHVkZX1weClgIH0sIHsgdHJhbnNmb3JtOiAndHJhbnNsYXRlWCgwKScgfV1cbiAgICAgICAgICAgICAgICA6IFt7IHRyYW5zZm9ybTogJ3RyYW5zbGF0ZVkoMCknIH0sIHsgdHJhbnNmb3JtOiBgdHJhbnNsYXRlWSgtJHthbXBsaXR1ZGV9cHgpYCB9LCB7IHRyYW5zZm9ybTogYHRyYW5zbGF0ZVkoJHthbXBsaXR1ZGV9cHgpYCB9LCB7IHRyYW5zZm9ybTogJ3RyYW5zbGF0ZVkoMCknIH1dO1xuICAgICAgICAgICAgY29uc3QgYW5pbSA9IGVsLmFuaW1hdGUoa2V5ZnJhbWVzLCB7IGR1cmF0aW9uLCBpdGVyYXRpb25zOiBJbmZpbml0eSwgZWFzaW5nOiAnbGluZWFyJyB9KTtcbiAgICAgICAgICAgIHN0b3AgPSAoKSA9PiB7XG4gICAgICAgICAgICAgICAgYW5pbS5jYW5jZWwoKTtcbiAgICAgICAgICAgICAgICBlbC5zdHlsZS50cmFuc2Zvcm0gPSAnJztcbiAgICAgICAgICAgICAgICBpZiAobG9nbyl7XG4gICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT57XG4gICAgICAgICAgICAgICAgICAgICAgICBsb2dvLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xuICAgICAgICAgICAgICAgICAgICB9LCA0MDAwKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH07XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBsZXQgc3RhcnQgPSBudWxsLCByYWZJZCA9IDAsIHJ1bm5pbmcgPSB0cnVlO1xuICAgICAgICAgICAgY29uc3QgbG9vcCA9IHQgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChzdGFydCA9PT0gbnVsbCkgc3RhcnQgPSB0O1xuICAgICAgICAgICAgICAgIGNvbnN0IHBoYXNlID0gKCh0IC0gc3RhcnQpICUgZHVyYXRpb24pIC8gZHVyYXRpb24gKiBNYXRoLlBJICogMjtcbiAgICAgICAgICAgICAgICBjb25zdCBkZWx0YSA9IE1hdGguc2luKHBoYXNlKSAqIGFtcGxpdHVkZTtcbiAgICAgICAgICAgICAgICBlbC5zdHlsZS50cmFuc2Zvcm0gPSBheGlzID09PSAneCcgPyBgdHJhbnNsYXRlWCgke2RlbHRhfXB4KWAgOiBgdHJhbnNsYXRlWSgke2RlbHRhfXB4KWA7XG4gICAgICAgICAgICAgICAgaWYgKHJ1bm5pbmcpIHJhZklkID0gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGxvb3ApO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHJhZklkID0gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGxvb3ApO1xuICAgICAgICAgICAgc3RvcCA9ICgpID0+IHtcbiAgICAgICAgICAgICAgICBydW5uaW5nID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgY2FuY2VsQW5pbWF0aW9uRnJhbWUocmFmSWQpOyBlbC5zdHlsZS50cmFuc2Zvcm0gPSAnJztcbiAgICAgICAgICAgICAgICBpZiAobG9nbyl7XG4gICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT57XG4gICAgICAgICAgICAgICAgICAgICAgICBsb2dvLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xuICAgICAgICAgICAgICAgICAgICB9LCA0MDAwKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHdhaXRQcm9taXNlKS5maW5hbGx5KCgpID0+e1xuICAgICAgICAgICAgc3RvcCgpXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNoZWNrVXNlckF1dGgoKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKHVzZXJJZClcbiAgICAgICAgaWYgKHVzZXJJZCkge1xuICAgICAgICAgICAgZm9yIChjb25zdCB1bmF1dGhNZXMgb2YgdW5hdXRoTXNncykge1xuICAgICAgICAgICAgICAgIHVuYXV0aE1lcy5jbGFzc0xpc3QuYWRkKCdoaWRlJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gcmVxdWVzdChgL2ZhdnVzZXIvJHt1c2VySWR9P25vY2FjaGU9MWApXG4gICAgICAgICAgICAgICAgLnRoZW4ocmVzID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHJlcy51c2VyaWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhcnRpY2lwYXRlQnRucy5mb3JFYWNoKGl0ZW0gPT4gaXRlbS5jbGFzc0xpc3QuYWRkKCdoaWRlJykpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVkaXJlY3RCdG5zLmZvckVhY2goaXRlbSA9PiBpdGVtLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGUnKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpc1ZlcmlmaWVkVXNlciA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhpc1ZlcmlmaWVkVXNlcilcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhcnRpY2lwYXRlQnRucy5mb3JFYWNoKGl0ZW0gPT4gaXRlbS5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlJykpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVkaXJlY3RCdG5zLmZvckVhY2goaXRlbSA9PiBpdGVtLmNsYXNzTGlzdC5hZGQoJ2hpZGUnKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpc1ZlcmlmaWVkVXNlciA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZm9yIChsZXQgcmVkaXJlY3RCdG4gb2YgcmVkaXJlY3RCdG5zKSB7XG4gICAgICAgICAgICAgICAgcmVkaXJlY3RCdG4uY2xhc3NMaXN0LmFkZCgnaGlkZScpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZm9yIChsZXQgcGFydGljaXBhdGVCdG4gb2YgcGFydGljaXBhdGVCdG5zKSB7XG4gICAgICAgICAgICAgICAgcGFydGljaXBhdGVCdG4uY2xhc3NMaXN0LmFkZCgnaGlkZScpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZm9yIChjb25zdCB1bmF1dGhNZXMgb2YgdW5hdXRoTXNncykge1xuICAgICAgICAgICAgICAgIHVuYXV0aE1lcy5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlJyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoZmFsc2UpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcmVwb3J0RXJyb3IoZXJyKSB7XG4gICAgICAgIGNvbnN0IHJlcG9ydERhdGEgPSB7XG4gICAgICAgICAgICBvcmlnaW46IHdpbmRvdy5sb2NhdGlvbi5ocmVmLFxuICAgICAgICAgICAgdXNlcmlkOiB1c2VySWQsXG4gICAgICAgICAgICBlcnJvclRleHQ6IGVycj8uZXJyb3IgfHwgZXJyPy50ZXh0IHx8IGVycj8ubWVzc2FnZSB8fCAnVW5rbm93biBlcnJvcicsXG4gICAgICAgICAgICB0eXBlOiBlcnI/Lm5hbWUgfHwgJ1Vua25vd25FcnJvcicsXG4gICAgICAgICAgICBzdGFjazogZXJyPy5zdGFjayB8fCAnJ1xuICAgICAgICB9O1xuXG4gICAgICAgIGZldGNoKCdodHRwczovL2Zhdi1wcm9tLmNvbS9hcGktY21zL3JlcG9ydHMvYWRkJywge1xuICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHJlcG9ydERhdGEpXG4gICAgICAgIH0pLmNhdGNoKGNvbnNvbGUud2Fybik7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gdHJhbnNsYXRlKCkge1xuICAgICAgICBjb25zdCBlbGVtcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLXRyYW5zbGF0ZV0nKVxuICAgICAgICBpZiAoZWxlbXMgJiYgZWxlbXMubGVuZ3RoKSB7XG4gICAgICAgICAgICBpZih0cmFuc2xhdGVTdGF0ZSl7XG4gICAgICAgICAgICAgICAgZWxlbXMuZm9yRWFjaChlbGVtID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qga2V5ID0gZWxlbS5nZXRBdHRyaWJ1dGUoJ2RhdGEtdHJhbnNsYXRlJyk7XG4gICAgICAgICAgICAgICAgICAgIGVsZW0uaW5uZXJIVE1MID0gaTE4bkRhdGFba2V5XSB8fCAnKi0tLS1ORUVEIFRPIEJFIFRSQU5TTEFURUQtLS0tKiAgIGtleTogICcgKyBrZXk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChpMThuRGF0YVtrZXldKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBlbGVtLnJlbW92ZUF0dHJpYnV0ZSgnZGF0YS10cmFuc2xhdGUnKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcInRyYW5zbGF0aW9uIHdvcmtzIVwiKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChsb2NhbGUgPT09ICdlbicpIHtcbiAgICAgICAgICAgIG1haW5QYWdlLmNsYXNzTGlzdC5hZGQoJ2VuJyk7XG4gICAgICAgIH1cbiAgICAgICAgcmVmcmVzaExvY2FsaXplZENsYXNzKG1haW5QYWdlKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiByZWZyZXNoTG9jYWxpemVkQ2xhc3MoZWxlbWVudCkge1xuICAgICAgICBjb25zdCBiYXNlQ3NzQ2xhc3MgPSBcIlwiXG4gICAgICAgIGlmICghZWxlbWVudCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGZvciAoY29uc3QgbGFuZyBvZiBbJ3VrJywgJ2VuJ10pIHtcbiAgICAgICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShiYXNlQ3NzQ2xhc3MgKyBsYW5nKTtcbiAgICAgICAgfVxuICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoYmFzZUNzc0NsYXNzICsgbG9jYWxlKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiByZW5kZXJVc2Vycyh3ZWVrTnVtLCB1c2VyRGF0YSA9IFtdKSB7XG4gICAgICAgIHdlZWtOdW0gPSBOdW1iZXIod2Vla051bSk7XG4gICAgICAgIHVzZXJEYXRhID0gdXNlckRhdGEuZmluZCh3ZWVrID0+IHtcbiAgICAgICAgICAgIHJldHVybiB3ZWVrLndlZWsgPT09IHdlZWtOdW1cbiAgICAgICAgfSkudXNlcnM7XG5cbiAgICAgICAgY29uc29sZS5sb2codXNlckRhdGEpO1xuXG4gICAgICAgIGNvbnN0IGN1cnJlbnRVc2VyID0gdXNlckRhdGEuZmluZCh1c2VyID0+IHVzZXIudXNlcmlkID09PSB1c2VySWQpO1xuXG4gICAgICAgIGNvbnNvbGUubG9nKHVzZXJJZClcbiAgICAgICAgY29uc29sZS5sb2coY3VycmVudFVzZXIpXG4gICAgICAgIGNvbnNvbGUubG9nKGlzVmVyaWZpZWRVc2VyKVxuXG4gICAgICAgIGlmKHVzZXJJZCAmJiAhY3VycmVudFVzZXIgJiYgaXNWZXJpZmllZFVzZXIpe1xuICAgICAgICAgICAgdXNlckRhdGEgPSBbLi4udXNlckRhdGEsIHt1c2VyaWQ6IHVzZXJJZCwgcG9pbnRzOiAwfV1cbiAgICAgICAgfVxuICAgICAgICBjb25zb2xlLmxvZyh1c2VyRGF0YSk7XG5cbiAgICAgICAgcG9wdWxhdGVVc2Vyc1RhYmxlKHVzZXJEYXRhLCB1c2VySWQsIHdlZWtOdW0sIGN1cnJlbnRVc2VyLCBpc1ZlcmlmaWVkVXNlcik7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcG9wdWxhdGVVc2Vyc1RhYmxlKHVzZXJzLCBjdXJyZW50VXNlcklkLCB3ZWVrLCBjdXJyZW50VXNlciwgaXNWZXJpZmllZFVzZXIpIHtcblxuICAgICAgICBjb25zb2xlLmxvZyh1c2Vycyk7XG4gICAgICAgIHJlc3VsdHNUYWJsZS5pbm5lckhUTUwgPSAnJztcbiAgICAgICAgcmVzdWx0c1RhYmxlT3RoZXIuaW5uZXJIVE1MID0gJyc7XG4gICAgICAgIGlmICghdXNlcnM/Lmxlbmd0aCkgcmV0dXJuO1xuXG4gICAgICAgIGNvbnN0IGlzVG9wQ3VycmVudFVzZXIgPSBjdXJyZW50VXNlciAmJiB1c2Vycy5zbGljZSgwLCAxMCkuc29tZSh1c2VyID0+IHVzZXIudXNlcmlkID09PSBjdXJyZW50VXNlcklkKTtcblxuICAgICAgICBjb25zdCB0b3BVc2Vyc0xlbmd0aCA9ICF1c2VySWQgfHwgaXNUb3BDdXJyZW50VXNlciAgPyAxMyA6IDEwO1xuXG4gICAgICAgIGNvbnN0IHRvcFVzZXJzID0gdXNlcnMuc2xpY2UoMCwgdG9wVXNlcnNMZW5ndGgpO1xuXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHVzZXJzKTtcbiAgICAgICAgdG9wVXNlcnMuZm9yRWFjaCh1c2VyID0+IHtcbiAgICAgICAgICAgIGRpc3BsYXlVc2VyKHVzZXIsIHVzZXIudXNlcmlkID09PSBjdXJyZW50VXNlcklkLCByZXN1bHRzVGFibGUsIHRvcFVzZXJzLCBpc1RvcEN1cnJlbnRVc2VyLCB3ZWVrKTtcbiAgICAgICAgfSk7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGlzVG9wQ3VycmVudFVzZXIpXG4gICAgICAgIGNvbnNvbGUubG9nKGlzVmVyaWZpZWRVc2VyKVxuICAgICAgICBpZihpc1ZlcmlmaWVkVXNlciAmJiAhY3VycmVudFVzZXIpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCd1c2VyIHZlcmlmaWVkJyk7XG4gICAgICAgICAgICBkaXNwbGF5VXNlcihjdXJyZW50VXNlciwgdHJ1ZSwgcmVzdWx0c1RhYmxlT3RoZXIsIHVzZXJzLCBmYWxzZSwgd2Vlayk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFpc1RvcEN1cnJlbnRVc2VyICYmIGN1cnJlbnRVc2VyKSB7XG4gICAgICAgICAgICBpc1ZlcmlmaWVkVXNlciA9IGZhbHNlO1xuICAgICAgICAgICAgZGlzcGxheVVzZXIoY3VycmVudFVzZXIsIHRydWUsIHJlc3VsdHNUYWJsZU90aGVyLCB1c2VycywgZmFsc2UsIHdlZWspO1xuICAgICAgICB9XG5cblxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGRpc3BsYXlVc2VyKHVzZXIsIGlzQ3VycmVudFVzZXIsIHRhYmxlLCB1c2VycywgaXNUb3BDdXJyZW50VXNlciwgd2Vlaykge1xuXG4gICAgICAgIGNvbnN0IHJlbmRlclJvdyA9ICh1c2VyRGF0YSwgb3B0aW9ucyA9IHt9KSA9PiB7XG4gICAgICAgICAgICBjb25zdCB7IGhpZ2hsaWdodCA9IGZhbHNlLCBuZWlnaGJvciA9IGZhbHNlIH0gPSBvcHRpb25zO1xuICAgICAgICAgICAgY29uc3QgdXNlclJvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgdXNlclJvdy5jbGFzc0xpc3QuYWRkKCd0YWJsZV9fcm93Jyk7XG5cbiAgICAgICAgICAgIGNvbnN0IHVzZXJQbGFjZSA9IHVzZXJzLmluZGV4T2YodXNlckRhdGEpICsgMTtcbiAgICAgICAgICAgIGNvbnN0IHByaXplS2V5ID0gZGVidWcgPyBudWxsIDogZ2V0UHJpemVUcmFuc2xhdGlvbktleSh1c2VyUGxhY2UsIHdlZWspO1xuXG4gICAgICAgICAgICBpZiAodXNlclBsYWNlIDw9IDMpIHtcbiAgICAgICAgICAgICAgICB1c2VyUm93LmNsYXNzTGlzdC5hZGQoYHBsYWNlJHt1c2VyUGxhY2V9YCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChoaWdobGlnaHQgfHwgaXNDdXJyZW50VXNlciAmJiAhbmVpZ2hib3IpIHtcbiAgICAgICAgICAgICAgICB1c2VyUm93LmNsYXNzTGlzdC5hZGQoJ3lvdScpO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChuZWlnaGJvcikge1xuICAgICAgICAgICAgICAgIHVzZXJSb3cuY2xhc3NMaXN0LmFkZCgnX25laWdoYm9yJyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHVzZXJSb3cuaW5uZXJIVE1MID0gYFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRhYmxlX19yb3ctaXRlbVwiPlxuICAgICAgICAgICAgICAgICR7dXNlclBsYWNlIDwgMTAgPyAnMCcgKyB1c2VyUGxhY2UgOiB1c2VyUGxhY2V9XG4gICAgICAgICAgICAgICAgJHtpc0N1cnJlbnRVc2VyICYmICFuZWlnaGJvciA/ICc8c3BhbiBjbGFzcz1cInlvdVwiPicgKyB0cmFuc2xhdGVLZXkoXCJ5b3VcIikgKyAnPC9zcGFuPicgOiAnJ31cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRhYmxlX19yb3ctaXRlbVwiPlxuICAgICAgICAgICAgICAgICR7aXNDdXJyZW50VXNlciAmJiAhbmVpZ2hib3IgPyB1c2VyRGF0YS51c2VyaWQgOiBtYXNrVXNlcklkKHVzZXJEYXRhLnVzZXJpZCl9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0YWJsZV9fcm93LWl0ZW1cIj5cbiAgICAgICAgICAgICAgICAke051bWJlcih1c2VyRGF0YS5wb2ludHMpLnRvRml4ZWQoMil9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0YWJsZV9fcm93LWl0ZW1cIj5cbiAgICAgICAgICAgICAgICAke3ByaXplS2V5ID8gdHJhbnNsYXRlS2V5KHByaXplS2V5KSA6ICcgLSAnfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIGA7XG5cbiAgICAgICAgICAgIHRhYmxlLmFwcGVuZCh1c2VyUm93KTtcbiAgICAgICAgfTtcbiAgICAgICAgaWYgKGlzQ3VycmVudFVzZXIgJiYgIWlzVG9wQ3VycmVudFVzZXIpIHtcbiAgICAgICAgICAgIGNvbnN0IGluZGV4ID0gdXNlcnMuaW5kZXhPZih1c2VyKTtcbiAgICAgICAgICAgIGlmICh1c2Vyc1tpbmRleCAtIDFdKSB7XG4gICAgICAgICAgICAgICAgcmVuZGVyUm93KHVzZXJzW2luZGV4IC0gMV0sIHsgbmVpZ2hib3I6IHRydWUgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZW5kZXJSb3codXNlciwgeyBoaWdobGlnaHQ6IHRydWUgfSk7XG4gICAgICAgICAgICBpZiAodXNlcnNbaW5kZXggKyAxXSkge1xuICAgICAgICAgICAgICAgIHJlbmRlclJvdyh1c2Vyc1tpbmRleCArIDFdLCB7IG5laWdoYm9yOiB0cnVlIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmVuZGVyUm93KHVzZXIpO1xuICAgICAgICB9XG4gICAgfVxuXG5cbiAgICBmdW5jdGlvbiB0cmFuc2xhdGVLZXkoa2V5LCBkZWZhdWx0VmFsdWUpIHtcbiAgICAgICAgaWYgKCFrZXkpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBsZXQgbmVlZEtleSA9IGRlYnVnID8ga2V5IDogYCotLS0tTkVFRCBUTyBCRSBUUkFOU0xBVEVELS0tLSoga2V5OiAke2tleX1gXG5cbiAgICAgICAgZGVmYXVsdFZhbHVlID0gIG5lZWRLZXkgfHwga2V5O1xuICAgICAgICByZXR1cm4gaTE4bkRhdGFba2V5XSB8fCBkZWZhdWx0VmFsdWU7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gbWFza1VzZXJJZCh1c2VySWQpIHtcbiAgICAgICAgcmV0dXJuIFwiKipcIiArIHVzZXJJZC50b1N0cmluZygpLnNsaWNlKDIpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGdldFByaXplVHJhbnNsYXRpb25LZXkocGxhY2UsIHdlZWspIHtcbiAgICAgICAgaWYgKHBsYWNlIDw9IDMpIHJldHVybiBgcHJpemVfJHt3ZWVrfS0ke3BsYWNlfWA7XG4gICAgICAgIGlmIChwbGFjZSA8PSAxMCkgcmV0dXJuIGBwcml6ZV8ke3dlZWt9LTQtMTBgO1xuICAgICAgICBpZiAocGxhY2UgPD0gMjUpIHJldHVybiBgcHJpemVfJHt3ZWVrfS0xMS0yNWA7XG4gICAgICAgIGlmIChwbGFjZSA8PSA1MCkgcmV0dXJuIGBwcml6ZV8ke3dlZWt9LTI2LTUwYDtcbiAgICAgICAgaWYgKHBsYWNlIDw9IDc1KSByZXR1cm4gYHByaXplXyR7d2Vla30tNTEtNzVgO1xuICAgICAgICBpZiAocGxhY2UgPD0gMTAwKSByZXR1cm4gYHByaXplXyR7d2Vla30tNzYtMTAwYDtcbiAgICAgICAgaWYgKHBsYWNlIDw9IDEyNSkgcmV0dXJuIGBwcml6ZV8ke3dlZWt9LTEwMS0xMjVgO1xuICAgICAgICBpZiAocGxhY2UgPD0gMTUwKSByZXR1cm4gYHByaXplXyR7d2Vla30tMTI2LTE1MGA7XG4gICAgICAgIGlmIChwbGFjZSA8PSAxNzUpIHJldHVybiBgcHJpemVfJHt3ZWVrfS0xNTEtMTc1YDtcbiAgICAgICAgaWYgKHBsYWNlIDw9IDIwMCkgcmV0dXJuIGBwcml6ZV8ke3dlZWt9LTE3Ni0yMDBgO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHNob3dQcml6ZUJ5RGF0YUF0dHIocHJpemUpe1xuICAgICAgICBjb25zdCBhbGxQcml6ZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS1wcml6ZV0nKTtcbiAgICAgICAgY29uc3QgY3VycmVudFByaXplID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgW2RhdGEtcHJpemU9XCIke3ByaXplfVwiXWApO1xuXG4gICAgICAgIGlmIChjdXJyZW50UHJpemUgJiYgYWxsUHJpemVzKSB7XG4gICAgICAgICAgICBhbGxQcml6ZXMuZm9yRWFjaChwcml6ZSA9PiB7XG4gICAgICAgICAgICAgICAgcHJpemUuY2xhc3NMaXN0LmFkZCgnaGlkZScpO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIGN1cnJlbnRQcml6ZS5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlJyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBwYXJ0aWNpcGF0ZSgpIHtcbiAgICAgICAgaWYgKCF1c2VySWQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBwYXJhbXMgPSB7IHVzZXJpZDogdXNlcklkIH07XG4gICAgICAgIGZldGNoKGFwaVVSTCArICcvdXNlci8nLCB7XG4gICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICAgJ0FjY2VwdCc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShwYXJhbXMpXG4gICAgICAgIH0pLnRoZW4ocmVzID0+IHJlcy5qc29uKCkpXG4gICAgICAgICAgICAudGhlbihyZXMgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlcyk7XG4gICAgICAgICAgICAgICAgbG9hZGVyQnRuID0gdHJ1ZVxuICAgICAgICAgICAgICAgIHRvZ2dsZUNsYXNzZXMocGFydGljaXBhdGVCdG5zLCBcImxvYWRlclwiKVxuICAgICAgICAgICAgICAgIHRvZ2dsZVRyYW5zbGF0ZXMocGFydGljaXBhdGVCdG5zLCBcImxvYWRlclwiKVxuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT57XG4gICAgICAgICAgICAgICAgICAgIHRvZ2dsZVRyYW5zbGF0ZXMocGFydGljaXBhdGVCdG5zLCBcImxvYWRlcl9yZWFkeVwiKVxuICAgICAgICAgICAgICAgICAgICB0b2dnbGVDbGFzc2VzKHBhcnRpY2lwYXRlQnRucywgXCJkb25lXCIpXG4gICAgICAgICAgICAgICAgICAgIHRvZ2dsZUNsYXNzZXMocGFydGljaXBhdGVCdG5zLCBcImxvYWRlclwiKVxuICAgICAgICAgICAgICAgIH0sIDUwMClcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpPT57XG4gICAgICAgICAgICAgICAgICAgIGNoZWNrVXNlckF1dGgoKVxuICAgICAgICAgICAgICAgICAgICBsb2FkVXNlcnMoXCI/bm9jYWNoZT0xXCIpLnRoZW4ocmVzID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlbmRlclVzZXJzKGFjdGl2ZVdlZWssIHRhYmxlRGF0YSlcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICB9LCAxMDAwKVxuXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmNhdGNoKGVyciA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcignQVBJIHJlcXVlc3QgZmFpbGVkOicsIGVycik7XG5cbiAgICAgICAgICAgICAgICByZXBvcnRFcnJvcihlcnIpO1xuXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZhdi1wYWdlJykuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgICAgICAgICBpZiAod2luZG93LmxvY2F0aW9uLmhyZWYuc3RhcnRzV2l0aChcImh0dHBzOi8vd3d3LmZhdmJldC5oci9cIikpIHtcbiAgICAgICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSAnL3Byb21vY2lqZS9wcm9tb2NpamEvc3R1Yi8nO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gJy9wcm9tb3MvcHJvbW8vc3R1Yi8nO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChlcnIpO1xuICAgICAgICAgICAgfSk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGxvYWRVc2VycyhwYXJhbWV0cikge1xuICAgICAgICBjb25zdCByZXF1ZXN0cyA9IFtdO1xuICAgICAgICB0YWJsZURhdGEubGVuZ3RoID0gMFxuXG4gICAgICAgIGZvciAobGV0IGkgPSAxOyBpIDw9IHBlcmlvZEFtb3VudDsgaSsrKSB7XG4gICAgICAgICAgICBjb25zdCB3ZWVrID0gaTsgLy8g0LDQsdC+INCx0YPQtNGMLdGP0LrQsCDQu9C+0LPRltC60LAg0LTQu9GPINGE0L7RgNC80YPQstCw0L3QvdGPINC90L7QvNC10YDQsCDRgtC40LbQvdGPXG4gICAgICAgICAgICBjb25zdCByZXEgPSByZXF1ZXN0KGAvdXNlcnMvJHt3ZWVrfSR7cGFyYW1ldHIgPyBwYXJhbWV0ciA6IFwiXCJ9YCkudGhlbihkYXRhID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhkYXRhKTtcbiAgICAgICAgICAgICAgICB0YWJsZURhdGEucHVzaCh7IHdlZWssIHVzZXJzOiBkYXRhIH0pO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIHJlcXVlc3RzLnB1c2gocmVxKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBQcm9taXNlLmFsbChyZXF1ZXN0cylcbiAgICAgICAgLmNhdGNoKGVycm9yID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGxvYWRpbmcgdXNlcnM6JywgZXJyb3IpO1xuICAgICAgICB9KTtcbiAgICB9XG5cblxuXG4vL3NsaWRlclxuXG4gICAgY29uc3QgYnV0dG9uc1JpZ2h0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnByaXplX19tb3ZlLXJpZ2h0JyksXG4gICAgICAgIGJ1dHRvbnNMZWZ0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnByaXplX19tb3ZlLWxlZnQnKSxcbiAgICAgICAgc2xpZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNhcmRzJyksXG4gICAgICAgIGl0ZW1zID0gc2xpZGVyLnF1ZXJ5U2VsZWN0b3JBbGwoJy5jYXJkJyksXG4gICAgICAgIHRvdGFsSXRlbXMgPSBpdGVtcy5sZW5ndGgsXG4gICAgICAgIGRvdHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucHJpemVfX2RvdHMtaXRlbScpXG5cbiAgICBsZXQgY3VycmVudEluZGV4ID0gMjtcbiAgICBsZXQgc3RhcnRYID0gMDtcbiAgICBsZXQgaXNEcmFnZ2luZyA9IGZhbHNlO1xuXG5cbiAgICBmdW5jdGlvbiB1cGRhdGVTbGlkZXIoKSB7XG4gICAgICAgIGl0ZW1zLmZvckVhY2goKGl0ZW0sIGluZGV4KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBkaXN0YW5jZSA9IChpbmRleCAtIGN1cnJlbnRJbmRleCArIHRvdGFsSXRlbXMpICUgdG90YWxJdGVtcztcblxuICAgICAgICAgICAgaXRlbS5jbGFzc0xpc3QucmVtb3ZlKFxuICAgICAgICAgICAgICAgICdfbGVmdCcsICdfbGVmdDEnLCAnX2xlZnQyJyxcbiAgICAgICAgICAgICAgICAnX3JpZ2h0JywgJ19yaWdodDEnLCAnX3JpZ2h0MicsXG4gICAgICAgICAgICAgICAgJ19hY3RpdmUnLCAnX2hpZGUtc2xpZGUnXG4gICAgICAgICAgICApO1xuXG4gICAgICAgICAgICBpZiAoaW5kZXggPT09IGN1cnJlbnRJbmRleCkge1xuICAgICAgICAgICAgICAgIGl0ZW0uY2xhc3NMaXN0LmFkZCgnX2FjdGl2ZScpO1xuICAgICAgICAgICAgICAgIGNyZWF0ZUdsaXRjaExheWVycygzLCBpdGVtKVxuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgIHJlbW92ZUdsaXRjaExheWVycyggaXRlbSlcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKGRpc3RhbmNlID09PSAxKSB7XG4gICAgICAgICAgICAgICAgaXRlbS5jbGFzc0xpc3QuYWRkKCdfcmlnaHQxJyk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGRpc3RhbmNlID09PSAyKSB7XG4gICAgICAgICAgICAgICAgaXRlbS5jbGFzc0xpc3QuYWRkKCdfcmlnaHQyJyk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGRpc3RhbmNlID09PSB0b3RhbEl0ZW1zIC0gMSkge1xuICAgICAgICAgICAgICAgIGl0ZW0uY2xhc3NMaXN0LmFkZCgnX2xlZnQxJyk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGRpc3RhbmNlID09PSB0b3RhbEl0ZW1zIC0gMikge1xuICAgICAgICAgICAgICAgIGl0ZW0uY2xhc3NMaXN0LmFkZCgnX2xlZnQyJyk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGl0ZW0uY2xhc3NMaXN0LmFkZCgnX2hpZGUtc2xpZGUnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHVwZGF0ZURvdHMoKVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHVwZGF0ZURvdHMoKXtcbiAgICAgICAgZG90cy5mb3JFYWNoKChpdGVtLCBpKSA9PiB7XG4gICAgICAgICAgICBpdGVtLmNsYXNzTGlzdC5yZW1vdmUoJ19hY3RpdmUnKTtcbiAgICAgICAgICAgIGlmKGkgPT09IGN1cnJlbnRJbmRleCkge1xuICAgICAgICAgICAgICAgIGl0ZW0uY2xhc3NMaXN0LmFkZCgnX2FjdGl2ZScpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIG1vdmVTbGlkZXIob2Zmc2V0KSB7XG4gICAgICAgIGN1cnJlbnRJbmRleCA9IChjdXJyZW50SW5kZXggKyBvZmZzZXQgKyB0b3RhbEl0ZW1zKSAlIHRvdGFsSXRlbXM7XG4gICAgICAgIHVwZGF0ZVNsaWRlcigpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGhhbmRsZVN0YXJ0KGV2ZW50KSB7XG4gICAgICAgIGlzRHJhZ2dpbmcgPSB0cnVlO1xuICAgICAgICBzdGFydFggPSBldmVudC5jbGllbnRYIHx8IGV2ZW50LnRvdWNoZXNbMF0uY2xpZW50WDtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBoYW5kbGVNb3ZlKGV2ZW50KSB7XG4gICAgICAgIGlmICghaXNEcmFnZ2luZykgcmV0dXJuO1xuXG4gICAgICAgIGNvbnN0IGN1cnJlbnRYID0gZXZlbnQuY2xpZW50WCB8fCBldmVudC50b3VjaGVzWzBdLmNsaWVudFg7XG4gICAgICAgIGNvbnN0IGRpZmZYID0gY3VycmVudFggLSBzdGFydFg7XG5cbiAgICAgICAgaWYgKE1hdGguYWJzKGRpZmZYKSA+IDUwKSB7XG4gICAgICAgICAgICBtb3ZlU2xpZGVyKGRpZmZYID4gMCA/IC0xIDogMSk7XG4gICAgICAgICAgICBpc0RyYWdnaW5nID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBoYW5kbGVFbmQoKSB7XG4gICAgICAgIGlzRHJhZ2dpbmcgPSBmYWxzZTtcbiAgICB9XG5cbi8vc2xpZGVyXG5cbiAgICAvLyBmdW5jdGlvbiBvcGVuUG9wdXBCeUF0dHIocG9wdXBBdHRyKSB7XG4gICAgLy8gICAgIGNvbnN0IGFsbFBvcHVwcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5wb3B1cCcpO1xuICAgIC8vICAgICBhbGxQb3B1cHMuZm9yRWFjaChwID0+IHAuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJykpO1xuICAgIC8vICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLm92ZXJmbG93ID0gJ2hpZGRlbic7XG4gICAgLy9cbiAgICAvLyAgICAgY29uc29sZS5sb2cocG9wdXBBdHRyKTtcbiAgICAvL1xuICAgIC8vICAgICBjb25zdCB0YXJnZXRQb3B1cCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC5wb3B1cFtkYXRhLXBvcHVwPVwiJHtwb3B1cEF0dHJ9XCJdYCk7XG4gICAgLy8gICAgIGlmICh0YXJnZXRQb3B1cCkge1xuICAgIC8vICAgICAgICAgdGFyZ2V0UG9wdXAuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XG4gICAgLy8gICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucG9wdXBzJykuY2xhc3NMaXN0LnJlbW92ZSgnb3BhY2l0eScpO1xuICAgIC8vICAgICB9XG4gICAgLy8gfVxuXG4gICAgZnVuY3Rpb24gY2xvc2VBbGxQb3B1cHMoKSB7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5wb3B1cCcpLmZvckVhY2gocCA9PiBwLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpKTtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBvcHVwcycpLmNsYXNzTGlzdC5hZGQoJ29wYWNpdHktb3ZlcmxheScpO1xuICAgICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLm92ZXJmbG93ID0gJ2F1dG8nO1xuICAgICAgICBtYWluUGFnZS5jbGFzc0xpc3QucmVtb3ZlKCdvdmVybGF5Jyk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaW5pdE9wZW5Cb3goKXtcbiAgICAgICAgc2hha2VVbnRpbChib3gsIGdldFVzZXJQcml6ZSgpLCBsb2dvQm94KS50aGVuKHByaXplID0+IHtcbiAgICAgICAgICAgIGJveENhcC5jbGFzc0xpc3QuYWRkKFwib3BlblwiKTtcbiAgICAgICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgYm94Q2FwLmNsYXNzTGlzdC5yZW1vdmUoXCJvcGVuXCIpO1xuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHByaXplKTtcbiAgICAgICAgICAgICAgICB9LCAyMDAwKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KS50aGVuKHByaXplID0+IHtcbiAgICAgICAgICAgIHNob3dQcmVsb2FkZXIocHJpemUpO1xuICAgICAgICB9KTtcbiAgICB9XG5cblxuICAgIGxvYWRUcmFuc2xhdGlvbnMoKVxuICAgICAgICAudGhlbihpbml0KSAvLyDQt9Cw0L/Rg9GB0Log0ZbQvdGW0YLRgyDRgdGC0L7RgNGW0L3QutC4XG5cbiAgICAvLyBpbml0KClcblxuICAgIC8vIC8vLyB0ZXN0XG5cbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCAoKSA9PiB7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWVudS1idG5cIik/LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1lbnUtdGVzdFwiKT8uY2xhc3NMaXN0LnRvZ2dsZShcImhpZGVcIik7XG4gICAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgY29uc3QgbG5nQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5sbmctYnRuXCIpXG5cbiAgICBsbmdCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgaWYgKHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oXCJsb2NhbGVcIikpIHtcbiAgICAgICAgICAgIHNlc3Npb25TdG9yYWdlLnJlbW92ZUl0ZW0oXCJsb2NhbGVcIik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKFwibG9jYWxlXCIsIFwiZW5cIik7XG4gICAgICAgIH1cbiAgICAgICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpO1xuICAgIH0pO1xuXG4gICAgY29uc3QgYXV0aEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYXV0aC1idG5cIilcblxuICAgIGF1dGhCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+e1xuICAgICAgICBpZih1c2VySWQpe1xuICAgICAgICAgICAgc2Vzc2lvblN0b3JhZ2UucmVtb3ZlSXRlbShcInVzZXJJZFwiKVxuICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oXCJ1c2VySWRcIiwgXCIxMDAzMDAyNjhcIilcbiAgICAgICAgfVxuICAgICAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKClcbiAgICB9KTtcblxuICAgIGNvbnN0IHBvcHVwc01lbnUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnBvcHVwcy1idG5cIik7XG5cbiAgICBwb3B1cHNNZW51LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWVudS1wb3B1cFwiKS5jbGFzc0xpc3QudG9nZ2xlKFwiaGlkZVwiKTtcbiAgICB9KVxuXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5vcGVuLWJveFwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT57XG4gICAgICAgIGluaXRPcGVuQm94KCk7XG4gICAgfSlcblxufSkoKTtcblxuY29uc3QgbWFpblBhZ2UyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZhdi1wYWdlJylcblxuLy8g0L/RltGB0LvRjyDRgtC10YHRgtGDINCy0LjQtNCw0LvQuCDRhtGOINGE0YPQvdC60YbRltGOINGWINGA0L7Qt9C60L7QvNC10L3RgtC4INCw0L3QsNC70L7Qs9GW0YfQvdGDINCyINGE0YPQvdC60YbRltGXINCy0LjQutC70LjQutGDICBtYWluUGFnZTIgPiBtYWluUGFnZVxuZnVuY3Rpb24gb3BlblBvcHVwQnlBdHRyKHBvcHVwQXR0cikge1xuICAgIGNvbnN0IGFsbFBvcHVwcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5wb3B1cCcpO1xuICAgIGFsbFBvcHVwcy5mb3JFYWNoKHAgPT4gcC5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKSk7XG5cbiAgICBjb25zb2xlLmxvZyhwb3B1cEF0dHIpO1xuXG4gICAgY29uc3QgdGFyZ2V0UG9wdXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAucG9wdXBbZGF0YS1wb3B1cD1cIiR7cG9wdXBBdHRyfVwiXWApO1xuICAgIGlmICh0YXJnZXRQb3B1cCkge1xuICAgICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLm92ZXJmbG93ID0gJ2hpZGRlbic7XG4gICAgICAgIG1haW5QYWdlMi5jbGFzc0xpc3QuYWRkKCdvdmVybGF5Jyk7XG4gICAgICAgIHRhcmdldFBvcHVwLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucG9wdXBzJykuY2xhc3NMaXN0LnJlbW92ZSgnb3BhY2l0eS1vdmVybGF5Jyk7XG4gICAgfVxufVxuXG4iXX0=
