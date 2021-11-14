"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [579],
  {
    4579: function (e, t, n) {
      n.r(t),
        n.d(t, {
          amplify_chatbot: function () {
            return Ot;
          },
        });
      var o = n(2508),
        i = n(3769),
        r = n(9222),
        a = n(1953),
        s = n(8063),
        c = n(4636),
        u = n(5387),
        l = function () {
          return (l =
            Object.assign ||
            function (e) {
              for (var t, n = 1, o = arguments.length; n < o; n++)
                for (var i in (t = arguments[n]))
                  Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
              return e;
            }).apply(this, arguments);
        },
        d = new i.k("AbstractInteractionsProvider"),
        f = (function () {
          function e(e) {
            void 0 === e && (e = {}), (this._config = e);
          }
          return (
            (e.prototype.configure = function (e) {
              return (
                void 0 === e && (e = {}),
                (this._config = l(l({}, this._config), e)),
                d.debug("configure " + this.getProviderName(), this._config),
                this.options
              );
            }),
            (e.prototype.getCategory = function () {
              return "Interactions";
            }),
            Object.defineProperty(e.prototype, "options", {
              get: function () {
                return l({}, this._config);
              },
              enumerable: !0,
              configurable: !0,
            }),
            e
          );
        })(),
        p = function (e, t) {
          return (p =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array &&
              function (e, t) {
                e.__proto__ = t;
              }) ||
            function (e, t) {
              for (var n in t)
                Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
            })(e, t);
        };
      function m(e, t) {
        if ("function" !== typeof t && null !== t)
          throw new TypeError(
            "Class extends value " + String(t) + " is not a constructor or null"
          );
        function n() {
          this.constructor = e;
        }
        p(e, t),
          (e.prototype =
            null === t
              ? Object.create(t)
              : ((n.prototype = t.prototype), new n()));
      }
      var v = function () {
        return (v =
          Object.assign ||
          function (e) {
            for (var t, n = 1, o = arguments.length; n < o; n++)
              for (var i in (t = arguments[n]))
                Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
            return e;
          }).apply(this, arguments);
      };
      function h(e, t, n, o) {
        return new (n || (n = Promise))(function (i, r) {
          function a(e) {
            try {
              c(o.next(e));
            } catch (t) {
              r(t);
            }
          }
          function s(e) {
            try {
              c(o.throw(e));
            } catch (t) {
              r(t);
            }
          }
          function c(e) {
            var t;
            e.done
              ? i(e.value)
              : ((t = e.value),
                t instanceof n
                  ? t
                  : new n(function (e) {
                      e(t);
                    })).then(a, s);
          }
          c((o = o.apply(e, t || [])).next());
        });
      }
      function g(e, t) {
        var n,
          o,
          i,
          r,
          a = {
            label: 0,
            sent: function () {
              if (1 & i[0]) throw i[1];
              return i[1];
            },
            trys: [],
            ops: [],
          };
        return (
          (r = { next: s(0), throw: s(1), return: s(2) }),
          "function" === typeof Symbol &&
            (r[Symbol.iterator] = function () {
              return this;
            }),
          r
        );
        function s(r) {
          return function (s) {
            return (function (r) {
              if (n) throw new TypeError("Generator is already executing.");
              for (; a; )
                try {
                  if (
                    ((n = 1),
                    o &&
                      (i =
                        2 & r[0]
                          ? o.return
                          : r[0]
                          ? o.throw || ((i = o.return) && i.call(o), 0)
                          : o.next) &&
                      !(i = i.call(o, r[1])).done)
                  )
                    return i;
                  switch (((o = 0), i && (r = [2 & r[0], i.value]), r[0])) {
                    case 0:
                    case 1:
                      i = r;
                      break;
                    case 4:
                      return a.label++, { value: r[1], done: !1 };
                    case 5:
                      a.label++, (o = r[1]), (r = [0]);
                      continue;
                    case 7:
                      (r = a.ops.pop()), a.trys.pop();
                      continue;
                    default:
                      if (
                        !(i = (i = a.trys).length > 0 && i[i.length - 1]) &&
                        (6 === r[0] || 2 === r[0])
                      ) {
                        a = 0;
                        continue;
                      }
                      if (3 === r[0] && (!i || (r[1] > i[0] && r[1] < i[3]))) {
                        a.label = r[1];
                        break;
                      }
                      if (6 === r[0] && a.label < i[1]) {
                        (a.label = i[1]), (i = r);
                        break;
                      }
                      if (i && a.label < i[2]) {
                        (a.label = i[2]), a.ops.push(r);
                        break;
                      }
                      i[2] && a.ops.pop(), a.trys.pop();
                      continue;
                  }
                  r = t.call(e, a);
                } catch (s) {
                  (r = [6, s]), (o = 0);
                } finally {
                  n = i = 0;
                }
              if (5 & r[0]) throw r[1];
              return { value: r[0] ? r[1] : void 0, done: !0 };
            })([r, s]);
          };
        }
      }
      Object.create;
      function b(e, t) {
        var n = "function" === typeof Symbol && e[Symbol.iterator];
        if (!n) return e;
        var o,
          i,
          r = n.call(e),
          a = [];
        try {
          for (; (void 0 === t || t-- > 0) && !(o = r.next()).done; )
            a.push(o.value);
        } catch (s) {
          i = { error: s };
        } finally {
          try {
            o && !o.done && (n = r.return) && n.call(r);
          } finally {
            if (i) throw i.error;
          }
        }
        return a;
      }
      Object.create;
      var y,
        x,
        w,
        S,
        T,
        E,
        C,
        L,
        I,
        A,
        k,
        _,
        N,
        z,
        P,
        R,
        O,
        F,
        B,
        M,
        U,
        j,
        $,
        D,
        q,
        V,
        H,
        G,
        W,
        J,
        Q,
        X,
        Y,
        K,
        Z,
        ee,
        te,
        ne = n(7643),
        oe = n(7691),
        ie = n(5749),
        re = n(7845),
        ae = n(7157),
        se = n(2795),
        ce = n(5731),
        ue = n(519),
        le = "runtime.lex.{region}.amazonaws.com",
        de = new Set([
          "af-south-1",
          "ap-east-1",
          "ap-northeast-1",
          "ap-northeast-2",
          "ap-south-1",
          "ap-southeast-1",
          "ap-southeast-2",
          "ca-central-1",
          "eu-central-1",
          "eu-north-1",
          "eu-south-1",
          "eu-west-1",
          "eu-west-2",
          "eu-west-3",
          "me-south-1",
          "sa-east-1",
          "us-east-1",
          "us-east-2",
          "us-west-1",
          "us-west-2",
        ]),
        fe = new Set(["cn-north-1", "cn-northwest-1"]),
        pe = new Set(["us-iso-east-1"]),
        me = new Set(["us-isob-east-1"]),
        ve = new Set(["us-gov-east-1", "us-gov-west-1"]),
        he = {
          apiVersion: "2016-11-28",
          disableHostPrefix: !1,
          logger: {},
          regionInfoProvider: function (e, t) {
            var n = void 0;
            switch (e) {
              case "ap-northeast-1":
                n = {
                  hostname: "runtime.lex.ap-northeast-1.amazonaws.com",
                  partition: "aws",
                  signingService: "lex",
                };
                break;
              case "ap-southeast-1":
                n = {
                  hostname: "runtime.lex.ap-southeast-1.amazonaws.com",
                  partition: "aws",
                  signingService: "lex",
                };
                break;
              case "ap-southeast-2":
                n = {
                  hostname: "runtime.lex.ap-southeast-2.amazonaws.com",
                  partition: "aws",
                  signingService: "lex",
                };
                break;
              case "eu-central-1":
                n = {
                  hostname: "runtime.lex.eu-central-1.amazonaws.com",
                  partition: "aws",
                  signingService: "lex",
                };
                break;
              case "eu-west-1":
                n = {
                  hostname: "runtime.lex.eu-west-1.amazonaws.com",
                  partition: "aws",
                  signingService: "lex",
                };
                break;
              case "eu-west-2":
                n = {
                  hostname: "runtime.lex.eu-west-2.amazonaws.com",
                  partition: "aws",
                  signingService: "lex",
                };
                break;
              case "us-east-1":
                n = {
                  hostname: "runtime.lex.us-east-1.amazonaws.com",
                  partition: "aws",
                  signingService: "lex",
                };
                break;
              case "us-west-2":
                n = {
                  hostname: "runtime.lex.us-west-2.amazonaws.com",
                  partition: "aws",
                  signingService: "lex",
                };
                break;
              default:
                de.has(e) &&
                  (n = {
                    hostname: le.replace("{region}", e),
                    partition: "aws",
                    signingService: "lex",
                  }),
                  fe.has(e) &&
                    (n = {
                      hostname: "runtime.lex.{region}.amazonaws.com.cn".replace(
                        "{region}",
                        e
                      ),
                      partition: "aws-cn",
                    }),
                  pe.has(e) &&
                    (n = {
                      hostname: "runtime.lex.{region}.c2s.ic.gov".replace(
                        "{region}",
                        e
                      ),
                      partition: "aws-iso",
                    }),
                  me.has(e) &&
                    (n = {
                      hostname: "runtime.lex.{region}.sc2s.sgov.gov".replace(
                        "{region}",
                        e
                      ),
                      partition: "aws-iso-b",
                    }),
                  ve.has(e) &&
                    (n = {
                      hostname: "runtime.lex.{region}.amazonaws.com".replace(
                        "{region}",
                        e
                      ),
                      partition: "aws-us-gov",
                    }),
                  void 0 === n &&
                    (n = {
                      hostname: le.replace("{region}", e),
                      partition: "aws",
                      signingService: "lex",
                    });
            }
            return Promise.resolve(v({ signingService: "lex" }, n));
          },
          serviceId: "Lex Runtime Service",
          urlParser: n(1823).e,
        },
        ge = v(v({}, he), {
          runtime: "browser",
          base64Decoder: ae.G,
          base64Encoder: ae.s,
          bodyLengthChecker: se.W,
          credentialDefaultProvider: function (e) {
            return function () {
              return Promise.reject(new Error("Credential is missing"));
            };
          },
          defaultUserAgentProvider: (0, ce.f)({
            serviceId: he.serviceId,
            clientVersion: "3.6.1",
          }),
          maxAttempts: re.J,
          region: (0, ie.n)("Region is missing"),
          requestHandler: new oe.B(),
          sha256: ne.Sha256,
          streamCollector: oe.C,
          utf8Decoder: ue.fromUtf8,
          utf8Encoder: ue.toUtf8,
        }),
        be = n(428),
        ye = n(672),
        xe = n(3273),
        we = n(287),
        Se = n(1868),
        Te = n(6380),
        Ee = n(7198),
        Ce = (function (e) {
          function t(t) {
            var n = this,
              o = v(v({}, ge), t),
              i = (0, be.Xb)(o),
              r = (0, be.g4)(i),
              a = (0, Se.A$)(r),
              s = (0, re.BC)(a),
              c = (0, xe.S8)(s),
              u = (0, Te.er)(c);
            return (
              ((n = e.call(this, u) || this).config = u),
              n.middlewareStack.use((0, Se.yt)(n.config)),
              n.middlewareStack.use((0, re.NQ)(n.config)),
              n.middlewareStack.use((0, ye.VG)(n.config)),
              n.middlewareStack.use((0, xe.G2)(n.config)),
              n.middlewareStack.use((0, we.cV)(n.config)),
              n.middlewareStack.use((0, Te.XJ)(n.config)),
              n
            );
          }
          return (
            m(t, e),
            (t.prototype.destroy = function () {
              e.prototype.destroy.call(this);
            }),
            t
          );
        })(Ee.KU);
      !(function (e) {
        e.filterSensitiveLog = function (e) {
          return v({}, e);
        };
      })(y || (y = {})),
        (function (e) {
          e.filterSensitiveLog = function (e) {
            return v(v({}, e), e.parameters && { parameters: Ee.oc });
          };
        })(x || (x = {})),
        (function (e) {
          e.filterSensitiveLog = function (e) {
            return v({}, e);
          };
        })(w || (w = {})),
        (function (e) {
          e.filterSensitiveLog = function (e) {
            return v({}, e);
          };
        })(S || (S = {})),
        (function (e) {
          e.filterSensitiveLog = function (e) {
            return v({}, e);
          };
        })(T || (T = {})),
        (function (e) {
          e.filterSensitiveLog = function (e) {
            return v({}, e);
          };
        })(E || (E = {})),
        (function (e) {
          e.filterSensitiveLog = function (e) {
            return v({}, e);
          };
        })(C || (C = {})),
        (function (e) {
          e.filterSensitiveLog = function (e) {
            return v({}, e);
          };
        })(L || (L = {})),
        (function (e) {
          e.filterSensitiveLog = function (e) {
            return v({}, e);
          };
        })(I || (I = {})),
        (function (e) {
          e.filterSensitiveLog = function (e) {
            return v({}, e);
          };
        })(A || (A = {})),
        (function (e) {
          (e.FAILED = "Failed"),
            (e.FULFILLED = "Fulfilled"),
            (e.READY_FOR_FULFILLMENT = "ReadyForFulfillment");
        })(k || (k = {})),
        (function (e) {
          (e.COMPOSITE = "Composite"),
            (e.CUSTOM_PAYLOAD = "CustomPayload"),
            (e.PLAIN_TEXT = "PlainText"),
            (e.SSML = "SSML");
        })(_ || (_ = {})),
        (function (e) {
          (e.CLOSE = "Close"),
            (e.CONFIRM_INTENT = "ConfirmIntent"),
            (e.DELEGATE = "Delegate"),
            (e.ELICIT_INTENT = "ElicitIntent"),
            (e.ELICIT_SLOT = "ElicitSlot");
        })(N || (N = {})),
        (function (e) {
          e.filterSensitiveLog = function (e) {
            return v(
              v(v({}, e), e.slots && { slots: Ee.oc }),
              e.message && { message: Ee.oc }
            );
          };
        })(z || (z = {})),
        (function (e) {
          (e.CONFIRMED = "Confirmed"), (e.DENIED = "Denied"), (e.NONE = "None");
        })(P || (P = {})),
        (function (e) {
          e.filterSensitiveLog = function (e) {
            return v(v({}, e), e.slots && { slots: Ee.oc });
          };
        })(R || (R = {})),
        (function (e) {
          e.filterSensitiveLog = function (e) {
            return v(
              v(
                v(
                  v(
                    v({}, e),
                    e.recentIntentSummaryView && {
                      recentIntentSummaryView: e.recentIntentSummaryView.map(
                        function (e) {
                          return R.filterSensitiveLog(e);
                        }
                      ),
                    }
                  ),
                  e.sessionAttributes && { sessionAttributes: Ee.oc }
                ),
                e.dialogAction && {
                  dialogAction: z.filterSensitiveLog(e.dialogAction),
                }
              ),
              e.activeContexts && { activeContexts: Ee.oc }
            );
          };
        })(O || (O = {})),
        (function (e) {
          e.filterSensitiveLog = function (e) {
            return v({}, e);
          };
        })(F || (F = {})),
        (function (e) {
          e.filterSensitiveLog = function (e) {
            return v({}, e);
          };
        })(B || (B = {})),
        (function (e) {
          e.filterSensitiveLog = function (e) {
            return v({}, e);
          };
        })(M || (M = {})),
        (function (e) {
          e.filterSensitiveLog = function (e) {
            return v({}, e);
          };
        })(U || (U = {})),
        (function (e) {
          e.filterSensitiveLog = function (e) {
            return v(
              v(
                v(
                  v({}, e),
                  e.sessionAttributes && { sessionAttributes: Ee.oc }
                ),
                e.requestAttributes && { requestAttributes: Ee.oc }
              ),
              e.activeContexts && { activeContexts: Ee.oc }
            );
          };
        })(j || (j = {})),
        (function (e) {
          (e.CONFIRM_INTENT = "ConfirmIntent"),
            (e.ELICIT_INTENT = "ElicitIntent"),
            (e.ELICIT_SLOT = "ElicitSlot"),
            (e.FAILED = "Failed"),
            (e.FULFILLED = "Fulfilled"),
            (e.READY_FOR_FULFILLMENT = "ReadyForFulfillment");
        })($ || ($ = {})),
        (function (e) {
          e.filterSensitiveLog = function (e) {
            return v(
              v(v({}, e), e.message && { message: Ee.oc }),
              e.activeContexts && { activeContexts: Ee.oc }
            );
          };
        })(D || (D = {})),
        (function (e) {
          e.filterSensitiveLog = function (e) {
            return v({}, e);
          };
        })(q || (q = {})),
        (function (e) {
          e.filterSensitiveLog = function (e) {
            return v({}, e);
          };
        })(V || (V = {})),
        (function (e) {
          e.filterSensitiveLog = function (e) {
            return v(
              v(
                v(
                  v(
                    v({}, e),
                    e.sessionAttributes && { sessionAttributes: Ee.oc }
                  ),
                  e.requestAttributes && { requestAttributes: Ee.oc }
                ),
                e.inputText && { inputText: Ee.oc }
              ),
              e.activeContexts && { activeContexts: Ee.oc }
            );
          };
        })(H || (H = {})),
        (function (e) {
          e.filterSensitiveLog = function (e) {
            return v({}, e);
          };
        })(G || (G = {})),
        (function (e) {
          e.filterSensitiveLog = function (e) {
            return v(v({}, e), e.slots && { slots: Ee.oc });
          };
        })(W || (W = {})),
        (function (e) {
          e.GENERIC = "application/vnd.amazonaws.card.generic";
        })(J || (J = {})),
        (function (e) {
          e.filterSensitiveLog = function (e) {
            return v({}, e);
          };
        })(Q || (Q = {})),
        (function (e) {
          e.filterSensitiveLog = function (e) {
            return v({}, e);
          };
        })(X || (X = {})),
        (function (e) {
          e.filterSensitiveLog = function (e) {
            return v({}, e);
          };
        })(Y || (Y = {})),
        (function (e) {
          e.filterSensitiveLog = function (e) {
            return v({}, e);
          };
        })(K || (K = {})),
        (function (e) {
          e.filterSensitiveLog = function (e) {
            return v(
              v(
                v(
                  v(
                    v(
                      v({}, e),
                      e.alternativeIntents && {
                        alternativeIntents: e.alternativeIntents.map(function (
                          e
                        ) {
                          return W.filterSensitiveLog(e);
                        }),
                      }
                    ),
                    e.slots && { slots: Ee.oc }
                  ),
                  e.sessionAttributes && { sessionAttributes: Ee.oc }
                ),
                e.message && { message: Ee.oc }
              ),
              e.activeContexts && { activeContexts: Ee.oc }
            );
          };
        })(Z || (Z = {})),
        (function (e) {
          e.filterSensitiveLog = function (e) {
            return v(
              v(
                v(
                  v(
                    v({}, e),
                    e.sessionAttributes && { sessionAttributes: Ee.oc }
                  ),
                  e.dialogAction && {
                    dialogAction: z.filterSensitiveLog(e.dialogAction),
                  }
                ),
                e.recentIntentSummaryView && {
                  recentIntentSummaryView: e.recentIntentSummaryView.map(
                    function (e) {
                      return R.filterSensitiveLog(e);
                    }
                  ),
                }
              ),
              e.activeContexts && { activeContexts: Ee.oc }
            );
          };
        })(ee || (ee = {})),
        (function (e) {
          e.filterSensitiveLog = function (e) {
            return v(
              v(v({}, e), e.message && { message: Ee.oc }),
              e.activeContexts && { activeContexts: Ee.oc }
            );
          };
        })(te || (te = {}));
      var Le = n(6877),
        Ie = n(8764).Buffer,
        Ae = function (e, t) {
          return h(void 0, void 0, void 0, function () {
            var n, o, i, r, a, s, c, u, l, d, f, p, m, h, b, y, x, w;
            return g(this, function (g) {
              switch (g.label) {
                case 0:
                  return (o = [v({}, e)]), (w = {}), [4, rt(e.body, t)];
                case 1:
                  switch (
                    ((n = v.apply(
                      void 0,
                      o.concat([((w.body = g.sent()), w)])
                    )),
                    (r = "UnknownError"),
                    (r = at(e, n.body)),
                    r)
                  ) {
                    case "BadGatewayException":
                    case "com.amazonaws.lexruntimeservice#BadGatewayException":
                      return [3, 2];
                    case "BadRequestException":
                    case "com.amazonaws.lexruntimeservice#BadRequestException":
                      return [3, 4];
                    case "ConflictException":
                    case "com.amazonaws.lexruntimeservice#ConflictException":
                      return [3, 6];
                    case "DependencyFailedException":
                    case "com.amazonaws.lexruntimeservice#DependencyFailedException":
                      return [3, 8];
                    case "InternalFailureException":
                    case "com.amazonaws.lexruntimeservice#InternalFailureException":
                      return [3, 10];
                    case "LimitExceededException":
                    case "com.amazonaws.lexruntimeservice#LimitExceededException":
                      return [3, 12];
                    case "LoopDetectedException":
                    case "com.amazonaws.lexruntimeservice#LoopDetectedException":
                      return [3, 14];
                    case "NotAcceptableException":
                    case "com.amazonaws.lexruntimeservice#NotAcceptableException":
                      return [3, 16];
                    case "NotFoundException":
                    case "com.amazonaws.lexruntimeservice#NotFoundException":
                      return [3, 18];
                    case "RequestTimeoutException":
                    case "com.amazonaws.lexruntimeservice#RequestTimeoutException":
                      return [3, 20];
                    case "UnsupportedMediaTypeException":
                    case "com.amazonaws.lexruntimeservice#UnsupportedMediaTypeException":
                      return [3, 22];
                  }
                  return [3, 24];
                case 2:
                  return (a = [{}]), [4, _e(n, t)];
                case 3:
                  return (
                    (i = v.apply(void 0, [
                      v.apply(void 0, a.concat([g.sent()])),
                      { name: r, $metadata: nt(e) },
                    ])),
                    [3, 25]
                  );
                case 4:
                  return (s = [{}]), [4, Ne(n, t)];
                case 5:
                  return (
                    (i = v.apply(void 0, [
                      v.apply(void 0, s.concat([g.sent()])),
                      { name: r, $metadata: nt(e) },
                    ])),
                    [3, 25]
                  );
                case 6:
                  return (c = [{}]), [4, ze(n, t)];
                case 7:
                  return (
                    (i = v.apply(void 0, [
                      v.apply(void 0, c.concat([g.sent()])),
                      { name: r, $metadata: nt(e) },
                    ])),
                    [3, 25]
                  );
                case 8:
                  return (u = [{}]), [4, Pe(n, t)];
                case 9:
                  return (
                    (i = v.apply(void 0, [
                      v.apply(void 0, u.concat([g.sent()])),
                      { name: r, $metadata: nt(e) },
                    ])),
                    [3, 25]
                  );
                case 10:
                  return (l = [{}]), [4, Re(n, t)];
                case 11:
                  return (
                    (i = v.apply(void 0, [
                      v.apply(void 0, l.concat([g.sent()])),
                      { name: r, $metadata: nt(e) },
                    ])),
                    [3, 25]
                  );
                case 12:
                  return (d = [{}]), [4, Oe(n, t)];
                case 13:
                  return (
                    (i = v.apply(void 0, [
                      v.apply(void 0, d.concat([g.sent()])),
                      { name: r, $metadata: nt(e) },
                    ])),
                    [3, 25]
                  );
                case 14:
                  return (f = [{}]), [4, Fe(n, t)];
                case 15:
                  return (
                    (i = v.apply(void 0, [
                      v.apply(void 0, f.concat([g.sent()])),
                      { name: r, $metadata: nt(e) },
                    ])),
                    [3, 25]
                  );
                case 16:
                  return (p = [{}]), [4, Be(n, t)];
                case 17:
                  return (
                    (i = v.apply(void 0, [
                      v.apply(void 0, p.concat([g.sent()])),
                      { name: r, $metadata: nt(e) },
                    ])),
                    [3, 25]
                  );
                case 18:
                  return (m = [{}]), [4, Me(n, t)];
                case 19:
                  return (
                    (i = v.apply(void 0, [
                      v.apply(void 0, m.concat([g.sent()])),
                      { name: r, $metadata: nt(e) },
                    ])),
                    [3, 25]
                  );
                case 20:
                  return (h = [{}]), [4, Ue(n, t)];
                case 21:
                  return (
                    (i = v.apply(void 0, [
                      v.apply(void 0, h.concat([g.sent()])),
                      { name: r, $metadata: nt(e) },
                    ])),
                    [3, 25]
                  );
                case 22:
                  return (b = [{}]), [4, je(n, t)];
                case 23:
                  return (
                    (i = v.apply(void 0, [
                      v.apply(void 0, b.concat([g.sent()])),
                      { name: r, $metadata: nt(e) },
                    ])),
                    [3, 25]
                  );
                case 24:
                  (y = n.body),
                    (r = y.code || y.Code || r),
                    (i = v(v({}, y), {
                      name: "" + r,
                      message: y.message || y.Message || r,
                      $fault: "client",
                      $metadata: nt(e),
                    })),
                    (g.label = 25);
                case 25:
                  return (
                    (x = i.message || i.Message || r),
                    (i.message = x),
                    delete i.Message,
                    [2, Promise.reject(Object.assign(new Error(x), i))]
                  );
              }
            });
          });
        },
        ke = function (e, t) {
          return h(void 0, void 0, void 0, function () {
            var n, o, i, r, a, s, c, u, l, d, f, p, m, h, b;
            return g(this, function (g) {
              switch (g.label) {
                case 0:
                  return (o = [v({}, e)]), (b = {}), [4, rt(e.body, t)];
                case 1:
                  switch (
                    ((n = v.apply(
                      void 0,
                      o.concat([((b.body = g.sent()), b)])
                    )),
                    (r = "UnknownError"),
                    (r = at(e, n.body)),
                    r)
                  ) {
                    case "BadGatewayException":
                    case "com.amazonaws.lexruntimeservice#BadGatewayException":
                      return [3, 2];
                    case "BadRequestException":
                    case "com.amazonaws.lexruntimeservice#BadRequestException":
                      return [3, 4];
                    case "ConflictException":
                    case "com.amazonaws.lexruntimeservice#ConflictException":
                      return [3, 6];
                    case "DependencyFailedException":
                    case "com.amazonaws.lexruntimeservice#DependencyFailedException":
                      return [3, 8];
                    case "InternalFailureException":
                    case "com.amazonaws.lexruntimeservice#InternalFailureException":
                      return [3, 10];
                    case "LimitExceededException":
                    case "com.amazonaws.lexruntimeservice#LimitExceededException":
                      return [3, 12];
                    case "LoopDetectedException":
                    case "com.amazonaws.lexruntimeservice#LoopDetectedException":
                      return [3, 14];
                    case "NotFoundException":
                    case "com.amazonaws.lexruntimeservice#NotFoundException":
                      return [3, 16];
                  }
                  return [3, 18];
                case 2:
                  return (a = [{}]), [4, _e(n, t)];
                case 3:
                  return (
                    (i = v.apply(void 0, [
                      v.apply(void 0, a.concat([g.sent()])),
                      { name: r, $metadata: nt(e) },
                    ])),
                    [3, 19]
                  );
                case 4:
                  return (s = [{}]), [4, Ne(n, t)];
                case 5:
                  return (
                    (i = v.apply(void 0, [
                      v.apply(void 0, s.concat([g.sent()])),
                      { name: r, $metadata: nt(e) },
                    ])),
                    [3, 19]
                  );
                case 6:
                  return (c = [{}]), [4, ze(n, t)];
                case 7:
                  return (
                    (i = v.apply(void 0, [
                      v.apply(void 0, c.concat([g.sent()])),
                      { name: r, $metadata: nt(e) },
                    ])),
                    [3, 19]
                  );
                case 8:
                  return (u = [{}]), [4, Pe(n, t)];
                case 9:
                  return (
                    (i = v.apply(void 0, [
                      v.apply(void 0, u.concat([g.sent()])),
                      { name: r, $metadata: nt(e) },
                    ])),
                    [3, 19]
                  );
                case 10:
                  return (l = [{}]), [4, Re(n, t)];
                case 11:
                  return (
                    (i = v.apply(void 0, [
                      v.apply(void 0, l.concat([g.sent()])),
                      { name: r, $metadata: nt(e) },
                    ])),
                    [3, 19]
                  );
                case 12:
                  return (d = [{}]), [4, Oe(n, t)];
                case 13:
                  return (
                    (i = v.apply(void 0, [
                      v.apply(void 0, d.concat([g.sent()])),
                      { name: r, $metadata: nt(e) },
                    ])),
                    [3, 19]
                  );
                case 14:
                  return (f = [{}]), [4, Fe(n, t)];
                case 15:
                  return (
                    (i = v.apply(void 0, [
                      v.apply(void 0, f.concat([g.sent()])),
                      { name: r, $metadata: nt(e) },
                    ])),
                    [3, 19]
                  );
                case 16:
                  return (p = [{}]), [4, Me(n, t)];
                case 17:
                  return (
                    (i = v.apply(void 0, [
                      v.apply(void 0, p.concat([g.sent()])),
                      { name: r, $metadata: nt(e) },
                    ])),
                    [3, 19]
                  );
                case 18:
                  (m = n.body),
                    (r = m.code || m.Code || r),
                    (i = v(v({}, m), {
                      name: "" + r,
                      message: m.message || m.Message || r,
                      $fault: "client",
                      $metadata: nt(e),
                    })),
                    (g.label = 19);
                case 19:
                  return (
                    (h = i.message || i.Message || r),
                    (i.message = h),
                    delete i.Message,
                    [2, Promise.reject(Object.assign(new Error(h), i))]
                  );
              }
            });
          });
        },
        _e = function (e, t) {
          return h(void 0, void 0, void 0, function () {
            var t, n;
            return g(this, function (o) {
              return (
                (t = {
                  name: "BadGatewayException",
                  $fault: "server",
                  $metadata: nt(e),
                  Message: void 0,
                }),
                void 0 !== (n = e.body).Message &&
                  null !== n.Message &&
                  (t.Message = n.Message),
                [2, t]
              );
            });
          });
        },
        Ne = function (e, t) {
          return h(void 0, void 0, void 0, function () {
            var t, n;
            return g(this, function (o) {
              return (
                (t = {
                  name: "BadRequestException",
                  $fault: "client",
                  $metadata: nt(e),
                  message: void 0,
                }),
                void 0 !== (n = e.body).message &&
                  null !== n.message &&
                  (t.message = n.message),
                [2, t]
              );
            });
          });
        },
        ze = function (e, t) {
          return h(void 0, void 0, void 0, function () {
            var t, n;
            return g(this, function (o) {
              return (
                (t = {
                  name: "ConflictException",
                  $fault: "client",
                  $metadata: nt(e),
                  message: void 0,
                }),
                void 0 !== (n = e.body).message &&
                  null !== n.message &&
                  (t.message = n.message),
                [2, t]
              );
            });
          });
        },
        Pe = function (e, t) {
          return h(void 0, void 0, void 0, function () {
            var t, n;
            return g(this, function (o) {
              return (
                (t = {
                  name: "DependencyFailedException",
                  $fault: "client",
                  $metadata: nt(e),
                  Message: void 0,
                }),
                void 0 !== (n = e.body).Message &&
                  null !== n.Message &&
                  (t.Message = n.Message),
                [2, t]
              );
            });
          });
        },
        Re = function (e, t) {
          return h(void 0, void 0, void 0, function () {
            var t, n;
            return g(this, function (o) {
              return (
                (t = {
                  name: "InternalFailureException",
                  $fault: "server",
                  $metadata: nt(e),
                  message: void 0,
                }),
                void 0 !== (n = e.body).message &&
                  null !== n.message &&
                  (t.message = n.message),
                [2, t]
              );
            });
          });
        },
        Oe = function (e, t) {
          return h(void 0, void 0, void 0, function () {
            var t, n;
            return g(this, function (o) {
              return (
                (t = {
                  name: "LimitExceededException",
                  $fault: "client",
                  $metadata: nt(e),
                  message: void 0,
                  retryAfterSeconds: void 0,
                }),
                void 0 !== e.headers["retry-after"] &&
                  (t.retryAfterSeconds = e.headers["retry-after"]),
                void 0 !== (n = e.body).message &&
                  null !== n.message &&
                  (t.message = n.message),
                [2, t]
              );
            });
          });
        },
        Fe = function (e, t) {
          return h(void 0, void 0, void 0, function () {
            var t, n;
            return g(this, function (o) {
              return (
                (t = {
                  name: "LoopDetectedException",
                  $fault: "server",
                  $metadata: nt(e),
                  Message: void 0,
                }),
                void 0 !== (n = e.body).Message &&
                  null !== n.Message &&
                  (t.Message = n.Message),
                [2, t]
              );
            });
          });
        },
        Be = function (e, t) {
          return h(void 0, void 0, void 0, function () {
            var t, n;
            return g(this, function (o) {
              return (
                (t = {
                  name: "NotAcceptableException",
                  $fault: "client",
                  $metadata: nt(e),
                  message: void 0,
                }),
                void 0 !== (n = e.body).message &&
                  null !== n.message &&
                  (t.message = n.message),
                [2, t]
              );
            });
          });
        },
        Me = function (e, t) {
          return h(void 0, void 0, void 0, function () {
            var t, n;
            return g(this, function (o) {
              return (
                (t = {
                  name: "NotFoundException",
                  $fault: "client",
                  $metadata: nt(e),
                  message: void 0,
                }),
                void 0 !== (n = e.body).message &&
                  null !== n.message &&
                  (t.message = n.message),
                [2, t]
              );
            });
          });
        },
        Ue = function (e, t) {
          return h(void 0, void 0, void 0, function () {
            var t, n;
            return g(this, function (o) {
              return (
                (t = {
                  name: "RequestTimeoutException",
                  $fault: "client",
                  $metadata: nt(e),
                  message: void 0,
                }),
                void 0 !== (n = e.body).message &&
                  null !== n.message &&
                  (t.message = n.message),
                [2, t]
              );
            });
          });
        },
        je = function (e, t) {
          return h(void 0, void 0, void 0, function () {
            var t, n;
            return g(this, function (o) {
              return (
                (t = {
                  name: "UnsupportedMediaTypeException",
                  $fault: "client",
                  $metadata: nt(e),
                  message: void 0,
                }),
                void 0 !== (n = e.body).message &&
                  null !== n.message &&
                  (t.message = n.message),
                [2, t]
              );
            });
          });
        },
        $e = function (e, t) {
          return Object.entries(e).reduce(function (e, t) {
            var n,
              o = b(t, 2),
              i = o[0],
              r = o[1];
            return null === r ? e : v(v({}, e), (((n = {})[i] = r), n));
          }, {});
        },
        De = function (e, t) {
          return e
            .filter(function (e) {
              return null != e;
            })
            .map(function (e) {
              return null === e
                ? null
                : (function (e, t) {
                    return v(
                      v(
                        v(
                          {},
                          void 0 !== e.name &&
                            null !== e.name && { name: e.name }
                        ),
                        void 0 !== e.parameters &&
                          null !== e.parameters && {
                            parameters: $e(e.parameters, t),
                          }
                      ),
                      void 0 !== e.timeToLive &&
                        null !== e.timeToLive && {
                          timeToLive: qe(e.timeToLive, t),
                        }
                    );
                  })(e, t);
            });
        },
        qe = function (e, t) {
          return v(
            v(
              {},
              void 0 !== e.timeToLiveInSeconds &&
                null !== e.timeToLiveInSeconds && {
                  timeToLiveInSeconds: e.timeToLiveInSeconds,
                }
            ),
            void 0 !== e.turnsToLive &&
              null !== e.turnsToLive && { turnsToLive: e.turnsToLive }
          );
        },
        Ve = function (e, t) {
          return Object.entries(e).reduce(function (e, t) {
            var n,
              o = b(t, 2),
              i = o[0],
              r = o[1];
            return null === r ? e : v(v({}, e), (((n = {})[i] = r), n));
          }, {});
        },
        He = function (e, t) {
          return Object.entries(e).reduce(function (e, t) {
            var n,
              o = b(t, 2),
              i = o[0],
              r = o[1];
            return null === r ? e : v(v({}, e), (((n = {})[i] = r), n));
          }, {});
        },
        Ge = function (e, t) {
          return (e || [])
            .filter(function (e) {
              return null != e;
            })
            .map(function (e) {
              return null === e
                ? null
                : (function (e, t) {
                    return {
                      name:
                        void 0 !== e.name && null !== e.name ? e.name : void 0,
                      parameters:
                        void 0 !== e.parameters && null !== e.parameters
                          ? He(e.parameters, t)
                          : void 0,
                      timeToLive:
                        void 0 !== e.timeToLive && null !== e.timeToLive
                          ? We(e.timeToLive, t)
                          : void 0,
                    };
                  })(e, t);
            });
        },
        We = function (e, t) {
          return {
            timeToLiveInSeconds:
              void 0 !== e.timeToLiveInSeconds && null !== e.timeToLiveInSeconds
                ? e.timeToLiveInSeconds
                : void 0,
            turnsToLive:
              void 0 !== e.turnsToLive && null !== e.turnsToLive
                ? e.turnsToLive
                : void 0,
          };
        },
        Je = function (e, t) {
          return (e || [])
            .filter(function (e) {
              return null != e;
            })
            .map(function (e) {
              return null === e
                ? null
                : (function (e, t) {
                    return {
                      attachmentLinkUrl:
                        void 0 !== e.attachmentLinkUrl &&
                        null !== e.attachmentLinkUrl
                          ? e.attachmentLinkUrl
                          : void 0,
                      buttons:
                        void 0 !== e.buttons && null !== e.buttons
                          ? Ye(e.buttons, t)
                          : void 0,
                      imageUrl:
                        void 0 !== e.imageUrl && null !== e.imageUrl
                          ? e.imageUrl
                          : void 0,
                      subTitle:
                        void 0 !== e.subTitle && null !== e.subTitle
                          ? e.subTitle
                          : void 0,
                      title:
                        void 0 !== e.title && null !== e.title
                          ? e.title
                          : void 0,
                    };
                  })(e, t);
            });
        },
        Qe = function (e, t) {
          return {
            score: void 0 !== e.score && null !== e.score ? e.score : void 0,
          };
        },
        Xe = function (e, t) {
          return (e || [])
            .filter(function (e) {
              return null != e;
            })
            .map(function (e) {
              return null === e ? null : Ke(e, t);
            });
        },
        Ye = function (e, t) {
          return (e || [])
            .filter(function (e) {
              return null != e;
            })
            .map(function (e) {
              return null === e
                ? null
                : (function (e, t) {
                    return {
                      text:
                        void 0 !== e.text && null !== e.text ? e.text : void 0,
                      value:
                        void 0 !== e.value && null !== e.value
                          ? e.value
                          : void 0,
                    };
                  })(e);
            });
        },
        Ke = function (e, t) {
          return {
            intentName:
              void 0 !== e.intentName && null !== e.intentName
                ? e.intentName
                : void 0,
            nluIntentConfidence:
              void 0 !== e.nluIntentConfidence && null !== e.nluIntentConfidence
                ? Qe(e.nluIntentConfidence, t)
                : void 0,
            slots:
              void 0 !== e.slots && null !== e.slots ? tt(e.slots, t) : void 0,
          };
        },
        Ze = function (e, t) {
          return {
            contentType:
              void 0 !== e.contentType && null !== e.contentType
                ? e.contentType
                : void 0,
            genericAttachments:
              void 0 !== e.genericAttachments && null !== e.genericAttachments
                ? Je(e.genericAttachments, t)
                : void 0,
            version:
              void 0 !== e.version && null !== e.version ? e.version : void 0,
          };
        },
        et = function (e, t) {
          return {
            sentimentLabel:
              void 0 !== e.sentimentLabel && null !== e.sentimentLabel
                ? e.sentimentLabel
                : void 0,
            sentimentScore:
              void 0 !== e.sentimentScore && null !== e.sentimentScore
                ? e.sentimentScore
                : void 0,
          };
        },
        tt = function (e, t) {
          return Object.entries(e).reduce(function (e, t) {
            var n,
              o = b(t, 2),
              i = o[0],
              r = o[1];
            return null === r ? e : v(v({}, e), (((n = {})[i] = r), n));
          }, {});
        },
        nt = function (e) {
          var t;
          return {
            httpStatusCode: e.statusCode,
            requestId:
              null !== (t = e.headers["x-amzn-requestid"]) && void 0 !== t
                ? t
                : e.headers["x-amzn-request-id"],
            extendedRequestId: e.headers["x-amz-id-2"],
            cfId: e.headers["x-amz-cf-id"],
          };
        },
        ot = function (e, t) {
          return (function (e, t) {
            return (
              void 0 === e && (e = new Uint8Array()),
              e instanceof Uint8Array
                ? Promise.resolve(e)
                : t.streamCollector(e) || Promise.resolve(new Uint8Array())
            );
          })(e, t).then(function (e) {
            return t.utf8Encoder(e);
          });
        },
        it = function (e) {
          return (
            void 0 !== e &&
            null !== e &&
            "" !== e &&
            (!Object.getOwnPropertyNames(e).includes("length") ||
              0 != e.length) &&
            (!Object.getOwnPropertyNames(e).includes("size") || 0 != e.size)
          );
        },
        rt = function (e, t) {
          return ot(e, t).then(function (e) {
            return e.length ? JSON.parse(e) : {};
          });
        },
        at = function (e, t) {
          var n,
            o,
            i = function (e) {
              var t = e;
              return (
                t.indexOf(":") >= 0 && (t = t.split(":")[0]),
                t.indexOf("#") >= 0 && (t = t.split("#")[1]),
                t
              );
            },
            r =
              ((n = e.headers),
              (o = "x-amzn-errortype"),
              Object.keys(n).find(function (e) {
                return e.toLowerCase() === o.toLowerCase();
              }));
          return void 0 !== r
            ? i(e.headers[r])
            : void 0 !== t.code
            ? i(t.code)
            : void 0 !== t.__type
            ? i(t.__type)
            : "";
        },
        st = n(2839),
        ct = (function (e) {
          function t(t) {
            var n = e.call(this) || this;
            return (n.input = t), n;
          }
          return (
            m(t, e),
            (t.prototype.resolveMiddleware = function (e, t, n) {
              this.middlewareStack.use(
                (0, st.p2)(t, this.serialize, this.deserialize)
              );
              var o = e.concat(this.middlewareStack),
                i = {
                  logger: t.logger,
                  clientName: "LexRuntimeServiceClient",
                  commandName: "PostTextCommand",
                  inputFilterSensitiveLog: H.filterSensitiveLog,
                  outputFilterSensitiveLog: Z.filterSensitiveLog,
                },
                r = t.requestHandler;
              return o.resolve(function (e) {
                return r.handle(e.request, n || {});
              }, i);
            }),
            (t.prototype.serialize = function (e, t) {
              return (function (e, t) {
                return h(void 0, void 0, void 0, function () {
                  var n, o, i, r, a, s, c, u, l;
                  return g(this, function (d) {
                    switch (d.label) {
                      case 0:
                        if (
                          ((n = { "content-type": "application/json" }),
                          (o =
                            "/bot/{botName}/alias/{botAlias}/user/{userId}/text"),
                          void 0 === e.botName)
                        )
                          throw new Error(
                            "No value provided for input HTTP label: botName."
                          );
                        if ((i = e.botName).length <= 0)
                          throw new Error(
                            "Empty value provided for input HTTP label: botName."
                          );
                        if (
                          ((o = o.replace("{botName}", (0, Ee.jc)(i))),
                          void 0 === e.botAlias)
                        )
                          throw new Error(
                            "No value provided for input HTTP label: botAlias."
                          );
                        if ((i = e.botAlias).length <= 0)
                          throw new Error(
                            "Empty value provided for input HTTP label: botAlias."
                          );
                        if (
                          ((o = o.replace("{botAlias}", (0, Ee.jc)(i))),
                          void 0 === e.userId)
                        )
                          throw new Error(
                            "No value provided for input HTTP label: userId."
                          );
                        if ((i = e.userId).length <= 0)
                          throw new Error(
                            "Empty value provided for input HTTP label: userId."
                          );
                        return (
                          (o = o.replace("{userId}", (0, Ee.jc)(i))),
                          (r = JSON.stringify(
                            v(
                              v(
                                v(
                                  v(
                                    {},
                                    void 0 !== e.activeContexts &&
                                      null !== e.activeContexts && {
                                        activeContexts: De(e.activeContexts, t),
                                      }
                                  ),
                                  void 0 !== e.inputText &&
                                    null !== e.inputText && {
                                      inputText: e.inputText,
                                    }
                                ),
                                void 0 !== e.requestAttributes &&
                                  null !== e.requestAttributes && {
                                    requestAttributes: Ve(
                                      e.requestAttributes,
                                      t
                                    ),
                                  }
                              ),
                              void 0 !== e.sessionAttributes &&
                                null !== e.sessionAttributes && {
                                  sessionAttributes: Ve(e.sessionAttributes, t),
                                }
                            )
                          )),
                          [4, t.endpoint()]
                        );
                      case 1:
                        return (
                          (a = d.sent()),
                          (s = a.hostname),
                          (c = a.protocol),
                          (u = void 0 === c ? "https" : c),
                          (l = a.port),
                          [
                            2,
                            new Le.aW({
                              protocol: u,
                              hostname: s,
                              port: l,
                              method: "POST",
                              headers: n,
                              path: o,
                              body: r,
                            }),
                          ]
                        );
                    }
                  });
                });
              })(e, t);
            }),
            (t.prototype.deserialize = function (e, t) {
              return (function (e, t) {
                return h(void 0, void 0, void 0, function () {
                  var n, o;
                  return g(this, function (i) {
                    switch (i.label) {
                      case 0:
                        return 200 !== e.statusCode && e.statusCode >= 300
                          ? [2, ke(e, t)]
                          : ((n = {
                              $metadata: nt(e),
                              activeContexts: void 0,
                              alternativeIntents: void 0,
                              botVersion: void 0,
                              dialogState: void 0,
                              intentName: void 0,
                              message: void 0,
                              messageFormat: void 0,
                              nluIntentConfidence: void 0,
                              responseCard: void 0,
                              sentimentResponse: void 0,
                              sessionAttributes: void 0,
                              sessionId: void 0,
                              slotToElicit: void 0,
                              slots: void 0,
                            }),
                            [4, rt(e.body, t)]);
                      case 1:
                        return (
                          void 0 !== (o = i.sent()).activeContexts &&
                            null !== o.activeContexts &&
                            (n.activeContexts = Ge(o.activeContexts, t)),
                          void 0 !== o.alternativeIntents &&
                            null !== o.alternativeIntents &&
                            (n.alternativeIntents = Xe(
                              o.alternativeIntents,
                              t
                            )),
                          void 0 !== o.botVersion &&
                            null !== o.botVersion &&
                            (n.botVersion = o.botVersion),
                          void 0 !== o.dialogState &&
                            null !== o.dialogState &&
                            (n.dialogState = o.dialogState),
                          void 0 !== o.intentName &&
                            null !== o.intentName &&
                            (n.intentName = o.intentName),
                          void 0 !== o.message &&
                            null !== o.message &&
                            (n.message = o.message),
                          void 0 !== o.messageFormat &&
                            null !== o.messageFormat &&
                            (n.messageFormat = o.messageFormat),
                          void 0 !== o.nluIntentConfidence &&
                            null !== o.nluIntentConfidence &&
                            (n.nluIntentConfidence = Qe(
                              o.nluIntentConfidence,
                              t
                            )),
                          void 0 !== o.responseCard &&
                            null !== o.responseCard &&
                            (n.responseCard = Ze(o.responseCard, t)),
                          void 0 !== o.sentimentResponse &&
                            null !== o.sentimentResponse &&
                            (n.sentimentResponse = et(o.sentimentResponse, t)),
                          void 0 !== o.sessionAttributes &&
                            null !== o.sessionAttributes &&
                            (n.sessionAttributes = tt(o.sessionAttributes, t)),
                          void 0 !== o.sessionId &&
                            null !== o.sessionId &&
                            (n.sessionId = o.sessionId),
                          void 0 !== o.slotToElicit &&
                            null !== o.slotToElicit &&
                            (n.slotToElicit = o.slotToElicit),
                          void 0 !== o.slots &&
                            null !== o.slots &&
                            (n.slots = tt(o.slots, t)),
                          [2, Promise.resolve(n)]
                        );
                    }
                  });
                });
              })(e, t);
            }),
            t
          );
        })(Ee.mY),
        ut = (function (e) {
          function t(t) {
            var n = e.call(this) || this;
            return (n.input = t), n;
          }
          return (
            m(t, e),
            (t.prototype.resolveMiddleware = function (e, t, n) {
              this.middlewareStack.use(
                (0, st.p2)(t, this.serialize, this.deserialize)
              );
              var o = e.concat(this.middlewareStack),
                i = {
                  logger: t.logger,
                  clientName: "LexRuntimeServiceClient",
                  commandName: "PostContentCommand",
                  inputFilterSensitiveLog: j.filterSensitiveLog,
                  outputFilterSensitiveLog: D.filterSensitiveLog,
                },
                r = t.requestHandler;
              return o.resolve(function (e) {
                return r.handle(e.request, n || {});
              }, i);
            }),
            (t.prototype.serialize = function (e, t) {
              return (function (e, t) {
                return h(void 0, void 0, void 0, function () {
                  var n, o, i, r, a, s, c, u, l;
                  return g(this, function (d) {
                    switch (d.label) {
                      case 0:
                        if (
                          ((n = v(
                            v(
                              v(
                                v(
                                  v(
                                    {
                                      "content-type":
                                        "application/octet-stream",
                                      "x-amz-content-sha256":
                                        "UNSIGNED-PAYLOAD",
                                    },
                                    it(e.sessionAttributes) && {
                                      "x-amz-lex-session-attributes": Ie.from(
                                        Ee.QT.fromObject(e.sessionAttributes)
                                      ).toString("base64"),
                                    }
                                  ),
                                  it(e.requestAttributes) && {
                                    "x-amz-lex-request-attributes": Ie.from(
                                      Ee.QT.fromObject(e.requestAttributes)
                                    ).toString("base64"),
                                  }
                                ),
                                it(e.contentType) && {
                                  "content-type": e.contentType,
                                }
                              ),
                              it(e.accept) && { accept: e.accept }
                            ),
                            it(e.activeContexts) && {
                              "x-amz-lex-active-contexts": Ie.from(
                                Ee.QT.fromObject(e.activeContexts)
                              ).toString("base64"),
                            }
                          )),
                          (o =
                            "/bot/{botName}/alias/{botAlias}/user/{userId}/content"),
                          void 0 === e.botName)
                        )
                          throw new Error(
                            "No value provided for input HTTP label: botName."
                          );
                        if ((i = e.botName).length <= 0)
                          throw new Error(
                            "Empty value provided for input HTTP label: botName."
                          );
                        if (
                          ((o = o.replace("{botName}", (0, Ee.jc)(i))),
                          void 0 === e.botAlias)
                        )
                          throw new Error(
                            "No value provided for input HTTP label: botAlias."
                          );
                        if ((i = e.botAlias).length <= 0)
                          throw new Error(
                            "Empty value provided for input HTTP label: botAlias."
                          );
                        if (
                          ((o = o.replace("{botAlias}", (0, Ee.jc)(i))),
                          void 0 === e.userId)
                        )
                          throw new Error(
                            "No value provided for input HTTP label: userId."
                          );
                        if ((i = e.userId).length <= 0)
                          throw new Error(
                            "Empty value provided for input HTTP label: userId."
                          );
                        return (
                          (o = o.replace("{userId}", (0, Ee.jc)(i))),
                          void 0 !== e.inputStream && (r = e.inputStream),
                          [4, t.endpoint()]
                        );
                      case 1:
                        return (
                          (a = d.sent()),
                          (s = a.hostname),
                          (c = a.protocol),
                          (u = void 0 === c ? "https" : c),
                          (l = a.port),
                          [
                            2,
                            new Le.aW({
                              protocol: u,
                              hostname: s,
                              port: l,
                              method: "POST",
                              headers: n,
                              path: o,
                              body: r,
                            }),
                          ]
                        );
                    }
                  });
                });
              })(e, t);
            }),
            (t.prototype.deserialize = function (e, t) {
              return (function (e, t) {
                return h(void 0, void 0, void 0, function () {
                  var n, o;
                  return g(this, function (i) {
                    return 200 !== e.statusCode && e.statusCode >= 300
                      ? [2, Ae(e, t)]
                      : ((n = {
                          $metadata: nt(e),
                          activeContexts: void 0,
                          alternativeIntents: void 0,
                          audioStream: void 0,
                          botVersion: void 0,
                          contentType: void 0,
                          dialogState: void 0,
                          inputTranscript: void 0,
                          intentName: void 0,
                          message: void 0,
                          messageFormat: void 0,
                          nluIntentConfidence: void 0,
                          sentimentResponse: void 0,
                          sessionAttributes: void 0,
                          sessionId: void 0,
                          slotToElicit: void 0,
                          slots: void 0,
                        }),
                        void 0 !== e.headers["content-type"] &&
                          (n.contentType = e.headers["content-type"]),
                        void 0 !== e.headers["x-amz-lex-intent-name"] &&
                          (n.intentName = e.headers["x-amz-lex-intent-name"]),
                        void 0 !==
                          e.headers["x-amz-lex-nlu-intent-confidence"] &&
                          (n.nluIntentConfidence = new Ee.QT(
                            Ie.from(
                              e.headers["x-amz-lex-nlu-intent-confidence"],
                              "base64"
                            ).toString("ascii")
                          )),
                        void 0 !== e.headers["x-amz-lex-alternative-intents"] &&
                          (n.alternativeIntents = new Ee.QT(
                            Ie.from(
                              e.headers["x-amz-lex-alternative-intents"],
                              "base64"
                            ).toString("ascii")
                          )),
                        void 0 !== e.headers["x-amz-lex-slots"] &&
                          (n.slots = new Ee.QT(
                            Ie.from(
                              e.headers["x-amz-lex-slots"],
                              "base64"
                            ).toString("ascii")
                          )),
                        void 0 !== e.headers["x-amz-lex-session-attributes"] &&
                          (n.sessionAttributes = new Ee.QT(
                            Ie.from(
                              e.headers["x-amz-lex-session-attributes"],
                              "base64"
                            ).toString("ascii")
                          )),
                        void 0 !== e.headers["x-amz-lex-sentiment"] &&
                          (n.sentimentResponse =
                            e.headers["x-amz-lex-sentiment"]),
                        void 0 !== e.headers["x-amz-lex-message"] &&
                          (n.message = e.headers["x-amz-lex-message"]),
                        void 0 !== e.headers["x-amz-lex-message-format"] &&
                          (n.messageFormat =
                            e.headers["x-amz-lex-message-format"]),
                        void 0 !== e.headers["x-amz-lex-dialog-state"] &&
                          (n.dialogState = e.headers["x-amz-lex-dialog-state"]),
                        void 0 !== e.headers["x-amz-lex-slot-to-elicit"] &&
                          (n.slotToElicit =
                            e.headers["x-amz-lex-slot-to-elicit"]),
                        void 0 !== e.headers["x-amz-lex-input-transcript"] &&
                          (n.inputTranscript =
                            e.headers["x-amz-lex-input-transcript"]),
                        void 0 !== e.headers["x-amz-lex-bot-version"] &&
                          (n.botVersion = e.headers["x-amz-lex-bot-version"]),
                        void 0 !== e.headers["x-amz-lex-session-id"] &&
                          (n.sessionId = e.headers["x-amz-lex-session-id"]),
                        void 0 !== e.headers["x-amz-lex-active-contexts"] &&
                          (n.activeContexts = new Ee.QT(
                            Ie.from(
                              e.headers["x-amz-lex-active-contexts"],
                              "base64"
                            ).toString("ascii")
                          )),
                        (o = e.body),
                        (n.audioStream = o),
                        [2, Promise.resolve(n)]);
                  });
                });
              })(e, t);
            }),
            t
          );
        })(Ee.mY),
        lt = n(634),
        dt = n(2752),
        ft = function (e) {
          if (e instanceof Blob || e instanceof ReadableStream)
            return new Response(e).arrayBuffer().then(function (e) {
              return new Uint8Array(e);
            });
          throw new Error("Readable is not supported.");
        },
        pt = (function () {
          var e = function (t, n) {
            return (e =
              Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array &&
                function (e, t) {
                  e.__proto__ = t;
                }) ||
              function (e, t) {
                for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
              })(t, n);
          };
          return function (t, n) {
            function o() {
              this.constructor = t;
            }
            e(t, n),
              (t.prototype =
                null === n
                  ? Object.create(n)
                  : ((o.prototype = n.prototype), new o()));
          };
        })(),
        mt = function () {
          return (mt =
            Object.assign ||
            function (e) {
              for (var t, n = 1, o = arguments.length; n < o; n++)
                for (var i in (t = arguments[n]))
                  Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
              return e;
            }).apply(this, arguments);
        },
        vt = function (e, t, n, o) {
          return new (n || (n = Promise))(function (i, r) {
            function a(e) {
              try {
                c(o.next(e));
              } catch (t) {
                r(t);
              }
            }
            function s(e) {
              try {
                c(o.throw(e));
              } catch (t) {
                r(t);
              }
            }
            function c(e) {
              var t;
              e.done
                ? i(e.value)
                : ((t = e.value),
                  t instanceof n
                    ? t
                    : new n(function (e) {
                        e(t);
                      })).then(a, s);
            }
            c((o = o.apply(e, t || [])).next());
          });
        },
        ht = function (e, t) {
          var n,
            o,
            i,
            r,
            a = {
              label: 0,
              sent: function () {
                if (1 & i[0]) throw i[1];
                return i[1];
              },
              trys: [],
              ops: [],
            };
          return (
            (r = { next: s(0), throw: s(1), return: s(2) }),
            "function" === typeof Symbol &&
              (r[Symbol.iterator] = function () {
                return this;
              }),
            r
          );
          function s(r) {
            return function (s) {
              return (function (r) {
                if (n) throw new TypeError("Generator is already executing.");
                for (; a; )
                  try {
                    if (
                      ((n = 1),
                      o &&
                        (i =
                          2 & r[0]
                            ? o.return
                            : r[0]
                            ? o.throw || ((i = o.return) && i.call(o), 0)
                            : o.next) &&
                        !(i = i.call(o, r[1])).done)
                    )
                      return i;
                    switch (((o = 0), i && (r = [2 & r[0], i.value]), r[0])) {
                      case 0:
                      case 1:
                        i = r;
                        break;
                      case 4:
                        return a.label++, { value: r[1], done: !1 };
                      case 5:
                        a.label++, (o = r[1]), (r = [0]);
                        continue;
                      case 7:
                        (r = a.ops.pop()), a.trys.pop();
                        continue;
                      default:
                        if (
                          !(i = (i = a.trys).length > 0 && i[i.length - 1]) &&
                          (6 === r[0] || 2 === r[0])
                        ) {
                          a = 0;
                          continue;
                        }
                        if (
                          3 === r[0] &&
                          (!i || (r[1] > i[0] && r[1] < i[3]))
                        ) {
                          a.label = r[1];
                          break;
                        }
                        if (6 === r[0] && a.label < i[1]) {
                          (a.label = i[1]), (i = r);
                          break;
                        }
                        if (i && a.label < i[2]) {
                          (a.label = i[2]), a.ops.push(r);
                          break;
                        }
                        i[2] && a.ops.pop(), a.trys.pop();
                        continue;
                    }
                    r = t.call(e, a);
                  } catch (s) {
                    (r = [6, s]), (o = 0);
                  } finally {
                    n = i = 0;
                  }
                if (5 & r[0]) throw r[1];
                return { value: r[0] ? r[1] : void 0, done: !0 };
              })([r, s]);
            };
          }
        },
        gt = new i.k("AWSLexProvider"),
        bt = (function (e) {
          function t(t) {
            void 0 === t && (t = {});
            var n = e.call(this, t) || this;
            return (n._botsCompleteCallback = {}), n;
          }
          return (
            pt(t, e),
            (t.prototype.getProviderName = function () {
              return "AWSLexProvider";
            }),
            (t.prototype.reportBotStatus = function (e, t) {
              var n = this;
              gt.debug("postContent state", e.dialogState),
                ("ReadyForFulfillment" !== e.dialogState &&
                  "Fulfilled" !== e.dialogState) ||
                  ("function" === typeof this._botsCompleteCallback[t] &&
                    setTimeout(function () {
                      return n._botsCompleteCallback[t](null, {
                        slots: e.slots,
                      });
                    }, 0),
                  this._config &&
                    "function" === typeof this._config[t].onComplete &&
                    setTimeout(function () {
                      return n._config[t].onComplete(null, { slots: e.slots });
                    }, 0)),
                "Failed" === e.dialogState &&
                  ("function" === typeof this._botsCompleteCallback[t] &&
                    setTimeout(function () {
                      return n._botsCompleteCallback[t](
                        "Bot conversation failed"
                      );
                    }, 0),
                  this._config &&
                    "function" === typeof this._config[t].onComplete &&
                    setTimeout(function () {
                      return n._config[t].onComplete("Bot conversation failed");
                    }, 0));
            }),
            (t.prototype.sendMessage = function (e, t) {
              return vt(this, void 0, void 0, function () {
                var n, o, i, r, a, s, c, u, l, d;
                return ht(this, function (f) {
                  switch (f.label) {
                    case 0:
                      return this._config[e]
                        ? [4, lt.cN.get()]
                        : [2, Promise.reject("Bot " + e + " does not exist")];
                    case 1:
                      if (!(n = f.sent()))
                        return [2, Promise.reject("No credentials")];
                      if (
                        ((this.lexRuntimeServiceClient = new Ce({
                          region: this._config[e].region,
                          credentials: n,
                          customUserAgent: (0, dt.Zm)(),
                        })),
                        "string" !== typeof t)
                      )
                        return [3, 6];
                      (o = {
                        botAlias: this._config[e].alias,
                        botName: e,
                        inputText: t,
                        userId: n.identityId,
                      }),
                        gt.debug("postText to lex", t),
                        (f.label = 2);
                    case 2:
                      return (
                        f.trys.push([2, 4, , 5]),
                        (i = new ct(o)),
                        [4, this.lexRuntimeServiceClient.send(i)]
                      );
                    case 3:
                      return (u = f.sent()), this.reportBotStatus(u, e), [2, u];
                    case 4:
                      return (r = f.sent()), [2, Promise.reject(r)];
                    case 5:
                      return [3, 11];
                    case 6:
                      (a = t.content),
                        (s = t.options.messageType),
                        (o =
                          "voice" === s
                            ? {
                                botAlias: this._config[e].alias,
                                botName: e,
                                contentType: "audio/x-l16; sample-rate=16000",
                                inputStream: a,
                                userId: n.identityId,
                                accept: "audio/mpeg",
                              }
                            : {
                                botAlias: this._config[e].alias,
                                botName: e,
                                contentType: "text/plain; charset=utf-8",
                                inputStream: a,
                                userId: n.identityId,
                                accept: "audio/mpeg",
                              }),
                        gt.debug("postContent to lex", t),
                        (f.label = 7);
                    case 7:
                      return (
                        f.trys.push([7, 10, , 11]),
                        (c = new ut(o)),
                        [4, this.lexRuntimeServiceClient.send(c)]
                      );
                    case 8:
                      return (u = f.sent()), [4, ft(u.audioStream)];
                    case 9:
                      return (
                        (l = f.sent()),
                        this.reportBotStatus(u, e),
                        [2, mt(mt({}, u), { audioStream: l })]
                      );
                    case 10:
                      return (d = f.sent()), [2, Promise.reject(d)];
                    case 11:
                      return [2];
                  }
                });
              });
            }),
            (t.prototype.onComplete = function (e, t) {
              if (!this._config[e])
                throw new ErrorEvent("Bot " + e + " does not exist");
              this._botsCompleteCallback[e] = t;
            }),
            t
          );
        })(f),
        yt = function () {
          return (yt =
            Object.assign ||
            function (e) {
              for (var t, n = 1, o = arguments.length; n < o; n++)
                for (var i in (t = arguments[n]))
                  Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
              return e;
            }).apply(this, arguments);
        },
        xt = function (e, t, n, o) {
          return new (n || (n = Promise))(function (i, r) {
            function a(e) {
              try {
                c(o.next(e));
              } catch (t) {
                r(t);
              }
            }
            function s(e) {
              try {
                c(o.throw(e));
              } catch (t) {
                r(t);
              }
            }
            function c(e) {
              var t;
              e.done
                ? i(e.value)
                : ((t = e.value),
                  t instanceof n
                    ? t
                    : new n(function (e) {
                        e(t);
                      })).then(a, s);
            }
            c((o = o.apply(e, t || [])).next());
          });
        },
        wt = function (e, t) {
          var n,
            o,
            i,
            r,
            a = {
              label: 0,
              sent: function () {
                if (1 & i[0]) throw i[1];
                return i[1];
              },
              trys: [],
              ops: [],
            };
          return (
            (r = { next: s(0), throw: s(1), return: s(2) }),
            "function" === typeof Symbol &&
              (r[Symbol.iterator] = function () {
                return this;
              }),
            r
          );
          function s(r) {
            return function (s) {
              return (function (r) {
                if (n) throw new TypeError("Generator is already executing.");
                for (; a; )
                  try {
                    if (
                      ((n = 1),
                      o &&
                        (i =
                          2 & r[0]
                            ? o.return
                            : r[0]
                            ? o.throw || ((i = o.return) && i.call(o), 0)
                            : o.next) &&
                        !(i = i.call(o, r[1])).done)
                    )
                      return i;
                    switch (((o = 0), i && (r = [2 & r[0], i.value]), r[0])) {
                      case 0:
                      case 1:
                        i = r;
                        break;
                      case 4:
                        return a.label++, { value: r[1], done: !1 };
                      case 5:
                        a.label++, (o = r[1]), (r = [0]);
                        continue;
                      case 7:
                        (r = a.ops.pop()), a.trys.pop();
                        continue;
                      default:
                        if (
                          !(i = (i = a.trys).length > 0 && i[i.length - 1]) &&
                          (6 === r[0] || 2 === r[0])
                        ) {
                          a = 0;
                          continue;
                        }
                        if (
                          3 === r[0] &&
                          (!i || (r[1] > i[0] && r[1] < i[3]))
                        ) {
                          a.label = r[1];
                          break;
                        }
                        if (6 === r[0] && a.label < i[1]) {
                          (a.label = i[1]), (i = r);
                          break;
                        }
                        if (i && a.label < i[2]) {
                          (a.label = i[2]), a.ops.push(r);
                          break;
                        }
                        i[2] && a.ops.pop(), a.trys.pop();
                        continue;
                    }
                    r = t.call(e, a);
                  } catch (s) {
                    (r = [6, s]), (o = 0);
                  } finally {
                    n = i = 0;
                  }
                if (5 & r[0]) throw r[1];
                return { value: r[0] ? r[1] : void 0, done: !0 };
              })([r, s]);
            };
          }
        },
        St = new i.k("Interactions"),
        Tt = new ((function () {
          function e(e) {
            (this._options = e),
              St.debug("Interactions Options", this._options),
              (this._pluggables = {});
          }
          return (
            (e.prototype.getModuleName = function () {
              return "Interactions";
            }),
            (e.prototype.configure = function (e) {
              var t = this,
                n = e ? e.Interactions || e : {};
              St.debug("configure Interactions", { opt: n }),
                (this._options = yt(yt({ bots: {} }, n), n.Interactions));
              var o = this._options.aws_bots_config,
                i = this._options.bots;
              return (
                !Object.keys(i).length &&
                  o &&
                  Array.isArray(o) &&
                  o.forEach(function (e) {
                    t._options.bots[e.name] = e;
                  }),
                !this._pluggables.AWSLexProvider &&
                  i &&
                  Object.keys(i)
                    .map(function (e) {
                      return i[e];
                    })
                    .find(function (e) {
                      return (
                        !e.providerName || "AWSLexProvider" === e.providerName
                      );
                    }) &&
                  (this._pluggables.AWSLexProvider = new bt()),
                Object.keys(this._pluggables).map(function (e) {
                  t._pluggables[e].configure(t._options.bots);
                }),
                this._options
              );
            }),
            (e.prototype.addPluggable = function (e) {
              if (e && "Interactions" === e.getCategory()) {
                if (this._pluggables[e.getProviderName()])
                  throw new Error(
                    "Bot " + e.getProviderName() + " already plugged"
                  );
                return (
                  e.configure(this._options.bots),
                  void (this._pluggables[e.getProviderName()] = e)
                );
              }
            }),
            (e.prototype.send = function (e, t) {
              return xt(this, void 0, void 0, function () {
                var n;
                return wt(this, function (o) {
                  switch (o.label) {
                    case 0:
                      if (!this._options.bots || !this._options.bots[e])
                        throw new Error("Bot " + e + " does not exist");
                      if (
                        ((n =
                          this._options.bots[e].providerName ||
                          "AWSLexProvider"),
                        !this._pluggables[n])
                      )
                        throw new Error(
                          "Bot " +
                            n +
                            " does not have valid pluggin did you try addPluggable first?"
                        );
                      return [4, this._pluggables[n].sendMessage(e, t)];
                    case 1:
                      return [2, o.sent()];
                  }
                });
              });
            }),
            (e.prototype.onComplete = function (e, t) {
              if (!this._options.bots || !this._options.bots[e])
                throw new Error("Bot " + e + " does not exist");
              var n = this._options.bots[e].providerName || "AWSLexProvider";
              if (!this._pluggables[n])
                throw new Error(
                  "Bot " +
                    n +
                    " does not have valid pluggin did you try addPluggable first?"
                );
              this._pluggables[n].onComplete(e, t);
            }),
            e
          );
        })())(null);
      u.dQ.register(Tt);
      var Et,
        Ct,
        Lt,
        It = function (e, t, n, o) {
          return new (n || (n = Promise))(function (i, r) {
            function a(e) {
              try {
                c(o.next(e));
              } catch (t) {
                r(t);
              }
            }
            function s(e) {
              try {
                c(o.throw(e));
              } catch (t) {
                r(t);
              }
            }
            function c(e) {
              var t;
              e.done
                ? i(e.value)
                : ((t = e.value),
                  t instanceof n
                    ? t
                    : new n(function (e) {
                        e(t);
                      })).then(a, s);
            }
            c((o = o.apply(e, t || [])).next());
          });
        },
        At = function (e, t) {
          var n,
            o,
            i,
            r,
            a = {
              label: 0,
              sent: function () {
                if (1 & i[0]) throw i[1];
                return i[1];
              },
              trys: [],
              ops: [],
            };
          return (
            (r = { next: s(0), throw: s(1), return: s(2) }),
            "function" === typeof Symbol &&
              (r[Symbol.iterator] = function () {
                return this;
              }),
            r
          );
          function s(r) {
            return function (s) {
              return (function (r) {
                if (n) throw new TypeError("Generator is already executing.");
                for (; a; )
                  try {
                    if (
                      ((n = 1),
                      o &&
                        (i =
                          2 & r[0]
                            ? o.return
                            : r[0]
                            ? o.throw || ((i = o.return) && i.call(o), 0)
                            : o.next) &&
                        !(i = i.call(o, r[1])).done)
                    )
                      return i;
                    switch (((o = 0), i && (r = [2 & r[0], i.value]), r[0])) {
                      case 0:
                      case 1:
                        i = r;
                        break;
                      case 4:
                        return a.label++, { value: r[1], done: !1 };
                      case 5:
                        a.label++, (o = r[1]), (r = [0]);
                        continue;
                      case 7:
                        (r = a.ops.pop()), a.trys.pop();
                        continue;
                      default:
                        if (
                          !(i = (i = a.trys).length > 0 && i[i.length - 1]) &&
                          (6 === r[0] || 2 === r[0])
                        ) {
                          a = 0;
                          continue;
                        }
                        if (
                          3 === r[0] &&
                          (!i || (r[1] > i[0] && r[1] < i[3]))
                        ) {
                          a.label = r[1];
                          break;
                        }
                        if (6 === r[0] && a.label < i[1]) {
                          (a.label = i[1]), (i = r);
                          break;
                        }
                        if (i && a.label < i[2]) {
                          (a.label = i[2]), a.ops.push(r);
                          break;
                        }
                        i[2] && a.ops.pop(), a.trys.pop();
                        continue;
                    }
                    r = t.call(e, a);
                  } catch (s) {
                    (r = [6, s]), (o = 0);
                  } finally {
                    n = i = 0;
                  }
                if (5 & r[0]) throw r[1];
                return { value: r[0] ? r[1] : void 0, done: !0 };
              })([r, s]);
            };
          }
        },
        kt = function () {
          for (var e = 0, t = 0, n = arguments.length; t < n; t++)
            e += arguments[t].length;
          var o = Array(e),
            i = 0;
          for (t = 0; t < n; t++)
            for (var r = arguments[t], a = 0, s = r.length; a < s; a++, i++)
              o[i] = r[a];
          return o;
        },
        _t = function (e, t, n) {
          for (var o = 0; o < n.length; o++) e.setUint8(t + o, n.charCodeAt(o));
        },
        Nt = function (e, t) {
          var n = 2 * e.length,
            o = 8 + n,
            i = new ArrayBuffer(36 + o),
            r = new DataView(i);
          return (
            _t(r, 0, "RIFF"),
            r.setUint32(4, 24 + o, !0),
            _t(r, 8, "WAVE"),
            _t(r, 12, "fmt "),
            r.setUint32(16, 16, !0),
            r.setUint16(20, 1, !0),
            r.setUint16(22, 1, !0),
            r.setUint32(24, t, !0),
            r.setUint32(28, 2 * t, !0),
            r.setUint16(32, 2, !0),
            r.setUint16(34, 16, !0),
            _t(r, 36, "data"),
            r.setUint32(40, n, !0),
            (function (e, t, n) {
              for (var o = t, i = 0; i < n.length; i++, o += 2) {
                var r = Math.max(-1, Math.min(1, n[i]));
                e.setInt16(o, r < 0 ? 32768 * r : 32767 * r, !0);
              }
            })(r, 44, e),
            r
          );
        },
        zt = function (e, t, n, o) {
          var i = (function (e, t, n) {
              if (n === t) return e;
              for (
                var o = t / n,
                  i = Math.round(e.length / o),
                  r = new Float32Array(i),
                  a = 0,
                  s = 0;
                a < r.length;

              ) {
                for (
                  var c = Math.round((a + 1) * o), u = 0, l = 0, d = s;
                  d < c && d < e.length;
                  d++
                )
                  (u += e[d]), l++;
                (r[a] = u / l), a++, (s = c);
              }
              return r;
            })(
              (function (e, t) {
                for (
                  var n = new Float32Array(t), o = 0, i = 0;
                  i < e.length;
                  i++
                )
                  n.set(e[i], o), (o += e[i].length);
                return n;
              })(e, t),
              n,
              o
            ),
            r = Nt(i, o);
          return new Blob([r], { type: "application/octet-stream" });
        },
        Pt = new i.k("AudioRecorder"),
        Rt = (function () {
          function e(e) {
            (this.streamBuffer = []),
              (this.streamBufferLength = 0),
              (this.recording = !1),
              (this.options = e);
          }
          return (
            (e.prototype.init = function () {
              return It(this, void 0, void 0, function () {
                var e = this;
                return At(this, function (t) {
                  switch (t.label) {
                    case 0:
                      return (0, r.lC)().isBrowser
                        ? ((window.AudioContext =
                            window.AudioContext || window.webkitAudioContext),
                          (this.audioContext = new AudioContext()),
                          [
                            4,
                            navigator.mediaDevices
                              .getUserMedia({ audio: !0 })
                              .then(function (t) {
                                (e.audioSupported = !0), e.setupAudioNodes(t);
                              })
                              .catch(function () {
                                return (
                                  (e.audioSupported = !1),
                                  Promise.reject("Audio is not supported")
                                );
                              }),
                          ])
                        : [3, 2];
                    case 1:
                      return t.sent(), [3, 3];
                    case 2:
                      return (
                        (this.audioSupported = !1),
                        [2, Promise.reject("Audio is not supported")]
                      );
                    case 3:
                      return [2];
                  }
                });
              });
            }),
            (e.prototype.setupAudioNodes = function (e) {
              return It(this, void 0, void 0, function () {
                var t,
                  n,
                  o,
                  i,
                  r = this;
                return At(this, function (a) {
                  switch (a.label) {
                    case 0:
                      return (
                        a.trys.push([0, 2, , 3]),
                        [4, this.audioContext.resume()]
                      );
                    case 1:
                      return a.sent(), [3, 3];
                    case 2:
                      return (t = a.sent()), Pt.error(t), [3, 3];
                    case 3:
                      return (
                        (n = this.audioContext.createMediaStreamSource(e)),
                        ((o = this.audioContext.createScriptProcessor(
                          4096,
                          1,
                          1
                        )).onaudioprocess = function (e) {
                          if (r.recording) {
                            var t = e.inputBuffer.getChannelData(0);
                            r.streamBuffer.push(new Float32Array(t)),
                              (r.streamBufferLength += t.length),
                              r.analyse();
                          }
                        }),
                        ((i = this.audioContext.createAnalyser()).minDecibels =
                          -90),
                        (i.maxDecibels = -10),
                        (i.smoothingTimeConstant = 0.85),
                        n.connect(i),
                        i.connect(o),
                        o.connect(n.context.destination),
                        (this.analyserNode = i),
                        [2]
                      );
                  }
                });
              });
            }),
            (e.prototype.startRecording = function (e, t) {
              return It(this, void 0, void 0, function () {
                var n, o;
                return At(this, function (i) {
                  switch (i.label) {
                    case 0:
                      if (this.recording || !this.audioSupported) return [2];
                      (this.onSilence = e || function () {}),
                        (this.visualizer = t || function () {}),
                        (n = this.audioContext),
                        (i.label = 1);
                    case 1:
                      return i.trys.push([1, 3, , 4]), [4, n.resume()];
                    case 2:
                      return i.sent(), [3, 4];
                    case 3:
                      return (o = i.sent()), Pt.error(o), [3, 4];
                    case 4:
                      return (
                        (this.start = Date.now()), (this.recording = !0), [2]
                      );
                  }
                });
              });
            }),
            (e.prototype.stopRecording = function () {
              this.audioSupported && (this.recording = !1);
            }),
            (e.prototype.clear = function () {
              this.stopRecording(),
                (this.streamBufferLength = 0),
                (this.streamBuffer = []);
            }),
            (e.prototype.play = function (e) {
              var t = this;
              if (e && this.audioSupported) {
                var n = new Blob([e]);
                return new Promise(function (e, o) {
                  var i = new FileReader();
                  (i.onload = function () {
                    t.playbackSource && t.playbackSource.disconnect(),
                      (t.playbackSource = t.audioContext.createBufferSource());
                    t.audioContext.decodeAudioData(
                      i.result,
                      function (n) {
                        (t.playbackSource.buffer = n),
                          t.playbackSource.connect(t.audioContext.destination),
                          (t.playbackSource.onended = function () {
                            return e();
                          }),
                          t.playbackSource.start(0);
                      },
                      function (e) {
                        return o(e);
                      }
                    );
                  }),
                    (i.onerror = function () {
                      return o();
                    }),
                    i.readAsArrayBuffer(n);
                });
              }
            }),
            (e.prototype.stop = function () {
              this.playbackSource && this.playbackSource.stop();
            }),
            (e.prototype.analyse = function () {
              if (this.audioSupported) {
                var e = this.analyserNode;
                e.fftSize = 2048;
                var t = e.fftSize,
                  n = new Uint8Array(t),
                  o = this.options.amplitude,
                  i = this.options.time;
                e.getByteTimeDomainData(n), this.visualizer(n, t);
                for (var r = 0; r < t; r++) {
                  var a = n[r] / 128 - 1;
                  (a > o || a < -1 * o) && (this.start = Date.now());
                }
                Date.now() - this.start > i && this.onSilence();
              }
            }),
            (e.prototype.exportWAV = function (e) {
              return (
                void 0 === e && (e = 16e3),
                It(this, void 0, void 0, function () {
                  var t, n;
                  return At(this, function (o) {
                    return this.audioSupported
                      ? ((t = this.audioContext.sampleRate),
                        (n = zt(
                          this.streamBuffer,
                          this.streamBufferLength,
                          t,
                          e
                        )),
                        this.clear(),
                        [2, n])
                      : [2];
                  });
                })
              );
            }),
            e
          );
        })();
      !(function (e) {
        (e[(e.Initial = 0)] = "Initial"),
          (e[(e.Listening = 1)] = "Listening"),
          (e[(e.SendingText = 2)] = "SendingText"),
          (e[(e.SendingVoice = 3)] = "SendingVoice"),
          (e[(e.Error = 4)] = "Error");
      })(Et || (Et = {})),
        (function (e) {
          (e.Bot = "bot"), (e.User = "user");
        })(Ct || (Ct = {})),
        (function (e) {
          (e[(e.Recoverable = 0)] = "Recoverable"),
            (e[(e.Unrecoverable = 1)] = "Unrecoverable");
        })(Lt || (Lt = {}));
      var Ot = (function () {
        function e(e) {
          var t = this;
          (0, o.r)(this, e),
            (this.clearOnComplete = !1),
            (this.conversationModeOn = !1),
            (this.botTitle = s.T.CHATBOT_TITLE),
            (this.voiceEnabled = !1),
            (this.textEnabled = !0),
            (this.silenceTime = 1500),
            (this.silenceThreshold = 0.2),
            (this.messages = []),
            (this.text = ""),
            (this.chatState = Et.Initial),
            (this.messageJSX = function (e) {
              var n = e.map(function (e) {
                return (0,
                o.h)("div", { class: "bubble " + e.from }, e.content);
              });
              if (
                t.chatState === Et.SendingText ||
                t.chatState === Et.SendingVoice
              ) {
                var i = t.chatState === Et.SendingText ? Ct.Bot : Ct.User;
                n.push(
                  (0, o.h)(
                    "div",
                    { class: "bubble " + i },
                    (0, o.h)(
                      "div",
                      { class: "dot-flashing " + i },
                      (0, o.h)("span", { class: "dot left" }),
                      (0, o.h)("span", { class: "dot middle" }),
                      (0, o.h)("span", { class: "dot right" })
                    )
                  )
                );
              }
              return n;
            }),
            (this.chatCompleted = (0, o.c)(this, "chatCompleted", 7));
        }
        return (
          (e.prototype.submitHandler = function (e) {
            this.sendTextMessage();
          }),
          (e.prototype.componentWillLoad = function () {
            if (!Tt || "function" !== typeof Tt.onComplete)
              throw new Error(c.c);
            this.validateProps();
          }),
          (e.prototype.componentDidRender = function () {
            var e = this.element.shadowRoot.querySelector(".body");
            e.scrollTop = e.scrollHeight;
          }),
          (e.prototype.validateProps = function () {
            var e = this;
            if (this.voiceEnabled || this.textEnabled)
              if (this.botName) {
                this.welcomeMessage &&
                  this.appendToChat(this.welcomeMessage, Ct.Bot),
                  this.voiceEnabled &&
                    ((this.audioRecorder = new Rt({
                      time: this.silenceTime,
                      amplitude: this.silenceThreshold,
                    })),
                    this.audioRecorder.init().catch(function (t) {
                      e.setError(t, Lt.Recoverable);
                    }));
                try {
                  Tt.onComplete(this.botName, function (t, n) {
                    e.chatCompleted.emit({ data: n, err: t }),
                      e.clearOnComplete
                        ? e.reset()
                        : (e.chatState = Et.Initial);
                  });
                } catch (t) {
                  this.setError(t, Lt.Unrecoverable);
                }
              } else this.setError(s.T.NO_BOT_NAME_ERROR, Lt.Unrecoverable);
            else this.setError(s.T.CHAT_DISABLED_ERROR, Lt.Unrecoverable);
          }),
          (e.prototype.handleSubmit = function (e) {
            e.preventDefault(), this.sendTextMessage();
          }),
          (e.prototype.handleMicButton = function () {
            var e = this;
            this.chatState === Et.Initial &&
              (this.audioRecorder.stop(),
              (this.chatState = Et.Listening),
              this.audioRecorder.startRecording(
                function () {
                  return e.handleSilence();
                },
                function (t, n) {
                  return e.visualizer(t, n);
                }
              ));
          }),
          (e.prototype.handleSilence = function () {
            var e = this;
            (this.chatState = Et.SendingVoice),
              this.audioRecorder.stopRecording(),
              this.audioRecorder.exportWAV().then(function (t) {
                e.sendVoiceMessage(t);
              });
          }),
          (e.prototype.handleTextChange = function (e) {
            var t = e.target;
            this.text = t.value;
          }),
          (e.prototype.handleCancelButton = function () {
            this.audioRecorder.clear(), (this.chatState = Et.Initial);
          }),
          (e.prototype.handleToastClose = function (e) {
            (this.error = void 0),
              e === Lt.Recoverable && (this.chatState = Et.Initial);
          }),
          (e.prototype.visualizer = function (e, t) {
            !(function (e, t, n) {
              if (n) {
                if (!(0, r.lC)().isBrowser)
                  throw new Error(
                    "Visualization is not supported on non-browsers."
                  );
                var o = n.getBoundingClientRect(),
                  i = o.width,
                  a = o.height;
                (n.width = i), (n.height = a);
                var s = n.getContext("2d");
                (s.fillStyle = "white"),
                  s.clearRect(0, 0, i, a),
                  requestAnimationFrame(function () {
                    s.fillRect(0, 0, i, a), (s.lineWidth = 1);
                    var o = getComputedStyle(
                      document.documentElement
                    ).getPropertyValue("--amplify-primary-color");
                    (s.strokeStyle = o && "" !== o ? o : "#ff9900"),
                      s.beginPath();
                    for (
                      var r = (1 * i) / t, c = 0, u = 0;
                      u < t || u % 3 === 0;
                      u++
                    ) {
                      var l = ((e[u] / 128) * a) / 2;
                      0 === u ? s.moveTo(c, l) : s.lineTo(c, l), (c += r);
                    }
                    s.lineTo(n.width, n.height / 2), s.stroke();
                  });
              }
            })(e, t, this.element.shadowRoot.querySelector("canvas"));
          }),
          (e.prototype.sendTextMessage = function () {
            return It(this, void 0, void 0, function () {
              var e, t, n;
              return At(this, function (o) {
                switch (o.label) {
                  case 0:
                    if (0 === this.text.length || this.chatState !== Et.Initial)
                      return [2];
                    (e = this.text),
                      (this.text = ""),
                      this.appendToChat(e, Ct.User),
                      (this.chatState = Et.SendingText),
                      (o.label = 1);
                  case 1:
                    return (
                      o.trys.push([1, 3, , 4]), [4, Tt.send(this.botName, e)]
                    );
                  case 2:
                    return (t = o.sent()), [3, 4];
                  case 3:
                    return (
                      (n = o.sent()), this.setError(n, Lt.Recoverable), [2]
                    );
                  case 4:
                    return (
                      t.message && this.appendToChat(t.message, Ct.Bot),
                      (this.chatState = Et.Initial),
                      [2]
                    );
                }
              });
            });
          }),
          (e.prototype.sendVoiceMessage = function (e) {
            return It(this, void 0, void 0, function () {
              var t,
                n,
                o,
                i,
                r = this;
              return At(this, function (a) {
                switch (a.label) {
                  case 0:
                    (t = { content: e, options: { messageType: "voice" } }),
                      (a.label = 1);
                  case 1:
                    return (
                      a.trys.push([1, 3, , 4]), [4, Tt.send(this.botName, t)]
                    );
                  case 2:
                    return (n = a.sent()), [3, 4];
                  case 3:
                    return (
                      (o = a.sent()), this.setError(o, Lt.Recoverable), [2]
                    );
                  case 4:
                    return (
                      (this.chatState = Et.Initial),
                      (i = n.dialogState),
                      n.inputTranscript &&
                        this.appendToChat(n.inputTranscript, Ct.User),
                      this.appendToChat(n.message, Ct.Bot),
                      [
                        4,
                        this.audioRecorder
                          .play(n.audioStream)
                          .then(function () {
                            r.conversationModeOn &&
                              "Fulfilled" !== i &&
                              "Failed" !== i &&
                              r.chatState === Et.Initial &&
                              r.handleMicButton();
                          })
                          .catch(function (e) {
                            return r.setError(e, Lt.Recoverable);
                          }),
                      ]
                    );
                  case 5:
                    return a.sent(), [2];
                }
              });
            });
          }),
          (e.prototype.appendToChat = function (e, t) {
            this.messages = kt(this.messages, [{ content: e, from: t }]);
          }),
          (e.prototype.setError = function (e, t) {
            var n = "string" === typeof e ? e : e.message;
            (this.chatState = Et.Error),
              (this.error = { message: n, errorType: t });
          }),
          (e.prototype.reset = function () {
            (this.chatState = Et.Initial),
              (this.text = ""),
              (this.error = void 0),
              (this.messages = []),
              this.welcomeMessage &&
                this.appendToChat(this.welcomeMessage, Ct.Bot),
              this.audioRecorder && this.audioRecorder.clear();
          }),
          (e.prototype.listeningFooterJSX = function () {
            var e = this;
            return [
              (0, o.h)("canvas", { height: "50" }),
              (0, o.h)("amplify-button", {
                "data-test": "chatbot-cancel-button",
                handleButtonClick: function () {
                  return e.handleCancelButton();
                },
                class: "icon-button",
                variant: "icon",
                icon: "ban",
              }),
            ];
          }),
          (e.prototype.footerJSX = function () {
            var e = this;
            if (this.chatState === Et.Listening)
              return this.listeningFooterJSX();
            var t = this.textEnabled
              ? s.T.TEXT_INPUT_PLACEHOLDER
              : s.T.VOICE_INPUT_PLACEHOLDER;
            return [
              (0, o.h)("amplify-input", {
                placeholder: a.o.get(t),
                description: "text",
                handleInputChange: function (t) {
                  return e.handleTextChange(t);
                },
                value: this.text,
                disabled: this.chatState === Et.Error || !this.textEnabled,
              }),
              this.voiceEnabled &&
                (0, o.h)("amplify-button", {
                  "data-test": "chatbot-mic-button",
                  handleButtonClick: function () {
                    return e.handleMicButton();
                  },
                  class: "icon-button",
                  variant: "icon",
                  icon: "microphone",
                  disabled:
                    this.chatState === Et.Error ||
                    this.chatState !== Et.Initial,
                }),
              this.textEnabled &&
                (0, o.h)("amplify-button", {
                  "data-test": "chatbot-send-button",
                  class: "icon-button",
                  variant: "icon",
                  icon: "send",
                  handleButtonClick: function () {
                    return e.sendTextMessage();
                  },
                  disabled:
                    this.chatState === Et.Error ||
                    this.chatState !== Et.Initial,
                }),
            ];
          }),
          (e.prototype.errorToast = function () {
            var e = this;
            if (this.error) {
              var t = this.error,
                n = t.message,
                i = t.errorType;
              return (0, o.h)("amplify-toast", {
                message: a.o.get(n),
                handleClose: function () {
                  return e.handleToastClose(i);
                },
              });
            }
          }),
          (e.prototype.render = function () {
            var e = this;
            return (0, o.h)(
              o.H,
              null,
              (0, o.h)(
                "div",
                { class: "amplify-chatbot" },
                (0, o.h)(
                  "slot",
                  { name: "header" },
                  (0, o.h)(
                    "div",
                    { class: "header", "data-test": "chatbot-header" },
                    a.o.get(this.botTitle)
                  )
                ),
                (0, o.h)(
                  "div",
                  { class: "body", "data-test": "chatbot-body" },
                  this.messageJSX(this.messages)
                ),
                (0, o.h)(
                  "form",
                  {
                    onSubmit: function (t) {
                      return e.handleSubmit(t);
                    },
                  },
                  (0, o.h)(
                    "div",
                    { class: "footer", "data-test": "chatbot-footer" },
                    this.footerJSX()
                  )
                ),
                this.errorToast()
              )
            );
          }),
          Object.defineProperty(e.prototype, "element", {
            get: function () {
              return (0, o.g)(this);
            },
            enumerable: !1,
            configurable: !0,
          }),
          e
        );
      })();
      Ot.style =
        ".bot .dot{background-color:var(--bot-dot-color)}.user .dot{background-color:var(--user-dot-color)}.dot-flashing{width:2.625rem}.dot-flashing .dot{display:inline-block;width:0.625rem;height:0.625rem;border-radius:10rem;opacity:0.65}.dot-flashing .left{-webkit-animation:dot-flashing 1s infinite alternate;animation:dot-flashing 1s infinite alternate;-webkit-animation-delay:0s;animation-delay:0s}.dot-flashing .middle{margin-left:0.375rem;margin-right:0.375rem;-webkit-animation:dot-flashing 1s infinite linear alternate;animation:dot-flashing 1s infinite linear alternate;-webkit-animation-delay:0.5s;animation-delay:0.5s}.dot-flashing .right{-webkit-animation:dot-flashing 1s infinite alternate;animation:dot-flashing 1s infinite alternate;-webkit-animation-delay:1s;animation-delay:1s}@-webkit-keyframes dot-flashing{0%{opacity:0.65}50%,100%{opacity:0.1}}@keyframes dot-flashing{0%{opacity:0.65}50%,100%{opacity:0.1}}:host{--width:28.75rem;--height:37.5rem;--header-color:var(--amplify-secondary-color);--header-size:var(--amplify-text-lg);--bot-background-color:rgb(230, 230, 230);--bot-text-color:black;--bot-dot-color:var(--bot-text-color);--user-background-color:var(--amplify-blue);--user-text-color:var(--amplify-white);--user-dot-color:var(--user-text-color)}.amplify-chatbot{display:-ms-inline-flexbox;display:inline-flex;-ms-flex-direction:column;flex-direction:column;background-color:var(--background-color);border-radius:0.375rem;-webkit-box-shadow:0.0625rem 0rem 0.25rem 0 rgba(0, 0, 0, 0.15);box-shadow:0.0625rem 0rem 0.25rem 0 rgba(0, 0, 0, 0.15);-webkit-box-sizing:border-box;box-sizing:border-box;font-family:var(--amplify-font-family);margin-bottom:1rem;width:100%;height:var(--height);max-width:var(--width)}@media (min-width: 672px){.amplify-chatbot{width:var(--width)}}.header{padding:1.25rem 0.375rem 1.25rem 0.375rem;color:var(--header-color);font-size:var(--header-size);font-weight:bold;text-align:center;word-wrap:break-word}.body{border-top:0.0625rem solid rgba(0, 0, 0, 0.05);padding:1.5rem 1rem 0 1rem;display:-ms-flexbox;display:flex;-ms-flex-positive:1;flex-grow:1;-ms-flex-direction:column;flex-direction:column;overflow:auto}.bubble{max-width:100%;padding:0.8em 1.4em;text-align:left;word-wrap:break-word;margin-bottom:0.625rem}.bot{margin-right:auto;background-color:var(--bot-background-color);color:var(--bot-text-color);border-radius:1.5rem 1.5rem 1.5rem 0}.user{margin-left:auto;background-color:var(--user-background-color);color:var(--user-text-color);border-radius:1.5rem 1.5rem 0 1.5rem}.footer{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;border-top:0.062rem solid rgba(0, 0, 0, 0.05);padding-right:0.625rem;min-height:3.125rem}.footer amplify-input{--border:none;--margin:0;-ms-flex-positive:1;flex-grow:1}canvas{margin-left:0.625rem;margin-right:0.625rem;-ms-flex-positive:1;flex-grow:1;height:3.125rem}.icon-button{--icon-height:1.25rem;--icon-fill:var(--amplify-primary-color);--padding:0.625rem;--width:auto}";
    },
  },
]);
