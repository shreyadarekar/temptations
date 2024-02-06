function Sm(e, t) {
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
var Zf =
  typeof globalThis < "u"
    ? globalThis
    : typeof window < "u"
    ? window
    : typeof global < "u"
    ? global
    : typeof self < "u"
    ? self
    : {};
function ed(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default")
    ? e.default
    : e;
}
var td = { exports: {} },
  rl = {},
  nd = { exports: {} },
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
  wm = Symbol.for("react.portal"),
  xm = Symbol.for("react.fragment"),
  Em = Symbol.for("react.strict_mode"),
  Rm = Symbol.for("react.profiler"),
  Cm = Symbol.for("react.provider"),
  _m = Symbol.for("react.context"),
  Pm = Symbol.for("react.forward_ref"),
  km = Symbol.for("react.suspense"),
  Nm = Symbol.for("react.memo"),
  Tm = Symbol.for("react.lazy"),
  fc = Symbol.iterator;
function Om(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (fc && e[fc]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var rd = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  id = Object.assign,
  od = {};
function Tr(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = od),
    (this.updater = n || rd);
}
Tr.prototype.isReactComponent = {};
Tr.prototype.setState = function (e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error(
      "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
    );
  this.updater.enqueueSetState(this, e, t, "setState");
};
Tr.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function ld() {}
ld.prototype = Tr.prototype;
function zs(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = od),
    (this.updater = n || rd);
}
var $s = (zs.prototype = new ld());
$s.constructor = zs;
id($s, Tr.prototype);
$s.isPureReactComponent = !0;
var dc = Array.isArray,
  ad = Object.prototype.hasOwnProperty,
  Fs = { current: null },
  sd = { key: !0, ref: !0, __self: !0, __source: !0 };
function ud(e, t, n) {
  var r,
    i = {},
    o = null,
    l = null;
  if (t != null)
    for (r in (t.ref !== void 0 && (l = t.ref),
    t.key !== void 0 && (o = "" + t.key),
    t))
      ad.call(t, r) && !sd.hasOwnProperty(r) && (i[r] = t[r]);
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
    _owner: Fs.current,
  };
}
function Mm(e, t) {
  return {
    $$typeof: Li,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  };
}
function Us(e) {
  return typeof e == "object" && e !== null && e.$$typeof === Li;
}
function Lm(e) {
  var t = { "=": "=0", ":": "=2" };
  return (
    "$" +
    e.replace(/[=:]/g, function (n) {
      return t[n];
    })
  );
}
var pc = /\/+/g;
function ta(e, t) {
  return typeof e == "object" && e !== null && e.key != null
    ? Lm("" + e.key)
    : t.toString(36);
}
function mo(e, t, n, r, i) {
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
          case wm:
            l = !0;
        }
    }
  if (l)
    return (
      (l = e),
      (i = i(l)),
      (e = r === "" ? "." + ta(l, 0) : r),
      dc(i)
        ? ((n = ""),
          e != null && (n = e.replace(pc, "$&/") + "/"),
          mo(i, t, n, "", function (u) {
            return u;
          }))
        : i != null &&
          (Us(i) &&
            (i = Mm(
              i,
              n +
                (!i.key || (l && l.key === i.key)
                  ? ""
                  : ("" + i.key).replace(pc, "$&/") + "/") +
                e
            )),
          t.push(i)),
      1
    );
  if (((l = 0), (r = r === "" ? "." : r + ":"), dc(e)))
    for (var a = 0; a < e.length; a++) {
      o = e[a];
      var s = r + ta(o, a);
      l += mo(o, t, n, s, i);
    }
  else if (((s = Om(e)), typeof s == "function"))
    for (e = s.call(e), a = 0; !(o = e.next()).done; )
      (o = o.value), (s = r + ta(o, a++)), (l += mo(o, t, n, s, i));
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
function Ki(e, t, n) {
  if (e == null) return e;
  var r = [],
    i = 0;
  return (
    mo(e, r, "", "", function (o) {
      return t.call(n, o, i++);
    }),
    r
  );
}
function jm(e) {
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
  vo = { transition: null },
  Im = {
    ReactCurrentDispatcher: be,
    ReactCurrentBatchConfig: vo,
    ReactCurrentOwner: Fs,
  };
K.Children = {
  map: Ki,
  forEach: function (e, t, n) {
    Ki(
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
      Ki(e, function () {
        t++;
      }),
      t
    );
  },
  toArray: function (e) {
    return (
      Ki(e, function (t) {
        return t;
      }) || []
    );
  },
  only: function (e) {
    if (!Us(e))
      throw Error(
        "React.Children.only expected to receive a single React element child."
      );
    return e;
  },
};
K.Component = Tr;
K.Fragment = xm;
K.Profiler = Rm;
K.PureComponent = zs;
K.StrictMode = Em;
K.Suspense = km;
K.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Im;
K.cloneElement = function (e, t, n) {
  if (e == null)
    throw Error(
      "React.cloneElement(...): The argument must be a React element, but you passed " +
        e +
        "."
    );
  var r = id({}, e.props),
    i = e.key,
    o = e.ref,
    l = e._owner;
  if (t != null) {
    if (
      (t.ref !== void 0 && ((o = t.ref), (l = Fs.current)),
      t.key !== void 0 && (i = "" + t.key),
      e.type && e.type.defaultProps)
    )
      var a = e.type.defaultProps;
    for (s in t)
      ad.call(t, s) &&
        !sd.hasOwnProperty(s) &&
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
      $$typeof: _m,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: Cm, _context: e }),
    (e.Consumer = e)
  );
};
K.createElement = ud;
K.createFactory = function (e) {
  var t = ud.bind(null, e);
  return (t.type = e), t;
};
K.createRef = function () {
  return { current: null };
};
K.forwardRef = function (e) {
  return { $$typeof: Pm, render: e };
};
K.isValidElement = Us;
K.lazy = function (e) {
  return { $$typeof: Tm, _payload: { _status: -1, _result: e }, _init: jm };
};
K.memo = function (e, t) {
  return { $$typeof: Nm, type: e, compare: t === void 0 ? null : t };
};
K.startTransition = function (e) {
  var t = vo.transition;
  vo.transition = {};
  try {
    e();
  } finally {
    vo.transition = t;
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
nd.exports = K;
var _ = nd.exports;
const cd = ed(_),
  Dm = Sm({ __proto__: null, default: cd }, [_]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var zm = _,
  $m = Symbol.for("react.element"),
  Fm = Symbol.for("react.fragment"),
  Um = Object.prototype.hasOwnProperty,
  Am = zm.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  bm = { key: !0, ref: !0, __self: !0, __source: !0 };
function fd(e, t, n) {
  var r,
    i = {},
    o = null,
    l = null;
  n !== void 0 && (o = "" + n),
    t.key !== void 0 && (o = "" + t.key),
    t.ref !== void 0 && (l = t.ref);
  for (r in t) Um.call(t, r) && !bm.hasOwnProperty(r) && (i[r] = t[r]);
  if (e && e.defaultProps)
    for (r in ((t = e.defaultProps), t)) i[r] === void 0 && (i[r] = t[r]);
  return {
    $$typeof: $m,
    type: e,
    key: o,
    ref: l,
    props: i,
    _owner: Am.current,
  };
}
rl.Fragment = Fm;
rl.jsx = fd;
rl.jsxs = fd;
td.exports = rl;
var g = td.exports,
  ja = {},
  dd = { exports: {} },
  tt = {},
  pd = { exports: {} },
  hd = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
  function t(M, z) {
    var A = M.length;
    M.push(z);
    e: for (; 0 < A; ) {
      var ae = (A - 1) >>> 1,
        ge = M[ae];
      if (0 < i(ge, z)) (M[ae] = z), (M[A] = ge), (A = ae);
      else break e;
    }
  }
  function n(M) {
    return M.length === 0 ? null : M[0];
  }
  function r(M) {
    if (M.length === 0) return null;
    var z = M[0],
      A = M.pop();
    if (A !== z) {
      M[0] = A;
      e: for (var ae = 0, ge = M.length, qn = ge >>> 1; ae < qn; ) {
        var ne = 2 * (ae + 1) - 1,
          It = M[ne],
          _t = ne + 1,
          Yn = M[_t];
        if (0 > i(It, A))
          _t < ge && 0 > i(Yn, It)
            ? ((M[ae] = Yn), (M[_t] = A), (ae = _t))
            : ((M[ae] = It), (M[ne] = A), (ae = ne));
        else if (_t < ge && 0 > i(Yn, A)) (M[ae] = Yn), (M[_t] = A), (ae = _t);
        else break e;
      }
    }
    return z;
  }
  function i(M, z) {
    var A = M.sortIndex - z.sortIndex;
    return A !== 0 ? A : M.id - z.id;
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
    f = 1,
    h = null,
    v = 3,
    y = !1,
    w = !1,
    S = !1,
    C = typeof setTimeout == "function" ? setTimeout : null,
    p = typeof clearTimeout == "function" ? clearTimeout : null,
    c = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function m(M) {
    for (var z = n(u); z !== null; ) {
      if (z.callback === null) r(u);
      else if (z.startTime <= M)
        r(u), (z.sortIndex = z.expirationTime), t(s, z);
      else break;
      z = n(u);
    }
  }
  function d(M) {
    if (((S = !1), m(M), !w))
      if (n(s) !== null) (w = !0), qe(x);
      else {
        var z = n(u);
        z !== null && Ct(d, z.startTime - M);
      }
  }
  function x(M, z) {
    (w = !1), S && ((S = !1), p(N), (N = -1)), (y = !0);
    var A = v;
    try {
      for (
        m(z), h = n(s);
        h !== null && (!(h.expirationTime > z) || (M && !pe()));

      ) {
        var ae = h.callback;
        if (typeof ae == "function") {
          (h.callback = null), (v = h.priorityLevel);
          var ge = ae(h.expirationTime <= z);
          (z = e.unstable_now()),
            typeof ge == "function" ? (h.callback = ge) : h === n(s) && r(s),
            m(z);
        } else r(s);
        h = n(s);
      }
      if (h !== null) var qn = !0;
      else {
        var ne = n(u);
        ne !== null && Ct(d, ne.startTime - z), (qn = !1);
      }
      return qn;
    } finally {
      (h = null), (v = A), (y = !1);
    }
  }
  var P = !1,
    T = null,
    N = -1,
    W = 5,
    D = -1;
  function pe() {
    return !(e.unstable_now() - D < W);
  }
  function J() {
    if (T !== null) {
      var M = e.unstable_now();
      D = M;
      var z = !0;
      try {
        z = T(!0, M);
      } finally {
        z ? it() : ((P = !1), (T = null));
      }
    } else P = !1;
  }
  var it;
  if (typeof c == "function")
    it = function () {
      c(J);
    };
  else if (typeof MessageChannel < "u") {
    var Jt = new MessageChannel(),
      Zt = Jt.port2;
    (Jt.port1.onmessage = J),
      (it = function () {
        Zt.postMessage(null);
      });
  } else
    it = function () {
      C(J, 0);
    };
  function qe(M) {
    (T = M), P || ((P = !0), it());
  }
  function Ct(M, z) {
    N = C(function () {
      M(e.unstable_now());
    }, z);
  }
  (e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (M) {
      M.callback = null;
    }),
    (e.unstable_continueExecution = function () {
      w || y || ((w = !0), qe(x));
    }),
    (e.unstable_forceFrameRate = function (M) {
      0 > M || 125 < M
        ? console.error(
            "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
          )
        : (W = 0 < M ? Math.floor(1e3 / M) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return v;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return n(s);
    }),
    (e.unstable_next = function (M) {
      switch (v) {
        case 1:
        case 2:
        case 3:
          var z = 3;
          break;
        default:
          z = v;
      }
      var A = v;
      v = z;
      try {
        return M();
      } finally {
        v = A;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (M, z) {
      switch (M) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          M = 3;
      }
      var A = v;
      v = M;
      try {
        return z();
      } finally {
        v = A;
      }
    }),
    (e.unstable_scheduleCallback = function (M, z, A) {
      var ae = e.unstable_now();
      switch (
        (typeof A == "object" && A !== null
          ? ((A = A.delay), (A = typeof A == "number" && 0 < A ? ae + A : ae))
          : (A = ae),
        M)
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
        (M = {
          id: f++,
          callback: z,
          priorityLevel: M,
          startTime: A,
          expirationTime: ge,
          sortIndex: -1,
        }),
        A > ae
          ? ((M.sortIndex = A),
            t(u, M),
            n(s) === null &&
              M === n(u) &&
              (S ? (p(N), (N = -1)) : (S = !0), Ct(d, A - ae)))
          : ((M.sortIndex = ge), t(s, M), w || y || ((w = !0), qe(x))),
        M
      );
    }),
    (e.unstable_shouldYield = pe),
    (e.unstable_wrapCallback = function (M) {
      var z = v;
      return function () {
        var A = v;
        v = z;
        try {
          return M.apply(this, arguments);
        } finally {
          v = A;
        }
      };
    });
})(hd);
pd.exports = hd;
var Wm = pd.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var md = _,
  et = Wm;
function O(e) {
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
var vd = new Set(),
  di = {};
function Bn(e, t) {
  Sr(e, t), Sr(e + "Capture", t);
}
function Sr(e, t) {
  for (di[e] = t, e = 0; e < t.length; e++) vd.add(t[e]);
}
var Bt = !(
    typeof window > "u" ||
    typeof window.document > "u" ||
    typeof window.document.createElement > "u"
  ),
  Ia = Object.prototype.hasOwnProperty,
  Hm =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  hc = {},
  mc = {};
function Bm(e) {
  return Ia.call(mc, e)
    ? !0
    : Ia.call(hc, e)
    ? !1
    : Hm.test(e)
    ? (mc[e] = !0)
    : ((hc[e] = !0), !1);
}
function Vm(e, t, n, r) {
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
function Km(e, t, n, r) {
  if (t === null || typeof t > "u" || Vm(e, t, n, r)) return !0;
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
var Oe = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
  .split(" ")
  .forEach(function (e) {
    Oe[e] = new We(e, 0, !1, e, null, !1, !1);
  });
[
  ["acceptCharset", "accept-charset"],
  ["className", "class"],
  ["htmlFor", "for"],
  ["httpEquiv", "http-equiv"],
].forEach(function (e) {
  var t = e[0];
  Oe[t] = new We(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
  Oe[e] = new We(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
  "autoReverse",
  "externalResourcesRequired",
  "focusable",
  "preserveAlpha",
].forEach(function (e) {
  Oe[e] = new We(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
  .split(" ")
  .forEach(function (e) {
    Oe[e] = new We(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
["checked", "multiple", "muted", "selected"].forEach(function (e) {
  Oe[e] = new We(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function (e) {
  Oe[e] = new We(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (e) {
  Oe[e] = new We(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function (e) {
  Oe[e] = new We(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var As = /[\-:]([a-z])/g;
function bs(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(As, bs);
    Oe[t] = new We(t, 1, !1, e, null, !1, !1);
  });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(As, bs);
    Oe[t] = new We(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  });
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
  var t = e.replace(As, bs);
  Oe[t] = new We(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (e) {
  Oe[e] = new We(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
Oe.xlinkHref = new We(
  "xlinkHref",
  1,
  !1,
  "xlink:href",
  "http://www.w3.org/1999/xlink",
  !0,
  !1
);
["src", "href", "action", "formAction"].forEach(function (e) {
  Oe[e] = new We(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function Ws(e, t, n, r) {
  var i = Oe.hasOwnProperty(t) ? Oe[t] : null;
  (i !== null
    ? i.type !== 0
    : r ||
      !(2 < t.length) ||
      (t[0] !== "o" && t[0] !== "O") ||
      (t[1] !== "n" && t[1] !== "N")) &&
    (Km(t, n, i, r) && (n = null),
    r || i === null
      ? Bm(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
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
var qt = md.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  Qi = Symbol.for("react.element"),
  Jn = Symbol.for("react.portal"),
  Zn = Symbol.for("react.fragment"),
  Hs = Symbol.for("react.strict_mode"),
  Da = Symbol.for("react.profiler"),
  yd = Symbol.for("react.provider"),
  gd = Symbol.for("react.context"),
  Bs = Symbol.for("react.forward_ref"),
  za = Symbol.for("react.suspense"),
  $a = Symbol.for("react.suspense_list"),
  Vs = Symbol.for("react.memo"),
  on = Symbol.for("react.lazy"),
  Sd = Symbol.for("react.offscreen"),
  vc = Symbol.iterator;
function $r(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (vc && e[vc]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var de = Object.assign,
  na;
function Yr(e) {
  if (na === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      na = (t && t[1]) || "";
    }
  return (
    `
` +
    na +
    e
  );
}
var ra = !1;
function ia(e, t) {
  if (!e || ra) return "";
  ra = !0;
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
    (ra = !1), (Error.prepareStackTrace = n);
  }
  return (e = e ? e.displayName || e.name : "") ? Yr(e) : "";
}
function Qm(e) {
  switch (e.tag) {
    case 5:
      return Yr(e.type);
    case 16:
      return Yr("Lazy");
    case 13:
      return Yr("Suspense");
    case 19:
      return Yr("SuspenseList");
    case 0:
    case 2:
    case 15:
      return (e = ia(e.type, !1)), e;
    case 11:
      return (e = ia(e.type.render, !1)), e;
    case 1:
      return (e = ia(e.type, !0)), e;
    default:
      return "";
  }
}
function Fa(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case Zn:
      return "Fragment";
    case Jn:
      return "Portal";
    case Da:
      return "Profiler";
    case Hs:
      return "StrictMode";
    case za:
      return "Suspense";
    case $a:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case gd:
        return (e.displayName || "Context") + ".Consumer";
      case yd:
        return (e._context.displayName || "Context") + ".Provider";
      case Bs:
        var t = e.render;
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ""),
            (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
          e
        );
      case Vs:
        return (
          (t = e.displayName || null), t !== null ? t : Fa(e.type) || "Memo"
        );
      case on:
        (t = e._payload), (e = e._init);
        try {
          return Fa(e(t));
        } catch {}
    }
  return null;
}
function qm(e) {
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
      return Fa(t);
    case 8:
      return t === Hs ? "StrictMode" : "Mode";
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
function Sn(e) {
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
function wd(e) {
  var t = e.type;
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === "input" &&
    (t === "checkbox" || t === "radio")
  );
}
function Ym(e) {
  var t = wd(e) ? "checked" : "value",
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
function qi(e) {
  e._valueTracker || (e._valueTracker = Ym(e));
}
function xd(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(),
    r = "";
  return (
    e && (r = wd(e) ? (e.checked ? "true" : "false") : e.value),
    (e = r),
    e !== n ? (t.setValue(e), !0) : !1
  );
}
function ko(e) {
  if (((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u"))
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function Ua(e, t) {
  var n = t.checked;
  return de({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? e._wrapperState.initialChecked,
  });
}
function yc(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue,
    r = t.checked != null ? t.checked : t.defaultChecked;
  (n = Sn(t.value != null ? t.value : n)),
    (e._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled:
        t.type === "checkbox" || t.type === "radio"
          ? t.checked != null
          : t.value != null,
    });
}
function Ed(e, t) {
  (t = t.checked), t != null && Ws(e, "checked", t, !1);
}
function Aa(e, t) {
  Ed(e, t);
  var n = Sn(t.value),
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
    ? ba(e, t.type, n)
    : t.hasOwnProperty("defaultValue") && ba(e, t.type, Sn(t.defaultValue)),
    t.checked == null &&
      t.defaultChecked != null &&
      (e.defaultChecked = !!t.defaultChecked);
}
function gc(e, t, n) {
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
function ba(e, t, n) {
  (t !== "number" || ko(e.ownerDocument) !== e) &&
    (n == null
      ? (e.defaultValue = "" + e._wrapperState.initialValue)
      : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var Xr = Array.isArray;
function dr(e, t, n, r) {
  if (((e = e.options), t)) {
    t = {};
    for (var i = 0; i < n.length; i++) t["$" + n[i]] = !0;
    for (n = 0; n < e.length; n++)
      (i = t.hasOwnProperty("$" + e[n].value)),
        e[n].selected !== i && (e[n].selected = i),
        i && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + Sn(n), t = null, i = 0; i < e.length; i++) {
      if (e[i].value === n) {
        (e[i].selected = !0), r && (e[i].defaultSelected = !0);
        return;
      }
      t !== null || e[i].disabled || (t = e[i]);
    }
    t !== null && (t.selected = !0);
  }
}
function Wa(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(O(91));
  return de({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: "" + e._wrapperState.initialValue,
  });
}
function Sc(e, t) {
  var n = t.value;
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error(O(92));
      if (Xr(n)) {
        if (1 < n.length) throw Error(O(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), (n = t);
  }
  e._wrapperState = { initialValue: Sn(n) };
}
function Rd(e, t) {
  var n = Sn(t.value),
    r = Sn(t.defaultValue);
  n != null &&
    ((n = "" + n),
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = "" + r);
}
function wc(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function Cd(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function Ha(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml"
    ? Cd(t)
    : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
    ? "http://www.w3.org/1999/xhtml"
    : e;
}
var Yi,
  _d = (function (e) {
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
        Yi = Yi || document.createElement("div"),
          Yi.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
          t = Yi.firstChild;
        e.firstChild;

      )
        e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
function pi(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var ei = {
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
  Xm = ["Webkit", "ms", "Moz", "O"];
Object.keys(ei).forEach(function (e) {
  Xm.forEach(function (t) {
    (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (ei[t] = ei[e]);
  });
});
function Pd(e, t, n) {
  return t == null || typeof t == "boolean" || t === ""
    ? ""
    : n || typeof t != "number" || t === 0 || (ei.hasOwnProperty(e) && ei[e])
    ? ("" + t).trim()
    : t + "px";
}
function kd(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0,
        i = Pd(n, t[n], r);
      n === "float" && (n = "cssFloat"), r ? e.setProperty(n, i) : (e[n] = i);
    }
}
var Gm = de(
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
function Ba(e, t) {
  if (t) {
    if (Gm[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error(O(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(O(60));
      if (
        typeof t.dangerouslySetInnerHTML != "object" ||
        !("__html" in t.dangerouslySetInnerHTML)
      )
        throw Error(O(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(O(62));
  }
}
function Va(e, t) {
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
var Ka = null;
function Ks(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var Qa = null,
  pr = null,
  hr = null;
function xc(e) {
  if ((e = Di(e))) {
    if (typeof Qa != "function") throw Error(O(280));
    var t = e.stateNode;
    t && ((t = sl(t)), Qa(e.stateNode, e.type, t));
  }
}
function Nd(e) {
  pr ? (hr ? hr.push(e) : (hr = [e])) : (pr = e);
}
function Td() {
  if (pr) {
    var e = pr,
      t = hr;
    if (((hr = pr = null), xc(e), t)) for (e = 0; e < t.length; e++) xc(t[e]);
  }
}
function Od(e, t) {
  return e(t);
}
function Md() {}
var oa = !1;
function Ld(e, t, n) {
  if (oa) return e(t, n);
  oa = !0;
  try {
    return Od(e, t, n);
  } finally {
    (oa = !1), (pr !== null || hr !== null) && (Md(), Td());
  }
}
function hi(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = sl(n);
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
  if (n && typeof n != "function") throw Error(O(231, t, typeof n));
  return n;
}
var qa = !1;
if (Bt)
  try {
    var Fr = {};
    Object.defineProperty(Fr, "passive", {
      get: function () {
        qa = !0;
      },
    }),
      window.addEventListener("test", Fr, Fr),
      window.removeEventListener("test", Fr, Fr);
  } catch {
    qa = !1;
  }
function Jm(e, t, n, r, i, o, l, a, s) {
  var u = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, u);
  } catch (f) {
    this.onError(f);
  }
}
var ti = !1,
  No = null,
  To = !1,
  Ya = null,
  Zm = {
    onError: function (e) {
      (ti = !0), (No = e);
    },
  };
function ev(e, t, n, r, i, o, l, a, s) {
  (ti = !1), (No = null), Jm.apply(Zm, arguments);
}
function tv(e, t, n, r, i, o, l, a, s) {
  if ((ev.apply(this, arguments), ti)) {
    if (ti) {
      var u = No;
      (ti = !1), (No = null);
    } else throw Error(O(198));
    To || ((To = !0), (Ya = u));
  }
}
function Vn(e) {
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
function jd(e) {
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
function Ec(e) {
  if (Vn(e) !== e) throw Error(O(188));
}
function nv(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = Vn(e)), t === null)) throw Error(O(188));
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
        if (o === n) return Ec(i), e;
        if (o === r) return Ec(i), t;
        o = o.sibling;
      }
      throw Error(O(188));
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
        if (!l) throw Error(O(189));
      }
    }
    if (n.alternate !== r) throw Error(O(190));
  }
  if (n.tag !== 3) throw Error(O(188));
  return n.stateNode.current === n ? e : t;
}
function Id(e) {
  return (e = nv(e)), e !== null ? Dd(e) : null;
}
function Dd(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = Dd(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var zd = et.unstable_scheduleCallback,
  Rc = et.unstable_cancelCallback,
  rv = et.unstable_shouldYield,
  iv = et.unstable_requestPaint,
  ye = et.unstable_now,
  ov = et.unstable_getCurrentPriorityLevel,
  Qs = et.unstable_ImmediatePriority,
  $d = et.unstable_UserBlockingPriority,
  Oo = et.unstable_NormalPriority,
  lv = et.unstable_LowPriority,
  Fd = et.unstable_IdlePriority,
  il = null,
  Lt = null;
function av(e) {
  if (Lt && typeof Lt.onCommitFiberRoot == "function")
    try {
      Lt.onCommitFiberRoot(il, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var xt = Math.clz32 ? Math.clz32 : cv,
  sv = Math.log,
  uv = Math.LN2;
function cv(e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - ((sv(e) / uv) | 0)) | 0;
}
var Xi = 64,
  Gi = 4194304;
function Gr(e) {
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
function Mo(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0,
    i = e.suspendedLanes,
    o = e.pingedLanes,
    l = n & 268435455;
  if (l !== 0) {
    var a = l & ~i;
    a !== 0 ? (r = Gr(a)) : ((o &= l), o !== 0 && (r = Gr(o)));
  } else (l = n & ~i), l !== 0 ? (r = Gr(l)) : o !== 0 && (r = Gr(o));
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
      (n = 31 - xt(t)), (i = 1 << n), (r |= e[n]), (t &= ~i);
  return r;
}
function fv(e, t) {
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
function dv(e, t) {
  for (
    var n = e.suspendedLanes,
      r = e.pingedLanes,
      i = e.expirationTimes,
      o = e.pendingLanes;
    0 < o;

  ) {
    var l = 31 - xt(o),
      a = 1 << l,
      s = i[l];
    s === -1
      ? (!(a & n) || a & r) && (i[l] = fv(a, t))
      : s <= t && (e.expiredLanes |= a),
      (o &= ~a);
  }
}
function Xa(e) {
  return (
    (e = e.pendingLanes & -1073741825),
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  );
}
function Ud() {
  var e = Xi;
  return (Xi <<= 1), !(Xi & 4194240) && (Xi = 64), e;
}
function la(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function ji(e, t, n) {
  (e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - xt(t)),
    (e[t] = n);
}
function pv(e, t) {
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
    var i = 31 - xt(n),
      o = 1 << i;
    (t[i] = 0), (r[i] = -1), (e[i] = -1), (n &= ~o);
  }
}
function qs(e, t) {
  var n = (e.entangledLanes |= t);
  for (e = e.entanglements; n; ) {
    var r = 31 - xt(n),
      i = 1 << r;
    (i & t) | (e[r] & t) && (e[r] |= t), (n &= ~i);
  }
}
var X = 0;
function Ad(e) {
  return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1;
}
var bd,
  Ys,
  Wd,
  Hd,
  Bd,
  Ga = !1,
  Ji = [],
  fn = null,
  dn = null,
  pn = null,
  mi = new Map(),
  vi = new Map(),
  an = [],
  hv =
    "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
      " "
    );
function Cc(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      fn = null;
      break;
    case "dragenter":
    case "dragleave":
      dn = null;
      break;
    case "mouseover":
    case "mouseout":
      pn = null;
      break;
    case "pointerover":
    case "pointerout":
      mi.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      vi.delete(t.pointerId);
  }
}
function Ur(e, t, n, r, i, o) {
  return e === null || e.nativeEvent !== o
    ? ((e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: o,
        targetContainers: [i],
      }),
      t !== null && ((t = Di(t)), t !== null && Ys(t)),
      e)
    : ((e.eventSystemFlags |= r),
      (t = e.targetContainers),
      i !== null && t.indexOf(i) === -1 && t.push(i),
      e);
}
function mv(e, t, n, r, i) {
  switch (t) {
    case "focusin":
      return (fn = Ur(fn, e, t, n, r, i)), !0;
    case "dragenter":
      return (dn = Ur(dn, e, t, n, r, i)), !0;
    case "mouseover":
      return (pn = Ur(pn, e, t, n, r, i)), !0;
    case "pointerover":
      var o = i.pointerId;
      return mi.set(o, Ur(mi.get(o) || null, e, t, n, r, i)), !0;
    case "gotpointercapture":
      return (
        (o = i.pointerId), vi.set(o, Ur(vi.get(o) || null, e, t, n, r, i)), !0
      );
  }
  return !1;
}
function Vd(e) {
  var t = Ln(e.target);
  if (t !== null) {
    var n = Vn(t);
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = jd(n)), t !== null)) {
          (e.blockedOn = t),
            Bd(e.priority, function () {
              Wd(n);
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
function yo(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = Ja(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      (Ka = r), n.target.dispatchEvent(r), (Ka = null);
    } else return (t = Di(n)), t !== null && Ys(t), (e.blockedOn = n), !1;
    t.shift();
  }
  return !0;
}
function _c(e, t, n) {
  yo(e) && n.delete(t);
}
function vv() {
  (Ga = !1),
    fn !== null && yo(fn) && (fn = null),
    dn !== null && yo(dn) && (dn = null),
    pn !== null && yo(pn) && (pn = null),
    mi.forEach(_c),
    vi.forEach(_c);
}
function Ar(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    Ga ||
      ((Ga = !0),
      et.unstable_scheduleCallback(et.unstable_NormalPriority, vv)));
}
function yi(e) {
  function t(i) {
    return Ar(i, e);
  }
  if (0 < Ji.length) {
    Ar(Ji[0], e);
    for (var n = 1; n < Ji.length; n++) {
      var r = Ji[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (
    fn !== null && Ar(fn, e),
      dn !== null && Ar(dn, e),
      pn !== null && Ar(pn, e),
      mi.forEach(t),
      vi.forEach(t),
      n = 0;
    n < an.length;
    n++
  )
    (r = an[n]), r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < an.length && ((n = an[0]), n.blockedOn === null); )
    Vd(n), n.blockedOn === null && an.shift();
}
var mr = qt.ReactCurrentBatchConfig,
  Lo = !0;
function yv(e, t, n, r) {
  var i = X,
    o = mr.transition;
  mr.transition = null;
  try {
    (X = 1), Xs(e, t, n, r);
  } finally {
    (X = i), (mr.transition = o);
  }
}
function gv(e, t, n, r) {
  var i = X,
    o = mr.transition;
  mr.transition = null;
  try {
    (X = 4), Xs(e, t, n, r);
  } finally {
    (X = i), (mr.transition = o);
  }
}
function Xs(e, t, n, r) {
  if (Lo) {
    var i = Ja(e, t, n, r);
    if (i === null) va(e, t, r, jo, n), Cc(e, r);
    else if (mv(i, e, t, n, r)) r.stopPropagation();
    else if ((Cc(e, r), t & 4 && -1 < hv.indexOf(e))) {
      for (; i !== null; ) {
        var o = Di(i);
        if (
          (o !== null && bd(o),
          (o = Ja(e, t, n, r)),
          o === null && va(e, t, r, jo, n),
          o === i)
        )
          break;
        i = o;
      }
      i !== null && r.stopPropagation();
    } else va(e, t, r, null, n);
  }
}
var jo = null;
function Ja(e, t, n, r) {
  if (((jo = null), (e = Ks(r)), (e = Ln(e)), e !== null))
    if (((t = Vn(e)), t === null)) e = null;
    else if (((n = t.tag), n === 13)) {
      if (((e = jd(t)), e !== null)) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
  return (jo = e), null;
}
function Kd(e) {
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
      switch (ov()) {
        case Qs:
          return 1;
        case $d:
          return 4;
        case Oo:
        case lv:
          return 16;
        case Fd:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var un = null,
  Gs = null,
  go = null;
function Qd() {
  if (go) return go;
  var e,
    t = Gs,
    n = t.length,
    r,
    i = "value" in un ? un.value : un.textContent,
    o = i.length;
  for (e = 0; e < n && t[e] === i[e]; e++);
  var l = n - e;
  for (r = 1; r <= l && t[n - r] === i[o - r]; r++);
  return (go = i.slice(e, 1 < r ? 1 - r : void 0));
}
function So(e) {
  var t = e.keyCode;
  return (
    "charCode" in e
      ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
      : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function Zi() {
  return !0;
}
function Pc() {
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
        ? Zi
        : Pc),
      (this.isPropagationStopped = Pc),
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
          (this.isDefaultPrevented = Zi));
      },
      stopPropagation: function () {
        var n = this.nativeEvent;
        n &&
          (n.stopPropagation
            ? n.stopPropagation()
            : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
          (this.isPropagationStopped = Zi));
      },
      persist: function () {},
      isPersistent: Zi,
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
  Js = nt(Or),
  Ii = de({}, Or, { view: 0, detail: 0 }),
  Sv = nt(Ii),
  aa,
  sa,
  br,
  ol = de({}, Ii, {
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
    getModifierState: Zs,
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
        : (e !== br &&
            (br && e.type === "mousemove"
              ? ((aa = e.screenX - br.screenX), (sa = e.screenY - br.screenY))
              : (sa = aa = 0),
            (br = e)),
          aa);
    },
    movementY: function (e) {
      return "movementY" in e ? e.movementY : sa;
    },
  }),
  kc = nt(ol),
  wv = de({}, ol, { dataTransfer: 0 }),
  xv = nt(wv),
  Ev = de({}, Ii, { relatedTarget: 0 }),
  ua = nt(Ev),
  Rv = de({}, Or, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  Cv = nt(Rv),
  _v = de({}, Or, {
    clipboardData: function (e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    },
  }),
  Pv = nt(_v),
  kv = de({}, Or, { data: 0 }),
  Nc = nt(kv),
  Nv = {
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
  Tv = {
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
  Ov = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey",
  };
function Mv(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = Ov[e]) ? !!t[e] : !1;
}
function Zs() {
  return Mv;
}
var Lv = de({}, Ii, {
    key: function (e) {
      if (e.key) {
        var t = Nv[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress"
        ? ((e = So(e)), e === 13 ? "Enter" : String.fromCharCode(e))
        : e.type === "keydown" || e.type === "keyup"
        ? Tv[e.keyCode] || "Unidentified"
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
    getModifierState: Zs,
    charCode: function (e) {
      return e.type === "keypress" ? So(e) : 0;
    },
    keyCode: function (e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === "keypress"
        ? So(e)
        : e.type === "keydown" || e.type === "keyup"
        ? e.keyCode
        : 0;
    },
  }),
  jv = nt(Lv),
  Iv = de({}, ol, {
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
  Tc = nt(Iv),
  Dv = de({}, Ii, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: Zs,
  }),
  zv = nt(Dv),
  $v = de({}, Or, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  Fv = nt($v),
  Uv = de({}, ol, {
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
  Av = nt(Uv),
  bv = [9, 13, 27, 32],
  eu = Bt && "CompositionEvent" in window,
  ni = null;
Bt && "documentMode" in document && (ni = document.documentMode);
var Wv = Bt && "TextEvent" in window && !ni,
  qd = Bt && (!eu || (ni && 8 < ni && 11 >= ni)),
  Oc = String.fromCharCode(32),
  Mc = !1;
function Yd(e, t) {
  switch (e) {
    case "keyup":
      return bv.indexOf(t.keyCode) !== -1;
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
function Xd(e) {
  return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
}
var er = !1;
function Hv(e, t) {
  switch (e) {
    case "compositionend":
      return Xd(t);
    case "keypress":
      return t.which !== 32 ? null : ((Mc = !0), Oc);
    case "textInput":
      return (e = t.data), e === Oc && Mc ? null : e;
    default:
      return null;
  }
}
function Bv(e, t) {
  if (er)
    return e === "compositionend" || (!eu && Yd(e, t))
      ? ((e = Qd()), (go = Gs = un = null), (er = !1), e)
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
      return qd && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var Vv = {
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
function Lc(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!Vv[e.type] : t === "textarea";
}
function Gd(e, t, n, r) {
  Nd(r),
    (t = Io(t, "onChange")),
    0 < t.length &&
      ((n = new Js("onChange", "change", null, n, r)),
      e.push({ event: n, listeners: t }));
}
var ri = null,
  gi = null;
function Kv(e) {
  sp(e, 0);
}
function ll(e) {
  var t = rr(e);
  if (xd(t)) return e;
}
function Qv(e, t) {
  if (e === "change") return t;
}
var Jd = !1;
if (Bt) {
  var ca;
  if (Bt) {
    var fa = "oninput" in document;
    if (!fa) {
      var jc = document.createElement("div");
      jc.setAttribute("oninput", "return;"),
        (fa = typeof jc.oninput == "function");
    }
    ca = fa;
  } else ca = !1;
  Jd = ca && (!document.documentMode || 9 < document.documentMode);
}
function Ic() {
  ri && (ri.detachEvent("onpropertychange", Zd), (gi = ri = null));
}
function Zd(e) {
  if (e.propertyName === "value" && ll(gi)) {
    var t = [];
    Gd(t, gi, e, Ks(e)), Ld(Kv, t);
  }
}
function qv(e, t, n) {
  e === "focusin"
    ? (Ic(), (ri = t), (gi = n), ri.attachEvent("onpropertychange", Zd))
    : e === "focusout" && Ic();
}
function Yv(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return ll(gi);
}
function Xv(e, t) {
  if (e === "click") return ll(t);
}
function Gv(e, t) {
  if (e === "input" || e === "change") return ll(t);
}
function Jv(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var Rt = typeof Object.is == "function" ? Object.is : Jv;
function Si(e, t) {
  if (Rt(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  var n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var i = n[r];
    if (!Ia.call(t, i) || !Rt(e[i], t[i])) return !1;
  }
  return !0;
}
function Dc(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function zc(e, t) {
  var n = Dc(e);
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
    n = Dc(n);
  }
}
function ep(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
      ? !1
      : t && t.nodeType === 3
      ? ep(e, t.parentNode)
      : "contains" in e
      ? e.contains(t)
      : e.compareDocumentPosition
      ? !!(e.compareDocumentPosition(t) & 16)
      : !1
    : !1;
}
function tp() {
  for (var e = window, t = ko(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = ko(e.document);
  }
  return t;
}
function tu(e) {
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
function Zv(e) {
  var t = tp(),
    n = e.focusedElem,
    r = e.selectionRange;
  if (
    t !== n &&
    n &&
    n.ownerDocument &&
    ep(n.ownerDocument.documentElement, n)
  ) {
    if (r !== null && tu(n)) {
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
          (i = zc(n, o));
        var l = zc(n, r);
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
var ey = Bt && "documentMode" in document && 11 >= document.documentMode,
  tr = null,
  Za = null,
  ii = null,
  es = !1;
function $c(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  es ||
    tr == null ||
    tr !== ko(r) ||
    ((r = tr),
    "selectionStart" in r && tu(r)
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
    (ii && Si(ii, r)) ||
      ((ii = r),
      (r = Io(Za, "onSelect")),
      0 < r.length &&
        ((t = new Js("onSelect", "select", null, t, n)),
        e.push({ event: t, listeners: r }),
        (t.target = tr))));
}
function eo(e, t) {
  var n = {};
  return (
    (n[e.toLowerCase()] = t.toLowerCase()),
    (n["Webkit" + e] = "webkit" + t),
    (n["Moz" + e] = "moz" + t),
    n
  );
}
var nr = {
    animationend: eo("Animation", "AnimationEnd"),
    animationiteration: eo("Animation", "AnimationIteration"),
    animationstart: eo("Animation", "AnimationStart"),
    transitionend: eo("Transition", "TransitionEnd"),
  },
  da = {},
  np = {};
Bt &&
  ((np = document.createElement("div").style),
  "AnimationEvent" in window ||
    (delete nr.animationend.animation,
    delete nr.animationiteration.animation,
    delete nr.animationstart.animation),
  "TransitionEvent" in window || delete nr.transitionend.transition);
function al(e) {
  if (da[e]) return da[e];
  if (!nr[e]) return e;
  var t = nr[e],
    n;
  for (n in t) if (t.hasOwnProperty(n) && n in np) return (da[e] = t[n]);
  return e;
}
var rp = al("animationend"),
  ip = al("animationiteration"),
  op = al("animationstart"),
  lp = al("transitionend"),
  ap = new Map(),
  Fc =
    "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " "
    );
function En(e, t) {
  ap.set(e, t), Bn(t, [e]);
}
for (var pa = 0; pa < Fc.length; pa++) {
  var ha = Fc[pa],
    ty = ha.toLowerCase(),
    ny = ha[0].toUpperCase() + ha.slice(1);
  En(ty, "on" + ny);
}
En(rp, "onAnimationEnd");
En(ip, "onAnimationIteration");
En(op, "onAnimationStart");
En("dblclick", "onDoubleClick");
En("focusin", "onFocus");
En("focusout", "onBlur");
En(lp, "onTransitionEnd");
Sr("onMouseEnter", ["mouseout", "mouseover"]);
Sr("onMouseLeave", ["mouseout", "mouseover"]);
Sr("onPointerEnter", ["pointerout", "pointerover"]);
Sr("onPointerLeave", ["pointerout", "pointerover"]);
Bn(
  "onChange",
  "change click focusin focusout input keydown keyup selectionchange".split(" ")
);
Bn(
  "onSelect",
  "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
    " "
  )
);
Bn("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
Bn(
  "onCompositionEnd",
  "compositionend focusout keydown keypress keyup mousedown".split(" ")
);
Bn(
  "onCompositionStart",
  "compositionstart focusout keydown keypress keyup mousedown".split(" ")
);
Bn(
  "onCompositionUpdate",
  "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
);
var Jr =
    "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " "
    ),
  ry = new Set("cancel close invalid load scroll toggle".split(" ").concat(Jr));
function Uc(e, t, n) {
  var r = e.type || "unknown-event";
  (e.currentTarget = n), tv(r, t, void 0, e), (e.currentTarget = null);
}
function sp(e, t) {
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
          Uc(i, a, u), (o = s);
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
          Uc(i, a, u), (o = s);
        }
    }
  }
  if (To) throw ((e = Ya), (To = !1), (Ya = null), e);
}
function ie(e, t) {
  var n = t[os];
  n === void 0 && (n = t[os] = new Set());
  var r = e + "__bubble";
  n.has(r) || (up(t, e, 2, !1), n.add(r));
}
function ma(e, t, n) {
  var r = 0;
  t && (r |= 4), up(n, e, r, t);
}
var to = "_reactListening" + Math.random().toString(36).slice(2);
function wi(e) {
  if (!e[to]) {
    (e[to] = !0),
      vd.forEach(function (n) {
        n !== "selectionchange" && (ry.has(n) || ma(n, !1, e), ma(n, !0, e));
      });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[to] || ((t[to] = !0), ma("selectionchange", !1, t));
  }
}
function up(e, t, n, r) {
  switch (Kd(t)) {
    case 1:
      var i = yv;
      break;
    case 4:
      i = gv;
      break;
    default:
      i = Xs;
  }
  (n = i.bind(null, t, n, e)),
    (i = void 0),
    !qa ||
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
function va(e, t, n, r, i) {
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
          if (((l = Ln(a)), l === null)) return;
          if (((s = l.tag), s === 5 || s === 6)) {
            r = o = l;
            continue e;
          }
          a = a.parentNode;
        }
      }
      r = r.return;
    }
  Ld(function () {
    var u = o,
      f = Ks(n),
      h = [];
    e: {
      var v = ap.get(e);
      if (v !== void 0) {
        var y = Js,
          w = e;
        switch (e) {
          case "keypress":
            if (So(n) === 0) break e;
          case "keydown":
          case "keyup":
            y = jv;
            break;
          case "focusin":
            (w = "focus"), (y = ua);
            break;
          case "focusout":
            (w = "blur"), (y = ua);
            break;
          case "beforeblur":
          case "afterblur":
            y = ua;
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
            y = kc;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            y = xv;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            y = zv;
            break;
          case rp:
          case ip:
          case op:
            y = Cv;
            break;
          case lp:
            y = Fv;
            break;
          case "scroll":
            y = Sv;
            break;
          case "wheel":
            y = Av;
            break;
          case "copy":
          case "cut":
          case "paste":
            y = Pv;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            y = Tc;
        }
        var S = (t & 4) !== 0,
          C = !S && e === "scroll",
          p = S ? (v !== null ? v + "Capture" : null) : v;
        S = [];
        for (var c = u, m; c !== null; ) {
          m = c;
          var d = m.stateNode;
          if (
            (m.tag === 5 &&
              d !== null &&
              ((m = d),
              p !== null && ((d = hi(c, p)), d != null && S.push(xi(c, d, m)))),
            C)
          )
            break;
          c = c.return;
        }
        0 < S.length &&
          ((v = new y(v, w, null, n, f)), h.push({ event: v, listeners: S }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (
          ((v = e === "mouseover" || e === "pointerover"),
          (y = e === "mouseout" || e === "pointerout"),
          v &&
            n !== Ka &&
            (w = n.relatedTarget || n.fromElement) &&
            (Ln(w) || w[Vt]))
        )
          break e;
        if (
          (y || v) &&
          ((v =
            f.window === f
              ? f
              : (v = f.ownerDocument)
              ? v.defaultView || v.parentWindow
              : window),
          y
            ? ((w = n.relatedTarget || n.toElement),
              (y = u),
              (w = w ? Ln(w) : null),
              w !== null &&
                ((C = Vn(w)), w !== C || (w.tag !== 5 && w.tag !== 6)) &&
                (w = null))
            : ((y = null), (w = u)),
          y !== w)
        ) {
          if (
            ((S = kc),
            (d = "onMouseLeave"),
            (p = "onMouseEnter"),
            (c = "mouse"),
            (e === "pointerout" || e === "pointerover") &&
              ((S = Tc),
              (d = "onPointerLeave"),
              (p = "onPointerEnter"),
              (c = "pointer")),
            (C = y == null ? v : rr(y)),
            (m = w == null ? v : rr(w)),
            (v = new S(d, c + "leave", y, n, f)),
            (v.target = C),
            (v.relatedTarget = m),
            (d = null),
            Ln(f) === u &&
              ((S = new S(p, c + "enter", w, n, f)),
              (S.target = m),
              (S.relatedTarget = C),
              (d = S)),
            (C = d),
            y && w)
          )
            t: {
              for (S = y, p = w, c = 0, m = S; m; m = Xn(m)) c++;
              for (m = 0, d = p; d; d = Xn(d)) m++;
              for (; 0 < c - m; ) (S = Xn(S)), c--;
              for (; 0 < m - c; ) (p = Xn(p)), m--;
              for (; c--; ) {
                if (S === p || (p !== null && S === p.alternate)) break t;
                (S = Xn(S)), (p = Xn(p));
              }
              S = null;
            }
          else S = null;
          y !== null && Ac(h, v, y, S, !1),
            w !== null && C !== null && Ac(h, C, w, S, !0);
        }
      }
      e: {
        if (
          ((v = u ? rr(u) : window),
          (y = v.nodeName && v.nodeName.toLowerCase()),
          y === "select" || (y === "input" && v.type === "file"))
        )
          var x = Qv;
        else if (Lc(v))
          if (Jd) x = Gv;
          else {
            x = Yv;
            var P = qv;
          }
        else
          (y = v.nodeName) &&
            y.toLowerCase() === "input" &&
            (v.type === "checkbox" || v.type === "radio") &&
            (x = Xv);
        if (x && (x = x(e, u))) {
          Gd(h, x, n, f);
          break e;
        }
        P && P(e, v, u),
          e === "focusout" &&
            (P = v._wrapperState) &&
            P.controlled &&
            v.type === "number" &&
            ba(v, "number", v.value);
      }
      switch (((P = u ? rr(u) : window), e)) {
        case "focusin":
          (Lc(P) || P.contentEditable === "true") &&
            ((tr = P), (Za = u), (ii = null));
          break;
        case "focusout":
          ii = Za = tr = null;
          break;
        case "mousedown":
          es = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          (es = !1), $c(h, n, f);
          break;
        case "selectionchange":
          if (ey) break;
        case "keydown":
        case "keyup":
          $c(h, n, f);
      }
      var T;
      if (eu)
        e: {
          switch (e) {
            case "compositionstart":
              var N = "onCompositionStart";
              break e;
            case "compositionend":
              N = "onCompositionEnd";
              break e;
            case "compositionupdate":
              N = "onCompositionUpdate";
              break e;
          }
          N = void 0;
        }
      else
        er
          ? Yd(e, n) && (N = "onCompositionEnd")
          : e === "keydown" && n.keyCode === 229 && (N = "onCompositionStart");
      N &&
        (qd &&
          n.locale !== "ko" &&
          (er || N !== "onCompositionStart"
            ? N === "onCompositionEnd" && er && (T = Qd())
            : ((un = f),
              (Gs = "value" in un ? un.value : un.textContent),
              (er = !0))),
        (P = Io(u, N)),
        0 < P.length &&
          ((N = new Nc(N, e, null, n, f)),
          h.push({ event: N, listeners: P }),
          T ? (N.data = T) : ((T = Xd(n)), T !== null && (N.data = T)))),
        (T = Wv ? Hv(e, n) : Bv(e, n)) &&
          ((u = Io(u, "onBeforeInput")),
          0 < u.length &&
            ((f = new Nc("onBeforeInput", "beforeinput", null, n, f)),
            h.push({ event: f, listeners: u }),
            (f.data = T)));
    }
    sp(h, t);
  });
}
function xi(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function Io(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var i = e,
      o = i.stateNode;
    i.tag === 5 &&
      o !== null &&
      ((i = o),
      (o = hi(e, n)),
      o != null && r.unshift(xi(e, o, i)),
      (o = hi(e, t)),
      o != null && r.push(xi(e, o, i))),
      (e = e.return);
  }
  return r;
}
function Xn(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function Ac(e, t, n, r, i) {
  for (var o = t._reactName, l = []; n !== null && n !== r; ) {
    var a = n,
      s = a.alternate,
      u = a.stateNode;
    if (s !== null && s === r) break;
    a.tag === 5 &&
      u !== null &&
      ((a = u),
      i
        ? ((s = hi(n, o)), s != null && l.unshift(xi(n, s, a)))
        : i || ((s = hi(n, o)), s != null && l.push(xi(n, s, a)))),
      (n = n.return);
  }
  l.length !== 0 && e.push({ event: t, listeners: l });
}
var iy = /\r\n?/g,
  oy = /\u0000|\uFFFD/g;
function bc(e) {
  return (typeof e == "string" ? e : "" + e)
    .replace(
      iy,
      `
`
    )
    .replace(oy, "");
}
function no(e, t, n) {
  if (((t = bc(t)), bc(e) !== t && n)) throw Error(O(425));
}
function Do() {}
var ts = null,
  ns = null;
function rs(e, t) {
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
var is = typeof setTimeout == "function" ? setTimeout : void 0,
  ly = typeof clearTimeout == "function" ? clearTimeout : void 0,
  Wc = typeof Promise == "function" ? Promise : void 0,
  ay =
    typeof queueMicrotask == "function"
      ? queueMicrotask
      : typeof Wc < "u"
      ? function (e) {
          return Wc.resolve(null).then(e).catch(sy);
        }
      : is;
function sy(e) {
  setTimeout(function () {
    throw e;
  });
}
function ya(e, t) {
  var n = t,
    r = 0;
  do {
    var i = n.nextSibling;
    if ((e.removeChild(n), i && i.nodeType === 8))
      if (((n = i.data), n === "/$")) {
        if (r === 0) {
          e.removeChild(i), yi(t);
          return;
        }
        r--;
      } else (n !== "$" && n !== "$?" && n !== "$!") || r++;
    n = i;
  } while (n);
  yi(t);
}
function hn(e) {
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
function Hc(e) {
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
  Tt = "__reactFiber$" + Mr,
  Ei = "__reactProps$" + Mr,
  Vt = "__reactContainer$" + Mr,
  os = "__reactEvents$" + Mr,
  uy = "__reactListeners$" + Mr,
  cy = "__reactHandles$" + Mr;
function Ln(e) {
  var t = e[Tt];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if ((t = n[Vt] || n[Tt])) {
      if (
        ((n = t.alternate),
        t.child !== null || (n !== null && n.child !== null))
      )
        for (e = Hc(e); e !== null; ) {
          if ((n = e[Tt])) return n;
          e = Hc(e);
        }
      return t;
    }
    (e = n), (n = e.parentNode);
  }
  return null;
}
function Di(e) {
  return (
    (e = e[Tt] || e[Vt]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  );
}
function rr(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(O(33));
}
function sl(e) {
  return e[Ei] || null;
}
var ls = [],
  ir = -1;
function Rn(e) {
  return { current: e };
}
function oe(e) {
  0 > ir || ((e.current = ls[ir]), (ls[ir] = null), ir--);
}
function re(e, t) {
  ir++, (ls[ir] = e.current), (e.current = t);
}
var wn = {},
  $e = Rn(wn),
  Ve = Rn(!1),
  Fn = wn;
function wr(e, t) {
  var n = e.type.contextTypes;
  if (!n) return wn;
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
function zo() {
  oe(Ve), oe($e);
}
function Bc(e, t, n) {
  if ($e.current !== wn) throw Error(O(168));
  re($e, t), re(Ve, n);
}
function cp(e, t, n) {
  var r = e.stateNode;
  if (((t = t.childContextTypes), typeof r.getChildContext != "function"))
    return n;
  r = r.getChildContext();
  for (var i in r) if (!(i in t)) throw Error(O(108, qm(e) || "Unknown", i));
  return de({}, n, r);
}
function $o(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || wn),
    (Fn = $e.current),
    re($e, e),
    re(Ve, Ve.current),
    !0
  );
}
function Vc(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(O(169));
  n
    ? ((e = cp(e, t, Fn)),
      (r.__reactInternalMemoizedMergedChildContext = e),
      oe(Ve),
      oe($e),
      re($e, e))
    : oe(Ve),
    re(Ve, n);
}
var Ft = null,
  ul = !1,
  ga = !1;
function fp(e) {
  Ft === null ? (Ft = [e]) : Ft.push(e);
}
function fy(e) {
  (ul = !0), fp(e);
}
function Cn() {
  if (!ga && Ft !== null) {
    ga = !0;
    var e = 0,
      t = X;
    try {
      var n = Ft;
      for (X = 1; e < n.length; e++) {
        var r = n[e];
        do r = r(!0);
        while (r !== null);
      }
      (Ft = null), (ul = !1);
    } catch (i) {
      throw (Ft !== null && (Ft = Ft.slice(e + 1)), zd(Qs, Cn), i);
    } finally {
      (X = t), (ga = !1);
    }
  }
  return null;
}
var or = [],
  lr = 0,
  Fo = null,
  Uo = 0,
  lt = [],
  at = 0,
  Un = null,
  At = 1,
  bt = "";
function Tn(e, t) {
  (or[lr++] = Uo), (or[lr++] = Fo), (Fo = e), (Uo = t);
}
function dp(e, t, n) {
  (lt[at++] = At), (lt[at++] = bt), (lt[at++] = Un), (Un = e);
  var r = At;
  e = bt;
  var i = 32 - xt(r) - 1;
  (r &= ~(1 << i)), (n += 1);
  var o = 32 - xt(t) + i;
  if (30 < o) {
    var l = i - (i % 5);
    (o = (r & ((1 << l) - 1)).toString(32)),
      (r >>= l),
      (i -= l),
      (At = (1 << (32 - xt(t) + i)) | (n << i) | r),
      (bt = o + e);
  } else (At = (1 << o) | (n << i) | r), (bt = e);
}
function nu(e) {
  e.return !== null && (Tn(e, 1), dp(e, 1, 0));
}
function ru(e) {
  for (; e === Fo; )
    (Fo = or[--lr]), (or[lr] = null), (Uo = or[--lr]), (or[lr] = null);
  for (; e === Un; )
    (Un = lt[--at]),
      (lt[at] = null),
      (bt = lt[--at]),
      (lt[at] = null),
      (At = lt[--at]),
      (lt[at] = null);
}
var Ze = null,
  Je = null,
  le = !1,
  wt = null;
function pp(e, t) {
  var n = st(5, null, null, 0);
  (n.elementType = "DELETED"),
    (n.stateNode = t),
    (n.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
}
function Kc(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return (
        (t =
          t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
            ? null
            : t),
        t !== null
          ? ((e.stateNode = t), (Ze = e), (Je = hn(t.firstChild)), !0)
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
          ? ((n = Un !== null ? { id: At, overflow: bt } : null),
            (e.memoizedState = {
              dehydrated: t,
              treeContext: n,
              retryLane: 1073741824,
            }),
            (n = st(18, null, null, 0)),
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
function as(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function ss(e) {
  if (le) {
    var t = Je;
    if (t) {
      var n = t;
      if (!Kc(e, t)) {
        if (as(e)) throw Error(O(418));
        t = hn(n.nextSibling);
        var r = Ze;
        t && Kc(e, t)
          ? pp(r, n)
          : ((e.flags = (e.flags & -4097) | 2), (le = !1), (Ze = e));
      }
    } else {
      if (as(e)) throw Error(O(418));
      (e.flags = (e.flags & -4097) | 2), (le = !1), (Ze = e);
    }
  }
}
function Qc(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  Ze = e;
}
function ro(e) {
  if (e !== Ze) return !1;
  if (!le) return Qc(e), (le = !0), !1;
  var t;
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type),
      (t = t !== "head" && t !== "body" && !rs(e.type, e.memoizedProps))),
    t && (t = Je))
  ) {
    if (as(e)) throw (hp(), Error(O(418)));
    for (; t; ) pp(e, t), (t = hn(t.nextSibling));
  }
  if ((Qc(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(O(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              Je = hn(e.nextSibling);
              break e;
            }
            t--;
          } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
        }
        e = e.nextSibling;
      }
      Je = null;
    }
  } else Je = Ze ? hn(e.stateNode.nextSibling) : null;
  return !0;
}
function hp() {
  for (var e = Je; e; ) e = hn(e.nextSibling);
}
function xr() {
  (Je = Ze = null), (le = !1);
}
function iu(e) {
  wt === null ? (wt = [e]) : wt.push(e);
}
var dy = qt.ReactCurrentBatchConfig;
function yt(e, t) {
  if (e && e.defaultProps) {
    (t = de({}, t)), (e = e.defaultProps);
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
var Ao = Rn(null),
  bo = null,
  ar = null,
  ou = null;
function lu() {
  ou = ar = bo = null;
}
function au(e) {
  var t = Ao.current;
  oe(Ao), (e._currentValue = t);
}
function us(e, t, n) {
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
function vr(e, t) {
  (bo = e),
    (ou = ar = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      (e.lanes & t && (Be = !0), (e.firstContext = null));
}
function ct(e) {
  var t = e._currentValue;
  if (ou !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), ar === null)) {
      if (bo === null) throw Error(O(308));
      (ar = e), (bo.dependencies = { lanes: 0, firstContext: e });
    } else ar = ar.next = e;
  return t;
}
var jn = null;
function su(e) {
  jn === null ? (jn = [e]) : jn.push(e);
}
function mp(e, t, n, r) {
  var i = t.interleaved;
  return (
    i === null ? ((n.next = n), su(t)) : ((n.next = i.next), (i.next = n)),
    (t.interleaved = n),
    Kt(e, r)
  );
}
function Kt(e, t) {
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
var ln = !1;
function uu(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function vp(e, t) {
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
function Wt(e, t) {
  return {
    eventTime: e,
    lane: t,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  };
}
function mn(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (((r = r.shared), Q & 2)) {
    var i = r.pending;
    return (
      i === null ? (t.next = t) : ((t.next = i.next), (i.next = t)),
      (r.pending = t),
      Kt(e, n)
    );
  }
  return (
    (i = r.interleaved),
    i === null ? ((t.next = t), su(r)) : ((t.next = i.next), (i.next = t)),
    (r.interleaved = t),
    Kt(e, n)
  );
}
function wo(e, t, n) {
  if (
    ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
  ) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), qs(e, n);
  }
}
function qc(e, t) {
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
function Wo(e, t, n, r) {
  var i = e.updateQueue;
  ln = !1;
  var o = i.firstBaseUpdate,
    l = i.lastBaseUpdate,
    a = i.shared.pending;
  if (a !== null) {
    i.shared.pending = null;
    var s = a,
      u = s.next;
    (s.next = null), l === null ? (o = u) : (l.next = u), (l = s);
    var f = e.alternate;
    f !== null &&
      ((f = f.updateQueue),
      (a = f.lastBaseUpdate),
      a !== l &&
        (a === null ? (f.firstBaseUpdate = u) : (a.next = u),
        (f.lastBaseUpdate = s)));
  }
  if (o !== null) {
    var h = i.baseState;
    (l = 0), (f = u = s = null), (a = o);
    do {
      var v = a.lane,
        y = a.eventTime;
      if ((r & v) === v) {
        f !== null &&
          (f = f.next =
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
            S = a;
          switch (((v = t), (y = n), S.tag)) {
            case 1:
              if (((w = S.payload), typeof w == "function")) {
                h = w.call(y, h, v);
                break e;
              }
              h = w;
              break e;
            case 3:
              w.flags = (w.flags & -65537) | 128;
            case 0:
              if (
                ((w = S.payload),
                (v = typeof w == "function" ? w.call(y, h, v) : w),
                v == null)
              )
                break e;
              h = de({}, h, v);
              break e;
            case 2:
              ln = !0;
          }
        }
        a.callback !== null &&
          a.lane !== 0 &&
          ((e.flags |= 64),
          (v = i.effects),
          v === null ? (i.effects = [a]) : v.push(a));
      } else
        (y = {
          eventTime: y,
          lane: v,
          tag: a.tag,
          payload: a.payload,
          callback: a.callback,
          next: null,
        }),
          f === null ? ((u = f = y), (s = h)) : (f = f.next = y),
          (l |= v);
      if (((a = a.next), a === null)) {
        if (((a = i.shared.pending), a === null)) break;
        (v = a),
          (a = v.next),
          (v.next = null),
          (i.lastBaseUpdate = v),
          (i.shared.pending = null);
      }
    } while (1);
    if (
      (f === null && (s = h),
      (i.baseState = s),
      (i.firstBaseUpdate = u),
      (i.lastBaseUpdate = f),
      (t = i.shared.interleaved),
      t !== null)
    ) {
      i = t;
      do (l |= i.lane), (i = i.next);
      while (i !== t);
    } else o === null && (i.shared.lanes = 0);
    (bn |= l), (e.lanes = l), (e.memoizedState = h);
  }
}
function Yc(e, t, n) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var r = e[t],
        i = r.callback;
      if (i !== null) {
        if (((r.callback = null), (r = n), typeof i != "function"))
          throw Error(O(191, i));
        i.call(r);
      }
    }
}
var yp = new md.Component().refs;
function cs(e, t, n, r) {
  (t = e.memoizedState),
    (n = n(r, t)),
    (n = n == null ? t : de({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n);
}
var cl = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? Vn(e) === e : !1;
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals;
    var r = Ae(),
      i = yn(e),
      o = Wt(r, i);
    (o.payload = t),
      n != null && (o.callback = n),
      (t = mn(e, o, i)),
      t !== null && (Et(t, e, i, r), wo(t, e, i));
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals;
    var r = Ae(),
      i = yn(e),
      o = Wt(r, i);
    (o.tag = 1),
      (o.payload = t),
      n != null && (o.callback = n),
      (t = mn(e, o, i)),
      t !== null && (Et(t, e, i, r), wo(t, e, i));
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var n = Ae(),
      r = yn(e),
      i = Wt(n, r);
    (i.tag = 2),
      t != null && (i.callback = t),
      (t = mn(e, i, r)),
      t !== null && (Et(t, e, r, n), wo(t, e, r));
  },
};
function Xc(e, t, n, r, i, o, l) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == "function"
      ? e.shouldComponentUpdate(r, o, l)
      : t.prototype && t.prototype.isPureReactComponent
      ? !Si(n, r) || !Si(i, o)
      : !0
  );
}
function gp(e, t, n) {
  var r = !1,
    i = wn,
    o = t.contextType;
  return (
    typeof o == "object" && o !== null
      ? (o = ct(o))
      : ((i = Ke(t) ? Fn : $e.current),
        (r = t.contextTypes),
        (o = (r = r != null) ? wr(e, i) : wn)),
    (t = new t(n, o)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = cl),
    (e.stateNode = t),
    (t._reactInternals = e),
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = i),
      (e.__reactInternalMemoizedMaskedChildContext = o)),
    t
  );
}
function Gc(e, t, n, r) {
  (e = t.state),
    typeof t.componentWillReceiveProps == "function" &&
      t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == "function" &&
      t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && cl.enqueueReplaceState(t, t.state, null);
}
function fs(e, t, n, r) {
  var i = e.stateNode;
  (i.props = n), (i.state = e.memoizedState), (i.refs = yp), uu(e);
  var o = t.contextType;
  typeof o == "object" && o !== null
    ? (i.context = ct(o))
    : ((o = Ke(t) ? Fn : $e.current), (i.context = wr(e, o))),
    (i.state = e.memoizedState),
    (o = t.getDerivedStateFromProps),
    typeof o == "function" && (cs(e, t, o, n), (i.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == "function" ||
      typeof i.getSnapshotBeforeUpdate == "function" ||
      (typeof i.UNSAFE_componentWillMount != "function" &&
        typeof i.componentWillMount != "function") ||
      ((t = i.state),
      typeof i.componentWillMount == "function" && i.componentWillMount(),
      typeof i.UNSAFE_componentWillMount == "function" &&
        i.UNSAFE_componentWillMount(),
      t !== i.state && cl.enqueueReplaceState(i, i.state, null),
      Wo(e, n, i, r),
      (i.state = e.memoizedState)),
    typeof i.componentDidMount == "function" && (e.flags |= 4194308);
}
function Wr(e, t, n) {
  if (
    ((e = n.ref), e !== null && typeof e != "function" && typeof e != "object")
  ) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(O(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(O(147, e));
      var i = r,
        o = "" + e;
      return t !== null &&
        t.ref !== null &&
        typeof t.ref == "function" &&
        t.ref._stringRef === o
        ? t.ref
        : ((t = function (l) {
            var a = i.refs;
            a === yp && (a = i.refs = {}),
              l === null ? delete a[o] : (a[o] = l);
          }),
          (t._stringRef = o),
          t);
    }
    if (typeof e != "string") throw Error(O(284));
    if (!n._owner) throw Error(O(290, e));
  }
  return e;
}
function io(e, t) {
  throw (
    ((e = Object.prototype.toString.call(t)),
    Error(
      O(
        31,
        e === "[object Object]"
          ? "object with keys {" + Object.keys(t).join(", ") + "}"
          : e
      )
    ))
  );
}
function Jc(e) {
  var t = e._init;
  return t(e._payload);
}
function Sp(e) {
  function t(p, c) {
    if (e) {
      var m = p.deletions;
      m === null ? ((p.deletions = [c]), (p.flags |= 16)) : m.push(c);
    }
  }
  function n(p, c) {
    if (!e) return null;
    for (; c !== null; ) t(p, c), (c = c.sibling);
    return null;
  }
  function r(p, c) {
    for (p = new Map(); c !== null; )
      c.key !== null ? p.set(c.key, c) : p.set(c.index, c), (c = c.sibling);
    return p;
  }
  function i(p, c) {
    return (p = gn(p, c)), (p.index = 0), (p.sibling = null), p;
  }
  function o(p, c, m) {
    return (
      (p.index = m),
      e
        ? ((m = p.alternate),
          m !== null
            ? ((m = m.index), m < c ? ((p.flags |= 2), c) : m)
            : ((p.flags |= 2), c))
        : ((p.flags |= 1048576), c)
    );
  }
  function l(p) {
    return e && p.alternate === null && (p.flags |= 2), p;
  }
  function a(p, c, m, d) {
    return c === null || c.tag !== 6
      ? ((c = _a(m, p.mode, d)), (c.return = p), c)
      : ((c = i(c, m)), (c.return = p), c);
  }
  function s(p, c, m, d) {
    var x = m.type;
    return x === Zn
      ? f(p, c, m.props.children, d, m.key)
      : c !== null &&
        (c.elementType === x ||
          (typeof x == "object" &&
            x !== null &&
            x.$$typeof === on &&
            Jc(x) === c.type))
      ? ((d = i(c, m.props)), (d.ref = Wr(p, c, m)), (d.return = p), d)
      : ((d = Po(m.type, m.key, m.props, null, p.mode, d)),
        (d.ref = Wr(p, c, m)),
        (d.return = p),
        d);
  }
  function u(p, c, m, d) {
    return c === null ||
      c.tag !== 4 ||
      c.stateNode.containerInfo !== m.containerInfo ||
      c.stateNode.implementation !== m.implementation
      ? ((c = Pa(m, p.mode, d)), (c.return = p), c)
      : ((c = i(c, m.children || [])), (c.return = p), c);
  }
  function f(p, c, m, d, x) {
    return c === null || c.tag !== 7
      ? ((c = $n(m, p.mode, d, x)), (c.return = p), c)
      : ((c = i(c, m)), (c.return = p), c);
  }
  function h(p, c, m) {
    if ((typeof c == "string" && c !== "") || typeof c == "number")
      return (c = _a("" + c, p.mode, m)), (c.return = p), c;
    if (typeof c == "object" && c !== null) {
      switch (c.$$typeof) {
        case Qi:
          return (
            (m = Po(c.type, c.key, c.props, null, p.mode, m)),
            (m.ref = Wr(p, null, c)),
            (m.return = p),
            m
          );
        case Jn:
          return (c = Pa(c, p.mode, m)), (c.return = p), c;
        case on:
          var d = c._init;
          return h(p, d(c._payload), m);
      }
      if (Xr(c) || $r(c))
        return (c = $n(c, p.mode, m, null)), (c.return = p), c;
      io(p, c);
    }
    return null;
  }
  function v(p, c, m, d) {
    var x = c !== null ? c.key : null;
    if ((typeof m == "string" && m !== "") || typeof m == "number")
      return x !== null ? null : a(p, c, "" + m, d);
    if (typeof m == "object" && m !== null) {
      switch (m.$$typeof) {
        case Qi:
          return m.key === x ? s(p, c, m, d) : null;
        case Jn:
          return m.key === x ? u(p, c, m, d) : null;
        case on:
          return (x = m._init), v(p, c, x(m._payload), d);
      }
      if (Xr(m) || $r(m)) return x !== null ? null : f(p, c, m, d, null);
      io(p, m);
    }
    return null;
  }
  function y(p, c, m, d, x) {
    if ((typeof d == "string" && d !== "") || typeof d == "number")
      return (p = p.get(m) || null), a(c, p, "" + d, x);
    if (typeof d == "object" && d !== null) {
      switch (d.$$typeof) {
        case Qi:
          return (p = p.get(d.key === null ? m : d.key) || null), s(c, p, d, x);
        case Jn:
          return (p = p.get(d.key === null ? m : d.key) || null), u(c, p, d, x);
        case on:
          var P = d._init;
          return y(p, c, m, P(d._payload), x);
      }
      if (Xr(d) || $r(d)) return (p = p.get(m) || null), f(c, p, d, x, null);
      io(c, d);
    }
    return null;
  }
  function w(p, c, m, d) {
    for (
      var x = null, P = null, T = c, N = (c = 0), W = null;
      T !== null && N < m.length;
      N++
    ) {
      T.index > N ? ((W = T), (T = null)) : (W = T.sibling);
      var D = v(p, T, m[N], d);
      if (D === null) {
        T === null && (T = W);
        break;
      }
      e && T && D.alternate === null && t(p, T),
        (c = o(D, c, N)),
        P === null ? (x = D) : (P.sibling = D),
        (P = D),
        (T = W);
    }
    if (N === m.length) return n(p, T), le && Tn(p, N), x;
    if (T === null) {
      for (; N < m.length; N++)
        (T = h(p, m[N], d)),
          T !== null &&
            ((c = o(T, c, N)), P === null ? (x = T) : (P.sibling = T), (P = T));
      return le && Tn(p, N), x;
    }
    for (T = r(p, T); N < m.length; N++)
      (W = y(T, p, N, m[N], d)),
        W !== null &&
          (e && W.alternate !== null && T.delete(W.key === null ? N : W.key),
          (c = o(W, c, N)),
          P === null ? (x = W) : (P.sibling = W),
          (P = W));
    return (
      e &&
        T.forEach(function (pe) {
          return t(p, pe);
        }),
      le && Tn(p, N),
      x
    );
  }
  function S(p, c, m, d) {
    var x = $r(m);
    if (typeof x != "function") throw Error(O(150));
    if (((m = x.call(m)), m == null)) throw Error(O(151));
    for (
      var P = (x = null), T = c, N = (c = 0), W = null, D = m.next();
      T !== null && !D.done;
      N++, D = m.next()
    ) {
      T.index > N ? ((W = T), (T = null)) : (W = T.sibling);
      var pe = v(p, T, D.value, d);
      if (pe === null) {
        T === null && (T = W);
        break;
      }
      e && T && pe.alternate === null && t(p, T),
        (c = o(pe, c, N)),
        P === null ? (x = pe) : (P.sibling = pe),
        (P = pe),
        (T = W);
    }
    if (D.done) return n(p, T), le && Tn(p, N), x;
    if (T === null) {
      for (; !D.done; N++, D = m.next())
        (D = h(p, D.value, d)),
          D !== null &&
            ((c = o(D, c, N)), P === null ? (x = D) : (P.sibling = D), (P = D));
      return le && Tn(p, N), x;
    }
    for (T = r(p, T); !D.done; N++, D = m.next())
      (D = y(T, p, N, D.value, d)),
        D !== null &&
          (e && D.alternate !== null && T.delete(D.key === null ? N : D.key),
          (c = o(D, c, N)),
          P === null ? (x = D) : (P.sibling = D),
          (P = D));
    return (
      e &&
        T.forEach(function (J) {
          return t(p, J);
        }),
      le && Tn(p, N),
      x
    );
  }
  function C(p, c, m, d) {
    if (
      (typeof m == "object" &&
        m !== null &&
        m.type === Zn &&
        m.key === null &&
        (m = m.props.children),
      typeof m == "object" && m !== null)
    ) {
      switch (m.$$typeof) {
        case Qi:
          e: {
            for (var x = m.key, P = c; P !== null; ) {
              if (P.key === x) {
                if (((x = m.type), x === Zn)) {
                  if (P.tag === 7) {
                    n(p, P.sibling),
                      (c = i(P, m.props.children)),
                      (c.return = p),
                      (p = c);
                    break e;
                  }
                } else if (
                  P.elementType === x ||
                  (typeof x == "object" &&
                    x !== null &&
                    x.$$typeof === on &&
                    Jc(x) === P.type)
                ) {
                  n(p, P.sibling),
                    (c = i(P, m.props)),
                    (c.ref = Wr(p, P, m)),
                    (c.return = p),
                    (p = c);
                  break e;
                }
                n(p, P);
                break;
              } else t(p, P);
              P = P.sibling;
            }
            m.type === Zn
              ? ((c = $n(m.props.children, p.mode, d, m.key)),
                (c.return = p),
                (p = c))
              : ((d = Po(m.type, m.key, m.props, null, p.mode, d)),
                (d.ref = Wr(p, c, m)),
                (d.return = p),
                (p = d));
          }
          return l(p);
        case Jn:
          e: {
            for (P = m.key; c !== null; ) {
              if (c.key === P)
                if (
                  c.tag === 4 &&
                  c.stateNode.containerInfo === m.containerInfo &&
                  c.stateNode.implementation === m.implementation
                ) {
                  n(p, c.sibling),
                    (c = i(c, m.children || [])),
                    (c.return = p),
                    (p = c);
                  break e;
                } else {
                  n(p, c);
                  break;
                }
              else t(p, c);
              c = c.sibling;
            }
            (c = Pa(m, p.mode, d)), (c.return = p), (p = c);
          }
          return l(p);
        case on:
          return (P = m._init), C(p, c, P(m._payload), d);
      }
      if (Xr(m)) return w(p, c, m, d);
      if ($r(m)) return S(p, c, m, d);
      io(p, m);
    }
    return (typeof m == "string" && m !== "") || typeof m == "number"
      ? ((m = "" + m),
        c !== null && c.tag === 6
          ? (n(p, c.sibling), (c = i(c, m)), (c.return = p), (p = c))
          : (n(p, c), (c = _a(m, p.mode, d)), (c.return = p), (p = c)),
        l(p))
      : n(p, c);
  }
  return C;
}
var Er = Sp(!0),
  wp = Sp(!1),
  zi = {},
  jt = Rn(zi),
  Ri = Rn(zi),
  Ci = Rn(zi);
function In(e) {
  if (e === zi) throw Error(O(174));
  return e;
}
function cu(e, t) {
  switch ((re(Ci, t), re(Ri, e), re(jt, zi), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : Ha(null, "");
      break;
    default:
      (e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = Ha(t, e));
  }
  oe(jt), re(jt, t);
}
function Rr() {
  oe(jt), oe(Ri), oe(Ci);
}
function xp(e) {
  In(Ci.current);
  var t = In(jt.current),
    n = Ha(t, e.type);
  t !== n && (re(Ri, e), re(jt, n));
}
function fu(e) {
  Ri.current === e && (oe(jt), oe(Ri));
}
var ce = Rn(0);
function Ho(e) {
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
var Sa = [];
function du() {
  for (var e = 0; e < Sa.length; e++)
    Sa[e]._workInProgressVersionPrimary = null;
  Sa.length = 0;
}
var xo = qt.ReactCurrentDispatcher,
  wa = qt.ReactCurrentBatchConfig,
  An = 0,
  fe = null,
  Re = null,
  _e = null,
  Bo = !1,
  oi = !1,
  _i = 0,
  py = 0;
function Le() {
  throw Error(O(321));
}
function pu(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!Rt(e[n], t[n])) return !1;
  return !0;
}
function hu(e, t, n, r, i, o) {
  if (
    ((An = o),
    (fe = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (xo.current = e === null || e.memoizedState === null ? yy : gy),
    (e = n(r, i)),
    oi)
  ) {
    o = 0;
    do {
      if (((oi = !1), (_i = 0), 25 <= o)) throw Error(O(301));
      (o += 1),
        (_e = Re = null),
        (t.updateQueue = null),
        (xo.current = Sy),
        (e = n(r, i));
    } while (oi);
  }
  if (
    ((xo.current = Vo),
    (t = Re !== null && Re.next !== null),
    (An = 0),
    (_e = Re = fe = null),
    (Bo = !1),
    t)
  )
    throw Error(O(300));
  return e;
}
function mu() {
  var e = _i !== 0;
  return (_i = 0), e;
}
function Nt() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return _e === null ? (fe.memoizedState = _e = e) : (_e = _e.next = e), _e;
}
function ft() {
  if (Re === null) {
    var e = fe.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = Re.next;
  var t = _e === null ? fe.memoizedState : _e.next;
  if (t !== null) (_e = t), (Re = e);
  else {
    if (e === null) throw Error(O(310));
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
function Pi(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function xa(e) {
  var t = ft(),
    n = t.queue;
  if (n === null) throw Error(O(311));
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
      var f = u.lane;
      if ((An & f) === f)
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
        var h = {
          lane: f,
          action: u.action,
          hasEagerState: u.hasEagerState,
          eagerState: u.eagerState,
          next: null,
        };
        s === null ? ((a = s = h), (l = r)) : (s = s.next = h),
          (fe.lanes |= f),
          (bn |= f);
      }
      u = u.next;
    } while (u !== null && u !== o);
    s === null ? (l = r) : (s.next = a),
      Rt(r, t.memoizedState) || (Be = !0),
      (t.memoizedState = r),
      (t.baseState = l),
      (t.baseQueue = s),
      (n.lastRenderedState = r);
  }
  if (((e = n.interleaved), e !== null)) {
    i = e;
    do (o = i.lane), (fe.lanes |= o), (bn |= o), (i = i.next);
    while (i !== e);
  } else i === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function Ea(e) {
  var t = ft(),
    n = t.queue;
  if (n === null) throw Error(O(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch,
    i = n.pending,
    o = t.memoizedState;
  if (i !== null) {
    n.pending = null;
    var l = (i = i.next);
    do (o = e(o, l.action)), (l = l.next);
    while (l !== i);
    Rt(o, t.memoizedState) || (Be = !0),
      (t.memoizedState = o),
      t.baseQueue === null && (t.baseState = o),
      (n.lastRenderedState = o);
  }
  return [o, r];
}
function Ep() {}
function Rp(e, t) {
  var n = fe,
    r = ft(),
    i = t(),
    o = !Rt(r.memoizedState, i);
  if (
    (o && ((r.memoizedState = i), (Be = !0)),
    (r = r.queue),
    vu(Pp.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || o || (_e !== null && _e.memoizedState.tag & 1))
  ) {
    if (
      ((n.flags |= 2048),
      ki(9, _p.bind(null, n, r, i, t), void 0, null),
      Pe === null)
    )
      throw Error(O(349));
    An & 30 || Cp(n, t, i);
  }
  return i;
}
function Cp(e, t, n) {
  (e.flags |= 16384),
    (e = { getSnapshot: t, value: n }),
    (t = fe.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (fe.updateQueue = t),
        (t.stores = [e]))
      : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
}
function _p(e, t, n, r) {
  (t.value = n), (t.getSnapshot = r), kp(t) && Np(e);
}
function Pp(e, t, n) {
  return n(function () {
    kp(t) && Np(e);
  });
}
function kp(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !Rt(e, n);
  } catch {
    return !0;
  }
}
function Np(e) {
  var t = Kt(e, 1);
  t !== null && Et(t, e, 1, -1);
}
function Zc(e) {
  var t = Nt();
  return (
    typeof e == "function" && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Pi,
      lastRenderedState: e,
    }),
    (t.queue = e),
    (e = e.dispatch = vy.bind(null, fe, e)),
    [t.memoizedState, e]
  );
}
function ki(e, t, n, r) {
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
function Tp() {
  return ft().memoizedState;
}
function Eo(e, t, n, r) {
  var i = Nt();
  (fe.flags |= e),
    (i.memoizedState = ki(1 | t, n, void 0, r === void 0 ? null : r));
}
function fl(e, t, n, r) {
  var i = ft();
  r = r === void 0 ? null : r;
  var o = void 0;
  if (Re !== null) {
    var l = Re.memoizedState;
    if (((o = l.destroy), r !== null && pu(r, l.deps))) {
      i.memoizedState = ki(t, n, o, r);
      return;
    }
  }
  (fe.flags |= e), (i.memoizedState = ki(1 | t, n, o, r));
}
function ef(e, t) {
  return Eo(8390656, 8, e, t);
}
function vu(e, t) {
  return fl(2048, 8, e, t);
}
function Op(e, t) {
  return fl(4, 2, e, t);
}
function Mp(e, t) {
  return fl(4, 4, e, t);
}
function Lp(e, t) {
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
function jp(e, t, n) {
  return (
    (n = n != null ? n.concat([e]) : null), fl(4, 4, Lp.bind(null, t, e), n)
  );
}
function yu() {}
function Ip(e, t) {
  var n = ft();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && pu(t, r[1])
    ? r[0]
    : ((n.memoizedState = [e, t]), e);
}
function Dp(e, t) {
  var n = ft();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && pu(t, r[1])
    ? r[0]
    : ((e = e()), (n.memoizedState = [e, t]), e);
}
function zp(e, t, n) {
  return An & 21
    ? (Rt(n, t) || ((n = Ud()), (fe.lanes |= n), (bn |= n), (e.baseState = !0)),
      t)
    : (e.baseState && ((e.baseState = !1), (Be = !0)), (e.memoizedState = n));
}
function hy(e, t) {
  var n = X;
  (X = n !== 0 && 4 > n ? n : 4), e(!0);
  var r = wa.transition;
  wa.transition = {};
  try {
    e(!1), t();
  } finally {
    (X = n), (wa.transition = r);
  }
}
function $p() {
  return ft().memoizedState;
}
function my(e, t, n) {
  var r = yn(e);
  if (
    ((n = {
      lane: r,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    Fp(e))
  )
    Up(t, n);
  else if (((n = mp(e, t, n, r)), n !== null)) {
    var i = Ae();
    Et(n, e, r, i), Ap(n, t, r);
  }
}
function vy(e, t, n) {
  var r = yn(e),
    i = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (Fp(e)) Up(t, i);
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
        if (((i.hasEagerState = !0), (i.eagerState = a), Rt(a, l))) {
          var s = t.interleaved;
          s === null
            ? ((i.next = i), su(t))
            : ((i.next = s.next), (s.next = i)),
            (t.interleaved = i);
          return;
        }
      } catch {
      } finally {
      }
    (n = mp(e, t, i, r)),
      n !== null && ((i = Ae()), Et(n, e, r, i), Ap(n, t, r));
  }
}
function Fp(e) {
  var t = e.alternate;
  return e === fe || (t !== null && t === fe);
}
function Up(e, t) {
  oi = Bo = !0;
  var n = e.pending;
  n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
    (e.pending = t);
}
function Ap(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), qs(e, n);
  }
}
var Vo = {
    readContext: ct,
    useCallback: Le,
    useContext: Le,
    useEffect: Le,
    useImperativeHandle: Le,
    useInsertionEffect: Le,
    useLayoutEffect: Le,
    useMemo: Le,
    useReducer: Le,
    useRef: Le,
    useState: Le,
    useDebugValue: Le,
    useDeferredValue: Le,
    useTransition: Le,
    useMutableSource: Le,
    useSyncExternalStore: Le,
    useId: Le,
    unstable_isNewReconciler: !1,
  },
  yy = {
    readContext: ct,
    useCallback: function (e, t) {
      return (Nt().memoizedState = [e, t === void 0 ? null : t]), e;
    },
    useContext: ct,
    useEffect: ef,
    useImperativeHandle: function (e, t, n) {
      return (
        (n = n != null ? n.concat([e]) : null),
        Eo(4194308, 4, Lp.bind(null, t, e), n)
      );
    },
    useLayoutEffect: function (e, t) {
      return Eo(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      return Eo(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var n = Nt();
      return (
        (t = t === void 0 ? null : t), (e = e()), (n.memoizedState = [e, t]), e
      );
    },
    useReducer: function (e, t, n) {
      var r = Nt();
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
        (e = e.dispatch = my.bind(null, fe, e)),
        [r.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = Nt();
      return (e = { current: e }), (t.memoizedState = e);
    },
    useState: Zc,
    useDebugValue: yu,
    useDeferredValue: function (e) {
      return (Nt().memoizedState = e);
    },
    useTransition: function () {
      var e = Zc(!1),
        t = e[0];
      return (e = hy.bind(null, e[1])), (Nt().memoizedState = e), [t, e];
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, n) {
      var r = fe,
        i = Nt();
      if (le) {
        if (n === void 0) throw Error(O(407));
        n = n();
      } else {
        if (((n = t()), Pe === null)) throw Error(O(349));
        An & 30 || Cp(r, t, n);
      }
      i.memoizedState = n;
      var o = { value: n, getSnapshot: t };
      return (
        (i.queue = o),
        ef(Pp.bind(null, r, o, e), [e]),
        (r.flags |= 2048),
        ki(9, _p.bind(null, r, o, n, t), void 0, null),
        n
      );
    },
    useId: function () {
      var e = Nt(),
        t = Pe.identifierPrefix;
      if (le) {
        var n = bt,
          r = At;
        (n = (r & ~(1 << (32 - xt(r) - 1))).toString(32) + n),
          (t = ":" + t + "R" + n),
          (n = _i++),
          0 < n && (t += "H" + n.toString(32)),
          (t += ":");
      } else (n = py++), (t = ":" + t + "r" + n.toString(32) + ":");
      return (e.memoizedState = t);
    },
    unstable_isNewReconciler: !1,
  },
  gy = {
    readContext: ct,
    useCallback: Ip,
    useContext: ct,
    useEffect: vu,
    useImperativeHandle: jp,
    useInsertionEffect: Op,
    useLayoutEffect: Mp,
    useMemo: Dp,
    useReducer: xa,
    useRef: Tp,
    useState: function () {
      return xa(Pi);
    },
    useDebugValue: yu,
    useDeferredValue: function (e) {
      var t = ft();
      return zp(t, Re.memoizedState, e);
    },
    useTransition: function () {
      var e = xa(Pi)[0],
        t = ft().memoizedState;
      return [e, t];
    },
    useMutableSource: Ep,
    useSyncExternalStore: Rp,
    useId: $p,
    unstable_isNewReconciler: !1,
  },
  Sy = {
    readContext: ct,
    useCallback: Ip,
    useContext: ct,
    useEffect: vu,
    useImperativeHandle: jp,
    useInsertionEffect: Op,
    useLayoutEffect: Mp,
    useMemo: Dp,
    useReducer: Ea,
    useRef: Tp,
    useState: function () {
      return Ea(Pi);
    },
    useDebugValue: yu,
    useDeferredValue: function (e) {
      var t = ft();
      return Re === null ? (t.memoizedState = e) : zp(t, Re.memoizedState, e);
    },
    useTransition: function () {
      var e = Ea(Pi)[0],
        t = ft().memoizedState;
      return [e, t];
    },
    useMutableSource: Ep,
    useSyncExternalStore: Rp,
    useId: $p,
    unstable_isNewReconciler: !1,
  };
function Cr(e, t) {
  try {
    var n = "",
      r = t;
    do (n += Qm(r)), (r = r.return);
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
function Ra(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function ds(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function () {
      throw n;
    });
  }
}
var wy = typeof WeakMap == "function" ? WeakMap : Map;
function bp(e, t, n) {
  (n = Wt(-1, n)), (n.tag = 3), (n.payload = { element: null });
  var r = t.value;
  return (
    (n.callback = function () {
      Qo || ((Qo = !0), (Es = r)), ds(e, t);
    }),
    n
  );
}
function Wp(e, t, n) {
  (n = Wt(-1, n)), (n.tag = 3);
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var i = t.value;
    (n.payload = function () {
      return r(i);
    }),
      (n.callback = function () {
        ds(e, t);
      });
  }
  var o = e.stateNode;
  return (
    o !== null &&
      typeof o.componentDidCatch == "function" &&
      (n.callback = function () {
        ds(e, t),
          typeof r != "function" &&
            (vn === null ? (vn = new Set([this])) : vn.add(this));
        var l = t.stack;
        this.componentDidCatch(t.value, {
          componentStack: l !== null ? l : "",
        });
      }),
    n
  );
}
function tf(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new wy();
    var i = new Set();
    r.set(t, i);
  } else (i = r.get(t)), i === void 0 && ((i = new Set()), r.set(t, i));
  i.has(n) || (i.add(n), (e = Iy.bind(null, e, t, n)), t.then(e, e));
}
function nf(e) {
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
function rf(e, t, n, r, i) {
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
              : ((t = Wt(-1, 1)), (t.tag = 2), mn(n, t, 1))),
          (n.lanes |= 1)),
      e);
}
var xy = qt.ReactCurrentOwner,
  Be = !1;
function Ue(e, t, n, r) {
  t.child = e === null ? wp(t, null, n, r) : Er(t, e.child, n, r);
}
function of(e, t, n, r, i) {
  n = n.render;
  var o = t.ref;
  return (
    vr(t, i),
    (r = hu(e, t, n, r, o, i)),
    (n = mu()),
    e !== null && !Be
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~i),
        Qt(e, t, i))
      : (le && n && nu(t), (t.flags |= 1), Ue(e, t, r, i), t.child)
  );
}
function lf(e, t, n, r, i) {
  if (e === null) {
    var o = n.type;
    return typeof o == "function" &&
      !_u(o) &&
      o.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = o), Hp(e, t, o, r, i))
      : ((e = Po(n.type, null, r, t, t.mode, i)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e));
  }
  if (((o = e.child), !(e.lanes & i))) {
    var l = o.memoizedProps;
    if (
      ((n = n.compare), (n = n !== null ? n : Si), n(l, r) && e.ref === t.ref)
    )
      return Qt(e, t, i);
  }
  return (
    (t.flags |= 1),
    (e = gn(o, r)),
    (e.ref = t.ref),
    (e.return = t),
    (t.child = e)
  );
}
function Hp(e, t, n, r, i) {
  if (e !== null) {
    var o = e.memoizedProps;
    if (Si(o, r) && e.ref === t.ref)
      if (((Be = !1), (t.pendingProps = r = o), (e.lanes & i) !== 0))
        e.flags & 131072 && (Be = !0);
      else return (t.lanes = e.lanes), Qt(e, t, i);
  }
  return ps(e, t, n, r, i);
}
function Bp(e, t, n) {
  var r = t.pendingProps,
    i = r.children,
    o = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden")
    if (!(t.mode & 1))
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        re(ur, Xe),
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
          re(ur, Xe),
          (Xe |= e),
          null
        );
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (r = o !== null ? o.baseLanes : n),
        re(ur, Xe),
        (Xe |= r);
    }
  else
    o !== null ? ((r = o.baseLanes | n), (t.memoizedState = null)) : (r = n),
      re(ur, Xe),
      (Xe |= r);
  return Ue(e, t, i, n), t.child;
}
function Vp(e, t) {
  var n = t.ref;
  ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
    ((t.flags |= 512), (t.flags |= 2097152));
}
function ps(e, t, n, r, i) {
  var o = Ke(n) ? Fn : $e.current;
  return (
    (o = wr(t, o)),
    vr(t, i),
    (n = hu(e, t, n, r, o, i)),
    (r = mu()),
    e !== null && !Be
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~i),
        Qt(e, t, i))
      : (le && r && nu(t), (t.flags |= 1), Ue(e, t, n, i), t.child)
  );
}
function af(e, t, n, r, i) {
  if (Ke(n)) {
    var o = !0;
    $o(t);
  } else o = !1;
  if ((vr(t, i), t.stateNode === null))
    Ro(e, t), gp(t, n, r), fs(t, n, r, i), (r = !0);
  else if (e === null) {
    var l = t.stateNode,
      a = t.memoizedProps;
    l.props = a;
    var s = l.context,
      u = n.contextType;
    typeof u == "object" && u !== null
      ? (u = ct(u))
      : ((u = Ke(n) ? Fn : $e.current), (u = wr(t, u)));
    var f = n.getDerivedStateFromProps,
      h =
        typeof f == "function" ||
        typeof l.getSnapshotBeforeUpdate == "function";
    h ||
      (typeof l.UNSAFE_componentWillReceiveProps != "function" &&
        typeof l.componentWillReceiveProps != "function") ||
      ((a !== r || s !== u) && Gc(t, l, r, u)),
      (ln = !1);
    var v = t.memoizedState;
    (l.state = v),
      Wo(t, r, l, i),
      (s = t.memoizedState),
      a !== r || v !== s || Ve.current || ln
        ? (typeof f == "function" && (cs(t, n, f, r), (s = t.memoizedState)),
          (a = ln || Xc(t, n, a, r, v, s, u))
            ? (h ||
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
      vp(e, t),
      (a = t.memoizedProps),
      (u = t.type === t.elementType ? a : yt(t.type, a)),
      (l.props = u),
      (h = t.pendingProps),
      (v = l.context),
      (s = n.contextType),
      typeof s == "object" && s !== null
        ? (s = ct(s))
        : ((s = Ke(n) ? Fn : $e.current), (s = wr(t, s)));
    var y = n.getDerivedStateFromProps;
    (f =
      typeof y == "function" ||
      typeof l.getSnapshotBeforeUpdate == "function") ||
      (typeof l.UNSAFE_componentWillReceiveProps != "function" &&
        typeof l.componentWillReceiveProps != "function") ||
      ((a !== h || v !== s) && Gc(t, l, r, s)),
      (ln = !1),
      (v = t.memoizedState),
      (l.state = v),
      Wo(t, r, l, i);
    var w = t.memoizedState;
    a !== h || v !== w || Ve.current || ln
      ? (typeof y == "function" && (cs(t, n, y, r), (w = t.memoizedState)),
        (u = ln || Xc(t, n, u, r, v, w, s) || !1)
          ? (f ||
              (typeof l.UNSAFE_componentWillUpdate != "function" &&
                typeof l.componentWillUpdate != "function") ||
              (typeof l.componentWillUpdate == "function" &&
                l.componentWillUpdate(r, w, s),
              typeof l.UNSAFE_componentWillUpdate == "function" &&
                l.UNSAFE_componentWillUpdate(r, w, s)),
            typeof l.componentDidUpdate == "function" && (t.flags |= 4),
            typeof l.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024))
          : (typeof l.componentDidUpdate != "function" ||
              (a === e.memoizedProps && v === e.memoizedState) ||
              (t.flags |= 4),
            typeof l.getSnapshotBeforeUpdate != "function" ||
              (a === e.memoizedProps && v === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = r),
            (t.memoizedState = w)),
        (l.props = r),
        (l.state = w),
        (l.context = s),
        (r = u))
      : (typeof l.componentDidUpdate != "function" ||
          (a === e.memoizedProps && v === e.memoizedState) ||
          (t.flags |= 4),
        typeof l.getSnapshotBeforeUpdate != "function" ||
          (a === e.memoizedProps && v === e.memoizedState) ||
          (t.flags |= 1024),
        (r = !1));
  }
  return hs(e, t, n, r, o, i);
}
function hs(e, t, n, r, i, o) {
  Vp(e, t);
  var l = (t.flags & 128) !== 0;
  if (!r && !l) return i && Vc(t, n, !1), Qt(e, t, o);
  (r = t.stateNode), (xy.current = t);
  var a =
    l && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return (
    (t.flags |= 1),
    e !== null && l
      ? ((t.child = Er(t, e.child, null, o)), (t.child = Er(t, null, a, o)))
      : Ue(e, t, a, o),
    (t.memoizedState = r.state),
    i && Vc(t, n, !0),
    t.child
  );
}
function Kp(e) {
  var t = e.stateNode;
  t.pendingContext
    ? Bc(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && Bc(e, t.context, !1),
    cu(e, t.containerInfo);
}
function sf(e, t, n, r, i) {
  return xr(), iu(i), (t.flags |= 256), Ue(e, t, n, r), t.child;
}
var ms = { dehydrated: null, treeContext: null, retryLane: 0 };
function vs(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function Qp(e, t, n) {
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
      ss(t),
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
                : (o = hl(l, r, 0, null)),
              (e = $n(e, r, n, null)),
              (o.return = t),
              (e.return = t),
              (o.sibling = e),
              (t.child = o),
              (t.child.memoizedState = vs(n)),
              (t.memoizedState = ms),
              e)
            : gu(t, l))
    );
  if (((i = e.memoizedState), i !== null && ((a = i.dehydrated), a !== null)))
    return Ey(e, t, l, r, a, i, n);
  if (o) {
    (o = r.fallback), (l = t.mode), (i = e.child), (a = i.sibling);
    var s = { mode: "hidden", children: r.children };
    return (
      !(l & 1) && t.child !== i
        ? ((r = t.child),
          (r.childLanes = 0),
          (r.pendingProps = s),
          (t.deletions = null))
        : ((r = gn(i, s)), (r.subtreeFlags = i.subtreeFlags & 14680064)),
      a !== null ? (o = gn(a, o)) : ((o = $n(o, l, n, null)), (o.flags |= 2)),
      (o.return = t),
      (r.return = t),
      (r.sibling = o),
      (t.child = r),
      (r = o),
      (o = t.child),
      (l = e.child.memoizedState),
      (l =
        l === null
          ? vs(n)
          : {
              baseLanes: l.baseLanes | n,
              cachePool: null,
              transitions: l.transitions,
            }),
      (o.memoizedState = l),
      (o.childLanes = e.childLanes & ~n),
      (t.memoizedState = ms),
      r
    );
  }
  return (
    (o = e.child),
    (e = o.sibling),
    (r = gn(o, { mode: "visible", children: r.children })),
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
function gu(e, t) {
  return (
    (t = hl({ mode: "visible", children: t }, e.mode, 0, null)),
    (t.return = e),
    (e.child = t)
  );
}
function oo(e, t, n, r) {
  return (
    r !== null && iu(r),
    Er(t, e.child, null, n),
    (e = gu(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  );
}
function Ey(e, t, n, r, i, o, l) {
  if (n)
    return t.flags & 256
      ? ((t.flags &= -257), (r = Ra(Error(O(422)))), oo(e, t, l, r))
      : t.memoizedState !== null
      ? ((t.child = e.child), (t.flags |= 128), null)
      : ((o = r.fallback),
        (i = t.mode),
        (r = hl({ mode: "visible", children: r.children }, i, 0, null)),
        (o = $n(o, i, l, null)),
        (o.flags |= 2),
        (r.return = t),
        (o.return = t),
        (r.sibling = o),
        (t.child = r),
        t.mode & 1 && Er(t, e.child, null, l),
        (t.child.memoizedState = vs(l)),
        (t.memoizedState = ms),
        o);
  if (!(t.mode & 1)) return oo(e, t, l, null);
  if (i.data === "$!") {
    if (((r = i.nextSibling && i.nextSibling.dataset), r)) var a = r.dgst;
    return (r = a), (o = Error(O(419))), (r = Ra(o, r, void 0)), oo(e, t, l, r);
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
          ((o.retryLane = i), Kt(e, i), Et(r, e, i, -1));
    }
    return Cu(), (r = Ra(Error(O(421)))), oo(e, t, l, r);
  }
  return i.data === "$?"
    ? ((t.flags |= 128),
      (t.child = e.child),
      (t = Dy.bind(null, e)),
      (i._reactRetry = t),
      null)
    : ((e = o.treeContext),
      (Je = hn(i.nextSibling)),
      (Ze = t),
      (le = !0),
      (wt = null),
      e !== null &&
        ((lt[at++] = At),
        (lt[at++] = bt),
        (lt[at++] = Un),
        (At = e.id),
        (bt = e.overflow),
        (Un = t)),
      (t = gu(t, r.children)),
      (t.flags |= 4096),
      t);
}
function uf(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), us(e.return, t, n);
}
function Ca(e, t, n, r, i) {
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
function qp(e, t, n) {
  var r = t.pendingProps,
    i = r.revealOrder,
    o = r.tail;
  if ((Ue(e, t, r.children, n), (r = ce.current), r & 2))
    (r = (r & 1) | 2), (t.flags |= 128);
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && uf(e, n, t);
        else if (e.tag === 19) uf(e, n, t);
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
            e !== null && Ho(e) === null && (i = n),
            (n = n.sibling);
        (n = i),
          n === null
            ? ((i = t.child), (t.child = null))
            : ((i = n.sibling), (n.sibling = null)),
          Ca(t, !1, i, n, o);
        break;
      case "backwards":
        for (n = null, i = t.child, t.child = null; i !== null; ) {
          if (((e = i.alternate), e !== null && Ho(e) === null)) {
            t.child = i;
            break;
          }
          (e = i.sibling), (i.sibling = n), (n = i), (i = e);
        }
        Ca(t, !0, n, null, o);
        break;
      case "together":
        Ca(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function Ro(e, t) {
  !(t.mode & 1) &&
    e !== null &&
    ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function Qt(e, t, n) {
  if (
    (e !== null && (t.dependencies = e.dependencies),
    (bn |= t.lanes),
    !(n & t.childLanes))
  )
    return null;
  if (e !== null && t.child !== e.child) throw Error(O(153));
  if (t.child !== null) {
    for (
      e = t.child, n = gn(e, e.pendingProps), t.child = n, n.return = t;
      e.sibling !== null;

    )
      (e = e.sibling), (n = n.sibling = gn(e, e.pendingProps)), (n.return = t);
    n.sibling = null;
  }
  return t.child;
}
function Ry(e, t, n) {
  switch (t.tag) {
    case 3:
      Kp(t), xr();
      break;
    case 5:
      xp(t);
      break;
    case 1:
      Ke(t.type) && $o(t);
      break;
    case 4:
      cu(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context,
        i = t.memoizedProps.value;
      re(Ao, r._currentValue), (r._currentValue = i);
      break;
    case 13:
      if (((r = t.memoizedState), r !== null))
        return r.dehydrated !== null
          ? (re(ce, ce.current & 1), (t.flags |= 128), null)
          : n & t.child.childLanes
          ? Qp(e, t, n)
          : (re(ce, ce.current & 1),
            (e = Qt(e, t, n)),
            e !== null ? e.sibling : null);
      re(ce, ce.current & 1);
      break;
    case 19:
      if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
        if (r) return qp(e, t, n);
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
      return (t.lanes = 0), Bp(e, t, n);
  }
  return Qt(e, t, n);
}
var Yp, ys, Xp, Gp;
Yp = function (e, t) {
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
ys = function () {};
Xp = function (e, t, n, r) {
  var i = e.memoizedProps;
  if (i !== r) {
    (e = t.stateNode), In(jt.current);
    var o = null;
    switch (n) {
      case "input":
        (i = Ua(e, i)), (r = Ua(e, r)), (o = []);
        break;
      case "select":
        (i = de({}, i, { value: void 0 })),
          (r = de({}, r, { value: void 0 })),
          (o = []);
        break;
      case "textarea":
        (i = Wa(e, i)), (r = Wa(e, r)), (o = []);
        break;
      default:
        typeof i.onClick != "function" &&
          typeof r.onClick == "function" &&
          (e.onclick = Do);
    }
    Ba(n, r);
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
            (di.hasOwnProperty(u)
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
              (di.hasOwnProperty(u)
                ? (s != null && u === "onScroll" && ie("scroll", e),
                  o || a === s || (o = []))
                : (o = o || []).push(u, s));
    }
    n && (o = o || []).push("style", n);
    var u = o;
    (t.updateQueue = u) && (t.flags |= 4);
  }
};
Gp = function (e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function Hr(e, t) {
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
function je(e) {
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
function Cy(e, t, n) {
  var r = t.pendingProps;
  switch ((ru(t), t.tag)) {
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
      return je(t), null;
    case 1:
      return Ke(t.type) && zo(), je(t), null;
    case 3:
      return (
        (r = t.stateNode),
        Rr(),
        oe(Ve),
        oe($e),
        du(),
        r.pendingContext &&
          ((r.context = r.pendingContext), (r.pendingContext = null)),
        (e === null || e.child === null) &&
          (ro(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), wt !== null && (_s(wt), (wt = null)))),
        ys(e, t),
        je(t),
        null
      );
    case 5:
      fu(t);
      var i = In(Ci.current);
      if (((n = t.type), e !== null && t.stateNode != null))
        Xp(e, t, n, r, i),
          e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(O(166));
          return je(t), null;
        }
        if (((e = In(jt.current)), ro(t))) {
          (r = t.stateNode), (n = t.type);
          var o = t.memoizedProps;
          switch (((r[Tt] = t), (r[Ei] = o), (e = (t.mode & 1) !== 0), n)) {
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
              for (i = 0; i < Jr.length; i++) ie(Jr[i], r);
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
              yc(r, o), ie("invalid", r);
              break;
            case "select":
              (r._wrapperState = { wasMultiple: !!o.multiple }),
                ie("invalid", r);
              break;
            case "textarea":
              Sc(r, o), ie("invalid", r);
          }
          Ba(n, o), (i = null);
          for (var l in o)
            if (o.hasOwnProperty(l)) {
              var a = o[l];
              l === "children"
                ? typeof a == "string"
                  ? r.textContent !== a &&
                    (o.suppressHydrationWarning !== !0 &&
                      no(r.textContent, a, e),
                    (i = ["children", a]))
                  : typeof a == "number" &&
                    r.textContent !== "" + a &&
                    (o.suppressHydrationWarning !== !0 &&
                      no(r.textContent, a, e),
                    (i = ["children", "" + a]))
                : di.hasOwnProperty(l) &&
                  a != null &&
                  l === "onScroll" &&
                  ie("scroll", r);
            }
          switch (n) {
            case "input":
              qi(r), gc(r, o, !0);
              break;
            case "textarea":
              qi(r), wc(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof o.onClick == "function" && (r.onclick = Do);
          }
          (r = i), (t.updateQueue = r), r !== null && (t.flags |= 4);
        } else {
          (l = i.nodeType === 9 ? i : i.ownerDocument),
            e === "http://www.w3.org/1999/xhtml" && (e = Cd(n)),
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
            (e[Tt] = t),
            (e[Ei] = r),
            Yp(e, t, !1, !1),
            (t.stateNode = e);
          e: {
            switch (((l = Va(n, r)), n)) {
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
                for (i = 0; i < Jr.length; i++) ie(Jr[i], e);
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
                yc(e, r), (i = Ua(e, r)), ie("invalid", e);
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
                Sc(e, r), (i = Wa(e, r)), ie("invalid", e);
                break;
              default:
                i = r;
            }
            Ba(n, i), (a = i);
            for (o in a)
              if (a.hasOwnProperty(o)) {
                var s = a[o];
                o === "style"
                  ? kd(e, s)
                  : o === "dangerouslySetInnerHTML"
                  ? ((s = s ? s.__html : void 0), s != null && _d(e, s))
                  : o === "children"
                  ? typeof s == "string"
                    ? (n !== "textarea" || s !== "") && pi(e, s)
                    : typeof s == "number" && pi(e, "" + s)
                  : o !== "suppressContentEditableWarning" &&
                    o !== "suppressHydrationWarning" &&
                    o !== "autoFocus" &&
                    (di.hasOwnProperty(o)
                      ? s != null && o === "onScroll" && ie("scroll", e)
                      : s != null && Ws(e, o, s, l));
              }
            switch (n) {
              case "input":
                qi(e), gc(e, r, !1);
                break;
              case "textarea":
                qi(e), wc(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + Sn(r.value));
                break;
              case "select":
                (e.multiple = !!r.multiple),
                  (o = r.value),
                  o != null
                    ? dr(e, !!r.multiple, o, !1)
                    : r.defaultValue != null &&
                      dr(e, !!r.multiple, r.defaultValue, !0);
                break;
              default:
                typeof i.onClick == "function" && (e.onclick = Do);
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
      return je(t), null;
    case 6:
      if (e && t.stateNode != null) Gp(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(O(166));
        if (((n = In(Ci.current)), In(jt.current), ro(t))) {
          if (
            ((r = t.stateNode),
            (n = t.memoizedProps),
            (r[Tt] = t),
            (o = r.nodeValue !== n) && ((e = Ze), e !== null))
          )
            switch (e.tag) {
              case 3:
                no(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  no(r.nodeValue, n, (e.mode & 1) !== 0);
            }
          o && (t.flags |= 4);
        } else
          (r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
            (r[Tt] = t),
            (t.stateNode = r);
      }
      return je(t), null;
    case 13:
      if (
        (oe(ce),
        (r = t.memoizedState),
        e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (le && Je !== null && t.mode & 1 && !(t.flags & 128))
          hp(), xr(), (t.flags |= 98560), (o = !1);
        else if (((o = ro(t)), r !== null && r.dehydrated !== null)) {
          if (e === null) {
            if (!o) throw Error(O(318));
            if (
              ((o = t.memoizedState),
              (o = o !== null ? o.dehydrated : null),
              !o)
            )
              throw Error(O(317));
            o[Tt] = t;
          } else
            xr(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4);
          je(t), (o = !1);
        } else wt !== null && (_s(wt), (wt = null)), (o = !0);
        if (!o) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128
        ? ((t.lanes = n), t)
        : ((r = r !== null),
          r !== (e !== null && e.memoizedState !== null) &&
            r &&
            ((t.child.flags |= 8192),
            t.mode & 1 &&
              (e === null || ce.current & 1 ? Ce === 0 && (Ce = 3) : Cu())),
          t.updateQueue !== null && (t.flags |= 4),
          je(t),
          null);
    case 4:
      return (
        Rr(), ys(e, t), e === null && wi(t.stateNode.containerInfo), je(t), null
      );
    case 10:
      return au(t.type._context), je(t), null;
    case 17:
      return Ke(t.type) && zo(), je(t), null;
    case 19:
      if ((oe(ce), (o = t.memoizedState), o === null)) return je(t), null;
      if (((r = (t.flags & 128) !== 0), (l = o.rendering), l === null))
        if (r) Hr(o, !1);
        else {
          if (Ce !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null; ) {
              if (((l = Ho(e)), l !== null)) {
                for (
                  t.flags |= 128,
                    Hr(o, !1),
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
            ye() > _r &&
            ((t.flags |= 128), (r = !0), Hr(o, !1), (t.lanes = 4194304));
        }
      else {
        if (!r)
          if (((e = Ho(l)), e !== null)) {
            if (
              ((t.flags |= 128),
              (r = !0),
              (n = e.updateQueue),
              n !== null && ((t.updateQueue = n), (t.flags |= 4)),
              Hr(o, !0),
              o.tail === null && o.tailMode === "hidden" && !l.alternate && !le)
            )
              return je(t), null;
          } else
            2 * ye() - o.renderingStartTime > _r &&
              n !== 1073741824 &&
              ((t.flags |= 128), (r = !0), Hr(o, !1), (t.lanes = 4194304));
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
        : (je(t), null);
    case 22:
    case 23:
      return (
        Ru(),
        (r = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
        r && t.mode & 1
          ? Xe & 1073741824 && (je(t), t.subtreeFlags & 6 && (t.flags |= 8192))
          : je(t),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(O(156, t.tag));
}
function _y(e, t) {
  switch ((ru(t), t.tag)) {
    case 1:
      return (
        Ke(t.type) && zo(),
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 3:
      return (
        Rr(),
        oe(Ve),
        oe($e),
        du(),
        (e = t.flags),
        e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 5:
      return fu(t), null;
    case 13:
      if (
        (oe(ce), (e = t.memoizedState), e !== null && e.dehydrated !== null)
      ) {
        if (t.alternate === null) throw Error(O(340));
        xr();
      }
      return (
        (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 19:
      return oe(ce), null;
    case 4:
      return Rr(), null;
    case 10:
      return au(t.type._context), null;
    case 22:
    case 23:
      return Ru(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var lo = !1,
  ze = !1,
  Py = typeof WeakSet == "function" ? WeakSet : Set,
  j = null;
function sr(e, t) {
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
function gs(e, t, n) {
  try {
    n();
  } catch (r) {
    he(e, t, r);
  }
}
var cf = !1;
function ky(e, t) {
  if (((ts = Lo), (e = tp()), tu(e))) {
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
            f = 0,
            h = e,
            v = null;
          t: for (;;) {
            for (
              var y;
              h !== n || (i !== 0 && h.nodeType !== 3) || (a = l + i),
                h !== o || (r !== 0 && h.nodeType !== 3) || (s = l + r),
                h.nodeType === 3 && (l += h.nodeValue.length),
                (y = h.firstChild) !== null;

            )
              (v = h), (h = y);
            for (;;) {
              if (h === e) break t;
              if (
                (v === n && ++u === i && (a = l),
                v === o && ++f === r && (s = l),
                (y = h.nextSibling) !== null)
              )
                break;
              (h = v), (v = h.parentNode);
            }
            h = y;
          }
          n = a === -1 || s === -1 ? null : { start: a, end: s };
        } else n = null;
      }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (ns = { focusedElem: e, selectionRange: n }, Lo = !1, j = t; j !== null; )
    if (((t = j), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
      (e.return = t), (j = e);
    else
      for (; j !== null; ) {
        t = j;
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
                  var S = w.memoizedProps,
                    C = w.memoizedState,
                    p = t.stateNode,
                    c = p.getSnapshotBeforeUpdate(
                      t.elementType === t.type ? S : yt(t.type, S),
                      C
                    );
                  p.__reactInternalSnapshotBeforeUpdate = c;
                }
                break;
              case 3:
                var m = t.stateNode.containerInfo;
                m.nodeType === 1
                  ? (m.textContent = "")
                  : m.nodeType === 9 &&
                    m.documentElement &&
                    m.removeChild(m.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(O(163));
            }
        } catch (d) {
          he(t, t.return, d);
        }
        if (((e = t.sibling), e !== null)) {
          (e.return = t.return), (j = e);
          break;
        }
        j = t.return;
      }
  return (w = cf), (cf = !1), w;
}
function li(e, t, n) {
  var r = t.updateQueue;
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var i = (r = r.next);
    do {
      if ((i.tag & e) === e) {
        var o = i.destroy;
        (i.destroy = void 0), o !== void 0 && gs(t, n, o);
      }
      i = i.next;
    } while (i !== r);
  }
}
function dl(e, t) {
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
function Ss(e) {
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
function Jp(e) {
  var t = e.alternate;
  t !== null && ((e.alternate = null), Jp(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null &&
        (delete t[Tt], delete t[Ei], delete t[os], delete t[uy], delete t[cy])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null);
}
function Zp(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function ff(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || Zp(e.return)) return null;
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
function ws(e, t, n) {
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
          n != null || t.onclick !== null || (t.onclick = Do));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (ws(e, t, n), e = e.sibling; e !== null; ) ws(e, t, n), (e = e.sibling);
}
function xs(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && ((e = e.child), e !== null))
    for (xs(e, t, n), e = e.sibling; e !== null; ) xs(e, t, n), (e = e.sibling);
}
var Ne = null,
  gt = !1;
function nn(e, t, n) {
  for (n = n.child; n !== null; ) eh(e, t, n), (n = n.sibling);
}
function eh(e, t, n) {
  if (Lt && typeof Lt.onCommitFiberUnmount == "function")
    try {
      Lt.onCommitFiberUnmount(il, n);
    } catch {}
  switch (n.tag) {
    case 5:
      ze || sr(n, t);
    case 6:
      var r = Ne,
        i = gt;
      (Ne = null),
        nn(e, t, n),
        (Ne = r),
        (gt = i),
        Ne !== null &&
          (gt
            ? ((e = Ne),
              (n = n.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
            : Ne.removeChild(n.stateNode));
      break;
    case 18:
      Ne !== null &&
        (gt
          ? ((e = Ne),
            (n = n.stateNode),
            e.nodeType === 8
              ? ya(e.parentNode, n)
              : e.nodeType === 1 && ya(e, n),
            yi(e))
          : ya(Ne, n.stateNode));
      break;
    case 4:
      (r = Ne),
        (i = gt),
        (Ne = n.stateNode.containerInfo),
        (gt = !0),
        nn(e, t, n),
        (Ne = r),
        (gt = i);
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
            l !== void 0 && (o & 2 || o & 4) && gs(n, t, l),
            (i = i.next);
        } while (i !== r);
      }
      nn(e, t, n);
      break;
    case 1:
      if (
        !ze &&
        (sr(n, t),
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
      nn(e, t, n);
      break;
    case 21:
      nn(e, t, n);
      break;
    case 22:
      n.mode & 1
        ? ((ze = (r = ze) || n.memoizedState !== null), nn(e, t, n), (ze = r))
        : nn(e, t, n);
      break;
    default:
      nn(e, t, n);
  }
}
function df(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new Py()),
      t.forEach(function (r) {
        var i = zy.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(i, i));
      });
  }
}
function ht(e, t) {
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
              (Ne = a.stateNode), (gt = !1);
              break e;
            case 3:
              (Ne = a.stateNode.containerInfo), (gt = !0);
              break e;
            case 4:
              (Ne = a.stateNode.containerInfo), (gt = !0);
              break e;
          }
          a = a.return;
        }
        if (Ne === null) throw Error(O(160));
        eh(o, l, i), (Ne = null), (gt = !1);
        var s = i.alternate;
        s !== null && (s.return = null), (i.return = null);
      } catch (u) {
        he(i, t, u);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; ) th(t, e), (t = t.sibling);
}
function th(e, t) {
  var n = e.alternate,
    r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((ht(t, e), Pt(e), r & 4)) {
        try {
          li(3, e, e.return), dl(3, e);
        } catch (S) {
          he(e, e.return, S);
        }
        try {
          li(5, e, e.return);
        } catch (S) {
          he(e, e.return, S);
        }
      }
      break;
    case 1:
      ht(t, e), Pt(e), r & 512 && n !== null && sr(n, n.return);
      break;
    case 5:
      if (
        (ht(t, e),
        Pt(e),
        r & 512 && n !== null && sr(n, n.return),
        e.flags & 32)
      ) {
        var i = e.stateNode;
        try {
          pi(i, "");
        } catch (S) {
          he(e, e.return, S);
        }
      }
      if (r & 4 && ((i = e.stateNode), i != null)) {
        var o = e.memoizedProps,
          l = n !== null ? n.memoizedProps : o,
          a = e.type,
          s = e.updateQueue;
        if (((e.updateQueue = null), s !== null))
          try {
            a === "input" && o.type === "radio" && o.name != null && Ed(i, o),
              Va(a, l);
            var u = Va(a, o);
            for (l = 0; l < s.length; l += 2) {
              var f = s[l],
                h = s[l + 1];
              f === "style"
                ? kd(i, h)
                : f === "dangerouslySetInnerHTML"
                ? _d(i, h)
                : f === "children"
                ? pi(i, h)
                : Ws(i, f, h, u);
            }
            switch (a) {
              case "input":
                Aa(i, o);
                break;
              case "textarea":
                Rd(i, o);
                break;
              case "select":
                var v = i._wrapperState.wasMultiple;
                i._wrapperState.wasMultiple = !!o.multiple;
                var y = o.value;
                y != null
                  ? dr(i, !!o.multiple, y, !1)
                  : v !== !!o.multiple &&
                    (o.defaultValue != null
                      ? dr(i, !!o.multiple, o.defaultValue, !0)
                      : dr(i, !!o.multiple, o.multiple ? [] : "", !1));
            }
            i[Ei] = o;
          } catch (S) {
            he(e, e.return, S);
          }
      }
      break;
    case 6:
      if ((ht(t, e), Pt(e), r & 4)) {
        if (e.stateNode === null) throw Error(O(162));
        (i = e.stateNode), (o = e.memoizedProps);
        try {
          i.nodeValue = o;
        } catch (S) {
          he(e, e.return, S);
        }
      }
      break;
    case 3:
      if (
        (ht(t, e), Pt(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
      )
        try {
          yi(t.containerInfo);
        } catch (S) {
          he(e, e.return, S);
        }
      break;
    case 4:
      ht(t, e), Pt(e);
      break;
    case 13:
      ht(t, e),
        Pt(e),
        (i = e.child),
        i.flags & 8192 &&
          ((o = i.memoizedState !== null),
          (i.stateNode.isHidden = o),
          !o ||
            (i.alternate !== null && i.alternate.memoizedState !== null) ||
            (xu = ye())),
        r & 4 && df(e);
      break;
    case 22:
      if (
        ((f = n !== null && n.memoizedState !== null),
        e.mode & 1 ? ((ze = (u = ze) || f), ht(t, e), (ze = u)) : ht(t, e),
        Pt(e),
        r & 8192)
      ) {
        if (
          ((u = e.memoizedState !== null),
          (e.stateNode.isHidden = u) && !f && e.mode & 1)
        )
          for (j = e, f = e.child; f !== null; ) {
            for (h = j = f; j !== null; ) {
              switch (((v = j), (y = v.child), v.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  li(4, v, v.return);
                  break;
                case 1:
                  sr(v, v.return);
                  var w = v.stateNode;
                  if (typeof w.componentWillUnmount == "function") {
                    (r = v), (n = v.return);
                    try {
                      (t = r),
                        (w.props = t.memoizedProps),
                        (w.state = t.memoizedState),
                        w.componentWillUnmount();
                    } catch (S) {
                      he(r, n, S);
                    }
                  }
                  break;
                case 5:
                  sr(v, v.return);
                  break;
                case 22:
                  if (v.memoizedState !== null) {
                    hf(h);
                    continue;
                  }
              }
              y !== null ? ((y.return = v), (j = y)) : hf(h);
            }
            f = f.sibling;
          }
        e: for (f = null, h = e; ; ) {
          if (h.tag === 5) {
            if (f === null) {
              f = h;
              try {
                (i = h.stateNode),
                  u
                    ? ((o = i.style),
                      typeof o.setProperty == "function"
                        ? o.setProperty("display", "none", "important")
                        : (o.display = "none"))
                    : ((a = h.stateNode),
                      (s = h.memoizedProps.style),
                      (l =
                        s != null && s.hasOwnProperty("display")
                          ? s.display
                          : null),
                      (a.style.display = Pd("display", l)));
              } catch (S) {
                he(e, e.return, S);
              }
            }
          } else if (h.tag === 6) {
            if (f === null)
              try {
                h.stateNode.nodeValue = u ? "" : h.memoizedProps;
              } catch (S) {
                he(e, e.return, S);
              }
          } else if (
            ((h.tag !== 22 && h.tag !== 23) ||
              h.memoizedState === null ||
              h === e) &&
            h.child !== null
          ) {
            (h.child.return = h), (h = h.child);
            continue;
          }
          if (h === e) break e;
          for (; h.sibling === null; ) {
            if (h.return === null || h.return === e) break e;
            f === h && (f = null), (h = h.return);
          }
          f === h && (f = null), (h.sibling.return = h.return), (h = h.sibling);
        }
      }
      break;
    case 19:
      ht(t, e), Pt(e), r & 4 && df(e);
      break;
    case 21:
      break;
    default:
      ht(t, e), Pt(e);
  }
}
function Pt(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (Zp(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(O(160));
      }
      switch (r.tag) {
        case 5:
          var i = r.stateNode;
          r.flags & 32 && (pi(i, ""), (r.flags &= -33));
          var o = ff(e);
          xs(e, o, i);
          break;
        case 3:
        case 4:
          var l = r.stateNode.containerInfo,
            a = ff(e);
          ws(e, a, l);
          break;
        default:
          throw Error(O(161));
      }
    } catch (s) {
      he(e, e.return, s);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function Ny(e, t, n) {
  (j = e), nh(e);
}
function nh(e, t, n) {
  for (var r = (e.mode & 1) !== 0; j !== null; ) {
    var i = j,
      o = i.child;
    if (i.tag === 22 && r) {
      var l = i.memoizedState !== null || lo;
      if (!l) {
        var a = i.alternate,
          s = (a !== null && a.memoizedState !== null) || ze;
        a = lo;
        var u = ze;
        if (((lo = l), (ze = s) && !u))
          for (j = i; j !== null; )
            (l = j),
              (s = l.child),
              l.tag === 22 && l.memoizedState !== null
                ? mf(i)
                : s !== null
                ? ((s.return = l), (j = s))
                : mf(i);
        for (; o !== null; ) (j = o), nh(o), (o = o.sibling);
        (j = i), (lo = a), (ze = u);
      }
      pf(e);
    } else
      i.subtreeFlags & 8772 && o !== null ? ((o.return = i), (j = o)) : pf(e);
  }
}
function pf(e) {
  for (; j !== null; ) {
    var t = j;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              ze || dl(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !ze)
                if (n === null) r.componentDidMount();
                else {
                  var i =
                    t.elementType === t.type
                      ? n.memoizedProps
                      : yt(t.type, n.memoizedProps);
                  r.componentDidUpdate(
                    i,
                    n.memoizedState,
                    r.__reactInternalSnapshotBeforeUpdate
                  );
                }
              var o = t.updateQueue;
              o !== null && Yc(t, o, r);
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
                Yc(t, l, n);
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
                  var f = u.memoizedState;
                  if (f !== null) {
                    var h = f.dehydrated;
                    h !== null && yi(h);
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
              throw Error(O(163));
          }
        ze || (t.flags & 512 && Ss(t));
      } catch (v) {
        he(t, t.return, v);
      }
    }
    if (t === e) {
      j = null;
      break;
    }
    if (((n = t.sibling), n !== null)) {
      (n.return = t.return), (j = n);
      break;
    }
    j = t.return;
  }
}
function hf(e) {
  for (; j !== null; ) {
    var t = j;
    if (t === e) {
      j = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      (n.return = t.return), (j = n);
      break;
    }
    j = t.return;
  }
}
function mf(e) {
  for (; j !== null; ) {
    var t = j;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            dl(4, t);
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
            Ss(t);
          } catch (s) {
            he(t, o, s);
          }
          break;
        case 5:
          var l = t.return;
          try {
            Ss(t);
          } catch (s) {
            he(t, l, s);
          }
      }
    } catch (s) {
      he(t, t.return, s);
    }
    if (t === e) {
      j = null;
      break;
    }
    var a = t.sibling;
    if (a !== null) {
      (a.return = t.return), (j = a);
      break;
    }
    j = t.return;
  }
}
var Ty = Math.ceil,
  Ko = qt.ReactCurrentDispatcher,
  Su = qt.ReactCurrentOwner,
  ut = qt.ReactCurrentBatchConfig,
  Q = 0,
  Pe = null,
  xe = null,
  Te = 0,
  Xe = 0,
  ur = Rn(0),
  Ce = 0,
  Ni = null,
  bn = 0,
  pl = 0,
  wu = 0,
  ai = null,
  He = null,
  xu = 0,
  _r = 1 / 0,
  $t = null,
  Qo = !1,
  Es = null,
  vn = null,
  ao = !1,
  cn = null,
  qo = 0,
  si = 0,
  Rs = null,
  Co = -1,
  _o = 0;
function Ae() {
  return Q & 6 ? ye() : Co !== -1 ? Co : (Co = ye());
}
function yn(e) {
  return e.mode & 1
    ? Q & 2 && Te !== 0
      ? Te & -Te
      : dy.transition !== null
      ? (_o === 0 && (_o = Ud()), _o)
      : ((e = X),
        e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : Kd(e.type))),
        e)
    : 1;
}
function Et(e, t, n, r) {
  if (50 < si) throw ((si = 0), (Rs = null), Error(O(185)));
  ji(e, n, r),
    (!(Q & 2) || e !== Pe) &&
      (e === Pe && (!(Q & 2) && (pl |= n), Ce === 4 && sn(e, Te)),
      Qe(e, r),
      n === 1 && Q === 0 && !(t.mode & 1) && ((_r = ye() + 500), ul && Cn()));
}
function Qe(e, t) {
  var n = e.callbackNode;
  dv(e, t);
  var r = Mo(e, e === Pe ? Te : 0);
  if (r === 0)
    n !== null && Rc(n), (e.callbackNode = null), (e.callbackPriority = 0);
  else if (((t = r & -r), e.callbackPriority !== t)) {
    if ((n != null && Rc(n), t === 1))
      e.tag === 0 ? fy(vf.bind(null, e)) : fp(vf.bind(null, e)),
        ay(function () {
          !(Q & 6) && Cn();
        }),
        (n = null);
    else {
      switch (Ad(r)) {
        case 1:
          n = Qs;
          break;
        case 4:
          n = $d;
          break;
        case 16:
          n = Oo;
          break;
        case 536870912:
          n = Fd;
          break;
        default:
          n = Oo;
      }
      n = ch(n, rh.bind(null, e));
    }
    (e.callbackPriority = t), (e.callbackNode = n);
  }
}
function rh(e, t) {
  if (((Co = -1), (_o = 0), Q & 6)) throw Error(O(327));
  var n = e.callbackNode;
  if (yr() && e.callbackNode !== n) return null;
  var r = Mo(e, e === Pe ? Te : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = Yo(e, r);
  else {
    t = r;
    var i = Q;
    Q |= 2;
    var o = oh();
    (Pe !== e || Te !== t) && (($t = null), (_r = ye() + 500), zn(e, t));
    do
      try {
        Ly();
        break;
      } catch (a) {
        ih(e, a);
      }
    while (1);
    lu(),
      (Ko.current = o),
      (Q = i),
      xe !== null ? (t = 0) : ((Pe = null), (Te = 0), (t = Ce));
  }
  if (t !== 0) {
    if (
      (t === 2 && ((i = Xa(e)), i !== 0 && ((r = i), (t = Cs(e, i)))), t === 1)
    )
      throw ((n = Ni), zn(e, 0), sn(e, r), Qe(e, ye()), n);
    if (t === 6) sn(e, r);
    else {
      if (
        ((i = e.current.alternate),
        !(r & 30) &&
          !Oy(i) &&
          ((t = Yo(e, r)),
          t === 2 && ((o = Xa(e)), o !== 0 && ((r = o), (t = Cs(e, o)))),
          t === 1))
      )
        throw ((n = Ni), zn(e, 0), sn(e, r), Qe(e, ye()), n);
      switch (((e.finishedWork = i), (e.finishedLanes = r), t)) {
        case 0:
        case 1:
          throw Error(O(345));
        case 2:
          On(e, He, $t);
          break;
        case 3:
          if (
            (sn(e, r), (r & 130023424) === r && ((t = xu + 500 - ye()), 10 < t))
          ) {
            if (Mo(e, 0) !== 0) break;
            if (((i = e.suspendedLanes), (i & r) !== r)) {
              Ae(), (e.pingedLanes |= e.suspendedLanes & i);
              break;
            }
            e.timeoutHandle = is(On.bind(null, e, He, $t), t);
            break;
          }
          On(e, He, $t);
          break;
        case 4:
          if ((sn(e, r), (r & 4194240) === r)) break;
          for (t = e.eventTimes, i = -1; 0 < r; ) {
            var l = 31 - xt(r);
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
                : 1960 * Ty(r / 1960)) - r),
            10 < r)
          ) {
            e.timeoutHandle = is(On.bind(null, e, He, $t), r);
            break;
          }
          On(e, He, $t);
          break;
        case 5:
          On(e, He, $t);
          break;
        default:
          throw Error(O(329));
      }
    }
  }
  return Qe(e, ye()), e.callbackNode === n ? rh.bind(null, e) : null;
}
function Cs(e, t) {
  var n = ai;
  return (
    e.current.memoizedState.isDehydrated && (zn(e, t).flags |= 256),
    (e = Yo(e, t)),
    e !== 2 && ((t = He), (He = n), t !== null && _s(t)),
    e
  );
}
function _s(e) {
  He === null ? (He = e) : He.push.apply(He, e);
}
function Oy(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && ((n = n.stores), n !== null))
        for (var r = 0; r < n.length; r++) {
          var i = n[r],
            o = i.getSnapshot;
          i = i.value;
          try {
            if (!Rt(o(), i)) return !1;
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
function sn(e, t) {
  for (
    t &= ~wu,
      t &= ~pl,
      e.suspendedLanes |= t,
      e.pingedLanes &= ~t,
      e = e.expirationTimes;
    0 < t;

  ) {
    var n = 31 - xt(t),
      r = 1 << n;
    (e[n] = -1), (t &= ~r);
  }
}
function vf(e) {
  if (Q & 6) throw Error(O(327));
  yr();
  var t = Mo(e, 0);
  if (!(t & 1)) return Qe(e, ye()), null;
  var n = Yo(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = Xa(e);
    r !== 0 && ((t = r), (n = Cs(e, r)));
  }
  if (n === 1) throw ((n = Ni), zn(e, 0), sn(e, t), Qe(e, ye()), n);
  if (n === 6) throw Error(O(345));
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    On(e, He, $t),
    Qe(e, ye()),
    null
  );
}
function Eu(e, t) {
  var n = Q;
  Q |= 1;
  try {
    return e(t);
  } finally {
    (Q = n), Q === 0 && ((_r = ye() + 500), ul && Cn());
  }
}
function Wn(e) {
  cn !== null && cn.tag === 0 && !(Q & 6) && yr();
  var t = Q;
  Q |= 1;
  var n = ut.transition,
    r = X;
  try {
    if (((ut.transition = null), (X = 1), e)) return e();
  } finally {
    (X = r), (ut.transition = n), (Q = t), !(Q & 6) && Cn();
  }
}
function Ru() {
  (Xe = ur.current), oe(ur);
}
function zn(e, t) {
  (e.finishedWork = null), (e.finishedLanes = 0);
  var n = e.timeoutHandle;
  if ((n !== -1 && ((e.timeoutHandle = -1), ly(n)), xe !== null))
    for (n = xe.return; n !== null; ) {
      var r = n;
      switch ((ru(r), r.tag)) {
        case 1:
          (r = r.type.childContextTypes), r != null && zo();
          break;
        case 3:
          Rr(), oe(Ve), oe($e), du();
          break;
        case 5:
          fu(r);
          break;
        case 4:
          Rr();
          break;
        case 13:
          oe(ce);
          break;
        case 19:
          oe(ce);
          break;
        case 10:
          au(r.type._context);
          break;
        case 22:
        case 23:
          Ru();
      }
      n = n.return;
    }
  if (
    ((Pe = e),
    (xe = e = gn(e.current, null)),
    (Te = Xe = t),
    (Ce = 0),
    (Ni = null),
    (wu = pl = bn = 0),
    (He = ai = null),
    jn !== null)
  ) {
    for (t = 0; t < jn.length; t++)
      if (((n = jn[t]), (r = n.interleaved), r !== null)) {
        n.interleaved = null;
        var i = r.next,
          o = n.pending;
        if (o !== null) {
          var l = o.next;
          (o.next = i), (r.next = l);
        }
        n.pending = r;
      }
    jn = null;
  }
  return e;
}
function ih(e, t) {
  do {
    var n = xe;
    try {
      if ((lu(), (xo.current = Vo), Bo)) {
        for (var r = fe.memoizedState; r !== null; ) {
          var i = r.queue;
          i !== null && (i.pending = null), (r = r.next);
        }
        Bo = !1;
      }
      if (
        ((An = 0),
        (_e = Re = fe = null),
        (oi = !1),
        (_i = 0),
        (Su.current = null),
        n === null || n.return === null)
      ) {
        (Ce = 1), (Ni = t), (xe = null);
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
            f = a,
            h = f.tag;
          if (!(f.mode & 1) && (h === 0 || h === 11 || h === 15)) {
            var v = f.alternate;
            v
              ? ((f.updateQueue = v.updateQueue),
                (f.memoizedState = v.memoizedState),
                (f.lanes = v.lanes))
              : ((f.updateQueue = null), (f.memoizedState = null));
          }
          var y = nf(l);
          if (y !== null) {
            (y.flags &= -257),
              rf(y, l, a, o, t),
              y.mode & 1 && tf(o, u, t),
              (t = y),
              (s = u);
            var w = t.updateQueue;
            if (w === null) {
              var S = new Set();
              S.add(s), (t.updateQueue = S);
            } else w.add(s);
            break e;
          } else {
            if (!(t & 1)) {
              tf(o, u, t), Cu();
              break e;
            }
            s = Error(O(426));
          }
        } else if (le && a.mode & 1) {
          var C = nf(l);
          if (C !== null) {
            !(C.flags & 65536) && (C.flags |= 256),
              rf(C, l, a, o, t),
              iu(Cr(s, a));
            break e;
          }
        }
        (o = s = Cr(s, a)),
          Ce !== 4 && (Ce = 2),
          ai === null ? (ai = [o]) : ai.push(o),
          (o = l);
        do {
          switch (o.tag) {
            case 3:
              (o.flags |= 65536), (t &= -t), (o.lanes |= t);
              var p = bp(o, s, t);
              qc(o, p);
              break e;
            case 1:
              a = s;
              var c = o.type,
                m = o.stateNode;
              if (
                !(o.flags & 128) &&
                (typeof c.getDerivedStateFromError == "function" ||
                  (m !== null &&
                    typeof m.componentDidCatch == "function" &&
                    (vn === null || !vn.has(m))))
              ) {
                (o.flags |= 65536), (t &= -t), (o.lanes |= t);
                var d = Wp(o, a, t);
                qc(o, d);
                break e;
              }
          }
          o = o.return;
        } while (o !== null);
      }
      ah(n);
    } catch (x) {
      (t = x), xe === n && n !== null && (xe = n = n.return);
      continue;
    }
    break;
  } while (1);
}
function oh() {
  var e = Ko.current;
  return (Ko.current = Vo), e === null ? Vo : e;
}
function Cu() {
  (Ce === 0 || Ce === 3 || Ce === 2) && (Ce = 4),
    Pe === null || (!(bn & 268435455) && !(pl & 268435455)) || sn(Pe, Te);
}
function Yo(e, t) {
  var n = Q;
  Q |= 2;
  var r = oh();
  (Pe !== e || Te !== t) && (($t = null), zn(e, t));
  do
    try {
      My();
      break;
    } catch (i) {
      ih(e, i);
    }
  while (1);
  if ((lu(), (Q = n), (Ko.current = r), xe !== null)) throw Error(O(261));
  return (Pe = null), (Te = 0), Ce;
}
function My() {
  for (; xe !== null; ) lh(xe);
}
function Ly() {
  for (; xe !== null && !rv(); ) lh(xe);
}
function lh(e) {
  var t = uh(e.alternate, e, Xe);
  (e.memoizedProps = e.pendingProps),
    t === null ? ah(e) : (xe = t),
    (Su.current = null);
}
function ah(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (((e = t.return), t.flags & 32768)) {
      if (((n = _y(n, t)), n !== null)) {
        (n.flags &= 32767), (xe = n);
        return;
      }
      if (e !== null)
        (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
      else {
        (Ce = 6), (xe = null);
        return;
      }
    } else if (((n = Cy(n, t, Xe)), n !== null)) {
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
function On(e, t, n) {
  var r = X,
    i = ut.transition;
  try {
    (ut.transition = null), (X = 1), jy(e, t, n, r);
  } finally {
    (ut.transition = i), (X = r);
  }
  return null;
}
function jy(e, t, n, r) {
  do yr();
  while (cn !== null);
  if (Q & 6) throw Error(O(327));
  n = e.finishedWork;
  var i = e.finishedLanes;
  if (n === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
    throw Error(O(177));
  (e.callbackNode = null), (e.callbackPriority = 0);
  var o = n.lanes | n.childLanes;
  if (
    (pv(e, o),
    e === Pe && ((xe = Pe = null), (Te = 0)),
    (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      ao ||
      ((ao = !0),
      ch(Oo, function () {
        return yr(), null;
      })),
    (o = (n.flags & 15990) !== 0),
    n.subtreeFlags & 15990 || o)
  ) {
    (o = ut.transition), (ut.transition = null);
    var l = X;
    X = 1;
    var a = Q;
    (Q |= 4),
      (Su.current = null),
      ky(e, n),
      th(n, e),
      Zv(ns),
      (Lo = !!ts),
      (ns = ts = null),
      (e.current = n),
      Ny(n),
      iv(),
      (Q = a),
      (X = l),
      (ut.transition = o);
  } else e.current = n;
  if (
    (ao && ((ao = !1), (cn = e), (qo = i)),
    (o = e.pendingLanes),
    o === 0 && (vn = null),
    av(n.stateNode),
    Qe(e, ye()),
    t !== null)
  )
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      (i = t[n]), r(i.value, { componentStack: i.stack, digest: i.digest });
  if (Qo) throw ((Qo = !1), (e = Es), (Es = null), e);
  return (
    qo & 1 && e.tag !== 0 && yr(),
    (o = e.pendingLanes),
    o & 1 ? (e === Rs ? si++ : ((si = 0), (Rs = e))) : (si = 0),
    Cn(),
    null
  );
}
function yr() {
  if (cn !== null) {
    var e = Ad(qo),
      t = ut.transition,
      n = X;
    try {
      if (((ut.transition = null), (X = 16 > e ? 16 : e), cn === null))
        var r = !1;
      else {
        if (((e = cn), (cn = null), (qo = 0), Q & 6)) throw Error(O(331));
        var i = Q;
        for (Q |= 4, j = e.current; j !== null; ) {
          var o = j,
            l = o.child;
          if (j.flags & 16) {
            var a = o.deletions;
            if (a !== null) {
              for (var s = 0; s < a.length; s++) {
                var u = a[s];
                for (j = u; j !== null; ) {
                  var f = j;
                  switch (f.tag) {
                    case 0:
                    case 11:
                    case 15:
                      li(8, f, o);
                  }
                  var h = f.child;
                  if (h !== null) (h.return = f), (j = h);
                  else
                    for (; j !== null; ) {
                      f = j;
                      var v = f.sibling,
                        y = f.return;
                      if ((Jp(f), f === u)) {
                        j = null;
                        break;
                      }
                      if (v !== null) {
                        (v.return = y), (j = v);
                        break;
                      }
                      j = y;
                    }
                }
              }
              var w = o.alternate;
              if (w !== null) {
                var S = w.child;
                if (S !== null) {
                  w.child = null;
                  do {
                    var C = S.sibling;
                    (S.sibling = null), (S = C);
                  } while (S !== null);
                }
              }
              j = o;
            }
          }
          if (o.subtreeFlags & 2064 && l !== null) (l.return = o), (j = l);
          else
            e: for (; j !== null; ) {
              if (((o = j), o.flags & 2048))
                switch (o.tag) {
                  case 0:
                  case 11:
                  case 15:
                    li(9, o, o.return);
                }
              var p = o.sibling;
              if (p !== null) {
                (p.return = o.return), (j = p);
                break e;
              }
              j = o.return;
            }
        }
        var c = e.current;
        for (j = c; j !== null; ) {
          l = j;
          var m = l.child;
          if (l.subtreeFlags & 2064 && m !== null) (m.return = l), (j = m);
          else
            e: for (l = c; j !== null; ) {
              if (((a = j), a.flags & 2048))
                try {
                  switch (a.tag) {
                    case 0:
                    case 11:
                    case 15:
                      dl(9, a);
                  }
                } catch (x) {
                  he(a, a.return, x);
                }
              if (a === l) {
                j = null;
                break e;
              }
              var d = a.sibling;
              if (d !== null) {
                (d.return = a.return), (j = d);
                break e;
              }
              j = a.return;
            }
        }
        if (
          ((Q = i), Cn(), Lt && typeof Lt.onPostCommitFiberRoot == "function")
        )
          try {
            Lt.onPostCommitFiberRoot(il, e);
          } catch {}
        r = !0;
      }
      return r;
    } finally {
      (X = n), (ut.transition = t);
    }
  }
  return !1;
}
function yf(e, t, n) {
  (t = Cr(n, t)),
    (t = bp(e, t, 1)),
    (e = mn(e, t, 1)),
    (t = Ae()),
    e !== null && (ji(e, 1, t), Qe(e, t));
}
function he(e, t, n) {
  if (e.tag === 3) yf(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        yf(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (
          typeof t.type.getDerivedStateFromError == "function" ||
          (typeof r.componentDidCatch == "function" &&
            (vn === null || !vn.has(r)))
        ) {
          (e = Cr(n, e)),
            (e = Wp(t, e, 1)),
            (t = mn(t, e, 1)),
            (e = Ae()),
            t !== null && (ji(t, 1, e), Qe(t, e));
          break;
        }
      }
      t = t.return;
    }
}
function Iy(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t),
    (t = Ae()),
    (e.pingedLanes |= e.suspendedLanes & n),
    Pe === e &&
      (Te & n) === n &&
      (Ce === 4 || (Ce === 3 && (Te & 130023424) === Te && 500 > ye() - xu)
        ? zn(e, 0)
        : (wu |= n)),
    Qe(e, t);
}
function sh(e, t) {
  t === 0 &&
    (e.mode & 1
      ? ((t = Gi), (Gi <<= 1), !(Gi & 130023424) && (Gi = 4194304))
      : (t = 1));
  var n = Ae();
  (e = Kt(e, t)), e !== null && (ji(e, t, n), Qe(e, n));
}
function Dy(e) {
  var t = e.memoizedState,
    n = 0;
  t !== null && (n = t.retryLane), sh(e, n);
}
function zy(e, t) {
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
      throw Error(O(314));
  }
  r !== null && r.delete(t), sh(e, n);
}
var uh;
uh = function (e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || Ve.current) Be = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return (Be = !1), Ry(e, t, n);
      Be = !!(e.flags & 131072);
    }
  else (Be = !1), le && t.flags & 1048576 && dp(t, Uo, t.index);
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var r = t.type;
      Ro(e, t), (e = t.pendingProps);
      var i = wr(t, $e.current);
      vr(t, n), (i = hu(null, t, r, e, i, n));
      var o = mu();
      return (
        (t.flags |= 1),
        typeof i == "object" &&
        i !== null &&
        typeof i.render == "function" &&
        i.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            Ke(r) ? ((o = !0), $o(t)) : (o = !1),
            (t.memoizedState =
              i.state !== null && i.state !== void 0 ? i.state : null),
            uu(t),
            (i.updater = cl),
            (t.stateNode = i),
            (i._reactInternals = t),
            fs(t, r, e, n),
            (t = hs(null, t, r, !0, o, n)))
          : ((t.tag = 0), le && o && nu(t), Ue(null, t, i, n), (t = t.child)),
        t
      );
    case 16:
      r = t.elementType;
      e: {
        switch (
          (Ro(e, t),
          (e = t.pendingProps),
          (i = r._init),
          (r = i(r._payload)),
          (t.type = r),
          (i = t.tag = Fy(r)),
          (e = yt(r, e)),
          i)
        ) {
          case 0:
            t = ps(null, t, r, e, n);
            break e;
          case 1:
            t = af(null, t, r, e, n);
            break e;
          case 11:
            t = of(null, t, r, e, n);
            break e;
          case 14:
            t = lf(null, t, r, yt(r.type, e), n);
            break e;
        }
        throw Error(O(306, r, ""));
      }
      return t;
    case 0:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : yt(r, i)),
        ps(e, t, r, i, n)
      );
    case 1:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : yt(r, i)),
        af(e, t, r, i, n)
      );
    case 3:
      e: {
        if ((Kp(t), e === null)) throw Error(O(387));
        (r = t.pendingProps),
          (o = t.memoizedState),
          (i = o.element),
          vp(e, t),
          Wo(t, r, null, n);
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
            (i = Cr(Error(O(423)), t)), (t = sf(e, t, r, n, i));
            break e;
          } else if (r !== i) {
            (i = Cr(Error(O(424)), t)), (t = sf(e, t, r, n, i));
            break e;
          } else
            for (
              Je = hn(t.stateNode.containerInfo.firstChild),
                Ze = t,
                le = !0,
                wt = null,
                n = wp(t, null, r, n),
                t.child = n;
              n;

            )
              (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
        else {
          if ((xr(), r === i)) {
            t = Qt(e, t, n);
            break e;
          }
          Ue(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return (
        xp(t),
        e === null && ss(t),
        (r = t.type),
        (i = t.pendingProps),
        (o = e !== null ? e.memoizedProps : null),
        (l = i.children),
        rs(r, i) ? (l = null) : o !== null && rs(r, o) && (t.flags |= 32),
        Vp(e, t),
        Ue(e, t, l, n),
        t.child
      );
    case 6:
      return e === null && ss(t), null;
    case 13:
      return Qp(e, t, n);
    case 4:
      return (
        cu(t, t.stateNode.containerInfo),
        (r = t.pendingProps),
        e === null ? (t.child = Er(t, null, r, n)) : Ue(e, t, r, n),
        t.child
      );
    case 11:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : yt(r, i)),
        of(e, t, r, i, n)
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
          re(Ao, r._currentValue),
          (r._currentValue = l),
          o !== null)
        )
          if (Rt(o.value, l)) {
            if (o.children === i.children && !Ve.current) {
              t = Qt(e, t, n);
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
                      (s = Wt(-1, n & -n)), (s.tag = 2);
                      var u = o.updateQueue;
                      if (u !== null) {
                        u = u.shared;
                        var f = u.pending;
                        f === null
                          ? (s.next = s)
                          : ((s.next = f.next), (f.next = s)),
                          (u.pending = s);
                      }
                    }
                    (o.lanes |= n),
                      (s = o.alternate),
                      s !== null && (s.lanes |= n),
                      us(o.return, n, t),
                      (a.lanes |= n);
                    break;
                  }
                  s = s.next;
                }
              } else if (o.tag === 10) l = o.type === t.type ? null : o.child;
              else if (o.tag === 18) {
                if (((l = o.return), l === null)) throw Error(O(341));
                (l.lanes |= n),
                  (a = l.alternate),
                  a !== null && (a.lanes |= n),
                  us(l, n, t),
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
        vr(t, n),
        (i = ct(i)),
        (r = r(i)),
        (t.flags |= 1),
        Ue(e, t, r, n),
        t.child
      );
    case 14:
      return (
        (r = t.type),
        (i = yt(r, t.pendingProps)),
        (i = yt(r.type, i)),
        lf(e, t, r, i, n)
      );
    case 15:
      return Hp(e, t, t.type, t.pendingProps, n);
    case 17:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : yt(r, i)),
        Ro(e, t),
        (t.tag = 1),
        Ke(r) ? ((e = !0), $o(t)) : (e = !1),
        vr(t, n),
        gp(t, r, i),
        fs(t, r, i, n),
        hs(null, t, r, !0, e, n)
      );
    case 19:
      return qp(e, t, n);
    case 22:
      return Bp(e, t, n);
  }
  throw Error(O(156, t.tag));
};
function ch(e, t) {
  return zd(e, t);
}
function $y(e, t, n, r) {
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
function st(e, t, n, r) {
  return new $y(e, t, n, r);
}
function _u(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent);
}
function Fy(e) {
  if (typeof e == "function") return _u(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === Bs)) return 11;
    if (e === Vs) return 14;
  }
  return 2;
}
function gn(e, t) {
  var n = e.alternate;
  return (
    n === null
      ? ((n = st(e.tag, t, e.key, e.mode)),
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
function Po(e, t, n, r, i, o) {
  var l = 2;
  if (((r = e), typeof e == "function")) _u(e) && (l = 1);
  else if (typeof e == "string") l = 5;
  else
    e: switch (e) {
      case Zn:
        return $n(n.children, i, o, t);
      case Hs:
        (l = 8), (i |= 8);
        break;
      case Da:
        return (
          (e = st(12, n, t, i | 2)), (e.elementType = Da), (e.lanes = o), e
        );
      case za:
        return (e = st(13, n, t, i)), (e.elementType = za), (e.lanes = o), e;
      case $a:
        return (e = st(19, n, t, i)), (e.elementType = $a), (e.lanes = o), e;
      case Sd:
        return hl(n, i, o, t);
      default:
        if (typeof e == "object" && e !== null)
          switch (e.$$typeof) {
            case yd:
              l = 10;
              break e;
            case gd:
              l = 9;
              break e;
            case Bs:
              l = 11;
              break e;
            case Vs:
              l = 14;
              break e;
            case on:
              (l = 16), (r = null);
              break e;
          }
        throw Error(O(130, e == null ? e : typeof e, ""));
    }
  return (
    (t = st(l, n, t, i)), (t.elementType = e), (t.type = r), (t.lanes = o), t
  );
}
function $n(e, t, n, r) {
  return (e = st(7, e, r, t)), (e.lanes = n), e;
}
function hl(e, t, n, r) {
  return (
    (e = st(22, e, r, t)),
    (e.elementType = Sd),
    (e.lanes = n),
    (e.stateNode = { isHidden: !1 }),
    e
  );
}
function _a(e, t, n) {
  return (e = st(6, e, null, t)), (e.lanes = n), e;
}
function Pa(e, t, n) {
  return (
    (t = st(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = n),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    t
  );
}
function Uy(e, t, n, r, i) {
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
    (this.eventTimes = la(0)),
    (this.expirationTimes = la(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = la(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = i),
    (this.mutableSourceEagerHydrationData = null);
}
function Pu(e, t, n, r, i, o, l, a, s) {
  return (
    (e = new Uy(e, t, n, a, s)),
    t === 1 ? ((t = 1), o === !0 && (t |= 8)) : (t = 0),
    (o = st(3, null, null, t)),
    (e.current = o),
    (o.stateNode = e),
    (o.memoizedState = {
      element: r,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    uu(o),
    e
  );
}
function Ay(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: Jn,
    key: r == null ? null : "" + r,
    children: e,
    containerInfo: t,
    implementation: n,
  };
}
function fh(e) {
  if (!e) return wn;
  e = e._reactInternals;
  e: {
    if (Vn(e) !== e || e.tag !== 1) throw Error(O(170));
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
    throw Error(O(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (Ke(n)) return cp(e, n, t);
  }
  return t;
}
function dh(e, t, n, r, i, o, l, a, s) {
  return (
    (e = Pu(n, r, !0, e, i, o, l, a, s)),
    (e.context = fh(null)),
    (n = e.current),
    (r = Ae()),
    (i = yn(n)),
    (o = Wt(r, i)),
    (o.callback = t ?? null),
    mn(n, o, i),
    (e.current.lanes = i),
    ji(e, i, r),
    Qe(e, r),
    e
  );
}
function ml(e, t, n, r) {
  var i = t.current,
    o = Ae(),
    l = yn(i);
  return (
    (n = fh(n)),
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = Wt(o, l)),
    (t.payload = { element: e }),
    (r = r === void 0 ? null : r),
    r !== null && (t.callback = r),
    (e = mn(i, t, l)),
    e !== null && (Et(e, i, l, o), wo(e, i, l)),
    l
  );
}
function Xo(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function gf(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function ku(e, t) {
  gf(e, t), (e = e.alternate) && gf(e, t);
}
function by() {
  return null;
}
var ph =
  typeof reportError == "function"
    ? reportError
    : function (e) {
        console.error(e);
      };
function Nu(e) {
  this._internalRoot = e;
}
vl.prototype.render = Nu.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error(O(409));
  ml(e, t, null, null);
};
vl.prototype.unmount = Nu.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    Wn(function () {
      ml(null, e, null, null);
    }),
      (t[Vt] = null);
  }
};
function vl(e) {
  this._internalRoot = e;
}
vl.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = Hd();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < an.length && t !== 0 && t < an[n].priority; n++);
    an.splice(n, 0, e), n === 0 && Vd(e);
  }
};
function Tu(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function yl(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
  );
}
function Sf() {}
function Wy(e, t, n, r, i) {
  if (i) {
    if (typeof r == "function") {
      var o = r;
      r = function () {
        var u = Xo(l);
        o.call(u);
      };
    }
    var l = dh(t, r, e, 0, null, !1, !1, "", Sf);
    return (
      (e._reactRootContainer = l),
      (e[Vt] = l.current),
      wi(e.nodeType === 8 ? e.parentNode : e),
      Wn(),
      l
    );
  }
  for (; (i = e.lastChild); ) e.removeChild(i);
  if (typeof r == "function") {
    var a = r;
    r = function () {
      var u = Xo(s);
      a.call(u);
    };
  }
  var s = Pu(e, 0, !1, null, null, !1, !1, "", Sf);
  return (
    (e._reactRootContainer = s),
    (e[Vt] = s.current),
    wi(e.nodeType === 8 ? e.parentNode : e),
    Wn(function () {
      ml(t, s, n, r);
    }),
    s
  );
}
function gl(e, t, n, r, i) {
  var o = n._reactRootContainer;
  if (o) {
    var l = o;
    if (typeof i == "function") {
      var a = i;
      i = function () {
        var s = Xo(l);
        a.call(s);
      };
    }
    ml(t, l, e, i);
  } else l = Wy(n, t, e, i, r);
  return Xo(l);
}
bd = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = Gr(t.pendingLanes);
        n !== 0 &&
          (qs(t, n | 1), Qe(t, ye()), !(Q & 6) && ((_r = ye() + 500), Cn()));
      }
      break;
    case 13:
      Wn(function () {
        var r = Kt(e, 1);
        if (r !== null) {
          var i = Ae();
          Et(r, e, 1, i);
        }
      }),
        ku(e, 1);
  }
};
Ys = function (e) {
  if (e.tag === 13) {
    var t = Kt(e, 134217728);
    if (t !== null) {
      var n = Ae();
      Et(t, e, 134217728, n);
    }
    ku(e, 134217728);
  }
};
Wd = function (e) {
  if (e.tag === 13) {
    var t = yn(e),
      n = Kt(e, t);
    if (n !== null) {
      var r = Ae();
      Et(n, e, t, r);
    }
    ku(e, t);
  }
};
Hd = function () {
  return X;
};
Bd = function (e, t) {
  var n = X;
  try {
    return (X = e), t();
  } finally {
    X = n;
  }
};
Qa = function (e, t, n) {
  switch (t) {
    case "input":
      if ((Aa(e, n), (t = n.name), n.type === "radio" && t != null)) {
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
            var i = sl(r);
            if (!i) throw Error(O(90));
            xd(r), Aa(r, i);
          }
        }
      }
      break;
    case "textarea":
      Rd(e, n);
      break;
    case "select":
      (t = n.value), t != null && dr(e, !!n.multiple, t, !1);
  }
};
Od = Eu;
Md = Wn;
var Hy = { usingClientEntryPoint: !1, Events: [Di, rr, sl, Nd, Td, Eu] },
  Br = {
    findFiberByHostInstance: Ln,
    bundleType: 0,
    version: "18.2.0",
    rendererPackageName: "react-dom",
  },
  By = {
    bundleType: Br.bundleType,
    version: Br.version,
    rendererPackageName: Br.rendererPackageName,
    rendererConfig: Br.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: qt.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return (e = Id(e)), e === null ? null : e.stateNode;
    },
    findFiberByHostInstance: Br.findFiberByHostInstance || by,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.2.0-next-9e3b772b8-20220608",
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var so = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!so.isDisabled && so.supportsFiber)
    try {
      (il = so.inject(By)), (Lt = so);
    } catch {}
}
tt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Hy;
tt.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!Tu(t)) throw Error(O(200));
  return Ay(e, t, null, n);
};
tt.createRoot = function (e, t) {
  if (!Tu(e)) throw Error(O(299));
  var n = !1,
    r = "",
    i = ph;
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (i = t.onRecoverableError)),
    (t = Pu(e, 1, !1, null, null, n, !1, r, i)),
    (e[Vt] = t.current),
    wi(e.nodeType === 8 ? e.parentNode : e),
    new Nu(t)
  );
};
tt.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function"
      ? Error(O(188))
      : ((e = Object.keys(e).join(",")), Error(O(268, e)));
  return (e = Id(t)), (e = e === null ? null : e.stateNode), e;
};
tt.flushSync = function (e) {
  return Wn(e);
};
tt.hydrate = function (e, t, n) {
  if (!yl(t)) throw Error(O(200));
  return gl(null, e, t, !0, n);
};
tt.hydrateRoot = function (e, t, n) {
  if (!Tu(e)) throw Error(O(405));
  var r = (n != null && n.hydratedSources) || null,
    i = !1,
    o = "",
    l = ph;
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (i = !0),
      n.identifierPrefix !== void 0 && (o = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (l = n.onRecoverableError)),
    (t = dh(t, null, e, 1, n ?? null, i, !1, o, l)),
    (e[Vt] = t.current),
    wi(e),
    r)
  )
    for (e = 0; e < r.length; e++)
      (n = r[e]),
        (i = n._getVersion),
        (i = i(n._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [n, i])
          : t.mutableSourceEagerHydrationData.push(n, i);
  return new vl(t);
};
tt.render = function (e, t, n) {
  if (!yl(t)) throw Error(O(200));
  return gl(null, e, t, !1, n);
};
tt.unmountComponentAtNode = function (e) {
  if (!yl(e)) throw Error(O(40));
  return e._reactRootContainer
    ? (Wn(function () {
        gl(null, null, e, !1, function () {
          (e._reactRootContainer = null), (e[Vt] = null);
        });
      }),
      !0)
    : !1;
};
tt.unstable_batchedUpdates = Eu;
tt.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
  if (!yl(n)) throw Error(O(200));
  if (e == null || e._reactInternals === void 0) throw Error(O(38));
  return gl(e, t, n, !1, r);
};
tt.version = "18.2.0-next-9e3b772b8-20220608";
function hh() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(hh);
    } catch (e) {
      console.error(e);
    }
}
hh(), (dd.exports = tt);
var Ou = dd.exports;
const Vy = ed(Ou);
var wf = Ou;
(ja.createRoot = wf.createRoot), (ja.hydrateRoot = wf.hydrateRoot);
var mh = { exports: {} },
  vh = {};
/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Pr = _;
function Ky(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var Qy = typeof Object.is == "function" ? Object.is : Ky,
  qy = Pr.useState,
  Yy = Pr.useEffect,
  Xy = Pr.useLayoutEffect,
  Gy = Pr.useDebugValue;
function Jy(e, t) {
  var n = t(),
    r = qy({ inst: { value: n, getSnapshot: t } }),
    i = r[0].inst,
    o = r[1];
  return (
    Xy(
      function () {
        (i.value = n), (i.getSnapshot = t), ka(i) && o({ inst: i });
      },
      [e, n, t]
    ),
    Yy(
      function () {
        return (
          ka(i) && o({ inst: i }),
          e(function () {
            ka(i) && o({ inst: i });
          })
        );
      },
      [e]
    ),
    Gy(n),
    n
  );
}
function ka(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !Qy(e, n);
  } catch {
    return !0;
  }
}
function Zy(e, t) {
  return t();
}
var eg =
  typeof window > "u" ||
  typeof window.document > "u" ||
  typeof window.document.createElement > "u"
    ? Zy
    : Jy;
vh.useSyncExternalStore =
  Pr.useSyncExternalStore !== void 0 ? Pr.useSyncExternalStore : eg;
mh.exports = vh;
var tg = mh.exports,
  yh = { exports: {} },
  gh = {};
/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Sl = _,
  ng = tg;
function rg(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var ig = typeof Object.is == "function" ? Object.is : rg,
  og = ng.useSyncExternalStore,
  lg = Sl.useRef,
  ag = Sl.useEffect,
  sg = Sl.useMemo,
  ug = Sl.useDebugValue;
gh.useSyncExternalStoreWithSelector = function (e, t, n, r, i) {
  var o = lg(null);
  if (o.current === null) {
    var l = { hasValue: !1, value: null };
    o.current = l;
  } else l = o.current;
  o = sg(
    function () {
      function s(y) {
        if (!u) {
          if (((u = !0), (f = y), (y = r(y)), i !== void 0 && l.hasValue)) {
            var w = l.value;
            if (i(w, y)) return (h = w);
          }
          return (h = y);
        }
        if (((w = h), ig(f, y))) return w;
        var S = r(y);
        return i !== void 0 && i(w, S) ? w : ((f = y), (h = S));
      }
      var u = !1,
        f,
        h,
        v = n === void 0 ? null : n;
      return [
        function () {
          return s(t());
        },
        v === null
          ? void 0
          : function () {
              return s(v());
            },
      ];
    },
    [t, n, r, i]
  );
  var a = og(e, o[0], o[1]);
  return (
    ag(
      function () {
        (l.hasValue = !0), (l.value = a);
      },
      [a]
    ),
    ug(a),
    a
  );
};
yh.exports = gh;
var cg = yh.exports;
function fg(e) {
  e();
}
let Sh = fg;
const dg = (e) => (Sh = e),
  pg = () => Sh,
  xf = Symbol.for("react-redux-context"),
  Ef = typeof globalThis < "u" ? globalThis : {};
function hg() {
  var e;
  if (!_.createContext) return {};
  const t = (e = Ef[xf]) != null ? e : (Ef[xf] = new Map());
  let n = t.get(_.createContext);
  return n || ((n = _.createContext(null)), t.set(_.createContext, n)), n;
}
const xn = hg();
function Mu(e = xn) {
  return function () {
    return _.useContext(e);
  };
}
const wh = Mu(),
  mg = () => {
    throw new Error("uSES not initialized!");
  };
let xh = mg;
const vg = (e) => {
    xh = e;
  },
  yg = (e, t) => e === t;
function gg(e = xn) {
  const t = e === xn ? wh : Mu(e);
  return function (r, i = {}) {
    const {
        equalityFn: o = yg,
        stabilityCheck: l = void 0,
        noopCheck: a = void 0,
      } = typeof i == "function" ? { equalityFn: i } : i,
      {
        store: s,
        subscription: u,
        getServerState: f,
        stabilityCheck: h,
        noopCheck: v,
      } = t();
    _.useRef(!0);
    const y = _.useCallback(
        {
          [r.name](S) {
            return r(S);
          },
        }[r.name],
        [r, h, l]
      ),
      w = xh(u.addNestedSub, s.getState, f || s.getState, y, o);
    return _.useDebugValue(w), w;
  };
}
const Ti = gg();
var Eh = { exports: {} },
  G = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var ke = typeof Symbol == "function" && Symbol.for,
  Lu = ke ? Symbol.for("react.element") : 60103,
  ju = ke ? Symbol.for("react.portal") : 60106,
  wl = ke ? Symbol.for("react.fragment") : 60107,
  xl = ke ? Symbol.for("react.strict_mode") : 60108,
  El = ke ? Symbol.for("react.profiler") : 60114,
  Rl = ke ? Symbol.for("react.provider") : 60109,
  Cl = ke ? Symbol.for("react.context") : 60110,
  Iu = ke ? Symbol.for("react.async_mode") : 60111,
  _l = ke ? Symbol.for("react.concurrent_mode") : 60111,
  Pl = ke ? Symbol.for("react.forward_ref") : 60112,
  kl = ke ? Symbol.for("react.suspense") : 60113,
  Sg = ke ? Symbol.for("react.suspense_list") : 60120,
  Nl = ke ? Symbol.for("react.memo") : 60115,
  Tl = ke ? Symbol.for("react.lazy") : 60116,
  wg = ke ? Symbol.for("react.block") : 60121,
  xg = ke ? Symbol.for("react.fundamental") : 60117,
  Eg = ke ? Symbol.for("react.responder") : 60118,
  Rg = ke ? Symbol.for("react.scope") : 60119;
function rt(e) {
  if (typeof e == "object" && e !== null) {
    var t = e.$$typeof;
    switch (t) {
      case Lu:
        switch (((e = e.type), e)) {
          case Iu:
          case _l:
          case wl:
          case El:
          case xl:
          case kl:
            return e;
          default:
            switch (((e = e && e.$$typeof), e)) {
              case Cl:
              case Pl:
              case Tl:
              case Nl:
              case Rl:
                return e;
              default:
                return t;
            }
        }
      case ju:
        return t;
    }
  }
}
function Rh(e) {
  return rt(e) === _l;
}
G.AsyncMode = Iu;
G.ConcurrentMode = _l;
G.ContextConsumer = Cl;
G.ContextProvider = Rl;
G.Element = Lu;
G.ForwardRef = Pl;
G.Fragment = wl;
G.Lazy = Tl;
G.Memo = Nl;
G.Portal = ju;
G.Profiler = El;
G.StrictMode = xl;
G.Suspense = kl;
G.isAsyncMode = function (e) {
  return Rh(e) || rt(e) === Iu;
};
G.isConcurrentMode = Rh;
G.isContextConsumer = function (e) {
  return rt(e) === Cl;
};
G.isContextProvider = function (e) {
  return rt(e) === Rl;
};
G.isElement = function (e) {
  return typeof e == "object" && e !== null && e.$$typeof === Lu;
};
G.isForwardRef = function (e) {
  return rt(e) === Pl;
};
G.isFragment = function (e) {
  return rt(e) === wl;
};
G.isLazy = function (e) {
  return rt(e) === Tl;
};
G.isMemo = function (e) {
  return rt(e) === Nl;
};
G.isPortal = function (e) {
  return rt(e) === ju;
};
G.isProfiler = function (e) {
  return rt(e) === El;
};
G.isStrictMode = function (e) {
  return rt(e) === xl;
};
G.isSuspense = function (e) {
  return rt(e) === kl;
};
G.isValidElementType = function (e) {
  return (
    typeof e == "string" ||
    typeof e == "function" ||
    e === wl ||
    e === _l ||
    e === El ||
    e === xl ||
    e === kl ||
    e === Sg ||
    (typeof e == "object" &&
      e !== null &&
      (e.$$typeof === Tl ||
        e.$$typeof === Nl ||
        e.$$typeof === Rl ||
        e.$$typeof === Cl ||
        e.$$typeof === Pl ||
        e.$$typeof === xg ||
        e.$$typeof === Eg ||
        e.$$typeof === Rg ||
        e.$$typeof === wg))
  );
};
G.typeOf = rt;
Eh.exports = G;
var Cg = Eh.exports,
  Ch = Cg,
  _g = {
    $$typeof: !0,
    render: !0,
    defaultProps: !0,
    displayName: !0,
    propTypes: !0,
  },
  Pg = {
    $$typeof: !0,
    compare: !0,
    defaultProps: !0,
    displayName: !0,
    propTypes: !0,
    type: !0,
  },
  _h = {};
_h[Ch.ForwardRef] = _g;
_h[Ch.Memo] = Pg;
var ee = {};
/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Du = Symbol.for("react.element"),
  zu = Symbol.for("react.portal"),
  Ol = Symbol.for("react.fragment"),
  Ml = Symbol.for("react.strict_mode"),
  Ll = Symbol.for("react.profiler"),
  jl = Symbol.for("react.provider"),
  Il = Symbol.for("react.context"),
  kg = Symbol.for("react.server_context"),
  Dl = Symbol.for("react.forward_ref"),
  zl = Symbol.for("react.suspense"),
  $l = Symbol.for("react.suspense_list"),
  Fl = Symbol.for("react.memo"),
  Ul = Symbol.for("react.lazy"),
  Ng = Symbol.for("react.offscreen"),
  Ph;
Ph = Symbol.for("react.module.reference");
function dt(e) {
  if (typeof e == "object" && e !== null) {
    var t = e.$$typeof;
    switch (t) {
      case Du:
        switch (((e = e.type), e)) {
          case Ol:
          case Ll:
          case Ml:
          case zl:
          case $l:
            return e;
          default:
            switch (((e = e && e.$$typeof), e)) {
              case kg:
              case Il:
              case Dl:
              case Ul:
              case Fl:
              case jl:
                return e;
              default:
                return t;
            }
        }
      case zu:
        return t;
    }
  }
}
ee.ContextConsumer = Il;
ee.ContextProvider = jl;
ee.Element = Du;
ee.ForwardRef = Dl;
ee.Fragment = Ol;
ee.Lazy = Ul;
ee.Memo = Fl;
ee.Portal = zu;
ee.Profiler = Ll;
ee.StrictMode = Ml;
ee.Suspense = zl;
ee.SuspenseList = $l;
ee.isAsyncMode = function () {
  return !1;
};
ee.isConcurrentMode = function () {
  return !1;
};
ee.isContextConsumer = function (e) {
  return dt(e) === Il;
};
ee.isContextProvider = function (e) {
  return dt(e) === jl;
};
ee.isElement = function (e) {
  return typeof e == "object" && e !== null && e.$$typeof === Du;
};
ee.isForwardRef = function (e) {
  return dt(e) === Dl;
};
ee.isFragment = function (e) {
  return dt(e) === Ol;
};
ee.isLazy = function (e) {
  return dt(e) === Ul;
};
ee.isMemo = function (e) {
  return dt(e) === Fl;
};
ee.isPortal = function (e) {
  return dt(e) === zu;
};
ee.isProfiler = function (e) {
  return dt(e) === Ll;
};
ee.isStrictMode = function (e) {
  return dt(e) === Ml;
};
ee.isSuspense = function (e) {
  return dt(e) === zl;
};
ee.isSuspenseList = function (e) {
  return dt(e) === $l;
};
ee.isValidElementType = function (e) {
  return (
    typeof e == "string" ||
    typeof e == "function" ||
    e === Ol ||
    e === Ll ||
    e === Ml ||
    e === zl ||
    e === $l ||
    e === Ng ||
    (typeof e == "object" &&
      e !== null &&
      (e.$$typeof === Ul ||
        e.$$typeof === Fl ||
        e.$$typeof === jl ||
        e.$$typeof === Il ||
        e.$$typeof === Dl ||
        e.$$typeof === Ph ||
        e.getModuleId !== void 0))
  );
};
ee.typeOf = dt;
function Tg() {
  const e = pg();
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
const Rf = { notify() {}, get: () => [] };
function Og(e, t) {
  let n,
    r = Rf;
  function i(h) {
    return s(), r.subscribe(h);
  }
  function o() {
    r.notify();
  }
  function l() {
    f.onStateChange && f.onStateChange();
  }
  function a() {
    return !!n;
  }
  function s() {
    n || ((n = t ? t.addNestedSub(l) : e.subscribe(l)), (r = Tg()));
  }
  function u() {
    n && (n(), (n = void 0), r.clear(), (r = Rf));
  }
  const f = {
    addNestedSub: i,
    notifyNestedSubs: o,
    handleChangeWrapper: l,
    isSubscribed: a,
    trySubscribe: s,
    tryUnsubscribe: u,
    getListeners: () => r,
  };
  return f;
}
const Mg =
    typeof window < "u" &&
    typeof window.document < "u" &&
    typeof window.document.createElement < "u",
  Lg = Mg ? _.useLayoutEffect : _.useEffect;
function jg({
  store: e,
  context: t,
  children: n,
  serverState: r,
  stabilityCheck: i = "once",
  noopCheck: o = "once",
}) {
  const l = _.useMemo(() => {
      const u = Og(e);
      return {
        store: e,
        subscription: u,
        getServerState: r ? () => r : void 0,
        stabilityCheck: i,
        noopCheck: o,
      };
    }, [e, r, i, o]),
    a = _.useMemo(() => e.getState(), [e]);
  Lg(() => {
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
  const s = t || xn;
  return _.createElement(s.Provider, { value: l }, n);
}
function kh(e = xn) {
  const t = e === xn ? wh : Mu(e);
  return function () {
    const { store: r } = t();
    return r;
  };
}
const Ig = kh();
function Dg(e = xn) {
  const t = e === xn ? Ig : kh(e);
  return function () {
    return t().dispatch;
  };
}
const Kn = Dg();
vg(cg.useSyncExternalStoreWithSelector);
dg(Ou.unstable_batchedUpdates);
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
var we;
(function (e) {
  (e.Pop = "POP"), (e.Push = "PUSH"), (e.Replace = "REPLACE");
})(we || (we = {}));
const Cf = "popstate";
function zg(e) {
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
    return typeof i == "string" ? i : Hn(i);
  }
  return Fg(t, n, null, e);
}
function V(e, t) {
  if (e === !1 || e === null || typeof e > "u") throw new Error(t);
}
function kr(e, t) {
  if (!e) {
    typeof console < "u" && console.warn(t);
    try {
      throw new Error(t);
    } catch {}
  }
}
function $g() {
  return Math.random().toString(36).substr(2, 8);
}
function _f(e, t) {
  return { usr: e.state, key: e.key, idx: t };
}
function Oi(e, t, n, r) {
  return (
    n === void 0 && (n = null),
    ue(
      { pathname: typeof e == "string" ? e : e.pathname, search: "", hash: "" },
      typeof t == "string" ? Yt(t) : t,
      { state: n, key: (t && t.key) || r || $g() }
    )
  );
}
function Hn(e) {
  let { pathname: t = "/", search: n = "", hash: r = "" } = e;
  return (
    n && n !== "?" && (t += n.charAt(0) === "?" ? n : "?" + n),
    r && r !== "#" && (t += r.charAt(0) === "#" ? r : "#" + r),
    t
  );
}
function Yt(e) {
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
function Fg(e, t, n, r) {
  r === void 0 && (r = {});
  let { window: i = document.defaultView, v5Compat: o = !1 } = r,
    l = i.history,
    a = we.Pop,
    s = null,
    u = f();
  u == null && ((u = 0), l.replaceState(ue({}, l.state, { idx: u }), ""));
  function f() {
    return (l.state || { idx: null }).idx;
  }
  function h() {
    a = we.Pop;
    let C = f(),
      p = C == null ? null : C - u;
    (u = C), s && s({ action: a, location: S.location, delta: p });
  }
  function v(C, p) {
    a = we.Push;
    let c = Oi(S.location, C, p);
    n && n(c, C), (u = f() + 1);
    let m = _f(c, u),
      d = S.createHref(c);
    try {
      l.pushState(m, "", d);
    } catch (x) {
      if (x instanceof DOMException && x.name === "DataCloneError") throw x;
      i.location.assign(d);
    }
    o && s && s({ action: a, location: S.location, delta: 1 });
  }
  function y(C, p) {
    a = we.Replace;
    let c = Oi(S.location, C, p);
    n && n(c, C), (u = f());
    let m = _f(c, u),
      d = S.createHref(c);
    l.replaceState(m, "", d),
      o && s && s({ action: a, location: S.location, delta: 0 });
  }
  function w(C) {
    let p = i.location.origin !== "null" ? i.location.origin : i.location.href,
      c = typeof C == "string" ? C : Hn(C);
    return (
      V(
        p,
        "No window.location.(origin|href) available to create URL for href: " +
          c
      ),
      new URL(c, p)
    );
  }
  let S = {
    get action() {
      return a;
    },
    get location() {
      return e(i, l);
    },
    listen(C) {
      if (s) throw new Error("A history only accepts one active listener");
      return (
        i.addEventListener(Cf, h),
        (s = C),
        () => {
          i.removeEventListener(Cf, h), (s = null);
        }
      );
    },
    createHref(C) {
      return t(i, C);
    },
    createURL: w,
    encodeLocation(C) {
      let p = w(C);
      return { pathname: p.pathname, search: p.search, hash: p.hash };
    },
    push: v,
    replace: y,
    go(C) {
      return l.go(C);
    },
  };
  return S;
}
var ve;
(function (e) {
  (e.data = "data"),
    (e.deferred = "deferred"),
    (e.redirect = "redirect"),
    (e.error = "error");
})(ve || (ve = {}));
const Ug = new Set([
  "lazy",
  "caseSensitive",
  "path",
  "id",
  "index",
  "children",
]);
function Ag(e) {
  return e.index === !0;
}
function Ps(e, t, n, r) {
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
        Ag(i))
      ) {
        let s = ue({}, i, t(i), { id: a });
        return (r[a] = s), s;
      } else {
        let s = ue({}, i, t(i), { id: a, children: void 0 });
        return (
          (r[a] = s), i.children && (s.children = Ps(i.children, t, l, r)), s
        );
      }
    })
  );
}
function cr(e, t, n) {
  n === void 0 && (n = "/");
  let r = typeof t == "string" ? Yt(t) : t,
    i = Lr(r.pathname || "/", n);
  if (i == null) return null;
  let o = Nh(e);
  Wg(o);
  let l = null;
  for (let a = 0; l == null && a < o.length; ++a) l = Gg(o[a], e0(i));
  return l;
}
function bg(e, t) {
  let { route: n, pathname: r, params: i } = e;
  return { id: n.id, pathname: r, params: i, data: t[n.id], handle: n.handle };
}
function Nh(e, t, n, r) {
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
    let u = Ht([r, s.relativePath]),
      f = n.concat(s);
    o.children &&
      o.children.length > 0 &&
      (V(
        o.index !== !0,
        "Index routes must not have child routes. Please remove " +
          ('all child routes from route path "' + u + '".')
      ),
      Nh(o.children, t, f, u)),
      !(o.path == null && !o.index) &&
        t.push({ path: u, score: Yg(u, o.index), routesMeta: f });
  };
  return (
    e.forEach((o, l) => {
      var a;
      if (o.path === "" || !((a = o.path) != null && a.includes("?"))) i(o, l);
      else for (let s of Th(o.path)) i(o, l, s);
    }),
    t
  );
}
function Th(e) {
  let t = e.split("/");
  if (t.length === 0) return [];
  let [n, ...r] = t,
    i = n.endsWith("?"),
    o = n.replace(/\?$/, "");
  if (r.length === 0) return i ? [o, ""] : [o];
  let l = Th(r.join("/")),
    a = [];
  return (
    a.push(...l.map((s) => (s === "" ? o : [o, s].join("/")))),
    i && a.push(...l),
    a.map((s) => (e.startsWith("/") && s === "" ? "/" : s))
  );
}
function Wg(e) {
  e.sort((t, n) =>
    t.score !== n.score
      ? n.score - t.score
      : Xg(
          t.routesMeta.map((r) => r.childrenIndex),
          n.routesMeta.map((r) => r.childrenIndex)
        )
  );
}
const Hg = /^:\w+$/,
  Bg = 3,
  Vg = 2,
  Kg = 1,
  Qg = 10,
  qg = -2,
  Pf = (e) => e === "*";
function Yg(e, t) {
  let n = e.split("/"),
    r = n.length;
  return (
    n.some(Pf) && (r += qg),
    t && (r += Vg),
    n
      .filter((i) => !Pf(i))
      .reduce((i, o) => i + (Hg.test(o) ? Bg : o === "" ? Kg : Qg), r)
  );
}
function Xg(e, t) {
  return e.length === t.length && e.slice(0, -1).every((r, i) => r === t[i])
    ? e[e.length - 1] - t[t.length - 1]
    : 0;
}
function Gg(e, t) {
  let { routesMeta: n } = e,
    r = {},
    i = "/",
    o = [];
  for (let l = 0; l < n.length; ++l) {
    let a = n[l],
      s = l === n.length - 1,
      u = i === "/" ? t : t.slice(i.length) || "/",
      f = Jg(
        { path: a.relativePath, caseSensitive: a.caseSensitive, end: s },
        u
      );
    if (!f) return null;
    Object.assign(r, f.params);
    let h = a.route;
    o.push({
      params: r,
      pathname: Ht([i, f.pathname]),
      pathnameBase: i0(Ht([i, f.pathnameBase])),
      route: h,
    }),
      f.pathnameBase !== "/" && (i = Ht([i, f.pathnameBase]));
  }
  return o;
}
function Jg(e, t) {
  typeof e == "string" && (e = { path: e, caseSensitive: !1, end: !0 });
  let [n, r] = Zg(e.path, e.caseSensitive, e.end),
    i = t.match(n);
  if (!i) return null;
  let o = i[0],
    l = o.replace(/(.)\/+$/, "$1"),
    a = i.slice(1);
  return {
    params: r.reduce((u, f, h) => {
      if (f === "*") {
        let v = a[h] || "";
        l = o.slice(0, o.length - v.length).replace(/(.)\/+$/, "$1");
      }
      return (u[f] = t0(a[h] || "", f)), u;
    }, {}),
    pathname: o,
    pathnameBase: l,
    pattern: e,
  };
}
function Zg(e, t, n) {
  t === void 0 && (t = !1),
    n === void 0 && (n = !0),
    kr(
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
function e0(e) {
  try {
    return decodeURI(e);
  } catch (t) {
    return (
      kr(
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
function t0(e, t) {
  try {
    return decodeURIComponent(e);
  } catch (n) {
    return (
      kr(
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
function n0(e, t) {
  t === void 0 && (t = "/");
  let {
    pathname: n,
    search: r = "",
    hash: i = "",
  } = typeof e == "string" ? Yt(e) : e;
  return {
    pathname: n ? (n.startsWith("/") ? n : r0(n, t)) : t,
    search: o0(r),
    hash: l0(i),
  };
}
function r0(e, t) {
  let n = t.replace(/\/+$/, "").split("/");
  return (
    e.split("/").forEach((i) => {
      i === ".." ? n.length > 1 && n.pop() : i !== "." && n.push(i);
    }),
    n.length > 1 ? n.join("/") : "/"
  );
}
function Na(e, t, n, r) {
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
function Al(e) {
  return e.filter(
    (t, n) => n === 0 || (t.route.path && t.route.path.length > 0)
  );
}
function $u(e, t, n, r) {
  r === void 0 && (r = !1);
  let i;
  typeof e == "string"
    ? (i = Yt(e))
    : ((i = ue({}, e)),
      V(
        !i.pathname || !i.pathname.includes("?"),
        Na("?", "pathname", "search", i)
      ),
      V(
        !i.pathname || !i.pathname.includes("#"),
        Na("#", "pathname", "hash", i)
      ),
      V(!i.search || !i.search.includes("#"), Na("#", "search", "hash", i)));
  let o = e === "" || i.pathname === "",
    l = o ? "/" : i.pathname,
    a;
  if (r || l == null) a = n;
  else {
    let h = t.length - 1;
    if (l.startsWith("..")) {
      let v = l.split("/");
      for (; v[0] === ".."; ) v.shift(), (h -= 1);
      i.pathname = v.join("/");
    }
    a = h >= 0 ? t[h] : "/";
  }
  let s = n0(i, a),
    u = l && l !== "/" && l.endsWith("/"),
    f = (o || l === ".") && n.endsWith("/");
  return !s.pathname.endsWith("/") && (u || f) && (s.pathname += "/"), s;
}
const Ht = (e) => e.join("/").replace(/\/\/+/g, "/"),
  i0 = (e) => e.replace(/\/+$/, "").replace(/^\/*/, "/"),
  o0 = (e) => (!e || e === "?" ? "" : e.startsWith("?") ? e : "?" + e),
  l0 = (e) => (!e || e === "#" ? "" : e.startsWith("#") ? e : "#" + e);
class Fu {
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
function Oh(e) {
  return (
    e != null &&
    typeof e.status == "number" &&
    typeof e.statusText == "string" &&
    typeof e.internal == "boolean" &&
    "data" in e
  );
}
const Mh = ["post", "put", "patch", "delete"],
  a0 = new Set(Mh),
  s0 = ["get", ...Mh],
  u0 = new Set(s0),
  c0 = new Set([301, 302, 303, 307, 308]),
  f0 = new Set([307, 308]),
  Ta = {
    state: "idle",
    location: void 0,
    formMethod: void 0,
    formAction: void 0,
    formEncType: void 0,
    formData: void 0,
    json: void 0,
    text: void 0,
  },
  d0 = {
    state: "idle",
    data: void 0,
    formMethod: void 0,
    formAction: void 0,
    formEncType: void 0,
    formData: void 0,
    json: void 0,
    text: void 0,
  },
  Vr = { state: "unblocked", proceed: void 0, reset: void 0, location: void 0 },
  Lh = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
  p0 = (e) => ({ hasErrorBoundary: !!e.hasErrorBoundary });
function h0(e) {
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
    i = (R) => ({ hasErrorBoundary: E(R) });
  } else i = p0;
  let o = {},
    l = Ps(e.routes, i, void 0, o),
    a,
    s = e.basename || "/",
    u = ue({ v7_normalizeFormMethod: !1, v7_prependBasename: !1 }, e.future),
    f = null,
    h = new Set(),
    v = null,
    y = null,
    w = null,
    S = e.hydrationData != null,
    C = cr(l, e.history.location, s),
    p = null;
  if (C == null) {
    let E = ot(404, { pathname: e.history.location.pathname }),
      { matches: R, route: k } = If(l);
    (C = R), (p = { [k.id]: E });
  }
  let c =
      !C.some((E) => E.route.lazy) &&
      (!C.some((E) => E.route.loader) || e.hydrationData != null),
    m,
    d = {
      historyAction: e.history.action,
      location: e.history.location,
      matches: C,
      initialized: c,
      navigation: Ta,
      restoreScrollPosition: e.hydrationData != null ? !1 : null,
      preventScrollReset: !1,
      revalidation: "idle",
      loaderData: (e.hydrationData && e.hydrationData.loaderData) || {},
      actionData: (e.hydrationData && e.hydrationData.actionData) || null,
      errors: (e.hydrationData && e.hydrationData.errors) || p,
      fetchers: new Map(),
      blockers: new Map(),
    },
    x = we.Pop,
    P = !1,
    T,
    N = !1,
    W = !1,
    D = [],
    pe = [],
    J = new Map(),
    it = 0,
    Jt = -1,
    Zt = new Map(),
    qe = new Set(),
    Ct = new Map(),
    M = new Map(),
    z = new Map(),
    A = !1;
  function ae() {
    return (
      (f = e.history.listen((E) => {
        let { action: R, location: k, delta: L } = E;
        if (A) {
          A = !1;
          return;
        }
        kr(
          z.size === 0 || L != null,
          "You are trying to use a blocker on a POP navigation to a location that was not created by @remix-run/router. This will fail silently in production. This can happen if you are navigating outside the router via `window.history.pushState`/`window.location.hash` instead of using router navigation APIs.  This can also happen if you are using createHashRouter and the user manually changes the URL."
        );
        let U = ac({
          currentLocation: d.location,
          nextLocation: k,
          historyAction: R,
        });
        if (U && L != null) {
          (A = !0),
            e.history.go(L * -1),
            Bi(U, {
              state: "blocked",
              location: k,
              proceed() {
                Bi(U, {
                  state: "proceeding",
                  proceed: void 0,
                  reset: void 0,
                  location: k,
                }),
                  e.history.go(L);
              },
              reset() {
                let F = new Map(d.blockers);
                F.set(U, Vr), ne({ blockers: F });
              },
            });
          return;
        }
        return _n(R, k);
      })),
      d.initialized || _n(we.Pop, d.location),
      m
    );
  }
  function ge() {
    f && f(),
      h.clear(),
      T && T.abort(),
      d.fetchers.forEach((E, R) => ql(R)),
      d.blockers.forEach((E, R) => lc(R));
  }
  function qn(E) {
    return h.add(E), () => h.delete(E);
  }
  function ne(E) {
    (d = ue({}, d, E)), h.forEach((R) => R(d));
  }
  function It(E, R) {
    var k, L;
    let U =
        d.actionData != null &&
        d.navigation.formMethod != null &&
        St(d.navigation.formMethod) &&
        d.navigation.state === "loading" &&
        ((k = E.state) == null ? void 0 : k._isRedirect) !== !0,
      F;
    R.actionData
      ? Object.keys(R.actionData).length > 0
        ? (F = R.actionData)
        : (F = null)
      : U
      ? (F = d.actionData)
      : (F = null);
    let b = R.loaderData
        ? jf(d.loaderData, R.loaderData, R.matches || [], R.errors)
        : d.loaderData,
      $ = d.blockers;
    $.size > 0 && (($ = new Map($)), $.forEach((se, Me) => $.set(Me, Vr)));
    let I =
      P === !0 ||
      (d.navigation.formMethod != null &&
        St(d.navigation.formMethod) &&
        ((L = E.state) == null ? void 0 : L._isRedirect) !== !0);
    a && ((l = a), (a = void 0)),
      N ||
        x === we.Pop ||
        (x === we.Push
          ? e.history.push(E, E.state)
          : x === we.Replace && e.history.replace(E, E.state)),
      ne(
        ue({}, R, {
          actionData: F,
          loaderData: b,
          historyAction: x,
          location: E,
          initialized: !0,
          navigation: Ta,
          revalidation: "idle",
          restoreScrollPosition: uc(E, R.matches || d.matches),
          preventScrollReset: I,
          blockers: $,
        })
      ),
      (x = we.Pop),
      (P = !1),
      (N = !1),
      (W = !1),
      (D = []),
      (pe = []);
  }
  async function _t(E, R) {
    if (typeof E == "number") {
      e.history.go(E);
      return;
    }
    let k = ks(
        d.location,
        d.matches,
        s,
        u.v7_prependBasename,
        E,
        R == null ? void 0 : R.fromRouteId,
        R == null ? void 0 : R.relative
      ),
      {
        path: L,
        submission: U,
        error: F,
      } = kf(u.v7_normalizeFormMethod, !1, k, R),
      b = d.location,
      $ = Oi(d.location, L, R && R.state);
    $ = ue({}, $, e.history.encodeLocation($));
    let I = R && R.replace != null ? R.replace : void 0,
      se = we.Push;
    I === !0
      ? (se = we.Replace)
      : I === !1 ||
        (U != null &&
          St(U.formMethod) &&
          U.formAction === d.location.pathname + d.location.search &&
          (se = we.Replace));
    let Me =
        R && "preventScrollReset" in R ? R.preventScrollReset === !0 : void 0,
      q = ac({ currentLocation: b, nextLocation: $, historyAction: se });
    if (q) {
      Bi(q, {
        state: "blocked",
        location: $,
        proceed() {
          Bi(q, {
            state: "proceeding",
            proceed: void 0,
            reset: void 0,
            location: $,
          }),
            _t(E, R);
        },
        reset() {
          let te = new Map(d.blockers);
          te.set(q, Vr), ne({ blockers: te });
        },
      });
      return;
    }
    return await _n(se, $, {
      submission: U,
      pendingError: F,
      preventScrollReset: Me,
      replace: R && R.replace,
    });
  }
  function Yn() {
    if (
      (Ql(),
      ne({ revalidation: "loading" }),
      d.navigation.state !== "submitting")
    ) {
      if (d.navigation.state === "idle") {
        _n(d.historyAction, d.location, { startUninterruptedRevalidation: !0 });
        return;
      }
      _n(x || d.historyAction, d.navigation.location, {
        overrideNavigation: d.navigation,
      });
    }
  }
  async function _n(E, R, k) {
    T && T.abort(),
      (T = null),
      (x = E),
      (N = (k && k.startUninterruptedRevalidation) === !0),
      vm(d.location, d.matches),
      (P = (k && k.preventScrollReset) === !0);
    let L = a || l,
      U = k && k.overrideNavigation,
      F = cr(L, R, s);
    if (!F) {
      let te = ot(404, { pathname: R.pathname }),
        { matches: me, route: Pn } = If(L);
      Yl(), It(R, { matches: me, loaderData: {}, errors: { [Pn.id]: te } });
      return;
    }
    if (
      d.initialized &&
      !W &&
      S0(d.location, R) &&
      !(k && k.submission && St(k.submission.formMethod))
    ) {
      It(R, { matches: F });
      return;
    }
    T = new AbortController();
    let b = Qr(e.history, R, T.signal, k && k.submission),
      $,
      I;
    if (k && k.pendingError) I = { [fr(F).route.id]: k.pendingError };
    else if (k && k.submission && St(k.submission.formMethod)) {
      let te = await um(b, R, k.submission, F, { replace: k.replace });
      if (te.shortCircuited) return;
      ($ = te.pendingActionData),
        (I = te.pendingActionError),
        (U = Oa(R, k.submission)),
        (b = new Request(b.url, { signal: b.signal }));
    }
    let {
      shortCircuited: se,
      loaderData: Me,
      errors: q,
    } = await cm(
      b,
      R,
      F,
      U,
      k && k.submission,
      k && k.fetcherSubmission,
      k && k.replace,
      $,
      I
    );
    se ||
      ((T = null),
      It(
        R,
        ue({ matches: F }, $ ? { actionData: $ } : {}, {
          loaderData: Me,
          errors: q,
        })
      ));
  }
  async function um(E, R, k, L, U) {
    U === void 0 && (U = {}), Ql();
    let F = R0(R, k);
    ne({ navigation: F });
    let b,
      $ = Ts(L, R);
    if (!$.route.action && !$.route.lazy)
      b = {
        type: ve.error,
        error: ot(405, {
          method: E.method,
          pathname: R.pathname,
          routeId: $.route.id,
        }),
      };
    else if (((b = await Kr("action", E, $, L, o, i, s)), E.signal.aborted))
      return { shortCircuited: !0 };
    if (gr(b)) {
      let I;
      return (
        U && U.replace != null
          ? (I = U.replace)
          : (I = b.location === d.location.pathname + d.location.search),
        await Ir(d, b, { submission: k, replace: I }),
        { shortCircuited: !0 }
      );
    }
    if (ui(b)) {
      let I = fr(L, $.route.id);
      return (
        (U && U.replace) !== !0 && (x = we.Push),
        { pendingActionData: {}, pendingActionError: { [I.route.id]: b.error } }
      );
    }
    if (Dn(b)) throw ot(400, { type: "defer-action" });
    return { pendingActionData: { [$.route.id]: b.data } };
  }
  async function cm(E, R, k, L, U, F, b, $, I) {
    let se = L || Oa(R, U),
      Me = U || F || $f(se),
      q = a || l,
      [te, me] = Nf(e.history, d, k, Me, R, W, D, pe, Ct, qe, q, s, $, I);
    if (
      (Yl(
        (Z) =>
          !(k && k.some((pt) => pt.route.id === Z)) ||
          (te && te.some((pt) => pt.route.id === Z))
      ),
      (Jt = ++it),
      te.length === 0 && me.length === 0)
    ) {
      let Z = ic();
      return (
        It(
          R,
          ue(
            { matches: k, loaderData: {}, errors: I || null },
            $ ? { actionData: $ } : {},
            Z ? { fetchers: new Map(d.fetchers) } : {}
          )
        ),
        { shortCircuited: !0 }
      );
    }
    if (!N) {
      me.forEach((pt) => {
        let tn = d.fetchers.get(pt.key),
          ea = qr(void 0, tn ? tn.data : void 0);
        d.fetchers.set(pt.key, ea);
      });
      let Z = $ || d.actionData;
      ne(
        ue(
          { navigation: se },
          Z
            ? Object.keys(Z).length === 0
              ? { actionData: null }
              : { actionData: Z }
            : {},
          me.length > 0 ? { fetchers: new Map(d.fetchers) } : {}
        )
      );
    }
    me.forEach((Z) => {
      J.has(Z.key) && en(Z.key), Z.controller && J.set(Z.key, Z.controller);
    });
    let Pn = () => me.forEach((Z) => en(Z.key));
    T && T.signal.addEventListener("abort", Pn);
    let {
      results: kn,
      loaderResults: Dr,
      fetcherResults: Xl,
    } = await nc(d.matches, k, te, me, E);
    if (E.signal.aborted) return { shortCircuited: !0 };
    T && T.signal.removeEventListener("abort", Pn),
      me.forEach((Z) => J.delete(Z.key));
    let Dt = Df(kn);
    if (Dt) {
      if (Dt.idx >= te.length) {
        let Z = me[Dt.idx - te.length].key;
        qe.add(Z);
      }
      return await Ir(d, Dt.result, { replace: b }), { shortCircuited: !0 };
    }
    let { loaderData: zt, errors: Vi } = Lf(d, k, te, Dr, I, me, Xl, M);
    M.forEach((Z, pt) => {
      Z.subscribe((tn) => {
        (tn || Z.done) && M.delete(pt);
      });
    });
    let Gl = ic(),
      Jl = oc(Jt),
      Zl = Gl || Jl || me.length > 0;
    return ue(
      { loaderData: zt, errors: Vi },
      Zl ? { fetchers: new Map(d.fetchers) } : {}
    );
  }
  function tc(E) {
    return d.fetchers.get(E) || d0;
  }
  function fm(E, R, k, L) {
    if (r)
      throw new Error(
        "router.fetch() was called during the server render, but it shouldn't be. You are likely calling a useFetcher() method in the body of your component. Try moving it to a useEffect or a callback."
      );
    J.has(E) && en(E);
    let U = a || l,
      F = ks(
        d.location,
        d.matches,
        s,
        u.v7_prependBasename,
        k,
        R,
        L == null ? void 0 : L.relative
      ),
      b = cr(U, F, s);
    if (!b) {
      Hi(E, R, ot(404, { pathname: F }));
      return;
    }
    let {
      path: $,
      submission: I,
      error: se,
    } = kf(u.v7_normalizeFormMethod, !0, F, L);
    if (se) {
      Hi(E, R, se);
      return;
    }
    let Me = Ts(b, $);
    if (((P = (L && L.preventScrollReset) === !0), I && St(I.formMethod))) {
      dm(E, R, $, Me, b, I);
      return;
    }
    Ct.set(E, { routeId: R, path: $ }), pm(E, R, $, Me, b, I);
  }
  async function dm(E, R, k, L, U, F) {
    if ((Ql(), Ct.delete(E), !L.route.action && !L.route.lazy)) {
      let Ee = ot(405, { method: F.formMethod, pathname: k, routeId: R });
      Hi(E, R, Ee);
      return;
    }
    let b = d.fetchers.get(E),
      $ = C0(F, b);
    d.fetchers.set(E, $), ne({ fetchers: new Map(d.fetchers) });
    let I = new AbortController(),
      se = Qr(e.history, k, I.signal, F);
    J.set(E, I);
    let Me = it,
      q = await Kr("action", se, L, U, o, i, s);
    if (se.signal.aborted) {
      J.get(E) === I && J.delete(E);
      return;
    }
    if (gr(q))
      if ((J.delete(E), Jt > Me)) {
        let Ee = Gn(void 0);
        d.fetchers.set(E, Ee), ne({ fetchers: new Map(d.fetchers) });
        return;
      } else {
        qe.add(E);
        let Ee = qr(F);
        return (
          d.fetchers.set(E, Ee),
          ne({ fetchers: new Map(d.fetchers) }),
          Ir(d, q, { fetcherSubmission: F })
        );
      }
    if (ui(q)) {
      Hi(E, R, q.error);
      return;
    }
    if (Dn(q)) throw ot(400, { type: "defer-action" });
    let te = d.navigation.location || d.location,
      me = Qr(e.history, te, I.signal),
      Pn = a || l,
      kn =
        d.navigation.state !== "idle"
          ? cr(Pn, d.navigation.location, s)
          : d.matches;
    V(kn, "Didn't find any matches after fetcher action");
    let Dr = ++it;
    Zt.set(E, Dr);
    let Xl = qr(F, q.data);
    d.fetchers.set(E, Xl);
    let [Dt, zt] = Nf(
      e.history,
      d,
      kn,
      F,
      te,
      W,
      D,
      pe,
      Ct,
      qe,
      Pn,
      s,
      { [L.route.id]: q.data },
      void 0
    );
    zt
      .filter((Ee) => Ee.key !== E)
      .forEach((Ee) => {
        let zr = Ee.key,
          cc = d.fetchers.get(zr),
          gm = qr(void 0, cc ? cc.data : void 0);
        d.fetchers.set(zr, gm),
          J.has(zr) && en(zr),
          Ee.controller && J.set(zr, Ee.controller);
      }),
      ne({ fetchers: new Map(d.fetchers) });
    let Vi = () => zt.forEach((Ee) => en(Ee.key));
    I.signal.addEventListener("abort", Vi);
    let {
      results: Gl,
      loaderResults: Jl,
      fetcherResults: Zl,
    } = await nc(d.matches, kn, Dt, zt, me);
    if (I.signal.aborted) return;
    I.signal.removeEventListener("abort", Vi),
      Zt.delete(E),
      J.delete(E),
      zt.forEach((Ee) => J.delete(Ee.key));
    let Z = Df(Gl);
    if (Z) {
      if (Z.idx >= Dt.length) {
        let Ee = zt[Z.idx - Dt.length].key;
        qe.add(Ee);
      }
      return Ir(d, Z.result);
    }
    let { loaderData: pt, errors: tn } = Lf(
      d,
      d.matches,
      Dt,
      Jl,
      void 0,
      zt,
      Zl,
      M
    );
    if (d.fetchers.has(E)) {
      let Ee = Gn(q.data);
      d.fetchers.set(E, Ee);
    }
    let ea = oc(Dr);
    d.navigation.state === "loading" && Dr > Jt
      ? (V(x, "Expected pending action"),
        T && T.abort(),
        It(d.navigation.location, {
          matches: kn,
          loaderData: pt,
          errors: tn,
          fetchers: new Map(d.fetchers),
        }))
      : (ne(
          ue(
            { errors: tn, loaderData: jf(d.loaderData, pt, kn, tn) },
            ea || zt.length > 0 ? { fetchers: new Map(d.fetchers) } : {}
          )
        ),
        (W = !1));
  }
  async function pm(E, R, k, L, U, F) {
    let b = d.fetchers.get(E),
      $ = qr(F, b ? b.data : void 0);
    d.fetchers.set(E, $), ne({ fetchers: new Map(d.fetchers) });
    let I = new AbortController(),
      se = Qr(e.history, k, I.signal);
    J.set(E, I);
    let Me = it,
      q = await Kr("loader", se, L, U, o, i, s);
    if (
      (Dn(q) && (q = (await Dh(q, se.signal, !0)) || q),
      J.get(E) === I && J.delete(E),
      se.signal.aborted)
    )
      return;
    if (gr(q))
      if (Jt > Me) {
        let me = Gn(void 0);
        d.fetchers.set(E, me), ne({ fetchers: new Map(d.fetchers) });
        return;
      } else {
        qe.add(E), await Ir(d, q);
        return;
      }
    if (ui(q)) {
      let me = fr(d.matches, R);
      d.fetchers.delete(E),
        ne({
          fetchers: new Map(d.fetchers),
          errors: { [me.route.id]: q.error },
        });
      return;
    }
    V(!Dn(q), "Unhandled fetcher deferred data");
    let te = Gn(q.data);
    d.fetchers.set(E, te), ne({ fetchers: new Map(d.fetchers) });
  }
  async function Ir(E, R, k) {
    let {
      submission: L,
      fetcherSubmission: U,
      replace: F,
    } = k === void 0 ? {} : k;
    R.revalidate && (W = !0);
    let b = Oi(E.location, R.location, { _isRedirect: !0 });
    if ((V(b, "Expected a location on the redirect navigation"), n)) {
      let te = !1;
      if (R.reloadDocument) te = !0;
      else if (Lh.test(R.location)) {
        const me = e.history.createURL(R.location);
        te = me.origin !== t.location.origin || Lr(me.pathname, s) == null;
      }
      if (te) {
        F ? t.location.replace(R.location) : t.location.assign(R.location);
        return;
      }
    }
    T = null;
    let $ = F === !0 ? we.Replace : we.Push,
      { formMethod: I, formAction: se, formEncType: Me } = E.navigation;
    !L && !U && I && se && Me && (L = $f(E.navigation));
    let q = L || U;
    if (f0.has(R.status) && q && St(q.formMethod))
      await _n($, b, {
        submission: ue({}, q, { formAction: R.location }),
        preventScrollReset: P,
      });
    else {
      let te = Oa(b, L);
      await _n($, b, {
        overrideNavigation: te,
        fetcherSubmission: U,
        preventScrollReset: P,
      });
    }
  }
  async function nc(E, R, k, L, U) {
    let F = await Promise.all([
        ...k.map((I) => Kr("loader", U, I, R, o, i, s)),
        ...L.map((I) =>
          I.matches && I.match && I.controller
            ? Kr(
                "loader",
                Qr(e.history, I.path, I.controller.signal),
                I.match,
                I.matches,
                o,
                i,
                s
              )
            : { type: ve.error, error: ot(404, { pathname: I.path }) }
        ),
      ]),
      b = F.slice(0, k.length),
      $ = F.slice(k.length);
    return (
      await Promise.all([
        zf(
          E,
          k,
          b,
          b.map(() => U.signal),
          !1,
          d.loaderData
        ),
        zf(
          E,
          L.map((I) => I.match),
          $,
          L.map((I) => (I.controller ? I.controller.signal : null)),
          !0
        ),
      ]),
      { results: F, loaderResults: b, fetcherResults: $ }
    );
  }
  function Ql() {
    (W = !0),
      D.push(...Yl()),
      Ct.forEach((E, R) => {
        J.has(R) && (pe.push(R), en(R));
      });
  }
  function Hi(E, R, k) {
    let L = fr(d.matches, R);
    ql(E), ne({ errors: { [L.route.id]: k }, fetchers: new Map(d.fetchers) });
  }
  function ql(E) {
    let R = d.fetchers.get(E);
    J.has(E) && !(R && R.state === "loading" && Zt.has(E)) && en(E),
      Ct.delete(E),
      Zt.delete(E),
      qe.delete(E),
      d.fetchers.delete(E);
  }
  function en(E) {
    let R = J.get(E);
    V(R, "Expected fetch controller: " + E), R.abort(), J.delete(E);
  }
  function rc(E) {
    for (let R of E) {
      let k = tc(R),
        L = Gn(k.data);
      d.fetchers.set(R, L);
    }
  }
  function ic() {
    let E = [],
      R = !1;
    for (let k of qe) {
      let L = d.fetchers.get(k);
      V(L, "Expected fetcher: " + k),
        L.state === "loading" && (qe.delete(k), E.push(k), (R = !0));
    }
    return rc(E), R;
  }
  function oc(E) {
    let R = [];
    for (let [k, L] of Zt)
      if (L < E) {
        let U = d.fetchers.get(k);
        V(U, "Expected fetcher: " + k),
          U.state === "loading" && (en(k), Zt.delete(k), R.push(k));
      }
    return rc(R), R.length > 0;
  }
  function hm(E, R) {
    let k = d.blockers.get(E) || Vr;
    return z.get(E) !== R && z.set(E, R), k;
  }
  function lc(E) {
    d.blockers.delete(E), z.delete(E);
  }
  function Bi(E, R) {
    let k = d.blockers.get(E) || Vr;
    V(
      (k.state === "unblocked" && R.state === "blocked") ||
        (k.state === "blocked" && R.state === "blocked") ||
        (k.state === "blocked" && R.state === "proceeding") ||
        (k.state === "blocked" && R.state === "unblocked") ||
        (k.state === "proceeding" && R.state === "unblocked"),
      "Invalid blocker state transition: " + k.state + " -> " + R.state
    );
    let L = new Map(d.blockers);
    L.set(E, R), ne({ blockers: L });
  }
  function ac(E) {
    let { currentLocation: R, nextLocation: k, historyAction: L } = E;
    if (z.size === 0) return;
    z.size > 1 && kr(!1, "A router only supports one blocker at a time");
    let U = Array.from(z.entries()),
      [F, b] = U[U.length - 1],
      $ = d.blockers.get(F);
    if (
      !($ && $.state === "proceeding") &&
      b({ currentLocation: R, nextLocation: k, historyAction: L })
    )
      return F;
  }
  function Yl(E) {
    let R = [];
    return (
      M.forEach((k, L) => {
        (!E || E(L)) && (k.cancel(), R.push(L), M.delete(L));
      }),
      R
    );
  }
  function mm(E, R, k) {
    if (((v = E), (w = R), (y = k || null), !S && d.navigation === Ta)) {
      S = !0;
      let L = uc(d.location, d.matches);
      L != null && ne({ restoreScrollPosition: L });
    }
    return () => {
      (v = null), (w = null), (y = null);
    };
  }
  function sc(E, R) {
    return (
      (y &&
        y(
          E,
          R.map((L) => bg(L, d.loaderData))
        )) ||
      E.key
    );
  }
  function vm(E, R) {
    if (v && w) {
      let k = sc(E, R);
      v[k] = w();
    }
  }
  function uc(E, R) {
    if (v) {
      let k = sc(E, R),
        L = v[k];
      if (typeof L == "number") return L;
    }
    return null;
  }
  function ym(E) {
    (o = {}), (a = Ps(E, i, void 0, o));
  }
  return (
    (m = {
      get basename() {
        return s;
      },
      get state() {
        return d;
      },
      get routes() {
        return l;
      },
      initialize: ae,
      subscribe: qn,
      enableScrollRestoration: mm,
      navigate: _t,
      fetch: fm,
      revalidate: Yn,
      createHref: (E) => e.history.createHref(E),
      encodeLocation: (E) => e.history.encodeLocation(E),
      getFetcher: tc,
      deleteFetcher: ql,
      dispose: ge,
      getBlocker: hm,
      deleteBlocker: lc,
      _internalFetchControllers: J,
      _internalActiveDeferreds: M,
      _internalSetRoutes: ym,
    }),
    m
  );
}
function m0(e) {
  return (
    e != null &&
    (("formData" in e && e.formData != null) ||
      ("body" in e && e.body !== void 0))
  );
}
function ks(e, t, n, r, i, o, l) {
  let a, s;
  if (o != null && l !== "path") {
    a = [];
    for (let f of t)
      if ((a.push(f), f.route.id === o)) {
        s = f;
        break;
      }
  } else (a = t), (s = t[t.length - 1]);
  let u = $u(
    i || ".",
    Al(a).map((f) => f.pathnameBase),
    Lr(e.pathname, n) || e.pathname,
    l === "path"
  );
  return (
    i == null && ((u.search = e.search), (u.hash = e.hash)),
    (i == null || i === "" || i === ".") &&
      s &&
      s.route.index &&
      !Uu(u.search) &&
      (u.search = u.search ? u.search.replace(/^\?/, "?index&") : "?index"),
    r &&
      n !== "/" &&
      (u.pathname = u.pathname === "/" ? n : Ht([n, u.pathname])),
    Hn(u)
  );
}
function kf(e, t, n, r) {
  if (!r || !m0(r)) return { path: n };
  if (r.formMethod && !E0(r.formMethod))
    return { path: n, error: ot(405, { method: r.formMethod }) };
  let i = () => ({ path: n, error: ot(400, { type: "invalid-body" }) }),
    o = r.formMethod || "get",
    l = e ? o.toUpperCase() : o.toLowerCase(),
    a = Ih(n);
  if (r.body !== void 0) {
    if (r.formEncType === "text/plain") {
      if (!St(l)) return i();
      let v =
        typeof r.body == "string"
          ? r.body
          : r.body instanceof FormData || r.body instanceof URLSearchParams
          ? Array.from(r.body.entries()).reduce((y, w) => {
              let [S, C] = w;
              return (
                "" +
                y +
                S +
                "=" +
                C +
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
          text: v,
        },
      };
    } else if (r.formEncType === "application/json") {
      if (!St(l)) return i();
      try {
        let v = typeof r.body == "string" ? JSON.parse(r.body) : r.body;
        return {
          path: n,
          submission: {
            formMethod: l,
            formAction: a,
            formEncType: r.formEncType,
            formData: void 0,
            json: v,
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
  if (r.formData) (s = Ns(r.formData)), (u = r.formData);
  else if (r.body instanceof FormData) (s = Ns(r.body)), (u = r.body);
  else if (r.body instanceof URLSearchParams) (s = r.body), (u = Mf(s));
  else if (r.body == null) (s = new URLSearchParams()), (u = new FormData());
  else
    try {
      (s = new URLSearchParams(r.body)), (u = Mf(s));
    } catch {
      return i();
    }
  let f = {
    formMethod: l,
    formAction: a,
    formEncType: (r && r.formEncType) || "application/x-www-form-urlencoded",
    formData: u,
    json: void 0,
    text: void 0,
  };
  if (St(f.formMethod)) return { path: n, submission: f };
  let h = Yt(n);
  return (
    t && h.search && Uu(h.search) && s.append("index", ""),
    (h.search = "?" + s),
    { path: Hn(h), submission: f }
  );
}
function v0(e, t) {
  let n = e;
  if (t) {
    let r = e.findIndex((i) => i.route.id === t);
    r >= 0 && (n = e.slice(0, r));
  }
  return n;
}
function Nf(e, t, n, r, i, o, l, a, s, u, f, h, v, y) {
  let w = y ? Object.values(y)[0] : v ? Object.values(v)[0] : void 0,
    S = e.createURL(t.location),
    C = e.createURL(i),
    p = y ? Object.keys(y)[0] : void 0,
    m = v0(n, p).filter((x, P) => {
      if (x.route.lazy) return !0;
      if (x.route.loader == null) return !1;
      if (y0(t.loaderData, t.matches[P], x) || l.some((W) => W === x.route.id))
        return !0;
      let T = t.matches[P],
        N = x;
      return Tf(
        x,
        ue(
          {
            currentUrl: S,
            currentParams: T.params,
            nextUrl: C,
            nextParams: N.params,
          },
          r,
          {
            actionResult: w,
            defaultShouldRevalidate:
              o ||
              S.pathname + S.search === C.pathname + C.search ||
              S.search !== C.search ||
              jh(T, N),
          }
        )
      );
    }),
    d = [];
  return (
    s.forEach((x, P) => {
      if (!n.some((pe) => pe.route.id === x.routeId)) return;
      let T = cr(f, x.path, h);
      if (!T) {
        d.push({
          key: P,
          routeId: x.routeId,
          path: x.path,
          matches: null,
          match: null,
          controller: null,
        });
        return;
      }
      let N = t.fetchers.get(P),
        W = Ts(T, x.path),
        D = !1;
      u.has(P)
        ? (D = !1)
        : a.includes(P)
        ? (D = !0)
        : N && N.state !== "idle" && N.data === void 0
        ? (D = o)
        : (D = Tf(
            W,
            ue(
              {
                currentUrl: S,
                currentParams: t.matches[t.matches.length - 1].params,
                nextUrl: C,
                nextParams: n[n.length - 1].params,
              },
              r,
              { actionResult: w, defaultShouldRevalidate: o }
            )
          )),
        D &&
          d.push({
            key: P,
            routeId: x.routeId,
            path: x.path,
            matches: T,
            match: W,
            controller: new AbortController(),
          });
    }),
    [m, d]
  );
}
function y0(e, t, n) {
  let r = !t || n.route.id !== t.route.id,
    i = e[n.route.id] === void 0;
  return r || i;
}
function jh(e, t) {
  let n = e.route.path;
  return (
    e.pathname !== t.pathname ||
    (n != null && n.endsWith("*") && e.params["*"] !== t.params["*"])
  );
}
function Tf(e, t) {
  if (e.route.shouldRevalidate) {
    let n = e.route.shouldRevalidate(t);
    if (typeof n == "boolean") return n;
  }
  return t.defaultShouldRevalidate;
}
async function Of(e, t, n) {
  if (!e.lazy) return;
  let r = await e.lazy();
  if (!e.lazy) return;
  let i = n[e.id];
  V(i, "No route found in manifest");
  let o = {};
  for (let l in r) {
    let s = i[l] !== void 0 && l !== "hasErrorBoundary";
    kr(
      !s,
      'Route "' +
        i.id +
        '" has a static property "' +
        l +
        '" defined but its lazy function is also returning a value for this property. ' +
        ('The lazy route property "' + l + '" will be ignored.')
    ),
      !s && !Ug.has(l) && (o[l] = r[l]);
  }
  Object.assign(i, o), Object.assign(i, ue({}, t(i), { lazy: void 0 }));
}
async function Kr(e, t, n, r, i, o, l, a) {
  a === void 0 && (a = {});
  let s,
    u,
    f,
    h = (w) => {
      let S,
        C = new Promise((p, c) => (S = c));
      return (
        (f = () => S()),
        t.signal.addEventListener("abort", f),
        Promise.race([
          w({ request: t, params: n.params, context: a.requestContext }),
          C,
        ])
      );
    };
  try {
    let w = n.route[e];
    if (n.route.lazy)
      if (w) {
        let S,
          C = await Promise.all([
            h(w).catch((p) => {
              S = p;
            }),
            Of(n.route, o, i),
          ]);
        if (S) throw S;
        u = C[0];
      } else if ((await Of(n.route, o, i), (w = n.route[e]), w)) u = await h(w);
      else if (e === "action") {
        let S = new URL(t.url),
          C = S.pathname + S.search;
        throw ot(405, { method: t.method, pathname: C, routeId: n.route.id });
      } else return { type: ve.data, data: void 0 };
    else if (w) u = await h(w);
    else {
      let S = new URL(t.url),
        C = S.pathname + S.search;
      throw ot(404, { pathname: C });
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
    f && t.signal.removeEventListener("abort", f);
  }
  if (x0(u)) {
    let w = u.status;
    if (c0.has(w)) {
      let p = u.headers.get("Location");
      if (
        (V(
          p,
          "Redirects returned/thrown from loaders/actions must have a Location header"
        ),
        !Lh.test(p))
      )
        p = ks(new URL(t.url), r.slice(0, r.indexOf(n) + 1), l, !0, p);
      else if (!a.isStaticRequest) {
        let c = new URL(t.url),
          m = p.startsWith("//") ? new URL(c.protocol + p) : new URL(p),
          d = Lr(m.pathname, l) != null;
        m.origin === c.origin && d && (p = m.pathname + m.search + m.hash);
      }
      if (a.isStaticRequest) throw (u.headers.set("Location", p), u);
      return {
        type: ve.redirect,
        status: w,
        location: p,
        revalidate: u.headers.get("X-Remix-Revalidate") !== null,
        reloadDocument: u.headers.get("X-Remix-Reload-Document") !== null,
      };
    }
    if (a.isRouteRequest)
      throw { type: s === ve.error ? ve.error : ve.data, response: u };
    let S,
      C = u.headers.get("Content-Type");
    return (
      C && /\bapplication\/json\b/.test(C)
        ? (S = await u.json())
        : (S = await u.text()),
      s === ve.error
        ? { type: s, error: new Fu(w, u.statusText, S), headers: u.headers }
        : { type: ve.data, data: S, statusCode: u.status, headers: u.headers }
    );
  }
  if (s === ve.error) return { type: s, error: u };
  if (w0(u)) {
    var v, y;
    return {
      type: ve.deferred,
      deferredData: u,
      statusCode: (v = u.init) == null ? void 0 : v.status,
      headers:
        ((y = u.init) == null ? void 0 : y.headers) &&
        new Headers(u.init.headers),
    };
  }
  return { type: ve.data, data: u };
}
function Qr(e, t, n, r) {
  let i = e.createURL(Ih(t)).toString(),
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
        ? (o.body = Ns(r.formData))
        : (o.body = r.formData);
  }
  return new Request(i, o);
}
function Ns(e) {
  let t = new URLSearchParams();
  for (let [n, r] of e.entries())
    t.append(n, typeof r == "string" ? r : r.name);
  return t;
}
function Mf(e) {
  let t = new FormData();
  for (let [n, r] of e.entries()) t.append(n, r);
  return t;
}
function g0(e, t, n, r, i) {
  let o = {},
    l = null,
    a,
    s = !1,
    u = {};
  return (
    n.forEach((f, h) => {
      let v = t[h].route.id;
      if (
        (V(!gr(f), "Cannot handle redirect results in processLoaderData"),
        ui(f))
      ) {
        let y = fr(e, v),
          w = f.error;
        r && ((w = Object.values(r)[0]), (r = void 0)),
          (l = l || {}),
          l[y.route.id] == null && (l[y.route.id] = w),
          (o[v] = void 0),
          s || ((s = !0), (a = Oh(f.error) ? f.error.status : 500)),
          f.headers && (u[v] = f.headers);
      } else
        Dn(f)
          ? (i.set(v, f.deferredData), (o[v] = f.deferredData.data))
          : (o[v] = f.data),
          f.statusCode != null &&
            f.statusCode !== 200 &&
            !s &&
            (a = f.statusCode),
          f.headers && (u[v] = f.headers);
    }),
    r && ((l = r), (o[Object.keys(r)[0]] = void 0)),
    { loaderData: o, errors: l, statusCode: a || 200, loaderHeaders: u }
  );
}
function Lf(e, t, n, r, i, o, l, a) {
  let { loaderData: s, errors: u } = g0(t, n, r, i, a);
  for (let f = 0; f < o.length; f++) {
    let { key: h, match: v, controller: y } = o[f];
    V(
      l !== void 0 && l[f] !== void 0,
      "Did not find corresponding fetcher result"
    );
    let w = l[f];
    if (!(y && y.signal.aborted))
      if (ui(w)) {
        let S = fr(e.matches, v == null ? void 0 : v.route.id);
        (u && u[S.route.id]) || (u = ue({}, u, { [S.route.id]: w.error })),
          e.fetchers.delete(h);
      } else if (gr(w)) V(!1, "Unhandled fetcher revalidation redirect");
      else if (Dn(w)) V(!1, "Unhandled fetcher deferred data");
      else {
        let S = Gn(w.data);
        e.fetchers.set(h, S);
      }
  }
  return { loaderData: s, errors: u };
}
function jf(e, t, n, r) {
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
function fr(e, t) {
  return (
    (t ? e.slice(0, e.findIndex((r) => r.route.id === t) + 1) : [...e])
      .reverse()
      .find((r) => r.route.hasErrorBoundary === !0) || e[0]
  );
}
function If(e) {
  let t = e.find((n) => n.index || !n.path || n.path === "/") || {
    id: "__shim-error-route__",
  };
  return {
    matches: [{ params: {}, pathname: "", pathnameBase: "", route: t }],
    route: t,
  };
}
function ot(e, t) {
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
    new Fu(e || 500, l, new Error(a), !0)
  );
}
function Df(e) {
  for (let t = e.length - 1; t >= 0; t--) {
    let n = e[t];
    if (gr(n)) return { result: n, idx: t };
  }
}
function Ih(e) {
  let t = typeof e == "string" ? Yt(e) : e;
  return Hn(ue({}, t, { hash: "" }));
}
function S0(e, t) {
  return e.pathname !== t.pathname || e.search !== t.search
    ? !1
    : e.hash === ""
    ? t.hash !== ""
    : e.hash === t.hash
    ? !0
    : t.hash !== "";
}
function Dn(e) {
  return e.type === ve.deferred;
}
function ui(e) {
  return e.type === ve.error;
}
function gr(e) {
  return (e && e.type) === ve.redirect;
}
function w0(e) {
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
function x0(e) {
  return (
    e != null &&
    typeof e.status == "number" &&
    typeof e.statusText == "string" &&
    typeof e.headers == "object" &&
    typeof e.body < "u"
  );
}
function E0(e) {
  return u0.has(e.toLowerCase());
}
function St(e) {
  return a0.has(e.toLowerCase());
}
async function zf(e, t, n, r, i, o) {
  for (let l = 0; l < n.length; l++) {
    let a = n[l],
      s = t[l];
    if (!s) continue;
    let u = e.find((h) => h.route.id === s.route.id),
      f = u != null && !jh(u, s) && (o && o[s.route.id]) !== void 0;
    if (Dn(a) && (i || f)) {
      let h = r[l];
      V(h, "Expected an AbortSignal for revalidating fetcher deferred result"),
        await Dh(a, h, i).then((v) => {
          v && (n[l] = v || n[l]);
        });
    }
  }
}
async function Dh(e, t, n) {
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
function Uu(e) {
  return new URLSearchParams(e).getAll("index").some((t) => t === "");
}
function Ts(e, t) {
  let n = typeof t == "string" ? Yt(t).search : t.search;
  if (e[e.length - 1].route.index && Uu(n || "")) return e[e.length - 1];
  let r = Al(e);
  return r[r.length - 1];
}
function $f(e) {
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
function Oa(e, t) {
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
function R0(e, t) {
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
function qr(e, t) {
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
function C0(e, t) {
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
function Gn(e) {
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
 */ function Go() {
  return (
    (Go = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    Go.apply(this, arguments)
  );
}
const bl = _.createContext(null),
  Au = _.createContext(null),
  Qn = _.createContext(null),
  Wl = _.createContext(null),
  Xt = _.createContext({ outlet: null, matches: [], isDataRoute: !1 }),
  zh = _.createContext(null);
function _0(e, t) {
  let { relative: n } = t === void 0 ? {} : t;
  $i() || V(!1);
  let { basename: r, navigator: i } = _.useContext(Qn),
    { hash: o, pathname: l, search: a } = Wu(e, { relative: n }),
    s = l;
  return (
    r !== "/" && (s = l === "/" ? r : Ht([r, l])),
    i.createHref({ pathname: s, search: a, hash: o })
  );
}
function $i() {
  return _.useContext(Wl) != null;
}
function Fi() {
  return $i() || V(!1), _.useContext(Wl).location;
}
function $h(e) {
  _.useContext(Qn).static || _.useLayoutEffect(e);
}
function bu() {
  let { isDataRoute: e } = _.useContext(Xt);
  return e ? A0() : P0();
}
function P0() {
  $i() || V(!1);
  let e = _.useContext(bl),
    { basename: t, navigator: n } = _.useContext(Qn),
    { matches: r } = _.useContext(Xt),
    { pathname: i } = Fi(),
    o = JSON.stringify(Al(r).map((s) => s.pathnameBase)),
    l = _.useRef(!1);
  return (
    $h(() => {
      l.current = !0;
    }),
    _.useCallback(
      function (s, u) {
        if ((u === void 0 && (u = {}), !l.current)) return;
        if (typeof s == "number") {
          n.go(s);
          return;
        }
        let f = $u(s, JSON.parse(o), i, u.relative === "path");
        e == null &&
          t !== "/" &&
          (f.pathname = f.pathname === "/" ? t : Ht([t, f.pathname])),
          (u.replace ? n.replace : n.push)(f, u.state, u);
      },
      [t, n, o, i, e]
    )
  );
}
const k0 = _.createContext(null);
function N0(e) {
  let t = _.useContext(Xt).outlet;
  return t && _.createElement(k0.Provider, { value: e }, t);
}
function T0() {
  let { matches: e } = _.useContext(Xt),
    t = e[e.length - 1];
  return t ? t.params : {};
}
function Wu(e, t) {
  let { relative: n } = t === void 0 ? {} : t,
    { matches: r } = _.useContext(Xt),
    { pathname: i } = Fi(),
    o = JSON.stringify(Al(r).map((l) => l.pathnameBase));
  return _.useMemo(() => $u(e, JSON.parse(o), i, n === "path"), [e, o, i, n]);
}
function O0(e, t, n) {
  $i() || V(!1);
  let { navigator: r } = _.useContext(Qn),
    { matches: i } = _.useContext(Xt),
    o = i[i.length - 1],
    l = o ? o.params : {};
  o && o.pathname;
  let a = o ? o.pathnameBase : "/";
  o && o.route;
  let s = Fi(),
    u;
  if (t) {
    var f;
    let S = typeof t == "string" ? Yt(t) : t;
    a === "/" || ((f = S.pathname) != null && f.startsWith(a)) || V(!1),
      (u = S);
  } else u = s;
  let h = u.pathname || "/",
    v = a === "/" ? h : h.slice(a.length) || "/",
    y = cr(e, { pathname: v }),
    w = D0(
      y &&
        y.map((S) =>
          Object.assign({}, S, {
            params: Object.assign({}, l, S.params),
            pathname: Ht([
              a,
              r.encodeLocation
                ? r.encodeLocation(S.pathname).pathname
                : S.pathname,
            ]),
            pathnameBase:
              S.pathnameBase === "/"
                ? a
                : Ht([
                    a,
                    r.encodeLocation
                      ? r.encodeLocation(S.pathnameBase).pathname
                      : S.pathnameBase,
                  ]),
          })
        ),
      i,
      n
    );
  return t && w
    ? _.createElement(
        Wl.Provider,
        {
          value: {
            location: Go(
              {
                pathname: "/",
                search: "",
                hash: "",
                state: null,
                key: "default",
              },
              u
            ),
            navigationType: we.Pop,
          },
        },
        w
      )
    : w;
}
function M0() {
  let e = U0(),
    t = Oh(e)
      ? e.status + " " + e.statusText
      : e instanceof Error
      ? e.message
      : JSON.stringify(e),
    n = e instanceof Error ? e.stack : null,
    i = { padding: "0.5rem", backgroundColor: "rgba(200,200,200, 0.5)" },
    o = null;
  return _.createElement(
    _.Fragment,
    null,
    _.createElement("h2", null, "Unexpected Application Error!"),
    _.createElement("h3", { style: { fontStyle: "italic" } }, t),
    n ? _.createElement("pre", { style: i }, n) : null,
    o
  );
}
const L0 = _.createElement(M0, null);
class j0 extends _.Component {
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
      ? _.createElement(
          Xt.Provider,
          { value: this.props.routeContext },
          _.createElement(zh.Provider, {
            value: this.state.error,
            children: this.props.component,
          })
        )
      : this.props.children;
  }
}
function I0(e) {
  let { routeContext: t, match: n, children: r } = e,
    i = _.useContext(bl);
  return (
    i &&
      i.static &&
      i.staticContext &&
      (n.route.errorElement || n.route.ErrorBoundary) &&
      (i.staticContext._deepestRenderedBoundaryId = n.route.id),
    _.createElement(Xt.Provider, { value: t }, r)
  );
}
function D0(e, t, n) {
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
    let f = s.route.id ? (l == null ? void 0 : l[s.route.id]) : null,
      h = null;
    n && (h = s.route.errorElement || L0);
    let v = t.concat(o.slice(0, u + 1)),
      y = () => {
        let w;
        return (
          f
            ? (w = h)
            : s.route.Component
            ? (w = _.createElement(s.route.Component, null))
            : s.route.element
            ? (w = s.route.element)
            : (w = a),
          _.createElement(I0, {
            match: s,
            routeContext: { outlet: a, matches: v, isDataRoute: n != null },
            children: w,
          })
        );
      };
    return n && (s.route.ErrorBoundary || s.route.errorElement || u === 0)
      ? _.createElement(j0, {
          location: n.location,
          revalidation: n.revalidation,
          component: h,
          error: f,
          children: y(),
          routeContext: { outlet: null, matches: v, isDataRoute: !0 },
        })
      : y();
  }, null);
}
var Fh = (function (e) {
    return (
      (e.UseBlocker = "useBlocker"),
      (e.UseRevalidator = "useRevalidator"),
      (e.UseNavigateStable = "useNavigate"),
      e
    );
  })(Fh || {}),
  Jo = (function (e) {
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
  })(Jo || {});
function z0(e) {
  let t = _.useContext(bl);
  return t || V(!1), t;
}
function $0(e) {
  let t = _.useContext(Au);
  return t || V(!1), t;
}
function F0(e) {
  let t = _.useContext(Xt);
  return t || V(!1), t;
}
function Uh(e) {
  let t = F0(),
    n = t.matches[t.matches.length - 1];
  return n.route.id || V(!1), n.route.id;
}
function U0() {
  var e;
  let t = _.useContext(zh),
    n = $0(Jo.UseRouteError),
    r = Uh(Jo.UseRouteError);
  return t || ((e = n.errors) == null ? void 0 : e[r]);
}
function A0() {
  let { router: e } = z0(Fh.UseNavigateStable),
    t = Uh(Jo.UseNavigateStable),
    n = _.useRef(!1);
  return (
    $h(() => {
      n.current = !0;
    }),
    _.useCallback(
      function (i, o) {
        o === void 0 && (o = {}),
          n.current &&
            (typeof i == "number"
              ? e.navigate(i)
              : e.navigate(i, Go({ fromRouteId: t }, o)));
      },
      [e, t]
    )
  );
}
const b0 = "startTransition",
  Ff = Dm[b0];
function W0(e) {
  let { fallbackElement: t, router: n, future: r } = e,
    [i, o] = _.useState(n.state),
    { v7_startTransition: l } = r || {},
    a = _.useCallback(
      (h) => {
        l && Ff ? Ff(() => o(h)) : o(h);
      },
      [o, l]
    );
  _.useLayoutEffect(() => n.subscribe(a), [n, a]);
  let s = _.useMemo(
      () => ({
        createHref: n.createHref,
        encodeLocation: n.encodeLocation,
        go: (h) => n.navigate(h),
        push: (h, v, y) =>
          n.navigate(h, {
            state: v,
            preventScrollReset: y == null ? void 0 : y.preventScrollReset,
          }),
        replace: (h, v, y) =>
          n.navigate(h, {
            replace: !0,
            state: v,
            preventScrollReset: y == null ? void 0 : y.preventScrollReset,
          }),
      }),
      [n]
    ),
    u = n.basename || "/",
    f = _.useMemo(
      () => ({ router: n, navigator: s, static: !1, basename: u }),
      [n, s, u]
    );
  return _.createElement(
    _.Fragment,
    null,
    _.createElement(
      bl.Provider,
      { value: f },
      _.createElement(
        Au.Provider,
        { value: i },
        _.createElement(
          V0,
          {
            basename: u,
            location: i.location,
            navigationType: i.historyAction,
            navigator: s,
          },
          i.initialized
            ? _.createElement(H0, { routes: n.routes, state: i })
            : t
        )
      )
    ),
    null
  );
}
function H0(e) {
  let { routes: t, state: n } = e;
  return O0(t, void 0, n);
}
function B0(e) {
  return N0(e.context);
}
function V0(e) {
  let {
    basename: t = "/",
    children: n = null,
    location: r,
    navigationType: i = we.Pop,
    navigator: o,
    static: l = !1,
  } = e;
  $i() && V(!1);
  let a = t.replace(/^\/*/, "/"),
    s = _.useMemo(() => ({ basename: a, navigator: o, static: l }), [a, o, l]);
  typeof r == "string" && (r = Yt(r));
  let {
      pathname: u = "/",
      search: f = "",
      hash: h = "",
      state: v = null,
      key: y = "default",
    } = r,
    w = _.useMemo(() => {
      let S = Lr(u, a);
      return S == null
        ? null
        : {
            location: { pathname: S, search: f, hash: h, state: v, key: y },
            navigationType: i,
          };
    }, [a, u, f, h, v, y, i]);
  return w == null
    ? null
    : _.createElement(
        Qn.Provider,
        { value: s },
        _.createElement(Wl.Provider, { children: n, value: w })
      );
}
new Promise(() => {});
function K0(e) {
  let t = {
    hasErrorBoundary: e.ErrorBoundary != null || e.errorElement != null,
  };
  return (
    e.Component &&
      Object.assign(t, {
        element: _.createElement(e.Component),
        Component: void 0,
      }),
    e.ErrorBoundary &&
      Object.assign(t, {
        errorElement: _.createElement(e.ErrorBoundary),
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
 */ function Nr() {
  return (
    (Nr = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    Nr.apply(this, arguments)
  );
}
function Ah(e, t) {
  if (e == null) return {};
  var n = {},
    r = Object.keys(e),
    i,
    o;
  for (o = 0; o < r.length; o++)
    (i = r[o]), !(t.indexOf(i) >= 0) && (n[i] = e[i]);
  return n;
}
function Q0(e) {
  return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey);
}
function q0(e, t) {
  return e.button === 0 && (!t || t === "_self") && !Q0(e);
}
const Y0 = [
    "onClick",
    "relative",
    "reloadDocument",
    "replace",
    "state",
    "target",
    "to",
    "preventScrollReset",
  ],
  X0 = [
    "aria-current",
    "caseSensitive",
    "className",
    "end",
    "style",
    "to",
    "children",
  ];
function G0(e, t) {
  return h0({
    basename: t == null ? void 0 : t.basename,
    future: Nr({}, t == null ? void 0 : t.future, { v7_prependBasename: !0 }),
    history: zg({ window: t == null ? void 0 : t.window }),
    hydrationData: (t == null ? void 0 : t.hydrationData) || J0(),
    routes: e,
    mapRouteProperties: K0,
  }).initialize();
}
function J0() {
  var e;
  let t = (e = window) == null ? void 0 : e.__staticRouterHydrationData;
  return t && t.errors && (t = Nr({}, t, { errors: Z0(t.errors) })), t;
}
function Z0(e) {
  if (!e) return null;
  let t = Object.entries(e),
    n = {};
  for (let [r, i] of t)
    if (i && i.__type === "RouteErrorResponse")
      n[r] = new Fu(i.status, i.statusText, i.data, i.internal === !0);
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
const eS =
    typeof window < "u" &&
    typeof window.document < "u" &&
    typeof window.document.createElement < "u",
  tS = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
  nS = _.forwardRef(function (t, n) {
    let {
        onClick: r,
        relative: i,
        reloadDocument: o,
        replace: l,
        state: a,
        target: s,
        to: u,
        preventScrollReset: f,
      } = t,
      h = Ah(t, Y0),
      { basename: v } = _.useContext(Qn),
      y,
      w = !1;
    if (typeof u == "string" && tS.test(u) && ((y = u), eS))
      try {
        let c = new URL(window.location.href),
          m = u.startsWith("//") ? new URL(c.protocol + u) : new URL(u),
          d = Lr(m.pathname, v);
        m.origin === c.origin && d != null
          ? (u = d + m.search + m.hash)
          : (w = !0);
      } catch {}
    let S = _0(u, { relative: i }),
      C = rS(u, {
        replace: l,
        state: a,
        target: s,
        preventScrollReset: f,
        relative: i,
      });
    function p(c) {
      r && r(c), c.defaultPrevented || C(c);
    }
    return _.createElement(
      "a",
      Nr({}, h, { href: y || S, onClick: w || o ? r : p, ref: n, target: s })
    );
  }),
  Os = _.forwardRef(function (t, n) {
    let {
        "aria-current": r = "page",
        caseSensitive: i = !1,
        className: o = "",
        end: l = !1,
        style: a,
        to: s,
        children: u,
      } = t,
      f = Ah(t, X0),
      h = Wu(s, { relative: f.relative }),
      v = Fi(),
      y = _.useContext(Au),
      { navigator: w } = _.useContext(Qn),
      S = w.encodeLocation ? w.encodeLocation(h).pathname : h.pathname,
      C = v.pathname,
      p =
        y && y.navigation && y.navigation.location
          ? y.navigation.location.pathname
          : null;
    i ||
      ((C = C.toLowerCase()),
      (p = p ? p.toLowerCase() : null),
      (S = S.toLowerCase()));
    let c = C === S || (!l && C.startsWith(S) && C.charAt(S.length) === "/"),
      m =
        p != null &&
        (p === S || (!l && p.startsWith(S) && p.charAt(S.length) === "/")),
      d = c ? r : void 0,
      x;
    typeof o == "function"
      ? (x = o({ isActive: c, isPending: m }))
      : (x = [o, c ? "active" : null, m ? "pending" : null]
          .filter(Boolean)
          .join(" "));
    let P = typeof a == "function" ? a({ isActive: c, isPending: m }) : a;
    return _.createElement(
      nS,
      Nr({}, f, { "aria-current": d, className: x, ref: n, style: P, to: s }),
      typeof u == "function" ? u({ isActive: c, isPending: m }) : u
    );
  });
var Uf;
(function (e) {
  (e.UseScrollRestoration = "useScrollRestoration"),
    (e.UseSubmit = "useSubmit"),
    (e.UseSubmitFetcher = "useSubmitFetcher"),
    (e.UseFetcher = "useFetcher");
})(Uf || (Uf = {}));
var Af;
(function (e) {
  (e.UseFetchers = "useFetchers"),
    (e.UseScrollRestoration = "useScrollRestoration");
})(Af || (Af = {}));
function rS(e, t) {
  let {
      target: n,
      replace: r,
      state: i,
      preventScrollReset: o,
      relative: l,
    } = t === void 0 ? {} : t,
    a = bu(),
    s = Fi(),
    u = Wu(e, { relative: l });
  return _.useCallback(
    (f) => {
      if (q0(f, n)) {
        f.preventDefault();
        let h = r !== void 0 ? r : Hn(s) === Hn(u);
        a(e, { replace: h, state: i, preventScrollReset: o, relative: l });
      }
    },
    [s, a, u, r, i, n, e, o, l]
  );
}
/*! js-cookie v3.0.5 | MIT */ function uo(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t];
    for (var r in n) e[r] = n[r];
  }
  return e;
}
var iS = {
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
function Ms(e, t) {
  function n(i, o, l) {
    if (!(typeof document > "u")) {
      (l = uo({}, t, l)),
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
          var f = decodeURIComponent(s[0]);
          if (((l[f] = e.read(u, f)), i === f)) break;
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
        n(i, "", uo({}, o, { expires: -1 }));
      },
      withAttributes: function (i) {
        return Ms(this.converter, uo({}, this.attributes, i));
      },
      withConverter: function (i) {
        return Ms(uo({}, this.converter, i), this.attributes);
      },
    },
    {
      attributes: { value: Object.freeze(t) },
      converter: { value: Object.freeze(e) },
    }
  );
}
var oS = Ms(iS, { path: "/" });
async function Gt(e, t = {}) {
  (t.method = t.method || "GET"),
    (t.headers = t.headers || {}),
    t.method.toUpperCase() !== "GET" &&
      (t.headers["XSRF-Token"] = oS.get("XSRF-TOKEN"));
  const n = await window.fetch(e, t);
  if (n.status >= 400) throw n;
  return n;
}
const bh = "session/setUser",
  Wh = "session/removeUser",
  Hu = (e) => ({ type: bh, payload: e }),
  lS = () => ({ type: Wh }),
  aS = (e) => async (t) => {
    const { credential: n, password: r } = e,
      i = await Gt("/api/session", {
        method: "POST",
        body: JSON.stringify({ credential: n, password: r }),
      }),
      o = await i.json();
    return t(Hu(o.user)), i;
  },
  sS = () => async (e) => {
    const t = await Gt("/api/session"),
      n = await t.json();
    return e(Hu(n.user)), t;
  },
  uS = (e) => async (t) => {
    const { username: n, firstName: r, lastName: i, email: o, password: l } = e,
      a = await Gt("/api/users", {
        method: "POST",
        body: JSON.stringify({
          username: n,
          firstName: r,
          lastName: i,
          email: o,
          password: l,
        }),
      }),
      s = await a.json();
    return t(Hu(s.user)), a;
  },
  cS = () => async (e) => {
    const t = await Gt("/api/session", { method: "DELETE" });
    return e(lS()), t;
  },
  fS = { user: null },
  dS = (e = fS, t) => {
    switch (t.type) {
      case bh:
        return { ...e, user: t.payload };
      case Wh:
        return { ...e, user: null };
      default:
        return e;
    }
  };
function pS({ user: e }) {
  const t = Kn(),
    [n, r] = _.useState(!1),
    i = _.useRef(),
    o = bu(),
    l = (f) => {
      f.stopPropagation(), r(!n);
    };
  _.useEffect(() => {
    if (!n) return;
    const f = (h) => {
      i.current.contains(h.target) || r(!1);
    };
    return (
      document.addEventListener("click", f),
      () => document.removeEventListener("click", f)
    );
  }, [n]);
  const a = () => r(!1),
    s = (f) => {
      f.preventDefault(),
        t(cS()).then(() => {
          a(), o("/");
        });
    },
    u = "profile-dropdown" + (n ? "" : " hidden");
  return g.jsxs(g.Fragment, {
    children: [
      g.jsx("button", {
        className: "profile-button",
        onClick: l,
        children: g.jsx("i", {
          className: "fa-solid fa-cookie-bite fa-2xl",
          style: { color: "lightcoral" },
        }),
      }),
      g.jsxs("div", {
        className: u,
        ref: i,
        children: [
          g.jsxs("div", { children: ["Hello, ", e.username] }),
          g.jsx("div", { children: e.email }),
          g.jsx("button", {
            className: "logout-button",
            onClick: s,
            children: "Log Out",
          }),
        ],
      }),
    ],
  });
}
const Bu = _.createContext();
function hS({ children: e }) {
  const t = _.useRef(),
    [n, r] = _.useState(null),
    [i, o] = _.useState(null),
    a = {
      modalRef: t,
      modalContent: n,
      setModalContent: r,
      setOnModalClose: o,
      closeModal: () => {
        r(null), typeof i == "function" && (o(null), i());
      },
    };
  return g.jsxs(g.Fragment, {
    children: [
      g.jsx(Bu.Provider, { value: a, children: e }),
      g.jsx("div", { ref: t }),
    ],
  });
}
function mS() {
  const { modalRef: e, modalContent: t, closeModal: n } = _.useContext(Bu);
  return !e || !e.current || !t
    ? null
    : Vy.createPortal(
        g.jsxs("div", {
          id: "modal",
          children: [
            g.jsx("div", { id: "modal-background", onClick: n }),
            g.jsx("div", { id: "modal-content", children: t }),
          ],
        }),
        e.current
      );
}
const Vu = () => _.useContext(Bu);
function bf({
  modalComponent: e,
  buttonText: t,
  onButtonClick: n,
  onModalClose: r,
  className: i,
}) {
  const { setModalContent: o, setOnModalClose: l } = Vu(),
    a = () => {
      r && l(r), o(e), typeof n == "function" && n();
    };
  return g.jsx("button", { className: i, onClick: a, children: t });
}
function vS() {
  const e = Kn(),
    [t, n] = _.useState(""),
    [r, i] = _.useState(""),
    [o, l] = _.useState({}),
    { closeModal: a } = Vu(),
    s = (u) => (
      u.preventDefault(),
      l({}),
      e(aS({ credential: t, password: r }))
        .then(a)
        .catch(async (f) => {
          const h = await f.json();
          h && h.errors && l(h.errors);
        })
    );
  return g.jsx("div", {
    className: "login-modal-container",
    children: g.jsxs("form", {
      className: "login-modal-form",
      onSubmit: s,
      children: [
        g.jsxs("label", {
          className: "login-modal-input",
          children: [
            g.jsx("span", { children: "Username/Email" }),
            g.jsx("input", {
              type: "text",
              placeholder: "Enter Username or Email",
              value: t,
              onChange: (u) => n(u.target.value),
              required: !0,
            }),
          ],
        }),
        g.jsxs("label", {
          className: "login-modal-input",
          children: [
            g.jsx("span", { children: "Password" }),
            g.jsx("input", {
              type: "password",
              placeholder: "Enter Password",
              value: r,
              onChange: (u) => i(u.target.value),
              required: !0,
            }),
          ],
        }),
        o.credential &&
          g.jsx("p", { className: "error", children: o.credential }),
        g.jsx("button", {
          className: "login-modal-button",
          type: "submit",
          children: "Log In",
        }),
      ],
    }),
  });
}
function yS() {
  const e = Kn(),
    [t, n] = _.useState(""),
    [r, i] = _.useState(""),
    [o, l] = _.useState(""),
    [a, s] = _.useState(""),
    [u, f] = _.useState(""),
    [h, v] = _.useState(""),
    [y, w] = _.useState({}),
    { closeModal: S } = Vu(),
    C = (p) => (
      p.preventDefault(),
      u === h
        ? (w({}),
          e(
            uS({
              email: t,
              username: r,
              firstName: o,
              lastName: a,
              password: u,
            })
          )
            .then(S)
            .catch(async (c) => {
              const m = await c.json();
              m != null && m.errors && w(m.errors);
            }))
        : w({
            confirmPassword:
              "Confirm Password field must be the same as the Password field",
          })
    );
  return g.jsx("div", {
    className: "signup-modal-container",
    children: g.jsxs("form", {
      className: "signup-modal-form",
      onSubmit: C,
      children: [
        g.jsxs("label", {
          className: "signup-modal-input",
          children: [
            g.jsx("span", { children: "Email" }),
            g.jsx("input", {
              type: "text",
              placeholder: "Enter Email",
              value: t,
              onChange: (p) => n(p.target.value),
              required: !0,
            }),
          ],
        }),
        y.email && g.jsx("p", { className: "error", children: y.email }),
        g.jsxs("label", {
          className: "signup-modal-input",
          children: [
            g.jsx("span", { children: "Username" }),
            g.jsx("input", {
              type: "text",
              placeholder: "Enter Username",
              value: r,
              onChange: (p) => i(p.target.value),
              required: !0,
            }),
          ],
        }),
        y.username && g.jsx("p", { className: "error", children: y.username }),
        g.jsxs("label", {
          className: "signup-modal-input",
          children: [
            g.jsx("span", { children: "First Name" }),
            g.jsx("input", {
              type: "text",
              placeholder: "Enter First Name",
              value: o,
              onChange: (p) => l(p.target.value),
              required: !0,
            }),
          ],
        }),
        y.firstName &&
          g.jsx("p", { className: "error", children: y.firstName }),
        g.jsxs("label", {
          className: "signup-modal-input",
          children: [
            g.jsx("span", { children: "Last Name" }),
            g.jsx("input", {
              type: "text",
              placeholder: "Enter Last Name",
              value: a,
              onChange: (p) => s(p.target.value),
              required: !0,
            }),
          ],
        }),
        y.lastName && g.jsx("p", { className: "error", children: y.lastName }),
        g.jsxs("label", {
          className: "signup-modal-input",
          children: [
            g.jsx("span", { children: "Password" }),
            g.jsx("input", {
              type: "password",
              placeholder: "Enter Password",
              value: u,
              onChange: (p) => f(p.target.value),
              required: !0,
            }),
          ],
        }),
        y.password && g.jsx("p", { className: "error", children: y.password }),
        g.jsxs("label", {
          className: "signup-modal-input",
          children: [
            g.jsx("span", { children: "Confirm Password" }),
            g.jsx("input", {
              type: "password",
              placeholder: "Confirm Password",
              value: h,
              onChange: (p) => v(p.target.value),
              required: !0,
            }),
          ],
        }),
        y.confirmPassword &&
          g.jsx("p", { className: "error", children: y.confirmPassword }),
        g.jsx("button", {
          className: "signup-modal-button",
          type: "submit",
          children: "Sign Up",
        }),
      ],
    }),
  });
}
function gS({ isLoaded: e }) {
  const t = Ti((n) => n.session.user);
  return g.jsxs("nav", {
    className: "nav-header",
    children: [
      g.jsxs(Os, {
        to: "/",
        className: "home-button",
        children: [
          g.jsx("img", {
            className: "logo",
            src: "../../logo.png",
            alt: "logo",
          }),
          "Temptations",
        ],
      }),
      g.jsx("div", {
        className: "nav-header-right",
        children:
          e && t
            ? g.jsxs(g.Fragment, {
                children: [
                  g.jsxs(Os, {
                    to: "/recipes/new",
                    className: "upload-recipe-button",
                    children: [
                      g.jsx("i", {
                        className: "fa-solid fa-arrow-up-from-bracket",
                      }),
                      "  Upload a Recipe",
                    ],
                  }),
                  g.jsx(pS, { user: t }),
                ],
              })
            : g.jsxs(g.Fragment, {
                children: [
                  g.jsx(bf, {
                    buttonText: "Log In",
                    className: "nav-header-button login-button",
                    modalComponent: g.jsx(vS, {}),
                  }),
                  g.jsx(bf, {
                    buttonText: "Sign Up",
                    className: "nav-header-button signup-button",
                    modalComponent: g.jsx(yS, {}),
                  }),
                ],
              }),
      }),
    ],
  });
}
const Hh = "recipes/setRecipes",
  Bh = "recipes/setRecipe",
  SS = (e) => ({ type: Hh, payload: e }),
  Vh = (e) => ({ type: Bh, payload: e }),
  wS = () => async (e) => {
    const t = await Gt("/api/recipes"),
      n = await t.json();
    return e(SS(n.Recipes)), t;
  },
  xS = (e) => async (t) => {
    const n = await Gt(`/api/recipes/${e}`),
      r = await n.json();
    return t(Vh(r)), n;
  },
  ES = (e) => async (t) => {
    const r = await (
      await Gt("/api/recipes", { method: "POST", body: e })
    ).json();
    return t(Vh(r)), r;
  },
  RS = { entries: {} },
  CS = (e = RS, t) => {
    switch (t.type) {
      case Hh: {
        const n = t.payload.reduce((r, i) => {
          const o = e.entries[i.id];
          return { ...r, [i.id]: { ...o, ...i } };
        }, {});
        return { ...e, entries: n };
      }
      case Bh: {
        const n = e.entries[t.payload.id];
        return {
          ...e,
          entries: { ...e.entries, [t.payload.id]: { ...n, ...t.payload } },
        };
      }
      default:
        return e;
    }
  };
function _S() {
  const e = Kn(),
    t = Ti((o) => o.recipe.entries),
    n = Object.values(t),
    [r, i] = _.useState(!0);
  return (
    _.useEffect(() => {
      e(wS()).then(() => i(!1));
    }, [e]),
    r
      ? g.jsx("h1", { children: "Loading..." })
      : g.jsx("div", {
          className: "recipes-grid",
          children: n.map((o) =>
            g.jsxs(
              Os,
              {
                className: "recipe-div",
                to: `/recipes/${o.id}`,
                title: o.name,
                children: [
                  g.jsx("div", {
                    className: "recipe-image-div",
                    children: g.jsx("img", {
                      className: "recipe-image",
                      src: o.RecipeImages.length ? o.RecipeImages[0].url : "",
                      alt: "preview",
                    }),
                  }),
                  g.jsxs("div", {
                    className: "recipe-name-stars",
                    children: [
                      g.jsx("div", {
                        children: g.jsx("span", {
                          style: { fontWeight: "bold" },
                          children: o.name,
                        }),
                      }),
                      g.jsxs("div", {
                        children: [
                          g.jsx("i", { className: "fa-solid fa-star" }),
                          " ",
                          g.jsx("span", {
                            style: { fontWeight: "bold" },
                            children:
                              o.avgRating > 0 ? o.avgRating.toFixed(1) : "New",
                          }),
                        ],
                      }),
                    ],
                  }),
                  g.jsxs("div", {
                    style: { fontSize: "14px" },
                    children: [
                      "by",
                      " ",
                      g.jsx("span", {
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
var Kh = {},
  Hl = {},
  Ku = {},
  Ma = {},
  Qh = { exports: {} },
  PS = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",
  kS = PS,
  NS = kS;
function qh() {}
function Yh() {}
Yh.resetWarningCache = qh;
var TS = function () {
  function e(r, i, o, l, a, s) {
    if (s !== NS) {
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
    checkPropTypes: Yh,
    resetWarningCache: qh,
  };
  return (n.PropTypes = n), n;
};
Qh.exports = TS();
var Qu = Qh.exports,
  Wf;
function OS() {
  return (
    Wf ||
      ((Wf = 1),
      (function (e) {
        (function (t, n) {
          n(e, _, Qu);
        })(Zf, function (t, n, r) {
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
              for (var m = 1; m < arguments.length; m++) {
                var d = arguments[m];
                for (var x in d)
                  Object.prototype.hasOwnProperty.call(d, x) && (c[x] = d[x]);
              }
              return c;
            };
          function s(c, m) {
            var d = {};
            for (var x in c)
              m.indexOf(x) >= 0 ||
                (Object.prototype.hasOwnProperty.call(c, x) && (d[x] = c[x]));
            return d;
          }
          function u(c, m) {
            if (!(c instanceof m))
              throw new TypeError("Cannot call a class as a function");
          }
          var f = (function () {
            function c(m, d) {
              for (var x = 0; x < d.length; x++) {
                var P = d[x];
                (P.enumerable = P.enumerable || !1),
                  (P.configurable = !0),
                  "value" in P && (P.writable = !0),
                  Object.defineProperty(m, P.key, P);
              }
            }
            return function (m, d, x) {
              return d && c(m.prototype, d), x && c(m, x), m;
            };
          })();
          function h(c, m) {
            if (!c)
              throw new ReferenceError(
                "this hasn't been initialised - super() hasn't been called"
              );
            return m && (typeof m == "object" || typeof m == "function")
              ? m
              : c;
          }
          function v(c, m) {
            if (typeof m != "function" && m !== null)
              throw new TypeError(
                "Super expression must either be null or a function, not " +
                  typeof m
              );
            (c.prototype = Object.create(m && m.prototype, {
              constructor: {
                value: c,
                enumerable: !1,
                writable: !0,
                configurable: !0,
              },
            })),
              m &&
                (Object.setPrototypeOf
                  ? Object.setPrototypeOf(c, m)
                  : (c.__proto__ = m));
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
          function S() {
            var c =
              arguments.length > 0 && arguments[0] !== void 0
                ? arguments[0]
                : { capture: !0 };
            return y ? c : c.capture;
          }
          function C(c) {
            if ("touches" in c) {
              var m = c.touches[0],
                d = m.pageX,
                x = m.pageY;
              return { x: d, y: x };
            }
            var P = c.screenX,
              T = c.screenY;
            return { x: P, y: T };
          }
          var p = (function (c) {
            v(m, c);
            function m() {
              var d;
              u(this, m);
              for (var x = arguments.length, P = Array(x), T = 0; T < x; T++)
                P[T] = arguments[T];
              var N = h(
                this,
                (d = m.__proto__ || Object.getPrototypeOf(m)).call.apply(
                  d,
                  [this].concat(P)
                )
              );
              return (
                (N._handleSwipeStart = N._handleSwipeStart.bind(N)),
                (N._handleSwipeMove = N._handleSwipeMove.bind(N)),
                (N._handleSwipeEnd = N._handleSwipeEnd.bind(N)),
                (N._onMouseDown = N._onMouseDown.bind(N)),
                (N._onMouseMove = N._onMouseMove.bind(N)),
                (N._onMouseUp = N._onMouseUp.bind(N)),
                (N._setSwiperRef = N._setSwiperRef.bind(N)),
                N
              );
            }
            return (
              f(m, [
                {
                  key: "componentDidMount",
                  value: function () {
                    this.swiper &&
                      this.swiper.addEventListener(
                        "touchmove",
                        this._handleSwipeMove,
                        S({ capture: !0, passive: !1 })
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
                        S({ capture: !0, passive: !1 })
                      );
                  },
                },
                {
                  key: "_onMouseDown",
                  value: function (x) {
                    this.props.allowMouseEvents &&
                      ((this.mouseDown = !0),
                      document.addEventListener("mouseup", this._onMouseUp),
                      document.addEventListener("mousemove", this._onMouseMove),
                      this._handleSwipeStart(x));
                  },
                },
                {
                  key: "_onMouseMove",
                  value: function (x) {
                    this.mouseDown && this._handleSwipeMove(x);
                  },
                },
                {
                  key: "_onMouseUp",
                  value: function (x) {
                    (this.mouseDown = !1),
                      document.removeEventListener("mouseup", this._onMouseUp),
                      document.removeEventListener(
                        "mousemove",
                        this._onMouseMove
                      ),
                      this._handleSwipeEnd(x);
                  },
                },
                {
                  key: "_handleSwipeStart",
                  value: function (x) {
                    var P = C(x),
                      T = P.x,
                      N = P.y;
                    (this.moveStart = { x: T, y: N }),
                      this.props.onSwipeStart(x);
                  },
                },
                {
                  key: "_handleSwipeMove",
                  value: function (x) {
                    if (this.moveStart) {
                      var P = C(x),
                        T = P.x,
                        N = P.y,
                        W = T - this.moveStart.x,
                        D = N - this.moveStart.y;
                      this.moving = !0;
                      var pe = this.props.onSwipeMove({ x: W, y: D }, x);
                      pe && x.cancelable && x.preventDefault(),
                        (this.movePosition = { deltaX: W, deltaY: D });
                    }
                  },
                },
                {
                  key: "_handleSwipeEnd",
                  value: function (x) {
                    this.props.onSwipeEnd(x);
                    var P = this.props.tolerance;
                    this.moving &&
                      this.movePosition &&
                      (this.movePosition.deltaX < -P
                        ? this.props.onSwipeLeft(1, x)
                        : this.movePosition.deltaX > P &&
                          this.props.onSwipeRight(1, x),
                      this.movePosition.deltaY < -P
                        ? this.props.onSwipeUp(1, x)
                        : this.movePosition.deltaY > P &&
                          this.props.onSwipeDown(1, x)),
                      (this.moveStart = null),
                      (this.moving = !1),
                      (this.movePosition = null);
                  },
                },
                {
                  key: "_setSwiperRef",
                  value: function (x) {
                    (this.swiper = x), this.props.innerRef(x);
                  },
                },
                {
                  key: "render",
                  value: function () {
                    var x = this.props;
                    x.tagName;
                    var P = x.className,
                      T = x.style,
                      N = x.children;
                    x.allowMouseEvents,
                      x.onSwipeUp,
                      x.onSwipeDown,
                      x.onSwipeLeft,
                      x.onSwipeRight,
                      x.onSwipeStart,
                      x.onSwipeMove,
                      x.onSwipeEnd,
                      x.innerRef,
                      x.tolerance;
                    var W = s(x, [
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
                          className: P,
                          style: T,
                        },
                        W
                      ),
                      N
                    );
                  },
                },
              ]),
              m
            );
          })(n.Component);
          (p.displayName = "ReactSwipe"),
            (p.propTypes = {
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
            (p.defaultProps = {
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
            (t.default = p);
        });
      })(Ma)),
    Ma
  );
}
(function (e) {
  (function (t, n) {
    n(e, OS());
  })(Zf, function (t, n) {
    Object.defineProperty(t, "__esModule", { value: !0 });
    var r = i(n);
    function i(o) {
      return o && o.__esModule ? o : { default: o };
    }
    t.default = r.default;
  });
})(Ku);
var Ui = {},
  Xh = { exports: {} };
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
})(Xh);
var Gh = Xh.exports;
Object.defineProperty(Ui, "__esModule", { value: !0 });
Ui.default = void 0;
var rn = MS(Gh);
function MS(e) {
  return e && e.__esModule ? e : { default: e };
}
function LS(e, t, n) {
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
var jS = {
  ROOT: function (t) {
    return (0, rn.default)(LS({ "carousel-root": !0 }, t || "", !!t));
  },
  CAROUSEL: function (t) {
    return (0, rn.default)({ carousel: !0, "carousel-slider": t });
  },
  WRAPPER: function (t, n) {
    return (0, rn.default)({
      "thumbs-wrapper": !t,
      "slider-wrapper": t,
      "axis-horizontal": n === "horizontal",
      "axis-vertical": n !== "horizontal",
    });
  },
  SLIDER: function (t, n) {
    return (0, rn.default)({ thumbs: !t, slider: t, animated: !n });
  },
  ITEM: function (t, n, r) {
    return (0, rn.default)({ thumb: !t, slide: t, selected: n, previous: r });
  },
  ARROW_PREV: function (t) {
    return (0, rn.default)({
      "control-arrow control-prev": !0,
      "control-disabled": t,
    });
  },
  ARROW_NEXT: function (t) {
    return (0, rn.default)({
      "control-arrow control-next": !0,
      "control-disabled": t,
    });
  },
  DOT: function (t) {
    return (0, rn.default)({ dot: !0, selected: t });
  },
};
Ui.default = jS;
var Ai = {},
  Bl = {};
Object.defineProperty(Bl, "__esModule", { value: !0 });
Bl.outerWidth = void 0;
var IS = function (t) {
  var n = t.offsetWidth,
    r = getComputedStyle(t);
  return (n += parseInt(r.marginLeft) + parseInt(r.marginRight)), n;
};
Bl.outerWidth = IS;
var jr = {};
Object.defineProperty(jr, "__esModule", { value: !0 });
jr.default = void 0;
var DS = function (t, n, r) {
  var i = t === 0 ? t : t + n,
    o = r === "horizontal" ? [i, 0, 0] : [0, i, 0],
    l = "translate3d",
    a = "(" + o.join(",") + ")";
  return l + a;
};
jr.default = DS;
var bi = {};
Object.defineProperty(bi, "__esModule", { value: !0 });
bi.default = void 0;
var zS = function () {
  return window;
};
bi.default = zS;
Object.defineProperty(Ai, "__esModule", { value: !0 });
Ai.default = void 0;
var mt = US(_),
  Nn = Vl(Ui),
  $S = Bl,
  Hf = Vl(jr),
  FS = Vl(Ku),
  co = Vl(bi);
function Vl(e) {
  return e && e.__esModule ? e : { default: e };
}
function Jh() {
  if (typeof WeakMap != "function") return null;
  var e = new WeakMap();
  return (
    (Jh = function () {
      return e;
    }),
    e
  );
}
function US(e) {
  if (e && e.__esModule) return e;
  if (e === null || (ci(e) !== "object" && typeof e != "function"))
    return { default: e };
  var t = Jh();
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
function ci(e) {
  "@babel/helpers - typeof";
  return (
    typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
      ? (ci = function (n) {
          return typeof n;
        })
      : (ci = function (n) {
          return n &&
            typeof Symbol == "function" &&
            n.constructor === Symbol &&
            n !== Symbol.prototype
            ? "symbol"
            : typeof n;
        }),
    ci(e)
  );
}
function Ls() {
  return (
    (Ls =
      Object.assign ||
      function (e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = arguments[t];
          for (var r in n)
            Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
        }
        return e;
      }),
    Ls.apply(this, arguments)
  );
}
function AS(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function Bf(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    (r.enumerable = r.enumerable || !1),
      (r.configurable = !0),
      "value" in r && (r.writable = !0),
      Object.defineProperty(e, r.key, r);
  }
}
function bS(e, t, n) {
  return t && Bf(e.prototype, t), n && Bf(e, n), e;
}
function WS(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  (e.prototype = Object.create(t && t.prototype, {
    constructor: { value: e, writable: !0, configurable: !0 },
  })),
    t && js(e, t);
}
function js(e, t) {
  return (
    (js =
      Object.setPrototypeOf ||
      function (r, i) {
        return (r.__proto__ = i), r;
      }),
    js(e, t)
  );
}
function HS(e) {
  var t = VS();
  return function () {
    var r = Zo(e),
      i;
    if (t) {
      var o = Zo(this).constructor;
      i = Reflect.construct(r, arguments, o);
    } else i = r.apply(this, arguments);
    return BS(this, i);
  };
}
function BS(e, t) {
  return t && (ci(t) === "object" || typeof t == "function") ? t : Fe(e);
}
function Fe(e) {
  if (e === void 0)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called"
    );
  return e;
}
function VS() {
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
function Zo(e) {
  return (
    (Zo = Object.setPrototypeOf
      ? Object.getPrototypeOf
      : function (n) {
          return n.__proto__ || Object.getPrototypeOf(n);
        }),
    Zo(e)
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
var KS = function (t) {
    return t.hasOwnProperty("key");
  },
  qu = (function (e) {
    WS(n, e);
    var t = HS(n);
    function n(r) {
      var i;
      return (
        AS(this, n),
        (i = t.call(this, r)),
        Ie(Fe(i), "itemsWrapperRef", void 0),
        Ie(Fe(i), "itemsListRef", void 0),
        Ie(Fe(i), "thumbsRef", void 0),
        Ie(Fe(i), "setItemsWrapperRef", function (o) {
          i.itemsWrapperRef = o;
        }),
        Ie(Fe(i), "setItemsListRef", function (o) {
          i.itemsListRef = o;
        }),
        Ie(Fe(i), "setThumbsRef", function (o, l) {
          i.thumbsRef || (i.thumbsRef = []), (i.thumbsRef[l] = o);
        }),
        Ie(Fe(i), "updateSizes", function () {
          if (!(!i.props.children || !i.itemsWrapperRef || !i.thumbsRef)) {
            var o = mt.Children.count(i.props.children),
              l = i.itemsWrapperRef.clientWidth,
              a = i.props.thumbWidth
                ? i.props.thumbWidth
                : (0, $S.outerWidth)(i.thumbsRef[0]),
              s = Math.floor(l / a),
              u = s < o,
              f = u ? o - s : 0;
            i.setState(function (h, v) {
              return {
                itemSize: a,
                visibleItems: s,
                firstItem: u ? i.getFirstItem(v.selectedItem) : 0,
                lastPosition: f,
                showArrows: u,
              };
            });
          }
        }),
        Ie(Fe(i), "handleClickItem", function (o, l, a) {
          if (!KS(a) || a.key === "Enter") {
            var s = i.props.onSelectItem;
            typeof s == "function" && s(o, l);
          }
        }),
        Ie(Fe(i), "onSwipeStart", function () {
          i.setState({ swiping: !0 });
        }),
        Ie(Fe(i), "onSwipeEnd", function () {
          i.setState({ swiping: !1 });
        }),
        Ie(Fe(i), "onSwipeMove", function (o) {
          var l = o.x;
          if (!i.state.itemSize || !i.itemsWrapperRef || !i.state.visibleItems)
            return !1;
          var a = 0,
            s = mt.Children.count(i.props.children),
            u = -(i.state.firstItem * 100) / i.state.visibleItems,
            f = Math.max(s - i.state.visibleItems, 0),
            h = (-f * 100) / i.state.visibleItems;
          u === a && l > 0 && (l = 0), u === h && l < 0 && (l = 0);
          var v = i.itemsWrapperRef.clientWidth,
            y = u + 100 / (v / l);
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
                i.itemsListRef.style[w] = (0, Hf.default)(y, "%", i.props.axis);
              }),
            !0
          );
        }),
        Ie(Fe(i), "slideRight", function (o) {
          i.moveTo(i.state.firstItem - (typeof o == "number" ? o : 1));
        }),
        Ie(Fe(i), "slideLeft", function (o) {
          i.moveTo(i.state.firstItem + (typeof o == "number" ? o : 1));
        }),
        Ie(Fe(i), "moveTo", function (o) {
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
      bS(n, [
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
            (0, co.default)().addEventListener("resize", this.updateSizes),
              (0, co.default)().addEventListener(
                "DOMContentLoaded",
                this.updateSizes
              ),
              this.updateSizes();
          },
        },
        {
          key: "destroyThumbs",
          value: function () {
            (0, co.default)().removeEventListener("resize", this.updateSizes),
              (0, co.default)().removeEventListener(
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
              var a = Nn.default.ITEM(!1, l === i.state.selectedItem),
                s = {
                  key: l,
                  ref: function (f) {
                    return i.setThumbsRef(f, l);
                  },
                  className: a,
                  onClick: i.handleClickItem.bind(i, l, i.props.children[l]),
                  onKeyDown: i.handleClickItem.bind(i, l, i.props.children[l]),
                  "aria-label": ""
                    .concat(i.props.labels.item, " ")
                    .concat(l + 1),
                  style: { width: i.props.thumbWidth },
                };
              return mt.default.createElement(
                "li",
                Ls({}, s, { role: "button", tabIndex: 0 }),
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
            var o = mt.Children.count(this.props.children) > 1,
              l = this.state.showArrows && this.state.firstItem > 0,
              a =
                this.state.showArrows &&
                this.state.firstItem < this.state.lastPosition,
              s = {},
              u = -this.state.firstItem * (this.state.itemSize || 0),
              f = (0, Hf.default)(u, "px", this.props.axis),
              h = this.props.transitionTime + "ms";
            return (
              (s = {
                WebkitTransform: f,
                MozTransform: f,
                MsTransform: f,
                OTransform: f,
                transform: f,
                msTransform: f,
                WebkitTransitionDuration: h,
                MozTransitionDuration: h,
                MsTransitionDuration: h,
                OTransitionDuration: h,
                transitionDuration: h,
                msTransitionDuration: h,
              }),
              mt.default.createElement(
                "div",
                { className: Nn.default.CAROUSEL(!1) },
                mt.default.createElement(
                  "div",
                  {
                    className: Nn.default.WRAPPER(!1),
                    ref: this.setItemsWrapperRef,
                  },
                  mt.default.createElement("button", {
                    type: "button",
                    className: Nn.default.ARROW_PREV(!l),
                    onClick: function () {
                      return i.slideRight();
                    },
                    "aria-label": this.props.labels.leftArrow,
                  }),
                  o
                    ? mt.default.createElement(
                        FS.default,
                        {
                          tagName: "ul",
                          className: Nn.default.SLIDER(!1, this.state.swiping),
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
                    : mt.default.createElement(
                        "ul",
                        {
                          className: Nn.default.SLIDER(!1, this.state.swiping),
                          ref: function (y) {
                            return i.setItemsListRef(y);
                          },
                          style: s,
                        },
                        this.renderItems()
                      ),
                  mt.default.createElement("button", {
                    type: "button",
                    className: Nn.default.ARROW_NEXT(!a),
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
  })(mt.Component);
Ai.default = qu;
Ie(qu, "displayName", "Thumbs");
Ie(qu, "defaultProps", {
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
var Kl = {};
Object.defineProperty(Kl, "__esModule", { value: !0 });
Kl.default = void 0;
var QS = function () {
  return document;
};
Kl.default = QS;
var Ge = {};
Object.defineProperty(Ge, "__esModule", { value: !0 });
Ge.setPosition =
  Ge.getPosition =
  Ge.isKeyboardEvent =
  Ge.defaultStatusFormatter =
  Ge.noop =
    void 0;
var qS = _,
  YS = XS(jr);
function XS(e) {
  return e && e.__esModule ? e : { default: e };
}
var GS = function () {};
Ge.noop = GS;
var JS = function (t, n) {
  return "".concat(t, " of ").concat(n);
};
Ge.defaultStatusFormatter = JS;
var ZS = function (t) {
  return t ? t.hasOwnProperty("key") : !1;
};
Ge.isKeyboardEvent = ZS;
var e1 = function (t, n) {
  if ((n.infiniteLoop && ++t, t === 0)) return 0;
  var r = qS.Children.count(n.children);
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
Ge.getPosition = e1;
var t1 = function (t, n) {
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
      r[i] = (0, YS.default)(t, "%", n);
    }),
    r
  );
};
Ge.setPosition = t1;
var Ot = {};
Object.defineProperty(Ot, "__esModule", { value: !0 });
Ot.fadeAnimationHandler =
  Ot.slideStopSwipingHandler =
  Ot.slideSwipeAnimationHandler =
  Ot.slideAnimationHandler =
    void 0;
var Zh = _,
  n1 = r1(jr),
  Mt = Ge;
function r1(e) {
  return e && e.__esModule ? e : { default: e };
}
function Vf(e, t) {
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
function Mn(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? Vf(Object(n), !0).forEach(function (r) {
          i1(e, r, n[r]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
      : Vf(Object(n)).forEach(function (r) {
          Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
        });
  }
  return e;
}
function i1(e, t, n) {
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
var o1 = function (t, n) {
  var r = {},
    i = n.selectedItem,
    o = i,
    l = Zh.Children.count(t.children) - 1,
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
    u = (0, n1.default)(s, "%", t.axis),
    f = t.transitionTime + "ms";
  return (
    (r.itemListStyle = {
      WebkitTransform: u,
      msTransform: u,
      OTransform: u,
      transform: u,
    }),
    n.swiping ||
      (r.itemListStyle = Mn(
        Mn({}, r.itemListStyle),
        {},
        {
          WebkitTransitionDuration: f,
          MozTransitionDuration: f,
          OTransitionDuration: f,
          transitionDuration: f,
          msTransitionDuration: f,
        }
      )),
    r
  );
};
Ot.slideAnimationHandler = o1;
var l1 = function (t, n, r, i) {
  var o = {},
    l = n.axis === "horizontal",
    a = Zh.Children.count(n.children),
    s = 0,
    u = (0, Mt.getPosition)(r.selectedItem, n),
    f = n.infiniteLoop
      ? (0, Mt.getPosition)(a - 1, n) - 100
      : (0, Mt.getPosition)(a - 1, n),
    h = l ? t.x : t.y,
    v = h;
  u === s && h > 0 && (v = 0), u === f && h < 0 && (v = 0);
  var y = u + 100 / (r.itemSize / v),
    w = Math.abs(h) > n.swipeScrollTolerance;
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
Ot.slideSwipeAnimationHandler = l1;
var a1 = function (t, n) {
  var r = (0, Mt.getPosition)(n.selectedItem, t),
    i = (0, Mt.setPosition)(r, t.axis);
  return { itemListStyle: i };
};
Ot.slideStopSwipingHandler = a1;
var s1 = function (t, n) {
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
      (o = Mn(
        Mn({}, o),
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
      selectedStyle: Mn(Mn({}, o), {}, { opacity: 1, position: "relative" }),
      prevStyle: Mn({}, o),
    }
  );
};
Ot.fadeAnimationHandler = s1;
Object.defineProperty(Hl, "__esModule", { value: !0 });
Hl.default = void 0;
var Y = f1(_),
  u1 = Wi(Ku),
  Ut = Wi(Ui),
  c1 = Wi(Ai),
  fo = Wi(Kl),
  po = Wi(bi),
  Zr = Ge,
  el = Ot;
function Wi(e) {
  return e && e.__esModule ? e : { default: e };
}
function em() {
  if (typeof WeakMap != "function") return null;
  var e = new WeakMap();
  return (
    (em = function () {
      return e;
    }),
    e
  );
}
function f1(e) {
  if (e && e.__esModule) return e;
  if (e === null || (fi(e) !== "object" && typeof e != "function"))
    return { default: e };
  var t = em();
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
function fi(e) {
  "@babel/helpers - typeof";
  return (
    typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
      ? (fi = function (n) {
          return typeof n;
        })
      : (fi = function (n) {
          return n &&
            typeof Symbol == "function" &&
            n.constructor === Symbol &&
            n !== Symbol.prototype
            ? "symbol"
            : typeof n;
        }),
    fi(e)
  );
}
function Is() {
  return (
    (Is =
      Object.assign ||
      function (e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = arguments[t];
          for (var r in n)
            Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
        }
        return e;
      }),
    Is.apply(this, arguments)
  );
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
function vt(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? Kf(Object(n), !0).forEach(function (r) {
          H(e, r, n[r]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
      : Kf(Object(n)).forEach(function (r) {
          Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
        });
  }
  return e;
}
function d1(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function Qf(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    (r.enumerable = r.enumerable || !1),
      (r.configurable = !0),
      "value" in r && (r.writable = !0),
      Object.defineProperty(e, r.key, r);
  }
}
function p1(e, t, n) {
  return t && Qf(e.prototype, t), n && Qf(e, n), e;
}
function h1(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  (e.prototype = Object.create(t && t.prototype, {
    constructor: { value: e, writable: !0, configurable: !0 },
  })),
    t && Ds(e, t);
}
function Ds(e, t) {
  return (
    (Ds =
      Object.setPrototypeOf ||
      function (r, i) {
        return (r.__proto__ = i), r;
      }),
    Ds(e, t)
  );
}
function m1(e) {
  var t = y1();
  return function () {
    var r = tl(e),
      i;
    if (t) {
      var o = tl(this).constructor;
      i = Reflect.construct(r, arguments, o);
    } else i = r.apply(this, arguments);
    return v1(this, i);
  };
}
function v1(e, t) {
  return t && (fi(t) === "object" || typeof t == "function") ? t : B(e);
}
function B(e) {
  if (e === void 0)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called"
    );
  return e;
}
function y1() {
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
function tl(e) {
  return (
    (tl = Object.setPrototypeOf
      ? Object.getPrototypeOf
      : function (n) {
          return n.__proto__ || Object.getPrototypeOf(n);
        }),
    tl(e)
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
var Yu = (function (e) {
  h1(n, e);
  var t = m1(n);
  function n(r) {
    var i;
    d1(this, n),
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
              (0, fo.default)().activeElement === i.carouselWrapperRef ||
              i.carouselWrapperRef.contains((0, fo.default)().activeElement)
            )
          : !1;
      }),
      H(B(i), "navigateWithKeyboard", function (l) {
        if (i.isFocusWithinTheCarousel()) {
          var a = i.props.axis,
            s = a === "horizontal",
            u = { ArrowUp: 38, ArrowRight: 39, ArrowDown: 40, ArrowLeft: 37 },
            f = s ? u.ArrowRight : u.ArrowDown,
            h = s ? u.ArrowLeft : u.ArrowUp;
          f === l.keyCode ? i.increment() : h === l.keyCode && i.decrement();
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
        return i.setState(vt({}, s)), !!Object.keys(s).length;
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
          (!(0, Zr.isKeyboardEvent)(a) || a.key === "Enter") && i.moveTo(l);
        };
      }),
      H(B(i), "selectItem", function (l) {
        i.setState(vt({ previousItem: i.state.selectedItem }, l), function () {
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
              var f = function y() {
                i.forceUpdate(), u.removeEventListener("load", y);
              };
              u.addEventListener("load", f);
            }
          }
          var h = s[0] || a.children[0],
            v = h.clientHeight;
          return v > 0 ? v : null;
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
        (r.animationHandler === "fade" && el.fadeAnimationHandler) ||
        el.slideAnimationHandler),
      (i.state = vt(vt({}, o), i.animationHandler(r, o))),
      i
    );
  }
  return (
    p1(n, [
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
                vt({}, this.props.stopSwipingHandler(this.props, this.state))
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
          (0, po.default)().addEventListener("resize", this.updateSizes),
            (0, po.default)().addEventListener(
              "DOMContentLoaded",
              this.updateSizes
            ),
            this.props.useKeyboardArrows &&
              (0, fo.default)().addEventListener(
                "keydown",
                this.navigateWithKeyboard
              );
        },
      },
      {
        key: "unbindEvents",
        value: function () {
          (0, po.default)().removeEventListener("resize", this.updateSizes),
            (0, po.default)().removeEventListener(
              "DOMContentLoaded",
              this.updateSizes
            );
          var i = this.getInitialImage();
          i && i.removeEventListener("load", this.setMountState),
            this.props.useKeyboardArrows &&
              (0, fo.default)().removeEventListener(
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
                  f =
                    (s && o.state.selectedStyle) ||
                    (u && o.state.prevStyle) ||
                    o.state.slideStyle ||
                    {};
                o.props.centerMode &&
                  o.props.axis === "horizontal" &&
                  (f = vt(
                    vt({}, f),
                    {},
                    { minWidth: o.props.centerSlidePercentage + "%" }
                  )),
                  o.state.swiping &&
                    o.state.swipeMovementStarted &&
                    (f = vt(vt({}, f), {}, { pointerEvents: "none" }));
                var h = {
                  ref: function (y) {
                    return o.setItemsRef(y, a);
                  },
                  key: "itemKey" + a + (i ? "clone" : ""),
                  className: Ut.default.ITEM(
                    !0,
                    a === o.state.selectedItem,
                    a === o.state.previousItem
                  ),
                  onClick: o.handleClickItem.bind(o, a, l),
                  style: f,
                };
                return Y.default.createElement(
                  "li",
                  h,
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
                Y.Children.map(u, function (f, h) {
                  return (
                    s &&
                    s(i.changeItem(h), h === i.state.selectedItem, h, a.item)
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
                c1.default,
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
            f = this.renderItems(!0),
            h = f.shift(),
            v = f.pop(),
            y = {
              className: Ut.default.SLIDER(!0, this.state.swiping),
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
              var S = this.getVariableItemHeight(this.state.selectedItem);
              w.height = S || "auto";
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
              (y.style = vt(
                vt({}, y.style),
                {},
                { height: this.state.itemSize }
              )),
              (w.height = this.state.itemSize);
          return Y.default.createElement(
            "div",
            {
              "aria-label": this.props.ariaLabel,
              className: Ut.default.ROOT(this.props.className),
              ref: this.setCarouselWrapperRef,
              tabIndex: this.props.useKeyboardArrows ? 0 : void 0,
            },
            Y.default.createElement(
              "div",
              {
                className: Ut.default.CAROUSEL(!0),
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
                  className: Ut.default.WRAPPER(!0, this.props.axis),
                  style: w,
                },
                o
                  ? Y.default.createElement(
                      u1.default,
                      Is({ tagName: "ul", innerRef: this.setListRef }, y, {
                        allowMouseEvents: this.props.emulateTouch,
                      }),
                      this.props.infiniteLoop && v,
                      this.renderItems(),
                      this.props.infiniteLoop && h
                    )
                  : Y.default.createElement(
                      "ul",
                      {
                        className: Ut.default.SLIDER(!0, this.state.swiping),
                        ref: function (p) {
                          return i.setListRef(p);
                        },
                        style: this.state.itemListStyle || {},
                      },
                      this.props.infiniteLoop && v,
                      this.renderItems(),
                      this.props.infiniteLoop && h
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
Hl.default = Yu;
H(Yu, "displayName", "Carousel");
H(Yu, "defaultProps", {
  ariaLabel: void 0,
  axis: "horizontal",
  centerSlidePercentage: 80,
  interval: 3e3,
  labels: {
    leftArrow: "previous slide / item",
    rightArrow: "next slide / item",
    item: "slide item",
  },
  onClickItem: Zr.noop,
  onClickThumb: Zr.noop,
  onChange: Zr.noop,
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
      className: Ut.default.ARROW_PREV(!n),
      onClick: t,
    });
  },
  renderArrowNext: function (t, n, r) {
    return Y.default.createElement("button", {
      type: "button",
      "aria-label": r,
      className: Ut.default.ARROW_NEXT(!n),
      onClick: t,
    });
  },
  renderIndicator: function (t, n, r, i) {
    return Y.default.createElement("li", {
      className: Ut.default.DOT(n),
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
  statusFormatter: Zr.defaultStatusFormatter,
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
  swipeAnimationHandler: el.slideSwipeAnimationHandler,
  stopSwipingHandler: el.slideStopSwipingHandler,
});
var g1 = {};
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
  var t = i(Hl),
    n = g1,
    r = i(Ai);
  function i(o) {
    return o && o.__esModule ? o : { default: o };
  }
})(Kh);
var tm = {},
  Xu = {},
  Gu = {};
Object.defineProperty(Gu, "__esModule", { value: !0 });
var S1 = (function () {
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
  w1 = _,
  ho = Ju(w1),
  x1 = Gh,
  E1 = Ju(x1),
  R1 = Qu,
  Se = Ju(R1);
function Ju(e) {
  return e && e.__esModule ? e : { default: e };
}
function C1(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function _1(e, t) {
  if (!e)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called"
    );
  return t && (typeof t == "object" || typeof t == "function") ? t : e;
}
function P1(e, t) {
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
var nm = (function (e) {
  P1(t, e);
  function t() {
    return (
      C1(this, t),
      _1(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments))
    );
  }
  return (
    S1(t, [
      {
        key: "render",
        value: function () {
          var r = this.props,
            i = r.changeRating,
            o = r.hoverOverStar,
            l = r.unHoverOverStar,
            a = r.svgIconViewBox,
            s = r.svgIconPath;
          return ho.default.createElement(
            "div",
            {
              className: "star-container",
              style: this.starContainerStyle,
              onMouseEnter: o,
              onMouseLeave: l,
              onClick: i,
            },
            ho.default.createElement(
              "svg",
              {
                viewBox: a,
                className: this.starClasses,
                style: this.starSvgStyle,
              },
              ho.default.createElement("path", {
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
            f = r.starHoverColor,
            h = r.gradientPathName,
            v = r.fillId,
            y = r.ignoreInlineStyles,
            w = void 0;
          a
            ? l
              ? (w = f)
              : (w = s)
            : o
            ? (w = "url('" + h + "#" + v + "')")
            : i
            ? (w = u)
            : (w = s);
          var S = { fill: w, transition: "fill .2s ease-in-out" };
          return y ? {} : S;
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
            u = (0, E1.default)({
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
})(ho.default.Component);
nm.propTypes = {
  fillId: Se.default.string.isRequired,
  changeRating: Se.default.func,
  hoverOverStar: Se.default.func,
  unHoverOverStar: Se.default.func,
  isStarred: Se.default.bool.isRequired,
  isPartiallyFullStar: Se.default.bool.isRequired,
  isHovered: Se.default.bool.isRequired,
  hoverMode: Se.default.bool.isRequired,
  isCurrentHoveredStar: Se.default.bool.isRequired,
  isFirstStar: Se.default.bool.isRequired,
  isLastStar: Se.default.bool.isRequired,
  starDimension: Se.default.string.isRequired,
  starSpacing: Se.default.string.isRequired,
  starHoverColor: Se.default.string.isRequired,
  starRatedColor: Se.default.string.isRequired,
  starEmptyColor: Se.default.string.isRequired,
  gradientPathName: Se.default.string.isRequired,
  ignoreInlineStyles: Se.default.bool.isRequired,
  svgIconPath: Se.default.string.isRequired,
  svgIconViewBox: Se.default.string.isRequired,
};
Gu.default = nm;
Object.defineProperty(Xu, "__esModule", { value: !0 });
var k1 = (function () {
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
  N1 = _,
  kt = Zu(N1),
  T1 = Qu,
  Ye = Zu(T1),
  O1 = Gu,
  M1 = Zu(O1);
function Zu(e) {
  return e && e.__esModule ? e : { default: e };
}
function L1(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function qf(e, t) {
  if (!e)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called"
    );
  return t && (typeof t == "object" || typeof t == "function") ? t : e;
}
function j1(e, t) {
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
var ec = (function (e) {
  j1(t, e);
  function t() {
    var n, r, i, o;
    L1(this, t);
    for (var l = arguments.length, a = Array(l), s = 0; s < l; s++)
      a[s] = arguments[s];
    return (
      (o =
        ((r =
          ((i = qf(
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
      qf(i, o)
    );
  }
  return (
    k1(t, [
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
          return kt.default.createElement(
            "div",
            {
              className: "star-ratings",
              title: this.titleText,
              style: this.starRatingsStyle,
            },
            kt.default.createElement(
              "svg",
              { className: "star-grad", style: this.starGradientStyle },
              kt.default.createElement(
                "defs",
                null,
                kt.default.createElement(
                  "linearGradient",
                  { id: this.fillId, x1: "0%", y1: "0%", x2: "100%", y2: "0%" },
                  kt.default.createElement("stop", {
                    offset: "0%",
                    className: "stop-color-first",
                    style: this.stopColorStyle(i),
                  }),
                  kt.default.createElement("stop", {
                    offset: this.offsetValue,
                    className: "stop-color-first",
                    style: this.stopColorStyle(i),
                  }),
                  kt.default.createElement("stop", {
                    offset: this.offsetValue,
                    className: "stop-color-final",
                    style: this.stopColorStyle(o),
                  }),
                  kt.default.createElement("stop", {
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
            f = i.starRatedColor,
            h = i.starEmptyColor,
            v = i.starHoverColor,
            y = i.gradientPathName,
            w = i.ignoreInlineStyles,
            S = i.svgIconPath,
            C = i.svgIconViewBox,
            p = i.name,
            c = this.state.highestStarHovered,
            m = Array.apply(null, Array(a));
          return m.map(function (d, x) {
            var P = x + 1,
              T = P <= l,
              N = c > 0,
              W = P <= c,
              D = P === c,
              pe = P > l && P - 1 < l,
              J = P === 1,
              it = P === a;
            return kt.default.createElement(M1.default, {
              key: P,
              fillId: r.fillId,
              changeRating: o
                ? function () {
                    return o(P, p);
                  }
                : null,
              hoverOverStar: o ? r.hoverOverStar(P) : null,
              unHoverOverStar: o ? r.unHoverOverStar : null,
              isStarred: T,
              isPartiallyFullStar: pe,
              isHovered: W,
              hoverMode: N,
              isCurrentHoveredStar: D,
              isFirstStar: J,
              isLastStar: it,
              starDimension: s,
              starSpacing: u,
              starHoverColor: v,
              starRatedColor: f,
              starEmptyColor: h,
              gradientPathName: y,
              ignoreInlineStyles: w,
              svgIconPath: S,
              svgIconViewBox: C,
            });
          });
        },
      },
    ]),
    t
  );
})(kt.default.Component);
ec.propTypes = {
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
ec.defaultProps = {
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
Xu.default = ec;
Object.defineProperty(tm, "__esModule", { value: !0 });
var I1 = Xu,
  D1 = z1(I1);
function z1(e) {
  return e && e.__esModule ? e : { default: e };
}
Number.isInteger =
  Number.isInteger ||
  function (e) {
    return typeof e == "number" && isFinite(e) && Math.floor(e) === e;
  };
var Yf = (tm.default = D1.default);
const $1 = (e) => {
    let t = new Date(e),
      n = "" + t.getDate(),
      r = t.getFullYear();
    const i = t.toLocaleString("default", { month: "long" });
    return n.length < 2 && (n = "0" + n), `${i} ${n}, ${r}`;
  },
  F1 = (e) => {
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
function U1() {
  const { recipeId: e } = T0(),
    t = Kn(),
    n = Ti((a) => a.recipe.entries[e]),
    [r, i] = _.useState(!0),
    [o, l] = _.useState(!0);
  return (
    _.useEffect(() => {
      r &&
        t(xS(e)).then(() => {
          i(!1), l(!1);
        });
    }, [t, e, r]),
    o
      ? g.jsx("h1", { children: "Loading..." })
      : g.jsxs("div", {
          className: "recipe-details-container",
          children: [
            g.jsx("h1", { className: "recipe-details-name", children: n.name }),
            g.jsxs("div", {
              className: "recipe-details-reviews-summary",
              children: [
                g.jsx(Yf, {
                  rating: n.avgRating,
                  starDimension: "16px",
                  starSpacing: "4px",
                  starRatedColor: "lightcoral",
                }),
                " ",
                n.avgRating,
                " | ",
                n.Reviews.length,
                "  reviews",
              ],
            }),
            g.jsx("p", {
              className: "recipe-details-description",
              children: n.description,
            }),
            g.jsxs("p", {
              className: "recipe-details-upload-by-p",
              children: [
                "Uploaded by ",
                g.jsx("h4", {
                  className: "recipe-details-username",
                  children: n.User.username,
                }),
                " | Updated on ",
                $1(n.updatedAt),
              ],
            }),
            g.jsx("div", {
              className: "recipe-details-tags",
              children: n.Tags.map((a, s) =>
                g.jsx(
                  "span",
                  { className: "recipe-details-tag", children: a.title },
                  s
                )
              ),
            }),
            g.jsx(Kh.Carousel, {
              width: 500,
              children: n.RecipeImages.map((a, s) =>
                g.jsx("div", { children: g.jsx("img", { src: a.url }) }, s)
              ),
            }),
            g.jsxs("div", {
              className: "recipe-details-time-servings",
              children: [
                g.jsxs("div", {
                  className: "recipe-details-time-servings-single-box",
                  children: [
                    g.jsxs("h5", {
                      children: [
                        "Prep time ",
                        g.jsx("i", {
                          className: "fa-solid fa-hourglass-start",
                        }),
                      ],
                    }),
                    g.jsxs("h3", { children: [n.prepTime, " min"] }),
                  ],
                }),
                g.jsxs("div", {
                  className: "recipe-details-time-servings-single-box",
                  children: [
                    g.jsxs("h5", {
                      children: [
                        "Cook time ",
                        g.jsx("i", { className: "fa-solid fa-hourglass-half" }),
                      ],
                    }),
                    g.jsxs("h3", { children: [n.cookTime, " min"] }),
                  ],
                }),
                g.jsxs("div", {
                  className: "recipe-details-time-servings-single-box",
                  children: [
                    g.jsxs("h5", {
                      children: [
                        "Total time ",
                        g.jsx("i", { className: "fa-solid fa-hourglass-end" }),
                      ],
                    }),
                    g.jsxs("h3", {
                      children: [n.prepTime + n.cookTime, " min"],
                    }),
                  ],
                }),
                g.jsxs("div", {
                  className: "recipe-details-time-servings-single-box",
                  children: [
                    g.jsxs("h5", {
                      children: [
                        "Servings ",
                        g.jsx("i", { className: "fa-solid fa-user-plus" }),
                      ],
                    }),
                    g.jsx("h3", { children: n.servings }),
                  ],
                }),
              ],
            }),
            g.jsxs("div", {
              className: "recipe-details-ingredients",
              children: [
                g.jsx("h2", { children: "Ingredients" }),
                g.jsx("ul", {
                  className: "recipe-details-ingredients-ul",
                  children: n.RecipeIngredients.map((a, s) =>
                    g.jsxs(
                      "li",
                      {
                        children: [
                          a.amount,
                          " ",
                          a.Unit.unit,
                          " ",
                          a.Ingredient.name,
                        ],
                      },
                      s
                    )
                  ),
                }),
              ],
            }),
            g.jsxs("div", {
              className: "recipe-details-directions",
              children: [
                g.jsx("h2", { children: "Directions" }),
                g.jsx("p", { children: n.directions }),
              ],
            }),
            g.jsxs("div", {
              className: "recipe-details-reviews",
              children: [
                g.jsx("h2", { children: "Reviews" }),
                n.Reviews.map((a, s) =>
                  g.jsxs(
                    "div",
                    {
                      className: "recipe-details-reviews-single-review",
                      children: [
                        g.jsx("h4", { children: a.User.username }),
                        g.jsxs("p", {
                          children: [
                            g.jsx(Yf, {
                              rating: a.stars,
                              starDimension: "14px",
                              starSpacing: "2px",
                              starRatedColor: "lightcoral",
                            }),
                            " ",
                            g.jsx("span", {
                              className:
                                "recipe-details-reviews-single-review-date",
                              children: F1(a.updatedAt),
                            }),
                          ],
                        }),
                        g.jsx("p", { children: a.content }),
                      ],
                    },
                    s
                  )
                ),
              ],
            }),
          ],
        })
  );
}
const rm = "ingredients/setIngredients",
  A1 = (e) => ({ type: rm, payload: e }),
  b1 = () => async (e) => {
    const t = await Gt("/api/ingredients"),
      n = await t.json();
    return e(A1(n)), t;
  },
  W1 = { entries: {} },
  H1 = (e = W1, t) => {
    switch (t.type) {
      case rm: {
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
  im = "units/setUnits",
  B1 = (e) => ({ type: im, payload: e }),
  V1 = () => async (e) => {
    const t = await Gt("/api/units"),
      n = await t.json();
    return e(B1(n)), t;
  },
  K1 = { entries: {} },
  Q1 = (e = K1, t) => {
    switch (t.type) {
      case im: {
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
function q1() {
  const e = Kn(),
    t = bu(),
    n = Ti((y) => y.unit.entries),
    r = Object.values(n),
    i = { amount: 0.1, unitId: 1, ingredientId: "" },
    o = Ti((y) => y.ingredient.entries),
    l = Object.values(o),
    [a, s] = _.useState({
      name: "",
      description: "",
      tags: [],
      prepTime: 0,
      cookTime: 0,
      servings: 1,
      ingredients: [i],
      directions: "",
      images: [],
    }),
    [u, f] = _.useState({}),
    h = (y) => {
      y.preventDefault(), f({});
      const w = new FormData();
      w.append("name", a.name),
        w.append("description", a.description),
        w.append("prepTime", a.prepTime),
        w.append("cookTime", a.cookTime),
        w.append("servings", a.servings),
        w.append("tags", JSON.stringify(a.tags)),
        w.append("ingredients", JSON.stringify(a.ingredients)),
        w.append("directions", a.directions);
      for (const S of a.images) w.append("images", S);
      return e(ES(w))
        .then(async (S) => {
          t(`/recipes/${S.id}`);
        })
        .catch(async (S) => {
          const C = await S.json();
          C && C.errors && f(C.errors);
        });
    },
    v = ({ label: y, value: w }) =>
      g.jsxs("div", {
        children: [
          g.jsx("input", {
            type: "checkbox",
            id: w,
            name: w,
            onChange: (S) => {
              let C = a.tags.slice();
              S.target.checked
                ? C.push(S.target.name)
                : (C = C.filter((p) => p !== S.target.name)),
                s({ ...a, tags: C });
            },
            checked: a.tags.includes(w),
          }),
          g.jsx("label", { htmlFor: w, children: y }),
        ],
      });
  return g.jsxs("form", {
    className: "upload-recipe-form",
    encType: "multipart/form-data",
    onSubmit: h,
    children: [
      g.jsxs("div", {
        className: "upload-recipe-label-input-pair",
        children: [
          g.jsx("label", {
            htmlFor: "title",
            className: "upload-recipe-label",
            children: "Title",
          }),
          g.jsx("input", {
            className: "upload-recipe-title",
            type: "text",
            maxLength: 100,
            placeholder: "Provide an eye catching title for your recipe",
            value: a.name,
            onChange: (y) => s({ ...a, name: y.target.value }),
            required: !0,
            id: "title",
          }),
        ],
      }),
      g.jsxs("div", {
        className: "upload-recipe-label-input-pair",
        children: [
          g.jsx("label", {
            htmlFor: "description",
            className: "upload-recipe-label",
            children: "Description",
          }),
          g.jsx("textarea", {
            className: "upload-recipe-description",
            type: "textarea",
            rows: "6",
            cols: "33",
            maxLength: 256,
            placeholder: "Write a few lines for this recipe",
            value: a.description,
            onChange: (y) => s({ ...a, description: y.target.value }),
            required: !0,
            id: "description",
          }),
        ],
      }),
      g.jsxs("div", {
        className: "upload-recipe-time-servings",
        children: [
          g.jsxs("div", {
            className: "upload-recipe-label-input-pair",
            children: [
              g.jsx("label", {
                htmlFor: "prepTime",
                className: "upload-recipe-label",
                children: "Prep Time",
              }),
              g.jsx("input", {
                className: "upload-recipe-prepTime",
                type: "number",
                min: "0",
                value: a.prepTime,
                onChange: (y) => s({ ...a, prepTime: y.target.value }),
                id: "prepTime",
              }),
            ],
          }),
          g.jsxs("div", {
            className: "upload-recipe-label-input-pair",
            children: [
              g.jsx("label", {
                htmlFor: "cookTime",
                className: "upload-recipe-label",
                children: "Cook Time",
              }),
              g.jsx("input", {
                className: "upload-recipe-cookTime",
                type: "number",
                min: "0",
                value: a.cookTime,
                onChange: (y) => s({ ...a, cookTime: y.target.value }),
                id: "cookTime",
              }),
            ],
          }),
          g.jsxs("div", {
            className: "upload-recipe-label-input-pair",
            children: [
              g.jsx("label", {
                htmlFor: "servings",
                className: "upload-recipe-label",
                children: "Servings",
              }),
              g.jsx("input", {
                className: "upload-recipe-servings",
                type: "number",
                min: "1",
                value: a.servings,
                onChange: (y) => s({ ...a, servings: y.target.value }),
                id: "servings",
              }),
            ],
          }),
        ],
      }),
      g.jsxs("div", {
        className: "upload-recipe-label-input-pair",
        children: [
          g.jsx("label", {
            htmlFor: "tags",
            className: "upload-recipe-label",
            children: "Tags",
          }),
          g.jsx("span", {
            style: { fontSize: "14px" },
            children: "Add tags (if any) to your recipe",
          }),
          g.jsxs("div", {
            id: "tags",
            className: "upload-recipe-tags-grid",
            children: [
              g.jsx(v, { label: "Indian", value: "indian" }),
              g.jsx(v, { label: "American", value: "american" }),
              g.jsx(v, { label: "Italian", value: "italian" }),
              g.jsx(v, { label: "Chinese", value: "chinese" }),
              g.jsx(v, { label: "Thai", value: "thai" }),
              g.jsx(v, { label: "Korean", value: "korean" }),
              g.jsx(v, { label: "Seafood", value: "seafood" }),
              g.jsx(v, { label: "Gluten-free", value: "gluten-free" }),
              g.jsx(v, { label: "Vegan", value: "vegan" }),
              g.jsx(v, { label: "Non-dairy", value: "non-dairy" }),
            ],
          }),
        ],
      }),
      g.jsxs("div", {
        className: "upload-recipe-label-input-pair",
        children: [
          g.jsx("label", {
            className: "upload-recipe-label",
            children: "Ingredients",
          }),
          g.jsx("span", {
            style: { fontSize: "14px" },
            children: "Add ingredients for your recipe",
          }),
          g.jsxs("div", {
            className: "upload-recipe-ingredients-header",
            children: [
              g.jsx("h5", {
                className: "upload-recipe-ingredients-input",
                children: "Amount",
              }),
              g.jsx("h5", {
                className: "upload-recipe-ingredients-select",
                children: "Unit",
              }),
              g.jsx("h5", {
                className: "upload-recipe-ingredients-select",
                children: "Ingredient",
              }),
              g.jsx("h5", { className: "upload-recipe-ingredients-add-new" }),
            ],
          }),
          g.jsx("div", {
            className: "upload-recipe-ingredients-inputs-container",
            children: a.ingredients.map((y, w) =>
              g.jsxs(
                "div",
                {
                  className: "upload-recipe-ingredients-inputs",
                  children: [
                    g.jsx("input", {
                      className: "upload-recipe-ingredients-input",
                      type: "number",
                      min: "0.1",
                      step: "0.1",
                      value: y.amount,
                      onChange: (S) => {
                        const C = [...a.ingredients];
                        (C[w] = { ...C[w], amount: Number(S.target.value) }),
                          s({ ...a, ingredients: C });
                      },
                    }),
                    g.jsx("select", {
                      className: "upload-recipe-ingredients-select",
                      onChange: (S) => {
                        const C = [...a.ingredients];
                        (C[w] = { ...C[w], unitId: Number(S.target.value) }),
                          s({ ...a, ingredients: C });
                      },
                      children: r.map((S, C) =>
                        g.jsx("option", { value: S.id, children: S.unit }, C)
                      ),
                    }),
                    g.jsxs("select", {
                      className: "upload-recipe-ingredients-select",
                      onChange: (S) => {
                        const C = [...a.ingredients];
                        (C[w] = {
                          ...C[w],
                          ingredientId: Number(S.target.value),
                        }),
                          s({ ...a, ingredients: C });
                      },
                      required: !0,
                      children: [
                        g.jsx(
                          "option",
                          { value: "", children: "---Select---" },
                          -1
                        ),
                        l.map((S, C) =>
                          g.jsx("option", { value: S.id, children: S.name }, C)
                        ),
                      ],
                    }),
                    g.jsx("button", {
                      className:
                        "upload-recipe-ingredients-add-new upload-recipe-ingredients-add-new-button",
                      type: "button",
                      onClick: () => {
                        const S = [...a.ingredients];
                        a.ingredients.length > 1 && w + 1 < a.ingredients.length
                          ? S.splice(w, 1)
                          : S.push(i),
                          s({ ...a, ingredients: S });
                      },
                      children:
                        a.ingredients.length > 1 && w + 1 < a.ingredients.length
                          ? g.jsx("i", {
                              className: "fa-solid fa-circle-minus",
                            })
                          : g.jsx("i", {
                              className: "fa-solid fa-circle-plus",
                            }),
                    }),
                  ],
                },
                w
              )
            ),
          }),
        ],
      }),
      g.jsxs("div", {
        className: "upload-recipe-label-input-pair",
        children: [
          g.jsx("label", {
            htmlFor: "directions",
            className: "upload-recipe-label",
            children: "Directions",
          }),
          g.jsx("textarea", {
            className: "upload-recipe-directions",
            type: "textarea",
            rows: "6",
            cols: "33",
            maxLength: 256,
            placeholder: "Add the directions to your recipe",
            value: a.directions,
            onChange: (y) => s({ ...a, directions: y.target.value }),
            required: !0,
            id: "directions",
          }),
        ],
      }),
      g.jsxs("div", {
        className: "upload-recipe-label-input-pair",
        children: [
          g.jsx("label", {
            htmlFor: "images",
            className: "upload-recipe-label",
            children: "Images",
          }),
          g.jsx("span", {
            style: { fontSize: "14px" },
            children: "Add images to your recipe",
          }),
          g.jsx("input", {
            type: "file",
            id: "images",
            accept: "image/*",
            multiple: "multiple",
            onChange: (y) => {
              s({ ...a, images: y.target.files });
            },
          }),
        ],
      }),
      u.message && g.jsx("p", { className: "error", children: u.message }),
      g.jsx("button", {
        className: "upload-recipe-submit-button",
        type: "submit",
        children: "Upload Recipe",
      }),
    ],
  });
}
function Y1() {
  const e = Kn(),
    [t, n] = _.useState(!1);
  return (
    _.useEffect(() => {
      e(sS()).then(() => {
        n(!0), e(V1()), e(b1());
      });
    }, [e]),
    g.jsxs(g.Fragment, {
      children: [g.jsx(gS, { isLoaded: t }), t && g.jsx(B0, {})],
    })
  );
}
const X1 = G0([
  {
    element: g.jsx(Y1, {}),
    children: [
      { path: "/", element: g.jsx(_S, {}) },
      { path: "/recipes/:recipeId", element: g.jsx(U1, {}) },
      { path: "/recipes/new", element: g.jsx(q1, {}) },
    ],
  },
]);
function G1() {
  return g.jsx(W0, { router: X1 });
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
function J1(e, t) {
  if (Mi(e) !== "object" || e === null) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || "default");
    if (Mi(r) !== "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function Z1(e) {
  var t = J1(e, "string");
  return Mi(t) === "symbol" ? t : String(t);
}
function ew(e, t, n) {
  return (
    (t = Z1(t)),
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
function Xf(e, t) {
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
function Gf(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? Xf(Object(n), !0).forEach(function (r) {
          ew(e, r, n[r]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
      : Xf(Object(n)).forEach(function (r) {
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
var Jf = (function () {
    return (typeof Symbol == "function" && Symbol.observable) || "@@observable";
  })(),
  La = function () {
    return Math.random().toString(36).substring(7).split("").join(".");
  },
  nl = {
    INIT: "@@redux/INIT" + La(),
    REPLACE: "@@redux/REPLACE" + La(),
    PROBE_UNKNOWN_ACTION: function () {
      return "@@redux/PROBE_UNKNOWN_ACTION" + La();
    },
  };
function tw(e) {
  if (typeof e != "object" || e === null) return !1;
  for (var t = e; Object.getPrototypeOf(t) !== null; )
    t = Object.getPrototypeOf(t);
  return Object.getPrototypeOf(e) === t;
}
function om(e, t, n) {
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
    return n(om)(e, t);
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
  function f() {
    if (s) throw new Error(De(3));
    return o;
  }
  function h(S) {
    if (typeof S != "function") throw new Error(De(4));
    if (s) throw new Error(De(5));
    var C = !0;
    return (
      u(),
      a.push(S),
      function () {
        if (C) {
          if (s) throw new Error(De(6));
          (C = !1), u();
          var c = a.indexOf(S);
          a.splice(c, 1), (l = null);
        }
      }
    );
  }
  function v(S) {
    if (!tw(S)) throw new Error(De(7));
    if (typeof S.type > "u") throw new Error(De(8));
    if (s) throw new Error(De(9));
    try {
      (s = !0), (o = i(o, S));
    } finally {
      s = !1;
    }
    for (var C = (l = a), p = 0; p < C.length; p++) {
      var c = C[p];
      c();
    }
    return S;
  }
  function y(S) {
    if (typeof S != "function") throw new Error(De(10));
    (i = S), v({ type: nl.REPLACE });
  }
  function w() {
    var S,
      C = h;
    return (
      (S = {
        subscribe: function (c) {
          if (typeof c != "object" || c === null) throw new Error(De(11));
          function m() {
            c.next && c.next(f());
          }
          m();
          var d = C(m);
          return { unsubscribe: d };
        },
      }),
      (S[Jf] = function () {
        return this;
      }),
      S
    );
  }
  return (
    v({ type: nl.INIT }),
    (r = { dispatch: v, subscribe: h, getState: f, replaceReducer: y }),
    (r[Jf] = w),
    r
  );
}
function nw(e) {
  Object.keys(e).forEach(function (t) {
    var n = e[t],
      r = n(void 0, { type: nl.INIT });
    if (typeof r > "u") throw new Error(De(12));
    if (typeof n(void 0, { type: nl.PROBE_UNKNOWN_ACTION() }) > "u")
      throw new Error(De(13));
  });
}
function rw(e) {
  for (var t = Object.keys(e), n = {}, r = 0; r < t.length; r++) {
    var i = t[r];
    typeof e[i] == "function" && (n[i] = e[i]);
  }
  var o = Object.keys(n),
    l;
  try {
    nw(n);
  } catch (a) {
    l = a;
  }
  return function (s, u) {
    if ((s === void 0 && (s = {}), l)) throw l;
    for (var f = !1, h = {}, v = 0; v < o.length; v++) {
      var y = o[v],
        w = n[y],
        S = s[y],
        C = w(S, u);
      if (typeof C > "u") throw (u && u.type, new Error(De(14)));
      (h[y] = C), (f = f || C !== S);
    }
    return (f = f || o.length !== Object.keys(s).length), f ? h : s;
  };
}
function iw() {
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
function ow() {
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
        (o = iw.apply(void 0, a)(i.dispatch)),
        Gf(Gf({}, i), {}, { dispatch: o })
      );
    };
  };
}
function lm(e) {
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
var am = lm();
am.withExtraArgument = lm;
const lw = am,
  aw = rw({ session: dS, unit: Q1, ingredient: H1, recipe: CS });
let sm;
sm = ow(lw);
const sw = (e) => om(aw, e, sm),
  uw = sw();
ja.createRoot(document.getElementById("root")).render(
  g.jsx(cd.StrictMode, {
    children: g.jsx(hS, {
      children: g.jsxs(jg, {
        store: uw,
        children: [g.jsx(G1, {}), g.jsx(mS, {})],
      }),
    }),
  })
);
