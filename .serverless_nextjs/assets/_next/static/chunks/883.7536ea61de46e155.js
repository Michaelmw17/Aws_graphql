"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [883],
  {
    8883: function (e, t, n) {
      n.r(t),
        n.d(t, {
          amplify_s3_text_picker: function () {
            return p;
          },
        });
      var r = n(2508),
        o = n(3769),
        i = n(1953),
        a = n(9277),
        u = n(8063),
        c = (n(3900), n(8194)),
        l = function (e, t, n, r) {
          return new (n || (n = Promise))(function (o, i) {
            function a(e) {
              try {
                c(r.next(e));
              } catch (t) {
                i(t);
              }
            }
            function u(e) {
              try {
                c(r.throw(e));
              } catch (t) {
                i(t);
              }
            }
            function c(e) {
              var t;
              e.done
                ? o(e.value)
                : ((t = e.value),
                  t instanceof n
                    ? t
                    : new n(function (e) {
                        e(t);
                      })).then(a, u);
            }
            c((r = r.apply(e, t || [])).next());
          });
        },
        s = function (e, t) {
          var n,
            r,
            o,
            i,
            a = {
              label: 0,
              sent: function () {
                if (1 & o[0]) throw o[1];
                return o[1];
              },
              trys: [],
              ops: [],
            };
          return (
            (i = { next: u(0), throw: u(1), return: u(2) }),
            "function" === typeof Symbol &&
              (i[Symbol.iterator] = function () {
                return this;
              }),
            i
          );
          function u(i) {
            return function (u) {
              return (function (i) {
                if (n) throw new TypeError("Generator is already executing.");
                for (; a; )
                  try {
                    if (
                      ((n = 1),
                      r &&
                        (o =
                          2 & i[0]
                            ? r.return
                            : i[0]
                            ? r.throw || ((o = r.return) && o.call(r), 0)
                            : r.next) &&
                        !(o = o.call(r, i[1])).done)
                    )
                      return o;
                    switch (((r = 0), o && (i = [2 & i[0], o.value]), i[0])) {
                      case 0:
                      case 1:
                        o = i;
                        break;
                      case 4:
                        return a.label++, { value: i[1], done: !1 };
                      case 5:
                        a.label++, (r = i[1]), (i = [0]);
                        continue;
                      case 7:
                        (i = a.ops.pop()), a.trys.pop();
                        continue;
                      default:
                        if (
                          !(o = (o = a.trys).length > 0 && o[o.length - 1]) &&
                          (6 === i[0] || 2 === i[0])
                        ) {
                          a = 0;
                          continue;
                        }
                        if (
                          3 === i[0] &&
                          (!o || (i[1] > o[0] && i[1] < o[3]))
                        ) {
                          a.label = i[1];
                          break;
                        }
                        if (6 === i[0] && a.label < o[1]) {
                          (a.label = o[1]), (o = i);
                          break;
                        }
                        if (o && a.label < o[2]) {
                          (a.label = o[2]), a.ops.push(i);
                          break;
                        }
                        o[2] && a.ops.pop(), a.trys.pop();
                        continue;
                    }
                    i = t.call(e, a);
                  } catch (u) {
                    (i = [6, u]), (r = 0);
                  } finally {
                    n = o = 0;
                  }
                if (5 & i[0]) throw i[1];
                return { value: i[0] ? i[1] : void 0, done: !0 };
              })([i, u]);
            };
          }
        },
        f = new o.k("S3TextPicker"),
        p = (function () {
          function e(e) {
            (0, r.r)(this, e),
              (this.contentType = "text/*"),
              (this.level = a.A.Public),
              (this.fallbackText = u.T.PICKER_TEXT);
          }
          return (
            (e.prototype.handleInput = function (e) {
              return l(this, void 0, void 0, function () {
                var t, n, r, o, i, a, u, l, p;
                return s(this, function (s) {
                  switch (s.label) {
                    case 0:
                      if (
                        ((t = e.target.files[0]),
                        (r = (n = this).path),
                        (o = void 0 === r ? "" : r),
                        (i = n.level),
                        (a = n.fileToKey),
                        (u = n.track),
                        (l = o + (0, c.c)(t, a)),
                        !t)
                      )
                        throw new Error("No file was selected");
                      s.label = 1;
                    case 1:
                      return (
                        s.trys.push([1, 3, , 4]),
                        [4, (0, c.p)(l, t, i, u, t.type, f)]
                      );
                    case 2:
                      return s.sent(), (this.src = l), [3, 4];
                    case 3:
                      throw ((p = s.sent()), f.debug(p), new Error(p));
                    case 4:
                      return [2];
                  }
                });
              });
            }),
            (e.prototype.render = function () {
              var e = this;
              return (0, r.h)(
                r.H,
                null,
                (0, r.h)("amplify-s3-text", {
                  textKey: this.src,
                  path: this.path,
                  level: this.level,
                  track: this.track,
                  identityId: this.identityId,
                  contentType: this.contentType,
                  fallbackText: i.o.get(this.fallbackText),
                }),
                (0, r.h)("amplify-picker", {
                  inputHandler: function (t) {
                    return e.handleInput(t);
                  },
                  acceptValue: "text/*",
                })
              );
            }),
            e
          );
        })();
    },
    8194: function (e, t, n) {
      n.d(t, {
        a: function () {
          return s;
        },
        c: function () {
          return c;
        },
        g: function () {
          return l;
        },
        i: function () {
          return u;
        },
        p: function () {
          return f;
        },
      });
      var r = n(4636),
        o = n(3900),
        i = function (e, t, n, r) {
          return new (n || (n = Promise))(function (o, i) {
            function a(e) {
              try {
                c(r.next(e));
              } catch (t) {
                i(t);
              }
            }
            function u(e) {
              try {
                c(r.throw(e));
              } catch (t) {
                i(t);
              }
            }
            function c(e) {
              var t;
              e.done
                ? o(e.value)
                : ((t = e.value),
                  t instanceof n
                    ? t
                    : new n(function (e) {
                        e(t);
                      })).then(a, u);
            }
            c((r = r.apply(e, t || [])).next());
          });
        },
        a = function (e, t) {
          var n,
            r,
            o,
            i,
            a = {
              label: 0,
              sent: function () {
                if (1 & o[0]) throw o[1];
                return o[1];
              },
              trys: [],
              ops: [],
            };
          return (
            (i = { next: u(0), throw: u(1), return: u(2) }),
            "function" === typeof Symbol &&
              (i[Symbol.iterator] = function () {
                return this;
              }),
            i
          );
          function u(i) {
            return function (u) {
              return (function (i) {
                if (n) throw new TypeError("Generator is already executing.");
                for (; a; )
                  try {
                    if (
                      ((n = 1),
                      r &&
                        (o =
                          2 & i[0]
                            ? r.return
                            : i[0]
                            ? r.throw || ((o = r.return) && o.call(r), 0)
                            : r.next) &&
                        !(o = o.call(r, i[1])).done)
                    )
                      return o;
                    switch (((r = 0), o && (i = [2 & i[0], o.value]), i[0])) {
                      case 0:
                      case 1:
                        o = i;
                        break;
                      case 4:
                        return a.label++, { value: i[1], done: !1 };
                      case 5:
                        a.label++, (r = i[1]), (i = [0]);
                        continue;
                      case 7:
                        (i = a.ops.pop()), a.trys.pop();
                        continue;
                      default:
                        if (
                          !(o = (o = a.trys).length > 0 && o[o.length - 1]) &&
                          (6 === i[0] || 2 === i[0])
                        ) {
                          a = 0;
                          continue;
                        }
                        if (
                          3 === i[0] &&
                          (!o || (i[1] > o[0] && i[1] < o[3]))
                        ) {
                          a.label = i[1];
                          break;
                        }
                        if (6 === i[0] && a.label < o[1]) {
                          (a.label = o[1]), (o = i);
                          break;
                        }
                        if (o && a.label < o[2]) {
                          (a.label = o[2]), a.ops.push(i);
                          break;
                        }
                        o[2] && a.ops.pop(), a.trys.pop();
                        continue;
                    }
                    i = t.call(e, a);
                  } catch (u) {
                    (i = [6, u]), (r = 0);
                  } finally {
                    n = o = 0;
                  }
                if (5 & i[0]) throw i[1];
                return { value: i[0] ? i[1] : void 0, done: !0 };
              })([i, u]);
            };
          }
        },
        u = new Set([
          "apng",
          "bmp",
          "gif",
          "ico",
          "cur",
          "jpg",
          "jpeg",
          "jfif",
          "pjpeg",
          "pjp",
          "png",
          "svg",
          "tif",
          "tiff",
          "webp",
        ]),
        c = function (e, t) {
          var n = e.name,
            r = e.size,
            o = e.type,
            i = encodeURI(n);
          return (
            t &&
              ((i =
                "string" === typeof t
                  ? t
                  : "function" === typeof t
                  ? t({ name: n, size: r, type: o })
                  : encodeURI(JSON.stringify(t))) ||
                (i = "empty_key")),
            i.replace(/\s/g, "_")
          );
        },
        l = function (e, t, n, u, c) {
          return i(void 0, void 0, void 0, function () {
            var i, l;
            return a(this, function (a) {
              switch (a.label) {
                case 0:
                  if (!o.Ke || "function" !== typeof o.Ke.get)
                    throw new Error(r.d);
                  a.label = 1;
                case 1:
                  return (
                    a.trys.push([1, 3, , 4]),
                    [4, o.Ke.get(e, { level: t, track: n, identityId: u })]
                  );
                case 2:
                  return (
                    (i = a.sent()), c.debug("Storage image get", i), [2, i]
                  );
                case 3:
                  throw ((l = a.sent()), new Error(l));
                case 4:
                  return [2];
              }
            });
          });
        },
        s = function (e, t, n, u, c) {
          return i(void 0, void 0, void 0, function () {
            var i, l;
            return a(this, function (a) {
              switch (a.label) {
                case 0:
                  if (!o.Ke || "function" !== typeof o.Ke.get)
                    throw new Error(r.d);
                  a.label = 1;
                case 1:
                  return (
                    a.trys.push([1, 4, , 5]),
                    [
                      4,
                      o.Ke.get(e, {
                        download: !0,
                        level: t,
                        track: n,
                        identityId: u,
                      }),
                    ]
                  );
                case 2:
                  return (
                    (i = a.sent()),
                    c.debug(i),
                    [
                      4,
                      ((s = i.Body),
                      new Promise(function (e, t) {
                        var n = new FileReader();
                        (n.onload = function () {
                          e(n.result);
                        }),
                          (n.onerror = function () {
                            t("Failed to read file!"), n.abort();
                          }),
                          n.readAsText(s);
                      })),
                    ]
                  );
                case 3:
                  return [2, a.sent()];
                case 4:
                  throw ((l = a.sent()), new Error(l));
                case 5:
                  return [2];
              }
              var s;
            });
          });
        },
        f = function (e, t, n, u, c, l) {
          return i(void 0, void 0, void 0, function () {
            var i, s;
            return a(this, function (a) {
              switch (a.label) {
                case 0:
                  if (!o.Ke || "function" !== typeof o.Ke.put)
                    throw new Error(r.d);
                  a.label = 1;
                case 1:
                  return (
                    a.trys.push([1, 3, , 4]),
                    [4, o.Ke.put(e, t, { contentType: c, level: n, track: u })]
                  );
                case 2:
                  return (i = a.sent()), l.debug("Upload data", i), [3, 4];
                case 3:
                  throw ((s = a.sent()), new Error(s));
                case 4:
                  return [2];
              }
            });
          });
        };
    },
  },
]);
