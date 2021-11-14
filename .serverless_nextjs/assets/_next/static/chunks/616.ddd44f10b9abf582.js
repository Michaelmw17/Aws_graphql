"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [616],
  {
    9616: function (e, l, n) {
      n.r(l),
        n.d(l, {
          amplify_greetings: function () {
            return s;
          },
        });
      var a = n(2508),
        t = (n(5573), n(8063), n(1186)),
        s = (function () {
          function e(e) {
            (0, a.r)(this, e),
              (this.username = null),
              (this.logo = null),
              (this.handleAuthStateChange = t.d);
          }
          return (
            (e.prototype.render = function () {
              return (0, a.h)(
                "header",
                { class: "greetings" },
                (0, a.h)(
                  "span",
                  { class: "logo" },
                  (0, a.h)(
                    "slot",
                    { name: "logo" },
                    this.logo && (0, a.h)("span", null, this.logo)
                  )
                ),
                (0, a.h)(
                  "span",
                  { class: "nav" },
                  (0, a.h)(
                    "slot",
                    { name: "nav" },
                    (0, a.h)(
                      "amplify-nav",
                      null,
                      this.username &&
                        (0, a.h)(
                          "slot",
                          { name: "greetings-message" },
                          (0, a.h)("span", null, "Hello, ", this.username)
                        ),
                      (0, a.h)("amplify-sign-out", {
                        handleAuthStateChange: this.handleAuthStateChange,
                      })
                    )
                  )
                )
              );
            }),
            e
          );
        })();
      s.style =
        ":host{--background-color:var(--amplify-white);--border-color:var(--amplify-light-grey);--font-family:var(--amplify-font-family)}.greetings{display:-ms-flexbox;display:flex;border:1px solid transparent;background-color:var(--background-color);border-color:var(--border-color);padding:0.625rem;font-family:var(--font-family);-ms-flex-pack:justify;justify-content:space-between}.nav{display:-ms-flexbox;display:flex;-ms-flex-item-align:center;align-self:center}.logo{display:-ms-flexbox;display:flex;-ms-flex-item-align:center;align-self:center;justify-self:flex-start}amplify-sign-out{margin-left:1rem}";
    },
  },
]);
