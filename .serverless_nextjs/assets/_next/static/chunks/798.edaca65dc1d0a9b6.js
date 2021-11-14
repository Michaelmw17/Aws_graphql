"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [798],
  {
    9798: function (t, n, e) {
      e.r(n),
        e.d(n, {
          amplify_nav: function () {
            return h;
          },
          amplify_sign_out: function () {
            return p;
          },
        });
      var r = e(2508),
        u = e(1953),
        o = e(5573),
        i = e(531),
        a = e(8063),
        l = e(4636),
        s = e(1186),
        c = function (t, n, e, r) {
          return new (e || (e = Promise))(function (u, o) {
            function i(t) {
              try {
                l(r.next(t));
              } catch (n) {
                o(n);
              }
            }
            function a(t) {
              try {
                l(r.throw(t));
              } catch (n) {
                o(n);
              }
            }
            function l(t) {
              var n;
              t.done
                ? u(t.value)
                : ((n = t.value),
                  n instanceof e
                    ? n
                    : new e(function (t) {
                        t(n);
                      })).then(i, a);
            }
            l((r = r.apply(t, n || [])).next());
          });
        },
        f = function (t, n) {
          var e,
            r,
            u,
            o,
            i = {
              label: 0,
              sent: function () {
                if (1 & u[0]) throw u[1];
                return u[1];
              },
              trys: [],
              ops: [],
            };
          return (
            (o = { next: a(0), throw: a(1), return: a(2) }),
            "function" === typeof Symbol &&
              (o[Symbol.iterator] = function () {
                return this;
              }),
            o
          );
          function a(o) {
            return function (a) {
              return (function (o) {
                if (e) throw new TypeError("Generator is already executing.");
                for (; i; )
                  try {
                    if (
                      ((e = 1),
                      r &&
                        (u =
                          2 & o[0]
                            ? r.return
                            : o[0]
                            ? r.throw || ((u = r.return) && u.call(r), 0)
                            : r.next) &&
                        !(u = u.call(r, o[1])).done)
                    )
                      return u;
                    switch (((r = 0), u && (o = [2 & o[0], u.value]), o[0])) {
                      case 0:
                      case 1:
                        u = o;
                        break;
                      case 4:
                        return i.label++, { value: o[1], done: !1 };
                      case 5:
                        i.label++, (r = o[1]), (o = [0]);
                        continue;
                      case 7:
                        (o = i.ops.pop()), i.trys.pop();
                        continue;
                      default:
                        if (
                          !(u = (u = i.trys).length > 0 && u[u.length - 1]) &&
                          (6 === o[0] || 2 === o[0])
                        ) {
                          i = 0;
                          continue;
                        }
                        if (
                          3 === o[0] &&
                          (!u || (o[1] > u[0] && o[1] < u[3]))
                        ) {
                          i.label = o[1];
                          break;
                        }
                        if (6 === o[0] && i.label < u[1]) {
                          (i.label = u[1]), (u = o);
                          break;
                        }
                        if (u && i.label < u[2]) {
                          (i.label = u[2]), i.ops.push(o);
                          break;
                        }
                        u[2] && i.ops.pop(), i.trys.pop();
                        continue;
                    }
                    o = n.call(t, i);
                  } catch (a) {
                    (o = [6, a]), (r = 0);
                  } finally {
                    e = u = 0;
                  }
                if (5 & o[0]) throw o[1];
                return { value: o[0] ? o[1] : void 0, done: !0 };
              })([o, a]);
            };
          }
        },
        h = (function () {
          function t(t) {
            (0, r.r)(this, t);
          }
          return (
            (t.prototype.render = function () {
              return (0, r.h)("nav", { class: "nav" }, (0, r.h)("slot", null));
            }),
            t
          );
        })();
      h.style =
        ".nav{display:-ms-flexbox;display:flex;-ms-flex:1 1 0%;flex:1 1 0%;-ms-flex-pack:end;justify-content:flex-end;-ms-flex-align:center;align-items:center}.nav>*{margin:0 0.5em}";
      var p = (function () {
        function t(t) {
          (0, r.r)(this, t),
            (this.handleAuthStateChange = s.d),
            (this.buttonText = a.T.SIGN_OUT);
        }
        return (
          (t.prototype.signOut = function (t) {
            return c(this, void 0, void 0, function () {
              var n;
              return f(this, function (e) {
                switch (e.label) {
                  case 0:
                    if (
                      (t && t.preventDefault(),
                      !i.g || "function" !== typeof i.g.signOut)
                    )
                      throw new Error(l.N);
                    e.label = 1;
                  case 1:
                    return e.trys.push([1, 3, , 4]), [4, i.g.signOut()];
                  case 2:
                    return (
                      e.sent(),
                      this.handleAuthStateChange(o.A.SignedOut),
                      [3, 4]
                    );
                  case 3:
                    return (n = e.sent()), (0, s.a)(n), [3, 4];
                  case 4:
                    return [2];
                }
              });
            });
          }),
          (t.prototype.render = function () {
            var t = this;
            return (0, r.h)(
              "amplify-button",
              {
                slot: "sign-out",
                onClick: function (n) {
                  return t.signOut(n);
                },
                "data-test": "sign-out-button",
              },
              u.o.get(this.buttonText)
            );
          }),
          t
        );
      })();
    },
  },
]);
