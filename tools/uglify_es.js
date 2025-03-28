// 个人打包的 UglifyJS 库，可以通过修改 UglifyJS.charlist 来构造新的变量表
function _uglify_es(e) {
  "use strict";
  function n(e) {
    return e.split("");
  }
  function t(e, n) {
    return n.indexOf(e) >= 0;
  }
  function i(e, n) {
    for (var t = 0, i = n.length; t < i; ++t) if (e(n[t])) return n[t];
  }
  function r(e) {
    Object.defineProperty(e.prototype, "stack", {
      get: function () {
        var e = Error(this.message);
        e.name = this.name;
        try {
          throw e;
        } catch (e) {
          return e.stack;
        }
      },
    });
  }
  function o(e, n) {
    this.message = e;
    this.defs = n;
  }
  o.prototype = Object.create(Error.prototype);
  o.prototype.constructor = o;
  o.prototype.name = "DefaultsError";
  r(o);
  o.croak = function (e, n) {
    throw new o(e, n);
  };
  function a(e, n, t) {
    if (!0 === e) e = {};
    var i = e || {};
    if (t)
      for (var r in i)
        if (y(i, r) && !y(n, r))
          o.croak("`" + r + "` is not a supported option", n);
    for (var r in n) if (y(n, r)) i[r] = e && y(e, r) ? e[r] : n[r];
    return i;
  }
  function s(e, n) {
    var t = 0;
    for (var i in n)
      if (y(n, i)) {
        e[i] = n[i];
        t++;
      }
    return t;
  }
  function u() {}
  function f() {
    return !1;
  }
  function c() {
    return !0;
  }
  function l() {
    return this;
  }
  function p() {
    return null;
  }
  var d = (function () {
    function e(e, o, a) {
      var s,
        u = [],
        f = [];
      function c() {
        var c = o(e[s], s);
        var l = c instanceof r;
        if (l) c = c.v;
        if (c instanceof t) {
          if ((c = c.v) instanceof i)
            f.push.apply(f, a ? c.v.slice().reverse() : c.v);
          else f.push(c);
        } else if (c !== n)
          if (c instanceof i) u.push.apply(u, a ? c.v.slice().reverse() : c.v);
          else u.push(c);
        return l;
      }
      if (e instanceof Array) {
        if (a) {
          for (s = e.length; --s >= 0 && !c(); );
          u.reverse();
          f.reverse();
        } else for (s = 0; s < e.length && !c(); ++s);
      } else for (s in e) if (y(e, s)) if (c()) break;
      return f.concat(u);
    }
    e.at_top = function (e) {
      return new t(e);
    };
    e.splice = function (e) {
      return new i(e);
    };
    e.last = function (e) {
      return new r(e);
    };
    var n = (e.skip = {});
    function t(e) {
      this.v = e;
    }
    function i(e) {
      this.v = e;
    }
    function r(e) {
      this.v = e;
    }
    return e;
  })();
  function h(e, n) {
    if (e.indexOf(n) < 0) e.push(n);
  }
  function v(e, n) {
    return e.replace(/\{(.+?)\}/g, function (e, t) {
      return n && n[t];
    });
  }
  function m(e, n) {
    for (var t = e.length; --t >= 0; ) if (e[t] === n) e.splice(t, 1);
  }
  function _(e, n) {
    if (e.length < 2) return e.slice();
    return (function e(t) {
      if (t.length <= 1) return t;
      var i = Math.floor(t.length / 2),
        r = t.slice(0, i),
        o = t.slice(i);
      return (function (e, t) {
        var i = [],
          r = 0,
          o = 0,
          a = 0;
        for (; r < e.length && o < t.length; )
          n(e[r], t[o]) <= 0 ? (i[a++] = e[r++]) : (i[a++] = t[o++]);
        if (r < e.length) i.push.apply(i, e.slice(r));
        if (o < t.length) i.push.apply(i, t.slice(o));
        return i;
      })((r = e(r)), (o = e(o)));
    })(e);
  }
  function D(e) {
    if (!(e instanceof Array)) e = e.split(" ");
    var n = "",
      t = [];
    e: for (var i = 0; i < e.length; ++i) {
      for (var r = 0; r < t.length; ++r)
        if (t[r][0].length == e[i].length) {
          t[r].push(e[i]);
          continue e;
        }
      t.push([e[i]]);
    }
    function o(e) {
      return JSON.stringify(e).replace(/[\u2028\u2029]/g, function (e) {
        switch (e) {
          case "\u2028":
            return "\\u2028";
          case "\u2029":
            return "\\u2029";
        }
        return e;
      });
    }
    function a(e) {
      if (1 == e.length) return (n += "return str === " + o(e[0]) + ";");
      n += "switch(str){";
      for (var t = 0; t < e.length; ++t) n += "case " + o(e[t]) + ":";
      n += "return true}return false;";
    }
    if (t.length > 3) {
      t.sort(function (e, n) {
        return n.length - e.length;
      });
      n += "switch(str.length){";
      for (i = 0; i < t.length; ++i) {
        var s = t[i];
        n += "case " + s[0].length + ":";
        a(s);
      }
      n += "}";
    } else a(e);
    return Function("str", n);
  }
  function g(e, n) {
    for (var t = e.length; --t >= 0; ) if (!n(e[t])) return !1;
    return !0;
  }
  function b() {
    this._values = Object.create(null);
    this._size = 0;
  }
  b.prototype = {
    set: function (e, n) {
      if (!this.has(e)) ++this._size;
      this._values["$" + e] = n;
      return this;
    },
    add: function (e, n) {
      if (this.has(e)) this.get(e).push(n);
      else this.set(e, [n]);
      return this;
    },
    get: function (e) {
      return this._values["$" + e];
    },
    del: function (e) {
      if (this.has(e)) {
        --this._size;
        delete this._values["$" + e];
      }
      return this;
    },
    has: function (e) {
      return "$" + e in this._values;
    },
    each: function (e) {
      for (var n in this._values) e(this._values[n], n.substr(1));
    },
    size: function () {
      return this._size;
    },
    map: function (e) {
      var n = [];
      for (var t in this._values) n.push(e(this._values[t], t.substr(1)));
      return n;
    },
    clone: function () {
      var e = new b();
      for (var n in this._values) e._values[n] = this._values[n];
      e._size = this._size;
      return e;
    },
    toObject: function () {
      return this._values;
    },
  };
  b.fromObject = function (e) {
    var n = new b();
    n._size = s(n._values, e);
    return n;
  };
  function y(e, n) {
    return Object.prototype.hasOwnProperty.call(e, n);
  }
  function E(e) {
    var n = e.parent(-1);
    for (var t, i = 0; (t = e.parent(i)); i++) {
      if (t instanceof x && t.body === n) return !0;
      if (
        (t instanceof Ce && t.expressions[0] === n) ||
        ("Call" == t.TYPE && t.expression === n) ||
        (t instanceof Be && t.expression === n) ||
        (t instanceof Se && t.expression === n) ||
        (t instanceof qe && t.condition === n) ||
        (t instanceof Me && t.left === n) ||
        (t instanceof $e && t.expression === n)
      )
        n = t;
      else return !1;
    }
  }
  function A(n, t, i, r) {
    if (arguments.length < 4) r = w;
    if (!t) t = [];
    else t = t.split(/\s+/);
    var o = t;
    if (r && r.PROPS) t = t.concat(r.PROPS);
    var a = "return function AST_" + n + "(props){ if (props) { ";
    for (var s = t.length; --s >= 0; )
      a += "this." + t[s] + " = props." + t[s] + ";";
    var u = r && new r();
    if ((u && u.initialize) || (i && i.initialize)) a += "this.initialize();";
    var f = Function((a += "}}"))();
    if (u) {
      f.prototype = u;
      f.BASE = r;
    }
    if (r) r.SUBCLASSES.push(f);
    f.prototype.CTOR = f;
    f.PROPS = t || null;
    f.SELF_PROPS = o;
    f.SUBCLASSES = [];
    if (n) f.prototype.TYPE = f.TYPE = n;
    if (i)
      for (s in i)
        if (y(i, s))
          if (/^\$/.test(s)) f[s.substr(1)] = i[s];
          else f.prototype[s] = i[s];
    f.DEFMETHOD = function (e, n) {
      this.prototype[e] = n;
    };
    if (void 0 !== e) e["AST_" + n] = f;
    return f;
  }
  var F = A(
    "Token",
    "type value line col pos endline endcol endpos nlb comments_before comments_after file raw",
    {},
    null
  );
  var w = A(
    "Node",
    "start end",
    {
      _clone: function (e) {
        if (e) {
          var n = this.clone();
          return n.transform(
            new mt(function (e) {
              if (e !== n) return e.clone(!0);
            })
          );
        }
        return new this.CTOR(this);
      },
      clone: function (e) {
        return this._clone(e);
      },
      $documentation: "Base class of all AST nodes",
      $propdoc: {
        start: "[AST_Token] The first token of this node",
        end: "[AST_Token] The last token of this node",
      },
      _walk: function (e) {
        return e._visit(this);
      },
      walk: function (e) {
        return this._walk(e);
      },
    },
    null
  );
  w.warn_function = null;
  w.warn = function (e, n) {
    if (w.warn_function) w.warn_function(v(e, n));
  };
  var x = A("Statement", null, {
    $documentation: "Base class of all statements",
  });
  var C = A(
    "Debugger",
    null,
    { $documentation: "Represents a debugger statement" },
    x
  );
  var k = A(
    "Directive",
    "value quote",
    {
      $documentation: 'Represents a directive, like "use strict";',
      $propdoc: {
        value:
          "[string] The value of this directive as a plain string (it's not an AST_String!)",
        quote: "[string] the original quote character",
      },
    },
    x
  );
  var B = A(
    "SimpleStatement",
    "body",
    {
      $documentation: "A statement consisting of an expression, i.e. a = 1 + 2",
      $propdoc: {
        body: "[AST_Node] an expression node (should not be instanceof AST_Statement)",
      },
      _walk: function (e) {
        return e._visit(this, function () {
          this.body._walk(e);
        });
      },
    },
    x
  );
  function S(e, n) {
    var t = e.body;
    if (t instanceof w) t._walk(n);
    else for (var i = 0, r = t.length; i < r; i++) t[i]._walk(n);
  }
  var T = A(
    "Block",
    "body",
    {
      $documentation: "A body of statements (usually bracketed)",
      $propdoc: { body: "[AST_Statement*] an array of statements" },
      _walk: function (e) {
        return e._visit(this, function () {
          S(this, e);
        });
      },
    },
    x
  );
  var O = A("BlockStatement", null, { $documentation: "A block statement" }, T);
  var $ = A(
    "EmptyStatement",
    null,
    {
      $documentation: "The empty statement (empty block or simply a semicolon)",
    },
    x
  );
  var M = A(
    "StatementWithBody",
    "body",
    {
      $documentation:
        "Base class for all statements that contain one nested body: `For`, `ForIn`, `Do`, `While`, `With`",
      $propdoc: {
        body: "[AST_Statement] the body; this should always be present, even if it's an AST_EmptyStatement",
      },
    },
    x
  );
  var q = A(
    "LabeledStatement",
    "label",
    {
      $documentation: "Statement with a label",
      $propdoc: { label: "[AST_Label] a label definition" },
      _walk: function (e) {
        return e._visit(this, function () {
          this.label._walk(e);
          this.body._walk(e);
        });
      },
      clone: function (e) {
        var n = this._clone(e);
        if (e) {
          var t = n.label;
          var i = this.label;
          n.walk(
            new $n(function (e) {
              if (e instanceof ae && e.label && e.label.thedef === i) {
                e.label.thedef = t;
                t.references.push(e);
              }
            })
          );
        }
        return n;
      },
    },
    M
  );
  var z = A(
    "IterationStatement",
    null,
    { $documentation: "Internal class.  All loops inherit from it." },
    M
  );
  var j = A(
    "DWLoop",
    "condition",
    {
      $documentation: "Base class for do/while statements",
      $propdoc: {
        condition:
          "[AST_Node] the loop condition.  Should not be instanceof AST_Statement",
      },
    },
    z
  );
  var N = A(
    "Do",
    null,
    {
      $documentation: "A `do` statement",
      _walk: function (e) {
        return e._visit(this, function () {
          this.body._walk(e);
          this.condition._walk(e);
        });
      },
    },
    j
  );
  var H = A(
    "While",
    null,
    {
      $documentation: "A `while` statement",
      _walk: function (e) {
        return e._visit(this, function () {
          this.condition._walk(e);
          this.body._walk(e);
        });
      },
    },
    j
  );
  var I = A(
    "For",
    "init condition step",
    {
      $documentation: "A `for` statement",
      $propdoc: {
        init: "[AST_Node?] the `for` initialization code, or null if empty",
        condition: "[AST_Node?] the `for` termination clause, or null if empty",
        step: "[AST_Node?] the `for` update clause, or null if empty",
      },
      _walk: function (e) {
        return e._visit(this, function () {
          if (this.init) this.init._walk(e);
          if (this.condition) this.condition._walk(e);
          if (this.step) this.step._walk(e);
          this.body._walk(e);
        });
      },
    },
    z
  );
  var R = A(
    "ForIn",
    "init object",
    {
      $documentation: "A `for ... in` statement",
      $propdoc: {
        init: "[AST_Node] the `for/in` initialization code",
        object: "[AST_Node] the object that we're looping through",
      },
      _walk: function (e) {
        return e._visit(this, function () {
          this.init._walk(e);
          this.object._walk(e);
          this.body._walk(e);
        });
      },
    },
    z
  );
  var U = A("ForOf", null, { $documentation: "A `for ... of` statement" }, R);
  var P = A(
    "With",
    "expression",
    {
      $documentation: "A `with` statement",
      $propdoc: { expression: "[AST_Node] the `with` expression" },
      _walk: function (e) {
        return e._visit(this, function () {
          this.expression._walk(e);
          this.body._walk(e);
        });
      },
    },
    M
  );
  var L = A(
    "Scope",
    "variables functions uses_with uses_eval parent_scope enclosed cname",
    {
      $documentation:
        "Base class for all statements introducing a lexical scope",
      $propdoc: {
        variables:
          "[Object/S] a map of name -> SymbolDef for all variables/functions defined in this scope",
        functions:
          "[Object/S] like `variables`, but only lists function declarations",
        uses_with:
          "[boolean/S] tells whether this scope uses the `with` statement",
        uses_eval:
          "[boolean/S] tells whether this scope contains a direct call to the global `eval`",
        parent_scope: "[AST_Scope?/S] link to the parent scope",
        enclosed:
          "[SymbolDef*/S] a list of all symbol definitions that are accessed from this scope or any subscopes",
        cname:
          "[integer/S] current index for mangling variables (used internally by the mangler)",
      },
      get_defun_scope: function () {
        var e = this;
        for (; e.is_block_scope(); ) e = e.parent_scope;
        return e;
      },
      clone: function (e) {
        var n = this._clone(e);
        if (this.variables) n.variables = this.variables.clone();
        if (this.functions) n.functions = this.functions.clone();
        if (this.enclosed) n.enclosed = this.enclosed.slice();
        return n;
      },
    },
    T
  );
  var V = A(
    "Toplevel",
    "globals",
    {
      $documentation: "The toplevel scope",
      $propdoc: {
        globals:
          "[Object/S] a map of name -> SymbolDef for all undeclared names",
      },
      wrap_commonjs: function (e) {
        var n = this.body;
        var t =
          "(function(exports){'$ORIG';})(typeof " +
          e +
          "=='undefined'?(" +
          e +
          "={}):" +
          e +
          ");";
        return (t = vt(t)).transform(
          new mt(function (e) {
            if (e instanceof k && "$ORIG" == e.value) return d.splice(n);
          })
        );
      },
    },
    L
  );
  var Y = A("Expansion", "expression", {
    $documentation:
      "An expandible argument, such as ...rest, a splat, such as [1,2,...all], or an expansion in a variable declaration, such as var [first, ...rest] = list",
    $propdoc: { expression: "[AST_Node] the thing to be expanded" },
    _walk: function (e) {
      var n = this;
      return e._visit(this, function () {
        n.expression.walk(e);
      });
    },
  });
  var J = A(
    "Lambda",
    "name argnames uses_arguments is_generator async",
    {
      $documentation: "Base class for functions",
      $propdoc: {
        name: "[AST_SymbolDeclaration?] the name of this function",
        argnames:
          "[AST_SymbolFunarg|AST_Destructuring|AST_Expansion|AST_DefaultAssign*] array of function arguments, destructurings, or expanding arguments",
        uses_arguments:
          "[boolean/S] tells whether this function accesses the arguments array",
        is_generator: "[boolean] is this a generator method",
        async: "[boolean] is this method async",
      },
      args_as_names: function () {
        var e = [];
        for (var n = 0; n < this.argnames.length; n++)
          if (this.argnames[n] instanceof K)
            e = e.concat(this.argnames[n].all_symbols());
          else e.push(this.argnames[n]);
        return e;
      },
      _walk: function (e) {
        return e._visit(this, function () {
          if (this.name) this.name._walk(e);
          var n = this.argnames;
          for (var t = 0, i = n.length; t < i; t++) n[t]._walk(e);
          S(this, e);
        });
      },
    },
    L
  );
  var W = A(
    "Accessor",
    null,
    {
      $documentation:
        "A setter/getter function.  The `name` property is always null.",
    },
    J
  );
  var X = A(
    "Function",
    "inlined",
    { $documentation: "A function expression" },
    J
  );
  var G = A(
    "Arrow",
    "inlined",
    { $documentation: "An ES6 Arrow function ((a) => b)" },
    J
  );
  var Z = A("Defun", "inlined", { $documentation: "A function definition" }, J);
  var K = A("Destructuring", "names is_array", {
    $documentation:
      "A destructuring of several names. Used in destructuring assignment and with destructuring function argument names",
    $propdoc: {
      names: "[AST_Node*] Array of properties or elements",
      is_array:
        "[Boolean] Whether the destructuring represents an object or array",
    },
    _walk: function (e) {
      return e._visit(this, function () {
        this.names.forEach(function (n) {
          n._walk(e);
        });
      });
    },
    all_symbols: function () {
      var e = [];
      this.walk(
        new $n(function (n) {
          if (n instanceof We) e.push(n);
          if (n instanceof Y) e.push(n.expression);
        })
      );
      return e;
    },
  });
  var Q = A("PrefixedTemplateString", "template_string prefix", {
    $documentation:
      "A templatestring with a prefix, such as String.raw`foobarbaz`",
    $propdoc: {
      template_string: "[AST_TemplateString] The template string",
      prefix:
        "[AST_SymbolRef|AST_PropAccess] The prefix, which can be a symbol such as `foo` or a dotted expression such as `String.raw`.",
    },
    _walk: function (e) {
      this.prefix._walk(e);
      this.template_string._walk(e);
    },
  });
  var ee = A("TemplateString", "segments", {
    $documentation: "A template string literal",
    $propdoc: {
      segments:
        "[AST_Node*] One or more segments, starting with AST_TemplateSegment. AST_Node may follow AST_TemplateSegment, but each AST_Node must be followed by AST_TemplateSegment.",
    },
    _walk: function (e) {
      return e._visit(this, function () {
        this.segments.forEach(function (n) {
          n._walk(e);
        });
      });
    },
  });
  var ne = A("TemplateSegment", "value raw", {
    $documentation: "A segment of a template string literal",
    $propdoc: {
      value: "Content of the segment",
      raw: "Raw content of the segment",
    },
  });
  var te = A(
    "Jump",
    null,
    {
      $documentation:
        "Base class for \u201Cjumps\u201D (for now that's `return`, `throw`, `break` and `continue`)",
    },
    x
  );
  var ie = A(
    "Exit",
    "value",
    {
      $documentation: "Base class for \u201Cexits\u201D (`return` and `throw`)",
      $propdoc: {
        value:
          "[AST_Node?] the value returned or thrown by this statement; could be null for AST_Return",
      },
      _walk: function (e) {
        return e._visit(
          this,
          this.value &&
            function () {
              this.value._walk(e);
            }
        );
      },
    },
    te
  );
  var re = A("Return", null, { $documentation: "A `return` statement" }, ie);
  var oe = A("Throw", null, { $documentation: "A `throw` statement" }, ie);
  var ae = A(
    "LoopControl",
    "label",
    {
      $documentation:
        "Base class for loop control statements (`break` and `continue`)",
      $propdoc: { label: "[AST_LabelRef?] the label, or null if none" },
      _walk: function (e) {
        return e._visit(
          this,
          this.label &&
            function () {
              this.label._walk(e);
            }
        );
      },
    },
    te
  );
  var se = A("Break", null, { $documentation: "A `break` statement" }, ae);
  var ue = A(
    "Continue",
    null,
    { $documentation: "A `continue` statement" },
    ae
  );
  var fe = A(
    "If",
    "condition alternative",
    {
      $documentation: "A `if` statement",
      $propdoc: {
        condition: "[AST_Node] the `if` condition",
        alternative: "[AST_Statement?] the `else` part, or null if not present",
      },
      _walk: function (e) {
        return e._visit(this, function () {
          this.condition._walk(e);
          this.body._walk(e);
          if (this.alternative) this.alternative._walk(e);
        });
      },
    },
    M
  );
  var ce = A(
    "Switch",
    "expression",
    {
      $documentation: "A `switch` statement",
      $propdoc: {
        expression: "[AST_Node] the `switch` \u201Cdiscriminant\u201D",
      },
      _walk: function (e) {
        return e._visit(this, function () {
          this.expression._walk(e);
          S(this, e);
        });
      },
    },
    T
  );
  var le = A(
    "SwitchBranch",
    null,
    { $documentation: "Base class for `switch` branches" },
    T
  );
  var pe = A(
    "Default",
    null,
    { $documentation: "A `default` switch branch" },
    le
  );
  var de = A(
    "Case",
    "expression",
    {
      $documentation: "A `case` switch branch",
      $propdoc: { expression: "[AST_Node] the `case` expression" },
      _walk: function (e) {
        return e._visit(this, function () {
          this.expression._walk(e);
          S(this, e);
        });
      },
    },
    le
  );
  var he = A(
    "Try",
    "bcatch bfinally",
    {
      $documentation: "A `try` statement",
      $propdoc: {
        bcatch: "[AST_Catch?] the catch block, or null if not present",
        bfinally: "[AST_Finally?] the finally block, or null if not present",
      },
      _walk: function (e) {
        return e._visit(this, function () {
          S(this, e);
          if (this.bcatch) this.bcatch._walk(e);
          if (this.bfinally) this.bfinally._walk(e);
        });
      },
    },
    T
  );
  var ve = A(
    "Catch",
    "argname",
    {
      $documentation:
        "A `catch` node; only makes sense as part of a `try` statement",
      $propdoc: {
        argname:
          "[AST_SymbolCatch|AST_Destructuring|AST_Expansion|AST_DefaultAssign] symbol for the exception",
      },
      _walk: function (e) {
        return e._visit(this, function () {
          this.argname._walk(e);
          S(this, e);
        });
      },
    },
    T
  );
  var me = A(
    "Finally",
    null,
    {
      $documentation:
        "A `finally` node; only makes sense as part of a `try` statement",
    },
    T
  );
  var _e = A(
    "Definitions",
    "definitions",
    {
      $documentation:
        "Base class for `var` or `const` nodes (variable declarations/initializations)",
      $propdoc: { definitions: "[AST_VarDef*] array of variable definitions" },
      _walk: function (e) {
        return e._visit(this, function () {
          var n = this.definitions;
          for (var t = 0, i = n.length; t < i; t++) n[t]._walk(e);
        });
      },
    },
    x
  );
  var De = A("Var", null, { $documentation: "A `var` statement" }, _e);
  var ge = A("Let", null, { $documentation: "A `let` statement" }, _e);
  var be = A("Const", null, { $documentation: "A `const` statement" }, _e);
  var ye = A("NameMapping", "foreign_name name", {
    $documentation:
      "The part of the export/import statement that declare names from a module.",
    $propdoc: {
      foreign_name:
        "[AST_SymbolExportForeign|AST_SymbolImportForeign] The name being exported/imported (as specified in the module)",
      name: "[AST_SymbolExport|AST_SymbolImport] The name as it is visible to this module.",
    },
    _walk: function (e) {
      return e._visit(this, function () {
        this.foreign_name._walk(e);
        this.name._walk(e);
      });
    },
  });
  var Ee = A("Import", "imported_name imported_names module_name", {
    $documentation: "An `import` statement",
    $propdoc: {
      imported_name:
        "[AST_SymbolImport] The name of the variable holding the module's default export.",
      imported_names:
        "[AST_NameMapping*] The names of non-default imported variables",
      module_name:
        "[AST_String] String literal describing where this module came from",
    },
    _walk: function (e) {
      return e._visit(this, function () {
        if (this.imported_name) this.imported_name._walk(e);
        if (this.imported_names)
          this.imported_names.forEach(function (n) {
            n._walk(e);
          });
        this.module_name._walk(e);
      });
    },
  });
  var Ae = A(
    "Export",
    "exported_definition exported_value is_default exported_names module_name",
    {
      $documentation: "An `export` statement",
      $propdoc: {
        exported_definition:
          "[AST_Defun|AST_Definitions|AST_DefClass?] An exported definition",
        exported_value: "[AST_Node?] An exported value",
        exported_names: "[AST_NameMapping*?] List of exported names",
        module_name: "[AST_String?] Name of the file to load exports from",
        is_default:
          "[Boolean] Whether this is the default exported value of this module",
      },
      _walk: function (e) {
        e._visit(this, function () {
          if (this.exported_definition) this.exported_definition._walk(e);
          if (this.exported_value) this.exported_value._walk(e);
          if (this.exported_names)
            this.exported_names.forEach(function (n) {
              n._walk(e);
            });
          if (this.module_name) this.module_name._walk(e);
        });
      },
    },
    x
  );
  var Fe = A("VarDef", "name value", {
    $documentation:
      "A variable declaration; only appears in a AST_Definitions node",
    $propdoc: {
      name: "[AST_Destructuring|AST_SymbolConst|AST_SymbolLet|AST_SymbolVar] name of the variable",
      value: "[AST_Node?] initializer, or null of there's no initializer",
    },
    _walk: function (e) {
      return e._visit(this, function () {
        this.name._walk(e);
        if (this.value) this.value._walk(e);
      });
    },
  });
  var we = A("Call", "expression args", {
    $documentation: "A function call expression",
    $propdoc: {
      expression: "[AST_Node] expression to invoke as function",
      args: "[AST_Node*] array of arguments",
    },
    _walk: function (e) {
      return e._visit(this, function () {
        var n = this.args;
        for (var t = 0, i = n.length; t < i; t++) n[t]._walk(e);
        this.expression._walk(e);
      });
    },
  });
  var xe = A(
    "New",
    null,
    {
      $documentation:
        "An object instantiation.  Derives from a function call since it has exactly the same properties",
    },
    we
  );
  var Ce = A("Sequence", "expressions", {
    $documentation: "A sequence expression (comma-separated expressions)",
    $propdoc: {
      expressions: "[AST_Node*] array of expressions (at least two)",
    },
    _walk: function (e) {
      return e._visit(this, function () {
        this.expressions.forEach(function (n) {
          n._walk(e);
        });
      });
    },
  });
  var ke = A("PropAccess", "expression property", {
    $documentation:
      'Base class for property access expressions, i.e. `a.foo` or `a["foo"]`',
    $propdoc: {
      expression: "[AST_Node] the \u201Ccontainer\u201D expression",
      property:
        "[AST_Node|string] the property to access.  For AST_Dot this is always a plain string, while for AST_Sub it's an arbitrary AST_Node",
    },
  });
  var Be = A(
    "Dot",
    null,
    {
      $documentation: "A dotted property access expression",
      _walk: function (e) {
        return e._visit(this, function () {
          this.expression._walk(e);
        });
      },
    },
    ke
  );
  var Se = A(
    "Sub",
    null,
    {
      $documentation: 'Index-style property access, i.e. `a["foo"]`',
      _walk: function (e) {
        return e._visit(this, function () {
          this.expression._walk(e);
          this.property._walk(e);
        });
      },
    },
    ke
  );
  var Te = A("Unary", "operator expression", {
    $documentation: "Base class for unary expressions",
    $propdoc: {
      operator: "[string] the operator",
      expression: "[AST_Node] expression that this unary operator applies to",
    },
    _walk: function (e) {
      return e._visit(this, function () {
        this.expression._walk(e);
      });
    },
  });
  var Oe = A(
    "UnaryPrefix",
    null,
    { $documentation: "Unary prefix expression, i.e. `typeof i` or `++i`" },
    Te
  );
  var $e = A(
    "UnaryPostfix",
    null,
    { $documentation: "Unary postfix expression, i.e. `i++`" },
    Te
  );
  var Me = A("Binary", "operator left right", {
    $documentation: "Binary expression, i.e. `a + b`",
    $propdoc: {
      left: "[AST_Node] left-hand side expression",
      operator: "[string] the operator",
      right: "[AST_Node] right-hand side expression",
    },
    _walk: function (e) {
      return e._visit(this, function () {
        this.left._walk(e);
        this.right._walk(e);
      });
    },
  });
  var qe = A("Conditional", "condition consequent alternative", {
    $documentation:
      "Conditional expression using the ternary operator, i.e. `a ? b : c`",
    $propdoc: {
      condition: "[AST_Node]",
      consequent: "[AST_Node]",
      alternative: "[AST_Node]",
    },
    _walk: function (e) {
      return e._visit(this, function () {
        this.condition._walk(e);
        this.consequent._walk(e);
        this.alternative._walk(e);
      });
    },
  });
  var ze = A(
    "Assign",
    null,
    { $documentation: "An assignment expression \u2014 `a = b + 5`" },
    Me
  );
  var je = A(
    "DefaultAssign",
    null,
    {
      $documentation: "A default assignment expression like in `(a = 3) => a`",
    },
    Me
  );
  var Ne = A("Array", "elements", {
    $documentation: "An array literal",
    $propdoc: { elements: "[AST_Node*] array of elements" },
    _walk: function (e) {
      return e._visit(this, function () {
        var n = this.elements;
        for (var t = 0, i = n.length; t < i; t++) n[t]._walk(e);
      });
    },
  });
  var He = A("Object", "properties", {
    $documentation: "An object literal",
    $propdoc: { properties: "[AST_ObjectProperty*] array of properties" },
    _walk: function (e) {
      return e._visit(this, function () {
        var n = this.properties;
        for (var t = 0, i = n.length; t < i; t++) n[t]._walk(e);
      });
    },
  });
  var Ie = A("ObjectProperty", "key value", {
    $documentation: "Base class for literal object properties",
    $propdoc: {
      key: "[string|AST_Node] property name. For ObjectKeyVal this is a string. For getters, setters and computed property this is an AST_Node.",
      value:
        "[AST_Node] property value.  For getters and setters this is an AST_Accessor.",
    },
    _walk: function (e) {
      return e._visit(this, function () {
        if (this.key instanceof w) this.key._walk(e);
        this.value._walk(e);
      });
    },
  });
  var Re = A(
    "ObjectKeyVal",
    "quote",
    {
      $documentation: "A key: value object property",
      $propdoc: { quote: "[string] the original quote character" },
    },
    Ie
  );
  var Ue = A(
    "ObjectSetter",
    "quote static",
    {
      $propdoc: {
        quote: "[string|undefined] the original quote character, if any",
        static: "[boolean] whether this is a static setter (classes only)",
      },
      $documentation: "An object setter property",
    },
    Ie
  );
  var Pe = A(
    "ObjectGetter",
    "quote static",
    {
      $propdoc: {
        quote: "[string|undefined] the original quote character, if any",
        static: "[boolean] whether this is a static getter (classes only)",
      },
      $documentation: "An object getter property",
    },
    Ie
  );
  var Le = A(
    "ConciseMethod",
    "quote static is_generator async",
    {
      $propdoc: {
        quote: "[string|undefined] the original quote character, if any",
        static: "[boolean] is this method static (classes only)",
        is_generator: "[boolean] is this a generator method",
        async: "[boolean] is this method async",
      },
      $documentation: "An ES6 concise method inside an object or class",
    },
    Ie
  );
  var Ve = A(
    "Class",
    "name extends properties inlined",
    {
      $propdoc: {
        name: "[AST_SymbolClass|AST_SymbolDefClass?] optional class name.",
        extends: "[AST_Node]? optional parent class",
        properties: "[AST_ObjectProperty*] array of properties",
      },
      $documentation: "An ES6 class",
      _walk: function (e) {
        return e._visit(this, function () {
          if (this.name) this.name._walk(e);
          if (this.extends) this.extends._walk(e);
          this.properties.forEach(function (n) {
            n._walk(e);
          });
        });
      },
    },
    L
  );
  var Ye = A("DefClass", null, { $documentation: "A class definition" }, Ve);
  var Je = A(
    "ClassExpression",
    null,
    { $documentation: "A class expression." },
    Ve
  );
  var We = A("Symbol", "scope name thedef", {
    $propdoc: {
      name: "[string] name of this symbol",
      scope:
        "[AST_Scope/S] the current scope (not necessarily the definition scope)",
      thedef: "[SymbolDef/S] the definition of this symbol",
    },
    $documentation: "Base class for all symbols",
  });
  var Xe = A("NewTarget", null, {
    $documentation: "A reference to new.target",
  });
  var Ge = A(
    "SymbolDeclaration",
    "init",
    {
      $documentation:
        "A declaration symbol (symbol in var/const, function name or argument, symbol in catch)",
    },
    We
  );
  var Ze = A(
    "SymbolVar",
    null,
    { $documentation: "Symbol defining a variable" },
    Ge
  );
  var Ke = A(
    "SymbolBlockDeclaration",
    null,
    { $documentation: "Base class for block-scoped declaration symbols" },
    Ge
  );
  var Qe = A(
    "SymbolConst",
    null,
    { $documentation: "A constant declaration" },
    Ke
  );
  var en = A(
    "SymbolLet",
    null,
    { $documentation: "A block-scoped `let` declaration" },
    Ke
  );
  var nn = A(
    "SymbolFunarg",
    null,
    { $documentation: "Symbol naming a function argument" },
    Ze
  );
  var tn = A(
    "SymbolDefun",
    null,
    { $documentation: "Symbol defining a function" },
    Ge
  );
  var rn = A(
    "SymbolMethod",
    null,
    { $documentation: "Symbol in an object defining a method" },
    We
  );
  var on = A(
    "SymbolLambda",
    null,
    { $documentation: "Symbol naming a function expression" },
    Ge
  );
  var an = A(
    "SymbolDefClass",
    null,
    {
      $documentation:
        "Symbol naming a class's name in a class declaration. Lexically scoped to its containing scope, and accessible within the class.",
    },
    Ke
  );
  var sn = A(
    "SymbolClass",
    null,
    {
      $documentation:
        "Symbol naming a class's name. Lexically scoped to the class.",
    },
    Ge
  );
  var un = A(
    "SymbolCatch",
    null,
    { $documentation: "Symbol naming the exception in catch" },
    Ke
  );
  var fn = A(
    "SymbolImport",
    null,
    { $documentation: "Symbol referring to an imported name" },
    Ke
  );
  var cn = A(
    "SymbolImportForeign",
    null,
    {
      $documentation:
        "A symbol imported from a module, but it is defined in the other module, and its real name is irrelevant for this module's purposes",
    },
    We
  );
  var ln = A(
    "Label",
    "references",
    {
      $documentation: "Symbol naming a label (declaration)",
      $propdoc: {
        references:
          "[AST_LoopControl*] a list of nodes referring to this label",
      },
      initialize: function () {
        this.references = [];
        this.thedef = this;
      },
    },
    We
  );
  var pn = A(
    "SymbolRef",
    null,
    { $documentation: "Reference to some symbol (not definition/declaration)" },
    We
  );
  var dn = A(
    "SymbolExport",
    null,
    { $documentation: "Symbol referring to a name to export" },
    pn
  );
  var hn = A(
    "SymbolExportForeign",
    null,
    {
      $documentation:
        "A symbol exported from this module, but it is used in the other module, and its real name is irrelevant for this module's purposes",
    },
    We
  );
  var vn = A(
    "LabelRef",
    null,
    { $documentation: "Reference to a label symbol" },
    We
  );
  var mn = A("This", null, { $documentation: "The `this` symbol" }, We);
  var _n = A("Super", null, { $documentation: "The `super` symbol" }, mn);
  var Dn = A("Constant", null, {
    $documentation: "Base class for all constants",
    getValue: function () {
      return this.value;
    },
  });
  var gn = A(
    "String",
    "value quote",
    {
      $documentation: "A string literal",
      $propdoc: {
        value: "[string] the contents of this string",
        quote: "[string] the original quote character",
      },
    },
    Dn
  );
  var bn = A(
    "Number",
    "value literal",
    {
      $documentation: "A number literal",
      $propdoc: {
        value: "[number] the numeric value",
        literal: "[string] numeric value as string (optional)",
      },
    },
    Dn
  );
  var yn = A(
    "RegExp",
    "value",
    {
      $documentation: "A regexp literal",
      $propdoc: { value: "[RegExp] the actual regexp" },
    },
    Dn
  );
  var En = A("Atom", null, { $documentation: "Base class for atoms" }, Dn);
  var An = A(
    "Null",
    null,
    { $documentation: "The `null` atom", value: null },
    En
  );
  var Fn = A(
    "NaN",
    null,
    { $documentation: "The impossible value", value: NaN },
    En
  );
  var wn = A(
    "Undefined",
    null,
    { $documentation: "The `undefined` value", value: void 0 },
    En
  );
  var xn = A(
    "Hole",
    null,
    { $documentation: "A hole in an array", value: void 0 },
    En
  );
  var Cn = A(
    "Infinity",
    null,
    { $documentation: "The `Infinity` value", value: 1 / 0 },
    En
  );
  var kn = A(
    "Boolean",
    null,
    { $documentation: "Base class for booleans" },
    En
  );
  var Bn = A(
    "False",
    null,
    { $documentation: "The `false` atom", value: !1 },
    kn
  );
  var Sn = A(
    "True",
    null,
    { $documentation: "The `true` atom", value: !0 },
    kn
  );
  var Tn = A("Await", "expression", {
    $documentation: "An `await` statement",
    $propdoc: {
      expression: "[AST_Node] the mandatory expression being awaited",
    },
    _walk: function (e) {
      return e._visit(this, function () {
        this.expression._walk(e);
      });
    },
  });
  var On = A("Yield", "expression is_star", {
    $documentation: "A `yield` statement",
    $propdoc: {
      expression:
        "[AST_Node?] the value returned or thrown by this statement; could be null (representing undefined) but only when is_star is set to false",
      is_star: "[Boolean] Whether this is a yield or yield* statement",
    },
    _walk: function (e) {
      return e._visit(
        this,
        this.expression &&
          function () {
            this.expression._walk(e);
          }
      );
    },
  });
  function $n(e) {
    this.visit = e;
    this.stack = [];
    this.directives = Object.create(null);
  }
  $n.prototype = {
    _visit: function (e, n) {
      this.push(e);
      var t = this.visit(
        e,
        n
          ? function () {
              n.call(e);
            }
          : u
      );
      if (!t && n) n.call(e);
      this.pop();
      return t;
    },
    parent: function (e) {
      return this.stack[this.stack.length - 2 - (e || 0)];
    },
    push: function (e) {
      if (e instanceof J) this.directives = Object.create(this.directives);
      else if (e instanceof k && !this.directives[e.value])
        this.directives[e.value] = e;
      else if (e instanceof Ve) {
        this.directives = Object.create(this.directives);
        if (!this.directives["use strict"]) this.directives["use strict"] = e;
      }
      this.stack.push(e);
    },
    pop: function () {
      var e = this.stack.pop();
      if (e instanceof J || e instanceof Ve)
        this.directives = Object.getPrototypeOf(this.directives);
    },
    self: function () {
      return this.stack[this.stack.length - 1];
    },
    find_parent: function (e) {
      var n = this.stack;
      for (var t = n.length; --t >= 0; ) {
        var i = n[t];
        if (i instanceof e) return i;
      }
    },
    has_directive: function (e) {
      var n = this.directives[e];
      if (n) return n;
      var t = this.stack[this.stack.length - 1];
      if (t instanceof L && t.body)
        for (var i = 0; i < t.body.length; ++i) {
          var r = t.body[i];
          if (!(r instanceof k)) break;
          if (r.value == e) return r;
        }
    },
    loopcontrol_target: function (e) {
      var n = this.stack;
      if (e.label) {
        for (var t = n.length; --t >= 0; )
          if ((i = n[t]) instanceof q && i.label.name == e.label.name)
            return i.body;
      } else
        for (t = n.length; --t >= 0; ) {
          var i;
          if ((i = n[t]) instanceof z || (e instanceof se && i instanceof ce))
            return i;
        }
    },
  };
  var Mn =
    "break case catch class const continue debugger default delete do else export extends finally for function if in instanceof let new return switch throw try typeof var void while with";
  var qn = "false null true";
  var zn =
    "enum implements import interface package private protected public static super this " +
    qn +
    " " +
    Mn;
  var jn = "return new delete throw else case yield await";
  Mn = D(Mn);
  zn = D(zn);
  jn = D(jn);
  qn = D(qn);
  var Nn = D(n("+-*&%=<>!?|~^"));
  var Hn = /[0-9a-f]/i;
  var In = /^0x[0-9a-f]+$/i;
  var Rn = /^0[0-7]+$/;
  var Un = /^0o[0-7]+$/i;
  var Pn = /^0b[01]+$/i;
  var Ln = /^\d*\.?\d*(?:e[+-]?\d*(?:\d\.?|\.?\d)\d*)?$/i;
  var Vn = D([
    "in",
    "instanceof",
    "typeof",
    "new",
    "void",
    "delete",
    "++",
    "--",
    "+",
    "-",
    "!",
    "~",
    "&",
    "|",
    "^",
    "*",
    "**",
    "/",
    "%",
    ">>",
    "<<",
    ">>>",
    "<",
    ">",
    "<=",
    ">=",
    "==",
    "===",
    "!=",
    "!==",
    "?",
    "=",
    "+=",
    "-=",
    "/=",
    "*=",
    "**=",
    "%=",
    ">>=",
    "<<=",
    ">>>=",
    "|=",
    "^=",
    "&=",
    "&&",
    "||",
  ]);
  var Yn = D(
    n(
      " \xA0\n\r\t\f\x0B\u200B\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF"
    )
  );
  var Jn = D(n("\n\r\u2028\u2029"));
  var Wn = D(n(";]),:"));
  var Xn = D(n("[{(,;:"));
  var Gn = D(n("[]{}(),;:"));
  var Zn = {
    ID_Start:
      /[A-Za-z\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0561-\u0587\u05D0-\u05EA\u05F0-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u08A0-\u08B4\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C60\u0C61\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D5F-\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1877\u1880-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4B\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1CE9-\u1CEC\u1CEE-\u1CF1\u1CF5\u1CF6\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2118-\u211D\u2124\u2126\u2128\u212A-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u3005-\u3007\u3021-\u3029\u3031-\u3035\u3038-\u303C\u3041-\u3096\u309B-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FD5\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6EF\uA717-\uA71F\uA722-\uA788\uA78B-\uA7AD\uA7B0-\uA7B7\uA7F7-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA8FD\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uA9E0-\uA9E4\uA9E6-\uA9EF\uA9FA-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB65\uAB70-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDD40-\uDD74\uDE80-\uDE9C\uDEA0-\uDED0\uDF00-\uDF1F\uDF30-\uDF4A\uDF50-\uDF75\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF\uDFD1-\uDFD5]|\uD801[\uDC00-\uDC9D\uDD00-\uDD27\uDD30-\uDD63\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDCE0-\uDCF2\uDCF4\uDCF5\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00\uDE10-\uDE13\uDE15-\uDE17\uDE19-\uDE33\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE4\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2]|\uD804[\uDC03-\uDC37\uDC83-\uDCAF\uDCD0-\uDCE8\uDD03-\uDD26\uDD50-\uDD72\uDD76\uDD83-\uDDB2\uDDC1-\uDDC4\uDDDA\uDDDC\uDE00-\uDE11\uDE13-\uDE2B\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEDE\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3D\uDF50\uDF5D-\uDF61]|\uD805[\uDC80-\uDCAF\uDCC4\uDCC5\uDCC7\uDD80-\uDDAE\uDDD8-\uDDDB\uDE00-\uDE2F\uDE44\uDE80-\uDEAA\uDF00-\uDF19]|\uD806[\uDCA0-\uDCDF\uDCFF\uDEC0-\uDEF8]|\uD808[\uDC00-\uDF99]|\uD809[\uDC00-\uDC6E\uDC80-\uDD43]|[\uD80C\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDED0-\uDEED\uDF00-\uDF2F\uDF40-\uDF43\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDF00-\uDF44\uDF50\uDF93-\uDF9F]|\uD82C[\uDC00\uDC01]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB]|\uD83A[\uDC00-\uDCC4]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD869[\uDC00-\uDED6\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1]|\uD87E[\uDC00-\uDE1D]/,
    ID_Continue:
      /[0-9A-Z_a-z\xAA\xB5\xB7\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0300-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u0483-\u0487\u048A-\u052F\u0531-\u0556\u0559\u0561-\u0587\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u05D0-\u05EA\u05F0-\u05F2\u0610-\u061A\u0620-\u0669\u066E-\u06D3\u06D5-\u06DC\u06DF-\u06E8\u06EA-\u06FC\u06FF\u0710-\u074A\u074D-\u07B1\u07C0-\u07F5\u07FA\u0800-\u082D\u0840-\u085B\u08A0-\u08B4\u08E3-\u0963\u0966-\u096F\u0971-\u0983\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BC-\u09C4\u09C7\u09C8\u09CB-\u09CE\u09D7\u09DC\u09DD\u09DF-\u09E3\u09E6-\u09F1\u0A01-\u0A03\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A3C\u0A3E-\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A59-\u0A5C\u0A5E\u0A66-\u0A75\u0A81-\u0A83\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABC-\u0AC5\u0AC7-\u0AC9\u0ACB-\u0ACD\u0AD0\u0AE0-\u0AE3\u0AE6-\u0AEF\u0AF9\u0B01-\u0B03\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3C-\u0B44\u0B47\u0B48\u0B4B-\u0B4D\u0B56\u0B57\u0B5C\u0B5D\u0B5F-\u0B63\u0B66-\u0B6F\u0B71\u0B82\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BBE-\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCD\u0BD0\u0BD7\u0BE6-\u0BEF\u0C00-\u0C03\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D-\u0C44\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C58-\u0C5A\u0C60-\u0C63\u0C66-\u0C6F\u0C81-\u0C83\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBC-\u0CC4\u0CC6-\u0CC8\u0CCA-\u0CCD\u0CD5\u0CD6\u0CDE\u0CE0-\u0CE3\u0CE6-\u0CEF\u0CF1\u0CF2\u0D01-\u0D03\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D-\u0D44\u0D46-\u0D48\u0D4A-\u0D4E\u0D57\u0D5F-\u0D63\u0D66-\u0D6F\u0D7A-\u0D7F\u0D82\u0D83\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0DCA\u0DCF-\u0DD4\u0DD6\u0DD8-\u0DDF\u0DE6-\u0DEF\u0DF2\u0DF3\u0E01-\u0E3A\u0E40-\u0E4E\u0E50-\u0E59\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB9\u0EBB-\u0EBD\u0EC0-\u0EC4\u0EC6\u0EC8-\u0ECD\u0ED0-\u0ED9\u0EDC-\u0EDF\u0F00\u0F18\u0F19\u0F20-\u0F29\u0F35\u0F37\u0F39\u0F3E-\u0F47\u0F49-\u0F6C\u0F71-\u0F84\u0F86-\u0F97\u0F99-\u0FBC\u0FC6\u1000-\u1049\u1050-\u109D\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u135D-\u135F\u1369-\u1371\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1714\u1720-\u1734\u1740-\u1753\u1760-\u176C\u176E-\u1770\u1772\u1773\u1780-\u17D3\u17D7\u17DC\u17DD\u17E0-\u17E9\u180B-\u180D\u1810-\u1819\u1820-\u1877\u1880-\u18AA\u18B0-\u18F5\u1900-\u191E\u1920-\u192B\u1930-\u193B\u1946-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u19D0-\u19DA\u1A00-\u1A1B\u1A20-\u1A5E\u1A60-\u1A7C\u1A7F-\u1A89\u1A90-\u1A99\u1AA7\u1AB0-\u1ABD\u1B00-\u1B4B\u1B50-\u1B59\u1B6B-\u1B73\u1B80-\u1BF3\u1C00-\u1C37\u1C40-\u1C49\u1C4D-\u1C7D\u1CD0-\u1CD2\u1CD4-\u1CF6\u1CF8\u1CF9\u1D00-\u1DF5\u1DFC-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u203F\u2040\u2054\u2071\u207F\u2090-\u209C\u20D0-\u20DC\u20E1\u20E5-\u20F0\u2102\u2107\u210A-\u2113\u2115\u2118-\u211D\u2124\u2126\u2128\u212A-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D7F-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2DE0-\u2DFF\u3005-\u3007\u3021-\u302F\u3031-\u3035\u3038-\u303C\u3041-\u3096\u3099-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FD5\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA62B\uA640-\uA66F\uA674-\uA67D\uA67F-\uA6F1\uA717-\uA71F\uA722-\uA788\uA78B-\uA7AD\uA7B0-\uA7B7\uA7F7-\uA827\uA840-\uA873\uA880-\uA8C4\uA8D0-\uA8D9\uA8E0-\uA8F7\uA8FB\uA8FD\uA900-\uA92D\uA930-\uA953\uA960-\uA97C\uA980-\uA9C0\uA9CF-\uA9D9\uA9E0-\uA9FE\uAA00-\uAA36\uAA40-\uAA4D\uAA50-\uAA59\uAA60-\uAA76\uAA7A-\uAAC2\uAADB-\uAADD\uAAE0-\uAAEF\uAAF2-\uAAF6\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB65\uAB70-\uABEA\uABEC\uABED\uABF0-\uABF9\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE00-\uFE0F\uFE20-\uFE2F\uFE33\uFE34\uFE4D-\uFE4F\uFE70-\uFE74\uFE76-\uFEFC\uFF10-\uFF19\uFF21-\uFF3A\uFF3F\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDD40-\uDD74\uDDFD\uDE80-\uDE9C\uDEA0-\uDED0\uDEE0\uDF00-\uDF1F\uDF30-\uDF4A\uDF50-\uDF7A\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF\uDFD1-\uDFD5]|\uD801[\uDC00-\uDC9D\uDCA0-\uDCA9\uDD00-\uDD27\uDD30-\uDD63\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDCE0-\uDCF2\uDCF4\uDCF5\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00-\uDE03\uDE05\uDE06\uDE0C-\uDE13\uDE15-\uDE17\uDE19-\uDE33\uDE38-\uDE3A\uDE3F\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE6\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2]|\uD804[\uDC00-\uDC46\uDC66-\uDC6F\uDC7F-\uDCBA\uDCD0-\uDCE8\uDCF0-\uDCF9\uDD00-\uDD34\uDD36-\uDD3F\uDD50-\uDD73\uDD76\uDD80-\uDDC4\uDDCA-\uDDCC\uDDD0-\uDDDA\uDDDC\uDE00-\uDE11\uDE13-\uDE37\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEEA\uDEF0-\uDEF9\uDF00-\uDF03\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3C-\uDF44\uDF47\uDF48\uDF4B-\uDF4D\uDF50\uDF57\uDF5D-\uDF63\uDF66-\uDF6C\uDF70-\uDF74]|\uD805[\uDC80-\uDCC5\uDCC7\uDCD0-\uDCD9\uDD80-\uDDB5\uDDB8-\uDDC0\uDDD8-\uDDDD\uDE00-\uDE40\uDE44\uDE50-\uDE59\uDE80-\uDEB7\uDEC0-\uDEC9\uDF00-\uDF19\uDF1D-\uDF2B\uDF30-\uDF39]|\uD806[\uDCA0-\uDCE9\uDCFF\uDEC0-\uDEF8]|\uD808[\uDC00-\uDF99]|\uD809[\uDC00-\uDC6E\uDC80-\uDD43]|[\uD80C\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDE60-\uDE69\uDED0-\uDEED\uDEF0-\uDEF4\uDF00-\uDF36\uDF40-\uDF43\uDF50-\uDF59\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDF00-\uDF44\uDF50-\uDF7E\uDF8F-\uDF9F]|\uD82C[\uDC00\uDC01]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99\uDC9D\uDC9E]|\uD834[\uDD65-\uDD69\uDD6D-\uDD72\uDD7B-\uDD82\uDD85-\uDD8B\uDDAA-\uDDAD\uDE42-\uDE44]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB\uDFCE-\uDFFF]|\uD836[\uDE00-\uDE36\uDE3B-\uDE6C\uDE75\uDE84\uDE9B-\uDE9F\uDEA1-\uDEAF]|\uD83A[\uDC00-\uDCC4\uDCD0-\uDCD6]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD869[\uDC00-\uDED6\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1]|\uD87E[\uDC00-\uDE1D]|\uDB40[\uDD00-\uDDEF]/,
  };
  function Kn(e, n) {
    var t = e.charAt(n);
    if (Qn(t)) {
      var i = e.charAt(n + 1);
      if (et(i)) return t + i;
    }
    if (et(t)) {
      var r = e.charAt(n - 1);
      if (Qn(r)) return r + t;
    }
    return t;
  }
  function Qn(e) {
    if ("string" == typeof e) e = e.charCodeAt(0);
    return e >= 55296 && e <= 56319;
  }
  function et(e) {
    if ("string" == typeof e) e = e.charCodeAt(0);
    return e >= 56320 && e <= 57343;
  }
  function nt(e) {
    return e >= 48 && e <= 57;
  }
  function tt(e) {
    if ("string" != typeof e || zn(e)) return !1;
    return !0;
  }
  function it(e) {
    var n = e.charCodeAt(0);
    return Zn.ID_Start.test(e) || 36 == n || 95 == n;
  }
  function rt(e) {
    var n = e.charCodeAt(0);
    return (
      Zn.ID_Continue.test(e) || 36 == n || 95 == n || 8204 == n || 8205 == n
    );
  }
  function ot(e) {
    return /^[a-z_$][a-z0-9_$]*$/i.test(e);
  }
  function at(e, n, t, i, r) {
    this.message = e;
    this.filename = n;
    this.line = t;
    this.col = i;
    this.pos = r;
  }
  at.prototype = Object.create(Error.prototype);
  at.prototype.constructor = at;
  at.prototype.name = "SyntaxError";
  r(at);
  function st(e, n, t, i, r) {
    throw new at(e, n, t, i, r);
  }
  function ut(e, n, t) {
    return e.type == n && (null == t || e.value == t);
  }
  var ft = {};
  var ct = D(["typeof", "void", "delete", "--", "++", "!", "~", "-", "+"]);
  var lt = D(["--", "++"]);
  var pt = D([
    "=",
    "+=",
    "-=",
    "/=",
    "*=",
    "**=",
    "%=",
    ">>=",
    "<<=",
    ">>>=",
    "|=",
    "^=",
    "&=",
  ]);
  var dt = (function (e, n) {
    for (var t = 0; t < e.length; ++t) {
      var i = e[t];
      for (var r = 0; r < i.length; ++r) n[i[r]] = t + 1;
    }
    return n;
  })(
    [
      ["||"],
      ["&&"],
      ["|"],
      ["^"],
      ["&"],
      ["==", "===", "!=", "!=="],
      ["<", ">", "<=", ">=", "in", "instanceof"],
      [">>", "<<", ">>>"],
      ["+", "-"],
      ["*", "/", "%"],
      ["**"],
    ],
    {}
  );
  var ht = D(["atom", "num", "string", "regexp", "name"]);
  function vt(e, n) {
    n = a(
      n,
      {
        bare_returns: !1,
        ecma: 8,
        expression: !1,
        filename: null,
        html5_comments: !0,
        shebang: !0,
        strict: !1,
        toplevel: null,
      },
      !0
    );
    var t = {
      input:
        "string" == typeof e
          ? (function (e, n, t, i) {
              var r = {
                text: e,
                filename: n,
                pos: 0,
                tokpos: 0,
                line: 1,
                tokline: 0,
                col: 0,
                tokcol: 0,
                newline_before: !1,
                regex_allowed: !1,
                brace_counter: 0,
                template_braces: [],
                comments_before: [],
                directives: {},
                directive_stack: [],
              };
              function o() {
                return Kn(r.text, r.pos);
              }
              function a(e, n) {
                var t = Kn(r.text, r.pos++);
                if (e && !t) throw ft;
                if (Jn(t)) {
                  r.newline_before = r.newline_before || !n;
                  ++r.line;
                  r.col = 0;
                  if (!n && "\r" == t && "\n" == o()) {
                    ++r.pos;
                    t = "\n";
                  }
                } else {
                  if (t.length > 1) {
                    ++r.pos;
                    ++r.col;
                  }
                  ++r.col;
                }
                return t;
              }
              function s(e) {
                for (; e-- > 0; ) a();
              }
              function u(e) {
                return r.text.substr(r.pos, e.length) == e;
              }
              function f(e, n) {
                var t = r.text.indexOf(e, r.pos);
                if (n && -1 == t) throw ft;
                return t;
              }
              function c() {
                r.tokline = r.line;
                r.tokcol = r.col;
                r.tokpos = r.pos;
              }
              var l = !1;
              function p(t, i, o) {
                r.regex_allowed =
                  ("operator" == t && !lt(i)) ||
                  ("keyword" == t && jn(i)) ||
                  ("punc" == t && Xn(i)) ||
                  "arrow" == t;
                if ("punc" == t && "." == i) l = !0;
                else if (!o) l = !1;
                var a = {
                  type: t,
                  value: i,
                  line: r.tokline,
                  col: r.tokcol,
                  pos: r.tokpos,
                  endline: r.line,
                  endcol: r.col,
                  endpos: r.pos,
                  nlb: r.newline_before,
                  file: n,
                };
                if (/^(?:num|string|regexp)$/i.test(t))
                  a.raw = e.substring(a.pos, a.endpos);
                if (!o) {
                  a.comments_before = r.comments_before;
                  a.comments_after = r.comments_before = [];
                }
                r.newline_before = !1;
                return new F(a);
              }
              function d() {
                for (; Yn(o()); ) a();
              }
              function h(e) {
                st(e, n, r.tokline, r.tokcol, r.tokpos);
              }
              function v(e) {
                var n = !1,
                  t = !1,
                  i = !1,
                  r = "." == e;
                var s = (function (e) {
                  var n,
                    t = "",
                    i = 0;
                  for (; (n = o()) && e(n, i++); ) t += a();
                  return t;
                })(function (o, a) {
                  switch (o.charCodeAt(0)) {
                    case 98:
                    case 66:
                      return (i = !0);
                    case 111:
                    case 79:
                    case 120:
                    case 88:
                      return i ? !1 : (i = !0);
                    case 101:
                    case 69:
                      return i ? !0 : n ? !1 : (n = t = !0);
                    case 45:
                      return t || (0 == a && !e);
                    case 43:
                      return t;
                    case ((t = !1), 46):
                      return !r && !i && !n ? (r = !0) : !1;
                  }
                  return Hn.test(o);
                });
                if (e) s = e + s;
                if (Rn.test(s) && T.has_directive("use strict"))
                  h("Legacy octal literals are not allowed in strict mode");
                var u = (function (e) {
                  if (In.test(e)) return parseInt(e.substr(2), 16);
                  else if (Rn.test(e)) return parseInt(e.substr(1), 8);
                  else if (Un.test(e)) return parseInt(e.substr(2), 8);
                  else if (Pn.test(e)) return parseInt(e.substr(2), 2);
                  else if (Ln.test(e)) return parseFloat(e);
                  else {
                    var n = parseFloat(e);
                    if (n == e) return n;
                  }
                })(s);
                if (!isNaN(u)) return p("num", u);
                else h("Invalid syntax: " + s);
              }
              function m(e) {
                var n = a(!0, e);
                switch (n.charCodeAt(0)) {
                  case 110:
                    return "\n";
                  case 114:
                    return "\r";
                  case 116:
                    return "\t";
                  case 98:
                    return "\b";
                  case 118:
                    return "\x0B";
                  case 102:
                    return "\f";
                  case 120:
                    return String.fromCharCode(_(2));
                  case 117:
                    if ("{" == o()) {
                      a(!0);
                      if ("}" === o()) h("Expecting hex-character between {}");
                      for (; "0" == o(); ) a(!0);
                      var t,
                        i = f("}", !0) - r.pos;
                      if (i > 6 || (t = _(i)) > 1114111)
                        h("Unicode reference out of bounce");
                      a(!0);
                      return (function (e) {
                        if (e > 65535)
                          return (
                            String.fromCharCode(55296 + ((e -= 65536) >> 10)) +
                            String.fromCharCode((e % 1024) + 56320)
                          );
                        return String.fromCharCode(e);
                      })(t);
                    }
                    return String.fromCharCode(_(4));
                  case 10:
                    return "";
                  case 13:
                    if ("\n" == o()) {
                      a(!0, e);
                      return "";
                    }
                }
                if (n >= "0" && n <= "7")
                  return (function (e) {
                    var n = o();
                    if (n >= "0" && n <= "7")
                      if (
                        (e += a(!0))[0] <= "3" &&
                        (n = o()) >= "0" &&
                        n <= "7"
                      )
                        e += a(!0);
                    if ("0" === e) return "\0";
                    if (e.length > 0 && T.has_directive("use strict"))
                      h(
                        "Legacy octal escape sequences are not allowed in strict mode"
                      );
                    return String.fromCharCode(parseInt(e, 8));
                  })(n);
                return n;
              }
              function _(e) {
                var n = 0;
                for (; e > 0; --e) {
                  var t = parseInt(a(!0), 16);
                  if (isNaN(t)) h("Invalid hex-character pattern in string");
                  n = (n << 4) | t;
                }
                return n;
              }
              var D = S("Unterminated string constant", function (e) {
                var n = a(),
                  t = "";
                for (;;) {
                  var i = a(!0, !0);
                  if ("\\" == i) i = m(!0);
                  else if (Jn(i)) h("Unterminated string constant");
                  else if (i == n) break;
                  t += i;
                }
                var r = p("string", t);
                r.quote = e;
                return r;
              });
              var g = S("Unterminated template", function (e) {
                if (e) r.template_braces.push(r.brace_counter);
                var n,
                  t,
                  i = "",
                  s = "";
                a(!0, !0);
                for (; "`" != (n = a(!0, !0)); ) {
                  if ("\r" == n) {
                    if ("\n" == o()) ++r.pos;
                    n = "\n";
                  } else if ("$" == n && "{" == o()) {
                    a(!0, !0);
                    r.brace_counter++;
                    (t = p(
                      e ? "template_head" : "template_substitution",
                      i
                    )).begin = e;
                    t.raw = s;
                    t.end = !1;
                    return t;
                  }
                  s += n;
                  if ("\\" == n) {
                    var u = r.pos;
                    n = m();
                    s += r.text.substr(u, r.pos - u);
                  }
                  i += n;
                }
                r.template_braces.pop();
                (t = p(
                  e ? "template_head" : "template_substitution",
                  i
                )).begin = e;
                t.raw = s;
                t.end = !0;
                return t;
              });
              function b(e) {
                var n = r.regex_allowed;
                var t,
                  i = (function () {
                    var e = r.text;
                    for (var n = r.pos, t = r.text.length; n < t; ++n) {
                      var i = e[n];
                      if (Jn(i)) return n;
                    }
                    return -1;
                  })();
                if (-1 == i) {
                  t = r.text.substr(r.pos);
                  r.pos = r.text.length;
                } else {
                  t = r.text.substring(r.pos, i);
                  r.pos = i;
                }
                r.col = r.tokcol + (r.pos - r.tokpos);
                r.comments_before.push(p(e, t, !0));
                r.regex_allowed = n;
                return T;
              }
              var y = S("Unterminated multiline comment", function () {
                var e = r.regex_allowed;
                var n = f("*/", !0);
                var t = r.text
                  .substring(r.pos, n)
                  .replace(/\r\n|\r|\u2028|\u2029/g, "\n");
                s(
                  (function (e) {
                    var n = 0;
                    for (var t = 0; t < e.length; t++)
                      if (Qn(e.charCodeAt(t)))
                        if (et(e.charCodeAt(t + 1))) {
                          n++;
                          t++;
                        }
                    return e.length - n;
                  })(t) + 2
                );
                r.comments_before.push(p("comment2", t, !0));
                r.newline_before = r.newline_before || t.indexOf("\n") >= 0;
                r.regex_allowed = e;
                return T;
              });
              var E = S("Unterminated identifier name", function () {
                var e,
                  n = "",
                  t = !1;
                var i = function () {
                  t = !0;
                  a();
                  if ("u" !== o())
                    h("Expecting UnicodeEscapeSequence -- uXXXX or u{XXXX}");
                  return m();
                };
                if ("\\" === (n = o())) {
                  if (!it((n = i())))
                    h("First identifier char is an invalid identifier char");
                } else if (it(n)) a();
                else return "";
                for (; null != (e = o()); ) {
                  if ("\\" === (e = o())) {
                    if (!rt((e = i()))) h("Invalid escaped identifier char");
                  } else {
                    if (!rt(e)) break;
                    a();
                  }
                  n += e;
                }
                if (zn(n) && t)
                  h("Escaped characters are not allowed in keywords");
                return n;
              });
              var A = S("Unterminated regular expression", function (e) {
                var n,
                  t = !1,
                  i = !1;
                for (; (n = a(!0)); )
                  if (Jn(n)) h("Unexpected line terminator");
                  else if (t) {
                    e += "\\" + n;
                    t = !1;
                  } else if ("[" == n) {
                    i = !0;
                    e += n;
                  } else if ("]" == n && i) {
                    i = !1;
                    e += n;
                  } else if ("/" == n && !i) break;
                  else if ("\\" == n) t = !0;
                  else e += n;
                var r = E();
                try {
                  var o = RegExp(e, r);
                  o.raw_source = e;
                  return p("regexp", o);
                } catch (e) {
                  h(e.message);
                }
              });
              function w(e) {
                return p(
                  "operator",
                  (function e(n) {
                    if (!o()) return n;
                    var t = n + o();
                    if (Vn(t)) {
                      a();
                      return e(t);
                    } else return n;
                  })(e || a())
                );
              }
              function x() {
                a();
                switch (o()) {
                  case "/":
                    a();
                    return b("comment1");
                  case "*":
                    a();
                    return y();
                }
                return r.regex_allowed ? A("") : w("/");
              }
              function C() {
                a();
                if (">" === o()) {
                  a();
                  return p("arrow", "=>");
                } else return w("=");
              }
              function k() {
                a();
                if (nt(o().charCodeAt(0))) return v(".");
                if ("." === o()) {
                  a();
                  a();
                  return p("expand", "...");
                }
                return p("punc", ".");
              }
              function B() {
                var e = E();
                if (l) return p("name", e);
                return qn(e)
                  ? p("atom", e)
                  : !Mn(e)
                  ? p("name", e)
                  : Vn(e)
                  ? p("operator", e)
                  : p("keyword", e);
              }
              function S(e, n) {
                return function (t) {
                  try {
                    return n(t);
                  } catch (n) {
                    if (n === ft) h(e);
                    else throw n;
                  }
                };
              }
              function T(e) {
                if (null != e) return A(e);
                if (i && 0 == r.pos && u("#!")) {
                  c();
                  s(2);
                  b("comment5");
                }
                for (;;) {
                  d();
                  c();
                  if (t) {
                    if (u("<!--")) {
                      s(4);
                      b("comment3");
                      continue;
                    }
                    if (u("-->") && r.newline_before) {
                      s(3);
                      b("comment4");
                      continue;
                    }
                  }
                  var n = o();
                  if (!n) return p("eof");
                  var f = n.charCodeAt(0);
                  switch (f) {
                    case 34:
                    case 39:
                      return D(n);
                    case 46:
                      return k();
                    case 47:
                      var l = x();
                      if (l === T) continue;
                      return l;
                    case 61:
                      return C();
                    case 96:
                      return g(!0);
                    case 123:
                      r.brace_counter++;
                      break;
                    case 125:
                      r.brace_counter--;
                      if (
                        r.template_braces.length > 0 &&
                        r.template_braces[r.template_braces.length - 1] ===
                          r.brace_counter
                      )
                        return g(!1);
                  }
                  if (nt(f)) return v();
                  if (Gn(n)) return p("punc", a());
                  if (Nn(n)) return w();
                  if (92 == f || it(n)) return B();
                  break;
                }
                h("Unexpected character '" + n + "'");
              }
              T.next = a;
              T.peek = o;
              T.context = function (e) {
                if (e) r = e;
                return r;
              };
              T.add_directive = function (e) {
                r.directive_stack[r.directive_stack.length - 1].push(e);
                if (void 0 === r.directives[e]) r.directives[e] = 1;
                else r.directives[e]++;
              };
              T.push_directives_stack = function () {
                r.directive_stack.push([]);
              };
              T.pop_directives_stack = function () {
                var e = r.directive_stack[r.directive_stack.length - 1];
                for (var n = 0; n < e.length; n++) r.directives[e[n]]--;
                r.directive_stack.pop();
              };
              T.has_directive = function (e) {
                return r.directives[e] > 0;
              };
              return T;
            })(e, n.filename, n.html5_comments, n.shebang)
          : e,
      token: null,
      prev: null,
      peeked: null,
      in_function: 0,
      in_async: -1,
      in_generator: -1,
      in_directives: !0,
      in_loop: 0,
      labels: [],
    };
    t.token = s();
    function r(e, n) {
      return ut(t.token, e, n);
    }
    function o() {
      return t.peeked || (t.peeked = t.input());
    }
    function s() {
      t.prev = t.token;
      if (t.peeked) {
        t.token = t.peeked;
        t.peeked = null;
      } else t.token = t.input();
      t.in_directives =
        t.in_directives && ("string" == t.token.type || r("punc", ";"));
      return t.token;
    }
    function u() {
      return t.prev;
    }
    function f(e, n, i, r) {
      var o = t.input.context();
      st(
        e,
        o.filename,
        null != n ? n : o.tokline,
        null != i ? i : o.tokcol,
        null != r ? r : o.tokpos
      );
    }
    function c(e, n) {
      f(n, e.line, e.col);
    }
    function l(e) {
      if (null == e) e = t.token;
      c(e, "Unexpected token: " + e.type + " (" + e.value + ")");
    }
    function p(e, n) {
      if (r(e, n)) return s();
      c(
        t.token,
        "Unexpected token " +
          t.token.type +
          " \xAB" +
          t.token.value +
          "\xBB, expected " +
          e +
          " \xAB" +
          n +
          "\xBB"
      );
    }
    function d(e) {
      return p("punc", e);
    }
    function h(e) {
      return (
        e.nlb ||
        !g(e.comments_before, function (e) {
          return !e.nlb;
        })
      );
    }
    function v() {
      return !n.strict && (r("eof") || r("punc", "}") || h(t.token));
    }
    function m() {
      return t.in_generator === t.in_function;
    }
    function _() {
      return t.in_async === t.in_function;
    }
    function D(e) {
      if (r("punc", ";")) s();
      else if (!e && !v()) l();
    }
    function b() {
      d("(");
      var e = St(!0);
      d(")");
      return e;
    }
    function E(e) {
      return function () {
        var n = t.token;
        var i = e.apply(null, arguments);
        var r = u();
        i.start = n;
        i.end = r;
        return i;
      };
    }
    function A() {
      if (r("operator", "/") || r("operator", "/=")) {
        t.peeked = null;
        t.token = t.input(t.token.value.substr(1));
      }
    }
    var x = E(function (e) {
      A();
      switch (t.token.type) {
        case "string":
          if (t.in_directives) {
            var a = o();
            if (
              -1 == t.token.raw.indexOf("\\") &&
              (ut(a, "punc", ";") || ut(a, "punc", "}") || h(a) || ut(a, "eof"))
            )
              t.input.add_directive(t.token.value);
            else t.in_directives = !1;
          }
          var m = t.in_directives,
            g = S();
          return m ? new k(g.body) : g;
        case "template_head":
        case "num":
        case "regexp":
        case "operator":
        case "atom":
          return S();
        case "name":
          if ("async" == t.token.value && ut(o(), "keyword", "function")) {
            s();
            s();
            return j(Z, !1, !0, e);
          }
          if ("import" == t.token.value && !ut(o(), "punc", "(")) {
            s();
            var y = (function () {
              var e = u();
              var n;
              var i;
              if (r("name")) n = bt(fn);
              if (r("punc", ",")) s();
              if ((i = mt(!0)) || n) p("name", "from");
              var o = t.token;
              if ("string" !== o.type) l();
              s();
              return new Ee({
                start: e,
                imported_name: n,
                imported_names: i,
                module_name: new gn({
                  start: o,
                  value: o.value,
                  quote: o.quote,
                  end: o,
                }),
                end: t.token,
              });
            })();
            D();
            return y;
          }
          return ut(o(), "punc", ":")
            ? (function () {
                var e = bt(ln);
                if ("await" === e.name && _())
                  c(
                    t.prev,
                    "await cannot be used as label inside async function"
                  );
                if (
                  i(function (n) {
                    return n.name == e.name;
                  }, t.labels)
                )
                  f("Label " + e.name + " defined twice");
                d(":");
                t.labels.push(e);
                var n = x();
                t.labels.pop();
                if (!(n instanceof z))
                  e.references.forEach(function (n) {
                    if (n instanceof ue) {
                      n = n.label.start;
                      f(
                        "Continue label `" +
                          e.name +
                          "` refers to non-IterationStatement.",
                        n.line,
                        n.col,
                        n.pos
                      );
                    }
                  });
                return new q({ body: n, label: e });
              })()
            : S();
        case "punc":
          switch (t.token.value) {
            case "{":
              return new O({ start: t.token, body: le(), end: u() });
            case "[":
            case "(":
              return S();
            case ";":
              t.in_directives = !1;
              s();
              return new $();
            default:
              l();
          }
        case "keyword":
          switch (t.token.value) {
            case "break":
              s();
              return T(se);
            case "continue":
              s();
              return T(ue);
            case "debugger":
              s();
              D();
              return new C();
            case "do":
              s();
              var E = Tt(x);
              p("keyword", "while");
              var F = b();
              D(!0);
              return new N({ body: E, condition: F });
            case "while":
              s();
              return new H({ condition: b(), body: Tt(x) });
            case "for":
              s();
              return (function () {
                d("(");
                var e = null;
                if (!r("punc", ";")) {
                  e = r("keyword", "var")
                    ? (s(), We(!0))
                    : r("keyword", "let")
                    ? (s(), Ke(!0))
                    : r("keyword", "const")
                    ? (s(), Dn(!0))
                    : St(!0, !0);
                  var n = r("operator", "in");
                  var t = r("name", "of");
                  if (n || t) {
                    if (e instanceof _e) {
                      if (e.definitions.length > 1)
                        f(
                          "Only one variable declaration allowed in for..in loop",
                          e.start.line,
                          e.start.col,
                          e.start.pos
                        );
                    } else if (!(Ct(e) || (e = kt(e)) instanceof K))
                      f(
                        "Invalid left-hand side in for..in loop",
                        e.start.line,
                        e.start.col,
                        e.start.pos
                      );
                    s();
                    if (n)
                      return (function (e) {
                        var n = St(!0);
                        d(")");
                        return new R({ init: e, object: n, body: Tt(x) });
                      })(e);
                    else
                      return (function (e) {
                        var n = e instanceof _e ? e.definitions[0].name : null;
                        var t = St(!0);
                        d(")");
                        return new U({
                          init: e,
                          name: n,
                          object: t,
                          body: Tt(x),
                        });
                      })(e);
                  }
                }
                return (function (e) {
                  d(";");
                  var n = r("punc", ";") ? null : St(!0);
                  d(";");
                  var t = r("punc", ")") ? null : St(!0);
                  d(")");
                  return new I({ init: e, condition: n, step: t, body: Tt(x) });
                })(e);
              })();
            case "class":
              s();
              return ot(Ye);
            case "function":
              s();
              return j(Z, !1, !1, e);
            case "if":
              s();
              return (function () {
                var e = b(),
                  n = x(),
                  t = null;
                if (r("keyword", "else")) {
                  s();
                  t = x();
                }
                return new fe({ condition: e, body: n, alternative: t });
              })();
            case "return":
              if (0 == t.in_function && !n.bare_returns)
                f("'return' outside of function");
              s();
              var w = null;
              if (r("punc", ";")) s();
              else if (!v()) {
                w = St(!0);
                D();
              }
              return new re({ value: w });
            case "switch":
              s();
              return new ce({ expression: b(), body: Tt(Te) });
            case "throw":
              s();
              if (h(t.token)) f("Illegal newline after 'throw'");
              w = St(!0);
              D();
              return new oe({ value: w });
            case "try":
              s();
              return (function () {
                var e = le(),
                  n = null,
                  i = null;
                if (r("keyword", "catch")) {
                  var o = t.token;
                  s();
                  d("(");
                  var a = te(void 0, un);
                  d(")");
                  n = new ve({ start: o, argname: a, body: le(), end: u() });
                }
                if (r("keyword", "finally")) {
                  o = t.token;
                  s();
                  i = new me({ start: o, body: le(), end: u() });
                }
                if (!n && !i) f("Missing catch/finally blocks");
                return new he({ body: e, bcatch: n, bfinally: i });
              })();
            case "var":
              s();
              y = We();
              D();
              return y;
            case "let":
              s();
              y = Ke();
              D();
              return y;
            case "const":
              s();
              y = Dn();
              D();
              return y;
            case "with":
              if (t.input.has_directive("use strict"))
                f("Strict mode may not include a with statement");
              s();
              return new P({ expression: b(), body: x() });
            case "export":
              if (!ut(o(), "punc", "(")) {
                s();
                return (function () {
                  var e = t.token;
                  var n;
                  var i;
                  if (r("keyword", "default")) {
                    n = !0;
                    s();
                  } else if ((i = mt(!1)))
                    if (r("name", "from")) {
                      s();
                      var a = t.token;
                      if ("string" !== a.type) l();
                      s();
                      return new Ae({
                        start: e,
                        is_default: n,
                        exported_names: i,
                        module_name: new gn({
                          start: a,
                          value: a.value,
                          quote: a.quote,
                          end: a,
                        }),
                        end: u(),
                      });
                    } else
                      return new Ae({
                        start: e,
                        is_default: n,
                        exported_names: i,
                        end: u(),
                      });
                  var f;
                  var c;
                  var p;
                  if (
                    r("punc", "{") ||
                    (n &&
                      (r("keyword", "class") || r("keyword", "function")) &&
                      ut(o(), "punc"))
                  ) {
                    c = St(!1);
                    D();
                  } else if ((f = x(n)) instanceof _e && n) l(f.start);
                  else if (f instanceof _e || f instanceof J || f instanceof Ye)
                    p = f;
                  else if (f instanceof B) c = f.body;
                  else l(f.start);
                  return new Ae({
                    start: e,
                    is_default: n,
                    exported_value: c,
                    exported_definition: p,
                    end: u(),
                  });
                })();
              }
          }
      }
      l();
    });
    function S(e) {
      return new B({ body: ((e = St(!0)), D(), e) });
    }
    function T(e) {
      var n,
        r = null;
      if (!v()) r = bt(vn, !0);
      if (null != r) {
        if (
          !(n = i(function (e) {
            return e.name == r.name;
          }, t.labels))
        )
          f("Undefined label " + r.name);
        r.thedef = n;
      } else if (0 == t.in_loop) f(e.TYPE + " not inside a loop or switch");
      D();
      var o = new e({ label: r });
      if (n) n.references.push(o);
      return o;
    }
    var M = function (e, n, i) {
      if (h(t.token)) f("Unexpected newline before arrow (=>)");
      p("arrow", "=>");
      var o = ae(r("punc", "{"), !1, i);
      return new G({ start: e, end: o.end, async: i, argnames: n, body: o });
    };
    var j = function (e, n, i, o) {
      if (n && i) f("generators cannot be async");
      t.token;
      var a = e === Z;
      var c = r("operator", "*");
      if (c) s();
      var p = r("name") ? bt(a ? tn : on) : null;
      if (a && !p)
        if (o) e = X;
        else l();
      if (p && e !== W && !(p instanceof Ge)) l(u());
      var d = [];
      var h = ae(!0, c || n, i, p, d);
      return new e({
        start: d.start,
        end: h.end,
        is_generator: c,
        async: i,
        name: p,
        argnames: d,
        body: h,
      });
    };
    function L(e, n) {
      var t = {};
      var i = !1;
      var r = !1;
      var o = !1;
      var a = !!n;
      var s = {
        add_parameter: function (n) {
          if (void 0 !== t["$" + n.value]) {
            if (!1 === i) i = n;
            s.check_strict();
          } else {
            t["$" + n.value] = !0;
            if (e)
              switch (n.value) {
                case "arguments":
                case "eval":
                case "yield":
                  if (a)
                    c(
                      n,
                      "Unexpected " +
                        n.value +
                        " identifier as parameter inside strict mode"
                    );
                  break;
                default:
                  if (zn(n.value)) l();
              }
          }
        },
        mark_default_assignment: function (e) {
          if (!1 === r) r = e;
        },
        mark_spread: function (e) {
          if (!1 === o) o = e;
        },
        mark_strict_mode: function () {
          a = !0;
        },
        is_strict: function () {
          return !1 !== r || !1 !== o || a;
        },
        check_strict: function () {
          if (s.is_strict() && !1 !== i)
            c(i, "Parameter " + i.value + " was used already");
        },
      };
      return s;
    }
    function te(e, n) {
      var i;
      var o = !1;
      if (void 0 === e) e = L(!0, t.input.has_directive("use strict"));
      if (r("expand", "...")) {
        o = t.token;
        e.mark_spread(t.token);
        s();
      }
      i = ie(e, n);
      if (r("operator", "=") && !1 === o) {
        e.mark_default_assignment(t.token);
        s();
        i = new je({
          start: i.start,
          left: i,
          operator: "=",
          right: St(!1),
          end: t.token,
        });
      }
      if (!1 !== o) {
        if (!r("punc", ")")) l();
        i = new Y({ start: o, expression: i, end: o });
      }
      e.check_strict();
      return i;
    }
    function ie(e, n) {
      var i = [];
      var a = !0;
      var c = !1;
      var p;
      var h = t.token;
      if (void 0 === e) e = L(!1, t.input.has_directive("use strict"));
      n = void 0 === n ? nn : n;
      if (r("punc", "[")) {
        s();
        for (; !r("punc", "]"); ) {
          if (a) a = !1;
          else d(",");
          if (r("expand", "...")) {
            c = !0;
            p = t.token;
            e.mark_spread(t.token);
            s();
          }
          if (r("punc"))
            switch (t.token.value) {
              case ",":
                i.push(new xn({ start: t.token, end: t.token }));
                continue;
              case "]":
                break;
              case "[":
              case "{":
                i.push(ie(e, n));
                break;
              default:
                l();
            }
          else if (r("name")) {
            e.add_parameter(t.token);
            i.push(bt(n));
          } else f("Invalid function parameter");
          if (r("operator", "=") && !1 === c) {
            e.mark_default_assignment(t.token);
            s();
            i[i.length - 1] = new je({
              start: i[i.length - 1].start,
              left: i[i.length - 1],
              operator: "=",
              right: St(!1),
              end: t.token,
            });
          }
          if (c) {
            if (!r("punc", "]")) f("Rest element must be last element");
            i[i.length - 1] = new Y({
              start: p,
              expression: i[i.length - 1],
              end: p,
            });
          }
        }
        d("]");
        e.check_strict();
        return new K({ start: h, names: i, is_array: !0, end: u() });
      } else if (r("punc", "{")) {
        s();
        for (; !r("punc", "}"); ) {
          if (a) a = !1;
          else d(",");
          if (r("expand", "...")) {
            c = !0;
            p = t.token;
            e.mark_spread(t.token);
            s();
          }
          if (
            r("name") &&
            (ut(o(), "punc") || ut(o(), "operator")) &&
            -1 !== [",", "}", "="].indexOf(o().value)
          ) {
            e.add_parameter(t.token);
            var v = u();
            var m = bt(n);
            if (c) i.push(new Y({ start: p, expression: m, end: m.end }));
            else
              i.push(new Re({ start: v, key: m.name, value: m, end: m.end }));
          } else if (r("punc", "}")) continue;
          else {
            var _ = t.token;
            var D = _t();
            if (null === D) l(u());
            else if ("name" === u().type && !r("punc", ":"))
              i.push(
                new Re({
                  start: u(),
                  key: D,
                  value: new n({ start: u(), name: D, end: u() }),
                  end: u(),
                })
              );
            else {
              d(":");
              i.push(
                new Re({
                  start: _,
                  quote: _.quote,
                  key: D,
                  value: ie(e, n),
                  end: u(),
                })
              );
            }
          }
          if (c) {
            if (!r("punc", "}")) f("Rest element must be last element");
          } else if (r("operator", "=")) {
            e.mark_default_assignment(t.token);
            s();
            i[i.length - 1].value = new je({
              start: i[i.length - 1].value.start,
              left: i[i.length - 1].value,
              operator: "=",
              right: St(!1),
              end: t.token,
            });
          }
        }
        d("}");
        e.check_strict();
        return new K({ start: h, names: i, is_array: !1, end: u() });
      } else if (r("name")) {
        e.add_parameter(t.token);
        return bt(n);
      } else f("Invalid function parameter");
    }
    function ae(e, i, o, a, u) {
      var f = t.in_loop;
      var c = t.labels;
      var p = t.in_generator;
      var h = t.in_async;
      ++t.in_function;
      if (i) t.in_generator = t.in_function;
      if (o) t.in_async = t.in_function;
      if (u)
        !(function (e) {
          t.token;
          var i = L(!0, t.input.has_directive("use strict"));
          d("(");
          for (; !r("punc", ")"); ) {
            var o = te(i);
            e.push(o);
            if (!r("punc", ")")) {
              d(",");
              if (r("punc", ")") && n.ecma < 8) l();
            }
            if (o instanceof Y) break;
          }
          s();
        })(u);
      if (e) t.in_directives = !0;
      t.in_loop = 0;
      t.labels = [];
      if (e) {
        t.input.push_directives_stack();
        var v = le();
        if (a) gt(a);
        if (u) u.forEach(gt);
        t.input.pop_directives_stack();
      } else v = St(!1);
      --t.in_function;
      t.in_loop = f;
      t.labels = c;
      t.in_generator = p;
      t.in_async = h;
      return v;
    }
    function le() {
      d("{");
      var e = [];
      for (; !r("punc", "}"); ) {
        if (r("eof")) l();
        e.push(x());
      }
      s();
      return e;
    }
    function Te() {
      d("{");
      var e,
        n = [],
        i = null,
        o = null;
      for (; !r("punc", "}"); ) {
        if (r("eof")) l();
        if (r("keyword", "case")) {
          if (o) o.end = u();
          i = [];
          o = new de({
            start: ((e = t.token), s(), e),
            expression: St(!0),
            body: i,
          });
          n.push(o);
          d(":");
        } else if (r("keyword", "default")) {
          if (o) o.end = u();
          i = [];
          o = new pe({ start: ((e = t.token), s(), d(":"), e), body: i });
          n.push(o);
        } else {
          if (!i) l();
          i.push(x());
        }
      }
      if (o) o.end = u();
      s();
      return n;
    }
    function Ve(e, n) {
      var i = [];
      var o;
      for (;;) {
        var a = "var" === n ? Ze : "const" === n ? Qe : "let" === n ? en : null;
        if (r("punc", "{") || r("punc", "["))
          o = new Fe({
            start: t.token,
            name: ie(void 0, a),
            value: r("operator", "=") ? (p("operator", "="), St(!1, e)) : null,
            end: u(),
          });
        else if (
          "import" ==
          (o = new Fe({
            start: t.token,
            name: bt(a),
            value: r("operator", "=")
              ? (s(), St(!1, e))
              : !e && "const" === n
              ? f("Missing initializer in const declaration")
              : null,
            end: u(),
          })).name.name
        )
          f("Unexpected token: import");
        i.push(o);
        if (!r("punc", ",")) break;
        s();
      }
      return i;
    }
    var We = function (e) {
      return new De({ start: u(), definitions: Ve(e, "var"), end: u() });
    };
    var Ke = function (e) {
      return new ge({ start: u(), definitions: Ve(e, "let"), end: u() });
    };
    var Dn = function (e) {
      return new be({ start: u(), definitions: Ve(e, "const"), end: u() });
    };
    function En() {
      var e,
        n = t.token;
      switch (n.type) {
        case "name":
          e = Dt(pn);
          break;
        case "num":
          e = new bn({ start: n, end: n, value: n.value });
          break;
        case "string":
          e = new gn({ start: n, end: n, value: n.value, quote: n.quote });
          break;
        case "regexp":
          e = new yn({ start: n, end: n, value: n.value });
          break;
        case "atom":
          switch (n.value) {
            case "false":
              e = new Bn({ start: n, end: n });
              break;
            case "true":
              e = new Sn({ start: n, end: n });
              break;
            case "null":
              e = new An({ start: n, end: n });
          }
      }
      s();
      return e;
    }
    function Fn(e, n, t, i) {
      var r = function (e, n) {
        if (n)
          return new je({
            start: e.start,
            left: e,
            operator: "=",
            right: n,
            end: n.end,
          });
        return e;
      };
      if (e instanceof He)
        return r(
          new K({
            start: e.start,
            end: e.end,
            is_array: !1,
            names: e.properties.map(Fn),
          }),
          i
        );
      else if (e instanceof Re) {
        e.value = Fn(e.value, 0, e.key);
        return r(e, i);
      } else if (e instanceof xn) return e;
      else if (e instanceof K) {
        e.names = e.names.map(Fn);
        return r(e, i);
      } else if (e instanceof pn)
        return r(new nn({ name: e.name, start: e.start, end: e.end }), i);
      else if (e instanceof Y) {
        e.expression = Fn(e.expression);
        return r(e, i);
      } else if (e instanceof Ne)
        return r(
          new K({
            start: e.start,
            end: e.end,
            is_array: !0,
            names: e.elements.map(Fn),
          }),
          i
        );
      else if (e instanceof ze) return r(Fn(e.left, 0, 0, e.right), i);
      else if (e instanceof je) {
        e.left = Fn(e.left, 0, e.left);
        return e;
      } else f("Invalid function parameter", e.start.line, e.start.col);
    }
    var wn = function (e, i) {
      if (r("operator", "new"))
        return (function (e) {
          var i = t.token;
          p("operator", "new");
          if (r("punc", ".")) {
            s();
            p("name", "target");
            return Et(new Xe({ start: i, end: u() }), e);
          }
          var o,
            a = wn(!1);
          if (r("punc", "(")) {
            s();
            o = kn(")", n.ecma >= 8);
          } else o = [];
          var f = new xe({ start: i, expression: a, args: o, end: u() });
          yt(f);
          return Et(f, e);
        })(e);
      var a = t.token;
      var f = r("name", "async") && En();
      if (r("punc")) {
        switch (t.token.value) {
          case "(":
            if (f && !e) break;
            var c = (function (e, i) {
              var o;
              var a;
              var f;
              var c = [];
              d("(");
              for (; !r("punc", ")"); ) {
                if (o) l(o);
                if (r("expand", "...")) {
                  o = t.token;
                  if (i) a = t.token;
                  s();
                  c.push(new Y({ start: u(), expression: St(), end: t.token }));
                } else c.push(St());
                if (!r("punc", ")")) {
                  d(",");
                  if (r("punc", ")")) {
                    if (n.ecma < 8) l();
                    f = u();
                    if (i) a = f;
                  }
                }
              }
              d(")");
              if (e && r("arrow", "=>")) {
                if (o && f) l(f);
              } else if (a) l(a);
              return c;
            })(i, !f);
            if (i && r("arrow", "=>")) return M(a, c.map(Fn), !!f);
            var h = f
              ? new we({ expression: f, args: c })
              : 1 == c.length
              ? c[0]
              : new Ce({ expressions: c });
            if (h.start) {
              var v = a.comments_before.length;
              [].unshift.apply(h.start.comments_before, a.comments_before);
              a.comments_before = h.start.comments_before;
              a.comments_before_length = v;
              if (0 == v && a.comments_before.length > 0) {
                var m = a.comments_before[0];
                if (!m.nlb) {
                  m.nlb = a.nlb;
                  a.nlb = !1;
                }
              }
              a.comments_after = h.start.comments_after;
            }
            h.start = a;
            var _ = u();
            if (h.end) {
              _.comments_before = h.end.comments_before;
              [].push.apply(h.end.comments_after, _.comments_after);
              _.comments_after = h.end.comments_after;
            }
            h.end = _;
            if (h instanceof we) yt(h);
            return Et(h, e);
          case "[":
            return Et($n(), e);
          case "{":
            return Et(tt(), e);
        }
        if (!f) l();
      }
      if (i && r("name") && ut(o(), "arrow")) {
        var D = new nn({ name: t.token.value, start: a, end: a });
        s();
        return M(a, [D], !!f);
      }
      if (r("keyword", "function")) {
        s();
        var g = j(X, !1, !!f);
        g.start = a;
        g.end = u();
        return Et(g, e);
      }
      if (f) return Et(f, e);
      if (r("keyword", "class")) {
        s();
        var b = ot(Je);
        b.start = a;
        b.end = u();
        return Et(b, e);
      }
      if (r("template_head")) return Et(Cn(), e);
      if (ht(t.token.type)) return Et(En(), e);
      l();
    };
    function Cn() {
      var e = [],
        n = t.token;
      e.push(
        new ne({
          start: t.token,
          raw: t.token.raw,
          value: t.token.value,
          end: t.token,
        })
      );
      for (; !1 === t.token.end; ) {
        s();
        A();
        e.push(St(!0));
        if (!ut("template_substitution")) l();
        e.push(
          new ne({
            start: t.token,
            raw: t.token.raw,
            value: t.token.value,
            end: t.token,
          })
        );
      }
      s();
      return new ee({ start: n, segments: e, end: t.token });
    }
    function kn(e, n, i) {
      var o = !0,
        a = [];
      for (; !r("punc", e); ) {
        if (o) o = !1;
        else d(",");
        if (n && r("punc", e)) break;
        if (r("punc", ",") && i)
          a.push(new xn({ start: t.token, end: t.token }));
        else if (r("expand", "...")) {
          s();
          a.push(new Y({ start: u(), expression: St(), end: t.token }));
        } else a.push(St(!1));
      }
      s();
      return a;
    }
    var $n = E(function () {
      d("[");
      return new Ne({ elements: kn("]", !n.strict, !0) });
    });
    var Zn = E(function (e, n) {
      return j(W, e, n);
    });
    var tt = E(function () {
      var e = t.token,
        i = !0,
        o = [];
      d("{");
      for (; !r("punc", "}"); ) {
        if (i) i = !1;
        else d(",");
        if (!n.strict && r("punc", "}")) break;
        if ("expand" == (e = t.token).type) {
          s();
          o.push(new Y({ start: e, expression: St(!1), end: u() }));
          continue;
        }
        var a = _t();
        var f;
        if (!r("punc", ":")) {
          var c = at(a, e);
          if (c) {
            o.push(c);
            continue;
          }
          f = new pn({ start: u(), name: a, end: u() });
        } else if (null === a) l(u());
        else {
          s();
          f = St(!1);
        }
        if (r("operator", "=")) {
          s();
          f = new ze({
            start: e,
            left: f,
            operator: "=",
            right: St(!1),
            end: u(),
          });
        }
        o.push(
          new Re({
            start: e,
            quote: e.quote,
            key: a instanceof w ? a : "" + a,
            value: f,
            end: u(),
          })
        );
      }
      s();
      return new He({ properties: o });
    });
    function ot(e) {
      var n,
        i,
        o,
        a,
        f = [];
      t.input.push_directives_stack();
      t.input.add_directive("use strict");
      if ("name" == t.token.type && "extends" != t.token.value)
        o = bt(e === Ye ? an : sn);
      if (e === Ye && !o) l();
      if ("extends" == t.token.value) {
        s();
        a = St(!0);
      }
      d("{");
      if (r("punc", ";")) s();
      for (; !r("punc", "}"); ) {
        n = t.token;
        if (!(i = at(_t(), n, !0))) l();
        f.push(i);
        if (r("punc", ";")) s();
      }
      t.input.pop_directives_stack();
      s();
      return new e({ start: n, name: o, extends: a, properties: f, end: u() });
    }
    function at(e, n, i) {
      var o = function (e, n) {
        if ("string" == typeof e || "number" == typeof e)
          return new rn({ start: n, name: "" + e, end: u() });
        else if (null === e) l();
        return e;
      };
      var a = !1;
      var s = !1;
      var f = !1;
      var c = n;
      if (i && "static" === e && !r("punc", "(")) {
        s = !0;
        c = t.token;
        e = _t();
      }
      if (
        "async" === e &&
        !r("punc", "(") &&
        !r("punc", ",") &&
        !r("punc", "}")
      ) {
        a = !0;
        c = t.token;
        e = _t();
      }
      if (null === e) {
        f = !0;
        c = t.token;
        if (null === (e = _t())) l();
      }
      if (r("punc", "(")) {
        e = o(e, n);
        return new Le({
          start: n,
          static: s,
          is_generator: f,
          async: a,
          key: e,
          quote: e instanceof rn ? c.quote : void 0,
          value: Zn(f, a),
          end: u(),
        });
      }
      c = t.token;
      if ("get" == e) {
        if (!r("punc") || r("punc", "[")) {
          e = o(_t(), n);
          return new Pe({
            start: n,
            static: s,
            key: e,
            quote: e instanceof rn ? c.quote : void 0,
            value: Zn(),
            end: u(),
          });
        }
      } else if ("set" == e)
        if (!r("punc") || r("punc", "[")) {
          e = o(_t(), n);
          return new Ue({
            start: n,
            static: s,
            key: e,
            quote: e instanceof rn ? c.quote : void 0,
            value: Zn(),
            end: u(),
          });
        }
    }
    function vt(e) {
      function n(e) {
        return new e({ name: _t(), start: u(), end: u() });
      }
      var i = e ? cn : hn;
      var o = e ? fn : dn;
      var a = t.token;
      var f;
      var c;
      if (e) f = n(i);
      else c = n(o);
      if (r("name", "as")) {
        s();
        if (e) c = n(o);
        else f = n(i);
      } else if (e) c = new o(f);
      else f = new i(c);
      return new ye({ start: a, foreign_name: f, name: c, end: u() });
    }
    function mt(e) {
      var n;
      if (r("punc", "{")) {
        s();
        n = [];
        for (; !r("punc", "}"); ) {
          n.push(vt(e));
          if (r("punc", ",")) s();
        }
        s();
      } else if (r("operator", "*")) {
        var i;
        s();
        if (e && r("name", "as")) {
          s();
          i = bt(cn);
        }
        n = [
          (function (e, n) {
            var i = e ? cn : hn;
            var r = e ? fn : dn;
            var o = t.token;
            var a;
            var s = u();
            n = n || new r({ name: "*", start: o, end: s });
            a = new i({ name: "*", start: o, end: s });
            return new ye({ start: o, foreign_name: a, name: n, end: s });
          })(e, i),
        ];
      }
      return n;
    }
    function _t() {
      var e = t.token;
      switch (e.type) {
        case "punc":
          if ("[" === e.value) {
            s();
            var n = St(!1);
            d("]");
            return n;
          } else l(e);
        case "operator":
          if ("*" === e.value) {
            s();
            return null;
          }
          if (
            -1 ===
            ["delete", "in", "instanceof", "new", "typeof", "void"].indexOf(
              e.value
            )
          )
            l(e);
        case "name":
          if ("yield" == e.value)
            if (m())
              c(e, "Yield cannot be used as identifier inside generators");
            else if (
              !ut(o(), "punc", ":") &&
              !ut(o(), "punc", "(") &&
              t.input.has_directive("use strict")
            )
              c(e, "Unexpected yield identifier inside strict mode");
        case "string":
        case "num":
        case "keyword":
        case "atom":
          s();
          return e.value;
        default:
          l(e);
      }
    }
    function Dt(e) {
      var n = t.token.value;
      return new ("this" == n ? mn : "super" == n ? _n : e)({
        name: n + "",
        start: t.token,
        end: t.token,
      });
    }
    function gt(e) {
      var n = e.name;
      if (m() && "yield" == n)
        c(e.start, "Yield cannot be used as identifier inside generators");
      if (t.input.has_directive("use strict")) {
        if ("yield" == n)
          c(e.start, "Unexpected yield identifier inside strict mode");
        if (e instanceof Ge && ("arguments" == n || "eval" == n))
          c(e.start, "Unexpected " + n + " in strict mode");
      }
    }
    function bt(e, n) {
      if (!r("name")) {
        if (!n) f("Name expected");
        return null;
      }
      var t = Dt(e);
      gt(t);
      s();
      return t;
    }
    function yt(e) {
      var n = e.start;
      var t = n.comments_before;
      var i = y(n, "comments_before_length")
        ? n.comments_before_length
        : t.length;
      for (; --i >= 0; ) {
        var r = t[i];
        if (/[@#]__PURE__/.test(r.value)) {
          e.pure = r;
          break;
        }
      }
    }
    var Et = function (e, n) {
      var i = e.start;
      if (r("punc", ".")) {
        s();
        return Et(
          new Be({
            start: i,
            expression: e,
            property: (function () {
              var e = t.token;
              if ("name" != e.type) l();
              s();
              return e.value;
            })(),
            end: u(),
          }),
          n
        );
      }
      if (r("punc", "[")) {
        s();
        var o = St(!0);
        d("]");
        return Et(
          new Se({ start: i, expression: e, property: o, end: u() }),
          n
        );
      }
      if (n && r("punc", "(")) {
        s();
        var a = new we({ start: i, expression: e, args: At(), end: u() });
        yt(a);
        return Et(a, !0);
      }
      if (r("template_head"))
        return Et(new Q({ start: i, prefix: e, template_string: Cn() }), n);
      return e;
    };
    var At = E(function () {
      var e = [];
      for (; !r("punc", ")"); ) {
        if (r("expand", "...")) {
          s();
          e.push(new Y({ start: u(), expression: St(!1) }));
        } else e.push(St(!1));
        if (!r("punc", ")")) {
          d(",");
          if (r("punc", ")") && n.ecma < 8) l();
        }
      }
      s();
      return e;
    });
    var Ft = function (e, n) {
      var i = t.token;
      if ("name" == i.type && "await" == i.value)
        if (_()) {
          s();
          return (function () {
            if (!_())
              f(
                "Unexpected await expression outside async function",
                t.prev.line,
                t.prev.col,
                t.prev.pos
              );
            return new Tn({ expression: Ft(!0) });
          })();
        } else if (t.input.has_directive("use strict"))
          c(t.token, "Unexpected await identifier inside strict mode");
      if (r("operator") && ct(i.value)) {
        s();
        A();
        var o = wt(Oe, i, Ft(e));
        o.start = i;
        o.end = u();
        return o;
      }
      var a = wn(e, n);
      for (; r("operator") && lt(t.token.value) && !h(t.token); ) {
        if (a instanceof G) l();
        (a = wt($e, t.token, a)).start = i;
        a.end = t.token;
        s();
      }
      return a;
    };
    function wt(e, n, i) {
      var r = n.value;
      switch (r) {
        case "++":
        case "--":
          if (!Ct(i))
            f("Invalid use of " + r + " operator", n.line, n.col, n.pos);
          break;
        case "delete":
          if (i instanceof pn && t.input.has_directive("use strict"))
            f(
              "Calling delete on expression not allowed in strict mode",
              i.start.line,
              i.start.col,
              i.start.pos
            );
      }
      return new e({ operator: r, expression: i });
    }
    var xt = function (e, n, i) {
      var o = r("operator") ? t.token.value : null;
      if ("in" == o && i) o = null;
      if (
        "**" == o &&
        e instanceof Oe &&
        !ut(e.start, "punc", "(") &&
        "--" !== e.operator &&
        "++" !== e.operator
      )
        l(e.start);
      var a = null != o ? dt[o] : null;
      if (null != a && (a > n || ("**" === o && n === a))) {
        s();
        var u = xt(Ft(!0), a, i);
        return xt(
          new Me({
            start: e.start,
            left: e,
            operator: o,
            right: u,
            end: u.end,
          }),
          n,
          i
        );
      }
      return e;
    };
    function Ct(e) {
      return e instanceof ke || e instanceof pn;
    }
    function kt(e) {
      if (e instanceof He)
        e = new K({
          start: e.start,
          names: e.properties.map(kt),
          is_array: !1,
          end: e.end,
        });
      else if (e instanceof Ne) {
        var n = [];
        for (var t = 0; t < e.elements.length; t++) {
          if (e.elements[t] instanceof Y) {
            if (t + 1 !== e.elements.length)
              c(
                e.elements[t].start,
                "Spread must the be last element in destructuring array"
              );
            e.elements[t].expression = kt(e.elements[t].expression);
          }
          n.push(kt(e.elements[t]));
        }
        e = new K({ start: e.start, names: n, is_array: !0, end: e.end });
      } else if (e instanceof Ie) e.value = kt(e.value);
      else if (e instanceof ze)
        e = new je({
          start: e.start,
          left: e.left,
          operator: "=",
          right: e.right,
          end: e.end,
        });
      return e;
    }
    var Bt = function (e) {
      var n = t.token;
      if ("name" == n.type && "yield" == n.value)
        if (m()) {
          s();
          return (function () {
            if (!m())
              f(
                "Unexpected yield expression outside generator function",
                t.prev.line,
                t.prev.col,
                t.prev.pos
              );
            var e = !1;
            var n = !0;
            if (v() || (r("punc") && Wn(t.token.value))) n = !1;
            else if (r("operator", "*")) {
              e = !0;
              s();
            }
            return new On({ is_star: e, expression: n ? St() : null });
          })();
        } else if (t.input.has_directive("use strict"))
          c(t.token, "Unexpected yield identifier inside strict mode");
      var i = (function (e) {
        var n = t.token;
        var i = (function (e) {
          return xt(Ft(!0, !0), 0, e);
        })(e);
        if (r("operator", "?")) {
          s();
          var o = St(!1);
          d(":");
          return new qe({
            start: n,
            condition: i,
            consequent: o,
            alternative: St(!1, e),
            end: u(),
          });
        }
        return i;
      })(e);
      var o = t.token.value;
      if (r("operator") && pt(o)) {
        if (Ct(i) || (i = kt(i)) instanceof K) {
          s();
          return new ze({
            start: n,
            left: i,
            operator: o,
            right: Bt(e),
            end: u(),
          });
        }
        f("Invalid assignment");
      }
      return i;
    };
    var St = function (e, n) {
      var i = t.token;
      var a = [];
      for (;;) {
        a.push(Bt(n));
        if (!e || !r("punc", ",")) break;
        s();
        e = !0;
      }
      return 1 == a.length
        ? a[0]
        : new Ce({ start: i, expressions: a, end: o() });
    };
    function Tt(e) {
      ++t.in_loop;
      var n = e();
      --t.in_loop;
      return n;
    }
    if (n.expression) return St(!0);
    return (function () {
      var e = t.token;
      var i = [];
      t.input.push_directives_stack();
      for (; !r("eof"); ) i.push(x());
      t.input.pop_directives_stack();
      var o = u();
      var a = n.toplevel;
      if (a) {
        a.body = a.body.concat(i);
        a.end = o;
      } else a = new V({ start: e, body: i, end: o });
      return a;
    })();
  }
  function mt(e, n) {
    $n.call(this);
    this.before = e;
    this.after = n;
  }
  mt.prototype = new $n();
  !(function (e) {
    function n(n, t) {
      n.DEFMETHOD("transform", function (n, i) {
        var r, o;
        n.push(this);
        if (n.before) r = n.before(this, t, i);
        if (r === e) {
          t((r = this), n);
          if (n.after) if ((o = n.after(r, i)) !== e) r = o;
        }
        n.pop();
        return r;
      });
    }
    function t(e, n) {
      return d(e, function (e) {
        return e.transform(n, !0);
      });
    }
    n(w, u);
    n(q, function (e, n) {
      e.label = e.label.transform(n);
      e.body = e.body.transform(n);
    });
    n(B, function (e, n) {
      e.body = e.body.transform(n);
    });
    n(T, function (e, n) {
      e.body = t(e.body, n);
    });
    n(j, function (e, n) {
      e.condition = e.condition.transform(n);
      e.body = e.body.transform(n);
    });
    n(I, function (e, n) {
      if (e.init) e.init = e.init.transform(n);
      if (e.condition) e.condition = e.condition.transform(n);
      if (e.step) e.step = e.step.transform(n);
      e.body = e.body.transform(n);
    });
    n(R, function (e, n) {
      e.init = e.init.transform(n);
      e.object = e.object.transform(n);
      e.body = e.body.transform(n);
    });
    n(P, function (e, n) {
      e.expression = e.expression.transform(n);
      e.body = e.body.transform(n);
    });
    n(ie, function (e, n) {
      if (e.value) e.value = e.value.transform(n);
    });
    n(ae, function (e, n) {
      if (e.label) e.label = e.label.transform(n);
    });
    n(fe, function (e, n) {
      e.condition = e.condition.transform(n);
      e.body = e.body.transform(n);
      if (e.alternative) e.alternative = e.alternative.transform(n);
    });
    n(ce, function (e, n) {
      e.expression = e.expression.transform(n);
      e.body = t(e.body, n);
    });
    n(de, function (e, n) {
      e.expression = e.expression.transform(n);
      e.body = t(e.body, n);
    });
    n(he, function (e, n) {
      e.body = t(e.body, n);
      if (e.bcatch) e.bcatch = e.bcatch.transform(n);
      if (e.bfinally) e.bfinally = e.bfinally.transform(n);
    });
    n(ve, function (e, n) {
      e.argname = e.argname.transform(n);
      e.body = t(e.body, n);
    });
    n(_e, function (e, n) {
      e.definitions = t(e.definitions, n);
    });
    n(Fe, function (e, n) {
      e.name = e.name.transform(n);
      if (e.value) e.value = e.value.transform(n);
    });
    n(K, function (e, n) {
      e.names = t(e.names, n);
    });
    n(J, function (e, n) {
      if (e.name) e.name = e.name.transform(n);
      e.argnames = t(e.argnames, n);
      if (e.body instanceof w) e.body = e.body.transform(n);
      else e.body = t(e.body, n);
    });
    n(we, function (e, n) {
      e.expression = e.expression.transform(n);
      e.args = t(e.args, n);
    });
    n(Ce, function (e, n) {
      e.expressions = t(e.expressions, n);
    });
    n(Be, function (e, n) {
      e.expression = e.expression.transform(n);
    });
    n(Se, function (e, n) {
      e.expression = e.expression.transform(n);
      e.property = e.property.transform(n);
    });
    n(On, function (e, n) {
      if (e.expression) e.expression = e.expression.transform(n);
    });
    n(Tn, function (e, n) {
      e.expression = e.expression.transform(n);
    });
    n(Te, function (e, n) {
      e.expression = e.expression.transform(n);
    });
    n(Me, function (e, n) {
      e.left = e.left.transform(n);
      e.right = e.right.transform(n);
    });
    n(qe, function (e, n) {
      e.condition = e.condition.transform(n);
      e.consequent = e.consequent.transform(n);
      e.alternative = e.alternative.transform(n);
    });
    n(Ne, function (e, n) {
      e.elements = t(e.elements, n);
    });
    n(He, function (e, n) {
      e.properties = t(e.properties, n);
    });
    n(Ie, function (e, n) {
      if (e.key instanceof w) e.key = e.key.transform(n);
      e.value = e.value.transform(n);
    });
    n(Ve, function (e, n) {
      if (e.name) e.name = e.name.transform(n);
      if (e.extends) e.extends = e.extends.transform(n);
      e.properties = t(e.properties, n);
    });
    n(Y, function (e, n) {
      e.expression = e.expression.transform(n);
    });
    n(ye, function (e, n) {
      e.foreign_name = e.foreign_name.transform(n);
      e.name = e.name.transform(n);
    });
    n(Ee, function (e, n) {
      if (e.imported_name) e.imported_name = e.imported_name.transform(n);
      if (e.imported_names) t(e.imported_names, n);
      e.module_name = e.module_name.transform(n);
    });
    n(Ae, function (e, n) {
      if (e.exported_definition)
        e.exported_definition = e.exported_definition.transform(n);
      if (e.exported_value) e.exported_value = e.exported_value.transform(n);
      if (e.exported_names) t(e.exported_names, n);
      if (e.module_name) e.module_name = e.module_name.transform(n);
    });
    n(ee, function (e, n) {
      e.segments = t(e.segments, n);
    });
    n(Q, function (e, n) {
      e.template_string = e.template_string.transform(n);
    });
  })();
  function _t(e, n, t) {
    this.name = n.name;
    this.orig = [n];
    this.init = t;
    this.eliminated = 0;
    this.scope = e;
    this.references = [];
    this.replaced = 0;
    this.global = !1;
    this.export = !1;
    this.mangled_name = null;
    this.undeclared = !1;
    this.id = _t.next_id++;
  }
  _t.next_id = 1;
  _t.prototype = {
    unmangleable: function (e) {
      if (!e) e = {};
      return (
        (this.global && !e.toplevel) ||
        this.export ||
        this.undeclared ||
        (!e.eval && (this.scope.uses_eval || this.scope.uses_with)) ||
        (e.keep_fnames &&
          (this.orig[0] instanceof on || this.orig[0] instanceof tn)) ||
        this.orig[0] instanceof rn ||
        (e.keep_classnames &&
          (this.orig[0] instanceof sn || this.orig[0] instanceof an))
      );
    },
    mangle: function (e) {
      var n = e.cache && e.cache.props;
      if (this.global && n && n.has(this.name))
        this.mangled_name = n.get(this.name);
      else if (!this.mangled_name && !this.unmangleable(e)) {
        var t = this.scope;
        var i = this.orig[0];
        if (e.ie8 && i instanceof on) t = t.parent_scope;
        var r;
        if ((r = this.redefined()))
          this.mangled_name = r.mangled_name || r.name;
        else this.mangled_name = t.next_mangled(e, this);
        if (this.global && n) n.set(this.name, this.mangled_name);
      }
    },
    redefined: function () {
      return this.defun && this.defun.variables.get(this.name);
    },
  };
  V.DEFMETHOD("figure_out_scope", function (e) {
    e = a(e, { cache: null, ie8: !1, safari10: !1 });
    var n = this;
    var t = (n.parent_scope = null);
    var i = new b();
    var r = null;
    var o = null;
    var s = [];
    var u = new $n(function (n, a) {
      if (n.is_block_scope()) {
        var f = t;
        n.block_scope = t = new L(n);
        t.init_scope_vars(f);
        if (!(n instanceof L)) {
          t.uses_with = f.uses_with;
          t.uses_eval = f.uses_eval;
          t.directives = f.directives;
        }
        if (e.safari10) if (n instanceof I || n instanceof R) s.push(t);
        a();
        t = f;
        return !0;
      }
      if (n instanceof K) {
        o = n;
        a();
        o = null;
        return !0;
      }
      if (n instanceof L) {
        n.init_scope_vars(t);
        f = t;
        var c = r;
        var l = i;
        r = t = n;
        i = new b();
        a();
        t = f;
        r = c;
        i = l;
        return !0;
      }
      if (n instanceof q) {
        var p = n.label;
        if (i.has(p.name)) throw Error(v("Label {name} defined twice", p));
        i.set(p.name, p);
        a();
        i.del(p.name);
        return !0;
      }
      if (n instanceof P) {
        for (var d = t; d; d = d.parent_scope) d.uses_with = !0;
        return;
      }
      if (n instanceof We) n.scope = t;
      if (n instanceof ln) {
        n.thedef = n;
        n.references = [];
      }
      if (n instanceof on)
        r.def_function(n, "arguments" == n.name ? void 0 : r);
      else if (n instanceof tn)
        _((n.scope = r.parent_scope.get_defun_scope()).def_function(n, r), 1);
      else if (n instanceof sn) _(r.def_variable(n, r), 1);
      else if (n instanceof fn) t.def_variable(n);
      else if (n instanceof an)
        _((n.scope = r.parent_scope).def_function(n, r), 1);
      else if (n instanceof Ze || n instanceof en || n instanceof Qe) {
        if (n instanceof Ke) h = t.def_variable(n, null);
        else h = r.def_variable(n, "SymbolVar" == n.TYPE ? null : void 0);
        if (
          !g(h.orig, function (e) {
            if (e === n) return !0;
            if (n instanceof Ke) return e instanceof on;
            return !(e instanceof en || e instanceof Qe);
          })
        )
          st(
            n.name + " redeclared",
            n.start.file,
            n.start.line,
            n.start.col,
            n.start.pos
          );
        if (!(n instanceof nn)) _(h, 2);
        h.destructuring = o;
        if (r !== t) {
          n.mark_enclosed(e);
          var h = t.find_variable(n);
          if (n.thedef !== h) {
            n.thedef = h;
            n.reference(e);
          }
        }
      } else if (n instanceof un) t.def_variable(n).defun = r;
      else if (n instanceof vn) {
        var m = i.get(n.name);
        if (!m)
          throw Error(
            v("Undefined label {name} [{line},{col}]", {
              name: n.name,
              line: n.start.line,
              col: n.start.col,
            })
          );
        n.thedef = m;
      }
      if (!(t instanceof V) && (n instanceof Ae || n instanceof Ee))
        st(
          n.TYPE + " statement may only appear at top level",
          n.start.file,
          n.start.line,
          n.start.col,
          n.start.pos
        );
      function _(e, n) {
        if (o) {
          var t = 0;
          do {
            n++;
          } while (u.parent(t++) !== o);
        }
        var i = u.parent(n);
        e.export = i instanceof Ae;
      }
    });
    n.walk(u);
    n.globals = new b();
    u = new $n(function (t, i) {
      if (t instanceof ae && t.label) {
        t.label.thedef.references.push(t);
        return !0;
      }
      if (t instanceof pn) {
        var r = t.name;
        if ("eval" == r && u.parent() instanceof we)
          for (var o = t.scope; o && !o.uses_eval; o = o.parent_scope)
            o.uses_eval = !0;
        var a;
        if (
          (u.parent() instanceof ye && u.parent(1).module_name) ||
          !(a = t.scope.find_variable(r))
        )
          a = n.def_global(t);
        else if (a.scope instanceof J && "arguments" == r)
          a.scope.uses_arguments = !0;
        t.thedef = a;
        t.reference(e);
        if (t.scope.is_block_scope() && !(a.orig[0] instanceof Ke))
          t.scope = t.scope.get_defun_scope();
        return !0;
      }
      var s;
      if (t instanceof un && (s = t.definition().redefined())) {
        o = t.scope;
        for (; o; ) {
          h(o.enclosed, s);
          if (o === s.scope) break;
          o = o.parent_scope;
        }
      }
    });
    n.walk(u);
    if (e.ie8)
      n.walk(
        new $n(function (t, i) {
          if (t instanceof un) {
            var r = t.name;
            var o = t.thedef.references;
            var a = t.thedef.defun;
            var s = a.find_variable(r) || n.globals.get(r) || a.def_variable(t);
            o.forEach(function (n) {
              n.thedef = s;
              n.reference(e);
            });
            t.thedef = s;
            t.reference(e);
            return !0;
          }
        })
      );
    if (e.safari10)
      for (var f = 0; f < s.length; f++)
        (t = s[f]).parent_scope.variables.each(function (e) {
          h(t.enclosed, e);
        });
  });
  V.DEFMETHOD("def_global", function (e) {
    var n = this.globals,
      t = e.name;
    if (n.has(t)) return n.get(t);
    else {
      var i = new _t(this, e);
      i.undeclared = !0;
      i.global = !0;
      n.set(t, i);
      return i;
    }
  });
  L.DEFMETHOD("init_scope_vars", function (e) {
    this.variables = new b();
    this.functions = new b();
    this.uses_with = !1;
    this.uses_eval = !1;
    this.parent_scope = e;
    this.enclosed = [];
    this.cname = -1;
  });
  w.DEFMETHOD("is_block_scope", f);
  Ve.DEFMETHOD("is_block_scope", f);
  J.DEFMETHOD("is_block_scope", f);
  V.DEFMETHOD("is_block_scope", f);
  le.DEFMETHOD("is_block_scope", f);
  T.DEFMETHOD("is_block_scope", c);
  z.DEFMETHOD("is_block_scope", c);
  J.DEFMETHOD("init_scope_vars", function () {
    L.prototype.init_scope_vars.apply(this, arguments);
    this.uses_arguments = !1;
    this.def_variable(
      new nn({ name: "arguments", start: this.start, end: this.end })
    );
  });
  We.DEFMETHOD("mark_enclosed", function (e) {
    var n = this.definition();
    var t = this.scope;
    for (; t; ) {
      h(t.enclosed, n);
      if (e.keep_fnames)
        t.functions.each(function (e) {
          h(n.scope.enclosed, e);
        });
      if (t === n.scope) break;
      t = t.parent_scope;
    }
  });
  We.DEFMETHOD("reference", function (e) {
    this.definition().references.push(this);
    this.mark_enclosed(e);
  });
  L.DEFMETHOD("find_variable", function (e) {
    if (e instanceof We) e = e.name;
    return (
      this.variables.get(e) ||
      (this.parent_scope && this.parent_scope.find_variable(e))
    );
  });
  L.DEFMETHOD("def_function", function (e, n) {
    var t = this.def_variable(e, n);
    if (!t.init || t.init instanceof Z) t.init = n;
    this.functions.set(e.name, t);
    return t;
  });
  L.DEFMETHOD("def_variable", function (e, n) {
    var t = this.variables.get(e.name);
    if (t) {
      t.orig.push(e);
      if (t.init && (t.scope !== e.scope || t.init instanceof X)) t.init = n;
    } else {
      t = new _t(this, e, n);
      this.variables.set(e.name, t);
      t.global = !this.parent_scope;
    }
    return (e.thedef = t);
  });
  function Dt(e, n) {
    var i = e.enclosed;
    e: for (;;) {
      var r = gt(++e.cname);
      if (!tt(r)) continue;
      if (t(r, n.reserved)) continue;
      for (var o = i.length; --o >= 0; ) {
        var a = i[o];
        if (r == (a.mangled_name || (a.unmangleable(n) && a.name))) continue e;
      }
      return r;
    }
  }
  L.DEFMETHOD("next_mangled", function (e) {
    return Dt(this, e);
  });
  V.DEFMETHOD("next_mangled", function (e) {
    var n;
    do {
      n = Dt(this, e);
    } while (t(n, this.mangled_names));
    return n;
  });
  X.DEFMETHOD("next_mangled", function (e, n) {
    var t = n.orig[0] instanceof nn && this.name && this.name.definition();
    var i = t ? t.mangled_name || t.name : null;
    for (;;) {
      var r = Dt(this, e);
      if (!i || i != r) return r;
    }
  });
  We.DEFMETHOD("unmangleable", function (e) {
    var n = this.definition();
    return !n || n.unmangleable(e);
  });
  ln.DEFMETHOD("unmangleable", f);
  We.DEFMETHOD("unreferenced", function () {
    return (
      0 == this.definition().references.length &&
      !(this.scope.uses_eval || this.scope.uses_with)
    );
  });
  We.DEFMETHOD("definition", function () {
    return this.thedef;
  });
  We.DEFMETHOD("global", function () {
    return this.definition().global;
  });
  V.DEFMETHOD("_default_mangler_options", function (e) {
    e = a(e, {
      eval: !1,
      ie8: !1,
      keep_classnames: !1,
      keep_fnames: !1,
      reserved: [],
      toplevel: !1,
    });
    if (!Array.isArray(e.reserved)) e.reserved = [];
    h(e.reserved, "arguments");
    return e;
  });
  V.DEFMETHOD("mangle_names", function (e) {
    e = this._default_mangler_options(e);
    var n = -1;
    var i = [];
    var r = (this.mangled_names = []);
    if (e.cache) {
      this.globals.each(a);
      if (e.cache.props)
        e.cache.props.each(function (e) {
          h(r, e);
        });
    }
    var o = new $n(function (t, r) {
      if (t instanceof q) {
        var o = n;
        r();
        n = o;
        return !0;
      }
      if (t instanceof L) {
        t.variables.each(a);
        return;
      }
      if (t.is_block_scope()) {
        t.block_scope.variables.each(a);
        return;
      }
      if (t instanceof ln) {
        var s;
        do {
          s = gt(++n);
        } while (!tt(s));
        t.mangled_name = s;
        return !0;
      }
      if (!e.ie8 && t instanceof un) {
        i.push(t.definition());
        return;
      }
    });
    this.walk(o);
    i.forEach(function (n) {
      n.mangle(e);
    });
    function a(n) {
      if (!t(n.name, e.reserved)) i.push(n);
    }
  });
  V.DEFMETHOD("find_colliding_names", function (e) {
    var n = e.cache && e.cache.props;
    var t = Object.create(null);
    e.reserved.forEach(i);
    this.globals.each(r);
    this.walk(
      new $n(function (e) {
        if (e instanceof L) e.variables.each(r);
        if (e instanceof un) r(e.definition());
      })
    );
    return t;
    function i(e) {
      t[e] = !0;
    }
    function r(t) {
      var r = t.name;
      if (t.global && n && n.has(r)) r = n.get(r);
      else if (!t.unmangleable(e)) return;
      i(r);
    }
  });
  V.DEFMETHOD("expand_names", function (e) {
    gt.reset();
    gt.sort();
    e = this._default_mangler_options(e);
    var n = this.find_colliding_names(e);
    var i = 0;
    this.globals.each(r);
    this.walk(
      new $n(function (e) {
        if (e instanceof L) e.variables.each(r);
        if (e instanceof un) r(e.definition());
      })
    );
    function r(r) {
      if (r.global && e.cache) return;
      if (r.unmangleable(e)) return;
      if (t(r.name, e.reserved)) return;
      var o = r.redefined();
      r.name = o
        ? o.name
        : (function () {
            var e;
            do {
              e = gt(i++);
            } while (n[e] || !tt(e));
            return e;
          })();
      r.orig.forEach(function (e) {
        e.name = r.name;
      });
      r.references.forEach(function (e) {
        e.name = r.name;
      });
    }
  });
  w.DEFMETHOD("tail_node", l);
  Ce.DEFMETHOD("tail_node", function () {
    return this.expressions[this.expressions.length - 1];
  });
  V.DEFMETHOD("compute_char_frequency", function (e) {
    e = this._default_mangler_options(e);
    try {
      w.prototype.print = function (n, t) {
        this._print(n, t);
        if (this instanceof We && !this.unmangleable(e))
          gt.consider(this.name, -1);
        else if (e.properties)
          if (this instanceof Be) gt.consider(this.property, -1);
          else if (this instanceof Se)
            !(function e(n) {
              if (n instanceof gn) gt.consider(n.value, -1);
              else if (n instanceof qe) {
                e(n.consequent);
                e(n.alternative);
              } else if (n instanceof Ce) e(n.tail_node());
            })(this.property);
      };
      gt.consider(this.print_to_string(), 1);
    } finally {
      w.prototype.print = w.prototype._print;
    }
    gt.sort();
  });
  var gt = (function () {
    var e = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ$_".split("");
    var n = "0123456789".split("");
    var t, i;
    function r() {
      i = Object.create(null);
      e.forEach(function (e) {
        i[e] = 0;
      });
      n.forEach(function (e) {
        i[e] = 0;
      });
    }
    a.consider = function (e, n) {
      for (var t = e.length; --t >= 0; ) i[e[t]] += n;
    };
    function o(e, n) {
      return i[n] - i[e];
    }
    a.sort = function () {
      t = _(e, o).concat(_(n, o));
      t = UglifyJS.charlist ? UglifyJS.charlist : t;
    };
    a.reset = r;
    r();
    function a(e) {
      var n = "",
        i = UglifyJS.charlist ? UglifyJS.charlist.length : 54;
      e++;
      do {
        n += t[--e % i];
        e = Math.floor(e / i);
        i = UglifyJS.charlist ? UglifyJS.charlist.length : 64;
      } while (e > 0);
      return n;
    }
    return a;
  })();
  var bt = /^$|[;{][\s\n]*$/;
  function yt(e) {
    return "comment2" == e.type && /@preserve|@license|@cc_on/i.test(e.value);
  }
  function Et(e) {
    var n = !e;
    if (
      void 0 ===
      (e = a(
        e,
        {
          ascii_only: !1,
          beautify: !1,
          bracketize: !1,
          comments: !1,
          ecma: 5,
          ie8: !1,
          indent_level: 4,
          indent_start: 0,
          inline_script: !0,
          keep_quoted_props: !1,
          max_line_len: !1,
          preamble: null,
          preserve_line: !1,
          quote_keys: !1,
          quote_style: 0,
          safari10: !1,
          semicolons: !0,
          shebang: !0,
          shorthand: void 0,
          source_map: null,
          webkit: !1,
          width: 80,
          wrap_iife: !1,
        },
        !0
      )).shorthand
    )
      e.shorthand = e.ecma > 5;
    var t = f;
    if (e.comments) {
      var i = e.comments;
      if (
        "string" == typeof e.comments &&
        /^\/.*\/[a-zA-Z]*$/.test(e.comments)
      ) {
        var r = e.comments.lastIndexOf("/");
        i = RegExp(e.comments.substr(1, r - 1), e.comments.substr(r + 1));
      }
      if (i instanceof RegExp)
        t = function (e) {
          return "comment5" != e.type && i.test(e.value);
        };
      else if ("function" == typeof i)
        t = function (e) {
          return "comment5" != e.type && i(this, e);
        };
      else if ("some" === i) t = yt;
      else t = c;
    }
    var o = 0;
    var s = 0;
    var l = 1;
    var p = 0;
    var d = "";
    var h = e.ascii_only
      ? function (n, t) {
          if (e.ecma >= 6)
            n = n.replace(/[\ud800-\udbff][\udc00-\udfff]/g, function (e) {
              return (
                "\\u{" +
                (function (e, n) {
                  if (Qn(e.charAt(0)))
                    return (
                      65536 +
                      ((e.charCodeAt(0) - 55296) << 10) +
                      e.charCodeAt(1) -
                      56320
                    );
                  return e.charCodeAt(0);
                })(e).toString(16) +
                "}"
              );
            });
          return n.replace(/[\u0000-\u001f\u007f-\uffff]/g, function (e) {
            var n = e.charCodeAt(0).toString(16);
            if (n.length <= 2 && !t) {
              for (; n.length < 2; ) n = "0" + n;
              return "\\x" + n;
            } else {
              for (; n.length < 4; ) n = "0" + n;
              return "\\u" + n;
            }
          });
        }
      : function (e) {
          var n = "";
          for (var t = 0, i = e.length; t < i; t++)
            if ((Qn(e[t]) && !et(e[t + 1])) || (et(e[t]) && !Qn(e[t - 1])))
              n += "\\u" + e.charCodeAt(t).toString(16);
            else n += e[t];
          return n;
        };
    function v(n, t) {
      var i = (function (n, t) {
        var i = 0,
          r = 0;
        n = n.replace(
          /[\\\b\f\n\r\v\t\x22\x27\u2028\u2029\0\ufeff]/g,
          function (t, o) {
            switch (t) {
              case '"':
                ++i;
                return '"';
              case "'":
                ++r;
                return "'";
              case "\\":
                return "\\\\";
              case "\n":
                return "\\n";
              case "\r":
                return "\\r";
              case "\t":
                return "\\t";
              case "\b":
                return "\\b";
              case "\f":
                return "\\f";
              case "\x0B":
                return e.ie8 ? "\\x0B" : "\\v";
              case "\u2028":
                return "\\u2028";
              case "\u2029":
                return "\\u2029";
              case "\uFEFF":
                return "\\ufeff";
              case "\0":
                return /[0-9]/.test(Kn(n, o + 1)) ? "\\x00" : "\\0";
            }
            return t;
          }
        );
        function o() {
          return "'" + n.replace(/\x27/g, "\\'") + "'";
        }
        function a() {
          return '"' + n.replace(/\x22/g, '\\"') + '"';
        }
        n = h(n);
        if ("`" === t) return "`" + n.replace(/`/g, "\\`") + "`";
        switch (e.quote_style) {
          case 1:
            return o();
          case 2:
            return a();
          case 3:
            return "'" == t ? o() : a();
          default:
            return i > r ? o() : a();
        }
      })(n, t);
      if (e.inline_script)
        i = (i = (i = i.replace(
          /<\x2fscript([>\/\t\n\f\r ])/gi,
          "<\\/script$1"
        )).replace(/\x3c!--/g, "\\x3c!--")).replace(/--\x3e/g, "--\\x3e");
      return i;
    }
    var m = !1;
    var _ = !1;
    var b = 0;
    var y = !1;
    var E = !1;
    var A = -1;
    var F = "";
    var C,
      k,
      B = e.source_map && [];
    var S = B
      ? function () {
          B.forEach(function (n) {
            try {
              e.source_map.add(
                n.token.file,
                n.line,
                n.col,
                n.token.line,
                n.token.col,
                !n.name && "name" == n.token.type ? n.token.value : n.name
              );
            } catch (e) {
              w.warn(
                "Couldn't figure out mapping for {file}:{line},{col} \u2192 {cline},{ccol} [{name}]",
                {
                  file: n.token.file,
                  line: n.token.line,
                  col: n.token.col,
                  cline: n.line,
                  ccol: n.col,
                  name: n.name || "",
                }
              );
            }
          });
          B = [];
        }
      : u;
    var T = e.max_line_len
      ? function () {
          if (s > e.max_line_len) {
            if (b) {
              var n = d.slice(0, b);
              var t = d.slice(b);
              if (B) {
                var i = t.length - s;
                B.forEach(function (e) {
                  e.line++;
                  e.col += i;
                });
              }
              d = n + "\n" + t;
              l++;
              p++;
              s = t.length;
            }
            if (s > e.max_line_len)
              w.warn("Output exceeds {max_line_len} characters", e);
          }
          if (b) {
            b = 0;
            S();
          }
        }
      : u;
    var O = D("( [ + * / - , . `");
    function $(n) {
      var t = Kn((n += ""), 0);
      var i = Kn(F, F.length - 1);
      if (y && t) {
        y = !1;
        if ("\n" != t) {
          $("\n");
          q();
        }
      }
      if (E && t) {
        E = !1;
        if (!/[\s;})]/.test(t)) M();
      }
      A = -1;
      i = F.charAt(F.length - 1);
      if (_) {
        _ = !1;
        if (
          (":" == i && "}" == t) ||
          ((!t || ";}".indexOf(t) < 0) && ";" != i)
        ) {
          if (e.semicolons || O(t)) {
            d += ";";
            s++;
            p++;
          } else {
            T();
            d += "\n";
            p++;
            l++;
            s = 0;
            if (/^\s+$/.test(n)) _ = !0;
          }
          if (!e.beautify) m = !1;
        }
      }
      if (!e.beautify && e.preserve_line && P[P.length - 1]) {
        var r = P[P.length - 1].start.line;
        for (; l < r; ) {
          T();
          d += "\n";
          p++;
          l++;
          s = 0;
          m = !1;
        }
      }
      if (m) {
        if (
          (rt(i) && (rt(t) || "\\" == t)) ||
          ("/" == t && t == i) ||
          (("+" == t || "-" == t) && t == F)
        ) {
          d += " ";
          s++;
          p++;
        }
        m = !1;
      }
      if (C) {
        B.push({ token: C, name: k, line: l, col: s });
        C = !1;
        if (!b) S();
      }
      d += n;
      p += n.length;
      var o = n.split(/\r?\n/),
        a = o.length - 1;
      l += a;
      s += o[0].length;
      if (a > 0) {
        T();
        s = o[a].length;
      }
      F = n;
    }
    var M = e.beautify
      ? function () {
          $(" ");
        }
      : function () {
          m = !0;
        };
    var q = e.beautify
      ? function (n) {
          if (e.beautify)
            $(
              ((t = n ? 0.5 : 0),
              (function e(n, t) {
                if (t <= 0) return "";
                if (1 == t) return n;
                var i = e(n, t >> 1);
                i += i;
                if (1 & t) i += n;
                return i;
              })(" ", e.indent_start + o - t * e.indent_level))
            );
          var t;
        }
      : u;
    var z = e.beautify
      ? function (e, n) {
          if (!0 === e) e = I();
          var t = o;
          o = e;
          var i = n();
          o = t;
          return i;
        }
      : function (e, n) {
          return n();
        };
    var j = e.beautify
      ? function () {
          if (A < 0) return $("\n");
          if ("\n" != d[A]) {
            d = d.slice(0, A) + "\n" + d.slice(A);
            p++;
            l++;
          }
          A++;
        }
      : e.max_line_len
      ? function () {
          T();
          b = d.length;
        }
      : u;
    var N = e.beautify
      ? function () {
          $(";");
        }
      : function () {
          _ = !0;
        };
    function H() {
      _ = !1;
      $(";");
    }
    function I() {
      return o + e.indent_level;
    }
    function R() {
      if (b) T();
      return d;
    }
    function U() {
      var e = d.lastIndexOf("\n");
      return /^ *$/.test(d.slice(e + 1));
    }
    var P = [];
    return {
      get: R,
      toString: R,
      indent: q,
      indentation: function () {
        return o;
      },
      current_width: function () {
        return s - o;
      },
      should_break: function () {
        return e.width && this.current_width() >= e.width;
      },
      newline: j,
      print: $,
      star: function () {
        $("*");
      },
      space: M,
      comma: function () {
        $(",");
        M();
      },
      colon: function () {
        $(":");
        M();
      },
      last: function () {
        return F;
      },
      semicolon: N,
      force_semicolon: H,
      to_utf8: h,
      print_name: function (e) {
        $(
          (function (e) {
            e = e.toString();
            return h(e, !0);
          })(e)
        );
      },
      print_string: function (e, n, t) {
        var i = v(e, n);
        if (!0 === t && -1 === i.indexOf("\\")) {
          if (!bt.test(d)) H();
          H();
        }
        $(i);
      },
      print_template_string_chars: function (e) {
        var n = v(e, "`").replace(/\${/g, "\\${");
        return $(n.substr(1, n.length - 2));
      },
      encode_string: v,
      next_indent: I,
      with_indent: z,
      with_block: function (e) {
        var n;
        $("{");
        j();
        z(I(), function () {
          n = e();
        });
        q();
        $("}");
        return n;
      },
      with_parens: function (e) {
        $("(");
        var n = e();
        $(")");
        return n;
      },
      with_square: function (e) {
        $("[");
        var n = e();
        $("]");
        return n;
      },
      add_mapping: B
        ? function (e, n) {
            C = e;
            k = n;
          }
        : u,
      option: function (n) {
        return e[n];
      },
      prepend_comments: n
        ? u
        : function (n) {
            var i = this;
            var r = n.start;
            if (!r) return;
            if (r.comments_before && r.comments_before._dumped === i) return;
            var o = r.comments_before;
            if (!o) o = r.comments_before = [];
            o._dumped = i;
            if (n instanceof ie && n.value) {
              var a = new $n(function (e) {
                var n = a.parent();
                if (
                  n instanceof ie ||
                  (n instanceof Me && n.left === e) ||
                  ("Call" == n.TYPE && n.expression === e) ||
                  (n instanceof qe && n.condition === e) ||
                  (n instanceof Be && n.expression === e) ||
                  (n instanceof Ce && n.expressions[0] === e) ||
                  (n instanceof Se && n.expression === e) ||
                  n instanceof $e
                ) {
                  if (!e.start) return;
                  var t = e.start.comments_before;
                  if (t && t._dumped !== i) {
                    t._dumped = i;
                    o = o.concat(t);
                  }
                } else return !0;
              });
              a.push(n);
              n.value.walk(a);
            }
            if (0 == p) {
              if (o.length > 0 && e.shebang && "comment5" == o[0].type) {
                $("#!" + o.shift().value + "\n");
                q();
              }
              var s = e.preamble;
              if (s) $(s.replace(/\r\n?|[\n\u2028\u2029]|\s*$/g, "\n"));
            }
            if (0 == (o = o.filter(t, n)).length) return;
            var u = U();
            o.forEach(function (e, n) {
              if (!u)
                if (e.nlb) {
                  $("\n");
                  q();
                  u = !0;
                } else if (n > 0) M();
              if (/comment[134]/.test(e.type)) {
                $("//" + e.value.replace(/[@#]__PURE__/g, " ") + "\n");
                q();
                u = !0;
              } else if ("comment2" == e.type) {
                $("/*" + e.value.replace(/[@#]__PURE__/g, " ") + "*/");
                u = !1;
              }
            });
            if (!u)
              if (r.nlb) {
                $("\n");
                q();
              } else M();
          },
      append_comments:
        n || t === f
          ? u
          : function (e, n) {
              var i = e.end;
              if (!i) return;
              var r = i[n ? "comments_before" : "comments_after"];
              if (!r || r._dumped === this) return;
              if (
                !(
                  e instanceof x ||
                  g(r, function (e) {
                    return !/comment[134]/.test(e.type);
                  })
                )
              )
                return;
              r._dumped = this;
              var o = d.length;
              r.filter(t, e).forEach(function (e, t) {
                E = !1;
                if (y) {
                  $("\n");
                  q();
                  y = !1;
                } else if (e.nlb && (t > 0 || !U())) {
                  $("\n");
                  q();
                } else if (t > 0 || !n) M();
                if (/comment[134]/.test(e.type)) {
                  $("//" + e.value.replace(/[@#]__PURE__/g, " "));
                  y = !0;
                } else if ("comment2" == e.type) {
                  $("/*" + e.value.replace(/[@#]__PURE__/g, " ") + "*/");
                  E = !0;
                }
              });
              if (d.length > o) A = o;
            },
      line: function () {
        return l;
      },
      col: function () {
        return s;
      },
      pos: function () {
        return p;
      },
      push_node: function (e) {
        P.push(e);
      },
      pop_node: function () {
        return P.pop();
      },
      parent: function (e) {
        return P[P.length - 2 - (e || 0)];
      },
    };
  }
  !(function () {
    function e(e, n) {
      e.DEFMETHOD("_codegen", n);
    }
    var n = !1;
    var t = null;
    var i = null;
    w.DEFMETHOD("print", function (e, n) {
      var r = this,
        o = r._codegen;
      if (r instanceof L) t = r;
      else if (!i && r instanceof k && "use asm" == r.value) i = t;
      function a() {
        e.prepend_comments(r);
        r.add_source_map(e);
        o(r, e);
        e.append_comments(r);
      }
      e.push_node(r);
      if (n || r.needs_parens(e)) e.with_parens(a);
      else a();
      e.pop_node();
      if (r === i) i = null;
    });
    w.DEFMETHOD("_print", w.prototype.print);
    w.DEFMETHOD("print_to_string", function (e) {
      var n = Et(e);
      this.print(n);
      return n.get();
    });
    function r(e, n) {
      if (Array.isArray(e))
        e.forEach(function (e) {
          r(e, n);
        });
      else e.DEFMETHOD("needs_parens", n);
    }
    r(w, f);
    r(X, function (e) {
      if (E(e)) return !0;
      if (e.option("webkit"))
        if ((n = e.parent()) instanceof ke && n.expression === this) return !0;
      if (e.option("wrap_iife")) {
        var n;
        return (n = e.parent()) instanceof we && n.expression === this;
      }
      return !1;
    });
    r(G, function (e) {
      var n = e.parent();
      return n instanceof ke && n.expression === this;
    });
    r([Je, He], E);
    r(Te, function (e) {
      var n = e.parent();
      return (
        (n instanceof ke && n.expression === this) ||
        (n instanceof we && n.expression === this) ||
        (n instanceof Me &&
          "**" === n.operator &&
          this instanceof Oe &&
          n.left === this &&
          "++" !== this.operator &&
          "--" !== this.operator)
      );
    });
    r(Tn, function (e) {
      var n = e.parent();
      return (
        (n instanceof ke && n.expression === this) ||
        (n instanceof we && n.expression === this) ||
        (e.option("safari10") && n instanceof Oe)
      );
    });
    r(Ce, function (e) {
      var n = e.parent();
      return (
        n instanceof we ||
        n instanceof Te ||
        n instanceof Me ||
        n instanceof Fe ||
        n instanceof ke ||
        n instanceof Ne ||
        n instanceof Ie ||
        n instanceof qe ||
        n instanceof G ||
        n instanceof je ||
        n instanceof Y ||
        (n instanceof U && this === n.object) ||
        n instanceof On
      );
    });
    r(Me, function (e) {
      var n = e.parent();
      if (n instanceof we && n.expression === this) return !0;
      if (n instanceof Te) return !0;
      if (n instanceof ke && n.expression === this) return !0;
      if (n instanceof Me) {
        var t = n.operator,
          i = dt[t];
        var r = this.operator,
          o = dt[r];
        if (i > o || (i == o && this === n.right)) return !0;
      }
    });
    r(On, function (e) {
      var n = e.parent();
      if (n instanceof Me && "=" !== n.operator) return !0;
      if (n instanceof we && n.expression === this) return !0;
      if (n instanceof qe && n.condition === this) return !0;
      if (n instanceof Te) return !0;
      if (n instanceof ke && n.expression === this) return !0;
    });
    r(ke, function (e) {
      var n = e.parent();
      if (n instanceof xe && n.expression === this) {
        var t = !1;
        this.walk(
          new $n(function (e) {
            if (t || e instanceof L) return !0;
            if (e instanceof we) {
              t = !0;
              return !0;
            }
          })
        );
        return t;
      }
    });
    r(we, function (e) {
      var n,
        t = e.parent();
      if (t instanceof xe && t.expression === this) return !0;
      return (
        this.expression instanceof X &&
        t instanceof ke &&
        t.expression === this &&
        (n = e.parent(1)) instanceof ze &&
        n.left === t
      );
    });
    r(xe, function (e) {
      var n = e.parent();
      if (
        !p(this, e) &&
        (n instanceof ke || (n instanceof we && n.expression === this))
      )
        return !0;
    });
    r(bn, function (e) {
      var n = e.parent();
      if (n instanceof ke && n.expression === this) {
        var t = this.getValue();
        if (t < 0 || /^0/.test(d(t))) return !0;
      }
    });
    r([ze, qe], function (e) {
      var n = e.parent();
      if (n instanceof Te) return !0;
      if (n instanceof Me && !(n instanceof ze)) return !0;
      if (n instanceof we && n.expression === this) return !0;
      if (n instanceof qe && n.condition === this) return !0;
      if (n instanceof ke && n.expression === this) return !0;
      if (
        this instanceof ze &&
        this.left instanceof K &&
        !1 === this.left.is_array
      )
        return !0;
    });
    e(k, function (e, n) {
      n.print_string(e.value, e.quote);
      n.semicolon();
    });
    e(Y, function (e, n) {
      n.print("...");
      e.expression.print(n);
    });
    e(K, function (e, n) {
      n.print(e.is_array ? "[" : "{");
      var t = e.names.length;
      e.names.forEach(function (e, i) {
        if (i > 0) n.comma();
        e.print(n);
        if (i == t - 1 && e instanceof xn) n.comma();
      });
      n.print(e.is_array ? "]" : "}");
    });
    e(C, function (e, n) {
      n.print("debugger");
      n.semicolon();
    });
    function o(e, t, i, r) {
      var o = e.length - 1;
      n = r;
      e.forEach(function (e, r) {
        if (
          !0 === n &&
          !(
            e instanceof k ||
            e instanceof $ ||
            (e instanceof B && e.body instanceof gn)
          )
        )
          n = !1;
        if (!(e instanceof $)) {
          i.indent();
          e.print(i);
          if (r != o || !t) {
            i.newline();
            if (t) i.newline();
          }
        }
        if (!0 === n && e instanceof B && e.body instanceof gn) n = !1;
      });
      n = !1;
    }
    M.DEFMETHOD("_do_print_body", function (e) {
      l(this.body, e);
    });
    e(x, function (e, n) {
      e.body.print(n);
      n.semicolon();
    });
    e(V, function (e, n) {
      o(e.body, !0, n, !0);
      n.print("");
    });
    e(q, function (e, n) {
      e.label.print(n);
      n.colon();
      e.body.print(n);
    });
    e(B, function (e, n) {
      e.body.print(n);
      n.semicolon();
    });
    function a(e, n, t) {
      if (e.body.length > 0)
        n.with_block(function () {
          o(e.body, !1, n, t);
        });
      else {
        n.print("{");
        n.with_indent(n.next_indent(), function () {
          n.append_comments(e, !0);
        });
        n.print("}");
      }
    }
    e(O, function (e, n) {
      a(e, n);
    });
    e($, function (e, n) {
      n.semicolon();
    });
    e(N, function (e, n) {
      n.print("do");
      n.space();
      h(e.body, n);
      n.space();
      n.print("while");
      n.space();
      n.with_parens(function () {
        e.condition.print(n);
      });
      n.semicolon();
    });
    e(H, function (e, n) {
      n.print("while");
      n.space();
      n.with_parens(function () {
        e.condition.print(n);
      });
      n.space();
      e._do_print_body(n);
    });
    e(I, function (e, n) {
      n.print("for");
      n.space();
      n.with_parens(function () {
        if (e.init) {
          if (e.init instanceof _e) e.init.print(n);
          else s(e.init, n, !0);
          n.print(";");
          n.space();
        } else n.print(";");
        if (e.condition) {
          e.condition.print(n);
          n.print(";");
          n.space();
        } else n.print(";");
        if (e.step) e.step.print(n);
      });
      n.space();
      e._do_print_body(n);
    });
    e(R, function (e, n) {
      n.print("for");
      n.space();
      n.with_parens(function () {
        e.init.print(n);
        n.space();
        n.print(e instanceof U ? "of" : "in");
        n.space();
        e.object.print(n);
      });
      n.space();
      e._do_print_body(n);
    });
    e(P, function (e, n) {
      n.print("with");
      n.space();
      n.with_parens(function () {
        e.expression.print(n);
      });
      n.space();
      e._do_print_body(n);
    });
    J.DEFMETHOD("_do_print", function (e, n) {
      var t = this;
      if (!n) {
        if (t.async) {
          e.print("async");
          e.space();
        }
        e.print("function");
        if (t.is_generator) e.star();
        if (t.name) e.space();
      }
      if (t.name instanceof We) t.name.print(e);
      else if (n && t.name instanceof w)
        e.with_square(function () {
          t.name.print(e);
        });
      e.with_parens(function () {
        t.argnames.forEach(function (n, t) {
          if (t) e.comma();
          n.print(e);
        });
      });
      e.space();
      a(t, e, !0);
    });
    e(J, function (e, n) {
      e._do_print(n);
    });
    e(Q, function (e, n) {
      e.prefix.print(n);
      e.template_string.print(n);
    });
    e(ee, function (e, n) {
      var t = n.parent() instanceof Q;
      n.print("`");
      for (var i = 0; i < e.segments.length; i++)
        if (!(e.segments[i] instanceof ne)) {
          n.print("${");
          e.segments[i].print(n);
          n.print("}");
        } else if (t) n.print(e.segments[i].raw);
        else n.print_template_string_chars(e.segments[i].value);
      n.print("`");
    });
    G.DEFMETHOD("_do_print", function (e) {
      var n = this;
      var t = e.parent();
      var i =
        t instanceof Me ||
        t instanceof Te ||
        (t instanceof we && n === t.expression);
      if (i) e.print("(");
      if (n.async) {
        e.print("async");
        e.space();
      }
      if (1 === n.argnames.length && n.argnames[0] instanceof We)
        n.argnames[0].print(e);
      else
        e.with_parens(function () {
          n.argnames.forEach(function (n, t) {
            if (t) e.comma();
            n.print(e);
          });
        });
      e.space();
      e.print("=>");
      e.space();
      if (n.body instanceof w) n.body.print(e);
      else a(n, e);
      if (i) e.print(")");
    });
    ie.DEFMETHOD("_do_print", function (e, n) {
      e.print(n);
      if (this.value) {
        e.space();
        this.value.print(e);
      }
      e.semicolon();
    });
    e(re, function (e, n) {
      e._do_print(n, "return");
    });
    e(oe, function (e, n) {
      e._do_print(n, "throw");
    });
    e(On, function (e, n) {
      var t = e.is_star ? "*" : "";
      n.print("yield" + t);
      if (e.expression) {
        n.space();
        e.expression.print(n);
      }
    });
    e(Tn, function (e, n) {
      n.print("await");
      n.space();
      var t = e.expression;
      var i = !(
        t instanceof we ||
        t instanceof pn ||
        t instanceof ke ||
        t instanceof Te ||
        t instanceof Dn
      );
      if (i) n.print("(");
      e.expression.print(n);
      if (i) n.print(")");
    });
    ae.DEFMETHOD("_do_print", function (e, n) {
      e.print(n);
      if (this.label) {
        e.space();
        this.label.print(e);
      }
      e.semicolon();
    });
    e(se, function (e, n) {
      e._do_print(n, "break");
    });
    e(ue, function (e, n) {
      e._do_print(n, "continue");
    });
    e(fe, function (e, n) {
      n.print("if");
      n.space();
      n.with_parens(function () {
        e.condition.print(n);
      });
      n.space();
      if (e.alternative) {
        !(function (e, n) {
          var t = e.body;
          if (n.option("bracketize") || (n.option("ie8") && t instanceof N))
            return h(t, n);
          if (!t) return n.force_semicolon();
          for (;;)
            if (t instanceof fe) {
              if (!t.alternative) {
                h(e.body, n);
                return;
              }
              t = t.alternative;
            } else if (t instanceof M) t = t.body;
            else break;
          l(e.body, n);
        })(e, n);
        n.space();
        n.print("else");
        n.space();
        if (e.alternative instanceof fe) e.alternative.print(n);
        else l(e.alternative, n);
      } else e._do_print_body(n);
    });
    e(ce, function (e, n) {
      n.print("switch");
      n.space();
      n.with_parens(function () {
        e.expression.print(n);
      });
      n.space();
      var t = e.body.length - 1;
      if (t < 0) n.print("{}");
      else
        n.with_block(function () {
          e.body.forEach(function (e, i) {
            n.indent(!0);
            e.print(n);
            if (i < t && e.body.length > 0) n.newline();
          });
        });
    });
    le.DEFMETHOD("_do_print_body", function (e) {
      e.newline();
      this.body.forEach(function (n) {
        e.indent();
        n.print(e);
        e.newline();
      });
    });
    e(pe, function (e, n) {
      n.print("default:");
      e._do_print_body(n);
    });
    e(de, function (e, n) {
      n.print("case");
      n.space();
      e.expression.print(n);
      n.print(":");
      e._do_print_body(n);
    });
    e(he, function (e, n) {
      n.print("try");
      n.space();
      a(e, n);
      if (e.bcatch) {
        n.space();
        e.bcatch.print(n);
      }
      if (e.bfinally) {
        n.space();
        e.bfinally.print(n);
      }
    });
    e(ve, function (e, n) {
      n.print("catch");
      n.space();
      n.with_parens(function () {
        e.argname.print(n);
      });
      n.space();
      a(e, n);
    });
    e(me, function (e, n) {
      n.print("finally");
      n.space();
      a(e, n);
    });
    _e.DEFMETHOD("_do_print", function (e, n) {
      e.print(n);
      e.space();
      this.definitions.forEach(function (n, t) {
        if (t) e.comma();
        n.print(e);
      });
      var t = e.parent();
      if (!(t instanceof I || t instanceof R) || t.init !== this) e.semicolon();
    });
    e(ge, function (e, n) {
      e._do_print(n, "let");
    });
    e(De, function (e, n) {
      e._do_print(n, "var");
    });
    e(be, function (e, n) {
      e._do_print(n, "const");
    });
    e(Ee, function (e, n) {
      n.print("import");
      n.space();
      if (e.imported_name) e.imported_name.print(n);
      if (e.imported_name && e.imported_names) {
        n.print(",");
        n.space();
      }
      if (e.imported_names)
        if (
          1 === e.imported_names.length &&
          "*" === e.imported_names[0].foreign_name.name
        )
          e.imported_names[0].print(n);
        else {
          n.print("{");
          e.imported_names.forEach(function (t, i) {
            n.space();
            t.print(n);
            if (i < e.imported_names.length - 1) n.print(",");
          });
          n.space();
          n.print("}");
        }
      if (e.imported_name || e.imported_names) {
        n.space();
        n.print("from");
        n.space();
      }
      e.module_name.print(n);
      n.semicolon();
    });
    e(ye, function (e, n) {
      var t = n.parent() instanceof Ee;
      var i = e.name.definition();
      if (((i && i.mangled_name) || e.name.name) !== e.foreign_name.name) {
        if (t) n.print(e.foreign_name.name);
        else e.name.print(n);
        n.space();
        n.print("as");
        n.space();
        if (t) e.name.print(n);
        else n.print(e.foreign_name.name);
      } else e.name.print(n);
    });
    e(Ae, function (e, n) {
      n.print("export");
      n.space();
      if (e.is_default) {
        n.print("default");
        n.space();
      }
      if (e.exported_names) {
        if (
          1 === e.exported_names.length &&
          "*" === e.exported_names[0].name.name
        )
          e.exported_names[0].print(n);
        else {
          n.print("{");
          e.exported_names.forEach(function (t, i) {
            n.space();
            t.print(n);
            if (i < e.exported_names.length - 1) n.print(",");
          });
          n.space();
          n.print("}");
        }
      } else if (e.exported_value) e.exported_value.print(n);
      else if (e.exported_definition) {
        e.exported_definition.print(n);
        if (e.exported_definition instanceof _e) return;
      }
      if (e.module_name) {
        n.space();
        n.print("from");
        n.space();
        e.module_name.print(n);
      }
      n.semicolon();
    });
    function s(e, n, t) {
      var i = !1;
      if (t)
        e.walk(
          new $n(function (e) {
            if (i || e instanceof L) return !0;
            if (e instanceof Me && "in" == e.operator) {
              i = !0;
              return !0;
            }
          })
        );
      e.print(n, i);
    }
    e(Fe, function (e, n) {
      e.name.print(n);
      if (e.value) {
        n.space();
        n.print("=");
        n.space();
        var t = n.parent(1);
        var i = t instanceof I || t instanceof R;
        s(e.value, n, i);
      }
    });
    e(we, function (e, n) {
      e.expression.print(n);
      if (e instanceof xe && !p(e, n)) return;
      if (e.expression instanceof we || e.expression instanceof J)
        n.add_mapping(e.start);
      n.with_parens(function () {
        e.args.forEach(function (e, t) {
          if (t) n.comma();
          e.print(n);
        });
      });
    });
    e(xe, function (e, n) {
      n.print("new");
      n.space();
      we.prototype._codegen(e, n);
    });
    Ce.DEFMETHOD("_do_print", function (e) {
      this.expressions.forEach(function (n, t) {
        if (t > 0) {
          e.comma();
          if (e.should_break()) {
            e.newline();
            e.indent();
          }
        }
        n.print(e);
      });
    });
    e(Ce, function (e, n) {
      e._do_print(n);
    });
    e(Be, function (e, n) {
      var t = e.expression;
      t.print(n);
      var i = e.property;
      if (n.option("ie8") && zn(i)) {
        n.print("[");
        n.add_mapping(e.end);
        n.print_string(i);
        n.print("]");
      } else {
        if (t instanceof bn && t.getValue() >= 0)
          if (!/[xa-f.)]/i.test(n.last())) n.print(".");
        n.print(".");
        n.add_mapping(e.end);
        n.print_name(i);
      }
    });
    e(Se, function (e, n) {
      e.expression.print(n);
      n.print("[");
      e.property.print(n);
      n.print("]");
    });
    e(Oe, function (e, n) {
      var t = e.operator;
      n.print(t);
      if (
        /^[a-z]/i.test(t) ||
        (/[+-]$/.test(t) &&
          e.expression instanceof Oe &&
          /^[+-]/.test(e.expression.operator))
      )
        n.space();
      e.expression.print(n);
    });
    e($e, function (e, n) {
      e.expression.print(n);
      n.print(e.operator);
    });
    e(Me, function (e, n) {
      var t = e.operator;
      e.left.print(n);
      if (">" == t[0] && e.left instanceof $e && "--" == e.left.operator)
        n.print(" ");
      else n.space();
      n.print(t);
      if (
        ("<" == t || "<<" == t) &&
        e.right instanceof Oe &&
        "!" == e.right.operator &&
        e.right.expression instanceof Oe &&
        "--" == e.right.expression.operator
      )
        n.print(" ");
      else n.space();
      e.right.print(n);
    });
    e(qe, function (e, n) {
      e.condition.print(n);
      n.space();
      n.print("?");
      n.space();
      e.consequent.print(n);
      n.space();
      n.colon();
      e.alternative.print(n);
    });
    e(Ne, function (e, n) {
      n.with_square(function () {
        var t = e.elements,
          i = t.length;
        if (i > 0) n.space();
        t.forEach(function (e, t) {
          if (t) n.comma();
          e.print(n);
          if (t === i - 1 && e instanceof xn) n.comma();
        });
        if (i > 0) n.space();
      });
    });
    e(He, function (e, n) {
      if (e.properties.length > 0)
        n.with_block(function () {
          e.properties.forEach(function (e, t) {
            if (t) {
              n.print(",");
              n.newline();
            }
            n.indent();
            e.print(n);
          });
          n.newline();
        });
      else n.print("{}");
    });
    e(Ve, function (e, n) {
      n.print("class");
      n.space();
      if (e.name) {
        e.name.print(n);
        n.space();
      }
      if (e.extends) {
        var t = !(
          e.extends instanceof pn ||
          e.extends instanceof ke ||
          e.extends instanceof Je ||
          e.extends instanceof X
        );
        n.print("extends");
        if (t) n.print("(");
        else n.space();
        e.extends.print(n);
        if (t) n.print(")");
        else n.space();
      }
      if (e.properties.length > 0)
        n.with_block(function () {
          e.properties.forEach(function (e, t) {
            if (t) n.newline();
            n.indent();
            e.print(n);
          });
          n.newline();
        });
      else n.print("{}");
    });
    e(Xe, function (e, n) {
      n.print("new.target");
    });
    function c(e, n, t) {
      if (t.option("quote_keys")) t.print_string(e);
      else if ("" + +e == e && e >= 0) t.print(d(e));
      else if (zn(e) ? !t.option("ie8") : ot(e)) {
        if (n && t.option("keep_quoted_props")) t.print_string(e, n);
        else t.print_name(e);
      } else t.print_string(e, n);
    }
    e(Re, function (e, n) {
      function t(e) {
        var n = e.definition();
        return n ? n.mangled_name || n.name : e.name;
      }
      var i = n.option("shorthand");
      if (
        i &&
        e.value instanceof We &&
        ot(e.key) &&
        t(e.value) === e.key &&
        tt(e.key)
      )
        c(e.key, e.quote, n);
      else if (
        i &&
        e.value instanceof je &&
        e.value.left instanceof We &&
        ot(e.key) &&
        t(e.value.left) === e.key
      ) {
        c(e.key, e.quote, n);
        n.space();
        n.print("=");
        n.space();
        e.value.right.print(n);
      } else {
        if (!(e.key instanceof w)) c(e.key, e.quote, n);
        else
          n.with_square(function () {
            e.key.print(n);
          });
        n.colon();
        e.value.print(n);
      }
    });
    Ie.DEFMETHOD("_print_getter_setter", function (e, n) {
      var t = this;
      if (t.static) {
        n.print("static");
        n.space();
      }
      if (e) {
        n.print(e);
        n.space();
      }
      if (t.key instanceof rn) c(t.key.name, t.quote, n);
      else
        n.with_square(function () {
          t.key.print(n);
        });
      t.value._do_print(n, !0);
    });
    e(Ue, function (e, n) {
      e._print_getter_setter("set", n);
    });
    e(Pe, function (e, n) {
      e._print_getter_setter("get", n);
    });
    e(Le, function (e, n) {
      e._print_getter_setter(e.is_generator ? "*" : e.async && "async", n);
    });
    We.DEFMETHOD("_do_print", function (e) {
      var n = this.definition();
      e.print_name(n ? n.mangled_name || n.name : this.name);
    });
    e(We, function (e, n) {
      e._do_print(n);
    });
    e(xn, u);
    e(mn, function (e, n) {
      n.print("this");
    });
    e(_n, function (e, n) {
      n.print("super");
    });
    e(Dn, function (e, n) {
      n.print(e.getValue());
    });
    e(gn, function (e, t) {
      t.print_string(e.getValue(), e.quote, n);
    });
    e(bn, function (e, n) {
      if (i && e.start && null != e.start.raw) n.print(e.start.raw);
      else n.print(d(e.getValue()));
    });
    e(yn, function (e, n) {
      var t = e.getValue();
      var i = t.toString();
      if (t.raw_source) i = "/" + t.raw_source + i.slice(i.lastIndexOf("/"));
      i = n.to_utf8(i);
      n.print(i);
      var r = n.parent();
      if (r instanceof Me && /^in/.test(r.operator) && r.left === e)
        n.print(" ");
    });
    function l(e, n) {
      if (n.option("bracketize")) h(e, n);
      else if (!e || e instanceof $) n.force_semicolon();
      else e.print(n);
    }
    function p(e, n) {
      if (e.args.length > 0) return !0;
      return n.option("beautify");
    }
    function d(e) {
      var n,
        t = e.toString(10),
        i = [t.replace(/^0\./, ".").replace("e+", "e")];
      if (Math.floor(e) === e) {
        if (e >= 0)
          i.push("0x" + e.toString(16).toLowerCase(), "0" + e.toString(8));
        else
          i.push(
            "-0x" + (-e).toString(16).toLowerCase(),
            "-0" + (-e).toString(8)
          );
        if ((n = /^(.*?)(0+)$/.exec(e))) i.push(n[1] + "e" + n[2].length);
      } else if ((n = /^0?\.(0+)(.*)$/.exec(e)))
        i.push(
          n[2] + "e-" + (n[1].length + n[2].length),
          t.substr(t.indexOf("."))
        );
      return (function (e) {
        var n = e[0],
          t = n.length;
        for (var i = 1; i < e.length; ++i)
          if (e[i].length < t) t = (n = e[i]).length;
        return n;
      })(i);
    }
    function h(e, n) {
      if (!e || e instanceof $) n.print("{}");
      else if (e instanceof O) e.print(n);
      else
        n.with_block(function () {
          n.indent();
          e.print(n);
          n.newline();
        });
    }
    function v(e, n) {
      e.DEFMETHOD("add_source_map", function (e) {
        n(this, e);
      });
    }
    v(w, u);
    function m(e, n) {
      n.add_mapping(e.start);
    }
    v(k, m);
    v(C, m);
    v(We, m);
    v(te, m);
    v(M, m);
    v(q, u);
    v(J, m);
    v(ce, m);
    v(le, m);
    v(O, m);
    v(V, u);
    v(xe, m);
    v(he, m);
    v(ve, m);
    v(me, m);
    v(_e, m);
    v(Dn, m);
    v(Ue, function (e, n) {
      n.add_mapping(e.start, e.key.name);
    });
    v(Pe, function (e, n) {
      n.add_mapping(e.start, e.key.name);
    });
    v(Ie, function (e, n) {
      n.add_mapping(e.start, e.key);
    });
  })();
  function At(e, n) {
    if (!(this instanceof At)) return new At(e, n);
    mt.call(this, this.before, this.after);
    this.options = a(
      e,
      {
        arrows: !n,
        booleans: !n,
        collapse_vars: !n,
        comparisons: !n,
        computed_props: !n,
        conditionals: !n,
        dead_code: !n,
        drop_console: !1,
        drop_debugger: !n,
        ecma: 5,
        evaluate: !n,
        expression: !1,
        global_defs: {},
        hoist_funs: !1,
        hoist_props: !n,
        hoist_vars: !1,
        ie8: !1,
        if_return: !n,
        inline: !n,
        join_vars: !n,
        keep_classnames: !1,
        keep_fargs: !0,
        keep_fnames: !1,
        keep_infinity: !1,
        loops: !n,
        negate_iife: !n,
        passes: 1,
        properties: !n,
        pure_getters: !n && "strict",
        pure_funcs: null,
        reduce_funcs: !n,
        reduce_vars: !n,
        sequences: !n,
        side_effects: !n,
        switches: !n,
        top_retain: null,
        toplevel: !(!e || !e.top_retain),
        typeofs: !n,
        unsafe: !1,
        unsafe_arrows: !1,
        unsafe_comps: !1,
        unsafe_Function: !1,
        unsafe_math: !1,
        unsafe_methods: !1,
        unsafe_proto: !1,
        unsafe_regexp: !1,
        unsafe_undefined: !1,
        unused: !n,
        warnings: !1,
      },
      !0
    );
    var t = this.options.global_defs;
    if ("object" == typeof t)
      for (var i in t)
        if (/^@/.test(i) && y(t, i))
          t[i.slice(1)] = vt(t[i], { expression: !0 });
    if (!0 === this.options.inline) this.options.inline = 3;
    var r = this.options.pure_funcs;
    if ("function" == typeof r) this.pure_funcs = r;
    else
      this.pure_funcs = r
        ? function (e) {
            return r.indexOf(e.expression.print_to_string()) < 0;
          }
        : c;
    var o = this.options.top_retain;
    if (o instanceof RegExp)
      this.top_retain = function (e) {
        return o.test(e.name);
      };
    else if ("function" == typeof o) this.top_retain = o;
    else if (o) {
      if ("string" == typeof o) o = o.split(/,/);
      this.top_retain = function (e) {
        return o.indexOf(e.name) >= 0;
      };
    }
    var s = this.options.toplevel;
    this.toplevel =
      "string" == typeof s
        ? { funcs: /funcs/.test(s), vars: /vars/.test(s) }
        : { funcs: s, vars: s };
    var u = this.options.sequences;
    this.sequences_limit = 1 == u ? 800 : 0 | u;
    this.warnings_produced = {};
  }
  At.prototype = new mt();
  s(At.prototype, {
    option: function (e) {
      return this.options[e];
    },
    exposed: function (e) {
      if (e.export) return !0;
      if (e.global)
        for (var n = 0, t = e.orig.length; n < t; n++)
          if (!this.toplevel[e.orig[n] instanceof tn ? "funcs" : "vars"])
            return !0;
      return !1;
    },
    in_boolean_context: function () {
      if (!this.option("booleans")) return !1;
      var e = this.self();
      for (var n, t = 0; (n = this.parent(t)); t++) {
        if (
          n instanceof B ||
          (n instanceof qe && n.condition === e) ||
          (n instanceof j && n.condition === e) ||
          (n instanceof I && n.condition === e) ||
          (n instanceof fe && n.condition === e) ||
          (n instanceof Oe && "!" == n.operator && n.expression === e)
        )
          return !0;
        if (
          (n instanceof Me && ("&&" == n.operator || "||" == n.operator)) ||
          n instanceof qe ||
          n.tail_node() === e
        )
          e = n;
        else return !1;
      }
    },
    compress: function (e) {
      if (this.option("expression")) e.process_expression(!0);
      var n = +this.options.passes || 1;
      var t = 1 / 0;
      var i = !1;
      var r = { ie8: this.option("ie8") };
      for (var o = 0; o < n; o++) {
        e.figure_out_scope(r);
        if (o > 0 || this.option("reduce_vars")) e.reset_opt_flags(this);
        e = e.transform(this);
        if (n > 1) {
          var a = 0;
          e.walk(
            new $n(function () {
              a++;
            })
          );
          this.info("pass " + o + ": last_count: " + t + ", count: " + a);
          if (a < t) {
            t = a;
            i = !1;
          } else if (i) break;
          else i = !0;
        }
      }
      if (this.option("expression")) e.process_expression(!1);
      return e;
    },
    info: function () {
      if ("verbose" == this.options.warnings) w.warn.apply(w, arguments);
    },
    warn: function (e, n) {
      if (this.options.warnings) {
        var t = v(e, n);
        if (!(t in this.warnings_produced)) {
          this.warnings_produced[t] = !0;
          w.warn.apply(w, arguments);
        }
      }
    },
    clear_warnings: function () {
      this.warnings_produced = {};
    },
    before: function (e, n, t) {
      if (e._squeezed) return e;
      var i = !1;
      if (e instanceof L) {
        e = (e = e.hoist_properties(this)).hoist_declarations(this);
        i = !0;
      }
      n(e, this);
      n(e, this);
      var r = e.optimize(this);
      if (i && r instanceof L) {
        r.drop_unused(this);
        n(r, this);
      }
      if (r === e) r._squeezed = !0;
      return r;
    },
  });
  !(function () {
    function e(e, n) {
      e.DEFMETHOD("optimize", function (e) {
        if (this._optimized) return this;
        if (e.has_directive("use asm")) return this;
        var t = n(this, e);
        t._optimized = !0;
        return t;
      });
    }
    e(w, function (e, n) {
      return e;
    });
    w.DEFMETHOD("equivalent_to", function (e) {
      return (
        this.TYPE == e.TYPE && this.print_to_string() == e.print_to_string()
      );
    });
    L.DEFMETHOD("process_expression", function (e, n) {
      var t = this;
      var i = new mt(function (r) {
        if (e && r instanceof B) return s(re, r, { value: r.body });
        if (!e && r instanceof re) {
          if (n) {
            var o = r.value && r.value.drop_side_effect_free(n, !0);
            return o ? s(B, r, { body: o }) : s($, r);
          }
          return s(B, r, {
            body:
              r.value ||
              s(Oe, r, {
                operator: "void",
                expression: s(bn, r, { value: 0 }),
              }),
          });
        }
        if (r instanceof Ve || (r instanceof J && r !== t)) return r;
        if (r instanceof T) {
          var a = r.body.length - 1;
          if (a >= 0) r.body[a] = r.body[a].transform(i);
        } else if (r instanceof fe) {
          r.body = r.body.transform(i);
          if (r.alternative) r.alternative = r.alternative.transform(i);
        } else if (r instanceof P) r.body = r.body.transform(i);
        return r;
      });
      t.transform(i);
    });
    !(function (e) {
      e(w, u);
      function n(e, n) {
        n.assignments = 0;
        n.direct_access = !1;
        n.escaped = !1;
        if (n.scope.uses_eval || n.scope.uses_with) n.fixed = !1;
        else if (n.orig[0] instanceof Qe || !e.exposed(n)) n.fixed = n.init;
        else n.fixed = !1;
        n.recursive_refs = 0;
        n.references = [];
        n.should_replace = void 0;
        n.single_use = void 0;
      }
      function t(e, t, i) {
        i.variables.each(function (i) {
          n(t, i);
          if (null === i.fixed) {
            i.safe_ids = e.safe_ids;
            a(e, i, !0);
          } else if (i.fixed) {
            e.loop_ids[i.id] = e.in_loop;
            a(e, i, !0);
          }
        });
      }
      function i(e, t) {
        if (t.block_scope)
          t.block_scope.variables.each(function (t) {
            n(e, t);
          });
      }
      function r(e) {
        e.safe_ids = Object.create(e.safe_ids);
      }
      function o(e) {
        e.safe_ids = Object.getPrototypeOf(e.safe_ids);
      }
      function a(e, n, t) {
        e.safe_ids[n.id] = t;
      }
      function f(e, n) {
        if (e.safe_ids[n.id]) {
          if (null == n.fixed) {
            var t = n.orig[0];
            if (t instanceof nn || "arguments" == t.name) return !1;
            n.fixed = s(wn, t);
          }
          return !0;
        }
        return n.fixed instanceof Z;
      }
      function c(e, n, t) {
        if (void 0 === n.fixed) return !0;
        if (null === n.fixed && n.safe_ids) {
          n.safe_ids[n.id] = !1;
          delete n.safe_ids;
          return !0;
        }
        if (!y(e.safe_ids, n.id)) return !1;
        if (!f(e, n)) return !1;
        if (!1 === n.fixed) return !1;
        if (null != n.fixed && (!t || n.references.length > n.assignments))
          return !1;
        return g(n.orig, function (e) {
          return !(e instanceof Qe || e instanceof tn || e instanceof on);
        });
      }
      function l(e, n) {
        if ((n = ln(n)) instanceof w) return;
        var t;
        if (e instanceof Ne) {
          var i = e.elements;
          if ("length" == n) return _(i.length, e);
          if ("number" == typeof n && n in i) t = i[n];
        } else if (e instanceof He) {
          n = "" + n;
          var r = e.properties;
          for (var o = r.length; --o >= 0; ) {
            if (!(r[o] instanceof Re)) return;
            if (!t && r[o].key === n) t = r[o].value;
          }
        }
        return (t instanceof pn && t.fixed_value()) || t;
      }
      var p = new $n(function (e) {
        if (!(e instanceof We)) return;
        var n = e.definition();
        if (!n) return;
        if (e instanceof pn) n.references.push(e);
        n.fixed = !1;
      });
      e(W, function (e, n, i) {
        r(e);
        t(e, i, this);
        n();
        o(e);
        return !0;
      });
      e(G, h);
      e(ze, function (e) {
        var n = this;
        if (n.left instanceof K) {
          n.left.walk(p);
          return;
        }
        if ("=" != n.operator || !(n.left instanceof pn)) return;
        var t = n.left.definition();
        if (c(e, t, n.right)) {
          t.references.push(n.left);
          t.assignments++;
          t.fixed = function () {
            return n.right;
          };
          a(e, t, !1);
          n.right.walk(e);
          a(e, t, !0);
          return !0;
        }
      });
      e(Me, function (e) {
        if (!vn(this.operator)) return;
        this.left.walk(e);
        r(e);
        this.right.walk(e);
        o(e);
        return !0;
      });
      e(T, function (e, n, t) {
        i(t, this);
      });
      e(Je, function (e, n) {
        this.inlined = !1;
        r(e);
        n();
        o(e);
        return !0;
      });
      e(qe, function (e) {
        this.condition.walk(e);
        r(e);
        this.consequent.walk(e);
        o(e);
        r(e);
        this.alternative.walk(e);
        o(e);
        return !0;
      });
      function d(e, n, i) {
        this.inlined = !1;
        var r = e.safe_ids;
        e.safe_ids = Object.create(null);
        t(e, i, this);
        n();
        e.safe_ids = r;
        return !0;
      }
      e(Ye, d);
      e(Z, d);
      e(N, function (e, n, t) {
        i(t, this);
        var a = e.in_loop;
        e.in_loop = this;
        r(e);
        this.body.walk(e);
        this.condition.walk(e);
        o(e);
        e.in_loop = a;
        return !0;
      });
      e(I, function (e, n, t) {
        i(t, this);
        if (this.init) this.init.walk(e);
        var a = e.in_loop;
        e.in_loop = this;
        if (this.condition) {
          r(e);
          this.condition.walk(e);
          o(e);
        }
        r(e);
        this.body.walk(e);
        o(e);
        if (this.step) {
          r(e);
          this.step.walk(e);
          o(e);
        }
        e.in_loop = a;
        return !0;
      });
      e(R, function (e, n, t) {
        i(t, this);
        this.init.walk(p);
        this.object.walk(e);
        var a = e.in_loop;
        e.in_loop = this;
        r(e);
        this.body.walk(e);
        o(e);
        e.in_loop = a;
        return !0;
      });
      function h(e, n, i) {
        var u = this;
        u.inlined = !1;
        r(e);
        t(e, i, u);
        var f;
        if (!u.name && (f = e.parent()) instanceof we && f.expression === u)
          u.argnames.forEach(function (n, t) {
            if (!n.definition) return;
            var i = n.definition();
            if (!u.uses_arguments && void 0 === i.fixed) {
              i.fixed = function () {
                return f.args[t] || s(wn, f);
              };
              e.loop_ids[i.id] = e.in_loop;
              a(e, i, !0);
            } else i.fixed = !1;
          });
        n();
        o(e);
        return !0;
      }
      e(X, h);
      e(fe, function (e) {
        this.condition.walk(e);
        r(e);
        this.body.walk(e);
        o(e);
        if (this.alternative) {
          r(e);
          this.alternative.walk(e);
          o(e);
        }
        return !0;
      });
      e(q, function (e) {
        r(e);
        this.body.walk(e);
        o(e);
        return !0;
      });
      e(le, function (e, n) {
        r(e);
        n();
        o(e);
        return !0;
      });
      e(un, function () {
        this.definition().fixed = !1;
      });
      e(pn, function (e, n, t) {
        var i = this.definition();
        i.references.push(this);
        if (1 == i.references.length && !i.fixed && i.orig[0] instanceof tn)
          e.loop_ids[i.id] = e.in_loop;
        var r;
        if (void 0 === i.fixed || !f(e, i) || "m" == i.single_use) i.fixed = !1;
        else if (i.fixed) {
          if ((r = this.fixed_value()) instanceof J && Pn(e, i))
            i.recursive_refs++;
          else if (
            r &&
            !t.exposed(i) &&
            (function (e, n, t) {
              return (
                n.option("unused") &&
                !t.scope.uses_eval &&
                !t.scope.uses_with &&
                t.references.length - t.recursive_refs == 1 &&
                e.loop_ids[t.id] === e.in_loop
              );
            })(e, t, i)
          )
            i.single_use =
              r instanceof J ||
              r instanceof Ve ||
              (i.scope === this.scope && r.is_constant_expression());
          else i.single_use = !1;
          if (
            (function e(n, t, i, r, o) {
              var a = n.parent(r);
              if (
                En(t, a) ||
                (!o &&
                  a instanceof we &&
                  a.expression === t &&
                  !(i instanceof G) &&
                  !(i instanceof Ve) &&
                  (!(i instanceof X) ||
                    (!(a instanceof xe) && i.contains_this())))
              )
                return !0;
              else if (a instanceof Ne) return e(n, a, a, r + 1);
              else if (a instanceof Re && t === a.value) {
                var s = n.parent(r + 1);
                return e(n, s, s, r + 2);
              } else if (a instanceof ke && a.expression === t)
                return !o && e(n, a, l(i, a.property), r + 1);
            })(
              e,
              this,
              r,
              0,
              (function (e) {
                if (!e) return !1;
                return e.is_constant() || e instanceof J || e instanceof mn;
              })(r)
            )
          )
            if (i.single_use) i.single_use = "m";
            else i.fixed = !1;
        }
        !(function e(n, t, i, r, o, a, s) {
          var u = n.parent(a);
          if (o) {
            if (o.is_constant()) return;
            if (o instanceof Je) return;
          }
          if (
            (u instanceof ze && "=" == u.operator && r === u.right) ||
            (u instanceof we && r !== u.expression) ||
            (u instanceof ie && r === u.value && r.scope !== t.scope) ||
            (u instanceof Fe && r === u.value) ||
            (u instanceof On && r === u.value && r.scope !== t.scope)
          ) {
            if (s > 1 && (!o || !o.is_constant_expression(i))) s = 1;
            if (!t.escaped || t.escaped > s) t.escaped = s;
            return;
          } else if (
            u instanceof Ne ||
            u instanceof Tn ||
            (u instanceof Me && vn(u.operator)) ||
            (u instanceof qe && r !== u.condition) ||
            u instanceof Y ||
            (u instanceof Ce && r === u.tail_node())
          )
            e(n, t, i, u, u, a + 1, s);
          else if (u instanceof Re && r === u.value) {
            var f = n.parent(a + 1);
            e(n, t, i, f, f, a + 2, s);
          } else if (u instanceof ke && r === u.expression) {
            e(n, t, i, u, (o = l(o, u.property)), a + 1, s + 1);
            if (o) return;
          }
          if (0 == a) t.direct_access = !0;
        })(e, i, this.scope, this, r, 0, 1);
      });
      e(V, function (e, i, r) {
        this.globals.each(function (e) {
          n(r, e);
        });
        t(e, r, this);
      });
      e(he, function (e, n, t) {
        i(t, this);
        r(e);
        S(this, e);
        o(e);
        if (this.bcatch) {
          r(e);
          this.bcatch.walk(e);
          o(e);
        }
        if (this.bfinally) this.bfinally.walk(e);
        return !0;
      });
      e(Fe, function (e, n) {
        var t = this;
        if (t.name instanceof K) {
          t.name.walk(p);
          return;
        }
        var i = t.name.definition();
        if (c(e, i, t.value)) {
          if (t.value) {
            i.fixed = function () {
              return t.value;
            };
            e.loop_ids[i.id] = e.in_loop;
            a(e, i, !1);
            n();
          }
          a(e, i, !0);
          return !0;
        } else if (t.value) i.fixed = !1;
      });
      e(H, function (e, n, t) {
        i(t, this);
        var a = e.in_loop;
        e.in_loop = this;
        r(e);
        this.condition.walk(e);
        this.body.walk(e);
        o(e);
        e.in_loop = a;
        return !0;
      });
    })(function (e, n) {
      e.DEFMETHOD("reduce_vars", n);
    });
    V.DEFMETHOD("reset_opt_flags", function (e) {
      var n = e.option("reduce_vars");
      var t = new $n(function (i, r) {
        i._squeezed = !1;
        i._optimized = !1;
        if (n) return i.reduce_vars(t, r, e);
      });
      t.safe_ids = Object.create(null);
      t.in_loop = null;
      t.loop_ids = Object.create(null);
      this.walk(t);
    });
    We.DEFMETHOD("fixed_value", function () {
      var e = this.definition().fixed;
      if (!e || e instanceof w) return e;
      return e();
    });
    pn.DEFMETHOD("is_immutable", function () {
      var e = this.definition().orig;
      return 1 == e.length && e[0] instanceof on;
    });
    function n(e) {
      return e instanceof G || e instanceof X;
    }
    function r(e) {
      if (e instanceof mn) return !0;
      if (e instanceof pn) return e.definition().orig[0] instanceof on;
      if (e instanceof ke) {
        if ((e = e.expression) instanceof pn) {
          if (e.is_immutable()) return !1;
          e = e.fixed_value();
        }
        if (!e) return !0;
        if (e instanceof yn) return !1;
        if (e instanceof Dn) return !0;
        return r(e);
      }
      return !1;
    }
    function o(e, n) {
      if (!(e instanceof pn)) return !1;
      var t = e.definition().orig;
      for (var i = t.length; --i >= 0; ) if (t[i] instanceof n) return !0;
    }
    function a(e, n) {
      var t,
        i = 0;
      for (; (t = e.parent(i++)) && !(t instanceof L); )
        if (t instanceof ve) {
          t = t.argname.definition().scope;
          break;
        }
      return t.find_variable(n);
    }
    function s(e, n, t) {
      if (!t) t = {};
      if (n) {
        if (!t.start) t.start = n.start;
        if (!t.end) t.end = n.end;
      }
      return new e(t);
    }
    function h(e, n) {
      if (1 == n.length) return n[0];
      return s(Ce, e, { expressions: n.reduce(F, []) });
    }
    function _(e, n) {
      switch (typeof e) {
        case "string":
          return s(gn, n, { value: e });
        case "number":
          if (isNaN(e)) return s(Fn, n);
          if (isFinite(e))
            return 1 / e < 0
              ? s(Oe, n, { operator: "-", expression: s(bn, n, { value: -e }) })
              : s(bn, n, { value: e });
          return e < 0
            ? s(Oe, n, { operator: "-", expression: s(Cn, n) })
            : s(Cn, n);
        case "boolean":
          return s(e ? Sn : Bn, n);
        case "undefined":
          return s(wn, n);
        default:
          if (null === e) return s(An, n, { value: null });
          if (e instanceof RegExp) return s(yn, n, { value: e });
          throw Error(
            v("Can't handle constant of type: {type}", { type: typeof e })
          );
      }
    }
    function A(e, n, t) {
      if (
        (e instanceof Oe && "delete" == e.operator) ||
        (e instanceof we &&
          e.expression === n &&
          (t instanceof ke || (t instanceof pn && "eval" == t.name)))
      )
        return h(n, [s(bn, n, { value: 0 }), t]);
      return t;
    }
    function F(e, n) {
      if (n instanceof Ce) e.push.apply(e, n.expressions);
      else e.push(n);
      return e;
    }
    function M(e) {
      if (null === e) return [];
      if (e instanceof O) return e.body;
      if (e instanceof $) return [];
      if (e instanceof x) return [e];
      throw Error("Can't convert thing to statement array");
    }
    function U(e) {
      if (null === e) return !0;
      if (e instanceof $) return !0;
      if (e instanceof O) return 0 == e.body.length;
      return !1;
    }
    function me(e) {
      return !(
        e instanceof Ye ||
        e instanceof Z ||
        e instanceof ge ||
        e instanceof be ||
        e instanceof Ae ||
        e instanceof Ee
      );
    }
    function ye(e) {
      if (e instanceof z) return e.body instanceof O ? e.body : e;
      return e;
    }
    function Ue(e) {
      if ("Call" != e.TYPE) return !1;
      return e.expression instanceof X || Ue(e.expression);
    }
    function Xe(e) {
      return e instanceof pn && e.definition().undeclared;
    }
    var en = D(
      "Array Boolean clearInterval clearTimeout console Date decodeURI decodeURIComponent encodeURI encodeURIComponent Error escape eval EvalError Function isFinite isNaN JSON Math Number parseFloat parseInt RangeError ReferenceError RegExp Object setInterval setTimeout String SyntaxError TypeError unescape URIError"
    );
    pn.DEFMETHOD("is_declared", function (e) {
      return (
        !this.definition().undeclared || (e.option("unsafe") && en(this.name))
      );
    });
    var an = D("Infinity NaN undefined");
    function sn(e) {
      return e instanceof Cn || e instanceof Fn || e instanceof wn;
    }
    function fn(e, i) {
      var a = i.find_parent(L).get_defun_scope();
      var u,
        f = 10;
      do {
        u = !1;
        l(e);
        if (i.option("dead_code")) v(e, i);
        if (i.option("if_return")) p(e, i);
        if (i.sequences_limit > 0) {
          D(e, i);
          y(e, i);
        }
        if (i.option("join_vars")) x(e);
        if (i.option("collapse_vars")) c(e, i);
      } while (u && f-- > 0);
      function c(e, i) {
        if (a.uses_eval || a.uses_with) return e;
        var f;
        var c = [];
        var l = i.self() instanceof he;
        var p = e.length;
        var h = new mt(
          function (e, n) {
            if ($) return e;
            if (e instanceof ce) {
              if (!O) {
                if (e !== m[_]) return e;
                _++;
              }
              e.expression = e.expression.transform(h);
              for (var t = 0, r = e.body.length; !$ && t < r; t++) {
                var o = e.body[t];
                if (o instanceof de) {
                  if (!O) {
                    if (o !== m[_]) continue;
                    _++;
                  }
                  o.expression = o.expression.transform(h);
                  if (x || !w) break;
                }
              }
              $ = !0;
              return e;
            }
            if (!O) {
              if (e !== m[_]) return e;
              if (++_ < m.length) return;
              O = !0;
              if (
                (y = (function e(n, t) {
                  var i = h.parent(t);
                  if (i instanceof Me) return n;
                  if (i instanceof we) return n;
                  if (i instanceof de) return n;
                  if (i instanceof qe) return n;
                  if (i instanceof _e) return e(i, t + 1);
                  if (i instanceof ie) return n;
                  if (i instanceof fe) return n;
                  if (i instanceof z) return n;
                  if (i instanceof Ce) return e(i, t + 1);
                  if (i instanceof B) return e(i, t + 1);
                  if (i instanceof ce) return n;
                  if (i instanceof Fe) return n;
                  return null;
                })(e, 0)) === e
              )
                $ = !0;
              return e;
            }
            var f = h.parent();
            if (
              (e instanceof ze &&
                "=" != e.operator &&
                E.equivalent_to(e.left)) ||
              e instanceof Tn ||
              (e instanceof we &&
                E instanceof ke &&
                E.equivalent_to(e.expression)) ||
              e instanceof C ||
              e instanceof K ||
              (e instanceof z && !(e instanceof I)) ||
              e instanceof he ||
              e instanceof P ||
              (f instanceof I && e !== f.init) ||
              ((x || !w) && e instanceof pn && !e.is_declared(i))
            ) {
              $ = !0;
              return e;
            }
            if (q && !(e instanceof Ge) && E.equivalent_to(e)) {
              if (En(e, f)) {
                if (b) M++;
                return e;
              }
              u = $ = !0;
              M++;
              i.info("Collapsing {name} [{file}:{line},{col}]", {
                name: e.print_to_string(),
                file: e.start.file,
                line: e.start.line,
                col: e.start.col,
              });
              if (D instanceof $e) return s(Oe, D, D);
              if (D instanceof Fe) {
                if (b) {
                  $ = !1;
                  return e;
                }
                var c = D.name.definition();
                var p = D.value;
                if (c.references.length - c.replaced == 1 && !i.exposed(c)) {
                  c.replaced++;
                  if (S && sn(p)) return p.transform(i);
                  else return A(f, e, p);
                }
                return s(ze, D, {
                  operator: "=",
                  left: s(pn, D.name, D.name),
                  right: p,
                });
              }
              D.write_only = !1;
              return D;
            }
            var d;
            if (
              e instanceof we ||
              e instanceof ie ||
              (e instanceof ke && (x || e.expression.may_throw_on_access(i))) ||
              (e instanceof pn &&
                (F[e.name] ||
                  (x &&
                    !(function (e) {
                      if (1 == e.orig.length && e.orig[0] instanceof tn)
                        return !0;
                      if (e.scope.get_defun_scope() !== a) return !1;
                      return e.references.every(function (e) {
                        return e.scope.get_defun_scope() === a;
                      });
                    })(e.definition())))) ||
              ((d = (function (e) {
                if (e instanceof Fe) return e.value && e.name;
                return En(e.left, e);
              })(e)) &&
                (d instanceof ke || d.name in F)) ||
              (k &&
                (l
                  ? e.has_side_effects(i)
                  : (function e(n, t) {
                      if (n instanceof ze) return e(n.left, !0) || e(n.right);
                      if (n instanceof _e) return !1;
                      if (n instanceof Te) return e(n.expression, !0);
                      if (n instanceof Fe) return n.value && e(n.value);
                      if (t) {
                        if (n instanceof Be) return e(n.expression, !0);
                        if (n instanceof Se)
                          return e(n.expression, !0) || e(n.property);
                        if (n instanceof pn) return n.definition().scope !== a;
                      }
                      return n.has_side_effects(i);
                    })(e))) ||
              ((x || !w) &&
                ((f instanceof Me && vn(f.operator)) ||
                  f instanceof qe ||
                  f instanceof fe))
            ) {
              y = e;
              if (e instanceof L) $ = !0;
            }
            if (e instanceof L) return e;
          },
          function (e) {
            if (!$ && y === e) $ = !0;
          }
        );
        var v = new mt(function (e) {
          if ($) return e;
          if (!O) {
            if (e !== m[_]) return e;
            if (++_ < m.length) return;
            O = !0;
            return e;
          }
          if (e instanceof pn && e.name == U.name) {
            if (!--M) $ = !0;
            if (En(e, v.parent())) return e;
            U.replaced++;
            b.replaced--;
            return D.value;
          }
          if (e instanceof pe || e instanceof L) return e;
        });
        for (; --p >= 0; ) {
          if (0 == p && i.option("unused")) J();
          var m = [];
          W(e[p]);
          for (; c.length > 0; ) {
            var _ = 0;
            var D = (m = c.pop())[m.length - 1];
            var b = null;
            var y = null;
            var E = X(D);
            if (!E || r(E) || E.has_side_effects(i)) continue;
            var F = Q(D);
            if (E instanceof pn) F[E.name] = !1;
            var w = b;
            if (!w && E instanceof pn)
              if (
                (U = E.definition()).references.length - U.replaced ==
                (D instanceof Fe ? 1 : 2)
              )
                w = !0;
            var x = ne(D);
            var k = D.may_throw(i);
            var S = D.name instanceof nn;
            var O = S;
            var $ = !1,
              M = 0,
              q = !f || !O;
            if (!q) {
              for (
                var N = i.self().argnames.lastIndexOf(D.name) + 1;
                !$ && N < f.length;
                N++
              )
                f[N].transform(h);
              q = !0;
            }
            for (var H = p; !$ && H < e.length; H++) e[H].transform(h);
            if (b) {
              var U = D.name.definition();
              if ($ && U.references.length - U.replaced > M) M = !1;
              else {
                $ = !1;
                _ = 0;
                O = S;
                for (H = p; !$ && H < e.length; H++) e[H].transform(v);
                b.single_use = !1;
              }
            }
            if (M && !ee(D)) e.splice(p, 1);
          }
        }
        function V(e, n, t) {
          var i = !1,
            r = !(e instanceof G);
          n.walk(
            new $n(function (n, o) {
              if (i) return !0;
              if (n instanceof pn && e.variables.has(n.name)) {
                var s = n.definition().scope;
                if (s !== a)
                  for (; (s = s.parent_scope); ) if (s === a) return !0;
                return (i = !0);
              }
              if ((t || r) && n instanceof mn) return (i = !0);
              if (n instanceof L && !(n instanceof G)) {
                var u = r;
                r = !1;
                o();
                r = u;
                return !0;
              }
            })
          );
          return i;
        }
        function J() {
          var e,
            r = i.self();
          if (
            n(r) &&
            !r.name &&
            !r.uses_arguments &&
            !r.uses_eval &&
            (e = i.parent()) instanceof we &&
            e.expression === r &&
            g(e.args, function (e) {
              return !(e instanceof Y);
            })
          ) {
            var o = i.has_directive("use strict");
            if (o && !t(o, r.body)) o = !1;
            var a = r.argnames.length;
            f = e.args.slice(a);
            var u = Object.create(null);
            for (var l = a; --l >= 0; ) {
              var p = r.argnames[l];
              var d = e.args[l];
              f.unshift(s(Fe, p, { name: p, value: d }));
              if (p.name in u) continue;
              u[p.name] = !0;
              if (p instanceof Y) {
                var h = e.args.slice(l);
                if (
                  g(h, function (e) {
                    return !V(r, e, o);
                  })
                )
                  c.unshift([
                    s(Fe, p, {
                      name: p.expression,
                      value: s(Ne, e, { elements: h }),
                    }),
                  ]);
              } else {
                if (!d) d = s(wn, p).transform(i);
                else if (V(r, d, o)) d = null;
                if (d) c.unshift([s(Fe, p, { name: p, value: d })]);
              }
            }
          }
        }
        function W(e) {
          m.push(e);
          if (e instanceof ze) {
            if (!e.left.has_side_effects(i)) c.push(m.slice());
            W(e.right);
          } else if (e instanceof Me) {
            W(e.left);
            W(e.right);
          } else if (e instanceof we) {
            W(e.expression);
            e.args.forEach(W);
          } else if (e instanceof de) W(e.expression);
          else if (e instanceof qe) {
            W(e.condition);
            W(e.consequent);
            W(e.alternative);
          } else if (
            e instanceof _e &&
            (i.option("unused") || !(e instanceof be))
          )
            e.definitions.forEach(W);
          else if (e instanceof j) {
            W(e.condition);
            if (!(e.body instanceof T)) W(e.body);
          } else if (e instanceof ie) {
            if (e.value) W(e.value);
          } else if (e instanceof I) {
            if (e.init) W(e.init);
            if (e.condition) W(e.condition);
            if (e.step) W(e.step);
            if (!(e.body instanceof T)) W(e.body);
          } else if (e instanceof R) {
            W(e.object);
            if (!(e.body instanceof T)) W(e.body);
          } else if (e instanceof fe) {
            W(e.condition);
            if (!(e.body instanceof T)) W(e.body);
            if (e.alternative && !(e.alternative instanceof T))
              W(e.alternative);
          } else if (e instanceof Ce) e.expressions.forEach(W);
          else if (e instanceof B) W(e.body);
          else if (e instanceof ce) {
            W(e.expression);
            e.body.forEach(W);
          } else if (e instanceof Te) {
            if ("++" == e.operator || "--" == e.operator) c.push(m.slice());
          } else if (e instanceof Fe)
            if (e.value) {
              c.push(m.slice());
              W(e.value);
            }
          m.pop();
        }
        function X(e) {
          if (e instanceof Fe && e.name instanceof Ge) {
            var n = e.name.definition();
            if (!t(e.name, n.orig)) return;
            var r = n.orig.length - n.eliminated;
            var a = n.references.length - n.replaced;
            if (
              (r > 1 && !(e.name instanceof nn)) ||
              (a > 1
                ? (function (n) {
                    var t = e.value;
                    if (!(t instanceof pn)) return;
                    if ("arguments" == t.name) return;
                    var i = t.definition();
                    if (i.undeclared) return;
                    return (b = i);
                  })()
                : !i.exposed(n))
            )
              return s(pn, e.name, e.name);
          } else {
            var u = e[e instanceof ze ? "left" : "expression"];
            return !o(u, Qe) && u;
          }
        }
        function Z(e) {
          return e[e instanceof ze ? "right" : "value"];
        }
        function Q(e) {
          var n = Object.create(null);
          if (e instanceof Te) return n;
          var t = new $n(function (e, i) {
            var r = e;
            for (; r instanceof ke; ) r = r.expression;
            if (r instanceof pn || r instanceof mn)
              n[r.name] = n[r.name] || En(e, t.parent());
          });
          Z(e).walk(t);
          return n;
        }
        function ee(n) {
          if (n.name instanceof nn) {
            var t = i.parent(),
              r = i.self().argnames;
            var o = r.indexOf(n.name);
            if (o < 0) t.args.length = Math.min(t.args.length, r.length - 1);
            else {
              var a = t.args;
              if (a[o]) a[o] = s(bn, a[o], { value: 0 });
            }
            return !0;
          }
          var u = !1;
          return e[p].transform(
            new mt(
              function (e, t, i) {
                if (u) return e;
                if (e === n || e.body === n) {
                  u = !0;
                  if (e instanceof Fe) {
                    e.value = null;
                    return e;
                  }
                  return i ? d.skip : null;
                }
              },
              function (e) {
                if (e instanceof Ce)
                  switch (e.expressions.length) {
                    case 0:
                      return null;
                    case 1:
                      return e.expressions[0];
                  }
              }
            )
          );
        }
        function ne(e) {
          if (e instanceof Te) return !1;
          return Z(e).has_side_effects(i);
        }
      }
      function l(e) {
        var n = [];
        for (var t = 0; t < e.length; ) {
          var i = e[t];
          if (i instanceof O && g(i.body, me)) {
            u = !0;
            l(i.body);
            [].splice.apply(e, [t, 1].concat(i.body));
            t += i.body.length;
          } else if (i instanceof $) {
            u = !0;
            e.splice(t, 1);
          } else if (i instanceof k) {
            if (n.indexOf(i.value) < 0) {
              t++;
              n.push(i.value);
            } else {
              u = !0;
              e.splice(t, 1);
            }
          } else t++;
        }
      }
      function p(e, n) {
        var t = n.self();
        var i = (function (e) {
          var n = 0;
          for (var t = e.length; --t >= 0; ) {
            var i = e[t];
            if (i instanceof fe && i.body instanceof re) if (++n > 1) return !0;
          }
          return !1;
        })(e);
        var r = t instanceof J;
        for (var o = e.length; --o >= 0; ) {
          var a = e[o];
          var f = b(o);
          var c = e[f];
          if (r && !c && a instanceof re) {
            if (!a.value) {
              u = !0;
              e.splice(o, 1);
              continue;
            }
            if (a.value instanceof Oe && "void" == a.value.operator) {
              u = !0;
              e[o] = s(B, a, { body: a.value.expression });
              continue;
            }
          }
          if (a instanceof fe) {
            if (v((p = Rn(a.body)))) {
              if (p.label) m(p.label.thedef.references, p);
              u = !0;
              (a = a.clone()).condition = a.condition.negate(n);
              var l = g(a.body, p);
              a.body = s(O, a, { body: M(a.alternative).concat(D()) });
              a.alternative = s(O, a, { body: l });
              e[o] = a.transform(n);
              continue;
            }
            var p;
            if (v((p = Rn(a.alternative)))) {
              if (p.label) m(p.label.thedef.references, p);
              u = !0;
              (a = a.clone()).body = s(O, a.body, {
                body: M(a.body).concat(D()),
              });
              l = g(a.alternative, p);
              a.alternative = s(O, a.alternative, { body: l });
              e[o] = a.transform(n);
              continue;
            }
          }
          if (a instanceof fe && a.body instanceof re) {
            var d = a.body.value;
            if (
              !d &&
              !a.alternative &&
              ((r && !c) || (c instanceof re && !c.value))
            ) {
              u = !0;
              e[o] = s(B, a.condition, { body: a.condition });
              continue;
            }
            if (d && !a.alternative && c instanceof re && c.value) {
              u = !0;
              (a = a.clone()).alternative = c;
              e.splice(o, 1, a.transform(n));
              e.splice(f, 1);
              continue;
            }
            if (d && !a.alternative && ((!c && r && i) || c instanceof re)) {
              u = !0;
              (a = a.clone()).alternative = c || s(re, a, { value: null });
              e.splice(o, 1, a.transform(n));
              if (c) e.splice(f, 1);
              continue;
            }
            var h = e[y(o)];
            if (
              n.option("sequences") &&
              r &&
              !a.alternative &&
              h instanceof fe &&
              h.body instanceof re &&
              b(f) == e.length &&
              c instanceof B
            ) {
              u = !0;
              (a = a.clone()).alternative = s(O, c, {
                body: [c, s(re, c, { value: null })],
              });
              e.splice(o, 1, a.transform(n));
              e.splice(f, 1);
              continue;
            }
          }
        }
        function v(i) {
          if (!i) return !1;
          for (var a = o + 1, s = e.length; a < s; a++) {
            var u = e[a];
            if (u instanceof be || u instanceof ge) return !1;
          }
          var f = i instanceof ae ? n.loopcontrol_target(i) : null;
          return (
            (i instanceof re &&
              r &&
              (!(c = i.value) || (c instanceof Oe && "void" == c.operator))) ||
            (i instanceof ue && t === ye(f)) ||
            (i instanceof se && f instanceof O && t === f)
          );
          var c;
        }
        function D() {
          var n = e.slice(o + 1);
          e.length = o + 1;
          return n.filter(function (n) {
            if (n instanceof Z) {
              e.push(n);
              return !1;
            }
            return !0;
          });
        }
        function g(e, n) {
          var t = M(e).slice(0, -1);
          if (n.value) t.push(s(B, n.value, { body: n.value.expression }));
          return t;
        }
        function b(n) {
          for (var t = n + 1, i = e.length; t < i; t++) {
            var r = e[t];
            if (!(r instanceof De && _(r))) break;
          }
          return t;
        }
        function y(n) {
          for (var t = n; --t >= 0; ) {
            var i = e[t];
            if (!(i instanceof De && _(i))) break;
          }
          return t;
        }
      }
      function v(e, n) {
        var t;
        var i = n.self();
        for (var r = 0, o = 0, a = e.length; r < a; r++) {
          var s = e[r];
          if (s instanceof ae) {
            var f = n.loopcontrol_target(s);
            if (
              (s instanceof se && !(f instanceof z) && ye(f) === i) ||
              (s instanceof ue && ye(f) === i)
            ) {
              if (s.label) m(s.label.thedef.references, s);
            } else e[o++] = s;
          } else e[o++] = s;
          if (Rn(s)) {
            t = e.slice(r + 1);
            break;
          }
        }
        e.length = o;
        u = o != a;
        if (t)
          t.forEach(function (t) {
            cn(n, t, e);
          });
      }
      function _(e) {
        return g(e.definitions, function (e) {
          return !e.value;
        });
      }
      function D(e, n) {
        if (e.length < 2) return;
        var t = [],
          i = 0;
        function r() {
          if (!t.length) return;
          var n = h(t[0], t);
          e[i++] = s(B, n, { body: n });
          t = [];
        }
        for (var o = 0, a = e.length; o < a; o++) {
          var f = e[o];
          if (f instanceof B) {
            if (t.length >= n.sequences_limit) r();
            var c = f.body;
            if (t.length > 0) c = c.drop_side_effect_free(n);
            if (c) F(t, c);
          } else if ((f instanceof _e && _(f)) || f instanceof Z) e[i++] = f;
          else {
            r();
            e[i++] = f;
          }
        }
        r();
        e.length = i;
        if (i != a) u = !0;
      }
      function b(e, n) {
        if (!(e instanceof O)) return e;
        var t = null;
        for (var i = 0, r = e.body.length; i < r; i++) {
          var o = e.body[i];
          if (o instanceof De && _(o)) n.push(o);
          else if (t) return !1;
          else t = o;
        }
        return t;
      }
      function y(e, n) {
        function t(e) {
          r--;
          u = !0;
          var t = i.body;
          return h(t, [t, e]).transform(n);
        }
        var i,
          r = 0;
        for (var o = 0; o < e.length; o++) {
          var a = e[o];
          if (i)
            if (a instanceof ie) a.value = t(a.value || s(wn, a).transform(n));
            else if (a instanceof I) {
              if (!(a.init instanceof _e)) {
                var f = !1;
                i.body.walk(
                  new $n(function (e) {
                    if (f || e instanceof L) return !0;
                    if (e instanceof Me && "in" == e.operator) {
                      f = !0;
                      return !0;
                    }
                  })
                );
                if (!f)
                  if (a.init) a.init = t(a.init);
                  else {
                    a.init = i.body;
                    r--;
                    u = !0;
                  }
              }
            } else if (a instanceof R) {
              if (!(a.init instanceof be || a.init instanceof ge))
                a.object = t(a.object);
            } else if (a instanceof fe) a.condition = t(a.condition);
            else if (a instanceof ce) a.expression = t(a.expression);
            else if (a instanceof P) a.expression = t(a.expression);
          if (n.option("conditionals") && a instanceof fe) {
            var c = [];
            var l = b(a.body, c);
            var p = b(a.alternative, c);
            if (!1 !== l && !1 !== p && c.length > 0) {
              var d = c.length;
              c.push(
                s(fe, a, {
                  condition: a.condition,
                  body: l || s($, a.body),
                  alternative: p,
                })
              );
              c.unshift(r, 1);
              [].splice.apply(e, c);
              o += d;
              r += d + 1;
              i = null;
              u = !0;
              continue;
            }
          }
          e[r++] = a;
          i = a instanceof B ? a : null;
        }
        e.length = r;
      }
      function E(e, n) {
        if (!(e instanceof _e)) return;
        var t = e.definitions[e.definitions.length - 1];
        if (!(t.value instanceof He)) return;
        var r;
        if (n instanceof ze) r = [n];
        else if (n instanceof Ce) r = n.expressions.slice();
        if (!r) return;
        var o = !1;
        do {
          var u = r[0];
          if (!(u instanceof ze)) break;
          if ("=" != u.operator) break;
          if (!(u.left instanceof ke)) break;
          var f = u.left.expression;
          if (!(f instanceof pn)) break;
          if (t.name.name != f.name) break;
          if (!u.right.is_constant_expression(a)) break;
          var c = u.left.property;
          if (c instanceof w) c = c.evaluate(i);
          if (c instanceof w) break;
          c = "" + c;
          if (i.option("ecma") < 6 && i.has_directive("use strict"))
            if (
              !g(t.value.properties, function (e) {
                return e.key != c && e.key.name != c;
              })
            )
              break;
          t.value.properties.push(s(Re, u, { key: c, value: u.right }));
          r.shift();
          o = !0;
        } while (r.length);
        return o && r;
      }
      function x(e) {
        var n;
        for (var t = 0, i = -1, r = e.length; t < r; t++) {
          var o = e[t];
          var a = e[i];
          if (o instanceof _e) {
            if (a && a.TYPE == o.TYPE) {
              a.definitions = a.definitions.concat(o.definitions);
              u = !0;
            } else if (n && n.TYPE == o.TYPE && _(o)) {
              n.definitions = n.definitions.concat(o.definitions);
              u = !0;
            } else {
              e[++i] = o;
              n = o;
            }
          } else if (o instanceof ie) o.value = f(o.value);
          else if (o instanceof I) {
            if ((s = E(a, o.init))) {
              u = !0;
              o.init = s.length ? h(o.init, s) : null;
              e[++i] = o;
            } else if (a instanceof De && (!o.init || o.init.TYPE == a.TYPE)) {
              if (o.init)
                a.definitions = a.definitions.concat(o.init.definitions);
              o.init = a;
              e[i] = o;
              u = !0;
            } else if (n && o.init && n.TYPE == o.init.TYPE && _(o.init)) {
              n.definitions = n.definitions.concat(o.init.definitions);
              o.init = null;
              e[++i] = o;
              u = !0;
            } else e[++i] = o;
          } else if (o instanceof R) o.object = f(o.object);
          else if (o instanceof fe) o.condition = f(o.condition);
          else if (o instanceof B) {
            var s;
            if ((s = E(a, o.body))) {
              u = !0;
              if (!s.length) continue;
              o.body = h(o.body, s);
            }
            e[++i] = o;
          } else if (o instanceof ce) o.expression = f(o.expression);
          else if (o instanceof P) o.expression = f(o.expression);
          else e[++i] = o;
        }
        e.length = i + 1;
        function f(n) {
          e[++i] = o;
          var t = E(a, n);
          if (t) {
            u = !0;
            if (t.length) return h(n, t);
            else if (n instanceof Ce) return n.tail_node().left;
            else return n.left;
          }
          return n;
        }
      }
    }
    function cn(e, n, t) {
      if (!(n instanceof Z))
        e.warn("Dropping unreachable code [{file}:{line},{col}]", n.start);
      n.walk(
        new $n(function (i) {
          if (i instanceof De) {
            e.warn(
              "Declarations in unreachable code! [{file}:{line},{col}]",
              i.start
            );
            i.remove_initializers();
            t.push(i);
            return !0;
          }
          if (i instanceof Z && (i === n || !e.has_directive("use strict"))) {
            t.push(
              i === n
                ? i
                : s(De, i, {
                    definitions: [
                      s(Fe, i, { name: s(Ze, i.name, i.name), value: null }),
                    ],
                  })
            );
            return !0;
          }
          if (i instanceof L) return !0;
        })
      );
    }
    function ln(e) {
      if (e instanceof Dn) return e.getValue();
      if (e instanceof Oe && "void" == e.operator && e.expression instanceof Dn)
        return;
      return e;
    }
    function hn(e, n) {
      return (
        e.is_undefined ||
        e instanceof wn ||
        (e instanceof Oe &&
          "void" == e.operator &&
          !e.expression.has_side_effects(n))
      );
    }
    !(function (e) {
      w.DEFMETHOD("may_throw_on_access", function (e) {
        return !e.option("pure_getters") || this._dot_throw(e);
      });
      function n(e) {
        return /strict/.test(e.option("pure_getters"));
      }
      e(w, n);
      e(An, c);
      e(wn, c);
      e(Dn, f);
      e(Ne, f);
      e(He, function (e) {
        if (!n(e)) return !1;
        for (var t = this.properties.length; --t >= 0; )
          if (this.properties[t]._dot_throw(e)) return !0;
        return !1;
      });
      e(Ie, f);
      e(Pe, c);
      e(Y, function (e) {
        return this.expression._dot_throw(e);
      });
      e(X, f);
      e(G, f);
      e($e, f);
      e(Oe, function () {
        return "void" == this.operator;
      });
      e(Me, function (e) {
        return (
          ("&&" == this.operator || "||" == this.operator) &&
          (this.left._dot_throw(e) || this.right._dot_throw(e))
        );
      });
      e(ze, function (e) {
        return "=" == this.operator && this.right._dot_throw(e);
      });
      e(qe, function (e) {
        return this.consequent._dot_throw(e) || this.alternative._dot_throw(e);
      });
      e(Be, function (e) {
        if (!n(e)) return !1;
        if (this.expression instanceof X && "prototype" == this.property)
          return !1;
        return !0;
      });
      e(Ce, function (e) {
        return this.tail_node()._dot_throw(e);
      });
      e(pn, function (e) {
        if (this.is_undefined) return !0;
        if (!n(e)) return !1;
        if (Xe(this) && this.is_declared(e)) return !1;
        if (this.is_immutable()) return !1;
        var t = this.fixed_value();
        return !t || t._dot_throw(e);
      });
    })(function (e, n) {
      e.DEFMETHOD("_dot_throw", n);
    });
    !(function (e) {
      var n = ["!", "delete"];
      var i = [
        "in",
        "instanceof",
        "==",
        "!=",
        "===",
        "!==",
        "<",
        "<=",
        ">=",
        ">",
      ];
      e(w, f);
      e(Oe, function () {
        return t(this.operator, n);
      });
      e(Me, function () {
        return (
          t(this.operator, i) ||
          (vn(this.operator) &&
            this.left.is_boolean() &&
            this.right.is_boolean())
        );
      });
      e(qe, function () {
        return this.consequent.is_boolean() && this.alternative.is_boolean();
      });
      e(ze, function () {
        return "=" == this.operator && this.right.is_boolean();
      });
      e(Ce, function () {
        return this.tail_node().is_boolean();
      });
      e(Sn, c);
      e(Bn, c);
    })(function (e, n) {
      e.DEFMETHOD("is_boolean", n);
    });
    !(function (e) {
      e(w, f);
      e(bn, c);
      var n = D("+ - ~ ++ --");
      e(Te, function () {
        return n(this.operator);
      });
      var t = D("- * / % & | ^ << >> >>>");
      e(Me, function (e) {
        return (
          t(this.operator) ||
          ("+" == this.operator &&
            this.left.is_number(e) &&
            this.right.is_number(e))
        );
      });
      e(ze, function (e) {
        return (
          t(this.operator.slice(0, -1)) ||
          ("=" == this.operator && this.right.is_number(e))
        );
      });
      e(Ce, function (e) {
        return this.tail_node().is_number(e);
      });
      e(qe, function (e) {
        return this.consequent.is_number(e) && this.alternative.is_number(e);
      });
    })(function (e, n) {
      e.DEFMETHOD("is_number", n);
    });
    !(function (e) {
      e(w, f);
      e(gn, c);
      e(ee, function () {
        return 1 === this.segments.length;
      });
      e(Oe, function () {
        return "typeof" == this.operator;
      });
      e(Me, function (e) {
        return (
          "+" == this.operator &&
          (this.left.is_string(e) || this.right.is_string(e))
        );
      });
      e(ze, function (e) {
        return (
          ("=" == this.operator || "+=" == this.operator) &&
          this.right.is_string(e)
        );
      });
      e(Ce, function (e) {
        return this.tail_node().is_string(e);
      });
      e(qe, function (e) {
        return this.consequent.is_string(e) && this.alternative.is_string(e);
      });
    })(function (e, n) {
      e.DEFMETHOD("is_string", n);
    });
    var vn = D("&& ||");
    var _n = D("delete ++ --");
    function En(e, n) {
      if (n instanceof Te && _n(n.operator)) return n.expression;
      if (n instanceof ze && n.left === e) return e;
    }
    !(function (e) {
      w.DEFMETHOD("resolve_defines", function (e) {
        if (!e.option("global_defs")) return;
        var n = this._find_defs(e, "");
        if (n) {
          var t,
            i = this,
            r = 0;
          do {
            t = i;
            i = e.parent(r++);
          } while (i instanceof ke && i.expression === t);
          if (En(t, i))
            e.warn(
              "global_defs " +
                this.print_to_string() +
                " redefined [{file}:{line},{col}]",
              this.start
            );
          else return n;
        }
      });
      e(w, u);
      e(Be, function (e, n) {
        return this.expression._find_defs(e, "." + this.property + n);
      });
      e(pn, function (e, n) {
        if (!this.global()) return;
        var t;
        var i = e.option("global_defs");
        if (i && y(i, (t = this.name + n))) {
          var r = (function e(n, t) {
            if (n instanceof w) return s(n.CTOR, t, n);
            if (Array.isArray(n))
              return s(Ne, t, {
                elements: n.map(function (n) {
                  return e(n, t);
                }),
              });
            if (n && "object" == typeof n) {
              var i = [];
              for (var r in n)
                if (y(n, r)) i.push(s(Re, t, { key: r, value: e(n[r], t) }));
              return s(He, t, { properties: i });
            }
            return _(n, t);
          })(i[t], this);
          var o = e.find_parent(V);
          r.walk(
            new $n(function (e) {
              if (e instanceof pn) {
                e.scope = o;
                e.thedef = o.def_global(e);
              }
            })
          );
          return r;
        }
      });
    })(function (e, n) {
      e.DEFMETHOD("_find_defs", n);
    });
    function Mn(e, n) {
      return e.print_to_string().length > n.print_to_string().length ? n : e;
    }
    function qn(e, n, t) {
      return (
        E(e)
          ? function (e, n) {
              return Mn(s(B, e, { body: e }), s(B, n, { body: n })).body;
            }
          : Mn
      )(n, t);
    }
    function zn(e) {
      for (var n in e) e[n] = D(e[n]);
    }
    var jn = ["constructor", "toString", "valueOf"];
    var Nn = {
      Array: ["indexOf", "join", "lastIndexOf", "slice"].concat(jn),
      Boolean: jn,
      Number: ["toExponential", "toFixed", "toPrecision"].concat(jn),
      Object: jn,
      RegExp: ["test"].concat(jn),
      String: [
        "charAt",
        "charCodeAt",
        "concat",
        "indexOf",
        "italics",
        "lastIndexOf",
        "match",
        "replace",
        "search",
        "slice",
        "split",
        "substr",
        "substring",
        "trim",
      ].concat(jn),
    };
    zn(Nn);
    var Hn = {
      Array: ["isArray"],
      Math: [
        "abs",
        "acos",
        "asin",
        "atan",
        "ceil",
        "cos",
        "exp",
        "floor",
        "log",
        "round",
        "sin",
        "sqrt",
        "tan",
        "atan2",
        "pow",
        "max",
        "min",
      ],
      Number: ["isFinite", "isNaN"],
      Object: [
        "create",
        "getOwnPropertyDescriptor",
        "getOwnPropertyNames",
        "getPrototypeOf",
        "isExtensible",
        "isFrozen",
        "isSealed",
        "keys",
      ],
      String: ["fromCharCode"],
    };
    zn(Hn);
    !(function (e) {
      w.DEFMETHOD("evaluate", function (e) {
        if (!e.option("evaluate")) return this;
        var n = this._eval(e, 1);
        return !n || n instanceof RegExp || "object" != typeof n ? n : this;
      });
      var n = D("! ~ - + void");
      w.DEFMETHOD("is_constant", function () {
        if (this instanceof Dn) return !(this instanceof yn);
        else
          return (
            this instanceof Oe &&
            this.expression instanceof Dn &&
            n(this.operator)
          );
      });
      e(x, function () {
        throw Error(
          v("Cannot evaluate a statement [{file}:{line},{col}]", this.start)
        );
      });
      e(J, l);
      e(Ve, l);
      e(w, l);
      e(Dn, function () {
        return this.getValue();
      });
      e(ee, function () {
        if (1 !== this.segments.length) return this;
        return this.segments[0].value;
      });
      e(Ne, function (e, n) {
        if (e.option("unsafe")) {
          var t = [];
          for (var i = 0, r = this.elements.length; i < r; i++) {
            var o = this.elements[i];
            if (o instanceof X) {
              t.push(o);
              continue;
            }
            var a = o._eval(e, n);
            if (o === a) return this;
            t.push(a);
          }
          return t;
        }
        return this;
      });
      e(He, function (e, n) {
        if (e.option("unsafe")) {
          var t = {};
          for (var i = 0, r = this.properties.length; i < r; i++) {
            var o = this.properties[i];
            if (o instanceof Y) return this;
            var a = o.key;
            if (a instanceof We) a = a.name;
            else if (a instanceof w)
              if ((a = a._eval(e, n)) === o.key) return this;
            if ("function" == typeof Object.prototype[a]) return this;
            if (o.value instanceof X) continue;
            t[a] = o.value._eval(e, n);
            if (t[a] === o.value) return this;
          }
          return t;
        }
        return this;
      });
      e(Oe, function (e, n) {
        var t = this.expression;
        if (
          e.option("typeofs") &&
          "typeof" == this.operator &&
          (t instanceof J || (t instanceof pn && t.fixed_value() instanceof J))
        )
          return "function";
        if ((t = t._eval(e, n)) === this.expression) return this;
        switch (this.operator) {
          case "!":
            return !t;
          case "typeof":
            if (t instanceof RegExp) return this;
            return typeof t;
          case "void":
            return;
          case "~":
            return ~t;
          case "-":
            return -t;
          case "+":
            return +t;
        }
        return this;
      });
      e(Me, function (e, n) {
        var t = this.left._eval(e, n);
        if (t === this.left) return this;
        var i = this.right._eval(e, n);
        if (i === this.right) return this;
        var r;
        switch (this.operator) {
          case "&&":
            r = t && i;
            break;
          case "||":
            r = t || i;
            break;
          case "|":
            r = t | i;
            break;
          case "&":
            r = t & i;
            break;
          case "^":
            r = t ^ i;
            break;
          case "+":
            r = t + i;
            break;
          case "*":
            r = t * i;
            break;
          case "**":
            r = Math.pow(t, i);
            break;
          case "/":
            r = t / i;
            break;
          case "%":
            r = t % i;
            break;
          case "-":
            r = t - i;
            break;
          case "<<":
            r = t << i;
            break;
          case ">>":
            r = t >> i;
            break;
          case ">>>":
            r = t >>> i;
            break;
          case "==":
            r = t == i;
            break;
          case "===":
            r = t === i;
            break;
          case "!=":
            r = t != i;
            break;
          case "!==":
            r = t !== i;
            break;
          case "<":
            r = t < i;
            break;
          case "<=":
            r = t <= i;
            break;
          case ">":
            r = t > i;
            break;
          case ">=":
            r = t >= i;
            break;
          default:
            return this;
        }
        if (isNaN(r) && e.find_parent(P)) return this;
        return r;
      });
      e(qe, function (e, n) {
        var t = this.condition._eval(e, n);
        if (t === this.condition) return this;
        var i = t ? this.consequent : this.alternative;
        var r = i._eval(e, n);
        return r === i ? this : r;
      });
      e(pn, function (e, n) {
        var t = this.fixed_value();
        if (!t) return this;
        var i;
        if (y(t, "_eval")) i = t._eval();
        else {
          this._eval = l;
          i = t._eval(e, n);
          delete this._eval;
          if (i === t) return this;
          t._eval = function () {
            return i;
          };
        }
        if (i && "object" == typeof i) {
          var r = this.definition().escaped;
          if (r && n > r) return this;
        }
        return i;
      });
      var t = {
        Array: Array,
        Math: Math,
        Number: Number,
        Object: Object,
        String: String,
      };
      var i = {
        Math: ["E", "LN10", "LN2", "LOG2E", "LOG10E", "PI", "SQRT1_2", "SQRT2"],
        Number: [
          "MAX_VALUE",
          "MIN_VALUE",
          "NaN",
          "NEGATIVE_INFINITY",
          "POSITIVE_INFINITY",
        ],
      };
      zn(i);
      e(ke, function (e, n) {
        if (e.option("unsafe")) {
          var r = this.property;
          if (r instanceof w)
            if ((r = r._eval(e, n)) === this.property) return this;
          var o = this.expression;
          var a;
          if (Xe(o)) {
            if (!(i[o.name] || f)(r)) return this;
            a = t[o.name];
          } else if (!(a = o._eval(e, n + 1)) || a === o || !y(a, r))
            return this;
          return a[r];
        }
        return this;
      });
      e(we, function (e, n) {
        var i = this.expression;
        if (e.option("unsafe") && i instanceof ke) {
          var r = i.property;
          if (r instanceof w)
            if ((r = r._eval(e, n)) === i.property) return this;
          var o;
          var a = i.expression;
          if (Xe(a)) {
            if (!(Hn[a.name] || f)(r)) return this;
            o = t[a.name];
          } else if (
            (o = a._eval(e, n + 1)) === a ||
            !((o && Nn[o.constructor.name]) || f)(r)
          )
            return this;
          var s = [];
          for (var u = 0, c = this.args.length; u < c; u++) {
            var l = this.args[u];
            var p = l._eval(e, n);
            if (l === p) return this;
            s.push(p);
          }
          try {
            return o[r].apply(o, s);
          } catch (n) {
            e.warn("Error evaluating {code} [{file}:{line},{col}]", {
              code: this.print_to_string(),
              file: this.start.file,
              line: this.start.line,
              col: this.start.col,
            });
          }
        }
        return this;
      });
      e(xe, l);
    })(function (e, n) {
      e.DEFMETHOD("_eval", n);
    });
    !(function (e) {
      function n(e) {
        return s(Oe, e, { operator: "!", expression: e });
      }
      function t(e, t, i) {
        var r = n(e);
        if (i) {
          var o = s(B, t, { body: t });
          return Mn(r, o) === o ? t : r;
        }
        return Mn(r, t);
      }
      e(w, function () {
        return n(this);
      });
      e(x, function () {
        throw Error("Cannot negate a statement");
      });
      e(X, function () {
        return n(this);
      });
      e(G, function () {
        return n(this);
      });
      e(Oe, function () {
        if ("!" == this.operator) return this.expression;
        return n(this);
      });
      e(Ce, function (e) {
        var n = this.expressions.slice();
        n.push(n.pop().negate(e));
        return h(this, n);
      });
      e(qe, function (e, n) {
        var i = this.clone();
        i.consequent = i.consequent.negate(e);
        i.alternative = i.alternative.negate(e);
        return t(this, i, n);
      });
      e(Me, function (e, i) {
        var r = this.clone(),
          o = this.operator;
        if (e.option("unsafe_comps"))
          switch (o) {
            case "<=":
              r.operator = ">";
              return r;
            case "<":
              r.operator = ">=";
              return r;
            case ">=":
              r.operator = "<";
              return r;
            case ">":
              r.operator = "<=";
              return r;
          }
        switch (o) {
          case "==":
            r.operator = "!=";
            return r;
          case "!=":
            r.operator = "==";
            return r;
          case "===":
            r.operator = "!==";
            return r;
          case "!==":
            r.operator = "===";
            return r;
          case "&&":
            r.operator = "||";
            r.left = r.left.negate(e, i);
            r.right = r.right.negate(e);
            return t(this, r, i);
          case "||":
            r.operator = "&&";
            r.left = r.left.negate(e, i);
            r.right = r.right.negate(e);
            return t(this, r, i);
        }
        return n(this);
      });
    })(function (e, n) {
      e.DEFMETHOD("negate", function (e, t) {
        return n.call(this, e, t);
      });
    });
    var In = D(
      "Boolean decodeURI decodeURIComponent Date encodeURI encodeURIComponent Error escape EvalError isFinite isNaN Number Object parseFloat parseInt RangeError ReferenceError String SyntaxError TypeError unescape URIError"
    );
    we.DEFMETHOD("is_expr_pure", function (e) {
      if (e.option("unsafe")) {
        var n = this.expression;
        if (Xe(n) && In(n.name)) return !0;
        if (
          n instanceof Be &&
          Xe(n.expression) &&
          (Hn[n.expression.name] || f)(n.property)
        )
          return !0;
      }
      return this.pure || !e.pure_funcs(this);
    });
    w.DEFMETHOD("is_call_pure", f);
    Be.DEFMETHOD("is_call_pure", function (e) {
      if (!e.option("unsafe")) return;
      var n = this.expression;
      var t = f;
      if (n instanceof Ne) t = Nn.Array;
      else if (n.is_boolean()) t = Nn.Boolean;
      else if (n.is_number(e)) t = Nn.Number;
      else if (n instanceof yn) t = Nn.RegExp;
      else if (n.is_string(e)) t = Nn.String;
      else if (!this.may_throw_on_access(e)) t = Nn.Object;
      return t(this.property);
    });
    !(function (e) {
      e(w, c);
      e($, f);
      e(Dn, f);
      e(mn, f);
      function n(e, n) {
        for (var t = e.length; --t >= 0; )
          if (e[t].has_side_effects(n)) return !0;
        return !1;
      }
      e(T, function (e) {
        return n(this.body, e);
      });
      e(we, function (e) {
        if (
          !this.is_expr_pure(e) &&
          (!this.expression.is_call_pure(e) ||
            this.expression.has_side_effects(e))
        )
          return !0;
        return n(this.args, e);
      });
      e(ce, function (e) {
        return this.expression.has_side_effects(e) || n(this.body, e);
      });
      e(de, function (e) {
        return this.expression.has_side_effects(e) || n(this.body, e);
      });
      e(he, function (e) {
        return (
          n(this.body, e) ||
          (this.bcatch && this.bcatch.has_side_effects(e)) ||
          (this.bfinally && this.bfinally.has_side_effects(e))
        );
      });
      e(fe, function (e) {
        return (
          this.condition.has_side_effects(e) ||
          (this.body && this.body.has_side_effects(e)) ||
          (this.alternative && this.alternative.has_side_effects(e))
        );
      });
      e(q, function (e) {
        return this.body.has_side_effects(e);
      });
      e(B, function (e) {
        return this.body.has_side_effects(e);
      });
      e(J, f);
      e(Ve, f);
      e(Ye, c);
      e(Me, function (e) {
        return this.left.has_side_effects(e) || this.right.has_side_effects(e);
      });
      e(ze, c);
      e(qe, function (e) {
        return (
          this.condition.has_side_effects(e) ||
          this.consequent.has_side_effects(e) ||
          this.alternative.has_side_effects(e)
        );
      });
      e(Te, function (e) {
        return _n(this.operator) || this.expression.has_side_effects(e);
      });
      e(pn, function (e) {
        return !this.is_declared(e);
      });
      e(Ge, f);
      e(He, function (e) {
        return n(this.properties, e);
      });
      e(Ie, function (e) {
        if (this.key instanceof Re && this.key.has_side_effects(e)) return !0;
        return this.value.has_side_effects(e);
      });
      e(Ne, function (e) {
        return n(this.elements, e);
      });
      e(Be, function (e) {
        return (
          this.expression.may_throw_on_access(e) ||
          this.expression.has_side_effects(e)
        );
      });
      e(Se, function (e) {
        return (
          this.expression.may_throw_on_access(e) ||
          this.expression.has_side_effects(e) ||
          this.property.has_side_effects(e)
        );
      });
      e(Ce, function (e) {
        return n(this.expressions, e);
      });
      e(_e, function (e) {
        return n(this.definitions, e);
      });
      e(Fe, function (e) {
        return this.value;
      });
      e(ne, f);
      e(ee, function (e) {
        return n(this.segments, e);
      });
    })(function (e, n) {
      e.DEFMETHOD("has_side_effects", n);
    });
    !(function (e) {
      e(w, c);
      e(Ve, f);
      e(Dn, f);
      e($, f);
      e(J, f);
      e(Ge, f);
      e(mn, f);
      function n(e, n) {
        for (var t = e.length; --t >= 0; ) if (e[t].may_throw(n)) return !0;
        return !1;
      }
      e(Ne, function (e) {
        return n(this.elements, e);
      });
      e(ze, function (e) {
        return (
          ("=" != this.operator && this.left.may_throw(e)) ||
          this.right.may_throw(e)
        );
      });
      e(Me, function (e) {
        return this.left.may_throw(e) || this.right.may_throw(e);
      });
      e(T, function (e) {
        return n(this.body, e);
      });
      e(we, function (e) {
        if (n(this.args, e)) return !0;
        if (this.is_expr_pure(e)) return !1;
        if (this.expression.may_throw(e)) return !0;
        return !(this.expression instanceof J) || n(this.expression.body, e);
      });
      e(de, function (e) {
        return this.expression.may_throw(e) || n(this.body, e);
      });
      e(qe, function (e) {
        return (
          this.condition.may_throw(e) ||
          this.consequent.may_throw(e) ||
          this.alternative.may_throw(e)
        );
      });
      e(_e, function (e) {
        return n(this.definitions, e);
      });
      e(Be, function (e) {
        return (
          this.expression.may_throw_on_access(e) || this.expression.may_throw(e)
        );
      });
      e(fe, function (e) {
        return (
          this.condition.may_throw(e) ||
          (this.body && this.body.may_throw(e)) ||
          (this.alternative && this.alternative.may_throw(e))
        );
      });
      e(q, function (e) {
        return this.body.may_throw(e);
      });
      e(He, function (e) {
        return n(this.properties, e);
      });
      e(Ie, function (e) {
        return this.value.may_throw(e);
      });
      e(Ce, function (e) {
        return n(this.expressions, e);
      });
      e(B, function (e) {
        return this.body.may_throw(e);
      });
      e(Se, function (e) {
        return (
          this.expression.may_throw_on_access(e) ||
          this.expression.may_throw(e) ||
          this.property.may_throw(e)
        );
      });
      e(ce, function (e) {
        return this.expression.may_throw(e) || n(this.body, e);
      });
      e(pn, function (e) {
        return !this.is_declared(e);
      });
      e(he, function (e) {
        return (
          n(this.body, e) ||
          (this.bcatch && this.bcatch.may_throw(e)) ||
          (this.bfinally && this.bfinally.may_throw(e))
        );
      });
      e(Te, function (e) {
        if ("typeof" == this.operator && this.expression instanceof pn)
          return !1;
        return this.expression.may_throw(e);
      });
      e(Fe, function (e) {
        if (!this.value) return !1;
        return this.value.may_throw(e);
      });
    })(function (e, n) {
      e.DEFMETHOD("may_throw", n);
    });
    !(function (e) {
      function n(e) {
        for (var n = e.length; --n >= 0; )
          if (!e[n].is_constant_expression()) return !1;
        return !0;
      }
      function i(e) {
        var n = this;
        var i = !0;
        n.walk(
          new $n(function (r) {
            if (!i) return !0;
            if (r instanceof pn) {
              if (n.inlined) {
                i = !1;
                return !0;
              }
              var o = r.definition();
              if (t(o, n.enclosed) && !n.variables.has(o.name)) {
                if (e) {
                  var a = e.find_variable(r);
                  if (o.undeclared ? !a : a === o) {
                    i = "f";
                    return !0;
                  }
                }
                i = !1;
              }
              return !0;
            }
            if (r instanceof mn && n instanceof G) {
              i = !1;
              return !0;
            }
          })
        );
        return i;
      }
      e(w, f);
      e(Dn, c);
      e(Ve, i);
      e(J, i);
      e(Te, function () {
        return this.expression.is_constant_expression();
      });
      e(Me, function () {
        return (
          this.left.is_constant_expression() &&
          this.right.is_constant_expression()
        );
      });
      e(Ne, function () {
        return n(this.elements);
      });
      e(He, function () {
        return n(this.properties);
      });
      e(Ie, function () {
        return !(this.key instanceof w) && this.value.is_constant_expression();
      });
    })(function (e, n) {
      e.DEFMETHOD("is_constant_expression", n);
    });
    function Rn(e) {
      return e && e.aborts();
    }
    !(function (e) {
      e(x, p);
      e(te, l);
      function n() {
        var e = this.body.length;
        return e > 0 && Rn(this.body[e - 1]);
      }
      e(Ee, function () {
        return null;
      });
      e(O, n);
      e(le, n);
      e(fe, function () {
        return (
          this.alternative && Rn(this.body) && Rn(this.alternative) && this
        );
      });
    })(function (e, n) {
      e.DEFMETHOD("aborts", n);
    });
    e(k, function (e, n) {
      if (n.has_directive(e.value) !== e) return s($, e);
      return e;
    });
    e(C, function (e, n) {
      if (n.option("drop_debugger")) return s($, e);
      return e;
    });
    e(q, function (e, n) {
      if (e.body instanceof se && n.loopcontrol_target(e.body) === e.body)
        return s($, e);
      return 0 == e.label.references.length ? e.body : e;
    });
    e(T, function (e, n) {
      fn(e.body, n);
      return e;
    });
    e(O, function (e, n) {
      fn(e.body, n);
      switch (e.body.length) {
        case 1:
          if (
            (!n.has_directive("use strict") && n.parent() instanceof fe) ||
            me(e.body[0])
          )
            return e.body[0];
          break;
        case 0:
          return s($, e);
      }
      return e;
    });
    L.DEFMETHOD("drop_unused", function (e) {
      if (!e.option("unused")) return;
      if (e.has_directive("use asm")) return;
      var n = this;
      if (n.uses_eval || n.uses_with) return;
      var t = !(n instanceof V) || e.toplevel.funcs;
      var i = !(n instanceof V) || e.toplevel.vars;
      var r = /keep_assign/.test(e.option("unused"))
        ? f
        : function (e) {
            if (e instanceof ze && (e.write_only || "=" == e.operator))
              return e.left;
            if (e instanceof Te && e.write_only) return e.expression;
          };
      var a = [];
      var u = Object.create(null);
      var c = Object.create(null);
      if (n instanceof V && e.top_retain)
        n.variables.each(function (n) {
          if (e.top_retain(n) && !(n.id in u)) {
            u[n.id] = !0;
            a.push(n);
          }
        });
      var l = new b();
      var p = new b();
      var v = null;
      var _ = this;
      var D = new $n(function (r, o) {
        if (r === n) return;
        if (r instanceof Z || r instanceof Ye) {
          var s = r.name.definition();
          if ((f = D.parent() instanceof Ae) || (!t && _ === n))
            if (s.global && !(s.id in u)) {
              u[s.id] = !0;
              a.push(s);
            }
          p.add(s.id, r);
          return !0;
        }
        if (r instanceof nn && _ === n) l.add(r.definition().id, r);
        if (r instanceof _e && _ === n) {
          var f = D.parent() instanceof Ae;
          r.definitions.forEach(function (n) {
            if (n.name instanceof Ze) l.add(n.name.definition().id, n);
            if (f || !i)
              n.name.walk(
                new $n(function (e) {
                  if (e instanceof Ge) {
                    var n = e.definition();
                    if ((f || n.global) && !(n.id in u)) {
                      u[n.id] = !0;
                      a.push(n);
                    }
                  }
                })
              );
            if (n.value) {
              if (n.name instanceof K) {
                var t = v;
                v = n.value;
                n.walk(D);
                v = t;
              } else {
                var r = n.name.definition();
                p.add(r.id, n.value);
                if (n.name.fixed_value() === n.value) c[r.id] = n;
              }
              if (n.value.has_side_effects(e)) n.value.walk(D);
            }
          });
          return !0;
        }
        if (r.destructuring && v) p.add(r.name, v);
        return w(r, o);
      });
      n.walk(D);
      D = new $n(w);
      for (var y = 0; y < a.length; y++) {
        var E = p.get(a[y].id);
        if (E)
          E.forEach(function (e) {
            e.walk(D);
          });
      }
      var F = new mt(function (o, a, f) {
        var p = F.parent();
        if (i)
          if ((E = r(o)) instanceof pn) {
            var v = (w = E.definition()).id in u;
            if (o instanceof ze) {
              if (!v || (w.id in c && c[w.id] !== o))
                return A(p, o, o.right.transform(F));
            } else if (!v) return s(bn, o, { value: 0 });
          }
        if (_ !== n) return;
        if (
          o.name &&
          ((!e.option("keep_classnames") && o instanceof Je) ||
            (!e.option("keep_fnames") && o instanceof X))
        )
          if (!((w = o.name.definition()).id in u) || w.orig.length > 1)
            o.name = null;
        if (o instanceof J && !(o instanceof W)) {
          var D = !e.option("keep_fargs");
          for (var b = o.argnames, y = b.length; --y >= 0; ) {
            var E;
            if ((E = b[y]) instanceof Y) E = E.expression;
            if (E instanceof je) E = E.left;
            if (!(E instanceof K || E.definition().id in u)) {
              E.__unused = !0;
              if (D) {
                b.pop();
                e[E.unreferenced() ? "warn" : "info"](
                  "Dropping unused function argument {name} [{file}:{line},{col}]",
                  j(E)
                );
              }
            } else D = !1;
          }
        }
        if ((o instanceof Z || o instanceof Ye) && o !== n) {
          var w;
          if (!((w = o.name.definition()).id in u || (!t && w.global))) {
            e[o.name.unreferenced() ? "warn" : "info"](
              "Dropping unused function {name} [{file}:{line},{col}]",
              j(o.name)
            );
            w.eliminated++;
            return s($, o);
          }
        }
        if (o instanceof _e && !(p instanceof R && p.init === o)) {
          var x = !(p instanceof V || o instanceof De);
          var C = [],
            k = [],
            S = [];
          var T = [];
          o.definitions.forEach(function (n) {
            if (n.value) n.value = n.value.transform(F);
            if (n.name instanceof K) return S.push(n);
            var t = n.name.definition();
            if (x && t.global) return S.push(n);
            if ((!i && !x) || t.id in u) {
              if (n.value && t.id in c && c[t.id] !== n)
                n.value = n.value.drop_side_effect_free(e);
              if (n.name instanceof Ze) {
                var r = l.get(t.id);
                if (
                  r.length > 1 &&
                  (!n.value || t.orig.indexOf(n.name) > t.eliminated)
                ) {
                  e.warn(
                    "Dropping duplicated definition of variable {name} [{file}:{line},{col}]",
                    j(n.name)
                  );
                  if (n.value) {
                    var a = s(pn, n.name, n.name);
                    t.references.push(a);
                    var f = s(ze, n, {
                      operator: "=",
                      left: a,
                      right: n.value,
                    });
                    if (c[t.id] === n) c[t.id] = f;
                    T.push(f.transform(F));
                  }
                  m(r, n);
                  t.eliminated++;
                  return;
                }
              }
              if (n.value) {
                if (T.length > 0) {
                  if (S.length > 0) {
                    T.push(n.value);
                    n.value = h(n.value, T);
                  } else C.push(s(B, o, { body: h(o, T) }));
                  T = [];
                }
                S.push(n);
              } else k.push(n);
            } else if (t.orig[0] instanceof un) {
              if ((p = n.value && n.value.drop_side_effect_free(e))) T.push(p);
              n.value = null;
              k.push(n);
            } else {
              var p;
              if ((p = n.value && n.value.drop_side_effect_free(e))) {
                e.warn(
                  "Side effects in initialization of unused variable {name} [{file}:{line},{col}]",
                  j(n.name)
                );
                T.push(p);
              } else
                e[n.name.unreferenced() ? "warn" : "info"](
                  "Dropping unused variable {name} [{file}:{line},{col}]",
                  j(n.name)
                );
              t.eliminated++;
            }
          });
          if (k.length > 0 || S.length > 0) {
            o.definitions = k.concat(S);
            C.push(o);
          }
          if (T.length > 0) C.push(s(B, o, { body: h(o, T) }));
          switch (C.length) {
            case 0:
              return f ? d.skip : s($, o);
            case 1:
              return C[0];
            default:
              return f ? d.splice(C) : s(O, o, { body: C });
          }
        }
        if (o instanceof I) {
          a(o, this);
          if (o.init instanceof O) {
            M = o.init;
            o.init = M.body.pop();
            M.body.push(o);
          }
          if (o.init instanceof B) o.init = o.init.body;
          else if (U(o.init)) o.init = null;
          return !M ? o : f ? d.splice(M.body) : M;
        }
        if (o instanceof q && o.body instanceof I) {
          a(o, this);
          if (o.body instanceof O) {
            var M = o.body;
            o.body = M.body.pop();
            M.body.push(o);
            return f ? d.splice(M.body) : M;
          }
          return o;
        }
        if (o instanceof O) {
          a(o, this);
          if (f && g(o.body, me)) return d.splice(o.body);
          return o;
        }
        if (o instanceof L) {
          var z = _;
          _ = o;
          a(o, this);
          _ = z;
          return o;
        }
        function j(e) {
          return {
            name: e.name,
            file: e.start.file,
            line: e.start.line,
            col: e.start.col,
          };
        }
      });
      n.transform(F);
      function w(e, t) {
        var i,
          s = r(e);
        if (
          s instanceof pn &&
          !o(e.left, Ke) &&
          n.variables.get(s.name) === (i = s.definition())
        ) {
          if (e instanceof ze) {
            e.right.walk(D);
            if (e.left.fixed_value() === e.right) c[i.id] = e;
          }
          return !0;
        }
        if (e instanceof pn) {
          if (!((i = e.definition()).id in u)) {
            u[i.id] = !0;
            a.push(i);
            if ((i = i.redefined())) {
              u[i.id] = !0;
              a.push(i);
            }
          }
          return !0;
        }
        if (e instanceof L) {
          var f = _;
          _ = e;
          t();
          _ = f;
          return !0;
        }
      }
    });
    L.DEFMETHOD("hoist_declarations", function (e) {
      var n = this;
      if (e.has_directive("use asm")) return n;
      if (!Array.isArray(n.body)) return n;
      var t = e.option("hoist_funs");
      var r = e.option("hoist_vars");
      if (t || r) {
        var o = [];
        var a = [];
        var u = new b(),
          f = 0,
          c = 0;
        n.walk(
          new $n(function (e) {
            if (e instanceof L && e !== n) return !0;
            if (e instanceof De) {
              ++c;
              return !0;
            }
          })
        );
        r = r && c > 1;
        var l = new mt(function (i) {
          if (i !== n) {
            if (i instanceof k) {
              o.push(i);
              return s($, i);
            }
            if (
              t &&
              i instanceof Z &&
              !(l.parent() instanceof Ae) &&
              l.parent() === n
            ) {
              a.push(i);
              return s($, i);
            }
            if (r && i instanceof De) {
              i.definitions.forEach(function (e) {
                if (e.name instanceof K) return;
                u.set(e.name.name, e);
                ++f;
              });
              var c = i.to_assignments(e);
              var p = l.parent();
              if (p instanceof R && p.init === i) {
                if (null == c) {
                  var d = i.definitions[0].name;
                  return s(pn, d, d);
                }
                return c;
              }
              if (p instanceof I && p.init === i) return c;
              if (!c) return s($, i);
              return s(B, i, { body: c });
            }
            if (i instanceof L) return i;
          }
        });
        n = n.transform(l);
        if (f > 0) {
          var p = [];
          u.each(function (e, t) {
            if (
              n instanceof J &&
              i(function (n) {
                return n.name == e.name.name;
              }, n.args_as_names())
            )
              u.del(t);
            else {
              (e = e.clone()).value = null;
              p.push(e);
              u.set(t, e);
            }
          });
          if (p.length > 0) {
            for (var d = 0; d < n.body.length; ) {
              if (n.body[d] instanceof B) {
                var v,
                  _,
                  D = n.body[d].body;
                if (
                  D instanceof ze &&
                  "=" == D.operator &&
                  (v = D.left) instanceof We &&
                  u.has(v.name)
                ) {
                  if ((g = u.get(v.name)).value) break;
                  g.value = D.right;
                  m(p, g);
                  p.push(g);
                  n.body.splice(d, 1);
                  continue;
                }
                if (
                  D instanceof Ce &&
                  (_ = D.expressions[0]) instanceof ze &&
                  "=" == _.operator &&
                  (v = _.left) instanceof We &&
                  u.has(v.name)
                ) {
                  var g;
                  if ((g = u.get(v.name)).value) break;
                  g.value = _.right;
                  m(p, g);
                  p.push(g);
                  n.body[d].body = h(D, D.expressions.slice(1));
                  continue;
                }
              }
              if (n.body[d] instanceof $) {
                n.body.splice(d, 1);
                continue;
              }
              if (n.body[d] instanceof O) {
                var y = [d, 1].concat(n.body[d].body);
                n.body.splice.apply(n.body, y);
                continue;
              }
              break;
            }
            p = s(De, n, { definitions: p });
            a.push(p);
          }
        }
        n.body = o.concat(a, n.body);
      }
      return n;
    });
    L.DEFMETHOD("var_names", function () {
      var e = this._var_names;
      if (!e) {
        this._var_names = e = Object.create(null);
        this.enclosed.forEach(function (n) {
          e[n.name] = !0;
        });
        this.variables.each(function (n, t) {
          e[t] = !0;
        });
      }
      return e;
    });
    L.DEFMETHOD("make_var_name", function (e) {
      var n = this.var_names();
      var t = (e = e.replace(/[^a-z_$]+/gi, "_"));
      for (var i = 0; n[t]; i++) t = e + "$" + i;
      n[t] = !0;
      return t;
    });
    L.DEFMETHOD("hoist_properties", function (e) {
      var n = this;
      if (!e.option("hoist_props") || e.has_directive("use asm")) return n;
      var t = (n instanceof V && e.top_retain) || f;
      var i = Object.create(null);
      var r = new mt(function (o, a) {
        if (o instanceof _e && r.parent() instanceof Ae) return o;
        if (o instanceof Fe) {
          var u;
          if (
            (p = o.name).scope === n &&
            1 != (l = p.definition()).escaped &&
            !l.single_use &&
            !l.direct_access &&
            !e.exposed(l) &&
            !t(l) &&
            (u = p.fixed_value()) === o.value &&
            u instanceof He
          ) {
            a(o, this);
            var f = new b();
            var c = [];
            u.properties.forEach(function (e) {
              c.push(
                s(Fe, o, {
                  name: (function (e) {
                    var t = s(p.CTOR, p, {
                      name: n.make_var_name(p.name + "_" + e),
                      scope: n,
                    });
                    var i = n.def_variable(t);
                    f.set(e, i);
                    n.enclosed.push(i);
                    return t;
                  })(e.key),
                  value: e.value,
                })
              );
            });
            i[l.id] = f;
            return d.splice(c);
          }
        }
        if (o instanceof ke && o.expression instanceof pn)
          if ((f = i[o.expression.definition().id])) {
            var l = f.get(ln(o.property));
            var p;
            (p = s(pn, o, {
              name: l.name,
              scope: o.expression.scope,
              thedef: l,
            })).reference({});
            return p;
          }
      });
      return n.transform(r);
    });
    !(function (e) {
      function t(e, n, t) {
        var i = e.length;
        if (!i) return null;
        var r = [],
          o = !1;
        for (var a = 0; a < i; a++) {
          var s = e[a].drop_side_effect_free(n, t);
          o |= s !== e[a];
          if (s) {
            r.push(s);
            t = !1;
          }
        }
        return o ? (r.length ? r : null) : e;
      }
      e(w, l);
      e(Dn, p);
      e(mn, p);
      e(we, function (e, i) {
        if (!this.is_expr_pure(e)) {
          if (this.expression.is_call_pure(e)) {
            var r = this.args.slice();
            r.unshift(this.expression.expression);
            return (r = t(r, e, i)) && h(this, r);
          }
          if (
            n(this.expression) &&
            (!this.expression.name ||
              !this.expression.name.definition().references.length)
          ) {
            var o = this.clone();
            o.expression.process_expression(!1, e);
            return o;
          }
          return this;
        }
        if (this.pure)
          e.warn("Dropping __PURE__ call [{file}:{line},{col}]", this.start);
        var a = t(this.args, e, i);
        return a && h(this, a);
      });
      e(W, p);
      e(X, p);
      e(G, p);
      e(Je, p);
      e(Me, function (e, n) {
        var t = this.right.drop_side_effect_free(e);
        if (!t) return this.left.drop_side_effect_free(e, n);
        if (vn(this.operator)) {
          if (t === this.right) return this;
          var i = this.clone();
          i.right = t;
          return i;
        } else {
          var r = this.left.drop_side_effect_free(e, n);
          if (!r) return this.right.drop_side_effect_free(e, n);
          return h(this, [r, t]);
        }
      });
      e(ze, function (e) {
        var n = this.left;
        if (
          n.has_side_effects(e) ||
          (e.has_directive("use strict") &&
            n instanceof ke &&
            n.expression.is_constant())
        )
          return this;
        this.write_only = !0;
        for (; n instanceof ke; ) n = n.expression;
        if (n.is_constant_expression(e.find_parent(L)))
          return this.right.drop_side_effect_free(e);
        return this;
      });
      e(qe, function (e) {
        var n = this.consequent.drop_side_effect_free(e);
        var t = this.alternative.drop_side_effect_free(e);
        if (n === this.consequent && t === this.alternative) return this;
        if (!n)
          return t
            ? s(Me, this, { operator: "||", left: this.condition, right: t })
            : this.condition.drop_side_effect_free(e);
        if (!t)
          return s(Me, this, {
            operator: "&&",
            left: this.condition,
            right: n,
          });
        var i = this.clone();
        i.consequent = n;
        i.alternative = t;
        return i;
      });
      e(Te, function (e, n) {
        if (_n(this.operator)) {
          this.write_only = !this.expression.has_side_effects(e);
          return this;
        }
        if ("typeof" == this.operator && this.expression instanceof pn)
          return null;
        var t = this.expression.drop_side_effect_free(e, n);
        if (n && t && Ue(t)) {
          if (t === this.expression && "!" == this.operator) return this;
          return t.negate(e, n);
        }
        return t;
      });
      e(pn, function (e) {
        return this.is_declared(e) ? null : this;
      });
      e(He, function (e, n) {
        var i = t(this.properties, e, n);
        return i && h(this, i);
      });
      e(Ie, function (e, n) {
        return this.value.drop_side_effect_free(e, n);
      });
      e(Ne, function (e, n) {
        var i = t(this.elements, e, n);
        return i && h(this, i);
      });
      e(Be, function (e, n) {
        if (this.expression.may_throw_on_access(e)) return this;
        return this.expression.drop_side_effect_free(e, n);
      });
      e(Se, function (e, n) {
        if (this.expression.may_throw_on_access(e)) return this;
        var t = this.expression.drop_side_effect_free(e, n);
        if (!t) return this.property.drop_side_effect_free(e, n);
        var i = this.property.drop_side_effect_free(e);
        if (!i) return t;
        return h(this, [t, i]);
      });
      e(Ce, function (e) {
        var n = this.tail_node();
        var t = n.drop_side_effect_free(e);
        if (t === n) return this;
        var i = this.expressions.slice(0, -1);
        if (t) i.push(t);
        return h(this, i);
      });
      e(Y, function (e, n) {
        return this.expression.drop_side_effect_free(e, n);
      });
      e(ne, p);
      e(ee, function (e) {
        var n = t(this.segments, e, E);
        return n && h(this, n);
      });
    })(function (e, n) {
      e.DEFMETHOD("drop_side_effect_free", n);
    });
    e(B, function (e, n) {
      if (n.option("side_effects")) {
        var t = e.body;
        var i = t.drop_side_effect_free(n, !0);
        if (!i) {
          n.warn(
            "Dropping side-effect-free statement [{file}:{line},{col}]",
            e.start
          );
          return s($, e);
        }
        if (i !== t) return s(B, e, { body: i });
      }
      return e;
    });
    e(H, function (e, n) {
      return n.option("loops") ? s(I, e, e).optimize(n) : e;
    });
    e(N, function (e, n) {
      if (!n.option("loops")) return e;
      var t = e.condition.tail_node().evaluate(n);
      if (!(t instanceof w)) {
        if (t)
          return s(I, e, {
            body: s(O, e.body, {
              body: [e.body, s(B, e.condition, { body: e.condition })],
            }),
          }).optimize(n);
        var i = !1;
        var r = new $n(function (n) {
          if (n instanceof L || i) return !0;
          if (n instanceof ae && r.loopcontrol_target(n) === e) return (i = !0);
        });
        var o = n.parent();
        (o instanceof q ? o : e).walk(r);
        if (!i)
          return s(O, e.body, {
            body: [e.body, s(B, e.condition, { body: e.condition })],
          }).optimize(n);
      }
      return e;
    });
    e(I, function (e, n) {
      if (!n.option("loops")) return e;
      if (n.option("side_effects") && e.init)
        e.init = e.init.drop_side_effect_free(n);
      if (e.condition) {
        var t = e.condition.evaluate(n);
        if (!(t instanceof w))
          if (t) e.condition = null;
          else if (!n.option("dead_code")) {
            var i = e.condition;
            e.condition = _(t, e.condition);
            e.condition = Mn(e.condition.transform(n), i);
          }
        if (n.option("dead_code")) {
          if (t instanceof w) t = e.condition.tail_node().evaluate(n);
          if (!t) {
            var r = [];
            cn(n, e.body, r);
            if (e.init instanceof x) r.push(e.init);
            else if (e.init) r.push(s(B, e.init, { body: e.init }));
            r.push(s(B, e.condition, { body: e.condition }));
            return s(O, e, { body: r }).optimize(n);
          }
        }
      }
      return (function e(n, t) {
        var i = n.body instanceof O ? n.body.body[0] : n.body;
        if (t.option("dead_code") && o(i)) {
          var r = [];
          if (n.init instanceof x) r.push(n.init);
          else if (n.init) r.push(s(B, n.init, { body: n.init }));
          if (n.condition) r.push(s(B, n.condition, { body: n.condition }));
          cn(t, n.body, r);
          return s(O, n, { body: r });
        }
        if (i instanceof fe)
          if (o(i.body)) {
            if (n.condition)
              n.condition = s(Me, n.condition, {
                left: n.condition,
                operator: "&&",
                right: i.condition.negate(t),
              });
            else n.condition = i.condition.negate(t);
            a(i.alternative);
          } else if (o(i.alternative)) {
            if (n.condition)
              n.condition = s(Me, n.condition, {
                left: n.condition,
                operator: "&&",
                right: i.condition,
              });
            else n.condition = i.condition;
            a(i.body);
          }
        return n;
        function o(e) {
          return e instanceof se && t.loopcontrol_target(e) === t.self();
        }
        function a(i) {
          i = M(i);
          if (n.body instanceof O) {
            n.body = n.body.clone();
            n.body.body = i.concat(n.body.body.slice(1));
            n.body = n.body.transform(t);
          } else n.body = s(O, n.body, { body: i }).transform(t);
          n = e(n, t);
        }
      })(e, n);
    });
    e(fe, function (e, n) {
      if (U(e.alternative)) e.alternative = null;
      if (!n.option("conditionals")) return e;
      var t = e.condition.evaluate(n);
      if (!(n.option("dead_code") || t instanceof w)) {
        var i = e.condition;
        e.condition = _(t, i);
        e.condition = Mn(e.condition.transform(n), i);
      }
      if (n.option("dead_code")) {
        if (t instanceof w) t = e.condition.tail_node().evaluate(n);
        if (!t) {
          n.warn(
            "Condition always false [{file}:{line},{col}]",
            e.condition.start
          );
          var r = [];
          cn(n, e.body, r);
          r.push(s(B, e.condition, { body: e.condition }));
          if (e.alternative) r.push(e.alternative);
          return s(O, e, { body: r }).optimize(n);
        } else if (!(t instanceof w)) {
          n.warn(
            "Condition always true [{file}:{line},{col}]",
            e.condition.start
          );
          r = [];
          if (e.alternative) cn(n, e.alternative, r);
          r.push(s(B, e.condition, { body: e.condition }));
          r.push(e.body);
          return s(O, e, { body: r }).optimize(n);
        }
      }
      var o = e.condition.negate(n);
      var a = e.condition.print_to_string().length;
      var u = o.print_to_string().length;
      var f = u < a;
      if (e.alternative && f) {
        f = !1;
        e.condition = o;
        var c = e.body;
        e.body = e.alternative || s($, e);
        e.alternative = c;
      }
      if (U(e.body) && U(e.alternative))
        return s(B, e.condition, { body: e.condition.clone() }).optimize(n);
      if (e.body instanceof B && e.alternative instanceof B)
        return s(B, e, {
          body: s(qe, e, {
            condition: e.condition,
            consequent: e.body.body,
            alternative: e.alternative.body,
          }),
        }).optimize(n);
      if (U(e.alternative) && e.body instanceof B) {
        if (
          a === u &&
          !f &&
          e.condition instanceof Me &&
          "||" == e.condition.operator
        )
          f = !0;
        if (f)
          return s(B, e, {
            body: s(Me, e, { operator: "||", left: o, right: e.body.body }),
          }).optimize(n);
        return s(B, e, {
          body: s(Me, e, {
            operator: "&&",
            left: e.condition,
            right: e.body.body,
          }),
        }).optimize(n);
      }
      if (e.body instanceof $ && e.alternative instanceof B)
        return s(B, e, {
          body: s(Me, e, {
            operator: "||",
            left: e.condition,
            right: e.alternative.body,
          }),
        }).optimize(n);
      if (
        e.body instanceof ie &&
        e.alternative instanceof ie &&
        e.body.TYPE == e.alternative.TYPE
      )
        return s(e.body.CTOR, e, {
          value: s(qe, e, {
            condition: e.condition,
            consequent: e.body.value || s(wn, e.body),
            alternative: e.alternative.value || s(wn, e.alternative),
          }).transform(n),
        }).optimize(n);
      if (e.body instanceof fe && !e.body.alternative && !e.alternative)
        e = s(fe, e, {
          condition: s(Me, e.condition, {
            operator: "&&",
            left: e.condition,
            right: e.body.condition,
          }),
          body: e.body.body,
          alternative: null,
        });
      if (Rn(e.body))
        if (e.alternative) {
          var l = e.alternative;
          e.alternative = null;
          return s(O, e, { body: [e, l] }).optimize(n);
        }
      if (Rn(e.alternative)) {
        r = e.body;
        e.body = e.alternative;
        e.condition = f ? o : e.condition.negate(n);
        e.alternative = null;
        return s(O, e, { body: [e, r] }).optimize(n);
      }
      return e;
    });
    e(ce, function (e, n) {
      if (!n.option("switches")) return e;
      var t;
      var i = e.expression.evaluate(n);
      if (!(i instanceof w)) {
        var r = e.expression;
        e.expression = _(i, r);
        e.expression = Mn(e.expression.transform(n), r);
      }
      if (!n.option("dead_code")) return e;
      if (i instanceof w) i = e.expression.tail_node().evaluate(n);
      var o = [];
      var a = [];
      var u;
      var f;
      for (var c = 0, l = e.body.length; c < l && !f; c++) {
        if ((t = e.body[c]) instanceof pe) {
          if (!u) u = t;
          else b(t, a[a.length - 1]);
        } else if (!(i instanceof w)) {
          if (!((g = t.expression.evaluate(n)) instanceof w) && g !== i) {
            b(t, a[a.length - 1]);
            continue;
          }
          if (g instanceof w) g = t.expression.tail_node().evaluate(n);
          if (g === i) {
            f = t;
            if (u) {
              var p = a.indexOf(u);
              a.splice(p, 1);
              b(u, a[p - 1]);
              u = null;
            }
          }
        }
        if (Rn(t)) {
          var d = a[a.length - 1];
          if (
            Rn(d) &&
            d.body.length == t.body.length &&
            s(O, d, d).equivalent_to(s(O, t, t))
          )
            d.body = [];
        }
        a.push(t);
      }
      for (; c < l; ) b(e.body[c++], a[a.length - 1]);
      if (a.length > 0) a[0].body = o.concat(a[0].body);
      e.body = a;
      for (; (t = a[a.length - 1]); ) {
        var h = t.body[t.body.length - 1];
        if (h instanceof se && n.loopcontrol_target(h) === e) t.body.pop();
        if (
          t.body.length ||
          (t instanceof de && (u || t.expression.has_side_effects(n)))
        )
          break;
        if (a.pop() === u) u = null;
      }
      if (0 == a.length)
        return s(O, e, {
          body: o.concat(s(B, e.expression, { body: e.expression })),
        }).optimize(n);
      if (1 == a.length && (a[0] === f || a[0] === u)) {
        var v = !1;
        var m = new $n(function (n) {
          if (v || n instanceof J || n instanceof B) return !0;
          if (n instanceof se && m.loopcontrol_target(n) === e) v = !0;
        });
        e.walk(m);
        if (!v) {
          var D = a[0].body.slice();
          var g;
          if ((g = a[0].expression)) D.unshift(s(B, g, { body: g }));
          D.unshift(s(B, e.expression, { body: e.expression }));
          return s(O, e, { body: D }).optimize(n);
        }
      }
      return e;
      function b(e, t) {
        if (t && !Rn(t)) t.body = t.body.concat(e.body);
        else cn(n, e, o);
      }
    });
    e(he, function (e, n) {
      fn(e.body, n);
      if (e.bcatch && e.bfinally && g(e.bfinally.body, U)) e.bfinally = null;
      if (n.option("dead_code") && g(e.body, U)) {
        var t = [];
        if (e.bcatch) {
          cn(n, e.bcatch, t);
          t.forEach(function (e) {
            if (!(e instanceof _e)) return;
            e.definitions.forEach(function (e) {
              var n = e.name.definition().redefined();
              if (!n) return;
              e.name = e.name.clone();
              e.name.thedef = n;
            });
          });
        }
        if (e.bfinally) t = t.concat(e.bfinally.body);
        return s(O, e, { body: t }).optimize(n);
      }
      return e;
    });
    _e.DEFMETHOD("remove_initializers", function () {
      var e = [];
      this.definitions.forEach(function (n) {
        if (n.name instanceof Ge) {
          n.value = null;
          e.push(n);
        } else
          n.name.walk(
            new $n(function (t) {
              if (t instanceof Ge) e.push(s(Fe, n, { name: t, value: null }));
            })
          );
      });
      this.definitions = e;
    });
    _e.DEFMETHOD("to_assignments", function (e) {
      var n = e.option("reduce_vars");
      var t = this.definitions.reduce(function (e, t) {
        if (t.value && !(t.name instanceof K)) {
          var i = s(pn, t.name, t.name);
          e.push(s(ze, t, { operator: "=", left: i, right: t.value }));
          if (n) i.definition().fixed = !1;
        } else if (t.value) {
          var r = s(Fe, t, { name: t.name, value: t.value });
          var o = s(De, t, { definitions: [r] });
          e.push(o);
        }
        (t = t.name.definition()).eliminated++;
        t.replaced--;
        return e;
      }, []);
      if (0 == t.length) return null;
      return h(this, t);
    });
    e(_e, function (e, n) {
      if (0 == e.definitions.length) return s($, e);
      return e;
    });
    e(Ee, function (e, n) {
      return e;
    });
    e(we, function (e, t) {
      var i = e.expression;
      var r = i;
      var o = g(e.args, function (e) {
        return !(e instanceof Y);
      });
      if (t.option("reduce_vars") && r instanceof pn) r = r.fixed_value();
      var a = r instanceof J;
      if (t.option("unused") && o && a && !r.uses_arguments && !r.uses_eval) {
        var u = 0,
          f = 0;
        for (var c = 0, l = e.args.length; c < l; c++) {
          if (r.argnames[c] instanceof Y) {
            if (r.argnames[c].expression.__unused) {
              for (; c < l; )
                if ((E = e.args[c++].drop_side_effect_free(t))) e.args[u++] = E;
            } else for (; c < l; ) e.args[u++] = e.args[c++];
            f = u;
            break;
          }
          var p = c >= r.argnames.length;
          if (p || r.argnames[c].__unused) {
            if ((E = e.args[c].drop_side_effect_free(t))) e.args[u++] = E;
            else if (!p) {
              e.args[u++] = s(bn, e.args[c], { value: 0 });
              continue;
            }
          } else e.args[u++] = e.args[c];
          f = u;
        }
        e.args.length = f;
      }
      if (t.option("unsafe"))
        if (Xe(i))
          switch (i.name) {
            case "Array":
              if (1 != e.args.length)
                return s(Ne, e, { elements: e.args }).optimize(t);
              break;
            case "Object":
              if (0 == e.args.length) return s(He, e, { properties: [] });
              break;
            case "String":
              if (0 == e.args.length) return s(gn, e, { value: "" });
              if (e.args.length <= 1)
                return s(Me, e, {
                  left: e.args[0],
                  operator: "+",
                  right: s(gn, e, { value: "" }),
                }).optimize(t);
              break;
            case "Number":
              if (0 == e.args.length) return s(bn, e, { value: 0 });
              if (1 == e.args.length)
                return s(Oe, e, {
                  expression: e.args[0],
                  operator: "+",
                }).optimize(t);
            case "Boolean":
              if (0 == e.args.length) return s(Bn, e);
              if (1 == e.args.length)
                return s(Oe, e, {
                  expression: s(Oe, e, {
                    expression: e.args[0],
                    operator: "!",
                  }),
                  operator: "!",
                }).optimize(t);
              break;
            case "RegExp":
              var d = [];
              if (
                g(e.args, function (e) {
                  var n = e.evaluate(t);
                  d.unshift(n);
                  return e !== n;
                })
              )
                try {
                  return qn(t, e, s(yn, e, { value: RegExp.apply(RegExp, d) }));
                } catch (n) {
                  t.warn("Error converting {expr} [{file}:{line},{col}]", {
                    expr: e.print_to_string(),
                    file: e.start.file,
                    line: e.start.line,
                    col: e.start.col,
                  });
                }
              break;
            case "Symbol":
              e.args = [];
              return e;
          }
        else if (i instanceof Be)
          switch (i.property) {
            case "toString":
              if (0 == e.args.length && !i.expression.may_throw_on_access(t))
                return s(Me, e, {
                  left: s(gn, e, { value: "" }),
                  operator: "+",
                  right: i.expression,
                }).optimize(t);
              break;
            case "join":
              if (i.expression instanceof Ne)
                e: {
                  var v;
                  if (e.args.length > 0)
                    if ((v = e.args[0].evaluate(t)) === e.args[0]) break e;
                  var m = [];
                  var D = [];
                  for (c = 0, l = i.expression.elements.length; c < l; c++) {
                    var b = i.expression.elements[c];
                    if (b instanceof Y) break e;
                    if ((N = b.evaluate(t)) !== b) D.push(N);
                    else {
                      if (D.length > 0) {
                        m.push(s(gn, e, { value: D.join(v) }));
                        D.length = 0;
                      }
                      m.push(b);
                    }
                  }
                  if (D.length > 0) m.push(s(gn, e, { value: D.join(v) }));
                  if (0 == m.length) return s(gn, e, { value: "" });
                  if (1 == m.length) {
                    if (m[0].is_string(t)) return m[0];
                    return s(Me, m[0], {
                      operator: "+",
                      left: s(gn, e, { value: "" }),
                      right: m[0],
                    });
                  }
                  if ("" == v) {
                    var y;
                    if (m[0].is_string(t) || m[1].is_string(t)) y = m.shift();
                    else y = s(gn, e, { value: "" });
                    return m
                      .reduce(function (e, n) {
                        return s(Me, n, { operator: "+", left: e, right: n });
                      }, y)
                      .optimize(t);
                  }
                  var E;
                  (E = e.clone()).expression = E.expression.clone();
                  E.expression.expression = E.expression.expression.clone();
                  E.expression.expression.elements = m;
                  return qn(t, e, E);
                }
              break;
            case "charAt":
              if (i.expression.is_string(t)) {
                var A = e.args[0];
                var F = A ? A.evaluate(t) : 0;
                if (F !== A)
                  return s(Se, i, {
                    expression: i.expression,
                    property: _(0 | F, A || i),
                  }).optimize(t);
              }
              break;
            case "apply":
              if (2 == e.args.length && e.args[1] instanceof Ne) {
                (q = e.args[1].elements.slice()).unshift(e.args[0]);
                return s(we, e, {
                  expression: s(Be, i, {
                    expression: i.expression,
                    property: "call",
                  }),
                  args: q,
                }).optimize(t);
              }
              break;
            case "call":
              var x = i.expression;
              if (x instanceof pn) x = x.fixed_value();
              if (x instanceof J && !x.contains_this())
                return h(this, [
                  e.args[0],
                  s(we, e, { expression: i.expression, args: e.args.slice(1) }),
                ]).optimize(t);
          }
      if (t.option("unsafe_Function") && Xe(i) && "Function" == i.name) {
        if (0 == e.args.length)
          return s(X, e, { argnames: [], body: [] }).optimize(t);
        if (
          g(e.args, function (e) {
            return e instanceof gn;
          })
        )
          try {
            var C = vt(
              ($ =
                "n(function(" +
                e.args
                  .slice(0, -1)
                  .map(function (e) {
                    return e.value;
                  })
                  .join(",") +
                "){" +
                e.args[e.args.length - 1].value +
                "})")
            );
            var k = { ie8: t.option("ie8") };
            C.figure_out_scope(k);
            var S = new At(t.options);
            (C = C.transform(S)).figure_out_scope(k);
            gt.reset();
            C.compute_char_frequency(k);
            C.mangle_names(k);
            var T;
            C.walk(
              new $n(function (e) {
                if (T) return !0;
                if (n(e)) {
                  T = e;
                  return !0;
                }
              })
            );
            if (T.body instanceof w)
              T.body = [s(re, T.body, { value: T.body })];
            var $ = Et();
            O.prototype._codegen.call(T, T, $);
            e.args = [
              s(gn, e, {
                value: T.argnames
                  .map(function (e) {
                    return e.print_to_string();
                  })
                  .join(","),
              }),
              s(gn, e.args[e.args.length - 1], {
                value: $.get().replace(/^\{|\}$/g, ""),
              }),
            ];
            return e;
          } catch (n) {
            if (n instanceof at) {
              t.warn(
                "Error parsing code passed to new Function [{file}:{line},{col}]",
                e.args[e.args.length - 1].start
              );
              t.warn(n.toString());
            } else throw n;
          }
      }
      var M = a && r.body;
      if (M instanceof w) M = s(re, M, { value: M });
      else if (M) M = M[0];
      if (t.option("inline") && M instanceof re)
        if (!(N = M.value) || N.is_constant_expression()) {
          var q = e.args.concat(N || s(wn, e));
          return h(e, q).optimize(t);
        }
      if (a && !r.is_generator && !r.async) {
        var j,
          N,
          H,
          I,
          R = -1;
        if (
          t.option("inline") &&
          o &&
          !r.uses_arguments &&
          !r.uses_eval &&
          !(r.name && r instanceof X) &&
          (N = (function (e) {
            var n = r.body instanceof w ? [r.body] : r.body;
            var i = n.length;
            if (t.option("inline") < 3) return 1 == i && Z(e);
            e = null;
            for (var o = 0; o < i; o++) {
              var a = n[o];
              if (a instanceof De) {
                if (
                  e &&
                  !g(a.definitions, function (e) {
                    return !e.value;
                  })
                )
                  return !1;
              } else if (e) return !1;
              else e = a;
            }
            return Z(e);
          })(M)) &&
          (i === r ||
            (t.option("unused") &&
              1 == (j = i.definition()).references.length &&
              !Pn(t, j) &&
              r.is_constant_expression(i.scope))) &&
          !e.pure &&
          !r.contains_this() &&
          (function () {
            var e = Object.create(null);
            do {
              if ((H = t.parent(++R)) instanceof ve) e[H.argname.name] = !0;
              else if (H instanceof z) I = [];
              else if (H instanceof pn)
                if (H.fixed_value() instanceof L) return !1;
            } while (!(H instanceof L) || H instanceof G);
            var n = !(H instanceof V) || t.toplevel.vars;
            var i = t.option("inline");
            if (
              !(function (e, n) {
                var t = r.body.length;
                for (var i = 0; i < t; i++) {
                  var o = r.body[i];
                  if (!(o instanceof De)) continue;
                  if (!n) return !1;
                  for (var a = o.definitions.length; --a >= 0; ) {
                    var s = o.definitions[a].name;
                    if (e[s.name] || an(s.name) || H.var_names()[s.name])
                      return !1;
                    if (I) I.push(s.definition());
                  }
                }
                return !0;
              })(e, i >= 3 && n)
            )
              return !1;
            if (
              !(function (e, n) {
                for (var t = 0, i = r.argnames.length; t < i; t++) {
                  var o = r.argnames[t];
                  if (o instanceof je) {
                    if (o.left.__unused) continue;
                    return !1;
                  }
                  if (o instanceof K) return !1;
                  if (o instanceof Y) {
                    if (o.expression.__unused) continue;
                    return !1;
                  }
                  if (o.__unused) continue;
                  if (!n || e[o.name] || an(o.name) || H.var_names()[o.name])
                    return !1;
                  if (I) I.push(o.definition());
                }
                return !0;
              })(e, i >= 2 && n)
            )
              return !1;
            return !I || 0 == I.length || !Vn(r, I);
          })()
        )
          return h(
            e,
            (function () {
              var n = [];
              var i = [];
              !(function (n, t) {
                var i = r.argnames.length;
                for (var o = e.args.length; --o >= i; ) t.push(e.args[o]);
                for (o = i; --o >= 0; ) {
                  var a = r.argnames[o];
                  var u = e.args[o];
                  if (a.__unused || !a.name || H.var_names()[a.name]) {
                    if (u) t.push(u);
                  } else {
                    var f = s(Ze, a, a);
                    a.definition().orig.push(f);
                    if (!u && I) u = s(wn, e);
                    Q(n, t, f, u);
                  }
                }
                n.reverse();
                t.reverse();
              })(n, i);
              !(function (e, n) {
                var t = n.length;
                for (var i = 0, o = r.body.length; i < o; i++) {
                  var a = r.body[i];
                  if (!(a instanceof De)) continue;
                  for (var u = 0, f = a.definitions.length; u < f; u++) {
                    var c = a.definitions[u];
                    var l = c.name;
                    Q(e, n, l, c.value);
                    if (I) {
                      var p = l.definition();
                      var d = s(pn, l, l);
                      p.references.push(d);
                      n.splice(
                        t++,
                        0,
                        s(ze, c, { operator: "=", left: d, right: s(wn, l) })
                      );
                    }
                  }
                }
              })(n, i);
              i.push(N);
              if (n.length) {
                c = H.body.indexOf(t.parent(R - 1)) + 1;
                H.body.splice(c, 0, s(De, r, { definitions: n }));
              }
              return i;
            })()
          ).optimize(t);
        if (
          t.option("side_effects") &&
          !(r.body instanceof w) &&
          g(r.body, U)
        ) {
          q = e.args.concat(s(wn, e));
          return h(e, q).optimize(t);
        }
      }
      if (t.option("drop_console"))
        if (i instanceof ke) {
          var P = i.expression;
          for (; P.expression; ) P = P.expression;
          if (Xe(P) && "console" == P.name) return s(wn, e).optimize(t);
        }
      if (t.option("negate_iife") && t.parent() instanceof B && Ue(e))
        return e.negate(t, !0);
      var W = e.evaluate(t);
      if (W !== e) {
        W = _(W, e).optimize(t);
        return qn(t, W, e);
      }
      return e;
      function Z(n) {
        if (!n) return s(wn, e);
        if (n instanceof re) {
          if (!n.value) return s(wn, e);
          return n.value.clone(!0);
        }
        if (n instanceof B)
          return s(Oe, n, { operator: "void", expression: n.body.clone(!0) });
      }
      function Q(n, t, i, r) {
        var o = i.definition();
        H.variables.set(i.name, o);
        H.enclosed.push(o);
        if (!H.var_names()[i.name]) {
          H.var_names()[i.name] = !0;
          n.push(s(Fe, i, { name: i, value: null }));
        }
        var a = s(pn, i, i);
        o.references.push(a);
        if (r) t.push(s(ze, e, { operator: "=", left: a, right: r }));
      }
    });
    e(xe, function (e, n) {
      if (n.option("unsafe")) {
        var t = e.expression;
        if (Xe(t))
          switch (t.name) {
            case "Object":
            case "RegExp":
            case "Function":
            case "Error":
            case "Array":
              return s(we, e, e).transform(n);
          }
      }
      return e;
    });
    e(Ce, function (e, n) {
      if (!n.option("side_effects")) return e;
      var t = [];
      (i = E(n)),
        (r = e.expressions.length - 1),
        e.expressions.forEach(function (e, o) {
          if (o < r) e = e.drop_side_effect_free(n, i);
          if (e) {
            F(t, e);
            i = !1;
          }
        });
      var i, r;
      var o = t.length - 1;
      !(function () {
        for (; o > 0 && hn(t[o], n); ) o--;
        if (o < t.length - 1) {
          t[o] = s(Oe, e, { operator: "void", expression: t[o] });
          t.length = o + 1;
        }
      })();
      if (0 == o) {
        if (!((e = A(n.parent(), n.self(), t[0])) instanceof Ce))
          e = e.optimize(n);
        return e;
      }
      e.expressions = t;
      return e;
    });
    Te.DEFMETHOD("lift_sequences", function (e) {
      if (e.option("sequences"))
        if (this.expression instanceof Ce) {
          var n = this.expression.expressions.slice();
          var t = this.clone();
          t.expression = n.pop();
          n.push(t);
          return h(this, n).optimize(e);
        }
      return this;
    });
    e($e, function (e, n) {
      return e.lift_sequences(n);
    });
    e(Oe, function (e, n) {
      var t = e.expression;
      if (
        "delete" == e.operator &&
        !(t instanceof pn || t instanceof ke || sn(t))
      ) {
        if (t instanceof Ce) {
          (t = t.expressions.slice()).push(s(Sn, e));
          return h(e, t).optimize(n);
        }
        return h(e, [t, s(Sn, e)]).optimize(n);
      }
      var i = e.lift_sequences(n);
      if (i !== e) return i;
      if (n.option("side_effects") && "void" == e.operator)
        if ((t = t.drop_side_effect_free(n))) {
          e.expression = t;
          return e;
        } else return s(wn, e).optimize(n);
      if (n.in_boolean_context())
        switch (e.operator) {
          case "!":
            if (t instanceof Oe && "!" == t.operator) return t.expression;
            if (t instanceof Me) e = qn(n, e, t.negate(n, E(n)));
            break;
          case "typeof":
            n.warn(
              "Boolean expression always true [{file}:{line},{col}]",
              e.start
            );
            return (t instanceof pn ? s(Sn, e) : h(e, [t, s(Sn, e)])).optimize(
              n
            );
        }
      if ("-" == e.operator && t instanceof Cn) t = t.transform(n);
      if (
        t instanceof Me &&
        ("+" == e.operator || "-" == e.operator) &&
        ("*" == t.operator || "/" == t.operator || "%" == t.operator)
      )
        return s(Me, e, {
          operator: t.operator,
          left: s(Oe, t.left, { operator: e.operator, expression: t.left }),
          right: t.right,
        });
      if ("-" != e.operator || !(t instanceof bn || t instanceof Cn)) {
        var r = e.evaluate(n);
        if (r !== e) return qn(n, (r = _(r, e).optimize(n)), e);
      }
      return e;
    });
    Me.DEFMETHOD("lift_sequences", function (e) {
      if (e.option("sequences")) {
        if (this.left instanceof Ce) {
          var n = this.left.expressions.slice();
          (o = this.clone()).left = n.pop();
          n.push(o);
          return h(this, n).optimize(e);
        }
        if (this.right instanceof Ce && !this.left.has_side_effects(e)) {
          var t = "=" == this.operator && this.left instanceof pn;
          var i = (n = this.right.expressions).length - 1;
          for (var r = 0; r < i && (t || !n[r].has_side_effects(e)); r++);
          if (r == i) {
            n = n.slice();
            (o = this.clone()).right = n.pop();
            n.push(o);
            return h(this, n).optimize(e);
          } else if (r > 0) {
            var o;
            (o = this.clone()).right = h(this.right, n.slice(r));
            (n = n.slice(0, r)).push(o);
            return h(this, n).optimize(e);
          }
        }
      }
      return this;
    });
    var Un = D("== === != !== * & | ^");
    e(Me, function (e, n) {
      function t() {
        return (
          e.left.is_constant() ||
          e.right.is_constant() ||
          (!e.left.has_side_effects(n) && !e.right.has_side_effects(n))
        );
      }
      function i(n) {
        if (t()) {
          if (n) e.operator = n;
          var i = e.left;
          e.left = e.right;
          e.right = i;
        }
      }
      if (Un(e.operator))
        if (e.right.is_constant() && !e.left.is_constant())
          if (!(e.left instanceof Me && dt[e.left.operator] >= dt[e.operator]))
            i();
      e = e.lift_sequences(n);
      if (n.option("comparisons"))
        switch (e.operator) {
          case "===":
          case "!==":
            if (
              (e.left.is_string(n) && e.right.is_string(n)) ||
              (e.left.is_number(n) && e.right.is_number(n)) ||
              (e.left.is_boolean() && e.right.is_boolean()) ||
              e.left.equivalent_to(e.right)
            )
              e.operator = e.operator.substr(0, 2);
          case "==":
          case "!=":
            if (
              n.option("typeofs") &&
              e.left instanceof gn &&
              "undefined" == e.left.value &&
              e.right instanceof Oe &&
              "typeof" == e.right.operator
            ) {
              var r = e.right.expression;
              if (
                r instanceof pn
                  ? r.is_declared(n)
                  : !(r instanceof ke && n.option("ie8"))
              ) {
                e.right = r;
                e.left = s(wn, e.left).optimize(n);
                if (2 == e.operator.length) e.operator += "=";
              }
            } else if (
              e.left instanceof pn &&
              e.right instanceof pn &&
              e.left.definition() === e.right.definition() &&
              ((o = e.left.fixed_value()) instanceof Ne ||
                o instanceof J ||
                o instanceof He ||
                o instanceof Ve)
            )
              return s("=" == e.operator[0] ? Sn : Bn, e);
        }
      var o;
      if ("+" == e.operator && n.in_boolean_context()) {
        var a = e.left.evaluate(n);
        var u = e.right.evaluate(n);
        if (a && "string" == typeof a) {
          n.warn(
            "+ in boolean context always true [{file}:{line},{col}]",
            e.start
          );
          return h(e, [e.right, s(Sn, e)]).optimize(n);
        }
        if (u && "string" == typeof u) {
          n.warn(
            "+ in boolean context always true [{file}:{line},{col}]",
            e.start
          );
          return h(e, [e.left, s(Sn, e)]).optimize(n);
        }
      }
      if (n.option("comparisons") && e.is_boolean()) {
        if (!(n.parent() instanceof Me) || n.parent() instanceof ze) {
          var f = s(Oe, e, { operator: "!", expression: e.negate(n, E(n)) });
          e = qn(n, e, f);
        }
        if (n.option("unsafe_comps"))
          switch (e.operator) {
            case "<":
              i(">");
              break;
            case "<=":
              i(">=");
          }
      }
      if ("+" == e.operator) {
        if (
          e.right instanceof gn &&
          "" == e.right.getValue() &&
          e.left.is_string(n)
        )
          return e.left;
        if (
          e.left instanceof gn &&
          "" == e.left.getValue() &&
          e.right.is_string(n)
        )
          return e.right;
        if (
          e.left instanceof Me &&
          "+" == e.left.operator &&
          e.left.left instanceof gn &&
          "" == e.left.left.getValue() &&
          e.right.is_string(n)
        ) {
          e.left = e.left.right;
          return e.transform(n);
        }
      }
      if (n.option("evaluate")) {
        switch (e.operator) {
          case "&&":
            if (
              !(a = e.left.truthy ? !0 : e.left.falsy ? !1 : e.left.evaluate(n))
            ) {
              n.warn(
                "Condition left of && always false [{file}:{line},{col}]",
                e.start
              );
              return A(n.parent(), n.self(), e.left).optimize(n);
            } else if (!(a instanceof w)) {
              n.warn(
                "Condition left of && always true [{file}:{line},{col}]",
                e.start
              );
              return h(e, [e.left, e.right]).optimize(n);
            }
            if (!(u = e.right.evaluate(n))) {
              if (n.in_boolean_context()) {
                n.warn(
                  "Boolean && always false [{file}:{line},{col}]",
                  e.start
                );
                return h(e, [e.left, s(Bn, e)]).optimize(n);
              } else e.falsy = !0;
            } else if (!(u instanceof w))
              if (
                ("&&" == (c = n.parent()).operator && c.left === n.self()) ||
                n.in_boolean_context()
              ) {
                n.warn(
                  "Dropping side-effect-free && [{file}:{line},{col}]",
                  e.start
                );
                return e.left.optimize(n);
              }
            if ("||" == e.left.operator)
              if (!(l = e.left.right.evaluate(n)))
                return s(qe, e, {
                  condition: e.left.left,
                  consequent: e.right,
                  alternative: e.left.right,
                }).optimize(n);
            break;
          case "||":
            if (
              !(a = e.left.truthy ? !0 : e.left.falsy ? !1 : e.left.evaluate(n))
            ) {
              n.warn(
                "Condition left of || always false [{file}:{line},{col}]",
                e.start
              );
              return h(e, [e.left, e.right]).optimize(n);
            } else if (!(a instanceof w)) {
              n.warn(
                "Condition left of || always true [{file}:{line},{col}]",
                e.start
              );
              return A(n.parent(), n.self(), e.left).optimize(n);
            }
            if (!(u = e.right.evaluate(n))) {
              var c;
              if (
                ("||" == (c = n.parent()).operator && c.left === n.self()) ||
                n.in_boolean_context()
              ) {
                n.warn(
                  "Dropping side-effect-free || [{file}:{line},{col}]",
                  e.start
                );
                return e.left.optimize(n);
              }
            } else if (!(u instanceof w))
              if (n.in_boolean_context()) {
                n.warn("Boolean || always true [{file}:{line},{col}]", e.start);
                return h(e, [e.left, s(Sn, e)]).optimize(n);
              } else e.truthy = !0;
            if ("&&" == e.left.operator) {
              var l;
              if ((l = e.left.right.evaluate(n)) && !(l instanceof w))
                return s(qe, e, {
                  condition: e.left.left,
                  consequent: e.left.right,
                  alternative: e.right,
                }).optimize(n);
            }
        }
        var p = !0;
        switch (e.operator) {
          case "+":
            if (
              e.left instanceof Dn &&
              e.right instanceof Me &&
              "+" == e.right.operator &&
              e.right.left instanceof Dn &&
              e.right.is_string(n)
            )
              e = s(Me, e, {
                operator: "+",
                left: s(gn, e.left, {
                  value: "" + e.left.getValue() + e.right.left.getValue(),
                  start: e.left.start,
                  end: e.right.left.end,
                }),
                right: e.right.right,
              });
            if (
              e.right instanceof Dn &&
              e.left instanceof Me &&
              "+" == e.left.operator &&
              e.left.right instanceof Dn &&
              e.left.is_string(n)
            )
              e = s(Me, e, {
                operator: "+",
                left: e.left.left,
                right: s(gn, e.right, {
                  value: "" + e.left.right.getValue() + e.right.getValue(),
                  start: e.left.right.start,
                  end: e.right.end,
                }),
              });
            if (
              e.left instanceof Me &&
              "+" == e.left.operator &&
              e.left.is_string(n) &&
              e.left.right instanceof Dn &&
              e.right instanceof Me &&
              "+" == e.right.operator &&
              e.right.left instanceof Dn &&
              e.right.is_string(n)
            )
              e = s(Me, e, {
                operator: "+",
                left: s(Me, e.left, {
                  operator: "+",
                  left: e.left.left,
                  right: s(gn, e.left.right, {
                    value:
                      "" + e.left.right.getValue() + e.right.left.getValue(),
                    start: e.left.right.start,
                    end: e.right.left.end,
                  }),
                }),
                right: e.right.right,
              });
            if (
              e.right instanceof Oe &&
              "-" == e.right.operator &&
              e.left.is_number(n)
            ) {
              e = s(Me, e, {
                operator: "-",
                left: e.left,
                right: e.right.expression,
              });
              break;
            }
            if (
              e.left instanceof Oe &&
              "-" == e.left.operator &&
              t() &&
              e.right.is_number(n)
            ) {
              e = s(Me, e, {
                operator: "-",
                left: e.right,
                right: e.left.expression,
              });
              break;
            }
          case "*":
            p = n.option("unsafe_math");
          case "&":
          case "|":
          case "^":
            if (
              e.left.is_number(n) &&
              e.right.is_number(n) &&
              t() &&
              !(
                e.left instanceof Me &&
                e.left.operator != e.operator &&
                dt[e.left.operator] >= dt[e.operator]
              )
            ) {
              var d = s(Me, e, {
                operator: e.operator,
                left: e.right,
                right: e.left,
              });
              if (e.right instanceof Dn && !(e.left instanceof Dn))
                e = qn(n, d, e);
              else e = qn(n, e, d);
            }
            if (p && e.is_number(n)) {
              if (e.right instanceof Me && e.right.operator == e.operator)
                e = s(Me, e, {
                  operator: e.operator,
                  left: s(Me, e.left, {
                    operator: e.operator,
                    left: e.left,
                    right: e.right.left,
                    start: e.left.start,
                    end: e.right.left.end,
                  }),
                  right: e.right.right,
                });
              if (
                e.right instanceof Dn &&
                e.left instanceof Me &&
                e.left.operator == e.operator
              )
                if (e.left.left instanceof Dn)
                  e = s(Me, e, {
                    operator: e.operator,
                    left: s(Me, e.left, {
                      operator: e.operator,
                      left: e.left.left,
                      right: e.right,
                      start: e.left.left.start,
                      end: e.right.end,
                    }),
                    right: e.left.right,
                  });
                else if (e.left.right instanceof Dn)
                  e = s(Me, e, {
                    operator: e.operator,
                    left: s(Me, e.left, {
                      operator: e.operator,
                      left: e.left.right,
                      right: e.right,
                      start: e.left.right.start,
                      end: e.right.end,
                    }),
                    right: e.left.left,
                  });
              if (
                e.left instanceof Me &&
                e.left.operator == e.operator &&
                e.left.right instanceof Dn &&
                e.right instanceof Me &&
                e.right.operator == e.operator &&
                e.right.left instanceof Dn
              )
                e = s(Me, e, {
                  operator: e.operator,
                  left: s(Me, e.left, {
                    operator: e.operator,
                    left: s(Me, e.left.left, {
                      operator: e.operator,
                      left: e.left.right,
                      right: e.right.left,
                      start: e.left.right.start,
                      end: e.right.left.end,
                    }),
                    right: e.left.left,
                  }),
                  right: e.right.right,
                });
            }
        }
      }
      if (
        e.right instanceof Me &&
        e.right.operator == e.operator &&
        (vn(e.operator) ||
          ("+" == e.operator &&
            (e.right.left.is_string(n) ||
              (e.left.is_string(n) && e.right.right.is_string(n)))))
      ) {
        e.left = s(Me, e.left, {
          operator: e.operator,
          left: e.left,
          right: e.right.left,
        });
        e.right = e.right.right;
        return e.transform(n);
      }
      var v = e.evaluate(n);
      if (v !== e) {
        v = _(v, e).optimize(n);
        return qn(n, v, e);
      }
      return e;
    });
    e(dn, function (e, n) {
      return e;
    });
    function Pn(e, n) {
      var t;
      for (var i = 0; (t = e.parent(i)); i++)
        if (t instanceof J) {
          var r = t.name;
          if (r && r.definition() === n) break;
        }
      return t;
    }
    e(pn, function (e, t) {
      var i = e.resolve_defines(t);
      if (i) return i.optimize(t);
      if (
        !t.option("ie8") &&
        Xe(e) &&
        (!e.scope.uses_with || !t.find_parent(P))
      )
        switch (e.name) {
          case "undefined":
            return s(wn, e).optimize(t);
          case "NaN":
            return s(Fn, e).optimize(t);
          case "Infinity":
            return s(Cn, e).optimize(t);
        }
      if (t.option("reduce_vars") && En(e, t.parent()) !== e) {
        var r = e.definition();
        var o = e.fixed_value();
        var a = r.single_use;
        if (a && (o instanceof J || o instanceof Ve))
          if (
            r.scope !== e.scope &&
            ((!t.option("reduce_funcs") && o instanceof J) ||
              1 == r.escaped ||
              o.inlined)
          )
            a = !1;
          else if (Pn(t, r)) a = !1;
          else if (r.scope !== e.scope || r.orig[0] instanceof nn)
            if ("f" == (a = o.is_constant_expression(e.scope))) {
              var u = e.scope;
              do {
                if (u instanceof Z || n(u)) u.inlined = !0;
              } while ((u = u.parent_scope));
            }
        if (a && o) {
          if (o instanceof Ye) o = s(Je, o, o);
          if (o instanceof Z) {
            o._squeezed = !0;
            o = s(X, o, o);
          }
          var f;
          if (r.recursive_refs > 0 && o.name instanceof tn) {
            var c = (f = o.clone(!0)).name.definition();
            var l = f.variables.get(f.name.name);
            var p = l && l.orig[0];
            if (!(p instanceof on)) {
              (p = s(on, f.name, f.name)).scope = f;
              f.name = p;
              l = f.def_function(p);
            }
            f.walk(
              new $n(function (e) {
                if (e instanceof pn && e.definition() === c) {
                  e.thedef = l;
                  l.references.push(e);
                }
              })
            );
          } else if ((f = o.optimize(t)) === o) f = o.clone(!0);
          return f;
        }
        if (o && void 0 === r.should_replace) {
          var d;
          if (o instanceof mn) {
            if (
              !(r.orig[0] instanceof nn) &&
              g(r.references, function (e) {
                return r.scope === e.scope;
              })
            )
              d = o;
          } else {
            var h = o.evaluate(t);
            if (
              h !== o &&
              (t.option("unsafe_regexp") || !(h instanceof RegExp))
            )
              d = _(h, o);
          }
          if (d) {
            var v = d.optimize(t).print_to_string().length;
            var m;
            if (
              (function (e) {
                var n;
                o.walk(
                  new $n(function (e) {
                    if (e instanceof pn) n = !0;
                    if (n) return !0;
                  })
                );
                return n;
              })()
            )
              m = function () {
                var e = d.optimize(t);
                return e === d ? e.clone(!0) : e;
              };
            else {
              v = Math.min(v, o.print_to_string().length);
              m = function () {
                var e = Mn(d.optimize(t), o);
                return e === d || e === o ? e.clone(!0) : e;
              };
            }
            var D = r.name.length;
            var b = 0;
            if (t.option("unused") && !t.exposed(r))
              b = (D + 2 + v) / r.references.length;
            r.should_replace = v <= D + b ? m : !1;
          } else r.should_replace = !1;
        }
        if (r.should_replace) return r.should_replace();
      }
      return e;
    });
    function Ln(e, n) {
      return e instanceof pn || e.TYPE === n.TYPE;
    }
    e(wn, function (e, n) {
      if (n.option("unsafe_undefined")) {
        var t = a(n, "undefined");
        if (t) {
          var i = s(pn, e, { name: "undefined", scope: t.scope, thedef: t });
          i.is_undefined = !0;
          return i;
        }
      }
      var r = En(n.self(), n.parent());
      if (r && Ln(r, e)) return e;
      return s(Oe, e, { operator: "void", expression: s(bn, e, { value: 0 }) });
    });
    e(Cn, function (e, n) {
      var t = En(n.self(), n.parent());
      if (t && Ln(t, e)) return e;
      if (n.option("keep_infinity") && (!t || Ln(t, e)) && !a(n, "Infinity"))
        return e;
      return s(Me, e, {
        operator: "/",
        left: s(bn, e, { value: 1 }),
        right: s(bn, e, { value: 0 }),
      });
    });
    e(Fn, function (e, n) {
      var t = En(n.self(), n.parent());
      if ((t && !Ln(t, e)) || a(n, "NaN"))
        return s(Me, e, {
          operator: "/",
          left: s(bn, e, { value: 0 }),
          right: s(bn, e, { value: 0 }),
        });
      return e;
    });
    function Vn(e, n) {
      var i = !1;
      var r = new $n(function (e) {
        if (i) return !0;
        if (e instanceof pn && t(e.definition(), n)) return (i = !0);
      });
      var o = new $n(function (n) {
        if (i) return !0;
        if (n instanceof L && n !== e) {
          var t = o.parent();
          if (t instanceof we && t.expression === n) return;
          n.walk(r);
          return !0;
        }
      });
      e.walk(o);
      return i;
    }
    var Yn = ["+", "-", "/", "*", "%", ">>", "<<", ">>>", "|", "^", "&"];
    var Jn = ["*", "|", "^", "&"];
    e(ze, function (e, n) {
      var i;
      if (
        n.option("dead_code") &&
        e.left instanceof pn &&
        (i = e.left.definition()).scope === n.find_parent(J)
      ) {
        var r,
          o = 0,
          a = e;
        do {
          r = a;
          if ((a = n.parent(o++)) instanceof ie) {
            if (u(o, a instanceof oe)) break;
            if (Vn(i.scope, [i])) break;
            if ("=" == e.operator) return e.right;
            return s(Me, e, {
              operator: e.operator.slice(0, -1),
              left: e.left,
              right: e.right,
            }).optimize(n);
          }
        } while (
          (a instanceof Me && a.right === r) ||
          (a instanceof Ce && a.tail_node() === r)
        );
      }
      if (
        "=" == (e = e.lift_sequences(n)).operator &&
        e.left instanceof pn &&
        e.right instanceof Me
      )
        if (
          e.right.left instanceof pn &&
          e.right.left.name == e.left.name &&
          t(e.right.operator, Yn)
        ) {
          e.operator = e.right.operator + "=";
          e.right = e.right.right;
        } else if (
          e.right.right instanceof pn &&
          e.right.right.name == e.left.name &&
          t(e.right.operator, Jn) &&
          !e.right.left.has_side_effects(n)
        ) {
          e.operator = e.right.operator + "=";
          e.right = e.right.left;
        }
      return e;
      function u(t, i) {
        var r = e.left.definition().scope;
        var o;
        for (; (o = n.parent(t++)) !== r; )
          if (o instanceof he) {
            if (o.bfinally) return !0;
            if (i && o.bcatch) return !0;
          }
      }
    });
    e(je, function (e, n) {
      if (!n.option("evaluate")) return e;
      var t = e.right.evaluate(n);
      if (void 0 === t) e = e.left;
      else if (t !== e.right) {
        t = _(t, e.right);
        e.right = Mn(t, e.right);
      }
      return e;
    });
    e(qe, function (e, n) {
      if (!n.option("conditionals")) return e;
      if (e.condition instanceof Ce) {
        var t = e.condition.expressions.slice();
        e.condition = t.pop();
        t.push(e);
        return h(e, t);
      }
      var i = e.condition.evaluate(n);
      if (i !== e.condition)
        if (i) {
          n.warn("Condition always true [{file}:{line},{col}]", e.start);
          return A(n.parent(), n.self(), e.consequent);
        } else {
          n.warn("Condition always false [{file}:{line},{col}]", e.start);
          return A(n.parent(), n.self(), e.alternative);
        }
      var r = i.negate(n, E(n));
      if (qn(n, i, r) === r)
        e = s(qe, e, {
          condition: r,
          consequent: e.alternative,
          alternative: e.consequent,
        });
      var o = e.condition;
      var a = e.consequent;
      var u = e.alternative;
      if (
        o instanceof pn &&
        a instanceof pn &&
        o.definition() === a.definition()
      )
        return s(Me, e, { operator: "||", left: o, right: u });
      if (
        a instanceof ze &&
        u instanceof ze &&
        a.operator == u.operator &&
        a.left.equivalent_to(u.left) &&
        (!e.condition.has_side_effects(n) ||
          ("=" == a.operator && !a.left.has_side_effects(n)))
      )
        return s(ze, e, {
          operator: a.operator,
          left: a.left,
          right: s(qe, e, {
            condition: e.condition,
            consequent: a.right,
            alternative: u.right,
          }),
        });
      var f;
      if (
        a instanceof we &&
        u.TYPE === a.TYPE &&
        a.args.length > 0 &&
        a.args.length == u.args.length &&
        a.expression.equivalent_to(u.expression) &&
        !e.condition.has_side_effects(n) &&
        !a.expression.has_side_effects(n) &&
        "number" ==
          typeof (f = (function () {
            var e = a.args;
            var n = u.args;
            for (var t = 0, i = e.length; t < i; t++) {
              if (e[t] instanceof Y) return;
              if (!e[t].equivalent_to(n[t])) {
                if (n[t] instanceof Y) return;
                for (var r = t + 1; r < i; r++) {
                  if (e[r] instanceof Y) return;
                  if (!e[r].equivalent_to(n[r])) return;
                }
                return t;
              }
            }
          })())
      ) {
        var c = a.clone();
        c.args[f] = s(qe, e, {
          condition: e.condition,
          consequent: a.args[f],
          alternative: u.args[f],
        });
        return c;
      }
      if (a instanceof qe && a.alternative.equivalent_to(u))
        return s(qe, e, {
          condition: s(Me, e, {
            left: e.condition,
            operator: "&&",
            right: a.condition,
          }),
          consequent: a.consequent,
          alternative: u,
        });
      if (a.equivalent_to(u)) return h(e, [e.condition, a]).optimize(n);
      if (a instanceof Me && "||" == a.operator && a.right.equivalent_to(u))
        return s(Me, e, {
          operator: "||",
          left: s(Me, e, { operator: "&&", left: e.condition, right: a.left }),
          right: u,
        }).optimize(n);
      var l = n.in_boolean_context();
      if (d(e.consequent)) {
        if (v(e.alternative)) return p(e.condition);
        return s(Me, e, {
          operator: "||",
          left: p(e.condition),
          right: e.alternative,
        });
      }
      if (v(e.consequent)) {
        if (d(e.alternative)) return p(e.condition.negate(n));
        return s(Me, e, {
          operator: "&&",
          left: p(e.condition.negate(n)),
          right: e.alternative,
        });
      }
      if (d(e.alternative))
        return s(Me, e, {
          operator: "||",
          left: p(e.condition.negate(n)),
          right: e.consequent,
        });
      if (v(e.alternative))
        return s(Me, e, {
          operator: "&&",
          left: p(e.condition),
          right: e.consequent,
        });
      return e;
      function p(e) {
        if (e.is_boolean()) return e;
        return s(Oe, e, { operator: "!", expression: e.negate(n) });
      }
      function d(e) {
        return (
          e instanceof Sn ||
          (l && e instanceof Dn && e.getValue()) ||
          (e instanceof Oe &&
            "!" == e.operator &&
            e.expression instanceof Dn &&
            !e.expression.getValue())
        );
      }
      function v(e) {
        return (
          e instanceof Bn ||
          (l && e instanceof Dn && !e.getValue()) ||
          (e instanceof Oe &&
            "!" == e.operator &&
            e.expression instanceof Dn &&
            e.expression.getValue())
        );
      }
    });
    e(kn, function (e, n) {
      if (n.in_boolean_context()) return s(bn, e, { value: +e.value });
      if (n.option("booleans")) {
        var t = n.parent();
        if (t instanceof Me && ("==" == t.operator || "!=" == t.operator)) {
          n.warn(
            "Non-strict equality against boolean: {operator} {value} [{file}:{line},{col}]",
            {
              operator: t.operator,
              value: e.value,
              file: t.start.file,
              line: t.start.line,
              col: t.start.col,
            }
          );
          return s(bn, e, { value: +e.value });
        }
        return s(Oe, e, {
          operator: "!",
          expression: s(bn, e, { value: 1 - e.value }),
        });
      }
      return e;
    });
    e(Se, function (e, n) {
      var t = e.expression;
      var i = e.property;
      if (n.option("properties")) {
        var r = i.evaluate(n);
        if (r !== i) {
          if ("string" == typeof r)
            if ("undefined" == r) r = void 0;
            else if ((v = parseFloat(r)).toString() == r) r = v;
          i = e.property = Mn(i, _(r, i).transform(n));
          var o = "" + r;
          if (ot(o) && o.length <= i.print_to_string().length + 1)
            return s(Be, e, { expression: t, property: o }).optimize(n);
        }
      }
      if (En(e, n.parent())) return e;
      if (r !== i) {
        var a = e.flatten_object(o, n);
        if (a) {
          t = e.expression = a.expression;
          i = e.property = a.property;
        }
      }
      if (
        n.option("properties") &&
        n.option("side_effects") &&
        i instanceof bn &&
        t instanceof Ne
      ) {
        var u = i.getValue();
        var f = t.elements;
        e: if (u in f) {
          var c = !0;
          var l = [];
          for (var p = f.length; --p > u; )
            if ((v = f[p].drop_side_effect_free(n))) {
              l.unshift(v);
              if (c && v.has_side_effects(n)) c = !1;
            }
          var d = f[u];
          if (d instanceof Y) break e;
          d = d instanceof xn ? s(wn, d) : d;
          if (!c) l.unshift(d);
          for (; --p >= 0; ) {
            var v;
            if ((v = f[p]) instanceof Y) break e;
            if ((v = v.drop_side_effect_free(n))) l.unshift(v);
            else u--;
          }
          if (c) {
            l.push(d);
            return h(e, l).optimize(n);
          } else
            return s(Se, e, {
              expression: s(Ne, t, { elements: l }),
              property: s(bn, i, { value: u }),
            });
        }
      }
      var m = e.evaluate(n);
      if (m !== e) return qn(n, (m = _(m, e).optimize(n)), e);
      return e;
    });
    J.DEFMETHOD("contains_this", function () {
      var e;
      var n = this;
      n.walk(
        new $n(function (t) {
          if (e) return !0;
          if (t instanceof mn) return (e = !0);
          if (t !== n && t instanceof L && !(t instanceof G)) return !0;
        })
      );
      return e;
    });
    ke.DEFMETHOD("flatten_object", function (e, n) {
      if (!n.option("properties")) return;
      var t = n.option("unsafe_arrows") && n.option("ecma") >= 6;
      var i = this.expression;
      if (i instanceof He) {
        var r = i.properties;
        for (var o = r.length; --o >= 0; ) {
          var a = r[o];
          if ("" + (a instanceof Le ? a.key.name : a.key) == e) {
            if (
              !g(r, function (e) {
                return (
                  e instanceof Re || (t && e instanceof Le && !e.is_generator)
                );
              })
            )
              break;
            var u = a.value;
            if (
              (u instanceof W || u instanceof X) &&
              !(n.parent() instanceof xe) &&
              u.contains_this()
            )
              break;
            return s(Se, this, {
              expression: s(Ne, i, {
                elements: r.map(function (e) {
                  var n = e.value;
                  if (n instanceof W) n = s(X, n, n);
                  var t = e.key;
                  if (t instanceof w && !(t instanceof rn)) return h(e, [t, n]);
                  return n;
                }),
              }),
              property: s(bn, this, { value: o }),
            });
          }
        }
      }
    });
    e(Be, function (e, n) {
      if ("arguments" == e.property || "caller" == e.property)
        n.warn("Function.protoype.{prop} not supported [{file}:{line},{col}]", {
          prop: e.property,
          file: e.start.file,
          line: e.start.line,
          col: e.start.col,
        });
      var t = e.resolve_defines(n);
      if (t) return t.optimize(n);
      if (En(e, n.parent())) return e;
      if (
        n.option("unsafe_proto") &&
        e.expression instanceof Be &&
        "prototype" == e.expression.property
      ) {
        var i = e.expression.expression;
        if (Xe(i))
          switch (i.name) {
            case "Array":
              e.expression = s(Ne, e.expression, { elements: [] });
              break;
            case "Function":
              e.expression = s(X, e.expression, { argnames: [], body: [] });
              break;
            case "Number":
              e.expression = s(bn, e.expression, { value: 0 });
              break;
            case "Object":
              e.expression = s(He, e.expression, { properties: [] });
              break;
            case "RegExp":
              e.expression = s(yn, e.expression, { value: /t/ });
              break;
            case "String":
              e.expression = s(gn, e.expression, { value: "" });
          }
      }
      var r = e.flatten_object(e.property, n);
      if (r) return r.optimize(n);
      var o = e.evaluate(n);
      if (o !== e) return qn(n, (o = _(o, e).optimize(n)), e);
      return e;
    });
    function Wn(e, n) {
      if (n.in_boolean_context())
        return qn(n, e, h(e, [e, s(Sn, e)]).optimize(n));
      return e;
    }
    e(Ne, Wn);
    e(He, Wn);
    e(yn, Wn);
    e(re, function (e, n) {
      if (e.value && hn(e.value, n)) e.value = null;
      return e;
    });
    e(G, function (e, n) {
      if (!(e.body instanceof w)) fn(e.body, n);
      if (n.option("arrows") && 1 == e.body.length && e.body[0] instanceof re) {
        var t = e.body[0].value;
        e.body = t ? t : [];
      }
      return e;
    });
    e(X, function (e, n) {
      fn(e.body, n);
      if (
        n.option("unsafe_arrows") &&
        n.option("ecma") >= 6 &&
        !e.name &&
        !e.is_generator &&
        !e.uses_arguments &&
        !e.uses_eval
      ) {
        var t = !1;
        e.walk(
          new $n(function (e) {
            if (t) return !0;
            if (e instanceof mn) {
              t = !0;
              return !0;
            }
          })
        );
        if (!t) return s(G, e, e).optimize(n);
      }
      return e;
    });
    e(Ve, function (e, n) {
      return e;
    });
    e(On, function (e, n) {
      if (e.expression && !e.is_star && hn(e.expression, n))
        e.expression = null;
      return e;
    });
    e(Fe, function (e, n) {
      var t = n.option("global_defs");
      if (t && y(t, e.name.name))
        n.warn(
          "global_defs " + e.name.name + " redefined [{file}:{line},{col}]",
          e.start
        );
      return e;
    });
    e(ee, function (e, n) {
      if (!n.option("evaluate") || n.parent() instanceof Q) return e;
      var t = [];
      for (var i = 0; i < e.segments.length; i++) {
        var r = e.segments[i];
        if (r instanceof w) {
          var o = r.evaluate(n);
          if (o !== r && (o + "").length <= r.print_to_string().length + 3) {
            t[t.length - 1].value =
              t[t.length - 1].value + o + e.segments[++i].value;
            continue;
          }
        }
        t.push(r);
      }
      e.segments = t;
      return 1 == t.length ? s(gn, e, t[0]) : e;
    });
    e(Q, function (e, n) {
      return e;
    });
    function Xn(e, n) {
      if (!n.option("computed_props")) return e;
      if (!(e.key instanceof Dn)) return e;
      if (e.key instanceof gn || e.key instanceof bn) {
        if ("constructor" == e.key.value && n.parent() instanceof Ve) return e;
        if (e instanceof Re) e.key = e.key.value;
        else e.key = s(rn, e.key, { name: e.key.value });
      }
      return e;
    }
    e(Ie, Xn);
    e(Le, function (e, n) {
      Xn(e, n);
      if (
        n.option("arrows") &&
        n.parent() instanceof He &&
        !e.value.uses_arguments &&
        !e.value.uses_eval &&
        1 == e.value.body.length &&
        e.value.body[0] instanceof re &&
        e.value.body[0].value &&
        !e.value.contains_this()
      ) {
        var t = s(G, e.value, e.value);
        t.async = e.async;
        t.is_generator = e.is_generator;
        return s(Re, e, {
          key: e.key instanceof rn ? e.key.name : e.key,
          value: t,
          quote: e.quote,
        });
      }
      return e;
    });
    e(Re, function (e, n) {
      Xn(e, n);
      var t = n.option("unsafe_methods");
      if (
        t &&
        n.option("ecma") >= 6 &&
        (!(t instanceof RegExp) || t.test(e.key + ""))
      ) {
        var i = e.key;
        var r = e.value;
        if (
          ((r instanceof G && Array.isArray(r.body) && !r.contains_this()) ||
            r instanceof X) &&
          !r.name
        )
          return s(Le, e, {
            async: r.async,
            is_generator: r.is_generator,
            key: i instanceof w ? i : s(rn, e, { name: i }),
            value: s(W, r, r),
            quote: e.quote,
          });
      }
      return e;
    });
  })();
  !(function () {
    var n = function (e) {
      var n = !0;
      for (var t = 0; t < e.length; t++)
        if (n && e[t] instanceof x && e[t].body instanceof gn)
          e[t] = new k({
            start: e[t].start,
            end: e[t].end,
            value: e[t].body.value,
          });
        else if (n && !(e[t] instanceof x && e[t].body instanceof gn)) n = !1;
      return e;
    };
    var t = {
      Program: function (e) {
        return new V({ start: r(e), end: o(e), body: n(e.body.map(u)) });
      },
      FunctionDeclaration: function (e) {
        return new Z({
          start: r(e),
          end: o(e),
          name: u(e.id),
          argnames: e.params.map(u),
          body: n(u(e.body).body),
        });
      },
      FunctionExpression: function (e) {
        return new X({
          start: r(e),
          end: o(e),
          name: u(e.id),
          argnames: e.params.map(u),
          body: n(u(e.body).body),
        });
      },
      ExpressionStatement: function (e) {
        return new B({ start: r(e), end: o(e), body: u(e.expression) });
      },
      TryStatement: function (e) {
        var n = e.handlers || [e.handler];
        if (n.length > 1 || (e.guardedHandlers && e.guardedHandlers.length))
          throw Error("Multiple catch clauses are not supported.");
        return new he({
          start: r(e),
          end: o(e),
          body: u(e.block).body,
          bcatch: u(n[0]),
          bfinally: e.finalizer ? new me(u(e.finalizer)) : null,
        });
      },
      Property: function (e) {
        var n = e.key;
        var t = {
          start: r(n),
          end: o(e.value),
          key: "Identifier" == n.type ? n.name : n.value,
          value: u(e.value),
        };
        if ("init" == e.kind) return new Re(t);
        t.key = new rn({ name: t.key });
        t.value = new W(t.value);
        if ("get" == e.kind) return new Pe(t);
        if ("set" == e.kind) return new Ue(t);
      },
      ArrayExpression: function (e) {
        return new Ne({
          start: r(e),
          end: o(e),
          elements: e.elements.map(function (e) {
            return null === e ? new xn() : u(e);
          }),
        });
      },
      ObjectExpression: function (e) {
        return new He({
          start: r(e),
          end: o(e),
          properties: e.properties.map(function (e) {
            e.type = "Property";
            return u(e);
          }),
        });
      },
      SequenceExpression: function (e) {
        return new Ce({
          start: r(e),
          end: o(e),
          expressions: e.expressions.map(u),
        });
      },
      MemberExpression: function (e) {
        return new (e.computed ? Se : Be)({
          start: r(e),
          end: o(e),
          property: e.computed ? u(e.property) : e.property.name,
          expression: u(e.object),
        });
      },
      SwitchCase: function (e) {
        return new (e.test ? de : pe)({
          start: r(e),
          end: o(e),
          expression: u(e.test),
          body: e.consequent.map(u),
        });
      },
      VariableDeclaration: function (e) {
        return new ("const" === e.kind ? be : De)({
          start: r(e),
          end: o(e),
          definitions: e.declarations.map(u),
        });
      },
      Literal: function (e) {
        var n = e.value,
          t = { start: r(e), end: o(e) };
        if (null === n) return new An(t);
        switch (typeof n) {
          case "string":
            t.value = n;
            return new gn(t);
          case "number":
            t.value = n;
            return new bn(t);
          case "boolean":
            return new (n ? Sn : Bn)(t);
          default:
            var i = e.regex;
            if (i && i.pattern) t.value = RegExp(i.pattern, i.flags).toString();
            else t.value = e.regex && e.raw ? e.raw : n;
            return new yn(t);
        }
      },
      Identifier: function (e) {
        var n = s[s.length - 2];
        return new (
          "LabeledStatement" == n.type
            ? ln
            : "VariableDeclarator" == n.type && n.id === e
            ? "const" == n.kind
              ? Qe
              : Ze
            : "FunctionExpression" == n.type
            ? n.id === e
              ? on
              : nn
            : "FunctionDeclaration" == n.type
            ? n.id === e
              ? tn
              : nn
            : "CatchClause" == n.type
            ? un
            : "BreakStatement" == n.type || "ContinueStatement" == n.type
            ? vn
            : pn
        )({ start: r(e), end: o(e), name: e.name });
      },
    };
    t.UpdateExpression = t.UnaryExpression = function (e) {
      return new (
        ("prefix" in e ? e.prefix : "UnaryExpression" == e.type ? 1 : 0)
          ? Oe
          : $e
      )({
        start: r(e),
        end: o(e),
        operator: e.operator,
        expression: u(e.argument),
      });
    };
    a("EmptyStatement", $);
    a("BlockStatement", O, "body@body");
    a(
      "IfStatement",
      fe,
      "test>condition, consequent>body, alternate>alternative"
    );
    a("LabeledStatement", q, "label>label, body>body");
    a("BreakStatement", se, "label>label");
    a("ContinueStatement", ue, "label>label");
    a("WithStatement", P, "object>expression, body>body");
    a("SwitchStatement", ce, "discriminant>expression, cases@body");
    a("ReturnStatement", re, "argument>value");
    a("ThrowStatement", oe, "argument>value");
    a("WhileStatement", H, "test>condition, body>body");
    a("DoWhileStatement", N, "test>condition, body>body");
    a("ForStatement", I, "init>init, test>condition, update>step, body>body");
    a("ForInStatement", R, "left>init, right>object, body>body");
    a("DebuggerStatement", C);
    a("VariableDeclarator", Fe, "id>name, init>value");
    a("CatchClause", ve, "param>argname, body%body");
    a("ThisExpression", mn);
    a("BinaryExpression", Me, "operator=operator, left>left, right>right");
    a("LogicalExpression", Me, "operator=operator, left>left, right>right");
    a("AssignmentExpression", ze, "operator=operator, left>left, right>right");
    a(
      "ConditionalExpression",
      qe,
      "test>condition, consequent>consequent, alternate>alternative"
    );
    a("NewExpression", xe, "callee>expression, arguments@args");
    a("CallExpression", we, "callee>expression, arguments@args");
    f(V, function (e) {
      return p("Program", e);
    });
    f(Z, function (e) {
      return {
        type: "FunctionDeclaration",
        id: c(e.name),
        params: e.argnames.map(c),
        body: p("BlockStatement", e),
      };
    });
    f(X, function (e) {
      return {
        type: "FunctionExpression",
        id: c(e.name),
        params: e.argnames.map(c),
        body: p("BlockStatement", e),
      };
    });
    f(k, function (e) {
      return {
        type: "ExpressionStatement",
        expression: { type: "Literal", value: e.value },
      };
    });
    f(B, function (e) {
      return { type: "ExpressionStatement", expression: c(e.body) };
    });
    f(le, function (e) {
      return {
        type: "SwitchCase",
        test: c(e.expression),
        consequent: e.body.map(c),
      };
    });
    f(he, function (e) {
      return {
        type: "TryStatement",
        block: l(e),
        handler: c(e.bcatch),
        guardedHandlers: [],
        finalizer: c(e.bfinally),
      };
    });
    f(ve, function (e) {
      return {
        type: "CatchClause",
        param: c(e.argname),
        guard: null,
        body: l(e),
      };
    });
    f(_e, function (e) {
      return {
        type: "VariableDeclaration",
        kind: e instanceof be ? "const" : "var",
        declarations: e.definitions.map(c),
      };
    });
    f(Ce, function (e) {
      return { type: "SequenceExpression", expressions: e.expressions.map(c) };
    });
    f(ke, function (e) {
      var n = e instanceof Se;
      return {
        type: "MemberExpression",
        object: c(e.expression),
        computed: n,
        property: n ? c(e.property) : { type: "Identifier", name: e.property },
      };
    });
    f(Te, function (e) {
      return {
        type:
          "++" == e.operator || "--" == e.operator
            ? "UpdateExpression"
            : "UnaryExpression",
        operator: e.operator,
        prefix: e instanceof Oe,
        argument: c(e.expression),
      };
    });
    f(Me, function (e) {
      return {
        type:
          "&&" == e.operator || "||" == e.operator
            ? "LogicalExpression"
            : "BinaryExpression",
        left: c(e.left),
        operator: e.operator,
        right: c(e.right),
      };
    });
    f(Ne, function (e) {
      return { type: "ArrayExpression", elements: e.elements.map(c) };
    });
    f(He, function (e) {
      return { type: "ObjectExpression", properties: e.properties.map(c) };
    });
    f(Ie, function (e) {
      var n = {
        type: "Literal",
        value: e.key instanceof rn ? e.key.name : e.key,
      };
      var t;
      if (e instanceof Re) t = "init";
      else if (e instanceof Pe) t = "get";
      else if (e instanceof Ue) t = "set";
      return { type: "Property", kind: t, key: n, value: c(e.value) };
    });
    f(We, function (e) {
      var n = e.definition();
      return {
        type: "Identifier",
        name: n ? n.mangled_name || n.name : e.name,
      };
    });
    f(yn, function (e) {
      var n = e.value;
      return {
        type: "Literal",
        value: n,
        raw: n.toString(),
        regex: { pattern: n.source, flags: n.toString().match(/[gimuy]*$/)[0] },
      };
    });
    f(Dn, function (e) {
      var n = e.value;
      if ("number" == typeof n && (n < 0 || (0 === n && 1 / n < 0)))
        return {
          type: "UnaryExpression",
          operator: "-",
          prefix: !0,
          argument: { type: "Literal", value: -n, raw: e.start.raw },
        };
      return { type: "Literal", value: n, raw: e.start.raw };
    });
    f(En, function (e) {
      return { type: "Identifier", name: e.value + "" };
    });
    kn.DEFMETHOD("to_mozilla_ast", Dn.prototype.to_mozilla_ast);
    An.DEFMETHOD("to_mozilla_ast", Dn.prototype.to_mozilla_ast);
    xn.DEFMETHOD("to_mozilla_ast", function () {
      return null;
    });
    T.DEFMETHOD("to_mozilla_ast", O.prototype.to_mozilla_ast);
    J.DEFMETHOD("to_mozilla_ast", X.prototype.to_mozilla_ast);
    function i(e) {
      if ("Literal" == e.type) return null != e.raw ? e.raw : e.value + "";
    }
    function r(e) {
      var n = e.loc,
        t = n && n.start;
      var r = e.range;
      return new F({
        file: n && n.source,
        line: t && t.line,
        col: t && t.column,
        pos: r ? r[0] : e.start,
        endline: t && t.line,
        endcol: t && t.column,
        endpos: r ? r[0] : e.start,
        raw: i(e),
      });
    }
    function o(e) {
      var n = e.loc,
        t = n && n.end;
      var r = e.range;
      return new F({
        file: n && n.source,
        line: t && t.line,
        col: t && t.column,
        pos: r ? r[1] : e.end,
        endline: t && t.line,
        endcol: t && t.column,
        endpos: r ? r[1] : e.end,
        raw: i(e),
      });
    }
    function a(n, i, a) {
      var s = "function From_Moz_" + n + "(M){\n";
      s +=
        "return new U2." +
        i.name +
        "({\nstart: my_start_token(M),\nend: my_end_token(M)";
      var d = "function To_Moz_" + n + "(M){\n";
      d += "return {\ntype: " + JSON.stringify(n);
      if (a)
        a.split(/\s*,\s*/).forEach(function (e) {
          var n = /([a-z0-9$_]+)(=|@|>|%)([a-z0-9$_]+)/i.exec(e);
          if (!n) throw Error("Can't understand property map: " + e);
          var t = n[1],
            i = n[2],
            r = n[3];
          s += ",\n" + r + ": ";
          d += ",\n" + t + ": ";
          switch (i) {
            case "@":
              s += "M." + t + ".map(from_moz)";
              d += "M." + r + ".map(to_moz)";
              break;
            case ">":
              s += "from_moz(M." + t + ")";
              d += "to_moz(M." + r + ")";
              break;
            case "=":
              s += "M." + t;
              d += "M." + r;
              break;
            case "%":
              s += "from_moz(M." + t + ").body";
              d += "to_moz_block(M)";
              break;
            default:
              throw Error("Can't understand operator in propmap: " + e);
          }
        });
      d += "\n}\n}";
      s = Function(
        "U2",
        "my_start_token",
        "my_end_token",
        "from_moz",
        "return(" + (s += "\n})\n}") + ")"
      )(e, r, o, u);
      d = Function(
        "to_moz",
        "to_moz_block",
        "to_moz_scope",
        "return(" + d + ")"
      )(c, l, p);
      t[n] = s;
      f(i, d);
    }
    var s = null;
    function u(e) {
      s.push(e);
      var n = null != e ? t[e.type](e) : null;
      s.pop();
      return n;
    }
    w.from_mozilla_ast = function (e) {
      var n = s;
      s = [];
      var t = u(e);
      s = n;
      return t;
    };
    function f(e, n) {
      e.DEFMETHOD("to_mozilla_ast", function () {
        return (function (e, n, t) {
          var i = e.start;
          var r = e.end;
          if (null != i.pos && null != r.endpos) n.range = [i.pos, r.endpos];
          if (i.line) {
            n.loc = {
              start: { line: i.line, column: i.col },
              end: r.endline ? { line: r.endline, column: r.endcol } : null,
            };
            if (i.file) n.loc.source = i.file;
          }
          return n;
        })(this, n(this));
      });
    }
    function c(e) {
      return null != e ? e.to_mozilla_ast() : null;
    }
    function l(e) {
      return { type: "BlockStatement", body: e.body.map(c) };
    }
    function p(e, n) {
      var t = n.body.map(c);
      if (n.body[0] instanceof B && n.body[0].body instanceof gn)
        t.unshift(c(new $(n.body[0])));
      return { type: e, body: t };
    }
  })();
  function Ft(e, n) {
    e.walk(
      new $n(function (e) {
        if (e instanceof Ce) Ft(e.tail_node(), n);
        else if (e instanceof gn) n(e.value);
        else if (e instanceof qe) {
          Ft(e.consequent, n);
          Ft(e.alternative, n);
        }
        return !0;
      })
    );
  }
  var wt =
    "undefined" == typeof atob
      ? function (e) {
          return new Buffer(e, "base64").toString();
        }
      : atob;
  var xt =
    "undefined" == typeof btoa
      ? function (e) {
          return new Buffer(e).toString("base64");
        }
      : btoa;
  function Ct(e) {
    var n =
      /\n\/\/# sourceMappingURL=data:application\/json(;.*?)?;base64,(.*)/.exec(
        e
      );
    if (!n) {
      w.warn("inline source map not found");
      return null;
    }
    return wt(n[2]);
  }
  function kt(e, n, t) {
    if (n[e])
      t.forEach(function (t) {
        if (n[t]) {
          if ("object" != typeof n[t]) n[t] = {};
          if (!(e in n[t])) n[t][e] = n[e];
        }
      });
  }
  function Bt(e) {
    if (!e) return;
    if (!("props" in e)) e.props = new b();
    else if (!(e.props instanceof b)) e.props = b.fromObject(e.props);
  }
  function St(e) {
    return { props: e.props.toObject() };
  }
  e.Dictionary = b;
  e.TreeWalker = $n;
  e.TreeTransformer = mt;
  e.minify = function (e, n) {
    var t = w.warn_function;
    try {
      var i = (n = a(
        n,
        {
          compress: {},
          ecma: void 0,
          ie8: !1,
          keep_classnames: void 0,
          keep_fnames: !1,
          mangle: {},
          nameCache: null,
          output: {},
          parse: {},
          rename: void 0,
          safari10: !1,
          sourceMap: !1,
          timings: !1,
          toplevel: !1,
          warnings: !1,
          wrap: !1,
        },
        !0
      )).timings && { start: Date.now() };
      if (void 0 === n.keep_classnames) n.keep_classnames = n.keep_fnames;
      if (void 0 === n.rename) n.rename = n.compress && n.mangle;
      kt("ecma", n, ["parse", "compress", "output"]);
      kt("ie8", n, ["compress", "mangle", "output"]);
      kt("keep_classnames", n, ["compress", "mangle"]);
      kt("keep_fnames", n, ["compress", "mangle"]);
      kt("safari10", n, ["mangle", "output"]);
      kt("toplevel", n, ["compress", "mangle"]);
      kt("warnings", n, ["compress"]);
      var r;
      if (n.mangle) {
        n.mangle = a(
          n.mangle,
          {
            cache: n.nameCache && (n.nameCache.vars || {}),
            eval: !1,
            ie8: !1,
            keep_classnames: !1,
            keep_fnames: !1,
            properties: !1,
            reserved: [],
            safari10: !1,
            toplevel: !1,
          },
          !0
        );
        if (n.mangle.properties) {
          if ("object" != typeof n.mangle.properties) n.mangle.properties = {};
          if (n.mangle.properties.keep_quoted) {
            r = n.mangle.properties.reserved;
            if (!Array.isArray(r)) r = [];
            n.mangle.properties.reserved = r;
          }
          if (n.nameCache && !("cache" in n.mangle.properties))
            n.mangle.properties.cache = n.nameCache.props || {};
        }
        Bt(n.mangle.cache);
        Bt(n.mangle.properties.cache);
      }
      if (n.sourceMap)
        n.sourceMap = a(
          n.sourceMap,
          {
            content: null,
            filename: null,
            includeSources: !1,
            root: null,
            url: null,
          },
          !0
        );
      var o = [];
      if (n.warnings && !w.warn_function)
        w.warn_function = function (e) {
          o.push(e);
        };
      if (i) i.parse = Date.now();
      var s;
      if (e instanceof V) s = e;
      else {
        if ("string" == typeof e) e = [e];
        n.parse = n.parse || {};
        n.parse.toplevel = null;
        for (var u in e)
          if (y(e, u)) {
            n.parse.filename = u;
            n.parse.toplevel = vt(e[u], n.parse);
            if (n.sourceMap && "inline" == n.sourceMap.content) {
              if (Object.keys(e).length > 1)
                throw Error("inline source map only works with singular input");
              n.sourceMap.content = Ct(e[u]);
            }
          }
        s = n.parse.toplevel;
      }
      if (r)
        !(function (e, n) {
          function t(e) {
            h(n, e);
          }
          s.walk(
            new $n(function (e) {
              if (e instanceof Re && e.quote) t(e.key);
              else if (e instanceof Ie && e.quote) t(e.key.name);
              else if (e instanceof Se) Ft(e.property, t);
            })
          );
        })(0, r);
      if (n.wrap) s = s.wrap_commonjs(n.wrap);
      if (i) i.rename = Date.now();
      if (0) {
        s.figure_out_scope(n.mangle);
        s.expand_names(n.mangle);
      }
      if (i) i.compress = Date.now();
      if (n.compress) s = new At(n.compress).compress(s);
      if (i) i.scope = Date.now();
      if (n.mangle) s.figure_out_scope(n.mangle);
      if (i) i.mangle = Date.now();
      if (n.mangle) {
        gt.reset();
        s.compute_char_frequency(n.mangle);
        s.mangle_names(n.mangle);
      }
      if (i) i.properties = Date.now();
      if (n.mangle && n.mangle.properties)
        s = (function (e, n) {
          var t = (n = a(
            n,
            {
              builtins: !1,
              cache: null,
              debug: !1,
              keep_quoted: !1,
              only_cache: !1,
              regex: null,
              reserved: null,
            },
            !0
          )).reserved;
          if (!Array.isArray(t)) t = [];
          if (!n.builtins)
            !(function (e) {
              var n = {};
              var t = "object" == typeof global ? global : self;
              [
                "Symbol",
                "Map",
                "Promise",
                "Proxy",
                "Reflect",
                "Set",
                "WeakMap",
                "WeakSet",
              ].forEach(function (e) {
                n[e] = t[e] || Function();
              });
              [
                "null",
                "true",
                "false",
                "Infinity",
                "-Infinity",
                "undefined",
              ].forEach(i);
              [
                Object,
                Array,
                Function,
                Number,
                String,
                Boolean,
                Error,
                Math,
                Date,
                RegExp,
                n.Symbol,
                ArrayBuffer,
                DataView,
                decodeURI,
                decodeURIComponent,
                encodeURI,
                encodeURIComponent,
                eval,
                EvalError,
                Float32Array,
                Float64Array,
                Int8Array,
                Int16Array,
                Int32Array,
                isFinite,
                isNaN,
                JSON,
                n.Map,
                parseFloat,
                parseInt,
                n.Promise,
                n.Proxy,
                RangeError,
                ReferenceError,
                n.Reflect,
                n.Set,
                SyntaxError,
                TypeError,
                Uint8Array,
                Uint8ClampedArray,
                Uint16Array,
                Uint32Array,
                URIError,
                n.WeakMap,
                n.WeakSet,
              ].forEach(function (e) {
                Object.getOwnPropertyNames(e).map(i);
                if (e.prototype) Object.getOwnPropertyNames(e.prototype).map(i);
              });
              function i(n) {
                h(e, n);
              }
            })(t);
          var i = -1;
          var r;
          if (n.cache)
            (r = n.cache.props).each(function (e) {
              h(t, e);
            });
          else r = new b();
          var o = n.regex;
          var s = !1 !== n.debug;
          var u;
          if (s) u = !0 === n.debug ? "" : n.debug;
          var f = [];
          var c = [];
          e.walk(
            new $n(function (e) {
              if (e instanceof Re) d(e.key);
              else if (e instanceof Ie) d(e.key.name);
              else if (e instanceof Be) d(e.property);
              else if (e instanceof Se) Ft(e.property, d);
            })
          );
          return e.transform(
            new mt(function (e) {
              if (e instanceof Re) e.key = v(e.key);
              else if (e instanceof Ie) e.key.name = v(e.key.name);
              else if (e instanceof Be) e.property = v(e.property);
              else if (!n.keep_quoted && e instanceof Se)
                e.property = (function e(n) {
                  return n.transform(
                    new mt(function (n) {
                      if (n instanceof Ce) {
                        var t = n.expressions.length - 1;
                        n.expressions[t] = e(n.expressions[t]);
                      } else if (n instanceof gn) n.value = v(n.value);
                      else if (n instanceof qe) {
                        n.consequent = e(n.consequent);
                        n.alternative = e(n.alternative);
                      }
                      return n;
                    })
                  );
                })(e.property);
            })
          );
          function l(e) {
            if (c.indexOf(e) >= 0) return !1;
            if (t.indexOf(e) >= 0) return !1;
            if (n.only_cache) return r.has(e);
            if (/^-?[0-9]+(\.[0-9]+)?(e[+-][0-9]+)?$/.test(e)) return !1;
            return !0;
          }
          function p(e) {
            if (o && !o.test(e)) return !1;
            if (t.indexOf(e) >= 0) return !1;
            return r.has(e) || f.indexOf(e) >= 0;
          }
          function d(e) {
            if (l(e)) h(f, e);
            if (!p(e)) h(c, e);
          }
          function v(e) {
            if (!p(e)) return e;
            var n = r.get(e);
            if (!n) {
              if (s) {
                var t = "_$" + e + "$" + u + "_";
                if (l(t)) n = t;
              }
              if (!n)
                do {
                  n = gt(++i);
                } while (!l(n));
              r.set(e, n);
            }
            return n;
          }
        })(s, n.mangle.properties);
      if (i) i.output = Date.now();
      var f = {};
      if (n.output.ast) f.ast = s;
      if (!y(n.output, "code") || n.output.code) {
        if (n.sourceMap) {
          if ("string" == typeof n.sourceMap.content)
            n.sourceMap.content = JSON.parse(n.sourceMap.content);
          n.output.source_map = (function (e) {
            e = a(e, {
              file: null,
              root: null,
              orig: null,
              orig_line_diff: 0,
              dest_line_diff: 0,
            });
            var n = new MOZ_SourceMap.SourceMapGenerator({
              file: e.file,
              sourceRoot: e.root,
            });
            var t = e.orig && new MOZ_SourceMap.SourceMapConsumer(e.orig);
            if (t && Array.isArray(e.orig.sources))
              t._sources.toArray().forEach(function (e) {
                var i = t.sourceContentFor(e, !0);
                if (i) n.setSourceContent(e, i);
              });
            return {
              add: function (i, r, o, a, s, u) {
                if (t) {
                  var f = t.originalPositionFor({ line: a, column: s });
                  if (null === f.source) return;
                  i = f.source;
                  a = f.line;
                  s = f.column;
                  u = f.name || u;
                }
                n.addMapping({
                  generated: { line: r + e.dest_line_diff, column: o },
                  original: { line: a + e.orig_line_diff, column: s },
                  source: i,
                  name: u,
                });
              },
              get: function () {
                return n;
              },
              toString: function () {
                return JSON.stringify(n.toJSON());
              },
            };
          })({
            file: n.sourceMap.filename,
            orig: n.sourceMap.content,
            root: n.sourceMap.root,
          });
          if (n.sourceMap.includeSources)
            if (e instanceof V)
              throw Error("original source content unavailable");
            else
              for (var u in e)
                if (y(e, u))
                  n.output.source_map.get().setSourceContent(u, e[u]);
        }
        delete n.output.ast;
        delete n.output.code;
        var c = Et(n.output);
        s.print(c);
        f.code = c.get();
        if (n.sourceMap) {
          f.map = n.output.source_map.toString();
          if ("inline" == n.sourceMap.url)
            f.code +=
              "\n//# sourceMappingURL=data:application/json;charset=utf-8;base64," +
              xt(f.map);
          else if (n.sourceMap.url)
            f.code += "\n//# sourceMappingURL=" + n.sourceMap.url;
        }
      }
      if (n.nameCache && n.mangle) {
        if (n.mangle.cache) n.nameCache.vars = St(n.mangle.cache);
        if (n.mangle.properties && n.mangle.properties.cache)
          n.nameCache.props = St(n.mangle.properties.cache);
      }
      if (i) {
        i.end = Date.now();
        f.timings = {
          parse: 0.001 * (i.rename - i.parse),
          rename: 0.001 * (i.compress - i.rename),
          compress: 0.001 * (i.scope - i.compress),
          scope: 0.001 * (i.mangle - i.scope),
          mangle: 0.001 * (i.properties - i.mangle),
          properties: 0.001 * (i.output - i.properties),
          output: 0.001 * (i.end - i.output),
          total: 0.001 * (i.end - i.start),
        };
      }
      if (o.length) f.warnings = o;
      return f;
    } catch (e) {
      return { error: e };
    } finally {
      w.warn_function = t;
    }
  };
  e.parse = vt;
  e._push_uniq = h;
}
_uglify_es("undefined" == typeof UglifyJS ? (UglifyJS = {}) : UglifyJS);

// function compress_js(jscode){
//     // 关掉所有配置则会使用默认最大压缩方式处理
//     var ret = UglifyJS.minify(jscode, {
//         // toplevel: true,
//         // mangle: { reserved: ['window'] }
//         ie8: true,
//         compress: {
//             drop_debugger: false,
//             hoist_vars: false,
//             join_vars: false,
//             sequences: false,
//             inline: false,
//             loops: false,
//             reduce_funcs: false,
//             reduce_vars: false,
//             collapse_vars: false,
//             comparisons: false,
//             computed_props: false,
//             conditionals: true,
//             evaluate: true,
//             expression: false,
//         },
//         output: {
//             bracketize: true,
//             beautify: true,
//         },
//     })
//     return ret.code?ret.code:ret.error
// }

// var jscode = compress_js('console.log(123+333)')
// console.log(jscode)
