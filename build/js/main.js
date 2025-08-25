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
  var apiURL = 'https://fav-prom.com/api_your_promo';
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
  var locale = "en";
  // let locale = sessionStorage.getItem("locale") || "uk"

  if (ukLeng) locale = 'uk';
  if (enLeng) locale = 'en';
  var debug = true;
  if (debug) hideLoader();
  var i18nData = {};
  var translateState = true;
  var userId = null;
  // let userId = Number(sessionStorage.getItem("userId")) ?? null

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
      reportError(err);
      document.querySelector('.fav-page').style.display = 'none';
      if (window.location.href.startsWith("https://www.favbet.hr/")) {
        window.location.href = '/promocije/promocija/stub/';
      } else {
        window.location.href = '/promos/promo/stub/';
      }
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

  // loadTranslations()
  //     .then(init) // запуск ініту сторінки

  init();

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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOlsiYXBpVVJMIiwiZ2V0QWN0aXZlV2VlayIsInByb21vU3RhcnREYXRlIiwid2Vla0R1cmF0aW9uIiwiY3VycmVudERhdGUiLCJEYXRlIiwid2Vla0RhdGVzIiwiRGF5IiwiV2VlayIsImZvcm1hdERhdGUiLCJkYXRlIiwiZ2V0RGF0ZSIsInRvU3RyaW5nIiwicGFkU3RhcnQiLCJnZXRNb250aCIsImNhbGN1bGF0ZVdlZWtQZXJpb2QiLCJ3ZWVrSW5kZXgiLCJiYXNlU3RhcnQiLCJnZXRUaW1lIiwic3RhcnQiLCJlbmQiLCJhY3RpdmVXZWVrSW5kZXgiLCJpIiwiaXNWZXJpZmllZFVzZXIiLCJwZXJpb2RBbW91bnQiLCJ0YWJsZURhdGEiLCJhY3RpdmVXZWVrIiwibWFpblBhZ2UiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJ1bmF1dGhNc2dzIiwicXVlcnlTZWxlY3RvckFsbCIsInBhcnRpY2lwYXRlQnRucyIsInJlZGlyZWN0QnRucyIsImxvYWRlciIsImNhcmRQb3B1cEljb25zIiwicHJlbG9hZGVyIiwicHJlbG9hZGVyQ2FyZHMiLCJwcmVsb2FkZXJQcml6ZSIsImJveCIsImxvZ29Cb3giLCJib3hDYXAiLCJ1a0xlbmciLCJlbkxlbmciLCJ0b2dnbGVDbGFzc2VzIiwiZWxlbWVudHMiLCJjbGFzc05hbWUiLCJmb3JFYWNoIiwiZWwiLCJjbGFzc0xpc3QiLCJ0b2dnbGUiLCJ0b2dnbGVUcmFuc2xhdGVzIiwiZGF0YUF0dHIiLCJzZXRBdHRyaWJ1dGUiLCJpbm5lckhUTUwiLCJpMThuRGF0YSIsInJlbW92ZUF0dHJpYnV0ZSIsImxvYWRlckJ0biIsImxvY2FsZSIsImRlYnVnIiwiaGlkZUxvYWRlciIsInRyYW5zbGF0ZVN0YXRlIiwidXNlcklkIiwicmVxdWVzdCIsImxpbmsiLCJleHRyYU9wdGlvbnMiLCJmZXRjaCIsImhlYWRlcnMiLCJ0aGVuIiwicmVzIiwib2siLCJFcnJvciIsImpzb24iLCJlcnIiLCJjb25zb2xlIiwiZXJyb3IiLCJyZXBvcnRFcnJvciIsInN0eWxlIiwiZGlzcGxheSIsIndpbmRvdyIsImxvY2F0aW9uIiwiaHJlZiIsInN0YXJ0c1dpdGgiLCJQcm9taXNlIiwicmVqZWN0IiwiYWRkIiwiYm9keSIsIm92ZXJmbG93IiwicmVtb3ZlIiwiaW5pdCIsInRyeURldGVjdFVzZXJJZCIsInF1aWNrQ2hlY2tBbmRSZW5kZXIiLCJ1cGRhdGVTbGlkZXIiLCJjYXJkIiwiYWRkRXZlbnRMaXN0ZW5lciIsImJ1dHRvbnNMZWZ0IiwiYnRuIiwibW92ZVNsaWRlciIsInBvaW50ZXJFdmVudHMiLCJzZXRUaW1lb3V0IiwiYnV0dG9uc1JpZ2h0Iiwic2xpZGVyIiwiaGFuZGxlU3RhcnQiLCJoYW5kbGVNb3ZlIiwiaGFuZGxlRW5kIiwiZSIsIm9wZW5Qb3B1cEVsIiwiY29udGVudFdyYXAiLCJjbG9zZUJ0biIsImNvbnRhaW5zIiwidGFyZ2V0IiwiY2xvc2VBbGxQb3B1cHMiLCJpY29uIiwiZ2V0QXR0cmlidXRlIiwib3BlblBvcHVwQnlBdHRyIiwic3RvcmUiLCJzdGF0ZSIsImdldFN0YXRlIiwiYXV0aCIsImlzQXV0aG9yaXplZCIsImlkIiwiZ191c2VyX2lkIiwiYXR0ZW1wdHMiLCJtYXhBdHRlbXB0cyIsImF0dGVtcHRJbnRlcnZhbCIsIndhaXRGb3JVc2VySWQiLCJyZXNvbHZlIiwiaW50ZXJ2YWwiLCJzZXRJbnRlcnZhbCIsImNsZWFySW50ZXJ2YWwiLCJsb2FkVHJhbnNsYXRpb25zIiwidHJhbnNsYXRlIiwibXV0YXRpb25PYnNlcnZlciIsIk11dGF0aW9uT2JzZXJ2ZXIiLCJtdXRhdGlvbnMiLCJkaXNjb25uZWN0Iiwib2JzZXJ2ZSIsInRhcmdldE5vZGUiLCJjaGlsZExpc3QiLCJzdWJ0cmVlIiwiZ2V0RWxlbWVudEJ5SWQiLCJjbGVhclByZWxvYWRlclN0YXRlIiwiYWxsQ2FyZHNJbm5lciIsImFsbENhcmRCYWNrIiwicG9wdXBQcmVsb2FkZXIiLCJzaG93UHJlbG9hZGVyIiwicHJpemUiLCJzaG93UHJpemVCeURhdGFBdHRyIiwiZ2V0VXNlclByaXplIiwic2hha2VVbnRpbCIsIndhaXRQcm9taXNlIiwibG9nbyIsIm9wdHMiLCJhbXBsaXR1ZGUiLCJkdXJhdGlvbiIsImF4aXMiLCJzdG9wIiwiYW5pbWF0ZSIsImtleWZyYW1lcyIsInRyYW5zZm9ybSIsImFuaW0iLCJpdGVyYXRpb25zIiwiSW5maW5pdHkiLCJlYXNpbmciLCJjYW5jZWwiLCJyYWZJZCIsInJ1bm5pbmciLCJsb29wIiwidCIsInBoYXNlIiwiTWF0aCIsIlBJIiwiZGVsdGEiLCJzaW4iLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJjYW5jZWxBbmltYXRpb25GcmFtZSIsImNoZWNrVXNlckF1dGgiLCJsb2ciLCJ1bmF1dGhNZXMiLCJ1c2VyaWQiLCJpdGVtIiwicmVkaXJlY3RCdG4iLCJwYXJ0aWNpcGF0ZUJ0biIsInJlcG9ydERhdGEiLCJvcmlnaW4iLCJlcnJvclRleHQiLCJ0ZXh0IiwibWVzc2FnZSIsInR5cGUiLCJuYW1lIiwic3RhY2siLCJtZXRob2QiLCJKU09OIiwic3RyaW5naWZ5Iiwid2FybiIsImVsZW1zIiwibGVuZ3RoIiwiZWxlbSIsImtleSIsInJlZnJlc2hMb2NhbGl6ZWRDbGFzcyIsImVsZW1lbnQiLCJsYW5nIiwiYmFzZUNzc0NsYXNzIiwicmVuZGVyVXNlcnMiLCJ3ZWVrTnVtIiwidXNlckRhdGEiLCJOdW1iZXIiLCJmaW5kIiwid2VlayIsInVzZXJzIiwiY3VycmVudFVzZXIiLCJ1c2VyIiwicG9pbnRzIiwicG9wdWxhdGVVc2Vyc1RhYmxlIiwiY3VycmVudFVzZXJJZCIsInJlc3VsdHNUYWJsZSIsInJlc3VsdHNUYWJsZU90aGVyIiwiaXNUb3BDdXJyZW50VXNlciIsInNsaWNlIiwic29tZSIsInRvcFVzZXJzTGVuZ3RoIiwidG9wVXNlcnMiLCJkaXNwbGF5VXNlciIsImlzQ3VycmVudFVzZXIiLCJ0YWJsZSIsInJlbmRlclJvdyIsIm9wdGlvbnMiLCJoaWdobGlnaHQiLCJuZWlnaGJvciIsInVzZXJSb3ciLCJjcmVhdGVFbGVtZW50IiwidXNlclBsYWNlIiwiaW5kZXhPZiIsInByaXplS2V5IiwiZ2V0UHJpemVUcmFuc2xhdGlvbktleSIsInRyYW5zbGF0ZUtleSIsIm1hc2tVc2VySWQiLCJ0b0ZpeGVkIiwiYXBwZW5kIiwiaW5kZXgiLCJkZWZhdWx0VmFsdWUiLCJuZWVkS2V5IiwicGxhY2UiLCJhbGxQcml6ZXMiLCJjdXJyZW50UHJpemUiLCJwYXJ0aWNpcGF0ZSIsInBhcmFtcyIsImxvYWRVc2VycyIsInBhcmFtZXRyIiwicmVxdWVzdHMiLCJyZXEiLCJkYXRhIiwicHVzaCIsImFsbCIsIml0ZW1zIiwidG90YWxJdGVtcyIsImRvdHMiLCJjdXJyZW50SW5kZXgiLCJzdGFydFgiLCJpc0RyYWdnaW5nIiwiZGlzdGFuY2UiLCJ1cGRhdGVEb3RzIiwib2Zmc2V0IiwiZXZlbnQiLCJjbGllbnRYIiwidG91Y2hlcyIsImN1cnJlbnRYIiwiZGlmZlgiLCJhYnMiLCJwIiwiaW5pdE9wZW5Cb3giLCJsbmdCdG4iLCJzZXNzaW9uU3RvcmFnZSIsImdldEl0ZW0iLCJyZW1vdmVJdGVtIiwic2V0SXRlbSIsInJlbG9hZCIsImF1dGhCdG4iLCJwb3B1cHNNZW51IiwicG9wdXBBdHRyIiwiYWxsUG9wdXBzIiwidGFyZ2V0UG9wdXAiXSwibWFwcGluZ3MiOiI7OzsrQ0FDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEQSxDQUFDLFlBQVk7RUFFVCxJQUFNQSxNQUFNLEdBQUcscUNBQXFDO0VBRXBELElBQU1DLGFBQWEsR0FBRyxTQUFoQkEsYUFBYSxDQUFJQyxjQUFjLEVBQUVDLFlBQVksRUFBSztJQUNwRCxJQUFNQyxXQUFXLEdBQUcsSUFBSUMsSUFBSSxFQUFFO0lBQzlCLElBQUlDLFNBQVMsR0FBRyxFQUFFO0lBRWxCLElBQU1DLEdBQUcsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxJQUFJO0lBQy9CLElBQU1D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LENBQUMsUUFBUSxDQUFDO0VBQ3JEeVAsU0FBUyxDQUFDek8sT0FBTyxDQUFDLFVBQUE4TixDQUFDO0lBQUEsT0FBSUEsQ0FBQyxDQUFDNU4sU0FBUyxDQUFDdUMsTUFBTSxDQUFDLFFBQVEsQ0FBQztFQUFBLEVBQUM7RUFFcERkLE9BQU8sQ0FBQ3VHLEdBQUcsQ0FBQ3NHLFNBQVMsQ0FBQztFQUV0QixJQUFNRSxXQUFXLEdBQUc3UCxRQUFRLENBQUNDLGFBQWEsK0JBQXVCMFAsU0FBUyxTQUFLO0VBQy9FLElBQUlFLFdBQVcsRUFBRTtJQUNiN1AsUUFBUSxDQUFDMEQsSUFBSSxDQUFDVCxLQUFLLENBQUNVLFFBQVEsR0FBRyxRQUFRO0lBQ3ZDa00sV0FBVyxDQUFDeE8sU0FBUyxDQUFDb0MsR0FBRyxDQUFDLFFBQVEsQ0FBQztJQUNuQ3pELFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLFNBQVMsQ0FBQyxDQUFDb0IsU0FBUyxDQUFDdUMsTUFBTSxDQUFDLGlCQUFpQixDQUFDO0VBQ3pFO0FBQ0oiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiAoKSB7XG5cbiAgICBjb25zdCBhcGlVUkwgPSAnaHR0cHM6Ly9mYXYtcHJvbS5jb20vYXBpX3lvdXJfcHJvbW8nXG5cbiAgICBjb25zdCBnZXRBY3RpdmVXZWVrID0gKHByb21vU3RhcnREYXRlLCB3ZWVrRHVyYXRpb24pID0+IHtcbiAgICAgICAgY29uc3QgY3VycmVudERhdGUgPSBuZXcgRGF0ZSgpO1xuICAgICAgICBsZXQgd2Vla0RhdGVzID0gW107XG5cbiAgICAgICAgY29uc3QgRGF5ID0gMjQgKiA2MCAqIDYwICogMTAwMDtcbiAgICAgICAgY29uc3QgV2VlayA9IHdlZWtEdXJhdGlvbiAqIERheTtcblxuICAgICAgICBjb25zdCBmb3JtYXREYXRlID0gKGRhdGUpID0+XG4gICAgICAgICAgICBgJHtkYXRlLmdldERhdGUoKS50b1N0cmluZygpLnBhZFN0YXJ0KDIsIFwiMFwiKX0uJHsoZGF0ZS5nZXRNb250aCgpICsgMSkudG9TdHJpbmcoKS5wYWRTdGFydCgyLCBcIjBcIil9YDtcblxuICAgICAgICBjb25zdCBjYWxjdWxhdGVXZWVrUGVyaW9kID0gKHdlZWtJbmRleCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgYmFzZVN0YXJ0ID0gcHJvbW9TdGFydERhdGUuZ2V0VGltZSgpO1xuICAgICAgICAgICAgY29uc3Qgc3RhcnQgPSBuZXcgRGF0ZShiYXNlU3RhcnQgKyB3ZWVrSW5kZXggKiBXZWVrKTtcbiAgICAgICAgICAgIGxldCBlbmQgPSBuZXcgRGF0ZShzdGFydC5nZXRUaW1lKCkgKyAod2Vla0R1cmF0aW9uICogRGF5IC0gMSkpO1xuICAgICAgICAgICAgcmV0dXJuIHsgc3RhcnQsIGVuZCB9O1xuICAgICAgICB9O1xuXG4gICAgICAgIGxldCBhY3RpdmVXZWVrSW5kZXggPSBudWxsO1xuXG4gICAgICAgIC8vINCf0LXRgNC10LLRltGA0LrQsCDQv9C+0YLQvtGH0L3QvtCz0L4g0YLQuNC20L3Rj1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDEwOyBpKyspIHsgLy8g0J7QsdC80LXQttGD0ZTQvNC+IDEwINGC0LjQttC90Y/QvNC4ICjRj9C60YnQviDQv9C+0YLRgNGW0LHQvdC+INCx0ZbQu9GM0YjQtSwg0L/RgNC+0YHRgtC+INC30LzRltC90ZbRgtGMINC70ZbRh9C40LvRjNC90LjQuilcbiAgICAgICAgICAgIGNvbnN0IHsgc3RhcnQsIGVuZCB9ID0gY2FsY3VsYXRlV2Vla1BlcmlvZChpKTtcbiAgICAgICAgICAgIGlmIChjdXJyZW50RGF0ZSA+PSBzdGFydCAmJiBjdXJyZW50RGF0ZSA8PSBlbmQpIHtcbiAgICAgICAgICAgICAgICBhY3RpdmVXZWVrSW5kZXggPSBpICsgMTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBhY3RpdmVXZWVrSW5kZXg7XG4gICAgfTtcblxuICAgIGNvbnN0IHByb21vU3RhcnREYXRlID0gbmV3IERhdGUoXCIyMDI1LTA1LTA1VDAwOjAwOjAwXCIpO1xuICAgIGNvbnN0IHdlZWtEdXJhdGlvbiA9IDEwO1xuXG4gICAgbGV0IGlzVmVyaWZpZWRVc2VyID0gZmFsc2U7XG5cbiAgICBsZXQgcGVyaW9kQW1vdW50ID0gMiAvLyDQutGW0LvRjNC60ZbRgdGC0Ywg0L/QtdGA0ZbQvtC00ZbQsiDQsiDQsNC60YbRltGXLCDRgtGA0LXQsdCwINC00LvRjyDQutC10YjRg9Cy0LDQvdC90Y8g0ZbQvdGE0Lgg0Lcg0YLQsNCx0LvQuFxuXG4gICAgbGV0IHRhYmxlRGF0YSA9IFtdXG4gICAgbGV0IGFjdGl2ZVdlZWsgPSBnZXRBY3RpdmVXZWVrKHByb21vU3RhcnREYXRlLCB3ZWVrRHVyYXRpb24pIHx8IDE7XG4gICAgLy8gbGV0IGFjdGl2ZVdlZWsgPSAyXG5cbiAgICBpZiAoYWN0aXZlV2VlayA+IDIpIGFjdGl2ZVdlZWsgPSAyXG5cblxuICAgIGNvbnN0IG1haW5QYWdlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5mYXYtcGFnZVwiKSxcbiAgICAgICAgdW5hdXRoTXNncyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy51bmF1dGgtbXNnJyksXG4gICAgICAgIHBhcnRpY2lwYXRlQnRucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5wYXJ0LWJ0bicpLFxuICAgICAgICByZWRpcmVjdEJ0bnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuYnRuLWpvaW4nKSxcbiAgICAgICAgbG9hZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zcGlubmVyLW92ZXJsYXlcIiksXG4gICAgICAgIGNhcmRQb3B1cEljb25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNhcmRfX3BvcHVwJyksXG4gICAgICAgIHByZWxvYWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wb3B1cC0tcHJlbG9hZGVyJyksXG4gICAgICAgIHByZWxvYWRlckNhcmRzID0gcHJlbG9hZGVyLnF1ZXJ5U2VsZWN0b3JBbGwoJy5jYXJkX19pbm5lcicpLFxuICAgICAgICBwcmVsb2FkZXJQcml6ZSA9IHByZWxvYWRlci5xdWVyeVNlbGVjdG9yKCcuY2FyZF9faW5uZXItLXByaXplJyksXG4gICAgICAgIGJveCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ib3hfX29wZW4nKSxcbiAgICAgICAgbG9nb0JveCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ib3hfX2xvZ28nKSxcbiAgICAgICAgYm94Q2FwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJveF9fb3Blbi1jYXAnKVxuXG4gICAgY29uc3QgdWtMZW5nID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3VrTGVuZycpO1xuICAgIGNvbnN0IGVuTGVuZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNlbkxlbmcnKTtcblxuICAgIGNvbnN0IHRvZ2dsZUNsYXNzZXMgPSAoZWxlbWVudHMsIGNsYXNzTmFtZSkgPT4gZWxlbWVudHMuZm9yRWFjaChlbCA9PiBlbC5jbGFzc0xpc3QudG9nZ2xlKGAke2NsYXNzTmFtZX1gKSk7XG4gICAgY29uc3QgdG9nZ2xlVHJhbnNsYXRlcyA9IChlbGVtZW50cywgZGF0YUF0dHIpID0+IGVsZW1lbnRzLmZvckVhY2goZWwgPT4ge1xuICAgICAgICBlbC5zZXRBdHRyaWJ1dGUoJ2RhdGEtdHJhbnNsYXRlJywgYCR7ZGF0YUF0dHJ9YClcbiAgICAgICAgZWwuaW5uZXJIVE1MID0gaTE4bkRhdGFbZGF0YUF0dHJdIHx8ICcqLS0tLU5FRUQgVE8gQkUgVFJBTlNMQVRFRC0tLS0qICAga2V5OiAgJyArIGRhdGFBdHRyO1xuICAgICAgICBlbC5yZW1vdmVBdHRyaWJ1dGUoJ2RhdGEtdHJhbnNsYXRlJyk7XG4gICAgfSk7XG5cbiAgICBsZXQgbG9hZGVyQnRuID0gZmFsc2VcblxuICAgIGxldCBsb2NhbGUgPSBcImVuXCJcbiAgICAvLyBsZXQgbG9jYWxlID0gc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbShcImxvY2FsZVwiKSB8fCBcInVrXCJcblxuICAgIGlmICh1a0xlbmcpIGxvY2FsZSA9ICd1ayc7XG4gICAgaWYgKGVuTGVuZykgbG9jYWxlID0gJ2VuJztcblxuICAgIGxldCBkZWJ1ZyA9IHRydWVcblxuICAgIGlmIChkZWJ1ZykgaGlkZUxvYWRlcigpXG5cbiAgICBsZXQgaTE4bkRhdGEgPSB7fTtcbiAgICBjb25zdCB0cmFuc2xhdGVTdGF0ZSA9IHRydWU7XG4gICAgbGV0IHVzZXJJZCA9IG51bGw7XG4gICAgLy8gbGV0IHVzZXJJZCA9IE51bWJlcihzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKFwidXNlcklkXCIpKSA/PyBudWxsXG5cbiAgICBjb25zdCByZXF1ZXN0ID0gZnVuY3Rpb24gKGxpbmssIGV4dHJhT3B0aW9ucykge1xuICAgICAgICByZXR1cm4gZmV0Y2goYXBpVVJMICsgbGluaywge1xuICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgICdBY2NlcHQnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIC4uLihleHRyYU9wdGlvbnMgfHwge30pXG4gICAgICAgIH0pXG4gICAgICAgICAgICAudGhlbihyZXMgPT4ge1xuICAgICAgICAgICAgICAgIGlmICghcmVzLm9rKSB0aHJvdyBuZXcgRXJyb3IoJ0FQSSBlcnJvcicpO1xuICAgICAgICAgICAgICAgIHJldHVybiByZXMuanNvbigpO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5jYXRjaChlcnIgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0FQSSByZXF1ZXN0IGZhaWxlZDonLCBlcnIpO1xuXG4gICAgICAgICAgICAgICAgcmVwb3J0RXJyb3IoZXJyKTtcblxuICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mYXYtcGFnZScpLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgICAgICAgICAgaWYgKHdpbmRvdy5sb2NhdGlvbi5ocmVmLnN0YXJ0c1dpdGgoXCJodHRwczovL3d3dy5mYXZiZXQuaHIvXCIpKSB7XG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gJy9wcm9tb2NpamUvcHJvbW9jaWphL3N0dWIvJztcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9ICcvcHJvbW9zL3Byb21vL3N0dWIvJztcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QoZXJyKTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaGlkZUxvYWRlcigpe1xuICAgICAgICBsb2FkZXIuY2xhc3NMaXN0LmFkZChcImhpZGVcIilcbiAgICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5vdmVyZmxvdyA9IFwiYXV0b1wiXG4gICAgICAgIG1haW5QYWdlLmNsYXNzTGlzdC5yZW1vdmUoXCJsb2FkaW5nXCIpXG4gICAgfVxuXG4gICAgYXN5bmMgZnVuY3Rpb24gaW5pdCgpIHtcbiAgICAgICAgbGV0IGF0dGVtcHRzID0gMDtcbiAgICAgICAgY29uc3QgbWF4QXR0ZW1wdHMgPSAyMDtcbiAgICAgICAgY29uc3QgYXR0ZW1wdEludGVydmFsID0gNTA7XG5cbiAgICAgICAgZnVuY3Rpb24gdHJ5RGV0ZWN0VXNlcklkKCkge1xuICAgICAgICAgICAgaWYgKHdpbmRvdy5zdG9yZSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHN0YXRlID0gd2luZG93LnN0b3JlLmdldFN0YXRlKCk7XG4gICAgICAgICAgICAgICAgdXNlcklkID0gc3RhdGUuYXV0aC5pc0F1dGhvcml6ZWQgJiYgc3RhdGUuYXV0aC5pZCB8fCAnJztcbiAgICAgICAgICAgIH0gZWxzZSBpZiAod2luZG93LmdfdXNlcl9pZCkge1xuICAgICAgICAgICAgICAgIHVzZXJJZCA9IHdpbmRvdy5nX3VzZXJfaWQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBmdW5jdGlvbiBxdWlja0NoZWNrQW5kUmVuZGVyKCkge1xuICAgICAgICAgICAgLy8gY2hlY2tVc2VyQXV0aCgpXG4gICAgICAgICAgICAvLyAgICAgLnRoZW4obG9hZFVzZXJzKVxuICAgICAgICAgICAgLy8gICAgIC50aGVuKCgpID0+e1xuICAgICAgICAgICAgLy8gICAgICAgICBzZXRUaW1lb3V0KGhpZGVMb2FkZXIsIDMwMCk7XG4gICAgICAgICAgICAvLyAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIudGFibGVfX3RhYnMtaXRlbVwiKS5mb3JFYWNoKCh0YWIsIGkpID0+e1xuICAgICAgICAgICAgLy8gICAgICAgICAgICAgdGFiLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xuICAgICAgICAgICAgLy8gICAgICAgICAgICAgaWYoaSA9PT0gYWN0aXZlV2VlayAtIDEpIHRhYi5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcbiAgICAgICAgICAgIC8vICAgICAgICAgfSlcbiAgICAgICAgICAgIC8vICAgICAgICAgLy8gcmVuZGVyVXNlcnMoYWN0aXZlV2VlaywgdGFibGVEYXRhKTtcbiAgICAgICAgICAgIC8vICAgICAgICAgcGFydGljaXBhdGVCdG5zLmZvckVhY2goYnRuID0+IGJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHBhcnRpY2lwYXRlKSk7XG4gICAgICAgICAgICAvLyAgICAgfSlcblxuXG4gICAgICAgICAgICAvLyBzaGFrZVVudGlsKGJveCwgZ2V0VXNlclByaXplLCBsb2dvQm94KS50aGVuKHJlcyA9PntcbiAgICAgICAgICAgIC8vICAgICBzaG93UHJlbG9hZGVyKHJlcyk7XG4gICAgICAgICAgICAvLyB9KVxuXG4gICAgICAgICAgICB1cGRhdGVTbGlkZXIoKVxuXG4gICAgICAgICAgICAvLyBzaG93UHJpemVGb3JQcmVsb2FkZXIoXCJwcml6ZTFcIilcblxuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNhcmRfX2lubmVyJykuZm9yRWFjaChjYXJkID0+IHtcbiAgICAgICAgICAgICAgICBjYXJkLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjYXJkLmNsYXNzTGlzdC50b2dnbGUoJ2lzLWZsaXBwZWQnKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuXG5cblxuICAgICAgICAgICAgYnV0dG9uc0xlZnQuZm9yRWFjaChidG4gID0+IHtcbiAgICAgICAgICAgICAgICBidG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIG1vdmVTbGlkZXIoLTEpO1xuICAgICAgICAgICAgICAgICAgICBidG4uc3R5bGUucG9pbnRlckV2ZW50cyA9ICdub25lJztcbiAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7IGJ0bi5zdHlsZS5wb2ludGVyRXZlbnRzID0gJ2luaXRpYWwnOyB9LCAxMDAwKTtcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIGJ1dHRvbnNSaWdodC5mb3JFYWNoKGJ0biAgPT4ge1xuICAgICAgICAgICAgICAgIGJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgbW92ZVNsaWRlcigxKTtcbiAgICAgICAgICAgICAgICAgICAgYnRuLnN0eWxlLnBvaW50ZXJFdmVudHMgPSAnbm9uZSc7XG4gICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4geyBidG4uc3R5bGUucG9pbnRlckV2ZW50cyA9ICdpbml0aWFsJzsgfSwgMTAwMCk7XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH0pXG5cbiAgICAgICAgICAgIHNsaWRlci5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCBoYW5kbGVTdGFydCk7XG4gICAgICAgICAgICBzbGlkZXIuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hzdGFydCcsIGhhbmRsZVN0YXJ0KTtcblxuICAgICAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgaGFuZGxlTW92ZSk7XG4gICAgICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCd0b3VjaG1vdmUnLCBoYW5kbGVNb3ZlKTtcblxuICAgICAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIGhhbmRsZUVuZCk7XG4gICAgICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCd0b3VjaGVuZCcsIGhhbmRsZUVuZCk7XG5cbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wb3B1cHMnKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3Qgb3BlblBvcHVwRWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucG9wdXAuYWN0aXZlJyk7XG4gICAgICAgICAgICAgICAgaWYob3BlblBvcHVwRWwpe1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBjb250ZW50V3JhcCA9IG9wZW5Qb3B1cEVsLnF1ZXJ5U2VsZWN0b3IoJy5wb3B1cF9fd3JhcCcpO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBjbG9zZUJ0biA9IG9wZW5Qb3B1cEVsLnF1ZXJ5U2VsZWN0b3IoJy5jYXJkX19jbG9zZScpID8/IG9wZW5Qb3B1cEVsLnF1ZXJ5U2VsZWN0b3IoJy5wb3B1cF9fY2xvc2UnKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNvbnRlbnRXcmFwICYmICFjb250ZW50V3JhcC5jb250YWlucyhlLnRhcmdldCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsb3NlQWxsUG9wdXBzKCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaWYoZS50YXJnZXQgPT09IGNsb3NlQnRuKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjbG9zZUFsbFBvcHVwcygpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgY2FyZFBvcHVwSWNvbnMuZm9yRWFjaChpY29uID0+IHtcbiAgICAgICAgICAgICAgICBpY29uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKCl7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGRhdGFBdHRyID0gdGhpcy5nZXRBdHRyaWJ1dGUoXCJkYXRhLXBvcHVwXCIpXG4gICAgICAgICAgICAgICAgICAgIG9wZW5Qb3B1cEJ5QXR0cihkYXRhQXR0cik7XG4gICAgICAgICAgICAgICAgfSlcblxuICAgICAgICAgICAgfSlcblxuICAgICAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHdhaXRGb3JVc2VySWQgPSBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgaW50ZXJ2YWwgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdHJ5RGV0ZWN0VXNlcklkKCk7XG4gICAgICAgICAgICAgICAgaWYgKHVzZXJJZCB8fCBhdHRlbXB0cyA+PSBtYXhBdHRlbXB0cykge1xuICAgICAgICAgICAgICAgICAgICBxdWlja0NoZWNrQW5kUmVuZGVyKCk7XG4gICAgICAgICAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWwpO1xuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGF0dGVtcHRzKys7XG4gICAgICAgICAgICB9LCBhdHRlbXB0SW50ZXJ2YWwpO1xuICAgICAgICB9KTtcblxuICAgICAgICBhd2FpdCB3YWl0Rm9yVXNlcklkO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGxvYWRUcmFuc2xhdGlvbnMoKSB7XG4gICAgICAgIHJldHVybiByZXF1ZXN0KGAvbmV3LXRyYW5zbGF0ZXMvJHtsb2NhbGV9YClcbiAgICAgICAgICAgIC50aGVuKGpzb24gPT4ge1xuICAgICAgICAgICAgICAgIGkxOG5EYXRhID0ganNvbjtcbiAgICAgICAgICAgICAgICB0cmFuc2xhdGUoKTtcbiAgICAgICAgICAgICAgICBjb25zdCBtdXRhdGlvbk9ic2VydmVyID0gbmV3IE11dGF0aW9uT2JzZXJ2ZXIoZnVuY3Rpb24gKG11dGF0aW9ucykge1xuICAgICAgICAgICAgICAgICAgICBtdXRhdGlvbk9ic2VydmVyLmRpc2Nvbm5lY3QoKTtcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNsYXRlKCk7XG4gICAgICAgICAgICAgICAgICAgIG11dGF0aW9uT2JzZXJ2ZXIub2JzZXJ2ZSh0YXJnZXROb2RlLCB7IGNoaWxkTGlzdDogdHJ1ZSwgc3VidHJlZTogdHJ1ZSB9KTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBtdXRhdGlvbk9ic2VydmVyLm9ic2VydmUoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJoYXJkY29yZVRlbm5pc1wiKSwge1xuICAgICAgICAgICAgICAgICAgICBjaGlsZExpc3Q6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIHN1YnRyZWU6IHRydWVcbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLy8gZnVuY3Rpb24gc2hvd1ByaXplQnlEYXRhQXR0cihkYXRhQXR0cikge1xuICAgIC8vICAgICBjb25zdCBjYXJkcyA9IHByZWxvYWRlclByaXplLnF1ZXJ5U2VsZWN0b3JBbGwoJy5jYXJkX19pbm5lcicpO1xuICAgIC8vXG4gICAgLy8gICAgIGNhcmRzLmZvckVhY2goY2FyZCA9PiB7XG4gICAgLy8gICAgICAgICBjb25zdCBiYWNrID0gY2FyZC5xdWVyeVNlbGVjdG9yQWxsKCcuY2FyZF9fYmFjaycpXG4gICAgLy8gICAgICAgICBiYWNrLmZvckVhY2goaXRlbSA9PiB7XG4gICAgLy8gICAgICAgICAgICAgaXRlbS5jbGFzc0xpc3QuYWRkKCdoaWRlJyk7XG4gICAgLy8gICAgICAgICAgICAgaWYoaXRlbS5nZXRBdHRyaWJ1dGUoXCJkYXRhLXByaXplXCIpID09PSBkYXRhQXR0cikge1xuICAgIC8vICAgICAgICAgICAgICAgICBpdGVtLmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRlXCIpXG4gICAgLy8gICAgICAgICAgICAgfVxuICAgIC8vICAgICAgICAgfSlcbiAgICAvL1xuICAgIC8vXG4gICAgLy8gICAgIH0pXG4gICAgLy9cbiAgICAvLyB9XG5cblxuICAgIGZ1bmN0aW9uIGNsZWFyUHJlbG9hZGVyU3RhdGUoKXtcbiAgICAgICAgY29uc3QgYWxsQ2FyZHNJbm5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jYXJkX19pbm5lcicpLFxuICAgICAgICAgICAgYWxsQ2FyZEJhY2sgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY2FyZF9fYmFjaycpLFxuICAgICAgICAgICAgcG9wdXBQcmVsb2FkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucG9wdXAtLXByZWxvYWRlcicpO1xuXG4gICAgICAgIGFsbENhcmRzSW5uZXIuZm9yRWFjaChjYXJkID0+IHtcbiAgICAgICAgICAgIGNhcmQuY2xhc3NMaXN0LnJlbW92ZSgnaXMtZmxpcHBlZCcpO1xuICAgICAgICAgICAgY2FyZC5jbGFzc0xpc3QuYWRkKCdpcy1oaWRlJyk7XG4gICAgICAgIH0pXG4gICAgICAgIHBvcHVwUHJlbG9hZGVyLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xuXG4gICAgICAgIGFsbENhcmRCYWNrLmZvckVhY2goKGNhcmQpID0+IHtcbiAgICAgICAgICAgIGNhcmQuY2xhc3NMaXN0LmFkZCgnaGlkZScpO1xuICAgICAgICB9KVxuXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gc2hvd1ByZWxvYWRlcihwcml6ZSkge1xuICAgICAgICAgICAgb3BlblBvcHVwQnlBdHRyKCdwcmVsb2FkZXInKVxuICAgICAgICAgICAgc2hvd1ByaXplQnlEYXRhQXR0cihwcml6ZSlcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHByZWxvYWRlckNhcmRzLmZvckVhY2goKGNhcmQsIGkpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PntcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhcmQuY2xhc3NMaXN0LnJlbW92ZSgnaXMtaGlkZScpO1xuICAgICAgICAgICAgICAgICAgICB9LCBpICogMjUwKVxuICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+e1xuICAgICAgICAgICAgICAgICAgICAgICAgcHJlbG9hZGVyUHJpemUuY2xhc3NMaXN0LmFkZCgnaXMtZmxpcHBlZCcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PntcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGVhclByZWxvYWRlclN0YXRlKClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcGVuUG9wdXBCeUF0dHIocHJpemUpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSwgODAwKVxuICAgICAgICAgICAgICAgICAgICAgICAgfSwgMjAwMClcbiAgICAgICAgICAgICAgICAgICAgfSwgMTI1MClcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfSwgMjAwKTtcbiAgICB9XG4gICAgLy8gc2hvd1ByZWxvYWRlcigpO1xuXG4gICAgZnVuY3Rpb24gZ2V0VXNlclByaXplKCkge1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UocmVzb2x2ZSA9PiB7XG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHJlc29sdmUoJ3ByaXplMScpLCAxMDAwKTsgLy8g0YLRg9GCINC+0YLRgNC40LzRg9GU0Lwg0L/RgNC40Lcg0Y/QutC40Lkg0LLQuNC/0LDQsiDRjtC30LXRgNGDXG4gICAgICAgIH0pO1xuICAgIH1cblxuXG4gICAgZnVuY3Rpb24gc2hha2VVbnRpbChlbCwgd2FpdFByb21pc2UsIGxvZ28sIG9wdHMgPSB7fSkge1xuICAgICAgICBjb25zdCB7IGFtcGxpdHVkZSA9IDQsIGR1cmF0aW9uID0gNTAwLCBheGlzID0gJ3gnIH0gPSBvcHRzO1xuICAgICAgICBsZXQgc3RvcDtcblxuICAgICAgICBpZiAobG9nbyl7XG4gICAgICAgICAgICBsb2dvLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGVsLmFuaW1hdGUpIHtcbiAgICAgICAgICAgIGNvbnN0IGtleWZyYW1lcyA9IGF4aXMgPT09ICd4J1xuICAgICAgICAgICAgICAgID8gW3sgdHJhbnNmb3JtOiAndHJhbnNsYXRlWCgwKScgfSwgeyB0cmFuc2Zvcm06IGB0cmFuc2xhdGVYKC0ke2FtcGxpdHVkZX1weClgIH0sIHsgdHJhbnNmb3JtOiBgdHJhbnNsYXRlWCgke2FtcGxpdHVkZX1weClgIH0sIHsgdHJhbnNmb3JtOiAndHJhbnNsYXRlWCgwKScgfV1cbiAgICAgICAgICAgICAgICA6IFt7IHRyYW5zZm9ybTogJ3RyYW5zbGF0ZVkoMCknIH0sIHsgdHJhbnNmb3JtOiBgdHJhbnNsYXRlWSgtJHthbXBsaXR1ZGV9cHgpYCB9LCB7IHRyYW5zZm9ybTogYHRyYW5zbGF0ZVkoJHthbXBsaXR1ZGV9cHgpYCB9LCB7IHRyYW5zZm9ybTogJ3RyYW5zbGF0ZVkoMCknIH1dO1xuICAgICAgICAgICAgY29uc3QgYW5pbSA9IGVsLmFuaW1hdGUoa2V5ZnJhbWVzLCB7IGR1cmF0aW9uLCBpdGVyYXRpb25zOiBJbmZpbml0eSwgZWFzaW5nOiAnbGluZWFyJyB9KTtcbiAgICAgICAgICAgIHN0b3AgPSAoKSA9PiB7XG4gICAgICAgICAgICAgICAgYW5pbS5jYW5jZWwoKTtcbiAgICAgICAgICAgICAgICBlbC5zdHlsZS50cmFuc2Zvcm0gPSAnJztcbiAgICAgICAgICAgICAgICBpZiAobG9nbyl7XG4gICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT57XG4gICAgICAgICAgICAgICAgICAgICAgICBsb2dvLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xuICAgICAgICAgICAgICAgICAgICB9LCA0MDAwKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH07XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBsZXQgc3RhcnQgPSBudWxsLCByYWZJZCA9IDAsIHJ1bm5pbmcgPSB0cnVlO1xuICAgICAgICAgICAgY29uc3QgbG9vcCA9IHQgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChzdGFydCA9PT0gbnVsbCkgc3RhcnQgPSB0O1xuICAgICAgICAgICAgICAgIGNvbnN0IHBoYXNlID0gKCh0IC0gc3RhcnQpICUgZHVyYXRpb24pIC8gZHVyYXRpb24gKiBNYXRoLlBJICogMjtcbiAgICAgICAgICAgICAgICBjb25zdCBkZWx0YSA9IE1hdGguc2luKHBoYXNlKSAqIGFtcGxpdHVkZTtcbiAgICAgICAgICAgICAgICBlbC5zdHlsZS50cmFuc2Zvcm0gPSBheGlzID09PSAneCcgPyBgdHJhbnNsYXRlWCgke2RlbHRhfXB4KWAgOiBgdHJhbnNsYXRlWSgke2RlbHRhfXB4KWA7XG4gICAgICAgICAgICAgICAgaWYgKHJ1bm5pbmcpIHJhZklkID0gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGxvb3ApO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHJhZklkID0gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGxvb3ApO1xuICAgICAgICAgICAgc3RvcCA9ICgpID0+IHtcbiAgICAgICAgICAgICAgICBydW5uaW5nID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgY2FuY2VsQW5pbWF0aW9uRnJhbWUocmFmSWQpOyBlbC5zdHlsZS50cmFuc2Zvcm0gPSAnJztcbiAgICAgICAgICAgICAgICBpZiAobG9nbyl7XG4gICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT57XG4gICAgICAgICAgICAgICAgICAgICAgICBsb2dvLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xuICAgICAgICAgICAgICAgICAgICB9LCA0MDAwKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHdhaXRQcm9taXNlKS5maW5hbGx5KCgpID0+e1xuICAgICAgICAgICAgc3RvcCgpXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNoZWNrVXNlckF1dGgoKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKHVzZXJJZClcbiAgICAgICAgaWYgKHVzZXJJZCkge1xuICAgICAgICAgICAgZm9yIChjb25zdCB1bmF1dGhNZXMgb2YgdW5hdXRoTXNncykge1xuICAgICAgICAgICAgICAgIHVuYXV0aE1lcy5jbGFzc0xpc3QuYWRkKCdoaWRlJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gcmVxdWVzdChgL2ZhdnVzZXIvJHt1c2VySWR9P25vY2FjaGU9MWApXG4gICAgICAgICAgICAgICAgLnRoZW4ocmVzID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHJlcy51c2VyaWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhcnRpY2lwYXRlQnRucy5mb3JFYWNoKGl0ZW0gPT4gaXRlbS5jbGFzc0xpc3QuYWRkKCdoaWRlJykpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVkaXJlY3RCdG5zLmZvckVhY2goaXRlbSA9PiBpdGVtLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGUnKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpc1ZlcmlmaWVkVXNlciA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhpc1ZlcmlmaWVkVXNlcilcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhcnRpY2lwYXRlQnRucy5mb3JFYWNoKGl0ZW0gPT4gaXRlbS5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlJykpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVkaXJlY3RCdG5zLmZvckVhY2goaXRlbSA9PiBpdGVtLmNsYXNzTGlzdC5hZGQoJ2hpZGUnKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpc1ZlcmlmaWVkVXNlciA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZm9yIChsZXQgcmVkaXJlY3RCdG4gb2YgcmVkaXJlY3RCdG5zKSB7XG4gICAgICAgICAgICAgICAgcmVkaXJlY3RCdG4uY2xhc3NMaXN0LmFkZCgnaGlkZScpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZm9yIChsZXQgcGFydGljaXBhdGVCdG4gb2YgcGFydGljaXBhdGVCdG5zKSB7XG4gICAgICAgICAgICAgICAgcGFydGljaXBhdGVCdG4uY2xhc3NMaXN0LmFkZCgnaGlkZScpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZm9yIChjb25zdCB1bmF1dGhNZXMgb2YgdW5hdXRoTXNncykge1xuICAgICAgICAgICAgICAgIHVuYXV0aE1lcy5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlJyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoZmFsc2UpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcmVwb3J0RXJyb3IoZXJyKSB7XG4gICAgICAgIGNvbnN0IHJlcG9ydERhdGEgPSB7XG4gICAgICAgICAgICBvcmlnaW46IHdpbmRvdy5sb2NhdGlvbi5ocmVmLFxuICAgICAgICAgICAgdXNlcmlkOiB1c2VySWQsXG4gICAgICAgICAgICBlcnJvclRleHQ6IGVycj8uZXJyb3IgfHwgZXJyPy50ZXh0IHx8IGVycj8ubWVzc2FnZSB8fCAnVW5rbm93biBlcnJvcicsXG4gICAgICAgICAgICB0eXBlOiBlcnI/Lm5hbWUgfHwgJ1Vua25vd25FcnJvcicsXG4gICAgICAgICAgICBzdGFjazogZXJyPy5zdGFjayB8fCAnJ1xuICAgICAgICB9O1xuXG4gICAgICAgIGZldGNoKCdodHRwczovL2Zhdi1wcm9tLmNvbS9hcGktY21zL3JlcG9ydHMvYWRkJywge1xuICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHJlcG9ydERhdGEpXG4gICAgICAgIH0pLmNhdGNoKGNvbnNvbGUud2Fybik7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gdHJhbnNsYXRlKCkge1xuICAgICAgICBjb25zdCBlbGVtcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLXRyYW5zbGF0ZV0nKVxuICAgICAgICBpZiAoZWxlbXMgJiYgZWxlbXMubGVuZ3RoKSB7XG4gICAgICAgICAgICBpZih0cmFuc2xhdGVTdGF0ZSl7XG4gICAgICAgICAgICAgICAgZWxlbXMuZm9yRWFjaChlbGVtID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qga2V5ID0gZWxlbS5nZXRBdHRyaWJ1dGUoJ2RhdGEtdHJhbnNsYXRlJyk7XG4gICAgICAgICAgICAgICAgICAgIGVsZW0uaW5uZXJIVE1MID0gaTE4bkRhdGFba2V5XSB8fCAnKi0tLS1ORUVEIFRPIEJFIFRSQU5TTEFURUQtLS0tKiAgIGtleTogICcgKyBrZXk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChpMThuRGF0YVtrZXldKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBlbGVtLnJlbW92ZUF0dHJpYnV0ZSgnZGF0YS10cmFuc2xhdGUnKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcInRyYW5zbGF0aW9uIHdvcmtzIVwiKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChsb2NhbGUgPT09ICdlbicpIHtcbiAgICAgICAgICAgIG1haW5QYWdlLmNsYXNzTGlzdC5hZGQoJ2VuJyk7XG4gICAgICAgIH1cbiAgICAgICAgcmVmcmVzaExvY2FsaXplZENsYXNzKG1haW5QYWdlKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiByZWZyZXNoTG9jYWxpemVkQ2xhc3MoZWxlbWVudCkge1xuICAgICAgICBpZiAoIWVsZW1lbnQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBmb3IgKGNvbnN0IGxhbmcgb2YgWyd1aycsICdlbiddKSB7XG4gICAgICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoYmFzZUNzc0NsYXNzICsgbGFuZyk7XG4gICAgICAgIH1cbiAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKGJhc2VDc3NDbGFzcyArIGxvY2FsZSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcmVuZGVyVXNlcnMod2Vla051bSwgdXNlckRhdGEgPSBbXSkge1xuICAgICAgICB3ZWVrTnVtID0gTnVtYmVyKHdlZWtOdW0pO1xuICAgICAgICB1c2VyRGF0YSA9IHVzZXJEYXRhLmZpbmQod2VlayA9PiB7XG4gICAgICAgICAgICByZXR1cm4gd2Vlay53ZWVrID09PSB3ZWVrTnVtXG4gICAgICAgIH0pLnVzZXJzO1xuXG4gICAgICAgIGNvbnNvbGUubG9nKHVzZXJEYXRhKTtcblxuICAgICAgICBjb25zdCBjdXJyZW50VXNlciA9IHVzZXJEYXRhLmZpbmQodXNlciA9PiB1c2VyLnVzZXJpZCA9PT0gdXNlcklkKTtcblxuICAgICAgICBjb25zb2xlLmxvZyh1c2VySWQpXG4gICAgICAgIGNvbnNvbGUubG9nKGN1cnJlbnRVc2VyKVxuICAgICAgICBjb25zb2xlLmxvZyhpc1ZlcmlmaWVkVXNlcilcblxuICAgICAgICBpZih1c2VySWQgJiYgIWN1cnJlbnRVc2VyICYmIGlzVmVyaWZpZWRVc2VyKXtcbiAgICAgICAgICAgIHVzZXJEYXRhID0gWy4uLnVzZXJEYXRhLCB7dXNlcmlkOiB1c2VySWQsIHBvaW50czogMH1dXG4gICAgICAgIH1cbiAgICAgICAgY29uc29sZS5sb2codXNlckRhdGEpO1xuXG4gICAgICAgIHBvcHVsYXRlVXNlcnNUYWJsZSh1c2VyRGF0YSwgdXNlcklkLCB3ZWVrTnVtLCBjdXJyZW50VXNlciwgaXNWZXJpZmllZFVzZXIpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHBvcHVsYXRlVXNlcnNUYWJsZSh1c2VycywgY3VycmVudFVzZXJJZCwgd2VlaywgY3VycmVudFVzZXIsIGlzVmVyaWZpZWRVc2VyKSB7XG5cbiAgICAgICAgY29uc29sZS5sb2codXNlcnMpO1xuICAgICAgICByZXN1bHRzVGFibGUuaW5uZXJIVE1MID0gJyc7XG4gICAgICAgIHJlc3VsdHNUYWJsZU90aGVyLmlubmVySFRNTCA9ICcnO1xuICAgICAgICBpZiAoIXVzZXJzPy5sZW5ndGgpIHJldHVybjtcblxuICAgICAgICBjb25zdCBpc1RvcEN1cnJlbnRVc2VyID0gY3VycmVudFVzZXIgJiYgdXNlcnMuc2xpY2UoMCwgMTApLnNvbWUodXNlciA9PiB1c2VyLnVzZXJpZCA9PT0gY3VycmVudFVzZXJJZCk7XG5cbiAgICAgICAgY29uc3QgdG9wVXNlcnNMZW5ndGggPSAhdXNlcklkIHx8IGlzVG9wQ3VycmVudFVzZXIgID8gMTMgOiAxMDtcblxuICAgICAgICBjb25zdCB0b3BVc2VycyA9IHVzZXJzLnNsaWNlKDAsIHRvcFVzZXJzTGVuZ3RoKTtcblxuICAgICAgICAvLyBjb25zb2xlLmxvZyh1c2Vycyk7XG4gICAgICAgIHRvcFVzZXJzLmZvckVhY2godXNlciA9PiB7XG4gICAgICAgICAgICBkaXNwbGF5VXNlcih1c2VyLCB1c2VyLnVzZXJpZCA9PT0gY3VycmVudFVzZXJJZCwgcmVzdWx0c1RhYmxlLCB0b3BVc2VycywgaXNUb3BDdXJyZW50VXNlciwgd2Vlayk7XG4gICAgICAgIH0pO1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhpc1RvcEN1cnJlbnRVc2VyKVxuICAgICAgICBjb25zb2xlLmxvZyhpc1ZlcmlmaWVkVXNlcilcbiAgICAgICAgaWYoaXNWZXJpZmllZFVzZXIgJiYgIWN1cnJlbnRVc2VyKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygndXNlciB2ZXJpZmllZCcpO1xuICAgICAgICAgICAgZGlzcGxheVVzZXIoY3VycmVudFVzZXIsIHRydWUsIHJlc3VsdHNUYWJsZU90aGVyLCB1c2VycywgZmFsc2UsIHdlZWspO1xuICAgICAgICB9XG4gICAgICAgIGlmICghaXNUb3BDdXJyZW50VXNlciAmJiBjdXJyZW50VXNlcikge1xuICAgICAgICAgICAgaXNWZXJpZmllZFVzZXIgPSBmYWxzZTtcbiAgICAgICAgICAgIGRpc3BsYXlVc2VyKGN1cnJlbnRVc2VyLCB0cnVlLCByZXN1bHRzVGFibGVPdGhlciwgdXNlcnMsIGZhbHNlLCB3ZWVrKTtcbiAgICAgICAgfVxuXG5cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBkaXNwbGF5VXNlcih1c2VyLCBpc0N1cnJlbnRVc2VyLCB0YWJsZSwgdXNlcnMsIGlzVG9wQ3VycmVudFVzZXIsIHdlZWspIHtcblxuICAgICAgICBjb25zdCByZW5kZXJSb3cgPSAodXNlckRhdGEsIG9wdGlvbnMgPSB7fSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgeyBoaWdobGlnaHQgPSBmYWxzZSwgbmVpZ2hib3IgPSBmYWxzZSB9ID0gb3B0aW9ucztcbiAgICAgICAgICAgIGNvbnN0IHVzZXJSb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIHVzZXJSb3cuY2xhc3NMaXN0LmFkZCgndGFibGVfX3JvdycpO1xuXG4gICAgICAgICAgICBjb25zdCB1c2VyUGxhY2UgPSB1c2Vycy5pbmRleE9mKHVzZXJEYXRhKSArIDE7XG4gICAgICAgICAgICBjb25zdCBwcml6ZUtleSA9IGRlYnVnID8gbnVsbCA6IGdldFByaXplVHJhbnNsYXRpb25LZXkodXNlclBsYWNlLCB3ZWVrKTtcblxuICAgICAgICAgICAgaWYgKHVzZXJQbGFjZSA8PSAzKSB7XG4gICAgICAgICAgICAgICAgdXNlclJvdy5jbGFzc0xpc3QuYWRkKGBwbGFjZSR7dXNlclBsYWNlfWApO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoaGlnaGxpZ2h0IHx8IGlzQ3VycmVudFVzZXIgJiYgIW5laWdoYm9yKSB7XG4gICAgICAgICAgICAgICAgdXNlclJvdy5jbGFzc0xpc3QuYWRkKCd5b3UnKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAobmVpZ2hib3IpIHtcbiAgICAgICAgICAgICAgICB1c2VyUm93LmNsYXNzTGlzdC5hZGQoJ19uZWlnaGJvcicpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB1c2VyUm93LmlubmVySFRNTCA9IGBcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0YWJsZV9fcm93LWl0ZW1cIj5cbiAgICAgICAgICAgICAgICAke3VzZXJQbGFjZSA8IDEwID8gJzAnICsgdXNlclBsYWNlIDogdXNlclBsYWNlfVxuICAgICAgICAgICAgICAgICR7aXNDdXJyZW50VXNlciAmJiAhbmVpZ2hib3IgPyAnPHNwYW4gY2xhc3M9XCJ5b3VcIj4nICsgdHJhbnNsYXRlS2V5KFwieW91XCIpICsgJzwvc3Bhbj4nIDogJyd9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0YWJsZV9fcm93LWl0ZW1cIj5cbiAgICAgICAgICAgICAgICAke2lzQ3VycmVudFVzZXIgJiYgIW5laWdoYm9yID8gdXNlckRhdGEudXNlcmlkIDogbWFza1VzZXJJZCh1c2VyRGF0YS51c2VyaWQpfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGFibGVfX3Jvdy1pdGVtXCI+XG4gICAgICAgICAgICAgICAgJHtOdW1iZXIodXNlckRhdGEucG9pbnRzKS50b0ZpeGVkKDIpfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGFibGVfX3Jvdy1pdGVtXCI+XG4gICAgICAgICAgICAgICAgJHtwcml6ZUtleSA/IHRyYW5zbGF0ZUtleShwcml6ZUtleSkgOiAnIC0gJ31cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICBgO1xuXG4gICAgICAgICAgICB0YWJsZS5hcHBlbmQodXNlclJvdyk7XG4gICAgICAgIH07XG4gICAgICAgIGlmIChpc0N1cnJlbnRVc2VyICYmICFpc1RvcEN1cnJlbnRVc2VyKSB7XG4gICAgICAgICAgICBjb25zdCBpbmRleCA9IHVzZXJzLmluZGV4T2YodXNlcik7XG4gICAgICAgICAgICBpZiAodXNlcnNbaW5kZXggLSAxXSkge1xuICAgICAgICAgICAgICAgIHJlbmRlclJvdyh1c2Vyc1tpbmRleCAtIDFdLCB7IG5laWdoYm9yOiB0cnVlIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmVuZGVyUm93KHVzZXIsIHsgaGlnaGxpZ2h0OiB0cnVlIH0pO1xuICAgICAgICAgICAgaWYgKHVzZXJzW2luZGV4ICsgMV0pIHtcbiAgICAgICAgICAgICAgICByZW5kZXJSb3codXNlcnNbaW5kZXggKyAxXSwgeyBuZWlnaGJvcjogdHJ1ZSB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJlbmRlclJvdyh1c2VyKTtcbiAgICAgICAgfVxuICAgIH1cblxuXG4gICAgZnVuY3Rpb24gdHJhbnNsYXRlS2V5KGtleSwgZGVmYXVsdFZhbHVlKSB7XG4gICAgICAgIGlmICgha2V5KSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgbGV0IG5lZWRLZXkgPSBkZWJ1ZyA/IGtleSA6IGAqLS0tLU5FRUQgVE8gQkUgVFJBTlNMQVRFRC0tLS0qIGtleTogJHtrZXl9YFxuXG4gICAgICAgIGRlZmF1bHRWYWx1ZSA9ICBuZWVkS2V5IHx8IGtleTtcbiAgICAgICAgcmV0dXJuIGkxOG5EYXRhW2tleV0gfHwgZGVmYXVsdFZhbHVlO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIG1hc2tVc2VySWQodXNlcklkKSB7XG4gICAgICAgIHJldHVybiBcIioqXCIgKyB1c2VySWQudG9TdHJpbmcoKS5zbGljZSgyKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBnZXRQcml6ZVRyYW5zbGF0aW9uS2V5KHBsYWNlLCB3ZWVrKSB7XG4gICAgICAgIGlmIChwbGFjZSA8PSAzKSByZXR1cm4gYHByaXplXyR7d2Vla30tJHtwbGFjZX1gO1xuICAgICAgICBpZiAocGxhY2UgPD0gMTApIHJldHVybiBgcHJpemVfJHt3ZWVrfS00LTEwYDtcbiAgICAgICAgaWYgKHBsYWNlIDw9IDI1KSByZXR1cm4gYHByaXplXyR7d2Vla30tMTEtMjVgO1xuICAgICAgICBpZiAocGxhY2UgPD0gNTApIHJldHVybiBgcHJpemVfJHt3ZWVrfS0yNi01MGA7XG4gICAgICAgIGlmIChwbGFjZSA8PSA3NSkgcmV0dXJuIGBwcml6ZV8ke3dlZWt9LTUxLTc1YDtcbiAgICAgICAgaWYgKHBsYWNlIDw9IDEwMCkgcmV0dXJuIGBwcml6ZV8ke3dlZWt9LTc2LTEwMGA7XG4gICAgICAgIGlmIChwbGFjZSA8PSAxMjUpIHJldHVybiBgcHJpemVfJHt3ZWVrfS0xMDEtMTI1YDtcbiAgICAgICAgaWYgKHBsYWNlIDw9IDE1MCkgcmV0dXJuIGBwcml6ZV8ke3dlZWt9LTEyNi0xNTBgO1xuICAgICAgICBpZiAocGxhY2UgPD0gMTc1KSByZXR1cm4gYHByaXplXyR7d2Vla30tMTUxLTE3NWA7XG4gICAgICAgIGlmIChwbGFjZSA8PSAyMDApIHJldHVybiBgcHJpemVfJHt3ZWVrfS0xNzYtMjAwYDtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBzaG93UHJpemVCeURhdGFBdHRyKHByaXplKXtcbiAgICAgICAgY29uc3QgYWxsUHJpemVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW2RhdGEtcHJpemVdJyk7XG4gICAgICAgIGNvbnN0IGN1cnJlbnRQcml6ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLXByaXplPVwiJHtwcml6ZX1cIl1gKTtcblxuICAgICAgICBpZiAoY3VycmVudFByaXplICYmIGFsbFByaXplcykge1xuICAgICAgICAgICAgYWxsUHJpemVzLmZvckVhY2gocHJpemUgPT4ge1xuICAgICAgICAgICAgICAgIHByaXplLmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICBjdXJyZW50UHJpemUuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZScpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcGFydGljaXBhdGUoKSB7XG4gICAgICAgIGlmICghdXNlcklkKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgcGFyYW1zID0geyB1c2VyaWQ6IHVzZXJJZCB9O1xuICAgICAgICBmZXRjaChhcGlVUkwgKyAnL3VzZXIvJywge1xuICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgICdBY2NlcHQnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkocGFyYW1zKVxuICAgICAgICB9KS50aGVuKHJlcyA9PiByZXMuanNvbigpKVxuICAgICAgICAgICAgLnRoZW4ocmVzID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXMpO1xuICAgICAgICAgICAgICAgIGxvYWRlckJ0biA9IHRydWVcbiAgICAgICAgICAgICAgICB0b2dnbGVDbGFzc2VzKHBhcnRpY2lwYXRlQnRucywgXCJsb2FkZXJcIilcbiAgICAgICAgICAgICAgICB0b2dnbGVUcmFuc2xhdGVzKHBhcnRpY2lwYXRlQnRucywgXCJsb2FkZXJcIilcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+e1xuICAgICAgICAgICAgICAgICAgICB0b2dnbGVUcmFuc2xhdGVzKHBhcnRpY2lwYXRlQnRucywgXCJsb2FkZXJfcmVhZHlcIilcbiAgICAgICAgICAgICAgICAgICAgdG9nZ2xlQ2xhc3NlcyhwYXJ0aWNpcGF0ZUJ0bnMsIFwiZG9uZVwiKVxuICAgICAgICAgICAgICAgICAgICB0b2dnbGVDbGFzc2VzKHBhcnRpY2lwYXRlQnRucywgXCJsb2FkZXJcIilcbiAgICAgICAgICAgICAgICB9LCA1MDApXG4gICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKT0+e1xuICAgICAgICAgICAgICAgICAgICBjaGVja1VzZXJBdXRoKClcbiAgICAgICAgICAgICAgICAgICAgbG9hZFVzZXJzKFwiP25vY2FjaGU9MVwiKS50aGVuKHJlcyA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZW5kZXJVc2VycyhhY3RpdmVXZWVrLCB0YWJsZURhdGEpXG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgfSwgMTAwMClcblxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5jYXRjaChlcnIgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0FQSSByZXF1ZXN0IGZhaWxlZDonLCBlcnIpO1xuXG4gICAgICAgICAgICAgICAgcmVwb3J0RXJyb3IoZXJyKTtcblxuICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mYXYtcGFnZScpLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgICAgICAgICAgaWYgKHdpbmRvdy5sb2NhdGlvbi5ocmVmLnN0YXJ0c1dpdGgoXCJodHRwczovL3d3dy5mYXZiZXQuaHIvXCIpKSB7XG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gJy9wcm9tb2NpamUvcHJvbW9jaWphL3N0dWIvJztcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9ICcvcHJvbW9zL3Byb21vL3N0dWIvJztcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QoZXJyKTtcbiAgICAgICAgICAgIH0pO1xuICAgIH1cbiAgICBmdW5jdGlvbiBsb2FkVXNlcnMocGFyYW1ldHIpIHtcbiAgICAgICAgY29uc3QgcmVxdWVzdHMgPSBbXTtcbiAgICAgICAgdGFibGVEYXRhLmxlbmd0aCA9IDBcblxuICAgICAgICBmb3IgKGxldCBpID0gMTsgaSA8PSBwZXJpb2RBbW91bnQ7IGkrKykge1xuICAgICAgICAgICAgY29uc3Qgd2VlayA9IGk7IC8vINCw0LHQviDQsdGD0LTRjC3Rj9C60LAg0LvQvtCz0ZbQutCwINC00LvRjyDRhNC+0YDQvNGD0LLQsNC90L3RjyDQvdC+0LzQtdGA0LAg0YLQuNC20L3Rj1xuICAgICAgICAgICAgY29uc3QgcmVxID0gcmVxdWVzdChgL3VzZXJzLyR7d2Vla30ke3BhcmFtZXRyID8gcGFyYW1ldHIgOiBcIlwifWApLnRoZW4oZGF0YSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZGF0YSk7XG4gICAgICAgICAgICAgICAgdGFibGVEYXRhLnB1c2goeyB3ZWVrLCB1c2VyczogZGF0YSB9KTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICByZXF1ZXN0cy5wdXNoKHJlcSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gUHJvbWlzZS5hbGwocmVxdWVzdHMpXG4gICAgICAgIC5jYXRjaChlcnJvciA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBsb2FkaW5nIHVzZXJzOicsIGVycm9yKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG5cblxuLy9zbGlkZXJcblxuICAgIGNvbnN0IGJ1dHRvbnNSaWdodCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5wcml6ZV9fbW92ZS1yaWdodCcpLFxuICAgICAgICBidXR0b25zTGVmdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5wcml6ZV9fbW92ZS1sZWZ0JyksXG4gICAgICAgIHNsaWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jYXJkcycpLFxuICAgICAgICBpdGVtcyA9IHNsaWRlci5xdWVyeVNlbGVjdG9yQWxsKCcuY2FyZCcpLFxuICAgICAgICB0b3RhbEl0ZW1zID0gaXRlbXMubGVuZ3RoLFxuICAgICAgICBkb3RzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnByaXplX19kb3RzLWl0ZW0nKVxuXG4gICAgbGV0IGN1cnJlbnRJbmRleCA9IDI7XG4gICAgbGV0IHN0YXJ0WCA9IDA7XG4gICAgbGV0IGlzRHJhZ2dpbmcgPSBmYWxzZTtcblxuXG4gICAgZnVuY3Rpb24gdXBkYXRlU2xpZGVyKCkge1xuICAgICAgICBpdGVtcy5mb3JFYWNoKChpdGVtLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgZGlzdGFuY2UgPSAoaW5kZXggLSBjdXJyZW50SW5kZXggKyB0b3RhbEl0ZW1zKSAlIHRvdGFsSXRlbXM7XG5cbiAgICAgICAgICAgIGl0ZW0uY2xhc3NMaXN0LnJlbW92ZShcbiAgICAgICAgICAgICAgICAnX2xlZnQnLCAnX2xlZnQxJywgJ19sZWZ0MicsXG4gICAgICAgICAgICAgICAgJ19yaWdodCcsICdfcmlnaHQxJywgJ19yaWdodDInLFxuICAgICAgICAgICAgICAgICdfYWN0aXZlJywgJ19oaWRlLXNsaWRlJ1xuICAgICAgICAgICAgKTtcblxuICAgICAgICAgICAgaWYgKGluZGV4ID09PSBjdXJyZW50SW5kZXgpIHtcbiAgICAgICAgICAgICAgICBpdGVtLmNsYXNzTGlzdC5hZGQoJ19hY3RpdmUnKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChkaXN0YW5jZSA9PT0gMSkge1xuICAgICAgICAgICAgICAgIGl0ZW0uY2xhc3NMaXN0LmFkZCgnX3JpZ2h0MScpO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChkaXN0YW5jZSA9PT0gMikge1xuICAgICAgICAgICAgICAgIGl0ZW0uY2xhc3NMaXN0LmFkZCgnX3JpZ2h0MicpO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChkaXN0YW5jZSA9PT0gdG90YWxJdGVtcyAtIDEpIHtcbiAgICAgICAgICAgICAgICBpdGVtLmNsYXNzTGlzdC5hZGQoJ19sZWZ0MScpO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChkaXN0YW5jZSA9PT0gdG90YWxJdGVtcyAtIDIpIHtcbiAgICAgICAgICAgICAgICBpdGVtLmNsYXNzTGlzdC5hZGQoJ19sZWZ0MicpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBpdGVtLmNsYXNzTGlzdC5hZGQoJ19oaWRlLXNsaWRlJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICB1cGRhdGVEb3RzKClcbiAgICB9XG5cbiAgICBmdW5jdGlvbiB1cGRhdGVEb3RzKCl7XG4gICAgICAgIGRvdHMuZm9yRWFjaCgoaXRlbSwgaSkgPT4ge1xuICAgICAgICAgICAgaXRlbS5jbGFzc0xpc3QucmVtb3ZlKCdfYWN0aXZlJyk7XG4gICAgICAgICAgICBpZihpID09PSBjdXJyZW50SW5kZXgpIHtcbiAgICAgICAgICAgICAgICBpdGVtLmNsYXNzTGlzdC5hZGQoJ19hY3RpdmUnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBtb3ZlU2xpZGVyKG9mZnNldCkge1xuICAgICAgICBjdXJyZW50SW5kZXggPSAoY3VycmVudEluZGV4ICsgb2Zmc2V0ICsgdG90YWxJdGVtcykgJSB0b3RhbEl0ZW1zO1xuICAgICAgICB1cGRhdGVTbGlkZXIoKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBoYW5kbGVTdGFydChldmVudCkge1xuICAgICAgICBpc0RyYWdnaW5nID0gdHJ1ZTtcbiAgICAgICAgc3RhcnRYID0gZXZlbnQuY2xpZW50WCB8fCBldmVudC50b3VjaGVzWzBdLmNsaWVudFg7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaGFuZGxlTW92ZShldmVudCkge1xuICAgICAgICBpZiAoIWlzRHJhZ2dpbmcpIHJldHVybjtcblxuICAgICAgICBjb25zdCBjdXJyZW50WCA9IGV2ZW50LmNsaWVudFggfHwgZXZlbnQudG91Y2hlc1swXS5jbGllbnRYO1xuICAgICAgICBjb25zdCBkaWZmWCA9IGN1cnJlbnRYIC0gc3RhcnRYO1xuXG4gICAgICAgIGlmIChNYXRoLmFicyhkaWZmWCkgPiA1MCkge1xuICAgICAgICAgICAgbW92ZVNsaWRlcihkaWZmWCA+IDAgPyAtMSA6IDEpO1xuICAgICAgICAgICAgaXNEcmFnZ2luZyA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaGFuZGxlRW5kKCkge1xuICAgICAgICBpc0RyYWdnaW5nID0gZmFsc2U7XG4gICAgfVxuXG4vL3NsaWRlclxuXG4gICAgLy8gZnVuY3Rpb24gb3BlblBvcHVwQnlBdHRyKHBvcHVwQXR0cikge1xuICAgIC8vICAgICBjb25zdCBhbGxQb3B1cHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucG9wdXAnKTtcbiAgICAvLyAgICAgYWxsUG9wdXBzLmZvckVhY2gocCA9PiBwLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpKTtcbiAgICAvLyAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5vdmVyZmxvdyA9ICdoaWRkZW4nO1xuICAgIC8vXG4gICAgLy8gICAgIGNvbnNvbGUubG9nKHBvcHVwQXR0cik7XG4gICAgLy9cbiAgICAvLyAgICAgY29uc3QgdGFyZ2V0UG9wdXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAucG9wdXBbZGF0YS1wb3B1cD1cIiR7cG9wdXBBdHRyfVwiXWApO1xuICAgIC8vICAgICBpZiAodGFyZ2V0UG9wdXApIHtcbiAgICAvLyAgICAgICAgIHRhcmdldFBvcHVwLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xuICAgIC8vICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBvcHVwcycpLmNsYXNzTGlzdC5yZW1vdmUoJ29wYWNpdHknKTtcbiAgICAvLyAgICAgfVxuICAgIC8vIH1cblxuICAgIGZ1bmN0aW9uIGNsb3NlQWxsUG9wdXBzKCkge1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucG9wdXAnKS5mb3JFYWNoKHAgPT4gcC5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKSk7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wb3B1cHMnKS5jbGFzc0xpc3QuYWRkKCdvcGFjaXR5LW92ZXJsYXknKTtcbiAgICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5vdmVyZmxvdyA9ICdhdXRvJztcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBpbml0T3BlbkJveCgpe1xuICAgICAgICBzaGFrZVVudGlsKGJveCwgZ2V0VXNlclByaXplKCksIGxvZ29Cb3gpLnRoZW4ocHJpemUgPT4ge1xuICAgICAgICAgICAgYm94Q2FwLmNsYXNzTGlzdC5hZGQoXCJvcGVuXCIpO1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKHJlc29sdmUgPT4ge1xuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBib3hDYXAuY2xhc3NMaXN0LnJlbW92ZShcIm9wZW5cIik7XG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUocHJpemUpO1xuICAgICAgICAgICAgICAgIH0sIDIwMDApO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pLnRoZW4ocHJpemUgPT4ge1xuICAgICAgICAgICAgc2hvd1ByZWxvYWRlcihwcml6ZSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuXG4gICAgLy8gbG9hZFRyYW5zbGF0aW9ucygpXG4gICAgLy8gICAgIC50aGVuKGluaXQpIC8vINC30LDQv9GD0YHQuiDRltC90ZbRgtGDINGB0YLQvtGA0ZbQvdC60LhcblxuICAgIGluaXQoKVxuXG4gICAgLy8gLy8vIHRlc3RcblxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsICgpID0+IHtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tZW51LWJ0blwiKT8uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWVudS10ZXN0XCIpPy5jbGFzc0xpc3QudG9nZ2xlKFwiaGlkZVwiKTtcbiAgICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICBjb25zdCBsbmdCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmxuZy1idG5cIilcblxuICAgIGxuZ0J0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICBpZiAoc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbShcImxvY2FsZVwiKSkge1xuICAgICAgICAgICAgc2Vzc2lvblN0b3JhZ2UucmVtb3ZlSXRlbShcImxvY2FsZVwiKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oXCJsb2NhbGVcIiwgXCJlblwiKTtcbiAgICAgICAgfVxuICAgICAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKCk7XG4gICAgfSk7XG5cbiAgICBjb25zdCBhdXRoQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hdXRoLWJ0blwiKVxuXG4gICAgYXV0aEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT57XG4gICAgICAgIGlmKHVzZXJJZCl7XG4gICAgICAgICAgICBzZXNzaW9uU3RvcmFnZS5yZW1vdmVJdGVtKFwidXNlcklkXCIpXG4gICAgICAgIH1lbHNle1xuICAgICAgICAgICAgc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbShcInVzZXJJZFwiLCBcIjEwMDMwMDI2OFwiKVxuICAgICAgICB9XG4gICAgICAgIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKVxuICAgIH0pO1xuXG4gICAgY29uc3QgcG9wdXBzTWVudSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucG9wdXBzLWJ0blwiKTtcblxuICAgIHBvcHVwc01lbnUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tZW51LXBvcHVwXCIpLmNsYXNzTGlzdC50b2dnbGUoXCJoaWRlXCIpO1xuICAgIH0pXG5cbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm9wZW4tYm94XCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PntcbiAgICAgICAgaW5pdE9wZW5Cb3goKTtcbiAgICB9KVxuXG59KSgpO1xuXG4vLyDQv9GW0YHQu9GPINGC0LXRgdGC0YMg0LLQuNC00LDQu9C4INGG0Y4g0YTRg9C90LrRhtGW0Y4g0ZYg0YDQvtC30LrQvtC80LXQvdGC0Lgg0LDQvdCw0LvQvtCz0ZbRh9C90YMg0LIg0YTRg9C90LrRhtGW0Zcg0LLQuNC60LvQuNC60YNcbmZ1bmN0aW9uIG9wZW5Qb3B1cEJ5QXR0cihwb3B1cEF0dHIpIHtcbiAgICBjb25zdCBhbGxQb3B1cHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucG9wdXAnKTtcbiAgICBhbGxQb3B1cHMuZm9yRWFjaChwID0+IHAuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJykpO1xuXG4gICAgY29uc29sZS5sb2cocG9wdXBBdHRyKTtcblxuICAgIGNvbnN0IHRhcmdldFBvcHVwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLnBvcHVwW2RhdGEtcG9wdXA9XCIke3BvcHVwQXR0cn1cIl1gKTtcbiAgICBpZiAodGFyZ2V0UG9wdXApIHtcbiAgICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5vdmVyZmxvdyA9ICdoaWRkZW4nO1xuICAgICAgICB0YXJnZXRQb3B1cC5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBvcHVwcycpLmNsYXNzTGlzdC5yZW1vdmUoJ29wYWNpdHktb3ZlcmxheScpO1xuICAgIH1cbn1cblxuIl19
