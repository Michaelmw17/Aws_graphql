(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [243],
  {
    9537: function (t, n, e) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/edit-post/[id]",
        function () {
          return e(124);
        },
      ]);
    },
    1976: function (t, n, e) {
      "use strict";
      var o = e(5893),
        r = e(7294),
        u = e(2786);
      function i(t, n) {
        if (!(t instanceof n))
          throw new TypeError("Cannot call a class as a function");
      }
      function a(t, n) {
        for (var e = 0; e < n.length; e++) {
          var o = n[e];
          (o.enumerable = o.enumerable || !1),
            (o.configurable = !0),
            "value" in o && (o.writable = !0),
            Object.defineProperty(t, o.key, o);
        }
      }
      function c(t) {
        return (c = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function (t) {
              return t.__proto__ || Object.getPrototypeOf(t);
            })(t);
      }
      function l(t, n) {
        return !n || ("object" !== p(n) && "function" !== typeof n)
          ? (function (t) {
              if (void 0 === t)
                throw new ReferenceError(
                  "this hasn't been initialised - super() hasn't been called"
                );
              return t;
            })(t)
          : n;
      }
      function s(t, n) {
        return (s =
          Object.setPrototypeOf ||
          function (t, n) {
            return (t.__proto__ = n), t;
          })(t, n);
      }
      var p = function (t) {
          return t && "undefined" !== typeof Symbol && t.constructor === Symbol
            ? "symbol"
            : typeof t;
        },
        f = (function (t) {
          function n() {
            return i(this, n), l(this, c(n).apply(this, arguments));
          }
          var e, r, p;
          return (
            (function (t, n) {
              if ("function" !== typeof n && null !== n)
                throw new TypeError(
                  "Super expression must either be null or a function"
                );
              (t.prototype = Object.create(n && n.prototype, {
                constructor: { value: t, writable: !0, configurable: !0 },
              })),
                n && s(t, n);
            })(n, t),
            (e = n),
            (r = [
              {
                key: "render",
                value: function () {
                  return (0, o.jsx)(u.ZP, {
                    value: this.props.selected,
                    onChange: this.props.onChange,
                    options: this.props.options,
                  });
                },
              },
            ]) && a(e.prototype, r),
            p && a(e, p),
            n
          );
        })(r.Component);
      n.Z = f;
    },
    1949: function (t, n, e) {
      "use strict";
      e.d(n, {
        qb: function () {
          return o;
        },
        CP: function () {
          return r;
        },
        fR: function () {
          return u;
        },
      });
      var o =
          "\n  mutation CreatePost(\n    $input: CreatePostInput!\n    $condition: ModelPostConditionInput\n  ) {\n    createPost(input: $input, condition: $condition) {\n      id\n      title\n      category\n      countries\n      select\n      date\n      createdAt\n      content\n      username\n      updatedAt\n    }\n  }\n",
        r =
          "\n  mutation UpdatePost(\n    $input: UpdatePostInput!\n    $condition: ModelPostConditionInput\n  ) {\n    updatePost(input: $input, condition: $condition) {\n      id\n      title\n      category\n      countries\n      select\n      date\n      createdAt\n      content\n      username\n      updatedAt\n    }\n  }\n",
        u =
          "\n  mutation DeletePost(\n    $input: DeletePostInput!\n    $condition: ModelPostConditionInput\n  ) {\n    deletePost(input: $input, condition: $condition) {\n      id\n      title\n      category\n      countries\n      select\n      date\n      createdAt\n      content\n      username\n      updatedAt\n    }\n  }\n";
    },
    124: function (t, n, e) {
      "use strict";
      e.r(n);
      var o = e(5666),
        r = e.n(o),
        u = e(5893),
        i = e(7294),
        a = e(2125),
        c = e(1163),
        l = e(1634),
        s = (e(9197), e(1949)),
        p = e(2788),
        f = e(1976);
      function d(t, n, e, o, r, u, i) {
        try {
          var a = t[u](i),
            c = a.value;
        } catch (l) {
          return void e(l);
        }
        a.done ? n(c) : Promise.resolve(c).then(o, r);
      }
      function b(t) {
        return function () {
          var n = this,
            e = arguments;
          return new Promise(function (o, r) {
            var u = t.apply(n, e);
            function i(t) {
              d(u, o, r, i, a, "next", t);
            }
            function a(t) {
              d(u, o, r, i, a, "throw", t);
            }
            i(void 0);
          });
        };
      }
      function h(t, n, e) {
        return (
          n in t
            ? Object.defineProperty(t, n, {
                value: e,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (t[n] = e),
          t
        );
      }
      function y(t) {
        for (var n = 1; n < arguments.length; n++) {
          var e = null != arguments[n] ? arguments[n] : {},
            o = Object.keys(e);
          "function" === typeof Object.getOwnPropertySymbols &&
            (o = o.concat(
              Object.getOwnPropertySymbols(e).filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
              })
            )),
            o.forEach(function (n) {
              h(t, n, e[n]);
            });
        }
        return t;
      }
      var m = [
          { label: "Australia" },
          { label: "New Zealand" },
          { label: "USA" },
          { label: "Italy" },
        ],
        g = [
          { label: "Sport" },
          { label: "News" },
          { label: "Weather" },
          { label: "Other" },
        ];
      n.default = function () {
        var t = function (t) {
            o(function () {
              return y({}, e, h({}, t.target.name, t.target.value));
            });
          },
          n = (0, i.useState)(null),
          e = n[0],
          o = n[1],
          d = (0, c.useRouter)(),
          v = d.query.id;
        if (
          ((0, i.useRef)(null),
          (0, i.useEffect)(
            function () {
              function t() {
                return (t = b(
                  r().mark(function t() {
                    var n;
                    return r().wrap(function (t) {
                      for (;;)
                        switch ((t.prev = t.next)) {
                          case 0:
                            if (v) {
                              t.next = 2;
                              break;
                            }
                            return t.abrupt("return");
                          case 2:
                            return (
                              (t.next = 4),
                              a.b.graphql({ query: p.xl, variables: { id: v } })
                            );
                          case 4:
                            (n = t.sent),
                              console.log("postData: ", n),
                              o(n.data.getPost);
                          case 7:
                          case "end":
                            return t.stop();
                        }
                    }, t);
                  })
                )).apply(this, arguments);
              }
              !(function () {
                t.apply(this, arguments);
              })();
            },
            [v]
          ),
          !e)
        )
          return null;
        var P = e.title,
          w = e.content,
          x = e.category,
          O = e.createdAt;
        function j() {
          return (j = b(
            r().mark(function t() {
              var n;
              return r().wrap(function (t) {
                for (;;)
                  switch ((t.prev = t.next)) {
                    case 0:
                      if (P && w && x && O) {
                        t.next = 2;
                        break;
                      }
                      return t.abrupt("return");
                    case 2:
                      return (
                        (n = {
                          id: v,
                          content: w,
                          title: P,
                          category: x,
                          createdAt: O,
                        }),
                        (t.next = 5),
                        a.b.graphql({
                          query: s.CP,
                          variables: { input: n },
                          authMode: "AMAZON_COGNITO_USER_POOLS",
                        })
                      );
                    case 5:
                      console.log("Your post successfully updated!"),
                        d.push("/my-posts");
                    case 7:
                    case "end":
                      return t.stop();
                  }
              }, t);
            })
          )).apply(this, arguments);
        }
        return (0, u.jsxs)("div", {
          children: [
            (0, u.jsx)("h1", {
              className: "text-3xl font-semibold tracking-wide mt-6 mb-2",
              children: "Edit post",
            }),
            (0, u.jsx)("input", {
              onChange: t,
              name: "title",
              placeholder: "Title",
              value: e.title,
              className:
                "border-b pb-2 text-lg my-4 focus:outline-none w-full font-light text-gray-500 placeholder-gray-500 y-2",
            }),
            (0, u.jsx)("input", {
              onChange: t,
              name: "category",
              placeholder: "Author Category",
              value: e.category,
              className:
                "border-b pb-2 text-lg my-4 focus:outline-none w-full font-light text-gray-500 placeholder-gray-500 y-2",
            }),
            (0, u.jsx)("div", {
              className: "mt-2 mb-2",
              children: (0, u.jsx)(f.Z, {
                options: m,
                name: "countries",
                onChange: function (t) {
                  return o(y({}, e, { countries: t.value }));
                },
                value: e.countries,
                className: "m-6",
                placeholder: "Countries Select...",
              }),
            }),
            (0, u.jsx)("div", {
              className: "mt-2 mb-2",
              children: (0, u.jsx)(f.Z, {
                options: g,
                name: "select",
                onChange: function (t) {
                  return o(y({}, e, { select: t }));
                },
                value: e.select,
                className: "m-6",
                placeholder: "Category Select...",
              }),
            }),
            (0, u.jsx)(l.Z, {
              value: e.content,
              onChange: function (t) {
                return o(y({}, e, { content: t }));
              },
            }),
            (0, u.jsx)("button", {
              className:
                "mb-4 bg-blue-600 text-white font-semibold px-8 py-2 rounded-lg",
              onClick: function () {
                return j.apply(this, arguments);
              },
              children: "Update Post",
            }),
          ],
        });
      };
    },
    2562: function () {},
  },
  function (t) {
    t.O(0, [126, 786, 194, 774, 888, 179], function () {
      return (n = 9537), t((t.s = n));
      var n;
    });
    var n = t.O();
    _N_E = n;
  },
]);
