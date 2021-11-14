(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [194],
  {
    2354: function (e, t, n) {
      "use strict";
      var i = n(4581);
      function r(e) {
        "function" === typeof (e = e || {}).codeMirrorInstance &&
        "function" === typeof e.codeMirrorInstance.defineMode
          ? (String.prototype.includes ||
              (String.prototype.includes = function () {
                return -1 !== String.prototype.indexOf.apply(this, arguments);
              }),
            e.codeMirrorInstance.defineMode("spell-checker", function (t) {
              if (!r.aff_loading) {
                r.aff_loading = !0;
                var n = new XMLHttpRequest();
                n.open(
                  "GET",
                  "https://cdn.jsdelivr.net/codemirror.spell-checker/latest/en_US.aff",
                  !0
                ),
                  (n.onload = function () {
                    4 === n.readyState &&
                      200 === n.status &&
                      ((r.aff_data = n.responseText),
                      r.num_loaded++,
                      2 == r.num_loaded &&
                        (r.typo = new i("en_US", r.aff_data, r.dic_data, {
                          platform: "any",
                        })));
                  }),
                  n.send(null);
              }
              if (!r.dic_loading) {
                r.dic_loading = !0;
                var a = new XMLHttpRequest();
                a.open(
                  "GET",
                  "https://cdn.jsdelivr.net/codemirror.spell-checker/latest/en_US.dic",
                  !0
                ),
                  (a.onload = function () {
                    4 === a.readyState &&
                      200 === a.status &&
                      ((r.dic_data = a.responseText),
                      r.num_loaded++,
                      2 == r.num_loaded &&
                        (r.typo = new i("en_US", r.aff_data, r.dic_data, {
                          platform: "any",
                        })));
                  }),
                  a.send(null);
              }
              var o = '!"#$%&()*+,-./:;<=>?@[\\]^_`{|}~ ',
                s = {
                  token: function (e) {
                    var t = e.peek(),
                      n = "";
                    if (o.includes(t)) return e.next(), null;
                    for (; null != (t = e.peek()) && !o.includes(t); )
                      (n += t), e.next();
                    return r.typo && !r.typo.check(n) ? "spell-error" : null;
                  },
                },
                l = e.codeMirrorInstance.getMode(t, t.backdrop || "text/plain");
              return e.codeMirrorInstance.overlayMode(l, s, !0);
            }))
          : console.log(
              "CodeMirror Spell Checker: You must provide an instance of CodeMirror via the option `codeMirrorInstance`"
            );
      }
      (r.num_loaded = 0),
        (r.aff_loading = !1),
        (r.dic_loading = !1),
        (r.aff_data = ""),
        (r.dic_data = ""),
        r.typo,
        (e.exports = r);
    },
    1994: function (e, t, n) {
      !(function (e) {
        "use strict";
        function t(t, i) {
          function r() {
            t.display.wrapper.offsetHeight
              ? (n(t, i),
                t.display.lastWrapHeight != t.display.wrapper.clientHeight &&
                  t.refresh())
              : (i.timeout = setTimeout(r, i.delay));
          }
          (i.timeout = setTimeout(r, i.delay)),
            (i.hurry = function () {
              clearTimeout(i.timeout), (i.timeout = setTimeout(r, 50));
            }),
            e.on(window, "mouseup", i.hurry),
            e.on(window, "keyup", i.hurry);
        }
        function n(t, n) {
          clearTimeout(n.timeout),
            e.off(window, "mouseup", n.hurry),
            e.off(window, "keyup", n.hurry);
        }
        e.defineOption("autoRefresh", !1, function (e, i) {
          e.state.autoRefresh &&
            (n(e, e.state.autoRefresh), (e.state.autoRefresh = null)),
            i &&
              0 == e.display.wrapper.offsetHeight &&
              t(e, (e.state.autoRefresh = { delay: i.delay || 250 }));
        });
      })(n(4631));
    },
    960: function (e, t, n) {
      !(function (e) {
        "use strict";
        function t(e) {
          var t = e.getWrapperElement();
          (e.state.fullScreenRestore = {
            scrollTop: window.pageYOffset,
            scrollLeft: window.pageXOffset,
            width: t.style.width,
            height: t.style.height,
          }),
            (t.style.width = ""),
            (t.style.height = "auto"),
            (t.className += " CodeMirror-fullscreen"),
            (document.documentElement.style.overflow = "hidden"),
            e.refresh();
        }
        function n(e) {
          var t = e.getWrapperElement();
          (t.className = t.className.replace(/\s*CodeMirror-fullscreen\b/, "")),
            (document.documentElement.style.overflow = "");
          var n = e.state.fullScreenRestore;
          (t.style.width = n.width),
            (t.style.height = n.height),
            window.scrollTo(n.scrollLeft, n.scrollTop),
            e.refresh();
        }
        e.defineOption("fullScreen", !1, function (i, r, a) {
          a == e.Init && (a = !1), !a != !r && (r ? t(i) : n(i));
        });
      })(n(4631));
    },
    8386: function (e, t, n) {
      !(function (e) {
        function t(e) {
          e.state.placeholder &&
            (e.state.placeholder.parentNode.removeChild(e.state.placeholder),
            (e.state.placeholder = null));
        }
        function n(e) {
          t(e);
          var n = (e.state.placeholder = document.createElement("pre"));
          (n.style.cssText = "height: 0; overflow: visible"),
            (n.style.direction = e.getOption("direction")),
            (n.className = "CodeMirror-placeholder CodeMirror-line-like");
          var i = e.getOption("placeholder");
          "string" == typeof i && (i = document.createTextNode(i)),
            n.appendChild(i),
            e.display.lineSpace.insertBefore(n, e.display.lineSpace.firstChild);
        }
        function i(e) {
          setTimeout(function () {
            var i = !1;
            if (1 == e.lineCount()) {
              var r = e.getInputField();
              i =
                "TEXTAREA" == r.nodeName
                  ? !e.getLine(0).length
                  : !/[^\u200b]/.test(
                      r.querySelector(".CodeMirror-line").textContent
                    );
            }
            i ? n(e) : t(e);
          }, 20);
        }
        function r(e) {
          o(e) && n(e);
        }
        function a(e) {
          var i = e.getWrapperElement(),
            r = o(e);
          (i.className =
            i.className.replace(" CodeMirror-empty", "") +
            (r ? " CodeMirror-empty" : "")),
            r ? n(e) : t(e);
        }
        function o(e) {
          return 1 === e.lineCount() && "" === e.getLine(0);
        }
        e.defineOption("placeholder", "", function (n, o, s) {
          var l = s && s != e.Init;
          if (o && !l)
            n.on("blur", r),
              n.on("change", a),
              n.on("swapDoc", a),
              e.on(
                n.getInputField(),
                "compositionupdate",
                (n.state.placeholderCompose = function () {
                  i(n);
                })
              ),
              a(n);
          else if (!o && l) {
            n.off("blur", r),
              n.off("change", a),
              n.off("swapDoc", a),
              e.off(
                n.getInputField(),
                "compositionupdate",
                n.state.placeholderCompose
              ),
              t(n);
            var u = n.getWrapperElement();
            u.className = u.className.replace(" CodeMirror-empty", "");
          }
          o && !n.hasFocus() && r(n);
        });
      })(n(4631));
    },
    3350: function (e, t, n) {
      !(function (e) {
        "use strict";
        var t = /^(\s*)(>[> ]*|[*+-] \[[x ]\]\s|[*+-]\s|(\d+)([.)]))(\s*)/,
          n = /^(\s*)(>[> ]*|[*+-] \[[x ]\]|[*+-]|(\d+)[.)])(\s*)$/,
          i = /[*+-]\s/;
        function r(e, n) {
          var i = n.line,
            r = 0,
            a = 0,
            o = t.exec(e.getLine(i)),
            s = o[1];
          do {
            var l = i + (r += 1),
              u = e.getLine(l),
              c = t.exec(u);
            if (c) {
              var m = c[1],
                d = parseInt(o[3], 10) + r - a,
                p = parseInt(c[3], 10),
                h = p;
              if (s !== m || isNaN(p)) {
                if (s.length > m.length) return;
                if (s.length < m.length && 1 === r) return;
                a += 1;
              } else
                d === p && (h = p + 1),
                  d > p && (h = d + 1),
                  e.replaceRange(
                    u.replace(t, m + h + c[4] + c[5]),
                    { line: l, ch: 0 },
                    { line: l, ch: u.length }
                  );
            }
          } while (c);
        }
        e.commands.newlineAndIndentContinueMarkdownList = function (a) {
          if (a.getOption("disableInput")) return e.Pass;
          for (var o = a.listSelections(), s = [], l = 0; l < o.length; l++) {
            var u = o[l].head,
              c = a.getStateAfter(u.line),
              m = e.innerMode(a.getMode(), c);
            if ("markdown" !== m.mode.name)
              return void a.execCommand("newlineAndIndent");
            var d = !1 !== (c = m.state).list,
              p = 0 !== c.quote,
              h = a.getLine(u.line),
              f = t.exec(h),
              g = /^\s*$/.test(h.slice(0, u.ch));
            if (!o[l].empty() || (!d && !p) || !f || g)
              return void a.execCommand("newlineAndIndent");
            if (n.test(h)) {
              var D = p && />\s*$/.test(h),
                x = !/>\s*$/.test(h);
              (D || x) &&
                a.replaceRange(
                  "",
                  { line: u.line, ch: 0 },
                  { line: u.line, ch: u.ch + 1 }
                ),
                (s[l] = "\n");
            } else {
              var v = f[1],
                k = f[5],
                b = !(i.test(f[2]) || f[2].indexOf(">") >= 0),
                C = b ? parseInt(f[3], 10) + 1 + f[4] : f[2].replace("x", " ");
              (s[l] = "\n" + v + C + k), b && r(a, u);
            }
          }
          a.replaceSelections(s);
        };
      })(n(4631));
    },
    4146: function (e, t, n) {
      !(function (e) {
        "use strict";
        e.overlayMode = function (t, n, i) {
          return {
            startState: function () {
              return {
                base: e.startState(t),
                overlay: e.startState(n),
                basePos: 0,
                baseCur: null,
                overlayPos: 0,
                overlayCur: null,
                streamSeen: null,
              };
            },
            copyState: function (i) {
              return {
                base: e.copyState(t, i.base),
                overlay: e.copyState(n, i.overlay),
                basePos: i.basePos,
                baseCur: null,
                overlayPos: i.overlayPos,
                overlayCur: null,
              };
            },
            token: function (e, r) {
              return (
                (e != r.streamSeen ||
                  Math.min(r.basePos, r.overlayPos) < e.start) &&
                  ((r.streamSeen = e), (r.basePos = r.overlayPos = e.start)),
                e.start == r.basePos &&
                  ((r.baseCur = t.token(e, r.base)), (r.basePos = e.pos)),
                e.start == r.overlayPos &&
                  ((e.pos = e.start),
                  (r.overlayCur = n.token(e, r.overlay)),
                  (r.overlayPos = e.pos)),
                (e.pos = Math.min(r.basePos, r.overlayPos)),
                null == r.overlayCur
                  ? r.baseCur
                  : (null != r.baseCur && r.overlay.combineTokens) ||
                    (i && null == r.overlay.combineTokens)
                  ? r.baseCur + " " + r.overlayCur
                  : r.overlayCur
              );
            },
            indent:
              t.indent &&
              function (e, n, i) {
                return t.indent(e.base, n, i);
              },
            electricChars: t.electricChars,
            innerMode: function (e) {
              return { state: e.base, mode: t };
            },
            blankLine: function (e) {
              var r, a;
              return (
                t.blankLine && (r = t.blankLine(e.base)),
                n.blankLine && (a = n.blankLine(e.overlay)),
                null == a ? r : i && null != r ? r + " " + a : a
              );
            },
          };
        };
      })(n(4631));
    },
    2095: function (e, t, n) {
      !(function (e) {
        "use strict";
        var t,
          n,
          i = e.Pos;
        function r(e) {
          var t = e.flags;
          return null != t
            ? t
            : (e.ignoreCase ? "i" : "") +
                (e.global ? "g" : "") +
                (e.multiline ? "m" : "");
        }
        function a(e, t) {
          for (var n = r(e), i = n, a = 0; a < t.length; a++)
            -1 == i.indexOf(t.charAt(a)) && (i += t.charAt(a));
          return n == i ? e : new RegExp(e.source, i);
        }
        function o(e) {
          return /\\s|\\n|\n|\\W|\\D|\[\^/.test(e.source);
        }
        function s(e, t, n) {
          t = a(t, "g");
          for (var r = n.line, o = n.ch, s = e.lastLine(); r <= s; r++, o = 0) {
            t.lastIndex = o;
            var l = e.getLine(r),
              u = t.exec(l);
            if (u)
              return {
                from: i(r, u.index),
                to: i(r, u.index + u[0].length),
                match: u,
              };
          }
        }
        function l(e, t, n) {
          if (!o(t)) return s(e, t, n);
          t = a(t, "gm");
          for (var r, l = 1, u = n.line, c = e.lastLine(); u <= c; ) {
            for (var m = 0; m < l && !(u > c); m++) {
              var d = e.getLine(u++);
              r = null == r ? d : r + "\n" + d;
            }
            (l *= 2), (t.lastIndex = n.ch);
            var p = t.exec(r);
            if (p) {
              var h = r.slice(0, p.index).split("\n"),
                f = p[0].split("\n"),
                g = n.line + h.length - 1,
                D = h[h.length - 1].length;
              return {
                from: i(g, D),
                to: i(
                  g + f.length - 1,
                  1 == f.length ? D + f[0].length : f[f.length - 1].length
                ),
                match: p,
              };
            }
          }
        }
        function u(e, t, n) {
          for (var i, r = 0; r <= e.length; ) {
            t.lastIndex = r;
            var a = t.exec(e);
            if (!a) break;
            var o = a.index + a[0].length;
            if (o > e.length - n) break;
            (!i || o > i.index + i[0].length) && (i = a), (r = a.index + 1);
          }
          return i;
        }
        function c(e, t, n) {
          t = a(t, "g");
          for (
            var r = n.line, o = n.ch, s = e.firstLine();
            r >= s;
            r--, o = -1
          ) {
            var l = e.getLine(r),
              c = u(l, t, o < 0 ? 0 : l.length - o);
            if (c)
              return {
                from: i(r, c.index),
                to: i(r, c.index + c[0].length),
                match: c,
              };
          }
        }
        function m(e, t, n) {
          if (!o(t)) return c(e, t, n);
          t = a(t, "gm");
          for (
            var r,
              s = 1,
              l = e.getLine(n.line).length - n.ch,
              m = n.line,
              d = e.firstLine();
            m >= d;

          ) {
            for (var p = 0; p < s && m >= d; p++) {
              var h = e.getLine(m--);
              r = null == r ? h : h + "\n" + r;
            }
            s *= 2;
            var f = u(r, t, l);
            if (f) {
              var g = r.slice(0, f.index).split("\n"),
                D = f[0].split("\n"),
                x = m + g.length,
                v = g[g.length - 1].length;
              return {
                from: i(x, v),
                to: i(
                  x + D.length - 1,
                  1 == D.length ? v + D[0].length : D[D.length - 1].length
                ),
                match: f,
              };
            }
          }
        }
        function d(e, t, n, i) {
          if (e.length == t.length) return n;
          for (var r = 0, a = n + Math.max(0, e.length - t.length); ; ) {
            if (r == a) return r;
            var o = (r + a) >> 1,
              s = i(e.slice(0, o)).length;
            if (s == n) return o;
            s > n ? (a = o) : (r = o + 1);
          }
        }
        function p(e, r, a, o) {
          if (!r.length) return null;
          var s = o ? t : n,
            l = s(r).split(/\r|\n\r?/);
          e: for (
            var u = a.line, c = a.ch, m = e.lastLine() + 1 - l.length;
            u <= m;
            u++, c = 0
          ) {
            var p = e.getLine(u).slice(c),
              h = s(p);
            if (1 == l.length) {
              var f = h.indexOf(l[0]);
              if (-1 == f) continue e;
              return (
                (a = d(p, h, f, s) + c),
                {
                  from: i(u, d(p, h, f, s) + c),
                  to: i(u, d(p, h, f + l[0].length, s) + c),
                }
              );
            }
            var g = h.length - l[0].length;
            if (h.slice(g) == l[0]) {
              for (var D = 1; D < l.length - 1; D++)
                if (s(e.getLine(u + D)) != l[D]) continue e;
              var x = e.getLine(u + l.length - 1),
                v = s(x),
                k = l[l.length - 1];
              if (v.slice(0, k.length) == k)
                return {
                  from: i(u, d(p, h, g, s) + c),
                  to: i(u + l.length - 1, d(x, v, k.length, s)),
                };
            }
          }
        }
        function h(e, r, a, o) {
          if (!r.length) return null;
          var s = o ? t : n,
            l = s(r).split(/\r|\n\r?/);
          e: for (
            var u = a.line, c = a.ch, m = e.firstLine() - 1 + l.length;
            u >= m;
            u--, c = -1
          ) {
            var p = e.getLine(u);
            c > -1 && (p = p.slice(0, c));
            var h = s(p);
            if (1 == l.length) {
              var f = h.lastIndexOf(l[0]);
              if (-1 == f) continue e;
              return {
                from: i(u, d(p, h, f, s)),
                to: i(u, d(p, h, f + l[0].length, s)),
              };
            }
            var g = l[l.length - 1];
            if (h.slice(0, g.length) == g) {
              var D = 1;
              for (a = u - l.length + 1; D < l.length - 1; D++)
                if (s(e.getLine(a + D)) != l[D]) continue e;
              var x = e.getLine(u + 1 - l.length),
                v = s(x);
              if (v.slice(v.length - l[0].length) == l[0])
                return {
                  from: i(u + 1 - l.length, d(x, v, x.length - l[0].length, s)),
                  to: i(u, d(p, h, g.length, s)),
                };
            }
          }
        }
        function f(e, t, n, r) {
          var o;
          (this.atOccurrence = !1),
            (this.afterEmptyMatch = !1),
            (this.doc = e),
            (n = n ? e.clipPos(n) : i(0, 0)),
            (this.pos = { from: n, to: n }),
            "object" == typeof r ? (o = r.caseFold) : ((o = r), (r = null)),
            "string" == typeof t
              ? (null == o && (o = !1),
                (this.matches = function (n, i) {
                  return (n ? h : p)(e, t, i, o);
                }))
              : ((t = a(t, "gm")),
                r && !1 === r.multiline
                  ? (this.matches = function (n, i) {
                      return (n ? c : s)(e, t, i);
                    })
                  : (this.matches = function (n, i) {
                      return (n ? m : l)(e, t, i);
                    }));
        }
        String.prototype.normalize
          ? ((t = function (e) {
              return e.normalize("NFD").toLowerCase();
            }),
            (n = function (e) {
              return e.normalize("NFD");
            }))
          : ((t = function (e) {
              return e.toLowerCase();
            }),
            (n = function (e) {
              return e;
            })),
          (f.prototype = {
            findNext: function () {
              return this.find(!1);
            },
            findPrevious: function () {
              return this.find(!0);
            },
            find: function (t) {
              var n = this.doc.clipPos(t ? this.pos.from : this.pos.to);
              if (
                this.afterEmptyMatch &&
                this.atOccurrence &&
                ((n = i(n.line, n.ch)),
                t
                  ? (n.ch--,
                    n.ch < 0 &&
                      (n.line--,
                      (n.ch = (this.doc.getLine(n.line) || "").length)))
                  : (n.ch++,
                    n.ch > (this.doc.getLine(n.line) || "").length &&
                      ((n.ch = 0), n.line++)),
                0 != e.cmpPos(n, this.doc.clipPos(n)))
              )
                return (this.atOccurrence = !1);
              var r = this.matches(t, n);
              if (
                ((this.afterEmptyMatch = r && 0 == e.cmpPos(r.from, r.to)), r)
              )
                return (
                  (this.pos = r), (this.atOccurrence = !0), this.pos.match || !0
                );
              var a = i(t ? this.doc.firstLine() : this.doc.lastLine() + 1, 0);
              return (this.pos = { from: a, to: a }), (this.atOccurrence = !1);
            },
            from: function () {
              if (this.atOccurrence) return this.pos.from;
            },
            to: function () {
              if (this.atOccurrence) return this.pos.to;
            },
            replace: function (t, n) {
              if (this.atOccurrence) {
                var r = e.splitLines(t);
                this.doc.replaceRange(r, this.pos.from, this.pos.to, n),
                  (this.pos.to = i(
                    this.pos.from.line + r.length - 1,
                    r[r.length - 1].length +
                      (1 == r.length ? this.pos.from.ch : 0)
                  ));
              }
            },
          }),
          e.defineExtension("getSearchCursor", function (e, t, n) {
            return new f(this.doc, e, t, n);
          }),
          e.defineDocExtension("getSearchCursor", function (e, t, n) {
            return new f(this, e, t, n);
          }),
          e.defineExtension("selectMatches", function (t, n) {
            for (
              var i = [],
                r = this.getSearchCursor(t, this.getCursor("from"), n);
              r.findNext() && !(e.cmpPos(r.to(), this.getCursor("to")) > 0);

            )
              i.push({ anchor: r.from(), head: r.to() });
            i.length && this.setSelections(i, 0);
          });
      })(n(4631));
    },
    4020: function (e, t, n) {
      !(function (e) {
        "use strict";
        function t(e) {
          e.state.markedSelection &&
            e.operation(function () {
              u(e);
            });
        }
        function n(e) {
          e.state.markedSelection &&
            e.state.markedSelection.length &&
            e.operation(function () {
              s(e);
            });
        }
        e.defineOption("styleSelectedText", !1, function (i, r, a) {
          var o = a && a != e.Init;
          r && !o
            ? ((i.state.markedSelection = []),
              (i.state.markedSelectionStyle =
                "string" == typeof r ? r : "CodeMirror-selectedtext"),
              l(i),
              i.on("cursorActivity", t),
              i.on("change", n))
            : !r &&
              o &&
              (i.off("cursorActivity", t),
              i.off("change", n),
              s(i),
              (i.state.markedSelection = i.state.markedSelectionStyle = null));
        });
        var i = 8,
          r = e.Pos,
          a = e.cmpPos;
        function o(e, t, n, o) {
          if (0 != a(t, n))
            for (
              var s = e.state.markedSelection,
                l = e.state.markedSelectionStyle,
                u = t.line;
              ;

            ) {
              var c = u == t.line ? t : r(u, 0),
                m = u + i,
                d = m >= n.line,
                p = d ? n : r(m, 0),
                h = e.markText(c, p, { className: l });
              if ((null == o ? s.push(h) : s.splice(o++, 0, h), d)) break;
              u = m;
            }
        }
        function s(e) {
          for (var t = e.state.markedSelection, n = 0; n < t.length; ++n)
            t[n].clear();
          t.length = 0;
        }
        function l(e) {
          s(e);
          for (var t = e.listSelections(), n = 0; n < t.length; n++)
            o(e, t[n].from(), t[n].to());
        }
        function u(e) {
          if (!e.somethingSelected()) return s(e);
          if (e.listSelections().length > 1) return l(e);
          var t = e.getCursor("start"),
            n = e.getCursor("end"),
            r = e.state.markedSelection;
          if (!r.length) return o(e, t, n);
          var u = r[0].find(),
            c = r[r.length - 1].find();
          if (
            !u ||
            !c ||
            n.line - t.line <= i ||
            a(t, c.to) >= 0 ||
            a(n, u.from) <= 0
          )
            return l(e);
          for (; a(t, u.from) > 0; ) r.shift().clear(), (u = r[0].find());
          for (
            a(t, u.from) < 0 &&
            (u.to.line - t.line < i
              ? (r.shift().clear(), o(e, t, u.to, 0))
              : o(e, t, u.from, 0));
            a(n, c.to) < 0;

          )
            r.pop().clear(), (c = r[r.length - 1].find());
          a(n, c.to) > 0 &&
            (n.line - c.from.line < i
              ? (r.pop().clear(), o(e, c.from, n))
              : o(e, c.to, n));
        }
      })(n(4631));
    },
    2425: function (e, t, n) {
      !(function (e) {
        "use strict";
        var t =
          /^((?:(?:aaas?|about|acap|adiumxtra|af[ps]|aim|apt|attachment|aw|beshare|bitcoin|bolo|callto|cap|chrome(?:-extension)?|cid|coap|com-eventbrite-attendee|content|crid|cvs|data|dav|dict|dlna-(?:playcontainer|playsingle)|dns|doi|dtn|dvb|ed2k|facetime|feed|file|finger|fish|ftp|geo|gg|git|gizmoproject|go|gopher|gtalk|h323|hcp|https?|iax|icap|icon|im|imap|info|ipn|ipp|irc[6s]?|iris(?:\.beep|\.lwz|\.xpc|\.xpcs)?|itms|jar|javascript|jms|keyparc|lastfm|ldaps?|magnet|mailto|maps|market|message|mid|mms|ms-help|msnim|msrps?|mtqp|mumble|mupdate|mvn|news|nfs|nih?|nntp|notes|oid|opaquelocktoken|palm|paparazzi|platform|pop|pres|proxy|psyc|query|res(?:ource)?|rmi|rsync|rtmp|rtsp|secondlife|service|session|sftp|sgn|shttp|sieve|sips?|skype|sm[bs]|snmp|soap\.beeps?|soldat|spotify|ssh|steam|svn|tag|teamspeak|tel(?:net)?|tftp|things|thismessage|tip|tn3270|tv|udp|unreal|urn|ut2004|vemmi|ventrilo|view-source|webcal|wss?|wtai|wyciwyg|xcon(?:-userid)?|xfire|xmlrpc\.beeps?|xmpp|xri|ymsgr|z39\.50[rs]?):(?:\/{1,3}|[a-z0-9%])|www\d{0,3}[.]|[a-z0-9.\-]+[.][a-z]{2,4}\/)(?:[^\s()<>]|\([^\s()<>]*\))+(?:\([^\s()<>]*\)|[^\s`*!()\[\]{};:'".,<>?\xab\xbb\u201c\u201d\u2018\u2019]))/i;
        e.defineMode(
          "gfm",
          function (n, i) {
            var r = 0;
            function a(e) {
              return (e.code = !1), null;
            }
            var o = {
                startState: function () {
                  return { code: !1, codeBlock: !1, ateSpace: !1 };
                },
                copyState: function (e) {
                  return {
                    code: e.code,
                    codeBlock: e.codeBlock,
                    ateSpace: e.ateSpace,
                  };
                },
                token: function (e, n) {
                  if (((n.combineTokens = null), n.codeBlock))
                    return e.match(/^```+/)
                      ? ((n.codeBlock = !1), null)
                      : (e.skipToEnd(), null);
                  if ((e.sol() && (n.code = !1), e.sol() && e.match(/^```+/)))
                    return e.skipToEnd(), (n.codeBlock = !0), null;
                  if ("`" === e.peek()) {
                    e.next();
                    var a = e.pos;
                    e.eatWhile("`");
                    var o = 1 + e.pos - a;
                    return (
                      n.code
                        ? o === r && (n.code = !1)
                        : ((r = o), (n.code = !0)),
                      null
                    );
                  }
                  if (n.code) return e.next(), null;
                  if (e.eatSpace()) return (n.ateSpace = !0), null;
                  if (
                    (e.sol() || n.ateSpace) &&
                    ((n.ateSpace = !1), !1 !== i.gitHubSpice)
                  ) {
                    if (
                      e.match(
                        /^(?:[a-zA-Z0-9\-_]+\/)?(?:[a-zA-Z0-9\-_]+@)?(?=.{0,6}\d)(?:[a-f0-9]{7,40}\b)/
                      )
                    )
                      return (n.combineTokens = !0), "link";
                    if (
                      e.match(
                        /^(?:[a-zA-Z0-9\-_]+\/)?(?:[a-zA-Z0-9\-_]+)?#[0-9]+\b/
                      )
                    )
                      return (n.combineTokens = !0), "link";
                  }
                  return e.match(t) &&
                    "](" != e.string.slice(e.start - 2, e.start) &&
                    (0 == e.start || /\W/.test(e.string.charAt(e.start - 1)))
                    ? ((n.combineTokens = !0), "link")
                    : (e.next(), null);
                },
                blankLine: a,
              },
              s = { taskLists: !0, strikethrough: !0, emoji: !0 };
            for (var l in i) s[l] = i[l];
            return (s.name = "markdown"), e.overlayMode(e.getMode(n, s), o);
          },
          "markdown"
        ),
          e.defineMIME("text/x-gfm", "gfm");
      })(n(4631), n(9047), n(4146));
    },
    9047: function (e, t, n) {
      !(function (e) {
        "use strict";
        e.defineMode(
          "markdown",
          function (t, n) {
            var i = e.getMode(t, "text/html"),
              r = "null" == i.name;
            function a(n) {
              if (e.findModeByName) {
                var i = e.findModeByName(n);
                i && (n = i.mime || i.mimes[0]);
              }
              var r = e.getMode(t, n);
              return "null" == r.name ? null : r;
            }
            void 0 === n.highlightFormatting && (n.highlightFormatting = !1),
              void 0 === n.maxBlockquoteDepth && (n.maxBlockquoteDepth = 0),
              void 0 === n.taskLists && (n.taskLists = !1),
              void 0 === n.strikethrough && (n.strikethrough = !1),
              void 0 === n.emoji && (n.emoji = !1),
              void 0 === n.fencedCodeBlockHighlighting &&
                (n.fencedCodeBlockHighlighting = !0),
              void 0 === n.fencedCodeBlockDefaultMode &&
                (n.fencedCodeBlockDefaultMode = "text/plain"),
              void 0 === n.xml && (n.xml = !0),
              void 0 === n.tokenTypeOverrides && (n.tokenTypeOverrides = {});
            var o = {
              header: "header",
              code: "comment",
              quote: "quote",
              list1: "variable-2",
              list2: "variable-3",
              list3: "keyword",
              hr: "hr",
              image: "image",
              imageAltText: "image-alt-text",
              imageMarker: "image-marker",
              formatting: "formatting",
              linkInline: "link",
              linkEmail: "link",
              linkText: "link",
              linkHref: "string",
              em: "em",
              strong: "strong",
              strikethrough: "strikethrough",
              emoji: "builtin",
            };
            for (var s in o)
              o.hasOwnProperty(s) &&
                n.tokenTypeOverrides[s] &&
                (o[s] = n.tokenTypeOverrides[s]);
            var l = /^([*\-_])(?:\s*\1){2,}\s*$/,
              u = /^(?:[*\-+]|^[0-9]+([.)]))\s+/,
              c = /^\[(x| )\](?=\s)/i,
              m = n.allowAtxHeaderWithoutSpace ? /^(#+)/ : /^(#+)(?: |$)/,
              d = /^ {0,3}(?:\={1,}|-{2,})\s*$/,
              p = /^[^#!\[\]*_\\<>` "'(~:]+/,
              h = /^(~~~+|```+)[ \t]*([\w\/+#-]*)[^\n`]*$/,
              f = /^\s*\[[^\]]+?\]:.*$/,
              g =
                /[!"#$%&'()*+,\-.\/:;<=>?@\[\\\]^_`{|}~\xA1\xA7\xAB\xB6\xB7\xBB\xBF\u037E\u0387\u055A-\u055F\u0589\u058A\u05BE\u05C0\u05C3\u05C6\u05F3\u05F4\u0609\u060A\u060C\u060D\u061B\u061E\u061F\u066A-\u066D\u06D4\u0700-\u070D\u07F7-\u07F9\u0830-\u083E\u085E\u0964\u0965\u0970\u0AF0\u0DF4\u0E4F\u0E5A\u0E5B\u0F04-\u0F12\u0F14\u0F3A-\u0F3D\u0F85\u0FD0-\u0FD4\u0FD9\u0FDA\u104A-\u104F\u10FB\u1360-\u1368\u1400\u166D\u166E\u169B\u169C\u16EB-\u16ED\u1735\u1736\u17D4-\u17D6\u17D8-\u17DA\u1800-\u180A\u1944\u1945\u1A1E\u1A1F\u1AA0-\u1AA6\u1AA8-\u1AAD\u1B5A-\u1B60\u1BFC-\u1BFF\u1C3B-\u1C3F\u1C7E\u1C7F\u1CC0-\u1CC7\u1CD3\u2010-\u2027\u2030-\u2043\u2045-\u2051\u2053-\u205E\u207D\u207E\u208D\u208E\u2308-\u230B\u2329\u232A\u2768-\u2775\u27C5\u27C6\u27E6-\u27EF\u2983-\u2998\u29D8-\u29DB\u29FC\u29FD\u2CF9-\u2CFC\u2CFE\u2CFF\u2D70\u2E00-\u2E2E\u2E30-\u2E42\u3001-\u3003\u3008-\u3011\u3014-\u301F\u3030\u303D\u30A0\u30FB\uA4FE\uA4FF\uA60D-\uA60F\uA673\uA67E\uA6F2-\uA6F7\uA874-\uA877\uA8CE\uA8CF\uA8F8-\uA8FA\uA8FC\uA92E\uA92F\uA95F\uA9C1-\uA9CD\uA9DE\uA9DF\uAA5C-\uAA5F\uAADE\uAADF\uAAF0\uAAF1\uABEB\uFD3E\uFD3F\uFE10-\uFE19\uFE30-\uFE52\uFE54-\uFE61\uFE63\uFE68\uFE6A\uFE6B\uFF01-\uFF03\uFF05-\uFF0A\uFF0C-\uFF0F\uFF1A\uFF1B\uFF1F\uFF20\uFF3B-\uFF3D\uFF3F\uFF5B\uFF5D\uFF5F-\uFF65]|\uD800[\uDD00-\uDD02\uDF9F\uDFD0]|\uD801\uDD6F|\uD802[\uDC57\uDD1F\uDD3F\uDE50-\uDE58\uDE7F\uDEF0-\uDEF6\uDF39-\uDF3F\uDF99-\uDF9C]|\uD804[\uDC47-\uDC4D\uDCBB\uDCBC\uDCBE-\uDCC1\uDD40-\uDD43\uDD74\uDD75\uDDC5-\uDDC9\uDDCD\uDDDB\uDDDD-\uDDDF\uDE38-\uDE3D\uDEA9]|\uD805[\uDCC6\uDDC1-\uDDD7\uDE41-\uDE43\uDF3C-\uDF3E]|\uD809[\uDC70-\uDC74]|\uD81A[\uDE6E\uDE6F\uDEF5\uDF37-\uDF3B\uDF44]|\uD82F\uDC9F|\uD836[\uDE87-\uDE8B]/,
              D = "    ";
            function x(e, t, n) {
              return (t.f = t.inline = n), n(e, t);
            }
            function v(e, t, n) {
              return (t.f = t.block = n), n(e, t);
            }
            function k(e) {
              return !e || !/\S/.test(e.string);
            }
            function b(t) {
              if (
                ((t.linkTitle = !1),
                (t.linkHref = !1),
                (t.linkText = !1),
                (t.em = !1),
                (t.strong = !1),
                (t.strikethrough = !1),
                (t.quote = 0),
                (t.indentedCode = !1),
                t.f == y)
              ) {
                var n = r;
                if (!n) {
                  var a = e.innerMode(i, t.htmlState);
                  n =
                    "xml" == a.mode.name &&
                    null === a.state.tagStart &&
                    !a.state.context &&
                    a.state.tokenize.isInText;
                }
                n && ((t.f = w), (t.block = C), (t.htmlState = null));
              }
              return (
                (t.trailingSpace = 0),
                (t.trailingSpaceNewLine = !1),
                (t.prevLine = t.thisLine),
                (t.thisLine = { stream: null }),
                null
              );
            }
            function C(t, i) {
              var r = t.column() === i.indentation,
                s = k(i.prevLine.stream),
                p = i.indentedCode,
                g = i.prevLine.hr,
                D = !1 !== i.list,
                v = (i.listStack[i.listStack.length - 1] || 0) + 3;
              i.indentedCode = !1;
              var b = i.indentation;
              if (
                null === i.indentationDiff &&
                ((i.indentationDiff = i.indentation), D)
              ) {
                for (i.list = null; b < i.listStack[i.listStack.length - 1]; )
                  i.listStack.pop(),
                    i.listStack.length
                      ? (i.indentation = i.listStack[i.listStack.length - 1])
                      : (i.list = !1);
                !1 !== i.list &&
                  (i.indentationDiff = b - i.listStack[i.listStack.length - 1]);
              }
              var C =
                  !s &&
                  !g &&
                  !i.prevLine.header &&
                  (!D || !p) &&
                  !i.prevLine.fencedCodeEnd,
                y =
                  (!1 === i.list || g || s) && i.indentation <= v && t.match(l),
                A = null;
              if (
                i.indentationDiff >= 4 &&
                (p || i.prevLine.fencedCodeEnd || i.prevLine.header || s)
              )
                return t.skipToEnd(), (i.indentedCode = !0), o.code;
              if (t.eatSpace()) return null;
              if (
                r &&
                i.indentation <= v &&
                (A = t.match(m)) &&
                A[1].length <= 6
              )
                return (
                  (i.quote = 0),
                  (i.header = A[1].length),
                  (i.thisLine.header = !0),
                  n.highlightFormatting && (i.formatting = "header"),
                  (i.f = i.inline),
                  E(i)
                );
              if (i.indentation <= v && t.eat(">"))
                return (
                  (i.quote = r ? 1 : i.quote + 1),
                  n.highlightFormatting && (i.formatting = "quote"),
                  t.eatSpace(),
                  E(i)
                );
              if (
                !y &&
                !i.setext &&
                r &&
                i.indentation <= v &&
                (A = t.match(u))
              ) {
                var w = A[1] ? "ol" : "ul";
                return (
                  (i.indentation = b + t.current().length),
                  (i.list = !0),
                  (i.quote = 0),
                  i.listStack.push(i.indentation),
                  (i.em = !1),
                  (i.strong = !1),
                  (i.code = !1),
                  (i.strikethrough = !1),
                  n.taskLists && t.match(c, !1) && (i.taskList = !0),
                  (i.f = i.inline),
                  n.highlightFormatting &&
                    (i.formatting = ["list", "list-" + w]),
                  E(i)
                );
              }
              return r && i.indentation <= v && (A = t.match(h, !0))
                ? ((i.quote = 0),
                  (i.fencedEndRE = new RegExp(A[1] + "+ *$")),
                  (i.localMode =
                    n.fencedCodeBlockHighlighting &&
                    a(A[2] || n.fencedCodeBlockDefaultMode)),
                  i.localMode && (i.localState = e.startState(i.localMode)),
                  (i.f = i.block = F),
                  n.highlightFormatting && (i.formatting = "code-block"),
                  (i.code = -1),
                  E(i))
                : i.setext ||
                  (!(
                    (C && D) ||
                    i.quote ||
                    !1 !== i.list ||
                    i.code ||
                    y ||
                    f.test(t.string)
                  ) &&
                    (A = t.lookAhead(1)) &&
                    (A = A.match(d)))
                ? (i.setext
                    ? ((i.header = i.setext),
                      (i.setext = 0),
                      t.skipToEnd(),
                      n.highlightFormatting && (i.formatting = "header"))
                    : ((i.header = "=" == A[0].charAt(0) ? 1 : 2),
                      (i.setext = i.header)),
                  (i.thisLine.header = !0),
                  (i.f = i.inline),
                  E(i))
                : y
                ? (t.skipToEnd(), (i.hr = !0), (i.thisLine.hr = !0), o.hr)
                : "[" === t.peek()
                ? x(t, i, M)
                : x(t, i, i.inline);
            }
            function y(t, n) {
              var a = i.token(t, n.htmlState);
              if (!r) {
                var o = e.innerMode(i, n.htmlState);
                (("xml" == o.mode.name &&
                  null === o.state.tagStart &&
                  !o.state.context &&
                  o.state.tokenize.isInText) ||
                  (n.md_inside && t.current().indexOf(">") > -1)) &&
                  ((n.f = w), (n.block = C), (n.htmlState = null));
              }
              return a;
            }
            function F(e, t) {
              var i,
                r = t.listStack[t.listStack.length - 1] || 0,
                a = t.indentation < r,
                s = r + 3;
              return t.fencedEndRE &&
                t.indentation <= s &&
                (a || e.match(t.fencedEndRE))
                ? (n.highlightFormatting && (t.formatting = "code-block"),
                  a || (i = E(t)),
                  (t.localMode = t.localState = null),
                  (t.block = C),
                  (t.f = w),
                  (t.fencedEndRE = null),
                  (t.code = 0),
                  (t.thisLine.fencedCodeEnd = !0),
                  a ? v(e, t, t.block) : i)
                : t.localMode
                ? t.localMode.token(e, t.localState)
                : (e.skipToEnd(), o.code);
            }
            function E(e) {
              var t = [];
              if (e.formatting) {
                t.push(o.formatting),
                  "string" === typeof e.formatting &&
                    (e.formatting = [e.formatting]);
                for (var i = 0; i < e.formatting.length; i++)
                  t.push(o.formatting + "-" + e.formatting[i]),
                    "header" === e.formatting[i] &&
                      t.push(
                        o.formatting + "-" + e.formatting[i] + "-" + e.header
                      ),
                    "quote" === e.formatting[i] &&
                      (!n.maxBlockquoteDepth || n.maxBlockquoteDepth >= e.quote
                        ? t.push(
                            o.formatting + "-" + e.formatting[i] + "-" + e.quote
                          )
                        : t.push("error"));
              }
              if (e.taskOpen)
                return t.push("meta"), t.length ? t.join(" ") : null;
              if (e.taskClosed)
                return t.push("property"), t.length ? t.join(" ") : null;
              if (
                (e.linkHref
                  ? t.push(o.linkHref, "url")
                  : (e.strong && t.push(o.strong),
                    e.em && t.push(o.em),
                    e.strikethrough && t.push(o.strikethrough),
                    e.emoji && t.push(o.emoji),
                    e.linkText && t.push(o.linkText),
                    e.code && t.push(o.code),
                    e.image && t.push(o.image),
                    e.imageAltText && t.push(o.imageAltText, "link"),
                    e.imageMarker && t.push(o.imageMarker)),
                e.header && t.push(o.header, o.header + "-" + e.header),
                e.quote &&
                  (t.push(o.quote),
                  !n.maxBlockquoteDepth || n.maxBlockquoteDepth >= e.quote
                    ? t.push(o.quote + "-" + e.quote)
                    : t.push(o.quote + "-" + n.maxBlockquoteDepth)),
                !1 !== e.list)
              ) {
                var r = (e.listStack.length - 1) % 3;
                r
                  ? 1 === r
                    ? t.push(o.list2)
                    : t.push(o.list3)
                  : t.push(o.list1);
              }
              return (
                e.trailingSpaceNewLine
                  ? t.push("trailing-space-new-line")
                  : e.trailingSpace &&
                    t.push(
                      "trailing-space-" + (e.trailingSpace % 2 ? "a" : "b")
                    ),
                t.length ? t.join(" ") : null
              );
            }
            function A(e, t) {
              if (e.match(p, !0)) return E(t);
            }
            function w(t, r) {
              var a = r.text(t, r);
              if ("undefined" !== typeof a) return a;
              if (r.list) return (r.list = null), E(r);
              if (r.taskList)
                return (
                  " " === t.match(c, !0)[1]
                    ? (r.taskOpen = !0)
                    : (r.taskClosed = !0),
                  n.highlightFormatting && (r.formatting = "task"),
                  (r.taskList = !1),
                  E(r)
                );
              if (
                ((r.taskOpen = !1),
                (r.taskClosed = !1),
                r.header && t.match(/^#+$/, !0))
              )
                return n.highlightFormatting && (r.formatting = "header"), E(r);
              var s = t.next();
              if (r.linkTitle) {
                r.linkTitle = !1;
                var l = s;
                "(" === s && (l = ")");
                var u =
                  "^\\s*(?:[^" +
                  (l = (l + "").replace(/([.?*+^\[\]\\(){}|-])/g, "\\$1")) +
                  "\\\\]+|\\\\\\\\|\\\\.)" +
                  l;
                if (t.match(new RegExp(u), !0)) return o.linkHref;
              }
              if ("`" === s) {
                var m = r.formatting;
                n.highlightFormatting && (r.formatting = "code"),
                  t.eatWhile("`");
                var d = t.current().length;
                if (0 != r.code || (r.quote && 1 != d)) {
                  if (d == r.code) {
                    var p = E(r);
                    return (r.code = 0), p;
                  }
                  return (r.formatting = m), E(r);
                }
                return (r.code = d), E(r);
              }
              if (r.code) return E(r);
              if ("\\" === s && (t.next(), n.highlightFormatting)) {
                var h = E(r),
                  f = o.formatting + "-escape";
                return h ? h + " " + f : f;
              }
              if ("!" === s && t.match(/\[[^\]]*\] ?(?:\(|\[)/, !1))
                return (
                  (r.imageMarker = !0),
                  (r.image = !0),
                  n.highlightFormatting && (r.formatting = "image"),
                  E(r)
                );
              if (
                "[" === s &&
                r.imageMarker &&
                t.match(/[^\]]*\](\(.*?\)| ?\[.*?\])/, !1)
              )
                return (
                  (r.imageMarker = !1),
                  (r.imageAltText = !0),
                  n.highlightFormatting && (r.formatting = "image"),
                  E(r)
                );
              if ("]" === s && r.imageAltText) {
                n.highlightFormatting && (r.formatting = "image");
                var h = E(r);
                return (
                  (r.imageAltText = !1), (r.image = !1), (r.inline = r.f = B), h
                );
              }
              if ("[" === s && !r.image)
                return (
                  (r.linkText && t.match(/^.*?\]/)) ||
                    ((r.linkText = !0),
                    n.highlightFormatting && (r.formatting = "link")),
                  E(r)
                );
              if ("]" === s && r.linkText) {
                n.highlightFormatting && (r.formatting = "link");
                var h = E(r);
                return (
                  (r.linkText = !1),
                  (r.inline = r.f = t.match(/\(.*?\)| ?\[.*?\]/, !1) ? B : w),
                  h
                );
              }
              if (
                "<" === s &&
                t.match(/^(https?|ftps?):\/\/(?:[^\\>]|\\.)+>/, !1)
              )
                return (
                  (r.f = r.inline = S),
                  n.highlightFormatting && (r.formatting = "link"),
                  (h = E(r)) ? (h += " ") : (h = ""),
                  h + o.linkInline
                );
              if ("<" === s && t.match(/^[^> \\]+@(?:[^\\>]|\\.)+>/, !1))
                return (
                  (r.f = r.inline = S),
                  n.highlightFormatting && (r.formatting = "link"),
                  (h = E(r)) ? (h += " ") : (h = ""),
                  h + o.linkEmail
                );
              if (
                n.xml &&
                "<" === s &&
                t.match(
                  /^(!--|\?|!\[CDATA\[|[a-z][a-z0-9-]*(?:\s+[a-z_:.\-]+(?:\s*=\s*[^>]+)?)*\s*(?:>|$))/i,
                  !1
                )
              ) {
                var D = t.string.indexOf(">", t.pos);
                if (-1 != D) {
                  var x = t.string.substring(t.start, D);
                  /markdown\s*=\s*('|"){0,1}1('|"){0,1}/.test(x) &&
                    (r.md_inside = !0);
                }
                return t.backUp(1), (r.htmlState = e.startState(i)), v(t, r, y);
              }
              if (n.xml && "<" === s && t.match(/^\/\w*?>/))
                return (r.md_inside = !1), "tag";
              if ("*" === s || "_" === s) {
                for (
                  var k = 1, b = 1 == t.pos ? " " : t.string.charAt(t.pos - 2);
                  k < 3 && t.eat(s);

                )
                  k++;
                var C = t.peek() || " ",
                  F =
                    !/\s/.test(C) && (!g.test(C) || /\s/.test(b) || g.test(b)),
                  A =
                    !/\s/.test(b) && (!g.test(b) || /\s/.test(C) || g.test(C)),
                  T = null,
                  _ = null;
                if (
                  (k % 2 &&
                    (r.em || !F || ("*" !== s && A && !g.test(b))
                      ? r.em != s ||
                        !A ||
                        ("*" !== s && F && !g.test(C)) ||
                        (T = !1)
                      : (T = !0)),
                  k > 1 &&
                    (r.strong || !F || ("*" !== s && A && !g.test(b))
                      ? r.strong != s ||
                        !A ||
                        ("*" !== s && F && !g.test(C)) ||
                        (_ = !1)
                      : (_ = !0)),
                  null != _ || null != T)
                )
                  return (
                    n.highlightFormatting &&
                      (r.formatting =
                        null == T ? "strong" : null == _ ? "em" : "strong em"),
                    !0 === T && (r.em = s),
                    !0 === _ && (r.strong = s),
                    (p = E(r)),
                    !1 === T && (r.em = !1),
                    !1 === _ && (r.strong = !1),
                    p
                  );
              } else if (" " === s && (t.eat("*") || t.eat("_"))) {
                if (" " === t.peek()) return E(r);
                t.backUp(1);
              }
              if (n.strikethrough)
                if ("~" === s && t.eatWhile(s)) {
                  if (r.strikethrough)
                    return (
                      n.highlightFormatting && (r.formatting = "strikethrough"),
                      (p = E(r)),
                      (r.strikethrough = !1),
                      p
                    );
                  if (t.match(/^[^\s]/, !1))
                    return (
                      (r.strikethrough = !0),
                      n.highlightFormatting && (r.formatting = "strikethrough"),
                      E(r)
                    );
                } else if (" " === s && t.match("~~", !0)) {
                  if (" " === t.peek()) return E(r);
                  t.backUp(2);
                }
              if (
                n.emoji &&
                ":" === s &&
                t.match(/^(?:[a-z_\d+][a-z_\d+-]*|\-[a-z_\d+][a-z_\d+-]*):/)
              ) {
                (r.emoji = !0),
                  n.highlightFormatting && (r.formatting = "emoji");
                var M = E(r);
                return (r.emoji = !1), M;
              }
              return (
                " " === s &&
                  (t.match(/^ +$/, !1)
                    ? r.trailingSpace++
                    : r.trailingSpace && (r.trailingSpaceNewLine = !0)),
                E(r)
              );
            }
            function S(e, t) {
              if (">" === e.next()) {
                (t.f = t.inline = w),
                  n.highlightFormatting && (t.formatting = "link");
                var i = E(t);
                return i ? (i += " ") : (i = ""), i + o.linkInline;
              }
              return e.match(/^[^>]+/, !0), o.linkInline;
            }
            function B(e, t) {
              if (e.eatSpace()) return null;
              var i = e.next();
              return "(" === i || "[" === i
                ? ((t.f = t.inline = _("(" === i ? ")" : "]")),
                  n.highlightFormatting && (t.formatting = "link-string"),
                  (t.linkHref = !0),
                  E(t))
                : "error";
            }
            var T = {
              ")": /^(?:[^\\\(\)]|\\.|\((?:[^\\\(\)]|\\.)*\))*?(?=\))/,
              "]": /^(?:[^\\\[\]]|\\.|\[(?:[^\\\[\]]|\\.)*\])*?(?=\])/,
            };
            function _(e) {
              return function (t, i) {
                if (t.next() === e) {
                  (i.f = i.inline = w),
                    n.highlightFormatting && (i.formatting = "link-string");
                  var r = E(i);
                  return (i.linkHref = !1), r;
                }
                return t.match(T[e]), (i.linkHref = !0), E(i);
              };
            }
            function M(e, t) {
              return e.match(/^([^\]\\]|\\.)*\]:/, !1)
                ? ((t.f = L),
                  e.next(),
                  n.highlightFormatting && (t.formatting = "link"),
                  (t.linkText = !0),
                  E(t))
                : x(e, t, w);
            }
            function L(e, t) {
              if (e.match("]:", !0)) {
                (t.f = t.inline = I),
                  n.highlightFormatting && (t.formatting = "link");
                var i = E(t);
                return (t.linkText = !1), i;
              }
              return e.match(/^([^\]\\]|\\.)+/, !0), o.linkText;
            }
            function I(e, t) {
              return e.eatSpace()
                ? null
                : (e.match(/^[^\s]+/, !0),
                  void 0 === e.peek()
                    ? (t.linkTitle = !0)
                    : e.match(
                        /^(?:\s+(?:"(?:[^"\\]|\\.)+"|'(?:[^'\\]|\\.)+'|\((?:[^)\\]|\\.)+\)))?/,
                        !0
                      ),
                  (t.f = t.inline = w),
                  o.linkHref + " url");
            }
            var z = {
              startState: function () {
                return {
                  f: C,
                  prevLine: { stream: null },
                  thisLine: { stream: null },
                  block: C,
                  htmlState: null,
                  indentation: 0,
                  inline: w,
                  text: A,
                  formatting: !1,
                  linkText: !1,
                  linkHref: !1,
                  linkTitle: !1,
                  code: 0,
                  em: !1,
                  strong: !1,
                  header: 0,
                  setext: 0,
                  hr: !1,
                  taskList: !1,
                  list: !1,
                  listStack: [],
                  quote: 0,
                  trailingSpace: 0,
                  trailingSpaceNewLine: !1,
                  strikethrough: !1,
                  emoji: !1,
                  fencedEndRE: null,
                };
              },
              copyState: function (t) {
                return {
                  f: t.f,
                  prevLine: t.prevLine,
                  thisLine: t.thisLine,
                  block: t.block,
                  htmlState: t.htmlState && e.copyState(i, t.htmlState),
                  indentation: t.indentation,
                  localMode: t.localMode,
                  localState: t.localMode
                    ? e.copyState(t.localMode, t.localState)
                    : null,
                  inline: t.inline,
                  text: t.text,
                  formatting: !1,
                  linkText: t.linkText,
                  linkTitle: t.linkTitle,
                  linkHref: t.linkHref,
                  code: t.code,
                  em: t.em,
                  strong: t.strong,
                  strikethrough: t.strikethrough,
                  emoji: t.emoji,
                  header: t.header,
                  setext: t.setext,
                  hr: t.hr,
                  taskList: t.taskList,
                  list: t.list,
                  listStack: t.listStack.slice(0),
                  quote: t.quote,
                  indentedCode: t.indentedCode,
                  trailingSpace: t.trailingSpace,
                  trailingSpaceNewLine: t.trailingSpaceNewLine,
                  md_inside: t.md_inside,
                  fencedEndRE: t.fencedEndRE,
                };
              },
              token: function (e, t) {
                if (((t.formatting = !1), e != t.thisLine.stream)) {
                  if (((t.header = 0), (t.hr = !1), e.match(/^\s*$/, !0)))
                    return b(t), null;
                  if (
                    ((t.prevLine = t.thisLine),
                    (t.thisLine = { stream: e }),
                    (t.taskList = !1),
                    (t.trailingSpace = 0),
                    (t.trailingSpaceNewLine = !1),
                    !t.localState && ((t.f = t.block), t.f != y))
                  ) {
                    var n = e.match(/^\s*/, !0)[0].replace(/\t/g, D).length;
                    if (
                      ((t.indentation = n), (t.indentationDiff = null), n > 0)
                    )
                      return null;
                  }
                }
                return t.f(e, t);
              },
              innerMode: function (e) {
                return e.block == y
                  ? { state: e.htmlState, mode: i }
                  : e.localState
                  ? { state: e.localState, mode: e.localMode }
                  : { state: e, mode: z };
              },
              indent: function (t, n, r) {
                return t.block == y && i.indent
                  ? i.indent(t.htmlState, n, r)
                  : t.localState && t.localMode.indent
                  ? t.localMode.indent(t.localState, n, r)
                  : e.Pass;
              },
              blankLine: b,
              getType: E,
              blockCommentStart: "\x3c!--",
              blockCommentEnd: "--\x3e",
              closeBrackets: "()[]{}''\"\"``",
              fold: "markdown",
            };
            return z;
          },
          "xml"
        ),
          e.defineMIME("text/markdown", "markdown"),
          e.defineMIME("text/x-markdown", "markdown");
      })(n(4631), n(9589), n(2539));
    },
    2539: function (e, t, n) {
      !(function (e) {
        "use strict";
        e.modeInfo = [
          {
            name: "APL",
            mime: "text/apl",
            mode: "apl",
            ext: ["dyalog", "apl"],
          },
          {
            name: "PGP",
            mimes: [
              "application/pgp",
              "application/pgp-encrypted",
              "application/pgp-keys",
              "application/pgp-signature",
            ],
            mode: "asciiarmor",
            ext: ["asc", "pgp", "sig"],
          },
          {
            name: "ASN.1",
            mime: "text/x-ttcn-asn",
            mode: "asn.1",
            ext: ["asn", "asn1"],
          },
          {
            name: "Asterisk",
            mime: "text/x-asterisk",
            mode: "asterisk",
            file: /^extensions\.conf$/i,
          },
          {
            name: "Brainfuck",
            mime: "text/x-brainfuck",
            mode: "brainfuck",
            ext: ["b", "bf"],
          },
          {
            name: "C",
            mime: "text/x-csrc",
            mode: "clike",
            ext: ["c", "h", "ino"],
          },
          {
            name: "C++",
            mime: "text/x-c++src",
            mode: "clike",
            ext: ["cpp", "c++", "cc", "cxx", "hpp", "h++", "hh", "hxx"],
            alias: ["cpp"],
          },
          {
            name: "Cobol",
            mime: "text/x-cobol",
            mode: "cobol",
            ext: ["cob", "cpy", "cbl"],
          },
          {
            name: "C#",
            mime: "text/x-csharp",
            mode: "clike",
            ext: ["cs"],
            alias: ["csharp", "cs"],
          },
          {
            name: "Clojure",
            mime: "text/x-clojure",
            mode: "clojure",
            ext: ["clj", "cljc", "cljx"],
          },
          {
            name: "ClojureScript",
            mime: "text/x-clojurescript",
            mode: "clojure",
            ext: ["cljs"],
          },
          {
            name: "Closure Stylesheets (GSS)",
            mime: "text/x-gss",
            mode: "css",
            ext: ["gss"],
          },
          {
            name: "CMake",
            mime: "text/x-cmake",
            mode: "cmake",
            ext: ["cmake", "cmake.in"],
            file: /^CMakeLists\.txt$/,
          },
          {
            name: "CoffeeScript",
            mimes: [
              "application/vnd.coffeescript",
              "text/coffeescript",
              "text/x-coffeescript",
            ],
            mode: "coffeescript",
            ext: ["coffee"],
            alias: ["coffee", "coffee-script"],
          },
          {
            name: "Common Lisp",
            mime: "text/x-common-lisp",
            mode: "commonlisp",
            ext: ["cl", "lisp", "el"],
            alias: ["lisp"],
          },
          {
            name: "Cypher",
            mime: "application/x-cypher-query",
            mode: "cypher",
            ext: ["cyp", "cypher"],
          },
          {
            name: "Cython",
            mime: "text/x-cython",
            mode: "python",
            ext: ["pyx", "pxd", "pxi"],
          },
          {
            name: "Crystal",
            mime: "text/x-crystal",
            mode: "crystal",
            ext: ["cr"],
          },
          { name: "CSS", mime: "text/css", mode: "css", ext: ["css"] },
          { name: "CQL", mime: "text/x-cassandra", mode: "sql", ext: ["cql"] },
          { name: "D", mime: "text/x-d", mode: "d", ext: ["d"] },
          {
            name: "Dart",
            mimes: ["application/dart", "text/x-dart"],
            mode: "dart",
            ext: ["dart"],
          },
          {
            name: "diff",
            mime: "text/x-diff",
            mode: "diff",
            ext: ["diff", "patch"],
          },
          { name: "Django", mime: "text/x-django", mode: "django" },
          {
            name: "Dockerfile",
            mime: "text/x-dockerfile",
            mode: "dockerfile",
            file: /^Dockerfile$/,
          },
          {
            name: "DTD",
            mime: "application/xml-dtd",
            mode: "dtd",
            ext: ["dtd"],
          },
          {
            name: "Dylan",
            mime: "text/x-dylan",
            mode: "dylan",
            ext: ["dylan", "dyl", "intr"],
          },
          { name: "EBNF", mime: "text/x-ebnf", mode: "ebnf" },
          { name: "ECL", mime: "text/x-ecl", mode: "ecl", ext: ["ecl"] },
          {
            name: "edn",
            mime: "application/edn",
            mode: "clojure",
            ext: ["edn"],
          },
          { name: "Eiffel", mime: "text/x-eiffel", mode: "eiffel", ext: ["e"] },
          { name: "Elm", mime: "text/x-elm", mode: "elm", ext: ["elm"] },
          {
            name: "Embedded JavaScript",
            mime: "application/x-ejs",
            mode: "htmlembedded",
            ext: ["ejs"],
          },
          {
            name: "Embedded Ruby",
            mime: "application/x-erb",
            mode: "htmlembedded",
            ext: ["erb"],
          },
          {
            name: "Erlang",
            mime: "text/x-erlang",
            mode: "erlang",
            ext: ["erl"],
          },
          { name: "Esper", mime: "text/x-esper", mode: "sql" },
          {
            name: "Factor",
            mime: "text/x-factor",
            mode: "factor",
            ext: ["factor"],
          },
          { name: "FCL", mime: "text/x-fcl", mode: "fcl" },
          {
            name: "Forth",
            mime: "text/x-forth",
            mode: "forth",
            ext: ["forth", "fth", "4th"],
          },
          {
            name: "Fortran",
            mime: "text/x-fortran",
            mode: "fortran",
            ext: ["f", "for", "f77", "f90", "f95"],
          },
          {
            name: "F#",
            mime: "text/x-fsharp",
            mode: "mllike",
            ext: ["fs"],
            alias: ["fsharp"],
          },
          { name: "Gas", mime: "text/x-gas", mode: "gas", ext: ["s"] },
          {
            name: "Gherkin",
            mime: "text/x-feature",
            mode: "gherkin",
            ext: ["feature"],
          },
          {
            name: "GitHub Flavored Markdown",
            mime: "text/x-gfm",
            mode: "gfm",
            file: /^(readme|contributing|history)\.md$/i,
          },
          { name: "Go", mime: "text/x-go", mode: "go", ext: ["go"] },
          {
            name: "Groovy",
            mime: "text/x-groovy",
            mode: "groovy",
            ext: ["groovy", "gradle"],
            file: /^Jenkinsfile$/,
          },
          { name: "HAML", mime: "text/x-haml", mode: "haml", ext: ["haml"] },
          {
            name: "Haskell",
            mime: "text/x-haskell",
            mode: "haskell",
            ext: ["hs"],
          },
          {
            name: "Haskell (Literate)",
            mime: "text/x-literate-haskell",
            mode: "haskell-literate",
            ext: ["lhs"],
          },
          { name: "Haxe", mime: "text/x-haxe", mode: "haxe", ext: ["hx"] },
          { name: "HXML", mime: "text/x-hxml", mode: "haxe", ext: ["hxml"] },
          {
            name: "ASP.NET",
            mime: "application/x-aspx",
            mode: "htmlembedded",
            ext: ["aspx"],
            alias: ["asp", "aspx"],
          },
          {
            name: "HTML",
            mime: "text/html",
            mode: "htmlmixed",
            ext: ["html", "htm", "handlebars", "hbs"],
            alias: ["xhtml"],
          },
          { name: "HTTP", mime: "message/http", mode: "http" },
          { name: "IDL", mime: "text/x-idl", mode: "idl", ext: ["pro"] },
          {
            name: "Pug",
            mime: "text/x-pug",
            mode: "pug",
            ext: ["jade", "pug"],
            alias: ["jade"],
          },
          { name: "Java", mime: "text/x-java", mode: "clike", ext: ["java"] },
          {
            name: "Java Server Pages",
            mime: "application/x-jsp",
            mode: "htmlembedded",
            ext: ["jsp"],
            alias: ["jsp"],
          },
          {
            name: "JavaScript",
            mimes: [
              "text/javascript",
              "text/ecmascript",
              "application/javascript",
              "application/x-javascript",
              "application/ecmascript",
            ],
            mode: "javascript",
            ext: ["js"],
            alias: ["ecmascript", "js", "node"],
          },
          {
            name: "JSON",
            mimes: ["application/json", "application/x-json"],
            mode: "javascript",
            ext: ["json", "map"],
            alias: ["json5"],
          },
          {
            name: "JSON-LD",
            mime: "application/ld+json",
            mode: "javascript",
            ext: ["jsonld"],
            alias: ["jsonld"],
          },
          { name: "JSX", mime: "text/jsx", mode: "jsx", ext: ["jsx"] },
          {
            name: "Jinja2",
            mime: "text/jinja2",
            mode: "jinja2",
            ext: ["j2", "jinja", "jinja2"],
          },
          {
            name: "Julia",
            mime: "text/x-julia",
            mode: "julia",
            ext: ["jl"],
            alias: ["jl"],
          },
          { name: "Kotlin", mime: "text/x-kotlin", mode: "clike", ext: ["kt"] },
          { name: "LESS", mime: "text/x-less", mode: "css", ext: ["less"] },
          {
            name: "LiveScript",
            mime: "text/x-livescript",
            mode: "livescript",
            ext: ["ls"],
            alias: ["ls"],
          },
          { name: "Lua", mime: "text/x-lua", mode: "lua", ext: ["lua"] },
          {
            name: "Markdown",
            mime: "text/x-markdown",
            mode: "markdown",
            ext: ["markdown", "md", "mkd"],
          },
          { name: "mIRC", mime: "text/mirc", mode: "mirc" },
          { name: "MariaDB SQL", mime: "text/x-mariadb", mode: "sql" },
          {
            name: "Mathematica",
            mime: "text/x-mathematica",
            mode: "mathematica",
            ext: ["m", "nb", "wl", "wls"],
          },
          {
            name: "Modelica",
            mime: "text/x-modelica",
            mode: "modelica",
            ext: ["mo"],
          },
          { name: "MUMPS", mime: "text/x-mumps", mode: "mumps", ext: ["mps"] },
          { name: "MS SQL", mime: "text/x-mssql", mode: "sql" },
          {
            name: "mbox",
            mime: "application/mbox",
            mode: "mbox",
            ext: ["mbox"],
          },
          { name: "MySQL", mime: "text/x-mysql", mode: "sql" },
          {
            name: "Nginx",
            mime: "text/x-nginx-conf",
            mode: "nginx",
            file: /nginx.*\.conf$/i,
          },
          {
            name: "NSIS",
            mime: "text/x-nsis",
            mode: "nsis",
            ext: ["nsh", "nsi"],
          },
          {
            name: "NTriples",
            mimes: [
              "application/n-triples",
              "application/n-quads",
              "text/n-triples",
            ],
            mode: "ntriples",
            ext: ["nt", "nq"],
          },
          {
            name: "Objective-C",
            mime: "text/x-objectivec",
            mode: "clike",
            ext: ["m"],
            alias: ["objective-c", "objc"],
          },
          {
            name: "Objective-C++",
            mime: "text/x-objectivec++",
            mode: "clike",
            ext: ["mm"],
            alias: ["objective-c++", "objc++"],
          },
          {
            name: "OCaml",
            mime: "text/x-ocaml",
            mode: "mllike",
            ext: ["ml", "mli", "mll", "mly"],
          },
          { name: "Octave", mime: "text/x-octave", mode: "octave", ext: ["m"] },
          { name: "Oz", mime: "text/x-oz", mode: "oz", ext: ["oz"] },
          {
            name: "Pascal",
            mime: "text/x-pascal",
            mode: "pascal",
            ext: ["p", "pas"],
          },
          { name: "PEG.js", mime: "null", mode: "pegjs", ext: ["jsonld"] },
          {
            name: "Perl",
            mime: "text/x-perl",
            mode: "perl",
            ext: ["pl", "pm"],
          },
          {
            name: "PHP",
            mimes: [
              "text/x-php",
              "application/x-httpd-php",
              "application/x-httpd-php-open",
            ],
            mode: "php",
            ext: ["php", "php3", "php4", "php5", "php7", "phtml"],
          },
          { name: "Pig", mime: "text/x-pig", mode: "pig", ext: ["pig"] },
          {
            name: "Plain Text",
            mime: "text/plain",
            mode: "null",
            ext: ["txt", "text", "conf", "def", "list", "log"],
          },
          { name: "PLSQL", mime: "text/x-plsql", mode: "sql", ext: ["pls"] },
          { name: "PostgreSQL", mime: "text/x-pgsql", mode: "sql" },
          {
            name: "PowerShell",
            mime: "application/x-powershell",
            mode: "powershell",
            ext: ["ps1", "psd1", "psm1"],
          },
          {
            name: "Properties files",
            mime: "text/x-properties",
            mode: "properties",
            ext: ["properties", "ini", "in"],
            alias: ["ini", "properties"],
          },
          {
            name: "ProtoBuf",
            mime: "text/x-protobuf",
            mode: "protobuf",
            ext: ["proto"],
          },
          {
            name: "Python",
            mime: "text/x-python",
            mode: "python",
            ext: ["BUILD", "bzl", "py", "pyw"],
            file: /^(BUCK|BUILD)$/,
          },
          {
            name: "Puppet",
            mime: "text/x-puppet",
            mode: "puppet",
            ext: ["pp"],
          },
          { name: "Q", mime: "text/x-q", mode: "q", ext: ["q"] },
          {
            name: "R",
            mime: "text/x-rsrc",
            mode: "r",
            ext: ["r", "R"],
            alias: ["rscript"],
          },
          {
            name: "reStructuredText",
            mime: "text/x-rst",
            mode: "rst",
            ext: ["rst"],
            alias: ["rst"],
          },
          { name: "RPM Changes", mime: "text/x-rpm-changes", mode: "rpm" },
          {
            name: "RPM Spec",
            mime: "text/x-rpm-spec",
            mode: "rpm",
            ext: ["spec"],
          },
          {
            name: "Ruby",
            mime: "text/x-ruby",
            mode: "ruby",
            ext: ["rb"],
            alias: ["jruby", "macruby", "rake", "rb", "rbx"],
          },
          { name: "Rust", mime: "text/x-rustsrc", mode: "rust", ext: ["rs"] },
          { name: "SAS", mime: "text/x-sas", mode: "sas", ext: ["sas"] },
          { name: "Sass", mime: "text/x-sass", mode: "sass", ext: ["sass"] },
          {
            name: "Scala",
            mime: "text/x-scala",
            mode: "clike",
            ext: ["scala"],
          },
          {
            name: "Scheme",
            mime: "text/x-scheme",
            mode: "scheme",
            ext: ["scm", "ss"],
          },
          { name: "SCSS", mime: "text/x-scss", mode: "css", ext: ["scss"] },
          {
            name: "Shell",
            mimes: ["text/x-sh", "application/x-sh"],
            mode: "shell",
            ext: ["sh", "ksh", "bash"],
            alias: ["bash", "sh", "zsh"],
            file: /^PKGBUILD$/,
          },
          {
            name: "Sieve",
            mime: "application/sieve",
            mode: "sieve",
            ext: ["siv", "sieve"],
          },
          {
            name: "Slim",
            mimes: ["text/x-slim", "application/x-slim"],
            mode: "slim",
            ext: ["slim"],
          },
          {
            name: "Smalltalk",
            mime: "text/x-stsrc",
            mode: "smalltalk",
            ext: ["st"],
          },
          {
            name: "Smarty",
            mime: "text/x-smarty",
            mode: "smarty",
            ext: ["tpl"],
          },
          { name: "Solr", mime: "text/x-solr", mode: "solr" },
          {
            name: "SML",
            mime: "text/x-sml",
            mode: "mllike",
            ext: ["sml", "sig", "fun", "smackspec"],
          },
          {
            name: "Soy",
            mime: "text/x-soy",
            mode: "soy",
            ext: ["soy"],
            alias: ["closure template"],
          },
          {
            name: "SPARQL",
            mime: "application/sparql-query",
            mode: "sparql",
            ext: ["rq", "sparql"],
            alias: ["sparul"],
          },
          {
            name: "Spreadsheet",
            mime: "text/x-spreadsheet",
            mode: "spreadsheet",
            alias: ["excel", "formula"],
          },
          { name: "SQL", mime: "text/x-sql", mode: "sql", ext: ["sql"] },
          { name: "SQLite", mime: "text/x-sqlite", mode: "sql" },
          {
            name: "Squirrel",
            mime: "text/x-squirrel",
            mode: "clike",
            ext: ["nut"],
          },
          {
            name: "Stylus",
            mime: "text/x-styl",
            mode: "stylus",
            ext: ["styl"],
          },
          {
            name: "Swift",
            mime: "text/x-swift",
            mode: "swift",
            ext: ["swift"],
          },
          { name: "sTeX", mime: "text/x-stex", mode: "stex" },
          {
            name: "LaTeX",
            mime: "text/x-latex",
            mode: "stex",
            ext: ["text", "ltx", "tex"],
            alias: ["tex"],
          },
          {
            name: "SystemVerilog",
            mime: "text/x-systemverilog",
            mode: "verilog",
            ext: ["v", "sv", "svh"],
          },
          { name: "Tcl", mime: "text/x-tcl", mode: "tcl", ext: ["tcl"] },
          {
            name: "Textile",
            mime: "text/x-textile",
            mode: "textile",
            ext: ["textile"],
          },
          { name: "TiddlyWiki", mime: "text/x-tiddlywiki", mode: "tiddlywiki" },
          { name: "Tiki wiki", mime: "text/tiki", mode: "tiki" },
          { name: "TOML", mime: "text/x-toml", mode: "toml", ext: ["toml"] },
          { name: "Tornado", mime: "text/x-tornado", mode: "tornado" },
          {
            name: "troff",
            mime: "text/troff",
            mode: "troff",
            ext: ["1", "2", "3", "4", "5", "6", "7", "8", "9"],
          },
          {
            name: "TTCN",
            mime: "text/x-ttcn",
            mode: "ttcn",
            ext: ["ttcn", "ttcn3", "ttcnpp"],
          },
          {
            name: "TTCN_CFG",
            mime: "text/x-ttcn-cfg",
            mode: "ttcn-cfg",
            ext: ["cfg"],
          },
          { name: "Turtle", mime: "text/turtle", mode: "turtle", ext: ["ttl"] },
          {
            name: "TypeScript",
            mime: "application/typescript",
            mode: "javascript",
            ext: ["ts"],
            alias: ["ts"],
          },
          {
            name: "TypeScript-JSX",
            mime: "text/typescript-jsx",
            mode: "jsx",
            ext: ["tsx"],
            alias: ["tsx"],
          },
          { name: "Twig", mime: "text/x-twig", mode: "twig" },
          {
            name: "Web IDL",
            mime: "text/x-webidl",
            mode: "webidl",
            ext: ["webidl"],
          },
          { name: "VB.NET", mime: "text/x-vb", mode: "vb", ext: ["vb"] },
          {
            name: "VBScript",
            mime: "text/vbscript",
            mode: "vbscript",
            ext: ["vbs"],
          },
          {
            name: "Velocity",
            mime: "text/velocity",
            mode: "velocity",
            ext: ["vtl"],
          },
          {
            name: "Verilog",
            mime: "text/x-verilog",
            mode: "verilog",
            ext: ["v"],
          },
          {
            name: "VHDL",
            mime: "text/x-vhdl",
            mode: "vhdl",
            ext: ["vhd", "vhdl"],
          },
          {
            name: "Vue.js Component",
            mimes: ["script/x-vue", "text/x-vue"],
            mode: "vue",
            ext: ["vue"],
          },
          {
            name: "XML",
            mimes: ["application/xml", "text/xml"],
            mode: "xml",
            ext: ["xml", "xsl", "xsd", "svg"],
            alias: ["rss", "wsdl", "xsd"],
          },
          {
            name: "XQuery",
            mime: "application/xquery",
            mode: "xquery",
            ext: ["xy", "xquery"],
          },
          { name: "Yacas", mime: "text/x-yacas", mode: "yacas", ext: ["ys"] },
          {
            name: "YAML",
            mimes: ["text/x-yaml", "text/yaml"],
            mode: "yaml",
            ext: ["yaml", "yml"],
            alias: ["yml"],
          },
          { name: "Z80", mime: "text/x-z80", mode: "z80", ext: ["z80"] },
          {
            name: "mscgen",
            mime: "text/x-mscgen",
            mode: "mscgen",
            ext: ["mscgen", "mscin", "msc"],
          },
          { name: "xu", mime: "text/x-xu", mode: "mscgen", ext: ["xu"] },
          {
            name: "msgenny",
            mime: "text/x-msgenny",
            mode: "mscgen",
            ext: ["msgenny"],
          },
          {
            name: "WebAssembly",
            mime: "text/webassembly",
            mode: "wast",
            ext: ["wat", "wast"],
          },
        ];
        for (var t = 0; t < e.modeInfo.length; t++) {
          var n = e.modeInfo[t];
          n.mimes && (n.mime = n.mimes[0]);
        }
        (e.findModeByMIME = function (t) {
          t = t.toLowerCase();
          for (var n = 0; n < e.modeInfo.length; n++) {
            var i = e.modeInfo[n];
            if (i.mime == t) return i;
            if (i.mimes)
              for (var r = 0; r < i.mimes.length; r++)
                if (i.mimes[r] == t) return i;
          }
          return /\+xml$/.test(t)
            ? e.findModeByMIME("application/xml")
            : /\+json$/.test(t)
            ? e.findModeByMIME("application/json")
            : void 0;
        }),
          (e.findModeByExtension = function (t) {
            t = t.toLowerCase();
            for (var n = 0; n < e.modeInfo.length; n++) {
              var i = e.modeInfo[n];
              if (i.ext)
                for (var r = 0; r < i.ext.length; r++)
                  if (i.ext[r] == t) return i;
            }
          }),
          (e.findModeByFileName = function (t) {
            for (var n = 0; n < e.modeInfo.length; n++) {
              var i = e.modeInfo[n];
              if (i.file && i.file.test(t)) return i;
            }
            var r = t.lastIndexOf("."),
              a = r > -1 && t.substring(r + 1, t.length);
            if (a) return e.findModeByExtension(a);
          }),
          (e.findModeByName = function (t) {
            t = t.toLowerCase();
            for (var n = 0; n < e.modeInfo.length; n++) {
              var i = e.modeInfo[n];
              if (i.name.toLowerCase() == t) return i;
              if (i.alias)
                for (var r = 0; r < i.alias.length; r++)
                  if (i.alias[r].toLowerCase() == t) return i;
            }
          });
      })(n(4631));
    },
    9589: function (e, t, n) {
      !(function (e) {
        "use strict";
        var t = {
            autoSelfClosers: {
              area: !0,
              base: !0,
              br: !0,
              col: !0,
              command: !0,
              embed: !0,
              frame: !0,
              hr: !0,
              img: !0,
              input: !0,
              keygen: !0,
              link: !0,
              meta: !0,
              param: !0,
              source: !0,
              track: !0,
              wbr: !0,
              menuitem: !0,
            },
            implicitlyClosed: {
              dd: !0,
              li: !0,
              optgroup: !0,
              option: !0,
              p: !0,
              rp: !0,
              rt: !0,
              tbody: !0,
              td: !0,
              tfoot: !0,
              th: !0,
              tr: !0,
            },
            contextGrabbers: {
              dd: { dd: !0, dt: !0 },
              dt: { dd: !0, dt: !0 },
              li: { li: !0 },
              option: { option: !0, optgroup: !0 },
              optgroup: { optgroup: !0 },
              p: {
                address: !0,
                article: !0,
                aside: !0,
                blockquote: !0,
                dir: !0,
                div: !0,
                dl: !0,
                fieldset: !0,
                footer: !0,
                form: !0,
                h1: !0,
                h2: !0,
                h3: !0,
                h4: !0,
                h5: !0,
                h6: !0,
                header: !0,
                hgroup: !0,
                hr: !0,
                menu: !0,
                nav: !0,
                ol: !0,
                p: !0,
                pre: !0,
                section: !0,
                table: !0,
                ul: !0,
              },
              rp: { rp: !0, rt: !0 },
              rt: { rp: !0, rt: !0 },
              tbody: { tbody: !0, tfoot: !0 },
              td: { td: !0, th: !0 },
              tfoot: { tbody: !0 },
              th: { td: !0, th: !0 },
              thead: { tbody: !0, tfoot: !0 },
              tr: { tr: !0 },
            },
            doNotIndent: { pre: !0 },
            allowUnquoted: !0,
            allowMissing: !0,
            caseFold: !0,
          },
          n = {
            autoSelfClosers: {},
            implicitlyClosed: {},
            contextGrabbers: {},
            doNotIndent: {},
            allowUnquoted: !1,
            allowMissing: !1,
            allowMissingTagName: !1,
            caseFold: !1,
          };
        e.defineMode("xml", function (i, r) {
          var a,
            o,
            s = i.indentUnit,
            l = {},
            u = r.htmlMode ? t : n;
          for (var c in u) l[c] = u[c];
          for (var c in r) l[c] = r[c];
          function m(e, t) {
            function n(n) {
              return (t.tokenize = n), n(e, t);
            }
            var i = e.next();
            return "<" == i
              ? e.eat("!")
                ? e.eat("[")
                  ? e.match("CDATA[")
                    ? n(h("atom", "]]>"))
                    : null
                  : e.match("--")
                  ? n(h("comment", "--\x3e"))
                  : e.match("DOCTYPE", !0, !0)
                  ? (e.eatWhile(/[\w\._\-]/), n(f(1)))
                  : null
                : e.eat("?")
                ? (e.eatWhile(/[\w\._\-]/),
                  (t.tokenize = h("meta", "?>")),
                  "meta")
                : ((a = e.eat("/") ? "closeTag" : "openTag"),
                  (t.tokenize = d),
                  "tag bracket")
              : "&" == i
              ? (
                  e.eat("#")
                    ? e.eat("x")
                      ? e.eatWhile(/[a-fA-F\d]/) && e.eat(";")
                      : e.eatWhile(/[\d]/) && e.eat(";")
                    : e.eatWhile(/[\w\.\-:]/) && e.eat(";")
                )
                ? "atom"
                : "error"
              : (e.eatWhile(/[^&<]/), null);
          }
          function d(e, t) {
            var n = e.next();
            if (">" == n || ("/" == n && e.eat(">")))
              return (
                (t.tokenize = m),
                (a = ">" == n ? "endTag" : "selfcloseTag"),
                "tag bracket"
              );
            if ("=" == n) return (a = "equals"), null;
            if ("<" == n) {
              (t.tokenize = m), (t.state = k), (t.tagName = t.tagStart = null);
              var i = t.tokenize(e, t);
              return i ? i + " tag error" : "tag error";
            }
            return /[\'\"]/.test(n)
              ? ((t.tokenize = p(n)),
                (t.stringStartCol = e.column()),
                t.tokenize(e, t))
              : (e.match(/^[^\s\u00a0=<>\"\']*[^\s\u00a0=<>\"\'\/]/), "word");
          }
          function p(e) {
            var t = function (t, n) {
              for (; !t.eol(); )
                if (t.next() == e) {
                  n.tokenize = d;
                  break;
                }
              return "string";
            };
            return (t.isInAttribute = !0), t;
          }
          function h(e, t) {
            return function (n, i) {
              for (; !n.eol(); ) {
                if (n.match(t)) {
                  i.tokenize = m;
                  break;
                }
                n.next();
              }
              return e;
            };
          }
          function f(e) {
            return function (t, n) {
              for (var i; null != (i = t.next()); ) {
                if ("<" == i) return (n.tokenize = f(e + 1)), n.tokenize(t, n);
                if (">" == i) {
                  if (1 == e) {
                    n.tokenize = m;
                    break;
                  }
                  return (n.tokenize = f(e - 1)), n.tokenize(t, n);
                }
              }
              return "meta";
            };
          }
          function g(e) {
            return e && e.toLowerCase();
          }
          function D(e, t, n) {
            (this.prev = e.context),
              (this.tagName = t || ""),
              (this.indent = e.indented),
              (this.startOfLine = n),
              (l.doNotIndent.hasOwnProperty(t) ||
                (e.context && e.context.noIndent)) &&
                (this.noIndent = !0);
          }
          function x(e) {
            e.context && (e.context = e.context.prev);
          }
          function v(e, t) {
            for (var n; ; ) {
              if (!e.context) return;
              if (
                ((n = e.context.tagName),
                !l.contextGrabbers.hasOwnProperty(g(n)) ||
                  !l.contextGrabbers[g(n)].hasOwnProperty(g(t)))
              )
                return;
              x(e);
            }
          }
          function k(e, t, n) {
            return "openTag" == e
              ? ((n.tagStart = t.column()), b)
              : "closeTag" == e
              ? C
              : k;
          }
          function b(e, t, n) {
            return "word" == e
              ? ((n.tagName = t.current()), (o = "tag"), E)
              : l.allowMissingTagName && "endTag" == e
              ? ((o = "tag bracket"), E(e, t, n))
              : ((o = "error"), b);
          }
          function C(e, t, n) {
            if ("word" == e) {
              var i = t.current();
              return (
                n.context &&
                  n.context.tagName != i &&
                  l.implicitlyClosed.hasOwnProperty(g(n.context.tagName)) &&
                  x(n),
                (n.context && n.context.tagName == i) || !1 === l.matchClosing
                  ? ((o = "tag"), y)
                  : ((o = "tag error"), F)
              );
            }
            return l.allowMissingTagName && "endTag" == e
              ? ((o = "tag bracket"), y(e, t, n))
              : ((o = "error"), F);
          }
          function y(e, t, n) {
            return "endTag" != e ? ((o = "error"), y) : (x(n), k);
          }
          function F(e, t, n) {
            return (o = "error"), y(e, t, n);
          }
          function E(e, t, n) {
            if ("word" == e) return (o = "attribute"), A;
            if ("endTag" == e || "selfcloseTag" == e) {
              var i = n.tagName,
                r = n.tagStart;
              return (
                (n.tagName = n.tagStart = null),
                "selfcloseTag" == e || l.autoSelfClosers.hasOwnProperty(g(i))
                  ? v(n, i)
                  : (v(n, i), (n.context = new D(n, i, r == n.indented))),
                k
              );
            }
            return (o = "error"), E;
          }
          function A(e, t, n) {
            return "equals" == e
              ? w
              : (l.allowMissing || (o = "error"), E(e, t, n));
          }
          function w(e, t, n) {
            return "string" == e
              ? S
              : "word" == e && l.allowUnquoted
              ? ((o = "string"), E)
              : ((o = "error"), E(e, t, n));
          }
          function S(e, t, n) {
            return "string" == e ? S : E(e, t, n);
          }
          return (
            (m.isInText = !0),
            {
              startState: function (e) {
                var t = {
                  tokenize: m,
                  state: k,
                  indented: e || 0,
                  tagName: null,
                  tagStart: null,
                  context: null,
                };
                return null != e && (t.baseIndent = e), t;
              },
              token: function (e, t) {
                if (
                  (!t.tagName && e.sol() && (t.indented = e.indentation()),
                  e.eatSpace())
                )
                  return null;
                a = null;
                var n = t.tokenize(e, t);
                return (
                  (n || a) &&
                    "comment" != n &&
                    ((o = null),
                    (t.state = t.state(a || n, e, t)),
                    o && (n = "error" == o ? n + " error" : o)),
                  n
                );
              },
              indent: function (t, n, i) {
                var r = t.context;
                if (t.tokenize.isInAttribute)
                  return t.tagStart == t.indented
                    ? t.stringStartCol + 1
                    : t.indented + s;
                if (r && r.noIndent) return e.Pass;
                if (t.tokenize != d && t.tokenize != m)
                  return i ? i.match(/^(\s*)/)[0].length : 0;
                if (t.tagName)
                  return !1 !== l.multilineTagIndentPastTag
                    ? t.tagStart + t.tagName.length + 2
                    : t.tagStart + s * (l.multilineTagIndentFactor || 1);
                if (l.alignCDATA && /<!\[CDATA\[/.test(n)) return 0;
                var a = n && /^<(\/)?([\w_:\.-]*)/.exec(n);
                if (a && a[1])
                  for (; r; ) {
                    if (r.tagName == a[2]) {
                      r = r.prev;
                      break;
                    }
                    if (!l.implicitlyClosed.hasOwnProperty(g(r.tagName))) break;
                    r = r.prev;
                  }
                else if (a)
                  for (; r; ) {
                    var o = l.contextGrabbers[g(r.tagName)];
                    if (!o || !o.hasOwnProperty(g(a[2]))) break;
                    r = r.prev;
                  }
                for (; r && r.prev && !r.startOfLine; ) r = r.prev;
                return r ? r.indent + s : t.baseIndent || 0;
              },
              electricInput: /<\/[\s\w:]+>$/,
              blockCommentStart: "\x3c!--",
              blockCommentEnd: "--\x3e",
              configuration: l.htmlMode ? "html" : "xml",
              helperType: l.htmlMode ? "html" : "xml",
              skipAttribute: function (e) {
                e.state == w && (e.state = E);
              },
              xmlCurrentTag: function (e) {
                return e.tagName
                  ? { name: e.tagName, close: "closeTag" == e.type }
                  : null;
              },
              xmlCurrentContext: function (e) {
                for (var t = [], n = e.context; n; n = n.prev)
                  t.push(n.tagName);
                return t.reverse();
              },
            }
          );
        }),
          e.defineMIME("text/xml", "xml"),
          e.defineMIME("application/xml", "xml"),
          e.mimeModes.hasOwnProperty("text/html") ||
            e.defineMIME("text/html", { name: "xml", htmlMode: !0 });
      })(n(4631));
    },
    6912: function (e, t, n) {
      var i = n(4631);
      (i.commands.tabAndIndentMarkdownList = function (e) {
        var t = e.listSelections()[0].head;
        if (!1 !== e.getStateAfter(t.line).list) e.execCommand("indentMore");
        else if (e.options.indentWithTabs) e.execCommand("insertTab");
        else {
          var n = Array(e.options.tabSize + 1).join(" ");
          e.replaceSelection(n);
        }
      }),
        (i.commands.shiftTabAndUnindentMarkdownList = function (e) {
          var t = e.listSelections()[0].head;
          if (!1 !== e.getStateAfter(t.line).list) e.execCommand("indentLess");
          else if (e.options.indentWithTabs) e.execCommand("insertTab");
          else {
            var n = Array(e.options.tabSize + 1).join(" ");
            e.replaceSelection(n);
          }
        });
    },
    4442: function (e, t, n) {
      "use strict";
      var i = n(4631);
      n(3350),
        n(6912),
        n(960),
        n(9047),
        n(4146),
        n(8386),
        n(1994),
        n(4020),
        n(2095),
        n(2425),
        n(9589);
      var r = n(2354),
        a = n(7084),
        o = /Mac/.test(navigator.platform),
        s = new RegExp(/(<a.*?https?:\/\/.*?[^a]>)+?/g),
        l = {
          toggleBold: C,
          toggleItalic: y,
          drawLink: z,
          toggleHeadingSmaller: w,
          toggleHeadingBigger: S,
          drawImage: N,
          toggleBlockquote: A,
          toggleOrderedList: L,
          toggleUnorderedList: M,
          toggleCodeBlock: E,
          togglePreview: U,
          toggleStrikethrough: F,
          toggleHeading1: B,
          toggleHeading2: T,
          toggleHeading3: _,
          cleanBlock: I,
          drawTable: R,
          drawHorizontalRule: q,
          undo: P,
          redo: $,
          toggleSideBySide: H,
          toggleFullScreen: b,
        },
        u = {
          toggleBold: "Cmd-B",
          toggleItalic: "Cmd-I",
          drawLink: "Cmd-K",
          toggleHeadingSmaller: "Cmd-H",
          toggleHeadingBigger: "Shift-Cmd-H",
          cleanBlock: "Cmd-E",
          drawImage: "Cmd-Alt-I",
          toggleBlockquote: "Cmd-'",
          toggleOrderedList: "Cmd-Alt-L",
          toggleUnorderedList: "Cmd-L",
          toggleCodeBlock: "Cmd-Alt-C",
          togglePreview: "Cmd-P",
          toggleSideBySide: "F9",
          toggleFullScreen: "F11",
        },
        c = function () {
          var e,
            t = !1;
          return (
            (e = navigator.userAgent || navigator.vendor || window.opera),
            (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(
              e
            ) ||
              /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw-(n|u)|c55\/|capi|ccwa|cdm-|cell|chtm|cldc|cmd-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc-s|devi|dica|dmob|do(c|p)o|ds(12|-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(-|_)|g1 u|g560|gene|gf-5|g-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd-(m|p|t)|hei-|hi(pt|ta)|hp( i|ip)|hs-c|ht(c(-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i-(20|go|ma)|i230|iac( |-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|-[a-w])|libw|lynx|m1-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|-([1-8]|c))|phil|pire|pl(ay|uc)|pn-2|po(ck|rt|se)|prox|psio|pt-g|qa-a|qc(07|12|21|32|60|-[2-7]|i-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h-|oo|p-)|sdk\/|se(c(-|0|1)|47|mc|nd|ri)|sgh-|shar|sie(-|m)|sk-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h-|v-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl-|tdg-|tel(i|m)|tim-|t-mo|to(pl|sh)|ts(70|m-|m3|m5)|tx-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas-|your|zeto|zte-/i.test(
                e.substr(0, 4)
              )) &&
              (t = !0),
            t
          );
        };
      function m(e) {
        return (e = o ? e.replace("Ctrl", "Cmd") : e.replace("Cmd", "Ctrl"));
      }
      var d = {};
      function p(e) {
        return d[e] || (d[e] = new RegExp("\\s*" + e + "(\\s*)", "g"));
      }
      function h(e, t) {
        if (e && t) {
          var n = p(t);
          e.className.match(n) || (e.className += " " + t);
        }
      }
      function f(e, t) {
        if (e && t) {
          var n = p(t);
          e.className.match(n) && (e.className = e.className.replace(n, "$1"));
        }
      }
      function g(e, t, n, i) {
        var r = D(e, !1, t, n, "button", i);
        r.className += " easymde-dropdown";
        var a = document.createElement("div");
        a.className = "easymde-dropdown-content";
        for (var o = 0; o < e.children.length; o++) {
          var s,
            l = e.children[o];
          (s = D(
            "string" === typeof l && l in Y ? Y[l] : l,
            !0,
            t,
            n,
            "button",
            i
          )),
            a.appendChild(s);
        }
        return r.appendChild(a), r;
      }
      function D(e, t, n, i, r, a) {
        e = e || {};
        var s = document.createElement(r);
        (s.className = e.name),
          s.setAttribute("type", r),
          (n = void 0 == n || n),
          e.name && e.name in i && (l[e.name] = e.action),
          e.title &&
            n &&
            ((s.title = (function (e, t, n) {
              var i,
                r = e;
              t &&
                n[
                  (i = (function (e) {
                    for (var t in l) if (l[t] === e) return t;
                    return null;
                  })(t))
                ] &&
                (r += " (" + m(n[i]) + ")");
              return r;
            })(e.title, e.action, i)),
            o &&
              ((s.title = s.title.replace("Ctrl", "\u2318")),
              (s.title = s.title.replace("Alt", "\u2325")))),
          e.noDisable && s.classList.add("no-disable"),
          e.noMobile && s.classList.add("no-mobile");
        var u = [];
        "undefined" !== typeof e.className && (u = e.className.split(" "));
        for (var c = [], d = 0; d < u.length; d++) {
          var p = u[d];
          p.match(/^fa([srlb]|(-[\w-]*)|$)/) ? c.push(p) : s.classList.add(p);
        }
        s.tabIndex = -1;
        for (var h = document.createElement("i"), f = 0; f < c.length; f++) {
          var g = c[f];
          h.classList.add(g);
        }
        return (
          s.appendChild(h),
          "undefined" !== typeof e.icon && (s.innerHTML = e.icon),
          e.action &&
            t &&
            ("function" === typeof e.action
              ? (s.onclick = function (t) {
                  t.preventDefault(), e.action(a);
                })
              : "string" === typeof e.action &&
                (s.onclick = function (t) {
                  t.preventDefault(), window.open(e.action, "_blank");
                })),
          s
        );
      }
      function x() {
        var e = document.createElement("i");
        return (e.className = "separator"), (e.innerHTML = "|"), e;
      }
      function v(e, t) {
        t = t || e.getCursor("start");
        var n = e.getTokenAt(t);
        if (!n.type) return {};
        for (var i, r, a = n.type.split(" "), o = {}, s = 0; s < a.length; s++)
          "strong" === (i = a[s])
            ? (o.bold = !0)
            : "variable-2" === i
            ? ((r = e.getLine(t.line)),
              /^\s*\d+\.\s/.test(r)
                ? (o["ordered-list"] = !0)
                : (o["unordered-list"] = !0))
            : "atom" === i
            ? (o.quote = !0)
            : "em" === i
            ? (o.italic = !0)
            : "quote" === i
            ? (o.quote = !0)
            : "strikethrough" === i
            ? (o.strikethrough = !0)
            : "comment" === i
            ? (o.code = !0)
            : "link" === i
            ? (o.link = !0)
            : "tag" === i
            ? (o.image = !0)
            : i.match(/^header(-[1-6])?$/) &&
              (o[i.replace("header", "heading")] = !0);
        return o;
      }
      var k = "";
      function b(e) {
        var t = e.codemirror;
        t.setOption("fullScreen", !t.getOption("fullScreen")),
          t.getOption("fullScreen")
            ? ((k = document.body.style.overflow),
              (document.body.style.overflow = "hidden"))
            : (document.body.style.overflow = k);
        var n = t.getWrapperElement(),
          i = n.nextSibling;
        if (/editor-preview-active-side/.test(i.className))
          if (!1 === e.options.sideBySideFullscreen) {
            var r = n.parentNode;
            t.getOption("fullScreen")
              ? f(r, "sided--no-fullscreen")
              : h(r, "sided--no-fullscreen");
          } else H(e);
        if (
          (e.options.onToggleFullScreen &&
            e.options.onToggleFullScreen(t.getOption("fullScreen") || !1),
          "undefined" !== typeof e.options.maxHeight &&
            (t.getOption("fullScreen")
              ? (t.getScrollerElement().style.removeProperty("height"),
                i.style.removeProperty("height"))
              : ((t.getScrollerElement().style.height = e.options.maxHeight),
                e.setPreviewMaxHeight())),
          /fullscreen/.test(e.toolbar_div.className)
            ? (e.toolbar_div.className = e.toolbar_div.className.replace(
                /\s*fullscreen\b/,
                ""
              ))
            : (e.toolbar_div.className += " fullscreen"),
          e.toolbarElements && e.toolbarElements.fullscreen)
        ) {
          var a = e.toolbarElements.fullscreen;
          /active/.test(a.className)
            ? (a.className = a.className.replace(/\s*active\s*/g, ""))
            : (a.className += " active");
        }
      }
      function C(e) {
        V(e, "bold", e.options.blockStyles.bold);
      }
      function y(e) {
        V(e, "italic", e.options.blockStyles.italic);
      }
      function F(e) {
        V(e, "strikethrough", "~~");
      }
      function E(e) {
        var t = e.options.blockStyles.code;
        function n(e) {
          if ("object" !== typeof e)
            throw (
              "fencing_line() takes a 'line' object (not a line number, or line text).  Got: " +
              typeof e +
              ": " +
              e
            );
          return (
            e.styles &&
            e.styles[2] &&
            -1 !== e.styles[2].indexOf("formatting-code-block")
          );
        }
        function i(e) {
          return e.state.base.base || e.state.base;
        }
        function r(e, t, r, a, o) {
          (r = r || e.getLineHandle(t)),
            (a = a || e.getTokenAt({ line: t, ch: 1 })),
            (o =
              o ||
              (!!r.text && e.getTokenAt({ line: t, ch: r.text.length - 1 })));
          var s = a.type ? a.type.split(" ") : [];
          return o && i(o).indentedCode
            ? "indented"
            : -1 !== s.indexOf("comment") &&
                (i(a).fencedChars || i(o).fencedChars || n(r)
                  ? "fenced"
                  : "single");
        }
        var a,
          o,
          s,
          l = e.codemirror,
          u = l.getCursor("start"),
          c = l.getCursor("end"),
          m = l.getTokenAt({ line: u.line, ch: u.ch || 1 }),
          d = l.getLineHandle(u.line),
          p = r(l, u.line, d, m);
        if ("single" === p) {
          var h = d.text.slice(0, u.ch).replace("`", ""),
            f = d.text.slice(u.ch).replace("`", "");
          l.replaceRange(
            h + f,
            { line: u.line, ch: 0 },
            { line: u.line, ch: 99999999999999 }
          ),
            u.ch--,
            u !== c && c.ch--,
            l.setSelection(u, c),
            l.focus();
        } else if ("fenced" === p)
          if (u.line !== c.line || u.ch !== c.ch) {
            for (a = u.line; a >= 0 && !n((d = l.getLineHandle(a))); a--);
            var g,
              D,
              x,
              v,
              k = i(l.getTokenAt({ line: a, ch: 1 })).fencedChars;
            n(l.getLineHandle(u.line))
              ? ((g = ""), (D = u.line))
              : n(l.getLineHandle(u.line - 1))
              ? ((g = ""), (D = u.line - 1))
              : ((g = k + "\n"), (D = u.line)),
              n(l.getLineHandle(c.line))
                ? ((x = ""), (v = c.line), 0 === c.ch && (v += 1))
                : 0 !== c.ch && n(l.getLineHandle(c.line + 1))
                ? ((x = ""), (v = c.line + 1))
                : ((x = k + "\n"), (v = c.line + 1)),
              0 === c.ch && (v -= 1),
              l.operation(function () {
                l.replaceRange(
                  x,
                  { line: v, ch: 0 },
                  { line: v + (x ? 0 : 1), ch: 0 }
                ),
                  l.replaceRange(
                    g,
                    { line: D, ch: 0 },
                    { line: D + (g ? 0 : 1), ch: 0 }
                  );
              }),
              l.setSelection(
                { line: D + (g ? 1 : 0), ch: 0 },
                { line: v + (g ? 1 : -1), ch: 0 }
              ),
              l.focus();
          } else {
            var b = u.line;
            if (
              (n(l.getLineHandle(u.line)) &&
                ("fenced" === r(l, u.line + 1)
                  ? ((a = u.line), (b = u.line + 1))
                  : ((o = u.line), (b = u.line - 1))),
              void 0 === a)
            )
              for (a = b; a >= 0 && !n((d = l.getLineHandle(a))); a--);
            if (void 0 === o)
              for (
                s = l.lineCount(), o = b;
                o < s && !n((d = l.getLineHandle(o)));
                o++
              );
            l.operation(function () {
              l.replaceRange("", { line: a, ch: 0 }, { line: a + 1, ch: 0 }),
                l.replaceRange("", { line: o - 1, ch: 0 }, { line: o, ch: 0 });
            }),
              l.focus();
          }
        else if ("indented" === p) {
          if (u.line !== c.line || u.ch !== c.ch)
            (a = u.line), (o = c.line), 0 === c.ch && o--;
          else {
            for (a = u.line; a >= 0; a--)
              if (
                !(d = l.getLineHandle(a)).text.match(/^\s*$/) &&
                "indented" !== r(l, a, d)
              ) {
                a += 1;
                break;
              }
            for (s = l.lineCount(), o = u.line; o < s; o++)
              if (
                !(d = l.getLineHandle(o)).text.match(/^\s*$/) &&
                "indented" !== r(l, o, d)
              ) {
                o -= 1;
                break;
              }
          }
          var C = l.getLineHandle(o + 1),
            y = C && l.getTokenAt({ line: o + 1, ch: C.text.length - 1 });
          y &&
            i(y).indentedCode &&
            l.replaceRange("\n", { line: o + 1, ch: 0 });
          for (var F = a; F <= o; F++) l.indentLine(F, "subtract");
          l.focus();
        } else {
          var E = u.line === c.line && u.ch === c.ch && 0 === u.ch,
            A = u.line !== c.line;
          E || A
            ? (function (e, t, n, i) {
                var r = t.line + 1,
                  a = n.line + 1,
                  o = t.line !== n.line,
                  s = i + "\n",
                  l = "\n" + i;
                o && a++,
                  o && 0 === n.ch && ((l = i + "\n"), a--),
                  W(e, !1, [s, l]),
                  e.setSelection({ line: r, ch: 0 }, { line: a, ch: 0 });
              })(l, u, c, t)
            : W(l, !1, ["`", "`"]);
        }
      }
      function A(e) {
        G(e.codemirror, "quote");
      }
      function w(e) {
        Z(e.codemirror, "smaller");
      }
      function S(e) {
        Z(e.codemirror, "bigger");
      }
      function B(e) {
        Z(e.codemirror, void 0, 1);
      }
      function T(e) {
        Z(e.codemirror, void 0, 2);
      }
      function _(e) {
        Z(e.codemirror, void 0, 3);
      }
      function M(e) {
        G(e.codemirror, "unordered-list");
      }
      function L(e) {
        G(e.codemirror, "ordered-list");
      }
      function I(e) {
        !(function (e) {
          if (
            /editor-preview-active/.test(
              e.getWrapperElement().lastChild.className
            )
          )
            return;
          for (
            var t, n = e.getCursor("start"), i = e.getCursor("end"), r = n.line;
            r <= i.line;
            r++
          )
            (t = (t = e.getLine(r)).replace(
              /^[ ]*([# ]+|\*|-|[> ]+|[0-9]+(.|\)))[ ]*/,
              ""
            )),
              e.replaceRange(
                t,
                { line: r, ch: 0 },
                { line: r, ch: 99999999999999 }
              );
        })(e.codemirror);
      }
      function z(e) {
        var t = e.codemirror,
          n = v(t),
          i = e.options,
          r = "https://";
        if (i.promptURLs && !(r = prompt(i.promptTexts.link, "https://")))
          return !1;
        W(t, n.link, i.insertTexts.link, r);
      }
      function N(e) {
        var t = e.codemirror,
          n = v(t),
          i = e.options,
          r = "https://";
        if (i.promptURLs && !(r = prompt(i.promptTexts.image, "https://")))
          return !1;
        W(t, n.image, i.insertTexts.image, r);
      }
      function O(e) {
        e.openBrowseFileWindow();
      }
      function j(e, t) {
        var n = e.codemirror,
          i = v(n),
          r = e.options,
          a = t.substr(t.lastIndexOf("/") + 1),
          o = a.substring(a.lastIndexOf(".") + 1).replace(/\?.*$/, "");
        if (["png", "jpg", "jpeg", "gif", "svg"].includes(o))
          W(n, i.image, r.insertTexts.uploadedImage, t);
        else {
          var s = r.insertTexts.link;
          (s[0] = "[" + a), W(n, i.link, s, t);
        }
        e.updateStatusBar(
          "upload-image",
          e.options.imageTexts.sbOnUploaded.replace("#image_name#", a)
        ),
          setTimeout(function () {
            e.updateStatusBar("upload-image", e.options.imageTexts.sbInit);
          }, 1e3);
      }
      function R(e) {
        var t = e.codemirror,
          n = v(t),
          i = e.options;
        W(t, n.table, i.insertTexts.table);
      }
      function q(e) {
        var t = e.codemirror,
          n = v(t),
          i = e.options;
        W(t, n.image, i.insertTexts.horizontalRule);
      }
      function P(e) {
        var t = e.codemirror;
        t.undo(), t.focus();
      }
      function $(e) {
        var t = e.codemirror;
        t.redo(), t.focus();
      }
      function H(e) {
        var t = e.codemirror,
          n = t.getWrapperElement(),
          i = n.nextSibling,
          r = e.toolbarElements && e.toolbarElements["side-by-side"],
          a = !1,
          o = n.parentNode;
        /editor-preview-active-side/.test(i.className)
          ? (!1 === e.options.sideBySideFullscreen &&
              f(o, "sided--no-fullscreen"),
            (i.className = i.className.replace(
              /\s*editor-preview-active-side\s*/g,
              ""
            )),
            r && (r.className = r.className.replace(/\s*active\s*/g, "")),
            (n.className = n.className.replace(/\s*CodeMirror-sided\s*/g, " ")))
          : (setTimeout(function () {
              t.getOption("fullScreen") ||
                (!1 === e.options.sideBySideFullscreen
                  ? h(o, "sided--no-fullscreen")
                  : b(e)),
                (i.className += " editor-preview-active-side");
            }, 1),
            r && (r.className += " active"),
            (n.className += " CodeMirror-sided"),
            (a = !0));
        var s = n.lastChild;
        if (/editor-preview-active/.test(s.className)) {
          s.className = s.className.replace(/\s*editor-preview-active\s*/g, "");
          var l = e.toolbarElements.preview,
            u = e.toolbar_div;
          (l.className = l.className.replace(/\s*active\s*/g, "")),
            (u.className = u.className.replace(
              /\s*disabled-for-preview*/g,
              ""
            ));
        }
        if (
          (t.sideBySideRenderingFunction ||
            (t.sideBySideRenderingFunction = function () {
              var t = e.options.previewRender(e.value(), i);
              null != t && (i.innerHTML = t);
            }),
          a)
        ) {
          var c = e.options.previewRender(e.value(), i);
          null != c && (i.innerHTML = c),
            t.on("update", t.sideBySideRenderingFunction);
        } else t.off("update", t.sideBySideRenderingFunction);
        t.refresh();
      }
      function U(e) {
        var t = e.codemirror,
          n = t.getWrapperElement(),
          i = e.toolbar_div,
          r = !!e.options.toolbar && e.toolbarElements.preview,
          a = n.lastChild,
          o = t.getWrapperElement().nextSibling;
        if (
          (/editor-preview-active-side/.test(o.className) && H(e),
          !a || !/editor-preview-full/.test(a.className))
        ) {
          if (
            (((a = document.createElement("div")).className =
              "editor-preview-full"),
            e.options.previewClass)
          )
            if (Array.isArray(e.options.previewClass))
              for (var s = 0; s < e.options.previewClass.length; s++)
                a.className += " " + e.options.previewClass[s];
            else
              "string" === typeof e.options.previewClass &&
                (a.className += " " + e.options.previewClass);
          n.appendChild(a);
        }
        /editor-preview-active/.test(a.className)
          ? ((a.className = a.className.replace(
              /\s*editor-preview-active\s*/g,
              ""
            )),
            r &&
              ((r.className = r.className.replace(/\s*active\s*/g, "")),
              (i.className = i.className.replace(
                /\s*disabled-for-preview*/g,
                ""
              ))))
          : (setTimeout(function () {
              a.className += " editor-preview-active";
            }, 1),
            r &&
              ((r.className += " active"),
              (i.className += " disabled-for-preview"))),
          (a.innerHTML = e.options.previewRender(e.value(), a));
      }
      function W(e, t, n, i) {
        if (
          !/editor-preview-active/.test(
            e.getWrapperElement().lastChild.className
          )
        ) {
          var r,
            a = n[0],
            o = n[1],
            s = {},
            l = {};
          Object.assign(s, e.getCursor("start")),
            Object.assign(l, e.getCursor("end")),
            i && ((a = a.replace("#url#", i)), (o = o.replace("#url#", i))),
            t
              ? ((a = (r = e.getLine(s.line)).slice(0, s.ch)),
                (o = r.slice(s.ch)),
                e.replaceRange(a + o, { line: s.line, ch: 0 }))
              : ((r = e.getSelection()),
                e.replaceSelection(a + r + o),
                (s.ch += a.length),
                s !== l && (l.ch += a.length)),
            e.setSelection(s, l),
            e.focus();
        }
      }
      function Z(e, t, n) {
        if (
          !/editor-preview-active/.test(
            e.getWrapperElement().lastChild.className
          )
        ) {
          for (
            var i = e.getCursor("start"), r = e.getCursor("end"), a = i.line;
            a <= r.line;
            a++
          )
            !(function (i) {
              var r = e.getLine(i),
                a = r.search(/[^#]/);
              (r =
                void 0 !== t
                  ? a <= 0
                    ? "bigger" == t
                      ? "###### " + r
                      : "# " + r
                    : 6 == a && "smaller" == t
                    ? r.substr(7)
                    : 1 == a && "bigger" == t
                    ? r.substr(2)
                    : "bigger" == t
                    ? r.substr(1)
                    : "#" + r
                  : 1 == n
                  ? a <= 0
                    ? "# " + r
                    : a == n
                    ? r.substr(a + 1)
                    : "# " + r.substr(a + 1)
                  : 2 == n
                  ? a <= 0
                    ? "## " + r
                    : a == n
                    ? r.substr(a + 1)
                    : "## " + r.substr(a + 1)
                  : a <= 0
                  ? "### " + r
                  : a == n
                  ? r.substr(a + 1)
                  : "### " + r.substr(a + 1)),
                e.replaceRange(
                  r,
                  { line: i, ch: 0 },
                  { line: i, ch: 99999999999999 }
                );
            })(a);
          e.focus();
        }
      }
      function G(e, t) {
        if (
          !/editor-preview-active/.test(
            e.getWrapperElement().lastChild.className
          )
        ) {
          for (
            var n = /^(\s*)(\*|-|\+|\d*\.)(\s+)/,
              i = /^\s*/,
              r = v(e),
              a = e.getCursor("start"),
              o = e.getCursor("end"),
              s = {
                quote: /^(\s*)>\s+/,
                "unordered-list": n,
                "ordered-list": n,
              },
              l = function (e, t, r) {
                var a = n.exec(t),
                  o = (function (e, t) {
                    return {
                      quote: ">",
                      "unordered-list": "*",
                      "ordered-list": "%%i.",
                    }[e].replace("%%i", t);
                  })(e, u);
                return (
                  null !== a
                    ? ((function (e, t) {
                        var n = new RegExp(
                          {
                            quote: ">",
                            "unordered-list": "*",
                            "ordered-list": "\\d+.",
                          }[e]
                        );
                        return t && n.test(t);
                      })(e, a[2]) && (o = ""),
                      (t =
                        a[1] + o + a[3] + t.replace(i, "").replace(s[e], "$1")))
                    : 0 == r && (t = o + " " + t),
                  t
                );
              },
              u = 1,
              c = a.line;
            c <= o.line;
            c++
          )
            !(function (n) {
              var i = e.getLine(n);
              r[t]
                ? (i = i.replace(s[t], "$1"))
                : ("unordered-list" == t && (i = l("ordered-list", i, !0)),
                  (i = l(t, i, !1)),
                  (u += 1)),
                e.replaceRange(
                  i,
                  { line: n, ch: 0 },
                  { line: n, ch: 99999999999999 }
                );
            })(c);
          e.focus();
        }
      }
      function V(e, t, n, i) {
        if (
          !/editor-preview-active/.test(
            e.codemirror.getWrapperElement().lastChild.className
          )
        ) {
          i = "undefined" === typeof i ? n : i;
          var r,
            a = e.codemirror,
            o = v(a),
            s = n,
            l = i,
            u = a.getCursor("start"),
            c = a.getCursor("end");
          o[t]
            ? ((s = (r = a.getLine(u.line)).slice(0, u.ch)),
              (l = r.slice(u.ch)),
              "bold" == t
                ? ((s = s.replace(/(\*\*|__)(?![\s\S]*(\*\*|__))/, "")),
                  (l = l.replace(/(\*\*|__)/, "")))
                : "italic" == t
                ? ((s = s.replace(/(\*|_)(?![\s\S]*(\*|_))/, "")),
                  (l = l.replace(/(\*|_)/, "")))
                : "strikethrough" == t &&
                  ((s = s.replace(/(\*\*|~~)(?![\s\S]*(\*\*|~~))/, "")),
                  (l = l.replace(/(\*\*|~~)/, ""))),
              a.replaceRange(
                s + l,
                { line: u.line, ch: 0 },
                { line: u.line, ch: 99999999999999 }
              ),
              "bold" == t || "strikethrough" == t
                ? ((u.ch -= 2), u !== c && (c.ch -= 2))
                : "italic" == t && ((u.ch -= 1), u !== c && (c.ch -= 1)))
            : ((r = a.getSelection()),
              "bold" == t
                ? (r = (r = r.split("**").join("")).split("__").join(""))
                : "italic" == t
                ? (r = (r = r.split("*").join("")).split("_").join(""))
                : "strikethrough" == t && (r = r.split("~~").join("")),
              a.replaceSelection(s + r + l),
              (u.ch += n.length),
              (c.ch = u.ch + r.length)),
            a.setSelection(u, c),
            a.focus();
        }
      }
      function X(e, t) {
        if (Math.abs(e) < 1024) return "" + e + t[0];
        var n = 0;
        do {
          (e /= 1024), ++n;
        } while (Math.abs(e) >= 1024 && n < t.length);
        return "" + e.toFixed(1) + t[n];
      }
      function K(e, t) {
        for (var n in t)
          Object.prototype.hasOwnProperty.call(t, n) &&
            (t[n] instanceof Array
              ? (e[n] = t[n].concat(e[n] instanceof Array ? e[n] : []))
              : null !== t[n] &&
                "object" === typeof t[n] &&
                t[n].constructor === Object
              ? (e[n] = K(e[n] || {}, t[n]))
              : (e[n] = t[n]));
        return e;
      }
      function J(e) {
        for (var t = 1; t < arguments.length; t++) e = K(e, arguments[t]);
        return e;
      }
      function Q(e) {
        var t = e.match(
            /[a-zA-Z0-9_\u00A0-\u02AF\u0392-\u03c9\u0410-\u04F9]+|[\u4E00-\u9FFF\u3400-\u4dbf\uf900-\ufaff\u3040-\u309f\uac00-\ud7af]+/g
          ),
          n = 0;
        if (null === t) return n;
        for (var i = 0; i < t.length; i++)
          t[i].charCodeAt(0) >= 19968 ? (n += t[i].length) : (n += 1);
        return n;
      }
      var Y = {
          bold: {
            name: "bold",
            action: C,
            className: "fa fa-bold",
            title: "Bold",
            default: !0,
          },
          italic: {
            name: "italic",
            action: y,
            className: "fa fa-italic",
            title: "Italic",
            default: !0,
          },
          strikethrough: {
            name: "strikethrough",
            action: F,
            className: "fa fa-strikethrough",
            title: "Strikethrough",
          },
          heading: {
            name: "heading",
            action: w,
            className: "fa fa-header fa-heading",
            title: "Heading",
            default: !0,
          },
          "heading-smaller": {
            name: "heading-smaller",
            action: w,
            className: "fa fa-header fa-heading header-smaller",
            title: "Smaller Heading",
          },
          "heading-bigger": {
            name: "heading-bigger",
            action: S,
            className: "fa fa-header fa-heading header-bigger",
            title: "Bigger Heading",
          },
          "heading-1": {
            name: "heading-1",
            action: B,
            className: "fa fa-header fa-heading header-1",
            title: "Big Heading",
          },
          "heading-2": {
            name: "heading-2",
            action: T,
            className: "fa fa-header fa-heading header-2",
            title: "Medium Heading",
          },
          "heading-3": {
            name: "heading-3",
            action: _,
            className: "fa fa-header fa-heading header-3",
            title: "Small Heading",
          },
          "separator-1": { name: "separator-1" },
          code: {
            name: "code",
            action: E,
            className: "fa fa-code",
            title: "Code",
          },
          quote: {
            name: "quote",
            action: A,
            className: "fa fa-quote-left",
            title: "Quote",
            default: !0,
          },
          "unordered-list": {
            name: "unordered-list",
            action: M,
            className: "fa fa-list-ul",
            title: "Generic List",
            default: !0,
          },
          "ordered-list": {
            name: "ordered-list",
            action: L,
            className: "fa fa-list-ol",
            title: "Numbered List",
            default: !0,
          },
          "clean-block": {
            name: "clean-block",
            action: I,
            className: "fa fa-eraser",
            title: "Clean block",
          },
          "separator-2": { name: "separator-2" },
          link: {
            name: "link",
            action: z,
            className: "fa fa-link",
            title: "Create Link",
            default: !0,
          },
          image: {
            name: "image",
            action: N,
            className: "fa fa-image",
            title: "Insert Image",
            default: !0,
          },
          "upload-image": {
            name: "upload-image",
            action: O,
            className: "fa fa-image",
            title: "Import an image",
          },
          table: {
            name: "table",
            action: R,
            className: "fa fa-table",
            title: "Insert Table",
          },
          "horizontal-rule": {
            name: "horizontal-rule",
            action: q,
            className: "fa fa-minus",
            title: "Insert Horizontal Line",
          },
          "separator-3": { name: "separator-3" },
          preview: {
            name: "preview",
            action: U,
            className: "fa fa-eye",
            noDisable: !0,
            title: "Toggle Preview",
            default: !0,
          },
          "side-by-side": {
            name: "side-by-side",
            action: H,
            className: "fa fa-columns",
            noDisable: !0,
            noMobile: !0,
            title: "Toggle Side by Side",
            default: !0,
          },
          fullscreen: {
            name: "fullscreen",
            action: b,
            className: "fa fa-arrows-alt",
            noDisable: !0,
            noMobile: !0,
            title: "Toggle Fullscreen",
            default: !0,
          },
          "separator-4": { name: "separator-4" },
          guide: {
            name: "guide",
            action: "https://www.markdownguide.org/basic-syntax/",
            className: "fa fa-question-circle",
            noDisable: !0,
            title: "Markdown Guide",
            default: !0,
          },
          "separator-5": { name: "separator-5" },
          undo: {
            name: "undo",
            action: P,
            className: "fa fa-undo",
            noDisable: !0,
            title: "Undo",
          },
          redo: {
            name: "redo",
            action: $,
            className: "fa fa-repeat fa-redo",
            noDisable: !0,
            title: "Redo",
          },
        },
        ee = {
          link: ["[", "](#url#)"],
          image: ["![](", "#url#)"],
          uploadedImage: ["![](#url#)", ""],
          table: [
            "",
            "\n\n| Column 1 | Column 2 | Column 3 |\n| -------- | -------- | -------- |\n| Text     | Text     | Text     |\n\n",
          ],
          horizontalRule: ["", "\n\n-----\n\n"],
        },
        te = { link: "URL for the link:", image: "URL of the image:" },
        ne = {
          locale: "en-US",
          format: { hour: "2-digit", minute: "2-digit" },
        },
        ie = { bold: "**", code: "```", italic: "*" },
        re = {
          sbInit:
            "Attach files by drag and dropping or pasting from clipboard.",
          sbOnDragEnter: "Drop image to upload it.",
          sbOnDrop: "Uploading image #images_names#...",
          sbProgress: "Uploading #file_name#: #progress#%",
          sbOnUploaded: "Uploaded #image_name#",
          sizeUnits: " B, KB, MB",
        },
        ae = {
          noFileGiven: "You must select a file.",
          typeNotAllowed: "This image type is not allowed.",
          fileTooLarge:
            "Image #image_name# is too big (#image_size#).\nMaximum file size is #image_max_size#.",
          importError:
            "Something went wrong when uploading the image #image_name#.",
        };
      function oe(e) {
        (e = e || {}).parent = this;
        var t = !0;
        if (
          (!1 === e.autoDownloadFontAwesome && (t = !1),
          !0 !== e.autoDownloadFontAwesome)
        )
          for (var n = document.styleSheets, i = 0; i < n.length; i++)
            n[i].href &&
              n[i].href.indexOf("//maxcdn.bootstrapcdn.com/font-awesome/") >
                -1 &&
              (t = !1);
        if (t) {
          var r = document.createElement("link");
          (r.rel = "stylesheet"),
            (r.href =
              "https://maxcdn.bootstrapcdn.com/font-awesome/latest/css/font-awesome.min.css"),
            document.getElementsByTagName("head")[0].appendChild(r);
        }
        if (e.element) this.element = e.element;
        else if (null === e.element)
          return void console.log("EasyMDE: Error. No element was found.");
        if (void 0 === e.toolbar)
          for (var a in ((e.toolbar = []), Y))
            Object.prototype.hasOwnProperty.call(Y, a) &&
              (-1 != a.indexOf("separator-") && e.toolbar.push("|"),
              (!0 === Y[a].default ||
                (e.showIcons &&
                  e.showIcons.constructor === Array &&
                  -1 != e.showIcons.indexOf(a))) &&
                e.toolbar.push(a));
        if (
          (Object.prototype.hasOwnProperty.call(e, "previewClass") ||
            (e.previewClass = "editor-preview"),
          Object.prototype.hasOwnProperty.call(e, "status") ||
            ((e.status = ["autosave", "lines", "words", "cursor"]),
            e.uploadImage && e.status.unshift("upload-image")),
          e.previewRender ||
            (e.previewRender = function (e) {
              return this.parent.markdown(e);
            }),
          (e.parsingConfig = J(
            { highlightFormatting: !0 },
            e.parsingConfig || {}
          )),
          (e.insertTexts = J({}, ee, e.insertTexts || {})),
          (e.promptTexts = J({}, te, e.promptTexts || {})),
          (e.blockStyles = J({}, ie, e.blockStyles || {})),
          void 0 != e.autosave &&
            (e.autosave.timeFormat = J({}, ne, e.autosave.timeFormat || {})),
          (e.shortcuts = J({}, u, e.shortcuts || {})),
          (e.maxHeight = e.maxHeight || void 0),
          "undefined" !== typeof e.maxHeight
            ? (e.minHeight = e.maxHeight)
            : (e.minHeight = e.minHeight || "300px"),
          (e.errorCallback =
            e.errorCallback ||
            function (e) {
              alert(e);
            }),
          (e.uploadImage = e.uploadImage || !1),
          (e.imageMaxSize = e.imageMaxSize || 2097152),
          (e.imageAccept = e.imageAccept || "image/png, image/jpeg"),
          (e.imageTexts = J({}, re, e.imageTexts || {})),
          (e.errorMessages = J({}, ae, e.errorMessages || {})),
          void 0 != e.autosave &&
            void 0 != e.autosave.unique_id &&
            "" != e.autosave.unique_id &&
            (e.autosave.uniqueId = e.autosave.unique_id),
          e.overlayMode &&
            void 0 === e.overlayMode.combine &&
            (e.overlayMode.combine = !0),
          (this.options = e),
          this.render(),
          !e.initialValue ||
            (this.options.autosave &&
              !0 === this.options.autosave.foundSavedValue) ||
            this.value(e.initialValue),
          e.uploadImage)
        ) {
          var o = this;
          this.codemirror.on("dragenter", function (e, t) {
            o.updateStatusBar(
              "upload-image",
              o.options.imageTexts.sbOnDragEnter
            ),
              t.stopPropagation(),
              t.preventDefault();
          }),
            this.codemirror.on("dragend", function (e, t) {
              o.updateStatusBar("upload-image", o.options.imageTexts.sbInit),
                t.stopPropagation(),
                t.preventDefault();
            }),
            this.codemirror.on("dragleave", function (e, t) {
              o.updateStatusBar("upload-image", o.options.imageTexts.sbInit),
                t.stopPropagation(),
                t.preventDefault();
            }),
            this.codemirror.on("dragover", function (e, t) {
              o.updateStatusBar(
                "upload-image",
                o.options.imageTexts.sbOnDragEnter
              ),
                t.stopPropagation(),
                t.preventDefault();
            }),
            this.codemirror.on("drop", function (t, n) {
              n.stopPropagation(),
                n.preventDefault(),
                e.imageUploadFunction
                  ? o.uploadImagesUsingCustomFunction(
                      e.imageUploadFunction,
                      n.dataTransfer.files
                    )
                  : o.uploadImages(n.dataTransfer.files);
            }),
            this.codemirror.on("paste", function (t, n) {
              e.imageUploadFunction
                ? o.uploadImagesUsingCustomFunction(
                    e.imageUploadFunction,
                    n.clipboardData.files
                  )
                : o.uploadImages(n.clipboardData.files);
            });
        }
      }
      function se() {
        if ("object" !== typeof localStorage) return !1;
        try {
          localStorage.setItem("smde_localStorage", 1),
            localStorage.removeItem("smde_localStorage");
        } catch (e) {
          return !1;
        }
        return !0;
      }
      (oe.prototype.uploadImages = function (e, t, n) {
        if (0 !== e.length) {
          for (var i = [], r = 0; r < e.length; r++)
            i.push(e[r].name), this.uploadImage(e[r], t, n);
          this.updateStatusBar(
            "upload-image",
            this.options.imageTexts.sbOnDrop.replace(
              "#images_names#",
              i.join(", ")
            )
          );
        }
      }),
        (oe.prototype.uploadImagesUsingCustomFunction = function (e, t) {
          if (0 !== t.length) {
            for (var n = [], i = 0; i < t.length; i++)
              n.push(t[i].name), this.uploadImageUsingCustomFunction(e, t[i]);
            this.updateStatusBar(
              "upload-image",
              this.options.imageTexts.sbOnDrop.replace(
                "#images_names#",
                n.join(", ")
              )
            );
          }
        }),
        (oe.prototype.updateStatusBar = function (e, t) {
          if (this.gui.statusbar) {
            var n = this.gui.statusbar.getElementsByClassName(e);
            1 === n.length
              ? (this.gui.statusbar.getElementsByClassName(e)[0].textContent =
                  t)
              : 0 === n.length
              ? console.log("EasyMDE: status bar item " + e + " was not found.")
              : console.log(
                  "EasyMDE: Several status bar items named " + e + " was found."
                );
          }
        }),
        (oe.prototype.markdown = function (e) {
          if (a) {
            var t;
            if (
              ((t =
                this.options &&
                this.options.renderingConfig &&
                this.options.renderingConfig.markedOptions
                  ? this.options.renderingConfig.markedOptions
                  : {}),
              this.options &&
              this.options.renderingConfig &&
              !1 === this.options.renderingConfig.singleLineBreaks
                ? (t.breaks = !1)
                : (t.breaks = !0),
              this.options &&
                this.options.renderingConfig &&
                !0 === this.options.renderingConfig.codeSyntaxHighlighting)
            ) {
              var n = this.options.renderingConfig.hljs || window.hljs;
              n &&
                (t.highlight = function (e, t) {
                  return t && n.getLanguage(t)
                    ? n.highlight(t, e).value
                    : n.highlightAuto(e).value;
                });
            }
            a.setOptions(t);
            var i = a(e);
            return (
              this.options.renderingConfig &&
                "function" ===
                  typeof this.options.renderingConfig.sanitizerFunction &&
                (i = this.options.renderingConfig.sanitizerFunction.call(
                  this,
                  i
                )),
              (i = (function (e) {
                for (
                  var t = new DOMParser().parseFromString(e, "text/html"),
                    n = t.getElementsByTagName("li"),
                    i = 0;
                  i < n.length;
                  i++
                )
                  for (var r = n[i], a = 0; a < r.children.length; a++) {
                    var o = r.children[a];
                    o instanceof HTMLInputElement &&
                      "checkbox" === o.type &&
                      ((r.style.marginLeft = "-1.5em"),
                      (r.style.listStyleType = "none"));
                  }
                return t.documentElement.innerHTML;
              })(
                (i = (function (e) {
                  for (var t; null !== (t = s.exec(e)); ) {
                    var n = t[0];
                    if (-1 === n.indexOf("target=")) {
                      var i = n.replace(/>$/, ' target="_blank">');
                      e = e.replace(n, i);
                    }
                  }
                  return e;
                })(i))
              ))
            );
          }
        }),
        (oe.prototype.render = function (e) {
          if (
            (e ||
              (e =
                this.element || document.getElementsByTagName("textarea")[0]),
            !this._rendered || this._rendered !== e)
          ) {
            this.element = e;
            var t,
              n,
              a = this.options,
              o = this,
              s = {};
            for (var u in a.shortcuts)
              null !== a.shortcuts[u] &&
                null !== l[u] &&
                (function (e) {
                  s[m(a.shortcuts[e])] = function () {
                    var t = l[e];
                    "function" === typeof t
                      ? t(o)
                      : "string" === typeof t && window.open(t, "_blank");
                  };
                })(u);
            if (
              ((s.Enter = "newlineAndIndentContinueMarkdownList"),
              (s.Tab = "tabAndIndentMarkdownList"),
              (s["Shift-Tab"] = "shiftTabAndUnindentMarkdownList"),
              (s.Esc = function (e) {
                e.getOption("fullScreen") && b(o);
              }),
              (this.documentOnKeyDown = function (e) {
                27 == (e = e || window.event).keyCode &&
                  o.codemirror.getOption("fullScreen") &&
                  b(o);
              }),
              document.addEventListener("keydown", this.documentOnKeyDown, !1),
              a.overlayMode
                ? (i.defineMode("overlay-mode", function (e) {
                    return i.overlayMode(
                      i.getMode(
                        e,
                        !1 !== a.spellChecker ? "spell-checker" : "gfm"
                      ),
                      a.overlayMode.mode,
                      a.overlayMode.combine
                    );
                  }),
                  (t = "overlay-mode"),
                  ((n = a.parsingConfig).gitHubSpice = !1))
                : (((t = a.parsingConfig).name = "gfm"), (t.gitHubSpice = !1)),
              !1 !== a.spellChecker &&
                ((t = "spell-checker"),
                ((n = a.parsingConfig).name = "gfm"),
                (n.gitHubSpice = !1),
                r({ codeMirrorInstance: i })),
              (this.codemirror = i.fromTextArea(e, {
                mode: t,
                backdrop: n,
                theme: void 0 != a.theme ? a.theme : "easymde",
                tabSize: void 0 != a.tabSize ? a.tabSize : 2,
                indentUnit: void 0 != a.tabSize ? a.tabSize : 2,
                indentWithTabs: !1 !== a.indentWithTabs,
                lineNumbers: !0 === a.lineNumbers,
                autofocus: !0 === a.autofocus,
                extraKeys: s,
                lineWrapping: !1 !== a.lineWrapping,
                allowDropFileTypes: ["text/plain"],
                placeholder:
                  a.placeholder || e.getAttribute("placeholder") || "",
                styleSelectedText:
                  void 0 != a.styleSelectedText ? a.styleSelectedText : !c(),
                scrollbarStyle:
                  void 0 != a.scrollbarStyle ? a.scrollbarStyle : "native",
                configureMouse: function (e, t, n) {
                  return { addNew: !1 };
                },
                inputStyle:
                  void 0 != a.inputStyle
                    ? a.inputStyle
                    : c()
                    ? "contenteditable"
                    : "textarea",
                spellcheck: void 0 == a.nativeSpellcheck || a.nativeSpellcheck,
                autoRefresh: void 0 != a.autoRefresh && a.autoRefresh,
              })),
              (this.codemirror.getScrollerElement().style.minHeight =
                a.minHeight),
              "undefined" !== typeof a.maxHeight &&
                (this.codemirror.getScrollerElement().style.height =
                  a.maxHeight),
              !0 === a.forceSync)
            ) {
              var d = this.codemirror;
              d.on("change", function () {
                d.save();
              });
            }
            this.gui = {};
            var p = document.createElement("div");
            p.classList.add("EasyMDEContainer");
            var h = this.codemirror.getWrapperElement();
            h.parentNode.insertBefore(p, h),
              p.appendChild(h),
              !1 !== a.toolbar && (this.gui.toolbar = this.createToolbar()),
              !1 !== a.status && (this.gui.statusbar = this.createStatusbar()),
              void 0 != a.autosave &&
                !0 === a.autosave.enabled &&
                (this.autosave(),
                this.codemirror.on("change", function () {
                  clearTimeout(o._autosave_timeout),
                    (o._autosave_timeout = setTimeout(function () {
                      o.autosave();
                    }, o.options.autosave.submit_delay ||
                      o.options.autosave.delay ||
                      1e3));
                }));
            var f = this;
            this.codemirror.on("update", function () {
              a.previewImagesInEditor &&
                p.querySelectorAll(".cm-image-marker").forEach(function (e) {
                  var t = e.parentElement;
                  if (
                    t.innerText.match(/^!\[.*?\]\(.*\)/g) &&
                    !t.hasAttribute("data-img-src")
                  ) {
                    var n = t.innerText.match("\\((.*)\\)");
                    if (
                      (window.EMDEimagesCache || (window.EMDEimagesCache = {}),
                      n && n.length >= 2)
                    ) {
                      var i = n[1];
                      if (window.EMDEimagesCache[i])
                        D(t, window.EMDEimagesCache[i]);
                      else {
                        var r = document.createElement("img");
                        (r.onload = function () {
                          (window.EMDEimagesCache[i] = {
                            naturalWidth: r.naturalWidth,
                            naturalHeight: r.naturalHeight,
                            url: i,
                          }),
                            D(t, window.EMDEimagesCache[i]);
                        }),
                          (r.src = i);
                      }
                    }
                  }
                });
            }),
              (this.gui.sideBySide = this.createSideBySide()),
              (this._rendered = this.element);
            var g = this.codemirror;
            setTimeout(
              function () {
                g.refresh();
              }.bind(g),
              0
            );
          }
          function D(e, t) {
            var n, i;
            e.setAttribute("data-img-src", t.url),
              e.setAttribute(
                "style",
                "--bg-image:url(" +
                  t.url +
                  ");--width:" +
                  t.naturalWidth +
                  "px;--height:" +
                  ((n = t.naturalWidth),
                  (i = t.naturalHeight),
                  n <
                  window
                    .getComputedStyle(
                      document.querySelector(".CodeMirror-sizer")
                    )
                    .width.replace("px", "")
                    ? i + "px"
                    : (i / n) * 100 + "%")
              ),
              f.codemirror.setSize();
          }
        }),
        (oe.prototype.cleanup = function () {
          document.removeEventListener("keydown", this.documentOnKeyDown);
        }),
        (oe.prototype.autosave = function () {
          if (se()) {
            var e = this;
            if (
              void 0 == this.options.autosave.uniqueId ||
              "" == this.options.autosave.uniqueId
            )
              return void console.log(
                "EasyMDE: You must set a uniqueId to use the autosave feature"
              );
            !0 !== this.options.autosave.binded &&
              (null != e.element.form &&
                void 0 != e.element.form &&
                e.element.form.addEventListener("submit", function () {
                  clearTimeout(e.autosaveTimeoutId),
                    (e.autosaveTimeoutId = void 0),
                    localStorage.removeItem(
                      "smde_" + e.options.autosave.uniqueId
                    );
                }),
              (this.options.autosave.binded = !0)),
              !0 !== this.options.autosave.loaded &&
                ("string" ==
                  typeof localStorage.getItem(
                    "smde_" + this.options.autosave.uniqueId
                  ) &&
                  "" !=
                    localStorage.getItem(
                      "smde_" + this.options.autosave.uniqueId
                    ) &&
                  (this.codemirror.setValue(
                    localStorage.getItem(
                      "smde_" + this.options.autosave.uniqueId
                    )
                  ),
                  (this.options.autosave.foundSavedValue = !0)),
                (this.options.autosave.loaded = !0));
            var t = e.value();
            "" !== t
              ? localStorage.setItem(
                  "smde_" + this.options.autosave.uniqueId,
                  t
                )
              : localStorage.removeItem(
                  "smde_" + this.options.autosave.uniqueId
                );
            var n = document.getElementById("autosaved");
            if (null != n && void 0 != n && "" != n) {
              var i = new Date(),
                r = new Intl.DateTimeFormat(
                  [this.options.autosave.timeFormat.locale, "en-US"],
                  this.options.autosave.timeFormat.format
                ).format(i),
                a =
                  void 0 == this.options.autosave.text
                    ? "Autosaved: "
                    : this.options.autosave.text;
              n.innerHTML = a + r;
            }
          } else
            console.log("EasyMDE: localStorage not available, cannot autosave");
        }),
        (oe.prototype.clearAutosavedValue = function () {
          if (se()) {
            if (
              void 0 == this.options.autosave ||
              void 0 == this.options.autosave.uniqueId ||
              "" == this.options.autosave.uniqueId
            )
              return void console.log(
                "EasyMDE: You must set a uniqueId to clear the autosave value"
              );
            localStorage.removeItem("smde_" + this.options.autosave.uniqueId);
          } else
            console.log("EasyMDE: localStorage not available, cannot autosave");
        }),
        (oe.prototype.openBrowseFileWindow = function (e, t) {
          var n = this,
            i = this.gui.toolbar.getElementsByClassName("imageInput")[0];
          i.click(),
            i.addEventListener("change", function r(a) {
              n.options.imageUploadFunction
                ? n.uploadImagesUsingCustomFunction(
                    n.options.imageUploadFunction,
                    a.target.files
                  )
                : n.uploadImages(a.target.files, e, t),
                i.removeEventListener("change", r);
            });
        }),
        (oe.prototype.uploadImage = function (e, t, n) {
          var i = this;
          function r(e) {
            i.updateStatusBar("upload-image", e),
              setTimeout(function () {
                i.updateStatusBar("upload-image", i.options.imageTexts.sbInit);
              }, 1e4),
              n && "function" === typeof n && n(e),
              i.options.errorCallback(e);
          }
          function a(t) {
            var n = i.options.imageTexts.sizeUnits.split(",");
            return t
              .replace("#image_name#", e.name)
              .replace("#image_size#", X(e.size, n))
              .replace("#image_max_size#", X(i.options.imageMaxSize, n));
          }
          if (
            ((t =
              t ||
              function (e) {
                j(i, e);
              }),
            e.size > this.options.imageMaxSize)
          )
            r(a(this.options.errorMessages.fileTooLarge));
          else {
            var o = new FormData();
            o.append("image", e),
              i.options.imageCSRFToken &&
                o.append("csrfmiddlewaretoken", i.options.imageCSRFToken);
            var s = new XMLHttpRequest();
            (s.upload.onprogress = function (t) {
              if (t.lengthComputable) {
                var n = "" + Math.round((100 * t.loaded) / t.total);
                i.updateStatusBar(
                  "upload-image",
                  i.options.imageTexts.sbProgress
                    .replace("#file_name#", e.name)
                    .replace("#progress#", n)
                );
              }
            }),
              s.open("POST", this.options.imageUploadEndpoint),
              (s.onload = function () {
                try {
                  var e = JSON.parse(this.responseText);
                } catch (n) {
                  return (
                    console.error(
                      "EasyMDE: The server did not return a valid json."
                    ),
                    void r(a(i.options.errorMessages.importError))
                  );
                }
                200 === this.status &&
                e &&
                !e.error &&
                e.data &&
                e.data.filePath
                  ? t(
                      (i.options.imagePathAbsolute
                        ? ""
                        : window.location.origin + "/") + e.data.filePath
                    )
                  : e.error && e.error in i.options.errorMessages
                  ? r(a(i.options.errorMessages[e.error]))
                  : e.error
                  ? r(a(e.error))
                  : (console.error(
                      "EasyMDE: Received an unexpected response after uploading the image." +
                        this.status +
                        " (" +
                        this.statusText +
                        ")"
                    ),
                    r(a(i.options.errorMessages.importError)));
              }),
              (s.onerror = function (e) {
                console.error(
                  "EasyMDE: An unexpected error occurred when trying to upload the image." +
                    e.target.status +
                    " (" +
                    e.target.statusText +
                    ")"
                ),
                  r(i.options.errorMessages.importError);
              }),
              s.send(o);
          }
        }),
        (oe.prototype.uploadImageUsingCustomFunction = function (e, t) {
          var n = this;
          e.apply(this, [
            t,
            function (e) {
              j(n, e);
            },
            function (e) {
              var i = (function (e) {
                var i = n.options.imageTexts.sizeUnits.split(",");
                return e
                  .replace("#image_name#", t.name)
                  .replace("#image_size#", X(t.size, i))
                  .replace("#image_max_size#", X(n.options.imageMaxSize, i));
              })(e);
              n.updateStatusBar("upload-image", i),
                setTimeout(function () {
                  n.updateStatusBar(
                    "upload-image",
                    n.options.imageTexts.sbInit
                  );
                }, 1e4),
                n.options.errorCallback(i);
            },
          ]);
        }),
        (oe.prototype.setPreviewMaxHeight = function () {
          var e = this.codemirror.getWrapperElement(),
            t = e.nextSibling,
            n = parseInt(window.getComputedStyle(e).paddingTop),
            i = parseInt(window.getComputedStyle(e).borderTopWidth),
            r =
              (parseInt(this.options.maxHeight) + 2 * n + 2 * i).toString() +
              "px";
          t.style.height = r;
        }),
        (oe.prototype.createSideBySide = function () {
          var e = this.codemirror,
            t = e.getWrapperElement(),
            n = t.nextSibling;
          if (!n || !/editor-preview-side/.test(n.className)) {
            if (
              (((n = document.createElement("div")).className =
                "editor-preview-side"),
              this.options.previewClass)
            )
              if (Array.isArray(this.options.previewClass))
                for (var i = 0; i < this.options.previewClass.length; i++)
                  n.className += " " + this.options.previewClass[i];
              else
                "string" === typeof this.options.previewClass &&
                  (n.className += " " + this.options.previewClass);
            t.parentNode.insertBefore(n, t.nextSibling);
          }
          if (
            ("undefined" !== typeof this.options.maxHeight &&
              this.setPreviewMaxHeight(),
            !1 === this.options.syncSideBySidePreviewScroll)
          )
            return n;
          var r = !1,
            a = !1;
          return (
            e.on("scroll", function (e) {
              if (r) r = !1;
              else {
                a = !0;
                var t =
                    e.getScrollInfo().height - e.getScrollInfo().clientHeight,
                  i = parseFloat(e.getScrollInfo().top) / t,
                  o = (n.scrollHeight - n.clientHeight) * i;
                n.scrollTop = o;
              }
            }),
            (n.onscroll = function () {
              if (a) a = !1;
              else {
                r = !0;
                var t = n.scrollHeight - n.clientHeight,
                  i = parseFloat(n.scrollTop) / t,
                  o =
                    (e.getScrollInfo().height -
                      e.getScrollInfo().clientHeight) *
                    i;
                e.scrollTo(0, o);
              }
            }),
            n
          );
        }),
        (oe.prototype.createToolbar = function (e) {
          if ((e = e || this.options.toolbar) && 0 !== e.length) {
            var t;
            for (t = 0; t < e.length; t++)
              void 0 != Y[e[t]] && (e[t] = Y[e[t]]);
            var n = document.createElement("div");
            n.className = "editor-toolbar";
            var i = this,
              r = {};
            for (i.toolbar = e, t = 0; t < e.length; t++)
              if (
                ("guide" != e[t].name || !1 !== i.options.toolbarGuideIcon) &&
                (!i.options.hideIcons ||
                  -1 == i.options.hideIcons.indexOf(e[t].name)) &&
                (("fullscreen" != e[t].name && "side-by-side" != e[t].name) ||
                  !c())
              ) {
                if ("|" === e[t]) {
                  for (var a = !1, o = t + 1; o < e.length; o++)
                    "|" === e[o] ||
                      (i.options.hideIcons &&
                        -1 != i.options.hideIcons.indexOf(e[o].name)) ||
                      (a = !0);
                  if (!a) continue;
                }
                !(function (e) {
                  var t;
                  if (
                    ((t =
                      "|" === e
                        ? x()
                        : e.children
                        ? g(e, i.options.toolbarTips, i.options.shortcuts, i)
                        : D(
                            e,
                            !0,
                            i.options.toolbarTips,
                            i.options.shortcuts,
                            "button",
                            i
                          )),
                    (r[e.name || e] = t),
                    n.appendChild(t),
                    "upload-image" === e.name)
                  ) {
                    var a = document.createElement("input");
                    (a.className = "imageInput"),
                      (a.type = "file"),
                      (a.multiple = !0),
                      (a.name = "image"),
                      (a.accept = i.options.imageAccept),
                      (a.style.display = "none"),
                      (a.style.opacity = 0),
                      n.appendChild(a);
                  }
                })(e[t]);
              }
            (i.toolbar_div = n), (i.toolbarElements = r);
            var s = this.codemirror;
            s.on("cursorActivity", function () {
              var e = v(s);
              for (var t in r)
                !(function (t) {
                  var n = r[t];
                  e[t]
                    ? (n.className += " active")
                    : "fullscreen" != t &&
                      "side-by-side" != t &&
                      (n.className = n.className.replace(/\s*active\s*/g, ""));
                })(t);
            });
            var l = s.getWrapperElement();
            return l.parentNode.insertBefore(n, l), n;
          }
        }),
        (oe.prototype.createStatusbar = function (e) {
          e = e || this.options.status;
          var t = this.options,
            n = this.codemirror;
          if (e && 0 !== e.length) {
            var i,
              r,
              a,
              o,
              s = [];
            for (i = 0; i < e.length; i++)
              if (
                ((r = void 0),
                (a = void 0),
                (o = void 0),
                "object" === typeof e[i])
              )
                s.push({
                  className: e[i].className,
                  defaultValue: e[i].defaultValue,
                  onUpdate: e[i].onUpdate,
                  onActivity: e[i].onActivity,
                });
              else {
                var l = e[i];
                "words" === l
                  ? ((o = function (e) {
                      e.innerHTML = Q(n.getValue());
                    }),
                    (r = function (e) {
                      e.innerHTML = Q(n.getValue());
                    }))
                  : "lines" === l
                  ? ((o = function (e) {
                      e.innerHTML = n.lineCount();
                    }),
                    (r = function (e) {
                      e.innerHTML = n.lineCount();
                    }))
                  : "cursor" === l
                  ? ((o = function (e) {
                      e.innerHTML = "0:0";
                    }),
                    (a = function (e) {
                      var t = n.getCursor();
                      e.innerHTML = t.line + ":" + t.ch;
                    }))
                  : "autosave" === l
                  ? (o = function (e) {
                      void 0 != t.autosave &&
                        !0 === t.autosave.enabled &&
                        e.setAttribute("id", "autosaved");
                    })
                  : "upload-image" === l &&
                    (o = function (e) {
                      e.innerHTML = t.imageTexts.sbInit;
                    }),
                  s.push({
                    className: l,
                    defaultValue: o,
                    onUpdate: r,
                    onActivity: a,
                  });
              }
            var u = document.createElement("div");
            for (u.className = "editor-statusbar", i = 0; i < s.length; i++) {
              var c = s[i],
                m = document.createElement("span");
              (m.className = c.className),
                "function" === typeof c.defaultValue && c.defaultValue(m),
                "function" === typeof c.onUpdate &&
                  this.codemirror.on(
                    "update",
                    (function (e, t) {
                      return function () {
                        t.onUpdate(e);
                      };
                    })(m, c)
                  ),
                "function" === typeof c.onActivity &&
                  this.codemirror.on(
                    "cursorActivity",
                    (function (e, t) {
                      return function () {
                        t.onActivity(e);
                      };
                    })(m, c)
                  ),
                u.appendChild(m);
            }
            var d = this.codemirror.getWrapperElement();
            return d.parentNode.insertBefore(u, d.nextSibling), u;
          }
        }),
        (oe.prototype.value = function (e) {
          var t = this.codemirror;
          if (void 0 === e) return t.getValue();
          if ((t.getDoc().setValue(e), this.isPreviewActive())) {
            var n = t.getWrapperElement().lastChild;
            n.innerHTML = this.options.previewRender(e, n);
          }
          return this;
        }),
        (oe.toggleBold = C),
        (oe.toggleItalic = y),
        (oe.toggleStrikethrough = F),
        (oe.toggleBlockquote = A),
        (oe.toggleHeadingSmaller = w),
        (oe.toggleHeadingBigger = S),
        (oe.toggleHeading1 = B),
        (oe.toggleHeading2 = T),
        (oe.toggleHeading3 = _),
        (oe.toggleCodeBlock = E),
        (oe.toggleUnorderedList = M),
        (oe.toggleOrderedList = L),
        (oe.cleanBlock = I),
        (oe.drawLink = z),
        (oe.drawImage = N),
        (oe.drawUploadedImage = O),
        (oe.drawTable = R),
        (oe.drawHorizontalRule = q),
        (oe.undo = P),
        (oe.redo = $),
        (oe.togglePreview = U),
        (oe.toggleSideBySide = H),
        (oe.toggleFullScreen = b),
        (oe.prototype.toggleBold = function () {
          C(this);
        }),
        (oe.prototype.toggleItalic = function () {
          y(this);
        }),
        (oe.prototype.toggleStrikethrough = function () {
          F(this);
        }),
        (oe.prototype.toggleBlockquote = function () {
          A(this);
        }),
        (oe.prototype.toggleHeadingSmaller = function () {
          w(this);
        }),
        (oe.prototype.toggleHeadingBigger = function () {
          S(this);
        }),
        (oe.prototype.toggleHeading1 = function () {
          B(this);
        }),
        (oe.prototype.toggleHeading2 = function () {
          T(this);
        }),
        (oe.prototype.toggleHeading3 = function () {
          _(this);
        }),
        (oe.prototype.toggleCodeBlock = function () {
          E(this);
        }),
        (oe.prototype.toggleUnorderedList = function () {
          M(this);
        }),
        (oe.prototype.toggleOrderedList = function () {
          L(this);
        }),
        (oe.prototype.cleanBlock = function () {
          I(this);
        }),
        (oe.prototype.drawLink = function () {
          z(this);
        }),
        (oe.prototype.drawImage = function () {
          N(this);
        }),
        (oe.prototype.drawUploadedImage = function () {
          O(this);
        }),
        (oe.prototype.drawTable = function () {
          R(this);
        }),
        (oe.prototype.drawHorizontalRule = function () {
          q(this);
        }),
        (oe.prototype.undo = function () {
          P(this);
        }),
        (oe.prototype.redo = function () {
          $(this);
        }),
        (oe.prototype.togglePreview = function () {
          U(this);
        }),
        (oe.prototype.toggleSideBySide = function () {
          H(this);
        }),
        (oe.prototype.toggleFullScreen = function () {
          b(this);
        }),
        (oe.prototype.isPreviewActive = function () {
          var e = this.codemirror.getWrapperElement().lastChild;
          return /editor-preview-active/.test(e.className);
        }),
        (oe.prototype.isSideBySideActive = function () {
          var e = this.codemirror.getWrapperElement().nextSibling;
          return /editor-preview-active-side/.test(e.className);
        }),
        (oe.prototype.isFullscreenActive = function () {
          return this.codemirror.getOption("fullScreen");
        }),
        (oe.prototype.getState = function () {
          return v(this.codemirror);
        }),
        (oe.prototype.toTextArea = function () {
          var e = this.codemirror,
            t = e.getWrapperElement(),
            n = t.parentNode;
          n &&
            (this.gui.toolbar && n.removeChild(this.gui.toolbar),
            this.gui.statusbar && n.removeChild(this.gui.statusbar),
            this.gui.sideBySide && n.removeChild(this.gui.sideBySide)),
            n.parentNode.insertBefore(t, n),
            n.remove(),
            e.toTextArea(),
            this.autosaveTimeoutId &&
              (clearTimeout(this.autosaveTimeoutId),
              (this.autosaveTimeoutId = void 0),
              this.clearAutosavedValue());
        }),
        (e.exports = oe);
    },
    7084: function (e) {
      e.exports = (function () {
        "use strict";
        function e(e, t) {
          for (var n = 0; n < t.length; n++) {
            var i = t[n];
            (i.enumerable = i.enumerable || !1),
              (i.configurable = !0),
              "value" in i && (i.writable = !0),
              Object.defineProperty(e, i.key, i);
          }
        }
        function t(t, n, i) {
          return n && e(t.prototype, n), i && e(t, i), t;
        }
        function n(e, t) {
          if (e) {
            if ("string" === typeof e) return i(e, t);
            var n = Object.prototype.toString.call(e).slice(8, -1);
            return (
              "Object" === n && e.constructor && (n = e.constructor.name),
              "Map" === n || "Set" === n
                ? Array.from(e)
                : "Arguments" === n ||
                  /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                ? i(e, t)
                : void 0
            );
          }
        }
        function i(e, t) {
          (null == t || t > e.length) && (t = e.length);
          for (var n = 0, i = new Array(t); n < t; n++) i[n] = e[n];
          return i;
        }
        function r(e, t) {
          var i =
            ("undefined" !== typeof Symbol && e[Symbol.iterator]) ||
            e["@@iterator"];
          if (i) return (i = i.call(e)).next.bind(i);
          if (
            Array.isArray(e) ||
            (i = n(e)) ||
            (t && e && "number" === typeof e.length)
          ) {
            i && (e = i);
            var r = 0;
            return function () {
              return r >= e.length ? { done: !0 } : { done: !1, value: e[r++] };
            };
          }
          throw new TypeError(
            "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
          );
        }
        var a = { exports: {} };
        function o() {
          return {
            baseUrl: null,
            breaks: !1,
            extensions: null,
            gfm: !0,
            headerIds: !0,
            headerPrefix: "",
            highlight: null,
            langPrefix: "language-",
            mangle: !0,
            pedantic: !1,
            renderer: null,
            sanitize: !1,
            sanitizer: null,
            silent: !1,
            smartLists: !1,
            smartypants: !1,
            tokenizer: null,
            walkTokens: null,
            xhtml: !1,
          };
        }
        function s(e) {
          a.exports.defaults = e;
        }
        a.exports = { defaults: o(), getDefaults: o, changeDefaults: s };
        var l = /[&<>"']/,
          u = /[&<>"']/g,
          c = /[<>"']|&(?!#?\w+;)/,
          m = /[<>"']|&(?!#?\w+;)/g,
          d = {
            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;",
            '"': "&quot;",
            "'": "&#39;",
          },
          p = function (e) {
            return d[e];
          };
        function h(e, t) {
          if (t) {
            if (l.test(e)) return e.replace(u, p);
          } else if (c.test(e)) return e.replace(m, p);
          return e;
        }
        var f = /&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/gi;
        function g(e) {
          return e.replace(f, function (e, t) {
            return "colon" === (t = t.toLowerCase())
              ? ":"
              : "#" === t.charAt(0)
              ? "x" === t.charAt(1)
                ? String.fromCharCode(parseInt(t.substring(2), 16))
                : String.fromCharCode(+t.substring(1))
              : "";
          });
        }
        var D = /(^|[^\[])\^/g;
        function x(e, t) {
          (e = e.source || e), (t = t || "");
          var n = {
            replace: function (t, i) {
              return (
                (i = (i = i.source || i).replace(D, "$1")),
                (e = e.replace(t, i)),
                n
              );
            },
            getRegex: function () {
              return new RegExp(e, t);
            },
          };
          return n;
        }
        var v = /[^\w:]/g,
          k = /^$|^[a-z][a-z0-9+.-]*:|^[?#]/i;
        function b(e, t, n) {
          if (e) {
            var i;
            try {
              i = decodeURIComponent(g(n)).replace(v, "").toLowerCase();
            } catch (r) {
              return null;
            }
            if (
              0 === i.indexOf("javascript:") ||
              0 === i.indexOf("vbscript:") ||
              0 === i.indexOf("data:")
            )
              return null;
          }
          t && !k.test(n) && (n = A(t, n));
          try {
            n = encodeURI(n).replace(/%25/g, "%");
          } catch (r) {
            return null;
          }
          return n;
        }
        var C = {},
          y = /^[^:]+:\/*[^/]*$/,
          F = /^([^:]+:)[\s\S]*$/,
          E = /^([^:]+:\/*[^/]*)[\s\S]*$/;
        function A(e, t) {
          C[" " + e] ||
            (y.test(e) ? (C[" " + e] = e + "/") : (C[" " + e] = B(e, "/", !0)));
          var n = -1 === (e = C[" " + e]).indexOf(":");
          return "//" === t.substring(0, 2)
            ? n
              ? t
              : e.replace(F, "$1") + t
            : "/" === t.charAt(0)
            ? n
              ? t
              : e.replace(E, "$1") + t
            : e + t;
        }
        function w(e) {
          for (var t, n, i = 1; i < arguments.length; i++)
            for (n in (t = arguments[i]))
              Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
          return e;
        }
        function S(e, t) {
          var n = e
              .replace(/\|/g, function (e, t, n) {
                for (var i = !1, r = t; --r >= 0 && "\\" === n[r]; ) i = !i;
                return i ? "|" : " |";
              })
              .split(/ \|/),
            i = 0;
          if (n.length > t) n.splice(t);
          else for (; n.length < t; ) n.push("");
          for (; i < n.length; i++) n[i] = n[i].trim().replace(/\\\|/g, "|");
          return n;
        }
        function B(e, t, n) {
          var i = e.length;
          if (0 === i) return "";
          for (var r = 0; r < i; ) {
            var a = e.charAt(i - r - 1);
            if (a !== t || n) {
              if (a === t || !n) break;
              r++;
            } else r++;
          }
          return e.substr(0, i - r);
        }
        function T(e, t) {
          if (-1 === e.indexOf(t[1])) return -1;
          for (var n = e.length, i = 0, r = 0; r < n; r++)
            if ("\\" === e[r]) r++;
            else if (e[r] === t[0]) i++;
            else if (e[r] === t[1] && --i < 0) return r;
          return -1;
        }
        function _(e) {
          e &&
            e.sanitize &&
            !e.silent &&
            console.warn(
              "marked(): sanitize and sanitizer parameters are deprecated since version 0.7.0, should not be used and will be removed in the future. Read more here: https://marked.js.org/#/USING_ADVANCED.md#options"
            );
        }
        function M(e, t) {
          if (t < 1) return "";
          for (var n = ""; t > 1; ) 1 & t && (n += e), (t >>= 1), (e += e);
          return n + e;
        }
        var L = {
            escape: h,
            unescape: g,
            edit: x,
            cleanUrl: b,
            resolveUrl: A,
            noopTest: { exec: function () {} },
            merge: w,
            splitCells: S,
            rtrim: B,
            findClosingBracket: T,
            checkSanitizeDeprecation: _,
            repeatString: M,
          },
          I = a.exports.defaults,
          z = L.rtrim,
          N = L.splitCells,
          O = L.escape,
          j = L.findClosingBracket;
        function R(e, t, n) {
          var i = t.href,
            r = t.title ? O(t.title) : null,
            a = e[1].replace(/\\([\[\]])/g, "$1");
          return "!" !== e[0].charAt(0)
            ? { type: "link", raw: n, href: i, title: r, text: a }
            : { type: "image", raw: n, href: i, title: r, text: O(a) };
        }
        function q(e, t) {
          var n = e.match(/^(\s+)(?:```)/);
          if (null === n) return t;
          var i = n[1];
          return t
            .split("\n")
            .map(function (e) {
              var t = e.match(/^\s+/);
              return null === t
                ? e
                : t[0].length >= i.length
                ? e.slice(i.length)
                : e;
            })
            .join("\n");
        }
        var P = (function () {
            function e(e) {
              this.options = e || I;
            }
            var t = e.prototype;
            return (
              (t.space = function (e) {
                var t = this.rules.block.newline.exec(e);
                if (t)
                  return t[0].length > 1
                    ? { type: "space", raw: t[0] }
                    : { raw: "\n" };
              }),
              (t.code = function (e) {
                var t = this.rules.block.code.exec(e);
                if (t) {
                  var n = t[0].replace(/^ {1,4}/gm, "");
                  return {
                    type: "code",
                    raw: t[0],
                    codeBlockStyle: "indented",
                    text: this.options.pedantic ? n : z(n, "\n"),
                  };
                }
              }),
              (t.fences = function (e) {
                var t = this.rules.block.fences.exec(e);
                if (t) {
                  var n = t[0],
                    i = q(n, t[3] || "");
                  return {
                    type: "code",
                    raw: n,
                    lang: t[2] ? t[2].trim() : t[2],
                    text: i,
                  };
                }
              }),
              (t.heading = function (e) {
                var t = this.rules.block.heading.exec(e);
                if (t) {
                  var n = t[2].trim();
                  if (/#$/.test(n)) {
                    var i = z(n, "#");
                    this.options.pedantic
                      ? (n = i.trim())
                      : (i && !/ $/.test(i)) || (n = i.trim());
                  }
                  return {
                    type: "heading",
                    raw: t[0],
                    depth: t[1].length,
                    text: n,
                  };
                }
              }),
              (t.nptable = function (e) {
                var t = this.rules.block.nptable.exec(e);
                if (t) {
                  var n = {
                    type: "table",
                    header: N(t[1].replace(/^ *| *\| *$/g, "")),
                    align: t[2].replace(/^ *|\| *$/g, "").split(/ *\| */),
                    cells: t[3] ? t[3].replace(/\n$/, "").split("\n") : [],
                    raw: t[0],
                  };
                  if (n.header.length === n.align.length) {
                    var i,
                      r = n.align.length;
                    for (i = 0; i < r; i++)
                      /^ *-+: *$/.test(n.align[i])
                        ? (n.align[i] = "right")
                        : /^ *:-+: *$/.test(n.align[i])
                        ? (n.align[i] = "center")
                        : /^ *:-+ *$/.test(n.align[i])
                        ? (n.align[i] = "left")
                        : (n.align[i] = null);
                    for (r = n.cells.length, i = 0; i < r; i++)
                      n.cells[i] = N(n.cells[i], n.header.length);
                    return n;
                  }
                }
              }),
              (t.hr = function (e) {
                var t = this.rules.block.hr.exec(e);
                if (t) return { type: "hr", raw: t[0] };
              }),
              (t.blockquote = function (e) {
                var t = this.rules.block.blockquote.exec(e);
                if (t) {
                  var n = t[0].replace(/^ *> ?/gm, "");
                  return { type: "blockquote", raw: t[0], text: n };
                }
              }),
              (t.list = function (e) {
                var t = this.rules.block.list.exec(e);
                if (t) {
                  var n,
                    i,
                    r,
                    a,
                    o,
                    s,
                    l,
                    u,
                    c,
                    m = t[0],
                    d = t[2],
                    p = d.length > 1,
                    h = {
                      type: "list",
                      raw: m,
                      ordered: p,
                      start: p ? +d.slice(0, -1) : "",
                      loose: !1,
                      items: [],
                    },
                    f = t[0].match(this.rules.block.item),
                    g = !1,
                    D = f.length;
                  r = this.rules.block.listItemStart.exec(f[0]);
                  for (var x = 0; x < D; x++) {
                    if (
                      ((m = n = f[x]),
                      this.options.pedantic ||
                        ((c = n.match(
                          new RegExp(
                            "\\n\\s*\\n {0," + (r[0].length - 1) + "}\\S"
                          )
                        )) &&
                          ((o =
                            n.length -
                            c.index +
                            f.slice(x + 1).join("\n").length),
                          (h.raw = h.raw.substring(0, h.raw.length - o)),
                          (m = n = n.substring(0, c.index)),
                          (D = x + 1))),
                      x !== D - 1)
                    ) {
                      if (
                        ((a = this.rules.block.listItemStart.exec(f[x + 1])),
                        this.options.pedantic
                          ? a[1].length > r[1].length
                          : a[1].length >= r[0].length || a[1].length > 3)
                      ) {
                        f.splice(
                          x,
                          2,
                          f[x] +
                            (!this.options.pedantic &&
                            a[1].length < r[0].length &&
                            !f[x].match(/\n$/)
                              ? ""
                              : "\n") +
                            f[x + 1]
                        ),
                          x--,
                          D--;
                        continue;
                      }
                      (!this.options.pedantic || this.options.smartLists
                        ? a[2][a[2].length - 1] !== d[d.length - 1]
                        : p === (1 === a[2].length)) &&
                        ((o = f.slice(x + 1).join("\n").length),
                        (h.raw = h.raw.substring(0, h.raw.length - o)),
                        (x = D - 1)),
                        (r = a);
                    }
                    (i = n.length),
                      ~(n = n.replace(/^ *([*+-]|\d+[.)]) ?/, "")).indexOf(
                        "\n "
                      ) &&
                        ((i -= n.length),
                        (n = this.options.pedantic
                          ? n.replace(/^ {1,4}/gm, "")
                          : n.replace(
                              new RegExp("^ {1," + i + "}", "gm"),
                              ""
                            ))),
                      (n = z(n, "\n")),
                      x !== D - 1 && (m += "\n"),
                      (s = g || /\n\n(?!\s*$)/.test(m)),
                      x !== D - 1 &&
                        ((g = "\n\n" === m.slice(-2)), s || (s = g)),
                      s && (h.loose = !0),
                      this.options.gfm &&
                        ((u = void 0),
                        (l = /^\[[ xX]\] /.test(n)) &&
                          ((u = " " !== n[1]),
                          (n = n.replace(/^\[[ xX]\] +/, "")))),
                      h.items.push({
                        type: "list_item",
                        raw: m,
                        task: l,
                        checked: u,
                        loose: s,
                        text: n,
                      });
                  }
                  return h;
                }
              }),
              (t.html = function (e) {
                var t = this.rules.block.html.exec(e);
                if (t)
                  return {
                    type: this.options.sanitize ? "paragraph" : "html",
                    raw: t[0],
                    pre:
                      !this.options.sanitizer &&
                      ("pre" === t[1] || "script" === t[1] || "style" === t[1]),
                    text: this.options.sanitize
                      ? this.options.sanitizer
                        ? this.options.sanitizer(t[0])
                        : O(t[0])
                      : t[0],
                  };
              }),
              (t.def = function (e) {
                var t = this.rules.block.def.exec(e);
                if (t)
                  return (
                    t[3] && (t[3] = t[3].substring(1, t[3].length - 1)),
                    {
                      type: "def",
                      tag: t[1].toLowerCase().replace(/\s+/g, " "),
                      raw: t[0],
                      href: t[2],
                      title: t[3],
                    }
                  );
              }),
              (t.table = function (e) {
                var t = this.rules.block.table.exec(e);
                if (t) {
                  var n = {
                    type: "table",
                    header: N(t[1].replace(/^ *| *\| *$/g, "")),
                    align: t[2].replace(/^ *|\| *$/g, "").split(/ *\| */),
                    cells: t[3] ? t[3].replace(/\n$/, "").split("\n") : [],
                  };
                  if (n.header.length === n.align.length) {
                    n.raw = t[0];
                    var i,
                      r = n.align.length;
                    for (i = 0; i < r; i++)
                      /^ *-+: *$/.test(n.align[i])
                        ? (n.align[i] = "right")
                        : /^ *:-+: *$/.test(n.align[i])
                        ? (n.align[i] = "center")
                        : /^ *:-+ *$/.test(n.align[i])
                        ? (n.align[i] = "left")
                        : (n.align[i] = null);
                    for (r = n.cells.length, i = 0; i < r; i++)
                      n.cells[i] = N(
                        n.cells[i].replace(/^ *\| *| *\| *$/g, ""),
                        n.header.length
                      );
                    return n;
                  }
                }
              }),
              (t.lheading = function (e) {
                var t = this.rules.block.lheading.exec(e);
                if (t)
                  return {
                    type: "heading",
                    raw: t[0],
                    depth: "=" === t[2].charAt(0) ? 1 : 2,
                    text: t[1],
                  };
              }),
              (t.paragraph = function (e) {
                var t = this.rules.block.paragraph.exec(e);
                if (t)
                  return {
                    type: "paragraph",
                    raw: t[0],
                    text:
                      "\n" === t[1].charAt(t[1].length - 1)
                        ? t[1].slice(0, -1)
                        : t[1],
                  };
              }),
              (t.text = function (e) {
                var t = this.rules.block.text.exec(e);
                if (t) return { type: "text", raw: t[0], text: t[0] };
              }),
              (t.escape = function (e) {
                var t = this.rules.inline.escape.exec(e);
                if (t) return { type: "escape", raw: t[0], text: O(t[1]) };
              }),
              (t.tag = function (e, t, n) {
                var i = this.rules.inline.tag.exec(e);
                if (i)
                  return (
                    !t && /^<a /i.test(i[0])
                      ? (t = !0)
                      : t && /^<\/a>/i.test(i[0]) && (t = !1),
                    !n && /^<(pre|code|kbd|script)(\s|>)/i.test(i[0])
                      ? (n = !0)
                      : n &&
                        /^<\/(pre|code|kbd|script)(\s|>)/i.test(i[0]) &&
                        (n = !1),
                    {
                      type: this.options.sanitize ? "text" : "html",
                      raw: i[0],
                      inLink: t,
                      inRawBlock: n,
                      text: this.options.sanitize
                        ? this.options.sanitizer
                          ? this.options.sanitizer(i[0])
                          : O(i[0])
                        : i[0],
                    }
                  );
              }),
              (t.link = function (e) {
                var t = this.rules.inline.link.exec(e);
                if (t) {
                  var n = t[2].trim();
                  if (!this.options.pedantic && /^</.test(n)) {
                    if (!/>$/.test(n)) return;
                    var i = z(n.slice(0, -1), "\\");
                    if ((n.length - i.length) % 2 === 0) return;
                  } else {
                    var r = j(t[2], "()");
                    if (r > -1) {
                      var a =
                        (0 === t[0].indexOf("!") ? 5 : 4) + t[1].length + r;
                      (t[2] = t[2].substring(0, r)),
                        (t[0] = t[0].substring(0, a).trim()),
                        (t[3] = "");
                    }
                  }
                  var o = t[2],
                    s = "";
                  if (this.options.pedantic) {
                    var l = /^([^'"]*[^\s])\s+(['"])(.*)\2/.exec(o);
                    l && ((o = l[1]), (s = l[3]));
                  } else s = t[3] ? t[3].slice(1, -1) : "";
                  return (
                    (o = o.trim()),
                    /^</.test(o) &&
                      (o =
                        this.options.pedantic && !/>$/.test(n)
                          ? o.slice(1)
                          : o.slice(1, -1)),
                    R(
                      t,
                      {
                        href: o
                          ? o.replace(this.rules.inline._escapes, "$1")
                          : o,
                        title: s
                          ? s.replace(this.rules.inline._escapes, "$1")
                          : s,
                      },
                      t[0]
                    )
                  );
                }
              }),
              (t.reflink = function (e, t) {
                var n;
                if (
                  (n = this.rules.inline.reflink.exec(e)) ||
                  (n = this.rules.inline.nolink.exec(e))
                ) {
                  var i = (n[2] || n[1]).replace(/\s+/g, " ");
                  if (!(i = t[i.toLowerCase()]) || !i.href) {
                    var r = n[0].charAt(0);
                    return { type: "text", raw: r, text: r };
                  }
                  return R(n, i, n[0]);
                }
              }),
              (t.emStrong = function (e, t, n) {
                void 0 === n && (n = "");
                var i = this.rules.inline.emStrong.lDelim.exec(e);
                if (
                  i &&
                  (!i[3] ||
                    !n.match(
                      /(?:[0-9A-Za-z\xAA\xB2\xB3\xB5\xB9\xBA\xBC-\xBE\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0560-\u0588\u05D0-\u05EA\u05EF-\u05F2\u0620-\u064A\u0660-\u0669\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07C0-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u0860-\u086A\u08A0-\u08B4\u08B6-\u08C7\u0904-\u0939\u093D\u0950\u0958-\u0961\u0966-\u096F\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09E6-\u09F1\u09F4-\u09F9\u09FC\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A66-\u0A6F\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AE6-\u0AEF\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B66-\u0B6F\u0B71-\u0B77\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0BE6-\u0BF2\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C60\u0C61\u0C66-\u0C6F\u0C78-\u0C7E\u0C80\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0\u0CE1\u0CE6-\u0CEF\u0CF1\u0CF2\u0D04-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D54-\u0D56\u0D58-\u0D61\u0D66-\u0D78\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0DE6-\u0DEF\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E50-\u0E59\u0E81\u0E82\u0E84\u0E86-\u0E8A\u0E8C-\u0EA3\u0EA5\u0EA7-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0ED0-\u0ED9\u0EDC-\u0EDF\u0F00\u0F20-\u0F33\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F-\u1049\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u1090-\u1099\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1369-\u137C\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u17E0-\u17E9\u17F0-\u17F9\u1810-\u1819\u1820-\u1878\u1880-\u1884\u1887-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1946-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u19D0-\u19DA\u1A00-\u1A16\u1A20-\u1A54\u1A80-\u1A89\u1A90-\u1A99\u1AA7\u1B05-\u1B33\u1B45-\u1B4B\u1B50-\u1B59\u1B83-\u1BA0\u1BAE-\u1BE5\u1C00-\u1C23\u1C40-\u1C49\u1C4D-\u1C7D\u1C80-\u1C88\u1C90-\u1CBA\u1CBD-\u1CBF\u1CE9-\u1CEC\u1CEE-\u1CF3\u1CF5\u1CF6\u1CFA\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2070\u2071\u2074-\u2079\u207F-\u2089\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2150-\u2189\u2460-\u249B\u24EA-\u24FF\u2776-\u2793\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2CFD\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005-\u3007\u3021-\u3029\u3031-\u3035\u3038-\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312F\u3131-\u318E\u3192-\u3195\u31A0-\u31BF\u31F0-\u31FF\u3220-\u3229\u3248-\u324F\u3251-\u325F\u3280-\u3289\u32B1-\u32BF\u3400-\u4DBF\u4E00-\u9FFC\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6EF\uA717-\uA71F\uA722-\uA788\uA78B-\uA7BF\uA7C2-\uA7CA\uA7F5-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA830-\uA835\uA840-\uA873\uA882-\uA8B3\uA8D0-\uA8D9\uA8F2-\uA8F7\uA8FB\uA8FD\uA8FE\uA900-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF-\uA9D9\uA9E0-\uA9E4\uA9E6-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA50-\uAA59\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB69\uAB70-\uABE2\uABF0-\uABF9\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF10-\uFF19\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDD07-\uDD33\uDD40-\uDD78\uDD8A\uDD8B\uDE80-\uDE9C\uDEA0-\uDED0\uDEE1-\uDEFB\uDF00-\uDF23\uDF2D-\uDF4A\uDF50-\uDF75\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF\uDFD1-\uDFD5]|\uD801[\uDC00-\uDC9D\uDCA0-\uDCA9\uDCB0-\uDCD3\uDCD8-\uDCFB\uDD00-\uDD27\uDD30-\uDD63\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC58-\uDC76\uDC79-\uDC9E\uDCA7-\uDCAF\uDCE0-\uDCF2\uDCF4\uDCF5\uDCFB-\uDD1B\uDD20-\uDD39\uDD80-\uDDB7\uDDBC-\uDDCF\uDDD2-\uDE00\uDE10-\uDE13\uDE15-\uDE17\uDE19-\uDE35\uDE40-\uDE48\uDE60-\uDE7E\uDE80-\uDE9F\uDEC0-\uDEC7\uDEC9-\uDEE4\uDEEB-\uDEEF\uDF00-\uDF35\uDF40-\uDF55\uDF58-\uDF72\uDF78-\uDF91\uDFA9-\uDFAF]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2\uDCFA-\uDD23\uDD30-\uDD39\uDE60-\uDE7E\uDE80-\uDEA9\uDEB0\uDEB1\uDF00-\uDF27\uDF30-\uDF45\uDF51-\uDF54\uDFB0-\uDFCB\uDFE0-\uDFF6]|\uD804[\uDC03-\uDC37\uDC52-\uDC6F\uDC83-\uDCAF\uDCD0-\uDCE8\uDCF0-\uDCF9\uDD03-\uDD26\uDD36-\uDD3F\uDD44\uDD47\uDD50-\uDD72\uDD76\uDD83-\uDDB2\uDDC1-\uDDC4\uDDD0-\uDDDA\uDDDC\uDDE1-\uDDF4\uDE00-\uDE11\uDE13-\uDE2B\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEDE\uDEF0-\uDEF9\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3D\uDF50\uDF5D-\uDF61]|\uD805[\uDC00-\uDC34\uDC47-\uDC4A\uDC50-\uDC59\uDC5F-\uDC61\uDC80-\uDCAF\uDCC4\uDCC5\uDCC7\uDCD0-\uDCD9\uDD80-\uDDAE\uDDD8-\uDDDB\uDE00-\uDE2F\uDE44\uDE50-\uDE59\uDE80-\uDEAA\uDEB8\uDEC0-\uDEC9\uDF00-\uDF1A\uDF30-\uDF3B]|\uD806[\uDC00-\uDC2B\uDCA0-\uDCF2\uDCFF-\uDD06\uDD09\uDD0C-\uDD13\uDD15\uDD16\uDD18-\uDD2F\uDD3F\uDD41\uDD50-\uDD59\uDDA0-\uDDA7\uDDAA-\uDDD0\uDDE1\uDDE3\uDE00\uDE0B-\uDE32\uDE3A\uDE50\uDE5C-\uDE89\uDE9D\uDEC0-\uDEF8]|\uD807[\uDC00-\uDC08\uDC0A-\uDC2E\uDC40\uDC50-\uDC6C\uDC72-\uDC8F\uDD00-\uDD06\uDD08\uDD09\uDD0B-\uDD30\uDD46\uDD50-\uDD59\uDD60-\uDD65\uDD67\uDD68\uDD6A-\uDD89\uDD98\uDDA0-\uDDA9\uDEE0-\uDEF2\uDFB0\uDFC0-\uDFD4]|\uD808[\uDC00-\uDF99]|\uD809[\uDC00-\uDC6E\uDC80-\uDD43]|[\uD80C\uD81C-\uD820\uD822\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879\uD880-\uD883][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDE60-\uDE69\uDED0-\uDEED\uDF00-\uDF2F\uDF40-\uDF43\uDF50-\uDF59\uDF5B-\uDF61\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDE40-\uDE96\uDF00-\uDF4A\uDF50\uDF93-\uDF9F\uDFE0\uDFE1\uDFE3]|\uD821[\uDC00-\uDFF7]|\uD823[\uDC00-\uDCD5\uDD00-\uDD08]|\uD82C[\uDC00-\uDD1E\uDD50-\uDD52\uDD64-\uDD67\uDD70-\uDEFB]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99]|\uD834[\uDEE0-\uDEF3\uDF60-\uDF78]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB\uDFCE-\uDFFF]|\uD838[\uDD00-\uDD2C\uDD37-\uDD3D\uDD40-\uDD49\uDD4E\uDEC0-\uDEEB\uDEF0-\uDEF9]|\uD83A[\uDC00-\uDCC4\uDCC7-\uDCCF\uDD00-\uDD43\uDD4B\uDD50-\uDD59]|\uD83B[\uDC71-\uDCAB\uDCAD-\uDCAF\uDCB1-\uDCB4\uDD01-\uDD2D\uDD2F-\uDD3D\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD83C[\uDD00-\uDD0C]|\uD83E[\uDFF0-\uDFF9]|\uD869[\uDC00-\uDEDD\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0]|\uD87E[\uDC00-\uDE1D]|\uD884[\uDC00-\uDF4A])/
                    ))
                ) {
                  var r = i[1] || i[2] || "";
                  if (
                    !r ||
                    (r && ("" === n || this.rules.inline.punctuation.exec(n)))
                  ) {
                    var a,
                      o,
                      s = i[0].length - 1,
                      l = s,
                      u = 0,
                      c =
                        "*" === i[0][0]
                          ? this.rules.inline.emStrong.rDelimAst
                          : this.rules.inline.emStrong.rDelimUnd;
                    for (
                      c.lastIndex = 0, t = t.slice(-1 * e.length + s);
                      null != (i = c.exec(t));

                    )
                      if ((a = i[1] || i[2] || i[3] || i[4] || i[5] || i[6]))
                        if (((o = a.length), i[3] || i[4])) l += o;
                        else if (!((i[5] || i[6]) && s % 3) || (s + o) % 3) {
                          if (!((l -= o) > 0))
                            return (
                              (o = Math.min(o, o + l + u)),
                              Math.min(s, o) % 2
                                ? {
                                    type: "em",
                                    raw: e.slice(0, s + i.index + o + 1),
                                    text: e.slice(1, s + i.index + o),
                                  }
                                : {
                                    type: "strong",
                                    raw: e.slice(0, s + i.index + o + 1),
                                    text: e.slice(2, s + i.index + o - 1),
                                  }
                            );
                        } else u += o;
                  }
                }
              }),
              (t.codespan = function (e) {
                var t = this.rules.inline.code.exec(e);
                if (t) {
                  var n = t[2].replace(/\n/g, " "),
                    i = /[^ ]/.test(n),
                    r = /^ /.test(n) && / $/.test(n);
                  return (
                    i && r && (n = n.substring(1, n.length - 1)),
                    (n = O(n, !0)),
                    { type: "codespan", raw: t[0], text: n }
                  );
                }
              }),
              (t.br = function (e) {
                var t = this.rules.inline.br.exec(e);
                if (t) return { type: "br", raw: t[0] };
              }),
              (t.del = function (e) {
                var t = this.rules.inline.del.exec(e);
                if (t) return { type: "del", raw: t[0], text: t[2] };
              }),
              (t.autolink = function (e, t) {
                var n,
                  i,
                  r = this.rules.inline.autolink.exec(e);
                if (r)
                  return (
                    (i =
                      "@" === r[2]
                        ? "mailto:" +
                          (n = O(this.options.mangle ? t(r[1]) : r[1]))
                        : (n = O(r[1]))),
                    {
                      type: "link",
                      raw: r[0],
                      text: n,
                      href: i,
                      tokens: [{ type: "text", raw: n, text: n }],
                    }
                  );
              }),
              (t.url = function (e, t) {
                var n;
                if ((n = this.rules.inline.url.exec(e))) {
                  var i, r;
                  if ("@" === n[2])
                    r =
                      "mailto:" + (i = O(this.options.mangle ? t(n[0]) : n[0]));
                  else {
                    var a;
                    do {
                      (a = n[0]),
                        (n[0] = this.rules.inline._backpedal.exec(n[0])[0]);
                    } while (a !== n[0]);
                    (i = O(n[0])), (r = "www." === n[1] ? "http://" + i : i);
                  }
                  return {
                    type: "link",
                    raw: n[0],
                    text: i,
                    href: r,
                    tokens: [{ type: "text", raw: i, text: i }],
                  };
                }
              }),
              (t.inlineText = function (e, t, n) {
                var i,
                  r = this.rules.inline.text.exec(e);
                if (r)
                  return (
                    (i = t
                      ? this.options.sanitize
                        ? this.options.sanitizer
                          ? this.options.sanitizer(r[0])
                          : O(r[0])
                        : r[0]
                      : O(this.options.smartypants ? n(r[0]) : r[0])),
                    { type: "text", raw: r[0], text: i }
                  );
              }),
              e
            );
          })(),
          $ = L.noopTest,
          H = L.edit,
          U = L.merge,
          W = {
            newline: /^(?: *(?:\n|$))+/,
            code: /^( {4}[^\n]+(?:\n(?: *(?:\n|$))*)?)+/,
            fences:
              /^ {0,3}(`{3,}(?=[^`\n]*\n)|~{3,})([^\n]*)\n(?:|([\s\S]*?)\n)(?: {0,3}\1[~`]* *(?:\n+|$)|$)/,
            hr: /^ {0,3}((?:- *){3,}|(?:_ *){3,}|(?:\* *){3,})(?:\n+|$)/,
            heading: /^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,
            blockquote: /^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/,
            list: /^( {0,3})(bull) [\s\S]+?(?:hr|def|\n{2,}(?! )(?! {0,3}bull )\n*|\s*$)/,
            html: "^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n *)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$))",
            def: /^ {0,3}\[(label)\]: *\n? *<?([^\s>]+)>?(?:(?: +\n? *| *\n *)(title))? *(?:\n+|$)/,
            nptable: $,
            table: $,
            lheading: /^([^\n]+)\n {0,3}(=+|-+) *(?:\n+|$)/,
            _paragraph:
              /^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html| +\n)[^\n]+)*)/,
            text: /^[^\n]+/,
            _label: /(?!\s*\])(?:\\[\[\]]|[^\[\]])+/,
            _title:
              /(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/,
          };
        (W.def = H(W.def)
          .replace("label", W._label)
          .replace("title", W._title)
          .getRegex()),
          (W.bullet = /(?:[*+-]|\d{1,9}[.)])/),
          (W.item = /^( *)(bull) ?[^\n]*(?:\n(?! *bull ?)[^\n]*)*/),
          (W.item = H(W.item, "gm").replace(/bull/g, W.bullet).getRegex()),
          (W.listItemStart = H(/^( *)(bull) */)
            .replace("bull", W.bullet)
            .getRegex()),
          (W.list = H(W.list)
            .replace(/bull/g, W.bullet)
            .replace(
              "hr",
              "\\n+(?=\\1?(?:(?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$))"
            )
            .replace("def", "\\n+(?=" + W.def.source + ")")
            .getRegex()),
          (W._tag =
            "address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|section|source|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul"),
          (W._comment = /<!--(?!-?>)[\s\S]*?(?:-->|$)/),
          (W.html = H(W.html, "i")
            .replace("comment", W._comment)
            .replace("tag", W._tag)
            .replace(
              "attribute",
              / +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/
            )
            .getRegex()),
          (W.paragraph = H(W._paragraph)
            .replace("hr", W.hr)
            .replace("heading", " {0,3}#{1,6} ")
            .replace("|lheading", "")
            .replace("blockquote", " {0,3}>")
            .replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n")
            .replace("list", " {0,3}(?:[*+-]|1[.)]) ")
            .replace(
              "html",
              "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)"
            )
            .replace("tag", W._tag)
            .getRegex()),
          (W.blockquote = H(W.blockquote)
            .replace("paragraph", W.paragraph)
            .getRegex()),
          (W.normal = U({}, W)),
          (W.gfm = U({}, W.normal, {
            nptable:
              "^ *([^|\\n ].*\\|.*)\\n {0,3}([-:]+ *\\|[-| :]*)(?:\\n((?:(?!\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)",
            table:
              "^ *\\|(.+)\\n {0,3}\\|?( *[-:]+[-| :]*)(?:\\n *((?:(?!\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)",
          })),
          (W.gfm.nptable = H(W.gfm.nptable)
            .replace("hr", W.hr)
            .replace("heading", " {0,3}#{1,6} ")
            .replace("blockquote", " {0,3}>")
            .replace("code", " {4}[^\\n]")
            .replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n")
            .replace("list", " {0,3}(?:[*+-]|1[.)]) ")
            .replace(
              "html",
              "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)"
            )
            .replace("tag", W._tag)
            .getRegex()),
          (W.gfm.table = H(W.gfm.table)
            .replace("hr", W.hr)
            .replace("heading", " {0,3}#{1,6} ")
            .replace("blockquote", " {0,3}>")
            .replace("code", " {4}[^\\n]")
            .replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n")
            .replace("list", " {0,3}(?:[*+-]|1[.)]) ")
            .replace(
              "html",
              "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)"
            )
            .replace("tag", W._tag)
            .getRegex()),
          (W.pedantic = U({}, W.normal, {
            html: H(
              "^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:\"[^\"]*\"|'[^']*'|\\s[^'\"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))"
            )
              .replace("comment", W._comment)
              .replace(
                /tag/g,
                "(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b"
              )
              .getRegex(),
            def: /^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,
            heading: /^(#{1,6})(.*)(?:\n+|$)/,
            fences: $,
            paragraph: H(W.normal._paragraph)
              .replace("hr", W.hr)
              .replace("heading", " *#{1,6} *[^\n]")
              .replace("lheading", W.lheading)
              .replace("blockquote", " {0,3}>")
              .replace("|fences", "")
              .replace("|list", "")
              .replace("|html", "")
              .getRegex(),
          }));
        var Z = {
          escape: /^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,
          autolink: /^<(scheme:[^\s\x00-\x1f<>]*|email)>/,
          url: $,
          tag: "^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>",
          link: /^!?\[(label)\]\(\s*(href)(?:\s+(title))?\s*\)/,
          reflink: /^!?\[(label)\]\[(?!\s*\])((?:\\[\[\]]?|[^\[\]\\])+)\]/,
          nolink:
            /^!?\[(?!\s*\])((?:\[[^\[\]]*\]|\\[\[\]]|[^\[\]])*)\](?:\[\])?/,
          reflinkSearch: "reflink|nolink(?!\\()",
          emStrong: {
            lDelim: /^(?:\*+(?:([punct_])|[^\s*]))|^_+(?:([punct*])|([^\s_]))/,
            rDelimAst:
              /\_\_[^_*]*?\*[^_*]*?\_\_|[punct_](\*+)(?=[\s]|$)|[^punct*_\s](\*+)(?=[punct_\s]|$)|[punct_\s](\*+)(?=[^punct*_\s])|[\s](\*+)(?=[punct_])|[punct_](\*+)(?=[punct_])|[^punct*_\s](\*+)(?=[^punct*_\s])/,
            rDelimUnd:
              /\*\*[^_*]*?\_[^_*]*?\*\*|[punct*](\_+)(?=[\s]|$)|[^punct*_\s](\_+)(?=[punct*\s]|$)|[punct*\s](\_+)(?=[^punct*_\s])|[\s](\_+)(?=[punct*])|[punct*](\_+)(?=[punct*])/,
          },
          code: /^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,
          br: /^( {2,}|\\)\n(?!\s*$)/,
          del: $,
          text: /^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,
          punctuation: /^([\spunctuation])/,
          _punctuation: "!\"#$%&'()+\\-.,/:;<=>?@\\[\\]`^{|}~",
        };
        (Z.punctuation = H(Z.punctuation)
          .replace(/punctuation/g, Z._punctuation)
          .getRegex()),
          (Z.blockSkip = /\[[^\]]*?\]\([^\)]*?\)|`[^`]*?`|<[^>]*?>/g),
          (Z.escapedEmSt = /\\\*|\\_/g),
          (Z._comment = H(W._comment)
            .replace("(?:--\x3e|$)", "--\x3e")
            .getRegex()),
          (Z.emStrong.lDelim = H(Z.emStrong.lDelim)
            .replace(/punct/g, Z._punctuation)
            .getRegex()),
          (Z.emStrong.rDelimAst = H(Z.emStrong.rDelimAst, "g")
            .replace(/punct/g, Z._punctuation)
            .getRegex()),
          (Z.emStrong.rDelimUnd = H(Z.emStrong.rDelimUnd, "g")
            .replace(/punct/g, Z._punctuation)
            .getRegex()),
          (Z._escapes = /\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/g),
          (Z._scheme = /[a-zA-Z][a-zA-Z0-9+.-]{1,31}/),
          (Z._email =
            /[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/),
          (Z.autolink = H(Z.autolink)
            .replace("scheme", Z._scheme)
            .replace("email", Z._email)
            .getRegex()),
          (Z._attribute =
            /\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/),
          (Z.tag = H(Z.tag)
            .replace("comment", Z._comment)
            .replace("attribute", Z._attribute)
            .getRegex()),
          (Z._label = /(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/),
          (Z._href = /<(?:\\.|[^\n<>\\])+>|[^\s\x00-\x1f]*/),
          (Z._title =
            /"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/),
          (Z.link = H(Z.link)
            .replace("label", Z._label)
            .replace("href", Z._href)
            .replace("title", Z._title)
            .getRegex()),
          (Z.reflink = H(Z.reflink).replace("label", Z._label).getRegex()),
          (Z.reflinkSearch = H(Z.reflinkSearch, "g")
            .replace("reflink", Z.reflink)
            .replace("nolink", Z.nolink)
            .getRegex()),
          (Z.normal = U({}, Z)),
          (Z.pedantic = U({}, Z.normal, {
            strong: {
              start: /^__|\*\*/,
              middle:
                /^__(?=\S)([\s\S]*?\S)__(?!_)|^\*\*(?=\S)([\s\S]*?\S)\*\*(?!\*)/,
              endAst: /\*\*(?!\*)/g,
              endUnd: /__(?!_)/g,
            },
            em: {
              start: /^_|\*/,
              middle:
                /^()\*(?=\S)([\s\S]*?\S)\*(?!\*)|^_(?=\S)([\s\S]*?\S)_(?!_)/,
              endAst: /\*(?!\*)/g,
              endUnd: /_(?!_)/g,
            },
            link: H(/^!?\[(label)\]\((.*?)\)/)
              .replace("label", Z._label)
              .getRegex(),
            reflink: H(/^!?\[(label)\]\s*\[([^\]]*)\]/)
              .replace("label", Z._label)
              .getRegex(),
          })),
          (Z.gfm = U({}, Z.normal, {
            escape: H(Z.escape).replace("])", "~|])").getRegex(),
            _extended_email:
              /[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/,
            url: /^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/,
            _backpedal:
              /(?:[^?!.,:;*_~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_~)]+(?!$))+/,
            del: /^(~~?)(?=[^\s~])([\s\S]*?[^\s~])\1(?=[^~]|$)/,
            text: /^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/,
          })),
          (Z.gfm.url = H(Z.gfm.url, "i")
            .replace("email", Z.gfm._extended_email)
            .getRegex()),
          (Z.breaks = U({}, Z.gfm, {
            br: H(Z.br).replace("{2,}", "*").getRegex(),
            text: H(Z.gfm.text)
              .replace("\\b_", "\\b_| {2,}\\n")
              .replace(/\{2,\}/g, "*")
              .getRegex(),
          }));
        var G = { block: W, inline: Z },
          V = P,
          X = a.exports.defaults,
          K = G.block,
          J = G.inline,
          Q = L.repeatString;
        function Y(e) {
          return e
            .replace(/---/g, "\u2014")
            .replace(/--/g, "\u2013")
            .replace(/(^|[-\u2014/(\[{"\s])'/g, "$1\u2018")
            .replace(/'/g, "\u2019")
            .replace(/(^|[-\u2014/(\[{\u2018\s])"/g, "$1\u201c")
            .replace(/"/g, "\u201d")
            .replace(/\.{3}/g, "\u2026");
        }
        function ee(e) {
          var t,
            n,
            i = "",
            r = e.length;
          for (t = 0; t < r; t++)
            (n = e.charCodeAt(t)),
              Math.random() > 0.5 && (n = "x" + n.toString(16)),
              (i += "&#" + n + ";");
          return i;
        }
        var te = (function () {
            function e(e) {
              (this.tokens = []),
                (this.tokens.links = Object.create(null)),
                (this.options = e || X),
                (this.options.tokenizer = this.options.tokenizer || new V()),
                (this.tokenizer = this.options.tokenizer),
                (this.tokenizer.options = this.options);
              var t = { block: K.normal, inline: J.normal };
              this.options.pedantic
                ? ((t.block = K.pedantic), (t.inline = J.pedantic))
                : this.options.gfm &&
                  ((t.block = K.gfm),
                  this.options.breaks
                    ? (t.inline = J.breaks)
                    : (t.inline = J.gfm)),
                (this.tokenizer.rules = t);
            }
            (e.lex = function (t, n) {
              return new e(n).lex(t);
            }),
              (e.lexInline = function (t, n) {
                return new e(n).inlineTokens(t);
              });
            var n = e.prototype;
            return (
              (n.lex = function (e) {
                return (
                  (e = e.replace(/\r\n|\r/g, "\n").replace(/\t/g, "    ")),
                  this.blockTokens(e, this.tokens, !0),
                  this.inline(this.tokens),
                  this.tokens
                );
              }),
              (n.blockTokens = function (e, t, n) {
                var i,
                  r,
                  a,
                  o,
                  s,
                  l,
                  u = this;
                for (
                  void 0 === t && (t = []),
                    void 0 === n && (n = !0),
                    this.options.pedantic && (e = e.replace(/^ +$/gm, ""));
                  e;

                )
                  if (
                    !(
                      this.options.extensions &&
                      this.options.extensions.block &&
                      this.options.extensions.block.some(function (n) {
                        return (
                          !!(i = n.call(u, e, t)) &&
                          ((e = e.substring(i.raw.length)), t.push(i), !0)
                        );
                      })
                    )
                  )
                    if ((i = this.tokenizer.space(e)))
                      (e = e.substring(i.raw.length)), i.type && t.push(i);
                    else if ((i = this.tokenizer.code(e)))
                      (e = e.substring(i.raw.length)),
                        (o = t[t.length - 1]) && "paragraph" === o.type
                          ? ((o.raw += "\n" + i.raw), (o.text += "\n" + i.text))
                          : t.push(i);
                    else if ((i = this.tokenizer.fences(e)))
                      (e = e.substring(i.raw.length)), t.push(i);
                    else if ((i = this.tokenizer.heading(e)))
                      (e = e.substring(i.raw.length)), t.push(i);
                    else if ((i = this.tokenizer.nptable(e)))
                      (e = e.substring(i.raw.length)), t.push(i);
                    else if ((i = this.tokenizer.hr(e)))
                      (e = e.substring(i.raw.length)), t.push(i);
                    else if ((i = this.tokenizer.blockquote(e)))
                      (e = e.substring(i.raw.length)),
                        (i.tokens = this.blockTokens(i.text, [], n)),
                        t.push(i);
                    else if ((i = this.tokenizer.list(e))) {
                      for (
                        e = e.substring(i.raw.length),
                          a = i.items.length,
                          r = 0;
                        r < a;
                        r++
                      )
                        i.items[r].tokens = this.blockTokens(
                          i.items[r].text,
                          [],
                          !1
                        );
                      t.push(i);
                    } else if ((i = this.tokenizer.html(e)))
                      (e = e.substring(i.raw.length)), t.push(i);
                    else if (n && (i = this.tokenizer.def(e)))
                      (e = e.substring(i.raw.length)),
                        this.tokens.links[i.tag] ||
                          (this.tokens.links[i.tag] = {
                            href: i.href,
                            title: i.title,
                          });
                    else if ((i = this.tokenizer.table(e)))
                      (e = e.substring(i.raw.length)), t.push(i);
                    else if ((i = this.tokenizer.lheading(e)))
                      (e = e.substring(i.raw.length)), t.push(i);
                    else if (
                      ((s = e),
                      this.options.extensions &&
                        this.options.extensions.startBlock &&
                        (function () {
                          var t = 1 / 0,
                            n = e.slice(1),
                            i = void 0;
                          u.options.extensions.startBlock.forEach(function (e) {
                            "number" === typeof (i = e.call(this, n)) &&
                              i >= 0 &&
                              (t = Math.min(t, i));
                          }),
                            t < 1 / 0 && t >= 0 && (s = e.substring(0, t + 1));
                        })(),
                      n && (i = this.tokenizer.paragraph(s)))
                    )
                      (o = t[t.length - 1]),
                        l && "paragraph" === o.type
                          ? ((o.raw += "\n" + i.raw), (o.text += "\n" + i.text))
                          : t.push(i),
                        (l = s.length !== e.length),
                        (e = e.substring(i.raw.length));
                    else if ((i = this.tokenizer.text(e)))
                      (e = e.substring(i.raw.length)),
                        (o = t[t.length - 1]) && "text" === o.type
                          ? ((o.raw += "\n" + i.raw), (o.text += "\n" + i.text))
                          : t.push(i);
                    else if (e) {
                      var c = "Infinite loop on byte: " + e.charCodeAt(0);
                      if (this.options.silent) {
                        console.error(c);
                        break;
                      }
                      throw new Error(c);
                    }
                return t;
              }),
              (n.inline = function (e) {
                var t,
                  n,
                  i,
                  r,
                  a,
                  o,
                  s = e.length;
                for (t = 0; t < s; t++)
                  switch ((o = e[t]).type) {
                    case "paragraph":
                    case "text":
                    case "heading":
                      (o.tokens = []), this.inlineTokens(o.text, o.tokens);
                      break;
                    case "table":
                      for (
                        o.tokens = { header: [], cells: [] },
                          r = o.header.length,
                          n = 0;
                        n < r;
                        n++
                      )
                        (o.tokens.header[n] = []),
                          this.inlineTokens(o.header[n], o.tokens.header[n]);
                      for (r = o.cells.length, n = 0; n < r; n++)
                        for (
                          a = o.cells[n], o.tokens.cells[n] = [], i = 0;
                          i < a.length;
                          i++
                        )
                          (o.tokens.cells[n][i] = []),
                            this.inlineTokens(a[i], o.tokens.cells[n][i]);
                      break;
                    case "blockquote":
                      this.inline(o.tokens);
                      break;
                    case "list":
                      for (r = o.items.length, n = 0; n < r; n++)
                        this.inline(o.items[n].tokens);
                  }
                return e;
              }),
              (n.inlineTokens = function (e, t, n, i) {
                var r,
                  a,
                  o,
                  s = this;
                void 0 === t && (t = []),
                  void 0 === n && (n = !1),
                  void 0 === i && (i = !1);
                var l,
                  u,
                  c,
                  m = e;
                if (this.tokens.links) {
                  var d = Object.keys(this.tokens.links);
                  if (d.length > 0)
                    for (
                      ;
                      null !=
                      (l = this.tokenizer.rules.inline.reflinkSearch.exec(m));

                    )
                      d.includes(l[0].slice(l[0].lastIndexOf("[") + 1, -1)) &&
                        (m =
                          m.slice(0, l.index) +
                          "[" +
                          Q("a", l[0].length - 2) +
                          "]" +
                          m.slice(
                            this.tokenizer.rules.inline.reflinkSearch.lastIndex
                          ));
                }
                for (
                  ;
                  null != (l = this.tokenizer.rules.inline.blockSkip.exec(m));

                )
                  m =
                    m.slice(0, l.index) +
                    "[" +
                    Q("a", l[0].length - 2) +
                    "]" +
                    m.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);
                for (
                  ;
                  null != (l = this.tokenizer.rules.inline.escapedEmSt.exec(m));

                )
                  m =
                    m.slice(0, l.index) +
                    "++" +
                    m.slice(this.tokenizer.rules.inline.escapedEmSt.lastIndex);
                for (; e; )
                  if (
                    (u || (c = ""),
                    (u = !1),
                    !(
                      this.options.extensions &&
                      this.options.extensions.inline &&
                      this.options.extensions.inline.some(function (n) {
                        return (
                          !!(r = n.call(s, e, t)) &&
                          ((e = e.substring(r.raw.length)), t.push(r), !0)
                        );
                      })
                    ))
                  )
                    if ((r = this.tokenizer.escape(e)))
                      (e = e.substring(r.raw.length)), t.push(r);
                    else if ((r = this.tokenizer.tag(e, n, i)))
                      (e = e.substring(r.raw.length)),
                        (n = r.inLink),
                        (i = r.inRawBlock),
                        (a = t[t.length - 1]) &&
                        "text" === r.type &&
                        "text" === a.type
                          ? ((a.raw += r.raw), (a.text += r.text))
                          : t.push(r);
                    else if ((r = this.tokenizer.link(e)))
                      (e = e.substring(r.raw.length)),
                        "link" === r.type &&
                          (r.tokens = this.inlineTokens(r.text, [], !0, i)),
                        t.push(r);
                    else if ((r = this.tokenizer.reflink(e, this.tokens.links)))
                      (e = e.substring(r.raw.length)),
                        (a = t[t.length - 1]),
                        "link" === r.type
                          ? ((r.tokens = this.inlineTokens(r.text, [], !0, i)),
                            t.push(r))
                          : a && "text" === r.type && "text" === a.type
                          ? ((a.raw += r.raw), (a.text += r.text))
                          : t.push(r);
                    else if ((r = this.tokenizer.emStrong(e, m, c)))
                      (e = e.substring(r.raw.length)),
                        (r.tokens = this.inlineTokens(r.text, [], n, i)),
                        t.push(r);
                    else if ((r = this.tokenizer.codespan(e)))
                      (e = e.substring(r.raw.length)), t.push(r);
                    else if ((r = this.tokenizer.br(e)))
                      (e = e.substring(r.raw.length)), t.push(r);
                    else if ((r = this.tokenizer.del(e)))
                      (e = e.substring(r.raw.length)),
                        (r.tokens = this.inlineTokens(r.text, [], n, i)),
                        t.push(r);
                    else if ((r = this.tokenizer.autolink(e, ee)))
                      (e = e.substring(r.raw.length)), t.push(r);
                    else if (n || !(r = this.tokenizer.url(e, ee))) {
                      if (
                        ((o = e),
                        this.options.extensions &&
                          this.options.extensions.startInline &&
                          (function () {
                            var t = 1 / 0,
                              n = e.slice(1),
                              i = void 0;
                            s.options.extensions.startInline.forEach(function (
                              e
                            ) {
                              "number" === typeof (i = e.call(this, n)) &&
                                i >= 0 &&
                                (t = Math.min(t, i));
                            }),
                              t < 1 / 0 &&
                                t >= 0 &&
                                (o = e.substring(0, t + 1));
                          })(),
                        (r = this.tokenizer.inlineText(o, i, Y)))
                      )
                        (e = e.substring(r.raw.length)),
                          "_" !== r.raw.slice(-1) && (c = r.raw.slice(-1)),
                          (u = !0),
                          (a = t[t.length - 1]) && "text" === a.type
                            ? ((a.raw += r.raw), (a.text += r.text))
                            : t.push(r);
                      else if (e) {
                        var p = "Infinite loop on byte: " + e.charCodeAt(0);
                        if (this.options.silent) {
                          console.error(p);
                          break;
                        }
                        throw new Error(p);
                      }
                    } else (e = e.substring(r.raw.length)), t.push(r);
                return t;
              }),
              t(e, null, [
                {
                  key: "rules",
                  get: function () {
                    return { block: K, inline: J };
                  },
                },
              ]),
              e
            );
          })(),
          ne = a.exports.defaults,
          ie = L.cleanUrl,
          re = L.escape,
          ae = (function () {
            function e(e) {
              this.options = e || ne;
            }
            var t = e.prototype;
            return (
              (t.code = function (e, t, n) {
                var i = (t || "").match(/\S*/)[0];
                if (this.options.highlight) {
                  var r = this.options.highlight(e, i);
                  null != r && r !== e && ((n = !0), (e = r));
                }
                return (
                  (e = e.replace(/\n$/, "") + "\n"),
                  i
                    ? '<pre><code class="' +
                      this.options.langPrefix +
                      re(i, !0) +
                      '">' +
                      (n ? e : re(e, !0)) +
                      "</code></pre>\n"
                    : "<pre><code>" + (n ? e : re(e, !0)) + "</code></pre>\n"
                );
              }),
              (t.blockquote = function (e) {
                return "<blockquote>\n" + e + "</blockquote>\n";
              }),
              (t.html = function (e) {
                return e;
              }),
              (t.heading = function (e, t, n, i) {
                return this.options.headerIds
                  ? "<h" +
                      t +
                      ' id="' +
                      this.options.headerPrefix +
                      i.slug(n) +
                      '">' +
                      e +
                      "</h" +
                      t +
                      ">\n"
                  : "<h" + t + ">" + e + "</h" + t + ">\n";
              }),
              (t.hr = function () {
                return this.options.xhtml ? "<hr/>\n" : "<hr>\n";
              }),
              (t.list = function (e, t, n) {
                var i = t ? "ol" : "ul";
                return (
                  "<" +
                  i +
                  (t && 1 !== n ? ' start="' + n + '"' : "") +
                  ">\n" +
                  e +
                  "</" +
                  i +
                  ">\n"
                );
              }),
              (t.listitem = function (e) {
                return "<li>" + e + "</li>\n";
              }),
              (t.checkbox = function (e) {
                return (
                  "<input " +
                  (e ? 'checked="" ' : "") +
                  'disabled="" type="checkbox"' +
                  (this.options.xhtml ? " /" : "") +
                  "> "
                );
              }),
              (t.paragraph = function (e) {
                return "<p>" + e + "</p>\n";
              }),
              (t.table = function (e, t) {
                return (
                  t && (t = "<tbody>" + t + "</tbody>"),
                  "<table>\n<thead>\n" + e + "</thead>\n" + t + "</table>\n"
                );
              }),
              (t.tablerow = function (e) {
                return "<tr>\n" + e + "</tr>\n";
              }),
              (t.tablecell = function (e, t) {
                var n = t.header ? "th" : "td";
                return (
                  (t.align
                    ? "<" + n + ' align="' + t.align + '">'
                    : "<" + n + ">") +
                  e +
                  "</" +
                  n +
                  ">\n"
                );
              }),
              (t.strong = function (e) {
                return "<strong>" + e + "</strong>";
              }),
              (t.em = function (e) {
                return "<em>" + e + "</em>";
              }),
              (t.codespan = function (e) {
                return "<code>" + e + "</code>";
              }),
              (t.br = function () {
                return this.options.xhtml ? "<br/>" : "<br>";
              }),
              (t.del = function (e) {
                return "<del>" + e + "</del>";
              }),
              (t.link = function (e, t, n) {
                if (
                  null ===
                  (e = ie(this.options.sanitize, this.options.baseUrl, e))
                )
                  return n;
                var i = '<a href="' + re(e) + '"';
                return (
                  t && (i += ' title="' + t + '"'), (i += ">" + n + "</a>")
                );
              }),
              (t.image = function (e, t, n) {
                if (
                  null ===
                  (e = ie(this.options.sanitize, this.options.baseUrl, e))
                )
                  return n;
                var i = '<img src="' + e + '" alt="' + n + '"';
                return (
                  t && (i += ' title="' + t + '"'),
                  (i += this.options.xhtml ? "/>" : ">")
                );
              }),
              (t.text = function (e) {
                return e;
              }),
              e
            );
          })(),
          oe = (function () {
            function e() {}
            var t = e.prototype;
            return (
              (t.strong = function (e) {
                return e;
              }),
              (t.em = function (e) {
                return e;
              }),
              (t.codespan = function (e) {
                return e;
              }),
              (t.del = function (e) {
                return e;
              }),
              (t.html = function (e) {
                return e;
              }),
              (t.text = function (e) {
                return e;
              }),
              (t.link = function (e, t, n) {
                return "" + n;
              }),
              (t.image = function (e, t, n) {
                return "" + n;
              }),
              (t.br = function () {
                return "";
              }),
              e
            );
          })(),
          se = (function () {
            function e() {
              this.seen = {};
            }
            var t = e.prototype;
            return (
              (t.serialize = function (e) {
                return e
                  .toLowerCase()
                  .trim()
                  .replace(/<[!\/a-z].*?>/gi, "")
                  .replace(
                    /[\u2000-\u206F\u2E00-\u2E7F\\'!"#$%&()*+,./:;<=>?@[\]^`{|}~]/g,
                    ""
                  )
                  .replace(/\s/g, "-");
              }),
              (t.getNextSafeSlug = function (e, t) {
                var n = e,
                  i = 0;
                if (this.seen.hasOwnProperty(n)) {
                  i = this.seen[e];
                  do {
                    n = e + "-" + ++i;
                  } while (this.seen.hasOwnProperty(n));
                }
                return t || ((this.seen[e] = i), (this.seen[n] = 0)), n;
              }),
              (t.slug = function (e, t) {
                void 0 === t && (t = {});
                var n = this.serialize(e);
                return this.getNextSafeSlug(n, t.dryrun);
              }),
              e
            );
          })(),
          le = ae,
          ue = oe,
          ce = se,
          me = a.exports.defaults,
          de = L.unescape,
          pe = te,
          he = (function () {
            function e(e) {
              (this.options = e || me),
                (this.options.renderer = this.options.renderer || new le()),
                (this.renderer = this.options.renderer),
                (this.renderer.options = this.options),
                (this.textRenderer = new ue()),
                (this.slugger = new ce());
            }
            (e.parse = function (t, n) {
              return new e(n).parse(t);
            }),
              (e.parseInline = function (t, n) {
                return new e(n).parseInline(t);
              });
            var t = e.prototype;
            return (
              (t.parse = function (e, t) {
                void 0 === t && (t = !0);
                var n,
                  i,
                  r,
                  a,
                  o,
                  s,
                  l,
                  u,
                  c,
                  m,
                  d,
                  p,
                  h,
                  f,
                  g,
                  D,
                  x,
                  v,
                  k,
                  b = "",
                  C = e.length;
                for (n = 0; n < C; n++)
                  if (
                    ((m = e[n]),
                    !(
                      this.options.extensions &&
                      this.options.extensions.renderers &&
                      this.options.extensions.renderers[m.type]
                    ) ||
                      (!1 ===
                        (k = this.options.extensions.renderers[m.type].call(
                          this,
                          m
                        )) &&
                        [
                          "space",
                          "hr",
                          "heading",
                          "code",
                          "table",
                          "blockquote",
                          "list",
                          "html",
                          "paragraph",
                          "text",
                        ].includes(m.type)))
                  )
                    switch (m.type) {
                      case "space":
                        continue;
                      case "hr":
                        b += this.renderer.hr();
                        continue;
                      case "heading":
                        b += this.renderer.heading(
                          this.parseInline(m.tokens),
                          m.depth,
                          de(this.parseInline(m.tokens, this.textRenderer)),
                          this.slugger
                        );
                        continue;
                      case "code":
                        b += this.renderer.code(m.text, m.lang, m.escaped);
                        continue;
                      case "table":
                        for (
                          u = "", l = "", a = m.header.length, i = 0;
                          i < a;
                          i++
                        )
                          l += this.renderer.tablecell(
                            this.parseInline(m.tokens.header[i]),
                            { header: !0, align: m.align[i] }
                          );
                        for (
                          u += this.renderer.tablerow(l),
                            c = "",
                            a = m.cells.length,
                            i = 0;
                          i < a;
                          i++
                        ) {
                          for (
                            l = "", o = (s = m.tokens.cells[i]).length, r = 0;
                            r < o;
                            r++
                          )
                            l += this.renderer.tablecell(
                              this.parseInline(s[r]),
                              { header: !1, align: m.align[r] }
                            );
                          c += this.renderer.tablerow(l);
                        }
                        b += this.renderer.table(u, c);
                        continue;
                      case "blockquote":
                        (c = this.parse(m.tokens)),
                          (b += this.renderer.blockquote(c));
                        continue;
                      case "list":
                        for (
                          d = m.ordered,
                            p = m.start,
                            h = m.loose,
                            a = m.items.length,
                            c = "",
                            i = 0;
                          i < a;
                          i++
                        )
                          (D = (g = m.items[i]).checked),
                            (x = g.task),
                            (f = ""),
                            g.task &&
                              ((v = this.renderer.checkbox(D)),
                              h
                                ? g.tokens.length > 0 &&
                                  "text" === g.tokens[0].type
                                  ? ((g.tokens[0].text =
                                      v + " " + g.tokens[0].text),
                                    g.tokens[0].tokens &&
                                      g.tokens[0].tokens.length > 0 &&
                                      "text" === g.tokens[0].tokens[0].type &&
                                      (g.tokens[0].tokens[0].text =
                                        v + " " + g.tokens[0].tokens[0].text))
                                  : g.tokens.unshift({ type: "text", text: v })
                                : (f += v)),
                            (f += this.parse(g.tokens, h)),
                            (c += this.renderer.listitem(f, x, D));
                        b += this.renderer.list(c, d, p);
                        continue;
                      case "html":
                        b += this.renderer.html(m.text);
                        continue;
                      case "paragraph":
                        b += this.renderer.paragraph(
                          this.parseInline(m.tokens)
                        );
                        continue;
                      case "text":
                        for (
                          c = m.tokens ? this.parseInline(m.tokens) : m.text;
                          n + 1 < C && "text" === e[n + 1].type;

                        )
                          c +=
                            "\n" +
                            ((m = e[++n]).tokens
                              ? this.parseInline(m.tokens)
                              : m.text);
                        b += t ? this.renderer.paragraph(c) : c;
                        continue;
                      default:
                        var y =
                          'Token with "' + m.type + '" type was not found.';
                        if (this.options.silent) return void console.error(y);
                        throw new Error(y);
                    }
                  else b += k || "";
                return b;
              }),
              (t.parseInline = function (e, t) {
                t = t || this.renderer;
                var n,
                  i,
                  r,
                  a = "",
                  o = e.length;
                for (n = 0; n < o; n++)
                  if (
                    ((i = e[n]),
                    !(
                      this.options.extensions &&
                      this.options.extensions.renderers &&
                      this.options.extensions.renderers[i.type]
                    ) ||
                      (!1 ===
                        (r = this.options.extensions.renderers[i.type].call(
                          this,
                          i
                        )) &&
                        [
                          "escape",
                          "html",
                          "link",
                          "image",
                          "strong",
                          "em",
                          "codespan",
                          "br",
                          "del",
                          "text",
                        ].includes(i.type)))
                  )
                    switch (i.type) {
                      case "escape":
                        a += t.text(i.text);
                        break;
                      case "html":
                        a += t.html(i.text);
                        break;
                      case "link":
                        a += t.link(
                          i.href,
                          i.title,
                          this.parseInline(i.tokens, t)
                        );
                        break;
                      case "image":
                        a += t.image(i.href, i.title, i.text);
                        break;
                      case "strong":
                        a += t.strong(this.parseInline(i.tokens, t));
                        break;
                      case "em":
                        a += t.em(this.parseInline(i.tokens, t));
                        break;
                      case "codespan":
                        a += t.codespan(i.text);
                        break;
                      case "br":
                        a += t.br();
                        break;
                      case "del":
                        a += t.del(this.parseInline(i.tokens, t));
                        break;
                      case "text":
                        a += t.text(i.text);
                        break;
                      default:
                        var s =
                          'Token with "' + i.type + '" type was not found.';
                        if (this.options.silent) return void console.error(s);
                        throw new Error(s);
                    }
                  else a += r || "";
                return a;
              }),
              e
            );
          })(),
          fe = P,
          ge = ae,
          De = oe,
          xe = se,
          ve = L.merge,
          ke = L.checkSanitizeDeprecation,
          be = L.escape,
          Ce = a.exports.getDefaults,
          ye = a.exports.changeDefaults,
          Fe = a.exports.defaults;
        function Ee(e, t, n) {
          if ("undefined" === typeof e || null === e)
            throw new Error("marked(): input parameter is undefined or null");
          if ("string" !== typeof e)
            throw new Error(
              "marked(): input parameter is of type " +
                Object.prototype.toString.call(e) +
                ", string expected"
            );
          if (
            ("function" === typeof t && ((n = t), (t = null)),
            (t = ve({}, Ee.defaults, t || {})),
            ke(t),
            n)
          ) {
            var i,
              r = t.highlight;
            try {
              i = pe.lex(e, t);
            } catch (l) {
              return n(l);
            }
            var a = function (e) {
              var a;
              if (!e)
                try {
                  t.walkTokens && Ee.walkTokens(i, t.walkTokens),
                    (a = he.parse(i, t));
                } catch (l) {
                  e = l;
                }
              return (t.highlight = r), e ? n(e) : n(null, a);
            };
            if (!r || r.length < 3) return a();
            if ((delete t.highlight, !i.length)) return a();
            var o = 0;
            return (
              Ee.walkTokens(i, function (e) {
                "code" === e.type &&
                  (o++,
                  setTimeout(function () {
                    r(e.text, e.lang, function (t, n) {
                      if (t) return a(t);
                      null != n &&
                        n !== e.text &&
                        ((e.text = n), (e.escaped = !0)),
                        0 === --o && a();
                    });
                  }, 0));
              }),
              void (0 === o && a())
            );
          }
          try {
            var s = pe.lex(e, t);
            return (
              t.walkTokens && Ee.walkTokens(s, t.walkTokens), he.parse(s, t)
            );
          } catch (l) {
            if (
              ((l.message +=
                "\nPlease report this to https://github.com/markedjs/marked."),
              t.silent)
            )
              return (
                "<p>An error occurred:</p><pre>" +
                be(l.message + "", !0) +
                "</pre>"
              );
            throw l;
          }
        }
        return (
          (Ee.options = Ee.setOptions =
            function (e) {
              return ve(Ee.defaults, e), ye(Ee.defaults), Ee;
            }),
          (Ee.getDefaults = Ce),
          (Ee.defaults = Fe),
          (Ee.use = function () {
            for (
              var e = this, t = arguments.length, n = new Array(t), i = 0;
              i < t;
              i++
            )
              n[i] = arguments[i];
            var r,
              a = ve.apply(void 0, [{}].concat(n)),
              o = Ee.defaults.extensions || { renderers: {}, childTokens: {} };
            n.forEach(function (t) {
              if (
                (t.extensions &&
                  ((r = !0),
                  t.extensions.forEach(function (e) {
                    if (!e.name) throw new Error("extension name required");
                    if (e.renderer) {
                      var t = o.renderers ? o.renderers[e.name] : null;
                      o.renderers[e.name] = t
                        ? function () {
                            for (
                              var n = arguments.length, i = new Array(n), r = 0;
                              r < n;
                              r++
                            )
                              i[r] = arguments[r];
                            var a = e.renderer.apply(this, i);
                            return !1 === a && (a = t.apply(this, i)), a;
                          }
                        : e.renderer;
                    }
                    if (e.tokenizer) {
                      if (
                        !e.level ||
                        ("block" !== e.level && "inline" !== e.level)
                      )
                        throw new Error(
                          "extension level must be 'block' or 'inline'"
                        );
                      o[e.level]
                        ? o[e.level].unshift(e.tokenizer)
                        : (o[e.level] = [e.tokenizer]),
                        e.start &&
                          ("block" === e.level
                            ? o.startBlock
                              ? o.startBlock.push(e.start)
                              : (o.startBlock = [e.start])
                            : "inline" === e.level &&
                              (o.startInline
                                ? o.startInline.push(e.start)
                                : (o.startInline = [e.start])));
                    }
                    e.childTokens && (o.childTokens[e.name] = e.childTokens);
                  })),
                t.renderer &&
                  (function () {
                    var e = Ee.defaults.renderer || new ge(),
                      n = function (n) {
                        var i = e[n];
                        e[n] = function () {
                          for (
                            var r = arguments.length, a = new Array(r), o = 0;
                            o < r;
                            o++
                          )
                            a[o] = arguments[o];
                          var s = t.renderer[n].apply(e, a);
                          return !1 === s && (s = i.apply(e, a)), s;
                        };
                      };
                    for (var i in t.renderer) n(i);
                    a.renderer = e;
                  })(),
                t.tokenizer &&
                  (function () {
                    var e = Ee.defaults.tokenizer || new fe(),
                      n = function (n) {
                        var i = e[n];
                        e[n] = function () {
                          for (
                            var r = arguments.length, a = new Array(r), o = 0;
                            o < r;
                            o++
                          )
                            a[o] = arguments[o];
                          var s = t.tokenizer[n].apply(e, a);
                          return !1 === s && (s = i.apply(e, a)), s;
                        };
                      };
                    for (var i in t.tokenizer) n(i);
                    a.tokenizer = e;
                  })(),
                t.walkTokens)
              ) {
                var n = Ee.defaults.walkTokens;
                a.walkTokens = function (i) {
                  t.walkTokens.call(e, i), n && n(i);
                };
              }
              r && (a.extensions = o), Ee.setOptions(a);
            });
          }),
          (Ee.walkTokens = function (e, t) {
            for (
              var n,
                i = function () {
                  var e = n.value;
                  switch ((t(e), e.type)) {
                    case "table":
                      for (var i, a = r(e.tokens.header); !(i = a()).done; ) {
                        var o = i.value;
                        Ee.walkTokens(o, t);
                      }
                      for (var s, l = r(e.tokens.cells); !(s = l()).done; )
                        for (var u, c = r(s.value); !(u = c()).done; ) {
                          var m = u.value;
                          Ee.walkTokens(m, t);
                        }
                      break;
                    case "list":
                      Ee.walkTokens(e.items, t);
                      break;
                    default:
                      Ee.defaults.extensions &&
                      Ee.defaults.extensions.childTokens &&
                      Ee.defaults.extensions.childTokens[e.type]
                        ? Ee.defaults.extensions.childTokens[e.type].forEach(
                            function (n) {
                              Ee.walkTokens(e[n], t);
                            }
                          )
                        : e.tokens && Ee.walkTokens(e.tokens, t);
                  }
                },
                a = r(e);
              !(n = a()).done;

            )
              i();
          }),
          (Ee.parseInline = function (e, t) {
            if ("undefined" === typeof e || null === e)
              throw new Error(
                "marked.parseInline(): input parameter is undefined or null"
              );
            if ("string" !== typeof e)
              throw new Error(
                "marked.parseInline(): input parameter is of type " +
                  Object.prototype.toString.call(e) +
                  ", string expected"
              );
            (t = ve({}, Ee.defaults, t || {})), ke(t);
            try {
              var n = pe.lexInline(e, t);
              return (
                t.walkTokens && Ee.walkTokens(n, t.walkTokens),
                he.parseInline(n, t)
              );
            } catch (i) {
              if (
                ((i.message +=
                  "\nPlease report this to https://github.com/markedjs/marked."),
                t.silent)
              )
                return (
                  "<p>An error occurred:</p><pre>" +
                  be(i.message + "", !0) +
                  "</pre>"
                );
              throw i;
            }
          }),
          (Ee.Parser = he),
          (Ee.parser = he.parse),
          (Ee.Renderer = ge),
          (Ee.TextRenderer = De),
          (Ee.Lexer = pe),
          (Ee.lexer = pe.lex),
          (Ee.Tokenizer = fe),
          (Ee.Slugger = xe),
          (Ee.parse = Ee),
          Ee
        );
      })();
    },
    9197: function () {},
    1163: function (e, t, n) {
      e.exports = n(387);
    },
    1634: function (e, t, n) {
      "use strict";
      t.Z = void 0;
      var i = (function (e) {
        if (e && e.__esModule) return e;
        if (null === e || ("object" !== typeof e && "function" !== typeof e))
          return { default: e };
        var t = r();
        if (t && t.has(e)) return t.get(e);
        var n = {},
          i = Object.defineProperty && Object.getOwnPropertyDescriptor;
        for (var a in e)
          if (Object.prototype.hasOwnProperty.call(e, a)) {
            var o = i ? Object.getOwnPropertyDescriptor(e, a) : null;
            o && (o.get || o.set)
              ? Object.defineProperty(n, a, o)
              : (n[a] = e[a]);
          }
        (n.default = e), t && t.set(e, n);
        return n;
      })(n(7294));
      function r() {
        if ("function" !== typeof WeakMap) return null;
        var e = new WeakMap();
        return (
          (r = function () {
            return e;
          }),
          e
        );
      }
      function a(e, t) {
        if (null == e) return {};
        var n,
          i,
          r = (function (e, t) {
            if (null == e) return {};
            var n,
              i,
              r = {},
              a = Object.keys(e);
            for (i = 0; i < a.length; i++)
              (n = a[i]), t.indexOf(n) >= 0 || (r[n] = e[n]);
            return r;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var a = Object.getOwnPropertySymbols(e);
          for (i = 0; i < a.length; i++)
            (n = a[i]),
              t.indexOf(n) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, n) &&
                  (r[n] = e[n]));
        }
        return r;
      }
      function o(e, t) {
        return (
          (function (e) {
            if (Array.isArray(e)) return e;
          })(e) ||
          (function (e, t) {
            if (
              "undefined" === typeof Symbol ||
              !(Symbol.iterator in Object(e))
            )
              return;
            var n = [],
              i = !0,
              r = !1,
              a = void 0;
            try {
              for (
                var o, s = e[Symbol.iterator]();
                !(i = (o = s.next()).done) &&
                (n.push(o.value), !t || n.length !== t);
                i = !0
              );
            } catch (l) {
              (r = !0), (a = l);
            } finally {
              try {
                i || null == s.return || s.return();
              } finally {
                if (r) throw a;
              }
            }
            return n;
          })(e, t) ||
          (function (e, t) {
            if (!e) return;
            if ("string" === typeof e) return s(e, t);
            var n = Object.prototype.toString.call(e).slice(8, -1);
            "Object" === n && e.constructor && (n = e.constructor.name);
            if ("Map" === n || "Set" === n) return Array.from(e);
            if (
              "Arguments" === n ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
            )
              return s(e, t);
          })(e, t) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          })()
        );
      }
      function s(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, i = new Array(t); n < t; n++) i[n] = e[n];
        return i;
      }
      function l(e, t) {
        for (var n = 0; n < t.length; n++) {
          var i = t[n];
          (i.enumerable = i.enumerable || !1),
            (i.configurable = !0),
            "value" in i && (i.writable = !0),
            Object.defineProperty(e, i.key, i);
        }
      }
      function u(e, t) {
        return (u =
          Object.setPrototypeOf ||
          function (e, t) {
            return (e.__proto__ = t), e;
          })(e, t);
      }
      function c(e) {
        var t = (function () {
          if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ("function" === typeof Proxy) return !0;
          try {
            return (
              Date.prototype.toString.call(
                Reflect.construct(Date, [], function () {})
              ),
              !0
            );
          } catch (e) {
            return !1;
          }
        })();
        return function () {
          var n,
            i = d(e);
          if (t) {
            var r = d(this).constructor;
            n = Reflect.construct(i, arguments, r);
          } else n = i.apply(this, arguments);
          return m(this, n);
        };
      }
      function m(e, t) {
        return !t || ("object" !== typeof t && "function" !== typeof t)
          ? (function (e) {
              if (void 0 === e)
                throw new ReferenceError(
                  "this hasn't been initialised - super() hasn't been called"
                );
              return e;
            })(e)
          : t;
      }
      function d(e) {
        return (d = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function (e) {
              return e.__proto__ || Object.getPrototypeOf(e);
            })(e);
      }
      var p = 0,
        h = (function (e) {
          !(function (e, t) {
            if ("function" !== typeof t && null !== t)
              throw new TypeError(
                "Super expression must either be null or a function"
              );
            (e.prototype = Object.create(t && t.prototype, {
              constructor: { value: e, writable: !0, configurable: !0 },
            })),
              t && u(e, t);
          })(d, e);
          var t,
            r,
            s,
            m = c(d);
          function d(e) {
            var t;
            return (
              (function (e, t) {
                if (!(e instanceof t))
                  throw new TypeError("Cannot call a class as a function");
              })(this, d),
              ((t = m.call(this, e)).keyChange = !1),
              (t.state = { value: t.props.value || "" }),
              (t.id = t.props.id
                ? t.props.id
                : "simplemde-editor-".concat(++p)),
              (t.simpleMde = null),
              (t.editorEl = null),
              (t.editorToolbarEl = null),
              (t.imageUploadFunction = function (e, n, i) {
                var r,
                  a =
                    null === (r = t.props.options) || void 0 === r
                      ? void 0
                      : r.imageUploadFunction;
                if (a) {
                  a(
                    e,
                    function (e) {
                      n(e), t.eventWrapper();
                    },
                    i
                  );
                }
              }),
              (t.createEditor = function () {
                var e,
                  i = n(4442),
                  r = {
                    element: document.getElementById(t.id),
                    initialValue: t.props.value,
                  },
                  a = (
                    null === (e = t.props.options) || void 0 === e
                      ? void 0
                      : e.imageUploadFunction
                  )
                    ? t.imageUploadFunction
                    : void 0,
                  o = Object.assign({}, r, t.props.options, {
                    imageUploadFunction: a,
                  });
                t.simpleMde = new i(o);
              }),
              (t.eventWrapper = function () {
                (t.keyChange = !0),
                  t.setState({ value: t.simpleMde.value() }),
                  t.props.onChange(t.simpleMde.value());
              }),
              (t.removeEvents = function () {
                t.editorEl &&
                  t.editorToolbarEl &&
                  (t.editorEl.removeEventListener("keyup", t.eventWrapper),
                  t.editorEl.removeEventListener("paste", t.eventWrapper),
                  t.editorToolbarEl.removeEventListener(
                    "click",
                    t.eventWrapper
                  ));
              }),
              (t.addEvents = function () {
                if (t.elementWrapperRef && t.simpleMde) {
                  (t.editorEl = t.elementWrapperRef),
                    (t.editorToolbarEl =
                      t.elementWrapperRef.getElementsByClassName(
                        "editor-toolbar"
                      )[0]),
                    t.editorEl.addEventListener("keyup", t.eventWrapper),
                    t.editorEl.addEventListener("paste", t.eventWrapper),
                    t.editorToolbarEl &&
                      t.editorToolbarEl.addEventListener(
                        "click",
                        t.eventWrapper
                      ),
                    t.simpleMde.codemirror.on("change", t.eventWrapper),
                    t.simpleMde.codemirror.on("cursorActivity", t.getCursor);
                  var e = t.props.events;
                  e &&
                    Object.entries(e).forEach(function (e) {
                      var n = o(e, 2),
                        i = n[0],
                        r = n[1];
                      i && r && t.simpleMde && t.simpleMde.codemirror.on(i, r);
                    });
                }
              }),
              (t.getCursor = function () {
                t.props.getLineAndCursor &&
                  t.props.getLineAndCursor(
                    t.simpleMde.codemirror.getDoc().getCursor()
                  );
              }),
              (t.getMdeInstance = function () {
                t.props.getMdeInstance && t.props.getMdeInstance(t.simpleMde);
              }),
              (t.addExtraKeys = function () {
                t.props.extraKeys &&
                  t.simpleMde.codemirror.setOption(
                    "extraKeys",
                    Object.assign(
                      {},
                      t.props.extraKeys,
                      t.simpleMde.codemirror.getOption("extraKeys")
                    )
                  );
              }),
              (t.elementWrapperRef = null),
              (t.setElementWrapperRef = function (e) {
                t.elementWrapperRef = e;
              }),
              t
            );
          }
          return (
            (t = d),
            (r = [
              {
                key: "componentDidMount",
                value: function () {
                  void 0 !== typeof window &&
                    (this.createEditor(),
                    this.addEvents(),
                    this.addExtraKeys(),
                    this.getCursor(),
                    this.getMdeInstance());
                },
              },
              {
                key: "componentDidUpdate",
                value: function (e) {
                  this.keyChange ||
                    this.props.value === this.state.value ||
                    this.props.value === e.value ||
                    this.simpleMde.value(this.props.value || ""),
                    (this.keyChange = !1);
                },
              },
              {
                key: "componentWillUnmount",
                value: function () {
                  null !== this.editorEl &&
                    void 0 !== this.editorEl &&
                    this.removeEvents();
                },
              },
              {
                key: "render",
                value: function () {
                  var e = this.props,
                    t =
                      (e.events,
                      e.value,
                      e.options,
                      e.children,
                      e.extraKeys,
                      e.getLineAndCursor,
                      e.getMdeInstance,
                      e.label),
                    n =
                      (e.onChange,
                      e.id,
                      a(e, [
                        "events",
                        "value",
                        "options",
                        "children",
                        "extraKeys",
                        "getLineAndCursor",
                        "getMdeInstance",
                        "label",
                        "onChange",
                        "id",
                      ]));
                  return i.createElement(
                    "div",
                    Object.assign({ id: "".concat(this.id, "-wrapper") }, n, {
                      ref: this.setElementWrapperRef,
                    }),
                    t &&
                      i.createElement(
                        "label",
                        { htmlFor: this.id },
                        " ",
                        t,
                        " "
                      ),
                    i.createElement("textarea", { id: this.id })
                  );
                },
              },
            ]) && l(t.prototype, r),
            s && l(t, s),
            d
          );
        })(i.PureComponent);
      (t.Z = h),
        (h.defaultProps = {
          events: {},
          onChange: function () {},
          options: {},
        });
    },
    4581: function (e, t, n) {
      var i;
      !(function () {
        "use strict";
        (i = function (e, t, n, i) {
          (i = i || {}),
            (this.dictionary = null),
            (this.rules = {}),
            (this.dictionaryTable = {}),
            (this.compoundRules = []),
            (this.compoundRuleCodes = {}),
            (this.replacementTable = []),
            (this.flags = i.flags || {}),
            (this.memoized = {}),
            (this.loaded = !1);
          var r,
            a,
            o,
            s,
            l,
            u = this;
          function c(e, t) {
            var n = u._readFile(e, null, i.asyncLoad);
            i.asyncLoad
              ? n.then(function (e) {
                  t(e);
                })
              : t(n);
          }
          function m(e) {
            (t = e), n && p();
          }
          function d(e) {
            (n = e), t && p();
          }
          function p() {
            for (
              u.rules = u._parseAFF(t),
                u.compoundRuleCodes = {},
                a = 0,
                s = u.compoundRules.length;
              a < s;
              a++
            ) {
              var e = u.compoundRules[a];
              for (o = 0, l = e.length; o < l; o++)
                u.compoundRuleCodes[e[o]] = [];
            }
            for (a in ("ONLYINCOMPOUND" in u.flags &&
              (u.compoundRuleCodes[u.flags.ONLYINCOMPOUND] = []),
            (u.dictionaryTable = u._parseDIC(n)),
            u.compoundRuleCodes))
              0 === u.compoundRuleCodes[a].length &&
                delete u.compoundRuleCodes[a];
            for (a = 0, s = u.compoundRules.length; a < s; a++) {
              var r = u.compoundRules[a],
                c = "";
              for (o = 0, l = r.length; o < l; o++) {
                var m = r[o];
                m in u.compoundRuleCodes
                  ? (c += "(" + u.compoundRuleCodes[m].join("|") + ")")
                  : (c += m);
              }
              u.compoundRules[a] = new RegExp(c, "i");
            }
            (u.loaded = !0),
              i.asyncLoad && i.loadedCallback && i.loadedCallback(u);
          }
          return (
            e &&
              ((u.dictionary = e),
              t && n
                ? p()
                : "undefined" !== typeof window &&
                  "chrome" in window &&
                  "extension" in window.chrome &&
                  "getURL" in window.chrome.extension
                ? ((r = i.dictionaryPath
                    ? i.dictionaryPath
                    : "typo/dictionaries"),
                  t ||
                    c(
                      chrome.extension.getURL(r + "/" + e + "/" + e + ".aff"),
                      m
                    ),
                  n ||
                    c(
                      chrome.extension.getURL(r + "/" + e + "/" + e + ".dic"),
                      d
                    ))
                : ((r = i.dictionaryPath ? i.dictionaryPath : "//dictionaries"),
                  t || c(r + "/" + e + "/" + e + ".aff", m),
                  n || c(r + "/" + e + "/" + e + ".dic", d))),
            this
          );
        }).prototype = {
          load: function (e) {
            for (var t in e) e.hasOwnProperty(t) && (this[t] = e[t]);
            return this;
          },
          _readFile: function (e, t, i) {
            if (((t = t || "utf8"), "undefined" !== typeof XMLHttpRequest)) {
              var r,
                a = new XMLHttpRequest();
              return (
                a.open("GET", e, i),
                i &&
                  (r = new Promise(function (e, t) {
                    (a.onload = function () {
                      200 === a.status ? e(a.responseText) : t(a.statusText);
                    }),
                      (a.onerror = function () {
                        t(a.statusText);
                      });
                  })),
                a.overrideMimeType &&
                  a.overrideMimeType("text/plain; charset=" + t),
                a.send(null),
                i ? r : a.responseText
              );
            }
            var o = n(2562);
            try {
              if (o.existsSync(e)) return o.readFileSync(e, t);
              console.log("Path " + e + " does not exist.");
            } catch (s) {
              return console.log(s), "";
            }
          },
          _parseAFF: function (e) {
            var t,
              n,
              i,
              r,
              a,
              o,
              s,
              l = {},
              u = e.split(/\r?\n/);
            for (r = 0, o = u.length; r < o; r++)
              if ((t = (t = this._removeAffixComments(u[r])).trim())) {
                var c = t.split(/\s+/),
                  m = c[0];
                if ("PFX" == m || "SFX" == m) {
                  var d = c[1],
                    p = c[2],
                    h = [];
                  for (
                    a = r + 1, s = r + 1 + (n = parseInt(c[3], 10));
                    a < s;
                    a++
                  ) {
                    var f = (i = u[a].split(/\s+/))[2],
                      g = i[3].split("/"),
                      D = g[0];
                    "0" === D && (D = "");
                    var x = this.parseRuleCodes(g[1]),
                      v = i[4],
                      k = {};
                    (k.add = D),
                      x.length > 0 && (k.continuationClasses = x),
                      "." !== v &&
                        (k.match =
                          "SFX" === m
                            ? new RegExp(v + "$")
                            : new RegExp("^" + v)),
                      "0" != f &&
                        (k.remove = "SFX" === m ? new RegExp(f + "$") : f),
                      h.push(k);
                  }
                  (l[d] = { type: m, combineable: "Y" == p, entries: h }),
                    (r += n);
                } else if ("COMPOUNDRULE" === m) {
                  for (
                    a = r + 1, s = r + 1 + (n = parseInt(c[1], 10));
                    a < s;
                    a++
                  )
                    (i = (t = u[a]).split(/\s+/)),
                      this.compoundRules.push(i[1]);
                  r += n;
                } else
                  "REP" === m
                    ? 3 === (i = t.split(/\s+/)).length &&
                      this.replacementTable.push([i[1], i[2]])
                    : (this.flags[m] = c[1]);
              }
            return l;
          },
          _removeAffixComments: function (e) {
            return e.match(/^\s*#/, "") ? "" : e;
          },
          _parseDIC: function (e) {
            var t = (e = this._removeDicComments(e)).split(/\r?\n/),
              n = {};
            function i(e, t) {
              n.hasOwnProperty(e) || (n[e] = null),
                t.length > 0 && (null === n[e] && (n[e] = []), n[e].push(t));
            }
            for (var r = 1, a = t.length; r < a; r++) {
              var o = t[r];
              if (o) {
                var s = o.split("/", 2),
                  l = s[0];
                if (s.length > 1) {
                  var u = this.parseRuleCodes(s[1]);
                  ("NEEDAFFIX" in this.flags &&
                    -1 != u.indexOf(this.flags.NEEDAFFIX)) ||
                    i(l, u);
                  for (var c = 0, m = u.length; c < m; c++) {
                    var d = u[c],
                      p = this.rules[d];
                    if (p)
                      for (
                        var h = this._applyRule(l, p), f = 0, g = h.length;
                        f < g;
                        f++
                      ) {
                        var D = h[f];
                        if ((i(D, []), p.combineable))
                          for (var x = c + 1; x < m; x++) {
                            var v = u[x],
                              k = this.rules[v];
                            if (k && k.combineable && p.type != k.type)
                              for (
                                var b = this._applyRule(D, k),
                                  C = 0,
                                  y = b.length;
                                C < y;
                                C++
                              ) {
                                i(b[C], []);
                              }
                          }
                      }
                    d in this.compoundRuleCodes &&
                      this.compoundRuleCodes[d].push(l);
                  }
                } else i(l.trim(), []);
              }
            }
            return n;
          },
          _removeDicComments: function (e) {
            return (e = e.replace(/^\t.*$/gm, ""));
          },
          parseRuleCodes: function (e) {
            if (!e) return [];
            if (!("FLAG" in this.flags)) return e.split("");
            if ("long" === this.flags.FLAG) {
              for (var t = [], n = 0, i = e.length; n < i; n += 2)
                t.push(e.substr(n, 2));
              return t;
            }
            return "num" === this.flags.FLAG ? e.split(",") : void 0;
          },
          _applyRule: function (e, t) {
            for (var n = t.entries, i = [], r = 0, a = n.length; r < a; r++) {
              var o = n[r];
              if (!o.match || e.match(o.match)) {
                var s = e;
                if (
                  (o.remove && (s = s.replace(o.remove, "")),
                  "SFX" === t.type ? (s += o.add) : (s = o.add + s),
                  i.push(s),
                  "continuationClasses" in o)
                )
                  for (
                    var l = 0, u = o.continuationClasses.length;
                    l < u;
                    l++
                  ) {
                    var c = this.rules[o.continuationClasses[l]];
                    c && (i = i.concat(this._applyRule(s, c)));
                  }
              }
            }
            return i;
          },
          check: function (e) {
            if (!this.loaded) throw "Dictionary not loaded.";
            var t = e.replace(/^\s\s*/, "").replace(/\s\s*$/, "");
            if (this.checkExact(t)) return !0;
            if (t.toUpperCase() === t) {
              var n = t[0] + t.substring(1).toLowerCase();
              if (this.hasFlag(n, "KEEPCASE")) return !1;
              if (this.checkExact(n)) return !0;
              if (this.checkExact(t.toLowerCase())) return !0;
            }
            var i = t[0].toLowerCase() + t.substring(1);
            if (i !== t) {
              if (this.hasFlag(i, "KEEPCASE")) return !1;
              if (this.checkExact(i)) return !0;
            }
            return !1;
          },
          checkExact: function (e) {
            if (!this.loaded) throw "Dictionary not loaded.";
            var t,
              n,
              i = this.dictionaryTable[e];
            if ("undefined" === typeof i) {
              if (
                "COMPOUNDMIN" in this.flags &&
                e.length >= this.flags.COMPOUNDMIN
              )
                for (t = 0, n = this.compoundRules.length; t < n; t++)
                  if (e.match(this.compoundRules[t])) return !0;
            } else {
              if (null === i) return !0;
              if ("object" === typeof i)
                for (t = 0, n = i.length; t < n; t++)
                  if (!this.hasFlag(e, "ONLYINCOMPOUND", i[t])) return !0;
            }
            return !1;
          },
          hasFlag: function (e, t, n) {
            if (!this.loaded) throw "Dictionary not loaded.";
            return !(
              !(t in this.flags) ||
              ("undefined" === typeof n &&
                (n = Array.prototype.concat.apply([], this.dictionaryTable[e])),
              !n || -1 === n.indexOf(this.flags[t]))
            );
          },
          alphabet: "",
          suggest: function (e, t) {
            if (!this.loaded) throw "Dictionary not loaded.";
            if (((t = t || 5), this.memoized.hasOwnProperty(e))) {
              var n = this.memoized[e].limit;
              if (t <= n || this.memoized[e].suggestions.length < n)
                return this.memoized[e].suggestions.slice(0, t);
            }
            if (this.check(e)) return [];
            for (var i = 0, r = this.replacementTable.length; i < r; i++) {
              var a = this.replacementTable[i];
              if (-1 !== e.indexOf(a[0])) {
                var o = e.replace(a[0], a[1]);
                if (this.check(o)) return [o];
              }
            }
            var s = this;
            function l(e, t) {
              var n,
                i,
                r,
                a,
                o = {},
                l = s.alphabet.length;
              if ("string" == typeof e) {
                var u = e;
                (e = {})[u] = !0;
              }
              for (var u in e)
                for (n = 0, r = u.length + 1; n < r; n++) {
                  var c = [u.substring(0, n), u.substring(n)];
                  if (
                    (c[1] &&
                      ((a = c[0] + c[1].substring(1)),
                      (t && !s.check(a)) ||
                        (a in o ? (o[a] += 1) : (o[a] = 1))),
                    c[1].length > 1 &&
                      c[1][1] !== c[1][0] &&
                      ((a = c[0] + c[1][1] + c[1][0] + c[1].substring(2)),
                      (t && !s.check(a)) ||
                        (a in o ? (o[a] += 1) : (o[a] = 1))),
                    c[1])
                  ) {
                    var m =
                      c[1].substring(0, 1).toUpperCase() ===
                      c[1].substring(0, 1)
                        ? "uppercase"
                        : "lowercase";
                    for (i = 0; i < l; i++) {
                      var d = s.alphabet[i];
                      "uppercase" === m && (d = d.toUpperCase()),
                        d != c[1].substring(0, 1) &&
                          ((a = c[0] + d + c[1].substring(1)),
                          (t && !s.check(a)) ||
                            (a in o ? (o[a] += 1) : (o[a] = 1)));
                    }
                  }
                  if (c[1])
                    for (i = 0; i < l; i++) {
                      (m =
                        c[0].substring(-1).toUpperCase() ===
                          c[0].substring(-1) &&
                        c[1].substring(0, 1).toUpperCase() ===
                          c[1].substring(0, 1)
                          ? "uppercase"
                          : "lowercase"),
                        (d = s.alphabet[i]);
                      "uppercase" === m && (d = d.toUpperCase()),
                        (a = c[0] + d + c[1]),
                        (t && !s.check(a)) ||
                          (a in o ? (o[a] += 1) : (o[a] = 1));
                    }
                }
              return o;
            }
            return (
              (s.alphabet = "abcdefghijklmnopqrstuvwxyz"),
              (this.memoized[e] = {
                suggestions: (function (e) {
                  var n,
                    i = l(e),
                    r = l(i, !0);
                  for (var a in i)
                    s.check(a) && (a in r ? (r[a] += i[a]) : (r[a] = i[a]));
                  var o = [];
                  for (n in r) r.hasOwnProperty(n) && o.push([n, r[n]]);
                  o.sort(function (e, t) {
                    var n = e[1],
                      i = t[1];
                    return n < i ? -1 : n > i ? 1 : t[0].localeCompare(e[0]);
                  }).reverse();
                  var u = [],
                    c = "lowercase";
                  e.toUpperCase() === e
                    ? (c = "uppercase")
                    : e.substr(0, 1).toUpperCase() +
                        e.substr(1).toLowerCase() ===
                        e && (c = "capitalized");
                  var m = t;
                  for (n = 0; n < Math.min(m, o.length); n++)
                    "uppercase" === c
                      ? (o[n][0] = o[n][0].toUpperCase())
                      : "capitalized" === c &&
                        (o[n][0] =
                          o[n][0].substr(0, 1).toUpperCase() +
                          o[n][0].substr(1)),
                      s.hasFlag(o[n][0], "NOSUGGEST") ||
                      -1 != u.indexOf(o[n][0])
                        ? m++
                        : u.push(o[n][0]);
                  return u;
                })(e),
                limit: t,
              }),
              this.memoized[e].suggestions
            );
          },
        };
      })(),
        (e.exports = i);
    },
  },
]);
