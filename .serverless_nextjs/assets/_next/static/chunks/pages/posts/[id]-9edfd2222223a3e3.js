(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [646],
  {
    1369: function (e, t, n) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/posts/[id]",
        function () {
          return n(9955);
        },
      ]);
    },
    9955: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          __N_SSG: function () {
            return i;
          },
          default: function () {
            return c;
          },
        });
      var s = n(5893),
        r = (n(7294), n(1163)),
        a = n(1065),
        i = !0;
      function c(e) {
        var t = e.post;
        return (0, r.useRouter)().isFallback
          ? (0, s.jsx)("div", { children: "Loading..." })
          : (0, s.jsxs)("div", {
              children: [
                (0, s.jsxs)("h1", {
                  className:
                    "text-5xl mt-4 font-semibold tracking-wide mt-36 text-center",
                  children: ["Title: ", t.title],
                }),
                (0, s.jsxs)("h4", {
                  className:
                    "text-3xl mt-4 font-semibold tracking-wide text-center",
                  children: ["Category: ", t.category],
                }),
                (0, s.jsxs)("p", {
                  className:
                    "text-1xl mt-4 font-semibold tracking-wide text-center",
                  children: ["Selected Category Name: ", t.select],
                }),
                (0, s.jsxs)("div", {
                  className: "m-8 text-center",
                  children: [
                    "Content: ",
                    (0, s.jsx)(a.Z, {
                      className: "prose text-center",
                      children: t.content,
                    }),
                  ],
                }),
                (0, s.jsxs)("time", {
                  dateTime: t.createdAt,
                  className: "invisible",
                  children: [
                    "Blog gerenated date created at: ",
                    new Date(t.createdAt).toDateString(),
                  ],
                }),
                (0, s.jsx)("br", {}),
                (0, s.jsxs)("time", {
                  dateTime: t.date,
                  className: "text-center",
                  children: [
                    "User date created at: ",
                    new Date(t.date).toDateString(),
                  ],
                }),
                (0, s.jsxs)("p", {
                  className: "text-1xl mt-4 font-semibold tracking-wide",
                  children: ["Author's Country: ", t.countries],
                }),
                (0, s.jsxs)("p", {
                  className: "text-sm font-semibold my-4",
                  children: ["Author: ", t.username],
                }),
              ],
            });
      }
    },
  },
  function (e) {
    e.O(0, [281, 774, 888, 179], function () {
      return (t = 1369), e((e.s = t));
      var t;
    });
    var t = e.O();
    _N_E = t;
  },
]);
