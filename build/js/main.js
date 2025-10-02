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
    return request("/new-translates/".concat(locale)).then(function (json) {
      i18nData = json;
      translate();
      var mutationObserver = new MutationObserver(function (mutations) {
        mutationObserver.disconnect();
        translate();
        mutationObserver.observe(targetNode, {
          childList: true,
          subtree: true
        });
      });
      mutationObserver.observe(document.getElementById("hardcoreTennis"), {
        childList: true,
        subtree: true
      });
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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOlsiYXBpVVJMIiwiZ2V0QWN0aXZlV2VlayIsInByb21vU3RhcnREYXRlIiwid2Vla0R1cmF0aW9uIiwiY3VycmVudERhdGUiLCJEYXRlIiwid2Vla0RhdGVzIiwiRGF5IiwiV2VlayIsImZvcm1hdERhdGUiLCJkYXRlIiwiZ2V0RGF0ZSIsInRvU3RyaW5nIiwicGFkU3RhcnQiLCJnZXRNb250aCIsImNhbGN1bGF0ZVdlZWtQZXJpb2QiLCJ3ZWVrSW5kZXgiLCJiYXNlU3RhcnQiLCJnZXRUaW1lIiwic3RhcnQiLCJlbmQiLCJhY3RpdmVXZWVrSW5kZXgiLCJpIiwiaXNWZXJpZmllZFVzZXIiLCJwZXJpb2RBbW91bnQiLCJ0YWJsZURhdGEiLCJhY3RpdmVXZWVrIiwibWFpblBhZ2UiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJ1bmF1dGhNc2dzIiwicXVlcnlTZWxlY3RvckFsbCIsInBhcnRpY2lwYXRlQnRucyIsInJlZGlyZWN0QnRucyIsImxvYWRlciIsImNhcmRQb3B1cEljb25zIiwicHJlbG9hZGVyIiwicHJlbG9hZGVyQ2FyZHMiLCJwcmVsb2FkZXJQcml6ZSIsImJveCIsImxvZ29Cb3giLCJib3hDYXAiLCJ1a0xlbmciLCJlbkxlbmciLCJ0b2dnbGVDbGFzc2VzIiwiZWxlbWVudHMiLCJjbGFzc05hbWUiLCJmb3JFYWNoIiwiZWwiLCJjbGFzc0xpc3QiLCJ0b2dnbGUiLCJ0b2dnbGVUcmFuc2xhdGVzIiwiZGF0YUF0dHIiLCJzZXRBdHRyaWJ1dGUiLCJpbm5lckhUTUwiLCJpMThuRGF0YSIsInJlbW92ZUF0dHJpYnV0ZSIsImxvYWRlckJ0biIsImxvY2FsZSIsInNlc3Npb25TdG9yYWdlIiwiZ2V0SXRlbSIsImRlYnVnIiwiaGlkZUxvYWRlciIsInRyYW5zbGF0ZVN0YXRlIiwidXNlcklkIiwiTnVtYmVyIiwicmVxdWVzdCIsImxpbmsiLCJleHRyYU9wdGlvbnMiLCJmZXRjaCIsImhlYWRlcnMiLCJ0aGVuIiwicmVzIiwib2siLCJFcnJvciIsImpzb24iLCJlcnIiLCJjb25zb2xlIiwiZXJyb3IiLCJQcm9taXNlIiwicmVqZWN0IiwiYWRkIiwiYm9keSIsInN0eWxlIiwib3ZlcmZsb3ciLCJyZW1vdmUiLCJpbml0IiwidHJ5RGV0ZWN0VXNlcklkIiwicXVpY2tDaGVja0FuZFJlbmRlciIsInVwZGF0ZVNsaWRlciIsImNhcmQiLCJhZGRFdmVudExpc3RlbmVyIiwiYnV0dG9uc0xlZnQiLCJidG4iLCJtb3ZlU2xpZGVyIiwicG9pbnRlckV2ZW50cyIsInNldFRpbWVvdXQiLCJidXR0b25zUmlnaHQiLCJzbGlkZXIiLCJoYW5kbGVTdGFydCIsImhhbmRsZU1vdmUiLCJoYW5kbGVFbmQiLCJlIiwib3BlblBvcHVwRWwiLCJjb250ZW50V3JhcCIsImNsb3NlQnRuIiwiY29udGFpbnMiLCJ0YXJnZXQiLCJjbG9zZUFsbFBvcHVwcyIsImljb24iLCJnZXRBdHRyaWJ1dGUiLCJvcGVuUG9wdXBCeUF0dHIiLCJ3aW5kb3ciLCJzdG9yZSIsInN0YXRlIiwiZ2V0U3RhdGUiLCJhdXRoIiwiaXNBdXRob3JpemVkIiwiaWQiLCJnX3VzZXJfaWQiLCJhdHRlbXB0cyIsIm1heEF0dGVtcHRzIiwiYXR0ZW1wdEludGVydmFsIiwid2FpdEZvclVzZXJJZCIsInJlc29sdmUiLCJpbnRlcnZhbCIsInNldEludGVydmFsIiwiY2xlYXJJbnRlcnZhbCIsImxvYWRUcmFuc2xhdGlvbnMiLCJ0cmFuc2xhdGUiLCJtdXRhdGlvbk9ic2VydmVyIiwiTXV0YXRpb25PYnNlcnZlciIsIm11dGF0aW9ucyIsImRpc2Nvbm5lY3QiLCJvYnNlcnZlIiwidGFyZ2V0Tm9kZSIsImNoaWxkTGlzdCIsInN1YnRyZWUiLCJnZXRFbGVtZW50QnlJZCIsImNsZWFyUHJlbG9hZGVyU3RhdGUiLCJhbGxDYXJkc0lubmVyIiwiYWxsQ2FyZEJhY2siLCJwb3B1cFByZWxvYWRlciIsInNob3dQcmVsb2FkZXIiLCJwcml6ZSIsInNob3dQcml6ZUJ5RGF0YUF0dHIiLCJnZXRVc2VyUHJpemUiLCJzaGFrZVVudGlsIiwid2FpdFByb21pc2UiLCJsb2dvIiwib3B0cyIsImFtcGxpdHVkZSIsImR1cmF0aW9uIiwiYXhpcyIsInN0b3AiLCJhbmltYXRlIiwia2V5ZnJhbWVzIiwidHJhbnNmb3JtIiwiYW5pbSIsIml0ZXJhdGlvbnMiLCJJbmZpbml0eSIsImVhc2luZyIsImNhbmNlbCIsInJhZklkIiwicnVubmluZyIsImxvb3AiLCJ0IiwicGhhc2UiLCJNYXRoIiwiUEkiLCJkZWx0YSIsInNpbiIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsImNhbmNlbEFuaW1hdGlvbkZyYW1lIiwiY2hlY2tVc2VyQXV0aCIsImxvZyIsInVuYXV0aE1lcyIsInVzZXJpZCIsIml0ZW0iLCJyZWRpcmVjdEJ0biIsInBhcnRpY2lwYXRlQnRuIiwicmVwb3J0RXJyb3IiLCJyZXBvcnREYXRhIiwib3JpZ2luIiwibG9jYXRpb24iLCJocmVmIiwiZXJyb3JUZXh0IiwidGV4dCIsIm1lc3NhZ2UiLCJ0eXBlIiwibmFtZSIsInN0YWNrIiwibWV0aG9kIiwiSlNPTiIsInN0cmluZ2lmeSIsIndhcm4iLCJlbGVtcyIsImxlbmd0aCIsImVsZW0iLCJrZXkiLCJyZWZyZXNoTG9jYWxpemVkQ2xhc3MiLCJlbGVtZW50IiwiYmFzZUNzc0NsYXNzIiwibGFuZyIsInJlbmRlclVzZXJzIiwid2Vla051bSIsInVzZXJEYXRhIiwiZmluZCIsIndlZWsiLCJ1c2VycyIsImN1cnJlbnRVc2VyIiwidXNlciIsInBvaW50cyIsInBvcHVsYXRlVXNlcnNUYWJsZSIsImN1cnJlbnRVc2VySWQiLCJyZXN1bHRzVGFibGUiLCJyZXN1bHRzVGFibGVPdGhlciIsImlzVG9wQ3VycmVudFVzZXIiLCJzbGljZSIsInNvbWUiLCJ0b3BVc2Vyc0xlbmd0aCIsInRvcFVzZXJzIiwiZGlzcGxheVVzZXIiLCJpc0N1cnJlbnRVc2VyIiwidGFibGUiLCJyZW5kZXJSb3ciLCJvcHRpb25zIiwiaGlnaGxpZ2h0IiwibmVpZ2hib3IiLCJ1c2VyUm93IiwiY3JlYXRlRWxlbWVudCIsInVzZXJQbGFjZSIsImluZGV4T2YiLCJwcml6ZUtleSIsImdldFByaXplVHJhbnNsYXRpb25LZXkiLCJ0cmFuc2xhdGVLZXkiLCJtYXNrVXNlcklkIiwidG9GaXhlZCIsImFwcGVuZCIsImluZGV4IiwiZGVmYXVsdFZhbHVlIiwibmVlZEtleSIsInBsYWNlIiwiYWxsUHJpemVzIiwiY3VycmVudFByaXplIiwicGFydGljaXBhdGUiLCJwYXJhbXMiLCJsb2FkVXNlcnMiLCJkaXNwbGF5Iiwic3RhcnRzV2l0aCIsInBhcmFtZXRyIiwicmVxdWVzdHMiLCJyZXEiLCJkYXRhIiwicHVzaCIsImFsbCIsIml0ZW1zIiwidG90YWxJdGVtcyIsImRvdHMiLCJjdXJyZW50SW5kZXgiLCJzdGFydFgiLCJpc0RyYWdnaW5nIiwiZGlzdGFuY2UiLCJ1cGRhdGVEb3RzIiwib2Zmc2V0IiwiZXZlbnQiLCJjbGllbnRYIiwidG91Y2hlcyIsImN1cnJlbnRYIiwiZGlmZlgiLCJhYnMiLCJwIiwiaW5pdE9wZW5Cb3giLCJsbmdCdG4iLCJyZW1vdmVJdGVtIiwic2V0SXRlbSIsInJlbG9hZCIsImF1dGhCdG4iLCJwb3B1cHNNZW51IiwicG9wdXBBdHRyIiwiYWxsUG9wdXBzIiwidGFyZ2V0UG9wdXAiXSwibWFwcGluZ3MiOiI7OzsrQ0FDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEQSxDQUFDLFlBQVk7RUFBQTtFQUVULElBQU1BLE1BQU0sR0FBRyx3Q0FBd0M7RUFFdkQsSUFBTUMsYUFBYSxHQUFHLFNBQWhCQSxhQUFhLENBQUlDLGNBQWMsRUFBRUMsWUFBWSxFQUFLO0lBQ3BELElBQU1DLFdBQVcsR0FBRyxJQUFJQyxJQUFJLEVBQUU7SUFDOUIsSUFBSUMsU0FBUyxHQUFHLEVBQUU7SUFFbEIsSUFBTUMsR0FBRyxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLElBQUk7SUFDL0Is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QVMsQ0FBQ29DLE1BQU0sQ0FBQyxRQUFRLENBQUM7RUFBQSxFQUFDO0VBRXBEUixPQUFPLENBQUNrRyxHQUFHLENBQUN3RyxTQUFTLENBQUM7RUFFdEIsSUFBTUUsV0FBVyxHQUFHN1AsUUFBUSxDQUFDQyxhQUFhLCtCQUF1QjBQLFNBQVMsU0FBSztFQUMvRSxJQUFJRSxXQUFXLEVBQUU7SUFDYjdQLFFBQVEsQ0FBQ3NELElBQUksQ0FBQ0MsS0FBSyxDQUFDQyxRQUFRLEdBQUcsUUFBUTtJQUN2Q3FNLFdBQVcsQ0FBQ3hPLFNBQVMsQ0FBQ2dDLEdBQUcsQ0FBQyxRQUFRLENBQUM7SUFDbkNyRCxRQUFRLENBQUNDLGFBQWEsQ0FBQyxTQUFTLENBQUMsQ0FBQ29CLFNBQVMsQ0FBQ29DLE1BQU0sQ0FBQyxpQkFBaUIsQ0FBQztFQUN6RTtBQUNKIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gKCkge1xuXG4gICAgY29uc3QgYXBpVVJMID0gJ2h0dHBzOi8vZmF2LXByb20uY29tL2FwaV9nYW1lX3VuaXZlcnNlJ1xuXG4gICAgY29uc3QgZ2V0QWN0aXZlV2VlayA9IChwcm9tb1N0YXJ0RGF0ZSwgd2Vla0R1cmF0aW9uKSA9PiB7XG4gICAgICAgIGNvbnN0IGN1cnJlbnREYXRlID0gbmV3IERhdGUoKTtcbiAgICAgICAgbGV0IHdlZWtEYXRlcyA9IFtdO1xuXG4gICAgICAgIGNvbnN0IERheSA9IDI0ICogNjAgKiA2MCAqIDEwMDA7XG4gICAgICAgIGNvbnN0IFdlZWsgPSB3ZWVrRHVyYXRpb24gKiBEYXk7XG5cbiAgICAgICAgY29uc3QgZm9ybWF0RGF0ZSA9IChkYXRlKSA9PlxuICAgICAgICAgICAgYCR7ZGF0ZS5nZXREYXRlKCkudG9TdHJpbmcoKS5wYWRTdGFydCgyLCBcIjBcIil9LiR7KGRhdGUuZ2V0TW9udGgoKSArIDEpLnRvU3RyaW5nKCkucGFkU3RhcnQoMiwgXCIwXCIpfWA7XG5cbiAgICAgICAgY29uc3QgY2FsY3VsYXRlV2Vla1BlcmlvZCA9ICh3ZWVrSW5kZXgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGJhc2VTdGFydCA9IHByb21vU3RhcnREYXRlLmdldFRpbWUoKTtcbiAgICAgICAgICAgIGNvbnN0IHN0YXJ0ID0gbmV3IERhdGUoYmFzZVN0YXJ0ICsgd2Vla0luZGV4ICogV2Vlayk7XG4gICAgICAgICAgICBsZXQgZW5kID0gbmV3IERhdGUoc3RhcnQuZ2V0VGltZSgpICsgKHdlZWtEdXJhdGlvbiAqIERheSAtIDEpKTtcbiAgICAgICAgICAgIHJldHVybiB7IHN0YXJ0LCBlbmQgfTtcbiAgICAgICAgfTtcblxuICAgICAgICBsZXQgYWN0aXZlV2Vla0luZGV4ID0gbnVsbDtcblxuICAgICAgICAvLyDQn9C10YDQtdCy0ZbRgNC60LAg0L/QvtGC0L7Rh9C90L7Qs9C+INGC0LjQttC90Y9cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMDsgaSsrKSB7IC8vINCe0LHQvNC10LbRg9GU0LzQviAxMCDRgtC40LbQvdGP0LzQuCAo0Y/QutGJ0L4g0L/QvtGC0YDRltCx0L3QviDQsdGW0LvRjNGI0LUsINC/0YDQvtGB0YLQviDQt9C80ZbQvdGW0YLRjCDQu9GW0YfQuNC70YzQvdC40LopXG4gICAgICAgICAgICBjb25zdCB7IHN0YXJ0LCBlbmQgfSA9IGNhbGN1bGF0ZVdlZWtQZXJpb2QoaSk7XG4gICAgICAgICAgICBpZiAoY3VycmVudERhdGUgPj0gc3RhcnQgJiYgY3VycmVudERhdGUgPD0gZW5kKSB7XG4gICAgICAgICAgICAgICAgYWN0aXZlV2Vla0luZGV4ID0gaSArIDE7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gYWN0aXZlV2Vla0luZGV4O1xuICAgIH07XG5cbiAgICBjb25zdCBwcm9tb1N0YXJ0RGF0ZSA9IG5ldyBEYXRlKFwiMjAyNS0wNS0wNVQwMDowMDowMFwiKTtcbiAgICBjb25zdCB3ZWVrRHVyYXRpb24gPSAxMDtcblxuICAgIGxldCBpc1ZlcmlmaWVkVXNlciA9IGZhbHNlO1xuXG4gICAgbGV0IHBlcmlvZEFtb3VudCA9IDIgLy8g0LrRltC70YzQutGW0YHRgtGMINC/0LXRgNGW0L7QtNGW0LIg0LIg0LDQutGG0ZbRlywg0YLRgNC10LHQsCDQtNC70Y8g0LrQtdGI0YPQstCw0L3QvdGPINGW0L3RhNC4INC3INGC0LDQsdC70LhcblxuICAgIGxldCB0YWJsZURhdGEgPSBbXVxuICAgIGxldCBhY3RpdmVXZWVrID0gZ2V0QWN0aXZlV2Vlayhwcm9tb1N0YXJ0RGF0ZSwgd2Vla0R1cmF0aW9uKSB8fCAxO1xuICAgIC8vIGxldCBhY3RpdmVXZWVrID0gMlxuXG4gICAgaWYgKGFjdGl2ZVdlZWsgPiAyKSBhY3RpdmVXZWVrID0gMlxuXG5cbiAgICBjb25zdCBtYWluUGFnZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZmF2LXBhZ2VcIiksXG4gICAgICAgIHVuYXV0aE1zZ3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcudW5hdXRoLW1zZycpLFxuICAgICAgICBwYXJ0aWNpcGF0ZUJ0bnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucGFydC1idG4nKSxcbiAgICAgICAgcmVkaXJlY3RCdG5zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmJ0bi1qb2luJyksXG4gICAgICAgIGxvYWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc3Bpbm5lci1vdmVybGF5XCIpLFxuICAgICAgICBjYXJkUG9wdXBJY29ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jYXJkX19wb3B1cCcpLFxuICAgICAgICBwcmVsb2FkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucG9wdXAtLXByZWxvYWRlcicpLFxuICAgICAgICBwcmVsb2FkZXJDYXJkcyA9IHByZWxvYWRlci5xdWVyeVNlbGVjdG9yQWxsKCcuY2FyZF9faW5uZXInKSxcbiAgICAgICAgcHJlbG9hZGVyUHJpemUgPSBwcmVsb2FkZXIucXVlcnlTZWxlY3RvcignLmNhcmRfX2lubmVyLS1wcml6ZScpLFxuICAgICAgICBib3ggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYm94X19vcGVuJyksXG4gICAgICAgIGxvZ29Cb3ggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYm94X19sb2dvJyksXG4gICAgICAgIGJveENhcCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ib3hfX29wZW4tY2FwJylcblxuICAgIGNvbnN0IHVrTGVuZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN1a0xlbmcnKTtcbiAgICBjb25zdCBlbkxlbmcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZW5MZW5nJyk7XG5cbiAgICBjb25zdCB0b2dnbGVDbGFzc2VzID0gKGVsZW1lbnRzLCBjbGFzc05hbWUpID0+IGVsZW1lbnRzLmZvckVhY2goZWwgPT4gZWwuY2xhc3NMaXN0LnRvZ2dsZShgJHtjbGFzc05hbWV9YCkpO1xuICAgIGNvbnN0IHRvZ2dsZVRyYW5zbGF0ZXMgPSAoZWxlbWVudHMsIGRhdGFBdHRyKSA9PiBlbGVtZW50cy5mb3JFYWNoKGVsID0+IHtcbiAgICAgICAgZWwuc2V0QXR0cmlidXRlKCdkYXRhLXRyYW5zbGF0ZScsIGAke2RhdGFBdHRyfWApXG4gICAgICAgIGVsLmlubmVySFRNTCA9IGkxOG5EYXRhW2RhdGFBdHRyXSB8fCAnKi0tLS1ORUVEIFRPIEJFIFRSQU5TTEFURUQtLS0tKiAgIGtleTogICcgKyBkYXRhQXR0cjtcbiAgICAgICAgZWwucmVtb3ZlQXR0cmlidXRlKCdkYXRhLXRyYW5zbGF0ZScpO1xuICAgIH0pO1xuXG4gICAgbGV0IGxvYWRlckJ0biA9IGZhbHNlXG5cbiAgICAvLyBsZXQgbG9jYWxlID0gXCJlblwiXG4gICAgbGV0IGxvY2FsZSA9IHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oXCJsb2NhbGVcIikgfHwgXCJ1a1wiXG5cbiAgICBpZiAodWtMZW5nKSBsb2NhbGUgPSAndWsnO1xuICAgIGlmIChlbkxlbmcpIGxvY2FsZSA9ICdlbic7XG5cbiAgICBsZXQgZGVidWcgPSB0cnVlXG5cbiAgICBpZiAoZGVidWcpIGhpZGVMb2FkZXIoKVxuXG4gICAgbGV0IGkxOG5EYXRhID0ge307XG4gICAgY29uc3QgdHJhbnNsYXRlU3RhdGUgPSB0cnVlO1xuICAgIC8vIGxldCB1c2VySWQgPSBudWxsO1xuICAgIGxldCB1c2VySWQgPSBOdW1iZXIoc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbShcInVzZXJJZFwiKSkgPz8gbnVsbFxuXG4gICAgY29uc3QgcmVxdWVzdCA9IGZ1bmN0aW9uIChsaW5rLCBleHRyYU9wdGlvbnMpIHtcbiAgICAgICAgcmV0dXJuIGZldGNoKGFwaVVSTCArIGxpbmssIHtcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgICAnQWNjZXB0JzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAuLi4oZXh0cmFPcHRpb25zIHx8IHt9KVxuICAgICAgICB9KVxuICAgICAgICAgICAgLnRoZW4ocmVzID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoIXJlcy5vaykgdGhyb3cgbmV3IEVycm9yKCdBUEkgZXJyb3InKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzLmpzb24oKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuY2F0Y2goZXJyID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKCdBUEkgcmVxdWVzdCBmYWlsZWQ6JywgZXJyKTtcblxuICAgICAgICAgICAgICAgIC8vIHJlcG9ydEVycm9yKGVycik7XG4gICAgICAgICAgICAgICAgLy9cbiAgICAgICAgICAgICAgICAvLyBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZmF2LXBhZ2UnKS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICAgICAgICAgIC8vIGlmICh3aW5kb3cubG9jYXRpb24uaHJlZi5zdGFydHNXaXRoKFwiaHR0cHM6Ly93d3cuZmF2YmV0LmhyL1wiKSkge1xuICAgICAgICAgICAgICAgIC8vICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9ICcvcHJvbW9jaWplL3Byb21vY2lqYS9zdHViLyc7XG4gICAgICAgICAgICAgICAgLy8gfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAvLyAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSAnL3Byb21vcy9wcm9tby9zdHViLyc7XG4gICAgICAgICAgICAgICAgLy8gfVxuXG4gICAgICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KGVycik7XG4gICAgICAgICAgICB9KTtcblxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGhpZGVMb2FkZXIoKXtcbiAgICAgICAgbG9hZGVyLmNsYXNzTGlzdC5hZGQoXCJoaWRlXCIpXG4gICAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUub3ZlcmZsb3cgPSBcImF1dG9cIlxuICAgICAgICBtYWluUGFnZS5jbGFzc0xpc3QucmVtb3ZlKFwibG9hZGluZ1wiKVxuICAgIH1cblxuICAgIGFzeW5jIGZ1bmN0aW9uIGluaXQoKSB7XG4gICAgICAgIGxldCBhdHRlbXB0cyA9IDA7XG4gICAgICAgIGNvbnN0IG1heEF0dGVtcHRzID0gMjA7XG4gICAgICAgIGNvbnN0IGF0dGVtcHRJbnRlcnZhbCA9IDUwO1xuXG4gICAgICAgIGZ1bmN0aW9uIHRyeURldGVjdFVzZXJJZCgpIHtcbiAgICAgICAgICAgIGlmICh3aW5kb3cuc3RvcmUpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBzdGF0ZSA9IHdpbmRvdy5zdG9yZS5nZXRTdGF0ZSgpO1xuICAgICAgICAgICAgICAgIHVzZXJJZCA9IHN0YXRlLmF1dGguaXNBdXRob3JpemVkICYmIHN0YXRlLmF1dGguaWQgfHwgJyc7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHdpbmRvdy5nX3VzZXJfaWQpIHtcbiAgICAgICAgICAgICAgICB1c2VySWQgPSB3aW5kb3cuZ191c2VyX2lkO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgZnVuY3Rpb24gcXVpY2tDaGVja0FuZFJlbmRlcigpIHtcbiAgICAgICAgICAgIC8vIGNoZWNrVXNlckF1dGgoKVxuICAgICAgICAgICAgLy8gICAgIC50aGVuKGxvYWRVc2VycylcbiAgICAgICAgICAgIC8vICAgICAudGhlbigoKSA9PntcbiAgICAgICAgICAgIC8vICAgICAgICAgc2V0VGltZW91dChoaWRlTG9hZGVyLCAzMDApO1xuICAgICAgICAgICAgLy8gICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnRhYmxlX190YWJzLWl0ZW1cIikuZm9yRWFjaCgodGFiLCBpKSA9PntcbiAgICAgICAgICAgIC8vICAgICAgICAgICAgIHRhYi5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcbiAgICAgICAgICAgIC8vICAgICAgICAgICAgIGlmKGkgPT09IGFjdGl2ZVdlZWsgLSAxKSB0YWIuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XG4gICAgICAgICAgICAvLyAgICAgICAgIH0pXG4gICAgICAgICAgICAvLyAgICAgICAgIC8vIHJlbmRlclVzZXJzKGFjdGl2ZVdlZWssIHRhYmxlRGF0YSk7XG4gICAgICAgICAgICAvLyAgICAgICAgIHBhcnRpY2lwYXRlQnRucy5mb3JFYWNoKGJ0biA9PiBidG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBwYXJ0aWNpcGF0ZSkpO1xuICAgICAgICAgICAgLy8gICAgIH0pXG5cblxuICAgICAgICAgICAgLy8gc2hha2VVbnRpbChib3gsIGdldFVzZXJQcml6ZSwgbG9nb0JveCkudGhlbihyZXMgPT57XG4gICAgICAgICAgICAvLyAgICAgc2hvd1ByZWxvYWRlcihyZXMpO1xuICAgICAgICAgICAgLy8gfSlcblxuICAgICAgICAgICAgdXBkYXRlU2xpZGVyKClcblxuICAgICAgICAgICAgLy8gc2hvd1ByaXplRm9yUHJlbG9hZGVyKFwicHJpemUxXCIpXG5cbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jYXJkX19pbm5lcicpLmZvckVhY2goY2FyZCA9PiB7XG4gICAgICAgICAgICAgICAgY2FyZC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY2FyZC5jbGFzc0xpc3QudG9nZ2xlKCdpcy1mbGlwcGVkJyk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcblxuXG5cbiAgICAgICAgICAgIGJ1dHRvbnNMZWZ0LmZvckVhY2goYnRuICA9PiB7XG4gICAgICAgICAgICAgICAgYnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBtb3ZlU2xpZGVyKC0xKTtcbiAgICAgICAgICAgICAgICAgICAgYnRuLnN0eWxlLnBvaW50ZXJFdmVudHMgPSAnbm9uZSc7XG4gICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4geyBidG4uc3R5bGUucG9pbnRlckV2ZW50cyA9ICdpbml0aWFsJzsgfSwgMTAwMCk7XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICBidXR0b25zUmlnaHQuZm9yRWFjaChidG4gID0+IHtcbiAgICAgICAgICAgICAgICBidG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIG1vdmVTbGlkZXIoMSk7XG4gICAgICAgICAgICAgICAgICAgIGJ0bi5zdHlsZS5wb2ludGVyRXZlbnRzID0gJ25vbmUnO1xuICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHsgYnRuLnN0eWxlLnBvaW50ZXJFdmVudHMgPSAnaW5pdGlhbCc7IH0sIDEwMDApO1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9KVxuXG4gICAgICAgICAgICBzbGlkZXIuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgaGFuZGxlU3RhcnQpO1xuICAgICAgICAgICAgc2xpZGVyLmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoc3RhcnQnLCBoYW5kbGVTdGFydCk7XG5cbiAgICAgICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIGhhbmRsZU1vdmUpO1xuICAgICAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2htb3ZlJywgaGFuZGxlTW92ZSk7XG5cbiAgICAgICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCBoYW5kbGVFbmQpO1xuICAgICAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hlbmQnLCBoYW5kbGVFbmQpO1xuXG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucG9wdXBzJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IG9wZW5Qb3B1cEVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBvcHVwLmFjdGl2ZScpO1xuICAgICAgICAgICAgICAgIGlmKG9wZW5Qb3B1cEVsKXtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgY29udGVudFdyYXAgPSBvcGVuUG9wdXBFbC5xdWVyeVNlbGVjdG9yKCcucG9wdXBfX3dyYXAnKTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgY2xvc2VCdG4gPSBvcGVuUG9wdXBFbC5xdWVyeVNlbGVjdG9yKCcuY2FyZF9fY2xvc2UnKSA/PyBvcGVuUG9wdXBFbC5xdWVyeVNlbGVjdG9yKCcucG9wdXBfX2Nsb3NlJyk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChjb250ZW50V3JhcCAmJiAhY29udGVudFdyYXAuY29udGFpbnMoZS50YXJnZXQpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjbG9zZUFsbFBvcHVwcygpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGlmKGUudGFyZ2V0ID09PSBjbG9zZUJ0bikge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2xvc2VBbGxQb3B1cHMoKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGNhcmRQb3B1cEljb25zLmZvckVhY2goaWNvbiA9PiB7XG4gICAgICAgICAgICAgICAgaWNvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uICgpe1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBkYXRhQXR0ciA9IHRoaXMuZ2V0QXR0cmlidXRlKFwiZGF0YS1wb3B1cFwiKVxuICAgICAgICAgICAgICAgICAgICBvcGVuUG9wdXBCeUF0dHIoZGF0YUF0dHIpO1xuICAgICAgICAgICAgICAgIH0pXG5cbiAgICAgICAgICAgIH0pXG5cbiAgICAgICAgICAgIH1cblxuICAgICAgICBjb25zdCB3YWl0Rm9yVXNlcklkID0gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGludGVydmFsID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRyeURldGVjdFVzZXJJZCgpO1xuICAgICAgICAgICAgICAgIGlmICh1c2VySWQgfHwgYXR0ZW1wdHMgPj0gbWF4QXR0ZW1wdHMpIHtcbiAgICAgICAgICAgICAgICAgICAgcXVpY2tDaGVja0FuZFJlbmRlcigpO1xuICAgICAgICAgICAgICAgICAgICBjbGVhckludGVydmFsKGludGVydmFsKTtcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBhdHRlbXB0cysrO1xuICAgICAgICAgICAgfSwgYXR0ZW1wdEludGVydmFsKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgYXdhaXQgd2FpdEZvclVzZXJJZDtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBsb2FkVHJhbnNsYXRpb25zKCkge1xuICAgICAgICByZXR1cm4gcmVxdWVzdChgL25ldy10cmFuc2xhdGVzLyR7bG9jYWxlfWApXG4gICAgICAgICAgICAudGhlbihqc29uID0+IHtcbiAgICAgICAgICAgICAgICBpMThuRGF0YSA9IGpzb247XG4gICAgICAgICAgICAgICAgdHJhbnNsYXRlKCk7XG4gICAgICAgICAgICAgICAgY29uc3QgbXV0YXRpb25PYnNlcnZlciA9IG5ldyBNdXRhdGlvbk9ic2VydmVyKGZ1bmN0aW9uIChtdXRhdGlvbnMpIHtcbiAgICAgICAgICAgICAgICAgICAgbXV0YXRpb25PYnNlcnZlci5kaXNjb25uZWN0KCk7XG4gICAgICAgICAgICAgICAgICAgIHRyYW5zbGF0ZSgpO1xuICAgICAgICAgICAgICAgICAgICBtdXRhdGlvbk9ic2VydmVyLm9ic2VydmUodGFyZ2V0Tm9kZSwgeyBjaGlsZExpc3Q6IHRydWUsIHN1YnRyZWU6IHRydWUgfSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgbXV0YXRpb25PYnNlcnZlci5vYnNlcnZlKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaGFyZGNvcmVUZW5uaXNcIiksIHtcbiAgICAgICAgICAgICAgICAgICAgY2hpbGRMaXN0OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBzdWJ0cmVlOiB0cnVlXG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8vIGZ1bmN0aW9uIHNob3dQcml6ZUJ5RGF0YUF0dHIoZGF0YUF0dHIpIHtcbiAgICAvLyAgICAgY29uc3QgY2FyZHMgPSBwcmVsb2FkZXJQcml6ZS5xdWVyeVNlbGVjdG9yQWxsKCcuY2FyZF9faW5uZXInKTtcbiAgICAvL1xuICAgIC8vICAgICBjYXJkcy5mb3JFYWNoKGNhcmQgPT4ge1xuICAgIC8vICAgICAgICAgY29uc3QgYmFjayA9IGNhcmQucXVlcnlTZWxlY3RvckFsbCgnLmNhcmRfX2JhY2snKVxuICAgIC8vICAgICAgICAgYmFjay5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgIC8vICAgICAgICAgICAgIGl0ZW0uY2xhc3NMaXN0LmFkZCgnaGlkZScpO1xuICAgIC8vICAgICAgICAgICAgIGlmKGl0ZW0uZ2V0QXR0cmlidXRlKFwiZGF0YS1wcml6ZVwiKSA9PT0gZGF0YUF0dHIpIHtcbiAgICAvLyAgICAgICAgICAgICAgICAgaXRlbS5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZVwiKVxuICAgIC8vICAgICAgICAgICAgIH1cbiAgICAvLyAgICAgICAgIH0pXG4gICAgLy9cbiAgICAvL1xuICAgIC8vICAgICB9KVxuICAgIC8vXG4gICAgLy8gfVxuXG5cbiAgICBmdW5jdGlvbiBjbGVhclByZWxvYWRlclN0YXRlKCl7XG4gICAgICAgIGNvbnN0IGFsbENhcmRzSW5uZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY2FyZF9faW5uZXInKSxcbiAgICAgICAgICAgIGFsbENhcmRCYWNrID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNhcmRfX2JhY2snKSxcbiAgICAgICAgICAgIHBvcHVwUHJlbG9hZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBvcHVwLS1wcmVsb2FkZXInKTtcblxuICAgICAgICBhbGxDYXJkc0lubmVyLmZvckVhY2goY2FyZCA9PiB7XG4gICAgICAgICAgICBjYXJkLmNsYXNzTGlzdC5yZW1vdmUoJ2lzLWZsaXBwZWQnKTtcbiAgICAgICAgICAgIGNhcmQuY2xhc3NMaXN0LmFkZCgnaXMtaGlkZScpO1xuICAgICAgICB9KVxuICAgICAgICBwb3B1cFByZWxvYWRlci5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcblxuICAgICAgICBhbGxDYXJkQmFjay5mb3JFYWNoKChjYXJkKSA9PiB7XG4gICAgICAgICAgICBjYXJkLmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTtcbiAgICAgICAgfSlcblxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHNob3dQcmVsb2FkZXIocHJpemUpIHtcbiAgICAgICAgICAgIG9wZW5Qb3B1cEJ5QXR0cigncHJlbG9hZGVyJylcbiAgICAgICAgICAgIHNob3dQcml6ZUJ5RGF0YUF0dHIocHJpemUpXG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICBwcmVsb2FkZXJDYXJkcy5mb3JFYWNoKChjYXJkLCBpKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT57XG4gICAgICAgICAgICAgICAgICAgICAgICBjYXJkLmNsYXNzTGlzdC5yZW1vdmUoJ2lzLWhpZGUnKTtcbiAgICAgICAgICAgICAgICAgICAgfSwgaSAqIDI1MClcbiAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PntcbiAgICAgICAgICAgICAgICAgICAgICAgIHByZWxvYWRlclByaXplLmNsYXNzTGlzdC5hZGQoJ2lzLWZsaXBwZWQnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT57XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xlYXJQcmVsb2FkZXJTdGF0ZSgpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PntcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3BlblBvcHVwQnlBdHRyKHByaXplKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sIDgwMClcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sIDIwMDApXG4gICAgICAgICAgICAgICAgICAgIH0sIDEyNTApXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH0sIDIwMCk7XG4gICAgfVxuICAgIC8vIHNob3dQcmVsb2FkZXIoKTtcblxuICAgIGZ1bmN0aW9uIGdldFVzZXJQcml6ZSgpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKHJlc29sdmUgPT4ge1xuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiByZXNvbHZlKCdwcml6ZTEnKSwgMTAwMCk7IC8vINGC0YPRgiDQvtGC0YDQuNC80YPRlNC8INC/0YDQuNC3INGP0LrQuNC5INCy0LjQv9Cw0LIg0Y7Qt9C10YDRg1xuICAgICAgICB9KTtcbiAgICB9XG5cblxuICAgIGZ1bmN0aW9uIHNoYWtlVW50aWwoZWwsIHdhaXRQcm9taXNlLCBsb2dvLCBvcHRzID0ge30pIHtcbiAgICAgICAgY29uc3QgeyBhbXBsaXR1ZGUgPSA0LCBkdXJhdGlvbiA9IDUwMCwgYXhpcyA9ICd4JyB9ID0gb3B0cztcbiAgICAgICAgbGV0IHN0b3A7XG5cbiAgICAgICAgaWYgKGxvZ28pe1xuICAgICAgICAgICAgbG9nby5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChlbC5hbmltYXRlKSB7XG4gICAgICAgICAgICBjb25zdCBrZXlmcmFtZXMgPSBheGlzID09PSAneCdcbiAgICAgICAgICAgICAgICA/IFt7IHRyYW5zZm9ybTogJ3RyYW5zbGF0ZVgoMCknIH0sIHsgdHJhbnNmb3JtOiBgdHJhbnNsYXRlWCgtJHthbXBsaXR1ZGV9cHgpYCB9LCB7IHRyYW5zZm9ybTogYHRyYW5zbGF0ZVgoJHthbXBsaXR1ZGV9cHgpYCB9LCB7IHRyYW5zZm9ybTogJ3RyYW5zbGF0ZVgoMCknIH1dXG4gICAgICAgICAgICAgICAgOiBbeyB0cmFuc2Zvcm06ICd0cmFuc2xhdGVZKDApJyB9LCB7IHRyYW5zZm9ybTogYHRyYW5zbGF0ZVkoLSR7YW1wbGl0dWRlfXB4KWAgfSwgeyB0cmFuc2Zvcm06IGB0cmFuc2xhdGVZKCR7YW1wbGl0dWRlfXB4KWAgfSwgeyB0cmFuc2Zvcm06ICd0cmFuc2xhdGVZKDApJyB9XTtcbiAgICAgICAgICAgIGNvbnN0IGFuaW0gPSBlbC5hbmltYXRlKGtleWZyYW1lcywgeyBkdXJhdGlvbiwgaXRlcmF0aW9uczogSW5maW5pdHksIGVhc2luZzogJ2xpbmVhcicgfSk7XG4gICAgICAgICAgICBzdG9wID0gKCkgPT4ge1xuICAgICAgICAgICAgICAgIGFuaW0uY2FuY2VsKCk7XG4gICAgICAgICAgICAgICAgZWwuc3R5bGUudHJhbnNmb3JtID0gJyc7XG4gICAgICAgICAgICAgICAgaWYgKGxvZ28pe1xuICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+e1xuICAgICAgICAgICAgICAgICAgICAgICAgbG9nby5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcbiAgICAgICAgICAgICAgICAgICAgfSwgNDAwMClcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbGV0IHN0YXJ0ID0gbnVsbCwgcmFmSWQgPSAwLCBydW5uaW5nID0gdHJ1ZTtcbiAgICAgICAgICAgIGNvbnN0IGxvb3AgPSB0ID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoc3RhcnQgPT09IG51bGwpIHN0YXJ0ID0gdDtcbiAgICAgICAgICAgICAgICBjb25zdCBwaGFzZSA9ICgodCAtIHN0YXJ0KSAlIGR1cmF0aW9uKSAvIGR1cmF0aW9uICogTWF0aC5QSSAqIDI7XG4gICAgICAgICAgICAgICAgY29uc3QgZGVsdGEgPSBNYXRoLnNpbihwaGFzZSkgKiBhbXBsaXR1ZGU7XG4gICAgICAgICAgICAgICAgZWwuc3R5bGUudHJhbnNmb3JtID0gYXhpcyA9PT0gJ3gnID8gYHRyYW5zbGF0ZVgoJHtkZWx0YX1weClgIDogYHRyYW5zbGF0ZVkoJHtkZWx0YX1weClgO1xuICAgICAgICAgICAgICAgIGlmIChydW5uaW5nKSByYWZJZCA9IHJlcXVlc3RBbmltYXRpb25GcmFtZShsb29wKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICByYWZJZCA9IHJlcXVlc3RBbmltYXRpb25GcmFtZShsb29wKTtcbiAgICAgICAgICAgIHN0b3AgPSAoKSA9PiB7XG4gICAgICAgICAgICAgICAgcnVubmluZyA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIGNhbmNlbEFuaW1hdGlvbkZyYW1lKHJhZklkKTsgZWwuc3R5bGUudHJhbnNmb3JtID0gJyc7XG4gICAgICAgICAgICAgICAgaWYgKGxvZ28pe1xuICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+e1xuICAgICAgICAgICAgICAgICAgICAgICAgbG9nby5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcbiAgICAgICAgICAgICAgICAgICAgfSwgNDAwMClcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh3YWl0UHJvbWlzZSkuZmluYWxseSgoKSA9PntcbiAgICAgICAgICAgIHN0b3AoKVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjaGVja1VzZXJBdXRoKCkge1xuICAgICAgICBjb25zb2xlLmxvZyh1c2VySWQpXG4gICAgICAgIGlmICh1c2VySWQpIHtcbiAgICAgICAgICAgIGZvciAoY29uc3QgdW5hdXRoTWVzIG9mIHVuYXV0aE1zZ3MpIHtcbiAgICAgICAgICAgICAgICB1bmF1dGhNZXMuY2xhc3NMaXN0LmFkZCgnaGlkZScpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHJlcXVlc3QoYC9mYXZ1c2VyLyR7dXNlcklkfT9ub2NhY2hlPTFgKVxuICAgICAgICAgICAgICAgIC50aGVuKHJlcyA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChyZXMudXNlcmlkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwYXJ0aWNpcGF0ZUJ0bnMuZm9yRWFjaChpdGVtID0+IGl0ZW0uY2xhc3NMaXN0LmFkZCgnaGlkZScpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlZGlyZWN0QnRucy5mb3JFYWNoKGl0ZW0gPT4gaXRlbS5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlJykpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaXNWZXJpZmllZFVzZXIgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coaXNWZXJpZmllZFVzZXIpXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwYXJ0aWNpcGF0ZUJ0bnMuZm9yRWFjaChpdGVtID0+IGl0ZW0uY2xhc3NMaXN0LnJlbW92ZSgnaGlkZScpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlZGlyZWN0QnRucy5mb3JFYWNoKGl0ZW0gPT4gaXRlbS5jbGFzc0xpc3QuYWRkKCdoaWRlJykpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaXNWZXJpZmllZFVzZXIgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGZvciAobGV0IHJlZGlyZWN0QnRuIG9mIHJlZGlyZWN0QnRucykge1xuICAgICAgICAgICAgICAgIHJlZGlyZWN0QnRuLmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZvciAobGV0IHBhcnRpY2lwYXRlQnRuIG9mIHBhcnRpY2lwYXRlQnRucykge1xuICAgICAgICAgICAgICAgIHBhcnRpY2lwYXRlQnRuLmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZvciAoY29uc3QgdW5hdXRoTWVzIG9mIHVuYXV0aE1zZ3MpIHtcbiAgICAgICAgICAgICAgICB1bmF1dGhNZXMuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZScpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKGZhbHNlKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHJlcG9ydEVycm9yKGVycikge1xuICAgICAgICBjb25zdCByZXBvcnREYXRhID0ge1xuICAgICAgICAgICAgb3JpZ2luOiB3aW5kb3cubG9jYXRpb24uaHJlZixcbiAgICAgICAgICAgIHVzZXJpZDogdXNlcklkLFxuICAgICAgICAgICAgZXJyb3JUZXh0OiBlcnI/LmVycm9yIHx8IGVycj8udGV4dCB8fCBlcnI/Lm1lc3NhZ2UgfHwgJ1Vua25vd24gZXJyb3InLFxuICAgICAgICAgICAgdHlwZTogZXJyPy5uYW1lIHx8ICdVbmtub3duRXJyb3InLFxuICAgICAgICAgICAgc3RhY2s6IGVycj8uc3RhY2sgfHwgJydcbiAgICAgICAgfTtcblxuICAgICAgICBmZXRjaCgnaHR0cHM6Ly9mYXYtcHJvbS5jb20vYXBpLWNtcy9yZXBvcnRzL2FkZCcsIHtcbiAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShyZXBvcnREYXRhKVxuICAgICAgICB9KS5jYXRjaChjb25zb2xlLndhcm4pO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHRyYW5zbGF0ZSgpIHtcbiAgICAgICAgY29uc3QgZWxlbXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS10cmFuc2xhdGVdJylcbiAgICAgICAgaWYgKGVsZW1zICYmIGVsZW1zLmxlbmd0aCkge1xuICAgICAgICAgICAgaWYodHJhbnNsYXRlU3RhdGUpe1xuICAgICAgICAgICAgICAgIGVsZW1zLmZvckVhY2goZWxlbSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGtleSA9IGVsZW0uZ2V0QXR0cmlidXRlKCdkYXRhLXRyYW5zbGF0ZScpO1xuICAgICAgICAgICAgICAgICAgICBlbGVtLmlubmVySFRNTCA9IGkxOG5EYXRhW2tleV0gfHwgJyotLS0tTkVFRCBUTyBCRSBUUkFOU0xBVEVELS0tLSogICBrZXk6ICAnICsga2V5O1xuICAgICAgICAgICAgICAgICAgICBpZiAoaTE4bkRhdGFba2V5XSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgZWxlbS5yZW1vdmVBdHRyaWJ1dGUoJ2RhdGEtdHJhbnNsYXRlJyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJ0cmFuc2xhdGlvbiB3b3JrcyFcIilcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAobG9jYWxlID09PSAnZW4nKSB7XG4gICAgICAgICAgICBtYWluUGFnZS5jbGFzc0xpc3QuYWRkKCdlbicpO1xuICAgICAgICB9XG4gICAgICAgIHJlZnJlc2hMb2NhbGl6ZWRDbGFzcyhtYWluUGFnZSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcmVmcmVzaExvY2FsaXplZENsYXNzKGVsZW1lbnQpIHtcbiAgICAgICAgY29uc3QgYmFzZUNzc0NsYXNzID0gXCJcIlxuICAgICAgICBpZiAoIWVsZW1lbnQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBmb3IgKGNvbnN0IGxhbmcgb2YgWyd1aycsICdlbiddKSB7XG4gICAgICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoYmFzZUNzc0NsYXNzICsgbGFuZyk7XG4gICAgICAgIH1cbiAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKGJhc2VDc3NDbGFzcyArIGxvY2FsZSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcmVuZGVyVXNlcnMod2Vla051bSwgdXNlckRhdGEgPSBbXSkge1xuICAgICAgICB3ZWVrTnVtID0gTnVtYmVyKHdlZWtOdW0pO1xuICAgICAgICB1c2VyRGF0YSA9IHVzZXJEYXRhLmZpbmQod2VlayA9PiB7XG4gICAgICAgICAgICByZXR1cm4gd2Vlay53ZWVrID09PSB3ZWVrTnVtXG4gICAgICAgIH0pLnVzZXJzO1xuXG4gICAgICAgIGNvbnNvbGUubG9nKHVzZXJEYXRhKTtcblxuICAgICAgICBjb25zdCBjdXJyZW50VXNlciA9IHVzZXJEYXRhLmZpbmQodXNlciA9PiB1c2VyLnVzZXJpZCA9PT0gdXNlcklkKTtcblxuICAgICAgICBjb25zb2xlLmxvZyh1c2VySWQpXG4gICAgICAgIGNvbnNvbGUubG9nKGN1cnJlbnRVc2VyKVxuICAgICAgICBjb25zb2xlLmxvZyhpc1ZlcmlmaWVkVXNlcilcblxuICAgICAgICBpZih1c2VySWQgJiYgIWN1cnJlbnRVc2VyICYmIGlzVmVyaWZpZWRVc2VyKXtcbiAgICAgICAgICAgIHVzZXJEYXRhID0gWy4uLnVzZXJEYXRhLCB7dXNlcmlkOiB1c2VySWQsIHBvaW50czogMH1dXG4gICAgICAgIH1cbiAgICAgICAgY29uc29sZS5sb2codXNlckRhdGEpO1xuXG4gICAgICAgIHBvcHVsYXRlVXNlcnNUYWJsZSh1c2VyRGF0YSwgdXNlcklkLCB3ZWVrTnVtLCBjdXJyZW50VXNlciwgaXNWZXJpZmllZFVzZXIpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHBvcHVsYXRlVXNlcnNUYWJsZSh1c2VycywgY3VycmVudFVzZXJJZCwgd2VlaywgY3VycmVudFVzZXIsIGlzVmVyaWZpZWRVc2VyKSB7XG5cbiAgICAgICAgY29uc29sZS5sb2codXNlcnMpO1xuICAgICAgICByZXN1bHRzVGFibGUuaW5uZXJIVE1MID0gJyc7XG4gICAgICAgIHJlc3VsdHNUYWJsZU90aGVyLmlubmVySFRNTCA9ICcnO1xuICAgICAgICBpZiAoIXVzZXJzPy5sZW5ndGgpIHJldHVybjtcblxuICAgICAgICBjb25zdCBpc1RvcEN1cnJlbnRVc2VyID0gY3VycmVudFVzZXIgJiYgdXNlcnMuc2xpY2UoMCwgMTApLnNvbWUodXNlciA9PiB1c2VyLnVzZXJpZCA9PT0gY3VycmVudFVzZXJJZCk7XG5cbiAgICAgICAgY29uc3QgdG9wVXNlcnNMZW5ndGggPSAhdXNlcklkIHx8IGlzVG9wQ3VycmVudFVzZXIgID8gMTMgOiAxMDtcblxuICAgICAgICBjb25zdCB0b3BVc2VycyA9IHVzZXJzLnNsaWNlKDAsIHRvcFVzZXJzTGVuZ3RoKTtcblxuICAgICAgICAvLyBjb25zb2xlLmxvZyh1c2Vycyk7XG4gICAgICAgIHRvcFVzZXJzLmZvckVhY2godXNlciA9PiB7XG4gICAgICAgICAgICBkaXNwbGF5VXNlcih1c2VyLCB1c2VyLnVzZXJpZCA9PT0gY3VycmVudFVzZXJJZCwgcmVzdWx0c1RhYmxlLCB0b3BVc2VycywgaXNUb3BDdXJyZW50VXNlciwgd2Vlayk7XG4gICAgICAgIH0pO1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhpc1RvcEN1cnJlbnRVc2VyKVxuICAgICAgICBjb25zb2xlLmxvZyhpc1ZlcmlmaWVkVXNlcilcbiAgICAgICAgaWYoaXNWZXJpZmllZFVzZXIgJiYgIWN1cnJlbnRVc2VyKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygndXNlciB2ZXJpZmllZCcpO1xuICAgICAgICAgICAgZGlzcGxheVVzZXIoY3VycmVudFVzZXIsIHRydWUsIHJlc3VsdHNUYWJsZU90aGVyLCB1c2VycywgZmFsc2UsIHdlZWspO1xuICAgICAgICB9XG4gICAgICAgIGlmICghaXNUb3BDdXJyZW50VXNlciAmJiBjdXJyZW50VXNlcikge1xuICAgICAgICAgICAgaXNWZXJpZmllZFVzZXIgPSBmYWxzZTtcbiAgICAgICAgICAgIGRpc3BsYXlVc2VyKGN1cnJlbnRVc2VyLCB0cnVlLCByZXN1bHRzVGFibGVPdGhlciwgdXNlcnMsIGZhbHNlLCB3ZWVrKTtcbiAgICAgICAgfVxuXG5cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBkaXNwbGF5VXNlcih1c2VyLCBpc0N1cnJlbnRVc2VyLCB0YWJsZSwgdXNlcnMsIGlzVG9wQ3VycmVudFVzZXIsIHdlZWspIHtcblxuICAgICAgICBjb25zdCByZW5kZXJSb3cgPSAodXNlckRhdGEsIG9wdGlvbnMgPSB7fSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgeyBoaWdobGlnaHQgPSBmYWxzZSwgbmVpZ2hib3IgPSBmYWxzZSB9ID0gb3B0aW9ucztcbiAgICAgICAgICAgIGNvbnN0IHVzZXJSb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIHVzZXJSb3cuY2xhc3NMaXN0LmFkZCgndGFibGVfX3JvdycpO1xuXG4gICAgICAgICAgICBjb25zdCB1c2VyUGxhY2UgPSB1c2Vycy5pbmRleE9mKHVzZXJEYXRhKSArIDE7XG4gICAgICAgICAgICBjb25zdCBwcml6ZUtleSA9IGRlYnVnID8gbnVsbCA6IGdldFByaXplVHJhbnNsYXRpb25LZXkodXNlclBsYWNlLCB3ZWVrKTtcblxuICAgICAgICAgICAgaWYgKHVzZXJQbGFjZSA8PSAzKSB7XG4gICAgICAgICAgICAgICAgdXNlclJvdy5jbGFzc0xpc3QuYWRkKGBwbGFjZSR7dXNlclBsYWNlfWApO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoaGlnaGxpZ2h0IHx8IGlzQ3VycmVudFVzZXIgJiYgIW5laWdoYm9yKSB7XG4gICAgICAgICAgICAgICAgdXNlclJvdy5jbGFzc0xpc3QuYWRkKCd5b3UnKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAobmVpZ2hib3IpIHtcbiAgICAgICAgICAgICAgICB1c2VyUm93LmNsYXNzTGlzdC5hZGQoJ19uZWlnaGJvcicpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB1c2VyUm93LmlubmVySFRNTCA9IGBcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0YWJsZV9fcm93LWl0ZW1cIj5cbiAgICAgICAgICAgICAgICAke3VzZXJQbGFjZSA8IDEwID8gJzAnICsgdXNlclBsYWNlIDogdXNlclBsYWNlfVxuICAgICAgICAgICAgICAgICR7aXNDdXJyZW50VXNlciAmJiAhbmVpZ2hib3IgPyAnPHNwYW4gY2xhc3M9XCJ5b3VcIj4nICsgdHJhbnNsYXRlS2V5KFwieW91XCIpICsgJzwvc3Bhbj4nIDogJyd9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0YWJsZV9fcm93LWl0ZW1cIj5cbiAgICAgICAgICAgICAgICAke2lzQ3VycmVudFVzZXIgJiYgIW5laWdoYm9yID8gdXNlckRhdGEudXNlcmlkIDogbWFza1VzZXJJZCh1c2VyRGF0YS51c2VyaWQpfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGFibGVfX3Jvdy1pdGVtXCI+XG4gICAgICAgICAgICAgICAgJHtOdW1iZXIodXNlckRhdGEucG9pbnRzKS50b0ZpeGVkKDIpfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGFibGVfX3Jvdy1pdGVtXCI+XG4gICAgICAgICAgICAgICAgJHtwcml6ZUtleSA/IHRyYW5zbGF0ZUtleShwcml6ZUtleSkgOiAnIC0gJ31cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICBgO1xuXG4gICAgICAgICAgICB0YWJsZS5hcHBlbmQodXNlclJvdyk7XG4gICAgICAgIH07XG4gICAgICAgIGlmIChpc0N1cnJlbnRVc2VyICYmICFpc1RvcEN1cnJlbnRVc2VyKSB7XG4gICAgICAgICAgICBjb25zdCBpbmRleCA9IHVzZXJzLmluZGV4T2YodXNlcik7XG4gICAgICAgICAgICBpZiAodXNlcnNbaW5kZXggLSAxXSkge1xuICAgICAgICAgICAgICAgIHJlbmRlclJvdyh1c2Vyc1tpbmRleCAtIDFdLCB7IG5laWdoYm9yOiB0cnVlIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmVuZGVyUm93KHVzZXIsIHsgaGlnaGxpZ2h0OiB0cnVlIH0pO1xuICAgICAgICAgICAgaWYgKHVzZXJzW2luZGV4ICsgMV0pIHtcbiAgICAgICAgICAgICAgICByZW5kZXJSb3codXNlcnNbaW5kZXggKyAxXSwgeyBuZWlnaGJvcjogdHJ1ZSB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJlbmRlclJvdyh1c2VyKTtcbiAgICAgICAgfVxuICAgIH1cblxuXG4gICAgZnVuY3Rpb24gdHJhbnNsYXRlS2V5KGtleSwgZGVmYXVsdFZhbHVlKSB7XG4gICAgICAgIGlmICgha2V5KSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgbGV0IG5lZWRLZXkgPSBkZWJ1ZyA/IGtleSA6IGAqLS0tLU5FRUQgVE8gQkUgVFJBTlNMQVRFRC0tLS0qIGtleTogJHtrZXl9YFxuXG4gICAgICAgIGRlZmF1bHRWYWx1ZSA9ICBuZWVkS2V5IHx8IGtleTtcbiAgICAgICAgcmV0dXJuIGkxOG5EYXRhW2tleV0gfHwgZGVmYXVsdFZhbHVlO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIG1hc2tVc2VySWQodXNlcklkKSB7XG4gICAgICAgIHJldHVybiBcIioqXCIgKyB1c2VySWQudG9TdHJpbmcoKS5zbGljZSgyKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBnZXRQcml6ZVRyYW5zbGF0aW9uS2V5KHBsYWNlLCB3ZWVrKSB7XG4gICAgICAgIGlmIChwbGFjZSA8PSAzKSByZXR1cm4gYHByaXplXyR7d2Vla30tJHtwbGFjZX1gO1xuICAgICAgICBpZiAocGxhY2UgPD0gMTApIHJldHVybiBgcHJpemVfJHt3ZWVrfS00LTEwYDtcbiAgICAgICAgaWYgKHBsYWNlIDw9IDI1KSByZXR1cm4gYHByaXplXyR7d2Vla30tMTEtMjVgO1xuICAgICAgICBpZiAocGxhY2UgPD0gNTApIHJldHVybiBgcHJpemVfJHt3ZWVrfS0yNi01MGA7XG4gICAgICAgIGlmIChwbGFjZSA8PSA3NSkgcmV0dXJuIGBwcml6ZV8ke3dlZWt9LTUxLTc1YDtcbiAgICAgICAgaWYgKHBsYWNlIDw9IDEwMCkgcmV0dXJuIGBwcml6ZV8ke3dlZWt9LTc2LTEwMGA7XG4gICAgICAgIGlmIChwbGFjZSA8PSAxMjUpIHJldHVybiBgcHJpemVfJHt3ZWVrfS0xMDEtMTI1YDtcbiAgICAgICAgaWYgKHBsYWNlIDw9IDE1MCkgcmV0dXJuIGBwcml6ZV8ke3dlZWt9LTEyNi0xNTBgO1xuICAgICAgICBpZiAocGxhY2UgPD0gMTc1KSByZXR1cm4gYHByaXplXyR7d2Vla30tMTUxLTE3NWA7XG4gICAgICAgIGlmIChwbGFjZSA8PSAyMDApIHJldHVybiBgcHJpemVfJHt3ZWVrfS0xNzYtMjAwYDtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBzaG93UHJpemVCeURhdGFBdHRyKHByaXplKXtcbiAgICAgICAgY29uc3QgYWxsUHJpemVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW2RhdGEtcHJpemVdJyk7XG4gICAgICAgIGNvbnN0IGN1cnJlbnRQcml6ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLXByaXplPVwiJHtwcml6ZX1cIl1gKTtcblxuICAgICAgICBpZiAoY3VycmVudFByaXplICYmIGFsbFByaXplcykge1xuICAgICAgICAgICAgYWxsUHJpemVzLmZvckVhY2gocHJpemUgPT4ge1xuICAgICAgICAgICAgICAgIHByaXplLmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICBjdXJyZW50UHJpemUuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZScpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcGFydGljaXBhdGUoKSB7XG4gICAgICAgIGlmICghdXNlcklkKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgcGFyYW1zID0geyB1c2VyaWQ6IHVzZXJJZCB9O1xuICAgICAgICBmZXRjaChhcGlVUkwgKyAnL3VzZXIvJywge1xuICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgICdBY2NlcHQnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkocGFyYW1zKVxuICAgICAgICB9KS50aGVuKHJlcyA9PiByZXMuanNvbigpKVxuICAgICAgICAgICAgLnRoZW4ocmVzID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXMpO1xuICAgICAgICAgICAgICAgIGxvYWRlckJ0biA9IHRydWVcbiAgICAgICAgICAgICAgICB0b2dnbGVDbGFzc2VzKHBhcnRpY2lwYXRlQnRucywgXCJsb2FkZXJcIilcbiAgICAgICAgICAgICAgICB0b2dnbGVUcmFuc2xhdGVzKHBhcnRpY2lwYXRlQnRucywgXCJsb2FkZXJcIilcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+e1xuICAgICAgICAgICAgICAgICAgICB0b2dnbGVUcmFuc2xhdGVzKHBhcnRpY2lwYXRlQnRucywgXCJsb2FkZXJfcmVhZHlcIilcbiAgICAgICAgICAgICAgICAgICAgdG9nZ2xlQ2xhc3NlcyhwYXJ0aWNpcGF0ZUJ0bnMsIFwiZG9uZVwiKVxuICAgICAgICAgICAgICAgICAgICB0b2dnbGVDbGFzc2VzKHBhcnRpY2lwYXRlQnRucywgXCJsb2FkZXJcIilcbiAgICAgICAgICAgICAgICB9LCA1MDApXG4gICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKT0+e1xuICAgICAgICAgICAgICAgICAgICBjaGVja1VzZXJBdXRoKClcbiAgICAgICAgICAgICAgICAgICAgbG9hZFVzZXJzKFwiP25vY2FjaGU9MVwiKS50aGVuKHJlcyA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZW5kZXJVc2VycyhhY3RpdmVXZWVrLCB0YWJsZURhdGEpXG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgfSwgMTAwMClcblxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5jYXRjaChlcnIgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0FQSSByZXF1ZXN0IGZhaWxlZDonLCBlcnIpO1xuXG4gICAgICAgICAgICAgICAgcmVwb3J0RXJyb3IoZXJyKTtcblxuICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mYXYtcGFnZScpLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgICAgICAgICAgaWYgKHdpbmRvdy5sb2NhdGlvbi5ocmVmLnN0YXJ0c1dpdGgoXCJodHRwczovL3d3dy5mYXZiZXQuaHIvXCIpKSB7XG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gJy9wcm9tb2NpamUvcHJvbW9jaWphL3N0dWIvJztcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9ICcvcHJvbW9zL3Byb21vL3N0dWIvJztcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QoZXJyKTtcbiAgICAgICAgICAgIH0pO1xuICAgIH1cbiAgICBmdW5jdGlvbiBsb2FkVXNlcnMocGFyYW1ldHIpIHtcbiAgICAgICAgY29uc3QgcmVxdWVzdHMgPSBbXTtcbiAgICAgICAgdGFibGVEYXRhLmxlbmd0aCA9IDBcblxuICAgICAgICBmb3IgKGxldCBpID0gMTsgaSA8PSBwZXJpb2RBbW91bnQ7IGkrKykge1xuICAgICAgICAgICAgY29uc3Qgd2VlayA9IGk7IC8vINCw0LHQviDQsdGD0LTRjC3Rj9C60LAg0LvQvtCz0ZbQutCwINC00LvRjyDRhNC+0YDQvNGD0LLQsNC90L3RjyDQvdC+0LzQtdGA0LAg0YLQuNC20L3Rj1xuICAgICAgICAgICAgY29uc3QgcmVxID0gcmVxdWVzdChgL3VzZXJzLyR7d2Vla30ke3BhcmFtZXRyID8gcGFyYW1ldHIgOiBcIlwifWApLnRoZW4oZGF0YSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZGF0YSk7XG4gICAgICAgICAgICAgICAgdGFibGVEYXRhLnB1c2goeyB3ZWVrLCB1c2VyczogZGF0YSB9KTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICByZXF1ZXN0cy5wdXNoKHJlcSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gUHJvbWlzZS5hbGwocmVxdWVzdHMpXG4gICAgICAgIC5jYXRjaChlcnJvciA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBsb2FkaW5nIHVzZXJzOicsIGVycm9yKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG5cblxuLy9zbGlkZXJcblxuICAgIGNvbnN0IGJ1dHRvbnNSaWdodCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5wcml6ZV9fbW92ZS1yaWdodCcpLFxuICAgICAgICBidXR0b25zTGVmdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5wcml6ZV9fbW92ZS1sZWZ0JyksXG4gICAgICAgIHNsaWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jYXJkcycpLFxuICAgICAgICBpdGVtcyA9IHNsaWRlci5xdWVyeVNlbGVjdG9yQWxsKCcuY2FyZCcpLFxuICAgICAgICB0b3RhbEl0ZW1zID0gaXRlbXMubGVuZ3RoLFxuICAgICAgICBkb3RzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnByaXplX19kb3RzLWl0ZW0nKVxuXG4gICAgbGV0IGN1cnJlbnRJbmRleCA9IDI7XG4gICAgbGV0IHN0YXJ0WCA9IDA7XG4gICAgbGV0IGlzRHJhZ2dpbmcgPSBmYWxzZTtcblxuXG4gICAgZnVuY3Rpb24gdXBkYXRlU2xpZGVyKCkge1xuICAgICAgICBpdGVtcy5mb3JFYWNoKChpdGVtLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgZGlzdGFuY2UgPSAoaW5kZXggLSBjdXJyZW50SW5kZXggKyB0b3RhbEl0ZW1zKSAlIHRvdGFsSXRlbXM7XG5cbiAgICAgICAgICAgIGl0ZW0uY2xhc3NMaXN0LnJlbW92ZShcbiAgICAgICAgICAgICAgICAnX2xlZnQnLCAnX2xlZnQxJywgJ19sZWZ0MicsXG4gICAgICAgICAgICAgICAgJ19yaWdodCcsICdfcmlnaHQxJywgJ19yaWdodDInLFxuICAgICAgICAgICAgICAgICdfYWN0aXZlJywgJ19oaWRlLXNsaWRlJ1xuICAgICAgICAgICAgKTtcblxuICAgICAgICAgICAgaWYgKGluZGV4ID09PSBjdXJyZW50SW5kZXgpIHtcbiAgICAgICAgICAgICAgICBpdGVtLmNsYXNzTGlzdC5hZGQoJ19hY3RpdmUnKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChkaXN0YW5jZSA9PT0gMSkge1xuICAgICAgICAgICAgICAgIGl0ZW0uY2xhc3NMaXN0LmFkZCgnX3JpZ2h0MScpO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChkaXN0YW5jZSA9PT0gMikge1xuICAgICAgICAgICAgICAgIGl0ZW0uY2xhc3NMaXN0LmFkZCgnX3JpZ2h0MicpO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChkaXN0YW5jZSA9PT0gdG90YWxJdGVtcyAtIDEpIHtcbiAgICAgICAgICAgICAgICBpdGVtLmNsYXNzTGlzdC5hZGQoJ19sZWZ0MScpO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChkaXN0YW5jZSA9PT0gdG90YWxJdGVtcyAtIDIpIHtcbiAgICAgICAgICAgICAgICBpdGVtLmNsYXNzTGlzdC5hZGQoJ19sZWZ0MicpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBpdGVtLmNsYXNzTGlzdC5hZGQoJ19oaWRlLXNsaWRlJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICB1cGRhdGVEb3RzKClcbiAgICB9XG5cbiAgICBmdW5jdGlvbiB1cGRhdGVEb3RzKCl7XG4gICAgICAgIGRvdHMuZm9yRWFjaCgoaXRlbSwgaSkgPT4ge1xuICAgICAgICAgICAgaXRlbS5jbGFzc0xpc3QucmVtb3ZlKCdfYWN0aXZlJyk7XG4gICAgICAgICAgICBpZihpID09PSBjdXJyZW50SW5kZXgpIHtcbiAgICAgICAgICAgICAgICBpdGVtLmNsYXNzTGlzdC5hZGQoJ19hY3RpdmUnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBtb3ZlU2xpZGVyKG9mZnNldCkge1xuICAgICAgICBjdXJyZW50SW5kZXggPSAoY3VycmVudEluZGV4ICsgb2Zmc2V0ICsgdG90YWxJdGVtcykgJSB0b3RhbEl0ZW1zO1xuICAgICAgICB1cGRhdGVTbGlkZXIoKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBoYW5kbGVTdGFydChldmVudCkge1xuICAgICAgICBpc0RyYWdnaW5nID0gdHJ1ZTtcbiAgICAgICAgc3RhcnRYID0gZXZlbnQuY2xpZW50WCB8fCBldmVudC50b3VjaGVzWzBdLmNsaWVudFg7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaGFuZGxlTW92ZShldmVudCkge1xuICAgICAgICBpZiAoIWlzRHJhZ2dpbmcpIHJldHVybjtcblxuICAgICAgICBjb25zdCBjdXJyZW50WCA9IGV2ZW50LmNsaWVudFggfHwgZXZlbnQudG91Y2hlc1swXS5jbGllbnRYO1xuICAgICAgICBjb25zdCBkaWZmWCA9IGN1cnJlbnRYIC0gc3RhcnRYO1xuXG4gICAgICAgIGlmIChNYXRoLmFicyhkaWZmWCkgPiA1MCkge1xuICAgICAgICAgICAgbW92ZVNsaWRlcihkaWZmWCA+IDAgPyAtMSA6IDEpO1xuICAgICAgICAgICAgaXNEcmFnZ2luZyA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaGFuZGxlRW5kKCkge1xuICAgICAgICBpc0RyYWdnaW5nID0gZmFsc2U7XG4gICAgfVxuXG4vL3NsaWRlclxuXG4gICAgLy8gZnVuY3Rpb24gb3BlblBvcHVwQnlBdHRyKHBvcHVwQXR0cikge1xuICAgIC8vICAgICBjb25zdCBhbGxQb3B1cHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucG9wdXAnKTtcbiAgICAvLyAgICAgYWxsUG9wdXBzLmZvckVhY2gocCA9PiBwLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpKTtcbiAgICAvLyAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5vdmVyZmxvdyA9ICdoaWRkZW4nO1xuICAgIC8vXG4gICAgLy8gICAgIGNvbnNvbGUubG9nKHBvcHVwQXR0cik7XG4gICAgLy9cbiAgICAvLyAgICAgY29uc3QgdGFyZ2V0UG9wdXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAucG9wdXBbZGF0YS1wb3B1cD1cIiR7cG9wdXBBdHRyfVwiXWApO1xuICAgIC8vICAgICBpZiAodGFyZ2V0UG9wdXApIHtcbiAgICAvLyAgICAgICAgIHRhcmdldFBvcHVwLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xuICAgIC8vICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBvcHVwcycpLmNsYXNzTGlzdC5yZW1vdmUoJ29wYWNpdHknKTtcbiAgICAvLyAgICAgfVxuICAgIC8vIH1cblxuICAgIGZ1bmN0aW9uIGNsb3NlQWxsUG9wdXBzKCkge1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucG9wdXAnKS5mb3JFYWNoKHAgPT4gcC5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKSk7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wb3B1cHMnKS5jbGFzc0xpc3QuYWRkKCdvcGFjaXR5LW92ZXJsYXknKTtcbiAgICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5vdmVyZmxvdyA9ICdhdXRvJztcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBpbml0T3BlbkJveCgpe1xuICAgICAgICBzaGFrZVVudGlsKGJveCwgZ2V0VXNlclByaXplKCksIGxvZ29Cb3gpLnRoZW4ocHJpemUgPT4ge1xuICAgICAgICAgICAgYm94Q2FwLmNsYXNzTGlzdC5hZGQoXCJvcGVuXCIpO1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKHJlc29sdmUgPT4ge1xuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBib3hDYXAuY2xhc3NMaXN0LnJlbW92ZShcIm9wZW5cIik7XG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUocHJpemUpO1xuICAgICAgICAgICAgICAgIH0sIDIwMDApO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pLnRoZW4ocHJpemUgPT4ge1xuICAgICAgICAgICAgc2hvd1ByZWxvYWRlcihwcml6ZSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuXG4gICAgbG9hZFRyYW5zbGF0aW9ucygpXG4gICAgICAgIC50aGVuKGluaXQpIC8vINC30LDQv9GD0YHQuiDRltC90ZbRgtGDINGB0YLQvtGA0ZbQvdC60LhcblxuICAgIC8vIGluaXQoKVxuXG4gICAgLy8gLy8vIHRlc3RcblxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsICgpID0+IHtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tZW51LWJ0blwiKT8uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWVudS10ZXN0XCIpPy5jbGFzc0xpc3QudG9nZ2xlKFwiaGlkZVwiKTtcbiAgICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICBjb25zdCBsbmdCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmxuZy1idG5cIilcblxuICAgIGxuZ0J0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICBpZiAoc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbShcImxvY2FsZVwiKSkge1xuICAgICAgICAgICAgc2Vzc2lvblN0b3JhZ2UucmVtb3ZlSXRlbShcImxvY2FsZVwiKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oXCJsb2NhbGVcIiwgXCJlblwiKTtcbiAgICAgICAgfVxuICAgICAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKCk7XG4gICAgfSk7XG5cbiAgICBjb25zdCBhdXRoQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hdXRoLWJ0blwiKVxuXG4gICAgYXV0aEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT57XG4gICAgICAgIGlmKHVzZXJJZCl7XG4gICAgICAgICAgICBzZXNzaW9uU3RvcmFnZS5yZW1vdmVJdGVtKFwidXNlcklkXCIpXG4gICAgICAgIH1lbHNle1xuICAgICAgICAgICAgc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbShcInVzZXJJZFwiLCBcIjEwMDMwMDI2OFwiKVxuICAgICAgICB9XG4gICAgICAgIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKVxuICAgIH0pO1xuXG4gICAgY29uc3QgcG9wdXBzTWVudSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucG9wdXBzLWJ0blwiKTtcblxuICAgIHBvcHVwc01lbnUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tZW51LXBvcHVwXCIpLmNsYXNzTGlzdC50b2dnbGUoXCJoaWRlXCIpO1xuICAgIH0pXG5cbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm9wZW4tYm94XCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PntcbiAgICAgICAgaW5pdE9wZW5Cb3goKTtcbiAgICB9KVxuXG59KSgpO1xuXG4vLyDQv9GW0YHQu9GPINGC0LXRgdGC0YMg0LLQuNC00LDQu9C4INGG0Y4g0YTRg9C90LrRhtGW0Y4g0ZYg0YDQvtC30LrQvtC80LXQvdGC0Lgg0LDQvdCw0LvQvtCz0ZbRh9C90YMg0LIg0YTRg9C90LrRhtGW0Zcg0LLQuNC60LvQuNC60YNcbmZ1bmN0aW9uIG9wZW5Qb3B1cEJ5QXR0cihwb3B1cEF0dHIpIHtcbiAgICBjb25zdCBhbGxQb3B1cHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucG9wdXAnKTtcbiAgICBhbGxQb3B1cHMuZm9yRWFjaChwID0+IHAuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJykpO1xuXG4gICAgY29uc29sZS5sb2cocG9wdXBBdHRyKTtcblxuICAgIGNvbnN0IHRhcmdldFBvcHVwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLnBvcHVwW2RhdGEtcG9wdXA9XCIke3BvcHVwQXR0cn1cIl1gKTtcbiAgICBpZiAodGFyZ2V0UG9wdXApIHtcbiAgICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5vdmVyZmxvdyA9ICdoaWRkZW4nO1xuICAgICAgICB0YXJnZXRQb3B1cC5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBvcHVwcycpLmNsYXNzTGlzdC5yZW1vdmUoJ29wYWNpdHktb3ZlcmxheScpO1xuICAgIH1cbn1cblxuIl19
