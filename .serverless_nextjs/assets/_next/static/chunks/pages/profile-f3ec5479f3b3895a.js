(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [277],
  {
    1766: function (t, n, e) {
      var r = {
        "./amplify-amazon-button_5.entry.js": [2265, 265],
        "./amplify-auth-container.entry.js": [292, 292],
        "./amplify-auth-fields_9.entry.js": [3763, 763],
        "./amplify-authenticator.entry.js": [2146, 146],
        "./amplify-button_3.entry.js": [8473, 473],
        "./amplify-chatbot.entry.js": [4579, 579],
        "./amplify-checkbox.entry.js": [1523, 523],
        "./amplify-confirm-sign-in_7.entry.js": [5208, 208],
        "./amplify-container.entry.js": [4131, 131],
        "./amplify-federated-buttons_2.entry.js": [885, 885],
        "./amplify-federated-sign-in.entry.js": [7611, 611],
        "./amplify-form-field_4.entry.js": [801, 801],
        "./amplify-greetings.entry.js": [9616, 616],
        "./amplify-icon-button.entry.js": [6063, 63],
        "./amplify-icon.entry.js": [2831, 831],
        "./amplify-link.entry.js": [8870, 870],
        "./amplify-nav_2.entry.js": [9798, 798],
        "./amplify-photo-picker.entry.js": [5819, 819],
        "./amplify-picker.entry.js": [5401, 401],
        "./amplify-radio-button_3.entry.js": [2613, 613],
        "./amplify-s3-album.entry.js": [2890, 890],
        "./amplify-s3-image-picker.entry.js": [1324, 742],
        "./amplify-s3-image.entry.js": [3575, 575],
        "./amplify-s3-text-picker.entry.js": [8883, 883],
        "./amplify-s3-text.entry.js": [2678, 905],
        "./amplify-select-mfa-type.entry.js": [8384, 384],
        "./amplify-sign-in-button.entry.js": [5574, 574],
        "./amplify-tooltip.entry.js": [1223, 223],
      };
      function i(t) {
        if (!e.o(r, t))
          return Promise.resolve().then(function () {
            var n = new Error("Cannot find module '" + t + "'");
            throw ((n.code = "MODULE_NOT_FOUND"), n);
          });
        var n = r[t],
          i = n[0];
        return e.e(n[1]).then(function () {
          return e(i);
        });
      }
      (i.keys = function () {
        return Object.keys(r);
      }),
        (i.id = 1766),
        (t.exports = i);
    },
    3962: function (t, n, e) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/profile",
        function () {
          return e(8812);
        },
      ]);
    },
    8812: function (t, n, e) {
      "use strict";
      e.r(n);
      var r = e(5666),
        i = e.n(r),
        s = e(5893),
        a = e(1470),
        o = e(5194),
        f = e(531),
        l = e(7294);
      function u(t, n, e, r, i, s, a) {
        try {
          var o = t[s](a),
            f = o.value;
        } catch (l) {
          return void e(l);
        }
        o.done ? n(f) : Promise.resolve(f).then(r, i);
      }
      function y(t) {
        return function () {
          var n = this,
            e = arguments;
          return new Promise(function (r, i) {
            var s = t.apply(n, e);
            function a(t) {
              u(s, r, i, a, o, "next", t);
            }
            function o(t) {
              u(s, r, i, a, o, "throw", t);
            }
            a(void 0);
          });
        };
      }
      n.default = (0, o.Q)(function () {
        var t = (0, l.useState)(null),
          n = t[0],
          e = t[1];
        function r() {
          return (r = y(
            i().mark(function t() {
              var n;
              return i().wrap(function (t) {
                for (;;)
                  switch ((t.prev = t.next)) {
                    case 0:
                      return (t.next = 2), f.g.currentAuthenticatedUser();
                    case 2:
                      (n = t.sent), e(n);
                    case 4:
                    case "end":
                      return t.stop();
                  }
              }, t);
            })
          )).apply(this, arguments);
        }
        return (
          (0, l.useEffect)(function () {
            !(function () {
              r.apply(this, arguments);
            })();
          }, []),
          n
            ? (0, s.jsxs)("div", {
                children: [
                  (0, s.jsx)("h1", {
                    className: "text-6xl font-semibold tracking-wide mt-36",
                    children: "Profile",
                  }),
                  (0, s.jsxs)("h3", {
                    className: "text-xl font-semibold mt-2text-gray-500 my-2",
                    children: ["Username: ", n.username],
                  }),
                  (0, s.jsxs)("p", {
                    className: "text-xl font-semibold mt-2 text-gray-500 mb-6",
                    children: ["Email: ", n.attributes.email],
                  }),
                  (0, s.jsx)(a.jr, {
                    className:
                      "bg-blue-500 hover:bg-blue-700 text-white font-bold rounded focus:outline-none focus:shadow-outline",
                  }),
                ],
              })
            : null
        );
      });
    },
  },
  function (t) {
    t.O(0, [297, 774, 888, 179], function () {
      return (n = 3962), t((t.s = n));
      var n;
    });
    var n = t.O();
    _N_E = n;
  },
]);
