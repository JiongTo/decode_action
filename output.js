//Sun Sep 29 2024 13:32:30 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
//Sun Sep 29 2024 13:15:36 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
(() => {
  function b(ac) {
    b = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (ae) {
      return typeof ae;
    } : function (ae) {
      return ae && "function" == typeof Symbol && ae.constructor === Symbol && ae !== Symbol.prototype ? "symbol" : typeof ae;
    };
    return b(ac);
  }
  function c(ac, ad) {
    var af = "undefined" != typeof Symbol && ac[Symbol.iterator] || ac["@@iterator"];
    if (!af) {
      if (Array.isArray(ac) || (af = d(ac)) || ad && ac && "number" == typeof ac.length) {
        af && (ac = af);
        var ag = 0,
          ah = function () {};
        return {
          s: ah,
          n: function () {
            var am = {
              done: true
            };
            return ag >= ac.length ? am : {
              done: false,
              value: ac[ag++]
            };
          },
          e: function (am) {
            throw am;
          },
          f: ah
        };
      }
      throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    var ai,
      aj = true,
      ak = false;
    return {
      s: function () {
        af = af.call(ac);
      },
      n: function () {
        var ap = af.next();
        aj = ap.done;
        return ap;
      },
      e: function (ao) {
        ak = true;
        ai = ao;
      },
      f: function () {
        try {
          aj || null == af.return || af.return();
        } finally {
          if (ak) {
            throw ai;
          }
        }
      }
    };
  }
  function d(ac, ad) {
    if (ac) {
      if ("string" == typeof ac) {
        return f(ac, ad);
      }
      var ae = {}.toString.call(ac).slice(8, -1);
      "Object" === ae && ac.constructor && (ae = ac.constructor.name);
      return "Map" === ae || "Set" === ae ? Array.from(ac) : "Arguments" === ae || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(ae) ? f(ac, ad) : undefined;
    }
  }
  function f(ac, ad) {
    (null == ad || ad > ac.length) && (ad = ac.length);
    for (var ag = 0, ah = Array(ad); ag < ad; ag++) {
      ah[ag] = ac[ag];
    }
    return ah;
  }
  function g() {
    'use strict';

    g = function () {
      return ae;
    };
    var ad,
      ae = {},
      af = Object.prototype,
      ag = af.hasOwnProperty,
      ah = Object.defineProperty || function (aJ, aK, aL) {
        aJ[aK] = aL.value;
      },
      ai = "function" == typeof Symbol ? Symbol : {},
      aj = ai.iterator || "@@iterator",
      ak = ai.asyncIterator || "@@asyncIterator",
      al = ai.toStringTag || "@@toStringTag";
    function am(aJ, aK, aL) {
      var aM = {
        value: aL,
        enumerable: true,
        configurable: true,
        writable: true
      };
      Object.defineProperty(aJ, aK, aM);
      return aJ[aK];
    }
    try {
      am({}, "");
    } catch (aK) {
      am = function (aL, aM, aN) {
        return aL[aM] = aN;
      };
    }
    function an(aM, aN, aO, aP) {
      var aQ = aN && aN.prototype instanceof au ? aN : au,
        aR = Object.create(aQ.prototype),
        aS = new aH(aP || []);
      ah(aR, "_invoke", {
        value: aD(aM, aO, aS)
      });
      return aR;
    }
    function ao(aM, aN, aO) {
      try {
        return {
          type: "normal",
          arg: aM.call(aN, aO)
        };
      } catch (aR) {
        var aP = {
          type: "throw",
          arg: aR
        };
        return aP;
      }
    }
    ae.wrap = an;
    var ap = "suspendedStart",
      aq = "suspendedYield",
      ar = "executing",
      as = "completed",
      at = {};
    function au() {}
    function av() {}
    function aw() {}
    var ax = {};
    am(ax, aj, function () {
      return this;
    });
    var ay = Object.getPrototypeOf,
      az = ay && ay(ay(aI([])));
    az && az !== af && ag.call(az, aj) && (ax = az);
    aw.prototype = au.prototype = Object.create(ax);
    var aA = aw.prototype;
    function aB(aM) {
      ["next", "throw", "return"].forEach(function (aO) {
        am(aM, aO, function (aS) {
          return this._invoke(aO, aS);
        });
      });
    }
    function aC(aM, aN) {
      function aQ(aR, aS, aT, aU) {
        var aW = ao(aM[aR], aM, aS);
        if ("throw" !== aW.type) {
          var aX = aW.arg,
            aY = aX.value;
          return aY && "object" == b(aY) && ag.call(aY, "__await") ? aN.resolve(aY.__await).then(function (b0) {
            aQ("next", b0, aT, aU);
          }, function (b0) {
            aQ("throw", b0, aT, aU);
          }) : aN.resolve(aY).then(function (b0) {
            aX.value = b0;
            aT(aX);
          }, function (b0) {
            return aQ("throw", b0, aT, aU);
          });
        }
        aU(aW.arg);
      }
      var aP;
      ah(this, "_invoke", {
        value: function (aR, aS) {
          function aU() {
            return new aN(function (aW, aX) {
              aQ(aR, aS, aW, aX);
            });
          }
          return aP = aP ? aP.then(aU, aU) : aU();
        }
      });
    }
    function aD(aM, aN, aO) {
      var aQ = ap;
      return function (aS, aT) {
        if (aQ === ar) {
          throw Error("Generator is already running");
        }
        if (aQ === as) {
          if ("throw" === aS) {
            throw aT;
          }
          var aV = {};
          aV.value = ad;
          aV.done = true;
          return aV;
        }
        for (aO.method = aS, aO.arg = aT;;) {
          var aW = aO.delegate;
          if (aW) {
            var aX = aE(aW, aO);
            if (aX) {
              if (aX === at) {
                continue;
              }
              return aX;
            }
          }
          if ("next" === aO.method) {
            aO.sent = aO._sent = aO.arg;
          } else {
            if ("throw" === aO.method) {
              if (aQ === ap) {
                throw aQ = as, aO.arg;
              }
              aO.dispatchException(aO.arg);
            } else {
              "return" === aO.method && aO.abrupt("return", aO.arg);
            }
          }
          aQ = ar;
          var aY = ao(aM, aN, aO);
          if ("normal" === aY.type) {
            if (aQ = aO.done ? as : aq, aY.arg === at) {
              continue;
            }
            var aZ = {};
            aZ.value = aY.arg;
            aZ.done = aO.done;
            return aZ;
          }
          "throw" === aY.type && (aQ = as, aO.method = "throw", aO.arg = aY.arg);
        }
      };
    }
    function aE(aM, aN) {
      var aU = aN.method,
        aV = aM.iterator[aU];
      if (aV === ad) {
        aN.delegate = null;
        "throw" === aU && aM.iterator.return && (aN.method = "return", aN.arg = ad, aE(aM, aN), "throw" === aN.method) || "return" !== aU && (aN.method = "throw", aN.arg = new TypeError("The iterator does not provide a '" + aU + "' method"));
        return at;
      }
      var aT = ao(aV, aM.iterator, aN.arg);
      if ("throw" === aT.type) {
        aN.method = "throw";
        aN.arg = aT.arg;
        aN.delegate = null;
        return at;
      }
      var aS = aT.arg;
      return aS ? aS.done ? (aN[aM.resultName] = aS.value, aN.next = aM.nextLoc, "return" !== aN.method && (aN.method = "next", aN.arg = ad), aN.delegate = null, at) : aS : (aN.method = "throw", aN.arg = new TypeError("iterator result is not an object"), aN.delegate = null, at);
    }
    function aF(aM) {
      var aO = {
        tryLoc: aM[0]
      };
      var aP = aO;
      1 in aM && (aP.catchLoc = aM[1]);
      2 in aM && (aP.finallyLoc = aM[2], aP.afterLoc = aM[3]);
      this.tryEntries.push(aP);
    }
    function aG(aM) {
      var aN = aM.completion || {};
      aN.type = "normal";
      delete aN.arg;
      aM.completion = aN;
    }
    function aH(aM) {
      var aN = {
        tryLoc: "root"
      };
      this.tryEntries = [aN];
      aM.forEach(aF, this);
      this.reset(true);
    }
    function aI(aM) {
      if (aM || "" === aM) {
        var aO = aM[aj];
        if (aO) {
          return aO.call(aM);
        }
        if ("function" == typeof aM.next) {
          return aM;
        }
        if (!isNaN(aM.length)) {
          var aP = -1,
            aQ = function aT() {
              for (; ++aP < aM.length;) {
                if (ag.call(aM, aP)) {
                  aT.value = aM[aP];
                  aT.done = false;
                  return aT;
                }
              }
              aT.value = ad;
              aT.done = true;
              return aT;
            };
          return aQ.next = aQ;
        }
      }
      throw new TypeError(b(aM) + " is not iterable");
    }
    av.prototype = aw;
    ah(aA, "constructor", {
      value: aw,
      configurable: true
    });
    ah(aw, "constructor", {
      value: av,
      configurable: true
    });
    av.displayName = am(aw, al, "GeneratorFunction");
    ae.isGeneratorFunction = function (aM) {
      var aN = "function" == typeof aM && aM.constructor;
      return !!aN && (aN === av || "GeneratorFunction" === (aN.displayName || aN.name));
    };
    ae.mark = function (aM) {
      Object.setPrototypeOf ? Object.setPrototypeOf(aM, aw) : (aM.__proto__ = aw, am(aM, al, "GeneratorFunction"));
      aM.prototype = Object.create(aA);
      return aM;
    };
    ae.awrap = function (aM) {
      var aN = {
        __await: aM
      };
      return aN;
    };
    aB(aC.prototype);
    am(aC.prototype, ak, function () {
      return this;
    });
    ae.AsyncIterator = aC;
    ae.async = function (aM, aN, aO, aP, aQ) {
      undefined === aQ && (aQ = Promise);
      var aS = new aC(an(aM, aN, aO, aP), aQ);
      return ae.isGeneratorFunction(aN) ? aS : aS.next().then(function (aU) {
        return aU.done ? aU.value : aS.next();
      });
    };
    aB(aA);
    am(aA, al, "Generator");
    am(aA, aj, function () {
      return this;
    });
    am(aA, "toString", function () {
      return "[object Generator]";
    });
    ae.keys = function (aM) {
      var aO = Object(aM),
        aP = [];
      for (var aQ in aO) aP.push(aQ);
      aP.reverse();
      return function aR() {
        for (; aP.length;) {
          var aT = aP.pop();
          if (aT in aO) {
            aR.value = aT;
            aR.done = false;
            return aR;
          }
        }
        aR.done = true;
        return aR;
      };
    };
    ae.values = aI;
    aH.prototype = {
      constructor: aH,
      reset: function (aM) {
        if (this.prev = 0, this.next = 0, this.sent = this._sent = ad, this.done = false, this.delegate = null, this.method = "next", this.arg = ad, this.tryEntries.forEach(aG), !aM) {
          for (var aN in this) "t" === aN.charAt(0) && ag.call(this, aN) && !isNaN(+aN.slice(1)) && (this[aN] = ad);
        }
      },
      stop: function () {
        this.done = true;
        var aM = this.tryEntries[0].completion;
        if ("throw" === aM.type) {
          throw aM.arg;
        }
        return this.rval;
      },
      dispatchException: function (aM) {
        if (this.done) {
          throw aM;
        }
        var aO = this;
        function aU(aV, aW) {
          aR.type = "throw";
          aR.arg = aM;
          aO.next = aV;
          aW && (aO.method = "next", aO.arg = ad);
          return !!aW;
        }
        for (var aP = this.tryEntries.length - 1; aP >= 0; --aP) {
          var aQ = this.tryEntries[aP],
            aR = aQ.completion;
          if ("root" === aQ.tryLoc) {
            return aU("end");
          }
          if (aQ.tryLoc <= this.prev) {
            var aS = ag.call(aQ, "catchLoc"),
              aT = ag.call(aQ, "finallyLoc");
            if (aS && aT) {
              if (this.prev < aQ.catchLoc) {
                return aU(aQ.catchLoc, true);
              }
              if (this.prev < aQ.finallyLoc) {
                return aU(aQ.finallyLoc);
              }
            } else {
              if (aS) {
                if (this.prev < aQ.catchLoc) {
                  return aU(aQ.catchLoc, true);
                }
              } else {
                if (!aT) {
                  throw Error("try statement without catch or finally");
                }
                if (this.prev < aQ.finallyLoc) {
                  return aU(aQ.finallyLoc);
                }
              }
            }
          }
        }
      },
      abrupt: function (aM, aN) {
        for (var aP = this.tryEntries.length - 1; aP >= 0; --aP) {
          var aQ = this.tryEntries[aP];
          if (aQ.tryLoc <= this.prev && ag.call(aQ, "finallyLoc") && this.prev < aQ.finallyLoc) {
            var aR = aQ;
            break;
          }
        }
        aR && ("break" === aM || "continue" === aM) && aR.tryLoc <= aN && aN <= aR.finallyLoc && (aR = null);
        var aS = aR ? aR.completion : {};
        aS.type = aM;
        aS.arg = aN;
        return aR ? (this.method = "next", this.next = aR.finallyLoc, at) : this.complete(aS);
      },
      complete: function (aM, aN) {
        if ("throw" === aM.type) {
          throw aM.arg;
        }
        "break" === aM.type || "continue" === aM.type ? this.next = aM.arg : "return" === aM.type ? (this.rval = this.arg = aM.arg, this.method = "return", this.next = "end") : "normal" === aM.type && aN && (this.next = aN);
        return at;
      },
      finish: function (aM) {
        for (var aN = this.tryEntries.length - 1; aN >= 0; --aN) {
          var aO = this.tryEntries[aN];
          if (aO.finallyLoc === aM) {
            this.complete(aO.completion, aO.afterLoc);
            aG(aO);
            return at;
          }
        }
      },
      catch: function (aM) {
        for (var aO = this.tryEntries.length - 1; aO >= 0; --aO) {
          var aP = this.tryEntries[aO];
          if (aP.tryLoc === aM) {
            var aQ = aP.completion;
            if ("throw" === aQ.type) {
              var aR = aQ.arg;
              aG(aP);
            }
            return aR;
          }
        }
        throw Error("illegal catch attempt");
      },
      delegateYield: function (aM, aN, aO) {
        this.delegate = {
          iterator: aI(aM),
          resultName: aN,
          nextLoc: aO
        };
        "next" === this.method && (this.arg = ad);
        return at;
      }
    };
    return ae;
  }
  function h(ac, ad, ae, af, ag, ah, ai) {
    try {
      var ak = ac[ah](ai),
        al = ak.value;
    } catch (an) {
      return void ae(an);
    }
    ak.done ? ad(al) : Promise.resolve(al).then(af, ag);
  }
  function i(ac) {
    return function () {
      var af = this,
        ag = arguments;
      return new Promise(function (ah, ai) {
        var ak = ac.apply(af, ag);
        function al(an) {
          h(ak, ah, ai, al, am, "next", an);
        }
        function am(an) {
          h(ak, ah, ai, al, am, "throw", an);
        }
        al(undefined);
      });
    };
  }
  var j = ($.isNode() ? process.env.WangChao : $.getdata("WangChao")) || "",
    k = undefined,
    l = "",
    m = "64",
    n = "",
    o = "",
    p = "",
    q = "",
    r = "",
    s = "",
    t = "",
    u = "",
    v = "",
    w = "",
    x = "10019",
    y = "",
    z = "",
    A = "FR*r!isE5W";
  function B() {
    return C.apply(this, arguments);
  }
  function C() {
    C = i(g().mark(function ae() {
      var ag, ah, ai, aj, ak, al, am, an, ao, ap, aq, ar, as, at, au, av, aw, ax, ay, az, aA, aB, aC, aD, aE, aF, aG, aH, aI, aJ, aK, aL, aM, aN, aO, aP, aQ, aR, aS, aT, aU;
      return g().wrap(function (aW) {
        for (;;) {
          switch (aW.prev = aW.next) {
            case 0:
              if (console.log("\u4F5C\u8005\uFF1A@xzxxn777\n\u9891\u9053\uFF1Ahttps://t.me/xzxxn777\n\u7FA4\u7EC4\uFF1Ahttps://t.me/xzxxn7777\n\u81EA\u7528\u673A\u573A\u63A8\u8350\uFF1Ahttps://xn--diqv0fut7b.com\n"), j) {
                aW.next = 6;
                break;
              }
              console.log("\u5148\u53BBboxjs\u586B\u5199\u8D26\u53F7\u5BC6\u7801");
              aW.next = 5;
              return aa("\u5148\u53BBboxjs\u586B\u5199\u8D26\u53F7\u5BC6\u7801");
            case 5:
              return aW.abrupt("return");
            case 6:
              aW.next = 8;
              return a8();
            case 8:
              k = aW.sent;
              ag = j.split(" ");
              ah = c(ag);
              aW.prev = 11;
              ah.s();
            case 13:
              if ((ai = ah.n()).done) {
                aW.next = 179;
                break;
              }
              aj = ai.value;
              console.log("\u968F\u673A\u751F\u6210UA");
              ak = a6();
              n = ak.ua;
              o = ak.commonUa;
              p = ak.uuid;
              console.log(n);
              console.log(o);
              u = aj.split("&")[0];
              v = aj.split("&")[1];
              console.log("\u7528\u6237\uFF1A".concat(u, "\u5F00\u59CB\u4EFB\u52A1"));
              console.log("\u83B7\u53D6sessionId");
              aW.next = 28;
              return J("/api/account/init");
            case 28:
              al = aW.sent;
              y = al.data.session.id;
              console.log(y);
              console.log("\u83B7\u53D6signature_key");
              aW.next = 34;
              return D("/web/init?client_id=".concat(x));
            case 34:
              am = aW.sent;
              l = am.data.client.signature_key;
              console.log(l);
              console.log("\u83B7\u53D6code");
              aW.next = 40;
              return F("/web/oauth/credential_auth");
            case 40:
              if (an = aW.sent, an.data) {
                aW.next = 44;
                break;
              }
              console.log(an.message);
              return aW.abrupt("continue", 177);
            case 44:
              ao = an.data.authorization_code.code;
              console.log(ao);
              console.log("\u767B\u5F55");
              aW.next = 49;
              return J("/api/zbtxz/login", "check_token=&code=".concat(ao, "&token=&type=-1&union_id="));
            case 49:
              ap = aW.sent;
              console.log("\u767B\u5F55\u6210\u529F");
              t = ap.data.session.account_id;
              y = ap.data.session.id;
              aW.next = 55;
              return H("/api/app_feature_switch/list");
            case 55:
              if (aq = aW.sent, console.log("\u8FDB\u5165app\uFF1A".concat(aq.message)), console.log("\u83B7\u53D6id"), w) {
                aW.next = 64;
                break;
              }
              aW.next = 61;
              return H("/api/article/channel_list?channel_id=639abec5e305b418fc469e3b&isDiFangHao=false&is_new=true&list_count=0&size=20");
            case 61:
              ar = aW.sent;
              as = c(ar.data.article_list);
              try {
                for (as.s(); !(at = as.n()).done;) {
                  if (au = at.value, JSON.stringify(au).includes("\u9605\u8BFB\u6709\u793C")) {
                    av = c(au.column_news_list);
                    try {
                      for (av.s(); !(aw = av.n()).done;) {
                        if (ax = aw.value, JSON.stringify(ax).includes("\u9605\u8BFB\u6709\u793C")) {
                          for (ay = ax.url.split("?")[1], az = {}, aA = ay.split("&"), aB = 0, aC = aA.length; aB < aC; aB++) {
                            aD = aA[aB].split("=");
                            az[aD[0]] = aD[1];
                          }
                          w = az.id;
                        }
                      }
                    } catch (b6) {
                      av.e(b6);
                    } finally {
                      av.f();
                    }
                  }
                }
              } catch (ba) {
                as.e(ba);
              } finally {
                as.f();
              }
            case 64:
              if (w) {
                aW.next = 66;
                break;
              }
              return aW.abrupt("continue", 177);
            case 66:
              console.log(w);
              aW.next = 69;
              return H("/api/article/detail?id=".concat(w));
            case 69:
              aW.sent;
              console.log("\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014");
              console.log("\u9605\u8BFB\u62BD\u5956");
              q = "";
              console.log("\u83B7\u53D6\u767B\u5F55cookie");
              aW.next = 76;
              return L("/prod-api/user-read/app/login?id=".concat(t, "&sessionId=").concat(y, "&deviceId=").concat(p));
            case 76:
              if (q = aW.sent, q) {
                aW.next = 79;
                break;
              }
              return aW.abrupt("continue", 177);
            case 79:
              console.log(q);
              aW.next = 82;
              return N("/prod-api/user-read/list/".concat(a5()));
            case 82:
              aE = aW.sent;
              aF = c(aE.data.articleIsReadList);
              aW.prev = 84;
              aF.s();
            case 86:
              if ((aG = aF.n()).done) {
                aW.next = 102;
                break;
              }
              aH = aG.value;
              console.log("\u6587\u7AE0\uFF1A".concat(aH.title));
              aW.next = 91;
              return H("/api/article/detail?id=".concat(aH.newsId));
            case 91:
              aW.sent;
              aW.next = 94;
              return H("/api/article/read_time?channel_article_id=".concat(aH.newsId, "&is_end=true&read_time=7934"));
            case 94:
              aW.sent;
              aI = JSON.stringify({
                timestamp: Date.now(),
                articleId: aH.id,
                accountId: t
              });
              aW.next = 98;
              return N("/prod-api/already-read/article/new?signature=".concat(a1(aI)), aI);
            case 98:
              aJ = aW.sent;
              console.log("\u9605\u8BFB\uFF1A".concat(aJ.msg));
            case 100:
              aW.next = 86;
              break;
            case 102:
              aW.next = 107;
              break;
            case 104:
              aW.prev = 104;
              aW.t0 = aW.catch(84);
              aF.e(aW.t0);
            case 107:
              aW.prev = 107;
              aF.f();
              return aW.finish(107);
            case 110:
              aW.next = 112;
              return N("/prod-api/user-read-count/count/".concat(a5()));
            case 112:
              if (aK = aW.sent, console.log("\u5269\u4F59\u62BD\u5956\u6B21\u6570\uFF1A".concat(aK.data)), !(aK.data > 0)) {
                aW.next = 132;
                break;
              }
              s = "";
              aW.next = 118;
              return P("/tzrb/user/loginWC?accountId=".concat(t, "&sessionId=").concat(y));
            case 118:
              s = aW.sent;
              console.log("\u83B7\u53D6\u62BD\u5956cookie");
              console.log(s);
              aW.next = 123;
              return R("/tzrb/awardUpgrade/list?activityId=67");
            case 123:
              aL = aW.sent;
              aM = aL.data;
              aN = g().mark(function bh() {
                var bj, bk;
                return g().wrap(function (bl) {
                  for (;;) {
                    switch (bl.prev = bl.next) {
                      case 0:
                        bl.next = 2;
                        return T("/tzrb/userAwardRecordUpgrade/saveUpdate", "activityId=67&sessionId=undefined&sig=undefined&token=undefined");
                      case 2:
                        bj = bl.sent;
                        bk = aM.findIndex(function (bn) {
                          return bn.id == bj.data;
                        });
                        -1 != bk ? (console.log("\u62BD\u5956\u83B7\u5F97\uFF1A".concat(aM[bk].title)), z += "\u7528\u6237\uFF1A".concat(u, " \u62BD\u5956\u83B7\u5F97\uFF1A").concat(aM[bk].title, "\n")) : console.log(JSON.stringify(bj));
                      case 5:
                      case "end":
                        return bl.stop();
                    }
                  }
                }, bh);
              });
              aO = 0;
            case 127:
              if (!(aO < aK.data)) {
                aW.next = 132;
                break;
              }
              return aW.delegateYield(aN(), "t1", 129);
            case 129:
              aO++;
              aW.next = 127;
              break;
            case 132:
              console.log("\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014");
              console.log("\u7B54\u9898\u62BD\u5956");
              r = "";
              console.log("\u83B7\u53D6\u767B\u5F55cookie");
              aW.next = 138;
              return V("/wcgames/WordFillGame/login/?accountId=".concat(t, "&sessionId=").concat(y));
            case 138:
              if (r = aW.sent, r) {
                aW.next = 141;
                break;
              }
              return aW.abrupt("continue", 177);
            case 141:
              console.log(r);
              aW.next = 144;
              return X("/wcgames/WordFillGame/get_user_info/");
            case 144:
              aP = aW.sent;
              console.log("\u4ECA\u65E5\u7B54\u9898\u8FDB\u5EA6\uFF1A".concat(aP.data.answerCount, "/5 \u5DF2\u95EF\u8FC7").concat(aP.data.level, "\u5173"));
              aQ = aP.data.answerCount;
            case 147:
              if (!(aQ < 5)) {
                aW.next = 163;
                break;
              }
              console.log("\u83B7\u53D6\u9898\u76EE");
              aW.next = 151;
              return X("/wcgames/WordFillGame/get_question/");
            case 151:
              if (aS = aW.sent, null != aS && null !== (aR = aS.data) && undefined !== aR && aR.question) {
                aW.next = 155;
                break;
              }
              console.log(aS.message);
              return aW.abrupt("break", 163);
            case 155:
              console.log("\u9898\u76EE\uFF1A".concat(aS.data.question, " \u7B54\u6848\uFF1A").concat(aS.data.answer));
              aW.next = 158;
              return Z("/wcgames/WordFillGame/submit_answer/", "accountId=".concat(t));
            case 158:
              aT = aW.sent;
              console.log("\u7B54\u9898\uFF1A".concat(aT.message));
            case 160:
              aQ++;
              aW.next = 147;
              break;
            case 163:
              aW.next = 165;
              return X("/wcgames/WordFillGame/get_user_info/");
            case 165:
              if (aP = aW.sent, 1 != aP.data.isGetRed) {
                aW.next = 169;
                break;
              }
              console.log("\u5DF2\u9886\u53D6\u652F\u4ED8\u5B9D\u7EA2\u5305");
              return aW.abrupt("continue", 177);
            case 169:
              if (1 == aP.data.alipayId_bind) {
                aW.next = 172;
                break;
              }
              console.log("\u672A\u7ED1\u5B9A\u652F\u4ED8\u5B9D");
              return aW.abrupt("continue", 177);
            case 172:
              aW.next = 174;
              return X("/wcgames/WordFillGame/generate_custom_redpacket/");
            case 174:
              aU = aW.sent;
              console.log("\u7B54\u9898\u62BD\u5956\u83B7\u5F97\u652F\u4ED8\u5B9D\u7EA2\u5305\uFF1A".concat(aU.message, "\u5143"));
              z += "\u7528\u6237\uFF1A".concat(u, " \u7B54\u9898\u62BD\u5956\u83B7\u5F97\u652F\u4ED8\u5B9D\u7EA2\u5305\uFF1A").concat(aU.message, "\u5143\n");
            case 177:
              aW.next = 13;
              break;
            case 179:
              aW.next = 184;
              break;
            case 181:
              aW.prev = 181;
              aW.t2 = aW.catch(11);
              ah.e(aW.t2);
            case 184:
              aW.prev = 184;
              ah.f();
              return aW.finish(184);
            case 187:
              if (!z) {
                aW.next = 190;
                break;
              }
              aW.next = 190;
              return aa(z);
            case 190:
            case "end":
              return aW.stop();
          }
        }
      }, ae, null, [[11, 181, 184, 187], [84, 104, 107, 110]]);
    }));
    return C.apply(this, arguments);
  }
  function D(ac) {
    return E.apply(this, arguments);
  }
  function E() {
    E = i(g().mark(function ad(ae) {
      return g().wrap(function (ah) {
        for (;;) {
          switch (ah.prev = ah.next) {
            case 0:
              return ah.abrupt("return", new Promise(function (ai) {
                var ak = {
                  url: "https://passport.tmuyun.com".concat(ae),
                  headers: {
                    Connection: "Keep-Alive",
                    "Cache-Control": "no-cache",
                    "X-REQUEST-ID": a4(),
                    "Accept-Encoding": "gzip",
                    "user-agent": n
                  }
                };
                $.get(ak, function () {
                  var an = i(g().mark(function ap(aq, ar, as) {
                    return g().wrap(function (au) {
                      for (;;) {
                        switch (au.prev = au.next) {
                          case 0:
                            try {
                              aq ? (console.log("".concat(JSON.stringify(aq))), console.log("".concat($.name, " API\u8BF7\u6C42\u5931\u8D25\uFF0C\u8BF7\u68C0\u67E5\u7F51\u8DEF\u91CD\u8BD5"))) : ai(JSON.parse(as));
                            } catch (ax) {
                              $.logErr(ax, ar);
                            } finally {
                              ai();
                            }
                          case 1:
                          case "end":
                            return au.stop();
                        }
                      }
                    }, ap);
                  }));
                  return function (aq, ar, as) {
                    return an.apply(this, arguments);
                  };
                }());
              }));
            case 1:
            case "end":
              return ah.stop();
          }
        }
      }, ad);
    }));
    return E.apply(this, arguments);
  }
  function F(ac) {
    return G.apply(this, arguments);
  }
  function G() {
    G = i(g().mark(function ad(ae) {
      var af;
      return g().wrap(function (ag) {
        for (;;) {
          switch (ag.prev = ag.next) {
            case 0:
              af = a2();
              return ag.abrupt("return", new Promise(function (ai) {
                var ak = {
                  Connection: "Keep-Alive",
                  "X-REQUEST-ID": af.uuid,
                  "X-SIGNATURE": af.signature,
                  "Cache-Control": "no-cache",
                  "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
                  "Accept-Encoding": "gzip",
                  "user-agent": n
                };
                var al = {
                  url: "https://passport.tmuyun.com".concat(ae),
                  headers: ak,
                  body: af.body
                };
                $.post(al, function () {
                  var an = i(g().mark(function ao(ap, aq, ar) {
                    return g().wrap(function (as) {
                      for (;;) {
                        switch (as.prev = as.next) {
                          case 0:
                            try {
                              ap ? (console.log("".concat(JSON.stringify(ap))), console.log("".concat($.name, " API\u8BF7\u6C42\u5931\u8D25\uFF0C\u8BF7\u68C0\u67E5\u7F51\u8DEF\u91CD\u8BD5"))) : ai(JSON.parse(ar));
                            } catch (au) {
                              $.logErr(au, aq);
                            } finally {
                              ai();
                            }
                          case 1:
                          case "end":
                            return as.stop();
                        }
                      }
                    }, ao);
                  }));
                  return function (ap, aq, ar) {
                    return an.apply(this, arguments);
                  };
                }());
              }));
            case 2:
            case "end":
              return ag.stop();
          }
        }
      }, ad);
    }));
    return G.apply(this, arguments);
  }
  function H(ac) {
    return I.apply(this, arguments);
  }
  function I() {
    I = i(g().mark(function ad(ae) {
      var ag;
      return g().wrap(function (ah) {
        for (;;) {
          switch (ah.prev = ah.next) {
            case 0:
              ag = a3(ae);
              return ah.abrupt("return", new Promise(function (ai) {
                var ak = {
                  url: "https://vapp.taizhou.com.cn".concat(ae),
                  headers: {
                    Connection: "Keep-Alive",
                    "X-TIMESTAMP": ag.time,
                    "X-SESSION-ID": y,
                    "X-REQUEST-ID": ag.uuid,
                    "X-SIGNATURE": ag.signature,
                    "X-TENANT-ID": m,
                    "X-ACCOUNT-ID": t,
                    "Cache-Control": "no-cache",
                    "Accept-Encoding": "gzip",
                    "user-agent": o
                  }
                };
                $.get(ak, function () {
                  var am = i(g().mark(function an(ao, ap, aq) {
                    return g().wrap(function (ar) {
                      for (;;) {
                        switch (ar.prev = ar.next) {
                          case 0:
                            if (ar.prev = 0, !ao) {
                              ar.next = 6;
                              break;
                            }
                            console.log("".concat(JSON.stringify(ao)));
                            console.log("".concat($.name, " API\u8BF7\u6C42\u5931\u8D25\uFF0C\u8BF7\u68C0\u67E5\u7F51\u8DEF\u91CD\u8BD5"));
                            ar.next = 9;
                            break;
                          case 6:
                            ar.next = 8;
                            return $.wait(2000);
                          case 8:
                            ai(JSON.parse(aq));
                          case 9:
                            ar.next = 14;
                            break;
                          case 11:
                            ar.prev = 11;
                            ar.t0 = ar.catch(0);
                            $.logErr(ar.t0, ap);
                          case 14:
                            ar.prev = 14;
                            ai();
                            return ar.finish(14);
                          case 17:
                          case "end":
                            return ar.stop();
                        }
                      }
                    }, an, null, [[0, 11, 14, 17]]);
                  }));
                  return function (ao, ap, aq) {
                    return am.apply(this, arguments);
                  };
                }());
              }));
            case 2:
            case "end":
              return ah.stop();
          }
        }
      }, ad);
    }));
    return I.apply(this, arguments);
  }
  function J(ac, ad) {
    return K.apply(this, arguments);
  }
  function K() {
    K = i(g().mark(function ad(ae, af) {
      var ah;
      return g().wrap(function (ai) {
        for (;;) {
          switch (ai.prev = ai.next) {
            case 0:
              ah = a3(ae);
              return ai.abrupt("return", new Promise(function (ak) {
                var am = {
                  Connection: "Keep-Alive",
                  "X-TIMESTAMP": ah.time,
                  "X-SESSION-ID": y,
                  "X-REQUEST-ID": ah.uuid,
                  "X-SIGNATURE": ah.signature,
                  "X-TENANT-ID": m,
                  "X-ACCOUNT-ID": t,
                  "Cache-Control": "no-cache",
                  "Accept-Encoding": "gzip",
                  "user-agent": o
                };
                var an = {
                  url: "https://vapp.taizhou.com.cn".concat(ae),
                  headers: am,
                  body: af
                };
                $.post(an, function () {
                  var ao = i(g().mark(function ap(aq, ar, as) {
                    return g().wrap(function (av) {
                      for (;;) {
                        switch (av.prev = av.next) {
                          case 0:
                            if (av.prev = 0, !aq) {
                              av.next = 6;
                              break;
                            }
                            console.log("".concat(JSON.stringify(aq)));
                            console.log("".concat($.name, " API\u8BF7\u6C42\u5931\u8D25\uFF0C\u8BF7\u68C0\u67E5\u7F51\u8DEF\u91CD\u8BD5"));
                            av.next = 9;
                            break;
                          case 6:
                            av.next = 8;
                            return $.wait(2000);
                          case 8:
                            ak(JSON.parse(as));
                          case 9:
                            av.next = 14;
                            break;
                          case 11:
                            av.prev = 11;
                            av.t0 = av.catch(0);
                            $.logErr(av.t0, ar);
                          case 14:
                            av.prev = 14;
                            ak();
                            return av.finish(14);
                          case 17:
                          case "end":
                            return av.stop();
                        }
                      }
                    }, ap, null, [[0, 11, 14, 17]]);
                  }));
                  return function (aq, ar, as) {
                    return ao.apply(this, arguments);
                  };
                }());
              }));
            case 2:
            case "end":
              return ai.stop();
          }
        }
      }, ad);
    }));
    return K.apply(this, arguments);
  }
  function L(ac) {
    return M.apply(this, arguments);
  }
  function M() {
    M = i(g().mark(function ad(ae) {
      return g().wrap(function (ag) {
        for (;;) {
          switch (ag.prev = ag.next) {
            case 0:
              return ag.abrupt("return", new Promise(function (ai) {
                var ak = {
                  url: "https://xmt.taizhou.com.cn".concat(ae),
                  headers: {
                    Connection: "Keep-Alive",
                    Accept: "*/*",
                    Cookie: q,
                    "Sec-Fetch-Site": "same-origin",
                    "Sec-Fetch-Mode": "cors",
                    "Sec-Fetch-Dest": "empty",
                    Referer: "https://xmt.taizhou.com.cn/readingLuck-v2/",
                    "X-Requested-With": "com.shangc.tiennews.taizhou",
                    "Accept-Encoding": "gzip, deflate",
                    "Accept-Language": "zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7",
                    "user-agent": "Mozilla/5.0 (Linux; Android 11; 21091116AC Build/RP1A.200720.011; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/94.0.4606.85 Mobile Safari/537.36;xsb_wangchao;xsb_wangchao;6.0.2;native_app;6.10.0"
                  }
                };
                $.get(ak, function () {
                  var am = i(g().mark(function an(ao, ap, aq) {
                    return g().wrap(function (as) {
                      for (;;) {
                        switch (as.prev = as.next) {
                          case 0:
                            if (as.prev = 0, !ao) {
                              as.next = 6;
                              break;
                            }
                            console.log("".concat(JSON.stringify(ao)));
                            console.log("".concat($.name, " API\u8BF7\u6C42\u5931\u8D25\uFF0C\u8BF7\u68C0\u67E5\u7F51\u8DEF\u91CD\u8BD5"));
                            as.next = 16;
                            break;
                          case 6:
                            as.next = 8;
                            return $.wait(2000);
                          case 8:
                            if (200 == JSON.parse(aq).code) {
                              as.next = 13;
                              break;
                            }
                            console.log(JSON.parse(aq).msg);
                            z += "\u7528\u6237\uFF1A".concat(u, " ").concat(JSON.parse(aq).msg, "\n");
                            ai("");
                            return as.abrupt("return");
                          case 13:
                            q = $.isNode() ? ap.headers["set-cookie"][0] : ap.headers["set-cookie"] || ap.headers["Set-Cookie"];
                            q = q.split(";")[0];
                            ai(q);
                          case 16:
                            as.next = 21;
                            break;
                          case 18:
                            as.prev = 18;
                            as.t0 = as.catch(0);
                            $.logErr(as.t0, ap);
                          case 21:
                            as.prev = 21;
                            ai();
                            return as.finish(21);
                          case 24:
                          case "end":
                            return as.stop();
                        }
                      }
                    }, an, null, [[0, 18, 21, 24]]);
                  }));
                  return function (ao, ap, aq) {
                    return am.apply(this, arguments);
                  };
                }());
              }));
            case 1:
            case "end":
              return ag.stop();
          }
        }
      }, ad);
    }));
    return M.apply(this, arguments);
  }
  function N(ac) {
    return O.apply(this, arguments);
  }
  function O() {
    O = i(g().mark(function ad(ae) {
      return g().wrap(function (ag) {
        for (;;) {
          switch (ag.prev = ag.next) {
            case 0:
              return ag.abrupt("return", new Promise(function (ai) {
                var ak = {
                  url: "https://xmt.taizhou.com.cn".concat(ae),
                  headers: {
                    Connection: "Keep-Alive",
                    Accept: "*/*",
                    Cookie: q,
                    "Sec-Fetch-Site": "same-origin",
                    "Sec-Fetch-Mode": "cors",
                    "Sec-Fetch-Dest": "empty",
                    Referer: "https://xmt.taizhou.com.cn/readingLuck-v2/",
                    "X-Requested-With": "com.shangc.tiennews.taizhou",
                    "Accept-Encoding": "gzip, deflate",
                    "Accept-Language": "zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7",
                    "user-agent": "Mozilla/5.0 (Linux; Android 11; 21091116AC Build/RP1A.200720.011; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/94.0.4606.85 Mobile Safari/537.36;xsb_wangchao;xsb_wangchao;6.0.2;native_app;6.10.0"
                  }
                };
                $.get(ak, function () {
                  var an = i(g().mark(function ao(ap, aq, ar) {
                    return g().wrap(function (as) {
                      for (;;) {
                        switch (as.prev = as.next) {
                          case 0:
                            if (as.prev = 0, !ap) {
                              as.next = 6;
                              break;
                            }
                            console.log("".concat(JSON.stringify(ap)));
                            console.log("".concat($.name, " API\u8BF7\u6C42\u5931\u8D25\uFF0C\u8BF7\u68C0\u67E5\u7F51\u8DEF\u91CD\u8BD5"));
                            as.next = 9;
                            break;
                          case 6:
                            as.next = 8;
                            return $.wait(2000);
                          case 8:
                            ai(JSON.parse(ar));
                          case 9:
                            as.next = 14;
                            break;
                          case 11:
                            as.prev = 11;
                            as.t0 = as.catch(0);
                            $.logErr(as.t0, aq);
                          case 14:
                            as.prev = 14;
                            ai();
                            return as.finish(14);
                          case 17:
                          case "end":
                            return as.stop();
                        }
                      }
                    }, ao, null, [[0, 11, 14, 17]]);
                  }));
                  return function (ap, aq, ar) {
                    return an.apply(this, arguments);
                  };
                }());
              }));
            case 1:
            case "end":
              return ag.stop();
          }
        }
      }, ad);
    }));
    return O.apply(this, arguments);
  }
  function P(ac) {
    return Q.apply(this, arguments);
  }
  function Q() {
    Q = i(g().mark(function ad(ae) {
      return g().wrap(function (ag) {
        for (;;) {
          switch (ag.prev = ag.next) {
            case 0:
              return ag.abrupt("return", new Promise(function (ai) {
                var ak = {
                  url: "https://srv-app.taizhou.com.cn".concat(ae),
                  headers: {
                    Connection: "Keep-Alive",
                    Accept: "*/*",
                    "Sec-Fetch-Site": "same-origin",
                    "Sec-Fetch-Mode": "cors",
                    "Sec-Fetch-Dest": "empty",
                    cookie: s,
                    Referer: "https://xmt.taizhou.com.cn/readingLuck-v1/",
                    "X-Requested-With": "com.shangc.tiennews.taizhou",
                    "Accept-Encoding": "gzip, deflate",
                    "Accept-Language": "zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7",
                    "user-agent": "Mozilla/5.0 (Linux; Android 11; 21091116AC Build/RP1A.200720.011; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/94.0.4606.85 Mobile Safari/537.36;xsb_wangchao;xsb_wangchao;6.0.2;native_app;6.10.0"
                  }
                };
                $.get(ak, function () {
                  var al = i(g().mark(function am(an, ao, ap) {
                    return g().wrap(function (ar) {
                      for (;;) {
                        switch (ar.prev = ar.next) {
                          case 0:
                            if (ar.prev = 0, !an) {
                              ar.next = 6;
                              break;
                            }
                            console.log("".concat(JSON.stringify(an)));
                            console.log("".concat($.name, " API\u8BF7\u6C42\u5931\u8D25\uFF0C\u8BF7\u68C0\u67E5\u7F51\u8DEF\u91CD\u8BD5"));
                            ar.next = 11;
                            break;
                          case 6:
                            ar.next = 8;
                            return $.wait(2000);
                          case 8:
                            s = $.isNode() ? ao.headers["set-cookie"][0] : ao.headers["set-cookie"] || ao.headers["Set-Cookie"];
                            s = s.split(";")[0];
                            ai(s);
                          case 11:
                            ar.next = 16;
                            break;
                          case 13:
                            ar.prev = 13;
                            ar.t0 = ar.catch(0);
                            $.logErr(ar.t0, ao);
                          case 16:
                            ar.prev = 16;
                            ai();
                            return ar.finish(16);
                          case 19:
                          case "end":
                            return ar.stop();
                        }
                      }
                    }, am, null, [[0, 13, 16, 19]]);
                  }));
                  return function (an, ao, ap) {
                    return al.apply(this, arguments);
                  };
                }());
              }));
            case 1:
            case "end":
              return ag.stop();
          }
        }
      }, ad);
    }));
    return Q.apply(this, arguments);
  }
  function R(ac) {
    return S.apply(this, arguments);
  }
  function S() {
    S = i(g().mark(function ad(ae) {
      return g().wrap(function (ah) {
        for (;;) {
          switch (ah.prev = ah.next) {
            case 0:
              return ah.abrupt("return", new Promise(function (aj) {
                var ak = {
                  url: "https://srv-app.taizhou.com.cn".concat(ae),
                  headers: {
                    Connection: "Keep-Alive",
                    Accept: "*/*",
                    "Sec-Fetch-Site": "same-origin",
                    "Sec-Fetch-Mode": "cors",
                    "Sec-Fetch-Dest": "empty",
                    cookie: s,
                    Referer: "https://xmt.taizhou.com.cn/readingLuck-v1/",
                    "X-Requested-With": "com.shangc.tiennews.taizhou",
                    "Accept-Encoding": "gzip, deflate",
                    "Accept-Language": "zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7",
                    "user-agent": "Mozilla/5.0 (Linux; Android 11; 21091116AC Build/RP1A.200720.011; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/94.0.4606.85 Mobile Safari/537.36;xsb_wangchao;xsb_wangchao;6.0.2;native_app;6.10.0"
                  }
                };
                $.get(ak, function () {
                  var am = i(g().mark(function an(ao, ap, aq) {
                    return g().wrap(function (as) {
                      for (;;) {
                        switch (as.prev = as.next) {
                          case 0:
                            if (as.prev = 0, !ao) {
                              as.next = 6;
                              break;
                            }
                            console.log("".concat(JSON.stringify(ao)));
                            console.log("".concat($.name, " API\u8BF7\u6C42\u5931\u8D25\uFF0C\u8BF7\u68C0\u67E5\u7F51\u8DEF\u91CD\u8BD5"));
                            as.next = 9;
                            break;
                          case 6:
                            as.next = 8;
                            return $.wait(2000);
                          case 8:
                            aj(JSON.parse(aq));
                          case 9:
                            as.next = 14;
                            break;
                          case 11:
                            as.prev = 11;
                            as.t0 = as.catch(0);
                            $.logErr(as.t0, ap);
                          case 14:
                            as.prev = 14;
                            aj();
                            return as.finish(14);
                          case 17:
                          case "end":
                            return as.stop();
                        }
                      }
                    }, an, null, [[0, 11, 14, 17]]);
                  }));
                  return function (ao, ap, aq) {
                    return am.apply(this, arguments);
                  };
                }());
              }));
            case 1:
            case "end":
              return ah.stop();
          }
        }
      }, ad);
    }));
    return S.apply(this, arguments);
  }
  function T(ac, ad) {
    return U.apply(this, arguments);
  }
  function U() {
    U = i(g().mark(function ad(ae, af) {
      return g().wrap(function (ai) {
        for (;;) {
          switch (ai.prev = ai.next) {
            case 0:
              return ai.abrupt("return", new Promise(function (ak) {
                var al = {
                  url: "https://srv-app.taizhou.com.cn".concat(ae),
                  headers: {
                    Connection: "Keep-Alive",
                    Accept: "*/*",
                    "Content-type": "application/x-www-form-urlencoded",
                    "Sec-Fetch-Site": "same-origin",
                    "Sec-Fetch-Mode": "cors",
                    "Sec-Fetch-Dest": "empty",
                    cookie: s,
                    Referer: "https://xmt.taizhou.com.cn/readingLuck-v1/",
                    "X-Requested-With": "com.shangc.tiennews.taizhou",
                    "Accept-Encoding": "gzip, deflate",
                    "Accept-Language": "zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7",
                    "user-agent": "Mozilla/5.0 (Linux; Android 11; 21091116AC Build/RP1A.200720.011; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/94.0.4606.85 Mobile Safari/537.36;xsb_wangchao;xsb_wangchao;6.0.2;native_app;6.10.0"
                  },
                  body: af
                };
                $.post(al, function () {
                  var an = i(g().mark(function ao(ap, aq, ar) {
                    return g().wrap(function (at) {
                      for (;;) {
                        switch (at.prev = at.next) {
                          case 0:
                            if (at.prev = 0, !ap) {
                              at.next = 6;
                              break;
                            }
                            console.log("".concat(JSON.stringify(ap)));
                            console.log("".concat($.name, " API\u8BF7\u6C42\u5931\u8D25\uFF0C\u8BF7\u68C0\u67E5\u7F51\u8DEF\u91CD\u8BD5"));
                            at.next = 9;
                            break;
                          case 6:
                            at.next = 8;
                            return $.wait(2000);
                          case 8:
                            ak(JSON.parse(ar));
                          case 9:
                            at.next = 14;
                            break;
                          case 11:
                            at.prev = 11;
                            at.t0 = at.catch(0);
                            $.logErr(at.t0, aq);
                          case 14:
                            at.prev = 14;
                            ak();
                            return at.finish(14);
                          case 17:
                          case "end":
                            return at.stop();
                        }
                      }
                    }, ao, null, [[0, 11, 14, 17]]);
                  }));
                  return function (ap, aq, ar) {
                    return an.apply(this, arguments);
                  };
                }());
              }));
            case 1:
            case "end":
              return ai.stop();
          }
        }
      }, ad);
    }));
    return U.apply(this, arguments);
  }
  function V(ac) {
    return W.apply(this, arguments);
  }
  function W() {
    W = i(g().mark(function ac(ad) {
      return g().wrap(function (af) {
        for (;;) {
          switch (af.prev = af.next) {
            case 0:
              return af.abrupt("return", new Promise(function (ag) {
                var ai = {
                  url: "https://srv2.taizhou.com.cn".concat(ad),
                  headers: {
                    Connection: "Keep-Alive",
                    Accept: "*/*",
                    Cookie: r,
                    "Sec-Fetch-Site": "same-origin",
                    "Sec-Fetch-Mode": "cors",
                    "Sec-Fetch-Dest": "empty",
                    Referer: "https://srv2.taizhou.com.cn/html/poetry-competition/",
                    "X-Requested-With": "com.shangc.tiennews.taizhou",
                    "Accept-Encoding": "gzip, deflate",
                    "Accept-Language": "zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7",
                    "user-agent": "Mozilla/5.0 (Linux; Android 11; 21091116AC Build/RP1A.200720.011; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/94.0.4606.85 Mobile Safari/537.36;xsb_wangchao;xsb_wangchao;6.0.2;native_app;6.10.0"
                  }
                };
                $.get(ai, function () {
                  var ak = i(g().mark(function al(am, an, ao) {
                    return g().wrap(function (ap) {
                      for (;;) {
                        switch (ap.prev = ap.next) {
                          case 0:
                            if (ap.prev = 0, !am) {
                              ap.next = 6;
                              break;
                            }
                            console.log("".concat(JSON.stringify(am)));
                            console.log("".concat($.name, " API\u8BF7\u6C42\u5931\u8D25\uFF0C\u8BF7\u68C0\u67E5\u7F51\u8DEF\u91CD\u8BD5"));
                            ap.next = 16;
                            break;
                          case 6:
                            ap.next = 8;
                            return $.wait(2000);
                          case 8:
                            if (200 == JSON.parse(ao).code) {
                              ap.next = 13;
                              break;
                            }
                            console.log(JSON.parse(ao).msg);
                            z += "\u7528\u6237\uFF1A".concat(u, " ").concat(JSON.parse(ao).msg, "\n");
                            ag("");
                            return ap.abrupt("return");
                          case 13:
                            r = $.isNode() ? an.headers["set-cookie"][0] || an.headers["Set-Cookie"][0] : an.headers["set-cookie"] || an.headers["Set-Cookie"];
                            r = r.split(";")[0];
                            ag(r);
                          case 16:
                            ap.next = 21;
                            break;
                          case 18:
                            ap.prev = 18;
                            ap.t0 = ap.catch(0);
                            $.logErr(ap.t0, an);
                          case 21:
                            ap.prev = 21;
                            ag();
                            return ap.finish(21);
                          case 24:
                          case "end":
                            return ap.stop();
                        }
                      }
                    }, al, null, [[0, 18, 21, 24]]);
                  }));
                  return function (am, an, ao) {
                    return ak.apply(this, arguments);
                  };
                }());
              }));
            case 1:
            case "end":
              return af.stop();
          }
        }
      }, ac);
    }));
    return W.apply(this, arguments);
  }
  function X(ac) {
    return Y.apply(this, arguments);
  }
  function Y() {
    Y = i(g().mark(function ac(ad) {
      return g().wrap(function (af) {
        for (;;) {
          switch (af.prev = af.next) {
            case 0:
              return af.abrupt("return", new Promise(function (ah) {
                var aj = {
                  url: "https://srv2.taizhou.com.cn".concat(ad),
                  headers: {
                    Connection: "Keep-Alive",
                    Accept: "*/*",
                    Cookie: r,
                    "Sec-Fetch-Site": "same-origin",
                    "Sec-Fetch-Mode": "cors",
                    "Sec-Fetch-Dest": "empty",
                    Referer: "https://srv2.taizhou.com.cn/html/poetry-competition/",
                    "X-Requested-With": "com.shangc.tiennews.taizhou",
                    "Accept-Encoding": "gzip, deflate",
                    "Accept-Language": "zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7",
                    "user-agent": "Mozilla/5.0 (Linux; Android 11; 21091116AC Build/RP1A.200720.011; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/94.0.4606.85 Mobile Safari/537.36;xsb_wangchao;xsb_wangchao;6.0.2;native_app;6.10.0"
                  }
                };
                $.get(aj, function () {
                  var al = i(g().mark(function am(an, ao, ap) {
                    return g().wrap(function (aq) {
                      for (;;) {
                        switch (aq.prev = aq.next) {
                          case 0:
                            if (aq.prev = 0, !an) {
                              aq.next = 6;
                              break;
                            }
                            console.log("".concat(JSON.stringify(an)));
                            console.log("".concat($.name, " API\u8BF7\u6C42\u5931\u8D25\uFF0C\u8BF7\u68C0\u67E5\u7F51\u8DEF\u91CD\u8BD5"));
                            aq.next = 9;
                            break;
                          case 6:
                            aq.next = 8;
                            return $.wait(2000);
                          case 8:
                            ah(JSON.parse(ap));
                          case 9:
                            aq.next = 14;
                            break;
                          case 11:
                            aq.prev = 11;
                            aq.t0 = aq.catch(0);
                            $.logErr(aq.t0, ao);
                          case 14:
                            aq.prev = 14;
                            ah();
                            return aq.finish(14);
                          case 17:
                          case "end":
                            return aq.stop();
                        }
                      }
                    }, am, null, [[0, 11, 14, 17]]);
                  }));
                  return function (an, ao, ap) {
                    return al.apply(this, arguments);
                  };
                }());
              }));
            case 1:
            case "end":
              return af.stop();
          }
        }
      }, ac);
    }));
    return Y.apply(this, arguments);
  }
  function Z(ac, ad) {
    return a0.apply(this, arguments);
  }
  function a0() {
    a0 = i(g().mark(function ac(ad, ae) {
      return g().wrap(function (ag) {
        for (;;) {
          switch (ag.prev = ag.next) {
            case 0:
              return ag.abrupt("return", new Promise(function (ai) {
                var aj = {
                  url: "https://srv2.taizhou.com.cn".concat(ad),
                  headers: {
                    Connection: "Keep-Alive",
                    Accept: "*/*",
                    Cookie: r,
                    "content-type": "application/x-www-form-urlencoded",
                    "Sec-Fetch-Site": "same-origin",
                    "Sec-Fetch-Mode": "cors",
                    "Sec-Fetch-Dest": "empty",
                    Referer: "https://srv2.taizhou.com.cn/html/poetry-competition/",
                    "X-Requested-With": "com.shangc.tiennews.taizhou",
                    "Accept-Encoding": "gzip, deflate",
                    "Accept-Language": "zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7",
                    "user-agent": "Mozilla/5.0 (Linux; Android 11; 21091116AC Build/RP1A.200720.011; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/94.0.4606.85 Mobile Safari/537.36;xsb_wangchao;xsb_wangchao;6.0.2;native_app;6.10.0"
                  },
                  body: ae
                };
                $.post(aj, function () {
                  var al = i(g().mark(function am(an, ao, ap) {
                    return g().wrap(function (aq) {
                      for (;;) {
                        switch (aq.prev = aq.next) {
                          case 0:
                            if (aq.prev = 0, !an) {
                              aq.next = 6;
                              break;
                            }
                            console.log("".concat(JSON.stringify(an)));
                            console.log("".concat($.name, " API\u8BF7\u6C42\u5931\u8D25\uFF0C\u8BF7\u68C0\u67E5\u7F51\u8DEF\u91CD\u8BD5"));
                            aq.next = 9;
                            break;
                          case 6:
                            aq.next = 8;
                            return $.wait(2000);
                          case 8:
                            ai(JSON.parse(ap));
                          case 9:
                            aq.next = 14;
                            break;
                          case 11:
                            aq.prev = 11;
                            aq.t0 = aq.catch(0);
                            $.logErr(aq.t0, ao);
                          case 14:
                            aq.prev = 14;
                            ai();
                            return aq.finish(14);
                          case 17:
                          case "end":
                            return aq.stop();
                        }
                      }
                    }, am, null, [[0, 11, 14, 17]]);
                  }));
                  return function (an, ao, ap) {
                    return al.apply(this, arguments);
                  };
                }());
              }));
            case 1:
            case "end":
              return ag.stop();
          }
        }
      }, ac);
    }));
    return a0.apply(this, arguments);
  }
  function a1(ac) {
    var ad = k.loadSM2();
    return ad.doEncrypt(ac, "04A50803A27F000D6B310607EBA2A1C899E82872C0B538CA41DB6F0183B4C7E164DAFC6946ABF93C8AF1C0AD96D0E770D29264EF9F907DDBAE97A2A0BB1036D4AC", 1);
  }
  function a2() {
    var aj = new (k.loadJSEncrypt())();
    aj.setPublicKey("MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQD6XO7e9YeAOs+cFqwa7ETJ+WXizPqQeXv68i5vqw9pFREsrqiBTRcg7wB0RIp3rJkDpaeVJLsZqYm5TW7FWx/iOiXFc+zCPvaKZric2dXCw27EvlH5rq+zwIPDAJHGAfnn1nmQH7wR3PCatEIb8pz5GFlTHMlluw4ZYmnOwg+thwIDAQAB");
    v = aj.encrypt(v);
    var ag = a4(),
      ah = "client_id=".concat(x, "&password=").concat(v, "&phone_number=").concat(u),
      ai = "post%%/web/oauth/credential_auth?".concat(ah, "%%").concat(ag, "%%");
    ah = "client_id=".concat(x, "&password=").concat(encodeURIComponent(v), "&phone_number=").concat(u);
    CryptoJS = k.createCryptoJS();
    var ae = CryptoJS.HmacSHA256(ai, l),
      af = CryptoJS.enc.Hex.stringify(ae);
    var ak = {};
    ak.uuid = ag;
    ak.signature = af;
    ak.body = ah;
    return ak;
  }
  function a3(ac) {
    var ad = a4(),
      ae = Date.now();
    ac.indexOf("?") > 0 && (ac = ac.substring(0, ac.indexOf("?")));
    CryptoJS = k.createCryptoJS();
    var af = CryptoJS.SHA256("".concat(ac, "&&").concat(y, "&&").concat(ad, "&&").concat(ae, "&&").concat(A, "&&").concat(m)).toString(),
      ag = {
        uuid: ad,
        time: ae,
        signature: af
      };
    return ag;
  }
  function a4() {
    return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (ac) {
      var ad = 16 * Math.random() | 0,
        ae = "x" === ac ? ad : 3 & ad | 8;
      return ae.toString(16);
    });
  }
  function a5() {
    var ac = new Date(),
      ad = ac.getFullYear(),
      ae = String(ac.getMonth() + 1).padStart(2, "0"),
      af = String(ac.getDate()).padStart(2, "0");
    return "".concat(ad).concat(ae).concat(af);
  }
  function a6() {
    var ac = "6.0.2",
      ad = a4(),
      ae = a7(["M1903F2A", "M2001J2E", "M2001J2C", "M2001J1E", "M2001J1C", "M2002J9E", "M2011K2C", "M2102K1C", "M2101K9C", "2107119DC", "2201123C", "2112123AC", "2201122C", "2211133C", "2210132C", "2304FPN6DC", "23127PN0CC", "24031PN0DC", "23090RA98C", "2312DRA50C", "2312CRAD3C", "2312DRAABC", "22101316UCP", "22101316C"]),
      af = "Xiaomi " + ae,
      ag = "Android",
      ah = "".concat(ag.toUpperCase(), ";").concat("11", ";").concat(x, ";").concat(ac, ";1.0;null;").concat(ae),
      ai = "".concat(ac, ";").concat(ad, ";").concat(af, ";").concat(ag, ";").concat("11", ";").concat("xiaomi", ";").concat("6.10.0"),
      aj = {
        ua: ah,
        commonUa: ai,
        uuid: ad
      };
    return aj;
  }
  function a7(ac) {
    return ac[Math.floor(Math.random() * ac.length)];
  }
  function a8() {
    return a9.apply(this, arguments);
  }
  function a9() {
    a9 = i(g().mark(function ac() {
      var ae;
      return g().wrap(function af(ag) {
        for (;;) {
          switch (ag.prev = ag.next) {
            case 0:
              if (ae = $.getdata("Utils_Code") || "", !ae || !Object.keys(ae).length) {
                ag.next = 5;
                break;
              }
              console.log("\u2705 ".concat($.name, ": \u7F13\u5B58\u4E2D\u5B58\u5728Utils\u4EE3\u7801, \u8DF3\u8FC7\u4E0B\u8F7D"));
              eval(ae);
              return ag.abrupt("return", creatUtils());
            case 5:
              console.log("\uD83D\uDE80 ".concat($.name, ": \u5F00\u59CB\u4E0B\u8F7DUtils\u4EE3\u7801"));
              return ag.abrupt("return", new Promise(function () {
                var ak = i(g().mark(function al(am) {
                  return g().wrap(function ao(ap) {
                    for (;;) {
                      switch (ap.prev = ap.next) {
                        case 0:
                          $.getScript("https://mirror.ghproxy.com/https://raw.githubusercontent.com/xzxxn777/Surge/main/Utils/Utils.js").then(function (aq) {
                            $.setdata(aq, "Utils_Code");
                            eval(aq);
                            console.log("\u2705 Utils\u52A0\u8F7D\u6210\u529F, \u8BF7\u7EE7\u7EED");
                            am(creatUtils());
                          });
                        case 1:
                        case "end":
                          return ap.stop();
                      }
                    }
                  }, al);
                }));
                return function (am) {
                  return ak.apply(this, arguments);
                };
              }()));
            case 7:
            case "end":
              return ag.stop();
          }
        }
      }, ac);
    }));
    return a9.apply(this, arguments);
  }
  function aa(ac) {
    return ab.apply(this, arguments);
  }
  function ab() {
    ab = i(g().mark(function ac(ad) {
      return g().wrap(function (ag) {
        for (;;) {
          switch (ag.prev = ag.next) {
            case 0:
              if (!$.isNode()) {
                ag.next = 5;
                break;
              }
              ag.next = 3;
              return notify.sendNotify($.name, ad);
            case 3:
              ag.next = 6;
              break;
            case 5:
              $.msg($.name, "", ad);
            case 6:
            case "end":
              return ag.stop();
          }
        }
      }, ac);
    }));
    return ab.apply(this, arguments);
  }
  i(g().mark(function ac() {
    return g().wrap(function (af) {
      for (;;) {
        switch (af.prev = af.next) {
          case 0:
            af.next = 2;
            return B();
          case 2:
          case "end":
            return af.stop();
        }
      }
    }, ac);
  }))().catch(function (ad) {
    $.log(ad);
  }).finally(function () {
    $.done({});
  });
})();