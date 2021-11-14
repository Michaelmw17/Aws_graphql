"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [742],
  {
    1324: function (e, t, n) {
      n.r(t),
        n.d(t, {
          amplify_s3_image_picker: function () {
            return h;
          },
        });
      var r = n(2508),
        o = n(3769),
        i = n(1953),
        a = n(9277),
        c = n(8063),
        u = (n(3900), n(8194)),
        l = function (e, t, n, r) {
          return new (n || (n = Promise))(function (o, i) {
            function a(e) {
              try {
                u(r.next(e));
              } catch (t) {
                i(t);
              }
            }
            function c(e) {
              try {
                u(r.throw(e));
              } catch (t) {
                i(t);
              }
            }
            function u(e) {
              var t;
              e.done
                ? o(e.value)
                : ((t = e.value),
                  t instanceof n
                    ? t
                    : new n(function (e) {
                        e(t);
                      })).then(a, c);
            }
            u((r = r.apply(e, t || [])).next());
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
            (i = { next: c(0), throw: c(1), return: c(2) }),
            "function" === typeof Symbol &&
              (i[Symbol.iterator] = function () {
                return this;
              }),
            i
          );
          function c(i) {
            return function (c) {
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
                  } catch (c) {
                    (i = [6, c]), (r = 0);
                  } finally {
                    n = o = 0;
                  }
                if (5 & i[0]) throw i[1];
                return { value: i[0] ? i[1] : void 0, done: !0 };
              })([i, c]);
            };
          }
        },
        f = new o.k("S3ImagePicker"),
        h = (function () {
          function e(e) {
            var t = this;
            (0, r.r)(this, e),
              (this.contentType = "binary/octet-stream"),
              (this.level = a.A.Public),
              (this.headerTitle = c.T.IMAGE_PICKER_TITLE),
              (this.headerHint = c.T.IMAGE_PICKER_HINT),
              (this.placeholderHint = c.T.IMAGE_PICKER_PLACEHOLDER_HINT),
              (this.buttonText = c.T.IMAGE_PICKER_BUTTON_TEXT),
              (this.handlePick = function (e) {
                return l(t, void 0, void 0, function () {
                  var t, n, r, o, i, a, c, l, h, p;
                  return s(this, function (s) {
                    switch (s.label) {
                      case 0:
                        (n = (t = this).path),
                          (r = void 0 === n ? "" : n),
                          (o = t.level),
                          (i = t.track),
                          (a = t.identityId),
                          (c = t.fileToKey),
                          (l = r + (0, u.c)(e, c)),
                          (s.label = 1);
                      case 1:
                        return (
                          s.trys.push([1, 4, , 5]),
                          [4, (0, u.p)(l, e, o, i, e.type, f)]
                        );
                      case 2:
                        return (
                          s.sent(), (h = this), [4, (0, u.g)(l, o, i, a, f)]
                        );
                      case 3:
                        return (h.src = s.sent()), [3, 5];
                      case 4:
                        throw ((p = s.sent()), f.error(p), new Error(p));
                      case 5:
                        return [2];
                    }
                  });
                });
              });
          }
          return (
            (e.prototype.render = function () {
              return (0, r.h)(
                r.H,
                null,
                (0, r.h)(
                  "slot",
                  { name: "photo-picker" },
                  (0, r.h)("amplify-photo-picker", {
                    previewSrc: this.src,
                    handleClick: this.handlePick,
                    headerTitle: i.o.get(this.headerTitle),
                    headerHint: i.o.get(this.headerHint),
                    placeholderHint: i.o.get(this.placeholderHint),
                    buttonText: i.o.get(this.buttonText),
                  })
                )
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
          return u;
        },
        g: function () {
          return l;
        },
        i: function () {
          return c;
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
                u(r.next(e));
              } catch (t) {
                i(t);
              }
            }
            function c(e) {
              try {
                u(r.throw(e));
              } catch (t) {
                i(t);
              }
            }
            function u(e) {
              var t;
              e.done
                ? o(e.value)
                : ((t = e.value),
                  t instanceof n
                    ? t
                    : new n(function (e) {
                        e(t);
                      })).then(a, c);
            }
            u((r = r.apply(e, t || [])).next());
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
            (i = { next: c(0), throw: c(1), return: c(2) }),
            "function" === typeof Symbol &&
              (i[Symbol.iterator] = function () {
                return this;
              }),
            i
          );
          function c(i) {
            return function (c) {
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
                  } catch (c) {
                    (i = [6, c]), (r = 0);
                  } finally {
                    n = o = 0;
                  }
                if (5 & i[0]) throw i[1];
                return { value: i[0] ? i[1] : void 0, done: !0 };
              })([i, c]);
            };
          }
        },
        c = new Set([
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
        u = function (e, t) {
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
        l = function (e, t, n, c, u) {
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
                    [4, o.Ke.get(e, { level: t, track: n, identityId: c })]
                  );
                case 2:
                  return (
                    (i = a.sent()), u.debug("Storage image get", i), [2, i]
                  );
                case 3:
                  throw ((l = a.sent()), new Error(l));
                case 4:
                  return [2];
              }
            });
          });
        },
        s = function (e, t, n, c, u) {
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
                        identityId: c,
                      }),
                    ]
                  );
                case 2:
                  return (
                    (i = a.sent()),
                    u.debug(i),
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
        f = function (e, t, n, c, u, l) {
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
                    [4, o.Ke.put(e, t, { contentType: u, level: n, track: c })]
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
