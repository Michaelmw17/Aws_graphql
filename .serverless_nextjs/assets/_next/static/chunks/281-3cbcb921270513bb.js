(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [281],
  {
    4470: function (e) {
      "use strict";
      var n = Object.prototype.hasOwnProperty,
        t = Object.prototype.toString,
        r = Object.defineProperty,
        o = Object.getOwnPropertyDescriptor,
        i = function (e) {
          return "function" === typeof Array.isArray
            ? Array.isArray(e)
            : "[object Array]" === t.call(e);
        },
        l = function (e) {
          if (!e || "[object Object]" !== t.call(e)) return !1;
          var r,
            o = n.call(e, "constructor"),
            i =
              e.constructor &&
              e.constructor.prototype &&
              n.call(e.constructor.prototype, "isPrototypeOf");
          if (e.constructor && !o && !i) return !1;
          for (r in e);
          return "undefined" === typeof r || n.call(e, r);
        },
        u = function (e, n) {
          r && "__proto__" === n.name
            ? r(e, n.name, {
                enumerable: !0,
                configurable: !0,
                value: n.newValue,
                writable: !0,
              })
            : (e[n.name] = n.newValue);
        },
        a = function (e, t) {
          if ("__proto__" === t) {
            if (!n.call(e, t)) return;
            if (o) return o(e, t).value;
          }
          return e[t];
        };
      e.exports = function e() {
        var n,
          t,
          r,
          o,
          s,
          c,
          f = arguments[0],
          p = 1,
          d = arguments.length,
          h = !1;
        for (
          "boolean" === typeof f &&
            ((h = f), (f = arguments[1] || {}), (p = 2)),
            (null == f || ("object" !== typeof f && "function" !== typeof f)) &&
              (f = {});
          p < d;
          ++p
        )
          if (null != (n = arguments[p]))
            for (t in n)
              (r = a(f, t)),
                f !== (o = a(n, t)) &&
                  (h && o && (l(o) || (s = i(o)))
                    ? (s
                        ? ((s = !1), (c = r && i(r) ? r : []))
                        : (c = r && l(r) ? r : {}),
                      u(f, { name: t, newValue: e(h, c, o) }))
                    : "undefined" !== typeof o &&
                      u(f, { name: t, newValue: o }));
        return f;
      };
    },
    8139: function (e) {
      var n = /\/\*[^*]*\*+([^/*][^*]*\*+)*\//g,
        t = /\n/g,
        r = /^\s*/,
        o = /^(\*?[-#/*\\\w]+(\[[0-9a-z_-]+\])?)\s*/,
        i = /^:\s*/,
        l = /^((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};])+)/,
        u = /^[;\s]*/,
        a = /^\s+|\s+$/g,
        s = "";
      function c(e) {
        return e ? e.replace(a, s) : s;
      }
      e.exports = function (e, a) {
        if ("string" !== typeof e)
          throw new TypeError("First argument must be a string");
        if (!e) return [];
        a = a || {};
        var f = 1,
          p = 1;
        function d(e) {
          var n = e.match(t);
          n && (f += n.length);
          var r = e.lastIndexOf("\n");
          p = ~r ? e.length - r : p + e.length;
        }
        function h() {
          var e = { line: f, column: p };
          return function (n) {
            return (n.position = new m(e)), x(), n;
          };
        }
        function m(e) {
          (this.start = e),
            (this.end = { line: f, column: p }),
            (this.source = a.source);
        }
        m.prototype.content = e;
        var g = [];
        function y(n) {
          var t = new Error(a.source + ":" + f + ":" + p + ": " + n);
          if (
            ((t.reason = n),
            (t.filename = a.source),
            (t.line = f),
            (t.column = p),
            (t.source = e),
            !a.silent)
          )
            throw t;
          g.push(t);
        }
        function k(n) {
          var t = n.exec(e);
          if (t) {
            var r = t[0];
            return d(r), (e = e.slice(r.length)), t;
          }
        }
        function x() {
          k(r);
        }
        function v(e) {
          var n;
          for (e = e || []; (n = b()); ) !1 !== n && e.push(n);
          return e;
        }
        function b() {
          var n = h();
          if ("/" == e.charAt(0) && "*" == e.charAt(1)) {
            for (
              var t = 2;
              s != e.charAt(t) &&
              ("*" != e.charAt(t) || "/" != e.charAt(t + 1));

            )
              ++t;
            if (((t += 2), s === e.charAt(t - 1)))
              return y("End of comment missing");
            var r = e.slice(2, t - 2);
            return (
              (p += 2),
              d(r),
              (e = e.slice(t)),
              (p += 2),
              n({ type: "comment", comment: r })
            );
          }
        }
        function w() {
          var e = h(),
            t = k(o);
          if (t) {
            if ((b(), !k(i))) return y("property missing ':'");
            var r = k(l),
              a = e({
                type: "declaration",
                property: c(t[0].replace(n, s)),
                value: r ? c(r[0].replace(n, s)) : s,
              });
            return k(u), a;
          }
        }
        return (
          x(),
          (function () {
            var e,
              n = [];
            for (v(n); (e = w()); ) !1 !== e && (n.push(e), v(n));
            return n;
          })()
        );
      };
    },
    8738: function (e) {
      e.exports = function (e) {
        return (
          null != e &&
          null != e.constructor &&
          "function" === typeof e.constructor.isBuffer &&
          e.constructor.isBuffer(e)
        );
      };
    },
    729: function (e) {
      "use strict";
      var n = {};
      function t(e, r, o) {
        var i,
          l,
          u,
          a,
          s,
          c = "";
        for (
          "string" !== typeof r && ((o = r), (r = t.defaultChars)),
            "undefined" === typeof o && (o = !0),
            s = (function (e) {
              var t,
                r,
                o = n[e];
              if (o) return o;
              for (o = n[e] = [], t = 0; t < 128; t++)
                (r = String.fromCharCode(t)),
                  /^[0-9a-z]$/i.test(r)
                    ? o.push(r)
                    : o.push(
                        "%" + ("0" + t.toString(16).toUpperCase()).slice(-2)
                      );
              for (t = 0; t < e.length; t++) o[e.charCodeAt(t)] = e[t];
              return o;
            })(r),
            i = 0,
            l = e.length;
          i < l;
          i++
        )
          if (
            ((u = e.charCodeAt(i)),
            o &&
              37 === u &&
              i + 2 < l &&
              /^[0-9a-f]{2}$/i.test(e.slice(i + 1, i + 3)))
          )
            (c += e.slice(i, i + 3)), (i += 2);
          else if (u < 128) c += s[u];
          else if (u >= 55296 && u <= 57343) {
            if (
              u >= 55296 &&
              u <= 56319 &&
              i + 1 < l &&
              (a = e.charCodeAt(i + 1)) >= 56320 &&
              a <= 57343
            ) {
              (c += encodeURIComponent(e[i] + e[i + 1])), i++;
              continue;
            }
            c += "%EF%BF%BD";
          } else c += encodeURIComponent(e[i]);
        return c;
      }
      (t.defaultChars = ";/?:@&=+$,-_.!~*'()#"),
        (t.componentChars = "-_.!~*'()"),
        (e.exports = t);
    },
    1163: function (e, n, t) {
      e.exports = t(387);
    },
    9921: function (e, n) {
      "use strict";
      var t = 60103,
        r = 60106,
        o = 60107,
        i = 60108,
        l = 60114,
        u = 60109,
        a = 60110,
        s = 60112,
        c = 60113,
        f = 60120,
        p = 60115,
        d = 60116,
        h = 60121,
        m = 60122,
        g = 60117,
        y = 60129,
        k = 60131;
      if ("function" === typeof Symbol && Symbol.for) {
        var x = Symbol.for;
        (t = x("react.element")),
          (r = x("react.portal")),
          (o = x("react.fragment")),
          (i = x("react.strict_mode")),
          (l = x("react.profiler")),
          (u = x("react.provider")),
          (a = x("react.context")),
          (s = x("react.forward_ref")),
          (c = x("react.suspense")),
          (f = x("react.suspense_list")),
          (p = x("react.memo")),
          (d = x("react.lazy")),
          (h = x("react.block")),
          (m = x("react.server.block")),
          (g = x("react.fundamental")),
          (y = x("react.debug_trace_mode")),
          (k = x("react.legacy_hidden"));
      }
      function v(e) {
        if ("object" === typeof e && null !== e) {
          var n = e.$$typeof;
          switch (n) {
            case t:
              switch ((e = e.type)) {
                case o:
                case l:
                case i:
                case c:
                case f:
                  return e;
                default:
                  switch ((e = e && e.$$typeof)) {
                    case a:
                    case s:
                    case d:
                    case p:
                    case u:
                      return e;
                    default:
                      return n;
                  }
              }
            case r:
              return n;
          }
        }
      }
      var b = u,
        w = t,
        S = s,
        E = o,
        C = d,
        A = p,
        F = r,
        T = l,
        P = i,
        O = c;
      (n.ContextConsumer = a),
        (n.ContextProvider = b),
        (n.Element = w),
        (n.ForwardRef = S),
        (n.Fragment = E),
        (n.Lazy = C),
        (n.Memo = A),
        (n.Portal = F),
        (n.Profiler = T),
        (n.StrictMode = P),
        (n.Suspense = O),
        (n.isAsyncMode = function () {
          return !1;
        }),
        (n.isConcurrentMode = function () {
          return !1;
        }),
        (n.isContextConsumer = function (e) {
          return v(e) === a;
        }),
        (n.isContextProvider = function (e) {
          return v(e) === u;
        }),
        (n.isElement = function (e) {
          return "object" === typeof e && null !== e && e.$$typeof === t;
        }),
        (n.isForwardRef = function (e) {
          return v(e) === s;
        }),
        (n.isFragment = function (e) {
          return v(e) === o;
        }),
        (n.isLazy = function (e) {
          return v(e) === d;
        }),
        (n.isMemo = function (e) {
          return v(e) === p;
        }),
        (n.isPortal = function (e) {
          return v(e) === r;
        }),
        (n.isProfiler = function (e) {
          return v(e) === l;
        }),
        (n.isStrictMode = function (e) {
          return v(e) === i;
        }),
        (n.isSuspense = function (e) {
          return v(e) === c;
        }),
        (n.isValidElementType = function (e) {
          return (
            "string" === typeof e ||
            "function" === typeof e ||
            e === o ||
            e === l ||
            e === y ||
            e === i ||
            e === c ||
            e === f ||
            e === k ||
            ("object" === typeof e &&
              null !== e &&
              (e.$$typeof === d ||
                e.$$typeof === p ||
                e.$$typeof === u ||
                e.$$typeof === a ||
                e.$$typeof === s ||
                e.$$typeof === g ||
                e.$$typeof === h ||
                e[0] === m))
          );
        }),
        (n.typeOf = v);
    },
    9864: function (e, n, t) {
      "use strict";
      e.exports = t(9921);
    },
    7848: function (e, n, t) {
      var r = t(8139);
      e.exports = function (e, n) {
        var t,
          o = null;
        if (!e || "string" !== typeof e) return o;
        for (
          var i, l, u = r(e), a = "function" === typeof n, s = 0, c = u.length;
          s < c;
          s++
        )
          (i = (t = u[s]).property),
            (l = t.value),
            a ? n(i, l, t) : l && (o || (o = {}), (o[i] = l));
        return o;
      };
    },
    1065: function (e, n, t) {
      "use strict";
      t.d(n, {
        Z: function () {
          return $t;
        },
      });
      var r = {};
      t.r(r),
        t.d(r, {
          attentionMarkers: function () {
            return un;
          },
          contentInitial: function () {
            return en;
          },
          disable: function () {
            return an;
          },
          document: function () {
            return Ge;
          },
          flow: function () {
            return tn;
          },
          flowInitial: function () {
            return nn;
          },
          insideSpan: function () {
            return ln;
          },
          string: function () {
            return rn;
          },
          text: function () {
            return on;
          },
        });
      var o = {};
      t.r(o),
        t.d(o, {
          boolean: function () {
            return nt;
          },
          booleanish: function () {
            return tt;
          },
          commaOrSpaceSeparated: function () {
            return ut;
          },
          commaSeparated: function () {
            return lt;
          },
          number: function () {
            return ot;
          },
          overloadedBoolean: function () {
            return rt;
          },
          spaceSeparated: function () {
            return it;
          },
        });
      var i = t(7294),
        l = t(8738),
        u = {}.hasOwnProperty;
      function a(e) {
        return e && "object" === typeof e
          ? u.call(e, "position") || u.call(e, "type")
            ? c(e.position)
            : u.call(e, "start") || u.call(e, "end")
            ? c(e)
            : u.call(e, "line") || u.call(e, "column")
            ? s(e)
            : ""
          : "";
      }
      function s(e) {
        return f(e && e.line) + ":" + f(e && e.column);
      }
      function c(e) {
        return s(e && e.start) + "-" + s(e && e.end);
      }
      function f(e) {
        return e && "number" === typeof e ? e : 1;
      }
      class p extends Error {
        constructor(e, n, t) {
          var r,
            o = [null, null],
            i = {
              start: { line: null, column: null },
              end: { line: null, column: null },
            };
          super(),
            "string" === typeof n && ((t = n), (n = null)),
            "string" === typeof t &&
              (-1 === (r = t.indexOf(":"))
                ? (o[1] = t)
                : ((o[0] = t.slice(0, r)), (o[1] = t.slice(r + 1)))),
            n &&
              ("type" in n || "position" in n
                ? n.position && (i = n.position)
                : "start" in n || "end" in n
                ? (i = n)
                : ("line" in n || "column" in n) && (i.start = n)),
            (this.name = a(n) || "1:1"),
            (this.message = "object" === typeof e ? e.message : e),
            (this.stack = "object" === typeof e ? e.stack : ""),
            (this.reason = this.message),
            (this.line = i.start.line),
            (this.column = i.start.column),
            (this.source = o[0]),
            (this.ruleId = o[1]),
            (this.position = i),
            this.file,
            this.fatal,
            this.url,
            this.note;
        }
      }
      (p.prototype.file = ""),
        (p.prototype.name = ""),
        (p.prototype.reason = ""),
        (p.prototype.message = ""),
        (p.prototype.stack = ""),
        (p.prototype.fatal = null),
        (p.prototype.column = null),
        (p.prototype.line = null),
        (p.prototype.source = null),
        (p.prototype.ruleId = null),
        (p.prototype.position = null);
      const d = {
        basename: function (e, n) {
          if (void 0 !== n && "string" !== typeof n)
            throw new TypeError('"ext" argument must be a string');
          h(e);
          let t,
            r = 0,
            o = -1,
            i = e.length;
          if (void 0 === n || 0 === n.length || n.length > e.length) {
            for (; i--; )
              if (47 === e.charCodeAt(i)) {
                if (t) {
                  r = i + 1;
                  break;
                }
              } else o < 0 && ((t = !0), (o = i + 1));
            return o < 0 ? "" : e.slice(r, o);
          }
          if (n === e) return "";
          let l = -1,
            u = n.length - 1;
          for (; i--; )
            if (47 === e.charCodeAt(i)) {
              if (t) {
                r = i + 1;
                break;
              }
            } else
              l < 0 && ((t = !0), (l = i + 1)),
                u > -1 &&
                  (e.charCodeAt(i) === n.charCodeAt(u--)
                    ? u < 0 && (o = i)
                    : ((u = -1), (o = l)));
          r === o ? (o = l) : o < 0 && (o = e.length);
          return e.slice(r, o);
        },
        dirname: function (e) {
          if ((h(e), 0 === e.length)) return ".";
          let n,
            t = -1,
            r = e.length;
          for (; --r; )
            if (47 === e.charCodeAt(r)) {
              if (n) {
                t = r;
                break;
              }
            } else n || (n = !0);
          return t < 0
            ? 47 === e.charCodeAt(0)
              ? "/"
              : "."
            : 1 === t && 47 === e.charCodeAt(0)
            ? "//"
            : e.slice(0, t);
        },
        extname: function (e) {
          h(e);
          let n,
            t = e.length,
            r = -1,
            o = 0,
            i = -1,
            l = 0;
          for (; t--; ) {
            const u = e.charCodeAt(t);
            if (47 !== u)
              r < 0 && ((n = !0), (r = t + 1)),
                46 === u
                  ? i < 0
                    ? (i = t)
                    : 1 !== l && (l = 1)
                  : i > -1 && (l = -1);
            else if (n) {
              o = t + 1;
              break;
            }
          }
          if (
            i < 0 ||
            r < 0 ||
            0 === l ||
            (1 === l && i === r - 1 && i === o + 1)
          )
            return "";
          return e.slice(i, r);
        },
        join: function (...e) {
          let n,
            t = -1;
          for (; ++t < e.length; )
            h(e[t]), e[t] && (n = void 0 === n ? e[t] : n + "/" + e[t]);
          return void 0 === n
            ? "."
            : (function (e) {
                h(e);
                const n = 47 === e.charCodeAt(0);
                let t = (function (e, n) {
                  let t,
                    r,
                    o = "",
                    i = 0,
                    l = -1,
                    u = 0,
                    a = -1;
                  for (; ++a <= e.length; ) {
                    if (a < e.length) t = e.charCodeAt(a);
                    else {
                      if (47 === t) break;
                      t = 47;
                    }
                    if (47 === t) {
                      if (l === a - 1 || 1 === u);
                      else if (l !== a - 1 && 2 === u) {
                        if (
                          o.length < 2 ||
                          2 !== i ||
                          46 !== o.charCodeAt(o.length - 1) ||
                          46 !== o.charCodeAt(o.length - 2)
                        )
                          if (o.length > 2) {
                            if (
                              ((r = o.lastIndexOf("/")), r !== o.length - 1)
                            ) {
                              r < 0
                                ? ((o = ""), (i = 0))
                                : ((o = o.slice(0, r)),
                                  (i = o.length - 1 - o.lastIndexOf("/"))),
                                (l = a),
                                (u = 0);
                              continue;
                            }
                          } else if (o.length > 0) {
                            (o = ""), (i = 0), (l = a), (u = 0);
                            continue;
                          }
                        n && ((o = o.length > 0 ? o + "/.." : ".."), (i = 2));
                      } else
                        o.length > 0
                          ? (o += "/" + e.slice(l + 1, a))
                          : (o = e.slice(l + 1, a)),
                          (i = a - l - 1);
                      (l = a), (u = 0);
                    } else 46 === t && u > -1 ? u++ : (u = -1);
                  }
                  return o;
                })(e, !n);
                0 !== t.length || n || (t = ".");
                t.length > 0 && 47 === e.charCodeAt(e.length - 1) && (t += "/");
                return n ? "/" + t : t;
              })(n);
        },
        sep: "/",
      };
      function h(e) {
        if ("string" !== typeof e)
          throw new TypeError(
            "Path must be a string. Received " + JSON.stringify(e)
          );
      }
      const m = {
        cwd: function () {
          return "/";
        },
      };
      function g(e) {
        return null !== e && "object" === typeof e && e.href && e.origin;
      }
      function y(e) {
        if ("string" === typeof e) e = new URL(e);
        else if (!g(e)) {
          const n = new TypeError(
            'The "path" argument must be of type string or an instance of URL. Received `' +
              e +
              "`"
          );
          throw ((n.code = "ERR_INVALID_ARG_TYPE"), n);
        }
        if ("file:" !== e.protocol) {
          const e = new TypeError("The URL must be of scheme file");
          throw ((e.code = "ERR_INVALID_URL_SCHEME"), e);
        }
        return (function (e) {
          if ("" !== e.hostname) {
            const e = new TypeError(
              'File URL host must be "localhost" or empty on darwin'
            );
            throw ((e.code = "ERR_INVALID_FILE_URL_HOST"), e);
          }
          const n = e.pathname;
          let t = -1;
          for (; ++t < n.length; )
            if (37 === n.charCodeAt(t) && 50 === n.charCodeAt(t + 1)) {
              const e = n.charCodeAt(t + 2);
              if (70 === e || 102 === e) {
                const e = new TypeError(
                  "File URL path must not include encoded / characters"
                );
                throw ((e.code = "ERR_INVALID_FILE_URL_PATH"), e);
              }
            }
          return decodeURIComponent(n);
        })(e);
      }
      const k = ["history", "path", "basename", "stem", "extname", "dirname"];
      class x {
        constructor(e) {
          let n;
          (n = e
            ? "string" === typeof e || l(e)
              ? { value: e }
              : g(e)
              ? { path: e }
              : e
            : {}),
            (this.data = {}),
            (this.messages = []),
            (this.history = []),
            (this.cwd = m.cwd()),
            this.value,
            this.stored,
            this.result,
            this.map;
          let t,
            r = -1;
          for (; ++r < k.length; ) {
            const e = k[r];
            e in n &&
              void 0 !== n[e] &&
              (this[e] = "history" === e ? [...n[e]] : n[e]);
          }
          for (t in n) k.includes(t) || (this[t] = n[t]);
        }
        get path() {
          return this.history[this.history.length - 1];
        }
        set path(e) {
          g(e) && (e = y(e)),
            b(e, "path"),
            this.path !== e && this.history.push(e);
        }
        get dirname() {
          return "string" === typeof this.path ? d.dirname(this.path) : void 0;
        }
        set dirname(e) {
          w(this.basename, "dirname"),
            (this.path = d.join(e || "", this.basename));
        }
        get basename() {
          return "string" === typeof this.path ? d.basename(this.path) : void 0;
        }
        set basename(e) {
          b(e, "basename"),
            v(e, "basename"),
            (this.path = d.join(this.dirname || "", e));
        }
        get extname() {
          return "string" === typeof this.path ? d.extname(this.path) : void 0;
        }
        set extname(e) {
          if ((v(e, "extname"), w(this.dirname, "extname"), e)) {
            if (46 !== e.charCodeAt(0))
              throw new Error("`extname` must start with `.`");
            if (e.includes(".", 1))
              throw new Error("`extname` cannot contain multiple dots");
          }
          this.path = d.join(this.dirname, this.stem + (e || ""));
        }
        get stem() {
          return "string" === typeof this.path
            ? d.basename(this.path, this.extname)
            : void 0;
        }
        set stem(e) {
          b(e, "stem"),
            v(e, "stem"),
            (this.path = d.join(this.dirname || "", e + (this.extname || "")));
        }
        toString(e) {
          return (this.value || "").toString(e);
        }
        message(e, n, t) {
          const r = new p(e, n, t);
          return (
            this.path &&
              ((r.name = this.path + ":" + r.name), (r.file = this.path)),
            (r.fatal = !1),
            this.messages.push(r),
            r
          );
        }
        info(e, n, t) {
          const r = this.message(e, n, t);
          return (r.fatal = null), r;
        }
        fail(e, n, t) {
          const r = this.message(e, n, t);
          throw ((r.fatal = !0), r);
        }
      }
      function v(e, n) {
        if (e && e.includes(d.sep))
          throw new Error(
            "`" + n + "` cannot be a path: did not expect `" + d.sep + "`"
          );
      }
      function b(e, n) {
        if (!e) throw new Error("`" + n + "` cannot be empty");
      }
      function w(e, n) {
        if (!e)
          throw new Error("Setting `" + n + "` requires `path` to be set too");
      }
      function S(e) {
        if (e) throw e;
      }
      var E = t(4470);
      function C(e) {
        if ("[object Object]" !== Object.prototype.toString.call(e)) return !1;
        const n = Object.getPrototypeOf(e);
        return null === n || n === Object.prototype;
      }
      function A() {
        const e = [],
          n = {
            run: function (...n) {
              let t = -1;
              const r = n.pop();
              if ("function" !== typeof r)
                throw new TypeError(
                  "Expected function as last argument, not " + r
                );
              !(function o(i, ...l) {
                const u = e[++t];
                let a = -1;
                if (i) r(i);
                else {
                  for (; ++a < n.length; )
                    (null !== l[a] && void 0 !== l[a]) || (l[a] = n[a]);
                  (n = l),
                    u
                      ? (function (e, n) {
                          let t;
                          return r;
                          function r(...n) {
                            const r = e.length > n.length;
                            let u;
                            r && n.push(o);
                            try {
                              u = e(...n);
                            } catch (i) {
                              const n = i;
                              if (r && t) throw n;
                              return o(n);
                            }
                            r ||
                              (u instanceof Promise
                                ? u.then(l, o)
                                : u instanceof Error
                                ? o(u)
                                : l(u));
                          }
                          function o(e, ...r) {
                            t || ((t = !0), n(e, ...r));
                          }
                          function l(e) {
                            o(null, e);
                          }
                        })(
                          u,
                          o
                        )(...l)
                      : r(null, ...l);
                }
              })(null, ...n);
            },
            use: function (t) {
              if ("function" !== typeof t)
                throw new TypeError(
                  "Expected `middelware` to be a function, not " + t
                );
              return e.push(t), n;
            },
          };
        return n;
      }
      const F = (function e() {
          const n = A(),
            t = [];
          let r,
            o = {},
            i = -1;
          return (
            (u.data = function (e, n) {
              if ("string" === typeof e)
                return 2 === arguments.length
                  ? (D("data", r), (o[e] = n), u)
                  : (T.call(o, e) && o[e]) || null;
              if (e) return D("data", r), (o = e), u;
              return o;
            }),
            (u.Parser = void 0),
            (u.Compiler = void 0),
            (u.freeze = function () {
              if (r) return u;
              for (; ++i < t.length; ) {
                const [e, ...r] = t[i];
                if (!1 === r[0]) continue;
                !0 === r[0] && (r[1] = void 0);
                const o = e.call(u, ...r);
                "function" === typeof o && n.use(o);
              }
              return (r = !0), (i = Number.POSITIVE_INFINITY), u;
            }),
            (u.attachers = t),
            (u.use = function (e, ...n) {
              let i;
              if ((D("use", r), null === e || void 0 === e));
              else if ("function" === typeof e) c(e, ...n);
              else {
                if ("object" !== typeof e)
                  throw new TypeError("Expected usable value, not `" + e + "`");
                Array.isArray(e) ? s(e) : a(e);
              }
              i && (o.settings = Object.assign(o.settings || {}, i));
              return u;
              function l(e) {
                if ("function" === typeof e) c(e);
                else {
                  if ("object" !== typeof e)
                    throw new TypeError(
                      "Expected usable value, not `" + e + "`"
                    );
                  if (Array.isArray(e)) {
                    const [n, ...t] = e;
                    c(n, ...t);
                  } else a(e);
                }
              }
              function a(e) {
                s(e.plugins),
                  e.settings && (i = Object.assign(i || {}, e.settings));
              }
              function s(e) {
                let n = -1;
                if (null === e || void 0 === e);
                else {
                  if (!Array.isArray(e))
                    throw new TypeError(
                      "Expected a list of plugins, not `" + e + "`"
                    );
                  for (; ++n < e.length; ) {
                    l(e[n]);
                  }
                }
              }
              function c(e, n) {
                let r,
                  o = -1;
                for (; ++o < t.length; )
                  if (t[o][0] === e) {
                    r = t[o];
                    break;
                  }
                r
                  ? (C(r[1]) && C(n) && (n = E(!0, r[1], n)), (r[1] = n))
                  : t.push([...arguments]);
              }
            }),
            (u.parse = function (e) {
              u.freeze();
              const n = M(e),
                t = u.Parser;
              if ((O("parse", t), P(t, "parse")))
                return new t(String(n), n).parse();
              return t(String(n), n);
            }),
            (u.stringify = function (e, n) {
              u.freeze();
              const t = M(n),
                r = u.Compiler;
              if ((I("stringify", r), L(e), P(r, "compile")))
                return new r(e, t).compile();
              return r(e, t);
            }),
            (u.run = function (e, t, r) {
              L(e),
                u.freeze(),
                r || "function" !== typeof t || ((r = t), (t = void 0));
              if (!r) return new Promise(o);
              function o(o, i) {
                function l(n, t, l) {
                  (t = t || e), n ? i(n) : o ? o(t) : r(null, t, l);
                }
                n.run(e, M(t), l);
              }
              o(null, r);
            }),
            (u.runSync = function (e, n) {
              let t, r;
              return u.run(e, n, o), z("runSync", "run", r), t;
              function o(e, n) {
                S(e), (t = n), (r = !0);
              }
            }),
            (u.process = function (e, n) {
              if (
                (u.freeze(),
                O("process", u.Parser),
                I("process", u.Compiler),
                !n)
              )
                return new Promise(t);
              function t(t, r) {
                const o = M(e);
                function i(e, o) {
                  e || !o ? r(e) : t ? t(o) : n(null, o);
                }
                u.run(u.parse(o), o, (e, n, t) => {
                  if (!e && n && t) {
                    const o = u.stringify(n, t);
                    void 0 === o ||
                      null === o ||
                      ("string" === typeof (r = o) || l(r)
                        ? (t.value = o)
                        : (t.result = o)),
                      i(e, t);
                  } else i(e);
                  var r;
                });
              }
              t(null, n);
            }),
            (u.processSync = function (e) {
              let n;
              u.freeze(),
                O("processSync", u.Parser),
                I("processSync", u.Compiler);
              const t = M(e);
              return u.process(t, r), z("processSync", "process", n), t;
              function r(e) {
                (n = !0), S(e);
              }
            }),
            u
          );
          function u() {
            const n = e();
            let r = -1;
            for (; ++r < t.length; ) n.use(...t[r]);
            return n.data(E(!0, {}, o)), n;
          }
        })().freeze(),
        T = {}.hasOwnProperty;
      function P(e, n) {
        return (
          "function" === typeof e &&
          e.prototype &&
          ((function (e) {
            let n;
            for (n in e) if (T.call(e, n)) return !0;
            return !1;
          })(e.prototype) ||
            n in e.prototype)
        );
      }
      function O(e, n) {
        if ("function" !== typeof n)
          throw new TypeError("Cannot `" + e + "` without `Parser`");
      }
      function I(e, n) {
        if ("function" !== typeof n)
          throw new TypeError("Cannot `" + e + "` without `Compiler`");
      }
      function D(e, n) {
        if (n)
          throw new Error(
            "Cannot call `" +
              e +
              "` on a frozen processor.\nCreate a new processor first, by calling it: use `processor()` instead of `processor`."
          );
      }
      function L(e) {
        if (!C(e) || "string" !== typeof e.type)
          throw new TypeError("Expected node, got `" + e + "`");
      }
      function z(e, n, t) {
        if (!t)
          throw new Error(
            "`" + e + "` finished async. Use `" + n + "` instead"
          );
      }
      function M(e) {
        return (function (e) {
          return Boolean(
            e && "object" === typeof e && "message" in e && "messages" in e
          );
        })(e)
          ? e
          : new x(e);
      }
      function R(e, n) {
        return (
          (e &&
            "object" === typeof e &&
            (e.value ||
              (n ? e.alt : "") ||
              ("children" in e && B(e.children, n)) ||
              (Array.isArray(e) && B(e, n)))) ||
          ""
        );
      }
      function B(e, n) {
        for (var t = [], r = -1; ++r < e.length; ) t[r] = R(e[r], n);
        return t.join("");
      }
      function _(e, n, t, r) {
        const o = e.length;
        let i,
          l = 0;
        if (
          ((n = n < 0 ? (-n > o ? 0 : o + n) : n > o ? o : n),
          (t = t > 0 ? t : 0),
          r.length < 1e4)
        )
          (i = Array.from(r)), i.unshift(n, t), [].splice.apply(e, i);
        else
          for (t && [].splice.apply(e, [n, t]); l < r.length; )
            (i = r.slice(l, l + 1e4)),
              i.unshift(n, 0),
              [].splice.apply(e, i),
              (l += 1e4),
              (n += 1e4);
      }
      function j(e, n) {
        return e.length > 0 ? (_(e, e.length, 0, n), e) : n;
      }
      const H = {}.hasOwnProperty;
      function U(e, n) {
        let t;
        for (t in n) {
          const r = (H.call(e, t) ? e[t] : void 0) || (e[t] = {}),
            o = n[t];
          let i;
          for (i in o) {
            H.call(r, i) || (r[i] = []);
            const e = o[i];
            N(r[i], Array.isArray(e) ? e : e ? [e] : []);
          }
        }
      }
      function N(e, n) {
        let t = -1;
        const r = [];
        for (; ++t < n.length; ) ("after" === n[t].add ? e : r).push(n[t]);
        _(e, 0, 0, r);
      }
      const V = ne(/[A-Za-z]/),
        q = ne(/\d/),
        $ = ne(/[\dA-Fa-f]/),
        W = ne(/[\dA-Za-z]/),
        Q = ne(/[!-/:-@[-`{-~]/),
        Y = ne(/[#-'*+\--9=?A-Z^-~]/);
      function K(e) {
        return null !== e && (e < 32 || 127 === e);
      }
      function X(e) {
        return null !== e && (e < 0 || 32 === e);
      }
      function Z(e) {
        return null !== e && e < -2;
      }
      function J(e) {
        return -2 === e || -1 === e || 32 === e;
      }
      const G = ne(/\s/),
        ee = ne(
          /[!-/:-@[-`{-~\u00A1\u00A7\u00AB\u00B6\u00B7\u00BB\u00BF\u037E\u0387\u055A-\u055F\u0589\u058A\u05BE\u05C0\u05C3\u05C6\u05F3\u05F4\u0609\u060A\u060C\u060D\u061B\u061E\u061F\u066A-\u066D\u06D4\u0700-\u070D\u07F7-\u07F9\u0830-\u083E\u085E\u0964\u0965\u0970\u09FD\u0A76\u0AF0\u0C77\u0C84\u0DF4\u0E4F\u0E5A\u0E5B\u0F04-\u0F12\u0F14\u0F3A-\u0F3D\u0F85\u0FD0-\u0FD4\u0FD9\u0FDA\u104A-\u104F\u10FB\u1360-\u1368\u1400\u166E\u169B\u169C\u16EB-\u16ED\u1735\u1736\u17D4-\u17D6\u17D8-\u17DA\u1800-\u180A\u1944\u1945\u1A1E\u1A1F\u1AA0-\u1AA6\u1AA8-\u1AAD\u1B5A-\u1B60\u1BFC-\u1BFF\u1C3B-\u1C3F\u1C7E\u1C7F\u1CC0-\u1CC7\u1CD3\u2010-\u2027\u2030-\u2043\u2045-\u2051\u2053-\u205E\u207D\u207E\u208D\u208E\u2308-\u230B\u2329\u232A\u2768-\u2775\u27C5\u27C6\u27E6-\u27EF\u2983-\u2998\u29D8-\u29DB\u29FC\u29FD\u2CF9-\u2CFC\u2CFE\u2CFF\u2D70\u2E00-\u2E2E\u2E30-\u2E4F\u2E52\u3001-\u3003\u3008-\u3011\u3014-\u301F\u3030\u303D\u30A0\u30FB\uA4FE\uA4FF\uA60D-\uA60F\uA673\uA67E\uA6F2-\uA6F7\uA874-\uA877\uA8CE\uA8CF\uA8F8-\uA8FA\uA8FC\uA92E\uA92F\uA95F\uA9C1-\uA9CD\uA9DE\uA9DF\uAA5C-\uAA5F\uAADE\uAADF\uAAF0\uAAF1\uABEB\uFD3E\uFD3F\uFE10-\uFE19\uFE30-\uFE52\uFE54-\uFE61\uFE63\uFE68\uFE6A\uFE6B\uFF01-\uFF03\uFF05-\uFF0A\uFF0C-\uFF0F\uFF1A\uFF1B\uFF1F\uFF20\uFF3B-\uFF3D\uFF3F\uFF5B\uFF5D\uFF5F-\uFF65]/
        );
      function ne(e) {
        return function (n) {
          return null !== n && e.test(String.fromCharCode(n));
        };
      }
      function te(e, n, t, r) {
        const o = r ? r - 1 : Number.POSITIVE_INFINITY;
        let i = 0;
        return function (r) {
          if (J(r)) return e.enter(t), l(r);
          return n(r);
        };
        function l(r) {
          return J(r) && i++ < o ? (e.consume(r), l) : (e.exit(t), n(r));
        }
      }
      const re = {
        tokenize: function (e) {
          const n = e.attempt(
            this.parser.constructs.contentInitial,
            function (t) {
              if (null === t) return void e.consume(t);
              return (
                e.enter("lineEnding"),
                e.consume(t),
                e.exit("lineEnding"),
                te(e, n, "linePrefix")
              );
            },
            function (n) {
              return e.enter("paragraph"), r(n);
            }
          );
          let t;
          return n;
          function r(n) {
            const r = e.enter("chunkText", {
              contentType: "text",
              previous: t,
            });
            return t && (t.next = r), (t = r), o(n);
          }
          function o(n) {
            return null === n
              ? (e.exit("chunkText"), e.exit("paragraph"), void e.consume(n))
              : Z(n)
              ? (e.consume(n), e.exit("chunkText"), r)
              : (e.consume(n), o);
          }
        },
      };
      const oe = {
          tokenize: function (e) {
            const n = this,
              t = [];
            let r,
              o,
              i,
              l = 0;
            return u;
            function u(r) {
              if (l < t.length) {
                const o = t[l];
                return (
                  (n.containerState = o[1]),
                  e.attempt(o[0].continuation, a, s)(r)
                );
              }
              return s(r);
            }
            function a(e) {
              if ((l++, n.containerState._closeFlow)) {
                (n.containerState._closeFlow = void 0), r && k();
                const t = n.events.length;
                let o,
                  i = t;
                for (; i--; )
                  if (
                    "exit" === n.events[i][0] &&
                    "chunkFlow" === n.events[i][1].type
                  ) {
                    o = n.events[i][1].end;
                    break;
                  }
                y(l);
                let u = t;
                for (; u < n.events.length; )
                  (n.events[u][1].end = Object.assign({}, o)), u++;
                return (
                  _(n.events, i + 1, 0, n.events.slice(t)),
                  (n.events.length = u),
                  s(e)
                );
              }
              return u(e);
            }
            function s(o) {
              if (l === t.length) {
                if (!r) return p(o);
                if (r.currentConstruct && r.currentConstruct.concrete)
                  return h(o);
                n.interrupt = Boolean(r.currentConstruct);
              }
              return (n.containerState = {}), e.check(ie, c, f)(o);
            }
            function c(e) {
              return r && k(), y(l), p(e);
            }
            function f(e) {
              return (
                (n.parser.lazy[n.now().line] = l !== t.length),
                (i = n.now().offset),
                h(e)
              );
            }
            function p(t) {
              return (n.containerState = {}), e.attempt(ie, d, h)(t);
            }
            function d(e) {
              return l++, t.push([n.currentConstruct, n.containerState]), p(e);
            }
            function h(t) {
              return null === t
                ? (r && k(), y(0), void e.consume(t))
                : ((r = r || n.parser.flow(n.now())),
                  e.enter("chunkFlow", {
                    contentType: "flow",
                    previous: o,
                    _tokenizer: r,
                  }),
                  m(t));
            }
            function m(t) {
              return null === t
                ? (g(e.exit("chunkFlow"), !0), y(0), void e.consume(t))
                : Z(t)
                ? (e.consume(t),
                  g(e.exit("chunkFlow")),
                  (l = 0),
                  (n.interrupt = void 0),
                  u)
                : (e.consume(t), m);
            }
            function g(e, t) {
              const u = n.sliceStream(e);
              if (
                (t && u.push(null),
                (e.previous = o),
                o && (o.next = e),
                (o = e),
                r.defineSkip(e.start),
                r.write(u),
                n.parser.lazy[e.start.line])
              ) {
                let e = r.events.length;
                for (; e--; )
                  if (
                    r.events[e][1].start.offset < i &&
                    (!r.events[e][1].end || r.events[e][1].end.offset > i)
                  )
                    return;
                const t = n.events.length;
                let o,
                  u,
                  a = t;
                for (; a--; )
                  if (
                    "exit" === n.events[a][0] &&
                    "chunkFlow" === n.events[a][1].type
                  ) {
                    if (o) {
                      u = n.events[a][1].end;
                      break;
                    }
                    o = !0;
                  }
                for (y(l), e = t; e < n.events.length; )
                  (n.events[e][1].end = Object.assign({}, u)), e++;
                _(n.events, a + 1, 0, n.events.slice(t)), (n.events.length = e);
              }
            }
            function y(r) {
              let o = t.length;
              for (; o-- > r; ) {
                const r = t[o];
                (n.containerState = r[1]), r[0].exit.call(n, e);
              }
              t.length = r;
            }
            function k() {
              r.write([null]),
                (o = void 0),
                (r = void 0),
                (n.containerState._closeFlow = void 0);
            }
          },
        },
        ie = {
          tokenize: function (e, n, t) {
            return te(
              e,
              e.attempt(this.parser.constructs.document, n, t),
              "linePrefix",
              this.parser.constructs.disable.null.includes("codeIndented")
                ? void 0
                : 4
            );
          },
        };
      const le = {
        tokenize: function (e, n, t) {
          return te(
            e,
            function (e) {
              return null === e || Z(e) ? n(e) : t(e);
            },
            "linePrefix"
          );
        },
        partial: !0,
      };
      function ue(e) {
        const n = {};
        let t,
          r,
          o,
          i,
          l,
          u,
          a,
          s = -1;
        for (; ++s < e.length; ) {
          for (; s in n; ) s = n[s];
          if (
            ((t = e[s]),
            s &&
              "chunkFlow" === t[1].type &&
              "listItemPrefix" === e[s - 1][1].type &&
              ((u = t[1]._tokenizer.events),
              (o = 0),
              o < u.length && "lineEndingBlank" === u[o][1].type && (o += 2),
              o < u.length && "content" === u[o][1].type))
          )
            for (; ++o < u.length && "content" !== u[o][1].type; )
              "chunkText" === u[o][1].type &&
                ((u[o][1]._isInFirstContentOfListItem = !0), o++);
          if ("enter" === t[0])
            t[1].contentType &&
              (Object.assign(n, ae(e, s)), (s = n[s]), (a = !0));
          else if (t[1]._container) {
            for (
              o = s, r = void 0;
              o-- &&
              ((i = e[o]),
              "lineEnding" === i[1].type || "lineEndingBlank" === i[1].type);

            )
              "enter" === i[0] &&
                (r && (e[r][1].type = "lineEndingBlank"),
                (i[1].type = "lineEnding"),
                (r = o));
            r &&
              ((t[1].end = Object.assign({}, e[r][1].start)),
              (l = e.slice(r, s)),
              l.unshift(t),
              _(e, r, s - r + 1, l));
          }
        }
        return !a;
      }
      function ae(e, n) {
        const t = e[n][1],
          r = e[n][2];
        let o = n - 1;
        const i = [],
          l = t._tokenizer || r.parser[t.contentType](t.start),
          u = l.events,
          a = [],
          s = {};
        let c,
          f,
          p = -1,
          d = t,
          h = 0,
          m = 0;
        const g = [m];
        for (; d; ) {
          for (; e[++o][1] !== d; );
          i.push(o),
            d._tokenizer ||
              ((c = r.sliceStream(d)),
              d.next || c.push(null),
              f && l.defineSkip(d.start),
              d._isInFirstContentOfListItem &&
                (l._gfmTasklistFirstContentOfListItem = !0),
              l.write(c),
              d._isInFirstContentOfListItem &&
                (l._gfmTasklistFirstContentOfListItem = void 0)),
            (f = d),
            (d = d.next);
        }
        for (d = t; ++p < u.length; )
          "exit" === u[p][0] &&
            "enter" === u[p - 1][0] &&
            u[p][1].type === u[p - 1][1].type &&
            u[p][1].start.line !== u[p][1].end.line &&
            ((m = p + 1),
            g.push(m),
            (d._tokenizer = void 0),
            (d.previous = void 0),
            (d = d.next));
        for (
          l.events = [],
            d ? ((d._tokenizer = void 0), (d.previous = void 0)) : g.pop(),
            p = g.length;
          p--;

        ) {
          const n = u.slice(g[p], g[p + 1]),
            t = i.pop();
          a.unshift([t, t + n.length - 1]), _(e, t, 2, n);
        }
        for (p = -1; ++p < a.length; )
          (s[h + a[p][0]] = h + a[p][1]), (h += a[p][1] - a[p][0] - 1);
        return s;
      }
      const se = {
          tokenize: function (e, n) {
            let t;
            return function (n) {
              return (
                e.enter("content"),
                (t = e.enter("chunkContent", { contentType: "content" })),
                r(n)
              );
            };
            function r(n) {
              return null === n
                ? o(n)
                : Z(n)
                ? e.check(ce, i, o)(n)
                : (e.consume(n), r);
            }
            function o(t) {
              return e.exit("chunkContent"), e.exit("content"), n(t);
            }
            function i(n) {
              return (
                e.consume(n),
                e.exit("chunkContent"),
                (t.next = e.enter("chunkContent", {
                  contentType: "content",
                  previous: t,
                })),
                (t = t.next),
                r
              );
            }
          },
          resolve: function (e) {
            return ue(e), e;
          },
        },
        ce = {
          tokenize: function (e, n, t) {
            const r = this;
            return function (n) {
              return (
                e.exit("chunkContent"),
                e.enter("lineEnding"),
                e.consume(n),
                e.exit("lineEnding"),
                te(e, o, "linePrefix")
              );
            };
            function o(o) {
              if (null === o || Z(o)) return t(o);
              const i = r.events[r.events.length - 1];
              return !r.parser.constructs.disable.null.includes(
                "codeIndented"
              ) &&
                i &&
                "linePrefix" === i[1].type &&
                i[2].sliceSerialize(i[1], !0).length >= 4
                ? n(o)
                : e.interrupt(r.parser.constructs.flow, t, n)(o);
            }
          },
          partial: !0,
        };
      const fe = {
        tokenize: function (e) {
          const n = this,
            t = e.attempt(
              le,
              function (r) {
                if (null === r) return void e.consume(r);
                return (
                  e.enter("lineEndingBlank"),
                  e.consume(r),
                  e.exit("lineEndingBlank"),
                  (n.currentConstruct = void 0),
                  t
                );
              },
              e.attempt(
                this.parser.constructs.flowInitial,
                r,
                te(
                  e,
                  e.attempt(this.parser.constructs.flow, r, e.attempt(se, r)),
                  "linePrefix"
                )
              )
            );
          return t;
          function r(r) {
            if (null !== r)
              return (
                e.enter("lineEnding"),
                e.consume(r),
                e.exit("lineEnding"),
                (n.currentConstruct = void 0),
                t
              );
            e.consume(r);
          }
        },
      };
      const pe = { resolveAll: ge() },
        de = me("string"),
        he = me("text");
      function me(e) {
        return {
          tokenize: function (n) {
            const t = this,
              r = this.parser.constructs[e],
              o = n.attempt(r, i, l);
            return i;
            function i(e) {
              return a(e) ? o(e) : l(e);
            }
            function l(e) {
              if (null !== e) return n.enter("data"), n.consume(e), u;
              n.consume(e);
            }
            function u(e) {
              return a(e) ? (n.exit("data"), o(e)) : (n.consume(e), u);
            }
            function a(e) {
              if (null === e) return !0;
              const n = r[e];
              let o = -1;
              if (n)
                for (; ++o < n.length; ) {
                  const e = n[o];
                  if (!e.previous || e.previous.call(t, t.previous)) return !0;
                }
              return !1;
            }
          },
          resolveAll: ge("text" === e ? ye : void 0),
        };
      }
      function ge(e) {
        return function (n, t) {
          let r,
            o = -1;
          for (; ++o <= n.length; )
            void 0 === r
              ? n[o] && "data" === n[o][1].type && ((r = o), o++)
              : (n[o] && "data" === n[o][1].type) ||
                (o !== r + 2 &&
                  ((n[r][1].end = n[o - 1][1].end),
                  n.splice(r + 2, o - r - 2),
                  (o = r + 2)),
                (r = void 0));
          return e ? e(n, t) : n;
        };
      }
      function ye(e, n) {
        let t = -1;
        for (; ++t <= e.length; )
          if (
            (t === e.length || "lineEnding" === e[t][1].type) &&
            "data" === e[t - 1][1].type
          ) {
            const r = e[t - 1][1],
              o = n.sliceStream(r);
            let i,
              l = o.length,
              u = -1,
              a = 0;
            for (; l--; ) {
              const e = o[l];
              if ("string" === typeof e) {
                for (u = e.length; 32 === e.charCodeAt(u - 1); ) a++, u--;
                if (u) break;
                u = -1;
              } else if (-2 === e) (i = !0), a++;
              else if (-1 !== e) {
                l++;
                break;
              }
            }
            if (a) {
              const o = {
                type:
                  t === e.length || i || a < 2
                    ? "lineSuffix"
                    : "hardBreakTrailing",
                start: {
                  line: r.end.line,
                  column: r.end.column - a,
                  offset: r.end.offset - a,
                  _index: r.start._index + l,
                  _bufferIndex: l ? u : r.start._bufferIndex + u,
                },
                end: Object.assign({}, r.end),
              };
              (r.end = Object.assign({}, o.start)),
                r.start.offset === r.end.offset
                  ? Object.assign(r, o)
                  : (e.splice(t, 0, ["enter", o, n], ["exit", o, n]), (t += 2));
            }
            t++;
          }
        return e;
      }
      function ke(e, n, t) {
        const r = [];
        let o = -1;
        for (; ++o < e.length; ) {
          const i = e[o].resolveAll;
          i && !r.includes(i) && ((n = i(n, t)), r.push(i));
        }
        return n;
      }
      function xe(e, n, t) {
        let r = Object.assign(
          t ? Object.assign({}, t) : { line: 1, column: 1, offset: 0 },
          { _index: 0, _bufferIndex: -1 }
        );
        const o = {},
          i = [];
        let l = [],
          u = [],
          a = !0;
        const s = {
            consume: function (e) {
              Z(e)
                ? (r.line++,
                  (r.column = 1),
                  (r.offset += -3 === e ? 2 : 1),
                  v())
                : -1 !== e && (r.column++, r.offset++);
              r._bufferIndex < 0
                ? r._index++
                : (r._bufferIndex++,
                  r._bufferIndex === l[r._index].length &&
                    ((r._bufferIndex = -1), r._index++));
              (c.previous = e), (a = !0);
            },
            enter: function (e, n) {
              const t = n || {};
              return (
                (t.type = e),
                (t.start = h()),
                c.events.push(["enter", t, c]),
                u.push(t),
                t
              );
            },
            exit: function (e) {
              const n = u.pop();
              return (n.end = h()), c.events.push(["exit", n, c]), n;
            },
            attempt: k(function (e, n) {
              x(e, n.from);
            }),
            check: k(y),
            interrupt: k(y, { interrupt: !0 }),
          },
          c = {
            previous: null,
            code: null,
            containerState: {},
            events: [],
            parser: e,
            sliceStream: d,
            sliceSerialize: function (e, n) {
              return (function (e, n) {
                let t = -1;
                const r = [];
                let o;
                for (; ++t < e.length; ) {
                  const i = e[t];
                  let l;
                  if ("string" === typeof i) l = i;
                  else
                    switch (i) {
                      case -5:
                        l = "\r";
                        break;
                      case -4:
                        l = "\n";
                        break;
                      case -3:
                        l = "\r\n";
                        break;
                      case -2:
                        l = n ? " " : "\t";
                        break;
                      case -1:
                        if (!n && o) continue;
                        l = " ";
                        break;
                      default:
                        l = String.fromCharCode(i);
                    }
                  (o = -2 === i), r.push(l);
                }
                return r.join("");
              })(d(e), n);
            },
            now: h,
            defineSkip: function (e) {
              (o[e.line] = e.column), v();
            },
            write: function (e) {
              if (((l = j(l, e)), m(), null !== l[l.length - 1])) return [];
              return x(n, 0), (c.events = ke(i, c.events, c)), c.events;
            },
          };
        let f,
          p = n.tokenize.call(c, s);
        return n.resolveAll && i.push(n), c;
        function d(e) {
          return (function (e, n) {
            const t = n.start._index,
              r = n.start._bufferIndex,
              o = n.end._index,
              i = n.end._bufferIndex;
            let l;
            t === o
              ? (l = [e[t].slice(r, i)])
              : ((l = e.slice(t, o)),
                r > -1 && (l[0] = l[0].slice(r)),
                i > 0 && l.push(e[o].slice(0, i)));
            return l;
          })(l, e);
        }
        function h() {
          return Object.assign({}, r);
        }
        function m() {
          let e;
          for (; r._index < l.length; ) {
            const n = l[r._index];
            if ("string" === typeof n)
              for (
                e = r._index, r._bufferIndex < 0 && (r._bufferIndex = 0);
                r._index === e && r._bufferIndex < n.length;

              )
                g(n.charCodeAt(r._bufferIndex));
            else g(n);
          }
        }
        function g(e) {
          (a = void 0), (f = e), (p = p(e));
        }
        function y(e, n) {
          n.restore();
        }
        function k(e, n) {
          return function (t, o, i) {
            let l, f, p, d;
            return Array.isArray(t)
              ? m(t)
              : "tokenize" in t
              ? m([t])
              : (function (e) {
                  return n;
                  function n(n) {
                    const t = null !== n && e[n],
                      r = null !== n && e.null;
                    return m([
                      ...(Array.isArray(t) ? t : t ? [t] : []),
                      ...(Array.isArray(r) ? r : r ? [r] : []),
                    ])(n);
                  }
                })(t);
            function m(e) {
              return (l = e), (f = 0), 0 === e.length ? i : g(e[f]);
            }
            function g(e) {
              return function (t) {
                (d = (function () {
                  const e = h(),
                    n = c.previous,
                    t = c.currentConstruct,
                    o = c.events.length,
                    i = Array.from(u);
                  return { restore: l, from: o };
                  function l() {
                    (r = e),
                      (c.previous = n),
                      (c.currentConstruct = t),
                      (c.events.length = o),
                      (u = i),
                      v();
                  }
                })()),
                  (p = e),
                  e.partial || (c.currentConstruct = e);
                if (e.name && c.parser.constructs.disable.null.includes(e.name))
                  return k(t);
                return e.tokenize.call(
                  n ? Object.assign(Object.create(c), n) : c,
                  s,
                  y,
                  k
                )(t);
              };
            }
            function y(n) {
              return (a = !0), e(p, d), o;
            }
            function k(e) {
              return (a = !0), d.restore(), ++f < l.length ? g(l[f]) : i;
            }
          };
        }
        function x(e, n) {
          e.resolveAll && !i.includes(e) && i.push(e),
            e.resolve &&
              _(
                c.events,
                n,
                c.events.length - n,
                e.resolve(c.events.slice(n), c)
              ),
            e.resolveTo && (c.events = e.resolveTo(c.events, c));
        }
        function v() {
          r.line in o &&
            r.column < 2 &&
            ((r.column = o[r.line]), (r.offset += o[r.line] - 1));
        }
      }
      const ve = {
        name: "thematicBreak",
        tokenize: function (e, n, t) {
          let r,
            o = 0;
          return function (n) {
            return e.enter("thematicBreak"), (r = n), i(n);
          };
          function i(u) {
            return u === r
              ? (e.enter("thematicBreakSequence"), l(u))
              : J(u)
              ? te(e, i, "whitespace")(u)
              : o < 3 || (null !== u && !Z(u))
              ? t(u)
              : (e.exit("thematicBreak"), n(u));
          }
          function l(n) {
            return n === r
              ? (e.consume(n), o++, l)
              : (e.exit("thematicBreakSequence"), i(n));
          }
        },
      };
      const be = {
          name: "list",
          tokenize: function (e, n, t) {
            const r = this,
              o = r.events[r.events.length - 1];
            let i =
                o && "linePrefix" === o[1].type
                  ? o[2].sliceSerialize(o[1], !0).length
                  : 0,
              l = 0;
            return function (n) {
              const o =
                r.containerState.type ||
                (42 === n || 43 === n || 45 === n
                  ? "listUnordered"
                  : "listOrdered");
              if (
                "listUnordered" === o
                  ? !r.containerState.marker || n === r.containerState.marker
                  : q(n)
              ) {
                if (
                  (r.containerState.type ||
                    ((r.containerState.type = o),
                    e.enter(o, { _container: !0 })),
                  "listUnordered" === o)
                )
                  return (
                    e.enter("listItemPrefix"),
                    42 === n || 45 === n ? e.check(ve, t, a)(n) : a(n)
                  );
                if (!r.interrupt || 49 === n)
                  return (
                    e.enter("listItemPrefix"), e.enter("listItemValue"), u(n)
                  );
              }
              return t(n);
            };
            function u(n) {
              return q(n) && ++l < 10
                ? (e.consume(n), u)
                : (!r.interrupt || l < 2) &&
                  (r.containerState.marker
                    ? n === r.containerState.marker
                    : 41 === n || 46 === n)
                ? (e.exit("listItemValue"), a(n))
                : t(n);
            }
            function a(n) {
              return (
                e.enter("listItemMarker"),
                e.consume(n),
                e.exit("listItemMarker"),
                (r.containerState.marker = r.containerState.marker || n),
                e.check(le, r.interrupt ? t : s, e.attempt(we, f, c))
              );
            }
            function s(e) {
              return (r.containerState.initialBlankLine = !0), i++, f(e);
            }
            function c(n) {
              return J(n)
                ? (e.enter("listItemPrefixWhitespace"),
                  e.consume(n),
                  e.exit("listItemPrefixWhitespace"),
                  f)
                : t(n);
            }
            function f(t) {
              return (
                (r.containerState.size =
                  i + r.sliceSerialize(e.exit("listItemPrefix"), !0).length),
                n(t)
              );
            }
          },
          continuation: {
            tokenize: function (e, n, t) {
              const r = this;
              return (r.containerState._closeFlow = void 0), e.check(le, o, i);
              function o(t) {
                return (
                  (r.containerState.furtherBlankLines =
                    r.containerState.furtherBlankLines ||
                    r.containerState.initialBlankLine),
                  te(e, n, "listItemIndent", r.containerState.size + 1)(t)
                );
              }
              function i(t) {
                return r.containerState.furtherBlankLines || !J(t)
                  ? ((r.containerState.furtherBlankLines = void 0),
                    (r.containerState.initialBlankLine = void 0),
                    l(t))
                  : ((r.containerState.furtherBlankLines = void 0),
                    (r.containerState.initialBlankLine = void 0),
                    e.attempt(Se, n, l)(t));
              }
              function l(o) {
                return (
                  (r.containerState._closeFlow = !0),
                  (r.interrupt = void 0),
                  te(
                    e,
                    e.attempt(be, n, t),
                    "linePrefix",
                    r.parser.constructs.disable.null.includes("codeIndented")
                      ? void 0
                      : 4
                  )(o)
                );
              }
            },
          },
          exit: function (e) {
            e.exit(this.containerState.type);
          },
        },
        we = {
          tokenize: function (e, n, t) {
            const r = this;
            return te(
              e,
              function (e) {
                const o = r.events[r.events.length - 1];
                return !J(e) && o && "listItemPrefixWhitespace" === o[1].type
                  ? n(e)
                  : t(e);
              },
              "listItemPrefixWhitespace",
              r.parser.constructs.disable.null.includes("codeIndented")
                ? void 0
                : 5
            );
          },
          partial: !0,
        },
        Se = {
          tokenize: function (e, n, t) {
            const r = this;
            return te(
              e,
              function (e) {
                const o = r.events[r.events.length - 1];
                return o &&
                  "listItemIndent" === o[1].type &&
                  o[2].sliceSerialize(o[1], !0).length === r.containerState.size
                  ? n(e)
                  : t(e);
              },
              "listItemIndent",
              r.containerState.size + 1
            );
          },
          partial: !0,
        };
      const Ee = {
        name: "blockQuote",
        tokenize: function (e, n, t) {
          const r = this;
          return function (n) {
            if (62 === n) {
              const t = r.containerState;
              return (
                t.open ||
                  (e.enter("blockQuote", { _container: !0 }), (t.open = !0)),
                e.enter("blockQuotePrefix"),
                e.enter("blockQuoteMarker"),
                e.consume(n),
                e.exit("blockQuoteMarker"),
                o
              );
            }
            return t(n);
          };
          function o(t) {
            return J(t)
              ? (e.enter("blockQuotePrefixWhitespace"),
                e.consume(t),
                e.exit("blockQuotePrefixWhitespace"),
                e.exit("blockQuotePrefix"),
                n)
              : (e.exit("blockQuotePrefix"), n(t));
          }
        },
        continuation: {
          tokenize: function (e, n, t) {
            return te(
              e,
              e.attempt(Ee, n, t),
              "linePrefix",
              this.parser.constructs.disable.null.includes("codeIndented")
                ? void 0
                : 4
            );
          },
        },
        exit: function (e) {
          e.exit("blockQuote");
        },
      };
      function Ce(e, n, t, r, o, i, l, u, a) {
        const s = a || Number.POSITIVE_INFINITY;
        let c = 0;
        return function (n) {
          if (60 === n)
            return (
              e.enter(r), e.enter(o), e.enter(i), e.consume(n), e.exit(i), f
            );
          if (null === n || 41 === n || K(n)) return t(n);
          return (
            e.enter(r),
            e.enter(l),
            e.enter(u),
            e.enter("chunkString", { contentType: "string" }),
            h(n)
          );
        };
        function f(t) {
          return 62 === t
            ? (e.enter(i), e.consume(t), e.exit(i), e.exit(o), e.exit(r), n)
            : (e.enter(u),
              e.enter("chunkString", { contentType: "string" }),
              p(t));
        }
        function p(n) {
          return 62 === n
            ? (e.exit("chunkString"), e.exit(u), f(n))
            : null === n || 60 === n || Z(n)
            ? t(n)
            : (e.consume(n), 92 === n ? d : p);
        }
        function d(n) {
          return 60 === n || 62 === n || 92 === n ? (e.consume(n), p) : p(n);
        }
        function h(o) {
          return 40 === o
            ? ++c > s
              ? t(o)
              : (e.consume(o), h)
            : 41 === o
            ? c--
              ? (e.consume(o), h)
              : (e.exit("chunkString"), e.exit(u), e.exit(l), e.exit(r), n(o))
            : null === o || X(o)
            ? c
              ? t(o)
              : (e.exit("chunkString"), e.exit(u), e.exit(l), e.exit(r), n(o))
            : K(o)
            ? t(o)
            : (e.consume(o), 92 === o ? m : h);
        }
        function m(n) {
          return 40 === n || 41 === n || 92 === n ? (e.consume(n), h) : h(n);
        }
      }
      function Ae(e, n, t, r, o, i) {
        const l = this;
        let u,
          a = 0;
        return function (n) {
          return e.enter(r), e.enter(o), e.consume(n), e.exit(o), e.enter(i), s;
        };
        function s(f) {
          return null === f ||
            91 === f ||
            (93 === f && !u) ||
            (94 === f &&
              !a &&
              "_hiddenFootnoteSupport" in l.parser.constructs) ||
            a > 999
            ? t(f)
            : 93 === f
            ? (e.exit(i), e.enter(o), e.consume(f), e.exit(o), e.exit(r), n)
            : Z(f)
            ? (e.enter("lineEnding"), e.consume(f), e.exit("lineEnding"), s)
            : (e.enter("chunkString", { contentType: "string" }), c(f));
        }
        function c(n) {
          return null === n || 91 === n || 93 === n || Z(n) || a++ > 999
            ? (e.exit("chunkString"), s(n))
            : (e.consume(n), (u = u || !J(n)), 92 === n ? f : c);
        }
        function f(n) {
          return 91 === n || 92 === n || 93 === n
            ? (e.consume(n), a++, c)
            : c(n);
        }
      }
      function Fe(e, n, t, r, o, i) {
        let l;
        return function (n) {
          return (
            e.enter(r),
            e.enter(o),
            e.consume(n),
            e.exit(o),
            (l = 40 === n ? 41 : n),
            u
          );
        };
        function u(t) {
          return t === l
            ? (e.enter(o), e.consume(t), e.exit(o), e.exit(r), n)
            : (e.enter(i), a(t));
        }
        function a(n) {
          return n === l
            ? (e.exit(i), u(l))
            : null === n
            ? t(n)
            : Z(n)
            ? (e.enter("lineEnding"),
              e.consume(n),
              e.exit("lineEnding"),
              te(e, a, "linePrefix"))
            : (e.enter("chunkString", { contentType: "string" }), s(n));
        }
        function s(n) {
          return n === l || null === n || Z(n)
            ? (e.exit("chunkString"), a(n))
            : (e.consume(n), 92 === n ? c : s);
        }
        function c(n) {
          return n === l || 92 === n ? (e.consume(n), s) : s(n);
        }
      }
      function Te(e, n) {
        let t;
        return function r(o) {
          if (Z(o))
            return (
              e.enter("lineEnding"),
              e.consume(o),
              e.exit("lineEnding"),
              (t = !0),
              r
            );
          if (J(o)) return te(e, r, t ? "linePrefix" : "lineSuffix")(o);
          return n(o);
        };
      }
      function Pe(e) {
        return e
          .replace(/[\t\n\r ]+/g, " ")
          .replace(/^ | $/g, "")
          .toLowerCase()
          .toUpperCase();
      }
      const Oe = {
          name: "definition",
          tokenize: function (e, n, t) {
            const r = this;
            let o;
            return function (n) {
              return (
                e.enter("definition"),
                Ae.call(
                  r,
                  e,
                  i,
                  t,
                  "definitionLabel",
                  "definitionLabelMarker",
                  "definitionLabelString"
                )(n)
              );
            };
            function i(n) {
              return (
                (o = Pe(
                  r
                    .sliceSerialize(r.events[r.events.length - 1][1])
                    .slice(1, -1)
                )),
                58 === n
                  ? (e.enter("definitionMarker"),
                    e.consume(n),
                    e.exit("definitionMarker"),
                    Te(
                      e,
                      Ce(
                        e,
                        e.attempt(
                          Ie,
                          te(e, l, "whitespace"),
                          te(e, l, "whitespace")
                        ),
                        t,
                        "definitionDestination",
                        "definitionDestinationLiteral",
                        "definitionDestinationLiteralMarker",
                        "definitionDestinationRaw",
                        "definitionDestinationString"
                      )
                    ))
                  : t(n)
              );
            }
            function l(i) {
              return null === i || Z(i)
                ? (e.exit("definition"),
                  r.parser.defined.includes(o) || r.parser.defined.push(o),
                  n(i))
                : t(i);
            }
          },
        },
        Ie = {
          tokenize: function (e, n, t) {
            return function (n) {
              return X(n) ? Te(e, r)(n) : t(n);
            };
            function r(n) {
              return 34 === n || 39 === n || 40 === n
                ? Fe(
                    e,
                    te(e, o, "whitespace"),
                    t,
                    "definitionTitle",
                    "definitionTitleMarker",
                    "definitionTitleString"
                  )(n)
                : t(n);
            }
            function o(e) {
              return null === e || Z(e) ? n(e) : t(e);
            }
          },
          partial: !0,
        };
      const De = {
          name: "codeIndented",
          tokenize: function (e, n, t) {
            const r = this;
            return function (n) {
              return e.enter("codeIndented"), te(e, o, "linePrefix", 5)(n);
            };
            function o(e) {
              const n = r.events[r.events.length - 1];
              return n &&
                "linePrefix" === n[1].type &&
                n[2].sliceSerialize(n[1], !0).length >= 4
                ? i(e)
                : t(e);
            }
            function i(n) {
              return null === n
                ? u(n)
                : Z(n)
                ? e.attempt(Le, i, u)(n)
                : (e.enter("codeFlowValue"), l(n));
            }
            function l(n) {
              return null === n || Z(n)
                ? (e.exit("codeFlowValue"), i(n))
                : (e.consume(n), l);
            }
            function u(t) {
              return e.exit("codeIndented"), n(t);
            }
          },
        },
        Le = {
          tokenize: function (e, n, t) {
            const r = this;
            return o;
            function o(n) {
              return r.parser.lazy[r.now().line]
                ? t(n)
                : Z(n)
                ? (e.enter("lineEnding"), e.consume(n), e.exit("lineEnding"), o)
                : te(e, i, "linePrefix", 5)(n);
            }
            function i(e) {
              const i = r.events[r.events.length - 1];
              return i &&
                "linePrefix" === i[1].type &&
                i[2].sliceSerialize(i[1], !0).length >= 4
                ? n(e)
                : Z(e)
                ? o(e)
                : t(e);
            }
          },
          partial: !0,
        };
      const ze = {
        name: "headingAtx",
        tokenize: function (e, n, t) {
          const r = this;
          let o = 0;
          return function (n) {
            return e.enter("atxHeading"), e.enter("atxHeadingSequence"), i(n);
          };
          function i(u) {
            return 35 === u && o++ < 6
              ? (e.consume(u), i)
              : null === u || X(u)
              ? (e.exit("atxHeadingSequence"), r.interrupt ? n(u) : l(u))
              : t(u);
          }
          function l(t) {
            return 35 === t
              ? (e.enter("atxHeadingSequence"), u(t))
              : null === t || Z(t)
              ? (e.exit("atxHeading"), n(t))
              : J(t)
              ? te(e, l, "whitespace")(t)
              : (e.enter("atxHeadingText"), a(t));
          }
          function u(n) {
            return 35 === n
              ? (e.consume(n), u)
              : (e.exit("atxHeadingSequence"), l(n));
          }
          function a(n) {
            return null === n || 35 === n || X(n)
              ? (e.exit("atxHeadingText"), l(n))
              : (e.consume(n), a);
          }
        },
        resolve: function (e, n) {
          let t,
            r,
            o = e.length - 2,
            i = 3;
          "whitespace" === e[i][1].type && (i += 2);
          o - 2 > i && "whitespace" === e[o][1].type && (o -= 2);
          "atxHeadingSequence" === e[o][1].type &&
            (i === o - 1 || (o - 4 > i && "whitespace" === e[o - 2][1].type)) &&
            (o -= i + 1 === o ? 2 : 4);
          o > i &&
            ((t = {
              type: "atxHeadingText",
              start: e[i][1].start,
              end: e[o][1].end,
            }),
            (r = {
              type: "chunkText",
              start: e[i][1].start,
              end: e[o][1].end,
              contentType: "text",
            }),
            _(e, i, o - i + 1, [
              ["enter", t, n],
              ["enter", r, n],
              ["exit", r, n],
              ["exit", t, n],
            ]));
          return e;
        },
      };
      const Me = {
        name: "setextUnderline",
        tokenize: function (e, n, t) {
          const r = this;
          let o,
            i,
            l = r.events.length;
          for (; l--; )
            if (
              "lineEnding" !== r.events[l][1].type &&
              "linePrefix" !== r.events[l][1].type &&
              "content" !== r.events[l][1].type
            ) {
              i = "paragraph" === r.events[l][1].type;
              break;
            }
          return function (n) {
            if (!r.parser.lazy[r.now().line] && (r.interrupt || i))
              return (
                e.enter("setextHeadingLine"),
                e.enter("setextHeadingLineSequence"),
                (o = n),
                u(n)
              );
            return t(n);
          };
          function u(n) {
            return n === o
              ? (e.consume(n), u)
              : (e.exit("setextHeadingLineSequence"),
                te(e, a, "lineSuffix")(n));
          }
          function a(r) {
            return null === r || Z(r)
              ? (e.exit("setextHeadingLine"), n(r))
              : t(r);
          }
        },
        resolveTo: function (e, n) {
          let t,
            r,
            o,
            i = e.length;
          for (; i--; )
            if ("enter" === e[i][0]) {
              if ("content" === e[i][1].type) {
                t = i;
                break;
              }
              "paragraph" === e[i][1].type && (r = i);
            } else
              "content" === e[i][1].type && e.splice(i, 1),
                o || "definition" !== e[i][1].type || (o = i);
          const l = {
            type: "setextHeading",
            start: Object.assign({}, e[r][1].start),
            end: Object.assign({}, e[e.length - 1][1].end),
          };
          (e[r][1].type = "setextHeadingText"),
            o
              ? (e.splice(r, 0, ["enter", l, n]),
                e.splice(o + 1, 0, ["exit", e[t][1], n]),
                (e[t][1].end = Object.assign({}, e[o][1].end)))
              : (e[t][1] = l);
          return e.push(["exit", l, n]), e;
        },
      };
      const Re = [
          "address",
          "article",
          "aside",
          "base",
          "basefont",
          "blockquote",
          "body",
          "caption",
          "center",
          "col",
          "colgroup",
          "dd",
          "details",
          "dialog",
          "dir",
          "div",
          "dl",
          "dt",
          "fieldset",
          "figcaption",
          "figure",
          "footer",
          "form",
          "frame",
          "frameset",
          "h1",
          "h2",
          "h3",
          "h4",
          "h5",
          "h6",
          "head",
          "header",
          "hr",
          "html",
          "iframe",
          "legend",
          "li",
          "link",
          "main",
          "menu",
          "menuitem",
          "nav",
          "noframes",
          "ol",
          "optgroup",
          "option",
          "p",
          "param",
          "section",
          "source",
          "summary",
          "table",
          "tbody",
          "td",
          "tfoot",
          "th",
          "thead",
          "title",
          "tr",
          "track",
          "ul",
        ],
        Be = ["pre", "script", "style", "textarea"],
        _e = {
          name: "htmlFlow",
          tokenize: function (e, n, t) {
            const r = this;
            let o, i, l, u, a;
            return function (n) {
              return (
                e.enter("htmlFlow"), e.enter("htmlFlowData"), e.consume(n), s
              );
            };
            function s(u) {
              return 33 === u
                ? (e.consume(u), c)
                : 47 === u
                ? (e.consume(u), d)
                : 63 === u
                ? (e.consume(u), (o = 3), r.interrupt ? n : z)
                : V(u)
                ? (e.consume(u), (l = String.fromCharCode(u)), (i = !0), h)
                : t(u);
            }
            function c(i) {
              return 45 === i
                ? (e.consume(i), (o = 2), f)
                : 91 === i
                ? (e.consume(i), (o = 5), (l = "CDATA["), (u = 0), p)
                : V(i)
                ? (e.consume(i), (o = 4), r.interrupt ? n : z)
                : t(i);
            }
            function f(o) {
              return 45 === o ? (e.consume(o), r.interrupt ? n : z) : t(o);
            }
            function p(o) {
              return o === l.charCodeAt(u++)
                ? (e.consume(o), u === l.length ? (r.interrupt ? n : A) : p)
                : t(o);
            }
            function d(n) {
              return V(n)
                ? (e.consume(n), (l = String.fromCharCode(n)), h)
                : t(n);
            }
            function h(u) {
              return null === u || 47 === u || 62 === u || X(u)
                ? 47 !== u && i && Be.includes(l.toLowerCase())
                  ? ((o = 1), r.interrupt ? n(u) : A(u))
                  : Re.includes(l.toLowerCase())
                  ? ((o = 6),
                    47 === u ? (e.consume(u), m) : r.interrupt ? n(u) : A(u))
                  : ((o = 7),
                    r.interrupt && !r.parser.lazy[r.now().line]
                      ? t(u)
                      : i
                      ? y(u)
                      : g(u))
                : 45 === u || W(u)
                ? (e.consume(u), (l += String.fromCharCode(u)), h)
                : t(u);
            }
            function m(o) {
              return 62 === o ? (e.consume(o), r.interrupt ? n : A) : t(o);
            }
            function g(n) {
              return J(n) ? (e.consume(n), g) : E(n);
            }
            function y(n) {
              return 47 === n
                ? (e.consume(n), E)
                : 58 === n || 95 === n || V(n)
                ? (e.consume(n), k)
                : J(n)
                ? (e.consume(n), y)
                : E(n);
            }
            function k(n) {
              return 45 === n || 46 === n || 58 === n || 95 === n || W(n)
                ? (e.consume(n), k)
                : x(n);
            }
            function x(n) {
              return 61 === n
                ? (e.consume(n), v)
                : J(n)
                ? (e.consume(n), x)
                : y(n);
            }
            function v(n) {
              return null === n || 60 === n || 61 === n || 62 === n || 96 === n
                ? t(n)
                : 34 === n || 39 === n
                ? (e.consume(n), (a = n), b)
                : J(n)
                ? (e.consume(n), v)
                : ((a = null), w(n));
            }
            function b(n) {
              return null === n || Z(n)
                ? t(n)
                : n === a
                ? (e.consume(n), S)
                : (e.consume(n), b);
            }
            function w(n) {
              return null === n ||
                34 === n ||
                39 === n ||
                60 === n ||
                61 === n ||
                62 === n ||
                96 === n ||
                X(n)
                ? x(n)
                : (e.consume(n), w);
            }
            function S(e) {
              return 47 === e || 62 === e || J(e) ? y(e) : t(e);
            }
            function E(n) {
              return 62 === n ? (e.consume(n), C) : t(n);
            }
            function C(n) {
              return J(n)
                ? (e.consume(n), C)
                : null === n || Z(n)
                ? A(n)
                : t(n);
            }
            function A(n) {
              return 45 === n && 2 === o
                ? (e.consume(n), O)
                : 60 === n && 1 === o
                ? (e.consume(n), I)
                : 62 === n && 4 === o
                ? (e.consume(n), M)
                : 63 === n && 3 === o
                ? (e.consume(n), z)
                : 93 === n && 5 === o
                ? (e.consume(n), L)
                : !Z(n) || (6 !== o && 7 !== o)
                ? null === n || Z(n)
                  ? F(n)
                  : (e.consume(n), A)
                : e.check(je, M, F)(n);
            }
            function F(n) {
              return e.exit("htmlFlowData"), T(n);
            }
            function T(n) {
              return null === n
                ? R(n)
                : Z(n)
                ? e.attempt({ tokenize: P, partial: !0 }, T, R)(n)
                : (e.enter("htmlFlowData"), A(n));
            }
            function P(e, n, t) {
              return function (n) {
                return (
                  e.enter("lineEnding"), e.consume(n), e.exit("lineEnding"), o
                );
              };
              function o(e) {
                return r.parser.lazy[r.now().line] ? t(e) : n(e);
              }
            }
            function O(n) {
              return 45 === n ? (e.consume(n), z) : A(n);
            }
            function I(n) {
              return 47 === n ? (e.consume(n), (l = ""), D) : A(n);
            }
            function D(n) {
              return 62 === n && Be.includes(l.toLowerCase())
                ? (e.consume(n), M)
                : V(n) && l.length < 8
                ? (e.consume(n), (l += String.fromCharCode(n)), D)
                : A(n);
            }
            function L(n) {
              return 93 === n ? (e.consume(n), z) : A(n);
            }
            function z(n) {
              return 62 === n
                ? (e.consume(n), M)
                : 45 === n && 2 === o
                ? (e.consume(n), z)
                : A(n);
            }
            function M(n) {
              return null === n || Z(n)
                ? (e.exit("htmlFlowData"), R(n))
                : (e.consume(n), M);
            }
            function R(t) {
              return e.exit("htmlFlow"), n(t);
            }
          },
          resolveTo: function (e) {
            let n = e.length;
            for (
              ;
              n-- && ("enter" !== e[n][0] || "htmlFlow" !== e[n][1].type);

            );
            n > 1 &&
              "linePrefix" === e[n - 2][1].type &&
              ((e[n][1].start = e[n - 2][1].start),
              (e[n + 1][1].start = e[n - 2][1].start),
              e.splice(n - 2, 2));
            return e;
          },
          concrete: !0,
        },
        je = {
          tokenize: function (e, n, t) {
            return function (r) {
              return (
                e.exit("htmlFlowData"),
                e.enter("lineEndingBlank"),
                e.consume(r),
                e.exit("lineEndingBlank"),
                e.attempt(le, n, t)
              );
            };
          },
          partial: !0,
        };
      const He = {
        name: "codeFenced",
        tokenize: function (e, n, t) {
          const r = this,
            o = {
              tokenize: function (e, n, t) {
                let r = 0;
                return te(
                  e,
                  o,
                  "linePrefix",
                  this.parser.constructs.disable.null.includes("codeIndented")
                    ? void 0
                    : 4
                );
                function o(n) {
                  return (
                    e.enter("codeFencedFence"),
                    e.enter("codeFencedFenceSequence"),
                    i(n)
                  );
                }
                function i(n) {
                  return n === a
                    ? (e.consume(n), r++, i)
                    : r < s
                    ? t(n)
                    : (e.exit("codeFencedFenceSequence"),
                      te(e, l, "whitespace")(n));
                }
                function l(r) {
                  return null === r || Z(r)
                    ? (e.exit("codeFencedFence"), n(r))
                    : t(r);
                }
              },
              partial: !0,
            },
            i = {
              tokenize: function (e, n, t) {
                const r = this;
                return o;
                function o(n) {
                  return (
                    e.enter("lineEnding"), e.consume(n), e.exit("lineEnding"), i
                  );
                }
                function i(e) {
                  return r.parser.lazy[r.now().line] ? t(e) : n(e);
                }
              },
              partial: !0,
            },
            l = this.events[this.events.length - 1],
            u =
              l && "linePrefix" === l[1].type
                ? l[2].sliceSerialize(l[1], !0).length
                : 0;
          let a,
            s = 0;
          return function (n) {
            return (
              e.enter("codeFenced"),
              e.enter("codeFencedFence"),
              e.enter("codeFencedFenceSequence"),
              (a = n),
              c(n)
            );
          };
          function c(n) {
            return n === a
              ? (e.consume(n), s++, c)
              : (e.exit("codeFencedFenceSequence"),
                s < 3 ? t(n) : te(e, f, "whitespace")(n));
          }
          function f(n) {
            return null === n || Z(n)
              ? m(n)
              : (e.enter("codeFencedFenceInfo"),
                e.enter("chunkString", { contentType: "string" }),
                p(n));
          }
          function p(n) {
            return null === n || X(n)
              ? (e.exit("chunkString"),
                e.exit("codeFencedFenceInfo"),
                te(e, d, "whitespace")(n))
              : 96 === n && n === a
              ? t(n)
              : (e.consume(n), p);
          }
          function d(n) {
            return null === n || Z(n)
              ? m(n)
              : (e.enter("codeFencedFenceMeta"),
                e.enter("chunkString", { contentType: "string" }),
                h(n));
          }
          function h(n) {
            return null === n || Z(n)
              ? (e.exit("chunkString"), e.exit("codeFencedFenceMeta"), m(n))
              : 96 === n && n === a
              ? t(n)
              : (e.consume(n), h);
          }
          function m(t) {
            return e.exit("codeFencedFence"), r.interrupt ? n(t) : g(t);
          }
          function g(n) {
            return null === n
              ? k(n)
              : Z(n)
              ? e.attempt(
                  i,
                  e.attempt(o, k, u ? te(e, g, "linePrefix", u + 1) : g),
                  k
                )(n)
              : (e.enter("codeFlowValue"), y(n));
          }
          function y(n) {
            return null === n || Z(n)
              ? (e.exit("codeFlowValue"), g(n))
              : (e.consume(n), y);
          }
          function k(t) {
            return e.exit("codeFenced"), n(t);
          }
        },
        concrete: !0,
      };
      const Ue = document.createElement("i");
      function Ne(e) {
        const n = "&" + e + ";";
        Ue.innerHTML = n;
        const t = Ue.textContent;
        return (
          (59 !== t.charCodeAt(t.length - 1) || "semi" === e) && t !== n && t
        );
      }
      const Ve = {
        name: "characterReference",
        tokenize: function (e, n, t) {
          const r = this;
          let o,
            i,
            l = 0;
          return function (n) {
            return (
              e.enter("characterReference"),
              e.enter("characterReferenceMarker"),
              e.consume(n),
              e.exit("characterReferenceMarker"),
              u
            );
          };
          function u(n) {
            return 35 === n
              ? (e.enter("characterReferenceMarkerNumeric"),
                e.consume(n),
                e.exit("characterReferenceMarkerNumeric"),
                a)
              : (e.enter("characterReferenceValue"), (o = 31), (i = W), s(n));
          }
          function a(n) {
            return 88 === n || 120 === n
              ? (e.enter("characterReferenceMarkerHexadecimal"),
                e.consume(n),
                e.exit("characterReferenceMarkerHexadecimal"),
                e.enter("characterReferenceValue"),
                (o = 6),
                (i = $),
                s)
              : (e.enter("characterReferenceValue"), (o = 7), (i = q), s(n));
          }
          function s(u) {
            let a;
            return 59 === u && l
              ? ((a = e.exit("characterReferenceValue")),
                i !== W || Ne(r.sliceSerialize(a))
                  ? (e.enter("characterReferenceMarker"),
                    e.consume(u),
                    e.exit("characterReferenceMarker"),
                    e.exit("characterReference"),
                    n)
                  : t(u))
              : i(u) && l++ < o
              ? (e.consume(u), s)
              : t(u);
          }
        },
      };
      const qe = {
        name: "characterEscape",
        tokenize: function (e, n, t) {
          return function (n) {
            return (
              e.enter("characterEscape"),
              e.enter("escapeMarker"),
              e.consume(n),
              e.exit("escapeMarker"),
              r
            );
          };
          function r(r) {
            return Q(r)
              ? (e.enter("characterEscapeValue"),
                e.consume(r),
                e.exit("characterEscapeValue"),
                e.exit("characterEscape"),
                n)
              : t(r);
          }
        },
      };
      const $e = {
        name: "lineEnding",
        tokenize: function (e, n) {
          return function (t) {
            return (
              e.enter("lineEnding"),
              e.consume(t),
              e.exit("lineEnding"),
              te(e, n, "linePrefix")
            );
          };
        },
      };
      const We = {
          name: "labelEnd",
          tokenize: function (e, n, t) {
            const r = this;
            let o,
              i,
              l = r.events.length;
            for (; l--; )
              if (
                ("labelImage" === r.events[l][1].type ||
                  "labelLink" === r.events[l][1].type) &&
                !r.events[l][1]._balanced
              ) {
                o = r.events[l][1];
                break;
              }
            return function (n) {
              if (!o) return t(n);
              return o._inactive
                ? a(n)
                : ((i = r.parser.defined.includes(
                    Pe(r.sliceSerialize({ start: o.end, end: r.now() }))
                  )),
                  e.enter("labelEnd"),
                  e.enter("labelMarker"),
                  e.consume(n),
                  e.exit("labelMarker"),
                  e.exit("labelEnd"),
                  u);
            };
            function u(t) {
              return 40 === t
                ? e.attempt(Qe, n, i ? n : a)(t)
                : 91 === t
                ? e.attempt(Ye, n, i ? e.attempt(Ke, n, a) : a)(t)
                : i
                ? n(t)
                : a(t);
            }
            function a(e) {
              return (o._balanced = !0), t(e);
            }
          },
          resolveTo: function (e, n) {
            let t,
              r,
              o,
              i,
              l = e.length,
              u = 0;
            for (; l--; )
              if (((t = e[l][1]), r)) {
                if (
                  "link" === t.type ||
                  ("labelLink" === t.type && t._inactive)
                )
                  break;
                "enter" === e[l][0] &&
                  "labelLink" === t.type &&
                  (t._inactive = !0);
              } else if (o) {
                if (
                  "enter" === e[l][0] &&
                  ("labelImage" === t.type || "labelLink" === t.type) &&
                  !t._balanced &&
                  ((r = l), "labelLink" !== t.type)
                ) {
                  u = 2;
                  break;
                }
              } else "labelEnd" === t.type && (o = l);
            const a = {
                type: "labelLink" === e[r][1].type ? "link" : "image",
                start: Object.assign({}, e[r][1].start),
                end: Object.assign({}, e[e.length - 1][1].end),
              },
              s = {
                type: "label",
                start: Object.assign({}, e[r][1].start),
                end: Object.assign({}, e[o][1].end),
              },
              c = {
                type: "labelText",
                start: Object.assign({}, e[r + u + 2][1].end),
                end: Object.assign({}, e[o - 2][1].start),
              };
            return (
              (i = [
                ["enter", a, n],
                ["enter", s, n],
              ]),
              (i = j(i, e.slice(r + 1, r + u + 3))),
              (i = j(i, [["enter", c, n]])),
              (i = j(
                i,
                ke(
                  n.parser.constructs.insideSpan.null,
                  e.slice(r + u + 4, o - 3),
                  n
                )
              )),
              (i = j(i, [["exit", c, n], e[o - 2], e[o - 1], ["exit", s, n]])),
              (i = j(i, e.slice(o + 1))),
              (i = j(i, [["exit", a, n]])),
              _(e, r, e.length, i),
              e
            );
          },
          resolveAll: function (e) {
            let n,
              t = -1;
            for (; ++t < e.length; )
              (n = e[t][1]),
                ("labelImage" !== n.type &&
                  "labelLink" !== n.type &&
                  "labelEnd" !== n.type) ||
                  (e.splice(t + 1, "labelImage" === n.type ? 4 : 2),
                  (n.type = "data"),
                  t++);
            return e;
          },
        },
        Qe = {
          tokenize: function (e, n, t) {
            return function (n) {
              return (
                e.enter("resource"),
                e.enter("resourceMarker"),
                e.consume(n),
                e.exit("resourceMarker"),
                Te(e, r)
              );
            };
            function r(n) {
              return 41 === n
                ? l(n)
                : Ce(
                    e,
                    o,
                    t,
                    "resourceDestination",
                    "resourceDestinationLiteral",
                    "resourceDestinationLiteralMarker",
                    "resourceDestinationRaw",
                    "resourceDestinationString",
                    3
                  )(n);
            }
            function o(n) {
              return X(n) ? Te(e, i)(n) : l(n);
            }
            function i(n) {
              return 34 === n || 39 === n || 40 === n
                ? Fe(
                    e,
                    Te(e, l),
                    t,
                    "resourceTitle",
                    "resourceTitleMarker",
                    "resourceTitleString"
                  )(n)
                : l(n);
            }
            function l(r) {
              return 41 === r
                ? (e.enter("resourceMarker"),
                  e.consume(r),
                  e.exit("resourceMarker"),
                  e.exit("resource"),
                  n)
                : t(r);
            }
          },
        },
        Ye = {
          tokenize: function (e, n, t) {
            const r = this;
            return function (n) {
              return Ae.call(
                r,
                e,
                o,
                t,
                "reference",
                "referenceMarker",
                "referenceString"
              )(n);
            };
            function o(e) {
              return r.parser.defined.includes(
                Pe(
                  r
                    .sliceSerialize(r.events[r.events.length - 1][1])
                    .slice(1, -1)
                )
              )
                ? n(e)
                : t(e);
            }
          },
        },
        Ke = {
          tokenize: function (e, n, t) {
            return function (n) {
              return (
                e.enter("reference"),
                e.enter("referenceMarker"),
                e.consume(n),
                e.exit("referenceMarker"),
                r
              );
            };
            function r(r) {
              return 93 === r
                ? (e.enter("referenceMarker"),
                  e.consume(r),
                  e.exit("referenceMarker"),
                  e.exit("reference"),
                  n)
                : t(r);
            }
          },
        };
      function Xe(e) {
        return null === e || X(e) || G(e) ? 1 : ee(e) ? 2 : void 0;
      }
      const Ze = {
        name: "attention",
        tokenize: function (e, n) {
          const t = this.parser.constructs.attentionMarkers.null,
            r = this.previous,
            o = Xe(r);
          let i;
          return function (n) {
            return e.enter("attentionSequence"), (i = n), l(n);
          };
          function l(u) {
            if (u === i) return e.consume(u), l;
            const a = e.exit("attentionSequence"),
              s = Xe(u),
              c = !s || (2 === s && o) || t.includes(u),
              f = !o || (2 === o && s) || t.includes(r);
            return (
              (a._open = Boolean(42 === i ? c : c && (o || !f))),
              (a._close = Boolean(42 === i ? f : f && (s || !c))),
              n(u)
            );
          }
        },
        resolveAll: function (e, n) {
          let t,
            r,
            o,
            i,
            l,
            u,
            a,
            s,
            c = -1;
          for (; ++c < e.length; )
            if (
              "enter" === e[c][0] &&
              "attentionSequence" === e[c][1].type &&
              e[c][1]._close
            )
              for (t = c; t--; )
                if (
                  "exit" === e[t][0] &&
                  "attentionSequence" === e[t][1].type &&
                  e[t][1]._open &&
                  n.sliceSerialize(e[t][1]).charCodeAt(0) ===
                    n.sliceSerialize(e[c][1]).charCodeAt(0)
                ) {
                  if (
                    (e[t][1]._close || e[c][1]._open) &&
                    (e[c][1].end.offset - e[c][1].start.offset) % 3 &&
                    !(
                      (e[t][1].end.offset -
                        e[t][1].start.offset +
                        e[c][1].end.offset -
                        e[c][1].start.offset) %
                      3
                    )
                  )
                    continue;
                  u =
                    e[t][1].end.offset - e[t][1].start.offset > 1 &&
                    e[c][1].end.offset - e[c][1].start.offset > 1
                      ? 2
                      : 1;
                  const f = Object.assign({}, e[t][1].end),
                    p = Object.assign({}, e[c][1].start);
                  Je(f, -u),
                    Je(p, u),
                    (i = {
                      type: u > 1 ? "strongSequence" : "emphasisSequence",
                      start: f,
                      end: Object.assign({}, e[t][1].end),
                    }),
                    (l = {
                      type: u > 1 ? "strongSequence" : "emphasisSequence",
                      start: Object.assign({}, e[c][1].start),
                      end: p,
                    }),
                    (o = {
                      type: u > 1 ? "strongText" : "emphasisText",
                      start: Object.assign({}, e[t][1].end),
                      end: Object.assign({}, e[c][1].start),
                    }),
                    (r = {
                      type: u > 1 ? "strong" : "emphasis",
                      start: Object.assign({}, i.start),
                      end: Object.assign({}, l.end),
                    }),
                    (e[t][1].end = Object.assign({}, i.start)),
                    (e[c][1].start = Object.assign({}, l.end)),
                    (a = []),
                    e[t][1].end.offset - e[t][1].start.offset &&
                      (a = j(a, [
                        ["enter", e[t][1], n],
                        ["exit", e[t][1], n],
                      ])),
                    (a = j(a, [
                      ["enter", r, n],
                      ["enter", i, n],
                      ["exit", i, n],
                      ["enter", o, n],
                    ])),
                    (a = j(
                      a,
                      ke(
                        n.parser.constructs.insideSpan.null,
                        e.slice(t + 1, c),
                        n
                      )
                    )),
                    (a = j(a, [
                      ["exit", o, n],
                      ["enter", l, n],
                      ["exit", l, n],
                      ["exit", r, n],
                    ])),
                    e[c][1].end.offset - e[c][1].start.offset
                      ? ((s = 2),
                        (a = j(a, [
                          ["enter", e[c][1], n],
                          ["exit", e[c][1], n],
                        ])))
                      : (s = 0),
                    _(e, t - 1, c - t + 3, a),
                    (c = t + a.length - s - 2);
                  break;
                }
          c = -1;
          for (; ++c < e.length; )
            "attentionSequence" === e[c][1].type && (e[c][1].type = "data");
          return e;
        },
      };
      function Je(e, n) {
        (e.column += n), (e.offset += n), (e._bufferIndex += n);
      }
      const Ge = {
          42: be,
          43: be,
          45: be,
          48: be,
          49: be,
          50: be,
          51: be,
          52: be,
          53: be,
          54: be,
          55: be,
          56: be,
          57: be,
          62: Ee,
        },
        en = { 91: Oe },
        nn = { [-2]: De, [-1]: De, 32: De },
        tn = {
          35: ze,
          42: ve,
          45: [Me, ve],
          60: _e,
          61: Me,
          95: ve,
          96: He,
          126: He,
        },
        rn = { 38: Ve, 92: qe },
        on = {
          [-5]: $e,
          [-4]: $e,
          [-3]: $e,
          33: {
            name: "labelStartImage",
            tokenize: function (e, n, t) {
              const r = this;
              return function (n) {
                return (
                  e.enter("labelImage"),
                  e.enter("labelImageMarker"),
                  e.consume(n),
                  e.exit("labelImageMarker"),
                  o
                );
              };
              function o(n) {
                return 91 === n
                  ? (e.enter("labelMarker"),
                    e.consume(n),
                    e.exit("labelMarker"),
                    e.exit("labelImage"),
                    i)
                  : t(n);
              }
              function i(e) {
                return 94 === e &&
                  "_hiddenFootnoteSupport" in r.parser.constructs
                  ? t(e)
                  : n(e);
              }
            },
            resolveAll: We.resolveAll,
          },
          38: Ve,
          42: Ze,
          60: [
            {
              name: "autolink",
              tokenize: function (e, n, t) {
                let r = 1;
                return function (n) {
                  return (
                    e.enter("autolink"),
                    e.enter("autolinkMarker"),
                    e.consume(n),
                    e.exit("autolinkMarker"),
                    e.enter("autolinkProtocol"),
                    o
                  );
                };
                function o(n) {
                  return V(n) ? (e.consume(n), i) : Y(n) ? a(n) : t(n);
                }
                function i(e) {
                  return 43 === e || 45 === e || 46 === e || W(e) ? l(e) : a(e);
                }
                function l(n) {
                  return 58 === n
                    ? (e.consume(n), u)
                    : (43 === n || 45 === n || 46 === n || W(n)) && r++ < 32
                    ? (e.consume(n), l)
                    : a(n);
                }
                function u(n) {
                  return 62 === n
                    ? (e.exit("autolinkProtocol"), p(n))
                    : null === n || 32 === n || 60 === n || K(n)
                    ? t(n)
                    : (e.consume(n), u);
                }
                function a(n) {
                  return 64 === n
                    ? (e.consume(n), (r = 0), s)
                    : Y(n)
                    ? (e.consume(n), a)
                    : t(n);
                }
                function s(e) {
                  return W(e) ? c(e) : t(e);
                }
                function c(n) {
                  return 46 === n
                    ? (e.consume(n), (r = 0), s)
                    : 62 === n
                    ? ((e.exit("autolinkProtocol").type = "autolinkEmail"),
                      p(n))
                    : f(n);
                }
                function f(n) {
                  return (45 === n || W(n)) && r++ < 63
                    ? (e.consume(n), 45 === n ? f : c)
                    : t(n);
                }
                function p(t) {
                  return (
                    e.enter("autolinkMarker"),
                    e.consume(t),
                    e.exit("autolinkMarker"),
                    e.exit("autolink"),
                    n
                  );
                }
              },
            },
            {
              name: "htmlText",
              tokenize: function (e, n, t) {
                const r = this;
                let o, i, l, u;
                return function (n) {
                  return (
                    e.enter("htmlText"),
                    e.enter("htmlTextData"),
                    e.consume(n),
                    a
                  );
                };
                function a(n) {
                  return 33 === n
                    ? (e.consume(n), s)
                    : 47 === n
                    ? (e.consume(n), w)
                    : 63 === n
                    ? (e.consume(n), v)
                    : V(n)
                    ? (e.consume(n), C)
                    : t(n);
                }
                function s(n) {
                  return 45 === n
                    ? (e.consume(n), c)
                    : 91 === n
                    ? (e.consume(n), (i = "CDATA["), (l = 0), m)
                    : V(n)
                    ? (e.consume(n), x)
                    : t(n);
                }
                function c(n) {
                  return 45 === n ? (e.consume(n), f) : t(n);
                }
                function f(n) {
                  return null === n || 62 === n
                    ? t(n)
                    : 45 === n
                    ? (e.consume(n), p)
                    : d(n);
                }
                function p(e) {
                  return null === e || 62 === e ? t(e) : d(e);
                }
                function d(n) {
                  return null === n
                    ? t(n)
                    : 45 === n
                    ? (e.consume(n), h)
                    : Z(n)
                    ? ((u = d), L(n))
                    : (e.consume(n), d);
                }
                function h(n) {
                  return 45 === n ? (e.consume(n), M) : d(n);
                }
                function m(n) {
                  return n === i.charCodeAt(l++)
                    ? (e.consume(n), l === i.length ? g : m)
                    : t(n);
                }
                function g(n) {
                  return null === n
                    ? t(n)
                    : 93 === n
                    ? (e.consume(n), y)
                    : Z(n)
                    ? ((u = g), L(n))
                    : (e.consume(n), g);
                }
                function y(n) {
                  return 93 === n ? (e.consume(n), k) : g(n);
                }
                function k(n) {
                  return 62 === n ? M(n) : 93 === n ? (e.consume(n), k) : g(n);
                }
                function x(n) {
                  return null === n || 62 === n
                    ? M(n)
                    : Z(n)
                    ? ((u = x), L(n))
                    : (e.consume(n), x);
                }
                function v(n) {
                  return null === n
                    ? t(n)
                    : 63 === n
                    ? (e.consume(n), b)
                    : Z(n)
                    ? ((u = v), L(n))
                    : (e.consume(n), v);
                }
                function b(e) {
                  return 62 === e ? M(e) : v(e);
                }
                function w(n) {
                  return V(n) ? (e.consume(n), S) : t(n);
                }
                function S(n) {
                  return 45 === n || W(n) ? (e.consume(n), S) : E(n);
                }
                function E(n) {
                  return Z(n)
                    ? ((u = E), L(n))
                    : J(n)
                    ? (e.consume(n), E)
                    : M(n);
                }
                function C(n) {
                  return 45 === n || W(n)
                    ? (e.consume(n), C)
                    : 47 === n || 62 === n || X(n)
                    ? A(n)
                    : t(n);
                }
                function A(n) {
                  return 47 === n
                    ? (e.consume(n), M)
                    : 58 === n || 95 === n || V(n)
                    ? (e.consume(n), F)
                    : Z(n)
                    ? ((u = A), L(n))
                    : J(n)
                    ? (e.consume(n), A)
                    : M(n);
                }
                function F(n) {
                  return 45 === n || 46 === n || 58 === n || 95 === n || W(n)
                    ? (e.consume(n), F)
                    : T(n);
                }
                function T(n) {
                  return 61 === n
                    ? (e.consume(n), P)
                    : Z(n)
                    ? ((u = T), L(n))
                    : J(n)
                    ? (e.consume(n), T)
                    : A(n);
                }
                function P(n) {
                  return null === n ||
                    60 === n ||
                    61 === n ||
                    62 === n ||
                    96 === n
                    ? t(n)
                    : 34 === n || 39 === n
                    ? (e.consume(n), (o = n), O)
                    : Z(n)
                    ? ((u = P), L(n))
                    : J(n)
                    ? (e.consume(n), P)
                    : (e.consume(n), (o = void 0), D);
                }
                function O(n) {
                  return n === o
                    ? (e.consume(n), I)
                    : null === n
                    ? t(n)
                    : Z(n)
                    ? ((u = O), L(n))
                    : (e.consume(n), O);
                }
                function I(e) {
                  return 62 === e || 47 === e || X(e) ? A(e) : t(e);
                }
                function D(n) {
                  return null === n ||
                    34 === n ||
                    39 === n ||
                    60 === n ||
                    61 === n ||
                    96 === n
                    ? t(n)
                    : 62 === n || X(n)
                    ? A(n)
                    : (e.consume(n), D);
                }
                function L(n) {
                  return (
                    e.exit("htmlTextData"),
                    e.enter("lineEnding"),
                    e.consume(n),
                    e.exit("lineEnding"),
                    te(
                      e,
                      z,
                      "linePrefix",
                      r.parser.constructs.disable.null.includes("codeIndented")
                        ? void 0
                        : 4
                    )
                  );
                }
                function z(n) {
                  return e.enter("htmlTextData"), u(n);
                }
                function M(r) {
                  return 62 === r
                    ? (e.consume(r),
                      e.exit("htmlTextData"),
                      e.exit("htmlText"),
                      n)
                    : t(r);
                }
              },
            },
          ],
          91: {
            name: "labelStartLink",
            tokenize: function (e, n, t) {
              const r = this;
              return function (n) {
                return (
                  e.enter("labelLink"),
                  e.enter("labelMarker"),
                  e.consume(n),
                  e.exit("labelMarker"),
                  e.exit("labelLink"),
                  o
                );
              };
              function o(e) {
                return 94 === e &&
                  "_hiddenFootnoteSupport" in r.parser.constructs
                  ? t(e)
                  : n(e);
              }
            },
            resolveAll: We.resolveAll,
          },
          92: [
            {
              name: "hardBreakEscape",
              tokenize: function (e, n, t) {
                return function (n) {
                  return (
                    e.enter("hardBreakEscape"),
                    e.enter("escapeMarker"),
                    e.consume(n),
                    r
                  );
                };
                function r(r) {
                  return Z(r)
                    ? (e.exit("escapeMarker"), e.exit("hardBreakEscape"), n(r))
                    : t(r);
                }
              },
            },
            qe,
          ],
          93: We,
          95: Ze,
          96: {
            name: "codeText",
            tokenize: function (e, n, t) {
              let r,
                o,
                i = 0;
              return function (n) {
                return e.enter("codeText"), e.enter("codeTextSequence"), l(n);
              };
              function l(n) {
                return 96 === n
                  ? (e.consume(n), i++, l)
                  : (e.exit("codeTextSequence"), u(n));
              }
              function u(n) {
                return null === n
                  ? t(n)
                  : 96 === n
                  ? ((o = e.enter("codeTextSequence")), (r = 0), s(n))
                  : 32 === n
                  ? (e.enter("space"), e.consume(n), e.exit("space"), u)
                  : Z(n)
                  ? (e.enter("lineEnding"),
                    e.consume(n),
                    e.exit("lineEnding"),
                    u)
                  : (e.enter("codeTextData"), a(n));
              }
              function a(n) {
                return null === n || 32 === n || 96 === n || Z(n)
                  ? (e.exit("codeTextData"), u(n))
                  : (e.consume(n), a);
              }
              function s(t) {
                return 96 === t
                  ? (e.consume(t), r++, s)
                  : r === i
                  ? (e.exit("codeTextSequence"), e.exit("codeText"), n(t))
                  : ((o.type = "codeTextData"), a(t));
              }
            },
            resolve: function (e) {
              let n,
                t,
                r = e.length - 4,
                o = 3;
              if (
                ("lineEnding" === e[o][1].type || "space" === e[o][1].type) &&
                ("lineEnding" === e[r][1].type || "space" === e[r][1].type)
              )
                for (n = o; ++n < r; )
                  if ("codeTextData" === e[n][1].type) {
                    (e[o][1].type = "codeTextPadding"),
                      (e[r][1].type = "codeTextPadding"),
                      (o += 2),
                      (r -= 2);
                    break;
                  }
              (n = o - 1), r++;
              for (; ++n <= r; )
                void 0 === t
                  ? n !== r && "lineEnding" !== e[n][1].type && (t = n)
                  : (n !== r && "lineEnding" !== e[n][1].type) ||
                    ((e[t][1].type = "codeTextData"),
                    n !== t + 2 &&
                      ((e[t][1].end = e[n - 1][1].end),
                      e.splice(t + 2, n - t - 2),
                      (r -= n - t - 2),
                      (n = t + 2)),
                    (t = void 0));
              return e;
            },
            previous: function (e) {
              return (
                96 !== e ||
                "characterEscape" ===
                  this.events[this.events.length - 1][1].type
              );
            },
          },
        },
        ln = { null: [Ze, pe] },
        un = { null: [42, 95] },
        an = { null: [] };
      function sn(e = {}) {
        const n = {
          defined: [],
          lazy: {},
          constructs: (function (e) {
            const n = {};
            let t = -1;
            for (; ++t < e.length; ) U(n, e[t]);
            return n;
          })([r].concat(e.extensions || [])),
          content: t(re),
          document: t(oe),
          flow: t(fe),
          string: t(de),
          text: t(he),
        };
        return n;
        function t(e) {
          return function (t) {
            return xe(n, e, t);
          };
        }
      }
      const cn = /[\0\t\n\r]/g;
      function fn(e, n) {
        const t = Number.parseInt(e, n);
        return t < 9 ||
          11 === t ||
          (t > 13 && t < 32) ||
          (t > 126 && t < 160) ||
          (t > 55295 && t < 57344) ||
          (t > 64975 && t < 65008) ||
          65535 === (65535 & t) ||
          65534 === (65535 & t) ||
          t > 1114111
          ? "\ufffd"
          : String.fromCharCode(t);
      }
      const pn =
        /\\([!-/:-@[-`{-~])|&(#(?:\d{1,7}|x[\da-f]{1,6})|[\da-z]{1,31});/gi;
      function dn(e, n, t) {
        if (n) return n;
        if (35 === t.charCodeAt(0)) {
          const e = t.charCodeAt(1),
            n = 120 === e || 88 === e;
          return fn(t.slice(n ? 2 : 1), n ? 16 : 10);
        }
        return Ne(t) || e;
      }
      const hn = {}.hasOwnProperty,
        mn = function (e, n, t) {
          return (
            "string" !== typeof n && ((t = n), (n = void 0)),
            (function (e = {}) {
              const n = gn(
                  {
                    transforms: [],
                    canContainEols: [
                      "emphasis",
                      "fragment",
                      "heading",
                      "paragraph",
                      "strong",
                    ],
                    enter: {
                      autolink: s(ie),
                      autolinkProtocol: P,
                      autolinkEmail: P,
                      atxHeading: s(ne),
                      blockQuote: s(X),
                      characterEscape: P,
                      characterReference: P,
                      codeFenced: s(Z),
                      codeFencedFenceInfo: c,
                      codeFencedFenceMeta: c,
                      codeIndented: s(Z, c),
                      codeText: s(J, c),
                      codeTextData: P,
                      data: P,
                      codeFlowValue: P,
                      definition: s(G),
                      definitionDestinationString: c,
                      definitionLabelString: c,
                      definitionTitleString: c,
                      emphasis: s(ee),
                      hardBreakEscape: s(te),
                      hardBreakTrailing: s(te),
                      htmlFlow: s(re, c),
                      htmlFlowData: P,
                      htmlText: s(re, c),
                      htmlTextData: P,
                      image: s(oe),
                      label: c,
                      link: s(ie),
                      listItem: s(ue),
                      listItemValue: g,
                      listOrdered: s(le, m),
                      listUnordered: s(le),
                      paragraph: s(ae),
                      reference: q,
                      referenceString: c,
                      resourceDestinationString: c,
                      resourceTitleString: c,
                      setextHeading: s(ne),
                      strong: s(se),
                      thematicBreak: s(fe),
                    },
                    exit: {
                      atxHeading: p(),
                      atxHeadingSequence: C,
                      autolink: p(),
                      autolinkEmail: K,
                      autolinkProtocol: Y,
                      blockQuote: p(),
                      characterEscapeValue: O,
                      characterReferenceMarkerHexadecimal: W,
                      characterReferenceMarkerNumeric: W,
                      characterReferenceValue: Q,
                      codeFenced: p(v),
                      codeFencedFence: x,
                      codeFencedFenceInfo: y,
                      codeFencedFenceMeta: k,
                      codeFlowValue: O,
                      codeIndented: p(b),
                      codeText: p(M),
                      codeTextData: O,
                      data: O,
                      definition: p(),
                      definitionDestinationString: E,
                      definitionLabelString: w,
                      definitionTitleString: S,
                      emphasis: p(),
                      hardBreakEscape: p(D),
                      hardBreakTrailing: p(D),
                      htmlFlow: p(L),
                      htmlFlowData: O,
                      htmlText: p(z),
                      htmlTextData: O,
                      image: p(_),
                      label: H,
                      labelText: j,
                      lineEnding: I,
                      link: p(B),
                      listItem: p(),
                      listOrdered: p(),
                      listUnordered: p(),
                      paragraph: p(),
                      referenceString: $,
                      resourceDestinationString: U,
                      resourceTitleString: N,
                      resource: V,
                      setextHeading: p(T),
                      setextHeadingLineSequence: F,
                      setextHeadingText: A,
                      strong: p(),
                      thematicBreak: p(),
                    },
                  },
                  e.mdastExtensions || []
                ),
                t = {};
              return r;
              function r(e) {
                let t = { type: "root", children: [] };
                const r = [],
                  s = [],
                  p = {
                    stack: [t],
                    tokenStack: r,
                    config: n,
                    enter: f,
                    exit: d,
                    buffer: c,
                    resume: h,
                    setData: i,
                    getData: l,
                  };
                let m = -1;
                for (; ++m < e.length; )
                  if (
                    "listOrdered" === e[m][1].type ||
                    "listUnordered" === e[m][1].type
                  )
                    if ("enter" === e[m][0]) s.push(m);
                    else {
                      m = o(e, s.pop(), m);
                    }
                for (m = -1; ++m < e.length; ) {
                  const t = n[e[m][0]];
                  hn.call(t, e[m][1].type) &&
                    t[e[m][1].type].call(
                      Object.assign(
                        { sliceSerialize: e[m][2].sliceSerialize },
                        p
                      ),
                      e[m][1]
                    );
                }
                if (r.length > 0)
                  throw new Error(
                    "Cannot close document, a token (`" +
                      r[r.length - 1].type +
                      "`, " +
                      a({
                        start: r[r.length - 1].start,
                        end: r[r.length - 1].end,
                      }) +
                      ") is still open"
                  );
                for (
                  t.position = {
                    start: u(
                      e.length > 0
                        ? e[0][1].start
                        : { line: 1, column: 1, offset: 0 }
                    ),
                    end: u(
                      e.length > 0
                        ? e[e.length - 2][1].end
                        : { line: 1, column: 1, offset: 0 }
                    ),
                  },
                    m = -1;
                  ++m < n.transforms.length;

                )
                  t = n.transforms[m](t) || t;
                return t;
              }
              function o(e, n, t) {
                let r,
                  o,
                  i,
                  l,
                  u = n - 1,
                  a = -1,
                  s = !1;
                for (; ++u <= t; ) {
                  const n = e[u];
                  if (
                    ("listUnordered" === n[1].type ||
                    "listOrdered" === n[1].type ||
                    "blockQuote" === n[1].type
                      ? ("enter" === n[0] ? a++ : a--, (l = void 0))
                      : "lineEndingBlank" === n[1].type
                      ? "enter" === n[0] &&
                        (!r || l || a || i || (i = u), (l = void 0))
                      : "linePrefix" === n[1].type ||
                        "listItemValue" === n[1].type ||
                        "listItemMarker" === n[1].type ||
                        "listItemPrefix" === n[1].type ||
                        "listItemPrefixWhitespace" === n[1].type ||
                        (l = void 0),
                    (!a &&
                      "enter" === n[0] &&
                      "listItemPrefix" === n[1].type) ||
                      (-1 === a &&
                        "exit" === n[0] &&
                        ("listUnordered" === n[1].type ||
                          "listOrdered" === n[1].type)))
                  ) {
                    if (r) {
                      let l = u;
                      for (o = void 0; l--; ) {
                        const n = e[l];
                        if (
                          "lineEnding" === n[1].type ||
                          "lineEndingBlank" === n[1].type
                        ) {
                          if ("exit" === n[0]) continue;
                          o && ((e[o][1].type = "lineEndingBlank"), (s = !0)),
                            (n[1].type = "lineEnding"),
                            (o = l);
                        } else if (
                          "linePrefix" !== n[1].type &&
                          "blockQuotePrefix" !== n[1].type &&
                          "blockQuotePrefixWhitespace" !== n[1].type &&
                          "blockQuoteMarker" !== n[1].type &&
                          "listItemIndent" !== n[1].type
                        )
                          break;
                      }
                      i && (!o || i < o) && (r._spread = !0),
                        (r.end = Object.assign(
                          {},
                          o ? e[o][1].start : n[1].end
                        )),
                        e.splice(o || u, 0, ["exit", r, n[2]]),
                        u++,
                        t++;
                    }
                    "listItemPrefix" === n[1].type &&
                      ((r = {
                        type: "listItem",
                        _spread: !1,
                        start: Object.assign({}, n[1].start),
                      }),
                      e.splice(u, 0, ["enter", r, n[2]]),
                      u++,
                      t++,
                      (i = void 0),
                      (l = !0));
                  }
                }
                return (e[n][1]._spread = s), t;
              }
              function i(e, n) {
                t[e] = n;
              }
              function l(e) {
                return t[e];
              }
              function u(e) {
                return { line: e.line, column: e.column, offset: e.offset };
              }
              function s(e, n) {
                return t;
                function t(t) {
                  f.call(this, e(t), t), n && n.call(this, t);
                }
              }
              function c() {
                this.stack.push({ type: "fragment", children: [] });
              }
              function f(e, n) {
                return (
                  this.stack[this.stack.length - 1].children.push(e),
                  this.stack.push(e),
                  this.tokenStack.push(n),
                  (e.position = { start: u(n.start) }),
                  e
                );
              }
              function p(e) {
                return n;
                function n(n) {
                  e && e.call(this, n), d.call(this, n);
                }
              }
              function d(e) {
                const n = this.stack.pop(),
                  t = this.tokenStack.pop();
                if (!t)
                  throw new Error(
                    "Cannot close `" +
                      e.type +
                      "` (" +
                      a({ start: e.start, end: e.end }) +
                      "): it\u2019s not open"
                  );
                if (t.type !== e.type)
                  throw new Error(
                    "Cannot close `" +
                      e.type +
                      "` (" +
                      a({ start: e.start, end: e.end }) +
                      "): a different token (`" +
                      t.type +
                      "`, " +
                      a({ start: t.start, end: t.end }) +
                      ") is open"
                  );
                return (n.position.end = u(e.end)), n;
              }
              function h() {
                return (function (e, n) {
                  var { includeImageAlt: t = !0 } = n || {};
                  return R(e, t);
                })(this.stack.pop());
              }
              function m() {
                i("expectingFirstListItemValue", !0);
              }
              function g(e) {
                if (l("expectingFirstListItemValue")) {
                  (this.stack[this.stack.length - 2].start = Number.parseInt(
                    this.sliceSerialize(e),
                    10
                  )),
                    i("expectingFirstListItemValue");
                }
              }
              function y() {
                const e = this.resume();
                this.stack[this.stack.length - 1].lang = e;
              }
              function k() {
                const e = this.resume();
                this.stack[this.stack.length - 1].meta = e;
              }
              function x() {
                l("flowCodeInside") || (this.buffer(), i("flowCodeInside", !0));
              }
              function v() {
                const e = this.resume();
                (this.stack[this.stack.length - 1].value = e.replace(
                  /^(\r?\n|\r)|(\r?\n|\r)$/g,
                  ""
                )),
                  i("flowCodeInside");
              }
              function b() {
                const e = this.resume();
                this.stack[this.stack.length - 1].value = e.replace(
                  /(\r?\n|\r)$/g,
                  ""
                );
              }
              function w(e) {
                const n = this.resume(),
                  t = this.stack[this.stack.length - 1];
                (t.label = n),
                  (t.identifier = Pe(this.sliceSerialize(e)).toLowerCase());
              }
              function S() {
                const e = this.resume();
                this.stack[this.stack.length - 1].title = e;
              }
              function E() {
                const e = this.resume();
                this.stack[this.stack.length - 1].url = e;
              }
              function C(e) {
                const n = this.stack[this.stack.length - 1];
                if (!n.depth) {
                  const t = this.sliceSerialize(e).length;
                  n.depth = t;
                }
              }
              function A() {
                i("setextHeadingSlurpLineEnding", !0);
              }
              function F(e) {
                this.stack[this.stack.length - 1].depth =
                  61 === this.sliceSerialize(e).charCodeAt(0) ? 1 : 2;
              }
              function T() {
                i("setextHeadingSlurpLineEnding");
              }
              function P(e) {
                const n = this.stack[this.stack.length - 1];
                let t = n.children[n.children.length - 1];
                (t && "text" === t.type) ||
                  ((t = ce()),
                  (t.position = { start: u(e.start) }),
                  n.children.push(t)),
                  this.stack.push(t);
              }
              function O(e) {
                const n = this.stack.pop();
                (n.value += this.sliceSerialize(e)),
                  (n.position.end = u(e.end));
              }
              function I(e) {
                const t = this.stack[this.stack.length - 1];
                if (l("atHardBreak")) {
                  return (
                    (t.children[t.children.length - 1].position.end = u(e.end)),
                    void i("atHardBreak")
                  );
                }
                !l("setextHeadingSlurpLineEnding") &&
                  n.canContainEols.includes(t.type) &&
                  (P.call(this, e), O.call(this, e));
              }
              function D() {
                i("atHardBreak", !0);
              }
              function L() {
                const e = this.resume();
                this.stack[this.stack.length - 1].value = e;
              }
              function z() {
                const e = this.resume();
                this.stack[this.stack.length - 1].value = e;
              }
              function M() {
                const e = this.resume();
                this.stack[this.stack.length - 1].value = e;
              }
              function B() {
                const e = this.stack[this.stack.length - 1];
                l("inReference")
                  ? ((e.type += "Reference"),
                    (e.referenceType = l("referenceType") || "shortcut"),
                    delete e.url,
                    delete e.title)
                  : (delete e.identifier, delete e.label),
                  i("referenceType");
              }
              function _() {
                const e = this.stack[this.stack.length - 1];
                l("inReference")
                  ? ((e.type += "Reference"),
                    (e.referenceType = l("referenceType") || "shortcut"),
                    delete e.url,
                    delete e.title)
                  : (delete e.identifier, delete e.label),
                  i("referenceType");
              }
              function j(e) {
                const n = this.stack[this.stack.length - 2],
                  t = this.sliceSerialize(e);
                (n.label = (function (e) {
                  return e.replace(pn, dn);
                })(t)),
                  (n.identifier = Pe(t).toLowerCase());
              }
              function H() {
                const e = this.stack[this.stack.length - 1],
                  n = this.resume(),
                  t = this.stack[this.stack.length - 1];
                i("inReference", !0),
                  "link" === t.type ? (t.children = e.children) : (t.alt = n);
              }
              function U() {
                const e = this.resume();
                this.stack[this.stack.length - 1].url = e;
              }
              function N() {
                const e = this.resume();
                this.stack[this.stack.length - 1].title = e;
              }
              function V() {
                i("inReference");
              }
              function q() {
                i("referenceType", "collapsed");
              }
              function $(e) {
                const n = this.resume(),
                  t = this.stack[this.stack.length - 1];
                (t.label = n),
                  (t.identifier = Pe(this.sliceSerialize(e)).toLowerCase()),
                  i("referenceType", "full");
              }
              function W(e) {
                i("characterReferenceType", e.type);
              }
              function Q(e) {
                const n = this.sliceSerialize(e),
                  t = l("characterReferenceType");
                let r;
                t
                  ? ((r = fn(
                      n,
                      "characterReferenceMarkerNumeric" === t ? 10 : 16
                    )),
                    i("characterReferenceType"))
                  : (r = Ne(n));
                const o = this.stack.pop();
                (o.value += r), (o.position.end = u(e.end));
              }
              function Y(e) {
                O.call(this, e);
                this.stack[this.stack.length - 1].url = this.sliceSerialize(e);
              }
              function K(e) {
                O.call(this, e);
                this.stack[this.stack.length - 1].url =
                  "mailto:" + this.sliceSerialize(e);
              }
              function X() {
                return { type: "blockquote", children: [] };
              }
              function Z() {
                return { type: "code", lang: null, meta: null, value: "" };
              }
              function J() {
                return { type: "inlineCode", value: "" };
              }
              function G() {
                return {
                  type: "definition",
                  identifier: "",
                  label: null,
                  title: null,
                  url: "",
                };
              }
              function ee() {
                return { type: "emphasis", children: [] };
              }
              function ne() {
                return { type: "heading", depth: void 0, children: [] };
              }
              function te() {
                return { type: "break" };
              }
              function re() {
                return { type: "html", value: "" };
              }
              function oe() {
                return { type: "image", title: null, url: "", alt: null };
              }
              function ie() {
                return { type: "link", title: null, url: "", children: [] };
              }
              function le(e) {
                return {
                  type: "list",
                  ordered: "listOrdered" === e.type,
                  start: null,
                  spread: e._spread,
                  children: [],
                };
              }
              function ue(e) {
                return {
                  type: "listItem",
                  spread: e._spread,
                  checked: null,
                  children: [],
                };
              }
              function ae() {
                return { type: "paragraph", children: [] };
              }
              function se() {
                return { type: "strong", children: [] };
              }
              function ce() {
                return { type: "text", value: "" };
              }
              function fe() {
                return { type: "thematicBreak" };
              }
            })(t)(
              (function (e) {
                for (; !ue(e); );
                return e;
              })(
                sn(t)
                  .document()
                  .write(
                    (function () {
                      let e,
                        n = 1,
                        t = "",
                        r = !0;
                      return function (o, i, l) {
                        const u = [];
                        let a, s, c, f, p;
                        for (
                          o = t + o.toString(i),
                            c = 0,
                            t = "",
                            r &&
                              (65279 === o.charCodeAt(0) && c++, (r = void 0));
                          c < o.length;

                        ) {
                          if (
                            ((cn.lastIndex = c),
                            (a = cn.exec(o)),
                            (f = a && void 0 !== a.index ? a.index : o.length),
                            (p = o.charCodeAt(f)),
                            !a)
                          ) {
                            t = o.slice(c);
                            break;
                          }
                          if (10 === p && c === f && e)
                            u.push(-3), (e = void 0);
                          else
                            switch (
                              (e && (u.push(-5), (e = void 0)),
                              c < f && (u.push(o.slice(c, f)), (n += f - c)),
                              p)
                            ) {
                              case 0:
                                u.push(65533), n++;
                                break;
                              case 9:
                                for (
                                  s = 4 * Math.ceil(n / 4), u.push(-2);
                                  n++ < s;

                                )
                                  u.push(-1);
                                break;
                              case 10:
                                u.push(-4), (n = 1);
                                break;
                              default:
                                (e = !0), (n = 1);
                            }
                          c = f + 1;
                        }
                        return (
                          l && (e && u.push(-5), t && u.push(t), u.push(null)),
                          u
                        );
                      };
                    })()(e, n, !0)
                  )
              )
            )
          );
        };
      function gn(e, n) {
        let t = -1;
        for (; ++t < n.length; ) {
          const r = n[t];
          Array.isArray(r) ? gn(e, r) : yn(e, r);
        }
        return e;
      }
      function yn(e, n) {
        let t;
        for (t in n)
          if (hn.call(n, t)) {
            const r = "canContainEols" === t || "transforms" === t,
              o = (hn.call(e, t) ? e[t] : void 0) || (e[t] = r ? [] : {}),
              i = n[t];
            i && (r ? (e[t] = [...o, ...i]) : Object.assign(o, i));
          }
      }
      var kn = function (e) {
          Object.assign(this, {
            Parser: (n) => {
              const t = this.data("settings");
              return mn(
                n,
                Object.assign({}, t, e, {
                  extensions: this.data("micromarkExtensions") || [],
                  mdastExtensions: this.data("fromMarkdownExtensions") || [],
                })
              );
            },
          });
        },
        xn = function (e, n, t) {
          var r = { type: String(e) };
          return (
            (void 0 !== t && null !== t) ||
            ("string" !== typeof n && !Array.isArray(n))
              ? Object.assign(r, n)
              : (t = n),
            Array.isArray(t)
              ? (r.children = t)
              : void 0 !== t && null !== t && (r.value = String(t)),
            r
          );
        };
      const vn = function (e) {
        if (void 0 === e || null === e) return wn;
        if ("string" === typeof e)
          return (function (e) {
            return bn(n);
            function n(n) {
              return n && n.type === e;
            }
          })(e);
        if ("object" === typeof e)
          return Array.isArray(e)
            ? (function (e) {
                const n = [];
                let t = -1;
                for (; ++t < e.length; ) n[t] = vn(e[t]);
                return bn(r);
                function r(...e) {
                  let t = -1;
                  for (; ++t < n.length; ) if (n[t].call(this, ...e)) return !0;
                  return !1;
                }
              })(e)
            : (function (e) {
                return bn(n);
                function n(n) {
                  let t;
                  for (t in e) if (n[t] !== e[t]) return !1;
                  return !0;
                }
              })(e);
        if ("function" === typeof e) return bn(e);
        throw new Error("Expected function, string, or object as test");
      };
      function bn(e) {
        return function (...n) {
          return Boolean(e.call(this, ...n));
        };
      }
      function wn() {
        return !0;
      }
      const Sn = function (e, n, t, r) {
        "function" === typeof n &&
          "function" !== typeof t &&
          ((r = t), (t = n), (n = null));
        const o = vn(n),
          i = r ? -1 : 1;
        !(function e(l, u, a) {
          const s = "object" === typeof l && null !== l ? l : {};
          let c;
          "string" === typeof s.type &&
            ((c =
              "string" === typeof s.tagName
                ? s.tagName
                : "string" === typeof s.name
                ? s.name
                : void 0),
            Object.defineProperty(f, "name", {
              value: "node (" + s.type + (c ? "<" + c + ">" : "") + ")",
            }));
          return f;
          function f() {
            let s,
              c,
              f,
              p = [];
            if (
              (!n || o(l, u, a[a.length - 1] || null)) &&
              ((p = (function (e) {
                if (Array.isArray(e)) return e;
                if ("number" === typeof e) return [true, e];
                return [e];
              })(t(l, a))),
              false === p[0])
            )
              return p;
            if (l.children && "skip" !== p[0])
              for (
                c = (r ? l.children.length : -1) + i, f = a.concat(l);
                c > -1 && c < l.children.length;

              ) {
                if (((s = e(l.children[c], c, f)()), false === s[0])) return s;
                c = "number" === typeof s[1] ? s[1] : c + i;
              }
            return p;
          }
        })(e, null, [])();
      };
      const En = function (e, n, t, r) {
        "function" === typeof n &&
          "function" !== typeof t &&
          ((r = t), (t = n), (n = null)),
          Sn(
            e,
            n,
            function (e, n) {
              const r = n[n.length - 1];
              return t(e, r ? r.children.indexOf(e) : null, r);
            },
            r
          );
      };
      var Cn = Fn("start"),
        An = Fn("end");
      function Fn(e) {
        return function (n) {
          var t = (n && n.position && n.position[e]) || {};
          return {
            line: t.line || null,
            column: t.column || null,
            offset: t.offset > -1 ? t.offset : null,
          };
        };
      }
      const Tn = function (e, n, t, r) {
        "function" === typeof n &&
          "function" !== typeof t &&
          ((r = t), (t = n), (n = null));
        var o = vn(n),
          i = r ? -1 : 1;
        !(function e(l, u, a) {
          var s,
            c = "object" === typeof l && null !== l ? l : {};
          "string" === typeof c.type &&
            ((s =
              "string" === typeof c.tagName
                ? c.tagName
                : "string" === typeof c.name
                ? c.name
                : void 0),
            Object.defineProperty(f, "name", {
              value: "node (" + c.type + (s ? "<" + s + ">" : "") + ")",
            }));
          return f;
          function f() {
            var s,
              c,
              f,
              p = [];
            if (
              (!n || o(l, u, a[a.length - 1] || null)) &&
              false ===
                (p = (function (e) {
                  if (Array.isArray(e)) return e;
                  if ("number" === typeof e) return [true, e];
                  return [e];
                })(t(l, a)))[0]
            )
              return p;
            if (l.children && "skip" !== p[0])
              for (
                c = (r ? l.children.length : -1) + i, f = a.concat(l);
                c > -1 && c < l.children.length;

              ) {
                if (false === (s = e(l.children[c], c, f)())[0]) return s;
                c = "number" === typeof s[1] ? s[1] : c + i;
              }
            return p;
          }
        })(e, null, [])();
      };
      const Pn = {}.hasOwnProperty;
      function On(e) {
        const n = Object.create(null);
        if (!e || !e.type)
          throw new Error("mdast-util-definitions expected node");
        var t, r, o;
        return (
          (r = function (e) {
            const t = In(e.identifier);
            t && !Pn.call(n, t) && (n[t] = e);
          }),
          "function" === typeof (t = "definition") &&
            "function" !== typeof r &&
            ((o = r), (r = t), (t = null)),
          Tn(
            e,
            t,
            function (e, n) {
              var t = n[n.length - 1];
              return r(e, t ? t.children.indexOf(e) : null, t);
            },
            o
          ),
          function (e) {
            const t = In(e);
            return t && Pn.call(n, t) ? n[t] : null;
          }
        );
      }
      function In(e) {
        return String(e || "").toUpperCase();
      }
      const Dn = {}.hasOwnProperty;
      function Ln(e, n) {
        const t = n.data || {};
        return "value" in n &&
          !(
            Dn.call(t, "hName") ||
            Dn.call(t, "hProperties") ||
            Dn.call(t, "hChildren")
          )
          ? e.augment(n, xn("text", n.value))
          : e(n, "div", Rn(e, n));
      }
      function zn(e, n, t) {
        const r = n && n.type;
        let o;
        if (!r) throw new Error("Expected node, got `" + n + "`");
        return (
          (o = Dn.call(e.handlers, r)
            ? e.handlers[r]
            : e.passThrough && e.passThrough.includes(r)
            ? Mn
            : e.unknownHandler),
          ("function" === typeof o ? o : Ln)(e, n, t)
        );
      }
      function Mn(e, n) {
        return "children" in n ? { ...n, children: Rn(e, n) } : n;
      }
      function Rn(e, n) {
        const t = [];
        if ("children" in n) {
          const r = n.children;
          let o = -1;
          for (; ++o < r.length; ) {
            const i = zn(e, r[o], n);
            if (i) {
              if (
                o &&
                "break" === r[o - 1].type &&
                (Array.isArray(i) ||
                  "text" !== i.type ||
                  (i.value = i.value.replace(/^\s+/, "")),
                !Array.isArray(i) && "element" === i.type)
              ) {
                const e = i.children[0];
                e &&
                  "text" === e.type &&
                  (e.value = e.value.replace(/^\s+/, ""));
              }
              Array.isArray(i) ? t.push(...i) : t.push(i);
            }
          }
        }
        return t;
      }
      function Bn(e, n) {
        return e(n, "hr");
      }
      function _n(e, n) {
        const t = [];
        let r = -1;
        for (n && t.push(xn("text", "\n")); ++r < e.length; )
          r && t.push(xn("text", "\n")), t.push(e[r]);
        return n && e.length > 0 && t.push(xn("text", "\n")), t;
      }
      function jn(e, n) {
        const t = {},
          r = n.ordered ? "ol" : "ul",
          o = Rn(e, n);
        let i = -1;
        for (
          "number" === typeof n.start && 1 !== n.start && (t.start = n.start);
          ++i < o.length;

        ) {
          const e = o[i];
          if (
            "element" === e.type &&
            "li" === e.tagName &&
            e.properties &&
            Array.isArray(e.properties.className) &&
            e.properties.className.includes("task-list-item")
          ) {
            t.className = ["contains-task-list"];
            break;
          }
        }
        return e(n, r, t, _n(o, !0));
      }
      function Hn(e, n) {
        const t = e.footnoteOrder,
          r = String(n.identifier),
          o = t.indexOf(r),
          i = String(-1 === o ? t.push(r) : o + 1);
        return e(
          n,
          "a",
          {
            href: "#fn" + i,
            className: ["footnote-ref"],
            id: "fnref" + i,
            role: "doc-noteref",
          },
          [e(n.position, "sup", [xn("text", i)])]
        );
      }
      var Un = t(729);
      function Nn(e, n) {
        const t = n.referenceType;
        let r = "]";
        if (
          ("collapsed" === t
            ? (r += "[]")
            : "full" === t && (r += "[" + (n.label || n.identifier) + "]"),
          "imageReference" === n.type)
        )
          return xn("text", "![" + n.alt + r);
        const o = Rn(e, n),
          i = o[0];
        i && "text" === i.type
          ? (i.value = "[" + i.value)
          : o.unshift(xn("text", "["));
        const l = o[o.length - 1];
        return (
          l && "text" === l.type ? (l.value += r) : o.push(xn("text", r)), o
        );
      }
      function Vn(e) {
        const n = e.spread;
        return void 0 === n || null === n ? e.children.length > 1 : n;
      }
      const qn = {
        blockquote: function (e, n) {
          return e(n, "blockquote", _n(Rn(e, n), !0));
        },
        break: function (e, n) {
          return [e(n, "br"), xn("text", "\n")];
        },
        code: function (e, n) {
          const t = n.value ? n.value + "\n" : "",
            r = n.lang && n.lang.match(/^[^ \t]+(?=[ \t]|$)/),
            o = {};
          r && (o.className = ["language-" + r]);
          const i = e(n, "code", o, [xn("text", t)]);
          return (
            n.meta && (i.data = { meta: n.meta }), e(n.position, "pre", [i])
          );
        },
        delete: function (e, n) {
          return e(n, "del", Rn(e, n));
        },
        emphasis: function (e, n) {
          return e(n, "em", Rn(e, n));
        },
        footnoteReference: Hn,
        footnote: function (e, n) {
          const t = e.footnoteById,
            r = e.footnoteOrder;
          let o = 1;
          for (; o in t; ) o++;
          const i = String(o);
          return (
            r.push(i),
            (t[i] = {
              type: "footnoteDefinition",
              identifier: i,
              children: [{ type: "paragraph", children: n.children }],
              position: n.position,
            }),
            Hn(e, {
              type: "footnoteReference",
              identifier: i,
              position: n.position,
            })
          );
        },
        heading: function (e, n) {
          return e(n, "h" + n.depth, Rn(e, n));
        },
        html: function (e, n) {
          return e.dangerous ? e.augment(n, xn("raw", n.value)) : null;
        },
        imageReference: function (e, n) {
          const t = e.definition(n.identifier);
          if (!t) return Nn(e, n);
          const r = { src: Un(t.url || ""), alt: n.alt };
          return (
            null !== t.title && void 0 !== t.title && (r.title = t.title),
            e(n, "img", r)
          );
        },
        image: function (e, n) {
          const t = { src: Un(n.url), alt: n.alt };
          return (
            null !== n.title && void 0 !== n.title && (t.title = n.title),
            e(n, "img", t)
          );
        },
        inlineCode: function (e, n) {
          return e(n, "code", [xn("text", n.value.replace(/\r?\n|\r/g, " "))]);
        },
        linkReference: function (e, n) {
          const t = e.definition(n.identifier);
          if (!t) return Nn(e, n);
          const r = { href: Un(t.url || "") };
          return (
            null !== t.title && void 0 !== t.title && (r.title = t.title),
            e(n, "a", r, Rn(e, n))
          );
        },
        link: function (e, n) {
          const t = { href: Un(n.url) };
          return (
            null !== n.title && void 0 !== n.title && (t.title = n.title),
            e(n, "a", t, Rn(e, n))
          );
        },
        listItem: function (e, n, t) {
          const r = Rn(e, n),
            o = t
              ? (function (e) {
                  let n = e.spread;
                  const t = e.children;
                  let r = -1;
                  for (; !n && ++r < t.length; ) n = Vn(t[r]);
                  return Boolean(n);
                })(t)
              : Vn(n),
            i = {},
            l = [];
          if ("boolean" === typeof n.checked) {
            let t;
            r[0] && "element" === r[0].type && "p" === r[0].tagName
              ? (t = r[0])
              : ((t = e(null, "p", [])), r.unshift(t)),
              t.children.length > 0 && t.children.unshift(xn("text", " ")),
              t.children.unshift(
                e(null, "input", {
                  type: "checkbox",
                  checked: n.checked,
                  disabled: !0,
                })
              ),
              (i.className = ["task-list-item"]);
          }
          let u = -1;
          for (; ++u < r.length; ) {
            const e = r[u];
            (o || 0 !== u || "element" !== e.type || "p" !== e.tagName) &&
              l.push(xn("text", "\n")),
              "element" !== e.type || "p" !== e.tagName || o
                ? l.push(e)
                : l.push(...e.children);
          }
          const a = r[r.length - 1];
          return (
            !a ||
              (!o && "tagName" in a && "p" === a.tagName) ||
              l.push(xn("text", "\n")),
            e(n, "li", i, l)
          );
        },
        list: jn,
        paragraph: function (e, n) {
          return e(n, "p", Rn(e, n));
        },
        root: function (e, n) {
          return e.augment(n, xn("root", _n(Rn(e, n))));
        },
        strong: function (e, n) {
          return e(n, "strong", Rn(e, n));
        },
        table: function (e, n) {
          const t = n.children;
          let r = -1;
          const o = n.align || [],
            i = [];
          for (; ++r < t.length; ) {
            const l = t[r].children,
              u = 0 === r ? "th" : "td";
            let a = n.align ? o.length : l.length;
            const s = [];
            for (; a--; ) {
              const n = l[a];
              s[a] = e(n, u, { align: o[a] }, n ? Rn(e, n) : []);
            }
            i[r] = e(t[r], "tr", _n(s, !0));
          }
          return e(
            n,
            "table",
            _n(
              [e(i[0].position, "thead", _n([i[0]], !0))].concat(
                i[1]
                  ? e(
                      { start: Cn(i[1]), end: An(i[i.length - 1]) },
                      "tbody",
                      _n(i.slice(1), !0)
                    )
                  : []
              ),
              !0
            )
          );
        },
        text: function (e, n) {
          return e.augment(
            n,
            xn("text", String(n.value).replace(/[ \t]*(\r?\n|\r)[ \t]*/g, "$1"))
          );
        },
        thematicBreak: Bn,
        toml: $n,
        yaml: $n,
        definition: $n,
        footnoteDefinition: $n,
      };
      function $n() {
        return null;
      }
      const Wn = {}.hasOwnProperty;
      function Qn(e, n) {
        const t = (function (e, n) {
            const t = n || {},
              r = t.allowDangerousHtml || !1,
              o = {};
            return (
              (l.dangerous = r),
              (l.definition = On(e)),
              (l.footnoteById = o),
              (l.footnoteOrder = []),
              (l.augment = i),
              (l.handlers = { ...qn, ...t.handlers }),
              (l.unknownHandler = t.unknownHandler),
              (l.passThrough = t.passThrough),
              En(e, "footnoteDefinition", (e) => {
                const n = String(e.identifier).toUpperCase();
                Wn.call(o, n) || (o[n] = e);
              }),
              l
            );
            function i(e, n) {
              if (e && "data" in e && e.data) {
                const t = e.data;
                t.hName &&
                  ("element" !== n.type &&
                    (n = {
                      type: "element",
                      tagName: "",
                      properties: {},
                      children: [],
                    }),
                  (n.tagName = t.hName)),
                  "element" === n.type &&
                    t.hProperties &&
                    (n.properties = { ...n.properties, ...t.hProperties }),
                  "children" in n &&
                    n.children &&
                    t.hChildren &&
                    (n.children = t.hChildren);
              }
              if (e) {
                const r = "type" in e ? e : { position: e };
                (t = r) &&
                  t.position &&
                  t.position.start &&
                  t.position.start.line &&
                  t.position.start.column &&
                  t.position.end &&
                  t.position.end.line &&
                  t.position.end.column &&
                  (n.position = { start: Cn(r), end: An(r) });
              }
              var t;
              return n;
            }
            function l(e, n, t, r) {
              return (
                Array.isArray(t) && ((r = t), (t = {})),
                i(e, {
                  type: "element",
                  tagName: n,
                  properties: t || {},
                  children: r || [],
                })
              );
            }
          })(e, n),
          r = zn(t, e, null),
          o = (function (e) {
            const n = e.footnoteById,
              t = e.footnoteOrder;
            let r = -1;
            const o = [];
            for (; ++r < t.length; ) {
              const e = n[t[r].toUpperCase()];
              if (!e) continue;
              const i = String(r + 1),
                l = [...e.children],
                u = {
                  type: "link",
                  url: "#fnref" + i,
                  data: {
                    hProperties: {
                      className: ["footnote-back"],
                      role: "doc-backlink",
                    },
                  },
                  children: [{ type: "text", value: "\u21a9" }],
                },
                a = l[l.length - 1];
              a && "paragraph" === a.type ? a.children.push(u) : l.push(u),
                o.push({
                  type: "listItem",
                  data: { hProperties: { id: "fn" + i, role: "doc-endnote" } },
                  children: l,
                  position: e.position,
                });
            }
            return 0 === o.length
              ? null
              : e(
                  null,
                  "section",
                  { className: ["footnotes"], role: "doc-endnotes" },
                  _n(
                    [Bn(e), jn(e, { type: "list", ordered: !0, children: o })],
                    !0
                  )
                );
          })(t);
        return (
          o && r.children.push(xn("text", "\n"), o),
          Array.isArray(r) ? { type: "root", children: r } : r
        );
      }
      var Yn = function (e, n) {
        return e && "run" in e
          ? (function (e, n) {
              return (t, r, o) => {
                e.run(Qn(t, n), r, (e) => {
                  o(e);
                });
              };
            })(e, n)
          : (function (e) {
              return (n) => Qn(n, e);
            })(e);
      };
      var Kn = t(5697);
      class Xn {
        constructor(e, n, t) {
          (this.property = e), (this.normal = n), t && (this.space = t);
        }
      }
      function Zn(e, n) {
        const t = {},
          r = {};
        let o = -1;
        for (; ++o < e.length; )
          Object.assign(t, e[o].property), Object.assign(r, e[o].normal);
        return new Xn(t, r, n);
      }
      function Jn(e) {
        return e.toLowerCase();
      }
      (Xn.prototype.property = {}),
        (Xn.prototype.normal = {}),
        (Xn.prototype.space = null);
      class Gn {
        constructor(e, n) {
          (this.property = e), (this.attribute = n);
        }
      }
      (Gn.prototype.space = null),
        (Gn.prototype.boolean = !1),
        (Gn.prototype.booleanish = !1),
        (Gn.prototype.overloadedBoolean = !1),
        (Gn.prototype.number = !1),
        (Gn.prototype.commaSeparated = !1),
        (Gn.prototype.spaceSeparated = !1),
        (Gn.prototype.commaOrSpaceSeparated = !1),
        (Gn.prototype.mustUseProperty = !1),
        (Gn.prototype.defined = !1);
      let et = 0;
      const nt = at(),
        tt = at(),
        rt = at(),
        ot = at(),
        it = at(),
        lt = at(),
        ut = at();
      function at() {
        return 2 ** ++et;
      }
      const st = Object.keys(o);
      class ct extends Gn {
        constructor(e, n, t, r) {
          let i = -1;
          if ((super(e, n), ft(this, "space", r), "number" === typeof t))
            for (; ++i < st.length; ) {
              const e = st[i];
              ft(this, st[i], (t & o[e]) === o[e]);
            }
        }
      }
      function ft(e, n, t) {
        t && (e[n] = t);
      }
      ct.prototype.defined = !0;
      const pt = {}.hasOwnProperty;
      function dt(e) {
        const n = {},
          t = {};
        let r;
        for (r in e.properties)
          if (pt.call(e.properties, r)) {
            const o = e.properties[r],
              i = new ct(r, e.transform(e.attributes || {}, r), o, e.space);
            e.mustUseProperty &&
              e.mustUseProperty.includes(r) &&
              (i.mustUseProperty = !0),
              (n[r] = i),
              (t[Jn(r)] = r),
              (t[Jn(i.attribute)] = r);
          }
        return new Xn(n, t, e.space);
      }
      const ht = dt({
          space: "xlink",
          transform: (e, n) => "xlink:" + n.slice(5).toLowerCase(),
          properties: {
            xLinkActuate: null,
            xLinkArcRole: null,
            xLinkHref: null,
            xLinkRole: null,
            xLinkShow: null,
            xLinkTitle: null,
            xLinkType: null,
          },
        }),
        mt = dt({
          space: "xml",
          transform: (e, n) => "xml:" + n.slice(3).toLowerCase(),
          properties: { xmlLang: null, xmlBase: null, xmlSpace: null },
        });
      function gt(e, n) {
        return n in e ? e[n] : n;
      }
      function yt(e, n) {
        return gt(e, n.toLowerCase());
      }
      const kt = dt({
          space: "xmlns",
          attributes: { xmlnsxlink: "xmlns:xlink" },
          transform: yt,
          properties: { xmlns: null, xmlnsXLink: null },
        }),
        xt = dt({
          transform: (e, n) =>
            "role" === n ? n : "aria-" + n.slice(4).toLowerCase(),
          properties: {
            ariaActiveDescendant: null,
            ariaAtomic: tt,
            ariaAutoComplete: null,
            ariaBusy: tt,
            ariaChecked: tt,
            ariaColCount: ot,
            ariaColIndex: ot,
            ariaColSpan: ot,
            ariaControls: it,
            ariaCurrent: null,
            ariaDescribedBy: it,
            ariaDetails: null,
            ariaDisabled: tt,
            ariaDropEffect: it,
            ariaErrorMessage: null,
            ariaExpanded: tt,
            ariaFlowTo: it,
            ariaGrabbed: tt,
            ariaHasPopup: null,
            ariaHidden: tt,
            ariaInvalid: null,
            ariaKeyShortcuts: null,
            ariaLabel: null,
            ariaLabelledBy: it,
            ariaLevel: ot,
            ariaLive: null,
            ariaModal: tt,
            ariaMultiLine: tt,
            ariaMultiSelectable: tt,
            ariaOrientation: null,
            ariaOwns: it,
            ariaPlaceholder: null,
            ariaPosInSet: ot,
            ariaPressed: tt,
            ariaReadOnly: tt,
            ariaRelevant: null,
            ariaRequired: tt,
            ariaRoleDescription: it,
            ariaRowCount: ot,
            ariaRowIndex: ot,
            ariaRowSpan: ot,
            ariaSelected: tt,
            ariaSetSize: ot,
            ariaSort: null,
            ariaValueMax: ot,
            ariaValueMin: ot,
            ariaValueNow: ot,
            ariaValueText: null,
            role: null,
          },
        }),
        vt = dt({
          space: "html",
          attributes: {
            acceptcharset: "accept-charset",
            classname: "class",
            htmlfor: "for",
            httpequiv: "http-equiv",
          },
          transform: yt,
          mustUseProperty: ["checked", "multiple", "muted", "selected"],
          properties: {
            abbr: null,
            accept: lt,
            acceptCharset: it,
            accessKey: it,
            action: null,
            allow: null,
            allowFullScreen: nt,
            allowPaymentRequest: nt,
            allowUserMedia: nt,
            alt: null,
            as: null,
            async: nt,
            autoCapitalize: null,
            autoComplete: it,
            autoFocus: nt,
            autoPlay: nt,
            capture: nt,
            charSet: null,
            checked: nt,
            cite: null,
            className: it,
            cols: ot,
            colSpan: null,
            content: null,
            contentEditable: tt,
            controls: nt,
            controlsList: it,
            coords: ot | lt,
            crossOrigin: null,
            data: null,
            dateTime: null,
            decoding: null,
            default: nt,
            defer: nt,
            dir: null,
            dirName: null,
            disabled: nt,
            download: rt,
            draggable: tt,
            encType: null,
            enterKeyHint: null,
            form: null,
            formAction: null,
            formEncType: null,
            formMethod: null,
            formNoValidate: nt,
            formTarget: null,
            headers: it,
            height: ot,
            hidden: nt,
            high: ot,
            href: null,
            hrefLang: null,
            htmlFor: it,
            httpEquiv: it,
            id: null,
            imageSizes: null,
            imageSrcSet: lt,
            inputMode: null,
            integrity: null,
            is: null,
            isMap: nt,
            itemId: null,
            itemProp: it,
            itemRef: it,
            itemScope: nt,
            itemType: it,
            kind: null,
            label: null,
            lang: null,
            language: null,
            list: null,
            loading: null,
            loop: nt,
            low: ot,
            manifest: null,
            max: null,
            maxLength: ot,
            media: null,
            method: null,
            min: null,
            minLength: ot,
            multiple: nt,
            muted: nt,
            name: null,
            nonce: null,
            noModule: nt,
            noValidate: nt,
            onAbort: null,
            onAfterPrint: null,
            onAuxClick: null,
            onBeforePrint: null,
            onBeforeUnload: null,
            onBlur: null,
            onCancel: null,
            onCanPlay: null,
            onCanPlayThrough: null,
            onChange: null,
            onClick: null,
            onClose: null,
            onContextLost: null,
            onContextMenu: null,
            onContextRestored: null,
            onCopy: null,
            onCueChange: null,
            onCut: null,
            onDblClick: null,
            onDrag: null,
            onDragEnd: null,
            onDragEnter: null,
            onDragExit: null,
            onDragLeave: null,
            onDragOver: null,
            onDragStart: null,
            onDrop: null,
            onDurationChange: null,
            onEmptied: null,
            onEnded: null,
            onError: null,
            onFocus: null,
            onFormData: null,
            onHashChange: null,
            onInput: null,
            onInvalid: null,
            onKeyDown: null,
            onKeyPress: null,
            onKeyUp: null,
            onLanguageChange: null,
            onLoad: null,
            onLoadedData: null,
            onLoadedMetadata: null,
            onLoadEnd: null,
            onLoadStart: null,
            onMessage: null,
            onMessageError: null,
            onMouseDown: null,
            onMouseEnter: null,
            onMouseLeave: null,
            onMouseMove: null,
            onMouseOut: null,
            onMouseOver: null,
            onMouseUp: null,
            onOffline: null,
            onOnline: null,
            onPageHide: null,
            onPageShow: null,
            onPaste: null,
            onPause: null,
            onPlay: null,
            onPlaying: null,
            onPopState: null,
            onProgress: null,
            onRateChange: null,
            onRejectionHandled: null,
            onReset: null,
            onResize: null,
            onScroll: null,
            onSecurityPolicyViolation: null,
            onSeeked: null,
            onSeeking: null,
            onSelect: null,
            onSlotChange: null,
            onStalled: null,
            onStorage: null,
            onSubmit: null,
            onSuspend: null,
            onTimeUpdate: null,
            onToggle: null,
            onUnhandledRejection: null,
            onUnload: null,
            onVolumeChange: null,
            onWaiting: null,
            onWheel: null,
            open: nt,
            optimum: ot,
            pattern: null,
            ping: it,
            placeholder: null,
            playsInline: nt,
            poster: null,
            preload: null,
            readOnly: nt,
            referrerPolicy: null,
            rel: it,
            required: nt,
            reversed: nt,
            rows: ot,
            rowSpan: ot,
            sandbox: it,
            scope: null,
            scoped: nt,
            seamless: nt,
            selected: nt,
            shape: null,
            size: ot,
            sizes: null,
            slot: null,
            span: ot,
            spellCheck: tt,
            src: null,
            srcDoc: null,
            srcLang: null,
            srcSet: lt,
            start: ot,
            step: null,
            style: null,
            tabIndex: ot,
            target: null,
            title: null,
            translate: null,
            type: null,
            typeMustMatch: nt,
            useMap: null,
            value: tt,
            width: ot,
            wrap: null,
            align: null,
            aLink: null,
            archive: it,
            axis: null,
            background: null,
            bgColor: null,
            border: ot,
            borderColor: null,
            bottomMargin: ot,
            cellPadding: null,
            cellSpacing: null,
            char: null,
            charOff: null,
            classId: null,
            clear: null,
            code: null,
            codeBase: null,
            codeType: null,
            color: null,
            compact: nt,
            declare: nt,
            event: null,
            face: null,
            frame: null,
            frameBorder: null,
            hSpace: ot,
            leftMargin: ot,
            link: null,
            longDesc: null,
            lowSrc: null,
            marginHeight: ot,
            marginWidth: ot,
            noResize: nt,
            noHref: nt,
            noShade: nt,
            noWrap: nt,
            object: null,
            profile: null,
            prompt: null,
            rev: null,
            rightMargin: ot,
            rules: null,
            scheme: null,
            scrolling: tt,
            standby: null,
            summary: null,
            text: null,
            topMargin: ot,
            valueType: null,
            version: null,
            vAlign: null,
            vLink: null,
            vSpace: ot,
            allowTransparency: null,
            autoCorrect: null,
            autoSave: null,
            disablePictureInPicture: nt,
            disableRemotePlayback: nt,
            prefix: null,
            property: null,
            results: ot,
            security: null,
            unselectable: null,
          },
        }),
        bt = dt({
          space: "svg",
          attributes: {
            accentHeight: "accent-height",
            alignmentBaseline: "alignment-baseline",
            arabicForm: "arabic-form",
            baselineShift: "baseline-shift",
            capHeight: "cap-height",
            className: "class",
            clipPath: "clip-path",
            clipRule: "clip-rule",
            colorInterpolation: "color-interpolation",
            colorInterpolationFilters: "color-interpolation-filters",
            colorProfile: "color-profile",
            colorRendering: "color-rendering",
            crossOrigin: "crossorigin",
            dataType: "datatype",
            dominantBaseline: "dominant-baseline",
            enableBackground: "enable-background",
            fillOpacity: "fill-opacity",
            fillRule: "fill-rule",
            floodColor: "flood-color",
            floodOpacity: "flood-opacity",
            fontFamily: "font-family",
            fontSize: "font-size",
            fontSizeAdjust: "font-size-adjust",
            fontStretch: "font-stretch",
            fontStyle: "font-style",
            fontVariant: "font-variant",
            fontWeight: "font-weight",
            glyphName: "glyph-name",
            glyphOrientationHorizontal: "glyph-orientation-horizontal",
            glyphOrientationVertical: "glyph-orientation-vertical",
            hrefLang: "hreflang",
            horizAdvX: "horiz-adv-x",
            horizOriginX: "horiz-origin-x",
            horizOriginY: "horiz-origin-y",
            imageRendering: "image-rendering",
            letterSpacing: "letter-spacing",
            lightingColor: "lighting-color",
            markerEnd: "marker-end",
            markerMid: "marker-mid",
            markerStart: "marker-start",
            navDown: "nav-down",
            navDownLeft: "nav-down-left",
            navDownRight: "nav-down-right",
            navLeft: "nav-left",
            navNext: "nav-next",
            navPrev: "nav-prev",
            navRight: "nav-right",
            navUp: "nav-up",
            navUpLeft: "nav-up-left",
            navUpRight: "nav-up-right",
            onAbort: "onabort",
            onActivate: "onactivate",
            onAfterPrint: "onafterprint",
            onBeforePrint: "onbeforeprint",
            onBegin: "onbegin",
            onCancel: "oncancel",
            onCanPlay: "oncanplay",
            onCanPlayThrough: "oncanplaythrough",
            onChange: "onchange",
            onClick: "onclick",
            onClose: "onclose",
            onCopy: "oncopy",
            onCueChange: "oncuechange",
            onCut: "oncut",
            onDblClick: "ondblclick",
            onDrag: "ondrag",
            onDragEnd: "ondragend",
            onDragEnter: "ondragenter",
            onDragExit: "ondragexit",
            onDragLeave: "ondragleave",
            onDragOver: "ondragover",
            onDragStart: "ondragstart",
            onDrop: "ondrop",
            onDurationChange: "ondurationchange",
            onEmptied: "onemptied",
            onEnd: "onend",
            onEnded: "onended",
            onError: "onerror",
            onFocus: "onfocus",
            onFocusIn: "onfocusin",
            onFocusOut: "onfocusout",
            onHashChange: "onhashchange",
            onInput: "oninput",
            onInvalid: "oninvalid",
            onKeyDown: "onkeydown",
            onKeyPress: "onkeypress",
            onKeyUp: "onkeyup",
            onLoad: "onload",
            onLoadedData: "onloadeddata",
            onLoadedMetadata: "onloadedmetadata",
            onLoadStart: "onloadstart",
            onMessage: "onmessage",
            onMouseDown: "onmousedown",
            onMouseEnter: "onmouseenter",
            onMouseLeave: "onmouseleave",
            onMouseMove: "onmousemove",
            onMouseOut: "onmouseout",
            onMouseOver: "onmouseover",
            onMouseUp: "onmouseup",
            onMouseWheel: "onmousewheel",
            onOffline: "onoffline",
            onOnline: "ononline",
            onPageHide: "onpagehide",
            onPageShow: "onpageshow",
            onPaste: "onpaste",
            onPause: "onpause",
            onPlay: "onplay",
            onPlaying: "onplaying",
            onPopState: "onpopstate",
            onProgress: "onprogress",
            onRateChange: "onratechange",
            onRepeat: "onrepeat",
            onReset: "onreset",
            onResize: "onresize",
            onScroll: "onscroll",
            onSeeked: "onseeked",
            onSeeking: "onseeking",
            onSelect: "onselect",
            onShow: "onshow",
            onStalled: "onstalled",
            onStorage: "onstorage",
            onSubmit: "onsubmit",
            onSuspend: "onsuspend",
            onTimeUpdate: "ontimeupdate",
            onToggle: "ontoggle",
            onUnload: "onunload",
            onVolumeChange: "onvolumechange",
            onWaiting: "onwaiting",
            onZoom: "onzoom",
            overlinePosition: "overline-position",
            overlineThickness: "overline-thickness",
            paintOrder: "paint-order",
            panose1: "panose-1",
            pointerEvents: "pointer-events",
            referrerPolicy: "referrerpolicy",
            renderingIntent: "rendering-intent",
            shapeRendering: "shape-rendering",
            stopColor: "stop-color",
            stopOpacity: "stop-opacity",
            strikethroughPosition: "strikethrough-position",
            strikethroughThickness: "strikethrough-thickness",
            strokeDashArray: "stroke-dasharray",
            strokeDashOffset: "stroke-dashoffset",
            strokeLineCap: "stroke-linecap",
            strokeLineJoin: "stroke-linejoin",
            strokeMiterLimit: "stroke-miterlimit",
            strokeOpacity: "stroke-opacity",
            strokeWidth: "stroke-width",
            tabIndex: "tabindex",
            textAnchor: "text-anchor",
            textDecoration: "text-decoration",
            textRendering: "text-rendering",
            typeOf: "typeof",
            underlinePosition: "underline-position",
            underlineThickness: "underline-thickness",
            unicodeBidi: "unicode-bidi",
            unicodeRange: "unicode-range",
            unitsPerEm: "units-per-em",
            vAlphabetic: "v-alphabetic",
            vHanging: "v-hanging",
            vIdeographic: "v-ideographic",
            vMathematical: "v-mathematical",
            vectorEffect: "vector-effect",
            vertAdvY: "vert-adv-y",
            vertOriginX: "vert-origin-x",
            vertOriginY: "vert-origin-y",
            wordSpacing: "word-spacing",
            writingMode: "writing-mode",
            xHeight: "x-height",
            playbackOrder: "playbackorder",
            timelineBegin: "timelinebegin",
          },
          transform: gt,
          properties: {
            about: ut,
            accentHeight: ot,
            accumulate: null,
            additive: null,
            alignmentBaseline: null,
            alphabetic: ot,
            amplitude: ot,
            arabicForm: null,
            ascent: ot,
            attributeName: null,
            attributeType: null,
            azimuth: ot,
            bandwidth: null,
            baselineShift: null,
            baseFrequency: null,
            baseProfile: null,
            bbox: null,
            begin: null,
            bias: ot,
            by: null,
            calcMode: null,
            capHeight: ot,
            className: it,
            clip: null,
            clipPath: null,
            clipPathUnits: null,
            clipRule: null,
            color: null,
            colorInterpolation: null,
            colorInterpolationFilters: null,
            colorProfile: null,
            colorRendering: null,
            content: null,
            contentScriptType: null,
            contentStyleType: null,
            crossOrigin: null,
            cursor: null,
            cx: null,
            cy: null,
            d: null,
            dataType: null,
            defaultAction: null,
            descent: ot,
            diffuseConstant: ot,
            direction: null,
            display: null,
            dur: null,
            divisor: ot,
            dominantBaseline: null,
            download: nt,
            dx: null,
            dy: null,
            edgeMode: null,
            editable: null,
            elevation: ot,
            enableBackground: null,
            end: null,
            event: null,
            exponent: ot,
            externalResourcesRequired: null,
            fill: null,
            fillOpacity: ot,
            fillRule: null,
            filter: null,
            filterRes: null,
            filterUnits: null,
            floodColor: null,
            floodOpacity: null,
            focusable: null,
            focusHighlight: null,
            fontFamily: null,
            fontSize: null,
            fontSizeAdjust: null,
            fontStretch: null,
            fontStyle: null,
            fontVariant: null,
            fontWeight: null,
            format: null,
            fr: null,
            from: null,
            fx: null,
            fy: null,
            g1: lt,
            g2: lt,
            glyphName: lt,
            glyphOrientationHorizontal: null,
            glyphOrientationVertical: null,
            glyphRef: null,
            gradientTransform: null,
            gradientUnits: null,
            handler: null,
            hanging: ot,
            hatchContentUnits: null,
            hatchUnits: null,
            height: null,
            href: null,
            hrefLang: null,
            horizAdvX: ot,
            horizOriginX: ot,
            horizOriginY: ot,
            id: null,
            ideographic: ot,
            imageRendering: null,
            initialVisibility: null,
            in: null,
            in2: null,
            intercept: ot,
            k: ot,
            k1: ot,
            k2: ot,
            k3: ot,
            k4: ot,
            kernelMatrix: ut,
            kernelUnitLength: null,
            keyPoints: null,
            keySplines: null,
            keyTimes: null,
            kerning: null,
            lang: null,
            lengthAdjust: null,
            letterSpacing: null,
            lightingColor: null,
            limitingConeAngle: ot,
            local: null,
            markerEnd: null,
            markerMid: null,
            markerStart: null,
            markerHeight: null,
            markerUnits: null,
            markerWidth: null,
            mask: null,
            maskContentUnits: null,
            maskUnits: null,
            mathematical: null,
            max: null,
            media: null,
            mediaCharacterEncoding: null,
            mediaContentEncodings: null,
            mediaSize: ot,
            mediaTime: null,
            method: null,
            min: null,
            mode: null,
            name: null,
            navDown: null,
            navDownLeft: null,
            navDownRight: null,
            navLeft: null,
            navNext: null,
            navPrev: null,
            navRight: null,
            navUp: null,
            navUpLeft: null,
            navUpRight: null,
            numOctaves: null,
            observer: null,
            offset: null,
            onAbort: null,
            onActivate: null,
            onAfterPrint: null,
            onBeforePrint: null,
            onBegin: null,
            onCancel: null,
            onCanPlay: null,
            onCanPlayThrough: null,
            onChange: null,
            onClick: null,
            onClose: null,
            onCopy: null,
            onCueChange: null,
            onCut: null,
            onDblClick: null,
            onDrag: null,
            onDragEnd: null,
            onDragEnter: null,
            onDragExit: null,
            onDragLeave: null,
            onDragOver: null,
            onDragStart: null,
            onDrop: null,
            onDurationChange: null,
            onEmptied: null,
            onEnd: null,
            onEnded: null,
            onError: null,
            onFocus: null,
            onFocusIn: null,
            onFocusOut: null,
            onHashChange: null,
            onInput: null,
            onInvalid: null,
            onKeyDown: null,
            onKeyPress: null,
            onKeyUp: null,
            onLoad: null,
            onLoadedData: null,
            onLoadedMetadata: null,
            onLoadStart: null,
            onMessage: null,
            onMouseDown: null,
            onMouseEnter: null,
            onMouseLeave: null,
            onMouseMove: null,
            onMouseOut: null,
            onMouseOver: null,
            onMouseUp: null,
            onMouseWheel: null,
            onOffline: null,
            onOnline: null,
            onPageHide: null,
            onPageShow: null,
            onPaste: null,
            onPause: null,
            onPlay: null,
            onPlaying: null,
            onPopState: null,
            onProgress: null,
            onRateChange: null,
            onRepeat: null,
            onReset: null,
            onResize: null,
            onScroll: null,
            onSeeked: null,
            onSeeking: null,
            onSelect: null,
            onShow: null,
            onStalled: null,
            onStorage: null,
            onSubmit: null,
            onSuspend: null,
            onTimeUpdate: null,
            onToggle: null,
            onUnload: null,
            onVolumeChange: null,
            onWaiting: null,
            onZoom: null,
            opacity: null,
            operator: null,
            order: null,
            orient: null,
            orientation: null,
            origin: null,
            overflow: null,
            overlay: null,
            overlinePosition: ot,
            overlineThickness: ot,
            paintOrder: null,
            panose1: null,
            path: null,
            pathLength: ot,
            patternContentUnits: null,
            patternTransform: null,
            patternUnits: null,
            phase: null,
            ping: it,
            pitch: null,
            playbackOrder: null,
            pointerEvents: null,
            points: null,
            pointsAtX: ot,
            pointsAtY: ot,
            pointsAtZ: ot,
            preserveAlpha: null,
            preserveAspectRatio: null,
            primitiveUnits: null,
            propagate: null,
            property: ut,
            r: null,
            radius: null,
            referrerPolicy: null,
            refX: null,
            refY: null,
            rel: ut,
            rev: ut,
            renderingIntent: null,
            repeatCount: null,
            repeatDur: null,
            requiredExtensions: ut,
            requiredFeatures: ut,
            requiredFonts: ut,
            requiredFormats: ut,
            resource: null,
            restart: null,
            result: null,
            rotate: null,
            rx: null,
            ry: null,
            scale: null,
            seed: null,
            shapeRendering: null,
            side: null,
            slope: null,
            snapshotTime: null,
            specularConstant: ot,
            specularExponent: ot,
            spreadMethod: null,
            spacing: null,
            startOffset: null,
            stdDeviation: null,
            stemh: null,
            stemv: null,
            stitchTiles: null,
            stopColor: null,
            stopOpacity: null,
            strikethroughPosition: ot,
            strikethroughThickness: ot,
            string: null,
            stroke: null,
            strokeDashArray: ut,
            strokeDashOffset: null,
            strokeLineCap: null,
            strokeLineJoin: null,
            strokeMiterLimit: ot,
            strokeOpacity: ot,
            strokeWidth: null,
            style: null,
            surfaceScale: ot,
            syncBehavior: null,
            syncBehaviorDefault: null,
            syncMaster: null,
            syncTolerance: null,
            syncToleranceDefault: null,
            systemLanguage: ut,
            tabIndex: ot,
            tableValues: null,
            target: null,
            targetX: ot,
            targetY: ot,
            textAnchor: null,
            textDecoration: null,
            textRendering: null,
            textLength: null,
            timelineBegin: null,
            title: null,
            transformBehavior: null,
            type: null,
            typeOf: ut,
            to: null,
            transform: null,
            u1: null,
            u2: null,
            underlinePosition: ot,
            underlineThickness: ot,
            unicode: null,
            unicodeBidi: null,
            unicodeRange: null,
            unitsPerEm: ot,
            values: null,
            vAlphabetic: ot,
            vMathematical: ot,
            vectorEffect: null,
            vHanging: ot,
            vIdeographic: ot,
            version: null,
            vertAdvY: ot,
            vertOriginX: ot,
            vertOriginY: ot,
            viewBox: null,
            viewTarget: null,
            visibility: null,
            width: null,
            widths: null,
            wordSpacing: null,
            writingMode: null,
            x: null,
            x1: null,
            x2: null,
            xChannelSelector: null,
            xHeight: ot,
            y: null,
            y1: null,
            y2: null,
            yChannelSelector: null,
            z: null,
            zoomAndPan: null,
          },
        }),
        wt = Zn([mt, ht, kt, xt, vt], "html"),
        St = Zn([mt, ht, kt, xt, bt], "svg");
      function Et(e) {
        if (e.allowedElements && e.disallowedElements)
          throw new TypeError(
            "Only one of `allowedElements` and `disallowedElements` should be defined"
          );
        if (e.allowedElements || e.disallowedElements || e.allowElement)
          return (n) => {
            En(n, "element", (n, t, r) => {
              const o = r;
              let i;
              if (
                (e.allowedElements
                  ? (i = !e.allowedElements.includes(n.tagName))
                  : e.disallowedElements &&
                    (i = e.disallowedElements.includes(n.tagName)),
                !i &&
                  e.allowElement &&
                  "number" === typeof t &&
                  (i = !e.allowElement(n, t, o)),
                i && "number" === typeof t)
              )
                return (
                  e.unwrapDisallowed && n.children
                    ? o.children.splice(t, 1, ...n.children)
                    : o.children.splice(t, 1),
                  t
                );
            });
          };
      }
      const Ct = ["http", "https", "mailto", "tel"];
      var At = t(9864);
      function Ft(e) {
        var n =
          e && "object" === typeof e && "text" === e.type ? e.value || "" : e;
        return "string" === typeof n && "" === n.replace(/[ \t\n\f\r]/g, "");
      }
      const Tt = /^data[-\w.:]+$/i,
        Pt = /-[a-z]/g,
        Ot = /[A-Z]/g;
      function It(e) {
        return "-" + e.toLowerCase();
      }
      function Dt(e) {
        return e.charAt(1).toUpperCase();
      }
      const Lt = {
        classId: "classID",
        dataType: "datatype",
        itemId: "itemID",
        strokeDashArray: "strokeDasharray",
        strokeDashOffset: "strokeDashoffset",
        strokeLineCap: "strokeLinecap",
        strokeLineJoin: "strokeLinejoin",
        strokeMiterLimit: "strokeMiterlimit",
        typeOf: "typeof",
        xLinkActuate: "xlinkActuate",
        xLinkArcRole: "xlinkArcrole",
        xLinkHref: "xlinkHref",
        xLinkRole: "xlinkRole",
        xLinkShow: "xlinkShow",
        xLinkTitle: "xlinkTitle",
        xLinkType: "xlinkType",
        xmlnsXLink: "xmlnsXlink",
      };
      var zt = t(7848);
      const Mt = {}.hasOwnProperty,
        Rt = new Set(["table", "thead", "tbody", "tfoot", "tr"]);
      function Bt(e, n) {
        const t = [];
        let r,
          o = -1;
        for (; ++o < n.children.length; )
          (r = n.children[o]),
            "element" === r.type
              ? t.push(_t(e, r, o, n))
              : "text" === r.type
              ? ("element" === n.type && Rt.has(n.tagName) && Ft(r)) ||
                t.push(r.value)
              : "raw" !== r.type || e.options.skipHtml || t.push(r.value);
        return t;
      }
      function _t(e, n, t, r) {
        const o = e.options,
          l = e.schema,
          u = n.tagName,
          a = {};
        let s,
          c = l;
        if (
          ("html" === l.space && "svg" === u && ((c = St), (e.schema = c)),
          n.properties)
        )
          for (s in n.properties)
            Mt.call(n.properties, s) && Ht(a, s, n.properties[s], e);
        ("ol" !== u && "ul" !== u) || e.listDepth++;
        const f = Bt(e, n);
        ("ol" !== u && "ul" !== u) || e.listDepth--, (e.schema = l);
        const p = n.position || {
            start: { line: null, column: null, offset: null },
            end: { line: null, column: null, offset: null },
          },
          d = o.components && Mt.call(o.components, u) ? o.components[u] : u,
          h = "string" === typeof d || d === i.Fragment;
        if (!At.isValidElementType(d))
          throw new TypeError(
            `Component for name \`${u}\` not defined or is not renderable`
          );
        if (
          ((a.key = [u, p.start.line, p.start.column, t].join("-")),
          "a" === u &&
            o.linkTarget &&
            (a.target =
              "function" === typeof o.linkTarget
                ? o.linkTarget(
                    String(a.href || ""),
                    n.children,
                    "string" === typeof a.title ? a.title : null
                  )
                : o.linkTarget),
          "a" === u &&
            o.transformLinkUri &&
            (a.href = o.transformLinkUri(
              String(a.href || ""),
              n.children,
              "string" === typeof a.title ? a.title : null
            )),
          h ||
            "code" !== u ||
            "element" !== r.type ||
            "pre" === r.tagName ||
            (a.inline = !0),
          h ||
            ("h1" !== u &&
              "h2" !== u &&
              "h3" !== u &&
              "h4" !== u &&
              "h5" !== u &&
              "h6" !== u) ||
            (a.level = Number.parseInt(u.charAt(1), 10)),
          "img" === u &&
            o.transformImageUri &&
            (a.src = o.transformImageUri(
              String(a.src || ""),
              String(a.alt || ""),
              "string" === typeof a.title ? a.title : null
            )),
          !h && "li" === u && "element" === r.type)
        ) {
          const e = (function (e) {
            let n = -1;
            for (; ++n < e.children.length; ) {
              const t = e.children[n];
              if ("element" === t.type && "input" === t.tagName) return t;
            }
            return null;
          })(n);
          (a.checked =
            e && e.properties ? Boolean(e.properties.checked) : null),
            (a.index = jt(r, n)),
            (a.ordered = "ol" === r.tagName);
        }
        var m;
        return (
          h ||
            ("ol" !== u && "ul" !== u) ||
            ((a.ordered = "ol" === u), (a.depth = e.listDepth)),
          ("td" !== u && "th" !== u) ||
            (a.align &&
              (a.style || (a.style = {}),
              (a.style.textAlign = a.align),
              delete a.align),
            h || (a.isHeader = "th" === u)),
          h ||
            "tr" !== u ||
            "element" !== r.type ||
            (a.isHeader = Boolean("thead" === r.tagName)),
          o.sourcePos &&
            (a["data-sourcepos"] = [
              (m = p).start.line,
              ":",
              m.start.column,
              "-",
              m.end.line,
              ":",
              m.end.column,
            ]
              .map((e) => String(e))
              .join("")),
          !h && o.rawSourcePos && (a.sourcePosition = n.position),
          !h &&
            o.includeElementIndex &&
            ((a.index = jt(r, n)), (a.siblingCount = jt(r))),
          h || (a.node = n),
          f.length > 0 ? i.createElement(d, a, f) : i.createElement(d, a)
        );
      }
      function jt(e, n) {
        let t = -1,
          r = 0;
        for (; ++t < e.children.length && e.children[t] !== n; )
          "element" === e.children[t].type && r++;
        return r;
      }
      function Ht(e, n, t, r) {
        const o = (function (e, n) {
          const t = Jn(n);
          let r = n,
            o = Gn;
          if (t in e.normal) return e.property[e.normal[t]];
          if (t.length > 4 && "data" === t.slice(0, 4) && Tt.test(n)) {
            if ("-" === n.charAt(4)) {
              const e = n.slice(5).replace(Pt, Dt);
              r = "data" + e.charAt(0).toUpperCase() + e.slice(1);
            } else {
              const e = n.slice(4);
              if (!Pt.test(e)) {
                let t = e.replace(Ot, It);
                "-" !== t.charAt(0) && (t = "-" + t), (n = "data" + t);
              }
            }
            o = ct;
          }
          return new o(r, n);
        })(r.schema, n);
        let i = t;
        null !== i &&
          void 0 !== i &&
          i === i &&
          (Array.isArray(i) &&
            (i = o.commaSeparated
              ? (function (e, n) {
                  var t = n || {};
                  return (
                    "" === e[e.length - 1] && (e = e.concat("")),
                    e
                      .join(
                        (t.padRight ? " " : "") +
                          "," +
                          (!1 === t.padLeft ? "" : " ")
                      )
                      .trim()
                  );
                })(i)
              : i.join(" ").trim()),
          "style" === o.property &&
            "string" === typeof i &&
            (i = (function (e) {
              const n = {};
              try {
                zt(e, t);
              } catch {}
              return n;
              function t(e, t) {
                const r = "-ms-" === e.slice(0, 4) ? `ms-${e.slice(4)}` : e;
                n[r.replace(/-([a-z])/g, Ut)] = t;
              }
            })(i)),
          o.space && o.property
            ? (e[Mt.call(Lt, o.property) ? Lt[o.property] : o.property] = i)
            : o.attribute && (e[o.attribute] = i));
      }
      function Ut(e, n) {
        return n.toUpperCase();
      }
      const Nt = {}.hasOwnProperty,
        Vt = {
          renderers: { to: "components", id: "change-renderers-to-components" },
          astPlugins: { id: "remove-buggy-html-in-markdown-parser" },
          allowDangerousHtml: { id: "remove-buggy-html-in-markdown-parser" },
          escapeHtml: { id: "remove-buggy-html-in-markdown-parser" },
          source: { to: "children", id: "change-source-to-children" },
          allowNode: {
            to: "allowElement",
            id: "replace-allownode-allowedtypes-and-disallowedtypes",
          },
          allowedTypes: {
            to: "allowedElements",
            id: "replace-allownode-allowedtypes-and-disallowedtypes",
          },
          disallowedTypes: {
            to: "disallowedElements",
            id: "replace-allownode-allowedtypes-and-disallowedtypes",
          },
          includeNodeIndex: {
            to: "includeElementIndex",
            id: "change-includenodeindex-to-includeelementindex",
          },
        };
      function qt(e) {
        for (const i in Vt)
          if (Nt.call(Vt, i) && Nt.call(e, i)) {
            const e = Vt[i];
            console.warn(
              `[react-markdown] Warning: please ${
                e.to ? `use \`${e.to}\` instead of` : "remove"
              } \`${i}\` (see <https://github.com/remarkjs/react-markdown/blob/main/changelog.md#${
                e.id
              }> for more info)`
            ),
              delete Vt[i];
          }
        const n = F()
            .use(kn)
            .use(e.remarkPlugins || e.plugins || [])
            .use(Yn, { allowDangerousHtml: !0 })
            .use(e.rehypePlugins || [])
            .use(Et, e),
          t = new x();
        "string" === typeof e.children
          ? (t.value = e.children)
          : void 0 !== e.children &&
            null !== e.children &&
            console.warn(
              `[react-markdown] Warning: please pass a string as \`children\` (not: \`${e.children}\`)`
            );
        const r = n.runSync(n.parse(t), t);
        if ("root" !== r.type) throw new TypeError("Expected a `root` node");
        let o = i.createElement(
          i.Fragment,
          {},
          Bt({ options: e, schema: wt, listDepth: 0 }, r)
        );
        return (
          e.className &&
            (o = i.createElement("div", { className: e.className }, o)),
          o
        );
      }
      (qt.defaultProps = {
        transformLinkUri: function (e) {
          const n = (e || "").trim(),
            t = n.charAt(0);
          if ("#" === t || "/" === t) return n;
          const r = n.indexOf(":");
          if (-1 === r) return n;
          let o = -1;
          for (; ++o < Ct.length; ) {
            const e = Ct[o];
            if (r === e.length && n.slice(0, e.length).toLowerCase() === e)
              return n;
          }
          return (
            (o = n.indexOf("?")),
            -1 !== o && r > o
              ? n
              : ((o = n.indexOf("#")),
                -1 !== o && r > o ? n : "javascript:void(0)")
          );
        },
      }),
        (qt.propTypes = {
          children: Kn.string,
          className: Kn.string,
          allowElement: Kn.func,
          allowedElements: Kn.arrayOf(Kn.string),
          disallowedElements: Kn.arrayOf(Kn.string),
          unwrapDisallowed: Kn.bool,
          remarkPlugins: Kn.arrayOf(
            Kn.oneOfType([
              Kn.object,
              Kn.func,
              Kn.arrayOf(Kn.oneOfType([Kn.object, Kn.func])),
            ])
          ),
          rehypePlugins: Kn.arrayOf(
            Kn.oneOfType([
              Kn.object,
              Kn.func,
              Kn.arrayOf(Kn.oneOfType([Kn.object, Kn.func])),
            ])
          ),
          sourcePos: Kn.bool,
          rawSourcePos: Kn.bool,
          skipHtml: Kn.bool,
          includeElementIndex: Kn.bool,
          transformLinkUri: Kn.oneOfType([Kn.func, Kn.bool]),
          linkTarget: Kn.oneOfType([Kn.func, Kn.string]),
          transformImageUri: Kn.func,
          components: Kn.object,
        });
      var $t = qt;
    },
  },
]);
