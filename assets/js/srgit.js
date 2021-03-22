;
(function() {
    var e;
    (function(t) {
        function s(e, t) {
            var n;
            for (n in e) e.hasOwnProperty(n) && t(e, n)
        }

        function o(e, t) {
            return s(t, function(t, n) {
                e[n] = t[n]
            }), e
        }

        function u(e, t) {
            return s(t, function(t, n) {
                typeof e[n] == 'undefined' && (e[n] = t[n])
            }), e
        }

        function a(e, t, n) {
            var r, s;
            s = (e - t.timestamp) / t.duration;
            for (r in n.current) n.current.hasOwnProperty(r) && t.to.hasOwnProperty(r) && (n.current[r] = f(t.originalState[r], t.to[r], i[t.easing[r]], s));
            return n.current
        }

        function f(e, t, n, r) {
            return e + (t - e) * n(r)
        }

        function l(e, t) {
            return setTimeout(e, 1e3 / t)
        }

        function c(e, t, n, r) {
            var i;
            for (i = 0; i < t[e].length; i++) t[e][i].apply(n, r)
        }

        function h(t, n, r) {
            s(e.prototype.filter, function(e, i) {
                e[i][t] && e[i][t].apply(n, r)
            })
        }

        function p(e, t) {
            var r = e.timestamp + e.duration,
                i = Math.min(n(), r),
                s = i >= r;
            t.isTweening && (s || (t.loopId = l(function() {
                p(e, t)
            }, e.owner.fps)), h('beforeTween', e.owner, [t.current, e.originalState, e.to, e.easing]), a(i, e, t), h('afterTween', e.owner, [t.current, e.originalState, e.to, e.easing]), e.hook.step && c('step', e.hook, e.owner, [t.current]), e.step && e.step.call(t.current, t.current)), (s || !t.isTweening) && e.owner.stop(!0)
        }

        function d(e, t) {
            var n;
            return n = {}, typeof t == 'string' ? s(e, function(e, r) {
                n[r] = t
            }) : s(e, function(e, i) {
                n[i] || (n[i] = t[i] || r)
            }), n
        }
        var n, r = 'linear',
            i;
        n = function() {
            return +(new Date)
        }, e = function(e) {
            return e = e || {}, this._hook = {}, this._tweenParams = {
                owner: this,
                hook: this._hook,
                data: {}
            }, this._state = {}, this._state.current = e.initialState || {}, this.fps = e.fps || 60, this.easing = e.easing || r, this.duration = e.duration || 500, this
        }, e.prototype.tween = function(e, t, r, i, s) {
            var a, f, l;
            if (this._state.isTweening) return;
            return a = this, f = this._tweenParams, l = this._state, this._state.loopId = 0, this._state.pausedAtTime = null, t ? (f.to = t || {}, f.duration = r || this.duration, f.callback = i, f.easing = s || this.easing, l.current = e || {}) : (f.step = e.step, f.callback = e.callback, f.to = e.to || e.target || {}, f.duration = e.duration || this.duration, f.easing = e.easing || this.easing, l.current = e.from || {}), f.timestamp = n(), u(l.current, f.to), u(f.to, l.current), f.easing = d(l.current, f.easing), f.originalState = o({}, l.current), h('tweenCreated', f.owner, [l.current, f.originalState, f.to, f.easing]), l.isTweening = !0, this.resume(), e.start && e.start(), this
        }, e.prototype.to = function(t, n, r, i) {
            return arguments.length === 1 ? 'to' in t ? (t.from = this.get(), this.tween(t)) : this.tween(this.get(), t) : this.tween(this.get(), t, n, r, i), this
        }, e.prototype.get = function() {
            return this._state.current
        }, e.prototype.set = function(e) {
            return this._state.current = e || {}, this
        }, e.prototype.stop = function(e) {
            return clearTimeout(this._state.loopId), this._state.isTweening = !1, e && (o(this._state.current, this._tweenParams.to), h('afterTweenEnd', this, [this._state.current, this._tweenParams.originalState, this._tweenParams.to, this._tweenParams.easing]), this._tweenParams.callback && this._tweenParams.callback.call(this._state.current, this._state.current)), this
        }, e.prototype.pause = function() {
            return clearTimeout(this._state.loopId), this._state.pausedAtTime = n(), this._state.isPaused = !0, this
        }, e.prototype.resume = function() {
            var e;
            return e = this, this._state.isPaused && (this._tweenParams.timestamp += n() - this._state.pausedAtTime), p(e._tweenParams, e._state), this
        }, e.prototype.hookAdd = function(e, t) {
            this._hook.hasOwnProperty(e) || (this._hook[e] = []), this._hook[e].push(t)
        }, e.prototype.hookRemove = function(e, t) {
            var n;
            if (!this._hook.hasOwnProperty(e)) return;
            if (!t) {
                this._hook[e] = [];
                return
            }
            for (n = this._hook[e].length; n >= 0; n++) this._hook[e][n] === t && this._hook[e].splice(n, 1)
        }, e.prototype.filter = {}, e.util = {
            now: n,
            each: s,
            tweenProps: a,
            tweenProp: f,
            applyFilter: h,
            simpleCopy: o,
            weakCopy: u,
            composeEasingObject: d
        }, i = e.prototype.formula = {
            linear: function(e) {
                return e
            }
        }, typeof exports == 'object' ? module.exports = e : typeof define == 'function' && define.amd ? define(function() {
            return e
        }) : typeof t.Tweenable == 'undefined' && (t.Tweenable = e)
    })(this),
    function() {
        e.util.simpleCopy(e.prototype.formula, {})
    }(),
    function() {
        function t(t, n, r, i, s) {
            return e.util.tweenProps(i, {
                originalState: t,
                to: r,
                timestamp: 0,
                duration: 1,
                easing: s
            }, {
                current: n
            })
        }

        function n(t, n) {
            var r = n;
            return typeof n == 'string' && (r = {}, e.util.each(t, function(e, t) {
                r[t] = e[t]
            })), r
        }
        e.util.interpolate = function(n, r, i, s) {
            var o, u, a;
            n && n.from && (r = n.to, i = n.position, s = n.easing, n = n.from), a = new e, a._tweenParams.easing = s || 'linear', o = e.util.simpleCopy({}, n);
            var f = e.util.composeEasingObject(n, a._tweenParams.easing);
            return e.util.applyFilter('tweenCreated', a, [o, n, r, f]), e.util.applyFilter('beforeTween', a, [o, n, r, f]), u = t(n, o, r, i, f), e.util.applyFilter('afterTween', a, [u, n, r, f]), u
        }, e.prototype.interpolate = function(t, n, r) {
            var i;
            return i = e.util.interpolate(this.get(), t, n, r), this.set(i), i
        }
    }(),
    function(e) {
        function a(e, t) {
            var n = e.length,
                r, i = [];
            for (r = 0; r < n; r++) i.push('_' + t + '_' + r);
            return i
        }

        function f(e) {
            var t = e.match(n);
            return t.length === 1 && t.unshift(''), t.join(u)
        }

        function l(t) {
            e.util.each(t, function(e, n) {
                var r = e[n];
                typeof r == 'string' && r.match(o) && (t[n] = c(r))
            })
        }

        function c(e) {
            return v(o, e, h)
        }

        function h(e) {
            var t = p(e);
            return 'rgb(' + t[0] + ',' + t[1] + ',' + t[2] + ')'
        }

        function p(e) {
            return e = e.replace(/#/, ''), e.length === 3 && (e = e.split(''), e = e[0] + e[0] + e[1] + e[1] + e[2] + e[2]), [d(e.substr(0, 2)), d(e.substr(2, 2)), d(e.substr(4, 2))]
        }

        function d(e) {
            return parseInt(e, 16)
        }

        function v(e, t, n) {
            var r = t.match(e),
                i = t.replace(e, u);
            if (r) {
                var s = r.length,
                    o;
                for (var a = 0; a < s; a++) o = r.shift(), i = i.replace(u, n(o))
            }
            return i
        }

        function m(e) {
            return v(i, e, g)
        }

        function g(e) {
            var t = e.match(r),
                n = t.length,
                i = e.match(s)[0];
            for (var o = 0; o < n; o++) i += parseInt(t[o], 10) + ',';
            return i = i.slice(0, -1) + ')', i
        }

        function y(t) {
            var n = {};
            return e.util.each(t, function(e, t) {
                var r = e[t];
                if (typeof r == 'string') {
                    var i = T(r);
                    n[t] = {
                        formatString: f(r),
                        chunkNames: a(i, t)
                    }
                }
            }), n
        }

        function b(t, n) {
            e.util.each(n, function(e, r) {
                var i = t[r],
                    s = T(i),
                    o = s.length;
                for (var u = 0; u < o; u++) t[n[r].chunkNames[u]] = +s[u];
                delete t[r]
            })
        }

        function w(t, n) {
            e.util.each(n, function(e, r) {
                var i = t[r],
                    s = E(t, n[r].chunkNames),
                    o = S(s, n[r].chunkNames);
                i = x(n[r].formatString, o), t[r] = m(i)
            })
        }

        function E(e, t) {
            var n = {},
                r, i = t.length;
            for (var s = 0; s < i; s++) r = t[s], n[r] = e[r], delete e[r];
            return n
        }

        function S(e, t) {
            var n = [],
                r = t.length;
            for (var i = 0; i < r; i++) n.push(e[t[i]]);
            return n
        }

        function x(e, t) {
            var n = e,
                r = t.length;
            for (var i = 0; i < r; i++) n = n.replace(u, +t[i].toFixed(4));
            return n
        }

        function T(e) {
            return e.match(r)
        }

        function N(t, n) {
            e.util.each(n, function(e, n) {
                var r = e[n],
                    i = r.chunkNames,
                    s = i.length,
                    o = t[n].split(' '),
                    u = o[o.length - 1];
                for (var a = 0; a < s; a++) t[i[a]] = o[a] || u;
                delete t[n]
            })
        }

        function C(t, n) {
            e.util.each(n, function(e, n) {
                var r = e[n],
                    i = r.chunkNames,
                    s = i.length,
                    o = '';
                for (var u = 0; u < s; u++) o += ' ' + t[i[u]], delete t[i[u]];
                o = o.substr(1), t[n] = o
            })
        }
        var t, n = /([^-0-9\.]+)/g,
            r = /[0-9.-]+/g,
            i = new RegExp('rgb\(' + r.source + ',s*' + r.source + ',s*' + r.source + '\)', 'g'),
            s = /^.*\(/,
            o = /#([0-9]|[a-f]){3,6}/g,
            u = 'VAL';
        e.prototype.filter.token = {
            tweenCreated: function(e, t, n, r) {
                l(e), l(t), l(n), this._tokenData = y(e)
            },
            beforeTween: function(e, t, n, r) {
                N(r, this._tokenData), b(e, this._tokenData), b(t, this._tokenData), b(n, this._tokenData)
            },
            afterTween: function(e, t, n, r) {
                w(e, this._tokenData), w(t, this._tokenData), w(n, this._tokenData), C(r, this._tokenData)
            }
        }
    }(e)
})();
(function() {
    var undefined, xui, window = this,
        string = new String('string'),
        document = window.document,
        simpleExpr = /^#?([\w-]+)$/,
        idExpr = /^#/,
        tagExpr = /<([\w:]+)/,
        slice = function(e) {
            return [].slice.call(e, 0);
        };
    try {
        var a = slice(document.documentElement.childNodes)[0].nodeType;
    } catch (e) {
        slice = function(e) {
            var ret = [];
            for (var i = 0; e[i]; i++) {
                ret.push(e[i]);
            }
            return ret;
        };
    }
    window.x$ = window.xui = xui = function(q, context) {
        return new xui.fn.find(q, context);
    };
    if (![].forEach) {
        Array.prototype.forEach = function(fn) {
            var len = this.length || 0,
                i = 0,
                that = arguments[1];
            if (typeof fn == 'function') {
                for (; i < len; i++) {
                    fn.call(that, this[i], i, this);
                }
            }
        };
    }
    if (!Array.prototype.indexOf) {
        Array.prototype.indexOf = function(searchElement) {
            if (this == null) {
                throw new TypeError();
            }
            var t = Object(this);
            var len = t.length >>> 0;
            if (len === 0) {
                return -1;
            }
            var n = 0;
            if (arguments.length > 1) {
                n = Number(arguments[1]);
                if (n != n) {
                    n = 0;
                } else {
                    if (n != 0 && n != Infinity && n != -Infinity) {
                        n = (n > 0 || -1) * Math.floor(Math.abs(n));
                    }
                }
            }
            if (n >= len) {
                return -1;
            }
            var k = n >= 0 ? n : Math.max(len - Math.abs(n), 0);
            for (; k < len; k++) {
                if (k in t && t[k] === searchElement) {
                    return k;
                }
            }
            return -1;
        };
    }

    function domstyle(name) {
        return name.replace(/\-[a-z]/g, function(m) {
            return m[1].toUpperCase();
        });
    }

    function cssstyle(name) {
        return name.replace(/[A-Z]/g, function(m) {
            return '-' + m.toLowerCase();
        });
    }
    xui.fn = xui.prototype = {
        extend: function(o) {
            for (var i in o) {
                xui.fn[i] = o[i];
            }
        },
        find: function(q, context) {
            var ele = [],
                tempNode;
            if (!q) {
                return this;
            } else {
                if (context == undefined && this.length) {
                    ele = this.each(function(el) {
                        ele = ele.concat(slice(xui(q, el)));
                    }).reduce(ele);
                } else {
                    context = context || document;
                    if (typeof q == string) {
                        if (simpleExpr.test(q) && context.getElementById && context.getElementsByTagName) {
                            ele = idExpr.test(q) ? [context.getElementById(q.substr(1))] : context.getElementsByTagName(q);
                            if (ele[0] == null) {
                                ele = [];
                            }
                        } else {
                            if (tagExpr.test(q)) {
                                tempNode = document.createElement('i');
                                tempNode.innerHTML = q;
                                slice(tempNode.childNodes).forEach(function(el) {
                                    ele.push(el);
                                });
                            } else {
                                if (typeof context.querySelectorAll == 'function' || typeof context.querySelectorAll == 'object') {
                                    ele = context.querySelectorAll(q);
                                }
                            }
                        }
                        ele = slice(ele);
                    } else {
                        if (q instanceof Array) {
                            ele = q;
                        } else {
                            if (q.nodeName || q === window) {
                                ele = [q];
                            } else {
                                if (q.toString() == '[object NodeList]' || q.toString() == '[object HTMLCollection]' || typeof q.length == 'number') {
                                    ele = slice(q);
                                }
                            }
                        }
                    }
                }
            }
            return this.set(ele);
        },
        set: function(elements) {
            var ret = xui();
            ret.cache = slice(this.length ? this : []);
            ret.length = 0;
            [].push.apply(ret, elements);
            return ret;
        },
        reduce: function(elements, b) {
            var a = [],
                elements = elements || slice(this);
            elements.forEach(function(el) {
                if (a.indexOf(el, 0, b) < 0) {
                    a.push(el);
                }
            });
            return a;
        },
        has: function(q) {
            var list = xui(q);
            return this.filter(function() {
                var that = this;
                var found = null;
                list.each(function(el) {
                    found = (found || el == that);
                });
                return found;
            });
        },
        filter: function(fn) {
            var elements = [];
            return this.each(function(el, i) {
                if (fn.call(el, i)) {
                    elements.push(el);
                }
            }).set(elements);
        },
        each: function(fn) {
            for (var i = 0, len = this.length; i < len; ++i) {
                if (fn.call(this[i], this[i], i, this) === false) {
                    break;
                }
            }
            return this;
        }
    };
    xui.fn.find.prototype = xui.fn;
    xui.extend = xui.fn.extend;
    xui.extend({
        html: function(location, html) {
            clean(this);
            if (arguments.length == 0) {
                var i = [];
                this.each(function(el) {
                    i.push(el.innerHTML);
                });
                return i;
            }
            if (arguments.length == 1 && arguments[0] != 'remove') {
                html = location;
                location = 'inner';
            }
            if (location != 'remove' && html && html.each !== undefined) {
                if (location == 'inner') {
                    var d = document.createElement('p');
                    html.each(function(el) {
                        d.appendChild(el);
                    });
                    this.each(function(el) {
                        el.innerHTML = d.innerHTML;
                    });
                } else {
                    var that = this;
                    html.each(function(el) {
                        that.html(location, el);
                    });
                }
                return this;
            }
            return this.each(function(el) {
                var parent, list, len, i = 0;
                if (location == 'inner') {
                    if (typeof html == string || typeof html == 'number') {
                        el.innerHTML = html;
                        list = el.getElementsByTagName('SCRIPT');
                        len = list.length;
                        for (; i < len; i++) {
                            eval(list[i].text);
                        }
                    } else {
                        el.innerHTML = '';
                        el.appendChild(html);
                    }
                } else {
                    if (location == 'remove') {
                        el.parentNode.removeChild(el);
                    } else {
                        var elArray = ['outer', 'top', 'bottom'],
                            wrappedE = wrapHelper(html, (elArray.indexOf(location) > -1 ? el : el.parentNode)),
                            children = wrappedE.childNodes;
                        if (location == 'outer') {
                            el.parentNode.replaceChild(wrappedE, el);
                        } else {
                            if (location == 'top') {
                                el.insertBefore(wrappedE, el.firstChild);
                            } else {
                                if (location == 'bottom') {
                                    el.insertBefore(wrappedE, null);
                                } else {
                                    if (location == 'before') {
                                        el.parentNode.insertBefore(wrappedE, el);
                                    } else {
                                        if (location == 'after') {
                                            el.parentNode.insertBefore(wrappedE, el.nextSibling);
                                        }
                                    }
                                }
                            }
                        }
                        var parent = wrappedE.parentNode;
                        while (children.length) {
                            parent.insertBefore(children[0], wrappedE);
                        }
                        parent.removeChild(wrappedE);
                    }
                }
            });
        },
        attr: function(attribute, val) {
            if (arguments.length == 2) {
                return this.each(function(el) {
                    if (el.tagName && el.tagName.toLowerCase() == 'input' && attribute == 'value') {
                        el.value = val;
                    } else {
                        if (el.setAttribute) {
                            if (attribute == 'checked' && (val == '' || val == false || typeof val == 'undefined')) {
                                el.removeAttribute(attribute);
                            } else {
                                el.setAttribute(attribute, val);
                            }
                        }
                    }
                });
            } else {
                var attrs = [];
                this.each(function(el) {
                    if (el.tagName && el.tagName.toLowerCase() == 'input' && attribute == 'value') {
                        attrs.push(el.value);
                    } else {
                        if (el.getAttribute && el.getAttribute(attribute)) {
                            attrs.push(el.getAttribute(attribute));
                        }
                    }
                });
                return attrs;
            }
        }
    });
    'inner outer top bottom remove before after'.split(' ').forEach(function(method) {
        xui.fn[method] = function(where) {
            return function(html) {
                return this.html(where, html);
            };
        }(method);
    });

    function getTag(el) {
        return (el.firstChild === null) ? {
            'UL': 'LI',
            'DL': 'DT',
            'TR': 'TD'
        }[el.tagName] || el.tagName : el.firstChild.tagName;
    }

    function wrapHelper(html, el) {
        if (typeof html == string) {
            return wrap(html, getTag(el));
        } else {
            var e = document.createElement('div');
            e.appendChild(html);
            return e;
        }
    }

    function wrap(xhtml, tag) {
        var e = document.createElement('div');
        e.innerHTML = xhtml;
        return e;
    }

    function clean(collection) {
        var ns = /\S/;
        collection.each(function(el) {
            var d = el,
                n = d.firstChild,
                ni = -1,
                nx;
            while (n) {
                nx = n.nextSibling;
                if (n.nodeType == 3 && !ns.test(n.nodeValue)) {
                    d.removeChild(n);
                } else {
                    try {
                        n.nodeIndex = ++ni;
                    } catch (e) {}
                }
                n = nx;
            }
        });
    }
    xui.events = {};
    var cache = {};
    xui.extend({
        on: function(type, fn, details) {
            return this.each(function(el) {
                if (el.attachEvent) {
                    el.attachEvent('on' + type, _createResponder(el, type, fn));
                } else {
                    if (xui.events[type]) {
                        var id = _getEventID(el),
                            responders = _getRespondersForEvent(id, type);
                        details = details || {};
                        details.handler = function(event, data) {
                            xui.fn.fire.call(xui(this), type, data);
                        };
                        if (!responders.length) {
                            xui.events[type].call(el, details);
                        }
                    }
                    el.addEventListener(type, _createResponder(el, type, fn), false);
                }
            });
        },
        un: function(type, fn) {
            return this.each(function(el) {
                var id = _getEventID(el),
                    responders = _getRespondersForEvent(id, type),
                    i = responders.length;
                while (i--) {
                    if (fn === undefined || fn.guid === responders[i].guid) {
                        if (el.detachEvent) {
                            el.detachEvent('on' + type, responders[i]);
                        } else {
                            el.removeEventListener(type, responders[i], false);
                        }
                        removex(cache[id][type], i, 1);
                    }
                }
                if (cache[id][type].length === 0) {
                    delete cache[id][type];
                }
                for (var t in cache[id]) {
                    return;
                }
                delete cache[id];
            });
        },
        fire: function(type, data) {
            return this.each(function(el) {
                if (document.createEventObject) {
                    if (el == document && !el.fireEvent) {
                        el = document.documentElement;
                    }
                    var event = document.createEventObject();
                    event.data = data || {};
                    event.eventName = type;
                    if (ieEvents.indexOf(type) > -1) {
                        el.fireEvent('on' + type, event);
                    } else {
                        var responders = _getRespondersForEvent(_getEventID(el), type);
                        responders.forEach(function(r) {
                            r.call(el);
                        });
                    }
                } else {
                    if (el == document && !el.dispatchEvent) {
                        el = document.documentElement;
                    }
                    var event = document.createEvent('HTMLEvents');
                    event.initEvent(type, true, true);
                    event.data = data || {};
                    event.eventName = type;
                    el.dispatchEvent(event);
                }
            });
        }
    });
    'click load submit blur focus mousedown mouseenter mouseleave mousemove mouseout mouseover mouseup'.split(' ').forEach(function(event) {
        xui.fn[event] = function(action) {
            return function(fn) {
                return fn ? this.on(action, fn) : this.fire(action);
            };
        }(event);
    });
    xui.ready = function(handler) {
        domReady(handler);
    };

    function _getEventID(element) {
        if (element._xuiEventID) {
            return element._xuiEventID;
        }
        return element._xuiEventID = ++_getEventID.id;
    }
    _getEventID.id = 1;

    function _getRespondersForEvent(id, eventName) {
        var c = cache[id] = cache[id] || {};
        return c[eventName] = c[eventName] || [];
    }

    function _createResponder(element, eventName, handler) {
        var id = _getEventID(element),
            r = _getRespondersForEvent(id, eventName);
        var responder = function(event) {
            if (handler.call(element, event) === false) {
                event.preventDefault();
                event.stopPropagation();
            }
        };
        responder.guid = handler.guid = handler.guid || ++_getEventID.id;
        responder.handler = handler;
        r.push(responder);
        return responder;
    }

    function hasClass(el, className) {
        return getClassRegEx(className).test(el.className);
    }
    var rtrim = /^(\s|\u00A0)+|(\s|\u00A0)+$/g;

    function trim(text) {
        return (text || '').replace(rtrim, '');
    }
    xui.extend({
        setStyle: function(prop, val) {
            prop = domstyle(prop);
            return this.each(function(el) {
                el.style[prop] = val;
            });
        },
        getStyle: function(prop, callback) {
            var s = function(el, p) {
                if (el.currentStyle) {
                    return el.currentStyle[p];
                } else {
                    return document.defaultView.getComputedStyle(el, '').getPropertyValue(cssstyle(p));
                }
            };
            if (callback === undefined) {
                var styles = [];
                this.each(function(el) {
                    styles.push(s(el, prop));
                });
                return styles;
            } else {
                return this.each(function(el) {
                    callback(s(el, prop));
                });
            }
        },
        addClass: function(className) {
            var cs = className.split(' ');
            return this.each(function(el) {
                cs.forEach(function(clazz) {
                    if (hasClass(el, clazz) === false) {
                        el.className = trim(el.className + ' ' + clazz);
                    }
                });
            });
        },
        hasClass: function(className, callback) {
            var self = this,
                cs = className.split(' ');
            return this.length && (function() {
                var hasIt = true;
                self.each(function(el) {
                    cs.forEach(function(clazz) {
                        if (hasClass(el, clazz)) {
                            if (callback) {
                                callback(el);
                            }
                        } else {
                            hasIt = false;
                        }
                    });
                });
                return hasIt;
            })();
        },
        removeClass: function(className) {
            if (className === undefined) {
                this.each(function(el) {
                    el.className = '';
                });
            } else {
                var cs = className.split(' ');
                this.each(function(el) {
                    cs.forEach(function(clazz) {
                        el.className = trim(el.className.replace(getClassRegEx(clazz), '$1'));
                    });
                });
            }
            return this;
        },
        css: function(o) {
            for (var prop in o) {
                this.setStyle(prop, o[prop]);
            }
            return this;
        }
    });
    var reClassNameCache = {},
        getClassRegEx = function(className) {
            var re = reClassNameCache[className];
            if (!re) {
                re = new RegExp('(^|\s+)' + className + '(?:\s+|$)');
                reClassNameCache[className] = re;
            }
            return re;
        };
    ! function(context, doc) {
        var fns = [],
            ol, fn, f = false,
            testEl = doc.documentElement,
            hack = testEl.doScroll,
            domContentLoaded = 'DOMContentLoaded',
            addEventListener = 'addEventListener',
            onreadystatechange = 'onreadystatechange',
            loaded = /^loade|c/.test(doc.readyState);

        function flush(i) {
            loaded = 1;
            while (i = fns.shift()) {
                i();
            }
        }
        doc[addEventListener] && doc[addEventListener](domContentLoaded, fn = function() {
            doc.removeEventListener(domContentLoaded, fn, f);
            flush();
        }, f);
        hack && doc.attachEvent(onreadystatechange, (ol = function() {
            if (/^c/.test(doc.readyState)) {
                doc.detachEvent(onreadystatechange, ol);
                flush();
            }
        }));
        context['domReady'] = hack ? function(fn) {
            self != top ? loaded ? fn() : fns.push(fn) : function() {
                try {
                    testEl.doScroll('left');
                } catch (e) {
                    return setTimeout(function() {
                        context['domReady'](fn);
                    }, 50);
                }
                fn();
            }();
        } : function(fn) {
            loaded ? fn() : fns.push(fn);
        };
    }(this, document);
})();;
(function() {
    var isIE = /*@cc_on!@*/ false;
    if (isIE) {
        var ua = navigator.userAgent;
        var re = new RegExp('MSIE ([0-9]{1,}[\.0-9]{0,})');
        if (re.exec(ua) != null) {
            isIE = parseFloat(RegExp.$1);
        }
    }
    if (!!isIE && isIE <= 7) {
        return false;
    }
    var style = '#twitcker-bar,#twitcker-bar *{padding:0;margin:0;font:normal 12px/15px Arial,sans-serif;border:0;opacity:1;text-decoration:none;float:none;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;box-sizing:border-box;-moz-border-radius:0;-webkit-border-radius:0;border-radius:0;}#twitcker-bar{height:30px;width:100%;background-color:rgb(40,40,40);background:-moz-linear-gradient(top,rgb(70,70,70) 0%,rgb(40,40,40) 100%);background:-webkit-linear-gradient(left,rgb(70,70,70) 0%,rgb(40,40,40) 100%);background:-ms-linear-gradient(left,rgb(70,70,70) 0%,rgb(40,40,40) 100%);background:linear-gradient(left,rgb(70,70,70) 0%,rgb(40,40,40) 100%);border-top:1px solid rgba(50,50,50,0.5);border-bottom:1px solid rgba(50,50,50,0.7);position:absolute;top:0;left:0;overflow:hidden;display:none;z-index:9999;-moz-box-shadow:-4px 2px 4px rgba(255,255,255,0.25);-webkit-box-shadow:-4px 2px 4px rgba(255,255,255,0.25);box-shadow:-4px 2px 4px rgba(255,255,255,0.25);}#twitcker-bar.no-border{border:0;}#twitcker-bar a.logo{height:28px;position:absolute;left:0;top:0;z-index:5;background-color:rgb(40,40,40);}#twitcker-bar a.logo img{padding:4px 10px;width:38px;}#twitcker-bar a.logo img:hover{opacity:0.8;}#twitcker-bar a.info{height:28px;position:absolute;background-color:rgb(40,40,40);z-index:5;right:0;padding:6px 10px 0 12px;font:italic bold 12px/15px Georgia,Arial,sans-serif;color:rgb(154,194,213);}#twitcker-bar a.info:hover{opacity:0.9;}#twitcker-bar div.border-left,#twitcker-bar div.border-right{height:28px;width:30px;position:absolute;top:0;z-index:4;}#twitcker-bar div.border-left{background:-moz-linear-gradient(left,rgba(40,40,40,1) 0%,rgba(40,40,40,0) 100%);background:-webkit-linear-gradient(left,rgba(40,40,40,1) 0%,rgba(40,40,40,0) 100%);background:-ms-linear-gradient(left,rgba(40,40,40,1) 0%,rgba(40,40,40,0) 100%);background:linear-gradient(left,rgba(40,40,40,1) 0%,rgba(40,40,40,0) 100%);left:38px;}#twitcker-bar div.border-right{background:-moz-linear-gradient(left,rgba(40,40,40,0) 0%,rgba(40,40,40,1) 100%);background:-webkit-linear-gradient(left,rgba(40,40,40,0) 0%,rgba(40,40,40,1) 100%);background:-ms-linear-gradient(left,rgba(40,40,40,0) 0%,rgba(40,40,40,1) 100%);background:linear-gradient(left,rgba(40,40,40,0) 0%,rgba(40,40,40,1) 100%);right:26px;}#twitcker-bar div.box{display:inline-block;background-color:rgb(114,154,173);background:-moz-linear-gradient(top,rgb(154,194,213) 0%,rgb(114,154,173) 100%);background:-webkit-linear-gradient(top,rgb(154,194,213) 0%,rgb(114,154,173) 100%);background:-ms-linear-gradient(top,rgb(154,194,213) 0%,rgb(114,154,173) 100%);background:linear-gradient(top,rgb(154,194,213) 0%,rgb(114,154,173) 100%);margin:3px 11px 0 0;width:auto;float:none;position:relative;z-index:2;-moz-border-radius:2px;-webkit-border-radius:2px;border-radius:2px;-moz-box-shadow:inset 0 1px 0 rgba(255,255,255,0.3);-webkit-box-shadow:inset 0 1px 0 rgba(255,255,255,0.3);box-shadow:inset 0 1px 0 rgba(255,255,255,0.3);}#twitcker-bar div.box a{color:#0f191e;padding:3px 8px 2px;font:normal 12px/15px Arial,sans-serif;white-space:nowrap;text-shadow:0 1px 1px #aec2cc;text-decoration:none;display:inline-block;}#twitcker-bar div.box a:hover{text-decoration:none;}#twitcker-marquee{position:relative;left:100%;z-index:2;will-change:left,transform;}#twitcker-toggler{position:absolute;top:29px;right:16px;cursor:pointer;font:normal 12px/18px Helvetica,Arial,sans-serif;color:rgb(255,255,255);background-color:rgb(40,40,40);padding:0 5px 1px 5px;margin:0;-moz-border-radius:0 0 4px 4px;-webkit-border-radius:0 0 4px 4px;border-radius:0 0 4px 4px;}#twitcker-offset{height:0;display:block;}';
    if (navigator.appVersion.indexOf('MSIE') != -1) {
        style += '#twitcker-marquee{padding-top:2px;}#twitcker-marquee div.box a{padding-bottom:0px;}';
    }
    var css = document.createElement('style');
    css.setAttribute('type', 'text/css');
    if (css.styleSheet) {
        css.styleSheet.cssText = style;
    } else {
        css.appendChild(document.createTextNode(style));
    }(document.getElementsByTagName('head')[0]).appendChild(css);
    x$.ready(function() {
        initTwitcker();
    });
})();

function initTwitcker() {
    var tweener = new Tweenable();
    var twitckerElement = x$('<div id="twitcker-bar"><a href="https://twitter.com/srgit" title="Open account of »srgit« on Twitter" class="logo"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADYAAAA2CAMAAAC7m5rvAAAApVBMVEUAAAD///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////+4/eNVAAAANnRSTlMA/PSM78gIBfjpFHRSMwzqrqNtV04/zr21qpyWkYVoYl9JNygjHBjc1MO5p2NELeKhf3x4EGcWYLHsAAABmUlEQVRIx+3Ux3LCMABF0Sf3bnChhlBC7y36/0/LjIOwsSUj7zkbFpqLGgIfjZnT4YpQq/M1w5PxtvJWlNn4yBxbafbpzoRTDWgBiYD7pEv1/ym18EdQteirlk4otY7ZYELpid+plMfNB22fU/mEV11hpmMA2UoUr5r1OJGlfrdtewlgSzPD8rEuCOVTsiNk+16XFjoWVdPXjZOhU8y++JWWPm608EWjZZ71udV6/hgOlOKWdwezNruJVhMOJtk1DrnZBYwTVjew2ak90WUzU0KlfbMoDjCR7xKW6couUqW7I8vatAkj/zU0sAKztBpkZzwNGmTjPFto0hVxkPOksy6KItnsFy8SW6rSAry6j0KJTC1V3jSNu28rawEmfzvNJ8NckdmZg7KbRLZHVf9ttQWH+e4hhAtw7bXaU0whELg6qf8zEJaJYMpRXWVGgou41FVJhx+RmhUuozXlsw+ocAwYjh+r4tPoO6j62dJapxh8B10c2a4BodmZf4D63kCtIG6X3rfSdeeQMfeug96m09F77dHEN/HRyB/blCNQTHkbkQAAAABJRU5ErkJggg==" alt="Twitter logo" width="38" height="26" /></a><div class="border-left"></div><div class="border-right"></div><a href="https://twitcker.com/?ref=info&amp;domain=' + document.domain + '" title="Click here to get more information about this Ticker" class="info">i</a><div id="twitcker-marquee"><div class="box"><a href="https://twitter.com/srgit/status/792002896405499905">SRGIT started shopifytemplate !!</a></div><div class="box"><a href="https://twitter.com/srgit/status/747419137312382976">srgit started sale CMS template...https://t.co/r5ixtWoIQB https://t.co/NxuwzY03FT</a></div><div class="box"><a href="https://twitter.com/srgit/status/571200064745385984">Web Design Services - http://t.co/M9AvJxb6Fk</a></div><div class="box"><a href="https://twitter.com/srgit/status/568278099693076480">Photo: Dinner on wheel its e-commerce website, payment via paypal. http://t.co/RYbGxU04Zf</a></div><div class="box"><a href="https://twitter.com/srgit/status/568276079762399232">New design launch - SRGIT launch the new design, now it&rsquo;s more morden and more clear. http://t.co/uCaO07srNG</a></div><div class="box"><a href="https://twitter.com/srgit/status/367237563892768768">SRGIT is a leading Indian based Offshore Outsourcing Software Development Companyis highly qualified and experienced team with varied doma</a></div><div class="box"><a href="https://twitter.com/srgit/status/353448758979207169">@wineesweetHi</a></div><div class="box"><a href="https://twitter.com/srgit/status/248055381719384064">Launch New Website http://t.co/PGpfXePm</a></div><div class="box"><a href="https://twitter.com/srgit/status/223377281643593728">#29 Happiness-The Key to Living a Happy Life Today http://t.co/t3IDoSKj</a></div><div class="box"><a href="https://twitter.com/srgit/status/223377165872410624">#31 Happiness &ndash;Three Steps Towards Simplifying Our Lives http://t.co/ufvVBj7z</a></div><div class="box"><a href="https://twitter.com/srgit/status/132128206185705472">RT @coachmeRefs: @MCuss as a sports coach why not join up at coachme.co.uk and follow @coachmeofficial the best online network for coach ...</a></div><div class="box"><a href="https://twitter.com/srgit/status/131367387579678720">Masterstepz Rockin his Classic LinxsMan tee http://t.co/jFqGRLVX via @officialcoachme</a></div><div class="box"><a href="https://twitter.com/srgit/status/112513385576415232">he laser liposuction technique uses lasers to melt fat prior to its removal from the body. http://t.co/feS81qT</a></div><div class="box"><a href="https://twitter.com/srgit/status/112513277023629312">At JW MedSpa, we have several types of pricing available to our patients. http://t.co/feS81qT</a></div><div class="box"><a href="https://twitter.com/srgit/status/112513202725732352">Dr Puff http://t.co/4cNfUgV</a></div><div class="box"><a href="https://twitter.com/srgit/status/112513176955912192">what is happinesshttp://t.co/4cNfUgV</a></div><div class="box"><a href="https://twitter.com/srgit/status/112513131657437184">Can you control your happiness? http://t.co/4cNfUgV</a></div><div class="box"><a href="https://twitter.com/srgit/status/112513060467511296">http://t.co/feS81qT A BOTOX&reg;Cosmetic treatment is a simple</a></div><div class="box"><a href="https://twitter.com/srgit/status/112512929311637504">Analyse du site http://t.co/2jKs1Vv</a></div><div class="box"><a href="https://twitter.com/srgit/status/112512863893061632">Search Engine Optimization (SEO) est le processus http://t.co/2jKs1Vv</a></div></div></div>');
    var twitckerTogglerElement = x$('<div id="twitcker-toggler">Hide</div>');
    var twitckerOffsetElement = x$('<div id="twitcker-offset"></div>');
    x$('.carousel').top(twitckerElement);
    twitckerElement.after(twitckerTogglerElement);
    twitckerTogglerElement.after(twitckerOffsetElement);
    if (navigator.language) {
        var userLanguage = navigator.language;
    } else if (navigator.browserLanguage) {
        var userLanguage = navigator.browserLanguage;
    } else {
        var userLanguage = 'en-EN';
    }
    userLanguage = userLanguage.split('-')[0];
    var tweetedLanguages = {
        "en": {
            "tickerTweeted": "Tweeted on ",
            "tickerTweetedShort": "Tweeted %s ago",
            "timeSecond": "second",
            "timeSeconds": "seconds",
            "timeMinute": "minute",
            "timeMinutes": "minutes",
            "timeHour": "hour",
            "timeHours": "hours"
        },
        "de": {
            "tickerTweeted": "Geschrieben am ",
            "tickerTweetedShort": "Geschrieben vor %s",
            "timeSecond": "Sekunde",
            "timeSeconds": "Sekunden",
            "timeMinute": "Minute",
            "timeMinutes": "Minuten",
            "timeHour": "Stunde",
            "timeHours": "Stunden"
        },
        "es": {
            "tickerTweeted": "Publicado el ",
            "tickerTweetedShort": "Escribi\u00f3 %s",
            "timeSecond": "segundo",
            "timeSeconds": "segundos",
            "timeMinute": "minuto",
            "timeMinutes": "minutos",
            "timeHour": "hora",
            "timeHours": "horas"
        },
        "fr": {
            "tickerTweeted": "Post\u00e9 le ",
            "tickerTweetedShort": "A \u00e9crit %s",
            "timeSecond": "seconde",
            "timeSeconds": "secondes",
            "timeMinute": "minute",
            "timeMinutes": "minutes",
            "timeHour": "heure",
            "timeHours": "heures"
        },
        "pt": {
            "tickerTweeted": "Postado em ",
            "tickerTweetedShort": "Escreveu %s",
            "timeSecond": "segundo",
            "timeSeconds": "segundos",
            "timeMinute": "minuto",
            "timeMinutes": "minutos",
            "timeHour": "hora",
            "timeHours": "horas"
        },
        "tr": {
            "tickerTweeted": "Tarihinde g\u00f6nderildi ",
            "tickerTweetedShort": "%s \u00f6nce",
            "timeSecond": "saniye",
            "timeSeconds": "saniye",
            "timeMinute": "dakika",
            "timeMinutes": "dakika",
            "timeHour": "saat",
            "timeHours": "saat"
        },
        "jp": {
            "tickerTweeted": "\u306b\u63b2\u793a\u3055\u308c\u308b ",
            "tickerTweetedShort": "",
            "timeSecond": "",
            "timeSeconds": "",
            "timeMinute": "",
            "timeMinutes": "",
            "timeHour": "",
            "timeHours": ""
        },
        "it": {
            "tickerTweeted": "Inviato il ",
            "tickerTweetedShort": "Scritto prima %s",
            "timeSecond": "secondo",
            "timeSeconds": "secondi",
            "timeMinute": "minuto",
            "timeMinutes": "minuti",
            "timeHour": "ora",
            "timeHours": "ore"
        },
        "pl": {
            "tickerTweeted": "Tweet z ",
            "tickerTweetedShort": "Napisany napisany przed %s",
            "timeSecond": "sekunda",
            "timeSeconds": "sekundy",
            "timeMinute": "minuta",
            "timeMinutes": "minuty",
            "timeHour": "godzina",
            "timeHours": "godzin"
        },
        "ur": {
            "tickerTweeted": "\u0627\u0633 \u062a\u0627\u0631\u06cc\u062e \u067e\u0631 \u0679\u0648\u06cc\u0679 \u06c1\u0648\u0627",
            "tickerTweetedShort": "\u062f\u0648\u0633\u0631\u06d2 \u0646\u06d2 \u06a9\u06c1\u0627 %s",
            "timeSecond": "\u0627\u0648\u0631",
            "timeSeconds": "\u0627\u0648\u0631",
            "timeMinute": "\u0645\u0646\u0679",
            "timeMinutes": "\u0645\u0646\u0679",
            "timeHour": "\u06af\u06be\u0646\u0679\u06c1",
            "timeHours": "\u06af\u06be\u0646\u0679\u06d2"
        },
        "hu": {
            "tickerTweeted": "Twittelve ",
            "tickerTweetedShort": "\u00cdrott %s",
            "timeSecond": "m\u00e1sodperc",
            "timeSeconds": "m\u00e1sodperc",
            "timeMinute": "perc",
            "timeMinutes": "perc",
            "timeHour": "\u00f3ra",
            "timeHours": "\u00f3ra"
        },
        "nl": {
            "tickerTweeted": "Getweet op ",
            "tickerTweetedShort": "Geschreven voordat %s",
            "timeSecond": "seconde",
            "timeSeconds": "seconden",
            "timeMinute": "minuut",
            "timeMinutes": "minuten",
            "timeHour": "uur",
            "timeHours": "uur"
        },
        "ru": {
            "tickerTweeted": "\u041e\u043f\u0443\u0431\u043b\u0438\u043a\u043e\u0432\u0430\u043d\u043e ",
            "tickerTweetedShort": "\u043f\u0438\u0441\u044c\u043c\u0435\u043d\u043d\u044b\u0439 \u043f\u0435\u0440\u0435\u0434 %s",
            "timeSecond": "\u0441\u0435\u043a\u0443\u043d\u0434\u044b",
            "timeSeconds": "\u0441\u0435\u043a\u0443\u043d\u0434\u044b",
            "timeMinute": "\u043c\u0438\u043d\u0443\u0442\u0430",
            "timeMinutes": "\u043c\u0438\u043d\u0443\u0442\u044b",
            "timeHour": "\u0447\u0430\u0441",
            "timeHours": "\u0447\u0430\u0441\u0430"
        },
        "af": {
            "tickerTweeted": "Ge-tweet op ",
            "tickerTweetedShort": "%s gelede ge-tweet",
            "timeSecond": "sekonde",
            "timeSeconds": "sekondes",
            "timeMinute": "minuut",
            "timeMinutes": "minute",
            "timeHour": "uur",
            "timeHours": "ure"
        }
    };
    if (!tweetedLanguages[userLanguage]) {
        userLanguage = 'en';
    }
    var tweetedOn = tweetedLanguages[userLanguage]['tickerTweeted'];
    var tweetedOnShort = tweetedLanguages[userLanguage]['tickerTweetedShort'];
    var timeSecond = tweetedLanguages[userLanguage]['timeSecond'];
    var timeSeconds = tweetedLanguages[userLanguage]['timeSeconds'];
    var timeMinute = tweetedLanguages[userLanguage]['timeMinute'];
    var timeMinutes = tweetedLanguages[userLanguage]['timeMinutes'];
    var timeHour = tweetedLanguages[userLanguage]['timeHour'];
    var timeHours = tweetedLanguages[userLanguage]['timeHours'];
    var tweetDateTimes = [1477663179000, 1467033583000, 1425019682000, 1424323031000, 1424322550000, 1376391232000, 1373103725000, 1347975986000, 1342092268000, 1342092241000, 1320336793000, 1320155400000, 1315660256000, 1315660230000, 1315660212000, 1315660206000, 1315660195000, 1315660178000, 1315660147000, 1315660131000];
    var dateNow = (new Date()).getTime();
    twitckerElement.setStyle('display', 'block');
    twitckerMarqueesWidth = 0;
    x$('#twitcker-marquee .box').each(function(element, index, xui) {
        twitckerMarqueesWidth += element.clientWidth + 12;
        var tweetDateTime = new Date(tweetDateTimes[index]);
        var tweetDateDiff = Math.ceil(Math.abs(dateNow - tweetDateTime.getTime()) / 1000);
        if (tweetDateDiff < 86400) {
            if (tweetDateDiff == 1) {
                var timeUnit = timeSecond;
            } else if (tweetDateDiff < 60) {
                var timeUnit = timeSeconds;
            } else if (tweetDateDiff >= 60 && tweetDateDiff < 120) {
                var timeUnit = timeMinute;
                tweetDateDiff = Math.floor(tweetDateDiff / 60);
            } else if (tweetDateDiff >= 120 && tweetDateDiff < 3600) {
                var timeUnit = timeMinutes;
                tweetDateDiff = Math.floor(tweetDateDiff / 60);
            } else if (tweetDateDiff >= 3600 && tweetDateDiff < 7200) {
                var timeUnit = timeHour;
                tweetDateDiff = Math.floor(tweetDateDiff / 3600);
            } else {
                var timeUnit = timeHours;
                tweetDateDiff = Math.floor(tweetDateDiff / 3600);
            }
            var tweetDateTimeTitle = tweetedOnShort.replace('%s', tweetDateDiff + ' ' + timeUnit);
        } else {
            var localeDateString = tweetDateTime.toLocaleDateString();
            var localeTimeString = tweetDateTime.toLocaleTimeString().split(':');
            localeTimeString.pop();
            var tweetDateTimeTitle = tweetedOn + localeDateString + ', ' + localeTimeString.join(':');
        }
        element.firstChild.title = tweetDateTimeTitle;
    });
    var twitckerMarqueeElement = x$('#twitcker-marquee');
    twitckerMarqueeElement.setStyle('width', twitckerMarqueesWidth + 'px');
    var twitckerElementIsHidden = function() {
        return (twitckerOffsetElement.getStyle('height') == '0px');
    };
    var twitckerElementToggler = function(action, duration, callback) {
        if (callback == null) {
            callback = function() {};
        }
        if (duration == null) {
            duration = 600;
        }
        var hide = (action == 'show') ? false : true;
        var heightMax = ('body' == 'body') ? 30 : 29;
        tweener.tween({
            from: {
                'height': ((hide) ? heightMax : 0)
            },
            to: {
                'height': ((!hide) ? heightMax : 0)
            },
            'duration': duration,
            'step': function() {
                twitckerTogglerElement.setStyle('top', this.height + 'px');
                twitckerOffsetElement.setStyle('height', this.height + 'px');
                twitckerElement.setStyle('height', this.height + 'px');
            },
            callback: function() {
                if (twitckerElementIsHidden()) {
                    twitckerElement.addClass('no-border');
                    twitckerTogglerElement.html('inner', 'Show');
                } else {
                    twitckerElement.removeClass('no-border');
                    twitckerTogglerElement.html('inner', 'Hide');
                }
                callback();
            }
        });
    };

    function setCookie(cookieName, value) {
        var date = new Date();
        date.setTime(date.getTime() + 2678400000);
        document.cookie = cookieName + '=' + value + ';expires=' + date.toGMTString() + ';path=/';
    }

    function readCookie(cookieName) {
        var name = cookieName + '=';
        var cookies = document.cookie.split(';');
        for (var j = 0; j < cookies.length; ++j) {
            var c = cookies[j];
            while (c.charAt(0) == ' ') {
                c = c.substring(1, c.length)
            };
            if (c.indexOf(name) == 0) {
                return c.substring(name.length, c.length)
            };
        }
        return null;
    }
    twitckerTogglerElement.on('click', function() {
        if (twitckerElementIsHidden()) {
            twitckerElementToggler('show');
            setCookie('twitckerHide', 'no');
        } else {
            twitckerElementToggler('hide');
            setCookie('twitckerHide', 'yes');
        }
    });
    if (readCookie('twitckerHide') == 'yes') {
        twitckerElementToggler('hide', 1);
    } else {
        twitckerElementToggler('show');
    }
    twitckerMarqueeElement.on('mouseover', function() {
        twitckerElementAnimator('pause');
    });
    twitckerMarqueeElement.on('mouseout', function() {
        twitckerElementAnimator('resume');
    });
    var tweenerMarquee = new Tweenable();
    if (twitckerMarqueeElement[0]) {
        var fromLeft = (twitckerMarqueeElement[0].offsetLeft * 0.05) + 50;
    } else {
        var fromLeft = 50;
    }
    var fromLeftCopy = fromLeft;
    var fromLeftCookie = parseInt(readCookie('twitckerState'));
    var fromLeftCookieIsAN = !isNaN(fromLeftCookie);
    var toLeft = -parseInt(twitckerMarqueeElement.getStyle('width'));
    if (fromLeftCookieIsAN) {
        fromLeft = fromLeftCookie;
    }
    var browserSupportsTransform = (function() {
        var prefixes = 'transform WebkitTransform MozTransform OTransform msTransform'.split(' ');
        var div = document.createElement('div');
        for (var i = 0; i < prefixes.length; i++) {
            if (div && div.style[prefixes[i]] !== undefined) {
                return prefixes[i];
            }
        }
        return false;
    })();
    var seconds = parseInt(readCookie('twitckerSeconds')) || 0;
    window.setInterval(function() {
        seconds += 4;
        if (browserSupportsTransform) {
            setCookie('twitckerState', parseInt(twitckerMarqueeElement.getStyle('transform')[0].split(',')[4]));
        } else {
            setCookie('twitckerState', parseInt(twitckerMarqueeElement.getStyle('left')));
        }
        setCookie('twitckerSeconds', seconds);
    }, 4000);
    var speedCopy = 135000;
    var speed = speedCopy - (seconds * 1000);
    var twitckerElementAnimator = function(action) {
        if (action == 'pause') {
            tweenerMarquee.pause();
        } else if (action == 'resume') {
            tweenerMarquee.resume();
        } else {
            if (fromLeftCookieIsAN && action == 'callback') {
                seconds = 0;
                speed = speedCopy;
                fromLeft = fromLeftCopy;
                setCookie('twitckerSeconds', 0);
            }
            tweenerMarquee._state.isPaused = false;
            tweenerMarquee.tween({
                from: {
                    'left': fromLeft
                },
                to: {
                    'left': toLeft
                },
                'duration': speed,
                'step': function() {
                    if (browserSupportsTransform) {
                        twitckerMarqueeElement.setStyle('transform', 'translateX(' + this.left + 'px)');
                    } else {
                        twitckerMarqueeElement.setStyle('left', this.left + 'px');
                    }
                },
                callback: function() {
                    new twitckerElementAnimator('callback');
                }
            });
        }
    };
    twitckerElementAnimator('');
}