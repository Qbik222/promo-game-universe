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
  var debug = true;
  if (debug) hideLoader();
  var i18nData = {};
  var translateState = true;
  // let userId = null;
  var userId = (_Number = Number(sessionStorage.getItem("userId"))) !== null && _Number !== void 0 ? _Number : null;
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
        return;
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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOlsiYXBpVVJMIiwiZ2V0QWN0aXZlV2VlayIsInByb21vU3RhcnREYXRlIiwid2Vla0R1cmF0aW9uIiwiY3VycmVudERhdGUiLCJEYXRlIiwid2Vla0RhdGVzIiwiRGF5IiwiV2VlayIsImZvcm1hdERhdGUiLCJkYXRlIiwiZ2V0RGF0ZSIsInRvU3RyaW5nIiwicGFkU3RhcnQiLCJnZXRNb250aCIsImNhbGN1bGF0ZVdlZWtQZXJpb2QiLCJ3ZWVrSW5kZXgiLCJiYXNlU3RhcnQiLCJnZXRUaW1lIiwic3RhcnQiLCJlbmQiLCJhY3RpdmVXZWVrSW5kZXgiLCJpIiwiaXNWZXJpZmllZFVzZXIiLCJwZXJpb2RBbW91bnQiLCJ0YWJsZURhdGEiLCJhY3RpdmVXZWVrIiwibWFpblBhZ2UiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJ1bmF1dGhNc2dzIiwicXVlcnlTZWxlY3RvckFsbCIsInBhcnRpY2lwYXRlQnRucyIsInJlZGlyZWN0QnRucyIsImxvYWRlciIsImNhcmRQb3B1cEljb25zIiwicHJlbG9hZGVyIiwicHJlbG9hZGVyQ2FyZHMiLCJwcmVsb2FkZXJQcml6ZSIsImJveCIsImxvZ29Cb3giLCJib3hDYXAiLCJ1a0xlbmciLCJlbkxlbmciLCJ0b2dnbGVDbGFzc2VzIiwiZWxlbWVudHMiLCJjbGFzc05hbWUiLCJmb3JFYWNoIiwiZWwiLCJjbGFzc0xpc3QiLCJ0b2dnbGUiLCJ0b2dnbGVUcmFuc2xhdGVzIiwiZGF0YUF0dHIiLCJzZXRBdHRyaWJ1dGUiLCJpbm5lckhUTUwiLCJpMThuRGF0YSIsInJlbW92ZUF0dHJpYnV0ZSIsImxvYWRlckJ0biIsImxvY2FsZSIsInNlc3Npb25TdG9yYWdlIiwiZ2V0SXRlbSIsImRlYnVnIiwiaGlkZUxvYWRlciIsInRyYW5zbGF0ZVN0YXRlIiwidXNlcklkIiwiTnVtYmVyIiwicmVxdWVzdCIsImxpbmsiLCJleHRyYU9wdGlvbnMiLCJmZXRjaCIsImhlYWRlcnMiLCJ0aGVuIiwicmVzIiwib2siLCJFcnJvciIsImpzb24iLCJlcnIiLCJjb25zb2xlIiwiZXJyb3IiLCJQcm9taXNlIiwicmVqZWN0IiwiYWRkIiwiYm9keSIsInN0eWxlIiwib3ZlcmZsb3ciLCJyZW1vdmUiLCJpbml0IiwidHJ5RGV0ZWN0VXNlcklkIiwicXVpY2tDaGVja0FuZFJlbmRlciIsInVwZGF0ZVNsaWRlciIsImNhcmQiLCJhZGRFdmVudExpc3RlbmVyIiwiYnV0dG9uc0xlZnQiLCJidG4iLCJtb3ZlU2xpZGVyIiwicG9pbnRlckV2ZW50cyIsInNldFRpbWVvdXQiLCJidXR0b25zUmlnaHQiLCJzbGlkZXIiLCJoYW5kbGVTdGFydCIsImhhbmRsZU1vdmUiLCJoYW5kbGVFbmQiLCJlIiwib3BlblBvcHVwRWwiLCJjb250ZW50V3JhcCIsImNsb3NlQnRuIiwiY29udGFpbnMiLCJ0YXJnZXQiLCJjbG9zZUFsbFBvcHVwcyIsImljb24iLCJnZXRBdHRyaWJ1dGUiLCJvcGVuUG9wdXBCeUF0dHIiLCJ3aW5kb3ciLCJzdG9yZSIsInN0YXRlIiwiZ2V0U3RhdGUiLCJhdXRoIiwiaXNBdXRob3JpemVkIiwiaWQiLCJnX3VzZXJfaWQiLCJhdHRlbXB0cyIsIm1heEF0dGVtcHRzIiwiYXR0ZW1wdEludGVydmFsIiwid2FpdEZvclVzZXJJZCIsInJlc29sdmUiLCJpbnRlcnZhbCIsInNldEludGVydmFsIiwiY2xlYXJJbnRlcnZhbCIsImxvYWRUcmFuc2xhdGlvbnMiLCJ0cmFuc2xhdGUiLCJjbGVhclByZWxvYWRlclN0YXRlIiwiYWxsQ2FyZHNJbm5lciIsImFsbENhcmRCYWNrIiwicG9wdXBQcmVsb2FkZXIiLCJzaG93UHJlbG9hZGVyIiwicHJpemUiLCJzaG93UHJpemVCeURhdGFBdHRyIiwiZ2V0VXNlclByaXplIiwic2hha2VVbnRpbCIsIndhaXRQcm9taXNlIiwibG9nbyIsIm9wdHMiLCJhbXBsaXR1ZGUiLCJkdXJhdGlvbiIsImF4aXMiLCJzdG9wIiwiYW5pbWF0ZSIsImtleWZyYW1lcyIsInRyYW5zZm9ybSIsImFuaW0iLCJpdGVyYXRpb25zIiwiSW5maW5pdHkiLCJlYXNpbmciLCJjYW5jZWwiLCJyYWZJZCIsInJ1bm5pbmciLCJsb29wIiwidCIsInBoYXNlIiwiTWF0aCIsIlBJIiwiZGVsdGEiLCJzaW4iLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJjYW5jZWxBbmltYXRpb25GcmFtZSIsImNoZWNrVXNlckF1dGgiLCJsb2ciLCJ1bmF1dGhNZXMiLCJ1c2VyaWQiLCJpdGVtIiwicmVkaXJlY3RCdG4iLCJwYXJ0aWNpcGF0ZUJ0biIsInJlcG9ydEVycm9yIiwicmVwb3J0RGF0YSIsIm9yaWdpbiIsImxvY2F0aW9uIiwiaHJlZiIsImVycm9yVGV4dCIsInRleHQiLCJtZXNzYWdlIiwidHlwZSIsIm5hbWUiLCJzdGFjayIsIm1ldGhvZCIsIkpTT04iLCJzdHJpbmdpZnkiLCJ3YXJuIiwiZWxlbXMiLCJsZW5ndGgiLCJlbGVtIiwia2V5IiwicmVmcmVzaExvY2FsaXplZENsYXNzIiwiZWxlbWVudCIsImJhc2VDc3NDbGFzcyIsImxhbmciLCJyZW5kZXJVc2VycyIsIndlZWtOdW0iLCJ1c2VyRGF0YSIsImZpbmQiLCJ3ZWVrIiwidXNlcnMiLCJjdXJyZW50VXNlciIsInVzZXIiLCJwb2ludHMiLCJwb3B1bGF0ZVVzZXJzVGFibGUiLCJjdXJyZW50VXNlcklkIiwicmVzdWx0c1RhYmxlIiwicmVzdWx0c1RhYmxlT3RoZXIiLCJpc1RvcEN1cnJlbnRVc2VyIiwic2xpY2UiLCJzb21lIiwidG9wVXNlcnNMZW5ndGgiLCJ0b3BVc2VycyIsImRpc3BsYXlVc2VyIiwiaXNDdXJyZW50VXNlciIsInRhYmxlIiwicmVuZGVyUm93Iiwib3B0aW9ucyIsImhpZ2hsaWdodCIsIm5laWdoYm9yIiwidXNlclJvdyIsImNyZWF0ZUVsZW1lbnQiLCJ1c2VyUGxhY2UiLCJpbmRleE9mIiwicHJpemVLZXkiLCJnZXRQcml6ZVRyYW5zbGF0aW9uS2V5IiwidHJhbnNsYXRlS2V5IiwibWFza1VzZXJJZCIsInRvRml4ZWQiLCJhcHBlbmQiLCJpbmRleCIsImRlZmF1bHRWYWx1ZSIsIm5lZWRLZXkiLCJwbGFjZSIsImFsbFByaXplcyIsImN1cnJlbnRQcml6ZSIsInBhcnRpY2lwYXRlIiwicGFyYW1zIiwibG9hZFVzZXJzIiwiZGlzcGxheSIsInN0YXJ0c1dpdGgiLCJwYXJhbWV0ciIsInJlcXVlc3RzIiwicmVxIiwiZGF0YSIsInB1c2giLCJhbGwiLCJpdGVtcyIsInRvdGFsSXRlbXMiLCJkb3RzIiwiY3VycmVudEluZGV4Iiwic3RhcnRYIiwiaXNEcmFnZ2luZyIsImRpc3RhbmNlIiwidXBkYXRlRG90cyIsIm9mZnNldCIsImV2ZW50IiwiY2xpZW50WCIsInRvdWNoZXMiLCJjdXJyZW50WCIsImRpZmZYIiwiYWJzIiwicCIsImluaXRPcGVuQm94IiwibG5nQnRuIiwicmVtb3ZlSXRlbSIsInNldEl0ZW0iLCJyZWxvYWQiLCJhdXRoQnRuIiwicG9wdXBzTWVudSIsInBvcHVwQXR0ciIsImFsbFBvcHVwcyIsInRhcmdldFBvcHVwIl0sIm1hcHBpbmdzIjoiOzs7K0NBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREEsQ0FBQyxZQUFZO0VBQUE7RUFFVCxJQUFNQSxNQUFNLEdBQUcsd0NBQXdDO0VBRXZELElBQU1DLGFBQWEsR0FBRyxTQUFoQkEsYUFBYSxDQUFJQyxjQUFjLEVBQUVDLFlBQVksRUFBSztJQUNwRCxJQUFNQyxXQUFXLEdBQUcsSUFBSUMsSUFBSSxFQUFFO0lBQzlCLElBQUlDLFNBQVMsR0FBRyxFQUFFO0lBRWxCLElBQU1DLEdBQUcsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxJQUFJO0lBQy9CLElBQU1DLElBQUksR0FBR0wsWUFBWSxHQUFHSSxHQUFHO0lBRS9CLElBQU1FLFVBQVUsR0FBRyxTQUFiQSxVQUFVLENBQUlDLElBQUk7TUFBQSxpQkFDakJBLElBQUksQ0FBQ0MsT0FBTyxFQUFFLENBQUNDLFFBQVEsRUFB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QyxhQUFhLENBQUM7RUFFeERnUCxVQUFVLENBQUNsTCxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsWUFBTTtJQUN2Qy9ELFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLGFBQWEsQ0FBQyxDQUFDb0IsU0FBUyxDQUFDQyxNQUFNLENBQUMsTUFBTSxDQUFDO0VBQ2xFLENBQUMsQ0FBQztFQUVGdEIsUUFBUSxDQUFDQyxhQUFhLENBQUMsV0FBVyxDQUFDLENBQUM4RCxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsWUFBSztJQUMvRDRLLFdBQVcsRUFBRTtFQUNqQixDQUFDLENBQUM7QUFFTixDQUFDLEdBQUc7O0FBRUo7QUFDQSxTQUFTeEosZUFBZSxDQUFDK0osU0FBUyxFQUFFO0VBQ2hDLElBQU1DLFNBQVMsR0FBR25QLFFBQVEsQ0FBQ0csZ0JBQWdCLENBQUMsUUFBUSxDQUFDO0VBQ3JEZ1AsU0FBUyxDQUFDaE8sT0FBTyxDQUFDLFVBQUF1TixDQUFDO0lBQUEsT0FBSUEsQ0FBQyxDQUFDck4sU0FBUyxDQUFDb0MsTUFBTSxDQUFDLFFBQVEsQ0FBQztFQUFBLEVBQUM7RUFFcERSLE9BQU8sQ0FBQ3lGLEdBQUcsQ0FBQ3dHLFNBQVMsQ0FBQztFQUV0QixJQUFNRSxXQUFXLEdBQUdwUCxRQUFRLENBQUNDLGFBQWEsK0JBQXVCaVAsU0FBUyxTQUFLO0VBQy9FLElBQUlFLFdBQVcsRUFBRTtJQUNicFAsUUFBUSxDQUFDc0QsSUFBSSxDQUFDQyxLQUFLLENBQUNDLFFBQVEsR0FBRyxRQUFRO0lBQ3ZDNEwsV0FBVyxDQUFDL04sU0FBUyxDQUFDZ0MsR0FBRyxDQUFDLFFBQVEsQ0FBQztJQUNuQ3JELFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLFNBQVMsQ0FBQyxDQUFDb0IsU0FBUyxDQUFDb0MsTUFBTSxDQUFDLGlCQUFpQixDQUFDO0VBQ3pFO0FBQ0oiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiAoKSB7XG5cbiAgICBjb25zdCBhcGlVUkwgPSAnaHR0cHM6Ly9mYXYtcHJvbS5jb20vYXBpX2dhbWVfdW5pdmVyc2UnXG5cbiAgICBjb25zdCBnZXRBY3RpdmVXZWVrID0gKHByb21vU3RhcnREYXRlLCB3ZWVrRHVyYXRpb24pID0+IHtcbiAgICAgICAgY29uc3QgY3VycmVudERhdGUgPSBuZXcgRGF0ZSgpO1xuICAgICAgICBsZXQgd2Vla0RhdGVzID0gW107XG5cbiAgICAgICAgY29uc3QgRGF5ID0gMjQgKiA2MCAqIDYwICogMTAwMDtcbiAgICAgICAgY29uc3QgV2VlayA9IHdlZWtEdXJhdGlvbiAqIERheTtcblxuICAgICAgICBjb25zdCBmb3JtYXREYXRlID0gKGRhdGUpID0+XG4gICAgICAgICAgICBgJHtkYXRlLmdldERhdGUoKS50b1N0cmluZygpLnBhZFN0YXJ0KDIsIFwiMFwiKX0uJHsoZGF0ZS5nZXRNb250aCgpICsgMSkudG9TdHJpbmcoKS5wYWRTdGFydCgyLCBcIjBcIil9YDtcblxuICAgICAgICBjb25zdCBjYWxjdWxhdGVXZWVrUGVyaW9kID0gKHdlZWtJbmRleCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgYmFzZVN0YXJ0ID0gcHJvbW9TdGFydERhdGUuZ2V0VGltZSgpO1xuICAgICAgICAgICAgY29uc3Qgc3RhcnQgPSBuZXcgRGF0ZShiYXNlU3RhcnQgKyB3ZWVrSW5kZXggKiBXZWVrKTtcbiAgICAgICAgICAgIGxldCBlbmQgPSBuZXcgRGF0ZShzdGFydC5nZXRUaW1lKCkgKyAod2Vla0R1cmF0aW9uICogRGF5IC0gMSkpO1xuICAgICAgICAgICAgcmV0dXJuIHsgc3RhcnQsIGVuZCB9O1xuICAgICAgICB9O1xuXG4gICAgICAgIGxldCBhY3RpdmVXZWVrSW5kZXggPSBudWxsO1xuXG4gICAgICAgIC8vINCf0LXRgNC10LLRltGA0LrQsCDQv9C+0YLQvtGH0L3QvtCz0L4g0YLQuNC20L3Rj1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDEwOyBpKyspIHsgLy8g0J7QsdC80LXQttGD0ZTQvNC+IDEwINGC0LjQttC90Y/QvNC4ICjRj9C60YnQviDQv9C+0YLRgNGW0LHQvdC+INCx0ZbQu9GM0YjQtSwg0L/RgNC+0YHRgtC+INC30LzRltC90ZbRgtGMINC70ZbRh9C40LvRjNC90LjQuilcbiAgICAgICAgICAgIGNvbnN0IHsgc3RhcnQsIGVuZCB9ID0gY2FsY3VsYXRlV2Vla1BlcmlvZChpKTtcbiAgICAgICAgICAgIGlmIChjdXJyZW50RGF0ZSA+PSBzdGFydCAmJiBjdXJyZW50RGF0ZSA8PSBlbmQpIHtcbiAgICAgICAgICAgICAgICBhY3RpdmVXZWVrSW5kZXggPSBpICsgMTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBhY3RpdmVXZWVrSW5kZXg7XG4gICAgfTtcblxuICAgIGNvbnN0IHByb21vU3RhcnREYXRlID0gbmV3IERhdGUoXCIyMDI1LTA1LTA1VDAwOjAwOjAwXCIpO1xuICAgIGNvbnN0IHdlZWtEdXJhdGlvbiA9IDEwO1xuXG4gICAgbGV0IGlzVmVyaWZpZWRVc2VyID0gZmFsc2U7XG5cbiAgICBsZXQgcGVyaW9kQW1vdW50ID0gMiAvLyDQutGW0LvRjNC60ZbRgdGC0Ywg0L/QtdGA0ZbQvtC00ZbQsiDQsiDQsNC60YbRltGXLCDRgtGA0LXQsdCwINC00LvRjyDQutC10YjRg9Cy0LDQvdC90Y8g0ZbQvdGE0Lgg0Lcg0YLQsNCx0LvQuFxuXG4gICAgbGV0IHRhYmxlRGF0YSA9IFtdXG4gICAgbGV0IGFjdGl2ZVdlZWsgPSBnZXRBY3RpdmVXZWVrKHByb21vU3RhcnREYXRlLCB3ZWVrRHVyYXRpb24pIHx8IDE7XG4gICAgLy8gbGV0IGFjdGl2ZVdlZWsgPSAyXG5cbiAgICBpZiAoYWN0aXZlV2VlayA+IDIpIGFjdGl2ZVdlZWsgPSAyXG5cblxuICAgIGNvbnN0IG1haW5QYWdlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5mYXYtcGFnZVwiKSxcbiAgICAgICAgdW5hdXRoTXNncyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy51bmF1dGgtbXNnJyksXG4gICAgICAgIHBhcnRpY2lwYXRlQnRucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5wYXJ0LWJ0bicpLFxuICAgICAgICByZWRpcmVjdEJ0bnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuYnRuLWpvaW4nKSxcbiAgICAgICAgbG9hZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zcGlubmVyLW92ZXJsYXlcIiksXG4gICAgICAgIGNhcmRQb3B1cEljb25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNhcmRfX3BvcHVwJyksXG4gICAgICAgIHByZWxvYWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wb3B1cC0tcHJlbG9hZGVyJyksXG4gICAgICAgIHByZWxvYWRlckNhcmRzID0gcHJlbG9hZGVyLnF1ZXJ5U2VsZWN0b3JBbGwoJy5jYXJkX19pbm5lcicpLFxuICAgICAgICBwcmVsb2FkZXJQcml6ZSA9IHByZWxvYWRlci5xdWVyeVNlbGVjdG9yKCcuY2FyZF9faW5uZXItLXByaXplJyksXG4gICAgICAgIGJveCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ib3hfX29wZW4nKSxcbiAgICAgICAgbG9nb0JveCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ib3hfX2xvZ28nKSxcbiAgICAgICAgYm94Q2FwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJveF9fb3Blbi1jYXAnKVxuXG4gICAgY29uc3QgdWtMZW5nID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3VrTGVuZycpO1xuICAgIGNvbnN0IGVuTGVuZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNlbkxlbmcnKTtcblxuICAgIGNvbnN0IHRvZ2dsZUNsYXNzZXMgPSAoZWxlbWVudHMsIGNsYXNzTmFtZSkgPT4gZWxlbWVudHMuZm9yRWFjaChlbCA9PiBlbC5jbGFzc0xpc3QudG9nZ2xlKGAke2NsYXNzTmFtZX1gKSk7XG4gICAgY29uc3QgdG9nZ2xlVHJhbnNsYXRlcyA9IChlbGVtZW50cywgZGF0YUF0dHIpID0+IGVsZW1lbnRzLmZvckVhY2goZWwgPT4ge1xuICAgICAgICBlbC5zZXRBdHRyaWJ1dGUoJ2RhdGEtdHJhbnNsYXRlJywgYCR7ZGF0YUF0dHJ9YClcbiAgICAgICAgZWwuaW5uZXJIVE1MID0gaTE4bkRhdGFbZGF0YUF0dHJdIHx8ICcqLS0tLU5FRUQgVE8gQkUgVFJBTlNMQVRFRC0tLS0qICAga2V5OiAgJyArIGRhdGFBdHRyO1xuICAgICAgICBlbC5yZW1vdmVBdHRyaWJ1dGUoJ2RhdGEtdHJhbnNsYXRlJyk7XG4gICAgfSk7XG5cbiAgICBsZXQgbG9hZGVyQnRuID0gZmFsc2VcblxuICAgIC8vIGxldCBsb2NhbGUgPSBcImVuXCJcbiAgICBsZXQgbG9jYWxlID0gc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbShcImxvY2FsZVwiKSB8fCBcInVrXCJcblxuICAgIGlmICh1a0xlbmcpIGxvY2FsZSA9ICd1ayc7XG4gICAgaWYgKGVuTGVuZykgbG9jYWxlID0gJ2VuJztcblxuICAgIGxldCBkZWJ1ZyA9IHRydWVcblxuICAgIGlmIChkZWJ1ZykgaGlkZUxvYWRlcigpXG5cbiAgICBsZXQgaTE4bkRhdGEgPSB7fTtcbiAgICBjb25zdCB0cmFuc2xhdGVTdGF0ZSA9IHRydWU7XG4gICAgLy8gbGV0IHVzZXJJZCA9IG51bGw7XG4gICAgbGV0IHVzZXJJZCA9IE51bWJlcihzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKFwidXNlcklkXCIpKSA/PyBudWxsXG5cbiAgICBjb25zdCByZXF1ZXN0ID0gZnVuY3Rpb24gKGxpbmssIGV4dHJhT3B0aW9ucykge1xuICAgICAgICByZXR1cm4gZmV0Y2goYXBpVVJMICsgbGluaywge1xuICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgICdBY2NlcHQnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIC4uLihleHRyYU9wdGlvbnMgfHwge30pXG4gICAgICAgIH0pXG4gICAgICAgICAgICAudGhlbihyZXMgPT4ge1xuICAgICAgICAgICAgICAgIGlmICghcmVzLm9rKSB0aHJvdyBuZXcgRXJyb3IoJ0FQSSBlcnJvcicpO1xuICAgICAgICAgICAgICAgIHJldHVybiByZXMuanNvbigpO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5jYXRjaChlcnIgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0FQSSByZXF1ZXN0IGZhaWxlZDonLCBlcnIpO1xuXG4gICAgICAgICAgICAgICAgLy8gcmVwb3J0RXJyb3IoZXJyKTtcbiAgICAgICAgICAgICAgICAvL1xuICAgICAgICAgICAgICAgIC8vIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mYXYtcGFnZScpLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgICAgICAgICAgLy8gaWYgKHdpbmRvdy5sb2NhdGlvbi5ocmVmLnN0YXJ0c1dpdGgoXCJodHRwczovL3d3dy5mYXZiZXQuaHIvXCIpKSB7XG4gICAgICAgICAgICAgICAgLy8gICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gJy9wcm9tb2NpamUvcHJvbW9jaWphL3N0dWIvJztcbiAgICAgICAgICAgICAgICAvLyB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIC8vICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9ICcvcHJvbW9zL3Byb21vL3N0dWIvJztcbiAgICAgICAgICAgICAgICAvLyB9XG5cbiAgICAgICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QoZXJyKTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaGlkZUxvYWRlcigpe1xuICAgICAgICBsb2FkZXIuY2xhc3NMaXN0LmFkZChcImhpZGVcIilcbiAgICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5vdmVyZmxvdyA9IFwiYXV0b1wiXG4gICAgICAgIG1haW5QYWdlLmNsYXNzTGlzdC5yZW1vdmUoXCJsb2FkaW5nXCIpXG4gICAgfVxuXG4gICAgYXN5bmMgZnVuY3Rpb24gaW5pdCgpIHtcbiAgICAgICAgbGV0IGF0dGVtcHRzID0gMDtcbiAgICAgICAgY29uc3QgbWF4QXR0ZW1wdHMgPSAyMDtcbiAgICAgICAgY29uc3QgYXR0ZW1wdEludGVydmFsID0gNTA7XG5cbiAgICAgICAgZnVuY3Rpb24gdHJ5RGV0ZWN0VXNlcklkKCkge1xuICAgICAgICAgICAgaWYgKHdpbmRvdy5zdG9yZSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHN0YXRlID0gd2luZG93LnN0b3JlLmdldFN0YXRlKCk7XG4gICAgICAgICAgICAgICAgdXNlcklkID0gc3RhdGUuYXV0aC5pc0F1dGhvcml6ZWQgJiYgc3RhdGUuYXV0aC5pZCB8fCAnJztcbiAgICAgICAgICAgIH0gZWxzZSBpZiAod2luZG93LmdfdXNlcl9pZCkge1xuICAgICAgICAgICAgICAgIHVzZXJJZCA9IHdpbmRvdy5nX3VzZXJfaWQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBmdW5jdGlvbiBxdWlja0NoZWNrQW5kUmVuZGVyKCkge1xuICAgICAgICAgICAgLy8gY2hlY2tVc2VyQXV0aCgpXG4gICAgICAgICAgICAvLyAgICAgLnRoZW4obG9hZFVzZXJzKVxuICAgICAgICAgICAgLy8gICAgIC50aGVuKCgpID0+e1xuICAgICAgICAgICAgLy8gICAgICAgICBzZXRUaW1lb3V0KGhpZGVMb2FkZXIsIDMwMCk7XG4gICAgICAgICAgICAvLyAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIudGFibGVfX3RhYnMtaXRlbVwiKS5mb3JFYWNoKCh0YWIsIGkpID0+e1xuICAgICAgICAgICAgLy8gICAgICAgICAgICAgdGFiLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xuICAgICAgICAgICAgLy8gICAgICAgICAgICAgaWYoaSA9PT0gYWN0aXZlV2VlayAtIDEpIHRhYi5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcbiAgICAgICAgICAgIC8vICAgICAgICAgfSlcbiAgICAgICAgICAgIC8vICAgICAgICAgLy8gcmVuZGVyVXNlcnMoYWN0aXZlV2VlaywgdGFibGVEYXRhKTtcbiAgICAgICAgICAgIC8vICAgICAgICAgcGFydGljaXBhdGVCdG5zLmZvckVhY2goYnRuID0+IGJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHBhcnRpY2lwYXRlKSk7XG4gICAgICAgICAgICAvLyAgICAgfSlcblxuXG4gICAgICAgICAgICAvLyBzaGFrZVVudGlsKGJveCwgZ2V0VXNlclByaXplLCBsb2dvQm94KS50aGVuKHJlcyA9PntcbiAgICAgICAgICAgIC8vICAgICBzaG93UHJlbG9hZGVyKHJlcyk7XG4gICAgICAgICAgICAvLyB9KVxuXG4gICAgICAgICAgICB1cGRhdGVTbGlkZXIoKVxuXG4gICAgICAgICAgICAvLyBzaG93UHJpemVGb3JQcmVsb2FkZXIoXCJwcml6ZTFcIilcblxuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNhcmRfX2lubmVyJykuZm9yRWFjaChjYXJkID0+IHtcbiAgICAgICAgICAgICAgICBjYXJkLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjYXJkLmNsYXNzTGlzdC50b2dnbGUoJ2lzLWZsaXBwZWQnKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuXG5cblxuICAgICAgICAgICAgYnV0dG9uc0xlZnQuZm9yRWFjaChidG4gID0+IHtcbiAgICAgICAgICAgICAgICBidG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIG1vdmVTbGlkZXIoLTEpO1xuICAgICAgICAgICAgICAgICAgICBidG4uc3R5bGUucG9pbnRlckV2ZW50cyA9ICdub25lJztcbiAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7IGJ0bi5zdHlsZS5wb2ludGVyRXZlbnRzID0gJ2luaXRpYWwnOyB9LCAxMDAwKTtcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIGJ1dHRvbnNSaWdodC5mb3JFYWNoKGJ0biAgPT4ge1xuICAgICAgICAgICAgICAgIGJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgbW92ZVNsaWRlcigxKTtcbiAgICAgICAgICAgICAgICAgICAgYnRuLnN0eWxlLnBvaW50ZXJFdmVudHMgPSAnbm9uZSc7XG4gICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4geyBidG4uc3R5bGUucG9pbnRlckV2ZW50cyA9ICdpbml0aWFsJzsgfSwgMTAwMCk7XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH0pXG5cbiAgICAgICAgICAgIHNsaWRlci5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCBoYW5kbGVTdGFydCk7XG4gICAgICAgICAgICBzbGlkZXIuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hzdGFydCcsIGhhbmRsZVN0YXJ0KTtcblxuICAgICAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgaGFuZGxlTW92ZSk7XG4gICAgICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCd0b3VjaG1vdmUnLCBoYW5kbGVNb3ZlKTtcblxuICAgICAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIGhhbmRsZUVuZCk7XG4gICAgICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCd0b3VjaGVuZCcsIGhhbmRsZUVuZCk7XG5cbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wb3B1cHMnKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3Qgb3BlblBvcHVwRWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucG9wdXAuYWN0aXZlJyk7XG4gICAgICAgICAgICAgICAgaWYob3BlblBvcHVwRWwpe1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBjb250ZW50V3JhcCA9IG9wZW5Qb3B1cEVsLnF1ZXJ5U2VsZWN0b3IoJy5wb3B1cF9fd3JhcCcpO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBjbG9zZUJ0biA9IG9wZW5Qb3B1cEVsLnF1ZXJ5U2VsZWN0b3IoJy5jYXJkX19jbG9zZScpID8/IG9wZW5Qb3B1cEVsLnF1ZXJ5U2VsZWN0b3IoJy5wb3B1cF9fY2xvc2UnKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNvbnRlbnRXcmFwICYmICFjb250ZW50V3JhcC5jb250YWlucyhlLnRhcmdldCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsb3NlQWxsUG9wdXBzKCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaWYoZS50YXJnZXQgPT09IGNsb3NlQnRuKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjbG9zZUFsbFBvcHVwcygpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgY2FyZFBvcHVwSWNvbnMuZm9yRWFjaChpY29uID0+IHtcbiAgICAgICAgICAgICAgICBpY29uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKCl7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGRhdGFBdHRyID0gdGhpcy5nZXRBdHRyaWJ1dGUoXCJkYXRhLXBvcHVwXCIpXG4gICAgICAgICAgICAgICAgICAgIG9wZW5Qb3B1cEJ5QXR0cihkYXRhQXR0cik7XG4gICAgICAgICAgICAgICAgfSlcblxuICAgICAgICAgICAgfSlcblxuICAgICAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHdhaXRGb3JVc2VySWQgPSBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgaW50ZXJ2YWwgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdHJ5RGV0ZWN0VXNlcklkKCk7XG4gICAgICAgICAgICAgICAgaWYgKHVzZXJJZCB8fCBhdHRlbXB0cyA+PSBtYXhBdHRlbXB0cykge1xuICAgICAgICAgICAgICAgICAgICBxdWlja0NoZWNrQW5kUmVuZGVyKCk7XG4gICAgICAgICAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWwpO1xuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGF0dGVtcHRzKys7XG4gICAgICAgICAgICB9LCBhdHRlbXB0SW50ZXJ2YWwpO1xuICAgICAgICB9KTtcblxuICAgICAgICBhd2FpdCB3YWl0Rm9yVXNlcklkO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGxvYWRUcmFuc2xhdGlvbnMoKSB7XG4gICAgICAgIHJldHVybiByZXF1ZXN0KGAvbmV3LXRyYW5zbGF0ZXMvJHtsb2NhbGV9P25vY2FjaGU9MWApXG4gICAgICAgICAgICAudGhlbihqc29uID0+IHtcbiAgICAgICAgICAgICAgICBpMThuRGF0YSA9IGpzb247XG4gICAgICAgICAgICAgICAgdHJhbnNsYXRlKCk7XG4gICAgICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvLyBmdW5jdGlvbiBzaG93UHJpemVCeURhdGFBdHRyKGRhdGFBdHRyKSB7XG4gICAgLy8gICAgIGNvbnN0IGNhcmRzID0gcHJlbG9hZGVyUHJpemUucXVlcnlTZWxlY3RvckFsbCgnLmNhcmRfX2lubmVyJyk7XG4gICAgLy9cbiAgICAvLyAgICAgY2FyZHMuZm9yRWFjaChjYXJkID0+IHtcbiAgICAvLyAgICAgICAgIGNvbnN0IGJhY2sgPSBjYXJkLnF1ZXJ5U2VsZWN0b3JBbGwoJy5jYXJkX19iYWNrJylcbiAgICAvLyAgICAgICAgIGJhY2suZm9yRWFjaChpdGVtID0+IHtcbiAgICAvLyAgICAgICAgICAgICBpdGVtLmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTtcbiAgICAvLyAgICAgICAgICAgICBpZihpdGVtLmdldEF0dHJpYnV0ZShcImRhdGEtcHJpemVcIikgPT09IGRhdGFBdHRyKSB7XG4gICAgLy8gICAgICAgICAgICAgICAgIGl0ZW0uY2xhc3NMaXN0LnJlbW92ZShcImhpZGVcIilcbiAgICAvLyAgICAgICAgICAgICB9XG4gICAgLy8gICAgICAgICB9KVxuICAgIC8vXG4gICAgLy9cbiAgICAvLyAgICAgfSlcbiAgICAvL1xuICAgIC8vIH1cblxuXG4gICAgZnVuY3Rpb24gY2xlYXJQcmVsb2FkZXJTdGF0ZSgpe1xuICAgICAgICBjb25zdCBhbGxDYXJkc0lubmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNhcmRfX2lubmVyJyksXG4gICAgICAgICAgICBhbGxDYXJkQmFjayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jYXJkX19iYWNrJyksXG4gICAgICAgICAgICBwb3B1cFByZWxvYWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wb3B1cC0tcHJlbG9hZGVyJyk7XG5cbiAgICAgICAgYWxsQ2FyZHNJbm5lci5mb3JFYWNoKGNhcmQgPT4ge1xuICAgICAgICAgICAgY2FyZC5jbGFzc0xpc3QucmVtb3ZlKCdpcy1mbGlwcGVkJyk7XG4gICAgICAgICAgICBjYXJkLmNsYXNzTGlzdC5hZGQoJ2lzLWhpZGUnKTtcbiAgICAgICAgfSlcbiAgICAgICAgcG9wdXBQcmVsb2FkZXIuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XG5cbiAgICAgICAgYWxsQ2FyZEJhY2suZm9yRWFjaCgoY2FyZCkgPT4ge1xuICAgICAgICAgICAgY2FyZC5jbGFzc0xpc3QuYWRkKCdoaWRlJyk7XG4gICAgICAgIH0pXG5cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBzaG93UHJlbG9hZGVyKHByaXplKSB7XG4gICAgICAgICAgICBvcGVuUG9wdXBCeUF0dHIoJ3ByZWxvYWRlcicpXG4gICAgICAgICAgICBzaG93UHJpemVCeURhdGFBdHRyKHByaXplKVxuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgcHJlbG9hZGVyQ2FyZHMuZm9yRWFjaCgoY2FyZCwgaSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+e1xuICAgICAgICAgICAgICAgICAgICAgICAgY2FyZC5jbGFzc0xpc3QucmVtb3ZlKCdpcy1oaWRlJyk7XG4gICAgICAgICAgICAgICAgICAgIH0sIGkgKiAyNTApXG4gICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT57XG4gICAgICAgICAgICAgICAgICAgICAgICBwcmVsb2FkZXJQcml6ZS5jbGFzc0xpc3QuYWRkKCdpcy1mbGlwcGVkJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsZWFyUHJlbG9hZGVyU3RhdGUoKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT57XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wZW5Qb3B1cEJ5QXR0cihwcml6ZSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LCA4MDApXG4gICAgICAgICAgICAgICAgICAgICAgICB9LCAyMDAwKVxuICAgICAgICAgICAgICAgICAgICB9LCAxMjUwKVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9LCAyMDApO1xuICAgIH1cbiAgICAvLyBzaG93UHJlbG9hZGVyKCk7XG5cbiAgICBmdW5jdGlvbiBnZXRVc2VyUHJpemUoKSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4gcmVzb2x2ZSgncHJpemUxJyksIDEwMDApOyAvLyDRgtGD0YIg0L7RgtGA0LjQvNGD0ZTQvCDQv9GA0LjQtyDRj9C60LjQuSDQstC40L/QsNCyINGO0LfQtdGA0YNcbiAgICAgICAgfSk7XG4gICAgfVxuXG5cbiAgICBmdW5jdGlvbiBzaGFrZVVudGlsKGVsLCB3YWl0UHJvbWlzZSwgbG9nbywgb3B0cyA9IHt9KSB7XG4gICAgICAgIGNvbnN0IHsgYW1wbGl0dWRlID0gNCwgZHVyYXRpb24gPSA1MDAsIGF4aXMgPSAneCcgfSA9IG9wdHM7XG4gICAgICAgIGxldCBzdG9wO1xuXG4gICAgICAgIGlmIChsb2dvKXtcbiAgICAgICAgICAgIGxvZ28uY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZWwuYW5pbWF0ZSkge1xuICAgICAgICAgICAgY29uc3Qga2V5ZnJhbWVzID0gYXhpcyA9PT0gJ3gnXG4gICAgICAgICAgICAgICAgPyBbeyB0cmFuc2Zvcm06ICd0cmFuc2xhdGVYKDApJyB9LCB7IHRyYW5zZm9ybTogYHRyYW5zbGF0ZVgoLSR7YW1wbGl0dWRlfXB4KWAgfSwgeyB0cmFuc2Zvcm06IGB0cmFuc2xhdGVYKCR7YW1wbGl0dWRlfXB4KWAgfSwgeyB0cmFuc2Zvcm06ICd0cmFuc2xhdGVYKDApJyB9XVxuICAgICAgICAgICAgICAgIDogW3sgdHJhbnNmb3JtOiAndHJhbnNsYXRlWSgwKScgfSwgeyB0cmFuc2Zvcm06IGB0cmFuc2xhdGVZKC0ke2FtcGxpdHVkZX1weClgIH0sIHsgdHJhbnNmb3JtOiBgdHJhbnNsYXRlWSgke2FtcGxpdHVkZX1weClgIH0sIHsgdHJhbnNmb3JtOiAndHJhbnNsYXRlWSgwKScgfV07XG4gICAgICAgICAgICBjb25zdCBhbmltID0gZWwuYW5pbWF0ZShrZXlmcmFtZXMsIHsgZHVyYXRpb24sIGl0ZXJhdGlvbnM6IEluZmluaXR5LCBlYXNpbmc6ICdsaW5lYXInIH0pO1xuICAgICAgICAgICAgc3RvcCA9ICgpID0+IHtcbiAgICAgICAgICAgICAgICBhbmltLmNhbmNlbCgpO1xuICAgICAgICAgICAgICAgIGVsLnN0eWxlLnRyYW5zZm9ybSA9ICcnO1xuICAgICAgICAgICAgICAgIGlmIChsb2dvKXtcbiAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PntcbiAgICAgICAgICAgICAgICAgICAgICAgIGxvZ28uY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XG4gICAgICAgICAgICAgICAgICAgIH0sIDQwMDApXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGxldCBzdGFydCA9IG51bGwsIHJhZklkID0gMCwgcnVubmluZyA9IHRydWU7XG4gICAgICAgICAgICBjb25zdCBsb29wID0gdCA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKHN0YXJ0ID09PSBudWxsKSBzdGFydCA9IHQ7XG4gICAgICAgICAgICAgICAgY29uc3QgcGhhc2UgPSAoKHQgLSBzdGFydCkgJSBkdXJhdGlvbikgLyBkdXJhdGlvbiAqIE1hdGguUEkgKiAyO1xuICAgICAgICAgICAgICAgIGNvbnN0IGRlbHRhID0gTWF0aC5zaW4ocGhhc2UpICogYW1wbGl0dWRlO1xuICAgICAgICAgICAgICAgIGVsLnN0eWxlLnRyYW5zZm9ybSA9IGF4aXMgPT09ICd4JyA/IGB0cmFuc2xhdGVYKCR7ZGVsdGF9cHgpYCA6IGB0cmFuc2xhdGVZKCR7ZGVsdGF9cHgpYDtcbiAgICAgICAgICAgICAgICBpZiAocnVubmluZykgcmFmSWQgPSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUobG9vcCk7XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgcmFmSWQgPSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUobG9vcCk7XG4gICAgICAgICAgICBzdG9wID0gKCkgPT4ge1xuICAgICAgICAgICAgICAgIHJ1bm5pbmcgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICBjYW5jZWxBbmltYXRpb25GcmFtZShyYWZJZCk7IGVsLnN0eWxlLnRyYW5zZm9ybSA9ICcnO1xuICAgICAgICAgICAgICAgIGlmIChsb2dvKXtcbiAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PntcbiAgICAgICAgICAgICAgICAgICAgICAgIGxvZ28uY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XG4gICAgICAgICAgICAgICAgICAgIH0sIDQwMDApXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUod2FpdFByb21pc2UpLmZpbmFsbHkoKCkgPT57XG4gICAgICAgICAgICBzdG9wKClcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY2hlY2tVc2VyQXV0aCgpIHtcbiAgICAgICAgY29uc29sZS5sb2codXNlcklkKVxuICAgICAgICBpZiAodXNlcklkKSB7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IHVuYXV0aE1lcyBvZiB1bmF1dGhNc2dzKSB7XG4gICAgICAgICAgICAgICAgdW5hdXRoTWVzLmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiByZXF1ZXN0KGAvZmF2dXNlci8ke3VzZXJJZH0/bm9jYWNoZT0xYClcbiAgICAgICAgICAgICAgICAudGhlbihyZXMgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAocmVzLnVzZXJpZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcGFydGljaXBhdGVCdG5zLmZvckVhY2goaXRlbSA9PiBpdGVtLmNsYXNzTGlzdC5hZGQoJ2hpZGUnKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZWRpcmVjdEJ0bnMuZm9yRWFjaChpdGVtID0+IGl0ZW0uY2xhc3NMaXN0LnJlbW92ZSgnaGlkZScpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlzVmVyaWZpZWRVc2VyID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGlzVmVyaWZpZWRVc2VyKVxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgcGFydGljaXBhdGVCdG5zLmZvckVhY2goaXRlbSA9PiBpdGVtLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGUnKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZWRpcmVjdEJ0bnMuZm9yRWFjaChpdGVtID0+IGl0ZW0uY2xhc3NMaXN0LmFkZCgnaGlkZScpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlzVmVyaWZpZWRVc2VyID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBmb3IgKGxldCByZWRpcmVjdEJ0biBvZiByZWRpcmVjdEJ0bnMpIHtcbiAgICAgICAgICAgICAgICByZWRpcmVjdEJ0bi5jbGFzc0xpc3QuYWRkKCdoaWRlJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBmb3IgKGxldCBwYXJ0aWNpcGF0ZUJ0biBvZiBwYXJ0aWNpcGF0ZUJ0bnMpIHtcbiAgICAgICAgICAgICAgICBwYXJ0aWNpcGF0ZUJ0bi5jbGFzc0xpc3QuYWRkKCdoaWRlJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBmb3IgKGNvbnN0IHVuYXV0aE1lcyBvZiB1bmF1dGhNc2dzKSB7XG4gICAgICAgICAgICAgICAgdW5hdXRoTWVzLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGUnKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShmYWxzZSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiByZXBvcnRFcnJvcihlcnIpIHtcbiAgICAgICAgY29uc3QgcmVwb3J0RGF0YSA9IHtcbiAgICAgICAgICAgIG9yaWdpbjogd2luZG93LmxvY2F0aW9uLmhyZWYsXG4gICAgICAgICAgICB1c2VyaWQ6IHVzZXJJZCxcbiAgICAgICAgICAgIGVycm9yVGV4dDogZXJyPy5lcnJvciB8fCBlcnI/LnRleHQgfHwgZXJyPy5tZXNzYWdlIHx8ICdVbmtub3duIGVycm9yJyxcbiAgICAgICAgICAgIHR5cGU6IGVycj8ubmFtZSB8fCAnVW5rbm93bkVycm9yJyxcbiAgICAgICAgICAgIHN0YWNrOiBlcnI/LnN0YWNrIHx8ICcnXG4gICAgICAgIH07XG5cbiAgICAgICAgZmV0Y2goJ2h0dHBzOi8vZmF2LXByb20uY29tL2FwaS1jbXMvcmVwb3J0cy9hZGQnLCB7XG4gICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkocmVwb3J0RGF0YSlcbiAgICAgICAgfSkuY2F0Y2goY29uc29sZS53YXJuKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiB0cmFuc2xhdGUoKSB7XG4gICAgICAgIGNvbnN0IGVsZW1zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW2RhdGEtdHJhbnNsYXRlXScpXG4gICAgICAgIGlmIChlbGVtcyAmJiBlbGVtcy5sZW5ndGgpIHtcbiAgICAgICAgICAgIGlmKHRyYW5zbGF0ZVN0YXRlKXtcbiAgICAgICAgICAgICAgICBlbGVtcy5mb3JFYWNoKGVsZW0gPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBrZXkgPSBlbGVtLmdldEF0dHJpYnV0ZSgnZGF0YS10cmFuc2xhdGUnKTtcbiAgICAgICAgICAgICAgICAgICAgZWxlbS5pbm5lckhUTUwgPSBpMThuRGF0YVtrZXldIHx8ICcqLS0tLU5FRUQgVE8gQkUgVFJBTlNMQVRFRC0tLS0qICAga2V5OiAgJyArIGtleTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGkxOG5EYXRhW2tleV0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsZW0ucmVtb3ZlQXR0cmlidXRlKCdkYXRhLXRyYW5zbGF0ZScpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwidHJhbnNsYXRpb24gd29ya3MhXCIpXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGxvY2FsZSA9PT0gJ2VuJykge1xuICAgICAgICAgICAgbWFpblBhZ2UuY2xhc3NMaXN0LmFkZCgnZW4nKTtcbiAgICAgICAgfVxuICAgICAgICByZWZyZXNoTG9jYWxpemVkQ2xhc3MobWFpblBhZ2UpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHJlZnJlc2hMb2NhbGl6ZWRDbGFzcyhlbGVtZW50KSB7XG4gICAgICAgIGNvbnN0IGJhc2VDc3NDbGFzcyA9IFwiXCJcbiAgICAgICAgaWYgKCFlbGVtZW50KSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgZm9yIChjb25zdCBsYW5nIG9mIFsndWsnLCAnZW4nXSkge1xuICAgICAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKGJhc2VDc3NDbGFzcyArIGxhbmcpO1xuICAgICAgICB9XG4gICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZChiYXNlQ3NzQ2xhc3MgKyBsb2NhbGUpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHJlbmRlclVzZXJzKHdlZWtOdW0sIHVzZXJEYXRhID0gW10pIHtcbiAgICAgICAgd2Vla051bSA9IE51bWJlcih3ZWVrTnVtKTtcbiAgICAgICAgdXNlckRhdGEgPSB1c2VyRGF0YS5maW5kKHdlZWsgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIHdlZWsud2VlayA9PT0gd2Vla051bVxuICAgICAgICB9KS51c2VycztcblxuICAgICAgICBjb25zb2xlLmxvZyh1c2VyRGF0YSk7XG5cbiAgICAgICAgY29uc3QgY3VycmVudFVzZXIgPSB1c2VyRGF0YS5maW5kKHVzZXIgPT4gdXNlci51c2VyaWQgPT09IHVzZXJJZCk7XG5cbiAgICAgICAgY29uc29sZS5sb2codXNlcklkKVxuICAgICAgICBjb25zb2xlLmxvZyhjdXJyZW50VXNlcilcbiAgICAgICAgY29uc29sZS5sb2coaXNWZXJpZmllZFVzZXIpXG5cbiAgICAgICAgaWYodXNlcklkICYmICFjdXJyZW50VXNlciAmJiBpc1ZlcmlmaWVkVXNlcil7XG4gICAgICAgICAgICB1c2VyRGF0YSA9IFsuLi51c2VyRGF0YSwge3VzZXJpZDogdXNlcklkLCBwb2ludHM6IDB9XVxuICAgICAgICB9XG4gICAgICAgIGNvbnNvbGUubG9nKHVzZXJEYXRhKTtcblxuICAgICAgICBwb3B1bGF0ZVVzZXJzVGFibGUodXNlckRhdGEsIHVzZXJJZCwgd2Vla051bSwgY3VycmVudFVzZXIsIGlzVmVyaWZpZWRVc2VyKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBwb3B1bGF0ZVVzZXJzVGFibGUodXNlcnMsIGN1cnJlbnRVc2VySWQsIHdlZWssIGN1cnJlbnRVc2VyLCBpc1ZlcmlmaWVkVXNlcikge1xuXG4gICAgICAgIGNvbnNvbGUubG9nKHVzZXJzKTtcbiAgICAgICAgcmVzdWx0c1RhYmxlLmlubmVySFRNTCA9ICcnO1xuICAgICAgICByZXN1bHRzVGFibGVPdGhlci5pbm5lckhUTUwgPSAnJztcbiAgICAgICAgaWYgKCF1c2Vycz8ubGVuZ3RoKSByZXR1cm47XG5cbiAgICAgICAgY29uc3QgaXNUb3BDdXJyZW50VXNlciA9IGN1cnJlbnRVc2VyICYmIHVzZXJzLnNsaWNlKDAsIDEwKS5zb21lKHVzZXIgPT4gdXNlci51c2VyaWQgPT09IGN1cnJlbnRVc2VySWQpO1xuXG4gICAgICAgIGNvbnN0IHRvcFVzZXJzTGVuZ3RoID0gIXVzZXJJZCB8fCBpc1RvcEN1cnJlbnRVc2VyICA/IDEzIDogMTA7XG5cbiAgICAgICAgY29uc3QgdG9wVXNlcnMgPSB1c2Vycy5zbGljZSgwLCB0b3BVc2Vyc0xlbmd0aCk7XG5cbiAgICAgICAgLy8gY29uc29sZS5sb2codXNlcnMpO1xuICAgICAgICB0b3BVc2Vycy5mb3JFYWNoKHVzZXIgPT4ge1xuICAgICAgICAgICAgZGlzcGxheVVzZXIodXNlciwgdXNlci51c2VyaWQgPT09IGN1cnJlbnRVc2VySWQsIHJlc3VsdHNUYWJsZSwgdG9wVXNlcnMsIGlzVG9wQ3VycmVudFVzZXIsIHdlZWspO1xuICAgICAgICB9KTtcbiAgICAgICAgLy8gY29uc29sZS5sb2coaXNUb3BDdXJyZW50VXNlcilcbiAgICAgICAgY29uc29sZS5sb2coaXNWZXJpZmllZFVzZXIpXG4gICAgICAgIGlmKGlzVmVyaWZpZWRVc2VyICYmICFjdXJyZW50VXNlcikge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ3VzZXIgdmVyaWZpZWQnKTtcbiAgICAgICAgICAgIGRpc3BsYXlVc2VyKGN1cnJlbnRVc2VyLCB0cnVlLCByZXN1bHRzVGFibGVPdGhlciwgdXNlcnMsIGZhbHNlLCB3ZWVrKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIWlzVG9wQ3VycmVudFVzZXIgJiYgY3VycmVudFVzZXIpIHtcbiAgICAgICAgICAgIGlzVmVyaWZpZWRVc2VyID0gZmFsc2U7XG4gICAgICAgICAgICBkaXNwbGF5VXNlcihjdXJyZW50VXNlciwgdHJ1ZSwgcmVzdWx0c1RhYmxlT3RoZXIsIHVzZXJzLCBmYWxzZSwgd2Vlayk7XG4gICAgICAgIH1cblxuXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZGlzcGxheVVzZXIodXNlciwgaXNDdXJyZW50VXNlciwgdGFibGUsIHVzZXJzLCBpc1RvcEN1cnJlbnRVc2VyLCB3ZWVrKSB7XG5cbiAgICAgICAgY29uc3QgcmVuZGVyUm93ID0gKHVzZXJEYXRhLCBvcHRpb25zID0ge30pID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHsgaGlnaGxpZ2h0ID0gZmFsc2UsIG5laWdoYm9yID0gZmFsc2UgfSA9IG9wdGlvbnM7XG4gICAgICAgICAgICBjb25zdCB1c2VyUm93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICB1c2VyUm93LmNsYXNzTGlzdC5hZGQoJ3RhYmxlX19yb3cnKTtcblxuICAgICAgICAgICAgY29uc3QgdXNlclBsYWNlID0gdXNlcnMuaW5kZXhPZih1c2VyRGF0YSkgKyAxO1xuICAgICAgICAgICAgY29uc3QgcHJpemVLZXkgPSBkZWJ1ZyA/IG51bGwgOiBnZXRQcml6ZVRyYW5zbGF0aW9uS2V5KHVzZXJQbGFjZSwgd2Vlayk7XG5cbiAgICAgICAgICAgIGlmICh1c2VyUGxhY2UgPD0gMykge1xuICAgICAgICAgICAgICAgIHVzZXJSb3cuY2xhc3NMaXN0LmFkZChgcGxhY2Uke3VzZXJQbGFjZX1gKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKGhpZ2hsaWdodCB8fCBpc0N1cnJlbnRVc2VyICYmICFuZWlnaGJvcikge1xuICAgICAgICAgICAgICAgIHVzZXJSb3cuY2xhc3NMaXN0LmFkZCgneW91Jyk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKG5laWdoYm9yKSB7XG4gICAgICAgICAgICAgICAgdXNlclJvdy5jbGFzc0xpc3QuYWRkKCdfbmVpZ2hib3InKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdXNlclJvdy5pbm5lckhUTUwgPSBgXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGFibGVfX3Jvdy1pdGVtXCI+XG4gICAgICAgICAgICAgICAgJHt1c2VyUGxhY2UgPCAxMCA/ICcwJyArIHVzZXJQbGFjZSA6IHVzZXJQbGFjZX1cbiAgICAgICAgICAgICAgICAke2lzQ3VycmVudFVzZXIgJiYgIW5laWdoYm9yID8gJzxzcGFuIGNsYXNzPVwieW91XCI+JyArIHRyYW5zbGF0ZUtleShcInlvdVwiKSArICc8L3NwYW4+JyA6ICcnfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGFibGVfX3Jvdy1pdGVtXCI+XG4gICAgICAgICAgICAgICAgJHtpc0N1cnJlbnRVc2VyICYmICFuZWlnaGJvciA/IHVzZXJEYXRhLnVzZXJpZCA6IG1hc2tVc2VySWQodXNlckRhdGEudXNlcmlkKX1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRhYmxlX19yb3ctaXRlbVwiPlxuICAgICAgICAgICAgICAgICR7TnVtYmVyKHVzZXJEYXRhLnBvaW50cykudG9GaXhlZCgyKX1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRhYmxlX19yb3ctaXRlbVwiPlxuICAgICAgICAgICAgICAgICR7cHJpemVLZXkgPyB0cmFuc2xhdGVLZXkocHJpemVLZXkpIDogJyAtICd9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgYDtcblxuICAgICAgICAgICAgdGFibGUuYXBwZW5kKHVzZXJSb3cpO1xuICAgICAgICB9O1xuICAgICAgICBpZiAoaXNDdXJyZW50VXNlciAmJiAhaXNUb3BDdXJyZW50VXNlcikge1xuICAgICAgICAgICAgY29uc3QgaW5kZXggPSB1c2Vycy5pbmRleE9mKHVzZXIpO1xuICAgICAgICAgICAgaWYgKHVzZXJzW2luZGV4IC0gMV0pIHtcbiAgICAgICAgICAgICAgICByZW5kZXJSb3codXNlcnNbaW5kZXggLSAxXSwgeyBuZWlnaGJvcjogdHJ1ZSB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJlbmRlclJvdyh1c2VyLCB7IGhpZ2hsaWdodDogdHJ1ZSB9KTtcbiAgICAgICAgICAgIGlmICh1c2Vyc1tpbmRleCArIDFdKSB7XG4gICAgICAgICAgICAgICAgcmVuZGVyUm93KHVzZXJzW2luZGV4ICsgMV0sIHsgbmVpZ2hib3I6IHRydWUgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZW5kZXJSb3codXNlcik7XG4gICAgICAgIH1cbiAgICB9XG5cblxuICAgIGZ1bmN0aW9uIHRyYW5zbGF0ZUtleShrZXksIGRlZmF1bHRWYWx1ZSkge1xuICAgICAgICBpZiAoIWtleSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGxldCBuZWVkS2V5ID0gZGVidWcgPyBrZXkgOiBgKi0tLS1ORUVEIFRPIEJFIFRSQU5TTEFURUQtLS0tKiBrZXk6ICR7a2V5fWBcblxuICAgICAgICBkZWZhdWx0VmFsdWUgPSAgbmVlZEtleSB8fCBrZXk7XG4gICAgICAgIHJldHVybiBpMThuRGF0YVtrZXldIHx8IGRlZmF1bHRWYWx1ZTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBtYXNrVXNlcklkKHVzZXJJZCkge1xuICAgICAgICByZXR1cm4gXCIqKlwiICsgdXNlcklkLnRvU3RyaW5nKCkuc2xpY2UoMik7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZ2V0UHJpemVUcmFuc2xhdGlvbktleShwbGFjZSwgd2Vlaykge1xuICAgICAgICBpZiAocGxhY2UgPD0gMykgcmV0dXJuIGBwcml6ZV8ke3dlZWt9LSR7cGxhY2V9YDtcbiAgICAgICAgaWYgKHBsYWNlIDw9IDEwKSByZXR1cm4gYHByaXplXyR7d2Vla30tNC0xMGA7XG4gICAgICAgIGlmIChwbGFjZSA8PSAyNSkgcmV0dXJuIGBwcml6ZV8ke3dlZWt9LTExLTI1YDtcbiAgICAgICAgaWYgKHBsYWNlIDw9IDUwKSByZXR1cm4gYHByaXplXyR7d2Vla30tMjYtNTBgO1xuICAgICAgICBpZiAocGxhY2UgPD0gNzUpIHJldHVybiBgcHJpemVfJHt3ZWVrfS01MS03NWA7XG4gICAgICAgIGlmIChwbGFjZSA8PSAxMDApIHJldHVybiBgcHJpemVfJHt3ZWVrfS03Ni0xMDBgO1xuICAgICAgICBpZiAocGxhY2UgPD0gMTI1KSByZXR1cm4gYHByaXplXyR7d2Vla30tMTAxLTEyNWA7XG4gICAgICAgIGlmIChwbGFjZSA8PSAxNTApIHJldHVybiBgcHJpemVfJHt3ZWVrfS0xMjYtMTUwYDtcbiAgICAgICAgaWYgKHBsYWNlIDw9IDE3NSkgcmV0dXJuIGBwcml6ZV8ke3dlZWt9LTE1MS0xNzVgO1xuICAgICAgICBpZiAocGxhY2UgPD0gMjAwKSByZXR1cm4gYHByaXplXyR7d2Vla30tMTc2LTIwMGA7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gc2hvd1ByaXplQnlEYXRhQXR0cihwcml6ZSl7XG4gICAgICAgIGNvbnN0IGFsbFByaXplcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLXByaXplXScpO1xuICAgICAgICBjb25zdCBjdXJyZW50UHJpemUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBbZGF0YS1wcml6ZT1cIiR7cHJpemV9XCJdYCk7XG5cbiAgICAgICAgaWYgKGN1cnJlbnRQcml6ZSAmJiBhbGxQcml6ZXMpIHtcbiAgICAgICAgICAgIGFsbFByaXplcy5mb3JFYWNoKHByaXplID0+IHtcbiAgICAgICAgICAgICAgICBwcml6ZS5jbGFzc0xpc3QuYWRkKCdoaWRlJyk7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgY3VycmVudFByaXplLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGUnKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHBhcnRpY2lwYXRlKCkge1xuICAgICAgICBpZiAoIXVzZXJJZCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHBhcmFtcyA9IHsgdXNlcmlkOiB1c2VySWQgfTtcbiAgICAgICAgZmV0Y2goYXBpVVJMICsgJy91c2VyLycsIHtcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgICAnQWNjZXB0JzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHBhcmFtcylcbiAgICAgICAgfSkudGhlbihyZXMgPT4gcmVzLmpzb24oKSlcbiAgICAgICAgICAgIC50aGVuKHJlcyA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVzKTtcbiAgICAgICAgICAgICAgICBsb2FkZXJCdG4gPSB0cnVlXG4gICAgICAgICAgICAgICAgdG9nZ2xlQ2xhc3NlcyhwYXJ0aWNpcGF0ZUJ0bnMsIFwibG9hZGVyXCIpXG4gICAgICAgICAgICAgICAgdG9nZ2xlVHJhbnNsYXRlcyhwYXJ0aWNpcGF0ZUJ0bnMsIFwibG9hZGVyXCIpXG4gICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PntcbiAgICAgICAgICAgICAgICAgICAgdG9nZ2xlVHJhbnNsYXRlcyhwYXJ0aWNpcGF0ZUJ0bnMsIFwibG9hZGVyX3JlYWR5XCIpXG4gICAgICAgICAgICAgICAgICAgIHRvZ2dsZUNsYXNzZXMocGFydGljaXBhdGVCdG5zLCBcImRvbmVcIilcbiAgICAgICAgICAgICAgICAgICAgdG9nZ2xlQ2xhc3NlcyhwYXJ0aWNpcGF0ZUJ0bnMsIFwibG9hZGVyXCIpXG4gICAgICAgICAgICAgICAgfSwgNTAwKVxuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCk9PntcbiAgICAgICAgICAgICAgICAgICAgY2hlY2tVc2VyQXV0aCgpXG4gICAgICAgICAgICAgICAgICAgIGxvYWRVc2VycyhcIj9ub2NhY2hlPTFcIikudGhlbihyZXMgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVuZGVyVXNlcnMoYWN0aXZlV2VlaywgdGFibGVEYXRhKVxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIH0sIDEwMDApXG5cbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuY2F0Y2goZXJyID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKCdBUEkgcmVxdWVzdCBmYWlsZWQ6JywgZXJyKTtcblxuICAgICAgICAgICAgICAgIHJlcG9ydEVycm9yKGVycik7XG5cbiAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZmF2LXBhZ2UnKS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICAgICAgICAgIGlmICh3aW5kb3cubG9jYXRpb24uaHJlZi5zdGFydHNXaXRoKFwiaHR0cHM6Ly93d3cuZmF2YmV0LmhyL1wiKSkge1xuICAgICAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9ICcvcHJvbW9jaWplL3Byb21vY2lqYS9zdHViLyc7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSAnL3Byb21vcy9wcm9tby9zdHViLyc7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KGVycik7XG4gICAgICAgICAgICB9KTtcbiAgICB9XG4gICAgZnVuY3Rpb24gbG9hZFVzZXJzKHBhcmFtZXRyKSB7XG4gICAgICAgIGNvbnN0IHJlcXVlc3RzID0gW107XG4gICAgICAgIHRhYmxlRGF0YS5sZW5ndGggPSAwXG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPD0gcGVyaW9kQW1vdW50OyBpKyspIHtcbiAgICAgICAgICAgIGNvbnN0IHdlZWsgPSBpOyAvLyDQsNCx0L4g0LHRg9C00Ywt0Y/QutCwINC70L7Qs9GW0LrQsCDQtNC70Y8g0YTQvtGA0LzRg9Cy0LDQvdC90Y8g0L3QvtC80LXRgNCwINGC0LjQttC90Y9cbiAgICAgICAgICAgIGNvbnN0IHJlcSA9IHJlcXVlc3QoYC91c2Vycy8ke3dlZWt9JHtwYXJhbWV0ciA/IHBhcmFtZXRyIDogXCJcIn1gKS50aGVuKGRhdGEgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xuICAgICAgICAgICAgICAgIHRhYmxlRGF0YS5wdXNoKHsgd2VlaywgdXNlcnM6IGRhdGEgfSk7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgcmVxdWVzdHMucHVzaChyZXEpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIFByb21pc2UuYWxsKHJlcXVlc3RzKVxuICAgICAgICAuY2F0Y2goZXJyb3IgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgbG9hZGluZyB1c2VyczonLCBlcnJvcik7XG4gICAgICAgIH0pO1xuICAgIH1cblxuXG5cbi8vc2xpZGVyXG5cbiAgICBjb25zdCBidXR0b25zUmlnaHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucHJpemVfX21vdmUtcmlnaHQnKSxcbiAgICAgICAgYnV0dG9uc0xlZnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucHJpemVfX21vdmUtbGVmdCcpLFxuICAgICAgICBzbGlkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2FyZHMnKSxcbiAgICAgICAgaXRlbXMgPSBzbGlkZXIucXVlcnlTZWxlY3RvckFsbCgnLmNhcmQnKSxcbiAgICAgICAgdG90YWxJdGVtcyA9IGl0ZW1zLmxlbmd0aCxcbiAgICAgICAgZG90cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5wcml6ZV9fZG90cy1pdGVtJylcblxuICAgIGxldCBjdXJyZW50SW5kZXggPSAyO1xuICAgIGxldCBzdGFydFggPSAwO1xuICAgIGxldCBpc0RyYWdnaW5nID0gZmFsc2U7XG5cblxuICAgIGZ1bmN0aW9uIHVwZGF0ZVNsaWRlcigpIHtcbiAgICAgICAgaXRlbXMuZm9yRWFjaCgoaXRlbSwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGRpc3RhbmNlID0gKGluZGV4IC0gY3VycmVudEluZGV4ICsgdG90YWxJdGVtcykgJSB0b3RhbEl0ZW1zO1xuXG4gICAgICAgICAgICBpdGVtLmNsYXNzTGlzdC5yZW1vdmUoXG4gICAgICAgICAgICAgICAgJ19sZWZ0JywgJ19sZWZ0MScsICdfbGVmdDInLFxuICAgICAgICAgICAgICAgICdfcmlnaHQnLCAnX3JpZ2h0MScsICdfcmlnaHQyJyxcbiAgICAgICAgICAgICAgICAnX2FjdGl2ZScsICdfaGlkZS1zbGlkZSdcbiAgICAgICAgICAgICk7XG5cbiAgICAgICAgICAgIGlmIChpbmRleCA9PT0gY3VycmVudEluZGV4KSB7XG4gICAgICAgICAgICAgICAgaXRlbS5jbGFzc0xpc3QuYWRkKCdfYWN0aXZlJyk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoZGlzdGFuY2UgPT09IDEpIHtcbiAgICAgICAgICAgICAgICBpdGVtLmNsYXNzTGlzdC5hZGQoJ19yaWdodDEnKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoZGlzdGFuY2UgPT09IDIpIHtcbiAgICAgICAgICAgICAgICBpdGVtLmNsYXNzTGlzdC5hZGQoJ19yaWdodDInKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoZGlzdGFuY2UgPT09IHRvdGFsSXRlbXMgLSAxKSB7XG4gICAgICAgICAgICAgICAgaXRlbS5jbGFzc0xpc3QuYWRkKCdfbGVmdDEnKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoZGlzdGFuY2UgPT09IHRvdGFsSXRlbXMgLSAyKSB7XG4gICAgICAgICAgICAgICAgaXRlbS5jbGFzc0xpc3QuYWRkKCdfbGVmdDInKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgaXRlbS5jbGFzc0xpc3QuYWRkKCdfaGlkZS1zbGlkZScpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgdXBkYXRlRG90cygpXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gdXBkYXRlRG90cygpe1xuICAgICAgICBkb3RzLmZvckVhY2goKGl0ZW0sIGkpID0+IHtcbiAgICAgICAgICAgIGl0ZW0uY2xhc3NMaXN0LnJlbW92ZSgnX2FjdGl2ZScpO1xuICAgICAgICAgICAgaWYoaSA9PT0gY3VycmVudEluZGV4KSB7XG4gICAgICAgICAgICAgICAgaXRlbS5jbGFzc0xpc3QuYWRkKCdfYWN0aXZlJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gbW92ZVNsaWRlcihvZmZzZXQpIHtcbiAgICAgICAgY3VycmVudEluZGV4ID0gKGN1cnJlbnRJbmRleCArIG9mZnNldCArIHRvdGFsSXRlbXMpICUgdG90YWxJdGVtcztcbiAgICAgICAgdXBkYXRlU2xpZGVyKCk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaGFuZGxlU3RhcnQoZXZlbnQpIHtcbiAgICAgICAgaXNEcmFnZ2luZyA9IHRydWU7XG4gICAgICAgIHN0YXJ0WCA9IGV2ZW50LmNsaWVudFggfHwgZXZlbnQudG91Y2hlc1swXS5jbGllbnRYO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGhhbmRsZU1vdmUoZXZlbnQpIHtcbiAgICAgICAgaWYgKCFpc0RyYWdnaW5nKSByZXR1cm47XG5cbiAgICAgICAgY29uc3QgY3VycmVudFggPSBldmVudC5jbGllbnRYIHx8IGV2ZW50LnRvdWNoZXNbMF0uY2xpZW50WDtcbiAgICAgICAgY29uc3QgZGlmZlggPSBjdXJyZW50WCAtIHN0YXJ0WDtcblxuICAgICAgICBpZiAoTWF0aC5hYnMoZGlmZlgpID4gNTApIHtcbiAgICAgICAgICAgIG1vdmVTbGlkZXIoZGlmZlggPiAwID8gLTEgOiAxKTtcbiAgICAgICAgICAgIGlzRHJhZ2dpbmcgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGhhbmRsZUVuZCgpIHtcbiAgICAgICAgaXNEcmFnZ2luZyA9IGZhbHNlO1xuICAgIH1cblxuLy9zbGlkZXJcblxuICAgIC8vIGZ1bmN0aW9uIG9wZW5Qb3B1cEJ5QXR0cihwb3B1cEF0dHIpIHtcbiAgICAvLyAgICAgY29uc3QgYWxsUG9wdXBzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnBvcHVwJyk7XG4gICAgLy8gICAgIGFsbFBvcHVwcy5mb3JFYWNoKHAgPT4gcC5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKSk7XG4gICAgLy8gICAgIGRvY3VtZW50LmJvZHkuc3R5bGUub3ZlcmZsb3cgPSAnaGlkZGVuJztcbiAgICAvL1xuICAgIC8vICAgICBjb25zb2xlLmxvZyhwb3B1cEF0dHIpO1xuICAgIC8vXG4gICAgLy8gICAgIGNvbnN0IHRhcmdldFBvcHVwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLnBvcHVwW2RhdGEtcG9wdXA9XCIke3BvcHVwQXR0cn1cIl1gKTtcbiAgICAvLyAgICAgaWYgKHRhcmdldFBvcHVwKSB7XG4gICAgLy8gICAgICAgICB0YXJnZXRQb3B1cC5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcbiAgICAvLyAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wb3B1cHMnKS5jbGFzc0xpc3QucmVtb3ZlKCdvcGFjaXR5Jyk7XG4gICAgLy8gICAgIH1cbiAgICAvLyB9XG5cbiAgICBmdW5jdGlvbiBjbG9zZUFsbFBvcHVwcygpIHtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnBvcHVwJykuZm9yRWFjaChwID0+IHAuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJykpO1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucG9wdXBzJykuY2xhc3NMaXN0LmFkZCgnb3BhY2l0eS1vdmVybGF5Jyk7XG4gICAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUub3ZlcmZsb3cgPSAnYXV0byc7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaW5pdE9wZW5Cb3goKXtcbiAgICAgICAgc2hha2VVbnRpbChib3gsIGdldFVzZXJQcml6ZSgpLCBsb2dvQm94KS50aGVuKHByaXplID0+IHtcbiAgICAgICAgICAgIGJveENhcC5jbGFzc0xpc3QuYWRkKFwib3BlblwiKTtcbiAgICAgICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgYm94Q2FwLmNsYXNzTGlzdC5yZW1vdmUoXCJvcGVuXCIpO1xuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHByaXplKTtcbiAgICAgICAgICAgICAgICB9LCAyMDAwKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KS50aGVuKHByaXplID0+IHtcbiAgICAgICAgICAgIHNob3dQcmVsb2FkZXIocHJpemUpO1xuICAgICAgICB9KTtcbiAgICB9XG5cblxuICAgIGxvYWRUcmFuc2xhdGlvbnMoKVxuICAgICAgICAudGhlbihpbml0KSAvLyDQt9Cw0L/Rg9GB0Log0ZbQvdGW0YLRgyDRgdGC0L7RgNGW0L3QutC4XG5cbiAgICAvLyBpbml0KClcblxuICAgIC8vIC8vLyB0ZXN0XG5cbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCAoKSA9PiB7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWVudS1idG5cIik/LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1lbnUtdGVzdFwiKT8uY2xhc3NMaXN0LnRvZ2dsZShcImhpZGVcIik7XG4gICAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgY29uc3QgbG5nQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5sbmctYnRuXCIpXG5cbiAgICBsbmdCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgaWYgKHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oXCJsb2NhbGVcIikpIHtcbiAgICAgICAgICAgIHNlc3Npb25TdG9yYWdlLnJlbW92ZUl0ZW0oXCJsb2NhbGVcIik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKFwibG9jYWxlXCIsIFwiZW5cIik7XG4gICAgICAgIH1cbiAgICAgICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpO1xuICAgIH0pO1xuXG4gICAgY29uc3QgYXV0aEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYXV0aC1idG5cIilcblxuICAgIGF1dGhCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+e1xuICAgICAgICBpZih1c2VySWQpe1xuICAgICAgICAgICAgc2Vzc2lvblN0b3JhZ2UucmVtb3ZlSXRlbShcInVzZXJJZFwiKVxuICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oXCJ1c2VySWRcIiwgXCIxMDAzMDAyNjhcIilcbiAgICAgICAgfVxuICAgICAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKClcbiAgICB9KTtcblxuICAgIGNvbnN0IHBvcHVwc01lbnUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnBvcHVwcy1idG5cIik7XG5cbiAgICBwb3B1cHNNZW51LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWVudS1wb3B1cFwiKS5jbGFzc0xpc3QudG9nZ2xlKFwiaGlkZVwiKTtcbiAgICB9KVxuXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5vcGVuLWJveFwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT57XG4gICAgICAgIGluaXRPcGVuQm94KCk7XG4gICAgfSlcblxufSkoKTtcblxuLy8g0L/RltGB0LvRjyDRgtC10YHRgtGDINCy0LjQtNCw0LvQuCDRhtGOINGE0YPQvdC60YbRltGOINGWINGA0L7Qt9C60L7QvNC10L3RgtC4INCw0L3QsNC70L7Qs9GW0YfQvdGDINCyINGE0YPQvdC60YbRltGXINCy0LjQutC70LjQutGDXG5mdW5jdGlvbiBvcGVuUG9wdXBCeUF0dHIocG9wdXBBdHRyKSB7XG4gICAgY29uc3QgYWxsUG9wdXBzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnBvcHVwJyk7XG4gICAgYWxsUG9wdXBzLmZvckVhY2gocCA9PiBwLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpKTtcblxuICAgIGNvbnNvbGUubG9nKHBvcHVwQXR0cik7XG5cbiAgICBjb25zdCB0YXJnZXRQb3B1cCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC5wb3B1cFtkYXRhLXBvcHVwPVwiJHtwb3B1cEF0dHJ9XCJdYCk7XG4gICAgaWYgKHRhcmdldFBvcHVwKSB7XG4gICAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUub3ZlcmZsb3cgPSAnaGlkZGVuJztcbiAgICAgICAgdGFyZ2V0UG9wdXAuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wb3B1cHMnKS5jbGFzc0xpc3QucmVtb3ZlKCdvcGFjaXR5LW92ZXJsYXknKTtcbiAgICB9XG59XG5cbiJdfQ==
