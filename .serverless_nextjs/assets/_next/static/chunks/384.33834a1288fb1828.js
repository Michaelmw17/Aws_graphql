"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [384],
  {
    8384: function (e, t, n) {
      n.r(t),
        n.d(t, {
          amplify_select_mfa_type: function () {
            return M;
          },
        });
      var i = n(2508),
        s = n(3769),
        r = n(1953),
        o = n(5573),
        a = n(531),
        u = n(8063),
        l = n(4636),
        h = function (e, t, n, i) {
          return new (n || (n = Promise))(function (s, r) {
            function o(e) {
              try {
                u(i.next(e));
              } catch (t) {
                r(t);
              }
            }
            function a(e) {
              try {
                u(i.throw(e));
              } catch (t) {
                r(t);
              }
            }
            function u(e) {
              var t;
              e.done
                ? s(e.value)
                : ((t = e.value),
                  t instanceof n
                    ? t
                    : new n(function (e) {
                        e(t);
                      })).then(o, a);
            }
            u((i = i.apply(e, t || [])).next());
          });
        },
        c = function (e, t) {
          var n,
            i,
            s,
            r,
            o = {
              label: 0,
              sent: function () {
                if (1 & s[0]) throw s[1];
                return s[1];
              },
              trys: [],
              ops: [],
            };
          return (
            (r = { next: a(0), throw: a(1), return: a(2) }),
            "function" === typeof Symbol &&
              (r[Symbol.iterator] = function () {
                return this;
              }),
            r
          );
          function a(r) {
            return function (a) {
              return (function (r) {
                if (n) throw new TypeError("Generator is already executing.");
                for (; o; )
                  try {
                    if (
                      ((n = 1),
                      i &&
                        (s =
                          2 & r[0]
                            ? i.return
                            : r[0]
                            ? i.throw || ((s = i.return) && s.call(i), 0)
                            : i.next) &&
                        !(s = s.call(i, r[1])).done)
                    )
                      return s;
                    switch (((i = 0), s && (r = [2 & r[0], s.value]), r[0])) {
                      case 0:
                      case 1:
                        s = r;
                        break;
                      case 4:
                        return o.label++, { value: r[1], done: !1 };
                      case 5:
                        o.label++, (i = r[1]), (r = [0]);
                        continue;
                      case 7:
                        (r = o.ops.pop()), o.trys.pop();
                        continue;
                      default:
                        if (
                          !(s = (s = o.trys).length > 0 && s[s.length - 1]) &&
                          (6 === r[0] || 2 === r[0])
                        ) {
                          o = 0;
                          continue;
                        }
                        if (
                          3 === r[0] &&
                          (!s || (r[1] > s[0] && r[1] < s[3]))
                        ) {
                          o.label = r[1];
                          break;
                        }
                        if (6 === r[0] && o.label < s[1]) {
                          (o.label = s[1]), (s = r);
                          break;
                        }
                        if (s && o.label < s[2]) {
                          (o.label = s[2]), o.ops.push(r);
                          break;
                        }
                        s[2] && o.ops.pop(), o.trys.pop();
                        continue;
                    }
                    r = t.call(e, o);
                  } catch (a) {
                    (r = [6, a]), (i = 0);
                  } finally {
                    n = s = 0;
                  }
                if (5 & r[0]) throw r[1];
                return { value: r[0] ? r[1] : void 0, done: !0 };
              })([r, a]);
            };
          }
        },
        T = new s.k("SelectMFAType"),
        M = (function () {
          function e(e) {
            var t = this;
            (0, i.r)(this, e),
              (this.handleSubmit = function (e) {
                return t.verify(e);
              }),
              (this.TOTPSetup = !1),
              (this.selectMessage = null),
              (this.MFAMethod = null),
              (this.isTOTP = !1),
              (this.isNoMFA = !1),
              (this.isSMS = !1),
              (this.loading = !1),
              (this.isToastVisible = !1);
          }
          return (
            (e.prototype.handleRadioButtonChange = function (e) {
              (this.TOTPSetup = !1),
                (this.selectMessage = null),
                (this.isNoMFA = !1),
                (this.isTOTP = !1),
                (this.isSMS = !1),
                (this.isToastVisible = !1);
              var t = e.target,
                n = t.value,
                i = t.type,
                s = t.checked,
                r = ["radio", "checkbox"].includes(i);
              n === o.M.SMS && r && (this.isSMS = s),
                n === o.M.TOTP && r && (this.isTOTP = s),
                n === o.M.NOMFA && r && (this.isNoMFA = s);
            }),
            (e.prototype.verify = function (e) {
              return h(this, void 0, void 0, function () {
                var t, n, i, s;
                return c(this, function (h) {
                  switch (h.label) {
                    case 0:
                      if (
                        (e && e.preventDefault(),
                        T.debug("MFA Type Values", {
                          TOTP: this.isTOTP,
                          SMS: this.isSMS,
                          "No MFA": this.isNoMFA,
                        }),
                        this.isTOTP
                          ? (this.MFAMethod = o.M.TOTP)
                          : this.isSMS
                          ? (this.MFAMethod = o.M.SMS)
                          : this.isNoMFA && (this.MFAMethod = o.M.NOMFA),
                        (t = this.authData),
                        !a.g || "function" !== typeof a.g.setPreferredMFA)
                      )
                        throw new Error(l.N);
                      (this.loading = !0), (h.label = 1);
                    case 1:
                      return (
                        h.trys.push([1, 3, 4, 5]),
                        [4, a.g.setPreferredMFA(t, this.MFAMethod)]
                      );
                    case 2:
                      return (
                        (n = h.sent()),
                        T.debug("Set Preferred MFA Succeeded", n),
                        (this.selectMessage =
                          r.o.get(u.T.SUCCESS_MFA_TYPE) + " " + this.MFAMethod),
                        [3, 5]
                      );
                    case 3:
                      return (
                        (i = h.sent()),
                        (s = i.message) === l.e || s === l.f
                          ? ((this.TOTPSetup = !0),
                            (this.selectMessage = r.o.get(
                              u.T.SETUP_TOTP_REQUIRED
                            )))
                          : (T.debug("Set Preferred MFA failed", i),
                            (this.selectMessage = r.o.get(
                              u.T.UNABLE_TO_SETUP_MFA_AT_THIS_TIME
                            ))),
                        [3, 5]
                      );
                    case 4:
                      return (
                        (this.loading = !1), (this.isToastVisible = !0), [7]
                      );
                    case 5:
                      return [2];
                  }
                });
              });
            }),
            (e.prototype.contentBuilder = function () {
              var e = this;
              if (!this.MFATypes || Object.keys(this.MFATypes).length < 2)
                return (
                  T.debug(r.o.get(u.T.LESS_THAN_TWO_MFA_VALUES_MESSAGE)),
                  (0, i.h)(
                    "div",
                    null,
                    (0, i.h)(
                      "a",
                      null,
                      r.o.get(u.T.LESS_THAN_TWO_MFA_VALUES_MESSAGE)
                    )
                  )
                );
              var t = this.MFATypes,
                n = t.SMS,
                s = t.TOTP,
                o = t.Optional;
              return (0, i.h)(
                "amplify-form-section",
                {
                  submitButtonText: r.o.get(
                    u.T.SELECT_MFA_TYPE_SUBMIT_BUTTON_TEXT
                  ),
                  headerText: r.o.get(u.T.SELECT_MFA_TYPE_HEADER_TEXT),
                  handleSubmit: function (t) {
                    return e.handleSubmit(t);
                  },
                  loading: this.loading,
                },
                n
                  ? (0, i.h)("amplify-radio-button", {
                      key: "sms",
                      name: "MFAType",
                      value: "SMS",
                      label: "SMS",
                      handleInputChange: function (t) {
                        return e.handleRadioButtonChange(t);
                      },
                    })
                  : null,
                s
                  ? (0, i.h)("amplify-radio-button", {
                      key: "totp",
                      name: "MFAType",
                      value: "TOTP",
                      label: "TOTP",
                      handleInputChange: function (t) {
                        return e.handleRadioButtonChange(t);
                      },
                    })
                  : null,
                o
                  ? (0, i.h)("amplify-radio-button", {
                      key: "noMFA",
                      name: "MFAType",
                      value: "NOMFA",
                      label: "No MFA",
                      handleInputChange: function (t) {
                        return e.handleRadioButtonChange(t);
                      },
                    })
                  : null
              );
            }),
            (e.prototype.renderToast = function () {
              var e = this;
              return this.isToastVisible && this.selectMessage
                ? (0, i.h)("amplify-toast", {
                    message: this.selectMessage,
                    handleClose: function () {
                      (e.selectMessage = null), (e.isToastVisible = !1);
                    },
                  })
                : null;
            }),
            (e.prototype.render = function () {
              return (0, i.h)(
                "div",
                null,
                this.contentBuilder(),
                this.TOTPSetup
                  ? (0, i.h)("amplify-totp-setup", { user: this.authData })
                  : null,
                this.renderToast()
              );
            }),
            e
          );
        })();
    },
  },
]);
