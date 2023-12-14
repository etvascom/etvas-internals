var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __esm = (fn, res) => function __init() {
  return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
};
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/react-shim.js
var React;
var init_react_shim = __esm({
  "src/react-shim.js"() {
    React = __toESM(require("react"));
  }
});

// node_modules/react-is/cjs/react-is.development.js
var require_react_is_development = __commonJS({
  "node_modules/react-is/cjs/react-is.development.js"(exports) {
    "use strict";
    init_react_shim();
    if (true) {
      (function() {
        "use strict";
        var hasSymbol = typeof Symbol === "function" && Symbol.for;
        var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for("react.element") : 60103;
        var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for("react.portal") : 60106;
        var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for("react.fragment") : 60107;
        var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for("react.strict_mode") : 60108;
        var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for("react.profiler") : 60114;
        var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for("react.provider") : 60109;
        var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for("react.context") : 60110;
        var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for("react.async_mode") : 60111;
        var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for("react.concurrent_mode") : 60111;
        var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for("react.forward_ref") : 60112;
        var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for("react.suspense") : 60113;
        var REACT_SUSPENSE_LIST_TYPE = hasSymbol ? Symbol.for("react.suspense_list") : 60120;
        var REACT_MEMO_TYPE = hasSymbol ? Symbol.for("react.memo") : 60115;
        var REACT_LAZY_TYPE = hasSymbol ? Symbol.for("react.lazy") : 60116;
        var REACT_BLOCK_TYPE = hasSymbol ? Symbol.for("react.block") : 60121;
        var REACT_FUNDAMENTAL_TYPE = hasSymbol ? Symbol.for("react.fundamental") : 60117;
        var REACT_RESPONDER_TYPE = hasSymbol ? Symbol.for("react.responder") : 60118;
        var REACT_SCOPE_TYPE = hasSymbol ? Symbol.for("react.scope") : 60119;
        function isValidElementType(type) {
          return typeof type === "string" || typeof type === "function" || type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || typeof type === "object" && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_RESPONDER_TYPE || type.$$typeof === REACT_SCOPE_TYPE || type.$$typeof === REACT_BLOCK_TYPE);
        }
        function typeOf(object2) {
          if (typeof object2 === "object" && object2 !== null) {
            var $$typeof = object2.$$typeof;
            switch ($$typeof) {
              case REACT_ELEMENT_TYPE:
                var type = object2.type;
                switch (type) {
                  case REACT_ASYNC_MODE_TYPE:
                  case REACT_CONCURRENT_MODE_TYPE:
                  case REACT_FRAGMENT_TYPE:
                  case REACT_PROFILER_TYPE:
                  case REACT_STRICT_MODE_TYPE:
                  case REACT_SUSPENSE_TYPE:
                    return type;
                  default:
                    var $$typeofType = type && type.$$typeof;
                    switch ($$typeofType) {
                      case REACT_CONTEXT_TYPE:
                      case REACT_FORWARD_REF_TYPE:
                      case REACT_LAZY_TYPE:
                      case REACT_MEMO_TYPE:
                      case REACT_PROVIDER_TYPE:
                        return $$typeofType;
                      default:
                        return $$typeof;
                    }
                }
              case REACT_PORTAL_TYPE:
                return $$typeof;
            }
          }
          return void 0;
        }
        var AsyncMode = REACT_ASYNC_MODE_TYPE;
        var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
        var ContextConsumer = REACT_CONTEXT_TYPE;
        var ContextProvider = REACT_PROVIDER_TYPE;
        var Element = REACT_ELEMENT_TYPE;
        var ForwardRef = REACT_FORWARD_REF_TYPE;
        var Fragment2 = REACT_FRAGMENT_TYPE;
        var Lazy = REACT_LAZY_TYPE;
        var Memo = REACT_MEMO_TYPE;
        var Portal = REACT_PORTAL_TYPE;
        var Profiler = REACT_PROFILER_TYPE;
        var StrictMode = REACT_STRICT_MODE_TYPE;
        var Suspense = REACT_SUSPENSE_TYPE;
        var hasWarnedAboutDeprecatedIsAsyncMode = false;
        function isAsyncMode(object2) {
          {
            if (!hasWarnedAboutDeprecatedIsAsyncMode) {
              hasWarnedAboutDeprecatedIsAsyncMode = true;
              console["warn"]("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.");
            }
          }
          return isConcurrentMode(object2) || typeOf(object2) === REACT_ASYNC_MODE_TYPE;
        }
        function isConcurrentMode(object2) {
          return typeOf(object2) === REACT_CONCURRENT_MODE_TYPE;
        }
        function isContextConsumer(object2) {
          return typeOf(object2) === REACT_CONTEXT_TYPE;
        }
        function isContextProvider(object2) {
          return typeOf(object2) === REACT_PROVIDER_TYPE;
        }
        function isElement(object2) {
          return typeof object2 === "object" && object2 !== null && object2.$$typeof === REACT_ELEMENT_TYPE;
        }
        function isForwardRef(object2) {
          return typeOf(object2) === REACT_FORWARD_REF_TYPE;
        }
        function isFragment(object2) {
          return typeOf(object2) === REACT_FRAGMENT_TYPE;
        }
        function isLazy(object2) {
          return typeOf(object2) === REACT_LAZY_TYPE;
        }
        function isMemo(object2) {
          return typeOf(object2) === REACT_MEMO_TYPE;
        }
        function isPortal(object2) {
          return typeOf(object2) === REACT_PORTAL_TYPE;
        }
        function isProfiler(object2) {
          return typeOf(object2) === REACT_PROFILER_TYPE;
        }
        function isStrictMode(object2) {
          return typeOf(object2) === REACT_STRICT_MODE_TYPE;
        }
        function isSuspense(object2) {
          return typeOf(object2) === REACT_SUSPENSE_TYPE;
        }
        exports.AsyncMode = AsyncMode;
        exports.ConcurrentMode = ConcurrentMode;
        exports.ContextConsumer = ContextConsumer;
        exports.ContextProvider = ContextProvider;
        exports.Element = Element;
        exports.ForwardRef = ForwardRef;
        exports.Fragment = Fragment2;
        exports.Lazy = Lazy;
        exports.Memo = Memo;
        exports.Portal = Portal;
        exports.Profiler = Profiler;
        exports.StrictMode = StrictMode;
        exports.Suspense = Suspense;
        exports.isAsyncMode = isAsyncMode;
        exports.isConcurrentMode = isConcurrentMode;
        exports.isContextConsumer = isContextConsumer;
        exports.isContextProvider = isContextProvider;
        exports.isElement = isElement;
        exports.isForwardRef = isForwardRef;
        exports.isFragment = isFragment;
        exports.isLazy = isLazy;
        exports.isMemo = isMemo;
        exports.isPortal = isPortal;
        exports.isProfiler = isProfiler;
        exports.isStrictMode = isStrictMode;
        exports.isSuspense = isSuspense;
        exports.isValidElementType = isValidElementType;
        exports.typeOf = typeOf;
      })();
    }
  }
});

// node_modules/react-is/index.js
var require_react_is = __commonJS({
  "node_modules/react-is/index.js"(exports, module2) {
    "use strict";
    init_react_shim();
    if (false) {
      module2.exports = null;
    } else {
      module2.exports = require_react_is_development();
    }
  }
});

// node_modules/object-assign/index.js
var require_object_assign = __commonJS({
  "node_modules/object-assign/index.js"(exports, module2) {
    "use strict";
    init_react_shim();
    var getOwnPropertySymbols = Object.getOwnPropertySymbols;
    var hasOwnProperty = Object.prototype.hasOwnProperty;
    var propIsEnumerable = Object.prototype.propertyIsEnumerable;
    function toObject(val) {
      if (val === null || val === void 0) {
        throw new TypeError("Object.assign cannot be called with null or undefined");
      }
      return Object(val);
    }
    function shouldUseNative() {
      try {
        if (!Object.assign) {
          return false;
        }
        var test1 = new String("abc");
        test1[5] = "de";
        if (Object.getOwnPropertyNames(test1)[0] === "5") {
          return false;
        }
        var test2 = {};
        for (var i = 0; i < 10; i++) {
          test2["_" + String.fromCharCode(i)] = i;
        }
        var order2 = Object.getOwnPropertyNames(test2).map(function(n) {
          return test2[n];
        });
        if (order2.join("") !== "0123456789") {
          return false;
        }
        var test3 = {};
        "abcdefghijklmnopqrst".split("").forEach(function(letter) {
          test3[letter] = letter;
        });
        if (Object.keys(Object.assign({}, test3)).join("") !== "abcdefghijklmnopqrst") {
          return false;
        }
        return true;
      } catch (err) {
        return false;
      }
    }
    module2.exports = shouldUseNative() ? Object.assign : function(target, source) {
      var from;
      var to = toObject(target);
      var symbols;
      for (var s = 1; s < arguments.length; s++) {
        from = Object(arguments[s]);
        for (var key in from) {
          if (hasOwnProperty.call(from, key)) {
            to[key] = from[key];
          }
        }
        if (getOwnPropertySymbols) {
          symbols = getOwnPropertySymbols(from);
          for (var i = 0; i < symbols.length; i++) {
            if (propIsEnumerable.call(from, symbols[i])) {
              to[symbols[i]] = from[symbols[i]];
            }
          }
        }
      }
      return to;
    };
  }
});

// node_modules/prop-types/lib/ReactPropTypesSecret.js
var require_ReactPropTypesSecret = __commonJS({
  "node_modules/prop-types/lib/ReactPropTypesSecret.js"(exports, module2) {
    "use strict";
    init_react_shim();
    var ReactPropTypesSecret = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
    module2.exports = ReactPropTypesSecret;
  }
});

// node_modules/prop-types/lib/has.js
var require_has = __commonJS({
  "node_modules/prop-types/lib/has.js"(exports, module2) {
    init_react_shim();
    module2.exports = Function.call.bind(Object.prototype.hasOwnProperty);
  }
});

// node_modules/prop-types/checkPropTypes.js
var require_checkPropTypes = __commonJS({
  "node_modules/prop-types/checkPropTypes.js"(exports, module2) {
    "use strict";
    init_react_shim();
    var printWarning = function() {
    };
    if (true) {
      ReactPropTypesSecret = require_ReactPropTypesSecret();
      loggedTypeFailures = {};
      has = require_has();
      printWarning = function(text) {
        var message = "Warning: " + text;
        if (typeof console !== "undefined") {
          console.error(message);
        }
        try {
          throw new Error(message);
        } catch (x) {
        }
      };
    }
    var ReactPropTypesSecret;
    var loggedTypeFailures;
    var has;
    function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
      if (true) {
        for (var typeSpecName in typeSpecs) {
          if (has(typeSpecs, typeSpecName)) {
            var error;
            try {
              if (typeof typeSpecs[typeSpecName] !== "function") {
                var err = Error(
                  (componentName || "React class") + ": " + location + " type `" + typeSpecName + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof typeSpecs[typeSpecName] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
                );
                err.name = "Invariant Violation";
                throw err;
              }
              error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret);
            } catch (ex) {
              error = ex;
            }
            if (error && !(error instanceof Error)) {
              printWarning(
                (componentName || "React class") + ": type specification of " + location + " `" + typeSpecName + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof error + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
              );
            }
            if (error instanceof Error && !(error.message in loggedTypeFailures)) {
              loggedTypeFailures[error.message] = true;
              var stack = getStack ? getStack() : "";
              printWarning(
                "Failed " + location + " type: " + error.message + (stack != null ? stack : "")
              );
            }
          }
        }
      }
    }
    checkPropTypes.resetWarningCache = function() {
      if (true) {
        loggedTypeFailures = {};
      }
    };
    module2.exports = checkPropTypes;
  }
});

// node_modules/prop-types/factoryWithTypeCheckers.js
var require_factoryWithTypeCheckers = __commonJS({
  "node_modules/prop-types/factoryWithTypeCheckers.js"(exports, module2) {
    "use strict";
    init_react_shim();
    var ReactIs = require_react_is();
    var assign2 = require_object_assign();
    var ReactPropTypesSecret = require_ReactPropTypesSecret();
    var has = require_has();
    var checkPropTypes = require_checkPropTypes();
    var printWarning = function() {
    };
    if (true) {
      printWarning = function(text) {
        var message = "Warning: " + text;
        if (typeof console !== "undefined") {
          console.error(message);
        }
        try {
          throw new Error(message);
        } catch (x) {
        }
      };
    }
    function emptyFunctionThatReturnsNull() {
      return null;
    }
    module2.exports = function(isValidElement, throwOnDirectAccess) {
      var ITERATOR_SYMBOL = typeof Symbol === "function" && Symbol.iterator;
      var FAUX_ITERATOR_SYMBOL = "@@iterator";
      function getIteratorFn(maybeIterable) {
        var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
        if (typeof iteratorFn === "function") {
          return iteratorFn;
        }
      }
      var ANONYMOUS = "<<anonymous>>";
      var ReactPropTypes = {
        array: createPrimitiveTypeChecker("array"),
        bigint: createPrimitiveTypeChecker("bigint"),
        bool: createPrimitiveTypeChecker("boolean"),
        func: createPrimitiveTypeChecker("function"),
        number: createPrimitiveTypeChecker("number"),
        object: createPrimitiveTypeChecker("object"),
        string: createPrimitiveTypeChecker("string"),
        symbol: createPrimitiveTypeChecker("symbol"),
        any: createAnyTypeChecker(),
        arrayOf: createArrayOfTypeChecker,
        element: createElementTypeChecker(),
        elementType: createElementTypeTypeChecker(),
        instanceOf: createInstanceTypeChecker,
        node: createNodeChecker(),
        objectOf: createObjectOfTypeChecker,
        oneOf: createEnumTypeChecker,
        oneOfType: createUnionTypeChecker,
        shape: createShapeTypeChecker,
        exact: createStrictShapeTypeChecker
      };
      function is(x, y) {
        if (x === y) {
          return x !== 0 || 1 / x === 1 / y;
        } else {
          return x !== x && y !== y;
        }
      }
      function PropTypeError(message, data) {
        this.message = message;
        this.data = data && typeof data === "object" ? data : {};
        this.stack = "";
      }
      PropTypeError.prototype = Error.prototype;
      function createChainableTypeChecker(validate2) {
        if (true) {
          var manualPropTypeCallCache = {};
          var manualPropTypeWarningCount = 0;
        }
        function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
          componentName = componentName || ANONYMOUS;
          propFullName = propFullName || propName;
          if (secret !== ReactPropTypesSecret) {
            if (throwOnDirectAccess) {
              var err = new Error(
                "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
              );
              err.name = "Invariant Violation";
              throw err;
            } else if (typeof console !== "undefined") {
              var cacheKey = componentName + ":" + propName;
              if (!manualPropTypeCallCache[cacheKey] && manualPropTypeWarningCount < 3) {
                printWarning(
                  "You are manually calling a React.PropTypes validation function for the `" + propFullName + "` prop on `" + componentName + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
                );
                manualPropTypeCallCache[cacheKey] = true;
                manualPropTypeWarningCount++;
              }
            }
          }
          if (props[propName] == null) {
            if (isRequired) {
              if (props[propName] === null) {
                return new PropTypeError("The " + location + " `" + propFullName + "` is marked as required " + ("in `" + componentName + "`, but its value is `null`."));
              }
              return new PropTypeError("The " + location + " `" + propFullName + "` is marked as required in " + ("`" + componentName + "`, but its value is `undefined`."));
            }
            return null;
          } else {
            return validate2(props, propName, componentName, location, propFullName);
          }
        }
        var chainedCheckType = checkType.bind(null, false);
        chainedCheckType.isRequired = checkType.bind(null, true);
        return chainedCheckType;
      }
      function createPrimitiveTypeChecker(expectedType) {
        function validate2(props, propName, componentName, location, propFullName, secret) {
          var propValue = props[propName];
          var propType2 = getPropType(propValue);
          if (propType2 !== expectedType) {
            var preciseType = getPreciseType(propValue);
            return new PropTypeError(
              "Invalid " + location + " `" + propFullName + "` of type " + ("`" + preciseType + "` supplied to `" + componentName + "`, expected ") + ("`" + expectedType + "`."),
              { expectedType }
            );
          }
          return null;
        }
        return createChainableTypeChecker(validate2);
      }
      function createAnyTypeChecker() {
        return createChainableTypeChecker(emptyFunctionThatReturnsNull);
      }
      function createArrayOfTypeChecker(typeChecker) {
        function validate2(props, propName, componentName, location, propFullName) {
          if (typeof typeChecker !== "function") {
            return new PropTypeError("Property `" + propFullName + "` of component `" + componentName + "` has invalid PropType notation inside arrayOf.");
          }
          var propValue = props[propName];
          if (!Array.isArray(propValue)) {
            var propType2 = getPropType(propValue);
            return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type " + ("`" + propType2 + "` supplied to `" + componentName + "`, expected an array."));
          }
          for (var i = 0; i < propValue.length; i++) {
            var error = typeChecker(propValue, i, componentName, location, propFullName + "[" + i + "]", ReactPropTypesSecret);
            if (error instanceof Error) {
              return error;
            }
          }
          return null;
        }
        return createChainableTypeChecker(validate2);
      }
      function createElementTypeChecker() {
        function validate2(props, propName, componentName, location, propFullName) {
          var propValue = props[propName];
          if (!isValidElement(propValue)) {
            var propType2 = getPropType(propValue);
            return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type " + ("`" + propType2 + "` supplied to `" + componentName + "`, expected a single ReactElement."));
          }
          return null;
        }
        return createChainableTypeChecker(validate2);
      }
      function createElementTypeTypeChecker() {
        function validate2(props, propName, componentName, location, propFullName) {
          var propValue = props[propName];
          if (!ReactIs.isValidElementType(propValue)) {
            var propType2 = getPropType(propValue);
            return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type " + ("`" + propType2 + "` supplied to `" + componentName + "`, expected a single ReactElement type."));
          }
          return null;
        }
        return createChainableTypeChecker(validate2);
      }
      function createInstanceTypeChecker(expectedClass) {
        function validate2(props, propName, componentName, location, propFullName) {
          if (!(props[propName] instanceof expectedClass)) {
            var expectedClassName = expectedClass.name || ANONYMOUS;
            var actualClassName = getClassName(props[propName]);
            return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type " + ("`" + actualClassName + "` supplied to `" + componentName + "`, expected ") + ("instance of `" + expectedClassName + "`."));
          }
          return null;
        }
        return createChainableTypeChecker(validate2);
      }
      function createEnumTypeChecker(expectedValues) {
        if (!Array.isArray(expectedValues)) {
          if (true) {
            if (arguments.length > 1) {
              printWarning(
                "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
              );
            } else {
              printWarning("Invalid argument supplied to oneOf, expected an array.");
            }
          }
          return emptyFunctionThatReturnsNull;
        }
        function validate2(props, propName, componentName, location, propFullName) {
          var propValue = props[propName];
          for (var i = 0; i < expectedValues.length; i++) {
            if (is(propValue, expectedValues[i])) {
              return null;
            }
          }
          var valuesString = JSON.stringify(expectedValues, function replacer(key, value) {
            var type = getPreciseType(value);
            if (type === "symbol") {
              return String(value);
            }
            return value;
          });
          return new PropTypeError("Invalid " + location + " `" + propFullName + "` of value `" + String(propValue) + "` " + ("supplied to `" + componentName + "`, expected one of " + valuesString + "."));
        }
        return createChainableTypeChecker(validate2);
      }
      function createObjectOfTypeChecker(typeChecker) {
        function validate2(props, propName, componentName, location, propFullName) {
          if (typeof typeChecker !== "function") {
            return new PropTypeError("Property `" + propFullName + "` of component `" + componentName + "` has invalid PropType notation inside objectOf.");
          }
          var propValue = props[propName];
          var propType2 = getPropType(propValue);
          if (propType2 !== "object") {
            return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type " + ("`" + propType2 + "` supplied to `" + componentName + "`, expected an object."));
          }
          for (var key in propValue) {
            if (has(propValue, key)) {
              var error = typeChecker(propValue, key, componentName, location, propFullName + "." + key, ReactPropTypesSecret);
              if (error instanceof Error) {
                return error;
              }
            }
          }
          return null;
        }
        return createChainableTypeChecker(validate2);
      }
      function createUnionTypeChecker(arrayOfTypeCheckers) {
        if (!Array.isArray(arrayOfTypeCheckers)) {
          true ? printWarning("Invalid argument supplied to oneOfType, expected an instance of array.") : void 0;
          return emptyFunctionThatReturnsNull;
        }
        for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
          var checker = arrayOfTypeCheckers[i];
          if (typeof checker !== "function") {
            printWarning(
              "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + getPostfixForTypeWarning(checker) + " at index " + i + "."
            );
            return emptyFunctionThatReturnsNull;
          }
        }
        function validate2(props, propName, componentName, location, propFullName) {
          var expectedTypes = [];
          for (var i2 = 0; i2 < arrayOfTypeCheckers.length; i2++) {
            var checker2 = arrayOfTypeCheckers[i2];
            var checkerResult = checker2(props, propName, componentName, location, propFullName, ReactPropTypesSecret);
            if (checkerResult == null) {
              return null;
            }
            if (checkerResult.data && has(checkerResult.data, "expectedType")) {
              expectedTypes.push(checkerResult.data.expectedType);
            }
          }
          var expectedTypesMessage = expectedTypes.length > 0 ? ", expected one of type [" + expectedTypes.join(", ") + "]" : "";
          return new PropTypeError("Invalid " + location + " `" + propFullName + "` supplied to " + ("`" + componentName + "`" + expectedTypesMessage + "."));
        }
        return createChainableTypeChecker(validate2);
      }
      function createNodeChecker() {
        function validate2(props, propName, componentName, location, propFullName) {
          if (!isNode(props[propName])) {
            return new PropTypeError("Invalid " + location + " `" + propFullName + "` supplied to " + ("`" + componentName + "`, expected a ReactNode."));
          }
          return null;
        }
        return createChainableTypeChecker(validate2);
      }
      function invalidValidatorError(componentName, location, propFullName, key, type) {
        return new PropTypeError(
          (componentName || "React class") + ": " + location + " type `" + propFullName + "." + key + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + type + "`."
        );
      }
      function createShapeTypeChecker(shapeTypes) {
        function validate2(props, propName, componentName, location, propFullName) {
          var propValue = props[propName];
          var propType2 = getPropType(propValue);
          if (propType2 !== "object") {
            return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type `" + propType2 + "` " + ("supplied to `" + componentName + "`, expected `object`."));
          }
          for (var key in shapeTypes) {
            var checker = shapeTypes[key];
            if (typeof checker !== "function") {
              return invalidValidatorError(componentName, location, propFullName, key, getPreciseType(checker));
            }
            var error = checker(propValue, key, componentName, location, propFullName + "." + key, ReactPropTypesSecret);
            if (error) {
              return error;
            }
          }
          return null;
        }
        return createChainableTypeChecker(validate2);
      }
      function createStrictShapeTypeChecker(shapeTypes) {
        function validate2(props, propName, componentName, location, propFullName) {
          var propValue = props[propName];
          var propType2 = getPropType(propValue);
          if (propType2 !== "object") {
            return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type `" + propType2 + "` " + ("supplied to `" + componentName + "`, expected `object`."));
          }
          var allKeys = assign2({}, props[propName], shapeTypes);
          for (var key in allKeys) {
            var checker = shapeTypes[key];
            if (has(shapeTypes, key) && typeof checker !== "function") {
              return invalidValidatorError(componentName, location, propFullName, key, getPreciseType(checker));
            }
            if (!checker) {
              return new PropTypeError(
                "Invalid " + location + " `" + propFullName + "` key `" + key + "` supplied to `" + componentName + "`.\nBad object: " + JSON.stringify(props[propName], null, "  ") + "\nValid keys: " + JSON.stringify(Object.keys(shapeTypes), null, "  ")
              );
            }
            var error = checker(propValue, key, componentName, location, propFullName + "." + key, ReactPropTypesSecret);
            if (error) {
              return error;
            }
          }
          return null;
        }
        return createChainableTypeChecker(validate2);
      }
      function isNode(propValue) {
        switch (typeof propValue) {
          case "number":
          case "string":
          case "undefined":
            return true;
          case "boolean":
            return !propValue;
          case "object":
            if (Array.isArray(propValue)) {
              return propValue.every(isNode);
            }
            if (propValue === null || isValidElement(propValue)) {
              return true;
            }
            var iteratorFn = getIteratorFn(propValue);
            if (iteratorFn) {
              var iterator = iteratorFn.call(propValue);
              var step;
              if (iteratorFn !== propValue.entries) {
                while (!(step = iterator.next()).done) {
                  if (!isNode(step.value)) {
                    return false;
                  }
                }
              } else {
                while (!(step = iterator.next()).done) {
                  var entry = step.value;
                  if (entry) {
                    if (!isNode(entry[1])) {
                      return false;
                    }
                  }
                }
              }
            } else {
              return false;
            }
            return true;
          default:
            return false;
        }
      }
      function isSymbol(propType2, propValue) {
        if (propType2 === "symbol") {
          return true;
        }
        if (!propValue) {
          return false;
        }
        if (propValue["@@toStringTag"] === "Symbol") {
          return true;
        }
        if (typeof Symbol === "function" && propValue instanceof Symbol) {
          return true;
        }
        return false;
      }
      function getPropType(propValue) {
        var propType2 = typeof propValue;
        if (Array.isArray(propValue)) {
          return "array";
        }
        if (propValue instanceof RegExp) {
          return "object";
        }
        if (isSymbol(propType2, propValue)) {
          return "symbol";
        }
        return propType2;
      }
      function getPreciseType(propValue) {
        if (typeof propValue === "undefined" || propValue === null) {
          return "" + propValue;
        }
        var propType2 = getPropType(propValue);
        if (propType2 === "object") {
          if (propValue instanceof Date) {
            return "date";
          } else if (propValue instanceof RegExp) {
            return "regexp";
          }
        }
        return propType2;
      }
      function getPostfixForTypeWarning(value) {
        var type = getPreciseType(value);
        switch (type) {
          case "array":
          case "object":
            return "an " + type;
          case "boolean":
          case "date":
          case "regexp":
            return "a " + type;
          default:
            return type;
        }
      }
      function getClassName(propValue) {
        if (!propValue.constructor || !propValue.constructor.name) {
          return ANONYMOUS;
        }
        return propValue.constructor.name;
      }
      ReactPropTypes.checkPropTypes = checkPropTypes;
      ReactPropTypes.resetWarningCache = checkPropTypes.resetWarningCache;
      ReactPropTypes.PropTypes = ReactPropTypes;
      return ReactPropTypes;
    };
  }
});

// node_modules/prop-types/index.js
var require_prop_types = __commonJS({
  "node_modules/prop-types/index.js"(exports, module2) {
    init_react_shim();
    if (true) {
      ReactIs = require_react_is();
      throwOnDirectAccess = true;
      module2.exports = require_factoryWithTypeCheckers()(ReactIs.isElement, throwOnDirectAccess);
    } else {
      module2.exports = null();
    }
    var ReactIs;
    var throwOnDirectAccess;
  }
});

// node_modules/lodash/lodash.js
var require_lodash = __commonJS({
  "node_modules/lodash/lodash.js"(exports, module2) {
    init_react_shim();
    (function() {
      var undefined2;
      var VERSION = "4.17.21";
      var LARGE_ARRAY_SIZE = 200;
      var CORE_ERROR_TEXT = "Unsupported core-js use. Try https://npms.io/search?q=ponyfill.", FUNC_ERROR_TEXT = "Expected a function", INVALID_TEMPL_VAR_ERROR_TEXT = "Invalid `variable` option passed into `_.template`";
      var HASH_UNDEFINED = "__lodash_hash_undefined__";
      var MAX_MEMOIZE_SIZE = 500;
      var PLACEHOLDER = "__lodash_placeholder__";
      var CLONE_DEEP_FLAG = 1, CLONE_FLAT_FLAG = 2, CLONE_SYMBOLS_FLAG = 4;
      var COMPARE_PARTIAL_FLAG = 1, COMPARE_UNORDERED_FLAG = 2;
      var WRAP_BIND_FLAG = 1, WRAP_BIND_KEY_FLAG = 2, WRAP_CURRY_BOUND_FLAG = 4, WRAP_CURRY_FLAG = 8, WRAP_CURRY_RIGHT_FLAG = 16, WRAP_PARTIAL_FLAG = 32, WRAP_PARTIAL_RIGHT_FLAG = 64, WRAP_ARY_FLAG = 128, WRAP_REARG_FLAG = 256, WRAP_FLIP_FLAG = 512;
      var DEFAULT_TRUNC_LENGTH = 30, DEFAULT_TRUNC_OMISSION = "...";
      var HOT_COUNT = 800, HOT_SPAN = 16;
      var LAZY_FILTER_FLAG = 1, LAZY_MAP_FLAG = 2, LAZY_WHILE_FLAG = 3;
      var INFINITY = 1 / 0, MAX_SAFE_INTEGER = 9007199254740991, MAX_INTEGER = 17976931348623157e292, NAN = 0 / 0;
      var MAX_ARRAY_LENGTH = 4294967295, MAX_ARRAY_INDEX = MAX_ARRAY_LENGTH - 1, HALF_MAX_ARRAY_LENGTH = MAX_ARRAY_LENGTH >>> 1;
      var wrapFlags = [
        ["ary", WRAP_ARY_FLAG],
        ["bind", WRAP_BIND_FLAG],
        ["bindKey", WRAP_BIND_KEY_FLAG],
        ["curry", WRAP_CURRY_FLAG],
        ["curryRight", WRAP_CURRY_RIGHT_FLAG],
        ["flip", WRAP_FLIP_FLAG],
        ["partial", WRAP_PARTIAL_FLAG],
        ["partialRight", WRAP_PARTIAL_RIGHT_FLAG],
        ["rearg", WRAP_REARG_FLAG]
      ];
      var argsTag = "[object Arguments]", arrayTag = "[object Array]", asyncTag = "[object AsyncFunction]", boolTag = "[object Boolean]", dateTag = "[object Date]", domExcTag = "[object DOMException]", errorTag = "[object Error]", funcTag = "[object Function]", genTag = "[object GeneratorFunction]", mapTag = "[object Map]", numberTag = "[object Number]", nullTag = "[object Null]", objectTag = "[object Object]", promiseTag = "[object Promise]", proxyTag = "[object Proxy]", regexpTag = "[object RegExp]", setTag = "[object Set]", stringTag = "[object String]", symbolTag = "[object Symbol]", undefinedTag = "[object Undefined]", weakMapTag = "[object WeakMap]", weakSetTag = "[object WeakSet]";
      var arrayBufferTag = "[object ArrayBuffer]", dataViewTag = "[object DataView]", float32Tag = "[object Float32Array]", float64Tag = "[object Float64Array]", int8Tag = "[object Int8Array]", int16Tag = "[object Int16Array]", int32Tag = "[object Int32Array]", uint8Tag = "[object Uint8Array]", uint8ClampedTag = "[object Uint8ClampedArray]", uint16Tag = "[object Uint16Array]", uint32Tag = "[object Uint32Array]";
      var reEmptyStringLeading = /\b__p \+= '';/g, reEmptyStringMiddle = /\b(__p \+=) '' \+/g, reEmptyStringTrailing = /(__e\(.*?\)|\b__t\)) \+\n'';/g;
      var reEscapedHtml = /&(?:amp|lt|gt|quot|#39);/g, reUnescapedHtml = /[&<>"']/g, reHasEscapedHtml = RegExp(reEscapedHtml.source), reHasUnescapedHtml = RegExp(reUnescapedHtml.source);
      var reEscape = /<%-([\s\S]+?)%>/g, reEvaluate = /<%([\s\S]+?)%>/g, reInterpolate = /<%=([\s\S]+?)%>/g;
      var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, reIsPlainProp = /^\w*$/, rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;
      var reRegExpChar = /[\\^$.*+?()[\]{}|]/g, reHasRegExpChar = RegExp(reRegExpChar.source);
      var reTrimStart = /^\s+/;
      var reWhitespace = /\s/;
      var reWrapComment = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/, reWrapDetails = /\{\n\/\* \[wrapped with (.+)\] \*/, reSplitDetails = /,? & /;
      var reAsciiWord = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;
      var reForbiddenIdentifierChars = /[()=,{}\[\]\/\s]/;
      var reEscapeChar = /\\(\\)?/g;
      var reEsTemplate = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g;
      var reFlags = /\w*$/;
      var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;
      var reIsBinary = /^0b[01]+$/i;
      var reIsHostCtor = /^\[object .+?Constructor\]$/;
      var reIsOctal = /^0o[0-7]+$/i;
      var reIsUint = /^(?:0|[1-9]\d*)$/;
      var reLatin = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g;
      var reNoMatch = /($^)/;
      var reUnescapedString = /['\n\r\u2028\u2029\\]/g;
      var rsAstralRange = "\\ud800-\\udfff", rsComboMarksRange = "\\u0300-\\u036f", reComboHalfMarksRange = "\\ufe20-\\ufe2f", rsComboSymbolsRange = "\\u20d0-\\u20ff", rsComboRange = rsComboMarksRange + reComboHalfMarksRange + rsComboSymbolsRange, rsDingbatRange = "\\u2700-\\u27bf", rsLowerRange = "a-z\\xdf-\\xf6\\xf8-\\xff", rsMathOpRange = "\\xac\\xb1\\xd7\\xf7", rsNonCharRange = "\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf", rsPunctuationRange = "\\u2000-\\u206f", rsSpaceRange = " \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000", rsUpperRange = "A-Z\\xc0-\\xd6\\xd8-\\xde", rsVarRange = "\\ufe0e\\ufe0f", rsBreakRange = rsMathOpRange + rsNonCharRange + rsPunctuationRange + rsSpaceRange;
      var rsApos = "['\u2019]", rsAstral = "[" + rsAstralRange + "]", rsBreak = "[" + rsBreakRange + "]", rsCombo = "[" + rsComboRange + "]", rsDigits = "\\d+", rsDingbat = "[" + rsDingbatRange + "]", rsLower = "[" + rsLowerRange + "]", rsMisc = "[^" + rsAstralRange + rsBreakRange + rsDigits + rsDingbatRange + rsLowerRange + rsUpperRange + "]", rsFitz = "\\ud83c[\\udffb-\\udfff]", rsModifier = "(?:" + rsCombo + "|" + rsFitz + ")", rsNonAstral = "[^" + rsAstralRange + "]", rsRegional = "(?:\\ud83c[\\udde6-\\uddff]){2}", rsSurrPair = "[\\ud800-\\udbff][\\udc00-\\udfff]", rsUpper = "[" + rsUpperRange + "]", rsZWJ = "\\u200d";
      var rsMiscLower = "(?:" + rsLower + "|" + rsMisc + ")", rsMiscUpper = "(?:" + rsUpper + "|" + rsMisc + ")", rsOptContrLower = "(?:" + rsApos + "(?:d|ll|m|re|s|t|ve))?", rsOptContrUpper = "(?:" + rsApos + "(?:D|LL|M|RE|S|T|VE))?", reOptMod = rsModifier + "?", rsOptVar = "[" + rsVarRange + "]?", rsOptJoin = "(?:" + rsZWJ + "(?:" + [rsNonAstral, rsRegional, rsSurrPair].join("|") + ")" + rsOptVar + reOptMod + ")*", rsOrdLower = "\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])", rsOrdUpper = "\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])", rsSeq = rsOptVar + reOptMod + rsOptJoin, rsEmoji = "(?:" + [rsDingbat, rsRegional, rsSurrPair].join("|") + ")" + rsSeq, rsSymbol = "(?:" + [rsNonAstral + rsCombo + "?", rsCombo, rsRegional, rsSurrPair, rsAstral].join("|") + ")";
      var reApos = RegExp(rsApos, "g");
      var reComboMark = RegExp(rsCombo, "g");
      var reUnicode = RegExp(rsFitz + "(?=" + rsFitz + ")|" + rsSymbol + rsSeq, "g");
      var reUnicodeWord = RegExp([
        rsUpper + "?" + rsLower + "+" + rsOptContrLower + "(?=" + [rsBreak, rsUpper, "$"].join("|") + ")",
        rsMiscUpper + "+" + rsOptContrUpper + "(?=" + [rsBreak, rsUpper + rsMiscLower, "$"].join("|") + ")",
        rsUpper + "?" + rsMiscLower + "+" + rsOptContrLower,
        rsUpper + "+" + rsOptContrUpper,
        rsOrdUpper,
        rsOrdLower,
        rsDigits,
        rsEmoji
      ].join("|"), "g");
      var reHasUnicode = RegExp("[" + rsZWJ + rsAstralRange + rsComboRange + rsVarRange + "]");
      var reHasUnicodeWord = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;
      var contextProps = [
        "Array",
        "Buffer",
        "DataView",
        "Date",
        "Error",
        "Float32Array",
        "Float64Array",
        "Function",
        "Int8Array",
        "Int16Array",
        "Int32Array",
        "Map",
        "Math",
        "Object",
        "Promise",
        "RegExp",
        "Set",
        "String",
        "Symbol",
        "TypeError",
        "Uint8Array",
        "Uint8ClampedArray",
        "Uint16Array",
        "Uint32Array",
        "WeakMap",
        "_",
        "clearTimeout",
        "isFinite",
        "parseInt",
        "setTimeout"
      ];
      var templateCounter = -1;
      var typedArrayTags = {};
      typedArrayTags[float32Tag] = typedArrayTags[float64Tag] = typedArrayTags[int8Tag] = typedArrayTags[int16Tag] = typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] = typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] = typedArrayTags[uint32Tag] = true;
      typedArrayTags[argsTag] = typedArrayTags[arrayTag] = typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] = typedArrayTags[dataViewTag] = typedArrayTags[dateTag] = typedArrayTags[errorTag] = typedArrayTags[funcTag] = typedArrayTags[mapTag] = typedArrayTags[numberTag] = typedArrayTags[objectTag] = typedArrayTags[regexpTag] = typedArrayTags[setTag] = typedArrayTags[stringTag] = typedArrayTags[weakMapTag] = false;
      var cloneableTags = {};
      cloneableTags[argsTag] = cloneableTags[arrayTag] = cloneableTags[arrayBufferTag] = cloneableTags[dataViewTag] = cloneableTags[boolTag] = cloneableTags[dateTag] = cloneableTags[float32Tag] = cloneableTags[float64Tag] = cloneableTags[int8Tag] = cloneableTags[int16Tag] = cloneableTags[int32Tag] = cloneableTags[mapTag] = cloneableTags[numberTag] = cloneableTags[objectTag] = cloneableTags[regexpTag] = cloneableTags[setTag] = cloneableTags[stringTag] = cloneableTags[symbolTag] = cloneableTags[uint8Tag] = cloneableTags[uint8ClampedTag] = cloneableTags[uint16Tag] = cloneableTags[uint32Tag] = true;
      cloneableTags[errorTag] = cloneableTags[funcTag] = cloneableTags[weakMapTag] = false;
      var deburredLetters = {
        "\xC0": "A",
        "\xC1": "A",
        "\xC2": "A",
        "\xC3": "A",
        "\xC4": "A",
        "\xC5": "A",
        "\xE0": "a",
        "\xE1": "a",
        "\xE2": "a",
        "\xE3": "a",
        "\xE4": "a",
        "\xE5": "a",
        "\xC7": "C",
        "\xE7": "c",
        "\xD0": "D",
        "\xF0": "d",
        "\xC8": "E",
        "\xC9": "E",
        "\xCA": "E",
        "\xCB": "E",
        "\xE8": "e",
        "\xE9": "e",
        "\xEA": "e",
        "\xEB": "e",
        "\xCC": "I",
        "\xCD": "I",
        "\xCE": "I",
        "\xCF": "I",
        "\xEC": "i",
        "\xED": "i",
        "\xEE": "i",
        "\xEF": "i",
        "\xD1": "N",
        "\xF1": "n",
        "\xD2": "O",
        "\xD3": "O",
        "\xD4": "O",
        "\xD5": "O",
        "\xD6": "O",
        "\xD8": "O",
        "\xF2": "o",
        "\xF3": "o",
        "\xF4": "o",
        "\xF5": "o",
        "\xF6": "o",
        "\xF8": "o",
        "\xD9": "U",
        "\xDA": "U",
        "\xDB": "U",
        "\xDC": "U",
        "\xF9": "u",
        "\xFA": "u",
        "\xFB": "u",
        "\xFC": "u",
        "\xDD": "Y",
        "\xFD": "y",
        "\xFF": "y",
        "\xC6": "Ae",
        "\xE6": "ae",
        "\xDE": "Th",
        "\xFE": "th",
        "\xDF": "ss",
        "\u0100": "A",
        "\u0102": "A",
        "\u0104": "A",
        "\u0101": "a",
        "\u0103": "a",
        "\u0105": "a",
        "\u0106": "C",
        "\u0108": "C",
        "\u010A": "C",
        "\u010C": "C",
        "\u0107": "c",
        "\u0109": "c",
        "\u010B": "c",
        "\u010D": "c",
        "\u010E": "D",
        "\u0110": "D",
        "\u010F": "d",
        "\u0111": "d",
        "\u0112": "E",
        "\u0114": "E",
        "\u0116": "E",
        "\u0118": "E",
        "\u011A": "E",
        "\u0113": "e",
        "\u0115": "e",
        "\u0117": "e",
        "\u0119": "e",
        "\u011B": "e",
        "\u011C": "G",
        "\u011E": "G",
        "\u0120": "G",
        "\u0122": "G",
        "\u011D": "g",
        "\u011F": "g",
        "\u0121": "g",
        "\u0123": "g",
        "\u0124": "H",
        "\u0126": "H",
        "\u0125": "h",
        "\u0127": "h",
        "\u0128": "I",
        "\u012A": "I",
        "\u012C": "I",
        "\u012E": "I",
        "\u0130": "I",
        "\u0129": "i",
        "\u012B": "i",
        "\u012D": "i",
        "\u012F": "i",
        "\u0131": "i",
        "\u0134": "J",
        "\u0135": "j",
        "\u0136": "K",
        "\u0137": "k",
        "\u0138": "k",
        "\u0139": "L",
        "\u013B": "L",
        "\u013D": "L",
        "\u013F": "L",
        "\u0141": "L",
        "\u013A": "l",
        "\u013C": "l",
        "\u013E": "l",
        "\u0140": "l",
        "\u0142": "l",
        "\u0143": "N",
        "\u0145": "N",
        "\u0147": "N",
        "\u014A": "N",
        "\u0144": "n",
        "\u0146": "n",
        "\u0148": "n",
        "\u014B": "n",
        "\u014C": "O",
        "\u014E": "O",
        "\u0150": "O",
        "\u014D": "o",
        "\u014F": "o",
        "\u0151": "o",
        "\u0154": "R",
        "\u0156": "R",
        "\u0158": "R",
        "\u0155": "r",
        "\u0157": "r",
        "\u0159": "r",
        "\u015A": "S",
        "\u015C": "S",
        "\u015E": "S",
        "\u0160": "S",
        "\u015B": "s",
        "\u015D": "s",
        "\u015F": "s",
        "\u0161": "s",
        "\u0162": "T",
        "\u0164": "T",
        "\u0166": "T",
        "\u0163": "t",
        "\u0165": "t",
        "\u0167": "t",
        "\u0168": "U",
        "\u016A": "U",
        "\u016C": "U",
        "\u016E": "U",
        "\u0170": "U",
        "\u0172": "U",
        "\u0169": "u",
        "\u016B": "u",
        "\u016D": "u",
        "\u016F": "u",
        "\u0171": "u",
        "\u0173": "u",
        "\u0174": "W",
        "\u0175": "w",
        "\u0176": "Y",
        "\u0177": "y",
        "\u0178": "Y",
        "\u0179": "Z",
        "\u017B": "Z",
        "\u017D": "Z",
        "\u017A": "z",
        "\u017C": "z",
        "\u017E": "z",
        "\u0132": "IJ",
        "\u0133": "ij",
        "\u0152": "Oe",
        "\u0153": "oe",
        "\u0149": "'n",
        "\u017F": "s"
      };
      var htmlEscapes = {
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#39;"
      };
      var htmlUnescapes = {
        "&amp;": "&",
        "&lt;": "<",
        "&gt;": ">",
        "&quot;": '"',
        "&#39;": "'"
      };
      var stringEscapes = {
        "\\": "\\",
        "'": "'",
        "\n": "n",
        "\r": "r",
        "\u2028": "u2028",
        "\u2029": "u2029"
      };
      var freeParseFloat = parseFloat, freeParseInt = parseInt;
      var freeGlobal = typeof global == "object" && global && global.Object === Object && global;
      var freeSelf = typeof self == "object" && self && self.Object === Object && self;
      var root = freeGlobal || freeSelf || Function("return this")();
      var freeExports = typeof exports == "object" && exports && !exports.nodeType && exports;
      var freeModule = freeExports && typeof module2 == "object" && module2 && !module2.nodeType && module2;
      var moduleExports = freeModule && freeModule.exports === freeExports;
      var freeProcess = moduleExports && freeGlobal.process;
      var nodeUtil = function() {
        try {
          var types = freeModule && freeModule.require && freeModule.require("util").types;
          if (types) {
            return types;
          }
          return freeProcess && freeProcess.binding && freeProcess.binding("util");
        } catch (e) {
        }
      }();
      var nodeIsArrayBuffer = nodeUtil && nodeUtil.isArrayBuffer, nodeIsDate = nodeUtil && nodeUtil.isDate, nodeIsMap = nodeUtil && nodeUtil.isMap, nodeIsRegExp = nodeUtil && nodeUtil.isRegExp, nodeIsSet = nodeUtil && nodeUtil.isSet, nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;
      function apply(func, thisArg, args) {
        switch (args.length) {
          case 0:
            return func.call(thisArg);
          case 1:
            return func.call(thisArg, args[0]);
          case 2:
            return func.call(thisArg, args[0], args[1]);
          case 3:
            return func.call(thisArg, args[0], args[1], args[2]);
        }
        return func.apply(thisArg, args);
      }
      function arrayAggregator(array2, setter, iteratee, accumulator) {
        var index = -1, length = array2 == null ? 0 : array2.length;
        while (++index < length) {
          var value = array2[index];
          setter(accumulator, value, iteratee(value), array2);
        }
        return accumulator;
      }
      function arrayEach(array2, iteratee) {
        var index = -1, length = array2 == null ? 0 : array2.length;
        while (++index < length) {
          if (iteratee(array2[index], index, array2) === false) {
            break;
          }
        }
        return array2;
      }
      function arrayEachRight(array2, iteratee) {
        var length = array2 == null ? 0 : array2.length;
        while (length--) {
          if (iteratee(array2[length], length, array2) === false) {
            break;
          }
        }
        return array2;
      }
      function arrayEvery(array2, predicate) {
        var index = -1, length = array2 == null ? 0 : array2.length;
        while (++index < length) {
          if (!predicate(array2[index], index, array2)) {
            return false;
          }
        }
        return true;
      }
      function arrayFilter(array2, predicate) {
        var index = -1, length = array2 == null ? 0 : array2.length, resIndex = 0, result = [];
        while (++index < length) {
          var value = array2[index];
          if (predicate(value, index, array2)) {
            result[resIndex++] = value;
          }
        }
        return result;
      }
      function arrayIncludes(array2, value) {
        var length = array2 == null ? 0 : array2.length;
        return !!length && baseIndexOf(array2, value, 0) > -1;
      }
      function arrayIncludesWith(array2, value, comparator) {
        var index = -1, length = array2 == null ? 0 : array2.length;
        while (++index < length) {
          if (comparator(value, array2[index])) {
            return true;
          }
        }
        return false;
      }
      function arrayMap(array2, iteratee) {
        var index = -1, length = array2 == null ? 0 : array2.length, result = Array(length);
        while (++index < length) {
          result[index] = iteratee(array2[index], index, array2);
        }
        return result;
      }
      function arrayPush(array2, values) {
        var index = -1, length = values.length, offset = array2.length;
        while (++index < length) {
          array2[offset + index] = values[index];
        }
        return array2;
      }
      function arrayReduce(array2, iteratee, accumulator, initAccum) {
        var index = -1, length = array2 == null ? 0 : array2.length;
        if (initAccum && length) {
          accumulator = array2[++index];
        }
        while (++index < length) {
          accumulator = iteratee(accumulator, array2[index], index, array2);
        }
        return accumulator;
      }
      function arrayReduceRight(array2, iteratee, accumulator, initAccum) {
        var length = array2 == null ? 0 : array2.length;
        if (initAccum && length) {
          accumulator = array2[--length];
        }
        while (length--) {
          accumulator = iteratee(accumulator, array2[length], length, array2);
        }
        return accumulator;
      }
      function arraySome(array2, predicate) {
        var index = -1, length = array2 == null ? 0 : array2.length;
        while (++index < length) {
          if (predicate(array2[index], index, array2)) {
            return true;
          }
        }
        return false;
      }
      var asciiSize = baseProperty("length");
      function asciiToArray(string2) {
        return string2.split("");
      }
      function asciiWords(string2) {
        return string2.match(reAsciiWord) || [];
      }
      function baseFindKey(collection, predicate, eachFunc) {
        var result;
        eachFunc(collection, function(value, key, collection2) {
          if (predicate(value, key, collection2)) {
            result = key;
            return false;
          }
        });
        return result;
      }
      function baseFindIndex(array2, predicate, fromIndex, fromRight) {
        var length = array2.length, index = fromIndex + (fromRight ? 1 : -1);
        while (fromRight ? index-- : ++index < length) {
          if (predicate(array2[index], index, array2)) {
            return index;
          }
        }
        return -1;
      }
      function baseIndexOf(array2, value, fromIndex) {
        return value === value ? strictIndexOf(array2, value, fromIndex) : baseFindIndex(array2, baseIsNaN, fromIndex);
      }
      function baseIndexOfWith(array2, value, fromIndex, comparator) {
        var index = fromIndex - 1, length = array2.length;
        while (++index < length) {
          if (comparator(array2[index], value)) {
            return index;
          }
        }
        return -1;
      }
      function baseIsNaN(value) {
        return value !== value;
      }
      function baseMean(array2, iteratee) {
        var length = array2 == null ? 0 : array2.length;
        return length ? baseSum(array2, iteratee) / length : NAN;
      }
      function baseProperty(key) {
        return function(object2) {
          return object2 == null ? undefined2 : object2[key];
        };
      }
      function basePropertyOf(object2) {
        return function(key) {
          return object2 == null ? undefined2 : object2[key];
        };
      }
      function baseReduce(collection, iteratee, accumulator, initAccum, eachFunc) {
        eachFunc(collection, function(value, index, collection2) {
          accumulator = initAccum ? (initAccum = false, value) : iteratee(accumulator, value, index, collection2);
        });
        return accumulator;
      }
      function baseSortBy(array2, comparer) {
        var length = array2.length;
        array2.sort(comparer);
        while (length--) {
          array2[length] = array2[length].value;
        }
        return array2;
      }
      function baseSum(array2, iteratee) {
        var result, index = -1, length = array2.length;
        while (++index < length) {
          var current = iteratee(array2[index]);
          if (current !== undefined2) {
            result = result === undefined2 ? current : result + current;
          }
        }
        return result;
      }
      function baseTimes(n, iteratee) {
        var index = -1, result = Array(n);
        while (++index < n) {
          result[index] = iteratee(index);
        }
        return result;
      }
      function baseToPairs(object2, props) {
        return arrayMap(props, function(key) {
          return [key, object2[key]];
        });
      }
      function baseTrim(string2) {
        return string2 ? string2.slice(0, trimmedEndIndex(string2) + 1).replace(reTrimStart, "") : string2;
      }
      function baseUnary(func) {
        return function(value) {
          return func(value);
        };
      }
      function baseValues(object2, props) {
        return arrayMap(props, function(key) {
          return object2[key];
        });
      }
      function cacheHas(cache, key) {
        return cache.has(key);
      }
      function charsStartIndex(strSymbols, chrSymbols) {
        var index = -1, length = strSymbols.length;
        while (++index < length && baseIndexOf(chrSymbols, strSymbols[index], 0) > -1) {
        }
        return index;
      }
      function charsEndIndex(strSymbols, chrSymbols) {
        var index = strSymbols.length;
        while (index-- && baseIndexOf(chrSymbols, strSymbols[index], 0) > -1) {
        }
        return index;
      }
      function countHolders(array2, placeholder) {
        var length = array2.length, result = 0;
        while (length--) {
          if (array2[length] === placeholder) {
            ++result;
          }
        }
        return result;
      }
      var deburrLetter = basePropertyOf(deburredLetters);
      var escapeHtmlChar = basePropertyOf(htmlEscapes);
      function escapeStringChar(chr) {
        return "\\" + stringEscapes[chr];
      }
      function getValue3(object2, key) {
        return object2 == null ? undefined2 : object2[key];
      }
      function hasUnicode(string2) {
        return reHasUnicode.test(string2);
      }
      function hasUnicodeWord(string2) {
        return reHasUnicodeWord.test(string2);
      }
      function iteratorToArray(iterator) {
        var data, result = [];
        while (!(data = iterator.next()).done) {
          result.push(data.value);
        }
        return result;
      }
      function mapToArray(map) {
        var index = -1, result = Array(map.size);
        map.forEach(function(value, key) {
          result[++index] = [key, value];
        });
        return result;
      }
      function overArg(func, transform) {
        return function(arg) {
          return func(transform(arg));
        };
      }
      function replaceHolders(array2, placeholder) {
        var index = -1, length = array2.length, resIndex = 0, result = [];
        while (++index < length) {
          var value = array2[index];
          if (value === placeholder || value === PLACEHOLDER) {
            array2[index] = PLACEHOLDER;
            result[resIndex++] = index;
          }
        }
        return result;
      }
      function setToArray(set) {
        var index = -1, result = Array(set.size);
        set.forEach(function(value) {
          result[++index] = value;
        });
        return result;
      }
      function setToPairs(set) {
        var index = -1, result = Array(set.size);
        set.forEach(function(value) {
          result[++index] = [value, value];
        });
        return result;
      }
      function strictIndexOf(array2, value, fromIndex) {
        var index = fromIndex - 1, length = array2.length;
        while (++index < length) {
          if (array2[index] === value) {
            return index;
          }
        }
        return -1;
      }
      function strictLastIndexOf(array2, value, fromIndex) {
        var index = fromIndex + 1;
        while (index--) {
          if (array2[index] === value) {
            return index;
          }
        }
        return index;
      }
      function stringSize(string2) {
        return hasUnicode(string2) ? unicodeSize(string2) : asciiSize(string2);
      }
      function stringToArray(string2) {
        return hasUnicode(string2) ? unicodeToArray(string2) : asciiToArray(string2);
      }
      function trimmedEndIndex(string2) {
        var index = string2.length;
        while (index-- && reWhitespace.test(string2.charAt(index))) {
        }
        return index;
      }
      var unescapeHtmlChar = basePropertyOf(htmlUnescapes);
      function unicodeSize(string2) {
        var result = reUnicode.lastIndex = 0;
        while (reUnicode.test(string2)) {
          ++result;
        }
        return result;
      }
      function unicodeToArray(string2) {
        return string2.match(reUnicode) || [];
      }
      function unicodeWords(string2) {
        return string2.match(reUnicodeWord) || [];
      }
      var runInContext = function runInContext2(context) {
        context = context == null ? root : _.defaults(root.Object(), context, _.pick(root, contextProps));
        var Array2 = context.Array, Date2 = context.Date, Error2 = context.Error, Function2 = context.Function, Math2 = context.Math, Object2 = context.Object, RegExp2 = context.RegExp, String2 = context.String, TypeError2 = context.TypeError;
        var arrayProto = Array2.prototype, funcProto = Function2.prototype, objectProto = Object2.prototype;
        var coreJsData = context["__core-js_shared__"];
        var funcToString = funcProto.toString;
        var hasOwnProperty = objectProto.hasOwnProperty;
        var idCounter = 0;
        var maskSrcKey = function() {
          var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || "");
          return uid ? "Symbol(src)_1." + uid : "";
        }();
        var nativeObjectToString = objectProto.toString;
        var objectCtorString = funcToString.call(Object2);
        var oldDash = root._;
        var reIsNative = RegExp2(
          "^" + funcToString.call(hasOwnProperty).replace(reRegExpChar, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
        );
        var Buffer2 = moduleExports ? context.Buffer : undefined2, Symbol2 = context.Symbol, Uint8Array2 = context.Uint8Array, allocUnsafe = Buffer2 ? Buffer2.allocUnsafe : undefined2, getPrototype = overArg(Object2.getPrototypeOf, Object2), objectCreate = Object2.create, propertyIsEnumerable = objectProto.propertyIsEnumerable, splice = arrayProto.splice, spreadableSymbol = Symbol2 ? Symbol2.isConcatSpreadable : undefined2, symIterator = Symbol2 ? Symbol2.iterator : undefined2, symToStringTag = Symbol2 ? Symbol2.toStringTag : undefined2;
        var defineProperty = function() {
          try {
            var func = getNative(Object2, "defineProperty");
            func({}, "", {});
            return func;
          } catch (e) {
          }
        }();
        var ctxClearTimeout = context.clearTimeout !== root.clearTimeout && context.clearTimeout, ctxNow = Date2 && Date2.now !== root.Date.now && Date2.now, ctxSetTimeout = context.setTimeout !== root.setTimeout && context.setTimeout;
        var nativeCeil = Math2.ceil, nativeFloor = Math2.floor, nativeGetSymbols = Object2.getOwnPropertySymbols, nativeIsBuffer = Buffer2 ? Buffer2.isBuffer : undefined2, nativeIsFinite = context.isFinite, nativeJoin = arrayProto.join, nativeKeys = overArg(Object2.keys, Object2), nativeMax = Math2.max, nativeMin = Math2.min, nativeNow = Date2.now, nativeParseInt = context.parseInt, nativeRandom = Math2.random, nativeReverse = arrayProto.reverse;
        var DataView = getNative(context, "DataView"), Map = getNative(context, "Map"), Promise2 = getNative(context, "Promise"), Set = getNative(context, "Set"), WeakMap = getNative(context, "WeakMap"), nativeCreate = getNative(Object2, "create");
        var metaMap = WeakMap && new WeakMap();
        var realNames = {};
        var dataViewCtorString = toSource(DataView), mapCtorString = toSource(Map), promiseCtorString = toSource(Promise2), setCtorString = toSource(Set), weakMapCtorString = toSource(WeakMap);
        var symbolProto = Symbol2 ? Symbol2.prototype : undefined2, symbolValueOf = symbolProto ? symbolProto.valueOf : undefined2, symbolToString = symbolProto ? symbolProto.toString : undefined2;
        function lodash(value) {
          if (isObjectLike(value) && !isArray(value) && !(value instanceof LazyWrapper)) {
            if (value instanceof LodashWrapper) {
              return value;
            }
            if (hasOwnProperty.call(value, "__wrapped__")) {
              return wrapperClone(value);
            }
          }
          return new LodashWrapper(value);
        }
        var baseCreate = function() {
          function object2() {
          }
          return function(proto) {
            if (!isObject(proto)) {
              return {};
            }
            if (objectCreate) {
              return objectCreate(proto);
            }
            object2.prototype = proto;
            var result2 = new object2();
            object2.prototype = undefined2;
            return result2;
          };
        }();
        function baseLodash() {
        }
        function LodashWrapper(value, chainAll) {
          this.__wrapped__ = value;
          this.__actions__ = [];
          this.__chain__ = !!chainAll;
          this.__index__ = 0;
          this.__values__ = undefined2;
        }
        lodash.templateSettings = {
          "escape": reEscape,
          "evaluate": reEvaluate,
          "interpolate": reInterpolate,
          "variable": "",
          "imports": {
            "_": lodash
          }
        };
        lodash.prototype = baseLodash.prototype;
        lodash.prototype.constructor = lodash;
        LodashWrapper.prototype = baseCreate(baseLodash.prototype);
        LodashWrapper.prototype.constructor = LodashWrapper;
        function LazyWrapper(value) {
          this.__wrapped__ = value;
          this.__actions__ = [];
          this.__dir__ = 1;
          this.__filtered__ = false;
          this.__iteratees__ = [];
          this.__takeCount__ = MAX_ARRAY_LENGTH;
          this.__views__ = [];
        }
        function lazyClone() {
          var result2 = new LazyWrapper(this.__wrapped__);
          result2.__actions__ = copyArray(this.__actions__);
          result2.__dir__ = this.__dir__;
          result2.__filtered__ = this.__filtered__;
          result2.__iteratees__ = copyArray(this.__iteratees__);
          result2.__takeCount__ = this.__takeCount__;
          result2.__views__ = copyArray(this.__views__);
          return result2;
        }
        function lazyReverse() {
          if (this.__filtered__) {
            var result2 = new LazyWrapper(this);
            result2.__dir__ = -1;
            result2.__filtered__ = true;
          } else {
            result2 = this.clone();
            result2.__dir__ *= -1;
          }
          return result2;
        }
        function lazyValue() {
          var array2 = this.__wrapped__.value(), dir = this.__dir__, isArr = isArray(array2), isRight = dir < 0, arrLength = isArr ? array2.length : 0, view = getView(0, arrLength, this.__views__), start = view.start, end = view.end, length = end - start, index = isRight ? end : start - 1, iteratees = this.__iteratees__, iterLength = iteratees.length, resIndex = 0, takeCount = nativeMin(length, this.__takeCount__);
          if (!isArr || !isRight && arrLength == length && takeCount == length) {
            return baseWrapperValue(array2, this.__actions__);
          }
          var result2 = [];
          outer:
            while (length-- && resIndex < takeCount) {
              index += dir;
              var iterIndex = -1, value = array2[index];
              while (++iterIndex < iterLength) {
                var data = iteratees[iterIndex], iteratee2 = data.iteratee, type = data.type, computed = iteratee2(value);
                if (type == LAZY_MAP_FLAG) {
                  value = computed;
                } else if (!computed) {
                  if (type == LAZY_FILTER_FLAG) {
                    continue outer;
                  } else {
                    break outer;
                  }
                }
              }
              result2[resIndex++] = value;
            }
          return result2;
        }
        LazyWrapper.prototype = baseCreate(baseLodash.prototype);
        LazyWrapper.prototype.constructor = LazyWrapper;
        function Hash(entries) {
          var index = -1, length = entries == null ? 0 : entries.length;
          this.clear();
          while (++index < length) {
            var entry = entries[index];
            this.set(entry[0], entry[1]);
          }
        }
        function hashClear() {
          this.__data__ = nativeCreate ? nativeCreate(null) : {};
          this.size = 0;
        }
        function hashDelete(key) {
          var result2 = this.has(key) && delete this.__data__[key];
          this.size -= result2 ? 1 : 0;
          return result2;
        }
        function hashGet(key) {
          var data = this.__data__;
          if (nativeCreate) {
            var result2 = data[key];
            return result2 === HASH_UNDEFINED ? undefined2 : result2;
          }
          return hasOwnProperty.call(data, key) ? data[key] : undefined2;
        }
        function hashHas(key) {
          var data = this.__data__;
          return nativeCreate ? data[key] !== undefined2 : hasOwnProperty.call(data, key);
        }
        function hashSet(key, value) {
          var data = this.__data__;
          this.size += this.has(key) ? 0 : 1;
          data[key] = nativeCreate && value === undefined2 ? HASH_UNDEFINED : value;
          return this;
        }
        Hash.prototype.clear = hashClear;
        Hash.prototype["delete"] = hashDelete;
        Hash.prototype.get = hashGet;
        Hash.prototype.has = hashHas;
        Hash.prototype.set = hashSet;
        function ListCache(entries) {
          var index = -1, length = entries == null ? 0 : entries.length;
          this.clear();
          while (++index < length) {
            var entry = entries[index];
            this.set(entry[0], entry[1]);
          }
        }
        function listCacheClear() {
          this.__data__ = [];
          this.size = 0;
        }
        function listCacheDelete(key) {
          var data = this.__data__, index = assocIndexOf(data, key);
          if (index < 0) {
            return false;
          }
          var lastIndex = data.length - 1;
          if (index == lastIndex) {
            data.pop();
          } else {
            splice.call(data, index, 1);
          }
          --this.size;
          return true;
        }
        function listCacheGet(key) {
          var data = this.__data__, index = assocIndexOf(data, key);
          return index < 0 ? undefined2 : data[index][1];
        }
        function listCacheHas(key) {
          return assocIndexOf(this.__data__, key) > -1;
        }
        function listCacheSet(key, value) {
          var data = this.__data__, index = assocIndexOf(data, key);
          if (index < 0) {
            ++this.size;
            data.push([key, value]);
          } else {
            data[index][1] = value;
          }
          return this;
        }
        ListCache.prototype.clear = listCacheClear;
        ListCache.prototype["delete"] = listCacheDelete;
        ListCache.prototype.get = listCacheGet;
        ListCache.prototype.has = listCacheHas;
        ListCache.prototype.set = listCacheSet;
        function MapCache(entries) {
          var index = -1, length = entries == null ? 0 : entries.length;
          this.clear();
          while (++index < length) {
            var entry = entries[index];
            this.set(entry[0], entry[1]);
          }
        }
        function mapCacheClear() {
          this.size = 0;
          this.__data__ = {
            "hash": new Hash(),
            "map": new (Map || ListCache)(),
            "string": new Hash()
          };
        }
        function mapCacheDelete(key) {
          var result2 = getMapData(this, key)["delete"](key);
          this.size -= result2 ? 1 : 0;
          return result2;
        }
        function mapCacheGet(key) {
          return getMapData(this, key).get(key);
        }
        function mapCacheHas(key) {
          return getMapData(this, key).has(key);
        }
        function mapCacheSet(key, value) {
          var data = getMapData(this, key), size3 = data.size;
          data.set(key, value);
          this.size += data.size == size3 ? 0 : 1;
          return this;
        }
        MapCache.prototype.clear = mapCacheClear;
        MapCache.prototype["delete"] = mapCacheDelete;
        MapCache.prototype.get = mapCacheGet;
        MapCache.prototype.has = mapCacheHas;
        MapCache.prototype.set = mapCacheSet;
        function SetCache(values2) {
          var index = -1, length = values2 == null ? 0 : values2.length;
          this.__data__ = new MapCache();
          while (++index < length) {
            this.add(values2[index]);
          }
        }
        function setCacheAdd(value) {
          this.__data__.set(value, HASH_UNDEFINED);
          return this;
        }
        function setCacheHas(value) {
          return this.__data__.has(value);
        }
        SetCache.prototype.add = SetCache.prototype.push = setCacheAdd;
        SetCache.prototype.has = setCacheHas;
        function Stack(entries) {
          var data = this.__data__ = new ListCache(entries);
          this.size = data.size;
        }
        function stackClear() {
          this.__data__ = new ListCache();
          this.size = 0;
        }
        function stackDelete(key) {
          var data = this.__data__, result2 = data["delete"](key);
          this.size = data.size;
          return result2;
        }
        function stackGet(key) {
          return this.__data__.get(key);
        }
        function stackHas(key) {
          return this.__data__.has(key);
        }
        function stackSet(key, value) {
          var data = this.__data__;
          if (data instanceof ListCache) {
            var pairs = data.__data__;
            if (!Map || pairs.length < LARGE_ARRAY_SIZE - 1) {
              pairs.push([key, value]);
              this.size = ++data.size;
              return this;
            }
            data = this.__data__ = new MapCache(pairs);
          }
          data.set(key, value);
          this.size = data.size;
          return this;
        }
        Stack.prototype.clear = stackClear;
        Stack.prototype["delete"] = stackDelete;
        Stack.prototype.get = stackGet;
        Stack.prototype.has = stackHas;
        Stack.prototype.set = stackSet;
        function arrayLikeKeys(value, inherited) {
          var isArr = isArray(value), isArg = !isArr && isArguments(value), isBuff = !isArr && !isArg && isBuffer(value), isType = !isArr && !isArg && !isBuff && isTypedArray(value), skipIndexes = isArr || isArg || isBuff || isType, result2 = skipIndexes ? baseTimes(value.length, String2) : [], length = result2.length;
          for (var key in value) {
            if ((inherited || hasOwnProperty.call(value, key)) && !(skipIndexes && (key == "length" || isBuff && (key == "offset" || key == "parent") || isType && (key == "buffer" || key == "byteLength" || key == "byteOffset") || isIndex(key, length)))) {
              result2.push(key);
            }
          }
          return result2;
        }
        function arraySample(array2) {
          var length = array2.length;
          return length ? array2[baseRandom(0, length - 1)] : undefined2;
        }
        function arraySampleSize(array2, n) {
          return shuffleSelf(copyArray(array2), baseClamp(n, 0, array2.length));
        }
        function arrayShuffle(array2) {
          return shuffleSelf(copyArray(array2));
        }
        function assignMergeValue(object2, key, value) {
          if (value !== undefined2 && !eq(object2[key], value) || value === undefined2 && !(key in object2)) {
            baseAssignValue(object2, key, value);
          }
        }
        function assignValue(object2, key, value) {
          var objValue = object2[key];
          if (!(hasOwnProperty.call(object2, key) && eq(objValue, value)) || value === undefined2 && !(key in object2)) {
            baseAssignValue(object2, key, value);
          }
        }
        function assocIndexOf(array2, key) {
          var length = array2.length;
          while (length--) {
            if (eq(array2[length][0], key)) {
              return length;
            }
          }
          return -1;
        }
        function baseAggregator(collection, setter, iteratee2, accumulator) {
          baseEach(collection, function(value, key, collection2) {
            setter(accumulator, value, iteratee2(value), collection2);
          });
          return accumulator;
        }
        function baseAssign(object2, source) {
          return object2 && copyObject(source, keys(source), object2);
        }
        function baseAssignIn(object2, source) {
          return object2 && copyObject(source, keysIn(source), object2);
        }
        function baseAssignValue(object2, key, value) {
          if (key == "__proto__" && defineProperty) {
            defineProperty(object2, key, {
              "configurable": true,
              "enumerable": true,
              "value": value,
              "writable": true
            });
          } else {
            object2[key] = value;
          }
        }
        function baseAt(object2, paths) {
          var index = -1, length = paths.length, result2 = Array2(length), skip = object2 == null;
          while (++index < length) {
            result2[index] = skip ? undefined2 : get5(object2, paths[index]);
          }
          return result2;
        }
        function baseClamp(number, lower, upper) {
          if (number === number) {
            if (upper !== undefined2) {
              number = number <= upper ? number : upper;
            }
            if (lower !== undefined2) {
              number = number >= lower ? number : lower;
            }
          }
          return number;
        }
        function baseClone(value, bitmask, customizer, key, object2, stack) {
          var result2, isDeep = bitmask & CLONE_DEEP_FLAG, isFlat = bitmask & CLONE_FLAT_FLAG, isFull = bitmask & CLONE_SYMBOLS_FLAG;
          if (customizer) {
            result2 = object2 ? customizer(value, key, object2, stack) : customizer(value);
          }
          if (result2 !== undefined2) {
            return result2;
          }
          if (!isObject(value)) {
            return value;
          }
          var isArr = isArray(value);
          if (isArr) {
            result2 = initCloneArray(value);
            if (!isDeep) {
              return copyArray(value, result2);
            }
          } else {
            var tag = getTag(value), isFunc = tag == funcTag || tag == genTag;
            if (isBuffer(value)) {
              return cloneBuffer(value, isDeep);
            }
            if (tag == objectTag || tag == argsTag || isFunc && !object2) {
              result2 = isFlat || isFunc ? {} : initCloneObject(value);
              if (!isDeep) {
                return isFlat ? copySymbolsIn(value, baseAssignIn(result2, value)) : copySymbols(value, baseAssign(result2, value));
              }
            } else {
              if (!cloneableTags[tag]) {
                return object2 ? value : {};
              }
              result2 = initCloneByTag(value, tag, isDeep);
            }
          }
          stack || (stack = new Stack());
          var stacked = stack.get(value);
          if (stacked) {
            return stacked;
          }
          stack.set(value, result2);
          if (isSet(value)) {
            value.forEach(function(subValue) {
              result2.add(baseClone(subValue, bitmask, customizer, subValue, value, stack));
            });
          } else if (isMap(value)) {
            value.forEach(function(subValue, key2) {
              result2.set(key2, baseClone(subValue, bitmask, customizer, key2, value, stack));
            });
          }
          var keysFunc = isFull ? isFlat ? getAllKeysIn : getAllKeys : isFlat ? keysIn : keys;
          var props = isArr ? undefined2 : keysFunc(value);
          arrayEach(props || value, function(subValue, key2) {
            if (props) {
              key2 = subValue;
              subValue = value[key2];
            }
            assignValue(result2, key2, baseClone(subValue, bitmask, customizer, key2, value, stack));
          });
          return result2;
        }
        function baseConforms(source) {
          var props = keys(source);
          return function(object2) {
            return baseConformsTo(object2, source, props);
          };
        }
        function baseConformsTo(object2, source, props) {
          var length = props.length;
          if (object2 == null) {
            return !length;
          }
          object2 = Object2(object2);
          while (length--) {
            var key = props[length], predicate = source[key], value = object2[key];
            if (value === undefined2 && !(key in object2) || !predicate(value)) {
              return false;
            }
          }
          return true;
        }
        function baseDelay(func, wait, args) {
          if (typeof func != "function") {
            throw new TypeError2(FUNC_ERROR_TEXT);
          }
          return setTimeout2(function() {
            func.apply(undefined2, args);
          }, wait);
        }
        function baseDifference(array2, values2, iteratee2, comparator) {
          var index = -1, includes2 = arrayIncludes, isCommon = true, length = array2.length, result2 = [], valuesLength = values2.length;
          if (!length) {
            return result2;
          }
          if (iteratee2) {
            values2 = arrayMap(values2, baseUnary(iteratee2));
          }
          if (comparator) {
            includes2 = arrayIncludesWith;
            isCommon = false;
          } else if (values2.length >= LARGE_ARRAY_SIZE) {
            includes2 = cacheHas;
            isCommon = false;
            values2 = new SetCache(values2);
          }
          outer:
            while (++index < length) {
              var value = array2[index], computed = iteratee2 == null ? value : iteratee2(value);
              value = comparator || value !== 0 ? value : 0;
              if (isCommon && computed === computed) {
                var valuesIndex = valuesLength;
                while (valuesIndex--) {
                  if (values2[valuesIndex] === computed) {
                    continue outer;
                  }
                }
                result2.push(value);
              } else if (!includes2(values2, computed, comparator)) {
                result2.push(value);
              }
            }
          return result2;
        }
        var baseEach = createBaseEach(baseForOwn);
        var baseEachRight = createBaseEach(baseForOwnRight, true);
        function baseEvery(collection, predicate) {
          var result2 = true;
          baseEach(collection, function(value, index, collection2) {
            result2 = !!predicate(value, index, collection2);
            return result2;
          });
          return result2;
        }
        function baseExtremum(array2, iteratee2, comparator) {
          var index = -1, length = array2.length;
          while (++index < length) {
            var value = array2[index], current = iteratee2(value);
            if (current != null && (computed === undefined2 ? current === current && !isSymbol(current) : comparator(current, computed))) {
              var computed = current, result2 = value;
            }
          }
          return result2;
        }
        function baseFill(array2, value, start, end) {
          var length = array2.length;
          start = toInteger(start);
          if (start < 0) {
            start = -start > length ? 0 : length + start;
          }
          end = end === undefined2 || end > length ? length : toInteger(end);
          if (end < 0) {
            end += length;
          }
          end = start > end ? 0 : toLength(end);
          while (start < end) {
            array2[start++] = value;
          }
          return array2;
        }
        function baseFilter(collection, predicate) {
          var result2 = [];
          baseEach(collection, function(value, index, collection2) {
            if (predicate(value, index, collection2)) {
              result2.push(value);
            }
          });
          return result2;
        }
        function baseFlatten(array2, depth, predicate, isStrict, result2) {
          var index = -1, length = array2.length;
          predicate || (predicate = isFlattenable);
          result2 || (result2 = []);
          while (++index < length) {
            var value = array2[index];
            if (depth > 0 && predicate(value)) {
              if (depth > 1) {
                baseFlatten(value, depth - 1, predicate, isStrict, result2);
              } else {
                arrayPush(result2, value);
              }
            } else if (!isStrict) {
              result2[result2.length] = value;
            }
          }
          return result2;
        }
        var baseFor = createBaseFor();
        var baseForRight = createBaseFor(true);
        function baseForOwn(object2, iteratee2) {
          return object2 && baseFor(object2, iteratee2, keys);
        }
        function baseForOwnRight(object2, iteratee2) {
          return object2 && baseForRight(object2, iteratee2, keys);
        }
        function baseFunctions(object2, props) {
          return arrayFilter(props, function(key) {
            return isFunction(object2[key]);
          });
        }
        function baseGet(object2, path) {
          path = castPath(path, object2);
          var index = 0, length = path.length;
          while (object2 != null && index < length) {
            object2 = object2[toKey(path[index++])];
          }
          return index && index == length ? object2 : undefined2;
        }
        function baseGetAllKeys(object2, keysFunc, symbolsFunc) {
          var result2 = keysFunc(object2);
          return isArray(object2) ? result2 : arrayPush(result2, symbolsFunc(object2));
        }
        function baseGetTag(value) {
          if (value == null) {
            return value === undefined2 ? undefinedTag : nullTag;
          }
          return symToStringTag && symToStringTag in Object2(value) ? getRawTag(value) : objectToString(value);
        }
        function baseGt(value, other) {
          return value > other;
        }
        function baseHas(object2, key) {
          return object2 != null && hasOwnProperty.call(object2, key);
        }
        function baseHasIn(object2, key) {
          return object2 != null && key in Object2(object2);
        }
        function baseInRange(number, start, end) {
          return number >= nativeMin(start, end) && number < nativeMax(start, end);
        }
        function baseIntersection(arrays, iteratee2, comparator) {
          var includes2 = comparator ? arrayIncludesWith : arrayIncludes, length = arrays[0].length, othLength = arrays.length, othIndex = othLength, caches = Array2(othLength), maxLength = Infinity, result2 = [];
          while (othIndex--) {
            var array2 = arrays[othIndex];
            if (othIndex && iteratee2) {
              array2 = arrayMap(array2, baseUnary(iteratee2));
            }
            maxLength = nativeMin(array2.length, maxLength);
            caches[othIndex] = !comparator && (iteratee2 || length >= 120 && array2.length >= 120) ? new SetCache(othIndex && array2) : undefined2;
          }
          array2 = arrays[0];
          var index = -1, seen = caches[0];
          outer:
            while (++index < length && result2.length < maxLength) {
              var value = array2[index], computed = iteratee2 ? iteratee2(value) : value;
              value = comparator || value !== 0 ? value : 0;
              if (!(seen ? cacheHas(seen, computed) : includes2(result2, computed, comparator))) {
                othIndex = othLength;
                while (--othIndex) {
                  var cache = caches[othIndex];
                  if (!(cache ? cacheHas(cache, computed) : includes2(arrays[othIndex], computed, comparator))) {
                    continue outer;
                  }
                }
                if (seen) {
                  seen.push(computed);
                }
                result2.push(value);
              }
            }
          return result2;
        }
        function baseInverter(object2, setter, iteratee2, accumulator) {
          baseForOwn(object2, function(value, key, object3) {
            setter(accumulator, iteratee2(value), key, object3);
          });
          return accumulator;
        }
        function baseInvoke(object2, path, args) {
          path = castPath(path, object2);
          object2 = parent(object2, path);
          var func = object2 == null ? object2 : object2[toKey(last(path))];
          return func == null ? undefined2 : apply(func, object2, args);
        }
        function baseIsArguments(value) {
          return isObjectLike(value) && baseGetTag(value) == argsTag;
        }
        function baseIsArrayBuffer(value) {
          return isObjectLike(value) && baseGetTag(value) == arrayBufferTag;
        }
        function baseIsDate(value) {
          return isObjectLike(value) && baseGetTag(value) == dateTag;
        }
        function baseIsEqual(value, other, bitmask, customizer, stack) {
          if (value === other) {
            return true;
          }
          if (value == null || other == null || !isObjectLike(value) && !isObjectLike(other)) {
            return value !== value && other !== other;
          }
          return baseIsEqualDeep(value, other, bitmask, customizer, baseIsEqual, stack);
        }
        function baseIsEqualDeep(object2, other, bitmask, customizer, equalFunc, stack) {
          var objIsArr = isArray(object2), othIsArr = isArray(other), objTag = objIsArr ? arrayTag : getTag(object2), othTag = othIsArr ? arrayTag : getTag(other);
          objTag = objTag == argsTag ? objectTag : objTag;
          othTag = othTag == argsTag ? objectTag : othTag;
          var objIsObj = objTag == objectTag, othIsObj = othTag == objectTag, isSameTag = objTag == othTag;
          if (isSameTag && isBuffer(object2)) {
            if (!isBuffer(other)) {
              return false;
            }
            objIsArr = true;
            objIsObj = false;
          }
          if (isSameTag && !objIsObj) {
            stack || (stack = new Stack());
            return objIsArr || isTypedArray(object2) ? equalArrays(object2, other, bitmask, customizer, equalFunc, stack) : equalByTag(object2, other, objTag, bitmask, customizer, equalFunc, stack);
          }
          if (!(bitmask & COMPARE_PARTIAL_FLAG)) {
            var objIsWrapped = objIsObj && hasOwnProperty.call(object2, "__wrapped__"), othIsWrapped = othIsObj && hasOwnProperty.call(other, "__wrapped__");
            if (objIsWrapped || othIsWrapped) {
              var objUnwrapped = objIsWrapped ? object2.value() : object2, othUnwrapped = othIsWrapped ? other.value() : other;
              stack || (stack = new Stack());
              return equalFunc(objUnwrapped, othUnwrapped, bitmask, customizer, stack);
            }
          }
          if (!isSameTag) {
            return false;
          }
          stack || (stack = new Stack());
          return equalObjects(object2, other, bitmask, customizer, equalFunc, stack);
        }
        function baseIsMap(value) {
          return isObjectLike(value) && getTag(value) == mapTag;
        }
        function baseIsMatch(object2, source, matchData, customizer) {
          var index = matchData.length, length = index, noCustomizer = !customizer;
          if (object2 == null) {
            return !length;
          }
          object2 = Object2(object2);
          while (index--) {
            var data = matchData[index];
            if (noCustomizer && data[2] ? data[1] !== object2[data[0]] : !(data[0] in object2)) {
              return false;
            }
          }
          while (++index < length) {
            data = matchData[index];
            var key = data[0], objValue = object2[key], srcValue = data[1];
            if (noCustomizer && data[2]) {
              if (objValue === undefined2 && !(key in object2)) {
                return false;
              }
            } else {
              var stack = new Stack();
              if (customizer) {
                var result2 = customizer(objValue, srcValue, key, object2, source, stack);
              }
              if (!(result2 === undefined2 ? baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG | COMPARE_UNORDERED_FLAG, customizer, stack) : result2)) {
                return false;
              }
            }
          }
          return true;
        }
        function baseIsNative(value) {
          if (!isObject(value) || isMasked(value)) {
            return false;
          }
          var pattern = isFunction(value) ? reIsNative : reIsHostCtor;
          return pattern.test(toSource(value));
        }
        function baseIsRegExp(value) {
          return isObjectLike(value) && baseGetTag(value) == regexpTag;
        }
        function baseIsSet(value) {
          return isObjectLike(value) && getTag(value) == setTag;
        }
        function baseIsTypedArray(value) {
          return isObjectLike(value) && isLength(value.length) && !!typedArrayTags[baseGetTag(value)];
        }
        function baseIteratee(value) {
          if (typeof value == "function") {
            return value;
          }
          if (value == null) {
            return identity;
          }
          if (typeof value == "object") {
            return isArray(value) ? baseMatchesProperty(value[0], value[1]) : baseMatches(value);
          }
          return property(value);
        }
        function baseKeys(object2) {
          if (!isPrototype(object2)) {
            return nativeKeys(object2);
          }
          var result2 = [];
          for (var key in Object2(object2)) {
            if (hasOwnProperty.call(object2, key) && key != "constructor") {
              result2.push(key);
            }
          }
          return result2;
        }
        function baseKeysIn(object2) {
          if (!isObject(object2)) {
            return nativeKeysIn(object2);
          }
          var isProto = isPrototype(object2), result2 = [];
          for (var key in object2) {
            if (!(key == "constructor" && (isProto || !hasOwnProperty.call(object2, key)))) {
              result2.push(key);
            }
          }
          return result2;
        }
        function baseLt(value, other) {
          return value < other;
        }
        function baseMap(collection, iteratee2) {
          var index = -1, result2 = isArrayLike(collection) ? Array2(collection.length) : [];
          baseEach(collection, function(value, key, collection2) {
            result2[++index] = iteratee2(value, key, collection2);
          });
          return result2;
        }
        function baseMatches(source) {
          var matchData = getMatchData(source);
          if (matchData.length == 1 && matchData[0][2]) {
            return matchesStrictComparable(matchData[0][0], matchData[0][1]);
          }
          return function(object2) {
            return object2 === source || baseIsMatch(object2, source, matchData);
          };
        }
        function baseMatchesProperty(path, srcValue) {
          if (isKey(path) && isStrictComparable(srcValue)) {
            return matchesStrictComparable(toKey(path), srcValue);
          }
          return function(object2) {
            var objValue = get5(object2, path);
            return objValue === undefined2 && objValue === srcValue ? hasIn(object2, path) : baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG | COMPARE_UNORDERED_FLAG);
          };
        }
        function baseMerge(object2, source, srcIndex, customizer, stack) {
          if (object2 === source) {
            return;
          }
          baseFor(source, function(srcValue, key) {
            stack || (stack = new Stack());
            if (isObject(srcValue)) {
              baseMergeDeep(object2, source, key, srcIndex, baseMerge, customizer, stack);
            } else {
              var newValue = customizer ? customizer(safeGet(object2, key), srcValue, key + "", object2, source, stack) : undefined2;
              if (newValue === undefined2) {
                newValue = srcValue;
              }
              assignMergeValue(object2, key, newValue);
            }
          }, keysIn);
        }
        function baseMergeDeep(object2, source, key, srcIndex, mergeFunc, customizer, stack) {
          var objValue = safeGet(object2, key), srcValue = safeGet(source, key), stacked = stack.get(srcValue);
          if (stacked) {
            assignMergeValue(object2, key, stacked);
            return;
          }
          var newValue = customizer ? customizer(objValue, srcValue, key + "", object2, source, stack) : undefined2;
          var isCommon = newValue === undefined2;
          if (isCommon) {
            var isArr = isArray(srcValue), isBuff = !isArr && isBuffer(srcValue), isTyped = !isArr && !isBuff && isTypedArray(srcValue);
            newValue = srcValue;
            if (isArr || isBuff || isTyped) {
              if (isArray(objValue)) {
                newValue = objValue;
              } else if (isArrayLikeObject(objValue)) {
                newValue = copyArray(objValue);
              } else if (isBuff) {
                isCommon = false;
                newValue = cloneBuffer(srcValue, true);
              } else if (isTyped) {
                isCommon = false;
                newValue = cloneTypedArray(srcValue, true);
              } else {
                newValue = [];
              }
            } else if (isPlainObject(srcValue) || isArguments(srcValue)) {
              newValue = objValue;
              if (isArguments(objValue)) {
                newValue = toPlainObject(objValue);
              } else if (!isObject(objValue) || isFunction(objValue)) {
                newValue = initCloneObject(srcValue);
              }
            } else {
              isCommon = false;
            }
          }
          if (isCommon) {
            stack.set(srcValue, newValue);
            mergeFunc(newValue, srcValue, srcIndex, customizer, stack);
            stack["delete"](srcValue);
          }
          assignMergeValue(object2, key, newValue);
        }
        function baseNth(array2, n) {
          var length = array2.length;
          if (!length) {
            return;
          }
          n += n < 0 ? length : 0;
          return isIndex(n, length) ? array2[n] : undefined2;
        }
        function baseOrderBy(collection, iteratees, orders) {
          if (iteratees.length) {
            iteratees = arrayMap(iteratees, function(iteratee2) {
              if (isArray(iteratee2)) {
                return function(value) {
                  return baseGet(value, iteratee2.length === 1 ? iteratee2[0] : iteratee2);
                };
              }
              return iteratee2;
            });
          } else {
            iteratees = [identity];
          }
          var index = -1;
          iteratees = arrayMap(iteratees, baseUnary(getIteratee()));
          var result2 = baseMap(collection, function(value, key, collection2) {
            var criteria = arrayMap(iteratees, function(iteratee2) {
              return iteratee2(value);
            });
            return { "criteria": criteria, "index": ++index, "value": value };
          });
          return baseSortBy(result2, function(object2, other) {
            return compareMultiple(object2, other, orders);
          });
        }
        function basePick(object2, paths) {
          return basePickBy(object2, paths, function(value, path) {
            return hasIn(object2, path);
          });
        }
        function basePickBy(object2, paths, predicate) {
          var index = -1, length = paths.length, result2 = {};
          while (++index < length) {
            var path = paths[index], value = baseGet(object2, path);
            if (predicate(value, path)) {
              baseSet(result2, castPath(path, object2), value);
            }
          }
          return result2;
        }
        function basePropertyDeep(path) {
          return function(object2) {
            return baseGet(object2, path);
          };
        }
        function basePullAll(array2, values2, iteratee2, comparator) {
          var indexOf2 = comparator ? baseIndexOfWith : baseIndexOf, index = -1, length = values2.length, seen = array2;
          if (array2 === values2) {
            values2 = copyArray(values2);
          }
          if (iteratee2) {
            seen = arrayMap(array2, baseUnary(iteratee2));
          }
          while (++index < length) {
            var fromIndex = 0, value = values2[index], computed = iteratee2 ? iteratee2(value) : value;
            while ((fromIndex = indexOf2(seen, computed, fromIndex, comparator)) > -1) {
              if (seen !== array2) {
                splice.call(seen, fromIndex, 1);
              }
              splice.call(array2, fromIndex, 1);
            }
          }
          return array2;
        }
        function basePullAt(array2, indexes) {
          var length = array2 ? indexes.length : 0, lastIndex = length - 1;
          while (length--) {
            var index = indexes[length];
            if (length == lastIndex || index !== previous) {
              var previous = index;
              if (isIndex(index)) {
                splice.call(array2, index, 1);
              } else {
                baseUnset(array2, index);
              }
            }
          }
          return array2;
        }
        function baseRandom(lower, upper) {
          return lower + nativeFloor(nativeRandom() * (upper - lower + 1));
        }
        function baseRange(start, end, step, fromRight) {
          var index = -1, length = nativeMax(nativeCeil((end - start) / (step || 1)), 0), result2 = Array2(length);
          while (length--) {
            result2[fromRight ? length : ++index] = start;
            start += step;
          }
          return result2;
        }
        function baseRepeat(string2, n) {
          var result2 = "";
          if (!string2 || n < 1 || n > MAX_SAFE_INTEGER) {
            return result2;
          }
          do {
            if (n % 2) {
              result2 += string2;
            }
            n = nativeFloor(n / 2);
            if (n) {
              string2 += string2;
            }
          } while (n);
          return result2;
        }
        function baseRest(func, start) {
          return setToString(overRest(func, start, identity), func + "");
        }
        function baseSample(collection) {
          return arraySample(values(collection));
        }
        function baseSampleSize(collection, n) {
          var array2 = values(collection);
          return shuffleSelf(array2, baseClamp(n, 0, array2.length));
        }
        function baseSet(object2, path, value, customizer) {
          if (!isObject(object2)) {
            return object2;
          }
          path = castPath(path, object2);
          var index = -1, length = path.length, lastIndex = length - 1, nested = object2;
          while (nested != null && ++index < length) {
            var key = toKey(path[index]), newValue = value;
            if (key === "__proto__" || key === "constructor" || key === "prototype") {
              return object2;
            }
            if (index != lastIndex) {
              var objValue = nested[key];
              newValue = customizer ? customizer(objValue, key, nested) : undefined2;
              if (newValue === undefined2) {
                newValue = isObject(objValue) ? objValue : isIndex(path[index + 1]) ? [] : {};
              }
            }
            assignValue(nested, key, newValue);
            nested = nested[key];
          }
          return object2;
        }
        var baseSetData = !metaMap ? identity : function(func, data) {
          metaMap.set(func, data);
          return func;
        };
        var baseSetToString = !defineProperty ? identity : function(func, string2) {
          return defineProperty(func, "toString", {
            "configurable": true,
            "enumerable": false,
            "value": constant(string2),
            "writable": true
          });
        };
        function baseShuffle(collection) {
          return shuffleSelf(values(collection));
        }
        function baseSlice(array2, start, end) {
          var index = -1, length = array2.length;
          if (start < 0) {
            start = -start > length ? 0 : length + start;
          }
          end = end > length ? length : end;
          if (end < 0) {
            end += length;
          }
          length = start > end ? 0 : end - start >>> 0;
          start >>>= 0;
          var result2 = Array2(length);
          while (++index < length) {
            result2[index] = array2[index + start];
          }
          return result2;
        }
        function baseSome(collection, predicate) {
          var result2;
          baseEach(collection, function(value, index, collection2) {
            result2 = predicate(value, index, collection2);
            return !result2;
          });
          return !!result2;
        }
        function baseSortedIndex(array2, value, retHighest) {
          var low = 0, high = array2 == null ? low : array2.length;
          if (typeof value == "number" && value === value && high <= HALF_MAX_ARRAY_LENGTH) {
            while (low < high) {
              var mid = low + high >>> 1, computed = array2[mid];
              if (computed !== null && !isSymbol(computed) && (retHighest ? computed <= value : computed < value)) {
                low = mid + 1;
              } else {
                high = mid;
              }
            }
            return high;
          }
          return baseSortedIndexBy(array2, value, identity, retHighest);
        }
        function baseSortedIndexBy(array2, value, iteratee2, retHighest) {
          var low = 0, high = array2 == null ? 0 : array2.length;
          if (high === 0) {
            return 0;
          }
          value = iteratee2(value);
          var valIsNaN = value !== value, valIsNull = value === null, valIsSymbol = isSymbol(value), valIsUndefined = value === undefined2;
          while (low < high) {
            var mid = nativeFloor((low + high) / 2), computed = iteratee2(array2[mid]), othIsDefined = computed !== undefined2, othIsNull = computed === null, othIsReflexive = computed === computed, othIsSymbol = isSymbol(computed);
            if (valIsNaN) {
              var setLow = retHighest || othIsReflexive;
            } else if (valIsUndefined) {
              setLow = othIsReflexive && (retHighest || othIsDefined);
            } else if (valIsNull) {
              setLow = othIsReflexive && othIsDefined && (retHighest || !othIsNull);
            } else if (valIsSymbol) {
              setLow = othIsReflexive && othIsDefined && !othIsNull && (retHighest || !othIsSymbol);
            } else if (othIsNull || othIsSymbol) {
              setLow = false;
            } else {
              setLow = retHighest ? computed <= value : computed < value;
            }
            if (setLow) {
              low = mid + 1;
            } else {
              high = mid;
            }
          }
          return nativeMin(high, MAX_ARRAY_INDEX);
        }
        function baseSortedUniq(array2, iteratee2) {
          var index = -1, length = array2.length, resIndex = 0, result2 = [];
          while (++index < length) {
            var value = array2[index], computed = iteratee2 ? iteratee2(value) : value;
            if (!index || !eq(computed, seen)) {
              var seen = computed;
              result2[resIndex++] = value === 0 ? 0 : value;
            }
          }
          return result2;
        }
        function baseToNumber(value) {
          if (typeof value == "number") {
            return value;
          }
          if (isSymbol(value)) {
            return NAN;
          }
          return +value;
        }
        function baseToString(value) {
          if (typeof value == "string") {
            return value;
          }
          if (isArray(value)) {
            return arrayMap(value, baseToString) + "";
          }
          if (isSymbol(value)) {
            return symbolToString ? symbolToString.call(value) : "";
          }
          var result2 = value + "";
          return result2 == "0" && 1 / value == -INFINITY ? "-0" : result2;
        }
        function baseUniq(array2, iteratee2, comparator) {
          var index = -1, includes2 = arrayIncludes, length = array2.length, isCommon = true, result2 = [], seen = result2;
          if (comparator) {
            isCommon = false;
            includes2 = arrayIncludesWith;
          } else if (length >= LARGE_ARRAY_SIZE) {
            var set2 = iteratee2 ? null : createSet(array2);
            if (set2) {
              return setToArray(set2);
            }
            isCommon = false;
            includes2 = cacheHas;
            seen = new SetCache();
          } else {
            seen = iteratee2 ? [] : result2;
          }
          outer:
            while (++index < length) {
              var value = array2[index], computed = iteratee2 ? iteratee2(value) : value;
              value = comparator || value !== 0 ? value : 0;
              if (isCommon && computed === computed) {
                var seenIndex = seen.length;
                while (seenIndex--) {
                  if (seen[seenIndex] === computed) {
                    continue outer;
                  }
                }
                if (iteratee2) {
                  seen.push(computed);
                }
                result2.push(value);
              } else if (!includes2(seen, computed, comparator)) {
                if (seen !== result2) {
                  seen.push(computed);
                }
                result2.push(value);
              }
            }
          return result2;
        }
        function baseUnset(object2, path) {
          path = castPath(path, object2);
          object2 = parent(object2, path);
          return object2 == null || delete object2[toKey(last(path))];
        }
        function baseUpdate(object2, path, updater, customizer) {
          return baseSet(object2, path, updater(baseGet(object2, path)), customizer);
        }
        function baseWhile(array2, predicate, isDrop, fromRight) {
          var length = array2.length, index = fromRight ? length : -1;
          while ((fromRight ? index-- : ++index < length) && predicate(array2[index], index, array2)) {
          }
          return isDrop ? baseSlice(array2, fromRight ? 0 : index, fromRight ? index + 1 : length) : baseSlice(array2, fromRight ? index + 1 : 0, fromRight ? length : index);
        }
        function baseWrapperValue(value, actions) {
          var result2 = value;
          if (result2 instanceof LazyWrapper) {
            result2 = result2.value();
          }
          return arrayReduce(actions, function(result3, action) {
            return action.func.apply(action.thisArg, arrayPush([result3], action.args));
          }, result2);
        }
        function baseXor(arrays, iteratee2, comparator) {
          var length = arrays.length;
          if (length < 2) {
            return length ? baseUniq(arrays[0]) : [];
          }
          var index = -1, result2 = Array2(length);
          while (++index < length) {
            var array2 = arrays[index], othIndex = -1;
            while (++othIndex < length) {
              if (othIndex != index) {
                result2[index] = baseDifference(result2[index] || array2, arrays[othIndex], iteratee2, comparator);
              }
            }
          }
          return baseUniq(baseFlatten(result2, 1), iteratee2, comparator);
        }
        function baseZipObject(props, values2, assignFunc) {
          var index = -1, length = props.length, valsLength = values2.length, result2 = {};
          while (++index < length) {
            var value = index < valsLength ? values2[index] : undefined2;
            assignFunc(result2, props[index], value);
          }
          return result2;
        }
        function castArrayLikeObject(value) {
          return isArrayLikeObject(value) ? value : [];
        }
        function castFunction(value) {
          return typeof value == "function" ? value : identity;
        }
        function castPath(value, object2) {
          if (isArray(value)) {
            return value;
          }
          return isKey(value, object2) ? [value] : stringToPath(toString(value));
        }
        var castRest = baseRest;
        function castSlice(array2, start, end) {
          var length = array2.length;
          end = end === undefined2 ? length : end;
          return !start && end >= length ? array2 : baseSlice(array2, start, end);
        }
        var clearTimeout = ctxClearTimeout || function(id) {
          return root.clearTimeout(id);
        };
        function cloneBuffer(buffer, isDeep) {
          if (isDeep) {
            return buffer.slice();
          }
          var length = buffer.length, result2 = allocUnsafe ? allocUnsafe(length) : new buffer.constructor(length);
          buffer.copy(result2);
          return result2;
        }
        function cloneArrayBuffer(arrayBuffer) {
          var result2 = new arrayBuffer.constructor(arrayBuffer.byteLength);
          new Uint8Array2(result2).set(new Uint8Array2(arrayBuffer));
          return result2;
        }
        function cloneDataView(dataView, isDeep) {
          var buffer = isDeep ? cloneArrayBuffer(dataView.buffer) : dataView.buffer;
          return new dataView.constructor(buffer, dataView.byteOffset, dataView.byteLength);
        }
        function cloneRegExp(regexp) {
          var result2 = new regexp.constructor(regexp.source, reFlags.exec(regexp));
          result2.lastIndex = regexp.lastIndex;
          return result2;
        }
        function cloneSymbol(symbol) {
          return symbolValueOf ? Object2(symbolValueOf.call(symbol)) : {};
        }
        function cloneTypedArray(typedArray, isDeep) {
          var buffer = isDeep ? cloneArrayBuffer(typedArray.buffer) : typedArray.buffer;
          return new typedArray.constructor(buffer, typedArray.byteOffset, typedArray.length);
        }
        function compareAscending(value, other) {
          if (value !== other) {
            var valIsDefined = value !== undefined2, valIsNull = value === null, valIsReflexive = value === value, valIsSymbol = isSymbol(value);
            var othIsDefined = other !== undefined2, othIsNull = other === null, othIsReflexive = other === other, othIsSymbol = isSymbol(other);
            if (!othIsNull && !othIsSymbol && !valIsSymbol && value > other || valIsSymbol && othIsDefined && othIsReflexive && !othIsNull && !othIsSymbol || valIsNull && othIsDefined && othIsReflexive || !valIsDefined && othIsReflexive || !valIsReflexive) {
              return 1;
            }
            if (!valIsNull && !valIsSymbol && !othIsSymbol && value < other || othIsSymbol && valIsDefined && valIsReflexive && !valIsNull && !valIsSymbol || othIsNull && valIsDefined && valIsReflexive || !othIsDefined && valIsReflexive || !othIsReflexive) {
              return -1;
            }
          }
          return 0;
        }
        function compareMultiple(object2, other, orders) {
          var index = -1, objCriteria = object2.criteria, othCriteria = other.criteria, length = objCriteria.length, ordersLength = orders.length;
          while (++index < length) {
            var result2 = compareAscending(objCriteria[index], othCriteria[index]);
            if (result2) {
              if (index >= ordersLength) {
                return result2;
              }
              var order2 = orders[index];
              return result2 * (order2 == "desc" ? -1 : 1);
            }
          }
          return object2.index - other.index;
        }
        function composeArgs(args, partials, holders, isCurried) {
          var argsIndex = -1, argsLength = args.length, holdersLength = holders.length, leftIndex = -1, leftLength = partials.length, rangeLength = nativeMax(argsLength - holdersLength, 0), result2 = Array2(leftLength + rangeLength), isUncurried = !isCurried;
          while (++leftIndex < leftLength) {
            result2[leftIndex] = partials[leftIndex];
          }
          while (++argsIndex < holdersLength) {
            if (isUncurried || argsIndex < argsLength) {
              result2[holders[argsIndex]] = args[argsIndex];
            }
          }
          while (rangeLength--) {
            result2[leftIndex++] = args[argsIndex++];
          }
          return result2;
        }
        function composeArgsRight(args, partials, holders, isCurried) {
          var argsIndex = -1, argsLength = args.length, holdersIndex = -1, holdersLength = holders.length, rightIndex = -1, rightLength = partials.length, rangeLength = nativeMax(argsLength - holdersLength, 0), result2 = Array2(rangeLength + rightLength), isUncurried = !isCurried;
          while (++argsIndex < rangeLength) {
            result2[argsIndex] = args[argsIndex];
          }
          var offset = argsIndex;
          while (++rightIndex < rightLength) {
            result2[offset + rightIndex] = partials[rightIndex];
          }
          while (++holdersIndex < holdersLength) {
            if (isUncurried || argsIndex < argsLength) {
              result2[offset + holders[holdersIndex]] = args[argsIndex++];
            }
          }
          return result2;
        }
        function copyArray(source, array2) {
          var index = -1, length = source.length;
          array2 || (array2 = Array2(length));
          while (++index < length) {
            array2[index] = source[index];
          }
          return array2;
        }
        function copyObject(source, props, object2, customizer) {
          var isNew = !object2;
          object2 || (object2 = {});
          var index = -1, length = props.length;
          while (++index < length) {
            var key = props[index];
            var newValue = customizer ? customizer(object2[key], source[key], key, object2, source) : undefined2;
            if (newValue === undefined2) {
              newValue = source[key];
            }
            if (isNew) {
              baseAssignValue(object2, key, newValue);
            } else {
              assignValue(object2, key, newValue);
            }
          }
          return object2;
        }
        function copySymbols(source, object2) {
          return copyObject(source, getSymbols(source), object2);
        }
        function copySymbolsIn(source, object2) {
          return copyObject(source, getSymbolsIn(source), object2);
        }
        function createAggregator(setter, initializer) {
          return function(collection, iteratee2) {
            var func = isArray(collection) ? arrayAggregator : baseAggregator, accumulator = initializer ? initializer() : {};
            return func(collection, setter, getIteratee(iteratee2, 2), accumulator);
          };
        }
        function createAssigner(assigner) {
          return baseRest(function(object2, sources) {
            var index = -1, length = sources.length, customizer = length > 1 ? sources[length - 1] : undefined2, guard = length > 2 ? sources[2] : undefined2;
            customizer = assigner.length > 3 && typeof customizer == "function" ? (length--, customizer) : undefined2;
            if (guard && isIterateeCall(sources[0], sources[1], guard)) {
              customizer = length < 3 ? undefined2 : customizer;
              length = 1;
            }
            object2 = Object2(object2);
            while (++index < length) {
              var source = sources[index];
              if (source) {
                assigner(object2, source, index, customizer);
              }
            }
            return object2;
          });
        }
        function createBaseEach(eachFunc, fromRight) {
          return function(collection, iteratee2) {
            if (collection == null) {
              return collection;
            }
            if (!isArrayLike(collection)) {
              return eachFunc(collection, iteratee2);
            }
            var length = collection.length, index = fromRight ? length : -1, iterable = Object2(collection);
            while (fromRight ? index-- : ++index < length) {
              if (iteratee2(iterable[index], index, iterable) === false) {
                break;
              }
            }
            return collection;
          };
        }
        function createBaseFor(fromRight) {
          return function(object2, iteratee2, keysFunc) {
            var index = -1, iterable = Object2(object2), props = keysFunc(object2), length = props.length;
            while (length--) {
              var key = props[fromRight ? length : ++index];
              if (iteratee2(iterable[key], key, iterable) === false) {
                break;
              }
            }
            return object2;
          };
        }
        function createBind(func, bitmask, thisArg) {
          var isBind = bitmask & WRAP_BIND_FLAG, Ctor = createCtor(func);
          function wrapper() {
            var fn = this && this !== root && this instanceof wrapper ? Ctor : func;
            return fn.apply(isBind ? thisArg : this, arguments);
          }
          return wrapper;
        }
        function createCaseFirst(methodName) {
          return function(string2) {
            string2 = toString(string2);
            var strSymbols = hasUnicode(string2) ? stringToArray(string2) : undefined2;
            var chr = strSymbols ? strSymbols[0] : string2.charAt(0);
            var trailing = strSymbols ? castSlice(strSymbols, 1).join("") : string2.slice(1);
            return chr[methodName]() + trailing;
          };
        }
        function createCompounder(callback) {
          return function(string2) {
            return arrayReduce(words(deburr(string2).replace(reApos, "")), callback, "");
          };
        }
        function createCtor(Ctor) {
          return function() {
            var args = arguments;
            switch (args.length) {
              case 0:
                return new Ctor();
              case 1:
                return new Ctor(args[0]);
              case 2:
                return new Ctor(args[0], args[1]);
              case 3:
                return new Ctor(args[0], args[1], args[2]);
              case 4:
                return new Ctor(args[0], args[1], args[2], args[3]);
              case 5:
                return new Ctor(args[0], args[1], args[2], args[3], args[4]);
              case 6:
                return new Ctor(args[0], args[1], args[2], args[3], args[4], args[5]);
              case 7:
                return new Ctor(args[0], args[1], args[2], args[3], args[4], args[5], args[6]);
            }
            var thisBinding = baseCreate(Ctor.prototype), result2 = Ctor.apply(thisBinding, args);
            return isObject(result2) ? result2 : thisBinding;
          };
        }
        function createCurry(func, bitmask, arity) {
          var Ctor = createCtor(func);
          function wrapper() {
            var length = arguments.length, args = Array2(length), index = length, placeholder = getHolder(wrapper);
            while (index--) {
              args[index] = arguments[index];
            }
            var holders = length < 3 && args[0] !== placeholder && args[length - 1] !== placeholder ? [] : replaceHolders(args, placeholder);
            length -= holders.length;
            if (length < arity) {
              return createRecurry(
                func,
                bitmask,
                createHybrid,
                wrapper.placeholder,
                undefined2,
                args,
                holders,
                undefined2,
                undefined2,
                arity - length
              );
            }
            var fn = this && this !== root && this instanceof wrapper ? Ctor : func;
            return apply(fn, this, args);
          }
          return wrapper;
        }
        function createFind(findIndexFunc) {
          return function(collection, predicate, fromIndex) {
            var iterable = Object2(collection);
            if (!isArrayLike(collection)) {
              var iteratee2 = getIteratee(predicate, 3);
              collection = keys(collection);
              predicate = function(key) {
                return iteratee2(iterable[key], key, iterable);
              };
            }
            var index = findIndexFunc(collection, predicate, fromIndex);
            return index > -1 ? iterable[iteratee2 ? collection[index] : index] : undefined2;
          };
        }
        function createFlow(fromRight) {
          return flatRest(function(funcs) {
            var length = funcs.length, index = length, prereq = LodashWrapper.prototype.thru;
            if (fromRight) {
              funcs.reverse();
            }
            while (index--) {
              var func = funcs[index];
              if (typeof func != "function") {
                throw new TypeError2(FUNC_ERROR_TEXT);
              }
              if (prereq && !wrapper && getFuncName(func) == "wrapper") {
                var wrapper = new LodashWrapper([], true);
              }
            }
            index = wrapper ? index : length;
            while (++index < length) {
              func = funcs[index];
              var funcName = getFuncName(func), data = funcName == "wrapper" ? getData(func) : undefined2;
              if (data && isLaziable(data[0]) && data[1] == (WRAP_ARY_FLAG | WRAP_CURRY_FLAG | WRAP_PARTIAL_FLAG | WRAP_REARG_FLAG) && !data[4].length && data[9] == 1) {
                wrapper = wrapper[getFuncName(data[0])].apply(wrapper, data[3]);
              } else {
                wrapper = func.length == 1 && isLaziable(func) ? wrapper[funcName]() : wrapper.thru(func);
              }
            }
            return function() {
              var args = arguments, value = args[0];
              if (wrapper && args.length == 1 && isArray(value)) {
                return wrapper.plant(value).value();
              }
              var index2 = 0, result2 = length ? funcs[index2].apply(this, args) : value;
              while (++index2 < length) {
                result2 = funcs[index2].call(this, result2);
              }
              return result2;
            };
          });
        }
        function createHybrid(func, bitmask, thisArg, partials, holders, partialsRight, holdersRight, argPos, ary2, arity) {
          var isAry = bitmask & WRAP_ARY_FLAG, isBind = bitmask & WRAP_BIND_FLAG, isBindKey = bitmask & WRAP_BIND_KEY_FLAG, isCurried = bitmask & (WRAP_CURRY_FLAG | WRAP_CURRY_RIGHT_FLAG), isFlip = bitmask & WRAP_FLIP_FLAG, Ctor = isBindKey ? undefined2 : createCtor(func);
          function wrapper() {
            var length = arguments.length, args = Array2(length), index = length;
            while (index--) {
              args[index] = arguments[index];
            }
            if (isCurried) {
              var placeholder = getHolder(wrapper), holdersCount = countHolders(args, placeholder);
            }
            if (partials) {
              args = composeArgs(args, partials, holders, isCurried);
            }
            if (partialsRight) {
              args = composeArgsRight(args, partialsRight, holdersRight, isCurried);
            }
            length -= holdersCount;
            if (isCurried && length < arity) {
              var newHolders = replaceHolders(args, placeholder);
              return createRecurry(
                func,
                bitmask,
                createHybrid,
                wrapper.placeholder,
                thisArg,
                args,
                newHolders,
                argPos,
                ary2,
                arity - length
              );
            }
            var thisBinding = isBind ? thisArg : this, fn = isBindKey ? thisBinding[func] : func;
            length = args.length;
            if (argPos) {
              args = reorder(args, argPos);
            } else if (isFlip && length > 1) {
              args.reverse();
            }
            if (isAry && ary2 < length) {
              args.length = ary2;
            }
            if (this && this !== root && this instanceof wrapper) {
              fn = Ctor || createCtor(fn);
            }
            return fn.apply(thisBinding, args);
          }
          return wrapper;
        }
        function createInverter(setter, toIteratee) {
          return function(object2, iteratee2) {
            return baseInverter(object2, setter, toIteratee(iteratee2), {});
          };
        }
        function createMathOperation(operator, defaultValue) {
          return function(value, other) {
            var result2;
            if (value === undefined2 && other === undefined2) {
              return defaultValue;
            }
            if (value !== undefined2) {
              result2 = value;
            }
            if (other !== undefined2) {
              if (result2 === undefined2) {
                return other;
              }
              if (typeof value == "string" || typeof other == "string") {
                value = baseToString(value);
                other = baseToString(other);
              } else {
                value = baseToNumber(value);
                other = baseToNumber(other);
              }
              result2 = operator(value, other);
            }
            return result2;
          };
        }
        function createOver(arrayFunc) {
          return flatRest(function(iteratees) {
            iteratees = arrayMap(iteratees, baseUnary(getIteratee()));
            return baseRest(function(args) {
              var thisArg = this;
              return arrayFunc(iteratees, function(iteratee2) {
                return apply(iteratee2, thisArg, args);
              });
            });
          });
        }
        function createPadding(length, chars) {
          chars = chars === undefined2 ? " " : baseToString(chars);
          var charsLength = chars.length;
          if (charsLength < 2) {
            return charsLength ? baseRepeat(chars, length) : chars;
          }
          var result2 = baseRepeat(chars, nativeCeil(length / stringSize(chars)));
          return hasUnicode(chars) ? castSlice(stringToArray(result2), 0, length).join("") : result2.slice(0, length);
        }
        function createPartial(func, bitmask, thisArg, partials) {
          var isBind = bitmask & WRAP_BIND_FLAG, Ctor = createCtor(func);
          function wrapper() {
            var argsIndex = -1, argsLength = arguments.length, leftIndex = -1, leftLength = partials.length, args = Array2(leftLength + argsLength), fn = this && this !== root && this instanceof wrapper ? Ctor : func;
            while (++leftIndex < leftLength) {
              args[leftIndex] = partials[leftIndex];
            }
            while (argsLength--) {
              args[leftIndex++] = arguments[++argsIndex];
            }
            return apply(fn, isBind ? thisArg : this, args);
          }
          return wrapper;
        }
        function createRange(fromRight) {
          return function(start, end, step) {
            if (step && typeof step != "number" && isIterateeCall(start, end, step)) {
              end = step = undefined2;
            }
            start = toFinite(start);
            if (end === undefined2) {
              end = start;
              start = 0;
            } else {
              end = toFinite(end);
            }
            step = step === undefined2 ? start < end ? 1 : -1 : toFinite(step);
            return baseRange(start, end, step, fromRight);
          };
        }
        function createRelationalOperation(operator) {
          return function(value, other) {
            if (!(typeof value == "string" && typeof other == "string")) {
              value = toNumber(value);
              other = toNumber(other);
            }
            return operator(value, other);
          };
        }
        function createRecurry(func, bitmask, wrapFunc, placeholder, thisArg, partials, holders, argPos, ary2, arity) {
          var isCurry = bitmask & WRAP_CURRY_FLAG, newHolders = isCurry ? holders : undefined2, newHoldersRight = isCurry ? undefined2 : holders, newPartials = isCurry ? partials : undefined2, newPartialsRight = isCurry ? undefined2 : partials;
          bitmask |= isCurry ? WRAP_PARTIAL_FLAG : WRAP_PARTIAL_RIGHT_FLAG;
          bitmask &= ~(isCurry ? WRAP_PARTIAL_RIGHT_FLAG : WRAP_PARTIAL_FLAG);
          if (!(bitmask & WRAP_CURRY_BOUND_FLAG)) {
            bitmask &= ~(WRAP_BIND_FLAG | WRAP_BIND_KEY_FLAG);
          }
          var newData = [
            func,
            bitmask,
            thisArg,
            newPartials,
            newHolders,
            newPartialsRight,
            newHoldersRight,
            argPos,
            ary2,
            arity
          ];
          var result2 = wrapFunc.apply(undefined2, newData);
          if (isLaziable(func)) {
            setData(result2, newData);
          }
          result2.placeholder = placeholder;
          return setWrapToString(result2, func, bitmask);
        }
        function createRound(methodName) {
          var func = Math2[methodName];
          return function(number, precision) {
            number = toNumber(number);
            precision = precision == null ? 0 : nativeMin(toInteger(precision), 292);
            if (precision && nativeIsFinite(number)) {
              var pair = (toString(number) + "e").split("e"), value = func(pair[0] + "e" + (+pair[1] + precision));
              pair = (toString(value) + "e").split("e");
              return +(pair[0] + "e" + (+pair[1] - precision));
            }
            return func(number);
          };
        }
        var createSet = !(Set && 1 / setToArray(new Set([, -0]))[1] == INFINITY) ? noop : function(values2) {
          return new Set(values2);
        };
        function createToPairs(keysFunc) {
          return function(object2) {
            var tag = getTag(object2);
            if (tag == mapTag) {
              return mapToArray(object2);
            }
            if (tag == setTag) {
              return setToPairs(object2);
            }
            return baseToPairs(object2, keysFunc(object2));
          };
        }
        function createWrap(func, bitmask, thisArg, partials, holders, argPos, ary2, arity) {
          var isBindKey = bitmask & WRAP_BIND_KEY_FLAG;
          if (!isBindKey && typeof func != "function") {
            throw new TypeError2(FUNC_ERROR_TEXT);
          }
          var length = partials ? partials.length : 0;
          if (!length) {
            bitmask &= ~(WRAP_PARTIAL_FLAG | WRAP_PARTIAL_RIGHT_FLAG);
            partials = holders = undefined2;
          }
          ary2 = ary2 === undefined2 ? ary2 : nativeMax(toInteger(ary2), 0);
          arity = arity === undefined2 ? arity : toInteger(arity);
          length -= holders ? holders.length : 0;
          if (bitmask & WRAP_PARTIAL_RIGHT_FLAG) {
            var partialsRight = partials, holdersRight = holders;
            partials = holders = undefined2;
          }
          var data = isBindKey ? undefined2 : getData(func);
          var newData = [
            func,
            bitmask,
            thisArg,
            partials,
            holders,
            partialsRight,
            holdersRight,
            argPos,
            ary2,
            arity
          ];
          if (data) {
            mergeData(newData, data);
          }
          func = newData[0];
          bitmask = newData[1];
          thisArg = newData[2];
          partials = newData[3];
          holders = newData[4];
          arity = newData[9] = newData[9] === undefined2 ? isBindKey ? 0 : func.length : nativeMax(newData[9] - length, 0);
          if (!arity && bitmask & (WRAP_CURRY_FLAG | WRAP_CURRY_RIGHT_FLAG)) {
            bitmask &= ~(WRAP_CURRY_FLAG | WRAP_CURRY_RIGHT_FLAG);
          }
          if (!bitmask || bitmask == WRAP_BIND_FLAG) {
            var result2 = createBind(func, bitmask, thisArg);
          } else if (bitmask == WRAP_CURRY_FLAG || bitmask == WRAP_CURRY_RIGHT_FLAG) {
            result2 = createCurry(func, bitmask, arity);
          } else if ((bitmask == WRAP_PARTIAL_FLAG || bitmask == (WRAP_BIND_FLAG | WRAP_PARTIAL_FLAG)) && !holders.length) {
            result2 = createPartial(func, bitmask, thisArg, partials);
          } else {
            result2 = createHybrid.apply(undefined2, newData);
          }
          var setter = data ? baseSetData : setData;
          return setWrapToString(setter(result2, newData), func, bitmask);
        }
        function customDefaultsAssignIn(objValue, srcValue, key, object2) {
          if (objValue === undefined2 || eq(objValue, objectProto[key]) && !hasOwnProperty.call(object2, key)) {
            return srcValue;
          }
          return objValue;
        }
        function customDefaultsMerge(objValue, srcValue, key, object2, source, stack) {
          if (isObject(objValue) && isObject(srcValue)) {
            stack.set(srcValue, objValue);
            baseMerge(objValue, srcValue, undefined2, customDefaultsMerge, stack);
            stack["delete"](srcValue);
          }
          return objValue;
        }
        function customOmitClone(value) {
          return isPlainObject(value) ? undefined2 : value;
        }
        function equalArrays(array2, other, bitmask, customizer, equalFunc, stack) {
          var isPartial = bitmask & COMPARE_PARTIAL_FLAG, arrLength = array2.length, othLength = other.length;
          if (arrLength != othLength && !(isPartial && othLength > arrLength)) {
            return false;
          }
          var arrStacked = stack.get(array2);
          var othStacked = stack.get(other);
          if (arrStacked && othStacked) {
            return arrStacked == other && othStacked == array2;
          }
          var index = -1, result2 = true, seen = bitmask & COMPARE_UNORDERED_FLAG ? new SetCache() : undefined2;
          stack.set(array2, other);
          stack.set(other, array2);
          while (++index < arrLength) {
            var arrValue = array2[index], othValue = other[index];
            if (customizer) {
              var compared = isPartial ? customizer(othValue, arrValue, index, other, array2, stack) : customizer(arrValue, othValue, index, array2, other, stack);
            }
            if (compared !== undefined2) {
              if (compared) {
                continue;
              }
              result2 = false;
              break;
            }
            if (seen) {
              if (!arraySome(other, function(othValue2, othIndex) {
                if (!cacheHas(seen, othIndex) && (arrValue === othValue2 || equalFunc(arrValue, othValue2, bitmask, customizer, stack))) {
                  return seen.push(othIndex);
                }
              })) {
                result2 = false;
                break;
              }
            } else if (!(arrValue === othValue || equalFunc(arrValue, othValue, bitmask, customizer, stack))) {
              result2 = false;
              break;
            }
          }
          stack["delete"](array2);
          stack["delete"](other);
          return result2;
        }
        function equalByTag(object2, other, tag, bitmask, customizer, equalFunc, stack) {
          switch (tag) {
            case dataViewTag:
              if (object2.byteLength != other.byteLength || object2.byteOffset != other.byteOffset) {
                return false;
              }
              object2 = object2.buffer;
              other = other.buffer;
            case arrayBufferTag:
              if (object2.byteLength != other.byteLength || !equalFunc(new Uint8Array2(object2), new Uint8Array2(other))) {
                return false;
              }
              return true;
            case boolTag:
            case dateTag:
            case numberTag:
              return eq(+object2, +other);
            case errorTag:
              return object2.name == other.name && object2.message == other.message;
            case regexpTag:
            case stringTag:
              return object2 == other + "";
            case mapTag:
              var convert = mapToArray;
            case setTag:
              var isPartial = bitmask & COMPARE_PARTIAL_FLAG;
              convert || (convert = setToArray);
              if (object2.size != other.size && !isPartial) {
                return false;
              }
              var stacked = stack.get(object2);
              if (stacked) {
                return stacked == other;
              }
              bitmask |= COMPARE_UNORDERED_FLAG;
              stack.set(object2, other);
              var result2 = equalArrays(convert(object2), convert(other), bitmask, customizer, equalFunc, stack);
              stack["delete"](object2);
              return result2;
            case symbolTag:
              if (symbolValueOf) {
                return symbolValueOf.call(object2) == symbolValueOf.call(other);
              }
          }
          return false;
        }
        function equalObjects(object2, other, bitmask, customizer, equalFunc, stack) {
          var isPartial = bitmask & COMPARE_PARTIAL_FLAG, objProps = getAllKeys(object2), objLength = objProps.length, othProps = getAllKeys(other), othLength = othProps.length;
          if (objLength != othLength && !isPartial) {
            return false;
          }
          var index = objLength;
          while (index--) {
            var key = objProps[index];
            if (!(isPartial ? key in other : hasOwnProperty.call(other, key))) {
              return false;
            }
          }
          var objStacked = stack.get(object2);
          var othStacked = stack.get(other);
          if (objStacked && othStacked) {
            return objStacked == other && othStacked == object2;
          }
          var result2 = true;
          stack.set(object2, other);
          stack.set(other, object2);
          var skipCtor = isPartial;
          while (++index < objLength) {
            key = objProps[index];
            var objValue = object2[key], othValue = other[key];
            if (customizer) {
              var compared = isPartial ? customizer(othValue, objValue, key, other, object2, stack) : customizer(objValue, othValue, key, object2, other, stack);
            }
            if (!(compared === undefined2 ? objValue === othValue || equalFunc(objValue, othValue, bitmask, customizer, stack) : compared)) {
              result2 = false;
              break;
            }
            skipCtor || (skipCtor = key == "constructor");
          }
          if (result2 && !skipCtor) {
            var objCtor = object2.constructor, othCtor = other.constructor;
            if (objCtor != othCtor && ("constructor" in object2 && "constructor" in other) && !(typeof objCtor == "function" && objCtor instanceof objCtor && typeof othCtor == "function" && othCtor instanceof othCtor)) {
              result2 = false;
            }
          }
          stack["delete"](object2);
          stack["delete"](other);
          return result2;
        }
        function flatRest(func) {
          return setToString(overRest(func, undefined2, flatten), func + "");
        }
        function getAllKeys(object2) {
          return baseGetAllKeys(object2, keys, getSymbols);
        }
        function getAllKeysIn(object2) {
          return baseGetAllKeys(object2, keysIn, getSymbolsIn);
        }
        var getData = !metaMap ? noop : function(func) {
          return metaMap.get(func);
        };
        function getFuncName(func) {
          var result2 = func.name + "", array2 = realNames[result2], length = hasOwnProperty.call(realNames, result2) ? array2.length : 0;
          while (length--) {
            var data = array2[length], otherFunc = data.func;
            if (otherFunc == null || otherFunc == func) {
              return data.name;
            }
          }
          return result2;
        }
        function getHolder(func) {
          var object2 = hasOwnProperty.call(lodash, "placeholder") ? lodash : func;
          return object2.placeholder;
        }
        function getIteratee() {
          var result2 = lodash.iteratee || iteratee;
          result2 = result2 === iteratee ? baseIteratee : result2;
          return arguments.length ? result2(arguments[0], arguments[1]) : result2;
        }
        function getMapData(map2, key) {
          var data = map2.__data__;
          return isKeyable(key) ? data[typeof key == "string" ? "string" : "hash"] : data.map;
        }
        function getMatchData(object2) {
          var result2 = keys(object2), length = result2.length;
          while (length--) {
            var key = result2[length], value = object2[key];
            result2[length] = [key, value, isStrictComparable(value)];
          }
          return result2;
        }
        function getNative(object2, key) {
          var value = getValue3(object2, key);
          return baseIsNative(value) ? value : undefined2;
        }
        function getRawTag(value) {
          var isOwn = hasOwnProperty.call(value, symToStringTag), tag = value[symToStringTag];
          try {
            value[symToStringTag] = undefined2;
            var unmasked = true;
          } catch (e) {
          }
          var result2 = nativeObjectToString.call(value);
          if (unmasked) {
            if (isOwn) {
              value[symToStringTag] = tag;
            } else {
              delete value[symToStringTag];
            }
          }
          return result2;
        }
        var getSymbols = !nativeGetSymbols ? stubArray : function(object2) {
          if (object2 == null) {
            return [];
          }
          object2 = Object2(object2);
          return arrayFilter(nativeGetSymbols(object2), function(symbol) {
            return propertyIsEnumerable.call(object2, symbol);
          });
        };
        var getSymbolsIn = !nativeGetSymbols ? stubArray : function(object2) {
          var result2 = [];
          while (object2) {
            arrayPush(result2, getSymbols(object2));
            object2 = getPrototype(object2);
          }
          return result2;
        };
        var getTag = baseGetTag;
        if (DataView && getTag(new DataView(new ArrayBuffer(1))) != dataViewTag || Map && getTag(new Map()) != mapTag || Promise2 && getTag(Promise2.resolve()) != promiseTag || Set && getTag(new Set()) != setTag || WeakMap && getTag(new WeakMap()) != weakMapTag) {
          getTag = function(value) {
            var result2 = baseGetTag(value), Ctor = result2 == objectTag ? value.constructor : undefined2, ctorString = Ctor ? toSource(Ctor) : "";
            if (ctorString) {
              switch (ctorString) {
                case dataViewCtorString:
                  return dataViewTag;
                case mapCtorString:
                  return mapTag;
                case promiseCtorString:
                  return promiseTag;
                case setCtorString:
                  return setTag;
                case weakMapCtorString:
                  return weakMapTag;
              }
            }
            return result2;
          };
        }
        function getView(start, end, transforms2) {
          var index = -1, length = transforms2.length;
          while (++index < length) {
            var data = transforms2[index], size3 = data.size;
            switch (data.type) {
              case "drop":
                start += size3;
                break;
              case "dropRight":
                end -= size3;
                break;
              case "take":
                end = nativeMin(end, start + size3);
                break;
              case "takeRight":
                start = nativeMax(start, end - size3);
                break;
            }
          }
          return { "start": start, "end": end };
        }
        function getWrapDetails(source) {
          var match = source.match(reWrapDetails);
          return match ? match[1].split(reSplitDetails) : [];
        }
        function hasPath(object2, path, hasFunc) {
          path = castPath(path, object2);
          var index = -1, length = path.length, result2 = false;
          while (++index < length) {
            var key = toKey(path[index]);
            if (!(result2 = object2 != null && hasFunc(object2, key))) {
              break;
            }
            object2 = object2[key];
          }
          if (result2 || ++index != length) {
            return result2;
          }
          length = object2 == null ? 0 : object2.length;
          return !!length && isLength(length) && isIndex(key, length) && (isArray(object2) || isArguments(object2));
        }
        function initCloneArray(array2) {
          var length = array2.length, result2 = new array2.constructor(length);
          if (length && typeof array2[0] == "string" && hasOwnProperty.call(array2, "index")) {
            result2.index = array2.index;
            result2.input = array2.input;
          }
          return result2;
        }
        function initCloneObject(object2) {
          return typeof object2.constructor == "function" && !isPrototype(object2) ? baseCreate(getPrototype(object2)) : {};
        }
        function initCloneByTag(object2, tag, isDeep) {
          var Ctor = object2.constructor;
          switch (tag) {
            case arrayBufferTag:
              return cloneArrayBuffer(object2);
            case boolTag:
            case dateTag:
              return new Ctor(+object2);
            case dataViewTag:
              return cloneDataView(object2, isDeep);
            case float32Tag:
            case float64Tag:
            case int8Tag:
            case int16Tag:
            case int32Tag:
            case uint8Tag:
            case uint8ClampedTag:
            case uint16Tag:
            case uint32Tag:
              return cloneTypedArray(object2, isDeep);
            case mapTag:
              return new Ctor();
            case numberTag:
            case stringTag:
              return new Ctor(object2);
            case regexpTag:
              return cloneRegExp(object2);
            case setTag:
              return new Ctor();
            case symbolTag:
              return cloneSymbol(object2);
          }
        }
        function insertWrapDetails(source, details) {
          var length = details.length;
          if (!length) {
            return source;
          }
          var lastIndex = length - 1;
          details[lastIndex] = (length > 1 ? "& " : "") + details[lastIndex];
          details = details.join(length > 2 ? ", " : " ");
          return source.replace(reWrapComment, "{\n/* [wrapped with " + details + "] */\n");
        }
        function isFlattenable(value) {
          return isArray(value) || isArguments(value) || !!(spreadableSymbol && value && value[spreadableSymbol]);
        }
        function isIndex(value, length) {
          var type = typeof value;
          length = length == null ? MAX_SAFE_INTEGER : length;
          return !!length && (type == "number" || type != "symbol" && reIsUint.test(value)) && (value > -1 && value % 1 == 0 && value < length);
        }
        function isIterateeCall(value, index, object2) {
          if (!isObject(object2)) {
            return false;
          }
          var type = typeof index;
          if (type == "number" ? isArrayLike(object2) && isIndex(index, object2.length) : type == "string" && index in object2) {
            return eq(object2[index], value);
          }
          return false;
        }
        function isKey(value, object2) {
          if (isArray(value)) {
            return false;
          }
          var type = typeof value;
          if (type == "number" || type == "symbol" || type == "boolean" || value == null || isSymbol(value)) {
            return true;
          }
          return reIsPlainProp.test(value) || !reIsDeepProp.test(value) || object2 != null && value in Object2(object2);
        }
        function isKeyable(value) {
          var type = typeof value;
          return type == "string" || type == "number" || type == "symbol" || type == "boolean" ? value !== "__proto__" : value === null;
        }
        function isLaziable(func) {
          var funcName = getFuncName(func), other = lodash[funcName];
          if (typeof other != "function" || !(funcName in LazyWrapper.prototype)) {
            return false;
          }
          if (func === other) {
            return true;
          }
          var data = getData(other);
          return !!data && func === data[0];
        }
        function isMasked(func) {
          return !!maskSrcKey && maskSrcKey in func;
        }
        var isMaskable = coreJsData ? isFunction : stubFalse;
        function isPrototype(value) {
          var Ctor = value && value.constructor, proto = typeof Ctor == "function" && Ctor.prototype || objectProto;
          return value === proto;
        }
        function isStrictComparable(value) {
          return value === value && !isObject(value);
        }
        function matchesStrictComparable(key, srcValue) {
          return function(object2) {
            if (object2 == null) {
              return false;
            }
            return object2[key] === srcValue && (srcValue !== undefined2 || key in Object2(object2));
          };
        }
        function memoizeCapped(func) {
          var result2 = memoize(func, function(key) {
            if (cache.size === MAX_MEMOIZE_SIZE) {
              cache.clear();
            }
            return key;
          });
          var cache = result2.cache;
          return result2;
        }
        function mergeData(data, source) {
          var bitmask = data[1], srcBitmask = source[1], newBitmask = bitmask | srcBitmask, isCommon = newBitmask < (WRAP_BIND_FLAG | WRAP_BIND_KEY_FLAG | WRAP_ARY_FLAG);
          var isCombo = srcBitmask == WRAP_ARY_FLAG && bitmask == WRAP_CURRY_FLAG || srcBitmask == WRAP_ARY_FLAG && bitmask == WRAP_REARG_FLAG && data[7].length <= source[8] || srcBitmask == (WRAP_ARY_FLAG | WRAP_REARG_FLAG) && source[7].length <= source[8] && bitmask == WRAP_CURRY_FLAG;
          if (!(isCommon || isCombo)) {
            return data;
          }
          if (srcBitmask & WRAP_BIND_FLAG) {
            data[2] = source[2];
            newBitmask |= bitmask & WRAP_BIND_FLAG ? 0 : WRAP_CURRY_BOUND_FLAG;
          }
          var value = source[3];
          if (value) {
            var partials = data[3];
            data[3] = partials ? composeArgs(partials, value, source[4]) : value;
            data[4] = partials ? replaceHolders(data[3], PLACEHOLDER) : source[4];
          }
          value = source[5];
          if (value) {
            partials = data[5];
            data[5] = partials ? composeArgsRight(partials, value, source[6]) : value;
            data[6] = partials ? replaceHolders(data[5], PLACEHOLDER) : source[6];
          }
          value = source[7];
          if (value) {
            data[7] = value;
          }
          if (srcBitmask & WRAP_ARY_FLAG) {
            data[8] = data[8] == null ? source[8] : nativeMin(data[8], source[8]);
          }
          if (data[9] == null) {
            data[9] = source[9];
          }
          data[0] = source[0];
          data[1] = newBitmask;
          return data;
        }
        function nativeKeysIn(object2) {
          var result2 = [];
          if (object2 != null) {
            for (var key in Object2(object2)) {
              result2.push(key);
            }
          }
          return result2;
        }
        function objectToString(value) {
          return nativeObjectToString.call(value);
        }
        function overRest(func, start, transform2) {
          start = nativeMax(start === undefined2 ? func.length - 1 : start, 0);
          return function() {
            var args = arguments, index = -1, length = nativeMax(args.length - start, 0), array2 = Array2(length);
            while (++index < length) {
              array2[index] = args[start + index];
            }
            index = -1;
            var otherArgs = Array2(start + 1);
            while (++index < start) {
              otherArgs[index] = args[index];
            }
            otherArgs[start] = transform2(array2);
            return apply(func, this, otherArgs);
          };
        }
        function parent(object2, path) {
          return path.length < 2 ? object2 : baseGet(object2, baseSlice(path, 0, -1));
        }
        function reorder(array2, indexes) {
          var arrLength = array2.length, length = nativeMin(indexes.length, arrLength), oldArray = copyArray(array2);
          while (length--) {
            var index = indexes[length];
            array2[length] = isIndex(index, arrLength) ? oldArray[index] : undefined2;
          }
          return array2;
        }
        function safeGet(object2, key) {
          if (key === "constructor" && typeof object2[key] === "function") {
            return;
          }
          if (key == "__proto__") {
            return;
          }
          return object2[key];
        }
        var setData = shortOut(baseSetData);
        var setTimeout2 = ctxSetTimeout || function(func, wait) {
          return root.setTimeout(func, wait);
        };
        var setToString = shortOut(baseSetToString);
        function setWrapToString(wrapper, reference, bitmask) {
          var source = reference + "";
          return setToString(wrapper, insertWrapDetails(source, updateWrapDetails(getWrapDetails(source), bitmask)));
        }
        function shortOut(func) {
          var count = 0, lastCalled = 0;
          return function() {
            var stamp = nativeNow(), remaining = HOT_SPAN - (stamp - lastCalled);
            lastCalled = stamp;
            if (remaining > 0) {
              if (++count >= HOT_COUNT) {
                return arguments[0];
              }
            } else {
              count = 0;
            }
            return func.apply(undefined2, arguments);
          };
        }
        function shuffleSelf(array2, size3) {
          var index = -1, length = array2.length, lastIndex = length - 1;
          size3 = size3 === undefined2 ? length : size3;
          while (++index < size3) {
            var rand = baseRandom(index, lastIndex), value = array2[rand];
            array2[rand] = array2[index];
            array2[index] = value;
          }
          array2.length = size3;
          return array2;
        }
        var stringToPath = memoizeCapped(function(string2) {
          var result2 = [];
          if (string2.charCodeAt(0) === 46) {
            result2.push("");
          }
          string2.replace(rePropName, function(match, number, quote, subString) {
            result2.push(quote ? subString.replace(reEscapeChar, "$1") : number || match);
          });
          return result2;
        });
        function toKey(value) {
          if (typeof value == "string" || isSymbol(value)) {
            return value;
          }
          var result2 = value + "";
          return result2 == "0" && 1 / value == -INFINITY ? "-0" : result2;
        }
        function toSource(func) {
          if (func != null) {
            try {
              return funcToString.call(func);
            } catch (e) {
            }
            try {
              return func + "";
            } catch (e) {
            }
          }
          return "";
        }
        function updateWrapDetails(details, bitmask) {
          arrayEach(wrapFlags, function(pair) {
            var value = "_." + pair[0];
            if (bitmask & pair[1] && !arrayIncludes(details, value)) {
              details.push(value);
            }
          });
          return details.sort();
        }
        function wrapperClone(wrapper) {
          if (wrapper instanceof LazyWrapper) {
            return wrapper.clone();
          }
          var result2 = new LodashWrapper(wrapper.__wrapped__, wrapper.__chain__);
          result2.__actions__ = copyArray(wrapper.__actions__);
          result2.__index__ = wrapper.__index__;
          result2.__values__ = wrapper.__values__;
          return result2;
        }
        function chunk(array2, size3, guard) {
          if (guard ? isIterateeCall(array2, size3, guard) : size3 === undefined2) {
            size3 = 1;
          } else {
            size3 = nativeMax(toInteger(size3), 0);
          }
          var length = array2 == null ? 0 : array2.length;
          if (!length || size3 < 1) {
            return [];
          }
          var index = 0, resIndex = 0, result2 = Array2(nativeCeil(length / size3));
          while (index < length) {
            result2[resIndex++] = baseSlice(array2, index, index += size3);
          }
          return result2;
        }
        function compact(array2) {
          var index = -1, length = array2 == null ? 0 : array2.length, resIndex = 0, result2 = [];
          while (++index < length) {
            var value = array2[index];
            if (value) {
              result2[resIndex++] = value;
            }
          }
          return result2;
        }
        function concat() {
          var length = arguments.length;
          if (!length) {
            return [];
          }
          var args = Array2(length - 1), array2 = arguments[0], index = length;
          while (index--) {
            args[index - 1] = arguments[index];
          }
          return arrayPush(isArray(array2) ? copyArray(array2) : [array2], baseFlatten(args, 1));
        }
        var difference = baseRest(function(array2, values2) {
          return isArrayLikeObject(array2) ? baseDifference(array2, baseFlatten(values2, 1, isArrayLikeObject, true)) : [];
        });
        var differenceBy = baseRest(function(array2, values2) {
          var iteratee2 = last(values2);
          if (isArrayLikeObject(iteratee2)) {
            iteratee2 = undefined2;
          }
          return isArrayLikeObject(array2) ? baseDifference(array2, baseFlatten(values2, 1, isArrayLikeObject, true), getIteratee(iteratee2, 2)) : [];
        });
        var differenceWith = baseRest(function(array2, values2) {
          var comparator = last(values2);
          if (isArrayLikeObject(comparator)) {
            comparator = undefined2;
          }
          return isArrayLikeObject(array2) ? baseDifference(array2, baseFlatten(values2, 1, isArrayLikeObject, true), undefined2, comparator) : [];
        });
        function drop(array2, n, guard) {
          var length = array2 == null ? 0 : array2.length;
          if (!length) {
            return [];
          }
          n = guard || n === undefined2 ? 1 : toInteger(n);
          return baseSlice(array2, n < 0 ? 0 : n, length);
        }
        function dropRight(array2, n, guard) {
          var length = array2 == null ? 0 : array2.length;
          if (!length) {
            return [];
          }
          n = guard || n === undefined2 ? 1 : toInteger(n);
          n = length - n;
          return baseSlice(array2, 0, n < 0 ? 0 : n);
        }
        function dropRightWhile(array2, predicate) {
          return array2 && array2.length ? baseWhile(array2, getIteratee(predicate, 3), true, true) : [];
        }
        function dropWhile(array2, predicate) {
          return array2 && array2.length ? baseWhile(array2, getIteratee(predicate, 3), true) : [];
        }
        function fill(array2, value, start, end) {
          var length = array2 == null ? 0 : array2.length;
          if (!length) {
            return [];
          }
          if (start && typeof start != "number" && isIterateeCall(array2, value, start)) {
            start = 0;
            end = length;
          }
          return baseFill(array2, value, start, end);
        }
        function findIndex(array2, predicate, fromIndex) {
          var length = array2 == null ? 0 : array2.length;
          if (!length) {
            return -1;
          }
          var index = fromIndex == null ? 0 : toInteger(fromIndex);
          if (index < 0) {
            index = nativeMax(length + index, 0);
          }
          return baseFindIndex(array2, getIteratee(predicate, 3), index);
        }
        function findLastIndex(array2, predicate, fromIndex) {
          var length = array2 == null ? 0 : array2.length;
          if (!length) {
            return -1;
          }
          var index = length - 1;
          if (fromIndex !== undefined2) {
            index = toInteger(fromIndex);
            index = fromIndex < 0 ? nativeMax(length + index, 0) : nativeMin(index, length - 1);
          }
          return baseFindIndex(array2, getIteratee(predicate, 3), index, true);
        }
        function flatten(array2) {
          var length = array2 == null ? 0 : array2.length;
          return length ? baseFlatten(array2, 1) : [];
        }
        function flattenDeep(array2) {
          var length = array2 == null ? 0 : array2.length;
          return length ? baseFlatten(array2, INFINITY) : [];
        }
        function flattenDepth(array2, depth) {
          var length = array2 == null ? 0 : array2.length;
          if (!length) {
            return [];
          }
          depth = depth === undefined2 ? 1 : toInteger(depth);
          return baseFlatten(array2, depth);
        }
        function fromPairs(pairs) {
          var index = -1, length = pairs == null ? 0 : pairs.length, result2 = {};
          while (++index < length) {
            var pair = pairs[index];
            result2[pair[0]] = pair[1];
          }
          return result2;
        }
        function head(array2) {
          return array2 && array2.length ? array2[0] : undefined2;
        }
        function indexOf(array2, value, fromIndex) {
          var length = array2 == null ? 0 : array2.length;
          if (!length) {
            return -1;
          }
          var index = fromIndex == null ? 0 : toInteger(fromIndex);
          if (index < 0) {
            index = nativeMax(length + index, 0);
          }
          return baseIndexOf(array2, value, index);
        }
        function initial(array2) {
          var length = array2 == null ? 0 : array2.length;
          return length ? baseSlice(array2, 0, -1) : [];
        }
        var intersection = baseRest(function(arrays) {
          var mapped = arrayMap(arrays, castArrayLikeObject);
          return mapped.length && mapped[0] === arrays[0] ? baseIntersection(mapped) : [];
        });
        var intersectionBy = baseRest(function(arrays) {
          var iteratee2 = last(arrays), mapped = arrayMap(arrays, castArrayLikeObject);
          if (iteratee2 === last(mapped)) {
            iteratee2 = undefined2;
          } else {
            mapped.pop();
          }
          return mapped.length && mapped[0] === arrays[0] ? baseIntersection(mapped, getIteratee(iteratee2, 2)) : [];
        });
        var intersectionWith = baseRest(function(arrays) {
          var comparator = last(arrays), mapped = arrayMap(arrays, castArrayLikeObject);
          comparator = typeof comparator == "function" ? comparator : undefined2;
          if (comparator) {
            mapped.pop();
          }
          return mapped.length && mapped[0] === arrays[0] ? baseIntersection(mapped, undefined2, comparator) : [];
        });
        function join(array2, separator) {
          return array2 == null ? "" : nativeJoin.call(array2, separator);
        }
        function last(array2) {
          var length = array2 == null ? 0 : array2.length;
          return length ? array2[length - 1] : undefined2;
        }
        function lastIndexOf(array2, value, fromIndex) {
          var length = array2 == null ? 0 : array2.length;
          if (!length) {
            return -1;
          }
          var index = length;
          if (fromIndex !== undefined2) {
            index = toInteger(fromIndex);
            index = index < 0 ? nativeMax(length + index, 0) : nativeMin(index, length - 1);
          }
          return value === value ? strictLastIndexOf(array2, value, index) : baseFindIndex(array2, baseIsNaN, index, true);
        }
        function nth(array2, n) {
          return array2 && array2.length ? baseNth(array2, toInteger(n)) : undefined2;
        }
        var pull = baseRest(pullAll);
        function pullAll(array2, values2) {
          return array2 && array2.length && values2 && values2.length ? basePullAll(array2, values2) : array2;
        }
        function pullAllBy(array2, values2, iteratee2) {
          return array2 && array2.length && values2 && values2.length ? basePullAll(array2, values2, getIteratee(iteratee2, 2)) : array2;
        }
        function pullAllWith(array2, values2, comparator) {
          return array2 && array2.length && values2 && values2.length ? basePullAll(array2, values2, undefined2, comparator) : array2;
        }
        var pullAt = flatRest(function(array2, indexes) {
          var length = array2 == null ? 0 : array2.length, result2 = baseAt(array2, indexes);
          basePullAt(array2, arrayMap(indexes, function(index) {
            return isIndex(index, length) ? +index : index;
          }).sort(compareAscending));
          return result2;
        });
        function remove(array2, predicate) {
          var result2 = [];
          if (!(array2 && array2.length)) {
            return result2;
          }
          var index = -1, indexes = [], length = array2.length;
          predicate = getIteratee(predicate, 3);
          while (++index < length) {
            var value = array2[index];
            if (predicate(value, index, array2)) {
              result2.push(value);
              indexes.push(index);
            }
          }
          basePullAt(array2, indexes);
          return result2;
        }
        function reverse(array2) {
          return array2 == null ? array2 : nativeReverse.call(array2);
        }
        function slice(array2, start, end) {
          var length = array2 == null ? 0 : array2.length;
          if (!length) {
            return [];
          }
          if (end && typeof end != "number" && isIterateeCall(array2, start, end)) {
            start = 0;
            end = length;
          } else {
            start = start == null ? 0 : toInteger(start);
            end = end === undefined2 ? length : toInteger(end);
          }
          return baseSlice(array2, start, end);
        }
        function sortedIndex(array2, value) {
          return baseSortedIndex(array2, value);
        }
        function sortedIndexBy(array2, value, iteratee2) {
          return baseSortedIndexBy(array2, value, getIteratee(iteratee2, 2));
        }
        function sortedIndexOf(array2, value) {
          var length = array2 == null ? 0 : array2.length;
          if (length) {
            var index = baseSortedIndex(array2, value);
            if (index < length && eq(array2[index], value)) {
              return index;
            }
          }
          return -1;
        }
        function sortedLastIndex(array2, value) {
          return baseSortedIndex(array2, value, true);
        }
        function sortedLastIndexBy(array2, value, iteratee2) {
          return baseSortedIndexBy(array2, value, getIteratee(iteratee2, 2), true);
        }
        function sortedLastIndexOf(array2, value) {
          var length = array2 == null ? 0 : array2.length;
          if (length) {
            var index = baseSortedIndex(array2, value, true) - 1;
            if (eq(array2[index], value)) {
              return index;
            }
          }
          return -1;
        }
        function sortedUniq(array2) {
          return array2 && array2.length ? baseSortedUniq(array2) : [];
        }
        function sortedUniqBy(array2, iteratee2) {
          return array2 && array2.length ? baseSortedUniq(array2, getIteratee(iteratee2, 2)) : [];
        }
        function tail(array2) {
          var length = array2 == null ? 0 : array2.length;
          return length ? baseSlice(array2, 1, length) : [];
        }
        function take(array2, n, guard) {
          if (!(array2 && array2.length)) {
            return [];
          }
          n = guard || n === undefined2 ? 1 : toInteger(n);
          return baseSlice(array2, 0, n < 0 ? 0 : n);
        }
        function takeRight(array2, n, guard) {
          var length = array2 == null ? 0 : array2.length;
          if (!length) {
            return [];
          }
          n = guard || n === undefined2 ? 1 : toInteger(n);
          n = length - n;
          return baseSlice(array2, n < 0 ? 0 : n, length);
        }
        function takeRightWhile(array2, predicate) {
          return array2 && array2.length ? baseWhile(array2, getIteratee(predicate, 3), false, true) : [];
        }
        function takeWhile(array2, predicate) {
          return array2 && array2.length ? baseWhile(array2, getIteratee(predicate, 3)) : [];
        }
        var union = baseRest(function(arrays) {
          return baseUniq(baseFlatten(arrays, 1, isArrayLikeObject, true));
        });
        var unionBy = baseRest(function(arrays) {
          var iteratee2 = last(arrays);
          if (isArrayLikeObject(iteratee2)) {
            iteratee2 = undefined2;
          }
          return baseUniq(baseFlatten(arrays, 1, isArrayLikeObject, true), getIteratee(iteratee2, 2));
        });
        var unionWith = baseRest(function(arrays) {
          var comparator = last(arrays);
          comparator = typeof comparator == "function" ? comparator : undefined2;
          return baseUniq(baseFlatten(arrays, 1, isArrayLikeObject, true), undefined2, comparator);
        });
        function uniq(array2) {
          return array2 && array2.length ? baseUniq(array2) : [];
        }
        function uniqBy(array2, iteratee2) {
          return array2 && array2.length ? baseUniq(array2, getIteratee(iteratee2, 2)) : [];
        }
        function uniqWith(array2, comparator) {
          comparator = typeof comparator == "function" ? comparator : undefined2;
          return array2 && array2.length ? baseUniq(array2, undefined2, comparator) : [];
        }
        function unzip(array2) {
          if (!(array2 && array2.length)) {
            return [];
          }
          var length = 0;
          array2 = arrayFilter(array2, function(group) {
            if (isArrayLikeObject(group)) {
              length = nativeMax(group.length, length);
              return true;
            }
          });
          return baseTimes(length, function(index) {
            return arrayMap(array2, baseProperty(index));
          });
        }
        function unzipWith(array2, iteratee2) {
          if (!(array2 && array2.length)) {
            return [];
          }
          var result2 = unzip(array2);
          if (iteratee2 == null) {
            return result2;
          }
          return arrayMap(result2, function(group) {
            return apply(iteratee2, undefined2, group);
          });
        }
        var without = baseRest(function(array2, values2) {
          return isArrayLikeObject(array2) ? baseDifference(array2, values2) : [];
        });
        var xor = baseRest(function(arrays) {
          return baseXor(arrayFilter(arrays, isArrayLikeObject));
        });
        var xorBy = baseRest(function(arrays) {
          var iteratee2 = last(arrays);
          if (isArrayLikeObject(iteratee2)) {
            iteratee2 = undefined2;
          }
          return baseXor(arrayFilter(arrays, isArrayLikeObject), getIteratee(iteratee2, 2));
        });
        var xorWith = baseRest(function(arrays) {
          var comparator = last(arrays);
          comparator = typeof comparator == "function" ? comparator : undefined2;
          return baseXor(arrayFilter(arrays, isArrayLikeObject), undefined2, comparator);
        });
        var zip = baseRest(unzip);
        function zipObject(props, values2) {
          return baseZipObject(props || [], values2 || [], assignValue);
        }
        function zipObjectDeep(props, values2) {
          return baseZipObject(props || [], values2 || [], baseSet);
        }
        var zipWith = baseRest(function(arrays) {
          var length = arrays.length, iteratee2 = length > 1 ? arrays[length - 1] : undefined2;
          iteratee2 = typeof iteratee2 == "function" ? (arrays.pop(), iteratee2) : undefined2;
          return unzipWith(arrays, iteratee2);
        });
        function chain(value) {
          var result2 = lodash(value);
          result2.__chain__ = true;
          return result2;
        }
        function tap(value, interceptor) {
          interceptor(value);
          return value;
        }
        function thru(value, interceptor) {
          return interceptor(value);
        }
        var wrapperAt = flatRest(function(paths) {
          var length = paths.length, start = length ? paths[0] : 0, value = this.__wrapped__, interceptor = function(object2) {
            return baseAt(object2, paths);
          };
          if (length > 1 || this.__actions__.length || !(value instanceof LazyWrapper) || !isIndex(start)) {
            return this.thru(interceptor);
          }
          value = value.slice(start, +start + (length ? 1 : 0));
          value.__actions__.push({
            "func": thru,
            "args": [interceptor],
            "thisArg": undefined2
          });
          return new LodashWrapper(value, this.__chain__).thru(function(array2) {
            if (length && !array2.length) {
              array2.push(undefined2);
            }
            return array2;
          });
        });
        function wrapperChain() {
          return chain(this);
        }
        function wrapperCommit() {
          return new LodashWrapper(this.value(), this.__chain__);
        }
        function wrapperNext() {
          if (this.__values__ === undefined2) {
            this.__values__ = toArray(this.value());
          }
          var done = this.__index__ >= this.__values__.length, value = done ? undefined2 : this.__values__[this.__index__++];
          return { "done": done, "value": value };
        }
        function wrapperToIterator() {
          return this;
        }
        function wrapperPlant(value) {
          var result2, parent2 = this;
          while (parent2 instanceof baseLodash) {
            var clone2 = wrapperClone(parent2);
            clone2.__index__ = 0;
            clone2.__values__ = undefined2;
            if (result2) {
              previous.__wrapped__ = clone2;
            } else {
              result2 = clone2;
            }
            var previous = clone2;
            parent2 = parent2.__wrapped__;
          }
          previous.__wrapped__ = value;
          return result2;
        }
        function wrapperReverse() {
          var value = this.__wrapped__;
          if (value instanceof LazyWrapper) {
            var wrapped = value;
            if (this.__actions__.length) {
              wrapped = new LazyWrapper(this);
            }
            wrapped = wrapped.reverse();
            wrapped.__actions__.push({
              "func": thru,
              "args": [reverse],
              "thisArg": undefined2
            });
            return new LodashWrapper(wrapped, this.__chain__);
          }
          return this.thru(reverse);
        }
        function wrapperValue() {
          return baseWrapperValue(this.__wrapped__, this.__actions__);
        }
        var countBy = createAggregator(function(result2, value, key) {
          if (hasOwnProperty.call(result2, key)) {
            ++result2[key];
          } else {
            baseAssignValue(result2, key, 1);
          }
        });
        function every(collection, predicate, guard) {
          var func = isArray(collection) ? arrayEvery : baseEvery;
          if (guard && isIterateeCall(collection, predicate, guard)) {
            predicate = undefined2;
          }
          return func(collection, getIteratee(predicate, 3));
        }
        function filter(collection, predicate) {
          var func = isArray(collection) ? arrayFilter : baseFilter;
          return func(collection, getIteratee(predicate, 3));
        }
        var find = createFind(findIndex);
        var findLast = createFind(findLastIndex);
        function flatMap(collection, iteratee2) {
          return baseFlatten(map(collection, iteratee2), 1);
        }
        function flatMapDeep(collection, iteratee2) {
          return baseFlatten(map(collection, iteratee2), INFINITY);
        }
        function flatMapDepth(collection, iteratee2, depth) {
          depth = depth === undefined2 ? 1 : toInteger(depth);
          return baseFlatten(map(collection, iteratee2), depth);
        }
        function forEach(collection, iteratee2) {
          var func = isArray(collection) ? arrayEach : baseEach;
          return func(collection, getIteratee(iteratee2, 3));
        }
        function forEachRight(collection, iteratee2) {
          var func = isArray(collection) ? arrayEachRight : baseEachRight;
          return func(collection, getIteratee(iteratee2, 3));
        }
        var groupBy = createAggregator(function(result2, value, key) {
          if (hasOwnProperty.call(result2, key)) {
            result2[key].push(value);
          } else {
            baseAssignValue(result2, key, [value]);
          }
        });
        function includes(collection, value, fromIndex, guard) {
          collection = isArrayLike(collection) ? collection : values(collection);
          fromIndex = fromIndex && !guard ? toInteger(fromIndex) : 0;
          var length = collection.length;
          if (fromIndex < 0) {
            fromIndex = nativeMax(length + fromIndex, 0);
          }
          return isString(collection) ? fromIndex <= length && collection.indexOf(value, fromIndex) > -1 : !!length && baseIndexOf(collection, value, fromIndex) > -1;
        }
        var invokeMap = baseRest(function(collection, path, args) {
          var index = -1, isFunc = typeof path == "function", result2 = isArrayLike(collection) ? Array2(collection.length) : [];
          baseEach(collection, function(value) {
            result2[++index] = isFunc ? apply(path, value, args) : baseInvoke(value, path, args);
          });
          return result2;
        });
        var keyBy = createAggregator(function(result2, value, key) {
          baseAssignValue(result2, key, value);
        });
        function map(collection, iteratee2) {
          var func = isArray(collection) ? arrayMap : baseMap;
          return func(collection, getIteratee(iteratee2, 3));
        }
        function orderBy(collection, iteratees, orders, guard) {
          if (collection == null) {
            return [];
          }
          if (!isArray(iteratees)) {
            iteratees = iteratees == null ? [] : [iteratees];
          }
          orders = guard ? undefined2 : orders;
          if (!isArray(orders)) {
            orders = orders == null ? [] : [orders];
          }
          return baseOrderBy(collection, iteratees, orders);
        }
        var partition = createAggregator(function(result2, value, key) {
          result2[key ? 0 : 1].push(value);
        }, function() {
          return [[], []];
        });
        function reduce(collection, iteratee2, accumulator) {
          var func = isArray(collection) ? arrayReduce : baseReduce, initAccum = arguments.length < 3;
          return func(collection, getIteratee(iteratee2, 4), accumulator, initAccum, baseEach);
        }
        function reduceRight(collection, iteratee2, accumulator) {
          var func = isArray(collection) ? arrayReduceRight : baseReduce, initAccum = arguments.length < 3;
          return func(collection, getIteratee(iteratee2, 4), accumulator, initAccum, baseEachRight);
        }
        function reject(collection, predicate) {
          var func = isArray(collection) ? arrayFilter : baseFilter;
          return func(collection, negate(getIteratee(predicate, 3)));
        }
        function sample(collection) {
          var func = isArray(collection) ? arraySample : baseSample;
          return func(collection);
        }
        function sampleSize(collection, n, guard) {
          if (guard ? isIterateeCall(collection, n, guard) : n === undefined2) {
            n = 1;
          } else {
            n = toInteger(n);
          }
          var func = isArray(collection) ? arraySampleSize : baseSampleSize;
          return func(collection, n);
        }
        function shuffle(collection) {
          var func = isArray(collection) ? arrayShuffle : baseShuffle;
          return func(collection);
        }
        function size2(collection) {
          if (collection == null) {
            return 0;
          }
          if (isArrayLike(collection)) {
            return isString(collection) ? stringSize(collection) : collection.length;
          }
          var tag = getTag(collection);
          if (tag == mapTag || tag == setTag) {
            return collection.size;
          }
          return baseKeys(collection).length;
        }
        function some(collection, predicate, guard) {
          var func = isArray(collection) ? arraySome : baseSome;
          if (guard && isIterateeCall(collection, predicate, guard)) {
            predicate = undefined2;
          }
          return func(collection, getIteratee(predicate, 3));
        }
        var sortBy = baseRest(function(collection, iteratees) {
          if (collection == null) {
            return [];
          }
          var length = iteratees.length;
          if (length > 1 && isIterateeCall(collection, iteratees[0], iteratees[1])) {
            iteratees = [];
          } else if (length > 2 && isIterateeCall(iteratees[0], iteratees[1], iteratees[2])) {
            iteratees = [iteratees[0]];
          }
          return baseOrderBy(collection, baseFlatten(iteratees, 1), []);
        });
        var now = ctxNow || function() {
          return root.Date.now();
        };
        function after(n, func) {
          if (typeof func != "function") {
            throw new TypeError2(FUNC_ERROR_TEXT);
          }
          n = toInteger(n);
          return function() {
            if (--n < 1) {
              return func.apply(this, arguments);
            }
          };
        }
        function ary(func, n, guard) {
          n = guard ? undefined2 : n;
          n = func && n == null ? func.length : n;
          return createWrap(func, WRAP_ARY_FLAG, undefined2, undefined2, undefined2, undefined2, n);
        }
        function before(n, func) {
          var result2;
          if (typeof func != "function") {
            throw new TypeError2(FUNC_ERROR_TEXT);
          }
          n = toInteger(n);
          return function() {
            if (--n > 0) {
              result2 = func.apply(this, arguments);
            }
            if (n <= 1) {
              func = undefined2;
            }
            return result2;
          };
        }
        var bind = baseRest(function(func, thisArg, partials) {
          var bitmask = WRAP_BIND_FLAG;
          if (partials.length) {
            var holders = replaceHolders(partials, getHolder(bind));
            bitmask |= WRAP_PARTIAL_FLAG;
          }
          return createWrap(func, bitmask, thisArg, partials, holders);
        });
        var bindKey = baseRest(function(object2, key, partials) {
          var bitmask = WRAP_BIND_FLAG | WRAP_BIND_KEY_FLAG;
          if (partials.length) {
            var holders = replaceHolders(partials, getHolder(bindKey));
            bitmask |= WRAP_PARTIAL_FLAG;
          }
          return createWrap(key, bitmask, object2, partials, holders);
        });
        function curry(func, arity, guard) {
          arity = guard ? undefined2 : arity;
          var result2 = createWrap(func, WRAP_CURRY_FLAG, undefined2, undefined2, undefined2, undefined2, undefined2, arity);
          result2.placeholder = curry.placeholder;
          return result2;
        }
        function curryRight(func, arity, guard) {
          arity = guard ? undefined2 : arity;
          var result2 = createWrap(func, WRAP_CURRY_RIGHT_FLAG, undefined2, undefined2, undefined2, undefined2, undefined2, arity);
          result2.placeholder = curryRight.placeholder;
          return result2;
        }
        function debounce(func, wait, options) {
          var lastArgs, lastThis, maxWait, result2, timerId, lastCallTime, lastInvokeTime = 0, leading = false, maxing = false, trailing = true;
          if (typeof func != "function") {
            throw new TypeError2(FUNC_ERROR_TEXT);
          }
          wait = toNumber(wait) || 0;
          if (isObject(options)) {
            leading = !!options.leading;
            maxing = "maxWait" in options;
            maxWait = maxing ? nativeMax(toNumber(options.maxWait) || 0, wait) : maxWait;
            trailing = "trailing" in options ? !!options.trailing : trailing;
          }
          function invokeFunc(time) {
            var args = lastArgs, thisArg = lastThis;
            lastArgs = lastThis = undefined2;
            lastInvokeTime = time;
            result2 = func.apply(thisArg, args);
            return result2;
          }
          function leadingEdge(time) {
            lastInvokeTime = time;
            timerId = setTimeout2(timerExpired, wait);
            return leading ? invokeFunc(time) : result2;
          }
          function remainingWait(time) {
            var timeSinceLastCall = time - lastCallTime, timeSinceLastInvoke = time - lastInvokeTime, timeWaiting = wait - timeSinceLastCall;
            return maxing ? nativeMin(timeWaiting, maxWait - timeSinceLastInvoke) : timeWaiting;
          }
          function shouldInvoke(time) {
            var timeSinceLastCall = time - lastCallTime, timeSinceLastInvoke = time - lastInvokeTime;
            return lastCallTime === undefined2 || timeSinceLastCall >= wait || timeSinceLastCall < 0 || maxing && timeSinceLastInvoke >= maxWait;
          }
          function timerExpired() {
            var time = now();
            if (shouldInvoke(time)) {
              return trailingEdge(time);
            }
            timerId = setTimeout2(timerExpired, remainingWait(time));
          }
          function trailingEdge(time) {
            timerId = undefined2;
            if (trailing && lastArgs) {
              return invokeFunc(time);
            }
            lastArgs = lastThis = undefined2;
            return result2;
          }
          function cancel() {
            if (timerId !== undefined2) {
              clearTimeout(timerId);
            }
            lastInvokeTime = 0;
            lastArgs = lastCallTime = lastThis = timerId = undefined2;
          }
          function flush() {
            return timerId === undefined2 ? result2 : trailingEdge(now());
          }
          function debounced() {
            var time = now(), isInvoking = shouldInvoke(time);
            lastArgs = arguments;
            lastThis = this;
            lastCallTime = time;
            if (isInvoking) {
              if (timerId === undefined2) {
                return leadingEdge(lastCallTime);
              }
              if (maxing) {
                clearTimeout(timerId);
                timerId = setTimeout2(timerExpired, wait);
                return invokeFunc(lastCallTime);
              }
            }
            if (timerId === undefined2) {
              timerId = setTimeout2(timerExpired, wait);
            }
            return result2;
          }
          debounced.cancel = cancel;
          debounced.flush = flush;
          return debounced;
        }
        var defer = baseRest(function(func, args) {
          return baseDelay(func, 1, args);
        });
        var delay = baseRest(function(func, wait, args) {
          return baseDelay(func, toNumber(wait) || 0, args);
        });
        function flip(func) {
          return createWrap(func, WRAP_FLIP_FLAG);
        }
        function memoize(func, resolver) {
          if (typeof func != "function" || resolver != null && typeof resolver != "function") {
            throw new TypeError2(FUNC_ERROR_TEXT);
          }
          var memoized = function() {
            var args = arguments, key = resolver ? resolver.apply(this, args) : args[0], cache = memoized.cache;
            if (cache.has(key)) {
              return cache.get(key);
            }
            var result2 = func.apply(this, args);
            memoized.cache = cache.set(key, result2) || cache;
            return result2;
          };
          memoized.cache = new (memoize.Cache || MapCache)();
          return memoized;
        }
        memoize.Cache = MapCache;
        function negate(predicate) {
          if (typeof predicate != "function") {
            throw new TypeError2(FUNC_ERROR_TEXT);
          }
          return function() {
            var args = arguments;
            switch (args.length) {
              case 0:
                return !predicate.call(this);
              case 1:
                return !predicate.call(this, args[0]);
              case 2:
                return !predicate.call(this, args[0], args[1]);
              case 3:
                return !predicate.call(this, args[0], args[1], args[2]);
            }
            return !predicate.apply(this, args);
          };
        }
        function once(func) {
          return before(2, func);
        }
        var overArgs = castRest(function(func, transforms2) {
          transforms2 = transforms2.length == 1 && isArray(transforms2[0]) ? arrayMap(transforms2[0], baseUnary(getIteratee())) : arrayMap(baseFlatten(transforms2, 1), baseUnary(getIteratee()));
          var funcsLength = transforms2.length;
          return baseRest(function(args) {
            var index = -1, length = nativeMin(args.length, funcsLength);
            while (++index < length) {
              args[index] = transforms2[index].call(this, args[index]);
            }
            return apply(func, this, args);
          });
        });
        var partial = baseRest(function(func, partials) {
          var holders = replaceHolders(partials, getHolder(partial));
          return createWrap(func, WRAP_PARTIAL_FLAG, undefined2, partials, holders);
        });
        var partialRight = baseRest(function(func, partials) {
          var holders = replaceHolders(partials, getHolder(partialRight));
          return createWrap(func, WRAP_PARTIAL_RIGHT_FLAG, undefined2, partials, holders);
        });
        var rearg = flatRest(function(func, indexes) {
          return createWrap(func, WRAP_REARG_FLAG, undefined2, undefined2, undefined2, indexes);
        });
        function rest(func, start) {
          if (typeof func != "function") {
            throw new TypeError2(FUNC_ERROR_TEXT);
          }
          start = start === undefined2 ? start : toInteger(start);
          return baseRest(func, start);
        }
        function spread(func, start) {
          if (typeof func != "function") {
            throw new TypeError2(FUNC_ERROR_TEXT);
          }
          start = start == null ? 0 : nativeMax(toInteger(start), 0);
          return baseRest(function(args) {
            var array2 = args[start], otherArgs = castSlice(args, 0, start);
            if (array2) {
              arrayPush(otherArgs, array2);
            }
            return apply(func, this, otherArgs);
          });
        }
        function throttle(func, wait, options) {
          var leading = true, trailing = true;
          if (typeof func != "function") {
            throw new TypeError2(FUNC_ERROR_TEXT);
          }
          if (isObject(options)) {
            leading = "leading" in options ? !!options.leading : leading;
            trailing = "trailing" in options ? !!options.trailing : trailing;
          }
          return debounce(func, wait, {
            "leading": leading,
            "maxWait": wait,
            "trailing": trailing
          });
        }
        function unary(func) {
          return ary(func, 1);
        }
        function wrap(value, wrapper) {
          return partial(castFunction(wrapper), value);
        }
        function castArray() {
          if (!arguments.length) {
            return [];
          }
          var value = arguments[0];
          return isArray(value) ? value : [value];
        }
        function clone(value) {
          return baseClone(value, CLONE_SYMBOLS_FLAG);
        }
        function cloneWith(value, customizer) {
          customizer = typeof customizer == "function" ? customizer : undefined2;
          return baseClone(value, CLONE_SYMBOLS_FLAG, customizer);
        }
        function cloneDeep2(value) {
          return baseClone(value, CLONE_DEEP_FLAG | CLONE_SYMBOLS_FLAG);
        }
        function cloneDeepWith(value, customizer) {
          customizer = typeof customizer == "function" ? customizer : undefined2;
          return baseClone(value, CLONE_DEEP_FLAG | CLONE_SYMBOLS_FLAG, customizer);
        }
        function conformsTo(object2, source) {
          return source == null || baseConformsTo(object2, source, keys(source));
        }
        function eq(value, other) {
          return value === other || value !== value && other !== other;
        }
        var gt = createRelationalOperation(baseGt);
        var gte = createRelationalOperation(function(value, other) {
          return value >= other;
        });
        var isArguments = baseIsArguments(function() {
          return arguments;
        }()) ? baseIsArguments : function(value) {
          return isObjectLike(value) && hasOwnProperty.call(value, "callee") && !propertyIsEnumerable.call(value, "callee");
        };
        var isArray = Array2.isArray;
        var isArrayBuffer = nodeIsArrayBuffer ? baseUnary(nodeIsArrayBuffer) : baseIsArrayBuffer;
        function isArrayLike(value) {
          return value != null && isLength(value.length) && !isFunction(value);
        }
        function isArrayLikeObject(value) {
          return isObjectLike(value) && isArrayLike(value);
        }
        function isBoolean(value) {
          return value === true || value === false || isObjectLike(value) && baseGetTag(value) == boolTag;
        }
        var isBuffer = nativeIsBuffer || stubFalse;
        var isDate = nodeIsDate ? baseUnary(nodeIsDate) : baseIsDate;
        function isElement(value) {
          return isObjectLike(value) && value.nodeType === 1 && !isPlainObject(value);
        }
        function isEmpty(value) {
          if (value == null) {
            return true;
          }
          if (isArrayLike(value) && (isArray(value) || typeof value == "string" || typeof value.splice == "function" || isBuffer(value) || isTypedArray(value) || isArguments(value))) {
            return !value.length;
          }
          var tag = getTag(value);
          if (tag == mapTag || tag == setTag) {
            return !value.size;
          }
          if (isPrototype(value)) {
            return !baseKeys(value).length;
          }
          for (var key in value) {
            if (hasOwnProperty.call(value, key)) {
              return false;
            }
          }
          return true;
        }
        function isEqual(value, other) {
          return baseIsEqual(value, other);
        }
        function isEqualWith(value, other, customizer) {
          customizer = typeof customizer == "function" ? customizer : undefined2;
          var result2 = customizer ? customizer(value, other) : undefined2;
          return result2 === undefined2 ? baseIsEqual(value, other, undefined2, customizer) : !!result2;
        }
        function isError(value) {
          if (!isObjectLike(value)) {
            return false;
          }
          var tag = baseGetTag(value);
          return tag == errorTag || tag == domExcTag || typeof value.message == "string" && typeof value.name == "string" && !isPlainObject(value);
        }
        function isFinite(value) {
          return typeof value == "number" && nativeIsFinite(value);
        }
        function isFunction(value) {
          if (!isObject(value)) {
            return false;
          }
          var tag = baseGetTag(value);
          return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
        }
        function isInteger(value) {
          return typeof value == "number" && value == toInteger(value);
        }
        function isLength(value) {
          return typeof value == "number" && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
        }
        function isObject(value) {
          var type = typeof value;
          return value != null && (type == "object" || type == "function");
        }
        function isObjectLike(value) {
          return value != null && typeof value == "object";
        }
        var isMap = nodeIsMap ? baseUnary(nodeIsMap) : baseIsMap;
        function isMatch(object2, source) {
          return object2 === source || baseIsMatch(object2, source, getMatchData(source));
        }
        function isMatchWith(object2, source, customizer) {
          customizer = typeof customizer == "function" ? customizer : undefined2;
          return baseIsMatch(object2, source, getMatchData(source), customizer);
        }
        function isNaN2(value) {
          return isNumber5(value) && value != +value;
        }
        function isNative(value) {
          if (isMaskable(value)) {
            throw new Error2(CORE_ERROR_TEXT);
          }
          return baseIsNative(value);
        }
        function isNull(value) {
          return value === null;
        }
        function isNil(value) {
          return value == null;
        }
        function isNumber5(value) {
          return typeof value == "number" || isObjectLike(value) && baseGetTag(value) == numberTag;
        }
        function isPlainObject(value) {
          if (!isObjectLike(value) || baseGetTag(value) != objectTag) {
            return false;
          }
          var proto = getPrototype(value);
          if (proto === null) {
            return true;
          }
          var Ctor = hasOwnProperty.call(proto, "constructor") && proto.constructor;
          return typeof Ctor == "function" && Ctor instanceof Ctor && funcToString.call(Ctor) == objectCtorString;
        }
        var isRegExp = nodeIsRegExp ? baseUnary(nodeIsRegExp) : baseIsRegExp;
        function isSafeInteger(value) {
          return isInteger(value) && value >= -MAX_SAFE_INTEGER && value <= MAX_SAFE_INTEGER;
        }
        var isSet = nodeIsSet ? baseUnary(nodeIsSet) : baseIsSet;
        function isString(value) {
          return typeof value == "string" || !isArray(value) && isObjectLike(value) && baseGetTag(value) == stringTag;
        }
        function isSymbol(value) {
          return typeof value == "symbol" || isObjectLike(value) && baseGetTag(value) == symbolTag;
        }
        var isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;
        function isUndefined(value) {
          return value === undefined2;
        }
        function isWeakMap(value) {
          return isObjectLike(value) && getTag(value) == weakMapTag;
        }
        function isWeakSet(value) {
          return isObjectLike(value) && baseGetTag(value) == weakSetTag;
        }
        var lt = createRelationalOperation(baseLt);
        var lte = createRelationalOperation(function(value, other) {
          return value <= other;
        });
        function toArray(value) {
          if (!value) {
            return [];
          }
          if (isArrayLike(value)) {
            return isString(value) ? stringToArray(value) : copyArray(value);
          }
          if (symIterator && value[symIterator]) {
            return iteratorToArray(value[symIterator]());
          }
          var tag = getTag(value), func = tag == mapTag ? mapToArray : tag == setTag ? setToArray : values;
          return func(value);
        }
        function toFinite(value) {
          if (!value) {
            return value === 0 ? value : 0;
          }
          value = toNumber(value);
          if (value === INFINITY || value === -INFINITY) {
            var sign = value < 0 ? -1 : 1;
            return sign * MAX_INTEGER;
          }
          return value === value ? value : 0;
        }
        function toInteger(value) {
          var result2 = toFinite(value), remainder = result2 % 1;
          return result2 === result2 ? remainder ? result2 - remainder : result2 : 0;
        }
        function toLength(value) {
          return value ? baseClamp(toInteger(value), 0, MAX_ARRAY_LENGTH) : 0;
        }
        function toNumber(value) {
          if (typeof value == "number") {
            return value;
          }
          if (isSymbol(value)) {
            return NAN;
          }
          if (isObject(value)) {
            var other = typeof value.valueOf == "function" ? value.valueOf() : value;
            value = isObject(other) ? other + "" : other;
          }
          if (typeof value != "string") {
            return value === 0 ? value : +value;
          }
          value = baseTrim(value);
          var isBinary = reIsBinary.test(value);
          return isBinary || reIsOctal.test(value) ? freeParseInt(value.slice(2), isBinary ? 2 : 8) : reIsBadHex.test(value) ? NAN : +value;
        }
        function toPlainObject(value) {
          return copyObject(value, keysIn(value));
        }
        function toSafeInteger(value) {
          return value ? baseClamp(toInteger(value), -MAX_SAFE_INTEGER, MAX_SAFE_INTEGER) : value === 0 ? value : 0;
        }
        function toString(value) {
          return value == null ? "" : baseToString(value);
        }
        var assign2 = createAssigner(function(object2, source) {
          if (isPrototype(source) || isArrayLike(source)) {
            copyObject(source, keys(source), object2);
            return;
          }
          for (var key in source) {
            if (hasOwnProperty.call(source, key)) {
              assignValue(object2, key, source[key]);
            }
          }
        });
        var assignIn = createAssigner(function(object2, source) {
          copyObject(source, keysIn(source), object2);
        });
        var assignInWith = createAssigner(function(object2, source, srcIndex, customizer) {
          copyObject(source, keysIn(source), object2, customizer);
        });
        var assignWith = createAssigner(function(object2, source, srcIndex, customizer) {
          copyObject(source, keys(source), object2, customizer);
        });
        var at = flatRest(baseAt);
        function create(prototype, properties) {
          var result2 = baseCreate(prototype);
          return properties == null ? result2 : baseAssign(result2, properties);
        }
        var defaults6 = baseRest(function(object2, sources) {
          object2 = Object2(object2);
          var index = -1;
          var length = sources.length;
          var guard = length > 2 ? sources[2] : undefined2;
          if (guard && isIterateeCall(sources[0], sources[1], guard)) {
            length = 1;
          }
          while (++index < length) {
            var source = sources[index];
            var props = keysIn(source);
            var propsIndex = -1;
            var propsLength = props.length;
            while (++propsIndex < propsLength) {
              var key = props[propsIndex];
              var value = object2[key];
              if (value === undefined2 || eq(value, objectProto[key]) && !hasOwnProperty.call(object2, key)) {
                object2[key] = source[key];
              }
            }
          }
          return object2;
        });
        var defaultsDeep = baseRest(function(args) {
          args.push(undefined2, customDefaultsMerge);
          return apply(mergeWith, undefined2, args);
        });
        function findKey(object2, predicate) {
          return baseFindKey(object2, getIteratee(predicate, 3), baseForOwn);
        }
        function findLastKey(object2, predicate) {
          return baseFindKey(object2, getIteratee(predicate, 3), baseForOwnRight);
        }
        function forIn(object2, iteratee2) {
          return object2 == null ? object2 : baseFor(object2, getIteratee(iteratee2, 3), keysIn);
        }
        function forInRight(object2, iteratee2) {
          return object2 == null ? object2 : baseForRight(object2, getIteratee(iteratee2, 3), keysIn);
        }
        function forOwn(object2, iteratee2) {
          return object2 && baseForOwn(object2, getIteratee(iteratee2, 3));
        }
        function forOwnRight(object2, iteratee2) {
          return object2 && baseForOwnRight(object2, getIteratee(iteratee2, 3));
        }
        function functions(object2) {
          return object2 == null ? [] : baseFunctions(object2, keys(object2));
        }
        function functionsIn(object2) {
          return object2 == null ? [] : baseFunctions(object2, keysIn(object2));
        }
        function get5(object2, path, defaultValue) {
          var result2 = object2 == null ? undefined2 : baseGet(object2, path);
          return result2 === undefined2 ? defaultValue : result2;
        }
        function has(object2, path) {
          return object2 != null && hasPath(object2, path, baseHas);
        }
        function hasIn(object2, path) {
          return object2 != null && hasPath(object2, path, baseHasIn);
        }
        var invert = createInverter(function(result2, value, key) {
          if (value != null && typeof value.toString != "function") {
            value = nativeObjectToString.call(value);
          }
          result2[value] = key;
        }, constant(identity));
        var invertBy = createInverter(function(result2, value, key) {
          if (value != null && typeof value.toString != "function") {
            value = nativeObjectToString.call(value);
          }
          if (hasOwnProperty.call(result2, value)) {
            result2[value].push(key);
          } else {
            result2[value] = [key];
          }
        }, getIteratee);
        var invoke = baseRest(baseInvoke);
        function keys(object2) {
          return isArrayLike(object2) ? arrayLikeKeys(object2) : baseKeys(object2);
        }
        function keysIn(object2) {
          return isArrayLike(object2) ? arrayLikeKeys(object2, true) : baseKeysIn(object2);
        }
        function mapKeys(object2, iteratee2) {
          var result2 = {};
          iteratee2 = getIteratee(iteratee2, 3);
          baseForOwn(object2, function(value, key, object3) {
            baseAssignValue(result2, iteratee2(value, key, object3), value);
          });
          return result2;
        }
        function mapValues(object2, iteratee2) {
          var result2 = {};
          iteratee2 = getIteratee(iteratee2, 3);
          baseForOwn(object2, function(value, key, object3) {
            baseAssignValue(result2, key, iteratee2(value, key, object3));
          });
          return result2;
        }
        var merge3 = createAssigner(function(object2, source, srcIndex) {
          baseMerge(object2, source, srcIndex);
        });
        var mergeWith = createAssigner(function(object2, source, srcIndex, customizer) {
          baseMerge(object2, source, srcIndex, customizer);
        });
        var omit = flatRest(function(object2, paths) {
          var result2 = {};
          if (object2 == null) {
            return result2;
          }
          var isDeep = false;
          paths = arrayMap(paths, function(path) {
            path = castPath(path, object2);
            isDeep || (isDeep = path.length > 1);
            return path;
          });
          copyObject(object2, getAllKeysIn(object2), result2);
          if (isDeep) {
            result2 = baseClone(result2, CLONE_DEEP_FLAG | CLONE_FLAT_FLAG | CLONE_SYMBOLS_FLAG, customOmitClone);
          }
          var length = paths.length;
          while (length--) {
            baseUnset(result2, paths[length]);
          }
          return result2;
        });
        function omitBy(object2, predicate) {
          return pickBy(object2, negate(getIteratee(predicate)));
        }
        var pick = flatRest(function(object2, paths) {
          return object2 == null ? {} : basePick(object2, paths);
        });
        function pickBy(object2, predicate) {
          if (object2 == null) {
            return {};
          }
          var props = arrayMap(getAllKeysIn(object2), function(prop) {
            return [prop];
          });
          predicate = getIteratee(predicate);
          return basePickBy(object2, props, function(value, path) {
            return predicate(value, path[0]);
          });
        }
        function result(object2, path, defaultValue) {
          path = castPath(path, object2);
          var index = -1, length = path.length;
          if (!length) {
            length = 1;
            object2 = undefined2;
          }
          while (++index < length) {
            var value = object2 == null ? undefined2 : object2[toKey(path[index])];
            if (value === undefined2) {
              index = length;
              value = defaultValue;
            }
            object2 = isFunction(value) ? value.call(object2) : value;
          }
          return object2;
        }
        function set(object2, path, value) {
          return object2 == null ? object2 : baseSet(object2, path, value);
        }
        function setWith(object2, path, value, customizer) {
          customizer = typeof customizer == "function" ? customizer : undefined2;
          return object2 == null ? object2 : baseSet(object2, path, value, customizer);
        }
        var toPairs = createToPairs(keys);
        var toPairsIn = createToPairs(keysIn);
        function transform(object2, iteratee2, accumulator) {
          var isArr = isArray(object2), isArrLike = isArr || isBuffer(object2) || isTypedArray(object2);
          iteratee2 = getIteratee(iteratee2, 4);
          if (accumulator == null) {
            var Ctor = object2 && object2.constructor;
            if (isArrLike) {
              accumulator = isArr ? new Ctor() : [];
            } else if (isObject(object2)) {
              accumulator = isFunction(Ctor) ? baseCreate(getPrototype(object2)) : {};
            } else {
              accumulator = {};
            }
          }
          (isArrLike ? arrayEach : baseForOwn)(object2, function(value, index, object3) {
            return iteratee2(accumulator, value, index, object3);
          });
          return accumulator;
        }
        function unset(object2, path) {
          return object2 == null ? true : baseUnset(object2, path);
        }
        function update(object2, path, updater) {
          return object2 == null ? object2 : baseUpdate(object2, path, castFunction(updater));
        }
        function updateWith(object2, path, updater, customizer) {
          customizer = typeof customizer == "function" ? customizer : undefined2;
          return object2 == null ? object2 : baseUpdate(object2, path, castFunction(updater), customizer);
        }
        function values(object2) {
          return object2 == null ? [] : baseValues(object2, keys(object2));
        }
        function valuesIn(object2) {
          return object2 == null ? [] : baseValues(object2, keysIn(object2));
        }
        function clamp(number, lower, upper) {
          if (upper === undefined2) {
            upper = lower;
            lower = undefined2;
          }
          if (upper !== undefined2) {
            upper = toNumber(upper);
            upper = upper === upper ? upper : 0;
          }
          if (lower !== undefined2) {
            lower = toNumber(lower);
            lower = lower === lower ? lower : 0;
          }
          return baseClamp(toNumber(number), lower, upper);
        }
        function inRange(number, start, end) {
          start = toFinite(start);
          if (end === undefined2) {
            end = start;
            start = 0;
          } else {
            end = toFinite(end);
          }
          number = toNumber(number);
          return baseInRange(number, start, end);
        }
        function random(lower, upper, floating) {
          if (floating && typeof floating != "boolean" && isIterateeCall(lower, upper, floating)) {
            upper = floating = undefined2;
          }
          if (floating === undefined2) {
            if (typeof upper == "boolean") {
              floating = upper;
              upper = undefined2;
            } else if (typeof lower == "boolean") {
              floating = lower;
              lower = undefined2;
            }
          }
          if (lower === undefined2 && upper === undefined2) {
            lower = 0;
            upper = 1;
          } else {
            lower = toFinite(lower);
            if (upper === undefined2) {
              upper = lower;
              lower = 0;
            } else {
              upper = toFinite(upper);
            }
          }
          if (lower > upper) {
            var temp = lower;
            lower = upper;
            upper = temp;
          }
          if (floating || lower % 1 || upper % 1) {
            var rand = nativeRandom();
            return nativeMin(lower + rand * (upper - lower + freeParseFloat("1e-" + ((rand + "").length - 1))), upper);
          }
          return baseRandom(lower, upper);
        }
        var camelCase = createCompounder(function(result2, word, index) {
          word = word.toLowerCase();
          return result2 + (index ? capitalize(word) : word);
        });
        function capitalize(string2) {
          return upperFirst(toString(string2).toLowerCase());
        }
        function deburr(string2) {
          string2 = toString(string2);
          return string2 && string2.replace(reLatin, deburrLetter).replace(reComboMark, "");
        }
        function endsWith(string2, target, position2) {
          string2 = toString(string2);
          target = baseToString(target);
          var length = string2.length;
          position2 = position2 === undefined2 ? length : baseClamp(toInteger(position2), 0, length);
          var end = position2;
          position2 -= target.length;
          return position2 >= 0 && string2.slice(position2, end) == target;
        }
        function escape(string2) {
          string2 = toString(string2);
          return string2 && reHasUnescapedHtml.test(string2) ? string2.replace(reUnescapedHtml, escapeHtmlChar) : string2;
        }
        function escapeRegExp(string2) {
          string2 = toString(string2);
          return string2 && reHasRegExpChar.test(string2) ? string2.replace(reRegExpChar, "\\$&") : string2;
        }
        var kebabCase = createCompounder(function(result2, word, index) {
          return result2 + (index ? "-" : "") + word.toLowerCase();
        });
        var lowerCase = createCompounder(function(result2, word, index) {
          return result2 + (index ? " " : "") + word.toLowerCase();
        });
        var lowerFirst = createCaseFirst("toLowerCase");
        function pad(string2, length, chars) {
          string2 = toString(string2);
          length = toInteger(length);
          var strLength = length ? stringSize(string2) : 0;
          if (!length || strLength >= length) {
            return string2;
          }
          var mid = (length - strLength) / 2;
          return createPadding(nativeFloor(mid), chars) + string2 + createPadding(nativeCeil(mid), chars);
        }
        function padEnd(string2, length, chars) {
          string2 = toString(string2);
          length = toInteger(length);
          var strLength = length ? stringSize(string2) : 0;
          return length && strLength < length ? string2 + createPadding(length - strLength, chars) : string2;
        }
        function padStart(string2, length, chars) {
          string2 = toString(string2);
          length = toInteger(length);
          var strLength = length ? stringSize(string2) : 0;
          return length && strLength < length ? createPadding(length - strLength, chars) + string2 : string2;
        }
        function parseInt2(string2, radix, guard) {
          if (guard || radix == null) {
            radix = 0;
          } else if (radix) {
            radix = +radix;
          }
          return nativeParseInt(toString(string2).replace(reTrimStart, ""), radix || 0);
        }
        function repeat(string2, n, guard) {
          if (guard ? isIterateeCall(string2, n, guard) : n === undefined2) {
            n = 1;
          } else {
            n = toInteger(n);
          }
          return baseRepeat(toString(string2), n);
        }
        function replace() {
          var args = arguments, string2 = toString(args[0]);
          return args.length < 3 ? string2 : string2.replace(args[1], args[2]);
        }
        var snakeCase = createCompounder(function(result2, word, index) {
          return result2 + (index ? "_" : "") + word.toLowerCase();
        });
        function split(string2, separator, limit) {
          if (limit && typeof limit != "number" && isIterateeCall(string2, separator, limit)) {
            separator = limit = undefined2;
          }
          limit = limit === undefined2 ? MAX_ARRAY_LENGTH : limit >>> 0;
          if (!limit) {
            return [];
          }
          string2 = toString(string2);
          if (string2 && (typeof separator == "string" || separator != null && !isRegExp(separator))) {
            separator = baseToString(separator);
            if (!separator && hasUnicode(string2)) {
              return castSlice(stringToArray(string2), 0, limit);
            }
          }
          return string2.split(separator, limit);
        }
        var startCase = createCompounder(function(result2, word, index) {
          return result2 + (index ? " " : "") + upperFirst(word);
        });
        function startsWith(string2, target, position2) {
          string2 = toString(string2);
          position2 = position2 == null ? 0 : baseClamp(toInteger(position2), 0, string2.length);
          target = baseToString(target);
          return string2.slice(position2, position2 + target.length) == target;
        }
        function template(string2, options, guard) {
          var settings = lodash.templateSettings;
          if (guard && isIterateeCall(string2, options, guard)) {
            options = undefined2;
          }
          string2 = toString(string2);
          options = assignInWith({}, options, settings, customDefaultsAssignIn);
          var imports = assignInWith({}, options.imports, settings.imports, customDefaultsAssignIn), importsKeys = keys(imports), importsValues = baseValues(imports, importsKeys);
          var isEscaping, isEvaluating, index = 0, interpolate = options.interpolate || reNoMatch, source = "__p += '";
          var reDelimiters = RegExp2(
            (options.escape || reNoMatch).source + "|" + interpolate.source + "|" + (interpolate === reInterpolate ? reEsTemplate : reNoMatch).source + "|" + (options.evaluate || reNoMatch).source + "|$",
            "g"
          );
          var sourceURL = "//# sourceURL=" + (hasOwnProperty.call(options, "sourceURL") ? (options.sourceURL + "").replace(/\s/g, " ") : "lodash.templateSources[" + ++templateCounter + "]") + "\n";
          string2.replace(reDelimiters, function(match, escapeValue, interpolateValue, esTemplateValue, evaluateValue, offset) {
            interpolateValue || (interpolateValue = esTemplateValue);
            source += string2.slice(index, offset).replace(reUnescapedString, escapeStringChar);
            if (escapeValue) {
              isEscaping = true;
              source += "' +\n__e(" + escapeValue + ") +\n'";
            }
            if (evaluateValue) {
              isEvaluating = true;
              source += "';\n" + evaluateValue + ";\n__p += '";
            }
            if (interpolateValue) {
              source += "' +\n((__t = (" + interpolateValue + ")) == null ? '' : __t) +\n'";
            }
            index = offset + match.length;
            return match;
          });
          source += "';\n";
          var variable = hasOwnProperty.call(options, "variable") && options.variable;
          if (!variable) {
            source = "with (obj) {\n" + source + "\n}\n";
          } else if (reForbiddenIdentifierChars.test(variable)) {
            throw new Error2(INVALID_TEMPL_VAR_ERROR_TEXT);
          }
          source = (isEvaluating ? source.replace(reEmptyStringLeading, "") : source).replace(reEmptyStringMiddle, "$1").replace(reEmptyStringTrailing, "$1;");
          source = "function(" + (variable || "obj") + ") {\n" + (variable ? "" : "obj || (obj = {});\n") + "var __t, __p = ''" + (isEscaping ? ", __e = _.escape" : "") + (isEvaluating ? ", __j = Array.prototype.join;\nfunction print() { __p += __j.call(arguments, '') }\n" : ";\n") + source + "return __p\n}";
          var result2 = attempt(function() {
            return Function2(importsKeys, sourceURL + "return " + source).apply(undefined2, importsValues);
          });
          result2.source = source;
          if (isError(result2)) {
            throw result2;
          }
          return result2;
        }
        function toLower(value) {
          return toString(value).toLowerCase();
        }
        function toUpper(value) {
          return toString(value).toUpperCase();
        }
        function trim(string2, chars, guard) {
          string2 = toString(string2);
          if (string2 && (guard || chars === undefined2)) {
            return baseTrim(string2);
          }
          if (!string2 || !(chars = baseToString(chars))) {
            return string2;
          }
          var strSymbols = stringToArray(string2), chrSymbols = stringToArray(chars), start = charsStartIndex(strSymbols, chrSymbols), end = charsEndIndex(strSymbols, chrSymbols) + 1;
          return castSlice(strSymbols, start, end).join("");
        }
        function trimEnd(string2, chars, guard) {
          string2 = toString(string2);
          if (string2 && (guard || chars === undefined2)) {
            return string2.slice(0, trimmedEndIndex(string2) + 1);
          }
          if (!string2 || !(chars = baseToString(chars))) {
            return string2;
          }
          var strSymbols = stringToArray(string2), end = charsEndIndex(strSymbols, stringToArray(chars)) + 1;
          return castSlice(strSymbols, 0, end).join("");
        }
        function trimStart(string2, chars, guard) {
          string2 = toString(string2);
          if (string2 && (guard || chars === undefined2)) {
            return string2.replace(reTrimStart, "");
          }
          if (!string2 || !(chars = baseToString(chars))) {
            return string2;
          }
          var strSymbols = stringToArray(string2), start = charsStartIndex(strSymbols, stringToArray(chars));
          return castSlice(strSymbols, start).join("");
        }
        function truncate(string2, options) {
          var length = DEFAULT_TRUNC_LENGTH, omission = DEFAULT_TRUNC_OMISSION;
          if (isObject(options)) {
            var separator = "separator" in options ? options.separator : separator;
            length = "length" in options ? toInteger(options.length) : length;
            omission = "omission" in options ? baseToString(options.omission) : omission;
          }
          string2 = toString(string2);
          var strLength = string2.length;
          if (hasUnicode(string2)) {
            var strSymbols = stringToArray(string2);
            strLength = strSymbols.length;
          }
          if (length >= strLength) {
            return string2;
          }
          var end = length - stringSize(omission);
          if (end < 1) {
            return omission;
          }
          var result2 = strSymbols ? castSlice(strSymbols, 0, end).join("") : string2.slice(0, end);
          if (separator === undefined2) {
            return result2 + omission;
          }
          if (strSymbols) {
            end += result2.length - end;
          }
          if (isRegExp(separator)) {
            if (string2.slice(end).search(separator)) {
              var match, substring = result2;
              if (!separator.global) {
                separator = RegExp2(separator.source, toString(reFlags.exec(separator)) + "g");
              }
              separator.lastIndex = 0;
              while (match = separator.exec(substring)) {
                var newEnd = match.index;
              }
              result2 = result2.slice(0, newEnd === undefined2 ? end : newEnd);
            }
          } else if (string2.indexOf(baseToString(separator), end) != end) {
            var index = result2.lastIndexOf(separator);
            if (index > -1) {
              result2 = result2.slice(0, index);
            }
          }
          return result2 + omission;
        }
        function unescape(string2) {
          string2 = toString(string2);
          return string2 && reHasEscapedHtml.test(string2) ? string2.replace(reEscapedHtml, unescapeHtmlChar) : string2;
        }
        var upperCase = createCompounder(function(result2, word, index) {
          return result2 + (index ? " " : "") + word.toUpperCase();
        });
        var upperFirst = createCaseFirst("toUpperCase");
        function words(string2, pattern, guard) {
          string2 = toString(string2);
          pattern = guard ? undefined2 : pattern;
          if (pattern === undefined2) {
            return hasUnicodeWord(string2) ? unicodeWords(string2) : asciiWords(string2);
          }
          return string2.match(pattern) || [];
        }
        var attempt = baseRest(function(func, args) {
          try {
            return apply(func, undefined2, args);
          } catch (e) {
            return isError(e) ? e : new Error2(e);
          }
        });
        var bindAll = flatRest(function(object2, methodNames) {
          arrayEach(methodNames, function(key) {
            key = toKey(key);
            baseAssignValue(object2, key, bind(object2[key], object2));
          });
          return object2;
        });
        function cond(pairs) {
          var length = pairs == null ? 0 : pairs.length, toIteratee = getIteratee();
          pairs = !length ? [] : arrayMap(pairs, function(pair) {
            if (typeof pair[1] != "function") {
              throw new TypeError2(FUNC_ERROR_TEXT);
            }
            return [toIteratee(pair[0]), pair[1]];
          });
          return baseRest(function(args) {
            var index = -1;
            while (++index < length) {
              var pair = pairs[index];
              if (apply(pair[0], this, args)) {
                return apply(pair[1], this, args);
              }
            }
          });
        }
        function conforms(source) {
          return baseConforms(baseClone(source, CLONE_DEEP_FLAG));
        }
        function constant(value) {
          return function() {
            return value;
          };
        }
        function defaultTo(value, defaultValue) {
          return value == null || value !== value ? defaultValue : value;
        }
        var flow = createFlow();
        var flowRight = createFlow(true);
        function identity(value) {
          return value;
        }
        function iteratee(func) {
          return baseIteratee(typeof func == "function" ? func : baseClone(func, CLONE_DEEP_FLAG));
        }
        function matches(source) {
          return baseMatches(baseClone(source, CLONE_DEEP_FLAG));
        }
        function matchesProperty(path, srcValue) {
          return baseMatchesProperty(path, baseClone(srcValue, CLONE_DEEP_FLAG));
        }
        var method = baseRest(function(path, args) {
          return function(object2) {
            return baseInvoke(object2, path, args);
          };
        });
        var methodOf = baseRest(function(object2, args) {
          return function(path) {
            return baseInvoke(object2, path, args);
          };
        });
        function mixin(object2, source, options) {
          var props = keys(source), methodNames = baseFunctions(source, props);
          if (options == null && !(isObject(source) && (methodNames.length || !props.length))) {
            options = source;
            source = object2;
            object2 = this;
            methodNames = baseFunctions(source, keys(source));
          }
          var chain2 = !(isObject(options) && "chain" in options) || !!options.chain, isFunc = isFunction(object2);
          arrayEach(methodNames, function(methodName) {
            var func = source[methodName];
            object2[methodName] = func;
            if (isFunc) {
              object2.prototype[methodName] = function() {
                var chainAll = this.__chain__;
                if (chain2 || chainAll) {
                  var result2 = object2(this.__wrapped__), actions = result2.__actions__ = copyArray(this.__actions__);
                  actions.push({ "func": func, "args": arguments, "thisArg": object2 });
                  result2.__chain__ = chainAll;
                  return result2;
                }
                return func.apply(object2, arrayPush([this.value()], arguments));
              };
            }
          });
          return object2;
        }
        function noConflict() {
          if (root._ === this) {
            root._ = oldDash;
          }
          return this;
        }
        function noop() {
        }
        function nthArg(n) {
          n = toInteger(n);
          return baseRest(function(args) {
            return baseNth(args, n);
          });
        }
        var over = createOver(arrayMap);
        var overEvery = createOver(arrayEvery);
        var overSome = createOver(arraySome);
        function property(path) {
          return isKey(path) ? baseProperty(toKey(path)) : basePropertyDeep(path);
        }
        function propertyOf(object2) {
          return function(path) {
            return object2 == null ? undefined2 : baseGet(object2, path);
          };
        }
        var range = createRange();
        var rangeRight = createRange(true);
        function stubArray() {
          return [];
        }
        function stubFalse() {
          return false;
        }
        function stubObject() {
          return {};
        }
        function stubString() {
          return "";
        }
        function stubTrue() {
          return true;
        }
        function times(n, iteratee2) {
          n = toInteger(n);
          if (n < 1 || n > MAX_SAFE_INTEGER) {
            return [];
          }
          var index = MAX_ARRAY_LENGTH, length = nativeMin(n, MAX_ARRAY_LENGTH);
          iteratee2 = getIteratee(iteratee2);
          n -= MAX_ARRAY_LENGTH;
          var result2 = baseTimes(length, iteratee2);
          while (++index < n) {
            iteratee2(index);
          }
          return result2;
        }
        function toPath(value) {
          if (isArray(value)) {
            return arrayMap(value, toKey);
          }
          return isSymbol(value) ? [value] : copyArray(stringToPath(toString(value)));
        }
        function uniqueId(prefix) {
          var id = ++idCounter;
          return toString(prefix) + id;
        }
        var add = createMathOperation(function(augend, addend) {
          return augend + addend;
        }, 0);
        var ceil = createRound("ceil");
        var divide = createMathOperation(function(dividend, divisor) {
          return dividend / divisor;
        }, 1);
        var floor = createRound("floor");
        function max(array2) {
          return array2 && array2.length ? baseExtremum(array2, identity, baseGt) : undefined2;
        }
        function maxBy(array2, iteratee2) {
          return array2 && array2.length ? baseExtremum(array2, getIteratee(iteratee2, 2), baseGt) : undefined2;
        }
        function mean(array2) {
          return baseMean(array2, identity);
        }
        function meanBy(array2, iteratee2) {
          return baseMean(array2, getIteratee(iteratee2, 2));
        }
        function min(array2) {
          return array2 && array2.length ? baseExtremum(array2, identity, baseLt) : undefined2;
        }
        function minBy(array2, iteratee2) {
          return array2 && array2.length ? baseExtremum(array2, getIteratee(iteratee2, 2), baseLt) : undefined2;
        }
        var multiply = createMathOperation(function(multiplier, multiplicand) {
          return multiplier * multiplicand;
        }, 1);
        var round = createRound("round");
        var subtract = createMathOperation(function(minuend, subtrahend) {
          return minuend - subtrahend;
        }, 0);
        function sum(array2) {
          return array2 && array2.length ? baseSum(array2, identity) : 0;
        }
        function sumBy(array2, iteratee2) {
          return array2 && array2.length ? baseSum(array2, getIteratee(iteratee2, 2)) : 0;
        }
        lodash.after = after;
        lodash.ary = ary;
        lodash.assign = assign2;
        lodash.assignIn = assignIn;
        lodash.assignInWith = assignInWith;
        lodash.assignWith = assignWith;
        lodash.at = at;
        lodash.before = before;
        lodash.bind = bind;
        lodash.bindAll = bindAll;
        lodash.bindKey = bindKey;
        lodash.castArray = castArray;
        lodash.chain = chain;
        lodash.chunk = chunk;
        lodash.compact = compact;
        lodash.concat = concat;
        lodash.cond = cond;
        lodash.conforms = conforms;
        lodash.constant = constant;
        lodash.countBy = countBy;
        lodash.create = create;
        lodash.curry = curry;
        lodash.curryRight = curryRight;
        lodash.debounce = debounce;
        lodash.defaults = defaults6;
        lodash.defaultsDeep = defaultsDeep;
        lodash.defer = defer;
        lodash.delay = delay;
        lodash.difference = difference;
        lodash.differenceBy = differenceBy;
        lodash.differenceWith = differenceWith;
        lodash.drop = drop;
        lodash.dropRight = dropRight;
        lodash.dropRightWhile = dropRightWhile;
        lodash.dropWhile = dropWhile;
        lodash.fill = fill;
        lodash.filter = filter;
        lodash.flatMap = flatMap;
        lodash.flatMapDeep = flatMapDeep;
        lodash.flatMapDepth = flatMapDepth;
        lodash.flatten = flatten;
        lodash.flattenDeep = flattenDeep;
        lodash.flattenDepth = flattenDepth;
        lodash.flip = flip;
        lodash.flow = flow;
        lodash.flowRight = flowRight;
        lodash.fromPairs = fromPairs;
        lodash.functions = functions;
        lodash.functionsIn = functionsIn;
        lodash.groupBy = groupBy;
        lodash.initial = initial;
        lodash.intersection = intersection;
        lodash.intersectionBy = intersectionBy;
        lodash.intersectionWith = intersectionWith;
        lodash.invert = invert;
        lodash.invertBy = invertBy;
        lodash.invokeMap = invokeMap;
        lodash.iteratee = iteratee;
        lodash.keyBy = keyBy;
        lodash.keys = keys;
        lodash.keysIn = keysIn;
        lodash.map = map;
        lodash.mapKeys = mapKeys;
        lodash.mapValues = mapValues;
        lodash.matches = matches;
        lodash.matchesProperty = matchesProperty;
        lodash.memoize = memoize;
        lodash.merge = merge3;
        lodash.mergeWith = mergeWith;
        lodash.method = method;
        lodash.methodOf = methodOf;
        lodash.mixin = mixin;
        lodash.negate = negate;
        lodash.nthArg = nthArg;
        lodash.omit = omit;
        lodash.omitBy = omitBy;
        lodash.once = once;
        lodash.orderBy = orderBy;
        lodash.over = over;
        lodash.overArgs = overArgs;
        lodash.overEvery = overEvery;
        lodash.overSome = overSome;
        lodash.partial = partial;
        lodash.partialRight = partialRight;
        lodash.partition = partition;
        lodash.pick = pick;
        lodash.pickBy = pickBy;
        lodash.property = property;
        lodash.propertyOf = propertyOf;
        lodash.pull = pull;
        lodash.pullAll = pullAll;
        lodash.pullAllBy = pullAllBy;
        lodash.pullAllWith = pullAllWith;
        lodash.pullAt = pullAt;
        lodash.range = range;
        lodash.rangeRight = rangeRight;
        lodash.rearg = rearg;
        lodash.reject = reject;
        lodash.remove = remove;
        lodash.rest = rest;
        lodash.reverse = reverse;
        lodash.sampleSize = sampleSize;
        lodash.set = set;
        lodash.setWith = setWith;
        lodash.shuffle = shuffle;
        lodash.slice = slice;
        lodash.sortBy = sortBy;
        lodash.sortedUniq = sortedUniq;
        lodash.sortedUniqBy = sortedUniqBy;
        lodash.split = split;
        lodash.spread = spread;
        lodash.tail = tail;
        lodash.take = take;
        lodash.takeRight = takeRight;
        lodash.takeRightWhile = takeRightWhile;
        lodash.takeWhile = takeWhile;
        lodash.tap = tap;
        lodash.throttle = throttle;
        lodash.thru = thru;
        lodash.toArray = toArray;
        lodash.toPairs = toPairs;
        lodash.toPairsIn = toPairsIn;
        lodash.toPath = toPath;
        lodash.toPlainObject = toPlainObject;
        lodash.transform = transform;
        lodash.unary = unary;
        lodash.union = union;
        lodash.unionBy = unionBy;
        lodash.unionWith = unionWith;
        lodash.uniq = uniq;
        lodash.uniqBy = uniqBy;
        lodash.uniqWith = uniqWith;
        lodash.unset = unset;
        lodash.unzip = unzip;
        lodash.unzipWith = unzipWith;
        lodash.update = update;
        lodash.updateWith = updateWith;
        lodash.values = values;
        lodash.valuesIn = valuesIn;
        lodash.without = without;
        lodash.words = words;
        lodash.wrap = wrap;
        lodash.xor = xor;
        lodash.xorBy = xorBy;
        lodash.xorWith = xorWith;
        lodash.zip = zip;
        lodash.zipObject = zipObject;
        lodash.zipObjectDeep = zipObjectDeep;
        lodash.zipWith = zipWith;
        lodash.entries = toPairs;
        lodash.entriesIn = toPairsIn;
        lodash.extend = assignIn;
        lodash.extendWith = assignInWith;
        mixin(lodash, lodash);
        lodash.add = add;
        lodash.attempt = attempt;
        lodash.camelCase = camelCase;
        lodash.capitalize = capitalize;
        lodash.ceil = ceil;
        lodash.clamp = clamp;
        lodash.clone = clone;
        lodash.cloneDeep = cloneDeep2;
        lodash.cloneDeepWith = cloneDeepWith;
        lodash.cloneWith = cloneWith;
        lodash.conformsTo = conformsTo;
        lodash.deburr = deburr;
        lodash.defaultTo = defaultTo;
        lodash.divide = divide;
        lodash.endsWith = endsWith;
        lodash.eq = eq;
        lodash.escape = escape;
        lodash.escapeRegExp = escapeRegExp;
        lodash.every = every;
        lodash.find = find;
        lodash.findIndex = findIndex;
        lodash.findKey = findKey;
        lodash.findLast = findLast;
        lodash.findLastIndex = findLastIndex;
        lodash.findLastKey = findLastKey;
        lodash.floor = floor;
        lodash.forEach = forEach;
        lodash.forEachRight = forEachRight;
        lodash.forIn = forIn;
        lodash.forInRight = forInRight;
        lodash.forOwn = forOwn;
        lodash.forOwnRight = forOwnRight;
        lodash.get = get5;
        lodash.gt = gt;
        lodash.gte = gte;
        lodash.has = has;
        lodash.hasIn = hasIn;
        lodash.head = head;
        lodash.identity = identity;
        lodash.includes = includes;
        lodash.indexOf = indexOf;
        lodash.inRange = inRange;
        lodash.invoke = invoke;
        lodash.isArguments = isArguments;
        lodash.isArray = isArray;
        lodash.isArrayBuffer = isArrayBuffer;
        lodash.isArrayLike = isArrayLike;
        lodash.isArrayLikeObject = isArrayLikeObject;
        lodash.isBoolean = isBoolean;
        lodash.isBuffer = isBuffer;
        lodash.isDate = isDate;
        lodash.isElement = isElement;
        lodash.isEmpty = isEmpty;
        lodash.isEqual = isEqual;
        lodash.isEqualWith = isEqualWith;
        lodash.isError = isError;
        lodash.isFinite = isFinite;
        lodash.isFunction = isFunction;
        lodash.isInteger = isInteger;
        lodash.isLength = isLength;
        lodash.isMap = isMap;
        lodash.isMatch = isMatch;
        lodash.isMatchWith = isMatchWith;
        lodash.isNaN = isNaN2;
        lodash.isNative = isNative;
        lodash.isNil = isNil;
        lodash.isNull = isNull;
        lodash.isNumber = isNumber5;
        lodash.isObject = isObject;
        lodash.isObjectLike = isObjectLike;
        lodash.isPlainObject = isPlainObject;
        lodash.isRegExp = isRegExp;
        lodash.isSafeInteger = isSafeInteger;
        lodash.isSet = isSet;
        lodash.isString = isString;
        lodash.isSymbol = isSymbol;
        lodash.isTypedArray = isTypedArray;
        lodash.isUndefined = isUndefined;
        lodash.isWeakMap = isWeakMap;
        lodash.isWeakSet = isWeakSet;
        lodash.join = join;
        lodash.kebabCase = kebabCase;
        lodash.last = last;
        lodash.lastIndexOf = lastIndexOf;
        lodash.lowerCase = lowerCase;
        lodash.lowerFirst = lowerFirst;
        lodash.lt = lt;
        lodash.lte = lte;
        lodash.max = max;
        lodash.maxBy = maxBy;
        lodash.mean = mean;
        lodash.meanBy = meanBy;
        lodash.min = min;
        lodash.minBy = minBy;
        lodash.stubArray = stubArray;
        lodash.stubFalse = stubFalse;
        lodash.stubObject = stubObject;
        lodash.stubString = stubString;
        lodash.stubTrue = stubTrue;
        lodash.multiply = multiply;
        lodash.nth = nth;
        lodash.noConflict = noConflict;
        lodash.noop = noop;
        lodash.now = now;
        lodash.pad = pad;
        lodash.padEnd = padEnd;
        lodash.padStart = padStart;
        lodash.parseInt = parseInt2;
        lodash.random = random;
        lodash.reduce = reduce;
        lodash.reduceRight = reduceRight;
        lodash.repeat = repeat;
        lodash.replace = replace;
        lodash.result = result;
        lodash.round = round;
        lodash.runInContext = runInContext2;
        lodash.sample = sample;
        lodash.size = size2;
        lodash.snakeCase = snakeCase;
        lodash.some = some;
        lodash.sortedIndex = sortedIndex;
        lodash.sortedIndexBy = sortedIndexBy;
        lodash.sortedIndexOf = sortedIndexOf;
        lodash.sortedLastIndex = sortedLastIndex;
        lodash.sortedLastIndexBy = sortedLastIndexBy;
        lodash.sortedLastIndexOf = sortedLastIndexOf;
        lodash.startCase = startCase;
        lodash.startsWith = startsWith;
        lodash.subtract = subtract;
        lodash.sum = sum;
        lodash.sumBy = sumBy;
        lodash.template = template;
        lodash.times = times;
        lodash.toFinite = toFinite;
        lodash.toInteger = toInteger;
        lodash.toLength = toLength;
        lodash.toLower = toLower;
        lodash.toNumber = toNumber;
        lodash.toSafeInteger = toSafeInteger;
        lodash.toString = toString;
        lodash.toUpper = toUpper;
        lodash.trim = trim;
        lodash.trimEnd = trimEnd;
        lodash.trimStart = trimStart;
        lodash.truncate = truncate;
        lodash.unescape = unescape;
        lodash.uniqueId = uniqueId;
        lodash.upperCase = upperCase;
        lodash.upperFirst = upperFirst;
        lodash.each = forEach;
        lodash.eachRight = forEachRight;
        lodash.first = head;
        mixin(lodash, function() {
          var source = {};
          baseForOwn(lodash, function(func, methodName) {
            if (!hasOwnProperty.call(lodash.prototype, methodName)) {
              source[methodName] = func;
            }
          });
          return source;
        }(), { "chain": false });
        lodash.VERSION = VERSION;
        arrayEach(["bind", "bindKey", "curry", "curryRight", "partial", "partialRight"], function(methodName) {
          lodash[methodName].placeholder = lodash;
        });
        arrayEach(["drop", "take"], function(methodName, index) {
          LazyWrapper.prototype[methodName] = function(n) {
            n = n === undefined2 ? 1 : nativeMax(toInteger(n), 0);
            var result2 = this.__filtered__ && !index ? new LazyWrapper(this) : this.clone();
            if (result2.__filtered__) {
              result2.__takeCount__ = nativeMin(n, result2.__takeCount__);
            } else {
              result2.__views__.push({
                "size": nativeMin(n, MAX_ARRAY_LENGTH),
                "type": methodName + (result2.__dir__ < 0 ? "Right" : "")
              });
            }
            return result2;
          };
          LazyWrapper.prototype[methodName + "Right"] = function(n) {
            return this.reverse()[methodName](n).reverse();
          };
        });
        arrayEach(["filter", "map", "takeWhile"], function(methodName, index) {
          var type = index + 1, isFilter = type == LAZY_FILTER_FLAG || type == LAZY_WHILE_FLAG;
          LazyWrapper.prototype[methodName] = function(iteratee2) {
            var result2 = this.clone();
            result2.__iteratees__.push({
              "iteratee": getIteratee(iteratee2, 3),
              "type": type
            });
            result2.__filtered__ = result2.__filtered__ || isFilter;
            return result2;
          };
        });
        arrayEach(["head", "last"], function(methodName, index) {
          var takeName = "take" + (index ? "Right" : "");
          LazyWrapper.prototype[methodName] = function() {
            return this[takeName](1).value()[0];
          };
        });
        arrayEach(["initial", "tail"], function(methodName, index) {
          var dropName = "drop" + (index ? "" : "Right");
          LazyWrapper.prototype[methodName] = function() {
            return this.__filtered__ ? new LazyWrapper(this) : this[dropName](1);
          };
        });
        LazyWrapper.prototype.compact = function() {
          return this.filter(identity);
        };
        LazyWrapper.prototype.find = function(predicate) {
          return this.filter(predicate).head();
        };
        LazyWrapper.prototype.findLast = function(predicate) {
          return this.reverse().find(predicate);
        };
        LazyWrapper.prototype.invokeMap = baseRest(function(path, args) {
          if (typeof path == "function") {
            return new LazyWrapper(this);
          }
          return this.map(function(value) {
            return baseInvoke(value, path, args);
          });
        });
        LazyWrapper.prototype.reject = function(predicate) {
          return this.filter(negate(getIteratee(predicate)));
        };
        LazyWrapper.prototype.slice = function(start, end) {
          start = toInteger(start);
          var result2 = this;
          if (result2.__filtered__ && (start > 0 || end < 0)) {
            return new LazyWrapper(result2);
          }
          if (start < 0) {
            result2 = result2.takeRight(-start);
          } else if (start) {
            result2 = result2.drop(start);
          }
          if (end !== undefined2) {
            end = toInteger(end);
            result2 = end < 0 ? result2.dropRight(-end) : result2.take(end - start);
          }
          return result2;
        };
        LazyWrapper.prototype.takeRightWhile = function(predicate) {
          return this.reverse().takeWhile(predicate).reverse();
        };
        LazyWrapper.prototype.toArray = function() {
          return this.take(MAX_ARRAY_LENGTH);
        };
        baseForOwn(LazyWrapper.prototype, function(func, methodName) {
          var checkIteratee = /^(?:filter|find|map|reject)|While$/.test(methodName), isTaker = /^(?:head|last)$/.test(methodName), lodashFunc = lodash[isTaker ? "take" + (methodName == "last" ? "Right" : "") : methodName], retUnwrapped = isTaker || /^find/.test(methodName);
          if (!lodashFunc) {
            return;
          }
          lodash.prototype[methodName] = function() {
            var value = this.__wrapped__, args = isTaker ? [1] : arguments, isLazy = value instanceof LazyWrapper, iteratee2 = args[0], useLazy = isLazy || isArray(value);
            var interceptor = function(value2) {
              var result3 = lodashFunc.apply(lodash, arrayPush([value2], args));
              return isTaker && chainAll ? result3[0] : result3;
            };
            if (useLazy && checkIteratee && typeof iteratee2 == "function" && iteratee2.length != 1) {
              isLazy = useLazy = false;
            }
            var chainAll = this.__chain__, isHybrid = !!this.__actions__.length, isUnwrapped = retUnwrapped && !chainAll, onlyLazy = isLazy && !isHybrid;
            if (!retUnwrapped && useLazy) {
              value = onlyLazy ? value : new LazyWrapper(this);
              var result2 = func.apply(value, args);
              result2.__actions__.push({ "func": thru, "args": [interceptor], "thisArg": undefined2 });
              return new LodashWrapper(result2, chainAll);
            }
            if (isUnwrapped && onlyLazy) {
              return func.apply(this, args);
            }
            result2 = this.thru(interceptor);
            return isUnwrapped ? isTaker ? result2.value()[0] : result2.value() : result2;
          };
        });
        arrayEach(["pop", "push", "shift", "sort", "splice", "unshift"], function(methodName) {
          var func = arrayProto[methodName], chainName = /^(?:push|sort|unshift)$/.test(methodName) ? "tap" : "thru", retUnwrapped = /^(?:pop|shift)$/.test(methodName);
          lodash.prototype[methodName] = function() {
            var args = arguments;
            if (retUnwrapped && !this.__chain__) {
              var value = this.value();
              return func.apply(isArray(value) ? value : [], args);
            }
            return this[chainName](function(value2) {
              return func.apply(isArray(value2) ? value2 : [], args);
            });
          };
        });
        baseForOwn(LazyWrapper.prototype, function(func, methodName) {
          var lodashFunc = lodash[methodName];
          if (lodashFunc) {
            var key = lodashFunc.name + "";
            if (!hasOwnProperty.call(realNames, key)) {
              realNames[key] = [];
            }
            realNames[key].push({ "name": methodName, "func": lodashFunc });
          }
        });
        realNames[createHybrid(undefined2, WRAP_BIND_KEY_FLAG).name] = [{
          "name": "wrapper",
          "func": undefined2
        }];
        LazyWrapper.prototype.clone = lazyClone;
        LazyWrapper.prototype.reverse = lazyReverse;
        LazyWrapper.prototype.value = lazyValue;
        lodash.prototype.at = wrapperAt;
        lodash.prototype.chain = wrapperChain;
        lodash.prototype.commit = wrapperCommit;
        lodash.prototype.next = wrapperNext;
        lodash.prototype.plant = wrapperPlant;
        lodash.prototype.reverse = wrapperReverse;
        lodash.prototype.toJSON = lodash.prototype.valueOf = lodash.prototype.value = wrapperValue;
        lodash.prototype.first = lodash.prototype.head;
        if (symIterator) {
          lodash.prototype[symIterator] = wrapperToIterator;
        }
        return lodash;
      };
      var _ = runInContext();
      if (typeof define == "function" && typeof define.amd == "object" && define.amd) {
        root._ = _;
        define(function() {
          return _;
        });
      } else if (freeModule) {
        (freeModule.exports = _)._ = _;
        freeExports._ = _;
      } else {
        root._ = _;
      }
    }).call(exports);
  }
});

// src/index.js
var src_exports = {};
__export(src_exports, {
  BarChart: () => BarChart,
  Calendar: () => Calendar,
  ColumnChart: () => ColumnChart,
  Counter: () => Counter,
  DatePicker: () => DatePicker,
  DateRangePicker: () => DateRangePicker,
  Divider: () => Divider,
  Grid: () => Grid_default,
  GridButton: () => GridButton,
  GridButtons: () => GridButtons,
  GridDot: () => GridDot,
  GridMainComponent: () => GridMainComponent,
  IntervalField: () => IntervalField,
  LineChart: () => LineChart,
  RangePicker: () => RangePicker,
  RuleBuilder: () => RuleBuilder,
  TagField: () => TagField,
  TagInput: () => TagInput,
  Tooltip: () => Tooltip_default,
  TruncateGridInfo: () => TruncateGridInfo,
  createRuleBuilderYupSchema: () => createRuleBuilderYupSchema,
  exportRuleBuilder: () => exportRuleBuilder,
  importRuleBuilder: () => importRuleBuilder
});
module.exports = __toCommonJS(src_exports);
init_react_shim();

// src/components/index.js
init_react_shim();

// src/components/Tooltip.jsx
init_react_shim();
var import_react = require("react");
var import_prop_types = __toESM(require_prop_types());
var import_styled_components = __toESM(require("styled-components"));
var import_etvaskit = require("@etvas/etvaskit");
var Tooltip = ({
  placement,
  children,
  content,
  delay,
  distance,
  ...props
}) => {
  const [isTooltipShown, setIsToolTipShown] = (0, import_react.useState)(false);
  const timeoutRef = (0, import_react.useRef)();
  const showTip = () => {
    timeoutRef.current = setTimeout(() => {
      setIsToolTipShown(true);
    }, delay || 350);
  };
  const hideTip = () => {
    clearInterval(timeoutRef.current);
    setIsToolTipShown(false);
  };
  return /* @__PURE__ */ React.createElement(StyledFlex, { onMouseEnter: showTip, onMouseLeave: hideTip, ...props }, children, isTooltipShown && /* @__PURE__ */ React.createElement(
    StyledTypography,
    {
      px: 4,
      py: 2,
      color: "baseWhite",
      variant: "base14Light",
      distance,
      placement
    },
    content
  ));
};
var StyledFlex = (0, import_styled_components.default)(import_etvaskit.Flex)`
  display: inline;
  position: relative;
`;
var StyledTypography = (0, import_styled_components.default)(import_etvaskit.Typography)`
  z-index: 50;
  border-radius: 3px;
  position: absolute;
  transform: translateX(-50%);
  left: 50%;
  background: #536083;
  width: max-content;
  max-width: 300px;

  ${({ placement, distance }) => placement === "right" ? ` left: calc(100% + ${distance});
  top: 50%;
  transform: translateX(0) translateY(-50%);` : placement === "left" ? `left: auto;
  right: calc(100% + ${distance});
  top: 50%;
  transform: translateX(0) translateY(-50%);` : `
${placement}: calc(${distance} * -1);
`};
`;
Tooltip.propTypes = {
  children: import_prop_types.default.any,
  content: import_prop_types.default.any,
  delay: import_prop_types.default.number,
  placement: import_prop_types.default.string,
  distance: import_prop_types.default.string
};
Tooltip.defaultProps = {
  placement: "top",
  distance: "35px"
};
var Tooltip_default = Tooltip;

// src/components/DatePicker/index.js
init_react_shim();

// src/components/DatePicker/Calendar.jsx
init_react_shim();
var import_react2 = require("react");
var import_moment = __toESM(require("moment"));
var import_de = require("moment/locale/de");
var import_prop_types2 = __toESM(require_prop_types());
var import_styled_components2 = require("styled-components");
var import_etvaskit2 = require("@etvas/etvaskit");

// src/components/DatePicker/constants.js
init_react_shim();
var COMMON_FORMAT = "YYYY-MM-DD";
var CURRENT_MONTH_FORMAT = "MMMM YYYY";
var compareMethods = {
  lastPeriod: "lastPeriod",
  lastYear: "lastYear",
  customPeriod: "customPeriod"
};

// src/components/DatePicker/Calendar.jsx
var Calendar = ({
  value,
  browseDate,
  dayFormat,
  monthFormat,
  yearFormat,
  weekdayFormat,
  monthSelector,
  monthNavigation,
  monthNavigationWithinYear,
  yearSelector,
  startOfTime,
  endOfTime,
  onChange,
  onHover,
  highlight,
  secondaryHighlight,
  highlightCurrent,
  canChange,
  label,
  ...props
}) => {
  const [isMonthsShown, setMonthsShown] = (0, import_react2.useState)(false);
  const [isYearsShown, setYearsShown] = (0, import_react2.useState)(false);
  const [yearPanel, setYearPanel] = (0, import_react2.useState)(null);
  const [currentDate, setCurrentDate] = (0, import_react2.useState)(browseDate || value);
  (0, import_react2.useEffect)(() => {
    setCurrentDate(browseDate || value);
  }, [value, browseDate]);
  let m = (0, import_react2.useMemo)(() => (0, import_moment.default)(currentDate), [currentDate]);
  const mRef = (0, import_react2.useMemo)(() => (0, import_moment.default)(value), [value]);
  const paleozoic = (0, import_react2.useMemo)(
    () => startOfTime ? (0, import_moment.default)(startOfTime) : (0, import_moment.default)().add(-160, "year"),
    [startOfTime]
  );
  const future = (0, import_react2.useMemo)(
    () => endOfTime ? (0, import_moment.default)(endOfTime) : (0, import_moment.default)().add(160, "year"),
    [endOfTime]
  );
  const isBetweenDate = (0, import_react2.useCallback)(
    (mom) => mom.isSameOrAfter(paleozoic, "day") && mom.isSameOrBefore(future, "day"),
    [future, paleozoic]
  );
  const isBetweenMonth = (0, import_react2.useCallback)(
    (mom) => {
      const _s = mom.clone().startOf("month");
      const _e = mom.clone().endOf("month");
      return _s.isSameOrAfter(paleozoic, "day") && _s.isSameOrBefore(future, "day") || _e.isSameOrAfter(paleozoic, "day") && _e.isSameOrBefore(future, "day");
    },
    [future, paleozoic]
  );
  const isBetweenYear = (0, import_react2.useCallback)(
    (year2) => paleozoic.year() <= year2 && future.year() >= year2,
    [future, paleozoic]
  );
  const [cal, month] = (0, import_react2.useMemo)(() => {
    const now = (0, import_moment.default)();
    const start = m.clone().startOf("month");
    const end = m.clone().endOf("month");
    if (start.isSame(start.clone().startOf("week"), "day")) {
      start.startOf("week").add(-1, "day");
    }
    if (end.isSame(end.clone().endOf("week"), "day")) {
      end.endOf("week").add(1, "day");
    }
    if (end.clone().endOf("week").diff(start.clone().startOf("week"), "week") < 5) {
      start.startOf("week").add(-1, "day");
    }
    start.startOf("week");
    end.endOf("week");
    const cal2 = [];
    for (let c = start.clone(); c.isSameOrBefore(end, "day"); c.add(1, "day")) {
      cal2.push({
        key: c.valueOf(),
        label: c.format(dayFormat),
        value: c.date(),
        _m: c.clone(),
        current: c.isSame(mRef, "day"),
        month: c.isSame(m, "month"),
        today: c.isSame(now, "day"),
        highlight: highlight(c.format(COMMON_FORMAT), c.clone()),
        secondaryHighlight: secondaryHighlight(
          c.format(COMMON_FORMAT),
          c.clone()
        )
      });
    }
    const month2 = [];
    for (let mon = m.clone().startOf("year"); mon.isSame(m, "year"); mon.add(1, "month")) {
      month2.push({
        key: mon.valueOf(),
        label: mon.format(monthFormat),
        value: mon.month(),
        current: mon.isSame(mRef, "month"),
        today: mon.isSame(now, "month"),
        _m: mon.clone()
      });
    }
    return [cal2, month2];
  }, [dayFormat, highlight, secondaryHighlight, m, mRef, monthFormat]);
  const week = (0, import_react2.useMemo)(() => {
    const week2 = [];
    const start = (0, import_moment.default)().startOf("week");
    for (let w = start.clone(); w.isSameOrBefore(start, "week"); w.add(1, "day")) {
      week2.push({ key: w.format("X"), label: w.format(weekdayFormat) });
    }
    return week2;
  }, [weekdayFormat]);
  const year = (0, import_react2.useMemo)(() => {
    const year2 = [];
    const startYear = (yearPanel ? yearPanel : mRef.year()) - 12;
    const now = (0, import_moment.default)();
    for (let i = startYear; i < startYear + 22; i++) {
      year2.push({
        key: i,
        label: i,
        value: i,
        current: mRef.year() === i,
        today: now.year() === i
      });
    }
    return year2;
  }, [mRef, yearPanel]);
  const canNavigateMonth = (dir) => {
    const next = m.clone().add(dir, "month");
    if (!isBetweenMonth(next)) {
      return false;
    }
    if (monthNavigationWithinYear && !next.isSame(mRef, "year")) {
      return false;
    }
    return true;
  };
  const canNavigateYear = (dir) => isBetweenYear((yearPanel ? yearPanel : m.year()) + dir);
  const toggleMonths = () => {
    if (!isMonthsShown) {
      setYearsShown(false);
    }
    setMonthsShown(!isMonthsShown);
  };
  const toggleYears = () => {
    if (!isYearsShown) {
      setMonthsShown(false);
    }
    setYearsShown(!isYearsShown);
  };
  const handleYearChange = (year2) => {
    let next = m.clone().year(year2);
    if (next.isBefore(paleozoic, "day")) {
      next = paleozoic.clone();
    }
    if (next.isAfter(future, "day")) {
      next = future.clone();
    }
    setCurrentDate(next.format(COMMON_FORMAT));
    toggleYears();
  };
  const handleYearNavigate = (dir) => {
    const prev = yearPanel ? yearPanel : mRef.year();
    setYearPanel(prev + dir);
  };
  const handleMonthChange = (month2) => {
    setCurrentDate(m.month(month2).format(COMMON_FORMAT));
    toggleMonths();
  };
  const handleMonthNavigate = (direction) => {
    setMonthsShown(false);
    setCurrentDate(m.add(direction, "month").format(COMMON_FORMAT));
  };
  const handleDayChange = (day) => {
    if (!isBetweenDate(day._m)) {
      return;
    }
    if (monthNavigationWithinYear && !day._m.isSame(mRef, "year")) {
      return;
    }
    if (!canChange || canChange(day._m.format(COMMON_FORMAT))) {
      setCurrentDate(day._m.format(COMMON_FORMAT));
      onChange && onChange(day._m.format(COMMON_FORMAT));
    }
  };
  const handleHover = (day) => {
    onHover && onHover(day._m.format(COMMON_FORMAT));
  };
  return /* @__PURE__ */ React.createElement(import_etvaskit2.Flex, { justifyContent: "flex-start", flexWrap: "wrap", width: "224px", ...props }, !!label && /* @__PURE__ */ React.createElement(import_etvaskit2.Box, { mb: 1 }, /* @__PURE__ */ React.createElement(import_etvaskit2.Typography, { variant: "base12Bold", color: "baseMetal" }, label)), /* @__PURE__ */ React.createElement(import_etvaskit2.Flex, { width: "224px", mb: 1 }, monthSelector && /* @__PURE__ */ React.createElement(DropTrigger, { onClick: toggleMonths, mx: 1 }, /* @__PURE__ */ React.createElement(import_etvaskit2.Flex, { alignItems: "center" }, /* @__PURE__ */ React.createElement(
    import_etvaskit2.Typography,
    {
      variant: "labelSmallBold",
      color: isMonthsShown ? "accent" : void 0
    },
    m.format(monthFormat)
  ), /* @__PURE__ */ React.createElement(
    Rotated,
    {
      justifyContent: "center",
      alignItems: "center",
      color: isMonthsShown ? "accent" : void 0,
      "aria-expanded": isMonthsShown
    },
    /* @__PURE__ */ React.createElement(import_etvaskit2.Icon, { name: "chevronLeft" })
  ))), yearSelector && /* @__PURE__ */ React.createElement(DropTrigger, { onClick: toggleYears, mx: 1 }, /* @__PURE__ */ React.createElement(import_etvaskit2.Flex, { alignItems: "center" }, /* @__PURE__ */ React.createElement(
    import_etvaskit2.Typography,
    {
      variant: "labelSmallBold",
      color: isYearsShown ? "accent" : void 0
    },
    m.format(yearFormat)
  ), /* @__PURE__ */ React.createElement(
    Rotated,
    {
      justifyContent: "center",
      alignItems: "center",
      color: isYearsShown ? "accent" : void 0,
      "aria-expanded": isYearsShown
    },
    /* @__PURE__ */ React.createElement(import_etvaskit2.Icon, { name: "chevronLeft" })
  ))), monthNavigation && /* @__PURE__ */ React.createElement(
    MonthNav,
    {
      onClick: () => handleMonthNavigate(-1),
      disabled: !canNavigateMonth(-1)
    },
    /* @__PURE__ */ React.createElement(import_etvaskit2.Icon, { name: "chevronLeft" })
  ), monthNavigation && /* @__PURE__ */ React.createElement(
    MonthNav,
    {
      onClick: () => handleMonthNavigate(1),
      disabled: !canNavigateMonth(1)
    },
    /* @__PURE__ */ React.createElement(import_etvaskit2.Icon, { name: "chevronRight" })
  )), monthSelector && /* @__PURE__ */ React.createElement(ConditionalFlex, { flexWrap: "wrap", my: 4, shown: isMonthsShown }, month.map((mon) => /* @__PURE__ */ React.createElement(CellWrapper, { key: mon.key, ratio: 1 / 2 }, /* @__PURE__ */ React.createElement(
    MonthCell,
    {
      current: mon.current,
      disabled: !isBetweenMonth(mon._m),
      onClick: () => handleMonthChange(mon.value)
    },
    /* @__PURE__ */ React.createElement(
      import_etvaskit2.Typography,
      {
        variant: "default",
        fontWeight: mon.today ? "bold" : 300
      },
      mon.label
    )
  )))), yearSelector && /* @__PURE__ */ React.createElement(ConditionalFlex, { flexWrap: "wrap", my: 4, shown: isYearsShown }, /* @__PURE__ */ React.createElement(CellWrapper, { ratio: 1 / 4 }, /* @__PURE__ */ React.createElement(
    YearCell,
    {
      disabled: !canNavigateYear(-10),
      onClick: () => handleYearNavigate(-10)
    },
    /* @__PURE__ */ React.createElement(import_etvaskit2.Icon, { name: "chevronLeft" })
  )), year.map((y) => /* @__PURE__ */ React.createElement(CellWrapper, { ratio: 1 / 4, key: y.key }, /* @__PURE__ */ React.createElement(
    YearCell,
    {
      key: y.key,
      current: y.current,
      disabled: !isBetweenYear(y.value),
      onClick: () => handleYearChange(y.value)
    },
    /* @__PURE__ */ React.createElement(
      import_etvaskit2.Typography,
      {
        variant: "default",
        fontWeight: y.today ? "bold" : 300
      },
      y.label
    )
  ))), /* @__PURE__ */ React.createElement(
    YearCell,
    {
      disabled: !canNavigateYear(10),
      onClick: () => handleYearNavigate(10)
    },
    /* @__PURE__ */ React.createElement(import_etvaskit2.Icon, { name: "chevronRight" })
  )), !isMonthsShown && !isYearsShown && week.map((wd) => /* @__PURE__ */ React.createElement(CellWrapper, { key: wd.key, ratio: 1 / 7 }, /* @__PURE__ */ React.createElement(WeekCell, null, /* @__PURE__ */ React.createElement(import_etvaskit2.Typography, { variant: "default", opacity: 0.5 }, wd.label)))), !isMonthsShown && !isYearsShown && cal.map((day) => /* @__PURE__ */ React.createElement(CellWrapper, { key: day.key, ratio: 1 / 7 }, /* @__PURE__ */ React.createElement(
    DayCell,
    {
      onMouseOver: () => handleHover(day),
      onClick: () => handleDayChange(day),
      highlightCurrent,
      current: day.current,
      highlight: day.highlight,
      secondaryHighlight: day.secondaryHighlight,
      disabled: !isBetweenDate(day._m),
      month: day.month
    },
    /* @__PURE__ */ React.createElement(
      import_etvaskit2.Typography,
      {
        variant: "default",
        fontWeight: day.today ? "bold" : 300
      },
      day.label
    )
  ))));
};
var ConditionalFlex = (0, import_etvaskit2.styled)(import_etvaskit2.Flex)(
  ({ shown }) => (0, import_styled_components2.css)({
    display: shown ? "flex" : "none"
  })
);
var Rotated = (0, import_etvaskit2.styled)(import_etvaskit2.Flex)`
  transform: rotate(-90deg);
  &[aria-expanded='true'] {
    transform: rotate(90deg);
  }
`;
var cellStyle = {
  userSelect: "none",
  borderRadius: "100%",
  height: "100%",
  display: "flex",
  width: "100%",
  alignItems: "center",
  justifyContent: "center"
};
var CellWrapper = (0, import_etvaskit2.styled)(import_etvaskit2.Flex)(
  ({ ratio }) => (0, import_styled_components2.css)({
    height: "32px",
    padding: "1px",
    alignItems: "center",
    justifyContent: "center",
    flex: `0 0 ${100 * ratio}%`
  })
);
var YearCell = (0, import_etvaskit2.styled)(import_etvaskit2.Touchable)(
  ({ current, disabled, theme }) => (0, import_styled_components2.css)({
    ...cellStyle,
    flex: "1 1 25%",
    borderRadius: 6,
    height: "32px",
    opacity: disabled ? 0.35 : 1,
    backgroundColor: current ? theme.colors.accentFade : "transparent",
    border: "1px solid transparent",
    "&:hover": {
      color: current ? theme.colors.accentDarkest : theme.colors.accent,
      borderColor: disabled ? "transparent" : theme.colors.accent
    }
  })
);
var MonthCell = (0, import_etvaskit2.styled)(import_etvaskit2.Touchable)(
  ({ current, disabled, theme }) => (0, import_styled_components2.css)({
    ...cellStyle,
    flex: "1 1 50%",
    borderRadius: 6,
    height: "32px",
    opacity: disabled ? 0.35 : 1,
    backgroundColor: current ? theme.colors.accentFade : "transparent",
    border: "1px solid transparent",
    "&:hover": {
      color: current ? theme.colors.accentDarkest : theme.colors.accent,
      borderColor: disabled ? "transparent" : theme.colors.accent
    }
  })
);
var WeekCell = (0, import_etvaskit2.styled)(import_etvaskit2.Typography)(
  ({ theme }) => (0, import_styled_components2.css)({
    ...cellStyle,
    opacity: 0.65
  })
);
var DayCell = (0, import_etvaskit2.styled)(import_etvaskit2.Touchable)(
  ({
    current,
    disabled,
    highlight,
    secondaryHighlight,
    hidden,
    month,
    theme,
    highlightCurrent
  }) => (0, import_styled_components2.css)({
    ...cellStyle,
    backgroundColor: () => {
      if (highlightCurrent && current || highlight) {
        return theme.colors.accentFade;
      }
      if (secondaryHighlight) {
        return theme.colors.accentFade;
      }
      return "transparent";
    },
    cursor: disabled || hidden ? "not-allowed" : "pointer",
    opacity: hidden ? 0.05 : disabled || secondaryHighlight && !highlight ? 0.35 : month ? 1 : 0.1,
    border: "1px solid transparent",
    "&:hover": {
      color: current ? theme.colors.accentDarkest : month ? theme.colors.accent : theme.colors.baseBlack,
      borderColor: disabled || hidden ? "transparent" : month ? theme.colors.accent : "transparent"
    }
  })
);
var MonthNav = (0, import_etvaskit2.styled)(import_etvaskit2.Touchable)(
  () => (0, import_styled_components2.css)({
    flex: "0 0 32px",
    height: "32px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  })
);
var DropTrigger = (0, import_etvaskit2.styled)(import_etvaskit2.Touchable)`
  height: 32px;
  flex: 1 1;
`;
Calendar.propTypes = {
  value: import_prop_types2.default.string,
  browseDate: import_prop_types2.default.string,
  startOfTime: import_prop_types2.default.string,
  endOfTime: import_prop_types2.default.string,
  dayFormat: import_prop_types2.default.string,
  monthFormat: import_prop_types2.default.string,
  yearFormat: import_prop_types2.default.string,
  weekdayFormat: import_prop_types2.default.string,
  monthSelector: import_prop_types2.default.bool,
  yearSelector: import_prop_types2.default.bool,
  monthNavigation: import_prop_types2.default.bool,
  monthNavigationWithinYear: import_prop_types2.default.bool,
  onChange: import_prop_types2.default.func,
  onHover: import_prop_types2.default.func,
  highlight: import_prop_types2.default.func,
  secondaryHighlight: import_prop_types2.default.func,
  highlightCurrent: import_prop_types2.default.bool,
  canChange: import_prop_types2.default.func,
  label: import_prop_types2.default.node
};
Calendar.defaultProps = {
  dayFormat: "D",
  monthFormat: "MMMM",
  yearFormat: "YYYY",
  weekdayFormat: "dd",
  monthSelector: true,
  yearSelector: true,
  monthNavigation: true,
  monthNavigationWithinYear: false,
  highlightCurrent: true,
  highlight: () => false,
  secondaryHighlight: () => false
};

// src/components/DatePicker/DatePicker.jsx
init_react_shim();
var import_react3 = require("react");
var import_moment2 = __toESM(require("moment"));
var import_prop_types3 = __toESM(require_prop_types());
var import_styled_components3 = require("styled-components");
var import_etvaskit3 = require("@etvas/etvaskit");
var DatePicker = ({
  value,
  displayFormat,
  collapseOnPick,
  disabled,
  onChange,
  ...props
}) => {
  const wrapRef = (0, import_react3.useRef)();
  const [isExpanded, setExpanded] = (0, import_react3.useState)(false);
  (0, import_react3.useLayoutEffect)(() => {
    const listener = (event) => {
      var _a, _b;
      if (((_a = wrapRef == null ? void 0 : wrapRef.current) == null ? void 0 : _a.contains(event.target)) || ((_b = wrapRef == null ? void 0 : wrapRef.current) == null ? void 0 : _b.contains(event.srcElement))) {
        return;
      }
      setExpanded(false);
    };
    window.addEventListener("click", listener);
    return () => window.removeEventListener("click", listener);
  }, []);
  const mDate = (0, import_react3.useMemo)(() => value ? (0, import_moment2.default)(value) : (0, import_moment2.default)(), [value]);
  const handleChangeDate = (value2) => {
    if (collapseOnPick) {
      setExpanded(false);
    }
    onChange && onChange(value2);
  };
  const toggleExpanded = () => {
    !disabled && setExpanded(!isExpanded);
  };
  return /* @__PURE__ */ React.createElement(Wrapper, { ref: wrapRef }, /* @__PURE__ */ React.createElement(
    FakeInput,
    {
      onClick: toggleExpanded,
      expanded: isExpanded,
      disabled
    },
    /* @__PURE__ */ React.createElement(
      import_etvaskit3.Typography,
      {
        mx: 2,
        truncate: true,
        color: disabled ? "textInputDisabled" : "baseBlack"
      },
      mDate.format(displayFormat)
    ),
    /* @__PURE__ */ React.createElement(import_etvaskit3.Flex, { mr: 2, opacity: disabled ? 0.35 : 1 }, /* @__PURE__ */ React.createElement(import_etvaskit3.Icon, { name: "calendar" }))
  ), isExpanded && /* @__PURE__ */ React.createElement(DropdownWrapper, null, /* @__PURE__ */ React.createElement(
    Calendar,
    {
      value: mDate.format(COMMON_FORMAT),
      onChange: handleChangeDate,
      ...props
    }
  )));
};
var DropdownWrapper = (0, import_etvaskit3.styled)(import_etvaskit3.Flex)(
  ({ theme }) => (0, import_styled_components3.css)({
    backgroundColor: theme.colors.white,
    padding: "16px",
    border: `1px solid ${theme.colors.accent}`,
    boxShadow: theme.shadows.etvasCard,
    position: "absolute",
    left: 0,
    top: "44px",
    borderRadius: 2,
    zIndex: theme.zIndices.menu
  })
);
var FakeInput = (0, import_etvaskit3.styled)(import_etvaskit3.Flex)(
  ({ expanded, disabled, theme }) => (0, import_styled_components3.css)({
    width: "100%",
    height: "40px",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: disabled ? theme.colors.backgroundInputGray : "white",
    border: `1px solid ${disabled ? theme.colors.inputBorderGray : expanded ? theme.colors.accent : theme.colors.inputBorderGray}`,
    borderRadius: 2,
    cursor: disabled ? "not-allowed" : "pointer",
    pointerEvents: disabled ? "none" : "all",
    "&:hover": {
      borderColor: disabled ? theme.colors.inputBorderGray : theme.colors.accent
    }
  })
);
var Wrapper = (0, import_etvaskit3.styled)(import_etvaskit3.Flex)`
  width: 100%;
  position: relative;
`;
DatePicker.propTypes = {
  value: import_prop_types3.default.oneOfType([import_prop_types3.default.number, import_prop_types3.default.string]),
  onChange: import_prop_types3.default.func,
  displayFormat: import_prop_types3.default.string,
  collapseOnPick: import_prop_types3.default.bool,
  disabled: import_prop_types3.default.bool
};
DatePicker.defaultProps = {
  displayFormat: "dddd, LL",
  collapseOnPick: true
};

// src/components/DatePicker/DateRangePicker.jsx
init_react_shim();
var import_react5 = require("react");
var import_moment4 = __toESM(require("moment"));
var import_prop_types5 = __toESM(require_prop_types());
var import_styled_components5 = require("styled-components");
var import_etvaskit5 = require("@etvas/etvaskit");

// src/components/DatePicker/Years.jsx
init_react_shim();
var import_react4 = require("react");
var import_moment3 = __toESM(require("moment"));
var import_prop_types4 = __toESM(require_prop_types());
var import_styled_components4 = require("styled-components");
var import_etvaskit4 = require("@etvas/etvaskit");
var Years = ({
  value,
  startOfTime,
  endOfTime,
  displayStart,
  displayEnd,
  perRow,
  onChange,
  label,
  ...props
}) => {
  const interval = (0, import_react4.useMemo)(() => {
    const interval2 = [];
    const start = displayStart || value - 10;
    const end = displayEnd || value + 9;
    const sot = startOfTime || displayStart;
    const eot = endOfTime || displayEnd;
    for (let i = start; i <= end; i++) {
      interval2.push({
        id: i,
        label: i,
        value: i,
        current: value === i,
        disabled: i < sot || i > eot
      });
    }
    return interval2;
  }, [displayEnd, displayStart, endOfTime, startOfTime, value]);
  const handleCellClick = (cell) => {
    if (cell.disabled) {
      return;
    }
    onChange(cell.value);
  };
  const today = (0, import_moment3.default)().year();
  return /* @__PURE__ */ React.createElement(import_etvaskit4.Box, { width: "224px", ...props }, !!label && /* @__PURE__ */ React.createElement(import_etvaskit4.Box, { mb: 1 }, /* @__PURE__ */ React.createElement(import_etvaskit4.Typography, { variant: "base12Bold", color: "baseMetal", px: 3 }, label)), /* @__PURE__ */ React.createElement(import_etvaskit4.Typography, { variant: "labelSmallBold", px: 3, mt: 2 }, value), /* @__PURE__ */ React.createElement(import_etvaskit4.Flex, { justifyContent: "flex-start", flexWrap: "wrap", mt: 2 }, interval.map((cell) => /* @__PURE__ */ React.createElement(
    CellTouch,
    {
      key: cell.id,
      perRow,
      current: cell.current,
      disabled: cell.disabled,
      onClick: () => handleCellClick(cell)
    },
    /* @__PURE__ */ React.createElement(
      import_etvaskit4.Typography,
      {
        variant: cell.value === today ? "labelSmallBold" : "labelSmall"
      },
      cell.label
    )
  ))));
};
var CellTouch = (0, import_etvaskit4.styled)(import_etvaskit4.Touchable)(
  ({ current, disabled, perRow, theme }) => (0, import_styled_components4.css)({
    flex: `0 0 ${100 / perRow}%`,
    borderRadius: 6,
    height: "32px",
    border: "none",
    display: "flex",
    alignItems: "center",
    cursor: disabled ? "not-allowed" : "pointer",
    opacity: disabled ? 0.35 : 1,
    justifyContent: "center",
    backgroundColor: current ? theme.colors.accentFade : "transparent",
    "&:hover": {
      color: current ? theme.colors.accentDarkest : theme.colors.accent
    }
  })
);
Years.propTypes = {
  value: import_prop_types4.default.number.isRequired,
  perRow: import_prop_types4.default.number,
  startOfTime: import_prop_types4.default.number,
  endOfTime: import_prop_types4.default.number,
  displayStart: import_prop_types4.default.number,
  displayEnd: import_prop_types4.default.number,
  displayStatus: import_prop_types4.default.func,
  onChange: import_prop_types4.default.func,
  label: import_prop_types4.default.node
};
Years.defaultProps = {
  perRow: 4
};

// src/components/DatePicker/DateRangePicker.jsx
var DateRangePicker = ({
  startOfTime,
  endOfTime,
  value,
  displayFormat,
  yearDisplayStart,
  yearDisplayEnd,
  navigationByYear,
  disabled,
  onChange,
  label,
  placeholder,
  labelYear,
  labelStartDate,
  labelEndDate,
  ...props
}) => {
  const wrapRef = (0, import_react5.useRef)();
  const [isExpanded, setExpanded] = (0, import_react5.useState)(false);
  (0, import_react5.useLayoutEffect)(() => {
    const listener = (event) => {
      var _a, _b;
      if (((_a = wrapRef == null ? void 0 : wrapRef.current) == null ? void 0 : _a.contains(event.target)) || ((_b = wrapRef == null ? void 0 : wrapRef.current) == null ? void 0 : _b.contains(event.srcElement))) {
        return;
      }
      setExpanded(false);
    };
    window.addEventListener("click", listener);
    return () => window.removeEventListener("click", listener);
  }, []);
  const mSot = (0, import_moment4.default)(startOfTime || (0, import_moment4.default)().add(-160, "year").startOf("year"));
  const mEot = (0, import_moment4.default)(endOfTime || (0, import_moment4.default)().add(160, "year").endOf("year"));
  const [mStart, mEnd] = (0, import_react5.useMemo)(() => {
    const { start, end } = value || {};
    const mStart2 = (0, import_moment4.default)(start || (0, import_moment4.default)().add(-1, "month").startOf("month"));
    const mEnd2 = (0, import_moment4.default)(end || (0, import_moment4.default)());
    return [mStart2, mEnd2];
  }, [value]);
  const currentYear = (0, import_react5.useMemo)(() => mStart.year(), [mStart]);
  const emitChange = (start, end) => {
    if (!onChange) {
      return;
    }
    onChange({
      start: start || mStart.format(COMMON_FORMAT),
      end: end || mEnd.format(COMMON_FORMAT)
    });
  };
  const handleChangeCurrentYear = (value2) => {
    let ds = mStart.year(value2);
    let de = mEnd.year(value2);
    if (ds.isBefore(mSot, "day")) {
      ds = mSot.clone();
    }
    if (de.isAfter(mEot, "day")) {
      de = mEot.clone();
    }
    emitChange(ds.format(COMMON_FORMAT), de.format(COMMON_FORMAT));
  };
  const handleChangeDateStart = (value2) => {
    emitChange(value2);
  };
  const handleChangeDateEnd = (value2) => {
    emitChange(null, value2);
  };
  const toggleExpanded = () => {
    !disabled && setExpanded(!isExpanded);
  };
  const highlight = (day) => mStart.isSameOrBefore(day) && mEnd.isSameOrAfter(day);
  console.warn("* Deprecated: please use RangePicker component *");
  return /* @__PURE__ */ React.createElement(import_etvaskit5.Flex, { flexDirection: "column", ...props }, label && /* @__PURE__ */ React.createElement(import_etvaskit5.Flex, { mb: 1, alignItems: "center" }, /* @__PURE__ */ React.createElement(
    import_etvaskit5.Typography,
    {
      as: "label",
      variant: "base12Bold",
      color: "baseMetal",
      width: "fit-content"
    },
    label
  )), /* @__PURE__ */ React.createElement(Wrapper2, { ref: wrapRef }, /* @__PURE__ */ React.createElement(
    FakeInput2,
    {
      onClick: toggleExpanded,
      expanded: isExpanded,
      disabled
    },
    /* @__PURE__ */ React.createElement(
      import_etvaskit5.Typography,
      {
        mx: 2,
        truncate: true,
        variant: "labelSmall",
        color: disabled ? "textInputDisabled" : "baseBlack"
      },
      placeholder && !value ? placeholder : /* @__PURE__ */ React.createElement(React.Fragment, null, mStart.format(displayFormat), " \xF7", " ", mEnd.format(displayFormat))
    ),
    /* @__PURE__ */ React.createElement(import_etvaskit5.Flex, { mr: 2, opacity: disabled ? 0.35 : 1 }, /* @__PURE__ */ React.createElement(import_etvaskit5.Icon, { name: "calendar" }))
  ), isExpanded && /* @__PURE__ */ React.createElement(DropdownWrapper2, null, navigationByYear && /* @__PURE__ */ React.createElement(
    Years,
    {
      mr: 2,
      value: currentYear,
      displayStart: yearDisplayStart,
      displayEnd: yearDisplayEnd,
      startOfTime: mSot.year(),
      endOfTime: mEot.year(),
      onChange: handleChangeCurrentYear,
      label: labelYear
    }
  ), /* @__PURE__ */ React.createElement(
    Calendar,
    {
      mx: 2,
      value: mStart.format(COMMON_FORMAT),
      monthNavigationWithinYear: navigationByYear,
      yearSelector: !navigationByYear,
      onChange: handleChangeDateStart,
      startOfTime: mSot.format(COMMON_FORMAT),
      endOfTime: mEnd.format(COMMON_FORMAT),
      highlight,
      label: labelStartDate
    }
  ), /* @__PURE__ */ React.createElement(
    Calendar,
    {
      yearSelector: !navigationByYear,
      ml: 2,
      value: mEnd.format(COMMON_FORMAT),
      monthNavigationWithinYear: navigationByYear,
      onChange: handleChangeDateEnd,
      startOfTime: mStart.format(COMMON_FORMAT),
      endOfTime: mEot.format(COMMON_FORMAT),
      highlight,
      label: labelEndDate
    }
  ))));
};
var DropdownWrapper2 = (0, import_etvaskit5.styled)(import_etvaskit5.Flex)(
  ({ theme }) => (0, import_styled_components5.css)({
    backgroundColor: theme.colors.white,
    padding: "16px",
    border: `1px solid ${theme.colors.accent}`,
    boxShadow: theme.shadows.etvasCard,
    position: "absolute",
    left: 0,
    top: "44px",
    borderRadius: 2,
    zIndex: theme.zIndices.menu
  })
);
var FakeInput2 = (0, import_etvaskit5.styled)(import_etvaskit5.Flex)(
  ({ expanded, disabled, theme }) => (0, import_styled_components5.css)({
    width: "100%",
    height: "40px",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: disabled ? theme.colors.backgroundInputGray : "white",
    border: `1px solid ${getDefaultBorderColor({ expanded, disabled, theme })}`,
    borderRadius: 2,
    cursor: disabled ? "not-allowed" : "pointer",
    pointerEvents: disabled ? "none" : "all",
    "&:hover": {
      borderColor: disabled ? theme.colors.inputBorderGray : theme.colors.accent
    }
  })
);
var getDefaultBorderColor = ({ expanded, disabled, theme }) => {
  if (disabled) {
    return theme.colors.inputBorderGray;
  }
  if (expanded) {
    return theme.colors.accent;
  }
  return theme.colors.inputBorderGray;
};
var Wrapper2 = (0, import_etvaskit5.styled)(import_etvaskit5.Flex)`
  width: 100%;
  position: relative;
`;
DateRangePicker.propTypes = {
  yearDisplayStart: import_prop_types5.default.number,
  yearDisplayEnd: import_prop_types5.default.number,
  startOfTime: import_prop_types5.default.oneOfType([
    import_prop_types5.default.string,
    import_prop_types5.default.object,
    import_prop_types5.default.number
  ]),
  endOfTime: import_prop_types5.default.oneOfType([
    import_prop_types5.default.string,
    import_prop_types5.default.object,
    import_prop_types5.default.number
  ]),
  value: import_prop_types5.default.shape({
    start: import_prop_types5.default.oneOfType([
      import_prop_types5.default.string,
      import_prop_types5.default.object,
      import_prop_types5.default.number
    ]),
    end: import_prop_types5.default.oneOfType([
      import_prop_types5.default.string,
      import_prop_types5.default.object,
      import_prop_types5.default.number
    ])
  }),
  onChange: import_prop_types5.default.func,
  disabled: import_prop_types5.default.bool,
  displayFormat: import_prop_types5.default.string,
  label: import_prop_types5.default.node,
  placeholder: import_prop_types5.default.node,
  navigationByYear: import_prop_types5.default.bool,
  labelYear: import_prop_types5.default.node,
  labelStartDate: import_prop_types5.default.node,
  labelEndDate: import_prop_types5.default.node
};
DateRangePicker.defaultProps = {
  displayFormat: "D MMMM YYYY",
  navigationByYear: true
};

// src/components/DatePicker/RangePicker.jsx
init_react_shim();
var import_react6 = require("react");
var import_moment5 = __toESM(require("moment"));
var import_prop_types6 = __toESM(require_prop_types());
var import_styled_components6 = require("styled-components");
var import_etvaskit6 = require("@etvas/etvaskit");
var RangePicker = ({
  multiple,
  startOfTime,
  endOfTime,
  value: rawValue,
  displayFormat,
  yearDisplayStart,
  yearDisplayEnd,
  navigationByYear,
  disabled,
  onChange,
  label,
  placeholder,
  labelCompareWith,
  labelCompareDivider,
  labelCurrent,
  labelCompare,
  labelLastPeriod,
  compareLabels,
  ...props
}) => {
  const wrapRef = (0, import_react6.useRef)();
  const [isExpanded, setExpanded] = (0, import_react6.useState)(false);
  const [isSettingEnd, setSettingEnd] = (0, import_react6.useState)(false);
  const [currentHover, setCurrentHover] = (0, import_react6.useState)(null);
  const [isComparing, setComparing] = (0, import_react6.useState)(false);
  const [compareMethod, setCompareMethod] = (0, import_react6.useState)(compareMethods.lastPeriod);
  const [showCurrentPeriod, setShowCurrentPeriod] = (0, import_react6.useState)(true);
  const value = multiple ? rawValue == null ? void 0 : rawValue[0] : rawValue;
  const compareValue = multiple ? rawValue == null ? void 0 : rawValue[1] : null;
  const canSwitchToCompare = compareMethod === compareMethods.customPeriod && isComparing;
  const [currentMonth, setCurrentMonth] = (0, import_react6.useState)(
    () => import_moment5.default.utc((value == null ? void 0 : value.start) || import_moment5.default.utc().startOf("month"))
  );
  const resetDateRange = (val) => {
    const { start, end } = val || {};
    const mStart2 = import_moment5.default.utc(start || import_moment5.default.utc());
    const mEnd2 = import_moment5.default.utc(end || import_moment5.default.utc());
    return { mStart: mStart2, mEnd: mEnd2 };
  };
  const [{ mStart, mEnd }, setDateRange] = (0, import_react6.useState)(() => resetDateRange(value));
  (0, import_react6.useLayoutEffect)(() => {
    const listener = (event) => {
      var _a, _b;
      if (((_a = wrapRef == null ? void 0 : wrapRef.current) == null ? void 0 : _a.contains(event.target)) || ((_b = wrapRef == null ? void 0 : wrapRef.current) == null ? void 0 : _b.contains(event.srcElement))) {
        return;
      }
      setExpanded(false);
    };
    window.addEventListener("click", listener);
    return () => window.removeEventListener("click", listener);
  }, []);
  const rangeStartOfTime = (0, import_react6.useMemo)(() => {
    const mPast = (0, import_moment5.default)(
      startOfTime || (0, import_moment5.default)().add(-160, "year").startOf("year")
    );
    if (!isSettingEnd) {
      return mPast;
    }
    return mStart.isSameOrAfter(mPast) ? mStart : mPast;
  }, [startOfTime, mStart, isSettingEnd]);
  const rangeEndOfTime = (0, import_react6.useMemo)(() => {
    const eot = import_moment5.default.utc(
      endOfTime || import_moment5.default.utc().add(160, "year").endOf("year")
    );
    if (isSettingEnd && navigationByYear) {
      const eoy = mStart.clone().endOf("year");
      if (eoy.isBefore(eot)) {
        return eoy;
      }
    }
    return eot;
  }, [endOfTime, isSettingEnd, mStart, navigationByYear]);
  const nextMonth = (0, import_react6.useMemo)(
    () => currentMonth.clone().add(1, "month"),
    [currentMonth]
  );
  const navigateMonth = (dir) => {
    setCurrentMonth(currentMonth.clone().add(dir, "month"));
  };
  const handleCanChange = (pos) => (value2) => currentMonth.clone().add(pos, "month").isSame(import_moment5.default.utc(value2), "month");
  const computeSecondInterval = ({ start, end }, compareMethod2) => {
    if (compareMethod2 === compareMethods.lastYear) {
      return {
        start: start.subtract(1, "year").format(COMMON_FORMAT),
        end: end.subtract(1, "year").format(COMMON_FORMAT)
      };
    }
    const diff = end.diff(start, "days") + 1;
    return {
      start: start.subtract(diff, "days").format(COMMON_FORMAT),
      end: end.subtract(diff, "days").format(COMMON_FORMAT)
    };
  };
  const handleChange = ({ start, end }, isComparing2, compareMethod2) => {
    if (!onChange) {
      return;
    }
    if (!multiple) {
      onChange({ start, end });
      return;
    }
    if (!isComparing2) {
      onChange([{ start, end }]);
      return;
    }
    const secondInterval = computeSecondInterval(
      { start: import_moment5.default.utc(start), end: import_moment5.default.utc(end) },
      compareMethod2
    );
    if (canSwitchToCompare) {
      onChange(
        showCurrentPeriod ? [{ start, end }, compareValue != null ? compareValue : { start, end }] : [value, { start, end }]
      );
      return;
    }
    onChange([{ start, end }, secondInterval]);
  };
  const handleCalendarClick = (value2) => {
    if (isSettingEnd) {
      const _mEnd = import_moment5.default.utc(value2);
      setDateRange({ mStart: mStart.clone(), mEnd: _mEnd });
      handleChange(
        {
          start: mStart.format(COMMON_FORMAT),
          end: _mEnd.format(COMMON_FORMAT)
        },
        isComparing,
        compareMethod
      );
      setSettingEnd(false);
      setExpanded(canSwitchToCompare);
      setShowCurrentPeriod(!canSwitchToCompare);
      return;
    }
    const _mStart = import_moment5.default.utc(value2);
    setDateRange({ mStart: _mStart, mEnd: _mStart });
    setSettingEnd(true);
  };
  const handleComparingChange = () => {
    setComparing(!isComparing);
    handleChange(value, !isComparing, compareMethod);
  };
  const handleCompareMethodChange = (method) => {
    if (compareMethod === compareMethods.customPeriod && method !== compareMethod) {
      setShowCurrentPeriod(true);
    }
    setCompareMethod(method);
    handleChange(value, isComparing, method);
  };
  const handleShowCurrentPeriodChange = (newShowCurrentPeriod) => () => {
    setShowCurrentPeriod(newShowCurrentPeriod);
    const shownValue = newShowCurrentPeriod ? value : compareValue;
    setCurrentMonth(import_moment5.default.utc(shownValue == null ? void 0 : shownValue.start));
  };
  (0, import_react6.useEffect)(() => {
    const shownValue = showCurrentPeriod ? value : compareValue;
    setDateRange({
      mStart: import_moment5.default.utc(shownValue == null ? void 0 : shownValue.start),
      mEnd: import_moment5.default.utc(shownValue == null ? void 0 : shownValue.end)
    });
  }, [value, compareValue, showCurrentPeriod]);
  const toggleExpanded = () => {
    if (!(value == null ? void 0 : value.start) && isExpanded) {
      return;
    }
    setSettingEnd(false);
    setDateRange(resetDateRange(value));
    !disabled && setExpanded(!isExpanded);
  };
  const highlight = (day) => isSettingEnd ? mStart.isSameOrBefore(import_moment5.default.utc(day)) && currentHover && mStart.isSameOrBefore(currentHover) && import_moment5.default.utc(day).isSameOrBefore(currentHover) && rangeEndOfTime.isSameOrAfter(import_moment5.default.utc(day)) : mStart.isSameOrBefore(import_moment5.default.utc(day)) && mEnd.isSameOrAfter(import_moment5.default.utc(day));
  const secondaryHighlight = (day) => {
    const secondaryValue = !showCurrentPeriod && compareMethod === compareMethods.customPeriod ? value : compareValue;
    if (!secondaryValue) {
      return false;
    }
    const { start, end } = secondaryValue;
    return import_moment5.default.utc(day).isBetween(
      import_moment5.default.utc(start).subtract(1, "day"),
      import_moment5.default.utc(end).add(1, "day")
    );
  };
  const handleHover = (day) => setCurrentHover(import_moment5.default.utc(day));
  return /* @__PURE__ */ React.createElement(import_etvaskit6.Flex, { flexDirection: "column", ...props }, label && /* @__PURE__ */ React.createElement(import_etvaskit6.Flex, { mb: 1, alignItems: "center" }, /* @__PURE__ */ React.createElement(
    import_etvaskit6.Typography,
    {
      as: "label",
      variant: "base12Bold",
      color: "baseMetal",
      width: "fit-content"
    },
    label
  )), /* @__PURE__ */ React.createElement(Wrapper3, { ref: wrapRef }, /* @__PURE__ */ React.createElement(
    FakeInput3,
    {
      onClick: toggleExpanded,
      expanded: isExpanded,
      disabled
    },
    /* @__PURE__ */ React.createElement(
      import_etvaskit6.Typography,
      {
        mx: 2,
        truncate: true,
        variant: "labelSmall",
        color: disabled ? "textInputDisabled" : "baseBlack"
      },
      placeholder && !value ? placeholder : /* @__PURE__ */ React.createElement(React.Fragment, null, import_moment5.default.utc(value.start).format(displayFormat), " \xF7", " ", import_moment5.default.utc(value.end).format(displayFormat), multiple && isComparing && compareValue && /* @__PURE__ */ React.createElement(React.Fragment, null, " ", labelCompareDivider, " ", import_moment5.default.utc(compareValue.start).format(displayFormat), " ", "\xF7", " ", import_moment5.default.utc(compareValue.end).format(displayFormat)))
    ),
    /* @__PURE__ */ React.createElement(import_etvaskit6.Flex, { mr: 2, opacity: disabled ? 0.35 : 1 }, /* @__PURE__ */ React.createElement(import_etvaskit6.Icon, { name: "calendar" }))
  ), isExpanded && /* @__PURE__ */ React.createElement(DropdownWrapper3, null, /* @__PURE__ */ React.createElement(import_etvaskit6.Box, null, /* @__PURE__ */ React.createElement(import_etvaskit6.Flex, null, /* @__PURE__ */ React.createElement(import_etvaskit6.Box, { mx: 2 }, /* @__PURE__ */ React.createElement(CalendarHeading, null, /* @__PURE__ */ React.createElement(
    import_etvaskit6.Button,
    {
      icon: "chevronLeft",
      variant: "link",
      onClick: () => navigateMonth(-1)
    }
  ), /* @__PURE__ */ React.createElement(import_etvaskit6.Typography, { variant: "base14Bold" }, currentMonth.format(CURRENT_MONTH_FORMAT)), /* @__PURE__ */ React.createElement("div", null)), /* @__PURE__ */ React.createElement(
    Calendar,
    {
      value: mStart.format(COMMON_FORMAT),
      browseDate: currentMonth.format(COMMON_FORMAT),
      monthSelector: false,
      yearSelector: false,
      monthNavigation: false,
      onChange: handleCalendarClick,
      canChange: handleCanChange(0),
      onHover: handleHover,
      startOfTime: rangeStartOfTime.format(COMMON_FORMAT),
      endOfTime: rangeEndOfTime.format(COMMON_FORMAT),
      highlight,
      secondaryHighlight,
      highlightCurrent: false,
      label: false
    }
  )), /* @__PURE__ */ React.createElement(import_etvaskit6.Box, { mx: 2 }, /* @__PURE__ */ React.createElement(CalendarHeading, null, /* @__PURE__ */ React.createElement("div", null), /* @__PURE__ */ React.createElement(import_etvaskit6.Typography, { variant: "base14Bold" }, nextMonth.format(CURRENT_MONTH_FORMAT)), /* @__PURE__ */ React.createElement(
    import_etvaskit6.Button,
    {
      icon: "chevronRight",
      variant: "link",
      onClick: () => navigateMonth(1)
    }
  )), /* @__PURE__ */ React.createElement(
    Calendar,
    {
      value: mEnd.format(COMMON_FORMAT),
      browseDate: nextMonth.format(COMMON_FORMAT),
      monthSelector: false,
      yearSelector: false,
      monthNavigation: false,
      monthNavigationWithinYear: false,
      onChange: handleCalendarClick,
      canChange: handleCanChange(1),
      onHover: handleHover,
      startOfTime: rangeStartOfTime.format(COMMON_FORMAT),
      endOfTime: rangeEndOfTime.format(COMMON_FORMAT),
      highlight,
      secondaryHighlight,
      highlightCurrent: false,
      label: false
    }
  ))), multiple && /* @__PURE__ */ React.createElement(
    import_etvaskit6.Flex,
    {
      alignItems: "center",
      justifyContent: "space-between",
      mt: 4,
      mx: 2
    },
    /* @__PURE__ */ React.createElement(import_etvaskit6.Flex, { alignItems: "center" }, /* @__PURE__ */ React.createElement(
      import_etvaskit6.Checkbox,
      {
        checked: isComparing,
        onChange: handleComparingChange
      }
    ), /* @__PURE__ */ React.createElement(import_etvaskit6.Typography, { variant: "base12Light", mx: 2 }, labelCompareWith, ":"), /* @__PURE__ */ React.createElement(
      import_etvaskit6.Dropdown,
      {
        width: "150px",
        value: compareMethod,
        required: true,
        onChange: handleCompareMethodChange,
        valueRender: (value2) => compareLabels[value2],
        noBottomSpace: true
      },
      Object.keys(compareMethods).map((method) => /* @__PURE__ */ React.createElement(import_etvaskit6.Dropdown.Option, { key: method, value: method }, compareLabels[method]))
    )),
    canSwitchToCompare && /* @__PURE__ */ React.createElement(import_etvaskit6.Flex, { alignItems: "center" }, /* @__PURE__ */ React.createElement(import_etvaskit6.Touchable, { onClick: handleShowCurrentPeriodChange(true) }, /* @__PURE__ */ React.createElement(
      import_etvaskit6.Chip,
      {
        color: showCurrentPeriod ? "etvas" : "white",
        contentColor: showCurrentPeriod ? "white" : "black"
      },
      labelCurrent
    )), /* @__PURE__ */ React.createElement(import_etvaskit6.Touchable, { onClick: handleShowCurrentPeriodChange(false) }, /* @__PURE__ */ React.createElement(
      import_etvaskit6.Chip,
      {
        color: !showCurrentPeriod ? "etvas" : "white",
        contentColor: !showCurrentPeriod ? "white" : "black"
      },
      labelCompare
    )))
  )))));
};
var DropdownWrapper3 = (0, import_etvaskit6.styled)(import_etvaskit6.Flex)(
  ({ theme }) => (0, import_styled_components6.css)({
    backgroundColor: theme.colors.white,
    padding: "16px",
    border: `1px solid ${theme.colors.accent}`,
    boxShadow: theme.shadows.etvasCard,
    position: "absolute",
    left: 0,
    top: "44px",
    borderRadius: 2,
    zIndex: theme.zIndices.menu
  })
);
var FakeInput3 = (0, import_etvaskit6.styled)(import_etvaskit6.Flex)(
  ({ expanded, disabled, theme }) => (0, import_styled_components6.css)({
    width: "100%",
    height: "40px",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: disabled ? theme.colors.backgroundInputGray : "white",
    border: `1px solid ${getDefaultBorderColor2({ expanded, disabled, theme })}`,
    borderRadius: 2,
    cursor: disabled ? "not-allowed" : "pointer",
    pointerEvents: disabled ? "none" : "all",
    "&:hover": {
      borderColor: disabled ? theme.colors.inputBorderGray : theme.colors.accent
    }
  })
);
var getDefaultBorderColor2 = ({ expanded, disabled, theme }) => {
  if (disabled) {
    return theme.colors.inputBorderGray;
  }
  if (expanded) {
    return theme.colors.accent;
  }
  return theme.colors.inputBorderGray;
};
var Wrapper3 = (0, import_etvaskit6.styled)(import_etvaskit6.Flex)`
  width: 100%;
  position: relative;
`;
var CalendarHeading = (0, import_etvaskit6.styled)(import_etvaskit6.Flex)`
  justify-content: space-between;
  align-items: center;
`;
RangePicker.propTypes = {
  multiple: import_prop_types6.default.bool,
  yearDisplayStart: import_prop_types6.default.number,
  yearDisplayEnd: import_prop_types6.default.number,
  startOfTime: import_prop_types6.default.oneOfType([
    import_prop_types6.default.string,
    import_prop_types6.default.object,
    import_prop_types6.default.number
  ]),
  endOfTime: import_prop_types6.default.oneOfType([
    import_prop_types6.default.string,
    import_prop_types6.default.object,
    import_prop_types6.default.number
  ]),
  value: import_prop_types6.default.shape({
    start: import_prop_types6.default.oneOfType([
      import_prop_types6.default.string,
      import_prop_types6.default.object,
      import_prop_types6.default.number
    ]),
    end: import_prop_types6.default.oneOfType([
      import_prop_types6.default.string,
      import_prop_types6.default.object,
      import_prop_types6.default.number
    ])
  }),
  onChange: import_prop_types6.default.func,
  disabled: import_prop_types6.default.bool,
  displayFormat: import_prop_types6.default.string,
  label: import_prop_types6.default.node,
  labelCompareWith: import_prop_types6.default.node,
  labelCompareDivider: import_prop_types6.default.node,
  labelCurrent: import_prop_types6.default.node,
  labelCompare: import_prop_types6.default.node,
  labelLastPeriod: import_prop_types6.default.node,
  compareLabels: import_prop_types6.default.shape({
    [compareMethods.lastPeriod]: import_prop_types6.default.node
  }),
  placeholder: import_prop_types6.default.node,
  navigationByYear: import_prop_types6.default.bool
};
RangePicker.defaultProps = {
  multiple: false,
  displayFormat: "D MMMM YYYY",
  navigationByYear: true
};

// src/components/Grid/index.js
init_react_shim();

// src/components/Grid/Grid.jsx
init_react_shim();
var import_react13 = require("react");
var import_prop_types13 = __toESM(require_prop_types());
var import_styled_components12 = __toESM(require("styled-components"));
var import_etvaskit13 = require("@etvas/etvaskit");

// src/components/Grid/GridFooter.jsx
init_react_shim();

// node_modules/@styled-system/css/dist/index.esm.js
init_react_shim();
function _extends() {
  _extends = Object.assign || function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends.apply(this, arguments);
}
var get = function get2(obj, key, def, p, undef) {
  key = key && key.split ? key.split(".") : [key];
  for (p = 0; p < key.length; p++) {
    obj = obj ? obj[key[p]] : undef;
  }
  return obj === undef ? def : obj;
};
var defaultBreakpoints = [40, 52, 64].map(function(n) {
  return n + "em";
});
var defaultTheme = {
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
  fontSizes: [12, 14, 16, 20, 24, 32, 48, 64, 72]
};
var aliases = {
  bg: "backgroundColor",
  m: "margin",
  mt: "marginTop",
  mr: "marginRight",
  mb: "marginBottom",
  ml: "marginLeft",
  mx: "marginX",
  my: "marginY",
  p: "padding",
  pt: "paddingTop",
  pr: "paddingRight",
  pb: "paddingBottom",
  pl: "paddingLeft",
  px: "paddingX",
  py: "paddingY"
};
var multiples = {
  marginX: ["marginLeft", "marginRight"],
  marginY: ["marginTop", "marginBottom"],
  paddingX: ["paddingLeft", "paddingRight"],
  paddingY: ["paddingTop", "paddingBottom"],
  size: ["width", "height"]
};
var scales = {
  color: "colors",
  backgroundColor: "colors",
  borderColor: "colors",
  margin: "space",
  marginTop: "space",
  marginRight: "space",
  marginBottom: "space",
  marginLeft: "space",
  marginX: "space",
  marginY: "space",
  padding: "space",
  paddingTop: "space",
  paddingRight: "space",
  paddingBottom: "space",
  paddingLeft: "space",
  paddingX: "space",
  paddingY: "space",
  top: "space",
  right: "space",
  bottom: "space",
  left: "space",
  gridGap: "space",
  gridColumnGap: "space",
  gridRowGap: "space",
  gap: "space",
  columnGap: "space",
  rowGap: "space",
  fontFamily: "fonts",
  fontSize: "fontSizes",
  fontWeight: "fontWeights",
  lineHeight: "lineHeights",
  letterSpacing: "letterSpacings",
  border: "borders",
  borderTop: "borders",
  borderRight: "borders",
  borderBottom: "borders",
  borderLeft: "borders",
  borderWidth: "borderWidths",
  borderStyle: "borderStyles",
  borderRadius: "radii",
  borderTopRightRadius: "radii",
  borderTopLeftRadius: "radii",
  borderBottomRightRadius: "radii",
  borderBottomLeftRadius: "radii",
  borderTopWidth: "borderWidths",
  borderTopColor: "colors",
  borderTopStyle: "borderStyles",
  borderBottomWidth: "borderWidths",
  borderBottomColor: "colors",
  borderBottomStyle: "borderStyles",
  borderLeftWidth: "borderWidths",
  borderLeftColor: "colors",
  borderLeftStyle: "borderStyles",
  borderRightWidth: "borderWidths",
  borderRightColor: "colors",
  borderRightStyle: "borderStyles",
  outlineColor: "colors",
  boxShadow: "shadows",
  textShadow: "shadows",
  zIndex: "zIndices",
  width: "sizes",
  minWidth: "sizes",
  maxWidth: "sizes",
  height: "sizes",
  minHeight: "sizes",
  maxHeight: "sizes",
  flexBasis: "sizes",
  size: "sizes",
  fill: "colors",
  stroke: "colors"
};
var positiveOrNegative = function positiveOrNegative2(scale, value) {
  if (typeof value !== "number" || value >= 0) {
    return get(scale, value, value);
  }
  var absolute = Math.abs(value);
  var n = get(scale, absolute, absolute);
  if (typeof n === "string")
    return "-" + n;
  return n * -1;
};
var transforms = ["margin", "marginTop", "marginRight", "marginBottom", "marginLeft", "marginX", "marginY", "top", "bottom", "left", "right"].reduce(function(acc, curr) {
  var _extends22;
  return _extends({}, acc, (_extends22 = {}, _extends22[curr] = positiveOrNegative, _extends22));
}, {});
var responsive = function responsive2(styles) {
  return function(theme) {
    var next = {};
    var breakpoints = get(theme, "breakpoints", defaultBreakpoints);
    var mediaQueries = [null].concat(breakpoints.map(function(n) {
      return "@media screen and (min-width: " + n + ")";
    }));
    for (var key in styles) {
      var value = typeof styles[key] === "function" ? styles[key](theme) : styles[key];
      if (value == null)
        continue;
      if (!Array.isArray(value)) {
        next[key] = value;
        continue;
      }
      for (var i = 0; i < value.slice(0, mediaQueries.length).length; i++) {
        var media = mediaQueries[i];
        if (!media) {
          next[key] = value[i];
          continue;
        }
        next[media] = next[media] || {};
        if (value[i] == null)
          continue;
        next[media][key] = value[i];
      }
    }
    return next;
  };
};
var css6 = function css7(args) {
  return function(props) {
    if (props === void 0) {
      props = {};
    }
    var theme = _extends({}, defaultTheme, {}, props.theme || props);
    var result = {};
    var obj = typeof args === "function" ? args(theme) : args;
    var styles = responsive(obj)(theme);
    for (var key in styles) {
      var x = styles[key];
      var val = typeof x === "function" ? x(theme) : x;
      if (key === "variant") {
        var variant3 = css7(get(theme, val))(theme);
        result = _extends({}, result, {}, variant3);
        continue;
      }
      if (val && typeof val === "object") {
        result[key] = css7(val)(theme);
        continue;
      }
      var prop = get(aliases, key, key);
      var scaleName = get(scales, prop);
      var scale = get(theme, scaleName, get(theme, prop, {}));
      var transform = get(transforms, prop, get);
      var value = transform(scale, val, val);
      if (multiples[prop]) {
        var dirs = multiples[prop];
        for (var i = 0; i < dirs.length; i++) {
          result[dirs[i]] = value;
        }
      } else {
        result[prop] = value;
      }
    }
    return result;
  };
};
var index_esm_default = css6;

// src/components/Grid/GridFooter.jsx
var import_prop_types7 = __toESM(require_prop_types());
var import_styled_components7 = __toESM(require("styled-components"));
var import_etvaskit7 = require("@etvas/etvaskit");
var GridFooter = ({ paginationConfig }) => {
  var _a, _b, _c, _d;
  if (!paginationConfig) {
    return null;
  }
  const { actions, pageLimit, loading, resultsPerPage } = paginationConfig;
  return /* @__PURE__ */ React.createElement(import_etvaskit7.Box, null, /* @__PURE__ */ React.createElement(import_etvaskit7.Flex, { justifyContent: "flex-end" }, /* @__PURE__ */ React.createElement(
    ItemDisplayCounter,
    {
      mr: 2,
      disabled: loading,
      initialElements: pageLimit,
      resultsPerPage,
      onChange: actions == null ? void 0 : actions.changeCounter
    }
  ), /* @__PURE__ */ React.createElement(
    StyledButton,
    {
      mr: 2,
      onClick: (_a = actions == null ? void 0 : actions.prev) == null ? void 0 : _a.handlePrev,
      disabled: (_b = actions == null ? void 0 : actions.prev) == null ? void 0 : _b.disabled
    },
    "Prev"
  ), /* @__PURE__ */ React.createElement(
    StyledButton,
    {
      onClick: (_c = actions == null ? void 0 : actions.next) == null ? void 0 : _c.handleNext,
      disabled: (_d = actions == null ? void 0 : actions.next) == null ? void 0 : _d.disabled
    },
    "Next"
  )));
};
GridFooter.propTypes = {
  paginationConfig: import_prop_types7.default.shape({
    resultsPerPage: import_prop_types7.default.arrayOf(import_prop_types7.default.number),
    loading: import_prop_types7.default.bool,
    pageLimit: import_prop_types7.default.number,
    actions: import_prop_types7.default.shape({
      changeCounter: import_prop_types7.default.func,
      next: import_prop_types7.default.shape({
        handleNext: import_prop_types7.default.func,
        disabled: import_prop_types7.default.bool
      }),
      prev: import_prop_types7.default.shape({
        handlePrev: import_prop_types7.default.func,
        disabled: import_prop_types7.default.bool
      })
    })
  })
};
var StyledButton = (0, import_styled_components7.default)(import_etvaskit7.Button)(
  index_esm_default({
    backgroundColor: "background",
    color: "textDefault",
    "&:not([disabled])": {
      "&:hover": { backgroundColor: "inputGray" },
      "&:active": { backgroundColor: "inputGray" },
      "&:focus": { backgroundColor: "inputGray" }
    },
    "&:disabled": {
      backgroundColor: "background"
    }
  })
);
var ItemDisplayCounter = ({
  onChange,
  disabled,
  resultsPerPage,
  initialElements,
  ...props
}) => /* @__PURE__ */ React.createElement(import_etvaskit7.Flex, { alignItems: "center", ...props }, /* @__PURE__ */ React.createElement(import_etvaskit7.Typography, { variant: "inputLabel", mr: 1 }, "Show"), /* @__PURE__ */ React.createElement(
  import_etvaskit7.Dropdown,
  {
    noBottomSpace: true,
    value: initialElements,
    valueRender: (value) => `${value} Results`,
    onChange,
    disabled
  },
  resultsPerPage.map((el) => /* @__PURE__ */ React.createElement(import_etvaskit7.Dropdown.Option, { key: el, value: el }, el, " Results"))
));
ItemDisplayCounter.defaultProps = {
  resultsPerPage: [5, 10, 25]
};
ItemDisplayCounter.propTypes = {
  onChange: import_prop_types7.default.func,
  disabled: import_prop_types7.default.bool,
  resultsPerPage: import_prop_types7.default.arrayOf(import_prop_types7.default.number),
  initialElements: import_prop_types7.default.number
};
var GridFooter_default = GridFooter;

// src/components/Grid/GridHeader.jsx
init_react_shim();
var import_react10 = require("react");
var import_prop_types9 = __toESM(require_prop_types());
var import_styled_components8 = __toESM(require("styled-components"));
var import_etvaskit9 = require("@etvas/etvaskit");

// src/components/Grid/GridHeaderLabel.jsx
init_react_shim();
var import_react9 = require("react");
var import_prop_types8 = __toESM(require_prop_types());
var import_etvaskit8 = require("@etvas/etvaskit");

// src/hooks/index.js
init_react_shim();

// src/hooks/useIsTruncated.js
init_react_shim();
var import_react7 = require("react");
var useIsTruncated = (element) => {
  const isElementTruncated = (0, import_react7.useCallback)(() => {
    if (!element.current) {
      return false;
    }
    return element.current.scrollWidth > element.current.clientWidth;
  }, [element]);
  const [isTruncated2, setIsTruncated] = (0, import_react7.useState)(isElementTruncated());
  (0, import_react7.useLayoutEffect)(() => {
    setIsTruncated(isElementTruncated());
    const resizeListener = () => setIsTruncated(isElementTruncated());
    window.addEventListener("resize", resizeListener);
    return () => {
      window.removeEventListener("resize", resizeListener);
    };
  }, [isElementTruncated]);
  return isTruncated2;
};

// src/hooks/useClearField.js
init_react_shim();
var import_react8 = require("react");
var useClearField = (dependencies) => {
  const ref = (0, import_react8.useRef)();
  (0, import_react8.useEffect)(() => {
    const [fn] = dependencies;
    ref.current = fn;
  }, [dependencies]);
  return (0, import_react8.useCallback)(() => ref.current(""), []);
};

// src/components/Grid/GridHeaderLabel.jsx
var GridHeaderLabel = ({ children, tooltipContent }) => {
  const headerRef = (0, import_react9.useRef)();
  const isTruncated2 = useIsTruncated(headerRef);
  const text = /* @__PURE__ */ React.createElement(import_etvaskit8.Typography, { variant: "inputLabel", truncate: true, ref: headerRef, mb: 0 }, children);
  return isTruncated2 ? /* @__PURE__ */ React.createElement(Tooltip_default, { minWidth: "0", content: tooltipContent, distance: "50px" }, text) : text;
};
GridHeaderLabel.propTypes = {
  children: import_prop_types8.default.node,
  tooltipContent: import_prop_types8.default.node
};
var GridHeaderLabel_default = GridHeaderLabel;

// src/components/Grid/GridHeader.jsx
var sortTypes = [0, 1, 2, 3];
var HeaderCell = ({ column, sortType }) => /* @__PURE__ */ React.createElement(StyledWrapper, null, sortType ? /* @__PURE__ */ React.createElement(import_etvaskit9.Box, null, /* @__PURE__ */ React.createElement(StyledOrderIcons, null, /* @__PURE__ */ React.createElement(
  import_etvaskit9.Icon,
  {
    size: "small",
    name: "menuUp",
    color: sortType === 3 ? "brand" : "textLabelDefault"
  }
), /* @__PURE__ */ React.createElement(
  import_etvaskit9.Icon,
  {
    size: "small",
    name: "menuDown",
    color: sortType === 2 ? "brand" : "textLabelDefault"
  }
))) : null, column.headerComponent ? column.headerComponent : /* @__PURE__ */ React.createElement(GridHeaderLabel_default, { tooltipContent: column.header }, column.header));
var Header = ({ columns, toggleSort, sortConfig }) => {
  const gridTemplateColumns2 = (0, import_react10.useMemo)(
    () => columns.map((column) => column.width).join(" "),
    [columns]
  );
  const getSortType = (column) => {
    if (!column.sort)
      return 0;
    else if (column.sort !== sortConfig.field)
      return 1;
    else if (sortConfig.asc)
      return 2;
    return 3;
  };
  return /* @__PURE__ */ React.createElement(StyledRow, { gridTemplateColumns: gridTemplateColumns2 }, columns.map((column) => /* @__PURE__ */ React.createElement(import_react10.Fragment, { key: column.name }, column.sort ? /* @__PURE__ */ React.createElement(
    import_etvaskit9.Touchable,
    {
      key: `header-${column.name}`,
      onClick: () => toggleSort(column.sort),
      minWidth: 0
    },
    /* @__PURE__ */ React.createElement(HeaderCell, { column, sortType: getSortType(column) })
  ) : /* @__PURE__ */ React.createElement(
    HeaderCell,
    {
      key: `header-${column.name}`,
      column,
      sortType: 0
    }
  ))));
};
var StyledRow = (0, import_styled_components8.default)(import_etvaskit9.Box)`
  ${(0, import_etvaskit9.themed)("Grid.header")};
  grid-template-columns: ${(props) => props.gridTemplateColumns};
`;
var StyledWrapper = (0, import_styled_components8.default)(import_etvaskit9.Box)`
  display: flex;
  justify-content: ${(props) => props.align || "left"};
  align-items: center;
`;
var StyledOrderIcons = (0, import_styled_components8.default)(import_etvaskit9.Box)`
  display: inline-flex;
  flex-direction: column;
  justify-content: center;
  margin-right: 4px;

  > svg:first-child {
    margin-bottom: -5px;
  }

  > svg:last-child {
    margin-top: -5px;
  }
`;
HeaderCell.propTypes = {
  column: import_prop_types9.default.object,
  sortType: import_prop_types9.default.oneOf(sortTypes)
};
Header.propTypes = {
  toggleSort: import_prop_types9.default.func,
  sortConfig: import_prop_types9.default.object,
  columns: import_prop_types9.default.arrayOf(
    import_prop_types9.default.shape({
      name: import_prop_types9.default.string
    })
  )
};
var GridHeader_default = Header;

// src/components/Grid/LoadingGrid.jsx
init_react_shim();
var import_prop_types10 = __toESM(require_prop_types());
var import_styled_components9 = __toESM(require("styled-components"));
var import_etvaskit10 = require("@etvas/etvaskit");
var LoadingGrid = ({ busyVariant, busySkeletonNumber }) => busyVariant === "blockSkeleton" && busySkeletonNumber > 0 ? /* @__PURE__ */ React.createElement(React.Fragment, null, Array.from({ length: busySkeletonNumber }, (_, i) => i + 1).map((el) => /* @__PURE__ */ React.createElement(import_etvaskit10.BlockSkeleton, { key: el, height: "44px", mb: 1 }))) : /* @__PURE__ */ React.createElement(Shadow, null, /* @__PURE__ */ React.createElement(
  import_etvaskit10.ActivityIndicator,
  {
    variant: "runningbar",
    colors: { background: "transparent", primary: "accent" }
  }
));
LoadingGrid.propTypes = {
  busyVariant: import_prop_types10.default.oneOf(["blockSkeleton", "runningBar"]),
  busySkeletonNumber: import_prop_types10.default.number
};
var Shadow = import_styled_components9.default.div`
  width: 100%;
  min-height: 240px;
`;

// src/components/Grid/Row.jsx
init_react_shim();
var import_react12 = require("react");
var import_prop_types12 = __toESM(require_prop_types());
var import_styled_components11 = __toESM(require("styled-components"));
var import_etvaskit12 = require("@etvas/etvaskit");

// src/components/Grid/Cell.jsx
init_react_shim();
var import_react11 = require("react");
var import_prop_types11 = __toESM(require_prop_types());
var import_styled_components10 = __toESM(require("styled-components"));
var import_etvaskit11 = require("@etvas/etvaskit");
var renderText = (renderedValue) => /* @__PURE__ */ React.createElement(TruncateGridInfo, { minWidth: "0" }, /* @__PURE__ */ React.createElement(import_etvaskit11.Typography, { variant: "labelSmall", truncate: true, color: "textCardTitle" }, renderedValue));
var Cell = ({ item, column, checked, extended, ...props }) => {
  var _a;
  const [isChecked, setChecked] = (0, import_react11.useState)(checked);
  const contents = (0, import_react11.useMemo)(() => {
    var _a2;
    if (column.hide) {
      if (typeof column.hide === "boolean" || column.hide instanceof Function && column.hide(item)) {
        return /* @__PURE__ */ React.createElement(import_etvaskit11.Box, { width: "100%", height: "100%" });
      }
    }
    if (column.checkbox) {
      const _handleChange = async () => {
        const chk = await column.onToggleCheck(item);
        setChecked(chk);
      };
      return /* @__PURE__ */ React.createElement(
        import_etvaskit11.Checkbox,
        {
          size: 24,
          id: `${column.id || column._id}`,
          checked: isChecked,
          onChange: _handleChange
        }
      );
    }
    if (column.icon) {
      return /* @__PURE__ */ React.createElement(import_etvaskit11.Icon, { name: column.icon, size: "medium", color: "inputIcon" });
    }
    if (column.iconButton) {
      return /* @__PURE__ */ React.createElement(
        IconButton,
        {
          variant: "link",
          icon: column.iconButton,
          disabled: (_a2 = column.isDisabled) != null ? _a2 : false,
          iconColor: "inputIcon",
          align: column.align,
          onClick: (e) => {
            column.action(item, extended);
            e.stopPropagation();
          }
        }
      );
    }
    if (column.render) {
      return column.render(item, extended);
    }
    if (column.attribute) {
      if (column.attribute instanceof Function) {
        return renderText(column.attribute(item));
      }
      return renderText(item[column.attribute]);
    }
    return "";
  }, [column, isChecked, item, extended]);
  const cellContent = /* @__PURE__ */ React.createElement(
    StyledTouchable,
    {
      as: "div",
      icon: !!column.icon,
      align: column.align,
      disabled: (_a = column.isDisabled) != null ? _a : false,
      activeOpacity: 0.75,
      effect: "opacity",
      width: "100%",
      ...props
    },
    contents
  );
  return column.tooltip ? /* @__PURE__ */ React.createElement(Tooltip_default, { ...column.tooltip }, cellContent) : cellContent;
};
var StyledTouchable = (0, import_styled_components10.default)(import_etvaskit11.Touchable)`
  ${(0, import_etvaskit11.themed)("Grid.cell")};
  display: flex;
  justify-content: ${(props) => props.align || "left"};
  align-items: center;
`;
Cell.propTypes = {
  extended: import_prop_types11.default.bool,
  item: import_prop_types11.default.object,
  column: import_prop_types11.default.object,
  checked: import_prop_types11.default.bool
};
var IconButton = (0, import_styled_components10.default)(import_etvaskit11.Button)`
  width: 100%;
  height: 100%;

  &:not([disabled]):hover svg {
    fill: ${({ theme }) => theme.colors.brand};
  }
`;
var Cell_default = Cell;

// src/components/Grid/Row.jsx
var Row = ({
  item,
  columns,
  prefix,
  extended,
  isClickableRow,
  isDisabledRow,
  rowAction,
  rowColor,
  ...props
}) => {
  const gridTemplateColumns2 = (0, import_react12.useMemo)(
    () => columns.map((column) => column.width).join(" "),
    [columns]
  );
  return /* @__PURE__ */ React.createElement(
    StyledRow2,
    {
      gridTemplateColumns: gridTemplateColumns2,
      extended,
      isClickableRow,
      onClick: () => rowAction(item),
      isDisabledRow,
      color: rowColor(item),
      ...props
    },
    columns.map((column) => /* @__PURE__ */ React.createElement(
      Cell_default,
      {
        key: `${prefix}-cell-${column.name}`,
        column,
        item,
        "data-testid": `${prefix}-${column.name}`,
        extended
      }
    ))
  );
};
var StyledRow2 = (0, import_styled_components11.default)(import_etvaskit12.Box)`
  ${(0, import_etvaskit12.themed)("Grid.row")};
  grid-template-columns: ${(props) => props.gridTemplateColumns};
  ${(props) => props.extended && (0, import_etvaskit12.themed)("Grid.row-extended")}
  cursor: ${({ isClickableRow }) => isClickableRow && "pointer"};
  ${({ isDisabledRow }) => isDisabledRow && `opacity: 50%;`}
  background-color: ${({ color: color2, theme }) => {
  var _a;
  return (_a = theme.colors[color2]) != null ? _a : color2;
}};
`;
Row.propTypes = {
  extended: import_prop_types12.default.bool,
  item: import_prop_types12.default.object,
  columns: import_prop_types12.default.arrayOf(
    import_prop_types12.default.shape({
      name: import_prop_types12.default.string
    })
  ),
  prefix: import_prop_types12.default.string,
  rowAction: import_prop_types12.default.func,
  rowColor: import_prop_types12.default.func,
  isClickableRow: import_prop_types12.default.bool,
  isDisabledRow: import_prop_types12.default.bool
};
var Row_default = Row;

// src/components/Grid/sorting.js
init_react_shim();
var sortFunctions = {
  string: (a, b) => a.localeCompare(b),
  number: (a, b) => a === b ? 0 : a > b ? 1 : -1,
  boolean: (a, b) => !!a - !!b,
  currency: (a, b) => {
    const ca = parseFloat(a.replace(/€/g, ""));
    const cb = parseFloat(b.replace(/€/g, ""));
    return ca === cb ? 0 : ca > cb ? 1 : -1;
  },
  default: (a, b) => `${a}`.localeCompare(`${b}`)
};
var checkSortParameters = (a, b) => {
  if (a === void 0 || a === null) {
    return -1;
  }
  if (b === void 0 || b === null) {
    return 1;
  }
  return false;
};
var detectSortingType = (value) => {
  if (typeof value === "string") {
    return "string";
  }
  if (typeof value === "number") {
    return "number";
  }
  if (typeof value === "boolean") {
    return "boolean";
  }
  if (value.indexOf("\u20AC") >= 0) {
    return "currency";
  }
  return "default";
};
var doSort = (a, b) => {
  const check = checkSortParameters(a, b);
  if (check) {
    return check;
  }
  const type = detectSortingType(a);
  return sortFunctions[type](a, b);
};

// src/components/Grid/Grid.jsx
var Grid = ({
  extendedField,
  renderExtended: RenderExtended,
  forceExtended,
  busy,
  name,
  columns,
  items,
  emptyGridText,
  hasHeader,
  onRowClick,
  initialSort,
  rowKeyAttribute,
  paginationConfig,
  isDisabledRow,
  rowColor,
  busyVariant,
  busySkeletonNumber,
  allowMultipleExtendedItems
}) => {
  const [sortConfig, setSortConfig] = (0, import_react13.useState)(() => {
    if (initialSort == null ? void 0 : initialSort.by) {
      const asc = initialSort.asc === true || initialSort.asc === void 0;
      const column = columns.find(
        (col) => col.sort && col.name === initialSort.by
      );
      if (column) {
        return {
          field: column.sort,
          asc,
          sortTranslate: column.sortTranslate
        };
      }
    }
    return {};
  });
  const [extendedItems, setExtendedItems] = (0, import_react13.useState)([]);
  const isExpandableRow = !!RenderExtended;
  const isExtended = (value) => extendedItems.includes(value);
  const isItemExtended = (item) => extendedItems.includes(item[extendedField]);
  const extendItem = (0, import_react13.useCallback)(
    (item) => {
      if (allowMultipleExtendedItems) {
        setExtendedItems([...extendedItems, item[extendedField]]);
      } else {
        setExtendedItems([item[extendedField]]);
      }
    },
    [allowMultipleExtendedItems, extendedField, extendedItems]
  );
  const collapseItem = (0, import_react13.useCallback)(
    (item) => {
      if (allowMultipleExtendedItems) {
        setExtendedItems(
          extendedItems.filter(
            (extendedItem) => extendedItem !== item[extendedField]
          )
        );
      } else {
        setExtendedItems([]);
      }
    },
    [allowMultipleExtendedItems, extendedField, extendedItems]
  );
  const toggleItemExtended = (item) => {
    if (isExtended(item[extendedField])) {
      collapseItem(item);
    } else {
      extendItem(item);
    }
  };
  (0, import_react13.useEffect)(() => {
    if (!forceExtended) {
      return;
    }
    if (Array.isArray(forceExtended)) {
      setExtendedItems(forceExtended);
    } else {
      setExtendedItems([forceExtended]);
    }
  }, [forceExtended]);
  const gridColumns = (0, import_react13.useMemo)(() => {
    if (!extendedField) {
      return columns;
    }
    return [
      ...columns,
      {
        name: "extended",
        width: "64px",
        align: "center",
        render: (item, extended) => {
          if (extended) {
            return /* @__PURE__ */ React.createElement(import_etvaskit13.Icon, { name: "menuUp", size: "small", color: "inputIcon" });
          }
          return /* @__PURE__ */ React.createElement(import_etvaskit13.Icon, { name: "menuDown", size: "small", color: "inputIcon" });
        },
        action: (item, extended) => {
          if (!extended) {
            extendItem(item);
          } else {
            collapseItem(item);
          }
        }
      }
    ];
  }, [collapseItem, columns, extendItem, extendedField]);
  const toggleSort = (field) => {
    const column = columns.find((col) => col.sort === field);
    if (field !== sortConfig.field) {
      setSortConfig({ field, asc: true, sortTranslate: column.sortTranslate });
      return;
    }
    if (sortConfig.asc) {
      setSortConfig({
        ...sortConfig,
        asc: false,
        sortTranslate: column.sortTranslate
      });
      return;
    }
    setSortConfig({});
  };
  if (!busy && (items == null ? void 0 : items.length) === 0) {
    return /* @__PURE__ */ React.createElement(import_etvaskit13.Flex, { alignItems: "center", justifyContent: "center" }, /* @__PURE__ */ React.createElement(import_etvaskit13.Typography, { variant: "base14Light", color: "baseMetal", p: 6 }, emptyGridText));
  }
  const handleOnRowClick = (item) => {
    if (onRowClick) {
      return onRowClick(item);
    }
    if (!isExpandableRow) {
      return;
    }
    toggleItemExtended(item);
  };
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(import_etvaskit13.Box, { mb: 6 }, hasHeader && /* @__PURE__ */ React.createElement(
    GridHeader_default,
    {
      columns: gridColumns,
      toggleSort,
      sortConfig
    }
  ), busy ? /* @__PURE__ */ React.createElement(
    LoadingGrid,
    {
      busyVariant,
      busySkeletonNumber
    }
  ) : sortItems(items, sortConfig).map((item) => {
    var _a;
    return /* @__PURE__ */ React.createElement(
      ItemWrapper,
      {
        scroll: isItemExtended(item) && isExtended(forceExtended),
        key: item[rowKeyAttribute]
      },
      /* @__PURE__ */ React.createElement(
        Row_default,
        {
          key: `${name}-row-${(_a = item.id) != null ? _a : item._id}`,
          item,
          prefix: name,
          columns: gridColumns,
          extended: isItemExtended(item),
          isClickableRow: isExpandableRow || !!onRowClick,
          rowColor,
          rowAction: handleOnRowClick,
          isDisabledRow: isDisabledRow(item)
        }
      ),
      isItemExtended(item) ? /* @__PURE__ */ React.createElement(ExtendedWrapper, null, item["key"] ? /* @__PURE__ */ React.createElement(RenderExtended, { item }) : /* @__PURE__ */ React.createElement(RenderExtended, { ...item })) : null
    );
  })), /* @__PURE__ */ React.createElement(GridFooter_default, { paginationConfig }));
};
var ItemWrapper = ({ children, scroll }) => {
  const viewRef = (0, import_react13.useRef)();
  (0, import_react13.useLayoutEffect)(() => {
    if (viewRef.current && scroll) {
      setTimeout(() => {
        viewRef.current.scrollIntoView({ behavior: "smooth" });
      }, 0);
    }
  }, [viewRef, scroll]);
  return /* @__PURE__ */ React.createElement("div", { ref: viewRef }, children);
};
ItemWrapper.propTypes = {
  children: import_prop_types13.default.any,
  scroll: import_prop_types13.default.bool
};
var sortItems = (items, sortConfig) => {
  const fieldName = sortConfig == null ? void 0 : sortConfig.field;
  if (!fieldName) {
    return items;
  }
  const ascendant = (sortConfig == null ? void 0 : sortConfig.asc) ? 1 : -1;
  const sortFunction = (sortConfig == null ? void 0 : sortConfig.sort) || doSort;
  const translate = (sortConfig == null ? void 0 : sortConfig.sortTranslate) || ((item) => item[fieldName]);
  return items.slice(0).sort((a, b) => ascendant * sortFunction(translate(a), translate(b)));
};
var ExtendedWrapper = import_styled_components12.default.div`
  margin-bottom: 4px;
  background-color: ${(0, import_etvaskit13.themed)("colors.backgroundCustomers")};
  border: 1px solid ${(0, import_etvaskit13.themed)("colors.lighterOutline")};
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
`;
Grid.propTypes = {
  hasHeader: import_prop_types13.default.bool,
  extendedField: import_prop_types13.default.string,
  renderExtended: import_prop_types13.default.any,
  forceExtended: import_prop_types13.default.string,
  busy: import_prop_types13.default.bool,
  name: import_prop_types13.default.string,
  columns: import_prop_types13.default.array,
  initialSort: import_prop_types13.default.shape({
    by: import_prop_types13.default.string,
    asc: import_prop_types13.default.bool
  }),
  items: import_prop_types13.default.arrayOf(
    import_prop_types13.default.shape({
      id: import_prop_types13.default.oneOfType([import_prop_types13.default.string, import_prop_types13.default.number])
    })
  ),
  emptyGridText: import_prop_types13.default.node,
  onRowClick: import_prop_types13.default.func,
  paginationConfig: import_prop_types13.default.object,
  rowKeyAttribute: import_prop_types13.default.string,
  busyVariant: import_prop_types13.default.oneOf(["blockSkeleton", "runningBar"]),
  isDisabledRow: import_prop_types13.default.func,
  busySkeletonNumber: import_prop_types13.default.number,
  rowColor: import_prop_types13.default.func,
  allowMultipleExtendedItems: import_prop_types13.default.bool
};
Grid.defaultProps = {
  hasHeader: true,
  emptyGridText: "No items found",
  rowKeyAttribute: "id",
  busyVariant: "runningBar",
  isDisabledRow: () => false,
  busySkeletonNumber: 5,
  rowColor: (item) => "baseWhite",
  allowMultipleExtendedItems: false
};
var Grid_default = Grid;

// src/components/Grid/GridButton.jsx
init_react_shim();
var import_prop_types14 = __toESM(require_prop_types());
var import_styled_components13 = __toESM(require("styled-components"));
var import_etvaskit14 = require("@etvas/etvaskit");
var GridButton = ({ children, ...props }) => /* @__PURE__ */ React.createElement(StyledButton2, { variant: "link", ...props }, children);
GridButton.propTypes = {
  children: import_prop_types14.default.any
};
var StyledButton2 = (0, import_styled_components13.default)(import_etvaskit14.Button)`
  font-weight: 800;
  font-size: 13px;
  line-height: 16px;
  letter-spacing: 0.4px;
`;

// src/components/Grid/GridButtons.jsx
init_react_shim();
var import_prop_types15 = __toESM(require_prop_types());
var import_etvaskit15 = require("@etvas/etvaskit");
var GridButtons = ({ item, actions }) => {
  const availableActions = actions.filter((action) => !action.hide);
  return /* @__PURE__ */ React.createElement(import_etvaskit15.Flex, { width: "100%", justifyContent: "flex-end" }, availableActions.map((action, i) => /* @__PURE__ */ React.createElement(
    GridButton,
    {
      width: "auto",
      key: typeof action.buttonText === "string" ? action.buttonText : action.id,
      disabled: action.disabled,
      loading: action.loading,
      onClick: (e) => {
        e.stopPropagation();
        action.action(item);
      },
      mr: i !== availableActions.length - 1 ? 6 : 0
    },
    action.buttonText
  )));
};
GridButtons.propTypes = {
  item: import_prop_types15.default.any,
  actions: import_prop_types15.default.arrayOf(import_prop_types15.default.object)
};

// src/components/Grid/GridDot.jsx
init_react_shim();
var import_prop_types16 = __toESM(require_prop_types());
var import_styled_components14 = __toESM(require("styled-components"));
var import_etvaskit16 = require("@etvas/etvaskit");
var GridDot = ({ color: color2, ...props }) => /* @__PURE__ */ React.createElement(Dot, { color: color2, ...props });
GridDot.propTypes = {
  color: import_prop_types16.default.string
};
var Dot = (0, import_styled_components14.default)(import_etvaskit16.Box)`
  ${(0, import_etvaskit16.themed)("GridDot")}
  background-color: ${({ color: color2 }) => (0, import_etvaskit16.themed)(`colors.${color2}`)};
`;

// src/components/Grid/GridMainComponent.jsx
init_react_shim();
var import_react14 = require("react");
var import_prop_types17 = __toESM(require_prop_types());
var import_etvaskit17 = require("@etvas/etvaskit");
var GridMainComponent = ({
  children,
  icon,
  iconColor,
  iconPosition,
  dotColor,
  ...props
}) => /* @__PURE__ */ React.createElement(import_etvaskit17.Flex, { alignItems: "center", width: "100%", pr: 2 }, !!icon && iconPosition === "left" && /* @__PURE__ */ React.createElement(import_etvaskit17.Flex, { alignItems: "center", mr: 3 }, /* @__PURE__ */ React.createElement(import_etvaskit17.Icon, { name: icon, size: "medium", color: iconColor, x: true })), !!dotColor && /* @__PURE__ */ React.createElement(import_etvaskit17.Flex, { alignItems: "center", mr: 4 }, /* @__PURE__ */ React.createElement(GridDot, { color: dotColor })), /* @__PURE__ */ React.createElement(TruncateGridInfo, { minWidth: "0", fontWeight: "normal", ...props }, children), !!icon && iconPosition === "right" && /* @__PURE__ */ React.createElement(import_etvaskit17.Flex, { alignItems: "center" }, /* @__PURE__ */ React.createElement(import_etvaskit17.Icon, { name: icon, size: "medium", color: iconColor })));
var TruncateGridInfo = ({ children, fontWeight: fontWeight2, color: color2, ...props }) => {
  const [isTruncatedText, setIsTruncatedText] = (0, import_react14.useState)(false);
  const ref = (0, import_react14.useRef)();
  (0, import_react14.useLayoutEffect)(() => {
    setIsTruncatedText(isTruncated(ref == null ? void 0 : ref.current));
  }, []);
  const text = /* @__PURE__ */ React.createElement(
    import_etvaskit17.Typography,
    {
      variant: "labelSmall",
      color: color2,
      truncate: true,
      ref,
      fontWeight: fontWeight2
    },
    children
  );
  return /* @__PURE__ */ React.createElement(import_etvaskit17.Flex, { alignItems: "center", pr: 2, ...props }, isTruncatedText ? /* @__PURE__ */ React.createElement(Tooltip_default, { width: "100%", content: children, distance: "50px" }, text) : text);
};
var isTruncated = (el) => (el == null ? void 0 : el.scrollWidth) > (el == null ? void 0 : el.clientWidth);
TruncateGridInfo.propTypes = {
  children: import_prop_types17.default.any,
  fontWeight: import_prop_types17.default.string,
  color: import_prop_types17.default.string
};
TruncateGridInfo.defaultProps = {
  fontWeight: "lighter",
  color: "textCardTitle"
};
GridMainComponent.propTypes = {
  children: import_prop_types17.default.any,
  icon: import_prop_types17.default.string,
  dotColor: import_prop_types17.default.string,
  iconColor: import_prop_types17.default.string,
  iconPosition: import_prop_types17.default.oneOf(["right", "left"])
};
GridMainComponent.defaultProps = {
  iconColor: "inputIcon",
  iconPosition: "left"
};

// src/components/Charts/index.js
init_react_shim();

// src/components/Charts/LineChart.jsx
init_react_shim();
var import_react15 = require("react");
var import_highcharts = __toESM(require("highcharts"));
var import_highcharts_react_official = __toESM(require("highcharts-react-official"));
var import_prop_types18 = __toESM(require_prop_types());
var getOptions = ({ categories, series, ...rest }) => ({
  chart: {
    type: "spline"
  },
  legend: {
    align: "left",
    verticalAlign: "top",
    layout: "vertical",
    itemMarginBottom: 24
  },
  plotOptions: {
    spline: {
      marker: {
        enabled: true,
        symbol: "circle"
      }
    }
  },
  title: {
    text: ""
  },
  yAxis: {
    title: ""
  },
  xAxis: {
    categories
  },
  series,
  ...rest
});
var LineChart = ({ categories, series, ...rest }) => {
  const options = (0, import_react15.useMemo)(
    () => getOptions({ categories, series, ...rest }),
    [categories, series, rest]
  );
  return /* @__PURE__ */ React.createElement(import_highcharts_react_official.default, { highcharts: import_highcharts.default, options });
};
LineChart.propTypes = {
  categories: import_prop_types18.default.arrayOf(
    import_prop_types18.default.oneOfType([import_prop_types18.default.number, import_prop_types18.default.string])
  ).isRequired,
  series: import_prop_types18.default.arrayOf(
    import_prop_types18.default.shape({
      name: import_prop_types18.default.string,
      data: import_prop_types18.default.oneOfType([
        import_prop_types18.default.number,
        import_prop_types18.default.string,
        import_prop_types18.default.arrayOf(
          import_prop_types18.default.oneOfType([
            import_prop_types18.default.string,
            import_prop_types18.default.number,
            import_prop_types18.default.object
          ])
        )
      ])
    })
  ).isRequired,
  colors: import_prop_types18.default.arrayOf(import_prop_types18.default.string)
};

// src/components/Charts/ColumnChart.jsx
init_react_shim();
var import_react16 = require("react");
var import_highcharts2 = __toESM(require("highcharts"));
var import_highcharts_react_official2 = __toESM(require("highcharts-react-official"));
var import_prop_types19 = __toESM(require_prop_types());
var getOptions2 = ({ categories, series, ...rest }) => ({
  chart: {
    type: "column"
  },
  legend: {
    enabled: false
  },
  plotOptions: {
    spline: {
      marker: {
        enabled: true,
        symbol: "circle"
      }
    }
  },
  title: {
    text: ""
  },
  yAxis: {
    title: ""
  },
  xAxis: {
    categories
  },
  series,
  ...rest
});
var ColumnChart = ({ categories, series, ...rest }) => {
  const options = (0, import_react16.useMemo)(
    () => getOptions2({ categories, series, ...rest }),
    [categories, series, rest]
  );
  return /* @__PURE__ */ React.createElement(import_highcharts_react_official2.default, { highcharts: import_highcharts2.default, options });
};
ColumnChart.propTypes = {
  categories: import_prop_types19.default.arrayOf(
    import_prop_types19.default.oneOfType([import_prop_types19.default.number, import_prop_types19.default.string])
  ).isRequired,
  series: import_prop_types19.default.arrayOf(
    import_prop_types19.default.shape({
      name: import_prop_types19.default.string,
      data: import_prop_types19.default.oneOfType([
        import_prop_types19.default.number,
        import_prop_types19.default.string,
        import_prop_types19.default.arrayOf(
          import_prop_types19.default.oneOfType([
            import_prop_types19.default.string,
            import_prop_types19.default.number,
            import_prop_types19.default.object
          ])
        )
      ])
    })
  ).isRequired,
  colors: import_prop_types19.default.arrayOf(import_prop_types19.default.string)
};

// src/components/Charts/BarChart.jsx
init_react_shim();
var import_react17 = require("react");
var import_highcharts3 = __toESM(require("highcharts"));
var import_highcharts_react_official3 = __toESM(require("highcharts-react-official"));
var import_prop_types20 = __toESM(require_prop_types());
var getOptions3 = ({ categories, series, ...rest }) => ({
  chart: {
    type: "bar"
  },
  legend: {
    align: "right",
    verticalAlign: "top",
    layout: "horizontal",
    itemMarginBottom: 24
  },
  plotOptions: {
    series: {
      stacking: "normal"
    }
  },
  title: {
    text: ""
  },
  yAxis: {
    title: ""
  },
  xAxis: {
    categories
  },
  series,
  ...rest
});
var BarChart = ({ categories, series, ...rest }) => {
  const options = (0, import_react17.useMemo)(
    () => getOptions3({ categories, series, ...rest }),
    [categories, series, rest]
  );
  return /* @__PURE__ */ React.createElement(import_highcharts_react_official3.default, { highcharts: import_highcharts3.default, options });
};
BarChart.propTypes = {
  categories: import_prop_types20.default.arrayOf(
    import_prop_types20.default.oneOfType([import_prop_types20.default.number, import_prop_types20.default.string])
  ),
  series: import_prop_types20.default.arrayOf(
    import_prop_types20.default.shape({
      name: import_prop_types20.default.string,
      data: import_prop_types20.default.oneOfType([
        import_prop_types20.default.number,
        import_prop_types20.default.string,
        import_prop_types20.default.arrayOf(
          import_prop_types20.default.oneOfType([
            import_prop_types20.default.string,
            import_prop_types20.default.number,
            import_prop_types20.default.object
          ])
        )
      ])
    })
  ).isRequired,
  colors: import_prop_types20.default.arrayOf(import_prop_types20.default.string)
};

// src/components/Counter.jsx
init_react_shim();
var import_prop_types21 = __toESM(require_prop_types());
var import_etvaskit18 = require("@etvas/etvaskit");
var Counter = ({
  label,
  value,
  chipBgColor,
  chipTextColor,
  ...props
}) => /* @__PURE__ */ React.createElement(import_etvaskit18.Flex, { alignItems: "center", ...props }, /* @__PURE__ */ React.createElement(import_etvaskit18.Typography, { variant: "base16Light", mr: 2 }, label), /* @__PURE__ */ React.createElement(import_etvaskit18.Chip, { color: chipBgColor, isRounded: true }, /* @__PURE__ */ React.createElement(import_etvaskit18.Typography, { variant: "base14Light", color: chipTextColor }, value)));
Counter.propTypes = {
  label: import_prop_types21.default.node,
  value: import_prop_types21.default.node,
  chipBgColor: import_prop_types21.default.string,
  chipTextColor: import_prop_types21.default.string
};
Counter.defaultProps = {
  chipBgColor: "etvas",
  chipTextColor: "baseWhite"
};

// src/components/Divider.jsx
init_react_shim();
var import_styled_components15 = __toESM(require("styled-components"));
var import_etvaskit19 = require("@etvas/etvaskit");
var Divider = (0, import_styled_components15.default)(import_etvaskit19.Box)`
  border-top: 1px solid ${(0, import_etvaskit19.themed)("colors.divider")};
`;

// src/components/RuleBuilder/index.js
init_react_shim();

// src/components/RuleBuilder/RuleBuilder.jsx
init_react_shim();
var import_react23 = require("react");
var import_formik5 = require("formik");
var import_lodash = __toESM(require_lodash());
var import_prop_types33 = __toESM(require_prop_types());

// node_modules/uuid/dist/esm-browser/index.js
init_react_shim();

// node_modules/uuid/dist/esm-browser/rng.js
init_react_shim();
var getRandomValues;
var rnds8 = new Uint8Array(16);
function rng() {
  if (!getRandomValues) {
    getRandomValues = typeof crypto !== "undefined" && crypto.getRandomValues && crypto.getRandomValues.bind(crypto) || typeof msCrypto !== "undefined" && typeof msCrypto.getRandomValues === "function" && msCrypto.getRandomValues.bind(msCrypto);
    if (!getRandomValues) {
      throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
    }
  }
  return getRandomValues(rnds8);
}

// node_modules/uuid/dist/esm-browser/stringify.js
init_react_shim();

// node_modules/uuid/dist/esm-browser/validate.js
init_react_shim();

// node_modules/uuid/dist/esm-browser/regex.js
init_react_shim();
var regex_default = /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;

// node_modules/uuid/dist/esm-browser/validate.js
function validate(uuid) {
  return typeof uuid === "string" && regex_default.test(uuid);
}
var validate_default = validate;

// node_modules/uuid/dist/esm-browser/stringify.js
var byteToHex = [];
for (i = 0; i < 256; ++i) {
  byteToHex.push((i + 256).toString(16).substr(1));
}
var i;
function stringify(arr) {
  var offset = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
  var uuid = (byteToHex[arr[offset + 0]] + byteToHex[arr[offset + 1]] + byteToHex[arr[offset + 2]] + byteToHex[arr[offset + 3]] + "-" + byteToHex[arr[offset + 4]] + byteToHex[arr[offset + 5]] + "-" + byteToHex[arr[offset + 6]] + byteToHex[arr[offset + 7]] + "-" + byteToHex[arr[offset + 8]] + byteToHex[arr[offset + 9]] + "-" + byteToHex[arr[offset + 10]] + byteToHex[arr[offset + 11]] + byteToHex[arr[offset + 12]] + byteToHex[arr[offset + 13]] + byteToHex[arr[offset + 14]] + byteToHex[arr[offset + 15]]).toLowerCase();
  if (!validate_default(uuid)) {
    throw TypeError("Stringified UUID is invalid");
  }
  return uuid;
}
var stringify_default = stringify;

// node_modules/uuid/dist/esm-browser/v4.js
init_react_shim();
function v4(options, buf, offset) {
  options = options || {};
  var rnds = options.random || (options.rng || rng)();
  rnds[6] = rnds[6] & 15 | 64;
  rnds[8] = rnds[8] & 63 | 128;
  if (buf) {
    offset = offset || 0;
    for (var i = 0; i < 16; ++i) {
      buf[offset + i] = rnds[i];
    }
    return buf;
  }
  return stringify_default(rnds);
}
var v4_default = v4;

// src/components/RuleBuilder/RuleBuilder.jsx
var import_etvaskit29 = require("@etvas/etvaskit");

// src/components/RuleBuilder/CombinatorField.jsx
init_react_shim();
var import_formik = require("formik");
var import_prop_types23 = __toESM(require_prop_types());

// src/components/RuleBuilder/Combinator.jsx
init_react_shim();
var import_prop_types22 = __toESM(require_prop_types());
var import_styled_components16 = __toESM(require("styled-components"));
var import_etvaskit20 = require("@etvas/etvaskit");
var Combinator = ({
  options,
  disabled,
  value: currentValue,
  onChange,
  ...rest
}) => options.map(({ value, label }) => /* @__PURE__ */ React.createElement(
  import_etvaskit20.Touchable,
  {
    key: value,
    onClick: () => onChange(value),
    disabled,
    ...rest
  },
  /* @__PURE__ */ React.createElement(CustomChip, { isSelected: value === currentValue, disabled }, /* @__PURE__ */ React.createElement(import_etvaskit20.Typography, { variant: "base12Bold", color: "inherit" }, label))
));
var CustomChip = import_styled_components16.default.div(
  ({ isSelected, disabled }) => index_esm_default({
    py: 1,
    px: 2,
    mr: 2,
    whiteSpace: "nowrap",
    alignItems: "center",
    width: "fit-content",
    borderRadius: 3,
    backgroundColor: isSelected ? disabled ? "baseGrayLight" : "etvasLight" : "transparent",
    color: isSelected ? "baseWhite" : "etvasDark",
    opacity: isSelected ? 1 : 0.2
  })
);
Combinator.propTypes = {
  disabled: import_prop_types22.default.bool,
  options: import_prop_types22.default.arrayOf(
    import_prop_types22.default.shape({
      value: import_prop_types22.default.string,
      label: import_prop_types22.default.node
    })
  ).isRequired
};

// src/components/RuleBuilder/CombinatorField.jsx
var CombinatorField = ({ name, disabled, options, ...rest }) => {
  const [{ value }, _, { setValue }] = (0, import_formik.useField)(name);
  return /* @__PURE__ */ React.createElement(
    Combinator,
    {
      value,
      onChange: setValue,
      options,
      disabled,
      ...rest
    }
  );
};
CombinatorField.propTypes = {
  name: import_prop_types23.default.string.isRequired,
  disabled: import_prop_types23.default.bool,
  options: import_prop_types23.default.arrayOf(
    import_prop_types23.default.shape({
      value: import_prop_types23.default.string,
      label: import_prop_types23.default.node
    })
  ).isRequired
};

// src/components/RuleBuilder/Group.jsx
init_react_shim();
var import_react22 = require("react");
var import_prop_types32 = __toESM(require_prop_types());
var import_etvaskit28 = require("@etvas/etvaskit");

// src/components/RuleBuilder/Rule.jsx
init_react_shim();
var import_react21 = require("react");
var import_formik4 = require("formik");
var import_prop_types31 = __toESM(require_prop_types());
var import_etvaskit27 = require("@etvas/etvaskit");

// src/components/IntervalField.jsx
init_react_shim();
var import_react18 = require("react");
var import_formik2 = require("formik");
var import_prop_types24 = __toESM(require_prop_types());
var import_etvaskit23 = require("@etvas/etvaskit");

// src/components/TagInput/SubLabel.jsx
init_react_shim();
var import_styled_components17 = __toESM(require("styled-components"));

// node_modules/styled-system/dist/index.esm.js
init_react_shim();

// node_modules/@styled-system/core/dist/index.esm.js
init_react_shim();
var import_object_assign = __toESM(require_object_assign());
var merge = function merge2(a, b) {
  var result = (0, import_object_assign.default)({}, a, b);
  for (var key in a) {
    var _assign;
    if (!a[key] || typeof b[key] !== "object")
      continue;
    (0, import_object_assign.default)(result, (_assign = {}, _assign[key] = (0, import_object_assign.default)(a[key], b[key]), _assign));
  }
  return result;
};
var sort = function sort2(obj) {
  var next = {};
  Object.keys(obj).sort(function(a, b) {
    return a.localeCompare(b, void 0, {
      numeric: true,
      sensitivity: "base"
    });
  }).forEach(function(key) {
    next[key] = obj[key];
  });
  return next;
};
var defaults = {
  breakpoints: [40, 52, 64].map(function(n) {
    return n + "em";
  })
};
var createMediaQuery = function createMediaQuery2(n) {
  return "@media screen and (min-width: " + n + ")";
};
var getValue = function getValue2(n, scale) {
  return get3(scale, n, n);
};
var get3 = function get4(obj, key, def, p, undef) {
  key = key && key.split ? key.split(".") : [key];
  for (p = 0; p < key.length; p++) {
    obj = obj ? obj[key[p]] : undef;
  }
  return obj === undef ? def : obj;
};
var createParser = function createParser2(config9) {
  var cache = {};
  var parse = function parse2(props) {
    var styles = {};
    var shouldSort = false;
    var isCacheDisabled = props.theme && props.theme.disableStyledSystemCache;
    for (var key in props) {
      if (!config9[key])
        continue;
      var sx = config9[key];
      var raw = props[key];
      var scale = get3(props.theme, sx.scale, sx.defaults);
      if (typeof raw === "object") {
        cache.breakpoints = !isCacheDisabled && cache.breakpoints || get3(props.theme, "breakpoints", defaults.breakpoints);
        if (Array.isArray(raw)) {
          cache.media = !isCacheDisabled && cache.media || [null].concat(cache.breakpoints.map(createMediaQuery));
          styles = merge(styles, parseResponsiveStyle(cache.media, sx, scale, raw, props));
          continue;
        }
        if (raw !== null) {
          styles = merge(styles, parseResponsiveObject(cache.breakpoints, sx, scale, raw, props));
          shouldSort = true;
        }
        continue;
      }
      (0, import_object_assign.default)(styles, sx(raw, scale, props));
    }
    if (shouldSort) {
      styles = sort(styles);
    }
    return styles;
  };
  parse.config = config9;
  parse.propNames = Object.keys(config9);
  parse.cache = cache;
  var keys = Object.keys(config9).filter(function(k) {
    return k !== "config";
  });
  if (keys.length > 1) {
    keys.forEach(function(key) {
      var _createParser;
      parse[key] = createParser2((_createParser = {}, _createParser[key] = config9[key], _createParser));
    });
  }
  return parse;
};
var parseResponsiveStyle = function parseResponsiveStyle2(mediaQueries, sx, scale, raw, _props) {
  var styles = {};
  raw.slice(0, mediaQueries.length).forEach(function(value, i) {
    var media = mediaQueries[i];
    var style = sx(value, scale, _props);
    if (!media) {
      (0, import_object_assign.default)(styles, style);
    } else {
      var _assign2;
      (0, import_object_assign.default)(styles, (_assign2 = {}, _assign2[media] = (0, import_object_assign.default)({}, styles[media], style), _assign2));
    }
  });
  return styles;
};
var parseResponsiveObject = function parseResponsiveObject2(breakpoints, sx, scale, raw, _props) {
  var styles = {};
  for (var key in raw) {
    var breakpoint = breakpoints[key];
    var value = raw[key];
    var style = sx(value, scale, _props);
    if (!breakpoint) {
      (0, import_object_assign.default)(styles, style);
    } else {
      var _assign3;
      var media = createMediaQuery(breakpoint);
      (0, import_object_assign.default)(styles, (_assign3 = {}, _assign3[media] = (0, import_object_assign.default)({}, styles[media], style), _assign3));
    }
  }
  return styles;
};
var createStyleFunction = function createStyleFunction2(_ref) {
  var properties = _ref.properties, property = _ref.property, scale = _ref.scale, _ref$transform = _ref.transform, transform = _ref$transform === void 0 ? getValue : _ref$transform, defaultScale = _ref.defaultScale;
  properties = properties || [property];
  var sx = function sx2(value, scale2, _props) {
    var result = {};
    var n = transform(value, scale2, _props);
    if (n === null)
      return;
    properties.forEach(function(prop) {
      result[prop] = n;
    });
    return result;
  };
  sx.scale = scale;
  sx.defaults = defaultScale;
  return sx;
};
var system = function system2(args) {
  if (args === void 0) {
    args = {};
  }
  var config9 = {};
  Object.keys(args).forEach(function(key) {
    var conf = args[key];
    if (conf === true) {
      config9[key] = createStyleFunction({
        property: key,
        scale: key
      });
      return;
    }
    if (typeof conf === "function") {
      config9[key] = conf;
      return;
    }
    config9[key] = createStyleFunction(conf);
  });
  var parser = createParser(config9);
  return parser;
};
var compose = function compose2() {
  var config9 = {};
  for (var _len = arguments.length, parsers = new Array(_len), _key = 0; _key < _len; _key++) {
    parsers[_key] = arguments[_key];
  }
  parsers.forEach(function(parser2) {
    if (!parser2 || !parser2.config)
      return;
    (0, import_object_assign.default)(config9, parser2.config);
  });
  var parser = createParser(config9);
  return parser;
};

// node_modules/@styled-system/layout/dist/index.esm.js
init_react_shim();
var isNumber = function isNumber2(n) {
  return typeof n === "number" && !isNaN(n);
};
var getWidth = function getWidth2(n, scale) {
  return get3(scale, n, !isNumber(n) || n > 1 ? n : n * 100 + "%");
};
var config = {
  width: {
    property: "width",
    scale: "sizes",
    transform: getWidth
  },
  height: {
    property: "height",
    scale: "sizes"
  },
  minWidth: {
    property: "minWidth",
    scale: "sizes"
  },
  minHeight: {
    property: "minHeight",
    scale: "sizes"
  },
  maxWidth: {
    property: "maxWidth",
    scale: "sizes"
  },
  maxHeight: {
    property: "maxHeight",
    scale: "sizes"
  },
  size: {
    properties: ["width", "height"],
    scale: "sizes"
  },
  overflow: true,
  overflowX: true,
  overflowY: true,
  display: true,
  verticalAlign: true
};
var layout = system(config);
var index_esm_default2 = layout;

// node_modules/@styled-system/color/dist/index.esm.js
init_react_shim();
var config2 = {
  color: {
    property: "color",
    scale: "colors"
  },
  backgroundColor: {
    property: "backgroundColor",
    scale: "colors"
  },
  opacity: true
};
config2.bg = config2.backgroundColor;
var color = system(config2);
var index_esm_default3 = color;

// node_modules/@styled-system/typography/dist/index.esm.js
init_react_shim();
var defaults2 = {
  fontSizes: [12, 14, 16, 20, 24, 32, 48, 64, 72]
};
var config3 = {
  fontFamily: {
    property: "fontFamily",
    scale: "fonts"
  },
  fontSize: {
    property: "fontSize",
    scale: "fontSizes",
    defaultScale: defaults2.fontSizes
  },
  fontWeight: {
    property: "fontWeight",
    scale: "fontWeights"
  },
  lineHeight: {
    property: "lineHeight",
    scale: "lineHeights"
  },
  letterSpacing: {
    property: "letterSpacing",
    scale: "letterSpacings"
  },
  textAlign: true,
  fontStyle: true
};
var typography = system(config3);
var index_esm_default4 = typography;

// node_modules/@styled-system/flexbox/dist/index.esm.js
init_react_shim();
var config4 = {
  alignItems: true,
  alignContent: true,
  justifyItems: true,
  justifyContent: true,
  flexWrap: true,
  flexDirection: true,
  flex: true,
  flexGrow: true,
  flexShrink: true,
  flexBasis: true,
  justifySelf: true,
  alignSelf: true,
  order: true
};
var flexbox = system(config4);
var index_esm_default5 = flexbox;

// node_modules/@styled-system/grid/dist/index.esm.js
init_react_shim();
var defaults3 = {
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512]
};
var config5 = {
  gridGap: {
    property: "gridGap",
    scale: "space",
    defaultScale: defaults3.space
  },
  gridColumnGap: {
    property: "gridColumnGap",
    scale: "space",
    defaultScale: defaults3.space
  },
  gridRowGap: {
    property: "gridRowGap",
    scale: "space",
    defaultScale: defaults3.space
  },
  gridColumn: true,
  gridRow: true,
  gridAutoFlow: true,
  gridAutoColumns: true,
  gridAutoRows: true,
  gridTemplateColumns: true,
  gridTemplateRows: true,
  gridTemplateAreas: true,
  gridArea: true
};
var grid = system(config5);
var index_esm_default6 = grid;

// node_modules/@styled-system/border/dist/index.esm.js
init_react_shim();
var config6 = {
  border: {
    property: "border",
    scale: "borders"
  },
  borderWidth: {
    property: "borderWidth",
    scale: "borderWidths"
  },
  borderStyle: {
    property: "borderStyle",
    scale: "borderStyles"
  },
  borderColor: {
    property: "borderColor",
    scale: "colors"
  },
  borderRadius: {
    property: "borderRadius",
    scale: "radii"
  },
  borderTop: {
    property: "borderTop",
    scale: "borders"
  },
  borderTopLeftRadius: {
    property: "borderTopLeftRadius",
    scale: "radii"
  },
  borderTopRightRadius: {
    property: "borderTopRightRadius",
    scale: "radii"
  },
  borderRight: {
    property: "borderRight",
    scale: "borders"
  },
  borderBottom: {
    property: "borderBottom",
    scale: "borders"
  },
  borderBottomLeftRadius: {
    property: "borderBottomLeftRadius",
    scale: "radii"
  },
  borderBottomRightRadius: {
    property: "borderBottomRightRadius",
    scale: "radii"
  },
  borderLeft: {
    property: "borderLeft",
    scale: "borders"
  },
  borderX: {
    properties: ["borderLeft", "borderRight"],
    scale: "borders"
  },
  borderY: {
    properties: ["borderTop", "borderBottom"],
    scale: "borders"
  }
};
config6.borderTopWidth = {
  property: "borderTopWidth",
  scale: "borderWidths"
};
config6.borderTopColor = {
  property: "borderTopColor",
  scale: "colors"
};
config6.borderTopStyle = {
  property: "borderTopStyle",
  scale: "borderStyles"
};
config6.borderTopLeftRadius = {
  property: "borderTopLeftRadius",
  scale: "radii"
};
config6.borderTopRightRadius = {
  property: "borderTopRightRadius",
  scale: "radii"
};
config6.borderBottomWidth = {
  property: "borderBottomWidth",
  scale: "borderWidths"
};
config6.borderBottomColor = {
  property: "borderBottomColor",
  scale: "colors"
};
config6.borderBottomStyle = {
  property: "borderBottomStyle",
  scale: "borderStyles"
};
config6.borderBottomLeftRadius = {
  property: "borderBottomLeftRadius",
  scale: "radii"
};
config6.borderBottomRightRadius = {
  property: "borderBottomRightRadius",
  scale: "radii"
};
config6.borderLeftWidth = {
  property: "borderLeftWidth",
  scale: "borderWidths"
};
config6.borderLeftColor = {
  property: "borderLeftColor",
  scale: "colors"
};
config6.borderLeftStyle = {
  property: "borderLeftStyle",
  scale: "borderStyles"
};
config6.borderRightWidth = {
  property: "borderRightWidth",
  scale: "borderWidths"
};
config6.borderRightColor = {
  property: "borderRightColor",
  scale: "colors"
};
config6.borderRightStyle = {
  property: "borderRightStyle",
  scale: "borderStyles"
};
var border = system(config6);
var index_esm_default7 = border;

// node_modules/@styled-system/background/dist/index.esm.js
init_react_shim();
var config7 = {
  background: true,
  backgroundImage: true,
  backgroundSize: true,
  backgroundPosition: true,
  backgroundRepeat: true
};
config7.bgImage = config7.backgroundImage;
config7.bgSize = config7.backgroundSize;
config7.bgPosition = config7.backgroundPosition;
config7.bgRepeat = config7.backgroundRepeat;
var background = system(config7);
var index_esm_default8 = background;

// node_modules/@styled-system/position/dist/index.esm.js
init_react_shim();
var defaults4 = {
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512]
};
var config8 = {
  position: true,
  zIndex: {
    property: "zIndex",
    scale: "zIndices"
  },
  top: {
    property: "top",
    scale: "space",
    defaultScale: defaults4.space
  },
  right: {
    property: "right",
    scale: "space",
    defaultScale: defaults4.space
  },
  bottom: {
    property: "bottom",
    scale: "space",
    defaultScale: defaults4.space
  },
  left: {
    property: "left",
    scale: "space",
    defaultScale: defaults4.space
  }
};
var position = system(config8);
var index_esm_default9 = position;

// node_modules/@styled-system/space/dist/index.esm.js
init_react_shim();
var defaults5 = {
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512]
};
var isNumber3 = function isNumber4(n) {
  return typeof n === "number" && !isNaN(n);
};
var getMargin = function getMargin2(n, scale) {
  if (!isNumber3(n)) {
    return get3(scale, n, n);
  }
  var isNegative = n < 0;
  var absolute = Math.abs(n);
  var value = get3(scale, absolute, absolute);
  if (!isNumber3(value)) {
    return isNegative ? "-" + value : value;
  }
  return value * (isNegative ? -1 : 1);
};
var configs = {};
configs.margin = {
  margin: {
    property: "margin",
    scale: "space",
    transform: getMargin,
    defaultScale: defaults5.space
  },
  marginTop: {
    property: "marginTop",
    scale: "space",
    transform: getMargin,
    defaultScale: defaults5.space
  },
  marginRight: {
    property: "marginRight",
    scale: "space",
    transform: getMargin,
    defaultScale: defaults5.space
  },
  marginBottom: {
    property: "marginBottom",
    scale: "space",
    transform: getMargin,
    defaultScale: defaults5.space
  },
  marginLeft: {
    property: "marginLeft",
    scale: "space",
    transform: getMargin,
    defaultScale: defaults5.space
  },
  marginX: {
    properties: ["marginLeft", "marginRight"],
    scale: "space",
    transform: getMargin,
    defaultScale: defaults5.space
  },
  marginY: {
    properties: ["marginTop", "marginBottom"],
    scale: "space",
    transform: getMargin,
    defaultScale: defaults5.space
  }
};
configs.margin.m = configs.margin.margin;
configs.margin.mt = configs.margin.marginTop;
configs.margin.mr = configs.margin.marginRight;
configs.margin.mb = configs.margin.marginBottom;
configs.margin.ml = configs.margin.marginLeft;
configs.margin.mx = configs.margin.marginX;
configs.margin.my = configs.margin.marginY;
configs.padding = {
  padding: {
    property: "padding",
    scale: "space",
    defaultScale: defaults5.space
  },
  paddingTop: {
    property: "paddingTop",
    scale: "space",
    defaultScale: defaults5.space
  },
  paddingRight: {
    property: "paddingRight",
    scale: "space",
    defaultScale: defaults5.space
  },
  paddingBottom: {
    property: "paddingBottom",
    scale: "space",
    defaultScale: defaults5.space
  },
  paddingLeft: {
    property: "paddingLeft",
    scale: "space",
    defaultScale: defaults5.space
  },
  paddingX: {
    properties: ["paddingLeft", "paddingRight"],
    scale: "space",
    defaultScale: defaults5.space
  },
  paddingY: {
    properties: ["paddingTop", "paddingBottom"],
    scale: "space",
    defaultScale: defaults5.space
  }
};
configs.padding.p = configs.padding.padding;
configs.padding.pt = configs.padding.paddingTop;
configs.padding.pr = configs.padding.paddingRight;
configs.padding.pb = configs.padding.paddingBottom;
configs.padding.pl = configs.padding.paddingLeft;
configs.padding.px = configs.padding.paddingX;
configs.padding.py = configs.padding.paddingY;
var margin = system(configs.margin);
var padding = system(configs.padding);
var space = compose(margin, padding);

// node_modules/@styled-system/shadow/dist/index.esm.js
init_react_shim();
var shadow = system({
  boxShadow: {
    property: "boxShadow",
    scale: "shadows"
  },
  textShadow: {
    property: "textShadow",
    scale: "shadows"
  }
});

// node_modules/@styled-system/variant/dist/index.esm.js
init_react_shim();
var variant = function variant2(_ref) {
  var _config;
  var scale = _ref.scale, _ref$prop = _ref.prop, prop = _ref$prop === void 0 ? "variant" : _ref$prop, _ref$variants = _ref.variants, variants = _ref$variants === void 0 ? {} : _ref$variants, key = _ref.key;
  var sx;
  if (Object.keys(variants).length) {
    sx = function sx2(value, scale2, props) {
      return index_esm_default(get3(scale2, value, null))(props.theme);
    };
  } else {
    sx = function sx2(value, scale2) {
      return get3(scale2, value, null);
    };
  }
  sx.scale = scale || key;
  sx.defaults = variants;
  var config9 = (_config = {}, _config[prop] = sx, _config);
  var parser = createParser(config9);
  return parser;
};
var buttonStyle = variant({
  key: "buttons"
});
var textStyle = variant({
  key: "textStyles",
  prop: "textStyle"
});
var colorStyle = variant({
  key: "colorStyles",
  prop: "colors"
});

// node_modules/styled-system/dist/index.esm.js
var width = index_esm_default2.width;
var height = index_esm_default2.height;
var minWidth = index_esm_default2.minWidth;
var minHeight = index_esm_default2.minHeight;
var maxWidth = index_esm_default2.maxWidth;
var maxHeight = index_esm_default2.maxHeight;
var size = index_esm_default2.size;
var verticalAlign = index_esm_default2.verticalAlign;
var display = index_esm_default2.display;
var overflow = index_esm_default2.overflow;
var overflowX = index_esm_default2.overflowX;
var overflowY = index_esm_default2.overflowY;
var opacity = index_esm_default3.opacity;
var fontSize = index_esm_default4.fontSize;
var fontFamily = index_esm_default4.fontFamily;
var fontWeight = index_esm_default4.fontWeight;
var lineHeight = index_esm_default4.lineHeight;
var textAlign = index_esm_default4.textAlign;
var fontStyle = index_esm_default4.fontStyle;
var letterSpacing = index_esm_default4.letterSpacing;
var alignItems = index_esm_default5.alignItems;
var alignContent = index_esm_default5.alignContent;
var justifyItems = index_esm_default5.justifyItems;
var justifyContent = index_esm_default5.justifyContent;
var flexWrap = index_esm_default5.flexWrap;
var flexDirection = index_esm_default5.flexDirection;
var flex = index_esm_default5.flex;
var flexGrow = index_esm_default5.flexGrow;
var flexShrink = index_esm_default5.flexShrink;
var flexBasis = index_esm_default5.flexBasis;
var justifySelf = index_esm_default5.justifySelf;
var alignSelf = index_esm_default5.alignSelf;
var order = index_esm_default5.order;
var gridGap = index_esm_default6.gridGap;
var gridColumnGap = index_esm_default6.gridColumnGap;
var gridRowGap = index_esm_default6.gridRowGap;
var gridColumn = index_esm_default6.gridColumn;
var gridRow = index_esm_default6.gridRow;
var gridAutoFlow = index_esm_default6.gridAutoFlow;
var gridAutoColumns = index_esm_default6.gridAutoColumns;
var gridAutoRows = index_esm_default6.gridAutoRows;
var gridTemplateColumns = index_esm_default6.gridTemplateColumns;
var gridTemplateRows = index_esm_default6.gridTemplateRows;
var gridTemplateAreas = index_esm_default6.gridTemplateAreas;
var gridArea = index_esm_default6.gridArea;
var borderWidth = index_esm_default7.borderWidth;
var borderStyle = index_esm_default7.borderStyle;
var borderColor = index_esm_default7.borderColor;
var borderTop = index_esm_default7.borderTop;
var borderRight = index_esm_default7.borderRight;
var borderBottom = index_esm_default7.borderBottom;
var borderLeft = index_esm_default7.borderLeft;
var borderRadius = index_esm_default7.borderRadius;
var backgroundImage = index_esm_default8.backgroundImage;
var backgroundSize = index_esm_default8.backgroundSize;
var backgroundPosition = index_esm_default8.backgroundPosition;
var backgroundRepeat = index_esm_default8.backgroundRepeat;
var zIndex = index_esm_default9.zIndex;
var top = index_esm_default9.top;
var right = index_esm_default9.right;
var bottom = index_esm_default9.bottom;
var left = index_esm_default9.left;

// src/components/TagInput/SubLabel.jsx
var import_etvaskit22 = require("@etvas/etvaskit");

// src/components/TagInput/variants.sublabel.js
init_react_shim();
var import_etvaskit21 = require("@etvas/etvaskit");
var DEFAULT_STYLE = {
  color: "textDefault",
  fontFamily: import_etvaskit21.etvasTheme.fonts.primary,
  fontWeight: import_etvaskit21.etvasTheme.fontWeights.lighter,
  fontSize: import_etvaskit21.etvasTheme.fontSizes[0],
  lineHeight: import_etvaskit21.etvasTheme.lineHeights.base,
  letterSpacing: import_etvaskit21.etvasTheme.letterSpacings.base
};
var ERROR_STYLE = {
  ...DEFAULT_STYLE,
  color: "statusError"
};
var WARNING_STYLE = {
  ...DEFAULT_STYLE,
  color: "statusWarning"
};
var VALID_STYLE = {
  ...DEFAULT_STYLE
};
var DISABLED_STYLE = {
  ...DEFAULT_STYLE
};
var variants_sublabel_default = {
  default: DEFAULT_STYLE,
  error: ERROR_STYLE,
  warning: WARNING_STYLE,
  valid: VALID_STYLE,
  disabled: DISABLED_STYLE
};

// src/components/TagInput/SubLabel.jsx
var SubLabel = (0, import_styled_components17.default)(import_etvaskit22.Typography)`
  min-height: ${({ noPreserveSpace }) => noPreserveSpace ? 0 : "16px"};
  ${variant({ variants: variants_sublabel_default })}
`;

// src/components/IntervalField.jsx
var IntervalField = ({
  id,
  name,
  label,
  placeholder,
  noPreserveSpace,
  disabled,
  separator,
  stringSeparator,
  suffix,
  suffixSpace,
  showTooltip,
  ...props
}) => {
  const [{ value }, { touched, error }, { setValue }] = (0, import_formik2.useField)(name);
  const { submitCount } = (0, import_formik2.useFormikContext)();
  const _error = touched && error;
  const displayedError = submitCount > 0 ? _error : value && _error;
  const [idLeft, idRight] = (0, import_react18.useMemo)(() => {
    const idOrNameId = id || `${name}-${v4_default()}`;
    return [`${idOrNameId}-left`, `${idOrNameId}-right`];
  }, [id, name]);
  (0, import_react18.useEffect)(() => {
    if (value && !(value == null ? void 0 : value.toString().includes(stringSeparator))) {
      setValue(`${value}${stringSeparator}`);
    }
  }, [value, setValue, stringSeparator]);
  const placeholderSplit = placeholder == null ? void 0 : placeholder.split("-");
  const [placeholderLeft, placeholderRight] = [
    placeholderSplit == null ? void 0 : placeholderSplit.shift(),
    placeholderSplit == null ? void 0 : placeholderSplit.pop()
  ];
  const valueSplit = value == null ? void 0 : value.toString().split(stringSeparator);
  const [leftValue, rightValue] = [valueSplit == null ? void 0 : valueSplit.shift(), valueSplit == null ? void 0 : valueSplit.pop()];
  const handleLeftChange = (0, import_react18.useCallback)(
    (event) => {
      const val = event.target.value;
      const right2 = value ? value == null ? void 0 : value.split(stringSeparator).pop() : "";
      setValue(`${val}${stringSeparator}${right2}`);
    },
    [setValue, value, stringSeparator]
  );
  const handleRightChange = (0, import_react18.useCallback)(
    (event) => {
      const val = event.target.value;
      const left2 = value ? value == null ? void 0 : value.split(stringSeparator).shift() : "";
      setValue(`${left2}${stringSeparator}${val}`);
    },
    [setValue, value, stringSeparator]
  );
  return /* @__PURE__ */ React.createElement(
    import_etvaskit23.Flex,
    {
      width: 1,
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      ...props
    },
    /* @__PURE__ */ React.createElement(import_etvaskit23.Flex, { width: 1, justifyContent: "space-between", alignItems: "flex-end" }, /* @__PURE__ */ React.createElement(
      import_etvaskit23.SubdomainInput,
      {
        id: idLeft,
        label,
        disabled,
        type: "number",
        placeholder: placeholderLeft,
        suffix,
        suffixSpace: suffixSpace || 0,
        prefix: "",
        value: leftValue,
        onChange: handleLeftChange,
        error: !!displayedError,
        noBottomSpace: true,
        required: true,
        showTooltip
      }
    ), /* @__PURE__ */ React.createElement(import_etvaskit23.Typography, { variant: "base12Bold", px: 2, mb: "14px" }, separator), /* @__PURE__ */ React.createElement(
      import_etvaskit23.SubdomainInput,
      {
        id: idRight,
        disabled,
        type: "number",
        placeholder: placeholderRight,
        suffix,
        suffixSpace: suffixSpace || 0,
        prefix: "",
        value: rightValue,
        onChange: handleRightChange,
        error: !!displayedError,
        noBottomSpace: true,
        required: true
      }
    )),
    /* @__PURE__ */ React.createElement(SubLabel, { noPreserveSpace, variant: "error", mt: 1 }, displayedError)
  );
};
IntervalField.propTypes = {
  id: import_prop_types24.default.string,
  name: import_prop_types24.default.string,
  label: import_prop_types24.default.string,
  placeholder: import_prop_types24.default.string,
  noPreserveSpace: import_prop_types24.default.bool,
  disabled: import_prop_types24.default.bool,
  separator: import_prop_types24.default.string,
  stringSeparator: import_prop_types24.default.string,
  suffix: import_prop_types24.default.string,
  suffixSpace: import_prop_types24.default.number,
  showTooltip: import_prop_types24.default.bool
};
IntervalField.defaultProps = {
  separator: "-",
  stringSeparator: ","
};

// src/components/TagInput/TagField.jsx
init_react_shim();
var import_react20 = require("react");
var import_formik3 = require("formik");
var import_prop_types30 = __toESM(require_prop_types());

// src/components/TagInput/TagInput.jsx
init_react_shim();
var import_react19 = require("react");

// node_modules/@styled-system/prop-types/dist/index.esm.js
init_react_shim();
var import_prop_types25 = __toESM(require_prop_types());
function _extends2() {
  _extends2 = Object.assign || function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends2.apply(this, arguments);
}
var propType = import_prop_types25.default.oneOfType([import_prop_types25.default.number, import_prop_types25.default.string, import_prop_types25.default.array, import_prop_types25.default.object]);
var createPropTypes = function createPropTypes2(props) {
  return props.reduce(function(acc, name) {
    var _extends22;
    return _extends2({}, acc, (_extends22 = {}, _extends22[name] = propType, _extends22));
  }, {});
};
var index_esm_default11 = {
  space: createPropTypes(space.propNames),
  color: createPropTypes(color.propNames),
  layout: createPropTypes(layout.propNames),
  typography: createPropTypes(typography.propNames),
  flexbox: createPropTypes(flexbox.propNames),
  border: createPropTypes(border.propNames),
  background: createPropTypes(background.propNames),
  position: createPropTypes(position.propNames),
  grid: createPropTypes(grid.propNames),
  shadow: createPropTypes(shadow.propNames),
  buttonStyle: createPropTypes(buttonStyle.propNames),
  textStyle: createPropTypes(textStyle.propNames),
  colorStyle: createPropTypes(colorStyle.propNames)
};

// node_modules/@styled-system/theme-get/dist/index.esm.js
init_react_shim();
var themeGet = function themeGet2(path, fallback) {
  if (fallback === void 0) {
    fallback = null;
  }
  return function(props) {
    return get3(props.theme, path, fallback);
  };
};

// src/components/TagInput/TagInput.jsx
var import_prop_types29 = __toESM(require_prop_types());
var import_styled_components19 = __toESM(require("styled-components"));
var import_etvaskit26 = require("@etvas/etvaskit");

// src/components/TagInput/Tag.jsx
init_react_shim();
var import_prop_types26 = __toESM(require_prop_types());
var import_styled_components18 = __toESM(require("styled-components"));
var import_etvaskit24 = require("@etvas/etvaskit");
var Tag = ({ value, disabled, onRemove, ...rest }) => /* @__PURE__ */ React.createElement(Container, { disabled, rest }, /* @__PURE__ */ React.createElement(import_etvaskit24.Typography, { color: "baseWhite", variant: "base14Light" }, value), !disabled && /* @__PURE__ */ React.createElement(import_etvaskit24.Icon, { name: "close", size: 1, onClick: onRemove }));
var Container = import_styled_components18.default.span(
  ({ disabled, rest }) => index_esm_default({
    display: "inline-flex",
    justifyContent: "space-between",
    px: 2,
    mr: 2,
    whiteSpace: "nowrap",
    alignItems: "center",
    width: "fit-content",
    borderRadius: 3,
    backgroundColor: disabled ? "baseGray" : "etvas",
    color: "baseWhite",
    "> svg": {
      cursor: "pointer",
      pl: 2
    },
    ...rest
  })
);
Tag.propTypes = {
  value: import_prop_types26.default.string,
  disabled: import_prop_types26.default.bool,
  onRemove: import_prop_types26.default.func
};

// src/components/TagInput/shape.js
init_react_shim();
var import_prop_types27 = __toESM(require_prop_types());
var tagShape = {
  value: import_prop_types27.default.any,
  name: import_prop_types27.default.string,
  id: import_prop_types27.default.string,
  disabled: import_prop_types27.default.bool,
  validate: import_prop_types27.default.func,
  label: import_prop_types27.default.node,
  placeholder: import_prop_types27.default.node,
  required: import_prop_types27.default.bool
};

// src/components/TagInput/variants.container.js
init_react_shim();
var import_etvaskit25 = require("@etvas/etvaskit");
var DEFAULT_DISABLED_STYLE = {
  cursor: "not-allowed",
  pointerEvents: "none"
};
var DEFAULT_STYLE2 = {
  minHeight: "32px",
  background: import_etvaskit25.etvasTheme.colors.backgroundLightGray,
  paddingX: 2,
  borderSize: `${import_etvaskit25.etvasTheme.borders[1]}`,
  borderColor: "inputBorderGray",
  borderStyle: "solid",
  borderWidth: "1px",
  borderRadius: 3,
  boxSizing: "border-box",
  color: "textInputActive",
  width: "100%",
  outline: "none",
  "&::placeholder": {
    color: "textInputPlaceholder"
  },
  "&:hover": {
    borderColor: "brandLight"
  },
  "&:focus": {
    borderColor: "brandLight"
  },
  "&:disabled": {
    ...DEFAULT_DISABLED_STYLE,
    background: "backgroundGray"
  }
};
var ERROR_STYLE2 = {
  ...DEFAULT_STYLE2,
  borderSize: `${import_etvaskit25.etvasTheme.borders[1]}`,
  borderColor: "error",
  "&:hover": {
    borderColor: "error"
  },
  "&:focus": {
    borderColor: "error"
  },
  "&:disabled": {
    ...DEFAULT_DISABLED_STYLE,
    backgroundColor: "backgroundGray",
    color: "textInputDisabled",
    borderColor: "error"
  }
};
var WARNING_STYLE2 = {
  ...DEFAULT_STYLE2,
  borderSize: `${import_etvaskit25.etvasTheme.borders[1]}`,
  borderColor: "warning",
  "&:hover": {
    borderColor: "warning"
  },
  "&:focus": {
    borderColor: "warning"
  },
  "&:disabled": {
    ...DEFAULT_DISABLED_STYLE,
    background: "backgroundGray",
    color: "textInputDisabled"
  }
};
var VALID_STYLE2 = {
  ...DEFAULT_STYLE2
};
var DISABLED_STYLE2 = {
  ...DEFAULT_STYLE2,
  ...DEFAULT_DISABLED_STYLE,
  backgroundColor: "backgroundGray",
  borderColor: "inputGray",
  color: "textInputDisabled",
  "&:hover": {
    borderColor: "inputGray"
  }
};
var variants_container_default = {
  default: DEFAULT_STYLE2,
  disabled: DISABLED_STYLE2,
  error: ERROR_STYLE2,
  warning: WARNING_STYLE2,
  valid: VALID_STYLE2
};

// src/components/TagInput/variants.input.js
init_react_shim();
var DEFAULT_DISABLED_STYLE2 = {
  cursor: "not-allowed",
  pointerEvents: "none"
};
var DEFAULT_STYLE3 = {
  fontFamily: "primary",
  fontWeight: "300",
  fontSize: 2,
  textTransform: "unset",
  lineHeight: "20px",
  background: "transparent",
  color: "textInputActive",
  outline: "none",
  height: "24px",
  my: 1,
  border: "none",
  minWidth: "100px",
  flex: "1 1 auto",
  "&::placeholder": {
    color: "textInputPlaceholder"
  }
};
var ERROR_STYLE3 = {
  ...DEFAULT_STYLE3,
  borderColor: "error",
  "&:disabled": {
    ...DEFAULT_DISABLED_STYLE2,
    color: "textInputDisabled"
  }
};
var WARNING_STYLE3 = {
  ...DEFAULT_STYLE3,
  "&:disabled": {
    ...DEFAULT_DISABLED_STYLE2,
    color: "textInputDisabled"
  }
};
var VALID_STYLE3 = {
  ...DEFAULT_STYLE3
};
var DISABLED_STYLE3 = {
  ...DEFAULT_STYLE3,
  ...DEFAULT_DISABLED_STYLE2,
  color: "textInputDisabled"
};
var variants_input_default = {
  default: DEFAULT_STYLE3,
  disabled: DISABLED_STYLE3,
  error: ERROR_STYLE3,
  warning: WARNING_STYLE3,
  valid: VALID_STYLE3
};

// src/components/TagInput/TagInput.jsx
var TagInput = (0, import_react19.forwardRef)(
  ({
    label,
    placeholder,
    loading,
    required,
    disabled,
    readOnly,
    error,
    warning,
    valid,
    variant: variant3,
    id,
    name,
    value,
    onChange,
    onBlur,
    autoComplete,
    autoFocus,
    onInputClick,
    importHandler: importHandler2,
    exportHandler: exportHandler2,
    noPreserveSpace,
    forceAddTagKeys,
    maxTags,
    showTooltip,
    ...rest
  }, ref) => {
    const [inputValue, setInputValue] = (0, import_react19.useState)("");
    const tags = (0, import_react19.useMemo)(() => importHandler2(value), [value, importHandler2]);
    const currentVariant = (0, import_react19.useMemo)(() => {
      if (disabled || loading)
        return "disabled";
      else if (error)
        return "error";
      else if (warning)
        return "warning";
      else if (valid)
        return "valid";
      return variant3;
    }, [loading, disabled, error, warning, valid, variant3]);
    const handleTagRemove = (index) => () => {
      const newTags = [...tags];
      newTags.splice(index, 1);
      onChange(exportHandler2(newTags));
    };
    const handleTagAdd = () => {
      onChange(exportHandler2([...tags, inputValue.trim()]));
    };
    const handleInputChange = (0, import_react19.useCallback)(
      (event) => setInputValue(event.target.value),
      []
    );
    const handleInputKeyPress = (event) => {
      if ([...forceAddTagKeys, "Enter"].includes(event.key)) {
        event.preventDefault();
        if (inputValue.trim()) {
          handleTagAdd();
          setInputValue("");
        }
      }
    };
    const handleInputKeyDown = (event) => {
      if (event.key === "Backspace" && !inputValue) {
        handleTagRemove(-1)();
      }
    };
    const handleInputBlur = (event) => {
      onBlur(event);
      if (inputValue.trim()) {
        handleTagAdd();
      }
      setInputValue("");
    };
    return /* @__PURE__ */ React.createElement(Container2, { flexDirection: "column", width: 1, ...rest }, !!label && /* @__PURE__ */ React.createElement(import_etvaskit26.Flex, { mb: 1, alignItems: "center" }, /* @__PURE__ */ React.createElement(
      import_etvaskit26.Typography,
      {
        as: "label",
        htmlFor: id,
        variant: "base12Bold",
        color: "baseMetal",
        width: "fit-content"
      },
      label
    ), id && showTooltip && /* @__PURE__ */ React.createElement(import_etvaskit26.Flex, { ml: 1, alignItems: "center", id: `${id}-icon` }, /* @__PURE__ */ React.createElement(
      import_etvaskit26.Icon,
      {
        name: "information",
        color: "baseMetal",
        size: "small",
        opacity: ".5",
        cursor: "pointer"
      }
    ))), /* @__PURE__ */ React.createElement(import_etvaskit26.Flex, { alignItems: "center", position: "relative", width: 1 }, /* @__PURE__ */ React.createElement(StyledInputContainer, { variant: currentVariant }, tags.map((tag, index) => /* @__PURE__ */ React.createElement(
      Tag,
      {
        value: tag,
        key: index,
        disabled,
        onRemove: handleTagRemove(index),
        my: 1
      }
    )), maxTags >= tags.length && /* @__PURE__ */ React.createElement(
      StyledInput,
      {
        variant: currentVariant,
        autoComplete,
        autoFocus,
        ariaDisabled: readOnly || disabled,
        disabled,
        error,
        hasLabel: label,
        id,
        name,
        onChange: handleInputChange,
        placeholder: readOnly ? "" : placeholder,
        readOnly,
        ref,
        required,
        type: "text",
        value: inputValue,
        onClick: onInputClick,
        onKeyPress: handleInputKeyPress,
        onKeyDown: handleInputKeyDown,
        onBlur: handleInputBlur
      }
    ))), /* @__PURE__ */ React.createElement(
      SubLabel,
      {
        noPreserveSpace,
        variant: currentVariant,
        mt: 1
      },
      error
    ));
  }
);
var Container2 = (0, import_styled_components19.default)(import_etvaskit26.Flex)`
  user-select: none;
  overflow: hidden;
  &:focus-within {
    label {
      color: ${themeGet("colors.textInputFocused")};
    }
  }
`;
var StyledInputContainer = import_styled_components19.default.div(
  variant({ variants: variants_container_default }),
  index_esm_default({
    display: "flex",
    flexWrap: "wrap",
    alignItems: "center",
    py: "3px"
  })
);
var StyledInput = import_styled_components19.default.input(variant({ variants: variants_input_default }));
var defaultImportHandler = (value) => value;
var defaultExportHandler = (value) => value;
TagInput.propTypes = {
  ...index_esm_default11.input,
  ...tagShape,
  loading: import_prop_types29.default.bool,
  readOnly: import_prop_types29.default.bool,
  error: import_prop_types29.default.node,
  warning: import_prop_types29.default.bool,
  valid: import_prop_types29.default.bool,
  variant: import_prop_types29.default.string,
  autoComplete: import_prop_types29.default.string,
  autoFocus: import_prop_types29.default.bool,
  onInputClick: import_prop_types29.default.func,
  value: import_prop_types29.default.string,
  handleChange: import_prop_types29.default.func,
  importHandler: import_prop_types29.default.func,
  exportHandler: import_prop_types29.default.func,
  noPreserveSpace: import_prop_types29.default.bool,
  maxTags: import_prop_types29.default.number,
  forceAddTagKeys: import_prop_types29.default.arrayOf(import_prop_types29.default.string),
  showTooltip: import_prop_types29.default.bool
};
TagInput.defaultProps = {
  autoFocus: false,
  minHeight: 40,
  noBottomSpace: false,
  readOnly: false,
  value: "",
  variant: "default",
  importHandler: defaultImportHandler,
  exportHandler: defaultExportHandler,
  forceAddTagKeys: [],
  maxTags: 20
};

// src/components/TagInput/TagField.jsx
var TagField = (0, import_react20.forwardRef)((props, ref) => {
  const { submitCount } = (0, import_formik3.useFormikContext)();
  const [field, meta, helpers] = (0, import_formik3.useField)(props);
  const id = props.id || `${props.name}-${v4_default()}`;
  const error = meta.touched && meta.error;
  const displayedError = submitCount > 0 ? error : field.value && error;
  return /* @__PURE__ */ React.createElement(
    TagInput,
    {
      ...props,
      ...field,
      exportHandler: exportHandler(props.separator),
      importHandler: importHandler(props.separator),
      onChange: helpers.setValue,
      onBlur: field.onBlur,
      value: field.value,
      id,
      error: displayedError,
      forceAddTagKeys: [props.separator],
      ref
    }
  );
});
var exportHandler = (separator) => (values) => values.join(separator);
var importHandler = (separator) => (values) => values.split(separator).filter((val) => !!val).map((val) => val.trim());
TagField.propTypes = {
  ...tagShape,
  separator: import_prop_types30.default.string
};
TagField.defaultProps = {
  separator: ","
};

// src/components/RuleBuilder/Rule.jsx
var Rule = ({
  disabled,
  rule,
  name,
  options,
  removeRuleIcon,
  isAbsolute,
  typeLabel,
  onRemove
}) => {
  const allTypeOptions = (0, import_react21.useMemo)(
    () => Object.keys(options).map((type2) => ({
      label: options[type2].label,
      value: type2
    })),
    [options]
  );
  const typeOptions = (0, import_react21.useMemo)(
    () => isAbsolute ? allTypeOptions.filter((option) => option.value === rule.type) : allTypeOptions,
    [allTypeOptions, isAbsolute, rule]
  );
  const type = (0, import_react21.useMemo)(() => rule.type, [rule]);
  const operatorName = (0, import_react21.useMemo)(() => `${name}.${type}Operator`, [name, type]);
  const [{ value: operatorValue }, , { setValue: setOperatorValue }] = (0, import_formik4.useField)(operatorName);
  const operator = (0, import_react21.useMemo)(() => options[type].operator, [options, type]);
  const value = (0, import_react21.useMemo)(
    () => {
      var _a, _b, _c;
      return (_c = (_b = (_a = options[type]) == null ? void 0 : _a.operatorValue) == null ? void 0 : _b[operatorValue]) != null ? _c : options[type].value;
    },
    [options, type, operatorValue]
  );
  const typeConfig = options[type];
  const valuePlaceholder = (0, import_react21.useMemo)(() => value.placeholder, [value]);
  const isSuffixType = (0, import_react21.useMemo)(() => value.suffix, [value]);
  const [, , { setValue: setRuleValue }] = (0, import_formik4.useField)(`${name}.${type}Value`);
  const onChangeRuleValue = useClearField([setRuleValue]);
  const handleOperatorChange = (newValue) => {
    if (operatorValue === newValue) {
      return;
    }
    setOperatorValue(newValue);
    onChangeRuleValue();
  };
  return /* @__PURE__ */ React.createElement(import_etvaskit27.Flex, { width: 1, justifyContent: "space-between", alignItems: "flex-start" }, /* @__PURE__ */ React.createElement(
    import_etvaskit27.DropdownField,
    {
      disabled,
      options: typeOptions,
      name: `${name}.type`,
      placeholder: typeConfig.placeholder,
      label: typeLabel,
      required: true,
      id: typeConfig.id,
      showTooltip: !!typeConfig.tooltip,
      mr: 4
    }
  ), typeConfig.tooltip, /* @__PURE__ */ React.createElement(
    import_etvaskit27.DropdownField,
    {
      disabled,
      options: operator.options,
      name: `${name}.${type}Operator`,
      placeholder: operator.placeholder,
      label: operator.label,
      onChange: handleOperatorChange,
      id: operator.id,
      showTooltip: !!operator.renderTooltip,
      required: true,
      mr: 4
    }
  ), operator.renderTooltip && operator.renderTooltip(operatorValue), value.type === "searchMultiple" ? /* @__PURE__ */ React.createElement(
    import_etvaskit27.DropdownField,
    {
      ...operatorValueWidthProps,
      disabled,
      options: value.options,
      name: `${name}.${type}Value`,
      placeholder: valuePlaceholder,
      label: value.label,
      multiple: true,
      required: true,
      id: typeConfig.value.id,
      showTooltip: !!value.tooltip
    }
  ) : value.type === "tag" ? /* @__PURE__ */ React.createElement(
    TagField,
    {
      ...operatorValueWidthProps,
      disabled,
      name: `${name}.${type}Value`,
      type: "text",
      label: value.label,
      placeholder: valuePlaceholder,
      separator: ",",
      required: true,
      id: typeConfig.value.id,
      showTooltip: !!value.tooltip
    }
  ) : value.type === "between" ? /* @__PURE__ */ React.createElement(
    IntervalField,
    {
      ...operatorValueWidthProps,
      disabled,
      name: `${name}.${type}Value`,
      label: value.label,
      placeholder: valuePlaceholder,
      suffix: value.suffix,
      suffixSpace: value.suffixSpace || 0,
      required: true,
      id: typeConfig.value.id,
      showTooltip: !!value.tooltip
    }
  ) : isSuffixType ? /* @__PURE__ */ React.createElement(
    import_etvaskit27.SubdomainField,
    {
      ...operatorValueWidthProps,
      disabled,
      name: `${name}.${type}Value`,
      type: value.type,
      label: value.label,
      placeholder: valuePlaceholder,
      suffix: value.suffix,
      suffixSpace: value.suffixSpace || 0,
      prefix: "",
      required: true,
      id: typeConfig.value.id,
      showTooltip: !!value.tooltip
    }
  ) : /* @__PURE__ */ React.createElement(
    import_etvaskit27.TextField,
    {
      ...operatorValueWidthProps,
      disabled,
      name: `${name}.${type}Value`,
      type: value.type,
      label: value.label,
      placeholder: valuePlaceholder,
      suffix: value.suffix,
      suffixSpace: value.suffixSpace || 0,
      id: typeConfig.value.id,
      showTooltip: !!value.tooltip,
      required: true
    }
  ), value.tooltip, !disabled && removeRuleIcon ? /* @__PURE__ */ React.createElement(import_etvaskit27.Button, { variant: "link", ml: 4, mt: 6, onClick: onRemove }, /* @__PURE__ */ React.createElement(import_etvaskit27.Icon, { name: removeRuleIcon, size: "large" })) : /* @__PURE__ */ React.createElement(import_etvaskit27.Box, { ml: 12, bg: "red" }));
};
var operatorValueWidthProps = {
  width: "31%",
  minWidth: "31%",
  maxWidth: "31%"
};
Rule.propTypes = {
  options: import_prop_types31.default.object,
  onRemove: import_prop_types31.default.func,
  disabled: import_prop_types31.default.bool,
  isAbsolute: import_prop_types31.default.bool,
  name: import_prop_types31.default.string,
  removeRuleIcon: import_prop_types31.default.oneOfType([import_prop_types31.default.string, import_prop_types31.default.bool]),
  typeLabel: import_prop_types31.default.node,
  rule: import_prop_types31.default.object
};

// src/components/RuleBuilder/Group.jsx
var Group = ({
  disabled,
  canDelete,
  group,
  advancedTargeting,
  name,
  combinedRuleOptions,
  absoluteRuleOptions,
  removeRuleIcon,
  addRuleLabel,
  typeLabel,
  advancedTargetingLabel,
  hideAdvancedTargeting,
  andLabel,
  orLabel,
  onRemoveRule,
  onAddRule
}) => {
  var _a;
  const andCombinatorOptions = (0, import_react22.useMemo)(
    () => [{ value: "and", label: andLabel }],
    [andLabel]
  );
  const completeCombinatorOptions = (0, import_react22.useMemo)(
    () => [
      { value: "and", label: andLabel },
      { value: "or", label: orLabel }
    ],
    [andLabel, orLabel]
  );
  const getProcessedCombinedRuleOptions = (ruleIndex, currentType) => Object.fromEntries(
    Object.keys(combinedRuleOptions).filter((type) => {
      const rule = combinedRuleOptions[type];
      const count = Object.entries(group.combined).reduce(
        (acc, [_, existingRule]) => acc + Number(existingRule.type === type),
        0
      );
      const isCountAllowed = rule.allowCount ? rule.allowCount(count + 1) : true;
      return isCountAllowed || type === currentType;
    }).map((type) => [type, combinedRuleOptions[type]])
  );
  const canAddRule = Object.keys(
    getProcessedCombinedRuleOptions(Object.keys(group.combined).length)
  ).length > 0;
  const addType = (_a = Object.keys(
    getProcessedCombinedRuleOptions(Object.keys(group.combined).length)
  )) == null ? void 0 : _a.shift();
  return /* @__PURE__ */ React.createElement(import_etvaskit28.Box, { bg: "baseGrayLightest", p: 4 }, Object.keys(group.combined).map((ruleId, ruleIndex) => /* @__PURE__ */ React.createElement(import_etvaskit28.Box, { key: ruleId }, /* @__PURE__ */ React.createElement(
    Rule,
    {
      disabled,
      name: `${name}.combined.${ruleId}`,
      removeRuleIcon: canDelete && removeRuleIcon,
      rule: group.combined[ruleId],
      options: getProcessedCombinedRuleOptions(
        ruleIndex,
        group.combined[ruleId].type
      ),
      onRemove: onRemoveRule(group.id, ruleId),
      typeLabel
    }
  ), ruleIndex < Object.keys(group.combined).length - 1 && /* @__PURE__ */ React.createElement(
    CombinatorField,
    {
      name: `${name}.combinator`,
      options: completeCombinatorOptions,
      disabled,
      mb: 4
    }
  ))), disabled ? advancedTargeting ? /* @__PURE__ */ React.createElement(
    Combinator,
    {
      options: andCombinatorOptions,
      value: "and",
      disabled,
      mb: 4
    }
  ) : null : /* @__PURE__ */ React.createElement(import_etvaskit28.Flex, { my: 4 }, /* @__PURE__ */ React.createElement(
    import_etvaskit28.Button,
    {
      variant: "link",
      disabled: disabled || !canAddRule,
      onClick: onAddRule(group.id, addType),
      mr: 8
    },
    addRuleLabel
  ), !hideAdvancedTargeting && /* @__PURE__ */ React.createElement(
    import_etvaskit28.CheckboxField,
    {
      label: advancedTargetingLabel,
      name: `${name}.advancedTargeting`,
      disabled
    }
  )), advancedTargeting && Object.keys(group.absolute).map((ruleId, ruleIndex) => /* @__PURE__ */ React.createElement(import_etvaskit28.Box, { key: ruleId }, /* @__PURE__ */ React.createElement(
    Rule,
    {
      disabled,
      name: `${name}.absolute.${ruleId}`,
      rule: group.absolute[ruleId],
      options: absoluteRuleOptions,
      onRemove: onRemoveRule(group.id, ruleId),
      typeLabel,
      isAbsolute: true
    }
  ), ruleIndex < Object.keys(group.absolute).length - 1 && /* @__PURE__ */ React.createElement(
    Combinator,
    {
      options: andCombinatorOptions,
      value: "and",
      disabled,
      mb: 4
    }
  ))));
};
Group.propTypes = {
  advancedTargeting: import_prop_types32.default.bool,
  combinedRuleOptions: import_prop_types32.default.object,
  absoluteRuleOptions: import_prop_types32.default.object,
  addRuleLabel: import_prop_types32.default.node,
  typeLabel: import_prop_types32.default.node,
  advancedTargetingLabel: import_prop_types32.default.node,
  hideAdvancedTargeting: import_prop_types32.default.bool,
  andLabel: import_prop_types32.default.node,
  orLabel: import_prop_types32.default.node,
  onRemoveRule: import_prop_types32.default.func,
  onAddRule: import_prop_types32.default.func,
  disabled: import_prop_types32.default.bool,
  canDelete: import_prop_types32.default.bool,
  name: import_prop_types32.default.string,
  removeRuleIcon: import_prop_types32.default.string,
  group: import_prop_types32.default.object
};

// src/components/RuleBuilder/utils/rule.js
init_react_shim();
var getRuleDetails = ({ type, ...rule }) => {
  const operatorKey = `${type}Operator`;
  const valueKey = `${type}Value`;
  return {
    type,
    operator: rule[operatorKey],
    value: rule[valueKey],
    operatorKey,
    valueKey
  };
};

// src/components/RuleBuilder/RuleBuilder.jsx
var RuleBuilder = ({
  name,
  disabled,
  label,
  andLabel,
  orLabel,
  addRuleLabel,
  addGroupLabel,
  typeLabel,
  advancedTargetingLabel,
  removeRuleIcon,
  combinedRuleOptions,
  absoluteRuleOptions,
  hideAdvancedTargeting,
  ...rest
}) => {
  var _a;
  const [{ value: data }, _, { setValue: setData }] = (0, import_formik5.useField)(name);
  const createNewRule = (0, import_react23.useCallback)(
    (specificType) => {
      const type = specificType != null ? specificType : [...Object.keys(combinedRuleOptions)].shift();
      const defaultOperatorValues = Object.keys(combinedRuleOptions).reduce(
        (acc, type2) => {
          const { operatorKey, valueKey } = getRuleDetails({ type: type2 });
          return {
            ...acc,
            [operatorKey]: combinedRuleOptions[type2].operator.options[0].value,
            [valueKey]: ""
          };
        },
        {}
      );
      return Object.fromEntries([
        [
          v4_default(),
          {
            type,
            ...defaultOperatorValues
          }
        ]
      ]);
    },
    [combinedRuleOptions]
  );
  const createAbsoluteRules = (0, import_react23.useCallback)(
    () => Object.fromEntries(
      Object.keys(absoluteRuleOptions).map((type) => {
        const { operatorKey, valueKey } = getRuleDetails({ type });
        return [
          v4_default(),
          {
            type,
            [operatorKey]: absoluteRuleOptions[type].operator.options[0].value,
            [valueKey]: ""
          }
        ];
      })
    ),
    [absoluteRuleOptions]
  );
  const createNewGroup = (0, import_react23.useCallback)(
    () => ({
      id: v4_default(),
      not: false,
      advancedTargeting: false,
      absolute: createAbsoluteRules(),
      combined: { ...createNewRule() },
      combinator: "and"
    }),
    [createNewRule, createAbsoluteRules]
  );
  const handleAddGroup = () => {
    setData({ ...data, groups: [...data.groups, createNewGroup()] });
  };
  (0, import_react23.useEffect)(() => {
    if (!Object.keys(data).length) {
      setData({ combinator: "and", groups: [createNewGroup()] });
    }
  }, [data, setData, createNewGroup]);
  const handleRemoveRule = (groupId, ruleId) => () => {
    const groups = (0, import_lodash.cloneDeep)(data.groups).reduce((acc, group) => {
      if (group.id === groupId) {
        delete group.combined[ruleId];
      }
      if (Object.keys(group.combined).length) {
        acc.push(group);
      }
      return acc;
    }, []);
    setData({ ...data, groups });
  };
  const handleAddRule = (groupId, type) => () => {
    const groups = (0, import_lodash.cloneDeep)(data.groups).map((group) => {
      if (group.id === groupId) {
        group.combined = { ...group.combined, ...createNewRule(type) };
      }
      return group;
    });
    setData({ ...data, groups });
  };
  const canDelete = (0, import_react23.useMemo)(
    () => {
      var _a2, _b, _c, _d;
      return ((_a2 = data.groups) == null ? void 0 : _a2.length) > 1 || Object.keys((_d = (_c = (_b = data.groups) == null ? void 0 : _b[0]) == null ? void 0 : _c.combined) != null ? _d : {}).length > 1;
    },
    [data]
  );
  const combinatorOptions = (0, import_react23.useMemo)(
    () => [
      { value: "and", label: andLabel },
      { value: "or", label: orLabel }
    ],
    [andLabel, orLabel]
  );
  return /* @__PURE__ */ React.createElement(import_etvaskit29.Box, { ...rest }, /* @__PURE__ */ React.createElement(import_etvaskit29.Typography, { variant: "base12Bold", color: "baseGrayLight", mb: 1 }, label), (_a = data.groups) == null ? void 0 : _a.map((group, index) => /* @__PURE__ */ React.createElement(import_etvaskit29.Box, { key: group.id }, /* @__PURE__ */ React.createElement(
    Group,
    {
      disabled,
      group,
      name: `${name}.groups[${index}]`,
      canDelete,
      advancedTargeting: group.advancedTargeting,
      combinedRuleOptions,
      absoluteRuleOptions,
      removeRuleIcon,
      addRuleLabel,
      typeLabel,
      advancedTargetingLabel,
      hideAdvancedTargeting,
      andLabel,
      orLabel,
      onRemoveRule: handleRemoveRule,
      onAddRule: handleAddRule
    }
  ), index < data.groups.length - 1 && /* @__PURE__ */ React.createElement(
    CombinatorField,
    {
      name: `${name}.combinator`,
      options: combinatorOptions,
      disabled,
      my: 4
    }
  ))), !disabled && /* @__PURE__ */ React.createElement(
    import_etvaskit29.Button,
    {
      variant: "link",
      mt: 4,
      disabled,
      onClick: handleAddGroup
    },
    addGroupLabel
  ));
};
var validatorProps = import_prop_types33.default.shape({
  validator: import_prop_types33.default.func,
  error: import_prop_types33.default.node
});
var valueProps = import_prop_types33.default.shape({
  label: import_prop_types33.default.node,
  placeholder: import_prop_types33.default.string,
  type: import_prop_types33.default.string,
  suffix: import_prop_types33.default.string,
  suffixSpace: import_prop_types33.default.oneOfType([import_prop_types33.default.number, import_prop_types33.default.string]),
  validate: import_prop_types33.default.arrayOf(validatorProps)
});
var ruleOptionsProps = import_prop_types33.default.objectOf(
  import_prop_types33.default.shape({
    label: import_prop_types33.default.node,
    placeholder: import_prop_types33.default.string,
    allowCount: import_prop_types33.default.func,
    validate: import_prop_types33.default.arrayOf(validatorProps),
    operator: import_prop_types33.default.shape({
      label: import_prop_types33.default.node,
      placeholder: import_prop_types33.default.string,
      validate: import_prop_types33.default.arrayOf(validatorProps),
      options: import_prop_types33.default.arrayOf(
        import_prop_types33.default.shape({
          label: import_prop_types33.default.node,
          value: import_prop_types33.default.oneOfType([import_prop_types33.default.string, import_prop_types33.default.number])
        })
      )
    }),
    value: valueProps,
    operatorValue: import_prop_types33.default.objectOf(valueProps)
  })
).isRequired;
RuleBuilder.propTypes = {
  name: import_prop_types33.default.string.isRequired,
  disabled: import_prop_types33.default.bool,
  label: import_prop_types33.default.node.isRequired,
  andLabel: import_prop_types33.default.node.isRequired,
  orLabel: import_prop_types33.default.node.isRequired,
  addRuleLabel: import_prop_types33.default.node.isRequired,
  addGroupLabel: import_prop_types33.default.node.isRequired,
  typeLabel: import_prop_types33.default.node.isRequired,
  advancedTargetingLabel: import_prop_types33.default.node.isRequired,
  removeRuleIcon: import_prop_types33.default.string.isRequired,
  combinedRuleOptions: ruleOptionsProps,
  absoluteRuleOptions: ruleOptionsProps,
  hideAdvancedTargeting: import_prop_types33.default.bool
};
RuleBuilder.defaultProps = {
  disabled: false,
  hideAdvancedTargeting: false
};

// src/components/RuleBuilder/utils/validate.js
init_react_shim();
var yup = __toESM(require("yup"));
var createRuleBuilderYupSchema = (combinedRuleOptions, absoluteRuleOptions) => {
  const groupSchema = yup.object().shape({
    combinator: yup.string().required(),
    not: yup.boolean().required(),
    combined: createRulesYupSchema(combinedRuleOptions),
    absolute: yup.mixed().nullable().when("advancedTargeting", {
      is: true,
      then: () => createRulesYupSchema(absoluteRuleOptions),
      otherwise: (schema) => schema.notRequired()
    })
  });
  const ruleBuilderSchema = yup.object().shape({
    combinator: yup.string().required(),
    groups: yup.array().of(groupSchema)
  });
  return ruleBuilderSchema;
};
var createRulesYupSchema = (options) => yup.lazy(
  (value) => yup.object().shape(
    mapObject(value, (rule) => {
      var _a, _b, _c;
      const { type, operator, operatorKey, valueKey } = getRuleDetails(rule);
      const optionValue = (_c = (_b = (_a = options[type]) == null ? void 0 : _a.operatorValue) == null ? void 0 : _b[operator]) != null ? _c : options[type].value;
      const operatorValidationRule = options[type].operator.validate;
      const valueValidationRule = optionValue.validate;
      return yup.object().shape({
        [valueKey]: valueValidationRule,
        [operatorKey]: operatorValidationRule
      }).required();
    })
  )
);
var mapObject = (object2, callback) => Object.keys(object2).reduce((acc, key) => {
  acc[key] = callback(object2[key], key);
  return acc;
}, {});

// src/components/RuleBuilder/utils/export.js
init_react_shim();
var exportRuleBuilder = ({ combinator, groups }) => ({
  combinator,
  groups: exportGroups(groups)
});
var exportGroups = (groups) => groups.map(({ not, absolute, combined, combinator, advancedTargeting }) => ({
  not,
  combinator,
  combined: exportRules(combined),
  absolute: advancedTargeting ? exportRules(absolute) : []
}));
var exportRules = (rules) => Object.keys(rules).map((ruleId) => {
  const rule = rules[ruleId];
  const { type, operator, value } = getRuleDetails(rule);
  return {
    keypath: type,
    operator,
    value
  };
});

// src/components/RuleBuilder/utils/import.js
init_react_shim();
var importRuleBuilder = ({ combinator, groups }, combinedRuleOptions, absoluteRuleOptions) => ({
  combinator,
  groups: importGroups(groups, combinedRuleOptions, absoluteRuleOptions)
});
var importGroups = (groups, combinedRuleOptions, absoluteRuleOptions) => groups.map(({ not, combinator, absolute, combined }) => ({
  not,
  combinator,
  id: v4_default(),
  advancedTargeting: !!absolute.length,
  combined: importCombinedRules(combined, combinedRuleOptions),
  absolute: importAbsoluteRules(absolute, absoluteRuleOptions)
}));
var importCombinedRules = (rules, options) => Object.fromEntries(
  rules.map(({ keypath, operator, value }) => {
    const defaultValues = Object.keys(options).reduce((acc, type) => {
      const { operatorKey: operatorKey2, valueKey: valueKey2 } = getRuleDetails({ type });
      return {
        ...acc,
        [operatorKey2]: options[type].operator.options[0].value,
        [valueKey2]: ""
      };
    }, {});
    const operatorKey = `${keypath}Operator`;
    const valueKey = `${keypath}Value`;
    return [
      v4_default(),
      {
        type: keypath,
        ...defaultValues,
        [operatorKey]: operator,
        [valueKey]: value
      }
    ];
  })
);
var importAbsoluteRules = (rules, options) => rules.length ? Object.fromEntries(
  Object.keys(options).map((type) => {
    const { operatorKey, valueKey } = getRuleDetails({ type });
    const rule = rules.find((rule2) => rule2.keypath === type);
    return [
      v4_default(),
      {
        type,
        [operatorKey]: rule == null ? void 0 : rule.operator,
        [valueKey]: rule == null ? void 0 : rule.value
      }
    ];
  })
) : null;

// src/components/TagInput/index.js
init_react_shim();
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
/**
 * @license
 * Lodash <https://lodash.com/>
 * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
