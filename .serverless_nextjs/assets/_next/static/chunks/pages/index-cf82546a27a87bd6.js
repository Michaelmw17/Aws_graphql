(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [405],
  {
    8581: function (e, t, n) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/",
        function () {
          return n(3678);
        },
      ]);
    },
    3678: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return f;
          },
        });
      var r = n(5666),
        s = n.n(r),
        a = n(5893),
        c = n(7294),
        i = n(1664),
        o = n(2125),
        u = n(3900),
        l = n(2788);
      function d(e, t, n, r, s, a, c) {
        try {
          var i = e[a](c),
            o = i.value;
        } catch (u) {
          return void n(u);
        }
        i.done ? t(o) : Promise.resolve(o).then(r, s);
      }
      function m(e) {
        return function () {
          var t = this,
            n = arguments;
          return new Promise(function (r, s) {
            var a = e.apply(t, n);
            function c(e) {
              d(a, r, s, c, i, "next", e);
            }
            function i(e) {
              d(a, r, s, c, i, "throw", e);
            }
            c(void 0);
          });
        };
      }
      function f() {
        var e = (0, c.useState)([]),
          t = e[0],
          n = e[1],
          r = (0, c.useState)(10),
          d = r[0],
          f = r[1],
          x = t.slice(0, d);
        function h() {
          return (h = m(
            s().mark(function e() {
              var t, r, a;
              return s().wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (e.next = 2), o.b.graphql({ query: l.aA });
                    case 2:
                      return (
                        (t = e.sent),
                        (r = t.data.listPosts.items),
                        (e.next = 6),
                        Promise.all(
                          r.map(
                            m(
                              s().mark(function e(t) {
                                return s().wrap(function (e) {
                                  for (;;)
                                    switch ((e.prev = e.next)) {
                                      case 0:
                                        if (!t.coverImage) {
                                          e.next = 4;
                                          break;
                                        }
                                        return (
                                          (e.next = 3), u.Ke.get(t.coverImage)
                                        );
                                      case 3:
                                        t.coverImage = e.sent;
                                      case 4:
                                        return e.abrupt("return", t);
                                      case 5:
                                      case "end":
                                        return e.stop();
                                    }
                                }, e);
                              })
                            )
                          )
                        )
                      );
                    case 6:
                      (a = e.sent), n(a);
                    case 8:
                    case "end":
                      return e.stop();
                  }
              }, e);
            })
          )).apply(this, arguments);
        }
        return (
          (0, c.useEffect)(function () {
            !(function () {
              h.apply(this, arguments);
            })();
          }, []),
          (0, a.jsxs)("div", {
            children: [
              (0, a.jsx)("h1", {
                className: "text-3xl font-semibold tracking-wide mt-36 mb-8",
                children: "Latest Article Page",
              }),
              x
                .sort(function (e, t) {
                  var n = e.createdAt;
                  return t.createdAt < n;
                })
                .map(function (e, t) {
                  return (0,
                  a.jsx)(i.default, { href: "/posts/".concat(e.id), passHref: !0, children: (0, a.jsx)("div", { className: "my-6 pb-6 border-b border-gray-300 ", children: (0, a.jsxs)("div", { className: "cursor-pointer mt-2", children: [(0, a.jsxs)("p", { className: "text-gray-500 font-semibold mt-2", children: ["Author: ", e.username] }), (0, a.jsxs)("h2", { className: "text-xl font-semibold mt-2", children: ["Title: ", e.title] }), (0, a.jsxs)("p", { className: "text-xl font-semibold mt-2 mb-2", children: ["Category: ", e.category] }), (0, a.jsxs)("p", { className: "text-1xl mt-2 font-semibold tracking-wide", children: ["Selected Blog Category: ", e.select] }), (0, a.jsxs)("p", { className: "text-l font-semibold", children: ["Author's Country: ", e.countries] }), (0, a.jsxs)("time", { dateTime: e.createdAt, className: "invisible", children: ["Blog gerenated date created at: ", new Date(e.createdAt).toDateString()] }), (0, a.jsx)("br", {}), (0, a.jsxs)("time", { dateTime: e.date, children: ["User date created at: ", new Date(e.date).toDateString()] }), (0, a.jsx)("br", {}), (0, a.jsx)(i.default, { href: "/posts/".concat(e.id), children: (0, a.jsx)("a", { className: "text-sm mr-4 text-blue-500", children: "View Post" }) })] }) }) }, t);
                }),
              (0, a.jsx)("div", {
                id: "fixedButton",
                children: (0, a.jsx)("button", {
                  type: "button",
                  className:
                    "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ",
                  onClick: function () {
                    f(d + 5);
                  },
                  children: "Load more posts",
                }),
              }),
            ],
          })
        );
      }
    },
  },
  function (e) {
    e.O(0, [774, 888, 179], function () {
      return (t = 8581), e((e.s = t));
      var t;
    });
    var t = e.O();
    _N_E = t;
  },
]);
