function km(e, t) {
  for (var n = 0; n < t.length; n++) {
    const r = t[n];
    if (typeof r != "string" && !Array.isArray(r)) {
      for (const i in r)
        if (i !== "default" && !(i in e)) {
          const o = Object.getOwnPropertyDescriptor(r, i);
          o &&
            Object.defineProperty(
              e,
              i,
              o.get ? o : { enumerable: !0, get: () => r[i] }
            );
        }
    }
  }
  return Object.freeze(
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" })
  );
}
(function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const i of document.querySelectorAll('link[rel="modulepreload"]')) r(i);
  new MutationObserver((i) => {
    for (const o of i)
      if (o.type === "childList")
        for (const l of o.addedNodes)
          l.tagName === "LINK" && l.rel === "modulepreload" && r(l);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(i) {
    const o = {};
    return (
      i.integrity && (o.integrity = i.integrity),
      i.referrerPolicy && (o.referrerPolicy = i.referrerPolicy),
      i.crossOrigin === "use-credentials"
        ? (o.credentials = "include")
        : i.crossOrigin === "anonymous"
        ? (o.credentials = "omit")
        : (o.credentials = "same-origin"),
      o
    );
  }
  function r(i) {
    if (i.ep) return;
    i.ep = !0;
    const o = n(i);
    fetch(i.href, o);
  }
})();
var td =
  typeof globalThis < "u"
    ? globalThis
    : typeof window < "u"
    ? window
    : typeof global < "u"
    ? global
    : typeof self < "u"
    ? self
    : {};
function nd(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default")
    ? e.default
    : e;
}
var rd = { exports: {} },
  ll = {},
  id = { exports: {} },
  K = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Li = Symbol.for("react.element"),
  Nm = Symbol.for("react.portal"),
  Tm = Symbol.for("react.fragment"),
  jm = Symbol.for("react.strict_mode"),
  Om = Symbol.for("react.profiler"),
  Mm = Symbol.for("react.provider"),
  Lm = Symbol.for("react.context"),
  Im = Symbol.for("react.forward_ref"),
  Dm = Symbol.for("react.suspense"),
  zm = Symbol.for("react.memo"),
  Fm = Symbol.for("react.lazy"),
  pc = Symbol.iterator;
function $m(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (pc && e[pc]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var od = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  ld = Object.assign,
  ad = {};
function jr(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = ad),
    (this.updater = n || od);
}
jr.prototype.isReactComponent = {};
jr.prototype.setState = function (e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error(
      "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
    );
  this.updater.enqueueSetState(this, e, t, "setState");
};
jr.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function sd() {}
sd.prototype = jr.prototype;
function As(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = ad),
    (this.updater = n || od);
}
var bs = (As.prototype = new sd());
bs.constructor = As;
ld(bs, jr.prototype);
bs.isPureReactComponent = !0;
var hc = Array.isArray,
  ud = Object.prototype.hasOwnProperty,
  Ws = { current: null },
  cd = { key: !0, ref: !0, __self: !0, __source: !0 };
function fd(e, t, n) {
  var r,
    i = {},
    o = null,
    l = null;
  if (t != null)
    for (r in (t.ref !== void 0 && (l = t.ref),
    t.key !== void 0 && (o = "" + t.key),
    t))
      ud.call(t, r) && !cd.hasOwnProperty(r) && (i[r] = t[r]);
  var a = arguments.length - 2;
  if (a === 1) i.children = n;
  else if (1 < a) {
    for (var s = Array(a), u = 0; u < a; u++) s[u] = arguments[u + 2];
    i.children = s;
  }
  if (e && e.defaultProps)
    for (r in ((a = e.defaultProps), a)) i[r] === void 0 && (i[r] = a[r]);
  return {
    $$typeof: Li,
    type: e,
    key: o,
    ref: l,
    props: i,
    _owner: Ws.current,
  };
}
function Um(e, t) {
  return {
    $$typeof: Li,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  };
}
function Hs(e) {
  return typeof e == "object" && e !== null && e.$$typeof === Li;
}
function Am(e) {
  var t = { "=": "=0", ":": "=2" };
  return (
    "$" +
    e.replace(/[=:]/g, function (n) {
      return t[n];
    })
  );
}
var mc = /\/+/g;
function oa(e, t) {
  return typeof e == "object" && e !== null && e.key != null
    ? Am("" + e.key)
    : t.toString(36);
}
function yo(e, t, n, r, i) {
  var o = typeof e;
  (o === "undefined" || o === "boolean") && (e = null);
  var l = !1;
  if (e === null) l = !0;
  else
    switch (o) {
      case "string":
      case "number":
        l = !0;
        break;
      case "object":
        switch (e.$$typeof) {
          case Li:
          case Nm:
            l = !0;
        }
    }
  if (l)
    return (
      (l = e),
      (i = i(l)),
      (e = r === "" ? "." + oa(l, 0) : r),
      hc(i)
        ? ((n = ""),
          e != null && (n = e.replace(mc, "$&/") + "/"),
          yo(i, t, n, "", function (u) {
            return u;
          }))
        : i != null &&
          (Hs(i) &&
            (i = Um(
              i,
              n +
                (!i.key || (l && l.key === i.key)
                  ? ""
                  : ("" + i.key).replace(mc, "$&/") + "/") +
                e
            )),
          t.push(i)),
      1
    );
  if (((l = 0), (r = r === "" ? "." : r + ":"), hc(e)))
    for (var a = 0; a < e.length; a++) {
      o = e[a];
      var s = r + oa(o, a);
      l += yo(o, t, n, s, i);
    }
  else if (((s = $m(e)), typeof s == "function"))
    for (e = s.call(e), a = 0; !(o = e.next()).done; )
      (o = o.value), (s = r + oa(o, a++)), (l += yo(o, t, n, s, i));
  else if (o === "object")
    throw (
      ((t = String(e)),
      Error(
        "Objects are not valid as a React child (found: " +
          (t === "[object Object]"
            ? "object with keys {" + Object.keys(e).join(", ") + "}"
            : t) +
          "). If you meant to render a collection of children, use an array instead."
      ))
    );
  return l;
}
function qi(e, t, n) {
  if (e == null) return e;
  var r = [],
    i = 0;
  return (
    yo(e, r, "", "", function (o) {
      return t.call(n, o, i++);
    }),
    r
  );
}
function bm(e) {
  if (e._status === -1) {
    var t = e._result;
    (t = t()),
      t.then(
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 1), (e._result = n));
        },
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 2), (e._result = n));
        }
      ),
      e._status === -1 && ((e._status = 0), (e._result = t));
  }
  if (e._status === 1) return e._result.default;
  throw e._result;
}
var be = { current: null },
  go = { transition: null },
  Wm = {
    ReactCurrentDispatcher: be,
    ReactCurrentBatchConfig: go,
    ReactCurrentOwner: Ws,
  };
K.Children = {
  map: qi,
  forEach: function (e, t, n) {
    qi(
      e,
      function () {
        t.apply(this, arguments);
      },
      n
    );
  },
  count: function (e) {
    var t = 0;
    return (
      qi(e, function () {
        t++;
      }),
      t
    );
  },
  toArray: function (e) {
    return (
      qi(e, function (t) {
        return t;
      }) || []
    );
  },
  only: function (e) {
    if (!Hs(e))
      throw Error(
        "React.Children.only expected to receive a single React element child."
      );
    return e;
  },
};
K.Component = jr;
K.Fragment = Tm;
K.Profiler = Om;
K.PureComponent = As;
K.StrictMode = jm;
K.Suspense = Dm;
K.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Wm;
K.cloneElement = function (e, t, n) {
  if (e == null)
    throw Error(
      "React.cloneElement(...): The argument must be a React element, but you passed " +
        e +
        "."
    );
  var r = ld({}, e.props),
    i = e.key,
    o = e.ref,
    l = e._owner;
  if (t != null) {
    if (
      (t.ref !== void 0 && ((o = t.ref), (l = Ws.current)),
      t.key !== void 0 && (i = "" + t.key),
      e.type && e.type.defaultProps)
    )
      var a = e.type.defaultProps;
    for (s in t)
      ud.call(t, s) &&
        !cd.hasOwnProperty(s) &&
        (r[s] = t[s] === void 0 && a !== void 0 ? a[s] : t[s]);
  }
  var s = arguments.length - 2;
  if (s === 1) r.children = n;
  else if (1 < s) {
    a = Array(s);
    for (var u = 0; u < s; u++) a[u] = arguments[u + 2];
    r.children = a;
  }
  return { $$typeof: Li, type: e.type, key: i, ref: o, props: r, _owner: l };
};
K.createContext = function (e) {
  return (
    (e = {
      $$typeof: Lm,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: Mm, _context: e }),
    (e.Consumer = e)
  );
};
K.createElement = fd;
K.createFactory = function (e) {
  var t = fd.bind(null, e);
  return (t.type = e), t;
};
K.createRef = function () {
  return { current: null };
};
K.forwardRef = function (e) {
  return { $$typeof: Im, render: e };
};
K.isValidElement = Hs;
K.lazy = function (e) {
  return { $$typeof: Fm, _payload: { _status: -1, _result: e }, _init: bm };
};
K.memo = function (e, t) {
  return { $$typeof: zm, type: e, compare: t === void 0 ? null : t };
};
K.startTransition = function (e) {
  var t = go.transition;
  go.transition = {};
  try {
    e();
  } finally {
    go.transition = t;
  }
};
K.unstable_act = function () {
  throw Error("act(...) is not supported in production builds of React.");
};
K.useCallback = function (e, t) {
  return be.current.useCallback(e, t);
};
K.useContext = function (e) {
  return be.current.useContext(e);
};
K.useDebugValue = function () {};
K.useDeferredValue = function (e) {
  return be.current.useDeferredValue(e);
};
K.useEffect = function (e, t) {
  return be.current.useEffect(e, t);
};
K.useId = function () {
  return be.current.useId();
};
K.useImperativeHandle = function (e, t, n) {
  return be.current.useImperativeHandle(e, t, n);
};
K.useInsertionEffect = function (e, t) {
  return be.current.useInsertionEffect(e, t);
};
K.useLayoutEffect = function (e, t) {
  return be.current.useLayoutEffect(e, t);
};
K.useMemo = function (e, t) {
  return be.current.useMemo(e, t);
};
K.useReducer = function (e, t, n) {
  return be.current.useReducer(e, t, n);
};
K.useRef = function (e) {
  return be.current.useRef(e);
};
K.useState = function (e) {
  return be.current.useState(e);
};
K.useSyncExternalStore = function (e, t, n) {
  return be.current.useSyncExternalStore(e, t, n);
};
K.useTransition = function () {
  return be.current.useTransition();
};
K.version = "18.2.0";
id.exports = K;
var C = id.exports;
const dd = nd(C),
  Hm = km({ __proto__: null, default: dd }, [C]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Bm = C,
  Vm = Symbol.for("react.element"),
  Km = Symbol.for("react.fragment"),
  Qm = Object.prototype.hasOwnProperty,
  qm = Bm.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  Ym = { key: !0, ref: !0, __self: !0, __source: !0 };
function pd(e, t, n) {
  var r,
    i = {},
    o = null,
    l = null;
  n !== void 0 && (o = "" + n),
    t.key !== void 0 && (o = "" + t.key),
    t.ref !== void 0 && (l = t.ref);
  for (r in t) Qm.call(t, r) && !Ym.hasOwnProperty(r) && (i[r] = t[r]);
  if (e && e.defaultProps)
    for (r in ((t = e.defaultProps), t)) i[r] === void 0 && (i[r] = t[r]);
  return {
    $$typeof: Vm,
    type: e,
    key: o,
    ref: l,
    props: i,
    _owner: qm.current,
  };
}
ll.Fragment = Km;
ll.jsx = pd;
ll.jsxs = pd;
rd.exports = ll;
var h = rd.exports,
  Fa = {},
  hd = { exports: {} },
  tt = {},
  md = { exports: {} },
  vd = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
  function t(O, z) {
    var A = O.length;
    O.push(z);
    e: for (; 0 < A; ) {
      var ae = (A - 1) >>> 1,
        ge = O[ae];
      if (0 < i(ge, z)) (O[ae] = z), (O[A] = ge), (A = ae);
      else break e;
    }
  }
  function n(O) {
    return O.length === 0 ? null : O[0];
  }
  function r(O) {
    if (O.length === 0) return null;
    var z = O[0],
      A = O.pop();
    if (A !== z) {
      O[0] = A;
      e: for (var ae = 0, ge = O.length, Yn = ge >>> 1; ae < Yn; ) {
        var ne = 2 * (ae + 1) - 1,
          zt = O[ne],
          Pt = ne + 1,
          Xn = O[Pt];
        if (0 > i(zt, A))
          Pt < ge && 0 > i(Xn, zt)
            ? ((O[ae] = Xn), (O[Pt] = A), (ae = Pt))
            : ((O[ae] = zt), (O[ne] = A), (ae = ne));
        else if (Pt < ge && 0 > i(Xn, A)) (O[ae] = Xn), (O[Pt] = A), (ae = Pt);
        else break e;
      }
    }
    return z;
  }
  function i(O, z) {
    var A = O.sortIndex - z.sortIndex;
    return A !== 0 ? A : O.id - z.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var o = performance;
    e.unstable_now = function () {
      return o.now();
    };
  } else {
    var l = Date,
      a = l.now();
    e.unstable_now = function () {
      return l.now() - a;
    };
  }
  var s = [],
    u = [],
    d = 1,
    v = null,
    g = 3,
    y = !1,
    w = !1,
    x = !1,
    P = typeof setTimeout == "function" ? setTimeout : null,
    m = typeof clearTimeout == "function" ? clearTimeout : null,
    c = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function p(O) {
    for (var z = n(u); z !== null; ) {
      if (z.callback === null) r(u);
      else if (z.startTime <= O)
        r(u), (z.sortIndex = z.expirationTime), t(s, z);
      else break;
      z = n(u);
    }
  }
  function f(O) {
    if (((x = !1), p(O), !w))
      if (n(s) !== null) (w = !0), qe(S);
      else {
        var z = n(u);
        z !== null && _t(f, z.startTime - O);
      }
  }
  function S(O, z) {
    (w = !1), x && ((x = !1), m(T), (T = -1)), (y = !0);
    var A = g;
    try {
      for (
        p(z), v = n(s);
        v !== null && (!(v.expirationTime > z) || (O && !pe()));

      ) {
        var ae = v.callback;
        if (typeof ae == "function") {
          (v.callback = null), (g = v.priorityLevel);
          var ge = ae(v.expirationTime <= z);
          (z = e.unstable_now()),
            typeof ge == "function" ? (v.callback = ge) : v === n(s) && r(s),
            p(z);
        } else r(s);
        v = n(s);
      }
      if (v !== null) var Yn = !0;
      else {
        var ne = n(u);
        ne !== null && _t(f, ne.startTime - z), (Yn = !1);
      }
      return Yn;
    } finally {
      (v = null), (g = A), (y = !1);
    }
  }
  var R = !1,
    N = null,
    T = -1,
    W = 5,
    D = -1;
  function pe() {
    return !(e.unstable_now() - D < W);
  }
  function J() {
    if (N !== null) {
      var O = e.unstable_now();
      D = O;
      var z = !0;
      try {
        z = N(!0, O);
      } finally {
        z ? ot() : ((R = !1), (N = null));
      }
    } else R = !1;
  }
  var ot;
  if (typeof c == "function")
    ot = function () {
      c(J);
    };
  else if (typeof MessageChannel < "u") {
    var Zt = new MessageChannel(),
      en = Zt.port2;
    (Zt.port1.onmessage = J),
      (ot = function () {
        en.postMessage(null);
      });
  } else
    ot = function () {
      P(J, 0);
    };
  function qe(O) {
    (N = O), R || ((R = !0), ot());
  }
  function _t(O, z) {
    T = P(function () {
      O(e.unstable_now());
    }, z);
  }
  (e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (O) {
      O.callback = null;
    }),
    (e.unstable_continueExecution = function () {
      w || y || ((w = !0), qe(S));
    }),
    (e.unstable_forceFrameRate = function (O) {
      0 > O || 125 < O
        ? console.error(
            "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
          )
        : (W = 0 < O ? Math.floor(1e3 / O) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return g;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return n(s);
    }),
    (e.unstable_next = function (O) {
      switch (g) {
        case 1:
        case 2:
        case 3:
          var z = 3;
          break;
        default:
          z = g;
      }
      var A = g;
      g = z;
      try {
        return O();
      } finally {
        g = A;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (O, z) {
      switch (O) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          O = 3;
      }
      var A = g;
      g = O;
      try {
        return z();
      } finally {
        g = A;
      }
    }),
    (e.unstable_scheduleCallback = function (O, z, A) {
      var ae = e.unstable_now();
      switch (
        (typeof A == "object" && A !== null
          ? ((A = A.delay), (A = typeof A == "number" && 0 < A ? ae + A : ae))
          : (A = ae),
        O)
      ) {
        case 1:
          var ge = -1;
          break;
        case 2:
          ge = 250;
          break;
        case 5:
          ge = 1073741823;
          break;
        case 4:
          ge = 1e4;
          break;
        default:
          ge = 5e3;
      }
      return (
        (ge = A + ge),
        (O = {
          id: d++,
          callback: z,
          priorityLevel: O,
          startTime: A,
          expirationTime: ge,
          sortIndex: -1,
        }),
        A > ae
          ? ((O.sortIndex = A),
            t(u, O),
            n(s) === null &&
              O === n(u) &&
              (x ? (m(T), (T = -1)) : (x = !0), _t(f, A - ae)))
          : ((O.sortIndex = ge), t(s, O), w || y || ((w = !0), qe(S))),
        O
      );
    }),
    (e.unstable_shouldYield = pe),
    (e.unstable_wrapCallback = function (O) {
      var z = g;
      return function () {
        var A = g;
        g = z;
        try {
          return O.apply(this, arguments);
        } finally {
          g = A;
        }
      };
    });
})(vd);
md.exports = vd;
var Xm = md.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var yd = C,
  et = Xm;
function j(e) {
  for (
    var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1;
    n < arguments.length;
    n++
  )
    t += "&args[]=" + encodeURIComponent(arguments[n]);
  return (
    "Minified React error #" +
    e +
    "; visit " +
    t +
    " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
  );
}
var gd = new Set(),
  hi = {};
function Kn(e, t) {
  Sr(e, t), Sr(e + "Capture", t);
}
function Sr(e, t) {
  for (hi[e] = t, e = 0; e < t.length; e++) gd.add(t[e]);
}
var Kt = !(
    typeof window > "u" ||
    typeof window.document > "u" ||
    typeof window.document.createElement > "u"
  ),
  $a = Object.prototype.hasOwnProperty,
  Gm =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  vc = {},
  yc = {};
function Jm(e) {
  return $a.call(yc, e)
    ? !0
    : $a.call(vc, e)
    ? !1
    : Gm.test(e)
    ? (yc[e] = !0)
    : ((vc[e] = !0), !1);
}
function Zm(e, t, n, r) {
  if (n !== null && n.type === 0) return !1;
  switch (typeof t) {
    case "function":
    case "symbol":
      return !0;
    case "boolean":
      return r
        ? !1
        : n !== null
        ? !n.acceptsBooleans
        : ((e = e.toLowerCase().slice(0, 5)), e !== "data-" && e !== "aria-");
    default:
      return !1;
  }
}
function ev(e, t, n, r) {
  if (t === null || typeof t > "u" || Zm(e, t, n, r)) return !0;
  if (r) return !1;
  if (n !== null)
    switch (n.type) {
      case 3:
        return !t;
      case 4:
        return t === !1;
      case 5:
        return isNaN(t);
      case 6:
        return isNaN(t) || 1 > t;
    }
  return !1;
}
function We(e, t, n, r, i, o, l) {
  (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = r),
    (this.attributeNamespace = i),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = o),
    (this.removeEmptyString = l);
}
var je = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
  .split(" ")
  .forEach(function (e) {
    je[e] = new We(e, 0, !1, e, null, !1, !1);
  });
[
  ["acceptCharset", "accept-charset"],
  ["className", "class"],
  ["htmlFor", "for"],
  ["httpEquiv", "http-equiv"],
].forEach(function (e) {
  var t = e[0];
  je[t] = new We(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
  je[e] = new We(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
  "autoReverse",
  "externalResourcesRequired",
  "focusable",
  "preserveAlpha",
].forEach(function (e) {
  je[e] = new We(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
  .split(" ")
  .forEach(function (e) {
    je[e] = new We(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
["checked", "multiple", "muted", "selected"].forEach(function (e) {
  je[e] = new We(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function (e) {
  je[e] = new We(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (e) {
  je[e] = new We(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function (e) {
  je[e] = new We(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var Bs = /[\-:]([a-z])/g;
function Vs(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(Bs, Vs);
    je[t] = new We(t, 1, !1, e, null, !1, !1);
  });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(Bs, Vs);
    je[t] = new We(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  });
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
  var t = e.replace(Bs, Vs);
  je[t] = new We(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (e) {
  je[e] = new We(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
je.xlinkHref = new We(
  "xlinkHref",
  1,
  !1,
  "xlink:href",
  "http://www.w3.org/1999/xlink",
  !0,
  !1
);
["src", "href", "action", "formAction"].forEach(function (e) {
  je[e] = new We(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function Ks(e, t, n, r) {
  var i = je.hasOwnProperty(t) ? je[t] : null;
  (i !== null
    ? i.type !== 0
    : r ||
      !(2 < t.length) ||
      (t[0] !== "o" && t[0] !== "O") ||
      (t[1] !== "n" && t[1] !== "N")) &&
    (ev(t, n, i, r) && (n = null),
    r || i === null
      ? Jm(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
      : i.mustUseProperty
      ? (e[i.propertyName] = n === null ? (i.type === 3 ? !1 : "") : n)
      : ((t = i.attributeName),
        (r = i.attributeNamespace),
        n === null
          ? e.removeAttribute(t)
          : ((i = i.type),
            (n = i === 3 || (i === 4 && n === !0) ? "" : "" + n),
            r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var Xt = yd.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  Yi = Symbol.for("react.element"),
  Zn = Symbol.for("react.portal"),
  er = Symbol.for("react.fragment"),
  Qs = Symbol.for("react.strict_mode"),
  Ua = Symbol.for("react.profiler"),
  wd = Symbol.for("react.provider"),
  Sd = Symbol.for("react.context"),
  qs = Symbol.for("react.forward_ref"),
  Aa = Symbol.for("react.suspense"),
  ba = Symbol.for("react.suspense_list"),
  Ys = Symbol.for("react.memo"),
  ln = Symbol.for("react.lazy"),
  xd = Symbol.for("react.offscreen"),
  gc = Symbol.iterator;
function $r(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (gc && e[gc]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var de = Object.assign,
  la;
function Xr(e) {
  if (la === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      la = (t && t[1]) || "";
    }
  return (
    `
` +
    la +
    e
  );
}
var aa = !1;
function sa(e, t) {
  if (!e || aa) return "";
  aa = !0;
  var n = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (t)
      if (
        ((t = function () {
          throw Error();
        }),
        Object.defineProperty(t.prototype, "props", {
          set: function () {
            throw Error();
          },
        }),
        typeof Reflect == "object" && Reflect.construct)
      ) {
        try {
          Reflect.construct(t, []);
        } catch (u) {
          var r = u;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (u) {
          r = u;
        }
        e.call(t.prototype);
      }
    else {
      try {
        throw Error();
      } catch (u) {
        r = u;
      }
      e();
    }
  } catch (u) {
    if (u && r && typeof u.stack == "string") {
      for (
        var i = u.stack.split(`
`),
          o = r.stack.split(`
`),
          l = i.length - 1,
          a = o.length - 1;
        1 <= l && 0 <= a && i[l] !== o[a];

      )
        a--;
      for (; 1 <= l && 0 <= a; l--, a--)
        if (i[l] !== o[a]) {
          if (l !== 1 || a !== 1)
            do
              if ((l--, a--, 0 > a || i[l] !== o[a])) {
                var s =
                  `
` + i[l].replace(" at new ", " at ");
                return (
                  e.displayName &&
                    s.includes("<anonymous>") &&
                    (s = s.replace("<anonymous>", e.displayName)),
                  s
                );
              }
            while (1 <= l && 0 <= a);
          break;
        }
    }
  } finally {
    (aa = !1), (Error.prepareStackTrace = n);
  }
  return (e = e ? e.displayName || e.name : "") ? Xr(e) : "";
}
function tv(e) {
  switch (e.tag) {
    case 5:
      return Xr(e.type);
    case 16:
      return Xr("Lazy");
    case 13:
      return Xr("Suspense");
    case 19:
      return Xr("SuspenseList");
    case 0:
    case 2:
    case 15:
      return (e = sa(e.type, !1)), e;
    case 11:
      return (e = sa(e.type.render, !1)), e;
    case 1:
      return (e = sa(e.type, !0)), e;
    default:
      return "";
  }
}
function Wa(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case er:
      return "Fragment";
    case Zn:
      return "Portal";
    case Ua:
      return "Profiler";
    case Qs:
      return "StrictMode";
    case Aa:
      return "Suspense";
    case ba:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case Sd:
        return (e.displayName || "Context") + ".Consumer";
      case wd:
        return (e._context.displayName || "Context") + ".Provider";
      case qs:
        var t = e.render;
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ""),
            (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
          e
        );
      case Ys:
        return (
          (t = e.displayName || null), t !== null ? t : Wa(e.type) || "Memo"
        );
      case ln:
        (t = e._payload), (e = e._init);
        try {
          return Wa(e(t));
        } catch {}
    }
  return null;
}
function nv(e) {
  var t = e.type;
  switch (e.tag) {
    case 24:
      return "Cache";
    case 9:
      return (t.displayName || "Context") + ".Consumer";
    case 10:
      return (t._context.displayName || "Context") + ".Provider";
    case 18:
      return "DehydratedFragment";
    case 11:
      return (
        (e = t.render),
        (e = e.displayName || e.name || ""),
        t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")
      );
    case 7:
      return "Fragment";
    case 5:
      return t;
    case 4:
      return "Portal";
    case 3:
      return "Root";
    case 6:
      return "Text";
    case 16:
      return Wa(t);
    case 8:
      return t === Qs ? "StrictMode" : "Mode";
    case 22:
      return "Offscreen";
    case 12:
      return "Profiler";
    case 21:
      return "Scope";
    case 13:
      return "Suspense";
    case 19:
      return "SuspenseList";
    case 25:
      return "TracingMarker";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if (typeof t == "function") return t.displayName || t.name || null;
      if (typeof t == "string") return t;
  }
  return null;
}
function xn(e) {
  switch (typeof e) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
      return e;
    case "object":
      return e;
    default:
      return "";
  }
}
function Ed(e) {
  var t = e.type;
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === "input" &&
    (t === "checkbox" || t === "radio")
  );
}
function rv(e) {
  var t = Ed(e) ? "checked" : "value",
    n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
    r = "" + e[t];
  if (
    !e.hasOwnProperty(t) &&
    typeof n < "u" &&
    typeof n.get == "function" &&
    typeof n.set == "function"
  ) {
    var i = n.get,
      o = n.set;
    return (
      Object.defineProperty(e, t, {
        configurable: !0,
        get: function () {
          return i.call(this);
        },
        set: function (l) {
          (r = "" + l), o.call(this, l);
        },
      }),
      Object.defineProperty(e, t, { enumerable: n.enumerable }),
      {
        getValue: function () {
          return r;
        },
        setValue: function (l) {
          r = "" + l;
        },
        stopTracking: function () {
          (e._valueTracker = null), delete e[t];
        },
      }
    );
  }
}
function Xi(e) {
  e._valueTracker || (e._valueTracker = rv(e));
}
function Rd(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(),
    r = "";
  return (
    e && (r = Ed(e) ? (e.checked ? "true" : "false") : e.value),
    (e = r),
    e !== n ? (t.setValue(e), !0) : !1
  );
}
function To(e) {
  if (((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u"))
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function Ha(e, t) {
  var n = t.checked;
  return de({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? e._wrapperState.initialChecked,
  });
}
function wc(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue,
    r = t.checked != null ? t.checked : t.defaultChecked;
  (n = xn(t.value != null ? t.value : n)),
    (e._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled:
        t.type === "checkbox" || t.type === "radio"
          ? t.checked != null
          : t.value != null,
    });
}
function Cd(e, t) {
  (t = t.checked), t != null && Ks(e, "checked", t, !1);
}
function Ba(e, t) {
  Cd(e, t);
  var n = xn(t.value),
    r = t.type;
  if (n != null)
    r === "number"
      ? ((n === 0 && e.value === "") || e.value != n) && (e.value = "" + n)
      : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value")
    ? Va(e, t.type, n)
    : t.hasOwnProperty("defaultValue") && Va(e, t.type, xn(t.defaultValue)),
    t.checked == null &&
      t.defaultChecked != null &&
      (e.defaultChecked = !!t.defaultChecked);
}
function Sc(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (
      !(
        (r !== "submit" && r !== "reset") ||
        (t.value !== void 0 && t.value !== null)
      )
    )
      return;
    (t = "" + e._wrapperState.initialValue),
      n || t === e.value || (e.value = t),
      (e.defaultValue = t);
  }
  (n = e.name),
    n !== "" && (e.name = ""),
    (e.defaultChecked = !!e._wrapperState.initialChecked),
    n !== "" && (e.name = n);
}
function Va(e, t, n) {
  (t !== "number" || To(e.ownerDocument) !== e) &&
    (n == null
      ? (e.defaultValue = "" + e._wrapperState.initialValue)
      : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var Gr = Array.isArray;
function pr(e, t, n, r) {
  if (((e = e.options), t)) {
    t = {};
    for (var i = 0; i < n.length; i++) t["$" + n[i]] = !0;
    for (n = 0; n < e.length; n++)
      (i = t.hasOwnProperty("$" + e[n].value)),
        e[n].selected !== i && (e[n].selected = i),
        i && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + xn(n), t = null, i = 0; i < e.length; i++) {
      if (e[i].value === n) {
        (e[i].selected = !0), r && (e[i].defaultSelected = !0);
        return;
      }
      t !== null || e[i].disabled || (t = e[i]);
    }
    t !== null && (t.selected = !0);
  }
}
function Ka(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(j(91));
  return de({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: "" + e._wrapperState.initialValue,
  });
}
function xc(e, t) {
  var n = t.value;
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error(j(92));
      if (Gr(n)) {
        if (1 < n.length) throw Error(j(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), (n = t);
  }
  e._wrapperState = { initialValue: xn(n) };
}
function _d(e, t) {
  var n = xn(t.value),
    r = xn(t.defaultValue);
  n != null &&
    ((n = "" + n),
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = "" + r);
}
function Ec(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function Pd(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function Qa(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml"
    ? Pd(t)
    : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
    ? "http://www.w3.org/1999/xhtml"
    : e;
}
var Gi,
  kd = (function (e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
      ? function (t, n, r, i) {
          MSApp.execUnsafeLocalFunction(function () {
            return e(t, n, r, i);
          });
        }
      : e;
  })(function (e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
      e.innerHTML = t;
    else {
      for (
        Gi = Gi || document.createElement("div"),
          Gi.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
          t = Gi.firstChild;
        e.firstChild;

      )
        e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
function mi(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var ti = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0,
  },
  iv = ["Webkit", "ms", "Moz", "O"];
Object.keys(ti).forEach(function (e) {
  iv.forEach(function (t) {
    (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (ti[t] = ti[e]);
  });
});
function Nd(e, t, n) {
  return t == null || typeof t == "boolean" || t === ""
    ? ""
    : n || typeof t != "number" || t === 0 || (ti.hasOwnProperty(e) && ti[e])
    ? ("" + t).trim()
    : t + "px";
}
function Td(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0,
        i = Nd(n, t[n], r);
      n === "float" && (n = "cssFloat"), r ? e.setProperty(n, i) : (e[n] = i);
    }
}
var ov = de(
  { menuitem: !0 },
  {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
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
  }
);
function qa(e, t) {
  if (t) {
    if (ov[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error(j(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(j(60));
      if (
        typeof t.dangerouslySetInnerHTML != "object" ||
        !("__html" in t.dangerouslySetInnerHTML)
      )
        throw Error(j(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(j(62));
  }
}
function Ya(e, t) {
  if (e.indexOf("-") === -1) return typeof t.is == "string";
  switch (e) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
      return !1;
    default:
      return !0;
  }
}
var Xa = null;
function Xs(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var Ga = null,
  hr = null,
  mr = null;
function Rc(e) {
  if ((e = zi(e))) {
    if (typeof Ga != "function") throw Error(j(280));
    var t = e.stateNode;
    t && ((t = fl(t)), Ga(e.stateNode, e.type, t));
  }
}
function jd(e) {
  hr ? (mr ? mr.push(e) : (mr = [e])) : (hr = e);
}
function Od() {
  if (hr) {
    var e = hr,
      t = mr;
    if (((mr = hr = null), Rc(e), t)) for (e = 0; e < t.length; e++) Rc(t[e]);
  }
}
function Md(e, t) {
  return e(t);
}
function Ld() {}
var ua = !1;
function Id(e, t, n) {
  if (ua) return e(t, n);
  ua = !0;
  try {
    return Md(e, t, n);
  } finally {
    (ua = !1), (hr !== null || mr !== null) && (Ld(), Od());
  }
}
function vi(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = fl(n);
  if (r === null) return null;
  n = r[t];
  e: switch (t) {
    case "onClick":
    case "onClickCapture":
    case "onDoubleClick":
    case "onDoubleClickCapture":
    case "onMouseDown":
    case "onMouseDownCapture":
    case "onMouseMove":
    case "onMouseMoveCapture":
    case "onMouseUp":
    case "onMouseUpCapture":
    case "onMouseEnter":
      (r = !r.disabled) ||
        ((e = e.type),
        (r = !(
          e === "button" ||
          e === "input" ||
          e === "select" ||
          e === "textarea"
        ))),
        (e = !r);
      break e;
    default:
      e = !1;
  }
  if (e) return null;
  if (n && typeof n != "function") throw Error(j(231, t, typeof n));
  return n;
}
var Ja = !1;
if (Kt)
  try {
    var Ur = {};
    Object.defineProperty(Ur, "passive", {
      get: function () {
        Ja = !0;
      },
    }),
      window.addEventListener("test", Ur, Ur),
      window.removeEventListener("test", Ur, Ur);
  } catch {
    Ja = !1;
  }
function lv(e, t, n, r, i, o, l, a, s) {
  var u = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, u);
  } catch (d) {
    this.onError(d);
  }
}
var ni = !1,
  jo = null,
  Oo = !1,
  Za = null,
  av = {
    onError: function (e) {
      (ni = !0), (jo = e);
    },
  };
function sv(e, t, n, r, i, o, l, a, s) {
  (ni = !1), (jo = null), lv.apply(av, arguments);
}
function uv(e, t, n, r, i, o, l, a, s) {
  if ((sv.apply(this, arguments), ni)) {
    if (ni) {
      var u = jo;
      (ni = !1), (jo = null);
    } else throw Error(j(198));
    Oo || ((Oo = !0), (Za = u));
  }
}
function Qn(e) {
  var t = e,
    n = e;
  if (e.alternate) for (; t.return; ) t = t.return;
  else {
    e = t;
    do (t = e), t.flags & 4098 && (n = t.return), (e = t.return);
    while (e);
  }
  return t.tag === 3 ? n : null;
}
function Dd(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (
      (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
      t !== null)
    )
      return t.dehydrated;
  }
  return null;
}
function Cc(e) {
  if (Qn(e) !== e) throw Error(j(188));
}
function cv(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = Qn(e)), t === null)) throw Error(j(188));
    return t !== e ? null : e;
  }
  for (var n = e, r = t; ; ) {
    var i = n.return;
    if (i === null) break;
    var o = i.alternate;
    if (o === null) {
      if (((r = i.return), r !== null)) {
        n = r;
        continue;
      }
      break;
    }
    if (i.child === o.child) {
      for (o = i.child; o; ) {
        if (o === n) return Cc(i), e;
        if (o === r) return Cc(i), t;
        o = o.sibling;
      }
      throw Error(j(188));
    }
    if (n.return !== r.return) (n = i), (r = o);
    else {
      for (var l = !1, a = i.child; a; ) {
        if (a === n) {
          (l = !0), (n = i), (r = o);
          break;
        }
        if (a === r) {
          (l = !0), (r = i), (n = o);
          break;
        }
        a = a.sibling;
      }
      if (!l) {
        for (a = o.child; a; ) {
          if (a === n) {
            (l = !0), (n = o), (r = i);
            break;
          }
          if (a === r) {
            (l = !0), (r = o), (n = i);
            break;
          }
          a = a.sibling;
        }
        if (!l) throw Error(j(189));
      }
    }
    if (n.alternate !== r) throw Error(j(190));
  }
  if (n.tag !== 3) throw Error(j(188));
  return n.stateNode.current === n ? e : t;
}
function zd(e) {
  return (e = cv(e)), e !== null ? Fd(e) : null;
}
function Fd(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = Fd(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var $d = et.unstable_scheduleCallback,
  _c = et.unstable_cancelCallback,
  fv = et.unstable_shouldYield,
  dv = et.unstable_requestPaint,
  ye = et.unstable_now,
  pv = et.unstable_getCurrentPriorityLevel,
  Gs = et.unstable_ImmediatePriority,
  Ud = et.unstable_UserBlockingPriority,
  Mo = et.unstable_NormalPriority,
  hv = et.unstable_LowPriority,
  Ad = et.unstable_IdlePriority,
  al = null,
  Lt = null;
function mv(e) {
  if (Lt && typeof Lt.onCommitFiberRoot == "function")
    try {
      Lt.onCommitFiberRoot(al, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var Et = Math.clz32 ? Math.clz32 : gv,
  vv = Math.log,
  yv = Math.LN2;
function gv(e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - ((vv(e) / yv) | 0)) | 0;
}
var Ji = 64,
  Zi = 4194304;
function Jr(e) {
  switch (e & -e) {
    case 1:
      return 1;
    case 2:
      return 2;
    case 4:
      return 4;
    case 8:
      return 8;
    case 16:
      return 16;
    case 32:
      return 32;
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return e & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return e & 130023424;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 1073741824;
    default:
      return e;
  }
}
function Lo(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0,
    i = e.suspendedLanes,
    o = e.pingedLanes,
    l = n & 268435455;
  if (l !== 0) {
    var a = l & ~i;
    a !== 0 ? (r = Jr(a)) : ((o &= l), o !== 0 && (r = Jr(o)));
  } else (l = n & ~i), l !== 0 ? (r = Jr(l)) : o !== 0 && (r = Jr(o));
  if (r === 0) return 0;
  if (
    t !== 0 &&
    t !== r &&
    !(t & i) &&
    ((i = r & -r), (o = t & -t), i >= o || (i === 16 && (o & 4194240) !== 0))
  )
    return t;
  if ((r & 4 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
    for (e = e.entanglements, t &= r; 0 < t; )
      (n = 31 - Et(t)), (i = 1 << n), (r |= e[n]), (t &= ~i);
  return r;
}
function wv(e, t) {
  switch (e) {
    case 1:
    case 2:
    case 4:
      return t + 250;
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return t + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1;
    default:
      return -1;
  }
}
function Sv(e, t) {
  for (
    var n = e.suspendedLanes,
      r = e.pingedLanes,
      i = e.expirationTimes,
      o = e.pendingLanes;
    0 < o;

  ) {
    var l = 31 - Et(o),
      a = 1 << l,
      s = i[l];
    s === -1
      ? (!(a & n) || a & r) && (i[l] = wv(a, t))
      : s <= t && (e.expiredLanes |= a),
      (o &= ~a);
  }
}
function es(e) {
  return (
    (e = e.pendingLanes & -1073741825),
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  );
}
function bd() {
  var e = Ji;
  return (Ji <<= 1), !(Ji & 4194240) && (Ji = 64), e;
}
function ca(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function Ii(e, t, n) {
  (e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - Et(t)),
    (e[t] = n);
}
function xv(e, t) {
  var n = e.pendingLanes & ~t;
  (e.pendingLanes = t),
    (e.suspendedLanes = 0),
    (e.pingedLanes = 0),
    (e.expiredLanes &= t),
    (e.mutableReadLanes &= t),
    (e.entangledLanes &= t),
    (t = e.entanglements);
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var i = 31 - Et(n),
      o = 1 << i;
    (t[i] = 0), (r[i] = -1), (e[i] = -1), (n &= ~o);
  }
}
function Js(e, t) {
  var n = (e.entangledLanes |= t);
  for (e = e.entanglements; n; ) {
    var r = 31 - Et(n),
      i = 1 << r;
    (i & t) | (e[r] & t) && (e[r] |= t), (n &= ~i);
  }
}
var X = 0;
function Wd(e) {
  return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1;
}
var Hd,
  Zs,
  Bd,
  Vd,
  Kd,
  ts = !1,
  eo = [],
  dn = null,
  pn = null,
  hn = null,
  yi = new Map(),
  gi = new Map(),
  sn = [],
  Ev =
    "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
      " "
    );
function Pc(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      dn = null;
      break;
    case "dragenter":
    case "dragleave":
      pn = null;
      break;
    case "mouseover":
    case "mouseout":
      hn = null;
      break;
    case "pointerover":
    case "pointerout":
      yi.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      gi.delete(t.pointerId);
  }
}
function Ar(e, t, n, r, i, o) {
  return e === null || e.nativeEvent !== o
    ? ((e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: o,
        targetContainers: [i],
      }),
      t !== null && ((t = zi(t)), t !== null && Zs(t)),
      e)
    : ((e.eventSystemFlags |= r),
      (t = e.targetContainers),
      i !== null && t.indexOf(i) === -1 && t.push(i),
      e);
}
function Rv(e, t, n, r, i) {
  switch (t) {
    case "focusin":
      return (dn = Ar(dn, e, t, n, r, i)), !0;
    case "dragenter":
      return (pn = Ar(pn, e, t, n, r, i)), !0;
    case "mouseover":
      return (hn = Ar(hn, e, t, n, r, i)), !0;
    case "pointerover":
      var o = i.pointerId;
      return yi.set(o, Ar(yi.get(o) || null, e, t, n, r, i)), !0;
    case "gotpointercapture":
      return (
        (o = i.pointerId), gi.set(o, Ar(gi.get(o) || null, e, t, n, r, i)), !0
      );
  }
  return !1;
}
function Qd(e) {
  var t = In(e.target);
  if (t !== null) {
    var n = Qn(t);
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = Dd(n)), t !== null)) {
          (e.blockedOn = t),
            Kd(e.priority, function () {
              Bd(n);
            });
          return;
        }
      } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
        e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
        return;
      }
    }
  }
  e.blockedOn = null;
}
function wo(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = ns(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      (Xa = r), n.target.dispatchEvent(r), (Xa = null);
    } else return (t = zi(n)), t !== null && Zs(t), (e.blockedOn = n), !1;
    t.shift();
  }
  return !0;
}
function kc(e, t, n) {
  wo(e) && n.delete(t);
}
function Cv() {
  (ts = !1),
    dn !== null && wo(dn) && (dn = null),
    pn !== null && wo(pn) && (pn = null),
    hn !== null && wo(hn) && (hn = null),
    yi.forEach(kc),
    gi.forEach(kc);
}
function br(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    ts ||
      ((ts = !0),
      et.unstable_scheduleCallback(et.unstable_NormalPriority, Cv)));
}
function wi(e) {
  function t(i) {
    return br(i, e);
  }
  if (0 < eo.length) {
    br(eo[0], e);
    for (var n = 1; n < eo.length; n++) {
      var r = eo[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (
    dn !== null && br(dn, e),
      pn !== null && br(pn, e),
      hn !== null && br(hn, e),
      yi.forEach(t),
      gi.forEach(t),
      n = 0;
    n < sn.length;
    n++
  )
    (r = sn[n]), r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < sn.length && ((n = sn[0]), n.blockedOn === null); )
    Qd(n), n.blockedOn === null && sn.shift();
}
var vr = Xt.ReactCurrentBatchConfig,
  Io = !0;
function _v(e, t, n, r) {
  var i = X,
    o = vr.transition;
  vr.transition = null;
  try {
    (X = 1), eu(e, t, n, r);
  } finally {
    (X = i), (vr.transition = o);
  }
}
function Pv(e, t, n, r) {
  var i = X,
    o = vr.transition;
  vr.transition = null;
  try {
    (X = 4), eu(e, t, n, r);
  } finally {
    (X = i), (vr.transition = o);
  }
}
function eu(e, t, n, r) {
  if (Io) {
    var i = ns(e, t, n, r);
    if (i === null) Sa(e, t, r, Do, n), Pc(e, r);
    else if (Rv(i, e, t, n, r)) r.stopPropagation();
    else if ((Pc(e, r), t & 4 && -1 < Ev.indexOf(e))) {
      for (; i !== null; ) {
        var o = zi(i);
        if (
          (o !== null && Hd(o),
          (o = ns(e, t, n, r)),
          o === null && Sa(e, t, r, Do, n),
          o === i)
        )
          break;
        i = o;
      }
      i !== null && r.stopPropagation();
    } else Sa(e, t, r, null, n);
  }
}
var Do = null;
function ns(e, t, n, r) {
  if (((Do = null), (e = Xs(r)), (e = In(e)), e !== null))
    if (((t = Qn(e)), t === null)) e = null;
    else if (((n = t.tag), n === 13)) {
      if (((e = Dd(t)), e !== null)) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
  return (Do = e), null;
}
function qd(e) {
  switch (e) {
    case "cancel":
    case "click":
    case "close":
    case "contextmenu":
    case "copy":
    case "cut":
    case "auxclick":
    case "dblclick":
    case "dragend":
    case "dragstart":
    case "drop":
    case "focusin":
    case "focusout":
    case "input":
    case "invalid":
    case "keydown":
    case "keypress":
    case "keyup":
    case "mousedown":
    case "mouseup":
    case "paste":
    case "pause":
    case "play":
    case "pointercancel":
    case "pointerdown":
    case "pointerup":
    case "ratechange":
    case "reset":
    case "resize":
    case "seeked":
    case "submit":
    case "touchcancel":
    case "touchend":
    case "touchstart":
    case "volumechange":
    case "change":
    case "selectionchange":
    case "textInput":
    case "compositionstart":
    case "compositionend":
    case "compositionupdate":
    case "beforeblur":
    case "afterblur":
    case "beforeinput":
    case "blur":
    case "fullscreenchange":
    case "focus":
    case "hashchange":
    case "popstate":
    case "select":
    case "selectstart":
      return 1;
    case "drag":
    case "dragenter":
    case "dragexit":
    case "dragleave":
    case "dragover":
    case "mousemove":
    case "mouseout":
    case "mouseover":
    case "pointermove":
    case "pointerout":
    case "pointerover":
    case "scroll":
    case "toggle":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
      return 4;
    case "message":
      switch (pv()) {
        case Gs:
          return 1;
        case Ud:
          return 4;
        case Mo:
        case hv:
          return 16;
        case Ad:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var cn = null,
  tu = null,
  So = null;
function Yd() {
  if (So) return So;
  var e,
    t = tu,
    n = t.length,
    r,
    i = "value" in cn ? cn.value : cn.textContent,
    o = i.length;
  for (e = 0; e < n && t[e] === i[e]; e++);
  var l = n - e;
  for (r = 1; r <= l && t[n - r] === i[o - r]; r++);
  return (So = i.slice(e, 1 < r ? 1 - r : void 0));
}
function xo(e) {
  var t = e.keyCode;
  return (
    "charCode" in e
      ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
      : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function to() {
  return !0;
}
function Nc() {
  return !1;
}
function nt(e) {
  function t(n, r, i, o, l) {
    (this._reactName = n),
      (this._targetInst = i),
      (this.type = r),
      (this.nativeEvent = o),
      (this.target = l),
      (this.currentTarget = null);
    for (var a in e)
      e.hasOwnProperty(a) && ((n = e[a]), (this[a] = n ? n(o) : o[a]));
    return (
      (this.isDefaultPrevented = (
        o.defaultPrevented != null ? o.defaultPrevented : o.returnValue === !1
      )
        ? to
        : Nc),
      (this.isPropagationStopped = Nc),
      this
    );
  }
  return (
    de(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n &&
          (n.preventDefault
            ? n.preventDefault()
            : typeof n.returnValue != "unknown" && (n.returnValue = !1),
          (this.isDefaultPrevented = to));
      },
      stopPropagation: function () {
        var n = this.nativeEvent;
        n &&
          (n.stopPropagation
            ? n.stopPropagation()
            : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
          (this.isPropagationStopped = to));
      },
      persist: function () {},
      isPersistent: to,
    }),
    t
  );
}
var Or = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  nu = nt(Or),
  Di = de({}, Or, { view: 0, detail: 0 }),
  kv = nt(Di),
  fa,
  da,
  Wr,
  sl = de({}, Di, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: ru,
    button: 0,
    buttons: 0,
    relatedTarget: function (e) {
      return e.relatedTarget === void 0
        ? e.fromElement === e.srcElement
          ? e.toElement
          : e.fromElement
        : e.relatedTarget;
    },
    movementX: function (e) {
      return "movementX" in e
        ? e.movementX
        : (e !== Wr &&
            (Wr && e.type === "mousemove"
              ? ((fa = e.screenX - Wr.screenX), (da = e.screenY - Wr.screenY))
              : (da = fa = 0),
            (Wr = e)),
          fa);
    },
    movementY: function (e) {
      return "movementY" in e ? e.movementY : da;
    },
  }),
  Tc = nt(sl),
  Nv = de({}, sl, { dataTransfer: 0 }),
  Tv = nt(Nv),
  jv = de({}, Di, { relatedTarget: 0 }),
  pa = nt(jv),
  Ov = de({}, Or, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  Mv = nt(Ov),
  Lv = de({}, Or, {
    clipboardData: function (e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    },
  }),
  Iv = nt(Lv),
  Dv = de({}, Or, { data: 0 }),
  jc = nt(Dv),
  zv = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified",
  },
  Fv = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta",
  },
  $v = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey",
  };
function Uv(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = $v[e]) ? !!t[e] : !1;
}
function ru() {
  return Uv;
}
var Av = de({}, Di, {
    key: function (e) {
      if (e.key) {
        var t = zv[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress"
        ? ((e = xo(e)), e === 13 ? "Enter" : String.fromCharCode(e))
        : e.type === "keydown" || e.type === "keyup"
        ? Fv[e.keyCode] || "Unidentified"
        : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: ru,
    charCode: function (e) {
      return e.type === "keypress" ? xo(e) : 0;
    },
    keyCode: function (e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === "keypress"
        ? xo(e)
        : e.type === "keydown" || e.type === "keyup"
        ? e.keyCode
        : 0;
    },
  }),
  bv = nt(Av),
  Wv = de({}, sl, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0,
  }),
  Oc = nt(Wv),
  Hv = de({}, Di, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: ru,
  }),
  Bv = nt(Hv),
  Vv = de({}, Or, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  Kv = nt(Vv),
  Qv = de({}, sl, {
    deltaX: function (e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function (e) {
      return "deltaY" in e
        ? e.deltaY
        : "wheelDeltaY" in e
        ? -e.wheelDeltaY
        : "wheelDelta" in e
        ? -e.wheelDelta
        : 0;
    },
    deltaZ: 0,
    deltaMode: 0,
  }),
  qv = nt(Qv),
  Yv = [9, 13, 27, 32],
  iu = Kt && "CompositionEvent" in window,
  ri = null;
Kt && "documentMode" in document && (ri = document.documentMode);
var Xv = Kt && "TextEvent" in window && !ri,
  Xd = Kt && (!iu || (ri && 8 < ri && 11 >= ri)),
  Mc = String.fromCharCode(32),
  Lc = !1;
function Gd(e, t) {
  switch (e) {
    case "keyup":
      return Yv.indexOf(t.keyCode) !== -1;
    case "keydown":
      return t.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
      return !0;
    default:
      return !1;
  }
}
function Jd(e) {
  return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
}
var tr = !1;
function Gv(e, t) {
  switch (e) {
    case "compositionend":
      return Jd(t);
    case "keypress":
      return t.which !== 32 ? null : ((Lc = !0), Mc);
    case "textInput":
      return (e = t.data), e === Mc && Lc ? null : e;
    default:
      return null;
  }
}
function Jv(e, t) {
  if (tr)
    return e === "compositionend" || (!iu && Gd(e, t))
      ? ((e = Yd()), (So = tu = cn = null), (tr = !1), e)
      : null;
  switch (e) {
    case "paste":
      return null;
    case "keypress":
      if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
        if (t.char && 1 < t.char.length) return t.char;
        if (t.which) return String.fromCharCode(t.which);
      }
      return null;
    case "compositionend":
      return Xd && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var Zv = {
  color: !0,
  date: !0,
  datetime: !0,
  "datetime-local": !0,
  email: !0,
  month: !0,
  number: !0,
  password: !0,
  range: !0,
  search: !0,
  tel: !0,
  text: !0,
  time: !0,
  url: !0,
  week: !0,
};
function Ic(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!Zv[e.type] : t === "textarea";
}
function Zd(e, t, n, r) {
  jd(r),
    (t = zo(t, "onChange")),
    0 < t.length &&
      ((n = new nu("onChange", "change", null, n, r)),
      e.push({ event: n, listeners: t }));
}
var ii = null,
  Si = null;
function ey(e) {
  cp(e, 0);
}
function ul(e) {
  var t = ir(e);
  if (Rd(t)) return e;
}
function ty(e, t) {
  if (e === "change") return t;
}
var ep = !1;
if (Kt) {
  var ha;
  if (Kt) {
    var ma = "oninput" in document;
    if (!ma) {
      var Dc = document.createElement("div");
      Dc.setAttribute("oninput", "return;"),
        (ma = typeof Dc.oninput == "function");
    }
    ha = ma;
  } else ha = !1;
  ep = ha && (!document.documentMode || 9 < document.documentMode);
}
function zc() {
  ii && (ii.detachEvent("onpropertychange", tp), (Si = ii = null));
}
function tp(e) {
  if (e.propertyName === "value" && ul(Si)) {
    var t = [];
    Zd(t, Si, e, Xs(e)), Id(ey, t);
  }
}
function ny(e, t, n) {
  e === "focusin"
    ? (zc(), (ii = t), (Si = n), ii.attachEvent("onpropertychange", tp))
    : e === "focusout" && zc();
}
function ry(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return ul(Si);
}
function iy(e, t) {
  if (e === "click") return ul(t);
}
function oy(e, t) {
  if (e === "input" || e === "change") return ul(t);
}
function ly(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var Ct = typeof Object.is == "function" ? Object.is : ly;
function xi(e, t) {
  if (Ct(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  var n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var i = n[r];
    if (!$a.call(t, i) || !Ct(e[i], t[i])) return !1;
  }
  return !0;
}
function Fc(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function $c(e, t) {
  var n = Fc(e);
  e = 0;
  for (var r; n; ) {
    if (n.nodeType === 3) {
      if (((r = e + n.textContent.length), e <= t && r >= t))
        return { node: n, offset: t - e };
      e = r;
    }
    e: {
      for (; n; ) {
        if (n.nextSibling) {
          n = n.nextSibling;
          break e;
        }
        n = n.parentNode;
      }
      n = void 0;
    }
    n = Fc(n);
  }
}
function np(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
      ? !1
      : t && t.nodeType === 3
      ? np(e, t.parentNode)
      : "contains" in e
      ? e.contains(t)
      : e.compareDocumentPosition
      ? !!(e.compareDocumentPosition(t) & 16)
      : !1
    : !1;
}
function rp() {
  for (var e = window, t = To(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = To(e.document);
  }
  return t;
}
function ou(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return (
    t &&
    ((t === "input" &&
      (e.type === "text" ||
        e.type === "search" ||
        e.type === "tel" ||
        e.type === "url" ||
        e.type === "password")) ||
      t === "textarea" ||
      e.contentEditable === "true")
  );
}
function ay(e) {
  var t = rp(),
    n = e.focusedElem,
    r = e.selectionRange;
  if (
    t !== n &&
    n &&
    n.ownerDocument &&
    np(n.ownerDocument.documentElement, n)
  ) {
    if (r !== null && ou(n)) {
      if (
        ((t = r.start),
        (e = r.end),
        e === void 0 && (e = t),
        "selectionStart" in n)
      )
        (n.selectionStart = t), (n.selectionEnd = Math.min(e, n.value.length));
      else if (
        ((e = ((t = n.ownerDocument || document) && t.defaultView) || window),
        e.getSelection)
      ) {
        e = e.getSelection();
        var i = n.textContent.length,
          o = Math.min(r.start, i);
        (r = r.end === void 0 ? o : Math.min(r.end, i)),
          !e.extend && o > r && ((i = r), (r = o), (o = i)),
          (i = $c(n, o));
        var l = $c(n, r);
        i &&
          l &&
          (e.rangeCount !== 1 ||
            e.anchorNode !== i.node ||
            e.anchorOffset !== i.offset ||
            e.focusNode !== l.node ||
            e.focusOffset !== l.offset) &&
          ((t = t.createRange()),
          t.setStart(i.node, i.offset),
          e.removeAllRanges(),
          o > r
            ? (e.addRange(t), e.extend(l.node, l.offset))
            : (t.setEnd(l.node, l.offset), e.addRange(t)));
      }
    }
    for (t = [], e = n; (e = e.parentNode); )
      e.nodeType === 1 &&
        t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++)
      (e = t[n]),
        (e.element.scrollLeft = e.left),
        (e.element.scrollTop = e.top);
  }
}
var sy = Kt && "documentMode" in document && 11 >= document.documentMode,
  nr = null,
  rs = null,
  oi = null,
  is = !1;
function Uc(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  is ||
    nr == null ||
    nr !== To(r) ||
    ((r = nr),
    "selectionStart" in r && ou(r)
      ? (r = { start: r.selectionStart, end: r.selectionEnd })
      : ((r = (
          (r.ownerDocument && r.ownerDocument.defaultView) ||
          window
        ).getSelection()),
        (r = {
          anchorNode: r.anchorNode,
          anchorOffset: r.anchorOffset,
          focusNode: r.focusNode,
          focusOffset: r.focusOffset,
        })),
    (oi && xi(oi, r)) ||
      ((oi = r),
      (r = zo(rs, "onSelect")),
      0 < r.length &&
        ((t = new nu("onSelect", "select", null, t, n)),
        e.push({ event: t, listeners: r }),
        (t.target = nr))));
}
function no(e, t) {
  var n = {};
  return (
    (n[e.toLowerCase()] = t.toLowerCase()),
    (n["Webkit" + e] = "webkit" + t),
    (n["Moz" + e] = "moz" + t),
    n
  );
}
var rr = {
    animationend: no("Animation", "AnimationEnd"),
    animationiteration: no("Animation", "AnimationIteration"),
    animationstart: no("Animation", "AnimationStart"),
    transitionend: no("Transition", "TransitionEnd"),
  },
  va = {},
  ip = {};
Kt &&
  ((ip = document.createElement("div").style),
  "AnimationEvent" in window ||
    (delete rr.animationend.animation,
    delete rr.animationiteration.animation,
    delete rr.animationstart.animation),
  "TransitionEvent" in window || delete rr.transitionend.transition);
function cl(e) {
  if (va[e]) return va[e];
  if (!rr[e]) return e;
  var t = rr[e],
    n;
  for (n in t) if (t.hasOwnProperty(n) && n in ip) return (va[e] = t[n]);
  return e;
}
var op = cl("animationend"),
  lp = cl("animationiteration"),
  ap = cl("animationstart"),
  sp = cl("transitionend"),
  up = new Map(),
  Ac =
    "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " "
    );
function Cn(e, t) {
  up.set(e, t), Kn(t, [e]);
}
for (var ya = 0; ya < Ac.length; ya++) {
  var ga = Ac[ya],
    uy = ga.toLowerCase(),
    cy = ga[0].toUpperCase() + ga.slice(1);
  Cn(uy, "on" + cy);
}
Cn(op, "onAnimationEnd");
Cn(lp, "onAnimationIteration");
Cn(ap, "onAnimationStart");
Cn("dblclick", "onDoubleClick");
Cn("focusin", "onFocus");
Cn("focusout", "onBlur");
Cn(sp, "onTransitionEnd");
Sr("onMouseEnter", ["mouseout", "mouseover"]);
Sr("onMouseLeave", ["mouseout", "mouseover"]);
Sr("onPointerEnter", ["pointerout", "pointerover"]);
Sr("onPointerLeave", ["pointerout", "pointerover"]);
Kn(
  "onChange",
  "change click focusin focusout input keydown keyup selectionchange".split(" ")
);
Kn(
  "onSelect",
  "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
    " "
  )
);
Kn("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
Kn(
  "onCompositionEnd",
  "compositionend focusout keydown keypress keyup mousedown".split(" ")
);
Kn(
  "onCompositionStart",
  "compositionstart focusout keydown keypress keyup mousedown".split(" ")
);
Kn(
  "onCompositionUpdate",
  "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
);
var Zr =
    "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " "
    ),
  fy = new Set("cancel close invalid load scroll toggle".split(" ").concat(Zr));
function bc(e, t, n) {
  var r = e.type || "unknown-event";
  (e.currentTarget = n), uv(r, t, void 0, e), (e.currentTarget = null);
}
function cp(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n],
      i = r.event;
    r = r.listeners;
    e: {
      var o = void 0;
      if (t)
        for (var l = r.length - 1; 0 <= l; l--) {
          var a = r[l],
            s = a.instance,
            u = a.currentTarget;
          if (((a = a.listener), s !== o && i.isPropagationStopped())) break e;
          bc(i, a, u), (o = s);
        }
      else
        for (l = 0; l < r.length; l++) {
          if (
            ((a = r[l]),
            (s = a.instance),
            (u = a.currentTarget),
            (a = a.listener),
            s !== o && i.isPropagationStopped())
          )
            break e;
          bc(i, a, u), (o = s);
        }
    }
  }
  if (Oo) throw ((e = Za), (Oo = !1), (Za = null), e);
}
function ie(e, t) {
  var n = t[us];
  n === void 0 && (n = t[us] = new Set());
  var r = e + "__bubble";
  n.has(r) || (fp(t, e, 2, !1), n.add(r));
}
function wa(e, t, n) {
  var r = 0;
  t && (r |= 4), fp(n, e, r, t);
}
var ro = "_reactListening" + Math.random().toString(36).slice(2);
function Ei(e) {
  if (!e[ro]) {
    (e[ro] = !0),
      gd.forEach(function (n) {
        n !== "selectionchange" && (fy.has(n) || wa(n, !1, e), wa(n, !0, e));
      });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[ro] || ((t[ro] = !0), wa("selectionchange", !1, t));
  }
}
function fp(e, t, n, r) {
  switch (qd(t)) {
    case 1:
      var i = _v;
      break;
    case 4:
      i = Pv;
      break;
    default:
      i = eu;
  }
  (n = i.bind(null, t, n, e)),
    (i = void 0),
    !Ja ||
      (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
      (i = !0),
    r
      ? i !== void 0
        ? e.addEventListener(t, n, { capture: !0, passive: i })
        : e.addEventListener(t, n, !0)
      : i !== void 0
      ? e.addEventListener(t, n, { passive: i })
      : e.addEventListener(t, n, !1);
}
function Sa(e, t, n, r, i) {
  var o = r;
  if (!(t & 1) && !(t & 2) && r !== null)
    e: for (;;) {
      if (r === null) return;
      var l = r.tag;
      if (l === 3 || l === 4) {
        var a = r.stateNode.containerInfo;
        if (a === i || (a.nodeType === 8 && a.parentNode === i)) break;
        if (l === 4)
          for (l = r.return; l !== null; ) {
            var s = l.tag;
            if (
              (s === 3 || s === 4) &&
              ((s = l.stateNode.containerInfo),
              s === i || (s.nodeType === 8 && s.parentNode === i))
            )
              return;
            l = l.return;
          }
        for (; a !== null; ) {
          if (((l = In(a)), l === null)) return;
          if (((s = l.tag), s === 5 || s === 6)) {
            r = o = l;
            continue e;
          }
          a = a.parentNode;
        }
      }
      r = r.return;
    }
  Id(function () {
    var u = o,
      d = Xs(n),
      v = [];
    e: {
      var g = up.get(e);
      if (g !== void 0) {
        var y = nu,
          w = e;
        switch (e) {
          case "keypress":
            if (xo(n) === 0) break e;
          case "keydown":
          case "keyup":
            y = bv;
            break;
          case "focusin":
            (w = "focus"), (y = pa);
            break;
          case "focusout":
            (w = "blur"), (y = pa);
            break;
          case "beforeblur":
          case "afterblur":
            y = pa;
            break;
          case "click":
            if (n.button === 2) break e;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            y = Tc;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            y = Tv;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            y = Bv;
            break;
          case op:
          case lp:
          case ap:
            y = Mv;
            break;
          case sp:
            y = Kv;
            break;
          case "scroll":
            y = kv;
            break;
          case "wheel":
            y = qv;
            break;
          case "copy":
          case "cut":
          case "paste":
            y = Iv;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            y = Oc;
        }
        var x = (t & 4) !== 0,
          P = !x && e === "scroll",
          m = x ? (g !== null ? g + "Capture" : null) : g;
        x = [];
        for (var c = u, p; c !== null; ) {
          p = c;
          var f = p.stateNode;
          if (
            (p.tag === 5 &&
              f !== null &&
              ((p = f),
              m !== null && ((f = vi(c, m)), f != null && x.push(Ri(c, f, p)))),
            P)
          )
            break;
          c = c.return;
        }
        0 < x.length &&
          ((g = new y(g, w, null, n, d)), v.push({ event: g, listeners: x }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (
          ((g = e === "mouseover" || e === "pointerover"),
          (y = e === "mouseout" || e === "pointerout"),
          g &&
            n !== Xa &&
            (w = n.relatedTarget || n.fromElement) &&
            (In(w) || w[Qt]))
        )
          break e;
        if (
          (y || g) &&
          ((g =
            d.window === d
              ? d
              : (g = d.ownerDocument)
              ? g.defaultView || g.parentWindow
              : window),
          y
            ? ((w = n.relatedTarget || n.toElement),
              (y = u),
              (w = w ? In(w) : null),
              w !== null &&
                ((P = Qn(w)), w !== P || (w.tag !== 5 && w.tag !== 6)) &&
                (w = null))
            : ((y = null), (w = u)),
          y !== w)
        ) {
          if (
            ((x = Tc),
            (f = "onMouseLeave"),
            (m = "onMouseEnter"),
            (c = "mouse"),
            (e === "pointerout" || e === "pointerover") &&
              ((x = Oc),
              (f = "onPointerLeave"),
              (m = "onPointerEnter"),
              (c = "pointer")),
            (P = y == null ? g : ir(y)),
            (p = w == null ? g : ir(w)),
            (g = new x(f, c + "leave", y, n, d)),
            (g.target = P),
            (g.relatedTarget = p),
            (f = null),
            In(d) === u &&
              ((x = new x(m, c + "enter", w, n, d)),
              (x.target = p),
              (x.relatedTarget = P),
              (f = x)),
            (P = f),
            y && w)
          )
            t: {
              for (x = y, m = w, c = 0, p = x; p; p = Gn(p)) c++;
              for (p = 0, f = m; f; f = Gn(f)) p++;
              for (; 0 < c - p; ) (x = Gn(x)), c--;
              for (; 0 < p - c; ) (m = Gn(m)), p--;
              for (; c--; ) {
                if (x === m || (m !== null && x === m.alternate)) break t;
                (x = Gn(x)), (m = Gn(m));
              }
              x = null;
            }
          else x = null;
          y !== null && Wc(v, g, y, x, !1),
            w !== null && P !== null && Wc(v, P, w, x, !0);
        }
      }
      e: {
        if (
          ((g = u ? ir(u) : window),
          (y = g.nodeName && g.nodeName.toLowerCase()),
          y === "select" || (y === "input" && g.type === "file"))
        )
          var S = ty;
        else if (Ic(g))
          if (ep) S = oy;
          else {
            S = ry;
            var R = ny;
          }
        else
          (y = g.nodeName) &&
            y.toLowerCase() === "input" &&
            (g.type === "checkbox" || g.type === "radio") &&
            (S = iy);
        if (S && (S = S(e, u))) {
          Zd(v, S, n, d);
          break e;
        }
        R && R(e, g, u),
          e === "focusout" &&
            (R = g._wrapperState) &&
            R.controlled &&
            g.type === "number" &&
            Va(g, "number", g.value);
      }
      switch (((R = u ? ir(u) : window), e)) {
        case "focusin":
          (Ic(R) || R.contentEditable === "true") &&
            ((nr = R), (rs = u), (oi = null));
          break;
        case "focusout":
          oi = rs = nr = null;
          break;
        case "mousedown":
          is = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          (is = !1), Uc(v, n, d);
          break;
        case "selectionchange":
          if (sy) break;
        case "keydown":
        case "keyup":
          Uc(v, n, d);
      }
      var N;
      if (iu)
        e: {
          switch (e) {
            case "compositionstart":
              var T = "onCompositionStart";
              break e;
            case "compositionend":
              T = "onCompositionEnd";
              break e;
            case "compositionupdate":
              T = "onCompositionUpdate";
              break e;
          }
          T = void 0;
        }
      else
        tr
          ? Gd(e, n) && (T = "onCompositionEnd")
          : e === "keydown" && n.keyCode === 229 && (T = "onCompositionStart");
      T &&
        (Xd &&
          n.locale !== "ko" &&
          (tr || T !== "onCompositionStart"
            ? T === "onCompositionEnd" && tr && (N = Yd())
            : ((cn = d),
              (tu = "value" in cn ? cn.value : cn.textContent),
              (tr = !0))),
        (R = zo(u, T)),
        0 < R.length &&
          ((T = new jc(T, e, null, n, d)),
          v.push({ event: T, listeners: R }),
          N ? (T.data = N) : ((N = Jd(n)), N !== null && (T.data = N)))),
        (N = Xv ? Gv(e, n) : Jv(e, n)) &&
          ((u = zo(u, "onBeforeInput")),
          0 < u.length &&
            ((d = new jc("onBeforeInput", "beforeinput", null, n, d)),
            v.push({ event: d, listeners: u }),
            (d.data = N)));
    }
    cp(v, t);
  });
}
function Ri(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function zo(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var i = e,
      o = i.stateNode;
    i.tag === 5 &&
      o !== null &&
      ((i = o),
      (o = vi(e, n)),
      o != null && r.unshift(Ri(e, o, i)),
      (o = vi(e, t)),
      o != null && r.push(Ri(e, o, i))),
      (e = e.return);
  }
  return r;
}
function Gn(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function Wc(e, t, n, r, i) {
  for (var o = t._reactName, l = []; n !== null && n !== r; ) {
    var a = n,
      s = a.alternate,
      u = a.stateNode;
    if (s !== null && s === r) break;
    a.tag === 5 &&
      u !== null &&
      ((a = u),
      i
        ? ((s = vi(n, o)), s != null && l.unshift(Ri(n, s, a)))
        : i || ((s = vi(n, o)), s != null && l.push(Ri(n, s, a)))),
      (n = n.return);
  }
  l.length !== 0 && e.push({ event: t, listeners: l });
}
var dy = /\r\n?/g,
  py = /\u0000|\uFFFD/g;
function Hc(e) {
  return (typeof e == "string" ? e : "" + e)
    .replace(
      dy,
      `
`
    )
    .replace(py, "");
}
function io(e, t, n) {
  if (((t = Hc(t)), Hc(e) !== t && n)) throw Error(j(425));
}
function Fo() {}
var os = null,
  ls = null;
function as(e, t) {
  return (
    e === "textarea" ||
    e === "noscript" ||
    typeof t.children == "string" ||
    typeof t.children == "number" ||
    (typeof t.dangerouslySetInnerHTML == "object" &&
      t.dangerouslySetInnerHTML !== null &&
      t.dangerouslySetInnerHTML.__html != null)
  );
}
var ss = typeof setTimeout == "function" ? setTimeout : void 0,
  hy = typeof clearTimeout == "function" ? clearTimeout : void 0,
  Bc = typeof Promise == "function" ? Promise : void 0,
  my =
    typeof queueMicrotask == "function"
      ? queueMicrotask
      : typeof Bc < "u"
      ? function (e) {
          return Bc.resolve(null).then(e).catch(vy);
        }
      : ss;
function vy(e) {
  setTimeout(function () {
    throw e;
  });
}
function xa(e, t) {
  var n = t,
    r = 0;
  do {
    var i = n.nextSibling;
    if ((e.removeChild(n), i && i.nodeType === 8))
      if (((n = i.data), n === "/$")) {
        if (r === 0) {
          e.removeChild(i), wi(t);
          return;
        }
        r--;
      } else (n !== "$" && n !== "$?" && n !== "$!") || r++;
    n = i;
  } while (n);
  wi(t);
}
function mn(e) {
  for (; e != null; e = e.nextSibling) {
    var t = e.nodeType;
    if (t === 1 || t === 3) break;
    if (t === 8) {
      if (((t = e.data), t === "$" || t === "$!" || t === "$?")) break;
      if (t === "/$") return null;
    }
  }
  return e;
}
function Vc(e) {
  e = e.previousSibling;
  for (var t = 0; e; ) {
    if (e.nodeType === 8) {
      var n = e.data;
      if (n === "$" || n === "$!" || n === "$?") {
        if (t === 0) return e;
        t--;
      } else n === "/$" && t++;
    }
    e = e.previousSibling;
  }
  return null;
}
var Mr = Math.random().toString(36).slice(2),
  jt = "__reactFiber$" + Mr,
  Ci = "__reactProps$" + Mr,
  Qt = "__reactContainer$" + Mr,
  us = "__reactEvents$" + Mr,
  yy = "__reactListeners$" + Mr,
  gy = "__reactHandles$" + Mr;
function In(e) {
  var t = e[jt];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if ((t = n[Qt] || n[jt])) {
      if (
        ((n = t.alternate),
        t.child !== null || (n !== null && n.child !== null))
      )
        for (e = Vc(e); e !== null; ) {
          if ((n = e[jt])) return n;
          e = Vc(e);
        }
      return t;
    }
    (e = n), (n = e.parentNode);
  }
  return null;
}
function zi(e) {
  return (
    (e = e[jt] || e[Qt]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  );
}
function ir(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(j(33));
}
function fl(e) {
  return e[Ci] || null;
}
var cs = [],
  or = -1;
function _n(e) {
  return { current: e };
}
function oe(e) {
  0 > or || ((e.current = cs[or]), (cs[or] = null), or--);
}
function re(e, t) {
  or++, (cs[or] = e.current), (e.current = t);
}
var En = {},
  Fe = _n(En),
  Ve = _n(!1),
  An = En;
function xr(e, t) {
  var n = e.type.contextTypes;
  if (!n) return En;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
    return r.__reactInternalMemoizedMaskedChildContext;
  var i = {},
    o;
  for (o in n) i[o] = t[o];
  return (
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = t),
      (e.__reactInternalMemoizedMaskedChildContext = i)),
    i
  );
}
function Ke(e) {
  return (e = e.childContextTypes), e != null;
}
function $o() {
  oe(Ve), oe(Fe);
}
function Kc(e, t, n) {
  if (Fe.current !== En) throw Error(j(168));
  re(Fe, t), re(Ve, n);
}
function dp(e, t, n) {
  var r = e.stateNode;
  if (((t = t.childContextTypes), typeof r.getChildContext != "function"))
    return n;
  r = r.getChildContext();
  for (var i in r) if (!(i in t)) throw Error(j(108, nv(e) || "Unknown", i));
  return de({}, n, r);
}
function Uo(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || En),
    (An = Fe.current),
    re(Fe, e),
    re(Ve, Ve.current),
    !0
  );
}
function Qc(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(j(169));
  n
    ? ((e = dp(e, t, An)),
      (r.__reactInternalMemoizedMergedChildContext = e),
      oe(Ve),
      oe(Fe),
      re(Fe, e))
    : oe(Ve),
    re(Ve, n);
}
var At = null,
  dl = !1,
  Ea = !1;
function pp(e) {
  At === null ? (At = [e]) : At.push(e);
}
function wy(e) {
  (dl = !0), pp(e);
}
function Pn() {
  if (!Ea && At !== null) {
    Ea = !0;
    var e = 0,
      t = X;
    try {
      var n = At;
      for (X = 1; e < n.length; e++) {
        var r = n[e];
        do r = r(!0);
        while (r !== null);
      }
      (At = null), (dl = !1);
    } catch (i) {
      throw (At !== null && (At = At.slice(e + 1)), $d(Gs, Pn), i);
    } finally {
      (X = t), (Ea = !1);
    }
  }
  return null;
}
var lr = [],
  ar = 0,
  Ao = null,
  bo = 0,
  at = [],
  st = 0,
  bn = null,
  Wt = 1,
  Ht = "";
function On(e, t) {
  (lr[ar++] = bo), (lr[ar++] = Ao), (Ao = e), (bo = t);
}
function hp(e, t, n) {
  (at[st++] = Wt), (at[st++] = Ht), (at[st++] = bn), (bn = e);
  var r = Wt;
  e = Ht;
  var i = 32 - Et(r) - 1;
  (r &= ~(1 << i)), (n += 1);
  var o = 32 - Et(t) + i;
  if (30 < o) {
    var l = i - (i % 5);
    (o = (r & ((1 << l) - 1)).toString(32)),
      (r >>= l),
      (i -= l),
      (Wt = (1 << (32 - Et(t) + i)) | (n << i) | r),
      (Ht = o + e);
  } else (Wt = (1 << o) | (n << i) | r), (Ht = e);
}
function lu(e) {
  e.return !== null && (On(e, 1), hp(e, 1, 0));
}
function au(e) {
  for (; e === Ao; )
    (Ao = lr[--ar]), (lr[ar] = null), (bo = lr[--ar]), (lr[ar] = null);
  for (; e === bn; )
    (bn = at[--st]),
      (at[st] = null),
      (Ht = at[--st]),
      (at[st] = null),
      (Wt = at[--st]),
      (at[st] = null);
}
var Ze = null,
  Je = null,
  le = !1,
  xt = null;
function mp(e, t) {
  var n = ut(5, null, null, 0);
  (n.elementType = "DELETED"),
    (n.stateNode = t),
    (n.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
}
function qc(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return (
        (t =
          t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
            ? null
            : t),
        t !== null
          ? ((e.stateNode = t), (Ze = e), (Je = mn(t.firstChild)), !0)
          : !1
      );
    case 6:
      return (
        (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), (Ze = e), (Je = null), !0) : !1
      );
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((n = bn !== null ? { id: Wt, overflow: Ht } : null),
            (e.memoizedState = {
              dehydrated: t,
              treeContext: n,
              retryLane: 1073741824,
            }),
            (n = ut(18, null, null, 0)),
            (n.stateNode = t),
            (n.return = e),
            (e.child = n),
            (Ze = e),
            (Je = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function fs(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function ds(e) {
  if (le) {
    var t = Je;
    if (t) {
      var n = t;
      if (!qc(e, t)) {
        if (fs(e)) throw Error(j(418));
        t = mn(n.nextSibling);
        var r = Ze;
        t && qc(e, t)
          ? mp(r, n)
          : ((e.flags = (e.flags & -4097) | 2), (le = !1), (Ze = e));
      }
    } else {
      if (fs(e)) throw Error(j(418));
      (e.flags = (e.flags & -4097) | 2), (le = !1), (Ze = e);
    }
  }
}
function Yc(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  Ze = e;
}
function oo(e) {
  if (e !== Ze) return !1;
  if (!le) return Yc(e), (le = !0), !1;
  var t;
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type),
      (t = t !== "head" && t !== "body" && !as(e.type, e.memoizedProps))),
    t && (t = Je))
  ) {
    if (fs(e)) throw (vp(), Error(j(418)));
    for (; t; ) mp(e, t), (t = mn(t.nextSibling));
  }
  if ((Yc(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(j(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              Je = mn(e.nextSibling);
              break e;
            }
            t--;
          } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
        }
        e = e.nextSibling;
      }
      Je = null;
    }
  } else Je = Ze ? mn(e.stateNode.nextSibling) : null;
  return !0;
}
function vp() {
  for (var e = Je; e; ) e = mn(e.nextSibling);
}
function Er() {
  (Je = Ze = null), (le = !1);
}
function su(e) {
  xt === null ? (xt = [e]) : xt.push(e);
}
var Sy = Xt.ReactCurrentBatchConfig;
function gt(e, t) {
  if (e && e.defaultProps) {
    (t = de({}, t)), (e = e.defaultProps);
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
var Wo = _n(null),
  Ho = null,
  sr = null,
  uu = null;
function cu() {
  uu = sr = Ho = null;
}
function fu(e) {
  var t = Wo.current;
  oe(Wo), (e._currentValue = t);
}
function ps(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if (
      ((e.childLanes & t) !== t
        ? ((e.childLanes |= t), r !== null && (r.childLanes |= t))
        : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
      e === n)
    )
      break;
    e = e.return;
  }
}
function yr(e, t) {
  (Ho = e),
    (uu = sr = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      (e.lanes & t && (Be = !0), (e.firstContext = null));
}
function ft(e) {
  var t = e._currentValue;
  if (uu !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), sr === null)) {
      if (Ho === null) throw Error(j(308));
      (sr = e), (Ho.dependencies = { lanes: 0, firstContext: e });
    } else sr = sr.next = e;
  return t;
}
var Dn = null;
function du(e) {
  Dn === null ? (Dn = [e]) : Dn.push(e);
}
function yp(e, t, n, r) {
  var i = t.interleaved;
  return (
    i === null ? ((n.next = n), du(t)) : ((n.next = i.next), (i.next = n)),
    (t.interleaved = n),
    qt(e, r)
  );
}
function qt(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
    (e.childLanes |= t),
      (n = e.alternate),
      n !== null && (n.childLanes |= t),
      (n = e),
      (e = e.return);
  return n.tag === 3 ? n.stateNode : null;
}
var an = !1;
function pu(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function gp(e, t) {
  (e = e.updateQueue),
    t.updateQueue === e &&
      (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects,
      });
}
function Bt(e, t) {
  return {
    eventTime: e,
    lane: t,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  };
}
function vn(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (((r = r.shared), Q & 2)) {
    var i = r.pending;
    return (
      i === null ? (t.next = t) : ((t.next = i.next), (i.next = t)),
      (r.pending = t),
      qt(e, n)
    );
  }
  return (
    (i = r.interleaved),
    i === null ? ((t.next = t), du(r)) : ((t.next = i.next), (i.next = t)),
    (r.interleaved = t),
    qt(e, n)
  );
}
function Eo(e, t, n) {
  if (
    ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
  ) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), Js(e, n);
  }
}
function Xc(e, t) {
  var n = e.updateQueue,
    r = e.alternate;
  if (r !== null && ((r = r.updateQueue), n === r)) {
    var i = null,
      o = null;
    if (((n = n.firstBaseUpdate), n !== null)) {
      do {
        var l = {
          eventTime: n.eventTime,
          lane: n.lane,
          tag: n.tag,
          payload: n.payload,
          callback: n.callback,
          next: null,
        };
        o === null ? (i = o = l) : (o = o.next = l), (n = n.next);
      } while (n !== null);
      o === null ? (i = o = t) : (o = o.next = t);
    } else i = o = t;
    (n = {
      baseState: r.baseState,
      firstBaseUpdate: i,
      lastBaseUpdate: o,
      shared: r.shared,
      effects: r.effects,
    }),
      (e.updateQueue = n);
    return;
  }
  (e = n.lastBaseUpdate),
    e === null ? (n.firstBaseUpdate = t) : (e.next = t),
    (n.lastBaseUpdate = t);
}
function Bo(e, t, n, r) {
  var i = e.updateQueue;
  an = !1;
  var o = i.firstBaseUpdate,
    l = i.lastBaseUpdate,
    a = i.shared.pending;
  if (a !== null) {
    i.shared.pending = null;
    var s = a,
      u = s.next;
    (s.next = null), l === null ? (o = u) : (l.next = u), (l = s);
    var d = e.alternate;
    d !== null &&
      ((d = d.updateQueue),
      (a = d.lastBaseUpdate),
      a !== l &&
        (a === null ? (d.firstBaseUpdate = u) : (a.next = u),
        (d.lastBaseUpdate = s)));
  }
  if (o !== null) {
    var v = i.baseState;
    (l = 0), (d = u = s = null), (a = o);
    do {
      var g = a.lane,
        y = a.eventTime;
      if ((r & g) === g) {
        d !== null &&
          (d = d.next =
            {
              eventTime: y,
              lane: 0,
              tag: a.tag,
              payload: a.payload,
              callback: a.callback,
              next: null,
            });
        e: {
          var w = e,
            x = a;
          switch (((g = t), (y = n), x.tag)) {
            case 1:
              if (((w = x.payload), typeof w == "function")) {
                v = w.call(y, v, g);
                break e;
              }
              v = w;
              break e;
            case 3:
              w.flags = (w.flags & -65537) | 128;
            case 0:
              if (
                ((w = x.payload),
                (g = typeof w == "function" ? w.call(y, v, g) : w),
                g == null)
              )
                break e;
              v = de({}, v, g);
              break e;
            case 2:
              an = !0;
          }
        }
        a.callback !== null &&
          a.lane !== 0 &&
          ((e.flags |= 64),
          (g = i.effects),
          g === null ? (i.effects = [a]) : g.push(a));
      } else
        (y = {
          eventTime: y,
          lane: g,
          tag: a.tag,
          payload: a.payload,
          callback: a.callback,
          next: null,
        }),
          d === null ? ((u = d = y), (s = v)) : (d = d.next = y),
          (l |= g);
      if (((a = a.next), a === null)) {
        if (((a = i.shared.pending), a === null)) break;
        (g = a),
          (a = g.next),
          (g.next = null),
          (i.lastBaseUpdate = g),
          (i.shared.pending = null);
      }
    } while (1);
    if (
      (d === null && (s = v),
      (i.baseState = s),
      (i.firstBaseUpdate = u),
      (i.lastBaseUpdate = d),
      (t = i.shared.interleaved),
      t !== null)
    ) {
      i = t;
      do (l |= i.lane), (i = i.next);
      while (i !== t);
    } else o === null && (i.shared.lanes = 0);
    (Hn |= l), (e.lanes = l), (e.memoizedState = v);
  }
}
function Gc(e, t, n) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var r = e[t],
        i = r.callback;
      if (i !== null) {
        if (((r.callback = null), (r = n), typeof i != "function"))
          throw Error(j(191, i));
        i.call(r);
      }
    }
}
var wp = new yd.Component().refs;
function hs(e, t, n, r) {
  (t = e.memoizedState),
    (n = n(r, t)),
    (n = n == null ? t : de({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n);
}
var pl = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? Qn(e) === e : !1;
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals;
    var r = Ae(),
      i = gn(e),
      o = Bt(r, i);
    (o.payload = t),
      n != null && (o.callback = n),
      (t = vn(e, o, i)),
      t !== null && (Rt(t, e, i, r), Eo(t, e, i));
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals;
    var r = Ae(),
      i = gn(e),
      o = Bt(r, i);
    (o.tag = 1),
      (o.payload = t),
      n != null && (o.callback = n),
      (t = vn(e, o, i)),
      t !== null && (Rt(t, e, i, r), Eo(t, e, i));
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var n = Ae(),
      r = gn(e),
      i = Bt(n, r);
    (i.tag = 2),
      t != null && (i.callback = t),
      (t = vn(e, i, r)),
      t !== null && (Rt(t, e, r, n), Eo(t, e, r));
  },
};
function Jc(e, t, n, r, i, o, l) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == "function"
      ? e.shouldComponentUpdate(r, o, l)
      : t.prototype && t.prototype.isPureReactComponent
      ? !xi(n, r) || !xi(i, o)
      : !0
  );
}
function Sp(e, t, n) {
  var r = !1,
    i = En,
    o = t.contextType;
  return (
    typeof o == "object" && o !== null
      ? (o = ft(o))
      : ((i = Ke(t) ? An : Fe.current),
        (r = t.contextTypes),
        (o = (r = r != null) ? xr(e, i) : En)),
    (t = new t(n, o)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = pl),
    (e.stateNode = t),
    (t._reactInternals = e),
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = i),
      (e.__reactInternalMemoizedMaskedChildContext = o)),
    t
  );
}
function Zc(e, t, n, r) {
  (e = t.state),
    typeof t.componentWillReceiveProps == "function" &&
      t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == "function" &&
      t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && pl.enqueueReplaceState(t, t.state, null);
}
function ms(e, t, n, r) {
  var i = e.stateNode;
  (i.props = n), (i.state = e.memoizedState), (i.refs = wp), pu(e);
  var o = t.contextType;
  typeof o == "object" && o !== null
    ? (i.context = ft(o))
    : ((o = Ke(t) ? An : Fe.current), (i.context = xr(e, o))),
    (i.state = e.memoizedState),
    (o = t.getDerivedStateFromProps),
    typeof o == "function" && (hs(e, t, o, n), (i.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == "function" ||
      typeof i.getSnapshotBeforeUpdate == "function" ||
      (typeof i.UNSAFE_componentWillMount != "function" &&
        typeof i.componentWillMount != "function") ||
      ((t = i.state),
      typeof i.componentWillMount == "function" && i.componentWillMount(),
      typeof i.UNSAFE_componentWillMount == "function" &&
        i.UNSAFE_componentWillMount(),
      t !== i.state && pl.enqueueReplaceState(i, i.state, null),
      Bo(e, n, i, r),
      (i.state = e.memoizedState)),
    typeof i.componentDidMount == "function" && (e.flags |= 4194308);
}
function Hr(e, t, n) {
  if (
    ((e = n.ref), e !== null && typeof e != "function" && typeof e != "object")
  ) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(j(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(j(147, e));
      var i = r,
        o = "" + e;
      return t !== null &&
        t.ref !== null &&
        typeof t.ref == "function" &&
        t.ref._stringRef === o
        ? t.ref
        : ((t = function (l) {
            var a = i.refs;
            a === wp && (a = i.refs = {}),
              l === null ? delete a[o] : (a[o] = l);
          }),
          (t._stringRef = o),
          t);
    }
    if (typeof e != "string") throw Error(j(284));
    if (!n._owner) throw Error(j(290, e));
  }
  return e;
}
function lo(e, t) {
  throw (
    ((e = Object.prototype.toString.call(t)),
    Error(
      j(
        31,
        e === "[object Object]"
          ? "object with keys {" + Object.keys(t).join(", ") + "}"
          : e
      )
    ))
  );
}
function ef(e) {
  var t = e._init;
  return t(e._payload);
}
function xp(e) {
  function t(m, c) {
    if (e) {
      var p = m.deletions;
      p === null ? ((m.deletions = [c]), (m.flags |= 16)) : p.push(c);
    }
  }
  function n(m, c) {
    if (!e) return null;
    for (; c !== null; ) t(m, c), (c = c.sibling);
    return null;
  }
  function r(m, c) {
    for (m = new Map(); c !== null; )
      c.key !== null ? m.set(c.key, c) : m.set(c.index, c), (c = c.sibling);
    return m;
  }
  function i(m, c) {
    return (m = wn(m, c)), (m.index = 0), (m.sibling = null), m;
  }
  function o(m, c, p) {
    return (
      (m.index = p),
      e
        ? ((p = m.alternate),
          p !== null
            ? ((p = p.index), p < c ? ((m.flags |= 2), c) : p)
            : ((m.flags |= 2), c))
        : ((m.flags |= 1048576), c)
    );
  }
  function l(m) {
    return e && m.alternate === null && (m.flags |= 2), m;
  }
  function a(m, c, p, f) {
    return c === null || c.tag !== 6
      ? ((c = Ta(p, m.mode, f)), (c.return = m), c)
      : ((c = i(c, p)), (c.return = m), c);
  }
  function s(m, c, p, f) {
    var S = p.type;
    return S === er
      ? d(m, c, p.props.children, f, p.key)
      : c !== null &&
        (c.elementType === S ||
          (typeof S == "object" &&
            S !== null &&
            S.$$typeof === ln &&
            ef(S) === c.type))
      ? ((f = i(c, p.props)), (f.ref = Hr(m, c, p)), (f.return = m), f)
      : ((f = No(p.type, p.key, p.props, null, m.mode, f)),
        (f.ref = Hr(m, c, p)),
        (f.return = m),
        f);
  }
  function u(m, c, p, f) {
    return c === null ||
      c.tag !== 4 ||
      c.stateNode.containerInfo !== p.containerInfo ||
      c.stateNode.implementation !== p.implementation
      ? ((c = ja(p, m.mode, f)), (c.return = m), c)
      : ((c = i(c, p.children || [])), (c.return = m), c);
  }
  function d(m, c, p, f, S) {
    return c === null || c.tag !== 7
      ? ((c = Un(p, m.mode, f, S)), (c.return = m), c)
      : ((c = i(c, p)), (c.return = m), c);
  }
  function v(m, c, p) {
    if ((typeof c == "string" && c !== "") || typeof c == "number")
      return (c = Ta("" + c, m.mode, p)), (c.return = m), c;
    if (typeof c == "object" && c !== null) {
      switch (c.$$typeof) {
        case Yi:
          return (
            (p = No(c.type, c.key, c.props, null, m.mode, p)),
            (p.ref = Hr(m, null, c)),
            (p.return = m),
            p
          );
        case Zn:
          return (c = ja(c, m.mode, p)), (c.return = m), c;
        case ln:
          var f = c._init;
          return v(m, f(c._payload), p);
      }
      if (Gr(c) || $r(c))
        return (c = Un(c, m.mode, p, null)), (c.return = m), c;
      lo(m, c);
    }
    return null;
  }
  function g(m, c, p, f) {
    var S = c !== null ? c.key : null;
    if ((typeof p == "string" && p !== "") || typeof p == "number")
      return S !== null ? null : a(m, c, "" + p, f);
    if (typeof p == "object" && p !== null) {
      switch (p.$$typeof) {
        case Yi:
          return p.key === S ? s(m, c, p, f) : null;
        case Zn:
          return p.key === S ? u(m, c, p, f) : null;
        case ln:
          return (S = p._init), g(m, c, S(p._payload), f);
      }
      if (Gr(p) || $r(p)) return S !== null ? null : d(m, c, p, f, null);
      lo(m, p);
    }
    return null;
  }
  function y(m, c, p, f, S) {
    if ((typeof f == "string" && f !== "") || typeof f == "number")
      return (m = m.get(p) || null), a(c, m, "" + f, S);
    if (typeof f == "object" && f !== null) {
      switch (f.$$typeof) {
        case Yi:
          return (m = m.get(f.key === null ? p : f.key) || null), s(c, m, f, S);
        case Zn:
          return (m = m.get(f.key === null ? p : f.key) || null), u(c, m, f, S);
        case ln:
          var R = f._init;
          return y(m, c, p, R(f._payload), S);
      }
      if (Gr(f) || $r(f)) return (m = m.get(p) || null), d(c, m, f, S, null);
      lo(c, f);
    }
    return null;
  }
  function w(m, c, p, f) {
    for (
      var S = null, R = null, N = c, T = (c = 0), W = null;
      N !== null && T < p.length;
      T++
    ) {
      N.index > T ? ((W = N), (N = null)) : (W = N.sibling);
      var D = g(m, N, p[T], f);
      if (D === null) {
        N === null && (N = W);
        break;
      }
      e && N && D.alternate === null && t(m, N),
        (c = o(D, c, T)),
        R === null ? (S = D) : (R.sibling = D),
        (R = D),
        (N = W);
    }
    if (T === p.length) return n(m, N), le && On(m, T), S;
    if (N === null) {
      for (; T < p.length; T++)
        (N = v(m, p[T], f)),
          N !== null &&
            ((c = o(N, c, T)), R === null ? (S = N) : (R.sibling = N), (R = N));
      return le && On(m, T), S;
    }
    for (N = r(m, N); T < p.length; T++)
      (W = y(N, m, T, p[T], f)),
        W !== null &&
          (e && W.alternate !== null && N.delete(W.key === null ? T : W.key),
          (c = o(W, c, T)),
          R === null ? (S = W) : (R.sibling = W),
          (R = W));
    return (
      e &&
        N.forEach(function (pe) {
          return t(m, pe);
        }),
      le && On(m, T),
      S
    );
  }
  function x(m, c, p, f) {
    var S = $r(p);
    if (typeof S != "function") throw Error(j(150));
    if (((p = S.call(p)), p == null)) throw Error(j(151));
    for (
      var R = (S = null), N = c, T = (c = 0), W = null, D = p.next();
      N !== null && !D.done;
      T++, D = p.next()
    ) {
      N.index > T ? ((W = N), (N = null)) : (W = N.sibling);
      var pe = g(m, N, D.value, f);
      if (pe === null) {
        N === null && (N = W);
        break;
      }
      e && N && pe.alternate === null && t(m, N),
        (c = o(pe, c, T)),
        R === null ? (S = pe) : (R.sibling = pe),
        (R = pe),
        (N = W);
    }
    if (D.done) return n(m, N), le && On(m, T), S;
    if (N === null) {
      for (; !D.done; T++, D = p.next())
        (D = v(m, D.value, f)),
          D !== null &&
            ((c = o(D, c, T)), R === null ? (S = D) : (R.sibling = D), (R = D));
      return le && On(m, T), S;
    }
    for (N = r(m, N); !D.done; T++, D = p.next())
      (D = y(N, m, T, D.value, f)),
        D !== null &&
          (e && D.alternate !== null && N.delete(D.key === null ? T : D.key),
          (c = o(D, c, T)),
          R === null ? (S = D) : (R.sibling = D),
          (R = D));
    return (
      e &&
        N.forEach(function (J) {
          return t(m, J);
        }),
      le && On(m, T),
      S
    );
  }
  function P(m, c, p, f) {
    if (
      (typeof p == "object" &&
        p !== null &&
        p.type === er &&
        p.key === null &&
        (p = p.props.children),
      typeof p == "object" && p !== null)
    ) {
      switch (p.$$typeof) {
        case Yi:
          e: {
            for (var S = p.key, R = c; R !== null; ) {
              if (R.key === S) {
                if (((S = p.type), S === er)) {
                  if (R.tag === 7) {
                    n(m, R.sibling),
                      (c = i(R, p.props.children)),
                      (c.return = m),
                      (m = c);
                    break e;
                  }
                } else if (
                  R.elementType === S ||
                  (typeof S == "object" &&
                    S !== null &&
                    S.$$typeof === ln &&
                    ef(S) === R.type)
                ) {
                  n(m, R.sibling),
                    (c = i(R, p.props)),
                    (c.ref = Hr(m, R, p)),
                    (c.return = m),
                    (m = c);
                  break e;
                }
                n(m, R);
                break;
              } else t(m, R);
              R = R.sibling;
            }
            p.type === er
              ? ((c = Un(p.props.children, m.mode, f, p.key)),
                (c.return = m),
                (m = c))
              : ((f = No(p.type, p.key, p.props, null, m.mode, f)),
                (f.ref = Hr(m, c, p)),
                (f.return = m),
                (m = f));
          }
          return l(m);
        case Zn:
          e: {
            for (R = p.key; c !== null; ) {
              if (c.key === R)
                if (
                  c.tag === 4 &&
                  c.stateNode.containerInfo === p.containerInfo &&
                  c.stateNode.implementation === p.implementation
                ) {
                  n(m, c.sibling),
                    (c = i(c, p.children || [])),
                    (c.return = m),
                    (m = c);
                  break e;
                } else {
                  n(m, c);
                  break;
                }
              else t(m, c);
              c = c.sibling;
            }
            (c = ja(p, m.mode, f)), (c.return = m), (m = c);
          }
          return l(m);
        case ln:
          return (R = p._init), P(m, c, R(p._payload), f);
      }
      if (Gr(p)) return w(m, c, p, f);
      if ($r(p)) return x(m, c, p, f);
      lo(m, p);
    }
    return (typeof p == "string" && p !== "") || typeof p == "number"
      ? ((p = "" + p),
        c !== null && c.tag === 6
          ? (n(m, c.sibling), (c = i(c, p)), (c.return = m), (m = c))
          : (n(m, c), (c = Ta(p, m.mode, f)), (c.return = m), (m = c)),
        l(m))
      : n(m, c);
  }
  return P;
}
var Rr = xp(!0),
  Ep = xp(!1),
  Fi = {},
  It = _n(Fi),
  _i = _n(Fi),
  Pi = _n(Fi);
function zn(e) {
  if (e === Fi) throw Error(j(174));
  return e;
}
function hu(e, t) {
  switch ((re(Pi, t), re(_i, e), re(It, Fi), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : Qa(null, "");
      break;
    default:
      (e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = Qa(t, e));
  }
  oe(It), re(It, t);
}
function Cr() {
  oe(It), oe(_i), oe(Pi);
}
function Rp(e) {
  zn(Pi.current);
  var t = zn(It.current),
    n = Qa(t, e.type);
  t !== n && (re(_i, e), re(It, n));
}
function mu(e) {
  _i.current === e && (oe(It), oe(_i));
}
var ce = _n(0);
function Vo(e) {
  for (var t = e; t !== null; ) {
    if (t.tag === 13) {
      var n = t.memoizedState;
      if (
        n !== null &&
        ((n = n.dehydrated), n === null || n.data === "$?" || n.data === "$!")
      )
        return t;
    } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
      if (t.flags & 128) return t;
    } else if (t.child !== null) {
      (t.child.return = t), (t = t.child);
      continue;
    }
    if (t === e) break;
    for (; t.sibling === null; ) {
      if (t.return === null || t.return === e) return null;
      t = t.return;
    }
    (t.sibling.return = t.return), (t = t.sibling);
  }
  return null;
}
var Ra = [];
function vu() {
  for (var e = 0; e < Ra.length; e++)
    Ra[e]._workInProgressVersionPrimary = null;
  Ra.length = 0;
}
var Ro = Xt.ReactCurrentDispatcher,
  Ca = Xt.ReactCurrentBatchConfig,
  Wn = 0,
  fe = null,
  Re = null,
  _e = null,
  Ko = !1,
  li = !1,
  ki = 0,
  xy = 0;
function Me() {
  throw Error(j(321));
}
function yu(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!Ct(e[n], t[n])) return !1;
  return !0;
}
function gu(e, t, n, r, i, o) {
  if (
    ((Wn = o),
    (fe = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (Ro.current = e === null || e.memoizedState === null ? _y : Py),
    (e = n(r, i)),
    li)
  ) {
    o = 0;
    do {
      if (((li = !1), (ki = 0), 25 <= o)) throw Error(j(301));
      (o += 1),
        (_e = Re = null),
        (t.updateQueue = null),
        (Ro.current = ky),
        (e = n(r, i));
    } while (li);
  }
  if (
    ((Ro.current = Qo),
    (t = Re !== null && Re.next !== null),
    (Wn = 0),
    (_e = Re = fe = null),
    (Ko = !1),
    t)
  )
    throw Error(j(300));
  return e;
}
function wu() {
  var e = ki !== 0;
  return (ki = 0), e;
}
function Tt() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return _e === null ? (fe.memoizedState = _e = e) : (_e = _e.next = e), _e;
}
function dt() {
  if (Re === null) {
    var e = fe.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = Re.next;
  var t = _e === null ? fe.memoizedState : _e.next;
  if (t !== null) (_e = t), (Re = e);
  else {
    if (e === null) throw Error(j(310));
    (Re = e),
      (e = {
        memoizedState: Re.memoizedState,
        baseState: Re.baseState,
        baseQueue: Re.baseQueue,
        queue: Re.queue,
        next: null,
      }),
      _e === null ? (fe.memoizedState = _e = e) : (_e = _e.next = e);
  }
  return _e;
}
function Ni(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function _a(e) {
  var t = dt(),
    n = t.queue;
  if (n === null) throw Error(j(311));
  n.lastRenderedReducer = e;
  var r = Re,
    i = r.baseQueue,
    o = n.pending;
  if (o !== null) {
    if (i !== null) {
      var l = i.next;
      (i.next = o.next), (o.next = l);
    }
    (r.baseQueue = i = o), (n.pending = null);
  }
  if (i !== null) {
    (o = i.next), (r = r.baseState);
    var a = (l = null),
      s = null,
      u = o;
    do {
      var d = u.lane;
      if ((Wn & d) === d)
        s !== null &&
          (s = s.next =
            {
              lane: 0,
              action: u.action,
              hasEagerState: u.hasEagerState,
              eagerState: u.eagerState,
              next: null,
            }),
          (r = u.hasEagerState ? u.eagerState : e(r, u.action));
      else {
        var v = {
          lane: d,
          action: u.action,
          hasEagerState: u.hasEagerState,
          eagerState: u.eagerState,
          next: null,
        };
        s === null ? ((a = s = v), (l = r)) : (s = s.next = v),
          (fe.lanes |= d),
          (Hn |= d);
      }
      u = u.next;
    } while (u !== null && u !== o);
    s === null ? (l = r) : (s.next = a),
      Ct(r, t.memoizedState) || (Be = !0),
      (t.memoizedState = r),
      (t.baseState = l),
      (t.baseQueue = s),
      (n.lastRenderedState = r);
  }
  if (((e = n.interleaved), e !== null)) {
    i = e;
    do (o = i.lane), (fe.lanes |= o), (Hn |= o), (i = i.next);
    while (i !== e);
  } else i === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function Pa(e) {
  var t = dt(),
    n = t.queue;
  if (n === null) throw Error(j(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch,
    i = n.pending,
    o = t.memoizedState;
  if (i !== null) {
    n.pending = null;
    var l = (i = i.next);
    do (o = e(o, l.action)), (l = l.next);
    while (l !== i);
    Ct(o, t.memoizedState) || (Be = !0),
      (t.memoizedState = o),
      t.baseQueue === null && (t.baseState = o),
      (n.lastRenderedState = o);
  }
  return [o, r];
}
function Cp() {}
function _p(e, t) {
  var n = fe,
    r = dt(),
    i = t(),
    o = !Ct(r.memoizedState, i);
  if (
    (o && ((r.memoizedState = i), (Be = !0)),
    (r = r.queue),
    Su(Np.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || o || (_e !== null && _e.memoizedState.tag & 1))
  ) {
    if (
      ((n.flags |= 2048),
      Ti(9, kp.bind(null, n, r, i, t), void 0, null),
      Pe === null)
    )
      throw Error(j(349));
    Wn & 30 || Pp(n, t, i);
  }
  return i;
}
function Pp(e, t, n) {
  (e.flags |= 16384),
    (e = { getSnapshot: t, value: n }),
    (t = fe.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (fe.updateQueue = t),
        (t.stores = [e]))
      : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
}
function kp(e, t, n, r) {
  (t.value = n), (t.getSnapshot = r), Tp(t) && jp(e);
}
function Np(e, t, n) {
  return n(function () {
    Tp(t) && jp(e);
  });
}
function Tp(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !Ct(e, n);
  } catch {
    return !0;
  }
}
function jp(e) {
  var t = qt(e, 1);
  t !== null && Rt(t, e, 1, -1);
}
function tf(e) {
  var t = Tt();
  return (
    typeof e == "function" && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Ni,
      lastRenderedState: e,
    }),
    (t.queue = e),
    (e = e.dispatch = Cy.bind(null, fe, e)),
    [t.memoizedState, e]
  );
}
function Ti(e, t, n, r) {
  return (
    (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
    (t = fe.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (fe.updateQueue = t),
        (t.lastEffect = e.next = e))
      : ((n = t.lastEffect),
        n === null
          ? (t.lastEffect = e.next = e)
          : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
    e
  );
}
function Op() {
  return dt().memoizedState;
}
function Co(e, t, n, r) {
  var i = Tt();
  (fe.flags |= e),
    (i.memoizedState = Ti(1 | t, n, void 0, r === void 0 ? null : r));
}
function hl(e, t, n, r) {
  var i = dt();
  r = r === void 0 ? null : r;
  var o = void 0;
  if (Re !== null) {
    var l = Re.memoizedState;
    if (((o = l.destroy), r !== null && yu(r, l.deps))) {
      i.memoizedState = Ti(t, n, o, r);
      return;
    }
  }
  (fe.flags |= e), (i.memoizedState = Ti(1 | t, n, o, r));
}
function nf(e, t) {
  return Co(8390656, 8, e, t);
}
function Su(e, t) {
  return hl(2048, 8, e, t);
}
function Mp(e, t) {
  return hl(4, 2, e, t);
}
function Lp(e, t) {
  return hl(4, 4, e, t);
}
function Ip(e, t) {
  if (typeof t == "function")
    return (
      (e = e()),
      t(e),
      function () {
        t(null);
      }
    );
  if (t != null)
    return (
      (e = e()),
      (t.current = e),
      function () {
        t.current = null;
      }
    );
}
function Dp(e, t, n) {
  return (
    (n = n != null ? n.concat([e]) : null), hl(4, 4, Ip.bind(null, t, e), n)
  );
}
function xu() {}
function zp(e, t) {
  var n = dt();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && yu(t, r[1])
    ? r[0]
    : ((n.memoizedState = [e, t]), e);
}
function Fp(e, t) {
  var n = dt();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && yu(t, r[1])
    ? r[0]
    : ((e = e()), (n.memoizedState = [e, t]), e);
}
function $p(e, t, n) {
  return Wn & 21
    ? (Ct(n, t) || ((n = bd()), (fe.lanes |= n), (Hn |= n), (e.baseState = !0)),
      t)
    : (e.baseState && ((e.baseState = !1), (Be = !0)), (e.memoizedState = n));
}
function Ey(e, t) {
  var n = X;
  (X = n !== 0 && 4 > n ? n : 4), e(!0);
  var r = Ca.transition;
  Ca.transition = {};
  try {
    e(!1), t();
  } finally {
    (X = n), (Ca.transition = r);
  }
}
function Up() {
  return dt().memoizedState;
}
function Ry(e, t, n) {
  var r = gn(e);
  if (
    ((n = {
      lane: r,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    Ap(e))
  )
    bp(t, n);
  else if (((n = yp(e, t, n, r)), n !== null)) {
    var i = Ae();
    Rt(n, e, r, i), Wp(n, t, r);
  }
}
function Cy(e, t, n) {
  var r = gn(e),
    i = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (Ap(e)) bp(t, i);
  else {
    var o = e.alternate;
    if (
      e.lanes === 0 &&
      (o === null || o.lanes === 0) &&
      ((o = t.lastRenderedReducer), o !== null)
    )
      try {
        var l = t.lastRenderedState,
          a = o(l, n);
        if (((i.hasEagerState = !0), (i.eagerState = a), Ct(a, l))) {
          var s = t.interleaved;
          s === null
            ? ((i.next = i), du(t))
            : ((i.next = s.next), (s.next = i)),
            (t.interleaved = i);
          return;
        }
      } catch {
      } finally {
      }
    (n = yp(e, t, i, r)),
      n !== null && ((i = Ae()), Rt(n, e, r, i), Wp(n, t, r));
  }
}
function Ap(e) {
  var t = e.alternate;
  return e === fe || (t !== null && t === fe);
}
function bp(e, t) {
  li = Ko = !0;
  var n = e.pending;
  n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
    (e.pending = t);
}
function Wp(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), Js(e, n);
  }
}
var Qo = {
    readContext: ft,
    useCallback: Me,
    useContext: Me,
    useEffect: Me,
    useImperativeHandle: Me,
    useInsertionEffect: Me,
    useLayoutEffect: Me,
    useMemo: Me,
    useReducer: Me,
    useRef: Me,
    useState: Me,
    useDebugValue: Me,
    useDeferredValue: Me,
    useTransition: Me,
    useMutableSource: Me,
    useSyncExternalStore: Me,
    useId: Me,
    unstable_isNewReconciler: !1,
  },
  _y = {
    readContext: ft,
    useCallback: function (e, t) {
      return (Tt().memoizedState = [e, t === void 0 ? null : t]), e;
    },
    useContext: ft,
    useEffect: nf,
    useImperativeHandle: function (e, t, n) {
      return (
        (n = n != null ? n.concat([e]) : null),
        Co(4194308, 4, Ip.bind(null, t, e), n)
      );
    },
    useLayoutEffect: function (e, t) {
      return Co(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      return Co(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var n = Tt();
      return (
        (t = t === void 0 ? null : t), (e = e()), (n.memoizedState = [e, t]), e
      );
    },
    useReducer: function (e, t, n) {
      var r = Tt();
      return (
        (t = n !== void 0 ? n(t) : t),
        (r.memoizedState = r.baseState = t),
        (e = {
          pending: null,
          interleaved: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: e,
          lastRenderedState: t,
        }),
        (r.queue = e),
        (e = e.dispatch = Ry.bind(null, fe, e)),
        [r.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = Tt();
      return (e = { current: e }), (t.memoizedState = e);
    },
    useState: tf,
    useDebugValue: xu,
    useDeferredValue: function (e) {
      return (Tt().memoizedState = e);
    },
    useTransition: function () {
      var e = tf(!1),
        t = e[0];
      return (e = Ey.bind(null, e[1])), (Tt().memoizedState = e), [t, e];
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, n) {
      var r = fe,
        i = Tt();
      if (le) {
        if (n === void 0) throw Error(j(407));
        n = n();
      } else {
        if (((n = t()), Pe === null)) throw Error(j(349));
        Wn & 30 || Pp(r, t, n);
      }
      i.memoizedState = n;
      var o = { value: n, getSnapshot: t };
      return (
        (i.queue = o),
        nf(Np.bind(null, r, o, e), [e]),
        (r.flags |= 2048),
        Ti(9, kp.bind(null, r, o, n, t), void 0, null),
        n
      );
    },
    useId: function () {
      var e = Tt(),
        t = Pe.identifierPrefix;
      if (le) {
        var n = Ht,
          r = Wt;
        (n = (r & ~(1 << (32 - Et(r) - 1))).toString(32) + n),
          (t = ":" + t + "R" + n),
          (n = ki++),
          0 < n && (t += "H" + n.toString(32)),
          (t += ":");
      } else (n = xy++), (t = ":" + t + "r" + n.toString(32) + ":");
      return (e.memoizedState = t);
    },
    unstable_isNewReconciler: !1,
  },
  Py = {
    readContext: ft,
    useCallback: zp,
    useContext: ft,
    useEffect: Su,
    useImperativeHandle: Dp,
    useInsertionEffect: Mp,
    useLayoutEffect: Lp,
    useMemo: Fp,
    useReducer: _a,
    useRef: Op,
    useState: function () {
      return _a(Ni);
    },
    useDebugValue: xu,
    useDeferredValue: function (e) {
      var t = dt();
      return $p(t, Re.memoizedState, e);
    },
    useTransition: function () {
      var e = _a(Ni)[0],
        t = dt().memoizedState;
      return [e, t];
    },
    useMutableSource: Cp,
    useSyncExternalStore: _p,
    useId: Up,
    unstable_isNewReconciler: !1,
  },
  ky = {
    readContext: ft,
    useCallback: zp,
    useContext: ft,
    useEffect: Su,
    useImperativeHandle: Dp,
    useInsertionEffect: Mp,
    useLayoutEffect: Lp,
    useMemo: Fp,
    useReducer: Pa,
    useRef: Op,
    useState: function () {
      return Pa(Ni);
    },
    useDebugValue: xu,
    useDeferredValue: function (e) {
      var t = dt();
      return Re === null ? (t.memoizedState = e) : $p(t, Re.memoizedState, e);
    },
    useTransition: function () {
      var e = Pa(Ni)[0],
        t = dt().memoizedState;
      return [e, t];
    },
    useMutableSource: Cp,
    useSyncExternalStore: _p,
    useId: Up,
    unstable_isNewReconciler: !1,
  };
function _r(e, t) {
  try {
    var n = "",
      r = t;
    do (n += tv(r)), (r = r.return);
    while (r);
    var i = n;
  } catch (o) {
    i =
      `
Error generating stack: ` +
      o.message +
      `
` +
      o.stack;
  }
  return { value: e, source: t, stack: i, digest: null };
}
function ka(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function vs(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function () {
      throw n;
    });
  }
}
var Ny = typeof WeakMap == "function" ? WeakMap : Map;
function Hp(e, t, n) {
  (n = Bt(-1, n)), (n.tag = 3), (n.payload = { element: null });
  var r = t.value;
  return (
    (n.callback = function () {
      Yo || ((Yo = !0), (Ps = r)), vs(e, t);
    }),
    n
  );
}
function Bp(e, t, n) {
  (n = Bt(-1, n)), (n.tag = 3);
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var i = t.value;
    (n.payload = function () {
      return r(i);
    }),
      (n.callback = function () {
        vs(e, t);
      });
  }
  var o = e.stateNode;
  return (
    o !== null &&
      typeof o.componentDidCatch == "function" &&
      (n.callback = function () {
        vs(e, t),
          typeof r != "function" &&
            (yn === null ? (yn = new Set([this])) : yn.add(this));
        var l = t.stack;
        this.componentDidCatch(t.value, {
          componentStack: l !== null ? l : "",
        });
      }),
    n
  );
}
function rf(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new Ny();
    var i = new Set();
    r.set(t, i);
  } else (i = r.get(t)), i === void 0 && ((i = new Set()), r.set(t, i));
  i.has(n) || (i.add(n), (e = Wy.bind(null, e, t, n)), t.then(e, e));
}
function of(e) {
  do {
    var t;
    if (
      ((t = e.tag === 13) &&
        ((t = e.memoizedState), (t = t !== null ? t.dehydrated !== null : !0)),
      t)
    )
      return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function lf(e, t, n, r, i) {
  return e.mode & 1
    ? ((e.flags |= 65536), (e.lanes = i), e)
    : (e === t
        ? (e.flags |= 65536)
        : ((e.flags |= 128),
          (n.flags |= 131072),
          (n.flags &= -52805),
          n.tag === 1 &&
            (n.alternate === null
              ? (n.tag = 17)
              : ((t = Bt(-1, 1)), (t.tag = 2), vn(n, t, 1))),
          (n.lanes |= 1)),
      e);
}
var Ty = Xt.ReactCurrentOwner,
  Be = !1;
function Ue(e, t, n, r) {
  t.child = e === null ? Ep(t, null, n, r) : Rr(t, e.child, n, r);
}
function af(e, t, n, r, i) {
  n = n.render;
  var o = t.ref;
  return (
    yr(t, i),
    (r = gu(e, t, n, r, o, i)),
    (n = wu()),
    e !== null && !Be
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~i),
        Yt(e, t, i))
      : (le && n && lu(t), (t.flags |= 1), Ue(e, t, r, i), t.child)
  );
}
function sf(e, t, n, r, i) {
  if (e === null) {
    var o = n.type;
    return typeof o == "function" &&
      !Tu(o) &&
      o.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = o), Vp(e, t, o, r, i))
      : ((e = No(n.type, null, r, t, t.mode, i)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e));
  }
  if (((o = e.child), !(e.lanes & i))) {
    var l = o.memoizedProps;
    if (
      ((n = n.compare), (n = n !== null ? n : xi), n(l, r) && e.ref === t.ref)
    )
      return Yt(e, t, i);
  }
  return (
    (t.flags |= 1),
    (e = wn(o, r)),
    (e.ref = t.ref),
    (e.return = t),
    (t.child = e)
  );
}
function Vp(e, t, n, r, i) {
  if (e !== null) {
    var o = e.memoizedProps;
    if (xi(o, r) && e.ref === t.ref)
      if (((Be = !1), (t.pendingProps = r = o), (e.lanes & i) !== 0))
        e.flags & 131072 && (Be = !0);
      else return (t.lanes = e.lanes), Yt(e, t, i);
  }
  return ys(e, t, n, r, i);
}
function Kp(e, t, n) {
  var r = t.pendingProps,
    i = r.children,
    o = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden")
    if (!(t.mode & 1))
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        re(cr, Xe),
        (Xe |= n);
    else {
      if (!(n & 1073741824))
        return (
          (e = o !== null ? o.baseLanes | n : n),
          (t.lanes = t.childLanes = 1073741824),
          (t.memoizedState = {
            baseLanes: e,
            cachePool: null,
            transitions: null,
          }),
          (t.updateQueue = null),
          re(cr, Xe),
          (Xe |= e),
          null
        );
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (r = o !== null ? o.baseLanes : n),
        re(cr, Xe),
        (Xe |= r);
    }
  else
    o !== null ? ((r = o.baseLanes | n), (t.memoizedState = null)) : (r = n),
      re(cr, Xe),
      (Xe |= r);
  return Ue(e, t, i, n), t.child;
}
function Qp(e, t) {
  var n = t.ref;
  ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
    ((t.flags |= 512), (t.flags |= 2097152));
}
function ys(e, t, n, r, i) {
  var o = Ke(n) ? An : Fe.current;
  return (
    (o = xr(t, o)),
    yr(t, i),
    (n = gu(e, t, n, r, o, i)),
    (r = wu()),
    e !== null && !Be
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~i),
        Yt(e, t, i))
      : (le && r && lu(t), (t.flags |= 1), Ue(e, t, n, i), t.child)
  );
}
function uf(e, t, n, r, i) {
  if (Ke(n)) {
    var o = !0;
    Uo(t);
  } else o = !1;
  if ((yr(t, i), t.stateNode === null))
    _o(e, t), Sp(t, n, r), ms(t, n, r, i), (r = !0);
  else if (e === null) {
    var l = t.stateNode,
      a = t.memoizedProps;
    l.props = a;
    var s = l.context,
      u = n.contextType;
    typeof u == "object" && u !== null
      ? (u = ft(u))
      : ((u = Ke(n) ? An : Fe.current), (u = xr(t, u)));
    var d = n.getDerivedStateFromProps,
      v =
        typeof d == "function" ||
        typeof l.getSnapshotBeforeUpdate == "function";
    v ||
      (typeof l.UNSAFE_componentWillReceiveProps != "function" &&
        typeof l.componentWillReceiveProps != "function") ||
      ((a !== r || s !== u) && Zc(t, l, r, u)),
      (an = !1);
    var g = t.memoizedState;
    (l.state = g),
      Bo(t, r, l, i),
      (s = t.memoizedState),
      a !== r || g !== s || Ve.current || an
        ? (typeof d == "function" && (hs(t, n, d, r), (s = t.memoizedState)),
          (a = an || Jc(t, n, a, r, g, s, u))
            ? (v ||
                (typeof l.UNSAFE_componentWillMount != "function" &&
                  typeof l.componentWillMount != "function") ||
                (typeof l.componentWillMount == "function" &&
                  l.componentWillMount(),
                typeof l.UNSAFE_componentWillMount == "function" &&
                  l.UNSAFE_componentWillMount()),
              typeof l.componentDidMount == "function" && (t.flags |= 4194308))
            : (typeof l.componentDidMount == "function" && (t.flags |= 4194308),
              (t.memoizedProps = r),
              (t.memoizedState = s)),
          (l.props = r),
          (l.state = s),
          (l.context = u),
          (r = a))
        : (typeof l.componentDidMount == "function" && (t.flags |= 4194308),
          (r = !1));
  } else {
    (l = t.stateNode),
      gp(e, t),
      (a = t.memoizedProps),
      (u = t.type === t.elementType ? a : gt(t.type, a)),
      (l.props = u),
      (v = t.pendingProps),
      (g = l.context),
      (s = n.contextType),
      typeof s == "object" && s !== null
        ? (s = ft(s))
        : ((s = Ke(n) ? An : Fe.current), (s = xr(t, s)));
    var y = n.getDerivedStateFromProps;
    (d =
      typeof y == "function" ||
      typeof l.getSnapshotBeforeUpdate == "function") ||
      (typeof l.UNSAFE_componentWillReceiveProps != "function" &&
        typeof l.componentWillReceiveProps != "function") ||
      ((a !== v || g !== s) && Zc(t, l, r, s)),
      (an = !1),
      (g = t.memoizedState),
      (l.state = g),
      Bo(t, r, l, i);
    var w = t.memoizedState;
    a !== v || g !== w || Ve.current || an
      ? (typeof y == "function" && (hs(t, n, y, r), (w = t.memoizedState)),
        (u = an || Jc(t, n, u, r, g, w, s) || !1)
          ? (d ||
              (typeof l.UNSAFE_componentWillUpdate != "function" &&
                typeof l.componentWillUpdate != "function") ||
              (typeof l.componentWillUpdate == "function" &&
                l.componentWillUpdate(r, w, s),
              typeof l.UNSAFE_componentWillUpdate == "function" &&
                l.UNSAFE_componentWillUpdate(r, w, s)),
            typeof l.componentDidUpdate == "function" && (t.flags |= 4),
            typeof l.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024))
          : (typeof l.componentDidUpdate != "function" ||
              (a === e.memoizedProps && g === e.memoizedState) ||
              (t.flags |= 4),
            typeof l.getSnapshotBeforeUpdate != "function" ||
              (a === e.memoizedProps && g === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = r),
            (t.memoizedState = w)),
        (l.props = r),
        (l.state = w),
        (l.context = s),
        (r = u))
      : (typeof l.componentDidUpdate != "function" ||
          (a === e.memoizedProps && g === e.memoizedState) ||
          (t.flags |= 4),
        typeof l.getSnapshotBeforeUpdate != "function" ||
          (a === e.memoizedProps && g === e.memoizedState) ||
          (t.flags |= 1024),
        (r = !1));
  }
  return gs(e, t, n, r, o, i);
}
function gs(e, t, n, r, i, o) {
  Qp(e, t);
  var l = (t.flags & 128) !== 0;
  if (!r && !l) return i && Qc(t, n, !1), Yt(e, t, o);
  (r = t.stateNode), (Ty.current = t);
  var a =
    l && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return (
    (t.flags |= 1),
    e !== null && l
      ? ((t.child = Rr(t, e.child, null, o)), (t.child = Rr(t, null, a, o)))
      : Ue(e, t, a, o),
    (t.memoizedState = r.state),
    i && Qc(t, n, !0),
    t.child
  );
}
function qp(e) {
  var t = e.stateNode;
  t.pendingContext
    ? Kc(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && Kc(e, t.context, !1),
    hu(e, t.containerInfo);
}
function cf(e, t, n, r, i) {
  return Er(), su(i), (t.flags |= 256), Ue(e, t, n, r), t.child;
}
var ws = { dehydrated: null, treeContext: null, retryLane: 0 };
function Ss(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function Yp(e, t, n) {
  var r = t.pendingProps,
    i = ce.current,
    o = !1,
    l = (t.flags & 128) !== 0,
    a;
  if (
    ((a = l) ||
      (a = e !== null && e.memoizedState === null ? !1 : (i & 2) !== 0),
    a
      ? ((o = !0), (t.flags &= -129))
      : (e === null || e.memoizedState !== null) && (i |= 1),
    re(ce, i & 1),
    e === null)
  )
    return (
      ds(t),
      (e = t.memoizedState),
      e !== null && ((e = e.dehydrated), e !== null)
        ? (t.mode & 1
            ? e.data === "$!"
              ? (t.lanes = 8)
              : (t.lanes = 1073741824)
            : (t.lanes = 1),
          null)
        : ((l = r.children),
          (e = r.fallback),
          o
            ? ((r = t.mode),
              (o = t.child),
              (l = { mode: "hidden", children: l }),
              !(r & 1) && o !== null
                ? ((o.childLanes = 0), (o.pendingProps = l))
                : (o = yl(l, r, 0, null)),
              (e = Un(e, r, n, null)),
              (o.return = t),
              (e.return = t),
              (o.sibling = e),
              (t.child = o),
              (t.child.memoizedState = Ss(n)),
              (t.memoizedState = ws),
              e)
            : Eu(t, l))
    );
  if (((i = e.memoizedState), i !== null && ((a = i.dehydrated), a !== null)))
    return jy(e, t, l, r, a, i, n);
  if (o) {
    (o = r.fallback), (l = t.mode), (i = e.child), (a = i.sibling);
    var s = { mode: "hidden", children: r.children };
    return (
      !(l & 1) && t.child !== i
        ? ((r = t.child),
          (r.childLanes = 0),
          (r.pendingProps = s),
          (t.deletions = null))
        : ((r = wn(i, s)), (r.subtreeFlags = i.subtreeFlags & 14680064)),
      a !== null ? (o = wn(a, o)) : ((o = Un(o, l, n, null)), (o.flags |= 2)),
      (o.return = t),
      (r.return = t),
      (r.sibling = o),
      (t.child = r),
      (r = o),
      (o = t.child),
      (l = e.child.memoizedState),
      (l =
        l === null
          ? Ss(n)
          : {
              baseLanes: l.baseLanes | n,
              cachePool: null,
              transitions: l.transitions,
            }),
      (o.memoizedState = l),
      (o.childLanes = e.childLanes & ~n),
      (t.memoizedState = ws),
      r
    );
  }
  return (
    (o = e.child),
    (e = o.sibling),
    (r = wn(o, { mode: "visible", children: r.children })),
    !(t.mode & 1) && (r.lanes = n),
    (r.return = t),
    (r.sibling = null),
    e !== null &&
      ((n = t.deletions),
      n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
    (t.child = r),
    (t.memoizedState = null),
    r
  );
}
function Eu(e, t) {
  return (
    (t = yl({ mode: "visible", children: t }, e.mode, 0, null)),
    (t.return = e),
    (e.child = t)
  );
}
function ao(e, t, n, r) {
  return (
    r !== null && su(r),
    Rr(t, e.child, null, n),
    (e = Eu(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  );
}
function jy(e, t, n, r, i, o, l) {
  if (n)
    return t.flags & 256
      ? ((t.flags &= -257), (r = ka(Error(j(422)))), ao(e, t, l, r))
      : t.memoizedState !== null
      ? ((t.child = e.child), (t.flags |= 128), null)
      : ((o = r.fallback),
        (i = t.mode),
        (r = yl({ mode: "visible", children: r.children }, i, 0, null)),
        (o = Un(o, i, l, null)),
        (o.flags |= 2),
        (r.return = t),
        (o.return = t),
        (r.sibling = o),
        (t.child = r),
        t.mode & 1 && Rr(t, e.child, null, l),
        (t.child.memoizedState = Ss(l)),
        (t.memoizedState = ws),
        o);
  if (!(t.mode & 1)) return ao(e, t, l, null);
  if (i.data === "$!") {
    if (((r = i.nextSibling && i.nextSibling.dataset), r)) var a = r.dgst;
    return (r = a), (o = Error(j(419))), (r = ka(o, r, void 0)), ao(e, t, l, r);
  }
  if (((a = (l & e.childLanes) !== 0), Be || a)) {
    if (((r = Pe), r !== null)) {
      switch (l & -l) {
        case 4:
          i = 2;
          break;
        case 16:
          i = 8;
          break;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          i = 32;
          break;
        case 536870912:
          i = 268435456;
          break;
        default:
          i = 0;
      }
      (i = i & (r.suspendedLanes | l) ? 0 : i),
        i !== 0 &&
          i !== o.retryLane &&
          ((o.retryLane = i), qt(e, i), Rt(r, e, i, -1));
    }
    return Nu(), (r = ka(Error(j(421)))), ao(e, t, l, r);
  }
  return i.data === "$?"
    ? ((t.flags |= 128),
      (t.child = e.child),
      (t = Hy.bind(null, e)),
      (i._reactRetry = t),
      null)
    : ((e = o.treeContext),
      (Je = mn(i.nextSibling)),
      (Ze = t),
      (le = !0),
      (xt = null),
      e !== null &&
        ((at[st++] = Wt),
        (at[st++] = Ht),
        (at[st++] = bn),
        (Wt = e.id),
        (Ht = e.overflow),
        (bn = t)),
      (t = Eu(t, r.children)),
      (t.flags |= 4096),
      t);
}
function ff(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), ps(e.return, t, n);
}
function Na(e, t, n, r, i) {
  var o = e.memoizedState;
  o === null
    ? (e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: i,
      })
    : ((o.isBackwards = t),
      (o.rendering = null),
      (o.renderingStartTime = 0),
      (o.last = r),
      (o.tail = n),
      (o.tailMode = i));
}
function Xp(e, t, n) {
  var r = t.pendingProps,
    i = r.revealOrder,
    o = r.tail;
  if ((Ue(e, t, r.children, n), (r = ce.current), r & 2))
    (r = (r & 1) | 2), (t.flags |= 128);
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && ff(e, n, t);
        else if (e.tag === 19) ff(e, n, t);
        else if (e.child !== null) {
          (e.child.return = e), (e = e.child);
          continue;
        }
        if (e === t) break e;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) break e;
          e = e.return;
        }
        (e.sibling.return = e.return), (e = e.sibling);
      }
    r &= 1;
  }
  if ((re(ce, r), !(t.mode & 1))) t.memoizedState = null;
  else
    switch (i) {
      case "forwards":
        for (n = t.child, i = null; n !== null; )
          (e = n.alternate),
            e !== null && Vo(e) === null && (i = n),
            (n = n.sibling);
        (n = i),
          n === null
            ? ((i = t.child), (t.child = null))
            : ((i = n.sibling), (n.sibling = null)),
          Na(t, !1, i, n, o);
        break;
      case "backwards":
        for (n = null, i = t.child, t.child = null; i !== null; ) {
          if (((e = i.alternate), e !== null && Vo(e) === null)) {
            t.child = i;
            break;
          }
          (e = i.sibling), (i.sibling = n), (n = i), (i = e);
        }
        Na(t, !0, n, null, o);
        break;
      case "together":
        Na(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function _o(e, t) {
  !(t.mode & 1) &&
    e !== null &&
    ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function Yt(e, t, n) {
  if (
    (e !== null && (t.dependencies = e.dependencies),
    (Hn |= t.lanes),
    !(n & t.childLanes))
  )
    return null;
  if (e !== null && t.child !== e.child) throw Error(j(153));
  if (t.child !== null) {
    for (
      e = t.child, n = wn(e, e.pendingProps), t.child = n, n.return = t;
      e.sibling !== null;

    )
      (e = e.sibling), (n = n.sibling = wn(e, e.pendingProps)), (n.return = t);
    n.sibling = null;
  }
  return t.child;
}
function Oy(e, t, n) {
  switch (t.tag) {
    case 3:
      qp(t), Er();
      break;
    case 5:
      Rp(t);
      break;
    case 1:
      Ke(t.type) && Uo(t);
      break;
    case 4:
      hu(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context,
        i = t.memoizedProps.value;
      re(Wo, r._currentValue), (r._currentValue = i);
      break;
    case 13:
      if (((r = t.memoizedState), r !== null))
        return r.dehydrated !== null
          ? (re(ce, ce.current & 1), (t.flags |= 128), null)
          : n & t.child.childLanes
          ? Yp(e, t, n)
          : (re(ce, ce.current & 1),
            (e = Yt(e, t, n)),
            e !== null ? e.sibling : null);
      re(ce, ce.current & 1);
      break;
    case 19:
      if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
        if (r) return Xp(e, t, n);
        t.flags |= 128;
      }
      if (
        ((i = t.memoizedState),
        i !== null &&
          ((i.rendering = null), (i.tail = null), (i.lastEffect = null)),
        re(ce, ce.current),
        r)
      )
        break;
      return null;
    case 22:
    case 23:
      return (t.lanes = 0), Kp(e, t, n);
  }
  return Yt(e, t, n);
}
var Gp, xs, Jp, Zp;
Gp = function (e, t) {
  for (var n = t.child; n !== null; ) {
    if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
    else if (n.tag !== 4 && n.child !== null) {
      (n.child.return = n), (n = n.child);
      continue;
    }
    if (n === t) break;
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === t) return;
      n = n.return;
    }
    (n.sibling.return = n.return), (n = n.sibling);
  }
};
xs = function () {};
Jp = function (e, t, n, r) {
  var i = e.memoizedProps;
  if (i !== r) {
    (e = t.stateNode), zn(It.current);
    var o = null;
    switch (n) {
      case "input":
        (i = Ha(e, i)), (r = Ha(e, r)), (o = []);
        break;
      case "select":
        (i = de({}, i, { value: void 0 })),
          (r = de({}, r, { value: void 0 })),
          (o = []);
        break;
      case "textarea":
        (i = Ka(e, i)), (r = Ka(e, r)), (o = []);
        break;
      default:
        typeof i.onClick != "function" &&
          typeof r.onClick == "function" &&
          (e.onclick = Fo);
    }
    qa(n, r);
    var l;
    n = null;
    for (u in i)
      if (!r.hasOwnProperty(u) && i.hasOwnProperty(u) && i[u] != null)
        if (u === "style") {
          var a = i[u];
          for (l in a) a.hasOwnProperty(l) && (n || (n = {}), (n[l] = ""));
        } else
          u !== "dangerouslySetInnerHTML" &&
            u !== "children" &&
            u !== "suppressContentEditableWarning" &&
            u !== "suppressHydrationWarning" &&
            u !== "autoFocus" &&
            (hi.hasOwnProperty(u)
              ? o || (o = [])
              : (o = o || []).push(u, null));
    for (u in r) {
      var s = r[u];
      if (
        ((a = i != null ? i[u] : void 0),
        r.hasOwnProperty(u) && s !== a && (s != null || a != null))
      )
        if (u === "style")
          if (a) {
            for (l in a)
              !a.hasOwnProperty(l) ||
                (s && s.hasOwnProperty(l)) ||
                (n || (n = {}), (n[l] = ""));
            for (l in s)
              s.hasOwnProperty(l) &&
                a[l] !== s[l] &&
                (n || (n = {}), (n[l] = s[l]));
          } else n || (o || (o = []), o.push(u, n)), (n = s);
        else
          u === "dangerouslySetInnerHTML"
            ? ((s = s ? s.__html : void 0),
              (a = a ? a.__html : void 0),
              s != null && a !== s && (o = o || []).push(u, s))
            : u === "children"
            ? (typeof s != "string" && typeof s != "number") ||
              (o = o || []).push(u, "" + s)
            : u !== "suppressContentEditableWarning" &&
              u !== "suppressHydrationWarning" &&
              (hi.hasOwnProperty(u)
                ? (s != null && u === "onScroll" && ie("scroll", e),
                  o || a === s || (o = []))
                : (o = o || []).push(u, s));
    }
    n && (o = o || []).push("style", n);
    var u = o;
    (t.updateQueue = u) && (t.flags |= 4);
  }
};
Zp = function (e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function Br(e, t) {
  if (!le)
    switch (e.tailMode) {
      case "hidden":
        t = e.tail;
        for (var n = null; t !== null; )
          t.alternate !== null && (n = t), (t = t.sibling);
        n === null ? (e.tail = null) : (n.sibling = null);
        break;
      case "collapsed":
        n = e.tail;
        for (var r = null; n !== null; )
          n.alternate !== null && (r = n), (n = n.sibling);
        r === null
          ? t || e.tail === null
            ? (e.tail = null)
            : (e.tail.sibling = null)
          : (r.sibling = null);
    }
}
function Le(e) {
  var t = e.alternate !== null && e.alternate.child === e.child,
    n = 0,
    r = 0;
  if (t)
    for (var i = e.child; i !== null; )
      (n |= i.lanes | i.childLanes),
        (r |= i.subtreeFlags & 14680064),
        (r |= i.flags & 14680064),
        (i.return = e),
        (i = i.sibling);
  else
    for (i = e.child; i !== null; )
      (n |= i.lanes | i.childLanes),
        (r |= i.subtreeFlags),
        (r |= i.flags),
        (i.return = e),
        (i = i.sibling);
  return (e.subtreeFlags |= r), (e.childLanes = n), t;
}
function My(e, t, n) {
  var r = t.pendingProps;
  switch ((au(t), t.tag)) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return Le(t), null;
    case 1:
      return Ke(t.type) && $o(), Le(t), null;
    case 3:
      return (
        (r = t.stateNode),
        Cr(),
        oe(Ve),
        oe(Fe),
        vu(),
        r.pendingContext &&
          ((r.context = r.pendingContext), (r.pendingContext = null)),
        (e === null || e.child === null) &&
          (oo(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), xt !== null && (Ts(xt), (xt = null)))),
        xs(e, t),
        Le(t),
        null
      );
    case 5:
      mu(t);
      var i = zn(Pi.current);
      if (((n = t.type), e !== null && t.stateNode != null))
        Jp(e, t, n, r, i),
          e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(j(166));
          return Le(t), null;
        }
        if (((e = zn(It.current)), oo(t))) {
          (r = t.stateNode), (n = t.type);
          var o = t.memoizedProps;
          switch (((r[jt] = t), (r[Ci] = o), (e = (t.mode & 1) !== 0), n)) {
            case "dialog":
              ie("cancel", r), ie("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              ie("load", r);
              break;
            case "video":
            case "audio":
              for (i = 0; i < Zr.length; i++) ie(Zr[i], r);
              break;
            case "source":
              ie("error", r);
              break;
            case "img":
            case "image":
            case "link":
              ie("error", r), ie("load", r);
              break;
            case "details":
              ie("toggle", r);
              break;
            case "input":
              wc(r, o), ie("invalid", r);
              break;
            case "select":
              (r._wrapperState = { wasMultiple: !!o.multiple }),
                ie("invalid", r);
              break;
            case "textarea":
              xc(r, o), ie("invalid", r);
          }
          qa(n, o), (i = null);
          for (var l in o)
            if (o.hasOwnProperty(l)) {
              var a = o[l];
              l === "children"
                ? typeof a == "string"
                  ? r.textContent !== a &&
                    (o.suppressHydrationWarning !== !0 &&
                      io(r.textContent, a, e),
                    (i = ["children", a]))
                  : typeof a == "number" &&
                    r.textContent !== "" + a &&
                    (o.suppressHydrationWarning !== !0 &&
                      io(r.textContent, a, e),
                    (i = ["children", "" + a]))
                : hi.hasOwnProperty(l) &&
                  a != null &&
                  l === "onScroll" &&
                  ie("scroll", r);
            }
          switch (n) {
            case "input":
              Xi(r), Sc(r, o, !0);
              break;
            case "textarea":
              Xi(r), Ec(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof o.onClick == "function" && (r.onclick = Fo);
          }
          (r = i), (t.updateQueue = r), r !== null && (t.flags |= 4);
        } else {
          (l = i.nodeType === 9 ? i : i.ownerDocument),
            e === "http://www.w3.org/1999/xhtml" && (e = Pd(n)),
            e === "http://www.w3.org/1999/xhtml"
              ? n === "script"
                ? ((e = l.createElement("div")),
                  (e.innerHTML = "<script></script>"),
                  (e = e.removeChild(e.firstChild)))
                : typeof r.is == "string"
                ? (e = l.createElement(n, { is: r.is }))
                : ((e = l.createElement(n)),
                  n === "select" &&
                    ((l = e),
                    r.multiple
                      ? (l.multiple = !0)
                      : r.size && (l.size = r.size)))
              : (e = l.createElementNS(e, n)),
            (e[jt] = t),
            (e[Ci] = r),
            Gp(e, t, !1, !1),
            (t.stateNode = e);
          e: {
            switch (((l = Ya(n, r)), n)) {
              case "dialog":
                ie("cancel", e), ie("close", e), (i = r);
                break;
              case "iframe":
              case "object":
              case "embed":
                ie("load", e), (i = r);
                break;
              case "video":
              case "audio":
                for (i = 0; i < Zr.length; i++) ie(Zr[i], e);
                i = r;
                break;
              case "source":
                ie("error", e), (i = r);
                break;
              case "img":
              case "image":
              case "link":
                ie("error", e), ie("load", e), (i = r);
                break;
              case "details":
                ie("toggle", e), (i = r);
                break;
              case "input":
                wc(e, r), (i = Ha(e, r)), ie("invalid", e);
                break;
              case "option":
                i = r;
                break;
              case "select":
                (e._wrapperState = { wasMultiple: !!r.multiple }),
                  (i = de({}, r, { value: void 0 })),
                  ie("invalid", e);
                break;
              case "textarea":
                xc(e, r), (i = Ka(e, r)), ie("invalid", e);
                break;
              default:
                i = r;
            }
            qa(n, i), (a = i);
            for (o in a)
              if (a.hasOwnProperty(o)) {
                var s = a[o];
                o === "style"
                  ? Td(e, s)
                  : o === "dangerouslySetInnerHTML"
                  ? ((s = s ? s.__html : void 0), s != null && kd(e, s))
                  : o === "children"
                  ? typeof s == "string"
                    ? (n !== "textarea" || s !== "") && mi(e, s)
                    : typeof s == "number" && mi(e, "" + s)
                  : o !== "suppressContentEditableWarning" &&
                    o !== "suppressHydrationWarning" &&
                    o !== "autoFocus" &&
                    (hi.hasOwnProperty(o)
                      ? s != null && o === "onScroll" && ie("scroll", e)
                      : s != null && Ks(e, o, s, l));
              }
            switch (n) {
              case "input":
                Xi(e), Sc(e, r, !1);
                break;
              case "textarea":
                Xi(e), Ec(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + xn(r.value));
                break;
              case "select":
                (e.multiple = !!r.multiple),
                  (o = r.value),
                  o != null
                    ? pr(e, !!r.multiple, o, !1)
                    : r.defaultValue != null &&
                      pr(e, !!r.multiple, r.defaultValue, !0);
                break;
              default:
                typeof i.onClick == "function" && (e.onclick = Fo);
            }
            switch (n) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                r = !!r.autoFocus;
                break e;
              case "img":
                r = !0;
                break e;
              default:
                r = !1;
            }
          }
          r && (t.flags |= 4);
        }
        t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
      }
      return Le(t), null;
    case 6:
      if (e && t.stateNode != null) Zp(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(j(166));
        if (((n = zn(Pi.current)), zn(It.current), oo(t))) {
          if (
            ((r = t.stateNode),
            (n = t.memoizedProps),
            (r[jt] = t),
            (o = r.nodeValue !== n) && ((e = Ze), e !== null))
          )
            switch (e.tag) {
              case 3:
                io(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  io(r.nodeValue, n, (e.mode & 1) !== 0);
            }
          o && (t.flags |= 4);
        } else
          (r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
            (r[jt] = t),
            (t.stateNode = r);
      }
      return Le(t), null;
    case 13:
      if (
        (oe(ce),
        (r = t.memoizedState),
        e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (le && Je !== null && t.mode & 1 && !(t.flags & 128))
          vp(), Er(), (t.flags |= 98560), (o = !1);
        else if (((o = oo(t)), r !== null && r.dehydrated !== null)) {
          if (e === null) {
            if (!o) throw Error(j(318));
            if (
              ((o = t.memoizedState),
              (o = o !== null ? o.dehydrated : null),
              !o)
            )
              throw Error(j(317));
            o[jt] = t;
          } else
            Er(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4);
          Le(t), (o = !1);
        } else xt !== null && (Ts(xt), (xt = null)), (o = !0);
        if (!o) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128
        ? ((t.lanes = n), t)
        : ((r = r !== null),
          r !== (e !== null && e.memoizedState !== null) &&
            r &&
            ((t.child.flags |= 8192),
            t.mode & 1 &&
              (e === null || ce.current & 1 ? Ce === 0 && (Ce = 3) : Nu())),
          t.updateQueue !== null && (t.flags |= 4),
          Le(t),
          null);
    case 4:
      return (
        Cr(), xs(e, t), e === null && Ei(t.stateNode.containerInfo), Le(t), null
      );
    case 10:
      return fu(t.type._context), Le(t), null;
    case 17:
      return Ke(t.type) && $o(), Le(t), null;
    case 19:
      if ((oe(ce), (o = t.memoizedState), o === null)) return Le(t), null;
      if (((r = (t.flags & 128) !== 0), (l = o.rendering), l === null))
        if (r) Br(o, !1);
        else {
          if (Ce !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null; ) {
              if (((l = Vo(e)), l !== null)) {
                for (
                  t.flags |= 128,
                    Br(o, !1),
                    r = l.updateQueue,
                    r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                    t.subtreeFlags = 0,
                    r = n,
                    n = t.child;
                  n !== null;

                )
                  (o = n),
                    (e = r),
                    (o.flags &= 14680066),
                    (l = o.alternate),
                    l === null
                      ? ((o.childLanes = 0),
                        (o.lanes = e),
                        (o.child = null),
                        (o.subtreeFlags = 0),
                        (o.memoizedProps = null),
                        (o.memoizedState = null),
                        (o.updateQueue = null),
                        (o.dependencies = null),
                        (o.stateNode = null))
                      : ((o.childLanes = l.childLanes),
                        (o.lanes = l.lanes),
                        (o.child = l.child),
                        (o.subtreeFlags = 0),
                        (o.deletions = null),
                        (o.memoizedProps = l.memoizedProps),
                        (o.memoizedState = l.memoizedState),
                        (o.updateQueue = l.updateQueue),
                        (o.type = l.type),
                        (e = l.dependencies),
                        (o.dependencies =
                          e === null
                            ? null
                            : {
                                lanes: e.lanes,
                                firstContext: e.firstContext,
                              })),
                    (n = n.sibling);
                return re(ce, (ce.current & 1) | 2), t.child;
              }
              e = e.sibling;
            }
          o.tail !== null &&
            ye() > Pr &&
            ((t.flags |= 128), (r = !0), Br(o, !1), (t.lanes = 4194304));
        }
      else {
        if (!r)
          if (((e = Vo(l)), e !== null)) {
            if (
              ((t.flags |= 128),
              (r = !0),
              (n = e.updateQueue),
              n !== null && ((t.updateQueue = n), (t.flags |= 4)),
              Br(o, !0),
              o.tail === null && o.tailMode === "hidden" && !l.alternate && !le)
            )
              return Le(t), null;
          } else
            2 * ye() - o.renderingStartTime > Pr &&
              n !== 1073741824 &&
              ((t.flags |= 128), (r = !0), Br(o, !1), (t.lanes = 4194304));
        o.isBackwards
          ? ((l.sibling = t.child), (t.child = l))
          : ((n = o.last),
            n !== null ? (n.sibling = l) : (t.child = l),
            (o.last = l));
      }
      return o.tail !== null
        ? ((t = o.tail),
          (o.rendering = t),
          (o.tail = t.sibling),
          (o.renderingStartTime = ye()),
          (t.sibling = null),
          (n = ce.current),
          re(ce, r ? (n & 1) | 2 : n & 1),
          t)
        : (Le(t), null);
    case 22:
    case 23:
      return (
        ku(),
        (r = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
        r && t.mode & 1
          ? Xe & 1073741824 && (Le(t), t.subtreeFlags & 6 && (t.flags |= 8192))
          : Le(t),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(j(156, t.tag));
}
function Ly(e, t) {
  switch ((au(t), t.tag)) {
    case 1:
      return (
        Ke(t.type) && $o(),
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 3:
      return (
        Cr(),
        oe(Ve),
        oe(Fe),
        vu(),
        (e = t.flags),
        e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 5:
      return mu(t), null;
    case 13:
      if (
        (oe(ce), (e = t.memoizedState), e !== null && e.dehydrated !== null)
      ) {
        if (t.alternate === null) throw Error(j(340));
        Er();
      }
      return (
        (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 19:
      return oe(ce), null;
    case 4:
      return Cr(), null;
    case 10:
      return fu(t.type._context), null;
    case 22:
    case 23:
      return ku(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var so = !1,
  ze = !1,
  Iy = typeof WeakSet == "function" ? WeakSet : Set,
  L = null;
function ur(e, t) {
  var n = e.ref;
  if (n !== null)
    if (typeof n == "function")
      try {
        n(null);
      } catch (r) {
        he(e, t, r);
      }
    else n.current = null;
}
function Es(e, t, n) {
  try {
    n();
  } catch (r) {
    he(e, t, r);
  }
}
var df = !1;
function Dy(e, t) {
  if (((os = Io), (e = rp()), ou(e))) {
    if ("selectionStart" in e)
      var n = { start: e.selectionStart, end: e.selectionEnd };
    else
      e: {
        n = ((n = e.ownerDocument) && n.defaultView) || window;
        var r = n.getSelection && n.getSelection();
        if (r && r.rangeCount !== 0) {
          n = r.anchorNode;
          var i = r.anchorOffset,
            o = r.focusNode;
          r = r.focusOffset;
          try {
            n.nodeType, o.nodeType;
          } catch {
            n = null;
            break e;
          }
          var l = 0,
            a = -1,
            s = -1,
            u = 0,
            d = 0,
            v = e,
            g = null;
          t: for (;;) {
            for (
              var y;
              v !== n || (i !== 0 && v.nodeType !== 3) || (a = l + i),
                v !== o || (r !== 0 && v.nodeType !== 3) || (s = l + r),
                v.nodeType === 3 && (l += v.nodeValue.length),
                (y = v.firstChild) !== null;

            )
              (g = v), (v = y);
            for (;;) {
              if (v === e) break t;
              if (
                (g === n && ++u === i && (a = l),
                g === o && ++d === r && (s = l),
                (y = v.nextSibling) !== null)
              )
                break;
              (v = g), (g = v.parentNode);
            }
            v = y;
          }
          n = a === -1 || s === -1 ? null : { start: a, end: s };
        } else n = null;
      }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (ls = { focusedElem: e, selectionRange: n }, Io = !1, L = t; L !== null; )
    if (((t = L), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
      (e.return = t), (L = e);
    else
      for (; L !== null; ) {
        t = L;
        try {
          var w = t.alternate;
          if (t.flags & 1024)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (w !== null) {
                  var x = w.memoizedProps,
                    P = w.memoizedState,
                    m = t.stateNode,
                    c = m.getSnapshotBeforeUpdate(
                      t.elementType === t.type ? x : gt(t.type, x),
                      P
                    );
                  m.__reactInternalSnapshotBeforeUpdate = c;
                }
                break;
              case 3:
                var p = t.stateNode.containerInfo;
                p.nodeType === 1
                  ? (p.textContent = "")
                  : p.nodeType === 9 &&
                    p.documentElement &&
                    p.removeChild(p.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(j(163));
            }
        } catch (f) {
          he(t, t.return, f);
        }
        if (((e = t.sibling), e !== null)) {
          (e.return = t.return), (L = e);
          break;
        }
        L = t.return;
      }
  return (w = df), (df = !1), w;
}
function ai(e, t, n) {
  var r = t.updateQueue;
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var i = (r = r.next);
    do {
      if ((i.tag & e) === e) {
        var o = i.destroy;
        (i.destroy = void 0), o !== void 0 && Es(t, n, o);
      }
      i = i.next;
    } while (i !== r);
  }
}
function ml(e, t) {
  if (
    ((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)
  ) {
    var n = (t = t.next);
    do {
      if ((n.tag & e) === e) {
        var r = n.create;
        n.destroy = r();
      }
      n = n.next;
    } while (n !== t);
  }
}
function Rs(e) {
  var t = e.ref;
  if (t !== null) {
    var n = e.stateNode;
    switch (e.tag) {
      case 5:
        e = n;
        break;
      default:
        e = n;
    }
    typeof t == "function" ? t(e) : (t.current = e);
  }
}
function eh(e) {
  var t = e.alternate;
  t !== null && ((e.alternate = null), eh(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null &&
        (delete t[jt], delete t[Ci], delete t[us], delete t[yy], delete t[gy])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null);
}
function th(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function pf(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || th(e.return)) return null;
      e = e.return;
    }
    for (
      e.sibling.return = e.return, e = e.sibling;
      e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

    ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      (e.child.return = e), (e = e.child);
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function Cs(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode),
      t
        ? n.nodeType === 8
          ? n.parentNode.insertBefore(e, t)
          : n.insertBefore(e, t)
        : (n.nodeType === 8
            ? ((t = n.parentNode), t.insertBefore(e, n))
            : ((t = n), t.appendChild(e)),
          (n = n._reactRootContainer),
          n != null || t.onclick !== null || (t.onclick = Fo));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (Cs(e, t, n), e = e.sibling; e !== null; ) Cs(e, t, n), (e = e.sibling);
}
function _s(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && ((e = e.child), e !== null))
    for (_s(e, t, n), e = e.sibling; e !== null; ) _s(e, t, n), (e = e.sibling);
}
var Ne = null,
  wt = !1;
function rn(e, t, n) {
  for (n = n.child; n !== null; ) nh(e, t, n), (n = n.sibling);
}
function nh(e, t, n) {
  if (Lt && typeof Lt.onCommitFiberUnmount == "function")
    try {
      Lt.onCommitFiberUnmount(al, n);
    } catch {}
  switch (n.tag) {
    case 5:
      ze || ur(n, t);
    case 6:
      var r = Ne,
        i = wt;
      (Ne = null),
        rn(e, t, n),
        (Ne = r),
        (wt = i),
        Ne !== null &&
          (wt
            ? ((e = Ne),
              (n = n.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
            : Ne.removeChild(n.stateNode));
      break;
    case 18:
      Ne !== null &&
        (wt
          ? ((e = Ne),
            (n = n.stateNode),
            e.nodeType === 8
              ? xa(e.parentNode, n)
              : e.nodeType === 1 && xa(e, n),
            wi(e))
          : xa(Ne, n.stateNode));
      break;
    case 4:
      (r = Ne),
        (i = wt),
        (Ne = n.stateNode.containerInfo),
        (wt = !0),
        rn(e, t, n),
        (Ne = r),
        (wt = i);
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !ze &&
        ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
      ) {
        i = r = r.next;
        do {
          var o = i,
            l = o.destroy;
          (o = o.tag),
            l !== void 0 && (o & 2 || o & 4) && Es(n, t, l),
            (i = i.next);
        } while (i !== r);
      }
      rn(e, t, n);
      break;
    case 1:
      if (
        !ze &&
        (ur(n, t),
        (r = n.stateNode),
        typeof r.componentWillUnmount == "function")
      )
        try {
          (r.props = n.memoizedProps),
            (r.state = n.memoizedState),
            r.componentWillUnmount();
        } catch (a) {
          he(n, t, a);
        }
      rn(e, t, n);
      break;
    case 21:
      rn(e, t, n);
      break;
    case 22:
      n.mode & 1
        ? ((ze = (r = ze) || n.memoizedState !== null), rn(e, t, n), (ze = r))
        : rn(e, t, n);
      break;
    default:
      rn(e, t, n);
  }
}
function hf(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new Iy()),
      t.forEach(function (r) {
        var i = By.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(i, i));
      });
  }
}
function mt(e, t) {
  var n = t.deletions;
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var i = n[r];
      try {
        var o = e,
          l = t,
          a = l;
        e: for (; a !== null; ) {
          switch (a.tag) {
            case 5:
              (Ne = a.stateNode), (wt = !1);
              break e;
            case 3:
              (Ne = a.stateNode.containerInfo), (wt = !0);
              break e;
            case 4:
              (Ne = a.stateNode.containerInfo), (wt = !0);
              break e;
          }
          a = a.return;
        }
        if (Ne === null) throw Error(j(160));
        nh(o, l, i), (Ne = null), (wt = !1);
        var s = i.alternate;
        s !== null && (s.return = null), (i.return = null);
      } catch (u) {
        he(i, t, u);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; ) rh(t, e), (t = t.sibling);
}
function rh(e, t) {
  var n = e.alternate,
    r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((mt(t, e), kt(e), r & 4)) {
        try {
          ai(3, e, e.return), ml(3, e);
        } catch (x) {
          he(e, e.return, x);
        }
        try {
          ai(5, e, e.return);
        } catch (x) {
          he(e, e.return, x);
        }
      }
      break;
    case 1:
      mt(t, e), kt(e), r & 512 && n !== null && ur(n, n.return);
      break;
    case 5:
      if (
        (mt(t, e),
        kt(e),
        r & 512 && n !== null && ur(n, n.return),
        e.flags & 32)
      ) {
        var i = e.stateNode;
        try {
          mi(i, "");
        } catch (x) {
          he(e, e.return, x);
        }
      }
      if (r & 4 && ((i = e.stateNode), i != null)) {
        var o = e.memoizedProps,
          l = n !== null ? n.memoizedProps : o,
          a = e.type,
          s = e.updateQueue;
        if (((e.updateQueue = null), s !== null))
          try {
            a === "input" && o.type === "radio" && o.name != null && Cd(i, o),
              Ya(a, l);
            var u = Ya(a, o);
            for (l = 0; l < s.length; l += 2) {
              var d = s[l],
                v = s[l + 1];
              d === "style"
                ? Td(i, v)
                : d === "dangerouslySetInnerHTML"
                ? kd(i, v)
                : d === "children"
                ? mi(i, v)
                : Ks(i, d, v, u);
            }
            switch (a) {
              case "input":
                Ba(i, o);
                break;
              case "textarea":
                _d(i, o);
                break;
              case "select":
                var g = i._wrapperState.wasMultiple;
                i._wrapperState.wasMultiple = !!o.multiple;
                var y = o.value;
                y != null
                  ? pr(i, !!o.multiple, y, !1)
                  : g !== !!o.multiple &&
                    (o.defaultValue != null
                      ? pr(i, !!o.multiple, o.defaultValue, !0)
                      : pr(i, !!o.multiple, o.multiple ? [] : "", !1));
            }
            i[Ci] = o;
          } catch (x) {
            he(e, e.return, x);
          }
      }
      break;
    case 6:
      if ((mt(t, e), kt(e), r & 4)) {
        if (e.stateNode === null) throw Error(j(162));
        (i = e.stateNode), (o = e.memoizedProps);
        try {
          i.nodeValue = o;
        } catch (x) {
          he(e, e.return, x);
        }
      }
      break;
    case 3:
      if (
        (mt(t, e), kt(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
      )
        try {
          wi(t.containerInfo);
        } catch (x) {
          he(e, e.return, x);
        }
      break;
    case 4:
      mt(t, e), kt(e);
      break;
    case 13:
      mt(t, e),
        kt(e),
        (i = e.child),
        i.flags & 8192 &&
          ((o = i.memoizedState !== null),
          (i.stateNode.isHidden = o),
          !o ||
            (i.alternate !== null && i.alternate.memoizedState !== null) ||
            (_u = ye())),
        r & 4 && hf(e);
      break;
    case 22:
      if (
        ((d = n !== null && n.memoizedState !== null),
        e.mode & 1 ? ((ze = (u = ze) || d), mt(t, e), (ze = u)) : mt(t, e),
        kt(e),
        r & 8192)
      ) {
        if (
          ((u = e.memoizedState !== null),
          (e.stateNode.isHidden = u) && !d && e.mode & 1)
        )
          for (L = e, d = e.child; d !== null; ) {
            for (v = L = d; L !== null; ) {
              switch (((g = L), (y = g.child), g.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  ai(4, g, g.return);
                  break;
                case 1:
                  ur(g, g.return);
                  var w = g.stateNode;
                  if (typeof w.componentWillUnmount == "function") {
                    (r = g), (n = g.return);
                    try {
                      (t = r),
                        (w.props = t.memoizedProps),
                        (w.state = t.memoizedState),
                        w.componentWillUnmount();
                    } catch (x) {
                      he(r, n, x);
                    }
                  }
                  break;
                case 5:
                  ur(g, g.return);
                  break;
                case 22:
                  if (g.memoizedState !== null) {
                    vf(v);
                    continue;
                  }
              }
              y !== null ? ((y.return = g), (L = y)) : vf(v);
            }
            d = d.sibling;
          }
        e: for (d = null, v = e; ; ) {
          if (v.tag === 5) {
            if (d === null) {
              d = v;
              try {
                (i = v.stateNode),
                  u
                    ? ((o = i.style),
                      typeof o.setProperty == "function"
                        ? o.setProperty("display", "none", "important")
                        : (o.display = "none"))
                    : ((a = v.stateNode),
                      (s = v.memoizedProps.style),
                      (l =
                        s != null && s.hasOwnProperty("display")
                          ? s.display
                          : null),
                      (a.style.display = Nd("display", l)));
              } catch (x) {
                he(e, e.return, x);
              }
            }
          } else if (v.tag === 6) {
            if (d === null)
              try {
                v.stateNode.nodeValue = u ? "" : v.memoizedProps;
              } catch (x) {
                he(e, e.return, x);
              }
          } else if (
            ((v.tag !== 22 && v.tag !== 23) ||
              v.memoizedState === null ||
              v === e) &&
            v.child !== null
          ) {
            (v.child.return = v), (v = v.child);
            continue;
          }
          if (v === e) break e;
          for (; v.sibling === null; ) {
            if (v.return === null || v.return === e) break e;
            d === v && (d = null), (v = v.return);
          }
          d === v && (d = null), (v.sibling.return = v.return), (v = v.sibling);
        }
      }
      break;
    case 19:
      mt(t, e), kt(e), r & 4 && hf(e);
      break;
    case 21:
      break;
    default:
      mt(t, e), kt(e);
  }
}
function kt(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (th(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(j(160));
      }
      switch (r.tag) {
        case 5:
          var i = r.stateNode;
          r.flags & 32 && (mi(i, ""), (r.flags &= -33));
          var o = pf(e);
          _s(e, o, i);
          break;
        case 3:
        case 4:
          var l = r.stateNode.containerInfo,
            a = pf(e);
          Cs(e, a, l);
          break;
        default:
          throw Error(j(161));
      }
    } catch (s) {
      he(e, e.return, s);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function zy(e, t, n) {
  (L = e), ih(e);
}
function ih(e, t, n) {
  for (var r = (e.mode & 1) !== 0; L !== null; ) {
    var i = L,
      o = i.child;
    if (i.tag === 22 && r) {
      var l = i.memoizedState !== null || so;
      if (!l) {
        var a = i.alternate,
          s = (a !== null && a.memoizedState !== null) || ze;
        a = so;
        var u = ze;
        if (((so = l), (ze = s) && !u))
          for (L = i; L !== null; )
            (l = L),
              (s = l.child),
              l.tag === 22 && l.memoizedState !== null
                ? yf(i)
                : s !== null
                ? ((s.return = l), (L = s))
                : yf(i);
        for (; o !== null; ) (L = o), ih(o), (o = o.sibling);
        (L = i), (so = a), (ze = u);
      }
      mf(e);
    } else
      i.subtreeFlags & 8772 && o !== null ? ((o.return = i), (L = o)) : mf(e);
  }
}
function mf(e) {
  for (; L !== null; ) {
    var t = L;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              ze || ml(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !ze)
                if (n === null) r.componentDidMount();
                else {
                  var i =
                    t.elementType === t.type
                      ? n.memoizedProps
                      : gt(t.type, n.memoizedProps);
                  r.componentDidUpdate(
                    i,
                    n.memoizedState,
                    r.__reactInternalSnapshotBeforeUpdate
                  );
                }
              var o = t.updateQueue;
              o !== null && Gc(t, o, r);
              break;
            case 3:
              var l = t.updateQueue;
              if (l !== null) {
                if (((n = null), t.child !== null))
                  switch (t.child.tag) {
                    case 5:
                      n = t.child.stateNode;
                      break;
                    case 1:
                      n = t.child.stateNode;
                  }
                Gc(t, l, n);
              }
              break;
            case 5:
              var a = t.stateNode;
              if (n === null && t.flags & 4) {
                n = a;
                var s = t.memoizedProps;
                switch (t.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    s.autoFocus && n.focus();
                    break;
                  case "img":
                    s.src && (n.src = s.src);
                }
              }
              break;
            case 6:
              break;
            case 4:
              break;
            case 12:
              break;
            case 13:
              if (t.memoizedState === null) {
                var u = t.alternate;
                if (u !== null) {
                  var d = u.memoizedState;
                  if (d !== null) {
                    var v = d.dehydrated;
                    v !== null && wi(v);
                  }
                }
              }
              break;
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break;
            default:
              throw Error(j(163));
          }
        ze || (t.flags & 512 && Rs(t));
      } catch (g) {
        he(t, t.return, g);
      }
    }
    if (t === e) {
      L = null;
      break;
    }
    if (((n = t.sibling), n !== null)) {
      (n.return = t.return), (L = n);
      break;
    }
    L = t.return;
  }
}
function vf(e) {
  for (; L !== null; ) {
    var t = L;
    if (t === e) {
      L = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      (n.return = t.return), (L = n);
      break;
    }
    L = t.return;
  }
}
function yf(e) {
  for (; L !== null; ) {
    var t = L;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            ml(4, t);
          } catch (s) {
            he(t, n, s);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var i = t.return;
            try {
              r.componentDidMount();
            } catch (s) {
              he(t, i, s);
            }
          }
          var o = t.return;
          try {
            Rs(t);
          } catch (s) {
            he(t, o, s);
          }
          break;
        case 5:
          var l = t.return;
          try {
            Rs(t);
          } catch (s) {
            he(t, l, s);
          }
      }
    } catch (s) {
      he(t, t.return, s);
    }
    if (t === e) {
      L = null;
      break;
    }
    var a = t.sibling;
    if (a !== null) {
      (a.return = t.return), (L = a);
      break;
    }
    L = t.return;
  }
}
var Fy = Math.ceil,
  qo = Xt.ReactCurrentDispatcher,
  Ru = Xt.ReactCurrentOwner,
  ct = Xt.ReactCurrentBatchConfig,
  Q = 0,
  Pe = null,
  xe = null,
  Te = 0,
  Xe = 0,
  cr = _n(0),
  Ce = 0,
  ji = null,
  Hn = 0,
  vl = 0,
  Cu = 0,
  si = null,
  He = null,
  _u = 0,
  Pr = 1 / 0,
  Ut = null,
  Yo = !1,
  Ps = null,
  yn = null,
  uo = !1,
  fn = null,
  Xo = 0,
  ui = 0,
  ks = null,
  Po = -1,
  ko = 0;
function Ae() {
  return Q & 6 ? ye() : Po !== -1 ? Po : (Po = ye());
}
function gn(e) {
  return e.mode & 1
    ? Q & 2 && Te !== 0
      ? Te & -Te
      : Sy.transition !== null
      ? (ko === 0 && (ko = bd()), ko)
      : ((e = X),
        e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : qd(e.type))),
        e)
    : 1;
}
function Rt(e, t, n, r) {
  if (50 < ui) throw ((ui = 0), (ks = null), Error(j(185)));
  Ii(e, n, r),
    (!(Q & 2) || e !== Pe) &&
      (e === Pe && (!(Q & 2) && (vl |= n), Ce === 4 && un(e, Te)),
      Qe(e, r),
      n === 1 && Q === 0 && !(t.mode & 1) && ((Pr = ye() + 500), dl && Pn()));
}
function Qe(e, t) {
  var n = e.callbackNode;
  Sv(e, t);
  var r = Lo(e, e === Pe ? Te : 0);
  if (r === 0)
    n !== null && _c(n), (e.callbackNode = null), (e.callbackPriority = 0);
  else if (((t = r & -r), e.callbackPriority !== t)) {
    if ((n != null && _c(n), t === 1))
      e.tag === 0 ? wy(gf.bind(null, e)) : pp(gf.bind(null, e)),
        my(function () {
          !(Q & 6) && Pn();
        }),
        (n = null);
    else {
      switch (Wd(r)) {
        case 1:
          n = Gs;
          break;
        case 4:
          n = Ud;
          break;
        case 16:
          n = Mo;
          break;
        case 536870912:
          n = Ad;
          break;
        default:
          n = Mo;
      }
      n = dh(n, oh.bind(null, e));
    }
    (e.callbackPriority = t), (e.callbackNode = n);
  }
}
function oh(e, t) {
  if (((Po = -1), (ko = 0), Q & 6)) throw Error(j(327));
  var n = e.callbackNode;
  if (gr() && e.callbackNode !== n) return null;
  var r = Lo(e, e === Pe ? Te : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = Go(e, r);
  else {
    t = r;
    var i = Q;
    Q |= 2;
    var o = ah();
    (Pe !== e || Te !== t) && ((Ut = null), (Pr = ye() + 500), $n(e, t));
    do
      try {
        Ay();
        break;
      } catch (a) {
        lh(e, a);
      }
    while (1);
    cu(),
      (qo.current = o),
      (Q = i),
      xe !== null ? (t = 0) : ((Pe = null), (Te = 0), (t = Ce));
  }
  if (t !== 0) {
    if (
      (t === 2 && ((i = es(e)), i !== 0 && ((r = i), (t = Ns(e, i)))), t === 1)
    )
      throw ((n = ji), $n(e, 0), un(e, r), Qe(e, ye()), n);
    if (t === 6) un(e, r);
    else {
      if (
        ((i = e.current.alternate),
        !(r & 30) &&
          !$y(i) &&
          ((t = Go(e, r)),
          t === 2 && ((o = es(e)), o !== 0 && ((r = o), (t = Ns(e, o)))),
          t === 1))
      )
        throw ((n = ji), $n(e, 0), un(e, r), Qe(e, ye()), n);
      switch (((e.finishedWork = i), (e.finishedLanes = r), t)) {
        case 0:
        case 1:
          throw Error(j(345));
        case 2:
          Mn(e, He, Ut);
          break;
        case 3:
          if (
            (un(e, r), (r & 130023424) === r && ((t = _u + 500 - ye()), 10 < t))
          ) {
            if (Lo(e, 0) !== 0) break;
            if (((i = e.suspendedLanes), (i & r) !== r)) {
              Ae(), (e.pingedLanes |= e.suspendedLanes & i);
              break;
            }
            e.timeoutHandle = ss(Mn.bind(null, e, He, Ut), t);
            break;
          }
          Mn(e, He, Ut);
          break;
        case 4:
          if ((un(e, r), (r & 4194240) === r)) break;
          for (t = e.eventTimes, i = -1; 0 < r; ) {
            var l = 31 - Et(r);
            (o = 1 << l), (l = t[l]), l > i && (i = l), (r &= ~o);
          }
          if (
            ((r = i),
            (r = ye() - r),
            (r =
              (120 > r
                ? 120
                : 480 > r
                ? 480
                : 1080 > r
                ? 1080
                : 1920 > r
                ? 1920
                : 3e3 > r
                ? 3e3
                : 4320 > r
                ? 4320
                : 1960 * Fy(r / 1960)) - r),
            10 < r)
          ) {
            e.timeoutHandle = ss(Mn.bind(null, e, He, Ut), r);
            break;
          }
          Mn(e, He, Ut);
          break;
        case 5:
          Mn(e, He, Ut);
          break;
        default:
          throw Error(j(329));
      }
    }
  }
  return Qe(e, ye()), e.callbackNode === n ? oh.bind(null, e) : null;
}
function Ns(e, t) {
  var n = si;
  return (
    e.current.memoizedState.isDehydrated && ($n(e, t).flags |= 256),
    (e = Go(e, t)),
    e !== 2 && ((t = He), (He = n), t !== null && Ts(t)),
    e
  );
}
function Ts(e) {
  He === null ? (He = e) : He.push.apply(He, e);
}
function $y(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && ((n = n.stores), n !== null))
        for (var r = 0; r < n.length; r++) {
          var i = n[r],
            o = i.getSnapshot;
          i = i.value;
          try {
            if (!Ct(o(), i)) return !1;
          } catch {
            return !1;
          }
        }
    }
    if (((n = t.child), t.subtreeFlags & 16384 && n !== null))
      (n.return = t), (t = n);
    else {
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return !0;
        t = t.return;
      }
      (t.sibling.return = t.return), (t = t.sibling);
    }
  }
  return !0;
}
function un(e, t) {
  for (
    t &= ~Cu,
      t &= ~vl,
      e.suspendedLanes |= t,
      e.pingedLanes &= ~t,
      e = e.expirationTimes;
    0 < t;

  ) {
    var n = 31 - Et(t),
      r = 1 << n;
    (e[n] = -1), (t &= ~r);
  }
}
function gf(e) {
  if (Q & 6) throw Error(j(327));
  gr();
  var t = Lo(e, 0);
  if (!(t & 1)) return Qe(e, ye()), null;
  var n = Go(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = es(e);
    r !== 0 && ((t = r), (n = Ns(e, r)));
  }
  if (n === 1) throw ((n = ji), $n(e, 0), un(e, t), Qe(e, ye()), n);
  if (n === 6) throw Error(j(345));
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    Mn(e, He, Ut),
    Qe(e, ye()),
    null
  );
}
function Pu(e, t) {
  var n = Q;
  Q |= 1;
  try {
    return e(t);
  } finally {
    (Q = n), Q === 0 && ((Pr = ye() + 500), dl && Pn());
  }
}
function Bn(e) {
  fn !== null && fn.tag === 0 && !(Q & 6) && gr();
  var t = Q;
  Q |= 1;
  var n = ct.transition,
    r = X;
  try {
    if (((ct.transition = null), (X = 1), e)) return e();
  } finally {
    (X = r), (ct.transition = n), (Q = t), !(Q & 6) && Pn();
  }
}
function ku() {
  (Xe = cr.current), oe(cr);
}
function $n(e, t) {
  (e.finishedWork = null), (e.finishedLanes = 0);
  var n = e.timeoutHandle;
  if ((n !== -1 && ((e.timeoutHandle = -1), hy(n)), xe !== null))
    for (n = xe.return; n !== null; ) {
      var r = n;
      switch ((au(r), r.tag)) {
        case 1:
          (r = r.type.childContextTypes), r != null && $o();
          break;
        case 3:
          Cr(), oe(Ve), oe(Fe), vu();
          break;
        case 5:
          mu(r);
          break;
        case 4:
          Cr();
          break;
        case 13:
          oe(ce);
          break;
        case 19:
          oe(ce);
          break;
        case 10:
          fu(r.type._context);
          break;
        case 22:
        case 23:
          ku();
      }
      n = n.return;
    }
  if (
    ((Pe = e),
    (xe = e = wn(e.current, null)),
    (Te = Xe = t),
    (Ce = 0),
    (ji = null),
    (Cu = vl = Hn = 0),
    (He = si = null),
    Dn !== null)
  ) {
    for (t = 0; t < Dn.length; t++)
      if (((n = Dn[t]), (r = n.interleaved), r !== null)) {
        n.interleaved = null;
        var i = r.next,
          o = n.pending;
        if (o !== null) {
          var l = o.next;
          (o.next = i), (r.next = l);
        }
        n.pending = r;
      }
    Dn = null;
  }
  return e;
}
function lh(e, t) {
  do {
    var n = xe;
    try {
      if ((cu(), (Ro.current = Qo), Ko)) {
        for (var r = fe.memoizedState; r !== null; ) {
          var i = r.queue;
          i !== null && (i.pending = null), (r = r.next);
        }
        Ko = !1;
      }
      if (
        ((Wn = 0),
        (_e = Re = fe = null),
        (li = !1),
        (ki = 0),
        (Ru.current = null),
        n === null || n.return === null)
      ) {
        (Ce = 1), (ji = t), (xe = null);
        break;
      }
      e: {
        var o = e,
          l = n.return,
          a = n,
          s = t;
        if (
          ((t = Te),
          (a.flags |= 32768),
          s !== null && typeof s == "object" && typeof s.then == "function")
        ) {
          var u = s,
            d = a,
            v = d.tag;
          if (!(d.mode & 1) && (v === 0 || v === 11 || v === 15)) {
            var g = d.alternate;
            g
              ? ((d.updateQueue = g.updateQueue),
                (d.memoizedState = g.memoizedState),
                (d.lanes = g.lanes))
              : ((d.updateQueue = null), (d.memoizedState = null));
          }
          var y = of(l);
          if (y !== null) {
            (y.flags &= -257),
              lf(y, l, a, o, t),
              y.mode & 1 && rf(o, u, t),
              (t = y),
              (s = u);
            var w = t.updateQueue;
            if (w === null) {
              var x = new Set();
              x.add(s), (t.updateQueue = x);
            } else w.add(s);
            break e;
          } else {
            if (!(t & 1)) {
              rf(o, u, t), Nu();
              break e;
            }
            s = Error(j(426));
          }
        } else if (le && a.mode & 1) {
          var P = of(l);
          if (P !== null) {
            !(P.flags & 65536) && (P.flags |= 256),
              lf(P, l, a, o, t),
              su(_r(s, a));
            break e;
          }
        }
        (o = s = _r(s, a)),
          Ce !== 4 && (Ce = 2),
          si === null ? (si = [o]) : si.push(o),
          (o = l);
        do {
          switch (o.tag) {
            case 3:
              (o.flags |= 65536), (t &= -t), (o.lanes |= t);
              var m = Hp(o, s, t);
              Xc(o, m);
              break e;
            case 1:
              a = s;
              var c = o.type,
                p = o.stateNode;
              if (
                !(o.flags & 128) &&
                (typeof c.getDerivedStateFromError == "function" ||
                  (p !== null &&
                    typeof p.componentDidCatch == "function" &&
                    (yn === null || !yn.has(p))))
              ) {
                (o.flags |= 65536), (t &= -t), (o.lanes |= t);
                var f = Bp(o, a, t);
                Xc(o, f);
                break e;
              }
          }
          o = o.return;
        } while (o !== null);
      }
      uh(n);
    } catch (S) {
      (t = S), xe === n && n !== null && (xe = n = n.return);
      continue;
    }
    break;
  } while (1);
}
function ah() {
  var e = qo.current;
  return (qo.current = Qo), e === null ? Qo : e;
}
function Nu() {
  (Ce === 0 || Ce === 3 || Ce === 2) && (Ce = 4),
    Pe === null || (!(Hn & 268435455) && !(vl & 268435455)) || un(Pe, Te);
}
function Go(e, t) {
  var n = Q;
  Q |= 2;
  var r = ah();
  (Pe !== e || Te !== t) && ((Ut = null), $n(e, t));
  do
    try {
      Uy();
      break;
    } catch (i) {
      lh(e, i);
    }
  while (1);
  if ((cu(), (Q = n), (qo.current = r), xe !== null)) throw Error(j(261));
  return (Pe = null), (Te = 0), Ce;
}
function Uy() {
  for (; xe !== null; ) sh(xe);
}
function Ay() {
  for (; xe !== null && !fv(); ) sh(xe);
}
function sh(e) {
  var t = fh(e.alternate, e, Xe);
  (e.memoizedProps = e.pendingProps),
    t === null ? uh(e) : (xe = t),
    (Ru.current = null);
}
function uh(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (((e = t.return), t.flags & 32768)) {
      if (((n = Ly(n, t)), n !== null)) {
        (n.flags &= 32767), (xe = n);
        return;
      }
      if (e !== null)
        (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
      else {
        (Ce = 6), (xe = null);
        return;
      }
    } else if (((n = My(n, t, Xe)), n !== null)) {
      xe = n;
      return;
    }
    if (((t = t.sibling), t !== null)) {
      xe = t;
      return;
    }
    xe = t = e;
  } while (t !== null);
  Ce === 0 && (Ce = 5);
}
function Mn(e, t, n) {
  var r = X,
    i = ct.transition;
  try {
    (ct.transition = null), (X = 1), by(e, t, n, r);
  } finally {
    (ct.transition = i), (X = r);
  }
  return null;
}
function by(e, t, n, r) {
  do gr();
  while (fn !== null);
  if (Q & 6) throw Error(j(327));
  n = e.finishedWork;
  var i = e.finishedLanes;
  if (n === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
    throw Error(j(177));
  (e.callbackNode = null), (e.callbackPriority = 0);
  var o = n.lanes | n.childLanes;
  if (
    (xv(e, o),
    e === Pe && ((xe = Pe = null), (Te = 0)),
    (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      uo ||
      ((uo = !0),
      dh(Mo, function () {
        return gr(), null;
      })),
    (o = (n.flags & 15990) !== 0),
    n.subtreeFlags & 15990 || o)
  ) {
    (o = ct.transition), (ct.transition = null);
    var l = X;
    X = 1;
    var a = Q;
    (Q |= 4),
      (Ru.current = null),
      Dy(e, n),
      rh(n, e),
      ay(ls),
      (Io = !!os),
      (ls = os = null),
      (e.current = n),
      zy(n),
      dv(),
      (Q = a),
      (X = l),
      (ct.transition = o);
  } else e.current = n;
  if (
    (uo && ((uo = !1), (fn = e), (Xo = i)),
    (o = e.pendingLanes),
    o === 0 && (yn = null),
    mv(n.stateNode),
    Qe(e, ye()),
    t !== null)
  )
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      (i = t[n]), r(i.value, { componentStack: i.stack, digest: i.digest });
  if (Yo) throw ((Yo = !1), (e = Ps), (Ps = null), e);
  return (
    Xo & 1 && e.tag !== 0 && gr(),
    (o = e.pendingLanes),
    o & 1 ? (e === ks ? ui++ : ((ui = 0), (ks = e))) : (ui = 0),
    Pn(),
    null
  );
}
function gr() {
  if (fn !== null) {
    var e = Wd(Xo),
      t = ct.transition,
      n = X;
    try {
      if (((ct.transition = null), (X = 16 > e ? 16 : e), fn === null))
        var r = !1;
      else {
        if (((e = fn), (fn = null), (Xo = 0), Q & 6)) throw Error(j(331));
        var i = Q;
        for (Q |= 4, L = e.current; L !== null; ) {
          var o = L,
            l = o.child;
          if (L.flags & 16) {
            var a = o.deletions;
            if (a !== null) {
              for (var s = 0; s < a.length; s++) {
                var u = a[s];
                for (L = u; L !== null; ) {
                  var d = L;
                  switch (d.tag) {
                    case 0:
                    case 11:
                    case 15:
                      ai(8, d, o);
                  }
                  var v = d.child;
                  if (v !== null) (v.return = d), (L = v);
                  else
                    for (; L !== null; ) {
                      d = L;
                      var g = d.sibling,
                        y = d.return;
                      if ((eh(d), d === u)) {
                        L = null;
                        break;
                      }
                      if (g !== null) {
                        (g.return = y), (L = g);
                        break;
                      }
                      L = y;
                    }
                }
              }
              var w = o.alternate;
              if (w !== null) {
                var x = w.child;
                if (x !== null) {
                  w.child = null;
                  do {
                    var P = x.sibling;
                    (x.sibling = null), (x = P);
                  } while (x !== null);
                }
              }
              L = o;
            }
          }
          if (o.subtreeFlags & 2064 && l !== null) (l.return = o), (L = l);
          else
            e: for (; L !== null; ) {
              if (((o = L), o.flags & 2048))
                switch (o.tag) {
                  case 0:
                  case 11:
                  case 15:
                    ai(9, o, o.return);
                }
              var m = o.sibling;
              if (m !== null) {
                (m.return = o.return), (L = m);
                break e;
              }
              L = o.return;
            }
        }
        var c = e.current;
        for (L = c; L !== null; ) {
          l = L;
          var p = l.child;
          if (l.subtreeFlags & 2064 && p !== null) (p.return = l), (L = p);
          else
            e: for (l = c; L !== null; ) {
              if (((a = L), a.flags & 2048))
                try {
                  switch (a.tag) {
                    case 0:
                    case 11:
                    case 15:
                      ml(9, a);
                  }
                } catch (S) {
                  he(a, a.return, S);
                }
              if (a === l) {
                L = null;
                break e;
              }
              var f = a.sibling;
              if (f !== null) {
                (f.return = a.return), (L = f);
                break e;
              }
              L = a.return;
            }
        }
        if (
          ((Q = i), Pn(), Lt && typeof Lt.onPostCommitFiberRoot == "function")
        )
          try {
            Lt.onPostCommitFiberRoot(al, e);
          } catch {}
        r = !0;
      }
      return r;
    } finally {
      (X = n), (ct.transition = t);
    }
  }
  return !1;
}
function wf(e, t, n) {
  (t = _r(n, t)),
    (t = Hp(e, t, 1)),
    (e = vn(e, t, 1)),
    (t = Ae()),
    e !== null && (Ii(e, 1, t), Qe(e, t));
}
function he(e, t, n) {
  if (e.tag === 3) wf(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        wf(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (
          typeof t.type.getDerivedStateFromError == "function" ||
          (typeof r.componentDidCatch == "function" &&
            (yn === null || !yn.has(r)))
        ) {
          (e = _r(n, e)),
            (e = Bp(t, e, 1)),
            (t = vn(t, e, 1)),
            (e = Ae()),
            t !== null && (Ii(t, 1, e), Qe(t, e));
          break;
        }
      }
      t = t.return;
    }
}
function Wy(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t),
    (t = Ae()),
    (e.pingedLanes |= e.suspendedLanes & n),
    Pe === e &&
      (Te & n) === n &&
      (Ce === 4 || (Ce === 3 && (Te & 130023424) === Te && 500 > ye() - _u)
        ? $n(e, 0)
        : (Cu |= n)),
    Qe(e, t);
}
function ch(e, t) {
  t === 0 &&
    (e.mode & 1
      ? ((t = Zi), (Zi <<= 1), !(Zi & 130023424) && (Zi = 4194304))
      : (t = 1));
  var n = Ae();
  (e = qt(e, t)), e !== null && (Ii(e, t, n), Qe(e, n));
}
function Hy(e) {
  var t = e.memoizedState,
    n = 0;
  t !== null && (n = t.retryLane), ch(e, n);
}
function By(e, t) {
  var n = 0;
  switch (e.tag) {
    case 13:
      var r = e.stateNode,
        i = e.memoizedState;
      i !== null && (n = i.retryLane);
      break;
    case 19:
      r = e.stateNode;
      break;
    default:
      throw Error(j(314));
  }
  r !== null && r.delete(t), ch(e, n);
}
var fh;
fh = function (e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || Ve.current) Be = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return (Be = !1), Oy(e, t, n);
      Be = !!(e.flags & 131072);
    }
  else (Be = !1), le && t.flags & 1048576 && hp(t, bo, t.index);
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var r = t.type;
      _o(e, t), (e = t.pendingProps);
      var i = xr(t, Fe.current);
      yr(t, n), (i = gu(null, t, r, e, i, n));
      var o = wu();
      return (
        (t.flags |= 1),
        typeof i == "object" &&
        i !== null &&
        typeof i.render == "function" &&
        i.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            Ke(r) ? ((o = !0), Uo(t)) : (o = !1),
            (t.memoizedState =
              i.state !== null && i.state !== void 0 ? i.state : null),
            pu(t),
            (i.updater = pl),
            (t.stateNode = i),
            (i._reactInternals = t),
            ms(t, r, e, n),
            (t = gs(null, t, r, !0, o, n)))
          : ((t.tag = 0), le && o && lu(t), Ue(null, t, i, n), (t = t.child)),
        t
      );
    case 16:
      r = t.elementType;
      e: {
        switch (
          (_o(e, t),
          (e = t.pendingProps),
          (i = r._init),
          (r = i(r._payload)),
          (t.type = r),
          (i = t.tag = Ky(r)),
          (e = gt(r, e)),
          i)
        ) {
          case 0:
            t = ys(null, t, r, e, n);
            break e;
          case 1:
            t = uf(null, t, r, e, n);
            break e;
          case 11:
            t = af(null, t, r, e, n);
            break e;
          case 14:
            t = sf(null, t, r, gt(r.type, e), n);
            break e;
        }
        throw Error(j(306, r, ""));
      }
      return t;
    case 0:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : gt(r, i)),
        ys(e, t, r, i, n)
      );
    case 1:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : gt(r, i)),
        uf(e, t, r, i, n)
      );
    case 3:
      e: {
        if ((qp(t), e === null)) throw Error(j(387));
        (r = t.pendingProps),
          (o = t.memoizedState),
          (i = o.element),
          gp(e, t),
          Bo(t, r, null, n);
        var l = t.memoizedState;
        if (((r = l.element), o.isDehydrated))
          if (
            ((o = {
              element: r,
              isDehydrated: !1,
              cache: l.cache,
              pendingSuspenseBoundaries: l.pendingSuspenseBoundaries,
              transitions: l.transitions,
            }),
            (t.updateQueue.baseState = o),
            (t.memoizedState = o),
            t.flags & 256)
          ) {
            (i = _r(Error(j(423)), t)), (t = cf(e, t, r, n, i));
            break e;
          } else if (r !== i) {
            (i = _r(Error(j(424)), t)), (t = cf(e, t, r, n, i));
            break e;
          } else
            for (
              Je = mn(t.stateNode.containerInfo.firstChild),
                Ze = t,
                le = !0,
                xt = null,
                n = Ep(t, null, r, n),
                t.child = n;
              n;

            )
              (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
        else {
          if ((Er(), r === i)) {
            t = Yt(e, t, n);
            break e;
          }
          Ue(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return (
        Rp(t),
        e === null && ds(t),
        (r = t.type),
        (i = t.pendingProps),
        (o = e !== null ? e.memoizedProps : null),
        (l = i.children),
        as(r, i) ? (l = null) : o !== null && as(r, o) && (t.flags |= 32),
        Qp(e, t),
        Ue(e, t, l, n),
        t.child
      );
    case 6:
      return e === null && ds(t), null;
    case 13:
      return Yp(e, t, n);
    case 4:
      return (
        hu(t, t.stateNode.containerInfo),
        (r = t.pendingProps),
        e === null ? (t.child = Rr(t, null, r, n)) : Ue(e, t, r, n),
        t.child
      );
    case 11:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : gt(r, i)),
        af(e, t, r, i, n)
      );
    case 7:
      return Ue(e, t, t.pendingProps, n), t.child;
    case 8:
      return Ue(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return Ue(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (
          ((r = t.type._context),
          (i = t.pendingProps),
          (o = t.memoizedProps),
          (l = i.value),
          re(Wo, r._currentValue),
          (r._currentValue = l),
          o !== null)
        )
          if (Ct(o.value, l)) {
            if (o.children === i.children && !Ve.current) {
              t = Yt(e, t, n);
              break e;
            }
          } else
            for (o = t.child, o !== null && (o.return = t); o !== null; ) {
              var a = o.dependencies;
              if (a !== null) {
                l = o.child;
                for (var s = a.firstContext; s !== null; ) {
                  if (s.context === r) {
                    if (o.tag === 1) {
                      (s = Bt(-1, n & -n)), (s.tag = 2);
                      var u = o.updateQueue;
                      if (u !== null) {
                        u = u.shared;
                        var d = u.pending;
                        d === null
                          ? (s.next = s)
                          : ((s.next = d.next), (d.next = s)),
                          (u.pending = s);
                      }
                    }
                    (o.lanes |= n),
                      (s = o.alternate),
                      s !== null && (s.lanes |= n),
                      ps(o.return, n, t),
                      (a.lanes |= n);
                    break;
                  }
                  s = s.next;
                }
              } else if (o.tag === 10) l = o.type === t.type ? null : o.child;
              else if (o.tag === 18) {
                if (((l = o.return), l === null)) throw Error(j(341));
                (l.lanes |= n),
                  (a = l.alternate),
                  a !== null && (a.lanes |= n),
                  ps(l, n, t),
                  (l = o.sibling);
              } else l = o.child;
              if (l !== null) l.return = o;
              else
                for (l = o; l !== null; ) {
                  if (l === t) {
                    l = null;
                    break;
                  }
                  if (((o = l.sibling), o !== null)) {
                    (o.return = l.return), (l = o);
                    break;
                  }
                  l = l.return;
                }
              o = l;
            }
        Ue(e, t, i.children, n), (t = t.child);
      }
      return t;
    case 9:
      return (
        (i = t.type),
        (r = t.pendingProps.children),
        yr(t, n),
        (i = ft(i)),
        (r = r(i)),
        (t.flags |= 1),
        Ue(e, t, r, n),
        t.child
      );
    case 14:
      return (
        (r = t.type),
        (i = gt(r, t.pendingProps)),
        (i = gt(r.type, i)),
        sf(e, t, r, i, n)
      );
    case 15:
      return Vp(e, t, t.type, t.pendingProps, n);
    case 17:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : gt(r, i)),
        _o(e, t),
        (t.tag = 1),
        Ke(r) ? ((e = !0), Uo(t)) : (e = !1),
        yr(t, n),
        Sp(t, r, i),
        ms(t, r, i, n),
        gs(null, t, r, !0, e, n)
      );
    case 19:
      return Xp(e, t, n);
    case 22:
      return Kp(e, t, n);
  }
  throw Error(j(156, t.tag));
};
function dh(e, t) {
  return $d(e, t);
}
function Vy(e, t, n, r) {
  (this.tag = e),
    (this.key = n),
    (this.sibling =
      this.child =
      this.return =
      this.stateNode =
      this.type =
      this.elementType =
        null),
    (this.index = 0),
    (this.ref = null),
    (this.pendingProps = t),
    (this.dependencies =
      this.memoizedState =
      this.updateQueue =
      this.memoizedProps =
        null),
    (this.mode = r),
    (this.subtreeFlags = this.flags = 0),
    (this.deletions = null),
    (this.childLanes = this.lanes = 0),
    (this.alternate = null);
}
function ut(e, t, n, r) {
  return new Vy(e, t, n, r);
}
function Tu(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent);
}
function Ky(e) {
  if (typeof e == "function") return Tu(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === qs)) return 11;
    if (e === Ys) return 14;
  }
  return 2;
}
function wn(e, t) {
  var n = e.alternate;
  return (
    n === null
      ? ((n = ut(e.tag, t, e.key, e.mode)),
        (n.elementType = e.elementType),
        (n.type = e.type),
        (n.stateNode = e.stateNode),
        (n.alternate = e),
        (e.alternate = n))
      : ((n.pendingProps = t),
        (n.type = e.type),
        (n.flags = 0),
        (n.subtreeFlags = 0),
        (n.deletions = null)),
    (n.flags = e.flags & 14680064),
    (n.childLanes = e.childLanes),
    (n.lanes = e.lanes),
    (n.child = e.child),
    (n.memoizedProps = e.memoizedProps),
    (n.memoizedState = e.memoizedState),
    (n.updateQueue = e.updateQueue),
    (t = e.dependencies),
    (n.dependencies =
      t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
    (n.sibling = e.sibling),
    (n.index = e.index),
    (n.ref = e.ref),
    n
  );
}
function No(e, t, n, r, i, o) {
  var l = 2;
  if (((r = e), typeof e == "function")) Tu(e) && (l = 1);
  else if (typeof e == "string") l = 5;
  else
    e: switch (e) {
      case er:
        return Un(n.children, i, o, t);
      case Qs:
        (l = 8), (i |= 8);
        break;
      case Ua:
        return (
          (e = ut(12, n, t, i | 2)), (e.elementType = Ua), (e.lanes = o), e
        );
      case Aa:
        return (e = ut(13, n, t, i)), (e.elementType = Aa), (e.lanes = o), e;
      case ba:
        return (e = ut(19, n, t, i)), (e.elementType = ba), (e.lanes = o), e;
      case xd:
        return yl(n, i, o, t);
      default:
        if (typeof e == "object" && e !== null)
          switch (e.$$typeof) {
            case wd:
              l = 10;
              break e;
            case Sd:
              l = 9;
              break e;
            case qs:
              l = 11;
              break e;
            case Ys:
              l = 14;
              break e;
            case ln:
              (l = 16), (r = null);
              break e;
          }
        throw Error(j(130, e == null ? e : typeof e, ""));
    }
  return (
    (t = ut(l, n, t, i)), (t.elementType = e), (t.type = r), (t.lanes = o), t
  );
}
function Un(e, t, n, r) {
  return (e = ut(7, e, r, t)), (e.lanes = n), e;
}
function yl(e, t, n, r) {
  return (
    (e = ut(22, e, r, t)),
    (e.elementType = xd),
    (e.lanes = n),
    (e.stateNode = { isHidden: !1 }),
    e
  );
}
function Ta(e, t, n) {
  return (e = ut(6, e, null, t)), (e.lanes = n), e;
}
function ja(e, t, n) {
  return (
    (t = ut(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = n),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    t
  );
}
function Qy(e, t, n, r, i) {
  (this.tag = t),
    (this.containerInfo = e),
    (this.finishedWork =
      this.pingCache =
      this.current =
      this.pendingChildren =
        null),
    (this.timeoutHandle = -1),
    (this.callbackNode = this.pendingContext = this.context = null),
    (this.callbackPriority = 0),
    (this.eventTimes = ca(0)),
    (this.expirationTimes = ca(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = ca(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = i),
    (this.mutableSourceEagerHydrationData = null);
}
function ju(e, t, n, r, i, o, l, a, s) {
  return (
    (e = new Qy(e, t, n, a, s)),
    t === 1 ? ((t = 1), o === !0 && (t |= 8)) : (t = 0),
    (o = ut(3, null, null, t)),
    (e.current = o),
    (o.stateNode = e),
    (o.memoizedState = {
      element: r,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    pu(o),
    e
  );
}
function qy(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: Zn,
    key: r == null ? null : "" + r,
    children: e,
    containerInfo: t,
    implementation: n,
  };
}
function ph(e) {
  if (!e) return En;
  e = e._reactInternals;
  e: {
    if (Qn(e) !== e || e.tag !== 1) throw Error(j(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (Ke(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(j(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (Ke(n)) return dp(e, n, t);
  }
  return t;
}
function hh(e, t, n, r, i, o, l, a, s) {
  return (
    (e = ju(n, r, !0, e, i, o, l, a, s)),
    (e.context = ph(null)),
    (n = e.current),
    (r = Ae()),
    (i = gn(n)),
    (o = Bt(r, i)),
    (o.callback = t ?? null),
    vn(n, o, i),
    (e.current.lanes = i),
    Ii(e, i, r),
    Qe(e, r),
    e
  );
}
function gl(e, t, n, r) {
  var i = t.current,
    o = Ae(),
    l = gn(i);
  return (
    (n = ph(n)),
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = Bt(o, l)),
    (t.payload = { element: e }),
    (r = r === void 0 ? null : r),
    r !== null && (t.callback = r),
    (e = vn(i, t, l)),
    e !== null && (Rt(e, i, l, o), Eo(e, i, l)),
    l
  );
}
function Jo(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function Sf(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function Ou(e, t) {
  Sf(e, t), (e = e.alternate) && Sf(e, t);
}
function Yy() {
  return null;
}
var mh =
  typeof reportError == "function"
    ? reportError
    : function (e) {
        console.error(e);
      };
function Mu(e) {
  this._internalRoot = e;
}
wl.prototype.render = Mu.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error(j(409));
  gl(e, t, null, null);
};
wl.prototype.unmount = Mu.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    Bn(function () {
      gl(null, e, null, null);
    }),
      (t[Qt] = null);
  }
};
function wl(e) {
  this._internalRoot = e;
}
wl.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = Vd();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < sn.length && t !== 0 && t < sn[n].priority; n++);
    sn.splice(n, 0, e), n === 0 && Qd(e);
  }
};
function Lu(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function Sl(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
  );
}
function xf() {}
function Xy(e, t, n, r, i) {
  if (i) {
    if (typeof r == "function") {
      var o = r;
      r = function () {
        var u = Jo(l);
        o.call(u);
      };
    }
    var l = hh(t, r, e, 0, null, !1, !1, "", xf);
    return (
      (e._reactRootContainer = l),
      (e[Qt] = l.current),
      Ei(e.nodeType === 8 ? e.parentNode : e),
      Bn(),
      l
    );
  }
  for (; (i = e.lastChild); ) e.removeChild(i);
  if (typeof r == "function") {
    var a = r;
    r = function () {
      var u = Jo(s);
      a.call(u);
    };
  }
  var s = ju(e, 0, !1, null, null, !1, !1, "", xf);
  return (
    (e._reactRootContainer = s),
    (e[Qt] = s.current),
    Ei(e.nodeType === 8 ? e.parentNode : e),
    Bn(function () {
      gl(t, s, n, r);
    }),
    s
  );
}
function xl(e, t, n, r, i) {
  var o = n._reactRootContainer;
  if (o) {
    var l = o;
    if (typeof i == "function") {
      var a = i;
      i = function () {
        var s = Jo(l);
        a.call(s);
      };
    }
    gl(t, l, e, i);
  } else l = Xy(n, t, e, i, r);
  return Jo(l);
}
Hd = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = Jr(t.pendingLanes);
        n !== 0 &&
          (Js(t, n | 1), Qe(t, ye()), !(Q & 6) && ((Pr = ye() + 500), Pn()));
      }
      break;
    case 13:
      Bn(function () {
        var r = qt(e, 1);
        if (r !== null) {
          var i = Ae();
          Rt(r, e, 1, i);
        }
      }),
        Ou(e, 1);
  }
};
Zs = function (e) {
  if (e.tag === 13) {
    var t = qt(e, 134217728);
    if (t !== null) {
      var n = Ae();
      Rt(t, e, 134217728, n);
    }
    Ou(e, 134217728);
  }
};
Bd = function (e) {
  if (e.tag === 13) {
    var t = gn(e),
      n = qt(e, t);
    if (n !== null) {
      var r = Ae();
      Rt(n, e, t, r);
    }
    Ou(e, t);
  }
};
Vd = function () {
  return X;
};
Kd = function (e, t) {
  var n = X;
  try {
    return (X = e), t();
  } finally {
    X = n;
  }
};
Ga = function (e, t, n) {
  switch (t) {
    case "input":
      if ((Ba(e, n), (t = n.name), n.type === "radio" && t != null)) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (
          n = n.querySelectorAll(
            "input[name=" + JSON.stringify("" + t) + '][type="radio"]'
          ),
            t = 0;
          t < n.length;
          t++
        ) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var i = fl(r);
            if (!i) throw Error(j(90));
            Rd(r), Ba(r, i);
          }
        }
      }
      break;
    case "textarea":
      _d(e, n);
      break;
    case "select":
      (t = n.value), t != null && pr(e, !!n.multiple, t, !1);
  }
};
Md = Pu;
Ld = Bn;
var Gy = { usingClientEntryPoint: !1, Events: [zi, ir, fl, jd, Od, Pu] },
  Vr = {
    findFiberByHostInstance: In,
    bundleType: 0,
    version: "18.2.0",
    rendererPackageName: "react-dom",
  },
  Jy = {
    bundleType: Vr.bundleType,
    version: Vr.version,
    rendererPackageName: Vr.rendererPackageName,
    rendererConfig: Vr.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: Xt.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return (e = zd(e)), e === null ? null : e.stateNode;
    },
    findFiberByHostInstance: Vr.findFiberByHostInstance || Yy,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.2.0-next-9e3b772b8-20220608",
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var co = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!co.isDisabled && co.supportsFiber)
    try {
      (al = co.inject(Jy)), (Lt = co);
    } catch {}
}
tt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Gy;
tt.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!Lu(t)) throw Error(j(200));
  return qy(e, t, null, n);
};
tt.createRoot = function (e, t) {
  if (!Lu(e)) throw Error(j(299));
  var n = !1,
    r = "",
    i = mh;
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (i = t.onRecoverableError)),
    (t = ju(e, 1, !1, null, null, n, !1, r, i)),
    (e[Qt] = t.current),
    Ei(e.nodeType === 8 ? e.parentNode : e),
    new Mu(t)
  );
};
tt.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function"
      ? Error(j(188))
      : ((e = Object.keys(e).join(",")), Error(j(268, e)));
  return (e = zd(t)), (e = e === null ? null : e.stateNode), e;
};
tt.flushSync = function (e) {
  return Bn(e);
};
tt.hydrate = function (e, t, n) {
  if (!Sl(t)) throw Error(j(200));
  return xl(null, e, t, !0, n);
};
tt.hydrateRoot = function (e, t, n) {
  if (!Lu(e)) throw Error(j(405));
  var r = (n != null && n.hydratedSources) || null,
    i = !1,
    o = "",
    l = mh;
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (i = !0),
      n.identifierPrefix !== void 0 && (o = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (l = n.onRecoverableError)),
    (t = hh(t, null, e, 1, n ?? null, i, !1, o, l)),
    (e[Qt] = t.current),
    Ei(e),
    r)
  )
    for (e = 0; e < r.length; e++)
      (n = r[e]),
        (i = n._getVersion),
        (i = i(n._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [n, i])
          : t.mutableSourceEagerHydrationData.push(n, i);
  return new wl(t);
};
tt.render = function (e, t, n) {
  if (!Sl(t)) throw Error(j(200));
  return xl(null, e, t, !1, n);
};
tt.unmountComponentAtNode = function (e) {
  if (!Sl(e)) throw Error(j(40));
  return e._reactRootContainer
    ? (Bn(function () {
        xl(null, null, e, !1, function () {
          (e._reactRootContainer = null), (e[Qt] = null);
        });
      }),
      !0)
    : !1;
};
tt.unstable_batchedUpdates = Pu;
tt.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
  if (!Sl(n)) throw Error(j(200));
  if (e == null || e._reactInternals === void 0) throw Error(j(38));
  return xl(e, t, n, !1, r);
};
tt.version = "18.2.0-next-9e3b772b8-20220608";
function vh() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(vh);
    } catch (e) {
      console.error(e);
    }
}
vh(), (hd.exports = tt);
var Iu = hd.exports;
const Zy = nd(Iu);
var Ef = Iu;
(Fa.createRoot = Ef.createRoot), (Fa.hydrateRoot = Ef.hydrateRoot);
var yh = { exports: {} },
  gh = {};
/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var kr = C;
function eg(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var tg = typeof Object.is == "function" ? Object.is : eg,
  ng = kr.useState,
  rg = kr.useEffect,
  ig = kr.useLayoutEffect,
  og = kr.useDebugValue;
function lg(e, t) {
  var n = t(),
    r = ng({ inst: { value: n, getSnapshot: t } }),
    i = r[0].inst,
    o = r[1];
  return (
    ig(
      function () {
        (i.value = n), (i.getSnapshot = t), Oa(i) && o({ inst: i });
      },
      [e, n, t]
    ),
    rg(
      function () {
        return (
          Oa(i) && o({ inst: i }),
          e(function () {
            Oa(i) && o({ inst: i });
          })
        );
      },
      [e]
    ),
    og(n),
    n
  );
}
function Oa(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !tg(e, n);
  } catch {
    return !0;
  }
}
function ag(e, t) {
  return t();
}
var sg =
  typeof window > "u" ||
  typeof window.document > "u" ||
  typeof window.document.createElement > "u"
    ? ag
    : lg;
gh.useSyncExternalStore =
  kr.useSyncExternalStore !== void 0 ? kr.useSyncExternalStore : sg;
yh.exports = gh;
var ug = yh.exports,
  wh = { exports: {} },
  Sh = {};
/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var El = C,
  cg = ug;
function fg(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var dg = typeof Object.is == "function" ? Object.is : fg,
  pg = cg.useSyncExternalStore,
  hg = El.useRef,
  mg = El.useEffect,
  vg = El.useMemo,
  yg = El.useDebugValue;
Sh.useSyncExternalStoreWithSelector = function (e, t, n, r, i) {
  var o = hg(null);
  if (o.current === null) {
    var l = { hasValue: !1, value: null };
    o.current = l;
  } else l = o.current;
  o = vg(
    function () {
      function s(y) {
        if (!u) {
          if (((u = !0), (d = y), (y = r(y)), i !== void 0 && l.hasValue)) {
            var w = l.value;
            if (i(w, y)) return (v = w);
          }
          return (v = y);
        }
        if (((w = v), dg(d, y))) return w;
        var x = r(y);
        return i !== void 0 && i(w, x) ? w : ((d = y), (v = x));
      }
      var u = !1,
        d,
        v,
        g = n === void 0 ? null : n;
      return [
        function () {
          return s(t());
        },
        g === null
          ? void 0
          : function () {
              return s(g());
            },
      ];
    },
    [t, n, r, i]
  );
  var a = pg(e, o[0], o[1]);
  return (
    mg(
      function () {
        (l.hasValue = !0), (l.value = a);
      },
      [a]
    ),
    yg(a),
    a
  );
};
wh.exports = Sh;
var gg = wh.exports;
function wg(e) {
  e();
}
let xh = wg;
const Sg = (e) => (xh = e),
  xg = () => xh,
  Rf = Symbol.for("react-redux-context"),
  Cf = typeof globalThis < "u" ? globalThis : {};
function Eg() {
  var e;
  if (!C.createContext) return {};
  const t = (e = Cf[Rf]) != null ? e : (Cf[Rf] = new Map());
  let n = t.get(C.createContext);
  return n || ((n = C.createContext(null)), t.set(C.createContext, n)), n;
}
const Rn = Eg();
function Du(e = Rn) {
  return function () {
    return C.useContext(e);
  };
}
const Eh = Du(),
  Rg = () => {
    throw new Error("uSES not initialized!");
  };
let Rh = Rg;
const Cg = (e) => {
    Rh = e;
  },
  _g = (e, t) => e === t;
function Pg(e = Rn) {
  const t = e === Rn ? Eh : Du(e);
  return function (r, i = {}) {
    const {
        equalityFn: o = _g,
        stabilityCheck: l = void 0,
        noopCheck: a = void 0,
      } = typeof i == "function" ? { equalityFn: i } : i,
      {
        store: s,
        subscription: u,
        getServerState: d,
        stabilityCheck: v,
        noopCheck: g,
      } = t();
    C.useRef(!0);
    const y = C.useCallback(
        {
          [r.name](x) {
            return r(x);
          },
        }[r.name],
        [r, v, l]
      ),
      w = Rh(u.addNestedSub, s.getState, d || s.getState, y, o);
    return C.useDebugValue(w), w;
  };
}
const Sn = Pg();
var Ch = { exports: {} },
  G = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var ke = typeof Symbol == "function" && Symbol.for,
  zu = ke ? Symbol.for("react.element") : 60103,
  Fu = ke ? Symbol.for("react.portal") : 60106,
  Rl = ke ? Symbol.for("react.fragment") : 60107,
  Cl = ke ? Symbol.for("react.strict_mode") : 60108,
  _l = ke ? Symbol.for("react.profiler") : 60114,
  Pl = ke ? Symbol.for("react.provider") : 60109,
  kl = ke ? Symbol.for("react.context") : 60110,
  $u = ke ? Symbol.for("react.async_mode") : 60111,
  Nl = ke ? Symbol.for("react.concurrent_mode") : 60111,
  Tl = ke ? Symbol.for("react.forward_ref") : 60112,
  jl = ke ? Symbol.for("react.suspense") : 60113,
  kg = ke ? Symbol.for("react.suspense_list") : 60120,
  Ol = ke ? Symbol.for("react.memo") : 60115,
  Ml = ke ? Symbol.for("react.lazy") : 60116,
  Ng = ke ? Symbol.for("react.block") : 60121,
  Tg = ke ? Symbol.for("react.fundamental") : 60117,
  jg = ke ? Symbol.for("react.responder") : 60118,
  Og = ke ? Symbol.for("react.scope") : 60119;
function rt(e) {
  if (typeof e == "object" && e !== null) {
    var t = e.$$typeof;
    switch (t) {
      case zu:
        switch (((e = e.type), e)) {
          case $u:
          case Nl:
          case Rl:
          case _l:
          case Cl:
          case jl:
            return e;
          default:
            switch (((e = e && e.$$typeof), e)) {
              case kl:
              case Tl:
              case Ml:
              case Ol:
              case Pl:
                return e;
              default:
                return t;
            }
        }
      case Fu:
        return t;
    }
  }
}
function _h(e) {
  return rt(e) === Nl;
}
G.AsyncMode = $u;
G.ConcurrentMode = Nl;
G.ContextConsumer = kl;
G.ContextProvider = Pl;
G.Element = zu;
G.ForwardRef = Tl;
G.Fragment = Rl;
G.Lazy = Ml;
G.Memo = Ol;
G.Portal = Fu;
G.Profiler = _l;
G.StrictMode = Cl;
G.Suspense = jl;
G.isAsyncMode = function (e) {
  return _h(e) || rt(e) === $u;
};
G.isConcurrentMode = _h;
G.isContextConsumer = function (e) {
  return rt(e) === kl;
};
G.isContextProvider = function (e) {
  return rt(e) === Pl;
};
G.isElement = function (e) {
  return typeof e == "object" && e !== null && e.$$typeof === zu;
};
G.isForwardRef = function (e) {
  return rt(e) === Tl;
};
G.isFragment = function (e) {
  return rt(e) === Rl;
};
G.isLazy = function (e) {
  return rt(e) === Ml;
};
G.isMemo = function (e) {
  return rt(e) === Ol;
};
G.isPortal = function (e) {
  return rt(e) === Fu;
};
G.isProfiler = function (e) {
  return rt(e) === _l;
};
G.isStrictMode = function (e) {
  return rt(e) === Cl;
};
G.isSuspense = function (e) {
  return rt(e) === jl;
};
G.isValidElementType = function (e) {
  return (
    typeof e == "string" ||
    typeof e == "function" ||
    e === Rl ||
    e === Nl ||
    e === _l ||
    e === Cl ||
    e === jl ||
    e === kg ||
    (typeof e == "object" &&
      e !== null &&
      (e.$$typeof === Ml ||
        e.$$typeof === Ol ||
        e.$$typeof === Pl ||
        e.$$typeof === kl ||
        e.$$typeof === Tl ||
        e.$$typeof === Tg ||
        e.$$typeof === jg ||
        e.$$typeof === Og ||
        e.$$typeof === Ng))
  );
};
G.typeOf = rt;
Ch.exports = G;
var Mg = Ch.exports,
  Ph = Mg,
  Lg = {
    $$typeof: !0,
    render: !0,
    defaultProps: !0,
    displayName: !0,
    propTypes: !0,
  },
  Ig = {
    $$typeof: !0,
    compare: !0,
    defaultProps: !0,
    displayName: !0,
    propTypes: !0,
    type: !0,
  },
  kh = {};
kh[Ph.ForwardRef] = Lg;
kh[Ph.Memo] = Ig;
var ee = {};
/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Uu = Symbol.for("react.element"),
  Au = Symbol.for("react.portal"),
  Ll = Symbol.for("react.fragment"),
  Il = Symbol.for("react.strict_mode"),
  Dl = Symbol.for("react.profiler"),
  zl = Symbol.for("react.provider"),
  Fl = Symbol.for("react.context"),
  Dg = Symbol.for("react.server_context"),
  $l = Symbol.for("react.forward_ref"),
  Ul = Symbol.for("react.suspense"),
  Al = Symbol.for("react.suspense_list"),
  bl = Symbol.for("react.memo"),
  Wl = Symbol.for("react.lazy"),
  zg = Symbol.for("react.offscreen"),
  Nh;
Nh = Symbol.for("react.module.reference");
function pt(e) {
  if (typeof e == "object" && e !== null) {
    var t = e.$$typeof;
    switch (t) {
      case Uu:
        switch (((e = e.type), e)) {
          case Ll:
          case Dl:
          case Il:
          case Ul:
          case Al:
            return e;
          default:
            switch (((e = e && e.$$typeof), e)) {
              case Dg:
              case Fl:
              case $l:
              case Wl:
              case bl:
              case zl:
                return e;
              default:
                return t;
            }
        }
      case Au:
        return t;
    }
  }
}
ee.ContextConsumer = Fl;
ee.ContextProvider = zl;
ee.Element = Uu;
ee.ForwardRef = $l;
ee.Fragment = Ll;
ee.Lazy = Wl;
ee.Memo = bl;
ee.Portal = Au;
ee.Profiler = Dl;
ee.StrictMode = Il;
ee.Suspense = Ul;
ee.SuspenseList = Al;
ee.isAsyncMode = function () {
  return !1;
};
ee.isConcurrentMode = function () {
  return !1;
};
ee.isContextConsumer = function (e) {
  return pt(e) === Fl;
};
ee.isContextProvider = function (e) {
  return pt(e) === zl;
};
ee.isElement = function (e) {
  return typeof e == "object" && e !== null && e.$$typeof === Uu;
};
ee.isForwardRef = function (e) {
  return pt(e) === $l;
};
ee.isFragment = function (e) {
  return pt(e) === Ll;
};
ee.isLazy = function (e) {
  return pt(e) === Wl;
};
ee.isMemo = function (e) {
  return pt(e) === bl;
};
ee.isPortal = function (e) {
  return pt(e) === Au;
};
ee.isProfiler = function (e) {
  return pt(e) === Dl;
};
ee.isStrictMode = function (e) {
  return pt(e) === Il;
};
ee.isSuspense = function (e) {
  return pt(e) === Ul;
};
ee.isSuspenseList = function (e) {
  return pt(e) === Al;
};
ee.isValidElementType = function (e) {
  return (
    typeof e == "string" ||
    typeof e == "function" ||
    e === Ll ||
    e === Dl ||
    e === Il ||
    e === Ul ||
    e === Al ||
    e === zg ||
    (typeof e == "object" &&
      e !== null &&
      (e.$$typeof === Wl ||
        e.$$typeof === bl ||
        e.$$typeof === zl ||
        e.$$typeof === Fl ||
        e.$$typeof === $l ||
        e.$$typeof === Nh ||
        e.getModuleId !== void 0))
  );
};
ee.typeOf = pt;
function Fg() {
  const e = xg();
  let t = null,
    n = null;
  return {
    clear() {
      (t = null), (n = null);
    },
    notify() {
      e(() => {
        let r = t;
        for (; r; ) r.callback(), (r = r.next);
      });
    },
    get() {
      let r = [],
        i = t;
      for (; i; ) r.push(i), (i = i.next);
      return r;
    },
    subscribe(r) {
      let i = !0,
        o = (n = { callback: r, next: null, prev: n });
      return (
        o.prev ? (o.prev.next = o) : (t = o),
        function () {
          !i ||
            t === null ||
            ((i = !1),
            o.next ? (o.next.prev = o.prev) : (n = o.prev),
            o.prev ? (o.prev.next = o.next) : (t = o.next));
        }
      );
    },
  };
}
const _f = { notify() {}, get: () => [] };
function $g(e, t) {
  let n,
    r = _f;
  function i(v) {
    return s(), r.subscribe(v);
  }
  function o() {
    r.notify();
  }
  function l() {
    d.onStateChange && d.onStateChange();
  }
  function a() {
    return !!n;
  }
  function s() {
    n || ((n = t ? t.addNestedSub(l) : e.subscribe(l)), (r = Fg()));
  }
  function u() {
    n && (n(), (n = void 0), r.clear(), (r = _f));
  }
  const d = {
    addNestedSub: i,
    notifyNestedSubs: o,
    handleChangeWrapper: l,
    isSubscribed: a,
    trySubscribe: s,
    tryUnsubscribe: u,
    getListeners: () => r,
  };
  return d;
}
const Ug =
    typeof window < "u" &&
    typeof window.document < "u" &&
    typeof window.document.createElement < "u",
  Ag = Ug ? C.useLayoutEffect : C.useEffect;
function bg({
  store: e,
  context: t,
  children: n,
  serverState: r,
  stabilityCheck: i = "once",
  noopCheck: o = "once",
}) {
  const l = C.useMemo(() => {
      const u = $g(e);
      return {
        store: e,
        subscription: u,
        getServerState: r ? () => r : void 0,
        stabilityCheck: i,
        noopCheck: o,
      };
    }, [e, r, i, o]),
    a = C.useMemo(() => e.getState(), [e]);
  Ag(() => {
    const { subscription: u } = l;
    return (
      (u.onStateChange = u.notifyNestedSubs),
      u.trySubscribe(),
      a !== e.getState() && u.notifyNestedSubs(),
      () => {
        u.tryUnsubscribe(), (u.onStateChange = void 0);
      }
    );
  }, [l, a]);
  const s = t || Rn;
  return C.createElement(s.Provider, { value: l }, n);
}
function Th(e = Rn) {
  const t = e === Rn ? Eh : Du(e);
  return function () {
    const { store: r } = t();
    return r;
  };
}
const Wg = Th();
function Hg(e = Rn) {
  const t = e === Rn ? Wg : Th(e);
  return function () {
    return t().dispatch;
  };
}
const Dt = Hg();
Cg(gg.useSyncExternalStoreWithSelector);
Sg(Iu.unstable_batchedUpdates);
/**
 * @remix-run/router v1.9.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function ue() {
  return (
    (ue = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    ue.apply(this, arguments)
  );
}
var Se;
(function (e) {
  (e.Pop = "POP"), (e.Push = "PUSH"), (e.Replace = "REPLACE");
})(Se || (Se = {}));
const Pf = "popstate";
function Bg(e) {
  e === void 0 && (e = {});
  function t(r, i) {
    let { pathname: o, search: l, hash: a } = r.location;
    return Oi(
      "",
      { pathname: o, search: l, hash: a },
      (i.state && i.state.usr) || null,
      (i.state && i.state.key) || "default"
    );
  }
  function n(r, i) {
    return typeof i == "string" ? i : Vn(i);
  }
  return Kg(t, n, null, e);
}
function V(e, t) {
  if (e === !1 || e === null || typeof e > "u") throw new Error(t);
}
function Nr(e, t) {
  if (!e) {
    typeof console < "u" && console.warn(t);
    try {
      throw new Error(t);
    } catch {}
  }
}
function Vg() {
  return Math.random().toString(36).substr(2, 8);
}
function kf(e, t) {
  return { usr: e.state, key: e.key, idx: t };
}
function Oi(e, t, n, r) {
  return (
    n === void 0 && (n = null),
    ue(
      { pathname: typeof e == "string" ? e : e.pathname, search: "", hash: "" },
      typeof t == "string" ? Gt(t) : t,
      { state: n, key: (t && t.key) || r || Vg() }
    )
  );
}
function Vn(e) {
  let { pathname: t = "/", search: n = "", hash: r = "" } = e;
  return (
    n && n !== "?" && (t += n.charAt(0) === "?" ? n : "?" + n),
    r && r !== "#" && (t += r.charAt(0) === "#" ? r : "#" + r),
    t
  );
}
function Gt(e) {
  let t = {};
  if (e) {
    let n = e.indexOf("#");
    n >= 0 && ((t.hash = e.substr(n)), (e = e.substr(0, n)));
    let r = e.indexOf("?");
    r >= 0 && ((t.search = e.substr(r)), (e = e.substr(0, r))),
      e && (t.pathname = e);
  }
  return t;
}
function Kg(e, t, n, r) {
  r === void 0 && (r = {});
  let { window: i = document.defaultView, v5Compat: o = !1 } = r,
    l = i.history,
    a = Se.Pop,
    s = null,
    u = d();
  u == null && ((u = 0), l.replaceState(ue({}, l.state, { idx: u }), ""));
  function d() {
    return (l.state || { idx: null }).idx;
  }
  function v() {
    a = Se.Pop;
    let P = d(),
      m = P == null ? null : P - u;
    (u = P), s && s({ action: a, location: x.location, delta: m });
  }
  function g(P, m) {
    a = Se.Push;
    let c = Oi(x.location, P, m);
    n && n(c, P), (u = d() + 1);
    let p = kf(c, u),
      f = x.createHref(c);
    try {
      l.pushState(p, "", f);
    } catch (S) {
      if (S instanceof DOMException && S.name === "DataCloneError") throw S;
      i.location.assign(f);
    }
    o && s && s({ action: a, location: x.location, delta: 1 });
  }
  function y(P, m) {
    a = Se.Replace;
    let c = Oi(x.location, P, m);
    n && n(c, P), (u = d());
    let p = kf(c, u),
      f = x.createHref(c);
    l.replaceState(p, "", f),
      o && s && s({ action: a, location: x.location, delta: 0 });
  }
  function w(P) {
    let m = i.location.origin !== "null" ? i.location.origin : i.location.href,
      c = typeof P == "string" ? P : Vn(P);
    return (
      V(
        m,
        "No window.location.(origin|href) available to create URL for href: " +
          c
      ),
      new URL(c, m)
    );
  }
  let x = {
    get action() {
      return a;
    },
    get location() {
      return e(i, l);
    },
    listen(P) {
      if (s) throw new Error("A history only accepts one active listener");
      return (
        i.addEventListener(Pf, v),
        (s = P),
        () => {
          i.removeEventListener(Pf, v), (s = null);
        }
      );
    },
    createHref(P) {
      return t(i, P);
    },
    createURL: w,
    encodeLocation(P) {
      let m = w(P);
      return { pathname: m.pathname, search: m.search, hash: m.hash };
    },
    push: g,
    replace: y,
    go(P) {
      return l.go(P);
    },
  };
  return x;
}
var ve;
(function (e) {
  (e.data = "data"),
    (e.deferred = "deferred"),
    (e.redirect = "redirect"),
    (e.error = "error");
})(ve || (ve = {}));
const Qg = new Set([
  "lazy",
  "caseSensitive",
  "path",
  "id",
  "index",
  "children",
]);
function qg(e) {
  return e.index === !0;
}
function js(e, t, n, r) {
  return (
    n === void 0 && (n = []),
    r === void 0 && (r = {}),
    e.map((i, o) => {
      let l = [...n, o],
        a = typeof i.id == "string" ? i.id : l.join("-");
      if (
        (V(
          i.index !== !0 || !i.children,
          "Cannot specify children on an index route"
        ),
        V(
          !r[a],
          'Found a route id collision on id "' +
            a +
            `".  Route id's must be globally unique within Data Router usages`
        ),
        qg(i))
      ) {
        let s = ue({}, i, t(i), { id: a });
        return (r[a] = s), s;
      } else {
        let s = ue({}, i, t(i), { id: a, children: void 0 });
        return (
          (r[a] = s), i.children && (s.children = js(i.children, t, l, r)), s
        );
      }
    })
  );
}
function fr(e, t, n) {
  n === void 0 && (n = "/");
  let r = typeof t == "string" ? Gt(t) : t,
    i = Lr(r.pathname || "/", n);
  if (i == null) return null;
  let o = jh(e);
  Xg(o);
  let l = null;
  for (let a = 0; l == null && a < o.length; ++a) l = o0(o[a], s0(i));
  return l;
}
function Yg(e, t) {
  let { route: n, pathname: r, params: i } = e;
  return { id: n.id, pathname: r, params: i, data: t[n.id], handle: n.handle };
}
function jh(e, t, n, r) {
  t === void 0 && (t = []), n === void 0 && (n = []), r === void 0 && (r = "");
  let i = (o, l, a) => {
    let s = {
      relativePath: a === void 0 ? o.path || "" : a,
      caseSensitive: o.caseSensitive === !0,
      childrenIndex: l,
      route: o,
    };
    s.relativePath.startsWith("/") &&
      (V(
        s.relativePath.startsWith(r),
        'Absolute route path "' +
          s.relativePath +
          '" nested under path ' +
          ('"' + r + '" is not valid. An absolute child route path ') +
          "must start with the combined path of all its parent routes."
      ),
      (s.relativePath = s.relativePath.slice(r.length)));
    let u = Vt([r, s.relativePath]),
      d = n.concat(s);
    o.children &&
      o.children.length > 0 &&
      (V(
        o.index !== !0,
        "Index routes must not have child routes. Please remove " +
          ('all child routes from route path "' + u + '".')
      ),
      jh(o.children, t, d, u)),
      !(o.path == null && !o.index) &&
        t.push({ path: u, score: r0(u, o.index), routesMeta: d });
  };
  return (
    e.forEach((o, l) => {
      var a;
      if (o.path === "" || !((a = o.path) != null && a.includes("?"))) i(o, l);
      else for (let s of Oh(o.path)) i(o, l, s);
    }),
    t
  );
}
function Oh(e) {
  let t = e.split("/");
  if (t.length === 0) return [];
  let [n, ...r] = t,
    i = n.endsWith("?"),
    o = n.replace(/\?$/, "");
  if (r.length === 0) return i ? [o, ""] : [o];
  let l = Oh(r.join("/")),
    a = [];
  return (
    a.push(...l.map((s) => (s === "" ? o : [o, s].join("/")))),
    i && a.push(...l),
    a.map((s) => (e.startsWith("/") && s === "" ? "/" : s))
  );
}
function Xg(e) {
  e.sort((t, n) =>
    t.score !== n.score
      ? n.score - t.score
      : i0(
          t.routesMeta.map((r) => r.childrenIndex),
          n.routesMeta.map((r) => r.childrenIndex)
        )
  );
}
const Gg = /^:\w+$/,
  Jg = 3,
  Zg = 2,
  e0 = 1,
  t0 = 10,
  n0 = -2,
  Nf = (e) => e === "*";
function r0(e, t) {
  let n = e.split("/"),
    r = n.length;
  return (
    n.some(Nf) && (r += n0),
    t && (r += Zg),
    n
      .filter((i) => !Nf(i))
      .reduce((i, o) => i + (Gg.test(o) ? Jg : o === "" ? e0 : t0), r)
  );
}
function i0(e, t) {
  return e.length === t.length && e.slice(0, -1).every((r, i) => r === t[i])
    ? e[e.length - 1] - t[t.length - 1]
    : 0;
}
function o0(e, t) {
  let { routesMeta: n } = e,
    r = {},
    i = "/",
    o = [];
  for (let l = 0; l < n.length; ++l) {
    let a = n[l],
      s = l === n.length - 1,
      u = i === "/" ? t : t.slice(i.length) || "/",
      d = l0(
        { path: a.relativePath, caseSensitive: a.caseSensitive, end: s },
        u
      );
    if (!d) return null;
    Object.assign(r, d.params);
    let v = a.route;
    o.push({
      params: r,
      pathname: Vt([i, d.pathname]),
      pathnameBase: d0(Vt([i, d.pathnameBase])),
      route: v,
    }),
      d.pathnameBase !== "/" && (i = Vt([i, d.pathnameBase]));
  }
  return o;
}
function l0(e, t) {
  typeof e == "string" && (e = { path: e, caseSensitive: !1, end: !0 });
  let [n, r] = a0(e.path, e.caseSensitive, e.end),
    i = t.match(n);
  if (!i) return null;
  let o = i[0],
    l = o.replace(/(.)\/+$/, "$1"),
    a = i.slice(1);
  return {
    params: r.reduce((u, d, v) => {
      if (d === "*") {
        let g = a[v] || "";
        l = o.slice(0, o.length - g.length).replace(/(.)\/+$/, "$1");
      }
      return (u[d] = u0(a[v] || "", d)), u;
    }, {}),
    pathname: o,
    pathnameBase: l,
    pattern: e,
  };
}
function a0(e, t, n) {
  t === void 0 && (t = !1),
    n === void 0 && (n = !0),
    Nr(
      e === "*" || !e.endsWith("*") || e.endsWith("/*"),
      'Route path "' +
        e +
        '" will be treated as if it were ' +
        ('"' + e.replace(/\*$/, "/*") + '" because the `*` character must ') +
        "always follow a `/` in the pattern. To get rid of this warning, " +
        ('please change the route path to "' + e.replace(/\*$/, "/*") + '".')
    );
  let r = [],
    i =
      "^" +
      e
        .replace(/\/*\*?$/, "")
        .replace(/^\/*/, "/")
        .replace(/[\\.*+^$?{}|()[\]]/g, "\\$&")
        .replace(/\/:(\w+)/g, (l, a) => (r.push(a), "/([^\\/]+)"));
  return (
    e.endsWith("*")
      ? (r.push("*"),
        (i += e === "*" || e === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$"))
      : n
      ? (i += "\\/*$")
      : e !== "" && e !== "/" && (i += "(?:(?=\\/|$))"),
    [new RegExp(i, t ? void 0 : "i"), r]
  );
}
function s0(e) {
  try {
    return decodeURI(e);
  } catch (t) {
    return (
      Nr(
        !1,
        'The URL path "' +
          e +
          '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' +
          ("encoding (" + t + ").")
      ),
      e
    );
  }
}
function u0(e, t) {
  try {
    return decodeURIComponent(e);
  } catch (n) {
    return (
      Nr(
        !1,
        'The value for the URL param "' +
          t +
          '" will not be decoded because' +
          (' the string "' +
            e +
            '" is a malformed URL segment. This is probably') +
          (" due to a bad percent encoding (" + n + ").")
      ),
      e
    );
  }
}
function Lr(e, t) {
  if (t === "/") return e;
  if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
  let n = t.endsWith("/") ? t.length - 1 : t.length,
    r = e.charAt(n);
  return r && r !== "/" ? null : e.slice(n) || "/";
}
function c0(e, t) {
  t === void 0 && (t = "/");
  let {
    pathname: n,
    search: r = "",
    hash: i = "",
  } = typeof e == "string" ? Gt(e) : e;
  return {
    pathname: n ? (n.startsWith("/") ? n : f0(n, t)) : t,
    search: p0(r),
    hash: h0(i),
  };
}
function f0(e, t) {
  let n = t.replace(/\/+$/, "").split("/");
  return (
    e.split("/").forEach((i) => {
      i === ".." ? n.length > 1 && n.pop() : i !== "." && n.push(i);
    }),
    n.length > 1 ? n.join("/") : "/"
  );
}
function Ma(e, t, n, r) {
  return (
    "Cannot include a '" +
    e +
    "' character in a manually specified " +
    ("`to." +
      t +
      "` field [" +
      JSON.stringify(r) +
      "].  Please separate it out to the ") +
    ("`to." + n + "` field. Alternatively you may provide the full path as ") +
    'a string in <Link to="..."> and the router will parse it for you.'
  );
}
function Hl(e) {
  return e.filter(
    (t, n) => n === 0 || (t.route.path && t.route.path.length > 0)
  );
}
function bu(e, t, n, r) {
  r === void 0 && (r = !1);
  let i;
  typeof e == "string"
    ? (i = Gt(e))
    : ((i = ue({}, e)),
      V(
        !i.pathname || !i.pathname.includes("?"),
        Ma("?", "pathname", "search", i)
      ),
      V(
        !i.pathname || !i.pathname.includes("#"),
        Ma("#", "pathname", "hash", i)
      ),
      V(!i.search || !i.search.includes("#"), Ma("#", "search", "hash", i)));
  let o = e === "" || i.pathname === "",
    l = o ? "/" : i.pathname,
    a;
  if (r || l == null) a = n;
  else {
    let v = t.length - 1;
    if (l.startsWith("..")) {
      let g = l.split("/");
      for (; g[0] === ".."; ) g.shift(), (v -= 1);
      i.pathname = g.join("/");
    }
    a = v >= 0 ? t[v] : "/";
  }
  let s = c0(i, a),
    u = l && l !== "/" && l.endsWith("/"),
    d = (o || l === ".") && n.endsWith("/");
  return !s.pathname.endsWith("/") && (u || d) && (s.pathname += "/"), s;
}
const Vt = (e) => e.join("/").replace(/\/\/+/g, "/"),
  d0 = (e) => e.replace(/\/+$/, "").replace(/^\/*/, "/"),
  p0 = (e) => (!e || e === "?" ? "" : e.startsWith("?") ? e : "?" + e),
  h0 = (e) => (!e || e === "#" ? "" : e.startsWith("#") ? e : "#" + e);
class Wu {
  constructor(t, n, r, i) {
    i === void 0 && (i = !1),
      (this.status = t),
      (this.statusText = n || ""),
      (this.internal = i),
      r instanceof Error
        ? ((this.data = r.toString()), (this.error = r))
        : (this.data = r);
  }
}
function Mh(e) {
  return (
    e != null &&
    typeof e.status == "number" &&
    typeof e.statusText == "string" &&
    typeof e.internal == "boolean" &&
    "data" in e
  );
}
const Lh = ["post", "put", "patch", "delete"],
  m0 = new Set(Lh),
  v0 = ["get", ...Lh],
  y0 = new Set(v0),
  g0 = new Set([301, 302, 303, 307, 308]),
  w0 = new Set([307, 308]),
  La = {
    state: "idle",
    location: void 0,
    formMethod: void 0,
    formAction: void 0,
    formEncType: void 0,
    formData: void 0,
    json: void 0,
    text: void 0,
  },
  S0 = {
    state: "idle",
    data: void 0,
    formMethod: void 0,
    formAction: void 0,
    formEncType: void 0,
    formData: void 0,
    json: void 0,
    text: void 0,
  },
  Kr = { state: "unblocked", proceed: void 0, reset: void 0, location: void 0 },
  Ih = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
  x0 = (e) => ({ hasErrorBoundary: !!e.hasErrorBoundary });
function E0(e) {
  const t = e.window ? e.window : typeof window < "u" ? window : void 0,
    n =
      typeof t < "u" &&
      typeof t.document < "u" &&
      typeof t.document.createElement < "u",
    r = !n;
  V(
    e.routes.length > 0,
    "You must provide a non-empty routes array to createRouter"
  );
  let i;
  if (e.mapRouteProperties) i = e.mapRouteProperties;
  else if (e.detectErrorBoundary) {
    let E = e.detectErrorBoundary;
    i = (_) => ({ hasErrorBoundary: E(_) });
  } else i = x0;
  let o = {},
    l = js(e.routes, i, void 0, o),
    a,
    s = e.basename || "/",
    u = ue({ v7_normalizeFormMethod: !1, v7_prependBasename: !1 }, e.future),
    d = null,
    v = new Set(),
    g = null,
    y = null,
    w = null,
    x = e.hydrationData != null,
    P = fr(l, e.history.location, s),
    m = null;
  if (P == null) {
    let E = lt(404, { pathname: e.history.location.pathname }),
      { matches: _, route: k } = zf(l);
    (P = _), (m = { [k.id]: E });
  }
  let c =
      !P.some((E) => E.route.lazy) &&
      (!P.some((E) => E.route.loader) || e.hydrationData != null),
    p,
    f = {
      historyAction: e.history.action,
      location: e.history.location,
      matches: P,
      initialized: c,
      navigation: La,
      restoreScrollPosition: e.hydrationData != null ? !1 : null,
      preventScrollReset: !1,
      revalidation: "idle",
      loaderData: (e.hydrationData && e.hydrationData.loaderData) || {},
      actionData: (e.hydrationData && e.hydrationData.actionData) || null,
      errors: (e.hydrationData && e.hydrationData.errors) || m,
      fetchers: new Map(),
      blockers: new Map(),
    },
    S = Se.Pop,
    R = !1,
    N,
    T = !1,
    W = !1,
    D = [],
    pe = [],
    J = new Map(),
    ot = 0,
    Zt = -1,
    en = new Map(),
    qe = new Set(),
    _t = new Map(),
    O = new Map(),
    z = new Map(),
    A = !1;
  function ae() {
    return (
      (d = e.history.listen((E) => {
        let { action: _, location: k, delta: M } = E;
        if (A) {
          A = !1;
          return;
        }
        Nr(
          z.size === 0 || M != null,
          "You are trying to use a blocker on a POP navigation to a location that was not created by @remix-run/router. This will fail silently in production. This can happen if you are navigating outside the router via `window.history.pushState`/`window.location.hash` instead of using router navigation APIs.  This can also happen if you are using createHashRouter and the user manually changes the URL."
        );
        let U = uc({
          currentLocation: f.location,
          nextLocation: k,
          historyAction: _,
        });
        if (U && M != null) {
          (A = !0),
            e.history.go(M * -1),
            Ki(U, {
              state: "blocked",
              location: k,
              proceed() {
                Ki(U, {
                  state: "proceeding",
                  proceed: void 0,
                  reset: void 0,
                  location: k,
                }),
                  e.history.go(M);
              },
              reset() {
                let $ = new Map(f.blockers);
                $.set(U, Kr), ne({ blockers: $ });
              },
            });
          return;
        }
        return kn(_, k);
      })),
      f.initialized || kn(Se.Pop, f.location),
      p
    );
  }
  function ge() {
    d && d(),
      v.clear(),
      N && N.abort(),
      f.fetchers.forEach((E, _) => Jl(_)),
      f.blockers.forEach((E, _) => sc(_));
  }
  function Yn(E) {
    return v.add(E), () => v.delete(E);
  }
  function ne(E) {
    (f = ue({}, f, E)), v.forEach((_) => _(f));
  }
  function zt(E, _) {
    var k, M;
    let U =
        f.actionData != null &&
        f.navigation.formMethod != null &&
        St(f.navigation.formMethod) &&
        f.navigation.state === "loading" &&
        ((k = E.state) == null ? void 0 : k._isRedirect) !== !0,
      $;
    _.actionData
      ? Object.keys(_.actionData).length > 0
        ? ($ = _.actionData)
        : ($ = null)
      : U
      ? ($ = f.actionData)
      : ($ = null);
    let b = _.loaderData
        ? Df(f.loaderData, _.loaderData, _.matches || [], _.errors)
        : f.loaderData,
      F = f.blockers;
    F.size > 0 && ((F = new Map(F)), F.forEach((se, Oe) => F.set(Oe, Kr)));
    let I =
      R === !0 ||
      (f.navigation.formMethod != null &&
        St(f.navigation.formMethod) &&
        ((M = E.state) == null ? void 0 : M._isRedirect) !== !0);
    a && ((l = a), (a = void 0)),
      T ||
        S === Se.Pop ||
        (S === Se.Push
          ? e.history.push(E, E.state)
          : S === Se.Replace && e.history.replace(E, E.state)),
      ne(
        ue({}, _, {
          actionData: $,
          loaderData: b,
          historyAction: S,
          location: E,
          initialized: !0,
          navigation: La,
          revalidation: "idle",
          restoreScrollPosition: fc(E, _.matches || f.matches),
          preventScrollReset: I,
          blockers: F,
        })
      ),
      (S = Se.Pop),
      (R = !1),
      (T = !1),
      (W = !1),
      (D = []),
      (pe = []);
  }
  async function Pt(E, _) {
    if (typeof E == "number") {
      e.history.go(E);
      return;
    }
    let k = Os(
        f.location,
        f.matches,
        s,
        u.v7_prependBasename,
        E,
        _ == null ? void 0 : _.fromRouteId,
        _ == null ? void 0 : _.relative
      ),
      {
        path: M,
        submission: U,
        error: $,
      } = Tf(u.v7_normalizeFormMethod, !1, k, _),
      b = f.location,
      F = Oi(f.location, M, _ && _.state);
    F = ue({}, F, e.history.encodeLocation(F));
    let I = _ && _.replace != null ? _.replace : void 0,
      se = Se.Push;
    I === !0
      ? (se = Se.Replace)
      : I === !1 ||
        (U != null &&
          St(U.formMethod) &&
          U.formAction === f.location.pathname + f.location.search &&
          (se = Se.Replace));
    let Oe =
        _ && "preventScrollReset" in _ ? _.preventScrollReset === !0 : void 0,
      q = uc({ currentLocation: b, nextLocation: F, historyAction: se });
    if (q) {
      Ki(q, {
        state: "blocked",
        location: F,
        proceed() {
          Ki(q, {
            state: "proceeding",
            proceed: void 0,
            reset: void 0,
            location: F,
          }),
            Pt(E, _);
        },
        reset() {
          let te = new Map(f.blockers);
          te.set(q, Kr), ne({ blockers: te });
        },
      });
      return;
    }
    return await kn(se, F, {
      submission: U,
      pendingError: $,
      preventScrollReset: Oe,
      replace: _ && _.replace,
    });
  }
  function Xn() {
    if (
      (Gl(),
      ne({ revalidation: "loading" }),
      f.navigation.state !== "submitting")
    ) {
      if (f.navigation.state === "idle") {
        kn(f.historyAction, f.location, { startUninterruptedRevalidation: !0 });
        return;
      }
      kn(S || f.historyAction, f.navigation.location, {
        overrideNavigation: f.navigation,
      });
    }
  }
  async function kn(E, _, k) {
    N && N.abort(),
      (N = null),
      (S = E),
      (T = (k && k.startUninterruptedRevalidation) === !0),
      Cm(f.location, f.matches),
      (R = (k && k.preventScrollReset) === !0);
    let M = a || l,
      U = k && k.overrideNavigation,
      $ = fr(M, _, s);
    if (!$) {
      let te = lt(404, { pathname: _.pathname }),
        { matches: me, route: Nn } = zf(M);
      Zl(), zt(_, { matches: me, loaderData: {}, errors: { [Nn.id]: te } });
      return;
    }
    if (
      f.initialized &&
      !W &&
      k0(f.location, _) &&
      !(k && k.submission && St(k.submission.formMethod))
    ) {
      zt(_, { matches: $ });
      return;
    }
    N = new AbortController();
    let b = qr(e.history, _, N.signal, k && k.submission),
      F,
      I;
    if (k && k.pendingError) I = { [dr($).route.id]: k.pendingError };
    else if (k && k.submission && St(k.submission.formMethod)) {
      let te = await ym(b, _, k.submission, $, { replace: k.replace });
      if (te.shortCircuited) return;
      (F = te.pendingActionData),
        (I = te.pendingActionError),
        (U = Ia(_, k.submission)),
        (b = new Request(b.url, { signal: b.signal }));
    }
    let {
      shortCircuited: se,
      loaderData: Oe,
      errors: q,
    } = await gm(
      b,
      _,
      $,
      U,
      k && k.submission,
      k && k.fetcherSubmission,
      k && k.replace,
      F,
      I
    );
    se ||
      ((N = null),
      zt(
        _,
        ue({ matches: $ }, F ? { actionData: F } : {}, {
          loaderData: Oe,
          errors: q,
        })
      ));
  }
  async function ym(E, _, k, M, U) {
    U === void 0 && (U = {}), Gl();
    let $ = O0(_, k);
    ne({ navigation: $ });
    let b,
      F = Ls(M, _);
    if (!F.route.action && !F.route.lazy)
      b = {
        type: ve.error,
        error: lt(405, {
          method: E.method,
          pathname: _.pathname,
          routeId: F.route.id,
        }),
      };
    else if (((b = await Qr("action", E, F, M, o, i, s)), E.signal.aborted))
      return { shortCircuited: !0 };
    if (wr(b)) {
      let I;
      return (
        U && U.replace != null
          ? (I = U.replace)
          : (I = b.location === f.location.pathname + f.location.search),
        await Dr(f, b, { submission: k, replace: I }),
        { shortCircuited: !0 }
      );
    }
    if (ci(b)) {
      let I = dr(M, F.route.id);
      return (
        (U && U.replace) !== !0 && (S = Se.Push),
        { pendingActionData: {}, pendingActionError: { [I.route.id]: b.error } }
      );
    }
    if (Fn(b)) throw lt(400, { type: "defer-action" });
    return { pendingActionData: { [F.route.id]: b.data } };
  }
  async function gm(E, _, k, M, U, $, b, F, I) {
    let se = M || Ia(_, U),
      Oe = U || $ || Uf(se),
      q = a || l,
      [te, me] = jf(e.history, f, k, Oe, _, W, D, pe, _t, qe, q, s, F, I);
    if (
      (Zl(
        (Z) =>
          !(k && k.some((ht) => ht.route.id === Z)) ||
          (te && te.some((ht) => ht.route.id === Z))
      ),
      (Zt = ++ot),
      te.length === 0 && me.length === 0)
    ) {
      let Z = lc();
      return (
        zt(
          _,
          ue(
            { matches: k, loaderData: {}, errors: I || null },
            F ? { actionData: F } : {},
            Z ? { fetchers: new Map(f.fetchers) } : {}
          )
        ),
        { shortCircuited: !0 }
      );
    }
    if (!T) {
      me.forEach((ht) => {
        let nn = f.fetchers.get(ht.key),
          ia = Yr(void 0, nn ? nn.data : void 0);
        f.fetchers.set(ht.key, ia);
      });
      let Z = F || f.actionData;
      ne(
        ue(
          { navigation: se },
          Z
            ? Object.keys(Z).length === 0
              ? { actionData: null }
              : { actionData: Z }
            : {},
          me.length > 0 ? { fetchers: new Map(f.fetchers) } : {}
        )
      );
    }
    me.forEach((Z) => {
      J.has(Z.key) && tn(Z.key), Z.controller && J.set(Z.key, Z.controller);
    });
    let Nn = () => me.forEach((Z) => tn(Z.key));
    N && N.signal.addEventListener("abort", Nn);
    let {
      results: Tn,
      loaderResults: zr,
      fetcherResults: ea,
    } = await ic(f.matches, k, te, me, E);
    if (E.signal.aborted) return { shortCircuited: !0 };
    N && N.signal.removeEventListener("abort", Nn),
      me.forEach((Z) => J.delete(Z.key));
    let Ft = Ff(Tn);
    if (Ft) {
      if (Ft.idx >= te.length) {
        let Z = me[Ft.idx - te.length].key;
        qe.add(Z);
      }
      return await Dr(f, Ft.result, { replace: b }), { shortCircuited: !0 };
    }
    let { loaderData: $t, errors: Qi } = If(f, k, te, zr, I, me, ea, O);
    O.forEach((Z, ht) => {
      Z.subscribe((nn) => {
        (nn || Z.done) && O.delete(ht);
      });
    });
    let ta = lc(),
      na = ac(Zt),
      ra = ta || na || me.length > 0;
    return ue(
      { loaderData: $t, errors: Qi },
      ra ? { fetchers: new Map(f.fetchers) } : {}
    );
  }
  function rc(E) {
    return f.fetchers.get(E) || S0;
  }
  function wm(E, _, k, M) {
    if (r)
      throw new Error(
        "router.fetch() was called during the server render, but it shouldn't be. You are likely calling a useFetcher() method in the body of your component. Try moving it to a useEffect or a callback."
      );
    J.has(E) && tn(E);
    let U = a || l,
      $ = Os(
        f.location,
        f.matches,
        s,
        u.v7_prependBasename,
        k,
        _,
        M == null ? void 0 : M.relative
      ),
      b = fr(U, $, s);
    if (!b) {
      Vi(E, _, lt(404, { pathname: $ }));
      return;
    }
    let {
      path: F,
      submission: I,
      error: se,
    } = Tf(u.v7_normalizeFormMethod, !0, $, M);
    if (se) {
      Vi(E, _, se);
      return;
    }
    let Oe = Ls(b, F);
    if (((R = (M && M.preventScrollReset) === !0), I && St(I.formMethod))) {
      Sm(E, _, F, Oe, b, I);
      return;
    }
    _t.set(E, { routeId: _, path: F }), xm(E, _, F, Oe, b, I);
  }
  async function Sm(E, _, k, M, U, $) {
    if ((Gl(), _t.delete(E), !M.route.action && !M.route.lazy)) {
      let Ee = lt(405, { method: $.formMethod, pathname: k, routeId: _ });
      Vi(E, _, Ee);
      return;
    }
    let b = f.fetchers.get(E),
      F = M0($, b);
    f.fetchers.set(E, F), ne({ fetchers: new Map(f.fetchers) });
    let I = new AbortController(),
      se = qr(e.history, k, I.signal, $);
    J.set(E, I);
    let Oe = ot,
      q = await Qr("action", se, M, U, o, i, s);
    if (se.signal.aborted) {
      J.get(E) === I && J.delete(E);
      return;
    }
    if (wr(q))
      if ((J.delete(E), Zt > Oe)) {
        let Ee = Jn(void 0);
        f.fetchers.set(E, Ee), ne({ fetchers: new Map(f.fetchers) });
        return;
      } else {
        qe.add(E);
        let Ee = Yr($);
        return (
          f.fetchers.set(E, Ee),
          ne({ fetchers: new Map(f.fetchers) }),
          Dr(f, q, { fetcherSubmission: $ })
        );
      }
    if (ci(q)) {
      Vi(E, _, q.error);
      return;
    }
    if (Fn(q)) throw lt(400, { type: "defer-action" });
    let te = f.navigation.location || f.location,
      me = qr(e.history, te, I.signal),
      Nn = a || l,
      Tn =
        f.navigation.state !== "idle"
          ? fr(Nn, f.navigation.location, s)
          : f.matches;
    V(Tn, "Didn't find any matches after fetcher action");
    let zr = ++ot;
    en.set(E, zr);
    let ea = Yr($, q.data);
    f.fetchers.set(E, ea);
    let [Ft, $t] = jf(
      e.history,
      f,
      Tn,
      $,
      te,
      W,
      D,
      pe,
      _t,
      qe,
      Nn,
      s,
      { [M.route.id]: q.data },
      void 0
    );
    $t
      .filter((Ee) => Ee.key !== E)
      .forEach((Ee) => {
        let Fr = Ee.key,
          dc = f.fetchers.get(Fr),
          Pm = Yr(void 0, dc ? dc.data : void 0);
        f.fetchers.set(Fr, Pm),
          J.has(Fr) && tn(Fr),
          Ee.controller && J.set(Fr, Ee.controller);
      }),
      ne({ fetchers: new Map(f.fetchers) });
    let Qi = () => $t.forEach((Ee) => tn(Ee.key));
    I.signal.addEventListener("abort", Qi);
    let {
      results: ta,
      loaderResults: na,
      fetcherResults: ra,
    } = await ic(f.matches, Tn, Ft, $t, me);
    if (I.signal.aborted) return;
    I.signal.removeEventListener("abort", Qi),
      en.delete(E),
      J.delete(E),
      $t.forEach((Ee) => J.delete(Ee.key));
    let Z = Ff(ta);
    if (Z) {
      if (Z.idx >= Ft.length) {
        let Ee = $t[Z.idx - Ft.length].key;
        qe.add(Ee);
      }
      return Dr(f, Z.result);
    }
    let { loaderData: ht, errors: nn } = If(
      f,
      f.matches,
      Ft,
      na,
      void 0,
      $t,
      ra,
      O
    );
    if (f.fetchers.has(E)) {
      let Ee = Jn(q.data);
      f.fetchers.set(E, Ee);
    }
    let ia = ac(zr);
    f.navigation.state === "loading" && zr > Zt
      ? (V(S, "Expected pending action"),
        N && N.abort(),
        zt(f.navigation.location, {
          matches: Tn,
          loaderData: ht,
          errors: nn,
          fetchers: new Map(f.fetchers),
        }))
      : (ne(
          ue(
            { errors: nn, loaderData: Df(f.loaderData, ht, Tn, nn) },
            ia || $t.length > 0 ? { fetchers: new Map(f.fetchers) } : {}
          )
        ),
        (W = !1));
  }
  async function xm(E, _, k, M, U, $) {
    let b = f.fetchers.get(E),
      F = Yr($, b ? b.data : void 0);
    f.fetchers.set(E, F), ne({ fetchers: new Map(f.fetchers) });
    let I = new AbortController(),
      se = qr(e.history, k, I.signal);
    J.set(E, I);
    let Oe = ot,
      q = await Qr("loader", se, M, U, o, i, s);
    if (
      (Fn(q) && (q = (await Fh(q, se.signal, !0)) || q),
      J.get(E) === I && J.delete(E),
      se.signal.aborted)
    )
      return;
    if (wr(q))
      if (Zt > Oe) {
        let me = Jn(void 0);
        f.fetchers.set(E, me), ne({ fetchers: new Map(f.fetchers) });
        return;
      } else {
        qe.add(E), await Dr(f, q);
        return;
      }
    if (ci(q)) {
      let me = dr(f.matches, _);
      f.fetchers.delete(E),
        ne({
          fetchers: new Map(f.fetchers),
          errors: { [me.route.id]: q.error },
        });
      return;
    }
    V(!Fn(q), "Unhandled fetcher deferred data");
    let te = Jn(q.data);
    f.fetchers.set(E, te), ne({ fetchers: new Map(f.fetchers) });
  }
  async function Dr(E, _, k) {
    let {
      submission: M,
      fetcherSubmission: U,
      replace: $,
    } = k === void 0 ? {} : k;
    _.revalidate && (W = !0);
    let b = Oi(E.location, _.location, { _isRedirect: !0 });
    if ((V(b, "Expected a location on the redirect navigation"), n)) {
      let te = !1;
      if (_.reloadDocument) te = !0;
      else if (Ih.test(_.location)) {
        const me = e.history.createURL(_.location);
        te = me.origin !== t.location.origin || Lr(me.pathname, s) == null;
      }
      if (te) {
        $ ? t.location.replace(_.location) : t.location.assign(_.location);
        return;
      }
    }
    N = null;
    let F = $ === !0 ? Se.Replace : Se.Push,
      { formMethod: I, formAction: se, formEncType: Oe } = E.navigation;
    !M && !U && I && se && Oe && (M = Uf(E.navigation));
    let q = M || U;
    if (w0.has(_.status) && q && St(q.formMethod))
      await kn(F, b, {
        submission: ue({}, q, { formAction: _.location }),
        preventScrollReset: R,
      });
    else {
      let te = Ia(b, M);
      await kn(F, b, {
        overrideNavigation: te,
        fetcherSubmission: U,
        preventScrollReset: R,
      });
    }
  }
  async function ic(E, _, k, M, U) {
    let $ = await Promise.all([
        ...k.map((I) => Qr("loader", U, I, _, o, i, s)),
        ...M.map((I) =>
          I.matches && I.match && I.controller
            ? Qr(
                "loader",
                qr(e.history, I.path, I.controller.signal),
                I.match,
                I.matches,
                o,
                i,
                s
              )
            : { type: ve.error, error: lt(404, { pathname: I.path }) }
        ),
      ]),
      b = $.slice(0, k.length),
      F = $.slice(k.length);
    return (
      await Promise.all([
        $f(
          E,
          k,
          b,
          b.map(() => U.signal),
          !1,
          f.loaderData
        ),
        $f(
          E,
          M.map((I) => I.match),
          F,
          M.map((I) => (I.controller ? I.controller.signal : null)),
          !0
        ),
      ]),
      { results: $, loaderResults: b, fetcherResults: F }
    );
  }
  function Gl() {
    (W = !0),
      D.push(...Zl()),
      _t.forEach((E, _) => {
        J.has(_) && (pe.push(_), tn(_));
      });
  }
  function Vi(E, _, k) {
    let M = dr(f.matches, _);
    Jl(E), ne({ errors: { [M.route.id]: k }, fetchers: new Map(f.fetchers) });
  }
  function Jl(E) {
    let _ = f.fetchers.get(E);
    J.has(E) && !(_ && _.state === "loading" && en.has(E)) && tn(E),
      _t.delete(E),
      en.delete(E),
      qe.delete(E),
      f.fetchers.delete(E);
  }
  function tn(E) {
    let _ = J.get(E);
    V(_, "Expected fetch controller: " + E), _.abort(), J.delete(E);
  }
  function oc(E) {
    for (let _ of E) {
      let k = rc(_),
        M = Jn(k.data);
      f.fetchers.set(_, M);
    }
  }
  function lc() {
    let E = [],
      _ = !1;
    for (let k of qe) {
      let M = f.fetchers.get(k);
      V(M, "Expected fetcher: " + k),
        M.state === "loading" && (qe.delete(k), E.push(k), (_ = !0));
    }
    return oc(E), _;
  }
  function ac(E) {
    let _ = [];
    for (let [k, M] of en)
      if (M < E) {
        let U = f.fetchers.get(k);
        V(U, "Expected fetcher: " + k),
          U.state === "loading" && (tn(k), en.delete(k), _.push(k));
      }
    return oc(_), _.length > 0;
  }
  function Em(E, _) {
    let k = f.blockers.get(E) || Kr;
    return z.get(E) !== _ && z.set(E, _), k;
  }
  function sc(E) {
    f.blockers.delete(E), z.delete(E);
  }
  function Ki(E, _) {
    let k = f.blockers.get(E) || Kr;
    V(
      (k.state === "unblocked" && _.state === "blocked") ||
        (k.state === "blocked" && _.state === "blocked") ||
        (k.state === "blocked" && _.state === "proceeding") ||
        (k.state === "blocked" && _.state === "unblocked") ||
        (k.state === "proceeding" && _.state === "unblocked"),
      "Invalid blocker state transition: " + k.state + " -> " + _.state
    );
    let M = new Map(f.blockers);
    M.set(E, _), ne({ blockers: M });
  }
  function uc(E) {
    let { currentLocation: _, nextLocation: k, historyAction: M } = E;
    if (z.size === 0) return;
    z.size > 1 && Nr(!1, "A router only supports one blocker at a time");
    let U = Array.from(z.entries()),
      [$, b] = U[U.length - 1],
      F = f.blockers.get($);
    if (
      !(F && F.state === "proceeding") &&
      b({ currentLocation: _, nextLocation: k, historyAction: M })
    )
      return $;
  }
  function Zl(E) {
    let _ = [];
    return (
      O.forEach((k, M) => {
        (!E || E(M)) && (k.cancel(), _.push(M), O.delete(M));
      }),
      _
    );
  }
  function Rm(E, _, k) {
    if (((g = E), (w = _), (y = k || null), !x && f.navigation === La)) {
      x = !0;
      let M = fc(f.location, f.matches);
      M != null && ne({ restoreScrollPosition: M });
    }
    return () => {
      (g = null), (w = null), (y = null);
    };
  }
  function cc(E, _) {
    return (
      (y &&
        y(
          E,
          _.map((M) => Yg(M, f.loaderData))
        )) ||
      E.key
    );
  }
  function Cm(E, _) {
    if (g && w) {
      let k = cc(E, _);
      g[k] = w();
    }
  }
  function fc(E, _) {
    if (g) {
      let k = cc(E, _),
        M = g[k];
      if (typeof M == "number") return M;
    }
    return null;
  }
  function _m(E) {
    (o = {}), (a = js(E, i, void 0, o));
  }
  return (
    (p = {
      get basename() {
        return s;
      },
      get state() {
        return f;
      },
      get routes() {
        return l;
      },
      initialize: ae,
      subscribe: Yn,
      enableScrollRestoration: Rm,
      navigate: Pt,
      fetch: wm,
      revalidate: Xn,
      createHref: (E) => e.history.createHref(E),
      encodeLocation: (E) => e.history.encodeLocation(E),
      getFetcher: rc,
      deleteFetcher: Jl,
      dispose: ge,
      getBlocker: Em,
      deleteBlocker: sc,
      _internalFetchControllers: J,
      _internalActiveDeferreds: O,
      _internalSetRoutes: _m,
    }),
    p
  );
}
function R0(e) {
  return (
    e != null &&
    (("formData" in e && e.formData != null) ||
      ("body" in e && e.body !== void 0))
  );
}
function Os(e, t, n, r, i, o, l) {
  let a, s;
  if (o != null && l !== "path") {
    a = [];
    for (let d of t)
      if ((a.push(d), d.route.id === o)) {
        s = d;
        break;
      }
  } else (a = t), (s = t[t.length - 1]);
  let u = bu(
    i || ".",
    Hl(a).map((d) => d.pathnameBase),
    Lr(e.pathname, n) || e.pathname,
    l === "path"
  );
  return (
    i == null && ((u.search = e.search), (u.hash = e.hash)),
    (i == null || i === "" || i === ".") &&
      s &&
      s.route.index &&
      !Hu(u.search) &&
      (u.search = u.search ? u.search.replace(/^\?/, "?index&") : "?index"),
    r &&
      n !== "/" &&
      (u.pathname = u.pathname === "/" ? n : Vt([n, u.pathname])),
    Vn(u)
  );
}
function Tf(e, t, n, r) {
  if (!r || !R0(r)) return { path: n };
  if (r.formMethod && !j0(r.formMethod))
    return { path: n, error: lt(405, { method: r.formMethod }) };
  let i = () => ({ path: n, error: lt(400, { type: "invalid-body" }) }),
    o = r.formMethod || "get",
    l = e ? o.toUpperCase() : o.toLowerCase(),
    a = zh(n);
  if (r.body !== void 0) {
    if (r.formEncType === "text/plain") {
      if (!St(l)) return i();
      let g =
        typeof r.body == "string"
          ? r.body
          : r.body instanceof FormData || r.body instanceof URLSearchParams
          ? Array.from(r.body.entries()).reduce((y, w) => {
              let [x, P] = w;
              return (
                "" +
                y +
                x +
                "=" +
                P +
                `
`
              );
            }, "")
          : String(r.body);
      return {
        path: n,
        submission: {
          formMethod: l,
          formAction: a,
          formEncType: r.formEncType,
          formData: void 0,
          json: void 0,
          text: g,
        },
      };
    } else if (r.formEncType === "application/json") {
      if (!St(l)) return i();
      try {
        let g = typeof r.body == "string" ? JSON.parse(r.body) : r.body;
        return {
          path: n,
          submission: {
            formMethod: l,
            formAction: a,
            formEncType: r.formEncType,
            formData: void 0,
            json: g,
            text: void 0,
          },
        };
      } catch {
        return i();
      }
    }
  }
  V(
    typeof FormData == "function",
    "FormData is not available in this environment"
  );
  let s, u;
  if (r.formData) (s = Ms(r.formData)), (u = r.formData);
  else if (r.body instanceof FormData) (s = Ms(r.body)), (u = r.body);
  else if (r.body instanceof URLSearchParams) (s = r.body), (u = Lf(s));
  else if (r.body == null) (s = new URLSearchParams()), (u = new FormData());
  else
    try {
      (s = new URLSearchParams(r.body)), (u = Lf(s));
    } catch {
      return i();
    }
  let d = {
    formMethod: l,
    formAction: a,
    formEncType: (r && r.formEncType) || "application/x-www-form-urlencoded",
    formData: u,
    json: void 0,
    text: void 0,
  };
  if (St(d.formMethod)) return { path: n, submission: d };
  let v = Gt(n);
  return (
    t && v.search && Hu(v.search) && s.append("index", ""),
    (v.search = "?" + s),
    { path: Vn(v), submission: d }
  );
}
function C0(e, t) {
  let n = e;
  if (t) {
    let r = e.findIndex((i) => i.route.id === t);
    r >= 0 && (n = e.slice(0, r));
  }
  return n;
}
function jf(e, t, n, r, i, o, l, a, s, u, d, v, g, y) {
  let w = y ? Object.values(y)[0] : g ? Object.values(g)[0] : void 0,
    x = e.createURL(t.location),
    P = e.createURL(i),
    m = y ? Object.keys(y)[0] : void 0,
    p = C0(n, m).filter((S, R) => {
      if (S.route.lazy) return !0;
      if (S.route.loader == null) return !1;
      if (_0(t.loaderData, t.matches[R], S) || l.some((W) => W === S.route.id))
        return !0;
      let N = t.matches[R],
        T = S;
      return Of(
        S,
        ue(
          {
            currentUrl: x,
            currentParams: N.params,
            nextUrl: P,
            nextParams: T.params,
          },
          r,
          {
            actionResult: w,
            defaultShouldRevalidate:
              o ||
              x.pathname + x.search === P.pathname + P.search ||
              x.search !== P.search ||
              Dh(N, T),
          }
        )
      );
    }),
    f = [];
  return (
    s.forEach((S, R) => {
      if (!n.some((pe) => pe.route.id === S.routeId)) return;
      let N = fr(d, S.path, v);
      if (!N) {
        f.push({
          key: R,
          routeId: S.routeId,
          path: S.path,
          matches: null,
          match: null,
          controller: null,
        });
        return;
      }
      let T = t.fetchers.get(R),
        W = Ls(N, S.path),
        D = !1;
      u.has(R)
        ? (D = !1)
        : a.includes(R)
        ? (D = !0)
        : T && T.state !== "idle" && T.data === void 0
        ? (D = o)
        : (D = Of(
            W,
            ue(
              {
                currentUrl: x,
                currentParams: t.matches[t.matches.length - 1].params,
                nextUrl: P,
                nextParams: n[n.length - 1].params,
              },
              r,
              { actionResult: w, defaultShouldRevalidate: o }
            )
          )),
        D &&
          f.push({
            key: R,
            routeId: S.routeId,
            path: S.path,
            matches: N,
            match: W,
            controller: new AbortController(),
          });
    }),
    [p, f]
  );
}
function _0(e, t, n) {
  let r = !t || n.route.id !== t.route.id,
    i = e[n.route.id] === void 0;
  return r || i;
}
function Dh(e, t) {
  let n = e.route.path;
  return (
    e.pathname !== t.pathname ||
    (n != null && n.endsWith("*") && e.params["*"] !== t.params["*"])
  );
}
function Of(e, t) {
  if (e.route.shouldRevalidate) {
    let n = e.route.shouldRevalidate(t);
    if (typeof n == "boolean") return n;
  }
  return t.defaultShouldRevalidate;
}
async function Mf(e, t, n) {
  if (!e.lazy) return;
  let r = await e.lazy();
  if (!e.lazy) return;
  let i = n[e.id];
  V(i, "No route found in manifest");
  let o = {};
  for (let l in r) {
    let s = i[l] !== void 0 && l !== "hasErrorBoundary";
    Nr(
      !s,
      'Route "' +
        i.id +
        '" has a static property "' +
        l +
        '" defined but its lazy function is also returning a value for this property. ' +
        ('The lazy route property "' + l + '" will be ignored.')
    ),
      !s && !Qg.has(l) && (o[l] = r[l]);
  }
  Object.assign(i, o), Object.assign(i, ue({}, t(i), { lazy: void 0 }));
}
async function Qr(e, t, n, r, i, o, l, a) {
  a === void 0 && (a = {});
  let s,
    u,
    d,
    v = (w) => {
      let x,
        P = new Promise((m, c) => (x = c));
      return (
        (d = () => x()),
        t.signal.addEventListener("abort", d),
        Promise.race([
          w({ request: t, params: n.params, context: a.requestContext }),
          P,
        ])
      );
    };
  try {
    let w = n.route[e];
    if (n.route.lazy)
      if (w) {
        let x,
          P = await Promise.all([
            v(w).catch((m) => {
              x = m;
            }),
            Mf(n.route, o, i),
          ]);
        if (x) throw x;
        u = P[0];
      } else if ((await Mf(n.route, o, i), (w = n.route[e]), w)) u = await v(w);
      else if (e === "action") {
        let x = new URL(t.url),
          P = x.pathname + x.search;
        throw lt(405, { method: t.method, pathname: P, routeId: n.route.id });
      } else return { type: ve.data, data: void 0 };
    else if (w) u = await v(w);
    else {
      let x = new URL(t.url),
        P = x.pathname + x.search;
      throw lt(404, { pathname: P });
    }
    V(
      u !== void 0,
      "You defined " +
        (e === "action" ? "an action" : "a loader") +
        " for route " +
        ('"' +
          n.route.id +
          "\" but didn't return anything from your `" +
          e +
          "` ") +
        "function. Please return a value or `null`."
    );
  } catch (w) {
    (s = ve.error), (u = w);
  } finally {
    d && t.signal.removeEventListener("abort", d);
  }
  if (T0(u)) {
    let w = u.status;
    if (g0.has(w)) {
      let m = u.headers.get("Location");
      if (
        (V(
          m,
          "Redirects returned/thrown from loaders/actions must have a Location header"
        ),
        !Ih.test(m))
      )
        m = Os(new URL(t.url), r.slice(0, r.indexOf(n) + 1), l, !0, m);
      else if (!a.isStaticRequest) {
        let c = new URL(t.url),
          p = m.startsWith("//") ? new URL(c.protocol + m) : new URL(m),
          f = Lr(p.pathname, l) != null;
        p.origin === c.origin && f && (m = p.pathname + p.search + p.hash);
      }
      if (a.isStaticRequest) throw (u.headers.set("Location", m), u);
      return {
        type: ve.redirect,
        status: w,
        location: m,
        revalidate: u.headers.get("X-Remix-Revalidate") !== null,
        reloadDocument: u.headers.get("X-Remix-Reload-Document") !== null,
      };
    }
    if (a.isRouteRequest)
      throw { type: s === ve.error ? ve.error : ve.data, response: u };
    let x,
      P = u.headers.get("Content-Type");
    return (
      P && /\bapplication\/json\b/.test(P)
        ? (x = await u.json())
        : (x = await u.text()),
      s === ve.error
        ? { type: s, error: new Wu(w, u.statusText, x), headers: u.headers }
        : { type: ve.data, data: x, statusCode: u.status, headers: u.headers }
    );
  }
  if (s === ve.error) return { type: s, error: u };
  if (N0(u)) {
    var g, y;
    return {
      type: ve.deferred,
      deferredData: u,
      statusCode: (g = u.init) == null ? void 0 : g.status,
      headers:
        ((y = u.init) == null ? void 0 : y.headers) &&
        new Headers(u.init.headers),
    };
  }
  return { type: ve.data, data: u };
}
function qr(e, t, n, r) {
  let i = e.createURL(zh(t)).toString(),
    o = { signal: n };
  if (r && St(r.formMethod)) {
    let { formMethod: l, formEncType: a } = r;
    (o.method = l.toUpperCase()),
      a === "application/json"
        ? ((o.headers = new Headers({ "Content-Type": a })),
          (o.body = JSON.stringify(r.json)))
        : a === "text/plain"
        ? (o.body = r.text)
        : a === "application/x-www-form-urlencoded" && r.formData
        ? (o.body = Ms(r.formData))
        : (o.body = r.formData);
  }
  return new Request(i, o);
}
function Ms(e) {
  let t = new URLSearchParams();
  for (let [n, r] of e.entries())
    t.append(n, typeof r == "string" ? r : r.name);
  return t;
}
function Lf(e) {
  let t = new FormData();
  for (let [n, r] of e.entries()) t.append(n, r);
  return t;
}
function P0(e, t, n, r, i) {
  let o = {},
    l = null,
    a,
    s = !1,
    u = {};
  return (
    n.forEach((d, v) => {
      let g = t[v].route.id;
      if (
        (V(!wr(d), "Cannot handle redirect results in processLoaderData"),
        ci(d))
      ) {
        let y = dr(e, g),
          w = d.error;
        r && ((w = Object.values(r)[0]), (r = void 0)),
          (l = l || {}),
          l[y.route.id] == null && (l[y.route.id] = w),
          (o[g] = void 0),
          s || ((s = !0), (a = Mh(d.error) ? d.error.status : 500)),
          d.headers && (u[g] = d.headers);
      } else
        Fn(d)
          ? (i.set(g, d.deferredData), (o[g] = d.deferredData.data))
          : (o[g] = d.data),
          d.statusCode != null &&
            d.statusCode !== 200 &&
            !s &&
            (a = d.statusCode),
          d.headers && (u[g] = d.headers);
    }),
    r && ((l = r), (o[Object.keys(r)[0]] = void 0)),
    { loaderData: o, errors: l, statusCode: a || 200, loaderHeaders: u }
  );
}
function If(e, t, n, r, i, o, l, a) {
  let { loaderData: s, errors: u } = P0(t, n, r, i, a);
  for (let d = 0; d < o.length; d++) {
    let { key: v, match: g, controller: y } = o[d];
    V(
      l !== void 0 && l[d] !== void 0,
      "Did not find corresponding fetcher result"
    );
    let w = l[d];
    if (!(y && y.signal.aborted))
      if (ci(w)) {
        let x = dr(e.matches, g == null ? void 0 : g.route.id);
        (u && u[x.route.id]) || (u = ue({}, u, { [x.route.id]: w.error })),
          e.fetchers.delete(v);
      } else if (wr(w)) V(!1, "Unhandled fetcher revalidation redirect");
      else if (Fn(w)) V(!1, "Unhandled fetcher deferred data");
      else {
        let x = Jn(w.data);
        e.fetchers.set(v, x);
      }
  }
  return { loaderData: s, errors: u };
}
function Df(e, t, n, r) {
  let i = ue({}, t);
  for (let o of n) {
    let l = o.route.id;
    if (
      (t.hasOwnProperty(l)
        ? t[l] !== void 0 && (i[l] = t[l])
        : e[l] !== void 0 && o.route.loader && (i[l] = e[l]),
      r && r.hasOwnProperty(l))
    )
      break;
  }
  return i;
}
function dr(e, t) {
  return (
    (t ? e.slice(0, e.findIndex((r) => r.route.id === t) + 1) : [...e])
      .reverse()
      .find((r) => r.route.hasErrorBoundary === !0) || e[0]
  );
}
function zf(e) {
  let t = e.find((n) => n.index || !n.path || n.path === "/") || {
    id: "__shim-error-route__",
  };
  return {
    matches: [{ params: {}, pathname: "", pathnameBase: "", route: t }],
    route: t,
  };
}
function lt(e, t) {
  let { pathname: n, routeId: r, method: i, type: o } = t === void 0 ? {} : t,
    l = "Unknown Server Error",
    a = "Unknown @remix-run/router error";
  return (
    e === 400
      ? ((l = "Bad Request"),
        i && n && r
          ? (a =
              "You made a " +
              i +
              ' request to "' +
              n +
              '" but ' +
              ('did not provide a `loader` for route "' + r + '", ') +
              "so there is no way to handle the request.")
          : o === "defer-action"
          ? (a = "defer() is not supported in actions")
          : o === "invalid-body" && (a = "Unable to encode submission body"))
      : e === 403
      ? ((l = "Forbidden"),
        (a = 'Route "' + r + '" does not match URL "' + n + '"'))
      : e === 404
      ? ((l = "Not Found"), (a = 'No route matches URL "' + n + '"'))
      : e === 405 &&
        ((l = "Method Not Allowed"),
        i && n && r
          ? (a =
              "You made a " +
              i.toUpperCase() +
              ' request to "' +
              n +
              '" but ' +
              ('did not provide an `action` for route "' + r + '", ') +
              "so there is no way to handle the request.")
          : i && (a = 'Invalid request method "' + i.toUpperCase() + '"')),
    new Wu(e || 500, l, new Error(a), !0)
  );
}
function Ff(e) {
  for (let t = e.length - 1; t >= 0; t--) {
    let n = e[t];
    if (wr(n)) return { result: n, idx: t };
  }
}
function zh(e) {
  let t = typeof e == "string" ? Gt(e) : e;
  return Vn(ue({}, t, { hash: "" }));
}
function k0(e, t) {
  return e.pathname !== t.pathname || e.search !== t.search
    ? !1
    : e.hash === ""
    ? t.hash !== ""
    : e.hash === t.hash
    ? !0
    : t.hash !== "";
}
function Fn(e) {
  return e.type === ve.deferred;
}
function ci(e) {
  return e.type === ve.error;
}
function wr(e) {
  return (e && e.type) === ve.redirect;
}
function N0(e) {
  let t = e;
  return (
    t &&
    typeof t == "object" &&
    typeof t.data == "object" &&
    typeof t.subscribe == "function" &&
    typeof t.cancel == "function" &&
    typeof t.resolveData == "function"
  );
}
function T0(e) {
  return (
    e != null &&
    typeof e.status == "number" &&
    typeof e.statusText == "string" &&
    typeof e.headers == "object" &&
    typeof e.body < "u"
  );
}
function j0(e) {
  return y0.has(e.toLowerCase());
}
function St(e) {
  return m0.has(e.toLowerCase());
}
async function $f(e, t, n, r, i, o) {
  for (let l = 0; l < n.length; l++) {
    let a = n[l],
      s = t[l];
    if (!s) continue;
    let u = e.find((v) => v.route.id === s.route.id),
      d = u != null && !Dh(u, s) && (o && o[s.route.id]) !== void 0;
    if (Fn(a) && (i || d)) {
      let v = r[l];
      V(v, "Expected an AbortSignal for revalidating fetcher deferred result"),
        await Fh(a, v, i).then((g) => {
          g && (n[l] = g || n[l]);
        });
    }
  }
}
async function Fh(e, t, n) {
  if ((n === void 0 && (n = !1), !(await e.deferredData.resolveData(t)))) {
    if (n)
      try {
        return { type: ve.data, data: e.deferredData.unwrappedData };
      } catch (i) {
        return { type: ve.error, error: i };
      }
    return { type: ve.data, data: e.deferredData.data };
  }
}
function Hu(e) {
  return new URLSearchParams(e).getAll("index").some((t) => t === "");
}
function Ls(e, t) {
  let n = typeof t == "string" ? Gt(t).search : t.search;
  if (e[e.length - 1].route.index && Hu(n || "")) return e[e.length - 1];
  let r = Hl(e);
  return r[r.length - 1];
}
function Uf(e) {
  let {
    formMethod: t,
    formAction: n,
    formEncType: r,
    text: i,
    formData: o,
    json: l,
  } = e;
  if (!(!t || !n || !r)) {
    if (i != null)
      return {
        formMethod: t,
        formAction: n,
        formEncType: r,
        formData: void 0,
        json: void 0,
        text: i,
      };
    if (o != null)
      return {
        formMethod: t,
        formAction: n,
        formEncType: r,
        formData: o,
        json: void 0,
        text: void 0,
      };
    if (l !== void 0)
      return {
        formMethod: t,
        formAction: n,
        formEncType: r,
        formData: void 0,
        json: l,
        text: void 0,
      };
  }
}
function Ia(e, t) {
  return t
    ? {
        state: "loading",
        location: e,
        formMethod: t.formMethod,
        formAction: t.formAction,
        formEncType: t.formEncType,
        formData: t.formData,
        json: t.json,
        text: t.text,
      }
    : {
        state: "loading",
        location: e,
        formMethod: void 0,
        formAction: void 0,
        formEncType: void 0,
        formData: void 0,
        json: void 0,
        text: void 0,
      };
}
function O0(e, t) {
  return {
    state: "submitting",
    location: e,
    formMethod: t.formMethod,
    formAction: t.formAction,
    formEncType: t.formEncType,
    formData: t.formData,
    json: t.json,
    text: t.text,
  };
}
function Yr(e, t) {
  return e
    ? {
        state: "loading",
        formMethod: e.formMethod,
        formAction: e.formAction,
        formEncType: e.formEncType,
        formData: e.formData,
        json: e.json,
        text: e.text,
        data: t,
      }
    : {
        state: "loading",
        formMethod: void 0,
        formAction: void 0,
        formEncType: void 0,
        formData: void 0,
        json: void 0,
        text: void 0,
        data: t,
      };
}
function M0(e, t) {
  return {
    state: "submitting",
    formMethod: e.formMethod,
    formAction: e.formAction,
    formEncType: e.formEncType,
    formData: e.formData,
    json: e.json,
    text: e.text,
    data: t ? t.data : void 0,
  };
}
function Jn(e) {
  return {
    state: "idle",
    formMethod: void 0,
    formAction: void 0,
    formEncType: void 0,
    formData: void 0,
    json: void 0,
    text: void 0,
    data: e,
  };
}
/**
 * React Router v6.16.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function Zo() {
  return (
    (Zo = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    Zo.apply(this, arguments)
  );
}
const Bl = C.createContext(null),
  Bu = C.createContext(null),
  qn = C.createContext(null),
  Vl = C.createContext(null),
  Jt = C.createContext({ outlet: null, matches: [], isDataRoute: !1 }),
  $h = C.createContext(null);
function L0(e, t) {
  let { relative: n } = t === void 0 ? {} : t;
  $i() || V(!1);
  let { basename: r, navigator: i } = C.useContext(qn),
    { hash: o, pathname: l, search: a } = Vu(e, { relative: n }),
    s = l;
  return (
    r !== "/" && (s = l === "/" ? r : Vt([r, l])),
    i.createHref({ pathname: s, search: a, hash: o })
  );
}
function $i() {
  return C.useContext(Vl) != null;
}
function Ui() {
  return $i() || V(!1), C.useContext(Vl).location;
}
function Uh(e) {
  C.useContext(qn).static || C.useLayoutEffect(e);
}
function Kl() {
  let { isDataRoute: e } = C.useContext(Jt);
  return e ? Q0() : I0();
}
function I0() {
  $i() || V(!1);
  let e = C.useContext(Bl),
    { basename: t, navigator: n } = C.useContext(qn),
    { matches: r } = C.useContext(Jt),
    { pathname: i } = Ui(),
    o = JSON.stringify(Hl(r).map((s) => s.pathnameBase)),
    l = C.useRef(!1);
  return (
    Uh(() => {
      l.current = !0;
    }),
    C.useCallback(
      function (s, u) {
        if ((u === void 0 && (u = {}), !l.current)) return;
        if (typeof s == "number") {
          n.go(s);
          return;
        }
        let d = bu(s, JSON.parse(o), i, u.relative === "path");
        e == null &&
          t !== "/" &&
          (d.pathname = d.pathname === "/" ? t : Vt([t, d.pathname])),
          (u.replace ? n.replace : n.push)(d, u.state, u);
      },
      [t, n, o, i, e]
    )
  );
}
const D0 = C.createContext(null);
function z0(e) {
  let t = C.useContext(Jt).outlet;
  return t && C.createElement(D0.Provider, { value: e }, t);
}
function Ah() {
  let { matches: e } = C.useContext(Jt),
    t = e[e.length - 1];
  return t ? t.params : {};
}
function Vu(e, t) {
  let { relative: n } = t === void 0 ? {} : t,
    { matches: r } = C.useContext(Jt),
    { pathname: i } = Ui(),
    o = JSON.stringify(Hl(r).map((l) => l.pathnameBase));
  return C.useMemo(() => bu(e, JSON.parse(o), i, n === "path"), [e, o, i, n]);
}
function F0(e, t, n) {
  $i() || V(!1);
  let { navigator: r } = C.useContext(qn),
    { matches: i } = C.useContext(Jt),
    o = i[i.length - 1],
    l = o ? o.params : {};
  o && o.pathname;
  let a = o ? o.pathnameBase : "/";
  o && o.route;
  let s = Ui(),
    u;
  if (t) {
    var d;
    let x = typeof t == "string" ? Gt(t) : t;
    a === "/" || ((d = x.pathname) != null && d.startsWith(a)) || V(!1),
      (u = x);
  } else u = s;
  let v = u.pathname || "/",
    g = a === "/" ? v : v.slice(a.length) || "/",
    y = fr(e, { pathname: g }),
    w = W0(
      y &&
        y.map((x) =>
          Object.assign({}, x, {
            params: Object.assign({}, l, x.params),
            pathname: Vt([
              a,
              r.encodeLocation
                ? r.encodeLocation(x.pathname).pathname
                : x.pathname,
            ]),
            pathnameBase:
              x.pathnameBase === "/"
                ? a
                : Vt([
                    a,
                    r.encodeLocation
                      ? r.encodeLocation(x.pathnameBase).pathname
                      : x.pathnameBase,
                  ]),
          })
        ),
      i,
      n
    );
  return t && w
    ? C.createElement(
        Vl.Provider,
        {
          value: {
            location: Zo(
              {
                pathname: "/",
                search: "",
                hash: "",
                state: null,
                key: "default",
              },
              u
            ),
            navigationType: Se.Pop,
          },
        },
        w
      )
    : w;
}
function $0() {
  let e = K0(),
    t = Mh(e)
      ? e.status + " " + e.statusText
      : e instanceof Error
      ? e.message
      : JSON.stringify(e),
    n = e instanceof Error ? e.stack : null,
    i = { padding: "0.5rem", backgroundColor: "rgba(200,200,200, 0.5)" },
    o = null;
  return C.createElement(
    C.Fragment,
    null,
    C.createElement("h2", null, "Unexpected Application Error!"),
    C.createElement("h3", { style: { fontStyle: "italic" } }, t),
    n ? C.createElement("pre", { style: i }, n) : null,
    o
  );
}
const U0 = C.createElement($0, null);
class A0 extends C.Component {
  constructor(t) {
    super(t),
      (this.state = {
        location: t.location,
        revalidation: t.revalidation,
        error: t.error,
      });
  }
  static getDerivedStateFromError(t) {
    return { error: t };
  }
  static getDerivedStateFromProps(t, n) {
    return n.location !== t.location ||
      (n.revalidation !== "idle" && t.revalidation === "idle")
      ? { error: t.error, location: t.location, revalidation: t.revalidation }
      : {
          error: t.error || n.error,
          location: n.location,
          revalidation: t.revalidation || n.revalidation,
        };
  }
  componentDidCatch(t, n) {
    console.error(
      "React Router caught the following error during render",
      t,
      n
    );
  }
  render() {
    return this.state.error
      ? C.createElement(
          Jt.Provider,
          { value: this.props.routeContext },
          C.createElement($h.Provider, {
            value: this.state.error,
            children: this.props.component,
          })
        )
      : this.props.children;
  }
}
function b0(e) {
  let { routeContext: t, match: n, children: r } = e,
    i = C.useContext(Bl);
  return (
    i &&
      i.static &&
      i.staticContext &&
      (n.route.errorElement || n.route.ErrorBoundary) &&
      (i.staticContext._deepestRenderedBoundaryId = n.route.id),
    C.createElement(Jt.Provider, { value: t }, r)
  );
}
function W0(e, t, n) {
  var r;
  if ((t === void 0 && (t = []), n === void 0 && (n = null), e == null)) {
    var i;
    if ((i = n) != null && i.errors) e = n.matches;
    else return null;
  }
  let o = e,
    l = (r = n) == null ? void 0 : r.errors;
  if (l != null) {
    let a = o.findIndex(
      (s) => s.route.id && (l == null ? void 0 : l[s.route.id])
    );
    a >= 0 || V(!1), (o = o.slice(0, Math.min(o.length, a + 1)));
  }
  return o.reduceRight((a, s, u) => {
    let d = s.route.id ? (l == null ? void 0 : l[s.route.id]) : null,
      v = null;
    n && (v = s.route.errorElement || U0);
    let g = t.concat(o.slice(0, u + 1)),
      y = () => {
        let w;
        return (
          d
            ? (w = v)
            : s.route.Component
            ? (w = C.createElement(s.route.Component, null))
            : s.route.element
            ? (w = s.route.element)
            : (w = a),
          C.createElement(b0, {
            match: s,
            routeContext: { outlet: a, matches: g, isDataRoute: n != null },
            children: w,
          })
        );
      };
    return n && (s.route.ErrorBoundary || s.route.errorElement || u === 0)
      ? C.createElement(A0, {
          location: n.location,
          revalidation: n.revalidation,
          component: v,
          error: d,
          children: y(),
          routeContext: { outlet: null, matches: g, isDataRoute: !0 },
        })
      : y();
  }, null);
}
var bh = (function (e) {
    return (
      (e.UseBlocker = "useBlocker"),
      (e.UseRevalidator = "useRevalidator"),
      (e.UseNavigateStable = "useNavigate"),
      e
    );
  })(bh || {}),
  el = (function (e) {
    return (
      (e.UseBlocker = "useBlocker"),
      (e.UseLoaderData = "useLoaderData"),
      (e.UseActionData = "useActionData"),
      (e.UseRouteError = "useRouteError"),
      (e.UseNavigation = "useNavigation"),
      (e.UseRouteLoaderData = "useRouteLoaderData"),
      (e.UseMatches = "useMatches"),
      (e.UseRevalidator = "useRevalidator"),
      (e.UseNavigateStable = "useNavigate"),
      (e.UseRouteId = "useRouteId"),
      e
    );
  })(el || {});
function H0(e) {
  let t = C.useContext(Bl);
  return t || V(!1), t;
}
function B0(e) {
  let t = C.useContext(Bu);
  return t || V(!1), t;
}
function V0(e) {
  let t = C.useContext(Jt);
  return t || V(!1), t;
}
function Wh(e) {
  let t = V0(),
    n = t.matches[t.matches.length - 1];
  return n.route.id || V(!1), n.route.id;
}
function K0() {
  var e;
  let t = C.useContext($h),
    n = B0(el.UseRouteError),
    r = Wh(el.UseRouteError);
  return t || ((e = n.errors) == null ? void 0 : e[r]);
}
function Q0() {
  let { router: e } = H0(bh.UseNavigateStable),
    t = Wh(el.UseNavigateStable),
    n = C.useRef(!1);
  return (
    Uh(() => {
      n.current = !0;
    }),
    C.useCallback(
      function (i, o) {
        o === void 0 && (o = {}),
          n.current &&
            (typeof i == "number"
              ? e.navigate(i)
              : e.navigate(i, Zo({ fromRouteId: t }, o)));
      },
      [e, t]
    )
  );
}
const q0 = "startTransition",
  Af = Hm[q0];
function Y0(e) {
  let { fallbackElement: t, router: n, future: r } = e,
    [i, o] = C.useState(n.state),
    { v7_startTransition: l } = r || {},
    a = C.useCallback(
      (v) => {
        l && Af ? Af(() => o(v)) : o(v);
      },
      [o, l]
    );
  C.useLayoutEffect(() => n.subscribe(a), [n, a]);
  let s = C.useMemo(
      () => ({
        createHref: n.createHref,
        encodeLocation: n.encodeLocation,
        go: (v) => n.navigate(v),
        push: (v, g, y) =>
          n.navigate(v, {
            state: g,
            preventScrollReset: y == null ? void 0 : y.preventScrollReset,
          }),
        replace: (v, g, y) =>
          n.navigate(v, {
            replace: !0,
            state: g,
            preventScrollReset: y == null ? void 0 : y.preventScrollReset,
          }),
      }),
      [n]
    ),
    u = n.basename || "/",
    d = C.useMemo(
      () => ({ router: n, navigator: s, static: !1, basename: u }),
      [n, s, u]
    );
  return C.createElement(
    C.Fragment,
    null,
    C.createElement(
      Bl.Provider,
      { value: d },
      C.createElement(
        Bu.Provider,
        { value: i },
        C.createElement(
          J0,
          {
            basename: u,
            location: i.location,
            navigationType: i.historyAction,
            navigator: s,
          },
          i.initialized
            ? C.createElement(X0, { routes: n.routes, state: i })
            : t
        )
      )
    ),
    null
  );
}
function X0(e) {
  let { routes: t, state: n } = e;
  return F0(t, void 0, n);
}
function G0(e) {
  return z0(e.context);
}
function J0(e) {
  let {
    basename: t = "/",
    children: n = null,
    location: r,
    navigationType: i = Se.Pop,
    navigator: o,
    static: l = !1,
  } = e;
  $i() && V(!1);
  let a = t.replace(/^\/*/, "/"),
    s = C.useMemo(() => ({ basename: a, navigator: o, static: l }), [a, o, l]);
  typeof r == "string" && (r = Gt(r));
  let {
      pathname: u = "/",
      search: d = "",
      hash: v = "",
      state: g = null,
      key: y = "default",
    } = r,
    w = C.useMemo(() => {
      let x = Lr(u, a);
      return x == null
        ? null
        : {
            location: { pathname: x, search: d, hash: v, state: g, key: y },
            navigationType: i,
          };
    }, [a, u, d, v, g, y, i]);
  return w == null
    ? null
    : C.createElement(
        qn.Provider,
        { value: s },
        C.createElement(Vl.Provider, { children: n, value: w })
      );
}
new Promise(() => {});
function Z0(e) {
  let t = {
    hasErrorBoundary: e.ErrorBoundary != null || e.errorElement != null,
  };
  return (
    e.Component &&
      Object.assign(t, {
        element: C.createElement(e.Component),
        Component: void 0,
      }),
    e.ErrorBoundary &&
      Object.assign(t, {
        errorElement: C.createElement(e.ErrorBoundary),
        ErrorBoundary: void 0,
      }),
    t
  );
}
/**
 * React Router DOM v6.16.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function Tr() {
  return (
    (Tr = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    Tr.apply(this, arguments)
  );
}
function Hh(e, t) {
  if (e == null) return {};
  var n = {},
    r = Object.keys(e),
    i,
    o;
  for (o = 0; o < r.length; o++)
    (i = r[o]), !(t.indexOf(i) >= 0) && (n[i] = e[i]);
  return n;
}
function ew(e) {
  return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey);
}
function tw(e, t) {
  return e.button === 0 && (!t || t === "_self") && !ew(e);
}
const nw = [
    "onClick",
    "relative",
    "reloadDocument",
    "replace",
    "state",
    "target",
    "to",
    "preventScrollReset",
  ],
  rw = [
    "aria-current",
    "caseSensitive",
    "className",
    "end",
    "style",
    "to",
    "children",
  ];
function iw(e, t) {
  return E0({
    basename: t == null ? void 0 : t.basename,
    future: Tr({}, t == null ? void 0 : t.future, { v7_prependBasename: !0 }),
    history: Bg({ window: t == null ? void 0 : t.window }),
    hydrationData: (t == null ? void 0 : t.hydrationData) || ow(),
    routes: e,
    mapRouteProperties: Z0,
  }).initialize();
}
function ow() {
  var e;
  let t = (e = window) == null ? void 0 : e.__staticRouterHydrationData;
  return t && t.errors && (t = Tr({}, t, { errors: lw(t.errors) })), t;
}
function lw(e) {
  if (!e) return null;
  let t = Object.entries(e),
    n = {};
  for (let [r, i] of t)
    if (i && i.__type === "RouteErrorResponse")
      n[r] = new Wu(i.status, i.statusText, i.data, i.internal === !0);
    else if (i && i.__type === "Error") {
      if (i.__subType) {
        let o = window[i.__subType];
        if (typeof o == "function")
          try {
            let l = new o(i.message);
            (l.stack = ""), (n[r] = l);
          } catch {}
      }
      if (n[r] == null) {
        let o = new Error(i.message);
        (o.stack = ""), (n[r] = o);
      }
    } else n[r] = i;
  return n;
}
const aw =
    typeof window < "u" &&
    typeof window.document < "u" &&
    typeof window.document.createElement < "u",
  sw = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
  uw = C.forwardRef(function (t, n) {
    let {
        onClick: r,
        relative: i,
        reloadDocument: o,
        replace: l,
        state: a,
        target: s,
        to: u,
        preventScrollReset: d,
      } = t,
      v = Hh(t, nw),
      { basename: g } = C.useContext(qn),
      y,
      w = !1;
    if (typeof u == "string" && sw.test(u) && ((y = u), aw))
      try {
        let c = new URL(window.location.href),
          p = u.startsWith("//") ? new URL(c.protocol + u) : new URL(u),
          f = Lr(p.pathname, g);
        p.origin === c.origin && f != null
          ? (u = f + p.search + p.hash)
          : (w = !0);
      } catch {}
    let x = L0(u, { relative: i }),
      P = cw(u, {
        replace: l,
        state: a,
        target: s,
        preventScrollReset: d,
        relative: i,
      });
    function m(c) {
      r && r(c), c.defaultPrevented || P(c);
    }
    return C.createElement(
      "a",
      Tr({}, v, { href: y || x, onClick: w || o ? r : m, ref: n, target: s })
    );
  }),
  tl = C.forwardRef(function (t, n) {
    let {
        "aria-current": r = "page",
        caseSensitive: i = !1,
        className: o = "",
        end: l = !1,
        style: a,
        to: s,
        children: u,
      } = t,
      d = Hh(t, rw),
      v = Vu(s, { relative: d.relative }),
      g = Ui(),
      y = C.useContext(Bu),
      { navigator: w } = C.useContext(qn),
      x = w.encodeLocation ? w.encodeLocation(v).pathname : v.pathname,
      P = g.pathname,
      m =
        y && y.navigation && y.navigation.location
          ? y.navigation.location.pathname
          : null;
    i ||
      ((P = P.toLowerCase()),
      (m = m ? m.toLowerCase() : null),
      (x = x.toLowerCase()));
    let c = P === x || (!l && P.startsWith(x) && P.charAt(x.length) === "/"),
      p =
        m != null &&
        (m === x || (!l && m.startsWith(x) && m.charAt(x.length) === "/")),
      f = c ? r : void 0,
      S;
    typeof o == "function"
      ? (S = o({ isActive: c, isPending: p }))
      : (S = [o, c ? "active" : null, p ? "pending" : null]
          .filter(Boolean)
          .join(" "));
    let R = typeof a == "function" ? a({ isActive: c, isPending: p }) : a;
    return C.createElement(
      uw,
      Tr({}, d, { "aria-current": f, className: S, ref: n, style: R, to: s }),
      typeof u == "function" ? u({ isActive: c, isPending: p }) : u
    );
  });
var bf;
(function (e) {
  (e.UseScrollRestoration = "useScrollRestoration"),
    (e.UseSubmit = "useSubmit"),
    (e.UseSubmitFetcher = "useSubmitFetcher"),
    (e.UseFetcher = "useFetcher");
})(bf || (bf = {}));
var Wf;
(function (e) {
  (e.UseFetchers = "useFetchers"),
    (e.UseScrollRestoration = "useScrollRestoration");
})(Wf || (Wf = {}));
function cw(e, t) {
  let {
      target: n,
      replace: r,
      state: i,
      preventScrollReset: o,
      relative: l,
    } = t === void 0 ? {} : t,
    a = Kl(),
    s = Ui(),
    u = Vu(e, { relative: l });
  return C.useCallback(
    (d) => {
      if (tw(d, n)) {
        d.preventDefault();
        let v = r !== void 0 ? r : Vn(s) === Vn(u);
        a(e, { replace: v, state: i, preventScrollReset: o, relative: l });
      }
    },
    [s, a, u, r, i, n, e, o, l]
  );
}
/*! js-cookie v3.0.5 | MIT */ function fo(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t];
    for (var r in n) e[r] = n[r];
  }
  return e;
}
var fw = {
  read: function (e) {
    return (
      e[0] === '"' && (e = e.slice(1, -1)),
      e.replace(/(%[\dA-F]{2})+/gi, decodeURIComponent)
    );
  },
  write: function (e) {
    return encodeURIComponent(e).replace(
      /%(2[346BF]|3[AC-F]|40|5[BDE]|60|7[BCD])/g,
      decodeURIComponent
    );
  },
};
function Is(e, t) {
  function n(i, o, l) {
    if (!(typeof document > "u")) {
      (l = fo({}, t, l)),
        typeof l.expires == "number" &&
          (l.expires = new Date(Date.now() + l.expires * 864e5)),
        l.expires && (l.expires = l.expires.toUTCString()),
        (i = encodeURIComponent(i)
          .replace(/%(2[346B]|5E|60|7C)/g, decodeURIComponent)
          .replace(/[()]/g, escape));
      var a = "";
      for (var s in l)
        l[s] &&
          ((a += "; " + s), l[s] !== !0 && (a += "=" + l[s].split(";")[0]));
      return (document.cookie = i + "=" + e.write(o, i) + a);
    }
  }
  function r(i) {
    if (!(typeof document > "u" || (arguments.length && !i))) {
      for (
        var o = document.cookie ? document.cookie.split("; ") : [],
          l = {},
          a = 0;
        a < o.length;
        a++
      ) {
        var s = o[a].split("="),
          u = s.slice(1).join("=");
        try {
          var d = decodeURIComponent(s[0]);
          if (((l[d] = e.read(u, d)), i === d)) break;
        } catch {}
      }
      return i ? l[i] : l;
    }
  }
  return Object.create(
    {
      set: n,
      get: r,
      remove: function (i, o) {
        n(i, "", fo({}, o, { expires: -1 }));
      },
      withAttributes: function (i) {
        return Is(this.converter, fo({}, this.attributes, i));
      },
      withConverter: function (i) {
        return Is(fo({}, this.converter, i), this.attributes);
      },
    },
    {
      attributes: { value: Object.freeze(t) },
      converter: { value: Object.freeze(e) },
    }
  );
}
var dw = Is(fw, { path: "/" });
async function it(e, t = {}) {
  (t.method = t.method || "GET"),
    (t.headers = t.headers || {}),
    t.method.toUpperCase() !== "GET" &&
      (t.headers["XSRF-Token"] = dw.get("XSRF-TOKEN"));
  const n = await window.fetch(e, t);
  if (n.status >= 400) throw n;
  return n;
}
const Bh = "session/setUser",
  Vh = "session/removeUser",
  Ku = (e) => ({ type: Bh, payload: e }),
  pw = () => ({ type: Vh }),
  hw = (e) => async (t) => {
    const { credential: n, password: r } = e,
      i = await it("/api/session", {
        method: "POST",
        body: JSON.stringify({ credential: n, password: r }),
        headers: { "Content-Type": "application/json" },
      }),
      o = await i.json();
    return t(Ku(o.user)), i;
  },
  mw = () => async (e) => {
    const t = await it("/api/session"),
      n = await t.json();
    return e(Ku(n.user)), t;
  },
  vw = (e) => async (t) => {
    const { username: n, firstName: r, lastName: i, email: o, password: l } = e,
      a = await it("/api/users", {
        method: "POST",
        body: JSON.stringify({
          username: n,
          firstName: r,
          lastName: i,
          email: o,
          password: l,
        }),
        headers: { "Content-Type": "application/json" },
      }),
      s = await a.json();
    return t(Ku(s.user)), a;
  },
  yw = () => async (e) => {
    const t = await it("/api/session", { method: "DELETE" });
    return e(pw()), t;
  },
  gw = { user: null },
  ww = (e = gw, t) => {
    switch (t.type) {
      case Bh:
        return { ...e, user: t.payload };
      case Vh:
        return { ...e, user: null };
      default:
        return e;
    }
  };
function Sw({ user: e }) {
  const t = Dt(),
    [n, r] = C.useState(!1),
    i = C.useRef(),
    o = Kl(),
    l = (d) => {
      d.stopPropagation(), r(!n);
    };
  C.useEffect(() => {
    if (!n) return;
    const d = (v) => {
      i.current.contains(v.target) || r(!1);
    };
    return (
      document.addEventListener("click", d),
      () => document.removeEventListener("click", d)
    );
  }, [n]);
  const a = () => r(!1),
    s = (d) => {
      d.preventDefault(),
        t(yw()).then(() => {
          a(), o("/", { relative: "route" });
        });
    },
    u = "profile-dropdown" + (n ? "" : " hidden");
  return h.jsxs(h.Fragment, {
    children: [
      h.jsx("button", {
        className: "profile-button",
        onClick: l,
        children: h.jsx("i", {
          className: "fa-solid fa-cookie-bite fa-2xl",
          style: { color: "lightcoral" },
        }),
      }),
      h.jsxs("div", {
        className: u,
        ref: i,
        children: [
          h.jsxs("div", {
            className: "profile-dropdown-group",
            children: [
              h.jsxs("div", { children: ["Hello, ", e.username] }),
              h.jsx("div", { children: e.email }),
            ],
          }),
          h.jsx("div", {
            className: "profile-dropdown-group",
            children: h.jsx(tl, {
              to: "/recipes/current",
              className: "profile-dropdown-link",
              onClick: a,
              children: "My Recipes",
            }),
          }),
          h.jsx("button", {
            className: "logout-button",
            onClick: s,
            children: "Log Out",
          }),
        ],
      }),
    ],
  });
}
const Qu = C.createContext();
function xw({ children: e }) {
  const t = C.useRef(),
    [n, r] = C.useState(null),
    [i, o] = C.useState(null),
    a = {
      modalRef: t,
      modalContent: n,
      setModalContent: r,
      setOnModalClose: o,
      closeModal: () => {
        r(null), typeof i == "function" && (o(null), i());
      },
    };
  return h.jsxs(h.Fragment, {
    children: [
      h.jsx(Qu.Provider, { value: a, children: e }),
      h.jsx("div", { ref: t }),
    ],
  });
}
function Ew() {
  const { modalRef: e, modalContent: t, closeModal: n } = C.useContext(Qu);
  return !e || !e.current || !t
    ? null
    : Zy.createPortal(
        h.jsxs("div", {
          id: "modal",
          children: [
            h.jsx("div", { id: "modal-background", onClick: n }),
            h.jsx("div", { id: "modal-content", children: t }),
          ],
        }),
        e.current
      );
}
const Ai = () => C.useContext(Qu);
function fi({
  modalComponent: e,
  buttonText: t,
  onButtonClick: n,
  onModalClose: r,
  className: i,
}) {
  const { setModalContent: o, setOnModalClose: l } = Ai(),
    a = () => {
      r && l(r), o(e), typeof n == "function" && n();
    };
  return h.jsx("button", { className: i, onClick: a, children: t });
}
function Rw() {
  const e = Dt(),
    [t, n] = C.useState(""),
    [r, i] = C.useState(""),
    [o, l] = C.useState({}),
    { closeModal: a } = Ai(),
    s = (u) => (
      u.preventDefault(),
      l({}),
      e(hw({ credential: t, password: r }))
        .then(a)
        .catch(async (d) => {
          const v = await d.json();
          v && v.errors && l(v.errors);
        })
    );
  return h.jsx("div", {
    className: "login-modal-container",
    children: h.jsxs("form", {
      className: "login-modal-form",
      onSubmit: s,
      children: [
        h.jsxs("label", {
          className: "login-modal-input",
          children: [
            h.jsx("span", { children: "Username/Email" }),
            h.jsx("input", {
              type: "text",
              placeholder: "Enter Username or Email",
              value: t,
              onChange: (u) => n(u.target.value),
              required: !0,
            }),
          ],
        }),
        o.credential &&
          h.jsx("p", { className: "error", children: o.credential }),
        h.jsxs("label", {
          className: "login-modal-input",
          children: [
            h.jsx("span", { children: "Password" }),
            h.jsx("input", {
              type: "password",
              placeholder: "Enter Password",
              value: r,
              onChange: (u) => i(u.target.value),
              required: !0,
            }),
          ],
        }),
        o.password && h.jsx("p", { className: "error", children: o.password }),
        h.jsx("button", {
          className: "login-modal-button",
          type: "submit",
          children: "Log In",
        }),
      ],
    }),
  });
}
function Cw() {
  const e = Dt(),
    [t, n] = C.useState(""),
    [r, i] = C.useState(""),
    [o, l] = C.useState(""),
    [a, s] = C.useState(""),
    [u, d] = C.useState(""),
    [v, g] = C.useState(""),
    [y, w] = C.useState({}),
    { closeModal: x } = Ai(),
    P = (m) => (
      m.preventDefault(),
      u === v
        ? (w({}),
          e(
            vw({
              email: t,
              username: r,
              firstName: o,
              lastName: a,
              password: u,
            })
          )
            .then(x)
            .catch(async (c) => {
              const p = await c.json();
              p != null && p.errors && w(p.errors);
            }))
        : w({
            confirmPassword:
              "Confirm Password field must be the same as the Password field",
          })
    );
  return h.jsx("div", {
    className: "signup-modal-container",
    children: h.jsxs("form", {
      className: "signup-modal-form",
      onSubmit: P,
      children: [
        h.jsxs("label", {
          className: "signup-modal-input",
          children: [
            h.jsx("span", { children: "Email" }),
            h.jsx("input", {
              type: "text",
              placeholder: "Enter Email",
              value: t,
              onChange: (m) => n(m.target.value),
              required: !0,
            }),
          ],
        }),
        y.email && h.jsx("p", { className: "error", children: y.email }),
        h.jsxs("label", {
          className: "signup-modal-input",
          children: [
            h.jsx("span", { children: "Username" }),
            h.jsx("input", {
              type: "text",
              placeholder: "Enter Username",
              value: r,
              onChange: (m) => i(m.target.value),
              required: !0,
            }),
          ],
        }),
        y.username && h.jsx("p", { className: "error", children: y.username }),
        h.jsxs("label", {
          className: "signup-modal-input",
          children: [
            h.jsx("span", { children: "First Name" }),
            h.jsx("input", {
              type: "text",
              placeholder: "Enter First Name",
              value: o,
              onChange: (m) => l(m.target.value),
              required: !0,
            }),
          ],
        }),
        y.firstName &&
          h.jsx("p", { className: "error", children: y.firstName }),
        h.jsxs("label", {
          className: "signup-modal-input",
          children: [
            h.jsx("span", { children: "Last Name" }),
            h.jsx("input", {
              type: "text",
              placeholder: "Enter Last Name",
              value: a,
              onChange: (m) => s(m.target.value),
              required: !0,
            }),
          ],
        }),
        y.lastName && h.jsx("p", { className: "error", children: y.lastName }),
        h.jsxs("label", {
          className: "signup-modal-input",
          children: [
            h.jsx("span", { children: "Password" }),
            h.jsx("input", {
              type: "password",
              placeholder: "Enter Password",
              value: u,
              onChange: (m) => d(m.target.value),
              required: !0,
            }),
          ],
        }),
        y.password && h.jsx("p", { className: "error", children: y.password }),
        h.jsxs("label", {
          className: "signup-modal-input",
          children: [
            h.jsx("span", { children: "Confirm Password" }),
            h.jsx("input", {
              type: "password",
              placeholder: "Confirm Password",
              value: v,
              onChange: (m) => g(m.target.value),
              required: !0,
            }),
          ],
        }),
        y.confirmPassword &&
          h.jsx("p", { className: "error", children: y.confirmPassword }),
        h.jsx("button", {
          className: "signup-modal-button",
          type: "submit",
          children: "Sign Up",
        }),
      ],
    }),
  });
}
function _w({ isLoaded: e }) {
  const t = Sn((n) => n.session.user);
  return h.jsxs("nav", {
    className: "nav-header",
    children: [
      h.jsxs(tl, {
        to: "/",
        className: "home-button",
        children: [
          h.jsx("img", {
            className: "logo",
            src: "../../logo.png",
            alt: "logo",
          }),
          "Temptations",
        ],
      }),
      h.jsx("div", {
        className: "nav-header-right",
        children:
          e && t
            ? h.jsxs(h.Fragment, {
                children: [
                  h.jsxs(tl, {
                    to: "/recipes/new",
                    className: "upload-recipe-button",
                    children: [
                      h.jsx("i", {
                        className: "fa-solid fa-arrow-up-from-bracket",
                      }),
                      "  Upload a Recipe",
                    ],
                  }),
                  h.jsx(Sw, { user: t }),
                ],
              })
            : h.jsxs(h.Fragment, {
                children: [
                  h.jsx(fi, {
                    buttonText: "Log In",
                    className: "nav-header-button login-button",
                    modalComponent: h.jsx(Rw, {}),
                  }),
                  h.jsx(fi, {
                    buttonText: "Sign Up",
                    className: "nav-header-button signup-button",
                    modalComponent: h.jsx(Cw, {}),
                  }),
                ],
              }),
      }),
    ],
  });
}
const Kh = "recipes/setRecipes",
  Qh = "recipes/setRecipe",
  qh = "recipes/addReview",
  Yh = "recipes/editReview",
  Xh = "recipes/removeReview",
  Gh = "recipes/setUserRecipes",
  Pw = (e) => ({ type: Kh, payload: e }),
  Jh = (e) => ({ type: Qh, payload: e }),
  kw = (e) => ({ type: qh, payload: e }),
  Nw = (e) => ({ type: Yh, payload: e }),
  Tw = (e, t) => ({ type: Xh, payload: { recipeId: e, reviewId: t } }),
  jw = (e) => ({ type: Gh, payload: e }),
  Ow = () => async (e) => {
    const t = await it("/api/recipes"),
      n = await t.json();
    return e(Pw(n.Recipes)), t;
  },
  Zh = (e) => async (t) => {
    const r = await (await it(`/api/recipes/${e}`)).json();
    return t(Jh(r)), r;
  },
  Mw = (e) => async (t) => {
    const r = await (
      await it("/api/recipes", { method: "POST", body: e })
    ).json();
    return t(Jh(r)), r;
  },
  Lw = (e, t) => async (n) => {
    const r = await it(`/api/recipes/${e}/reviews`, {
        method: "POST",
        body: JSON.stringify(t),
        headers: { "Content-Type": "application/json" },
      }),
      i = await r.json();
    return n(kw(i)), r;
  },
  Iw = (e, t) => async (n) => {
    const r = await it(`/api/reviews/${e}`, {
        method: "PUT",
        body: JSON.stringify(t),
        headers: { "Content-Type": "application/json" },
      }),
      i = await r.json();
    return n(Nw(i)), r;
  },
  Dw = (e, t) => async (n) => {
    const r = await it(`/api/reviews/${t}`, { method: "DELETE" });
    return r.ok && n(Tw(e, t)), r;
  },
  zw = () => async (e) => {
    const t = await it("/api/recipes/current"),
      n = await t.json();
    return e(jw(n.Recipes)), t;
  },
  Fw = { entries: {}, userEntries: {} },
  $w = (e = Fw, t) => {
    switch (t.type) {
      case Kh: {
        const n = t.payload.reduce((r, i) => {
          const o = e.entries[i.id];
          return { ...r, [i.id]: { ...o, ...i } };
        }, {});
        return { ...e, entries: n };
      }
      case Qh: {
        const n = e.entries[t.payload.id];
        return {
          ...e,
          entries: { ...e.entries, [t.payload.id]: { ...n, ...t.payload } },
        };
      }
      case qh: {
        const n = { ...e.entries[t.payload.recipeId] };
        return (
          n.Reviews.unshift(t.payload),
          { ...e, entries: { ...e.entries, [t.payload.recipeId]: { ...n } } }
        );
      }
      case Yh: {
        const n = { ...e.entries[t.payload.recipeId] };
        return (
          (n.Reviews = n.Reviews.filter((r) => r.id !== t.payload.id)),
          n.Reviews.unshift(t.payload),
          { ...e, entries: { ...e.entries, [t.payload.recipeId]: { ...n } } }
        );
      }
      case Xh: {
        const n = { ...e.entries[t.payload.recipeId] };
        return (
          (n.Reviews = n.Reviews.filter((r) => r.id !== t.payload.reviewId)),
          { ...e, entries: { ...e.entries, [t.payload.recipeId]: { ...n } } }
        );
      }
      case Gh: {
        const n = t.payload.reduce((r, i) => {
          const o = e.entries[i.id];
          return { ...r, [i.id]: { ...o, ...i } };
        }, {});
        return { ...e, userEntries: n };
      }
      default:
        return e;
    }
  };
function Uw() {
  const e = Dt(),
    t = Sn((o) => o.recipe.entries),
    n = Object.values(t),
    [r, i] = C.useState(!0);
  return (
    C.useEffect(() => {
      e(Ow()).then(() => i(!1));
    }, [e]),
    r
      ? h.jsx("h1", { children: "Loading..." })
      : h.jsx("div", {
          className: "recipes-grid",
          children: n.map((o) =>
            h.jsxs(
              tl,
              {
                className: "recipes-grid-card",
                to: `/recipes/${o.id}`,
                title: o.name,
                children: [
                  h.jsx("div", {
                    className: "recipes-grid-card-image-div",
                    children: h.jsx("img", {
                      className: "recipes-grid-card-image",
                      src: o.RecipeImages.length ? o.RecipeImages[0].url : "",
                      alt: "preview",
                    }),
                  }),
                  h.jsxs("div", {
                    className: "ecipes-grid-card-title-stars-div",
                    children: [
                      h.jsx("div", {
                        children: h.jsx("span", {
                          style: { fontWeight: "bold" },
                          children: o.name,
                        }),
                      }),
                      h.jsxs("div", {
                        children: [
                          h.jsx("i", { className: "fa-solid fa-star" }),
                          " ",
                          h.jsx("span", {
                            style: { fontWeight: "bold" },
                            children:
                              o.avgRating > 0 ? o.avgRating.toFixed(1) : "New",
                          }),
                        ],
                      }),
                    ],
                  }),
                  h.jsxs("div", {
                    style: { fontSize: "14px" },
                    children: [
                      "by",
                      " ",
                      h.jsx("span", {
                        style: { fontWeight: "bold" },
                        children: o.User.username,
                      }),
                    ],
                  }),
                ],
              },
              o.id
            )
          ),
        })
  );
}
var em = {},
  Ql = {},
  qu = {},
  Da = {},
  tm = { exports: {} },
  Aw = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",
  bw = Aw,
  Ww = bw;
function nm() {}
function rm() {}
rm.resetWarningCache = nm;
var Hw = function () {
  function e(r, i, o, l, a, s) {
    if (s !== Ww) {
      var u = new Error(
        "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
      );
      throw ((u.name = "Invariant Violation"), u);
    }
  }
  e.isRequired = e;
  function t() {
    return e;
  }
  var n = {
    array: e,
    bigint: e,
    bool: e,
    func: e,
    number: e,
    object: e,
    string: e,
    symbol: e,
    any: e,
    arrayOf: t,
    element: e,
    elementType: e,
    instanceOf: t,
    node: e,
    objectOf: t,
    oneOf: t,
    oneOfType: t,
    shape: t,
    exact: t,
    checkPropTypes: rm,
    resetWarningCache: nm,
  };
  return (n.PropTypes = n), n;
};
tm.exports = Hw();
var Yu = tm.exports,
  Hf;
function Bw() {
  return (
    Hf ||
      ((Hf = 1),
      (function (e) {
        (function (t, n) {
          n(e, C, Yu);
        })(td, function (t, n, r) {
          Object.defineProperty(t, "__esModule", { value: !0 }),
            (t.setHasSupportToCaptureOption = w);
          var i = l(n),
            o = l(r);
          function l(c) {
            return c && c.__esModule ? c : { default: c };
          }
          var a =
            Object.assign ||
            function (c) {
              for (var p = 1; p < arguments.length; p++) {
                var f = arguments[p];
                for (var S in f)
                  Object.prototype.hasOwnProperty.call(f, S) && (c[S] = f[S]);
              }
              return c;
            };
          function s(c, p) {
            var f = {};
            for (var S in c)
              p.indexOf(S) >= 0 ||
                (Object.prototype.hasOwnProperty.call(c, S) && (f[S] = c[S]));
            return f;
          }
          function u(c, p) {
            if (!(c instanceof p))
              throw new TypeError("Cannot call a class as a function");
          }
          var d = (function () {
            function c(p, f) {
              for (var S = 0; S < f.length; S++) {
                var R = f[S];
                (R.enumerable = R.enumerable || !1),
                  (R.configurable = !0),
                  "value" in R && (R.writable = !0),
                  Object.defineProperty(p, R.key, R);
              }
            }
            return function (p, f, S) {
              return f && c(p.prototype, f), S && c(p, S), p;
            };
          })();
          function v(c, p) {
            if (!c)
              throw new ReferenceError(
                "this hasn't been initialised - super() hasn't been called"
              );
            return p && (typeof p == "object" || typeof p == "function")
              ? p
              : c;
          }
          function g(c, p) {
            if (typeof p != "function" && p !== null)
              throw new TypeError(
                "Super expression must either be null or a function, not " +
                  typeof p
              );
            (c.prototype = Object.create(p && p.prototype, {
              constructor: {
                value: c,
                enumerable: !1,
                writable: !0,
                configurable: !0,
              },
            })),
              p &&
                (Object.setPrototypeOf
                  ? Object.setPrototypeOf(c, p)
                  : (c.__proto__ = p));
          }
          var y = !1;
          function w(c) {
            y = c;
          }
          try {
            addEventListener(
              "test",
              null,
              Object.defineProperty({}, "capture", {
                get: function () {
                  w(!0);
                },
              })
            );
          } catch {}
          function x() {
            var c =
              arguments.length > 0 && arguments[0] !== void 0
                ? arguments[0]
                : { capture: !0 };
            return y ? c : c.capture;
          }
          function P(c) {
            if ("touches" in c) {
              var p = c.touches[0],
                f = p.pageX,
                S = p.pageY;
              return { x: f, y: S };
            }
            var R = c.screenX,
              N = c.screenY;
            return { x: R, y: N };
          }
          var m = (function (c) {
            g(p, c);
            function p() {
              var f;
              u(this, p);
              for (var S = arguments.length, R = Array(S), N = 0; N < S; N++)
                R[N] = arguments[N];
              var T = v(
                this,
                (f = p.__proto__ || Object.getPrototypeOf(p)).call.apply(
                  f,
                  [this].concat(R)
                )
              );
              return (
                (T._handleSwipeStart = T._handleSwipeStart.bind(T)),
                (T._handleSwipeMove = T._handleSwipeMove.bind(T)),
                (T._handleSwipeEnd = T._handleSwipeEnd.bind(T)),
                (T._onMouseDown = T._onMouseDown.bind(T)),
                (T._onMouseMove = T._onMouseMove.bind(T)),
                (T._onMouseUp = T._onMouseUp.bind(T)),
                (T._setSwiperRef = T._setSwiperRef.bind(T)),
                T
              );
            }
            return (
              d(p, [
                {
                  key: "componentDidMount",
                  value: function () {
                    this.swiper &&
                      this.swiper.addEventListener(
                        "touchmove",
                        this._handleSwipeMove,
                        x({ capture: !0, passive: !1 })
                      );
                  },
                },
                {
                  key: "componentWillUnmount",
                  value: function () {
                    this.swiper &&
                      this.swiper.removeEventListener(
                        "touchmove",
                        this._handleSwipeMove,
                        x({ capture: !0, passive: !1 })
                      );
                  },
                },
                {
                  key: "_onMouseDown",
                  value: function (S) {
                    this.props.allowMouseEvents &&
                      ((this.mouseDown = !0),
                      document.addEventListener("mouseup", this._onMouseUp),
                      document.addEventListener("mousemove", this._onMouseMove),
                      this._handleSwipeStart(S));
                  },
                },
                {
                  key: "_onMouseMove",
                  value: function (S) {
                    this.mouseDown && this._handleSwipeMove(S);
                  },
                },
                {
                  key: "_onMouseUp",
                  value: function (S) {
                    (this.mouseDown = !1),
                      document.removeEventListener("mouseup", this._onMouseUp),
                      document.removeEventListener(
                        "mousemove",
                        this._onMouseMove
                      ),
                      this._handleSwipeEnd(S);
                  },
                },
                {
                  key: "_handleSwipeStart",
                  value: function (S) {
                    var R = P(S),
                      N = R.x,
                      T = R.y;
                    (this.moveStart = { x: N, y: T }),
                      this.props.onSwipeStart(S);
                  },
                },
                {
                  key: "_handleSwipeMove",
                  value: function (S) {
                    if (this.moveStart) {
                      var R = P(S),
                        N = R.x,
                        T = R.y,
                        W = N - this.moveStart.x,
                        D = T - this.moveStart.y;
                      this.moving = !0;
                      var pe = this.props.onSwipeMove({ x: W, y: D }, S);
                      pe && S.cancelable && S.preventDefault(),
                        (this.movePosition = { deltaX: W, deltaY: D });
                    }
                  },
                },
                {
                  key: "_handleSwipeEnd",
                  value: function (S) {
                    this.props.onSwipeEnd(S);
                    var R = this.props.tolerance;
                    this.moving &&
                      this.movePosition &&
                      (this.movePosition.deltaX < -R
                        ? this.props.onSwipeLeft(1, S)
                        : this.movePosition.deltaX > R &&
                          this.props.onSwipeRight(1, S),
                      this.movePosition.deltaY < -R
                        ? this.props.onSwipeUp(1, S)
                        : this.movePosition.deltaY > R &&
                          this.props.onSwipeDown(1, S)),
                      (this.moveStart = null),
                      (this.moving = !1),
                      (this.movePosition = null);
                  },
                },
                {
                  key: "_setSwiperRef",
                  value: function (S) {
                    (this.swiper = S), this.props.innerRef(S);
                  },
                },
                {
                  key: "render",
                  value: function () {
                    var S = this.props;
                    S.tagName;
                    var R = S.className,
                      N = S.style,
                      T = S.children;
                    S.allowMouseEvents,
                      S.onSwipeUp,
                      S.onSwipeDown,
                      S.onSwipeLeft,
                      S.onSwipeRight,
                      S.onSwipeStart,
                      S.onSwipeMove,
                      S.onSwipeEnd,
                      S.innerRef,
                      S.tolerance;
                    var W = s(S, [
                      "tagName",
                      "className",
                      "style",
                      "children",
                      "allowMouseEvents",
                      "onSwipeUp",
                      "onSwipeDown",
                      "onSwipeLeft",
                      "onSwipeRight",
                      "onSwipeStart",
                      "onSwipeMove",
                      "onSwipeEnd",
                      "innerRef",
                      "tolerance",
                    ]);
                    return i.default.createElement(
                      this.props.tagName,
                      a(
                        {
                          ref: this._setSwiperRef,
                          onMouseDown: this._onMouseDown,
                          onTouchStart: this._handleSwipeStart,
                          onTouchEnd: this._handleSwipeEnd,
                          className: R,
                          style: N,
                        },
                        W
                      ),
                      T
                    );
                  },
                },
              ]),
              p
            );
          })(n.Component);
          (m.displayName = "ReactSwipe"),
            (m.propTypes = {
              tagName: o.default.string,
              className: o.default.string,
              style: o.default.object,
              children: o.default.node,
              allowMouseEvents: o.default.bool,
              onSwipeUp: o.default.func,
              onSwipeDown: o.default.func,
              onSwipeLeft: o.default.func,
              onSwipeRight: o.default.func,
              onSwipeStart: o.default.func,
              onSwipeMove: o.default.func,
              onSwipeEnd: o.default.func,
              innerRef: o.default.func,
              tolerance: o.default.number.isRequired,
            }),
            (m.defaultProps = {
              tagName: "div",
              allowMouseEvents: !1,
              onSwipeUp: function () {},
              onSwipeDown: function () {},
              onSwipeLeft: function () {},
              onSwipeRight: function () {},
              onSwipeStart: function () {},
              onSwipeMove: function () {},
              onSwipeEnd: function () {},
              innerRef: function () {},
              tolerance: 0,
            }),
            (t.default = m);
        });
      })(Da)),
    Da
  );
}
(function (e) {
  (function (t, n) {
    n(e, Bw());
  })(td, function (t, n) {
    Object.defineProperty(t, "__esModule", { value: !0 });
    var r = i(n);
    function i(o) {
      return o && o.__esModule ? o : { default: o };
    }
    t.default = r.default;
  });
})(qu);
var bi = {},
  im = { exports: {} };
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/ (function (e) {
  (function () {
    var t = {}.hasOwnProperty;
    function n() {
      for (var o = "", l = 0; l < arguments.length; l++) {
        var a = arguments[l];
        a && (o = i(o, r(a)));
      }
      return o;
    }
    function r(o) {
      if (typeof o == "string" || typeof o == "number") return o;
      if (typeof o != "object") return "";
      if (Array.isArray(o)) return n.apply(null, o);
      if (
        o.toString !== Object.prototype.toString &&
        !o.toString.toString().includes("[native code]")
      )
        return o.toString();
      var l = "";
      for (var a in o) t.call(o, a) && o[a] && (l = i(l, a));
      return l;
    }
    function i(o, l) {
      return l ? (o ? o + " " + l : o + l) : o;
    }
    e.exports ? ((n.default = n), (e.exports = n)) : (window.classNames = n);
  })();
})(im);
var om = im.exports;
Object.defineProperty(bi, "__esModule", { value: !0 });
bi.default = void 0;
var on = Vw(om);
function Vw(e) {
  return e && e.__esModule ? e : { default: e };
}
function Kw(e, t, n) {
  return (
    t in e
      ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = n),
    e
  );
}
var Qw = {
  ROOT: function (t) {
    return (0, on.default)(Kw({ "carousel-root": !0 }, t || "", !!t));
  },
  CAROUSEL: function (t) {
    return (0, on.default)({ carousel: !0, "carousel-slider": t });
  },
  WRAPPER: function (t, n) {
    return (0, on.default)({
      "thumbs-wrapper": !t,
      "slider-wrapper": t,
      "axis-horizontal": n === "horizontal",
      "axis-vertical": n !== "horizontal",
    });
  },
  SLIDER: function (t, n) {
    return (0, on.default)({ thumbs: !t, slider: t, animated: !n });
  },
  ITEM: function (t, n, r) {
    return (0, on.default)({ thumb: !t, slide: t, selected: n, previous: r });
  },
  ARROW_PREV: function (t) {
    return (0, on.default)({
      "control-arrow control-prev": !0,
      "control-disabled": t,
    });
  },
  ARROW_NEXT: function (t) {
    return (0, on.default)({
      "control-arrow control-next": !0,
      "control-disabled": t,
    });
  },
  DOT: function (t) {
    return (0, on.default)({ dot: !0, selected: t });
  },
};
bi.default = Qw;
var Wi = {},
  ql = {};
Object.defineProperty(ql, "__esModule", { value: !0 });
ql.outerWidth = void 0;
var qw = function (t) {
  var n = t.offsetWidth,
    r = getComputedStyle(t);
  return (n += parseInt(r.marginLeft) + parseInt(r.marginRight)), n;
};
ql.outerWidth = qw;
var Ir = {};
Object.defineProperty(Ir, "__esModule", { value: !0 });
Ir.default = void 0;
var Yw = function (t, n, r) {
  var i = t === 0 ? t : t + n,
    o = r === "horizontal" ? [i, 0, 0] : [0, i, 0],
    l = "translate3d",
    a = "(" + o.join(",") + ")";
  return l + a;
};
Ir.default = Yw;
var Hi = {};
Object.defineProperty(Hi, "__esModule", { value: !0 });
Hi.default = void 0;
var Xw = function () {
  return window;
};
Hi.default = Xw;
Object.defineProperty(Wi, "__esModule", { value: !0 });
Wi.default = void 0;
var vt = Zw(C),
  jn = Yl(bi),
  Gw = ql,
  Bf = Yl(Ir),
  Jw = Yl(qu),
  po = Yl(Hi);
function Yl(e) {
  return e && e.__esModule ? e : { default: e };
}
function lm() {
  if (typeof WeakMap != "function") return null;
  var e = new WeakMap();
  return (
    (lm = function () {
      return e;
    }),
    e
  );
}
function Zw(e) {
  if (e && e.__esModule) return e;
  if (e === null || (di(e) !== "object" && typeof e != "function"))
    return { default: e };
  var t = lm();
  if (t && t.has(e)) return t.get(e);
  var n = {},
    r = Object.defineProperty && Object.getOwnPropertyDescriptor;
  for (var i in e)
    if (Object.prototype.hasOwnProperty.call(e, i)) {
      var o = r ? Object.getOwnPropertyDescriptor(e, i) : null;
      o && (o.get || o.set) ? Object.defineProperty(n, i, o) : (n[i] = e[i]);
    }
  return (n.default = e), t && t.set(e, n), n;
}
function di(e) {
  "@babel/helpers - typeof";
  return (
    typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
      ? (di = function (n) {
          return typeof n;
        })
      : (di = function (n) {
          return n &&
            typeof Symbol == "function" &&
            n.constructor === Symbol &&
            n !== Symbol.prototype
            ? "symbol"
            : typeof n;
        }),
    di(e)
  );
}
function Ds() {
  return (
    (Ds =
      Object.assign ||
      function (e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = arguments[t];
          for (var r in n)
            Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
        }
        return e;
      }),
    Ds.apply(this, arguments)
  );
}
function eS(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function Vf(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    (r.enumerable = r.enumerable || !1),
      (r.configurable = !0),
      "value" in r && (r.writable = !0),
      Object.defineProperty(e, r.key, r);
  }
}
function tS(e, t, n) {
  return t && Vf(e.prototype, t), n && Vf(e, n), e;
}
function nS(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  (e.prototype = Object.create(t && t.prototype, {
    constructor: { value: e, writable: !0, configurable: !0 },
  })),
    t && zs(e, t);
}
function zs(e, t) {
  return (
    (zs =
      Object.setPrototypeOf ||
      function (r, i) {
        return (r.__proto__ = i), r;
      }),
    zs(e, t)
  );
}
function rS(e) {
  var t = oS();
  return function () {
    var r = nl(e),
      i;
    if (t) {
      var o = nl(this).constructor;
      i = Reflect.construct(r, arguments, o);
    } else i = r.apply(this, arguments);
    return iS(this, i);
  };
}
function iS(e, t) {
  return t && (di(t) === "object" || typeof t == "function") ? t : $e(e);
}
function $e(e) {
  if (e === void 0)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called"
    );
  return e;
}
function oS() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
    return !1;
  if (typeof Proxy == "function") return !0;
  try {
    return (
      Date.prototype.toString.call(Reflect.construct(Date, [], function () {})),
      !0
    );
  } catch {
    return !1;
  }
}
function nl(e) {
  return (
    (nl = Object.setPrototypeOf
      ? Object.getPrototypeOf
      : function (n) {
          return n.__proto__ || Object.getPrototypeOf(n);
        }),
    nl(e)
  );
}
function Ie(e, t, n) {
  return (
    t in e
      ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = n),
    e
  );
}
var lS = function (t) {
    return t.hasOwnProperty("key");
  },
  Xu = (function (e) {
    nS(n, e);
    var t = rS(n);
    function n(r) {
      var i;
      return (
        eS(this, n),
        (i = t.call(this, r)),
        Ie($e(i), "itemsWrapperRef", void 0),
        Ie($e(i), "itemsListRef", void 0),
        Ie($e(i), "thumbsRef", void 0),
        Ie($e(i), "setItemsWrapperRef", function (o) {
          i.itemsWrapperRef = o;
        }),
        Ie($e(i), "setItemsListRef", function (o) {
          i.itemsListRef = o;
        }),
        Ie($e(i), "setThumbsRef", function (o, l) {
          i.thumbsRef || (i.thumbsRef = []), (i.thumbsRef[l] = o);
        }),
        Ie($e(i), "updateSizes", function () {
          if (!(!i.props.children || !i.itemsWrapperRef || !i.thumbsRef)) {
            var o = vt.Children.count(i.props.children),
              l = i.itemsWrapperRef.clientWidth,
              a = i.props.thumbWidth
                ? i.props.thumbWidth
                : (0, Gw.outerWidth)(i.thumbsRef[0]),
              s = Math.floor(l / a),
              u = s < o,
              d = u ? o - s : 0;
            i.setState(function (v, g) {
              return {
                itemSize: a,
                visibleItems: s,
                firstItem: u ? i.getFirstItem(g.selectedItem) : 0,
                lastPosition: d,
                showArrows: u,
              };
            });
          }
        }),
        Ie($e(i), "handleClickItem", function (o, l, a) {
          if (!lS(a) || a.key === "Enter") {
            var s = i.props.onSelectItem;
            typeof s == "function" && s(o, l);
          }
        }),
        Ie($e(i), "onSwipeStart", function () {
          i.setState({ swiping: !0 });
        }),
        Ie($e(i), "onSwipeEnd", function () {
          i.setState({ swiping: !1 });
        }),
        Ie($e(i), "onSwipeMove", function (o) {
          var l = o.x;
          if (!i.state.itemSize || !i.itemsWrapperRef || !i.state.visibleItems)
            return !1;
          var a = 0,
            s = vt.Children.count(i.props.children),
            u = -(i.state.firstItem * 100) / i.state.visibleItems,
            d = Math.max(s - i.state.visibleItems, 0),
            v = (-d * 100) / i.state.visibleItems;
          u === a && l > 0 && (l = 0), u === v && l < 0 && (l = 0);
          var g = i.itemsWrapperRef.clientWidth,
            y = u + 100 / (g / l);
          return (
            i.itemsListRef &&
              [
                "WebkitTransform",
                "MozTransform",
                "MsTransform",
                "OTransform",
                "transform",
                "msTransform",
              ].forEach(function (w) {
                i.itemsListRef.style[w] = (0, Bf.default)(y, "%", i.props.axis);
              }),
            !0
          );
        }),
        Ie($e(i), "slideRight", function (o) {
          i.moveTo(i.state.firstItem - (typeof o == "number" ? o : 1));
        }),
        Ie($e(i), "slideLeft", function (o) {
          i.moveTo(i.state.firstItem + (typeof o == "number" ? o : 1));
        }),
        Ie($e(i), "moveTo", function (o) {
          (o = o < 0 ? 0 : o),
            (o = o >= i.state.lastPosition ? i.state.lastPosition : o),
            i.setState({ firstItem: o });
        }),
        (i.state = {
          selectedItem: r.selectedItem,
          swiping: !1,
          showArrows: !1,
          firstItem: 0,
          visibleItems: 0,
          lastPosition: 0,
        }),
        i
      );
    }
    return (
      tS(n, [
        {
          key: "componentDidMount",
          value: function () {
            this.setupThumbs();
          },
        },
        {
          key: "componentDidUpdate",
          value: function (i) {
            this.props.selectedItem !== this.state.selectedItem &&
              this.setState({
                selectedItem: this.props.selectedItem,
                firstItem: this.getFirstItem(this.props.selectedItem),
              }),
              this.props.children !== i.children && this.updateSizes();
          },
        },
        {
          key: "componentWillUnmount",
          value: function () {
            this.destroyThumbs();
          },
        },
        {
          key: "setupThumbs",
          value: function () {
            (0, po.default)().addEventListener("resize", this.updateSizes),
              (0, po.default)().addEventListener(
                "DOMContentLoaded",
                this.updateSizes
              ),
              this.updateSizes();
          },
        },
        {
          key: "destroyThumbs",
          value: function () {
            (0, po.default)().removeEventListener("resize", this.updateSizes),
              (0, po.default)().removeEventListener(
                "DOMContentLoaded",
                this.updateSizes
              );
          },
        },
        {
          key: "getFirstItem",
          value: function (i) {
            var o = i;
            return (
              i >= this.state.lastPosition && (o = this.state.lastPosition),
              i < this.state.firstItem + this.state.visibleItems &&
                (o = this.state.firstItem),
              i < this.state.firstItem && (o = i),
              o
            );
          },
        },
        {
          key: "renderItems",
          value: function () {
            var i = this;
            return this.props.children.map(function (o, l) {
              var a = jn.default.ITEM(!1, l === i.state.selectedItem),
                s = {
                  key: l,
                  ref: function (d) {
                    return i.setThumbsRef(d, l);
                  },
                  className: a,
                  onClick: i.handleClickItem.bind(i, l, i.props.children[l]),
                  onKeyDown: i.handleClickItem.bind(i, l, i.props.children[l]),
                  "aria-label": ""
                    .concat(i.props.labels.item, " ")
                    .concat(l + 1),
                  style: { width: i.props.thumbWidth },
                };
              return vt.default.createElement(
                "li",
                Ds({}, s, { role: "button", tabIndex: 0 }),
                o
              );
            });
          },
        },
        {
          key: "render",
          value: function () {
            var i = this;
            if (!this.props.children) return null;
            var o = vt.Children.count(this.props.children) > 1,
              l = this.state.showArrows && this.state.firstItem > 0,
              a =
                this.state.showArrows &&
                this.state.firstItem < this.state.lastPosition,
              s = {},
              u = -this.state.firstItem * (this.state.itemSize || 0),
              d = (0, Bf.default)(u, "px", this.props.axis),
              v = this.props.transitionTime + "ms";
            return (
              (s = {
                WebkitTransform: d,
                MozTransform: d,
                MsTransform: d,
                OTransform: d,
                transform: d,
                msTransform: d,
                WebkitTransitionDuration: v,
                MozTransitionDuration: v,
                MsTransitionDuration: v,
                OTransitionDuration: v,
                transitionDuration: v,
                msTransitionDuration: v,
              }),
              vt.default.createElement(
                "div",
                { className: jn.default.CAROUSEL(!1) },
                vt.default.createElement(
                  "div",
                  {
                    className: jn.default.WRAPPER(!1),
                    ref: this.setItemsWrapperRef,
                  },
                  vt.default.createElement("button", {
                    type: "button",
                    className: jn.default.ARROW_PREV(!l),
                    onClick: function () {
                      return i.slideRight();
                    },
                    "aria-label": this.props.labels.leftArrow,
                  }),
                  o
                    ? vt.default.createElement(
                        Jw.default,
                        {
                          tagName: "ul",
                          className: jn.default.SLIDER(!1, this.state.swiping),
                          onSwipeLeft: this.slideLeft,
                          onSwipeRight: this.slideRight,
                          onSwipeMove: this.onSwipeMove,
                          onSwipeStart: this.onSwipeStart,
                          onSwipeEnd: this.onSwipeEnd,
                          style: s,
                          innerRef: this.setItemsListRef,
                          allowMouseEvents: this.props.emulateTouch,
                        },
                        this.renderItems()
                      )
                    : vt.default.createElement(
                        "ul",
                        {
                          className: jn.default.SLIDER(!1, this.state.swiping),
                          ref: function (y) {
                            return i.setItemsListRef(y);
                          },
                          style: s,
                        },
                        this.renderItems()
                      ),
                  vt.default.createElement("button", {
                    type: "button",
                    className: jn.default.ARROW_NEXT(!a),
                    onClick: function () {
                      return i.slideLeft();
                    },
                    "aria-label": this.props.labels.rightArrow,
                  })
                )
              )
            );
          },
        },
      ]),
      n
    );
  })(vt.Component);
Wi.default = Xu;
Ie(Xu, "displayName", "Thumbs");
Ie(Xu, "defaultProps", {
  axis: "horizontal",
  labels: {
    leftArrow: "previous slide / item",
    rightArrow: "next slide / item",
    item: "slide item",
  },
  selectedItem: 0,
  thumbWidth: 80,
  transitionTime: 350,
});
var Xl = {};
Object.defineProperty(Xl, "__esModule", { value: !0 });
Xl.default = void 0;
var aS = function () {
  return document;
};
Xl.default = aS;
var Ge = {};
Object.defineProperty(Ge, "__esModule", { value: !0 });
Ge.setPosition =
  Ge.getPosition =
  Ge.isKeyboardEvent =
  Ge.defaultStatusFormatter =
  Ge.noop =
    void 0;
var sS = C,
  uS = cS(Ir);
function cS(e) {
  return e && e.__esModule ? e : { default: e };
}
var fS = function () {};
Ge.noop = fS;
var dS = function (t, n) {
  return "".concat(t, " of ").concat(n);
};
Ge.defaultStatusFormatter = dS;
var pS = function (t) {
  return t ? t.hasOwnProperty("key") : !1;
};
Ge.isKeyboardEvent = pS;
var hS = function (t, n) {
  if ((n.infiniteLoop && ++t, t === 0)) return 0;
  var r = sS.Children.count(n.children);
  if (n.centerMode && n.axis === "horizontal") {
    var i = -t * n.centerSlidePercentage,
      o = r - 1;
    return (
      t && (t !== o || n.infiniteLoop)
        ? (i += (100 - n.centerSlidePercentage) / 2)
        : t === o && (i += 100 - n.centerSlidePercentage),
      i
    );
  }
  return -t * 100;
};
Ge.getPosition = hS;
var mS = function (t, n) {
  var r = {};
  return (
    [
      "WebkitTransform",
      "MozTransform",
      "MsTransform",
      "OTransform",
      "transform",
      "msTransform",
    ].forEach(function (i) {
      r[i] = (0, uS.default)(t, "%", n);
    }),
    r
  );
};
Ge.setPosition = mS;
var Ot = {};
Object.defineProperty(Ot, "__esModule", { value: !0 });
Ot.fadeAnimationHandler =
  Ot.slideStopSwipingHandler =
  Ot.slideSwipeAnimationHandler =
  Ot.slideAnimationHandler =
    void 0;
var am = C,
  vS = yS(Ir),
  Mt = Ge;
function yS(e) {
  return e && e.__esModule ? e : { default: e };
}
function Kf(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t &&
      (r = r.filter(function (i) {
        return Object.getOwnPropertyDescriptor(e, i).enumerable;
      })),
      n.push.apply(n, r);
  }
  return n;
}
function Ln(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? Kf(Object(n), !0).forEach(function (r) {
          gS(e, r, n[r]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
      : Kf(Object(n)).forEach(function (r) {
          Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
        });
  }
  return e;
}
function gS(e, t, n) {
  return (
    t in e
      ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = n),
    e
  );
}
var wS = function (t, n) {
  var r = {},
    i = n.selectedItem,
    o = i,
    l = am.Children.count(t.children) - 1,
    a = t.infiniteLoop && (i < 0 || i > l);
  if (a)
    return (
      o < 0
        ? t.centerMode && t.centerSlidePercentage && t.axis === "horizontal"
          ? (r.itemListStyle = (0, Mt.setPosition)(
              -(l + 2) * t.centerSlidePercentage -
                (100 - t.centerSlidePercentage) / 2,
              t.axis
            ))
          : (r.itemListStyle = (0, Mt.setPosition)(-(l + 2) * 100, t.axis))
        : o > l && (r.itemListStyle = (0, Mt.setPosition)(0, t.axis)),
      r
    );
  var s = (0, Mt.getPosition)(i, t),
    u = (0, vS.default)(s, "%", t.axis),
    d = t.transitionTime + "ms";
  return (
    (r.itemListStyle = {
      WebkitTransform: u,
      msTransform: u,
      OTransform: u,
      transform: u,
    }),
    n.swiping ||
      (r.itemListStyle = Ln(
        Ln({}, r.itemListStyle),
        {},
        {
          WebkitTransitionDuration: d,
          MozTransitionDuration: d,
          OTransitionDuration: d,
          transitionDuration: d,
          msTransitionDuration: d,
        }
      )),
    r
  );
};
Ot.slideAnimationHandler = wS;
var SS = function (t, n, r, i) {
  var o = {},
    l = n.axis === "horizontal",
    a = am.Children.count(n.children),
    s = 0,
    u = (0, Mt.getPosition)(r.selectedItem, n),
    d = n.infiniteLoop
      ? (0, Mt.getPosition)(a - 1, n) - 100
      : (0, Mt.getPosition)(a - 1, n),
    v = l ? t.x : t.y,
    g = v;
  u === s && v > 0 && (g = 0), u === d && v < 0 && (g = 0);
  var y = u + 100 / (r.itemSize / g),
    w = Math.abs(v) > n.swipeScrollTolerance;
  return (
    n.infiniteLoop &&
      w &&
      (r.selectedItem === 0 && y > -100
        ? (y -= a * 100)
        : r.selectedItem === a - 1 && y < -a * 100 && (y += a * 100)),
    (!n.preventMovementUntilSwipeScrollTolerance ||
      w ||
      r.swipeMovementStarted) &&
      (r.swipeMovementStarted || i({ swipeMovementStarted: !0 }),
      (o.itemListStyle = (0, Mt.setPosition)(y, n.axis))),
    w && !r.cancelClick && i({ cancelClick: !0 }),
    o
  );
};
Ot.slideSwipeAnimationHandler = SS;
var xS = function (t, n) {
  var r = (0, Mt.getPosition)(n.selectedItem, t),
    i = (0, Mt.setPosition)(r, t.axis);
  return { itemListStyle: i };
};
Ot.slideStopSwipingHandler = xS;
var ES = function (t, n) {
  var r = t.transitionTime + "ms",
    i = "ease-in-out",
    o = {
      position: "absolute",
      display: "block",
      zIndex: -2,
      minHeight: "100%",
      opacity: 0,
      top: 0,
      right: 0,
      left: 0,
      bottom: 0,
      transitionTimingFunction: i,
      msTransitionTimingFunction: i,
      MozTransitionTimingFunction: i,
      WebkitTransitionTimingFunction: i,
      OTransitionTimingFunction: i,
    };
  return (
    n.swiping ||
      (o = Ln(
        Ln({}, o),
        {},
        {
          WebkitTransitionDuration: r,
          MozTransitionDuration: r,
          OTransitionDuration: r,
          transitionDuration: r,
          msTransitionDuration: r,
        }
      )),
    {
      slideStyle: o,
      selectedStyle: Ln(Ln({}, o), {}, { opacity: 1, position: "relative" }),
      prevStyle: Ln({}, o),
    }
  );
};
Ot.fadeAnimationHandler = ES;
Object.defineProperty(Ql, "__esModule", { value: !0 });
Ql.default = void 0;
var Y = _S(C),
  RS = Bi(qu),
  bt = Bi(bi),
  CS = Bi(Wi),
  ho = Bi(Xl),
  mo = Bi(Hi),
  ei = Ge,
  rl = Ot;
function Bi(e) {
  return e && e.__esModule ? e : { default: e };
}
function sm() {
  if (typeof WeakMap != "function") return null;
  var e = new WeakMap();
  return (
    (sm = function () {
      return e;
    }),
    e
  );
}
function _S(e) {
  if (e && e.__esModule) return e;
  if (e === null || (pi(e) !== "object" && typeof e != "function"))
    return { default: e };
  var t = sm();
  if (t && t.has(e)) return t.get(e);
  var n = {},
    r = Object.defineProperty && Object.getOwnPropertyDescriptor;
  for (var i in e)
    if (Object.prototype.hasOwnProperty.call(e, i)) {
      var o = r ? Object.getOwnPropertyDescriptor(e, i) : null;
      o && (o.get || o.set) ? Object.defineProperty(n, i, o) : (n[i] = e[i]);
    }
  return (n.default = e), t && t.set(e, n), n;
}
function pi(e) {
  "@babel/helpers - typeof";
  return (
    typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
      ? (pi = function (n) {
          return typeof n;
        })
      : (pi = function (n) {
          return n &&
            typeof Symbol == "function" &&
            n.constructor === Symbol &&
            n !== Symbol.prototype
            ? "symbol"
            : typeof n;
        }),
    pi(e)
  );
}
function Fs() {
  return (
    (Fs =
      Object.assign ||
      function (e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = arguments[t];
          for (var r in n)
            Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
        }
        return e;
      }),
    Fs.apply(this, arguments)
  );
}
function Qf(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t &&
      (r = r.filter(function (i) {
        return Object.getOwnPropertyDescriptor(e, i).enumerable;
      })),
      n.push.apply(n, r);
  }
  return n;
}
function yt(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? Qf(Object(n), !0).forEach(function (r) {
          H(e, r, n[r]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
      : Qf(Object(n)).forEach(function (r) {
          Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
        });
  }
  return e;
}
function PS(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function qf(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    (r.enumerable = r.enumerable || !1),
      (r.configurable = !0),
      "value" in r && (r.writable = !0),
      Object.defineProperty(e, r.key, r);
  }
}
function kS(e, t, n) {
  return t && qf(e.prototype, t), n && qf(e, n), e;
}
function NS(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  (e.prototype = Object.create(t && t.prototype, {
    constructor: { value: e, writable: !0, configurable: !0 },
  })),
    t && $s(e, t);
}
function $s(e, t) {
  return (
    ($s =
      Object.setPrototypeOf ||
      function (r, i) {
        return (r.__proto__ = i), r;
      }),
    $s(e, t)
  );
}
function TS(e) {
  var t = OS();
  return function () {
    var r = il(e),
      i;
    if (t) {
      var o = il(this).constructor;
      i = Reflect.construct(r, arguments, o);
    } else i = r.apply(this, arguments);
    return jS(this, i);
  };
}
function jS(e, t) {
  return t && (pi(t) === "object" || typeof t == "function") ? t : B(e);
}
function B(e) {
  if (e === void 0)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called"
    );
  return e;
}
function OS() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
    return !1;
  if (typeof Proxy == "function") return !0;
  try {
    return (
      Date.prototype.toString.call(Reflect.construct(Date, [], function () {})),
      !0
    );
  } catch {
    return !1;
  }
}
function il(e) {
  return (
    (il = Object.setPrototypeOf
      ? Object.getPrototypeOf
      : function (n) {
          return n.__proto__ || Object.getPrototypeOf(n);
        }),
    il(e)
  );
}
function H(e, t, n) {
  return (
    t in e
      ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = n),
    e
  );
}
var Gu = (function (e) {
  NS(n, e);
  var t = TS(n);
  function n(r) {
    var i;
    PS(this, n),
      (i = t.call(this, r)),
      H(B(i), "thumbsRef", void 0),
      H(B(i), "carouselWrapperRef", void 0),
      H(B(i), "listRef", void 0),
      H(B(i), "itemsRef", void 0),
      H(B(i), "timer", void 0),
      H(B(i), "animationHandler", void 0),
      H(B(i), "setThumbsRef", function (l) {
        i.thumbsRef = l;
      }),
      H(B(i), "setCarouselWrapperRef", function (l) {
        i.carouselWrapperRef = l;
      }),
      H(B(i), "setListRef", function (l) {
        i.listRef = l;
      }),
      H(B(i), "setItemsRef", function (l, a) {
        i.itemsRef || (i.itemsRef = []), (i.itemsRef[a] = l);
      }),
      H(B(i), "autoPlay", function () {
        Y.Children.count(i.props.children) <= 1 ||
          (i.clearAutoPlay(),
          i.props.autoPlay &&
            (i.timer = setTimeout(function () {
              i.increment();
            }, i.props.interval)));
      }),
      H(B(i), "clearAutoPlay", function () {
        i.timer && clearTimeout(i.timer);
      }),
      H(B(i), "resetAutoPlay", function () {
        i.clearAutoPlay(), i.autoPlay();
      }),
      H(B(i), "stopOnHover", function () {
        i.setState({ isMouseEntered: !0 }, i.clearAutoPlay);
      }),
      H(B(i), "startOnLeave", function () {
        i.setState({ isMouseEntered: !1 }, i.autoPlay);
      }),
      H(B(i), "isFocusWithinTheCarousel", function () {
        return i.carouselWrapperRef
          ? !!(
              (0, ho.default)().activeElement === i.carouselWrapperRef ||
              i.carouselWrapperRef.contains((0, ho.default)().activeElement)
            )
          : !1;
      }),
      H(B(i), "navigateWithKeyboard", function (l) {
        if (i.isFocusWithinTheCarousel()) {
          var a = i.props.axis,
            s = a === "horizontal",
            u = { ArrowUp: 38, ArrowRight: 39, ArrowDown: 40, ArrowLeft: 37 },
            d = s ? u.ArrowRight : u.ArrowDown,
            v = s ? u.ArrowLeft : u.ArrowUp;
          d === l.keyCode ? i.increment() : v === l.keyCode && i.decrement();
        }
      }),
      H(B(i), "updateSizes", function () {
        if (!(!i.state.initialized || !i.itemsRef || i.itemsRef.length === 0)) {
          var l = i.props.axis === "horizontal",
            a = i.itemsRef[0];
          if (a) {
            var s = l ? a.clientWidth : a.clientHeight;
            i.setState({ itemSize: s }),
              i.thumbsRef && i.thumbsRef.updateSizes();
          }
        }
      }),
      H(B(i), "setMountState", function () {
        i.setState({ hasMount: !0 }), i.updateSizes();
      }),
      H(B(i), "handleClickItem", function (l, a) {
        if (Y.Children.count(i.props.children) !== 0) {
          if (i.state.cancelClick) {
            i.setState({ cancelClick: !1 });
            return;
          }
          i.props.onClickItem(l, a),
            l !== i.state.selectedItem && i.setState({ selectedItem: l });
        }
      }),
      H(B(i), "handleOnChange", function (l, a) {
        Y.Children.count(i.props.children) <= 1 || i.props.onChange(l, a);
      }),
      H(B(i), "handleClickThumb", function (l, a) {
        i.props.onClickThumb(l, a), i.moveTo(l);
      }),
      H(B(i), "onSwipeStart", function (l) {
        i.setState({ swiping: !0 }), i.props.onSwipeStart(l);
      }),
      H(B(i), "onSwipeEnd", function (l) {
        i.setState({ swiping: !1, cancelClick: !1, swipeMovementStarted: !1 }),
          i.props.onSwipeEnd(l),
          i.clearAutoPlay(),
          i.state.autoPlay && i.autoPlay();
      }),
      H(B(i), "onSwipeMove", function (l, a) {
        i.props.onSwipeMove(a);
        var s = i.props.swipeAnimationHandler(
          l,
          i.props,
          i.state,
          i.setState.bind(B(i))
        );
        return i.setState(yt({}, s)), !!Object.keys(s).length;
      }),
      H(B(i), "decrement", function () {
        var l =
          arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 1;
        i.moveTo(i.state.selectedItem - (typeof l == "number" ? l : 1));
      }),
      H(B(i), "increment", function () {
        var l =
          arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 1;
        i.moveTo(i.state.selectedItem + (typeof l == "number" ? l : 1));
      }),
      H(B(i), "moveTo", function (l) {
        if (typeof l == "number") {
          var a = Y.Children.count(i.props.children) - 1;
          l < 0 && (l = i.props.infiniteLoop ? a : 0),
            l > a && (l = i.props.infiniteLoop ? 0 : a),
            i.selectItem({ selectedItem: l }),
            i.state.autoPlay &&
              i.state.isMouseEntered === !1 &&
              i.resetAutoPlay();
        }
      }),
      H(B(i), "onClickNext", function () {
        i.increment(1);
      }),
      H(B(i), "onClickPrev", function () {
        i.decrement(1);
      }),
      H(B(i), "onSwipeForward", function () {
        i.increment(1), i.props.emulateTouch && i.setState({ cancelClick: !0 });
      }),
      H(B(i), "onSwipeBackwards", function () {
        i.decrement(1), i.props.emulateTouch && i.setState({ cancelClick: !0 });
      }),
      H(B(i), "changeItem", function (l) {
        return function (a) {
          (!(0, ei.isKeyboardEvent)(a) || a.key === "Enter") && i.moveTo(l);
        };
      }),
      H(B(i), "selectItem", function (l) {
        i.setState(yt({ previousItem: i.state.selectedItem }, l), function () {
          i.setState(i.animationHandler(i.props, i.state));
        }),
          i.handleOnChange(
            l.selectedItem,
            Y.Children.toArray(i.props.children)[l.selectedItem]
          );
      }),
      H(B(i), "getInitialImage", function () {
        var l = i.props.selectedItem,
          a = i.itemsRef && i.itemsRef[l],
          s = (a && a.getElementsByTagName("img")) || [];
        return s[0];
      }),
      H(B(i), "getVariableItemHeight", function (l) {
        var a = i.itemsRef && i.itemsRef[l];
        if (i.state.hasMount && a && a.children.length) {
          var s = a.children[0].getElementsByTagName("img") || [];
          if (s.length > 0) {
            var u = s[0];
            if (!u.complete) {
              var d = function y() {
                i.forceUpdate(), u.removeEventListener("load", y);
              };
              u.addEventListener("load", d);
            }
          }
          var v = s[0] || a.children[0],
            g = v.clientHeight;
          return g > 0 ? g : null;
        }
        return null;
      });
    var o = {
      initialized: !1,
      previousItem: r.selectedItem,
      selectedItem: r.selectedItem,
      hasMount: !1,
      isMouseEntered: !1,
      autoPlay: r.autoPlay,
      swiping: !1,
      swipeMovementStarted: !1,
      cancelClick: !1,
      itemSize: 1,
      itemListStyle: {},
      slideStyle: {},
      selectedStyle: {},
      prevStyle: {},
    };
    return (
      (i.animationHandler =
        (typeof r.animationHandler == "function" && r.animationHandler) ||
        (r.animationHandler === "fade" && rl.fadeAnimationHandler) ||
        rl.slideAnimationHandler),
      (i.state = yt(yt({}, o), i.animationHandler(r, o))),
      i
    );
  }
  return (
    kS(n, [
      {
        key: "componentDidMount",
        value: function () {
          this.props.children && this.setupCarousel();
        },
      },
      {
        key: "componentDidUpdate",
        value: function (i, o) {
          !i.children &&
            this.props.children &&
            !this.state.initialized &&
            this.setupCarousel(),
            !i.autoFocus && this.props.autoFocus && this.forceFocus(),
            o.swiping &&
              !this.state.swiping &&
              this.setState(
                yt({}, this.props.stopSwipingHandler(this.props, this.state))
              ),
            (i.selectedItem !== this.props.selectedItem ||
              i.centerMode !== this.props.centerMode) &&
              (this.updateSizes(), this.moveTo(this.props.selectedItem)),
            i.autoPlay !== this.props.autoPlay &&
              (this.props.autoPlay
                ? this.setupAutoPlay()
                : this.destroyAutoPlay(),
              this.setState({ autoPlay: this.props.autoPlay }));
        },
      },
      {
        key: "componentWillUnmount",
        value: function () {
          this.destroyCarousel();
        },
      },
      {
        key: "setupCarousel",
        value: function () {
          var i = this;
          this.bindEvents(),
            this.state.autoPlay &&
              Y.Children.count(this.props.children) > 1 &&
              this.setupAutoPlay(),
            this.props.autoFocus && this.forceFocus(),
            this.setState({ initialized: !0 }, function () {
              var o = i.getInitialImage();
              o && !o.complete
                ? o.addEventListener("load", i.setMountState)
                : i.setMountState();
            });
        },
      },
      {
        key: "destroyCarousel",
        value: function () {
          this.state.initialized &&
            (this.unbindEvents(), this.destroyAutoPlay());
        },
      },
      {
        key: "setupAutoPlay",
        value: function () {
          this.autoPlay();
          var i = this.carouselWrapperRef;
          this.props.stopOnHover &&
            i &&
            (i.addEventListener("mouseenter", this.stopOnHover),
            i.addEventListener("mouseleave", this.startOnLeave));
        },
      },
      {
        key: "destroyAutoPlay",
        value: function () {
          this.clearAutoPlay();
          var i = this.carouselWrapperRef;
          this.props.stopOnHover &&
            i &&
            (i.removeEventListener("mouseenter", this.stopOnHover),
            i.removeEventListener("mouseleave", this.startOnLeave));
        },
      },
      {
        key: "bindEvents",
        value: function () {
          (0, mo.default)().addEventListener("resize", this.updateSizes),
            (0, mo.default)().addEventListener(
              "DOMContentLoaded",
              this.updateSizes
            ),
            this.props.useKeyboardArrows &&
              (0, ho.default)().addEventListener(
                "keydown",
                this.navigateWithKeyboard
              );
        },
      },
      {
        key: "unbindEvents",
        value: function () {
          (0, mo.default)().removeEventListener("resize", this.updateSizes),
            (0, mo.default)().removeEventListener(
              "DOMContentLoaded",
              this.updateSizes
            );
          var i = this.getInitialImage();
          i && i.removeEventListener("load", this.setMountState),
            this.props.useKeyboardArrows &&
              (0, ho.default)().removeEventListener(
                "keydown",
                this.navigateWithKeyboard
              );
        },
      },
      {
        key: "forceFocus",
        value: function () {
          var i;
          (i = this.carouselWrapperRef) === null || i === void 0 || i.focus();
        },
      },
      {
        key: "renderItems",
        value: function (i) {
          var o = this;
          return this.props.children
            ? Y.Children.map(this.props.children, function (l, a) {
                var s = a === o.state.selectedItem,
                  u = a === o.state.previousItem,
                  d =
                    (s && o.state.selectedStyle) ||
                    (u && o.state.prevStyle) ||
                    o.state.slideStyle ||
                    {};
                o.props.centerMode &&
                  o.props.axis === "horizontal" &&
                  (d = yt(
                    yt({}, d),
                    {},
                    { minWidth: o.props.centerSlidePercentage + "%" }
                  )),
                  o.state.swiping &&
                    o.state.swipeMovementStarted &&
                    (d = yt(yt({}, d), {}, { pointerEvents: "none" }));
                var v = {
                  ref: function (y) {
                    return o.setItemsRef(y, a);
                  },
                  key: "itemKey" + a + (i ? "clone" : ""),
                  className: bt.default.ITEM(
                    !0,
                    a === o.state.selectedItem,
                    a === o.state.previousItem
                  ),
                  onClick: o.handleClickItem.bind(o, a, l),
                  style: d,
                };
                return Y.default.createElement(
                  "li",
                  v,
                  o.props.renderItem(l, {
                    isSelected: a === o.state.selectedItem,
                    isPrevious: a === o.state.previousItem,
                  })
                );
              })
            : [];
        },
      },
      {
        key: "renderControls",
        value: function () {
          var i = this,
            o = this.props,
            l = o.showIndicators,
            a = o.labels,
            s = o.renderIndicator,
            u = o.children;
          return l
            ? Y.default.createElement(
                "ul",
                { className: "control-dots" },
                Y.Children.map(u, function (d, v) {
                  return (
                    s &&
                    s(i.changeItem(v), v === i.state.selectedItem, v, a.item)
                  );
                })
              )
            : null;
        },
      },
      {
        key: "renderStatus",
        value: function () {
          return this.props.showStatus
            ? Y.default.createElement(
                "p",
                { className: "carousel-status" },
                this.props.statusFormatter(
                  this.state.selectedItem + 1,
                  Y.Children.count(this.props.children)
                )
              )
            : null;
        },
      },
      {
        key: "renderThumbs",
        value: function () {
          return !this.props.showThumbs ||
            !this.props.children ||
            Y.Children.count(this.props.children) === 0
            ? null
            : Y.default.createElement(
                CS.default,
                {
                  ref: this.setThumbsRef,
                  onSelectItem: this.handleClickThumb,
                  selectedItem: this.state.selectedItem,
                  transitionTime: this.props.transitionTime,
                  thumbWidth: this.props.thumbWidth,
                  labels: this.props.labels,
                  emulateTouch: this.props.emulateTouch,
                },
                this.props.renderThumbs(this.props.children)
              );
        },
      },
      {
        key: "render",
        value: function () {
          var i = this;
          if (
            !this.props.children ||
            Y.Children.count(this.props.children) === 0
          )
            return null;
          var o =
              this.props.swipeable && Y.Children.count(this.props.children) > 1,
            l = this.props.axis === "horizontal",
            a =
              this.props.showArrows &&
              Y.Children.count(this.props.children) > 1,
            s =
              (a && (this.state.selectedItem > 0 || this.props.infiniteLoop)) ||
              !1,
            u =
              (a &&
                (this.state.selectedItem <
                  Y.Children.count(this.props.children) - 1 ||
                  this.props.infiniteLoop)) ||
              !1,
            d = this.renderItems(!0),
            v = d.shift(),
            g = d.pop(),
            y = {
              className: bt.default.SLIDER(!0, this.state.swiping),
              onSwipeMove: this.onSwipeMove,
              onSwipeStart: this.onSwipeStart,
              onSwipeEnd: this.onSwipeEnd,
              style: this.state.itemListStyle,
              tolerance: this.props.swipeScrollTolerance,
            },
            w = {};
          if (l) {
            if (
              ((y.onSwipeLeft = this.onSwipeForward),
              (y.onSwipeRight = this.onSwipeBackwards),
              this.props.dynamicHeight)
            ) {
              var x = this.getVariableItemHeight(this.state.selectedItem);
              w.height = x || "auto";
            }
          } else
            (y.onSwipeUp =
              this.props.verticalSwipe === "natural"
                ? this.onSwipeBackwards
                : this.onSwipeForward),
              (y.onSwipeDown =
                this.props.verticalSwipe === "natural"
                  ? this.onSwipeForward
                  : this.onSwipeBackwards),
              (y.style = yt(
                yt({}, y.style),
                {},
                { height: this.state.itemSize }
              )),
              (w.height = this.state.itemSize);
          return Y.default.createElement(
            "div",
            {
              "aria-label": this.props.ariaLabel,
              className: bt.default.ROOT(this.props.className),
              ref: this.setCarouselWrapperRef,
              tabIndex: this.props.useKeyboardArrows ? 0 : void 0,
            },
            Y.default.createElement(
              "div",
              {
                className: bt.default.CAROUSEL(!0),
                style: { width: this.props.width },
              },
              this.renderControls(),
              this.props.renderArrowPrev(
                this.onClickPrev,
                s,
                this.props.labels.leftArrow
              ),
              Y.default.createElement(
                "div",
                {
                  className: bt.default.WRAPPER(!0, this.props.axis),
                  style: w,
                },
                o
                  ? Y.default.createElement(
                      RS.default,
                      Fs({ tagName: "ul", innerRef: this.setListRef }, y, {
                        allowMouseEvents: this.props.emulateTouch,
                      }),
                      this.props.infiniteLoop && g,
                      this.renderItems(),
                      this.props.infiniteLoop && v
                    )
                  : Y.default.createElement(
                      "ul",
                      {
                        className: bt.default.SLIDER(!0, this.state.swiping),
                        ref: function (m) {
                          return i.setListRef(m);
                        },
                        style: this.state.itemListStyle || {},
                      },
                      this.props.infiniteLoop && g,
                      this.renderItems(),
                      this.props.infiniteLoop && v
                    )
              ),
              this.props.renderArrowNext(
                this.onClickNext,
                u,
                this.props.labels.rightArrow
              ),
              this.renderStatus()
            ),
            this.renderThumbs()
          );
        },
      },
    ]),
    n
  );
})(Y.default.Component);
Ql.default = Gu;
H(Gu, "displayName", "Carousel");
H(Gu, "defaultProps", {
  ariaLabel: void 0,
  axis: "horizontal",
  centerSlidePercentage: 80,
  interval: 3e3,
  labels: {
    leftArrow: "previous slide / item",
    rightArrow: "next slide / item",
    item: "slide item",
  },
  onClickItem: ei.noop,
  onClickThumb: ei.noop,
  onChange: ei.noop,
  onSwipeStart: function () {},
  onSwipeEnd: function () {},
  onSwipeMove: function () {
    return !1;
  },
  preventMovementUntilSwipeScrollTolerance: !1,
  renderArrowPrev: function (t, n, r) {
    return Y.default.createElement("button", {
      type: "button",
      "aria-label": r,
      className: bt.default.ARROW_PREV(!n),
      onClick: t,
    });
  },
  renderArrowNext: function (t, n, r) {
    return Y.default.createElement("button", {
      type: "button",
      "aria-label": r,
      className: bt.default.ARROW_NEXT(!n),
      onClick: t,
    });
  },
  renderIndicator: function (t, n, r, i) {
    return Y.default.createElement("li", {
      className: bt.default.DOT(n),
      onClick: t,
      onKeyDown: t,
      value: r,
      key: r,
      role: "button",
      tabIndex: 0,
      "aria-label": "".concat(i, " ").concat(r + 1),
    });
  },
  renderItem: function (t) {
    return t;
  },
  renderThumbs: function (t) {
    var n = Y.Children.map(t, function (r) {
      var i = r;
      if (
        (r.type !== "img" &&
          (i = Y.Children.toArray(r.props.children).find(function (o) {
            return o.type === "img";
          })),
        !!i)
      )
        return i;
    });
    return n.filter(function (r) {
      return r;
    }).length === 0
      ? (console.warn(
          "No images found! Can't build the thumb list without images. If you don't need thumbs, set showThumbs={false} in the Carousel. Note that it's not possible to get images rendered inside custom components. More info at https://github.com/leandrowd/react-responsive-carousel/blob/master/TROUBLESHOOTING.md"
        ),
        [])
      : n;
  },
  statusFormatter: ei.defaultStatusFormatter,
  selectedItem: 0,
  showArrows: !0,
  showIndicators: !0,
  showStatus: !0,
  showThumbs: !0,
  stopOnHover: !0,
  swipeScrollTolerance: 5,
  swipeable: !0,
  transitionTime: 350,
  verticalSwipe: "standard",
  width: "100%",
  animationHandler: "slide",
  swipeAnimationHandler: rl.slideSwipeAnimationHandler,
  stopSwipingHandler: rl.slideStopSwipingHandler,
});
var MS = {};
(function (e) {
  Object.defineProperty(e, "__esModule", { value: !0 }),
    Object.defineProperty(e, "Carousel", {
      enumerable: !0,
      get: function () {
        return t.default;
      },
    }),
    Object.defineProperty(e, "CarouselProps", {
      enumerable: !0,
      get: function () {
        return n.CarouselProps;
      },
    }),
    Object.defineProperty(e, "Thumbs", {
      enumerable: !0,
      get: function () {
        return r.default;
      },
    });
  var t = i(Ql),
    n = MS,
    r = i(Wi);
  function i(o) {
    return o && o.__esModule ? o : { default: o };
  }
})(em);
var um = {},
  Ju = {},
  Zu = {};
Object.defineProperty(Zu, "__esModule", { value: !0 });
var LS = (function () {
    function e(t, n) {
      for (var r = 0; r < n.length; r++) {
        var i = n[r];
        (i.enumerable = i.enumerable || !1),
          (i.configurable = !0),
          "value" in i && (i.writable = !0),
          Object.defineProperty(t, i.key, i);
      }
    }
    return function (t, n, r) {
      return n && e(t.prototype, n), r && e(t, r), t;
    };
  })(),
  IS = C,
  vo = ec(IS),
  DS = om,
  zS = ec(DS),
  FS = Yu,
  we = ec(FS);
function ec(e) {
  return e && e.__esModule ? e : { default: e };
}
function $S(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function US(e, t) {
  if (!e)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called"
    );
  return t && (typeof t == "object" || typeof t == "function") ? t : e;
}
function AS(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError(
      "Super expression must either be null or a function, not " + typeof t
    );
  (e.prototype = Object.create(t && t.prototype, {
    constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 },
  })),
    t &&
      (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : (e.__proto__ = t));
}
var cm = (function (e) {
  AS(t, e);
  function t() {
    return (
      $S(this, t),
      US(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments))
    );
  }
  return (
    LS(t, [
      {
        key: "render",
        value: function () {
          var r = this.props,
            i = r.changeRating,
            o = r.hoverOverStar,
            l = r.unHoverOverStar,
            a = r.svgIconViewBox,
            s = r.svgIconPath;
          return vo.default.createElement(
            "div",
            {
              className: "star-container",
              style: this.starContainerStyle,
              onMouseEnter: o,
              onMouseLeave: l,
              onClick: i,
            },
            vo.default.createElement(
              "svg",
              {
                viewBox: a,
                className: this.starClasses,
                style: this.starSvgStyle,
              },
              vo.default.createElement("path", {
                className: "star",
                style: this.pathStyle,
                d: s,
              })
            )
          );
        },
      },
      {
        key: "starContainerStyle",
        get: function () {
          var r = this.props,
            i = r.changeRating,
            o = r.starSpacing,
            l = r.isFirstStar,
            a = r.isLastStar,
            s = r.ignoreInlineStyles,
            u = {
              position: "relative",
              display: "inline-block",
              verticalAlign: "middle",
              paddingLeft: l ? void 0 : o,
              paddingRight: a ? void 0 : o,
              cursor: i ? "pointer" : void 0,
            };
          return s ? {} : u;
        },
      },
      {
        key: "starSvgStyle",
        get: function () {
          var r = this.props,
            i = r.ignoreInlineStyles,
            o = r.isCurrentHoveredStar,
            l = r.starDimension,
            a = {
              width: l,
              height: l,
              transition: "transform .2s ease-in-out",
              transform: o ? "scale(1.1)" : void 0,
            };
          return i ? {} : a;
        },
      },
      {
        key: "pathStyle",
        get: function () {
          var r = this.props,
            i = r.isStarred,
            o = r.isPartiallyFullStar,
            l = r.isHovered,
            a = r.hoverMode,
            s = r.starEmptyColor,
            u = r.starRatedColor,
            d = r.starHoverColor,
            v = r.gradientPathName,
            g = r.fillId,
            y = r.ignoreInlineStyles,
            w = void 0;
          a
            ? l
              ? (w = d)
              : (w = s)
            : o
            ? (w = "url('" + v + "#" + g + "')")
            : i
            ? (w = u)
            : (w = s);
          var x = { fill: w, transition: "fill .2s ease-in-out" };
          return y ? {} : x;
        },
      },
      {
        key: "starClasses",
        get: function () {
          var r = this.props,
            i = r.isSelected,
            o = r.isPartiallyFullStar,
            l = r.isHovered,
            a = r.isCurrentHoveredStar,
            s = r.ignoreInlineStyles,
            u = (0, zS.default)({
              "widget-svg": !0,
              "widget-selected": i,
              "multi-widget-selected": o,
              hovered: l,
              "current-hovered": a,
            });
          return s ? {} : u;
        },
      },
    ]),
    t
  );
})(vo.default.Component);
cm.propTypes = {
  fillId: we.default.string.isRequired,
  changeRating: we.default.func,
  hoverOverStar: we.default.func,
  unHoverOverStar: we.default.func,
  isStarred: we.default.bool.isRequired,
  isPartiallyFullStar: we.default.bool.isRequired,
  isHovered: we.default.bool.isRequired,
  hoverMode: we.default.bool.isRequired,
  isCurrentHoveredStar: we.default.bool.isRequired,
  isFirstStar: we.default.bool.isRequired,
  isLastStar: we.default.bool.isRequired,
  starDimension: we.default.string.isRequired,
  starSpacing: we.default.string.isRequired,
  starHoverColor: we.default.string.isRequired,
  starRatedColor: we.default.string.isRequired,
  starEmptyColor: we.default.string.isRequired,
  gradientPathName: we.default.string.isRequired,
  ignoreInlineStyles: we.default.bool.isRequired,
  svgIconPath: we.default.string.isRequired,
  svgIconViewBox: we.default.string.isRequired,
};
Zu.default = cm;
Object.defineProperty(Ju, "__esModule", { value: !0 });
var bS = (function () {
    function e(t, n) {
      for (var r = 0; r < n.length; r++) {
        var i = n[r];
        (i.enumerable = i.enumerable || !1),
          (i.configurable = !0),
          "value" in i && (i.writable = !0),
          Object.defineProperty(t, i.key, i);
      }
    }
    return function (t, n, r) {
      return n && e(t.prototype, n), r && e(t, r), t;
    };
  })(),
  WS = C,
  Nt = tc(WS),
  HS = Yu,
  Ye = tc(HS),
  BS = Zu,
  VS = tc(BS);
function tc(e) {
  return e && e.__esModule ? e : { default: e };
}
function KS(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function Yf(e, t) {
  if (!e)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called"
    );
  return t && (typeof t == "object" || typeof t == "function") ? t : e;
}
function QS(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError(
      "Super expression must either be null or a function, not " + typeof t
    );
  (e.prototype = Object.create(t && t.prototype, {
    constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 },
  })),
    t &&
      (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : (e.__proto__ = t));
}
var nc = (function (e) {
  QS(t, e);
  function t() {
    var n, r, i, o;
    KS(this, t);
    for (var l = arguments.length, a = Array(l), s = 0; s < l; s++)
      a[s] = arguments[s];
    return (
      (o =
        ((r =
          ((i = Yf(
            this,
            (n = t.__proto__ || Object.getPrototypeOf(t)).call.apply(
              n,
              [this].concat(a)
            )
          )),
          i)),
        (i.state = { highestStarHovered: -1 / 0 }),
        (i.fillId = "starGrad" + Math.random().toFixed(15).slice(2)),
        (i.hoverOverStar = function (u) {
          return function () {
            i.setState({ highestStarHovered: u });
          };
        }),
        (i.unHoverOverStar = function () {
          i.setState({ highestStarHovered: -1 / 0 });
        }),
        r)),
      Yf(i, o)
    );
  }
  return (
    bS(t, [
      {
        key: "stopColorStyle",
        value: function (r) {
          var i = { stopColor: r, stopOpacity: "1" };
          return this.props.ignoreInlineStyles ? {} : i;
        },
      },
      {
        key: "render",
        value: function () {
          var r = this.props,
            i = r.starRatedColor,
            o = r.starEmptyColor;
          return Nt.default.createElement(
            "div",
            {
              className: "star-ratings",
              title: this.titleText,
              style: this.starRatingsStyle,
            },
            Nt.default.createElement(
              "svg",
              { className: "star-grad", style: this.starGradientStyle },
              Nt.default.createElement(
                "defs",
                null,
                Nt.default.createElement(
                  "linearGradient",
                  { id: this.fillId, x1: "0%", y1: "0%", x2: "100%", y2: "0%" },
                  Nt.default.createElement("stop", {
                    offset: "0%",
                    className: "stop-color-first",
                    style: this.stopColorStyle(i),
                  }),
                  Nt.default.createElement("stop", {
                    offset: this.offsetValue,
                    className: "stop-color-first",
                    style: this.stopColorStyle(i),
                  }),
                  Nt.default.createElement("stop", {
                    offset: this.offsetValue,
                    className: "stop-color-final",
                    style: this.stopColorStyle(o),
                  }),
                  Nt.default.createElement("stop", {
                    offset: "100%",
                    className: "stop-color-final",
                    style: this.stopColorStyle(o),
                  })
                )
              )
            ),
            this.renderStars
          );
        },
      },
      {
        key: "starRatingsStyle",
        get: function () {
          var r = {
            position: "relative",
            boxSizing: "border-box",
            display: "inline-block",
          };
          return this.props.ignoreInlineStyles ? {} : r;
        },
      },
      {
        key: "starGradientStyle",
        get: function () {
          var r = {
            position: "absolute",
            zIndex: "0",
            width: "0",
            height: "0",
            visibility: "hidden",
          };
          return this.props.ignoreInlineStyles ? {} : r;
        },
      },
      {
        key: "titleText",
        get: function () {
          var r = this.props,
            i = r.typeOfWidget,
            o = r.rating,
            l = this.state.highestStarHovered,
            a = l > 0 ? l : o,
            s = parseFloat(a.toFixed(2)).toString();
          Number.isInteger(a) && (s = String(a));
          var u = i + "s";
          return s === "1" && (u = i), s + " " + u;
        },
      },
      {
        key: "offsetValue",
        get: function () {
          var r = this.props.rating,
            i = Number.isInteger(r),
            o = "0%";
          if (!i) {
            var l = r.toFixed(2).split(".")[1].slice(0, 2);
            o = l + "%";
          }
          return o;
        },
      },
      {
        key: "renderStars",
        get: function () {
          var r = this,
            i = this.props,
            o = i.changeRating,
            l = i.rating,
            a = i.numberOfStars,
            s = i.starDimension,
            u = i.starSpacing,
            d = i.starRatedColor,
            v = i.starEmptyColor,
            g = i.starHoverColor,
            y = i.gradientPathName,
            w = i.ignoreInlineStyles,
            x = i.svgIconPath,
            P = i.svgIconViewBox,
            m = i.name,
            c = this.state.highestStarHovered,
            p = Array.apply(null, Array(a));
          return p.map(function (f, S) {
            var R = S + 1,
              N = R <= l,
              T = c > 0,
              W = R <= c,
              D = R === c,
              pe = R > l && R - 1 < l,
              J = R === 1,
              ot = R === a;
            return Nt.default.createElement(VS.default, {
              key: R,
              fillId: r.fillId,
              changeRating: o
                ? function () {
                    return o(R, m);
                  }
                : null,
              hoverOverStar: o ? r.hoverOverStar(R) : null,
              unHoverOverStar: o ? r.unHoverOverStar : null,
              isStarred: N,
              isPartiallyFullStar: pe,
              isHovered: W,
              hoverMode: T,
              isCurrentHoveredStar: D,
              isFirstStar: J,
              isLastStar: ot,
              starDimension: s,
              starSpacing: u,
              starHoverColor: g,
              starRatedColor: d,
              starEmptyColor: v,
              gradientPathName: y,
              ignoreInlineStyles: w,
              svgIconPath: x,
              svgIconViewBox: P,
            });
          });
        },
      },
    ]),
    t
  );
})(Nt.default.Component);
nc.propTypes = {
  rating: Ye.default.number.isRequired,
  numberOfStars: Ye.default.number.isRequired,
  changeRating: Ye.default.func,
  starHoverColor: Ye.default.string.isRequired,
  starRatedColor: Ye.default.string.isRequired,
  starEmptyColor: Ye.default.string.isRequired,
  starDimension: Ye.default.string.isRequired,
  starSpacing: Ye.default.string.isRequired,
  gradientPathName: Ye.default.string.isRequired,
  ignoreInlineStyles: Ye.default.bool.isRequired,
  svgIconPath: Ye.default.string.isRequired,
  svgIconViewBox: Ye.default.string.isRequired,
  name: Ye.default.string,
};
nc.defaultProps = {
  rating: 0,
  typeOfWidget: "Star",
  numberOfStars: 5,
  changeRating: null,
  starHoverColor: "rgb(230, 67, 47)",
  starRatedColor: "rgb(109, 122, 130)",
  starEmptyColor: "rgb(203, 211, 227)",
  starDimension: "50px",
  starSpacing: "7px",
  gradientPathName: "",
  ignoreInlineStyles: !1,
  svgIconPath: "m25,1 6,17h18l-14,11 5,17-15-10-15,10 5-17-14-11h18z",
  svgIconViewBox: "0 0 51 48",
};
Ju.default = nc;
Object.defineProperty(um, "__esModule", { value: !0 });
var qS = Ju,
  YS = XS(qS);
function XS(e) {
  return e && e.__esModule ? e : { default: e };
}
Number.isInteger =
  Number.isInteger ||
  function (e) {
    return typeof e == "number" && isFinite(e) && Math.floor(e) === e;
  };
var Us = (um.default = YS.default);
function GS({ text: e, onDelete: t }) {
  const n = Dt(),
    { closeModal: r } = Ai();
  return h.jsxs("div", {
    className: "delete-modal-container",
    children: [
      h.jsx("h4", { children: e }),
      h.jsxs("div", {
        className: "delete-modal-buttons-div",
        children: [
          h.jsxs("button", {
            className: "delete-modal-button delete-modal-cancel-button",
            onClick: r,
            children: [
              h.jsx("i", { className: "fa-solid fa-xmark fa-sm" }),
              " Cancel",
            ],
          }),
          h.jsxs("button", {
            className: "delete-modal-button delete-modal-delete-button",
            onClick: () =>
              n(t())
                .then(r)
                .catch(async (i) => {
                  const o = await i.json();
                  o && o.errors && alert(o.errors);
                }),
            children: [
              h.jsx("i", { className: "fa-solid fa-trash fa-sm" }),
              " Delete",
            ],
          }),
        ],
      }),
    ],
  });
}
function Xf({
  recipeId: e,
  reviewId: t = "",
  inContent: n = "",
  inStars: r = 0,
}) {
  const i = Dt(),
    [o, l] = C.useState(n),
    [a, s] = C.useState(r),
    [u, d] = C.useState({}),
    { closeModal: v } = Ai(),
    g = (y) => (
      y.preventDefault(),
      d({}),
      t
        ? i(Iw(t, { content: o, stars: Number(a) }))
            .then(v)
            .catch(async (w) => {
              const x = await w.json();
              x && x.errors && d(x.errors);
            })
        : i(Lw(e, { content: o, stars: Number(a) }))
            .then(v)
            .catch(async (w) => {
              const x = await w.json();
              x && x.errors && d(x.errors);
            })
    );
  return h.jsx("div", {
    className: "review-modal-container",
    children: h.jsxs("form", {
      className: "review-modal-form",
      onSubmit: g,
      children: [
        h.jsx("textarea", {
          className: "review-modal-content-textarea",
          type: "textarea",
          rows: "8",
          cols: "33",
          maxLength: 256,
          placeholder: "Write review content here...",
          value: o,
          onChange: (y) => l(y.target.value),
          required: !0,
        }),
        h.jsx(Us, {
          starDimension: "18px",
          starSpacing: "4px",
          starRatedColor: "lightcoral",
          rating: a,
          changeRating: (y) => s(y),
        }),
        u.message && h.jsx("p", { className: "error", children: u.message }),
        h.jsx("button", {
          className: "review-modal-button",
          type: "submit",
          children: t ? "Update review" : "Post review",
        }),
      ],
    }),
  });
}
const JS = (e) => {
    let t = new Date(e),
      n = "" + t.getDate(),
      r = t.getFullYear();
    const i = t.toLocaleString("default", { month: "long" });
    return n.length < 2 && (n = "0" + n), `${i} ${n}, ${r}`;
  },
  ZS = (e) => {
    let t = new Date(e),
      n = "" + (t.getMonth() + 1),
      r = "" + t.getDate(),
      i = t.getFullYear();
    return (
      n.length < 2 && (n = "0" + n),
      r.length < 2 && (r = "0" + r),
      [n, r, i].join("/")
    );
  };
function e1() {
  const { recipeId: e } = Ah(),
    t = Dt(),
    n = Sn((u) => u.session.user),
    r = Sn((u) => u.recipe.entries[e]),
    [i, o] = C.useState(!0),
    [l, a] = C.useState(!0);
  if (
    (C.useEffect(() => {
      i &&
        (a(!0),
        t(Zh(e)).then(() => {
          o(!1), a(!1);
        }));
    }, [t, e, i]),
    l)
  )
    return h.jsx("h1", { children: "Loading..." });
  const s = r.User.id !== n.id && !r.Reviews.find((u) => u.User.id === n.id);
  return h.jsxs("div", {
    className: "recipe-details-container",
    children: [
      h.jsx("h1", { className: "recipe-details-name", children: r.name }),
      h.jsxs("div", {
        className: "recipe-details-reviews-summary",
        children: [
          h.jsx(Us, {
            rating: r.avgRating,
            starDimension: "16px",
            starSpacing: "4px",
            starRatedColor: "lightcoral",
          }),
          " ",
          r.avgRating,
          " | ",
          r.Reviews.length,
          "  reviews",
        ],
      }),
      h.jsx("p", {
        className: "recipe-details-description",
        children: r.description,
      }),
      h.jsxs("p", {
        className: "recipe-details-upload-by-p",
        children: [
          "Uploaded by ",
          h.jsx("span", {
            className: "recipe-details-username",
            children: r.User.username,
          }),
          " | Updated on ",
          JS(r.updatedAt),
        ],
      }),
      h.jsx("div", {
        className: "recipe-details-tags",
        children: r.Tags.map((u, d) =>
          h.jsx(
            "span",
            { className: "recipe-details-tag", children: u.title },
            d
          )
        ),
      }),
      h.jsx(em.Carousel, {
        width: 500,
        children: r.RecipeImages.map((u, d) =>
          h.jsx("div", { children: h.jsx("img", { src: u.url }) }, d)
        ),
      }),
      h.jsxs("div", {
        className: "recipe-details-time-servings",
        children: [
          h.jsxs("div", {
            className: "recipe-details-time-servings-single-box",
            children: [
              h.jsxs("h5", {
                children: [
                  "Prep time ",
                  h.jsx("i", { className: "fa-solid fa-hourglass-start" }),
                ],
              }),
              h.jsxs("h3", { children: [r.prepTime, " min"] }),
            ],
          }),
          h.jsxs("div", {
            className: "recipe-details-time-servings-single-box",
            children: [
              h.jsxs("h5", {
                children: [
                  "Cook time ",
                  h.jsx("i", { className: "fa-solid fa-hourglass-half" }),
                ],
              }),
              h.jsxs("h3", { children: [r.cookTime, " min"] }),
            ],
          }),
          h.jsxs("div", {
            className: "recipe-details-time-servings-single-box",
            children: [
              h.jsxs("h5", {
                children: [
                  "Total time ",
                  h.jsx("i", { className: "fa-solid fa-hourglass-end" }),
                ],
              }),
              h.jsxs("h3", { children: [r.prepTime + r.cookTime, " min"] }),
            ],
          }),
          h.jsxs("div", {
            className: "recipe-details-time-servings-single-box",
            children: [
              h.jsxs("h5", {
                children: [
                  "Servings ",
                  h.jsx("i", { className: "fa-solid fa-user-plus" }),
                ],
              }),
              h.jsx("h3", { children: r.servings }),
            ],
          }),
        ],
      }),
      h.jsxs("div", {
        className: "recipe-details-ingredients",
        children: [
          h.jsx("h2", { children: "Ingredients" }),
          h.jsx("ul", {
            className: "recipe-details-ingredients-ul",
            children: r.RecipeIngredients.map((u, d) =>
              h.jsxs(
                "li",
                {
                  children: [
                    u.amount,
                    " ",
                    u.Unit.unit,
                    " ",
                    u.Ingredient.name,
                  ],
                },
                d
              )
            ),
          }),
        ],
      }),
      h.jsxs("div", {
        className: "recipe-details-directions",
        children: [
          h.jsx("h2", { children: "Directions" }),
          h.jsx("p", { children: r.directions }),
        ],
      }),
      h.jsxs("div", {
        className: "recipe-details-reviews",
        children: [
          h.jsx("h2", { children: "Reviews" }),
          s &&
            h.jsx(fi, {
              buttonText: h.jsxs(h.Fragment, {
                children: [
                  h.jsx("i", { className: "fa-solid fa-pen-to-square fa-sm" }),
                  " Post a review",
                ],
              }),
              className:
                "recipe-details-reviews-single-button recipe-details-reviews-single-edit-button",
              modalComponent: h.jsx(Xf, { recipeId: e }),
            }),
          r.Reviews.map((u, d) =>
            h.jsxs(
              "div",
              {
                className: "recipe-details-reviews-single",
                children: [
                  h.jsx("h4", { children: u.User.username }),
                  h.jsxs("div", {
                    children: [
                      h.jsx(Us, {
                        rating: u.stars,
                        starDimension: "14px",
                        starSpacing: "2px",
                        starRatedColor: "lightcoral",
                      }),
                      " ",
                      h.jsx("span", {
                        className: "recipe-details-reviews-single-date",
                        children: ZS(u.updatedAt),
                      }),
                    ],
                  }),
                  h.jsx("p", { children: u.content }),
                  u.User.id === n.id &&
                    h.jsxs("div", {
                      className: "recipe-details-reviews-single-buttons",
                      children: [
                        h.jsx(fi, {
                          buttonText: h.jsxs(h.Fragment, {
                            children: [
                              h.jsx("i", {
                                className: "fa-solid fa-pen-to-square fa-sm",
                              }),
                              " Edit",
                            ],
                          }),
                          className:
                            "recipe-details-reviews-single-button recipe-details-reviews-single-edit-button",
                          modalComponent: h.jsx(Xf, {
                            recipeId: e,
                            reviewId: u.id,
                            inContent: u.content,
                            inStars: u.stars,
                          }),
                        }),
                        h.jsx(fi, {
                          buttonText: h.jsxs(h.Fragment, {
                            children: [
                              h.jsx("i", {
                                className: "fa-solid fa-trash fa-sm",
                              }),
                              " Delete",
                            ],
                          }),
                          className:
                            "recipe-details-reviews-single-button recipe-details-reviews-single-delete-button",
                          modalComponent: h.jsx(GS, {
                            text: "Are you sure you want to delete your review?",
                            onDelete: () => Dw(e, u.id),
                          }),
                        }),
                      ],
                    }),
                ],
              },
              d
            )
          ),
        ],
      }),
    ],
  });
}
const fm = "ingredients/setIngredients",
  t1 = (e) => ({ type: fm, payload: e }),
  n1 = () => async (e) => {
    const t = await it("/api/ingredients"),
      n = await t.json();
    return e(t1(n)), t;
  },
  r1 = { entries: {} },
  i1 = (e = r1, t) => {
    switch (t.type) {
      case fm: {
        const n = t.payload.reduce((r, i) => {
          const o = e.entries[i.id];
          return { ...r, [i.id]: { ...o, ...i } };
        }, {});
        return { ...e, entries: n };
      }
      default:
        return e;
    }
  },
  dm = "units/setUnits",
  o1 = (e) => ({ type: dm, payload: e }),
  l1 = () => async (e) => {
    const t = await it("/api/units"),
      n = await t.json();
    return e(o1(n)), t;
  },
  a1 = { entries: {} },
  s1 = (e = a1, t) => {
    switch (t.type) {
      case dm: {
        const n = t.payload.reduce((r, i) => {
          const o = e.entries[i.id];
          return { ...r, [i.id]: { ...o, ...i } };
        }, {});
        return { ...e, entries: n };
      }
      default:
        return e;
    }
  };
function Gf() {
  const e = Dt(),
    t = Kl(),
    { recipeId: n } = Ah(),
    r = Sn((p) => p.recipe.entries[n]),
    [i, o] = C.useState(!!r),
    [l, a] = C.useState(!0),
    s = Sn((p) => p.unit.entries),
    u = Object.values(s),
    d = { amount: 0.1, unitId: 1, ingredientId: "" },
    v = Sn((p) => p.ingredient.entries),
    g = Object.values(v),
    [y, w] = C.useState({
      name: "",
      description: "",
      tags: [],
      prepTime: 0,
      cookTime: 0,
      servings: 1,
      ingredients: [d],
      directions: "",
      images: [],
    }),
    [x, P] = C.useState({});
  if (
    (C.useEffect(() => {
      i &&
        (a(!0),
        e(Zh(n)).then((p) => {
          o(!1),
            a(!1),
            w({
              name: p.name,
              description: p.description,
              tags: p.Tags.map((f) => f.title),
              prepTime: p.prepTime,
              cookTime: p.cookTime,
              servings: p.servings,
              ingredients: p.RecipeIngredients.map((f) => ({
                amount: f.amount,
                unitId: f.unitId,
                ingredientId: f.ingredientId,
              })),
              directions: p.directions,
              images: [],
            });
        }));
    }, [e, r, n, i]),
    l)
  )
    return h.jsx("h1", { children: "Loading..." });
  const m = (p) => {
      p.preventDefault(), P({});
      const f = new FormData();
      f.append("name", y.name),
        f.append("description", y.description),
        f.append("prepTime", y.prepTime),
        f.append("cookTime", y.cookTime),
        f.append("servings", y.servings),
        f.append("tags", JSON.stringify(y.tags)),
        f.append("ingredients", JSON.stringify(y.ingredients)),
        f.append("directions", y.directions);
      for (const S of y.images) f.append("images", S);
      return e(Mw(f))
        .then(async (S) => {
          t(`/recipes/${S.id}`);
        })
        .catch(async (S) => {
          const R = await S.json();
          R && R.errors && P(R.errors);
        });
    },
    c = ({ label: p, value: f }) =>
      h.jsxs("div", {
        children: [
          h.jsx("input", {
            type: "checkbox",
            id: f,
            name: f,
            onChange: (S) => {
              let R = y.tags.slice();
              S.target.checked
                ? R.push(S.target.name)
                : (R = R.filter((N) => N !== S.target.name)),
                w({ ...y, tags: R });
            },
            checked: y.tags.includes(f),
          }),
          h.jsx("label", { htmlFor: f, children: p }),
        ],
      });
  return h.jsxs("form", {
    className: "recipe-form",
    encType: "multipart/form-data",
    onSubmit: m,
    children: [
      h.jsxs("div", {
        className: "recipe-label-input-pair",
        children: [
          h.jsx("label", {
            htmlFor: "title",
            className: "recipe-label",
            children: "Title",
          }),
          h.jsx("input", {
            className: "recipe-title",
            type: "text",
            maxLength: 100,
            placeholder: "Provide an eye catching title for your recipe",
            value: y.name,
            onChange: (p) => w({ ...y, name: p.target.value }),
            required: !0,
            id: "title",
          }),
        ],
      }),
      h.jsxs("div", {
        className: "recipe-label-input-pair",
        children: [
          h.jsx("label", {
            htmlFor: "description",
            className: "recipe-label",
            children: "Description",
          }),
          h.jsx("textarea", {
            className: "recipe-description",
            type: "textarea",
            rows: "6",
            cols: "33",
            maxLength: 256,
            placeholder: "Write a few lines for this recipe",
            value: y.description,
            onChange: (p) => w({ ...y, description: p.target.value }),
            required: !0,
            id: "description",
          }),
        ],
      }),
      h.jsxs("div", {
        className: "recipe-time-servings",
        children: [
          h.jsxs("div", {
            className: "recipe-label-input-pair",
            children: [
              h.jsx("label", {
                htmlFor: "prepTime",
                className: "recipe-label",
                children: "Prep Time",
              }),
              h.jsx("input", {
                className: "recipe-prepTime",
                type: "number",
                min: "0",
                value: y.prepTime,
                onChange: (p) => w({ ...y, prepTime: p.target.value }),
                id: "prepTime",
              }),
            ],
          }),
          h.jsxs("div", {
            className: "recipe-label-input-pair",
            children: [
              h.jsx("label", {
                htmlFor: "cookTime",
                className: "recipe-label",
                children: "Cook Time",
              }),
              h.jsx("input", {
                className: "recipe-cookTime",
                type: "number",
                min: "0",
                value: y.cookTime,
                onChange: (p) => w({ ...y, cookTime: p.target.value }),
                id: "cookTime",
              }),
            ],
          }),
          h.jsxs("div", {
            className: "recipe-label-input-pair",
            children: [
              h.jsx("label", {
                htmlFor: "servings",
                className: "recipe-label",
                children: "Servings",
              }),
              h.jsx("input", {
                className: "recipe-servings",
                type: "number",
                min: "1",
                value: y.servings,
                onChange: (p) => w({ ...y, servings: p.target.value }),
                id: "servings",
              }),
            ],
          }),
        ],
      }),
      h.jsxs("div", {
        className: "recipe-label-input-pair",
        children: [
          h.jsx("label", {
            htmlFor: "tags",
            className: "recipe-label",
            children: "Tags",
          }),
          h.jsx("span", {
            style: { fontSize: "14px" },
            children: "Add tags (if any) to your recipe",
          }),
          h.jsxs("div", {
            id: "tags",
            className: "recipe-tags-grid",
            children: [
              h.jsx(c, { label: "Indian", value: "indian" }),
              h.jsx(c, { label: "American", value: "american" }),
              h.jsx(c, { label: "Italian", value: "italian" }),
              h.jsx(c, { label: "Chinese", value: "chinese" }),
              h.jsx(c, { label: "Thai", value: "thai" }),
              h.jsx(c, { label: "Korean", value: "korean" }),
              h.jsx(c, { label: "Seafood", value: "seafood" }),
              h.jsx(c, { label: "Gluten-free", value: "gluten-free" }),
              h.jsx(c, { label: "Vegan", value: "vegan" }),
              h.jsx(c, { label: "Non-dairy", value: "non-dairy" }),
            ],
          }),
        ],
      }),
      h.jsxs("div", {
        className: "recipe-label-input-pair",
        children: [
          h.jsx("label", {
            className: "recipe-label",
            children: "Ingredients",
          }),
          h.jsx("span", {
            style: { fontSize: "14px" },
            children: "Add ingredients for your recipe",
          }),
          h.jsxs("div", {
            className: "recipe-ingredients-header",
            children: [
              h.jsx("h5", {
                className: "recipe-ingredients-input",
                children: "Amount",
              }),
              h.jsx("h5", {
                className: "recipe-ingredients-select",
                children: "Unit",
              }),
              h.jsx("h5", {
                className: "recipe-ingredients-select",
                children: "Ingredient",
              }),
              h.jsx("h5", { className: "recipe-ingredients-add-new" }),
            ],
          }),
          h.jsx("div", {
            className: "recipe-ingredients-inputs-container",
            children: y.ingredients.map((p, f) =>
              h.jsxs(
                "div",
                {
                  className: "recipe-ingredients-inputs",
                  children: [
                    h.jsx("input", {
                      className: "recipe-ingredients-input",
                      type: "number",
                      min: "0.1",
                      step: "0.1",
                      value: p.amount,
                      onChange: (S) => {
                        const R = [...y.ingredients];
                        (R[f] = { ...R[f], amount: Number(S.target.value) }),
                          w({ ...y, ingredients: R });
                      },
                    }),
                    h.jsx("select", {
                      className: "recipe-ingredients-select",
                      value: p.unitId,
                      onChange: (S) => {
                        const R = [...y.ingredients];
                        (R[f] = { ...R[f], unitId: Number(S.target.value) }),
                          w({ ...y, ingredients: R });
                      },
                      children: u.map((S, R) =>
                        h.jsx("option", { value: S.id, children: S.unit }, R)
                      ),
                    }),
                    h.jsxs("select", {
                      className: "recipe-ingredients-select",
                      value: p.ingredientId,
                      onChange: (S) => {
                        const R = [...y.ingredients];
                        (R[f] = {
                          ...R[f],
                          ingredientId: Number(S.target.value),
                        }),
                          w({ ...y, ingredients: R });
                      },
                      required: !0,
                      children: [
                        h.jsx(
                          "option",
                          { value: "", children: "---Select---" },
                          -1
                        ),
                        g.map((S, R) =>
                          h.jsx("option", { value: S.id, children: S.name }, R)
                        ),
                      ],
                    }),
                    h.jsx("button", {
                      className:
                        "recipe-ingredients-add-new recipe-ingredients-add-new-button",
                      type: "button",
                      onClick: () => {
                        const S = [...y.ingredients];
                        y.ingredients.length > 1 && f + 1 < y.ingredients.length
                          ? S.splice(f, 1)
                          : S.push(d),
                          w({ ...y, ingredients: S });
                      },
                      children:
                        y.ingredients.length > 1 && f + 1 < y.ingredients.length
                          ? h.jsx("i", {
                              className: "fa-solid fa-circle-minus",
                            })
                          : h.jsx("i", {
                              className: "fa-solid fa-circle-plus",
                            }),
                    }),
                  ],
                },
                f
              )
            ),
          }),
        ],
      }),
      h.jsxs("div", {
        className: "recipe-label-input-pair",
        children: [
          h.jsx("label", {
            htmlFor: "directions",
            className: "recipe-label",
            children: "Directions",
          }),
          h.jsx("textarea", {
            className: "recipe-directions",
            type: "textarea",
            rows: "6",
            cols: "33",
            maxLength: 256,
            placeholder: "Add the directions to your recipe",
            value: y.directions,
            onChange: (p) => w({ ...y, directions: p.target.value }),
            required: !0,
            id: "directions",
          }),
        ],
      }),
      h.jsxs("div", {
        className: "recipe-label-input-pair",
        children: [
          h.jsx("label", {
            htmlFor: "images",
            className: "recipe-label",
            children: "Images",
          }),
          h.jsx("span", {
            style: { fontSize: "14px" },
            children: "Add images to your recipe",
          }),
          h.jsx("input", {
            type: "file",
            id: "images",
            accept: "image/*",
            multiple: "multiple",
            onChange: (p) => {
              w({ ...y, images: p.target.files });
            },
          }),
        ],
      }),
      x.message && h.jsx("p", { className: "error", children: x.message }),
      h.jsx("button", {
        className: "recipe-submit-button",
        type: "submit",
        children: "Upload Recipe",
      }),
    ],
  });
}
function u1() {
  const e = Dt(),
    t = Kl(),
    n = Sn((l) => l.recipe.userEntries),
    r = Object.values(n),
    [i, o] = C.useState(!0);
  return (
    C.useEffect(() => {
      e(zw()).then(() => o(!1));
    }, [e]),
    i
      ? h.jsx("h1", { children: "Loading..." })
      : h.jsx("div", {
          className: "user-recipes-grid",
          children: r.map((l) =>
            h.jsxs(
              "div",
              {
                className: "user-recipes-grid-card",
                children: [
                  h.jsx("div", {
                    className: "user-recipes-grid-card-image-div",
                    children: h.jsx("img", {
                      className: "user-recipes-grid-card-image",
                      src: l.RecipeImages.length ? l.RecipeImages[0].url : "",
                      alt: "preview",
                    }),
                  }),
                  h.jsxs("div", {
                    className: "user-ecipes-grid-card-title-stars-div",
                    children: [
                      h.jsx("div", {
                        children: h.jsx("span", {
                          style: { fontWeight: "bold" },
                          children: l.name,
                        }),
                      }),
                      h.jsxs("div", {
                        children: [
                          h.jsx("i", { className: "fa-solid fa-star" }),
                          " ",
                          h.jsx("span", {
                            style: { fontWeight: "bold" },
                            children:
                              l.avgRating > 0 ? l.avgRating.toFixed(1) : "New",
                          }),
                        ],
                      }),
                    ],
                  }),
                  h.jsx("div", {
                    className: "user-recipes-grid-card-buttons-div",
                    children: h.jsx("button", {
                      onClick: () => t(`../recipes/${l.id}/edit`),
                      children: "Edit",
                    }),
                  }),
                ],
              },
              l.id
            )
          ),
        })
  );
}
function c1() {
  const e = Dt(),
    [t, n] = C.useState(!1);
  return (
    C.useEffect(() => {
      e(mw()).then(() => {
        n(!0), e(l1()), e(n1());
      });
    }, [e]),
    h.jsxs(h.Fragment, {
      children: [h.jsx(_w, { isLoaded: t }), t && h.jsx(G0, {})],
    })
  );
}
const f1 = iw([
  {
    element: h.jsx(c1, {}),
    children: [
      { path: "/", element: h.jsx(Uw, {}) },
      { path: "/recipes/new", element: h.jsx(Gf, {}) },
      { path: "/recipes/current", element: h.jsx(u1, {}) },
      { path: "/recipes/:recipeId", element: h.jsx(e1, {}) },
      { path: "/recipes/:recipeId/edit", element: h.jsx(Gf, {}) },
    ],
  },
]);
function d1() {
  return h.jsx(Y0, { router: f1 });
}
function Mi(e) {
  "@babel/helpers - typeof";
  return (
    (Mi =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              typeof Symbol == "function" &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? "symbol"
              : typeof t;
          }),
    Mi(e)
  );
}
function p1(e, t) {
  if (Mi(e) !== "object" || e === null) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || "default");
    if (Mi(r) !== "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function h1(e) {
  var t = p1(e, "string");
  return Mi(t) === "symbol" ? t : String(t);
}
function m1(e, t, n) {
  return (
    (t = h1(t)),
    t in e
      ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = n),
    e
  );
}
function Jf(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t &&
      (r = r.filter(function (i) {
        return Object.getOwnPropertyDescriptor(e, i).enumerable;
      })),
      n.push.apply(n, r);
  }
  return n;
}
function Zf(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? Jf(Object(n), !0).forEach(function (r) {
          m1(e, r, n[r]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
      : Jf(Object(n)).forEach(function (r) {
          Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
        });
  }
  return e;
}
function De(e) {
  return (
    "Minified Redux error #" +
    e +
    "; visit https://redux.js.org/Errors?code=" +
    e +
    " for the full message or use the non-minified dev environment for full errors. "
  );
}
var ed = (function () {
    return (typeof Symbol == "function" && Symbol.observable) || "@@observable";
  })(),
  za = function () {
    return Math.random().toString(36).substring(7).split("").join(".");
  },
  ol = {
    INIT: "@@redux/INIT" + za(),
    REPLACE: "@@redux/REPLACE" + za(),
    PROBE_UNKNOWN_ACTION: function () {
      return "@@redux/PROBE_UNKNOWN_ACTION" + za();
    },
  };
function v1(e) {
  if (typeof e != "object" || e === null) return !1;
  for (var t = e; Object.getPrototypeOf(t) !== null; )
    t = Object.getPrototypeOf(t);
  return Object.getPrototypeOf(e) === t;
}
function pm(e, t, n) {
  var r;
  if (
    (typeof t == "function" && typeof n == "function") ||
    (typeof n == "function" && typeof arguments[3] == "function")
  )
    throw new Error(De(0));
  if (
    (typeof t == "function" && typeof n > "u" && ((n = t), (t = void 0)),
    typeof n < "u")
  ) {
    if (typeof n != "function") throw new Error(De(1));
    return n(pm)(e, t);
  }
  if (typeof e != "function") throw new Error(De(2));
  var i = e,
    o = t,
    l = [],
    a = l,
    s = !1;
  function u() {
    a === l && (a = l.slice());
  }
  function d() {
    if (s) throw new Error(De(3));
    return o;
  }
  function v(x) {
    if (typeof x != "function") throw new Error(De(4));
    if (s) throw new Error(De(5));
    var P = !0;
    return (
      u(),
      a.push(x),
      function () {
        if (P) {
          if (s) throw new Error(De(6));
          (P = !1), u();
          var c = a.indexOf(x);
          a.splice(c, 1), (l = null);
        }
      }
    );
  }
  function g(x) {
    if (!v1(x)) throw new Error(De(7));
    if (typeof x.type > "u") throw new Error(De(8));
    if (s) throw new Error(De(9));
    try {
      (s = !0), (o = i(o, x));
    } finally {
      s = !1;
    }
    for (var P = (l = a), m = 0; m < P.length; m++) {
      var c = P[m];
      c();
    }
    return x;
  }
  function y(x) {
    if (typeof x != "function") throw new Error(De(10));
    (i = x), g({ type: ol.REPLACE });
  }
  function w() {
    var x,
      P = v;
    return (
      (x = {
        subscribe: function (c) {
          if (typeof c != "object" || c === null) throw new Error(De(11));
          function p() {
            c.next && c.next(d());
          }
          p();
          var f = P(p);
          return { unsubscribe: f };
        },
      }),
      (x[ed] = function () {
        return this;
      }),
      x
    );
  }
  return (
    g({ type: ol.INIT }),
    (r = { dispatch: g, subscribe: v, getState: d, replaceReducer: y }),
    (r[ed] = w),
    r
  );
}
function y1(e) {
  Object.keys(e).forEach(function (t) {
    var n = e[t],
      r = n(void 0, { type: ol.INIT });
    if (typeof r > "u") throw new Error(De(12));
    if (typeof n(void 0, { type: ol.PROBE_UNKNOWN_ACTION() }) > "u")
      throw new Error(De(13));
  });
}
function g1(e) {
  for (var t = Object.keys(e), n = {}, r = 0; r < t.length; r++) {
    var i = t[r];
    typeof e[i] == "function" && (n[i] = e[i]);
  }
  var o = Object.keys(n),
    l;
  try {
    y1(n);
  } catch (a) {
    l = a;
  }
  return function (s, u) {
    if ((s === void 0 && (s = {}), l)) throw l;
    for (var d = !1, v = {}, g = 0; g < o.length; g++) {
      var y = o[g],
        w = n[y],
        x = s[y],
        P = w(x, u);
      if (typeof P > "u") throw (u && u.type, new Error(De(14)));
      (v[y] = P), (d = d || P !== x);
    }
    return (d = d || o.length !== Object.keys(s).length), d ? v : s;
  };
}
function w1() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  return t.length === 0
    ? function (r) {
        return r;
      }
    : t.length === 1
    ? t[0]
    : t.reduce(function (r, i) {
        return function () {
          return r(i.apply(void 0, arguments));
        };
      });
}
function S1() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  return function (r) {
    return function () {
      var i = r.apply(void 0, arguments),
        o = function () {
          throw new Error(De(15));
        },
        l = {
          getState: i.getState,
          dispatch: function () {
            return o.apply(void 0, arguments);
          },
        },
        a = t.map(function (s) {
          return s(l);
        });
      return (
        (o = w1.apply(void 0, a)(i.dispatch)),
        Zf(Zf({}, i), {}, { dispatch: o })
      );
    };
  };
}
function hm(e) {
  var t = function (r) {
    var i = r.dispatch,
      o = r.getState;
    return function (l) {
      return function (a) {
        return typeof a == "function" ? a(i, o, e) : l(a);
      };
    };
  };
  return t;
}
var mm = hm();
mm.withExtraArgument = hm;
const x1 = mm,
  E1 = g1({ session: ww, unit: s1, ingredient: i1, recipe: $w });
let vm;
vm = S1(x1);
const R1 = (e) => pm(E1, e, vm),
  C1 = R1();
Fa.createRoot(document.getElementById("root")).render(
  h.jsx(dd.StrictMode, {
    children: h.jsx(xw, {
      children: h.jsxs(bg, {
        store: C1,
        children: [h.jsx(d1, {}), h.jsx(Ew, {})],
      }),
    }),
  })
);
