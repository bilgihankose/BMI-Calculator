(function() {
	var m, aa = function(a) {
			var b = 0;
			return function() {
				return b < a.length ? {
					done: !1,
					value: a[b++]
				} : {
					done: !0
				}
			}
		},
		da = "function" == typeof Object.defineProperties ? Object.defineProperty : function(a, b, c) {
			if (a == Array.prototype || a == Object.prototype) return a;
			a[b] = c.value;
			return a
		},
		ea = function(a) {
			a = ["object" == typeof globalThis && globalThis, a, "object" == typeof window && window, "object" == typeof self && self, "object" == typeof global && global];
			for (var b = 0; b < a.length; ++b) {
				var c = a[b];
				if (c && c.Math == Math) return c
			}
			throw Error("a");
		},
		ha =
		ea(this),
		r = function(a, b) {
			if (b) a: {
				var c = ha;a = a.split(".");
				for (var d = 0; d < a.length - 1; d++) {
					var e = a[d];
					if (!(e in c)) break a;
					c = c[e]
				}
				a = a[a.length - 1];d = c[a];b = b(d);b != d && null != b && da(c, a, {
					configurable: !0,
					writable: !0,
					value: b
				})
			}
		};
	r("Symbol", function(a) {
		if (a) return a;
		var b = function(f, g) {
			this.Ge = f;
			da(this, "description", {
				configurable: !0,
				writable: !0,
				value: g
			})
		};
		b.prototype.toString = function() {
			return this.Ge
		};
		var c = "jscomp_symbol_" + (1E9 * Math.random() >>> 0) + "_",
			d = 0,
			e = function(f) {
				if (this instanceof e) throw new TypeError("b");
				return new b(c + (f || "") + "_" + d++, f)
			};
		return e
	});
	r("Symbol.iterator", function(a) {
		if (a) return a;
		a = Symbol("Symbol.iterator");
		for (var b = "Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(" "), c = 0; c < b.length; c++) {
			var d = ha[b[c]];
			"function" === typeof d && "function" != typeof d.prototype[a] && da(d.prototype, a, {
				configurable: !0,
				writable: !0,
				value: function() {
					return ia(aa(this))
				}
			})
		}
		return a
	});
	r("Symbol.asyncIterator", function(a) {
		return a ? a : Symbol("Symbol.asyncIterator")
	});
	var ia = function(a) {
			a = {
				next: a
			};
			a[Symbol.iterator] = function() {
				return this
			};
			return a
		},
		ka = function(a) {
			return a.raw = a
		},
		la = function(a, b) {
			a.raw = b;
			return a
		},
		v = function(a) {
			var b = "undefined" != typeof Symbol && Symbol.iterator && a[Symbol.iterator];
			if (b) return b.call(a);
			if ("number" == typeof a.length) return {
				next: aa(a)
			};
			throw Error("c`" + String(a));
		},
		ma = function(a) {
			if (!(a instanceof Array)) {
				a = v(a);
				for (var b, c = []; !(b = a.next()).done;) c.push(b.value);
				a = c
			}
			return a
		},
		na = function(a, b) {
			return Object.prototype.hasOwnProperty.call(a,
				b)
		},
		oa = "function" == typeof Object.assign ? Object.assign : function(a, b) {
			for (var c = 1; c < arguments.length; c++) {
				var d = arguments[c];
				if (d)
					for (var e in d) na(d, e) && (a[e] = d[e])
			}
			return a
		};
	r("Object.assign", function(a) {
		return a || oa
	});
	var pa = "function" == typeof Object.create ? Object.create : function(a) {
			var b = function() {};
			b.prototype = a;
			return new b
		},
		qa;
	if ("function" == typeof Object.setPrototypeOf) qa = Object.setPrototypeOf;
	else {
		var ra;
		a: {
			var sa = {
					a: !0
				},
				ta = {};
			try {
				ta.__proto__ = sa;
				ra = ta.a;
				break a
			} catch (a) {}
			ra = !1
		}
		qa = ra ? function(a, b) {
			a.__proto__ = b;
			if (a.__proto__ !== b) throw new TypeError("d`" + a);
			return a
		} : null
	}
	var ua = qa,
		x = function(a, b) {
			a.prototype = pa(b.prototype);
			a.prototype.constructor = a;
			if (ua) ua(a, b);
			else
				for (var c in b)
					if ("prototype" != c)
						if (Object.defineProperties) {
							var d = Object.getOwnPropertyDescriptor(b, c);
							d && Object.defineProperty(a, c, d)
						} else a[c] = b[c];
			a.Mh = b.prototype
		},
		va = function() {
			this.ub = !1;
			this.Ia = null;
			this.td = void 0;
			this.fa = 1;
			this.wa = this.Ka = 0;
			this.Jc = this.ca = null
		},
		wa = function(a) {
			if (a.ub) throw new TypeError("f");
			a.ub = !0
		};
	va.prototype.vb = function(a) {
		this.td = a
	};
	va.prototype.Cb = function(a) {
		this.ca = {
			Ld: a,
			ae: !0
		};
		this.fa = this.Ka || this.wa
	};
	va.prototype.return = function(a) {
		this.ca = {
			return: a
		};
		this.fa = this.wa
	};
	va.prototype.Qa = function(a) {
		this.fa = a
	};
	var xa = function(a, b, c) {
			c = a.Jc.splice(c || 0)[0];
			(c = a.ca = a.ca || c) ? c.ae ? a.fa = a.Ka || a.wa : void 0 != c.Qa && a.wa < c.Qa ? (a.fa = c.Qa, a.ca = null) : a.fa = a.wa: a.fa = b
		},
		ya = function(a) {
			this.i = new va;
			this.gh = a
		};
	ya.prototype.vb = function(a) {
		wa(this.i);
		if (this.i.Ia) return za(this, this.i.Ia.next, a, this.i.vb);
		this.i.vb(a);
		return Aa(this)
	};
	var Ba = function(a, b) {
		wa(a.i);
		var c = a.i.Ia;
		if (c) return za(a, "return" in c ? c["return"] : function(d) {
			return {
				value: d,
				done: !0
			}
		}, b, a.i.return);
		a.i.return(b);
		return Aa(a)
	};
	ya.prototype.Cb = function(a) {
		wa(this.i);
		if (this.i.Ia) return za(this, this.i.Ia["throw"], a, this.i.vb);
		this.i.Cb(a);
		return Aa(this)
	};
	var za = function(a, b, c, d) {
			try {
				var e = b.call(a.i.Ia, c);
				if (!(e instanceof Object)) throw new TypeError("e`" + e);
				if (!e.done) return a.i.ub = !1, e;
				var f = e.value
			} catch (g) {
				return a.i.Ia = null, a.i.Cb(g), Aa(a)
			}
			a.i.Ia = null;
			d.call(a.i, f);
			return Aa(a)
		},
		Aa = function(a) {
			for (; a.i.fa;) try {
				var b = a.gh(a.i);
				if (b) return a.i.ub = !1, {
					value: b.value,
					done: !1
				}
			} catch (c) {
				a.i.td = void 0, a.i.Cb(c)
			}
			a.i.ub = !1;
			if (a.i.ca) {
				b = a.i.ca;
				a.i.ca = null;
				if (b.ae) throw b.Ld;
				return {
					value: b.return,
					done: !0
				}
			}
			return {
				value: void 0,
				done: !0
			}
		},
		Ca = function(a) {
			this.next =
				function(b) {
					return a.vb(b)
				};
			this.throw = function(b) {
				return a.Cb(b)
			};
			this.return = function(b) {
				return Ba(a, b)
			};
			this[Symbol.iterator] = function() {
				return this
			}
		},
		Da = function(a) {
			function b(d) {
				return a.next(d)
			}

			function c(d) {
				return a.throw(d)
			}
			return new Promise(function(d, e) {
				function f(g) {
					g.done ? d(g.value) : Promise.resolve(g.value).then(b, c).then(f, e)
				}
				f(a.next())
			})
		},
		Ea = function(a) {
			this[Symbol.asyncIterator] = function() {
				return this
			};
			this[Symbol.iterator] = function() {
				return a
			};
			this.next = function(b) {
				return Promise.resolve(a.next(b))
			};
			void 0 !== a["throw"] && (this["throw"] = function(b) {
				return Promise.resolve(a["throw"](b))
			});
			void 0 !== a["return"] && (this["return"] = function(b) {
				return Promise.resolve(a["return"](b))
			})
		},
		y = function() {
			for (var a = Number(this), b = [], c = a; c < arguments.length; c++) b[c - a] = arguments[c];
			return b
		};
	r("Promise", function(a) {
		function b() {
			this.Ea = null
		}

		function c(g) {
			return g instanceof e ? g : new e(function(h) {
				h(g)
			})
		}
		if (a) return a;
		b.prototype.Ad = function(g) {
			if (null == this.Ea) {
				this.Ea = [];
				var h = this;
				this.Bd(function() {
					h.wf()
				})
			}
			this.Ea.push(g)
		};
		var d = ha.setTimeout;
		b.prototype.Bd = function(g) {
			d(g, 0)
		};
		b.prototype.wf = function() {
			for (; this.Ea && this.Ea.length;) {
				var g = this.Ea;
				this.Ea = [];
				for (var h = 0; h < g.length; ++h) {
					var k = g[h];
					g[h] = null;
					try {
						k()
					} catch (l) {
						this.Qe(l)
					}
				}
			}
			this.Ea = null
		};
		b.prototype.Qe = function(g) {
			this.Bd(function() {
				throw g;
			})
		};
		var e = function(g) {
			this.gb = 0;
			this.zb = void 0;
			this.ab = [];
			this.ce = !1;
			var h = this.Fc();
			try {
				g(h.resolve, h.reject)
			} catch (k) {
				h.reject(k)
			}
		};
		e.prototype.Fc = function() {
			function g(l) {
				return function(n) {
					k || (k = !0, l.call(h, n))
				}
			}
			var h = this,
				k = !1;
			return {
				resolve: g(this.nh),
				reject: g(this.fd)
			}
		};
		e.prototype.nh = function(g) {
			if (g === this) this.fd(new TypeError("g"));
			else if (g instanceof e) this.Eh(g);
			else {
				a: switch (typeof g) {
					case "object":
						var h = null != g;
						break a;
					case "function":
						h = !0;
						break a;
					default:
						h = !1
				}
				h ? this.mh(g) : this.Pd(g)
			}
		};
		e.prototype.mh = function(g) {
			var h = void 0;
			try {
				h = g.then
			} catch (k) {
				this.fd(k);
				return
			}
			"function" == typeof h ? this.Fh(h, g) : this.Pd(g)
		};
		e.prototype.fd = function(g) {
			this.xe(2, g)
		};
		e.prototype.Pd = function(g) {
			this.xe(1, g)
		};
		e.prototype.xe = function(g, h) {
			if (0 != this.gb) throw Error("h`" + g + "`" + h + "`" + this.gb);
			this.gb = g;
			this.zb = h;
			2 === this.gb && this.sh();
			this.xf()
		};
		e.prototype.sh = function() {
			var g = this;
			d(function() {
				if (g.Cg()) {
					var h = ha.console;
					"undefined" !== typeof h && h.error(g.zb)
				}
			}, 1)
		};
		e.prototype.Cg = function() {
			if (this.ce) return !1;
			var g = ha.CustomEvent,
				h = ha.Event,
				k = ha.dispatchEvent;
			if ("undefined" === typeof k) return !0;
			"function" === typeof g ? g = new g("unhandledrejection", {
				cancelable: !0
			}) : "function" === typeof h ? g = new h("unhandledrejection", {
				cancelable: !0
			}) : (g = ha.document.createEvent("CustomEvent"), g.initCustomEvent("unhandledrejection", !1, !0, g));
			g.promise = this;
			g.reason = this.zb;
			return k(g)
		};
		e.prototype.xf = function() {
			if (null != this.ab) {
				for (var g = 0; g < this.ab.length; ++g) f.Ad(this.ab[g]);
				this.ab = null
			}
		};
		var f = new b;
		e.prototype.Eh = function(g) {
			var h =
				this.Fc();
			g.Ib(h.resolve, h.reject)
		};
		e.prototype.Fh = function(g, h) {
			var k = this.Fc();
			try {
				g.call(h, k.resolve, k.reject)
			} catch (l) {
				k.reject(l)
			}
		};
		e.prototype.then = function(g, h) {
			function k(p, t) {
				return "function" == typeof p ? function(z) {
					try {
						l(p(z))
					} catch (E) {
						n(E)
					}
				} : t
			}
			var l, n, w = new e(function(p, t) {
				l = p;
				n = t
			});
			this.Ib(k(g, l), k(h, n));
			return w
		};
		e.prototype.catch = function(g) {
			return this.then(void 0, g)
		};
		e.prototype.Ib = function(g, h) {
			function k() {
				switch (l.gb) {
					case 1:
						g(l.zb);
						break;
					case 2:
						h(l.zb);
						break;
					default:
						throw Error("i`" +
							l.gb);
				}
			}
			var l = this;
			null == this.ab ? f.Ad(k) : this.ab.push(k);
			this.ce = !0
		};
		e.resolve = c;
		e.reject = function(g) {
			return new e(function(h, k) {
				k(g)
			})
		};
		e.race = function(g) {
			return new e(function(h, k) {
				for (var l = v(g), n = l.next(); !n.done; n = l.next()) c(n.value).Ib(h, k)
			})
		};
		e.all = function(g) {
			var h = v(g),
				k = h.next();
			return k.done ? c([]) : new e(function(l, n) {
				function w(z) {
					return function(E) {
						p[z] = E;
						t--;
						0 == t && l(p)
					}
				}
				var p = [],
					t = 0;
				do p.push(void 0), t++, c(k.value).Ib(w(p.length - 1), n), k = h.next(); while (!k.done)
			})
		};
		return e
	});
	r("Object.values", function(a) {
		return a ? a : function(b) {
			var c = [],
				d;
			for (d in b) na(b, d) && c.push(b[d]);
			return c
		}
	});
	var Fa = function(a, b) {
		a instanceof String && (a += "");
		var c = 0,
			d = !1,
			e = {
				next: function() {
					if (!d && c < a.length) {
						var f = c++;
						return {
							value: b(f, a[f]),
							done: !1
						}
					}
					d = !0;
					return {
						done: !0,
						value: void 0
					}
				}
			};
		e[Symbol.iterator] = function() {
			return e
		};
		return e
	};
	r("Array.prototype.keys", function(a) {
		return a ? a : function() {
			return Fa(this, function(b) {
				return b
			})
		}
	});
	r("WeakMap", function(a) {
		function b() {}

		function c(k) {
			var l = typeof k;
			return "object" === l && null !== k || "function" === l
		}

		function d(k) {
			if (!na(k, f)) {
				var l = new b;
				da(k, f, {
					value: l
				})
			}
		}

		function e(k) {
			var l = Object[k];
			l && (Object[k] = function(n) {
				if (n instanceof b) return n;
				Object.isExtensible(n) && d(n);
				return l(n)
			})
		}
		if (function() {
				if (!a || !Object.seal) return !1;
				try {
					var k = Object.seal({}),
						l = Object.seal({}),
						n = new a([
							[k, 2],
							[l, 3]
						]);
					if (2 != n.get(k) || 3 != n.get(l)) return !1;
					n.delete(k);
					n.set(l, 4);
					return !n.has(k) && 4 == n.get(l)
				} catch (w) {
					return !1
				}
			}()) return a;
		var f = "$jscomp_hidden_" + Math.random();
		e("freeze");
		e("preventExtensions");
		e("seal");
		var g = 0,
			h = function(k) {
				this.tb = (g += Math.random() + 1).toString();
				if (k) {
					k = v(k);
					for (var l; !(l = k.next()).done;) l = l.value, this.set(l[0], l[1])
				}
			};
		h.prototype.set = function(k, l) {
			if (!c(k)) throw Error("j");
			d(k);
			if (!na(k, f)) throw Error("k`" + k);
			k[f][this.tb] = l;
			return this
		};
		h.prototype.get = function(k) {
			return c(k) && na(k, f) ? k[f][this.tb] : void 0
		};
		h.prototype.has = function(k) {
			return c(k) && na(k, f) && na(k[f], this.tb)
		};
		h.prototype.delete = function(k) {
			return c(k) &&
				na(k, f) && na(k[f], this.tb) ? delete k[f][this.tb] : !1
		};
		return h
	});
	r("Map", function(a) {
		if (function() {
				if (!a || "function" != typeof a || !a.prototype.entries || "function" != typeof Object.seal) return !1;
				try {
					var h = Object.seal({
							x: 4
						}),
						k = new a(v([
							[h, "s"]
						]));
					if ("s" != k.get(h) || 1 != k.size || k.get({
							x: 4
						}) || k.set({
							x: 4
						}, "t") != k || 2 != k.size) return !1;
					var l = k.entries(),
						n = l.next();
					if (n.done || n.value[0] != h || "s" != n.value[1]) return !1;
					n = l.next();
					return n.done || 4 != n.value[0].x || "t" != n.value[1] || !l.next().done ? !1 : !0
				} catch (w) {
					return !1
				}
			}()) return a;
		var b = new WeakMap,
			c = function(h) {
				this[0] = {};
				this[1] =
					f();
				this.size = 0;
				if (h) {
					h = v(h);
					for (var k; !(k = h.next()).done;) k = k.value, this.set(k[0], k[1])
				}
			};
		c.prototype.set = function(h, k) {
			h = 0 === h ? 0 : h;
			var l = d(this, h);
			l.list || (l.list = this[0][l.id] = []);
			l.P ? l.P.value = k : (l.P = {
				next: this[1],
				Aa: this[1].Aa,
				head: this[1],
				key: h,
				value: k
			}, l.list.push(l.P), this[1].Aa.next = l.P, this[1].Aa = l.P, this.size++);
			return this
		};
		c.prototype.delete = function(h) {
			h = d(this, h);
			return h.P && h.list ? (h.list.splice(h.index, 1), h.list.length || delete this[0][h.id], h.P.Aa.next = h.P.next, h.P.next.Aa = h.P.Aa,
				h.P.head = null, this.size--, !0) : !1
		};
		c.prototype.clear = function() {
			this[0] = {};
			this[1] = this[1].Aa = f();
			this.size = 0
		};
		c.prototype.has = function(h) {
			return !!d(this, h).P
		};
		c.prototype.get = function(h) {
			return (h = d(this, h).P) && h.value
		};
		c.prototype.entries = function() {
			return e(this, function(h) {
				return [h.key, h.value]
			})
		};
		c.prototype.keys = function() {
			return e(this, function(h) {
				return h.key
			})
		};
		c.prototype.values = function() {
			return e(this, function(h) {
				return h.value
			})
		};
		c.prototype.forEach = function(h, k) {
			for (var l = this.entries(),
					n; !(n = l.next()).done;) n = n.value, h.call(k, n[1], n[0], this)
		};
		c.prototype[Symbol.iterator] = c.prototype.entries;
		var d = function(h, k) {
				var l = k && typeof k;
				"object" == l || "function" == l ? b.has(k) ? l = b.get(k) : (l = "" + ++g, b.set(k, l)) : l = "p_" + k;
				var n = h[0][l];
				if (n && na(h[0], l))
					for (h = 0; h < n.length; h++) {
						var w = n[h];
						if (k !== k && w.key !== w.key || k === w.key) return {
							id: l,
							list: n,
							index: h,
							P: w
						}
					}
				return {
					id: l,
					list: n,
					index: -1,
					P: void 0
				}
			},
			e = function(h, k) {
				var l = h[1];
				return ia(function() {
					if (l) {
						for (; l.head != h[1];) l = l.Aa;
						for (; l.next != l.head;) return l =
							l.next, {
								done: !1,
								value: k(l)
							};
						l = null
					}
					return {
						done: !0,
						value: void 0
					}
				})
			},
			f = function() {
				var h = {};
				return h.Aa = h.next = h.head = h
			},
			g = 0;
		return c
	});
	var Ga = function(a, b, c) {
		if (null == a) throw new TypeError("l`" + c);
		if (b instanceof RegExp) throw new TypeError("m`" + c);
		return a + ""
	};
	r("String.prototype.startsWith", function(a) {
		return a ? a : function(b, c) {
			var d = Ga(this, b, "startsWith");
			b += "";
			var e = d.length,
				f = b.length;
			c = Math.max(0, Math.min(c | 0, d.length));
			for (var g = 0; g < f && c < e;)
				if (d[c++] != b[g++]) return !1;
			return g >= f
		}
	});
	r("Number.isFinite", function(a) {
		return a ? a : function(b) {
			return "number" !== typeof b ? !1 : !isNaN(b) && Infinity !== b && -Infinity !== b
		}
	});
	r("Array.prototype.values", function(a) {
		return a ? a : function() {
			return Fa(this, function(b, c) {
				return c
			})
		}
	});
	r("Set", function(a) {
		if (function() {
				if (!a || "function" != typeof a || !a.prototype.entries || "function" != typeof Object.seal) return !1;
				try {
					var c = Object.seal({
							x: 4
						}),
						d = new a(v([c]));
					if (!d.has(c) || 1 != d.size || d.add(c) != d || 1 != d.size || d.add({
							x: 4
						}) != d || 2 != d.size) return !1;
					var e = d.entries(),
						f = e.next();
					if (f.done || f.value[0] != c || f.value[1] != c) return !1;
					f = e.next();
					return f.done || f.value[0] == c || 4 != f.value[0].x || f.value[1] != f.value[0] ? !1 : e.next().done
				} catch (g) {
					return !1
				}
			}()) return a;
		var b = function(c) {
			this.pa = new Map;
			if (c) {
				c =
					v(c);
				for (var d; !(d = c.next()).done;) this.add(d.value)
			}
			this.size = this.pa.size
		};
		b.prototype.add = function(c) {
			c = 0 === c ? 0 : c;
			this.pa.set(c, c);
			this.size = this.pa.size;
			return this
		};
		b.prototype.delete = function(c) {
			c = this.pa.delete(c);
			this.size = this.pa.size;
			return c
		};
		b.prototype.clear = function() {
			this.pa.clear();
			this.size = 0
		};
		b.prototype.has = function(c) {
			return this.pa.has(c)
		};
		b.prototype.entries = function() {
			return this.pa.entries()
		};
		b.prototype.values = function() {
			return this.pa.values()
		};
		b.prototype.keys = b.prototype.values;
		b.prototype[Symbol.iterator] = b.prototype.values;
		b.prototype.forEach = function(c, d) {
			var e = this;
			this.pa.forEach(function(f) {
				return c.call(d, f, f, e)
			})
		};
		return b
	});
	r("Array.prototype.findIndex", function(a) {
		return a ? a : function(b, c) {
			a: {
				var d = this;d instanceof String && (d = String(d));
				for (var e = d.length, f = 0; f < e; f++)
					if (b.call(c, d[f], f, d)) {
						b = f;
						break a
					} b = -1
			}
			return b
		}
	});
	r("Array.prototype.entries", function(a) {
		return a ? a : function() {
			return Fa(this, function(b, c) {
				return [b, c]
			})
		}
	});
	r("Array.prototype.fill", function(a) {
		return a ? a : function(b, c, d) {
			var e = this.length || 0;
			0 > c && (c = Math.max(0, e + c));
			if (null == d || d > e) d = e;
			d = Number(d);
			0 > d && (d = Math.max(0, e + d));
			for (c = Number(c || 0); c < d; c++) this[c] = b;
			return this
		}
	});
	var Ha = function(a) {
		return a ? a : Array.prototype.fill
	};
	r("Int8Array.prototype.fill", Ha);
	r("Uint8Array.prototype.fill", Ha);
	r("Uint8ClampedArray.prototype.fill", Ha);
	r("Int16Array.prototype.fill", Ha);
	r("Uint16Array.prototype.fill", Ha);
	r("Int32Array.prototype.fill", Ha);
	r("Uint32Array.prototype.fill", Ha);
	r("Float32Array.prototype.fill", Ha);
	r("Float64Array.prototype.fill", Ha);
	r("Object.entries", function(a) {
		return a ? a : function(b) {
			var c = [],
				d;
			for (d in b) na(b, d) && c.push([d, b[d]]);
			return c
		}
	});
	r("Object.is", function(a) {
		return a ? a : function(b, c) {
			return b === c ? 0 !== b || 1 / b === 1 / c : b !== b && c !== c
		}
	});
	r("Array.prototype.includes", function(a) {
		return a ? a : function(b, c) {
			var d = this;
			d instanceof String && (d = String(d));
			var e = d.length;
			c = c || 0;
			for (0 > c && (c = Math.max(c + e, 0)); c < e; c++) {
				var f = d[c];
				if (f === b || Object.is(f, b)) return !0
			}
			return !1
		}
	});
	r("String.prototype.includes", function(a) {
		return a ? a : function(b, c) {
			return -1 !== Ga(this, b, "includes").indexOf(b, c || 0)
		}
	});
	r("Array.from", function(a) {
		return a ? a : function(b, c, d) {
			c = null != c ? c : function(h) {
				return h
			};
			var e = [],
				f = "undefined" != typeof Symbol && Symbol.iterator && b[Symbol.iterator];
			if ("function" == typeof f) {
				b = f.call(b);
				for (var g = 0; !(f = b.next()).done;) e.push(c.call(d, f.value, g++))
			} else
				for (f = b.length, g = 0; g < f; g++) e.push(c.call(d, b[g], g));
			return e
		}
	});
	r("Number.isInteger", function(a) {
		return a ? a : function(b) {
			return Number.isFinite(b) ? b === Math.floor(b) : !1
		}
	});
	r("Math.log2", function(a) {
		return a ? a : function(b) {
			return Math.log(b) / Math.LN2
		}
	});
	/*

	 Copyright The Closure Library Authors.
	 SPDX-License-Identifier: Apache-2.0
	*/
	var Ia = this || self,
		Ja = function(a, b) {
			a: {
				var c = ["CLOSURE_FLAGS"];
				for (var d = Ia, e = 0; e < c.length; e++)
					if (d = d[c[e]], null == d) {
						c = null;
						break a
					} c = d
			}
			a = c && c[a];
			return null != a ? a : b
		},
		Ka = function(a) {
			var b = typeof a;
			return "object" != b ? b : a ? Array.isArray(a) ? "array" : b : "null"
		},
		La = function(a) {
			var b = Ka(a);
			return "array" == b || "object" == b && "number" == typeof a.length
		},
		Ma = function(a) {
			var b = typeof a;
			return "object" == b && null != a || "function" == b
		},
		Na = function(a, b) {
			function c() {}
			c.prototype = b.prototype;
			a.Mh = b.prototype;
			a.prototype = new c;
			a.prototype.constructor =
				a;
			a.aj = function(d, e, f) {
				for (var g = Array(arguments.length - 2), h = 2; h < arguments.length; h++) g[h - 2] = arguments[h];
				return b.prototype[e].apply(d, g)
			}
		},
		Oa = function(a) {
			return a
		};
	var Pa = function() {
		this.Ae = 0
	};
	Pa.prototype.Rh = function(a, b) {
		var c = this;
		return function() {
			var d = y.apply(0, arguments);
			c.Ae = a;
			return b.apply(null, ma(d))
		}
	};
	var Qa = function() {
			var a = {};
			this.ra = (a[3] = [], a[2] = [], a[1] = [], a);
			this.Tc = !1
		},
		Sa = function(a, b, c) {
			var d = Ra(a, c);
			a.ra[c].push(b);
			d && 1 === a.ra[c].length && a.flush()
		},
		Ra = function(a, b) {
			return Object.keys(a.ra).map(function(c) {
				return Number(c)
			}).filter(function(c) {
				return !isNaN(c) && c > b
			}).every(function(c) {
				return 0 === a.ra[c].length
			})
		};
	Qa.prototype.flush = function() {
		if (!this.Tc) {
			this.Tc = !0;
			try {
				for (; Object.values(this.ra).some(function(a) {
						return 0 < a.length
					});) Ta(this, 3), Ta(this, 2), Ta(this, 1)
			} catch (a) {
				throw Object.values(this.ra).forEach(function(b) {
					return void b.splice(0, b.length)
				}), a;
			} finally {
				this.Tc = !1
			}
		}
	};
	var Ta = function(a, b) {
		for (; Ra(a, b) && 0 < a.ra[b].length;) a.ra[b][0](), a.ra[b].shift()
	};
	ha.Object.defineProperties(Qa.prototype, {
		ph: {
			configurable: !0,
			enumerable: !0,
			get: function() {
				return Object.values(this.ra).some(function(a) {
					return 0 < a.length
				})
			}
		}
	});

	function Ua(a, b) {
		if (Error.captureStackTrace) Error.captureStackTrace(this, Ua);
		else {
			var c = Error().stack;
			c && (this.stack = c)
		}
		a && (this.message = String(a));
		void 0 !== b && (this.cause = b)
	}
	Na(Ua, Error);
	Ua.prototype.name = "CustomError";

	function Va(a, b) {
		a = a.split("%s");
		for (var c = "", d = a.length - 1, e = 0; e < d; e++) c += a[e] + (e < b.length ? b[e] : "%s");
		Ua.call(this, c + a[d])
	}
	Na(Va, Ua);
	Va.prototype.name = "AssertionError";

	function Wa(a, b, c, d) {
		var e = "Assertion failed";
		if (c) {
			e += ": " + c;
			var f = d
		} else a && (e += ": " + a, f = b);
		throw new Va("" + e, f || []);
	}
	var A = function(a, b, c) {
			a || Wa("", null, b, Array.prototype.slice.call(arguments, 2))
		},
		Xa = function(a, b) {
			throw new Va("Failure" + (a ? ": " + a : ""), Array.prototype.slice.call(arguments, 1));
		},
		Ya = function(a, b, c) {
			"number" !== typeof a && Wa("Expected number but got %s: %s.", [Ka(a), a], b, Array.prototype.slice.call(arguments, 2))
		},
		Za = function(a, b, c) {
			Array.isArray(a) || Wa("Expected array but got %s: %s.", [Ka(a), a], b, Array.prototype.slice.call(arguments, 2));
			return a
		},
		ab = function(a, b, c, d) {
			a instanceof b || Wa("Expected instanceof %s but got %s.",
				[$a(b), $a(a)], c, Array.prototype.slice.call(arguments, 3));
			return a
		};

	function $a(a) {
		return a instanceof Function ? a.displayName || a.name || "unknown type name" : a instanceof Object ? a.constructor.displayName || a.constructor.name || Object.prototype.toString.call(a) : null === a ? "null" : typeof a
	};
	var bb = Array.prototype.indexOf ? function(a, b) {
			A(null != a.length);
			return Array.prototype.indexOf.call(a, b, void 0)
		} : function(a, b) {
			if ("string" === typeof a) return "string" !== typeof b || 1 != b.length ? -1 : a.indexOf(b, 0);
			for (var c = 0; c < a.length; c++)
				if (c in a && a[c] === b) return c;
			return -1
		},
		cb = Array.prototype.filter ? function(a, b) {
			A(null != a.length);
			return Array.prototype.filter.call(a, b, void 0)
		} : function(a, b) {
			for (var c = a.length, d = [], e = 0, f = "string" === typeof a ? a.split("") : a, g = 0; g < c; g++)
				if (g in f) {
					var h = f[g];
					b.call(void 0,
						h, g, a) && (d[e++] = h)
				} return d
		},
		db = Array.prototype.map ? function(a, b) {
			A(null != a.length);
			return Array.prototype.map.call(a, b, void 0)
		} : function(a, b) {
			for (var c = a.length, d = Array(c), e = "string" === typeof a ? a.split("") : a, f = 0; f < c; f++) f in e && (d[f] = b.call(void 0, e[f], f, a));
			return d
		};

	function eb(a, b) {
		for (var c = "string" === typeof a ? a.split("") : a, d = a.length - 1; 0 <= d; d--)
			if (d in c && b.call(void 0, c[d], d, a)) return d;
		return -1
	}

	function fb(a, b, c) {
		if (!La(a) || !La(b) || a.length != b.length) return !1;
		var d = a.length;
		c = c || gb;
		for (var e = 0; e < d; e++)
			if (!c(a[e], b[e])) return !1;
		return !0
	}

	function gb(a, b) {
		return a === b
	};

	function hb(a) {
		var b = [],
			c = 0,
			d;
		for (d in a) b[c++] = d;
		return b
	};
	var ib;
	var kb = function(a) {
		if (jb !== jb) throw Error("n");
		this.fh = a
	};
	kb.prototype.toString = function() {
		return this.fh + ""
	};
	var jb = {},
		lb = function(a) {
			if (void 0 === ib) {
				var b = null;
				var c = Ia.trustedTypes;
				if (c && c.createPolicy) try {
					b = c.createPolicy("goog#html", {
						createHTML: Oa,
						createScript: Oa,
						createScriptURL: Oa
					})
				} catch (d) {
					Ia.console && Ia.console.error(d.message)
				}
				ib = b
			}
			a = (b = ib) ? b.createScriptURL(a) : a;
			return new kb(a)
		};
	var nb = function(a) {
		if (mb !== mb) throw Error("o");
		this.eh = a
	};
	nb.prototype.toString = function() {
		return this.eh.toString()
	};
	var mb = {};
	new nb("about:invalid#zClosurez");
	new nb("about:blank");
	var ob = {},
		pb = function() {
			if (ob !== ob) throw Error("p");
			this.dh = ""
		};
	pb.prototype.toString = function() {
		return this.dh.toString()
	};
	new pb;
	var qb = {},
		sb = function() {
			if (qb !== qb) throw Error("q");
			this.bh = ""
		};
	sb.prototype.toString = function() {
		return this.bh.toString()
	};
	new sb;
	var tb = Ja(610401301, !1),
		ub = Ja(572417392, Ja(1, !0));
	var vb, wb = Ia.navigator;
	vb = wb ? wb.userAgentData || null : null;

	function xb(a) {
		return tb ? vb ? vb.brands.some(function(b) {
			return (b = b.brand) && -1 != b.indexOf(a)
		}) : !1 : !1
	}

	function yb(a) {
		var b;
		a: {
			if (b = Ia.navigator)
				if (b = b.userAgent) break a;b = ""
		}
		return -1 != b.indexOf(a)
	};

	function zb() {
		return tb ? !!vb && 0 < vb.brands.length : !1
	}

	function Ab() {
		return zb() ? xb("Chromium") : (yb("Chrome") || yb("CriOS")) && !(zb() ? 0 : yb("Edge")) || yb("Silk")
	};
	var Bb = {},
		Cb = function() {
			var a = Ia.trustedTypes && Ia.trustedTypes.emptyHTML || "";
			if (Bb !== Bb) throw Error("r");
			this.ah = a
		};
	Cb.prototype.toString = function() {
		return this.ah.toString()
	};
	new Cb;
	var Db = function() {
		this.names = new Map
	};
	Db.prototype.Xa = function(a) {
		var b = this.names.get(a);
		if (b) return b;
		var c;
		b = null != (c = a.description) ? c : Math.floor(2147483648 * Math.random()).toString(36) + Math.abs(Math.floor(2147483648 * Math.random()) ^ Date.now()).toString(36);
		this.names.set(a, b);
		return b
	};
	/*


	 Copyright (c) 2015-2018 Google, Inc., Netflix, Inc., Microsoft Corp. and contributors

	 Licensed under the Apache License, Version 2.0 (the "License");
	 you may not use this file except in compliance with the License.
	 You may obtain a copy of the License at

	     http://www.apache.org/licenses/LICENSE-2.0

	 Unless required by applicable law or agreed to in writing, software
	 distributed under the License is distributed on an "AS IS" BASIS,
	 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	 See the License for the specific language governing permissions and
	 limitations under the License.
	*/
	var Eb = !1,
		Fb = {
			set ma(a) {
				a ? console.warn("s`" + Error().stack) : Eb && console.log("t");
				Eb = a
			},
			get ma() {
				return Eb
			}
		};
	var Gb = "function" === typeof Symbol && Symbol.observable || "@@observable";

	function Hb(a) {
		setTimeout(function() {
			throw a;
		}, 0)
	};
	var Ib = {
		closed: !0,
		next: function() {},
		error: function(a) {
			if (Fb.ma) throw a;
			Hb(a)
		},
		complete: function() {}
	};
	var Jb = function() {
		function a(b) {
			this.message = b ? b.length + " errors occurred during unsubscription:\n" + b.map(function(c, d) {
				return d + 1 + ") " + c.toString()
			}).join("\n  ") : "";
			this.name = "UnsubscriptionError";
			this.errors = b;
			return this
		}
		a.prototype = Object.create(Error.prototype);
		return a
	}();
	var Kb = Array.isArray || function(a) {
		return a && "number" === typeof a.length
	};

	function Lb(a) {
		return "function" === typeof a
	};

	function Mb(a) {
		return null !== a && "object" === typeof a
	};
	var C = function(a) {
		this.closed = !1;
		this.Ta = this.jb = null;
		a && (this.Ie = !0, this.ua = a)
	};
	C.prototype.unsubscribe = function() {
		if (!this.closed) {
			var a = this.jb,
				b = this.Ie,
				c = this.ua,
				d = this.Ta;
			this.closed = !0;
			this.Ta = this.jb = null;
			if (a instanceof C) a.remove(this);
			else if (null !== a)
				for (var e = 0; e < a.length; ++e) a[e].remove(this);
			if (Lb(c)) {
				b && (this.ua = void 0);
				try {
					c.call(this)
				} catch (k) {
					var f = k instanceof Jb ? Nb(k.errors) : [k]
				}
			}
			if (Kb(d)) {
				e = -1;
				for (var g = d.length; ++e < g;) {
					var h = d[e];
					if (Mb(h)) try {
						h.unsubscribe()
					} catch (k) {
						f = f || [], k instanceof Jb ? f = f.concat(Nb(k.errors)) : f.push(k)
					}
				}
			}
			if (f) throw new Jb(f);
		}
	};
	C.prototype.add = function(a) {
		var b = a;
		if (!a) return C.EMPTY;
		switch (typeof a) {
			case "function":
				b = new C(a);
			case "object":
				if (b === this || b.closed || "function" !== typeof b.unsubscribe) return b;
				if (this.closed) return b.unsubscribe(), b;
				b instanceof C || (a = b, b = new C, b.Ta = [a]);
				break;
			default:
				throw Error("u`" + a);
		}
		var c = b.jb;
		if (null === c) b.jb = this;
		else if (c instanceof C) {
			if (c === this) return b;
			b.jb = [c, this]
		} else if (-1 === c.indexOf(this)) c.push(this);
		else return b;
		a = this.Ta;
		null === a ? this.Ta = [b] : a.push(b);
		return b
	};
	C.prototype.remove = function(a) {
		var b = this.Ta;
		b && (a = b.indexOf(a), -1 !== a && b.splice(a, 1))
	};
	var Ob = new C;
	Ob.closed = !0;
	C.EMPTY = Ob;

	function Pb(a) {
		return a instanceof C || a && "closed" in a && "function" === typeof a.remove && "function" === typeof a.add && "function" === typeof a.unsubscribe
	}

	function Nb(a) {
		return a.reduce(function(b, c) {
			return b.concat(c instanceof Jb ? c.errors : c)
		}, [])
	};
	var H = function(a, b, c) {
		C.call(this);
		this.hc = null;
		this.l = this.ga = this.fc = !1;
		switch (arguments.length) {
			case 0:
				this.destination = Ib;
				break;
			case 1:
				if (!a) {
					this.destination = Ib;
					break
				}
				if ("object" === typeof a) {
					a instanceof H ? (this.ga = a.ga, this.destination = a, a.add(this)) : (this.ga = !0, this.destination = new Qb(this, a));
					break
				}
			default:
				this.ga = !0, this.destination = new Qb(this, a, b, c)
		}
	};
	x(H, C);
	H.EMPTY = C.EMPTY;
	H.create = function(a, b, c) {
		a = new H(a, b, c);
		a.ga = !1;
		return a
	};
	m = H.prototype;
	m.next = function(a) {
		this.l || this.j(a)
	};
	m.error = function(a) {
		this.l || (this.l = !0, this.ia(a))
	};
	m.complete = function() {
		this.l || (this.l = !0, this.o())
	};
	m.unsubscribe = function() {
		this.closed || (this.l = !0, C.prototype.unsubscribe.call(this))
	};
	m.j = function(a) {
		this.destination.next(a)
	};
	m.ia = function(a) {
		this.destination.error(a);
		this.unsubscribe()
	};
	m.o = function() {
		this.destination.complete();
		this.unsubscribe()
	};
	var Qb = function(a, b, c, d) {
		H.call(this);
		this.kb = a;
		var e = this;
		if (Lb(b)) var f = b;
		else b && (f = b.next, c = b.error, d = b.complete, b !== Ib && (e = Object.create(b), Pb(b) && b.add(this.unsubscribe.bind(this)), e.unsubscribe = this.unsubscribe.bind(this)));
		this.ta = e;
		this.j = f;
		this.ia = c;
		this.o = d
	};
	x(Qb, H);
	Qb.EMPTY = H.EMPTY;
	Qb.create = H.create;
	m = Qb.prototype;
	m.next = function(a) {
		if (!this.l && this.j) {
			var b = this.kb;
			Fb.ma && b.ga ? this.rc(b, this.j, a) && this.unsubscribe() : this.sc(this.j, a)
		}
	};
	m.error = function(a) {
		if (!this.l) {
			var b = this.kb,
				c = Fb.ma;
			if (this.ia) c && b.ga ? this.rc(b, this.ia, a) : this.sc(this.ia, a), this.unsubscribe();
			else if (b.ga) c ? (b.hc = a, b.fc = !0) : Hb(a), this.unsubscribe();
			else {
				this.unsubscribe();
				if (c) throw a;
				Hb(a)
			}
		}
	};
	m.complete = function() {
		var a = this;
		if (!this.l) {
			var b = this.kb;
			if (this.o) {
				var c = function() {
					return a.o.call(a.ta)
				};
				Fb.ma && b.ga ? this.rc(b, c) : this.sc(c)
			}
			this.unsubscribe()
		}
	};
	m.sc = function(a, b) {
		try {
			a.call(this.ta, b)
		} catch (c) {
			this.unsubscribe();
			if (Fb.ma) throw c;
			Hb(c)
		}
	};
	m.rc = function(a, b, c) {
		if (!Fb.ma) throw Error("v");
		try {
			b.call(this.ta, c)
		} catch (d) {
			return Fb.ma ? (a.hc = d, a.fc = !0) : Hb(d), !0
		}
		return !1
	};
	m.ua = function() {
		var a = this.kb;
		this.kb = this.ta = null;
		a.unsubscribe()
	};

	function Rb(a) {
		return a
	};

	function J() {
		return Sb(y.apply(0, arguments))
	}

	function Sb(a) {
		return 0 === a.length ? Rb : 1 === a.length ? a[0] : function(b) {
			return a.reduce(function(c, d) {
				return d(c)
			}, b)
		}
	};

	function Tb(a) {
		return a && "function" === typeof a.next && "function" === typeof a.error && "function" === typeof a.complete
	}
	var Ub = function(a) {
		H.call(this);
		this.destination = a
	};
	x(Ub, H);
	Ub.EMPTY = H.EMPTY;
	Ub.create = H.create;
	var M = function(a) {
		a && (this.na = a)
	};
	m = M.prototype;
	m.Xc = function(a) {
		var b = new M;
		b.source = this;
		b.operator = a;
		return b
	};
	m.subscribe = function(a, b, c) {
		var d = this.operator;
		a: {
			if (a) {
				if (a instanceof H || Tb(a) && Pb(a)) break a;
				if (Tb(a)) {
					a = new Ub(a);
					break a
				}
			}
			a = a || b || c ? new H(a, b, c) : new H(Ib)
		}
		d ? a.add(d.call(a, this.source)) : a.add(this.source || Fb.ma && !a.ga ? this.na(a) : this.xc(a));
		if (Fb.ma && a.ga && (a.ga = !1, a.fc)) throw a.hc;
		return a
	};
	m.xc = function(a) {
		try {
			return this.na(a)
		} catch (e) {
			Fb.ma && (a.fc = !0, a.hc = e);
			var b;
			a: {
				for (b = a; b;) {
					var c = b.destination,
						d = b.l;
					if (b.closed || d) {
						b = !1;
						break a
					}
					b = c && c instanceof H ? c : null
				}
				b = !0
			}
			b ? a.error(e) : console.warn(e)
		}
	};
	m.forEach = function(a, b) {
		var c = this;
		b = Vb(b);
		return new b(function(d, e) {
			var f = c.subscribe(function(g) {
				try {
					a(g)
				} catch (h) {
					e(h), f && f.unsubscribe()
				}
			}, e, d)
		})
	};
	m.na = function(a) {
		var b = this.source;
		return b && b.subscribe(a)
	};
	M.prototype[Gb] = function() {
		return this
	};
	M.prototype.g = function() {
		var a = y.apply(0, arguments);
		return 0 === a.length ? this : Sb(a)(this)
	};
	M.create = function(a) {
		return new M(a)
	};

	function Vb(a) {
		a || (a = Promise);
		if (!a) throw Error("w");
		return a
	};
	var Wb = function(a, b) {
		C.call(this);
		this.ye = a;
		this.ld = b;
		this.closed = !1
	};
	x(Wb, C);
	Wb.EMPTY = C.EMPTY;
	Wb.prototype.unsubscribe = function() {
		if (!this.closed) {
			this.closed = !0;
			var a = this.ye,
				b = a.za;
			this.ye = null;
			!b || 0 === b.length || a.l || a.closed || (a = b.indexOf(this.ld), -1 !== a && b.splice(a, 1))
		}
	};
	var Xb = function() {
		function a() {
			this.message = "object unsubscribed";
			this.name = "ObjectUnsubscribedError";
			return this
		}
		a.prototype = Object.create(Error.prototype);
		return a
	}();
	var Yb = function() {
		this.za = [];
		this.Sb = this.l = this.closed = !1;
		this.md = null
	};
	x(Yb, M);
	m = Yb.prototype;
	m.Xc = function(a) {
		var b = new Zb(this, this);
		b.operator = a;
		return b
	};
	m.next = function(a) {
		if (this.closed) throw new Xb;
		if (!this.l) {
			var b = this.za,
				c = b.length;
			b = b.slice();
			for (var d = 0; d < c; d++) b[d].next(a)
		}
	};
	m.error = function(a) {
		if (this.closed) throw new Xb;
		this.Sb = !0;
		this.md = a;
		this.l = !0;
		var b = this.za,
			c = b.length;
		b = b.slice();
		for (var d = 0; d < c; d++) b[d].error(a);
		this.za.length = 0
	};
	m.complete = function() {
		if (this.closed) throw new Xb;
		this.l = !0;
		var a = this.za,
			b = a.length;
		a = a.slice();
		for (var c = 0; c < b; c++) a[c].complete();
		this.za.length = 0
	};
	m.unsubscribe = function() {
		this.closed = this.l = !0;
		this.za = null
	};
	m.xc = function(a) {
		if (this.closed) throw new Xb;
		return M.prototype.xc.call(this, a)
	};
	m.na = function(a) {
		if (this.closed) throw new Xb;
		if (this.Sb) return a.error(this.md), C.EMPTY;
		if (this.l) return a.complete(), C.EMPTY;
		this.za.push(a);
		return new Wb(this, a)
	};
	m.Ja = function() {
		var a = new M;
		a.source = this;
		return a
	};
	Yb.create = function(a, b) {
		return new Zb(a, b)
	};
	var Zb = function(a, b) {
		Yb.call(this);
		this.destination = a;
		this.source = b
	};
	x(Zb, Yb);
	Zb.create = Yb.create;
	Zb.prototype.next = function(a) {
		var b = this.destination;
		b && b.next && b.next(a)
	};
	Zb.prototype.error = function(a) {
		var b = this.destination;
		b && b.error && this.destination.error(a)
	};
	Zb.prototype.complete = function() {
		var a = this.destination;
		a && a.complete && this.destination.complete()
	};
	Zb.prototype.na = function(a) {
		return this.source ? this.source.subscribe(a) : C.EMPTY
	};
	var $b = new M(function(a) {
		return a.complete()
	});

	function ac(a, b) {
		return new M(function(c) {
			var d = new C,
				e = 0;
			d.add(b.Ca(function() {
				e === a.length ? c.complete() : (c.next(a[e++]), c.closed || d.add(this.Ca()))
			}));
			return d
		})
	};
	var bc = function(a) {
		return function(b) {
			for (var c = 0, d = a.length; c < d && !b.closed; c++) b.next(a[c]);
			b.complete()
		}
	};

	function cc(a, b) {
		return b ? ac(a, b) : new M(bc(a))
	};

	function dc(a) {
		return a && "function" === typeof a.Ca
	};

	function ec() {
		var a = y.apply(0, arguments),
			b = a[a.length - 1];
		return dc(b) ? (a.pop(), ac(a, b)) : cc(a)
	};
	var fc = {
		now: function() {
			return (fc.pf || Date).now()
		},
		pf: void 0
	};
	var gc = function(a, b, c) {
		a = void 0 === a ? Infinity : a;
		b = void 0 === b ? Infinity : b;
		c = void 0 === c ? fc : c;
		Yb.call(this);
		this.Xh = c;
		this.Fb = [];
		this.yd = !1;
		this.ud = 1 > a ? 1 : a;
		this.Ne = 1 > b ? 1 : b;
		Infinity === b ? (this.yd = !0, this.next = this.zg) : this.next = this.Bg
	};
	x(gc, Yb);
	gc.create = Yb.create;
	m = gc.prototype;
	m.zg = function(a) {
		var b = this.Fb;
		b.push(a);
		b.length > this.ud && b.shift();
		Yb.prototype.next.call(this, a)
	};
	m.Bg = function(a) {
		this.Fb.push({
			time: this.wd(),
			value: a
		});
		this.zd();
		Yb.prototype.next.call(this, a)
	};
	m.na = function(a) {
		var b = this.yd,
			c = b ? this.Fb : this.zd(),
			d = c.length;
		if (this.closed) throw new Xb;
		if (this.l || this.Sb) var e = C.EMPTY;
		else this.za.push(a), e = new Wb(this, a);
		if (b)
			for (var f = 0; f < d && !a.closed; f++) a.next(c[f]);
		else
			for (f = 0; f < d && !a.closed; f++) a.next(c[f].value);
		this.Sb ? a.error(this.md) : this.l && a.complete();
		return e
	};
	m.wd = function() {
		var a = this.Xh;
		return a ? a.now() : fc.now()
	};
	m.zd = function() {
		for (var a = this.wd(), b = this.ud, c = this.Ne, d = this.Fb, e = d.length, f = 0; f < e && !(a - d[f].time < c);) f++;
		e > b && (f = Math.max(f, e - b));
		0 < f && d.splice(0, f);
		return d
	};
	var ic = function(a, b) {
		b = void 0 === b ? hc : b;
		this.He = a;
		this.now = b
	};
	ic.prototype.Ca = function(a, b, c) {
		b = void 0 === b ? 0 : b;
		return (new this.He(this, a)).Ca(c, b)
	};
	var hc = fc.now;
	(function() {
		function a() {
			this.message = "no elements in sequence";
			this.name = "EmptyError";
			return this
		}
		a.prototype = Object.create(Error.prototype);
		return a
	})();

	function N(a, b) {
		if (a && "function" === typeof a.Xc) return a.Xc(b);
		throw new TypeError("x");
	};

	function jc() {
		return function(a) {
			return N(a, new kc)
		}
	}
	var kc = function() {};
	kc.prototype.call = function(a, b) {
		b.lb++;
		a = new lc(a, b);
		var c = b.subscribe(a);
		a.closed || (a.connection = b.connect());
		return c
	};
	var lc = function(a, b) {
		H.call(this, a);
		this.Va = b;
		this.connection = null
	};
	x(lc, H);
	lc.EMPTY = H.EMPTY;
	lc.create = H.create;
	lc.prototype.ua = function() {
		var a = this.Va;
		if (a) {
			this.Va = null;
			var b = a.lb;
			0 >= b ? this.connection = null : (a.lb = b - 1, 1 < b ? this.connection = null : (b = this.connection, a = a.Sa, this.connection = null, !a || b && a !== b || a.unsubscribe()))
		} else this.connection = null
	};
	var mc = function(a, b) {
		this.source = a;
		this.ze = b;
		this.lb = 0;
		this.Gb = !1
	};
	x(mc, M);
	mc.create = M.create;
	mc.prototype.na = function(a) {
		return this.Rb().subscribe(a)
	};
	mc.prototype.Rb = function() {
		var a = this.Hb;
		if (!a || a.l) this.Hb = this.ze();
		return this.Hb
	};
	mc.prototype.connect = function() {
		var a = this.Sa;
		a || (this.Gb = !1, a = this.Sa = new C, a.add(this.source.subscribe(new nc(this.Rb(), this))), a.closed && (this.Sa = null, a = C.EMPTY));
		return a
	};
	mc.prototype.se = function() {
		return jc()(this)
	};
	var oc, pc = mc.prototype;
	oc = {
		operator: {
			value: null
		},
		lb: {
			value: 0,
			writable: !0
		},
		Hb: {
			value: null,
			writable: !0
		},
		Sa: {
			value: null,
			writable: !0
		},
		na: {
			value: pc.na
		},
		Gb: {
			value: pc.Gb,
			writable: !0
		},
		Rb: {
			value: pc.Rb
		},
		connect: {
			value: pc.connect
		},
		se: {
			value: pc.se
		}
	};
	var nc = function(a, b) {
		H.call(this);
		this.destination = a;
		this.Va = b
	};
	x(nc, H);
	nc.EMPTY = H.EMPTY;
	nc.create = H.create;
	nc.prototype.ia = function(a) {
		this.ua();
		H.prototype.ia.call(this, a)
	};
	nc.prototype.o = function() {
		this.Va.Gb = !0;
		this.ua();
		H.prototype.o.call(this)
	};
	nc.prototype.ua = function() {
		var a = this.Va;
		if (a) {
			this.Va = null;
			var b = a.Sa;
			a.lb = 0;
			a.Hb = null;
			a.Sa = null;
			b && b.unsubscribe()
		}
	};

	function O(a) {
		return function(b) {
			if ("function" !== typeof a) throw new TypeError("y");
			return N(b, new qc(a))
		}
	}
	var qc = function(a) {
		this.K = a;
		this.ha = void 0
	};
	qc.prototype.call = function(a, b) {
		return b.subscribe(new rc(a, this.K, this.ha))
	};
	var rc = function(a, b, c) {
		H.call(this, a);
		this.K = b;
		this.count = 0;
		this.ha = c || this
	};
	x(rc, H);
	rc.EMPTY = H.EMPTY;
	rc.create = H.create;
	rc.prototype.j = function(a) {
		try {
			var b = this.K.call(this.ha, a, this.count++)
		} catch (c) {
			this.destination.error(c);
			return
		}
		this.destination.next(b)
	};
	var sc = "function" === typeof Symbol && Symbol.iterator ? Symbol.iterator : "@@iterator";

	function tc(a) {
		return function(b) {
			uc(a, b).catch(function(c) {
				return b.error(c)
			})
		}
	}

	function uc(a, b) {
		var c, d, e, f, g, h;
		return Da(new Ca(new ya(function(k) {
			switch (k.fa) {
				case 1:
					k.Ka = 2;
					k.wa = 3;
					var l = a[Symbol.asyncIterator];
					f = void 0 !== l ? l.call(a) : new Ea(v(a));
				case 5:
					return l = f.next(), k.fa = 8, {
						value: l
					};
				case 8:
					d = k.td;
					if (d.done) {
						k.Qa(3);
						break
					}
					g = d.value;
					b.next(g);
					k.Qa(5);
					break;
				case 3:
					k.Jc = [k.ca];
					k.Ka = 0;
					k.wa = 0;
					k.Ka = 0;
					k.wa = 9;
					if (!d || d.done || !(e = f.return)) {
						k.Qa(9);
						break
					}
					l = e.call(f);
					k.fa = 9;
					return {
						value: l
					};
				case 9:
					k.Jc[1] = k.ca;
					k.Ka = 0;
					k.wa = 0;
					if (c) throw c.error;
					xa(k, 10, 1);
					break;
				case 10:
					xa(k, 4);
					break;
				case 2:
					k.Ka = 0;
					l = k.ca.Ld;
					k.ca = null;
					h = l;
					c = {
						error: h
					};
					k.Qa(3);
					break;
				case 4:
					b.complete(), k.fa = 0
			}
		})))
	};
	var vc = function(a) {
		return function(b) {
			var c = a[sc]();
			do {
				var d = void 0;
				try {
					d = c.next()
				} catch (e) {
					b.error(e);
					return
				}
				if (d.done) {
					b.complete();
					break
				}
				b.next(d.value);
				if (b.closed) break
			} while (1);
			"function" === typeof c.return && b.add(function() {
				c.return && c.return()
			});
			return b
		}
	};
	var wc = function(a) {
		return function(b) {
			var c = a[Gb]();
			if ("function" !== typeof c.subscribe) throw new TypeError("z");
			return c.subscribe(b)
		}
	};
	var xc = function(a) {
		return function(b) {
			a.then(function(c) {
				b.closed || (b.next(c), b.complete())
			}, function(c) {
				return b.error(c)
			}).then(null, Hb);
			return b
		}
	};
	var yc = function(a) {
		if (a && "function" === typeof a[Gb]) return wc(a);
		if (a && "number" === typeof a.length && "function" !== typeof a) return bc(a);
		if (a && "function" !== typeof a.subscribe && "function" === typeof a.then) return xc(a);
		if (a && "function" === typeof a[sc]) return vc(a);
		if (Symbol && Symbol.asyncIterator && a && "function" === typeof a[Symbol.asyncIterator]) return tc(a);
		throw new TypeError("A`" + (Mb(a) ? "an invalid object" : "'" + a + "'"));
	};
	var zc = function(a) {
		H.call(this);
		this.parent = a
	};
	x(zc, H);
	zc.EMPTY = H.EMPTY;
	zc.create = H.create;
	zc.prototype.j = function(a) {
		this.parent.ya(a)
	};
	zc.prototype.ia = function(a) {
		this.parent.Za(a);
		this.unsubscribe()
	};
	zc.prototype.o = function() {
		this.parent.Z();
		this.unsubscribe()
	};
	var Ac = function(a, b, c) {
		H.call(this);
		this.parent = a;
		this.Og = b;
		this.Ng = c
	};
	x(Ac, H);
	Ac.EMPTY = H.EMPTY;
	Ac.create = H.create;
	Ac.prototype.j = function(a) {
		this.parent.ya(this.Og, a, this.Ng)
	};
	Ac.prototype.ia = function(a) {
		this.parent.Za(a);
		this.unsubscribe()
	};
	Ac.prototype.o = function() {
		this.parent.Z(this);
		this.unsubscribe()
	};
	var P = function() {
		H.apply(this, arguments)
	};
	x(P, H);
	P.EMPTY = H.EMPTY;
	P.create = H.create;
	P.prototype.ya = function(a) {
		this.destination.next(a)
	};
	P.prototype.Za = function(a) {
		this.destination.error(a)
	};
	P.prototype.Z = function() {
		this.destination.complete()
	};
	var Bc = function() {
		H.apply(this, arguments)
	};
	x(Bc, H);
	Bc.EMPTY = H.EMPTY;
	Bc.create = H.create;
	Bc.prototype.ya = function(a, b) {
		this.destination.next(b)
	};
	Bc.prototype.Za = function(a) {
		this.destination.error(a)
	};
	Bc.prototype.Z = function() {
		this.destination.complete()
	};

	function Cc(a, b) {
		if (!b.closed) return a instanceof M ? a.subscribe(b) : yc(a)(b)
	};
	var Dc = {};

	function Ec() {
		var a = y.apply(0, arguments),
			b = void 0,
			c = void 0,
			d = void 0;
		dc(a[a.length - 1]) && (c = a.pop());
		"function" === typeof a[a.length - 1] && (b = a.pop());
		if (1 === a.length) {
			var e = a[0];
			Kb(e) && (a = e);
			Mb(e) && Object.getPrototypeOf(e) === Object.prototype && (d = Object.keys(e), a = d.map(function(f) {
				return e[f]
			}))
		}
		return N(cc(a, c), new Fc(b, d))
	}
	var Fc = function(a, b) {
		this.Ba = a;
		this.keys = b
	};
	Fc.prototype.call = function(a, b) {
		return b.subscribe(new Gc(a, this.Ba, this.keys))
	};
	var Gc = function(a, b, c) {
		Bc.call(this, a);
		this.Ba = b;
		this.keys = c;
		this.active = 0;
		this.values = [];
		this.Ha = []
	};
	x(Gc, Bc);
	Gc.EMPTY = Bc.EMPTY;
	Gc.create = Bc.create;
	m = Gc.prototype;
	m.j = function(a) {
		this.values.push(Dc);
		this.Ha.push(a)
	};
	m.o = function() {
		var a = this.Ha,
			b = a.length;
		if (0 === b) this.destination.complete();
		else {
			this.Ra = this.active = b;
			for (var c = 0; c < b; c++) this.add(Cc(a[c], new Ac(this, null, c)))
		}
	};
	m.Z = function() {
		0 === --this.active && this.destination.complete()
	};
	m.ya = function(a, b, c) {
		var d = this.values,
			e = d[c];
		e = this.Ra ? e === Dc ? --this.Ra : this.Ra : 0;
		d[c] = b;
		0 === e && (this.Ba ? this.Ke(d) : this.destination.next(this.keys ? this.keys.reduce(function(f, g, h) {
			return f[g] = d[h], f
		}, {}) : d.slice()))
	};
	m.Ke = function(a) {
		try {
			var b = this.Ba.apply(this, a)
		} catch (c) {
			this.destination.error(c);
			return
		}
		this.destination.next(b)
	};

	function Hc(a) {
		return a instanceof M ? a : new M(yc(a))
	};

	function Ic(a, b) {
		var c = void 0 === c ? Infinity : c;
		if ("function" === typeof b) return function(d) {
			return d.g(Ic(function(e, f) {
				return Hc(a(e, f)).g(O(function(g, h) {
					return b(e, g, f, h)
				}))
			}, c))
		};
		"number" === typeof b && (c = b);
		return function(d) {
			return N(d, new Jc(a, c))
		}
	}
	var Jc = function(a, b) {
		b = void 0 === b ? Infinity : b;
		this.K = a;
		this.Ec = b
	};
	Jc.prototype.call = function(a, b) {
		return b.subscribe(new Kc(a, this.K, this.Ec))
	};
	var Kc = function(a, b, c) {
		c = void 0 === c ? Infinity : c;
		P.call(this, a);
		this.destination = a;
		this.K = b;
		this.Ec = c;
		this.Ya = !1;
		this.buffer = [];
		this.index = this.active = 0
	};
	x(Kc, P);
	Kc.EMPTY = P.EMPTY;
	Kc.create = P.create;
	Kc.prototype.j = function(a) {
		if (this.active < this.Ec) {
			var b = this.index++;
			try {
				var c = this.K(a, b)
			} catch (d) {
				this.destination.error(d);
				return
			}
			this.active++;
			a = new zc(this);
			this.destination.add(a);
			Cc(c, a)
		} else this.buffer.push(a)
	};
	Kc.prototype.o = function() {
		this.Ya = !0;
		0 === this.active && 0 === this.buffer.length && this.destination.complete();
		this.unsubscribe()
	};
	Kc.prototype.ya = function(a) {
		this.destination.next(a)
	};
	Kc.prototype.Z = function() {
		var a = this.buffer;
		this.active--;
		0 < a.length ? this.j(a.shift()) : 0 === this.active && this.Ya && this.destination.complete()
	};

	function Lc(a) {
		a = void 0 === a ? Infinity : a;
		return Ic(Rb, a)
	};

	function Mc() {
		return Lc(1)(ec.apply(null, ma(y.apply(0, arguments))))
	};
	var Nc = function() {
		C.call(this)
	};
	x(Nc, C);
	Nc.EMPTY = C.EMPTY;
	Nc.prototype.Ca = function() {
		return this
	};
	var Oc = function(a, b) {
		return setInterval.apply(null, [a, b].concat(ma(y.apply(2, arguments))))
	};
	var Pc = function(a, b) {
		C.call(this);
		this.scheduler = a;
		this.qc = b;
		this.pending = !1
	};
	x(Pc, Nc);
	Pc.EMPTY = Nc.EMPTY;
	m = Pc.prototype;
	m.Ca = function(a, b) {
		b = void 0 === b ? 0 : b;
		if (this.closed) return this;
		this.state = a;
		a = this.id;
		var c = this.scheduler;
		null != a && (this.id = this.xb(c, a, b));
		this.pending = !0;
		this.delay = b;
		this.id = this.id || this.yb(c, this.id, b);
		return this
	};
	m.yb = function(a, b, c) {
		return Oc(a.flush.bind(a, this), void 0 === c ? 0 : c)
	};
	m.xb = function(a, b, c) {
		c = void 0 === c ? 0 : c;
		if (null !== c && this.delay === c && !1 === this.pending) return b;
		clearInterval(b)
	};
	m.execute = function(a, b) {
		if (this.closed) return Error("D");
		this.pending = !1;
		if (a = this.vd(a, b)) return a;
		!1 === this.pending && null != this.id && (this.id = this.xb(this.scheduler, this.id, null))
	};
	m.vd = function(a) {
		var b = !1,
			c = void 0;
		try {
			this.qc(a)
		} catch (d) {
			b = !0, c = !!d && d || Error(d)
		}
		if (b) return this.unsubscribe(), c
	};
	m.ua = function() {
		var a = this.id,
			b = this.scheduler,
			c = b.actions,
			d = c.indexOf(this);
		this.state = this.qc = null;
		this.pending = !1;
		this.scheduler = null; - 1 !== d && c.splice(d, 1);
		null != a && (this.id = this.xb(b, a, null));
		this.delay = null
	};
	var Qc = function(a, b) {
		b = void 0 === b ? hc : b;
		ic.call(this, a, b);
		this.actions = [];
		this.active = !1;
		this.dc = void 0
	};
	x(Qc, ic);
	Qc.prototype.flush = function(a) {
		var b = this.actions;
		if (this.active) b.push(a);
		else {
			var c;
			this.active = !0;
			do
				if (c = a.execute(a.state, a.delay)) break; while (a = b.shift());
			this.active = !1;
			if (c) {
				for (; a = b.shift();) a.unsubscribe();
				throw c;
			}
		}
	};

	function Rc() {
		var a = y.apply(0, arguments),
			b = Infinity,
			c = void 0,
			d = a[a.length - 1];
		dc(d) ? (c = a.pop(), 1 < a.length && "number" === typeof a[a.length - 1] && (b = a.pop())) : "number" === typeof d && (b = a.pop());
		return !c && 1 === a.length && a[0] instanceof M ? a[0] : Lc(b)(cc(a, c))
	};

	function Sc() {};
	var Tc = new M(Sc);

	function Q(a) {
		return function(b) {
			return N(b, new Uc(a))
		}
	}
	var Uc = function(a) {
		this.V = a;
		this.ha = void 0
	};
	Uc.prototype.call = function(a, b) {
		return b.subscribe(new Vc(a, this.V, this.ha))
	};
	var Vc = function(a, b, c) {
		H.call(this, a);
		this.V = b;
		this.ha = c;
		this.count = 0
	};
	x(Vc, H);
	Vc.EMPTY = H.EMPTY;
	Vc.create = H.create;
	Vc.prototype.j = function(a) {
		try {
			var b = this.V.call(this.ha, a, this.count++)
		} catch (c) {
			this.destination.error(c);
			return
		}
		b && this.destination.next(a)
	};

	function Wc() {
		var a = y.apply(0, arguments);
		if (1 === a.length)
			if (Kb(a[0])) a = a[0];
			else return Hc(a[0]);
		return N(cc(a), new Xc)
	}
	var Xc = function() {};
	Xc.prototype.call = function(a, b) {
		return b.subscribe(new Yc(a))
	};
	var Yc = function(a) {
		Bc.call(this, a);
		this.sb = !1;
		this.Ha = [];
		this.Ab = []
	};
	x(Yc, Bc);
	Yc.EMPTY = Bc.EMPTY;
	Yc.create = Bc.create;
	m = Yc.prototype;
	m.j = function(a) {
		this.Ha.push(a)
	};
	m.o = function() {
		var a = this.Ha,
			b = a.length;
		if (0 === b) this.destination.complete();
		else {
			for (var c = 0; c < b && !this.sb; c++) {
				var d = Cc(a[c], new Ac(this, null, c));
				this.Ab && this.Ab.push(d);
				this.add(d)
			}
			this.Ha = null
		}
	};
	m.ya = function(a, b, c) {
		if (!this.sb) {
			this.sb = !0;
			for (var d = 0; d < this.Ab.length; d++)
				if (d !== c) {
					var e = this.Ab[d];
					e.unsubscribe();
					this.remove(e)
				} this.Ab = null
		}
		this.destination.next(b)
	};
	m.Z = function(a) {
		this.sb = !0;
		Bc.prototype.Z.call(this, a)
	};
	m.Za = function(a) {
		this.sb = !0;
		Bc.prototype.Za.call(this, a)
	};

	function Zc() {
		var a = y.apply(0, arguments),
			b = void 0;
		"function" === typeof a[a.length - 1] && (b = a.pop());
		return N(cc(a), new $c(b))
	}
	var $c = function(a) {
		this.Ba = a
	};
	$c.prototype.call = function(a, b) {
		return b.subscribe(new ad(a, this.Ba))
	};
	var ad = function(a, b, c) {
		void 0 === c && Object.create(null);
		H.call(this, a);
		this.Uc = [];
		this.active = 0;
		this.Ba = b
	};
	x(ad, H);
	ad.EMPTY = H.EMPTY;
	ad.create = H.create;
	ad.prototype.j = function(a) {
		var b = this.Uc;
		Kb(a) ? b.push(new bd(a)) : "function" === typeof a[sc] ? b.push(new cd(a[sc]())) : b.push(new dd(this.destination, this, a))
	};
	ad.prototype.o = function() {
		var a = this.Uc,
			b = a.length;
		this.unsubscribe();
		if (0 === b) this.destination.complete();
		else {
			this.active = b;
			for (var c = 0; c < b; c++) {
				var d = a[c];
				d.Lh ? this.destination.add(d.subscribe()) : this.active--
			}
		}
	};
	ad.prototype.Le = function(a) {
		try {
			var b = this.Ba.apply(this, a)
		} catch (c) {
			this.destination.error(c);
			return
		}
		this.destination.next(b)
	};
	var cd = function(a) {
		this.iterator = a;
		this.ad = a.next()
	};
	cd.prototype.Tb = function() {
		return !0
	};
	cd.prototype.next = function() {
		var a = this.ad;
		this.ad = this.iterator.next();
		return a
	};
	cd.prototype.Ya = function() {
		var a = this.ad;
		return a && !!a.done
	};
	var bd = function(a) {
		this.Ac = a;
		this.length = this.index = 0;
		this.length = a.length
	};
	bd.prototype[sc] = function() {
		return this
	};
	bd.prototype.next = function() {
		var a = this.index++,
			b = this.Ac;
		return a < this.length ? {
			value: b[a],
			done: !1
		} : {
			value: null,
			done: !0
		}
	};
	bd.prototype.Tb = function() {
		return this.Ac.length > this.index
	};
	bd.prototype.Ya = function() {
		return this.Ac.length === this.index
	};
	var dd = function(a, b, c) {
		P.call(this, a);
		this.parent = b;
		this.observable = c;
		this.Lh = !0;
		this.buffer = [];
		this.Sc = !1
	};
	x(dd, P);
	dd.EMPTY = P.EMPTY;
	dd.create = P.create;
	dd.prototype[sc] = function() {
		return this
	};
	m = dd.prototype;
	m.next = function() {
		var a = this.buffer;
		return 0 === a.length && this.Sc ? {
			value: null,
			done: !0
		} : {
			value: a.shift(),
			done: !1
		}
	};
	m.Tb = function() {
		return 0 < this.buffer.length
	};
	m.Ya = function() {
		return 0 === this.buffer.length && this.Sc
	};
	m.Z = function() {
		if (0 < this.buffer.length) {
			this.Sc = !0;
			var a = this.parent;
			a.active--;
			0 === a.active && a.destination.complete()
		} else this.destination.complete()
	};
	m.ya = function(a) {
		this.buffer.push(a);
		a: {
			a = this.parent;
			for (var b = a.Uc, c = b.length, d = a.destination, e = 0; e < c; e++) {
				var f = b[e];
				if ("function" === typeof f.Tb && !f.Tb()) break a
			}
			e = !1;f = [];
			for (var g = 0; g < c; g++) {
				var h = b[g],
					k = h.next();
				h.Ya() && (e = !0);
				if (k.done) {
					d.complete();
					break a
				}
				f.push(k.value)
			}
			a.Ba ? a.Le(f) : d.next(f);e && d.complete()
		}
	};
	m.subscribe = function() {
		return Cc(this.observable, new zc(this))
	};
	(function() {
		function a(b) {
			this.message = "Timeout has occurred";
			this.name = "TimeoutError";
			this.info = void 0 === b ? null : b;
			return this
		}
		a.prototype = Object.create(Error.prototype);
		return a
	})();
	var ed = 1,
		fd, gd = {};

	function id(a) {
		return a in gd ? (delete gd[a], !0) : !1
	}
	var jd = function(a) {
		var b = ed++;
		gd[b] = !0;
		fd || (fd = Promise.resolve());
		fd.then(function() {
			return id(b) && a()
		});
		return b
	};
	var kd = function() {
		return jd.apply(null, ma(y.apply(0, arguments)))
	};
	var ld = function(a, b) {
		Pc.call(this, a, b);
		this.scheduler = a;
		this.qc = b
	};
	x(ld, Pc);
	ld.EMPTY = Pc.EMPTY;
	ld.prototype.yb = function(a, b, c) {
		c = void 0 === c ? 0 : c;
		if (null !== c && 0 < c) return Pc.prototype.yb.call(this, a, b, c);
		a.actions.push(this);
		return a.dc || (a.dc = kd(a.flush.bind(a, void 0)))
	};
	ld.prototype.xb = function(a, b, c) {
		c = void 0 === c ? 0 : c;
		if (null !== c && 0 < c || null === c && 0 < this.delay) return Pc.prototype.xb.call(this, a, b, c);
		0 === a.actions.length && (id(b), a.dc = void 0)
	};
	var md = function() {
		Qc.apply(this, arguments)
	};
	x(md, Qc);
	md.prototype.flush = function(a) {
		this.active = !0;
		this.dc = void 0;
		var b = this.actions,
			c, d = -1;
		a = a || b.shift();
		var e = b.length;
		do
			if (c = a.execute(a.state, a.delay)) break; while (++d < e && (a = b.shift()));
		this.active = !1;
		if (c) {
			for (; ++d < e && (a = b.shift());) a.unsubscribe();
			throw c;
		}
	};
	var nd = new md(ld);
	var od = function(a, b) {
		Pc.call(this, a, b);
		this.scheduler = a;
		this.qc = b
	};
	x(od, Pc);
	od.EMPTY = Pc.EMPTY;
	od.prototype.Ca = function(a, b) {
		b = void 0 === b ? 0 : b;
		if (0 < b) return Pc.prototype.Ca.call(this, a, b);
		this.delay = b;
		this.state = a;
		this.scheduler.flush(this);
		return this
	};
	od.prototype.execute = function(a, b) {
		return 0 < b || this.closed ? Pc.prototype.execute.call(this, a, b) : this.vd(a, b)
	};
	od.prototype.yb = function(a, b, c) {
		c = void 0 === c ? 0 : c;
		return null !== c && 0 < c || null === c && 0 < this.delay ? Pc.prototype.yb.call(this, a, b, c) : a.flush(this)
	};
	var pd = function() {
		Qc.apply(this, arguments)
	};
	x(pd, Qc);
	var qd = new pd(od);
	var rd = function() {
		function a() {
			this.message = "argument out of range";
			this.name = "ArgumentOutOfRangeError";
			return this
		}
		a.prototype = Object.create(Error.prototype);
		return a
	}();
	(function() {
		function a(b) {
			this.message = b;
			this.name = "NotFoundError";
			return this
		}
		a.prototype = Object.create(Error.prototype);
		return a
	})();
	(function() {
		function a(b) {
			this.message = b;
			this.name = "SequenceError";
			return this
		}
		a.prototype = Object.create(Error.prototype);
		return a
	})();
	var sd = function() {
		this.dd = new Pa;
		this.h = new Qa;
		this.ag = Symbol();
		this.Kd = new Db
	};
	ha.Object.defineProperties(sd.prototype, {
		Bb: {
			configurable: !0,
			enumerable: !0,
			get: function() {
				return this.ag
			}
		}
	});

	function td(a) {
		var b, c, d;
		return !!a && "boolean" === typeof a.active && "function" === typeof(null == (b = a.clock) ? void 0 : b.now) && void 0 !== (null == (c = a.clock) ? void 0 : c.timeline) && !(null == (d = a.Xb) || !d.timestamp) && "function" === typeof a.ej && "function" === typeof a.Nd && "function" === typeof a.ij && "function" === typeof a.map && "function" === typeof a.tj
	};
	var ud = function(a, b) {
		b = Error.call(this, b ? a + ": " + b : String(a));
		this.message = b.message;
		"stack" in b && (this.stack = b.stack);
		this.code = a;
		this.__proto__ = ud.prototype;
		this.name = String(a)
	};
	x(ud, Error);
	var vd = function() {
		ud.call(this, 1003);
		this.__proto__ = vd.prototype
	};
	x(vd, ud);
	var wd = function() {
		ud.call(this, 1009);
		this.__proto__ = wd.prototype
	};
	x(wd, ud);
	var xd = function() {
		ud.call(this, 1007);
		this.__proto__ = vd.prototype
	};
	x(xd, ud);
	var yd = function(a) {
		ud.call(this, 1004, String(a));
		this.Uf = a;
		this.__proto__ = yd.prototype
	};
	x(yd, ud);
	var Ad = function(a) {
		ud.call(this, 1010, a);
		this.__proto__ = zd.prototype
	};
	x(Ad, ud);
	var zd = function(a) {
		ud.call(this, 1005, a);
		this.__proto__ = zd.prototype
	};
	x(zd, ud);
	var Bd = function(a) {
		ud.call(this, 1006, a);
		this.__proto__ = Bd.prototype
	};
	x(Bd, ud);
	var Cd = Symbol("date"),
		Dd = function(a, b) {
			this.value = a;
			this.timeline = b
		},
		Ed = function(a, b) {
			if (b.timeline !== a.timeline) throw new xd;
			return a.value - b.value
		};
	Dd.prototype.equals = function(a) {
		return 0 === Ed(this, a)
	};
	Dd.prototype.maximum = function(a) {
		if (a.timeline !== this.timeline) throw new xd;
		return this.value >= a.value ? this : a
	};
	Dd.prototype.round = function() {
		return new Dd(Math.round(this.value), this.timeline)
	};
	Dd.prototype.toString = function() {
		return String(this.value)
	};

	function Fd(a) {
		function b(c) {
			return "boolean" === typeof c || "string" === typeof c || "number" === typeof c || void 0 === c || null === c
		}
		return b(a) ? !0 : Array.isArray(a) ? a.every(b) : "object" === typeof a ? Object.keys(a).every(function(c) {
			return "string" === typeof c
		}) && Object.values(a).every(function(c) {
			return Array.isArray(c) ? c.every(b) : b(c)
		}) : !1
	}

	function Gd(a) {
		if (Fd(a)) return a;
		if (td(a)) return {
			Xb: {
				value: Gd(a.Xb.value),
				timestamp: Ed(a.Xb.timestamp, new Dd(0, a.Xb.timestamp.timeline))
			},
			active: a.active
		};
		try {
			return JSON.parse(JSON.stringify(a))
		} catch (b) {}
		return String(a)
	};

	function Hd(a) {
		return function(b) {
			return N(b, function(c) {
				var d = this,
					e = new C,
					f = null,
					g = !1,
					h;
				f = c.subscribe({
					next: function(k) {
						return d.next(k)
					},
					error: function(k) {
						try {
							h = Hc(a(k, Hd(a)(c)))
						} catch (l) {
							d.error(l)
						}
						h && (f ? (f.unsubscribe(), f = null, e.add(h.subscribe(d))) : g = !0)
					},
					complete: function() {
						return d.complete()
					}
				});
				g ? (f.unsubscribe(), f = null, e.add(h.subscribe(d))) : e.add(f);
				return e
			})
		}
	};

	function R(a) {
		return function(b) {
			return N(b, new Id(a))
		}
	}
	var Id = function(a) {
		this.compare = a;
		this.Vc = void 0
	};
	Id.prototype.call = function(a, b) {
		return b.subscribe(new Jd(a, this.compare, this.Vc))
	};
	var Jd = function(a, b, c) {
		H.call(this, a);
		this.Vc = c;
		this.Vd = !1;
		"function" === typeof b && (this.compare = b)
	};
	x(Jd, H);
	Jd.EMPTY = H.EMPTY;
	Jd.create = H.create;
	Jd.prototype.compare = function(a, b) {
		return a === b
	};
	Jd.prototype.j = function(a) {
		try {
			var b = this.Vc;
			var c = b ? b(a) : a
		} catch (e) {
			return this.destination.error(e)
		}
		b = !1;
		if (this.Vd) try {
			var d = this.compare;
			b = d(this.key, c)
		} catch (e) {
			return this.destination.error(e)
		} else this.Vd = !0;
		b || (this.key = c, this.destination.next(a))
	};

	function Kd(a) {
		if (isNaN(a)) throw new TypeError("E");
		if (0 > a) throw new rd;
		return function(b) {
			return 0 === a ? $b : N(b, new Ld(a))
		}
	}
	var Ld = function(a) {
		this.count = a
	};
	Ld.prototype.call = function(a, b) {
		return b.subscribe(new Md(a, this.count))
	};
	var Md = function(a, b) {
		H.call(this, a);
		this.count = b;
		this.Me = 0
	};
	x(Md, H);
	Md.EMPTY = H.EMPTY;
	Md.create = H.create;
	Md.prototype.j = function(a) {
		var b = this.count,
			c = ++this.Me;
		c <= b && (this.destination.next(a), c === b && (this.destination.complete(), this.unsubscribe()))
	};

	function Nd() {
		var a = y.apply(0, arguments);
		return function(b) {
			return Mc(b, ec.apply(null, ma(a)))
		}
	};

	function Od(a) {
		return function(b) {
			return N(b, new Pd(a, b))
		}
	}
	var Pd = function(a, b) {
		this.V = a;
		this.ha = void 0;
		this.source = b
	};
	Pd.prototype.call = function(a, b) {
		return b.subscribe(new Qd(a, this.V, this.ha, this.source))
	};
	var Qd = function(a, b, c, d) {
		H.call(this, a);
		this.V = b;
		this.ha = c;
		this.source = d;
		this.index = 0;
		this.ha = c || this
	};
	x(Qd, H);
	Qd.EMPTY = H.EMPTY;
	Qd.create = H.create;
	Qd.prototype.Z = function(a) {
		this.destination.next(a);
		this.destination.complete()
	};
	Qd.prototype.j = function(a) {
		var b = !1;
		try {
			b = this.V.call(this.ha, a, this.index++, this.source)
		} catch (c) {
			this.destination.error(c);
			return
		}
		b || this.Z(!1)
	};
	Qd.prototype.o = function() {
		this.Z(!0)
	};

	function Rd() {
		return function(a) {
			return N(a, new Sd)
		}
	}
	var Sd = function() {};
	Sd.prototype.call = function(a, b) {
		return b.subscribe(new Td(a))
	};
	var Td = function() {
		H.apply(this, arguments)
	};
	x(Td, H);
	Td.EMPTY = H.EMPTY;
	Td.create = H.create;
	Td.prototype.j = function() {};

	function Ud(a) {
		return function(b) {
			return N(b, new Vd(a))
		}
	}
	var Vd = function(a) {
		this.value = a
	};
	Vd.prototype.call = function(a, b) {
		return b.subscribe(new Wd(a, this.value))
	};
	var Wd = function(a, b) {
		H.call(this, a);
		this.value = b
	};
	x(Wd, H);
	Wd.EMPTY = H.EMPTY;
	Wd.create = H.create;
	Wd.prototype.j = function() {
		this.destination.next(this.value)
	};

	function V(a, b) {
		var c = !1;
		2 <= arguments.length && (c = !0);
		return function(d) {
			return N(d, new Xd(a, b, c))
		}
	}
	var Xd = function(a, b, c) {
		this.zc = a;
		this.seed = b;
		this.Tf = void 0 === c ? !1 : c
	};
	Xd.prototype.call = function(a, b) {
		return b.subscribe(new Yd(a, this.zc, this.seed, this.Tf))
	};
	var Yd = function(a, b, c, d) {
		H.call(this, a);
		this.zc = b;
		this.tc = c;
		this.xd = d;
		this.index = 0
	};
	x(Yd, H);
	Yd.EMPTY = H.EMPTY;
	Yd.create = H.create;
	Yd.prototype.j = function(a) {
		var b = this.destination;
		if (this.xd) {
			var c = this.index++;
			try {
				var d = this.zc(this.tc, a, c)
			} catch (e) {
				b.error(e);
				return
			}
			this.tc = d;
			b.next(d)
		} else this.tc = a, this.xd = !0, b.next(a)
	};

	function Zd(a) {
		return function(b) {
			var c = "function" === typeof a ? a : function() {
				return a
			};
			var d = Object.create(b, oc);
			d.source = b;
			d.ze = c;
			return d
		}
	};

	function $d() {
		var a = y.apply(0, arguments);
		1 === a.length && Kb(a[0]) && (a = a[0]);
		return function(b) {
			return N(b, new ae(a))
		}
	}
	var ae = function(a) {
		this.bd = a
	};
	ae.prototype.call = function(a, b) {
		return b.subscribe(new be(a, this.bd))
	};
	var be = function(a, b) {
		P.call(this, a);
		this.destination = a;
		this.bd = b
	};
	x(be, P);
	be.EMPTY = P.EMPTY;
	be.create = P.create;
	be.prototype.Za = function() {
		ce(this)
	};
	be.prototype.Z = function() {
		ce(this)
	};
	be.prototype.ia = function() {
		ce(this);
		this.unsubscribe()
	};
	be.prototype.o = function() {
		ce(this);
		this.unsubscribe()
	};
	var ce = function(a) {
		var b = a.bd.shift();
		if (b) {
			var c = new zc(a);
			a.destination.add(c);
			Cc(b, c)
		} else a.destination.complete()
	};

	function de() {
		return function(a) {
			return N(a, new ee)
		}
	}
	var ee = function() {};
	ee.prototype.call = function(a, b) {
		return b.subscribe(new fe(a))
	};
	var fe = function(a) {
		H.call(this, a);
		this.Xd = !1
	};
	x(fe, H);
	fe.EMPTY = H.EMPTY;
	fe.create = H.create;
	fe.prototype.j = function(a) {
		var b;
		this.Xd ? b = [this.Zg, a] : this.Xd = !0;
		this.Zg = a;
		b && this.destination.next(b)
	};

	function ge(a) {
		var b = new gc(a, void 0, void 0);
		return function(c) {
			return Zd(function() {
				return b
			})(c)
		}
	};

	function he() {
		var a = void 0 === a ? Infinity : a;
		return function(b) {
			return 0 >= a ? $b : N(b, function(c) {
				var d = this,
					e = 0,
					f = new C,
					g, h = function() {
						var k = !1;
						g = c.subscribe({
							next: function(l) {
								return d.next(l)
							},
							error: function(l) {
								return d.error(l)
							},
							complete: function() {
								++e < a ? g ? (g.unsubscribe(), g = null, h()) : k = !0 : d.complete()
							}
						});
						k ? (g.unsubscribe(), g = null, h()) : f.add(g)
					};
				h();
				return f
			})
		}
	};

	function ke(a) {
		return function(b) {
			return N(b, new le(a))
		}
	}
	var le = function(a) {
		this.V = a
	};
	le.prototype.call = function(a, b) {
		return b.subscribe(new me(a, this.V))
	};
	var me = function(a, b) {
		H.call(this, a);
		this.V = b;
		this.kd = !0;
		this.index = 0
	};
	x(me, H);
	me.EMPTY = H.EMPTY;
	me.create = H.create;
	me.prototype.j = function(a) {
		var b = this.destination;
		if (this.kd) try {
			this.kd = !!this.V(a, this.index++)
		} catch (c) {
			this.destination.error(c)
		}
		this.kd || b.next(a)
	};

	function W() {
		var a = y.apply(0, arguments),
			b = a[a.length - 1];
		return dc(b) ? (a.pop(), function(c) {
			return Mc(a, c, b)
		}) : function(c) {
			return Mc(a, c)
		}
	};
	var ne = function(a, b, c) {
		b = void 0 === b ? 0 : b;
		c = void 0 === c ? nd : c;
		this.source = a;
		this.delayTime = b;
		this.scheduler = c;
		0 > b && (this.delayTime = 0);
		dc(c) || (this.scheduler = nd)
	};
	x(ne, M);
	ne.create = M.create;
	ne.rf = function(a) {
		return this.add(a.source.subscribe(a.ld))
	};
	ne.prototype.na = function(a) {
		return this.scheduler.Ca(ne.rf, this.delayTime, {
			source: this.source,
			ld: a
		})
	};

	function oe() {
		var a = void 0 === a ? 0 : a;
		return function(b) {
			return N(b, new pe(a))
		}
	}
	var pe = function(a) {
		this.scheduler = qd;
		this.delay = a
	};
	pe.prototype.call = function(a, b) {
		return (new ne(b, this.delay, this.scheduler)).subscribe(a)
	};

	function qe(a) {
		return function(b) {
			return N(b, new re(a))
		}
	}
	var re = function(a) {
		this.K = a
	};
	re.prototype.call = function(a, b) {
		return b.subscribe(new se(a, this.K))
	};
	var se = function(a, b) {
		P.call(this, a);
		this.destination = a;
		this.K = b;
		this.index = 0
	};
	x(se, P);
	se.EMPTY = P.EMPTY;
	se.create = P.create;
	m = se.prototype;
	m.j = function(a) {
		var b = this.index++;
		try {
			var c = this.K(a, b)
		} catch (d) {
			this.destination.error(d);
			return
		}(a = this.Vb) && a.unsubscribe();
		a = new zc(this);
		this.destination.add(a);
		this.Vb = a;
		Cc(c, a)
	};
	m.o = function() {
		var a = this.Vb;
		a && !a.closed || P.prototype.o.call(this);
		this.unsubscribe()
	};
	m.ua = function() {
		this.Vb = void 0
	};
	m.Z = function() {
		this.Vb = void 0;
		this.l && P.prototype.o.call(this)
	};
	m.ya = function(a) {
		this.destination.next(a)
	};

	function te(a) {
		var b = !0;
		b = void 0 === b ? !1 : b;
		return function(c) {
			return N(c, new ue(a, b))
		}
	}
	var ue = function(a, b) {
		this.V = a;
		this.Pc = b
	};
	ue.prototype.call = function(a, b) {
		return b.subscribe(new ve(a, this.V, this.Pc))
	};
	var ve = function(a, b, c) {
		H.call(this, a);
		this.V = b;
		this.Pc = c;
		this.index = 0
	};
	x(ve, H);
	ve.EMPTY = H.EMPTY;
	ve.create = H.create;
	ve.prototype.j = function(a) {
		var b = this.destination;
		try {
			var c = this.V(a, this.index++)
		} catch (d) {
			b.error(d);
			return
		}
		b = this.destination;
		c ? b.next(a) : (this.Pc && b.next(a), b.complete())
	};

	function we(a, b, c) {
		return function(d) {
			return N(d, new ye(a, b, c))
		}
	}
	var ye = function(a, b, c) {
		this.Ag = a;
		this.error = b;
		this.complete = c
	};
	ye.prototype.call = function(a, b) {
		return b.subscribe(new ze(a, this.Ag, this.error, this.complete))
	};
	var ze = function(a, b, c, d) {
		H.call(this, a);
		this.uc = this.vc = this.wc = Sc;
		this.vc = c || Sc;
		this.uc = d || Sc;
		Lb(b) ? (this.ta = this, this.wc = b) : b && (this.ta = b, this.wc = b.next || Sc, this.vc = b.error || Sc, this.uc = b.complete || Sc)
	};
	x(ze, H);
	ze.EMPTY = H.EMPTY;
	ze.create = H.create;
	ze.prototype.j = function(a) {
		try {
			this.wc.call(this.ta, a)
		} catch (b) {
			this.destination.error(b);
			return
		}
		this.destination.next(a)
	};
	ze.prototype.ia = function(a) {
		try {
			this.vc.call(this.ta, a)
		} catch (b) {
			this.destination.error(b);
			return
		}
		this.destination.error(a)
	};
	ze.prototype.o = function() {
		try {
			this.uc.call(this.ta)
		} catch (a) {
			this.destination.error(a);
			return
		}
		return this.destination.complete()
	};

	function Ae() {
		var a = y.apply(0, arguments);
		return function(b) {
			var c;
			"function" === typeof a[a.length - 1] && (c = a.pop());
			return N(b, new Be(a, c))
		}
	}
	var Be = function(a, b) {
		this.Ha = a;
		this.K = b
	};
	Be.prototype.call = function(a, b) {
		return b.subscribe(new Ce(a, this.Ha, this.K))
	};
	var Ce = function(a, b, c) {
		Bc.call(this, a);
		this.K = c;
		this.Ra = [];
		a = b.length;
		this.values = Array(a);
		for (c = 0; c < a; c++) this.Ra.push(c);
		for (c = 0; c < a; c++) this.add(Cc(b[c], new Ac(this, void 0, c)))
	};
	x(Ce, Bc);
	Ce.EMPTY = Bc.EMPTY;
	Ce.create = Bc.create;
	Ce.prototype.ya = function(a, b, c) {
		this.values[c] = b;
		b = this.Ra;
		0 < b.length && (c = b.indexOf(c), -1 !== c && b.splice(c, 1))
	};
	Ce.prototype.Z = function() {};
	Ce.prototype.j = function(a) {
		0 === this.Ra.length && (a = [a].concat(ma(this.values)), this.K ? this.Je(a) : this.destination.next(a))
	};
	Ce.prototype.Je = function(a) {
		try {
			var b = this.K.apply(this, a)
		} catch (c) {
			this.destination.error(c);
			return
		}
		this.destination.next(b)
	};
	var De = function(a) {
		this.la = a
	};
	De.prototype.Pa = function(a) {
		return (null == a ? 0 : a.Yi) ? !0 : "POST" === (null == a ? void 0 : a.bj) || (null == a ? 0 : a.Hc) || (null == a ? 0 : a.dj) ? !1 : this.la.Pa()
	};
	De.prototype.ping = function() {
		var a = this,
			b = ec.apply(null, ma(y.apply(0, arguments))).g(Ic(function(c) {
				return Ee(a, c)
			}), Od(function(c) {
				return c
			}), ge(1));
		b.connect();
		return b
	};
	var Ee = function(a, b) {
		var c = new gc(1);
		Fe(a.la, b, function() {
			c.next(!0);
			c.complete()
		}, function() {
			c.next(!1);
			c.complete()
		});
		return c
	};
	De.prototype.Vg = function(a, b, c) {
		this.ping.apply(this, ma(y.apply(3, arguments)))
	};

	function Ge(a, b) {
		var c = !1;
		return new M(function(d) {
			var e = a.setTimeout(function() {
				c = !0;
				d.next(!0);
				d.complete()
			}, b);
			return function() {
				c || a.clearTimeout(e)
			}
		})
	};
	var He = function(a) {
		this.la = a;
		this.timeline = Cd
	};
	m = He.prototype;
	m.setTimeout = function(a, b) {
		return Number(this.la.setTimeout(function() {
			return a()
		}, b))
	};
	m.clearTimeout = function(a) {
		this.la.clearTimeout(a)
	};
	m.now = function() {
		return new Dd(Date.now(), this.timeline)
	};
	m.interval = function(a, b) {
		var c = this.Rc(a).subscribe(b);
		return function() {
			return void c.unsubscribe()
		}
	};
	m.Rc = function(a) {
		return Ge(this, a).g(he(), V(function(b) {
			return b + 1
		}, -1))
	};
	var Ie = function(a, b) {
		this.context = a;
		this.bb = b
	};
	Ie.prototype.Pa = function(a) {
		return this.bb.Pa(a)
	};
	var Ke = function(a, b) {
			if (!a.Pa()) throw new wd;
			return new Je(a.bb, b)
		},
		Je = function(a, b) {
			var c = this;
			this.bb = a;
			this.properties = void 0;
			this.url = b;
			this.Wb = !0;
			this.Hc = new Map;
			this.body = void 0;
			this.method = "GET";
			this.Ve = Tc.subscribe(function() {
				c.sendNow()
			})
		};
	Je.prototype.deactivate = function() {
		this.Wb = !1
	};
	Je.prototype.sendNow = function() {
		if (this.Wb)
			if (this.Ve.unsubscribe(), this.bb.Pa(this.properties)) try {
				if (0 < this.Hc.size || void 0 !== this.body) {
					var a, b;
					this.bb.Vg(null != (a = this.properties) ? a : {}, this.Hc, null != (b = this.body) ? b : "", this.url)
				} else this.bb.ping(this.url);
				this.Wb = !1
			} catch (c) {} else this.Wb = !1
	};

	function Le(a) {
		var b = Object.assign({}, a);
		delete b.timestamp;
		return {
			timestamp: new Dd(a.timestamp, Cd),
			value: b
		}
	};

	function Me(a) {
		return void 0 !== a && "number" === typeof a.x && "number" === typeof a.y && "number" === typeof a.width && "number" === typeof a.height
	};
	/*

	 SPDX-License-Identifier: Apache-2.0
	*/
	var Ne = ka([""]),
		Oe = la(["\x00"], ["\\0"]),
		Pe = la(["\n"], ["\\n"]),
		Qe = la(["\x00"], ["\\u0000"]),
		Re = ka([""]),
		Se = la(["\x00"], ["\\0"]),
		Te = la(["\n"], ["\\n"]),
		Ue = la(["\x00"], ["\\u0000"]);

	function Ve(a) {
		return Object.isFrozen(a) && Object.isFrozen(a.raw)
	}

	function We(a) {
		return -1 === a.toString().indexOf("`")
	}
	var Xe = We(function(a) {
			return a(Ne)
		}) || We(function(a) {
			return a(Oe)
		}) || We(function(a) {
			return a(Pe)
		}) || We(function(a) {
			return a(Qe)
		}),
		Ye = Ve(Re) && Ve(Se) && Ve(Te) && Ve(Ue);
	var Ze = function(a, b) {
		this.name = a;
		this.value = b
	};
	Ze.prototype.toString = function() {
		return this.name
	};
	var $e = new Ze("OFF", Infinity),
		af = new Ze("WARNING", 900),
		bf = new Ze("INFO", 800),
		cf = new Ze("CONFIG", 700),
		df = function() {
			this.Jb = 0;
			this.clear()
		},
		ef;
	df.prototype.clear = function() {
		this.Dd = Array(this.Jb);
		this.Id = -1;
		this.be = !1
	};
	var ff = function(a, b, c) {
		this.reset(a || $e, b, c, void 0, void 0)
	};
	ff.prototype.reset = function(a, b, c, d) {
		d || Date.now();
		this.vg = b
	};
	ff.prototype.getMessage = function() {
		return this.vg
	};
	var gf = function(a, b) {
			this.level = null;
			this.Rf = [];
			this.parent = (void 0 === b ? null : b) || null;
			this.children = [];
			this.fe = {
				Xa: function() {
					return a
				}
			}
		},
		hf = function(a) {
			if (a.level) return a.level;
			if (a.parent) return hf(a.parent);
			Xa("Root logger has no level set.");
			return $e
		},
		jf = function(a, b) {
			for (; a;) a.Rf.forEach(function(c) {
				c(b)
			}), a = a.parent
		},
		kf = function() {
			this.entries = {};
			var a = new gf("");
			a.level = cf;
			this.entries[""] = a
		},
		lf, mf = function(a, b, c) {
			var d = a.entries[b];
			if (d) return void 0 !== c && (d.level = c), d;
			d = mf(a, b.slice(0,
				Math.max(b.lastIndexOf("."), 0)));
			var e = new gf(b, d);
			a.entries[b] = e;
			d.children.push(e);
			void 0 !== c && (e.level = c);
			return e
		},
		nf = function() {
			lf || (lf = new kf);
			return lf
		},
		of = function(a, b) {
			var c = af,
				d;
			if (d = a)
				if (d = a && c) {
					d = c.value;
					var e = a ? hf(mf(nf(), a.Xa())) : $e;
					d = d >= e.value
				} if (d) {
				c = c || $e;
				d = mf(nf(), a.Xa());
				"function" === typeof b && (b = b());
				ef || (ef = new df);
				e = ef;
				a = a.Xa();
				if (0 < e.Jb) {
					var f = (e.Id + 1) % e.Jb;
					e.Id = f;
					e.be ? (e = e.Dd[f], e.reset(c, b, a), a = e) : (e.be = f == e.Jb - 1, a = e.Dd[f] = new ff(c, b, a))
				} else a = new ff(c, b, a);
				jf(d, a)
			}
		};
	var pf = [],
		qf = function(a) {
			var b = mf(nf(), "safevalues").fe;
			b && of(b, "A URL with content '" + a + "' was sanitized away.")
		}; - 1 === pf.indexOf(qf) && pf.push(qf);

	function rf(a) {
		var b = y.apply(1, arguments),
			c = b.length;
		if (!Array.isArray(a) || !Array.isArray(a.raw) || a.length !== a.raw.length || !Xe && a === a.raw || !(Xe && !Ye || Ve(a)) || c + 1 !== a.length) throw new TypeError("F");
		if (0 === b.length) return lb(a[0]);
		c = a[0].toLowerCase();
		if (/^data:/.test(c)) throw Error("M");
		if (/^https:\/\//.test(c) || /^\/\//.test(c)) {
			var d = c.indexOf("//") + 2;
			var e = c.indexOf("/", d);
			if (e <= d) throw Error("G");
			d = c.substring(d, e);
			if (!/^[0-9a-z.:-]+$/i.test(d)) throw Error("H");
			if (!/^[^:]*(:[0-9]+)?$/i.test(d)) throw Error("I");
			if (!/(^|\.)[a-z][^.]*$/i.test(d)) throw Error("J");
			d = !0
		} else d = !1;
		if (!d)
			if (/^\//.test(c))
				if ("/" === c || 1 < c.length && "/" !== c[1] && "\\" !== c[1]) d = !0;
				else throw Error("L");
		else d = !1;
		if (!(d = d || RegExp("^[^:\\s\\\\/]+/").test(c)))
			if (/^about:blank/.test(c)) {
				if ("about:blank" !== c && !/^about:blank#/.test(c)) throw Error("K");
				d = !0
			} else d = !1;
		if (!d) throw Error("N");
		c = a[0];
		for (d = 0; d < b.length; d++) c += encodeURIComponent(b[d]) + a[d + 1];
		return lb(c)
	};
	var sf = ka(["https://pagead2.googlesyndication.com/pagead/managed/js/activeview/", "/reach_worklet.html"]),
		tf = ka(["./reach_worklet.js"]),
		uf = ka(["./reach_worklet.js"]),
		vf = ka(["./reach_worklet.html"]),
		wf = ka(["./reach_worklet.js"]),
		xf = ka(["./reach_worklet.js"]);

	function yf() {
		var a = {};
		return a[0] = rf(sf, "current"), a[1] = rf(tf), a[2] = rf(uf), a
	}
	rf(vf);
	rf(wf);
	rf(xf);
	var Af = function(a, b, c, d) {
		c = void 0 === c ? null : c;
		d = void 0 === d ? yf() : d;
		sd.call(this);
		this.la = a;
		this.fi = b;
		this.Mb = c;
		this.jd = new gc(3);
		this.we = this.jd.g(Q(function(e) {
			return "sessionStart" === e.value.type
		}));
		this.ve = this.jd.g(Q(function(e) {
			return "sessionFinish" === e.value.type
		}));
		this.Yd = new gc(1);
		this.rd = new gc;
		this.Wa = new gc(10);
		this.m = new He(a);
		this.Ua = new Ie(this, new De(a));
		this.bg = this.la.Pa();
		zf(this)
	};
	x(Af, sd);
	Af.prototype.validate = function() {
		return this.bg
	};
	var zf = function(a) {
		Bf(a.la, function(e) {
			return void a.jd.next(Le(e))
		}, a.fi);
		a.la.addEventListener("geometryChange", function(e) {
			if (void 0 === e) var f = !1;
			else {
				f = e.data;
				var g;
				(g = void 0 === f) || (g = f.viewport, g = void 0 === g || void 0 !== g && "number" === typeof g.width && "number" === typeof g.height);
				g ? (f = f.adView, f = void 0 !== f && "number" === typeof f.percentageInView && (void 0 === f.geometry || Me(f.geometry)) && (void 0 === f.onScreenGeometry || Me(f.onScreenGeometry))) : f = !1
			}
			f ? a.Wa.next(Le(e)) : .01 >= Math.random() && (e = "https://pagead2.googlesyndication.com/pagead/gen_204?id=av-js&type=error&name=invalid_geo&context=1092&msg=" +
				JSON.stringify(e), Ke(a.Ua, e).sendNow())
		});
		for (var b = v("loaded start firstQuartile midpoint thirdQuartile complete pause resume bufferStart bufferFinish skipped volumeChange playerStateChange adUserInteraction".split(" ")), c = b.next(), d = {}; !c.done; d = {
				Nb: d.Nb
			}, c = b.next()) d.Nb = c.value, a.la.addEventListener(d.Nb, function(e) {
			return function(f) {
				f.type === e.Nb && a.rd.next(Le(f))
			}
		}(d));
		a.la.addEventListener("impression", function(e) {
			a.Yd.next(Le(e))
		})
	};
	ha.Object.defineProperties(Af.prototype, {
		global: {
			configurable: !0,
			enumerable: !0,
			get: function() {
				return Cf
			}
		}
	});
	var Cf = {};
	var Df = function(a) {
		var b = void 0 === b ? Symbol() : b;
		this.sessionId = a;
		this.Bb = b
	};
	var Ef = J(O(function(a) {
		return a.value
	}), Q(function(a) {
		return "sessionStart" === a.type
	}), O(function(a) {
		return new Df(a.ja)
	}));

	function Z(a, b) {
		return function(c) {
			return c.g(Ff(a, ge(b)))
		}
	}

	function Ff(a, b) {
		function c(d) {
			return new M(function(e) {
				return d.subscribe(function(f) {
					Sa(a, function() {
						return void e.next(f)
					}, 3)
				}, function(f) {
					Sa(a, function() {
						return void e.error(f)
					}, 3)
				}, function() {
					Sa(a, function() {
						return void e.complete()
					}, 3)
				})
			})
		}
		return J(c, oe(), b, jc(), c)
	};
	var Gf = function(a) {
		this.value = a
	};
	Gf.prototype.Ja = function(a) {
		return ec(this.value).g(Z(a, 1))
	};
	var Hf = new Gf(!1),
		If = new Gf(!0);

	function Jf(a, b) {
		return Kf(a, b, 2)
	}

	function Kf(a, b, c) {
		return new M(function(d) {
			var e = !1,
				f = Array(b.length);
			f.fill(void 0);
			var g = new Set,
				h = new Set,
				k = function(p, t) {
					a.ph ? (f[t] = p, g.add(t), e || (e = !0, Sa(a, function() {
						e = !1;
						var z = d.next;
						var E = f.length;
						if (0 < E) {
							for (var F = Array(E), u = 0; u < E; u++) F[u] = f[u];
							E = F
						} else E = [];
						z.call(d, E)
					}, c))) : d.error(new yd(t))
				},
				l = function(p, t) {
					h.add(t);
					g.add(t);
					Sa(a, function() {
						d.error(p)
					}, c)
				},
				n = function(p) {
					h.add(p);
					Sa(a, function() {
						h.size === b.length && d.complete()
					}, c)
				},
				w = b.map(function(p, t) {
					return p.subscribe(function(z) {
						return void k(z,
							t)
					}, function(z) {
						return void l(z, t)
					}, function() {
						return void n(t)
					})
				});
			return function() {
				w.forEach(function(p) {
					return void p.unsubscribe()
				})
			}
		})
	};

	function Lf(a, b, c) {
		function d() {
			if (b.Mb) {
				var F = b.Mb,
					u = F.next;
				var B = {
					creativeId: b.Kd.Xa(c),
					requiredSignals: e,
					signals: Object.assign({}, f),
					hasPrematurelyCompleted: g,
					errorMessage: h,
					erroredSignalKey: k
				};
				B = {
					specMajor: 2,
					specMinor: 0,
					specPatch: 0,
					timestamp: Ed(b.m.now(), new Dd(0, b.m.timeline)),
					instanceId: b.Kd.Xa(b.Bb),
					creativeState: B
				};
				u.call(F, B)
			}
		}
		for (var e = Object.keys(a), f = {}, g = !1, h = null, k = null, l = {}, n = new Set, w = [], p = [], t = v(e), z = t.next(), E = {}; !z.done; E = {
				ba: E.ba
			}, z = t.next()) E.ba = z.value, z = a[E.ba], z instanceof
		Gf ? (l[E.ba] = z.value, n.add(E.ba), b.Mb && (f[String(E.ba)] = Gd(z.value))) : (z = z.g(R(function(F, u) {
				return td(F) || td(u) ? !1 : F === u
			}), O(function(F) {
				return function(u) {
					b.Mb && (f[String(F.ba)] = Gd(u), d());
					var B = {};
					return B[F.ba] = u, B
				}
			}(E)), Hd(function(F) {
				return function(u) {
					if (u instanceof yd) throw new Ad(String(F.ba));
					throw u;
				}
			}(E)), we(function(F) {
				return function() {
					n.add(F.ba)
				}
			}(E), function(F) {
				return function(u) {
					k = String(F.ba);
					h = String(u);
					d()
				}
			}(E), function(F) {
				return function() {
					n.has(F.ba) || (g = !0, d())
				}
			}(E))), p.push(E.ba),
			w.push(z));
		(a = 0 < Object.keys(f).length) && d();
		t = Kf(b.h, w, 1).g(Hd(function(F) {
			if (F instanceof yd) throw new zd(String(p[F.Uf]));
			throw F;
		}), O(function(F) {
			return Object.freeze(Object.assign.apply(Object, [{}, l].concat(ma(F))))
		}));
		return (w = 0 < w.length) && a ? Rc(ec(Object.freeze(l)), t) : w ? t : ec(Object.freeze(l))
	};

	function Mf(a, b, c, d) {
		var e = Nf();
		return a.dd.Rh.bind(a.dd)(733, function() {
			var f = {};
			try {
				return b.g(Hd(function(g) {
					d(Object.assign({}, f, {
						error: g
					}));
					return $b
				}), Ic(function(g) {
					try {
						var h = c(a, g)
					} catch (l) {
						return d(Object.assign({}, f, {
							error: l instanceof Error ? l : String(l)
						})), $b
					}
					var k = {};
					return Lf(h, a, g.Bb).g(we(function(l) {
						k = l
					}), ge(1), jc()).g(e, Hd(function(l) {
						d(Object.assign({}, k, {
							error: l
						}));
						return $b
					}), Nd(void 0), O(function() {
						return !0
					}))
				})).g(V(function(g) {
					return g + 1
				}, 0), Hd(function(g) {
					d(Object.assign({},
						f, {
							error: g
						}));
					return $b
				}))
			} catch (g) {
				return d(Object.assign({}, f, {
					error: g
				})), $b
			}
		})()
	};

	function Of(a) {
		var b = new Map;
		if ("object" !== typeof a || null === a) return b;
		Object.values(a).forEach(function(c) {
			c && "function" === typeof c.Nd && (b.has(c.clock.timeline) || b.set(c.clock.timeline, c.clock.now()))
		});
		return b
	};

	function Pf(a, b, c) {
		var d = Qf,
			e = Rf;
		c = void 0 === c ? .01 : c;
		return function(f) {
			0 < c && Math.random() <= c && (a.global.HTMLFencedFrameElement && a.global.fence && "function" === typeof a.global.fence.reportEvent && a.global.fence.reportEvent({
				eventType: "active-view-error",
				eventData: "",
				destination: ["buyer"]
			}), f = Object.assign({}, f, {
				errorMessage: f.error instanceof Error && f.error.message ? f.error.message : String(f.error),
				vf: f.error instanceof Error && f.error.stack ? String(f.error.stack) : null,
				uf: f.error instanceof Error && f.error.name ?
					String(f.error.name) : null,
				tf: String(a.dd.Ae)
			}), d(Object.assign({}, f, {
				Qg: function() {
					return function(g) {
						try {
							return e(Object.assign({}, g))
						} catch (h) {
							return {}
						}
					}
				}(),
				pc: [b]
			}), Of(f)).forEach(function(g) {
				Ke(a.Ua, g).sendNow()
			}))
		}
	};
	var Rf = function(a) {
			return Object.assign({}, {
				v: a.Xe,
				bin: a.We,
				cb: a.Ze,
				e: a.event,
				sdk: a.zh,
				p: a.La,
				tos: a.jc,
				mtos: a.Ga,
				mcvt: a.eg,
				ps: a.sf,
				scs: a.yh,
				bs: a.ji,
				mut: a.xj,
				a: a.volume,
				ft: a.Qd,
				dft: a.R,
				at: a.Bc,
				dat: a.M,
				amtos: a.ge,
				as: a.Pe,
				vpt: a.sd,
				is: a.Na,
				i0: a.Yf,
				i1: a.Vf,
				i2: a.Wf,
				i3: a.Xf,
				ic: a.T,
				cs: a.jf,
				gmm: a.Nf,
				std: a.rb,
				nnut: a.zj,
				nmt: a.yg,
				pst: a.Dj,
				tcm: a.Qh,
				dur: a.duration,
				vmtime: a.uj,
				dtos: a.W,
				dtoss: a.Sh,
				vmer: a.Pj,
				vmmk: a.Rj,
				vmiec: a.Qj,
				c: a.ea,
				mc: a.fg,
				nc: a.sg,
				lte: a.Yc,
				tth: a.Mj,
				femt: a.lj,
				femvt: a.mj,
				emc: a.gj,
				emuc: a.hj,
				emb: a.fj,
				mv: a.jg,
				nv: a.tg,
				avms: a.og,
				qi: a.Fj,
				psv: a.Ug,
				psfv: a.Sg,
				psa: a.Rg,
				psm: a.Tg,
				ces: a.kf,
				veid: a.kj,
				ssb: a.th,
				omida: a.Eg,
				omidp: a.Jg,
				omidpv: a.Kg,
				omidr: a.Aj,
				omidv: a.Mg,
				omids: a.Lg,
				omidam: a.Dg,
				omidct: a.Fg,
				omidia: a.le,
				omiddc: a.Gg,
				omidlat: a.Ig,
				omiddit: a.Hg,
				sfr: a.Lj,
				nopd: a.cd
			}, {
				bt: a.cj,
				dvs: a.Y,
				dfvs: a.S,
				dvpt: a.X,
				context: a.tf,
				msg: a.errorMessage,
				stack: a.vf,
				name: a.uf,
				rxdbg: a.qh
			})
		},
		Tf = function(a) {
			var b = {
				p0: a.gf,
				p1: a.df,
				p2: a.ef,
				p3: a.ff,
				a0: a.oi,
				a1: a.li,
				a2: a.mi,
				a3: a.ni,
				c0: a.Cf,
				c1: a.zf,
				c2: a.Af,
				c3: a.Bf,
				ss0: a.xh,
				ss1: a.uh,
				ss2: a.vh,
				ss3: a.wh,
				qmt: a.pe,
				qnc: a.ih,
				qas: a.ne,
				qnv: a.re,
				qmv: a.qe,
				mtos1: Sf([0, 2, 4], a.gg, !1),
				mtos2: Sf([0, 2, 4], a.hg, !1),
				mtos3: Sf([0, 2, 4], a.ig, !1)
			};
			return Object.assign({}, Rf(a), b)
		},
		Uf = function(a) {
			var b = {
				qmt: a.pe,
				qnc: a.ih,
				qas: a.ne,
				qnv: a.re,
				qmv: a.qe
			};
			return Object.assign({}, Rf(a), b)
		},
		Vf = function(a) {
			var b = Object,
				c = b.assign,
				d = Rf(a);
			a = {
				atos: a.Cc,
				avt: Sf([2], a.Cc),
				davs: a.O,
				dafvs: a.L,
				dav: a.N,
				ss: a.eb
			};
			return c.call(b, {}, d, a)
		};

	function Sf(a, b, c) {
		if (b) return void 0 === c || c ? cb(b, function(d, e) {
			return 0 <= bb(a, e)
		}) : db(a, function(d, e, f) {
			return b.slice(0 < e ? f[e - 1] + 1 : 0, d + 1).reduce(function(g, h) {
				return g + h
			}, 0)
		})
	};

	function Wf() {
		var a = y.apply(0, arguments);
		return function(b) {
			var c = b.g(ge(1), jc());
			b = a.map(function(d) {
				return c.g(d, Nd(!0))
			});
			return Ec(b).g(Kd(1), Rd())
		}
	};

	function Xf() {
		var a = y.apply(0, arguments);
		return function(b) {
			var c = b.g(ge(1), jc());
			b = a.map(function(d) {
				return c.g(d, Nd(!0))
			});
			return Rc.apply(null, ma(b)).g(Kd(1), Rd())
		}
	};

	function Nf() {
		var a = Wf(Yf, Zf, $f, ag, bg, cg, dg, eg, fg, gg, hg, ig, jg),
			b = Xf(kg, lg, mg);
		return function(c) {
			var d = c.g(ge(1), jc());
			c = d.g(a, Nd(!0));
			d = d.g(J(b, ge(), jc()), Nd(!0));
			c = Ec([c, d]);
			return Wc(c, d).g(Kd(1), Rd())
		}
	};

	function ng(a, b) {
		return "string" === typeof a ? encodeURIComponent(a) : "number" === typeof a ? String(a) : Array.isArray(a) ? a.map(function(c) {
			return ng(c, b)
		}).join(",") : a instanceof Dd ? a.toString() : a && "function" === typeof a.Nd ? ng(a.jj(b).value, b) : !0 === a ? "1" : !1 === a ? "0" : void 0 === a || null === a ? null : [a.top, a.left, a.top + a.height, a.left + a.width].join()
	}

	function og(a, b) {
		a = Object.entries(a).map(function(c) {
			var d = v(c);
			c = d.next().value;
			d = d.next().value;
			d = ng(d, b);
			return null === d ? "" : c + "=" + d
		}).filter(function(c) {
			return "" !== c
		});
		return a.length ? a.join("&") : ""
	};

	function Qf(a, b) {
		var c = a.Qg(a),
			d = og(c, b);
		return d ? db(a.pc, function(e) {
			e = 0 <= e.indexOf("?") ? e : e + "?";
			e = 0 <= "?&".indexOf(e.slice(-1)) ? e : e + "&";
			return e + d
		}) : a.pc
	};
	var pg = /(?:\[|%5B)([a-zA-Z0-9_]+)(?:\]|%5D)/g,
		qg = mf(nf(), "google3.javascript.ads.common.url_macros_substitutor", bf).fe;

	function rg(a, b) {
		return a.replace(pg, function(c, d) {
			try {
				var e = null !== b && d in b ? b[d] : void 0;
				if (null == e) return qg && of(qg, "No value supplied for unsupported macro: " + d), c;
				if (null == e.toString()) return qg && of(qg, "The toString method of value returns null for macro: " + d), c;
				e = e.toString();
				if ("" == e || !/^[\s\xa0]*$/.test(null == e ? "" : String(e))) return encodeURIComponent(e).replace(/%2C/g, ",");
				qg && of(qg, "Null value supplied for macro: " + d)
			} catch (f) {
				qg && of(qg, "Failed to set macro: " + d)
			}
			return c
		})
	};

	function sg(a, b) {
		var c = a.u(a),
			d = a.Mf(a),
			e = og(c, b),
			f = og(d, b);
		return db(a.pc, function(g) {
			var h = {};
			return rg(g, (h.VIEWABILITY = e, h.GOOGLE_VIEWABILITY = f, h))
		})
	};

	function tg(a, b, c) {
		if (c.has(a) && c.get(a).has(b)) return !0;
		if (c.has(a)) c.get(a).add(b);
		else {
			var d = new Set;
			d.add(b);
			c.set(a, d)
		}
		return !1
	}

	function ug(a, b, c) {
		c = void 0 === c ? new Map : c;
		return a === b ? !0 : a instanceof Error && b instanceof Error ? ug(Object.assign({}, a, {
			stack: null
		}), Object.assign({}, b, {
			stack: null
		}), c) : Array.isArray(a) && Array.isArray(b) ? tg(a, b, c) ? !0 : fb(a, b, function(d, e) {
			return ug(d, e, c)
		}) : Ma(a) && Ma(b) ? tg(a, b, c) ? !0 : vg(a, b, c) : !1
	}

	function vg(a, b, c) {
		if (a === b) return !0;
		if (hb(a).length !== hb(b).length) return !1;
		for (var d in a)
			if (a.hasOwnProperty(d) && !ug(a[d], b[d], c)) return !1;
		return !0
	};

	function wg() {
		return J(Q(function(a) {
			return void 0 !== a
		}), O(function(a) {
			return a
		}))
	};

	function xg(a, b) {
		b = Math.pow(10, b);
		return Math.round(a * b) / b
	};

	function yg(a) {
		return 0 >= a.length ? $b : Ec(a.map(function(b) {
			var c = 0;
			return b.g(O(function(d) {
				return {
					index: c++,
					value: d
				}
			}))
		})).g(Q(function(b) {
			return b.every(function(c) {
				return c.index === b[0].index
			})
		}), O(function(b) {
			return b.map(function(c) {
				return c.value
			})
		}))
	};

	function zg(a, b) {
		a.Jd && (a.ed = a.Jd);
		a.Jd = b;
		a.ed && a.ed.value ? (b = Math.max(0, Ed(b.timestamp, a.ed.timestamp)), a.totalTime += b, a.nb += b) : a.nb = 0;
		return a
	}

	function Ag() {
		return J(V(zg, {
			totalTime: 0,
			nb: 0
		}), O(function(a) {
			return a.totalTime
		}))
	}

	function Bg() {
		return J(V(zg, {
			totalTime: 0,
			nb: 0
		}), O(function(a) {
			return a.nb
		}))
	};
	var Cg = O(function(a) {
		return [a.value.Da.width, a.value.Da.height]
	});

	function Dg(a, b) {
		return function(c) {
			return yg(b.map(function(d) {
				return c.g(a(d))
			}))
		}
	};

	function Eg() {
		var a;
		return J(we(function(b) {
			return void(a = b.timestamp)
		}), Bg(), O(function(b) {
			return {
				timestamp: a,
				value: Math.round(b)
			}
		}))
	};

	function Fg(a, b) {
		return b.g(Q(function(c) {
			return "start" === c.value.type
		}), O(function(c) {
			return Number(c.value.data.duration) || 0
		}), O(function(c) {
			return 1E3 * c
		}), Z(a, 1))
	};

	function Gg(a) {
		return ["backgrounded", "notFound", "hidden", "noOutputDevice"].includes(a)
	}

	function Hg(a, b) {
		return a.Wa.g(Q(function(c) {
			return c.value.ja === b.sessionId
		}), O(function(c) {
			var d = c.value.data.adView.reasons.some(Gg);
			return {
				timestamp: c.timestamp,
				value: d
			}
		}), W({
			timestamp: a.m.now(),
			value: !1
		}), Z(a.h, 1))
	}

	function Ig(a, b) {
		return a.Wa.g(Q(function(c) {
			return c.value.ja === b.sessionId
		}), O(function(c) {
			var d = c.value.data.adView.reasons.includes("noOutputDevice");
			return {
				timestamp: c.timestamp,
				value: d
			}
		}), Z(a.h, 1))
	}

	function Jg(a, b) {
		var c = Hg(a, b);
		b = Ig(a, b);
		a = b.g(V(function(d, e) {
			return d || e.value
		}, !1), W(!1), R(), Z(a.h, 1));
		return {
			Kf: c,
			cd: a,
			ai: b.g(O(function(d) {
				return d.value
			}))
		}
	};
	var Kg = {
		left: 0,
		top: 0,
		width: 0,
		height: 0
	};

	function Lg(a, b) {
		return a.left === b.left && a.top === b.top && a.width === b.width && a.height === b.height
	};

	function Mg(a, b) {
		b = void 0 === b ? new Set : b;
		if (b.has(a)) return "(Recursive reference)";
		switch (typeof a) {
			case "object":
				if (a) {
					var c = Object.getPrototypeOf(a);
					switch (c) {
						case Map.prototype:
						case Set.prototype:
						case Array.prototype:
							b.add(a);
							var d = "[" + Array.from(a, function(e) {
								return Mg(e, b)
							}).join(", ") + "]";
							b.delete(a);
							c !== Array.prototype && (d = Ng(c.constructor) + "(" + d + ")");
							return d;
						case Object.prototype:
							return b.add(a), c = "{" + Object.entries(a).map(function(e) {
								var f = v(e);
								e = f.next().value;
								f = f.next().value;
								return e +
									": " + Mg(f, b)
							}).join(", ") + "}", b.delete(a), c;
						default:
							return d = "Object", c && c.constructor && (d = Ng(c.constructor)), "function" === typeof a.toString && a.toString !== Object.prototype.toString ? d + "(" + String(a) + ")" : "(object " + d + ")"
					}
				}
				break;
			case "function":
				return "function " + Ng(a);
			case "number":
				if (!Number.isFinite(a)) return String(a);
				break;
			case "bigint":
				return a.toString(10) + "n";
			case "symbol":
				return a.toString()
		}
		return JSON.stringify(a)
	}

	function Ng(a) {
		var b = a.name;
		b || (b = (a = /function\s+([^\(]+)/m.exec(String(a))) ? a[1] : "(Anonymous)");
		return b
	};

	function Og(a, b) {
		a.Td = "function" === typeof b ? b : function() {
			return b
		};
		return a
	}
	var Pg = void 0;

	function Qg() {
		throw Error(y.apply(0, arguments).map(function(a) {
			return "function" === typeof a ? a() : a
		}).filter(function(a) {
			return a
		}).join("\n").trim().replace(/:$/, ""));
	};

	function Wg() {
		var a = Error;
		return Og(function(b) {
			return b instanceof a
		}, function() {
			return Ng(a)
		})
	};

	function Xg(a, b, c) {
		c = void 0 === c ? null : c;
		var d = new Yb,
			e = void 0,
			f = a.Wa,
			g = d.g(O(function() {
				return e ? Object.assign({}, e, {
					timestamp: a.m.now()
				}) : null
			}), Q(function(k) {
				return null !== k
			}), O(function(k) {
				return k
			}));
		b = Ec([Rc(f, g), b]);
		var h = c;
		return b.g(Q(function(k) {
			k = v(k).next().value;
			null === h && (h = k.value.ja);
			return k.value.ja === h
		}), we(function(k) {
			return void(e = v(k).next().value)
		}), O(function(k) {
			var l = v(k);
			k = l.next().value;
			l = l.next().value;
			try {
				var n = k.value.data,
					w = k.timestamp,
					p = n.viewport,
					t, z, E = Object.assign({},
						p, {
							width: null != (t = null == p ? void 0 : p.width) ? t : 0,
							height: null != (z = null == p ? void 0 : p.height) ? z : 0,
							x: 0,
							y: 0,
							Cj: p ? p.width * p.height : 0
						}),
					F = Yg(E),
					u = n.adView,
					B = u.measuringElement && u.containerGeometry ? Yg(u.containerGeometry) : Yg(u.geometry),
					D = Yg(u.geometry),
					K = u.reasons.some(Gg),
					I = K ? Kg : Yg(u.onScreenGeometry),
					G;
				l && (G = u.percentageInView / 100);
				l && K && (G = 0);
				return {
					timestamp: w,
					value: {
						ib: "omid",
						pb: B,
						Da: F,
						qa: d,
						va: "omid",
						oa: D,
						Eb: {
							x: B.left,
							y: B.top
						},
						xa: I,
						Ob: G
					}
				}
			} catch (L) {
				z = L;
				n = Wg();
				w = Pg;
				Pg = void 0;
				p = [];
				t = n(z, p);
				!t && p && (z = "Expected " +
					n.Td() + ", got " + Mg(z), p.push(z));
				t || Qg.apply(null, [void 0, w, "Guard " + n.Td() + " failed:"].concat(ma(p.reverse())));
				var ba, fa;
				n = null != (fa = null == (ba = L) ? void 0 : ba.message) ? fa : "An unknown error occurred";
				ba = "Error while processing geometryChange event: " + JSON.stringify(k.value) + "; " + n;
				throw Error(ba);
			}
		}), ge(1), jc())
	}

	function Yg(a) {
		var b, c, d, e;
		return {
			left: Math.floor(null != (b = null == a ? void 0 : a.x) ? b : 0),
			top: Math.floor(null != (c = null == a ? void 0 : a.y) ? c : 0),
			width: Math.floor(null != (d = null == a ? void 0 : a.width) ? d : 0),
			height: Math.floor(null != (e = null == a ? void 0 : a.height) ? e : 0)
		}
	};
	var Zg = {
		ib: "ns",
		pb: Kg,
		Da: Kg,
		qa: new Yb,
		va: "ns",
		oa: Kg,
		xa: Kg,
		Eb: {
			x: 0,
			y: 0
		}
	};

	function $g(a, b) {
		return Lg(a.Da, b.Da) && Lg(a.oa, b.oa) && Lg(a.pb, b.pb) && Lg(a.xa, b.xa) && a.va === b.va && a.qa === b.qa && a.ib === b.ib && a.Eb.x === b.Eb.x && a.Eb.y === b.Eb.y
	};

	function ah(a) {
		return function(b) {
			var c;
			return b.g(we(function(d) {
				return void(c = d.timestamp)
			}), O(function(d) {
				return d.value
			}), a, O(function(d) {
				return {
					timestamp: c,
					value: d
				}
			}))
		}
	};
	var bh = function(a) {
			return a.xa.width * a.xa.height / (a.oa.width * a.oa.height)
		},
		ch = ah(J(O(function(a) {
			var b;
			return null != (b = a.Ob) ? b : bh(a)
		}), O(function(a) {
			return isFinite(a) ? a : 0
		}))),
		dh = ah(J(O(function(a) {
			var b;
			return null != (b = a.Ob) ? b : bh(a)
		}), O(function(a) {
			return isFinite(a) ? a : -1
		})));
	var fh = function(a, b, c, d, e) {
			this.m = b;
			this.Ic = c;
			this.Wh = d;
			this.cf = e;
			this.Kb = this.Pb = !1;
			this.setTime = b.now();
			this.id = (this.Pb = a) ? 0 : eh(this)
		},
		eh = function(a) {
			return a.m.setTimeout(function() {
				try {
					a.Wh()
				} finally {
					a.Kb = !0, a.cf()
				}
			}, a.Ic)
		};
	fh.prototype.clear = function() {
		this.Kb || this.m.clearTimeout(this.id)
	};
	fh.prototype.freeze = function(a) {
		this.Pb || this.Kb || (a = Ed(a, this.setTime), this.Ic = Math.max(0, this.Ic - a), this.m.clearTimeout(this.id), this.Pb = !0)
	};
	var gh = function(a) {
			this.me = a;
			this.timeline = Symbol();
			this.yc = 0;
			this.isFrozen = !1;
			this.Zf = 0;
			this.Oa = {};
			this.Wc = a.now()
		},
		hh = function(a, b) {
			Object.values(a.Oa).forEach(function(c) {
				return void c.freeze(b)
			})
		},
		ih = function(a) {
			Object.values(a.Oa).forEach(function(b) {
				b.Pb && !b.Kb && (b.setTime = b.m.now(), b.id = eh(b))
			})
		};
	gh.prototype.setTimeout = function(a, b) {
		var c = this,
			d = ++this.Zf;
		this.Oa[d] = new fh(this.isFrozen, this.me, b, a, function() {
			return void delete c.Oa[d]
		});
		return d
	};
	gh.prototype.clearTimeout = function(a) {
		this.Oa[a] && (this.Oa[a].clear(), delete this.Oa[a])
	};
	gh.prototype.interval = function(a, b) {
		var c = this.Rc(a).subscribe(b);
		return function() {
			return void c.unsubscribe()
		}
	};
	gh.prototype.Rc = function(a) {
		return Ge(this, a).g(he(), V(function(b) {
			return b + 1
		}, -1))
	};
	var jh = function(a, b) {
		var c = a.isFrozen ? Math.max(0, Ed(b, a.Wc)) : 0;
		b = Ed(b, new Dd(0, b.timeline));
		return new Dd(b - a.yc - c, a.timeline)
	};
	gh.prototype.now = function() {
		return jh(this, this.me.now())
	};
	var kh = function(a) {
		return O(function(b) {
			var c = b.value;
			return {
				timestamp: jh(a, b.timestamp),
				value: c
			}
		})
	};

	function lh(a, b) {
		var c = new gh(a);
		a = b.subscribe(function(d) {
			c.isFrozen && (c.yc += Math.max(0, Ed(d.timestamp, c.Wc)));
			c.Wc = d.timestamp;
			(c.isFrozen = d.value) ? hh(c, d.timestamp): ih(c)
		});
		return {
			m: c,
			nj: a
		}
	};

	function mh(a, b) {
		return 1 <= a ? !0 : 0 >= a ? !1 : a >= b
	};

	function nh(a) {
		return function(b) {
			return b.g(Ae(a), O(function(c) {
				var d = v(c);
				c = d.next().value;
				d = d.next().value;
				return {
					timestamp: c.timestamp,
					value: mh(c.value, d)
				}
			}))
		}
	};
	var oh = O(function(a) {
		if ("omid" === a.value.ib) {
			if ("nio" === a.value.va) return "omio";
			if ("geo" === a.value.va) return "omgeo"
		}
		return "geo" === a.value.va || "nio" === a.value.va ? a.value.ib : a.value.va
	});

	function ph() {
		return J(Q(function(a, b) {
			return 0 < b
		}), qh, W(-1), R())
	}
	var qh = J(Q(function(a) {
		return !isNaN(a)
	}), V(function(a, b) {
		return isNaN(a) ? b : Math.min(a, b)
	}, NaN), R());
	var rh = ah(J(O(function(a) {
		return a.xa.width * a.xa.height / (a.pb.width * a.pb.height)
	}), O(function(a) {
		return isFinite(a) ? Math.min(1, a) : 0
	})));

	function sh(a, b, c) {
		return a ? Ec([b, c]).g(Q(function(d) {
			var e = v(d);
			d = e.next().value;
			e = e.next().value;
			return d.timestamp.equals(e.timestamp)
		}), O(function(d) {
			var e = v(d);
			d = e.next().value;
			e = e.next().value;
			return d.value > e.value ? d : e
		})) : b
	}

	function th(a) {
		return function(b) {
			var c = b.g(ch),
				d = b.g(rh);
			return a instanceof M ? a.g(qe(function(e) {
				return sh(e, c, d)
			})) : sh(a.value, c, d)
		}
	};
	var uh = J(ah(O(function(a) {
		a = a.Ob ? a.Ob * a.oa.width * a.oa.height / (a.Da.width * a.Da.height) : a.xa.width * a.xa.height / (a.Da.width * a.Da.height);
		return isFinite(a) ? a : 0
	})));

	function vh(a, b, c) {
		c = void 0 === c ? function(d, e) {
			return d === e
		} : c;
		return a.timestamp.equals(b.timestamp) && c(a.value, b.value)
	};

	function wh(a, b, c, d) {
		var e = d.Rd,
			f = d.Md,
			g = d.pi,
			h = d.Oe,
			k = d.ee,
			l = d.lg,
			n = d.Wd,
			w = d.yf;
		b = xh(a, c, b);
		c = yh(a, c);
		d = zh(b, w);
		w = Ah(a, e, l, d, w, b);
		var p = w.g(O(function(I) {
				return I.value
			}), R(), Z(a, 1), V(function(I, G) {
				return Math.max(I, G)
			}, 0)),
			t = w.g(O(function(I) {
				return I.value
			}), ph(), Z(a, 1)),
			z = b.g(dh, O(function(I) {
				return I.value
			}), Kd(2), R(), Z(a, 1));
		g = Bh(a, b, g, h);
		var E = g.g(W(!1), R(), O(function(I) {
			return I ? k : f
		}));
		h = w.g(nh(E), R(), Z(a, 1));
		var F = Ec([h, b]).g(Q(function(I) {
				var G = v(I);
				I = G.next().value;
				G = G.next().value;
				return I.timestamp.equals(G.timestamp)
			}),
			O(function(I) {
				var G = v(I);
				I = G.next().value;
				G = G.next().value;
				return {
					visible: I.value,
					geometry: G.value.oa
				}
			}), V(function(I, G) {
				return !G.visible && I.visible ? I : G
			}, {
				visible: !1,
				geometry: Kg
			}), O(function(I) {
				return I.geometry
			}), W(Kg), Z(a, 1), R(Lg));
		l = l instanceof M ? l.g(R(), Ud()) : Tc;
		E = Ec([l, E]).g(Ud());
		var u = b.g(Q(function(I) {
				return "ns" !== I.value.ib && "ns" !== I.value.va
			}), V(function(I) {
				return I + 1
			}, 0), W(0), Z(a, 1)),
			B = c.g(Ud(!0), W(!1), Z(a, 1));
		B = Ec([n, B]).g(O(function(I) {
			var G = v(I);
			I = G.next().value;
			G = G.next().value;
			return I &&
				!G
		}), Z(a, 1));
		var D = b.g(uh, R()),
			K = D.g(O(function(I) {
				return I.value
			}), V(function(I, G) {
				return Math.max(I, G)
			}, 0), R(), Z(a, 1));
		a = D.g(O(function(I) {
			return I.value
		}), ph(), Z(a, 1));
		return {
			Hh: l,
			Ih: E,
			Lf: {
				Gj: b,
				og: b.g(oh),
				La: F.g(R(Lg)),
				visible: h.g(R(vh)),
				hb: w.g(R(vh)),
				kg: p,
				ug: t,
				Cd: b.g(Cg, R(fb)),
				pd: D,
				he: K,
				je: a,
				oj: c,
				qa: b.g(O(function(I) {
					return I.value.qa
				})),
				rj: g,
				Rd: e,
				Wd: n,
				pj: B,
				Oj: u,
				Yc: z,
				Nj: d
			}
		}
	}

	function yh(a, b) {
		return b.g(Q(function() {
			return !1
		}), O(function(c) {
			return c
		}), Hd(function(c) {
			return (new Gf(c)).Ja(a)
		}))
	}

	function xh(a, b, c) {
		return b.g($d(Tc), Z(a, 1)).g(R(function(d, e) {
			return vh(d, e, $g)
		}), W({
			timestamp: c.now(),
			value: Zg
		}), Z(a, 1))
	}

	function Ah(a, b, c, d, e, f) {
		c = f.g(th(c), ah(O(function(g) {
			return xg(g, 2)
		})), Z(a, 1));
		if (b instanceof Gf) return c;
		e = e.g(O(function(g) {
			return g.Qc
		}));
		return Ec([c, b, d, e]).g(O(function(g) {
			var h = v(g);
			g = h.next().value;
			var k = h.next().value,
				l = h.next().value;
			h = 3 === h.next().value && 0 !== (l & 2);
			return {
				timestamp: k.timestamp.maximum(g.timestamp),
				value: k.value || h ? 0 : g.value
			}
		}), R(vh), Z(a, 1))
	}

	function Bh(a, b, c, d) {
		b = [b.g(O(function(e) {
			return 242500 <= e.value.oa.width * e.value.oa.height
		}))];
		c instanceof M && b.push(c.g(O(function(e) {
			return !!e
		})));
		c = Ec(b);
		return d ? c.g(O(function(e) {
			return e.some(function(f) {
				return f
			})
		}), W(!1), R(), Z(a, 1)) : (new Gf(!1)).Ja(a)
	}

	function zh(a, b) {
		b = b.g(O(function(d) {
			return d.Qc
		}));
		a = Ec([a, b]).g(O(function(d) {
			var e = v(d);
			d = e.next().value;
			e = e.next().value;
			if (0 !== e && 1 !== e && d.value.isIntersecting) return d.value.sj
		}), R());
		b = a.g(O(function(d) {
			return void 0 === d ? !0 : d
		}), V(function(d, e) {
			return d || !e
		}, !1));
		var c = a.g(V(function(d, e) {
			return void 0 === e ? d : e ? !1 : null != d ? d : !0
		}, void 0), O(function(d) {
			return !!d
		}));
		return Zc(a, b, c).g(O(function(d) {
			var e = v(d);
			d = e.next().value;
			var f = e.next().value;
			e = e.next().value;
			var g = 0;
			if (void 0 === d) return 0;
			d &&
				(g |= 1);
			d || (g |= 2);
			f && (g |= 4);
			e && (g |= 8);
			return g
		}))
	};

	function Ch(a, b, c, d) {
		if (0 === a) return 0;
		var e = [];
		(void 0 === d ? 0 : d) ? c.forEach(function(f, g) {
			e[g] = 0 === g ? f : f + e[g - 1]
		}): e = c;
		b = eb(b, function(f) {
			return f >= a
		});
		return -1 === b ? 0 : e[b]
	};
	var Eh = function(a, b) {
			var c = this;
			this.m = a;
			this.Zc = this.Yb = null;
			this.lh = b.g(R()).subscribe(function(d) {
				Dh(c);
				c.Zc = d
			})
		},
		Fh = function(a, b) {
			Dh(a);
			a.Yb = a.m.setTimeout(function() {
				var c;
				return void(null == (c = a.Zc) ? void 0 : c.next())
			}, b)
		},
		Dh = function(a) {
			null !== a.Yb && a.m.clearTimeout(a.Yb);
			a.Yb = null
		};
	Eh.prototype.Ma = function() {
		Dh(this);
		this.lh.unsubscribe();
		this.Zc = null
	};

	function Gh(a, b, c, d, e, f, g, h, k, l, n, w, p) {
		var t = void 0 === t ? new Eh(b, p) : t;
		var z = Hh(d, e),
			E = Ih(c, d, f, g, h, k, l, n, w);
		return (new M(function(F) {
			var u = Ec([z, E]).g(R(fb), O(function(B) {
				var D = v(B);
				B = D.next().value;
				D = D.next().value;
				if (void 0 === B || void 0 === D) return !1;
				var K = D >= B;
				K ? Dh(t) : Fh(t, Math.max(0, B - D));
				return K
			}), V(function(B, D) {
				return D || B
			}, !1), R()).subscribe(F);
			return function() {
				t.Ma();
				u.unsubscribe()
			}
		})).g(te(function(F) {
			return !F
		}), Z(a, 1))
	}

	function Hh(a, b) {
		return b.g(O(function(c) {
			if (a.nd) return a.nd;
			if (a.Kc) return a.Kc * c
		}))
	}

	function Ih(a, b, c, d, e, f, g, h, k) {
		return Ec([c, d, e, f, g, h, k]).g(O(function(l) {
			var n = v(l);
			l = n.next().value;
			var w = n.next().value,
				p = n.next().value,
				t = n.next().value,
				z = n.next().value,
				E = n.next().value;
			n = n.next().value;
			return void 0 !== b.ea ? "mtos" === b.od ? b.audible ? Ch(b.ea, a, l, !0) : Ch(b.ea, a, z) : b.audible ? Ch(b.ea, a, w) : Ch(b.ea, a, E, !0) : "mtos" === b.od ? b.audible ? p : n : b.audible ? t : n
		}))
	};

	function Jh(a, b, c, d, e) {
		var f = void 0 === f ? new Eh(b, e) : f;
		return (new M(function(g) {
			var h = Ec([c, d]).g(R(fb), O(function(k) {
				var l = v(k);
				k = l.next().value;
				l = l.next().value;
				var n = k >= l;
				n ? Dh(f) : Fh(f, Math.max(0, l - k));
				return n
			}), V(function(k, l) {
				return l || k
			}, !1), R()).subscribe(g);
			return function() {
				f.Ma();
				h.unsubscribe()
			}
		})).g(te(function(g) {
			return !g
		}), Z(a, 1))
	};

	function Kh(a, b, c, d) {
		var e = Lh.Vh;
		var f = void 0 === f ? new Eh(b, c) : f;
		return (new M(function(g) {
			var h = Tc.g(W(void 0), qe(function() {
				return Mh(d)
			})).g(O(function(k) {
				var l = k.value;
				k = k.timestamp;
				var n = l.visible;
				l = l.Lb;
				var w = l >= e;
				w || !n ? Dh(f) : (k = Math.max(0, Ed(b.now(), k)), Fh(f, Math.max(0, e - l - k)));
				return w
			}), V(function(k, l) {
				return l || k
			}, !1), R()).subscribe(g);
			return function() {
				f.Ma();
				h.unsubscribe()
			}
		})).g(te(function(g) {
			return !g
		}), Z(a, 1))
	}

	function Mh(a) {
		return yg([a, a.g(Eg())]).g(O(function(b) {
			var c = v(b);
			b = c.next().value;
			c = c.next().value;
			return {
				timestamp: b.timestamp,
				value: {
					visible: b.value,
					Lb: c.value
				}
			}
		}), R(function(b, c) {
			return vh(b, c, function(d, e) {
				return d.Lb === e.Lb && d.visible === e.visible
			})
		}))
	};

	function Nh() {
		return J(Bg(), V(function(a, b) {
			return Math.max(a, b)
		}, 0), O(function(a) {
			return Math.round(a)
		}))
	};

	function Oh(a) {
		return J(nh(ec(a)), Nh())
	};

	function Ph(a, b) {
		a = b.g(O(function(c) {
			return Ed(c.timestamp, new Dd(0, c.timestamp.timeline))
		}), W(0), R(), Z(a, 2));
		b = a.g(de(), O(function(c) {
			return c[1] - c[0]
		}), V(function(c, d) {
			return c + (0 > d ? -d : 0)
		}, 0), W(0), R());
		return {
			mediaTime: a,
			yg: b
		}
	};
	var Qh = function() {
			this.Od = {}
		},
		Rh = function(a, b) {
			a = a.Od[b.key];
			if ("proto" === b.valueType) {
				try {
					var c = JSON.parse(a);
					if (Array.isArray(c)) return c
				} catch (d) {}
				return b.defaultValue
			}
			return typeof a === typeof b.defaultValue ? a : b.defaultValue
		};

	function Sh(a) {
		var b = new Qh;
		return J(O(function(c) {
			if (null === c) return null;
			try {
				var d = JSON.parse(c)[0];
				c = "";
				for (var e = 0; e < d.length; e++) c += String.fromCharCode(d.charCodeAt(e) ^ "\u0003\u0007\u0003\u0007\b\u0004\u0004\u0006\u0005\u0003".charCodeAt(e % 10));
				b.Od = JSON.parse(c)
			} catch (f) {}
			return b
		}), Z(a.h, 1))
	};
	var Th = zb() ? !1 : yb("Trident") || yb("MSIE");
	!yb("Android") || Ab();
	Ab();
	yb("Safari") && (Ab() || (zb() ? 0 : yb("Coast")) || (zb() ? 0 : yb("Opera")) || (zb() ? 0 : yb("Edge")) || (zb() ? xb("Microsoft Edge") : yb("Edg/")) || zb() && xb("Opera"));
	var Uh = {},
		Vh = null,
		Xh = function(a) {
			var b = "";
			Wh(a, function(c) {
				b += String.fromCharCode(c)
			});
			return b
		},
		Wh = function(a, b) {
			function c(k) {
				for (; d < a.length;) {
					var l = a.charAt(d++),
						n = Vh[l];
					if (null != n) return n;
					if (!/^[\s\xa0]*$/.test(l)) throw Error("O`" + l);
				}
				return k
			}
			Yh();
			for (var d = 0;;) {
				var e = c(-1),
					f = c(0),
					g = c(64),
					h = c(64);
				if (64 === h && -1 === e) break;
				b(e << 2 | f >> 4);
				64 != g && (b(f << 4 & 240 | g >> 2), 64 != h && b(g << 6 & 192 | h))
			}
		},
		Yh = function() {
			if (!Vh) {
				Vh = {};
				for (var a = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""),
						b = ["+/=", "+/", "-_=", "-_.", "-_"], c = 0; 5 > c; c++) {
					var d = a.concat(b[c].split(""));
					Uh[c] = d;
					for (var e = 0; e < d.length; e++) {
						var f = d[e],
							g = Vh[f];
						void 0 === g ? Vh[f] = e : A(g === e)
					}
				}
			}
		};

	function Zh(a) {
		return J(O(function(b) {
			if (void 0 === b.activeview_flags) return null;
			try {
				return Xh(b.activeview_flags)
			} catch (c) {
				return b.activeview_flags
			}
		}), Sh(a))
	};
	var $h = {
		Pi: "start",
		vi: "firstquartile",
		Hi: "midpoint",
		Ri: "thirdquartile",
		si: "complete",
		xi: "fullscreen",
		Ji: "mute",
		Vi: "unmute",
		Mi: "pause",
		Ni: "resume",
		Wi: "verification_debug",
		Gi: "measurable_impression",
		Xi: "viewable_impression",
		yi: "fully_viewable_audible_half_duration_impression",
		Oi: "skip"
	};

	function ai(a) {
		if ("object" !== typeof a) return !1;
		var b = a.tracking_events;
		if (void 0 !== b && !bi(b)) return !1;
		a = a.custom_metric_configurations;
		return void 0 === a || Array.isArray(a) && !a.some(function(c) {
			return !ci(c)
		}) ? !0 : !1
	}

	function bi(a) {
		return "object" !== typeof a ? !1 : Object.keys(a).every(function(b) {
			return Array.isArray(a[b]) && a[b].every(function(c) {
				return "string" === typeof c
			})
		})
	}

	function ci(a) {
		return "object" !== typeof a || void 0 !== a.id && "number" !== typeof a.id || void 0 !== a.name && "string" !== typeof a.name || void 0 !== a.criteria && (!Array.isArray(a.criteria) || a.criteria.some(function(b) {
			return "string" !== typeof b
		})) ? !1 : !0
	}

	function di() {
		return J(O(function(a) {
			if (void 0 === a) throw new Bd("undefined");
			var b = JSON.parse(a);
			if ("object" !== typeof b) var c = !1;
			else {
				c = b.activeview_metadata;
				var d = b.activeview_flags,
					e = b.tracking_configuration;
				c = void 0 !== c && "string" !== typeof c || void 0 !== d && "string" !== typeof d || void 0 !== e && !ai(e) ? !1 : !0
			}
			if (c) return b;
			throw new Bd(a);
		}), Hd(function(a) {
			if (a instanceof Bd) throw a;
			throw new Bd("json parse failure");
		}), Q(function(a) {
			return null !== a
		}), O(function(a) {
			return ei(a)
		}))
	}

	function fi(a) {
		return J(O(function(b) {
			return gi(b, a)
		}))
	}

	function gi(a, b) {
		var c;
		a = null == (c = a.tracking_configuration) ? void 0 : c.tracking_events;
		if (void 0 === b || void 0 === a) return [];
		var d;
		return null != (d = a[b]) ? d : []
	}

	function ei(a) {
		"%%ACTIVEVIEW_METADATA%%" === a.activeview_metadata && (a.activeview_metadata = "");
		"%%ACTIVEVIEW_FLAGS%%" === a.activeview_flags && (a.activeview_flags = "");
		var b, c = null == (b = a.tracking_configuration) ? void 0 : b.tracking_events;
		if (void 0 !== c) {
			b = Object.keys(c).filter(function(f) {
				return !Object.values($h).includes(f)
			});
			b = v(b);
			for (var d = b.next(); !d.done; d = b.next()) d = d.value, d.startsWith("custom_metric_viewable_") || delete c[d]
		}
		var e;
		c = null == (e = a.tracking_configuration) ? void 0 : e.custom_metric_configurations;
		void 0 !== c && (a.tracking_configuration.custom_metric_configurations = hi(c));
		return a
	}

	function hi(a) {
		a = a.filter(function(c) {
			return c.id && c.name && c.criteria
		}).map(function(c) {
			return {
				id: c.id,
				name: c.name,
				criteria: c.criteria.sort()
			}
		}).filter(function(c, d, e) {
			return d === e.findIndex(function(f) {
				return ug(f, c)
			})
		});
		var b = a.filter(function(c, d, e) {
			return d !== e.findIndex(function(f) {
				return f.name === c.name
			})
		}).map(function(c) {
			return c.name
		});
		return a.filter(function(c) {
			return !b.includes(c.name)
		})
	};

	function ii(a, b, c, d) {
		return Ec([b, c, d]).g(Q(function(e) {
			var f = v(e);
			f.next();
			e = f.next().value;
			f = f.next().value;
			return void 0 !== e && e.length === f.length
		}), O(function(e) {
			e = v(e);
			var f = e.next().value,
				g = e.next().value,
				h = e.next().value,
				k = {};
			g.forEach(function(l, n) {
				k[l.name] = h[n] ? gi(f, l.name) : []
			});
			return k
		}), Z(a, 1))
	};

	function ji(a, b, c, d) {
		var e = new Yb,
			f = void 0,
			g = e.g(O(function() {
				return f ? Object.assign({}, f, {
					timestamp: a.m.now()
				}) : null
			}), Q(function(p) {
				return null !== p
			}), O(function(p) {
				return p
			}));
		b = Rc(b, g).g(Q(function(p) {
			return "volumeChange" === p.value.type || "start" === p.value.type
		}), we(function(p) {
			return void(f = p)
		}), ah(J(Ae(c.g(W(!0))), O(function(p) {
			var t = v(p);
			p = t.next().value.data;
			t = t.next().value;
			a: {
				if (null !== p.deviceVolume && void 0 !== p.deviceVolume) t = p.deviceVolume;
				else {
					if (t) {
						p = null;
						break a
					}
					t = 1
				}
				if (null !== p.mediaPlayerVolume &&
					void 0 !== p.mediaPlayerVolume) p = p.mediaPlayerVolume;
				else if (null !== p.videoPlayerVolume && void 0 !== p.videoPlayerVolume) p = p.videoPlayerVolume;
				else {
					p = null;
					break a
				}
				p = xg(t * p, 3)
			}
			return p
		}), Q(function(p) {
			return null !== p
		}), O(function(p) {
			return Math.min(1, Math.max(0, p))
		}), O(function(p) {
			return {
				volume: p,
				qa: e
			}
		}))), d, Z(a.h, 1));
		c = b.g(ah(J(O(function(p) {
			return 0 < p.volume
		}))), Z(a.h, 2));
		d = b.g(O(function(p) {
			return p.value.volume
		}), V(function(p, t) {
			return Math.max(p, t)
		}, 0), R(), Z(a.h, 1));
		g = b.g(O(function(p) {
				return p.value.volume
			}),
			qh, Z(a.h, 1));
		var h = c.g(O(function(p) {
				return p.value
			}), de(), O(function(p) {
				return p[0] && !p[1]
			}), R(), Q(function(p) {
				return p
			}), Z(a.h, 1)),
			k = c.g(O(function(p) {
				return p.value
			}), de(), O(function(p) {
				return !p[0] && p[1]
			}), R(), Q(function(p) {
				return p
			}), Z(a.h, 1)),
			l = h.g(V(function(p) {
				return p + 1
			}, 0), W(0), Z(a.h, 1)),
			n = k.g(V(function(p) {
				return p + 1
			}, 0), W(0), Z(a.h, 1)),
			w = c.g(V(function(p, t) {
				return p && t.value
			}, !0), W(!1), R(), Z(a.h, 1));
		return {
			Ue: {
				lc: b,
				jg: d,
				tg: g,
				kc: c,
				wg: h,
				bi: k,
				ke: l,
				Ce: n,
				Pe: w,
				qa: e
			}
		}
	};
	var ki = {},
		li = (ki.sessionStart = 1, ki.sessionError = 2, ki.sessionFinish = 4, ki.impression = 8, ki.loaded = 16, ki.start = 32, ki.firstQuartile = 64, ki.midpoint = 128, ki.thirdQuartile = 256, ki.complete = 512, ki.pause = 1024, ki.resume = 2048, ki.bufferStart = 4096, ki.bufferFinish = 8192, ki.skipped = 16384, ki.volumeChange = 32768, ki.playerStateChange = 65536, ki.adUserInteraction = 131072, ki.geometryChange = 262144, ki);

	function mi(a, b, c, d, e, f) {
		return Rc(a.g(O(function(g) {
			return g.timestamp
		})), b.g(O(function(g) {
			return g.timestamp
		})), c.g(O(function(g) {
			return g.timestamp
		})), e.g(O(function(g) {
			return g.timestamp
		})), f.g(O(function(g) {
			return g.timestamp
		})), d.g(O(function(g) {
			return g.timestamp
		}))).g(wg())
	}

	function ni(a, b, c, d, e, f) {
		return Rc(a.g(Ud(li.sessionStart)), b.g(Ud(li.sessionFinish)), c.g(Ud(li.impression)), e.g(Ud(li.geometryChange)), f.g(Ud(524288)), d.g(O(function(g) {
			return li[g.value.type]
		}))).g(wg())
	}

	function oi(a, b, c, d, e, f, g) {
		var h = ni(b, c, d, e, f, g),
			k = h.g(V(function(l, n) {
				return l | n
			}, 0));
		b = mi(b, c, d, e, f, g);
		return yg([h, k, b]).g(O(function(l) {
			var n = v(l);
			l = n.next().value;
			var w = n.next().value;
			n = n.next().value;
			return {
				oe: l,
				oeb: w,
				oet: +n.toString(),
				oept: Date.now()
			}
		}), Z(a.h, 1))
	};

	function pi(a, b, c) {
		var d = b.g(O(function(p) {
				var t, z;
				return null == (t = p.value.data.context) ? void 0 : null == (z = t.app) ? void 0 : z.libraryVersion
			}), wg(), Z(a.h, 1)),
			e = b.g(O(function(p) {
				var t, z;
				return null == (t = p.value.data.context) ? void 0 : null == (z = t.app) ? void 0 : z.appId
			}), wg(), Z(a.h, 1)),
			f = b.g(O(function(p) {
				var t;
				return null == (t = p.value.data.context) ? void 0 : t.adSessionType
			}), O(function(p) {
				return "html" === p ? "h" : "native" === p ? "n" : "javascript" === p ? "j" : "x"
			}), Q(function(p) {
				return "x" !== p
			}), Z(a.h, 1)),
			g = b.g(O(function(p) {
				var t;
				return null == (t = p.value.data.context) ? void 0 : t.accessMode
			}), O(function(p) {
				return "full" === p ? "f" : "domain" === p ? "d" : "limited" === p ? "l" : "x"
			}), Q(function(p) {
				return "x" !== p
			}), Z(a.h, 1)),
			h = b.g(O(function(p) {
				var t;
				return null == (t = p.value.data.context) ? void 0 : t.environment
			}), wg(), O(function(p) {
				return "app" === p
			}), Z(a.h, 1)),
			k = b.g(O(function(p) {
				var t, z, E, F, u;
				return null != (u = null == (t = p.value.data.context) ? void 0 : null == (z = t.omidNativeInfo) ? void 0 : z.partnerName) ? u : null == (E = p.value.data.context) ? void 0 : null == (F = E.omidJsInfo) ?
					void 0 : F.partnerName
			}), wg(), Z(a.h, 1)),
			l = b.g(O(function(p) {
				var t, z, E, F, u;
				return null != (u = null == (t = p.value.data.context) ? void 0 : null == (z = t.omidNativeInfo) ? void 0 : z.partnerVersion) ? u : null == (E = p.value.data.context) ? void 0 : null == (F = E.omidJsInfo) ? void 0 : F.partnerVersion
			}), wg(), Z(a.h, 1));
		c = c.g(Q(function(p) {
			return "impression" === p.value.type || "loaded" === p.value.type
		}), O(function(p) {
			return p.value.data
		}), Ae(f.g(W("x"))), O(function(p) {
			var t = v(p);
			p = t.next().value;
			t = t.next().value;
			if (void 0 !== p.hf) return p.hf;
			if (void 0 !== p.mediaType) return "video" === p.mediaType ? "video" : "n" === t ? "nativeDisplay" : "htmlDisplay"
		}), Q(function(p) {
			return void 0 !== p
		}), Kd(1), Z(a.h, 1));
		var n = b.g(O(function(p) {
				var t;
				return null == (t = p.value.data.context) ? void 0 : t.deviceCategory
			}), wg(), Z(a.h, 1)),
			w = b.g(O(function(p) {
				var t;
				return null == (t = p.value.data.lastActivity) ? void 0 : t.timestamp
			}), wg(), Z(a.h, 1));
		a = b.g(O(function(p) {
			var t;
			if (null != (t = p.value.data.lastActivity) && t.timestamp && p.timestamp) {
				var z;
				t = new Dd(null == (z = p.value.data.lastActivity) ?
					void 0 : z.timestamp, p.timestamp.timeline);
				return Math.round(Ed(p.timestamp, t) / 1E3)
			}
		}), wg(), Z(a.h, 1));
		return {
			Mg: d,
			Eg: e,
			Lg: f,
			Dg: g,
			le: h,
			Jg: k,
			Kg: l,
			Fg: c,
			Gg: n,
			Ig: w,
			Hg: a
		}
	};
	var qi = {
		ui: "visible",
		ri: "audible",
		Si: "time",
		Ti: "timetype"
	};

	function ri(a) {
		try {
			var b = a.toLowerCase().split(",");
			if (b.some(function(n) {
					return n && Object.values(qi).every(function(w) {
						return !n.includes(w)
					})
				})) return null;
			a = {
				od: "tos"
			};
			var c = b.filter(function(n) {
				return n.includes("visible=")
			});
			if (1 < c.length) return null;
			if (1 === c.length) {
				var d = Number(c[0].toLowerCase().split("=")[1]);
				if (isNaN(d) || !isFinite(d) || 0 > d || 100 < d || !Number.isInteger(d)) return null;
				a.ea = d / 100
			}
			var e = b.filter(function(n) {
				return n.includes("audible=")
			});
			if (1 < e.length) return null;
			if (1 === e.length) {
				var f =
					e[0].toLowerCase().split("=");
				if (["0", "1"].includes(f[1])) a.audible = "1" === f[1];
				else return null
			}
			var g = b.filter(function(n) {
				return n.includes("timetype=")
			});
			if (1 < g.length) return null;
			if (1 === g.length) {
				var h = g[0].toLowerCase().split("=");
				if (["mtos", "tos"].includes(h[1])) a.od = h[1];
				else return null
			}
			var k = b.filter(function(n) {
				return n.includes("time=")
			});
			if (1 < k.length) return null;
			if (1 === k.length) {
				var l = k[0].toLowerCase().split("=");
				if (/^(100|[0-9]{1,2})%$/.test(l[1]) || /^([0-9])+ms$/.test(l[1])) l[1].includes("ms") ?
					a.nd = Math.floor(Number(l[1].split("ms")[0])) : a.Kc = Math.floor(Number(l[1].split("%")[0])) / 100;
				else return null
			}
			return a.nd || a.Kc ? a : null
		} catch (n) {
			return null
		}
	};

	function si(a) {
		return {
			id: a.id,
			name: a.name,
			criteria: a.criteria.map(function(b) {
				return ri(b)
			})
		}
	};

	function ti(a, b, c, d) {
		var e = b.g(O(function(g) {
				return Math.floor(g / 1E3)
			}), Q(function(g) {
				return 32 >= g
			}), O(function(g) {
				return 1 << g
			}), V(function(g, h) {
				return g | h
			}, 0), R(), Z(a, 1)),
			f = b.g(O(function(g) {
				return Math.floor(g / 1E3)
			}), Q(function(g) {
				return 32 >= g
			}), Ae(c), O(function(g) {
				var h = v(g);
				g = h.next().value;
				h = h.next().value;
				return [1 << g, mh(h.value, .5)]
			}), V(function(g, h) {
				h = v(h);
				var k = h.next().value;
				return h.next().value ? g | k : g & ~k
			}, 0), R(), Z(a, 1));
		c = b.g(O(function(g) {
			return Math.floor(g / 1E3)
		}), Q(function(g) {
			return 32 >=
				g
		}), Ae(c), O(function(g) {
			var h = v(g);
			g = h.next().value;
			h = h.next().value;
			return [1 << g, mh(h.value, 1)]
		}), V(function(g, h) {
			h = v(h);
			var k = h.next().value;
			return h.next().value ? g | k : g & ~k
		}, 0), R(), Z(a, 1));
		a = Jf(a, [b, d]).g(Q(function(g) {
			var h = v(g);
			g = h.next().value;
			h = h.next().value;
			return void 0 !== g && void 0 !== h
		}), R(function(g, h) {
			g = v(g).next().value;
			h = v(h).next().value;
			return g === h
		}), O(function(g) {
			var h = v(g);
			g = h.next().value;
			h = h.next().value;
			return [Math.floor(g / 1E3), h.value]
		}), Q(function(g) {
			g = v(g);
			var h = g.next().value;
			g.next();
			return 32 >= h
		}), O(function(g) {
			var h = v(g);
			g = h.next().value;
			h = h.next().value;
			return [1 << g, h]
		}), V(function(g, h) {
			h = v(h);
			var k = h.next().value;
			return h.next().value ? g | k : g & ~k
		}, 0), R(), Z(a, 1));
		return {
			Tg: e,
			Ug: f,
			Sg: c,
			Rg: a
		}
	};

	function ui(a, b, c) {
		var d = b.g(Q(function(h) {
				return "pause" === h.value.type
			}), O(function(h) {
				return {
					timestamp: h.timestamp,
					value: "pause"
				}
			})),
			e = b.g(Q(function(h) {
				return "resume" === h.value.type
			}), O(function(h) {
				return {
					timestamp: h.timestamp,
					value: "resume"
				}
			})),
			f = b.g(Q(function(h) {
				return "start" === h.value.type
			}), O(function(h) {
				return {
					timestamp: h.timestamp,
					value: "start"
				}
			})),
			g = Ec([b, c]).g(Q(function(h) {
				h = v(h);
				var k = h.next().value;
				return h.next().value && "bufferStart" === k.value.type
			}), O(function(h) {
				return {
					timestamp: v(h).next().value.timestamp,
					value: "bufferStart"
				}
			}));
		b = Ec([b, c]).g(Q(function(h) {
			h = v(h);
			var k = h.next().value;
			return h.next().value && "bufferFinish" === k.value.type
		}), O(function(h) {
			return {
				timestamp: v(h).next().value.timestamp,
				value: "bufferFinish"
			}
		}));
		d = Rc(d, g, f, e, b).g(V(function(h, k) {
			return {
				timestamp: k.timestamp,
				value: 0 === h.value ? "start" === k.value ? 2 : 0 : "pause" === k.value || "bufferStart" === k.value ? 1 : 2
			}
		}, {
			timestamp: a.m.now(),
			value: 0
		}), W({
			timestamp: a.m.now(),
			value: 0
		}), Z(a.h, 2));
		e = d.g(O(function(h) {
			return h.value
		}), de(), O(function(h) {
			return 1 !==
				h[0] && 1 === h[1]
		}), R(), Q(function(h) {
			return h
		}), Z(a.h, 1));
		f = e.g(V(function(h) {
			return h + 1
		}, 0), W(0), Z(a.h, 1));
		g = d.g(O(function(h) {
			return h.value
		}), de(), O(function(h) {
			return 1 === h[0] && 2 === h[1]
		}), R(), Q(function(h) {
			return h
		}), Z(a.h, 1));
		a = g.g(V(function(h) {
			return h + 1
		}, 0), W(0), Z(a.h, 1));
		return {
			Wg: {
				Bj: e,
				ac: f,
				Kj: g,
				cc: a,
				Be: d
			}
		}
	};

	function vi(a, b, c) {
		b = b.g(Q(function(e) {
			return "playerStateChange" === e.value.type
		}), O(function(e) {
			return {
				timestamp: e.timestamp,
				value: e.value.data.state
			}
		}), W({
			timestamp: a.m.now(),
			value: "normal"
		}), c, Z(a.h, 2));
		c = b.g(ah(J(de(), O(function(e) {
			return "fullscreen" !== e[0] && "fullscreen" === e[1]
		}), R(), Q(function(e) {
			return e
		}))), Z(a.h, 1));
		var d = c.g(O(function(e) {
			return e.value
		}), Z(a.h, 1));
		a = d.g(V(function(e) {
			return e + 1
		}, 0), W(0), Z(a.h, 1));
		return {
			Xg: {
				Zh: b,
				If: d,
				Lc: a,
				Yh: c
			}
		}
	};

	function wi(a, b, c, d, e) {
		var f = xi,
			g = b.g(W(void 0), qe(function() {
				return e.g(Dg(Oh, f), W([0, 0, 0, 0, 0]), R(fb))
			}), Z(a, 1)),
			h = b.g(W(void 0), qe(function() {
				return e.g(O(function(n) {
					return n.value
				}), V(function(n, w) {
					return Math.max(n, w)
				}, 0), W(0), R())
			}), Z(a, 1)),
			k = b.g(W(void 0), qe(function() {
				return c.g(O(function(n) {
					return n.value
				}), qh, W(-1), R())
			}), Z(a, 1)),
			l = b.g(W(void 0), qe(function() {
				return c.g(O(function(n) {
					return n.value
				}), V(function(n, w) {
					return Math.max(n, w)
				}, 0), W(0), R())
			}), Z(a, 1));
		a = b.g(W(void 0), qe(function() {
			return d.g(V(function(n,
				w) {
				return n && w.value
			}, !0), W(!1), R())
		}), Z(a, 1));
		return {
			pe: g,
			Ej: h,
			re: k,
			qe: l,
			ne: a
		}
	};

	function yi(a, b, c) {
		return Object.assign.apply(Object, [{}].concat(ma(Object.keys(c).map(function(d) {
			var e = c[d];
			if (e instanceof Gf) {
				var f = {};
				return f[d] = zi(a, e.Ja(a), b).g(Z(a, 1)), f
			}
			f = {};
			return f[d] = zi(a, e, b).g(Z(a, 1)), f
		}))))
	}

	function zi(a, b, c) {
		return Jf(a, [c, b]).g(Q(function(d) {
			d = v(d);
			var e = d.next().value;
			d.next();
			return void 0 !== e
		}), R(function(d, e) {
			d = v(d).next().value;
			return v(e).next().value === d
		}), O(function(d) {
			var e = v(d);
			d = e.next().value;
			e = e.next().value;
			var f = {};
			return f[d] = e, f
		}), V(function(d, e) {
			return Object.assign({}, d, e)
		}, {}), Z(a, 1))
	};
	var Ai;
	Ai = ["av.key", "js", "20231101"].slice(-1)[0].substring(0, 8);

	function Bi(a, b, c) {
		var d;
		return b.g(R(), qe(function(e) {
			return c.g(O(function() {
				if (!d) {
					d = !0;
					try {
						e.next()
					} finally {
						d = !1
					}
				}
				return !0
			}))
		}), W(!1), Z(a.h, 1))
	};

	function Ci(a) {
		return J(ah(O(function(b) {
			return mh(b, a)
		})), Ag(), O(function(b) {
			return Math.round(b)
		}))
	};

	function Di(a, b, c, d, e, f) {
		if (1 < f.length)
			for (var g = 0; g < f.length - 1; g++)
				if (f[g] < f[g + 1]) throw Error();
		g = e.g(W(void 0), qe(function() {
			return c.g(Eg())
		}), R(), Z(a, 1));
		e = e.g(W(void 0), qe(function() {
			return c.g(Nh())
		}), R(), Z(a, 1));
		return {
			Ga: d.g(W(void 0), qe(function() {
				return b.g(Dg(Oh, f))
			}), R(fb), Z(a, 1)),
			jc: d.g(W(void 0), qe(function() {
				return b.g(Dg(Ci, f), O(function(h) {
					return h.map(function(k, l) {
						return 0 < l ? k - h[l - 1] : k
					})
				}))
			}), R(fb), Z(a, 1)),
			eg: e,
			Lb: g.g(R(vh), Z(a, 1))
		}
	};

	function Ei(a, b, c, d, e, f, g, h, k, l, n, w, p, t, z, E, F) {
		c = Jf(a, [E, b, c, d, e, f, g, h, k, l, n, w, p, t, z]).g(Q(function(u) {
			return !!v(u).next().value
		}), O(function(u) {
			var B = v(u);
			B.next();
			u = B.next().value;
			var D = B.next().value,
				K = B.next().value,
				I = B.next().value,
				G = B.next().value,
				ba = B.next().value,
				fa = B.next().value,
				L = B.next().value,
				T = B.next().value,
				U = B.next().value,
				ca = B.next().value,
				ie = B.next().value,
				je = B.next().value;
			B = B.next().value;
			var X = 0,
				Y = 0;
			u && (X |= 1, Y |= 0);
			D && (X |= 0, Y |= 1);
			void 0 !== I && (X |= 2, Y |= 2, I ? (X |= 4, Y |= 4) : (X |= 33554432,
				Y |= 33554432));
			G && (X |= 8, Y |= 8);
			void 0 !== ba && (X |= 16, Y |= 16);
			ba && (X |= 32, Y |= 32);
			I && ba && (X |= 67108864, Y |= 67108864);
			I && D && (X |= 0, Y |= 64);
			I && u && (X |= 64, Y |= 0);
			K && (X |= 256, Y |= 256);
			fa && (X |= 0, Y |= 512);
			1 === L && (X |= 0, Y |= 1024);
			2 === L && (X |= 0, Y |= 2048);
			T && (X |= 0, Y |= 4096);
			U && (X |= 0, Y |= 8192);
			ca && (X |= 0, Y |= 32768);
			ie && (X |= 0, Y |= 16384);
			je && (X |= 0, Y |= 16777216);
			B && (X |= 134217728, Y |= 134217728);
			return [X, Y]
		}));
		b = c.g(O(function(u) {
			return v(u).next().value
		}), W(0), Z(a, 1));
		c = c.g(O(function(u) {
			u = v(u);
			u.next();
			return u.next().value
		}), V(function(u,
			B) {
			return u | B
		}, 0), W(0), Z(a, 1));
		d = F.g(V(function(u) {
			return u + 1
		}, 0));
		a = Jf(a, [d, F, c]).g(Q(function(u) {
			var B = v(u);
			u = B.next().value;
			var D = B.next().value;
			B = B.next().value;
			return void 0 !== D && void 0 !== B && void 0 !== u
		}), R(function(u, B) {
			u = v(u).next().value;
			return v(B).next().value === u
		}), O(function(u) {
			var B = v(u);
			B.next();
			u = B.next().value;
			B = B.next().value;
			return [u, B]
		}), W(["unknown", 0]), de(), O(function(u) {
			var B = v(u);
			u = v(B.next().value);
			u.next();
			u = u.next().value;
			var D = v(B.next().value);
			B = D.next().value;
			D = D.next().value;
			var K = {};
			return K[B] = D ^ u, K
		}), V(function(u, B) {
			return Object.assign({}, u, B)
		}, {}), Z(a, 1));
		return {
			Na: b,
			jf: c,
			U: a
		}
	};

	function Fi(a, b, c) {
		return Object.assign.apply(Object, [{}].concat(ma(Object.keys(b).map(function(d) {
			var e = {};
			return e[d] = Gi(a, b[d], c), e
		}))))
	}

	function Gi(a, b, c) {
		var d = 0;
		return Jf(a, [c, b]).g(Q(function(e) {
			var f = v(e);
			e = f.next().value;
			f = f.next().value;
			return void 0 !== e && void 0 !== f
		}), R(function(e, f) {
			e = v(e).next().value;
			return v(f).next().value === e
		}), W(["unknown", 0]), de(), O(function(e) {
			var f = v(e);
			e = v(f.next().value);
			e.next();
			e = e.next().value;
			var g = v(f.next().value);
			f = g.next().value;
			g = g.next().value;
			var h = {};
			return h[f] = g - e, h.Bh = ++d, h
		}), V(function(e, f) {
			return Object.assign({}, e, f)
		}, {}), Z(a, 1))
	};

	function Hi(a, b, c, d, e, f, g, h, k, l) {
		var n = xi;
		if (1 < n.length)
			for (var w = 0; w < n.length - 1; w++)
				if (n[w] < n[w + 1]) throw Error();
		if (1 < l.length)
			for (w = 0; w < l.length - 1; w++)
				if (l[w] < l[w + 1]) throw Error();
		k = Di(a, c, e, h, k, n);
		d = d.g(Dg(Ci, l), R(fb), Z(a, 1));
		l = k.jc.g(O(function(D) {
			return Ch(.5, n, D, !0)
		}), Z(a, 1));
		w = k.jc.g(O(function(D) {
			return Ch(1, n, D, !0)
		}), Z(a, 1));
		var p = f.g(Ag(), O(function(D) {
				return Math.round(D)
			}), Z(a, 1)),
			t = e.g(Ag(), O(function(D) {
				return Math.round(D)
			}), Z(a, 1));
		g = g.g(Ag(), O(function(D) {
			return Math.round(D)
		}), Z(a,
			1));
		e = Ec([e, f]).g(O(function(D) {
			var K = v(D);
			D = K.next().value;
			K = K.next().value;
			return {
				timestamp: D.timestamp.maximum(K.timestamp),
				value: !D.value && K.value
			}
		}), Nh(), O(function(D) {
			return Math.round(D)
		}), W(0), R(), Z(a, 1));
		var z = f.g(Nh(), Z(a, 1)),
			E = Ec([c, f]).g(O(function(D) {
				var K = v(D);
				D = K.next().value;
				K = K.next().value;
				return {
					timestamp: D.timestamp.maximum(K.timestamp),
					value: K.value ? D.value : 0
				}
			}), Z(a, 1));
		f = h.g(W(void 0), qe(function() {
			return E.g(Dg(Ci, n))
		}), R(fb), Z(a, 1));
		var F = f.g(O(function(D) {
					return Ch(.5, n, D)
				}),
				Z(a, 1)),
			u = f.g(O(function(D) {
				return Ch(1, n, D)
			}), Z(a, 1)),
			B = E.g(ah(O(function(D) {
				return D >= n[2]
			})), Ag(), O(function(D) {
				return Math.round(D)
			}), Z(a, 1));
		h = h.g(W(void 0), qe(function() {
			return E.g(Dg(Oh, n), O(function(D) {
				return D.map(function(K, I) {
					return 0 < I ? K - D[I - 1] : K
				})
			}))
		}), R(fb), Z(a, 1));
		a = Rc(c, b).g(O(function(D) {
			return {
				timestamp: D.timestamp,
				value: !0
			}
		}), Ag(), O(function(D) {
			return Math.round(D)
		}), W(0), R(), Z(a, 1));
		return Object.assign({}, k, {
			Zi: E,
			Cc: f,
			ge: h,
			dg: z,
			yj: e,
			Bc: p,
			sd: a,
			Qd: g,
			Uh: l,
			Th: w,
			Se: F,
			Re: u,
			Te: B,
			ki: t,
			Ye: d
		})
	};
	var Lh = {
			Vh: 2E3,
			Md: .5,
			ee: .3
		},
		xi = [1, .75, Lh.Md, Lh.ee, 0];

	function Ii(a, b, c, d, e, f, g, h, k, l, n, w, p, t) {
		var z = xi;
		e = Kh(a, c, t, e);
		var E = h.g(O(function(L) {
				return L[0]
			})),
			F = n.g(O(function(L) {
				return 2E3 <= L[0]
			}), W(!1), Z(a, 1)),
			u = b.g(Q(function(L) {
				return "midpoint" === L.value.type
			}), Ud(!0), W(!1), Z(a, 1));
		b = Jf(a, [u, p]).g(Q(function(L) {
			return v(L).next().value
		}), O(function(L) {
			L = v(L);
			L.next();
			return L.next().value
		}), W(0), Z(a, 1));
		var B = Ec([f, b]).g(O(function(L) {
			var T = v(L);
			L = T.next().value;
			T = T.next().value;
			return Math.min(0 < L ? L / 2 : 15E3, 0 < T ? T : 15E3, 15E3)
		}), Z(a, 1));
		b = Jh(a, c, E, B,
			t);
		E = Jf(a, [E, B, u]).g(O(function(L) {
			var T = v(L);
			L = T.next().value;
			var U = T.next().value;
			T = T.next().value;
			return void 0 === L || void 0 === U || void 0 === T ? !1 : L >= U || T
		}), R(), Z(a, 1));
		var D = 0,
			K = 0,
			I = 0,
			G = new gc(1),
			ba = new gc(1),
			fa = new gc(1);
		d = d.g(Q(function(L) {
			return !!L
		}), O(function(L) {
			return L.map(function(T) {
				fa.next(++I);
				T = T.criteria.filter(function(U) {
					return null !== U
				}).map(function(U) {
					return U
				}).map(function(U) {
					return Gh(a, c, z, U, f, g, h, k, l, n, w, p, t)
				});
				return Rc.apply(null, ma(T)).g(Q(function(U) {
					return U
				}), W(!1), we(function(U) {
					U &&
						G.next(++D)
				}), R(), we(function(U) {
					U && ba.next(++K)
				}))
			})
		}), qe(function(L) {
			return Ec(L)
		}), R(), Z(a, 1));
		u = Jf(a, [G.g(Z(a, 1)), ba.g(Z(a, 1)), fa.g(Z(a, 1))]).g(O(function(L) {
			var T = v(L);
			L = T.next().value;
			var U = T.next().value;
			T = T.next().value;
			return {
				tmcr: L,
				tmcf: U,
				tvcf: T
			}
		}), Z(a, 1));
		return {
			Db: e,
			rb: b,
			Nc: E,
			mf: d,
			Yg: F,
			lf: u
		}
	};
	var Ji = {
		Gd: !1,
		Ef: 0,
		Ff: !1,
		rh: !1,
		Gh: !1,
		nf: 0,
		di: !1,
		ei: !1,
		Ah: !1,
		Qc: 0,
		qf: !1,
		Fe: !1,
		Fd: !1,
		Ch: !1
	};
	var Ki = "undefined" !== typeof Uint8Array,
		Li = !Th && "function" === typeof btoa;
	A(!0);
	var Mi = "function" === typeof Symbol && "symbol" === typeof Symbol() ? Symbol("INTERNAL_ARRAY_STATE") : void 0;
	A(13 === Math.round(Math.log2(Math.max.apply(Math, ma(Object.values({
		Fi: 1,
		Di: 2,
		Ci: 4,
		Li: 8,
		Ki: 16,
		Ii: 32,
		ti: 64,
		Ui: 128,
		Bi: 256,
		Ai: 512,
		Ei: 1024,
		wi: 2048,
		Qi: 4096,
		zi: 8192
	}))))));

	function Ni(a) {
		A((a & 16777215) == a)
	}
	var Oi = Mi ? function(a, b) {
		Ni(b);
		Za(a, "state is only maintained on arrays.");
		a[Mi] |= b
	} : function(a, b) {
		Ni(b);
		Za(a, "state is only maintained on arrays.");
		void 0 !== a.Fa ? a.Fa |= b : Object.defineProperties(a, {
			Fa: {
				value: b,
				configurable: !0,
				writable: !0,
				enumerable: !1
			}
		})
	};

	function Pi(a) {
		var b = Qi(a);
		1 !== (b & 1) && (Object.isFrozen(a) && (a = Array.prototype.slice.call(a)), Ri(a, b | 1))
	}
	var Si = Object.getOwnPropertyDescriptor(Array.prototype, "cg");
	Object.defineProperties(Array.prototype, {
		cg: {
			get: function() {
				function a(e, f) {
					e & b && c.push(f)
				}
				var b = Qi(this),
					c = [];
				a(1, "IS_REPEATED_FIELD");
				a(2, "IS_IMMUTABLE_ARRAY");
				a(4, "IS_API_FORMATTED");
				a(4096, "STRING_FORMATTED");
				a(8192, "GBIGINT_FORMATTED");
				a(8, "ONLY_MUTABLE_VALUES");
				a(32, "MUTABLE_REFERENCES_ARE_OWNED");
				a(64, "CONSTRUCTED");
				a(128, "TRANSFERRED");
				a(256, "HAS_SPARSE_OBJECT");
				a(512, "HAS_MESSAGE_ID");
				a(2048, "FROZEN_ARRAY");
				var d = Ti(b);
				536870912 !== d && c.push("pivot: " + d);
				d = c.join(",");
				return Si ? Si.get.call(this) +
					"|" + d : d
			},
			configurable: !0,
			enumerable: !1
		}
	});
	var Qi = Mi ? function(a) {
		Za(a, "state is only maintained on arrays.");
		return a[Mi] | 0
	} : function(a) {
		Za(a, "state is only maintained on arrays.");
		return a.Fa | 0
	};

	function Ui(a, b) {
		A(b & 64, "state for messages must be constructed");
		A(0 === (b & 5), "state for messages should not contain repeated field state");
		var c = Ti(b),
			d = a.length;
		A(c + (+!!(b & 512) - 1) >= d - 1, "pivot %s is pointing at an index earlier than the last index of the array, length: %s", c, d);
		b & 512 && A("string" === typeof a[0], "arrays with a message_id bit must have a string in the first position, got: %s", a[0]);
		a = d ? a[d - 1] : void 0;
		A((null != a && "object" === typeof a && a.constructor === Object) === !!(b & 256), "arraystate and array disagree on sparseObject presence")
	}
	var Vi = Mi ? function(a) {
			Za(a, "state is only maintained on arrays.");
			var b = a[Mi];
			Ui(a, b);
			return b
		} : function(a) {
			Za(a, "state is only maintained on arrays.");
			var b = a.Fa;
			Ui(a, b);
			return b
		},
		Ri = Mi ? function(a, b) {
			Za(a, "state is only maintained on arrays.");
			Ni(b);
			a[Mi] = b
		} : function(a, b) {
			Za(a, "state is only maintained on arrays.");
			Ni(b);
			void 0 !== a.Fa ? a.Fa = b : Object.defineProperties(a, {
				Fa: {
					value: b,
					configurable: !0,
					writable: !0,
					enumerable: !1
				}
			})
		};

	function Wi() {
		var a = [];
		Oi(a, 1);
		return a
	}

	function Xi(a, b) {
		Ri(b, (a | 0) & -14591)
	}

	function Yi(a, b) {
		Ri(b, (a | 34) & -14557)
	}

	function Zi(a, b) {
		Ya(b);
		A(0 < b && 1023 >= b || 536870912 === b);
		return a & -16760833 | (b & 1023) << 14
	}

	function Ti(a) {
		a = a >> 14 & 1023;
		return 0 === a ? 536870912 : a
	};
	var $i, aj = {};

	function bj(a) {
		var b = a.pg === aj;
		A(!$i || b === a instanceof $i);
		return b
	}
	var cj = {};

	function dj(a) {
		var b = !(!a || "object" !== typeof a || a.vj !== cj);
		A(b === a instanceof Map);
		return b && 0 === ab(a, Map).size
	}

	function ej(a, b) {
		Ya(a);
		A(0 < a);
		A(0 === b || -1 === b);
		return a + b
	}

	function fj(a, b) {
		Ya(a);
		A(0 <= a);
		A(0 === b || -1 === b);
		return a - b
	}

	function gj(a) {
		return null !== a && "object" === typeof a && !Array.isArray(a) && a.constructor === Object
	}
	var hj, ij = !ub;

	function jj(a, b, c) {
		if (!Array.isArray(a) || a.length) return !1;
		var d = Qi(a);
		if (d & 1) return !0;
		if (!(b && (Array.isArray(b) ? b.includes(c) : b.has(c)))) return !1;
		Ri(a, d | 1);
		return !0
	}
	var kj, lj = [];
	Ri(lj, 55);
	kj = Object.freeze(lj);

	function mj() {}

	function nj(a) {
		var b = Qi(Za(a));
		A(!(b & 2 && b & 4 || b & 2048) || Object.isFrozen(a));
		var c = !!(b & 8);
		b = !!(b & 16 && b & 32);
		if (c || b) {
			var d, e, f;
			a.forEach(function(g) {
				Array.isArray(g) ? f = !0 : g && bj(g) && (Qi(g.aa) & 2 ? e = !0 : d = !0)
			});
			f && A(!e && !d);
			b && A(!f && !d);
			c && A(!f && !e)
		}
		oj(a)
	}

	function oj(a) {
		var b = Qi(a),
			c = b & 4,
			d = (4096 & b ? 1 : 0) + (8192 & b ? 1 : 0);
		A(c && 1 >= d || !c && 0 === d, "Expected at most 1 type-specific formatting bit, but got " + d + " with state: " + b);
		if (4096 & Qi(a))
			for (b = 0; b < a.length; b++) "string" !== typeof a[b] && Xa("Unexpected element of type " + typeof a[b] + " in string formatted repeated 64-bit int field")
	};
	var pj;
	var qj = function() {
		throw Error("U");
	};
	if ("undefined" != typeof Symbol && "undefined" != typeof Symbol.hasInstance) {
		var rj = function() {
				throw Error("V");
			},
			sj = {};
		Object.defineProperties(qj, (sj[Symbol.hasInstance] = {
			value: rj,
			configurable: !1,
			writable: !1,
			enumerable: !1
		}, sj));
		A(qj[Symbol.hasInstance] === rj, "defineProperties did not work: was it monkey-patched?")
	};

	function tj(a, b) {
		return uj(b)
	}

	function uj(a) {
		switch (typeof a) {
			case "number":
				return isFinite(a) ? a : String(a);
			case "boolean":
				return a ? 1 : 0;
			case "object":
				if (a) {
					if (Array.isArray(a)) return ij || !jj(a, void 0, 9999) ? a : void 0;
					if (Ki && null != a && a instanceof Uint8Array) {
						if (Li) {
							for (var b = "", c = 0, d = a.length - 10240; c < d;) b += String.fromCharCode.apply(null, a.subarray(c, c += 10240));
							b += String.fromCharCode.apply(null, c ? a.subarray(c) : a);
							a = btoa(b)
						} else {
							A(La(a), "encodeByteArray takes an array as a parameter");
							void 0 === b && (b = 0);
							Yh();
							b = Uh[b];
							c = Array(Math.floor(a.length /
								3));
							d = b[64] || "";
							for (var e = 0, f = 0; e < a.length - 2; e += 3) {
								var g = a[e],
									h = a[e + 1],
									k = a[e + 2],
									l = b[g >> 2];
								g = b[(g & 3) << 4 | h >> 4];
								h = b[(h & 15) << 2 | k >> 6];
								k = b[k & 63];
								c[f++] = "" + l + g + h + k
							}
							l = 0;
							k = d;
							switch (a.length - e) {
								case 2:
									l = a[e + 1], k = b[(l & 15) << 2] || d;
								case 1:
									a = a[e], c[f] = "" + b[a >> 2] + b[(a & 3) << 4 | l >> 4] + k + d
							}
							a = c.join("")
						}
						return a
					}
				}
		}
		return a
	};

	function vj(a, b, c) {
		var d = Array.prototype.slice.call(a),
			e = d.length,
			f = b & 256 ? d[e - 1] : void 0;
		e += f ? -1 : 0;
		for (b = b & 512 ? 1 : 0; b < e; b++) d[b] = c(d[b]);
		if (f) {
			b = d[b] = {};
			for (var g in f) A(!isNaN(g), "should not have non-numeric keys in sparse objects after a constructor is called."), b[g] = c(f[g])
		}
		Za(d);
		Za(a);
		return d
	}

	function wj(a, b, c, d, e, f) {
		if (null != a) {
			if (Array.isArray(a)) a = e && 0 == a.length && Qi(a) & 1 ? void 0 : f && Qi(a) & 2 ? a : xj(a, b, c, void 0 !== d, e, f);
			else if (gj(a)) {
				var g = {},
					h;
				for (h in a) g[h] = wj(a[h], b, c, d, e, f);
				a = g
			} else a = b(a, d);
			return a
		}
	}

	function xj(a, b, c, d, e, f) {
		var g = d || c ? Qi(a) : 0;
		d = d ? !!(g & 32) : void 0;
		for (var h = Array.prototype.slice.call(a), k = 0; k < h.length; k++) h[k] = wj(h[k], b, c, d, e, f);
		c && (Za(h), Za(a), c(g, h));
		return h
	}

	function yj(a) {
		return bj(a) ? a.toJSON() : uj(a)
	};

	function zj(a, b, c) {
		c = void 0 === c ? Yi : c;
		if (null != a) {
			if (Ki && a instanceof Uint8Array) return b ? a : new Uint8Array(a);
			if (Array.isArray(a)) {
				var d = Qi(a);
				if (d & 2) return a;
				nj(a);
				b && (b = 0 === d || !!(d & 32) && !(d & 64 || !(d & 16)));
				return b ? (Ri(a, (d | 34) & -12293), a) : xj(a, zj, d & 4 ? Yi : c, !0, !1, !0)
			}
			bj(a) && (A(bj(a)), c = a.aa, d = Vi(c), a = d & 2 ? a : Aj(a, c, d, !0));
			return a
		}
	}

	function Aj(a, b, c, d) {
		a = a.constructor;
		b = Bj(b, c, d);
		A(!!(Qi(b) & 32));
		pj = b;
		b = new a(b);
		pj = void 0;
		return b
	}

	function Bj(a, b, c) {
		var d = c || b & 2 ? Yi : Xi,
			e = !!(b & 32);
		a = vj(a, b, function(f) {
			return zj(f, e, d)
		});
		Oi(a, 32 | (c ? 2 : 0));
		return a
	};
	var Cj = Object.freeze({});
	var Dj = function(a, b, c, d) {
		if (-1 === c) return null;
		if (c >= Ti(b)) {
			if (b & 256) return a[a.length - 1][c]
		} else {
			var e = a.length;
			if (d && b & 256 && (d = a[e - 1][c], null != d)) return d;
			b = ej(c, +!!(b & 512) - 1);
			if (b < e) return a[b]
		}
	};

	function Ej(a, b, c, d) {
		A(!gj(d), "Invalid object passed to a setter");
		var e = Ti(b);
		if (c >= e) {
			A(536870912 !== e);
			var f = b;
			if (b & 256) e = a[a.length - 1];
			else {
				if (null == d) return;
				e = ej(e, +!!(b & 512) - 1);
				A(e >= a.length && Number.isInteger(e) && 4294967295 > e, "Expected sparseObjectIndex (%s) to be >= %s and a valid array index", e, a.length);
				e = a[e] = {};
				f |= 256
			}
			e[c] = d;
			f !== b && Ri(a, f)
		} else a[ej(c, +!!(b & 512) - 1)] = d, b & 256 && (a = a[a.length - 1], c in a && delete a[c])
	}

	function Fj(a, b) {
		if (!a) return a;
		A(Qi(b) & 2 ? !!(Qi(a.aa) & 2) : !0);
		return a
	}
	var Gj = function(a, b, c, d) {
		a = a.aa;
		var e = Vi(a);
		d = Dj(a, e, c, d);
		if (null != d && "object" === typeof d && bj(d)) b = d;
		else if (Array.isArray(d)) {
			var f = Qi(d),
				g = f;
			0 === g && (g |= e & 32);
			g |= e & 2;
			g !== f && Ri(d, g);
			b = new b(d)
		} else b = void 0;
		b !== d && null != b && Ej(a, e, c, b);
		return Fj(b, a)
	};
	if ("undefined" !== typeof Proxy) {
		var Ij = Hj;
		new Proxy({}, {
			getPrototypeOf: Ij,
			setPrototypeOf: Ij,
			isExtensible: Ij,
			preventExtensions: Ij,
			getOwnPropertyDescriptor: Ij,
			defineProperty: Ij,
			has: Ij,
			get: Ij,
			set: Ij,
			deleteProperty: Ij,
			apply: Ij,
			construct: Ij
		})
	}

	function Hj() {
		throw Error("W");
		throw Error();
	};
	var Jj = function(a, b, c) {
		ab(this, Jj, "The message constructor should only be used by subclasses");
		A(this.constructor !== Jj, "Message is an abstract class and cannot be directly constructed");
		a: {
			null == a && (a = pj);pj = void 0;
			if (null != a)
				for (var d = 0; d < a.length; d++) {
					var e = a[d];
					Array.isArray(e) && nj(e)
				}
			if (null == a) d = 96,
			c ? (a = [c], d |= 512) : a = [],
			b && (d = Zi(d, b));
			else {
				if (!Array.isArray(a)) throw Error("P`" + JSON.stringify(a) + "`" + Ka(a));
				if (Object.isFrozen(a) || !Object.isExtensible(a) || Object.isSealed(a)) throw Error("Q");
				d = Qi(a);
				if (d & 64) {
					Ui(a, d);
					break a
				}
				d |= 64;
				if (c && (d |= 512, c !== a[0])) throw Error("R`" + c + "`" + JSON.stringify(a[0]) + "`" + Ka(a[0]));
				b: {
					c = d;
					if (d = a.length)
						if (e = d - 1, gj(a[e])) {
							c |= 256;
							b = fj(e, +!!(c & 512) - 1);
							if (1024 <= b) throw Error("S`" + b);
							d = Zi(c, b);
							break b
						} if (b) {
						b = Math.max(b, fj(d, +!!(c & 512) - 1));
						if (1024 < b) throw Error("T`" + d);
						d = Zi(c, b)
					} else d = c
				}
			}
			Ri(a, d);A(d & 64)
		}
		this.aa = a;
		this.preventPassingToStructuredClone = mj
	};
	m = Jj.prototype;
	m.toJSON = function() {
		if (hj) var a = Kj(this, this.aa, !1);
		else a = this.aa, Za(a), a = xj(a, yj, void 0, void 0, !1, !1), a = Kj(this, a, !0);
		return a
	};
	m.ec = function() {
		hj = !0;
		try {
			return JSON.stringify(this.toJSON(), tj)
		} finally {
			hj = !1
		}
	};
	m.getExtension = function(a) {
		ab(this, a.Df);
		var b = ab(this, Jj);
		b = a.ob ? a.Qb(b, a.ob, a.qb, !0, void 0 !== Cj ? 1 : 2) : a.de ? a.Qb(b, a.qb, !0, void 0 !== Cj ? 1 : 2) : a.Qb(b, a.qb, a.defaultValue, !0);
		return a.qj && null == b ? a.defaultValue : b
	};
	m.hasExtension = function(a) {
		A(!a.de, "repeated extensions don't support hasExtension");
		if (a.ob) a = void 0 !== Gj(this, a.ob, a.qb, !0);
		else {
			A(!a.de, "repeated extensions don't support getExtensionOrUndefined");
			ab(this, a.Df);
			var b = ab(this, Jj);
			a = a.ob ? a.Qb(b, a.ob, a.qb, !0) : a.Qb(b, a.qb, null, !0);
			a = void 0 !== (null === a ? void 0 : a)
		}
		return a
	};
	m.clone = function() {
		var a = ab(this, Jj);
		A(bj(a));
		var b = a.aa;
		return Aj(a, b, Vi(b), !1)
	};
	$i = Jj;
	Jj.prototype.pg = aj;
	Jj.prototype.toString = function() {
		return Kj(this, this.aa, !1).toString()
	};

	function Kj(a, b, c) {
		var d = a.constructor.Hj,
			e = Vi(c ? a.aa : b),
			f = Ti(e),
			g = !1;
		if (d && ij) {
			if (!c) {
				b = Array.prototype.slice.call(b);
				var h;
				if (b.length && gj(h = b[b.length - 1]))
					for (g = 0; g < d.length; g++)
						if (d[g] >= f) {
							Object.assign(b[b.length - 1] = {}, h);
							break
						} g = !0
			}
			f = b;
			c = !c;
			h = Vi(a.aa);
			a = Ti(h);
			h = +!!(h & 512) - 1;
			for (var k, l, n = 0; n < d.length; n++)
				if (l = d[n], l < a) {
					l = ej(l, h);
					var w = f[l];
					null == w ? f[l] = c ? kj : Wi() : c && w !== kj && Pi(w)
				} else k || (w = void 0, f.length && gj(w = f[f.length - 1]) ? k = w : f.push(k = {})), w = k[l], null == k[l] ? k[l] = c ? kj : Wi() : c && w !== kj && Pi(w)
		}
		k =
			b.length;
		if (!k) return b;
		var p;
		if (gj(f = b[k - 1])) {
			a: {
				var t = f;c = {};a = !1;
				for (var z in t) {
					h = t[z];
					if (Array.isArray(h)) {
						n = h;
						if (jj(h, d, +z) || dj(h)) h = null;
						h != n && (a = !0)
					}
					null != h ? c[z] = h : a = !0
				}
				if (a) {
					for (var E in c) {
						t = c;
						break a
					}
					t = null
				}
			}
			t != f && (p = !0);k--
		}
		for (e = +!!(e & 512) - 1; 0 < k; k--) {
			z = k - 1;
			f = b[z];
			if (null != f && !jj(f, d, z - e) && !dj(f)) break;
			var F = !0
		}
		if (!p && !F) return b;
		b = g ? b : Array.prototype.slice.call(b, 0, k);
		g && (b.length = k);
		t && b.push(t);
		return b
	};

	function Lj(a) {
		if (a instanceof Jj) return a.constructor.Zd
	};
	(function() {
		var a = Ia.jspbGetTypeName;
		Ia.jspbGetTypeName = a ? function(b) {
			return a(b) || Lj(b)
		} : Lj
	})();
	var Mj = Jj;
	var Nj = function(a) {
		Mj.call(this, a)
	};
	x(Nj, Mj);
	Nj.Zd = "ads.branding.measurement.client.serving.integrations.active_view.ActiveViewMetadata";
	var Oj = function(a) {
		Mj.call(this, a)
	};
	x(Oj, Mj);
	Oj.Zd = "ads.branding.measurement.client.serving.IntegratorMetadata";
	var Pj = function() {
		this.Hd = new Map
	};
	Pj.prototype.start = function(a, b, c, d) {
		var e = this;
		void 0 === this.hd && a.Zb && (a = a.Zb, this.Ed = d, this.hd = a.we.g(Ef).subscribe(function(f) {
			e.Hd.set(f.Bb, f);
			b(f.Bb, new Oj, Ji)
		}))
	};
	Pj.prototype.Ma = function() {
		var a, b;
		null == (a = this.hd) || null == (b = a.unsubscribe) || b.call(a);
		this.hd = void 0;
		var c;
		null == (c = this.Ed) || c.call(this);
		this.Ed = void 0
	};
	var Qj = J(Q(function(a) {
			return !!a.ka
		}), V(function(a, b) {
			var c;
			return {
				te: !!b.Sf,
				state: null != (c = a.state) ? c : b
			}
		}, {
			te: !1
		}), Q(function(a) {
			return a.te
		})),
		Rj = J(Qj, Kd(1), Rd()),
		Sj = J(Q(function(a) {
			return !!a.Ua && !!a.De && !!a.J && !!a.Sd && !!a.u && !!a.gi
		}), Qj, we(function(a) {
			var b = a.state;
			a = Of(b);
			b.De(Object.assign({}, b, {
				pc: b.J,
				u: b.u,
				Mf: b.Sd
			}), a).forEach(function(c) {
				Ke(b.Ua, c).sendNow()
			})
		}), Kd(1), Rd());
	var kg = J(O(function(a) {
		var b, c, d, e, f, g, h, k, l, n;
		return Object.assign({}, a, {
			ka: a.af,
			J: a.bf,
			event: 4,
			u: a.Nh,
			T: null == (b = a.U) ? void 0 : b.complete,
			R: null == (c = a.F) ? void 0 : c.complete,
			M: null == (d = a.B) ? void 0 : d.complete,
			N: null == (e = a.C) ? void 0 : e.complete,
			O: null == (f = a.D) ? void 0 : f.complete,
			W: null == (g = a.s) ? void 0 : g.complete,
			Y: null == (h = a.I) ? void 0 : h.complete,
			S: null == (k = a.G) ? void 0 : k.complete,
			L: null == (l = a.A) ? void 0 : l.complete,
			X: null == (n = a.H) ? void 0 : n.complete
		})
	}), Sj);
	var ag = function(a) {
		var b = new Set,
			c = [];
		return a.g(Q(function(d) {
			return void 0 !== d.gd
		}), we(function(d) {
			var e = d.gd;
			Object.keys(e).filter(function(f) {
				return 0 < e[f].length
			}).forEach(function(f) {
				b.has(f) || (b.add(f), c.push(f))
			})
		}), Ic(function() {
			for (var d = [], e = {}; 0 < c.length;) e = {
				qd: e.qd
			}, e.qd = c.pop(), d.push(a.g(O(function(f) {
				return function(g) {
					var h, k, l, n, w, p, t, z, E, F;
					return Object.assign({}, g, {
						ka: !0,
						J: g.gd[f.qd],
						event: 21,
						u: g.sa,
						T: null == (h = g.U) ? void 0 : h.custom_viewable,
						R: null == (k = g.F) ? void 0 : k.custom_viewable,
						M: null == (l = g.B) ? void 0 : l.custom_viewable,
						O: null == (n = g.D) ? void 0 : n.custom_viewable,
						N: null == (w = g.C) ? void 0 : w.custom_viewable,
						W: null == (p = g.s) ? void 0 : p.custom_viewable,
						Y: null == (t = g.I) ? void 0 : t.custom_viewable,
						S: null == (z = g.G) ? void 0 : z.custom_viewable,
						L: null == (E = g.A) ? void 0 : E.custom_viewable,
						X: null == (F = g.H) ? void 0 : F.custom_viewable
					})
				}
			}(e)), Sj));
			return Ec(d)
		}), Rd())
	};
	var cg = J(O(function(a) {
		var b, c, d, e, f, g, h, k, l, n;
		return Object.assign({}, a, {
			ka: a.Gf,
			J: a.Hf,
			event: 1,
			u: a.bc,
			T: null == (b = a.U) ? void 0 : b.firstquartile,
			R: null == (c = a.F) ? void 0 : c.firstquartile,
			M: null == (d = a.B) ? void 0 : d.firstquartile,
			O: null == (e = a.D) ? void 0 : e.firstquartile,
			N: null == (f = a.C) ? void 0 : f.firstquartile,
			W: null == (g = a.s) ? void 0 : g.firstquartile,
			Y: null == (h = a.I) ? void 0 : h.firstquartile,
			S: null == (k = a.G) ? void 0 : k.firstquartile,
			L: null == (l = a.A) ? void 0 : l.firstquartile,
			X: null == (n = a.H) ? void 0 : n.firstquartile
		})
	}), Sj);
	var Tj = function(a) {
		return a.g(R(function(b, c) {
			return b.da === c.da
		}), Q(function(b) {
			return !!b.da && 0 < b.da
		}), Ic(function(b) {
			return a.g(Q(function(c) {
				return !!c.da && !!b.da && c.da >= b.da
			}), O(function(c) {
				return Object.assign({}, {
					ka: !0
				}, c)
			}), Sj)
		}))
	};
	var jg = J(O(function(a) {
		var b, c, d, e, f, g, h, k, l, n;
		return Object.assign({}, a, {
			da: a.Lc,
			J: a.Jf,
			event: 12,
			u: a.sa,
			T: null == (b = a.U) ? void 0 : b.fullscreen,
			R: null == (c = a.F) ? void 0 : c.fullscreen,
			M: null == (d = a.B) ? void 0 : d.fullscreen,
			O: null == (e = a.D) ? void 0 : e.fullscreen,
			N: null == (f = a.C) ? void 0 : f.fullscreen,
			W: null == (g = a.s) ? void 0 : g.fullscreen,
			Y: null == (h = a.I) ? void 0 : h.fullscreen,
			S: null == (k = a.G) ? void 0 : k.fullscreen,
			L: null == (l = a.A) ? void 0 : l.fullscreen,
			X: null == (n = a.H) ? void 0 : n.fullscreen
		})
	}), Tj);
	var $f = J(O(function(a) {
		var b, c, d, e, f, g, h, k, l, n;
		return Object.assign({}, a, {
			ka: "csm" === a.rb,
			J: a.Of,
			event: 14,
			u: a.sa,
			T: null == (b = a.U) ? void 0 : b.fully_viewable_audible_half_duration_impression,
			R: null == (c = a.F) ? void 0 : c.fully_viewable_audible_half_duration_impression,
			M: null == (d = a.B) ? void 0 : d.fully_viewable_audible_half_duration_impression,
			O: null == (e = a.D) ? void 0 : e.fully_viewable_audible_half_duration_impression,
			N: null == (f = a.C) ? void 0 : f.fully_viewable_audible_half_duration_impression,
			W: null == (g = a.s) ? void 0 : g.fully_viewable_audible_half_duration_impression,
			Y: null == (h = a.I) ? void 0 : h.fully_viewable_audible_half_duration_impression,
			S: null == (k = a.G) ? void 0 : k.fully_viewable_audible_half_duration_impression,
			L: null == (l = a.A) ? void 0 : l.fully_viewable_audible_half_duration_impression,
			X: null == (n = a.H) ? void 0 : n.fully_viewable_audible_half_duration_impression
		})
	}), Sj);
	var dg = J(O(function(a) {
		var b, c, d, e, f, g, h, k, l, n;
		return Object.assign({}, a, {
			ka: a.qg,
			J: a.rg,
			event: 2,
			u: a.bc,
			T: null == (b = a.U) ? void 0 : b.midpoint,
			R: null == (c = a.F) ? void 0 : c.midpoint,
			M: null == (d = a.B) ? void 0 : d.midpoint,
			O: null == (e = a.D) ? void 0 : e.midpoint,
			N: null == (f = a.C) ? void 0 : f.midpoint,
			W: null == (g = a.s) ? void 0 : g.midpoint,
			Y: null == (h = a.I) ? void 0 : h.midpoint,
			S: null == (k = a.G) ? void 0 : k.midpoint,
			L: null == (l = a.A) ? void 0 : l.midpoint,
			X: null == (n = a.H) ? void 0 : n.midpoint
		})
	}), Sj);
	var fg = J(O(function(a) {
		var b, c, d, e, f, g, h, k, l, n;
		return Object.assign({}, a, {
			da: a.ke,
			J: a.xg,
			event: 10,
			u: a.sa,
			T: null == (b = a.U) ? void 0 : b.mute,
			R: null == (c = a.F) ? void 0 : c.mute,
			M: null == (d = a.B) ? void 0 : d.mute,
			O: null == (e = a.D) ? void 0 : e.mute,
			N: null == (f = a.C) ? void 0 : f.mute,
			W: null == (g = a.s) ? void 0 : g.mute,
			Y: null == (h = a.I) ? void 0 : h.mute,
			S: null == (k = a.G) ? void 0 : k.mute,
			L: null == (l = a.A) ? void 0 : l.mute,
			X: null == (n = a.H) ? void 0 : n.mute
		})
	}), Tj);
	var hg = J(O(function(a) {
		var b, c, d, e, f, g, h, k, l, n;
		return Object.assign({}, a, {
			da: a.ac,
			J: a.Pg,
			event: 6,
			u: a.sa,
			T: null == (b = a.U) ? void 0 : b.pause,
			R: null == (c = a.F) ? void 0 : c.pause,
			M: null == (d = a.B) ? void 0 : d.pause,
			O: null == (e = a.D) ? void 0 : e.pause,
			N: null == (f = a.C) ? void 0 : f.pause,
			W: null == (g = a.s) ? void 0 : g.pause,
			Y: null == (h = a.I) ? void 0 : h.pause,
			S: null == (k = a.G) ? void 0 : k.pause,
			L: null == (l = a.A) ? void 0 : l.pause,
			X: null == (n = a.H) ? void 0 : n.pause
		})
	}), Tj);
	var ig = J(O(function(a) {
		var b, c, d, e, f, g, h, k, l, n;
		return Object.assign({}, a, {
			da: a.cc,
			J: a.oh,
			event: 7,
			u: a.sa,
			T: null == (b = a.U) ? void 0 : b.resume,
			R: null == (c = a.F) ? void 0 : c.resume,
			M: null == (d = a.B) ? void 0 : d.resume,
			O: null == (e = a.D) ? void 0 : e.resume,
			N: null == (f = a.C) ? void 0 : f.resume,
			W: null == (g = a.s) ? void 0 : g.resume,
			Y: null == (h = a.I) ? void 0 : h.resume,
			S: null == (k = a.G) ? void 0 : k.resume,
			L: null == (l = a.A) ? void 0 : l.resume,
			X: null == (n = a.H) ? void 0 : n.resume
		})
	}), Tj);
	var mg = J(Q(function(a) {
		return !!a.Dh
	}), Kd(1), Rd());
	var lg = J(O(function(a) {
		var b, c, d, e, f, g, h, k, l, n;
		return Object.assign({}, a, {
			ka: a.Jh,
			J: a.Kh,
			event: 8,
			u: a.sa,
			T: null == (b = a.U) ? void 0 : b.skip,
			R: null == (c = a.F) ? void 0 : c.skip,
			M: null == (d = a.B) ? void 0 : d.skip,
			O: null == (e = a.D) ? void 0 : e.skip,
			N: null == (f = a.C) ? void 0 : f.skip,
			W: null == (g = a.s) ? void 0 : g.skip,
			Y: null == (h = a.I) ? void 0 : h.skip,
			S: null == (k = a.G) ? void 0 : k.skip,
			L: null == (l = a.A) ? void 0 : l.skip,
			X: null == (n = a.H) ? void 0 : n.skip
		})
	}), Rj);
	var eg = J(O(function(a) {
		var b, c, d, e, f, g, h, k, l, n;
		return Object.assign({}, a, {
			ka: a.Oh,
			J: a.Ph,
			event: 3,
			u: a.bc,
			T: null == (b = a.U) ? void 0 : b.thirdquartile,
			R: null == (c = a.F) ? void 0 : c.thirdquartile,
			M: null == (d = a.B) ? void 0 : d.thirdquartile,
			O: null == (e = a.D) ? void 0 : e.thirdquartile,
			N: null == (f = a.C) ? void 0 : f.thirdquartile,
			W: null == (g = a.s) ? void 0 : g.thirdquartile,
			Y: null == (h = a.I) ? void 0 : h.thirdquartile,
			S: null == (k = a.G) ? void 0 : k.thirdquartile,
			L: null == (l = a.A) ? void 0 : l.thirdquartile,
			X: null == (n = a.H) ? void 0 : n.thirdquartile
		})
	}), Sj);
	var gg = J(O(function(a) {
		var b, c, d, e, f, g, h, k, l, n;
		return Object.assign({}, a, {
			da: a.Ce,
			J: a.ci,
			event: 11,
			u: a.sa,
			T: null == (b = a.U) ? void 0 : b.unmute,
			R: null == (c = a.F) ? void 0 : c.unmute,
			M: null == (d = a.B) ? void 0 : d.unmute,
			O: null == (e = a.D) ? void 0 : e.unmute,
			N: null == (f = a.C) ? void 0 : f.unmute,
			W: null == (g = a.s) ? void 0 : g.unmute,
			Y: null == (h = a.I) ? void 0 : h.unmute,
			S: null == (k = a.G) ? void 0 : k.unmute,
			L: null == (l = a.A) ? void 0 : l.unmute,
			X: null == (n = a.H) ? void 0 : n.unmute
		})
	}), Tj);
	var Yf = J(O(function(a) {
		var b, c, d, e, f, g, h, k, l, n;
		return Object.assign({}, a, {
			ka: a.Ee,
			J: a.mg,
			event: 15,
			u: a.sa,
			T: null == (b = a.U) ? void 0 : b.measurable_impression,
			R: null == (c = a.F) ? void 0 : c.measurable_impression,
			M: null == (d = a.B) ? void 0 : d.measurable_impression,
			O: null == (e = a.D) ? void 0 : e.measurable_impression,
			N: null == (f = a.C) ? void 0 : f.measurable_impression,
			W: null == (g = a.s) ? void 0 : g.measurable_impression,
			Y: null == (h = a.I) ? void 0 : h.measurable_impression,
			S: null == (k = a.G) ? void 0 : k.measurable_impression,
			L: null == (l = a.A) ? void 0 : l.measurable_impression,
			X: null == (n = a.H) ? void 0 : n.measurable_impression
		})
	}), Sj);
	var bg = J(O(function(a) {
		var b, c, d, e, f, g, h, k, l, n;
		return Object.assign({}, a, {
			ka: a.Ee,
			J: a.hi,
			event: 0,
			u: a.bc,
			T: null == (b = a.U) ? void 0 : b.start,
			R: null == (c = a.F) ? void 0 : c.start,
			M: null == (d = a.B) ? void 0 : d.start,
			O: null == (e = a.D) ? void 0 : e.start,
			N: null == (f = a.C) ? void 0 : f.start,
			W: null == (g = a.s) ? void 0 : g.start,
			Y: null == (h = a.I) ? void 0 : h.start,
			S: null == (k = a.G) ? void 0 : k.start,
			L: null == (l = a.A) ? void 0 : l.start,
			X: null == (n = a.H) ? void 0 : n.start
		})
	}), Sj);
	var Zf = J(O(function(a) {
		var b, c, d, e, f, g, h, k, l, n;
		return Object.assign({}, a, {
			ka: a.Db,
			J: a.ii,
			event: 9,
			u: a.sa,
			T: null == (b = a.U) ? void 0 : b.viewable_impression,
			R: null == (c = a.F) ? void 0 : c.viewable_impression,
			M: null == (d = a.B) ? void 0 : d.viewable_impression,
			O: null == (e = a.D) ? void 0 : e.viewable_impression,
			N: null == (f = a.C) ? void 0 : f.viewable_impression,
			W: null == (g = a.s) ? void 0 : g.viewable_impression,
			Y: null == (h = a.I) ? void 0 : h.viewable_impression,
			S: null == (k = a.G) ? void 0 : k.viewable_impression,
			L: null == (l = a.A) ? void 0 : l.viewable_impression,
			X: null == (n = a.H) ? void 0 : n.viewable_impression
		})
	}), Sj);
	var Uj = function(a) {
			this.key = a;
			this.defaultValue = !1;
			this.valueType = "boolean"
		},
		Vj = function(a) {
			this.key = a;
			this.defaultValue = 0;
			this.valueType = "number"
		};
	var Wj = new Uj("45430027"),
		Xj = new Uj("100006"),
		Yj = new Uj("45424363"),
		Zj = new Vj("45362137"),
		ak = new Uj("45377435"),
		bk = new Vj("45411635"),
		ck = new Uj("45372163"),
		dk = new Uj("45407241"),
		ek = new Uj("45428757"),
		fk = new Uj("45382077"),
		gk = new Uj("45407239"),
		hk = new Uj("45407240"),
		ik = new Uj("45427308");
	var jk = new Vj("45389692");

	function kk(a) {
		var b, c, d, e, f, g, h, k, l, n, w, p, t, z;
		return {
			Gd: null != (b = null == a ? void 0 : Rh(a, Xj)) ? b : !1,
			Ef: null != (c = null == a ? void 0 : Rh(a, Zj)) ? c : 0,
			Ff: null != (d = null == a ? void 0 : Rh(a, ak)) ? d : !1,
			rh: null != (e = null == a ? void 0 : Rh(a, ck)) ? e : !1,
			Gh: null != (f = null == a ? void 0 : Rh(a, fk)) ? f : !1,
			nf: null != (g = null == a ? void 0 : Rh(a, jk)) ? g : 0,
			di: null != (h = null == a ? void 0 : Rh(a, gk)) ? h : !1,
			ei: null != (k = null == a ? void 0 : Rh(a, hk)) ? k : !1,
			Ch: null != (l = null == a ? void 0 : Rh(a, ek)) ? l : !1,
			Ah: null != (n = null == a ? void 0 : Rh(a, dk)) ? n : !1,
			Qc: null != (w = null == a ? void 0 : Rh(a,
				bk)) ? w : 0,
			qf: null != (p = null == a ? void 0 : Rh(a, Yj)) ? p : !1,
			Fe: null != (t = null == a ? void 0 : Rh(a, ik)) ? t : !1,
			Fd: null != (z = null == a ? void 0 : Rh(a, Wj)) ? z : !1
		}
	};
	var lk = function(a) {
		var b = this;
		this.hh = a;
		this.name = "omid_video";
		this.ie = new gc;
		this.ng = new M(function(c) {
			var d = b.ie.subscribe(c);
			return function() {
				d.unsubscribe();
				b.Ma()
			}
		});
		this.Gc = new gc;
		this.controlledEvents = [];
		this.subscribedEvents = []
	};
	lk.prototype.start = function(a, b) {
		b = void 0 === b ? .01 : b;
		void 0 === this.Mc && a.Zb && (a = a.Zb, this.Mc = mk(a, this.Gc.g(Z(a.h, 1)), b).subscribe(this.ie))
	};
	lk.prototype.Ma = function() {
		this.Gc.complete();
		var a;
		null == (a = this.Mc) || a.unsubscribe();
		this.Mc = void 0
	};
	lk.prototype.handleEvent = function() {};

	function mk(a, b, c) {
		c = void 0 === c ? .01 : c;
		var d = "https://pagead2.googlesyndication.com/pagead/gen_204?id=av-js&type=error&bin=30&cb=rxov&v=" + Ai,
			e = [1, .9, .8, .7, .6, .5, .4, .3, .2, .1, 0],
			f = 0 < c && Math.random() <= c,
			g = a.Yd.g(Z(a.h, 1)),
			h = a.we.g(Z(a.h, 1));
		return Mf(a, b, function(k, l) {
			var n = h.g(Q(function(q) {
					return q.value.ja === l.sessionId
				})),
				w = k.ve.g(Q(function(q) {
					return q.value.ja === l.sessionId
				}), O(function() {
					return !0
				}), Z(k.h, 1)),
				p = n.g(O(function(q) {
					return q.value.data.verificationParameters
				}), di()),
				t = p.g(O(function(q) {
					var ja;
					return null == q ? void 0 : null == (ja = q.tracking_configuration) ? void 0 : ja.custom_metric_configurations
				}), O(function(q) {
					return null == q ? void 0 : q.map(function(ja) {
						return si(ja)
					})
				})),
				z = p.g(Zh(k), O(kk)),
				E = z.g(O(function(q) {
					return q.Gd
				})),
				F = z.g(O(function(q) {
					return q.Fd
				})),
				u = k.rd ? k.rd.g(Q(function(q) {
					return q.value.ja === l.sessionId
				}), Z(k.h, 10)) : Tc,
				B = g.g(Q(function(q) {
					return q.value.ja === l.sessionId
				}));
			F = ui(k, u, F).Wg;
			var D = F.Be.g(O(function(q) {
					return {
						timestamp: q.timestamp,
						value: 2 !== q.value
					}
				})),
				K = lh(k.m, D).m;
			D =
				pi(k, n, Rc(u, B));
			var I = Ph(k.h, u),
				G = Xg(k, E, l.sessionId).g(kh(K), Z(k.h, 1));
			E = Jg(k, l);
			var ba = E.Kf.g(kh(K)),
				fa = ji(k, u, D.le, kh(K)).Ue,
				L = vi(k, u, kh(K)).Xg,
				T = Fg(k.h, u),
				U = wh(k.h, K, G, Object.assign({}, Lh, {
					Rd: ba,
					pi: Hf.Ja(k.h),
					Oe: !1,
					lg: Hf.Ja(k.h),
					Wd: If.Ja(k.h),
					yf: z
				}));
			G = U.Lf;
			var ca = U.Hh;
			U = U.Ih;
			ca = Hi(k.h, u.g(kh(K)), G.hb, G.pd, G.visible, fa.kc, L.Yh, ca, U, e);
			K = Ii(k.h, u, K, t, G.visible, T, ca.ge, ca.Cc, ca.dg, ca.Bc, ca.Ga, ca.jc, ca.sd, G.qa);
			U = ii(k.h, p, t, K.mf);
			t = t.g(Q(function(q) {
					return void 0 !== q
				}), O(function(q) {
					return q.map(function(ja) {
						return ja.id
					})
				}),
				Z(k.h, 1));
			var ie = ti(k.h, I.mediaTime, G.hb, fa.kc),
				je = p.g(fi("measurable_impression")),
				X = p.g(fi("viewable_impression")),
				Y = p.g(fi("mute")),
				Gk = p.g(fi("unmute")),
				Hk = p.g(fi("start")),
				Ik = p.g(fi("firstquartile")),
				Jk = p.g(fi("midpoint")),
				Kk = p.g(fi("thirdquartile")),
				Lk = p.g(fi("complete")),
				Mk = p.g(fi("skip")),
				Nk = p.g(fi("pause")),
				Ok = p.g(fi("resume")),
				Pk = p.g(fi("fullscreen"));
			p = p.g(fi("fully_viewable_audible_half_duration_impression"));
			var xe = u.g(Q(function(q) {
						return "start" === q.value.type
					}), O(function() {
						return !0
					}),
					Z(k.h, 1)),
				Rg = u.g(Q(function(q) {
					return "firstQuartile" === q.value.type
				}), O(function() {
					return !0
				}), Z(k.h, 1)),
				Sg = u.g(Q(function(q) {
					return "midpoint" === q.value.type
				}), O(function() {
					return !0
				}), Z(k.h, 1)),
				Tg = u.g(Q(function(q) {
					return "thirdQuartile" === q.value.type
				}), O(function() {
					return !0
				}), Z(k.h, 1)),
				Ug = u.g(Q(function(q) {
					return "complete" === q.value.type
				}), O(function() {
					return !0
				}), Z(k.h, 1)),
				Vg = u.g(Q(function(q) {
					return "skipped" === q.value.type
				}), O(function() {
					return !0
				}), Z(k.h, 1)),
				S = Rc(xe.g(Ud("start")), Rg.g(Ud("firstquartile")),
					Sg.g(Ud("midpoint")), Tg.g(Ud("thirdquartile")), Ug.g(Ud("complete"))).g(Z(k.h, 1)),
				Qk = wi(k.h, S, fa.lc.g(ah(J(O(function(q) {
					return q.volume
				})))), fa.kc, G.hb),
				rb = Rc(S, fa.ke.g(Q(function(q) {
						return 0 < q
					}), R(), Ud("mute")), fa.Ce.g(Q(function(q) {
						return 0 < q
					}), R(), Ud("unmute")), F.ac.g(Q(function(q) {
						return 0 < q
					}), R(), Ud("pause")), F.cc.g(Q(function(q) {
						return 0 < q
					}), R(), Ud("resume")), xe.g(Ud("measurable_impression")), K.Db.g(Q(function(q) {
						return q
					}), Ud("viewable_impression")), K.rb.g(Q(function(q) {
						return q
					}), Ud("fully_viewable_audible_half_duration_impression")),
					U.g(Q(function(q) {
						return Object.values(q).some(function(ja) {
							return 0 < ja.length
						})
					}), R(), Ud("custom_viewable"))).g(Z(k.h, 2));
			z = z.g(O(function(q) {
				return q.Fe
			}));
			var hd = S.g(O(function(q) {
				return void 0 !== q
			}), W(!1), R());
			z = Ec([z, hd]).g(O(function(q) {
				var ja = v(q);
				q = ja.next().value;
				ja = ja.next().value;
				return !q || ja
			}));
			z = Ei(k.h, G.visible.g(O(function(q) {
					return q.value
				})), K.Db, G.hb.g(O(function(q) {
					return 0 < q.value
				})), fa.kc.g(O(function(q) {
					return q.value
				})), L.If, ba.g(O(function(q) {
					return q.value
				})), K.Nc, F.Be.g(O(function(q) {
					return q.value
				})),
				fa.wg, fa.bi, Vg, L.Zh.g(O(function(q) {
					return q.value
				}), de(), O(function(q) {
					var ja = v(q);
					q = ja.next().value;
					ja = ja.next().value;
					return "fullscreen" === q && "fullscreen" !== ja
				})), K.Yg, E.ai, z, rb);
			ba = Fi(k.h, {
				F: ca.Qd,
				B: ca.Bc,
				C: ca.Te,
				I: ca.Uh,
				G: ca.Th,
				D: ca.Se,
				A: ca.Re,
				H: ca.sd
			}, rb);
			hd = Fi(k.h, {
				s: ca.ki
			}, rb.g(ke(function(q) {
				return "viewable_impression" !== q
			})));
			S = yi(k.h, S, {
				ea: G.hb.g(O(function(q) {
					return q.value
				})),
				volume: fa.lc.g(O(function(q) {
					return q.value.volume
				})),
				La: G.La,
				eb: G.pd.g(O(function(q) {
					return q.value
				})),
				Ga: ca.Ga,
				Na: z.Na
			});
			var Rk = Bi(k, G.qa, rb);
			rb = Bi(k, fa.lc.g(O(function(q) {
				return q.value.qa
			})), rb);
			n = oi(k, n, k.ve.g(Q(function(q) {
				return q.value.ja === l.sessionId
			})), B, u, k.Wa.g(Q(function(q) {
				return q.value.ja === l.sessionId
			})), k.Wa.g(Q(function(q) {
				return q.value.ja !== l.sessionId
			})));
			n = Rc(K.lf, n).g(V(function(q, ja) {
				return Object.assign({}, q, ja)
			}, {}), O(function(q) {
				return JSON.stringify(q)
			}), O(function(q) {
				return f ? q : null
			}), Z(k.h, 1));
			return Object.assign({}, G, ca, fa, I, z, D, Qk, ie, {
				Jj: Rk,
				Ij: rb,
				Xe: new Gf(Ai),
				We: new Gf(30),
				Ze: new Gf("rxov"),
				zh: new Gf("o"),
				sf: new Gf([0, 0]),
				yh: G.Cd,
				ji: G.Cd,
				ea: G.hb.g(O(function(q) {
					return q.value
				})),
				fg: G.kg,
				sg: G.ug,
				Cf: S.ea.g(O(function(q) {
					return q.start
				})),
				zf: S.ea.g(O(function(q) {
					return q.firstquartile
				})),
				Af: S.ea.g(O(function(q) {
					return q.midpoint
				})),
				Bf: S.ea.g(O(function(q) {
					return q.thirdquartile
				})),
				volume: fa.lc.g(O(function(q) {
					return q.value.volume
				})),
				oi: S.volume.g(O(function(q) {
					return q.start
				})),
				li: S.volume.g(O(function(q) {
					return q.firstquartile
				})),
				mi: S.volume.g(O(function(q) {
					return q.midpoint
				})),
				ni: S.volume.g(O(function(q) {
					return q.thirdquartile
				})),
				gf: S.La.g(O(function(q) {
					return q.start
				})),
				df: S.La.g(O(function(q) {
					return q.firstquartile
				})),
				ef: S.La.g(O(function(q) {
					return q.midpoint
				})),
				ff: S.La.g(O(function(q) {
					return q.thirdquartile
				})),
				eb: G.pd.g(O(function(q) {
					return q.value
				})),
				he: G.he,
				je: G.je,
				xh: S.eb.g(O(function(q) {
					return q.start
				})),
				uh: S.eb.g(O(function(q) {
					return q.firstquartile
				})),
				vh: S.eb.g(O(function(q) {
					return q.midpoint
				})),
				wh: S.eb.g(O(function(q) {
					return q.thirdquartile
				})),
				wj: S.Ga.g(O(function(q) {
					return q.start
				})),
				gg: S.Ga.g(O(function(q) {
					return q.firstquartile
				})),
				hg: S.Ga.g(O(function(q) {
					return q.midpoint
				})),
				ig: S.Ga.g(O(function(q) {
					return q.thirdquartile
				})),
				Yf: S.Na.g(O(function(q) {
					return q.start
				})),
				Vf: S.Na.g(O(function(q) {
					return q.firstquartile
				})),
				Wf: S.Na.g(O(function(q) {
					return q.midpoint
				})),
				Xf: S.Na.g(O(function(q) {
					return q.thirdquartile
				})),
				Db: K.Db,
				rb: K.rb.g(Q(function(q) {
					return q
				}), O(function() {
					return "csm"
				})),
				Nc: K.Nc,
				ac: F.ac,
				cc: F.cc,
				Lc: L.Lc,
				Dh: w,
				Ee: xe,
				Gf: Rg,
				qg: Sg,
				Oh: Tg,
				af: Ug,
				Jh: Vg,
				gi: new Gf("lidarv"),
				mg: je,
				ii: X,
				Of: p,
				xg: Y,
				ci: Gk,
				hi: Hk,
				Hf: Ik,
				rg: Jk,
				Ph: Kk,
				bf: Lk,
				Kh: Mk,
				Pg: Nk,
				oh: Ok,
				Jf: Pk,
				gd: U,
				kf: t,
				Sf: B.g(O(function() {
					return !0
				})),
				Ua: new Gf(k.Ua),
				Sd: new Gf(Vf),
				sa: new Gf(Rf),
				bc: new Gf(Uf),
				Nh: new Gf(Tf),
				De: new Gf(sg),
				duration: T,
				Nf: new Gf("4"),
				F: ba.F,
				B: ba.B,
				C: ba.C,
				s: hd.s,
				Sh: hd.s.g(O(function(q) {
					return q.Bh
				})),
				I: ba.I,
				D: ba.D,
				G: ba.G,
				A: ba.A,
				H: ba.H,
				th: ca.Ye,
				Qh: new Gf(0),
				Yc: G.Yc,
				cd: E.cd,
				qh: n
			})
		}, Pf(a, d, c))
	};

	function nk(a, b) {
		if (!b) throw Error("X`" + a);
		if ("string" !== typeof b && !(b instanceof String)) throw Error("Y`" + a);
		if ("" === b.trim()) throw Error("Z`" + a);
	}

	function ok(a) {
		if (!a) throw Error("ba`functionToExecute");
	}

	function pk(a, b) {
		if (null == b) throw Error("$`" + a);
		if ("number" !== typeof b || isNaN(b)) throw Error("aa`" + a);
		if (0 > b) throw Error("ca`" + a);
	};

	function qk() {
		return /\d+\.\d+\.\d+(-.*)?/.test("1.4.8-google_20230803")
	}

	function rk() {
		for (var a = ["1", "4", "8"], b = ["1", "0", "3"], c = 0; 3 > c; c++) {
			var d = parseInt(a[c], 10),
				e = parseInt(b[c], 10);
			if (d > e) break;
			else if (d < e) return !1
		}
		return !0
	};
	var sk = function(a, b, c, d) {
			this.Ud = a;
			this.method = b;
			this.version = c;
			this.args = d
		},
		tk = function(a) {
			return !!a && void 0 !== a.omid_message_guid && void 0 !== a.omid_message_method && void 0 !== a.omid_message_version && "string" === typeof a.omid_message_guid && "string" === typeof a.omid_message_method && "string" === typeof a.omid_message_version && (void 0 === a.omid_message_args || void 0 !== a.omid_message_args)
		},
		uk = function(a) {
			return new sk(a.omid_message_guid, a.omid_message_method, a.omid_message_version, a.omid_message_args)
		};
	sk.prototype.ec = function() {
		var a = {};
		a = (a.omid_message_guid = this.Ud, a.omid_message_method = this.method, a.omid_message_version = this.version, a);
		void 0 !== this.args && (a.omid_message_args = this.args);
		return a
	};
	var vk = function(a) {
		this.oc = a
	};
	vk.prototype.ec = function() {
		return JSON.stringify(void 0)
	};
	var wk = function(a) {
		return ["omid_v1_present", "omid_v1_present_web", "omid_v1_present_app"].some(function(b) {
			try {
				var c = a.frames && !!a.frames[b]
			} catch (d) {
				c = !1
			}
			return c
		})
	};

	function xk(a, b) {
		return a && (a[b] || (a[b] = {}))
	};

	function yk() {
		return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(a) {
			var b = 16 * Math.random() | 0;
			return "y" === a ? (b & 3 | 8).toString(16) : b.toString(16)
		})
	};

	function zk() {
		var a = y.apply(0, arguments);
		Ak(function() {
			throw new(Function.prototype.bind.apply(Error, [null, "Could not complete the test successfully - "].concat(ma(a))));
		}, function() {
			return console.error.apply(console, ma(a))
		})
	}

	function Ak(a, b) {
		"undefined" !== typeof jasmine && jasmine ? a() : "undefined" !== typeof console && console && console.error && b()
	};
	var Bk = function() {
		if ("undefined" !== typeof omidGlobal && omidGlobal) return omidGlobal;
		if ("undefined" !== typeof global && global) return global;
		if ("undefined" !== typeof window && window) return window;
		if ("undefined" !== typeof globalThis && globalThis) return globalThis;
		var a = Function("return this")();
		if (a) return a;
		throw Error("da");
	}();
	var Ck = function(a) {
		this.oc = a;
		this.handleExportedMessage = Ck.prototype.Pf.bind(this)
	};
	x(Ck, vk);
	Ck.prototype.sendMessage = function(a, b) {
		b = void 0 === b ? this.oc : b;
		if (!b) throw Error("ea");
		b.handleExportedMessage(a.ec(), this)
	};
	Ck.prototype.Pf = function(a, b) {
		if (tk(a) && this.onMessage) this.onMessage(uk(a), b)
	};

	function Dk(a) {
		return null != a && "undefined" !== typeof a.top && null != a.top
	}

	function Ek(a) {
		if (a === Bk) return !1;
		try {
			if ("undefined" === typeof a.location.hostname) return !0
		} catch (b) {
			return !0
		}
		return !1
	};
	var Fk = function(a, b) {
		this.oc = b = void 0 === b ? Bk : b;
		var c = this;
		a.addEventListener("message", function(d) {
			if ("object" === typeof d.data) {
				var e = d.data;
				if (tk(e) && d.source && c.onMessage) c.onMessage(uk(e), d.source)
			}
		})
	};
	x(Fk, vk);
	Fk.prototype.sendMessage = function(a, b) {
		b = void 0 === b ? this.oc : b;
		if (!b) throw Error("ea");
		b.postMessage(a.ec(), "*")
	};
	var Sk = ["omid", "v1_VerificationServiceCommunication"],
		Tk = ["omidVerificationProperties", "serviceWindow"];

	function Uk(a, b) {
		return b.reduce(function(c, d) {
			return c && c[d]
		}, a)
	};
	var Vk = function(a) {
		if (!a) {
			var b;
			"undefined" === typeof b && "undefined" !== typeof window && window && (b = window);
			b = Dk(b) ? b : Bk;
			var c = void 0 === c ? wk : c;
			a = [];
			var d = Uk(b, Tk);
			d && a.push(d);
			a.push(Dk(b) ? b.top : Bk);
			a: {
				a = v(a);
				for (var e = a.next(); !e.done; e = a.next()) {
					b: {
						d = b;e = e.value;
						var f = c;
						if (!Ek(e)) try {
							var g = Uk(e, Sk);
							if (g) {
								var h = new Ck(g);
								break b
							}
						} catch (k) {}
						h = f(e) ? new Fk(d, e) : null
					}
					if (d = h) {
						a = d;
						break a
					}
				}
				a = null
			}
		}
		if (this.mb = a) this.mb.onMessage = this.Qf.bind(this);
		else if (c = (c = Bk.omid3p) && "function" === typeof c.registerSessionObserver &&
			"function" === typeof c.addEventListener ? c : null) this.wb = c;
		this.jh = this.kh = 0;
		this.Dc = {};
		this.Oc = [];
		this.Ub = (c = Bk.omidVerificationProperties) ? c.injectionId : void 0
	};
	Vk.prototype.Pa = function() {
		return !(!this.mb && !this.wb)
	};
	var Bf = function(a, b, c) {
		ok(b);
		a.wb ? a.wb.registerSessionObserver(b, c, a.Ub) : a.fb("addSessionListener", b, c, a.Ub)
	};
	Vk.prototype.addEventListener = function(a, b) {
		nk("eventType", a);
		ok(b);
		this.wb ? this.wb.addEventListener(a, b, this.Ub) : this.fb("addEventListener", b, a, this.Ub)
	};
	var Fe = function(a, b, c, d) {
			nk("url", b);
			Bk.document && Bk.document.createElement ? Wk(a, b, c, d) : a.fb("sendUrl", function(e) {
				e && c ? c() : !e && d && d()
			}, b)
		},
		Wk = function(a, b, c, d) {
			var e = Bk.document.createElement("img");
			a.Oc.push(e);
			var f = function(g) {
				var h = a.Oc.indexOf(e);
				0 <= h && a.Oc.splice(h, 1);
				g && g()
			};
			e.addEventListener("load", f.bind(a, c));
			e.addEventListener("error", f.bind(a, d));
			e.src = b
		};
	Vk.prototype.setTimeout = function(a, b) {
		ok(a);
		pk("timeInMillis", b);
		if (Xk()) return Bk.setTimeout(a, b);
		var c = this.kh++;
		this.fb("setTimeout", a, c, b);
		return c
	};
	Vk.prototype.clearTimeout = function(a) {
		pk("timeoutId", a);
		Xk() ? Bk.clearTimeout(a) : this.ue("clearTimeout", a)
	};
	Vk.prototype.setInterval = function(a, b) {
		ok(a);
		pk("timeInMillis", b);
		if (Yk()) return Bk.setInterval(a, b);
		var c = this.jh++;
		this.fb("setInterval", a, c, b);
		return c
	};
	Vk.prototype.clearInterval = function(a) {
		pk("intervalId", a);
		Yk() ? Bk.clearInterval(a) : this.ue("clearInterval", a)
	};
	var Xk = function() {
			return "function" === typeof Bk.setTimeout && "function" === typeof Bk.clearTimeout
		},
		Yk = function() {
			return "function" === typeof Bk.setInterval && "function" === typeof Bk.clearInterval
		};
	Vk.prototype.Qf = function(a) {
		var b = a.method,
			c = a.Ud;
		a = a.args;
		if ("response" === b && this.Dc[c]) {
			var d = qk() && rk() ? a ? a : [] : a && "string" === typeof a ? JSON.parse(a) : [];
			this.Dc[c].apply(this, d)
		}
		"error" === b && window.console && zk(a)
	};
	Vk.prototype.ue = function(a) {
		this.fb.apply(this, [a, null].concat(ma(y.apply(1, arguments))))
	};
	Vk.prototype.fb = function(a, b) {
		var c = y.apply(2, arguments);
		if (this.mb) {
			var d = yk();
			b && (this.Dc[d] = b);
			var e = "VerificationService." + a;
			c = qk() && rk() ? c : JSON.stringify(c);
			this.mb.sendMessage(new sk(d, e, "1.4.8-google_20230803", c))
		}
	};
	var Zk = void 0;
	if (Zk = void 0 === Zk ? "undefined" === typeof omidExports ? null : omidExports : Zk) {
		var $k = ["OmidVerificationClient"];
		$k.slice(0, $k.length - 1).reduce(xk, Zk)[$k[$k.length - 1]] = Vk
	};
	var al = new Vk;
	(function(a, b) {
		var c = new Pj,
			d = new lk(c);
		d.start(a, void 0 === b ? .01 : b);
		c.start(a, function(e, f) {
			var g;
			if (g = void 0 !== Gj(f, Nj, 2, !1)) {
				g = Gj(f, Nj, 2, !1);
				if (null == g) f = g;
				else {
					f = f.aa;
					var h = Vi(f);
					if (!(h & 2)) {
						var k = g;
						var l = k.aa,
							n = Vi(l);
						k = n & 2 ? Aj(k, l, n, !1) : k;
						k !== g && (g = k, Ej(f, h, 2, g))
					}
					f = Fj(g, f)
				}
				g = !0;
				g = void 0 === g ? !1 : g;
				f = f.aa;
				f = Dj(f, Vi(f), 4);
				f = null == f ? f : "boolean" === typeof f || "number" === typeof f ? !!f : void 0;
				g = !(null != f ? f : g)
			}
			g || d.Gc.next(Object.assign({}, d.hh.Hd.get(e)))
		}, function() {}, function() {
			d.Ma()
		});
		return d.ng
	})({
		Zb: new Af(al, "doubleclickbygoogle.com-omid-video")
	}).subscribe();
}).call(this);
