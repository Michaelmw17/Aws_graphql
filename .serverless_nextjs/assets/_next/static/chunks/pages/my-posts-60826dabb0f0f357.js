(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [997],
  {
    3709: function (t, e, n) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/my-posts",
        function () {
          return n(3741);
        },
      ]);
    },
    1976: function (t, e, n) {
      "use strict";
      var r = n(5893),
        o = n(7294),
        i = n(2786);
      function s(t, e) {
        if (!(t instanceof e))
          throw new TypeError("Cannot call a class as a function");
      }
      function a(t, e) {
        for (var n = 0; n < e.length; n++) {
          var r = e[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(t, r.key, r);
        }
      }
      function c(t) {
        return (c = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function (t) {
              return t.__proto__ || Object.getPrototypeOf(t);
            })(t);
      }
      function l(t, e) {
        return !e || ("object" !== d(e) && "function" !== typeof e)
          ? (function (t) {
              if (void 0 === t)
                throw new ReferenceError(
                  "this hasn't been initialised - super() hasn't been called"
                );
              return t;
            })(t)
          : e;
      }
      function u(t, e) {
        return (u =
          Object.setPrototypeOf ||
          function (t, e) {
            return (t.__proto__ = e), t;
          })(t, e);
      }
      var d = function (t) {
          return t && "undefined" !== typeof Symbol && t.constructor === Symbol
            ? "symbol"
            : typeof t;
        },
        p = (function (t) {
          function e() {
            return s(this, e), l(this, c(e).apply(this, arguments));
          }
          var n, o, d;
          return (
            (function (t, e) {
              if ("function" !== typeof e && null !== e)
                throw new TypeError(
                  "Super expression must either be null or a function"
                );
              (t.prototype = Object.create(e && e.prototype, {
                constructor: { value: t, writable: !0, configurable: !0 },
              })),
                e && u(t, e);
            })(e, t),
            (n = e),
            (o = [
              {
                key: "render",
                value: function () {
                  return (0, r.jsx)(i.ZP, {
                    value: this.props.selected,
                    onChange: this.props.onChange,
                    options: this.props.options,
                  });
                },
              },
            ]) && a(n.prototype, o),
            d && a(n, d),
            e
          );
        })(o.Component);
      e.Z = p;
    },
    1949: function (t, e, n) {
      "use strict";
      n.d(e, {
        qb: function () {
          return r;
        },
        CP: function () {
          return o;
        },
        fR: function () {
          return i;
        },
      });
      var r =
          "\n  mutation CreatePost(\n    $input: CreatePostInput!\n    $condition: ModelPostConditionInput\n  ) {\n    createPost(input: $input, condition: $condition) {\n      id\n      title\n      category\n      countries\n      select\n      date\n      createdAt\n      content\n      username\n      updatedAt\n    }\n  }\n",
        o =
          "\n  mutation UpdatePost(\n    $input: UpdatePostInput!\n    $condition: ModelPostConditionInput\n  ) {\n    updatePost(input: $input, condition: $condition) {\n      id\n      title\n      category\n      countries\n      select\n      date\n      createdAt\n      content\n      username\n      updatedAt\n    }\n  }\n",
        i =
          "\n  mutation DeletePost(\n    $input: DeletePostInput!\n    $condition: ModelPostConditionInput\n  ) {\n    deletePost(input: $input, condition: $condition) {\n      id\n      title\n      category\n      countries\n      select\n      date\n      createdAt\n      content\n      username\n      updatedAt\n    }\n  }\n";
    },
    3741: function (t, e, n) {
      "use strict";
      n.r(e),
        n.d(e, {
          default: function () {
            return S;
          },
        });
      var r = n(5893),
        o = n(7294),
        i = n(1664),
        s = (n(1976), n(5666)),
        a = n.n(s),
        c = n(2922),
        l = n(4184),
        u = n.n(l);
      function d(t, e) {
        for (var n = 0; n < e.length; n++) {
          var r = e[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(t, r.key, r);
        }
      }
      function p(t) {
        return (p = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function (t) {
              return t.__proto__ || Object.getPrototypeOf(t);
            })(t);
      }
      function f(t, e) {
        return !e || ("object" !== m(e) && "function" !== typeof e)
          ? (function (t) {
              if (void 0 === t)
                throw new ReferenceError(
                  "this hasn't been initialised - super() hasn't been called"
                );
              return t;
            })(t)
          : e;
      }
      function h(t, e) {
        return (h =
          Object.setPrototypeOf ||
          function (t, e) {
            return (t.__proto__ = e), t;
          })(t, e);
      }
      var m = function (t) {
          return t && "undefined" !== typeof Symbol && t.constructor === Symbol
            ? "symbol"
            : typeof t;
        },
        b = (function (t) {
          function e(t) {
            var n;
            return (
              (function (t, e) {
                if (!(t instanceof e))
                  throw new TypeError("Cannot call a class as a function");
              })(this, e),
              ((n = f(this, p(e).call(this, t))).handleFlip = function () {
                n.setState(function (t) {
                  return { isFlipped: !t.isFlipped };
                });
              }),
              (n.handleLevitate = function () {
                n.setState(function (t) {
                  return { isLevitated: !t.isLevitated };
                });
              }),
              (n.handleMouseEvent = function () {
                return "hover" === n.state.behavior
                  ? n.handleFlip()
                  : "click" === n.state.behavior && n.state.levitate
                  ? n.handleLevitate()
                  : void n.state.behavior;
              }),
              (n.state = {
                isFlipped: !1,
                isLevitated: !1,
                behavior: n.props.behavior ? n.props.behavior : "click",
                levitate: !!n.props.levitate && n.props.levitate,
              }),
              n
            );
          }
          var n, o, i;
          return (
            (function (t, e) {
              if ("function" !== typeof e && null !== e)
                throw new TypeError(
                  "Super expression must either be null or a function"
                );
              (t.prototype = Object.create(e && e.prototype, {
                constructor: { value: t, writable: !0, configurable: !0 },
              })),
                e && h(t, e);
            })(e, t),
            (n = e),
            (o = [
              {
                key: "render",
                value: function () {
                  var t = this,
                    e = this,
                    n = this,
                    o = { width: this.props.width, height: this.props.height },
                    i = this.props,
                    s = i.classes,
                    a = i.innerCardClass,
                    c = i.className,
                    l = this.state,
                    d = l.isFlipped,
                    p = l.isLevitated;
                  return (0, r.jsx)("div", {
                    className: u()(
                      s.rcfContainer,
                      d ? s.rcfActive : null,
                      p ? s.rcfLevitate : null,
                      c
                    ),
                    style: o,
                    onClick: function () {
                      "click" === t.state.behavior && t.handleFlip();
                    },
                    onMouseEnter: function () {
                      e.handleMouseEvent();
                    },
                    onMouseLeave: function () {
                      n.handleMouseEvent();
                    },
                    children: (0, r.jsxs)("div", {
                      className: s.rcfFlipper,
                      children: [
                        (0, r.jsx)("div", {
                          className: u()(a, s.rcfFront),
                          style: o,
                          children: this.props.children[0],
                        }),
                        (0, r.jsx)("div", {
                          className: u()(a, s.rcfBack),
                          style: o,
                          children: this.props.children[1],
                        }),
                      ],
                    }),
                  });
                },
              },
            ]) && d(n.prototype, o),
            i && d(n, i),
            e
          );
        })(o.Component),
        x = (0, c.ZP)({
          rcfContainer: {
            position: "relative",
            perspective: "1000px",
            transformStyle: "preserve-3d",
            width: "auto",
            height: "auto",
            transition: "transform 500ms cubic-bezier(.18,.45,.11,.91)",
          },
          rcfFront: {
            width: "auto",
            height: "auto",
            backfaceVisibility: "hidden",
            transformStyle: "preserve-3d",
            position: "absolute",
            top: 0,
            left: 0,
            zIndex: "2",
          },
          rcfBack: {
            width: "auto",
            height: "auto",
            backfaceVisibility: "hidden",
            transformStyle: "preserve-3d",
            position: "absolute",
            top: 0,
            left: 0,
            transform: "rotateY(180deg)",
          },
          rcfFlipper: {
            transition: "0.6s",
            transformStyle: "preserve-3d",
            position: "relative",
          },
          rcfActive: {
            "& $rcfFlipper": { transform: "rotateY(180deg) translateX(-20px)" },
          },
          rcfLevitate: {
            transform: "translateY(-15px)",
            transition: "transform 500ms cubic-bezier(.18,.45,.11,.91)",
          },
          "@media screen and (-ms-high-contrast: active), (-ms-high-contrast: none)":
            {
              rcfActive: {
                "& $rcfBack": { transform: "rotateY(0deg)" },
                "& > div": { transform: "rotateY(0deg)" },
                "& $rcfFront": { transform: "rotateY(180deg)" },
              },
              rcfFront: { transform: "rotateY(0deg)" },
              rcfBack: { transform: "rotateY(-180deg)" },
            },
        })(b),
        v = n(8624),
        y = n(2125),
        g = n(3900),
        j = n(531),
        w = n(2788),
        N = n(1949);
      function P(t, e, n, r, o, i, s) {
        try {
          var a = t[i](s),
            c = a.value;
        } catch (l) {
          return void n(l);
        }
        a.done ? e(c) : Promise.resolve(c).then(r, o);
      }
      function k(t) {
        return function () {
          var e = this,
            n = arguments;
          return new Promise(function (r, o) {
            var i = t.apply(e, n);
            function s(t) {
              P(i, r, o, s, a, "next", t);
            }
            function a(t) {
              P(i, r, o, s, a, "throw", t);
            }
            s(void 0);
          });
        };
      }
      var C = {
          title: "",
          content: "",
          category: "",
          createdAt: new Date().toISOString(),
        },
        _ = (0, c.ZP)({
          root: { display: "block", margin: "50px", position: "relative" },
          card: {
            border: "1px solid #ccc",
            borderRadius: "29px",
            padding: "10px",
            marginBottom: "50px",
            background: "RGB(180, 239, 85)",
            "-webkit-box-shadow": "0 7px 8px rgba(0, 0, 0, 0.12)",
            "-moz-box-shadow": "0 7px 8px rgba(0, 0, 0, 0.12)",
            "box-shadow": " 0 7px 8px rgba(0, 0, 0, 0.12)",
            color: "black",
          },
        })(function (t) {
          var e = t.classes,
            n = function () {
              return P.apply(this, arguments);
            },
            s = (0, o.useState)([]),
            c = s[0],
            l = s[1],
            u = (0, o.useState)(C),
            d = u[0],
            p =
              (u[1],
              u[2],
              d.title,
              d.content,
              d.category,
              d.createdAt,
              (0, o.useState)(5)),
            f = p[0],
            h = p[1],
            m = c.slice(0, f);
          function b() {
            return (b = k(
              a().mark(function t() {
                var e, n, r;
                return a().wrap(function (t) {
                  for (;;)
                    switch ((t.prev = t.next)) {
                      case 0:
                        return (t.next = 2), y.b.graphql({ query: w.aA });
                      case 2:
                        return (
                          (e = t.sent),
                          (n = e.data.listPosts.items),
                          (t.next = 6),
                          Promise.all(
                            n.map(
                              k(
                                a().mark(function t(e) {
                                  return a().wrap(function (t) {
                                    for (;;)
                                      switch ((t.prev = t.next)) {
                                        case 0:
                                          if (!e.coverImage) {
                                            t.next = 4;
                                            break;
                                          }
                                          return (
                                            (t.next = 3), g.Ke.get(e.coverImage)
                                          );
                                        case 3:
                                          e.coverImage = t.sent;
                                        case 4:
                                          return t.abrupt("return", e);
                                        case 5:
                                        case "end":
                                          return t.stop();
                                      }
                                  }, t);
                                })
                              )
                            )
                          )
                        );
                      case 6:
                        (r = t.sent), l(r);
                      case 8:
                      case "end":
                        return t.stop();
                    }
                }, t);
              })
            )).apply(this, arguments);
          }
          (0, o.useEffect)(function () {
            n();
          }, []);
          var v = (0, o.useState)(!1);
          v[0], v[1];
          function P() {
            return (P = k(
              a().mark(function t() {
                var e, n;
                return a().wrap(function (t) {
                  for (;;)
                    switch ((t.prev = t.next)) {
                      case 0:
                        return (t.next = 2), j.g.currentAuthenticatedUser();
                      case 2:
                        return (
                          (e = t.sent.username),
                          (t.next = 5),
                          y.b.graphql({
                            query: w.zu,
                            variables: { username: e },
                          })
                        );
                      case 5:
                        (n = t.sent),
                          l(n.data.postsByUsername.items),
                          console.log("console", n.data.postsByUsername.items);
                      case 8:
                      case "end":
                        return t.stop();
                    }
                }, t);
              })
            )).apply(this, arguments);
          }
          function _() {
            return (_ = k(
              a().mark(function t(e) {
                return a().wrap(function (t) {
                  for (;;)
                    switch ((t.prev = t.next)) {
                      case 0:
                        return (
                          (t.next = 2),
                          y.b.graphql({
                            query: N.fR,
                            variables: { input: { id: e } },
                            authMode: "AMAZON_COGNITO_USER_POOLS",
                          })
                        );
                      case 2:
                        n();
                      case 3:
                      case "end":
                        return t.stop();
                    }
                }, t);
              })
            )).apply(this, arguments);
          }
          return (0, r.jsxs)(r.Fragment, {
            children: [
              m.map(function (t, n) {
                return (0, r.jsx)(
                  i.default,
                  {
                    href: "/posts/".concat(t.id),
                    passHref: !0,
                    children: (0, r.jsx)("div", {
                      className: e.root,
                      children: (0, r.jsxs)(x, {
                        width: "300px",
                        height: "300px",
                        behavior: "hover",
                        className: e.root,
                        innerCardClass: e.card,
                        children: [
                          (0, r.jsx)("div", {
                            className: e.front,
                            children: (0, r.jsxs)("div", {
                              className: e.frontContent,
                              children: [
                                (0, r.jsxs)("h2", {
                                  className:
                                    "text-xl font-semibold mt-2 text-center ",
                                  children: ["Title: ", t.title],
                                }),
                                (0, r.jsxs)(
                                  "div",
                                  {
                                    className:
                                      "border-b border-gray-300 mt-8 pb-4 text-center",
                                    children: [
                                      (0, r.jsxs)("p", {
                                        className: "text-xl font-semibold mt-2",
                                        children: ["Category: ", t.category],
                                      }),
                                      (0, r.jsxs)("p", {
                                        className:
                                          "text-1xl mt-4 font-semibold tracking-wide mt-6 mb-6",
                                        children: [
                                          "Selected Category Name: ",
                                          t.select,
                                        ],
                                      }),
                                      (0, r.jsxs)("div", {
                                        className:
                                          "fixed bottom-0 w-full mb-2 mr-8",
                                        children: [
                                          (0, r.jsxs)("p", {
                                            className:
                                              "text-gray-500 font-semibold mt-2",
                                            children: [
                                              "Author Name: ",
                                              t.username,
                                            ],
                                          }),
                                          (0, r.jsxs)("p", {
                                            className: "text-l font-semibold",
                                            children: [
                                              "Author's Country: ",
                                              t.countries,
                                            ],
                                          }),
                                        ],
                                      }),
                                    ],
                                  },
                                  n
                                ),
                              ],
                            }),
                          }),
                          (0, r.jsx)("div", {
                            className: e.back,
                            children: (0, r.jsxs)("div", {
                              className: e.backContent,
                              children: [
                                (0, r.jsxs)("h2", {
                                  className:
                                    "text-xl font-semibold mt-2 text-center text-center",
                                  children: ["Title: ", t.title],
                                }),
                                (0, r.jsxs)("p", {
                                  className:
                                    "text-1xl mt-4 font-semibold tracking-wide text-center",
                                  children: [
                                    "Selected Category Name: ",
                                    t.select,
                                  ],
                                }),
                                (0, r.jsxs)("p", {
                                  className:
                                    "text-1xl mt-4 font-semibold tracking-wide text-center",
                                  children: ["Category: ", t.category],
                                }),
                                (0, r.jsxs)("div", {
                                  className:
                                    "fixed bottom-0 w-ful text-center mb-2 ml-4",
                                  children: [
                                    (0, r.jsxs)("p", {
                                      className:
                                        "text-gray-500 font-semibold mt-2",
                                      children: ["Author Name: ", t.username],
                                    }),
                                    (0, r.jsxs)("p", {
                                      className: "text-l font-semibold",
                                      children: [
                                        "Author's Country: ",
                                        t.countries,
                                      ],
                                    }),
                                    (0, r.jsxs)("time", {
                                      dateTime: t.createdAt,
                                      className: "invisible",
                                      children: [
                                        "Blog gerenated date created at: ",
                                        (0, r.jsx)("br", {}),
                                        new Date(t.createdAt).toDateString(),
                                        "+",
                                      ],
                                    }),
                                    (0, r.jsx)("br", {}),
                                    (0, r.jsxs)("time", {
                                      dateTime: t.date,
                                      children: [
                                        "User date created at: ",
                                        (0, r.jsx)("br", {}),
                                        new Date(t.date).toDateString(),
                                      ],
                                    }),
                                    (0, r.jsx)("br", {}),
                                    (0, r.jsx)(i.default, {
                                      href: "/edit-post/".concat(t.id),
                                      children: (0, r.jsx)("a", {
                                        className: "text-sm mr-4 text-blue-500",
                                        children: "Edit Post",
                                      }),
                                    }),
                                    (0, r.jsx)(i.default, {
                                      href: "/posts/".concat(t.id),
                                      children: (0, r.jsx)("a", {
                                        className: "text-sm mr-4 text-blue-500",
                                        children: "View Post",
                                      }),
                                    }),
                                    (0, r.jsx)("button", {
                                      className:
                                        "text-sm mr-4 text-red-500 bm-4",
                                      onClick: function () {
                                        return (function (t) {
                                          return _.apply(this, arguments);
                                        })(t.id);
                                      },
                                      children: "Delete Post",
                                    }),
                                  ],
                                }),
                              ],
                            }),
                          }),
                        ],
                      }),
                    }),
                  },
                  n
                );
              }),
              (0, r.jsx)("div", {
                className: "fixed bottom-0 w-full",
                children: (0, r.jsx)("button", {
                  onClick: function () {
                    h(f + f);
                  },
                  className:
                    "button bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded",
                  children: "Load More",
                }),
              }),
            ],
          });
        }),
        O = (0, v.Z)({
          root: {},
          container: {
            marginRight: "auto",
            marginLeft: "auto",
            transition: ".5s all ease",
            transform: "rotateX(10deg) scale(1)",
            perspective: "900px",
          },
        })(_);
      function S() {
        return (0, r.jsxs)("div", {
          children: [
            (0, r.jsx)("h1", {
              className: "text-3xl font-semibold tracking-wide mt-36 mb-2",
              children: "My Article Page",
            }),
            (0, r.jsx)("div", {
              className: "flex flex-wrap justify-center",
              children: (0, r.jsx)(O, {}),
            }),
          ],
        });
      }
    },
  },
  function (t) {
    t.O(0, [786, 569, 774, 888, 179], function () {
      return (e = 3709), t((t.s = e));
      var e;
    });
    var e = t.O();
    _N_E = e;
  },
]);
