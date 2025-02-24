"use strict";
var DocsPreview = (() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __defProps = Object.defineProperties;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getOwnPropSymbols = Object.getOwnPropertySymbols;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __propIsEnum = Object.prototype.propertyIsEnumerable;
  var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
  var __spreadValues = (a, b) => {
    for (var prop in b || (b = {}))
      if (__hasOwnProp.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    if (__getOwnPropSymbols)
      for (var prop of __getOwnPropSymbols(b)) {
        if (__propIsEnum.call(b, prop))
          __defNormalProp(a, prop, b[prop]);
      }
    return a;
  };
  var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
  var __objRest = (source, exclude) => {
    var target = {};
    for (var prop in source)
      if (__hasOwnProp.call(source, prop) && exclude.indexOf(prop) < 0)
        target[prop] = source[prop];
    if (source != null && __getOwnPropSymbols)
      for (var prop of __getOwnPropSymbols(source)) {
        if (exclude.indexOf(prop) < 0 && __propIsEnum.call(source, prop))
          target[prop] = source[prop];
      }
    return target;
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
    // If the importer is in node compatibility mode or this is not an ESM
    // file that has been converted to a CommonJS file using a Babel-
    // compatible transform (i.e. "__esModule" has not been set), then set
    // "default" to the CommonJS "module.exports" for node compatibility.
    isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
    mod
  ));
  var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

  // node_modules/react/cjs/react.development.js
  var require_react_development = __commonJS({
    "node_modules/react/cjs/react.development.js"(exports, module) {
      "use strict";
      (function() {
        function defineDeprecationWarning(methodName, info) {
          Object.defineProperty(Component.prototype, methodName, {
            get: function() {
              console.warn(
                "%s(...) is deprecated in plain JavaScript React classes. %s",
                info[0],
                info[1]
              );
            }
          });
        }
        function getIteratorFn(maybeIterable) {
          if (null === maybeIterable || "object" !== typeof maybeIterable)
            return null;
          maybeIterable = MAYBE_ITERATOR_SYMBOL && maybeIterable[MAYBE_ITERATOR_SYMBOL] || maybeIterable["@@iterator"];
          return "function" === typeof maybeIterable ? maybeIterable : null;
        }
        function warnNoop(publicInstance, callerName) {
          publicInstance = (publicInstance = publicInstance.constructor) && (publicInstance.displayName || publicInstance.name) || "ReactClass";
          var warningKey = publicInstance + "." + callerName;
          didWarnStateUpdateForUnmountedComponent[warningKey] || (console.error(
            "Can't call %s on a component that is not yet mounted. This is a no-op, but it might indicate a bug in your application. Instead, assign to `this.state` directly or define a `state = {};` class property with the desired state in the %s component.",
            callerName,
            publicInstance
          ), didWarnStateUpdateForUnmountedComponent[warningKey] = true);
        }
        function Component(props, context, updater) {
          this.props = props;
          this.context = context;
          this.refs = emptyObject;
          this.updater = updater || ReactNoopUpdateQueue;
        }
        function ComponentDummy() {
        }
        function PureComponent(props, context, updater) {
          this.props = props;
          this.context = context;
          this.refs = emptyObject;
          this.updater = updater || ReactNoopUpdateQueue;
        }
        function testStringCoercion(value) {
          return "" + value;
        }
        function checkKeyStringCoercion(value) {
          try {
            testStringCoercion(value);
            var JSCompiler_inline_result = false;
          } catch (e) {
            JSCompiler_inline_result = true;
          }
          if (JSCompiler_inline_result) {
            JSCompiler_inline_result = console;
            var JSCompiler_temp_const = JSCompiler_inline_result.error;
            var JSCompiler_inline_result$jscomp$0 = "function" === typeof Symbol && Symbol.toStringTag && value[Symbol.toStringTag] || value.constructor.name || "Object";
            JSCompiler_temp_const.call(
              JSCompiler_inline_result,
              "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
              JSCompiler_inline_result$jscomp$0
            );
            return testStringCoercion(value);
          }
        }
        function getComponentNameFromType(type) {
          if (null == type) return null;
          if ("function" === typeof type)
            return type.$$typeof === REACT_CLIENT_REFERENCE$2 ? null : type.displayName || type.name || null;
          if ("string" === typeof type) return type;
          switch (type) {
            case REACT_FRAGMENT_TYPE:
              return "Fragment";
            case REACT_PORTAL_TYPE:
              return "Portal";
            case REACT_PROFILER_TYPE:
              return "Profiler";
            case REACT_STRICT_MODE_TYPE:
              return "StrictMode";
            case REACT_SUSPENSE_TYPE:
              return "Suspense";
            case REACT_SUSPENSE_LIST_TYPE:
              return "SuspenseList";
          }
          if ("object" === typeof type)
            switch ("number" === typeof type.tag && console.error(
              "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
            ), type.$$typeof) {
              case REACT_CONTEXT_TYPE:
                return (type.displayName || "Context") + ".Provider";
              case REACT_CONSUMER_TYPE:
                return (type._context.displayName || "Context") + ".Consumer";
              case REACT_FORWARD_REF_TYPE:
                var innerType = type.render;
                type = type.displayName;
                type || (type = innerType.displayName || innerType.name || "", type = "" !== type ? "ForwardRef(" + type + ")" : "ForwardRef");
                return type;
              case REACT_MEMO_TYPE:
                return innerType = type.displayName || null, null !== innerType ? innerType : getComponentNameFromType(type.type) || "Memo";
              case REACT_LAZY_TYPE:
                innerType = type._payload;
                type = type._init;
                try {
                  return getComponentNameFromType(type(innerType));
                } catch (x) {
                }
            }
          return null;
        }
        function isValidElementType(type) {
          return "string" === typeof type || "function" === typeof type || type === REACT_FRAGMENT_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || type === REACT_OFFSCREEN_TYPE || "object" === typeof type && null !== type && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_CONSUMER_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_CLIENT_REFERENCE$1 || void 0 !== type.getModuleId) ? true : false;
        }
        function disabledLog() {
        }
        function disableLogs() {
          if (0 === disabledDepth) {
            prevLog = console.log;
            prevInfo = console.info;
            prevWarn = console.warn;
            prevError = console.error;
            prevGroup = console.group;
            prevGroupCollapsed = console.groupCollapsed;
            prevGroupEnd = console.groupEnd;
            var props = {
              configurable: true,
              enumerable: true,
              value: disabledLog,
              writable: true
            };
            Object.defineProperties(console, {
              info: props,
              log: props,
              warn: props,
              error: props,
              group: props,
              groupCollapsed: props,
              groupEnd: props
            });
          }
          disabledDepth++;
        }
        function reenableLogs() {
          disabledDepth--;
          if (0 === disabledDepth) {
            var props = { configurable: true, enumerable: true, writable: true };
            Object.defineProperties(console, {
              log: assign({}, props, { value: prevLog }),
              info: assign({}, props, { value: prevInfo }),
              warn: assign({}, props, { value: prevWarn }),
              error: assign({}, props, { value: prevError }),
              group: assign({}, props, { value: prevGroup }),
              groupCollapsed: assign({}, props, { value: prevGroupCollapsed }),
              groupEnd: assign({}, props, { value: prevGroupEnd })
            });
          }
          0 > disabledDepth && console.error(
            "disabledDepth fell below zero. This is a bug in React. Please file an issue."
          );
        }
        function describeBuiltInComponentFrame(name) {
          if (void 0 === prefix)
            try {
              throw Error();
            } catch (x) {
              var match = x.stack.trim().match(/\n( *(at )?)/);
              prefix = match && match[1] || "";
              suffix = -1 < x.stack.indexOf("\n    at") ? " (<anonymous>)" : -1 < x.stack.indexOf("@") ? "@unknown:0:0" : "";
            }
          return "\n" + prefix + name + suffix;
        }
        function describeNativeComponentFrame(fn, construct) {
          if (!fn || reentry) return "";
          var frame = componentFrameCache.get(fn);
          if (void 0 !== frame) return frame;
          reentry = true;
          frame = Error.prepareStackTrace;
          Error.prepareStackTrace = void 0;
          var previousDispatcher = null;
          previousDispatcher = ReactSharedInternals.H;
          ReactSharedInternals.H = null;
          disableLogs();
          try {
            var RunInRootFrame = {
              DetermineComponentFrameRoot: function() {
                try {
                  if (construct) {
                    var Fake = function() {
                      throw Error();
                    };
                    Object.defineProperty(Fake.prototype, "props", {
                      set: function() {
                        throw Error();
                      }
                    });
                    if ("object" === typeof Reflect && Reflect.construct) {
                      try {
                        Reflect.construct(Fake, []);
                      } catch (x) {
                        var control = x;
                      }
                      Reflect.construct(fn, [], Fake);
                    } else {
                      try {
                        Fake.call();
                      } catch (x$0) {
                        control = x$0;
                      }
                      fn.call(Fake.prototype);
                    }
                  } else {
                    try {
                      throw Error();
                    } catch (x$1) {
                      control = x$1;
                    }
                    (Fake = fn()) && "function" === typeof Fake.catch && Fake.catch(function() {
                    });
                  }
                } catch (sample) {
                  if (sample && control && "string" === typeof sample.stack)
                    return [sample.stack, control.stack];
                }
                return [null, null];
              }
            };
            RunInRootFrame.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
            var namePropDescriptor = Object.getOwnPropertyDescriptor(
              RunInRootFrame.DetermineComponentFrameRoot,
              "name"
            );
            namePropDescriptor && namePropDescriptor.configurable && Object.defineProperty(
              RunInRootFrame.DetermineComponentFrameRoot,
              "name",
              { value: "DetermineComponentFrameRoot" }
            );
            var _RunInRootFrame$Deter = RunInRootFrame.DetermineComponentFrameRoot(), sampleStack = _RunInRootFrame$Deter[0], controlStack = _RunInRootFrame$Deter[1];
            if (sampleStack && controlStack) {
              var sampleLines = sampleStack.split("\n"), controlLines = controlStack.split("\n");
              for (_RunInRootFrame$Deter = namePropDescriptor = 0; namePropDescriptor < sampleLines.length && !sampleLines[namePropDescriptor].includes(
                "DetermineComponentFrameRoot"
              ); )
                namePropDescriptor++;
              for (; _RunInRootFrame$Deter < controlLines.length && !controlLines[_RunInRootFrame$Deter].includes(
                "DetermineComponentFrameRoot"
              ); )
                _RunInRootFrame$Deter++;
              if (namePropDescriptor === sampleLines.length || _RunInRootFrame$Deter === controlLines.length)
                for (namePropDescriptor = sampleLines.length - 1, _RunInRootFrame$Deter = controlLines.length - 1; 1 <= namePropDescriptor && 0 <= _RunInRootFrame$Deter && sampleLines[namePropDescriptor] !== controlLines[_RunInRootFrame$Deter]; )
                  _RunInRootFrame$Deter--;
              for (; 1 <= namePropDescriptor && 0 <= _RunInRootFrame$Deter; namePropDescriptor--, _RunInRootFrame$Deter--)
                if (sampleLines[namePropDescriptor] !== controlLines[_RunInRootFrame$Deter]) {
                  if (1 !== namePropDescriptor || 1 !== _RunInRootFrame$Deter) {
                    do
                      if (namePropDescriptor--, _RunInRootFrame$Deter--, 0 > _RunInRootFrame$Deter || sampleLines[namePropDescriptor] !== controlLines[_RunInRootFrame$Deter]) {
                        var _frame = "\n" + sampleLines[namePropDescriptor].replace(
                          " at new ",
                          " at "
                        );
                        fn.displayName && _frame.includes("<anonymous>") && (_frame = _frame.replace("<anonymous>", fn.displayName));
                        "function" === typeof fn && componentFrameCache.set(fn, _frame);
                        return _frame;
                      }
                    while (1 <= namePropDescriptor && 0 <= _RunInRootFrame$Deter);
                  }
                  break;
                }
            }
          } finally {
            reentry = false, ReactSharedInternals.H = previousDispatcher, reenableLogs(), Error.prepareStackTrace = frame;
          }
          sampleLines = (sampleLines = fn ? fn.displayName || fn.name : "") ? describeBuiltInComponentFrame(sampleLines) : "";
          "function" === typeof fn && componentFrameCache.set(fn, sampleLines);
          return sampleLines;
        }
        function describeUnknownElementTypeFrameInDEV(type) {
          if (null == type) return "";
          if ("function" === typeof type) {
            var prototype = type.prototype;
            return describeNativeComponentFrame(
              type,
              !(!prototype || !prototype.isReactComponent)
            );
          }
          if ("string" === typeof type) return describeBuiltInComponentFrame(type);
          switch (type) {
            case REACT_SUSPENSE_TYPE:
              return describeBuiltInComponentFrame("Suspense");
            case REACT_SUSPENSE_LIST_TYPE:
              return describeBuiltInComponentFrame("SuspenseList");
          }
          if ("object" === typeof type)
            switch (type.$$typeof) {
              case REACT_FORWARD_REF_TYPE:
                return type = describeNativeComponentFrame(type.render, false), type;
              case REACT_MEMO_TYPE:
                return describeUnknownElementTypeFrameInDEV(type.type);
              case REACT_LAZY_TYPE:
                prototype = type._payload;
                type = type._init;
                try {
                  return describeUnknownElementTypeFrameInDEV(type(prototype));
                } catch (x) {
                }
            }
          return "";
        }
        function getOwner() {
          var dispatcher = ReactSharedInternals.A;
          return null === dispatcher ? null : dispatcher.getOwner();
        }
        function hasValidKey(config) {
          if (hasOwnProperty.call(config, "key")) {
            var getter = Object.getOwnPropertyDescriptor(config, "key").get;
            if (getter && getter.isReactWarning) return false;
          }
          return void 0 !== config.key;
        }
        function defineKeyPropWarningGetter(props, displayName) {
          function warnAboutAccessingKey() {
            specialPropKeyWarningShown || (specialPropKeyWarningShown = true, console.error(
              "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
              displayName
            ));
          }
          warnAboutAccessingKey.isReactWarning = true;
          Object.defineProperty(props, "key", {
            get: warnAboutAccessingKey,
            configurable: true
          });
        }
        function elementRefGetterWithDeprecationWarning() {
          var componentName = getComponentNameFromType(this.type);
          didWarnAboutElementRef[componentName] || (didWarnAboutElementRef[componentName] = true, console.error(
            "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
          ));
          componentName = this.props.ref;
          return void 0 !== componentName ? componentName : null;
        }
        function ReactElement(type, key, self2, source, owner, props) {
          self2 = props.ref;
          type = {
            $$typeof: REACT_ELEMENT_TYPE,
            type,
            key,
            props,
            _owner: owner
          };
          null !== (void 0 !== self2 ? self2 : null) ? Object.defineProperty(type, "ref", {
            enumerable: false,
            get: elementRefGetterWithDeprecationWarning
          }) : Object.defineProperty(type, "ref", { enumerable: false, value: null });
          type._store = {};
          Object.defineProperty(type._store, "validated", {
            configurable: false,
            enumerable: false,
            writable: true,
            value: 0
          });
          Object.defineProperty(type, "_debugInfo", {
            configurable: false,
            enumerable: false,
            writable: true,
            value: null
          });
          Object.freeze && (Object.freeze(type.props), Object.freeze(type));
          return type;
        }
        function cloneAndReplaceKey(oldElement, newKey) {
          newKey = ReactElement(
            oldElement.type,
            newKey,
            void 0,
            void 0,
            oldElement._owner,
            oldElement.props
          );
          newKey._store.validated = oldElement._store.validated;
          return newKey;
        }
        function validateChildKeys(node, parentType) {
          if ("object" === typeof node && node && node.$$typeof !== REACT_CLIENT_REFERENCE) {
            if (isArrayImpl(node))
              for (var i = 0; i < node.length; i++) {
                var child = node[i];
                isValidElement2(child) && validateExplicitKey(child, parentType);
              }
            else if (isValidElement2(node))
              node._store && (node._store.validated = 1);
            else if (i = getIteratorFn(node), "function" === typeof i && i !== node.entries && (i = i.call(node), i !== node))
              for (; !(node = i.next()).done; )
                isValidElement2(node.value) && validateExplicitKey(node.value, parentType);
          }
        }
        function isValidElement2(object) {
          return "object" === typeof object && null !== object && object.$$typeof === REACT_ELEMENT_TYPE;
        }
        function validateExplicitKey(element, parentType) {
          if (element._store && !element._store.validated && null == element.key && (element._store.validated = 1, parentType = getCurrentComponentErrorInfo(parentType), !ownerHasKeyUseWarning[parentType])) {
            ownerHasKeyUseWarning[parentType] = true;
            var childOwner = "";
            element && null != element._owner && element._owner !== getOwner() && (childOwner = null, "number" === typeof element._owner.tag ? childOwner = getComponentNameFromType(element._owner.type) : "string" === typeof element._owner.name && (childOwner = element._owner.name), childOwner = " It was passed a child from " + childOwner + ".");
            var prevGetCurrentStack = ReactSharedInternals.getCurrentStack;
            ReactSharedInternals.getCurrentStack = function() {
              var stack = describeUnknownElementTypeFrameInDEV(element.type);
              prevGetCurrentStack && (stack += prevGetCurrentStack() || "");
              return stack;
            };
            console.error(
              'Each child in a list should have a unique "key" prop.%s%s See https://react.dev/link/warning-keys for more information.',
              parentType,
              childOwner
            );
            ReactSharedInternals.getCurrentStack = prevGetCurrentStack;
          }
        }
        function getCurrentComponentErrorInfo(parentType) {
          var info = "", owner = getOwner();
          owner && (owner = getComponentNameFromType(owner.type)) && (info = "\n\nCheck the render method of `" + owner + "`.");
          info || (parentType = getComponentNameFromType(parentType)) && (info = "\n\nCheck the top-level render call using <" + parentType + ">.");
          return info;
        }
        function escape(key) {
          var escaperLookup = { "=": "=0", ":": "=2" };
          return "$" + key.replace(/[=:]/g, function(match) {
            return escaperLookup[match];
          });
        }
        function getElementKey(element, index) {
          return "object" === typeof element && null !== element && null != element.key ? (checkKeyStringCoercion(element.key), escape("" + element.key)) : index.toString(36);
        }
        function noop$1() {
        }
        function resolveThenable(thenable) {
          switch (thenable.status) {
            case "fulfilled":
              return thenable.value;
            case "rejected":
              throw thenable.reason;
            default:
              switch ("string" === typeof thenable.status ? thenable.then(noop$1, noop$1) : (thenable.status = "pending", thenable.then(
                function(fulfilledValue) {
                  "pending" === thenable.status && (thenable.status = "fulfilled", thenable.value = fulfilledValue);
                },
                function(error) {
                  "pending" === thenable.status && (thenable.status = "rejected", thenable.reason = error);
                }
              )), thenable.status) {
                case "fulfilled":
                  return thenable.value;
                case "rejected":
                  throw thenable.reason;
              }
          }
          throw thenable;
        }
        function mapIntoArray(children, array, escapedPrefix, nameSoFar, callback) {
          var type = typeof children;
          if ("undefined" === type || "boolean" === type) children = null;
          var invokeCallback = false;
          if (null === children) invokeCallback = true;
          else
            switch (type) {
              case "bigint":
              case "string":
              case "number":
                invokeCallback = true;
                break;
              case "object":
                switch (children.$$typeof) {
                  case REACT_ELEMENT_TYPE:
                  case REACT_PORTAL_TYPE:
                    invokeCallback = true;
                    break;
                  case REACT_LAZY_TYPE:
                    return invokeCallback = children._init, mapIntoArray(
                      invokeCallback(children._payload),
                      array,
                      escapedPrefix,
                      nameSoFar,
                      callback
                    );
                }
            }
          if (invokeCallback) {
            invokeCallback = children;
            callback = callback(invokeCallback);
            var childKey = "" === nameSoFar ? "." + getElementKey(invokeCallback, 0) : nameSoFar;
            isArrayImpl(callback) ? (escapedPrefix = "", null != childKey && (escapedPrefix = childKey.replace(userProvidedKeyEscapeRegex, "$&/") + "/"), mapIntoArray(callback, array, escapedPrefix, "", function(c) {
              return c;
            })) : null != callback && (isValidElement2(callback) && (null != callback.key && (invokeCallback && invokeCallback.key === callback.key || checkKeyStringCoercion(callback.key)), escapedPrefix = cloneAndReplaceKey(
              callback,
              escapedPrefix + (null == callback.key || invokeCallback && invokeCallback.key === callback.key ? "" : ("" + callback.key).replace(
                userProvidedKeyEscapeRegex,
                "$&/"
              ) + "/") + childKey
            ), "" !== nameSoFar && null != invokeCallback && isValidElement2(invokeCallback) && null == invokeCallback.key && invokeCallback._store && !invokeCallback._store.validated && (escapedPrefix._store.validated = 2), callback = escapedPrefix), array.push(callback));
            return 1;
          }
          invokeCallback = 0;
          childKey = "" === nameSoFar ? "." : nameSoFar + ":";
          if (isArrayImpl(children))
            for (var i = 0; i < children.length; i++)
              nameSoFar = children[i], type = childKey + getElementKey(nameSoFar, i), invokeCallback += mapIntoArray(
                nameSoFar,
                array,
                escapedPrefix,
                type,
                callback
              );
          else if (i = getIteratorFn(children), "function" === typeof i)
            for (i === children.entries && (didWarnAboutMaps || console.warn(
              "Using Maps as children is not supported. Use an array of keyed ReactElements instead."
            ), didWarnAboutMaps = true), children = i.call(children), i = 0; !(nameSoFar = children.next()).done; )
              nameSoFar = nameSoFar.value, type = childKey + getElementKey(nameSoFar, i++), invokeCallback += mapIntoArray(
                nameSoFar,
                array,
                escapedPrefix,
                type,
                callback
              );
          else if ("object" === type) {
            if ("function" === typeof children.then)
              return mapIntoArray(
                resolveThenable(children),
                array,
                escapedPrefix,
                nameSoFar,
                callback
              );
            array = String(children);
            throw Error(
              "Objects are not valid as a React child (found: " + ("[object Object]" === array ? "object with keys {" + Object.keys(children).join(", ") + "}" : array) + "). If you meant to render a collection of children, use an array instead."
            );
          }
          return invokeCallback;
        }
        function mapChildren(children, func, context) {
          if (null == children) return children;
          var result = [], count2 = 0;
          mapIntoArray(children, result, "", "", function(child) {
            return func.call(context, child, count2++);
          });
          return result;
        }
        function lazyInitializer(payload) {
          if (-1 === payload._status) {
            var ctor = payload._result;
            ctor = ctor();
            ctor.then(
              function(moduleObject) {
                if (0 === payload._status || -1 === payload._status)
                  payload._status = 1, payload._result = moduleObject;
              },
              function(error) {
                if (0 === payload._status || -1 === payload._status)
                  payload._status = 2, payload._result = error;
              }
            );
            -1 === payload._status && (payload._status = 0, payload._result = ctor);
          }
          if (1 === payload._status)
            return ctor = payload._result, void 0 === ctor && console.error(
              "lazy: Expected the result of a dynamic import() call. Instead received: %s\n\nYour code should look like: \n  const MyComponent = lazy(() => import('./MyComponent'))\n\nDid you accidentally put curly braces around the import?",
              ctor
            ), "default" in ctor || console.error(
              "lazy: Expected the result of a dynamic import() call. Instead received: %s\n\nYour code should look like: \n  const MyComponent = lazy(() => import('./MyComponent'))",
              ctor
            ), ctor.default;
          throw payload._result;
        }
        function resolveDispatcher() {
          var dispatcher = ReactSharedInternals.H;
          null === dispatcher && console.error(
            "Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:\n1. You might have mismatching versions of React and the renderer (such as React DOM)\n2. You might be breaking the Rules of Hooks\n3. You might have more than one copy of React in the same app\nSee https://react.dev/link/invalid-hook-call for tips about how to debug and fix this problem."
          );
          return dispatcher;
        }
        function noop() {
        }
        function enqueueTask(task) {
          if (null === enqueueTaskImpl)
            try {
              var requireString = ("require" + Math.random()).slice(0, 7);
              enqueueTaskImpl = (module && module[requireString]).call(
                module,
                "timers"
              ).setImmediate;
            } catch (_err) {
              enqueueTaskImpl = function(callback) {
                false === didWarnAboutMessageChannel && (didWarnAboutMessageChannel = true, "undefined" === typeof MessageChannel && console.error(
                  "This browser does not have a MessageChannel implementation, so enqueuing tasks via await act(async () => ...) will fail. Please file an issue at https://github.com/facebook/react/issues if you encounter this warning."
                ));
                var channel = new MessageChannel();
                channel.port1.onmessage = callback;
                channel.port2.postMessage(void 0);
              };
            }
          return enqueueTaskImpl(task);
        }
        function aggregateErrors(errors) {
          return 1 < errors.length && "function" === typeof AggregateError ? new AggregateError(errors) : errors[0];
        }
        function popActScope(prevActQueue, prevActScopeDepth) {
          prevActScopeDepth !== actScopeDepth - 1 && console.error(
            "You seem to have overlapping act() calls, this is not supported. Be sure to await previous act() calls before making a new one. "
          );
          actScopeDepth = prevActScopeDepth;
        }
        function recursivelyFlushAsyncActWork(returnValue, resolve, reject) {
          var queue = ReactSharedInternals.actQueue;
          if (null !== queue)
            if (0 !== queue.length)
              try {
                flushActQueue(queue);
                enqueueTask(function() {
                  return recursivelyFlushAsyncActWork(returnValue, resolve, reject);
                });
                return;
              } catch (error) {
                ReactSharedInternals.thrownErrors.push(error);
              }
            else ReactSharedInternals.actQueue = null;
          0 < ReactSharedInternals.thrownErrors.length ? (queue = aggregateErrors(ReactSharedInternals.thrownErrors), ReactSharedInternals.thrownErrors.length = 0, reject(queue)) : resolve(returnValue);
        }
        function flushActQueue(queue) {
          if (!isFlushing) {
            isFlushing = true;
            var i = 0;
            try {
              for (; i < queue.length; i++) {
                var callback = queue[i];
                do {
                  ReactSharedInternals.didUsePromise = false;
                  var continuation = callback(false);
                  if (null !== continuation) {
                    if (ReactSharedInternals.didUsePromise) {
                      queue[i] = callback;
                      queue.splice(0, i);
                      return;
                    }
                    callback = continuation;
                  } else break;
                } while (1);
              }
              queue.length = 0;
            } catch (error) {
              queue.splice(0, i + 1), ReactSharedInternals.thrownErrors.push(error);
            } finally {
              isFlushing = false;
            }
          }
        }
        "undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ && "function" === typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());
        var REACT_ELEMENT_TYPE = Symbol.for("react.transitional.element"), REACT_PORTAL_TYPE = Symbol.for("react.portal"), REACT_FRAGMENT_TYPE = Symbol.for("react.fragment"), REACT_STRICT_MODE_TYPE = Symbol.for("react.strict_mode"), REACT_PROFILER_TYPE = Symbol.for("react.profiler");
        Symbol.for("react.provider");
        var REACT_CONSUMER_TYPE = Symbol.for("react.consumer"), REACT_CONTEXT_TYPE = Symbol.for("react.context"), REACT_FORWARD_REF_TYPE = Symbol.for("react.forward_ref"), REACT_SUSPENSE_TYPE = Symbol.for("react.suspense"), REACT_SUSPENSE_LIST_TYPE = Symbol.for("react.suspense_list"), REACT_MEMO_TYPE = Symbol.for("react.memo"), REACT_LAZY_TYPE = Symbol.for("react.lazy"), REACT_OFFSCREEN_TYPE = Symbol.for("react.offscreen"), MAYBE_ITERATOR_SYMBOL = Symbol.iterator, didWarnStateUpdateForUnmountedComponent = {}, ReactNoopUpdateQueue = {
          isMounted: function() {
            return false;
          },
          enqueueForceUpdate: function(publicInstance) {
            warnNoop(publicInstance, "forceUpdate");
          },
          enqueueReplaceState: function(publicInstance) {
            warnNoop(publicInstance, "replaceState");
          },
          enqueueSetState: function(publicInstance) {
            warnNoop(publicInstance, "setState");
          }
        }, assign = Object.assign, emptyObject = {};
        Object.freeze(emptyObject);
        Component.prototype.isReactComponent = {};
        Component.prototype.setState = function(partialState, callback) {
          if ("object" !== typeof partialState && "function" !== typeof partialState && null != partialState)
            throw Error(
              "takes an object of state variables to update or a function which returns an object of state variables."
            );
          this.updater.enqueueSetState(this, partialState, callback, "setState");
        };
        Component.prototype.forceUpdate = function(callback) {
          this.updater.enqueueForceUpdate(this, callback, "forceUpdate");
        };
        var deprecatedAPIs = {
          isMounted: [
            "isMounted",
            "Instead, make sure to clean up subscriptions and pending requests in componentWillUnmount to prevent memory leaks."
          ],
          replaceState: [
            "replaceState",
            "Refactor your code to use setState instead (see https://github.com/facebook/react/issues/3236)."
          ]
        }, fnName;
        for (fnName in deprecatedAPIs)
          deprecatedAPIs.hasOwnProperty(fnName) && defineDeprecationWarning(fnName, deprecatedAPIs[fnName]);
        ComponentDummy.prototype = Component.prototype;
        deprecatedAPIs = PureComponent.prototype = new ComponentDummy();
        deprecatedAPIs.constructor = PureComponent;
        assign(deprecatedAPIs, Component.prototype);
        deprecatedAPIs.isPureReactComponent = true;
        var isArrayImpl = Array.isArray, REACT_CLIENT_REFERENCE$2 = Symbol.for("react.client.reference"), ReactSharedInternals = {
          H: null,
          A: null,
          T: null,
          S: null,
          actQueue: null,
          isBatchingLegacy: false,
          didScheduleLegacyUpdate: false,
          didUsePromise: false,
          thrownErrors: [],
          getCurrentStack: null
        }, hasOwnProperty = Object.prototype.hasOwnProperty, REACT_CLIENT_REFERENCE$1 = Symbol.for("react.client.reference"), disabledDepth = 0, prevLog, prevInfo, prevWarn, prevError, prevGroup, prevGroupCollapsed, prevGroupEnd;
        disabledLog.__reactDisabledLog = true;
        var prefix, suffix, reentry = false;
        var componentFrameCache = new ("function" === typeof WeakMap ? WeakMap : Map)();
        var REACT_CLIENT_REFERENCE = Symbol.for("react.client.reference"), specialPropKeyWarningShown, didWarnAboutOldJSXRuntime;
        var didWarnAboutElementRef = {};
        var ownerHasKeyUseWarning = {}, didWarnAboutMaps = false, userProvidedKeyEscapeRegex = /\/+/g, reportGlobalError = "function" === typeof reportError ? reportError : function(error) {
          if ("object" === typeof window && "function" === typeof window.ErrorEvent) {
            var event = new window.ErrorEvent("error", {
              bubbles: true,
              cancelable: true,
              message: "object" === typeof error && null !== error && "string" === typeof error.message ? String(error.message) : String(error),
              error
            });
            if (!window.dispatchEvent(event)) return;
          } else if ("object" === typeof process && "function" === typeof process.emit) {
            process.emit("uncaughtException", error);
            return;
          }
          console.error(error);
        }, didWarnAboutMessageChannel = false, enqueueTaskImpl = null, actScopeDepth = 0, didWarnNoAwaitAct = false, isFlushing = false, queueSeveralMicrotasks = "function" === typeof queueMicrotask ? function(callback) {
          queueMicrotask(function() {
            return queueMicrotask(callback);
          });
        } : enqueueTask;
        exports.Children = {
          map: mapChildren,
          forEach: function(children, forEachFunc, forEachContext) {
            mapChildren(
              children,
              function() {
                forEachFunc.apply(this, arguments);
              },
              forEachContext
            );
          },
          count: function(children) {
            var n = 0;
            mapChildren(children, function() {
              n++;
            });
            return n;
          },
          toArray: function(children) {
            return mapChildren(children, function(child) {
              return child;
            }) || [];
          },
          only: function(children) {
            if (!isValidElement2(children))
              throw Error(
                "React.Children.only expected to receive a single React element child."
              );
            return children;
          }
        };
        exports.Component = Component;
        exports.Fragment = REACT_FRAGMENT_TYPE;
        exports.Profiler = REACT_PROFILER_TYPE;
        exports.PureComponent = PureComponent;
        exports.StrictMode = REACT_STRICT_MODE_TYPE;
        exports.Suspense = REACT_SUSPENSE_TYPE;
        exports.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = ReactSharedInternals;
        exports.act = function(callback) {
          var prevActQueue = ReactSharedInternals.actQueue, prevActScopeDepth = actScopeDepth;
          actScopeDepth++;
          var queue = ReactSharedInternals.actQueue = null !== prevActQueue ? prevActQueue : [], didAwaitActCall = false;
          try {
            var result = callback();
          } catch (error) {
            ReactSharedInternals.thrownErrors.push(error);
          }
          if (0 < ReactSharedInternals.thrownErrors.length)
            throw popActScope(prevActQueue, prevActScopeDepth), callback = aggregateErrors(ReactSharedInternals.thrownErrors), ReactSharedInternals.thrownErrors.length = 0, callback;
          if (null !== result && "object" === typeof result && "function" === typeof result.then) {
            var thenable = result;
            queueSeveralMicrotasks(function() {
              didAwaitActCall || didWarnNoAwaitAct || (didWarnNoAwaitAct = true, console.error(
                "You called act(async () => ...) without await. This could lead to unexpected testing behaviour, interleaving multiple act calls and mixing their scopes. You should - await act(async () => ...);"
              ));
            });
            return {
              then: function(resolve, reject) {
                didAwaitActCall = true;
                thenable.then(
                  function(returnValue) {
                    popActScope(prevActQueue, prevActScopeDepth);
                    if (0 === prevActScopeDepth) {
                      try {
                        flushActQueue(queue), enqueueTask(function() {
                          return recursivelyFlushAsyncActWork(
                            returnValue,
                            resolve,
                            reject
                          );
                        });
                      } catch (error$2) {
                        ReactSharedInternals.thrownErrors.push(error$2);
                      }
                      if (0 < ReactSharedInternals.thrownErrors.length) {
                        var _thrownError = aggregateErrors(
                          ReactSharedInternals.thrownErrors
                        );
                        ReactSharedInternals.thrownErrors.length = 0;
                        reject(_thrownError);
                      }
                    } else resolve(returnValue);
                  },
                  function(error) {
                    popActScope(prevActQueue, prevActScopeDepth);
                    0 < ReactSharedInternals.thrownErrors.length ? (error = aggregateErrors(
                      ReactSharedInternals.thrownErrors
                    ), ReactSharedInternals.thrownErrors.length = 0, reject(error)) : reject(error);
                  }
                );
              }
            };
          }
          var returnValue$jscomp$0 = result;
          popActScope(prevActQueue, prevActScopeDepth);
          0 === prevActScopeDepth && (flushActQueue(queue), 0 !== queue.length && queueSeveralMicrotasks(function() {
            didAwaitActCall || didWarnNoAwaitAct || (didWarnNoAwaitAct = true, console.error(
              "A component suspended inside an `act` scope, but the `act` call was not awaited. When testing React components that depend on asynchronous data, you must await the result:\n\nawait act(() => ...)"
            ));
          }), ReactSharedInternals.actQueue = null);
          if (0 < ReactSharedInternals.thrownErrors.length)
            throw callback = aggregateErrors(ReactSharedInternals.thrownErrors), ReactSharedInternals.thrownErrors.length = 0, callback;
          return {
            then: function(resolve, reject) {
              didAwaitActCall = true;
              0 === prevActScopeDepth ? (ReactSharedInternals.actQueue = queue, enqueueTask(function() {
                return recursivelyFlushAsyncActWork(
                  returnValue$jscomp$0,
                  resolve,
                  reject
                );
              })) : resolve(returnValue$jscomp$0);
            }
          };
        };
        exports.cache = function(fn) {
          return function() {
            return fn.apply(null, arguments);
          };
        };
        exports.cloneElement = function(element, config, children) {
          if (null === element || void 0 === element)
            throw Error(
              "The argument must be a React element, but you passed " + element + "."
            );
          var props = assign({}, element.props), key = element.key, owner = element._owner;
          if (null != config) {
            var JSCompiler_inline_result;
            a: {
              if (hasOwnProperty.call(config, "ref") && (JSCompiler_inline_result = Object.getOwnPropertyDescriptor(
                config,
                "ref"
              ).get) && JSCompiler_inline_result.isReactWarning) {
                JSCompiler_inline_result = false;
                break a;
              }
              JSCompiler_inline_result = void 0 !== config.ref;
            }
            JSCompiler_inline_result && (owner = getOwner());
            hasValidKey(config) && (checkKeyStringCoercion(config.key), key = "" + config.key);
            for (propName in config)
              !hasOwnProperty.call(config, propName) || "key" === propName || "__self" === propName || "__source" === propName || "ref" === propName && void 0 === config.ref || (props[propName] = config[propName]);
          }
          var propName = arguments.length - 2;
          if (1 === propName) props.children = children;
          else if (1 < propName) {
            JSCompiler_inline_result = Array(propName);
            for (var i = 0; i < propName; i++)
              JSCompiler_inline_result[i] = arguments[i + 2];
            props.children = JSCompiler_inline_result;
          }
          props = ReactElement(element.type, key, void 0, void 0, owner, props);
          for (key = 2; key < arguments.length; key++)
            validateChildKeys(arguments[key], props.type);
          return props;
        };
        exports.createContext = function(defaultValue) {
          defaultValue = {
            $$typeof: REACT_CONTEXT_TYPE,
            _currentValue: defaultValue,
            _currentValue2: defaultValue,
            _threadCount: 0,
            Provider: null,
            Consumer: null
          };
          defaultValue.Provider = defaultValue;
          defaultValue.Consumer = {
            $$typeof: REACT_CONSUMER_TYPE,
            _context: defaultValue
          };
          defaultValue._currentRenderer = null;
          defaultValue._currentRenderer2 = null;
          return defaultValue;
        };
        exports.createElement = function(type, config, children) {
          if (isValidElementType(type))
            for (var i = 2; i < arguments.length; i++)
              validateChildKeys(arguments[i], type);
          else {
            i = "";
            if (void 0 === type || "object" === typeof type && null !== type && 0 === Object.keys(type).length)
              i += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.";
            if (null === type) var typeString = "null";
            else
              isArrayImpl(type) ? typeString = "array" : void 0 !== type && type.$$typeof === REACT_ELEMENT_TYPE ? (typeString = "<" + (getComponentNameFromType(type.type) || "Unknown") + " />", i = " Did you accidentally export a JSX literal instead of a component?") : typeString = typeof type;
            console.error(
              "React.createElement: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s",
              typeString,
              i
            );
          }
          var propName;
          i = {};
          typeString = null;
          if (null != config)
            for (propName in didWarnAboutOldJSXRuntime || !("__self" in config) || "key" in config || (didWarnAboutOldJSXRuntime = true, console.warn(
              "Your app (or one of its dependencies) is using an outdated JSX transform. Update to the modern JSX transform for faster performance: https://react.dev/link/new-jsx-transform"
            )), hasValidKey(config) && (checkKeyStringCoercion(config.key), typeString = "" + config.key), config)
              hasOwnProperty.call(config, propName) && "key" !== propName && "__self" !== propName && "__source" !== propName && (i[propName] = config[propName]);
          var childrenLength = arguments.length - 2;
          if (1 === childrenLength) i.children = children;
          else if (1 < childrenLength) {
            for (var childArray = Array(childrenLength), _i = 0; _i < childrenLength; _i++)
              childArray[_i] = arguments[_i + 2];
            Object.freeze && Object.freeze(childArray);
            i.children = childArray;
          }
          if (type && type.defaultProps)
            for (propName in childrenLength = type.defaultProps, childrenLength)
              void 0 === i[propName] && (i[propName] = childrenLength[propName]);
          typeString && defineKeyPropWarningGetter(
            i,
            "function" === typeof type ? type.displayName || type.name || "Unknown" : type
          );
          return ReactElement(type, typeString, void 0, void 0, getOwner(), i);
        };
        exports.createRef = function() {
          var refObject = { current: null };
          Object.seal(refObject);
          return refObject;
        };
        exports.forwardRef = function(render) {
          null != render && render.$$typeof === REACT_MEMO_TYPE ? console.error(
            "forwardRef requires a render function but received a `memo` component. Instead of forwardRef(memo(...)), use memo(forwardRef(...))."
          ) : "function" !== typeof render ? console.error(
            "forwardRef requires a render function but was given %s.",
            null === render ? "null" : typeof render
          ) : 0 !== render.length && 2 !== render.length && console.error(
            "forwardRef render functions accept exactly two parameters: props and ref. %s",
            1 === render.length ? "Did you forget to use the ref parameter?" : "Any additional parameter will be undefined."
          );
          null != render && null != render.defaultProps && console.error(
            "forwardRef render functions do not support defaultProps. Did you accidentally pass a React component?"
          );
          var elementType = { $$typeof: REACT_FORWARD_REF_TYPE, render }, ownName;
          Object.defineProperty(elementType, "displayName", {
            enumerable: false,
            configurable: true,
            get: function() {
              return ownName;
            },
            set: function(name) {
              ownName = name;
              render.name || render.displayName || (Object.defineProperty(render, "name", { value: name }), render.displayName = name);
            }
          });
          return elementType;
        };
        exports.isValidElement = isValidElement2;
        exports.lazy = function(ctor) {
          return {
            $$typeof: REACT_LAZY_TYPE,
            _payload: { _status: -1, _result: ctor },
            _init: lazyInitializer
          };
        };
        exports.memo = function(type, compare) {
          isValidElementType(type) || console.error(
            "memo: The first argument must be a component. Instead received: %s",
            null === type ? "null" : typeof type
          );
          compare = {
            $$typeof: REACT_MEMO_TYPE,
            type,
            compare: void 0 === compare ? null : compare
          };
          var ownName;
          Object.defineProperty(compare, "displayName", {
            enumerable: false,
            configurable: true,
            get: function() {
              return ownName;
            },
            set: function(name) {
              ownName = name;
              type.name || type.displayName || (Object.defineProperty(type, "name", { value: name }), type.displayName = name);
            }
          });
          return compare;
        };
        exports.startTransition = function(scope) {
          var prevTransition = ReactSharedInternals.T, currentTransition = {};
          ReactSharedInternals.T = currentTransition;
          currentTransition._updatedFibers = /* @__PURE__ */ new Set();
          try {
            var returnValue = scope(), onStartTransitionFinish = ReactSharedInternals.S;
            null !== onStartTransitionFinish && onStartTransitionFinish(currentTransition, returnValue);
            "object" === typeof returnValue && null !== returnValue && "function" === typeof returnValue.then && returnValue.then(noop, reportGlobalError);
          } catch (error) {
            reportGlobalError(error);
          } finally {
            null === prevTransition && currentTransition._updatedFibers && (scope = currentTransition._updatedFibers.size, currentTransition._updatedFibers.clear(), 10 < scope && console.warn(
              "Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."
            )), ReactSharedInternals.T = prevTransition;
          }
        };
        exports.unstable_useCacheRefresh = function() {
          return resolveDispatcher().useCacheRefresh();
        };
        exports.use = function(usable) {
          return resolveDispatcher().use(usable);
        };
        exports.useActionState = function(action, initialState, permalink) {
          return resolveDispatcher().useActionState(
            action,
            initialState,
            permalink
          );
        };
        exports.useCallback = function(callback, deps) {
          return resolveDispatcher().useCallback(callback, deps);
        };
        exports.useContext = function(Context) {
          var dispatcher = resolveDispatcher();
          Context.$$typeof === REACT_CONSUMER_TYPE && console.error(
            "Calling useContext(Context.Consumer) is not supported and will cause bugs. Did you mean to call useContext(Context) instead?"
          );
          return dispatcher.useContext(Context);
        };
        exports.useDebugValue = function(value, formatterFn) {
          return resolveDispatcher().useDebugValue(value, formatterFn);
        };
        exports.useDeferredValue = function(value, initialValue) {
          return resolveDispatcher().useDeferredValue(value, initialValue);
        };
        exports.useEffect = function(create, deps) {
          return resolveDispatcher().useEffect(create, deps);
        };
        exports.useId = function() {
          return resolveDispatcher().useId();
        };
        exports.useImperativeHandle = function(ref, create, deps) {
          return resolveDispatcher().useImperativeHandle(ref, create, deps);
        };
        exports.useInsertionEffect = function(create, deps) {
          return resolveDispatcher().useInsertionEffect(create, deps);
        };
        exports.useLayoutEffect = function(create, deps) {
          return resolveDispatcher().useLayoutEffect(create, deps);
        };
        exports.useMemo = function(create, deps) {
          return resolveDispatcher().useMemo(create, deps);
        };
        exports.useOptimistic = function(passthrough, reducer) {
          return resolveDispatcher().useOptimistic(passthrough, reducer);
        };
        exports.useReducer = function(reducer, initialArg, init) {
          return resolveDispatcher().useReducer(reducer, initialArg, init);
        };
        exports.useRef = function(initialValue) {
          return resolveDispatcher().useRef(initialValue);
        };
        exports.useState = function(initialState) {
          return resolveDispatcher().useState(initialState);
        };
        exports.useSyncExternalStore = function(subscribe, getSnapshot, getServerSnapshot) {
          return resolveDispatcher().useSyncExternalStore(
            subscribe,
            getSnapshot,
            getServerSnapshot
          );
        };
        exports.useTransition = function() {
          return resolveDispatcher().useTransition();
        };
        exports.version = "19.0.0";
        "undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ && "function" === typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error());
      })();
    }
  });

  // node_modules/react/index.js
  var require_react = __commonJS({
    "node_modules/react/index.js"(exports, module) {
      "use strict";
      if (false) {
        module.exports = null;
      } else {
        module.exports = require_react_development();
      }
    }
  });

  // node_modules/react/cjs/react-jsx-runtime.development.js
  var require_react_jsx_runtime_development = __commonJS({
    "node_modules/react/cjs/react-jsx-runtime.development.js"(exports) {
      "use strict";
      (function() {
        function getComponentNameFromType(type) {
          if (null == type) return null;
          if ("function" === typeof type)
            return type.$$typeof === REACT_CLIENT_REFERENCE$2 ? null : type.displayName || type.name || null;
          if ("string" === typeof type) return type;
          switch (type) {
            case REACT_FRAGMENT_TYPE:
              return "Fragment";
            case REACT_PORTAL_TYPE:
              return "Portal";
            case REACT_PROFILER_TYPE:
              return "Profiler";
            case REACT_STRICT_MODE_TYPE:
              return "StrictMode";
            case REACT_SUSPENSE_TYPE:
              return "Suspense";
            case REACT_SUSPENSE_LIST_TYPE:
              return "SuspenseList";
          }
          if ("object" === typeof type)
            switch ("number" === typeof type.tag && console.error(
              "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
            ), type.$$typeof) {
              case REACT_CONTEXT_TYPE:
                return (type.displayName || "Context") + ".Provider";
              case REACT_CONSUMER_TYPE:
                return (type._context.displayName || "Context") + ".Consumer";
              case REACT_FORWARD_REF_TYPE:
                var innerType = type.render;
                type = type.displayName;
                type || (type = innerType.displayName || innerType.name || "", type = "" !== type ? "ForwardRef(" + type + ")" : "ForwardRef");
                return type;
              case REACT_MEMO_TYPE:
                return innerType = type.displayName || null, null !== innerType ? innerType : getComponentNameFromType(type.type) || "Memo";
              case REACT_LAZY_TYPE:
                innerType = type._payload;
                type = type._init;
                try {
                  return getComponentNameFromType(type(innerType));
                } catch (x) {
                }
            }
          return null;
        }
        function testStringCoercion(value) {
          return "" + value;
        }
        function checkKeyStringCoercion(value) {
          try {
            testStringCoercion(value);
            var JSCompiler_inline_result = false;
          } catch (e) {
            JSCompiler_inline_result = true;
          }
          if (JSCompiler_inline_result) {
            JSCompiler_inline_result = console;
            var JSCompiler_temp_const = JSCompiler_inline_result.error;
            var JSCompiler_inline_result$jscomp$0 = "function" === typeof Symbol && Symbol.toStringTag && value[Symbol.toStringTag] || value.constructor.name || "Object";
            JSCompiler_temp_const.call(
              JSCompiler_inline_result,
              "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
              JSCompiler_inline_result$jscomp$0
            );
            return testStringCoercion(value);
          }
        }
        function disabledLog() {
        }
        function disableLogs() {
          if (0 === disabledDepth) {
            prevLog = console.log;
            prevInfo = console.info;
            prevWarn = console.warn;
            prevError = console.error;
            prevGroup = console.group;
            prevGroupCollapsed = console.groupCollapsed;
            prevGroupEnd = console.groupEnd;
            var props = {
              configurable: true,
              enumerable: true,
              value: disabledLog,
              writable: true
            };
            Object.defineProperties(console, {
              info: props,
              log: props,
              warn: props,
              error: props,
              group: props,
              groupCollapsed: props,
              groupEnd: props
            });
          }
          disabledDepth++;
        }
        function reenableLogs() {
          disabledDepth--;
          if (0 === disabledDepth) {
            var props = { configurable: true, enumerable: true, writable: true };
            Object.defineProperties(console, {
              log: assign({}, props, { value: prevLog }),
              info: assign({}, props, { value: prevInfo }),
              warn: assign({}, props, { value: prevWarn }),
              error: assign({}, props, { value: prevError }),
              group: assign({}, props, { value: prevGroup }),
              groupCollapsed: assign({}, props, { value: prevGroupCollapsed }),
              groupEnd: assign({}, props, { value: prevGroupEnd })
            });
          }
          0 > disabledDepth && console.error(
            "disabledDepth fell below zero. This is a bug in React. Please file an issue."
          );
        }
        function describeBuiltInComponentFrame(name) {
          if (void 0 === prefix)
            try {
              throw Error();
            } catch (x) {
              var match = x.stack.trim().match(/\n( *(at )?)/);
              prefix = match && match[1] || "";
              suffix = -1 < x.stack.indexOf("\n    at") ? " (<anonymous>)" : -1 < x.stack.indexOf("@") ? "@unknown:0:0" : "";
            }
          return "\n" + prefix + name + suffix;
        }
        function describeNativeComponentFrame(fn, construct) {
          if (!fn || reentry) return "";
          var frame = componentFrameCache.get(fn);
          if (void 0 !== frame) return frame;
          reentry = true;
          frame = Error.prepareStackTrace;
          Error.prepareStackTrace = void 0;
          var previousDispatcher = null;
          previousDispatcher = ReactSharedInternals.H;
          ReactSharedInternals.H = null;
          disableLogs();
          try {
            var RunInRootFrame = {
              DetermineComponentFrameRoot: function() {
                try {
                  if (construct) {
                    var Fake = function() {
                      throw Error();
                    };
                    Object.defineProperty(Fake.prototype, "props", {
                      set: function() {
                        throw Error();
                      }
                    });
                    if ("object" === typeof Reflect && Reflect.construct) {
                      try {
                        Reflect.construct(Fake, []);
                      } catch (x) {
                        var control = x;
                      }
                      Reflect.construct(fn, [], Fake);
                    } else {
                      try {
                        Fake.call();
                      } catch (x$0) {
                        control = x$0;
                      }
                      fn.call(Fake.prototype);
                    }
                  } else {
                    try {
                      throw Error();
                    } catch (x$1) {
                      control = x$1;
                    }
                    (Fake = fn()) && "function" === typeof Fake.catch && Fake.catch(function() {
                    });
                  }
                } catch (sample) {
                  if (sample && control && "string" === typeof sample.stack)
                    return [sample.stack, control.stack];
                }
                return [null, null];
              }
            };
            RunInRootFrame.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
            var namePropDescriptor = Object.getOwnPropertyDescriptor(
              RunInRootFrame.DetermineComponentFrameRoot,
              "name"
            );
            namePropDescriptor && namePropDescriptor.configurable && Object.defineProperty(
              RunInRootFrame.DetermineComponentFrameRoot,
              "name",
              { value: "DetermineComponentFrameRoot" }
            );
            var _RunInRootFrame$Deter = RunInRootFrame.DetermineComponentFrameRoot(), sampleStack = _RunInRootFrame$Deter[0], controlStack = _RunInRootFrame$Deter[1];
            if (sampleStack && controlStack) {
              var sampleLines = sampleStack.split("\n"), controlLines = controlStack.split("\n");
              for (_RunInRootFrame$Deter = namePropDescriptor = 0; namePropDescriptor < sampleLines.length && !sampleLines[namePropDescriptor].includes(
                "DetermineComponentFrameRoot"
              ); )
                namePropDescriptor++;
              for (; _RunInRootFrame$Deter < controlLines.length && !controlLines[_RunInRootFrame$Deter].includes(
                "DetermineComponentFrameRoot"
              ); )
                _RunInRootFrame$Deter++;
              if (namePropDescriptor === sampleLines.length || _RunInRootFrame$Deter === controlLines.length)
                for (namePropDescriptor = sampleLines.length - 1, _RunInRootFrame$Deter = controlLines.length - 1; 1 <= namePropDescriptor && 0 <= _RunInRootFrame$Deter && sampleLines[namePropDescriptor] !== controlLines[_RunInRootFrame$Deter]; )
                  _RunInRootFrame$Deter--;
              for (; 1 <= namePropDescriptor && 0 <= _RunInRootFrame$Deter; namePropDescriptor--, _RunInRootFrame$Deter--)
                if (sampleLines[namePropDescriptor] !== controlLines[_RunInRootFrame$Deter]) {
                  if (1 !== namePropDescriptor || 1 !== _RunInRootFrame$Deter) {
                    do
                      if (namePropDescriptor--, _RunInRootFrame$Deter--, 0 > _RunInRootFrame$Deter || sampleLines[namePropDescriptor] !== controlLines[_RunInRootFrame$Deter]) {
                        var _frame = "\n" + sampleLines[namePropDescriptor].replace(
                          " at new ",
                          " at "
                        );
                        fn.displayName && _frame.includes("<anonymous>") && (_frame = _frame.replace("<anonymous>", fn.displayName));
                        "function" === typeof fn && componentFrameCache.set(fn, _frame);
                        return _frame;
                      }
                    while (1 <= namePropDescriptor && 0 <= _RunInRootFrame$Deter);
                  }
                  break;
                }
            }
          } finally {
            reentry = false, ReactSharedInternals.H = previousDispatcher, reenableLogs(), Error.prepareStackTrace = frame;
          }
          sampleLines = (sampleLines = fn ? fn.displayName || fn.name : "") ? describeBuiltInComponentFrame(sampleLines) : "";
          "function" === typeof fn && componentFrameCache.set(fn, sampleLines);
          return sampleLines;
        }
        function describeUnknownElementTypeFrameInDEV(type) {
          if (null == type) return "";
          if ("function" === typeof type) {
            var prototype = type.prototype;
            return describeNativeComponentFrame(
              type,
              !(!prototype || !prototype.isReactComponent)
            );
          }
          if ("string" === typeof type) return describeBuiltInComponentFrame(type);
          switch (type) {
            case REACT_SUSPENSE_TYPE:
              return describeBuiltInComponentFrame("Suspense");
            case REACT_SUSPENSE_LIST_TYPE:
              return describeBuiltInComponentFrame("SuspenseList");
          }
          if ("object" === typeof type)
            switch (type.$$typeof) {
              case REACT_FORWARD_REF_TYPE:
                return type = describeNativeComponentFrame(type.render, false), type;
              case REACT_MEMO_TYPE:
                return describeUnknownElementTypeFrameInDEV(type.type);
              case REACT_LAZY_TYPE:
                prototype = type._payload;
                type = type._init;
                try {
                  return describeUnknownElementTypeFrameInDEV(type(prototype));
                } catch (x) {
                }
            }
          return "";
        }
        function getOwner() {
          var dispatcher = ReactSharedInternals.A;
          return null === dispatcher ? null : dispatcher.getOwner();
        }
        function hasValidKey(config) {
          if (hasOwnProperty.call(config, "key")) {
            var getter = Object.getOwnPropertyDescriptor(config, "key").get;
            if (getter && getter.isReactWarning) return false;
          }
          return void 0 !== config.key;
        }
        function defineKeyPropWarningGetter(props, displayName) {
          function warnAboutAccessingKey() {
            specialPropKeyWarningShown || (specialPropKeyWarningShown = true, console.error(
              "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
              displayName
            ));
          }
          warnAboutAccessingKey.isReactWarning = true;
          Object.defineProperty(props, "key", {
            get: warnAboutAccessingKey,
            configurable: true
          });
        }
        function elementRefGetterWithDeprecationWarning() {
          var componentName = getComponentNameFromType(this.type);
          didWarnAboutElementRef[componentName] || (didWarnAboutElementRef[componentName] = true, console.error(
            "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
          ));
          componentName = this.props.ref;
          return void 0 !== componentName ? componentName : null;
        }
        function ReactElement(type, key, self2, source, owner, props) {
          self2 = props.ref;
          type = {
            $$typeof: REACT_ELEMENT_TYPE,
            type,
            key,
            props,
            _owner: owner
          };
          null !== (void 0 !== self2 ? self2 : null) ? Object.defineProperty(type, "ref", {
            enumerable: false,
            get: elementRefGetterWithDeprecationWarning
          }) : Object.defineProperty(type, "ref", { enumerable: false, value: null });
          type._store = {};
          Object.defineProperty(type._store, "validated", {
            configurable: false,
            enumerable: false,
            writable: true,
            value: 0
          });
          Object.defineProperty(type, "_debugInfo", {
            configurable: false,
            enumerable: false,
            writable: true,
            value: null
          });
          Object.freeze && (Object.freeze(type.props), Object.freeze(type));
          return type;
        }
        function jsxDEVImpl(type, config, maybeKey, isStaticChildren, source, self2) {
          if ("string" === typeof type || "function" === typeof type || type === REACT_FRAGMENT_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || type === REACT_OFFSCREEN_TYPE || "object" === typeof type && null !== type && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_CONSUMER_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_CLIENT_REFERENCE$1 || void 0 !== type.getModuleId)) {
            var children = config.children;
            if (void 0 !== children)
              if (isStaticChildren)
                if (isArrayImpl(children)) {
                  for (isStaticChildren = 0; isStaticChildren < children.length; isStaticChildren++)
                    validateChildKeys(children[isStaticChildren], type);
                  Object.freeze && Object.freeze(children);
                } else
                  console.error(
                    "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
                  );
              else validateChildKeys(children, type);
          } else {
            children = "";
            if (void 0 === type || "object" === typeof type && null !== type && 0 === Object.keys(type).length)
              children += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.";
            null === type ? isStaticChildren = "null" : isArrayImpl(type) ? isStaticChildren = "array" : void 0 !== type && type.$$typeof === REACT_ELEMENT_TYPE ? (isStaticChildren = "<" + (getComponentNameFromType(type.type) || "Unknown") + " />", children = " Did you accidentally export a JSX literal instead of a component?") : isStaticChildren = typeof type;
            console.error(
              "React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s",
              isStaticChildren,
              children
            );
          }
          if (hasOwnProperty.call(config, "key")) {
            children = getComponentNameFromType(type);
            var keys = Object.keys(config).filter(function(k) {
              return "key" !== k;
            });
            isStaticChildren = 0 < keys.length ? "{key: someKey, " + keys.join(": ..., ") + ": ...}" : "{key: someKey}";
            didWarnAboutKeySpread[children + isStaticChildren] || (keys = 0 < keys.length ? "{" + keys.join(": ..., ") + ": ...}" : "{}", console.error(
              'A props object containing a "key" prop is being spread into JSX:\n  let props = %s;\n  <%s {...props} />\nReact keys must be passed directly to JSX without using spread:\n  let props = %s;\n  <%s key={someKey} {...props} />',
              isStaticChildren,
              children,
              keys,
              children
            ), didWarnAboutKeySpread[children + isStaticChildren] = true);
          }
          children = null;
          void 0 !== maybeKey && (checkKeyStringCoercion(maybeKey), children = "" + maybeKey);
          hasValidKey(config) && (checkKeyStringCoercion(config.key), children = "" + config.key);
          if ("key" in config) {
            maybeKey = {};
            for (var propName in config)
              "key" !== propName && (maybeKey[propName] = config[propName]);
          } else maybeKey = config;
          children && defineKeyPropWarningGetter(
            maybeKey,
            "function" === typeof type ? type.displayName || type.name || "Unknown" : type
          );
          return ReactElement(type, children, self2, source, getOwner(), maybeKey);
        }
        function validateChildKeys(node, parentType) {
          if ("object" === typeof node && node && node.$$typeof !== REACT_CLIENT_REFERENCE) {
            if (isArrayImpl(node))
              for (var i = 0; i < node.length; i++) {
                var child = node[i];
                isValidElement2(child) && validateExplicitKey(child, parentType);
              }
            else if (isValidElement2(node))
              node._store && (node._store.validated = 1);
            else if (null === node || "object" !== typeof node ? i = null : (i = MAYBE_ITERATOR_SYMBOL && node[MAYBE_ITERATOR_SYMBOL] || node["@@iterator"], i = "function" === typeof i ? i : null), "function" === typeof i && i !== node.entries && (i = i.call(node), i !== node))
              for (; !(node = i.next()).done; )
                isValidElement2(node.value) && validateExplicitKey(node.value, parentType);
          }
        }
        function isValidElement2(object) {
          return "object" === typeof object && null !== object && object.$$typeof === REACT_ELEMENT_TYPE;
        }
        function validateExplicitKey(element, parentType) {
          if (element._store && !element._store.validated && null == element.key && (element._store.validated = 1, parentType = getCurrentComponentErrorInfo(parentType), !ownerHasKeyUseWarning[parentType])) {
            ownerHasKeyUseWarning[parentType] = true;
            var childOwner = "";
            element && null != element._owner && element._owner !== getOwner() && (childOwner = null, "number" === typeof element._owner.tag ? childOwner = getComponentNameFromType(element._owner.type) : "string" === typeof element._owner.name && (childOwner = element._owner.name), childOwner = " It was passed a child from " + childOwner + ".");
            var prevGetCurrentStack = ReactSharedInternals.getCurrentStack;
            ReactSharedInternals.getCurrentStack = function() {
              var stack = describeUnknownElementTypeFrameInDEV(element.type);
              prevGetCurrentStack && (stack += prevGetCurrentStack() || "");
              return stack;
            };
            console.error(
              'Each child in a list should have a unique "key" prop.%s%s See https://react.dev/link/warning-keys for more information.',
              parentType,
              childOwner
            );
            ReactSharedInternals.getCurrentStack = prevGetCurrentStack;
          }
        }
        function getCurrentComponentErrorInfo(parentType) {
          var info = "", owner = getOwner();
          owner && (owner = getComponentNameFromType(owner.type)) && (info = "\n\nCheck the render method of `" + owner + "`.");
          info || (parentType = getComponentNameFromType(parentType)) && (info = "\n\nCheck the top-level render call using <" + parentType + ">.");
          return info;
        }
        var React18 = require_react(), REACT_ELEMENT_TYPE = Symbol.for("react.transitional.element"), REACT_PORTAL_TYPE = Symbol.for("react.portal"), REACT_FRAGMENT_TYPE = Symbol.for("react.fragment"), REACT_STRICT_MODE_TYPE = Symbol.for("react.strict_mode"), REACT_PROFILER_TYPE = Symbol.for("react.profiler");
        Symbol.for("react.provider");
        var REACT_CONSUMER_TYPE = Symbol.for("react.consumer"), REACT_CONTEXT_TYPE = Symbol.for("react.context"), REACT_FORWARD_REF_TYPE = Symbol.for("react.forward_ref"), REACT_SUSPENSE_TYPE = Symbol.for("react.suspense"), REACT_SUSPENSE_LIST_TYPE = Symbol.for("react.suspense_list"), REACT_MEMO_TYPE = Symbol.for("react.memo"), REACT_LAZY_TYPE = Symbol.for("react.lazy"), REACT_OFFSCREEN_TYPE = Symbol.for("react.offscreen"), MAYBE_ITERATOR_SYMBOL = Symbol.iterator, REACT_CLIENT_REFERENCE$2 = Symbol.for("react.client.reference"), ReactSharedInternals = React18.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, hasOwnProperty = Object.prototype.hasOwnProperty, assign = Object.assign, REACT_CLIENT_REFERENCE$1 = Symbol.for("react.client.reference"), isArrayImpl = Array.isArray, disabledDepth = 0, prevLog, prevInfo, prevWarn, prevError, prevGroup, prevGroupCollapsed, prevGroupEnd;
        disabledLog.__reactDisabledLog = true;
        var prefix, suffix, reentry = false;
        var componentFrameCache = new ("function" === typeof WeakMap ? WeakMap : Map)();
        var REACT_CLIENT_REFERENCE = Symbol.for("react.client.reference"), specialPropKeyWarningShown;
        var didWarnAboutElementRef = {};
        var didWarnAboutKeySpread = {}, ownerHasKeyUseWarning = {};
        exports.Fragment = REACT_FRAGMENT_TYPE;
        exports.jsx = function(type, config, maybeKey, source, self2) {
          return jsxDEVImpl(type, config, maybeKey, false, source, self2);
        };
        exports.jsxs = function(type, config, maybeKey, source, self2) {
          return jsxDEVImpl(type, config, maybeKey, true, source, self2);
        };
      })();
    }
  });

  // node_modules/react/jsx-runtime.js
  var require_jsx_runtime = __commonJS({
    "node_modules/react/jsx-runtime.js"(exports, module) {
      "use strict";
      if (false) {
        module.exports = null;
      } else {
        module.exports = require_react_jsx_runtime_development();
      }
    }
  });

  // node_modules/@swc/helpers/cjs/_interop_require_default.cjs
  var require_interop_require_default = __commonJS({
    "node_modules/@swc/helpers/cjs/_interop_require_default.cjs"(exports) {
      "use strict";
      function _interop_require_default(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }
      exports._ = _interop_require_default;
    }
  });

  // node_modules/next/dist/shared/lib/router/utils/querystring.js
  var require_querystring = __commonJS({
    "node_modules/next/dist/shared/lib/router/utils/querystring.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      function _export(target, all) {
        for (var name in all) Object.defineProperty(target, name, {
          enumerable: true,
          get: all[name]
        });
      }
      _export(exports, {
        assign: function() {
          return assign;
        },
        searchParamsToUrlQuery: function() {
          return searchParamsToUrlQuery;
        },
        urlQueryToSearchParams: function() {
          return urlQueryToSearchParams;
        }
      });
      function searchParamsToUrlQuery(searchParams) {
        const query = {};
        searchParams.forEach((value, key) => {
          if (typeof query[key] === "undefined") {
            query[key] = value;
          } else if (Array.isArray(query[key])) {
            ;
            query[key].push(value);
          } else {
            query[key] = [
              query[key],
              value
            ];
          }
        });
        return query;
      }
      function stringifyUrlQueryParam(param) {
        if (typeof param === "string" || typeof param === "number" && !isNaN(param) || typeof param === "boolean") {
          return String(param);
        } else {
          return "";
        }
      }
      function urlQueryToSearchParams(urlQuery) {
        const result = new URLSearchParams();
        Object.entries(urlQuery).forEach((param) => {
          let [key, value] = param;
          if (Array.isArray(value)) {
            value.forEach((item) => result.append(key, stringifyUrlQueryParam(item)));
          } else {
            result.set(key, stringifyUrlQueryParam(value));
          }
        });
        return result;
      }
      function assign(target) {
        for (var _len = arguments.length, searchParamsList = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
          searchParamsList[_key - 1] = arguments[_key];
        }
        searchParamsList.forEach((searchParams) => {
          Array.from(searchParams.keys()).forEach((key) => target.delete(key));
          searchParams.forEach((value, key) => target.append(key, value));
        });
        return target;
      }
    }
  });

  // node_modules/@swc/helpers/cjs/_interop_require_wildcard.cjs
  var require_interop_require_wildcard = __commonJS({
    "node_modules/@swc/helpers/cjs/_interop_require_wildcard.cjs"(exports) {
      "use strict";
      function _getRequireWildcardCache(nodeInterop) {
        if (typeof WeakMap !== "function") return null;
        var cacheBabelInterop = /* @__PURE__ */ new WeakMap();
        var cacheNodeInterop = /* @__PURE__ */ new WeakMap();
        return (_getRequireWildcardCache = function(nodeInterop2) {
          return nodeInterop2 ? cacheNodeInterop : cacheBabelInterop;
        })(nodeInterop);
      }
      function _interop_require_wildcard(obj, nodeInterop) {
        if (!nodeInterop && obj && obj.__esModule) return obj;
        if (obj === null || typeof obj !== "object" && typeof obj !== "function") return { default: obj };
        var cache = _getRequireWildcardCache(nodeInterop);
        if (cache && cache.has(obj)) return cache.get(obj);
        var newObj = { __proto__: null };
        var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
        for (var key in obj) {
          if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
            var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
            if (desc && (desc.get || desc.set)) Object.defineProperty(newObj, key, desc);
            else newObj[key] = obj[key];
          }
        }
        newObj.default = obj;
        if (cache) cache.set(obj, newObj);
        return newObj;
      }
      exports._ = _interop_require_wildcard;
    }
  });

  // node_modules/next/dist/shared/lib/router/utils/format-url.js
  var require_format_url = __commonJS({
    "node_modules/next/dist/shared/lib/router/utils/format-url.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      function _export(target, all) {
        for (var name in all) Object.defineProperty(target, name, {
          enumerable: true,
          get: all[name]
        });
      }
      _export(exports, {
        formatUrl: function() {
          return formatUrl;
        },
        formatWithValidation: function() {
          return formatWithValidation;
        },
        urlObjectKeys: function() {
          return urlObjectKeys;
        }
      });
      var _interop_require_wildcard = require_interop_require_wildcard();
      var _querystring = /* @__PURE__ */ _interop_require_wildcard._(require_querystring());
      var slashedProtocols = /https?|ftp|gopher|file/;
      function formatUrl(urlObj) {
        let { auth, hostname } = urlObj;
        let protocol = urlObj.protocol || "";
        let pathname = urlObj.pathname || "";
        let hash = urlObj.hash || "";
        let query = urlObj.query || "";
        let host = false;
        auth = auth ? encodeURIComponent(auth).replace(/%3A/i, ":") + "@" : "";
        if (urlObj.host) {
          host = auth + urlObj.host;
        } else if (hostname) {
          host = auth + (~hostname.indexOf(":") ? "[" + hostname + "]" : hostname);
          if (urlObj.port) {
            host += ":" + urlObj.port;
          }
        }
        if (query && typeof query === "object") {
          query = String(_querystring.urlQueryToSearchParams(query));
        }
        let search = urlObj.search || query && "?" + query || "";
        if (protocol && !protocol.endsWith(":")) protocol += ":";
        if (urlObj.slashes || (!protocol || slashedProtocols.test(protocol)) && host !== false) {
          host = "//" + (host || "");
          if (pathname && pathname[0] !== "/") pathname = "/" + pathname;
        } else if (!host) {
          host = "";
        }
        if (hash && hash[0] !== "#") hash = "#" + hash;
        if (search && search[0] !== "?") search = "?" + search;
        pathname = pathname.replace(/[?#]/g, encodeURIComponent);
        search = search.replace("#", "%23");
        return "" + protocol + host + pathname + search + hash;
      }
      var urlObjectKeys = [
        "auth",
        "hash",
        "host",
        "hostname",
        "href",
        "path",
        "pathname",
        "port",
        "protocol",
        "query",
        "search",
        "slashes"
      ];
      function formatWithValidation(url) {
        if (true) {
          if (url !== null && typeof url === "object") {
            Object.keys(url).forEach((key) => {
              if (!urlObjectKeys.includes(key)) {
                console.warn("Unknown key passed via urlObject into url.format: " + key);
              }
            });
          }
        }
        return formatUrl(url);
      }
    }
  });

  // node_modules/next/dist/shared/lib/router/utils/omit.js
  var require_omit = __commonJS({
    "node_modules/next/dist/shared/lib/router/utils/omit.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      Object.defineProperty(exports, "omit", {
        enumerable: true,
        get: function() {
          return omit;
        }
      });
      function omit(object, keys) {
        const omitted = {};
        Object.keys(object).forEach((key) => {
          if (!keys.includes(key)) {
            omitted[key] = object[key];
          }
        });
        return omitted;
      }
    }
  });

  // node_modules/next/dist/shared/lib/utils.js
  var require_utils = __commonJS({
    "node_modules/next/dist/shared/lib/utils.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      function _export(target, all) {
        for (var name in all) Object.defineProperty(target, name, {
          enumerable: true,
          get: all[name]
        });
      }
      _export(exports, {
        DecodeError: function() {
          return DecodeError;
        },
        MiddlewareNotFoundError: function() {
          return MiddlewareNotFoundError;
        },
        MissingStaticPage: function() {
          return MissingStaticPage;
        },
        NormalizeError: function() {
          return NormalizeError;
        },
        PageNotFoundError: function() {
          return PageNotFoundError;
        },
        SP: function() {
          return SP;
        },
        ST: function() {
          return ST;
        },
        WEB_VITALS: function() {
          return WEB_VITALS;
        },
        execOnce: function() {
          return execOnce;
        },
        getDisplayName: function() {
          return getDisplayName;
        },
        getLocationOrigin: function() {
          return getLocationOrigin;
        },
        getURL: function() {
          return getURL;
        },
        isAbsoluteUrl: function() {
          return isAbsoluteUrl;
        },
        isResSent: function() {
          return isResSent;
        },
        loadGetInitialProps: function() {
          return loadGetInitialProps;
        },
        normalizeRepeatedSlashes: function() {
          return normalizeRepeatedSlashes;
        },
        stringifyError: function() {
          return stringifyError;
        }
      });
      var WEB_VITALS = [
        "CLS",
        "FCP",
        "FID",
        "INP",
        "LCP",
        "TTFB"
      ];
      function execOnce(fn) {
        let used = false;
        let result;
        return function() {
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          if (!used) {
            used = true;
            result = fn(...args);
          }
          return result;
        };
      }
      var ABSOLUTE_URL_REGEX = /^[a-zA-Z][a-zA-Z\d+\-.]*?:/;
      var isAbsoluteUrl = (url) => ABSOLUTE_URL_REGEX.test(url);
      function getLocationOrigin() {
        const { protocol, hostname, port } = window.location;
        return protocol + "//" + hostname + (port ? ":" + port : "");
      }
      function getURL() {
        const { href } = window.location;
        const origin = getLocationOrigin();
        return href.substring(origin.length);
      }
      function getDisplayName(Component) {
        return typeof Component === "string" ? Component : Component.displayName || Component.name || "Unknown";
      }
      function isResSent(res) {
        return res.finished || res.headersSent;
      }
      function normalizeRepeatedSlashes(url) {
        const urlParts = url.split("?");
        const urlNoQuery = urlParts[0];
        return urlNoQuery.replace(/\\/g, "/").replace(/\/\/+/g, "/") + (urlParts[1] ? "?" + urlParts.slice(1).join("?") : "");
      }
      async function loadGetInitialProps(App, ctx) {
        if (true) {
          var _App_prototype;
          if ((_App_prototype = App.prototype) == null ? void 0 : _App_prototype.getInitialProps) {
            const message = '"' + getDisplayName(App) + '.getInitialProps()" is defined as an instance method - visit https://nextjs.org/docs/messages/get-initial-props-as-an-instance-method for more information.';
            throw new Error(message);
          }
        }
        const res = ctx.res || ctx.ctx && ctx.ctx.res;
        if (!App.getInitialProps) {
          if (ctx.ctx && ctx.Component) {
            return {
              pageProps: await loadGetInitialProps(ctx.Component, ctx.ctx)
            };
          }
          return {};
        }
        const props = await App.getInitialProps(ctx);
        if (res && isResSent(res)) {
          return props;
        }
        if (!props) {
          const message = '"' + getDisplayName(App) + '.getInitialProps()" should resolve to an object. But found "' + props + '" instead.';
          throw new Error(message);
        }
        if (true) {
          if (Object.keys(props).length === 0 && !ctx.ctx) {
            console.warn("" + getDisplayName(App) + " returned an empty object from `getInitialProps`. This de-optimizes and prevents automatic static optimization. https://nextjs.org/docs/messages/empty-object-getInitialProps");
          }
        }
        return props;
      }
      var SP = typeof performance !== "undefined";
      var ST = SP && [
        "mark",
        "measure",
        "getEntriesByName"
      ].every((method) => typeof performance[method] === "function");
      var DecodeError = class extends Error {
      };
      var NormalizeError = class extends Error {
      };
      var PageNotFoundError = class extends Error {
        constructor(page) {
          super();
          this.code = "ENOENT";
          this.name = "PageNotFoundError";
          this.message = "Cannot find module for page: " + page;
        }
      };
      var MissingStaticPage = class extends Error {
        constructor(page, message) {
          super();
          this.message = "Failed to load static file for page: " + page + " " + message;
        }
      };
      var MiddlewareNotFoundError = class extends Error {
        constructor() {
          super();
          this.code = "ENOENT";
          this.message = "Cannot find the middleware module";
        }
      };
      function stringifyError(error) {
        return JSON.stringify({
          message: error.message,
          stack: error.stack
        });
      }
    }
  });

  // node_modules/next/dist/shared/lib/router/utils/remove-trailing-slash.js
  var require_remove_trailing_slash = __commonJS({
    "node_modules/next/dist/shared/lib/router/utils/remove-trailing-slash.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      Object.defineProperty(exports, "removeTrailingSlash", {
        enumerable: true,
        get: function() {
          return removeTrailingSlash;
        }
      });
      function removeTrailingSlash(route) {
        return route.replace(/\/$/, "") || "/";
      }
    }
  });

  // node_modules/next/dist/shared/lib/router/utils/parse-path.js
  var require_parse_path = __commonJS({
    "node_modules/next/dist/shared/lib/router/utils/parse-path.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      Object.defineProperty(exports, "parsePath", {
        enumerable: true,
        get: function() {
          return parsePath;
        }
      });
      function parsePath(path) {
        const hashIndex = path.indexOf("#");
        const queryIndex = path.indexOf("?");
        const hasQuery = queryIndex > -1 && (hashIndex < 0 || queryIndex < hashIndex);
        if (hasQuery || hashIndex > -1) {
          return {
            pathname: path.substring(0, hasQuery ? queryIndex : hashIndex),
            query: hasQuery ? path.substring(queryIndex, hashIndex > -1 ? hashIndex : void 0) : "",
            hash: hashIndex > -1 ? path.slice(hashIndex) : ""
          };
        }
        return {
          pathname: path,
          query: "",
          hash: ""
        };
      }
    }
  });

  // node_modules/next/dist/client/normalize-trailing-slash.js
  var require_normalize_trailing_slash = __commonJS({
    "node_modules/next/dist/client/normalize-trailing-slash.js"(exports, module) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      Object.defineProperty(exports, "normalizePathTrailingSlash", {
        enumerable: true,
        get: function() {
          return normalizePathTrailingSlash;
        }
      });
      var _removetrailingslash = require_remove_trailing_slash();
      var _parsepath = require_parse_path();
      var normalizePathTrailingSlash = (path) => {
        if (!path.startsWith("/") || process.env.__NEXT_MANUAL_TRAILING_SLASH) {
          return path;
        }
        const { pathname, query, hash } = (0, _parsepath.parsePath)(path);
        if (process.env.__NEXT_TRAILING_SLASH) {
          if (/\.[^/]+\/?$/.test(pathname)) {
            return "" + (0, _removetrailingslash.removeTrailingSlash)(pathname) + query + hash;
          } else if (pathname.endsWith("/")) {
            return "" + pathname + query + hash;
          } else {
            return pathname + "/" + query + hash;
          }
        }
        return "" + (0, _removetrailingslash.removeTrailingSlash)(pathname) + query + hash;
      };
      if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
        Object.defineProperty(exports.default, "__esModule", { value: true });
        Object.assign(exports.default, exports);
        module.exports = exports.default;
      }
    }
  });

  // node_modules/next/dist/shared/lib/router/utils/path-has-prefix.js
  var require_path_has_prefix = __commonJS({
    "node_modules/next/dist/shared/lib/router/utils/path-has-prefix.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      Object.defineProperty(exports, "pathHasPrefix", {
        enumerable: true,
        get: function() {
          return pathHasPrefix;
        }
      });
      var _parsepath = require_parse_path();
      function pathHasPrefix(path, prefix) {
        if (typeof path !== "string") {
          return false;
        }
        const { pathname } = (0, _parsepath.parsePath)(path);
        return pathname === prefix || pathname.startsWith(prefix + "/");
      }
    }
  });

  // node_modules/next/dist/client/has-base-path.js
  var require_has_base_path = __commonJS({
    "node_modules/next/dist/client/has-base-path.js"(exports, module) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      Object.defineProperty(exports, "hasBasePath", {
        enumerable: true,
        get: function() {
          return hasBasePath;
        }
      });
      var _pathhasprefix = require_path_has_prefix();
      var basePath = process.env.__NEXT_ROUTER_BASEPATH || "";
      function hasBasePath(path) {
        return (0, _pathhasprefix.pathHasPrefix)(path, basePath);
      }
      if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
        Object.defineProperty(exports.default, "__esModule", { value: true });
        Object.assign(exports.default, exports);
        module.exports = exports.default;
      }
    }
  });

  // node_modules/next/dist/shared/lib/router/utils/is-local-url.js
  var require_is_local_url = __commonJS({
    "node_modules/next/dist/shared/lib/router/utils/is-local-url.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      Object.defineProperty(exports, "isLocalURL", {
        enumerable: true,
        get: function() {
          return isLocalURL;
        }
      });
      var _utils = require_utils();
      var _hasbasepath = require_has_base_path();
      function isLocalURL(url) {
        if (!(0, _utils.isAbsoluteUrl)(url)) return true;
        try {
          const locationOrigin = (0, _utils.getLocationOrigin)();
          const resolved = new URL(url, locationOrigin);
          return resolved.origin === locationOrigin && (0, _hasbasepath.hasBasePath)(resolved.pathname);
        } catch (_) {
          return false;
        }
      }
    }
  });

  // node_modules/next/dist/shared/lib/router/utils/sorted-routes.js
  var require_sorted_routes = __commonJS({
    "node_modules/next/dist/shared/lib/router/utils/sorted-routes.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      function _export(target, all) {
        for (var name in all) Object.defineProperty(target, name, {
          enumerable: true,
          get: all[name]
        });
      }
      _export(exports, {
        getSortedRouteObjects: function() {
          return getSortedRouteObjects;
        },
        getSortedRoutes: function() {
          return getSortedRoutes;
        }
      });
      var UrlNode = class _UrlNode {
        insert(urlPath) {
          this._insert(urlPath.split("/").filter(Boolean), [], false);
        }
        smoosh() {
          return this._smoosh();
        }
        _smoosh(prefix) {
          if (prefix === void 0) prefix = "/";
          const childrenPaths = [
            ...this.children.keys()
          ].sort();
          if (this.slugName !== null) {
            childrenPaths.splice(childrenPaths.indexOf("[]"), 1);
          }
          if (this.restSlugName !== null) {
            childrenPaths.splice(childrenPaths.indexOf("[...]"), 1);
          }
          if (this.optionalRestSlugName !== null) {
            childrenPaths.splice(childrenPaths.indexOf("[[...]]"), 1);
          }
          const routes = childrenPaths.map((c) => this.children.get(c)._smoosh("" + prefix + c + "/")).reduce((prev, curr) => [
            ...prev,
            ...curr
          ], []);
          if (this.slugName !== null) {
            routes.push(...this.children.get("[]")._smoosh(prefix + "[" + this.slugName + "]/"));
          }
          if (!this.placeholder) {
            const r2 = prefix === "/" ? "/" : prefix.slice(0, -1);
            if (this.optionalRestSlugName != null) {
              throw new Error('You cannot define a route with the same specificity as a optional catch-all route ("' + r2 + '" and "' + r2 + "[[..." + this.optionalRestSlugName + ']]").');
            }
            routes.unshift(r2);
          }
          if (this.restSlugName !== null) {
            routes.push(...this.children.get("[...]")._smoosh(prefix + "[..." + this.restSlugName + "]/"));
          }
          if (this.optionalRestSlugName !== null) {
            routes.push(...this.children.get("[[...]]")._smoosh(prefix + "[[..." + this.optionalRestSlugName + "]]/"));
          }
          return routes;
        }
        _insert(urlPaths, slugNames, isCatchAll) {
          if (urlPaths.length === 0) {
            this.placeholder = false;
            return;
          }
          if (isCatchAll) {
            throw new Error("Catch-all must be the last part of the URL.");
          }
          let nextSegment = urlPaths[0];
          if (nextSegment.startsWith("[") && nextSegment.endsWith("]")) {
            let handleSlug = function(previousSlug, nextSlug) {
              if (previousSlug !== null) {
                if (previousSlug !== nextSlug) {
                  throw new Error("You cannot use different slug names for the same dynamic path ('" + previousSlug + "' !== '" + nextSlug + "').");
                }
              }
              slugNames.forEach((slug) => {
                if (slug === nextSlug) {
                  throw new Error('You cannot have the same slug name "' + nextSlug + '" repeat within a single dynamic path');
                }
                if (slug.replace(/\W/g, "") === nextSegment.replace(/\W/g, "")) {
                  throw new Error('You cannot have the slug names "' + slug + '" and "' + nextSlug + '" differ only by non-word symbols within a single dynamic path');
                }
              });
              slugNames.push(nextSlug);
            };
            let segmentName = nextSegment.slice(1, -1);
            let isOptional = false;
            if (segmentName.startsWith("[") && segmentName.endsWith("]")) {
              segmentName = segmentName.slice(1, -1);
              isOptional = true;
            }
            if (segmentName.startsWith("\u2026")) {
              throw new Error("Detected a three-dot character ('\u2026') at ('" + segmentName + "'). Did you mean ('...')?");
            }
            if (segmentName.startsWith("...")) {
              segmentName = segmentName.substring(3);
              isCatchAll = true;
            }
            if (segmentName.startsWith("[") || segmentName.endsWith("]")) {
              throw new Error("Segment names may not start or end with extra brackets ('" + segmentName + "').");
            }
            if (segmentName.startsWith(".")) {
              throw new Error("Segment names may not start with erroneous periods ('" + segmentName + "').");
            }
            if (isCatchAll) {
              if (isOptional) {
                if (this.restSlugName != null) {
                  throw new Error('You cannot use both an required and optional catch-all route at the same level ("[...' + this.restSlugName + ']" and "' + urlPaths[0] + '" ).');
                }
                handleSlug(this.optionalRestSlugName, segmentName);
                this.optionalRestSlugName = segmentName;
                nextSegment = "[[...]]";
              } else {
                if (this.optionalRestSlugName != null) {
                  throw new Error('You cannot use both an optional and required catch-all route at the same level ("[[...' + this.optionalRestSlugName + ']]" and "' + urlPaths[0] + '").');
                }
                handleSlug(this.restSlugName, segmentName);
                this.restSlugName = segmentName;
                nextSegment = "[...]";
              }
            } else {
              if (isOptional) {
                throw new Error('Optional route parameters are not yet supported ("' + urlPaths[0] + '").');
              }
              handleSlug(this.slugName, segmentName);
              this.slugName = segmentName;
              nextSegment = "[]";
            }
          }
          if (!this.children.has(nextSegment)) {
            this.children.set(nextSegment, new _UrlNode());
          }
          this.children.get(nextSegment)._insert(urlPaths.slice(1), slugNames, isCatchAll);
        }
        constructor() {
          this.placeholder = true;
          this.children = /* @__PURE__ */ new Map();
          this.slugName = null;
          this.restSlugName = null;
          this.optionalRestSlugName = null;
        }
      };
      function getSortedRoutes(normalizedPages) {
        const root = new UrlNode();
        normalizedPages.forEach((pagePath) => root.insert(pagePath));
        return root.smoosh();
      }
      function getSortedRouteObjects(objects, getter) {
        const indexes = {};
        const pathnames = [];
        for (let i = 0; i < objects.length; i++) {
          const pathname = getter(objects[i]);
          indexes[pathname] = i;
          pathnames[i] = pathname;
        }
        const sorted = getSortedRoutes(pathnames);
        return sorted.map((pathname) => objects[indexes[pathname]]);
      }
    }
  });

  // node_modules/next/dist/shared/lib/page-path/ensure-leading-slash.js
  var require_ensure_leading_slash = __commonJS({
    "node_modules/next/dist/shared/lib/page-path/ensure-leading-slash.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      Object.defineProperty(exports, "ensureLeadingSlash", {
        enumerable: true,
        get: function() {
          return ensureLeadingSlash;
        }
      });
      function ensureLeadingSlash(path) {
        return path.startsWith("/") ? path : "/" + path;
      }
    }
  });

  // node_modules/next/dist/shared/lib/segment.js
  var require_segment = __commonJS({
    "node_modules/next/dist/shared/lib/segment.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      function _export(target, all) {
        for (var name in all) Object.defineProperty(target, name, {
          enumerable: true,
          get: all[name]
        });
      }
      _export(exports, {
        DEFAULT_SEGMENT_KEY: function() {
          return DEFAULT_SEGMENT_KEY;
        },
        PAGE_SEGMENT_KEY: function() {
          return PAGE_SEGMENT_KEY;
        },
        addSearchParamsIfPageSegment: function() {
          return addSearchParamsIfPageSegment;
        },
        isGroupSegment: function() {
          return isGroupSegment;
        },
        isParallelRouteSegment: function() {
          return isParallelRouteSegment;
        }
      });
      function isGroupSegment(segment) {
        return segment[0] === "(" && segment.endsWith(")");
      }
      function isParallelRouteSegment(segment) {
        return segment.startsWith("@") && segment !== "@children";
      }
      function addSearchParamsIfPageSegment(segment, searchParams) {
        const isPageSegment = segment.includes(PAGE_SEGMENT_KEY);
        if (isPageSegment) {
          const stringifiedQuery = JSON.stringify(searchParams);
          return stringifiedQuery !== "{}" ? PAGE_SEGMENT_KEY + "?" + stringifiedQuery : PAGE_SEGMENT_KEY;
        }
        return segment;
      }
      var PAGE_SEGMENT_KEY = "__PAGE__";
      var DEFAULT_SEGMENT_KEY = "__DEFAULT__";
    }
  });

  // node_modules/next/dist/shared/lib/router/utils/app-paths.js
  var require_app_paths = __commonJS({
    "node_modules/next/dist/shared/lib/router/utils/app-paths.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      function _export(target, all) {
        for (var name in all) Object.defineProperty(target, name, {
          enumerable: true,
          get: all[name]
        });
      }
      _export(exports, {
        normalizeAppPath: function() {
          return normalizeAppPath;
        },
        normalizeRscURL: function() {
          return normalizeRscURL;
        }
      });
      var _ensureleadingslash = require_ensure_leading_slash();
      var _segment = require_segment();
      function normalizeAppPath(route) {
        return (0, _ensureleadingslash.ensureLeadingSlash)(route.split("/").reduce((pathname, segment, index, segments) => {
          if (!segment) {
            return pathname;
          }
          if ((0, _segment.isGroupSegment)(segment)) {
            return pathname;
          }
          if (segment[0] === "@") {
            return pathname;
          }
          if ((segment === "page" || segment === "route") && index === segments.length - 1) {
            return pathname;
          }
          return pathname + "/" + segment;
        }, ""));
      }
      function normalizeRscURL(url) {
        return url.replace(
          /\.rsc($|\?)/,
          // $1 ensures `?` is preserved
          "$1"
        );
      }
    }
  });

  // node_modules/next/dist/server/lib/interception-routes.js
  var require_interception_routes = __commonJS({
    "node_modules/next/dist/server/lib/interception-routes.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      function _export(target, all) {
        for (var name in all) Object.defineProperty(target, name, {
          enumerable: true,
          get: all[name]
        });
      }
      _export(exports, {
        INTERCEPTION_ROUTE_MARKERS: function() {
          return INTERCEPTION_ROUTE_MARKERS;
        },
        extractInterceptionRouteInformation: function() {
          return extractInterceptionRouteInformation;
        },
        isInterceptionRouteAppPath: function() {
          return isInterceptionRouteAppPath;
        }
      });
      var _apppaths = require_app_paths();
      var INTERCEPTION_ROUTE_MARKERS = [
        "(..)(..)",
        "(.)",
        "(..)",
        "(...)"
      ];
      function isInterceptionRouteAppPath(path) {
        return path.split("/").find((segment) => INTERCEPTION_ROUTE_MARKERS.find((m) => segment.startsWith(m))) !== void 0;
      }
      function extractInterceptionRouteInformation(path) {
        let interceptingRoute, marker, interceptedRoute;
        for (const segment of path.split("/")) {
          marker = INTERCEPTION_ROUTE_MARKERS.find((m) => segment.startsWith(m));
          if (marker) {
            ;
            [interceptingRoute, interceptedRoute] = path.split(marker, 2);
            break;
          }
        }
        if (!interceptingRoute || !marker || !interceptedRoute) {
          throw new Error("Invalid interception route: ".concat(path, ". Must be in the format /<intercepting route>/(..|...|..)(..)/<intercepted route>"));
        }
        interceptingRoute = (0, _apppaths.normalizeAppPath)(interceptingRoute);
        switch (marker) {
          case "(.)":
            if (interceptingRoute === "/") {
              interceptedRoute = "/".concat(interceptedRoute);
            } else {
              interceptedRoute = interceptingRoute + "/" + interceptedRoute;
            }
            break;
          case "(..)":
            if (interceptingRoute === "/") {
              throw new Error("Invalid interception route: ".concat(path, ". Cannot use (..) marker at the root level, use (.) instead."));
            }
            interceptedRoute = interceptingRoute.split("/").slice(0, -1).concat(interceptedRoute).join("/");
            break;
          case "(...)":
            interceptedRoute = "/" + interceptedRoute;
            break;
          case "(..)(..)":
            const splitInterceptingRoute = interceptingRoute.split("/");
            if (splitInterceptingRoute.length <= 2) {
              throw new Error("Invalid interception route: ".concat(path, ". Cannot use (..)(..) marker at the root level or one level up."));
            }
            interceptedRoute = splitInterceptingRoute.slice(0, -2).concat(interceptedRoute).join("/");
            break;
          default:
            throw new Error("Invariant: unexpected marker");
        }
        return {
          interceptingRoute,
          interceptedRoute
        };
      }
    }
  });

  // node_modules/next/dist/shared/lib/router/utils/is-dynamic.js
  var require_is_dynamic = __commonJS({
    "node_modules/next/dist/shared/lib/router/utils/is-dynamic.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      Object.defineProperty(exports, "isDynamicRoute", {
        enumerable: true,
        get: function() {
          return isDynamicRoute;
        }
      });
      var _interceptionroutes = require_interception_routes();
      var TEST_ROUTE = /\/\[[^/]+?\](?=\/|$)/;
      function isDynamicRoute(route) {
        if ((0, _interceptionroutes.isInterceptionRouteAppPath)(route)) {
          route = (0, _interceptionroutes.extractInterceptionRouteInformation)(route).interceptedRoute;
        }
        return TEST_ROUTE.test(route);
      }
    }
  });

  // node_modules/next/dist/shared/lib/router/utils/index.js
  var require_utils2 = __commonJS({
    "node_modules/next/dist/shared/lib/router/utils/index.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      function _export(target, all) {
        for (var name in all) Object.defineProperty(target, name, {
          enumerable: true,
          get: all[name]
        });
      }
      _export(exports, {
        getSortedRouteObjects: function() {
          return _sortedroutes.getSortedRouteObjects;
        },
        getSortedRoutes: function() {
          return _sortedroutes.getSortedRoutes;
        },
        isDynamicRoute: function() {
          return _isdynamic.isDynamicRoute;
        }
      });
      var _sortedroutes = require_sorted_routes();
      var _isdynamic = require_is_dynamic();
    }
  });

  // node_modules/next/dist/shared/lib/router/utils/route-matcher.js
  var require_route_matcher = __commonJS({
    "node_modules/next/dist/shared/lib/router/utils/route-matcher.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      Object.defineProperty(exports, "getRouteMatcher", {
        enumerable: true,
        get: function() {
          return getRouteMatcher;
        }
      });
      var _utils = require_utils();
      function getRouteMatcher(param) {
        let { re, groups } = param;
        return (pathname) => {
          const routeMatch = re.exec(pathname);
          if (!routeMatch) {
            return false;
          }
          const decode = (param2) => {
            try {
              return decodeURIComponent(param2);
            } catch (_) {
              throw new _utils.DecodeError("failed to decode param");
            }
          };
          const params = {};
          Object.keys(groups).forEach((slugName) => {
            const g = groups[slugName];
            const m = routeMatch[g.pos];
            if (m !== void 0) {
              params[slugName] = ~m.indexOf("/") ? m.split("/").map((entry) => decode(entry)) : g.repeat ? [
                decode(m)
              ] : decode(m);
            }
          });
          return params;
        };
      }
    }
  });

  // node_modules/next/dist/lib/constants.js
  var require_constants = __commonJS({
    "node_modules/next/dist/lib/constants.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      function _export(target, all) {
        for (var name in all) Object.defineProperty(target, name, {
          enumerable: true,
          get: all[name]
        });
      }
      _export(exports, {
        ACTION_SUFFIX: function() {
          return ACTION_SUFFIX;
        },
        APP_DIR_ALIAS: function() {
          return APP_DIR_ALIAS;
        },
        CACHE_ONE_YEAR: function() {
          return CACHE_ONE_YEAR;
        },
        DOT_NEXT_ALIAS: function() {
          return DOT_NEXT_ALIAS;
        },
        ESLINT_DEFAULT_DIRS: function() {
          return ESLINT_DEFAULT_DIRS;
        },
        GSP_NO_RETURNED_VALUE: function() {
          return GSP_NO_RETURNED_VALUE;
        },
        GSSP_COMPONENT_MEMBER_ERROR: function() {
          return GSSP_COMPONENT_MEMBER_ERROR;
        },
        GSSP_NO_RETURNED_VALUE: function() {
          return GSSP_NO_RETURNED_VALUE;
        },
        INFINITE_CACHE: function() {
          return INFINITE_CACHE;
        },
        INSTRUMENTATION_HOOK_FILENAME: function() {
          return INSTRUMENTATION_HOOK_FILENAME;
        },
        MATCHED_PATH_HEADER: function() {
          return MATCHED_PATH_HEADER;
        },
        MIDDLEWARE_FILENAME: function() {
          return MIDDLEWARE_FILENAME;
        },
        MIDDLEWARE_LOCATION_REGEXP: function() {
          return MIDDLEWARE_LOCATION_REGEXP;
        },
        NEXT_BODY_SUFFIX: function() {
          return NEXT_BODY_SUFFIX;
        },
        NEXT_CACHE_IMPLICIT_TAG_ID: function() {
          return NEXT_CACHE_IMPLICIT_TAG_ID;
        },
        NEXT_CACHE_REVALIDATED_TAGS_HEADER: function() {
          return NEXT_CACHE_REVALIDATED_TAGS_HEADER;
        },
        NEXT_CACHE_REVALIDATE_TAG_TOKEN_HEADER: function() {
          return NEXT_CACHE_REVALIDATE_TAG_TOKEN_HEADER;
        },
        NEXT_CACHE_SOFT_TAGS_HEADER: function() {
          return NEXT_CACHE_SOFT_TAGS_HEADER;
        },
        NEXT_CACHE_SOFT_TAG_MAX_LENGTH: function() {
          return NEXT_CACHE_SOFT_TAG_MAX_LENGTH;
        },
        NEXT_CACHE_TAGS_HEADER: function() {
          return NEXT_CACHE_TAGS_HEADER;
        },
        NEXT_CACHE_TAG_MAX_ITEMS: function() {
          return NEXT_CACHE_TAG_MAX_ITEMS;
        },
        NEXT_CACHE_TAG_MAX_LENGTH: function() {
          return NEXT_CACHE_TAG_MAX_LENGTH;
        },
        NEXT_DATA_SUFFIX: function() {
          return NEXT_DATA_SUFFIX;
        },
        NEXT_INTERCEPTION_MARKER_PREFIX: function() {
          return NEXT_INTERCEPTION_MARKER_PREFIX;
        },
        NEXT_META_SUFFIX: function() {
          return NEXT_META_SUFFIX;
        },
        NEXT_QUERY_PARAM_PREFIX: function() {
          return NEXT_QUERY_PARAM_PREFIX;
        },
        NEXT_RESUME_HEADER: function() {
          return NEXT_RESUME_HEADER;
        },
        NON_STANDARD_NODE_ENV: function() {
          return NON_STANDARD_NODE_ENV;
        },
        PAGES_DIR_ALIAS: function() {
          return PAGES_DIR_ALIAS;
        },
        PRERENDER_REVALIDATE_HEADER: function() {
          return PRERENDER_REVALIDATE_HEADER;
        },
        PRERENDER_REVALIDATE_ONLY_GENERATED_HEADER: function() {
          return PRERENDER_REVALIDATE_ONLY_GENERATED_HEADER;
        },
        PUBLIC_DIR_MIDDLEWARE_CONFLICT: function() {
          return PUBLIC_DIR_MIDDLEWARE_CONFLICT;
        },
        ROOT_DIR_ALIAS: function() {
          return ROOT_DIR_ALIAS;
        },
        RSC_ACTION_CLIENT_WRAPPER_ALIAS: function() {
          return RSC_ACTION_CLIENT_WRAPPER_ALIAS;
        },
        RSC_ACTION_ENCRYPTION_ALIAS: function() {
          return RSC_ACTION_ENCRYPTION_ALIAS;
        },
        RSC_ACTION_PROXY_ALIAS: function() {
          return RSC_ACTION_PROXY_ALIAS;
        },
        RSC_ACTION_VALIDATE_ALIAS: function() {
          return RSC_ACTION_VALIDATE_ALIAS;
        },
        RSC_CACHE_WRAPPER_ALIAS: function() {
          return RSC_CACHE_WRAPPER_ALIAS;
        },
        RSC_MOD_REF_PROXY_ALIAS: function() {
          return RSC_MOD_REF_PROXY_ALIAS;
        },
        RSC_PREFETCH_SUFFIX: function() {
          return RSC_PREFETCH_SUFFIX;
        },
        RSC_SEGMENTS_DIR_SUFFIX: function() {
          return RSC_SEGMENTS_DIR_SUFFIX;
        },
        RSC_SEGMENT_SUFFIX: function() {
          return RSC_SEGMENT_SUFFIX;
        },
        RSC_SUFFIX: function() {
          return RSC_SUFFIX;
        },
        SERVER_PROPS_EXPORT_ERROR: function() {
          return SERVER_PROPS_EXPORT_ERROR;
        },
        SERVER_PROPS_GET_INIT_PROPS_CONFLICT: function() {
          return SERVER_PROPS_GET_INIT_PROPS_CONFLICT;
        },
        SERVER_PROPS_SSG_CONFLICT: function() {
          return SERVER_PROPS_SSG_CONFLICT;
        },
        SERVER_RUNTIME: function() {
          return SERVER_RUNTIME;
        },
        SSG_FALLBACK_EXPORT_ERROR: function() {
          return SSG_FALLBACK_EXPORT_ERROR;
        },
        SSG_GET_INITIAL_PROPS_CONFLICT: function() {
          return SSG_GET_INITIAL_PROPS_CONFLICT;
        },
        STATIC_STATUS_PAGE_GET_INITIAL_PROPS_ERROR: function() {
          return STATIC_STATUS_PAGE_GET_INITIAL_PROPS_ERROR;
        },
        UNSTABLE_REVALIDATE_RENAME_ERROR: function() {
          return UNSTABLE_REVALIDATE_RENAME_ERROR;
        },
        WEBPACK_LAYERS: function() {
          return WEBPACK_LAYERS;
        },
        WEBPACK_RESOURCE_QUERIES: function() {
          return WEBPACK_RESOURCE_QUERIES;
        }
      });
      var NEXT_QUERY_PARAM_PREFIX = "nxtP";
      var NEXT_INTERCEPTION_MARKER_PREFIX = "nxtI";
      var MATCHED_PATH_HEADER = "x-matched-path";
      var PRERENDER_REVALIDATE_HEADER = "x-prerender-revalidate";
      var PRERENDER_REVALIDATE_ONLY_GENERATED_HEADER = "x-prerender-revalidate-if-generated";
      var RSC_PREFETCH_SUFFIX = ".prefetch.rsc";
      var RSC_SEGMENTS_DIR_SUFFIX = ".segments";
      var RSC_SEGMENT_SUFFIX = ".segment.rsc";
      var RSC_SUFFIX = ".rsc";
      var ACTION_SUFFIX = ".action";
      var NEXT_DATA_SUFFIX = ".json";
      var NEXT_META_SUFFIX = ".meta";
      var NEXT_BODY_SUFFIX = ".body";
      var NEXT_CACHE_TAGS_HEADER = "x-next-cache-tags";
      var NEXT_CACHE_SOFT_TAGS_HEADER = "x-next-cache-soft-tags";
      var NEXT_CACHE_REVALIDATED_TAGS_HEADER = "x-next-revalidated-tags";
      var NEXT_CACHE_REVALIDATE_TAG_TOKEN_HEADER = "x-next-revalidate-tag-token";
      var NEXT_RESUME_HEADER = "next-resume";
      var NEXT_CACHE_TAG_MAX_ITEMS = 128;
      var NEXT_CACHE_TAG_MAX_LENGTH = 256;
      var NEXT_CACHE_SOFT_TAG_MAX_LENGTH = 1024;
      var NEXT_CACHE_IMPLICIT_TAG_ID = "_N_T_";
      var CACHE_ONE_YEAR = 31536e3;
      var INFINITE_CACHE = 4294967294;
      var MIDDLEWARE_FILENAME = "middleware";
      var MIDDLEWARE_LOCATION_REGEXP = "(?:src/)?".concat(MIDDLEWARE_FILENAME);
      var INSTRUMENTATION_HOOK_FILENAME = "instrumentation";
      var PAGES_DIR_ALIAS = "private-next-pages";
      var DOT_NEXT_ALIAS = "private-dot-next";
      var ROOT_DIR_ALIAS = "private-next-root-dir";
      var APP_DIR_ALIAS = "private-next-app-dir";
      var RSC_MOD_REF_PROXY_ALIAS = "private-next-rsc-mod-ref-proxy";
      var RSC_ACTION_VALIDATE_ALIAS = "private-next-rsc-action-validate";
      var RSC_ACTION_PROXY_ALIAS = "private-next-rsc-server-reference";
      var RSC_CACHE_WRAPPER_ALIAS = "private-next-rsc-cache-wrapper";
      var RSC_ACTION_ENCRYPTION_ALIAS = "private-next-rsc-action-encryption";
      var RSC_ACTION_CLIENT_WRAPPER_ALIAS = "private-next-rsc-action-client-wrapper";
      var PUBLIC_DIR_MIDDLEWARE_CONFLICT = "You can not have a '_next' folder inside of your public folder. This conflicts with the internal '/_next' route. https://nextjs.org/docs/messages/public-next-folder-conflict";
      var SSG_GET_INITIAL_PROPS_CONFLICT = "You can not use getInitialProps with getStaticProps. To use SSG, please remove your getInitialProps";
      var SERVER_PROPS_GET_INIT_PROPS_CONFLICT = "You can not use getInitialProps with getServerSideProps. Please remove getInitialProps.";
      var SERVER_PROPS_SSG_CONFLICT = "You can not use getStaticProps or getStaticPaths with getServerSideProps. To use SSG, please remove getServerSideProps";
      var STATIC_STATUS_PAGE_GET_INITIAL_PROPS_ERROR = "can not have getInitialProps/getServerSideProps, https://nextjs.org/docs/messages/404-get-initial-props";
      var SERVER_PROPS_EXPORT_ERROR = "pages with `getServerSideProps` can not be exported. See more info here: https://nextjs.org/docs/messages/gssp-export";
      var GSP_NO_RETURNED_VALUE = "Your `getStaticProps` function did not return an object. Did you forget to add a `return`?";
      var GSSP_NO_RETURNED_VALUE = "Your `getServerSideProps` function did not return an object. Did you forget to add a `return`?";
      var UNSTABLE_REVALIDATE_RENAME_ERROR = "The `unstable_revalidate` property is available for general use.\nPlease use `revalidate` instead.";
      var GSSP_COMPONENT_MEMBER_ERROR = "can not be attached to a page's component and must be exported from the page. See more info here: https://nextjs.org/docs/messages/gssp-component-member";
      var NON_STANDARD_NODE_ENV = 'You are using a non-standard "NODE_ENV" value in your environment. This creates inconsistencies in the project and is strongly advised against. Read more: https://nextjs.org/docs/messages/non-standard-node-env';
      var SSG_FALLBACK_EXPORT_ERROR = "Pages with `fallback` enabled in `getStaticPaths` can not be exported. See more info here: https://nextjs.org/docs/messages/ssg-fallback-true-export";
      var ESLINT_DEFAULT_DIRS = [
        "app",
        "pages",
        "components",
        "lib",
        "src"
      ];
      var SERVER_RUNTIME = {
        edge: "edge",
        experimentalEdge: "experimental-edge",
        nodejs: "nodejs"
      };
      var WEBPACK_LAYERS_NAMES = {
        /**
        * The layer for the shared code between the client and server bundles.
        */
        shared: "shared",
        /**
        * The layer for server-only runtime and picking up `react-server` export conditions.
        * Including app router RSC pages and app router custom routes and metadata routes.
        */
        reactServerComponents: "rsc",
        /**
        * Server Side Rendering layer for app (ssr).
        */
        serverSideRendering: "ssr",
        /**
        * The browser client bundle layer for actions.
        */
        actionBrowser: "action-browser",
        /**
        * The layer for the API routes.
        */
        api: "api",
        /**
        * The layer for the middleware code.
        */
        middleware: "middleware",
        /**
        * The layer for the instrumentation hooks.
        */
        instrument: "instrument",
        /**
        * The layer for assets on the edge.
        */
        edgeAsset: "edge-asset",
        /**
        * The browser client bundle layer for App directory.
        */
        appPagesBrowser: "app-pages-browser"
      };
      var WEBPACK_LAYERS = __spreadProps(__spreadValues({}, WEBPACK_LAYERS_NAMES), {
        GROUP: {
          builtinReact: [
            WEBPACK_LAYERS_NAMES.reactServerComponents,
            WEBPACK_LAYERS_NAMES.actionBrowser
          ],
          serverOnly: [
            WEBPACK_LAYERS_NAMES.reactServerComponents,
            WEBPACK_LAYERS_NAMES.actionBrowser,
            WEBPACK_LAYERS_NAMES.instrument,
            WEBPACK_LAYERS_NAMES.middleware
          ],
          neutralTarget: [
            // pages api
            WEBPACK_LAYERS_NAMES.api
          ],
          clientOnly: [
            WEBPACK_LAYERS_NAMES.serverSideRendering,
            WEBPACK_LAYERS_NAMES.appPagesBrowser
          ],
          bundled: [
            WEBPACK_LAYERS_NAMES.reactServerComponents,
            WEBPACK_LAYERS_NAMES.actionBrowser,
            WEBPACK_LAYERS_NAMES.serverSideRendering,
            WEBPACK_LAYERS_NAMES.appPagesBrowser,
            WEBPACK_LAYERS_NAMES.shared,
            WEBPACK_LAYERS_NAMES.instrument
          ],
          appPages: [
            // app router pages and layouts
            WEBPACK_LAYERS_NAMES.reactServerComponents,
            WEBPACK_LAYERS_NAMES.serverSideRendering,
            WEBPACK_LAYERS_NAMES.appPagesBrowser,
            WEBPACK_LAYERS_NAMES.actionBrowser
          ]
        }
      });
      var WEBPACK_RESOURCE_QUERIES = {
        edgeSSREntry: "__next_edge_ssr_entry__",
        metadata: "__next_metadata__",
        metadataRoute: "__next_metadata_route__",
        metadataImageMeta: "__next_metadata_image_meta__"
      };
    }
  });

  // node_modules/next/dist/shared/lib/escape-regexp.js
  var require_escape_regexp = __commonJS({
    "node_modules/next/dist/shared/lib/escape-regexp.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      Object.defineProperty(exports, "escapeStringRegexp", {
        enumerable: true,
        get: function() {
          return escapeStringRegexp;
        }
      });
      var reHasRegExp = /[|\\{}()[\]^$+*?.-]/;
      var reReplaceRegExp = /[|\\{}()[\]^$+*?.-]/g;
      function escapeStringRegexp(str) {
        if (reHasRegExp.test(str)) {
          return str.replace(reReplaceRegExp, "\\$&");
        }
        return str;
      }
    }
  });

  // node_modules/next/dist/shared/lib/router/utils/route-regex.js
  var require_route_regex = __commonJS({
    "node_modules/next/dist/shared/lib/router/utils/route-regex.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      function _export(target, all) {
        for (var name in all) Object.defineProperty(target, name, {
          enumerable: true,
          get: all[name]
        });
      }
      _export(exports, {
        getNamedMiddlewareRegex: function() {
          return getNamedMiddlewareRegex;
        },
        getNamedRouteRegex: function() {
          return getNamedRouteRegex;
        },
        getRouteRegex: function() {
          return getRouteRegex;
        },
        parseParameter: function() {
          return parseParameter;
        }
      });
      var _constants = require_constants();
      var _interceptionroutes = require_interception_routes();
      var _escaperegexp = require_escape_regexp();
      var _removetrailingslash = require_remove_trailing_slash();
      var PARAMETER_PATTERN = /\[((?:\[.*\])|.+)\]/;
      function parseParameter(param) {
        const match = param.match(PARAMETER_PATTERN);
        if (!match) {
          return parseMatchedParameter(param);
        }
        return parseMatchedParameter(match[1]);
      }
      function parseMatchedParameter(param) {
        const optional = param.startsWith("[") && param.endsWith("]");
        if (optional) {
          param = param.slice(1, -1);
        }
        const repeat = param.startsWith("...");
        if (repeat) {
          param = param.slice(3);
        }
        return {
          key: param,
          repeat,
          optional
        };
      }
      function getParametrizedRoute(route) {
        const segments = (0, _removetrailingslash.removeTrailingSlash)(route).slice(1).split("/");
        const groups = {};
        let groupIndex = 1;
        return {
          parameterizedRoute: segments.map((segment) => {
            const markerMatch = _interceptionroutes.INTERCEPTION_ROUTE_MARKERS.find((m) => segment.startsWith(m));
            const paramMatches = segment.match(PARAMETER_PATTERN);
            if (markerMatch && paramMatches) {
              const { key, optional, repeat } = parseMatchedParameter(paramMatches[1]);
              groups[key] = {
                pos: groupIndex++,
                repeat,
                optional
              };
              return "/" + (0, _escaperegexp.escapeStringRegexp)(markerMatch) + "([^/]+?)";
            } else if (paramMatches) {
              const { key, repeat, optional } = parseMatchedParameter(paramMatches[1]);
              groups[key] = {
                pos: groupIndex++,
                repeat,
                optional
              };
              return repeat ? optional ? "(?:/(.+?))?" : "/(.+?)" : "/([^/]+?)";
            } else {
              return "/" + (0, _escaperegexp.escapeStringRegexp)(segment);
            }
          }).join(""),
          groups
        };
      }
      function getRouteRegex(normalizedRoute) {
        const { parameterizedRoute, groups } = getParametrizedRoute(normalizedRoute);
        return {
          re: new RegExp("^" + parameterizedRoute + "(?:/)?$"),
          groups
        };
      }
      function buildGetSafeRouteKey() {
        let i = 0;
        return () => {
          let routeKey = "";
          let j = ++i;
          while (j > 0) {
            routeKey += String.fromCharCode(97 + (j - 1) % 26);
            j = Math.floor((j - 1) / 26);
          }
          return routeKey;
        };
      }
      function getSafeKeyFromSegment(param) {
        let { interceptionMarker, getSafeRouteKey, segment, routeKeys, keyPrefix } = param;
        const { key, optional, repeat } = parseMatchedParameter(segment);
        let cleanedKey = key.replace(/\W/g, "");
        if (keyPrefix) {
          cleanedKey = "" + keyPrefix + cleanedKey;
        }
        let invalidKey = false;
        if (cleanedKey.length === 0 || cleanedKey.length > 30) {
          invalidKey = true;
        }
        if (!isNaN(parseInt(cleanedKey.slice(0, 1)))) {
          invalidKey = true;
        }
        if (invalidKey) {
          cleanedKey = getSafeRouteKey();
        }
        if (keyPrefix) {
          routeKeys[cleanedKey] = "" + keyPrefix + key;
        } else {
          routeKeys[cleanedKey] = key;
        }
        const interceptionPrefix = interceptionMarker ? (0, _escaperegexp.escapeStringRegexp)(interceptionMarker) : "";
        return repeat ? optional ? "(?:/" + interceptionPrefix + "(?<" + cleanedKey + ">.+?))?" : "/" + interceptionPrefix + "(?<" + cleanedKey + ">.+?)" : "/" + interceptionPrefix + "(?<" + cleanedKey + ">[^/]+?)";
      }
      function getNamedParametrizedRoute(route, prefixRouteKeys) {
        const segments = (0, _removetrailingslash.removeTrailingSlash)(route).slice(1).split("/");
        const getSafeRouteKey = buildGetSafeRouteKey();
        const routeKeys = {};
        return {
          namedParameterizedRoute: segments.map((segment) => {
            const hasInterceptionMarker = _interceptionroutes.INTERCEPTION_ROUTE_MARKERS.some((m) => segment.startsWith(m));
            const paramMatches = segment.match(/\[((?:\[.*\])|.+)\]/);
            if (hasInterceptionMarker && paramMatches) {
              const [usedMarker] = segment.split(paramMatches[0]);
              return getSafeKeyFromSegment({
                getSafeRouteKey,
                interceptionMarker: usedMarker,
                segment: paramMatches[1],
                routeKeys,
                keyPrefix: prefixRouteKeys ? _constants.NEXT_INTERCEPTION_MARKER_PREFIX : void 0
              });
            } else if (paramMatches) {
              return getSafeKeyFromSegment({
                getSafeRouteKey,
                segment: paramMatches[1],
                routeKeys,
                keyPrefix: prefixRouteKeys ? _constants.NEXT_QUERY_PARAM_PREFIX : void 0
              });
            } else {
              return "/" + (0, _escaperegexp.escapeStringRegexp)(segment);
            }
          }).join(""),
          routeKeys
        };
      }
      function getNamedRouteRegex(normalizedRoute, prefixRouteKey) {
        const result = getNamedParametrizedRoute(normalizedRoute, prefixRouteKey);
        return __spreadProps(__spreadValues({}, getRouteRegex(normalizedRoute)), {
          namedRegex: "^" + result.namedParameterizedRoute + "(?:/)?$",
          routeKeys: result.routeKeys
        });
      }
      function getNamedMiddlewareRegex(normalizedRoute, options) {
        const { parameterizedRoute } = getParametrizedRoute(normalizedRoute);
        const { catchAll = true } = options;
        if (parameterizedRoute === "/") {
          let catchAllRegex = catchAll ? ".*" : "";
          return {
            namedRegex: "^/" + catchAllRegex + "$"
          };
        }
        const { namedParameterizedRoute } = getNamedParametrizedRoute(normalizedRoute, false);
        let catchAllGroupedRegex = catchAll ? "(?:(/.*)?)" : "";
        return {
          namedRegex: "^" + namedParameterizedRoute + catchAllGroupedRegex + "$"
        };
      }
    }
  });

  // node_modules/next/dist/shared/lib/router/utils/interpolate-as.js
  var require_interpolate_as = __commonJS({
    "node_modules/next/dist/shared/lib/router/utils/interpolate-as.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      Object.defineProperty(exports, "interpolateAs", {
        enumerable: true,
        get: function() {
          return interpolateAs;
        }
      });
      var _routematcher = require_route_matcher();
      var _routeregex = require_route_regex();
      function interpolateAs(route, asPathname, query) {
        let interpolatedRoute = "";
        const dynamicRegex = (0, _routeregex.getRouteRegex)(route);
        const dynamicGroups = dynamicRegex.groups;
        const dynamicMatches = (
          // Try to match the dynamic route against the asPath
          (asPathname !== route ? (0, _routematcher.getRouteMatcher)(dynamicRegex)(asPathname) : "") || // Fall back to reading the values from the href
          // TODO: should this take priority; also need to change in the router.
          query
        );
        interpolatedRoute = route;
        const params = Object.keys(dynamicGroups);
        if (!params.every((param) => {
          let value = dynamicMatches[param] || "";
          const { repeat, optional } = dynamicGroups[param];
          let replaced = "[" + (repeat ? "..." : "") + param + "]";
          if (optional) {
            replaced = (!value ? "/" : "") + "[" + replaced + "]";
          }
          if (repeat && !Array.isArray(value)) value = [
            value
          ];
          return (optional || param in dynamicMatches) && // Interpolate group into data URL if present
          (interpolatedRoute = interpolatedRoute.replace(replaced, repeat ? value.map(
            // these values should be fully encoded instead of just
            // path delimiter escaped since they are being inserted
            // into the URL and we expect URL encoded segments
            // when parsing dynamic route params
            (segment) => encodeURIComponent(segment)
          ).join("/") : encodeURIComponent(value)) || "/");
        })) {
          interpolatedRoute = "";
        }
        return {
          params,
          result: interpolatedRoute
        };
      }
    }
  });

  // node_modules/next/dist/client/resolve-href.js
  var require_resolve_href = __commonJS({
    "node_modules/next/dist/client/resolve-href.js"(exports, module) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      Object.defineProperty(exports, "resolveHref", {
        enumerable: true,
        get: function() {
          return resolveHref;
        }
      });
      var _querystring = require_querystring();
      var _formaturl = require_format_url();
      var _omit = require_omit();
      var _utils = require_utils();
      var _normalizetrailingslash = require_normalize_trailing_slash();
      var _islocalurl = require_is_local_url();
      var _utils1 = require_utils2();
      var _interpolateas = require_interpolate_as();
      function resolveHref(router, href, resolveAs) {
        let base;
        let urlAsString = typeof href === "string" ? href : (0, _formaturl.formatWithValidation)(href);
        const urlProtoMatch = urlAsString.match(/^[a-zA-Z]{1,}:\/\//);
        const urlAsStringNoProto = urlProtoMatch ? urlAsString.slice(urlProtoMatch[0].length) : urlAsString;
        const urlParts = urlAsStringNoProto.split("?", 1);
        if ((urlParts[0] || "").match(/(\/\/|\\)/)) {
          console.error("Invalid href '" + urlAsString + "' passed to next/router in page: '" + router.pathname + "'. Repeated forward-slashes (//) or backslashes \\ are not valid in the href.");
          const normalizedUrl = (0, _utils.normalizeRepeatedSlashes)(urlAsStringNoProto);
          urlAsString = (urlProtoMatch ? urlProtoMatch[0] : "") + normalizedUrl;
        }
        if (!(0, _islocalurl.isLocalURL)(urlAsString)) {
          return resolveAs ? [
            urlAsString
          ] : urlAsString;
        }
        try {
          base = new URL(urlAsString.startsWith("#") ? router.asPath : router.pathname, "http://n");
        } catch (_) {
          base = new URL("/", "http://n");
        }
        try {
          const finalUrl = new URL(urlAsString, base);
          finalUrl.pathname = (0, _normalizetrailingslash.normalizePathTrailingSlash)(finalUrl.pathname);
          let interpolatedAs = "";
          if ((0, _utils1.isDynamicRoute)(finalUrl.pathname) && finalUrl.searchParams && resolveAs) {
            const query = (0, _querystring.searchParamsToUrlQuery)(finalUrl.searchParams);
            const { result, params } = (0, _interpolateas.interpolateAs)(finalUrl.pathname, finalUrl.pathname, query);
            if (result) {
              interpolatedAs = (0, _formaturl.formatWithValidation)({
                pathname: result,
                hash: finalUrl.hash,
                query: (0, _omit.omit)(query, params)
              });
            }
          }
          const resolvedHref = finalUrl.origin === base.origin ? finalUrl.href.slice(finalUrl.origin.length) : finalUrl.href;
          return resolveAs ? [
            resolvedHref,
            interpolatedAs || resolvedHref
          ] : resolvedHref;
        } catch (_) {
          return resolveAs ? [
            urlAsString
          ] : urlAsString;
        }
      }
      if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
        Object.defineProperty(exports.default, "__esModule", { value: true });
        Object.assign(exports.default, exports);
        module.exports = exports.default;
      }
    }
  });

  // node_modules/next/dist/shared/lib/router/utils/add-path-prefix.js
  var require_add_path_prefix = __commonJS({
    "node_modules/next/dist/shared/lib/router/utils/add-path-prefix.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      Object.defineProperty(exports, "addPathPrefix", {
        enumerable: true,
        get: function() {
          return addPathPrefix;
        }
      });
      var _parsepath = require_parse_path();
      function addPathPrefix(path, prefix) {
        if (!path.startsWith("/") || !prefix) {
          return path;
        }
        const { pathname, query, hash } = (0, _parsepath.parsePath)(path);
        return "" + prefix + pathname + query + hash;
      }
    }
  });

  // node_modules/next/dist/shared/lib/router/utils/add-locale.js
  var require_add_locale = __commonJS({
    "node_modules/next/dist/shared/lib/router/utils/add-locale.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      Object.defineProperty(exports, "addLocale", {
        enumerable: true,
        get: function() {
          return addLocale;
        }
      });
      var _addpathprefix = require_add_path_prefix();
      var _pathhasprefix = require_path_has_prefix();
      function addLocale(path, locale, defaultLocale, ignorePrefix) {
        if (!locale || locale === defaultLocale) return path;
        const lower = path.toLowerCase();
        if (!ignorePrefix) {
          if ((0, _pathhasprefix.pathHasPrefix)(lower, "/api")) return path;
          if ((0, _pathhasprefix.pathHasPrefix)(lower, "/" + locale.toLowerCase())) return path;
        }
        return (0, _addpathprefix.addPathPrefix)(path, "/" + locale);
      }
    }
  });

  // node_modules/next/dist/client/add-locale.js
  var require_add_locale2 = __commonJS({
    "node_modules/next/dist/client/add-locale.js"(exports, module) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      Object.defineProperty(exports, "addLocale", {
        enumerable: true,
        get: function() {
          return addLocale;
        }
      });
      var _normalizetrailingslash = require_normalize_trailing_slash();
      var addLocale = function(path) {
        for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
          args[_key - 1] = arguments[_key];
        }
        if (process.env.__NEXT_I18N_SUPPORT) {
          return (0, _normalizetrailingslash.normalizePathTrailingSlash)(require_add_locale().addLocale(path, ...args));
        }
        return path;
      };
      if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
        Object.defineProperty(exports.default, "__esModule", { value: true });
        Object.assign(exports.default, exports);
        module.exports = exports.default;
      }
    }
  });

  // node_modules/next/dist/shared/lib/router-context.shared-runtime.js
  var require_router_context_shared_runtime = __commonJS({
    "node_modules/next/dist/shared/lib/router-context.shared-runtime.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      Object.defineProperty(exports, "RouterContext", {
        enumerable: true,
        get: function() {
          return RouterContext;
        }
      });
      var _interop_require_default = require_interop_require_default();
      var _react = /* @__PURE__ */ _interop_require_default._(require_react());
      var RouterContext = _react.default.createContext(null);
      if (true) {
        RouterContext.displayName = "RouterContext";
      }
    }
  });

  // node_modules/next/dist/client/request-idle-callback.js
  var require_request_idle_callback = __commonJS({
    "node_modules/next/dist/client/request-idle-callback.js"(exports, module) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      function _export(target, all) {
        for (var name in all) Object.defineProperty(target, name, {
          enumerable: true,
          get: all[name]
        });
      }
      _export(exports, {
        cancelIdleCallback: function() {
          return cancelIdleCallback;
        },
        requestIdleCallback: function() {
          return requestIdleCallback;
        }
      });
      var requestIdleCallback = typeof self !== "undefined" && self.requestIdleCallback && self.requestIdleCallback.bind(window) || function(cb) {
        let start = Date.now();
        return self.setTimeout(function() {
          cb({
            didTimeout: false,
            timeRemaining: function() {
              return Math.max(0, 50 - (Date.now() - start));
            }
          });
        }, 1);
      };
      var cancelIdleCallback = typeof self !== "undefined" && self.cancelIdleCallback && self.cancelIdleCallback.bind(window) || function(id) {
        return clearTimeout(id);
      };
      if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
        Object.defineProperty(exports.default, "__esModule", { value: true });
        Object.assign(exports.default, exports);
        module.exports = exports.default;
      }
    }
  });

  // node_modules/next/dist/client/use-intersection.js
  var require_use_intersection = __commonJS({
    "node_modules/next/dist/client/use-intersection.js"(exports, module) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      Object.defineProperty(exports, "useIntersection", {
        enumerable: true,
        get: function() {
          return useIntersection;
        }
      });
      var _react = require_react();
      var _requestidlecallback = require_request_idle_callback();
      var hasIntersectionObserver = typeof IntersectionObserver === "function";
      var observers = /* @__PURE__ */ new Map();
      var idList = [];
      function createObserver(options) {
        const id = {
          root: options.root || null,
          margin: options.rootMargin || ""
        };
        const existing = idList.find((obj) => obj.root === id.root && obj.margin === id.margin);
        let instance;
        if (existing) {
          instance = observers.get(existing);
          if (instance) {
            return instance;
          }
        }
        const elements = /* @__PURE__ */ new Map();
        const observer = new IntersectionObserver((entries) => {
          entries.forEach((entry) => {
            const callback = elements.get(entry.target);
            const isVisible = entry.isIntersecting || entry.intersectionRatio > 0;
            if (callback && isVisible) {
              callback(isVisible);
            }
          });
        }, options);
        instance = {
          id,
          observer,
          elements
        };
        idList.push(id);
        observers.set(id, instance);
        return instance;
      }
      function observe(element, callback, options) {
        const { id, observer, elements } = createObserver(options);
        elements.set(element, callback);
        observer.observe(element);
        return function unobserve() {
          elements.delete(element);
          observer.unobserve(element);
          if (elements.size === 0) {
            observer.disconnect();
            observers.delete(id);
            const index = idList.findIndex((obj) => obj.root === id.root && obj.margin === id.margin);
            if (index > -1) {
              idList.splice(index, 1);
            }
          }
        };
      }
      function useIntersection(param) {
        let { rootRef, rootMargin, disabled } = param;
        const isDisabled = disabled || !hasIntersectionObserver;
        const [visible, setVisible] = (0, _react.useState)(false);
        const elementRef = (0, _react.useRef)(null);
        const setElement = (0, _react.useCallback)((element) => {
          elementRef.current = element;
        }, []);
        (0, _react.useEffect)(() => {
          if (hasIntersectionObserver) {
            if (isDisabled || visible) return;
            const element = elementRef.current;
            if (element && element.tagName) {
              const unobserve = observe(element, (isVisible) => isVisible && setVisible(isVisible), {
                root: rootRef == null ? void 0 : rootRef.current,
                rootMargin
              });
              return unobserve;
            }
          } else {
            if (!visible) {
              const idleCallback = (0, _requestidlecallback.requestIdleCallback)(() => setVisible(true));
              return () => (0, _requestidlecallback.cancelIdleCallback)(idleCallback);
            }
          }
        }, [
          isDisabled,
          rootMargin,
          rootRef,
          visible,
          elementRef.current
        ]);
        const resetVisible = (0, _react.useCallback)(() => {
          setVisible(false);
        }, []);
        return [
          setElement,
          visible,
          resetVisible
        ];
      }
      if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
        Object.defineProperty(exports.default, "__esModule", { value: true });
        Object.assign(exports.default, exports);
        module.exports = exports.default;
      }
    }
  });

  // node_modules/next/dist/shared/lib/i18n/normalize-locale-path.js
  var require_normalize_locale_path = __commonJS({
    "node_modules/next/dist/shared/lib/i18n/normalize-locale-path.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      Object.defineProperty(exports, "normalizeLocalePath", {
        enumerable: true,
        get: function() {
          return normalizeLocalePath;
        }
      });
      function normalizeLocalePath(pathname, locales) {
        let detectedLocale;
        const pathnameParts = pathname.split("/");
        (locales || []).some((locale) => {
          if (pathnameParts[1] && pathnameParts[1].toLowerCase() === locale.toLowerCase()) {
            detectedLocale = locale;
            pathnameParts.splice(1, 1);
            pathname = pathnameParts.join("/") || "/";
            return true;
          }
          return false;
        });
        return {
          pathname,
          detectedLocale
        };
      }
    }
  });

  // node_modules/next/dist/client/normalize-locale-path.js
  var require_normalize_locale_path2 = __commonJS({
    "node_modules/next/dist/client/normalize-locale-path.js"(exports, module) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      Object.defineProperty(exports, "normalizeLocalePath", {
        enumerable: true,
        get: function() {
          return normalizeLocalePath;
        }
      });
      var normalizeLocalePath = (pathname, locales) => {
        if (process.env.__NEXT_I18N_SUPPORT) {
          return require_normalize_locale_path().normalizeLocalePath(pathname, locales);
        }
        return {
          pathname,
          detectedLocale: void 0
        };
      };
      if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
        Object.defineProperty(exports.default, "__esModule", { value: true });
        Object.assign(exports.default, exports);
        module.exports = exports.default;
      }
    }
  });

  // node_modules/next/dist/shared/lib/i18n/detect-domain-locale.js
  var require_detect_domain_locale = __commonJS({
    "node_modules/next/dist/shared/lib/i18n/detect-domain-locale.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      Object.defineProperty(exports, "detectDomainLocale", {
        enumerable: true,
        get: function() {
          return detectDomainLocale;
        }
      });
      function detectDomainLocale(domainItems, hostname, detectedLocale) {
        if (!domainItems) return;
        if (detectedLocale) {
          detectedLocale = detectedLocale.toLowerCase();
        }
        for (const item of domainItems) {
          var _item_domain, _item_locales;
          const domainHostname = (_item_domain = item.domain) == null ? void 0 : _item_domain.split(":", 1)[0].toLowerCase();
          if (hostname === domainHostname || detectedLocale === item.defaultLocale.toLowerCase() || ((_item_locales = item.locales) == null ? void 0 : _item_locales.some((locale) => locale.toLowerCase() === detectedLocale))) {
            return item;
          }
        }
      }
    }
  });

  // node_modules/next/dist/client/detect-domain-locale.js
  var require_detect_domain_locale2 = __commonJS({
    "node_modules/next/dist/client/detect-domain-locale.js"(exports, module) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      Object.defineProperty(exports, "detectDomainLocale", {
        enumerable: true,
        get: function() {
          return detectDomainLocale;
        }
      });
      var detectDomainLocale = function() {
        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }
        if (process.env.__NEXT_I18N_SUPPORT) {
          return require_detect_domain_locale().detectDomainLocale(...args);
        }
      };
      if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
        Object.defineProperty(exports.default, "__esModule", { value: true });
        Object.assign(exports.default, exports);
        module.exports = exports.default;
      }
    }
  });

  // node_modules/next/dist/client/get-domain-locale.js
  var require_get_domain_locale = __commonJS({
    "node_modules/next/dist/client/get-domain-locale.js"(exports, module) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      Object.defineProperty(exports, "getDomainLocale", {
        enumerable: true,
        get: function() {
          return getDomainLocale;
        }
      });
      var _normalizetrailingslash = require_normalize_trailing_slash();
      var basePath = process.env.__NEXT_ROUTER_BASEPATH || "";
      function getDomainLocale(path, locale, locales, domainLocales) {
        if (process.env.__NEXT_I18N_SUPPORT) {
          const normalizeLocalePath = require_normalize_locale_path2().normalizeLocalePath;
          const detectDomainLocale = require_detect_domain_locale2().detectDomainLocale;
          const target = locale || normalizeLocalePath(path, locales).detectedLocale;
          const domain = detectDomainLocale(domainLocales, void 0, target);
          if (domain) {
            const proto = "http" + (domain.http ? "" : "s") + "://";
            const finalLocale = target === domain.defaultLocale ? "" : "/" + target;
            return "" + proto + domain.domain + (0, _normalizetrailingslash.normalizePathTrailingSlash)("" + basePath + finalLocale + path);
          }
          return false;
        } else {
          return false;
        }
      }
      if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
        Object.defineProperty(exports.default, "__esModule", { value: true });
        Object.assign(exports.default, exports);
        module.exports = exports.default;
      }
    }
  });

  // node_modules/next/dist/client/add-base-path.js
  var require_add_base_path = __commonJS({
    "node_modules/next/dist/client/add-base-path.js"(exports, module) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      Object.defineProperty(exports, "addBasePath", {
        enumerable: true,
        get: function() {
          return addBasePath;
        }
      });
      var _addpathprefix = require_add_path_prefix();
      var _normalizetrailingslash = require_normalize_trailing_slash();
      var basePath = process.env.__NEXT_ROUTER_BASEPATH || "";
      function addBasePath(path, required) {
        return (0, _normalizetrailingslash.normalizePathTrailingSlash)(process.env.__NEXT_MANUAL_CLIENT_BASE_PATH && !required ? path : (0, _addpathprefix.addPathPrefix)(path, basePath));
      }
      if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
        Object.defineProperty(exports.default, "__esModule", { value: true });
        Object.assign(exports.default, exports);
        module.exports = exports.default;
      }
    }
  });

  // node_modules/next/dist/client/use-merged-ref.js
  var require_use_merged_ref = __commonJS({
    "node_modules/next/dist/client/use-merged-ref.js"(exports, module) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      Object.defineProperty(exports, "useMergedRef", {
        enumerable: true,
        get: function() {
          return useMergedRef;
        }
      });
      var _react = require_react();
      function useMergedRef(refA, refB) {
        const cleanupA = (0, _react.useRef)(() => {
        });
        const cleanupB = (0, _react.useRef)(() => {
        });
        return (0, _react.useMemo)(() => {
          if (!refA || !refB) {
            return refA || refB;
          }
          return (current) => {
            if (current === null) {
              cleanupA.current();
              cleanupB.current();
            } else {
              cleanupA.current = applyRef(refA, current);
              cleanupB.current = applyRef(refB, current);
            }
          };
        }, [
          refA,
          refB
        ]);
      }
      function applyRef(refA, current) {
        if (typeof refA === "function") {
          const cleanup = refA(current);
          if (typeof cleanup === "function") {
            return cleanup;
          } else {
            return () => refA(null);
          }
        } else {
          refA.current = current;
          return () => {
            refA.current = null;
          };
        }
      }
      if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
        Object.defineProperty(exports.default, "__esModule", { value: true });
        Object.assign(exports.default, exports);
        module.exports = exports.default;
      }
    }
  });

  // node_modules/next/dist/client/link.js
  var require_link = __commonJS({
    "node_modules/next/dist/client/link.js"(exports, module) {
      "use client";
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      Object.defineProperty(exports, "default", {
        enumerable: true,
        get: function() {
          return _default;
        }
      });
      var _interop_require_default = require_interop_require_default();
      var _jsxruntime = require_jsx_runtime();
      var _react = /* @__PURE__ */ _interop_require_default._(require_react());
      var _resolvehref = require_resolve_href();
      var _islocalurl = require_is_local_url();
      var _formaturl = require_format_url();
      var _utils = require_utils();
      var _addlocale = require_add_locale2();
      var _routercontextsharedruntime = require_router_context_shared_runtime();
      var _useintersection = require_use_intersection();
      var _getdomainlocale = require_get_domain_locale();
      var _addbasepath = require_add_base_path();
      var _usemergedref = require_use_merged_ref();
      var prefetched = /* @__PURE__ */ new Set();
      function prefetch(router, href, as, options) {
        if (typeof window === "undefined") {
          return;
        }
        if (!(0, _islocalurl.isLocalURL)(href)) {
          return;
        }
        if (!options.bypassPrefetchedCheck) {
          const locale = (
            // Let the link's locale prop override the default router locale.
            typeof options.locale !== "undefined" ? options.locale : "locale" in router ? router.locale : void 0
          );
          const prefetchedKey = href + "%" + as + "%" + locale;
          if (prefetched.has(prefetchedKey)) {
            return;
          }
          prefetched.add(prefetchedKey);
        }
        router.prefetch(href, as, options).catch((err) => {
          if (true) {
            throw err;
          }
        });
      }
      function isModifiedEvent(event) {
        const eventTarget = event.currentTarget;
        const target = eventTarget.getAttribute("target");
        return target && target !== "_self" || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || // triggers resource download
        event.nativeEvent && event.nativeEvent.which === 2;
      }
      function linkClicked(e, router, href, as, replace, shallow, scroll, locale) {
        const { nodeName } = e.currentTarget;
        const isAnchorNodeName = nodeName.toUpperCase() === "A";
        if (isAnchorNodeName && (isModifiedEvent(e) || !(0, _islocalurl.isLocalURL)(href))) {
          return;
        }
        e.preventDefault();
        const navigate = () => {
          const routerScroll = scroll != null ? scroll : true;
          if ("beforePopState" in router) {
            router[replace ? "replace" : "push"](href, as, {
              shallow,
              locale,
              scroll: routerScroll
            });
          } else {
            router[replace ? "replace" : "push"](as || href, {
              scroll: routerScroll
            });
          }
        };
        navigate();
      }
      function formatStringOrUrl(urlObjOrString) {
        if (typeof urlObjOrString === "string") {
          return urlObjOrString;
        }
        return (0, _formaturl.formatUrl)(urlObjOrString);
      }
      var Link3 = /* @__PURE__ */ _react.default.forwardRef(function LinkComponent(props, forwardedRef) {
        let children;
        const _a = props, { href: hrefProp, as: asProp, children: childrenProp, prefetch: prefetchProp = null, passHref, replace, shallow, scroll, locale, onClick, onMouseEnter: onMouseEnterProp, onTouchStart: onTouchStartProp, legacyBehavior = false } = _a, restProps = __objRest(_a, ["href", "as", "children", "prefetch", "passHref", "replace", "shallow", "scroll", "locale", "onClick", "onMouseEnter", "onTouchStart", "legacyBehavior"]);
        children = childrenProp;
        if (legacyBehavior && (typeof children === "string" || typeof children === "number")) {
          children = /* @__PURE__ */ (0, _jsxruntime.jsx)("a", {
            children
          });
        }
        const router = _react.default.useContext(_routercontextsharedruntime.RouterContext);
        const prefetchEnabled = prefetchProp !== false;
        if (true) {
          let createPropError = function(args) {
            return new Error("Failed prop type: The prop `" + args.key + "` expects a " + args.expected + " in `<Link>`, but got `" + args.actual + "` instead." + (typeof window !== "undefined" ? "\nOpen your browser's console to view the Component stack trace." : ""));
          };
          const requiredPropsGuard = {
            href: true
          };
          const requiredProps = Object.keys(requiredPropsGuard);
          requiredProps.forEach((key) => {
            if (key === "href") {
              if (props[key] == null || typeof props[key] !== "string" && typeof props[key] !== "object") {
                throw createPropError({
                  key,
                  expected: "`string` or `object`",
                  actual: props[key] === null ? "null" : typeof props[key]
                });
              }
            } else {
              const _ = key;
            }
          });
          const optionalPropsGuard = {
            as: true,
            replace: true,
            scroll: true,
            shallow: true,
            passHref: true,
            prefetch: true,
            locale: true,
            onClick: true,
            onMouseEnter: true,
            onTouchStart: true,
            legacyBehavior: true
          };
          const optionalProps = Object.keys(optionalPropsGuard);
          optionalProps.forEach((key) => {
            const valType = typeof props[key];
            if (key === "as") {
              if (props[key] && valType !== "string" && valType !== "object") {
                throw createPropError({
                  key,
                  expected: "`string` or `object`",
                  actual: valType
                });
              }
            } else if (key === "locale") {
              if (props[key] && valType !== "string") {
                throw createPropError({
                  key,
                  expected: "`string`",
                  actual: valType
                });
              }
            } else if (key === "onClick" || key === "onMouseEnter" || key === "onTouchStart") {
              if (props[key] && valType !== "function") {
                throw createPropError({
                  key,
                  expected: "`function`",
                  actual: valType
                });
              }
            } else if (key === "replace" || key === "scroll" || key === "shallow" || key === "passHref" || key === "prefetch" || key === "legacyBehavior") {
              if (props[key] != null && valType !== "boolean") {
                throw createPropError({
                  key,
                  expected: "`boolean`",
                  actual: valType
                });
              }
            } else {
              const _ = key;
            }
          });
        }
        const { href, as } = _react.default.useMemo(() => {
          if (!router) {
            const resolvedHref2 = formatStringOrUrl(hrefProp);
            return {
              href: resolvedHref2,
              as: asProp ? formatStringOrUrl(asProp) : resolvedHref2
            };
          }
          const [resolvedHref, resolvedAs] = (0, _resolvehref.resolveHref)(router, hrefProp, true);
          return {
            href: resolvedHref,
            as: asProp ? (0, _resolvehref.resolveHref)(router, asProp) : resolvedAs || resolvedHref
          };
        }, [
          router,
          hrefProp,
          asProp
        ]);
        const previousHref = _react.default.useRef(href);
        const previousAs = _react.default.useRef(as);
        let child;
        if (legacyBehavior) {
          if (true) {
            if (onClick) {
              console.warn('"onClick" was passed to <Link> with `href` of `' + hrefProp + '` but "legacyBehavior" was set. The legacy behavior requires onClick be set on the child of next/link');
            }
            if (onMouseEnterProp) {
              console.warn('"onMouseEnter" was passed to <Link> with `href` of `' + hrefProp + '` but "legacyBehavior" was set. The legacy behavior requires onMouseEnter be set on the child of next/link');
            }
            try {
              child = _react.default.Children.only(children);
            } catch (err) {
              if (!children) {
                throw new Error("No children were passed to <Link> with `href` of `" + hrefProp + "` but one child is required https://nextjs.org/docs/messages/link-no-children");
              }
              throw new Error("Multiple children were passed to <Link> with `href` of `" + hrefProp + "` but only one child is supported https://nextjs.org/docs/messages/link-multiple-children" + (typeof window !== "undefined" ? " \nOpen your browser's console to view the Component stack trace." : ""));
            }
          } else {
            child = _react.default.Children.only(children);
          }
        } else {
          if (true) {
            if ((children == null ? void 0 : children.type) === "a") {
              throw new Error("Invalid <Link> with <a> child. Please remove <a> or use <Link legacyBehavior>.\nLearn more: https://nextjs.org/docs/messages/invalid-new-link-with-extra-anchor");
            }
          }
        }
        const childRef = legacyBehavior ? child && typeof child === "object" && child.ref : forwardedRef;
        const [setIntersectionRef, isVisible, resetVisible] = (0, _useintersection.useIntersection)({
          rootMargin: "200px"
        });
        const setIntersectionWithResetRef = _react.default.useCallback((el) => {
          if (previousAs.current !== as || previousHref.current !== href) {
            resetVisible();
            previousAs.current = as;
            previousHref.current = href;
          }
          setIntersectionRef(el);
        }, [
          as,
          href,
          resetVisible,
          setIntersectionRef
        ]);
        const setRef2 = (0, _usemergedref.useMergedRef)(setIntersectionWithResetRef, childRef);
        _react.default.useEffect(() => {
          if (true) {
            return;
          }
          if (!router) {
            return;
          }
          if (!isVisible || !prefetchEnabled) {
            return;
          }
          prefetch(router, href, as, {
            locale
          });
        }, [
          as,
          href,
          isVisible,
          locale,
          prefetchEnabled,
          router == null ? void 0 : router.locale,
          router
        ]);
        const childProps = {
          ref: setRef2,
          onClick(e) {
            if (true) {
              if (!e) {
                throw new Error('Component rendered inside next/link has to pass click event to "onClick" prop.');
              }
            }
            if (!legacyBehavior && typeof onClick === "function") {
              onClick(e);
            }
            if (legacyBehavior && child.props && typeof child.props.onClick === "function") {
              child.props.onClick(e);
            }
            if (!router) {
              return;
            }
            if (e.defaultPrevented) {
              return;
            }
            linkClicked(e, router, href, as, replace, shallow, scroll, locale);
          },
          onMouseEnter(e) {
            if (!legacyBehavior && typeof onMouseEnterProp === "function") {
              onMouseEnterProp(e);
            }
            if (legacyBehavior && child.props && typeof child.props.onMouseEnter === "function") {
              child.props.onMouseEnter(e);
            }
            if (!router) {
              return;
            }
            prefetch(router, href, as, {
              locale,
              priority: true,
              // @see {https://github.com/vercel/next.js/discussions/40268?sort=top#discussioncomment-3572642}
              bypassPrefetchedCheck: true
            });
          },
          onTouchStart: process.env.__NEXT_LINK_NO_TOUCH_START ? void 0 : function onTouchStart(e) {
            if (!legacyBehavior && typeof onTouchStartProp === "function") {
              onTouchStartProp(e);
            }
            if (legacyBehavior && child.props && typeof child.props.onTouchStart === "function") {
              child.props.onTouchStart(e);
            }
            if (!router) {
              return;
            }
            prefetch(router, href, as, {
              locale,
              priority: true,
              // @see {https://github.com/vercel/next.js/discussions/40268?sort=top#discussioncomment-3572642}
              bypassPrefetchedCheck: true
            });
          }
        };
        if ((0, _utils.isAbsoluteUrl)(as)) {
          childProps.href = as;
        } else if (!legacyBehavior || passHref || child.type === "a" && !("href" in child.props)) {
          const curLocale = typeof locale !== "undefined" ? locale : router == null ? void 0 : router.locale;
          const localeDomain = (router == null ? void 0 : router.isLocaleDomain) && (0, _getdomainlocale.getDomainLocale)(as, curLocale, router == null ? void 0 : router.locales, router == null ? void 0 : router.domainLocales);
          childProps.href = localeDomain || (0, _addbasepath.addBasePath)((0, _addlocale.addLocale)(as, curLocale, router == null ? void 0 : router.defaultLocale));
        }
        return legacyBehavior ? /* @__PURE__ */ _react.default.cloneElement(child, childProps) : /* @__PURE__ */ (0, _jsxruntime.jsx)("a", __spreadProps(__spreadValues(__spreadValues({}, restProps), childProps), {
          children
        }));
      });
      var _default = Link3;
      if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
        Object.defineProperty(exports.default, "__esModule", { value: true });
        Object.assign(exports.default, exports);
        module.exports = exports.default;
      }
    }
  });

  // node_modules/next/link.js
  var require_link2 = __commonJS({
    "node_modules/next/link.js"(exports, module) {
      module.exports = require_link();
    }
  });

  // node_modules/next/dist/shared/lib/utils/warn-once.js
  var require_warn_once = __commonJS({
    "node_modules/next/dist/shared/lib/utils/warn-once.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      Object.defineProperty(exports, "warnOnce", {
        enumerable: true,
        get: function() {
          return warnOnce;
        }
      });
      var warnOnce = (_) => {
      };
      if (true) {
        const warnings = /* @__PURE__ */ new Set();
        warnOnce = (msg) => {
          if (!warnings.has(msg)) {
            console.warn(msg);
          }
          warnings.add(msg);
        };
      }
    }
  });

  // node_modules/next/dist/shared/lib/image-blur-svg.js
  var require_image_blur_svg = __commonJS({
    "node_modules/next/dist/shared/lib/image-blur-svg.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      Object.defineProperty(exports, "getImageBlurSvg", {
        enumerable: true,
        get: function() {
          return getImageBlurSvg;
        }
      });
      function getImageBlurSvg(param) {
        let { widthInt, heightInt, blurWidth, blurHeight, blurDataURL, objectFit } = param;
        const std = 20;
        const svgWidth = blurWidth ? blurWidth * 40 : widthInt;
        const svgHeight = blurHeight ? blurHeight * 40 : heightInt;
        const viewBox = svgWidth && svgHeight ? "viewBox='0 0 " + svgWidth + " " + svgHeight + "'" : "";
        const preserveAspectRatio = viewBox ? "none" : objectFit === "contain" ? "xMidYMid" : objectFit === "cover" ? "xMidYMid slice" : "none";
        return "%3Csvg xmlns='http://www.w3.org/2000/svg' " + viewBox + "%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='" + std + "'/%3E%3CfeColorMatrix values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 100 -1' result='s'/%3E%3CfeFlood x='0' y='0' width='100%25' height='100%25'/%3E%3CfeComposite operator='out' in='s'/%3E%3CfeComposite in2='SourceGraphic'/%3E%3CfeGaussianBlur stdDeviation='" + std + "'/%3E%3C/filter%3E%3Cimage width='100%25' height='100%25' x='0' y='0' preserveAspectRatio='" + preserveAspectRatio + "' style='filter: url(%23b);' href='" + blurDataURL + "'/%3E%3C/svg%3E";
      }
    }
  });

  // node_modules/next/dist/shared/lib/image-config.js
  var require_image_config = __commonJS({
    "node_modules/next/dist/shared/lib/image-config.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      function _export(target, all) {
        for (var name in all) Object.defineProperty(target, name, {
          enumerable: true,
          get: all[name]
        });
      }
      _export(exports, {
        VALID_LOADERS: function() {
          return VALID_LOADERS;
        },
        imageConfigDefault: function() {
          return imageConfigDefault;
        }
      });
      var VALID_LOADERS = [
        "default",
        "imgix",
        "cloudinary",
        "akamai",
        "custom"
      ];
      var imageConfigDefault = {
        deviceSizes: [
          640,
          750,
          828,
          1080,
          1200,
          1920,
          2048,
          3840
        ],
        imageSizes: [
          16,
          32,
          48,
          64,
          96,
          128,
          256,
          384
        ],
        path: "/_next/image",
        loader: "default",
        loaderFile: "",
        domains: [],
        disableStaticImages: false,
        minimumCacheTTL: 60,
        formats: [
          "image/webp"
        ],
        dangerouslyAllowSVG: false,
        contentSecurityPolicy: "script-src 'none'; frame-src 'none'; sandbox;",
        contentDispositionType: "attachment",
        localPatterns: void 0,
        remotePatterns: [],
        qualities: void 0,
        unoptimized: false
      };
    }
  });

  // node_modules/next/dist/shared/lib/get-img-props.js
  var require_get_img_props = __commonJS({
    "node_modules/next/dist/shared/lib/get-img-props.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      Object.defineProperty(exports, "getImgProps", {
        enumerable: true,
        get: function() {
          return getImgProps;
        }
      });
      var _warnonce = require_warn_once();
      var _imageblursvg = require_image_blur_svg();
      var _imageconfig = require_image_config();
      var VALID_LOADING_VALUES = [
        "lazy",
        "eager",
        void 0
      ];
      function isStaticRequire(src) {
        return src.default !== void 0;
      }
      function isStaticImageData(src) {
        return src.src !== void 0;
      }
      function isStaticImport(src) {
        return !!src && typeof src === "object" && (isStaticRequire(src) || isStaticImageData(src));
      }
      var allImgs = /* @__PURE__ */ new Map();
      var perfObserver;
      function getInt(x) {
        if (typeof x === "undefined") {
          return x;
        }
        if (typeof x === "number") {
          return Number.isFinite(x) ? x : NaN;
        }
        if (typeof x === "string" && /^[0-9]+$/.test(x)) {
          return parseInt(x, 10);
        }
        return NaN;
      }
      function getWidths(param, width, sizes) {
        let { deviceSizes, allSizes } = param;
        if (sizes) {
          const viewportWidthRe = /(^|\s)(1?\d?\d)vw/g;
          const percentSizes = [];
          for (let match; match = viewportWidthRe.exec(sizes); match) {
            percentSizes.push(parseInt(match[2]));
          }
          if (percentSizes.length) {
            const smallestRatio = Math.min(...percentSizes) * 0.01;
            return {
              widths: allSizes.filter((s) => s >= deviceSizes[0] * smallestRatio),
              kind: "w"
            };
          }
          return {
            widths: allSizes,
            kind: "w"
          };
        }
        if (typeof width !== "number") {
          return {
            widths: deviceSizes,
            kind: "w"
          };
        }
        const widths = [
          ...new Set(
            // > This means that most OLED screens that say they are 3x resolution,
            // > are actually 3x in the green color, but only 1.5x in the red and
            // > blue colors. Showing a 3x resolution image in the app vs a 2x
            // > resolution image will be visually the same, though the 3x image
            // > takes significantly more data. Even true 3x resolution screens are
            // > wasteful as the human eye cannot see that level of detail without
            // > something like a magnifying glass.
            // https://blog.twitter.com/engineering/en_us/topics/infrastructure/2019/capping-image-fidelity-on-ultra-high-resolution-devices.html
            [
              width,
              width * 2
              /*, width * 3*/
            ].map((w) => allSizes.find((p) => p >= w) || allSizes[allSizes.length - 1])
          )
        ];
        return {
          widths,
          kind: "x"
        };
      }
      function generateImgAttrs(param) {
        let { config, src, unoptimized, width, quality, sizes, loader } = param;
        if (unoptimized) {
          return {
            src,
            srcSet: void 0,
            sizes: void 0
          };
        }
        const { widths, kind } = getWidths(config, width, sizes);
        const last = widths.length - 1;
        return {
          sizes: !sizes && kind === "w" ? "100vw" : sizes,
          srcSet: widths.map((w, i) => loader({
            config,
            src,
            quality,
            width: w
          }) + " " + (kind === "w" ? w : i + 1) + kind).join(", "),
          // It's intended to keep `src` the last attribute because React updates
          // attributes in order. If we keep `src` the first one, Safari will
          // immediately start to fetch `src`, before `sizes` and `srcSet` are even
          // updated by React. That causes multiple unnecessary requests if `srcSet`
          // and `sizes` are defined.
          // This bug cannot be reproduced in Chrome or Firefox.
          src: loader({
            config,
            src,
            quality,
            width: widths[last]
          })
        };
      }
      function getImgProps(param, _state) {
        let _a = param, { src, sizes, unoptimized = false, priority = false, loading, className, quality, width, height, fill = false, style, overrideSrc, onLoad, onLoadingComplete, placeholder = "empty", blurDataURL, fetchPriority, decoding = "async", layout, objectFit, objectPosition, lazyBoundary, lazyRoot } = _a, rest = __objRest(_a, ["src", "sizes", "unoptimized", "priority", "loading", "className", "quality", "width", "height", "fill", "style", "overrideSrc", "onLoad", "onLoadingComplete", "placeholder", "blurDataURL", "fetchPriority", "decoding", "layout", "objectFit", "objectPosition", "lazyBoundary", "lazyRoot"]);
        const { imgConf, showAltText, blurComplete, defaultLoader } = _state;
        let config;
        let c = imgConf || _imageconfig.imageConfigDefault;
        if ("allSizes" in c) {
          config = c;
        } else {
          var _c_qualities;
          const allSizes = [
            ...c.deviceSizes,
            ...c.imageSizes
          ].sort((a, b) => a - b);
          const deviceSizes = c.deviceSizes.sort((a, b) => a - b);
          const qualities = (_c_qualities = c.qualities) == null ? void 0 : _c_qualities.sort((a, b) => a - b);
          config = __spreadProps(__spreadValues({}, c), {
            allSizes,
            deviceSizes,
            qualities
          });
        }
        if (typeof defaultLoader === "undefined") {
          throw new Error("images.loaderFile detected but the file is missing default export.\nRead more: https://nextjs.org/docs/messages/invalid-images-config");
        }
        let loader = rest.loader || defaultLoader;
        delete rest.loader;
        delete rest.srcSet;
        const isDefaultLoader = "__next_img_default" in loader;
        if (isDefaultLoader) {
          if (config.loader === "custom") {
            throw new Error('Image with src "' + src + '" is missing "loader" prop.\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader');
          }
        } else {
          const customImageLoader = loader;
          loader = (obj) => {
            const _a2 = obj, { config: _ } = _a2, opts = __objRest(_a2, ["config"]);
            return customImageLoader(opts);
          };
        }
        if (layout) {
          if (layout === "fill") {
            fill = true;
          }
          const layoutToStyle = {
            intrinsic: {
              maxWidth: "100%",
              height: "auto"
            },
            responsive: {
              width: "100%",
              height: "auto"
            }
          };
          const layoutToSizes = {
            responsive: "100vw",
            fill: "100vw"
          };
          const layoutStyle = layoutToStyle[layout];
          if (layoutStyle) {
            style = __spreadValues(__spreadValues({}, style), layoutStyle);
          }
          const layoutSizes = layoutToSizes[layout];
          if (layoutSizes && !sizes) {
            sizes = layoutSizes;
          }
        }
        let staticSrc = "";
        let widthInt = getInt(width);
        let heightInt = getInt(height);
        let blurWidth;
        let blurHeight;
        if (isStaticImport(src)) {
          const staticImageData = isStaticRequire(src) ? src.default : src;
          if (!staticImageData.src) {
            throw new Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received " + JSON.stringify(staticImageData));
          }
          if (!staticImageData.height || !staticImageData.width) {
            throw new Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received " + JSON.stringify(staticImageData));
          }
          blurWidth = staticImageData.blurWidth;
          blurHeight = staticImageData.blurHeight;
          blurDataURL = blurDataURL || staticImageData.blurDataURL;
          staticSrc = staticImageData.src;
          if (!fill) {
            if (!widthInt && !heightInt) {
              widthInt = staticImageData.width;
              heightInt = staticImageData.height;
            } else if (widthInt && !heightInt) {
              const ratio = widthInt / staticImageData.width;
              heightInt = Math.round(staticImageData.height * ratio);
            } else if (!widthInt && heightInt) {
              const ratio = heightInt / staticImageData.height;
              widthInt = Math.round(staticImageData.width * ratio);
            }
          }
        }
        src = typeof src === "string" ? src : staticSrc;
        let isLazy = !priority && (loading === "lazy" || typeof loading === "undefined");
        if (!src || src.startsWith("data:") || src.startsWith("blob:")) {
          unoptimized = true;
          isLazy = false;
        }
        if (config.unoptimized) {
          unoptimized = true;
        }
        if (isDefaultLoader && !config.dangerouslyAllowSVG && src.split("?", 1)[0].endsWith(".svg")) {
          unoptimized = true;
        }
        const qualityInt = getInt(quality);
        if (true) {
          if (config.output === "export" && isDefaultLoader && !unoptimized) {
            throw new Error("Image Optimization using the default loader is not compatible with `{ output: 'export' }`.\n  Possible solutions:\n    - Remove `{ output: 'export' }` and run \"next start\" to run server mode including the Image Optimization API.\n    - Configure `{ images: { unoptimized: true } }` in `next.config.js` to disable the Image Optimization API.\n  Read more: https://nextjs.org/docs/messages/export-image-api");
          }
          if (!src) {
            unoptimized = true;
          } else {
            if (fill) {
              if (width) {
                throw new Error('Image with src "' + src + '" has both "width" and "fill" properties. Only one should be used.');
              }
              if (height) {
                throw new Error('Image with src "' + src + '" has both "height" and "fill" properties. Only one should be used.');
              }
              if ((style == null ? void 0 : style.position) && style.position !== "absolute") {
                throw new Error('Image with src "' + src + '" has both "fill" and "style.position" properties. Images with "fill" always use position absolute - it cannot be modified.');
              }
              if ((style == null ? void 0 : style.width) && style.width !== "100%") {
                throw new Error('Image with src "' + src + '" has both "fill" and "style.width" properties. Images with "fill" always use width 100% - it cannot be modified.');
              }
              if ((style == null ? void 0 : style.height) && style.height !== "100%") {
                throw new Error('Image with src "' + src + '" has both "fill" and "style.height" properties. Images with "fill" always use height 100% - it cannot be modified.');
              }
            } else {
              if (typeof widthInt === "undefined") {
                throw new Error('Image with src "' + src + '" is missing required "width" property.');
              } else if (isNaN(widthInt)) {
                throw new Error('Image with src "' + src + '" has invalid "width" property. Expected a numeric value in pixels but received "' + width + '".');
              }
              if (typeof heightInt === "undefined") {
                throw new Error('Image with src "' + src + '" is missing required "height" property.');
              } else if (isNaN(heightInt)) {
                throw new Error('Image with src "' + src + '" has invalid "height" property. Expected a numeric value in pixels but received "' + height + '".');
              }
              if (/^[\x00-\x20]/.test(src)) {
                throw new Error('Image with src "' + src + '" cannot start with a space or control character. Use src.trimStart() to remove it or encodeURIComponent(src) to keep it.');
              }
              if (/[\x00-\x20]$/.test(src)) {
                throw new Error('Image with src "' + src + '" cannot end with a space or control character. Use src.trimEnd() to remove it or encodeURIComponent(src) to keep it.');
              }
            }
          }
          if (!VALID_LOADING_VALUES.includes(loading)) {
            throw new Error('Image with src "' + src + '" has invalid "loading" property. Provided "' + loading + '" should be one of ' + VALID_LOADING_VALUES.map(String).join(",") + ".");
          }
          if (priority && loading === "lazy") {
            throw new Error('Image with src "' + src + '" has both "priority" and "loading=\'lazy\'" properties. Only one should be used.');
          }
          if (placeholder !== "empty" && placeholder !== "blur" && !placeholder.startsWith("data:image/")) {
            throw new Error('Image with src "' + src + '" has invalid "placeholder" property "' + placeholder + '".');
          }
          if (placeholder !== "empty") {
            if (widthInt && heightInt && widthInt * heightInt < 1600) {
              (0, _warnonce.warnOnce)('Image with src "' + src + '" is smaller than 40x40. Consider removing the "placeholder" property to improve performance.');
            }
          }
          if (placeholder === "blur" && !blurDataURL) {
            const VALID_BLUR_EXT = [
              "jpeg",
              "png",
              "webp",
              "avif"
            ];
            throw new Error('Image with src "' + src + '" has "placeholder=\'blur\'" property but is missing the "blurDataURL" property.\n        Possible solutions:\n          - Add a "blurDataURL" property, the contents should be a small Data URL to represent the image\n          - Change the "src" property to a static import with one of the supported file types: ' + VALID_BLUR_EXT.join(",") + ' (animated images not supported)\n          - Remove the "placeholder" property, effectively no blur effect\n        Read more: https://nextjs.org/docs/messages/placeholder-blur-data-url');
          }
          if ("ref" in rest) {
            (0, _warnonce.warnOnce)('Image with src "' + src + '" is using unsupported "ref" property. Consider using the "onLoad" property instead.');
          }
          if (!unoptimized && !isDefaultLoader) {
            const urlStr = loader({
              config,
              src,
              width: widthInt || 400,
              quality: qualityInt || 75
            });
            let url;
            try {
              url = new URL(urlStr);
            } catch (err) {
            }
            if (urlStr === src || url && url.pathname === src && !url.search) {
              (0, _warnonce.warnOnce)('Image with src "' + src + '" has a "loader" property that does not implement width. Please implement it or use the "unoptimized" property instead.\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader-width');
            }
          }
          if (onLoadingComplete) {
            (0, _warnonce.warnOnce)('Image with src "' + src + '" is using deprecated "onLoadingComplete" property. Please use the "onLoad" property instead.');
          }
          for (const [legacyKey, legacyValue] of Object.entries({
            layout,
            objectFit,
            objectPosition,
            lazyBoundary,
            lazyRoot
          })) {
            if (legacyValue) {
              (0, _warnonce.warnOnce)('Image with src "' + src + '" has legacy prop "' + legacyKey + '". Did you forget to run the codemod?\nRead more: https://nextjs.org/docs/messages/next-image-upgrade-to-13');
            }
          }
          if (typeof window !== "undefined" && !perfObserver && window.PerformanceObserver) {
            perfObserver = new PerformanceObserver((entryList) => {
              for (const entry of entryList.getEntries()) {
                var _entry_element;
                const imgSrc = (entry == null ? void 0 : (_entry_element = entry.element) == null ? void 0 : _entry_element.src) || "";
                const lcpImage = allImgs.get(imgSrc);
                if (lcpImage && !lcpImage.priority && lcpImage.placeholder === "empty" && !lcpImage.src.startsWith("data:") && !lcpImage.src.startsWith("blob:")) {
                  (0, _warnonce.warnOnce)('Image with src "' + lcpImage.src + '" was detected as the Largest Contentful Paint (LCP). Please add the "priority" property if this image is above the fold.\nRead more: https://nextjs.org/docs/api-reference/next/image#priority');
                }
              }
            });
            try {
              perfObserver.observe({
                type: "largest-contentful-paint",
                buffered: true
              });
            } catch (err) {
              console.error(err);
            }
          }
        }
        const imgStyle = Object.assign(fill ? {
          position: "absolute",
          height: "100%",
          width: "100%",
          left: 0,
          top: 0,
          right: 0,
          bottom: 0,
          objectFit,
          objectPosition
        } : {}, showAltText ? {} : {
          color: "transparent"
        }, style);
        const backgroundImage = !blurComplete && placeholder !== "empty" ? placeholder === "blur" ? 'url("data:image/svg+xml;charset=utf-8,' + (0, _imageblursvg.getImageBlurSvg)({
          widthInt,
          heightInt,
          blurWidth,
          blurHeight,
          blurDataURL: blurDataURL || "",
          objectFit: imgStyle.objectFit
        }) + '")' : 'url("' + placeholder + '")' : null;
        let placeholderStyle = backgroundImage ? {
          backgroundSize: imgStyle.objectFit || "cover",
          backgroundPosition: imgStyle.objectPosition || "50% 50%",
          backgroundRepeat: "no-repeat",
          backgroundImage
        } : {};
        if (true) {
          if (placeholderStyle.backgroundImage && placeholder === "blur" && (blurDataURL == null ? void 0 : blurDataURL.startsWith("/"))) {
            placeholderStyle.backgroundImage = 'url("' + blurDataURL + '")';
          }
        }
        const imgAttributes = generateImgAttrs({
          config,
          src,
          unoptimized,
          width: widthInt,
          quality: qualityInt,
          sizes,
          loader
        });
        if (true) {
          if (typeof window !== "undefined") {
            let fullUrl;
            try {
              fullUrl = new URL(imgAttributes.src);
            } catch (e) {
              fullUrl = new URL(imgAttributes.src, window.location.href);
            }
            allImgs.set(fullUrl.href, {
              src,
              priority,
              placeholder
            });
          }
        }
        const props = __spreadProps(__spreadValues({}, rest), {
          loading: isLazy ? "lazy" : loading,
          fetchPriority,
          width: widthInt,
          height: heightInt,
          decoding,
          className,
          style: __spreadValues(__spreadValues({}, imgStyle), placeholderStyle),
          sizes: imgAttributes.sizes,
          srcSet: imgAttributes.srcSet,
          src: overrideSrc || imgAttributes.src
        });
        const meta = {
          unoptimized,
          priority,
          placeholder,
          fill
        };
        return {
          props,
          meta
        };
      }
    }
  });

  // node_modules/react-dom/cjs/react-dom.development.js
  var require_react_dom_development = __commonJS({
    "node_modules/react-dom/cjs/react-dom.development.js"(exports) {
      "use strict";
      (function() {
        function noop() {
        }
        function testStringCoercion(value) {
          return "" + value;
        }
        function createPortal$1(children, containerInfo, implementation) {
          var key = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : null;
          try {
            testStringCoercion(key);
            var JSCompiler_inline_result = false;
          } catch (e) {
            JSCompiler_inline_result = true;
          }
          JSCompiler_inline_result && (console.error(
            "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
            "function" === typeof Symbol && Symbol.toStringTag && key[Symbol.toStringTag] || key.constructor.name || "Object"
          ), testStringCoercion(key));
          return {
            $$typeof: REACT_PORTAL_TYPE,
            key: null == key ? null : "" + key,
            children,
            containerInfo,
            implementation
          };
        }
        function getCrossOriginStringAs(as, input) {
          if ("font" === as) return "";
          if ("string" === typeof input)
            return "use-credentials" === input ? input : "";
        }
        function getValueDescriptorExpectingObjectForWarning(thing) {
          return null === thing ? "`null`" : void 0 === thing ? "`undefined`" : "" === thing ? "an empty string" : 'something with type "' + typeof thing + '"';
        }
        function getValueDescriptorExpectingEnumForWarning(thing) {
          return null === thing ? "`null`" : void 0 === thing ? "`undefined`" : "" === thing ? "an empty string" : "string" === typeof thing ? JSON.stringify(thing) : "number" === typeof thing ? "`" + thing + "`" : 'something with type "' + typeof thing + '"';
        }
        function resolveDispatcher() {
          var dispatcher = ReactSharedInternals.H;
          null === dispatcher && console.error(
            "Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:\n1. You might have mismatching versions of React and the renderer (such as React DOM)\n2. You might be breaking the Rules of Hooks\n3. You might have more than one copy of React in the same app\nSee https://react.dev/link/invalid-hook-call for tips about how to debug and fix this problem."
          );
          return dispatcher;
        }
        "undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ && "function" === typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());
        var React18 = require_react(), Internals = {
          d: {
            f: noop,
            r: function() {
              throw Error(
                "Invalid form element. requestFormReset must be passed a form that was rendered by React."
              );
            },
            D: noop,
            C: noop,
            L: noop,
            m: noop,
            X: noop,
            S: noop,
            M: noop
          },
          p: 0,
          findDOMNode: null
        }, REACT_PORTAL_TYPE = Symbol.for("react.portal"), ReactSharedInternals = React18.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
        "function" === typeof Map && null != Map.prototype && "function" === typeof Map.prototype.forEach && "function" === typeof Set && null != Set.prototype && "function" === typeof Set.prototype.clear && "function" === typeof Set.prototype.forEach || console.error(
          "React depends on Map and Set built-in types. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills"
        );
        exports.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = Internals;
        exports.createPortal = function(children, container) {
          var key = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null;
          if (!container || 1 !== container.nodeType && 9 !== container.nodeType && 11 !== container.nodeType)
            throw Error("Target container is not a DOM element.");
          return createPortal$1(children, container, null, key);
        };
        exports.flushSync = function(fn) {
          var previousTransition = ReactSharedInternals.T, previousUpdatePriority = Internals.p;
          try {
            if (ReactSharedInternals.T = null, Internals.p = 2, fn)
              return fn();
          } finally {
            ReactSharedInternals.T = previousTransition, Internals.p = previousUpdatePriority, Internals.d.f() && console.error(
              "flushSync was called from inside a lifecycle method. React cannot flush when React is already rendering. Consider moving this call to a scheduler task or micro task."
            );
          }
        };
        exports.preconnect = function(href, options) {
          "string" === typeof href && href ? null != options && "object" !== typeof options ? console.error(
            "ReactDOM.preconnect(): Expected the `options` argument (second) to be an object but encountered %s instead. The only supported option at this time is `crossOrigin` which accepts a string.",
            getValueDescriptorExpectingEnumForWarning(options)
          ) : null != options && "string" !== typeof options.crossOrigin && console.error(
            "ReactDOM.preconnect(): Expected the `crossOrigin` option (second argument) to be a string but encountered %s instead. Try removing this option or passing a string value instead.",
            getValueDescriptorExpectingObjectForWarning(options.crossOrigin)
          ) : console.error(
            "ReactDOM.preconnect(): Expected the `href` argument (first) to be a non-empty string but encountered %s instead.",
            getValueDescriptorExpectingObjectForWarning(href)
          );
          "string" === typeof href && (options ? (options = options.crossOrigin, options = "string" === typeof options ? "use-credentials" === options ? options : "" : void 0) : options = null, Internals.d.C(href, options));
        };
        exports.prefetchDNS = function(href) {
          if ("string" !== typeof href || !href)
            console.error(
              "ReactDOM.prefetchDNS(): Expected the `href` argument (first) to be a non-empty string but encountered %s instead.",
              getValueDescriptorExpectingObjectForWarning(href)
            );
          else if (1 < arguments.length) {
            var options = arguments[1];
            "object" === typeof options && options.hasOwnProperty("crossOrigin") ? console.error(
              "ReactDOM.prefetchDNS(): Expected only one argument, `href`, but encountered %s as a second argument instead. This argument is reserved for future options and is currently disallowed. It looks like the you are attempting to set a crossOrigin property for this DNS lookup hint. Browsers do not perform DNS queries using CORS and setting this attribute on the resource hint has no effect. Try calling ReactDOM.prefetchDNS() with just a single string argument, `href`.",
              getValueDescriptorExpectingEnumForWarning(options)
            ) : console.error(
              "ReactDOM.prefetchDNS(): Expected only one argument, `href`, but encountered %s as a second argument instead. This argument is reserved for future options and is currently disallowed. Try calling ReactDOM.prefetchDNS() with just a single string argument, `href`.",
              getValueDescriptorExpectingEnumForWarning(options)
            );
          }
          "string" === typeof href && Internals.d.D(href);
        };
        exports.preinit = function(href, options) {
          "string" === typeof href && href ? null == options || "object" !== typeof options ? console.error(
            "ReactDOM.preinit(): Expected the `options` argument (second) to be an object with an `as` property describing the type of resource to be preinitialized but encountered %s instead.",
            getValueDescriptorExpectingEnumForWarning(options)
          ) : "style" !== options.as && "script" !== options.as && console.error(
            'ReactDOM.preinit(): Expected the `as` property in the `options` argument (second) to contain a valid value describing the type of resource to be preinitialized but encountered %s instead. Valid values for `as` are "style" and "script".',
            getValueDescriptorExpectingEnumForWarning(options.as)
          ) : console.error(
            "ReactDOM.preinit(): Expected the `href` argument (first) to be a non-empty string but encountered %s instead.",
            getValueDescriptorExpectingObjectForWarning(href)
          );
          if ("string" === typeof href && options && "string" === typeof options.as) {
            var as = options.as, crossOrigin = getCrossOriginStringAs(as, options.crossOrigin), integrity = "string" === typeof options.integrity ? options.integrity : void 0, fetchPriority = "string" === typeof options.fetchPriority ? options.fetchPriority : void 0;
            "style" === as ? Internals.d.S(
              href,
              "string" === typeof options.precedence ? options.precedence : void 0,
              {
                crossOrigin,
                integrity,
                fetchPriority
              }
            ) : "script" === as && Internals.d.X(href, {
              crossOrigin,
              integrity,
              fetchPriority,
              nonce: "string" === typeof options.nonce ? options.nonce : void 0
            });
          }
        };
        exports.preinitModule = function(href, options) {
          var encountered = "";
          "string" === typeof href && href || (encountered += " The `href` argument encountered was " + getValueDescriptorExpectingObjectForWarning(href) + ".");
          void 0 !== options && "object" !== typeof options ? encountered += " The `options` argument encountered was " + getValueDescriptorExpectingObjectForWarning(options) + "." : options && "as" in options && "script" !== options.as && (encountered += " The `as` option encountered was " + getValueDescriptorExpectingEnumForWarning(options.as) + ".");
          if (encountered)
            console.error(
              "ReactDOM.preinitModule(): Expected up to two arguments, a non-empty `href` string and, optionally, an `options` object with a valid `as` property.%s",
              encountered
            );
          else
            switch (encountered = options && "string" === typeof options.as ? options.as : "script", encountered) {
              case "script":
                break;
              default:
                encountered = getValueDescriptorExpectingEnumForWarning(encountered), console.error(
                  'ReactDOM.preinitModule(): Currently the only supported "as" type for this function is "script" but received "%s" instead. This warning was generated for `href` "%s". In the future other module types will be supported, aligning with the import-attributes proposal. Learn more here: (https://github.com/tc39/proposal-import-attributes)',
                  encountered,
                  href
                );
            }
          if ("string" === typeof href)
            if ("object" === typeof options && null !== options) {
              if (null == options.as || "script" === options.as)
                encountered = getCrossOriginStringAs(
                  options.as,
                  options.crossOrigin
                ), Internals.d.M(href, {
                  crossOrigin: encountered,
                  integrity: "string" === typeof options.integrity ? options.integrity : void 0,
                  nonce: "string" === typeof options.nonce ? options.nonce : void 0
                });
            } else null == options && Internals.d.M(href);
        };
        exports.preload = function(href, options) {
          var encountered = "";
          "string" === typeof href && href || (encountered += " The `href` argument encountered was " + getValueDescriptorExpectingObjectForWarning(href) + ".");
          null == options || "object" !== typeof options ? encountered += " The `options` argument encountered was " + getValueDescriptorExpectingObjectForWarning(options) + "." : "string" === typeof options.as && options.as || (encountered += " The `as` option encountered was " + getValueDescriptorExpectingObjectForWarning(options.as) + ".");
          encountered && console.error(
            'ReactDOM.preload(): Expected two arguments, a non-empty `href` string and an `options` object with an `as` property valid for a `<link rel="preload" as="..." />` tag.%s',
            encountered
          );
          if ("string" === typeof href && "object" === typeof options && null !== options && "string" === typeof options.as) {
            encountered = options.as;
            var crossOrigin = getCrossOriginStringAs(
              encountered,
              options.crossOrigin
            );
            Internals.d.L(href, encountered, {
              crossOrigin,
              integrity: "string" === typeof options.integrity ? options.integrity : void 0,
              nonce: "string" === typeof options.nonce ? options.nonce : void 0,
              type: "string" === typeof options.type ? options.type : void 0,
              fetchPriority: "string" === typeof options.fetchPriority ? options.fetchPriority : void 0,
              referrerPolicy: "string" === typeof options.referrerPolicy ? options.referrerPolicy : void 0,
              imageSrcSet: "string" === typeof options.imageSrcSet ? options.imageSrcSet : void 0,
              imageSizes: "string" === typeof options.imageSizes ? options.imageSizes : void 0,
              media: "string" === typeof options.media ? options.media : void 0
            });
          }
        };
        exports.preloadModule = function(href, options) {
          var encountered = "";
          "string" === typeof href && href || (encountered += " The `href` argument encountered was " + getValueDescriptorExpectingObjectForWarning(href) + ".");
          void 0 !== options && "object" !== typeof options ? encountered += " The `options` argument encountered was " + getValueDescriptorExpectingObjectForWarning(options) + "." : options && "as" in options && "string" !== typeof options.as && (encountered += " The `as` option encountered was " + getValueDescriptorExpectingObjectForWarning(options.as) + ".");
          encountered && console.error(
            'ReactDOM.preloadModule(): Expected two arguments, a non-empty `href` string and, optionally, an `options` object with an `as` property valid for a `<link rel="modulepreload" as="..." />` tag.%s',
            encountered
          );
          "string" === typeof href && (options ? (encountered = getCrossOriginStringAs(
            options.as,
            options.crossOrigin
          ), Internals.d.m(href, {
            as: "string" === typeof options.as && "script" !== options.as ? options.as : void 0,
            crossOrigin: encountered,
            integrity: "string" === typeof options.integrity ? options.integrity : void 0
          })) : Internals.d.m(href));
        };
        exports.requestFormReset = function(form) {
          Internals.d.r(form);
        };
        exports.unstable_batchedUpdates = function(fn, a) {
          return fn(a);
        };
        exports.useFormState = function(action, initialState, permalink) {
          return resolveDispatcher().useFormState(action, initialState, permalink);
        };
        exports.useFormStatus = function() {
          return resolveDispatcher().useHostTransitionStatus();
        };
        exports.version = "19.0.0";
        "undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ && "function" === typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error());
      })();
    }
  });

  // node_modules/react-dom/index.js
  var require_react_dom = __commonJS({
    "node_modules/react-dom/index.js"(exports, module) {
      "use strict";
      if (false) {
        checkDCE();
        module.exports = null;
      } else {
        module.exports = require_react_dom_development();
      }
    }
  });

  // node_modules/next/dist/shared/lib/side-effect.js
  var require_side_effect = __commonJS({
    "node_modules/next/dist/shared/lib/side-effect.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      Object.defineProperty(exports, "default", {
        enumerable: true,
        get: function() {
          return SideEffect;
        }
      });
      var _react = require_react();
      var isServer = typeof window === "undefined";
      var useClientOnlyLayoutEffect = isServer ? () => {
      } : _react.useLayoutEffect;
      var useClientOnlyEffect = isServer ? () => {
      } : _react.useEffect;
      function SideEffect(props) {
        const { headManager, reduceComponentsToState } = props;
        function emitChange() {
          if (headManager && headManager.mountedInstances) {
            const headElements = _react.Children.toArray(Array.from(headManager.mountedInstances).filter(Boolean));
            headManager.updateHead(reduceComponentsToState(headElements, props));
          }
        }
        if (isServer) {
          var _headManager_mountedInstances;
          headManager == null ? void 0 : (_headManager_mountedInstances = headManager.mountedInstances) == null ? void 0 : _headManager_mountedInstances.add(props.children);
          emitChange();
        }
        useClientOnlyLayoutEffect(() => {
          var _headManager_mountedInstances2;
          headManager == null ? void 0 : (_headManager_mountedInstances2 = headManager.mountedInstances) == null ? void 0 : _headManager_mountedInstances2.add(props.children);
          return () => {
            var _headManager_mountedInstances3;
            headManager == null ? void 0 : (_headManager_mountedInstances3 = headManager.mountedInstances) == null ? void 0 : _headManager_mountedInstances3.delete(props.children);
          };
        });
        useClientOnlyLayoutEffect(() => {
          if (headManager) {
            headManager._pendingUpdate = emitChange;
          }
          return () => {
            if (headManager) {
              headManager._pendingUpdate = emitChange;
            }
          };
        });
        useClientOnlyEffect(() => {
          if (headManager && headManager._pendingUpdate) {
            headManager._pendingUpdate();
            headManager._pendingUpdate = null;
          }
          return () => {
            if (headManager && headManager._pendingUpdate) {
              headManager._pendingUpdate();
              headManager._pendingUpdate = null;
            }
          };
        });
        return null;
      }
    }
  });

  // node_modules/next/dist/shared/lib/amp-context.shared-runtime.js
  var require_amp_context_shared_runtime = __commonJS({
    "node_modules/next/dist/shared/lib/amp-context.shared-runtime.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      Object.defineProperty(exports, "AmpStateContext", {
        enumerable: true,
        get: function() {
          return AmpStateContext;
        }
      });
      var _interop_require_default = require_interop_require_default();
      var _react = /* @__PURE__ */ _interop_require_default._(require_react());
      var AmpStateContext = _react.default.createContext({});
      if (true) {
        AmpStateContext.displayName = "AmpStateContext";
      }
    }
  });

  // node_modules/next/dist/shared/lib/head-manager-context.shared-runtime.js
  var require_head_manager_context_shared_runtime = __commonJS({
    "node_modules/next/dist/shared/lib/head-manager-context.shared-runtime.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      Object.defineProperty(exports, "HeadManagerContext", {
        enumerable: true,
        get: function() {
          return HeadManagerContext;
        }
      });
      var _interop_require_default = require_interop_require_default();
      var _react = /* @__PURE__ */ _interop_require_default._(require_react());
      var HeadManagerContext = _react.default.createContext({});
      if (true) {
        HeadManagerContext.displayName = "HeadManagerContext";
      }
    }
  });

  // node_modules/next/dist/shared/lib/amp-mode.js
  var require_amp_mode = __commonJS({
    "node_modules/next/dist/shared/lib/amp-mode.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      Object.defineProperty(exports, "isInAmpMode", {
        enumerable: true,
        get: function() {
          return isInAmpMode;
        }
      });
      function isInAmpMode(param) {
        let { ampFirst = false, hybrid = false, hasQuery = false } = param === void 0 ? {} : param;
        return ampFirst || hybrid && hasQuery;
      }
    }
  });

  // node_modules/next/dist/shared/lib/head.js
  var require_head = __commonJS({
    "node_modules/next/dist/shared/lib/head.js"(exports, module) {
      "use client";
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      function _export(target, all) {
        for (var name in all) Object.defineProperty(target, name, {
          enumerable: true,
          get: all[name]
        });
      }
      _export(exports, {
        default: function() {
          return _default;
        },
        defaultHead: function() {
          return defaultHead;
        }
      });
      var _interop_require_default = require_interop_require_default();
      var _interop_require_wildcard = require_interop_require_wildcard();
      var _jsxruntime = require_jsx_runtime();
      var _react = /* @__PURE__ */ _interop_require_wildcard._(require_react());
      var _sideeffect = /* @__PURE__ */ _interop_require_default._(require_side_effect());
      var _ampcontextsharedruntime = require_amp_context_shared_runtime();
      var _headmanagercontextsharedruntime = require_head_manager_context_shared_runtime();
      var _ampmode = require_amp_mode();
      var _warnonce = require_warn_once();
      function defaultHead(inAmpMode) {
        if (inAmpMode === void 0) inAmpMode = false;
        const head = [
          /* @__PURE__ */ (0, _jsxruntime.jsx)("meta", {
            charSet: "utf-8"
          }, "charset")
        ];
        if (!inAmpMode) {
          head.push(/* @__PURE__ */ (0, _jsxruntime.jsx)("meta", {
            name: "viewport",
            content: "width=device-width"
          }, "viewport"));
        }
        return head;
      }
      function onlyReactElement(list, child) {
        if (typeof child === "string" || typeof child === "number") {
          return list;
        }
        if (child.type === _react.default.Fragment) {
          return list.concat(
            // @ts-expect-error @types/react does not remove fragments but this could also return ReactPortal[]
            _react.default.Children.toArray(child.props.children).reduce(
              // @ts-expect-error @types/react does not remove fragments but this could also return ReactPortal[]
              (fragmentList, fragmentChild) => {
                if (typeof fragmentChild === "string" || typeof fragmentChild === "number") {
                  return fragmentList;
                }
                return fragmentList.concat(fragmentChild);
              },
              []
            )
          );
        }
        return list.concat(child);
      }
      var METATYPES = [
        "name",
        "httpEquiv",
        "charSet",
        "itemProp"
      ];
      function unique() {
        const keys = /* @__PURE__ */ new Set();
        const tags = /* @__PURE__ */ new Set();
        const metaTypes = /* @__PURE__ */ new Set();
        const metaCategories = {};
        return (h) => {
          let isUnique = true;
          let hasKey = false;
          if (h.key && typeof h.key !== "number" && h.key.indexOf("$") > 0) {
            hasKey = true;
            const key = h.key.slice(h.key.indexOf("$") + 1);
            if (keys.has(key)) {
              isUnique = false;
            } else {
              keys.add(key);
            }
          }
          switch (h.type) {
            case "title":
            case "base":
              if (tags.has(h.type)) {
                isUnique = false;
              } else {
                tags.add(h.type);
              }
              break;
            case "meta":
              for (let i = 0, len = METATYPES.length; i < len; i++) {
                const metatype = METATYPES[i];
                if (!h.props.hasOwnProperty(metatype)) continue;
                if (metatype === "charSet") {
                  if (metaTypes.has(metatype)) {
                    isUnique = false;
                  } else {
                    metaTypes.add(metatype);
                  }
                } else {
                  const category = h.props[metatype];
                  const categories = metaCategories[metatype] || /* @__PURE__ */ new Set();
                  if ((metatype !== "name" || !hasKey) && categories.has(category)) {
                    isUnique = false;
                  } else {
                    categories.add(category);
                    metaCategories[metatype] = categories;
                  }
                }
              }
              break;
          }
          return isUnique;
        };
      }
      function reduceComponents(headChildrenElements, props) {
        const { inAmpMode } = props;
        return headChildrenElements.reduce(onlyReactElement, []).reverse().concat(defaultHead(inAmpMode).reverse()).filter(unique()).reverse().map((c, i) => {
          const key = c.key || i;
          if (false) {
            if (c.type === "link" && c.props["href"] && // TODO(prateekbh@): Replace this with const from `constants` when the tree shaking works.
            [
              "https://fonts.googleapis.com/css",
              "https://use.typekit.net/"
            ].some((url) => c.props["href"].startsWith(url))) {
              const newProps = __spreadValues({}, c.props || {});
              newProps["data-href"] = newProps["href"];
              newProps["href"] = void 0;
              newProps["data-optimized-fonts"] = true;
              return /* @__PURE__ */ _react.default.cloneElement(c, newProps);
            }
          }
          if (true) {
            if (c.type === "script" && c.props["type"] !== "application/ld+json") {
              const srcMessage = c.props["src"] ? '<script> tag with src="' + c.props["src"] + '"' : "inline <script>";
              (0, _warnonce.warnOnce)("Do not add <script> tags using next/head (see " + srcMessage + "). Use next/script instead. \nSee more info here: https://nextjs.org/docs/messages/no-script-tags-in-head-component");
            } else if (c.type === "link" && c.props["rel"] === "stylesheet") {
              (0, _warnonce.warnOnce)('Do not add stylesheets using next/head (see <link rel="stylesheet"> tag with href="' + c.props["href"] + '"). Use Document instead. \nSee more info here: https://nextjs.org/docs/messages/no-stylesheets-in-head-component');
            }
          }
          return /* @__PURE__ */ _react.default.cloneElement(c, {
            key
          });
        });
      }
      function Head(param) {
        let { children } = param;
        const ampState = (0, _react.useContext)(_ampcontextsharedruntime.AmpStateContext);
        const headManager = (0, _react.useContext)(_headmanagercontextsharedruntime.HeadManagerContext);
        return /* @__PURE__ */ (0, _jsxruntime.jsx)(_sideeffect.default, {
          reduceComponentsToState: reduceComponents,
          headManager,
          inAmpMode: (0, _ampmode.isInAmpMode)(ampState),
          children
        });
      }
      var _default = Head;
      if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
        Object.defineProperty(exports.default, "__esModule", { value: true });
        Object.assign(exports.default, exports);
        module.exports = exports.default;
      }
    }
  });

  // node_modules/next/dist/shared/lib/image-config-context.shared-runtime.js
  var require_image_config_context_shared_runtime = __commonJS({
    "node_modules/next/dist/shared/lib/image-config-context.shared-runtime.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      Object.defineProperty(exports, "ImageConfigContext", {
        enumerable: true,
        get: function() {
          return ImageConfigContext;
        }
      });
      var _interop_require_default = require_interop_require_default();
      var _react = /* @__PURE__ */ _interop_require_default._(require_react());
      var _imageconfig = require_image_config();
      var ImageConfigContext = _react.default.createContext(_imageconfig.imageConfigDefault);
      if (true) {
        ImageConfigContext.displayName = "ImageConfigContext";
      }
    }
  });

  // node_modules/next/dist/compiled/picomatch/index.js
  var require_picomatch = __commonJS({
    "node_modules/next/dist/compiled/picomatch/index.js"(exports, module) {
      (() => {
        "use strict";
        var t = { 170: (t2, e2, u2) => {
          const n = u2(510);
          const isWindows = () => {
            if (typeof navigator !== "undefined" && navigator.platform) {
              const t3 = navigator.platform.toLowerCase();
              return t3 === "win32" || t3 === "windows";
            }
            if (typeof process !== "undefined" && process.platform) {
              return process.platform === "win32";
            }
            return false;
          };
          function picomatch(t3, e3, u3 = false) {
            if (e3 && (e3.windows === null || e3.windows === void 0)) {
              e3 = __spreadProps(__spreadValues({}, e3), { windows: isWindows() });
            }
            return n(t3, e3, u3);
          }
          Object.assign(picomatch, n);
          t2.exports = picomatch;
        }, 154: (t2) => {
          const e2 = "\\\\/";
          const u2 = "[^".concat(e2, "]");
          const n = "\\.";
          const o = "\\+";
          const s = "\\?";
          const r2 = "\\/";
          const a = "(?=.)";
          const i = "[^/]";
          const c = "(?:".concat(r2, "|$)");
          const p = "(?:^|".concat(r2, ")");
          const l = "".concat(n, "{1,2}").concat(c);
          const f = "(?!".concat(n, ")");
          const A = "(?!".concat(p).concat(l, ")");
          const _ = "(?!".concat(n, "{0,1}").concat(c, ")");
          const R = "(?!".concat(l, ")");
          const E = "[^.".concat(r2, "]");
          const h = "".concat(i, "*?");
          const g = "/";
          const b = { DOT_LITERAL: n, PLUS_LITERAL: o, QMARK_LITERAL: s, SLASH_LITERAL: r2, ONE_CHAR: a, QMARK: i, END_ANCHOR: c, DOTS_SLASH: l, NO_DOT: f, NO_DOTS: A, NO_DOT_SLASH: _, NO_DOTS_SLASH: R, QMARK_NO_DOT: E, STAR: h, START_ANCHOR: p, SEP: g };
          const C = __spreadProps(__spreadValues({}, b), { SLASH_LITERAL: "[".concat(e2, "]"), QMARK: u2, STAR: "".concat(u2, "*?"), DOTS_SLASH: "".concat(n, "{1,2}(?:[").concat(e2, "]|$)"), NO_DOT: "(?!".concat(n, ")"), NO_DOTS: "(?!(?:^|[".concat(e2, "])").concat(n, "{1,2}(?:[").concat(e2, "]|$))"), NO_DOT_SLASH: "(?!".concat(n, "{0,1}(?:[").concat(e2, "]|$))"), NO_DOTS_SLASH: "(?!".concat(n, "{1,2}(?:[").concat(e2, "]|$))"), QMARK_NO_DOT: "[^.".concat(e2, "]"), START_ANCHOR: "(?:^|[".concat(e2, "])"), END_ANCHOR: "(?:[".concat(e2, "]|$)"), SEP: "\\" });
          const y = { alnum: "a-zA-Z0-9", alpha: "a-zA-Z", ascii: "\\x00-\\x7F", blank: " \\t", cntrl: "\\x00-\\x1F\\x7F", digit: "0-9", graph: "\\x21-\\x7E", lower: "a-z", print: "\\x20-\\x7E ", punct: "\\-!\"#$%&'()\\*+,./:;<=>?@[\\]^_`{|}~", space: " \\t\\r\\n\\v\\f", upper: "A-Z", word: "A-Za-z0-9_", xdigit: "A-Fa-f0-9" };
          t2.exports = { MAX_LENGTH: 1024 * 64, POSIX_REGEX_SOURCE: y, REGEX_BACKSLASH: /\\(?![*+?^${}(|)[\]])/g, REGEX_NON_SPECIAL_CHARS: /^[^@![\].,$*+?^{}()|\\/]+/, REGEX_SPECIAL_CHARS: /[-*+?.^${}(|)[\]]/, REGEX_SPECIAL_CHARS_BACKREF: /(\\?)((\W)(\3*))/g, REGEX_SPECIAL_CHARS_GLOBAL: /([-*+?.^${}(|)[\]])/g, REGEX_REMOVE_BACKSLASH: /(?:\[.*?[^\\]\]|\\(?=.))/g, REPLACEMENTS: { "***": "*", "**/**": "**", "**/**/**": "**" }, CHAR_0: 48, CHAR_9: 57, CHAR_UPPERCASE_A: 65, CHAR_LOWERCASE_A: 97, CHAR_UPPERCASE_Z: 90, CHAR_LOWERCASE_Z: 122, CHAR_LEFT_PARENTHESES: 40, CHAR_RIGHT_PARENTHESES: 41, CHAR_ASTERISK: 42, CHAR_AMPERSAND: 38, CHAR_AT: 64, CHAR_BACKWARD_SLASH: 92, CHAR_CARRIAGE_RETURN: 13, CHAR_CIRCUMFLEX_ACCENT: 94, CHAR_COLON: 58, CHAR_COMMA: 44, CHAR_DOT: 46, CHAR_DOUBLE_QUOTE: 34, CHAR_EQUAL: 61, CHAR_EXCLAMATION_MARK: 33, CHAR_FORM_FEED: 12, CHAR_FORWARD_SLASH: 47, CHAR_GRAVE_ACCENT: 96, CHAR_HASH: 35, CHAR_HYPHEN_MINUS: 45, CHAR_LEFT_ANGLE_BRACKET: 60, CHAR_LEFT_CURLY_BRACE: 123, CHAR_LEFT_SQUARE_BRACKET: 91, CHAR_LINE_FEED: 10, CHAR_NO_BREAK_SPACE: 160, CHAR_PERCENT: 37, CHAR_PLUS: 43, CHAR_QUESTION_MARK: 63, CHAR_RIGHT_ANGLE_BRACKET: 62, CHAR_RIGHT_CURLY_BRACE: 125, CHAR_RIGHT_SQUARE_BRACKET: 93, CHAR_SEMICOLON: 59, CHAR_SINGLE_QUOTE: 39, CHAR_SPACE: 32, CHAR_TAB: 9, CHAR_UNDERSCORE: 95, CHAR_VERTICAL_LINE: 124, CHAR_ZERO_WIDTH_NOBREAK_SPACE: 65279, extglobChars(t3) {
            return { "!": { type: "negate", open: "(?:(?!(?:", close: "))".concat(t3.STAR, ")") }, "?": { type: "qmark", open: "(?:", close: ")?" }, "+": { type: "plus", open: "(?:", close: ")+" }, "*": { type: "star", open: "(?:", close: ")*" }, "@": { type: "at", open: "(?:", close: ")" } };
          }, globChars(t3) {
            return t3 === true ? C : b;
          } };
        }, 697: (t2, e2, u2) => {
          const n = u2(154);
          const o = u2(96);
          const { MAX_LENGTH: s, POSIX_REGEX_SOURCE: r2, REGEX_NON_SPECIAL_CHARS: a, REGEX_SPECIAL_CHARS_BACKREF: i, REPLACEMENTS: c } = n;
          const expandRange = (t3, e3) => {
            if (typeof e3.expandRange === "function") {
              return e3.expandRange(...t3, e3);
            }
            t3.sort();
            const u3 = "[".concat(t3.join("-"), "]");
            try {
              new RegExp(u3);
            } catch (e4) {
              return t3.map((t4) => o.escapeRegex(t4)).join("..");
            }
            return u3;
          };
          const syntaxError = (t3, e3) => "Missing ".concat(t3, ': "').concat(e3, '" - use "\\\\').concat(e3, '" to match literal characters');
          const parse = (t3, e3) => {
            if (typeof t3 !== "string") {
              throw new TypeError("Expected a string");
            }
            t3 = c[t3] || t3;
            const u3 = __spreadValues({}, e3);
            const p = typeof u3.maxLength === "number" ? Math.min(s, u3.maxLength) : s;
            let l = t3.length;
            if (l > p) {
              throw new SyntaxError("Input length: ".concat(l, ", exceeds maximum allowed length: ").concat(p));
            }
            const f = { type: "bos", value: "", output: u3.prepend || "" };
            const A = [f];
            const _ = u3.capture ? "" : "?:";
            const R = n.globChars(u3.windows);
            const E = n.extglobChars(R);
            const { DOT_LITERAL: h, PLUS_LITERAL: g, SLASH_LITERAL: b, ONE_CHAR: C, DOTS_SLASH: y, NO_DOT: $, NO_DOT_SLASH: x, NO_DOTS_SLASH: S, QMARK: H, QMARK_NO_DOT: v, STAR: d, START_ANCHOR: L } = R;
            const globstar = (t4) => "(".concat(_, "(?:(?!").concat(L).concat(t4.dot ? y : h, ").)*?)");
            const T = u3.dot ? "" : $;
            const O = u3.dot ? H : v;
            let k = u3.bash === true ? globstar(u3) : d;
            if (u3.capture) {
              k = "(".concat(k, ")");
            }
            if (typeof u3.noext === "boolean") {
              u3.noextglob = u3.noext;
            }
            const m = { input: t3, index: -1, start: 0, dot: u3.dot === true, consumed: "", output: "", prefix: "", backtrack: false, negated: false, brackets: 0, braces: 0, parens: 0, quotes: 0, globstar: false, tokens: A };
            t3 = o.removePrefix(t3, m);
            l = t3.length;
            const w = [];
            const N = [];
            const I = [];
            let B = f;
            let G;
            const eos = () => m.index === l - 1;
            const D = m.peek = (e4 = 1) => t3[m.index + e4];
            const M = m.advance = () => t3[++m.index] || "";
            const remaining = () => t3.slice(m.index + 1);
            const consume = (t4 = "", e4 = 0) => {
              m.consumed += t4;
              m.index += e4;
            };
            const append = (t4) => {
              m.output += t4.output != null ? t4.output : t4.value;
              consume(t4.value);
            };
            const negate = () => {
              let t4 = 1;
              while (D() === "!" && (D(2) !== "(" || D(3) === "?")) {
                M();
                m.start++;
                t4++;
              }
              if (t4 % 2 === 0) {
                return false;
              }
              m.negated = true;
              m.start++;
              return true;
            };
            const increment = (t4) => {
              m[t4]++;
              I.push(t4);
            };
            const decrement = (t4) => {
              m[t4]--;
              I.pop();
            };
            const push = (t4) => {
              if (B.type === "globstar") {
                const e4 = m.braces > 0 && (t4.type === "comma" || t4.type === "brace");
                const u4 = t4.extglob === true || w.length && (t4.type === "pipe" || t4.type === "paren");
                if (t4.type !== "slash" && t4.type !== "paren" && !e4 && !u4) {
                  m.output = m.output.slice(0, -B.output.length);
                  B.type = "star";
                  B.value = "*";
                  B.output = k;
                  m.output += B.output;
                }
              }
              if (w.length && t4.type !== "paren") {
                w[w.length - 1].inner += t4.value;
              }
              if (t4.value || t4.output) append(t4);
              if (B && B.type === "text" && t4.type === "text") {
                B.output = (B.output || B.value) + t4.value;
                B.value += t4.value;
                return;
              }
              t4.prev = B;
              A.push(t4);
              B = t4;
            };
            const extglobOpen = (t4, e4) => {
              const n2 = __spreadProps(__spreadValues({}, E[e4]), { conditions: 1, inner: "" });
              n2.prev = B;
              n2.parens = m.parens;
              n2.output = m.output;
              const o2 = (u3.capture ? "(" : "") + n2.open;
              increment("parens");
              push({ type: t4, value: e4, output: m.output ? "" : C });
              push({ type: "paren", extglob: true, value: M(), output: o2 });
              w.push(n2);
            };
            const extglobClose = (t4) => {
              let n2 = t4.close + (u3.capture ? ")" : "");
              let o2;
              if (t4.type === "negate") {
                let s2 = k;
                if (t4.inner && t4.inner.length > 1 && t4.inner.includes("/")) {
                  s2 = globstar(u3);
                }
                if (s2 !== k || eos() || /^\)+$/.test(remaining())) {
                  n2 = t4.close = ")$))".concat(s2);
                }
                if (t4.inner.includes("*") && (o2 = remaining()) && /^\.[^\\/.]+$/.test(o2)) {
                  const u4 = parse(o2, __spreadProps(__spreadValues({}, e3), { fastpaths: false })).output;
                  n2 = t4.close = ")".concat(u4, ")").concat(s2, ")");
                }
                if (t4.prev.type === "bos") {
                  m.negatedExtglob = true;
                }
              }
              push({ type: "paren", extglob: true, value: G, output: n2 });
              decrement("parens");
            };
            if (u3.fastpaths !== false && !/(^[*!]|[/()[\]{}"])/.test(t3)) {
              let n2 = false;
              let s2 = t3.replace(i, (t4, e4, u4, o2, s3, r3) => {
                if (o2 === "\\") {
                  n2 = true;
                  return t4;
                }
                if (o2 === "?") {
                  if (e4) {
                    return e4 + o2 + (s3 ? H.repeat(s3.length) : "");
                  }
                  if (r3 === 0) {
                    return O + (s3 ? H.repeat(s3.length) : "");
                  }
                  return H.repeat(u4.length);
                }
                if (o2 === ".") {
                  return h.repeat(u4.length);
                }
                if (o2 === "*") {
                  if (e4) {
                    return e4 + o2 + (s3 ? k : "");
                  }
                  return k;
                }
                return e4 ? t4 : "\\".concat(t4);
              });
              if (n2 === true) {
                if (u3.unescape === true) {
                  s2 = s2.replace(/\\/g, "");
                } else {
                  s2 = s2.replace(/\\+/g, (t4) => t4.length % 2 === 0 ? "\\\\" : t4 ? "\\" : "");
                }
              }
              if (s2 === t3 && u3.contains === true) {
                m.output = t3;
                return m;
              }
              m.output = o.wrapOutput(s2, m, e3);
              return m;
            }
            while (!eos()) {
              G = M();
              if (G === "\0") {
                continue;
              }
              if (G === "\\") {
                const t4 = D();
                if (t4 === "/" && u3.bash !== true) {
                  continue;
                }
                if (t4 === "." || t4 === ";") {
                  continue;
                }
                if (!t4) {
                  G += "\\";
                  push({ type: "text", value: G });
                  continue;
                }
                const e5 = /^\\+/.exec(remaining());
                let n3 = 0;
                if (e5 && e5[0].length > 2) {
                  n3 = e5[0].length;
                  m.index += n3;
                  if (n3 % 2 !== 0) {
                    G += "\\";
                  }
                }
                if (u3.unescape === true) {
                  G = M();
                } else {
                  G += M();
                }
                if (m.brackets === 0) {
                  push({ type: "text", value: G });
                  continue;
                }
              }
              if (m.brackets > 0 && (G !== "]" || B.value === "[" || B.value === "[^")) {
                if (u3.posix !== false && G === ":") {
                  const t4 = B.value.slice(1);
                  if (t4.includes("[")) {
                    B.posix = true;
                    if (t4.includes(":")) {
                      const t5 = B.value.lastIndexOf("[");
                      const e5 = B.value.slice(0, t5);
                      const u4 = B.value.slice(t5 + 2);
                      const n3 = r2[u4];
                      if (n3) {
                        B.value = e5 + n3;
                        m.backtrack = true;
                        M();
                        if (!f.output && A.indexOf(B) === 1) {
                          f.output = C;
                        }
                        continue;
                      }
                    }
                  }
                }
                if (G === "[" && D() !== ":" || G === "-" && D() === "]") {
                  G = "\\".concat(G);
                }
                if (G === "]" && (B.value === "[" || B.value === "[^")) {
                  G = "\\".concat(G);
                }
                if (u3.posix === true && G === "!" && B.value === "[") {
                  G = "^";
                }
                B.value += G;
                append({ value: G });
                continue;
              }
              if (m.quotes === 1 && G !== '"') {
                G = o.escapeRegex(G);
                B.value += G;
                append({ value: G });
                continue;
              }
              if (G === '"') {
                m.quotes = m.quotes === 1 ? 0 : 1;
                if (u3.keepQuotes === true) {
                  push({ type: "text", value: G });
                }
                continue;
              }
              if (G === "(") {
                increment("parens");
                push({ type: "paren", value: G });
                continue;
              }
              if (G === ")") {
                if (m.parens === 0 && u3.strictBrackets === true) {
                  throw new SyntaxError(syntaxError("opening", "("));
                }
                const t4 = w[w.length - 1];
                if (t4 && m.parens === t4.parens + 1) {
                  extglobClose(w.pop());
                  continue;
                }
                push({ type: "paren", value: G, output: m.parens ? ")" : "\\)" });
                decrement("parens");
                continue;
              }
              if (G === "[") {
                if (u3.nobracket === true || !remaining().includes("]")) {
                  if (u3.nobracket !== true && u3.strictBrackets === true) {
                    throw new SyntaxError(syntaxError("closing", "]"));
                  }
                  G = "\\".concat(G);
                } else {
                  increment("brackets");
                }
                push({ type: "bracket", value: G });
                continue;
              }
              if (G === "]") {
                if (u3.nobracket === true || B && B.type === "bracket" && B.value.length === 1) {
                  push({ type: "text", value: G, output: "\\".concat(G) });
                  continue;
                }
                if (m.brackets === 0) {
                  if (u3.strictBrackets === true) {
                    throw new SyntaxError(syntaxError("opening", "["));
                  }
                  push({ type: "text", value: G, output: "\\".concat(G) });
                  continue;
                }
                decrement("brackets");
                const t4 = B.value.slice(1);
                if (B.posix !== true && t4[0] === "^" && !t4.includes("/")) {
                  G = "/".concat(G);
                }
                B.value += G;
                append({ value: G });
                if (u3.literalBrackets === false || o.hasRegexChars(t4)) {
                  continue;
                }
                const e5 = o.escapeRegex(B.value);
                m.output = m.output.slice(0, -B.value.length);
                if (u3.literalBrackets === true) {
                  m.output += e5;
                  B.value = e5;
                  continue;
                }
                B.value = "(".concat(_).concat(e5, "|").concat(B.value, ")");
                m.output += B.value;
                continue;
              }
              if (G === "{" && u3.nobrace !== true) {
                increment("braces");
                const t4 = { type: "brace", value: G, output: "(", outputIndex: m.output.length, tokensIndex: m.tokens.length };
                N.push(t4);
                push(t4);
                continue;
              }
              if (G === "}") {
                const t4 = N[N.length - 1];
                if (u3.nobrace === true || !t4) {
                  push({ type: "text", value: G, output: G });
                  continue;
                }
                let e5 = ")";
                if (t4.dots === true) {
                  const t5 = A.slice();
                  const n3 = [];
                  for (let e6 = t5.length - 1; e6 >= 0; e6--) {
                    A.pop();
                    if (t5[e6].type === "brace") {
                      break;
                    }
                    if (t5[e6].type !== "dots") {
                      n3.unshift(t5[e6].value);
                    }
                  }
                  e5 = expandRange(n3, u3);
                  m.backtrack = true;
                }
                if (t4.comma !== true && t4.dots !== true) {
                  const u4 = m.output.slice(0, t4.outputIndex);
                  const n3 = m.tokens.slice(t4.tokensIndex);
                  t4.value = t4.output = "\\{";
                  G = e5 = "\\}";
                  m.output = u4;
                  for (const t5 of n3) {
                    m.output += t5.output || t5.value;
                  }
                }
                push({ type: "brace", value: G, output: e5 });
                decrement("braces");
                N.pop();
                continue;
              }
              if (G === "|") {
                if (w.length > 0) {
                  w[w.length - 1].conditions++;
                }
                push({ type: "text", value: G });
                continue;
              }
              if (G === ",") {
                let t4 = G;
                const e5 = N[N.length - 1];
                if (e5 && I[I.length - 1] === "braces") {
                  e5.comma = true;
                  t4 = "|";
                }
                push({ type: "comma", value: G, output: t4 });
                continue;
              }
              if (G === "/") {
                if (B.type === "dot" && m.index === m.start + 1) {
                  m.start = m.index + 1;
                  m.consumed = "";
                  m.output = "";
                  A.pop();
                  B = f;
                  continue;
                }
                push({ type: "slash", value: G, output: b });
                continue;
              }
              if (G === ".") {
                if (m.braces > 0 && B.type === "dot") {
                  if (B.value === ".") B.output = h;
                  const t4 = N[N.length - 1];
                  B.type = "dots";
                  B.output += G;
                  B.value += G;
                  t4.dots = true;
                  continue;
                }
                if (m.braces + m.parens === 0 && B.type !== "bos" && B.type !== "slash") {
                  push({ type: "text", value: G, output: h });
                  continue;
                }
                push({ type: "dot", value: G, output: h });
                continue;
              }
              if (G === "?") {
                const t4 = B && B.value === "(";
                if (!t4 && u3.noextglob !== true && D() === "(" && D(2) !== "?") {
                  extglobOpen("qmark", G);
                  continue;
                }
                if (B && B.type === "paren") {
                  const t5 = D();
                  let e5 = G;
                  if (B.value === "(" && !/[!=<:]/.test(t5) || t5 === "<" && !/<([!=]|\w+>)/.test(remaining())) {
                    e5 = "\\".concat(G);
                  }
                  push({ type: "text", value: G, output: e5 });
                  continue;
                }
                if (u3.dot !== true && (B.type === "slash" || B.type === "bos")) {
                  push({ type: "qmark", value: G, output: v });
                  continue;
                }
                push({ type: "qmark", value: G, output: H });
                continue;
              }
              if (G === "!") {
                if (u3.noextglob !== true && D() === "(") {
                  if (D(2) !== "?" || !/[!=<:]/.test(D(3))) {
                    extglobOpen("negate", G);
                    continue;
                  }
                }
                if (u3.nonegate !== true && m.index === 0) {
                  negate();
                  continue;
                }
              }
              if (G === "+") {
                if (u3.noextglob !== true && D() === "(" && D(2) !== "?") {
                  extglobOpen("plus", G);
                  continue;
                }
                if (B && B.value === "(" || u3.regex === false) {
                  push({ type: "plus", value: G, output: g });
                  continue;
                }
                if (B && (B.type === "bracket" || B.type === "paren" || B.type === "brace") || m.parens > 0) {
                  push({ type: "plus", value: G });
                  continue;
                }
                push({ type: "plus", value: g });
                continue;
              }
              if (G === "@") {
                if (u3.noextglob !== true && D() === "(" && D(2) !== "?") {
                  push({ type: "at", extglob: true, value: G, output: "" });
                  continue;
                }
                push({ type: "text", value: G });
                continue;
              }
              if (G !== "*") {
                if (G === "$" || G === "^") {
                  G = "\\".concat(G);
                }
                const t4 = a.exec(remaining());
                if (t4) {
                  G += t4[0];
                  m.index += t4[0].length;
                }
                push({ type: "text", value: G });
                continue;
              }
              if (B && (B.type === "globstar" || B.star === true)) {
                B.type = "star";
                B.star = true;
                B.value += G;
                B.output = k;
                m.backtrack = true;
                m.globstar = true;
                consume(G);
                continue;
              }
              let e4 = remaining();
              if (u3.noextglob !== true && /^\([^?]/.test(e4)) {
                extglobOpen("star", G);
                continue;
              }
              if (B.type === "star") {
                if (u3.noglobstar === true) {
                  consume(G);
                  continue;
                }
                const n3 = B.prev;
                const o2 = n3.prev;
                const s2 = n3.type === "slash" || n3.type === "bos";
                const r3 = o2 && (o2.type === "star" || o2.type === "globstar");
                if (u3.bash === true && (!s2 || e4[0] && e4[0] !== "/")) {
                  push({ type: "star", value: G, output: "" });
                  continue;
                }
                const a2 = m.braces > 0 && (n3.type === "comma" || n3.type === "brace");
                const i2 = w.length && (n3.type === "pipe" || n3.type === "paren");
                if (!s2 && n3.type !== "paren" && !a2 && !i2) {
                  push({ type: "star", value: G, output: "" });
                  continue;
                }
                while (e4.slice(0, 3) === "/**") {
                  const u4 = t3[m.index + 4];
                  if (u4 && u4 !== "/") {
                    break;
                  }
                  e4 = e4.slice(3);
                  consume("/**", 3);
                }
                if (n3.type === "bos" && eos()) {
                  B.type = "globstar";
                  B.value += G;
                  B.output = globstar(u3);
                  m.output = B.output;
                  m.globstar = true;
                  consume(G);
                  continue;
                }
                if (n3.type === "slash" && n3.prev.type !== "bos" && !r3 && eos()) {
                  m.output = m.output.slice(0, -(n3.output + B.output).length);
                  n3.output = "(?:".concat(n3.output);
                  B.type = "globstar";
                  B.output = globstar(u3) + (u3.strictSlashes ? ")" : "|$)");
                  B.value += G;
                  m.globstar = true;
                  m.output += n3.output + B.output;
                  consume(G);
                  continue;
                }
                if (n3.type === "slash" && n3.prev.type !== "bos" && e4[0] === "/") {
                  const t4 = e4[1] !== void 0 ? "|$" : "";
                  m.output = m.output.slice(0, -(n3.output + B.output).length);
                  n3.output = "(?:".concat(n3.output);
                  B.type = "globstar";
                  B.output = "".concat(globstar(u3)).concat(b, "|").concat(b).concat(t4, ")");
                  B.value += G;
                  m.output += n3.output + B.output;
                  m.globstar = true;
                  consume(G + M());
                  push({ type: "slash", value: "/", output: "" });
                  continue;
                }
                if (n3.type === "bos" && e4[0] === "/") {
                  B.type = "globstar";
                  B.value += G;
                  B.output = "(?:^|".concat(b, "|").concat(globstar(u3)).concat(b, ")");
                  m.output = B.output;
                  m.globstar = true;
                  consume(G + M());
                  push({ type: "slash", value: "/", output: "" });
                  continue;
                }
                m.output = m.output.slice(0, -B.output.length);
                B.type = "globstar";
                B.output = globstar(u3);
                B.value += G;
                m.output += B.output;
                m.globstar = true;
                consume(G);
                continue;
              }
              const n2 = { type: "star", value: G, output: k };
              if (u3.bash === true) {
                n2.output = ".*?";
                if (B.type === "bos" || B.type === "slash") {
                  n2.output = T + n2.output;
                }
                push(n2);
                continue;
              }
              if (B && (B.type === "bracket" || B.type === "paren") && u3.regex === true) {
                n2.output = G;
                push(n2);
                continue;
              }
              if (m.index === m.start || B.type === "slash" || B.type === "dot") {
                if (B.type === "dot") {
                  m.output += x;
                  B.output += x;
                } else if (u3.dot === true) {
                  m.output += S;
                  B.output += S;
                } else {
                  m.output += T;
                  B.output += T;
                }
                if (D() !== "*") {
                  m.output += C;
                  B.output += C;
                }
              }
              push(n2);
            }
            while (m.brackets > 0) {
              if (u3.strictBrackets === true) throw new SyntaxError(syntaxError("closing", "]"));
              m.output = o.escapeLast(m.output, "[");
              decrement("brackets");
            }
            while (m.parens > 0) {
              if (u3.strictBrackets === true) throw new SyntaxError(syntaxError("closing", ")"));
              m.output = o.escapeLast(m.output, "(");
              decrement("parens");
            }
            while (m.braces > 0) {
              if (u3.strictBrackets === true) throw new SyntaxError(syntaxError("closing", "}"));
              m.output = o.escapeLast(m.output, "{");
              decrement("braces");
            }
            if (u3.strictSlashes !== true && (B.type === "star" || B.type === "bracket")) {
              push({ type: "maybe_slash", value: "", output: "".concat(b, "?") });
            }
            if (m.backtrack === true) {
              m.output = "";
              for (const t4 of m.tokens) {
                m.output += t4.output != null ? t4.output : t4.value;
                if (t4.suffix) {
                  m.output += t4.suffix;
                }
              }
            }
            return m;
          };
          parse.fastpaths = (t3, e3) => {
            const u3 = __spreadValues({}, e3);
            const r3 = typeof u3.maxLength === "number" ? Math.min(s, u3.maxLength) : s;
            const a2 = t3.length;
            if (a2 > r3) {
              throw new SyntaxError("Input length: ".concat(a2, ", exceeds maximum allowed length: ").concat(r3));
            }
            t3 = c[t3] || t3;
            const { DOT_LITERAL: i2, SLASH_LITERAL: p, ONE_CHAR: l, DOTS_SLASH: f, NO_DOT: A, NO_DOTS: _, NO_DOTS_SLASH: R, STAR: E, START_ANCHOR: h } = n.globChars(u3.windows);
            const g = u3.dot ? _ : A;
            const b = u3.dot ? R : A;
            const C = u3.capture ? "" : "?:";
            const y = { negated: false, prefix: "" };
            let $ = u3.bash === true ? ".*?" : E;
            if (u3.capture) {
              $ = "(".concat($, ")");
            }
            const globstar = (t4) => {
              if (t4.noglobstar === true) return $;
              return "(".concat(C, "(?:(?!").concat(h).concat(t4.dot ? f : i2, ").)*?)");
            };
            const create = (t4) => {
              switch (t4) {
                case "*":
                  return "".concat(g).concat(l).concat($);
                case ".*":
                  return "".concat(i2).concat(l).concat($);
                case "*.*":
                  return "".concat(g).concat($).concat(i2).concat(l).concat($);
                case "*/*":
                  return "".concat(g).concat($).concat(p).concat(l).concat(b).concat($);
                case "**":
                  return g + globstar(u3);
                case "**/*":
                  return "(?:".concat(g).concat(globstar(u3)).concat(p, ")?").concat(b).concat(l).concat($);
                case "**/*.*":
                  return "(?:".concat(g).concat(globstar(u3)).concat(p, ")?").concat(b).concat($).concat(i2).concat(l).concat($);
                case "**/.*":
                  return "(?:".concat(g).concat(globstar(u3)).concat(p, ")?").concat(i2).concat(l).concat($);
                default: {
                  const e4 = /^(.*?)\.(\w+)$/.exec(t4);
                  if (!e4) return;
                  const u4 = create(e4[1]);
                  if (!u4) return;
                  return u4 + i2 + e4[2];
                }
              }
            };
            const x = o.removePrefix(t3, y);
            let S = create(x);
            if (S && u3.strictSlashes !== true) {
              S += "".concat(p, "?");
            }
            return S;
          };
          t2.exports = parse;
        }, 510: (t2, e2, u2) => {
          const n = u2(716);
          const o = u2(697);
          const s = u2(96);
          const r2 = u2(154);
          const isObject = (t3) => t3 && typeof t3 === "object" && !Array.isArray(t3);
          const picomatch = (t3, e3, u3 = false) => {
            if (Array.isArray(t3)) {
              const n3 = t3.map((t4) => picomatch(t4, e3, u3));
              const arrayMatcher = (t4) => {
                for (const e4 of n3) {
                  const u4 = e4(t4);
                  if (u4) return u4;
                }
                return false;
              };
              return arrayMatcher;
            }
            const n2 = isObject(t3) && t3.tokens && t3.input;
            if (t3 === "" || typeof t3 !== "string" && !n2) {
              throw new TypeError("Expected pattern to be a non-empty string");
            }
            const o2 = e3 || {};
            const s2 = o2.windows;
            const r3 = n2 ? picomatch.compileRe(t3, e3) : picomatch.makeRe(t3, e3, false, true);
            const a = r3.state;
            delete r3.state;
            let isIgnored = () => false;
            if (o2.ignore) {
              const t4 = __spreadProps(__spreadValues({}, e3), { ignore: null, onMatch: null, onResult: null });
              isIgnored = picomatch(o2.ignore, t4, u3);
            }
            const matcher = (u4, n3 = false) => {
              const { isMatch: i, match: c, output: p } = picomatch.test(u4, r3, e3, { glob: t3, posix: s2 });
              const l = { glob: t3, state: a, regex: r3, posix: s2, input: u4, output: p, match: c, isMatch: i };
              if (typeof o2.onResult === "function") {
                o2.onResult(l);
              }
              if (i === false) {
                l.isMatch = false;
                return n3 ? l : false;
              }
              if (isIgnored(u4)) {
                if (typeof o2.onIgnore === "function") {
                  o2.onIgnore(l);
                }
                l.isMatch = false;
                return n3 ? l : false;
              }
              if (typeof o2.onMatch === "function") {
                o2.onMatch(l);
              }
              return n3 ? l : true;
            };
            if (u3) {
              matcher.state = a;
            }
            return matcher;
          };
          picomatch.test = (t3, e3, u3, { glob: n2, posix: o2 } = {}) => {
            if (typeof t3 !== "string") {
              throw new TypeError("Expected input to be a string");
            }
            if (t3 === "") {
              return { isMatch: false, output: "" };
            }
            const r3 = u3 || {};
            const a = r3.format || (o2 ? s.toPosixSlashes : null);
            let i = t3 === n2;
            let c = i && a ? a(t3) : t3;
            if (i === false) {
              c = a ? a(t3) : t3;
              i = c === n2;
            }
            if (i === false || r3.capture === true) {
              if (r3.matchBase === true || r3.basename === true) {
                i = picomatch.matchBase(t3, e3, u3, o2);
              } else {
                i = e3.exec(c);
              }
            }
            return { isMatch: Boolean(i), match: i, output: c };
          };
          picomatch.matchBase = (t3, e3, u3) => {
            const n2 = e3 instanceof RegExp ? e3 : picomatch.makeRe(e3, u3);
            return n2.test(s.basename(t3));
          };
          picomatch.isMatch = (t3, e3, u3) => picomatch(e3, u3)(t3);
          picomatch.parse = (t3, e3) => {
            if (Array.isArray(t3)) return t3.map((t4) => picomatch.parse(t4, e3));
            return o(t3, __spreadProps(__spreadValues({}, e3), { fastpaths: false }));
          };
          picomatch.scan = (t3, e3) => n(t3, e3);
          picomatch.compileRe = (t3, e3, u3 = false, n2 = false) => {
            if (u3 === true) {
              return t3.output;
            }
            const o2 = e3 || {};
            const s2 = o2.contains ? "" : "^";
            const r3 = o2.contains ? "" : "$";
            let a = "".concat(s2, "(?:").concat(t3.output, ")").concat(r3);
            if (t3 && t3.negated === true) {
              a = "^(?!".concat(a, ").*$");
            }
            const i = picomatch.toRegex(a, e3);
            if (n2 === true) {
              i.state = t3;
            }
            return i;
          };
          picomatch.makeRe = (t3, e3 = {}, u3 = false, n2 = false) => {
            if (!t3 || typeof t3 !== "string") {
              throw new TypeError("Expected a non-empty string");
            }
            let s2 = { negated: false, fastpaths: true };
            if (e3.fastpaths !== false && (t3[0] === "." || t3[0] === "*")) {
              s2.output = o.fastpaths(t3, e3);
            }
            if (!s2.output) {
              s2 = o(t3, e3);
            }
            return picomatch.compileRe(s2, e3, u3, n2);
          };
          picomatch.toRegex = (t3, e3) => {
            try {
              const u3 = e3 || {};
              return new RegExp(t3, u3.flags || (u3.nocase ? "i" : ""));
            } catch (t4) {
              if (e3 && e3.debug === true) throw t4;
              return /$^/;
            }
          };
          picomatch.constants = r2;
          t2.exports = picomatch;
        }, 716: (t2, e2, u2) => {
          const n = u2(96);
          const { CHAR_ASTERISK: o, CHAR_AT: s, CHAR_BACKWARD_SLASH: r2, CHAR_COMMA: a, CHAR_DOT: i, CHAR_EXCLAMATION_MARK: c, CHAR_FORWARD_SLASH: p, CHAR_LEFT_CURLY_BRACE: l, CHAR_LEFT_PARENTHESES: f, CHAR_LEFT_SQUARE_BRACKET: A, CHAR_PLUS: _, CHAR_QUESTION_MARK: R, CHAR_RIGHT_CURLY_BRACE: E, CHAR_RIGHT_PARENTHESES: h, CHAR_RIGHT_SQUARE_BRACKET: g } = u2(154);
          const isPathSeparator = (t3) => t3 === p || t3 === r2;
          const depth = (t3) => {
            if (t3.isPrefix !== true) {
              t3.depth = t3.isGlobstar ? Infinity : 1;
            }
          };
          const scan = (t3, e3) => {
            const u3 = e3 || {};
            const b = t3.length - 1;
            const C = u3.parts === true || u3.scanToEnd === true;
            const y = [];
            const $ = [];
            const x = [];
            let S = t3;
            let H = -1;
            let v = 0;
            let d = 0;
            let L = false;
            let T = false;
            let O = false;
            let k = false;
            let m = false;
            let w = false;
            let N = false;
            let I = false;
            let B = false;
            let G = false;
            let D = 0;
            let M;
            let P;
            let K = { value: "", depth: 0, isGlob: false };
            const eos = () => H >= b;
            const peek = () => S.charCodeAt(H + 1);
            const advance = () => {
              M = P;
              return S.charCodeAt(++H);
            };
            while (H < b) {
              P = advance();
              let t4;
              if (P === r2) {
                N = K.backslashes = true;
                P = advance();
                if (P === l) {
                  w = true;
                }
                continue;
              }
              if (w === true || P === l) {
                D++;
                while (eos() !== true && (P = advance())) {
                  if (P === r2) {
                    N = K.backslashes = true;
                    advance();
                    continue;
                  }
                  if (P === l) {
                    D++;
                    continue;
                  }
                  if (w !== true && P === i && (P = advance()) === i) {
                    L = K.isBrace = true;
                    O = K.isGlob = true;
                    G = true;
                    if (C === true) {
                      continue;
                    }
                    break;
                  }
                  if (w !== true && P === a) {
                    L = K.isBrace = true;
                    O = K.isGlob = true;
                    G = true;
                    if (C === true) {
                      continue;
                    }
                    break;
                  }
                  if (P === E) {
                    D--;
                    if (D === 0) {
                      w = false;
                      L = K.isBrace = true;
                      G = true;
                      break;
                    }
                  }
                }
                if (C === true) {
                  continue;
                }
                break;
              }
              if (P === p) {
                y.push(H);
                $.push(K);
                K = { value: "", depth: 0, isGlob: false };
                if (G === true) continue;
                if (M === i && H === v + 1) {
                  v += 2;
                  continue;
                }
                d = H + 1;
                continue;
              }
              if (u3.noext !== true) {
                const t5 = P === _ || P === s || P === o || P === R || P === c;
                if (t5 === true && peek() === f) {
                  O = K.isGlob = true;
                  k = K.isExtglob = true;
                  G = true;
                  if (P === c && H === v) {
                    B = true;
                  }
                  if (C === true) {
                    while (eos() !== true && (P = advance())) {
                      if (P === r2) {
                        N = K.backslashes = true;
                        P = advance();
                        continue;
                      }
                      if (P === h) {
                        O = K.isGlob = true;
                        G = true;
                        break;
                      }
                    }
                    continue;
                  }
                  break;
                }
              }
              if (P === o) {
                if (M === o) m = K.isGlobstar = true;
                O = K.isGlob = true;
                G = true;
                if (C === true) {
                  continue;
                }
                break;
              }
              if (P === R) {
                O = K.isGlob = true;
                G = true;
                if (C === true) {
                  continue;
                }
                break;
              }
              if (P === A) {
                while (eos() !== true && (t4 = advance())) {
                  if (t4 === r2) {
                    N = K.backslashes = true;
                    advance();
                    continue;
                  }
                  if (t4 === g) {
                    T = K.isBracket = true;
                    O = K.isGlob = true;
                    G = true;
                    break;
                  }
                }
                if (C === true) {
                  continue;
                }
                break;
              }
              if (u3.nonegate !== true && P === c && H === v) {
                I = K.negated = true;
                v++;
                continue;
              }
              if (u3.noparen !== true && P === f) {
                O = K.isGlob = true;
                if (C === true) {
                  while (eos() !== true && (P = advance())) {
                    if (P === f) {
                      N = K.backslashes = true;
                      P = advance();
                      continue;
                    }
                    if (P === h) {
                      G = true;
                      break;
                    }
                  }
                  continue;
                }
                break;
              }
              if (O === true) {
                G = true;
                if (C === true) {
                  continue;
                }
                break;
              }
            }
            if (u3.noext === true) {
              k = false;
              O = false;
            }
            let U = S;
            let X = "";
            let F = "";
            if (v > 0) {
              X = S.slice(0, v);
              S = S.slice(v);
              d -= v;
            }
            if (U && O === true && d > 0) {
              U = S.slice(0, d);
              F = S.slice(d);
            } else if (O === true) {
              U = "";
              F = S;
            } else {
              U = S;
            }
            if (U && U !== "" && U !== "/" && U !== S) {
              if (isPathSeparator(U.charCodeAt(U.length - 1))) {
                U = U.slice(0, -1);
              }
            }
            if (u3.unescape === true) {
              if (F) F = n.removeBackslashes(F);
              if (U && N === true) {
                U = n.removeBackslashes(U);
              }
            }
            const Q = { prefix: X, input: t3, start: v, base: U, glob: F, isBrace: L, isBracket: T, isGlob: O, isExtglob: k, isGlobstar: m, negated: I, negatedExtglob: B };
            if (u3.tokens === true) {
              Q.maxDepth = 0;
              if (!isPathSeparator(P)) {
                $.push(K);
              }
              Q.tokens = $;
            }
            if (u3.parts === true || u3.tokens === true) {
              let e4;
              for (let n2 = 0; n2 < y.length; n2++) {
                const o2 = e4 ? e4 + 1 : v;
                const s2 = y[n2];
                const r3 = t3.slice(o2, s2);
                if (u3.tokens) {
                  if (n2 === 0 && v !== 0) {
                    $[n2].isPrefix = true;
                    $[n2].value = X;
                  } else {
                    $[n2].value = r3;
                  }
                  depth($[n2]);
                  Q.maxDepth += $[n2].depth;
                }
                if (n2 !== 0 || r3 !== "") {
                  x.push(r3);
                }
                e4 = s2;
              }
              if (e4 && e4 + 1 < t3.length) {
                const n2 = t3.slice(e4 + 1);
                x.push(n2);
                if (u3.tokens) {
                  $[$.length - 1].value = n2;
                  depth($[$.length - 1]);
                  Q.maxDepth += $[$.length - 1].depth;
                }
              }
              Q.slashes = y;
              Q.parts = x;
            }
            return Q;
          };
          t2.exports = scan;
        }, 96: (t2, e2, u2) => {
          const { REGEX_BACKSLASH: n, REGEX_REMOVE_BACKSLASH: o, REGEX_SPECIAL_CHARS: s, REGEX_SPECIAL_CHARS_GLOBAL: r2 } = u2(154);
          e2.isObject = (t3) => t3 !== null && typeof t3 === "object" && !Array.isArray(t3);
          e2.hasRegexChars = (t3) => s.test(t3);
          e2.isRegexChar = (t3) => t3.length === 1 && e2.hasRegexChars(t3);
          e2.escapeRegex = (t3) => t3.replace(r2, "\\$1");
          e2.toPosixSlashes = (t3) => t3.replace(n, "/");
          e2.removeBackslashes = (t3) => t3.replace(o, (t4) => t4 === "\\" ? "" : t4);
          e2.escapeLast = (t3, u3, n2) => {
            const o2 = t3.lastIndexOf(u3, n2);
            if (o2 === -1) return t3;
            if (t3[o2 - 1] === "\\") return e2.escapeLast(t3, u3, o2 - 1);
            return "".concat(t3.slice(0, o2), "\\").concat(t3.slice(o2));
          };
          e2.removePrefix = (t3, e3 = {}) => {
            let u3 = t3;
            if (u3.startsWith("./")) {
              u3 = u3.slice(2);
              e3.prefix = "./";
            }
            return u3;
          };
          e2.wrapOutput = (t3, e3 = {}, u3 = {}) => {
            const n2 = u3.contains ? "" : "^";
            const o2 = u3.contains ? "" : "$";
            let s2 = "".concat(n2, "(?:").concat(t3, ")").concat(o2);
            if (e3.negated === true) {
              s2 = "(?:^(?!".concat(s2, ").*$)");
            }
            return s2;
          };
          e2.basename = (t3, { windows: e3 } = {}) => {
            const u3 = t3.split(e3 ? /[\\/]/ : "/");
            const n2 = u3[u3.length - 1];
            if (n2 === "") {
              return u3[u3.length - 2];
            }
            return n2;
          };
        } };
        var e = {};
        function __nccwpck_require__(u2) {
          var n = e[u2];
          if (n !== void 0) {
            return n.exports;
          }
          var o = e[u2] = { exports: {} };
          var s = true;
          try {
            t[u2](o, o.exports, __nccwpck_require__);
            s = false;
          } finally {
            if (s) delete e[u2];
          }
          return o.exports;
        }
        if (typeof __nccwpck_require__ !== "undefined") __nccwpck_require__.ab = __dirname + "/";
        var u = __nccwpck_require__(170);
        module.exports = u;
      })();
    }
  });

  // node_modules/next/dist/shared/lib/match-local-pattern.js
  var require_match_local_pattern = __commonJS({
    "node_modules/next/dist/shared/lib/match-local-pattern.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      function _export(target, all) {
        for (var name in all) Object.defineProperty(target, name, {
          enumerable: true,
          get: all[name]
        });
      }
      _export(exports, {
        hasLocalMatch: function() {
          return hasLocalMatch;
        },
        matchLocalPattern: function() {
          return matchLocalPattern;
        }
      });
      var _picomatch = require_picomatch();
      function matchLocalPattern(pattern, url) {
        if (pattern.search !== void 0) {
          if (pattern.search !== url.search) {
            return false;
          }
        }
        var _pattern_pathname;
        if (!(0, _picomatch.makeRe)((_pattern_pathname = pattern.pathname) != null ? _pattern_pathname : "**", {
          dot: true
        }).test(url.pathname)) {
          return false;
        }
        return true;
      }
      function hasLocalMatch(localPatterns, urlPathAndQuery) {
        if (!localPatterns) {
          return true;
        }
        const url = new URL(urlPathAndQuery, "http://n");
        return localPatterns.some((p) => matchLocalPattern(p, url));
      }
    }
  });

  // node_modules/next/dist/shared/lib/match-remote-pattern.js
  var require_match_remote_pattern = __commonJS({
    "node_modules/next/dist/shared/lib/match-remote-pattern.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      function _export(target, all) {
        for (var name in all) Object.defineProperty(target, name, {
          enumerable: true,
          get: all[name]
        });
      }
      _export(exports, {
        hasRemoteMatch: function() {
          return hasRemoteMatch;
        },
        matchRemotePattern: function() {
          return matchRemotePattern;
        }
      });
      var _picomatch = require_picomatch();
      function matchRemotePattern(pattern, url) {
        if (pattern.protocol !== void 0) {
          const actualProto = url.protocol.slice(0, -1);
          if (pattern.protocol !== actualProto) {
            return false;
          }
        }
        if (pattern.port !== void 0) {
          if (pattern.port !== url.port) {
            return false;
          }
        }
        if (pattern.hostname === void 0) {
          throw new Error("Pattern should define hostname but found\n" + JSON.stringify(pattern));
        } else {
          if (!(0, _picomatch.makeRe)(pattern.hostname).test(url.hostname)) {
            return false;
          }
        }
        if (pattern.search !== void 0) {
          if (pattern.search !== url.search) {
            return false;
          }
        }
        var _pattern_pathname;
        if (!(0, _picomatch.makeRe)((_pattern_pathname = pattern.pathname) != null ? _pattern_pathname : "**", {
          dot: true
        }).test(url.pathname)) {
          return false;
        }
        return true;
      }
      function hasRemoteMatch(domains, remotePatterns, url) {
        return domains.some((domain) => url.hostname === domain) || remotePatterns.some((p) => matchRemotePattern(p, url));
      }
    }
  });

  // node_modules/next/dist/shared/lib/image-loader.js
  var require_image_loader = __commonJS({
    "node_modules/next/dist/shared/lib/image-loader.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      Object.defineProperty(exports, "default", {
        enumerable: true,
        get: function() {
          return _default;
        }
      });
      var DEFAULT_Q = 75;
      function defaultLoader(param) {
        let { config, src, width, quality } = param;
        var _config_qualities;
        if (true) {
          const missingValues = [];
          if (!src) missingValues.push("src");
          if (!width) missingValues.push("width");
          if (missingValues.length > 0) {
            throw new Error("Next Image Optimization requires " + missingValues.join(", ") + " to be provided. Make sure you pass them as props to the `next/image` component. Received: " + JSON.stringify({
              src,
              width,
              quality
            }));
          }
          if (src.startsWith("//")) {
            throw new Error('Failed to parse src "' + src + '" on `next/image`, protocol-relative URL (//) must be changed to an absolute URL (http:// or https://)');
          }
          if (src.startsWith("/") && config.localPatterns) {
            if (
              // micromatch isn't compatible with edge runtime
              process.env.NEXT_RUNTIME !== "edge"
            ) {
              const { hasLocalMatch } = require_match_local_pattern();
              if (!hasLocalMatch(config.localPatterns, src)) {
                throw new Error("Invalid src prop (" + src + ") on `next/image` does not match `images.localPatterns` configured in your `next.config.js`\nSee more info: https://nextjs.org/docs/messages/next-image-unconfigured-localpatterns");
              }
            }
          }
          if (!src.startsWith("/") && (config.domains || config.remotePatterns)) {
            let parsedSrc;
            try {
              parsedSrc = new URL(src);
            } catch (err) {
              console.error(err);
              throw new Error('Failed to parse src "' + src + '" on `next/image`, if using relative image it must start with a leading slash "/" or be an absolute URL (http:// or https://)');
            }
            if (
              // micromatch isn't compatible with edge runtime
              process.env.NEXT_RUNTIME !== "edge"
            ) {
              const { hasRemoteMatch } = require_match_remote_pattern();
              if (!hasRemoteMatch(config.domains, config.remotePatterns, parsedSrc)) {
                throw new Error("Invalid src prop (" + src + ') on `next/image`, hostname "' + parsedSrc.hostname + '" is not configured under images in your `next.config.js`\nSee more info: https://nextjs.org/docs/messages/next-image-unconfigured-host');
              }
            }
          }
          if (quality && config.qualities && !config.qualities.includes(quality)) {
            throw new Error("Invalid quality prop (" + quality + ") on `next/image` does not match `images.qualities` configured in your `next.config.js`\nSee more info: https://nextjs.org/docs/messages/next-image-unconfigured-qualities");
          }
        }
        const q = quality || ((_config_qualities = config.qualities) == null ? void 0 : _config_qualities.reduce((prev, cur) => Math.abs(cur - DEFAULT_Q) < Math.abs(prev - DEFAULT_Q) ? cur : prev)) || DEFAULT_Q;
        return config.path + "?url=" + encodeURIComponent(src) + "&w=" + width + "&q=" + q + (src.startsWith("/_next/static/media/") && process.env.NEXT_DEPLOYMENT_ID ? "&dpl=" + process.env.NEXT_DEPLOYMENT_ID : "");
      }
      defaultLoader.__next_img_default = true;
      var _default = defaultLoader;
    }
  });

  // node_modules/next/dist/client/image-component.js
  var require_image_component = __commonJS({
    "node_modules/next/dist/client/image-component.js"(exports, module) {
      "use client";
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      Object.defineProperty(exports, "Image", {
        enumerable: true,
        get: function() {
          return Image2;
        }
      });
      var _interop_require_default = require_interop_require_default();
      var _interop_require_wildcard = require_interop_require_wildcard();
      var _jsxruntime = require_jsx_runtime();
      var _react = /* @__PURE__ */ _interop_require_wildcard._(require_react());
      var _reactdom = /* @__PURE__ */ _interop_require_default._(require_react_dom());
      var _head = /* @__PURE__ */ _interop_require_default._(require_head());
      var _getimgprops = require_get_img_props();
      var _imageconfig = require_image_config();
      var _imageconfigcontextsharedruntime = require_image_config_context_shared_runtime();
      var _warnonce = require_warn_once();
      var _routercontextsharedruntime = require_router_context_shared_runtime();
      var _imageloader = /* @__PURE__ */ _interop_require_default._(require_image_loader());
      var _usemergedref = require_use_merged_ref();
      var configEnv = process.env.__NEXT_IMAGE_OPTS;
      if (typeof window === "undefined") {
        ;
        globalThis.__NEXT_IMAGE_IMPORTED = true;
      }
      function handleLoading(img, placeholder, onLoadRef, onLoadingCompleteRef, setBlurComplete, unoptimized, sizesInput) {
        const src = img == null ? void 0 : img.src;
        if (!img || img["data-loaded-src"] === src) {
          return;
        }
        img["data-loaded-src"] = src;
        const p = "decode" in img ? img.decode() : Promise.resolve();
        p.catch(() => {
        }).then(() => {
          if (!img.parentElement || !img.isConnected) {
            return;
          }
          if (placeholder !== "empty") {
            setBlurComplete(true);
          }
          if (onLoadRef == null ? void 0 : onLoadRef.current) {
            const event = new Event("load");
            Object.defineProperty(event, "target", {
              writable: false,
              value: img
            });
            let prevented = false;
            let stopped = false;
            onLoadRef.current(__spreadProps(__spreadValues({}, event), {
              nativeEvent: event,
              currentTarget: img,
              target: img,
              isDefaultPrevented: () => prevented,
              isPropagationStopped: () => stopped,
              persist: () => {
              },
              preventDefault: () => {
                prevented = true;
                event.preventDefault();
              },
              stopPropagation: () => {
                stopped = true;
                event.stopPropagation();
              }
            }));
          }
          if (onLoadingCompleteRef == null ? void 0 : onLoadingCompleteRef.current) {
            onLoadingCompleteRef.current(img);
          }
          if (true) {
            const origSrc = new URL(src, "http://n").searchParams.get("url") || src;
            if (img.getAttribute("data-nimg") === "fill") {
              if (!unoptimized && (!sizesInput || sizesInput === "100vw")) {
                let widthViewportRatio = img.getBoundingClientRect().width / window.innerWidth;
                if (widthViewportRatio < 0.6) {
                  if (sizesInput === "100vw") {
                    (0, _warnonce.warnOnce)('Image with src "' + origSrc + '" has "fill" prop and "sizes" prop of "100vw", but image is not rendered at full viewport width. Please adjust "sizes" to improve page performance. Read more: https://nextjs.org/docs/api-reference/next/image#sizes');
                  } else {
                    (0, _warnonce.warnOnce)('Image with src "' + origSrc + '" has "fill" but is missing "sizes" prop. Please add it to improve page performance. Read more: https://nextjs.org/docs/api-reference/next/image#sizes');
                  }
                }
              }
              if (img.parentElement) {
                const { position } = window.getComputedStyle(img.parentElement);
                const valid = [
                  "absolute",
                  "fixed",
                  "relative"
                ];
                if (!valid.includes(position)) {
                  (0, _warnonce.warnOnce)('Image with src "' + origSrc + '" has "fill" and parent element with invalid "position". Provided "' + position + '" should be one of ' + valid.map(String).join(",") + ".");
                }
              }
              if (img.height === 0) {
                (0, _warnonce.warnOnce)('Image with src "' + origSrc + '" has "fill" and a height value of 0. This is likely because the parent element of the image has not been styled to have a set height.');
              }
            }
            const heightModified = img.height.toString() !== img.getAttribute("height");
            const widthModified = img.width.toString() !== img.getAttribute("width");
            if (heightModified && !widthModified || !heightModified && widthModified) {
              (0, _warnonce.warnOnce)('Image with src "' + origSrc + '" has either width or height modified, but not the other. If you use CSS to change the size of your image, also include the styles \'width: "auto"\' or \'height: "auto"\' to maintain the aspect ratio.');
            }
          }
        });
      }
      function getDynamicProps(fetchPriority) {
        if (Boolean(_react.use)) {
          return {
            fetchPriority
          };
        }
        return {
          fetchpriority: fetchPriority
        };
      }
      var ImageElement = /* @__PURE__ */ (0, _react.forwardRef)((param, forwardedRef) => {
        let _a = param, { src, srcSet, sizes, height, width, decoding, className, style, fetchPriority, placeholder, loading, unoptimized, fill, onLoadRef, onLoadingCompleteRef, setBlurComplete, setShowAltText, sizesInput, onLoad, onError } = _a, rest = __objRest(_a, ["src", "srcSet", "sizes", "height", "width", "decoding", "className", "style", "fetchPriority", "placeholder", "loading", "unoptimized", "fill", "onLoadRef", "onLoadingCompleteRef", "setBlurComplete", "setShowAltText", "sizesInput", "onLoad", "onError"]);
        const ownRef = (0, _react.useCallback)((img) => {
          if (!img) {
            return;
          }
          if (onError) {
            img.src = img.src;
          }
          if (true) {
            if (!src) {
              console.error('Image is missing required "src" property:', img);
            }
            if (img.getAttribute("alt") === null) {
              console.error('Image is missing required "alt" property. Please add Alternative Text to describe the image for screen readers and search engines.');
            }
          }
          if (img.complete) {
            handleLoading(img, placeholder, onLoadRef, onLoadingCompleteRef, setBlurComplete, unoptimized, sizesInput);
          }
        }, [
          src,
          placeholder,
          onLoadRef,
          onLoadingCompleteRef,
          setBlurComplete,
          onError,
          unoptimized,
          sizesInput
        ]);
        const ref = (0, _usemergedref.useMergedRef)(forwardedRef, ownRef);
        return /* @__PURE__ */ (0, _jsxruntime.jsx)("img", __spreadProps(__spreadValues(__spreadValues({}, rest), getDynamicProps(fetchPriority)), {
          // It's intended to keep `loading` before `src` because React updates
          // props in order which causes Safari/Firefox to not lazy load properly.
          // See https://github.com/facebook/react/issues/25883
          loading,
          width,
          height,
          decoding,
          "data-nimg": fill ? "fill" : "1",
          className,
          style,
          // It's intended to keep `src` the last attribute because React updates
          // attributes in order. If we keep `src` the first one, Safari will
          // immediately start to fetch `src`, before `sizes` and `srcSet` are even
          // updated by React. That causes multiple unnecessary requests if `srcSet`
          // and `sizes` are defined.
          // This bug cannot be reproduced in Chrome or Firefox.
          sizes,
          srcSet,
          src,
          ref,
          onLoad: (event) => {
            const img = event.currentTarget;
            handleLoading(img, placeholder, onLoadRef, onLoadingCompleteRef, setBlurComplete, unoptimized, sizesInput);
          },
          onError: (event) => {
            setShowAltText(true);
            if (placeholder !== "empty") {
              setBlurComplete(true);
            }
            if (onError) {
              onError(event);
            }
          }
        }));
      });
      function ImagePreload(param) {
        let { isAppRouter, imgAttributes } = param;
        const opts = __spreadValues({
          as: "image",
          imageSrcSet: imgAttributes.srcSet,
          imageSizes: imgAttributes.sizes,
          crossOrigin: imgAttributes.crossOrigin,
          referrerPolicy: imgAttributes.referrerPolicy
        }, getDynamicProps(imgAttributes.fetchPriority));
        if (isAppRouter && _reactdom.default.preload) {
          _reactdom.default.preload(
            imgAttributes.src,
            // @ts-expect-error TODO: upgrade to `@types/react-dom@18.3.x`
            opts
          );
          return null;
        }
        return /* @__PURE__ */ (0, _jsxruntime.jsx)(_head.default, {
          children: /* @__PURE__ */ (0, _jsxruntime.jsx)("link", __spreadValues({
            rel: "preload",
            // Note how we omit the `href` attribute, as it would only be relevant
            // for browsers that do not support `imagesrcset`, and in those cases
            // it would cause the incorrect image to be preloaded.
            //
            // https://html.spec.whatwg.org/multipage/semantics.html#attr-link-imagesrcset
            href: imgAttributes.srcSet ? void 0 : imgAttributes.src
          }, opts), "__nimg-" + imgAttributes.src + imgAttributes.srcSet + imgAttributes.sizes)
        });
      }
      var Image2 = /* @__PURE__ */ (0, _react.forwardRef)((props, forwardedRef) => {
        const pagesRouter = (0, _react.useContext)(_routercontextsharedruntime.RouterContext);
        const isAppRouter = !pagesRouter;
        const configContext = (0, _react.useContext)(_imageconfigcontextsharedruntime.ImageConfigContext);
        const config = (0, _react.useMemo)(() => {
          var _c_qualities;
          const c = configEnv || configContext || _imageconfig.imageConfigDefault;
          const allSizes = [
            ...c.deviceSizes,
            ...c.imageSizes
          ].sort((a, b) => a - b);
          const deviceSizes = c.deviceSizes.sort((a, b) => a - b);
          const qualities = (_c_qualities = c.qualities) == null ? void 0 : _c_qualities.sort((a, b) => a - b);
          return __spreadProps(__spreadValues({}, c), {
            allSizes,
            deviceSizes,
            qualities
          });
        }, [
          configContext
        ]);
        const { onLoad, onLoadingComplete } = props;
        const onLoadRef = (0, _react.useRef)(onLoad);
        (0, _react.useEffect)(() => {
          onLoadRef.current = onLoad;
        }, [
          onLoad
        ]);
        const onLoadingCompleteRef = (0, _react.useRef)(onLoadingComplete);
        (0, _react.useEffect)(() => {
          onLoadingCompleteRef.current = onLoadingComplete;
        }, [
          onLoadingComplete
        ]);
        const [blurComplete, setBlurComplete] = (0, _react.useState)(false);
        const [showAltText, setShowAltText] = (0, _react.useState)(false);
        const { props: imgAttributes, meta: imgMeta } = (0, _getimgprops.getImgProps)(props, {
          defaultLoader: _imageloader.default,
          imgConf: config,
          blurComplete,
          showAltText
        });
        return /* @__PURE__ */ (0, _jsxruntime.jsxs)(_jsxruntime.Fragment, {
          children: [
            /* @__PURE__ */ (0, _jsxruntime.jsx)(ImageElement, __spreadProps(__spreadValues({}, imgAttributes), {
              unoptimized: imgMeta.unoptimized,
              placeholder: imgMeta.placeholder,
              fill: imgMeta.fill,
              onLoadRef,
              onLoadingCompleteRef,
              setBlurComplete,
              setShowAltText,
              sizesInput: props.sizes,
              ref: forwardedRef
            })),
            imgMeta.priority ? /* @__PURE__ */ (0, _jsxruntime.jsx)(ImagePreload, {
              isAppRouter,
              imgAttributes
            }) : null
          ]
        });
      });
      if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
        Object.defineProperty(exports.default, "__esModule", { value: true });
        Object.assign(exports.default, exports);
        module.exports = exports.default;
      }
    }
  });

  // node_modules/next/dist/shared/lib/image-external.js
  var require_image_external = __commonJS({
    "node_modules/next/dist/shared/lib/image-external.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      function _export(target, all) {
        for (var name in all) Object.defineProperty(target, name, {
          enumerable: true,
          get: all[name]
        });
      }
      _export(exports, {
        default: function() {
          return _default;
        },
        getImageProps: function() {
          return getImageProps;
        }
      });
      var _interop_require_default = require_interop_require_default();
      var _getimgprops = require_get_img_props();
      var _imagecomponent = require_image_component();
      var _imageloader = /* @__PURE__ */ _interop_require_default._(require_image_loader());
      function getImageProps(imgProps) {
        const { props } = (0, _getimgprops.getImgProps)(imgProps, {
          defaultLoader: _imageloader.default,
          // This is replaced by webpack define plugin
          imgConf: process.env.__NEXT_IMAGE_OPTS
        });
        for (const [key, value] of Object.entries(props)) {
          if (value === void 0) {
            delete props[key];
          }
        }
        return {
          props
        };
      }
      var _default = _imagecomponent.Image;
    }
  });

  // node_modules/next/image.js
  var require_image = __commonJS({
    "node_modules/next/image.js"(exports, module) {
      module.exports = require_image_external();
    }
  });

  // public/admin/DocsPreview.jsx
  var DocsPreview_exports = {};
  __export(DocsPreview_exports, {
    default: () => DocsPreview_default
  });
  var React17 = __toESM(require_react(), 1);

  // node_modules/fumadocs-ui/dist/mdx.js
  var import_jsx_runtime13 = __toESM(require_jsx_runtime(), 1);

  // node_modules/fumadocs-core/dist/chunk-DVOZJZGH.js
  var import_link = __toESM(require_link2(), 1);
  var import_react = __toESM(require_react(), 1);
  var import_jsx_runtime = __toESM(require_jsx_runtime(), 1);
  var Link = (0, import_react.forwardRef)(
    (_a, ref) => {
      var _b = _a, {
        href = "#",
        external = !(href.startsWith("/") || href.startsWith("#") || href.startsWith(".")),
        prefetch,
        replace
      } = _b, props = __objRest(_b, [
        "href",
        "external",
        "prefetch",
        "replace"
      ]);
      if (external) {
        return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
          "a",
          __spreadProps(__spreadValues({
            ref,
            href,
            rel: "noreferrer noopener",
            target: "_blank"
          }, props), {
            children: props.children
          })
        );
      }
      return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
        import_link.default,
        __spreadValues({
          ref,
          href,
          prefetch,
          replace
        }, props)
      );
    }
  );
  Link.displayName = "Link";

  // node_modules/fumadocs-ui/dist/mdx.js
  var import_image = __toESM(require_image(), 1);

  // node_modules/fumadocs-ui/dist/components/card.js
  var import_jsx_runtime2 = __toESM(require_jsx_runtime(), 1);

  // node_modules/tailwind-merge/dist/bundle-mjs.mjs
  var CLASS_PART_SEPARATOR = "-";
  var createClassGroupUtils = (config) => {
    const classMap = createClassMap(config);
    const {
      conflictingClassGroups,
      conflictingClassGroupModifiers
    } = config;
    const getClassGroupId = (className) => {
      const classParts = className.split(CLASS_PART_SEPARATOR);
      if (classParts[0] === "" && classParts.length !== 1) {
        classParts.shift();
      }
      return getGroupRecursive(classParts, classMap) || getGroupIdForArbitraryProperty(className);
    };
    const getConflictingClassGroupIds = (classGroupId, hasPostfixModifier) => {
      const conflicts = conflictingClassGroups[classGroupId] || [];
      if (hasPostfixModifier && conflictingClassGroupModifiers[classGroupId]) {
        return [...conflicts, ...conflictingClassGroupModifiers[classGroupId]];
      }
      return conflicts;
    };
    return {
      getClassGroupId,
      getConflictingClassGroupIds
    };
  };
  var getGroupRecursive = (classParts, classPartObject) => {
    var _a;
    if (classParts.length === 0) {
      return classPartObject.classGroupId;
    }
    const currentClassPart = classParts[0];
    const nextClassPartObject = classPartObject.nextPart.get(currentClassPart);
    const classGroupFromNextClassPart = nextClassPartObject ? getGroupRecursive(classParts.slice(1), nextClassPartObject) : void 0;
    if (classGroupFromNextClassPart) {
      return classGroupFromNextClassPart;
    }
    if (classPartObject.validators.length === 0) {
      return void 0;
    }
    const classRest = classParts.join(CLASS_PART_SEPARATOR);
    return (_a = classPartObject.validators.find(({
      validator
    }) => validator(classRest))) == null ? void 0 : _a.classGroupId;
  };
  var arbitraryPropertyRegex = /^\[(.+)\]$/;
  var getGroupIdForArbitraryProperty = (className) => {
    if (arbitraryPropertyRegex.test(className)) {
      const arbitraryPropertyClassName = arbitraryPropertyRegex.exec(className)[1];
      const property = arbitraryPropertyClassName == null ? void 0 : arbitraryPropertyClassName.substring(0, arbitraryPropertyClassName.indexOf(":"));
      if (property) {
        return "arbitrary.." + property;
      }
    }
  };
  var createClassMap = (config) => {
    const {
      theme,
      prefix
    } = config;
    const classMap = {
      nextPart: /* @__PURE__ */ new Map(),
      validators: []
    };
    const prefixedClassGroupEntries = getPrefixedClassGroupEntries(Object.entries(config.classGroups), prefix);
    prefixedClassGroupEntries.forEach(([classGroupId, classGroup]) => {
      processClassesRecursively(classGroup, classMap, classGroupId, theme);
    });
    return classMap;
  };
  var processClassesRecursively = (classGroup, classPartObject, classGroupId, theme) => {
    classGroup.forEach((classDefinition) => {
      if (typeof classDefinition === "string") {
        const classPartObjectToEdit = classDefinition === "" ? classPartObject : getPart(classPartObject, classDefinition);
        classPartObjectToEdit.classGroupId = classGroupId;
        return;
      }
      if (typeof classDefinition === "function") {
        if (isThemeGetter(classDefinition)) {
          processClassesRecursively(classDefinition(theme), classPartObject, classGroupId, theme);
          return;
        }
        classPartObject.validators.push({
          validator: classDefinition,
          classGroupId
        });
        return;
      }
      Object.entries(classDefinition).forEach(([key, classGroup2]) => {
        processClassesRecursively(classGroup2, getPart(classPartObject, key), classGroupId, theme);
      });
    });
  };
  var getPart = (classPartObject, path) => {
    let currentClassPartObject = classPartObject;
    path.split(CLASS_PART_SEPARATOR).forEach((pathPart) => {
      if (!currentClassPartObject.nextPart.has(pathPart)) {
        currentClassPartObject.nextPart.set(pathPart, {
          nextPart: /* @__PURE__ */ new Map(),
          validators: []
        });
      }
      currentClassPartObject = currentClassPartObject.nextPart.get(pathPart);
    });
    return currentClassPartObject;
  };
  var isThemeGetter = (func) => func.isThemeGetter;
  var getPrefixedClassGroupEntries = (classGroupEntries, prefix) => {
    if (!prefix) {
      return classGroupEntries;
    }
    return classGroupEntries.map(([classGroupId, classGroup]) => {
      const prefixedClassGroup = classGroup.map((classDefinition) => {
        if (typeof classDefinition === "string") {
          return prefix + classDefinition;
        }
        if (typeof classDefinition === "object") {
          return Object.fromEntries(Object.entries(classDefinition).map(([key, value]) => [prefix + key, value]));
        }
        return classDefinition;
      });
      return [classGroupId, prefixedClassGroup];
    });
  };
  var createLruCache = (maxCacheSize) => {
    if (maxCacheSize < 1) {
      return {
        get: () => void 0,
        set: () => {
        }
      };
    }
    let cacheSize = 0;
    let cache = /* @__PURE__ */ new Map();
    let previousCache = /* @__PURE__ */ new Map();
    const update = (key, value) => {
      cache.set(key, value);
      cacheSize++;
      if (cacheSize > maxCacheSize) {
        cacheSize = 0;
        previousCache = cache;
        cache = /* @__PURE__ */ new Map();
      }
    };
    return {
      get(key) {
        let value = cache.get(key);
        if (value !== void 0) {
          return value;
        }
        if ((value = previousCache.get(key)) !== void 0) {
          update(key, value);
          return value;
        }
      },
      set(key, value) {
        if (cache.has(key)) {
          cache.set(key, value);
        } else {
          update(key, value);
        }
      }
    };
  };
  var IMPORTANT_MODIFIER = "!";
  var createParseClassName = (config) => {
    const {
      separator,
      experimentalParseClassName
    } = config;
    const isSeparatorSingleCharacter = separator.length === 1;
    const firstSeparatorCharacter = separator[0];
    const separatorLength = separator.length;
    const parseClassName = (className) => {
      const modifiers = [];
      let bracketDepth = 0;
      let modifierStart = 0;
      let postfixModifierPosition;
      for (let index = 0; index < className.length; index++) {
        let currentCharacter = className[index];
        if (bracketDepth === 0) {
          if (currentCharacter === firstSeparatorCharacter && (isSeparatorSingleCharacter || className.slice(index, index + separatorLength) === separator)) {
            modifiers.push(className.slice(modifierStart, index));
            modifierStart = index + separatorLength;
            continue;
          }
          if (currentCharacter === "/") {
            postfixModifierPosition = index;
            continue;
          }
        }
        if (currentCharacter === "[") {
          bracketDepth++;
        } else if (currentCharacter === "]") {
          bracketDepth--;
        }
      }
      const baseClassNameWithImportantModifier = modifiers.length === 0 ? className : className.substring(modifierStart);
      const hasImportantModifier = baseClassNameWithImportantModifier.startsWith(IMPORTANT_MODIFIER);
      const baseClassName = hasImportantModifier ? baseClassNameWithImportantModifier.substring(1) : baseClassNameWithImportantModifier;
      const maybePostfixModifierPosition = postfixModifierPosition && postfixModifierPosition > modifierStart ? postfixModifierPosition - modifierStart : void 0;
      return {
        modifiers,
        hasImportantModifier,
        baseClassName,
        maybePostfixModifierPosition
      };
    };
    if (experimentalParseClassName) {
      return (className) => experimentalParseClassName({
        className,
        parseClassName
      });
    }
    return parseClassName;
  };
  var sortModifiers = (modifiers) => {
    if (modifiers.length <= 1) {
      return modifiers;
    }
    const sortedModifiers = [];
    let unsortedModifiers = [];
    modifiers.forEach((modifier) => {
      const isArbitraryVariant = modifier[0] === "[";
      if (isArbitraryVariant) {
        sortedModifiers.push(...unsortedModifiers.sort(), modifier);
        unsortedModifiers = [];
      } else {
        unsortedModifiers.push(modifier);
      }
    });
    sortedModifiers.push(...unsortedModifiers.sort());
    return sortedModifiers;
  };
  var createConfigUtils = (config) => __spreadValues({
    cache: createLruCache(config.cacheSize),
    parseClassName: createParseClassName(config)
  }, createClassGroupUtils(config));
  var SPLIT_CLASSES_REGEX = /\s+/;
  var mergeClassList = (classList, configUtils) => {
    const {
      parseClassName,
      getClassGroupId,
      getConflictingClassGroupIds
    } = configUtils;
    const classGroupsInConflict = [];
    const classNames = classList.trim().split(SPLIT_CLASSES_REGEX);
    let result = "";
    for (let index = classNames.length - 1; index >= 0; index -= 1) {
      const originalClassName = classNames[index];
      const {
        modifiers,
        hasImportantModifier,
        baseClassName,
        maybePostfixModifierPosition
      } = parseClassName(originalClassName);
      let hasPostfixModifier = Boolean(maybePostfixModifierPosition);
      let classGroupId = getClassGroupId(hasPostfixModifier ? baseClassName.substring(0, maybePostfixModifierPosition) : baseClassName);
      if (!classGroupId) {
        if (!hasPostfixModifier) {
          result = originalClassName + (result.length > 0 ? " " + result : result);
          continue;
        }
        classGroupId = getClassGroupId(baseClassName);
        if (!classGroupId) {
          result = originalClassName + (result.length > 0 ? " " + result : result);
          continue;
        }
        hasPostfixModifier = false;
      }
      const variantModifier = sortModifiers(modifiers).join(":");
      const modifierId = hasImportantModifier ? variantModifier + IMPORTANT_MODIFIER : variantModifier;
      const classId = modifierId + classGroupId;
      if (classGroupsInConflict.includes(classId)) {
        continue;
      }
      classGroupsInConflict.push(classId);
      const conflictGroups = getConflictingClassGroupIds(classGroupId, hasPostfixModifier);
      for (let i = 0; i < conflictGroups.length; ++i) {
        const group = conflictGroups[i];
        classGroupsInConflict.push(modifierId + group);
      }
      result = originalClassName + (result.length > 0 ? " " + result : result);
    }
    return result;
  };
  function twJoin() {
    let index = 0;
    let argument;
    let resolvedValue;
    let string = "";
    while (index < arguments.length) {
      if (argument = arguments[index++]) {
        if (resolvedValue = toValue(argument)) {
          string && (string += " ");
          string += resolvedValue;
        }
      }
    }
    return string;
  }
  var toValue = (mix) => {
    if (typeof mix === "string") {
      return mix;
    }
    let resolvedValue;
    let string = "";
    for (let k = 0; k < mix.length; k++) {
      if (mix[k]) {
        if (resolvedValue = toValue(mix[k])) {
          string && (string += " ");
          string += resolvedValue;
        }
      }
    }
    return string;
  };
  function createTailwindMerge(createConfigFirst, ...createConfigRest) {
    let configUtils;
    let cacheGet;
    let cacheSet;
    let functionToCall = initTailwindMerge;
    function initTailwindMerge(classList) {
      const config = createConfigRest.reduce((previousConfig, createConfigCurrent) => createConfigCurrent(previousConfig), createConfigFirst());
      configUtils = createConfigUtils(config);
      cacheGet = configUtils.cache.get;
      cacheSet = configUtils.cache.set;
      functionToCall = tailwindMerge;
      return tailwindMerge(classList);
    }
    function tailwindMerge(classList) {
      const cachedResult = cacheGet(classList);
      if (cachedResult) {
        return cachedResult;
      }
      const result = mergeClassList(classList, configUtils);
      cacheSet(classList, result);
      return result;
    }
    return function callTailwindMerge() {
      return functionToCall(twJoin.apply(null, arguments));
    };
  }
  var fromTheme = (key) => {
    const themeGetter = (theme) => theme[key] || [];
    themeGetter.isThemeGetter = true;
    return themeGetter;
  };
  var arbitraryValueRegex = /^\[(?:([a-z-]+):)?(.+)\]$/i;
  var fractionRegex = /^\d+\/\d+$/;
  var stringLengths = /* @__PURE__ */ new Set(["px", "full", "screen"]);
  var tshirtUnitRegex = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/;
  var lengthUnitRegex = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/;
  var colorFunctionRegex = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/;
  var shadowRegex = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/;
  var imageRegex = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/;
  var isLength = (value) => isNumber(value) || stringLengths.has(value) || fractionRegex.test(value);
  var isArbitraryLength = (value) => getIsArbitraryValue(value, "length", isLengthOnly);
  var isNumber = (value) => Boolean(value) && !Number.isNaN(Number(value));
  var isArbitraryNumber = (value) => getIsArbitraryValue(value, "number", isNumber);
  var isInteger = (value) => Boolean(value) && Number.isInteger(Number(value));
  var isPercent = (value) => value.endsWith("%") && isNumber(value.slice(0, -1));
  var isArbitraryValue = (value) => arbitraryValueRegex.test(value);
  var isTshirtSize = (value) => tshirtUnitRegex.test(value);
  var sizeLabels = /* @__PURE__ */ new Set(["length", "size", "percentage"]);
  var isArbitrarySize = (value) => getIsArbitraryValue(value, sizeLabels, isNever);
  var isArbitraryPosition = (value) => getIsArbitraryValue(value, "position", isNever);
  var imageLabels = /* @__PURE__ */ new Set(["image", "url"]);
  var isArbitraryImage = (value) => getIsArbitraryValue(value, imageLabels, isImage);
  var isArbitraryShadow = (value) => getIsArbitraryValue(value, "", isShadow);
  var isAny = () => true;
  var getIsArbitraryValue = (value, label, testValue) => {
    const result = arbitraryValueRegex.exec(value);
    if (result) {
      if (result[1]) {
        return typeof label === "string" ? result[1] === label : label.has(result[1]);
      }
      return testValue(result[2]);
    }
    return false;
  };
  var isLengthOnly = (value) => (
    // `colorFunctionRegex` check is necessary because color functions can have percentages in them which which would be incorrectly classified as lengths.
    // For example, `hsl(0 0% 0%)` would be classified as a length without this check.
    // I could also use lookbehind assertion in `lengthUnitRegex` but that isn't supported widely enough.
    lengthUnitRegex.test(value) && !colorFunctionRegex.test(value)
  );
  var isNever = () => false;
  var isShadow = (value) => shadowRegex.test(value);
  var isImage = (value) => imageRegex.test(value);
  var getDefaultConfig = () => {
    const colors = fromTheme("colors");
    const spacing = fromTheme("spacing");
    const blur = fromTheme("blur");
    const brightness = fromTheme("brightness");
    const borderColor = fromTheme("borderColor");
    const borderRadius = fromTheme("borderRadius");
    const borderSpacing = fromTheme("borderSpacing");
    const borderWidth = fromTheme("borderWidth");
    const contrast = fromTheme("contrast");
    const grayscale = fromTheme("grayscale");
    const hueRotate = fromTheme("hueRotate");
    const invert = fromTheme("invert");
    const gap = fromTheme("gap");
    const gradientColorStops = fromTheme("gradientColorStops");
    const gradientColorStopPositions = fromTheme("gradientColorStopPositions");
    const inset = fromTheme("inset");
    const margin = fromTheme("margin");
    const opacity = fromTheme("opacity");
    const padding = fromTheme("padding");
    const saturate = fromTheme("saturate");
    const scale = fromTheme("scale");
    const sepia = fromTheme("sepia");
    const skew = fromTheme("skew");
    const space = fromTheme("space");
    const translate = fromTheme("translate");
    const getOverscroll = () => ["auto", "contain", "none"];
    const getOverflow = () => ["auto", "hidden", "clip", "visible", "scroll"];
    const getSpacingWithAutoAndArbitrary = () => ["auto", isArbitraryValue, spacing];
    const getSpacingWithArbitrary = () => [isArbitraryValue, spacing];
    const getLengthWithEmptyAndArbitrary = () => ["", isLength, isArbitraryLength];
    const getNumberWithAutoAndArbitrary = () => ["auto", isNumber, isArbitraryValue];
    const getPositions = () => ["bottom", "center", "left", "left-bottom", "left-top", "right", "right-bottom", "right-top", "top"];
    const getLineStyles = () => ["solid", "dashed", "dotted", "double", "none"];
    const getBlendModes = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"];
    const getAlign = () => ["start", "end", "center", "between", "around", "evenly", "stretch"];
    const getZeroAndEmpty = () => ["", "0", isArbitraryValue];
    const getBreaks = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"];
    const getNumberAndArbitrary = () => [isNumber, isArbitraryValue];
    return {
      cacheSize: 500,
      separator: ":",
      theme: {
        colors: [isAny],
        spacing: [isLength, isArbitraryLength],
        blur: ["none", "", isTshirtSize, isArbitraryValue],
        brightness: getNumberAndArbitrary(),
        borderColor: [colors],
        borderRadius: ["none", "", "full", isTshirtSize, isArbitraryValue],
        borderSpacing: getSpacingWithArbitrary(),
        borderWidth: getLengthWithEmptyAndArbitrary(),
        contrast: getNumberAndArbitrary(),
        grayscale: getZeroAndEmpty(),
        hueRotate: getNumberAndArbitrary(),
        invert: getZeroAndEmpty(),
        gap: getSpacingWithArbitrary(),
        gradientColorStops: [colors],
        gradientColorStopPositions: [isPercent, isArbitraryLength],
        inset: getSpacingWithAutoAndArbitrary(),
        margin: getSpacingWithAutoAndArbitrary(),
        opacity: getNumberAndArbitrary(),
        padding: getSpacingWithArbitrary(),
        saturate: getNumberAndArbitrary(),
        scale: getNumberAndArbitrary(),
        sepia: getZeroAndEmpty(),
        skew: getNumberAndArbitrary(),
        space: getSpacingWithArbitrary(),
        translate: getSpacingWithArbitrary()
      },
      classGroups: {
        // Layout
        /**
         * Aspect Ratio
         * @see https://tailwindcss.com/docs/aspect-ratio
         */
        aspect: [{
          aspect: ["auto", "square", "video", isArbitraryValue]
        }],
        /**
         * Container
         * @see https://tailwindcss.com/docs/container
         */
        container: ["container"],
        /**
         * Columns
         * @see https://tailwindcss.com/docs/columns
         */
        columns: [{
          columns: [isTshirtSize]
        }],
        /**
         * Break After
         * @see https://tailwindcss.com/docs/break-after
         */
        "break-after": [{
          "break-after": getBreaks()
        }],
        /**
         * Break Before
         * @see https://tailwindcss.com/docs/break-before
         */
        "break-before": [{
          "break-before": getBreaks()
        }],
        /**
         * Break Inside
         * @see https://tailwindcss.com/docs/break-inside
         */
        "break-inside": [{
          "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"]
        }],
        /**
         * Box Decoration Break
         * @see https://tailwindcss.com/docs/box-decoration-break
         */
        "box-decoration": [{
          "box-decoration": ["slice", "clone"]
        }],
        /**
         * Box Sizing
         * @see https://tailwindcss.com/docs/box-sizing
         */
        box: [{
          box: ["border", "content"]
        }],
        /**
         * Display
         * @see https://tailwindcss.com/docs/display
         */
        display: ["block", "inline-block", "inline", "flex", "inline-flex", "table", "inline-table", "table-caption", "table-cell", "table-column", "table-column-group", "table-footer-group", "table-header-group", "table-row-group", "table-row", "flow-root", "grid", "inline-grid", "contents", "list-item", "hidden"],
        /**
         * Floats
         * @see https://tailwindcss.com/docs/float
         */
        float: [{
          float: ["right", "left", "none", "start", "end"]
        }],
        /**
         * Clear
         * @see https://tailwindcss.com/docs/clear
         */
        clear: [{
          clear: ["left", "right", "both", "none", "start", "end"]
        }],
        /**
         * Isolation
         * @see https://tailwindcss.com/docs/isolation
         */
        isolation: ["isolate", "isolation-auto"],
        /**
         * Object Fit
         * @see https://tailwindcss.com/docs/object-fit
         */
        "object-fit": [{
          object: ["contain", "cover", "fill", "none", "scale-down"]
        }],
        /**
         * Object Position
         * @see https://tailwindcss.com/docs/object-position
         */
        "object-position": [{
          object: [...getPositions(), isArbitraryValue]
        }],
        /**
         * Overflow
         * @see https://tailwindcss.com/docs/overflow
         */
        overflow: [{
          overflow: getOverflow()
        }],
        /**
         * Overflow X
         * @see https://tailwindcss.com/docs/overflow
         */
        "overflow-x": [{
          "overflow-x": getOverflow()
        }],
        /**
         * Overflow Y
         * @see https://tailwindcss.com/docs/overflow
         */
        "overflow-y": [{
          "overflow-y": getOverflow()
        }],
        /**
         * Overscroll Behavior
         * @see https://tailwindcss.com/docs/overscroll-behavior
         */
        overscroll: [{
          overscroll: getOverscroll()
        }],
        /**
         * Overscroll Behavior X
         * @see https://tailwindcss.com/docs/overscroll-behavior
         */
        "overscroll-x": [{
          "overscroll-x": getOverscroll()
        }],
        /**
         * Overscroll Behavior Y
         * @see https://tailwindcss.com/docs/overscroll-behavior
         */
        "overscroll-y": [{
          "overscroll-y": getOverscroll()
        }],
        /**
         * Position
         * @see https://tailwindcss.com/docs/position
         */
        position: ["static", "fixed", "absolute", "relative", "sticky"],
        /**
         * Top / Right / Bottom / Left
         * @see https://tailwindcss.com/docs/top-right-bottom-left
         */
        inset: [{
          inset: [inset]
        }],
        /**
         * Right / Left
         * @see https://tailwindcss.com/docs/top-right-bottom-left
         */
        "inset-x": [{
          "inset-x": [inset]
        }],
        /**
         * Top / Bottom
         * @see https://tailwindcss.com/docs/top-right-bottom-left
         */
        "inset-y": [{
          "inset-y": [inset]
        }],
        /**
         * Start
         * @see https://tailwindcss.com/docs/top-right-bottom-left
         */
        start: [{
          start: [inset]
        }],
        /**
         * End
         * @see https://tailwindcss.com/docs/top-right-bottom-left
         */
        end: [{
          end: [inset]
        }],
        /**
         * Top
         * @see https://tailwindcss.com/docs/top-right-bottom-left
         */
        top: [{
          top: [inset]
        }],
        /**
         * Right
         * @see https://tailwindcss.com/docs/top-right-bottom-left
         */
        right: [{
          right: [inset]
        }],
        /**
         * Bottom
         * @see https://tailwindcss.com/docs/top-right-bottom-left
         */
        bottom: [{
          bottom: [inset]
        }],
        /**
         * Left
         * @see https://tailwindcss.com/docs/top-right-bottom-left
         */
        left: [{
          left: [inset]
        }],
        /**
         * Visibility
         * @see https://tailwindcss.com/docs/visibility
         */
        visibility: ["visible", "invisible", "collapse"],
        /**
         * Z-Index
         * @see https://tailwindcss.com/docs/z-index
         */
        z: [{
          z: ["auto", isInteger, isArbitraryValue]
        }],
        // Flexbox and Grid
        /**
         * Flex Basis
         * @see https://tailwindcss.com/docs/flex-basis
         */
        basis: [{
          basis: getSpacingWithAutoAndArbitrary()
        }],
        /**
         * Flex Direction
         * @see https://tailwindcss.com/docs/flex-direction
         */
        "flex-direction": [{
          flex: ["row", "row-reverse", "col", "col-reverse"]
        }],
        /**
         * Flex Wrap
         * @see https://tailwindcss.com/docs/flex-wrap
         */
        "flex-wrap": [{
          flex: ["wrap", "wrap-reverse", "nowrap"]
        }],
        /**
         * Flex
         * @see https://tailwindcss.com/docs/flex
         */
        flex: [{
          flex: ["1", "auto", "initial", "none", isArbitraryValue]
        }],
        /**
         * Flex Grow
         * @see https://tailwindcss.com/docs/flex-grow
         */
        grow: [{
          grow: getZeroAndEmpty()
        }],
        /**
         * Flex Shrink
         * @see https://tailwindcss.com/docs/flex-shrink
         */
        shrink: [{
          shrink: getZeroAndEmpty()
        }],
        /**
         * Order
         * @see https://tailwindcss.com/docs/order
         */
        order: [{
          order: ["first", "last", "none", isInteger, isArbitraryValue]
        }],
        /**
         * Grid Template Columns
         * @see https://tailwindcss.com/docs/grid-template-columns
         */
        "grid-cols": [{
          "grid-cols": [isAny]
        }],
        /**
         * Grid Column Start / End
         * @see https://tailwindcss.com/docs/grid-column
         */
        "col-start-end": [{
          col: ["auto", {
            span: ["full", isInteger, isArbitraryValue]
          }, isArbitraryValue]
        }],
        /**
         * Grid Column Start
         * @see https://tailwindcss.com/docs/grid-column
         */
        "col-start": [{
          "col-start": getNumberWithAutoAndArbitrary()
        }],
        /**
         * Grid Column End
         * @see https://tailwindcss.com/docs/grid-column
         */
        "col-end": [{
          "col-end": getNumberWithAutoAndArbitrary()
        }],
        /**
         * Grid Template Rows
         * @see https://tailwindcss.com/docs/grid-template-rows
         */
        "grid-rows": [{
          "grid-rows": [isAny]
        }],
        /**
         * Grid Row Start / End
         * @see https://tailwindcss.com/docs/grid-row
         */
        "row-start-end": [{
          row: ["auto", {
            span: [isInteger, isArbitraryValue]
          }, isArbitraryValue]
        }],
        /**
         * Grid Row Start
         * @see https://tailwindcss.com/docs/grid-row
         */
        "row-start": [{
          "row-start": getNumberWithAutoAndArbitrary()
        }],
        /**
         * Grid Row End
         * @see https://tailwindcss.com/docs/grid-row
         */
        "row-end": [{
          "row-end": getNumberWithAutoAndArbitrary()
        }],
        /**
         * Grid Auto Flow
         * @see https://tailwindcss.com/docs/grid-auto-flow
         */
        "grid-flow": [{
          "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"]
        }],
        /**
         * Grid Auto Columns
         * @see https://tailwindcss.com/docs/grid-auto-columns
         */
        "auto-cols": [{
          "auto-cols": ["auto", "min", "max", "fr", isArbitraryValue]
        }],
        /**
         * Grid Auto Rows
         * @see https://tailwindcss.com/docs/grid-auto-rows
         */
        "auto-rows": [{
          "auto-rows": ["auto", "min", "max", "fr", isArbitraryValue]
        }],
        /**
         * Gap
         * @see https://tailwindcss.com/docs/gap
         */
        gap: [{
          gap: [gap]
        }],
        /**
         * Gap X
         * @see https://tailwindcss.com/docs/gap
         */
        "gap-x": [{
          "gap-x": [gap]
        }],
        /**
         * Gap Y
         * @see https://tailwindcss.com/docs/gap
         */
        "gap-y": [{
          "gap-y": [gap]
        }],
        /**
         * Justify Content
         * @see https://tailwindcss.com/docs/justify-content
         */
        "justify-content": [{
          justify: ["normal", ...getAlign()]
        }],
        /**
         * Justify Items
         * @see https://tailwindcss.com/docs/justify-items
         */
        "justify-items": [{
          "justify-items": ["start", "end", "center", "stretch"]
        }],
        /**
         * Justify Self
         * @see https://tailwindcss.com/docs/justify-self
         */
        "justify-self": [{
          "justify-self": ["auto", "start", "end", "center", "stretch"]
        }],
        /**
         * Align Content
         * @see https://tailwindcss.com/docs/align-content
         */
        "align-content": [{
          content: ["normal", ...getAlign(), "baseline"]
        }],
        /**
         * Align Items
         * @see https://tailwindcss.com/docs/align-items
         */
        "align-items": [{
          items: ["start", "end", "center", "baseline", "stretch"]
        }],
        /**
         * Align Self
         * @see https://tailwindcss.com/docs/align-self
         */
        "align-self": [{
          self: ["auto", "start", "end", "center", "stretch", "baseline"]
        }],
        /**
         * Place Content
         * @see https://tailwindcss.com/docs/place-content
         */
        "place-content": [{
          "place-content": [...getAlign(), "baseline"]
        }],
        /**
         * Place Items
         * @see https://tailwindcss.com/docs/place-items
         */
        "place-items": [{
          "place-items": ["start", "end", "center", "baseline", "stretch"]
        }],
        /**
         * Place Self
         * @see https://tailwindcss.com/docs/place-self
         */
        "place-self": [{
          "place-self": ["auto", "start", "end", "center", "stretch"]
        }],
        // Spacing
        /**
         * Padding
         * @see https://tailwindcss.com/docs/padding
         */
        p: [{
          p: [padding]
        }],
        /**
         * Padding X
         * @see https://tailwindcss.com/docs/padding
         */
        px: [{
          px: [padding]
        }],
        /**
         * Padding Y
         * @see https://tailwindcss.com/docs/padding
         */
        py: [{
          py: [padding]
        }],
        /**
         * Padding Start
         * @see https://tailwindcss.com/docs/padding
         */
        ps: [{
          ps: [padding]
        }],
        /**
         * Padding End
         * @see https://tailwindcss.com/docs/padding
         */
        pe: [{
          pe: [padding]
        }],
        /**
         * Padding Top
         * @see https://tailwindcss.com/docs/padding
         */
        pt: [{
          pt: [padding]
        }],
        /**
         * Padding Right
         * @see https://tailwindcss.com/docs/padding
         */
        pr: [{
          pr: [padding]
        }],
        /**
         * Padding Bottom
         * @see https://tailwindcss.com/docs/padding
         */
        pb: [{
          pb: [padding]
        }],
        /**
         * Padding Left
         * @see https://tailwindcss.com/docs/padding
         */
        pl: [{
          pl: [padding]
        }],
        /**
         * Margin
         * @see https://tailwindcss.com/docs/margin
         */
        m: [{
          m: [margin]
        }],
        /**
         * Margin X
         * @see https://tailwindcss.com/docs/margin
         */
        mx: [{
          mx: [margin]
        }],
        /**
         * Margin Y
         * @see https://tailwindcss.com/docs/margin
         */
        my: [{
          my: [margin]
        }],
        /**
         * Margin Start
         * @see https://tailwindcss.com/docs/margin
         */
        ms: [{
          ms: [margin]
        }],
        /**
         * Margin End
         * @see https://tailwindcss.com/docs/margin
         */
        me: [{
          me: [margin]
        }],
        /**
         * Margin Top
         * @see https://tailwindcss.com/docs/margin
         */
        mt: [{
          mt: [margin]
        }],
        /**
         * Margin Right
         * @see https://tailwindcss.com/docs/margin
         */
        mr: [{
          mr: [margin]
        }],
        /**
         * Margin Bottom
         * @see https://tailwindcss.com/docs/margin
         */
        mb: [{
          mb: [margin]
        }],
        /**
         * Margin Left
         * @see https://tailwindcss.com/docs/margin
         */
        ml: [{
          ml: [margin]
        }],
        /**
         * Space Between X
         * @see https://tailwindcss.com/docs/space
         */
        "space-x": [{
          "space-x": [space]
        }],
        /**
         * Space Between X Reverse
         * @see https://tailwindcss.com/docs/space
         */
        "space-x-reverse": ["space-x-reverse"],
        /**
         * Space Between Y
         * @see https://tailwindcss.com/docs/space
         */
        "space-y": [{
          "space-y": [space]
        }],
        /**
         * Space Between Y Reverse
         * @see https://tailwindcss.com/docs/space
         */
        "space-y-reverse": ["space-y-reverse"],
        // Sizing
        /**
         * Width
         * @see https://tailwindcss.com/docs/width
         */
        w: [{
          w: ["auto", "min", "max", "fit", "svw", "lvw", "dvw", isArbitraryValue, spacing]
        }],
        /**
         * Min-Width
         * @see https://tailwindcss.com/docs/min-width
         */
        "min-w": [{
          "min-w": [isArbitraryValue, spacing, "min", "max", "fit"]
        }],
        /**
         * Max-Width
         * @see https://tailwindcss.com/docs/max-width
         */
        "max-w": [{
          "max-w": [isArbitraryValue, spacing, "none", "full", "min", "max", "fit", "prose", {
            screen: [isTshirtSize]
          }, isTshirtSize]
        }],
        /**
         * Height
         * @see https://tailwindcss.com/docs/height
         */
        h: [{
          h: [isArbitraryValue, spacing, "auto", "min", "max", "fit", "svh", "lvh", "dvh"]
        }],
        /**
         * Min-Height
         * @see https://tailwindcss.com/docs/min-height
         */
        "min-h": [{
          "min-h": [isArbitraryValue, spacing, "min", "max", "fit", "svh", "lvh", "dvh"]
        }],
        /**
         * Max-Height
         * @see https://tailwindcss.com/docs/max-height
         */
        "max-h": [{
          "max-h": [isArbitraryValue, spacing, "min", "max", "fit", "svh", "lvh", "dvh"]
        }],
        /**
         * Size
         * @see https://tailwindcss.com/docs/size
         */
        size: [{
          size: [isArbitraryValue, spacing, "auto", "min", "max", "fit"]
        }],
        // Typography
        /**
         * Font Size
         * @see https://tailwindcss.com/docs/font-size
         */
        "font-size": [{
          text: ["base", isTshirtSize, isArbitraryLength]
        }],
        /**
         * Font Smoothing
         * @see https://tailwindcss.com/docs/font-smoothing
         */
        "font-smoothing": ["antialiased", "subpixel-antialiased"],
        /**
         * Font Style
         * @see https://tailwindcss.com/docs/font-style
         */
        "font-style": ["italic", "not-italic"],
        /**
         * Font Weight
         * @see https://tailwindcss.com/docs/font-weight
         */
        "font-weight": [{
          font: ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black", isArbitraryNumber]
        }],
        /**
         * Font Family
         * @see https://tailwindcss.com/docs/font-family
         */
        "font-family": [{
          font: [isAny]
        }],
        /**
         * Font Variant Numeric
         * @see https://tailwindcss.com/docs/font-variant-numeric
         */
        "fvn-normal": ["normal-nums"],
        /**
         * Font Variant Numeric
         * @see https://tailwindcss.com/docs/font-variant-numeric
         */
        "fvn-ordinal": ["ordinal"],
        /**
         * Font Variant Numeric
         * @see https://tailwindcss.com/docs/font-variant-numeric
         */
        "fvn-slashed-zero": ["slashed-zero"],
        /**
         * Font Variant Numeric
         * @see https://tailwindcss.com/docs/font-variant-numeric
         */
        "fvn-figure": ["lining-nums", "oldstyle-nums"],
        /**
         * Font Variant Numeric
         * @see https://tailwindcss.com/docs/font-variant-numeric
         */
        "fvn-spacing": ["proportional-nums", "tabular-nums"],
        /**
         * Font Variant Numeric
         * @see https://tailwindcss.com/docs/font-variant-numeric
         */
        "fvn-fraction": ["diagonal-fractions", "stacked-fractions"],
        /**
         * Letter Spacing
         * @see https://tailwindcss.com/docs/letter-spacing
         */
        tracking: [{
          tracking: ["tighter", "tight", "normal", "wide", "wider", "widest", isArbitraryValue]
        }],
        /**
         * Line Clamp
         * @see https://tailwindcss.com/docs/line-clamp
         */
        "line-clamp": [{
          "line-clamp": ["none", isNumber, isArbitraryNumber]
        }],
        /**
         * Line Height
         * @see https://tailwindcss.com/docs/line-height
         */
        leading: [{
          leading: ["none", "tight", "snug", "normal", "relaxed", "loose", isLength, isArbitraryValue]
        }],
        /**
         * List Style Image
         * @see https://tailwindcss.com/docs/list-style-image
         */
        "list-image": [{
          "list-image": ["none", isArbitraryValue]
        }],
        /**
         * List Style Type
         * @see https://tailwindcss.com/docs/list-style-type
         */
        "list-style-type": [{
          list: ["none", "disc", "decimal", isArbitraryValue]
        }],
        /**
         * List Style Position
         * @see https://tailwindcss.com/docs/list-style-position
         */
        "list-style-position": [{
          list: ["inside", "outside"]
        }],
        /**
         * Placeholder Color
         * @deprecated since Tailwind CSS v3.0.0
         * @see https://tailwindcss.com/docs/placeholder-color
         */
        "placeholder-color": [{
          placeholder: [colors]
        }],
        /**
         * Placeholder Opacity
         * @see https://tailwindcss.com/docs/placeholder-opacity
         */
        "placeholder-opacity": [{
          "placeholder-opacity": [opacity]
        }],
        /**
         * Text Alignment
         * @see https://tailwindcss.com/docs/text-align
         */
        "text-alignment": [{
          text: ["left", "center", "right", "justify", "start", "end"]
        }],
        /**
         * Text Color
         * @see https://tailwindcss.com/docs/text-color
         */
        "text-color": [{
          text: [colors]
        }],
        /**
         * Text Opacity
         * @see https://tailwindcss.com/docs/text-opacity
         */
        "text-opacity": [{
          "text-opacity": [opacity]
        }],
        /**
         * Text Decoration
         * @see https://tailwindcss.com/docs/text-decoration
         */
        "text-decoration": ["underline", "overline", "line-through", "no-underline"],
        /**
         * Text Decoration Style
         * @see https://tailwindcss.com/docs/text-decoration-style
         */
        "text-decoration-style": [{
          decoration: [...getLineStyles(), "wavy"]
        }],
        /**
         * Text Decoration Thickness
         * @see https://tailwindcss.com/docs/text-decoration-thickness
         */
        "text-decoration-thickness": [{
          decoration: ["auto", "from-font", isLength, isArbitraryLength]
        }],
        /**
         * Text Underline Offset
         * @see https://tailwindcss.com/docs/text-underline-offset
         */
        "underline-offset": [{
          "underline-offset": ["auto", isLength, isArbitraryValue]
        }],
        /**
         * Text Decoration Color
         * @see https://tailwindcss.com/docs/text-decoration-color
         */
        "text-decoration-color": [{
          decoration: [colors]
        }],
        /**
         * Text Transform
         * @see https://tailwindcss.com/docs/text-transform
         */
        "text-transform": ["uppercase", "lowercase", "capitalize", "normal-case"],
        /**
         * Text Overflow
         * @see https://tailwindcss.com/docs/text-overflow
         */
        "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
        /**
         * Text Wrap
         * @see https://tailwindcss.com/docs/text-wrap
         */
        "text-wrap": [{
          text: ["wrap", "nowrap", "balance", "pretty"]
        }],
        /**
         * Text Indent
         * @see https://tailwindcss.com/docs/text-indent
         */
        indent: [{
          indent: getSpacingWithArbitrary()
        }],
        /**
         * Vertical Alignment
         * @see https://tailwindcss.com/docs/vertical-align
         */
        "vertical-align": [{
          align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", isArbitraryValue]
        }],
        /**
         * Whitespace
         * @see https://tailwindcss.com/docs/whitespace
         */
        whitespace: [{
          whitespace: ["normal", "nowrap", "pre", "pre-line", "pre-wrap", "break-spaces"]
        }],
        /**
         * Word Break
         * @see https://tailwindcss.com/docs/word-break
         */
        break: [{
          break: ["normal", "words", "all", "keep"]
        }],
        /**
         * Hyphens
         * @see https://tailwindcss.com/docs/hyphens
         */
        hyphens: [{
          hyphens: ["none", "manual", "auto"]
        }],
        /**
         * Content
         * @see https://tailwindcss.com/docs/content
         */
        content: [{
          content: ["none", isArbitraryValue]
        }],
        // Backgrounds
        /**
         * Background Attachment
         * @see https://tailwindcss.com/docs/background-attachment
         */
        "bg-attachment": [{
          bg: ["fixed", "local", "scroll"]
        }],
        /**
         * Background Clip
         * @see https://tailwindcss.com/docs/background-clip
         */
        "bg-clip": [{
          "bg-clip": ["border", "padding", "content", "text"]
        }],
        /**
         * Background Opacity
         * @deprecated since Tailwind CSS v3.0.0
         * @see https://tailwindcss.com/docs/background-opacity
         */
        "bg-opacity": [{
          "bg-opacity": [opacity]
        }],
        /**
         * Background Origin
         * @see https://tailwindcss.com/docs/background-origin
         */
        "bg-origin": [{
          "bg-origin": ["border", "padding", "content"]
        }],
        /**
         * Background Position
         * @see https://tailwindcss.com/docs/background-position
         */
        "bg-position": [{
          bg: [...getPositions(), isArbitraryPosition]
        }],
        /**
         * Background Repeat
         * @see https://tailwindcss.com/docs/background-repeat
         */
        "bg-repeat": [{
          bg: ["no-repeat", {
            repeat: ["", "x", "y", "round", "space"]
          }]
        }],
        /**
         * Background Size
         * @see https://tailwindcss.com/docs/background-size
         */
        "bg-size": [{
          bg: ["auto", "cover", "contain", isArbitrarySize]
        }],
        /**
         * Background Image
         * @see https://tailwindcss.com/docs/background-image
         */
        "bg-image": [{
          bg: ["none", {
            "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
          }, isArbitraryImage]
        }],
        /**
         * Background Color
         * @see https://tailwindcss.com/docs/background-color
         */
        "bg-color": [{
          bg: [colors]
        }],
        /**
         * Gradient Color Stops From Position
         * @see https://tailwindcss.com/docs/gradient-color-stops
         */
        "gradient-from-pos": [{
          from: [gradientColorStopPositions]
        }],
        /**
         * Gradient Color Stops Via Position
         * @see https://tailwindcss.com/docs/gradient-color-stops
         */
        "gradient-via-pos": [{
          via: [gradientColorStopPositions]
        }],
        /**
         * Gradient Color Stops To Position
         * @see https://tailwindcss.com/docs/gradient-color-stops
         */
        "gradient-to-pos": [{
          to: [gradientColorStopPositions]
        }],
        /**
         * Gradient Color Stops From
         * @see https://tailwindcss.com/docs/gradient-color-stops
         */
        "gradient-from": [{
          from: [gradientColorStops]
        }],
        /**
         * Gradient Color Stops Via
         * @see https://tailwindcss.com/docs/gradient-color-stops
         */
        "gradient-via": [{
          via: [gradientColorStops]
        }],
        /**
         * Gradient Color Stops To
         * @see https://tailwindcss.com/docs/gradient-color-stops
         */
        "gradient-to": [{
          to: [gradientColorStops]
        }],
        // Borders
        /**
         * Border Radius
         * @see https://tailwindcss.com/docs/border-radius
         */
        rounded: [{
          rounded: [borderRadius]
        }],
        /**
         * Border Radius Start
         * @see https://tailwindcss.com/docs/border-radius
         */
        "rounded-s": [{
          "rounded-s": [borderRadius]
        }],
        /**
         * Border Radius End
         * @see https://tailwindcss.com/docs/border-radius
         */
        "rounded-e": [{
          "rounded-e": [borderRadius]
        }],
        /**
         * Border Radius Top
         * @see https://tailwindcss.com/docs/border-radius
         */
        "rounded-t": [{
          "rounded-t": [borderRadius]
        }],
        /**
         * Border Radius Right
         * @see https://tailwindcss.com/docs/border-radius
         */
        "rounded-r": [{
          "rounded-r": [borderRadius]
        }],
        /**
         * Border Radius Bottom
         * @see https://tailwindcss.com/docs/border-radius
         */
        "rounded-b": [{
          "rounded-b": [borderRadius]
        }],
        /**
         * Border Radius Left
         * @see https://tailwindcss.com/docs/border-radius
         */
        "rounded-l": [{
          "rounded-l": [borderRadius]
        }],
        /**
         * Border Radius Start Start
         * @see https://tailwindcss.com/docs/border-radius
         */
        "rounded-ss": [{
          "rounded-ss": [borderRadius]
        }],
        /**
         * Border Radius Start End
         * @see https://tailwindcss.com/docs/border-radius
         */
        "rounded-se": [{
          "rounded-se": [borderRadius]
        }],
        /**
         * Border Radius End End
         * @see https://tailwindcss.com/docs/border-radius
         */
        "rounded-ee": [{
          "rounded-ee": [borderRadius]
        }],
        /**
         * Border Radius End Start
         * @see https://tailwindcss.com/docs/border-radius
         */
        "rounded-es": [{
          "rounded-es": [borderRadius]
        }],
        /**
         * Border Radius Top Left
         * @see https://tailwindcss.com/docs/border-radius
         */
        "rounded-tl": [{
          "rounded-tl": [borderRadius]
        }],
        /**
         * Border Radius Top Right
         * @see https://tailwindcss.com/docs/border-radius
         */
        "rounded-tr": [{
          "rounded-tr": [borderRadius]
        }],
        /**
         * Border Radius Bottom Right
         * @see https://tailwindcss.com/docs/border-radius
         */
        "rounded-br": [{
          "rounded-br": [borderRadius]
        }],
        /**
         * Border Radius Bottom Left
         * @see https://tailwindcss.com/docs/border-radius
         */
        "rounded-bl": [{
          "rounded-bl": [borderRadius]
        }],
        /**
         * Border Width
         * @see https://tailwindcss.com/docs/border-width
         */
        "border-w": [{
          border: [borderWidth]
        }],
        /**
         * Border Width X
         * @see https://tailwindcss.com/docs/border-width
         */
        "border-w-x": [{
          "border-x": [borderWidth]
        }],
        /**
         * Border Width Y
         * @see https://tailwindcss.com/docs/border-width
         */
        "border-w-y": [{
          "border-y": [borderWidth]
        }],
        /**
         * Border Width Start
         * @see https://tailwindcss.com/docs/border-width
         */
        "border-w-s": [{
          "border-s": [borderWidth]
        }],
        /**
         * Border Width End
         * @see https://tailwindcss.com/docs/border-width
         */
        "border-w-e": [{
          "border-e": [borderWidth]
        }],
        /**
         * Border Width Top
         * @see https://tailwindcss.com/docs/border-width
         */
        "border-w-t": [{
          "border-t": [borderWidth]
        }],
        /**
         * Border Width Right
         * @see https://tailwindcss.com/docs/border-width
         */
        "border-w-r": [{
          "border-r": [borderWidth]
        }],
        /**
         * Border Width Bottom
         * @see https://tailwindcss.com/docs/border-width
         */
        "border-w-b": [{
          "border-b": [borderWidth]
        }],
        /**
         * Border Width Left
         * @see https://tailwindcss.com/docs/border-width
         */
        "border-w-l": [{
          "border-l": [borderWidth]
        }],
        /**
         * Border Opacity
         * @see https://tailwindcss.com/docs/border-opacity
         */
        "border-opacity": [{
          "border-opacity": [opacity]
        }],
        /**
         * Border Style
         * @see https://tailwindcss.com/docs/border-style
         */
        "border-style": [{
          border: [...getLineStyles(), "hidden"]
        }],
        /**
         * Divide Width X
         * @see https://tailwindcss.com/docs/divide-width
         */
        "divide-x": [{
          "divide-x": [borderWidth]
        }],
        /**
         * Divide Width X Reverse
         * @see https://tailwindcss.com/docs/divide-width
         */
        "divide-x-reverse": ["divide-x-reverse"],
        /**
         * Divide Width Y
         * @see https://tailwindcss.com/docs/divide-width
         */
        "divide-y": [{
          "divide-y": [borderWidth]
        }],
        /**
         * Divide Width Y Reverse
         * @see https://tailwindcss.com/docs/divide-width
         */
        "divide-y-reverse": ["divide-y-reverse"],
        /**
         * Divide Opacity
         * @see https://tailwindcss.com/docs/divide-opacity
         */
        "divide-opacity": [{
          "divide-opacity": [opacity]
        }],
        /**
         * Divide Style
         * @see https://tailwindcss.com/docs/divide-style
         */
        "divide-style": [{
          divide: getLineStyles()
        }],
        /**
         * Border Color
         * @see https://tailwindcss.com/docs/border-color
         */
        "border-color": [{
          border: [borderColor]
        }],
        /**
         * Border Color X
         * @see https://tailwindcss.com/docs/border-color
         */
        "border-color-x": [{
          "border-x": [borderColor]
        }],
        /**
         * Border Color Y
         * @see https://tailwindcss.com/docs/border-color
         */
        "border-color-y": [{
          "border-y": [borderColor]
        }],
        /**
         * Border Color S
         * @see https://tailwindcss.com/docs/border-color
         */
        "border-color-s": [{
          "border-s": [borderColor]
        }],
        /**
         * Border Color E
         * @see https://tailwindcss.com/docs/border-color
         */
        "border-color-e": [{
          "border-e": [borderColor]
        }],
        /**
         * Border Color Top
         * @see https://tailwindcss.com/docs/border-color
         */
        "border-color-t": [{
          "border-t": [borderColor]
        }],
        /**
         * Border Color Right
         * @see https://tailwindcss.com/docs/border-color
         */
        "border-color-r": [{
          "border-r": [borderColor]
        }],
        /**
         * Border Color Bottom
         * @see https://tailwindcss.com/docs/border-color
         */
        "border-color-b": [{
          "border-b": [borderColor]
        }],
        /**
         * Border Color Left
         * @see https://tailwindcss.com/docs/border-color
         */
        "border-color-l": [{
          "border-l": [borderColor]
        }],
        /**
         * Divide Color
         * @see https://tailwindcss.com/docs/divide-color
         */
        "divide-color": [{
          divide: [borderColor]
        }],
        /**
         * Outline Style
         * @see https://tailwindcss.com/docs/outline-style
         */
        "outline-style": [{
          outline: ["", ...getLineStyles()]
        }],
        /**
         * Outline Offset
         * @see https://tailwindcss.com/docs/outline-offset
         */
        "outline-offset": [{
          "outline-offset": [isLength, isArbitraryValue]
        }],
        /**
         * Outline Width
         * @see https://tailwindcss.com/docs/outline-width
         */
        "outline-w": [{
          outline: [isLength, isArbitraryLength]
        }],
        /**
         * Outline Color
         * @see https://tailwindcss.com/docs/outline-color
         */
        "outline-color": [{
          outline: [colors]
        }],
        /**
         * Ring Width
         * @see https://tailwindcss.com/docs/ring-width
         */
        "ring-w": [{
          ring: getLengthWithEmptyAndArbitrary()
        }],
        /**
         * Ring Width Inset
         * @see https://tailwindcss.com/docs/ring-width
         */
        "ring-w-inset": ["ring-inset"],
        /**
         * Ring Color
         * @see https://tailwindcss.com/docs/ring-color
         */
        "ring-color": [{
          ring: [colors]
        }],
        /**
         * Ring Opacity
         * @see https://tailwindcss.com/docs/ring-opacity
         */
        "ring-opacity": [{
          "ring-opacity": [opacity]
        }],
        /**
         * Ring Offset Width
         * @see https://tailwindcss.com/docs/ring-offset-width
         */
        "ring-offset-w": [{
          "ring-offset": [isLength, isArbitraryLength]
        }],
        /**
         * Ring Offset Color
         * @see https://tailwindcss.com/docs/ring-offset-color
         */
        "ring-offset-color": [{
          "ring-offset": [colors]
        }],
        // Effects
        /**
         * Box Shadow
         * @see https://tailwindcss.com/docs/box-shadow
         */
        shadow: [{
          shadow: ["", "inner", "none", isTshirtSize, isArbitraryShadow]
        }],
        /**
         * Box Shadow Color
         * @see https://tailwindcss.com/docs/box-shadow-color
         */
        "shadow-color": [{
          shadow: [isAny]
        }],
        /**
         * Opacity
         * @see https://tailwindcss.com/docs/opacity
         */
        opacity: [{
          opacity: [opacity]
        }],
        /**
         * Mix Blend Mode
         * @see https://tailwindcss.com/docs/mix-blend-mode
         */
        "mix-blend": [{
          "mix-blend": [...getBlendModes(), "plus-lighter", "plus-darker"]
        }],
        /**
         * Background Blend Mode
         * @see https://tailwindcss.com/docs/background-blend-mode
         */
        "bg-blend": [{
          "bg-blend": getBlendModes()
        }],
        // Filters
        /**
         * Filter
         * @deprecated since Tailwind CSS v3.0.0
         * @see https://tailwindcss.com/docs/filter
         */
        filter: [{
          filter: ["", "none"]
        }],
        /**
         * Blur
         * @see https://tailwindcss.com/docs/blur
         */
        blur: [{
          blur: [blur]
        }],
        /**
         * Brightness
         * @see https://tailwindcss.com/docs/brightness
         */
        brightness: [{
          brightness: [brightness]
        }],
        /**
         * Contrast
         * @see https://tailwindcss.com/docs/contrast
         */
        contrast: [{
          contrast: [contrast]
        }],
        /**
         * Drop Shadow
         * @see https://tailwindcss.com/docs/drop-shadow
         */
        "drop-shadow": [{
          "drop-shadow": ["", "none", isTshirtSize, isArbitraryValue]
        }],
        /**
         * Grayscale
         * @see https://tailwindcss.com/docs/grayscale
         */
        grayscale: [{
          grayscale: [grayscale]
        }],
        /**
         * Hue Rotate
         * @see https://tailwindcss.com/docs/hue-rotate
         */
        "hue-rotate": [{
          "hue-rotate": [hueRotate]
        }],
        /**
         * Invert
         * @see https://tailwindcss.com/docs/invert
         */
        invert: [{
          invert: [invert]
        }],
        /**
         * Saturate
         * @see https://tailwindcss.com/docs/saturate
         */
        saturate: [{
          saturate: [saturate]
        }],
        /**
         * Sepia
         * @see https://tailwindcss.com/docs/sepia
         */
        sepia: [{
          sepia: [sepia]
        }],
        /**
         * Backdrop Filter
         * @deprecated since Tailwind CSS v3.0.0
         * @see https://tailwindcss.com/docs/backdrop-filter
         */
        "backdrop-filter": [{
          "backdrop-filter": ["", "none"]
        }],
        /**
         * Backdrop Blur
         * @see https://tailwindcss.com/docs/backdrop-blur
         */
        "backdrop-blur": [{
          "backdrop-blur": [blur]
        }],
        /**
         * Backdrop Brightness
         * @see https://tailwindcss.com/docs/backdrop-brightness
         */
        "backdrop-brightness": [{
          "backdrop-brightness": [brightness]
        }],
        /**
         * Backdrop Contrast
         * @see https://tailwindcss.com/docs/backdrop-contrast
         */
        "backdrop-contrast": [{
          "backdrop-contrast": [contrast]
        }],
        /**
         * Backdrop Grayscale
         * @see https://tailwindcss.com/docs/backdrop-grayscale
         */
        "backdrop-grayscale": [{
          "backdrop-grayscale": [grayscale]
        }],
        /**
         * Backdrop Hue Rotate
         * @see https://tailwindcss.com/docs/backdrop-hue-rotate
         */
        "backdrop-hue-rotate": [{
          "backdrop-hue-rotate": [hueRotate]
        }],
        /**
         * Backdrop Invert
         * @see https://tailwindcss.com/docs/backdrop-invert
         */
        "backdrop-invert": [{
          "backdrop-invert": [invert]
        }],
        /**
         * Backdrop Opacity
         * @see https://tailwindcss.com/docs/backdrop-opacity
         */
        "backdrop-opacity": [{
          "backdrop-opacity": [opacity]
        }],
        /**
         * Backdrop Saturate
         * @see https://tailwindcss.com/docs/backdrop-saturate
         */
        "backdrop-saturate": [{
          "backdrop-saturate": [saturate]
        }],
        /**
         * Backdrop Sepia
         * @see https://tailwindcss.com/docs/backdrop-sepia
         */
        "backdrop-sepia": [{
          "backdrop-sepia": [sepia]
        }],
        // Tables
        /**
         * Border Collapse
         * @see https://tailwindcss.com/docs/border-collapse
         */
        "border-collapse": [{
          border: ["collapse", "separate"]
        }],
        /**
         * Border Spacing
         * @see https://tailwindcss.com/docs/border-spacing
         */
        "border-spacing": [{
          "border-spacing": [borderSpacing]
        }],
        /**
         * Border Spacing X
         * @see https://tailwindcss.com/docs/border-spacing
         */
        "border-spacing-x": [{
          "border-spacing-x": [borderSpacing]
        }],
        /**
         * Border Spacing Y
         * @see https://tailwindcss.com/docs/border-spacing
         */
        "border-spacing-y": [{
          "border-spacing-y": [borderSpacing]
        }],
        /**
         * Table Layout
         * @see https://tailwindcss.com/docs/table-layout
         */
        "table-layout": [{
          table: ["auto", "fixed"]
        }],
        /**
         * Caption Side
         * @see https://tailwindcss.com/docs/caption-side
         */
        caption: [{
          caption: ["top", "bottom"]
        }],
        // Transitions and Animation
        /**
         * Tranisition Property
         * @see https://tailwindcss.com/docs/transition-property
         */
        transition: [{
          transition: ["none", "all", "", "colors", "opacity", "shadow", "transform", isArbitraryValue]
        }],
        /**
         * Transition Duration
         * @see https://tailwindcss.com/docs/transition-duration
         */
        duration: [{
          duration: getNumberAndArbitrary()
        }],
        /**
         * Transition Timing Function
         * @see https://tailwindcss.com/docs/transition-timing-function
         */
        ease: [{
          ease: ["linear", "in", "out", "in-out", isArbitraryValue]
        }],
        /**
         * Transition Delay
         * @see https://tailwindcss.com/docs/transition-delay
         */
        delay: [{
          delay: getNumberAndArbitrary()
        }],
        /**
         * Animation
         * @see https://tailwindcss.com/docs/animation
         */
        animate: [{
          animate: ["none", "spin", "ping", "pulse", "bounce", isArbitraryValue]
        }],
        // Transforms
        /**
         * Transform
         * @see https://tailwindcss.com/docs/transform
         */
        transform: [{
          transform: ["", "gpu", "none"]
        }],
        /**
         * Scale
         * @see https://tailwindcss.com/docs/scale
         */
        scale: [{
          scale: [scale]
        }],
        /**
         * Scale X
         * @see https://tailwindcss.com/docs/scale
         */
        "scale-x": [{
          "scale-x": [scale]
        }],
        /**
         * Scale Y
         * @see https://tailwindcss.com/docs/scale
         */
        "scale-y": [{
          "scale-y": [scale]
        }],
        /**
         * Rotate
         * @see https://tailwindcss.com/docs/rotate
         */
        rotate: [{
          rotate: [isInteger, isArbitraryValue]
        }],
        /**
         * Translate X
         * @see https://tailwindcss.com/docs/translate
         */
        "translate-x": [{
          "translate-x": [translate]
        }],
        /**
         * Translate Y
         * @see https://tailwindcss.com/docs/translate
         */
        "translate-y": [{
          "translate-y": [translate]
        }],
        /**
         * Skew X
         * @see https://tailwindcss.com/docs/skew
         */
        "skew-x": [{
          "skew-x": [skew]
        }],
        /**
         * Skew Y
         * @see https://tailwindcss.com/docs/skew
         */
        "skew-y": [{
          "skew-y": [skew]
        }],
        /**
         * Transform Origin
         * @see https://tailwindcss.com/docs/transform-origin
         */
        "transform-origin": [{
          origin: ["center", "top", "top-right", "right", "bottom-right", "bottom", "bottom-left", "left", "top-left", isArbitraryValue]
        }],
        // Interactivity
        /**
         * Accent Color
         * @see https://tailwindcss.com/docs/accent-color
         */
        accent: [{
          accent: ["auto", colors]
        }],
        /**
         * Appearance
         * @see https://tailwindcss.com/docs/appearance
         */
        appearance: [{
          appearance: ["none", "auto"]
        }],
        /**
         * Cursor
         * @see https://tailwindcss.com/docs/cursor
         */
        cursor: [{
          cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", isArbitraryValue]
        }],
        /**
         * Caret Color
         * @see https://tailwindcss.com/docs/just-in-time-mode#caret-color-utilities
         */
        "caret-color": [{
          caret: [colors]
        }],
        /**
         * Pointer Events
         * @see https://tailwindcss.com/docs/pointer-events
         */
        "pointer-events": [{
          "pointer-events": ["none", "auto"]
        }],
        /**
         * Resize
         * @see https://tailwindcss.com/docs/resize
         */
        resize: [{
          resize: ["none", "y", "x", ""]
        }],
        /**
         * Scroll Behavior
         * @see https://tailwindcss.com/docs/scroll-behavior
         */
        "scroll-behavior": [{
          scroll: ["auto", "smooth"]
        }],
        /**
         * Scroll Margin
         * @see https://tailwindcss.com/docs/scroll-margin
         */
        "scroll-m": [{
          "scroll-m": getSpacingWithArbitrary()
        }],
        /**
         * Scroll Margin X
         * @see https://tailwindcss.com/docs/scroll-margin
         */
        "scroll-mx": [{
          "scroll-mx": getSpacingWithArbitrary()
        }],
        /**
         * Scroll Margin Y
         * @see https://tailwindcss.com/docs/scroll-margin
         */
        "scroll-my": [{
          "scroll-my": getSpacingWithArbitrary()
        }],
        /**
         * Scroll Margin Start
         * @see https://tailwindcss.com/docs/scroll-margin
         */
        "scroll-ms": [{
          "scroll-ms": getSpacingWithArbitrary()
        }],
        /**
         * Scroll Margin End
         * @see https://tailwindcss.com/docs/scroll-margin
         */
        "scroll-me": [{
          "scroll-me": getSpacingWithArbitrary()
        }],
        /**
         * Scroll Margin Top
         * @see https://tailwindcss.com/docs/scroll-margin
         */
        "scroll-mt": [{
          "scroll-mt": getSpacingWithArbitrary()
        }],
        /**
         * Scroll Margin Right
         * @see https://tailwindcss.com/docs/scroll-margin
         */
        "scroll-mr": [{
          "scroll-mr": getSpacingWithArbitrary()
        }],
        /**
         * Scroll Margin Bottom
         * @see https://tailwindcss.com/docs/scroll-margin
         */
        "scroll-mb": [{
          "scroll-mb": getSpacingWithArbitrary()
        }],
        /**
         * Scroll Margin Left
         * @see https://tailwindcss.com/docs/scroll-margin
         */
        "scroll-ml": [{
          "scroll-ml": getSpacingWithArbitrary()
        }],
        /**
         * Scroll Padding
         * @see https://tailwindcss.com/docs/scroll-padding
         */
        "scroll-p": [{
          "scroll-p": getSpacingWithArbitrary()
        }],
        /**
         * Scroll Padding X
         * @see https://tailwindcss.com/docs/scroll-padding
         */
        "scroll-px": [{
          "scroll-px": getSpacingWithArbitrary()
        }],
        /**
         * Scroll Padding Y
         * @see https://tailwindcss.com/docs/scroll-padding
         */
        "scroll-py": [{
          "scroll-py": getSpacingWithArbitrary()
        }],
        /**
         * Scroll Padding Start
         * @see https://tailwindcss.com/docs/scroll-padding
         */
        "scroll-ps": [{
          "scroll-ps": getSpacingWithArbitrary()
        }],
        /**
         * Scroll Padding End
         * @see https://tailwindcss.com/docs/scroll-padding
         */
        "scroll-pe": [{
          "scroll-pe": getSpacingWithArbitrary()
        }],
        /**
         * Scroll Padding Top
         * @see https://tailwindcss.com/docs/scroll-padding
         */
        "scroll-pt": [{
          "scroll-pt": getSpacingWithArbitrary()
        }],
        /**
         * Scroll Padding Right
         * @see https://tailwindcss.com/docs/scroll-padding
         */
        "scroll-pr": [{
          "scroll-pr": getSpacingWithArbitrary()
        }],
        /**
         * Scroll Padding Bottom
         * @see https://tailwindcss.com/docs/scroll-padding
         */
        "scroll-pb": [{
          "scroll-pb": getSpacingWithArbitrary()
        }],
        /**
         * Scroll Padding Left
         * @see https://tailwindcss.com/docs/scroll-padding
         */
        "scroll-pl": [{
          "scroll-pl": getSpacingWithArbitrary()
        }],
        /**
         * Scroll Snap Align
         * @see https://tailwindcss.com/docs/scroll-snap-align
         */
        "snap-align": [{
          snap: ["start", "end", "center", "align-none"]
        }],
        /**
         * Scroll Snap Stop
         * @see https://tailwindcss.com/docs/scroll-snap-stop
         */
        "snap-stop": [{
          snap: ["normal", "always"]
        }],
        /**
         * Scroll Snap Type
         * @see https://tailwindcss.com/docs/scroll-snap-type
         */
        "snap-type": [{
          snap: ["none", "x", "y", "both"]
        }],
        /**
         * Scroll Snap Type Strictness
         * @see https://tailwindcss.com/docs/scroll-snap-type
         */
        "snap-strictness": [{
          snap: ["mandatory", "proximity"]
        }],
        /**
         * Touch Action
         * @see https://tailwindcss.com/docs/touch-action
         */
        touch: [{
          touch: ["auto", "none", "manipulation"]
        }],
        /**
         * Touch Action X
         * @see https://tailwindcss.com/docs/touch-action
         */
        "touch-x": [{
          "touch-pan": ["x", "left", "right"]
        }],
        /**
         * Touch Action Y
         * @see https://tailwindcss.com/docs/touch-action
         */
        "touch-y": [{
          "touch-pan": ["y", "up", "down"]
        }],
        /**
         * Touch Action Pinch Zoom
         * @see https://tailwindcss.com/docs/touch-action
         */
        "touch-pz": ["touch-pinch-zoom"],
        /**
         * User Select
         * @see https://tailwindcss.com/docs/user-select
         */
        select: [{
          select: ["none", "text", "all", "auto"]
        }],
        /**
         * Will Change
         * @see https://tailwindcss.com/docs/will-change
         */
        "will-change": [{
          "will-change": ["auto", "scroll", "contents", "transform", isArbitraryValue]
        }],
        // SVG
        /**
         * Fill
         * @see https://tailwindcss.com/docs/fill
         */
        fill: [{
          fill: [colors, "none"]
        }],
        /**
         * Stroke Width
         * @see https://tailwindcss.com/docs/stroke-width
         */
        "stroke-w": [{
          stroke: [isLength, isArbitraryLength, isArbitraryNumber]
        }],
        /**
         * Stroke
         * @see https://tailwindcss.com/docs/stroke
         */
        stroke: [{
          stroke: [colors, "none"]
        }],
        // Accessibility
        /**
         * Screen Readers
         * @see https://tailwindcss.com/docs/screen-readers
         */
        sr: ["sr-only", "not-sr-only"],
        /**
         * Forced Color Adjust
         * @see https://tailwindcss.com/docs/forced-color-adjust
         */
        "forced-color-adjust": [{
          "forced-color-adjust": ["auto", "none"]
        }]
      },
      conflictingClassGroups: {
        overflow: ["overflow-x", "overflow-y"],
        overscroll: ["overscroll-x", "overscroll-y"],
        inset: ["inset-x", "inset-y", "start", "end", "top", "right", "bottom", "left"],
        "inset-x": ["right", "left"],
        "inset-y": ["top", "bottom"],
        flex: ["basis", "grow", "shrink"],
        gap: ["gap-x", "gap-y"],
        p: ["px", "py", "ps", "pe", "pt", "pr", "pb", "pl"],
        px: ["pr", "pl"],
        py: ["pt", "pb"],
        m: ["mx", "my", "ms", "me", "mt", "mr", "mb", "ml"],
        mx: ["mr", "ml"],
        my: ["mt", "mb"],
        size: ["w", "h"],
        "font-size": ["leading"],
        "fvn-normal": ["fvn-ordinal", "fvn-slashed-zero", "fvn-figure", "fvn-spacing", "fvn-fraction"],
        "fvn-ordinal": ["fvn-normal"],
        "fvn-slashed-zero": ["fvn-normal"],
        "fvn-figure": ["fvn-normal"],
        "fvn-spacing": ["fvn-normal"],
        "fvn-fraction": ["fvn-normal"],
        "line-clamp": ["display", "overflow"],
        rounded: ["rounded-s", "rounded-e", "rounded-t", "rounded-r", "rounded-b", "rounded-l", "rounded-ss", "rounded-se", "rounded-ee", "rounded-es", "rounded-tl", "rounded-tr", "rounded-br", "rounded-bl"],
        "rounded-s": ["rounded-ss", "rounded-es"],
        "rounded-e": ["rounded-se", "rounded-ee"],
        "rounded-t": ["rounded-tl", "rounded-tr"],
        "rounded-r": ["rounded-tr", "rounded-br"],
        "rounded-b": ["rounded-br", "rounded-bl"],
        "rounded-l": ["rounded-tl", "rounded-bl"],
        "border-spacing": ["border-spacing-x", "border-spacing-y"],
        "border-w": ["border-w-s", "border-w-e", "border-w-t", "border-w-r", "border-w-b", "border-w-l"],
        "border-w-x": ["border-w-r", "border-w-l"],
        "border-w-y": ["border-w-t", "border-w-b"],
        "border-color": ["border-color-s", "border-color-e", "border-color-t", "border-color-r", "border-color-b", "border-color-l"],
        "border-color-x": ["border-color-r", "border-color-l"],
        "border-color-y": ["border-color-t", "border-color-b"],
        "scroll-m": ["scroll-mx", "scroll-my", "scroll-ms", "scroll-me", "scroll-mt", "scroll-mr", "scroll-mb", "scroll-ml"],
        "scroll-mx": ["scroll-mr", "scroll-ml"],
        "scroll-my": ["scroll-mt", "scroll-mb"],
        "scroll-p": ["scroll-px", "scroll-py", "scroll-ps", "scroll-pe", "scroll-pt", "scroll-pr", "scroll-pb", "scroll-pl"],
        "scroll-px": ["scroll-pr", "scroll-pl"],
        "scroll-py": ["scroll-pt", "scroll-pb"],
        touch: ["touch-x", "touch-y", "touch-pz"],
        "touch-x": ["touch"],
        "touch-y": ["touch"],
        "touch-pz": ["touch"]
      },
      conflictingClassGroupModifiers: {
        "font-size": ["leading"]
      }
    };
  };
  var twMerge = /* @__PURE__ */ createTailwindMerge(getDefaultConfig);

  // node_modules/fumadocs-ui/dist/components/card.js
  function Cards(props) {
    return (0, import_jsx_runtime2.jsx)("div", __spreadProps(__spreadValues({}, props), { className: twMerge("grid grid-cols-1 gap-4 sm:grid-cols-2", props.className), children: props.children }));
  }
  function Card(_a) {
    var _b = _a, { icon, title, description } = _b, props = __objRest(_b, ["icon", "title", "description"]);
    const E = props.href ? Link : "div";
    return (0, import_jsx_runtime2.jsxs)(E, __spreadProps(__spreadValues({}, props), { "data-card": true, className: twMerge("block rounded-lg border bg-fd-card p-4 text-fd-card-foreground shadow-md transition-colors", props.href && "hover:bg-fd-accent/80", props.className), children: [icon ? (0, import_jsx_runtime2.jsx)("div", { className: "not-prose mb-2 w-fit rounded-md border bg-fd-muted p-1.5 text-fd-muted-foreground [&_svg]:size-4", children: icon }) : null, (0, import_jsx_runtime2.jsx)("h3", { className: "not-prose mb-1 text-sm font-medium", children: title }), description ? (0, import_jsx_runtime2.jsx)("p", { className: "my-0 text-sm text-fd-muted-foreground", children: description }) : null, props.children ? (0, import_jsx_runtime2.jsx)("div", { className: "text-sm text-fd-muted-foreground prose-no-margin", children: props.children }) : null] }));
  }

  // node_modules/fumadocs-ui/dist/components/callout.js
  var import_jsx_runtime3 = __toESM(require_jsx_runtime(), 1);

  // node_modules/fumadocs-ui/node_modules/lucide-react/dist/esm/createLucideIcon.js
  var import_react3 = __toESM(require_react(), 1);

  // node_modules/fumadocs-ui/node_modules/lucide-react/dist/esm/shared/src/utils.js
  var toKebabCase = (string) => string.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
  var mergeClasses = (...classes) => classes.filter((className, index, array) => {
    return Boolean(className) && className.trim() !== "" && array.indexOf(className) === index;
  }).join(" ").trim();

  // node_modules/fumadocs-ui/node_modules/lucide-react/dist/esm/Icon.js
  var import_react2 = __toESM(require_react(), 1);

  // node_modules/fumadocs-ui/node_modules/lucide-react/dist/esm/defaultAttributes.js
  var defaultAttributes = {
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  };

  // node_modules/fumadocs-ui/node_modules/lucide-react/dist/esm/Icon.js
  var Icon = (0, import_react2.forwardRef)(
    (_a, ref) => {
      var _b = _a, {
        color = "currentColor",
        size = 24,
        strokeWidth = 2,
        absoluteStrokeWidth,
        className = "",
        children,
        iconNode
      } = _b, rest = __objRest(_b, [
        "color",
        "size",
        "strokeWidth",
        "absoluteStrokeWidth",
        "className",
        "children",
        "iconNode"
      ]);
      return (0, import_react2.createElement)(
        "svg",
        __spreadValues(__spreadProps(__spreadValues({
          ref
        }, defaultAttributes), {
          width: size,
          height: size,
          stroke: color,
          strokeWidth: absoluteStrokeWidth ? Number(strokeWidth) * 24 / Number(size) : strokeWidth,
          className: mergeClasses("lucide", className)
        }), rest),
        [
          ...iconNode.map(([tag, attrs]) => (0, import_react2.createElement)(tag, attrs)),
          ...Array.isArray(children) ? children : [children]
        ]
      );
    }
  );

  // node_modules/fumadocs-ui/node_modules/lucide-react/dist/esm/createLucideIcon.js
  var createLucideIcon = (iconName, iconNode) => {
    const Component = (0, import_react3.forwardRef)(
      (_a, ref) => {
        var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
        return (0, import_react3.createElement)(Icon, __spreadValues({
          ref,
          iconNode,
          className: mergeClasses("lucide-".concat(toKebabCase(iconName)), className)
        }, props));
      }
    );
    Component.displayName = "".concat(iconName);
    return Component;
  };

  // node_modules/fumadocs-ui/node_modules/lucide-react/dist/esm/icons/check.js
  var __iconNode = [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]];
  var Check = createLucideIcon("Check", __iconNode);

  // node_modules/fumadocs-ui/node_modules/lucide-react/dist/esm/icons/circle-x.js
  var __iconNode2 = [
    ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
    ["path", { d: "m15 9-6 6", key: "1uzhvr" }],
    ["path", { d: "m9 9 6 6", key: "z0biqf" }]
  ];
  var CircleX = createLucideIcon("CircleX", __iconNode2);

  // node_modules/fumadocs-ui/node_modules/lucide-react/dist/esm/icons/copy.js
  var __iconNode3 = [
    ["rect", { width: "14", height: "14", x: "8", y: "8", rx: "2", ry: "2", key: "17jyea" }],
    ["path", { d: "M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2", key: "zix9uf" }]
  ];
  var Copy = createLucideIcon("Copy", __iconNode3);

  // node_modules/fumadocs-ui/node_modules/lucide-react/dist/esm/icons/info.js
  var __iconNode4 = [
    ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
    ["path", { d: "M12 16v-4", key: "1dtifu" }],
    ["path", { d: "M12 8h.01", key: "e9boi3" }]
  ];
  var Info = createLucideIcon("Info", __iconNode4);

  // node_modules/fumadocs-ui/node_modules/lucide-react/dist/esm/icons/link.js
  var __iconNode5 = [
    ["path", { d: "M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71", key: "1cjeqo" }],
    ["path", { d: "M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71", key: "19qd67" }]
  ];
  var Link2 = createLucideIcon("Link", __iconNode5);

  // node_modules/fumadocs-ui/node_modules/lucide-react/dist/esm/icons/triangle-alert.js
  var __iconNode6 = [
    [
      "path",
      {
        d: "m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",
        key: "wmoenq"
      }
    ],
    ["path", { d: "M12 9v4", key: "juzpu7" }],
    ["path", { d: "M12 17h.01", key: "p32p05" }]
  ];
  var TriangleAlert = createLucideIcon("TriangleAlert", __iconNode6);

  // node_modules/fumadocs-ui/dist/components/callout.js
  var import_react4 = __toESM(require_react(), 1);
  var Callout = (0, import_react4.forwardRef)((_a, ref) => {
    var _b = _a, { className, children, title, type = "info", icon } = _b, props = __objRest(_b, ["className", "children", "title", "type", "icon"]);
    return (0, import_jsx_runtime3.jsxs)("div", __spreadProps(__spreadValues({ ref, className: twMerge("my-6 flex flex-row gap-2 rounded-lg border bg-fd-card p-3 text-sm text-fd-card-foreground shadow-md", className) }, props), { children: [icon != null ? icon : {
      info: (0, import_jsx_runtime3.jsx)(Info, { className: "size-5 fill-blue-500 text-fd-card" }),
      warn: (0, import_jsx_runtime3.jsx)(TriangleAlert, { className: "size-5 fill-orange-500 text-fd-card" }),
      error: (0, import_jsx_runtime3.jsx)(CircleX, { className: "size-5 fill-red-500 text-fd-card" })
    }[type], (0, import_jsx_runtime3.jsxs)("div", { className: "min-w-0 flex-1", children: [title ? (0, import_jsx_runtime3.jsx)("p", { className: "not-prose mb-2 font-medium", children: title }) : null, (0, import_jsx_runtime3.jsx)("div", { className: "text-fd-muted-foreground prose-no-margin", children })] })] }));
  });
  Callout.displayName = "Callout";

  // node_modules/fumadocs-ui/dist/components/heading.js
  var import_jsx_runtime4 = __toESM(require_jsx_runtime(), 1);
  function Heading(_a) {
    var _b = _a, { as, className } = _b, props = __objRest(_b, ["as", "className"]);
    const As = as != null ? as : "h1";
    if (!props.id)
      return (0, import_jsx_runtime4.jsx)(As, __spreadValues({ className }, props));
    return (0, import_jsx_runtime4.jsxs)(As, __spreadProps(__spreadValues({ className: twMerge("flex scroll-m-28 flex-row items-center gap-2", className) }, props), { children: [(0, import_jsx_runtime4.jsx)("a", { "data-card": "", href: "#".concat(props.id), className: "peer", children: props.children }), (0, import_jsx_runtime4.jsx)(Link2, { "aria-label": "Link to section", className: "size-3.5 shrink-0 text-fd-muted-foreground opacity-0 transition-opacity peer-hover:opacity-100" })] }));
  }

  // node_modules/fumadocs-ui/dist/mdx.client.js
  var import_jsx_runtime12 = __toESM(require_jsx_runtime(), 1);

  // node_modules/fumadocs-ui/dist/components/codeblock.js
  var import_jsx_runtime11 = __toESM(require_jsx_runtime(), 1);
  var import_react6 = __toESM(require_react(), 1);

  // node_modules/fumadocs-ui/dist/components/ui/scroll-area.js
  var import_jsx_runtime10 = __toESM(require_jsx_runtime(), 1);

  // node_modules/@radix-ui/react-scroll-area/dist/index.mjs
  var React23 = __toESM(require_react(), 1);

  // node_modules/@radix-ui/react-primitive/dist/index.mjs
  var React3 = __toESM(require_react(), 1);
  var ReactDOM = __toESM(require_react_dom(), 1);

  // node_modules/@radix-ui/react-slot/dist/index.mjs
  var React2 = __toESM(require_react(), 1);

  // node_modules/@radix-ui/react-compose-refs/dist/index.mjs
  var React = __toESM(require_react(), 1);
  function setRef(ref, value) {
    if (typeof ref === "function") {
      return ref(value);
    } else if (ref !== null && ref !== void 0) {
      ref.current = value;
    }
  }
  function composeRefs(...refs) {
    return (node) => {
      let hasCleanup = false;
      const cleanups = refs.map((ref) => {
        const cleanup = setRef(ref, node);
        if (!hasCleanup && typeof cleanup == "function") {
          hasCleanup = true;
        }
        return cleanup;
      });
      if (hasCleanup) {
        return () => {
          for (let i = 0; i < cleanups.length; i++) {
            const cleanup = cleanups[i];
            if (typeof cleanup == "function") {
              cleanup();
            } else {
              setRef(refs[i], null);
            }
          }
        };
      }
    };
  }
  function useComposedRefs(...refs) {
    return React.useCallback(composeRefs(...refs), refs);
  }

  // node_modules/@radix-ui/react-slot/dist/index.mjs
  var import_jsx_runtime5 = __toESM(require_jsx_runtime(), 1);
  var Slot = React2.forwardRef((props, forwardedRef) => {
    const _a = props, { children } = _a, slotProps = __objRest(_a, ["children"]);
    const childrenArray = React2.Children.toArray(children);
    const slottable = childrenArray.find(isSlottable);
    if (slottable) {
      const newElement = slottable.props.children;
      const newChildren = childrenArray.map((child) => {
        if (child === slottable) {
          if (React2.Children.count(newElement) > 1) return React2.Children.only(null);
          return React2.isValidElement(newElement) ? newElement.props.children : null;
        } else {
          return child;
        }
      });
      return /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(SlotClone, __spreadProps(__spreadValues({}, slotProps), { ref: forwardedRef, children: React2.isValidElement(newElement) ? React2.cloneElement(newElement, void 0, newChildren) : null }));
    }
    return /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(SlotClone, __spreadProps(__spreadValues({}, slotProps), { ref: forwardedRef, children }));
  });
  Slot.displayName = "Slot";
  var SlotClone = React2.forwardRef((props, forwardedRef) => {
    const _a = props, { children } = _a, slotProps = __objRest(_a, ["children"]);
    if (React2.isValidElement(children)) {
      const childrenRef = getElementRef(children);
      return React2.cloneElement(children, __spreadProps(__spreadValues({}, mergeProps(slotProps, children.props)), {
        // @ts-ignore
        ref: forwardedRef ? composeRefs(forwardedRef, childrenRef) : childrenRef
      }));
    }
    return React2.Children.count(children) > 1 ? React2.Children.only(null) : null;
  });
  SlotClone.displayName = "SlotClone";
  var Slottable = ({ children }) => {
    return /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(import_jsx_runtime5.Fragment, { children });
  };
  function isSlottable(child) {
    return React2.isValidElement(child) && child.type === Slottable;
  }
  function mergeProps(slotProps, childProps) {
    const overrideProps = __spreadValues({}, childProps);
    for (const propName in childProps) {
      const slotPropValue = slotProps[propName];
      const childPropValue = childProps[propName];
      const isHandler = /^on[A-Z]/.test(propName);
      if (isHandler) {
        if (slotPropValue && childPropValue) {
          overrideProps[propName] = (...args) => {
            childPropValue(...args);
            slotPropValue(...args);
          };
        } else if (slotPropValue) {
          overrideProps[propName] = slotPropValue;
        }
      } else if (propName === "style") {
        overrideProps[propName] = __spreadValues(__spreadValues({}, slotPropValue), childPropValue);
      } else if (propName === "className") {
        overrideProps[propName] = [slotPropValue, childPropValue].filter(Boolean).join(" ");
      }
    }
    return __spreadValues(__spreadValues({}, slotProps), overrideProps);
  }
  function getElementRef(element) {
    var _a, _b;
    let getter = (_a = Object.getOwnPropertyDescriptor(element.props, "ref")) == null ? void 0 : _a.get;
    let mayWarn = getter && "isReactWarning" in getter && getter.isReactWarning;
    if (mayWarn) {
      return element.ref;
    }
    getter = (_b = Object.getOwnPropertyDescriptor(element, "ref")) == null ? void 0 : _b.get;
    mayWarn = getter && "isReactWarning" in getter && getter.isReactWarning;
    if (mayWarn) {
      return element.props.ref;
    }
    return element.props.ref || element.ref;
  }

  // node_modules/@radix-ui/react-primitive/dist/index.mjs
  var import_jsx_runtime6 = __toESM(require_jsx_runtime(), 1);
  var NODES = [
    "a",
    "button",
    "div",
    "form",
    "h2",
    "h3",
    "img",
    "input",
    "label",
    "li",
    "nav",
    "ol",
    "p",
    "span",
    "svg",
    "ul"
  ];
  var Primitive = NODES.reduce((primitive, node) => {
    const Node = React3.forwardRef((props, forwardedRef) => {
      const _a = props, { asChild } = _a, primitiveProps = __objRest(_a, ["asChild"]);
      const Comp = asChild ? Slot : node;
      if (typeof window !== "undefined") {
        window[Symbol.for("radix-ui")] = true;
      }
      return /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(Comp, __spreadProps(__spreadValues({}, primitiveProps), { ref: forwardedRef }));
    });
    Node.displayName = "Primitive.".concat(node);
    return __spreadProps(__spreadValues({}, primitive), { [node]: Node });
  }, {});

  // node_modules/@radix-ui/react-presence/dist/index.mjs
  var React22 = __toESM(require_react(), 1);

  // node_modules/@radix-ui/react-use-layout-effect/dist/index.mjs
  var React4 = __toESM(require_react(), 1);
  var useLayoutEffect2 = Boolean(globalThis == null ? void 0 : globalThis.document) ? React4.useLayoutEffect : () => {
  };

  // node_modules/@radix-ui/react-presence/dist/index.mjs
  var React5 = __toESM(require_react(), 1);
  function useStateMachine(initialState, machine) {
    return React5.useReducer((state, event) => {
      const nextState = machine[state][event];
      return nextState != null ? nextState : state;
    }, initialState);
  }
  var Presence = (props) => {
    const { present, children } = props;
    const presence = usePresence(present);
    const child = typeof children === "function" ? children({ present: presence.isPresent }) : React22.Children.only(children);
    const ref = useComposedRefs(presence.ref, getElementRef2(child));
    const forceMount = typeof children === "function";
    return forceMount || presence.isPresent ? React22.cloneElement(child, { ref }) : null;
  };
  Presence.displayName = "Presence";
  function usePresence(present) {
    const [node, setNode] = React22.useState();
    const stylesRef = React22.useRef({});
    const prevPresentRef = React22.useRef(present);
    const prevAnimationNameRef = React22.useRef("none");
    const initialState = present ? "mounted" : "unmounted";
    const [state, send] = useStateMachine(initialState, {
      mounted: {
        UNMOUNT: "unmounted",
        ANIMATION_OUT: "unmountSuspended"
      },
      unmountSuspended: {
        MOUNT: "mounted",
        ANIMATION_END: "unmounted"
      },
      unmounted: {
        MOUNT: "mounted"
      }
    });
    React22.useEffect(() => {
      const currentAnimationName = getAnimationName(stylesRef.current);
      prevAnimationNameRef.current = state === "mounted" ? currentAnimationName : "none";
    }, [state]);
    useLayoutEffect2(() => {
      const styles = stylesRef.current;
      const wasPresent = prevPresentRef.current;
      const hasPresentChanged = wasPresent !== present;
      if (hasPresentChanged) {
        const prevAnimationName = prevAnimationNameRef.current;
        const currentAnimationName = getAnimationName(styles);
        if (present) {
          send("MOUNT");
        } else if (currentAnimationName === "none" || (styles == null ? void 0 : styles.display) === "none") {
          send("UNMOUNT");
        } else {
          const isAnimating = prevAnimationName !== currentAnimationName;
          if (wasPresent && isAnimating) {
            send("ANIMATION_OUT");
          } else {
            send("UNMOUNT");
          }
        }
        prevPresentRef.current = present;
      }
    }, [present, send]);
    useLayoutEffect2(() => {
      var _a;
      if (node) {
        let timeoutId;
        const ownerWindow = (_a = node.ownerDocument.defaultView) != null ? _a : window;
        const handleAnimationEnd = (event) => {
          const currentAnimationName = getAnimationName(stylesRef.current);
          const isCurrentAnimation = currentAnimationName.includes(event.animationName);
          if (event.target === node && isCurrentAnimation) {
            send("ANIMATION_END");
            if (!prevPresentRef.current) {
              const currentFillMode = node.style.animationFillMode;
              node.style.animationFillMode = "forwards";
              timeoutId = ownerWindow.setTimeout(() => {
                if (node.style.animationFillMode === "forwards") {
                  node.style.animationFillMode = currentFillMode;
                }
              });
            }
          }
        };
        const handleAnimationStart = (event) => {
          if (event.target === node) {
            prevAnimationNameRef.current = getAnimationName(stylesRef.current);
          }
        };
        node.addEventListener("animationstart", handleAnimationStart);
        node.addEventListener("animationcancel", handleAnimationEnd);
        node.addEventListener("animationend", handleAnimationEnd);
        return () => {
          ownerWindow.clearTimeout(timeoutId);
          node.removeEventListener("animationstart", handleAnimationStart);
          node.removeEventListener("animationcancel", handleAnimationEnd);
          node.removeEventListener("animationend", handleAnimationEnd);
        };
      } else {
        send("ANIMATION_END");
      }
    }, [node, send]);
    return {
      isPresent: ["mounted", "unmountSuspended"].includes(state),
      ref: React22.useCallback((node2) => {
        if (node2) stylesRef.current = getComputedStyle(node2);
        setNode(node2);
      }, [])
    };
  }
  function getAnimationName(styles) {
    return (styles == null ? void 0 : styles.animationName) || "none";
  }
  function getElementRef2(element) {
    var _a, _b;
    let getter = (_a = Object.getOwnPropertyDescriptor(element.props, "ref")) == null ? void 0 : _a.get;
    let mayWarn = getter && "isReactWarning" in getter && getter.isReactWarning;
    if (mayWarn) {
      return element.ref;
    }
    getter = (_b = Object.getOwnPropertyDescriptor(element, "ref")) == null ? void 0 : _b.get;
    mayWarn = getter && "isReactWarning" in getter && getter.isReactWarning;
    if (mayWarn) {
      return element.props.ref;
    }
    return element.props.ref || element.ref;
  }

  // node_modules/@radix-ui/react-context/dist/index.mjs
  var React6 = __toESM(require_react(), 1);
  var import_jsx_runtime7 = __toESM(require_jsx_runtime(), 1);
  function createContextScope(scopeName, createContextScopeDeps = []) {
    let defaultContexts = [];
    function createContext32(rootComponentName, defaultContext) {
      const BaseContext = React6.createContext(defaultContext);
      const index = defaultContexts.length;
      defaultContexts = [...defaultContexts, defaultContext];
      const Provider = (props) => {
        var _b;
        const _a = props, { scope, children } = _a, context = __objRest(_a, ["scope", "children"]);
        const Context = ((_b = scope == null ? void 0 : scope[scopeName]) == null ? void 0 : _b[index]) || BaseContext;
        const value = React6.useMemo(() => context, Object.values(context));
        return /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(Context.Provider, { value, children });
      };
      Provider.displayName = rootComponentName + "Provider";
      function useContext22(consumerName, scope) {
        var _a;
        const Context = ((_a = scope == null ? void 0 : scope[scopeName]) == null ? void 0 : _a[index]) || BaseContext;
        const context = React6.useContext(Context);
        if (context) return context;
        if (defaultContext !== void 0) return defaultContext;
        throw new Error("`".concat(consumerName, "` must be used within `").concat(rootComponentName, "`"));
      }
      return [Provider, useContext22];
    }
    const createScope = () => {
      const scopeContexts = defaultContexts.map((defaultContext) => {
        return React6.createContext(defaultContext);
      });
      return function useScope(scope) {
        const contexts = (scope == null ? void 0 : scope[scopeName]) || scopeContexts;
        return React6.useMemo(
          () => ({ ["__scope".concat(scopeName)]: __spreadProps(__spreadValues({}, scope), { [scopeName]: contexts }) }),
          [scope, contexts]
        );
      };
    };
    createScope.scopeName = scopeName;
    return [createContext32, composeContextScopes(createScope, ...createContextScopeDeps)];
  }
  function composeContextScopes(...scopes) {
    const baseScope = scopes[0];
    if (scopes.length === 1) return baseScope;
    const createScope = () => {
      const scopeHooks = scopes.map((createScope2) => ({
        useScope: createScope2(),
        scopeName: createScope2.scopeName
      }));
      return function useComposedScopes(overrideScopes) {
        const nextScopes = scopeHooks.reduce((nextScopes2, { useScope, scopeName }) => {
          const scopeProps = useScope(overrideScopes);
          const currentScope = scopeProps["__scope".concat(scopeName)];
          return __spreadValues(__spreadValues({}, nextScopes2), currentScope);
        }, {});
        return React6.useMemo(() => ({ ["__scope".concat(baseScope.scopeName)]: nextScopes }), [nextScopes]);
      };
    };
    createScope.scopeName = baseScope.scopeName;
    return createScope;
  }

  // node_modules/@radix-ui/react-use-callback-ref/dist/index.mjs
  var React7 = __toESM(require_react(), 1);
  function useCallbackRef(callback) {
    const callbackRef = React7.useRef(callback);
    React7.useEffect(() => {
      callbackRef.current = callback;
    });
    return React7.useMemo(() => (...args) => {
      var _a;
      return (_a = callbackRef.current) == null ? void 0 : _a.call(callbackRef, ...args);
    }, []);
  }

  // node_modules/@radix-ui/react-direction/dist/index.mjs
  var React8 = __toESM(require_react(), 1);
  var import_jsx_runtime8 = __toESM(require_jsx_runtime(), 1);
  var DirectionContext = React8.createContext(void 0);
  function useDirection(localDir) {
    const globalDir = React8.useContext(DirectionContext);
    return localDir || globalDir || "ltr";
  }

  // node_modules/@radix-ui/number/dist/index.mjs
  function clamp(value, [min, max]) {
    return Math.min(max, Math.max(min, value));
  }

  // node_modules/@radix-ui/primitive/dist/index.mjs
  function composeEventHandlers(originalEventHandler, ourEventHandler, { checkForDefaultPrevented = true } = {}) {
    return function handleEvent(event) {
      originalEventHandler == null ? void 0 : originalEventHandler(event);
      if (checkForDefaultPrevented === false || !event.defaultPrevented) {
        return ourEventHandler == null ? void 0 : ourEventHandler(event);
      }
    };
  }

  // node_modules/@radix-ui/react-scroll-area/dist/index.mjs
  var React9 = __toESM(require_react(), 1);
  var import_jsx_runtime9 = __toESM(require_jsx_runtime(), 1);
  function useStateMachine2(initialState, machine) {
    return React9.useReducer((state, event) => {
      const nextState = machine[state][event];
      return nextState != null ? nextState : state;
    }, initialState);
  }
  var SCROLL_AREA_NAME = "ScrollArea";
  var [createScrollAreaContext, createScrollAreaScope] = createContextScope(SCROLL_AREA_NAME);
  var [ScrollAreaProvider, useScrollAreaContext] = createScrollAreaContext(SCROLL_AREA_NAME);
  var ScrollArea = React23.forwardRef(
    (props, forwardedRef) => {
      const _a = props, {
        __scopeScrollArea,
        type = "hover",
        dir,
        scrollHideDelay = 600
      } = _a, scrollAreaProps = __objRest(_a, [
        "__scopeScrollArea",
        "type",
        "dir",
        "scrollHideDelay"
      ]);
      const [scrollArea, setScrollArea] = React23.useState(null);
      const [viewport, setViewport] = React23.useState(null);
      const [content, setContent] = React23.useState(null);
      const [scrollbarX, setScrollbarX] = React23.useState(null);
      const [scrollbarY, setScrollbarY] = React23.useState(null);
      const [cornerWidth, setCornerWidth] = React23.useState(0);
      const [cornerHeight, setCornerHeight] = React23.useState(0);
      const [scrollbarXEnabled, setScrollbarXEnabled] = React23.useState(false);
      const [scrollbarYEnabled, setScrollbarYEnabled] = React23.useState(false);
      const composedRefs = useComposedRefs(forwardedRef, (node) => setScrollArea(node));
      const direction = useDirection(dir);
      return /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(
        ScrollAreaProvider,
        {
          scope: __scopeScrollArea,
          type,
          dir: direction,
          scrollHideDelay,
          scrollArea,
          viewport,
          onViewportChange: setViewport,
          content,
          onContentChange: setContent,
          scrollbarX,
          onScrollbarXChange: setScrollbarX,
          scrollbarXEnabled,
          onScrollbarXEnabledChange: setScrollbarXEnabled,
          scrollbarY,
          onScrollbarYChange: setScrollbarY,
          scrollbarYEnabled,
          onScrollbarYEnabledChange: setScrollbarYEnabled,
          onCornerWidthChange: setCornerWidth,
          onCornerHeightChange: setCornerHeight,
          children: /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(
            Primitive.div,
            __spreadProps(__spreadValues({
              dir: direction
            }, scrollAreaProps), {
              ref: composedRefs,
              style: __spreadValues({
                position: "relative",
                // Pass corner sizes as CSS vars to reduce re-renders of context consumers
                ["--radix-scroll-area-corner-width"]: cornerWidth + "px",
                ["--radix-scroll-area-corner-height"]: cornerHeight + "px"
              }, props.style)
            })
          )
        }
      );
    }
  );
  ScrollArea.displayName = SCROLL_AREA_NAME;
  var VIEWPORT_NAME = "ScrollAreaViewport";
  var ScrollAreaViewport = React23.forwardRef(
    (props, forwardedRef) => {
      const _a = props, { __scopeScrollArea, children, nonce } = _a, viewportProps = __objRest(_a, ["__scopeScrollArea", "children", "nonce"]);
      const context = useScrollAreaContext(VIEWPORT_NAME, __scopeScrollArea);
      const ref = React23.useRef(null);
      const composedRefs = useComposedRefs(forwardedRef, ref, context.onViewportChange);
      return /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)(import_jsx_runtime9.Fragment, { children: [
        /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(
          "style",
          {
            dangerouslySetInnerHTML: {
              __html: "[data-radix-scroll-area-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-scroll-area-viewport]::-webkit-scrollbar{display:none}"
            },
            nonce
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(
          Primitive.div,
          __spreadProps(__spreadValues({
            "data-radix-scroll-area-viewport": ""
          }, viewportProps), {
            ref: composedRefs,
            style: __spreadValues({
              /**
               * We don't support `visible` because the intention is to have at least one scrollbar
               * if this component is used and `visible` will behave like `auto` in that case
               * https://developer.mozilla.org/en-US/docs/Web/CSS/overflow#description
               *
               * We don't handle `auto` because the intention is for the native implementation
               * to be hidden if using this component. We just want to ensure the node is scrollable
               * so could have used either `scroll` or `auto` here. We picked `scroll` to prevent
               * the browser from having to work out whether to render native scrollbars or not,
               * we tell it to with the intention of hiding them in CSS.
               */
              overflowX: context.scrollbarXEnabled ? "scroll" : "hidden",
              overflowY: context.scrollbarYEnabled ? "scroll" : "hidden"
            }, props.style),
            children: /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("div", { ref: context.onContentChange, style: { minWidth: "100%", display: "table" }, children })
          })
        )
      ] });
    }
  );
  ScrollAreaViewport.displayName = VIEWPORT_NAME;
  var SCROLLBAR_NAME = "ScrollAreaScrollbar";
  var ScrollAreaScrollbar = React23.forwardRef(
    (props, forwardedRef) => {
      const _a = props, { forceMount } = _a, scrollbarProps = __objRest(_a, ["forceMount"]);
      const context = useScrollAreaContext(SCROLLBAR_NAME, props.__scopeScrollArea);
      const { onScrollbarXEnabledChange, onScrollbarYEnabledChange } = context;
      const isHorizontal = props.orientation === "horizontal";
      React23.useEffect(() => {
        isHorizontal ? onScrollbarXEnabledChange(true) : onScrollbarYEnabledChange(true);
        return () => {
          isHorizontal ? onScrollbarXEnabledChange(false) : onScrollbarYEnabledChange(false);
        };
      }, [isHorizontal, onScrollbarXEnabledChange, onScrollbarYEnabledChange]);
      return context.type === "hover" ? /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(ScrollAreaScrollbarHover, __spreadProps(__spreadValues({}, scrollbarProps), { ref: forwardedRef, forceMount })) : context.type === "scroll" ? /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(ScrollAreaScrollbarScroll, __spreadProps(__spreadValues({}, scrollbarProps), { ref: forwardedRef, forceMount })) : context.type === "auto" ? /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(ScrollAreaScrollbarAuto, __spreadProps(__spreadValues({}, scrollbarProps), { ref: forwardedRef, forceMount })) : context.type === "always" ? /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(ScrollAreaScrollbarVisible, __spreadProps(__spreadValues({}, scrollbarProps), { ref: forwardedRef })) : null;
    }
  );
  ScrollAreaScrollbar.displayName = SCROLLBAR_NAME;
  var ScrollAreaScrollbarHover = React23.forwardRef((props, forwardedRef) => {
    const _a = props, { forceMount } = _a, scrollbarProps = __objRest(_a, ["forceMount"]);
    const context = useScrollAreaContext(SCROLLBAR_NAME, props.__scopeScrollArea);
    const [visible, setVisible] = React23.useState(false);
    React23.useEffect(() => {
      const scrollArea = context.scrollArea;
      let hideTimer = 0;
      if (scrollArea) {
        const handlePointerEnter = () => {
          window.clearTimeout(hideTimer);
          setVisible(true);
        };
        const handlePointerLeave = () => {
          hideTimer = window.setTimeout(() => setVisible(false), context.scrollHideDelay);
        };
        scrollArea.addEventListener("pointerenter", handlePointerEnter);
        scrollArea.addEventListener("pointerleave", handlePointerLeave);
        return () => {
          window.clearTimeout(hideTimer);
          scrollArea.removeEventListener("pointerenter", handlePointerEnter);
          scrollArea.removeEventListener("pointerleave", handlePointerLeave);
        };
      }
    }, [context.scrollArea, context.scrollHideDelay]);
    return /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(Presence, { present: forceMount || visible, children: /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(
      ScrollAreaScrollbarAuto,
      __spreadProps(__spreadValues({
        "data-state": visible ? "visible" : "hidden"
      }, scrollbarProps), {
        ref: forwardedRef
      })
    ) });
  });
  var ScrollAreaScrollbarScroll = React23.forwardRef((props, forwardedRef) => {
    const _a = props, { forceMount } = _a, scrollbarProps = __objRest(_a, ["forceMount"]);
    const context = useScrollAreaContext(SCROLLBAR_NAME, props.__scopeScrollArea);
    const isHorizontal = props.orientation === "horizontal";
    const debounceScrollEnd = useDebounceCallback(() => send("SCROLL_END"), 100);
    const [state, send] = useStateMachine2("hidden", {
      hidden: {
        SCROLL: "scrolling"
      },
      scrolling: {
        SCROLL_END: "idle",
        POINTER_ENTER: "interacting"
      },
      interacting: {
        SCROLL: "interacting",
        POINTER_LEAVE: "idle"
      },
      idle: {
        HIDE: "hidden",
        SCROLL: "scrolling",
        POINTER_ENTER: "interacting"
      }
    });
    React23.useEffect(() => {
      if (state === "idle") {
        const hideTimer = window.setTimeout(() => send("HIDE"), context.scrollHideDelay);
        return () => window.clearTimeout(hideTimer);
      }
    }, [state, context.scrollHideDelay, send]);
    React23.useEffect(() => {
      const viewport = context.viewport;
      const scrollDirection = isHorizontal ? "scrollLeft" : "scrollTop";
      if (viewport) {
        let prevScrollPos = viewport[scrollDirection];
        const handleScroll = () => {
          const scrollPos = viewport[scrollDirection];
          const hasScrollInDirectionChanged = prevScrollPos !== scrollPos;
          if (hasScrollInDirectionChanged) {
            send("SCROLL");
            debounceScrollEnd();
          }
          prevScrollPos = scrollPos;
        };
        viewport.addEventListener("scroll", handleScroll);
        return () => viewport.removeEventListener("scroll", handleScroll);
      }
    }, [context.viewport, isHorizontal, send, debounceScrollEnd]);
    return /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(Presence, { present: forceMount || state !== "hidden", children: /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(
      ScrollAreaScrollbarVisible,
      __spreadProps(__spreadValues({
        "data-state": state === "hidden" ? "hidden" : "visible"
      }, scrollbarProps), {
        ref: forwardedRef,
        onPointerEnter: composeEventHandlers(props.onPointerEnter, () => send("POINTER_ENTER")),
        onPointerLeave: composeEventHandlers(props.onPointerLeave, () => send("POINTER_LEAVE"))
      })
    ) });
  });
  var ScrollAreaScrollbarAuto = React23.forwardRef((props, forwardedRef) => {
    const context = useScrollAreaContext(SCROLLBAR_NAME, props.__scopeScrollArea);
    const _a = props, { forceMount } = _a, scrollbarProps = __objRest(_a, ["forceMount"]);
    const [visible, setVisible] = React23.useState(false);
    const isHorizontal = props.orientation === "horizontal";
    const handleResize = useDebounceCallback(() => {
      if (context.viewport) {
        const isOverflowX = context.viewport.offsetWidth < context.viewport.scrollWidth;
        const isOverflowY = context.viewport.offsetHeight < context.viewport.scrollHeight;
        setVisible(isHorizontal ? isOverflowX : isOverflowY);
      }
    }, 10);
    useResizeObserver(context.viewport, handleResize);
    useResizeObserver(context.content, handleResize);
    return /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(Presence, { present: forceMount || visible, children: /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(
      ScrollAreaScrollbarVisible,
      __spreadProps(__spreadValues({
        "data-state": visible ? "visible" : "hidden"
      }, scrollbarProps), {
        ref: forwardedRef
      })
    ) });
  });
  var ScrollAreaScrollbarVisible = React23.forwardRef((props, forwardedRef) => {
    const _a = props, { orientation = "vertical" } = _a, scrollbarProps = __objRest(_a, ["orientation"]);
    const context = useScrollAreaContext(SCROLLBAR_NAME, props.__scopeScrollArea);
    const thumbRef = React23.useRef(null);
    const pointerOffsetRef = React23.useRef(0);
    const [sizes, setSizes] = React23.useState({
      content: 0,
      viewport: 0,
      scrollbar: { size: 0, paddingStart: 0, paddingEnd: 0 }
    });
    const thumbRatio = getThumbRatio(sizes.viewport, sizes.content);
    const commonProps = __spreadProps(__spreadValues({}, scrollbarProps), {
      sizes,
      onSizesChange: setSizes,
      hasThumb: Boolean(thumbRatio > 0 && thumbRatio < 1),
      onThumbChange: (thumb) => thumbRef.current = thumb,
      onThumbPointerUp: () => pointerOffsetRef.current = 0,
      onThumbPointerDown: (pointerPos) => pointerOffsetRef.current = pointerPos
    });
    function getScrollPosition(pointerPos, dir) {
      return getScrollPositionFromPointer(pointerPos, pointerOffsetRef.current, sizes, dir);
    }
    if (orientation === "horizontal") {
      return /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(
        ScrollAreaScrollbarX,
        __spreadProps(__spreadValues({}, commonProps), {
          ref: forwardedRef,
          onThumbPositionChange: () => {
            if (context.viewport && thumbRef.current) {
              const scrollPos = context.viewport.scrollLeft;
              const offset = getThumbOffsetFromScroll(scrollPos, sizes, context.dir);
              thumbRef.current.style.transform = "translate3d(".concat(offset, "px, 0, 0)");
            }
          },
          onWheelScroll: (scrollPos) => {
            if (context.viewport) context.viewport.scrollLeft = scrollPos;
          },
          onDragScroll: (pointerPos) => {
            if (context.viewport) {
              context.viewport.scrollLeft = getScrollPosition(pointerPos, context.dir);
            }
          }
        })
      );
    }
    if (orientation === "vertical") {
      return /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(
        ScrollAreaScrollbarY,
        __spreadProps(__spreadValues({}, commonProps), {
          ref: forwardedRef,
          onThumbPositionChange: () => {
            if (context.viewport && thumbRef.current) {
              const scrollPos = context.viewport.scrollTop;
              const offset = getThumbOffsetFromScroll(scrollPos, sizes);
              thumbRef.current.style.transform = "translate3d(0, ".concat(offset, "px, 0)");
            }
          },
          onWheelScroll: (scrollPos) => {
            if (context.viewport) context.viewport.scrollTop = scrollPos;
          },
          onDragScroll: (pointerPos) => {
            if (context.viewport) context.viewport.scrollTop = getScrollPosition(pointerPos);
          }
        })
      );
    }
    return null;
  });
  var ScrollAreaScrollbarX = React23.forwardRef((props, forwardedRef) => {
    const _a = props, { sizes, onSizesChange } = _a, scrollbarProps = __objRest(_a, ["sizes", "onSizesChange"]);
    const context = useScrollAreaContext(SCROLLBAR_NAME, props.__scopeScrollArea);
    const [computedStyle, setComputedStyle] = React23.useState();
    const ref = React23.useRef(null);
    const composeRefs2 = useComposedRefs(forwardedRef, ref, context.onScrollbarXChange);
    React23.useEffect(() => {
      if (ref.current) setComputedStyle(getComputedStyle(ref.current));
    }, [ref]);
    return /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(
      ScrollAreaScrollbarImpl,
      __spreadProps(__spreadValues({
        "data-orientation": "horizontal"
      }, scrollbarProps), {
        ref: composeRefs2,
        sizes,
        style: __spreadValues({
          bottom: 0,
          left: context.dir === "rtl" ? "var(--radix-scroll-area-corner-width)" : 0,
          right: context.dir === "ltr" ? "var(--radix-scroll-area-corner-width)" : 0,
          ["--radix-scroll-area-thumb-width"]: getThumbSize(sizes) + "px"
        }, props.style),
        onThumbPointerDown: (pointerPos) => props.onThumbPointerDown(pointerPos.x),
        onDragScroll: (pointerPos) => props.onDragScroll(pointerPos.x),
        onWheelScroll: (event, maxScrollPos) => {
          if (context.viewport) {
            const scrollPos = context.viewport.scrollLeft + event.deltaX;
            props.onWheelScroll(scrollPos);
            if (isScrollingWithinScrollbarBounds(scrollPos, maxScrollPos)) {
              event.preventDefault();
            }
          }
        },
        onResize: () => {
          if (ref.current && context.viewport && computedStyle) {
            onSizesChange({
              content: context.viewport.scrollWidth,
              viewport: context.viewport.offsetWidth,
              scrollbar: {
                size: ref.current.clientWidth,
                paddingStart: toInt(computedStyle.paddingLeft),
                paddingEnd: toInt(computedStyle.paddingRight)
              }
            });
          }
        }
      })
    );
  });
  var ScrollAreaScrollbarY = React23.forwardRef((props, forwardedRef) => {
    const _a = props, { sizes, onSizesChange } = _a, scrollbarProps = __objRest(_a, ["sizes", "onSizesChange"]);
    const context = useScrollAreaContext(SCROLLBAR_NAME, props.__scopeScrollArea);
    const [computedStyle, setComputedStyle] = React23.useState();
    const ref = React23.useRef(null);
    const composeRefs2 = useComposedRefs(forwardedRef, ref, context.onScrollbarYChange);
    React23.useEffect(() => {
      if (ref.current) setComputedStyle(getComputedStyle(ref.current));
    }, [ref]);
    return /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(
      ScrollAreaScrollbarImpl,
      __spreadProps(__spreadValues({
        "data-orientation": "vertical"
      }, scrollbarProps), {
        ref: composeRefs2,
        sizes,
        style: __spreadValues({
          top: 0,
          right: context.dir === "ltr" ? 0 : void 0,
          left: context.dir === "rtl" ? 0 : void 0,
          bottom: "var(--radix-scroll-area-corner-height)",
          ["--radix-scroll-area-thumb-height"]: getThumbSize(sizes) + "px"
        }, props.style),
        onThumbPointerDown: (pointerPos) => props.onThumbPointerDown(pointerPos.y),
        onDragScroll: (pointerPos) => props.onDragScroll(pointerPos.y),
        onWheelScroll: (event, maxScrollPos) => {
          if (context.viewport) {
            const scrollPos = context.viewport.scrollTop + event.deltaY;
            props.onWheelScroll(scrollPos);
            if (isScrollingWithinScrollbarBounds(scrollPos, maxScrollPos)) {
              event.preventDefault();
            }
          }
        },
        onResize: () => {
          if (ref.current && context.viewport && computedStyle) {
            onSizesChange({
              content: context.viewport.scrollHeight,
              viewport: context.viewport.offsetHeight,
              scrollbar: {
                size: ref.current.clientHeight,
                paddingStart: toInt(computedStyle.paddingTop),
                paddingEnd: toInt(computedStyle.paddingBottom)
              }
            });
          }
        }
      })
    );
  });
  var [ScrollbarProvider, useScrollbarContext] = createScrollAreaContext(SCROLLBAR_NAME);
  var ScrollAreaScrollbarImpl = React23.forwardRef((props, forwardedRef) => {
    const _a = props, {
      __scopeScrollArea,
      sizes,
      hasThumb,
      onThumbChange,
      onThumbPointerUp,
      onThumbPointerDown,
      onThumbPositionChange,
      onDragScroll,
      onWheelScroll,
      onResize
    } = _a, scrollbarProps = __objRest(_a, [
      "__scopeScrollArea",
      "sizes",
      "hasThumb",
      "onThumbChange",
      "onThumbPointerUp",
      "onThumbPointerDown",
      "onThumbPositionChange",
      "onDragScroll",
      "onWheelScroll",
      "onResize"
    ]);
    const context = useScrollAreaContext(SCROLLBAR_NAME, __scopeScrollArea);
    const [scrollbar, setScrollbar] = React23.useState(null);
    const composeRefs2 = useComposedRefs(forwardedRef, (node) => setScrollbar(node));
    const rectRef = React23.useRef(null);
    const prevWebkitUserSelectRef = React23.useRef("");
    const viewport = context.viewport;
    const maxScrollPos = sizes.content - sizes.viewport;
    const handleWheelScroll = useCallbackRef(onWheelScroll);
    const handleThumbPositionChange = useCallbackRef(onThumbPositionChange);
    const handleResize = useDebounceCallback(onResize, 10);
    function handleDragScroll(event) {
      if (rectRef.current) {
        const x = event.clientX - rectRef.current.left;
        const y = event.clientY - rectRef.current.top;
        onDragScroll({ x, y });
      }
    }
    React23.useEffect(() => {
      const handleWheel = (event) => {
        const element = event.target;
        const isScrollbarWheel = scrollbar == null ? void 0 : scrollbar.contains(element);
        if (isScrollbarWheel) handleWheelScroll(event, maxScrollPos);
      };
      document.addEventListener("wheel", handleWheel, { passive: false });
      return () => document.removeEventListener("wheel", handleWheel, { passive: false });
    }, [viewport, scrollbar, maxScrollPos, handleWheelScroll]);
    React23.useEffect(handleThumbPositionChange, [sizes, handleThumbPositionChange]);
    useResizeObserver(scrollbar, handleResize);
    useResizeObserver(context.content, handleResize);
    return /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(
      ScrollbarProvider,
      {
        scope: __scopeScrollArea,
        scrollbar,
        hasThumb,
        onThumbChange: useCallbackRef(onThumbChange),
        onThumbPointerUp: useCallbackRef(onThumbPointerUp),
        onThumbPositionChange: handleThumbPositionChange,
        onThumbPointerDown: useCallbackRef(onThumbPointerDown),
        children: /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(
          Primitive.div,
          __spreadProps(__spreadValues({}, scrollbarProps), {
            ref: composeRefs2,
            style: __spreadValues({ position: "absolute" }, scrollbarProps.style),
            onPointerDown: composeEventHandlers(props.onPointerDown, (event) => {
              const mainPointer = 0;
              if (event.button === mainPointer) {
                const element = event.target;
                element.setPointerCapture(event.pointerId);
                rectRef.current = scrollbar.getBoundingClientRect();
                prevWebkitUserSelectRef.current = document.body.style.webkitUserSelect;
                document.body.style.webkitUserSelect = "none";
                if (context.viewport) context.viewport.style.scrollBehavior = "auto";
                handleDragScroll(event);
              }
            }),
            onPointerMove: composeEventHandlers(props.onPointerMove, handleDragScroll),
            onPointerUp: composeEventHandlers(props.onPointerUp, (event) => {
              const element = event.target;
              if (element.hasPointerCapture(event.pointerId)) {
                element.releasePointerCapture(event.pointerId);
              }
              document.body.style.webkitUserSelect = prevWebkitUserSelectRef.current;
              if (context.viewport) context.viewport.style.scrollBehavior = "";
              rectRef.current = null;
            })
          })
        )
      }
    );
  });
  var THUMB_NAME = "ScrollAreaThumb";
  var ScrollAreaThumb = React23.forwardRef(
    (props, forwardedRef) => {
      const _a = props, { forceMount } = _a, thumbProps = __objRest(_a, ["forceMount"]);
      const scrollbarContext = useScrollbarContext(THUMB_NAME, props.__scopeScrollArea);
      return /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(Presence, { present: forceMount || scrollbarContext.hasThumb, children: /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(ScrollAreaThumbImpl, __spreadValues({ ref: forwardedRef }, thumbProps)) });
    }
  );
  var ScrollAreaThumbImpl = React23.forwardRef(
    (props, forwardedRef) => {
      const _a = props, { __scopeScrollArea, style } = _a, thumbProps = __objRest(_a, ["__scopeScrollArea", "style"]);
      const scrollAreaContext = useScrollAreaContext(THUMB_NAME, __scopeScrollArea);
      const scrollbarContext = useScrollbarContext(THUMB_NAME, __scopeScrollArea);
      const { onThumbPositionChange } = scrollbarContext;
      const composedRef = useComposedRefs(
        forwardedRef,
        (node) => scrollbarContext.onThumbChange(node)
      );
      const removeUnlinkedScrollListenerRef = React23.useRef(void 0);
      const debounceScrollEnd = useDebounceCallback(() => {
        if (removeUnlinkedScrollListenerRef.current) {
          removeUnlinkedScrollListenerRef.current();
          removeUnlinkedScrollListenerRef.current = void 0;
        }
      }, 100);
      React23.useEffect(() => {
        const viewport = scrollAreaContext.viewport;
        if (viewport) {
          const handleScroll = () => {
            debounceScrollEnd();
            if (!removeUnlinkedScrollListenerRef.current) {
              const listener = addUnlinkedScrollListener(viewport, onThumbPositionChange);
              removeUnlinkedScrollListenerRef.current = listener;
              onThumbPositionChange();
            }
          };
          onThumbPositionChange();
          viewport.addEventListener("scroll", handleScroll);
          return () => viewport.removeEventListener("scroll", handleScroll);
        }
      }, [scrollAreaContext.viewport, debounceScrollEnd, onThumbPositionChange]);
      return /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(
        Primitive.div,
        __spreadProps(__spreadValues({
          "data-state": scrollbarContext.hasThumb ? "visible" : "hidden"
        }, thumbProps), {
          ref: composedRef,
          style: __spreadValues({
            width: "var(--radix-scroll-area-thumb-width)",
            height: "var(--radix-scroll-area-thumb-height)"
          }, style),
          onPointerDownCapture: composeEventHandlers(props.onPointerDownCapture, (event) => {
            const thumb = event.target;
            const thumbRect = thumb.getBoundingClientRect();
            const x = event.clientX - thumbRect.left;
            const y = event.clientY - thumbRect.top;
            scrollbarContext.onThumbPointerDown({ x, y });
          }),
          onPointerUp: composeEventHandlers(props.onPointerUp, scrollbarContext.onThumbPointerUp)
        })
      );
    }
  );
  ScrollAreaThumb.displayName = THUMB_NAME;
  var CORNER_NAME = "ScrollAreaCorner";
  var ScrollAreaCorner = React23.forwardRef(
    (props, forwardedRef) => {
      const context = useScrollAreaContext(CORNER_NAME, props.__scopeScrollArea);
      const hasBothScrollbarsVisible = Boolean(context.scrollbarX && context.scrollbarY);
      const hasCorner = context.type !== "scroll" && hasBothScrollbarsVisible;
      return hasCorner ? /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(ScrollAreaCornerImpl, __spreadProps(__spreadValues({}, props), { ref: forwardedRef })) : null;
    }
  );
  ScrollAreaCorner.displayName = CORNER_NAME;
  var ScrollAreaCornerImpl = React23.forwardRef((props, forwardedRef) => {
    const _a = props, { __scopeScrollArea } = _a, cornerProps = __objRest(_a, ["__scopeScrollArea"]);
    const context = useScrollAreaContext(CORNER_NAME, __scopeScrollArea);
    const [width, setWidth] = React23.useState(0);
    const [height, setHeight] = React23.useState(0);
    const hasSize = Boolean(width && height);
    useResizeObserver(context.scrollbarX, () => {
      var _a2;
      const height2 = ((_a2 = context.scrollbarX) == null ? void 0 : _a2.offsetHeight) || 0;
      context.onCornerHeightChange(height2);
      setHeight(height2);
    });
    useResizeObserver(context.scrollbarY, () => {
      var _a2;
      const width2 = ((_a2 = context.scrollbarY) == null ? void 0 : _a2.offsetWidth) || 0;
      context.onCornerWidthChange(width2);
      setWidth(width2);
    });
    return hasSize ? /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(
      Primitive.div,
      __spreadProps(__spreadValues({}, cornerProps), {
        ref: forwardedRef,
        style: __spreadValues({
          width,
          height,
          position: "absolute",
          right: context.dir === "ltr" ? 0 : void 0,
          left: context.dir === "rtl" ? 0 : void 0,
          bottom: 0
        }, props.style)
      })
    ) : null;
  });
  function toInt(value) {
    return value ? parseInt(value, 10) : 0;
  }
  function getThumbRatio(viewportSize, contentSize) {
    const ratio = viewportSize / contentSize;
    return isNaN(ratio) ? 0 : ratio;
  }
  function getThumbSize(sizes) {
    const ratio = getThumbRatio(sizes.viewport, sizes.content);
    const scrollbarPadding = sizes.scrollbar.paddingStart + sizes.scrollbar.paddingEnd;
    const thumbSize = (sizes.scrollbar.size - scrollbarPadding) * ratio;
    return Math.max(thumbSize, 18);
  }
  function getScrollPositionFromPointer(pointerPos, pointerOffset, sizes, dir = "ltr") {
    const thumbSizePx = getThumbSize(sizes);
    const thumbCenter = thumbSizePx / 2;
    const offset = pointerOffset || thumbCenter;
    const thumbOffsetFromEnd = thumbSizePx - offset;
    const minPointerPos = sizes.scrollbar.paddingStart + offset;
    const maxPointerPos = sizes.scrollbar.size - sizes.scrollbar.paddingEnd - thumbOffsetFromEnd;
    const maxScrollPos = sizes.content - sizes.viewport;
    const scrollRange = dir === "ltr" ? [0, maxScrollPos] : [maxScrollPos * -1, 0];
    const interpolate = linearScale([minPointerPos, maxPointerPos], scrollRange);
    return interpolate(pointerPos);
  }
  function getThumbOffsetFromScroll(scrollPos, sizes, dir = "ltr") {
    const thumbSizePx = getThumbSize(sizes);
    const scrollbarPadding = sizes.scrollbar.paddingStart + sizes.scrollbar.paddingEnd;
    const scrollbar = sizes.scrollbar.size - scrollbarPadding;
    const maxScrollPos = sizes.content - sizes.viewport;
    const maxThumbPos = scrollbar - thumbSizePx;
    const scrollClampRange = dir === "ltr" ? [0, maxScrollPos] : [maxScrollPos * -1, 0];
    const scrollWithoutMomentum = clamp(scrollPos, scrollClampRange);
    const interpolate = linearScale([0, maxScrollPos], [0, maxThumbPos]);
    return interpolate(scrollWithoutMomentum);
  }
  function linearScale(input, output) {
    return (value) => {
      if (input[0] === input[1] || output[0] === output[1]) return output[0];
      const ratio = (output[1] - output[0]) / (input[1] - input[0]);
      return output[0] + ratio * (value - input[0]);
    };
  }
  function isScrollingWithinScrollbarBounds(scrollPos, maxScrollPos) {
    return scrollPos > 0 && scrollPos < maxScrollPos;
  }
  var addUnlinkedScrollListener = (node, handler = () => {
  }) => {
    let prevPosition = { left: node.scrollLeft, top: node.scrollTop };
    let rAF = 0;
    (function loop() {
      const position = { left: node.scrollLeft, top: node.scrollTop };
      const isHorizontalScroll = prevPosition.left !== position.left;
      const isVerticalScroll = prevPosition.top !== position.top;
      if (isHorizontalScroll || isVerticalScroll) handler();
      prevPosition = position;
      rAF = window.requestAnimationFrame(loop);
    })();
    return () => window.cancelAnimationFrame(rAF);
  };
  function useDebounceCallback(callback, delay) {
    const handleCallback = useCallbackRef(callback);
    const debounceTimerRef = React23.useRef(0);
    React23.useEffect(() => () => window.clearTimeout(debounceTimerRef.current), []);
    return React23.useCallback(() => {
      window.clearTimeout(debounceTimerRef.current);
      debounceTimerRef.current = window.setTimeout(handleCallback, delay);
    }, [handleCallback, delay]);
  }
  function useResizeObserver(element, onResize) {
    const handleResize = useCallbackRef(onResize);
    useLayoutEffect2(() => {
      let rAF = 0;
      if (element) {
        const resizeObserver = new ResizeObserver(() => {
          cancelAnimationFrame(rAF);
          rAF = window.requestAnimationFrame(handleResize);
        });
        resizeObserver.observe(element);
        return () => {
          window.cancelAnimationFrame(rAF);
          resizeObserver.unobserve(element);
        };
      }
    }, [element, handleResize]);
  }
  var Root = ScrollArea;
  var Viewport = ScrollAreaViewport;
  var Scrollbar = ScrollAreaScrollbar;
  var Corner = ScrollAreaCorner;

  // node_modules/fumadocs-ui/dist/components/ui/scroll-area.js
  var React10 = __toESM(require_react(), 1);
  var ScrollArea2 = React10.forwardRef((_a, ref) => {
    var _b = _a, { className, children } = _b, props = __objRest(_b, ["className", "children"]);
    return (0, import_jsx_runtime10.jsxs)(Root, __spreadProps(__spreadValues({ ref, className: twMerge("overflow-hidden", className) }, props), { children: [children, (0, import_jsx_runtime10.jsx)(Corner, {}), (0, import_jsx_runtime10.jsx)(ScrollBar, { orientation: "vertical" })] }));
  });
  ScrollArea2.displayName = Root.displayName;
  var ScrollViewport = React10.forwardRef((_a, ref) => {
    var _b = _a, { className, children } = _b, props = __objRest(_b, ["className", "children"]);
    return (0, import_jsx_runtime10.jsx)(Viewport, __spreadProps(__spreadValues({ ref, className: twMerge("size-full rounded-[inherit]", className) }, props), { children }));
  });
  ScrollViewport.displayName = Viewport.displayName;
  var ScrollBar = React10.forwardRef((_a, ref) => {
    var _b = _a, { className, orientation = "vertical" } = _b, props = __objRest(_b, ["className", "orientation"]);
    return (0, import_jsx_runtime10.jsx)(Scrollbar, __spreadProps(__spreadValues({ ref, orientation, className: twMerge("flex select-none data-[state=hidden]:animate-fd-fade-out", orientation === "vertical" && "h-full w-1.5", orientation === "horizontal" && "h-1.5 flex-col", className) }, props), { children: (0, import_jsx_runtime10.jsx)(ScrollAreaThumb, { className: "relative flex-1 rounded-full bg-fd-border" }) }));
  });
  ScrollBar.displayName = Scrollbar.displayName;

  // node_modules/fumadocs-ui/dist/utils/use-copy-button.js
  var import_react5 = __toESM(require_react(), 1);
  function useCopyButton(onCopy) {
    const [checked, setChecked] = (0, import_react5.useState)(false);
    const timeoutRef = (0, import_react5.useRef)(null);
    const callbackRef = (0, import_react5.useRef)(onCopy);
    callbackRef.current = onCopy;
    const onClick = (0, import_react5.useCallback)(() => {
      if (timeoutRef.current)
        window.clearTimeout(timeoutRef.current);
      timeoutRef.current = window.setTimeout(() => {
        setChecked(false);
      }, 1500);
      callbackRef.current();
      setChecked(true);
    }, []);
    (0, import_react5.useEffect)(() => {
      return () => {
        if (timeoutRef.current)
          window.clearTimeout(timeoutRef.current);
      };
    }, []);
    return [checked, onClick];
  }

  // node_modules/clsx/dist/clsx.mjs
  function r(e) {
    var t, f, n = "";
    if ("string" == typeof e || "number" == typeof e) n += e;
    else if ("object" == typeof e) if (Array.isArray(e)) {
      var o = e.length;
      for (t = 0; t < o; t++) e[t] && (f = r(e[t])) && (n && (n += " "), n += f);
    } else for (f in e) e[f] && (n && (n += " "), n += f);
    return n;
  }
  function clsx() {
    for (var e, t, f = 0, n = "", o = arguments.length; f < o; f++) (e = arguments[f]) && (t = r(e)) && (n && (n += " "), n += t);
    return n;
  }

  // node_modules/class-variance-authority/dist/index.mjs
  var falsyToString = (value) => typeof value === "boolean" ? "".concat(value) : value === 0 ? "0" : value;
  var cx = clsx;
  var cva = (base, config) => (props) => {
    var _config_compoundVariants;
    if ((config === null || config === void 0 ? void 0 : config.variants) == null) return cx(base, props === null || props === void 0 ? void 0 : props.class, props === null || props === void 0 ? void 0 : props.className);
    const { variants, defaultVariants } = config;
    const getVariantClassNames = Object.keys(variants).map((variant) => {
      const variantProp = props === null || props === void 0 ? void 0 : props[variant];
      const defaultVariantProp = defaultVariants === null || defaultVariants === void 0 ? void 0 : defaultVariants[variant];
      if (variantProp === null) return null;
      const variantKey = falsyToString(variantProp) || falsyToString(defaultVariantProp);
      return variants[variant][variantKey];
    });
    const propsWithoutUndefined = props && Object.entries(props).reduce((acc, param) => {
      let [key, value] = param;
      if (value === void 0) {
        return acc;
      }
      acc[key] = value;
      return acc;
    }, {});
    const getCompoundVariantClassNames = config === null || config === void 0 ? void 0 : (_config_compoundVariants = config.compoundVariants) === null || _config_compoundVariants === void 0 ? void 0 : _config_compoundVariants.reduce((acc, param) => {
      let _a = param, { class: cvClass, className: cvClassName } = _a, compoundVariantOptions = __objRest(_a, ["class", "className"]);
      return Object.entries(compoundVariantOptions).every((param2) => {
        let [key, value] = param2;
        return Array.isArray(value) ? value.includes(__spreadValues(__spreadValues({}, defaultVariants), propsWithoutUndefined)[key]) : __spreadValues(__spreadValues({}, defaultVariants), propsWithoutUndefined)[key] === value;
      }) ? [
        ...acc,
        cvClass,
        cvClassName
      ] : acc;
    }, []);
    return cx(base, getVariantClassNames, getCompoundVariantClassNames, props === null || props === void 0 ? void 0 : props.class, props === null || props === void 0 ? void 0 : props.className);
  };

  // node_modules/fumadocs-ui/dist/components/ui/button.js
  var buttonVariants = cva("inline-flex items-center justify-center rounded-md p-2 text-sm font-medium transition-colors duration-100 disabled:pointer-events-none disabled:opacity-50", {
    variants: {
      color: {
        outline: "border hover:bg-fd-accent hover:text-fd-accent-foreground",
        ghost: "hover:bg-fd-accent hover:text-fd-accent-foreground",
        secondary: "border bg-fd-secondary text-fd-secondary-foreground hover:bg-fd-accent hover:text-fd-accent-foreground"
      },
      size: {
        sm: "gap-1 p-0.5 text-xs",
        icon: "p-1.5 [&_svg]:size-5"
      }
    }
  });

  // node_modules/fumadocs-ui/dist/components/codeblock.js
  var Pre = (0, import_react6.forwardRef)((_a, ref) => {
    var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
    return (0, import_jsx_runtime11.jsx)("pre", __spreadProps(__spreadValues({ ref, className: twMerge("p-4 focus-visible:outline-none", className) }, props), { children: props.children }));
  });
  Pre.displayName = "Pre";
  var CodeBlock = (0, import_react6.forwardRef)((_a, ref) => {
    var _b = _a, { title, allowCopy = true, keepBackground = false, icon, viewportProps } = _b, props = __objRest(_b, ["title", "allowCopy", "keepBackground", "icon", "viewportProps"]);
    const areaRef = (0, import_react6.useRef)(null);
    const onCopy = (0, import_react6.useCallback)(() => {
      var _a2, _b2;
      const pre = (_a2 = areaRef.current) == null ? void 0 : _a2.getElementsByTagName("pre").item(0);
      if (!pre)
        return;
      const clone = pre.cloneNode(true);
      clone.querySelectorAll(".nd-copy-ignore").forEach((node) => {
        node.remove();
      });
      void navigator.clipboard.writeText((_b2 = clone.textContent) != null ? _b2 : "");
    }, []);
    return (0, import_jsx_runtime11.jsxs)("figure", __spreadProps(__spreadValues({ ref }, props), { className: twMerge("not-prose group fd-codeblock relative my-6 overflow-hidden rounded-lg border bg-fd-secondary/50 text-sm", keepBackground && "bg-[var(--shiki-light-bg)] dark:bg-[var(--shiki-dark-bg)]", props.className), children: [title ? (0, import_jsx_runtime11.jsxs)("div", { className: "flex flex-row items-center gap-2 border-b bg-fd-muted px-4 py-1.5", children: [icon ? (0, import_jsx_runtime11.jsx)("div", { className: "text-fd-muted-foreground [&_svg]:size-3.5", dangerouslySetInnerHTML: typeof icon === "string" ? {
      __html: icon
    } : void 0, children: typeof icon !== "string" ? icon : null }) : null, (0, import_jsx_runtime11.jsx)("figcaption", { className: "flex-1 truncate text-fd-muted-foreground", children: title }), allowCopy ? (0, import_jsx_runtime11.jsx)(CopyButton, { className: "-me-2", onCopy }) : null] }) : allowCopy && (0, import_jsx_runtime11.jsx)(CopyButton, { className: "absolute right-2 top-2 z-[2] backdrop-blur-md", onCopy }), (0, import_jsx_runtime11.jsxs)(ScrollArea2, { ref: areaRef, dir: "ltr", children: [(0, import_jsx_runtime11.jsx)(ScrollViewport, __spreadProps(__spreadValues({}, viewportProps), { className: twMerge("max-h-[600px]", viewportProps == null ? void 0 : viewportProps.className), children: props.children })), (0, import_jsx_runtime11.jsx)(ScrollBar, { orientation: "horizontal" })] })] }));
  });
  CodeBlock.displayName = "CodeBlock";
  function CopyButton(_a) {
    var _b = _a, { className, onCopy } = _b, props = __objRest(_b, ["className", "onCopy"]);
    const [checked, onClick] = useCopyButton(onCopy);
    return (0, import_jsx_runtime11.jsxs)("button", __spreadProps(__spreadValues({ type: "button", className: twMerge(buttonVariants({
      color: "ghost"
    }), "transition-opacity group-hover:opacity-100", !checked && "opacity-0", className), "aria-label": "Copy Text", onClick }, props), { children: [(0, import_jsx_runtime11.jsx)(Check, { className: twMerge("size-3.5 transition-transform", !checked && "scale-0") }), (0, import_jsx_runtime11.jsx)(Copy, { className: twMerge("absolute size-3.5 transition-transform", checked && "scale-0") })] }));
  }

  // node_modules/fumadocs-ui/dist/mdx.client.js
  function Pre2(props) {
    return (0, import_jsx_runtime12.jsx)(CodeBlock, __spreadProps(__spreadValues({}, props), { children: (0, import_jsx_runtime12.jsx)(Pre, { children: props.children }) }));
  }

  // node_modules/fumadocs-ui/dist/mdx.js
  function Image(props) {
    return (0, import_jsx_runtime13.jsx)(import_image.default, __spreadProps(__spreadValues({ sizes: "(max-width: 768px) 100vw, (max-width: 1200px) 70vw, 900px" }, props), { className: twMerge("rounded-lg", props.className) }));
  }
  function Table(props) {
    return (0, import_jsx_runtime13.jsx)("div", { className: "relative overflow-auto", children: (0, import_jsx_runtime13.jsx)("table", __spreadValues({}, props)) });
  }
  var defaultMdxComponents = {
    pre: Pre2,
    Card,
    Cards,
    a: Link,
    img: Image,
    h1: (props) => (0, import_jsx_runtime13.jsx)(Heading, __spreadValues({ as: "h1" }, props)),
    h2: (props) => (0, import_jsx_runtime13.jsx)(Heading, __spreadValues({ as: "h2" }, props)),
    h3: (props) => (0, import_jsx_runtime13.jsx)(Heading, __spreadValues({ as: "h3" }, props)),
    h4: (props) => (0, import_jsx_runtime13.jsx)(Heading, __spreadValues({ as: "h4" }, props)),
    h5: (props) => (0, import_jsx_runtime13.jsx)(Heading, __spreadValues({ as: "h5" }, props)),
    h6: (props) => (0, import_jsx_runtime13.jsx)(Heading, __spreadValues({ as: "h6" }, props)),
    table: Table,
    Callout
  };

  // node_modules/fumadocs-ui/dist/components/tabs.js
  var import_jsx_runtime18 = __toESM(require_jsx_runtime(), 1);
  var import_react8 = __toESM(require_react(), 1);

  // node_modules/fumadocs-ui/dist/components/ui/tabs.js
  var import_jsx_runtime17 = __toESM(require_jsx_runtime(), 1);

  // node_modules/@radix-ui/react-tabs/dist/index.mjs
  var React15 = __toESM(require_react(), 1);

  // node_modules/@radix-ui/react-roving-focus/dist/index.mjs
  var React14 = __toESM(require_react(), 1);

  // node_modules/@radix-ui/react-collection/dist/index.mjs
  var import_react7 = __toESM(require_react(), 1);
  var import_jsx_runtime14 = __toESM(require_jsx_runtime(), 1);
  function createCollection(name) {
    const PROVIDER_NAME = name + "CollectionProvider";
    const [createCollectionContext, createCollectionScope2] = createContextScope(PROVIDER_NAME);
    const [CollectionProviderImpl, useCollectionContext] = createCollectionContext(
      PROVIDER_NAME,
      { collectionRef: { current: null }, itemMap: /* @__PURE__ */ new Map() }
    );
    const CollectionProvider = (props) => {
      const { scope, children } = props;
      const ref = import_react7.default.useRef(null);
      const itemMap = import_react7.default.useRef(/* @__PURE__ */ new Map()).current;
      return /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(CollectionProviderImpl, { scope, itemMap, collectionRef: ref, children });
    };
    CollectionProvider.displayName = PROVIDER_NAME;
    const COLLECTION_SLOT_NAME = name + "CollectionSlot";
    const CollectionSlot = import_react7.default.forwardRef(
      (props, forwardedRef) => {
        const { scope, children } = props;
        const context = useCollectionContext(COLLECTION_SLOT_NAME, scope);
        const composedRefs = useComposedRefs(forwardedRef, context.collectionRef);
        return /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(Slot, { ref: composedRefs, children });
      }
    );
    CollectionSlot.displayName = COLLECTION_SLOT_NAME;
    const ITEM_SLOT_NAME = name + "CollectionItemSlot";
    const ITEM_DATA_ATTR = "data-radix-collection-item";
    const CollectionItemSlot = import_react7.default.forwardRef(
      (props, forwardedRef) => {
        const _a = props, { scope, children } = _a, itemData = __objRest(_a, ["scope", "children"]);
        const ref = import_react7.default.useRef(null);
        const composedRefs = useComposedRefs(forwardedRef, ref);
        const context = useCollectionContext(ITEM_SLOT_NAME, scope);
        import_react7.default.useEffect(() => {
          context.itemMap.set(ref, __spreadValues({ ref }, itemData));
          return () => void context.itemMap.delete(ref);
        });
        return /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(Slot, __spreadProps(__spreadValues({}, { [ITEM_DATA_ATTR]: "" }), { ref: composedRefs, children }));
      }
    );
    CollectionItemSlot.displayName = ITEM_SLOT_NAME;
    function useCollection2(scope) {
      const context = useCollectionContext(name + "CollectionConsumer", scope);
      const getItems = import_react7.default.useCallback(() => {
        const collectionNode = context.collectionRef.current;
        if (!collectionNode) return [];
        const orderedNodes = Array.from(collectionNode.querySelectorAll("[".concat(ITEM_DATA_ATTR, "]")));
        const items = Array.from(context.itemMap.values());
        const orderedItems = items.sort(
          (a, b) => orderedNodes.indexOf(a.ref.current) - orderedNodes.indexOf(b.ref.current)
        );
        return orderedItems;
      }, [context.collectionRef, context.itemMap]);
      return getItems;
    }
    return [
      { Provider: CollectionProvider, Slot: CollectionSlot, ItemSlot: CollectionItemSlot },
      useCollection2,
      createCollectionScope2
    ];
  }

  // node_modules/@radix-ui/react-id/dist/index.mjs
  var React12 = __toESM(require_react(), 1);
  var useReactId = React12["useId".toString()] || (() => void 0);
  var count = 0;
  function useId(deterministicId) {
    const [id, setId] = React12.useState(useReactId());
    useLayoutEffect2(() => {
      if (!deterministicId) setId((reactId) => reactId != null ? reactId : String(count++));
    }, [deterministicId]);
    return deterministicId || (id ? "radix-".concat(id) : "");
  }

  // node_modules/@radix-ui/react-use-controllable-state/dist/index.mjs
  var React13 = __toESM(require_react(), 1);
  function useControllableState({
    prop,
    defaultProp,
    onChange = () => {
    }
  }) {
    const [uncontrolledProp, setUncontrolledProp] = useUncontrolledState({ defaultProp, onChange });
    const isControlled = prop !== void 0;
    const value = isControlled ? prop : uncontrolledProp;
    const handleChange = useCallbackRef(onChange);
    const setValue = React13.useCallback(
      (nextValue) => {
        if (isControlled) {
          const setter = nextValue;
          const value2 = typeof nextValue === "function" ? setter(prop) : nextValue;
          if (value2 !== prop) handleChange(value2);
        } else {
          setUncontrolledProp(nextValue);
        }
      },
      [isControlled, prop, setUncontrolledProp, handleChange]
    );
    return [value, setValue];
  }
  function useUncontrolledState({
    defaultProp,
    onChange
  }) {
    const uncontrolledState = React13.useState(defaultProp);
    const [value] = uncontrolledState;
    const prevValueRef = React13.useRef(value);
    const handleChange = useCallbackRef(onChange);
    React13.useEffect(() => {
      if (prevValueRef.current !== value) {
        handleChange(value);
        prevValueRef.current = value;
      }
    }, [value, prevValueRef, handleChange]);
    return uncontrolledState;
  }

  // node_modules/@radix-ui/react-roving-focus/dist/index.mjs
  var import_jsx_runtime15 = __toESM(require_jsx_runtime(), 1);
  var ENTRY_FOCUS = "rovingFocusGroup.onEntryFocus";
  var EVENT_OPTIONS = { bubbles: false, cancelable: true };
  var GROUP_NAME = "RovingFocusGroup";
  var [Collection, useCollection, createCollectionScope] = createCollection(GROUP_NAME);
  var [createRovingFocusGroupContext, createRovingFocusGroupScope] = createContextScope(
    GROUP_NAME,
    [createCollectionScope]
  );
  var [RovingFocusProvider, useRovingFocusContext] = createRovingFocusGroupContext(GROUP_NAME);
  var RovingFocusGroup = React14.forwardRef(
    (props, forwardedRef) => {
      return /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(Collection.Provider, { scope: props.__scopeRovingFocusGroup, children: /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(Collection.Slot, { scope: props.__scopeRovingFocusGroup, children: /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(RovingFocusGroupImpl, __spreadProps(__spreadValues({}, props), { ref: forwardedRef })) }) });
    }
  );
  RovingFocusGroup.displayName = GROUP_NAME;
  var RovingFocusGroupImpl = React14.forwardRef((props, forwardedRef) => {
    const _a = props, {
      __scopeRovingFocusGroup,
      orientation,
      loop = false,
      dir,
      currentTabStopId: currentTabStopIdProp,
      defaultCurrentTabStopId,
      onCurrentTabStopIdChange,
      onEntryFocus,
      preventScrollOnEntryFocus = false
    } = _a, groupProps = __objRest(_a, [
      "__scopeRovingFocusGroup",
      "orientation",
      "loop",
      "dir",
      "currentTabStopId",
      "defaultCurrentTabStopId",
      "onCurrentTabStopIdChange",
      "onEntryFocus",
      "preventScrollOnEntryFocus"
    ]);
    const ref = React14.useRef(null);
    const composedRefs = useComposedRefs(forwardedRef, ref);
    const direction = useDirection(dir);
    const [currentTabStopId = null, setCurrentTabStopId] = useControllableState({
      prop: currentTabStopIdProp,
      defaultProp: defaultCurrentTabStopId,
      onChange: onCurrentTabStopIdChange
    });
    const [isTabbingBackOut, setIsTabbingBackOut] = React14.useState(false);
    const handleEntryFocus = useCallbackRef(onEntryFocus);
    const getItems = useCollection(__scopeRovingFocusGroup);
    const isClickFocusRef = React14.useRef(false);
    const [focusableItemsCount, setFocusableItemsCount] = React14.useState(0);
    React14.useEffect(() => {
      const node = ref.current;
      if (node) {
        node.addEventListener(ENTRY_FOCUS, handleEntryFocus);
        return () => node.removeEventListener(ENTRY_FOCUS, handleEntryFocus);
      }
    }, [handleEntryFocus]);
    return /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(
      RovingFocusProvider,
      {
        scope: __scopeRovingFocusGroup,
        orientation,
        dir: direction,
        loop,
        currentTabStopId,
        onItemFocus: React14.useCallback(
          (tabStopId) => setCurrentTabStopId(tabStopId),
          [setCurrentTabStopId]
        ),
        onItemShiftTab: React14.useCallback(() => setIsTabbingBackOut(true), []),
        onFocusableItemAdd: React14.useCallback(
          () => setFocusableItemsCount((prevCount) => prevCount + 1),
          []
        ),
        onFocusableItemRemove: React14.useCallback(
          () => setFocusableItemsCount((prevCount) => prevCount - 1),
          []
        ),
        children: /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(
          Primitive.div,
          __spreadProps(__spreadValues({
            tabIndex: isTabbingBackOut || focusableItemsCount === 0 ? -1 : 0,
            "data-orientation": orientation
          }, groupProps), {
            ref: composedRefs,
            style: __spreadValues({ outline: "none" }, props.style),
            onMouseDown: composeEventHandlers(props.onMouseDown, () => {
              isClickFocusRef.current = true;
            }),
            onFocus: composeEventHandlers(props.onFocus, (event) => {
              const isKeyboardFocus = !isClickFocusRef.current;
              if (event.target === event.currentTarget && isKeyboardFocus && !isTabbingBackOut) {
                const entryFocusEvent = new CustomEvent(ENTRY_FOCUS, EVENT_OPTIONS);
                event.currentTarget.dispatchEvent(entryFocusEvent);
                if (!entryFocusEvent.defaultPrevented) {
                  const items = getItems().filter((item) => item.focusable);
                  const activeItem = items.find((item) => item.active);
                  const currentItem = items.find((item) => item.id === currentTabStopId);
                  const candidateItems = [activeItem, currentItem, ...items].filter(
                    Boolean
                  );
                  const candidateNodes = candidateItems.map((item) => item.ref.current);
                  focusFirst(candidateNodes, preventScrollOnEntryFocus);
                }
              }
              isClickFocusRef.current = false;
            }),
            onBlur: composeEventHandlers(props.onBlur, () => setIsTabbingBackOut(false))
          })
        )
      }
    );
  });
  var ITEM_NAME = "RovingFocusGroupItem";
  var RovingFocusGroupItem = React14.forwardRef(
    (props, forwardedRef) => {
      const _a = props, {
        __scopeRovingFocusGroup,
        focusable = true,
        active = false,
        tabStopId
      } = _a, itemProps = __objRest(_a, [
        "__scopeRovingFocusGroup",
        "focusable",
        "active",
        "tabStopId"
      ]);
      const autoId = useId();
      const id = tabStopId || autoId;
      const context = useRovingFocusContext(ITEM_NAME, __scopeRovingFocusGroup);
      const isCurrentTabStop = context.currentTabStopId === id;
      const getItems = useCollection(__scopeRovingFocusGroup);
      const { onFocusableItemAdd, onFocusableItemRemove } = context;
      React14.useEffect(() => {
        if (focusable) {
          onFocusableItemAdd();
          return () => onFocusableItemRemove();
        }
      }, [focusable, onFocusableItemAdd, onFocusableItemRemove]);
      return /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(
        Collection.ItemSlot,
        {
          scope: __scopeRovingFocusGroup,
          id,
          focusable,
          active,
          children: /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(
            Primitive.span,
            __spreadProps(__spreadValues({
              tabIndex: isCurrentTabStop ? 0 : -1,
              "data-orientation": context.orientation
            }, itemProps), {
              ref: forwardedRef,
              onMouseDown: composeEventHandlers(props.onMouseDown, (event) => {
                if (!focusable) event.preventDefault();
                else context.onItemFocus(id);
              }),
              onFocus: composeEventHandlers(props.onFocus, () => context.onItemFocus(id)),
              onKeyDown: composeEventHandlers(props.onKeyDown, (event) => {
                if (event.key === "Tab" && event.shiftKey) {
                  context.onItemShiftTab();
                  return;
                }
                if (event.target !== event.currentTarget) return;
                const focusIntent = getFocusIntent(event, context.orientation, context.dir);
                if (focusIntent !== void 0) {
                  if (event.metaKey || event.ctrlKey || event.altKey || event.shiftKey) return;
                  event.preventDefault();
                  const items = getItems().filter((item) => item.focusable);
                  let candidateNodes = items.map((item) => item.ref.current);
                  if (focusIntent === "last") candidateNodes.reverse();
                  else if (focusIntent === "prev" || focusIntent === "next") {
                    if (focusIntent === "prev") candidateNodes.reverse();
                    const currentIndex = candidateNodes.indexOf(event.currentTarget);
                    candidateNodes = context.loop ? wrapArray(candidateNodes, currentIndex + 1) : candidateNodes.slice(currentIndex + 1);
                  }
                  setTimeout(() => focusFirst(candidateNodes));
                }
              })
            })
          )
        }
      );
    }
  );
  RovingFocusGroupItem.displayName = ITEM_NAME;
  var MAP_KEY_TO_FOCUS_INTENT = {
    ArrowLeft: "prev",
    ArrowUp: "prev",
    ArrowRight: "next",
    ArrowDown: "next",
    PageUp: "first",
    Home: "first",
    PageDown: "last",
    End: "last"
  };
  function getDirectionAwareKey(key, dir) {
    if (dir !== "rtl") return key;
    return key === "ArrowLeft" ? "ArrowRight" : key === "ArrowRight" ? "ArrowLeft" : key;
  }
  function getFocusIntent(event, orientation, dir) {
    const key = getDirectionAwareKey(event.key, dir);
    if (orientation === "vertical" && ["ArrowLeft", "ArrowRight"].includes(key)) return void 0;
    if (orientation === "horizontal" && ["ArrowUp", "ArrowDown"].includes(key)) return void 0;
    return MAP_KEY_TO_FOCUS_INTENT[key];
  }
  function focusFirst(candidates, preventScroll = false) {
    const PREVIOUSLY_FOCUSED_ELEMENT = document.activeElement;
    for (const candidate of candidates) {
      if (candidate === PREVIOUSLY_FOCUSED_ELEMENT) return;
      candidate.focus({ preventScroll });
      if (document.activeElement !== PREVIOUSLY_FOCUSED_ELEMENT) return;
    }
  }
  function wrapArray(array, startIndex) {
    return array.map((_, index) => array[(startIndex + index) % array.length]);
  }
  var Root2 = RovingFocusGroup;
  var Item = RovingFocusGroupItem;

  // node_modules/@radix-ui/react-tabs/dist/index.mjs
  var import_jsx_runtime16 = __toESM(require_jsx_runtime(), 1);
  var TABS_NAME = "Tabs";
  var [createTabsContext, createTabsScope] = createContextScope(TABS_NAME, [
    createRovingFocusGroupScope
  ]);
  var useRovingFocusGroupScope = createRovingFocusGroupScope();
  var [TabsProvider, useTabsContext] = createTabsContext(TABS_NAME);
  var Tabs = React15.forwardRef(
    (props, forwardedRef) => {
      const _a = props, {
        __scopeTabs,
        value: valueProp,
        onValueChange,
        defaultValue,
        orientation = "horizontal",
        dir,
        activationMode = "automatic"
      } = _a, tabsProps = __objRest(_a, [
        "__scopeTabs",
        "value",
        "onValueChange",
        "defaultValue",
        "orientation",
        "dir",
        "activationMode"
      ]);
      const direction = useDirection(dir);
      const [value, setValue] = useControllableState({
        prop: valueProp,
        onChange: onValueChange,
        defaultProp: defaultValue
      });
      return /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(
        TabsProvider,
        {
          scope: __scopeTabs,
          baseId: useId(),
          value,
          onValueChange: setValue,
          orientation,
          dir: direction,
          activationMode,
          children: /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(
            Primitive.div,
            __spreadProps(__spreadValues({
              dir: direction,
              "data-orientation": orientation
            }, tabsProps), {
              ref: forwardedRef
            })
          )
        }
      );
    }
  );
  Tabs.displayName = TABS_NAME;
  var TAB_LIST_NAME = "TabsList";
  var TabsList = React15.forwardRef(
    (props, forwardedRef) => {
      const _a = props, { __scopeTabs, loop = true } = _a, listProps = __objRest(_a, ["__scopeTabs", "loop"]);
      const context = useTabsContext(TAB_LIST_NAME, __scopeTabs);
      const rovingFocusGroupScope = useRovingFocusGroupScope(__scopeTabs);
      return /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(
        Root2,
        __spreadProps(__spreadValues({
          asChild: true
        }, rovingFocusGroupScope), {
          orientation: context.orientation,
          dir: context.dir,
          loop,
          children: /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(
            Primitive.div,
            __spreadProps(__spreadValues({
              role: "tablist",
              "aria-orientation": context.orientation
            }, listProps), {
              ref: forwardedRef
            })
          )
        })
      );
    }
  );
  TabsList.displayName = TAB_LIST_NAME;
  var TRIGGER_NAME = "TabsTrigger";
  var TabsTrigger = React15.forwardRef(
    (props, forwardedRef) => {
      const _a = props, { __scopeTabs, value, disabled = false } = _a, triggerProps = __objRest(_a, ["__scopeTabs", "value", "disabled"]);
      const context = useTabsContext(TRIGGER_NAME, __scopeTabs);
      const rovingFocusGroupScope = useRovingFocusGroupScope(__scopeTabs);
      const triggerId = makeTriggerId(context.baseId, value);
      const contentId = makeContentId(context.baseId, value);
      const isSelected = value === context.value;
      return /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(
        Item,
        __spreadProps(__spreadValues({
          asChild: true
        }, rovingFocusGroupScope), {
          focusable: !disabled,
          active: isSelected,
          children: /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(
            Primitive.button,
            __spreadProps(__spreadValues({
              type: "button",
              role: "tab",
              "aria-selected": isSelected,
              "aria-controls": contentId,
              "data-state": isSelected ? "active" : "inactive",
              "data-disabled": disabled ? "" : void 0,
              disabled,
              id: triggerId
            }, triggerProps), {
              ref: forwardedRef,
              onMouseDown: composeEventHandlers(props.onMouseDown, (event) => {
                if (!disabled && event.button === 0 && event.ctrlKey === false) {
                  context.onValueChange(value);
                } else {
                  event.preventDefault();
                }
              }),
              onKeyDown: composeEventHandlers(props.onKeyDown, (event) => {
                if ([" ", "Enter"].includes(event.key)) context.onValueChange(value);
              }),
              onFocus: composeEventHandlers(props.onFocus, () => {
                const isAutomaticActivation = context.activationMode !== "manual";
                if (!isSelected && !disabled && isAutomaticActivation) {
                  context.onValueChange(value);
                }
              })
            })
          )
        })
      );
    }
  );
  TabsTrigger.displayName = TRIGGER_NAME;
  var CONTENT_NAME = "TabsContent";
  var TabsContent = React15.forwardRef(
    (props, forwardedRef) => {
      const _a = props, { __scopeTabs, value, forceMount, children } = _a, contentProps = __objRest(_a, ["__scopeTabs", "value", "forceMount", "children"]);
      const context = useTabsContext(CONTENT_NAME, __scopeTabs);
      const triggerId = makeTriggerId(context.baseId, value);
      const contentId = makeContentId(context.baseId, value);
      const isSelected = value === context.value;
      const isMountAnimationPreventedRef = React15.useRef(isSelected);
      React15.useEffect(() => {
        const rAF = requestAnimationFrame(() => isMountAnimationPreventedRef.current = false);
        return () => cancelAnimationFrame(rAF);
      }, []);
      return /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(Presence, { present: forceMount || isSelected, children: ({ present }) => /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(
        Primitive.div,
        __spreadProps(__spreadValues({
          "data-state": isSelected ? "active" : "inactive",
          "data-orientation": context.orientation,
          role: "tabpanel",
          "aria-labelledby": triggerId,
          hidden: !present,
          id: contentId,
          tabIndex: 0
        }, contentProps), {
          ref: forwardedRef,
          style: __spreadProps(__spreadValues({}, props.style), {
            animationDuration: isMountAnimationPreventedRef.current ? "0s" : void 0
          }),
          children: present && children
        })
      ) });
    }
  );
  TabsContent.displayName = CONTENT_NAME;
  function makeTriggerId(baseId, value) {
    return "".concat(baseId, "-trigger-").concat(value);
  }
  function makeContentId(baseId, value) {
    return "".concat(baseId, "-content-").concat(value);
  }
  var Root22 = Tabs;
  var List = TabsList;
  var Trigger = TabsTrigger;
  var Content = TabsContent;

  // node_modules/fumadocs-ui/dist/components/ui/tabs.js
  var React16 = __toESM(require_react(), 1);
  var Tabs2 = React16.forwardRef((props, ref) => {
    return (0, import_jsx_runtime17.jsx)(Root22, __spreadProps(__spreadValues({ ref }, props), { className: twMerge("flex flex-col overflow-hidden rounded-xl border bg-fd-card", props.className) }));
  });
  Tabs2.displayName = "Tabs";
  var TabsList2 = React16.forwardRef((props, ref) => (0, import_jsx_runtime17.jsx)(List, __spreadProps(__spreadValues({ ref }, props), { className: twMerge("flex flex-row items-end gap-4 overflow-x-auto bg-fd-secondary px-4 text-fd-muted-foreground", props.className) })));
  TabsList2.displayName = "TabsList";
  var TabsTrigger2 = React16.forwardRef((props, ref) => (0, import_jsx_runtime17.jsx)(Trigger, __spreadProps(__spreadValues({ ref }, props), { className: twMerge("whitespace-nowrap border-b border-transparent py-2 text-sm font-medium transition-colors hover:text-fd-accent-foreground disabled:pointer-events-none disabled:opacity-50 data-[state=active]:border-fd-primary data-[state=active]:text-fd-primary", props.className) })));
  TabsTrigger2.displayName = "TabsTrigger";
  var TabsContent2 = React16.forwardRef((props, ref) => (0, import_jsx_runtime17.jsx)(Content, __spreadProps(__spreadValues({ ref }, props), { className: twMerge("p-4", props.className) })));
  TabsContent2.displayName = "TabsContent";

  // node_modules/fumadocs-ui/dist/components/tabs.js
  var listeners = /* @__PURE__ */ new Map();
  function addChangeListener(id, listener) {
    var _a;
    const list = (_a = listeners.get(id)) != null ? _a : [];
    list.push(listener);
    listeners.set(id, list);
  }
  function removeChangeListener(id, listener) {
    var _a;
    const list = (_a = listeners.get(id)) != null ? _a : [];
    listeners.set(id, list.filter((item) => item !== listener));
  }
  var TabsContext = (0, import_react8.createContext)(null);
  function Tabs3(_a) {
    var _b = _a, { groupId, items = [], persist = false, defaultIndex = 0, updateAnchor = false } = _b, props = __objRest(_b, ["groupId", "items", "persist", "defaultIndex", "updateAnchor"]);
    const values = (0, import_react8.useMemo)(() => items.map((item) => toValue2(item)), [items]);
    const [value, setValue] = (0, import_react8.useState)(values[defaultIndex]);
    const valueToIdMap = (0, import_react8.useMemo)(() => /* @__PURE__ */ new Map(), []);
    const collection = (0, import_react8.useMemo)(() => createCollection2(), [items]);
    const onChange = (v) => {
      if (values.includes(v))
        setValue(v);
    };
    const onChangeRef = (0, import_react8.useRef)(onChange);
    onChangeRef.current = onChange;
    (0, import_react8.useLayoutEffect)(() => {
      if (!groupId)
        return;
      const onUpdate = (v) => onChangeRef.current(v);
      const previous = persist ? localStorage.getItem(groupId) : sessionStorage.getItem(groupId);
      if (previous)
        onUpdate(previous);
      addChangeListener(groupId, onUpdate);
      return () => {
        removeChangeListener(groupId, onUpdate);
      };
    }, [groupId, persist]);
    (0, import_react8.useLayoutEffect)(() => {
      const hash = window.location.hash.slice(1);
      if (!hash)
        return;
      for (const [value2, id] of valueToIdMap.entries()) {
        if (id === hash) {
          setValue(value2);
          break;
        }
      }
    }, [valueToIdMap]);
    return (0, import_jsx_runtime18.jsxs)(Tabs2, __spreadProps(__spreadValues({ value, onValueChange: (v) => {
      var _a2;
      if (updateAnchor) {
        const id = valueToIdMap.get(v);
        if (id) {
          window.history.replaceState(null, "", "#".concat(id));
        }
      }
      if (groupId) {
        (_a2 = listeners.get(groupId)) == null ? void 0 : _a2.forEach((item) => {
          item(v);
        });
        if (persist)
          localStorage.setItem(groupId, v);
        else
          sessionStorage.setItem(groupId, v);
      } else {
        setValue(v);
      }
    } }, props), { className: twMerge("my-4", props.className), children: [(0, import_jsx_runtime18.jsx)(TabsList2, { children: values.map((v, i) => (0, import_jsx_runtime18.jsx)(TabsTrigger2, { value: v, children: items[i] }, v)) }), (0, import_jsx_runtime18.jsx)(TabsContext.Provider, { value: (0, import_react8.useMemo)(() => ({ items, valueToIdMap, collection }), [valueToIdMap, collection, items]), children: props.children })] }));
  }
  function toValue2(v) {
    return v.toLowerCase().replace(/\s/, "-");
  }
  function Tab(_a) {
    var _b = _a, { value, className } = _b, props = __objRest(_b, ["value", "className"]);
    const ctx = (0, import_react8.useContext)(TabsContext);
    const resolvedValue = value != null ? value : (
      // eslint-disable-next-line react-hooks/rules-of-hooks -- `value` is not supposed to change
      ctx == null ? void 0 : ctx.items.at(useCollectionIndex())
    );
    if (!resolvedValue)
      throw new Error("Failed to resolve tab `value`, please pass a `value` prop to the Tab component.");
    const v = toValue2(resolvedValue);
    if (props.id && ctx) {
      ctx.valueToIdMap.set(v, props.id);
    }
    return (0, import_jsx_runtime18.jsx)(TabsContent2, __spreadProps(__spreadValues({ value: v, className: twMerge("prose-no-margin [&>figure:only-child]:-m-4 [&>figure:only-child]:rounded-none [&>figure:only-child]:border-none", className) }, props), { children: props.children }));
  }
  function createCollection2() {
    return [];
  }
  function useCollectionIndex() {
    const key = (0, import_react8.useId)();
    const ctx = (0, import_react8.useContext)(TabsContext);
    if (!ctx)
      throw new Error("You must wrap your component in <Tabs>");
    const list = ctx.collection;
    function register() {
      if (!list.includes(key))
        list.push(key);
    }
    function unregister() {
      const idx = list.indexOf(key);
      if (idx !== -1)
        list.splice(idx, 1);
    }
    (0, import_react8.useMemo)(() => {
      unregister();
      register();
    }, [list]);
    (0, import_react8.useEffect)(() => {
      return unregister;
    }, []);
    return list.indexOf(key);
  }

  // app/docs/mdx-components.tsx
  var mdxComponents = __spreadProps(__spreadValues({}, defaultMdxComponents), {
    Tabs: Tabs3,
    Tab,
    Callout
  });

  // public/admin/DocsPreview.jsx
  var DocsPreview = ({ entry }) => {
    return /* @__PURE__ */ React17.createElement("div", null, /* @__PURE__ */ React17.createElement("h1", null, entry.getIn(["data", "title"])), /* @__PURE__ */ React17.createElement("h2", null, entry.getIn(["data", "description"])));
  };
  window.DocsPreview = DocsPreview;
  var DocsPreview_default = DocsPreview;
  return __toCommonJS(DocsPreview_exports);
})();
/*! Bundled license information:

react/cjs/react.development.js:
  (**
   * @license React
   * react.development.js
   *
   * Copyright (c) Meta Platforms, Inc. and affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

react/cjs/react-jsx-runtime.development.js:
  (**
   * @license React
   * react-jsx-runtime.development.js
   *
   * Copyright (c) Meta Platforms, Inc. and affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

react-dom/cjs/react-dom.development.js:
  (**
   * @license React
   * react-dom.development.js
   *
   * Copyright (c) Meta Platforms, Inc. and affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

lucide-react/dist/esm/shared/src/utils.js:
  (**
   * @license lucide-react v0.473.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-react/dist/esm/defaultAttributes.js:
  (**
   * @license lucide-react v0.473.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-react/dist/esm/Icon.js:
  (**
   * @license lucide-react v0.473.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-react/dist/esm/createLucideIcon.js:
  (**
   * @license lucide-react v0.473.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-react/dist/esm/icons/check.js:
  (**
   * @license lucide-react v0.473.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-react/dist/esm/icons/circle-x.js:
  (**
   * @license lucide-react v0.473.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-react/dist/esm/icons/copy.js:
  (**
   * @license lucide-react v0.473.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-react/dist/esm/icons/info.js:
  (**
   * @license lucide-react v0.473.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-react/dist/esm/icons/link.js:
  (**
   * @license lucide-react v0.473.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-react/dist/esm/icons/triangle-alert.js:
  (**
   * @license lucide-react v0.473.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-react/dist/esm/lucide-react.js:
  (**
   * @license lucide-react v0.473.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)
*/
