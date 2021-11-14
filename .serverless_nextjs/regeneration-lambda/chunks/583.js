exports.id = 583;
exports.ids = [583];
exports.modules = {
  /***/ 34575: /***/ (module) => {
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }

    module.exports = _classCallCheck;
    (module.exports["default"] = module.exports),
      (module.exports.__esModule = true);

    /***/
  },

  /***/ 2205: /***/ (module, __unused_webpack_exports, __webpack_require__) => {
    var setPrototypeOf = __webpack_require__(99489);

    function _inherits(subClass, superClass) {
      if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError(
          "Super expression must either be null or a function"
        );
      }

      subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
          value: subClass,
          writable: true,
          configurable: true,
        },
      });
      if (superClass) setPrototypeOf(subClass, superClass);
    }

    module.exports = _inherits;
    (module.exports["default"] = module.exports),
      (module.exports.__esModule = true);

    /***/
  },

  /***/ 6479: /***/ (module, __unused_webpack_exports, __webpack_require__) => {
    var objectWithoutPropertiesLoose = __webpack_require__(37316);

    function _objectWithoutProperties(source, excluded) {
      if (source == null) return {};
      var target = objectWithoutPropertiesLoose(source, excluded);
      var key, i;

      if (Object.getOwnPropertySymbols) {
        var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

        for (i = 0; i < sourceSymbolKeys.length; i++) {
          key = sourceSymbolKeys[i];
          if (excluded.indexOf(key) >= 0) continue;
          if (!Object.prototype.propertyIsEnumerable.call(source, key))
            continue;
          target[key] = source[key];
        }
      }

      return target;
    }

    module.exports = _objectWithoutProperties;
    (module.exports["default"] = module.exports),
      (module.exports.__esModule = true);

    /***/
  },

  /***/ 28655: /***/ (module) => {
    function _taggedTemplateLiteral(strings, raw) {
      if (!raw) {
        raw = strings.slice(0);
      }

      return Object.freeze(
        Object.defineProperties(strings, {
          raw: {
            value: Object.freeze(raw),
          },
        })
      );
    }

    module.exports = _taggedTemplateLiteral;
    (module.exports["default"] = module.exports),
      (module.exports.__esModule = true);

    /***/
  },

  /***/ 9493: /***/ (module, __unused_webpack_exports, __webpack_require__) => {
    "use strict";

    if (true) {
      module.exports = __webpack_require__(43647);
    } else {
    }

    /***/
  },

  /***/ 43647: /***/ (
    __unused_webpack_module,
    exports,
    __webpack_require__
  ) => {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0,
    });

    var sheet = __webpack_require__(90719),
      stylis = __webpack_require__(5482),
      weakMemoize = __webpack_require__(33019),
      memoize = __webpack_require__(40834);

    function _interopDefault(e) {
      return e && e.__esModule
        ? e
        : {
            default: e,
          };
    }

    var weakMemoize__default = _interopDefault(weakMemoize),
      memoize__default = _interopDefault(memoize),
      last = function (arr) {
        return arr.length ? arr[arr.length - 1] : null;
      },
      identifierWithPointTracking = function (begin, points, index) {
        for (
          var previous = 0, character = 0;
          (previous = character),
            (character = stylis.peek()),
            38 === previous && 12 === character && (points[index] = 1),
            !stylis.token(character);

        )
          stylis.next();
        return stylis.slice(begin, stylis.position);
      },
      toRules = function (parsed, points) {
        var index = -1,
          character = 44;
        do {
          switch (stylis.token(character)) {
            case 0:
              38 === character && 12 === stylis.peek() && (points[index] = 1),
                (parsed[index] += identifierWithPointTracking(
                  stylis.position - 1,
                  points,
                  index
                ));
              break;

            case 2:
              parsed[index] += stylis.delimit(character);
              break;

            case 4:
              if (44 === character) {
                (parsed[++index] = 58 === stylis.peek() ? "&\f" : ""),
                  (points[index] = parsed[index].length);
                break;
              }

            default:
              parsed[index] += stylis.from(character);
          }
        } while ((character = stylis.next()));
        return parsed;
      },
      getRules = function (value, points) {
        return stylis.dealloc(toRules(stylis.alloc(value), points));
      },
      fixedElements = new WeakMap(),
      compat = function (element) {
        if ("rule" === element.type && element.parent && element.length) {
          for (
            var value = element.value,
              parent = element.parent,
              isImplicitRule =
                element.column === parent.column &&
                element.line === parent.line;
            "rule" !== parent.type;

          )
            if (!(parent = parent.parent)) return;
          if (
            (1 !== element.props.length ||
              58 === value.charCodeAt(0) ||
              fixedElements.get(parent)) &&
            !isImplicitRule
          ) {
            fixedElements.set(element, !0);
            for (
              var points = [],
                rules = getRules(value, points),
                parentRules = parent.props,
                i = 0,
                k = 0;
              i < rules.length;
              i++
            )
              for (var j = 0; j < parentRules.length; j++, k++)
                element.props[k] = points[i]
                  ? rules[i].replace(/&\f/g, parentRules[j])
                  : parentRules[j] + " " + rules[i];
          }
        }
      },
      removeLabel = function (element) {
        if ("decl" === element.type) {
          var value = element.value;
          108 === value.charCodeAt(0) &&
            98 === value.charCodeAt(2) &&
            ((element.return = ""), (element.value = ""));
        }
      },
      ignoreFlag =
        "emotion-disable-server-rendering-unsafe-selector-warning-please-do-not-use-this-the-warning-exists-for-a-reason",
      isIgnoringComment = function (element) {
        return (
          !!element &&
          "comm" === element.type &&
          element.children.indexOf(ignoreFlag) > -1
        );
      },
      createUnsafeSelectorsAlarm = function (cache) {
        return function (element, index, children) {
          if ("rule" === element.type) {
            var unsafePseudoClasses = element.value.match(
              /(:first|:nth|:nth-last)-child/g
            );
            if (unsafePseudoClasses && !0 !== cache.compat) {
              var prevElement = index > 0 ? children[index - 1] : null;
              if (prevElement && isIgnoringComment(last(prevElement.children)))
                return;
              unsafePseudoClasses.forEach(function (unsafePseudoClass) {
                console.error(
                  'The pseudo class "' +
                    unsafePseudoClass +
                    '" is potentially unsafe when doing server-side rendering. Try changing it to "' +
                    unsafePseudoClass.split("-child")[0] +
                    '-of-type".'
                );
              });
            }
          }
        };
      },
      isImportRule = function (element) {
        return (
          105 === element.type.charCodeAt(1) &&
          64 === element.type.charCodeAt(0)
        );
      },
      isPrependedWithRegularRules = function (index, children) {
        for (var i = index - 1; i >= 0; i--)
          if (!isImportRule(children[i])) return !0;
        return !1;
      },
      nullifyElement = function (element) {
        (element.type = ""),
          (element.value = ""),
          (element.return = ""),
          (element.children = ""),
          (element.props = "");
      },
      incorrectImportAlarm = function (element, index, children) {
        isImportRule(element) &&
          (element.parent
            ? (console.error(
                "`@import` rules can't be nested inside other rules. Please move it to the top level and put it before regular rules. Keep in mind that they can only be used within global styles."
              ),
              nullifyElement(element))
            : isPrependedWithRegularRules(index, children) &&
              (console.error(
                "`@import` rules can't be after other rules. Please put your `@import` rules before your other rules."
              ),
              nullifyElement(element)));
      },
      isBrowser = "undefined" != typeof document,
      getServerStylisCache = isBrowser
        ? void 0
        : weakMemoize__default.default(function () {
            return memoize__default.default(function () {
              var cache = {};
              return function (name) {
                return cache[name];
              };
            });
          }),
      defaultStylisPlugins = [stylis.prefixer],
      createCache = function (options) {
        var key = options.key;
        if (isBrowser && "css" === key) {
          var ssrStyles = document.querySelectorAll(
            "style[data-emotion]:not([data-s])"
          );
          Array.prototype.forEach.call(ssrStyles, function (node) {
            -1 !== node.getAttribute("data-emotion").indexOf(" ") &&
              (document.head.appendChild(node),
              node.setAttribute("data-s", ""));
          });
        }
        var stylisPlugins = options.stylisPlugins || defaultStylisPlugins;
        var container,
          _insert,
          inserted = {},
          nodesToHydrate = [];
        isBrowser &&
          ((container = options.container || document.head),
          Array.prototype.forEach.call(
            document.querySelectorAll('style[data-emotion^="' + key + ' "]'),
            function (node) {
              for (
                var attrib = node.getAttribute("data-emotion").split(" "),
                  i = 1;
                i < attrib.length;
                i++
              )
                inserted[attrib[i]] = !0;
              nodesToHydrate.push(node);
            }
          ));
        var omnipresentPlugins = [compat, removeLabel];
        if (isBrowser) {
          var currentSheet,
            finalizingPlugins = [
              stylis.stringify,
              stylis.rulesheet(function (rule) {
                currentSheet.insert(rule);
              }),
            ],
            serializer = stylis.middleware(
              omnipresentPlugins.concat(stylisPlugins, finalizingPlugins)
            );
          _insert = function (selector, serialized, sheet, shouldCache) {
            var styles;
            (currentSheet = sheet),
              (styles = selector
                ? selector + "{" + serialized.styles + "}"
                : serialized.styles),
              stylis.serialize(stylis.compile(styles), serializer),
              shouldCache && (cache.inserted[serialized.name] = !0);
          };
        } else {
          var _finalizingPlugins = [stylis.stringify],
            _serializer = stylis.middleware(
              omnipresentPlugins.concat(stylisPlugins, _finalizingPlugins)
            ),
            serverStylisCache = getServerStylisCache(stylisPlugins)(key),
            getRules = function (selector, serialized) {
              var styles,
                name = serialized.name;
              return (
                void 0 === serverStylisCache[name] &&
                  (serverStylisCache[name] =
                    ((styles = selector
                      ? selector + "{" + serialized.styles + "}"
                      : serialized.styles),
                    stylis.serialize(stylis.compile(styles), _serializer))),
                serverStylisCache[name]
              );
            };
          _insert = function (selector, serialized, sheet, shouldCache) {
            var name = serialized.name,
              rules = getRules(selector, serialized);
            return void 0 === cache.compat
              ? (shouldCache && (cache.inserted[name] = !0), rules)
              : shouldCache
              ? void (cache.inserted[name] = rules)
              : rules;
          };
        }
        var cache = {
          key: key,
          sheet: new sheet.StyleSheet({
            key: key,
            container: container,
            nonce: options.nonce,
            speedy: options.speedy,
            prepend: options.prepend,
          }),
          nonce: options.nonce,
          inserted: inserted,
          registered: {},
          insert: _insert,
        };
        return cache.sheet.hydrate(nodesToHydrate), cache;
      };

    exports["default"] = createCache;

    /***/
  },

  /***/ 88509: /***/ (
    module,
    __unused_webpack_exports,
    __webpack_require__
  ) => {
    "use strict";

    if (true) {
      module.exports = __webpack_require__(17690);
    } else {
    }

    /***/
  },

  /***/ 17690: /***/ (__unused_webpack_module, exports) => {
    "use strict";

    function murmur2(str) {
      for (var k, h = 0, i = 0, len = str.length; len >= 4; ++i, len -= 4)
        (k =
          1540483477 *
            (65535 &
              (k =
                (255 & str.charCodeAt(i)) |
                ((255 & str.charCodeAt(++i)) << 8) |
                ((255 & str.charCodeAt(++i)) << 16) |
                ((255 & str.charCodeAt(++i)) << 24))) +
          ((59797 * (k >>> 16)) << 16)),
          (h =
            (1540483477 * (65535 & (k ^= k >>> 24)) +
              ((59797 * (k >>> 16)) << 16)) ^
            (1540483477 * (65535 & h) + ((59797 * (h >>> 16)) << 16)));
      switch (len) {
        case 3:
          h ^= (255 & str.charCodeAt(i + 2)) << 16;

        case 2:
          h ^= (255 & str.charCodeAt(i + 1)) << 8;

        case 1:
          h =
            1540483477 * (65535 & (h ^= 255 & str.charCodeAt(i))) +
            ((59797 * (h >>> 16)) << 16);
      }
      return (
        ((h =
          1540483477 * (65535 & (h ^= h >>> 13)) +
          ((59797 * (h >>> 16)) << 16)) ^
          (h >>> 15)) >>>
        0
      ).toString(36);
    }

    Object.defineProperty(exports, "__esModule", {
      value: !0,
    }),
      (exports["default"] = murmur2);

    /***/
  },

  /***/ 40834: /***/ (
    module,
    __unused_webpack_exports,
    __webpack_require__
  ) => {
    "use strict";

    if (true) {
      module.exports = __webpack_require__(74870);
    } else {
    }

    /***/
  },

  /***/ 74870: /***/ (__unused_webpack_module, exports) => {
    "use strict";

    function memoize(fn) {
      var cache = Object.create(null);
      return function (arg) {
        return void 0 === cache[arg] && (cache[arg] = fn(arg)), cache[arg];
      };
    }

    Object.defineProperty(exports, "__esModule", {
      value: !0,
    }),
      (exports["default"] = memoize);

    /***/
  },

  /***/ 60416: /***/ (
    __unused_webpack_module,
    exports,
    __webpack_require__
  ) => {
    "use strict";

    var React = __webpack_require__(67294),
      createCache = __webpack_require__(9493),
      _extends = __webpack_require__(67154),
      weakMemoize = __webpack_require__(33019),
      isolatedHoistNonReactStaticsDoNotUseThisInYourCode_dist_emotionReactIsolatedHoistNonReactStaticsDoNotUseThisInYourCode =
        __webpack_require__(53071),
      utils = __webpack_require__(53279),
      serialize = __webpack_require__(20493);

    function _interopDefault(e) {
      return e && e.__esModule
        ? e
        : {
            default: e,
          };
    }

    var createCache__default = _interopDefault(createCache),
      _extends__default = _interopDefault(_extends),
      weakMemoize__default = _interopDefault(weakMemoize),
      isBrowser = "undefined" != typeof document,
      hasOwnProperty = Object.prototype.hasOwnProperty,
      EmotionCacheContext = React.createContext(
        "undefined" != typeof HTMLElement
          ? createCache__default.default({
              key: "css",
            })
          : null
      );

    var CacheProvider = EmotionCacheContext.Provider,
      __unsafe_useEmotionCache = function () {
        return React.useContext(EmotionCacheContext);
      };

    (exports.withEmotionCache = function (func) {
      return React.forwardRef(function (props, ref) {
        var cache = React.useContext(EmotionCacheContext);
        return func(props, cache, ref);
      });
    }),
      isBrowser ||
        (exports.withEmotionCache = function (func) {
          return function (props) {
            var cache = React.useContext(EmotionCacheContext);
            return null === cache
              ? ((cache = createCache__default.default({
                  key: "css",
                })),
                React.createElement(
                  EmotionCacheContext.Provider,
                  {
                    value: cache,
                  },
                  func(props, cache)
                ))
              : func(props, cache);
          };
        });

    var ThemeContext = React.createContext({});

    var useTheme = function () {
        return React.useContext(ThemeContext);
      },
      getTheme = function (outerTheme, theme) {
        if ("function" == typeof theme) {
          var mergedTheme = theme(outerTheme);
          return mergedTheme;
        }
        return _extends__default.default({}, outerTheme, theme);
      },
      createCacheWithTheme = weakMemoize__default.default(function (
        outerTheme
      ) {
        return weakMemoize__default.default(function (theme) {
          return getTheme(outerTheme, theme);
        });
      }),
      ThemeProvider = function (props) {
        var theme = React.useContext(ThemeContext);
        return (
          props.theme !== theme &&
            (theme = createCacheWithTheme(theme)(props.theme)),
          React.createElement(
            ThemeContext.Provider,
            {
              value: theme,
            },
            props.children
          )
        );
      };

    function withTheme(Component) {
      var componentName =
          Component.displayName || Component.name || "Component",
        render = function (props, ref) {
          var theme = React.useContext(ThemeContext);
          return React.createElement(
            Component,
            _extends__default.default(
              {
                theme: theme,
                ref: ref,
              },
              props
            )
          );
        },
        WithTheme = React.forwardRef(render);
      return (
        (WithTheme.displayName = "WithTheme(" + componentName + ")"),
        isolatedHoistNonReactStaticsDoNotUseThisInYourCode_dist_emotionReactIsolatedHoistNonReactStaticsDoNotUseThisInYourCode.default(
          WithTheme,
          Component
        )
      );
    }

    var sanitizeIdentifier = function (identifier) {
        return identifier.replace(/\$/g, "-");
      },
      typePropName = "__EMOTION_TYPE_PLEASE_DO_NOT_USE__",
      labelPropName = "__EMOTION_LABEL_PLEASE_DO_NOT_USE__",
      createEmotionProps = function (type, props) {
        var newProps = {};
        for (var key in props)
          hasOwnProperty.call(props, key) && (newProps[key] = props[key]);
        return (newProps[typePropName] = type), newProps;
      },
      Emotion = exports.withEmotionCache(function (props, cache, ref) {
        var cssProp = props.css;
        "string" == typeof cssProp &&
          void 0 !== cache.registered[cssProp] &&
          (cssProp = cache.registered[cssProp]);
        var type = props[typePropName],
          registeredStyles = [cssProp],
          className = "";
        "string" == typeof props.className
          ? (className = utils.getRegisteredStyles(
              cache.registered,
              registeredStyles,
              props.className
            ))
          : null != props.className && (className = props.className + " ");
        var serialized = serialize.serializeStyles(
            registeredStyles,
            void 0,
            React.useContext(ThemeContext)
          ),
          rules = utils.insertStyles(
            cache,
            serialized,
            "string" == typeof type
          );
        className += cache.key + "-" + serialized.name;
        var newProps = {};
        for (var key in props)
          hasOwnProperty.call(props, key) &&
            "css" !== key &&
            key !== typePropName &&
            (newProps[key] = props[key]);
        (newProps.ref = ref), (newProps.className = className);
        var ele = React.createElement(type, newProps);
        if (!isBrowser && void 0 !== rules) {
          for (
            var _ref, serializedNames = serialized.name, next = serialized.next;
            void 0 !== next;

          )
            (serializedNames += " " + next.name), (next = next.next);
          return React.createElement(
            React.Fragment,
            null,
            React.createElement(
              "style",
              (((_ref = {})["data-emotion"] =
                cache.key + " " + serializedNames),
              (_ref.dangerouslySetInnerHTML = {
                __html: rules,
              }),
              (_ref.nonce = cache.sheet.nonce),
              _ref)
            ),
            ele
          );
        }
        return ele;
      });

    (exports.CacheProvider = CacheProvider),
      (exports.Emotion = Emotion),
      (exports.ThemeContext = ThemeContext),
      (exports.ThemeProvider = ThemeProvider),
      (exports.__unsafe_useEmotionCache = __unsafe_useEmotionCache),
      (exports.createEmotionProps = createEmotionProps),
      (exports.hasOwnProperty = hasOwnProperty),
      (exports.isBrowser = isBrowser),
      (exports.useTheme = useTheme),
      (exports.withTheme = withTheme);

    /***/
  },

  /***/ 14264: /***/ (
    module,
    __unused_webpack_exports,
    __webpack_require__
  ) => {
    "use strict";

    if (true) {
      module.exports = __webpack_require__(11334);
    } else {
    }

    /***/
  },

  /***/ 11334: /***/ (
    __unused_webpack_module,
    exports,
    __webpack_require__
  ) => {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0,
    });

    var React = __webpack_require__(67294);

    __webpack_require__(9493);

    var emotionElement = __webpack_require__(60416);

    __webpack_require__(67154),
      __webpack_require__(33019),
      __webpack_require__(8679),
      __webpack_require__(53071);

    var utils = __webpack_require__(53279),
      serialize = __webpack_require__(20493),
      sheet = __webpack_require__(90719),
      pkg = {
        name: "@emotion/react",
        version: "11.5.0",
        main: "dist/emotion-react.cjs.js",
        module: "dist/emotion-react.esm.js",
        browser: {
          "./dist/emotion-react.cjs.js": "./dist/emotion-react.browser.cjs.js",
          "./dist/emotion-react.esm.js": "./dist/emotion-react.browser.esm.js",
        },
        types: "types/index.d.ts",
        files: [
          "src",
          "dist",
          "jsx-runtime",
          "jsx-dev-runtime",
          "isolated-hoist-non-react-statics-do-not-use-this-in-your-code",
          "types/*.d.ts",
          "macro.js",
          "macro.d.ts",
          "macro.js.flow",
        ],
        sideEffects: !1,
        author: "mitchellhamilton <mitchell@mitchellhamilton.me>",
        license: "MIT",
        scripts: {
          "test:typescript": "dtslint types",
        },
        dependencies: {
          "@babel/runtime": "^7.13.10",
          "@emotion/cache": "^11.5.0",
          "@emotion/serialize": "^1.0.2",
          "@emotion/sheet": "^1.0.3",
          "@emotion/utils": "^1.0.0",
          "@emotion/weak-memoize": "^0.2.5",
          "hoist-non-react-statics": "^3.3.1",
        },
        peerDependencies: {
          "@babel/core": "^7.0.0",
          react: ">=16.8.0",
        },
        peerDependenciesMeta: {
          "@babel/core": {
            optional: !0,
          },
          "@types/react": {
            optional: !0,
          },
        },
        devDependencies: {
          "@babel/core": "^7.13.10",
          "@emotion/css": "11.5.0",
          "@emotion/css-prettifier": "1.0.0",
          "@emotion/server": "11.4.0",
          "@emotion/styled": "11.3.0",
          "@types/react": "^16.9.11",
          dtslint: "^0.3.0",
          "html-tag-names": "^1.1.2",
          react: "16.14.0",
          "svg-tag-names": "^1.1.1",
        },
        repository:
          "https://github.com/emotion-js/emotion/tree/main/packages/react",
        publishConfig: {
          access: "public",
        },
        "umd:main": "dist/emotion-react.umd.min.js",
        preconstruct: {
          entrypoints: [
            "./index.js",
            "./jsx-runtime.js",
            "./jsx-dev-runtime.js",
            "./isolated-hoist-non-react-statics-do-not-use-this-in-your-code.js",
          ],
          umdName: "emotionReact",
        },
      },
      jsx = function (type, props) {
        var args = arguments;
        if (null == props || !emotionElement.hasOwnProperty.call(props, "css"))
          return React.createElement.apply(void 0, args);
        var argsLength = args.length,
          createElementArgArray = new Array(argsLength);
        (createElementArgArray[0] = emotionElement.Emotion),
          (createElementArgArray[1] = emotionElement.createEmotionProps(
            type,
            props
          ));
        for (var i = 2; i < argsLength; i++) createElementArgArray[i] = args[i];
        return React.createElement.apply(null, createElementArgArray);
      },
      warnedAboutCssPropForGlobal =
        /* unused pure expression or super */ null && !1,
      Global = emotionElement.withEmotionCache(function (props, cache) {
        var styles = props.styles,
          serialized = serialize.serializeStyles(
            [styles],
            void 0,
            React.useContext(emotionElement.ThemeContext)
          );
        if (!emotionElement.isBrowser) {
          for (
            var _ref,
              serializedNames = serialized.name,
              serializedStyles = serialized.styles,
              next = serialized.next;
            void 0 !== next;

          )
            (serializedNames += " " + next.name),
              (serializedStyles += next.styles),
              (next = next.next);
          var shouldCache = !0 === cache.compat,
            rules = cache.insert(
              "",
              {
                name: serializedNames,
                styles: serializedStyles,
              },
              cache.sheet,
              shouldCache
            );
          return shouldCache
            ? null
            : React.createElement(
                "style",
                (((_ref = {})["data-emotion"] =
                  cache.key + "-global " + serializedNames),
                (_ref.dangerouslySetInnerHTML = {
                  __html: rules,
                }),
                (_ref.nonce = cache.sheet.nonce),
                _ref)
              );
        }
        var sheetRef = React.useRef();
        return (
          React.useLayoutEffect(
            function () {
              var key = cache.key + "-global",
                sheet$1 = new sheet.StyleSheet({
                  key: key,
                  nonce: cache.sheet.nonce,
                  container: cache.sheet.container,
                  speedy: cache.sheet.isSpeedy,
                }),
                rehydrating = !1,
                node = document.querySelector(
                  'style[data-emotion="' + key + " " + serialized.name + '"]'
                );
              return (
                cache.sheet.tags.length &&
                  (sheet$1.before = cache.sheet.tags[0]),
                null !== node &&
                  ((rehydrating = !0),
                  node.setAttribute("data-emotion", key),
                  sheet$1.hydrate([node])),
                (sheetRef.current = [sheet$1, rehydrating]),
                function () {
                  sheet$1.flush();
                }
              );
            },
            [cache]
          ),
          React.useLayoutEffect(
            function () {
              var sheetRefCurrent = sheetRef.current,
                sheet = sheetRefCurrent[0];
              if (sheetRefCurrent[1]) sheetRefCurrent[1] = !1;
              else {
                if (
                  (void 0 !== serialized.next &&
                    utils.insertStyles(cache, serialized.next, !0),
                  sheet.tags.length)
                ) {
                  var element =
                    sheet.tags[sheet.tags.length - 1].nextElementSibling;
                  (sheet.before = element), sheet.flush();
                }
                cache.insert("", serialized, sheet, !1);
              }
            },
            [cache, serialized.name]
          ),
          null
        );
      });

    function css() {
      for (
        var _len = arguments.length, args = new Array(_len), _key = 0;
        _key < _len;
        _key++
      )
        args[_key] = arguments[_key];
      return serialize.serializeStyles(args);
    }

    var keyframes = function () {
        var insertable = css.apply(void 0, arguments),
          name = "animation-" + insertable.name;
        return {
          name: name,
          styles: "@keyframes " + name + "{" + insertable.styles + "}",
          anim: 1,
          toString: function () {
            return "_EMO_" + this.name + "_" + this.styles + "_EMO_";
          },
        };
      },
      classnames = function classnames(args) {
        for (var len = args.length, i = 0, cls = ""; i < len; i++) {
          var arg = args[i];
          if (null != arg) {
            var toAdd = void 0;
            switch (typeof arg) {
              case "boolean":
                break;

              case "object":
                if (Array.isArray(arg)) toAdd = classnames(arg);
                else
                  for (var k in ((toAdd = ""), arg))
                    arg[k] && k && (toAdd && (toAdd += " "), (toAdd += k));
                break;

              default:
                toAdd = arg;
            }
            toAdd && (cls && (cls += " "), (cls += toAdd));
          }
        }
        return cls;
      };

    function merge(registered, css, className) {
      var registeredStyles = [],
        rawClassName = utils.getRegisteredStyles(
          registered,
          registeredStyles,
          className
        );
      return registeredStyles.length < 2
        ? className
        : rawClassName + css(registeredStyles);
    }

    var isBrowser,
      isJest,
      globalContext,
      globalKey,
      ClassNames = emotionElement.withEmotionCache(function (props, cache) {
        var _ref,
          rules = "",
          serializedHashes = "",
          css = function () {
            for (
              var _len = arguments.length, args = new Array(_len), _key = 0;
              _key < _len;
              _key++
            )
              args[_key] = arguments[_key];
            var serialized = serialize.serializeStyles(args, cache.registered);
            if (emotionElement.isBrowser)
              utils.insertStyles(cache, serialized, !1);
            else {
              var res = utils.insertStyles(cache, serialized, !1);
              void 0 !== res && (rules += res);
            }
            return (
              emotionElement.isBrowser ||
                (serializedHashes += " " + serialized.name),
              cache.key + "-" + serialized.name
            );
          },
          content = {
            css: css,
            cx: function () {
              for (
                var _len2 = arguments.length,
                  args = new Array(_len2),
                  _key2 = 0;
                _key2 < _len2;
                _key2++
              )
                args[_key2] = arguments[_key2];
              return merge(cache.registered, css, classnames(args));
            },
            theme: React.useContext(emotionElement.ThemeContext),
          },
          ele = props.children(content);
        return (
          !0,
          emotionElement.isBrowser || 0 === rules.length
            ? ele
            : React.createElement(
                React.Fragment,
                null,
                React.createElement(
                  "style",
                  (((_ref = {})["data-emotion"] =
                    cache.key + " " + serializedHashes.substring(1)),
                  (_ref.dangerouslySetInnerHTML = {
                    __html: rules,
                  }),
                  (_ref.nonce = cache.sheet.nonce),
                  _ref)
                ),
                ele
              )
        );
      });

    (exports.CacheProvider = emotionElement.CacheProvider),
      (exports.ThemeContext = emotionElement.ThemeContext),
      (exports.ThemeProvider = emotionElement.ThemeProvider),
      (exports.__unsafe_useEmotionCache =
        emotionElement.__unsafe_useEmotionCache),
      (exports.useTheme = emotionElement.useTheme),
      Object.defineProperty(exports, "withEmotionCache", {
        enumerable: !0,
        get: function () {
          return emotionElement.withEmotionCache;
        },
      }),
      (exports.withTheme = emotionElement.withTheme),
      (exports.ClassNames = ClassNames),
      (exports.Global = Global),
      (exports.createElement = jsx),
      (exports.css = css),
      (exports.jsx = jsx),
      (exports.keyframes = keyframes);

    /***/
  },

  /***/ 53071: /***/ (
    __unused_webpack_module,
    exports,
    __webpack_require__
  ) => {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0,
    });

    var hoistNonReactStatics$1 = __webpack_require__(8679);

    function _interopDefault(e) {
      return e && e.__esModule
        ? e
        : {
            default: e,
          };
    }

    var hoistNonReactStatics__default = _interopDefault(hoistNonReactStatics$1),
      hoistNonReactStatics = function (targetComponent, sourceComponent) {
        return hoistNonReactStatics__default.default(
          targetComponent,
          sourceComponent
        );
      };

    exports["default"] = hoistNonReactStatics;

    /***/
  },

  /***/ 20493: /***/ (
    module,
    __unused_webpack_exports,
    __webpack_require__
  ) => {
    "use strict";

    if (true) {
      module.exports = __webpack_require__(63536);
    } else {
    }

    /***/
  },

  /***/ 63536: /***/ (
    __unused_webpack_module,
    exports,
    __webpack_require__
  ) => {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0,
    });

    var hashString = __webpack_require__(88509),
      unitless = __webpack_require__(96753),
      memoize = __webpack_require__(40834);

    function _interopDefault(e) {
      return e && e.__esModule
        ? e
        : {
            default: e,
          };
    }

    var contentValuePattern,
      contentValues,
      oldProcessStyleValue,
      msPattern,
      hyphenPattern,
      hyphenatedCache,
      hashString__default = _interopDefault(hashString),
      unitless__default = _interopDefault(unitless),
      memoize__default = _interopDefault(memoize),
      ILLEGAL_ESCAPE_SEQUENCE_ERROR =
        "You have illegal escape sequence in your template literal, most likely inside content's property value.\nBecause you write your CSS inside a JavaScript string you actually have to do double escaping, so for example \"content: '\\00d7';\" should become \"content: '\\\\00d7';\".\nYou can read more about this here:\nhttps://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals#ES2018_revision_of_illegal_escape_sequences",
      UNDEFINED_AS_OBJECT_KEY_ERROR =
        "You have passed in falsy value as style object's key (can happen when in example you pass unexported component as computed key).",
      hyphenateRegex = /[A-Z]|^ms/g,
      animationRegex = /_EMO_([^_]+?)_([^]*?)_EMO_/g,
      isCustomProperty = function (property) {
        return 45 === property.charCodeAt(1);
      },
      isProcessableValue = function (value) {
        return null != value && "boolean" != typeof value;
      },
      processStyleName = memoize__default.default(function (styleName) {
        return isCustomProperty(styleName)
          ? styleName
          : styleName.replace(hyphenateRegex, "-$&").toLowerCase();
      }),
      processStyleValue = function (key, value) {
        switch (key) {
          case "animation":
          case "animationName":
            if ("string" == typeof value)
              return value.replace(animationRegex, function (match, p1, p2) {
                return (
                  (cursor = {
                    name: p1,
                    styles: p2,
                    next: cursor,
                  }),
                  p1
                );
              });
        }
        return 1 === unitless__default.default[key] ||
          isCustomProperty(key) ||
          "number" != typeof value ||
          0 === value
          ? value
          : value + "px";
      };

    function handleInterpolation(mergedProps, registered, interpolation) {
      if (null == interpolation) return "";
      if (void 0 !== interpolation.__emotion_styles) return interpolation;
      switch (typeof interpolation) {
        case "boolean":
          return "";

        case "object":
          if (1 === interpolation.anim)
            return (
              (cursor = {
                name: interpolation.name,
                styles: interpolation.styles,
                next: cursor,
              }),
              interpolation.name
            );
          if (void 0 !== interpolation.styles) {
            var next = interpolation.next;
            if (void 0 !== next)
              for (; void 0 !== next; )
                (cursor = {
                  name: next.name,
                  styles: next.styles,
                  next: cursor,
                }),
                  (next = next.next);
            var styles = interpolation.styles + ";";
            return styles;
          }
          return createStringFromObject(mergedProps, registered, interpolation);

        case "function":
          if (void 0 !== mergedProps) {
            var previousCursor = cursor,
              result = interpolation(mergedProps);
            return (
              (cursor = previousCursor),
              handleInterpolation(mergedProps, registered, result)
            );
          }
          break;

        case "string":
      }
      if (null == registered) return interpolation;
      var cached = registered[interpolation];
      return void 0 !== cached ? cached : interpolation;
    }

    function createStringFromObject(mergedProps, registered, obj) {
      var string = "";
      if (Array.isArray(obj))
        for (var i = 0; i < obj.length; i++)
          string += handleInterpolation(mergedProps, registered, obj[i]) + ";";
      else
        for (var _key in obj) {
          var value = obj[_key];
          if ("object" != typeof value)
            null != registered && void 0 !== registered[value]
              ? (string += _key + "{" + registered[value] + "}")
              : isProcessableValue(value) &&
                (string +=
                  processStyleName(_key) +
                  ":" +
                  processStyleValue(_key, value) +
                  ";");
          else if (
            !Array.isArray(value) ||
            "string" != typeof value[0] ||
            (null != registered && void 0 !== registered[value[0]])
          ) {
            var interpolated = handleInterpolation(
              mergedProps,
              registered,
              value
            );
            switch (_key) {
              case "animation":
              case "animationName":
                string += processStyleName(_key) + ":" + interpolated + ";";
                break;

              default:
                string += _key + "{" + interpolated + "}";
            }
          } else
            for (var _i = 0; _i < value.length; _i++)
              isProcessableValue(value[_i]) &&
                (string +=
                  processStyleName(_key) +
                  ":" +
                  processStyleValue(_key, value[_i]) +
                  ";");
        }
      return string;
    }

    var sourceMapPattern,
      cursor,
      labelPattern = /label:\s*([^\s;\n{]+)\s*(;|$)/g;

    var serializeStyles = function (args, registered, mergedProps) {
      if (
        1 === args.length &&
        "object" == typeof args[0] &&
        null !== args[0] &&
        void 0 !== args[0].styles
      )
        return args[0];
      var stringMode = !0,
        styles = "";
      cursor = void 0;
      var strings = args[0];
      null == strings || void 0 === strings.raw
        ? ((stringMode = !1),
          (styles += handleInterpolation(mergedProps, registered, strings)))
        : (styles += strings[0]);
      for (var i = 1; i < args.length; i++)
        (styles += handleInterpolation(mergedProps, registered, args[i])),
          stringMode && (styles += strings[i]);
      labelPattern.lastIndex = 0;
      for (
        var match, identifierName = "";
        null !== (match = labelPattern.exec(styles));

      )
        identifierName += "-" + match[1];
      var name = hashString__default.default(styles) + identifierName;
      return {
        name: name,
        styles: styles,
        next: cursor,
      };
    };

    exports.serializeStyles = serializeStyles;

    /***/
  },

  /***/ 90719: /***/ (
    module,
    __unused_webpack_exports,
    __webpack_require__
  ) => {
    "use strict";

    if (true) {
      module.exports = __webpack_require__(56721);
    } else {
    }

    /***/
  },

  /***/ 56721: /***/ (__unused_webpack_module, exports) => {
    "use strict";

    function sheetForTag(tag) {
      if (tag.sheet) return tag.sheet;
      for (var i = 0; i < document.styleSheets.length; i++)
        if (document.styleSheets[i].ownerNode === tag)
          return document.styleSheets[i];
    }

    function createStyleElement(options) {
      var tag = document.createElement("style");
      return (
        tag.setAttribute("data-emotion", options.key),
        void 0 !== options.nonce && tag.setAttribute("nonce", options.nonce),
        tag.appendChild(document.createTextNode("")),
        tag.setAttribute("data-s", ""),
        tag
      );
    }

    Object.defineProperty(exports, "__esModule", {
      value: !0,
    });

    var StyleSheet = (function () {
      function StyleSheet(options) {
        var _this = this;
        (this._insertTag = function (tag) {
          var before;
          (before =
            0 === _this.tags.length
              ? _this.prepend
                ? _this.container.firstChild
                : _this.before
              : _this.tags[_this.tags.length - 1].nextSibling),
            _this.container.insertBefore(tag, before),
            _this.tags.push(tag);
        }),
          (this.isSpeedy = void 0 === options.speedy || options.speedy),
          (this.tags = []),
          (this.ctr = 0),
          (this.nonce = options.nonce),
          (this.key = options.key),
          (this.container = options.container),
          (this.prepend = options.prepend),
          (this.before = null);
      }
      var _proto = StyleSheet.prototype;
      return (
        (_proto.hydrate = function (nodes) {
          nodes.forEach(this._insertTag);
        }),
        (_proto.insert = function (rule) {
          this.ctr % (this.isSpeedy ? 65e3 : 1) == 0 &&
            this._insertTag(createStyleElement(this));
          var tag = this.tags[this.tags.length - 1];
          if (this.isSpeedy) {
            var sheet = sheetForTag(tag);
            try {
              sheet.insertRule(rule, sheet.cssRules.length);
            } catch (e) {
              0;
            }
          } else tag.appendChild(document.createTextNode(rule));
          this.ctr++;
        }),
        (_proto.flush = function () {
          this.tags.forEach(function (tag) {
            return tag.parentNode && tag.parentNode.removeChild(tag);
          }),
            (this.tags = []),
            (this.ctr = 0);
        }),
        StyleSheet
      );
    })();

    exports.StyleSheet = StyleSheet;

    /***/
  },

  /***/ 96753: /***/ (
    module,
    __unused_webpack_exports,
    __webpack_require__
  ) => {
    "use strict";

    if (true) {
      module.exports = __webpack_require__(65023);
    } else {
    }

    /***/
  },

  /***/ 65023: /***/ (__unused_webpack_module, exports) => {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0,
    });

    var unitlessKeys = {
      animationIterationCount: 1,
      borderImageOutset: 1,
      borderImageSlice: 1,
      borderImageWidth: 1,
      boxFlex: 1,
      boxFlexGroup: 1,
      boxOrdinalGroup: 1,
      columnCount: 1,
      columns: 1,
      flex: 1,
      flexGrow: 1,
      flexPositive: 1,
      flexShrink: 1,
      flexNegative: 1,
      flexOrder: 1,
      gridRow: 1,
      gridRowEnd: 1,
      gridRowSpan: 1,
      gridRowStart: 1,
      gridColumn: 1,
      gridColumnEnd: 1,
      gridColumnSpan: 1,
      gridColumnStart: 1,
      msGridRow: 1,
      msGridRowSpan: 1,
      msGridColumn: 1,
      msGridColumnSpan: 1,
      fontWeight: 1,
      lineHeight: 1,
      opacity: 1,
      order: 1,
      orphans: 1,
      tabSize: 1,
      widows: 1,
      zIndex: 1,
      zoom: 1,
      WebkitLineClamp: 1,
      fillOpacity: 1,
      floodOpacity: 1,
      stopOpacity: 1,
      strokeDasharray: 1,
      strokeDashoffset: 1,
      strokeMiterlimit: 1,
      strokeOpacity: 1,
      strokeWidth: 1,
    };

    exports["default"] = unitlessKeys;

    /***/
  },

  /***/ 53279: /***/ (
    module,
    __unused_webpack_exports,
    __webpack_require__
  ) => {
    "use strict";

    if (true) {
      module.exports = __webpack_require__(52362);
    } else {
    }

    /***/
  },

  /***/ 52362: /***/ (__unused_webpack_module, exports) => {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0,
    });

    var isBrowser = "undefined" != typeof document;

    function getRegisteredStyles(registered, registeredStyles, classNames) {
      var rawClassName = "";
      return (
        classNames.split(" ").forEach(function (className) {
          void 0 !== registered[className]
            ? registeredStyles.push(registered[className] + ";")
            : (rawClassName += className + " ");
        }),
        rawClassName
      );
    }

    var insertStyles = function (cache, serialized, isStringTag) {
      var className = cache.key + "-" + serialized.name;
      if (
        ((!1 === isStringTag ||
          (!1 === isBrowser && void 0 !== cache.compat)) &&
          void 0 === cache.registered[className] &&
          (cache.registered[className] = serialized.styles),
        void 0 === cache.inserted[serialized.name])
      ) {
        var stylesForSSR = "",
          current = serialized;
        do {
          var maybeStyles = cache.insert(
            serialized === current ? "." + className : "",
            current,
            cache.sheet,
            !0
          );
          isBrowser || void 0 === maybeStyles || (stylesForSSR += maybeStyles),
            (current = current.next);
        } while (void 0 !== current);
        if (!isBrowser && 0 !== stylesForSSR.length) return stylesForSSR;
      }
    };

    (exports.getRegisteredStyles = getRegisteredStyles),
      (exports.insertStyles = insertStyles);

    /***/
  },

  /***/ 33019: /***/ (
    module,
    __unused_webpack_exports,
    __webpack_require__
  ) => {
    "use strict";

    if (true) {
      module.exports = __webpack_require__(70535);
    } else {
    }

    /***/
  },

  /***/ 70535: /***/ (__unused_webpack_module, exports) => {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0,
    });

    var weakMemoize = function (func) {
      var cache = new WeakMap();
      return function (arg) {
        if (cache.has(arg)) return cache.get(arg);
        var ret = func(arg);
        return cache.set(arg, ret), ret;
      };
    };

    exports["default"] = weakMemoize;

    /***/
  },

  /***/ 39275: /***/ (module) => {
    "use strict";

    var safeIsNaN =
      Number.isNaN ||
      function ponyfill(value) {
        return typeof value === "number" && value !== value;
      };
    function isEqual(first, second) {
      if (first === second) {
        return true;
      }
      if (safeIsNaN(first) && safeIsNaN(second)) {
        return true;
      }
      return false;
    }
    function areInputsEqual(newInputs, lastInputs) {
      if (newInputs.length !== lastInputs.length) {
        return false;
      }
      for (var i = 0; i < newInputs.length; i++) {
        if (!isEqual(newInputs[i], lastInputs[i])) {
          return false;
        }
      }
      return true;
    }

    function memoizeOne(resultFn, isEqual) {
      if (isEqual === void 0) {
        isEqual = areInputsEqual;
      }
      var lastThis;
      var lastArgs = [];
      var lastResult;
      var calledOnce = false;
      function memoized() {
        var newArgs = [];
        for (var _i = 0; _i < arguments.length; _i++) {
          newArgs[_i] = arguments[_i];
        }
        if (calledOnce && lastThis === this && isEqual(newArgs, lastArgs)) {
          return lastResult;
        }
        lastResult = resultFn.apply(this, newArgs);
        calledOnce = true;
        lastThis = this;
        lastArgs = newArgs;
        return lastResult;
      }
      return memoized;
    }

    module.exports = memoizeOne;

    /***/
  },

  /***/ 51693: /***/ (
    __unused_webpack_module,
    exports,
    __webpack_require__
  ) => {
    "use strict";

    var _extends = __webpack_require__(67154),
      index = __webpack_require__(81983),
      _classCallCheck = __webpack_require__(34575),
      _createClass = __webpack_require__(93913),
      _inherits = __webpack_require__(2205),
      _toConsumableArray = __webpack_require__(319),
      React = __webpack_require__(67294),
      react = __webpack_require__(14264),
      memoizeOne = __webpack_require__(39275),
      _objectWithoutProperties = __webpack_require__(6479);

    function _interopDefault(e) {
      return e && e.__esModule
        ? e
        : {
            default: e,
          };
    }

    var _extends__default = _interopDefault(_extends),
      _classCallCheck__default = _interopDefault(_classCallCheck),
      _createClass__default = _interopDefault(_createClass),
      _inherits__default = _interopDefault(_inherits),
      _toConsumableArray__default = _interopDefault(_toConsumableArray),
      React__default = _interopDefault(React),
      memoizeOne__default = _interopDefault(memoizeOne),
      _objectWithoutProperties__default = _interopDefault(
        _objectWithoutProperties
      );

    function _EMOTION_STRINGIFIED_CSS_ERROR__$1() {
      return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop).";
    }

    for (
      var _ref = {
          name: "7pg0cj-a11yText",
          styles:
            "label:a11yText;z-index:9999;border:0;clip:rect(1px, 1px, 1px, 1px);height:1px;width:1px;position:absolute;overflow:hidden;padding:0;white-space:nowrap",
        },
        A11yText = function (props) {
          return react.jsx(
            "span",
            _extends__default.default(
              {
                css: _ref,
              },
              props
            )
          );
        },
        defaultAriaLiveMessages = {
          guidance: function (props) {
            var isSearchable = props.isSearchable,
              isMulti = props.isMulti,
              isDisabled = props.isDisabled,
              tabSelectsValue = props.tabSelectsValue;
            switch (props.context) {
              case "menu":
                return "Use Up and Down to choose options"
                  .concat(
                    isDisabled
                      ? ""
                      : ", press Enter to select the currently focused option",
                    ", press Escape to exit the menu"
                  )
                  .concat(
                    tabSelectsValue
                      ? ", press Tab to select the option and exit the menu"
                      : "",
                    "."
                  );

              case "input":
                return ""
                  .concat(props["aria-label"] || "Select", " is focused ")
                  .concat(
                    isSearchable ? ",type to refine list" : "",
                    ", press Down to open the menu, "
                  )
                  .concat(
                    isMulti ? " press left to focus selected values" : ""
                  );

              case "value":
                return "Use left and right to toggle between focused values, press Backspace to remove the currently focused value";

              default:
                return "";
            }
          },
          onChange: function (props) {
            var action = props.action,
              _props$label = props.label,
              label = void 0 === _props$label ? "" : _props$label,
              labels = props.labels,
              isDisabled = props.isDisabled;
            switch (action) {
              case "deselect-option":
              case "pop-value":
              case "remove-value":
                return "option ".concat(label, ", deselected.");

              case "clear":
                return "All selected options have been cleared.";

              case "initial-input-focus":
                return "option"
                  .concat(labels.length > 1 ? "s" : "", " ")
                  .concat(labels.join(","), ", selected.");

              case "select-option":
                return "option ".concat(
                  label,
                  isDisabled
                    ? " is disabled. Select another option."
                    : ", selected."
                );

              default:
                return "";
            }
          },
          onFocus: function (props) {
            var context = props.context,
              focused = props.focused,
              options = props.options,
              _props$label2 = props.label,
              label = void 0 === _props$label2 ? "" : _props$label2,
              selectValue = props.selectValue,
              isDisabled = props.isDisabled,
              isSelected = props.isSelected,
              getArrayIndex = function (arr, item) {
                return arr && arr.length
                  ? "".concat(arr.indexOf(item) + 1, " of ").concat(arr.length)
                  : "";
              };
            if ("value" === context && selectValue)
              return "value "
                .concat(label, " focused, ")
                .concat(getArrayIndex(selectValue, focused), ".");
            if ("menu" === context) {
              var disabled = isDisabled ? " disabled" : "",
                status = ""
                  .concat(isSelected ? "selected" : "focused")
                  .concat(disabled);
              return "option "
                .concat(label, " ")
                .concat(status, ", ")
                .concat(getArrayIndex(options, focused), ".");
            }
            return "";
          },
          onFilter: function (props) {
            var inputValue = props.inputValue,
              resultsMessage = props.resultsMessage;
            return ""
              .concat(resultsMessage)
              .concat(inputValue ? " for search term " + inputValue : "", ".");
          },
        },
        LiveRegion = function (props) {
          var ariaSelection = props.ariaSelection,
            focusedOption = props.focusedOption,
            focusedValue = props.focusedValue,
            focusableOptions = props.focusableOptions,
            isFocused = props.isFocused,
            selectValue = props.selectValue,
            selectProps = props.selectProps,
            id = props.id,
            ariaLiveMessages = selectProps.ariaLiveMessages,
            getOptionLabel = selectProps.getOptionLabel,
            inputValue = selectProps.inputValue,
            isMulti = selectProps.isMulti,
            isOptionDisabled = selectProps.isOptionDisabled,
            isSearchable = selectProps.isSearchable,
            menuIsOpen = selectProps.menuIsOpen,
            options = selectProps.options,
            screenReaderStatus = selectProps.screenReaderStatus,
            tabSelectsValue = selectProps.tabSelectsValue,
            ariaLabel = selectProps["aria-label"],
            ariaLive = selectProps["aria-live"],
            messages = React.useMemo(
              function () {
                return index._objectSpread2(
                  index._objectSpread2({}, defaultAriaLiveMessages),
                  ariaLiveMessages || {}
                );
              },
              [ariaLiveMessages]
            ),
            ariaSelected = React.useMemo(
              function () {
                var val,
                  message = "";
                if (ariaSelection && messages.onChange) {
                  var option = ariaSelection.option,
                    selectedOptions = ariaSelection.options,
                    removedValue = ariaSelection.removedValue,
                    removedValues = ariaSelection.removedValues,
                    value = ariaSelection.value,
                    selected =
                      removedValue ||
                      option ||
                      ((val = value), Array.isArray(val) ? null : val),
                    label = selected ? getOptionLabel(selected) : "",
                    multiSelected = selectedOptions || removedValues || void 0,
                    labels = multiSelected
                      ? multiSelected.map(getOptionLabel)
                      : [],
                    onChangeProps = index._objectSpread2(
                      {
                        isDisabled:
                          selected && isOptionDisabled(selected, selectValue),
                        label: label,
                        labels: labels,
                      },
                      ariaSelection
                    );
                  message = messages.onChange(onChangeProps);
                }
                return message;
              },
              [
                ariaSelection,
                messages,
                isOptionDisabled,
                selectValue,
                getOptionLabel,
              ]
            ),
            ariaFocused = React.useMemo(
              function () {
                var focusMsg = "",
                  focused = focusedOption || focusedValue,
                  isSelected = !!(
                    focusedOption &&
                    selectValue &&
                    selectValue.includes(focusedOption)
                  );
                if (focused && messages.onFocus) {
                  var onFocusProps = {
                    focused: focused,
                    label: getOptionLabel(focused),
                    isDisabled: isOptionDisabled(focused, selectValue),
                    isSelected: isSelected,
                    options: options,
                    context: focused === focusedOption ? "menu" : "value",
                    selectValue: selectValue,
                  };
                  focusMsg = messages.onFocus(onFocusProps);
                }
                return focusMsg;
              },
              [
                focusedOption,
                focusedValue,
                getOptionLabel,
                isOptionDisabled,
                messages,
                options,
                selectValue,
              ]
            ),
            ariaResults = React.useMemo(
              function () {
                var resultsMsg = "";
                if (menuIsOpen && options.length && messages.onFilter) {
                  var resultsMessage = screenReaderStatus({
                    count: focusableOptions.length,
                  });
                  resultsMsg = messages.onFilter({
                    inputValue: inputValue,
                    resultsMessage: resultsMessage,
                  });
                }
                return resultsMsg;
              },
              [
                focusableOptions,
                inputValue,
                menuIsOpen,
                messages,
                options,
                screenReaderStatus,
              ]
            ),
            ariaGuidance = React.useMemo(
              function () {
                var guidanceMsg = "";
                if (messages.guidance) {
                  var context = focusedValue
                    ? "value"
                    : menuIsOpen
                    ? "menu"
                    : "input";
                  guidanceMsg = messages.guidance({
                    "aria-label": ariaLabel,
                    context: context,
                    isDisabled:
                      focusedOption &&
                      isOptionDisabled(focusedOption, selectValue),
                    isMulti: isMulti,
                    isSearchable: isSearchable,
                    tabSelectsValue: tabSelectsValue,
                  });
                }
                return guidanceMsg;
              },
              [
                ariaLabel,
                focusedOption,
                focusedValue,
                isMulti,
                isOptionDisabled,
                isSearchable,
                menuIsOpen,
                messages,
                selectValue,
                tabSelectsValue,
              ]
            ),
            ariaContext = ""
              .concat(ariaFocused, " ")
              .concat(ariaResults, " ")
              .concat(ariaGuidance),
            ScreenReaderText = react.jsx(
              React__default.default.Fragment,
              null,
              react.jsx(
                "span",
                {
                  id: "aria-selection",
                },
                ariaSelected
              ),
              react.jsx(
                "span",
                {
                  id: "aria-context",
                },
                ariaContext
              )
            ),
            isInitialFocus =
              "initial-input-focus" ===
              (null == ariaSelection ? void 0 : ariaSelection.action);
          return react.jsx(
            React__default.default.Fragment,
            null,
            react.jsx(
              A11yText,
              {
                id: id,
              },
              isInitialFocus && ScreenReaderText
            ),
            react.jsx(
              A11yText,
              {
                "aria-live": ariaLive,
                "aria-atomic": "false",
                "aria-relevant": "additions text",
              },
              isFocused && !isInitialFocus && ScreenReaderText
            )
          );
        },
        diacritics = [
          {
            base: "A",
            letters: "AⒶＡÀÁÂẦẤẪẨÃĀĂẰẮẴẲȦǠÄǞẢÅǺǍȀȂẠẬẶḀĄȺⱯ",
          },
          {
            base: "AA",
            letters: "Ꜳ",
          },
          {
            base: "AE",
            letters: "ÆǼǢ",
          },
          {
            base: "AO",
            letters: "Ꜵ",
          },
          {
            base: "AU",
            letters: "Ꜷ",
          },
          {
            base: "AV",
            letters: "ꜸꜺ",
          },
          {
            base: "AY",
            letters: "Ꜽ",
          },
          {
            base: "B",
            letters: "BⒷＢḂḄḆɃƂƁ",
          },
          {
            base: "C",
            letters: "CⒸＣĆĈĊČÇḈƇȻꜾ",
          },
          {
            base: "D",
            letters: "DⒹＤḊĎḌḐḒḎĐƋƊƉꝹ",
          },
          {
            base: "DZ",
            letters: "ǱǄ",
          },
          {
            base: "Dz",
            letters: "ǲǅ",
          },
          {
            base: "E",
            letters: "EⒺＥÈÉÊỀẾỄỂẼĒḔḖĔĖËẺĚȄȆẸỆȨḜĘḘḚƐƎ",
          },
          {
            base: "F",
            letters: "FⒻＦḞƑꝻ",
          },
          {
            base: "G",
            letters: "GⒼＧǴĜḠĞĠǦĢǤƓꞠꝽꝾ",
          },
          {
            base: "H",
            letters: "HⒽＨĤḢḦȞḤḨḪĦⱧⱵꞍ",
          },
          {
            base: "I",
            letters: "IⒾＩÌÍÎĨĪĬİÏḮỈǏȈȊỊĮḬƗ",
          },
          {
            base: "J",
            letters: "JⒿＪĴɈ",
          },
          {
            base: "K",
            letters: "KⓀＫḰǨḲĶḴƘⱩꝀꝂꝄꞢ",
          },
          {
            base: "L",
            letters: "LⓁＬĿĹĽḶḸĻḼḺŁȽⱢⱠꝈꝆꞀ",
          },
          {
            base: "LJ",
            letters: "Ǉ",
          },
          {
            base: "Lj",
            letters: "ǈ",
          },
          {
            base: "M",
            letters: "MⓂＭḾṀṂⱮƜ",
          },
          {
            base: "N",
            letters: "NⓃＮǸŃÑṄŇṆŅṊṈȠƝꞐꞤ",
          },
          {
            base: "NJ",
            letters: "Ǌ",
          },
          {
            base: "Nj",
            letters: "ǋ",
          },
          {
            base: "O",
            letters: "OⓄＯÒÓÔỒỐỖỔÕṌȬṎŌṐṒŎȮȰÖȪỎŐǑȌȎƠỜỚỠỞỢỌỘǪǬØǾƆƟꝊꝌ",
          },
          {
            base: "OI",
            letters: "Ƣ",
          },
          {
            base: "OO",
            letters: "Ꝏ",
          },
          {
            base: "OU",
            letters: "Ȣ",
          },
          {
            base: "P",
            letters: "PⓅＰṔṖƤⱣꝐꝒꝔ",
          },
          {
            base: "Q",
            letters: "QⓆＱꝖꝘɊ",
          },
          {
            base: "R",
            letters: "RⓇＲŔṘŘȐȒṚṜŖṞɌⱤꝚꞦꞂ",
          },
          {
            base: "S",
            letters: "SⓈＳẞŚṤŜṠŠṦṢṨȘŞⱾꞨꞄ",
          },
          {
            base: "T",
            letters: "TⓉＴṪŤṬȚŢṰṮŦƬƮȾꞆ",
          },
          {
            base: "TZ",
            letters: "Ꜩ",
          },
          {
            base: "U",
            letters: "UⓊＵÙÚÛŨṸŪṺŬÜǛǗǕǙỦŮŰǓȔȖƯỪỨỮỬỰỤṲŲṶṴɄ",
          },
          {
            base: "V",
            letters: "VⓋＶṼṾƲꝞɅ",
          },
          {
            base: "VY",
            letters: "Ꝡ",
          },
          {
            base: "W",
            letters: "WⓌＷẀẂŴẆẄẈⱲ",
          },
          {
            base: "X",
            letters: "XⓍＸẊẌ",
          },
          {
            base: "Y",
            letters: "YⓎＹỲÝŶỸȲẎŸỶỴƳɎỾ",
          },
          {
            base: "Z",
            letters: "ZⓏＺŹẐŻŽẒẔƵȤⱿⱫꝢ",
          },
          {
            base: "a",
            letters: "aⓐａẚàáâầấẫẩãāăằắẵẳȧǡäǟảåǻǎȁȃạậặḁąⱥɐ",
          },
          {
            base: "aa",
            letters: "ꜳ",
          },
          {
            base: "ae",
            letters: "æǽǣ",
          },
          {
            base: "ao",
            letters: "ꜵ",
          },
          {
            base: "au",
            letters: "ꜷ",
          },
          {
            base: "av",
            letters: "ꜹꜻ",
          },
          {
            base: "ay",
            letters: "ꜽ",
          },
          {
            base: "b",
            letters: "bⓑｂḃḅḇƀƃɓ",
          },
          {
            base: "c",
            letters: "cⓒｃćĉċčçḉƈȼꜿↄ",
          },
          {
            base: "d",
            letters: "dⓓｄḋďḍḑḓḏđƌɖɗꝺ",
          },
          {
            base: "dz",
            letters: "ǳǆ",
          },
          {
            base: "e",
            letters: "eⓔｅèéêềếễểẽēḕḗĕėëẻěȅȇẹệȩḝęḙḛɇɛǝ",
          },
          {
            base: "f",
            letters: "fⓕｆḟƒꝼ",
          },
          {
            base: "g",
            letters: "gⓖｇǵĝḡğġǧģǥɠꞡᵹꝿ",
          },
          {
            base: "h",
            letters: "hⓗｈĥḣḧȟḥḩḫẖħⱨⱶɥ",
          },
          {
            base: "hv",
            letters: "ƕ",
          },
          {
            base: "i",
            letters: "iⓘｉìíîĩīĭïḯỉǐȉȋịįḭɨı",
          },
          {
            base: "j",
            letters: "jⓙｊĵǰɉ",
          },
          {
            base: "k",
            letters: "kⓚｋḱǩḳķḵƙⱪꝁꝃꝅꞣ",
          },
          {
            base: "l",
            letters: "lⓛｌŀĺľḷḹļḽḻſłƚɫⱡꝉꞁꝇ",
          },
          {
            base: "lj",
            letters: "ǉ",
          },
          {
            base: "m",
            letters: "mⓜｍḿṁṃɱɯ",
          },
          {
            base: "n",
            letters: "nⓝｎǹńñṅňṇņṋṉƞɲŉꞑꞥ",
          },
          {
            base: "nj",
            letters: "ǌ",
          },
          {
            base: "o",
            letters: "oⓞｏòóôồốỗổõṍȭṏōṑṓŏȯȱöȫỏőǒȍȏơờớỡởợọộǫǭøǿɔꝋꝍɵ",
          },
          {
            base: "oi",
            letters: "ƣ",
          },
          {
            base: "ou",
            letters: "ȣ",
          },
          {
            base: "oo",
            letters: "ꝏ",
          },
          {
            base: "p",
            letters: "pⓟｐṕṗƥᵽꝑꝓꝕ",
          },
          {
            base: "q",
            letters: "qⓠｑɋꝗꝙ",
          },
          {
            base: "r",
            letters: "rⓡｒŕṙřȑȓṛṝŗṟɍɽꝛꞧꞃ",
          },
          {
            base: "s",
            letters: "sⓢｓßśṥŝṡšṧṣṩșşȿꞩꞅẛ",
          },
          {
            base: "t",
            letters: "tⓣｔṫẗťṭțţṱṯŧƭʈⱦꞇ",
          },
          {
            base: "tz",
            letters: "ꜩ",
          },
          {
            base: "u",
            letters: "uⓤｕùúûũṹūṻŭüǜǘǖǚủůűǔȕȗưừứữửựụṳųṷṵʉ",
          },
          {
            base: "v",
            letters: "vⓥｖṽṿʋꝟʌ",
          },
          {
            base: "vy",
            letters: "ꝡ",
          },
          {
            base: "w",
            letters: "wⓦｗẁẃŵẇẅẘẉⱳ",
          },
          {
            base: "x",
            letters: "xⓧｘẋẍ",
          },
          {
            base: "y",
            letters: "yⓨｙỳýŷỹȳẏÿỷẙỵƴɏỿ",
          },
          {
            base: "z",
            letters: "zⓩｚźẑżžẓẕƶȥɀⱬꝣ",
          },
        ],
        anyDiacritic = new RegExp(
          "[" +
            diacritics
              .map(function (d) {
                return d.letters;
              })
              .join("") +
            "]",
          "g"
        ),
        diacriticToBase = {},
        i = 0;
      i < diacritics.length;
      i++
    )
      for (
        var diacritic = diacritics[i], j = 0;
        j < diacritic.letters.length;
        j++
      )
        diacriticToBase[diacritic.letters[j]] = diacritic.base;

    var stripDiacritics = function (str) {
        return str.replace(anyDiacritic, function (match) {
          return diacriticToBase[match];
        });
      },
      memoizedStripDiacriticsForInput =
        memoizeOne__default.default(stripDiacritics),
      trimString = function (str) {
        return str.replace(/^\s+|\s+$/g, "");
      },
      defaultStringify = function (option) {
        return "".concat(option.label, " ").concat(option.value);
      },
      createFilter = function (config) {
        return function (option, rawInput) {
          if (option.data.__isNew__) return !0;
          var _ignoreCase$ignoreAcc = index._objectSpread2(
              {
                ignoreCase: !0,
                ignoreAccents: !0,
                stringify: defaultStringify,
                trim: !0,
                matchFrom: "any",
              },
              config
            ),
            ignoreCase = _ignoreCase$ignoreAcc.ignoreCase,
            ignoreAccents = _ignoreCase$ignoreAcc.ignoreAccents,
            stringify = _ignoreCase$ignoreAcc.stringify,
            trim = _ignoreCase$ignoreAcc.trim,
            matchFrom = _ignoreCase$ignoreAcc.matchFrom,
            input = trim ? trimString(rawInput) : rawInput,
            candidate = trim
              ? trimString(stringify(option))
              : stringify(option);
          return (
            ignoreCase &&
              ((input = input.toLowerCase()),
              (candidate = candidate.toLowerCase())),
            ignoreAccents &&
              ((input = memoizedStripDiacriticsForInput(input)),
              (candidate = stripDiacritics(candidate))),
            "start" === matchFrom
              ? candidate.substr(0, input.length) === input
              : candidate.indexOf(input) > -1
          );
        };
      },
      _excluded = ["innerRef"];

    function DummyInput(_ref) {
      var innerRef = _ref.innerRef,
        props = _objectWithoutProperties__default.default(_ref, _excluded);
      return react.jsx(
        "input",
        _extends__default.default(
          {
            ref: innerRef,
          },
          props,
          {
            css: react.css(
              {
                label: "dummyInput",
                background: 0,
                border: 0,
                caretColor: "transparent",
                fontSize: "inherit",
                gridArea: "1 / 1 / 2 / 3",
                outline: 0,
                padding: 0,
                width: 1,
                color: "transparent",
                left: -100,
                opacity: 0,
                position: "relative",
                transform: "scale(.01)",
              },
              "",
              ""
            ),
          }
        )
      );
    }

    var cancelScroll = function (event) {
      event.preventDefault(), event.stopPropagation();
    };

    function useScrollCapture(_ref) {
      var isEnabled = _ref.isEnabled,
        onBottomArrive = _ref.onBottomArrive,
        onBottomLeave = _ref.onBottomLeave,
        onTopArrive = _ref.onTopArrive,
        onTopLeave = _ref.onTopLeave,
        isBottom = React.useRef(!1),
        isTop = React.useRef(!1),
        touchStart = React.useRef(0),
        scrollTarget = React.useRef(null),
        handleEventDelta = React.useCallback(
          function (event, delta) {
            if (null !== scrollTarget.current) {
              var _scrollTarget$current = scrollTarget.current,
                scrollTop = _scrollTarget$current.scrollTop,
                scrollHeight = _scrollTarget$current.scrollHeight,
                clientHeight = _scrollTarget$current.clientHeight,
                target = scrollTarget.current,
                isDeltaPositive = delta > 0,
                availableScroll = scrollHeight - clientHeight - scrollTop,
                shouldCancelScroll = !1;
              availableScroll > delta &&
                isBottom.current &&
                (onBottomLeave && onBottomLeave(event),
                (isBottom.current = !1)),
                isDeltaPositive &&
                  isTop.current &&
                  (onTopLeave && onTopLeave(event), (isTop.current = !1)),
                isDeltaPositive && delta > availableScroll
                  ? (onBottomArrive &&
                      !isBottom.current &&
                      onBottomArrive(event),
                    (target.scrollTop = scrollHeight),
                    (shouldCancelScroll = !0),
                    (isBottom.current = !0))
                  : !isDeltaPositive &&
                    -delta > scrollTop &&
                    (onTopArrive && !isTop.current && onTopArrive(event),
                    (target.scrollTop = 0),
                    (shouldCancelScroll = !0),
                    (isTop.current = !0)),
                shouldCancelScroll && cancelScroll(event);
            }
          },
          [onBottomArrive, onBottomLeave, onTopArrive, onTopLeave]
        ),
        onWheel = React.useCallback(
          function (event) {
            handleEventDelta(event, event.deltaY);
          },
          [handleEventDelta]
        ),
        onTouchStart = React.useCallback(function (event) {
          touchStart.current = event.changedTouches[0].clientY;
        }, []),
        onTouchMove = React.useCallback(
          function (event) {
            var deltaY = touchStart.current - event.changedTouches[0].clientY;
            handleEventDelta(event, deltaY);
          },
          [handleEventDelta]
        ),
        startListening = React.useCallback(
          function (el) {
            if (el) {
              var notPassive = !!index.supportsPassiveEvents && {
                passive: !1,
              };
              el.addEventListener("wheel", onWheel, notPassive),
                el.addEventListener("touchstart", onTouchStart, notPassive),
                el.addEventListener("touchmove", onTouchMove, notPassive);
            }
          },
          [onTouchMove, onTouchStart, onWheel]
        ),
        stopListening = React.useCallback(
          function (el) {
            el &&
              (el.removeEventListener("wheel", onWheel, !1),
              el.removeEventListener("touchstart", onTouchStart, !1),
              el.removeEventListener("touchmove", onTouchMove, !1));
          },
          [onTouchMove, onTouchStart, onWheel]
        );
      return (
        React.useEffect(
          function () {
            if (isEnabled) {
              var element = scrollTarget.current;
              return (
                startListening(element),
                function () {
                  stopListening(element);
                }
              );
            }
          },
          [isEnabled, startListening, stopListening]
        ),
        function (element) {
          scrollTarget.current = element;
        }
      );
    }

    var STYLE_KEYS = [
        "boxSizing",
        "height",
        "overflow",
        "paddingRight",
        "position",
      ],
      LOCK_STYLES = {
        boxSizing: "border-box",
        overflow: "hidden",
        position: "relative",
        height: "100%",
      };

    function preventTouchMove(e) {
      e.preventDefault();
    }

    function allowTouchMove(e) {
      e.stopPropagation();
    }

    function preventInertiaScroll() {
      var top = this.scrollTop,
        totalScroll = this.scrollHeight,
        currentScroll = top + this.offsetHeight;
      0 === top
        ? (this.scrollTop = 1)
        : currentScroll === totalScroll && (this.scrollTop = top - 1);
    }

    function isTouchDevice() {
      return "ontouchstart" in window || navigator.maxTouchPoints;
    }

    var canUseDOM = !(
        "undefined" == typeof window ||
        !window.document ||
        !window.document.createElement
      ),
      activeScrollLocks = 0,
      listenerOptions = {
        capture: !1,
        passive: !1,
      };

    function useScrollLock(_ref) {
      var isEnabled = _ref.isEnabled,
        _ref$accountForScroll = _ref.accountForScrollbars,
        accountForScrollbars =
          void 0 === _ref$accountForScroll || _ref$accountForScroll,
        originalStyles = React.useRef({}),
        scrollTarget = React.useRef(null),
        addScrollLock = React.useCallback(
          function (touchScrollTarget) {
            if (canUseDOM) {
              var target = document.body,
                targetStyle = target && target.style;
              if (
                (accountForScrollbars &&
                  STYLE_KEYS.forEach(function (key) {
                    var val = targetStyle && targetStyle[key];
                    originalStyles.current[key] = val;
                  }),
                accountForScrollbars && activeScrollLocks < 1)
              ) {
                var currentPadding =
                    parseInt(originalStyles.current.paddingRight, 10) || 0,
                  clientWidth = document.body ? document.body.clientWidth : 0,
                  adjustedPadding =
                    window.innerWidth - clientWidth + currentPadding || 0;
                Object.keys(LOCK_STYLES).forEach(function (key) {
                  var val = LOCK_STYLES[key];
                  targetStyle && (targetStyle[key] = val);
                }),
                  targetStyle &&
                    (targetStyle.paddingRight = "".concat(
                      adjustedPadding,
                      "px"
                    ));
              }
              target &&
                isTouchDevice() &&
                (target.addEventListener(
                  "touchmove",
                  preventTouchMove,
                  listenerOptions
                ),
                touchScrollTarget &&
                  (touchScrollTarget.addEventListener(
                    "touchstart",
                    preventInertiaScroll,
                    listenerOptions
                  ),
                  touchScrollTarget.addEventListener(
                    "touchmove",
                    allowTouchMove,
                    listenerOptions
                  ))),
                (activeScrollLocks += 1);
            }
          },
          [accountForScrollbars]
        ),
        removeScrollLock = React.useCallback(
          function (touchScrollTarget) {
            if (canUseDOM) {
              var target = document.body,
                targetStyle = target && target.style;
              (activeScrollLocks = Math.max(activeScrollLocks - 1, 0)),
                accountForScrollbars &&
                  activeScrollLocks < 1 &&
                  STYLE_KEYS.forEach(function (key) {
                    var val = originalStyles.current[key];
                    targetStyle && (targetStyle[key] = val);
                  }),
                target &&
                  isTouchDevice() &&
                  (target.removeEventListener(
                    "touchmove",
                    preventTouchMove,
                    listenerOptions
                  ),
                  touchScrollTarget &&
                    (touchScrollTarget.removeEventListener(
                      "touchstart",
                      preventInertiaScroll,
                      listenerOptions
                    ),
                    touchScrollTarget.removeEventListener(
                      "touchmove",
                      allowTouchMove,
                      listenerOptions
                    )));
            }
          },
          [accountForScrollbars]
        );
      return (
        React.useEffect(
          function () {
            if (isEnabled) {
              var element = scrollTarget.current;
              return (
                addScrollLock(element),
                function () {
                  removeScrollLock(element);
                }
              );
            }
          },
          [isEnabled, addScrollLock, removeScrollLock]
        ),
        function (element) {
          scrollTarget.current = element;
        }
      );
    }

    function _EMOTION_STRINGIFIED_CSS_ERROR__() {
      return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop).";
    }

    var blurSelectInput = function () {
        return document.activeElement && document.activeElement.blur();
      },
      _ref2 = {
        name: "1kfdb0e",
        styles: "position:fixed;left:0;bottom:0;right:0;top:0",
      };

    function ScrollManager(_ref) {
      var children = _ref.children,
        lockEnabled = _ref.lockEnabled,
        _ref$captureEnabled = _ref.captureEnabled,
        setScrollCaptureTarget = useScrollCapture({
          isEnabled: void 0 === _ref$captureEnabled || _ref$captureEnabled,
          onBottomArrive: _ref.onBottomArrive,
          onBottomLeave: _ref.onBottomLeave,
          onTopArrive: _ref.onTopArrive,
          onTopLeave: _ref.onTopLeave,
        }),
        setScrollLockTarget = useScrollLock({
          isEnabled: lockEnabled,
        });
      return react.jsx(
        React__default.default.Fragment,
        null,
        lockEnabled &&
          react.jsx("div", {
            onClick: blurSelectInput,
            css: _ref2,
          }),
        children(function (element) {
          setScrollCaptureTarget(element), setScrollLockTarget(element);
        })
      );
    }

    var formatGroupLabel = function (group) {
        return group.label;
      },
      getOptionLabel$1 = function (option) {
        return option.label;
      },
      getOptionValue$1 = function (option) {
        return option.value;
      },
      isOptionDisabled = function (option) {
        return !!option.isDisabled;
      },
      defaultStyles = {
        clearIndicator: index.clearIndicatorCSS,
        container: index.containerCSS,
        control: index.css,
        dropdownIndicator: index.dropdownIndicatorCSS,
        group: index.groupCSS,
        groupHeading: index.groupHeadingCSS,
        indicatorsContainer: index.indicatorsContainerCSS,
        indicatorSeparator: index.indicatorSeparatorCSS,
        input: index.inputCSS,
        loadingIndicator: index.loadingIndicatorCSS,
        loadingMessage: index.loadingMessageCSS,
        menu: index.menuCSS,
        menuList: index.menuListCSS,
        menuPortal: index.menuPortalCSS,
        multiValue: index.multiValueCSS,
        multiValueLabel: index.multiValueLabelCSS,
        multiValueRemove: index.multiValueRemoveCSS,
        noOptionsMessage: index.noOptionsMessageCSS,
        option: index.optionCSS,
        placeholder: index.placeholderCSS,
        singleValue: index.css$1,
        valueContainer: index.valueContainerCSS,
      };

    function mergeStyles(source) {
      var target =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        styles = index._objectSpread2({}, source);
      return (
        Object.keys(target).forEach(function (keyAsString) {
          var key = keyAsString;
          source[key]
            ? (styles[key] = function (rsCss, props) {
                return target[key](source[key](rsCss, props), props);
              })
            : (styles[key] = target[key]);
        }),
        styles
      );
    }

    var colors = {
        primary: "#2684FF",
        primary75: "#4C9AFF",
        primary50: "#B2D4FF",
        primary25: "#DEEBFF",
        danger: "#DE350B",
        dangerLight: "#FFBDAD",
        neutral0: "hsl(0, 0%, 100%)",
        neutral5: "hsl(0, 0%, 95%)",
        neutral10: "hsl(0, 0%, 90%)",
        neutral20: "hsl(0, 0%, 80%)",
        neutral30: "hsl(0, 0%, 70%)",
        neutral40: "hsl(0, 0%, 60%)",
        neutral50: "hsl(0, 0%, 50%)",
        neutral60: "hsl(0, 0%, 40%)",
        neutral70: "hsl(0, 0%, 30%)",
        neutral80: "hsl(0, 0%, 20%)",
        neutral90: "hsl(0, 0%, 10%)",
      },
      borderRadius = 4,
      baseUnit = 4,
      controlHeight = 38,
      menuGutter = 2 * baseUnit,
      spacing = {
        baseUnit: baseUnit,
        controlHeight: controlHeight,
        menuGutter: menuGutter,
      },
      defaultTheme = {
        borderRadius: borderRadius,
        colors: colors,
        spacing: spacing,
      },
      defaultProps = {
        "aria-live": "polite",
        backspaceRemovesValue: !0,
        blurInputOnSelect: index.isTouchCapable(),
        captureMenuScroll: !index.isTouchCapable(),
        closeMenuOnSelect: !0,
        closeMenuOnScroll: !1,
        components: {},
        controlShouldRenderValue: !0,
        escapeClearsValue: !1,
        filterOption: createFilter(),
        formatGroupLabel: formatGroupLabel,
        getOptionLabel: getOptionLabel$1,
        getOptionValue: getOptionValue$1,
        isDisabled: !1,
        isLoading: !1,
        isMulti: !1,
        isRtl: !1,
        isSearchable: !0,
        isOptionDisabled: isOptionDisabled,
        loadingMessage: function () {
          return "Loading...";
        },
        maxMenuHeight: 300,
        minMenuHeight: 140,
        menuIsOpen: !1,
        menuPlacement: "bottom",
        menuPosition: "absolute",
        menuShouldBlockScroll: !1,
        menuShouldScrollIntoView: !index.isMobileDevice(),
        noOptionsMessage: function () {
          return "No options";
        },
        openMenuOnFocus: !1,
        openMenuOnClick: !0,
        options: [],
        pageSize: 5,
        placeholder: "Select...",
        screenReaderStatus: function (_ref) {
          var count = _ref.count;
          return ""
            .concat(count, " result")
            .concat(1 !== count ? "s" : "", " available");
        },
        styles: {},
        tabIndex: 0,
        tabSelectsValue: !0,
      };

    function toCategorizedOption(props, option, selectValue, index) {
      return {
        type: "option",
        data: option,
        isDisabled: _isOptionDisabled(props, option, selectValue),
        isSelected: _isOptionSelected(props, option, selectValue),
        label: getOptionLabel(props, option),
        value: getOptionValue(props, option),
        index: index,
      };
    }

    function buildCategorizedOptions(props, selectValue) {
      return props.options
        .map(function (groupOrOption, groupOrOptionIndex) {
          if ("options" in groupOrOption) {
            var categorizedOptions = groupOrOption.options
              .map(function (option, optionIndex) {
                return toCategorizedOption(
                  props,
                  option,
                  selectValue,
                  optionIndex
                );
              })
              .filter(function (categorizedOption) {
                return isFocusable(props, categorizedOption);
              });
            return categorizedOptions.length > 0
              ? {
                  type: "group",
                  data: groupOrOption,
                  options: categorizedOptions,
                  index: groupOrOptionIndex,
                }
              : void 0;
          }
          var categorizedOption = toCategorizedOption(
            props,
            groupOrOption,
            selectValue,
            groupOrOptionIndex
          );
          return isFocusable(props, categorizedOption)
            ? categorizedOption
            : void 0;
        })
        .filter(index.notNullish);
    }

    function buildFocusableOptionsFromCategorizedOptions(categorizedOptions) {
      return categorizedOptions.reduce(function (
        optionsAccumulator,
        categorizedOption
      ) {
        return (
          "group" === categorizedOption.type
            ? optionsAccumulator.push.apply(
                optionsAccumulator,
                _toConsumableArray__default.default(
                  categorizedOption.options.map(function (option) {
                    return option.data;
                  })
                )
              )
            : optionsAccumulator.push(categorizedOption.data),
          optionsAccumulator
        );
      },
      []);
    }

    function buildFocusableOptions(props, selectValue) {
      return buildFocusableOptionsFromCategorizedOptions(
        buildCategorizedOptions(props, selectValue)
      );
    }

    function isFocusable(props, categorizedOption) {
      var _props$inputValue = props.inputValue,
        inputValue = void 0 === _props$inputValue ? "" : _props$inputValue,
        data = categorizedOption.data,
        isSelected = categorizedOption.isSelected,
        label = categorizedOption.label,
        value = categorizedOption.value;
      return (
        (!shouldHideSelectedOptions(props) || !isSelected) &&
        _filterOption(
          props,
          {
            label: label,
            value: value,
            data: data,
          },
          inputValue
        )
      );
    }

    function getNextFocusedValue(state, nextSelectValue) {
      var focusedValue = state.focusedValue,
        lastFocusedIndex = state.selectValue.indexOf(focusedValue);
      if (lastFocusedIndex > -1) {
        if (nextSelectValue.indexOf(focusedValue) > -1) return focusedValue;
        if (lastFocusedIndex < nextSelectValue.length)
          return nextSelectValue[lastFocusedIndex];
      }
      return null;
    }

    function getNextFocusedOption(state, options) {
      var lastFocusedOption = state.focusedOption;
      return lastFocusedOption && options.indexOf(lastFocusedOption) > -1
        ? lastFocusedOption
        : options[0];
    }

    var getOptionLabel = function (props, data) {
        return props.getOptionLabel(data);
      },
      getOptionValue = function (props, data) {
        return props.getOptionValue(data);
      };

    function _isOptionDisabled(props, option, selectValue) {
      return (
        "function" == typeof props.isOptionDisabled &&
        props.isOptionDisabled(option, selectValue)
      );
    }

    function _isOptionSelected(props, option, selectValue) {
      if (selectValue.indexOf(option) > -1) return !0;
      if ("function" == typeof props.isOptionSelected)
        return props.isOptionSelected(option, selectValue);
      var candidate = getOptionValue(props, option);
      return selectValue.some(function (i) {
        return getOptionValue(props, i) === candidate;
      });
    }

    function _filterOption(props, option, inputValue) {
      return !props.filterOption || props.filterOption(option, inputValue);
    }

    var shouldHideSelectedOptions = function (props) {
        var hideSelectedOptions = props.hideSelectedOptions,
          isMulti = props.isMulti;
        return void 0 === hideSelectedOptions ? isMulti : hideSelectedOptions;
      },
      instanceId = 1,
      Select = (function (_Component) {
        _inherits__default.default(Select, _Component);
        var _super = index._createSuper(Select);
        function Select(_props) {
          var _this;
          return (
            _classCallCheck__default.default(this, Select),
            ((_this = _super.call(this, _props)).state = {
              ariaSelection: null,
              focusedOption: null,
              focusedValue: null,
              inputIsHidden: !1,
              isFocused: !1,
              selectValue: [],
              clearFocusValueOnUpdate: !1,
              prevWasFocused: !1,
              inputIsHiddenAfterUpdate: void 0,
              prevProps: void 0,
            }),
            (_this.blockOptionHover = !1),
            (_this.isComposing = !1),
            (_this.commonProps = void 0),
            (_this.initialTouchX = 0),
            (_this.initialTouchY = 0),
            (_this.instancePrefix = ""),
            (_this.openAfterFocus = !1),
            (_this.scrollToFocusedOptionOnUpdate = !1),
            (_this.userIsDragging = void 0),
            (_this.controlRef = null),
            (_this.getControlRef = function (ref) {
              _this.controlRef = ref;
            }),
            (_this.focusedOptionRef = null),
            (_this.getFocusedOptionRef = function (ref) {
              _this.focusedOptionRef = ref;
            }),
            (_this.menuListRef = null),
            (_this.getMenuListRef = function (ref) {
              _this.menuListRef = ref;
            }),
            (_this.inputRef = null),
            (_this.getInputRef = function (ref) {
              _this.inputRef = ref;
            }),
            (_this.focus = _this.focusInput),
            (_this.blur = _this.blurInput),
            (_this.onChange = function (newValue, actionMeta) {
              var _this$props = _this.props,
                onChange = _this$props.onChange,
                name = _this$props.name;
              (actionMeta.name = name),
                _this.ariaOnChange(newValue, actionMeta),
                onChange(newValue, actionMeta);
            }),
            (_this.setValue = function (newValue, action, option) {
              var _this$props2 = _this.props,
                closeMenuOnSelect = _this$props2.closeMenuOnSelect,
                isMulti = _this$props2.isMulti,
                inputValue = _this$props2.inputValue;
              _this.onInputChange("", {
                action: "set-value",
                prevInputValue: inputValue,
              }),
                closeMenuOnSelect &&
                  (_this.setState({
                    inputIsHiddenAfterUpdate: !isMulti,
                  }),
                  _this.onMenuClose()),
                _this.setState({
                  clearFocusValueOnUpdate: !0,
                }),
                _this.onChange(newValue, {
                  action: action,
                  option: option,
                });
            }),
            (_this.selectOption = function (newValue) {
              var _this$props3 = _this.props,
                blurInputOnSelect = _this$props3.blurInputOnSelect,
                isMulti = _this$props3.isMulti,
                name = _this$props3.name,
                selectValue = _this.state.selectValue,
                deselected =
                  isMulti && _this.isOptionSelected(newValue, selectValue),
                isDisabled = _this.isOptionDisabled(newValue, selectValue);
              if (deselected) {
                var candidate = _this.getOptionValue(newValue);
                _this.setValue(
                  index.multiValueAsValue(
                    selectValue.filter(function (i) {
                      return _this.getOptionValue(i) !== candidate;
                    })
                  ),
                  "deselect-option",
                  newValue
                );
              } else {
                if (isDisabled)
                  return void _this.ariaOnChange(
                    index.singleValueAsValue(newValue),
                    {
                      action: "select-option",
                      option: newValue,
                      name: name,
                    }
                  );
                isMulti
                  ? _this.setValue(
                      index.multiValueAsValue(
                        [].concat(
                          _toConsumableArray__default.default(selectValue),
                          [newValue]
                        )
                      ),
                      "select-option",
                      newValue
                    )
                  : _this.setValue(
                      index.singleValueAsValue(newValue),
                      "select-option"
                    );
              }
              blurInputOnSelect && _this.blurInput();
            }),
            (_this.removeValue = function (removedValue) {
              var isMulti = _this.props.isMulti,
                selectValue = _this.state.selectValue,
                candidate = _this.getOptionValue(removedValue),
                newValueArray = selectValue.filter(function (i) {
                  return _this.getOptionValue(i) !== candidate;
                }),
                newValue = index.valueTernary(
                  isMulti,
                  newValueArray,
                  newValueArray[0] || null
                );
              _this.onChange(newValue, {
                action: "remove-value",
                removedValue: removedValue,
              }),
                _this.focusInput();
            }),
            (_this.clearValue = function () {
              var selectValue = _this.state.selectValue;
              _this.onChange(
                index.valueTernary(_this.props.isMulti, [], null),
                {
                  action: "clear",
                  removedValues: selectValue,
                }
              );
            }),
            (_this.popValue = function () {
              var isMulti = _this.props.isMulti,
                selectValue = _this.state.selectValue,
                lastSelectedValue = selectValue[selectValue.length - 1],
                newValueArray = selectValue.slice(0, selectValue.length - 1),
                newValue = index.valueTernary(
                  isMulti,
                  newValueArray,
                  newValueArray[0] || null
                );
              _this.onChange(newValue, {
                action: "pop-value",
                removedValue: lastSelectedValue,
              });
            }),
            (_this.getValue = function () {
              return _this.state.selectValue;
            }),
            (_this.cx = function () {
              for (
                var _len = arguments.length, args = new Array(_len), _key = 0;
                _key < _len;
                _key++
              )
                args[_key] = arguments[_key];
              return index.classNames.apply(
                void 0,
                [_this.props.classNamePrefix].concat(args)
              );
            }),
            (_this.getOptionLabel = function (data) {
              return getOptionLabel(_this.props, data);
            }),
            (_this.getOptionValue = function (data) {
              return getOptionValue(_this.props, data);
            }),
            (_this.getStyles = function (key, props) {
              var base = defaultStyles[key](props);
              base.boxSizing = "border-box";
              var custom = _this.props.styles[key];
              return custom ? custom(base, props) : base;
            }),
            (_this.getElementId = function (element) {
              return "".concat(_this.instancePrefix, "-").concat(element);
            }),
            (_this.getComponents = function () {
              return index.defaultComponents(_this.props);
            }),
            (_this.buildCategorizedOptions = function () {
              return buildCategorizedOptions(
                _this.props,
                _this.state.selectValue
              );
            }),
            (_this.getCategorizedOptions = function () {
              return _this.props.menuIsOpen
                ? _this.buildCategorizedOptions()
                : [];
            }),
            (_this.buildFocusableOptions = function () {
              return buildFocusableOptionsFromCategorizedOptions(
                _this.buildCategorizedOptions()
              );
            }),
            (_this.getFocusableOptions = function () {
              return _this.props.menuIsOpen
                ? _this.buildFocusableOptions()
                : [];
            }),
            (_this.ariaOnChange = function (value, actionMeta) {
              _this.setState({
                ariaSelection: index._objectSpread2(
                  {
                    value: value,
                  },
                  actionMeta
                ),
              });
            }),
            (_this.onMenuMouseDown = function (event) {
              0 === event.button &&
                (event.stopPropagation(),
                event.preventDefault(),
                _this.focusInput());
            }),
            (_this.onMenuMouseMove = function (event) {
              _this.blockOptionHover = !1;
            }),
            (_this.onControlMouseDown = function (event) {
              var openMenuOnClick = _this.props.openMenuOnClick;
              _this.state.isFocused
                ? _this.props.menuIsOpen
                  ? "INPUT" !== event.target.tagName &&
                    "TEXTAREA" !== event.target.tagName &&
                    _this.onMenuClose()
                  : openMenuOnClick && _this.openMenu("first")
                : (openMenuOnClick && (_this.openAfterFocus = !0),
                  _this.focusInput()),
                "INPUT" !== event.target.tagName &&
                  "TEXTAREA" !== event.target.tagName &&
                  event.preventDefault();
            }),
            (_this.onDropdownIndicatorMouseDown = function (event) {
              if (
                !(
                  (event && "mousedown" === event.type && 0 !== event.button) ||
                  _this.props.isDisabled
                )
              ) {
                var _this$props4 = _this.props,
                  isMulti = _this$props4.isMulti,
                  menuIsOpen = _this$props4.menuIsOpen;
                _this.focusInput(),
                  menuIsOpen
                    ? (_this.setState({
                        inputIsHiddenAfterUpdate: !isMulti,
                      }),
                      _this.onMenuClose())
                    : _this.openMenu("first"),
                  event.preventDefault(),
                  event.stopPropagation();
              }
            }),
            (_this.onClearIndicatorMouseDown = function (event) {
              (event && "mousedown" === event.type && 0 !== event.button) ||
                (_this.clearValue(),
                event.preventDefault(),
                event.stopPropagation(),
                (_this.openAfterFocus = !1),
                "touchend" === event.type
                  ? _this.focusInput()
                  : setTimeout(function () {
                      return _this.focusInput();
                    }));
            }),
            (_this.onScroll = function (event) {
              "boolean" == typeof _this.props.closeMenuOnScroll
                ? event.target instanceof HTMLElement &&
                  index.isDocumentElement(event.target) &&
                  _this.props.onMenuClose()
                : "function" == typeof _this.props.closeMenuOnScroll &&
                  _this.props.closeMenuOnScroll(event) &&
                  _this.props.onMenuClose();
            }),
            (_this.onCompositionStart = function () {
              _this.isComposing = !0;
            }),
            (_this.onCompositionEnd = function () {
              _this.isComposing = !1;
            }),
            (_this.onTouchStart = function (_ref2) {
              var touches = _ref2.touches,
                touch = touches && touches.item(0);
              touch &&
                ((_this.initialTouchX = touch.clientX),
                (_this.initialTouchY = touch.clientY),
                (_this.userIsDragging = !1));
            }),
            (_this.onTouchMove = function (_ref3) {
              var touches = _ref3.touches,
                touch = touches && touches.item(0);
              if (touch) {
                var deltaX = Math.abs(touch.clientX - _this.initialTouchX),
                  deltaY = Math.abs(touch.clientY - _this.initialTouchY);
                _this.userIsDragging = deltaX > 5 || deltaY > 5;
              }
            }),
            (_this.onTouchEnd = function (event) {
              _this.userIsDragging ||
                (_this.controlRef &&
                  !_this.controlRef.contains(event.target) &&
                  _this.menuListRef &&
                  !_this.menuListRef.contains(event.target) &&
                  _this.blurInput(),
                (_this.initialTouchX = 0),
                (_this.initialTouchY = 0));
            }),
            (_this.onControlTouchEnd = function (event) {
              _this.userIsDragging || _this.onControlMouseDown(event);
            }),
            (_this.onClearIndicatorTouchEnd = function (event) {
              _this.userIsDragging || _this.onClearIndicatorMouseDown(event);
            }),
            (_this.onDropdownIndicatorTouchEnd = function (event) {
              _this.userIsDragging || _this.onDropdownIndicatorMouseDown(event);
            }),
            (_this.handleInputChange = function (event) {
              var prevInputValue = _this.props.inputValue,
                inputValue = event.currentTarget.value;
              _this.setState({
                inputIsHiddenAfterUpdate: !1,
              }),
                _this.onInputChange(inputValue, {
                  action: "input-change",
                  prevInputValue: prevInputValue,
                }),
                _this.props.menuIsOpen || _this.onMenuOpen();
            }),
            (_this.onInputFocus = function (event) {
              _this.props.onFocus && _this.props.onFocus(event),
                _this.setState({
                  inputIsHiddenAfterUpdate: !1,
                  isFocused: !0,
                }),
                (_this.openAfterFocus || _this.props.openMenuOnFocus) &&
                  _this.openMenu("first"),
                (_this.openAfterFocus = !1);
            }),
            (_this.onInputBlur = function (event) {
              var prevInputValue = _this.props.inputValue;
              _this.menuListRef &&
              _this.menuListRef.contains(document.activeElement)
                ? _this.inputRef.focus()
                : (_this.props.onBlur && _this.props.onBlur(event),
                  _this.onInputChange("", {
                    action: "input-blur",
                    prevInputValue: prevInputValue,
                  }),
                  _this.onMenuClose(),
                  _this.setState({
                    focusedValue: null,
                    isFocused: !1,
                  }));
            }),
            (_this.onOptionHover = function (focusedOption) {
              _this.blockOptionHover ||
                _this.state.focusedOption === focusedOption ||
                _this.setState({
                  focusedOption: focusedOption,
                });
            }),
            (_this.shouldHideSelectedOptions = function () {
              return shouldHideSelectedOptions(_this.props);
            }),
            (_this.onKeyDown = function (event) {
              var _this$props5 = _this.props,
                isMulti = _this$props5.isMulti,
                backspaceRemovesValue = _this$props5.backspaceRemovesValue,
                escapeClearsValue = _this$props5.escapeClearsValue,
                inputValue = _this$props5.inputValue,
                isClearable = _this$props5.isClearable,
                isDisabled = _this$props5.isDisabled,
                menuIsOpen = _this$props5.menuIsOpen,
                onKeyDown = _this$props5.onKeyDown,
                tabSelectsValue = _this$props5.tabSelectsValue,
                openMenuOnFocus = _this$props5.openMenuOnFocus,
                _this$state = _this.state,
                focusedOption = _this$state.focusedOption,
                focusedValue = _this$state.focusedValue,
                selectValue = _this$state.selectValue;
              if (
                !(
                  isDisabled ||
                  ("function" == typeof onKeyDown &&
                    (onKeyDown(event), event.defaultPrevented))
                )
              ) {
                switch (((_this.blockOptionHover = !0), event.key)) {
                  case "ArrowLeft":
                    if (!isMulti || inputValue) return;
                    _this.focusValue("previous");
                    break;

                  case "ArrowRight":
                    if (!isMulti || inputValue) return;
                    _this.focusValue("next");
                    break;

                  case "Delete":
                  case "Backspace":
                    if (inputValue) return;
                    if (focusedValue) _this.removeValue(focusedValue);
                    else {
                      if (!backspaceRemovesValue) return;
                      isMulti
                        ? _this.popValue()
                        : isClearable && _this.clearValue();
                    }
                    break;

                  case "Tab":
                    if (_this.isComposing) return;
                    if (
                      event.shiftKey ||
                      !menuIsOpen ||
                      !tabSelectsValue ||
                      !focusedOption ||
                      (openMenuOnFocus &&
                        _this.isOptionSelected(focusedOption, selectValue))
                    )
                      return;
                    _this.selectOption(focusedOption);
                    break;

                  case "Enter":
                    if (229 === event.keyCode) break;
                    if (menuIsOpen) {
                      if (!focusedOption) return;
                      if (_this.isComposing) return;
                      _this.selectOption(focusedOption);
                      break;
                    }
                    return;

                  case "Escape":
                    menuIsOpen
                      ? (_this.setState({
                          inputIsHiddenAfterUpdate: !1,
                        }),
                        _this.onInputChange("", {
                          action: "menu-close",
                          prevInputValue: inputValue,
                        }),
                        _this.onMenuClose())
                      : isClearable && escapeClearsValue && _this.clearValue();
                    break;

                  case " ":
                    if (inputValue) return;
                    if (!menuIsOpen) {
                      _this.openMenu("first");
                      break;
                    }
                    if (!focusedOption) return;
                    _this.selectOption(focusedOption);
                    break;

                  case "ArrowUp":
                    menuIsOpen
                      ? _this.focusOption("up")
                      : _this.openMenu("last");
                    break;

                  case "ArrowDown":
                    menuIsOpen
                      ? _this.focusOption("down")
                      : _this.openMenu("first");
                    break;

                  case "PageUp":
                    if (!menuIsOpen) return;
                    _this.focusOption("pageup");
                    break;

                  case "PageDown":
                    if (!menuIsOpen) return;
                    _this.focusOption("pagedown");
                    break;

                  case "Home":
                    if (!menuIsOpen) return;
                    _this.focusOption("first");
                    break;

                  case "End":
                    if (!menuIsOpen) return;
                    _this.focusOption("last");
                    break;

                  default:
                    return;
                }
                event.preventDefault();
              }
            }),
            (_this.instancePrefix =
              "react-select-" + (_this.props.instanceId || ++instanceId)),
            (_this.state.selectValue = index.cleanValue(_props.value)),
            _this
          );
        }
        return (
          _createClass__default.default(
            Select,
            [
              {
                key: "componentDidMount",
                value: function () {
                  this.startListeningComposition(),
                    this.startListeningToTouch(),
                    this.props.closeMenuOnScroll &&
                      document &&
                      document.addEventListener &&
                      document.addEventListener("scroll", this.onScroll, !0),
                    this.props.autoFocus && this.focusInput();
                },
              },
              {
                key: "componentDidUpdate",
                value: function (prevProps) {
                  var _this$props6 = this.props,
                    isDisabled = _this$props6.isDisabled,
                    menuIsOpen = _this$props6.menuIsOpen,
                    isFocused = this.state.isFocused;
                  ((isFocused && !isDisabled && prevProps.isDisabled) ||
                    (isFocused && menuIsOpen && !prevProps.menuIsOpen)) &&
                    this.focusInput(),
                    isFocused &&
                      isDisabled &&
                      !prevProps.isDisabled &&
                      this.setState(
                        {
                          isFocused: !1,
                        },
                        this.onMenuClose
                      ),
                    this.menuListRef &&
                      this.focusedOptionRef &&
                      this.scrollToFocusedOptionOnUpdate &&
                      (index.scrollIntoView(
                        this.menuListRef,
                        this.focusedOptionRef
                      ),
                      (this.scrollToFocusedOptionOnUpdate = !1));
                },
              },
              {
                key: "componentWillUnmount",
                value: function () {
                  this.stopListeningComposition(),
                    this.stopListeningToTouch(),
                    document.removeEventListener("scroll", this.onScroll, !0);
                },
              },
              {
                key: "onMenuOpen",
                value: function () {
                  this.props.onMenuOpen();
                },
              },
              {
                key: "onMenuClose",
                value: function () {
                  this.onInputChange("", {
                    action: "menu-close",
                    prevInputValue: this.props.inputValue,
                  }),
                    this.props.onMenuClose();
                },
              },
              {
                key: "onInputChange",
                value: function (newValue, actionMeta) {
                  this.props.onInputChange(newValue, actionMeta);
                },
              },
              {
                key: "focusInput",
                value: function () {
                  this.inputRef && this.inputRef.focus();
                },
              },
              {
                key: "blurInput",
                value: function () {
                  this.inputRef && this.inputRef.blur();
                },
              },
              {
                key: "openMenu",
                value: function (focusOption) {
                  var _this2 = this,
                    _this$state2 = this.state,
                    selectValue = _this$state2.selectValue,
                    isFocused = _this$state2.isFocused,
                    focusableOptions = this.buildFocusableOptions(),
                    openAtIndex =
                      "first" === focusOption ? 0 : focusableOptions.length - 1;
                  if (!this.props.isMulti) {
                    var selectedIndex = focusableOptions.indexOf(
                      selectValue[0]
                    );
                    selectedIndex > -1 && (openAtIndex = selectedIndex);
                  }
                  (this.scrollToFocusedOptionOnUpdate = !(
                    isFocused && this.menuListRef
                  )),
                    this.setState(
                      {
                        inputIsHiddenAfterUpdate: !1,
                        focusedValue: null,
                        focusedOption: focusableOptions[openAtIndex],
                      },
                      function () {
                        return _this2.onMenuOpen();
                      }
                    );
                },
              },
              {
                key: "focusValue",
                value: function (direction) {
                  var _this$state3 = this.state,
                    selectValue = _this$state3.selectValue,
                    focusedValue = _this$state3.focusedValue;
                  if (this.props.isMulti) {
                    this.setState({
                      focusedOption: null,
                    });
                    var focusedIndex = selectValue.indexOf(focusedValue);
                    focusedValue || (focusedIndex = -1);
                    var lastIndex = selectValue.length - 1,
                      nextFocus = -1;
                    if (selectValue.length) {
                      switch (direction) {
                        case "previous":
                          nextFocus =
                            0 === focusedIndex
                              ? 0
                              : -1 === focusedIndex
                              ? lastIndex
                              : focusedIndex - 1;
                          break;

                        case "next":
                          focusedIndex > -1 &&
                            focusedIndex < lastIndex &&
                            (nextFocus = focusedIndex + 1);
                      }
                      this.setState({
                        inputIsHidden: -1 !== nextFocus,
                        focusedValue: selectValue[nextFocus],
                      });
                    }
                  }
                },
              },
              {
                key: "focusOption",
                value: function () {
                  var direction =
                      arguments.length > 0 && void 0 !== arguments[0]
                        ? arguments[0]
                        : "first",
                    pageSize = this.props.pageSize,
                    focusedOption = this.state.focusedOption,
                    options = this.getFocusableOptions();
                  if (options.length) {
                    var nextFocus = 0,
                      focusedIndex = options.indexOf(focusedOption);
                    focusedOption || (focusedIndex = -1),
                      "up" === direction
                        ? (nextFocus =
                            focusedIndex > 0
                              ? focusedIndex - 1
                              : options.length - 1)
                        : "down" === direction
                        ? (nextFocus = (focusedIndex + 1) % options.length)
                        : "pageup" === direction
                        ? (nextFocus = focusedIndex - pageSize) < 0 &&
                          (nextFocus = 0)
                        : "pagedown" === direction
                        ? (nextFocus = focusedIndex + pageSize) >
                            options.length - 1 &&
                          (nextFocus = options.length - 1)
                        : "last" === direction &&
                          (nextFocus = options.length - 1),
                      (this.scrollToFocusedOptionOnUpdate = !0),
                      this.setState({
                        focusedOption: options[nextFocus],
                        focusedValue: null,
                      });
                  }
                },
              },
              {
                key: "getTheme",
                value: function () {
                  return this.props.theme
                    ? "function" == typeof this.props.theme
                      ? this.props.theme(defaultTheme)
                      : index._objectSpread2(
                          index._objectSpread2({}, defaultTheme),
                          this.props.theme
                        )
                    : defaultTheme;
                },
              },
              {
                key: "getCommonProps",
                value: function () {
                  var clearValue = this.clearValue,
                    cx = this.cx,
                    getStyles = this.getStyles,
                    getValue = this.getValue,
                    selectOption = this.selectOption,
                    setValue = this.setValue,
                    props = this.props,
                    isMulti = props.isMulti,
                    isRtl = props.isRtl,
                    options = props.options;
                  return {
                    clearValue: clearValue,
                    cx: cx,
                    getStyles: getStyles,
                    getValue: getValue,
                    hasValue: this.hasValue(),
                    isMulti: isMulti,
                    isRtl: isRtl,
                    options: options,
                    selectOption: selectOption,
                    selectProps: props,
                    setValue: setValue,
                    theme: this.getTheme(),
                  };
                },
              },
              {
                key: "hasValue",
                value: function () {
                  return this.state.selectValue.length > 0;
                },
              },
              {
                key: "hasOptions",
                value: function () {
                  return !!this.getFocusableOptions().length;
                },
              },
              {
                key: "isClearable",
                value: function () {
                  var _this$props7 = this.props,
                    isClearable = _this$props7.isClearable,
                    isMulti = _this$props7.isMulti;
                  return void 0 === isClearable ? isMulti : isClearable;
                },
              },
              {
                key: "isOptionDisabled",
                value: function (option, selectValue) {
                  return _isOptionDisabled(this.props, option, selectValue);
                },
              },
              {
                key: "isOptionSelected",
                value: function (option, selectValue) {
                  return _isOptionSelected(this.props, option, selectValue);
                },
              },
              {
                key: "filterOption",
                value: function (option, inputValue) {
                  return _filterOption(this.props, option, inputValue);
                },
              },
              {
                key: "formatOptionLabel",
                value: function (data, context) {
                  if ("function" == typeof this.props.formatOptionLabel) {
                    var _inputValue = this.props.inputValue,
                      _selectValue = this.state.selectValue;
                    return this.props.formatOptionLabel(data, {
                      context: context,
                      inputValue: _inputValue,
                      selectValue: _selectValue,
                    });
                  }
                  return this.getOptionLabel(data);
                },
              },
              {
                key: "formatGroupLabel",
                value: function (data) {
                  return this.props.formatGroupLabel(data);
                },
              },
              {
                key: "startListeningComposition",
                value: function () {
                  document &&
                    document.addEventListener &&
                    (document.addEventListener(
                      "compositionstart",
                      this.onCompositionStart,
                      !1
                    ),
                    document.addEventListener(
                      "compositionend",
                      this.onCompositionEnd,
                      !1
                    ));
                },
              },
              {
                key: "stopListeningComposition",
                value: function () {
                  document &&
                    document.removeEventListener &&
                    (document.removeEventListener(
                      "compositionstart",
                      this.onCompositionStart
                    ),
                    document.removeEventListener(
                      "compositionend",
                      this.onCompositionEnd
                    ));
                },
              },
              {
                key: "startListeningToTouch",
                value: function () {
                  document &&
                    document.addEventListener &&
                    (document.addEventListener(
                      "touchstart",
                      this.onTouchStart,
                      !1
                    ),
                    document.addEventListener(
                      "touchmove",
                      this.onTouchMove,
                      !1
                    ),
                    document.addEventListener("touchend", this.onTouchEnd, !1));
                },
              },
              {
                key: "stopListeningToTouch",
                value: function () {
                  document &&
                    document.removeEventListener &&
                    (document.removeEventListener(
                      "touchstart",
                      this.onTouchStart
                    ),
                    document.removeEventListener("touchmove", this.onTouchMove),
                    document.removeEventListener("touchend", this.onTouchEnd));
                },
              },
              {
                key: "renderInput",
                value: function () {
                  var _this$props8 = this.props,
                    isDisabled = _this$props8.isDisabled,
                    isSearchable = _this$props8.isSearchable,
                    inputId = _this$props8.inputId,
                    inputValue = _this$props8.inputValue,
                    tabIndex = _this$props8.tabIndex,
                    form = _this$props8.form,
                    menuIsOpen = _this$props8.menuIsOpen,
                    Input = this.getComponents().Input,
                    _this$state4 = this.state,
                    inputIsHidden = _this$state4.inputIsHidden,
                    ariaSelection = _this$state4.ariaSelection,
                    commonProps = this.commonProps,
                    id = inputId || this.getElementId("input"),
                    ariaAttributes = index._objectSpread2(
                      index._objectSpread2(
                        {
                          "aria-autocomplete": "list",
                          "aria-expanded": menuIsOpen,
                          "aria-haspopup": !0,
                          "aria-controls": this.getElementId("listbox"),
                          "aria-owns": this.getElementId("listbox"),
                          "aria-errormessage": this.props["aria-errormessage"],
                          "aria-invalid": this.props["aria-invalid"],
                          "aria-label": this.props["aria-label"],
                          "aria-labelledby": this.props["aria-labelledby"],
                          role: "combobox",
                        },
                        !isSearchable && {
                          "aria-readonly": !0,
                        }
                      ),
                      this.hasValue()
                        ? "initial-input-focus" ===
                            (null == ariaSelection
                              ? void 0
                              : ariaSelection.action) && {
                            "aria-describedby":
                              this.getElementId("live-region"),
                          }
                        : {
                            "aria-describedby":
                              this.getElementId("placeholder"),
                          }
                    );
                  return isSearchable
                    ? React__default.default.createElement(
                        Input,
                        _extends__default.default(
                          {},
                          commonProps,
                          {
                            autoCapitalize: "none",
                            autoComplete: "off",
                            autoCorrect: "off",
                            id: id,
                            innerRef: this.getInputRef,
                            isDisabled: isDisabled,
                            isHidden: inputIsHidden,
                            onBlur: this.onInputBlur,
                            onChange: this.handleInputChange,
                            onFocus: this.onInputFocus,
                            spellCheck: "false",
                            tabIndex: tabIndex,
                            form: form,
                            type: "text",
                            value: inputValue,
                          },
                          ariaAttributes
                        )
                      )
                    : React__default.default.createElement(
                        DummyInput,
                        _extends__default.default(
                          {
                            id: id,
                            innerRef: this.getInputRef,
                            onBlur: this.onInputBlur,
                            onChange: index.noop,
                            onFocus: this.onInputFocus,
                            disabled: isDisabled,
                            tabIndex: tabIndex,
                            inputMode: "none",
                            form: form,
                            value: "",
                          },
                          ariaAttributes
                        )
                      );
                },
              },
              {
                key: "renderPlaceholderOrValue",
                value: function () {
                  var _this3 = this,
                    _this$getComponents2 = this.getComponents(),
                    MultiValue = _this$getComponents2.MultiValue,
                    MultiValueContainer =
                      _this$getComponents2.MultiValueContainer,
                    MultiValueLabel = _this$getComponents2.MultiValueLabel,
                    MultiValueRemove = _this$getComponents2.MultiValueRemove,
                    SingleValue = _this$getComponents2.SingleValue,
                    Placeholder = _this$getComponents2.Placeholder,
                    commonProps = this.commonProps,
                    _this$props9 = this.props,
                    controlShouldRenderValue =
                      _this$props9.controlShouldRenderValue,
                    isDisabled = _this$props9.isDisabled,
                    isMulti = _this$props9.isMulti,
                    inputValue = _this$props9.inputValue,
                    placeholder = _this$props9.placeholder,
                    _this$state5 = this.state,
                    selectValue = _this$state5.selectValue,
                    focusedValue = _this$state5.focusedValue,
                    isFocused = _this$state5.isFocused;
                  if (!this.hasValue() || !controlShouldRenderValue)
                    return inputValue
                      ? null
                      : React__default.default.createElement(
                          Placeholder,
                          _extends__default.default({}, commonProps, {
                            key: "placeholder",
                            isDisabled: isDisabled,
                            isFocused: isFocused,
                            innerProps: {
                              id: this.getElementId("placeholder"),
                            },
                          }),
                          placeholder
                        );
                  if (isMulti)
                    return selectValue.map(function (opt, index) {
                      var isOptionFocused = opt === focusedValue,
                        key = ""
                          .concat(_this3.getOptionLabel(opt), "-")
                          .concat(_this3.getOptionValue(opt));
                      return React__default.default.createElement(
                        MultiValue,
                        _extends__default.default({}, commonProps, {
                          components: {
                            Container: MultiValueContainer,
                            Label: MultiValueLabel,
                            Remove: MultiValueRemove,
                          },
                          isFocused: isOptionFocused,
                          isDisabled: isDisabled,
                          key: key,
                          index: index,
                          removeProps: {
                            onClick: function () {
                              return _this3.removeValue(opt);
                            },
                            onTouchEnd: function () {
                              return _this3.removeValue(opt);
                            },
                            onMouseDown: function (e) {
                              e.preventDefault(), e.stopPropagation();
                            },
                          },
                          data: opt,
                        }),
                        _this3.formatOptionLabel(opt, "value")
                      );
                    });
                  if (inputValue) return null;
                  var singleValue = selectValue[0];
                  return React__default.default.createElement(
                    SingleValue,
                    _extends__default.default({}, commonProps, {
                      data: singleValue,
                      isDisabled: isDisabled,
                    }),
                    this.formatOptionLabel(singleValue, "value")
                  );
                },
              },
              {
                key: "renderClearIndicator",
                value: function () {
                  var ClearIndicator = this.getComponents().ClearIndicator,
                    commonProps = this.commonProps,
                    _this$props10 = this.props,
                    isDisabled = _this$props10.isDisabled,
                    isLoading = _this$props10.isLoading,
                    isFocused = this.state.isFocused;
                  if (
                    !this.isClearable() ||
                    !ClearIndicator ||
                    isDisabled ||
                    !this.hasValue() ||
                    isLoading
                  )
                    return null;
                  var innerProps = {
                    onMouseDown: this.onClearIndicatorMouseDown,
                    onTouchEnd: this.onClearIndicatorTouchEnd,
                    "aria-hidden": "true",
                  };
                  return React__default.default.createElement(
                    ClearIndicator,
                    _extends__default.default({}, commonProps, {
                      innerProps: innerProps,
                      isFocused: isFocused,
                    })
                  );
                },
              },
              {
                key: "renderLoadingIndicator",
                value: function () {
                  var LoadingIndicator = this.getComponents().LoadingIndicator,
                    commonProps = this.commonProps,
                    _this$props11 = this.props,
                    isDisabled = _this$props11.isDisabled,
                    isLoading = _this$props11.isLoading,
                    isFocused = this.state.isFocused;
                  if (!LoadingIndicator || !isLoading) return null;
                  return React__default.default.createElement(
                    LoadingIndicator,
                    _extends__default.default({}, commonProps, {
                      innerProps: {
                        "aria-hidden": "true",
                      },
                      isDisabled: isDisabled,
                      isFocused: isFocused,
                    })
                  );
                },
              },
              {
                key: "renderIndicatorSeparator",
                value: function () {
                  var _this$getComponents5 = this.getComponents(),
                    DropdownIndicator = _this$getComponents5.DropdownIndicator,
                    IndicatorSeparator =
                      _this$getComponents5.IndicatorSeparator;
                  if (!DropdownIndicator || !IndicatorSeparator) return null;
                  var commonProps = this.commonProps,
                    isDisabled = this.props.isDisabled,
                    isFocused = this.state.isFocused;
                  return React__default.default.createElement(
                    IndicatorSeparator,
                    _extends__default.default({}, commonProps, {
                      isDisabled: isDisabled,
                      isFocused: isFocused,
                    })
                  );
                },
              },
              {
                key: "renderDropdownIndicator",
                value: function () {
                  var DropdownIndicator =
                    this.getComponents().DropdownIndicator;
                  if (!DropdownIndicator) return null;
                  var commonProps = this.commonProps,
                    isDisabled = this.props.isDisabled,
                    isFocused = this.state.isFocused,
                    innerProps = {
                      onMouseDown: this.onDropdownIndicatorMouseDown,
                      onTouchEnd: this.onDropdownIndicatorTouchEnd,
                      "aria-hidden": "true",
                    };
                  return React__default.default.createElement(
                    DropdownIndicator,
                    _extends__default.default({}, commonProps, {
                      innerProps: innerProps,
                      isDisabled: isDisabled,
                      isFocused: isFocused,
                    })
                  );
                },
              },
              {
                key: "renderMenu",
                value: function () {
                  var _this4 = this,
                    _this$getComponents7 = this.getComponents(),
                    Group = _this$getComponents7.Group,
                    GroupHeading = _this$getComponents7.GroupHeading,
                    Menu = _this$getComponents7.Menu,
                    MenuList = _this$getComponents7.MenuList,
                    MenuPortal = _this$getComponents7.MenuPortal,
                    LoadingMessage = _this$getComponents7.LoadingMessage,
                    NoOptionsMessage = _this$getComponents7.NoOptionsMessage,
                    Option = _this$getComponents7.Option,
                    commonProps = this.commonProps,
                    focusedOption = this.state.focusedOption,
                    _this$props12 = this.props,
                    captureMenuScroll = _this$props12.captureMenuScroll,
                    inputValue = _this$props12.inputValue,
                    isLoading = _this$props12.isLoading,
                    loadingMessage = _this$props12.loadingMessage,
                    minMenuHeight = _this$props12.minMenuHeight,
                    maxMenuHeight = _this$props12.maxMenuHeight,
                    menuIsOpen = _this$props12.menuIsOpen,
                    menuPlacement = _this$props12.menuPlacement,
                    menuPosition = _this$props12.menuPosition,
                    menuPortalTarget = _this$props12.menuPortalTarget,
                    menuShouldBlockScroll = _this$props12.menuShouldBlockScroll,
                    menuShouldScrollIntoView =
                      _this$props12.menuShouldScrollIntoView,
                    noOptionsMessage = _this$props12.noOptionsMessage,
                    onMenuScrollToTop = _this$props12.onMenuScrollToTop,
                    onMenuScrollToBottom = _this$props12.onMenuScrollToBottom;
                  if (!menuIsOpen) return null;
                  var menuUI,
                    render = function (props, id) {
                      var type = props.type,
                        data = props.data,
                        isDisabled = props.isDisabled,
                        isSelected = props.isSelected,
                        label = props.label,
                        value = props.value,
                        isFocused = focusedOption === data,
                        onHover = isDisabled
                          ? void 0
                          : function () {
                              return _this4.onOptionHover(data);
                            },
                        onSelect = isDisabled
                          ? void 0
                          : function () {
                              return _this4.selectOption(data);
                            },
                        optionId = ""
                          .concat(_this4.getElementId("option"), "-")
                          .concat(id),
                        innerProps = {
                          id: optionId,
                          onClick: onSelect,
                          onMouseMove: onHover,
                          onMouseOver: onHover,
                          tabIndex: -1,
                        };
                      return React__default.default.createElement(
                        Option,
                        _extends__default.default({}, commonProps, {
                          innerProps: innerProps,
                          data: data,
                          isDisabled: isDisabled,
                          isSelected: isSelected,
                          key: optionId,
                          label: label,
                          type: type,
                          value: value,
                          isFocused: isFocused,
                          innerRef: isFocused
                            ? _this4.getFocusedOptionRef
                            : void 0,
                        }),
                        _this4.formatOptionLabel(props.data, "menu")
                      );
                    };
                  if (this.hasOptions())
                    menuUI = this.getCategorizedOptions().map(function (item) {
                      if ("group" === item.type) {
                        var _data = item.data,
                          options = item.options,
                          groupIndex = item.index,
                          groupId = ""
                            .concat(_this4.getElementId("group"), "-")
                            .concat(groupIndex),
                          headingId = "".concat(groupId, "-heading");
                        return React__default.default.createElement(
                          Group,
                          _extends__default.default({}, commonProps, {
                            key: groupId,
                            data: _data,
                            options: options,
                            Heading: GroupHeading,
                            headingProps: {
                              id: headingId,
                              data: item.data,
                            },
                            label: _this4.formatGroupLabel(item.data),
                          }),
                          item.options.map(function (option) {
                            return render(
                              option,
                              "".concat(groupIndex, "-").concat(option.index)
                            );
                          })
                        );
                      }
                      if ("option" === item.type)
                        return render(item, "".concat(item.index));
                    });
                  else if (isLoading) {
                    var message = loadingMessage({
                      inputValue: inputValue,
                    });
                    if (null === message) return null;
                    menuUI = React__default.default.createElement(
                      LoadingMessage,
                      commonProps,
                      message
                    );
                  } else {
                    var _message = noOptionsMessage({
                      inputValue: inputValue,
                    });
                    if (null === _message) return null;
                    menuUI = React__default.default.createElement(
                      NoOptionsMessage,
                      commonProps,
                      _message
                    );
                  }
                  var menuPlacementProps = {
                      minMenuHeight: minMenuHeight,
                      maxMenuHeight: maxMenuHeight,
                      menuPlacement: menuPlacement,
                      menuPosition: menuPosition,
                      menuShouldScrollIntoView: menuShouldScrollIntoView,
                    },
                    menuElement = React__default.default.createElement(
                      index.MenuPlacer,
                      _extends__default.default(
                        {},
                        commonProps,
                        menuPlacementProps
                      ),
                      function (_ref4) {
                        var ref = _ref4.ref,
                          _ref4$placerProps = _ref4.placerProps,
                          placement = _ref4$placerProps.placement,
                          maxHeight = _ref4$placerProps.maxHeight;
                        return React__default.default.createElement(
                          Menu,
                          _extends__default.default(
                            {},
                            commonProps,
                            menuPlacementProps,
                            {
                              innerRef: ref,
                              innerProps: {
                                onMouseDown: _this4.onMenuMouseDown,
                                onMouseMove: _this4.onMenuMouseMove,
                                id: _this4.getElementId("listbox"),
                              },
                              isLoading: isLoading,
                              placement: placement,
                            }
                          ),
                          React__default.default.createElement(
                            ScrollManager,
                            {
                              captureEnabled: captureMenuScroll,
                              onTopArrive: onMenuScrollToTop,
                              onBottomArrive: onMenuScrollToBottom,
                              lockEnabled: menuShouldBlockScroll,
                            },
                            function (scrollTargetRef) {
                              return React__default.default.createElement(
                                MenuList,
                                _extends__default.default({}, commonProps, {
                                  innerRef: function (instance) {
                                    _this4.getMenuListRef(instance),
                                      scrollTargetRef(instance);
                                  },
                                  isLoading: isLoading,
                                  maxHeight: maxHeight,
                                  focusedOption: focusedOption,
                                }),
                                menuUI
                              );
                            }
                          )
                        );
                      }
                    );
                  return menuPortalTarget || "fixed" === menuPosition
                    ? React__default.default.createElement(
                        MenuPortal,
                        _extends__default.default({}, commonProps, {
                          appendTo: menuPortalTarget,
                          controlElement: this.controlRef,
                          menuPlacement: menuPlacement,
                          menuPosition: menuPosition,
                        }),
                        menuElement
                      )
                    : menuElement;
                },
              },
              {
                key: "renderFormField",
                value: function () {
                  var _this5 = this,
                    _this$props13 = this.props,
                    delimiter = _this$props13.delimiter,
                    isDisabled = _this$props13.isDisabled,
                    isMulti = _this$props13.isMulti,
                    name = _this$props13.name,
                    selectValue = this.state.selectValue;
                  if (name && !isDisabled) {
                    if (isMulti) {
                      if (delimiter) {
                        var value = selectValue
                          .map(function (opt) {
                            return _this5.getOptionValue(opt);
                          })
                          .join(delimiter);
                        return React__default.default.createElement("input", {
                          name: name,
                          type: "hidden",
                          value: value,
                        });
                      }
                      var input =
                        selectValue.length > 0
                          ? selectValue.map(function (opt, i) {
                              return React__default.default.createElement(
                                "input",
                                {
                                  key: "i-".concat(i),
                                  name: name,
                                  type: "hidden",
                                  value: _this5.getOptionValue(opt),
                                }
                              );
                            })
                          : React__default.default.createElement("input", {
                              name: name,
                              type: "hidden",
                            });
                      return React__default.default.createElement(
                        "div",
                        null,
                        input
                      );
                    }
                    var _value = selectValue[0]
                      ? this.getOptionValue(selectValue[0])
                      : "";
                    return React__default.default.createElement("input", {
                      name: name,
                      type: "hidden",
                      value: _value,
                    });
                  }
                },
              },
              {
                key: "renderLiveRegion",
                value: function () {
                  var commonProps = this.commonProps,
                    _this$state6 = this.state,
                    ariaSelection = _this$state6.ariaSelection,
                    focusedOption = _this$state6.focusedOption,
                    focusedValue = _this$state6.focusedValue,
                    isFocused = _this$state6.isFocused,
                    selectValue = _this$state6.selectValue,
                    focusableOptions = this.getFocusableOptions();
                  return React__default.default.createElement(
                    LiveRegion,
                    _extends__default.default({}, commonProps, {
                      id: this.getElementId("live-region"),
                      ariaSelection: ariaSelection,
                      focusedOption: focusedOption,
                      focusedValue: focusedValue,
                      isFocused: isFocused,
                      selectValue: selectValue,
                      focusableOptions: focusableOptions,
                    })
                  );
                },
              },
              {
                key: "render",
                value: function () {
                  var _this$getComponents8 = this.getComponents(),
                    Control = _this$getComponents8.Control,
                    IndicatorsContainer =
                      _this$getComponents8.IndicatorsContainer,
                    SelectContainer = _this$getComponents8.SelectContainer,
                    ValueContainer = _this$getComponents8.ValueContainer,
                    _this$props14 = this.props,
                    className = _this$props14.className,
                    id = _this$props14.id,
                    isDisabled = _this$props14.isDisabled,
                    menuIsOpen = _this$props14.menuIsOpen,
                    isFocused = this.state.isFocused,
                    commonProps = (this.commonProps = this.getCommonProps());
                  return React__default.default.createElement(
                    SelectContainer,
                    _extends__default.default({}, commonProps, {
                      className: className,
                      innerProps: {
                        id: id,
                        onKeyDown: this.onKeyDown,
                      },
                      isDisabled: isDisabled,
                      isFocused: isFocused,
                    }),
                    this.renderLiveRegion(),
                    React__default.default.createElement(
                      Control,
                      _extends__default.default({}, commonProps, {
                        innerRef: this.getControlRef,
                        innerProps: {
                          onMouseDown: this.onControlMouseDown,
                          onTouchEnd: this.onControlTouchEnd,
                        },
                        isDisabled: isDisabled,
                        isFocused: isFocused,
                        menuIsOpen: menuIsOpen,
                      }),
                      React__default.default.createElement(
                        ValueContainer,
                        _extends__default.default({}, commonProps, {
                          isDisabled: isDisabled,
                        }),
                        this.renderPlaceholderOrValue(),
                        this.renderInput()
                      ),
                      React__default.default.createElement(
                        IndicatorsContainer,
                        _extends__default.default({}, commonProps, {
                          isDisabled: isDisabled,
                        }),
                        this.renderClearIndicator(),
                        this.renderLoadingIndicator(),
                        this.renderIndicatorSeparator(),
                        this.renderDropdownIndicator()
                      )
                    ),
                    this.renderMenu(),
                    this.renderFormField()
                  );
                },
              },
            ],
            [
              {
                key: "getDerivedStateFromProps",
                value: function (props, state) {
                  var prevProps = state.prevProps,
                    clearFocusValueOnUpdate = state.clearFocusValueOnUpdate,
                    inputIsHiddenAfterUpdate = state.inputIsHiddenAfterUpdate,
                    ariaSelection = state.ariaSelection,
                    isFocused = state.isFocused,
                    prevWasFocused = state.prevWasFocused,
                    options = props.options,
                    value = props.value,
                    menuIsOpen = props.menuIsOpen,
                    inputValue = props.inputValue,
                    isMulti = props.isMulti,
                    selectValue = index.cleanValue(value),
                    newMenuOptionsState = {};
                  if (
                    prevProps &&
                    (value !== prevProps.value ||
                      options !== prevProps.options ||
                      menuIsOpen !== prevProps.menuIsOpen ||
                      inputValue !== prevProps.inputValue)
                  ) {
                    var focusableOptions = menuIsOpen
                        ? buildFocusableOptions(props, selectValue)
                        : [],
                      focusedValue = clearFocusValueOnUpdate
                        ? getNextFocusedValue(state, selectValue)
                        : null;
                    newMenuOptionsState = {
                      selectValue: selectValue,
                      focusedOption: getNextFocusedOption(
                        state,
                        focusableOptions
                      ),
                      focusedValue: focusedValue,
                      clearFocusValueOnUpdate: !1,
                    };
                  }
                  var newInputIsHiddenState =
                      null != inputIsHiddenAfterUpdate && props !== prevProps
                        ? {
                            inputIsHidden: inputIsHiddenAfterUpdate,
                            inputIsHiddenAfterUpdate: void 0,
                          }
                        : {},
                    newAriaSelection = ariaSelection,
                    hasKeptFocus = isFocused && prevWasFocused;
                  return (
                    isFocused &&
                      !hasKeptFocus &&
                      ((newAriaSelection = {
                        value: index.valueTernary(
                          isMulti,
                          selectValue,
                          selectValue[0] || null
                        ),
                        options: selectValue,
                        action: "initial-input-focus",
                      }),
                      (hasKeptFocus = !prevWasFocused)),
                    "initial-input-focus" ===
                      (null == ariaSelection ? void 0 : ariaSelection.action) &&
                      (newAriaSelection = null),
                    index._objectSpread2(
                      index._objectSpread2(
                        index._objectSpread2({}, newMenuOptionsState),
                        newInputIsHiddenState
                      ),
                      {},
                      {
                        prevProps: props,
                        ariaSelection: newAriaSelection,
                        prevWasFocused: hasKeptFocus,
                      }
                    )
                  );
                },
              },
            ]
          ),
          Select
        );
      })(React.Component);

    (Select.defaultProps = defaultProps),
      (exports.Select = Select),
      (exports.createFilter = createFilter),
      (exports.defaultProps = defaultProps),
      (exports.defaultTheme = defaultTheme),
      (exports.getOptionLabel = getOptionLabel$1),
      (exports.getOptionValue = getOptionValue$1),
      (exports.mergeStyles = mergeStyles);

    /***/
  },

  /***/ 81983: /***/ (
    __unused_webpack_module,
    exports,
    __webpack_require__
  ) => {
    "use strict";

    var _extends = __webpack_require__(67154),
      react = __webpack_require__(14264),
      _taggedTemplateLiteral = __webpack_require__(28655),
      _objectWithoutProperties = __webpack_require__(6479),
      _typeof = __webpack_require__(50008),
      _classCallCheck = __webpack_require__(34575),
      _createClass = __webpack_require__(93913),
      _inherits = __webpack_require__(2205),
      _defineProperty$1 = __webpack_require__(59713),
      React = __webpack_require__(67294),
      reactDom = __webpack_require__(73935);

    function _interopDefault(e) {
      return e && e.__esModule
        ? e
        : {
            default: e,
          };
    }

    var _extends__default = _interopDefault(_extends),
      _taggedTemplateLiteral__default = _interopDefault(_taggedTemplateLiteral),
      _objectWithoutProperties__default = _interopDefault(
        _objectWithoutProperties
      ),
      _typeof__default = _interopDefault(_typeof),
      _classCallCheck__default = _interopDefault(_classCallCheck),
      _createClass__default = _interopDefault(_createClass),
      _inherits__default = _interopDefault(_inherits),
      _defineProperty__default = _interopDefault(_defineProperty$1);

    function _defineProperty(obj, key, value) {
      return (
        key in obj
          ? Object.defineProperty(obj, key, {
              value: value,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (obj[key] = value),
        obj
      );
    }

    function ownKeys(object, enumerableOnly) {
      var keys = Object.keys(object);
      if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        enumerableOnly &&
          (symbols = symbols.filter(function (sym) {
            return Object.getOwnPropertyDescriptor(object, sym).enumerable;
          })),
          keys.push.apply(keys, symbols);
      }
      return keys;
    }

    function _objectSpread2(target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = null != arguments[i] ? arguments[i] : {};
        i % 2
          ? ownKeys(Object(source), !0).forEach(function (key) {
              _defineProperty(target, key, source[key]);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(
              target,
              Object.getOwnPropertyDescriptors(source)
            )
          : ownKeys(Object(source)).forEach(function (key) {
              Object.defineProperty(
                target,
                key,
                Object.getOwnPropertyDescriptor(source, key)
              );
            });
      }
      return target;
    }

    function _getPrototypeOf(o) {
      return (_getPrototypeOf = Object.setPrototypeOf
        ? Object.getPrototypeOf
        : function (o) {
            return o.__proto__ || Object.getPrototypeOf(o);
          })(o);
    }

    function _isNativeReflectConstruct() {
      if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
      if (Reflect.construct.sham) return !1;
      if ("function" == typeof Proxy) return !0;
      try {
        return (
          Boolean.prototype.valueOf.call(
            Reflect.construct(Boolean, [], function () {})
          ),
          !0
        );
      } catch (e) {
        return !1;
      }
    }

    function _assertThisInitialized(self) {
      if (void 0 === self)
        throw new ReferenceError(
          "this hasn't been initialised - super() hasn't been called"
        );
      return self;
    }

    function _possibleConstructorReturn(self, call) {
      return !call || ("object" != typeof call && "function" != typeof call)
        ? _assertThisInitialized(self)
        : call;
    }

    function _createSuper(Derived) {
      var hasNativeReflectConstruct = _isNativeReflectConstruct();
      return function () {
        var result,
          Super = _getPrototypeOf(Derived);
        if (hasNativeReflectConstruct) {
          var NewTarget = _getPrototypeOf(this).constructor;
          result = Reflect.construct(Super, arguments, NewTarget);
        } else result = Super.apply(this, arguments);
        return _possibleConstructorReturn(this, result);
      };
    }

    var _excluded$3 = [
        "className",
        "clearValue",
        "cx",
        "getStyles",
        "getValue",
        "hasValue",
        "isMulti",
        "isRtl",
        "options",
        "selectOption",
        "selectProps",
        "setValue",
        "theme",
      ],
      noop = function () {};

    function applyPrefixToName(prefix, name) {
      return name
        ? "-" === name[0]
          ? prefix + name
          : prefix + "__" + name
        : prefix;
    }

    function classNames(prefix, state, className) {
      var arr = [className];
      if (state && prefix)
        for (var key in state)
          state.hasOwnProperty(key) &&
            state[key] &&
            arr.push("".concat(applyPrefixToName(prefix, key)));
      return arr
        .filter(function (i) {
          return i;
        })
        .map(function (i) {
          return String(i).trim();
        })
        .join(" ");
    }

    var cleanValue = function (value) {
        return isArray(value)
          ? value.filter(Boolean)
          : "object" === _typeof__default.default(value) && null !== value
          ? [value]
          : [];
      },
      cleanCommonProps = function (props) {
        return (
          props.className,
          props.clearValue,
          props.cx,
          props.getStyles,
          props.getValue,
          props.hasValue,
          props.isMulti,
          props.isRtl,
          props.options,
          props.selectOption,
          props.selectProps,
          props.setValue,
          props.theme,
          _objectSpread2(
            {},
            _objectWithoutProperties__default.default(props, _excluded$3)
          )
        );
      };

    function handleInputChange(inputValue, actionMeta, onInputChange) {
      if (onInputChange) {
        var _newValue = onInputChange(inputValue, actionMeta);
        if ("string" == typeof _newValue) return _newValue;
      }
      return inputValue;
    }

    function isDocumentElement(el) {
      return [document.documentElement, document.body, window].indexOf(el) > -1;
    }

    function getScrollTop(el) {
      return isDocumentElement(el) ? window.pageYOffset : el.scrollTop;
    }

    function scrollTo(el, top) {
      isDocumentElement(el) ? window.scrollTo(0, top) : (el.scrollTop = top);
    }

    function getScrollParent(element) {
      var style = getComputedStyle(element),
        excludeStaticParent = "absolute" === style.position,
        overflowRx = /(auto|scroll)/;
      if ("fixed" === style.position) return document.documentElement;
      for (var parent = element; (parent = parent.parentElement); )
        if (
          ((style = getComputedStyle(parent)),
          (!excludeStaticParent || "static" !== style.position) &&
            overflowRx.test(style.overflow + style.overflowY + style.overflowX))
        )
          return parent;
      return document.documentElement;
    }

    function easeOutCubic(t, b, c, d) {
      return c * ((t = t / d - 1) * t * t + 1) + b;
    }

    function animatedScrollTo(element, to) {
      var duration =
          arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 200,
        callback =
          arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : noop,
        start = getScrollTop(element),
        change = to - start,
        increment = 10,
        currentTime = 0;
      function animateScroll() {
        var val = easeOutCubic(
          (currentTime += increment),
          start,
          change,
          duration
        );
        scrollTo(element, val),
          currentTime < duration
            ? window.requestAnimationFrame(animateScroll)
            : callback(element);
      }
      animateScroll();
    }

    function scrollIntoView(menuEl, focusedEl) {
      var menuRect = menuEl.getBoundingClientRect(),
        focusedRect = focusedEl.getBoundingClientRect(),
        overScroll = focusedEl.offsetHeight / 3;
      focusedRect.bottom + overScroll > menuRect.bottom
        ? scrollTo(
            menuEl,
            Math.min(
              focusedEl.offsetTop +
                focusedEl.clientHeight -
                menuEl.offsetHeight +
                overScroll,
              menuEl.scrollHeight
            )
          )
        : focusedRect.top - overScroll < menuRect.top &&
          scrollTo(menuEl, Math.max(focusedEl.offsetTop - overScroll, 0));
    }

    function getBoundingClientObj(element) {
      var rect = element.getBoundingClientRect();
      return {
        bottom: rect.bottom,
        height: rect.height,
        left: rect.left,
        right: rect.right,
        top: rect.top,
        width: rect.width,
      };
    }

    function isTouchCapable() {
      try {
        return document.createEvent("TouchEvent"), !0;
      } catch (e) {
        return !1;
      }
    }

    function isMobileDevice() {
      try {
        return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
          navigator.userAgent
        );
      } catch (e) {
        return !1;
      }
    }

    var passiveOptionAccessed = !1,
      options = {
        get passive() {
          return (passiveOptionAccessed = !0);
        },
      },
      w = "undefined" != typeof window ? window : {};

    w.addEventListener &&
      w.removeEventListener &&
      (w.addEventListener("p", noop, options),
      w.removeEventListener("p", noop, !1));

    var supportsPassiveEvents = passiveOptionAccessed;

    function notNullish(item) {
      return null != item;
    }

    function isArray(arg) {
      return Array.isArray(arg);
    }

    function valueTernary(isMulti, multiValue, singleValue) {
      return isMulti ? multiValue : singleValue;
    }

    function singleValueAsValue(singleValue) {
      return singleValue;
    }

    function multiValueAsValue(multiValue) {
      return multiValue;
    }

    function getMenuPlacement(_ref) {
      var maxHeight = _ref.maxHeight,
        menuEl = _ref.menuEl,
        minHeight = _ref.minHeight,
        placement = _ref.placement,
        shouldScroll = _ref.shouldScroll,
        isFixedPosition = _ref.isFixedPosition,
        spacing = _ref.theme.spacing,
        scrollParent = getScrollParent(menuEl),
        defaultState = {
          placement: "bottom",
          maxHeight: maxHeight,
        };
      if (!menuEl || !menuEl.offsetParent) return defaultState;
      var scrollHeight = scrollParent.getBoundingClientRect().height,
        _menuEl$getBoundingCl = menuEl.getBoundingClientRect(),
        menuBottom = _menuEl$getBoundingCl.bottom,
        menuHeight = _menuEl$getBoundingCl.height,
        menuTop = _menuEl$getBoundingCl.top,
        containerTop = menuEl.offsetParent.getBoundingClientRect().top,
        viewHeight = window.innerHeight,
        scrollTop = getScrollTop(scrollParent),
        marginBottom = parseInt(getComputedStyle(menuEl).marginBottom, 10),
        marginTop = parseInt(getComputedStyle(menuEl).marginTop, 10),
        viewSpaceAbove = containerTop - marginTop,
        viewSpaceBelow = viewHeight - menuTop,
        scrollSpaceAbove = viewSpaceAbove + scrollTop,
        scrollSpaceBelow = scrollHeight - scrollTop - menuTop,
        scrollDown = menuBottom - viewHeight + scrollTop + marginBottom,
        scrollUp = scrollTop + menuTop - marginTop;
      switch (placement) {
        case "auto":
        case "bottom":
          if (viewSpaceBelow >= menuHeight)
            return {
              placement: "bottom",
              maxHeight: maxHeight,
            };
          if (scrollSpaceBelow >= menuHeight && !isFixedPosition)
            return (
              shouldScroll && animatedScrollTo(scrollParent, scrollDown, 160),
              {
                placement: "bottom",
                maxHeight: maxHeight,
              }
            );
          if (
            (!isFixedPosition && scrollSpaceBelow >= minHeight) ||
            (isFixedPosition && viewSpaceBelow >= minHeight)
          )
            return (
              shouldScroll && animatedScrollTo(scrollParent, scrollDown, 160),
              {
                placement: "bottom",
                maxHeight: isFixedPosition
                  ? viewSpaceBelow - marginBottom
                  : scrollSpaceBelow - marginBottom,
              }
            );
          if ("auto" === placement || isFixedPosition) {
            var _constrainedHeight = maxHeight,
              spaceAbove = isFixedPosition ? viewSpaceAbove : scrollSpaceAbove;
            return (
              spaceAbove >= minHeight &&
                (_constrainedHeight = Math.min(
                  spaceAbove - marginBottom - spacing.controlHeight,
                  maxHeight
                )),
              {
                placement: "top",
                maxHeight: _constrainedHeight,
              }
            );
          }
          if ("bottom" === placement)
            return (
              shouldScroll && scrollTo(scrollParent, scrollDown),
              {
                placement: "bottom",
                maxHeight: maxHeight,
              }
            );
          break;

        case "top":
          if (viewSpaceAbove >= menuHeight)
            return {
              placement: "top",
              maxHeight: maxHeight,
            };
          if (scrollSpaceAbove >= menuHeight && !isFixedPosition)
            return (
              shouldScroll && animatedScrollTo(scrollParent, scrollUp, 160),
              {
                placement: "top",
                maxHeight: maxHeight,
              }
            );
          if (
            (!isFixedPosition && scrollSpaceAbove >= minHeight) ||
            (isFixedPosition && viewSpaceAbove >= minHeight)
          ) {
            var _constrainedHeight2 = maxHeight;
            return (
              ((!isFixedPosition && scrollSpaceAbove >= minHeight) ||
                (isFixedPosition && viewSpaceAbove >= minHeight)) &&
                (_constrainedHeight2 = isFixedPosition
                  ? viewSpaceAbove - marginTop
                  : scrollSpaceAbove - marginTop),
              shouldScroll && animatedScrollTo(scrollParent, scrollUp, 160),
              {
                placement: "top",
                maxHeight: _constrainedHeight2,
              }
            );
          }
          return {
            placement: "bottom",
            maxHeight: maxHeight,
          };

        default:
          throw new Error(
            'Invalid placement provided "'.concat(placement, '".')
          );
      }
      return defaultState;
    }

    function alignToControl(placement) {
      return placement
        ? {
            bottom: "top",
            top: "bottom",
          }[placement]
        : "bottom";
    }

    var coercePlacement = function (p) {
        return "auto" === p ? "bottom" : p;
      },
      menuCSS = function (_ref2) {
        var _ref3,
          placement = _ref2.placement,
          _ref2$theme = _ref2.theme,
          borderRadius = _ref2$theme.borderRadius,
          spacing = _ref2$theme.spacing,
          colors = _ref2$theme.colors;
        return (
          (_ref3 = {
            label: "menu",
          }),
          _defineProperty__default.default(
            _ref3,
            alignToControl(placement),
            "100%"
          ),
          _defineProperty__default.default(
            _ref3,
            "backgroundColor",
            colors.neutral0
          ),
          _defineProperty__default.default(_ref3, "borderRadius", borderRadius),
          _defineProperty__default.default(
            _ref3,
            "boxShadow",
            "0 0 0 1px hsla(0, 0%, 0%, 0.1), 0 4px 11px hsla(0, 0%, 0%, 0.1)"
          ),
          _defineProperty__default.default(
            _ref3,
            "marginBottom",
            spacing.menuGutter
          ),
          _defineProperty__default.default(
            _ref3,
            "marginTop",
            spacing.menuGutter
          ),
          _defineProperty__default.default(_ref3, "position", "absolute"),
          _defineProperty__default.default(_ref3, "width", "100%"),
          _defineProperty__default.default(_ref3, "zIndex", 1),
          _ref3
        );
      },
      PortalPlacementContext = React.createContext({
        getPortalPlacement: null,
      }),
      MenuPlacer = (function (_Component) {
        _inherits__default.default(MenuPlacer, _Component);
        var _super = _createSuper(MenuPlacer);
        function MenuPlacer() {
          var _this;
          _classCallCheck__default.default(this, MenuPlacer);
          for (
            var _len = arguments.length, args = new Array(_len), _key = 0;
            _key < _len;
            _key++
          )
            args[_key] = arguments[_key];
          return (
            ((_this = _super.call.apply(_super, [this].concat(args))).state = {
              maxHeight: _this.props.maxMenuHeight,
              placement: null,
            }),
            (_this.context = void 0),
            (_this.getPlacement = function (ref) {
              var _this$props = _this.props,
                minMenuHeight = _this$props.minMenuHeight,
                maxMenuHeight = _this$props.maxMenuHeight,
                menuPlacement = _this$props.menuPlacement,
                menuPosition = _this$props.menuPosition,
                menuShouldScrollIntoView = _this$props.menuShouldScrollIntoView,
                theme = _this$props.theme;
              if (ref) {
                var isFixedPosition = "fixed" === menuPosition,
                  state = getMenuPlacement({
                    maxHeight: maxMenuHeight,
                    menuEl: ref,
                    minHeight: minMenuHeight,
                    placement: menuPlacement,
                    shouldScroll: menuShouldScrollIntoView && !isFixedPosition,
                    isFixedPosition: isFixedPosition,
                    theme: theme,
                  }),
                  getPortalPlacement = _this.context.getPortalPlacement;
                getPortalPlacement && getPortalPlacement(state),
                  _this.setState(state);
              }
            }),
            (_this.getUpdatedProps = function () {
              var menuPlacement = _this.props.menuPlacement,
                placement =
                  _this.state.placement || coercePlacement(menuPlacement);
              return _objectSpread2(
                _objectSpread2({}, _this.props),
                {},
                {
                  placement: placement,
                  maxHeight: _this.state.maxHeight,
                }
              );
            }),
            _this
          );
        }
        return (
          _createClass__default.default(MenuPlacer, [
            {
              key: "render",
              value: function () {
                return (0, this.props.children)({
                  ref: this.getPlacement,
                  placerProps: this.getUpdatedProps(),
                });
              },
            },
          ]),
          MenuPlacer
        );
      })(React.Component);

    MenuPlacer.contextType = PortalPlacementContext;

    var Menu = function (props) {
        var children = props.children,
          className = props.className,
          cx = props.cx,
          getStyles = props.getStyles,
          innerRef = props.innerRef,
          innerProps = props.innerProps;
        return react.jsx(
          "div",
          _extends__default.default(
            {
              css: getStyles("menu", props),
              className: cx(
                {
                  menu: !0,
                },
                className
              ),
              ref: innerRef,
            },
            innerProps
          ),
          children
        );
      },
      menuListCSS = function (_ref4) {
        var maxHeight = _ref4.maxHeight,
          baseUnit = _ref4.theme.spacing.baseUnit;
        return {
          maxHeight: maxHeight,
          overflowY: "auto",
          paddingBottom: baseUnit,
          paddingTop: baseUnit,
          position: "relative",
          WebkitOverflowScrolling: "touch",
        };
      },
      MenuList = function (props) {
        var children = props.children,
          className = props.className,
          cx = props.cx,
          getStyles = props.getStyles,
          innerProps = props.innerProps,
          innerRef = props.innerRef,
          isMulti = props.isMulti;
        return react.jsx(
          "div",
          _extends__default.default(
            {
              css: getStyles("menuList", props),
              className: cx(
                {
                  "menu-list": !0,
                  "menu-list--is-multi": isMulti,
                },
                className
              ),
              ref: innerRef,
            },
            innerProps
          ),
          children
        );
      },
      noticeCSS = function (_ref5) {
        var _ref5$theme = _ref5.theme,
          baseUnit = _ref5$theme.spacing.baseUnit;
        return {
          color: _ref5$theme.colors.neutral40,
          padding: "".concat(2 * baseUnit, "px ").concat(3 * baseUnit, "px"),
          textAlign: "center",
        };
      },
      noOptionsMessageCSS = noticeCSS,
      loadingMessageCSS = noticeCSS,
      NoOptionsMessage = function (props) {
        var children = props.children,
          className = props.className,
          cx = props.cx,
          getStyles = props.getStyles,
          innerProps = props.innerProps;
        return react.jsx(
          "div",
          _extends__default.default(
            {
              css: getStyles("noOptionsMessage", props),
              className: cx(
                {
                  "menu-notice": !0,
                  "menu-notice--no-options": !0,
                },
                className
              ),
            },
            innerProps
          ),
          children
        );
      };

    NoOptionsMessage.defaultProps = {
      children: "No options",
    };

    var LoadingMessage = function (props) {
      var children = props.children,
        className = props.className,
        cx = props.cx,
        getStyles = props.getStyles,
        innerProps = props.innerProps;
      return react.jsx(
        "div",
        _extends__default.default(
          {
            css: getStyles("loadingMessage", props),
            className: cx(
              {
                "menu-notice": !0,
                "menu-notice--loading": !0,
              },
              className
            ),
          },
          innerProps
        ),
        children
      );
    };

    LoadingMessage.defaultProps = {
      children: "Loading...",
    };

    var _templateObject,
      menuPortalCSS = function (_ref6) {
        var rect = _ref6.rect,
          offset = _ref6.offset,
          position = _ref6.position;
        return {
          left: rect.left,
          position: position,
          top: offset,
          width: rect.width,
          zIndex: 1,
        };
      },
      MenuPortal = (function (_Component2) {
        _inherits__default.default(MenuPortal, _Component2);
        var _super2 = _createSuper(MenuPortal);
        function MenuPortal() {
          var _this2;
          _classCallCheck__default.default(this, MenuPortal);
          for (
            var _len2 = arguments.length, args = new Array(_len2), _key2 = 0;
            _key2 < _len2;
            _key2++
          )
            args[_key2] = arguments[_key2];
          return (
            ((_this2 = _super2.call.apply(_super2, [this].concat(args))).state =
              {
                placement: null,
              }),
            (_this2.getPortalPlacement = function (_ref7) {
              var placement = _ref7.placement;
              placement !== coercePlacement(_this2.props.menuPlacement) &&
                _this2.setState({
                  placement: placement,
                });
            }),
            _this2
          );
        }
        return (
          _createClass__default.default(MenuPortal, [
            {
              key: "render",
              value: function () {
                var _this$props2 = this.props,
                  appendTo = _this$props2.appendTo,
                  children = _this$props2.children,
                  className = _this$props2.className,
                  controlElement = _this$props2.controlElement,
                  cx = _this$props2.cx,
                  innerProps = _this$props2.innerProps,
                  menuPlacement = _this$props2.menuPlacement,
                  position = _this$props2.menuPosition,
                  getStyles = _this$props2.getStyles,
                  isFixed = "fixed" === position;
                if ((!appendTo && !isFixed) || !controlElement) return null;
                var placement =
                    this.state.placement || coercePlacement(menuPlacement),
                  rect = getBoundingClientObj(controlElement),
                  scrollDistance = isFixed ? 0 : window.pageYOffset,
                  state = {
                    offset: rect[placement] + scrollDistance,
                    position: position,
                    rect: rect,
                  },
                  menuWrapper = react.jsx(
                    "div",
                    _extends__default.default(
                      {
                        css: getStyles("menuPortal", state),
                        className: cx(
                          {
                            "menu-portal": !0,
                          },
                          className
                        ),
                      },
                      innerProps
                    ),
                    children
                  );
                return react.jsx(
                  PortalPlacementContext.Provider,
                  {
                    value: {
                      getPortalPlacement: this.getPortalPlacement,
                    },
                  },
                  appendTo
                    ? reactDom.createPortal(menuWrapper, appendTo)
                    : menuWrapper
                );
              },
            },
          ]),
          MenuPortal
        );
      })(React.Component),
      containerCSS = function (_ref) {
        var isDisabled = _ref.isDisabled;
        return {
          label: "container",
          direction: _ref.isRtl ? "rtl" : void 0,
          pointerEvents: isDisabled ? "none" : void 0,
          position: "relative",
        };
      },
      SelectContainer = function (props) {
        var children = props.children,
          className = props.className,
          cx = props.cx,
          getStyles = props.getStyles,
          innerProps = props.innerProps,
          isDisabled = props.isDisabled,
          isRtl = props.isRtl;
        return react.jsx(
          "div",
          _extends__default.default(
            {
              css: getStyles("container", props),
              className: cx(
                {
                  "--is-disabled": isDisabled,
                  "--is-rtl": isRtl,
                },
                className
              ),
            },
            innerProps
          ),
          children
        );
      },
      valueContainerCSS = function (_ref2) {
        var spacing = _ref2.theme.spacing,
          isMulti = _ref2.isMulti,
          hasValue = _ref2.hasValue,
          controlShouldRenderValue = _ref2.selectProps.controlShouldRenderValue;
        return {
          alignItems: "center",
          display:
            isMulti && hasValue && controlShouldRenderValue ? "flex" : "grid",
          flex: 1,
          flexWrap: "wrap",
          padding: ""
            .concat(spacing.baseUnit / 2, "px ")
            .concat(2 * spacing.baseUnit, "px"),
          WebkitOverflowScrolling: "touch",
          position: "relative",
          overflow: "hidden",
        };
      },
      ValueContainer = function (props) {
        var children = props.children,
          className = props.className,
          cx = props.cx,
          innerProps = props.innerProps,
          isMulti = props.isMulti,
          getStyles = props.getStyles,
          hasValue = props.hasValue;
        return react.jsx(
          "div",
          _extends__default.default(
            {
              css: getStyles("valueContainer", props),
              className: cx(
                {
                  "value-container": !0,
                  "value-container--is-multi": isMulti,
                  "value-container--has-value": hasValue,
                },
                className
              ),
            },
            innerProps
          ),
          children
        );
      },
      indicatorsContainerCSS = function () {
        return {
          alignItems: "center",
          alignSelf: "stretch",
          display: "flex",
          flexShrink: 0,
        };
      },
      IndicatorsContainer = function (props) {
        var children = props.children,
          className = props.className,
          cx = props.cx,
          innerProps = props.innerProps,
          getStyles = props.getStyles;
        return react.jsx(
          "div",
          _extends__default.default(
            {
              css: getStyles("indicatorsContainer", props),
              className: cx(
                {
                  indicators: !0,
                },
                className
              ),
            },
            innerProps
          ),
          children
        );
      },
      _excluded$2 = ["size"];

    function _EMOTION_STRINGIFIED_CSS_ERROR__() {
      return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop).";
    }

    var _ref2 = {
        name: "8mmkcg",
        styles:
          "display:inline-block;fill:currentColor;line-height:1;stroke:currentColor;stroke-width:0",
      },
      Svg = function (_ref) {
        var size = _ref.size,
          props = _objectWithoutProperties__default.default(_ref, _excluded$2);
        return react.jsx(
          "svg",
          _extends__default.default(
            {
              height: size,
              width: size,
              viewBox: "0 0 20 20",
              "aria-hidden": "true",
              focusable: "false",
              css: _ref2,
            },
            props
          )
        );
      },
      CrossIcon = function (props) {
        return react.jsx(
          Svg,
          _extends__default.default(
            {
              size: 20,
            },
            props
          ),
          react.jsx("path", {
            d: "M14.348 14.849c-0.469 0.469-1.229 0.469-1.697 0l-2.651-3.030-2.651 3.029c-0.469 0.469-1.229 0.469-1.697 0-0.469-0.469-0.469-1.229 0-1.697l2.758-3.15-2.759-3.152c-0.469-0.469-0.469-1.228 0-1.697s1.228-0.469 1.697 0l2.652 3.031 2.651-3.031c0.469-0.469 1.228-0.469 1.697 0s0.469 1.229 0 1.697l-2.758 3.152 2.758 3.15c0.469 0.469 0.469 1.229 0 1.698z",
          })
        );
      },
      DownChevron = function (props) {
        return react.jsx(
          Svg,
          _extends__default.default(
            {
              size: 20,
            },
            props
          ),
          react.jsx("path", {
            d: "M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747 3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0 1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502 0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0 0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z",
          })
        );
      },
      baseCSS = function (_ref3) {
        var isFocused = _ref3.isFocused,
          _ref3$theme = _ref3.theme,
          baseUnit = _ref3$theme.spacing.baseUnit,
          colors = _ref3$theme.colors;
        return {
          label: "indicatorContainer",
          color: isFocused ? colors.neutral60 : colors.neutral20,
          display: "flex",
          padding: 2 * baseUnit,
          transition: "color 150ms",
          ":hover": {
            color: isFocused ? colors.neutral80 : colors.neutral40,
          },
        };
      },
      dropdownIndicatorCSS = baseCSS,
      DropdownIndicator = function (props) {
        var children = props.children,
          className = props.className,
          cx = props.cx,
          getStyles = props.getStyles,
          innerProps = props.innerProps;
        return react.jsx(
          "div",
          _extends__default.default(
            {
              css: getStyles("dropdownIndicator", props),
              className: cx(
                {
                  indicator: !0,
                  "dropdown-indicator": !0,
                },
                className
              ),
            },
            innerProps
          ),
          children || react.jsx(DownChevron, null)
        );
      },
      clearIndicatorCSS = baseCSS,
      ClearIndicator = function (props) {
        var children = props.children,
          className = props.className,
          cx = props.cx,
          getStyles = props.getStyles,
          innerProps = props.innerProps;
        return react.jsx(
          "div",
          _extends__default.default(
            {
              css: getStyles("clearIndicator", props),
              className: cx(
                {
                  indicator: !0,
                  "clear-indicator": !0,
                },
                className
              ),
            },
            innerProps
          ),
          children || react.jsx(CrossIcon, null)
        );
      },
      indicatorSeparatorCSS = function (_ref4) {
        var isDisabled = _ref4.isDisabled,
          _ref4$theme = _ref4.theme,
          baseUnit = _ref4$theme.spacing.baseUnit,
          colors = _ref4$theme.colors;
        return {
          label: "indicatorSeparator",
          alignSelf: "stretch",
          backgroundColor: isDisabled ? colors.neutral10 : colors.neutral20,
          marginBottom: 2 * baseUnit,
          marginTop: 2 * baseUnit,
          width: 1,
        };
      },
      IndicatorSeparator = function (props) {
        var className = props.className,
          cx = props.cx,
          getStyles = props.getStyles,
          innerProps = props.innerProps;
        return react.jsx(
          "span",
          _extends__default.default({}, innerProps, {
            css: getStyles("indicatorSeparator", props),
            className: cx(
              {
                "indicator-separator": !0,
              },
              className
            ),
          })
        );
      },
      loadingDotAnimations = react.keyframes(
        _templateObject ||
          (_templateObject = _taggedTemplateLiteral__default.default([
            "\n  0%, 80%, 100% { opacity: 0; }\n  40% { opacity: 1; }\n",
          ]))
      ),
      loadingIndicatorCSS = function (_ref5) {
        var isFocused = _ref5.isFocused,
          size = _ref5.size,
          _ref5$theme = _ref5.theme,
          colors = _ref5$theme.colors,
          baseUnit = _ref5$theme.spacing.baseUnit;
        return {
          label: "loadingIndicator",
          color: isFocused ? colors.neutral60 : colors.neutral20,
          display: "flex",
          padding: 2 * baseUnit,
          transition: "color 150ms",
          alignSelf: "center",
          fontSize: size,
          lineHeight: 1,
          marginRight: size,
          textAlign: "center",
          verticalAlign: "middle",
        };
      },
      LoadingDot = function (_ref6) {
        var delay = _ref6.delay,
          offset = _ref6.offset;
        return react.jsx("span", {
          css: react.css(
            {
              animation: ""
                .concat(loadingDotAnimations, " 1s ease-in-out ")
                .concat(delay, "ms infinite;"),
              backgroundColor: "currentColor",
              borderRadius: "1em",
              display: "inline-block",
              marginLeft: offset ? "1em" : void 0,
              height: "1em",
              verticalAlign: "top",
              width: "1em",
            },
            "",
            ""
          ),
        });
      },
      LoadingIndicator = function (props) {
        var className = props.className,
          cx = props.cx,
          getStyles = props.getStyles,
          innerProps = props.innerProps,
          isRtl = props.isRtl;
        return react.jsx(
          "div",
          _extends__default.default(
            {
              css: getStyles("loadingIndicator", props),
              className: cx(
                {
                  indicator: !0,
                  "loading-indicator": !0,
                },
                className
              ),
            },
            innerProps
          ),
          react.jsx(LoadingDot, {
            delay: 0,
            offset: isRtl,
          }),
          react.jsx(LoadingDot, {
            delay: 160,
            offset: !0,
          }),
          react.jsx(LoadingDot, {
            delay: 320,
            offset: !isRtl,
          })
        );
      };

    LoadingIndicator.defaultProps = {
      size: 4,
    };

    var css$1 = function (_ref) {
        var isDisabled = _ref.isDisabled,
          isFocused = _ref.isFocused,
          _ref$theme = _ref.theme,
          colors = _ref$theme.colors,
          borderRadius = _ref$theme.borderRadius,
          spacing = _ref$theme.spacing;
        return {
          label: "control",
          alignItems: "center",
          backgroundColor: isDisabled ? colors.neutral5 : colors.neutral0,
          borderColor: isDisabled
            ? colors.neutral10
            : isFocused
            ? colors.primary
            : colors.neutral20,
          borderRadius: borderRadius,
          borderStyle: "solid",
          borderWidth: 1,
          boxShadow: isFocused ? "0 0 0 1px ".concat(colors.primary) : void 0,
          cursor: "default",
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
          minHeight: spacing.controlHeight,
          outline: "0 !important",
          position: "relative",
          transition: "all 100ms",
          "&:hover": {
            borderColor: isFocused ? colors.primary : colors.neutral30,
          },
        };
      },
      Control = function (props) {
        var children = props.children,
          cx = props.cx,
          getStyles = props.getStyles,
          className = props.className,
          isDisabled = props.isDisabled,
          isFocused = props.isFocused,
          innerRef = props.innerRef,
          innerProps = props.innerProps,
          menuIsOpen = props.menuIsOpen;
        return react.jsx(
          "div",
          _extends__default.default(
            {
              ref: innerRef,
              css: getStyles("control", props),
              className: cx(
                {
                  control: !0,
                  "control--is-disabled": isDisabled,
                  "control--is-focused": isFocused,
                  "control--menu-is-open": menuIsOpen,
                },
                className
              ),
            },
            innerProps
          ),
          children
        );
      },
      _excluded$1 = ["data"],
      groupCSS = function (_ref) {
        var spacing = _ref.theme.spacing;
        return {
          paddingBottom: 2 * spacing.baseUnit,
          paddingTop: 2 * spacing.baseUnit,
        };
      },
      Group = function (props) {
        var children = props.children,
          className = props.className,
          cx = props.cx,
          getStyles = props.getStyles,
          Heading = props.Heading,
          headingProps = props.headingProps,
          innerProps = props.innerProps,
          label = props.label,
          theme = props.theme,
          selectProps = props.selectProps;
        return react.jsx(
          "div",
          _extends__default.default(
            {
              css: getStyles("group", props),
              className: cx(
                {
                  group: !0,
                },
                className
              ),
            },
            innerProps
          ),
          react.jsx(
            Heading,
            _extends__default.default({}, headingProps, {
              selectProps: selectProps,
              theme: theme,
              getStyles: getStyles,
              cx: cx,
            }),
            label
          ),
          react.jsx("div", null, children)
        );
      },
      groupHeadingCSS = function (_ref2) {
        var spacing = _ref2.theme.spacing;
        return {
          label: "group",
          color: "#999",
          cursor: "default",
          display: "block",
          fontSize: "75%",
          fontWeight: 500,
          marginBottom: "0.25em",
          paddingLeft: 3 * spacing.baseUnit,
          paddingRight: 3 * spacing.baseUnit,
          textTransform: "uppercase",
        };
      },
      GroupHeading = function (props) {
        var getStyles = props.getStyles,
          cx = props.cx,
          className = props.className,
          _cleanCommonProps = cleanCommonProps(props);
        _cleanCommonProps.data;
        var innerProps = _objectWithoutProperties__default.default(
          _cleanCommonProps,
          _excluded$1
        );
        return react.jsx(
          "div",
          _extends__default.default(
            {
              css: getStyles("groupHeading", props),
              className: cx(
                {
                  "group-heading": !0,
                },
                className
              ),
            },
            innerProps
          )
        );
      },
      _excluded = ["innerRef", "isDisabled", "isHidden", "inputClassName"],
      inputCSS = function (_ref) {
        var isDisabled = _ref.isDisabled,
          value = _ref.value,
          _ref$theme = _ref.theme,
          spacing = _ref$theme.spacing,
          colors = _ref$theme.colors;
        return _objectSpread2(
          {
            margin: spacing.baseUnit / 2,
            paddingBottom: spacing.baseUnit / 2,
            paddingTop: spacing.baseUnit / 2,
            visibility: isDisabled ? "hidden" : "visible",
            color: colors.neutral80,
            transform: value ? "translateZ(0)" : "",
          },
          containerStyle
        );
      },
      spacingStyle = {
        gridArea: "1 / 2",
        font: "inherit",
        minWidth: "2px",
        border: 0,
        margin: 0,
        outline: 0,
        padding: 0,
      },
      containerStyle = {
        flex: "1 1 auto",
        display: "inline-grid",
        gridArea: "1 / 1 / 2 / 3",
        gridTemplateColumns: "0 min-content",
        "&:after": _objectSpread2(
          {
            content: 'attr(data-value) " "',
            visibility: "hidden",
            whiteSpace: "pre",
          },
          spacingStyle
        ),
      },
      inputStyle = function (isHidden) {
        return _objectSpread2(
          {
            label: "input",
            color: "inherit",
            background: 0,
            opacity: isHidden ? 0 : 1,
            width: "100%",
          },
          spacingStyle
        );
      },
      Input = function (props) {
        var className = props.className,
          cx = props.cx,
          getStyles = props.getStyles,
          value = props.value,
          _cleanCommonProps = cleanCommonProps(props),
          innerRef = _cleanCommonProps.innerRef,
          isDisabled = _cleanCommonProps.isDisabled,
          isHidden = _cleanCommonProps.isHidden,
          inputClassName = _cleanCommonProps.inputClassName,
          innerProps = _objectWithoutProperties__default.default(
            _cleanCommonProps,
            _excluded
          );
        return react.jsx(
          "div",
          {
            className: cx(
              {
                "input-container": !0,
              },
              className
            ),
            css: getStyles("input", props),
            "data-value": value || "",
          },
          react.jsx(
            "input",
            _extends__default.default(
              {
                className: cx(
                  {
                    input: !0,
                  },
                  inputClassName
                ),
                ref: innerRef,
                style: inputStyle(isHidden),
                disabled: isDisabled,
              },
              innerProps
            )
          )
        );
      },
      multiValueCSS = function (_ref) {
        var _ref$theme = _ref.theme,
          spacing = _ref$theme.spacing,
          borderRadius = _ref$theme.borderRadius;
        return {
          label: "multiValue",
          backgroundColor: _ref$theme.colors.neutral10,
          borderRadius: borderRadius / 2,
          display: "flex",
          margin: spacing.baseUnit / 2,
          minWidth: 0,
        };
      },
      multiValueLabelCSS = function (_ref2) {
        var _ref2$theme = _ref2.theme,
          borderRadius = _ref2$theme.borderRadius,
          colors = _ref2$theme.colors,
          cropWithEllipsis = _ref2.cropWithEllipsis;
        return {
          borderRadius: borderRadius / 2,
          color: colors.neutral80,
          fontSize: "85%",
          overflow: "hidden",
          padding: 3,
          paddingLeft: 6,
          textOverflow:
            cropWithEllipsis || void 0 === cropWithEllipsis
              ? "ellipsis"
              : void 0,
          whiteSpace: "nowrap",
        };
      },
      multiValueRemoveCSS = function (_ref3) {
        var _ref3$theme = _ref3.theme,
          spacing = _ref3$theme.spacing,
          borderRadius = _ref3$theme.borderRadius,
          colors = _ref3$theme.colors;
        return {
          alignItems: "center",
          borderRadius: borderRadius / 2,
          backgroundColor: _ref3.isFocused ? colors.dangerLight : void 0,
          display: "flex",
          paddingLeft: spacing.baseUnit,
          paddingRight: spacing.baseUnit,
          ":hover": {
            backgroundColor: colors.dangerLight,
            color: colors.danger,
          },
        };
      },
      MultiValueGeneric = function (_ref4) {
        var children = _ref4.children,
          innerProps = _ref4.innerProps;
        return react.jsx("div", innerProps, children);
      },
      MultiValueContainer = MultiValueGeneric,
      MultiValueLabel = MultiValueGeneric;

    function MultiValueRemove(_ref5) {
      var children = _ref5.children,
        innerProps = _ref5.innerProps;
      return react.jsx(
        "div",
        _extends__default.default(
          {
            role: "button",
          },
          innerProps
        ),
        children ||
          react.jsx(CrossIcon, {
            size: 14,
          })
      );
    }

    var MultiValue = function (props) {
        var children = props.children,
          className = props.className,
          components = props.components,
          cx = props.cx,
          data = props.data,
          getStyles = props.getStyles,
          innerProps = props.innerProps,
          isDisabled = props.isDisabled,
          removeProps = props.removeProps,
          selectProps = props.selectProps,
          Container = components.Container,
          Label = components.Label,
          Remove = components.Remove;
        return react.jsx(react.ClassNames, null, function (_ref6) {
          var css = _ref6.css,
            emotionCx = _ref6.cx;
          return react.jsx(
            Container,
            {
              data: data,
              innerProps: _objectSpread2(
                {
                  className: emotionCx(
                    css(getStyles("multiValue", props)),
                    cx(
                      {
                        "multi-value": !0,
                        "multi-value--is-disabled": isDisabled,
                      },
                      className
                    )
                  ),
                },
                innerProps
              ),
              selectProps: selectProps,
            },
            react.jsx(
              Label,
              {
                data: data,
                innerProps: {
                  className: emotionCx(
                    css(getStyles("multiValueLabel", props)),
                    cx(
                      {
                        "multi-value__label": !0,
                      },
                      className
                    )
                  ),
                },
                selectProps: selectProps,
              },
              children
            ),
            react.jsx(Remove, {
              data: data,
              innerProps: _objectSpread2(
                {
                  className: emotionCx(
                    css(getStyles("multiValueRemove", props)),
                    cx(
                      {
                        "multi-value__remove": !0,
                      },
                      className
                    )
                  ),
                  "aria-label": "Remove ".concat(children || "option"),
                },
                removeProps
              ),
              selectProps: selectProps,
            })
          );
        });
      },
      optionCSS = function (_ref) {
        var isDisabled = _ref.isDisabled,
          isFocused = _ref.isFocused,
          isSelected = _ref.isSelected,
          _ref$theme = _ref.theme,
          spacing = _ref$theme.spacing,
          colors = _ref$theme.colors;
        return {
          label: "option",
          backgroundColor: isSelected
            ? colors.primary
            : isFocused
            ? colors.primary25
            : "transparent",
          color: isDisabled
            ? colors.neutral20
            : isSelected
            ? colors.neutral0
            : "inherit",
          cursor: "default",
          display: "block",
          fontSize: "inherit",
          padding: ""
            .concat(2 * spacing.baseUnit, "px ")
            .concat(3 * spacing.baseUnit, "px"),
          width: "100%",
          userSelect: "none",
          WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
          ":active": {
            backgroundColor: isDisabled
              ? void 0
              : isSelected
              ? colors.primary
              : colors.primary50,
          },
        };
      },
      Option = function (props) {
        var children = props.children,
          className = props.className,
          cx = props.cx,
          getStyles = props.getStyles,
          isDisabled = props.isDisabled,
          isFocused = props.isFocused,
          isSelected = props.isSelected,
          innerRef = props.innerRef,
          innerProps = props.innerProps;
        return react.jsx(
          "div",
          _extends__default.default(
            {
              css: getStyles("option", props),
              className: cx(
                {
                  option: !0,
                  "option--is-disabled": isDisabled,
                  "option--is-focused": isFocused,
                  "option--is-selected": isSelected,
                },
                className
              ),
              ref: innerRef,
              "aria-disabled": isDisabled,
            },
            innerProps
          ),
          children
        );
      },
      placeholderCSS = function (_ref) {
        var _ref$theme = _ref.theme,
          spacing = _ref$theme.spacing;
        return {
          label: "placeholder",
          color: _ref$theme.colors.neutral50,
          gridArea: "1 / 1 / 2 / 3",
          marginLeft: spacing.baseUnit / 2,
          marginRight: spacing.baseUnit / 2,
        };
      },
      Placeholder = function (props) {
        var children = props.children,
          className = props.className,
          cx = props.cx,
          getStyles = props.getStyles,
          innerProps = props.innerProps;
        return react.jsx(
          "div",
          _extends__default.default(
            {
              css: getStyles("placeholder", props),
              className: cx(
                {
                  placeholder: !0,
                },
                className
              ),
            },
            innerProps
          ),
          children
        );
      },
      css = function (_ref) {
        var isDisabled = _ref.isDisabled,
          _ref$theme = _ref.theme,
          spacing = _ref$theme.spacing,
          colors = _ref$theme.colors;
        return {
          label: "singleValue",
          color: isDisabled ? colors.neutral40 : colors.neutral80,
          gridArea: "1 / 1 / 2 / 3",
          marginLeft: spacing.baseUnit / 2,
          marginRight: spacing.baseUnit / 2,
          maxWidth: "100%",
          overflow: "hidden",
          textOverflow: "ellipsis",
          whiteSpace: "nowrap",
        };
      },
      SingleValue = function (props) {
        var children = props.children,
          className = props.className,
          cx = props.cx,
          getStyles = props.getStyles,
          isDisabled = props.isDisabled,
          innerProps = props.innerProps;
        return react.jsx(
          "div",
          _extends__default.default(
            {
              css: getStyles("singleValue", props),
              className: cx(
                {
                  "single-value": !0,
                  "single-value--is-disabled": isDisabled,
                },
                className
              ),
            },
            innerProps
          ),
          children
        );
      },
      components = {
        ClearIndicator: ClearIndicator,
        Control: Control,
        DropdownIndicator: DropdownIndicator,
        DownChevron: DownChevron,
        CrossIcon: CrossIcon,
        Group: Group,
        GroupHeading: GroupHeading,
        IndicatorsContainer: IndicatorsContainer,
        IndicatorSeparator: IndicatorSeparator,
        Input: Input,
        LoadingIndicator: LoadingIndicator,
        Menu: Menu,
        MenuList: MenuList,
        MenuPortal: MenuPortal,
        LoadingMessage: LoadingMessage,
        NoOptionsMessage: NoOptionsMessage,
        MultiValue: MultiValue,
        MultiValueContainer: MultiValueContainer,
        MultiValueLabel: MultiValueLabel,
        MultiValueRemove: MultiValueRemove,
        Option: Option,
        Placeholder: Placeholder,
        SelectContainer: SelectContainer,
        SingleValue: SingleValue,
        ValueContainer: ValueContainer,
      },
      defaultComponents = function (props) {
        return _objectSpread2(_objectSpread2({}, components), props.components);
      };

    (exports.MenuPlacer = MenuPlacer),
      (exports._createSuper = _createSuper),
      (exports._objectSpread2 = _objectSpread2),
      (exports.classNames = classNames),
      (exports.cleanValue = cleanValue),
      (exports.clearIndicatorCSS = clearIndicatorCSS),
      (exports.components = components),
      (exports.containerCSS = containerCSS),
      (exports.css = css$1),
      (exports.css$1 = css),
      (exports.defaultComponents = defaultComponents),
      (exports.dropdownIndicatorCSS = dropdownIndicatorCSS),
      (exports.groupCSS = groupCSS),
      (exports.groupHeadingCSS = groupHeadingCSS),
      (exports.handleInputChange = handleInputChange),
      (exports.indicatorSeparatorCSS = indicatorSeparatorCSS),
      (exports.indicatorsContainerCSS = indicatorsContainerCSS),
      (exports.inputCSS = inputCSS),
      (exports.isDocumentElement = isDocumentElement),
      (exports.isMobileDevice = isMobileDevice),
      (exports.isTouchCapable = isTouchCapable),
      (exports.loadingIndicatorCSS = loadingIndicatorCSS),
      (exports.loadingMessageCSS = loadingMessageCSS),
      (exports.menuCSS = menuCSS),
      (exports.menuListCSS = menuListCSS),
      (exports.menuPortalCSS = menuPortalCSS),
      (exports.multiValueAsValue = multiValueAsValue),
      (exports.multiValueCSS = multiValueCSS),
      (exports.multiValueLabelCSS = multiValueLabelCSS),
      (exports.multiValueRemoveCSS = multiValueRemoveCSS),
      (exports.noOptionsMessageCSS = noOptionsMessageCSS),
      (exports.noop = noop),
      (exports.notNullish = notNullish),
      (exports.optionCSS = optionCSS),
      (exports.placeholderCSS = placeholderCSS),
      (exports.scrollIntoView = scrollIntoView),
      (exports.singleValueAsValue = singleValueAsValue),
      (exports.supportsPassiveEvents = supportsPassiveEvents),
      (exports.valueContainerCSS = valueContainerCSS),
      (exports.valueTernary = valueTernary);

    /***/
  },

  /***/ 87583: /***/ (
    __unused_webpack_module,
    exports,
    __webpack_require__
  ) => {
    "use strict";
    var __webpack_unused_export__;

    __webpack_unused_export__ = {
      value: !0,
    };

    var useStateManager = __webpack_require__(1055),
      _extends = __webpack_require__(67154),
      React = __webpack_require__(67294),
      base_dist_reactSelect = __webpack_require__(51693),
      _classCallCheck = __webpack_require__(34575),
      _createClass = __webpack_require__(93913),
      _inherits = __webpack_require__(2205),
      index = __webpack_require__(81983),
      react = __webpack_require__(14264),
      createCache = __webpack_require__(9493),
      memoizeOne = __webpack_require__(39275);

    function _interopDefault(e) {
      return e && e.__esModule
        ? e
        : {
            default: e,
          };
    }

    __webpack_require__(63038),
      __webpack_require__(6479),
      __webpack_require__(319),
      __webpack_require__(28655),
      __webpack_require__(50008),
      __webpack_require__(59713),
      __webpack_require__(73935);

    var _extends__default = _interopDefault(_extends),
      React__default = _interopDefault(React),
      _classCallCheck__default = _interopDefault(_classCallCheck),
      _createClass__default = _interopDefault(_createClass),
      _inherits__default = _interopDefault(_inherits),
      createCache__default = _interopDefault(createCache),
      memoizeOne__default = _interopDefault(memoizeOne),
      StateManagedSelect = React__default.default.forwardRef(function (
        props,
        ref
      ) {
        var baseSelectProps = useStateManager.useStateManager(props);
        return React__default.default.createElement(
          base_dist_reactSelect.Select,
          _extends__default.default(
            {
              ref: ref,
            },
            baseSelectProps
          )
        );
      }),
      NonceProvider = (function (_Component) {
        _inherits__default.default(NonceProvider, _Component);
        var _super = index._createSuper(NonceProvider);
        function NonceProvider(props) {
          var _this;
          return (
            _classCallCheck__default.default(this, NonceProvider),
            ((_this = _super.call(this, props)).createEmotionCache = function (
              nonce,
              key
            ) {
              return createCache__default.default({
                nonce: nonce,
                key: key,
              });
            }),
            (_this.createEmotionCache = memoizeOne__default.default(
              _this.createEmotionCache
            )),
            _this
          );
        }
        return (
          _createClass__default.default(NonceProvider, [
            {
              key: "render",
              value: function () {
                var emotionCache = this.createEmotionCache(
                  this.props.nonce,
                  this.props.cacheKey
                );
                return React__default.default.createElement(
                  react.CacheProvider,
                  {
                    value: emotionCache,
                  },
                  this.props.children
                );
              },
            },
          ]),
          NonceProvider
        );
      })(React.Component);

    (__webpack_unused_export__ = useStateManager.useStateManager),
      (__webpack_unused_export__ = base_dist_reactSelect.createFilter),
      (__webpack_unused_export__ = base_dist_reactSelect.defaultTheme),
      (__webpack_unused_export__ = base_dist_reactSelect.mergeStyles),
      (__webpack_unused_export__ = index.components),
      (__webpack_unused_export__ = NonceProvider),
      (exports.ZP = StateManagedSelect);

    /***/
  },

  /***/ 1055: /***/ (__unused_webpack_module, exports, __webpack_require__) => {
    "use strict";

    var index = __webpack_require__(81983),
      _slicedToArray = __webpack_require__(63038),
      _objectWithoutProperties = __webpack_require__(6479),
      React = __webpack_require__(67294);

    function _interopDefault(e) {
      return e && e.__esModule
        ? e
        : {
            default: e,
          };
    }

    var _slicedToArray__default = _interopDefault(_slicedToArray),
      _objectWithoutProperties__default = _interopDefault(
        _objectWithoutProperties
      ),
      _excluded = [
        "defaultInputValue",
        "defaultMenuIsOpen",
        "defaultValue",
        "inputValue",
        "menuIsOpen",
        "onChange",
        "onInputChange",
        "onMenuClose",
        "onMenuOpen",
        "value",
      ];

    function useStateManager(_ref) {
      var _ref$defaultInputValu = _ref.defaultInputValue,
        defaultInputValue =
          void 0 === _ref$defaultInputValu ? "" : _ref$defaultInputValu,
        _ref$defaultMenuIsOpe = _ref.defaultMenuIsOpen,
        defaultMenuIsOpen =
          void 0 !== _ref$defaultMenuIsOpe && _ref$defaultMenuIsOpe,
        _ref$defaultValue = _ref.defaultValue,
        defaultValue = void 0 === _ref$defaultValue ? null : _ref$defaultValue,
        propsInputValue = _ref.inputValue,
        propsMenuIsOpen = _ref.menuIsOpen,
        propsOnChange = _ref.onChange,
        propsOnInputChange = _ref.onInputChange,
        propsOnMenuClose = _ref.onMenuClose,
        propsOnMenuOpen = _ref.onMenuOpen,
        propsValue = _ref.value,
        restSelectProps = _objectWithoutProperties__default.default(
          _ref,
          _excluded
        ),
        _useState = React.useState(
          void 0 !== propsInputValue ? propsInputValue : defaultInputValue
        ),
        _useState2 = _slicedToArray__default.default(_useState, 2),
        stateInputValue = _useState2[0],
        setStateInputValue = _useState2[1],
        _useState3 = React.useState(
          void 0 !== propsMenuIsOpen ? propsMenuIsOpen : defaultMenuIsOpen
        ),
        _useState4 = _slicedToArray__default.default(_useState3, 2),
        stateMenuIsOpen = _useState4[0],
        setStateMenuIsOpen = _useState4[1],
        _useState5 = React.useState(
          void 0 !== propsValue ? propsValue : defaultValue
        ),
        _useState6 = _slicedToArray__default.default(_useState5, 2),
        stateValue = _useState6[0],
        setStateValue = _useState6[1],
        onChange = React.useCallback(
          function (value, actionMeta) {
            "function" == typeof propsOnChange &&
              propsOnChange(value, actionMeta),
              setStateValue(value);
          },
          [propsOnChange]
        ),
        onInputChange = React.useCallback(
          function (value, actionMeta) {
            var newValue;
            "function" == typeof propsOnInputChange &&
              (newValue = propsOnInputChange(value, actionMeta)),
              setStateInputValue(void 0 !== newValue ? newValue : value);
          },
          [propsOnInputChange]
        ),
        onMenuOpen = React.useCallback(
          function () {
            "function" == typeof propsOnMenuOpen && propsOnMenuOpen(),
              setStateMenuIsOpen(!0);
          },
          [propsOnMenuOpen]
        ),
        onMenuClose = React.useCallback(
          function () {
            "function" == typeof propsOnMenuClose && propsOnMenuClose(),
              setStateMenuIsOpen(!1);
          },
          [propsOnMenuClose]
        ),
        inputValue =
          void 0 !== propsInputValue ? propsInputValue : stateInputValue,
        menuIsOpen =
          void 0 !== propsMenuIsOpen ? propsMenuIsOpen : stateMenuIsOpen,
        value = void 0 !== propsValue ? propsValue : stateValue;
      return index._objectSpread2(
        index._objectSpread2({}, restSelectProps),
        {},
        {
          inputValue: inputValue,
          menuIsOpen: menuIsOpen,
          onChange: onChange,
          onInputChange: onInputChange,
          onMenuClose: onMenuClose,
          onMenuOpen: onMenuOpen,
          value: value,
        }
      );
    }

    exports.useStateManager = useStateManager;

    /***/
  },

  /***/ 5482: /***/ function (__unused_webpack_module, exports) {
    (function (e, r) {
      true ? r(exports) : 0;
    })(this, function (e) {
      "use strict";
      var r = "-ms-";
      var a = "-moz-";
      var c = "-webkit-";
      var t = "comm";
      var n = "rule";
      var s = "decl";
      var i = "@page";
      var u = "@media";
      var o = "@import";
      var f = "@charset";
      var l = "@viewport";
      var h = "@supports";
      var p = "@document";
      var v = "@namespace";
      var b = "@keyframes";
      var m = "@font-face";
      var w = "@counter-style";
      var d = "@font-feature-values";
      var $ = Math.abs;
      var k = String.fromCharCode;
      function g(e, r) {
        return (
          (((((((r << 2) ^ A(e, 0)) << 2) ^ A(e, 1)) << 2) ^ A(e, 2)) << 2) ^
          A(e, 3)
        );
      }
      function x(e) {
        return e.trim();
      }
      function E(e, r) {
        return (e = r.exec(e)) ? e[0] : e;
      }
      function y(e, r, a) {
        return e.replace(r, a);
      }
      function T(e, r) {
        return e.indexOf(r);
      }
      function A(e, r) {
        return e.charCodeAt(r) | 0;
      }
      function O(e, r, a) {
        return e.slice(r, a);
      }
      function M(e) {
        return e.length;
      }
      function C(e) {
        return e.length;
      }
      function S(e, r) {
        return r.push(e), e;
      }
      function R(e, r) {
        return e.map(r).join("");
      }
      e.line = 1;
      e.column = 1;
      e.length = 0;
      e.position = 0;
      e.character = 0;
      e.characters = "";
      function z(r, a, c, t, n, s, i) {
        return {
          value: r,
          root: a,
          parent: c,
          type: t,
          props: n,
          children: s,
          line: e.line,
          column: e.column,
          length: i,
          return: "",
        };
      }
      function N(e, r, a) {
        return z(e, r.root, r.parent, a, r.props, r.children, 0);
      }
      function P() {
        return e.character;
      }
      function U() {
        e.character = e.position > 0 ? A(e.characters, --e.position) : 0;
        if ((e.column--, e.character === 10)) (e.column = 1), e.line--;
        return e.character;
      }
      function _() {
        e.character = e.position < e.length ? A(e.characters, e.position++) : 0;
        if ((e.column++, e.character === 10)) (e.column = 1), e.line++;
        return e.character;
      }
      function j() {
        return A(e.characters, e.position);
      }
      function F() {
        return e.position;
      }
      function I(r, a) {
        return O(e.characters, r, a);
      }
      function L(e) {
        switch (e) {
          case 0:
          case 9:
          case 10:
          case 13:
          case 32:
            return 5;
          case 33:
          case 43:
          case 44:
          case 47:
          case 62:
          case 64:
          case 126:
          case 59:
          case 123:
          case 125:
            return 4;
          case 58:
            return 3;
          case 34:
          case 39:
          case 40:
          case 91:
            return 2;
          case 41:
          case 93:
            return 1;
        }
        return 0;
      }
      function D(r) {
        return (
          (e.line = e.column = 1),
          (e.length = M((e.characters = r))),
          (e.position = 0),
          []
        );
      }
      function K(r) {
        return (e.characters = ""), r;
      }
      function V(r) {
        return x(I(e.position - 1, H(r === 91 ? r + 2 : r === 40 ? r + 1 : r)));
      }
      function W(e) {
        return K(B(D(e)));
      }
      function Y(r) {
        while ((e.character = j()))
          if (e.character < 33) _();
          else break;
        return L(r) > 2 || L(e.character) > 3 ? "" : " ";
      }
      function B(r) {
        while (_())
          switch (L(e.character)) {
            case 0:
              S(q(e.position - 1), r);
              break;
            case 2:
              S(V(e.character), r);
              break;
            default:
              S(k(e.character), r);
          }
        return r;
      }
      function G(r, a) {
        while (--a && _())
          if (
            e.character < 48 ||
            e.character > 102 ||
            (e.character > 57 && e.character < 65) ||
            (e.character > 70 && e.character < 97)
          )
            break;
        return I(r, F() + (a < 6 && j() == 32 && _() == 32));
      }
      function H(r) {
        while (_())
          switch (e.character) {
            case r:
              return e.position;
            case 34:
            case 39:
              return H(r === 34 || r === 39 ? r : e.character);
            case 40:
              if (r === 41) H(r);
              break;
            case 92:
              _();
              break;
          }
        return e.position;
      }
      function Z(r, a) {
        while (_())
          if (r + e.character === 47 + 10) break;
          else if (r + e.character === 42 + 42 && j() === 47) break;
        return "/*" + I(a, e.position - 1) + "*" + k(r === 47 ? r : _());
      }
      function q(r) {
        while (!L(j())) _();
        return I(r, e.position);
      }
      function J(e) {
        return K(Q("", null, null, null, [""], (e = D(e)), 0, [0], e));
      }
      function Q(e, r, a, c, t, n, s, i, u) {
        var o = 0;
        var f = 0;
        var l = s;
        var h = 0;
        var p = 0;
        var v = 0;
        var b = 1;
        var m = 1;
        var w = 1;
        var d = 0;
        var $ = "";
        var g = t;
        var x = n;
        var E = c;
        var T = $;
        while (m)
          switch (((v = d), (d = _()))) {
            case 34:
            case 39:
            case 91:
            case 40:
              T += V(d);
              break;
            case 9:
            case 10:
            case 13:
            case 32:
              T += Y(v);
              break;
            case 92:
              T += G(F() - 1, 7);
              continue;
            case 47:
              switch (j()) {
                case 42:
                case 47:
                  S(ee(Z(_(), F()), r, a), u);
                  break;
                default:
                  T += "/";
              }
              break;
            case 123 * b:
              i[o++] = M(T) * w;
            case 125 * b:
            case 59:
            case 0:
              switch (d) {
                case 0:
                case 125:
                  m = 0;
                case 59 + f:
                  if (p > 0 && M(T) - l)
                    S(
                      p > 32
                        ? re(T + ";", c, a, l - 1)
                        : re(y(T, " ", "") + ";", c, a, l - 2),
                      u
                    );
                  break;
                case 59:
                  T += ";";
                default:
                  S((E = X(T, r, a, o, f, t, i, $, (g = []), (x = []), l)), n);
                  if (d === 123)
                    if (f === 0) Q(T, r, E, E, g, n, l, i, x);
                    else
                      switch (h) {
                        case 100:
                        case 109:
                        case 115:
                          Q(
                            e,
                            E,
                            E,
                            c &&
                              S(X(e, E, E, 0, 0, t, i, $, t, (g = []), l), x),
                            t,
                            x,
                            l,
                            i,
                            c ? g : x
                          );
                          break;
                        default:
                          Q(T, E, E, E, [""], x, l, i, x);
                      }
              }
              (o = f = p = 0), (b = w = 1), ($ = T = ""), (l = s);
              break;
            case 58:
              (l = 1 + M(T)), (p = v);
            default:
              if (b < 1)
                if (d == 123) --b;
                else if (d == 125 && b++ == 0 && U() == 125) continue;
              switch (((T += k(d)), d * b)) {
                case 38:
                  w = f > 0 ? 1 : ((T += "\f"), -1);
                  break;
                case 44:
                  (i[o++] = (M(T) - 1) * w), (w = 1);
                  break;
                case 64:
                  if (j() === 45) T += V(_());
                  (h = j()), (f = M(($ = T += q(F())))), d++;
                  break;
                case 45:
                  if (v === 45 && M(T) == 2) b = 0;
              }
          }
        return n;
      }
      function X(e, r, a, c, t, s, i, u, o, f, l) {
        var h = t - 1;
        var p = t === 0 ? s : [""];
        var v = C(p);
        for (var b = 0, m = 0, w = 0; b < c; ++b)
          for (
            var d = 0, k = O(e, h + 1, (h = $((m = i[b])))), g = e;
            d < v;
            ++d
          )
            if ((g = x(m > 0 ? p[d] + " " + k : y(k, /&\f/g, p[d]))))
              o[w++] = g;
        return z(e, r, a, t === 0 ? n : u, o, f, l);
      }
      function ee(e, r, a) {
        return z(e, r, a, t, k(P()), O(e, 2, -2), 0);
      }
      function re(e, r, a, c) {
        return z(e, r, a, s, O(e, 0, c), O(e, c + 1, -1), c);
      }
      function ae(e, t) {
        switch (g(e, t)) {
          case 5103:
            return c + "print-" + e + e;
          case 5737:
          case 4201:
          case 3177:
          case 3433:
          case 1641:
          case 4457:
          case 2921:
          case 5572:
          case 6356:
          case 5844:
          case 3191:
          case 6645:
          case 3005:
          case 6391:
          case 5879:
          case 5623:
          case 6135:
          case 4599:
          case 4855:
          case 4215:
          case 6389:
          case 5109:
          case 5365:
          case 5621:
          case 3829:
            return c + e + e;
          case 5349:
          case 4246:
          case 4810:
          case 6968:
          case 2756:
            return c + e + a + e + r + e + e;
          case 6828:
          case 4268:
            return c + e + r + e + e;
          case 6165:
            return c + e + r + "flex-" + e + e;
          case 5187:
            return (
              c +
              e +
              y(e, /(\w+).+(:[^]+)/, c + "box-$1$2" + r + "flex-$1$2") +
              e
            );
          case 5443:
            return c + e + r + "flex-item-" + y(e, /flex-|-self/, "") + e;
          case 4675:
            return (
              c +
              e +
              r +
              "flex-line-pack" +
              y(e, /align-content|flex-|-self/, "") +
              e
            );
          case 5548:
            return c + e + r + y(e, "shrink", "negative") + e;
          case 5292:
            return c + e + r + y(e, "basis", "preferred-size") + e;
          case 6060:
            return (
              c +
              "box-" +
              y(e, "-grow", "") +
              c +
              e +
              r +
              y(e, "grow", "positive") +
              e
            );
          case 4554:
            return c + y(e, /([^-])(transform)/g, "$1" + c + "$2") + e;
          case 6187:
            return (
              y(
                y(y(e, /(zoom-|grab)/, c + "$1"), /(image-set)/, c + "$1"),
                e,
                ""
              ) + e
            );
          case 5495:
          case 3959:
            return y(e, /(image-set\([^]*)/, c + "$1" + "$`$1");
          case 4968:
            return (
              y(
                y(
                  e,
                  /(.+:)(flex-)?(.*)/,
                  c + "box-pack:$3" + r + "flex-pack:$3"
                ),
                /s.+-b[^;]+/,
                "justify"
              ) +
              c +
              e +
              e
            );
          case 4095:
          case 3583:
          case 4068:
          case 2532:
            return y(e, /(.+)-inline(.+)/, c + "$1$2") + e;
          case 8116:
          case 7059:
          case 5753:
          case 5535:
          case 5445:
          case 5701:
          case 4933:
          case 4677:
          case 5533:
          case 5789:
          case 5021:
          case 4765:
            if (M(e) - 1 - t > 6)
              switch (A(e, t + 1)) {
                case 109:
                  if (A(e, t + 4) !== 45) break;
                case 102:
                  return (
                    y(
                      e,
                      /(.+:)(.+)-([^]+)/,
                      "$1" +
                        c +
                        "$2-$3" +
                        "$1" +
                        a +
                        (A(e, t + 3) == 108 ? "$3" : "$2-$3")
                    ) + e
                  );
                case 115:
                  return ~T(e, "stretch")
                    ? ae(y(e, "stretch", "fill-available"), t) + e
                    : e;
              }
            break;
          case 4949:
            if (A(e, t + 1) !== 115) break;
          case 6444:
            switch (A(e, M(e) - 3 - (~T(e, "!important") && 10))) {
              case 107:
                return y(e, ":", ":" + c) + e;
              case 101:
                return (
                  y(
                    e,
                    /(.+:)([^;!]+)(;|!.+)?/,
                    "$1" +
                      c +
                      (A(e, 14) === 45 ? "inline-" : "") +
                      "box$3" +
                      "$1" +
                      c +
                      "$2$3" +
                      "$1" +
                      r +
                      "$2box$3"
                  ) + e
                );
            }
            break;
          case 5936:
            switch (A(e, t + 11)) {
              case 114:
                return c + e + r + y(e, /[svh]\w+-[tblr]{2}/, "tb") + e;
              case 108:
                return c + e + r + y(e, /[svh]\w+-[tblr]{2}/, "tb-rl") + e;
              case 45:
                return c + e + r + y(e, /[svh]\w+-[tblr]{2}/, "lr") + e;
            }
            return c + e + r + e + e;
        }
        return e;
      }
      function ce(e, r) {
        var a = "";
        var c = C(e);
        for (var t = 0; t < c; t++) a += r(e[t], t, e, r) || "";
        return a;
      }
      function te(e, r, a, c) {
        switch (e.type) {
          case o:
          case s:
            return (e.return = e.return || e.value);
          case t:
            return "";
          case n:
            e.value = e.props.join(",");
        }
        return M((a = ce(e.children, c)))
          ? (e.return = e.value + "{" + a + "}")
          : "";
      }
      function ne(e) {
        var r = C(e);
        return function (a, c, t, n) {
          var s = "";
          for (var i = 0; i < r; i++) s += e[i](a, c, t, n) || "";
          return s;
        };
      }
      function se(e) {
        return function (r) {
          if (!r.root) if ((r = r.return)) e(r);
        };
      }
      function ie(e, t, i, u) {
        if (!e.return)
          switch (e.type) {
            case s:
              e.return = ae(e.value, e.length);
              break;
            case b:
              return ce([N(y(e.value, "@", "@" + c), e, "")], u);
            case n:
              if (e.length)
                return R(e.props, function (t) {
                  switch (E(t, /(::plac\w+|:read-\w+)/)) {
                    case ":read-only":
                    case ":read-write":
                      return ce(
                        [N(y(t, /:(read-\w+)/, ":" + a + "$1"), e, "")],
                        u
                      );
                    case "::placeholder":
                      return ce(
                        [
                          N(y(t, /:(plac\w+)/, ":" + c + "input-$1"), e, ""),
                          N(y(t, /:(plac\w+)/, ":" + a + "$1"), e, ""),
                          N(y(t, /:(plac\w+)/, r + "input-$1"), e, ""),
                        ],
                        u
                      );
                  }
                  return "";
                });
          }
      }
      function ue(e) {
        switch (e.type) {
          case n:
            e.props = e.props.map(function (r) {
              return R(W(r), function (r, a, c) {
                switch (A(r, 0)) {
                  case 12:
                    return O(r, 1, M(r));
                  case 0:
                  case 40:
                  case 43:
                  case 62:
                  case 126:
                    return r;
                  case 58:
                    if (c[++a] === "global")
                      (c[a] = ""), (c[++a] = "\f" + O(c[a], (a = 1), -1));
                  case 32:
                    return a === 1 ? "" : r;
                  default:
                    switch (a) {
                      case 0:
                        e = r;
                        return C(c) > 1 ? "" : r;
                      case (a = C(c) - 1):
                      case 2:
                        return a === 2 ? r + e + e : r + e;
                      default:
                        return r;
                    }
                }
              });
            });
        }
      }
      e.CHARSET = f;
      e.COMMENT = t;
      e.COUNTER_STYLE = w;
      e.DECLARATION = s;
      e.DOCUMENT = p;
      e.FONT_FACE = m;
      e.FONT_FEATURE_VALUES = d;
      e.IMPORT = o;
      e.KEYFRAMES = b;
      e.MEDIA = u;
      e.MOZ = a;
      e.MS = r;
      e.NAMESPACE = v;
      e.PAGE = i;
      e.RULESET = n;
      e.SUPPORTS = h;
      e.VIEWPORT = l;
      e.WEBKIT = c;
      e.abs = $;
      e.alloc = D;
      e.append = S;
      e.caret = F;
      e.char = P;
      e.charat = A;
      e.combine = R;
      e.comment = ee;
      e.commenter = Z;
      e.compile = J;
      e.copy = N;
      e.dealloc = K;
      e.declaration = re;
      e.delimit = V;
      e.delimiter = H;
      e.escaping = G;
      e.from = k;
      e.hash = g;
      e.identifier = q;
      e.indexof = T;
      e.match = E;
      e.middleware = ne;
      e.namespace = ue;
      e.next = _;
      e.node = z;
      e.parse = Q;
      e.peek = j;
      e.prefix = ae;
      e.prefixer = ie;
      e.prev = U;
      e.replace = y;
      e.ruleset = X;
      e.rulesheet = se;
      e.serialize = ce;
      e.sizeof = C;
      e.slice = I;
      e.stringify = te;
      e.strlen = M;
      e.substr = O;
      e.token = L;
      e.tokenize = W;
      e.tokenizer = B;
      e.trim = x;
      e.whitespace = Y;
      Object.defineProperty(e, "__esModule", { value: true });
    });
    //# sourceMappingURL=stylis.js.map

    /***/
  },
};
