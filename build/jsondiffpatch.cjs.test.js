'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var dmp = _interopDefault(require('diff-match-patch'));
var chalk = _interopDefault(require('chalk'));
var chai = _interopDefault(require('chai'));

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
  return typeof obj;
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
};

var _typeof$1 = typeof Symbol === "function" && _typeof(Symbol.iterator) === "symbol" ? function (obj) {
  return typeof obj === 'undefined' ? 'undefined' : _typeof(obj);
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj === 'undefined' ? 'undefined' : _typeof(obj);
};

var classCallCheck$1 = function classCallCheck$$1(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var createClass$1 = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

var get$1 = function get$$1(object, property, receiver) {
  if (object === null) object = Function.prototype;
  var desc = Object.getOwnPropertyDescriptor(object, property);

  if (desc === undefined) {
    var parent = Object.getPrototypeOf(object);

    if (parent === null) {
      return undefined;
    } else {
      return get$$1(parent, property, receiver);
    }
  } else if ("value" in desc) {
    return desc.value;
  } else {
    var getter = desc.get;

    if (getter === undefined) {
      return undefined;
    }

    return getter.call(receiver);
  }
};

var inherits$1 = function inherits$$1(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === 'undefined' ? 'undefined' : _typeof(superClass)));
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
};

var possibleConstructorReturn$1 = function possibleConstructorReturn$$1(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && ((typeof call === 'undefined' ? 'undefined' : _typeof(call)) === "object" || typeof call === "function") ? call : self;
};

var slicedToArray$1 = function () {
  function sliceIterator(arr, i) {
    var _arr = [];
    var _n = true;
    var _d = false;
    var _e = undefined;

    try {
      for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
        _arr.push(_s.value);

        if (i && _arr.length === i) break;
      }
    } catch (err) {
      _d = true;
      _e = err;
    } finally {
      try {
        if (!_n && _i["return"]) _i["return"]();
      } finally {
        if (_d) throw _e;
      }
    }

    return _arr;
  }

  return function (arr, i) {
    if (Array.isArray(arr)) {
      return arr;
    } else if (Symbol.iterator in Object(arr)) {
      return sliceIterator(arr, i);
    } else {
      throw new TypeError("Invalid attempt to destructure non-iterable instance");
    }
  };
}();

var toConsumableArray$1 = function toConsumableArray$$1(arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {
      arr2[i] = arr[i];
    }return arr2;
  } else {
    return Array.from(arr);
  }
};

var cov_jt8w6jjyo = function () {
  var path = '/Users/wangjie/project/plugins/jsondiffpatch/src/processor.js',
      hash = '1f15a94761977ae7c100a1bf24f7323d6381122b',
      Function = function () {}.constructor,
      global = new Function('return this')(),
      gcv = '__coverage__',
      coverageData = { path: '/Users/wangjie/project/plugins/jsondiffpatch/src/processor.js', statementMap: { '0': { start: { line: 1, column: 16 }, end: { line: 71, column: 3 } }, '1': { start: { line: 3, column: 4 }, end: { line: 3, column: 49 } }, '2': { start: { line: 5, column: 4 }, end: { line: 5, column: 37 } }, '3': { start: { line: 6, column: 4 }, end: { line: 6, column: 20 } }, '4': { start: { line: 9, column: 2 }, end: { line: 69, column: 6 } }, '5': { start: { line: 12, column: 6 }, end: { line: 14, column: 7 } }, '6': { start: { line: 13, column: 8 }, end: { line: 13, column: 36 } }, '7': { start: { line: 15, column: 6 }, end: { line: 15, column: 30 } }, '8': { start: { line: 20, column: 17 }, end: { line: 20, column: 24 } }, '9': { start: { line: 21, column: 6 }, end: { line: 27, column: 7 } }, '10': { start: { line: 22, column: 8 }, end: { line: 26, column: 9 } }, '11': { start: { line: 23, column: 10 }, end: { line: 23, column: 34 } }, '12': { start: { line: 25, column: 10 }, end: { line: 25, column: 34 } }, '13': { start: { line: 28, column: 6 }, end: { line: 34, column: 7 } }, '14': { start: { line: 29, column: 8 }, end: { line: 29, column: 20 } }, '15': { start: { line: 30, column: 8 }, end: { line: 32, column: 9 } }, '16': { start: { line: 31, column: 10 }, end: { line: 31, column: 22 } }, '17': { start: { line: 33, column: 8 }, end: { line: 33, column: 37 } }, '18': { start: { line: 35, column: 6 }, end: { line: 35, column: 28 } }, '19': { start: { line: 36, column: 6 }, end: { line: 36, column: 18 } }, '20': { start: { line: 41, column: 20 }, end: { line: 41, column: 25 } }, '21': { start: { line: 42, column: 6 }, end: { line: 42, column: 39 } }, '22': { start: { line: 43, column: 21 }, end: { line: 43, column: 52 } }, '23': { start: { line: 44, column: 21 }, end: { line: 44, column: 27 } }, '24': { start: { line: 45, column: 24 }, end: { line: 45, column: 30 } }, '25': { start: { line: 46, column: 6 }, end: { line: 66, column: 7 } }, '26': { start: { line: 47, column: 8 }, end: { line: 51, column: 9 } }, '27': { start: { line: 49, column: 10 }, end: { line: 49, column: 51 } }, '28': { start: { line: 50, column: 10 }, end: { line: 50, column: 43 } }, '29': { start: { line: 53, column: 8 }, end: { line: 55, column: 9 } }, '30': { start: { line: 54, column: 10 }, end: { line: 54, column: 41 } }, '31': { start: { line: 56, column: 8 }, end: { line: 56, column: 34 } }, '32': { start: { line: 57, column: 8 }, end: { line: 57, column: 30 } }, '33': { start: { line: 58, column: 8 }, end: { line: 58, column: 28 } }, '34': { start: { line: 59, column: 8 }, end: { line: 59, column: 24 } }, '35': { start: { line: 60, column: 8 }, end: { line: 65, column: 9 } }, '36': { start: { line: 61, column: 10 }, end: { line: 64, column: 11 } }, '37': { start: { line: 62, column: 12 }, end: { line: 62, column: 35 } }, '38': { start: { line: 63, column: 12 }, end: { line: 63, column: 72 } }, '39': { start: { line: 67, column: 6 }, end: { line: 67, column: 60 } }, '40': { start: { line: 70, column: 2 }, end: { line: 70, column: 19 } } }, fnMap: { '0': { name: '(anonymous_0)', decl: { start: { line: 1, column: 16 }, end: { line: 1, column: 17 } }, loc: { start: { line: 1, column: 28 }, end: { line: 71, column: 1 } }, line: 1 }, '1': { name: 'Processor', decl: { start: { line: 2, column: 11 }, end: { line: 2, column: 20 } }, loc: { start: { line: 2, column: 30 }, end: { line: 7, column: 3 } }, line: 2 }, '2': { name: 'options', decl: { start: { line: 11, column: 20 }, end: { line: 11, column: 27 } }, loc: { start: { line: 11, column: 38 }, end: { line: 16, column: 5 } }, line: 11 }, '3': { name: 'pipe', decl: { start: { line: 19, column: 20 }, end: { line: 19, column: 24 } }, loc: { start: { line: 19, column: 40 }, end: { line: 37, column: 5 } }, line: 19 }, '4': { name: 'process', decl: { start: { line: 40, column: 20 }, end: { line: 40, column: 27 } }, loc: { start: { line: 40, column: 41 }, end: { line: 68, column: 5 } }, line: 40 } }, branchMap: { '0': { loc: { start: { line: 5, column: 23 }, end: { line: 5, column: 36 } }, type: 'binary-expr', locations: [{ start: { line: 5, column: 23 }, end: { line: 5, column: 30 } }, { start: { line: 5, column: 34 }, end: { line: 5, column: 36 } }], line: 5 }, '1': { loc: { start: { line: 12, column: 6 }, end: { line: 14, column: 7 } }, type: 'if', locations: [{ start: { line: 12, column: 6 }, end: { line: 14, column: 7 } }, { start: { line: 12, column: 6 }, end: { line: 14, column: 7 } }], line: 12 }, '2': { loc: { start: { line: 21, column: 6 }, end: { line: 27, column: 7 } }, type: 'if', locations: [{ start: { line: 21, column: 6 }, end: { line: 27, column: 7 } }, { start: { line: 21, column: 6 }, end: { line: 27, column: 7 } }], line: 21 }, '3': { loc: { start: { line: 22, column: 8 }, end: { line: 26, column: 9 } }, type: 'if', locations: [{ start: { line: 22, column: 8 }, end: { line: 26, column: 9 } }, { start: { line: 22, column: 8 }, end: { line: 26, column: 9 } }], line: 22 }, '4': { loc: { start: { line: 28, column: 6 }, end: { line: 34, column: 7 } }, type: 'if', locations: [{ start: { line: 28, column: 6 }, end: { line: 34, column: 7 } }, { start: { line: 28, column: 6 }, end: { line: 34, column: 7 } }], line: 28 }, '5': { loc: { start: { line: 28, column: 10 }, end: { line: 28, column: 27 } }, type: 'binary-expr', locations: [{ start: { line: 28, column: 10 }, end: { line: 28, column: 14 } }, { start: { line: 28, column: 18 }, end: { line: 28, column: 27 } }], line: 28 }, '6': { loc: { start: { line: 30, column: 8 }, end: { line: 32, column: 9 } }, type: 'if', locations: [{ start: { line: 30, column: 8 }, end: { line: 32, column: 9 } }, { start: { line: 30, column: 8 }, end: { line: 32, column: 9 } }], line: 30 }, '7': { loc: { start: { line: 43, column: 21 }, end: { line: 43, column: 52 } }, type: 'binary-expr', locations: [{ start: { line: 43, column: 21 }, end: { line: 43, column: 25 } }, { start: { line: 43, column: 29 }, end: { line: 43, column: 39 } }, { start: { line: 43, column: 43 }, end: { line: 43, column: 52 } }], line: 43 }, '8': { loc: { start: { line: 47, column: 8 }, end: { line: 51, column: 9 } }, type: 'if', locations: [{ start: { line: 47, column: 8 }, end: { line: 51, column: 9 } }, { start: { line: 47, column: 8 }, end: { line: 51, column: 9 } }], line: 47 }, '9': { loc: { start: { line: 53, column: 8 }, end: { line: 55, column: 9 } }, type: 'if', locations: [{ start: { line: 53, column: 8 }, end: { line: 55, column: 9 } }, { start: { line: 53, column: 8 }, end: { line: 55, column: 9 } }], line: 53 }, '10': { loc: { start: { line: 60, column: 8 }, end: { line: 65, column: 9 } }, type: 'if', locations: [{ start: { line: 60, column: 8 }, end: { line: 65, column: 9 } }, { start: { line: 60, column: 8 }, end: { line: 65, column: 9 } }], line: 60 }, '11': { loc: { start: { line: 61, column: 10 }, end: { line: 64, column: 11 } }, type: 'if', locations: [{ start: { line: 61, column: 10 }, end: { line: 64, column: 11 } }, { start: { line: 61, column: 10 }, end: { line: 64, column: 11 } }], line: 61 }, '12': { loc: { start: { line: 63, column: 23 }, end: { line: 63, column: 71 } }, type: 'binary-expr', locations: [{ start: { line: 63, column: 23 }, end: { line: 63, column: 43 } }, { start: { line: 63, column: 47 }, end: { line: 63, column: 59 } }, { start: { line: 63, column: 63 }, end: { line: 63, column: 71 } }], line: 63 }, '13': { loc: { start: { line: 67, column: 13 }, end: { line: 67, column: 59 } }, type: 'cond-expr', locations: [{ start: { line: 67, column: 33 }, end: { line: 67, column: 47 } }, { start: { line: 67, column: 50 }, end: { line: 67, column: 59 } }], line: 67 } }, s: { '0': 0, '1': 0, '2': 0, '3': 0, '4': 0, '5': 0, '6': 0, '7': 0, '8': 0, '9': 0, '10': 0, '11': 0, '12': 0, '13': 0, '14': 0, '15': 0, '16': 0, '17': 0, '18': 0, '19': 0, '20': 0, '21': 0, '22': 0, '23': 0, '24': 0, '25': 0, '26': 0, '27': 0, '28': 0, '29': 0, '30': 0, '31': 0, '32': 0, '33': 0, '34': 0, '35': 0, '36': 0, '37': 0, '38': 0, '39': 0, '40': 0 }, f: { '0': 0, '1': 0, '2': 0, '3': 0, '4': 0 }, b: { '0': [0, 0], '1': [0, 0], '2': [0, 0], '3': [0, 0], '4': [0, 0], '5': [0, 0], '6': [0, 0], '7': [0, 0, 0], '8': [0, 0], '9': [0, 0], '10': [0, 0], '11': [0, 0], '12': [0, 0, 0], '13': [0, 0] }, _coverageSchema: '332fd63041d2c1bcb487cc26dd0d5f7d97098a6c' },
      coverage = global[gcv] || (global[gcv] = {});if (coverage[path] && coverage[path].hash === hash) {
    return coverage[path];
  }coverageData.hash = hash;return coverage[path] = coverageData;
}();var Processor = (cov_jt8w6jjyo.s[0]++, function () {
  cov_jt8w6jjyo.f[0]++;function Processor(options) {
    cov_jt8w6jjyo.f[1]++;cov_jt8w6jjyo.s[1]++;classCallCheck$1(this, Processor);cov_jt8w6jjyo.s[2]++;this.selfOptions = (cov_jt8w6jjyo.b[0][0]++, options) || (cov_jt8w6jjyo.b[0][1]++, {});cov_jt8w6jjyo.s[3]++;this.pipes = {};
  }cov_jt8w6jjyo.s[4]++;createClass$1(Processor, [{ key: 'options', value: function options(_options) {
      cov_jt8w6jjyo.f[2]++;cov_jt8w6jjyo.s[5]++;if (_options) {
        cov_jt8w6jjyo.b[1][0]++;cov_jt8w6jjyo.s[6]++;this.selfOptions = _options;
      } else {
        cov_jt8w6jjyo.b[1][1]++;
      }cov_jt8w6jjyo.s[7]++;return this.selfOptions;
    } }, { key: 'pipe', value: function pipe(name, pipeArg) {
      cov_jt8w6jjyo.f[3]++;var pipe = (cov_jt8w6jjyo.s[8]++, pipeArg);cov_jt8w6jjyo.s[9]++;if (typeof name === 'string') {
        cov_jt8w6jjyo.b[2][0]++;cov_jt8w6jjyo.s[10]++;if (typeof pipe === 'undefined') {
          cov_jt8w6jjyo.b[3][0]++;cov_jt8w6jjyo.s[11]++;return this.pipes[name];
        } else {
          cov_jt8w6jjyo.b[3][1]++;cov_jt8w6jjyo.s[12]++;this.pipes[name] = pipe;
        }
      } else {
        cov_jt8w6jjyo.b[2][1]++;
      }cov_jt8w6jjyo.s[13]++;if ((cov_jt8w6jjyo.b[5][0]++, name) && (cov_jt8w6jjyo.b[5][1]++, name.name)) {
        cov_jt8w6jjyo.b[4][0]++;cov_jt8w6jjyo.s[14]++;pipe = name;cov_jt8w6jjyo.s[15]++;if (pipe.processor === this) {
          cov_jt8w6jjyo.b[6][0]++;cov_jt8w6jjyo.s[16]++;return pipe;
        } else {
          cov_jt8w6jjyo.b[6][1]++;
        }cov_jt8w6jjyo.s[17]++;this.pipes[pipe.name] = pipe;
      } else {
        cov_jt8w6jjyo.b[4][1]++;
      }cov_jt8w6jjyo.s[18]++;pipe.processor = this;cov_jt8w6jjyo.s[19]++;return pipe;
    } }, { key: 'process', value: function process(input, pipe) {
      cov_jt8w6jjyo.f[4]++;var context = (cov_jt8w6jjyo.s[20]++, input);cov_jt8w6jjyo.s[21]++;context.options = this.options();var nextPipe = (cov_jt8w6jjyo.s[22]++, (cov_jt8w6jjyo.b[7][0]++, pipe) || (cov_jt8w6jjyo.b[7][1]++, input.pipe) || (cov_jt8w6jjyo.b[7][2]++, 'default'));var lastPipe = (cov_jt8w6jjyo.s[23]++, void 0);var lastContext = (cov_jt8w6jjyo.s[24]++, void 0);cov_jt8w6jjyo.s[25]++;while (nextPipe) {
        cov_jt8w6jjyo.s[26]++;if (typeof context.nextAfterChildren !== 'undefined') {
          cov_jt8w6jjyo.b[8][0]++;cov_jt8w6jjyo.s[27]++;context.next = context.nextAfterChildren;cov_jt8w6jjyo.s[28]++;context.nextAfterChildren = null;
        } else {
          cov_jt8w6jjyo.b[8][1]++;
        }cov_jt8w6jjyo.s[29]++;if (typeof nextPipe === 'string') {
          cov_jt8w6jjyo.b[9][0]++;cov_jt8w6jjyo.s[30]++;nextPipe = this.pipe(nextPipe);
        } else {
          cov_jt8w6jjyo.b[9][1]++;
        }cov_jt8w6jjyo.s[31]++;nextPipe.process(context);cov_jt8w6jjyo.s[32]++;lastContext = context;cov_jt8w6jjyo.s[33]++;lastPipe = nextPipe;cov_jt8w6jjyo.s[34]++;nextPipe = null;cov_jt8w6jjyo.s[35]++;if (context) {
          cov_jt8w6jjyo.b[10][0]++;cov_jt8w6jjyo.s[36]++;if (context.next) {
            cov_jt8w6jjyo.b[11][0]++;cov_jt8w6jjyo.s[37]++;context = context.next;cov_jt8w6jjyo.s[38]++;nextPipe = (cov_jt8w6jjyo.b[12][0]++, lastContext.nextPipe) || (cov_jt8w6jjyo.b[12][1]++, context.pipe) || (cov_jt8w6jjyo.b[12][2]++, lastPipe);
          } else {
            cov_jt8w6jjyo.b[11][1]++;
          }
        } else {
          cov_jt8w6jjyo.b[10][1]++;
        }
      }cov_jt8w6jjyo.s[39]++;return context.hasResult ? (cov_jt8w6jjyo.b[13][0]++, context.result) : (cov_jt8w6jjyo.b[13][1]++, undefined);
    } }]);cov_jt8w6jjyo.s[40]++;return Processor;
}());

var cov_1wekeui06n = function () {
  var path = '/Users/wangjie/project/plugins/jsondiffpatch/src/pipe.js',
      hash = '518a9bd1b58d5e32ee327fc88cc1218f618ebf1e',
      Function = function () {}.constructor,
      global = new Function('return this')(),
      gcv = '__coverage__',
      coverageData = { path: '/Users/wangjie/project/plugins/jsondiffpatch/src/pipe.js', statementMap: { '0': { start: { line: 1, column: 11 }, end: { line: 147, column: 3 } }, '1': { start: { line: 3, column: 4 }, end: { line: 3, column: 44 } }, '2': { start: { line: 5, column: 4 }, end: { line: 5, column: 21 } }, '3': { start: { line: 6, column: 4 }, end: { line: 6, column: 22 } }, '4': { start: { line: 9, column: 2 }, end: { line: 145, column: 6 } }, '5': { start: { line: 12, column: 6 }, end: { line: 14, column: 7 } }, '6': { start: { line: 13, column: 8 }, end: { line: 13, column: 72 } }, '7': { start: { line: 15, column: 18 }, end: { line: 15, column: 28 } }, '8': { start: { line: 16, column: 19 }, end: { line: 16, column: 38 } }, '9': { start: { line: 17, column: 20 }, end: { line: 17, column: 25 } }, '10': { start: { line: 18, column: 6 }, end: { line: 28, column: 7 } }, '11': { start: { line: 19, column: 21 }, end: { line: 19, column: 40 } }, '12': { start: { line: 20, column: 8 }, end: { line: 22, column: 9 } }, '13': { start: { line: 21, column: 10 }, end: { line: 21, column: 51 } }, '14': { start: { line: 23, column: 8 }, end: { line: 23, column: 24 } }, '15': { start: { line: 24, column: 8 }, end: { line: 27, column: 9 } }, '16': { start: { line: 25, column: 10 }, end: { line: 25, column: 34 } }, '17': { start: { line: 26, column: 10 }, end: { line: 26, column: 16 } }, '18': { start: { line: 29, column: 6 }, end: { line: 31, column: 7 } }, '19': { start: { line: 30, column: 8 }, end: { line: 30, column: 34 } }, '20': { start: { line: 36, column: 6 }, end: { line: 36, column: 68 } }, '21': { start: { line: 43, column: 6 }, end: { line: 43, column: 64 } }, '22': { start: { line: 44, column: 6 }, end: { line: 44, column: 18 } }, '23': { start: { line: 51, column: 6 }, end: { line: 51, column: 69 } }, '24': { start: { line: 52, column: 6 }, end: { line: 52, column: 18 } }, '25': { start: { line: 57, column: 6 }, end: { line: 59, column: 7 } }, '26': { start: { line: 58, column: 8 }, end: { line: 58, column: 53 } }, '27': { start: { line: 60, column: 6 }, end: { line: 65, column: 7 } }, '28': { start: { line: 61, column: 21 }, end: { line: 61, column: 40 } }, '29': { start: { line: 62, column: 8 }, end: { line: 64, column: 9 } }, '30': { start: { line: 63, column: 10 }, end: { line: 63, column: 23 } }, '31': { start: { line: 66, column: 6 }, end: { line: 66, column: 57 } }, '32': { start: { line: 71, column: 6 }, end: { line: 73, column: 9 } }, '33': { start: { line: 72, column: 8 }, end: { line: 72, column: 28 } }, '34': { start: { line: 78, column: 18 }, end: { line: 78, column: 42 } }, '35': { start: { line: 79, column: 19 }, end: { line: 79, column: 59 } }, '36': { start: { line: 80, column: 6 }, end: { line: 82, column: 7 } }, '37': { start: { line: 81, column: 8 }, end: { line: 81, column: 48 } }, '38': { start: { line: 83, column: 6 }, end: { line: 83, column: 35 } }, '39': { start: { line: 84, column: 6 }, end: { line: 84, column: 57 } }, '40': { start: { line: 85, column: 6 }, end: { line: 85, column: 18 } }, '41': { start: { line: 90, column: 18 }, end: { line: 90, column: 42 } }, '42': { start: { line: 91, column: 19 }, end: { line: 91, column: 59 } }, '43': { start: { line: 92, column: 6 }, end: { line: 94, column: 7 } }, '44': { start: { line: 93, column: 8 }, end: { line: 93, column: 48 } }, '45': { start: { line: 95, column: 6 }, end: { line: 95, column: 31 } }, '46': { start: { line: 96, column: 6 }, end: { line: 96, column: 57 } }, '47': { start: { line: 97, column: 6 }, end: { line: 97, column: 18 } }, '48': { start: { line: 102, column: 18 }, end: { line: 102, column: 42 } }, '49': { start: { line: 103, column: 19 }, end: { line: 103, column: 59 } }, '50': { start: { line: 104, column: 6 }, end: { line: 106, column: 7 } }, '51': { start: { line: 105, column: 8 }, end: { line: 105, column: 48 } }, '52': { start: { line: 107, column: 6 }, end: { line: 107, column: 31 } }, '53': { start: { line: 108, column: 6 }, end: { line: 108, column: 57 } }, '54': { start: { line: 109, column: 6 }, end: { line: 109, column: 18 } }, '55': { start: { line: 114, column: 18 }, end: { line: 114, column: 42 } }, '56': { start: { line: 115, column: 6 }, end: { line: 115, column: 36 } }, '57': { start: { line: 116, column: 6 }, end: { line: 116, column: 18 } }, '58': { start: { line: 121, column: 6 }, end: { line: 121, column: 30 } }, '59': { start: { line: 122, column: 6 }, end: { line: 122, column: 18 } }, '60': { start: { line: 127, column: 6 }, end: { line: 130, column: 7 } }, '61': { start: { line: 128, column: 8 }, end: { line: 128, column: 32 } }, '62': { start: { line: 129, column: 8 }, end: { line: 129, column: 15 } }, '63': { start: { line: 131, column: 6 }, end: { line: 133, column: 7 } }, '64': { start: { line: 132, column: 8 }, end: { line: 132, column: 15 } }, '65': { start: { line: 134, column: 17 }, end: { line: 134, column: 21 } }, '66': { start: { line: 135, column: 6 }, end: { line: 142, column: 8 } }, '67': { start: { line: 136, column: 8 }, end: { line: 141, column: 9 } }, '68': { start: { line: 137, column: 10 }, end: { line: 137, column: 31 } }, '69': { start: { line: 138, column: 22 }, end: { line: 138, column: 54 } }, '70': { start: { line: 139, column: 10 }, end: { line: 139, column: 32 } }, '71': { start: { line: 140, column: 10 }, end: { line: 140, column: 22 } }, '72': { start: { line: 143, column: 6 }, end: { line: 143, column: 18 } }, '73': { start: { line: 146, column: 2 }, end: { line: 146, column: 14 } } }, fnMap: { '0': { name: '(anonymous_0)', decl: { start: { line: 1, column: 11 }, end: { line: 1, column: 12 } }, loc: { start: { line: 1, column: 23 }, end: { line: 147, column: 1 } }, line: 1 }, '1': { name: 'Pipe', decl: { start: { line: 2, column: 11 }, end: { line: 2, column: 15 } }, loc: { start: { line: 2, column: 22 }, end: { line: 7, column: 3 } }, line: 2 }, '2': { name: 'process', decl: { start: { line: 11, column: 20 }, end: { line: 11, column: 27 } }, loc: { start: { line: 11, column: 35 }, end: { line: 32, column: 5 } }, line: 11 }, '3': { name: 'log', decl: { start: { line: 35, column: 20 }, end: { line: 35, column: 23 } }, loc: { start: { line: 35, column: 29 }, end: { line: 37, column: 5 } }, line: 35 }, '4': { name: 'append', decl: { start: { line: 40, column: 20 }, end: { line: 40, column: 26 } }, loc: { start: { line: 40, column: 29 }, end: { line: 45, column: 5 } }, line: 40 }, '5': { name: 'prepend', decl: { start: { line: 48, column: 20 }, end: { line: 48, column: 27 } }, loc: { start: { line: 48, column: 30 }, end: { line: 53, column: 5 } }, line: 48 }, '6': { name: 'indexOf', decl: { start: { line: 56, column: 20 }, end: { line: 56, column: 27 } }, loc: { start: { line: 56, column: 40 }, end: { line: 67, column: 5 } }, line: 56 }, '7': { name: 'list', decl: { start: { line: 70, column: 20 }, end: { line: 70, column: 24 } }, loc: { start: { line: 70, column: 27 }, end: { line: 74, column: 5 } }, line: 70 }, '8': { name: '(anonymous_8)', decl: { start: { line: 71, column: 30 }, end: { line: 71, column: 31 } }, loc: { start: { line: 71, column: 43 }, end: { line: 73, column: 7 } }, line: 71 }, '9': { name: 'after', decl: { start: { line: 77, column: 20 }, end: { line: 77, column: 25 } }, loc: { start: { line: 77, column: 38 }, end: { line: 86, column: 5 } }, line: 77 }, '10': { name: 'before', decl: { start: { line: 89, column: 20 }, end: { line: 89, column: 26 } }, loc: { start: { line: 89, column: 39 }, end: { line: 98, column: 5 } }, line: 89 }, '11': { name: 'replace', decl: { start: { line: 101, column: 20 }, end: { line: 101, column: 27 } }, loc: { start: { line: 101, column: 40 }, end: { line: 110, column: 5 } }, line: 101 }, '12': { name: 'remove', decl: { start: { line: 113, column: 20 }, end: { line: 113, column: 26 } }, loc: { start: { line: 113, column: 39 }, end: { line: 117, column: 5 } }, line: 113 }, '13': { name: 'clear', decl: { start: { line: 120, column: 20 }, end: { line: 120, column: 25 } }, loc: { start: { line: 120, column: 28 }, end: { line: 123, column: 5 } }, line: 120 }, '14': { name: 'shouldHaveResult', decl: { start: { line: 126, column: 20 }, end: { line: 126, column: 36 } }, loc: { start: { line: 126, column: 45 }, end: { line: 144, column: 5 } }, line: 126 }, '15': { name: '(anonymous_15)', decl: { start: { line: 135, column: 25 }, end: { line: 135, column: 26 } }, loc: { start: { line: 135, column: 44 }, end: { line: 142, column: 7 } }, line: 135 } }, branchMap: { '0': { loc: { start: { line: 12, column: 6 }, end: { line: 14, column: 7 } }, type: 'if', locations: [{ start: { line: 12, column: 6 }, end: { line: 14, column: 7 } }, { start: { line: 12, column: 6 }, end: { line: 14, column: 7 } }], line: 12 }, '1': { loc: { start: { line: 20, column: 8 }, end: { line: 22, column: 9 } }, type: 'if', locations: [{ start: { line: 20, column: 8 }, end: { line: 22, column: 9 } }, { start: { line: 20, column: 8 }, end: { line: 22, column: 9 } }], line: 20 }, '2': { loc: { start: { line: 24, column: 8 }, end: { line: 27, column: 9 } }, type: 'if', locations: [{ start: { line: 24, column: 8 }, end: { line: 27, column: 9 } }, { start: { line: 24, column: 8 }, end: { line: 27, column: 9 } }], line: 24 }, '3': { loc: { start: { line: 24, column: 12 }, end: { line: 24, column: 121 } }, type: 'binary-expr', locations: [{ start: { line: 24, column: 12 }, end: { line: 24, column: 102 } }, { start: { line: 24, column: 106 }, end: { line: 24, column: 121 } }], line: 24 }, '4': { loc: { start: { line: 24, column: 13 }, end: { line: 24, column: 88 } }, type: 'cond-expr', locations: [{ start: { line: 24, column: 46 }, end: { line: 24, column: 57 } }, { start: { line: 24, column: 60 }, end: { line: 24, column: 88 } }], line: 24 }, '5': { loc: { start: { line: 29, column: 6 }, end: { line: 31, column: 7 } }, type: 'if', locations: [{ start: { line: 29, column: 6 }, end: { line: 31, column: 7 } }, { start: { line: 29, column: 6 }, end: { line: 31, column: 7 } }], line: 29 }, '6': { loc: { start: { line: 29, column: 10 }, end: { line: 29, column: 43 } }, type: 'binary-expr', locations: [{ start: { line: 29, column: 10 }, end: { line: 29, column: 23 } }, { start: { line: 29, column: 27 }, end: { line: 29, column: 43 } }], line: 29 }, '7': { loc: { start: { line: 57, column: 6 }, end: { line: 59, column: 7 } }, type: 'if', locations: [{ start: { line: 57, column: 6 }, end: { line: 59, column: 7 } }, { start: { line: 57, column: 6 }, end: { line: 59, column: 7 } }], line: 57 }, '8': { loc: { start: { line: 62, column: 8 }, end: { line: 64, column: 9 } }, type: 'if', locations: [{ start: { line: 62, column: 8 }, end: { line: 64, column: 9 } }, { start: { line: 62, column: 8 }, end: { line: 64, column: 9 } }], line: 62 }, '9': { loc: { start: { line: 80, column: 6 }, end: { line: 82, column: 7 } }, type: 'if', locations: [{ start: { line: 80, column: 6 }, end: { line: 82, column: 7 } }, { start: { line: 80, column: 6 }, end: { line: 82, column: 7 } }], line: 80 }, '10': { loc: { start: { line: 92, column: 6 }, end: { line: 94, column: 7 } }, type: 'if', locations: [{ start: { line: 92, column: 6 }, end: { line: 94, column: 7 } }, { start: { line: 92, column: 6 }, end: { line: 94, column: 7 } }], line: 92 }, '11': { loc: { start: { line: 104, column: 6 }, end: { line: 106, column: 7 } }, type: 'if', locations: [{ start: { line: 104, column: 6 }, end: { line: 106, column: 7 } }, { start: { line: 104, column: 6 }, end: { line: 106, column: 7 } }], line: 104 }, '12': { loc: { start: { line: 127, column: 6 }, end: { line: 130, column: 7 } }, type: 'if', locations: [{ start: { line: 127, column: 6 }, end: { line: 130, column: 7 } }, { start: { line: 127, column: 6 }, end: { line: 130, column: 7 } }], line: 127 }, '13': { loc: { start: { line: 131, column: 6 }, end: { line: 133, column: 7 } }, type: 'if', locations: [{ start: { line: 131, column: 6 }, end: { line: 133, column: 7 } }, { start: { line: 131, column: 6 }, end: { line: 133, column: 7 } }], line: 131 }, '14': { loc: { start: { line: 136, column: 8 }, end: { line: 141, column: 9 } }, type: 'if', locations: [{ start: { line: 136, column: 8 }, end: { line: 141, column: 9 } }, { start: { line: 136, column: 8 }, end: { line: 141, column: 9 } }], line: 136 } }, s: { '0': 0, '1': 0, '2': 0, '3': 0, '4': 0, '5': 0, '6': 0, '7': 0, '8': 0, '9': 0, '10': 0, '11': 0, '12': 0, '13': 0, '14': 0, '15': 0, '16': 0, '17': 0, '18': 0, '19': 0, '20': 0, '21': 0, '22': 0, '23': 0, '24': 0, '25': 0, '26': 0, '27': 0, '28': 0, '29': 0, '30': 0, '31': 0, '32': 0, '33': 0, '34': 0, '35': 0, '36': 0, '37': 0, '38': 0, '39': 0, '40': 0, '41': 0, '42': 0, '43': 0, '44': 0, '45': 0, '46': 0, '47': 0, '48': 0, '49': 0, '50': 0, '51': 0, '52': 0, '53': 0, '54': 0, '55': 0, '56': 0, '57': 0, '58': 0, '59': 0, '60': 0, '61': 0, '62': 0, '63': 0, '64': 0, '65': 0, '66': 0, '67': 0, '68': 0, '69': 0, '70': 0, '71': 0, '72': 0, '73': 0 }, f: { '0': 0, '1': 0, '2': 0, '3': 0, '4': 0, '5': 0, '6': 0, '7': 0, '8': 0, '9': 0, '10': 0, '11': 0, '12': 0, '13': 0, '14': 0, '15': 0 }, b: { '0': [0, 0], '1': [0, 0], '2': [0, 0], '3': [0, 0], '4': [0, 0], '5': [0, 0], '6': [0, 0], '7': [0, 0], '8': [0, 0], '9': [0, 0], '10': [0, 0], '11': [0, 0], '12': [0, 0], '13': [0, 0], '14': [0, 0] }, _coverageSchema: '332fd63041d2c1bcb487cc26dd0d5f7d97098a6c' },
      coverage = global[gcv] || (global[gcv] = {});if (coverage[path] && coverage[path].hash === hash) {
    return coverage[path];
  }coverageData.hash = hash;return coverage[path] = coverageData;
}();var Pipe = (cov_1wekeui06n.s[0]++, function () {
  cov_1wekeui06n.f[0]++;function Pipe(name) {
    cov_1wekeui06n.f[1]++;cov_1wekeui06n.s[1]++;classCallCheck$1(this, Pipe);cov_1wekeui06n.s[2]++;this.name = name;cov_1wekeui06n.s[3]++;this.filters = [];
  }cov_1wekeui06n.s[4]++;createClass$1(Pipe, [{ key: 'process', value: function process(input) {
      cov_1wekeui06n.f[2]++;cov_1wekeui06n.s[5]++;if (!this.processor) {
        cov_1wekeui06n.b[0][0]++;cov_1wekeui06n.s[6]++;throw new Error('add this pipe to a processor before using it');
      } else {
        cov_1wekeui06n.b[0][1]++;
      }var debug = (cov_1wekeui06n.s[7]++, this.debug);var length = (cov_1wekeui06n.s[8]++, this.filters.length);var context = (cov_1wekeui06n.s[9]++, input);cov_1wekeui06n.s[10]++;for (var index = 0; index < length; index++) {
        var filter = (cov_1wekeui06n.s[11]++, this.filters[index]);cov_1wekeui06n.s[12]++;if (debug) {
          cov_1wekeui06n.b[1][0]++;cov_1wekeui06n.s[13]++;this.log('filter: ' + filter.filterName);
        } else {
          cov_1wekeui06n.b[1][1]++;
        }cov_1wekeui06n.s[14]++;filter(context);cov_1wekeui06n.s[15]++;if ((cov_1wekeui06n.b[3][0]++, (typeof context === 'undefined' ? (cov_1wekeui06n.b[4][0]++, 'undefined') : (cov_1wekeui06n.b[4][1]++, _typeof$1(context))) === 'object') && (cov_1wekeui06n.b[3][1]++, context.exiting)) {
          cov_1wekeui06n.b[2][0]++;cov_1wekeui06n.s[16]++;context.exiting = false;cov_1wekeui06n.s[17]++;break;
        } else {
          cov_1wekeui06n.b[2][1]++;
        }
      }cov_1wekeui06n.s[18]++;if ((cov_1wekeui06n.b[6][0]++, !context.next) && (cov_1wekeui06n.b[6][1]++, this.resultCheck)) {
        cov_1wekeui06n.b[5][0]++;cov_1wekeui06n.s[19]++;this.resultCheck(context);
      } else {
        cov_1wekeui06n.b[5][1]++;
      }
    } }, { key: 'log', value: function log(msg) {
      cov_1wekeui06n.f[3]++;cov_1wekeui06n.s[20]++;console.log('[jsondiffpatch] ' + this.name + ' pipe, ' + msg);
    } }, { key: 'append', value: function append() {
      cov_1wekeui06n.f[4]++;var _filters;cov_1wekeui06n.s[21]++;(_filters = this.filters).push.apply(_filters, arguments);cov_1wekeui06n.s[22]++;return this;
    } }, { key: 'prepend', value: function prepend() {
      cov_1wekeui06n.f[5]++;var _filters2;cov_1wekeui06n.s[23]++;(_filters2 = this.filters).unshift.apply(_filters2, arguments);cov_1wekeui06n.s[24]++;return this;
    } }, { key: 'indexOf', value: function indexOf(filterName) {
      cov_1wekeui06n.f[6]++;cov_1wekeui06n.s[25]++;if (!filterName) {
        cov_1wekeui06n.b[7][0]++;cov_1wekeui06n.s[26]++;throw new Error('a filter name is required');
      } else {
        cov_1wekeui06n.b[7][1]++;
      }cov_1wekeui06n.s[27]++;for (var index = 0; index < this.filters.length; index++) {
        var filter = (cov_1wekeui06n.s[28]++, this.filters[index]);cov_1wekeui06n.s[29]++;if (filter.filterName === filterName) {
          cov_1wekeui06n.b[8][0]++;cov_1wekeui06n.s[30]++;return index;
        } else {
          cov_1wekeui06n.b[8][1]++;
        }
      }cov_1wekeui06n.s[31]++;throw new Error('filter not found: ' + filterName);
    } }, { key: 'list', value: function list() {
      cov_1wekeui06n.f[7]++;cov_1wekeui06n.s[32]++;return this.filters.map(function (f) {
        cov_1wekeui06n.f[8]++;cov_1wekeui06n.s[33]++;return f.filterName;
      });
    } }, { key: 'after', value: function after(filterName) {
      cov_1wekeui06n.f[9]++;var index = (cov_1wekeui06n.s[34]++, this.indexOf(filterName));var params = (cov_1wekeui06n.s[35]++, Array.prototype.slice.call(arguments, 1));cov_1wekeui06n.s[36]++;if (!params.length) {
        cov_1wekeui06n.b[9][0]++;cov_1wekeui06n.s[37]++;throw new Error('a filter is required');
      } else {
        cov_1wekeui06n.b[9][1]++;
      }cov_1wekeui06n.s[38]++;params.unshift(index + 1, 0);cov_1wekeui06n.s[39]++;Array.prototype.splice.apply(this.filters, params);cov_1wekeui06n.s[40]++;return this;
    } }, { key: 'before', value: function before(filterName) {
      cov_1wekeui06n.f[10]++;var index = (cov_1wekeui06n.s[41]++, this.indexOf(filterName));var params = (cov_1wekeui06n.s[42]++, Array.prototype.slice.call(arguments, 1));cov_1wekeui06n.s[43]++;if (!params.length) {
        cov_1wekeui06n.b[10][0]++;cov_1wekeui06n.s[44]++;throw new Error('a filter is required');
      } else {
        cov_1wekeui06n.b[10][1]++;
      }cov_1wekeui06n.s[45]++;params.unshift(index, 0);cov_1wekeui06n.s[46]++;Array.prototype.splice.apply(this.filters, params);cov_1wekeui06n.s[47]++;return this;
    } }, { key: 'replace', value: function replace(filterName) {
      cov_1wekeui06n.f[11]++;var index = (cov_1wekeui06n.s[48]++, this.indexOf(filterName));var params = (cov_1wekeui06n.s[49]++, Array.prototype.slice.call(arguments, 1));cov_1wekeui06n.s[50]++;if (!params.length) {
        cov_1wekeui06n.b[11][0]++;cov_1wekeui06n.s[51]++;throw new Error('a filter is required');
      } else {
        cov_1wekeui06n.b[11][1]++;
      }cov_1wekeui06n.s[52]++;params.unshift(index, 1);cov_1wekeui06n.s[53]++;Array.prototype.splice.apply(this.filters, params);cov_1wekeui06n.s[54]++;return this;
    } }, { key: 'remove', value: function remove(filterName) {
      cov_1wekeui06n.f[12]++;var index = (cov_1wekeui06n.s[55]++, this.indexOf(filterName));cov_1wekeui06n.s[56]++;this.filters.splice(index, 1);cov_1wekeui06n.s[57]++;return this;
    } }, { key: 'clear', value: function clear() {
      cov_1wekeui06n.f[13]++;cov_1wekeui06n.s[58]++;this.filters.length = 0;cov_1wekeui06n.s[59]++;return this;
    } }, { key: 'shouldHaveResult', value: function shouldHaveResult(should) {
      cov_1wekeui06n.f[14]++;cov_1wekeui06n.s[60]++;if (should === false) {
        cov_1wekeui06n.b[12][0]++;cov_1wekeui06n.s[61]++;this.resultCheck = null;cov_1wekeui06n.s[62]++;return;
      } else {
        cov_1wekeui06n.b[12][1]++;
      }cov_1wekeui06n.s[63]++;if (this.resultCheck) {
        cov_1wekeui06n.b[13][0]++;cov_1wekeui06n.s[64]++;return;
      } else {
        cov_1wekeui06n.b[13][1]++;
      }var pipe = (cov_1wekeui06n.s[65]++, this);cov_1wekeui06n.s[66]++;this.resultCheck = function (context) {
        cov_1wekeui06n.f[15]++;cov_1wekeui06n.s[67]++;if (!context.hasResult) {
          cov_1wekeui06n.b[14][0]++;cov_1wekeui06n.s[68]++;console.log(context);var error = (cov_1wekeui06n.s[69]++, new Error(pipe.name + ' failed'));cov_1wekeui06n.s[70]++;error.noResult = true;cov_1wekeui06n.s[71]++;throw error;
        } else {
          cov_1wekeui06n.b[14][1]++;
        }
      };cov_1wekeui06n.s[72]++;return this;
    } }]);cov_1wekeui06n.s[73]++;return Pipe;
}());

var cov_15c4ics9mf = function () {
  var path = '/Users/wangjie/project/plugins/jsondiffpatch/src/contexts/context.js',
      hash = '91e6178584ce01b06959d2d27d17cfd5cf536832',
      Function = function () {}.constructor,
      global = new Function('return this')(),
      gcv = '__coverage__',
      coverageData = { path: '/Users/wangjie/project/plugins/jsondiffpatch/src/contexts/context.js', statementMap: { '0': { start: { line: 3, column: 14 }, end: { line: 56, column: 3 } }, '1': { start: { line: 5, column: 4 }, end: { line: 5, column: 47 } }, '2': { start: { line: 8, column: 2 }, end: { line: 54, column: 6 } }, '3': { start: { line: 11, column: 6 }, end: { line: 11, column: 27 } }, '4': { start: { line: 12, column: 6 }, end: { line: 12, column: 28 } }, '5': { start: { line: 13, column: 6 }, end: { line: 13, column: 18 } }, '6': { start: { line: 18, column: 6 }, end: { line: 18, column: 26 } }, '7': { start: { line: 19, column: 6 }, end: { line: 19, column: 18 } }, '8': { start: { line: 24, column: 6 }, end: { line: 31, column: 7 } }, '9': { start: { line: 25, column: 8 }, end: { line: 25, column: 29 } }, '10': { start: { line: 27, column: 8 }, end: { line: 27, column: 25 } }, '11': { start: { line: 28, column: 8 }, end: { line: 30, column: 9 } }, '12': { start: { line: 29, column: 10 }, end: { line: 29, column: 31 } }, '13': { start: { line: 32, column: 6 }, end: { line: 32, column: 18 } }, '14': { start: { line: 37, column: 6 }, end: { line: 37, column: 26 } }, '15': { start: { line: 38, column: 6 }, end: { line: 40, column: 7 } }, '16': { start: { line: 39, column: 8 }, end: { line: 39, column: 31 } }, '17': { start: { line: 41, column: 6 }, end: { line: 41, column: 37 } }, '18': { start: { line: 42, column: 6 }, end: { line: 42, column: 52 } }, '19': { start: { line: 43, column: 6 }, end: { line: 50, column: 7 } }, '20': { start: { line: 44, column: 8 }, end: { line: 44, column: 32 } }, '21': { start: { line: 45, column: 8 }, end: { line: 45, column: 51 } }, '22': { start: { line: 46, column: 8 }, end: { line: 46, column: 26 } }, '23': { start: { line: 48, column: 8 }, end: { line: 48, column: 61 } }, '24': { start: { line: 49, column: 8 }, end: { line: 49, column: 34 } }, '25': { start: { line: 51, column: 6 }, end: { line: 51, column: 24 } }, '26': { start: { line: 52, column: 6 }, end: { line: 52, column: 18 } }, '27': { start: { line: 55, column: 2 }, end: { line: 55, column: 17 } } }, fnMap: { '0': { name: '(anonymous_0)', decl: { start: { line: 3, column: 14 }, end: { line: 3, column: 15 } }, loc: { start: { line: 3, column: 26 }, end: { line: 56, column: 1 } }, line: 3 }, '1': { name: 'Context', decl: { start: { line: 4, column: 11 }, end: { line: 4, column: 18 } }, loc: { start: { line: 4, column: 21 }, end: { line: 6, column: 3 } }, line: 4 }, '2': { name: 'setResult', decl: { start: { line: 10, column: 20 }, end: { line: 10, column: 29 } }, loc: { start: { line: 10, column: 38 }, end: { line: 14, column: 5 } }, line: 10 }, '3': { name: 'exit', decl: { start: { line: 17, column: 20 }, end: { line: 17, column: 24 } }, loc: { start: { line: 17, column: 27 }, end: { line: 20, column: 5 } }, line: 17 }, '4': { name: 'switchTo', decl: { start: { line: 23, column: 20 }, end: { line: 23, column: 28 } }, loc: { start: { line: 23, column: 41 }, end: { line: 33, column: 5 } }, line: 23 }, '5': { name: 'push', decl: { start: { line: 36, column: 20 }, end: { line: 36, column: 24 } }, loc: { start: { line: 36, column: 38 }, end: { line: 53, column: 5 } }, line: 36 } }, branchMap: { '0': { loc: { start: { line: 24, column: 6 }, end: { line: 31, column: 7 } }, type: 'if', locations: [{ start: { line: 24, column: 6 }, end: { line: 31, column: 7 } }, { start: { line: 24, column: 6 }, end: { line: 31, column: 7 } }], line: 24 }, '1': { loc: { start: { line: 24, column: 10 }, end: { line: 24, column: 58 } }, type: 'binary-expr', locations: [{ start: { line: 24, column: 10 }, end: { line: 24, column: 34 } }, { start: { line: 24, column: 38 }, end: { line: 24, column: 58 } }], line: 24 }, '2': { loc: { start: { line: 28, column: 8 }, end: { line: 30, column: 9 } }, type: 'if', locations: [{ start: { line: 28, column: 8 }, end: { line: 30, column: 9 } }, { start: { line: 28, column: 8 }, end: { line: 30, column: 9 } }], line: 28 }, '3': { loc: { start: { line: 38, column: 6 }, end: { line: 40, column: 7 } }, type: 'if', locations: [{ start: { line: 38, column: 6 }, end: { line: 40, column: 7 } }, { start: { line: 38, column: 6 }, end: { line: 40, column: 7 } }], line: 38 }, '4': { loc: { start: { line: 41, column: 19 }, end: { line: 41, column: 36 } }, type: 'binary-expr', locations: [{ start: { line: 41, column: 19 }, end: { line: 41, column: 28 } }, { start: { line: 41, column: 32 }, end: { line: 41, column: 36 } }], line: 41 }, '5': { loc: { start: { line: 42, column: 22 }, end: { line: 42, column: 51 } }, type: 'binary-expr', locations: [{ start: { line: 42, column: 22 }, end: { line: 42, column: 35 } }, { start: { line: 42, column: 39 }, end: { line: 42, column: 51 } }], line: 42 }, '6': { loc: { start: { line: 43, column: 6 }, end: { line: 50, column: 7 } }, type: 'if', locations: [{ start: { line: 43, column: 6 }, end: { line: 50, column: 7 } }, { start: { line: 43, column: 6 }, end: { line: 50, column: 7 } }], line: 43 }, '7': { loc: { start: { line: 45, column: 33 }, end: { line: 45, column: 50 } }, type: 'binary-expr', locations: [{ start: { line: 45, column: 33 }, end: { line: 45, column: 42 } }, { start: { line: 45, column: 46 }, end: { line: 45, column: 50 } }], line: 45 } }, s: { '0': 0, '1': 0, '2': 0, '3': 0, '4': 0, '5': 0, '6': 0, '7': 0, '8': 0, '9': 0, '10': 0, '11': 0, '12': 0, '13': 0, '14': 0, '15': 0, '16': 0, '17': 0, '18': 0, '19': 0, '20': 0, '21': 0, '22': 0, '23': 0, '24': 0, '25': 0, '26': 0, '27': 0 }, f: { '0': 0, '1': 0, '2': 0, '3': 0, '4': 0, '5': 0 }, b: { '0': [0, 0], '1': [0, 0], '2': [0, 0], '3': [0, 0], '4': [0, 0], '5': [0, 0], '6': [0, 0], '7': [0, 0] }, _coverageSchema: '332fd63041d2c1bcb487cc26dd0d5f7d97098a6c' },
      coverage = global[gcv] || (global[gcv] = {});if (coverage[path] && coverage[path].hash === hash) {
    return coverage[path];
  }coverageData.hash = hash;return coverage[path] = coverageData;
}();var Context = (cov_15c4ics9mf.s[0]++, function () {
  cov_15c4ics9mf.f[0]++;function Context() {
    cov_15c4ics9mf.f[1]++;cov_15c4ics9mf.s[1]++;classCallCheck$1(this, Context);
  }cov_15c4ics9mf.s[2]++;createClass$1(Context, [{ key: 'setResult', value: function setResult(result) {
      cov_15c4ics9mf.f[2]++;cov_15c4ics9mf.s[3]++;this.result = result;cov_15c4ics9mf.s[4]++;this.hasResult = true;cov_15c4ics9mf.s[5]++;return this;
    } }, { key: 'exit', value: function exit() {
      cov_15c4ics9mf.f[3]++;cov_15c4ics9mf.s[6]++;this.exiting = true;cov_15c4ics9mf.s[7]++;return this;
    } }, { key: 'switchTo', value: function switchTo(next, pipe) {
      cov_15c4ics9mf.f[4]++;cov_15c4ics9mf.s[8]++;if ((cov_15c4ics9mf.b[1][0]++, typeof next === 'string') || (cov_15c4ics9mf.b[1][1]++, next instanceof Pipe)) {
        cov_15c4ics9mf.b[0][0]++;cov_15c4ics9mf.s[9]++;this.nextPipe = next;
      } else {
        cov_15c4ics9mf.b[0][1]++;cov_15c4ics9mf.s[10]++;this.next = next;cov_15c4ics9mf.s[11]++;if (pipe) {
          cov_15c4ics9mf.b[2][0]++;cov_15c4ics9mf.s[12]++;this.nextPipe = pipe;
        } else {
          cov_15c4ics9mf.b[2][1]++;
        }
      }cov_15c4ics9mf.s[13]++;return this;
    } }, { key: 'push', value: function push(child, name) {
      cov_15c4ics9mf.f[5]++;cov_15c4ics9mf.s[14]++;child.parent = this;cov_15c4ics9mf.s[15]++;if (typeof name !== 'undefined') {
        cov_15c4ics9mf.b[3][0]++;cov_15c4ics9mf.s[16]++;child.childName = name;
      } else {
        cov_15c4ics9mf.b[3][1]++;
      }cov_15c4ics9mf.s[17]++;child.root = (cov_15c4ics9mf.b[4][0]++, this.root) || (cov_15c4ics9mf.b[4][1]++, this);cov_15c4ics9mf.s[18]++;child.options = (cov_15c4ics9mf.b[5][0]++, child.options) || (cov_15c4ics9mf.b[5][1]++, this.options);cov_15c4ics9mf.s[19]++;if (!this.children) {
        cov_15c4ics9mf.b[6][0]++;cov_15c4ics9mf.s[20]++;this.children = [child];cov_15c4ics9mf.s[21]++;this.nextAfterChildren = (cov_15c4ics9mf.b[7][0]++, this.next) || (cov_15c4ics9mf.b[7][1]++, null);cov_15c4ics9mf.s[22]++;this.next = child;
      } else {
        cov_15c4ics9mf.b[6][1]++;cov_15c4ics9mf.s[23]++;this.children[this.children.length - 1].next = child;cov_15c4ics9mf.s[24]++;this.children.push(child);
      }cov_15c4ics9mf.s[25]++;child.next = this;cov_15c4ics9mf.s[26]++;return this;
    } }]);cov_15c4ics9mf.s[27]++;return Context;
}());

var cov_g9g6gbabg = function () {
  var path = '/Users/wangjie/project/plugins/jsondiffpatch/src/clone.js',
      hash = '82665e1045e6f0a4cc805c2b281c99fde2fe1e03',
      Function = function () {}.constructor,
      global = new Function('return this')(),
      gcv = '__coverage__',
      coverageData = { path: '/Users/wangjie/project/plugins/jsondiffpatch/src/clone.js', statementMap: { '0': { start: { line: 1, column: 14 }, end: { line: 3, column: 1 } }, '1': { start: { line: 2, column: 2 }, end: { line: 2, column: 28 } }, '2': { start: { line: 6, column: 19 }, end: { line: 6, column: 61 } }, '3': { start: { line: 7, column: 2 }, end: { line: 7, column: 50 } }, '4': { start: { line: 11, column: 2 }, end: { line: 13, column: 3 } }, '5': { start: { line: 12, column: 4 }, end: { line: 12, column: 15 } }, '6': { start: { line: 14, column: 2 }, end: { line: 16, column: 3 } }, '7': { start: { line: 15, column: 4 }, end: { line: 15, column: 16 } }, '8': { start: { line: 17, column: 2 }, end: { line: 19, column: 3 } }, '9': { start: { line: 18, column: 4 }, end: { line: 18, column: 26 } }, '10': { start: { line: 20, column: 2 }, end: { line: 22, column: 3 } }, '11': { start: { line: 21, column: 4 }, end: { line: 21, column: 35 } }, '12': { start: { line: 23, column: 2 }, end: { line: 25, column: 3 } }, '13': { start: { line: 24, column: 4 }, end: { line: 24, column: 28 } }, '14': { start: { line: 26, column: 15 }, end: { line: 26, column: 17 } }, '15': { start: { line: 27, column: 2 }, end: { line: 31, column: 3 } }, '16': { start: { line: 28, column: 4 }, end: { line: 30, column: 5 } }, '17': { start: { line: 29, column: 6 }, end: { line: 29, column: 38 } }, '18': { start: { line: 32, column: 2 }, end: { line: 32, column: 16 } } }, fnMap: { '0': { name: '(anonymous_0)', decl: { start: { line: 1, column: 68 }, end: { line: 1, column: 69 } }, loc: { start: { line: 1, column: 81 }, end: { line: 3, column: 1 } }, line: 1 }, '1': { name: 'cloneRegExp', decl: { start: { line: 5, column: 9 }, end: { line: 5, column: 20 } }, loc: { start: { line: 5, column: 25 }, end: { line: 8, column: 1 } }, line: 5 }, '2': { name: 'clone', decl: { start: { line: 10, column: 24 }, end: { line: 10, column: 29 } }, loc: { start: { line: 10, column: 35 }, end: { line: 33, column: 1 } }, line: 10 } }, branchMap: { '0': { loc: { start: { line: 1, column: 14 }, end: { line: 3, column: 1 } }, type: 'cond-expr', locations: [{ start: { line: 1, column: 52 }, end: { line: 1, column: 65 } }, { start: { line: 1, column: 68 }, end: { line: 3, column: 1 } }], line: 1 }, '1': { loc: { start: { line: 11, column: 2 }, end: { line: 13, column: 3 } }, type: 'if', locations: [{ start: { line: 11, column: 2 }, end: { line: 13, column: 3 } }, { start: { line: 11, column: 2 }, end: { line: 13, column: 3 } }], line: 11 }, '2': { loc: { start: { line: 11, column: 7 }, end: { line: 11, column: 74 } }, type: 'cond-expr', locations: [{ start: { line: 11, column: 36 }, end: { line: 11, column: 47 } }, { start: { line: 11, column: 50 }, end: { line: 11, column: 74 } }], line: 11 }, '3': { loc: { start: { line: 14, column: 2 }, end: { line: 16, column: 3 } }, type: 'if', locations: [{ start: { line: 14, column: 2 }, end: { line: 16, column: 3 } }, { start: { line: 14, column: 2 }, end: { line: 16, column: 3 } }], line: 14 }, '4': { loc: { start: { line: 17, column: 2 }, end: { line: 19, column: 3 } }, type: 'if', locations: [{ start: { line: 17, column: 2 }, end: { line: 19, column: 3 } }, { start: { line: 17, column: 2 }, end: { line: 19, column: 3 } }], line: 17 }, '5': { loc: { start: { line: 20, column: 2 }, end: { line: 22, column: 3 } }, type: 'if', locations: [{ start: { line: 20, column: 2 }, end: { line: 22, column: 3 } }, { start: { line: 20, column: 2 }, end: { line: 22, column: 3 } }], line: 20 }, '6': { loc: { start: { line: 23, column: 2 }, end: { line: 25, column: 3 } }, type: 'if', locations: [{ start: { line: 23, column: 2 }, end: { line: 25, column: 3 } }, { start: { line: 23, column: 2 }, end: { line: 25, column: 3 } }], line: 23 }, '7': { loc: { start: { line: 28, column: 4 }, end: { line: 30, column: 5 } }, type: 'if', locations: [{ start: { line: 28, column: 4 }, end: { line: 30, column: 5 } }, { start: { line: 28, column: 4 }, end: { line: 30, column: 5 } }], line: 28 } }, s: { '0': 0, '1': 0, '2': 0, '3': 0, '4': 0, '5': 0, '6': 0, '7': 0, '8': 0, '9': 0, '10': 0, '11': 0, '12': 0, '13': 0, '14': 0, '15': 0, '16': 0, '17': 0, '18': 0 }, f: { '0': 0, '1': 0, '2': 0 }, b: { '0': [0, 0], '1': [0, 0], '2': [0, 0], '3': [0, 0], '4': [0, 0], '5': [0, 0], '6': [0, 0], '7': [0, 0] }, _coverageSchema: '332fd63041d2c1bcb487cc26dd0d5f7d97098a6c' },
      coverage = global[gcv] || (global[gcv] = {});if (coverage[path] && coverage[path].hash === hash) {
    return coverage[path];
  }coverageData.hash = hash;return coverage[path] = coverageData;
}();var isArray = (cov_g9g6gbabg.s[0]++, typeof Array.isArray === 'function' ? (cov_g9g6gbabg.b[0][0]++, Array.isArray) : (cov_g9g6gbabg.b[0][1]++, function (a) {
  cov_g9g6gbabg.f[0]++;cov_g9g6gbabg.s[1]++;return a instanceof Array;
}));function cloneRegExp(re) {
  cov_g9g6gbabg.f[1]++;var regexMatch = (cov_g9g6gbabg.s[2]++, /^\/(.*)\/([gimyu]*)$/.exec(re.toString()));cov_g9g6gbabg.s[3]++;return new RegExp(regexMatch[1], regexMatch[2]);
}function clone(arg) {
  cov_g9g6gbabg.f[2]++;cov_g9g6gbabg.s[4]++;if ((typeof arg === 'undefined' ? (cov_g9g6gbabg.b[2][0]++, 'undefined') : (cov_g9g6gbabg.b[2][1]++, _typeof$1(arg))) !== 'object') {
    cov_g9g6gbabg.b[1][0]++;cov_g9g6gbabg.s[5]++;return arg;
  } else {
    cov_g9g6gbabg.b[1][1]++;
  }cov_g9g6gbabg.s[6]++;if (arg === null) {
    cov_g9g6gbabg.b[3][0]++;cov_g9g6gbabg.s[7]++;return null;
  } else {
    cov_g9g6gbabg.b[3][1]++;
  }cov_g9g6gbabg.s[8]++;if (isArray(arg)) {
    cov_g9g6gbabg.b[4][0]++;cov_g9g6gbabg.s[9]++;return arg.map(clone);
  } else {
    cov_g9g6gbabg.b[4][1]++;
  }cov_g9g6gbabg.s[10]++;if (arg instanceof Date) {
    cov_g9g6gbabg.b[5][0]++;cov_g9g6gbabg.s[11]++;return new Date(arg.getTime());
  } else {
    cov_g9g6gbabg.b[5][1]++;
  }cov_g9g6gbabg.s[12]++;if (arg instanceof RegExp) {
    cov_g9g6gbabg.b[6][0]++;cov_g9g6gbabg.s[13]++;return cloneRegExp(arg);
  } else {
    cov_g9g6gbabg.b[6][1]++;
  }var cloned = (cov_g9g6gbabg.s[14]++, {});cov_g9g6gbabg.s[15]++;for (var name in arg) {
    cov_g9g6gbabg.s[16]++;if (Object.prototype.hasOwnProperty.call(arg, name)) {
      cov_g9g6gbabg.b[7][0]++;cov_g9g6gbabg.s[17]++;cloned[name] = clone(arg[name]);
    } else {
      cov_g9g6gbabg.b[7][1]++;
    }
  }cov_g9g6gbabg.s[18]++;return cloned;
}

var cov_jsx53bbw6 = function () {
  var path = '/Users/wangjie/project/plugins/jsondiffpatch/src/contexts/diff.js',
      hash = '643aac129874f006e5294d4e883a7bcccf27dbb6',
      Function = function () {}.constructor,
      global = new Function('return this')(),
      gcv = '__coverage__',
      coverageData = { path: '/Users/wangjie/project/plugins/jsondiffpatch/src/contexts/diff.js', statementMap: { '0': { start: { line: 4, column: 18 }, end: { line: 34, column: 10 } }, '1': { start: { line: 5, column: 2 }, end: { line: 5, column: 47 } }, '2': { start: { line: 8, column: 4 }, end: { line: 8, column: 51 } }, '3': { start: { line: 10, column: 16 }, end: { line: 10, column: 134 } }, '4': { start: { line: 12, column: 4 }, end: { line: 12, column: 22 } }, '5': { start: { line: 13, column: 4 }, end: { line: 13, column: 24 } }, '6': { start: { line: 14, column: 4 }, end: { line: 14, column: 24 } }, '7': { start: { line: 15, column: 4 }, end: { line: 15, column: 17 } }, '8': { start: { line: 18, column: 2 }, end: { line: 32, column: 6 } }, '9': { start: { line: 21, column: 6 }, end: { line: 29, column: 7 } }, '10': { start: { line: 22, column: 20 }, end: { line: 22, column: 116 } }, '11': { start: { line: 23, column: 8 }, end: { line: 25, column: 9 } }, '12': { start: { line: 24, column: 10 }, end: { line: 24, column: 39 } }, '13': { start: { line: 26, column: 8 }, end: { line: 28, column: 9 } }, '14': { start: { line: 27, column: 10 }, end: { line: 27, column: 39 } }, '15': { start: { line: 30, column: 6 }, end: { line: 30, column: 64 } }, '16': { start: { line: 33, column: 2 }, end: { line: 33, column: 21 } } }, fnMap: { '0': { name: '(anonymous_0)', decl: { start: { line: 4, column: 18 }, end: { line: 4, column: 19 } }, loc: { start: { line: 4, column: 38 }, end: { line: 34, column: 1 } }, line: 4 }, '1': { name: 'DiffContext', decl: { start: { line: 7, column: 11 }, end: { line: 7, column: 22 } }, loc: { start: { line: 7, column: 36 }, end: { line: 16, column: 3 } }, line: 7 }, '2': { name: 'setResult', decl: { start: { line: 20, column: 20 }, end: { line: 20, column: 29 } }, loc: { start: { line: 20, column: 38 }, end: { line: 31, column: 5 } }, line: 20 } }, branchMap: { '0': { loc: { start: { line: 10, column: 62 }, end: { line: 10, column: 121 } }, type: 'binary-expr', locations: [{ start: { line: 10, column: 62 }, end: { line: 10, column: 83 } }, { start: { line: 10, column: 87 }, end: { line: 10, column: 121 } }], line: 10 }, '1': { loc: { start: { line: 21, column: 6 }, end: { line: 29, column: 7 } }, type: 'if', locations: [{ start: { line: 21, column: 6 }, end: { line: 29, column: 7 } }, { start: { line: 21, column: 6 }, end: { line: 29, column: 7 } }], line: 21 }, '2': { loc: { start: { line: 21, column: 10 }, end: { line: 21, column: 130 } }, type: 'binary-expr', locations: [{ start: { line: 21, column: 10 }, end: { line: 21, column: 38 } }, { start: { line: 21, column: 42 }, end: { line: 21, column: 130 } }], line: 21 }, '3': { loc: { start: { line: 21, column: 43 }, end: { line: 21, column: 116 } }, type: 'cond-expr', locations: [{ start: { line: 21, column: 75 }, end: { line: 21, column: 86 } }, { start: { line: 21, column: 89 }, end: { line: 21, column: 116 } }], line: 21 }, '4': { loc: { start: { line: 22, column: 20 }, end: { line: 22, column: 116 } }, type: 'cond-expr', locations: [{ start: { line: 22, column: 73 }, end: { line: 22, column: 101 } }, { start: { line: 22, column: 104 }, end: { line: 22, column: 116 } }], line: 22 }, '5': { loc: { start: { line: 23, column: 8 }, end: { line: 25, column: 9 } }, type: 'if', locations: [{ start: { line: 23, column: 8 }, end: { line: 25, column: 9 } }, { start: { line: 23, column: 8 }, end: { line: 25, column: 9 } }], line: 23 }, '6': { loc: { start: { line: 26, column: 8 }, end: { line: 28, column: 9 } }, type: 'if', locations: [{ start: { line: 26, column: 8 }, end: { line: 28, column: 9 } }, { start: { line: 26, column: 8 }, end: { line: 28, column: 9 } }], line: 26 } }, s: { '0': 0, '1': 0, '2': 0, '3': 0, '4': 0, '5': 0, '6': 0, '7': 0, '8': 0, '9': 0, '10': 0, '11': 0, '12': 0, '13': 0, '14': 0, '15': 0, '16': 0 }, f: { '0': 0, '1': 0, '2': 0 }, b: { '0': [0, 0], '1': [0, 0], '2': [0, 0], '3': [0, 0], '4': [0, 0], '5': [0, 0], '6': [0, 0] }, _coverageSchema: '332fd63041d2c1bcb487cc26dd0d5f7d97098a6c' },
      coverage = global[gcv] || (global[gcv] = {});if (coverage[path] && coverage[path].hash === hash) {
    return coverage[path];
  }coverageData.hash = hash;return coverage[path] = coverageData;
}();var DiffContext = (cov_jsx53bbw6.s[0]++, function (_Context) {
  cov_jsx53bbw6.f[0]++;cov_jsx53bbw6.s[1]++;inherits$1(DiffContext, _Context);function DiffContext(left, right) {
    cov_jsx53bbw6.f[1]++;cov_jsx53bbw6.s[2]++;classCallCheck$1(this, DiffContext);var _this = (cov_jsx53bbw6.s[3]++, possibleConstructorReturn$1(this, ((cov_jsx53bbw6.b[0][0]++, DiffContext.__proto__) || (cov_jsx53bbw6.b[0][1]++, Object.getPrototypeOf(DiffContext))).call(this)));cov_jsx53bbw6.s[4]++;_this.left = left;cov_jsx53bbw6.s[5]++;_this.right = right;cov_jsx53bbw6.s[6]++;_this.pipe = 'diff';cov_jsx53bbw6.s[7]++;return _this;
  }cov_jsx53bbw6.s[8]++;createClass$1(DiffContext, [{ key: 'setResult', value: function setResult(result) {
      cov_jsx53bbw6.f[2]++;cov_jsx53bbw6.s[9]++;if ((cov_jsx53bbw6.b[2][0]++, this.options.cloneDiffValues) && (cov_jsx53bbw6.b[2][1]++, (typeof result === 'undefined' ? (cov_jsx53bbw6.b[3][0]++, 'undefined') : (cov_jsx53bbw6.b[3][1]++, _typeof$1(result))) === 'object')) {
        cov_jsx53bbw6.b[1][0]++;var clone$$1 = (cov_jsx53bbw6.s[10]++, typeof this.options.cloneDiffValues === 'function' ? (cov_jsx53bbw6.b[4][0]++, this.options.cloneDiffValues) : (cov_jsx53bbw6.b[4][1]++, clone));cov_jsx53bbw6.s[11]++;if (_typeof$1(result[0]) === 'object') {
          cov_jsx53bbw6.b[5][0]++;cov_jsx53bbw6.s[12]++;result[0] = clone$$1(result[0]);
        } else {
          cov_jsx53bbw6.b[5][1]++;
        }cov_jsx53bbw6.s[13]++;if (_typeof$1(result[1]) === 'object') {
          cov_jsx53bbw6.b[6][0]++;cov_jsx53bbw6.s[14]++;result[1] = clone$$1(result[1]);
        } else {
          cov_jsx53bbw6.b[6][1]++;
        }
      } else {
        cov_jsx53bbw6.b[1][1]++;
      }cov_jsx53bbw6.s[15]++;return Context.prototype.setResult.apply(this, arguments);
    } }]);cov_jsx53bbw6.s[16]++;return DiffContext;
}(Context));

var cov_5ql2wx83j = function () {
  var path = '/Users/wangjie/project/plugins/jsondiffpatch/src/contexts/patch.js',
      hash = 'b405d66f3e6c535fd7975fe2d95cb0d8a45b69b8',
      Function = function () {}.constructor,
      global = new Function('return this')(),
      gcv = '__coverage__',
      coverageData = { path: '/Users/wangjie/project/plugins/jsondiffpatch/src/contexts/patch.js', statementMap: { '0': { start: { line: 3, column: 19 }, end: { line: 18, column: 10 } }, '1': { start: { line: 4, column: 2 }, end: { line: 4, column: 48 } }, '2': { start: { line: 7, column: 4 }, end: { line: 7, column: 52 } }, '3': { start: { line: 9, column: 16 }, end: { line: 9, column: 136 } }, '4': { start: { line: 11, column: 4 }, end: { line: 11, column: 22 } }, '5': { start: { line: 12, column: 4 }, end: { line: 12, column: 24 } }, '6': { start: { line: 13, column: 4 }, end: { line: 13, column: 25 } }, '7': { start: { line: 14, column: 4 }, end: { line: 14, column: 17 } }, '8': { start: { line: 17, column: 2 }, end: { line: 17, column: 22 } } }, fnMap: { '0': { name: '(anonymous_0)', decl: { start: { line: 3, column: 19 }, end: { line: 3, column: 20 } }, loc: { start: { line: 3, column: 39 }, end: { line: 18, column: 1 } }, line: 3 }, '1': { name: 'PatchContext', decl: { start: { line: 6, column: 11 }, end: { line: 6, column: 23 } }, loc: { start: { line: 6, column: 37 }, end: { line: 15, column: 3 } }, line: 6 } }, branchMap: { '0': { loc: { start: { line: 9, column: 62 }, end: { line: 9, column: 123 } }, type: 'binary-expr', locations: [{ start: { line: 9, column: 62 }, end: { line: 9, column: 84 } }, { start: { line: 9, column: 88 }, end: { line: 9, column: 123 } }], line: 9 } }, s: { '0': 0, '1': 0, '2': 0, '3': 0, '4': 0, '5': 0, '6': 0, '7': 0, '8': 0 }, f: { '0': 0, '1': 0 }, b: { '0': [0, 0] }, _coverageSchema: '332fd63041d2c1bcb487cc26dd0d5f7d97098a6c' },
      coverage = global[gcv] || (global[gcv] = {});if (coverage[path] && coverage[path].hash === hash) {
    return coverage[path];
  }coverageData.hash = hash;return coverage[path] = coverageData;
}();var PatchContext = (cov_5ql2wx83j.s[0]++, function (_Context) {
  cov_5ql2wx83j.f[0]++;cov_5ql2wx83j.s[1]++;inherits$1(PatchContext, _Context);function PatchContext(left, delta) {
    cov_5ql2wx83j.f[1]++;cov_5ql2wx83j.s[2]++;classCallCheck$1(this, PatchContext);var _this = (cov_5ql2wx83j.s[3]++, possibleConstructorReturn$1(this, ((cov_5ql2wx83j.b[0][0]++, PatchContext.__proto__) || (cov_5ql2wx83j.b[0][1]++, Object.getPrototypeOf(PatchContext))).call(this)));cov_5ql2wx83j.s[4]++;_this.left = left;cov_5ql2wx83j.s[5]++;_this.delta = delta;cov_5ql2wx83j.s[6]++;_this.pipe = 'patch';cov_5ql2wx83j.s[7]++;return _this;
  }cov_5ql2wx83j.s[8]++;return PatchContext;
}(Context));

var cov_lmyra7czr = function () {
  var path = '/Users/wangjie/project/plugins/jsondiffpatch/src/contexts/reverse.js',
      hash = '15c3e4e26385e22442721d2dc983f0d1385f0c21',
      Function = function () {}.constructor,
      global = new Function('return this')(),
      gcv = '__coverage__',
      coverageData = { path: '/Users/wangjie/project/plugins/jsondiffpatch/src/contexts/reverse.js', statementMap: { '0': { start: { line: 3, column: 21 }, end: { line: 17, column: 10 } }, '1': { start: { line: 4, column: 2 }, end: { line: 4, column: 50 } }, '2': { start: { line: 7, column: 4 }, end: { line: 7, column: 54 } }, '3': { start: { line: 9, column: 16 }, end: { line: 9, column: 140 } }, '4': { start: { line: 11, column: 4 }, end: { line: 11, column: 24 } }, '5': { start: { line: 12, column: 4 }, end: { line: 12, column: 27 } }, '6': { start: { line: 13, column: 4 }, end: { line: 13, column: 17 } }, '7': { start: { line: 16, column: 2 }, end: { line: 16, column: 24 } } }, fnMap: { '0': { name: '(anonymous_0)', decl: { start: { line: 3, column: 21 }, end: { line: 3, column: 22 } }, loc: { start: { line: 3, column: 41 }, end: { line: 17, column: 1 } }, line: 3 }, '1': { name: 'ReverseContext', decl: { start: { line: 6, column: 11 }, end: { line: 6, column: 25 } }, loc: { start: { line: 6, column: 33 }, end: { line: 14, column: 3 } }, line: 6 } }, branchMap: { '0': { loc: { start: { line: 9, column: 62 }, end: { line: 9, column: 127 } }, type: 'binary-expr', locations: [{ start: { line: 9, column: 62 }, end: { line: 9, column: 86 } }, { start: { line: 9, column: 90 }, end: { line: 9, column: 127 } }], line: 9 } }, s: { '0': 0, '1': 0, '2': 0, '3': 0, '4': 0, '5': 0, '6': 0, '7': 0 }, f: { '0': 0, '1': 0 }, b: { '0': [0, 0] }, _coverageSchema: '332fd63041d2c1bcb487cc26dd0d5f7d97098a6c' },
      coverage = global[gcv] || (global[gcv] = {});if (coverage[path] && coverage[path].hash === hash) {
    return coverage[path];
  }coverageData.hash = hash;return coverage[path] = coverageData;
}();var ReverseContext = (cov_lmyra7czr.s[0]++, function (_Context) {
  cov_lmyra7czr.f[0]++;cov_lmyra7czr.s[1]++;inherits$1(ReverseContext, _Context);function ReverseContext(delta) {
    cov_lmyra7czr.f[1]++;cov_lmyra7czr.s[2]++;classCallCheck$1(this, ReverseContext);var _this = (cov_lmyra7czr.s[3]++, possibleConstructorReturn$1(this, ((cov_lmyra7czr.b[0][0]++, ReverseContext.__proto__) || (cov_lmyra7czr.b[0][1]++, Object.getPrototypeOf(ReverseContext))).call(this)));cov_lmyra7czr.s[4]++;_this.delta = delta;cov_lmyra7czr.s[5]++;_this.pipe = 'reverse';cov_lmyra7czr.s[6]++;return _this;
  }cov_lmyra7czr.s[7]++;return ReverseContext;
}(Context));

var cov_1w1p2tc99n = function () {
  var path = '/Users/wangjie/project/plugins/jsondiffpatch/src/filters/trivial.js',
      hash = 'e82f0aac6bc9b79fa8ee0817537c75261619d8f5',
      Function = function () {}.constructor,
      global = new Function('return this')(),
      gcv = '__coverage__',
      coverageData = { path: '/Users/wangjie/project/plugins/jsondiffpatch/src/filters/trivial.js', statementMap: { '0': { start: { line: 1, column: 14 }, end: { line: 3, column: 1 } }, '1': { start: { line: 2, column: 2 }, end: { line: 2, column: 28 } }, '2': { start: { line: 5, column: 24 }, end: { line: 52, column: 1 } }, '3': { start: { line: 6, column: 2 }, end: { line: 9, column: 3 } }, '4': { start: { line: 7, column: 4 }, end: { line: 7, column: 40 } }, '5': { start: { line: 8, column: 4 }, end: { line: 8, column: 11 } }, '6': { start: { line: 10, column: 2 }, end: { line: 16, column: 3 } }, '7': { start: { line: 11, column: 4 }, end: { line: 13, column: 5 } }, '8': { start: { line: 12, column: 6 }, end: { line: 12, column: 53 } }, '9': { start: { line: 14, column: 4 }, end: { line: 14, column: 46 } }, '10': { start: { line: 15, column: 4 }, end: { line: 15, column: 11 } }, '11': { start: { line: 17, column: 2 }, end: { line: 20, column: 3 } }, '12': { start: { line: 18, column: 4 }, end: { line: 18, column: 51 } }, '13': { start: { line: 19, column: 4 }, end: { line: 19, column: 11 } }, '14': { start: { line: 21, column: 2 }, end: { line: 23, column: 3 } }, '15': { start: { line: 22, column: 4 }, end: { line: 22, column: 51 } }, '16': { start: { line: 24, column: 2 }, end: { line: 24, column: 88 } }, '17': { start: { line: 25, column: 2 }, end: { line: 25, column: 91 } }, '18': { start: { line: 26, column: 2 }, end: { line: 29, column: 3 } }, '19': { start: { line: 27, column: 4 }, end: { line: 27, column: 60 } }, '20': { start: { line: 28, column: 4 }, end: { line: 28, column: 11 } }, '21': { start: { line: 30, column: 2 }, end: { line: 33, column: 3 } }, '22': { start: { line: 31, column: 4 }, end: { line: 31, column: 60 } }, '23': { start: { line: 32, column: 4 }, end: { line: 32, column: 11 } }, '24': { start: { line: 34, column: 2 }, end: { line: 36, column: 3 } }, '25': { start: { line: 35, column: 4 }, end: { line: 35, column: 48 } }, '26': { start: { line: 37, column: 2 }, end: { line: 39, column: 3 } }, '27': { start: { line: 38, column: 4 }, end: { line: 38, column: 50 } }, '28': { start: { line: 40, column: 2 }, end: { line: 43, column: 3 } }, '29': { start: { line: 41, column: 4 }, end: { line: 41, column: 60 } }, '30': { start: { line: 42, column: 4 }, end: { line: 42, column: 11 } }, '31': { start: { line: 45, column: 2 }, end: { line: 51, column: 3 } }, '32': { start: { line: 46, column: 4 }, end: { line: 50, column: 5 } }, '33': { start: { line: 47, column: 6 }, end: { line: 47, column: 84 } }, '34': { start: { line: 49, column: 6 }, end: { line: 49, column: 62 } }, '35': { start: { line: 53, column: 0 }, end: { line: 53, column: 34 } }, '36': { start: { line: 55, column: 25 }, end: { line: 82, column: 1 } }, '37': { start: { line: 56, column: 2 }, end: { line: 59, column: 3 } }, '38': { start: { line: 57, column: 4 }, end: { line: 57, column: 43 } }, '39': { start: { line: 58, column: 4 }, end: { line: 58, column: 11 } }, '40': { start: { line: 60, column: 2 }, end: { line: 60, column: 43 } }, '41': { start: { line: 61, column: 2 }, end: { line: 63, column: 3 } }, '42': { start: { line: 62, column: 4 }, end: { line: 62, column: 11 } }, '43': { start: { line: 64, column: 2 }, end: { line: 67, column: 3 } }, '44': { start: { line: 65, column: 4 }, end: { line: 65, column: 47 } }, '45': { start: { line: 66, column: 4 }, end: { line: 66, column: 11 } }, '46': { start: { line: 68, column: 2 }, end: { line: 78, column: 3 } }, '47': { start: { line: 69, column: 4 }, end: { line: 75, column: 5 } }, '48': { start: { line: 70, column: 22 }, end: { line: 70, column: 67 } }, '49': { start: { line: 71, column: 6 }, end: { line: 74, column: 7 } }, '50': { start: { line: 72, column: 8 }, end: { line: 72, column: 73 } }, '51': { start: { line: 73, column: 8 }, end: { line: 73, column: 15 } }, '52': { start: { line: 76, column: 4 }, end: { line: 76, column: 47 } }, '53': { start: { line: 77, column: 4 }, end: { line: 77, column: 11 } }, '54': { start: { line: 79, column: 2 }, end: { line: 81, column: 3 } }, '55': { start: { line: 80, column: 4 }, end: { line: 80, column: 40 } }, '56': { start: { line: 83, column: 0 }, end: { line: 83, column: 35 } }, '57': { start: { line: 85, column: 27 }, end: { line: 105, column: 1 } }, '58': { start: { line: 86, column: 2 }, end: { line: 89, column: 3 } }, '59': { start: { line: 87, column: 4 }, end: { line: 87, column: 44 } }, '60': { start: { line: 88, column: 4 }, end: { line: 88, column: 11 } }, '61': { start: { line: 90, column: 2 }, end: { line: 90, column: 43 } }, '62': { start: { line: 91, column: 2 }, end: { line: 93, column: 3 } }, '63': { start: { line: 92, column: 4 }, end: { line: 92, column: 11 } }, '64': { start: { line: 94, column: 2 }, end: { line: 97, column: 3 } }, '65': { start: { line: 95, column: 4 }, end: { line: 95, column: 55 } }, '66': { start: { line: 96, column: 4 }, end: { line: 96, column: 11 } }, '67': { start: { line: 98, column: 2 }, end: { line: 101, column: 3 } }, '68': { start: { line: 99, column: 4 }, end: { line: 99, column: 67 } }, '69': { start: { line: 100, column: 4 }, end: { line: 100, column: 11 } }, '70': { start: { line: 102, column: 2 }, end: { line: 104, column: 3 } }, '71': { start: { line: 103, column: 4 }, end: { line: 103, column: 49 } }, '72': { start: { line: 106, column: 0 }, end: { line: 106, column: 37 } } }, fnMap: { '0': { name: '(anonymous_0)', decl: { start: { line: 1, column: 68 }, end: { line: 1, column: 69 } }, loc: { start: { line: 1, column: 81 }, end: { line: 3, column: 1 } }, line: 1 }, '1': { name: 'trivialMatchesDiffFilter', decl: { start: { line: 5, column: 33 }, end: { line: 5, column: 57 } }, loc: { start: { line: 5, column: 67 }, end: { line: 52, column: 1 } }, line: 5 }, '2': { name: 'trivialMatchesPatchFilter', decl: { start: { line: 55, column: 34 }, end: { line: 55, column: 59 } }, loc: { start: { line: 55, column: 69 }, end: { line: 82, column: 1 } }, line: 55 }, '3': { name: 'trivialReferseFilter', decl: { start: { line: 85, column: 36 }, end: { line: 85, column: 56 } }, loc: { start: { line: 85, column: 66 }, end: { line: 105, column: 1 } }, line: 85 } }, branchMap: { '0': { loc: { start: { line: 1, column: 14 }, end: { line: 3, column: 1 } }, type: 'cond-expr', locations: [{ start: { line: 1, column: 52 }, end: { line: 1, column: 65 } }, { start: { line: 1, column: 68 }, end: { line: 3, column: 1 } }], line: 1 }, '1': { loc: { start: { line: 6, column: 2 }, end: { line: 9, column: 3 } }, type: 'if', locations: [{ start: { line: 6, column: 2 }, end: { line: 9, column: 3 } }, { start: { line: 6, column: 2 }, end: { line: 9, column: 3 } }], line: 6 }, '2': { loc: { start: { line: 10, column: 2 }, end: { line: 16, column: 3 } }, type: 'if', locations: [{ start: { line: 10, column: 2 }, end: { line: 16, column: 3 } }, { start: { line: 10, column: 2 }, end: { line: 16, column: 3 } }], line: 10 }, '3': { loc: { start: { line: 11, column: 4 }, end: { line: 13, column: 5 } }, type: 'if', locations: [{ start: { line: 11, column: 4 }, end: { line: 13, column: 5 } }, { start: { line: 11, column: 4 }, end: { line: 13, column: 5 } }], line: 11 }, '4': { loc: { start: { line: 17, column: 2 }, end: { line: 20, column: 3 } }, type: 'if', locations: [{ start: { line: 17, column: 2 }, end: { line: 20, column: 3 } }, { start: { line: 17, column: 2 }, end: { line: 20, column: 3 } }], line: 17 }, '5': { loc: { start: { line: 21, column: 2 }, end: { line: 23, column: 3 } }, type: 'if', locations: [{ start: { line: 21, column: 2 }, end: { line: 23, column: 3 } }, { start: { line: 21, column: 2 }, end: { line: 23, column: 3 } }], line: 21 }, '6': { loc: { start: { line: 21, column: 6 }, end: { line: 21, column: 79 } }, type: 'binary-expr', locations: [{ start: { line: 21, column: 6 }, end: { line: 21, column: 40 } }, { start: { line: 21, column: 44 }, end: { line: 21, column: 79 } }], line: 21 }, '7': { loc: { start: { line: 24, column: 21 }, end: { line: 24, column: 87 } }, type: 'cond-expr', locations: [{ start: { line: 24, column: 45 }, end: { line: 24, column: 51 } }, { start: { line: 24, column: 54 }, end: { line: 24, column: 87 } }], line: 24 }, '8': { loc: { start: { line: 25, column: 22 }, end: { line: 25, column: 90 } }, type: 'cond-expr', locations: [{ start: { line: 25, column: 47 }, end: { line: 25, column: 53 } }, { start: { line: 25, column: 56 }, end: { line: 25, column: 90 } }], line: 25 }, '9': { loc: { start: { line: 26, column: 2 }, end: { line: 29, column: 3 } }, type: 'if', locations: [{ start: { line: 26, column: 2 }, end: { line: 29, column: 3 } }, { start: { line: 26, column: 2 }, end: { line: 29, column: 3 } }], line: 26 }, '10': { loc: { start: { line: 30, column: 2 }, end: { line: 33, column: 3 } }, type: 'if', locations: [{ start: { line: 30, column: 2 }, end: { line: 33, column: 3 } }, { start: { line: 30, column: 2 }, end: { line: 33, column: 3 } }], line: 30 }, '11': { loc: { start: { line: 30, column: 6 }, end: { line: 30, column: 102 } }, type: 'binary-expr', locations: [{ start: { line: 30, column: 6 }, end: { line: 30, column: 36 } }, { start: { line: 30, column: 40 }, end: { line: 30, column: 69 } }, { start: { line: 30, column: 73 }, end: { line: 30, column: 102 } }], line: 30 }, '12': { loc: { start: { line: 34, column: 2 }, end: { line: 36, column: 3 } }, type: 'if', locations: [{ start: { line: 34, column: 2 }, end: { line: 36, column: 3 } }, { start: { line: 34, column: 2 }, end: { line: 36, column: 3 } }], line: 34 }, '13': { loc: { start: { line: 37, column: 2 }, end: { line: 39, column: 3 } }, type: 'if', locations: [{ start: { line: 37, column: 2 }, end: { line: 39, column: 3 } }, { start: { line: 37, column: 2 }, end: { line: 39, column: 3 } }], line: 37 }, '14': { loc: { start: { line: 40, column: 2 }, end: { line: 43, column: 3 } }, type: 'if', locations: [{ start: { line: 40, column: 2 }, end: { line: 43, column: 3 } }, { start: { line: 40, column: 2 }, end: { line: 43, column: 3 } }], line: 40 }, '15': { loc: { start: { line: 45, column: 2 }, end: { line: 51, column: 3 } }, type: 'if', locations: [{ start: { line: 45, column: 2 }, end: { line: 51, column: 3 } }, { start: { line: 45, column: 2 }, end: { line: 51, column: 3 } }], line: 45 }, '16': { loc: { start: { line: 46, column: 4 }, end: { line: 50, column: 5 } }, type: 'if', locations: [{ start: { line: 46, column: 4 }, end: { line: 50, column: 5 } }, { start: { line: 46, column: 4 }, end: { line: 50, column: 5 } }], line: 46 }, '17': { loc: { start: { line: 56, column: 2 }, end: { line: 59, column: 3 } }, type: 'if', locations: [{ start: { line: 56, column: 2 }, end: { line: 59, column: 3 } }, { start: { line: 56, column: 2 }, end: { line: 59, column: 3 } }], line: 56 }, '18': { loc: { start: { line: 61, column: 2 }, end: { line: 63, column: 3 } }, type: 'if', locations: [{ start: { line: 61, column: 2 }, end: { line: 63, column: 3 } }, { start: { line: 61, column: 2 }, end: { line: 63, column: 3 } }], line: 61 }, '19': { loc: { start: { line: 64, column: 2 }, end: { line: 67, column: 3 } }, type: 'if', locations: [{ start: { line: 64, column: 2 }, end: { line: 67, column: 3 } }, { start: { line: 64, column: 2 }, end: { line: 67, column: 3 } }], line: 64 }, '20': { loc: { start: { line: 68, column: 2 }, end: { line: 78, column: 3 } }, type: 'if', locations: [{ start: { line: 68, column: 2 }, end: { line: 78, column: 3 } }, { start: { line: 68, column: 2 }, end: { line: 78, column: 3 } }], line: 68 }, '21': { loc: { start: { line: 69, column: 4 }, end: { line: 75, column: 5 } }, type: 'if', locations: [{ start: { line: 69, column: 4 }, end: { line: 75, column: 5 } }, { start: { line: 69, column: 4 }, end: { line: 75, column: 5 } }], line: 69 }, '22': { loc: { start: { line: 71, column: 6 }, end: { line: 74, column: 7 } }, type: 'if', locations: [{ start: { line: 71, column: 6 }, end: { line: 74, column: 7 } }, { start: { line: 71, column: 6 }, end: { line: 74, column: 7 } }], line: 71 }, '23': { loc: { start: { line: 79, column: 2 }, end: { line: 81, column: 3 } }, type: 'if', locations: [{ start: { line: 79, column: 2 }, end: { line: 81, column: 3 } }, { start: { line: 79, column: 2 }, end: { line: 81, column: 3 } }], line: 79 }, '24': { loc: { start: { line: 79, column: 6 }, end: { line: 79, column: 58 } }, type: 'binary-expr', locations: [{ start: { line: 79, column: 6 }, end: { line: 79, column: 32 } }, { start: { line: 79, column: 36 }, end: { line: 79, column: 58 } }], line: 79 }, '25': { loc: { start: { line: 86, column: 2 }, end: { line: 89, column: 3 } }, type: 'if', locations: [{ start: { line: 86, column: 2 }, end: { line: 89, column: 3 } }, { start: { line: 86, column: 2 }, end: { line: 89, column: 3 } }], line: 86 }, '26': { loc: { start: { line: 91, column: 2 }, end: { line: 93, column: 3 } }, type: 'if', locations: [{ start: { line: 91, column: 2 }, end: { line: 93, column: 3 } }, { start: { line: 91, column: 2 }, end: { line: 93, column: 3 } }], line: 91 }, '27': { loc: { start: { line: 94, column: 2 }, end: { line: 97, column: 3 } }, type: 'if', locations: [{ start: { line: 94, column: 2 }, end: { line: 97, column: 3 } }, { start: { line: 94, column: 2 }, end: { line: 97, column: 3 } }], line: 94 }, '28': { loc: { start: { line: 98, column: 2 }, end: { line: 101, column: 3 } }, type: 'if', locations: [{ start: { line: 98, column: 2 }, end: { line: 101, column: 3 } }, { start: { line: 98, column: 2 }, end: { line: 101, column: 3 } }], line: 98 }, '29': { loc: { start: { line: 102, column: 2 }, end: { line: 104, column: 3 } }, type: 'if', locations: [{ start: { line: 102, column: 2 }, end: { line: 104, column: 3 } }, { start: { line: 102, column: 2 }, end: { line: 104, column: 3 } }], line: 102 }, '30': { loc: { start: { line: 102, column: 6 }, end: { line: 102, column: 58 } }, type: 'binary-expr', locations: [{ start: { line: 102, column: 6 }, end: { line: 102, column: 32 } }, { start: { line: 102, column: 36 }, end: { line: 102, column: 58 } }], line: 102 } }, s: { '0': 0, '1': 0, '2': 0, '3': 0, '4': 0, '5': 0, '6': 0, '7': 0, '8': 0, '9': 0, '10': 0, '11': 0, '12': 0, '13': 0, '14': 0, '15': 0, '16': 0, '17': 0, '18': 0, '19': 0, '20': 0, '21': 0, '22': 0, '23': 0, '24': 0, '25': 0, '26': 0, '27': 0, '28': 0, '29': 0, '30': 0, '31': 0, '32': 0, '33': 0, '34': 0, '35': 0, '36': 0, '37': 0, '38': 0, '39': 0, '40': 0, '41': 0, '42': 0, '43': 0, '44': 0, '45': 0, '46': 0, '47': 0, '48': 0, '49': 0, '50': 0, '51': 0, '52': 0, '53': 0, '54': 0, '55': 0, '56': 0, '57': 0, '58': 0, '59': 0, '60': 0, '61': 0, '62': 0, '63': 0, '64': 0, '65': 0, '66': 0, '67': 0, '68': 0, '69': 0, '70': 0, '71': 0, '72': 0 }, f: { '0': 0, '1': 0, '2': 0, '3': 0 }, b: { '0': [0, 0], '1': [0, 0], '2': [0, 0], '3': [0, 0], '4': [0, 0], '5': [0, 0], '6': [0, 0], '7': [0, 0], '8': [0, 0], '9': [0, 0], '10': [0, 0], '11': [0, 0, 0], '12': [0, 0], '13': [0, 0], '14': [0, 0], '15': [0, 0], '16': [0, 0], '17': [0, 0], '18': [0, 0], '19': [0, 0], '20': [0, 0], '21': [0, 0], '22': [0, 0], '23': [0, 0], '24': [0, 0], '25': [0, 0], '26': [0, 0], '27': [0, 0], '28': [0, 0], '29': [0, 0], '30': [0, 0] }, _coverageSchema: '332fd63041d2c1bcb487cc26dd0d5f7d97098a6c' },
      coverage = global[gcv] || (global[gcv] = {});if (coverage[path] && coverage[path].hash === hash) {
    return coverage[path];
  }coverageData.hash = hash;return coverage[path] = coverageData;
}();var isArray$1 = (cov_1w1p2tc99n.s[0]++, typeof Array.isArray === 'function' ? (cov_1w1p2tc99n.b[0][0]++, Array.isArray) : (cov_1w1p2tc99n.b[0][1]++, function (a) {
  cov_1w1p2tc99n.f[0]++;cov_1w1p2tc99n.s[1]++;return a instanceof Array;
}));cov_1w1p2tc99n.s[2]++;var diffFilter = function trivialMatchesDiffFilter(context) {
  cov_1w1p2tc99n.f[1]++;cov_1w1p2tc99n.s[3]++;if (context.left === context.right) {
    cov_1w1p2tc99n.b[1][0]++;cov_1w1p2tc99n.s[4]++;context.setResult(undefined).exit();cov_1w1p2tc99n.s[5]++;return;
  } else {
    cov_1w1p2tc99n.b[1][1]++;
  }cov_1w1p2tc99n.s[6]++;if (typeof context.left === 'undefined') {
    cov_1w1p2tc99n.b[2][0]++;cov_1w1p2tc99n.s[7]++;if (typeof context.right === 'function') {
      cov_1w1p2tc99n.b[3][0]++;cov_1w1p2tc99n.s[8]++;throw new Error('functions are not supported');
    } else {
      cov_1w1p2tc99n.b[3][1]++;
    }cov_1w1p2tc99n.s[9]++;context.setResult([context.right]).exit();cov_1w1p2tc99n.s[10]++;return;
  } else {
    cov_1w1p2tc99n.b[2][1]++;
  }cov_1w1p2tc99n.s[11]++;if (typeof context.right === 'undefined') {
    cov_1w1p2tc99n.b[4][0]++;cov_1w1p2tc99n.s[12]++;context.setResult([context.left, 0, 0]).exit();cov_1w1p2tc99n.s[13]++;return;
  } else {
    cov_1w1p2tc99n.b[4][1]++;
  }cov_1w1p2tc99n.s[14]++;if ((cov_1w1p2tc99n.b[6][0]++, typeof context.left === 'function') || (cov_1w1p2tc99n.b[6][1]++, typeof context.right === 'function')) {
    cov_1w1p2tc99n.b[5][0]++;cov_1w1p2tc99n.s[15]++;throw new Error('functions are not supported');
  } else {
    cov_1w1p2tc99n.b[5][1]++;
  }cov_1w1p2tc99n.s[16]++;context.leftType = context.left === null ? (cov_1w1p2tc99n.b[7][0]++, 'null') : (cov_1w1p2tc99n.b[7][1]++, _typeof$1(context.left));cov_1w1p2tc99n.s[17]++;context.rightType = context.right === null ? (cov_1w1p2tc99n.b[8][0]++, 'null') : (cov_1w1p2tc99n.b[8][1]++, _typeof$1(context.right));cov_1w1p2tc99n.s[18]++;if (context.leftType !== context.rightType) {
    cov_1w1p2tc99n.b[9][0]++;cov_1w1p2tc99n.s[19]++;context.setResult([context.left, context.right]).exit();cov_1w1p2tc99n.s[20]++;return;
  } else {
    cov_1w1p2tc99n.b[9][1]++;
  }cov_1w1p2tc99n.s[21]++;if ((cov_1w1p2tc99n.b[11][0]++, context.leftType === 'boolean') || (cov_1w1p2tc99n.b[11][1]++, context.leftType === 'number') || (cov_1w1p2tc99n.b[11][2]++, context.leftType === 'bigint')) {
    cov_1w1p2tc99n.b[10][0]++;cov_1w1p2tc99n.s[22]++;context.setResult([context.left, context.right]).exit();cov_1w1p2tc99n.s[23]++;return;
  } else {
    cov_1w1p2tc99n.b[10][1]++;
  }cov_1w1p2tc99n.s[24]++;if (context.leftType === 'object') {
    cov_1w1p2tc99n.b[12][0]++;cov_1w1p2tc99n.s[25]++;context.leftIsArray = isArray$1(context.left);
  } else {
    cov_1w1p2tc99n.b[12][1]++;
  }cov_1w1p2tc99n.s[26]++;if (context.rightType === 'object') {
    cov_1w1p2tc99n.b[13][0]++;cov_1w1p2tc99n.s[27]++;context.rightIsArray = isArray$1(context.right);
  } else {
    cov_1w1p2tc99n.b[13][1]++;
  }cov_1w1p2tc99n.s[28]++;if (context.leftIsArray !== context.rightIsArray) {
    cov_1w1p2tc99n.b[14][0]++;cov_1w1p2tc99n.s[29]++;context.setResult([context.left, context.right]).exit();cov_1w1p2tc99n.s[30]++;return;
  } else {
    cov_1w1p2tc99n.b[14][1]++;
  }cov_1w1p2tc99n.s[31]++;if (context.left instanceof RegExp) {
    cov_1w1p2tc99n.b[15][0]++;cov_1w1p2tc99n.s[32]++;if (context.right instanceof RegExp) {
      cov_1w1p2tc99n.b[16][0]++;cov_1w1p2tc99n.s[33]++;context.setResult([context.left.toString(), context.right.toString()]).exit();
    } else {
      cov_1w1p2tc99n.b[16][1]++;cov_1w1p2tc99n.s[34]++;context.setResult([context.left, context.right]).exit();
    }
  } else {
    cov_1w1p2tc99n.b[15][1]++;
  }
};cov_1w1p2tc99n.s[35]++;diffFilter.filterName = 'trivial';cov_1w1p2tc99n.s[36]++;var patchFilter = function trivialMatchesPatchFilter(context) {
  cov_1w1p2tc99n.f[2]++;cov_1w1p2tc99n.s[37]++;if (typeof context.delta === 'undefined') {
    cov_1w1p2tc99n.b[17][0]++;cov_1w1p2tc99n.s[38]++;context.setResult(context.left).exit();cov_1w1p2tc99n.s[39]++;return;
  } else {
    cov_1w1p2tc99n.b[17][1]++;
  }cov_1w1p2tc99n.s[40]++;context.nested = !isArray$1(context.delta);cov_1w1p2tc99n.s[41]++;if (context.nested) {
    cov_1w1p2tc99n.b[18][0]++;cov_1w1p2tc99n.s[42]++;return;
  } else {
    cov_1w1p2tc99n.b[18][1]++;
  }cov_1w1p2tc99n.s[43]++;if (context.delta.length === 1) {
    cov_1w1p2tc99n.b[19][0]++;cov_1w1p2tc99n.s[44]++;context.setResult(context.delta[0]).exit();cov_1w1p2tc99n.s[45]++;return;
  } else {
    cov_1w1p2tc99n.b[19][1]++;
  }cov_1w1p2tc99n.s[46]++;if (context.delta.length === 2) {
    cov_1w1p2tc99n.b[20][0]++;cov_1w1p2tc99n.s[47]++;if (context.left instanceof RegExp) {
      cov_1w1p2tc99n.b[21][0]++;var regexArgs = (cov_1w1p2tc99n.s[48]++, /^\/(.*)\/([gimyu]+)$/.exec(context.delta[1]));cov_1w1p2tc99n.s[49]++;if (regexArgs) {
        cov_1w1p2tc99n.b[22][0]++;cov_1w1p2tc99n.s[50]++;context.setResult(new RegExp(regexArgs[1], regexArgs[2])).exit();cov_1w1p2tc99n.s[51]++;return;
      } else {
        cov_1w1p2tc99n.b[22][1]++;
      }
    } else {
      cov_1w1p2tc99n.b[21][1]++;
    }cov_1w1p2tc99n.s[52]++;context.setResult(context.delta[1]).exit();cov_1w1p2tc99n.s[53]++;return;
  } else {
    cov_1w1p2tc99n.b[20][1]++;
  }cov_1w1p2tc99n.s[54]++;if ((cov_1w1p2tc99n.b[24][0]++, context.delta.length === 3) && (cov_1w1p2tc99n.b[24][1]++, context.delta[2] === 0)) {
    cov_1w1p2tc99n.b[23][0]++;cov_1w1p2tc99n.s[55]++;context.setResult(undefined).exit();
  } else {
    cov_1w1p2tc99n.b[23][1]++;
  }
};cov_1w1p2tc99n.s[56]++;patchFilter.filterName = 'trivial';cov_1w1p2tc99n.s[57]++;var reverseFilter = function trivialReferseFilter(context) {
  cov_1w1p2tc99n.f[3]++;cov_1w1p2tc99n.s[58]++;if (typeof context.delta === 'undefined') {
    cov_1w1p2tc99n.b[25][0]++;cov_1w1p2tc99n.s[59]++;context.setResult(context.delta).exit();cov_1w1p2tc99n.s[60]++;return;
  } else {
    cov_1w1p2tc99n.b[25][1]++;
  }cov_1w1p2tc99n.s[61]++;context.nested = !isArray$1(context.delta);cov_1w1p2tc99n.s[62]++;if (context.nested) {
    cov_1w1p2tc99n.b[26][0]++;cov_1w1p2tc99n.s[63]++;return;
  } else {
    cov_1w1p2tc99n.b[26][1]++;
  }cov_1w1p2tc99n.s[64]++;if (context.delta.length === 1) {
    cov_1w1p2tc99n.b[27][0]++;cov_1w1p2tc99n.s[65]++;context.setResult([context.delta[0], 0, 0]).exit();cov_1w1p2tc99n.s[66]++;return;
  } else {
    cov_1w1p2tc99n.b[27][1]++;
  }cov_1w1p2tc99n.s[67]++;if (context.delta.length === 2) {
    cov_1w1p2tc99n.b[28][0]++;cov_1w1p2tc99n.s[68]++;context.setResult([context.delta[1], context.delta[0]]).exit();cov_1w1p2tc99n.s[69]++;return;
  } else {
    cov_1w1p2tc99n.b[28][1]++;
  }cov_1w1p2tc99n.s[70]++;if ((cov_1w1p2tc99n.b[30][0]++, context.delta.length === 3) && (cov_1w1p2tc99n.b[30][1]++, context.delta[2] === 0)) {
    cov_1w1p2tc99n.b[29][0]++;cov_1w1p2tc99n.s[71]++;context.setResult([context.delta[0]]).exit();
  } else {
    cov_1w1p2tc99n.b[29][1]++;
  }
};cov_1w1p2tc99n.s[72]++;reverseFilter.filterName = 'trivial';

var cov_3kisnvyfd = function () {
  var path = '/Users/wangjie/project/plugins/jsondiffpatch/src/filters/nested.js',
      hash = '08e5def77b3d44def18074e7de9472c28e24466b',
      Function = function () {}.constructor,
      global = new Function('return this')(),
      gcv = '__coverage__',
      coverageData = { path: '/Users/wangjie/project/plugins/jsondiffpatch/src/filters/nested.js', statementMap: { '0': { start: { line: 6, column: 2 }, end: { line: 8, column: 3 } }, '1': { start: { line: 7, column: 4 }, end: { line: 7, column: 11 } }, '2': { start: { line: 9, column: 15 }, end: { line: 9, column: 38 } }, '3': { start: { line: 10, column: 14 }, end: { line: 10, column: 20 } }, '4': { start: { line: 11, column: 15 }, end: { line: 11, column: 29 } }, '5': { start: { line: 12, column: 2 }, end: { line: 19, column: 3 } }, '6': { start: { line: 13, column: 4 }, end: { line: 13, column: 36 } }, '7': { start: { line: 14, column: 4 }, end: { line: 16, column: 5 } }, '8': { start: { line: 15, column: 6 }, end: { line: 15, column: 15 } }, '9': { start: { line: 17, column: 4 }, end: { line: 17, column: 26 } }, '10': { start: { line: 18, column: 4 }, end: { line: 18, column: 43 } }, '11': { start: { line: 20, column: 2 }, end: { line: 22, column: 3 } }, '12': { start: { line: 21, column: 4 }, end: { line: 21, column: 20 } }, '13': { start: { line: 23, column: 2 }, end: { line: 23, column: 35 } }, '14': { start: { line: 25, column: 0 }, end: { line: 25, column: 57 } }, '15': { start: { line: 28, column: 2 }, end: { line: 30, column: 3 } }, '16': { start: { line: 29, column: 4 }, end: { line: 29, column: 11 } }, '17': { start: { line: 32, column: 13 }, end: { line: 32, column: 19 } }, '18': { start: { line: 33, column: 14 }, end: { line: 33, column: 20 } }, '19': { start: { line: 34, column: 23 }, end: { line: 34, column: 53 } }, '20': { start: { line: 35, column: 2 }, end: { line: 44, column: 3 } }, '21': { start: { line: 36, column: 4 }, end: { line: 38, column: 5 } }, '22': { start: { line: 37, column: 6 }, end: { line: 37, column: 15 } }, '23': { start: { line: 39, column: 4 }, end: { line: 41, column: 5 } }, '24': { start: { line: 40, column: 6 }, end: { line: 40, column: 15 } }, '25': { start: { line: 42, column: 4 }, end: { line: 42, column: 69 } }, '26': { start: { line: 43, column: 4 }, end: { line: 43, column: 30 } }, '27': { start: { line: 45, column: 2 }, end: { line: 56, column: 3 } }, '28': { start: { line: 46, column: 4 }, end: { line: 48, column: 5 } }, '29': { start: { line: 47, column: 6 }, end: { line: 47, column: 15 } }, '30': { start: { line: 49, column: 4 }, end: { line: 51, column: 5 } }, '31': { start: { line: 50, column: 6 }, end: { line: 50, column: 15 } }, '32': { start: { line: 52, column: 4 }, end: { line: 55, column: 5 } }, '33': { start: { line: 53, column: 6 }, end: { line: 53, column: 62 } }, '34': { start: { line: 54, column: 6 }, end: { line: 54, column: 32 } }, '35': { start: { line: 58, column: 2 }, end: { line: 61, column: 3 } }, '36': { start: { line: 59, column: 4 }, end: { line: 59, column: 40 } }, '37': { start: { line: 60, column: 4 }, end: { line: 60, column: 11 } }, '38': { start: { line: 62, column: 2 }, end: { line: 62, column: 17 } }, '39': { start: { line: 64, column: 0 }, end: { line: 64, column: 41 } }, '40': { start: { line: 66, column: 25 }, end: { line: 80, column: 1 } }, '41': { start: { line: 67, column: 2 }, end: { line: 69, column: 3 } }, '42': { start: { line: 68, column: 4 }, end: { line: 68, column: 11 } }, '43': { start: { line: 70, column: 2 }, end: { line: 72, column: 3 } }, '44': { start: { line: 71, column: 4 }, end: { line: 71, column: 11 } }, '45': { start: { line: 73, column: 13 }, end: { line: 73, column: 19 } }, '46': { start: { line: 74, column: 14 }, end: { line: 74, column: 20 } }, '47': { start: { line: 75, column: 2 }, end: { line: 78, column: 3 } }, '48': { start: { line: 76, column: 4 }, end: { line: 76, column: 70 } }, '49': { start: { line: 77, column: 4 }, end: { line: 77, column: 30 } }, '50': { start: { line: 79, column: 2 }, end: { line: 79, column: 17 } }, '51': { start: { line: 81, column: 0 }, end: { line: 81, column: 35 } }, '52': { start: { line: 83, column: 40 }, end: { line: 101, column: 1 } }, '53': { start: { line: 84, column: 2 }, end: { line: 86, column: 3 } }, '54': { start: { line: 85, column: 4 }, end: { line: 85, column: 11 } }, '55': { start: { line: 87, column: 2 }, end: { line: 89, column: 3 } }, '56': { start: { line: 88, column: 4 }, end: { line: 88, column: 11 } }, '57': { start: { line: 90, column: 15 }, end: { line: 90, column: 38 } }, '58': { start: { line: 91, column: 14 }, end: { line: 91, column: 20 } }, '59': { start: { line: 92, column: 2 }, end: { line: 99, column: 3 } }, '60': { start: { line: 93, column: 4 }, end: { line: 93, column: 36 } }, '61': { start: { line: 94, column: 4 }, end: { line: 98, column: 5 } }, '62': { start: { line: 95, column: 6 }, end: { line: 95, column: 43 } }, '63': { start: { line: 96, column: 11 }, end: { line: 98, column: 5 } }, '64': { start: { line: 97, column: 6 }, end: { line: 97, column: 51 } }, '65': { start: { line: 100, column: 2 }, end: { line: 100, column: 41 } }, '66': { start: { line: 102, column: 0 }, end: { line: 102, column: 58 } }, '67': { start: { line: 104, column: 27 }, end: { line: 118, column: 1 } }, '68': { start: { line: 105, column: 2 }, end: { line: 107, column: 3 } }, '69': { start: { line: 106, column: 4 }, end: { line: 106, column: 11 } }, '70': { start: { line: 108, column: 2 }, end: { line: 110, column: 3 } }, '71': { start: { line: 109, column: 4 }, end: { line: 109, column: 11 } }, '72': { start: { line: 111, column: 13 }, end: { line: 111, column: 19 } }, '73': { start: { line: 112, column: 14 }, end: { line: 112, column: 20 } }, '74': { start: { line: 113, column: 2 }, end: { line: 116, column: 3 } }, '75': { start: { line: 114, column: 4 }, end: { line: 114, column: 52 } }, '76': { start: { line: 115, column: 4 }, end: { line: 115, column: 30 } }, '77': { start: { line: 117, column: 2 }, end: { line: 117, column: 17 } }, '78': { start: { line: 119, column: 0 }, end: { line: 119, column: 37 } }, '79': { start: { line: 122, column: 2 }, end: { line: 124, column: 3 } }, '80': { start: { line: 123, column: 4 }, end: { line: 123, column: 11 } }, '81': { start: { line: 125, column: 2 }, end: { line: 127, column: 3 } }, '82': { start: { line: 126, column: 4 }, end: { line: 126, column: 11 } }, '83': { start: { line: 128, column: 15 }, end: { line: 128, column: 38 } }, '84': { start: { line: 129, column: 14 }, end: { line: 129, column: 20 } }, '85': { start: { line: 130, column: 14 }, end: { line: 130, column: 16 } }, '86': { start: { line: 131, column: 2 }, end: { line: 136, column: 3 } }, '87': { start: { line: 132, column: 4 }, end: { line: 132, column: 36 } }, '88': { start: { line: 133, column: 4 }, end: { line: 135, column: 5 } }, '89': { start: { line: 134, column: 6 }, end: { line: 134, column: 44 } }, '90': { start: { line: 137, column: 2 }, end: { line: 137, column: 34 } }, '91': { start: { line: 139, column: 0 }, end: { line: 139, column: 60 } } }, fnMap: { '0': { name: 'collectChildrenDiffFilter', decl: { start: { line: 5, column: 16 }, end: { line: 5, column: 41 } }, loc: { start: { line: 5, column: 51 }, end: { line: 24, column: 1 } }, line: 5 }, '1': { name: 'objectsDiffFilter', decl: { start: { line: 27, column: 16 }, end: { line: 27, column: 33 } }, loc: { start: { line: 27, column: 43 }, end: { line: 63, column: 1 } }, line: 27 }, '2': { name: 'nestedPatchFilter', decl: { start: { line: 66, column: 34 }, end: { line: 66, column: 51 } }, loc: { start: { line: 66, column: 61 }, end: { line: 80, column: 1 } }, line: 66 }, '3': { name: 'collectChildrenPatchFilter', decl: { start: { line: 83, column: 49 }, end: { line: 83, column: 75 } }, loc: { start: { line: 83, column: 85 }, end: { line: 101, column: 1 } }, line: 83 }, '4': { name: 'nestedReverseFilter', decl: { start: { line: 104, column: 36 }, end: { line: 104, column: 55 } }, loc: { start: { line: 104, column: 65 }, end: { line: 118, column: 1 } }, line: 104 }, '5': { name: 'collectChildrenReverseFilter', decl: { start: { line: 121, column: 16 }, end: { line: 121, column: 44 } }, loc: { start: { line: 121, column: 54 }, end: { line: 138, column: 1 } }, line: 121 } }, branchMap: { '0': { loc: { start: { line: 6, column: 2 }, end: { line: 8, column: 3 } }, type: 'if', locations: [{ start: { line: 6, column: 2 }, end: { line: 8, column: 3 } }, { start: { line: 6, column: 2 }, end: { line: 8, column: 3 } }], line: 6 }, '1': { loc: { start: { line: 6, column: 6 }, end: { line: 6, column: 35 } }, type: 'binary-expr', locations: [{ start: { line: 6, column: 6 }, end: { line: 6, column: 14 } }, { start: { line: 6, column: 18 }, end: { line: 6, column: 35 } }], line: 6 }, '2': { loc: { start: { line: 14, column: 4 }, end: { line: 16, column: 5 } }, type: 'if', locations: [{ start: { line: 14, column: 4 }, end: { line: 16, column: 5 } }, { start: { line: 14, column: 4 }, end: { line: 16, column: 5 } }], line: 14 }, '3': { loc: { start: { line: 17, column: 13 }, end: { line: 17, column: 25 } }, type: 'binary-expr', locations: [{ start: { line: 17, column: 13 }, end: { line: 17, column: 19 } }, { start: { line: 17, column: 23 }, end: { line: 17, column: 25 } }], line: 17 }, '4': { loc: { start: { line: 20, column: 2 }, end: { line: 22, column: 3 } }, type: 'if', locations: [{ start: { line: 20, column: 2 }, end: { line: 22, column: 3 } }, { start: { line: 20, column: 2 }, end: { line: 22, column: 3 } }], line: 20 }, '5': { loc: { start: { line: 20, column: 6 }, end: { line: 20, column: 35 } }, type: 'binary-expr', locations: [{ start: { line: 20, column: 6 }, end: { line: 20, column: 12 } }, { start: { line: 20, column: 16 }, end: { line: 20, column: 35 } }], line: 20 }, '6': { loc: { start: { line: 28, column: 2 }, end: { line: 30, column: 3 } }, type: 'if', locations: [{ start: { line: 28, column: 2 }, end: { line: 30, column: 3 } }, { start: { line: 28, column: 2 }, end: { line: 30, column: 3 } }], line: 28 }, '7': { loc: { start: { line: 28, column: 6 }, end: { line: 28, column: 58 } }, type: 'binary-expr', locations: [{ start: { line: 28, column: 6 }, end: { line: 28, column: 25 } }, { start: { line: 28, column: 29 }, end: { line: 28, column: 58 } }], line: 28 }, '8': { loc: { start: { line: 36, column: 4 }, end: { line: 38, column: 5 } }, type: 'if', locations: [{ start: { line: 36, column: 4 }, end: { line: 38, column: 5 } }, { start: { line: 36, column: 4 }, end: { line: 38, column: 5 } }], line: 36 }, '9': { loc: { start: { line: 39, column: 4 }, end: { line: 41, column: 5 } }, type: 'if', locations: [{ start: { line: 39, column: 4 }, end: { line: 41, column: 5 } }, { start: { line: 39, column: 4 }, end: { line: 41, column: 5 } }], line: 39 }, '10': { loc: { start: { line: 39, column: 8 }, end: { line: 39, column: 56 } }, type: 'binary-expr', locations: [{ start: { line: 39, column: 8 }, end: { line: 39, column: 22 } }, { start: { line: 39, column: 26 }, end: { line: 39, column: 56 } }], line: 39 }, '11': { loc: { start: { line: 46, column: 4 }, end: { line: 48, column: 5 } }, type: 'if', locations: [{ start: { line: 46, column: 4 }, end: { line: 48, column: 5 } }, { start: { line: 46, column: 4 }, end: { line: 48, column: 5 } }], line: 46 }, '12': { loc: { start: { line: 49, column: 4 }, end: { line: 51, column: 5 } }, type: 'if', locations: [{ start: { line: 49, column: 4 }, end: { line: 51, column: 5 } }, { start: { line: 49, column: 4 }, end: { line: 51, column: 5 } }], line: 49 }, '13': { loc: { start: { line: 49, column: 8 }, end: { line: 49, column: 56 } }, type: 'binary-expr', locations: [{ start: { line: 49, column: 8 }, end: { line: 49, column: 22 } }, { start: { line: 49, column: 26 }, end: { line: 49, column: 56 } }], line: 49 }, '14': { loc: { start: { line: 52, column: 4 }, end: { line: 55, column: 5 } }, type: 'if', locations: [{ start: { line: 52, column: 4 }, end: { line: 55, column: 5 } }, { start: { line: 52, column: 4 }, end: { line: 55, column: 5 } }], line: 52 }, '15': { loc: { start: { line: 58, column: 2 }, end: { line: 61, column: 3 } }, type: 'if', locations: [{ start: { line: 58, column: 2 }, end: { line: 61, column: 3 } }, { start: { line: 58, column: 2 }, end: { line: 61, column: 3 } }], line: 58 }, '16': { loc: { start: { line: 58, column: 6 }, end: { line: 58, column: 56 } }, type: 'binary-expr', locations: [{ start: { line: 58, column: 6 }, end: { line: 58, column: 23 } }, { start: { line: 58, column: 27 }, end: { line: 58, column: 56 } }], line: 58 }, '17': { loc: { start: { line: 67, column: 2 }, end: { line: 69, column: 3 } }, type: 'if', locations: [{ start: { line: 67, column: 2 }, end: { line: 69, column: 3 } }, { start: { line: 67, column: 2 }, end: { line: 69, column: 3 } }], line: 67 }, '18': { loc: { start: { line: 70, column: 2 }, end: { line: 72, column: 3 } }, type: 'if', locations: [{ start: { line: 70, column: 2 }, end: { line: 72, column: 3 } }, { start: { line: 70, column: 2 }, end: { line: 72, column: 3 } }], line: 70 }, '19': { loc: { start: { line: 84, column: 2 }, end: { line: 86, column: 3 } }, type: 'if', locations: [{ start: { line: 84, column: 2 }, end: { line: 86, column: 3 } }, { start: { line: 84, column: 2 }, end: { line: 86, column: 3 } }], line: 84 }, '20': { loc: { start: { line: 84, column: 6 }, end: { line: 84, column: 35 } }, type: 'binary-expr', locations: [{ start: { line: 84, column: 6 }, end: { line: 84, column: 14 } }, { start: { line: 84, column: 18 }, end: { line: 84, column: 35 } }], line: 84 }, '21': { loc: { start: { line: 87, column: 2 }, end: { line: 89, column: 3 } }, type: 'if', locations: [{ start: { line: 87, column: 2 }, end: { line: 89, column: 3 } }, { start: { line: 87, column: 2 }, end: { line: 89, column: 3 } }], line: 87 }, '22': { loc: { start: { line: 94, column: 4 }, end: { line: 98, column: 5 } }, type: 'if', locations: [{ start: { line: 94, column: 4 }, end: { line: 98, column: 5 } }, { start: { line: 94, column: 4 }, end: { line: 98, column: 5 } }], line: 94 }, '23': { loc: { start: { line: 94, column: 8 }, end: { line: 94, column: 105 } }, type: 'binary-expr', locations: [{ start: { line: 94, column: 8 }, end: { line: 94, column: 75 } }, { start: { line: 94, column: 79 }, end: { line: 94, column: 105 } }], line: 94 }, '24': { loc: { start: { line: 96, column: 11 }, end: { line: 98, column: 5 } }, type: 'if', locations: [{ start: { line: 96, column: 11 }, end: { line: 98, column: 5 } }, { start: { line: 96, column: 11 }, end: { line: 98, column: 5 } }], line: 96 }, '25': { loc: { start: { line: 105, column: 2 }, end: { line: 107, column: 3 } }, type: 'if', locations: [{ start: { line: 105, column: 2 }, end: { line: 107, column: 3 } }, { start: { line: 105, column: 2 }, end: { line: 107, column: 3 } }], line: 105 }, '26': { loc: { start: { line: 108, column: 2 }, end: { line: 110, column: 3 } }, type: 'if', locations: [{ start: { line: 108, column: 2 }, end: { line: 110, column: 3 } }, { start: { line: 108, column: 2 }, end: { line: 110, column: 3 } }], line: 108 }, '27': { loc: { start: { line: 122, column: 2 }, end: { line: 124, column: 3 } }, type: 'if', locations: [{ start: { line: 122, column: 2 }, end: { line: 124, column: 3 } }, { start: { line: 122, column: 2 }, end: { line: 124, column: 3 } }], line: 122 }, '28': { loc: { start: { line: 122, column: 6 }, end: { line: 122, column: 35 } }, type: 'binary-expr', locations: [{ start: { line: 122, column: 6 }, end: { line: 122, column: 14 } }, { start: { line: 122, column: 18 }, end: { line: 122, column: 35 } }], line: 122 }, '29': { loc: { start: { line: 125, column: 2 }, end: { line: 127, column: 3 } }, type: 'if', locations: [{ start: { line: 125, column: 2 }, end: { line: 127, column: 3 } }, { start: { line: 125, column: 2 }, end: { line: 127, column: 3 } }], line: 125 }, '30': { loc: { start: { line: 133, column: 4 }, end: { line: 135, column: 5 } }, type: 'if', locations: [{ start: { line: 133, column: 4 }, end: { line: 135, column: 5 } }, { start: { line: 133, column: 4 }, end: { line: 135, column: 5 } }], line: 133 } }, s: { '0': 0, '1': 0, '2': 0, '3': 0, '4': 0, '5': 0, '6': 0, '7': 0, '8': 0, '9': 0, '10': 0, '11': 0, '12': 0, '13': 0, '14': 0, '15': 0, '16': 0, '17': 0, '18': 0, '19': 0, '20': 0, '21': 0, '22': 0, '23': 0, '24': 0, '25': 0, '26': 0, '27': 0, '28': 0, '29': 0, '30': 0, '31': 0, '32': 0, '33': 0, '34': 0, '35': 0, '36': 0, '37': 0, '38': 0, '39': 0, '40': 0, '41': 0, '42': 0, '43': 0, '44': 0, '45': 0, '46': 0, '47': 0, '48': 0, '49': 0, '50': 0, '51': 0, '52': 0, '53': 0, '54': 0, '55': 0, '56': 0, '57': 0, '58': 0, '59': 0, '60': 0, '61': 0, '62': 0, '63': 0, '64': 0, '65': 0, '66': 0, '67': 0, '68': 0, '69': 0, '70': 0, '71': 0, '72': 0, '73': 0, '74': 0, '75': 0, '76': 0, '77': 0, '78': 0, '79': 0, '80': 0, '81': 0, '82': 0, '83': 0, '84': 0, '85': 0, '86': 0, '87': 0, '88': 0, '89': 0, '90': 0, '91': 0 }, f: { '0': 0, '1': 0, '2': 0, '3': 0, '4': 0, '5': 0 }, b: { '0': [0, 0], '1': [0, 0], '2': [0, 0], '3': [0, 0], '4': [0, 0], '5': [0, 0], '6': [0, 0], '7': [0, 0], '8': [0, 0], '9': [0, 0], '10': [0, 0], '11': [0, 0], '12': [0, 0], '13': [0, 0], '14': [0, 0], '15': [0, 0], '16': [0, 0], '17': [0, 0], '18': [0, 0], '19': [0, 0], '20': [0, 0], '21': [0, 0], '22': [0, 0], '23': [0, 0], '24': [0, 0], '25': [0, 0], '26': [0, 0], '27': [0, 0], '28': [0, 0], '29': [0, 0], '30': [0, 0] }, _coverageSchema: '332fd63041d2c1bcb487cc26dd0d5f7d97098a6c' },
      coverage = global[gcv] || (global[gcv] = {});if (coverage[path] && coverage[path].hash === hash) {
    return coverage[path];
  }coverageData.hash = hash;return coverage[path] = coverageData;
}();function collectChildrenDiffFilter(context) {
  cov_3kisnvyfd.f[0]++;cov_3kisnvyfd.s[0]++;if ((cov_3kisnvyfd.b[1][0]++, !context) || (cov_3kisnvyfd.b[1][1]++, !context.children)) {
    cov_3kisnvyfd.b[0][0]++;cov_3kisnvyfd.s[1]++;return;
  } else {
    cov_3kisnvyfd.b[0][1]++;
  }var length = (cov_3kisnvyfd.s[2]++, context.children.length);var child = (cov_3kisnvyfd.s[3]++, void 0);var result = (cov_3kisnvyfd.s[4]++, context.result);cov_3kisnvyfd.s[5]++;for (var index = 0; index < length; index++) {
    cov_3kisnvyfd.s[6]++;child = context.children[index];cov_3kisnvyfd.s[7]++;if (typeof child.result === 'undefined') {
      cov_3kisnvyfd.b[2][0]++;cov_3kisnvyfd.s[8]++;continue;
    } else {
      cov_3kisnvyfd.b[2][1]++;
    }cov_3kisnvyfd.s[9]++;result = (cov_3kisnvyfd.b[3][0]++, result) || (cov_3kisnvyfd.b[3][1]++, {});cov_3kisnvyfd.s[10]++;result[child.childName] = child.result;
  }cov_3kisnvyfd.s[11]++;if ((cov_3kisnvyfd.b[5][0]++, result) && (cov_3kisnvyfd.b[5][1]++, context.leftIsArray)) {
    cov_3kisnvyfd.b[4][0]++;cov_3kisnvyfd.s[12]++;result._t = 'a';
  } else {
    cov_3kisnvyfd.b[4][1]++;
  }cov_3kisnvyfd.s[13]++;context.setResult(result).exit();
}cov_3kisnvyfd.s[14]++;collectChildrenDiffFilter.filterName = 'collectChildren';function objectsDiffFilter(context) {
  cov_3kisnvyfd.f[1]++;cov_3kisnvyfd.s[15]++;if ((cov_3kisnvyfd.b[7][0]++, context.leftIsArray) || (cov_3kisnvyfd.b[7][1]++, context.leftType !== 'object')) {
    cov_3kisnvyfd.b[6][0]++;cov_3kisnvyfd.s[16]++;return;
  } else {
    cov_3kisnvyfd.b[6][1]++;
  }var name = (cov_3kisnvyfd.s[17]++, void 0);var child = (cov_3kisnvyfd.s[18]++, void 0);var propertyFilter = (cov_3kisnvyfd.s[19]++, context.options.propertyFilter);cov_3kisnvyfd.s[20]++;for (name in context.left) {
    cov_3kisnvyfd.s[21]++;if (!Object.prototype.hasOwnProperty.call(context.left, name)) {
      cov_3kisnvyfd.b[8][0]++;cov_3kisnvyfd.s[22]++;continue;
    } else {
      cov_3kisnvyfd.b[8][1]++;
    }cov_3kisnvyfd.s[23]++;if ((cov_3kisnvyfd.b[10][0]++, propertyFilter) && (cov_3kisnvyfd.b[10][1]++, !propertyFilter(name, context))) {
      cov_3kisnvyfd.b[9][0]++;cov_3kisnvyfd.s[24]++;continue;
    } else {
      cov_3kisnvyfd.b[9][1]++;
    }cov_3kisnvyfd.s[25]++;child = new DiffContext(context.left[name], context.right[name]);cov_3kisnvyfd.s[26]++;context.push(child, name);
  }cov_3kisnvyfd.s[27]++;for (name in context.right) {
    cov_3kisnvyfd.s[28]++;if (!Object.prototype.hasOwnProperty.call(context.right, name)) {
      cov_3kisnvyfd.b[11][0]++;cov_3kisnvyfd.s[29]++;continue;
    } else {
      cov_3kisnvyfd.b[11][1]++;
    }cov_3kisnvyfd.s[30]++;if ((cov_3kisnvyfd.b[13][0]++, propertyFilter) && (cov_3kisnvyfd.b[13][1]++, !propertyFilter(name, context))) {
      cov_3kisnvyfd.b[12][0]++;cov_3kisnvyfd.s[31]++;continue;
    } else {
      cov_3kisnvyfd.b[12][1]++;
    }cov_3kisnvyfd.s[32]++;if (typeof context.left[name] === 'undefined') {
      cov_3kisnvyfd.b[14][0]++;cov_3kisnvyfd.s[33]++;child = new DiffContext(undefined, context.right[name]);cov_3kisnvyfd.s[34]++;context.push(child, name);
    } else {
      cov_3kisnvyfd.b[14][1]++;
    }
  }cov_3kisnvyfd.s[35]++;if ((cov_3kisnvyfd.b[16][0]++, !context.children) || (cov_3kisnvyfd.b[16][1]++, context.children.length === 0)) {
    cov_3kisnvyfd.b[15][0]++;cov_3kisnvyfd.s[36]++;context.setResult(undefined).exit();cov_3kisnvyfd.s[37]++;return;
  } else {
    cov_3kisnvyfd.b[15][1]++;
  }cov_3kisnvyfd.s[38]++;context.exit();
}cov_3kisnvyfd.s[39]++;objectsDiffFilter.filterName = 'objects';cov_3kisnvyfd.s[40]++;var patchFilter$1 = function nestedPatchFilter(context) {
  cov_3kisnvyfd.f[2]++;cov_3kisnvyfd.s[41]++;if (!context.nested) {
    cov_3kisnvyfd.b[17][0]++;cov_3kisnvyfd.s[42]++;return;
  } else {
    cov_3kisnvyfd.b[17][1]++;
  }cov_3kisnvyfd.s[43]++;if (context.delta._t) {
    cov_3kisnvyfd.b[18][0]++;cov_3kisnvyfd.s[44]++;return;
  } else {
    cov_3kisnvyfd.b[18][1]++;
  }var name = (cov_3kisnvyfd.s[45]++, void 0);var child = (cov_3kisnvyfd.s[46]++, void 0);cov_3kisnvyfd.s[47]++;for (name in context.delta) {
    cov_3kisnvyfd.s[48]++;child = new PatchContext(context.left[name], context.delta[name]);cov_3kisnvyfd.s[49]++;context.push(child, name);
  }cov_3kisnvyfd.s[50]++;context.exit();
};cov_3kisnvyfd.s[51]++;patchFilter$1.filterName = 'objects';cov_3kisnvyfd.s[52]++;var collectChildrenPatchFilter = function collectChildrenPatchFilter(context) {
  cov_3kisnvyfd.f[3]++;cov_3kisnvyfd.s[53]++;if ((cov_3kisnvyfd.b[20][0]++, !context) || (cov_3kisnvyfd.b[20][1]++, !context.children)) {
    cov_3kisnvyfd.b[19][0]++;cov_3kisnvyfd.s[54]++;return;
  } else {
    cov_3kisnvyfd.b[19][1]++;
  }cov_3kisnvyfd.s[55]++;if (context.delta._t) {
    cov_3kisnvyfd.b[21][0]++;cov_3kisnvyfd.s[56]++;return;
  } else {
    cov_3kisnvyfd.b[21][1]++;
  }var length = (cov_3kisnvyfd.s[57]++, context.children.length);var child = (cov_3kisnvyfd.s[58]++, void 0);cov_3kisnvyfd.s[59]++;for (var index = 0; index < length; index++) {
    cov_3kisnvyfd.s[60]++;child = context.children[index];cov_3kisnvyfd.s[61]++;if ((cov_3kisnvyfd.b[23][0]++, Object.prototype.hasOwnProperty.call(context.left, child.childName)) && (cov_3kisnvyfd.b[23][1]++, child.result === undefined)) {
      cov_3kisnvyfd.b[22][0]++;cov_3kisnvyfd.s[62]++;delete context.left[child.childName];
    } else {
      cov_3kisnvyfd.b[22][1]++;cov_3kisnvyfd.s[63]++;if (context.left[child.childName] !== child.result) {
        cov_3kisnvyfd.b[24][0]++;cov_3kisnvyfd.s[64]++;context.left[child.childName] = child.result;
      } else {
        cov_3kisnvyfd.b[24][1]++;
      }
    }
  }cov_3kisnvyfd.s[65]++;context.setResult(context.left).exit();
};cov_3kisnvyfd.s[66]++;collectChildrenPatchFilter.filterName = 'collectChildren';cov_3kisnvyfd.s[67]++;var reverseFilter$1 = function nestedReverseFilter(context) {
  cov_3kisnvyfd.f[4]++;cov_3kisnvyfd.s[68]++;if (!context.nested) {
    cov_3kisnvyfd.b[25][0]++;cov_3kisnvyfd.s[69]++;return;
  } else {
    cov_3kisnvyfd.b[25][1]++;
  }cov_3kisnvyfd.s[70]++;if (context.delta._t) {
    cov_3kisnvyfd.b[26][0]++;cov_3kisnvyfd.s[71]++;return;
  } else {
    cov_3kisnvyfd.b[26][1]++;
  }var name = (cov_3kisnvyfd.s[72]++, void 0);var child = (cov_3kisnvyfd.s[73]++, void 0);cov_3kisnvyfd.s[74]++;for (name in context.delta) {
    cov_3kisnvyfd.s[75]++;child = new ReverseContext(context.delta[name]);cov_3kisnvyfd.s[76]++;context.push(child, name);
  }cov_3kisnvyfd.s[77]++;context.exit();
};cov_3kisnvyfd.s[78]++;reverseFilter$1.filterName = 'objects';function collectChildrenReverseFilter(context) {
  cov_3kisnvyfd.f[5]++;cov_3kisnvyfd.s[79]++;if ((cov_3kisnvyfd.b[28][0]++, !context) || (cov_3kisnvyfd.b[28][1]++, !context.children)) {
    cov_3kisnvyfd.b[27][0]++;cov_3kisnvyfd.s[80]++;return;
  } else {
    cov_3kisnvyfd.b[27][1]++;
  }cov_3kisnvyfd.s[81]++;if (context.delta._t) {
    cov_3kisnvyfd.b[29][0]++;cov_3kisnvyfd.s[82]++;return;
  } else {
    cov_3kisnvyfd.b[29][1]++;
  }var length = (cov_3kisnvyfd.s[83]++, context.children.length);var child = (cov_3kisnvyfd.s[84]++, void 0);var delta = (cov_3kisnvyfd.s[85]++, {});cov_3kisnvyfd.s[86]++;for (var index = 0; index < length; index++) {
    cov_3kisnvyfd.s[87]++;child = context.children[index];cov_3kisnvyfd.s[88]++;if (delta[child.childName] !== child.result) {
      cov_3kisnvyfd.b[30][0]++;cov_3kisnvyfd.s[89]++;delta[child.childName] = child.result;
    } else {
      cov_3kisnvyfd.b[30][1]++;
    }
  }cov_3kisnvyfd.s[90]++;context.setResult(delta).exit();
}cov_3kisnvyfd.s[91]++;collectChildrenReverseFilter.filterName = 'collectChildren';

var cov_2pglahz8hh = function () {
  var path = '/Users/wangjie/project/plugins/jsondiffpatch/src/filters/lcs.js',
      hash = 'a924ebf506e7bba430f0b68b4b359e7a0138bbe7',
      Function = function () {}.constructor,
      global = new Function('return this')(),
      gcv = '__coverage__',
      coverageData = { path: '/Users/wangjie/project/plugins/jsondiffpatch/src/filters/lcs.js', statementMap: { '0': { start: { line: 9, column: 19 }, end: { line: 11, column: 1 } }, '1': { start: { line: 10, column: 2 }, end: { line: 10, column: 43 } }, '2': { start: { line: 13, column: 19 }, end: { line: 39, column: 1 } }, '3': { start: { line: 14, column: 13 }, end: { line: 14, column: 26 } }, '4': { start: { line: 15, column: 13 }, end: { line: 15, column: 26 } }, '5': { start: { line: 16, column: 10 }, end: { line: 16, column: 16 } }, '6': { start: { line: 17, column: 10 }, end: { line: 17, column: 16 } }, '7': { start: { line: 20, column: 15 }, end: { line: 20, column: 25 } }, '8': { start: { line: 21, column: 2 }, end: { line: 26, column: 3 } }, '9': { start: { line: 22, column: 4 }, end: { line: 22, column: 27 } }, '10': { start: { line: 23, column: 4 }, end: { line: 25, column: 5 } }, '11': { start: { line: 24, column: 6 }, end: { line: 24, column: 23 } }, '12': { start: { line: 27, column: 2 }, end: { line: 27, column: 23 } }, '13': { start: { line: 29, column: 2 }, end: { line: 37, column: 3 } }, '14': { start: { line: 30, column: 4 }, end: { line: 36, column: 5 } }, '15': { start: { line: 31, column: 6 }, end: { line: 35, column: 7 } }, '16': { start: { line: 32, column: 8 }, end: { line: 32, column: 48 } }, '17': { start: { line: 34, column: 8 }, end: { line: 34, column: 68 } }, '18': { start: { line: 38, column: 2 }, end: { line: 38, column: 16 } }, '19': { start: { line: 41, column: 16 }, end: { line: 69, column: 1 } }, '20': { start: { line: 42, column: 15 }, end: { line: 42, column: 28 } }, '21': { start: { line: 43, column: 15 }, end: { line: 43, column: 28 } }, '22': { start: { line: 44, column: 20 }, end: { line: 48, column: 3 } }, '23': { start: { line: 50, column: 2 }, end: { line: 67, column: 3 } }, '24': { start: { line: 51, column: 21 }, end: { line: 51, column: 82 } }, '25': { start: { line: 52, column: 4 }, end: { line: 66, column: 5 } }, '26': { start: { line: 53, column: 6 }, end: { line: 53, column: 55 } }, '27': { start: { line: 54, column: 6 }, end: { line: 54, column: 47 } }, '28': { start: { line: 55, column: 6 }, end: { line: 55, column: 47 } }, '29': { start: { line: 56, column: 6 }, end: { line: 56, column: 15 } }, '30': { start: { line: 57, column: 6 }, end: { line: 57, column: 15 } }, '31': { start: { line: 59, column: 31 }, end: { line: 59, column: 57 } }, '32': { start: { line: 60, column: 30 }, end: { line: 60, column: 56 } }, '33': { start: { line: 61, column: 6 }, end: { line: 65, column: 7 } }, '34': { start: { line: 62, column: 8 }, end: { line: 62, column: 17 } }, '35': { start: { line: 64, column: 8 }, end: { line: 64, column: 17 } }, '36': { start: { line: 68, column: 2 }, end: { line: 68, column: 21 } }, '37': { start: { line: 71, column: 10 }, end: { line: 79, column: 1 } }, '38': { start: { line: 72, column: 21 }, end: { line: 72, column: 34 } }, '39': { start: { line: 73, column: 15 }, end: { line: 73, column: 80 } }, '40': { start: { line: 74, column: 15 }, end: { line: 74, column: 62 } }, '41': { start: { line: 75, column: 2 }, end: { line: 77, column: 3 } }, '42': { start: { line: 76, column: 4 }, end: { line: 76, column: 47 } }, '43': { start: { line: 78, column: 2 }, end: { line: 78, column: 16 } } }, fnMap: { '0': { name: 'defaultMatch', decl: { start: { line: 9, column: 28 }, end: { line: 9, column: 40 } }, loc: { start: { line: 9, column: 73 }, end: { line: 11, column: 1 } }, line: 9 }, '1': { name: 'lengthMatrix', decl: { start: { line: 13, column: 28 }, end: { line: 13, column: 40 } }, loc: { start: { line: 13, column: 73 }, end: { line: 39, column: 1 } }, line: 13 }, '2': { name: 'backtrack', decl: { start: { line: 41, column: 25 }, end: { line: 41, column: 34 } }, loc: { start: { line: 41, column: 68 }, end: { line: 69, column: 1 } }, line: 41 }, '3': { name: 'get', decl: { start: { line: 71, column: 19 }, end: { line: 71, column: 22 } }, loc: { start: { line: 71, column: 55 }, end: { line: 79, column: 1 } }, line: 71 } }, branchMap: { '0': { loc: { start: { line: 31, column: 6 }, end: { line: 35, column: 7 } }, type: 'if', locations: [{ start: { line: 31, column: 6 }, end: { line: 35, column: 7 } }, { start: { line: 31, column: 6 }, end: { line: 35, column: 7 } }], line: 31 }, '1': { loc: { start: { line: 50, column: 9 }, end: { line: 50, column: 37 } }, type: 'binary-expr', locations: [{ start: { line: 50, column: 9 }, end: { line: 50, column: 21 } }, { start: { line: 50, column: 25 }, end: { line: 50, column: 37 } }], line: 50 }, '2': { loc: { start: { line: 52, column: 4 }, end: { line: 66, column: 5 } }, type: 'if', locations: [{ start: { line: 52, column: 4 }, end: { line: 66, column: 5 } }, { start: { line: 52, column: 4 }, end: { line: 66, column: 5 } }], line: 52 }, '3': { loc: { start: { line: 61, column: 6 }, end: { line: 65, column: 7 } }, type: 'if', locations: [{ start: { line: 61, column: 6 }, end: { line: 65, column: 7 } }, { start: { line: 61, column: 6 }, end: { line: 65, column: 7 } }], line: 61 }, '4': { loc: { start: { line: 72, column: 21 }, end: { line: 72, column: 34 } }, type: 'binary-expr', locations: [{ start: { line: 72, column: 21 }, end: { line: 72, column: 28 } }, { start: { line: 72, column: 32 }, end: { line: 72, column: 34 } }], line: 72 }, '5': { loc: { start: { line: 73, column: 44 }, end: { line: 73, column: 65 } }, type: 'binary-expr', locations: [{ start: { line: 73, column: 44 }, end: { line: 73, column: 49 } }, { start: { line: 73, column: 53 }, end: { line: 73, column: 65 } }], line: 73 }, '6': { loc: { start: { line: 75, column: 2 }, end: { line: 77, column: 3 } }, type: 'if', locations: [{ start: { line: 75, column: 2 }, end: { line: 77, column: 3 } }, { start: { line: 75, column: 2 }, end: { line: 77, column: 3 } }], line: 75 }, '7': { loc: { start: { line: 75, column: 6 }, end: { line: 75, column: 62 } }, type: 'binary-expr', locations: [{ start: { line: 75, column: 6 }, end: { line: 75, column: 32 } }, { start: { line: 75, column: 36 }, end: { line: 75, column: 62 } }], line: 75 } }, s: { '0': 0, '1': 0, '2': 0, '3': 0, '4': 0, '5': 0, '6': 0, '7': 0, '8': 0, '9': 0, '10': 0, '11': 0, '12': 0, '13': 0, '14': 0, '15': 0, '16': 0, '17': 0, '18': 0, '19': 0, '20': 0, '21': 0, '22': 0, '23': 0, '24': 0, '25': 0, '26': 0, '27': 0, '28': 0, '29': 0, '30': 0, '31': 0, '32': 0, '33': 0, '34': 0, '35': 0, '36': 0, '37': 0, '38': 0, '39': 0, '40': 0, '41': 0, '42': 0, '43': 0 }, f: { '0': 0, '1': 0, '2': 0, '3': 0 }, b: { '0': [0, 0], '1': [0, 0], '2': [0, 0], '3': [0, 0], '4': [0, 0], '5': [0, 0], '6': [0, 0], '7': [0, 0] }, _coverageSchema: '332fd63041d2c1bcb487cc26dd0d5f7d97098a6c' },
      coverage = global[gcv] || (global[gcv] = {});if (coverage[path] && coverage[path].hash === hash) {
    return coverage[path];
  }coverageData.hash = hash;return coverage[path] = coverageData;
}();cov_2pglahz8hh.s[0]++;var defaultMatch = function defaultMatch(array1, array2, index1, index2) {
  cov_2pglahz8hh.f[0]++;cov_2pglahz8hh.s[1]++;return array1[index1] === array2[index2];
};cov_2pglahz8hh.s[2]++;var lengthMatrix = function lengthMatrix(array1, array2, match, context) {
  cov_2pglahz8hh.f[1]++;var len1 = (cov_2pglahz8hh.s[3]++, array1.length);var len2 = (cov_2pglahz8hh.s[4]++, array2.length);var x = (cov_2pglahz8hh.s[5]++, void 0),
      y = (cov_2pglahz8hh.s[6]++, void 0);var matrix = (cov_2pglahz8hh.s[7]++, [len1 + 1]);cov_2pglahz8hh.s[8]++;for (x = 0; x < len1 + 1; x++) {
    cov_2pglahz8hh.s[9]++;matrix[x] = [len2 + 1];cov_2pglahz8hh.s[10]++;for (y = 0; y < len2 + 1; y++) {
      cov_2pglahz8hh.s[11]++;matrix[x][y] = 0;
    }
  }cov_2pglahz8hh.s[12]++;matrix.match = match;cov_2pglahz8hh.s[13]++;for (x = 1; x < len1 + 1; x++) {
    cov_2pglahz8hh.s[14]++;for (y = 1; y < len2 + 1; y++) {
      cov_2pglahz8hh.s[15]++;if (match(array1, array2, x - 1, y - 1, context)) {
        cov_2pglahz8hh.b[0][0]++;cov_2pglahz8hh.s[16]++;matrix[x][y] = matrix[x - 1][y - 1] + 1;
      } else {
        cov_2pglahz8hh.b[0][1]++;cov_2pglahz8hh.s[17]++;matrix[x][y] = Math.max(matrix[x - 1][y], matrix[x][y - 1]);
      }
    }
  }cov_2pglahz8hh.s[18]++;return matrix;
};cov_2pglahz8hh.s[19]++;var backtrack = function backtrack(matrix, array1, array2, context) {
  cov_2pglahz8hh.f[2]++;var index1 = (cov_2pglahz8hh.s[20]++, array1.length);var index2 = (cov_2pglahz8hh.s[21]++, array2.length);var subsequence = (cov_2pglahz8hh.s[22]++, { sequence: [], indices1: [], indices2: [] });cov_2pglahz8hh.s[23]++;while ((cov_2pglahz8hh.b[1][0]++, index1 !== 0) && (cov_2pglahz8hh.b[1][1]++, index2 !== 0)) {
    var sameLetter = (cov_2pglahz8hh.s[24]++, matrix.match(array1, array2, index1 - 1, index2 - 1, context));cov_2pglahz8hh.s[25]++;if (sameLetter) {
      cov_2pglahz8hh.b[2][0]++;cov_2pglahz8hh.s[26]++;subsequence.sequence.unshift(array1[index1 - 1]);cov_2pglahz8hh.s[27]++;subsequence.indices1.unshift(index1 - 1);cov_2pglahz8hh.s[28]++;subsequence.indices2.unshift(index2 - 1);cov_2pglahz8hh.s[29]++;--index1;cov_2pglahz8hh.s[30]++;--index2;
    } else {
      cov_2pglahz8hh.b[2][1]++;var valueAtMatrixAbove = (cov_2pglahz8hh.s[31]++, matrix[index1][index2 - 1]);var valueAtMatrixLeft = (cov_2pglahz8hh.s[32]++, matrix[index1 - 1][index2]);cov_2pglahz8hh.s[33]++;if (valueAtMatrixAbove > valueAtMatrixLeft) {
        cov_2pglahz8hh.b[3][0]++;cov_2pglahz8hh.s[34]++;--index2;
      } else {
        cov_2pglahz8hh.b[3][1]++;cov_2pglahz8hh.s[35]++;--index1;
      }
    }
  }cov_2pglahz8hh.s[36]++;return subsequence;
};cov_2pglahz8hh.s[37]++;var get$1$1 = function get$$1(array1, array2, match, context) {
  cov_2pglahz8hh.f[3]++;var innerContext = (cov_2pglahz8hh.s[38]++, (cov_2pglahz8hh.b[4][0]++, context) || (cov_2pglahz8hh.b[4][1]++, {}));var matrix = (cov_2pglahz8hh.s[39]++, lengthMatrix(array1, array2, (cov_2pglahz8hh.b[5][0]++, match) || (cov_2pglahz8hh.b[5][1]++, defaultMatch), innerContext));var result = (cov_2pglahz8hh.s[40]++, backtrack(matrix, array1, array2, innerContext));cov_2pglahz8hh.s[41]++;if ((cov_2pglahz8hh.b[7][0]++, typeof array1 === 'string') && (cov_2pglahz8hh.b[7][1]++, typeof array2 === 'string')) {
    cov_2pglahz8hh.b[6][0]++;cov_2pglahz8hh.s[42]++;result.sequence = result.sequence.join('');
  } else {
    cov_2pglahz8hh.b[6][1]++;
  }cov_2pglahz8hh.s[43]++;return result;
};var lcs = { get: get$1$1 };

var cov_ybgvpmlrn = function () {
  var path = '/Users/wangjie/project/plugins/jsondiffpatch/src/filters/arrays.js',
      hash = '3461c6cc7fac326d67983af5c4f1d8058e2d82a9',
      Function = function () {}.constructor,
      global = new Function('return this')(),
      gcv = '__coverage__',
      coverageData = { path: '/Users/wangjie/project/plugins/jsondiffpatch/src/filters/arrays.js', statementMap: { '0': { start: { line: 7, column: 17 }, end: { line: 7, column: 18 } }, '1': { start: { line: 9, column: 14 }, end: { line: 11, column: 1 } }, '2': { start: { line: 10, column: 2 }, end: { line: 10, column: 28 } }, '3': { start: { line: 13, column: 19 }, end: { line: 23, column: 1 } }, '4': { start: { line: 14, column: 2 }, end: { line: 14, column: 29 } }, '5': { start: { line: 16, column: 15 }, end: { line: 16, column: 27 } }, '6': { start: { line: 17, column: 2 }, end: { line: 21, column: 3 } }, '7': { start: { line: 18, column: 4 }, end: { line: 20, column: 5 } }, '8': { start: { line: 19, column: 6 }, end: { line: 19, column: 15 } }, '9': { start: { line: 22, column: 2 }, end: { line: 22, column: 12 } }, '10': { start: { line: 26, column: 2 }, end: { line: 34, column: 3 } }, '11': { start: { line: 27, column: 15 }, end: { line: 27, column: 29 } }, '12': { start: { line: 28, column: 4 }, end: { line: 33, column: 5 } }, '13': { start: { line: 29, column: 17 }, end: { line: 29, column: 31 } }, '14': { start: { line: 30, column: 6 }, end: { line: 32, column: 7 } }, '15': { start: { line: 31, column: 8 }, end: { line: 31, column: 20 } }, '16': { start: { line: 38, column: 15 }, end: { line: 38, column: 29 } }, '17': { start: { line: 39, column: 15 }, end: { line: 39, column: 29 } }, '18': { start: { line: 40, column: 2 }, end: { line: 42, column: 3 } }, '19': { start: { line: 41, column: 4 }, end: { line: 41, column: 16 } }, '20': { start: { line: 43, column: 2 }, end: { line: 45, column: 3 } }, '21': { start: { line: 44, column: 4 }, end: { line: 44, column: 17 } }, '22': { start: { line: 46, column: 19 }, end: { line: 46, column: 37 } }, '23': { start: { line: 47, column: 2 }, end: { line: 50, column: 3 } }, '24': { start: { line: 49, column: 4 }, end: { line: 49, column: 56 } }, '25': { start: { line: 51, column: 14 }, end: { line: 51, column: 20 } }, '26': { start: { line: 52, column: 14 }, end: { line: 52, column: 20 } }, '27': { start: { line: 53, column: 2 }, end: { line: 61, column: 3 } }, '28': { start: { line: 54, column: 4 }, end: { line: 54, column: 50 } }, '29': { start: { line: 55, column: 4 }, end: { line: 55, column: 39 } }, '30': { start: { line: 56, column: 4 }, end: { line: 58, column: 5 } }, '31': { start: { line: 57, column: 6 }, end: { line: 57, column: 70 } }, '32': { start: { line: 60, column: 4 }, end: { line: 60, column: 31 } }, '33': { start: { line: 62, column: 2 }, end: { line: 64, column: 3 } }, '34': { start: { line: 63, column: 4 }, end: { line: 63, column: 17 } }, '35': { start: { line: 65, column: 2 }, end: { line: 73, column: 3 } }, '36': { start: { line: 66, column: 4 }, end: { line: 66, column: 50 } }, '37': { start: { line: 67, column: 4 }, end: { line: 67, column: 39 } }, '38': { start: { line: 68, column: 4 }, end: { line: 70, column: 5 } }, '39': { start: { line: 69, column: 6 }, end: { line: 69, column: 70 } }, '40': { start: { line: 72, column: 4 }, end: { line: 72, column: 31 } }, '41': { start: { line: 74, column: 2 }, end: { line: 76, column: 3 } }, '42': { start: { line: 75, column: 4 }, end: { line: 75, column: 17 } }, '43': { start: { line: 77, column: 2 }, end: { line: 77, column: 25 } }, '44': { start: { line: 80, column: 24 }, end: { line: 217, column: 1 } }, '45': { start: { line: 81, column: 2 }, end: { line: 83, column: 3 } }, '46': { start: { line: 82, column: 4 }, end: { line: 82, column: 11 } }, '47': { start: { line: 85, column: 21 }, end: { line: 88, column: 3 } }, '48': { start: { line: 89, column: 19 }, end: { line: 89, column: 20 } }, '49': { start: { line: 90, column: 19 }, end: { line: 90, column: 20 } }, '50': { start: { line: 91, column: 14 }, end: { line: 91, column: 20 } }, '51': { start: { line: 92, column: 15 }, end: { line: 92, column: 21 } }, '52': { start: { line: 93, column: 15 }, end: { line: 93, column: 21 } }, '53': { start: { line: 94, column: 15 }, end: { line: 94, column: 27 } }, '54': { start: { line: 95, column: 15 }, end: { line: 95, column: 28 } }, '55': { start: { line: 96, column: 13 }, end: { line: 96, column: 26 } }, '56': { start: { line: 97, column: 13 }, end: { line: 97, column: 26 } }, '57': { start: { line: 99, column: 14 }, end: { line: 99, column: 20 } }, '58': { start: { line: 101, column: 2 }, end: { line: 103, column: 3 } }, '59': { start: { line: 102, column: 4 }, end: { line: 102, column: 85 } }, '60': { start: { line: 106, column: 2 }, end: { line: 111, column: 3 } }, '61': { start: { line: 107, column: 4 }, end: { line: 107, column: 23 } }, '62': { start: { line: 108, column: 4 }, end: { line: 108, column: 71 } }, '63': { start: { line: 109, column: 4 }, end: { line: 109, column: 31 } }, '64': { start: { line: 110, column: 4 }, end: { line: 110, column: 17 } }, '65': { start: { line: 113, column: 2 }, end: { line: 119, column: 3 } }, '66': { start: { line: 114, column: 4 }, end: { line: 114, column: 35 } }, '67': { start: { line: 115, column: 4 }, end: { line: 115, column: 35 } }, '68': { start: { line: 116, column: 4 }, end: { line: 116, column: 73 } }, '69': { start: { line: 117, column: 4 }, end: { line: 117, column: 32 } }, '70': { start: { line: 118, column: 4 }, end: { line: 118, column: 17 } }, '71': { start: { line: 120, column: 15 }, end: { line: 120, column: 21 } }, '72': { start: { line: 121, column: 2 }, end: { line: 136, column: 3 } }, '73': { start: { line: 122, column: 4 }, end: { line: 126, column: 5 } }, '74': { start: { line: 124, column: 6 }, end: { line: 124, column: 42 } }, '75': { start: { line: 125, column: 6 }, end: { line: 125, column: 13 } }, '76': { start: { line: 128, column: 4 }, end: { line: 130, column: 6 } }, '77': { start: { line: 131, column: 4 }, end: { line: 133, column: 5 } }, '78': { start: { line: 132, column: 6 }, end: { line: 132, column: 38 } }, '79': { start: { line: 134, column: 4 }, end: { line: 134, column: 37 } }, '80': { start: { line: 135, column: 4 }, end: { line: 135, column: 11 } }, '81': { start: { line: 137, column: 2 }, end: { line: 147, column: 3 } }, '82': { start: { line: 139, column: 4 }, end: { line: 141, column: 6 } }, '83': { start: { line: 142, column: 4 }, end: { line: 144, column: 5 } }, '84': { start: { line: 143, column: 6 }, end: { line: 143, column: 50 } }, '85': { start: { line: 145, column: 4 }, end: { line: 145, column: 37 } }, '86': { start: { line: 146, column: 4 }, end: { line: 146, column: 11 } }, '87': { start: { line: 149, column: 2 }, end: { line: 149, column: 33 } }, '88': { start: { line: 150, column: 2 }, end: { line: 150, column: 33 } }, '89': { start: { line: 153, column: 17 }, end: { line: 153, column: 60 } }, '90': { start: { line: 154, column: 17 }, end: { line: 154, column: 60 } }, '91': { start: { line: 155, column: 12 }, end: { line: 155, column: 65 } }, '92': { start: { line: 156, column: 21 }, end: { line: 156, column: 23 } }, '93': { start: { line: 157, column: 2 }, end: { line: 159, column: 4 } }, '94': { start: { line: 160, column: 2 }, end: { line: 166, column: 3 } }, '95': { start: { line: 161, column: 4 }, end: { line: 165, column: 5 } }, '96': { start: { line: 163, column: 6 }, end: { line: 163, column: 50 } }, '97': { start: { line: 164, column: 6 }, end: { line: 164, column: 31 } }, '98': { start: { line: 168, column: 19 }, end: { line: 168, column: 23 } }, '99': { start: { line: 169, column: 2 }, end: { line: 171, column: 3 } }, '100': { start: { line: 170, column: 4 }, end: { line: 170, column: 23 } }, '101': { start: { line: 172, column: 27 }, end: { line: 172, column: 32 } }, '102': { start: { line: 173, column: 2 }, end: { line: 175, column: 3 } }, '103': { start: { line: 174, column: 4 }, end: { line: 174, column: 30 } }, '104': { start: { line: 177, column: 27 }, end: { line: 177, column: 46 } }, '105': { start: { line: 178, column: 2 }, end: { line: 214, column: 3 } }, '106': { start: { line: 179, column: 24 }, end: { line: 179, column: 70 } }, '107': { start: { line: 180, column: 4 }, end: { line: 213, column: 5 } }, '108': { start: { line: 182, column: 19 }, end: { line: 182, column: 24 } }, '109': { start: { line: 183, column: 6 }, end: { line: 202, column: 7 } }, '110': { start: { line: 184, column: 8 }, end: { line: 201, column: 9 } }, '111': { start: { line: 185, column: 10 }, end: { line: 185, column: 50 } }, '112': { start: { line: 186, column: 10 }, end: { line: 200, column: 11 } }, '113': { start: { line: 188, column: 12 }, end: { line: 188, column: 65 } }, '114': { start: { line: 189, column: 12 }, end: { line: 192, column: 13 } }, '115': { start: { line: 191, column: 14 }, end: { line: 191, column: 43 } }, '116': { start: { line: 194, column: 12 }, end: { line: 194, column: 27 } }, '117': { start: { line: 195, column: 12 }, end: { line: 195, column: 81 } }, '118': { start: { line: 196, column: 12 }, end: { line: 196, column: 40 } }, '119': { start: { line: 197, column: 12 }, end: { line: 197, column: 53 } }, '120': { start: { line: 198, column: 12 }, end: { line: 198, column: 26 } }, '121': { start: { line: 199, column: 12 }, end: { line: 199, column: 18 } }, '122': { start: { line: 203, column: 6 }, end: { line: 206, column: 7 } }, '123': { start: { line: 205, column: 8 }, end: { line: 205, column: 40 } }, '124': { start: { line: 209, column: 6 }, end: { line: 209, column: 56 } }, '125': { start: { line: 210, column: 6 }, end: { line: 210, column: 56 } }, '126': { start: { line: 211, column: 6 }, end: { line: 211, column: 75 } }, '127': { start: { line: 212, column: 6 }, end: { line: 212, column: 34 } }, '128': { start: { line: 216, column: 2 }, end: { line: 216, column: 35 } }, '129': { start: { line: 218, column: 0 }, end: { line: 218, column: 33 } }, '130': { start: { line: 220, column: 14 }, end: { line: 229, column: 1 } }, '131': { start: { line: 222, column: 4 }, end: { line: 222, column: 17 } }, '132': { start: { line: 225, column: 4 }, end: { line: 227, column: 6 } }, '133': { start: { line: 226, column: 6 }, end: { line: 226, column: 31 } }, '134': { start: { line: 231, column: 25 }, end: { line: 314, column: 1 } }, '135': { start: { line: 232, column: 2 }, end: { line: 234, column: 3 } }, '136': { start: { line: 233, column: 4 }, end: { line: 233, column: 11 } }, '137': { start: { line: 235, column: 2 }, end: { line: 237, column: 3 } }, '138': { start: { line: 236, column: 4 }, end: { line: 236, column: 11 } }, '139': { start: { line: 238, column: 14 }, end: { line: 238, column: 20 } }, '140': { start: { line: 239, column: 15 }, end: { line: 239, column: 21 } }, '141': { start: { line: 241, column: 14 }, end: { line: 241, column: 27 } }, '142': { start: { line: 242, column: 14 }, end: { line: 242, column: 26 } }, '143': { start: { line: 245, column: 17 }, end: { line: 245, column: 19 } }, '144': { start: { line: 246, column: 17 }, end: { line: 246, column: 19 } }, '145': { start: { line: 247, column: 17 }, end: { line: 247, column: 19 } }, '146': { start: { line: 248, column: 2 }, end: { line: 273, column: 3 } }, '147': { start: { line: 249, column: 4 }, end: { line: 272, column: 5 } }, '148': { start: { line: 250, column: 6 }, end: { line: 271, column: 7 } }, '149': { start: { line: 252, column: 8 }, end: { line: 256, column: 9 } }, '150': { start: { line: 253, column: 10 }, end: { line: 253, column: 54 } }, '151': { start: { line: 255, column: 10 }, end: { line: 255, column: 137 } }, '152': { start: { line: 258, column: 8 }, end: { line: 270, column: 9 } }, '153': { start: { line: 260, column: 10 }, end: { line: 263, column: 13 } }, '154': { start: { line: 266, column: 10 }, end: { line: 269, column: 13 } }, '155': { start: { line: 276, column: 2 }, end: { line: 276, column: 48 } }, '156': { start: { line: 277, column: 2 }, end: { line: 288, column: 3 } }, '157': { start: { line: 278, column: 4 }, end: { line: 278, column: 29 } }, '158': { start: { line: 279, column: 20 }, end: { line: 279, column: 39 } }, '159': { start: { line: 280, column: 23 }, end: { line: 280, column: 49 } }, '160': { start: { line: 281, column: 4 }, end: { line: 287, column: 5 } }, '161': { start: { line: 283, column: 6 }, end: { line: 286, column: 9 } }, '162': { start: { line: 291, column: 2 }, end: { line: 291, column: 59 } }, '163': { start: { line: 292, column: 23 }, end: { line: 292, column: 38 } }, '164': { start: { line: 293, column: 2 }, end: { line: 296, column: 3 } }, '165': { start: { line: 294, column: 20 }, end: { line: 294, column: 35 } }, '166': { start: { line: 295, column: 4 }, end: { line: 295, column: 54 } }, '167': { start: { line: 299, column: 23 }, end: { line: 299, column: 38 } }, '168': { start: { line: 300, column: 14 }, end: { line: 300, column: 20 } }, '169': { start: { line: 301, column: 2 }, end: { line: 307, column: 3 } }, '170': { start: { line: 302, column: 4 }, end: { line: 306, column: 5 } }, '171': { start: { line: 303, column: 25 }, end: { line: 303, column: 40 } }, '172': { start: { line: 304, column: 6 }, end: { line: 304, column: 85 } }, '173': { start: { line: 305, column: 6 }, end: { line: 305, column: 46 } }, '174': { start: { line: 309, column: 2 }, end: { line: 312, column: 3 } }, '175': { start: { line: 310, column: 4 }, end: { line: 310, column: 43 } }, '176': { start: { line: 311, column: 4 }, end: { line: 311, column: 11 } }, '177': { start: { line: 313, column: 2 }, end: { line: 313, column: 17 } }, '178': { start: { line: 315, column: 0 }, end: { line: 315, column: 34 } }, '179': { start: { line: 317, column: 40 }, end: { line: 331, column: 1 } }, '180': { start: { line: 318, column: 2 }, end: { line: 320, column: 3 } }, '181': { start: { line: 319, column: 4 }, end: { line: 319, column: 11 } }, '182': { start: { line: 321, column: 2 }, end: { line: 323, column: 3 } }, '183': { start: { line: 322, column: 4 }, end: { line: 322, column: 11 } }, '184': { start: { line: 324, column: 15 }, end: { line: 324, column: 38 } }, '185': { start: { line: 325, column: 14 }, end: { line: 325, column: 20 } }, '186': { start: { line: 326, column: 2 }, end: { line: 329, column: 3 } }, '187': { start: { line: 327, column: 4 }, end: { line: 327, column: 36 } }, '188': { start: { line: 328, column: 4 }, end: { line: 328, column: 49 } }, '189': { start: { line: 330, column: 2 }, end: { line: 330, column: 41 } }, '190': { start: { line: 332, column: 0 }, end: { line: 332, column: 64 } }, '191': { start: { line: 334, column: 27 }, end: { line: 355, column: 1 } }, '192': { start: { line: 335, column: 2 }, end: { line: 341, column: 3 } }, '193': { start: { line: 336, column: 4 }, end: { line: 339, column: 5 } }, '194': { start: { line: 337, column: 6 }, end: { line: 337, column: 47 } }, '195': { start: { line: 338, column: 6 }, end: { line: 338, column: 106 } }, '196': { start: { line: 340, column: 4 }, end: { line: 340, column: 11 } }, '197': { start: { line: 342, column: 2 }, end: { line: 344, column: 3 } }, '198': { start: { line: 343, column: 4 }, end: { line: 343, column: 11 } }, '199': { start: { line: 345, column: 13 }, end: { line: 345, column: 19 } }, '200': { start: { line: 346, column: 14 }, end: { line: 346, column: 20 } }, '201': { start: { line: 347, column: 2 }, end: { line: 353, column: 3 } }, '202': { start: { line: 348, column: 4 }, end: { line: 350, column: 5 } }, '203': { start: { line: 349, column: 6 }, end: { line: 349, column: 15 } }, '204': { start: { line: 351, column: 4 }, end: { line: 351, column: 52 } }, '205': { start: { line: 352, column: 4 }, end: { line: 352, column: 30 } }, '206': { start: { line: 354, column: 2 }, end: { line: 354, column: 17 } }, '207': { start: { line: 356, column: 0 }, end: { line: 356, column: 36 } }, '208': { start: { line: 358, column: 29 }, end: { line: 392, column: 1 } }, '209': { start: { line: 359, column: 2 }, end: { line: 363, column: 3 } }, '210': { start: { line: 360, column: 4 }, end: { line: 360, column: 41 } }, '211': { start: { line: 361, column: 9 }, end: { line: 363, column: 3 } }, '212': { start: { line: 362, column: 4 }, end: { line: 362, column: 23 } }, '213': { start: { line: 365, column: 21 }, end: { line: 365, column: 27 } }, '214': { start: { line: 366, column: 2 }, end: { line: 389, column: 3 } }, '215': { start: { line: 367, column: 20 }, end: { line: 367, column: 37 } }, '216': { start: { line: 368, column: 4 }, end: { line: 388, column: 5 } }, '217': { start: { line: 369, column: 6 }, end: { line: 387, column: 7 } }, '218': { start: { line: 370, column: 28 }, end: { line: 370, column: 62 } }, '219': { start: { line: 371, column: 26 }, end: { line: 371, column: 38 } }, '220': { start: { line: 372, column: 8 }, end: { line: 374, column: 9 } }, '221': { start: { line: 373, column: 10 }, end: { line: 373, column: 31 } }, '222': { start: { line: 375, column: 8 }, end: { line: 379, column: 9 } }, '223': { start: { line: 376, column: 10 }, end: { line: 376, column: 25 } }, '224': { start: { line: 377, column: 15 }, end: { line: 379, column: 9 } }, '225': { start: { line: 378, column: 10 }, end: { line: 378, column: 25 } }, '226': { start: { line: 380, column: 13 }, end: { line: 387, column: 7 } }, '227': { start: { line: 381, column: 26 }, end: { line: 381, column: 60 } }, '228': { start: { line: 382, column: 8 }, end: { line: 384, column: 9 } }, '229': { start: { line: 383, column: 10 }, end: { line: 383, column: 25 } }, '230': { start: { line: 385, column: 13 }, end: { line: 387, column: 7 } }, '231': { start: { line: 386, column: 8 }, end: { line: 386, column: 23 } }, '232': { start: { line: 391, column: 2 }, end: { line: 391, column: 22 } }, '233': { start: { line: 395, column: 2 }, end: { line: 397, column: 3 } }, '234': { start: { line: 396, column: 4 }, end: { line: 396, column: 11 } }, '235': { start: { line: 398, column: 2 }, end: { line: 400, column: 3 } }, '236': { start: { line: 399, column: 4 }, end: { line: 399, column: 11 } }, '237': { start: { line: 401, column: 15 }, end: { line: 401, column: 38 } }, '238': { start: { line: 402, column: 14 }, end: { line: 402, column: 20 } }, '239': { start: { line: 403, column: 14 }, end: { line: 405, column: 3 } }, '240': { start: { line: 407, column: 2 }, end: { line: 416, column: 3 } }, '241': { start: { line: 408, column: 4 }, end: { line: 408, column: 36 } }, '242': { start: { line: 409, column: 15 }, end: { line: 409, column: 28 } }, '243': { start: { line: 410, column: 4 }, end: { line: 412, column: 5 } }, '244': { start: { line: 411, column: 6 }, end: { line: 411, column: 82 } }, '245': { start: { line: 413, column: 4 }, end: { line: 415, column: 5 } }, '246': { start: { line: 414, column: 6 }, end: { line: 414, column: 33 } }, '247': { start: { line: 417, column: 2 }, end: { line: 417, column: 34 } }, '248': { start: { line: 419, column: 0 }, end: { line: 419, column: 66 } } }, fnMap: { '0': { name: '(anonymous_0)', decl: { start: { line: 9, column: 68 }, end: { line: 9, column: 69 } }, loc: { start: { line: 9, column: 81 }, end: { line: 11, column: 1 } }, line: 9 }, '1': { name: '(anonymous_1)', decl: { start: { line: 13, column: 67 }, end: { line: 13, column: 68 } }, loc: { start: { line: 13, column: 90 }, end: { line: 15, column: 1 } }, line: 13 }, '2': { name: '(anonymous_2)', decl: { start: { line: 15, column: 4 }, end: { line: 15, column: 5 } }, loc: { start: { line: 15, column: 27 }, end: { line: 23, column: 1 } }, line: 15 }, '3': { name: 'arraysHaveMatchByRef', decl: { start: { line: 25, column: 9 }, end: { line: 25, column: 29 } }, loc: { start: { line: 25, column: 58 }, end: { line: 35, column: 1 } }, line: 25 }, '4': { name: 'matchItems', decl: { start: { line: 37, column: 9 }, end: { line: 37, column: 19 } }, loc: { start: { line: 37, column: 61 }, end: { line: 78, column: 1 } }, line: 37 }, '5': { name: 'arraysDiffFilter', decl: { start: { line: 80, column: 33 }, end: { line: 80, column: 49 } }, loc: { start: { line: 80, column: 59 }, end: { line: 217, column: 1 } }, line: 80 }, '6': { name: 'numerically', decl: { start: { line: 221, column: 24 }, end: { line: 221, column: 35 } }, loc: { start: { line: 221, column: 42 }, end: { line: 223, column: 3 } }, line: 221 }, '7': { name: 'numericallyBy', decl: { start: { line: 224, column: 26 }, end: { line: 224, column: 39 } }, loc: { start: { line: 224, column: 46 }, end: { line: 228, column: 3 } }, line: 224 }, '8': { name: '(anonymous_8)', decl: { start: { line: 225, column: 11 }, end: { line: 225, column: 12 } }, loc: { start: { line: 225, column: 27 }, end: { line: 227, column: 5 } }, line: 225 }, '9': { name: 'nestedPatchFilter', decl: { start: { line: 231, column: 34 }, end: { line: 231, column: 51 } }, loc: { start: { line: 231, column: 61 }, end: { line: 314, column: 1 } }, line: 231 }, '10': { name: 'collectChildrenPatchFilter', decl: { start: { line: 317, column: 49 }, end: { line: 317, column: 75 } }, loc: { start: { line: 317, column: 85 }, end: { line: 331, column: 1 } }, line: 317 }, '11': { name: 'arraysReverseFilter', decl: { start: { line: 334, column: 36 }, end: { line: 334, column: 55 } }, loc: { start: { line: 334, column: 65 }, end: { line: 355, column: 1 } }, line: 334 }, '12': { name: 'reverseArrayDeltaIndex', decl: { start: { line: 358, column: 38 }, end: { line: 358, column: 60 } }, loc: { start: { line: 358, column: 86 }, end: { line: 392, column: 1 } }, line: 358 }, '13': { name: 'collectChildrenReverseFilter', decl: { start: { line: 394, column: 16 }, end: { line: 394, column: 44 } }, loc: { start: { line: 394, column: 54 }, end: { line: 418, column: 1 } }, line: 394 } }, branchMap: { '0': { loc: { start: { line: 9, column: 14 }, end: { line: 11, column: 1 } }, type: 'cond-expr', locations: [{ start: { line: 9, column: 52 }, end: { line: 9, column: 65 } }, { start: { line: 9, column: 68 }, end: { line: 11, column: 1 } }], line: 9 }, '1': { loc: { start: { line: 13, column: 19 }, end: { line: 23, column: 1 } }, type: 'cond-expr', locations: [{ start: { line: 13, column: 67 }, end: { line: 15, column: 1 } }, { start: { line: 15, column: 4 }, end: { line: 23, column: 1 } }], line: 13 }, '2': { loc: { start: { line: 18, column: 4 }, end: { line: 20, column: 5 } }, type: 'if', locations: [{ start: { line: 18, column: 4 }, end: { line: 20, column: 5 } }, { start: { line: 18, column: 4 }, end: { line: 20, column: 5 } }], line: 18 }, '3': { loc: { start: { line: 30, column: 6 }, end: { line: 32, column: 7 } }, type: 'if', locations: [{ start: { line: 30, column: 6 }, end: { line: 32, column: 7 } }, { start: { line: 30, column: 6 }, end: { line: 32, column: 7 } }], line: 30 }, '4': { loc: { start: { line: 30, column: 10 }, end: { line: 30, column: 44 } }, type: 'binary-expr', locations: [{ start: { line: 30, column: 10 }, end: { line: 30, column: 27 } }, { start: { line: 30, column: 31 }, end: { line: 30, column: 44 } }], line: 30 }, '5': { loc: { start: { line: 40, column: 2 }, end: { line: 42, column: 3 } }, type: 'if', locations: [{ start: { line: 40, column: 2 }, end: { line: 42, column: 3 } }, { start: { line: 40, column: 2 }, end: { line: 42, column: 3 } }], line: 40 }, '6': { loc: { start: { line: 43, column: 2 }, end: { line: 45, column: 3 } }, type: 'if', locations: [{ start: { line: 43, column: 2 }, end: { line: 45, column: 3 } }, { start: { line: 43, column: 2 }, end: { line: 45, column: 3 } }], line: 43 }, '7': { loc: { start: { line: 43, column: 6 }, end: { line: 43, column: 186 } }, type: 'binary-expr', locations: [{ start: { line: 43, column: 6 }, end: { line: 43, column: 94 } }, { start: { line: 43, column: 98 }, end: { line: 43, column: 186 } }], line: 43 }, '8': { loc: { start: { line: 43, column: 7 }, end: { line: 43, column: 80 } }, type: 'cond-expr', locations: [{ start: { line: 43, column: 39 }, end: { line: 43, column: 50 } }, { start: { line: 43, column: 53 }, end: { line: 43, column: 80 } }], line: 43 }, '9': { loc: { start: { line: 43, column: 99 }, end: { line: 43, column: 172 } }, type: 'cond-expr', locations: [{ start: { line: 43, column: 131 }, end: { line: 43, column: 142 } }, { start: { line: 43, column: 145 }, end: { line: 43, column: 172 } }], line: 43 }, '10': { loc: { start: { line: 47, column: 2 }, end: { line: 50, column: 3 } }, type: 'if', locations: [{ start: { line: 47, column: 2 }, end: { line: 50, column: 3 } }, { start: { line: 47, column: 2 }, end: { line: 50, column: 3 } }], line: 47 }, '11': { loc: { start: { line: 49, column: 11 }, end: { line: 49, column: 55 } }, type: 'binary-expr', locations: [{ start: { line: 49, column: 11 }, end: { line: 49, column: 34 } }, { start: { line: 49, column: 38 }, end: { line: 49, column: 55 } }], line: 49 }, '12': { loc: { start: { line: 53, column: 2 }, end: { line: 61, column: 3 } }, type: 'if', locations: [{ start: { line: 53, column: 2 }, end: { line: 61, column: 3 } }, { start: { line: 53, column: 2 }, end: { line: 61, column: 3 } }], line: 53 }, '13': { loc: { start: { line: 54, column: 25 }, end: { line: 54, column: 49 } }, type: 'binary-expr', locations: [{ start: { line: 54, column: 25 }, end: { line: 54, column: 43 } }, { start: { line: 54, column: 47 }, end: { line: 54, column: 49 } }], line: 54 }, '14': { loc: { start: { line: 56, column: 4 }, end: { line: 58, column: 5 } }, type: 'if', locations: [{ start: { line: 56, column: 4 }, end: { line: 58, column: 5 } }, { start: { line: 56, column: 4 }, end: { line: 58, column: 5 } }], line: 56 }, '15': { loc: { start: { line: 62, column: 2 }, end: { line: 64, column: 3 } }, type: 'if', locations: [{ start: { line: 62, column: 2 }, end: { line: 64, column: 3 } }, { start: { line: 62, column: 2 }, end: { line: 64, column: 3 } }], line: 62 }, '16': { loc: { start: { line: 65, column: 2 }, end: { line: 73, column: 3 } }, type: 'if', locations: [{ start: { line: 65, column: 2 }, end: { line: 73, column: 3 } }, { start: { line: 65, column: 2 }, end: { line: 73, column: 3 } }], line: 65 }, '17': { loc: { start: { line: 66, column: 25 }, end: { line: 66, column: 49 } }, type: 'binary-expr', locations: [{ start: { line: 66, column: 25 }, end: { line: 66, column: 43 } }, { start: { line: 66, column: 47 }, end: { line: 66, column: 49 } }], line: 66 }, '18': { loc: { start: { line: 68, column: 4 }, end: { line: 70, column: 5 } }, type: 'if', locations: [{ start: { line: 68, column: 4 }, end: { line: 70, column: 5 } }, { start: { line: 68, column: 4 }, end: { line: 70, column: 5 } }], line: 68 }, '19': { loc: { start: { line: 74, column: 2 }, end: { line: 76, column: 3 } }, type: 'if', locations: [{ start: { line: 74, column: 2 }, end: { line: 76, column: 3 } }, { start: { line: 74, column: 2 }, end: { line: 76, column: 3 } }], line: 74 }, '20': { loc: { start: { line: 81, column: 2 }, end: { line: 83, column: 3 } }, type: 'if', locations: [{ start: { line: 81, column: 2 }, end: { line: 83, column: 3 } }, { start: { line: 81, column: 2 }, end: { line: 83, column: 3 } }], line: 81 }, '21': { loc: { start: { line: 86, column: 16 }, end: { line: 86, column: 61 } }, type: 'binary-expr', locations: [{ start: { line: 86, column: 16 }, end: { line: 86, column: 31 } }, { start: { line: 86, column: 35 }, end: { line: 86, column: 61 } }], line: 86 }, '22': { loc: { start: { line: 87, column: 21 }, end: { line: 87, column: 71 } }, type: 'binary-expr', locations: [{ start: { line: 87, column: 21 }, end: { line: 87, column: 36 } }, { start: { line: 87, column: 40 }, end: { line: 87, column: 71 } }], line: 87 }, '23': { loc: { start: { line: 101, column: 2 }, end: { line: 103, column: 3 } }, type: 'if', locations: [{ start: { line: 101, column: 2 }, end: { line: 103, column: 3 } }, { start: { line: 101, column: 2 }, end: { line: 103, column: 3 } }], line: 101 }, '24': { loc: { start: { line: 101, column: 6 }, end: { line: 101, column: 107 } }, type: 'binary-expr', locations: [{ start: { line: 101, column: 6 }, end: { line: 101, column: 14 } }, { start: { line: 101, column: 18 }, end: { line: 101, column: 26 } }, { start: { line: 101, column: 30 }, end: { line: 101, column: 54 } }, { start: { line: 101, column: 58 }, end: { line: 101, column: 107 } }], line: 101 }, '25': { loc: { start: { line: 106, column: 9 }, end: { line: 106, column: 115 } }, type: 'binary-expr', locations: [{ start: { line: 106, column: 9 }, end: { line: 106, column: 26 } }, { start: { line: 106, column: 30 }, end: { line: 106, column: 47 } }, { start: { line: 106, column: 51 }, end: { line: 106, column: 115 } }], line: 106 }, '26': { loc: { start: { line: 113, column: 9 }, end: { line: 113, column: 163 } }, type: 'binary-expr', locations: [{ start: { line: 113, column: 9 }, end: { line: 113, column: 39 } }, { start: { line: 113, column: 43 }, end: { line: 113, column: 73 } }, { start: { line: 113, column: 77 }, end: { line: 113, column: 163 } }], line: 113 }, '27': { loc: { start: { line: 121, column: 2 }, end: { line: 136, column: 3 } }, type: 'if', locations: [{ start: { line: 121, column: 2 }, end: { line: 136, column: 3 } }, { start: { line: 121, column: 2 }, end: { line: 136, column: 3 } }], line: 121 }, '28': { loc: { start: { line: 122, column: 4 }, end: { line: 126, column: 5 } }, type: 'if', locations: [{ start: { line: 122, column: 4 }, end: { line: 126, column: 5 } }, { start: { line: 122, column: 4 }, end: { line: 126, column: 5 } }], line: 122 }, '29': { loc: { start: { line: 128, column: 13 }, end: { line: 130, column: 5 } }, type: 'binary-expr', locations: [{ start: { line: 128, column: 13 }, end: { line: 128, column: 19 } }, { start: { line: 128, column: 23 }, end: { line: 130, column: 5 } }], line: 128 }, '30': { loc: { start: { line: 137, column: 2 }, end: { line: 147, column: 3 } }, type: 'if', locations: [{ start: { line: 137, column: 2 }, end: { line: 147, column: 3 } }, { start: { line: 137, column: 2 }, end: { line: 147, column: 3 } }], line: 137 }, '31': { loc: { start: { line: 139, column: 13 }, end: { line: 141, column: 5 } }, type: 'binary-expr', locations: [{ start: { line: 139, column: 13 }, end: { line: 139, column: 19 } }, { start: { line: 139, column: 23 }, end: { line: 141, column: 5 } }], line: 139 }, '32': { loc: { start: { line: 157, column: 11 }, end: { line: 159, column: 3 } }, type: 'binary-expr', locations: [{ start: { line: 157, column: 11 }, end: { line: 157, column: 17 } }, { start: { line: 157, column: 21 }, end: { line: 159, column: 3 } }], line: 157 }, '33': { loc: { start: { line: 161, column: 4 }, end: { line: 165, column: 5 } }, type: 'if', locations: [{ start: { line: 161, column: 4 }, end: { line: 165, column: 5 } }, { start: { line: 161, column: 4 }, end: { line: 165, column: 5 } }], line: 161 }, '34': { loc: { start: { line: 169, column: 2 }, end: { line: 171, column: 3 } }, type: 'if', locations: [{ start: { line: 169, column: 2 }, end: { line: 171, column: 3 } }, { start: { line: 169, column: 2 }, end: { line: 171, column: 3 } }], line: 169 }, '35': { loc: { start: { line: 169, column: 6 }, end: { line: 169, column: 94 } }, type: 'binary-expr', locations: [{ start: { line: 169, column: 6 }, end: { line: 169, column: 21 } }, { start: { line: 169, column: 25 }, end: { line: 169, column: 47 } }, { start: { line: 169, column: 51 }, end: { line: 169, column: 94 } }], line: 169 }, '36': { loc: { start: { line: 173, column: 2 }, end: { line: 175, column: 3 } }, type: 'if', locations: [{ start: { line: 173, column: 2 }, end: { line: 175, column: 3 } }, { start: { line: 173, column: 2 }, end: { line: 175, column: 3 } }], line: 173 }, '37': { loc: { start: { line: 173, column: 6 }, end: { line: 173, column: 92 } }, type: 'binary-expr', locations: [{ start: { line: 173, column: 6 }, end: { line: 173, column: 21 } }, { start: { line: 173, column: 25 }, end: { line: 173, column: 47 } }, { start: { line: 173, column: 51 }, end: { line: 173, column: 92 } }], line: 173 }, '38': { loc: { start: { line: 180, column: 4 }, end: { line: 213, column: 5 } }, type: 'if', locations: [{ start: { line: 180, column: 4 }, end: { line: 213, column: 5 } }, { start: { line: 180, column: 4 }, end: { line: 213, column: 5 } }], line: 180 }, '39': { loc: { start: { line: 183, column: 6 }, end: { line: 202, column: 7 } }, type: 'if', locations: [{ start: { line: 183, column: 6 }, end: { line: 202, column: 7 } }, { start: { line: 183, column: 6 }, end: { line: 202, column: 7 } }], line: 183 }, '40': { loc: { start: { line: 183, column: 10 }, end: { line: 183, column: 46 } }, type: 'binary-expr', locations: [{ start: { line: 183, column: 10 }, end: { line: 183, column: 20 } }, { start: { line: 183, column: 24 }, end: { line: 183, column: 46 } }], line: 183 }, '41': { loc: { start: { line: 186, column: 10 }, end: { line: 200, column: 11 } }, type: 'if', locations: [{ start: { line: 186, column: 10 }, end: { line: 200, column: 11 } }, { start: { line: 186, column: 10 }, end: { line: 200, column: 11 } }], line: 186 }, '42': { loc: { start: { line: 189, column: 12 }, end: { line: 192, column: 13 } }, type: 'if', locations: [{ start: { line: 189, column: 12 }, end: { line: 192, column: 13 } }, { start: { line: 189, column: 12 }, end: { line: 192, column: 13 } }], line: 189 }, '43': { loc: { start: { line: 203, column: 6 }, end: { line: 206, column: 7 } }, type: 'if', locations: [{ start: { line: 203, column: 6 }, end: { line: 206, column: 7 } }, { start: { line: 203, column: 6 }, end: { line: 206, column: 7 } }], line: 203 }, '44': { loc: { start: { line: 232, column: 2 }, end: { line: 234, column: 3 } }, type: 'if', locations: [{ start: { line: 232, column: 2 }, end: { line: 234, column: 3 } }, { start: { line: 232, column: 2 }, end: { line: 234, column: 3 } }], line: 232 }, '45': { loc: { start: { line: 235, column: 2 }, end: { line: 237, column: 3 } }, type: 'if', locations: [{ start: { line: 235, column: 2 }, end: { line: 237, column: 3 } }, { start: { line: 235, column: 2 }, end: { line: 237, column: 3 } }], line: 235 }, '46': { loc: { start: { line: 249, column: 4 }, end: { line: 272, column: 5 } }, type: 'if', locations: [{ start: { line: 249, column: 4 }, end: { line: 272, column: 5 } }, { start: { line: 249, column: 4 }, end: { line: 272, column: 5 } }], line: 249 }, '47': { loc: { start: { line: 250, column: 6 }, end: { line: 271, column: 7 } }, type: 'if', locations: [{ start: { line: 250, column: 6 }, end: { line: 271, column: 7 } }, { start: { line: 250, column: 6 }, end: { line: 271, column: 7 } }], line: 250 }, '48': { loc: { start: { line: 252, column: 8 }, end: { line: 256, column: 9 } }, type: 'if', locations: [{ start: { line: 252, column: 8 }, end: { line: 256, column: 9 } }, { start: { line: 252, column: 8 }, end: { line: 256, column: 9 } }], line: 252 }, '49': { loc: { start: { line: 252, column: 12 }, end: { line: 252, column: 67 } }, type: 'binary-expr', locations: [{ start: { line: 252, column: 12 }, end: { line: 252, column: 33 } }, { start: { line: 252, column: 37 }, end: { line: 252, column: 67 } }], line: 252 }, '50': { loc: { start: { line: 258, column: 8 }, end: { line: 270, column: 9 } }, type: 'if', locations: [{ start: { line: 258, column: 8 }, end: { line: 270, column: 9 } }, { start: { line: 258, column: 8 }, end: { line: 270, column: 9 } }], line: 258 }, '51': { loc: { start: { line: 281, column: 4 }, end: { line: 287, column: 5 } }, type: 'if', locations: [{ start: { line: 281, column: 4 }, end: { line: 287, column: 5 } }, { start: { line: 281, column: 4 }, end: { line: 287, column: 5 } }], line: 281 }, '52': { loc: { start: { line: 301, column: 2 }, end: { line: 307, column: 3 } }, type: 'if', locations: [{ start: { line: 301, column: 2 }, end: { line: 307, column: 3 } }, { start: { line: 301, column: 2 }, end: { line: 307, column: 3 } }], line: 301 }, '53': { loc: { start: { line: 309, column: 2 }, end: { line: 312, column: 3 } }, type: 'if', locations: [{ start: { line: 309, column: 2 }, end: { line: 312, column: 3 } }, { start: { line: 309, column: 2 }, end: { line: 312, column: 3 } }], line: 309 }, '54': { loc: { start: { line: 318, column: 2 }, end: { line: 320, column: 3 } }, type: 'if', locations: [{ start: { line: 318, column: 2 }, end: { line: 320, column: 3 } }, { start: { line: 318, column: 2 }, end: { line: 320, column: 3 } }], line: 318 }, '55': { loc: { start: { line: 318, column: 6 }, end: { line: 318, column: 35 } }, type: 'binary-expr', locations: [{ start: { line: 318, column: 6 }, end: { line: 318, column: 14 } }, { start: { line: 318, column: 18 }, end: { line: 318, column: 35 } }], line: 318 }, '56': { loc: { start: { line: 321, column: 2 }, end: { line: 323, column: 3 } }, type: 'if', locations: [{ start: { line: 321, column: 2 }, end: { line: 323, column: 3 } }, { start: { line: 321, column: 2 }, end: { line: 323, column: 3 } }], line: 321 }, '57': { loc: { start: { line: 335, column: 2 }, end: { line: 341, column: 3 } }, type: 'if', locations: [{ start: { line: 335, column: 2 }, end: { line: 341, column: 3 } }, { start: { line: 335, column: 2 }, end: { line: 341, column: 3 } }], line: 335 }, '58': { loc: { start: { line: 336, column: 4 }, end: { line: 339, column: 5 } }, type: 'if', locations: [{ start: { line: 336, column: 4 }, end: { line: 339, column: 5 } }, { start: { line: 336, column: 4 }, end: { line: 339, column: 5 } }], line: 336 }, '59': { loc: { start: { line: 342, column: 2 }, end: { line: 344, column: 3 } }, type: 'if', locations: [{ start: { line: 342, column: 2 }, end: { line: 344, column: 3 } }, { start: { line: 342, column: 2 }, end: { line: 344, column: 3 } }], line: 342 }, '60': { loc: { start: { line: 348, column: 4 }, end: { line: 350, column: 5 } }, type: 'if', locations: [{ start: { line: 348, column: 4 }, end: { line: 350, column: 5 } }, { start: { line: 348, column: 4 }, end: { line: 350, column: 5 } }], line: 348 }, '61': { loc: { start: { line: 359, column: 2 }, end: { line: 363, column: 3 } }, type: 'if', locations: [{ start: { line: 359, column: 2 }, end: { line: 363, column: 3 } }, { start: { line: 359, column: 2 }, end: { line: 363, column: 3 } }], line: 359 }, '62': { loc: { start: { line: 359, column: 6 }, end: { line: 359, column: 51 } }, type: 'binary-expr', locations: [{ start: { line: 359, column: 6 }, end: { line: 359, column: 31 } }, { start: { line: 359, column: 35 }, end: { line: 359, column: 51 } }], line: 359 }, '63': { loc: { start: { line: 361, column: 9 }, end: { line: 363, column: 3 } }, type: 'if', locations: [{ start: { line: 361, column: 9 }, end: { line: 363, column: 3 } }, { start: { line: 361, column: 9 }, end: { line: 363, column: 3 } }], line: 361 }, '64': { loc: { start: { line: 361, column: 13 }, end: { line: 361, column: 53 } }, type: 'binary-expr', locations: [{ start: { line: 361, column: 13 }, end: { line: 361, column: 31 } }, { start: { line: 361, column: 35 }, end: { line: 361, column: 53 } }], line: 361 }, '65': { loc: { start: { line: 368, column: 4 }, end: { line: 388, column: 5 } }, type: 'if', locations: [{ start: { line: 368, column: 4 }, end: { line: 388, column: 5 } }, { start: { line: 368, column: 4 }, end: { line: 388, column: 5 } }], line: 368 }, '66': { loc: { start: { line: 369, column: 6 }, end: { line: 387, column: 7 } }, type: 'if', locations: [{ start: { line: 369, column: 6 }, end: { line: 387, column: 7 } }, { start: { line: 369, column: 6 }, end: { line: 387, column: 7 } }], line: 369 }, '67': { loc: { start: { line: 372, column: 8 }, end: { line: 374, column: 9 } }, type: 'if', locations: [{ start: { line: 372, column: 8 }, end: { line: 374, column: 9 } }, { start: { line: 372, column: 8 }, end: { line: 374, column: 9 } }], line: 372 }, '68': { loc: { start: { line: 375, column: 8 }, end: { line: 379, column: 9 } }, type: 'if', locations: [{ start: { line: 375, column: 8 }, end: { line: 379, column: 9 } }, { start: { line: 375, column: 8 }, end: { line: 379, column: 9 } }], line: 375 }, '69': { loc: { start: { line: 375, column: 12 }, end: { line: 375, column: 71 } }, type: 'binary-expr', locations: [{ start: { line: 375, column: 12 }, end: { line: 375, column: 41 } }, { start: { line: 375, column: 45 }, end: { line: 375, column: 71 } }], line: 375 }, '70': { loc: { start: { line: 377, column: 15 }, end: { line: 379, column: 9 } }, type: 'if', locations: [{ start: { line: 377, column: 15 }, end: { line: 379, column: 9 } }, { start: { line: 377, column: 15 }, end: { line: 379, column: 9 } }], line: 377 }, '71': { loc: { start: { line: 377, column: 19 }, end: { line: 377, column: 78 } }, type: 'binary-expr', locations: [{ start: { line: 377, column: 19 }, end: { line: 377, column: 48 } }, { start: { line: 377, column: 52 }, end: { line: 377, column: 78 } }], line: 377 }, '72': { loc: { start: { line: 380, column: 13 }, end: { line: 387, column: 7 } }, type: 'if', locations: [{ start: { line: 380, column: 13 }, end: { line: 387, column: 7 } }, { start: { line: 380, column: 13 }, end: { line: 387, column: 7 } }], line: 380 }, '73': { loc: { start: { line: 382, column: 8 }, end: { line: 384, column: 9 } }, type: 'if', locations: [{ start: { line: 382, column: 8 }, end: { line: 384, column: 9 } }, { start: { line: 382, column: 8 }, end: { line: 384, column: 9 } }], line: 382 }, '74': { loc: { start: { line: 385, column: 13 }, end: { line: 387, column: 7 } }, type: 'if', locations: [{ start: { line: 385, column: 13 }, end: { line: 387, column: 7 } }, { start: { line: 385, column: 13 }, end: { line: 387, column: 7 } }], line: 385 }, '75': { loc: { start: { line: 385, column: 17 }, end: { line: 385, column: 69 } }, type: 'binary-expr', locations: [{ start: { line: 385, column: 17 }, end: { line: 385, column: 39 } }, { start: { line: 385, column: 43 }, end: { line: 385, column: 69 } }], line: 385 }, '76': { loc: { start: { line: 395, column: 2 }, end: { line: 397, column: 3 } }, type: 'if', locations: [{ start: { line: 395, column: 2 }, end: { line: 397, column: 3 } }, { start: { line: 395, column: 2 }, end: { line: 397, column: 3 } }], line: 395 }, '77': { loc: { start: { line: 395, column: 6 }, end: { line: 395, column: 35 } }, type: 'binary-expr', locations: [{ start: { line: 395, column: 6 }, end: { line: 395, column: 14 } }, { start: { line: 395, column: 18 }, end: { line: 395, column: 35 } }], line: 395 }, '78': { loc: { start: { line: 398, column: 2 }, end: { line: 400, column: 3 } }, type: 'if', locations: [{ start: { line: 398, column: 2 }, end: { line: 400, column: 3 } }, { start: { line: 398, column: 2 }, end: { line: 400, column: 3 } }], line: 398 }, '79': { loc: { start: { line: 410, column: 4 }, end: { line: 412, column: 5 } }, type: 'if', locations: [{ start: { line: 410, column: 4 }, end: { line: 412, column: 5 } }, { start: { line: 410, column: 4 }, end: { line: 412, column: 5 } }], line: 410 }, '80': { loc: { start: { line: 413, column: 4 }, end: { line: 415, column: 5 } }, type: 'if', locations: [{ start: { line: 413, column: 4 }, end: { line: 415, column: 5 } }, { start: { line: 413, column: 4 }, end: { line: 415, column: 5 } }], line: 413 } }, s: { '0': 0, '1': 0, '2': 0, '3': 0, '4': 0, '5': 0, '6': 0, '7': 0, '8': 0, '9': 0, '10': 0, '11': 0, '12': 0, '13': 0, '14': 0, '15': 0, '16': 0, '17': 0, '18': 0, '19': 0, '20': 0, '21': 0, '22': 0, '23': 0, '24': 0, '25': 0, '26': 0, '27': 0, '28': 0, '29': 0, '30': 0, '31': 0, '32': 0, '33': 0, '34': 0, '35': 0, '36': 0, '37': 0, '38': 0, '39': 0, '40': 0, '41': 0, '42': 0, '43': 0, '44': 0, '45': 0, '46': 0, '47': 0, '48': 0, '49': 0, '50': 0, '51': 0, '52': 0, '53': 0, '54': 0, '55': 0, '56': 0, '57': 0, '58': 0, '59': 0, '60': 0, '61': 0, '62': 0, '63': 0, '64': 0, '65': 0, '66': 0, '67': 0, '68': 0, '69': 0, '70': 0, '71': 0, '72': 0, '73': 0, '74': 0, '75': 0, '76': 0, '77': 0, '78': 0, '79': 0, '80': 0, '81': 0, '82': 0, '83': 0, '84': 0, '85': 0, '86': 0, '87': 0, '88': 0, '89': 0, '90': 0, '91': 0, '92': 0, '93': 0, '94': 0, '95': 0, '96': 0, '97': 0, '98': 0, '99': 0, '100': 0, '101': 0, '102': 0, '103': 0, '104': 0, '105': 0, '106': 0, '107': 0, '108': 0, '109': 0, '110': 0, '111': 0, '112': 0, '113': 0, '114': 0, '115': 0, '116': 0, '117': 0, '118': 0, '119': 0, '120': 0, '121': 0, '122': 0, '123': 0, '124': 0, '125': 0, '126': 0, '127': 0, '128': 0, '129': 0, '130': 0, '131': 0, '132': 0, '133': 0, '134': 0, '135': 0, '136': 0, '137': 0, '138': 0, '139': 0, '140': 0, '141': 0, '142': 0, '143': 0, '144': 0, '145': 0, '146': 0, '147': 0, '148': 0, '149': 0, '150': 0, '151': 0, '152': 0, '153': 0, '154': 0, '155': 0, '156': 0, '157': 0, '158': 0, '159': 0, '160': 0, '161': 0, '162': 0, '163': 0, '164': 0, '165': 0, '166': 0, '167': 0, '168': 0, '169': 0, '170': 0, '171': 0, '172': 0, '173': 0, '174': 0, '175': 0, '176': 0, '177': 0, '178': 0, '179': 0, '180': 0, '181': 0, '182': 0, '183': 0, '184': 0, '185': 0, '186': 0, '187': 0, '188': 0, '189': 0, '190': 0, '191': 0, '192': 0, '193': 0, '194': 0, '195': 0, '196': 0, '197': 0, '198': 0, '199': 0, '200': 0, '201': 0, '202': 0, '203': 0, '204': 0, '205': 0, '206': 0, '207': 0, '208': 0, '209': 0, '210': 0, '211': 0, '212': 0, '213': 0, '214': 0, '215': 0, '216': 0, '217': 0, '218': 0, '219': 0, '220': 0, '221': 0, '222': 0, '223': 0, '224': 0, '225': 0, '226': 0, '227': 0, '228': 0, '229': 0, '230': 0, '231': 0, '232': 0, '233': 0, '234': 0, '235': 0, '236': 0, '237': 0, '238': 0, '239': 0, '240': 0, '241': 0, '242': 0, '243': 0, '244': 0, '245': 0, '246': 0, '247': 0, '248': 0 }, f: { '0': 0, '1': 0, '2': 0, '3': 0, '4': 0, '5': 0, '6': 0, '7': 0, '8': 0, '9': 0, '10': 0, '11': 0, '12': 0, '13': 0 }, b: { '0': [0, 0], '1': [0, 0], '2': [0, 0], '3': [0, 0], '4': [0, 0], '5': [0, 0], '6': [0, 0], '7': [0, 0], '8': [0, 0], '9': [0, 0], '10': [0, 0], '11': [0, 0], '12': [0, 0], '13': [0, 0], '14': [0, 0], '15': [0, 0], '16': [0, 0], '17': [0, 0], '18': [0, 0], '19': [0, 0], '20': [0, 0], '21': [0, 0], '22': [0, 0], '23': [0, 0], '24': [0, 0, 0, 0], '25': [0, 0, 0], '26': [0, 0, 0], '27': [0, 0], '28': [0, 0], '29': [0, 0], '30': [0, 0], '31': [0, 0], '32': [0, 0], '33': [0, 0], '34': [0, 0], '35': [0, 0, 0], '36': [0, 0], '37': [0, 0, 0], '38': [0, 0], '39': [0, 0], '40': [0, 0], '41': [0, 0], '42': [0, 0], '43': [0, 0], '44': [0, 0], '45': [0, 0], '46': [0, 0], '47': [0, 0], '48': [0, 0], '49': [0, 0], '50': [0, 0], '51': [0, 0], '52': [0, 0], '53': [0, 0], '54': [0, 0], '55': [0, 0], '56': [0, 0], '57': [0, 0], '58': [0, 0], '59': [0, 0], '60': [0, 0], '61': [0, 0], '62': [0, 0], '63': [0, 0], '64': [0, 0], '65': [0, 0], '66': [0, 0], '67': [0, 0], '68': [0, 0], '69': [0, 0], '70': [0, 0], '71': [0, 0], '72': [0, 0], '73': [0, 0], '74': [0, 0], '75': [0, 0], '76': [0, 0], '77': [0, 0], '78': [0, 0], '79': [0, 0], '80': [0, 0] }, _coverageSchema: '332fd63041d2c1bcb487cc26dd0d5f7d97098a6c' },
      coverage = global[gcv] || (global[gcv] = {});if (coverage[path] && coverage[path].hash === hash) {
    return coverage[path];
  }coverageData.hash = hash;return coverage[path] = coverageData;
}();var ARRAY_MOVE = (cov_ybgvpmlrn.s[0]++, 3);var isArray$2 = (cov_ybgvpmlrn.s[1]++, typeof Array.isArray === 'function' ? (cov_ybgvpmlrn.b[0][0]++, Array.isArray) : (cov_ybgvpmlrn.b[0][1]++, function (a) {
  cov_ybgvpmlrn.f[0]++;cov_ybgvpmlrn.s[2]++;return a instanceof Array;
}));var arrayIndexOf = (cov_ybgvpmlrn.s[3]++, typeof Array.prototype.indexOf === 'function' ? (cov_ybgvpmlrn.b[1][0]++, function (array, item) {
  cov_ybgvpmlrn.f[1]++;cov_ybgvpmlrn.s[4]++;return array.indexOf(item);
}) : (cov_ybgvpmlrn.b[1][1]++, function (array, item) {
  cov_ybgvpmlrn.f[2]++;var length = (cov_ybgvpmlrn.s[5]++, array.length);cov_ybgvpmlrn.s[6]++;for (var i = 0; i < length; i++) {
    cov_ybgvpmlrn.s[7]++;if (array[i] === item) {
      cov_ybgvpmlrn.b[2][0]++;cov_ybgvpmlrn.s[8]++;return i;
    } else {
      cov_ybgvpmlrn.b[2][1]++;
    }
  }cov_ybgvpmlrn.s[9]++;return -1;
}));function arraysHaveMatchByRef(array1, array2, len1, len2) {
  cov_ybgvpmlrn.f[3]++;cov_ybgvpmlrn.s[10]++;for (var index1 = 0; index1 < len1; index1++) {
    var val1 = (cov_ybgvpmlrn.s[11]++, array1[index1]);cov_ybgvpmlrn.s[12]++;for (var index2 = 0; index2 < len2; index2++) {
      var val2 = (cov_ybgvpmlrn.s[13]++, array2[index2]);cov_ybgvpmlrn.s[14]++;if ((cov_ybgvpmlrn.b[4][0]++, index1 !== index2) && (cov_ybgvpmlrn.b[4][1]++, val1 === val2)) {
        cov_ybgvpmlrn.b[3][0]++;cov_ybgvpmlrn.s[15]++;return true;
      } else {
        cov_ybgvpmlrn.b[3][1]++;
      }
    }
  }
}function matchItems(array1, array2, index1, index2, context) {
  cov_ybgvpmlrn.f[4]++;var value1 = (cov_ybgvpmlrn.s[16]++, array1[index1]);var value2 = (cov_ybgvpmlrn.s[17]++, array2[index2]);cov_ybgvpmlrn.s[18]++;if (value1 === value2) {
    cov_ybgvpmlrn.b[5][0]++;cov_ybgvpmlrn.s[19]++;return true;
  } else {
    cov_ybgvpmlrn.b[5][1]++;
  }cov_ybgvpmlrn.s[20]++;if ((cov_ybgvpmlrn.b[7][0]++, (typeof value1 === 'undefined' ? (cov_ybgvpmlrn.b[8][0]++, 'undefined') : (cov_ybgvpmlrn.b[8][1]++, _typeof$1(value1))) !== 'object') || (cov_ybgvpmlrn.b[7][1]++, (typeof value2 === 'undefined' ? (cov_ybgvpmlrn.b[9][0]++, 'undefined') : (cov_ybgvpmlrn.b[9][1]++, _typeof$1(value2))) !== 'object')) {
    cov_ybgvpmlrn.b[6][0]++;cov_ybgvpmlrn.s[21]++;return false;
  } else {
    cov_ybgvpmlrn.b[6][1]++;
  }var objectHash = (cov_ybgvpmlrn.s[22]++, context.objectHash);cov_ybgvpmlrn.s[23]++;if (!objectHash) {
    cov_ybgvpmlrn.b[10][0]++;cov_ybgvpmlrn.s[24]++;return (cov_ybgvpmlrn.b[11][0]++, context.matchByPosition) && (cov_ybgvpmlrn.b[11][1]++, index1 === index2);
  } else {
    cov_ybgvpmlrn.b[10][1]++;
  }var hash1 = (cov_ybgvpmlrn.s[25]++, void 0);var hash2 = (cov_ybgvpmlrn.s[26]++, void 0);cov_ybgvpmlrn.s[27]++;if (typeof index1 === 'number') {
    cov_ybgvpmlrn.b[12][0]++;cov_ybgvpmlrn.s[28]++;context.hashCache1 = (cov_ybgvpmlrn.b[13][0]++, context.hashCache1) || (cov_ybgvpmlrn.b[13][1]++, []);cov_ybgvpmlrn.s[29]++;hash1 = context.hashCache1[index1];cov_ybgvpmlrn.s[30]++;if (typeof hash1 === 'undefined') {
      cov_ybgvpmlrn.b[14][0]++;cov_ybgvpmlrn.s[31]++;context.hashCache1[index1] = hash1 = objectHash(value1, index1);
    } else {
      cov_ybgvpmlrn.b[14][1]++;
    }
  } else {
    cov_ybgvpmlrn.b[12][1]++;cov_ybgvpmlrn.s[32]++;hash1 = objectHash(value1);
  }cov_ybgvpmlrn.s[33]++;if (typeof hash1 === 'undefined') {
    cov_ybgvpmlrn.b[15][0]++;cov_ybgvpmlrn.s[34]++;return false;
  } else {
    cov_ybgvpmlrn.b[15][1]++;
  }cov_ybgvpmlrn.s[35]++;if (typeof index2 === 'number') {
    cov_ybgvpmlrn.b[16][0]++;cov_ybgvpmlrn.s[36]++;context.hashCache2 = (cov_ybgvpmlrn.b[17][0]++, context.hashCache2) || (cov_ybgvpmlrn.b[17][1]++, []);cov_ybgvpmlrn.s[37]++;hash2 = context.hashCache2[index2];cov_ybgvpmlrn.s[38]++;if (typeof hash2 === 'undefined') {
      cov_ybgvpmlrn.b[18][0]++;cov_ybgvpmlrn.s[39]++;context.hashCache2[index2] = hash2 = objectHash(value2, index2);
    } else {
      cov_ybgvpmlrn.b[18][1]++;
    }
  } else {
    cov_ybgvpmlrn.b[16][1]++;cov_ybgvpmlrn.s[40]++;hash2 = objectHash(value2);
  }cov_ybgvpmlrn.s[41]++;if (typeof hash2 === 'undefined') {
    cov_ybgvpmlrn.b[19][0]++;cov_ybgvpmlrn.s[42]++;return false;
  } else {
    cov_ybgvpmlrn.b[19][1]++;
  }cov_ybgvpmlrn.s[43]++;return hash1 === hash2;
}cov_ybgvpmlrn.s[44]++;var diffFilter$1 = function arraysDiffFilter(context) {
  cov_ybgvpmlrn.f[5]++;cov_ybgvpmlrn.s[45]++;if (!context.leftIsArray) {
    cov_ybgvpmlrn.b[20][0]++;cov_ybgvpmlrn.s[46]++;return;
  } else {
    cov_ybgvpmlrn.b[20][1]++;
  }var matchContext = (cov_ybgvpmlrn.s[47]++, { objectHash: (cov_ybgvpmlrn.b[21][0]++, context.options) && (cov_ybgvpmlrn.b[21][1]++, context.options.objectHash), matchByPosition: (cov_ybgvpmlrn.b[22][0]++, context.options) && (cov_ybgvpmlrn.b[22][1]++, context.options.matchByPosition) });var commonHead = (cov_ybgvpmlrn.s[48]++, 0);var commonTail = (cov_ybgvpmlrn.s[49]++, 0);var index = (cov_ybgvpmlrn.s[50]++, void 0);var index1 = (cov_ybgvpmlrn.s[51]++, void 0);var index2 = (cov_ybgvpmlrn.s[52]++, void 0);var array1 = (cov_ybgvpmlrn.s[53]++, context.left);var array2 = (cov_ybgvpmlrn.s[54]++, context.right);var len1 = (cov_ybgvpmlrn.s[55]++, array1.length);var len2 = (cov_ybgvpmlrn.s[56]++, array2.length);var child = (cov_ybgvpmlrn.s[57]++, void 0);cov_ybgvpmlrn.s[58]++;if ((cov_ybgvpmlrn.b[24][0]++, len1 > 0) && (cov_ybgvpmlrn.b[24][1]++, len2 > 0) && (cov_ybgvpmlrn.b[24][2]++, !matchContext.objectHash) && (cov_ybgvpmlrn.b[24][3]++, typeof matchContext.matchByPosition !== 'boolean')) {
    cov_ybgvpmlrn.b[23][0]++;cov_ybgvpmlrn.s[59]++;matchContext.matchByPosition = !arraysHaveMatchByRef(array1, array2, len1, len2);
  } else {
    cov_ybgvpmlrn.b[23][1]++;
  }cov_ybgvpmlrn.s[60]++;while ((cov_ybgvpmlrn.b[25][0]++, commonHead < len1) && (cov_ybgvpmlrn.b[25][1]++, commonHead < len2) && (cov_ybgvpmlrn.b[25][2]++, matchItems(array1, array2, commonHead, commonHead, matchContext))) {
    cov_ybgvpmlrn.s[61]++;index = commonHead;cov_ybgvpmlrn.s[62]++;child = new DiffContext(context.left[index], context.right[index]);cov_ybgvpmlrn.s[63]++;context.push(child, index);cov_ybgvpmlrn.s[64]++;commonHead++;
  }cov_ybgvpmlrn.s[65]++;while ((cov_ybgvpmlrn.b[26][0]++, commonTail + commonHead < len1) && (cov_ybgvpmlrn.b[26][1]++, commonTail + commonHead < len2) && (cov_ybgvpmlrn.b[26][2]++, matchItems(array1, array2, len1 - 1 - commonTail, len2 - 1 - commonTail, matchContext))) {
    cov_ybgvpmlrn.s[66]++;index1 = len1 - 1 - commonTail;cov_ybgvpmlrn.s[67]++;index2 = len2 - 1 - commonTail;cov_ybgvpmlrn.s[68]++;child = new DiffContext(context.left[index1], context.right[index2]);cov_ybgvpmlrn.s[69]++;context.push(child, index2);cov_ybgvpmlrn.s[70]++;commonTail++;
  }var result = (cov_ybgvpmlrn.s[71]++, void 0);cov_ybgvpmlrn.s[72]++;if (commonHead + commonTail === len1) {
    cov_ybgvpmlrn.b[27][0]++;cov_ybgvpmlrn.s[73]++;if (len1 === len2) {
      cov_ybgvpmlrn.b[28][0]++;cov_ybgvpmlrn.s[74]++;context.setResult(undefined).exit();cov_ybgvpmlrn.s[75]++;return;
    } else {
      cov_ybgvpmlrn.b[28][1]++;
    }cov_ybgvpmlrn.s[76]++;result = (cov_ybgvpmlrn.b[29][0]++, result) || (cov_ybgvpmlrn.b[29][1]++, { _t: 'a' });cov_ybgvpmlrn.s[77]++;for (index = commonHead; index < len2 - commonTail; index++) {
      cov_ybgvpmlrn.s[78]++;result[index] = [array2[index]];
    }cov_ybgvpmlrn.s[79]++;context.setResult(result).exit();cov_ybgvpmlrn.s[80]++;return;
  } else {
    cov_ybgvpmlrn.b[27][1]++;
  }cov_ybgvpmlrn.s[81]++;if (commonHead + commonTail === len2) {
    cov_ybgvpmlrn.b[30][0]++;cov_ybgvpmlrn.s[82]++;result = (cov_ybgvpmlrn.b[31][0]++, result) || (cov_ybgvpmlrn.b[31][1]++, { _t: 'a' });cov_ybgvpmlrn.s[83]++;for (index = commonHead; index < len1 - commonTail; index++) {
      cov_ybgvpmlrn.s[84]++;result['_' + index] = [array1[index], 0, 0];
    }cov_ybgvpmlrn.s[85]++;context.setResult(result).exit();cov_ybgvpmlrn.s[86]++;return;
  } else {
    cov_ybgvpmlrn.b[30][1]++;
  }cov_ybgvpmlrn.s[87]++;delete matchContext.hashCache1;cov_ybgvpmlrn.s[88]++;delete matchContext.hashCache2;var trimmed1 = (cov_ybgvpmlrn.s[89]++, array1.slice(commonHead, len1 - commonTail));var trimmed2 = (cov_ybgvpmlrn.s[90]++, array2.slice(commonHead, len2 - commonTail));var seq = (cov_ybgvpmlrn.s[91]++, lcs.get(trimmed1, trimmed2, matchItems, matchContext));var removedItems = (cov_ybgvpmlrn.s[92]++, []);cov_ybgvpmlrn.s[93]++;result = (cov_ybgvpmlrn.b[32][0]++, result) || (cov_ybgvpmlrn.b[32][1]++, { _t: 'a' });cov_ybgvpmlrn.s[94]++;for (index = commonHead; index < len1 - commonTail; index++) {
    cov_ybgvpmlrn.s[95]++;if (arrayIndexOf(seq.indices1, index - commonHead) < 0) {
      cov_ybgvpmlrn.b[33][0]++;cov_ybgvpmlrn.s[96]++;result['_' + index] = [array1[index], 0, 0];cov_ybgvpmlrn.s[97]++;removedItems.push(index);
    } else {
      cov_ybgvpmlrn.b[33][1]++;
    }
  }var detectMove = (cov_ybgvpmlrn.s[98]++, true);cov_ybgvpmlrn.s[99]++;if ((cov_ybgvpmlrn.b[35][0]++, context.options) && (cov_ybgvpmlrn.b[35][1]++, context.options.arrays) && (cov_ybgvpmlrn.b[35][2]++, context.options.arrays.detectMove === false)) {
    cov_ybgvpmlrn.b[34][0]++;cov_ybgvpmlrn.s[100]++;detectMove = false;
  } else {
    cov_ybgvpmlrn.b[34][1]++;
  }var includeValueOnMove = (cov_ybgvpmlrn.s[101]++, false);cov_ybgvpmlrn.s[102]++;if ((cov_ybgvpmlrn.b[37][0]++, context.options) && (cov_ybgvpmlrn.b[37][1]++, context.options.arrays) && (cov_ybgvpmlrn.b[37][2]++, context.options.arrays.includeValueOnMove)) {
    cov_ybgvpmlrn.b[36][0]++;cov_ybgvpmlrn.s[103]++;includeValueOnMove = true;
  } else {
    cov_ybgvpmlrn.b[36][1]++;
  }var removedItemsLength = (cov_ybgvpmlrn.s[104]++, removedItems.length);cov_ybgvpmlrn.s[105]++;for (index = commonHead; index < len2 - commonTail; index++) {
    var indexOnArray2 = (cov_ybgvpmlrn.s[106]++, arrayIndexOf(seq.indices2, index - commonHead));cov_ybgvpmlrn.s[107]++;if (indexOnArray2 < 0) {
      cov_ybgvpmlrn.b[38][0]++;var isMove = (cov_ybgvpmlrn.s[108]++, false);cov_ybgvpmlrn.s[109]++;if ((cov_ybgvpmlrn.b[40][0]++, detectMove) && (cov_ybgvpmlrn.b[40][1]++, removedItemsLength > 0)) {
        cov_ybgvpmlrn.b[39][0]++;cov_ybgvpmlrn.s[110]++;for (var removeItemIndex1 = 0; removeItemIndex1 < removedItemsLength; removeItemIndex1++) {
          cov_ybgvpmlrn.s[111]++;index1 = removedItems[removeItemIndex1];cov_ybgvpmlrn.s[112]++;if (matchItems(trimmed1, trimmed2, index1 - commonHead, index - commonHead, matchContext)) {
            cov_ybgvpmlrn.b[41][0]++;cov_ybgvpmlrn.s[113]++;result['_' + index1].splice(1, 2, index, ARRAY_MOVE);cov_ybgvpmlrn.s[114]++;if (!includeValueOnMove) {
              cov_ybgvpmlrn.b[42][0]++;cov_ybgvpmlrn.s[115]++;result['_' + index1][0] = '';
            } else {
              cov_ybgvpmlrn.b[42][1]++;
            }cov_ybgvpmlrn.s[116]++;index2 = index;cov_ybgvpmlrn.s[117]++;child = new DiffContext(context.left[index1], context.right[index2]);cov_ybgvpmlrn.s[118]++;context.push(child, index2);cov_ybgvpmlrn.s[119]++;removedItems.splice(removeItemIndex1, 1);cov_ybgvpmlrn.s[120]++;isMove = true;cov_ybgvpmlrn.s[121]++;break;
          } else {
            cov_ybgvpmlrn.b[41][1]++;
          }
        }
      } else {
        cov_ybgvpmlrn.b[39][1]++;
      }cov_ybgvpmlrn.s[122]++;if (!isMove) {
        cov_ybgvpmlrn.b[43][0]++;cov_ybgvpmlrn.s[123]++;result[index] = [array2[index]];
      } else {
        cov_ybgvpmlrn.b[43][1]++;
      }
    } else {
      cov_ybgvpmlrn.b[38][1]++;cov_ybgvpmlrn.s[124]++;index1 = seq.indices1[indexOnArray2] + commonHead;cov_ybgvpmlrn.s[125]++;index2 = seq.indices2[indexOnArray2] + commonHead;cov_ybgvpmlrn.s[126]++;child = new DiffContext(context.left[index1], context.right[index2]);cov_ybgvpmlrn.s[127]++;context.push(child, index2);
    }
  }cov_ybgvpmlrn.s[128]++;context.setResult(result).exit();
};cov_ybgvpmlrn.s[129]++;diffFilter$1.filterName = 'arrays';var compare = (cov_ybgvpmlrn.s[130]++, { numerically: function numerically(a, b) {
    cov_ybgvpmlrn.f[6]++;cov_ybgvpmlrn.s[131]++;return a - b;
  }, numericallyBy: function numericallyBy(name) {
    cov_ybgvpmlrn.f[7]++;cov_ybgvpmlrn.s[132]++;return function (a, b) {
      cov_ybgvpmlrn.f[8]++;cov_ybgvpmlrn.s[133]++;return a[name] - b[name];
    };
  } });cov_ybgvpmlrn.s[134]++;var patchFilter$2 = function nestedPatchFilter(context) {
  cov_ybgvpmlrn.f[9]++;cov_ybgvpmlrn.s[135]++;if (!context.nested) {
    cov_ybgvpmlrn.b[44][0]++;cov_ybgvpmlrn.s[136]++;return;
  } else {
    cov_ybgvpmlrn.b[44][1]++;
  }cov_ybgvpmlrn.s[137]++;if (context.delta._t !== 'a') {
    cov_ybgvpmlrn.b[45][0]++;cov_ybgvpmlrn.s[138]++;return;
  } else {
    cov_ybgvpmlrn.b[45][1]++;
  }var index = (cov_ybgvpmlrn.s[139]++, void 0);var index1 = (cov_ybgvpmlrn.s[140]++, void 0);var delta = (cov_ybgvpmlrn.s[141]++, context.delta);var array = (cov_ybgvpmlrn.s[142]++, context.left);var toRemove = (cov_ybgvpmlrn.s[143]++, []);var toInsert = (cov_ybgvpmlrn.s[144]++, []);var toModify = (cov_ybgvpmlrn.s[145]++, []);cov_ybgvpmlrn.s[146]++;for (index in delta) {
    cov_ybgvpmlrn.s[147]++;if (index !== '_t') {
      cov_ybgvpmlrn.b[46][0]++;cov_ybgvpmlrn.s[148]++;if (index[0] === '_') {
        cov_ybgvpmlrn.b[47][0]++;cov_ybgvpmlrn.s[149]++;if ((cov_ybgvpmlrn.b[49][0]++, delta[index][2] === 0) || (cov_ybgvpmlrn.b[49][1]++, delta[index][2] === ARRAY_MOVE)) {
          cov_ybgvpmlrn.b[48][0]++;cov_ybgvpmlrn.s[150]++;toRemove.push(parseInt(index.slice(1), 10));
        } else {
          cov_ybgvpmlrn.b[48][1]++;cov_ybgvpmlrn.s[151]++;throw new Error('only removal or move can be applied at original array indices,' + (' invalid diff type: ' + delta[index][2]));
        }
      } else {
        cov_ybgvpmlrn.b[47][1]++;cov_ybgvpmlrn.s[152]++;if (delta[index].length === 1) {
          cov_ybgvpmlrn.b[50][0]++;cov_ybgvpmlrn.s[153]++;toInsert.push({ index: parseInt(index, 10), value: delta[index][0] });
        } else {
          cov_ybgvpmlrn.b[50][1]++;cov_ybgvpmlrn.s[154]++;toModify.push({ index: parseInt(index, 10), delta: delta[index] });
        }
      }
    } else {
      cov_ybgvpmlrn.b[46][1]++;
    }
  }cov_ybgvpmlrn.s[155]++;toRemove = toRemove.sort(compare.numerically);cov_ybgvpmlrn.s[156]++;for (index = toRemove.length - 1; index >= 0; index--) {
    cov_ybgvpmlrn.s[157]++;index1 = toRemove[index];var indexDiff = (cov_ybgvpmlrn.s[158]++, delta['_' + index1]);var removedValue = (cov_ybgvpmlrn.s[159]++, array.splice(index1, 1)[0]);cov_ybgvpmlrn.s[160]++;if (indexDiff[2] === ARRAY_MOVE) {
      cov_ybgvpmlrn.b[51][0]++;cov_ybgvpmlrn.s[161]++;toInsert.push({ index: indexDiff[1], value: removedValue });
    } else {
      cov_ybgvpmlrn.b[51][1]++;
    }
  }cov_ybgvpmlrn.s[162]++;toInsert = toInsert.sort(compare.numericallyBy('index'));var toInsertLength = (cov_ybgvpmlrn.s[163]++, toInsert.length);cov_ybgvpmlrn.s[164]++;for (index = 0; index < toInsertLength; index++) {
    var insertion = (cov_ybgvpmlrn.s[165]++, toInsert[index]);cov_ybgvpmlrn.s[166]++;array.splice(insertion.index, 0, insertion.value);
  }var toModifyLength = (cov_ybgvpmlrn.s[167]++, toModify.length);var child = (cov_ybgvpmlrn.s[168]++, void 0);cov_ybgvpmlrn.s[169]++;if (toModifyLength > 0) {
    cov_ybgvpmlrn.b[52][0]++;cov_ybgvpmlrn.s[170]++;for (index = 0; index < toModifyLength; index++) {
      var modification = (cov_ybgvpmlrn.s[171]++, toModify[index]);cov_ybgvpmlrn.s[172]++;child = new PatchContext(context.left[modification.index], modification.delta);cov_ybgvpmlrn.s[173]++;context.push(child, modification.index);
    }
  } else {
    cov_ybgvpmlrn.b[52][1]++;
  }cov_ybgvpmlrn.s[174]++;if (!context.children) {
    cov_ybgvpmlrn.b[53][0]++;cov_ybgvpmlrn.s[175]++;context.setResult(context.left).exit();cov_ybgvpmlrn.s[176]++;return;
  } else {
    cov_ybgvpmlrn.b[53][1]++;
  }cov_ybgvpmlrn.s[177]++;context.exit();
};cov_ybgvpmlrn.s[178]++;patchFilter$2.filterName = 'arrays';cov_ybgvpmlrn.s[179]++;var collectChildrenPatchFilter$1 = function collectChildrenPatchFilter(context) {
  cov_ybgvpmlrn.f[10]++;cov_ybgvpmlrn.s[180]++;if ((cov_ybgvpmlrn.b[55][0]++, !context) || (cov_ybgvpmlrn.b[55][1]++, !context.children)) {
    cov_ybgvpmlrn.b[54][0]++;cov_ybgvpmlrn.s[181]++;return;
  } else {
    cov_ybgvpmlrn.b[54][1]++;
  }cov_ybgvpmlrn.s[182]++;if (context.delta._t !== 'a') {
    cov_ybgvpmlrn.b[56][0]++;cov_ybgvpmlrn.s[183]++;return;
  } else {
    cov_ybgvpmlrn.b[56][1]++;
  }var length = (cov_ybgvpmlrn.s[184]++, context.children.length);var child = (cov_ybgvpmlrn.s[185]++, void 0);cov_ybgvpmlrn.s[186]++;for (var index = 0; index < length; index++) {
    cov_ybgvpmlrn.s[187]++;child = context.children[index];cov_ybgvpmlrn.s[188]++;context.left[child.childName] = child.result;
  }cov_ybgvpmlrn.s[189]++;context.setResult(context.left).exit();
};cov_ybgvpmlrn.s[190]++;collectChildrenPatchFilter$1.filterName = 'arraysCollectChildren';cov_ybgvpmlrn.s[191]++;var reverseFilter$2 = function arraysReverseFilter(context) {
  cov_ybgvpmlrn.f[11]++;cov_ybgvpmlrn.s[192]++;if (!context.nested) {
    cov_ybgvpmlrn.b[57][0]++;cov_ybgvpmlrn.s[193]++;if (context.delta[2] === ARRAY_MOVE) {
      cov_ybgvpmlrn.b[58][0]++;cov_ybgvpmlrn.s[194]++;context.newName = '_' + context.delta[1];cov_ybgvpmlrn.s[195]++;context.setResult([context.delta[0], parseInt(context.childName.substr(1), 10), ARRAY_MOVE]).exit();
    } else {
      cov_ybgvpmlrn.b[58][1]++;
    }cov_ybgvpmlrn.s[196]++;return;
  } else {
    cov_ybgvpmlrn.b[57][1]++;
  }cov_ybgvpmlrn.s[197]++;if (context.delta._t !== 'a') {
    cov_ybgvpmlrn.b[59][0]++;cov_ybgvpmlrn.s[198]++;return;
  } else {
    cov_ybgvpmlrn.b[59][1]++;
  }var name = (cov_ybgvpmlrn.s[199]++, void 0);var child = (cov_ybgvpmlrn.s[200]++, void 0);cov_ybgvpmlrn.s[201]++;for (name in context.delta) {
    cov_ybgvpmlrn.s[202]++;if (name === '_t') {
      cov_ybgvpmlrn.b[60][0]++;cov_ybgvpmlrn.s[203]++;continue;
    } else {
      cov_ybgvpmlrn.b[60][1]++;
    }cov_ybgvpmlrn.s[204]++;child = new ReverseContext(context.delta[name]);cov_ybgvpmlrn.s[205]++;context.push(child, name);
  }cov_ybgvpmlrn.s[206]++;context.exit();
};cov_ybgvpmlrn.s[207]++;reverseFilter$2.filterName = 'arrays';cov_ybgvpmlrn.s[208]++;var reverseArrayDeltaIndex = function reverseArrayDeltaIndex(delta, index, itemDelta) {
  cov_ybgvpmlrn.f[12]++;cov_ybgvpmlrn.s[209]++;if ((cov_ybgvpmlrn.b[62][0]++, typeof index === 'string') && (cov_ybgvpmlrn.b[62][1]++, index[0] === '_')) {
    cov_ybgvpmlrn.b[61][0]++;cov_ybgvpmlrn.s[210]++;return parseInt(index.substr(1), 10);
  } else {
    cov_ybgvpmlrn.b[61][1]++;cov_ybgvpmlrn.s[211]++;if ((cov_ybgvpmlrn.b[64][0]++, isArray$2(itemDelta)) && (cov_ybgvpmlrn.b[64][1]++, itemDelta[2] === 0)) {
      cov_ybgvpmlrn.b[63][0]++;cov_ybgvpmlrn.s[212]++;return '_' + index;
    } else {
      cov_ybgvpmlrn.b[63][1]++;
    }
  }var reverseIndex = (cov_ybgvpmlrn.s[213]++, +index);cov_ybgvpmlrn.s[214]++;for (var deltaIndex in delta) {
    var deltaItem = (cov_ybgvpmlrn.s[215]++, delta[deltaIndex]);cov_ybgvpmlrn.s[216]++;if (isArray$2(deltaItem)) {
      cov_ybgvpmlrn.b[65][0]++;cov_ybgvpmlrn.s[217]++;if (deltaItem[2] === ARRAY_MOVE) {
        cov_ybgvpmlrn.b[66][0]++;var moveFromIndex = (cov_ybgvpmlrn.s[218]++, parseInt(deltaIndex.substr(1), 10));var moveToIndex = (cov_ybgvpmlrn.s[219]++, deltaItem[1]);cov_ybgvpmlrn.s[220]++;if (moveToIndex === +index) {
          cov_ybgvpmlrn.b[67][0]++;cov_ybgvpmlrn.s[221]++;return moveFromIndex;
        } else {
          cov_ybgvpmlrn.b[67][1]++;
        }cov_ybgvpmlrn.s[222]++;if ((cov_ybgvpmlrn.b[69][0]++, moveFromIndex <= reverseIndex) && (cov_ybgvpmlrn.b[69][1]++, moveToIndex > reverseIndex)) {
          cov_ybgvpmlrn.b[68][0]++;cov_ybgvpmlrn.s[223]++;reverseIndex++;
        } else {
          cov_ybgvpmlrn.b[68][1]++;cov_ybgvpmlrn.s[224]++;if ((cov_ybgvpmlrn.b[71][0]++, moveFromIndex >= reverseIndex) && (cov_ybgvpmlrn.b[71][1]++, moveToIndex < reverseIndex)) {
            cov_ybgvpmlrn.b[70][0]++;cov_ybgvpmlrn.s[225]++;reverseIndex--;
          } else {
            cov_ybgvpmlrn.b[70][1]++;
          }
        }
      } else {
        cov_ybgvpmlrn.b[66][1]++;cov_ybgvpmlrn.s[226]++;if (deltaItem[2] === 0) {
          cov_ybgvpmlrn.b[72][0]++;var deleteIndex = (cov_ybgvpmlrn.s[227]++, parseInt(deltaIndex.substr(1), 10));cov_ybgvpmlrn.s[228]++;if (deleteIndex <= reverseIndex) {
            cov_ybgvpmlrn.b[73][0]++;cov_ybgvpmlrn.s[229]++;reverseIndex++;
          } else {
            cov_ybgvpmlrn.b[73][1]++;
          }
        } else {
          cov_ybgvpmlrn.b[72][1]++;cov_ybgvpmlrn.s[230]++;if ((cov_ybgvpmlrn.b[75][0]++, deltaItem.length === 1) && (cov_ybgvpmlrn.b[75][1]++, deltaIndex <= reverseIndex)) {
            cov_ybgvpmlrn.b[74][0]++;cov_ybgvpmlrn.s[231]++;reverseIndex--;
          } else {
            cov_ybgvpmlrn.b[74][1]++;
          }
        }
      }
    } else {
      cov_ybgvpmlrn.b[65][1]++;
    }
  }cov_ybgvpmlrn.s[232]++;return reverseIndex;
};function collectChildrenReverseFilter$1(context) {
  cov_ybgvpmlrn.f[13]++;cov_ybgvpmlrn.s[233]++;if ((cov_ybgvpmlrn.b[77][0]++, !context) || (cov_ybgvpmlrn.b[77][1]++, !context.children)) {
    cov_ybgvpmlrn.b[76][0]++;cov_ybgvpmlrn.s[234]++;return;
  } else {
    cov_ybgvpmlrn.b[76][1]++;
  }cov_ybgvpmlrn.s[235]++;if (context.delta._t !== 'a') {
    cov_ybgvpmlrn.b[78][0]++;cov_ybgvpmlrn.s[236]++;return;
  } else {
    cov_ybgvpmlrn.b[78][1]++;
  }var length = (cov_ybgvpmlrn.s[237]++, context.children.length);var child = (cov_ybgvpmlrn.s[238]++, void 0);var delta = (cov_ybgvpmlrn.s[239]++, { _t: 'a' });cov_ybgvpmlrn.s[240]++;for (var index = 0; index < length; index++) {
    cov_ybgvpmlrn.s[241]++;child = context.children[index];var name = (cov_ybgvpmlrn.s[242]++, child.newName);cov_ybgvpmlrn.s[243]++;if (typeof name === 'undefined') {
      cov_ybgvpmlrn.b[79][0]++;cov_ybgvpmlrn.s[244]++;name = reverseArrayDeltaIndex(context.delta, child.childName, child.result);
    } else {
      cov_ybgvpmlrn.b[79][1]++;
    }cov_ybgvpmlrn.s[245]++;if (delta[name] !== child.result) {
      cov_ybgvpmlrn.b[80][0]++;cov_ybgvpmlrn.s[246]++;delta[name] = child.result;
    } else {
      cov_ybgvpmlrn.b[80][1]++;
    }
  }cov_ybgvpmlrn.s[247]++;context.setResult(delta).exit();
}cov_ybgvpmlrn.s[248]++;collectChildrenReverseFilter$1.filterName = 'arraysCollectChildren';

var cov_800skrxwa = function () {
  var path = '/Users/wangjie/project/plugins/jsondiffpatch/src/filters/dates.js',
      hash = 'dd68ead53f44ef7e52d7205e7872484ca72d77bc',
      Function = function () {}.constructor,
      global = new Function('return this')(),
      gcv = '__coverage__',
      coverageData = { path: '/Users/wangjie/project/plugins/jsondiffpatch/src/filters/dates.js', statementMap: { '0': { start: { line: 1, column: 24 }, end: { line: 16, column: 1 } }, '1': { start: { line: 2, column: 2 }, end: { line: 15, column: 3 } }, '2': { start: { line: 3, column: 4 }, end: { line: 11, column: 5 } }, '3': { start: { line: 4, column: 6 }, end: { line: 8, column: 7 } }, '4': { start: { line: 5, column: 8 }, end: { line: 5, column: 57 } }, '5': { start: { line: 7, column: 8 }, end: { line: 7, column: 37 } }, '6': { start: { line: 10, column: 6 }, end: { line: 10, column: 55 } }, '7': { start: { line: 12, column: 4 }, end: { line: 12, column: 19 } }, '8': { start: { line: 13, column: 9 }, end: { line: 15, column: 3 } }, '9': { start: { line: 14, column: 4 }, end: { line: 14, column: 60 } }, '10': { start: { line: 17, column: 0 }, end: { line: 17, column: 32 } } }, fnMap: { '0': { name: 'datesDiffFilter', decl: { start: { line: 1, column: 33 }, end: { line: 1, column: 48 } }, loc: { start: { line: 1, column: 58 }, end: { line: 16, column: 1 } }, line: 1 } }, branchMap: { '0': { loc: { start: { line: 2, column: 2 }, end: { line: 15, column: 3 } }, type: 'if', locations: [{ start: { line: 2, column: 2 }, end: { line: 15, column: 3 } }, { start: { line: 2, column: 2 }, end: { line: 15, column: 3 } }], line: 2 }, '1': { loc: { start: { line: 3, column: 4 }, end: { line: 11, column: 5 } }, type: 'if', locations: [{ start: { line: 3, column: 4 }, end: { line: 11, column: 5 } }, { start: { line: 3, column: 4 }, end: { line: 11, column: 5 } }], line: 3 }, '2': { loc: { start: { line: 4, column: 6 }, end: { line: 8, column: 7 } }, type: 'if', locations: [{ start: { line: 4, column: 6 }, end: { line: 8, column: 7 } }, { start: { line: 4, column: 6 }, end: { line: 8, column: 7 } }], line: 4 }, '3': { loc: { start: { line: 13, column: 9 }, end: { line: 15, column: 3 } }, type: 'if', locations: [{ start: { line: 13, column: 9 }, end: { line: 15, column: 3 } }, { start: { line: 13, column: 9 }, end: { line: 15, column: 3 } }], line: 13 } }, s: { '0': 0, '1': 0, '2': 0, '3': 0, '4': 0, '5': 0, '6': 0, '7': 0, '8': 0, '9': 0, '10': 0 }, f: { '0': 0 }, b: { '0': [0, 0], '1': [0, 0], '2': [0, 0], '3': [0, 0] }, _coverageSchema: '332fd63041d2c1bcb487cc26dd0d5f7d97098a6c' },
      coverage = global[gcv] || (global[gcv] = {});if (coverage[path] && coverage[path].hash === hash) {
    return coverage[path];
  }coverageData.hash = hash;return coverage[path] = coverageData;
}();cov_800skrxwa.s[0]++;var diffFilter$2 = function datesDiffFilter(context) {
  cov_800skrxwa.f[0]++;cov_800skrxwa.s[1]++;if (context.left instanceof Date) {
    cov_800skrxwa.b[0][0]++;cov_800skrxwa.s[2]++;if (context.right instanceof Date) {
      cov_800skrxwa.b[1][0]++;cov_800skrxwa.s[3]++;if (context.left.getTime() !== context.right.getTime()) {
        cov_800skrxwa.b[2][0]++;cov_800skrxwa.s[4]++;context.setResult([context.left, context.right]);
      } else {
        cov_800skrxwa.b[2][1]++;cov_800skrxwa.s[5]++;context.setResult(undefined);
      }
    } else {
      cov_800skrxwa.b[1][1]++;cov_800skrxwa.s[6]++;context.setResult([context.left, context.right]);
    }cov_800skrxwa.s[7]++;context.exit();
  } else {
    cov_800skrxwa.b[0][1]++;cov_800skrxwa.s[8]++;if (context.right instanceof Date) {
      cov_800skrxwa.b[3][0]++;cov_800skrxwa.s[9]++;context.setResult([context.left, context.right]).exit();
    } else {
      cov_800skrxwa.b[3][1]++;
    }
  }
};cov_800skrxwa.s[10]++;diffFilter$2.filterName = 'dates';

var cov_1xf5cb3h1a = function () {
  var path = '/Users/wangjie/project/plugins/jsondiffpatch/src/filters/texts.js',
      hash = 'a3c02cbf3200dd51fde5535ec1ed9bae1dacdb96',
      Function = function () {}.constructor,
      global = new Function('return this')(),
      gcv = '__coverage__',
      coverageData = { path: '/Users/wangjie/project/plugins/jsondiffpatch/src/filters/texts.js', statementMap: { '0': { start: { line: 4, column: 16 }, end: { line: 4, column: 17 } }, '1': { start: { line: 5, column: 25 }, end: { line: 5, column: 27 } }, '2': { start: { line: 6, column: 22 }, end: { line: 6, column: 26 } }, '3': { start: { line: 8, column: 24 }, end: { line: 51, column: 1 } }, '4': { start: { line: 11, column: 2 }, end: { line: 49, column: 3 } }, '5': { start: { line: 12, column: 19 }, end: { line: 12, column: 25 } }, '6': { start: { line: 14, column: 4 }, end: { line: 23, column: 5 } }, '7': { start: { line: 16, column: 6 }, end: { line: 16, column: 123 } }, '8': { start: { line: 17, column: 11 }, end: { line: 23, column: 5 } }, '9': { start: { line: 18, column: 6 }, end: { line: 22, column: 7 } }, '10': { start: { line: 19, column: 8 }, end: { line: 19, column: 36 } }, '11': { start: { line: 21, column: 8 }, end: { line: 21, column: 24 } }, '12': { start: { line: 25, column: 4 }, end: { line: 33, column: 5 } }, '13': { start: { line: 26, column: 6 }, end: { line: 28, column: 7 } }, '14': { start: { line: 27, column: 8 }, end: { line: 27, column: 20 } }, '15': { start: { line: 29, column: 18 }, end: { line: 29, column: 70 } }, '16': { start: { line: 31, column: 6 }, end: { line: 31, column: 46 } }, '17': { start: { line: 32, column: 6 }, end: { line: 32, column: 18 } }, '18': { start: { line: 34, column: 4 }, end: { line: 48, column: 6 } }, '19': { start: { line: 36, column: 8 }, end: { line: 36, column: 70 } }, '20': { start: { line: 39, column: 22 }, end: { line: 39, column: 81 } }, '21': { start: { line: 40, column: 8 }, end: { line: 45, column: 9 } }, '22': { start: { line: 41, column: 10 }, end: { line: 44, column: 11 } }, '23': { start: { line: 42, column: 25 }, end: { line: 42, column: 55 } }, '24': { start: { line: 43, column: 12 }, end: { line: 43, column: 42 } }, '25': { start: { line: 46, column: 8 }, end: { line: 46, column: 26 } }, '26': { start: { line: 50, column: 2 }, end: { line: 50, column: 25 } }, '27': { start: { line: 53, column: 24 }, end: { line: 72, column: 1 } }, '28': { start: { line: 54, column: 2 }, end: { line: 56, column: 3 } }, '29': { start: { line: 55, column: 4 }, end: { line: 55, column: 11 } }, '30': { start: { line: 57, column: 18 }, end: { line: 57, column: 121 } }, '31': { start: { line: 58, column: 2 }, end: { line: 61, column: 3 } }, '32': { start: { line: 59, column: 4 }, end: { line: 59, column: 60 } }, '33': { start: { line: 60, column: 4 }, end: { line: 60, column: 11 } }, '34': { start: { line: 63, column: 23 }, end: { line: 63, column: 42 } }, '35': { start: { line: 64, column: 2 }, end: { line: 69, column: 3 } }, '36': { start: { line: 67, column: 4 }, end: { line: 67, column: 60 } }, '37': { start: { line: 68, column: 4 }, end: { line: 68, column: 11 } }, '38': { start: { line: 70, column: 13 }, end: { line: 70, column: 32 } }, '39': { start: { line: 71, column: 2 }, end: { line: 71, column: 78 } }, '40': { start: { line: 73, column: 0 }, end: { line: 73, column: 32 } }, '41': { start: { line: 75, column: 25 }, end: { line: 86, column: 1 } }, '42': { start: { line: 76, column: 2 }, end: { line: 78, column: 3 } }, '43': { start: { line: 77, column: 4 }, end: { line: 77, column: 11 } }, '44': { start: { line: 79, column: 2 }, end: { line: 81, column: 3 } }, '45': { start: { line: 80, column: 4 }, end: { line: 80, column: 11 } }, '46': { start: { line: 84, column: 14 }, end: { line: 84, column: 43 } }, '47': { start: { line: 85, column: 2 }, end: { line: 85, column: 66 } }, '48': { start: { line: 87, column: 0 }, end: { line: 87, column: 33 } }, '49': { start: { line: 89, column: 23 }, end: { line: 121, column: 1 } }, '50': { start: { line: 90, column: 10 }, end: { line: 90, column: 16 } }, '51': { start: { line: 91, column: 10 }, end: { line: 91, column: 16 } }, '52': { start: { line: 92, column: 14 }, end: { line: 92, column: 20 } }, '53': { start: { line: 93, column: 13 }, end: { line: 93, column: 19 } }, '54': { start: { line: 94, column: 16 }, end: { line: 94, column: 22 } }, '55': { start: { line: 95, column: 15 }, end: { line: 95, column: 19 } }, '56': { start: { line: 96, column: 20 }, end: { line: 96, column: 59 } }, '57': { start: { line: 97, column: 19 }, end: { line: 97, column: 25 } }, '58': { start: { line: 98, column: 2 }, end: { line: 98, column: 28 } }, '59': { start: { line: 99, column: 2 }, end: { line: 119, column: 3 } }, '60': { start: { line: 100, column: 4 }, end: { line: 100, column: 20 } }, '61': { start: { line: 101, column: 20 }, end: { line: 101, column: 36 } }, '62': { start: { line: 102, column: 4 }, end: { line: 118, column: 5 } }, '63': { start: { line: 103, column: 6 }, end: { line: 103, column: 38 } }, '64': { start: { line: 104, column: 6 }, end: { line: 104, column: 21 } }, '65': { start: { line: 107, column: 6 }, end: { line: 107, column: 108 } }, '66': { start: { line: 108, column: 11 }, end: { line: 118, column: 5 } }, '67': { start: { line: 109, column: 6 }, end: { line: 109, column: 41 } }, '68': { start: { line: 110, column: 6 }, end: { line: 115, column: 7 } }, '69': { start: { line: 112, column: 8 }, end: { line: 112, column: 27 } }, '70': { start: { line: 113, column: 8 }, end: { line: 113, column: 32 } }, '71': { start: { line: 114, column: 8 }, end: { line: 114, column: 31 } }, '72': { start: { line: 116, column: 11 }, end: { line: 118, column: 5 } }, '73': { start: { line: 117, column: 6 }, end: { line: 117, column: 41 } }, '74': { start: { line: 120, column: 2 }, end: { line: 120, column: 26 } }, '75': { start: { line: 123, column: 27 }, end: { line: 133, column: 1 } }, '76': { start: { line: 124, column: 2 }, end: { line: 126, column: 3 } }, '77': { start: { line: 125, column: 4 }, end: { line: 125, column: 11 } }, '78': { start: { line: 127, column: 2 }, end: { line: 129, column: 3 } }, '79': { start: { line: 128, column: 4 }, end: { line: 128, column: 11 } }, '80': { start: { line: 132, column: 2 }, end: { line: 132, column: 79 } }, '81': { start: { line: 134, column: 0 }, end: { line: 134, column: 35 } } }, fnMap: { '0': { name: 'getDiffMatchPatch', decl: { start: { line: 8, column: 33 }, end: { line: 8, column: 50 } }, loc: { start: { line: 8, column: 61 }, end: { line: 51, column: 1 } }, line: 8 }, '1': { name: 'diff', decl: { start: { line: 35, column: 21 }, end: { line: 35, column: 25 } }, loc: { start: { line: 35, column: 38 }, end: { line: 37, column: 7 } }, line: 35 }, '2': { name: 'patch', decl: { start: { line: 38, column: 22 }, end: { line: 38, column: 27 } }, loc: { start: { line: 38, column: 42 }, end: { line: 47, column: 7 } }, line: 38 }, '3': { name: 'textsDiffFilter', decl: { start: { line: 53, column: 33 }, end: { line: 53, column: 48 } }, loc: { start: { line: 53, column: 58 }, end: { line: 72, column: 1 } }, line: 53 }, '4': { name: 'textsPatchFilter', decl: { start: { line: 75, column: 34 }, end: { line: 75, column: 50 } }, loc: { start: { line: 75, column: 60 }, end: { line: 86, column: 1 } }, line: 75 }, '5': { name: 'textDeltaReverse', decl: { start: { line: 89, column: 32 }, end: { line: 89, column: 48 } }, loc: { start: { line: 89, column: 56 }, end: { line: 121, column: 1 } }, line: 89 }, '6': { name: 'textsReverseFilter', decl: { start: { line: 123, column: 36 }, end: { line: 123, column: 54 } }, loc: { start: { line: 123, column: 64 }, end: { line: 133, column: 1 } }, line: 123 } }, branchMap: { '0': { loc: { start: { line: 11, column: 2 }, end: { line: 49, column: 3 } }, type: 'if', locations: [{ start: { line: 11, column: 2 }, end: { line: 49, column: 3 } }, { start: { line: 11, column: 2 }, end: { line: 49, column: 3 } }], line: 11 }, '1': { loc: { start: { line: 14, column: 4 }, end: { line: 23, column: 5 } }, type: 'if', locations: [{ start: { line: 14, column: 4 }, end: { line: 23, column: 5 } }, { start: { line: 14, column: 4 }, end: { line: 23, column: 5 } }], line: 14 }, '2': { loc: { start: { line: 16, column: 17 }, end: { line: 16, column: 122 } }, type: 'cond-expr', locations: [{ start: { line: 16, column: 58 }, end: { line: 16, column: 80 } }, { start: { line: 16, column: 83 }, end: { line: 16, column: 122 } }], line: 16 }, '3': { loc: { start: { line: 17, column: 11 }, end: { line: 23, column: 5 } }, type: 'if', locations: [{ start: { line: 17, column: 11 }, end: { line: 23, column: 5 } }, { start: { line: 17, column: 11 }, end: { line: 23, column: 5 } }], line: 17 }, '4': { loc: { start: { line: 19, column: 19 }, end: { line: 19, column: 35 } }, type: 'binary-expr', locations: [{ start: { line: 19, column: 19 }, end: { line: 19, column: 22 } }, { start: { line: 19, column: 26 }, end: { line: 19, column: 35 } }], line: 19 }, '5': { loc: { start: { line: 25, column: 4 }, end: { line: 33, column: 5 } }, type: 'if', locations: [{ start: { line: 25, column: 4 }, end: { line: 33, column: 5 } }, { start: { line: 25, column: 4 }, end: { line: 33, column: 5 } }], line: 25 }, '6': { loc: { start: { line: 26, column: 6 }, end: { line: 28, column: 7 } }, type: 'if', locations: [{ start: { line: 26, column: 6 }, end: { line: 28, column: 7 } }, { start: { line: 26, column: 6 }, end: { line: 28, column: 7 } }], line: 26 }, '7': { loc: { start: { line: 41, column: 10 }, end: { line: 44, column: 11 } }, type: 'if', locations: [{ start: { line: 41, column: 10 }, end: { line: 44, column: 11 } }, { start: { line: 41, column: 10 }, end: { line: 44, column: 11 } }], line: 41 }, '8': { loc: { start: { line: 54, column: 2 }, end: { line: 56, column: 3 } }, type: 'if', locations: [{ start: { line: 54, column: 2 }, end: { line: 56, column: 3 } }, { start: { line: 54, column: 2 }, end: { line: 56, column: 3 } }], line: 54 }, '9': { loc: { start: { line: 57, column: 18 }, end: { line: 57, column: 121 } }, type: 'binary-expr', locations: [{ start: { line: 57, column: 18 }, end: { line: 57, column: 33 } }, { start: { line: 57, column: 37 }, end: { line: 57, column: 61 } }, { start: { line: 57, column: 65 }, end: { line: 57, column: 99 } }, { start: { line: 57, column: 103 }, end: { line: 57, column: 121 } }], line: 57 }, '10': { loc: { start: { line: 58, column: 2 }, end: { line: 61, column: 3 } }, type: 'if', locations: [{ start: { line: 58, column: 2 }, end: { line: 61, column: 3 } }, { start: { line: 58, column: 2 }, end: { line: 61, column: 3 } }], line: 58 }, '11': { loc: { start: { line: 58, column: 6 }, end: { line: 58, column: 73 } }, type: 'binary-expr', locations: [{ start: { line: 58, column: 6 }, end: { line: 58, column: 37 } }, { start: { line: 58, column: 41 }, end: { line: 58, column: 73 } }], line: 58 }, '12': { loc: { start: { line: 64, column: 2 }, end: { line: 69, column: 3 } }, type: 'if', locations: [{ start: { line: 64, column: 2 }, end: { line: 69, column: 3 } }, { start: { line: 64, column: 2 }, end: { line: 69, column: 3 } }], line: 64 }, '13': { loc: { start: { line: 76, column: 2 }, end: { line: 78, column: 3 } }, type: 'if', locations: [{ start: { line: 76, column: 2 }, end: { line: 78, column: 3 } }, { start: { line: 76, column: 2 }, end: { line: 78, column: 3 } }], line: 76 }, '14': { loc: { start: { line: 79, column: 2 }, end: { line: 81, column: 3 } }, type: 'if', locations: [{ start: { line: 79, column: 2 }, end: { line: 81, column: 3 } }, { start: { line: 79, column: 2 }, end: { line: 81, column: 3 } }], line: 79 }, '15': { loc: { start: { line: 102, column: 4 }, end: { line: 118, column: 5 } }, type: 'if', locations: [{ start: { line: 102, column: 4 }, end: { line: 118, column: 5 } }, { start: { line: 102, column: 4 }, end: { line: 118, column: 5 } }], line: 102 }, '16': { loc: { start: { line: 108, column: 11 }, end: { line: 118, column: 5 } }, type: 'if', locations: [{ start: { line: 108, column: 11 }, end: { line: 118, column: 5 } }, { start: { line: 108, column: 11 }, end: { line: 118, column: 5 } }], line: 108 }, '17': { loc: { start: { line: 110, column: 6 }, end: { line: 115, column: 7 } }, type: 'if', locations: [{ start: { line: 110, column: 6 }, end: { line: 115, column: 7 } }, { start: { line: 110, column: 6 }, end: { line: 115, column: 7 } }], line: 110 }, '18': { loc: { start: { line: 116, column: 11 }, end: { line: 118, column: 5 } }, type: 'if', locations: [{ start: { line: 116, column: 11 }, end: { line: 118, column: 5 } }, { start: { line: 116, column: 11 }, end: { line: 118, column: 5 } }], line: 116 }, '19': { loc: { start: { line: 124, column: 2 }, end: { line: 126, column: 3 } }, type: 'if', locations: [{ start: { line: 124, column: 2 }, end: { line: 126, column: 3 } }, { start: { line: 124, column: 2 }, end: { line: 126, column: 3 } }], line: 124 }, '20': { loc: { start: { line: 127, column: 2 }, end: { line: 129, column: 3 } }, type: 'if', locations: [{ start: { line: 127, column: 2 }, end: { line: 129, column: 3 } }, { start: { line: 127, column: 2 }, end: { line: 129, column: 3 } }], line: 127 } }, s: { '0': 0, '1': 0, '2': 0, '3': 0, '4': 0, '5': 0, '6': 0, '7': 0, '8': 0, '9': 0, '10': 0, '11': 0, '12': 0, '13': 0, '14': 0, '15': 0, '16': 0, '17': 0, '18': 0, '19': 0, '20': 0, '21': 0, '22': 0, '23': 0, '24': 0, '25': 0, '26': 0, '27': 0, '28': 0, '29': 0, '30': 0, '31': 0, '32': 0, '33': 0, '34': 0, '35': 0, '36': 0, '37': 0, '38': 0, '39': 0, '40': 0, '41': 0, '42': 0, '43': 0, '44': 0, '45': 0, '46': 0, '47': 0, '48': 0, '49': 0, '50': 0, '51': 0, '52': 0, '53': 0, '54': 0, '55': 0, '56': 0, '57': 0, '58': 0, '59': 0, '60': 0, '61': 0, '62': 0, '63': 0, '64': 0, '65': 0, '66': 0, '67': 0, '68': 0, '69': 0, '70': 0, '71': 0, '72': 0, '73': 0, '74': 0, '75': 0, '76': 0, '77': 0, '78': 0, '79': 0, '80': 0, '81': 0 }, f: { '0': 0, '1': 0, '2': 0, '3': 0, '4': 0, '5': 0, '6': 0 }, b: { '0': [0, 0], '1': [0, 0], '2': [0, 0], '3': [0, 0], '4': [0, 0], '5': [0, 0], '6': [0, 0], '7': [0, 0], '8': [0, 0], '9': [0, 0, 0, 0], '10': [0, 0], '11': [0, 0], '12': [0, 0], '13': [0, 0], '14': [0, 0], '15': [0, 0], '16': [0, 0], '17': [0, 0], '18': [0, 0], '19': [0, 0], '20': [0, 0] }, _coverageSchema: '332fd63041d2c1bcb487cc26dd0d5f7d97098a6c' },
      coverage = global[gcv] || (global[gcv] = {});if (coverage[path] && coverage[path].hash === hash) {
    return coverage[path];
  }coverageData.hash = hash;return coverage[path] = coverageData;
}();var TEXT_DIFF = (cov_1xf5cb3h1a.s[0]++, 2);var DEFAULT_MIN_LENGTH = (cov_1xf5cb3h1a.s[1]++, 60);var cachedDiffPatch = (cov_1xf5cb3h1a.s[2]++, null);cov_1xf5cb3h1a.s[3]++;var getDiffMatchPatch = function getDiffMatchPatch(required) {
  cov_1xf5cb3h1a.f[0]++;cov_1xf5cb3h1a.s[4]++;if (!cachedDiffPatch) {
    cov_1xf5cb3h1a.b[0][0]++;var instance = (cov_1xf5cb3h1a.s[5]++, void 0);cov_1xf5cb3h1a.s[6]++;if (typeof diff_match_patch !== 'undefined') {
      cov_1xf5cb3h1a.b[1][0]++;cov_1xf5cb3h1a.s[7]++;instance = typeof diff_match_patch === 'function' ? (cov_1xf5cb3h1a.b[2][0]++, new diff_match_patch()) : (cov_1xf5cb3h1a.b[2][1]++, new diff_match_patch.diff_match_patch());
    } else {
      cov_1xf5cb3h1a.b[1][1]++;cov_1xf5cb3h1a.s[8]++;if (dmp) {
        cov_1xf5cb3h1a.b[3][0]++;cov_1xf5cb3h1a.s[9]++;try {
          cov_1xf5cb3h1a.s[10]++;instance = (cov_1xf5cb3h1a.b[4][0]++, dmp) && (cov_1xf5cb3h1a.b[4][1]++, new dmp());
        } catch (err) {
          cov_1xf5cb3h1a.s[11]++;instance = null;
        }
      } else {
        cov_1xf5cb3h1a.b[3][1]++;
      }
    }cov_1xf5cb3h1a.s[12]++;if (!instance) {
      cov_1xf5cb3h1a.b[5][0]++;cov_1xf5cb3h1a.s[13]++;if (!required) {
        cov_1xf5cb3h1a.b[6][0]++;cov_1xf5cb3h1a.s[14]++;return null;
      } else {
        cov_1xf5cb3h1a.b[6][1]++;
      }var error = (cov_1xf5cb3h1a.s[15]++, new Error('text diff_match_patch library not found'));cov_1xf5cb3h1a.s[16]++;error.diff_match_patch_not_found = true;cov_1xf5cb3h1a.s[17]++;throw error;
    } else {
      cov_1xf5cb3h1a.b[5][1]++;
    }cov_1xf5cb3h1a.s[18]++;cachedDiffPatch = { diff: function diff(txt1, txt2) {
        cov_1xf5cb3h1a.f[1]++;cov_1xf5cb3h1a.s[19]++;return instance.patch_toText(instance.patch_make(txt1, txt2));
      }, patch: function patch(txt1, _patch) {
        cov_1xf5cb3h1a.f[2]++;var results = (cov_1xf5cb3h1a.s[20]++, instance.patch_apply(instance.patch_fromText(_patch), txt1));cov_1xf5cb3h1a.s[21]++;for (var i = 0; i < results[1].length; i++) {
          cov_1xf5cb3h1a.s[22]++;if (!results[1][i]) {
            cov_1xf5cb3h1a.b[7][0]++;var _error = (cov_1xf5cb3h1a.s[23]++, new Error('text patch failed'));cov_1xf5cb3h1a.s[24]++;_error.textPatchFailed = true;
          } else {
            cov_1xf5cb3h1a.b[7][1]++;
          }
        }cov_1xf5cb3h1a.s[25]++;return results[0];
      } };
  } else {
    cov_1xf5cb3h1a.b[0][1]++;
  }cov_1xf5cb3h1a.s[26]++;return cachedDiffPatch;
};cov_1xf5cb3h1a.s[27]++;var diffFilter$3 = function textsDiffFilter(context) {
  cov_1xf5cb3h1a.f[3]++;cov_1xf5cb3h1a.s[28]++;if (context.leftType !== 'string') {
    cov_1xf5cb3h1a.b[8][0]++;cov_1xf5cb3h1a.s[29]++;return;
  } else {
    cov_1xf5cb3h1a.b[8][1]++;
  }var minLength = (cov_1xf5cb3h1a.s[30]++, (cov_1xf5cb3h1a.b[9][0]++, context.options) && (cov_1xf5cb3h1a.b[9][1]++, context.options.textDiff) && (cov_1xf5cb3h1a.b[9][2]++, context.options.textDiff.minLength) || (cov_1xf5cb3h1a.b[9][3]++, DEFAULT_MIN_LENGTH));cov_1xf5cb3h1a.s[31]++;if ((cov_1xf5cb3h1a.b[11][0]++, context.left.length < minLength) || (cov_1xf5cb3h1a.b[11][1]++, context.right.length < minLength)) {
    cov_1xf5cb3h1a.b[10][0]++;cov_1xf5cb3h1a.s[32]++;context.setResult([context.left, context.right]).exit();cov_1xf5cb3h1a.s[33]++;return;
  } else {
    cov_1xf5cb3h1a.b[10][1]++;
  }var diffMatchPatch = (cov_1xf5cb3h1a.s[34]++, getDiffMatchPatch());cov_1xf5cb3h1a.s[35]++;if (!diffMatchPatch) {
    cov_1xf5cb3h1a.b[12][0]++;cov_1xf5cb3h1a.s[36]++;context.setResult([context.left, context.right]).exit();cov_1xf5cb3h1a.s[37]++;return;
  } else {
    cov_1xf5cb3h1a.b[12][1]++;
  }var diff = (cov_1xf5cb3h1a.s[38]++, diffMatchPatch.diff);cov_1xf5cb3h1a.s[39]++;context.setResult([diff(context.left, context.right), 0, TEXT_DIFF]).exit();
};cov_1xf5cb3h1a.s[40]++;diffFilter$3.filterName = 'texts';cov_1xf5cb3h1a.s[41]++;var patchFilter$3 = function textsPatchFilter(context) {
  cov_1xf5cb3h1a.f[4]++;cov_1xf5cb3h1a.s[42]++;if (context.nested) {
    cov_1xf5cb3h1a.b[13][0]++;cov_1xf5cb3h1a.s[43]++;return;
  } else {
    cov_1xf5cb3h1a.b[13][1]++;
  }cov_1xf5cb3h1a.s[44]++;if (context.delta[2] !== TEXT_DIFF) {
    cov_1xf5cb3h1a.b[14][0]++;cov_1xf5cb3h1a.s[45]++;return;
  } else {
    cov_1xf5cb3h1a.b[14][1]++;
  }var patch = (cov_1xf5cb3h1a.s[46]++, getDiffMatchPatch(true).patch);cov_1xf5cb3h1a.s[47]++;context.setResult(patch(context.left, context.delta[0])).exit();
};cov_1xf5cb3h1a.s[48]++;patchFilter$3.filterName = 'texts';cov_1xf5cb3h1a.s[49]++;var textDeltaReverse = function textDeltaReverse(delta) {
  cov_1xf5cb3h1a.f[5]++;var i = (cov_1xf5cb3h1a.s[50]++, void 0);var l = (cov_1xf5cb3h1a.s[51]++, void 0);var lines = (cov_1xf5cb3h1a.s[52]++, void 0);var line = (cov_1xf5cb3h1a.s[53]++, void 0);var lineTmp = (cov_1xf5cb3h1a.s[54]++, void 0);var header = (cov_1xf5cb3h1a.s[55]++, null);var headerRegex = (cov_1xf5cb3h1a.s[56]++, /^@@ +-(\d+),(\d+) +\+(\d+),(\d+) +@@$/);var lineHeader = (cov_1xf5cb3h1a.s[57]++, void 0);cov_1xf5cb3h1a.s[58]++;lines = delta.split('\n');cov_1xf5cb3h1a.s[59]++;for (i = 0, l = lines.length; i < l; i++) {
    cov_1xf5cb3h1a.s[60]++;line = lines[i];var lineStart = (cov_1xf5cb3h1a.s[61]++, line.slice(0, 1));cov_1xf5cb3h1a.s[62]++;if (lineStart === '@') {
      cov_1xf5cb3h1a.b[15][0]++;cov_1xf5cb3h1a.s[63]++;header = headerRegex.exec(line);cov_1xf5cb3h1a.s[64]++;lineHeader = i;cov_1xf5cb3h1a.s[65]++;lines[lineHeader] = '@@ -' + header[3] + ',' + header[4] + ' +' + header[1] + ',' + header[2] + ' @@';
    } else {
      cov_1xf5cb3h1a.b[15][1]++;cov_1xf5cb3h1a.s[66]++;if (lineStart === '+') {
        cov_1xf5cb3h1a.b[16][0]++;cov_1xf5cb3h1a.s[67]++;lines[i] = '-' + lines[i].slice(1);cov_1xf5cb3h1a.s[68]++;if (lines[i - 1].slice(0, 1) === '+') {
          cov_1xf5cb3h1a.b[17][0]++;cov_1xf5cb3h1a.s[69]++;lineTmp = lines[i];cov_1xf5cb3h1a.s[70]++;lines[i] = lines[i - 1];cov_1xf5cb3h1a.s[71]++;lines[i - 1] = lineTmp;
        } else {
          cov_1xf5cb3h1a.b[17][1]++;
        }
      } else {
        cov_1xf5cb3h1a.b[16][1]++;cov_1xf5cb3h1a.s[72]++;if (lineStart === '-') {
          cov_1xf5cb3h1a.b[18][0]++;cov_1xf5cb3h1a.s[73]++;lines[i] = '+' + lines[i].slice(1);
        } else {
          cov_1xf5cb3h1a.b[18][1]++;
        }
      }
    }
  }cov_1xf5cb3h1a.s[74]++;return lines.join('\n');
};cov_1xf5cb3h1a.s[75]++;var reverseFilter$3 = function textsReverseFilter(context) {
  cov_1xf5cb3h1a.f[6]++;cov_1xf5cb3h1a.s[76]++;if (context.nested) {
    cov_1xf5cb3h1a.b[19][0]++;cov_1xf5cb3h1a.s[77]++;return;
  } else {
    cov_1xf5cb3h1a.b[19][1]++;
  }cov_1xf5cb3h1a.s[78]++;if (context.delta[2] !== TEXT_DIFF) {
    cov_1xf5cb3h1a.b[20][0]++;cov_1xf5cb3h1a.s[79]++;return;
  } else {
    cov_1xf5cb3h1a.b[20][1]++;
  }cov_1xf5cb3h1a.s[80]++;context.setResult([textDeltaReverse(context.delta[0]), 0, TEXT_DIFF]).exit();
};cov_1xf5cb3h1a.s[81]++;reverseFilter$3.filterName = 'texts';

var cov_tq2yok8pb = function () {
  var path = '/Users/wangjie/project/plugins/jsondiffpatch/src/diffpatcher.js',
      hash = '3d34d13dcd9f458e882f55c1cbd55f7f353c4abc',
      Function = function () {}.constructor,
      global = new Function('return this')(),
      gcv = '__coverage__',
      coverageData = { path: '/Users/wangjie/project/plugins/jsondiffpatch/src/diffpatcher.js', statementMap: { '0': { start: { line: 14, column: 18 }, end: { line: 58, column: 3 } }, '1': { start: { line: 16, column: 4 }, end: { line: 16, column: 51 } }, '2': { start: { line: 18, column: 4 }, end: { line: 18, column: 44 } }, '3': { start: { line: 19, column: 4 }, end: { line: 19, column: 203 } }, '4': { start: { line: 20, column: 4 }, end: { line: 20, column: 219 } }, '5': { start: { line: 21, column: 4 }, end: { line: 21, column: 233 } }, '6': { start: { line: 24, column: 2 }, end: { line: 56, column: 6 } }, '7': { start: { line: 29, column: 6 }, end: { line: 29, column: 80 } }, '8': { start: { line: 34, column: 6 }, end: { line: 34, column: 66 } }, '9': { start: { line: 39, column: 6 }, end: { line: 39, column: 67 } }, '10': { start: { line: 44, column: 6 }, end: { line: 44, column: 63 } }, '11': { start: { line: 49, column: 6 }, end: { line: 49, column: 52 } }, '12': { start: { line: 54, column: 6 }, end: { line: 54, column: 27 } }, '13': { start: { line: 57, column: 2 }, end: { line: 57, column: 21 } } }, fnMap: { '0': { name: '(anonymous_0)', decl: { start: { line: 14, column: 18 }, end: { line: 14, column: 19 } }, loc: { start: { line: 14, column: 30 }, end: { line: 58, column: 1 } }, line: 14 }, '1': { name: 'DiffPatcher', decl: { start: { line: 15, column: 11 }, end: { line: 15, column: 22 } }, loc: { start: { line: 15, column: 32 }, end: { line: 22, column: 3 } }, line: 15 }, '2': { name: 'options', decl: { start: { line: 26, column: 20 }, end: { line: 26, column: 27 } }, loc: { start: { line: 26, column: 30 }, end: { line: 30, column: 5 } }, line: 26 }, '3': { name: 'diff', decl: { start: { line: 33, column: 20 }, end: { line: 33, column: 24 } }, loc: { start: { line: 33, column: 38 }, end: { line: 35, column: 5 } }, line: 33 }, '4': { name: 'patch', decl: { start: { line: 38, column: 20 }, end: { line: 38, column: 25 } }, loc: { start: { line: 38, column: 39 }, end: { line: 40, column: 5 } }, line: 38 }, '5': { name: 'reverse', decl: { start: { line: 43, column: 20 }, end: { line: 43, column: 27 } }, loc: { start: { line: 43, column: 35 }, end: { line: 45, column: 5 } }, line: 43 }, '6': { name: 'unpatch', decl: { start: { line: 48, column: 20 }, end: { line: 48, column: 27 } }, loc: { start: { line: 48, column: 42 }, end: { line: 50, column: 5 } }, line: 48 }, '7': { name: 'clone', decl: { start: { line: 53, column: 20 }, end: { line: 53, column: 25 } }, loc: { start: { line: 53, column: 33 }, end: { line: 55, column: 5 } }, line: 53 } }, branchMap: {}, s: { '0': 0, '1': 0, '2': 0, '3': 0, '4': 0, '5': 0, '6': 0, '7': 0, '8': 0, '9': 0, '10': 0, '11': 0, '12': 0, '13': 0 }, f: { '0': 0, '1': 0, '2': 0, '3': 0, '4': 0, '5': 0, '6': 0, '7': 0 }, b: {}, _coverageSchema: '332fd63041d2c1bcb487cc26dd0d5f7d97098a6c' },
      coverage = global[gcv] || (global[gcv] = {});if (coverage[path] && coverage[path].hash === hash) {
    return coverage[path];
  }coverageData.hash = hash;return coverage[path] = coverageData;
}();var DiffPatcher = (cov_tq2yok8pb.s[0]++, function () {
  cov_tq2yok8pb.f[0]++;function DiffPatcher(options) {
    cov_tq2yok8pb.f[1]++;cov_tq2yok8pb.s[1]++;classCallCheck$1(this, DiffPatcher);cov_tq2yok8pb.s[2]++;this.processor = new Processor(options);cov_tq2yok8pb.s[3]++;this.processor.pipe(new Pipe('diff').append(collectChildrenDiffFilter, diffFilter, diffFilter$2, diffFilter$3, objectsDiffFilter, diffFilter$1).shouldHaveResult());cov_tq2yok8pb.s[4]++;this.processor.pipe(new Pipe('patch').append(collectChildrenPatchFilter, collectChildrenPatchFilter$1, patchFilter, patchFilter$3, patchFilter$1, patchFilter$2).shouldHaveResult());cov_tq2yok8pb.s[5]++;this.processor.pipe(new Pipe('reverse').append(collectChildrenReverseFilter, collectChildrenReverseFilter$1, reverseFilter, reverseFilter$3, reverseFilter$1, reverseFilter$2).shouldHaveResult());
  }cov_tq2yok8pb.s[6]++;createClass$1(DiffPatcher, [{ key: 'options', value: function options() {
      cov_tq2yok8pb.f[2]++;var _processor;cov_tq2yok8pb.s[7]++;return (_processor = this.processor).options.apply(_processor, arguments);
    } }, { key: 'diff', value: function diff(left, right) {
      cov_tq2yok8pb.f[3]++;cov_tq2yok8pb.s[8]++;return this.processor.process(new DiffContext(left, right));
    } }, { key: 'patch', value: function patch(left, delta) {
      cov_tq2yok8pb.f[4]++;cov_tq2yok8pb.s[9]++;return this.processor.process(new PatchContext(left, delta));
    } }, { key: 'reverse', value: function reverse(delta) {
      cov_tq2yok8pb.f[5]++;cov_tq2yok8pb.s[10]++;return this.processor.process(new ReverseContext(delta));
    } }, { key: 'unpatch', value: function unpatch(right, delta) {
      cov_tq2yok8pb.f[6]++;cov_tq2yok8pb.s[11]++;return this.patch(right, this.reverse(delta));
    } }, { key: 'clone', value: function clone$$1(value) {
      cov_tq2yok8pb.f[7]++;cov_tq2yok8pb.s[12]++;return clone(value);
    } }]);cov_tq2yok8pb.s[13]++;return DiffPatcher;
}());

var cov_2bjq00ughy = function () {
  var path = '/Users/wangjie/project/plugins/jsondiffpatch/src/formatters/base.js',
      hash = '8384559fcf3fd2aaa0b4ad6a42b8ff832d2c7196',
      Function = function () {}.constructor,
      global = new Function('return this')(),
      gcv = '__coverage__',
      coverageData = { path: '/Users/wangjie/project/plugins/jsondiffpatch/src/formatters/base.js', statementMap: { '0': { start: { line: 1, column: 14 }, end: { line: 3, column: 1 } }, '1': { start: { line: 2, column: 2 }, end: { line: 2, column: 28 } }, '2': { start: { line: 5, column: 20 }, end: { line: 15, column: 1 } }, '3': { start: { line: 6, column: 2 }, end: { line: 6, column: 26 } }, '4': { start: { line: 8, column: 14 }, end: { line: 8, column: 16 } }, '5': { start: { line: 9, column: 2 }, end: { line: 13, column: 3 } }, '6': { start: { line: 10, column: 4 }, end: { line: 12, column: 5 } }, '7': { start: { line: 11, column: 6 }, end: { line: 11, column: 27 } }, '8': { start: { line: 14, column: 2 }, end: { line: 14, column: 15 } }, '9': { start: { line: 17, column: 21 }, end: { line: 22, column: 1 } }, '10': { start: { line: 18, column: 2 }, end: { line: 20, column: 3 } }, '11': { start: { line: 19, column: 4 }, end: { line: 19, column: 24 } }, '12': { start: { line: 21, column: 2 }, end: { line: 21, column: 13 } }, '13': { start: { line: 24, column: 27 }, end: { line: 34, column: 1 } }, '14': { start: { line: 25, column: 2 }, end: { line: 33, column: 3 } }, '15': { start: { line: 26, column: 4 }, end: { line: 26, column: 14 } }, '16': { start: { line: 28, column: 4 }, end: { line: 32, column: 5 } }, '17': { start: { line: 29, column: 6 }, end: { line: 29, column: 40 } }, '18': { start: { line: 31, column: 6 }, end: { line: 31, column: 37 } }, '19': { start: { line: 36, column: 23 }, end: { line: 38, column: 1 } }, '20': { start: { line: 37, column: 2 }, end: { line: 37, column: 65 } }, '21': { start: { line: 40, column: 20 }, end: { line: 254, column: 3 } }, '22': { start: { line: 42, column: 4 }, end: { line: 42, column: 53 } }, '23': { start: { line: 45, column: 2 }, end: { line: 252, column: 6 } }, '24': { start: { line: 48, column: 20 }, end: { line: 48, column: 22 } }, '25': { start: { line: 49, column: 6 }, end: { line: 49, column: 55 } }, '26': { start: { line: 51, column: 6 }, end: { line: 51, column: 35 } }, '27': { start: { line: 52, column: 6 }, end: { line: 52, column: 41 } }, '28': { start: { line: 53, column: 6 }, end: { line: 53, column: 36 } }, '29': { start: { line: 58, column: 6 }, end: { line: 58, column: 26 } }, '30': { start: { line: 59, column: 6 }, end: { line: 63, column: 8 } }, '31': { start: { line: 62, column: 8 }, end: { line: 62, column: 63 } }, '32': { start: { line: 68, column: 6 }, end: { line: 68, column: 64 } }, '33': { start: { line: 73, column: 6 }, end: { line: 73, column: 28 } }, '34': { start: { line: 78, column: 19 }, end: { line: 78, column: 30 } }, '35': { start: { line: 80, column: 6 }, end: { line: 82, column: 7 } }, '36': { start: { line: 81, column: 8 }, end: { line: 81, column: 31 } }, '37': { start: { line: 87, column: 30 }, end: { line: 87, column: 48 } }, '38': { start: { line: 88, column: 22 }, end: { line: 88, column: 64 } }, '39': { start: { line: 90, column: 6 }, end: { line: 92, column: 7 } }, '40': { start: { line: 91, column: 8 }, end: { line: 91, column: 25 } }, '41': { start: { line: 94, column: 17 }, end: { line: 94, column: 52 } }, '42': { start: { line: 95, column: 21 }, end: { line: 95, column: 81 } }, '43': { start: { line: 97, column: 6 }, end: { line: 101, column: 7 } }, '44': { start: { line: 98, column: 8 }, end: { line: 98, column: 70 } }, '45': { start: { line: 100, column: 8 }, end: { line: 100, column: 48 } }, '46': { start: { line: 103, column: 27 }, end: { line: 103, column: 33 } }, '47': { start: { line: 104, column: 6 }, end: { line: 112, column: 7 } }, '48': { start: { line: 105, column: 8 }, end: { line: 105, column: 94 } }, '49': { start: { line: 106, column: 8 }, end: { line: 106, column: 86 } }, '50': { start: { line: 108, column: 8 }, end: { line: 108, column: 99 } }, '51': { start: { line: 109, column: 8 }, end: { line: 111, column: 9 } }, '52': { start: { line: 110, column: 10 }, end: { line: 110, column: 35 } }, '53': { start: { line: 114, column: 6 }, end: { line: 118, column: 7 } }, '54': { start: { line: 115, column: 8 }, end: { line: 115, column: 68 } }, '55': { start: { line: 117, column: 8 }, end: { line: 117, column: 46 } }, '56': { start: { line: 123, column: 17 }, end: { line: 123, column: 21 } }, '57': { start: { line: 124, column: 6 }, end: { line: 126, column: 9 } }, '58': { start: { line: 125, column: 8 }, end: { line: 125, column: 109 } }, '59': { start: { line: 131, column: 17 }, end: { line: 131, column: 37 } }, '60': { start: { line: 132, column: 22 }, end: { line: 132, column: 38 } }, '61': { start: { line: 133, column: 29 }, end: { line: 133, column: 31 } }, '62': { start: { line: 134, column: 17 }, end: { line: 134, column: 23 } }, '63': { start: { line: 135, column: 6 }, end: { line: 152, column: 7 } }, '64': { start: { line: 136, column: 8 }, end: { line: 151, column: 9 } }, '65': { start: { line: 137, column: 10 }, end: { line: 150, column: 11 } }, '66': { start: { line: 138, column: 12 }, end: { line: 142, column: 13 } }, '67': { start: { line: 139, column: 14 }, end: { line: 141, column: 17 } }, '68': { start: { line: 140, column: 16 }, end: { line: 140, column: 37 } }, '69': { start: { line: 143, column: 12 }, end: { line: 149, column: 13 } }, '70': { start: { line: 148, column: 14 }, end: { line: 148, column: 30 } }, '71': { start: { line: 154, column: 6 }, end: { line: 169, column: 7 } }, '72': { start: { line: 155, column: 8 }, end: { line: 168, column: 9 } }, '73': { start: { line: 156, column: 22 }, end: { line: 156, column: 33 } }, '74': { start: { line: 157, column: 10 }, end: { line: 167, column: 11 } }, '75': { start: { line: 158, column: 12 }, end: { line: 161, column: 14 } }, '76': { start: { line: 162, column: 12 }, end: { line: 166, column: 13 } }, '77': { start: { line: 163, column: 14 }, end: { line: 165, column: 15 } }, '78': { start: { line: 164, column: 16 }, end: { line: 164, column: 47 } }, '79': { start: { line: 170, column: 6 }, end: { line: 172, column: 7 } }, '80': { start: { line: 171, column: 8 }, end: { line: 171, column: 36 } }, '81': { start: { line: 176, column: 6 }, end: { line: 184, column: 7 } }, '82': { start: { line: 177, column: 18 }, end: { line: 177, column: 29 } }, '83': { start: { line: 178, column: 8 }, end: { line: 180, column: 9 } }, '84': { start: { line: 179, column: 10 }, end: { line: 179, column: 19 } }, '85': { start: { line: 181, column: 22 }, end: { line: 181, column: 105 } }, '86': { start: { line: 182, column: 21 }, end: { line: 182, column: 41 } }, '87': { start: { line: 183, column: 8 }, end: { line: 183, column: 60 } }, '88': { start: { line: 189, column: 6 }, end: { line: 194, column: 7 } }, '89': { start: { line: 190, column: 8 }, end: { line: 192, column: 9 } }, '90': { start: { line: 191, column: 10 }, end: { line: 191, column: 35 } }, '91': { start: { line: 193, column: 8 }, end: { line: 193, column: 27 } }, '92': { start: { line: 195, column: 6 }, end: { line: 213, column: 7 } }, '93': { start: { line: 196, column: 8 }, end: { line: 198, column: 9 } }, '94': { start: { line: 197, column: 10 }, end: { line: 197, column: 25 } }, '95': { start: { line: 199, column: 8 }, end: { line: 201, column: 9 } }, '96': { start: { line: 200, column: 10 }, end: { line: 200, column: 28 } }, '97': { start: { line: 202, column: 8 }, end: { line: 204, column: 9 } }, '98': { start: { line: 203, column: 10 }, end: { line: 203, column: 27 } }, '99': { start: { line: 205, column: 8 }, end: { line: 207, column: 9 } }, '100': { start: { line: 206, column: 10 }, end: { line: 206, column: 28 } }, '101': { start: { line: 208, column: 8 }, end: { line: 210, column: 9 } }, '102': { start: { line: 209, column: 10 }, end: { line: 209, column: 25 } }, '103': { start: { line: 211, column: 13 }, end: { line: 213, column: 7 } }, '104': { start: { line: 212, column: 8 }, end: { line: 212, column: 22 } }, '105': { start: { line: 214, column: 6 }, end: { line: 214, column: 23 } }, '106': { start: { line: 219, column: 19 }, end: { line: 219, column: 21 } }, '107': { start: { line: 220, column: 18 }, end: { line: 220, column: 38 } }, '108': { start: { line: 221, column: 6 }, end: { line: 249, column: 7 } }, '109': { start: { line: 222, column: 19 }, end: { line: 222, column: 27 } }, '110': { start: { line: 223, column: 25 }, end: { line: 225, column: 9 } }, '111': { start: { line: 226, column: 23 }, end: { line: 226, column: 70 } }, '112': { start: { line: 227, column: 8 }, end: { line: 230, column: 10 } }, '113': { start: { line: 231, column: 21 }, end: { line: 231, column: 46 } }, '114': { start: { line: 232, column: 8 }, end: { line: 247, column: 9 } }, '115': { start: { line: 233, column: 22 }, end: { line: 233, column: 40 } }, '116': { start: { line: 234, column: 10 }, end: { line: 236, column: 11 } }, '117': { start: { line: 235, column: 12 }, end: { line: 235, column: 21 } }, '118': { start: { line: 237, column: 28 }, end: { line: 239, column: 11 } }, '119': { start: { line: 240, column: 10 }, end: { line: 244, column: 11 } }, '120': { start: { line: 241, column: 12 }, end: { line: 241, column: 39 } }, '121': { start: { line: 242, column: 17 }, end: { line: 244, column: 11 } }, '122': { start: { line: 243, column: 12 }, end: { line: 243, column: 41 } }, '123': { start: { line: 245, column: 10 }, end: { line: 245, column: 44 } }, '124': { start: { line: 246, column: 10 }, end: { line: 246, column: 46 } }, '125': { start: { line: 248, column: 8 }, end: { line: 248, column: 32 } }, '126': { start: { line: 250, column: 6 }, end: { line: 250, column: 20 } }, '127': { start: { line: 253, column: 2 }, end: { line: 253, column: 23 } } }, fnMap: { '0': { name: '(anonymous_0)', decl: { start: { line: 1, column: 68 }, end: { line: 1, column: 69 } }, loc: { start: { line: 1, column: 81 }, end: { line: 3, column: 1 } }, line: 1 }, '1': { name: '(anonymous_1)', decl: { start: { line: 5, column: 56 }, end: { line: 5, column: 57 } }, loc: { start: { line: 5, column: 71 }, end: { line: 7, column: 1 } }, line: 5 }, '2': { name: '(anonymous_2)', decl: { start: { line: 7, column: 4 }, end: { line: 7, column: 5 } }, loc: { start: { line: 7, column: 19 }, end: { line: 15, column: 1 } }, line: 7 }, '3': { name: 'trimUnderscore', decl: { start: { line: 17, column: 30 }, end: { line: 17, column: 44 } }, loc: { start: { line: 17, column: 50 }, end: { line: 22, column: 1 } }, line: 17 }, '4': { name: 'arrayKeyToSortNumber', decl: { start: { line: 24, column: 36 }, end: { line: 24, column: 56 } }, loc: { start: { line: 24, column: 62 }, end: { line: 34, column: 1 } }, line: 24 }, '5': { name: 'arrayKeyComparer', decl: { start: { line: 36, column: 32 }, end: { line: 36, column: 48 } }, loc: { start: { line: 36, column: 61 }, end: { line: 38, column: 1 } }, line: 36 }, '6': { name: '(anonymous_6)', decl: { start: { line: 40, column: 20 }, end: { line: 40, column: 21 } }, loc: { start: { line: 40, column: 32 }, end: { line: 254, column: 1 } }, line: 40 }, '7': { name: 'BaseFormatter', decl: { start: { line: 41, column: 11 }, end: { line: 41, column: 24 } }, loc: { start: { line: 41, column: 27 }, end: { line: 43, column: 3 } }, line: 41 }, '8': { name: 'format', decl: { start: { line: 47, column: 20 }, end: { line: 47, column: 26 } }, loc: { start: { line: 47, column: 62 }, end: { line: 54, column: 5 } }, line: 47 }, '9': { name: 'prepareContext', decl: { start: { line: 57, column: 20 }, end: { line: 57, column: 34 } }, loc: { start: { line: 57, column: 44 }, end: { line: 64, column: 5 } }, line: 57 }, '10': { name: '(anonymous_10)', decl: { start: { line: 59, column: 20 }, end: { line: 59, column: 21 } }, loc: { start: { line: 59, column: 32 }, end: { line: 63, column: 7 } }, line: 59 }, '11': { name: 'typeFormattterNotFound', decl: { start: { line: 67, column: 20 }, end: { line: 67, column: 42 } }, loc: { start: { line: 67, column: 63 }, end: { line: 69, column: 5 } }, line: 67 }, '12': { name: 'typeFormattterErrorFormatter', decl: { start: { line: 72, column: 20 }, end: { line: 72, column: 48 } }, loc: { start: { line: 72, column: 63 }, end: { line: 74, column: 5 } }, line: 72 }, '13': { name: 'finalize', decl: { start: { line: 77, column: 20 }, end: { line: 77, column: 28 } }, loc: { start: { line: 77, column: 35 }, end: { line: 83, column: 5 } }, line: 77 }, '14': { name: 'recurse', decl: { start: { line: 86, column: 20 }, end: { line: 86, column: 27 } }, loc: { start: { line: 86, column: 83 }, end: { line: 119, column: 5 } }, line: 86 }, '15': { name: 'formatDeltaChildren', decl: { start: { line: 122, column: 20 }, end: { line: 122, column: 39 } }, loc: { start: { line: 122, column: 62 }, end: { line: 127, column: 5 } }, line: 122 }, '16': { name: '(anonymous_16)', decl: { start: { line: 124, column: 40 }, end: { line: 124, column: 41 } }, loc: { start: { line: 124, column: 83 }, end: { line: 126, column: 7 } }, line: 124 }, '17': { name: 'forEachDeltaKey', decl: { start: { line: 130, column: 20 }, end: { line: 130, column: 35 } }, loc: { start: { line: 130, column: 53 }, end: { line: 185, column: 5 } }, line: 130 }, '18': { name: '(anonymous_18)', decl: { start: { line: 139, column: 33 }, end: { line: 139, column: 34 } }, loc: { start: { line: 139, column: 49 }, end: { line: 141, column: 15 } }, line: 139 }, '19': { name: 'getDeltaType', decl: { start: { line: 188, column: 20 }, end: { line: 188, column: 32 } }, loc: { start: { line: 188, column: 51 }, end: { line: 215, column: 5 } }, line: 188 }, '20': { name: 'parseTextDiff', decl: { start: { line: 218, column: 20 }, end: { line: 218, column: 33 } }, loc: { start: { line: 218, column: 41 }, end: { line: 251, column: 5 } }, line: 218 } }, branchMap: { '0': { loc: { start: { line: 1, column: 14 }, end: { line: 3, column: 1 } }, type: 'cond-expr', locations: [{ start: { line: 1, column: 52 }, end: { line: 1, column: 65 } }, { start: { line: 1, column: 68 }, end: { line: 3, column: 1 } }], line: 1 }, '1': { loc: { start: { line: 5, column: 20 }, end: { line: 15, column: 1 } }, type: 'cond-expr', locations: [{ start: { line: 5, column: 56 }, end: { line: 7, column: 1 } }, { start: { line: 7, column: 4 }, end: { line: 15, column: 1 } }], line: 5 }, '2': { loc: { start: { line: 10, column: 4 }, end: { line: 12, column: 5 } }, type: 'if', locations: [{ start: { line: 10, column: 4 }, end: { line: 12, column: 5 } }, { start: { line: 10, column: 4 }, end: { line: 12, column: 5 } }], line: 10 }, '3': { loc: { start: { line: 18, column: 2 }, end: { line: 20, column: 3 } }, type: 'if', locations: [{ start: { line: 18, column: 2 }, end: { line: 20, column: 3 } }, { start: { line: 18, column: 2 }, end: { line: 20, column: 3 } }], line: 18 }, '4': { loc: { start: { line: 25, column: 2 }, end: { line: 33, column: 3 } }, type: 'if', locations: [{ start: { line: 25, column: 2 }, end: { line: 33, column: 3 } }, { start: { line: 25, column: 2 }, end: { line: 33, column: 3 } }], line: 25 }, '5': { loc: { start: { line: 28, column: 4 }, end: { line: 32, column: 5 } }, type: 'if', locations: [{ start: { line: 28, column: 4 }, end: { line: 32, column: 5 } }, { start: { line: 28, column: 4 }, end: { line: 32, column: 5 } }], line: 28 }, '6': { loc: { start: { line: 80, column: 6 }, end: { line: 82, column: 7 } }, type: 'if', locations: [{ start: { line: 80, column: 6 }, end: { line: 82, column: 7 } }, { start: { line: 80, column: 6 }, end: { line: 82, column: 7 } }], line: 80 }, '7': { loc: { start: { line: 87, column: 30 }, end: { line: 87, column: 48 } }, type: 'binary-expr', locations: [{ start: { line: 87, column: 30 }, end: { line: 87, column: 35 } }, { start: { line: 87, column: 39 }, end: { line: 87, column: 48 } }], line: 87 }, '8': { loc: { start: { line: 88, column: 22 }, end: { line: 88, column: 64 } }, type: 'cond-expr', locations: [{ start: { line: 88, column: 42 }, end: { line: 88, column: 57 } }, { start: { line: 88, column: 60 }, end: { line: 88, column: 64 } }], line: 88 }, '9': { loc: { start: { line: 90, column: 6 }, end: { line: 92, column: 7 } }, type: 'if', locations: [{ start: { line: 90, column: 6 }, end: { line: 92, column: 7 } }, { start: { line: 90, column: 6 }, end: { line: 92, column: 7 } }], line: 90 }, '10': { loc: { start: { line: 90, column: 10 }, end: { line: 90, column: 68 } }, type: 'binary-expr', locations: [{ start: { line: 90, column: 10 }, end: { line: 90, column: 38 } }, { start: { line: 90, column: 42 }, end: { line: 90, column: 68 } }], line: 90 }, '11': { loc: { start: { line: 95, column: 21 }, end: { line: 95, column: 81 } }, type: 'cond-expr', locations: [{ start: { line: 95, column: 39 }, end: { line: 95, column: 76 } }, { start: { line: 95, column: 79 }, end: { line: 95, column: 81 } }], line: 95 }, '12': { loc: { start: { line: 95, column: 39 }, end: { line: 95, column: 76 } }, type: 'cond-expr', locations: [{ start: { line: 95, column: 58 }, end: { line: 95, column: 65 } }, { start: { line: 95, column: 68 }, end: { line: 95, column: 76 } }], line: 95 }, '13': { loc: { start: { line: 97, column: 6 }, end: { line: 101, column: 7 } }, type: 'if', locations: [{ start: { line: 97, column: 6 }, end: { line: 101, column: 7 } }, { start: { line: 97, column: 6 }, end: { line: 101, column: 7 } }], line: 97 }, '14': { loc: { start: { line: 105, column: 25 }, end: { line: 105, column: 93 } }, type: 'binary-expr', locations: [{ start: { line: 105, column: 25 }, end: { line: 105, column: 47 } }, { start: { line: 105, column: 51 }, end: { line: 105, column: 93 } }], line: 105 }, '15': { loc: { start: { line: 109, column: 8 }, end: { line: 111, column: 9 } }, type: 'if', locations: [{ start: { line: 109, column: 8 }, end: { line: 111, column: 9 } }, { start: { line: 109, column: 8 }, end: { line: 111, column: 9 } }], line: 109 }, '16': { loc: { start: { line: 109, column: 12 }, end: { line: 109, column: 59 } }, type: 'binary-expr', locations: [{ start: { line: 109, column: 12 }, end: { line: 109, column: 42 } }, { start: { line: 109, column: 46 }, end: { line: 109, column: 59 } }], line: 109 }, '17': { loc: { start: { line: 114, column: 6 }, end: { line: 118, column: 7 } }, type: 'if', locations: [{ start: { line: 114, column: 6 }, end: { line: 118, column: 7 } }, { start: { line: 114, column: 6 }, end: { line: 118, column: 7 } }], line: 114 }, '18': { loc: { start: { line: 125, column: 42 }, end: { line: 125, column: 74 } }, type: 'cond-expr', locations: [{ start: { line: 125, column: 49 }, end: { line: 125, column: 62 } }, { start: { line: 125, column: 65 }, end: { line: 125, column: 74 } }], line: 125 }, '19': { loc: { start: { line: 135, column: 6 }, end: { line: 152, column: 7 } }, type: 'if', locations: [{ start: { line: 135, column: 6 }, end: { line: 152, column: 7 } }, { start: { line: 135, column: 6 }, end: { line: 152, column: 7 } }], line: 135 }, '20': { loc: { start: { line: 137, column: 10 }, end: { line: 150, column: 11 } }, type: 'if', locations: [{ start: { line: 137, column: 10 }, end: { line: 150, column: 11 } }, { start: { line: 137, column: 10 }, end: { line: 150, column: 11 } }], line: 137 }, '21': { loc: { start: { line: 138, column: 12 }, end: { line: 142, column: 13 } }, type: 'if', locations: [{ start: { line: 138, column: 12 }, end: { line: 142, column: 13 } }, { start: { line: 138, column: 12 }, end: { line: 142, column: 13 } }], line: 138 }, '22': { loc: { start: { line: 143, column: 12 }, end: { line: 149, column: 13 } }, type: 'if', locations: [{ start: { line: 143, column: 12 }, end: { line: 149, column: 13 } }, { start: { line: 143, column: 12 }, end: { line: 149, column: 13 } }], line: 143 }, '23': { loc: { start: { line: 143, column: 16 }, end: { line: 143, column: 70 } }, type: 'binary-expr', locations: [{ start: { line: 143, column: 16 }, end: { line: 143, column: 26 } }, { start: { line: 143, column: 30 }, end: { line: 143, column: 70 } }], line: 143 }, '24': { loc: { start: { line: 155, column: 8 }, end: { line: 168, column: 9 } }, type: 'if', locations: [{ start: { line: 155, column: 8 }, end: { line: 168, column: 9 } }, { start: { line: 155, column: 8 }, end: { line: 168, column: 9 } }], line: 155 }, '25': { loc: { start: { line: 157, column: 10 }, end: { line: 167, column: 11 } }, type: 'if', locations: [{ start: { line: 157, column: 10 }, end: { line: 167, column: 11 } }, { start: { line: 157, column: 10 }, end: { line: 167, column: 11 } }], line: 157 }, '26': { loc: { start: { line: 157, column: 14 }, end: { line: 157, column: 46 } }, type: 'binary-expr', locations: [{ start: { line: 157, column: 14 }, end: { line: 157, column: 28 } }, { start: { line: 157, column: 32 }, end: { line: 157, column: 46 } }], line: 157 }, '27': { loc: { start: { line: 160, column: 21 }, end: { line: 160, column: 59 } }, type: 'binary-expr', locations: [{ start: { line: 160, column: 21 }, end: { line: 160, column: 25 } }, { start: { line: 160, column: 29 }, end: { line: 160, column: 59 } }], line: 160 }, '28': { loc: { start: { line: 162, column: 12 }, end: { line: 166, column: 13 } }, type: 'if', locations: [{ start: { line: 162, column: 12 }, end: { line: 166, column: 13 } }, { start: { line: 162, column: 12 }, end: { line: 166, column: 13 } }], line: 162 }, '29': { loc: { start: { line: 163, column: 14 }, end: { line: 165, column: 15 } }, type: 'if', locations: [{ start: { line: 163, column: 14 }, end: { line: 165, column: 15 } }, { start: { line: 163, column: 14 }, end: { line: 165, column: 15 } }], line: 163 }, '30': { loc: { start: { line: 163, column: 18 }, end: { line: 163, column: 87 } }, type: 'binary-expr', locations: [{ start: { line: 163, column: 18 }, end: { line: 163, column: 45 } }, { start: { line: 163, column: 49 }, end: { line: 163, column: 87 } }], line: 163 }, '31': { loc: { start: { line: 170, column: 6 }, end: { line: 172, column: 7 } }, type: 'if', locations: [{ start: { line: 170, column: 6 }, end: { line: 172, column: 7 } }, { start: { line: 170, column: 6 }, end: { line: 172, column: 7 } }], line: 170 }, '32': { loc: { start: { line: 178, column: 8 }, end: { line: 180, column: 9 } }, type: 'if', locations: [{ start: { line: 178, column: 8 }, end: { line: 180, column: 9 } }, { start: { line: 178, column: 8 }, end: { line: 180, column: 9 } }], line: 178 }, '33': { loc: { start: { line: 178, column: 12 }, end: { line: 178, column: 37 } }, type: 'binary-expr', locations: [{ start: { line: 178, column: 12 }, end: { line: 178, column: 21 } }, { start: { line: 178, column: 25 }, end: { line: 178, column: 37 } }], line: 178 }, '34': { loc: { start: { line: 181, column: 22 }, end: { line: 181, column: 105 } }, type: 'cond-expr', locations: [{ start: { line: 181, column: 34 }, end: { line: 181, column: 99 } }, { start: { line: 181, column: 102 }, end: { line: 181, column: 105 } }], line: 181 }, '35': { loc: { start: { line: 181, column: 34 }, end: { line: 181, column: 99 } }, type: 'cond-expr', locations: [{ start: { line: 181, column: 60 }, end: { line: 181, column: 63 } }, { start: { line: 181, column: 66 }, end: { line: 181, column: 99 } }], line: 181 }, '36': { loc: { start: { line: 189, column: 6 }, end: { line: 194, column: 7 } }, type: 'if', locations: [{ start: { line: 189, column: 6 }, end: { line: 194, column: 7 } }, { start: { line: 189, column: 6 }, end: { line: 194, column: 7 } }], line: 189 }, '37': { loc: { start: { line: 190, column: 8 }, end: { line: 192, column: 9 } }, type: 'if', locations: [{ start: { line: 190, column: 8 }, end: { line: 192, column: 9 } }, { start: { line: 190, column: 8 }, end: { line: 192, column: 9 } }], line: 190 }, '38': { loc: { start: { line: 195, column: 6 }, end: { line: 213, column: 7 } }, type: 'if', locations: [{ start: { line: 195, column: 6 }, end: { line: 213, column: 7 } }, { start: { line: 195, column: 6 }, end: { line: 213, column: 7 } }], line: 195 }, '39': { loc: { start: { line: 196, column: 8 }, end: { line: 198, column: 9 } }, type: 'if', locations: [{ start: { line: 196, column: 8 }, end: { line: 198, column: 9 } }, { start: { line: 196, column: 8 }, end: { line: 198, column: 9 } }], line: 196 }, '40': { loc: { start: { line: 199, column: 8 }, end: { line: 201, column: 9 } }, type: 'if', locations: [{ start: { line: 199, column: 8 }, end: { line: 201, column: 9 } }, { start: { line: 199, column: 8 }, end: { line: 201, column: 9 } }], line: 199 }, '41': { loc: { start: { line: 202, column: 8 }, end: { line: 204, column: 9 } }, type: 'if', locations: [{ start: { line: 202, column: 8 }, end: { line: 204, column: 9 } }, { start: { line: 202, column: 8 }, end: { line: 204, column: 9 } }], line: 202 }, '42': { loc: { start: { line: 202, column: 12 }, end: { line: 202, column: 48 } }, type: 'binary-expr', locations: [{ start: { line: 202, column: 12 }, end: { line: 202, column: 30 } }, { start: { line: 202, column: 34 }, end: { line: 202, column: 48 } }], line: 202 }, '43': { loc: { start: { line: 205, column: 8 }, end: { line: 207, column: 9 } }, type: 'if', locations: [{ start: { line: 205, column: 8 }, end: { line: 207, column: 9 } }, { start: { line: 205, column: 8 }, end: { line: 207, column: 9 } }], line: 205 }, '44': { loc: { start: { line: 205, column: 12 }, end: { line: 205, column: 48 } }, type: 'binary-expr', locations: [{ start: { line: 205, column: 12 }, end: { line: 205, column: 30 } }, { start: { line: 205, column: 34 }, end: { line: 205, column: 48 } }], line: 205 }, '45': { loc: { start: { line: 208, column: 8 }, end: { line: 210, column: 9 } }, type: 'if', locations: [{ start: { line: 208, column: 8 }, end: { line: 210, column: 9 } }, { start: { line: 208, column: 8 }, end: { line: 210, column: 9 } }], line: 208 }, '46': { loc: { start: { line: 208, column: 12 }, end: { line: 208, column: 48 } }, type: 'binary-expr', locations: [{ start: { line: 208, column: 12 }, end: { line: 208, column: 30 } }, { start: { line: 208, column: 34 }, end: { line: 208, column: 48 } }], line: 208 }, '47': { loc: { start: { line: 211, column: 13 }, end: { line: 213, column: 7 } }, type: 'if', locations: [{ start: { line: 211, column: 13 }, end: { line: 213, column: 7 } }, { start: { line: 211, column: 13 }, end: { line: 213, column: 7 } }], line: 211 }, '48': { loc: { start: { line: 211, column: 18 }, end: { line: 211, column: 89 } }, type: 'cond-expr', locations: [{ start: { line: 211, column: 49 }, end: { line: 211, column: 60 } }, { start: { line: 211, column: 63 }, end: { line: 211, column: 89 } }], line: 211 }, '49': { loc: { start: { line: 234, column: 10 }, end: { line: 236, column: 11 } }, type: 'if', locations: [{ start: { line: 234, column: 10 }, end: { line: 236, column: 11 } }, { start: { line: 234, column: 10 }, end: { line: 236, column: 11 } }], line: 234 }, '50': { loc: { start: { line: 240, column: 10 }, end: { line: 244, column: 11 } }, type: 'if', locations: [{ start: { line: 240, column: 10 }, end: { line: 244, column: 11 } }, { start: { line: 240, column: 10 }, end: { line: 244, column: 11 } }], line: 240 }, '51': { loc: { start: { line: 242, column: 17 }, end: { line: 244, column: 11 } }, type: 'if', locations: [{ start: { line: 242, column: 17 }, end: { line: 244, column: 11 } }, { start: { line: 242, column: 17 }, end: { line: 244, column: 11 } }], line: 242 } }, s: { '0': 0, '1': 0, '2': 0, '3': 0, '4': 0, '5': 0, '6': 0, '7': 0, '8': 0, '9': 0, '10': 0, '11': 0, '12': 0, '13': 0, '14': 0, '15': 0, '16': 0, '17': 0, '18': 0, '19': 0, '20': 0, '21': 0, '22': 0, '23': 0, '24': 0, '25': 0, '26': 0, '27': 0, '28': 0, '29': 0, '30': 0, '31': 0, '32': 0, '33': 0, '34': 0, '35': 0, '36': 0, '37': 0, '38': 0, '39': 0, '40': 0, '41': 0, '42': 0, '43': 0, '44': 0, '45': 0, '46': 0, '47': 0, '48': 0, '49': 0, '50': 0, '51': 0, '52': 0, '53': 0, '54': 0, '55': 0, '56': 0, '57': 0, '58': 0, '59': 0, '60': 0, '61': 0, '62': 0, '63': 0, '64': 0, '65': 0, '66': 0, '67': 0, '68': 0, '69': 0, '70': 0, '71': 0, '72': 0, '73': 0, '74': 0, '75': 0, '76': 0, '77': 0, '78': 0, '79': 0, '80': 0, '81': 0, '82': 0, '83': 0, '84': 0, '85': 0, '86': 0, '87': 0, '88': 0, '89': 0, '90': 0, '91': 0, '92': 0, '93': 0, '94': 0, '95': 0, '96': 0, '97': 0, '98': 0, '99': 0, '100': 0, '101': 0, '102': 0, '103': 0, '104': 0, '105': 0, '106': 0, '107': 0, '108': 0, '109': 0, '110': 0, '111': 0, '112': 0, '113': 0, '114': 0, '115': 0, '116': 0, '117': 0, '118': 0, '119': 0, '120': 0, '121': 0, '122': 0, '123': 0, '124': 0, '125': 0, '126': 0, '127': 0 }, f: { '0': 0, '1': 0, '2': 0, '3': 0, '4': 0, '5': 0, '6': 0, '7': 0, '8': 0, '9': 0, '10': 0, '11': 0, '12': 0, '13': 0, '14': 0, '15': 0, '16': 0, '17': 0, '18': 0, '19': 0, '20': 0 }, b: { '0': [0, 0], '1': [0, 0], '2': [0, 0], '3': [0, 0], '4': [0, 0], '5': [0, 0], '6': [0, 0], '7': [0, 0], '8': [0, 0], '9': [0, 0], '10': [0, 0], '11': [0, 0], '12': [0, 0], '13': [0, 0], '14': [0, 0], '15': [0, 0], '16': [0, 0], '17': [0, 0], '18': [0, 0], '19': [0, 0], '20': [0, 0], '21': [0, 0], '22': [0, 0], '23': [0, 0], '24': [0, 0], '25': [0, 0], '26': [0, 0], '27': [0, 0], '28': [0, 0], '29': [0, 0], '30': [0, 0], '31': [0, 0], '32': [0, 0], '33': [0, 0], '34': [0, 0], '35': [0, 0], '36': [0, 0], '37': [0, 0], '38': [0, 0], '39': [0, 0], '40': [0, 0], '41': [0, 0], '42': [0, 0], '43': [0, 0], '44': [0, 0], '45': [0, 0], '46': [0, 0], '47': [0, 0], '48': [0, 0], '49': [0, 0], '50': [0, 0], '51': [0, 0] }, _coverageSchema: '332fd63041d2c1bcb487cc26dd0d5f7d97098a6c' },
      coverage = global[gcv] || (global[gcv] = {});if (coverage[path] && coverage[path].hash === hash) {
    return coverage[path];
  }coverageData.hash = hash;return coverage[path] = coverageData;
}();var isArray$3 = (cov_2bjq00ughy.s[0]++, typeof Array.isArray === 'function' ? (cov_2bjq00ughy.b[0][0]++, Array.isArray) : (cov_2bjq00ughy.b[0][1]++, function (a) {
  cov_2bjq00ughy.f[0]++;cov_2bjq00ughy.s[1]++;return a instanceof Array;
}));var getObjectKeys = (cov_2bjq00ughy.s[2]++, typeof Object.keys === 'function' ? (cov_2bjq00ughy.b[1][0]++, function (obj) {
  cov_2bjq00ughy.f[1]++;cov_2bjq00ughy.s[3]++;return Object.keys(obj);
}) : (cov_2bjq00ughy.b[1][1]++, function (obj) {
  cov_2bjq00ughy.f[2]++;var names = (cov_2bjq00ughy.s[4]++, []);cov_2bjq00ughy.s[5]++;for (var property in obj) {
    cov_2bjq00ughy.s[6]++;if (Object.prototype.hasOwnProperty.call(obj, property)) {
      cov_2bjq00ughy.b[2][0]++;cov_2bjq00ughy.s[7]++;names.push(property);
    } else {
      cov_2bjq00ughy.b[2][1]++;
    }
  }cov_2bjq00ughy.s[8]++;return names;
}));cov_2bjq00ughy.s[9]++;var trimUnderscore = function trimUnderscore(str) {
  cov_2bjq00ughy.f[3]++;cov_2bjq00ughy.s[10]++;if (str.substr(0, 1) === '_') {
    cov_2bjq00ughy.b[3][0]++;cov_2bjq00ughy.s[11]++;return str.slice(1);
  } else {
    cov_2bjq00ughy.b[3][1]++;
  }cov_2bjq00ughy.s[12]++;return str;
};cov_2bjq00ughy.s[13]++;var arrayKeyToSortNumber = function arrayKeyToSortNumber(key) {
  cov_2bjq00ughy.f[4]++;cov_2bjq00ughy.s[14]++;if (key === '_t') {
    cov_2bjq00ughy.b[4][0]++;cov_2bjq00ughy.s[15]++;return -1;
  } else {
    cov_2bjq00ughy.b[4][1]++;cov_2bjq00ughy.s[16]++;if (key.substr(0, 1) === '_') {
      cov_2bjq00ughy.b[5][0]++;cov_2bjq00ughy.s[17]++;return parseInt(key.slice(1), 10);
    } else {
      cov_2bjq00ughy.b[5][1]++;cov_2bjq00ughy.s[18]++;return parseInt(key, 10) + 0.1;
    }
  }
};cov_2bjq00ughy.s[19]++;var arrayKeyComparer = function arrayKeyComparer(key1, key2) {
  cov_2bjq00ughy.f[5]++;cov_2bjq00ughy.s[20]++;return arrayKeyToSortNumber(key1) - arrayKeyToSortNumber(key2);
};var BaseFormatter = (cov_2bjq00ughy.s[21]++, function () {
  cov_2bjq00ughy.f[6]++;function BaseFormatter() {
    cov_2bjq00ughy.f[7]++;cov_2bjq00ughy.s[22]++;classCallCheck$1(this, BaseFormatter);
  }cov_2bjq00ughy.s[23]++;createClass$1(BaseFormatter, [{ key: 'format', value: function format(delta, left, translationConfigMap) {
      cov_2bjq00ughy.f[8]++;var context = (cov_2bjq00ughy.s[24]++, {});cov_2bjq00ughy.s[25]++;this.translationConfigMap = translationConfigMap;cov_2bjq00ughy.s[26]++;this.prepareContext(context);cov_2bjq00ughy.s[27]++;this.recurse(context, delta, left);cov_2bjq00ughy.s[28]++;return this.finalize(context);
    } }, { key: 'prepareContext', value: function prepareContext(context) {
      cov_2bjq00ughy.f[9]++;cov_2bjq00ughy.s[29]++;context.buffer = [];cov_2bjq00ughy.s[30]++;context.out = function () {
        cov_2bjq00ughy.f[10]++;var _buffer;cov_2bjq00ughy.s[31]++;(_buffer = this.buffer).push.apply(_buffer, arguments);
      };
    } }, { key: 'typeFormattterNotFound', value: function typeFormattterNotFound(context, deltaType) {
      cov_2bjq00ughy.f[11]++;cov_2bjq00ughy.s[32]++;throw new Error('cannot format delta type: ' + deltaType);
    } }, { key: 'typeFormattterErrorFormatter', value: function typeFormattterErrorFormatter(context, err) {
      cov_2bjq00ughy.f[12]++;cov_2bjq00ughy.s[33]++;return err.toString();
    } }, { key: 'finalize', value: function finalize(_ref) {
      cov_2bjq00ughy.f[13]++;var buffer = (cov_2bjq00ughy.s[34]++, _ref.buffer);cov_2bjq00ughy.s[35]++;if (isArray$3(buffer)) {
        cov_2bjq00ughy.b[6][0]++;cov_2bjq00ughy.s[36]++;return buffer.join('');
      } else {
        cov_2bjq00ughy.b[6][1]++;
      }
    } }, { key: 'recurse', value: function recurse(context, delta, left, key, leftKey, movedFrom, isLast) {
      cov_2bjq00ughy.f[14]++;var useMoveOriginHere = (cov_2bjq00ughy.s[37]++, (cov_2bjq00ughy.b[7][0]++, delta) && (cov_2bjq00ughy.b[7][1]++, movedFrom));var leftValue = (cov_2bjq00ughy.s[38]++, useMoveOriginHere ? (cov_2bjq00ughy.b[8][0]++, movedFrom.value) : (cov_2bjq00ughy.b[8][1]++, left));cov_2bjq00ughy.s[39]++;if ((cov_2bjq00ughy.b[10][0]++, typeof delta === 'undefined') && (cov_2bjq00ughy.b[10][1]++, typeof key === 'undefined')) {
        cov_2bjq00ughy.b[9][0]++;cov_2bjq00ughy.s[40]++;return undefined;
      } else {
        cov_2bjq00ughy.b[9][1]++;
      }var type = (cov_2bjq00ughy.s[41]++, this.getDeltaType(delta, movedFrom));var nodeType = (cov_2bjq00ughy.s[42]++, type === 'node' ? (cov_2bjq00ughy.b[11][0]++, delta._t === 'a' ? (cov_2bjq00ughy.b[12][0]++, 'array') : (cov_2bjq00ughy.b[12][1]++, 'object')) : (cov_2bjq00ughy.b[11][1]++, ''));cov_2bjq00ughy.s[43]++;if (typeof key !== 'undefined') {
        cov_2bjq00ughy.b[13][0]++;cov_2bjq00ughy.s[44]++;this.nodeBegin(context, key, leftKey, type, nodeType, isLast);
      } else {
        cov_2bjq00ughy.b[13][1]++;cov_2bjq00ughy.s[45]++;this.rootBegin(context, type, nodeType);
      }var typeFormattter = (cov_2bjq00ughy.s[46]++, void 0);cov_2bjq00ughy.s[47]++;try {
        cov_2bjq00ughy.s[48]++;typeFormattter = (cov_2bjq00ughy.b[14][0]++, this['format_' + type]) || (cov_2bjq00ughy.b[14][1]++, this.typeFormattterNotFound(context, type));cov_2bjq00ughy.s[49]++;typeFormattter.call(this, context, delta, leftValue, key, leftKey, movedFrom);
      } catch (err) {
        cov_2bjq00ughy.s[50]++;this.typeFormattterErrorFormatter(context, err, delta, leftValue, key, leftKey, movedFrom);cov_2bjq00ughy.s[51]++;if ((cov_2bjq00ughy.b[16][0]++, typeof console !== 'undefined') && (cov_2bjq00ughy.b[16][1]++, console.error)) {
          cov_2bjq00ughy.b[15][0]++;cov_2bjq00ughy.s[52]++;console.error(err.stack);
        } else {
          cov_2bjq00ughy.b[15][1]++;
        }
      }cov_2bjq00ughy.s[53]++;if (typeof key !== 'undefined') {
        cov_2bjq00ughy.b[17][0]++;cov_2bjq00ughy.s[54]++;this.nodeEnd(context, key, leftKey, type, nodeType, isLast);
      } else {
        cov_2bjq00ughy.b[17][1]++;cov_2bjq00ughy.s[55]++;this.rootEnd(context, type, nodeType);
      }
    } }, { key: 'formatDeltaChildren', value: function formatDeltaChildren(context, delta, left) {
      cov_2bjq00ughy.f[15]++;var self = (cov_2bjq00ughy.s[56]++, this);cov_2bjq00ughy.s[57]++;this.forEachDeltaKey(delta, left, function (key, leftKey, movedFrom, isLast) {
        cov_2bjq00ughy.f[16]++;cov_2bjq00ughy.s[58]++;self.recurse(context, delta[key], left ? (cov_2bjq00ughy.b[18][0]++, left[leftKey]) : (cov_2bjq00ughy.b[18][1]++, undefined), key, leftKey, movedFrom, isLast);
      });
    } }, { key: 'forEachDeltaKey', value: function forEachDeltaKey(delta, left, fn) {
      cov_2bjq00ughy.f[17]++;var keys = (cov_2bjq00ughy.s[59]++, getObjectKeys(delta));var arrayKeys = (cov_2bjq00ughy.s[60]++, delta._t === 'a');var moveDestinations = (cov_2bjq00ughy.s[61]++, {});var name = (cov_2bjq00ughy.s[62]++, void 0);cov_2bjq00ughy.s[63]++;if (typeof left !== 'undefined') {
        cov_2bjq00ughy.b[19][0]++;cov_2bjq00ughy.s[64]++;for (name in left) {
          cov_2bjq00ughy.s[65]++;if (Object.prototype.hasOwnProperty.call(left, name)) {
            cov_2bjq00ughy.b[20][0]++;cov_2bjq00ughy.s[66]++;if (keys.includes(name)) {
              cov_2bjq00ughy.b[21][0]++;cov_2bjq00ughy.s[67]++;keys = keys.filter(function (item) {
                cov_2bjq00ughy.f[18]++;cov_2bjq00ughy.s[68]++;return item !== name;
              });
            } else {
              cov_2bjq00ughy.b[21][1]++;
            }cov_2bjq00ughy.s[69]++;if ((cov_2bjq00ughy.b[23][0]++, !arrayKeys) || (cov_2bjq00ughy.b[23][1]++, typeof delta['_' + name] === 'undefined')) {
              cov_2bjq00ughy.b[22][0]++;cov_2bjq00ughy.s[70]++;keys.push(name);
            } else {
              cov_2bjq00ughy.b[22][1]++;
            }
          } else {
            cov_2bjq00ughy.b[20][1]++;
          }
        }
      } else {
        cov_2bjq00ughy.b[19][1]++;
      }cov_2bjq00ughy.s[71]++;for (name in delta) {
        cov_2bjq00ughy.s[72]++;if (Object.prototype.hasOwnProperty.call(delta, name)) {
          cov_2bjq00ughy.b[24][0]++;var value = (cov_2bjq00ughy.s[73]++, delta[name]);cov_2bjq00ughy.s[74]++;if ((cov_2bjq00ughy.b[26][0]++, isArray$3(value)) && (cov_2bjq00ughy.b[26][1]++, value[2] === 3)) {
            cov_2bjq00ughy.b[25][0]++;cov_2bjq00ughy.s[75]++;moveDestinations[value[1].toString()] = { key: name, value: (cov_2bjq00ughy.b[27][0]++, left) && (cov_2bjq00ughy.b[27][1]++, left[parseInt(name.substr(1))]) };cov_2bjq00ughy.s[76]++;if (this.includeMoveDestinations !== false) {
              cov_2bjq00ughy.b[28][0]++;cov_2bjq00ughy.s[77]++;if ((cov_2bjq00ughy.b[30][0]++, typeof left === 'undefined') && (cov_2bjq00ughy.b[30][1]++, typeof delta[value[1]] === 'undefined')) {
                cov_2bjq00ughy.b[29][0]++;cov_2bjq00ughy.s[78]++;keys.push(value[1].toString());
              } else {
                cov_2bjq00ughy.b[29][1]++;
              }
            } else {
              cov_2bjq00ughy.b[28][1]++;
            }
          } else {
            cov_2bjq00ughy.b[25][1]++;
          }
        } else {
          cov_2bjq00ughy.b[24][1]++;
        }
      }cov_2bjq00ughy.s[79]++;if (arrayKeys) {
        cov_2bjq00ughy.b[31][0]++;cov_2bjq00ughy.s[80]++;keys.sort(arrayKeyComparer);
      } else {
        cov_2bjq00ughy.b[31][1]++;
      }cov_2bjq00ughy.s[81]++;for (var index = 0, length = keys.length; index < length; index++) {
        var key = (cov_2bjq00ughy.s[82]++, keys[index]);cov_2bjq00ughy.s[83]++;if ((cov_2bjq00ughy.b[33][0]++, arrayKeys) && (cov_2bjq00ughy.b[33][1]++, key === '_t')) {
          cov_2bjq00ughy.b[32][0]++;cov_2bjq00ughy.s[84]++;continue;
        } else {
          cov_2bjq00ughy.b[32][1]++;
        }var leftKey = (cov_2bjq00ughy.s[85]++, arrayKeys ? (cov_2bjq00ughy.b[34][0]++, typeof key === 'number' ? (cov_2bjq00ughy.b[35][0]++, key) : (cov_2bjq00ughy.b[35][1]++, parseInt(trimUnderscore(key), 10))) : (cov_2bjq00ughy.b[34][1]++, key));var isLast = (cov_2bjq00ughy.s[86]++, index === length - 1);cov_2bjq00ughy.s[87]++;fn(key, leftKey, moveDestinations[leftKey], isLast);
      }
    } }, { key: 'getDeltaType', value: function getDeltaType(delta, movedFrom) {
      cov_2bjq00ughy.f[19]++;cov_2bjq00ughy.s[88]++;if (typeof delta === 'undefined') {
        cov_2bjq00ughy.b[36][0]++;cov_2bjq00ughy.s[89]++;if (typeof movedFrom !== 'undefined') {
          cov_2bjq00ughy.b[37][0]++;cov_2bjq00ughy.s[90]++;return 'movedestination';
        } else {
          cov_2bjq00ughy.b[37][1]++;
        }cov_2bjq00ughy.s[91]++;return 'unchanged';
      } else {
        cov_2bjq00ughy.b[36][1]++;
      }cov_2bjq00ughy.s[92]++;if (isArray$3(delta)) {
        cov_2bjq00ughy.b[38][0]++;cov_2bjq00ughy.s[93]++;if (delta.length === 1) {
          cov_2bjq00ughy.b[39][0]++;cov_2bjq00ughy.s[94]++;return 'added';
        } else {
          cov_2bjq00ughy.b[39][1]++;
        }cov_2bjq00ughy.s[95]++;if (delta.length === 2) {
          cov_2bjq00ughy.b[40][0]++;cov_2bjq00ughy.s[96]++;return 'modified';
        } else {
          cov_2bjq00ughy.b[40][1]++;
        }cov_2bjq00ughy.s[97]++;if ((cov_2bjq00ughy.b[42][0]++, delta.length === 3) && (cov_2bjq00ughy.b[42][1]++, delta[2] === 0)) {
          cov_2bjq00ughy.b[41][0]++;cov_2bjq00ughy.s[98]++;return 'deleted';
        } else {
          cov_2bjq00ughy.b[41][1]++;
        }cov_2bjq00ughy.s[99]++;if ((cov_2bjq00ughy.b[44][0]++, delta.length === 3) && (cov_2bjq00ughy.b[44][1]++, delta[2] === 2)) {
          cov_2bjq00ughy.b[43][0]++;cov_2bjq00ughy.s[100]++;return 'textdiff';
        } else {
          cov_2bjq00ughy.b[43][1]++;
        }cov_2bjq00ughy.s[101]++;if ((cov_2bjq00ughy.b[46][0]++, delta.length === 3) && (cov_2bjq00ughy.b[46][1]++, delta[2] === 3)) {
          cov_2bjq00ughy.b[45][0]++;cov_2bjq00ughy.s[102]++;return 'moved';
        } else {
          cov_2bjq00ughy.b[45][1]++;
        }
      } else {
        cov_2bjq00ughy.b[38][1]++;cov_2bjq00ughy.s[103]++;if ((typeof delta === 'undefined' ? (cov_2bjq00ughy.b[48][0]++, 'undefined') : (cov_2bjq00ughy.b[48][1]++, _typeof$1(delta))) === 'object') {
          cov_2bjq00ughy.b[47][0]++;cov_2bjq00ughy.s[104]++;return 'node';
        } else {
          cov_2bjq00ughy.b[47][1]++;
        }
      }cov_2bjq00ughy.s[105]++;return 'unknown';
    } }, { key: 'parseTextDiff', value: function parseTextDiff(value) {
      cov_2bjq00ughy.f[20]++;var output = (cov_2bjq00ughy.s[106]++, []);var lines = (cov_2bjq00ughy.s[107]++, value.split('\n@@ '));cov_2bjq00ughy.s[108]++;for (var i = 0, l = lines.length; i < l; i++) {
        var line = (cov_2bjq00ughy.s[109]++, lines[i]);var lineOutput = (cov_2bjq00ughy.s[110]++, { pieces: [] });var location = (cov_2bjq00ughy.s[111]++, /^(?:@@ )?[-+]?(\d+),(\d+)/.exec(line).slice(1));cov_2bjq00ughy.s[112]++;lineOutput.location = { line: location[0], chr: location[1] };var pieces = (cov_2bjq00ughy.s[113]++, line.split('\n').slice(1));cov_2bjq00ughy.s[114]++;for (var pieceIndex = 0, piecesLength = pieces.length; pieceIndex < piecesLength; pieceIndex++) {
          var piece = (cov_2bjq00ughy.s[115]++, pieces[pieceIndex]);cov_2bjq00ughy.s[116]++;if (!piece.length) {
            cov_2bjq00ughy.b[49][0]++;cov_2bjq00ughy.s[117]++;continue;
          } else {
            cov_2bjq00ughy.b[49][1]++;
          }var pieceOutput = (cov_2bjq00ughy.s[118]++, { type: 'context' });cov_2bjq00ughy.s[119]++;if (piece.substr(0, 1) === '+') {
            cov_2bjq00ughy.b[50][0]++;cov_2bjq00ughy.s[120]++;pieceOutput.type = 'added';
          } else {
            cov_2bjq00ughy.b[50][1]++;cov_2bjq00ughy.s[121]++;if (piece.substr(0, 1) === '-') {
              cov_2bjq00ughy.b[51][0]++;cov_2bjq00ughy.s[122]++;pieceOutput.type = 'deleted';
            } else {
              cov_2bjq00ughy.b[51][1]++;
            }
          }cov_2bjq00ughy.s[123]++;pieceOutput.text = piece.slice(1);cov_2bjq00ughy.s[124]++;lineOutput.pieces.push(pieceOutput);
        }cov_2bjq00ughy.s[125]++;output.push(lineOutput);
      }cov_2bjq00ughy.s[126]++;return output;
    } }]);cov_2bjq00ughy.s[127]++;return BaseFormatter;
}());

var base = Object.freeze({
  default: BaseFormatter
});

var cov_rfwwt22uh = function () {
  var path = '/Users/wangjie/project/plugins/jsondiffpatch/src/formatters/html.js',
      hash = '6714447b514e23a435e6a5bc752ab9b470097f51',
      Function = function () {}.constructor,
      global = new Function('return this')(),
      gcv = '__coverage__',
      coverageData = { path: '/Users/wangjie/project/plugins/jsondiffpatch/src/formatters/html.js', statementMap: { '0': { start: { line: 3, column: 20 }, end: { line: 152, column: 16 } }, '1': { start: { line: 4, column: 2 }, end: { line: 4, column: 55 } }, '2': { start: { line: 7, column: 4 }, end: { line: 7, column: 53 } }, '3': { start: { line: 8, column: 4 }, end: { line: 8, column: 146 } }, '4': { start: { line: 11, column: 2 }, end: { line: 150, column: 6 } }, '5': { start: { line: 14, column: 6 }, end: { line: 14, column: 72 } }, '6': { start: { line: 19, column: 6 }, end: { line: 24, column: 25 } }, '7': { start: { line: 20, column: 8 }, end: { line: 22, column: 9 } }, '8': { start: { line: 21, column: 10 }, end: { line: 21, column: 42 } }, '9': { start: { line: 23, column: 8 }, end: { line: 23, column: 17 } }, '10': { start: { line: 29, column: 18 }, end: { line: 29, column: 43 } }, '11': { start: { line: 30, column: 6 }, end: { line: 30, column: 57 } }, '12': { start: { line: 31, column: 6 }, end: { line: 41, column: 7 } }, '13': { start: { line: 32, column: 19 }, end: { line: 32, column: 27 } }, '14': { start: { line: 33, column: 8 }, end: { line: 33, column: 283 } }, '15': { start: { line: 34, column: 21 }, end: { line: 34, column: 32 } }, '16': { start: { line: 35, column: 8 }, end: { line: 39, column: 9 } }, '17': { start: { line: 37, column: 22 }, end: { line: 37, column: 40 } }, '18': { start: { line: 38, column: 10 }, end: { line: 38, column: 130 } }, '19': { start: { line: 40, column: 8 }, end: { line: 40, column: 35 } }, '20': { start: { line: 42, column: 6 }, end: { line: 42, column: 27 } }, '21': { start: { line: 47, column: 22 }, end: { line: 47, column: 110 } }, '22': { start: { line: 48, column: 6 }, end: { line: 48, column: 73 } }, '23': { start: { line: 53, column: 6 }, end: { line: 53, column: 149 } }, '24': { start: { line: 59, column: 23 }, end: { line: 59, column: 30 } }, '25': { start: { line: 60, column: 6 }, end: { line: 64, column: 7 } }, '26': { start: { line: 63, column: 8 }, end: { line: 63, column: 67 } }, '27': { start: { line: 66, column: 22 }, end: { line: 66, column: 110 } }, '28': { start: { line: 67, column: 6 }, end: { line: 67, column: 151 } }, '29': { start: { line: 72, column: 6 }, end: { line: 72, column: 27 } }, '30': { start: { line: 81, column: 6 }, end: { line: 83, column: 7 } }, '31': { start: { line: 82, column: 8 }, end: { line: 82, column: 15 } }, '32': { start: { line: 84, column: 6 }, end: { line: 84, column: 55 } }, '33': { start: { line: 85, column: 6 }, end: { line: 85, column: 38 } }, '34': { start: { line: 86, column: 6 }, end: { line: 86, column: 28 } }, '35': { start: { line: 91, column: 6 }, end: { line: 93, column: 7 } }, '36': { start: { line: 92, column: 8 }, end: { line: 92, column: 15 } }, '37': { start: { line: 94, column: 6 }, end: { line: 94, column: 55 } }, '38': { start: { line: 95, column: 6 }, end: { line: 95, column: 38 } }, '39': { start: { line: 96, column: 6 }, end: { line: 96, column: 28 } }, '40': { start: { line: 102, column: 21 }, end: { line: 102, column: 58 } }, '41': { start: { line: 103, column: 6 }, end: { line: 103, column: 94 } }, '42': { start: { line: 104, column: 6 }, end: { line: 104, column: 53 } }, '43': { start: { line: 105, column: 6 }, end: { line: 105, column: 27 } }, '44': { start: { line: 110, column: 6 }, end: { line: 110, column: 55 } }, '45': { start: { line: 111, column: 6 }, end: { line: 111, column: 42 } }, '46': { start: { line: 112, column: 6 }, end: { line: 112, column: 28 } }, '47': { start: { line: 117, column: 6 }, end: { line: 117, column: 80 } }, '48': { start: { line: 118, column: 6 }, end: { line: 118, column: 42 } }, '49': { start: { line: 119, column: 6 }, end: { line: 119, column: 92 } }, '50': { start: { line: 120, column: 6 }, end: { line: 120, column: 42 } }, '51': { start: { line: 121, column: 6 }, end: { line: 121, column: 28 } }, '52': { start: { line: 126, column: 6 }, end: { line: 126, column: 55 } }, '53': { start: { line: 127, column: 6 }, end: { line: 127, column: 42 } }, '54': { start: { line: 128, column: 6 }, end: { line: 128, column: 28 } }, '55': { start: { line: 133, column: 6 }, end: { line: 133, column: 55 } }, '56': { start: { line: 134, column: 6 }, end: { line: 134, column: 42 } }, '57': { start: { line: 135, column: 6 }, end: { line: 135, column: 95 } }, '58': { start: { line: 138, column: 6 }, end: { line: 140, column: 702 } }, '59': { start: { line: 141, column: 6 }, end: { line: 141, column: 31 } }, '60': { start: { line: 146, column: 6 }, end: { line: 146, column: 55 } }, '61': { start: { line: 147, column: 6 }, end: { line: 147, column: 51 } }, '62': { start: { line: 148, column: 6 }, end: { line: 148, column: 28 } }, '63': { start: { line: 151, column: 2 }, end: { line: 151, column: 23 } }, '64': { start: { line: 155, column: 13 }, end: { line: 155, column: 17 } }, '65': { start: { line: 158, column: 16 }, end: { line: 158, column: 43 } }, '66': { start: { line: 159, column: 2 }, end: { line: 165, column: 3 } }, '67': { start: { line: 160, column: 4 }, end: { line: 164, column: 5 } }, '68': { start: { line: 161, column: 15 }, end: { line: 161, column: 25 } }, '69': { start: { line: 162, column: 16 }, end: { line: 162, column: 59 } }, '70': { start: { line: 163, column: 6 }, end: { line: 163, column: 38 } }, '71': { start: { line: 167, column: 21 }, end: { line: 167, column: 106 } }, '72': { start: { line: 168, column: 2 }, end: { line: 170, column: 3 } }, '73': { start: { line: 169, column: 4 }, end: { line: 169, column: 66 } }, '74': { start: { line: 171, column: 2 }, end: { line: 171, column: 14 } }, '75': { start: { line: 174, column: 19 }, end: { line: 223, column: 1 } }, '76': { start: { line: 175, column: 13 }, end: { line: 175, column: 32 } }, '77': { start: { line: 176, column: 23 }, end: { line: 180, column: 3 } }, '78': { start: { line: 177, column: 22 }, end: { line: 177, column: 38 } }, '79': { start: { line: 178, column: 20 }, end: { line: 178, column: 34 } }, '80': { start: { line: 179, column: 4 }, end: { line: 179, column: 36 } }, '81': { start: { line: 181, column: 20 }, end: { line: 186, column: 3 } }, '82': { start: { line: 182, column: 16 }, end: { line: 182, column: 42 } }, '83': { start: { line: 183, column: 4 }, end: { line: 185, column: 5 } }, '84': { start: { line: 184, column: 6 }, end: { line: 184, column: 19 } }, '85': { start: { line: 187, column: 21 }, end: { line: 193, column: 3 } }, '86': { start: { line: 188, column: 19 }, end: { line: 188, column: 33 } }, '87': { start: { line: 190, column: 4 }, end: { line: 192, column: 5 } }, '88': { start: { line: 191, column: 6 }, end: { line: 191, column: 25 } }, '89': { start: { line: 194, column: 2 }, end: { line: 222, column: 5 } }, '90': { start: { line: 195, column: 21 }, end: { line: 195, column: 37 } }, '91': { start: { line: 196, column: 19 }, end: { line: 196, column: 33 } }, '92': { start: { line: 197, column: 16 }, end: { line: 197, column: 27 } }, '93': { start: { line: 199, column: 22 }, end: { line: 199, column: 32 } }, '94': { start: { line: 200, column: 14 }, end: { line: 200, column: 25 } }, '95': { start: { line: 201, column: 15 }, end: { line: 201, column: 30 } }, '96': { start: { line: 202, column: 4 }, end: { line: 202, column: 31 } }, '97': { start: { line: 203, column: 22 }, end: { line: 203, column: 99 } }, '98': { start: { line: 204, column: 20 }, end: { line: 204, column: 42 } }, '99': { start: { line: 205, column: 26 }, end: { line: 205, column: 32 } }, '100': { start: { line: 206, column: 4 }, end: { line: 210, column: 7 } }, '101': { start: { line: 207, column: 6 }, end: { line: 209, column: 7 } }, '102': { start: { line: 208, column: 8 }, end: { line: 208, column: 32 } }, '103': { start: { line: 211, column: 4 }, end: { line: 213, column: 5 } }, '104': { start: { line: 212, column: 6 }, end: { line: 212, column: 13 } }, '105': { start: { line: 214, column: 4 }, end: { line: 221, column: 20 } }, '106': { start: { line: 215, column: 21 }, end: { line: 215, column: 70 } }, '107': { start: { line: 216, column: 6 }, end: { line: 216, column: 57 } }, '108': { start: { line: 217, column: 6 }, end: { line: 217, column: 60 } }, '109': { start: { line: 218, column: 18 }, end: { line: 218, column: 169 } }, '110': { start: { line: 219, column: 6 }, end: { line: 219, column: 36 } }, '111': { start: { line: 220, column: 6 }, end: { line: 220, column: 29 } }, '112': { start: { line: 228, column: 27 }, end: { line: 280, column: 1 } }, '113': { start: { line: 229, column: 11 }, end: { line: 229, column: 32 } }, '114': { start: { line: 230, column: 15 }, end: { line: 230, column: 41 } }, '115': { start: { line: 231, column: 16 }, end: { line: 236, column: 3 } }, '116': { start: { line: 237, column: 13 }, end: { line: 237, column: 25 } }, '117': { start: { line: 238, column: 2 }, end: { line: 240, column: 3 } }, '118': { start: { line: 239, column: 4 }, end: { line: 239, column: 11 } }, '119': { start: { line: 241, column: 2 }, end: { line: 250, column: 3 } }, '120': { start: { line: 242, column: 4 }, end: { line: 242, column: 33 } }, '121': { start: { line: 243, column: 4 }, end: { line: 243, column: 32 } }, '122': { start: { line: 244, column: 4 }, end: { line: 244, column: 33 } }, '123': { start: { line: 245, column: 4 }, end: { line: 245, column: 32 } }, '124': { start: { line: 246, column: 4 }, end: { line: 248, column: 5 } }, '125': { start: { line: 247, column: 6 }, end: { line: 247, column: 31 } }, '126': { start: { line: 249, column: 4 }, end: { line: 249, column: 11 } }, '127': { start: { line: 251, column: 2 }, end: { line: 261, column: 3 } }, '128': { start: { line: 252, column: 4 }, end: { line: 252, column: 33 } }, '129': { start: { line: 253, column: 4 }, end: { line: 253, column: 30 } }, '130': { start: { line: 254, column: 4 }, end: { line: 256, column: 11 } }, '131': { start: { line: 255, column: 6 }, end: { line: 255, column: 31 } }, '132': { start: { line: 258, column: 4 }, end: { line: 258, column: 32 } }, '133': { start: { line: 259, column: 4 }, end: { line: 259, column: 30 } }, '134': { start: { line: 260, column: 4 }, end: { line: 260, column: 32 } }, '135': { start: { line: 262, column: 19 }, end: { line: 264, column: 9 } }, '136': { start: { line: 263, column: 4 }, end: { line: 263, column: 21 } }, '137': { start: { line: 265, column: 2 }, end: { line: 279, column: 12 } }, '138': { start: { line: 266, column: 4 }, end: { line: 266, column: 33 } }, '139': { start: { line: 267, column: 4 }, end: { line: 267, column: 32 } }, '140': { start: { line: 268, column: 4 }, end: { line: 274, column: 5 } }, '141': { start: { line: 269, column: 6 }, end: { line: 269, column: 31 } }, '142': { start: { line: 270, column: 6 }, end: { line: 270, column: 35 } }, '143': { start: { line: 272, column: 6 }, end: { line: 272, column: 32 } }, '144': { start: { line: 273, column: 6 }, end: { line: 273, column: 34 } }, '145': { start: { line: 275, column: 4 }, end: { line: 278, column: 20 } }, '146': { start: { line: 276, column: 6 }, end: { line: 276, column: 35 } }, '147': { start: { line: 277, column: 6 }, end: { line: 277, column: 32 } }, '148': { start: { line: 282, column: 27 }, end: { line: 284, column: 1 } }, '149': { start: { line: 283, column: 2 }, end: { line: 283, column: 43 } }, '150': { start: { line: 288, column: 22 }, end: { line: 288, column: 28 } }, '151': { start: { line: 291, column: 2 }, end: { line: 293, column: 3 } }, '152': { start: { line: 292, column: 4 }, end: { line: 292, column: 42 } }, '153': { start: { line: 294, column: 2 }, end: { line: 294, column: 67 } } }, fnMap: { '0': { name: '(anonymous_0)', decl: { start: { line: 3, column: 20 }, end: { line: 3, column: 21 } }, loc: { start: { line: 3, column: 46 }, end: { line: 152, column: 1 } }, line: 3 }, '1': { name: 'HtmlFormatter', decl: { start: { line: 6, column: 11 }, end: { line: 6, column: 24 } }, loc: { start: { line: 6, column: 27 }, end: { line: 9, column: 3 } }, line: 6 }, '2': { name: 'typeFormattterErrorFormatter', decl: { start: { line: 13, column: 20 }, end: { line: 13, column: 48 } }, loc: { start: { line: 13, column: 63 }, end: { line: 15, column: 5 } }, line: 13 }, '3': { name: 'formatValue', decl: { start: { line: 18, column: 20 }, end: { line: 18, column: 31 } }, loc: { start: { line: 18, column: 48 }, end: { line: 25, column: 5 } }, line: 18 }, '4': { name: '(anonymous_4)', decl: { start: { line: 19, column: 61 }, end: { line: 19, column: 62 } }, loc: { start: { line: 19, column: 77 }, end: { line: 24, column: 7 } }, line: 19 }, '5': { name: 'formatTextDiffString', decl: { start: { line: 28, column: 20 }, end: { line: 28, column: 40 } }, loc: { start: { line: 28, column: 57 }, end: { line: 43, column: 5 } }, line: 28 }, '6': { name: 'rootBegin', decl: { start: { line: 46, column: 20 }, end: { line: 46, column: 29 } }, loc: { start: { line: 46, column: 55 }, end: { line: 49, column: 5 } }, line: 46 }, '7': { name: 'rootEnd', decl: { start: { line: 52, column: 20 }, end: { line: 52, column: 27 } }, loc: { start: { line: 52, column: 37 }, end: { line: 54, column: 5 } }, line: 52 }, '8': { name: 'nodeBegin', decl: { start: { line: 57, column: 20 }, end: { line: 57, column: 29 } }, loc: { start: { line: 57, column: 69 }, end: { line: 68, column: 5 } }, line: 57 }, '9': { name: 'nodeEnd', decl: { start: { line: 71, column: 20 }, end: { line: 71, column: 27 } }, loc: { start: { line: 71, column: 37 }, end: { line: 73, column: 5 } }, line: 71 }, '10': { name: 'format_unchanged', decl: { start: { line: 80, column: 20 }, end: { line: 80, column: 36 } }, loc: { start: { line: 80, column: 59 }, end: { line: 87, column: 5 } }, line: 80 }, '11': { name: 'format_movedestination', decl: { start: { line: 90, column: 20 }, end: { line: 90, column: 42 } }, loc: { start: { line: 90, column: 65 }, end: { line: 97, column: 5 } }, line: 90 }, '12': { name: 'format_node', decl: { start: { line: 100, column: 20 }, end: { line: 100, column: 31 } }, loc: { start: { line: 100, column: 54 }, end: { line: 106, column: 5 } }, line: 100 }, '13': { name: 'format_added', decl: { start: { line: 109, column: 20 }, end: { line: 109, column: 32 } }, loc: { start: { line: 109, column: 49 }, end: { line: 113, column: 5 } }, line: 109 }, '14': { name: 'format_modified', decl: { start: { line: 116, column: 20 }, end: { line: 116, column: 35 } }, loc: { start: { line: 116, column: 52 }, end: { line: 122, column: 5 } }, line: 116 }, '15': { name: 'format_deleted', decl: { start: { line: 125, column: 20 }, end: { line: 125, column: 34 } }, loc: { start: { line: 125, column: 51 }, end: { line: 129, column: 5 } }, line: 125 }, '16': { name: 'format_moved', decl: { start: { line: 132, column: 20 }, end: { line: 132, column: 32 } }, loc: { start: { line: 132, column: 49 }, end: { line: 142, column: 5 } }, line: 132 }, '17': { name: 'format_textdiff', decl: { start: { line: 145, column: 20 }, end: { line: 145, column: 35 } }, loc: { start: { line: 145, column: 52 }, end: { line: 149, column: 5 } }, line: 145 }, '18': { name: 'htmlEscape', decl: { start: { line: 154, column: 9 }, end: { line: 154, column: 19 } }, loc: { start: { line: 154, column: 26 }, end: { line: 172, column: 1 } }, line: 154 }, '19': { name: 'jsondiffpatchHtmlFormatterAdjustArrows', decl: { start: { line: 174, column: 28 }, end: { line: 174, column: 66 } }, loc: { start: { line: 174, column: 76 }, end: { line: 223, column: 1 } }, line: 174 }, '20': { name: 'getElementText', decl: { start: { line: 176, column: 32 }, end: { line: 176, column: 46 } }, loc: { start: { line: 176, column: 53 }, end: { line: 180, column: 3 } }, line: 176 }, '21': { name: 'eachByQuery', decl: { start: { line: 181, column: 29 }, end: { line: 181, column: 40 } }, loc: { start: { line: 181, column: 56 }, end: { line: 186, column: 3 } }, line: 181 }, '22': { name: 'eachChildren', decl: { start: { line: 187, column: 30 }, end: { line: 187, column: 42 } }, loc: { start: { line: 187, column: 54 }, end: { line: 193, column: 3 } }, line: 187 }, '23': { name: '(anonymous_23)', decl: { start: { line: 194, column: 44 }, end: { line: 194, column: 45 } }, loc: { start: { line: 194, column: 61 }, end: { line: 222, column: 3 } }, line: 194 }, '24': { name: '(anonymous_24)', decl: { start: { line: 206, column: 28 }, end: { line: 206, column: 29 } }, loc: { start: { line: 206, column: 45 }, end: { line: 210, column: 5 } }, line: 206 }, '25': { name: 'showUnchanged', decl: { start: { line: 228, column: 36 }, end: { line: 228, column: 49 } }, loc: { start: { line: 228, column: 69 }, end: { line: 280, column: 1 } }, line: 228 }, '26': { name: '(anonymous_26)', decl: { start: { line: 254, column: 15 }, end: { line: 254, column: 16 } }, loc: { start: { line: 254, column: 27 }, end: { line: 256, column: 5 } }, line: 254 }, '27': { name: '(anonymous_27)', decl: { start: { line: 262, column: 31 }, end: { line: 262, column: 32 } }, loc: { start: { line: 262, column: 43 }, end: { line: 264, column: 3 } }, line: 262 }, '28': { name: '(anonymous_28)', decl: { start: { line: 265, column: 13 }, end: { line: 265, column: 14 } }, loc: { start: { line: 265, column: 25 }, end: { line: 279, column: 3 } }, line: 265 }, '29': { name: '(anonymous_29)', decl: { start: { line: 275, column: 15 }, end: { line: 275, column: 16 } }, loc: { start: { line: 275, column: 27 }, end: { line: 278, column: 5 } }, line: 275 }, '30': { name: 'hideUnchanged', decl: { start: { line: 282, column: 36 }, end: { line: 282, column: 49 } }, loc: { start: { line: 282, column: 63 }, end: { line: 284, column: 1 } }, line: 282 }, '31': { name: 'format', decl: { start: { line: 290, column: 16 }, end: { line: 290, column: 22 } }, loc: { start: { line: 290, column: 58 }, end: { line: 295, column: 1 } }, line: 290 } }, branchMap: { '0': { loc: { start: { line: 8, column: 57 }, end: { line: 8, column: 120 } }, type: 'binary-expr', locations: [{ start: { line: 8, column: 57 }, end: { line: 8, column: 80 } }, { start: { line: 8, column: 84 }, end: { line: 8, column: 120 } }], line: 8 }, '1': { loc: { start: { line: 20, column: 8 }, end: { line: 22, column: 9 } }, type: 'if', locations: [{ start: { line: 20, column: 8 }, end: { line: 22, column: 9 } }, { start: { line: 20, column: 8 }, end: { line: 22, column: 9 } }], line: 20 }, '2': { loc: { start: { line: 47, column: 49 }, end: { line: 47, column: 109 } }, type: 'cond-expr', locations: [{ start: { line: 47, column: 60 }, end: { line: 47, column: 104 } }, { start: { line: 47, column: 107 }, end: { line: 47, column: 109 } }], line: 47 }, '3': { loc: { start: { line: 53, column: 30 }, end: { line: 53, column: 146 } }, type: 'cond-expr', locations: [{ start: { line: 53, column: 50 }, end: { line: 53, column: 141 } }, { start: { line: 53, column: 144 }, end: { line: 53, column: 146 } }], line: 53 }, '4': { loc: { start: { line: 60, column: 6 }, end: { line: 64, column: 7 } }, type: 'if', locations: [{ start: { line: 60, column: 6 }, end: { line: 64, column: 7 } }, { start: { line: 60, column: 6 }, end: { line: 64, column: 7 } }], line: 60 }, '5': { loc: { start: { line: 60, column: 10 }, end: { line: 62, column: 85 } }, type: 'binary-expr', locations: [{ start: { line: 60, column: 10 }, end: { line: 60, column: 35 } }, { start: { line: 62, column: 6 }, end: { line: 62, column: 85 } }], line: 60 }, '6': { loc: { start: { line: 63, column: 21 }, end: { line: 63, column: 66 } }, type: 'binary-expr', locations: [{ start: { line: 63, column: 21 }, end: { line: 63, column: 55 } }, { start: { line: 63, column: 59 }, end: { line: 63, column: 66 } }], line: 63 }, '7': { loc: { start: { line: 66, column: 49 }, end: { line: 66, column: 109 } }, type: 'cond-expr', locations: [{ start: { line: 66, column: 60 }, end: { line: 66, column: 104 } }, { start: { line: 66, column: 107 }, end: { line: 66, column: 109 } }], line: 66 }, '8': { loc: { start: { line: 81, column: 6 }, end: { line: 83, column: 7 } }, type: 'if', locations: [{ start: { line: 81, column: 6 }, end: { line: 83, column: 7 } }, { start: { line: 81, column: 6 }, end: { line: 83, column: 7 } }], line: 81 }, '9': { loc: { start: { line: 91, column: 6 }, end: { line: 93, column: 7 } }, type: 'if', locations: [{ start: { line: 91, column: 6 }, end: { line: 93, column: 7 } }, { start: { line: 91, column: 6 }, end: { line: 93, column: 7 } }], line: 91 }, '10': { loc: { start: { line: 102, column: 21 }, end: { line: 102, column: 58 } }, type: 'cond-expr', locations: [{ start: { line: 102, column: 40 }, end: { line: 102, column: 47 } }, { start: { line: 102, column: 50 }, end: { line: 102, column: 58 } }], line: 102 }, '11': { loc: { start: { line: 159, column: 2 }, end: { line: 165, column: 3 } }, type: 'if', locations: [{ start: { line: 159, column: 2 }, end: { line: 165, column: 3 } }, { start: { line: 159, column: 2 }, end: { line: 165, column: 3 } }], line: 159 }, '12': { loc: { start: { line: 159, column: 6 }, end: { line: 159, column: 31 } }, type: 'binary-expr', locations: [{ start: { line: 159, column: 6 }, end: { line: 159, column: 13 } }, { start: { line: 159, column: 17 }, end: { line: 159, column: 31 } }], line: 159 }, '13': { loc: { start: { line: 175, column: 13 }, end: { line: 175, column: 32 } }, type: 'binary-expr', locations: [{ start: { line: 175, column: 13 }, end: { line: 175, column: 20 } }, { start: { line: 175, column: 24 }, end: { line: 175, column: 32 } }], line: 175 }, '14': { loc: { start: { line: 179, column: 11 }, end: { line: 179, column: 35 } }, type: 'binary-expr', locations: [{ start: { line: 179, column: 11 }, end: { line: 179, column: 22 } }, { start: { line: 179, column: 26 }, end: { line: 179, column: 35 } }], line: 179 }, '15': { loc: { start: { line: 207, column: 6 }, end: { line: 209, column: 7 } }, type: 'if', locations: [{ start: { line: 207, column: 6 }, end: { line: 209, column: 7 } }, { start: { line: 207, column: 6 }, end: { line: 209, column: 7 } }], line: 207 }, '16': { loc: { start: { line: 211, column: 4 }, end: { line: 213, column: 5 } }, type: 'if', locations: [{ start: { line: 211, column: 4 }, end: { line: 213, column: 5 } }, { start: { line: 211, column: 4 }, end: { line: 213, column: 5 } }], line: 211 }, '17': { loc: { start: { line: 217, column: 24 }, end: { line: 217, column: 51 } }, type: 'cond-expr', locations: [{ start: { line: 217, column: 39 }, end: { line: 217, column: 40 } }, { start: { line: 217, column: 43 }, end: { line: 217, column: 51 } }], line: 217 }, '18': { loc: { start: { line: 218, column: 18 }, end: { line: 218, column: 169 } }, type: 'cond-expr', locations: [{ start: { line: 218, column: 33 }, end: { line: 218, column: 99 } }, { start: { line: 218, column: 102 }, end: { line: 218, column: 169 } }], line: 218 }, '19': { loc: { start: { line: 229, column: 11 }, end: { line: 229, column: 32 } }, type: 'binary-expr', locations: [{ start: { line: 229, column: 11 }, end: { line: 229, column: 15 } }, { start: { line: 229, column: 19 }, end: { line: 229, column: 32 } }], line: 229 }, '20': { loc: { start: { line: 238, column: 2 }, end: { line: 240, column: 3 } }, type: 'if', locations: [{ start: { line: 238, column: 2 }, end: { line: 240, column: 3 } }, { start: { line: 238, column: 2 }, end: { line: 240, column: 3 } }], line: 238 }, '21': { loc: { start: { line: 241, column: 2 }, end: { line: 250, column: 3 } }, type: 'if', locations: [{ start: { line: 241, column: 2 }, end: { line: 250, column: 3 } }, { start: { line: 241, column: 2 }, end: { line: 250, column: 3 } }], line: 241 }, '22': { loc: { start: { line: 246, column: 4 }, end: { line: 248, column: 5 } }, type: 'if', locations: [{ start: { line: 246, column: 4 }, end: { line: 248, column: 5 } }, { start: { line: 246, column: 4 }, end: { line: 248, column: 5 } }], line: 246 }, '23': { loc: { start: { line: 251, column: 2 }, end: { line: 261, column: 3 } }, type: 'if', locations: [{ start: { line: 251, column: 2 }, end: { line: 261, column: 3 } }, { start: { line: 251, column: 2 }, end: { line: 261, column: 3 } }], line: 251 }, '24': { loc: { start: { line: 268, column: 4 }, end: { line: 274, column: 5 } }, type: 'if', locations: [{ start: { line: 268, column: 4 }, end: { line: 274, column: 5 } }, { start: { line: 268, column: 4 }, end: { line: 274, column: 5 } }], line: 268 }, '25': { loc: { start: { line: 291, column: 2 }, end: { line: 293, column: 3 } }, type: 'if', locations: [{ start: { line: 291, column: 2 }, end: { line: 293, column: 3 } }, { start: { line: 291, column: 2 }, end: { line: 293, column: 3 } }], line: 291 } }, s: { '0': 0, '1': 0, '2': 0, '3': 0, '4': 0, '5': 0, '6': 0, '7': 0, '8': 0, '9': 0, '10': 0, '11': 0, '12': 0, '13': 0, '14': 0, '15': 0, '16': 0, '17': 0, '18': 0, '19': 0, '20': 0, '21': 0, '22': 0, '23': 0, '24': 0, '25': 0, '26': 0, '27': 0, '28': 0, '29': 0, '30': 0, '31': 0, '32': 0, '33': 0, '34': 0, '35': 0, '36': 0, '37': 0, '38': 0, '39': 0, '40': 0, '41': 0, '42': 0, '43': 0, '44': 0, '45': 0, '46': 0, '47': 0, '48': 0, '49': 0, '50': 0, '51': 0, '52': 0, '53': 0, '54': 0, '55': 0, '56': 0, '57': 0, '58': 0, '59': 0, '60': 0, '61': 0, '62': 0, '63': 0, '64': 0, '65': 0, '66': 0, '67': 0, '68': 0, '69': 0, '70': 0, '71': 0, '72': 0, '73': 0, '74': 0, '75': 0, '76': 0, '77': 0, '78': 0, '79': 0, '80': 0, '81': 0, '82': 0, '83': 0, '84': 0, '85': 0, '86': 0, '87': 0, '88': 0, '89': 0, '90': 0, '91': 0, '92': 0, '93': 0, '94': 0, '95': 0, '96': 0, '97': 0, '98': 0, '99': 0, '100': 0, '101': 0, '102': 0, '103': 0, '104': 0, '105': 0, '106': 0, '107': 0, '108': 0, '109': 0, '110': 0, '111': 0, '112': 0, '113': 0, '114': 0, '115': 0, '116': 0, '117': 0, '118': 0, '119': 0, '120': 0, '121': 0, '122': 0, '123': 0, '124': 0, '125': 0, '126': 0, '127': 0, '128': 0, '129': 0, '130': 0, '131': 0, '132': 0, '133': 0, '134': 0, '135': 0, '136': 0, '137': 0, '138': 0, '139': 0, '140': 0, '141': 0, '142': 0, '143': 0, '144': 0, '145': 0, '146': 0, '147': 0, '148': 0, '149': 0, '150': 0, '151': 0, '152': 0, '153': 0 }, f: { '0': 0, '1': 0, '2': 0, '3': 0, '4': 0, '5': 0, '6': 0, '7': 0, '8': 0, '9': 0, '10': 0, '11': 0, '12': 0, '13': 0, '14': 0, '15': 0, '16': 0, '17': 0, '18': 0, '19': 0, '20': 0, '21': 0, '22': 0, '23': 0, '24': 0, '25': 0, '26': 0, '27': 0, '28': 0, '29': 0, '30': 0, '31': 0 }, b: { '0': [0, 0], '1': [0, 0], '2': [0, 0], '3': [0, 0], '4': [0, 0], '5': [0, 0], '6': [0, 0], '7': [0, 0], '8': [0, 0], '9': [0, 0], '10': [0, 0], '11': [0, 0], '12': [0, 0], '13': [0, 0], '14': [0, 0], '15': [0, 0], '16': [0, 0], '17': [0, 0], '18': [0, 0], '19': [0, 0], '20': [0, 0], '21': [0, 0], '22': [0, 0], '23': [0, 0], '24': [0, 0], '25': [0, 0] }, _coverageSchema: '332fd63041d2c1bcb487cc26dd0d5f7d97098a6c' },
      coverage = global[gcv] || (global[gcv] = {});if (coverage[path] && coverage[path].hash === hash) {
    return coverage[path];
  }coverageData.hash = hash;return coverage[path] = coverageData;
}();var HtmlFormatter = (cov_rfwwt22uh.s[0]++, function (_BaseFormatter) {
  cov_rfwwt22uh.f[0]++;cov_rfwwt22uh.s[1]++;inherits$1(HtmlFormatter, _BaseFormatter);function HtmlFormatter() {
    cov_rfwwt22uh.f[1]++;cov_rfwwt22uh.s[2]++;classCallCheck$1(this, HtmlFormatter);cov_rfwwt22uh.s[3]++;return possibleConstructorReturn$1(this, ((cov_rfwwt22uh.b[0][0]++, HtmlFormatter.__proto__) || (cov_rfwwt22uh.b[0][1]++, Object.getPrototypeOf(HtmlFormatter))).apply(this, arguments));
  }cov_rfwwt22uh.s[4]++;createClass$1(HtmlFormatter, [{ key: 'typeFormattterErrorFormatter', value: function typeFormattterErrorFormatter(context, err) {
      cov_rfwwt22uh.f[2]++;cov_rfwwt22uh.s[5]++;context.out('<pre class="jsondiffpatch-error">' + err + '</pre>');
    } }, { key: 'formatValue', value: function formatValue(context, value) {
      cov_rfwwt22uh.f[3]++;cov_rfwwt22uh.s[6]++;context.out('<pre>' + htmlEscape(JSON.stringify(value, function (k, v) {
        cov_rfwwt22uh.f[4]++;cov_rfwwt22uh.s[7]++;if (typeof v === 'bigint') {
          cov_rfwwt22uh.b[1][0]++;cov_rfwwt22uh.s[8]++;return 'Bigint=' + v.toString();
        } else {
          cov_rfwwt22uh.b[1][1]++;
        }cov_rfwwt22uh.s[9]++;return v;
      }, 2)) + '</pre>');
    } }, { key: 'formatTextDiffString', value: function formatTextDiffString(context, value) {
      cov_rfwwt22uh.f[5]++;var lines = (cov_rfwwt22uh.s[10]++, this.parseTextDiff(value));cov_rfwwt22uh.s[11]++;context.out('<ul class="jsondiffpatch-textdiff">');cov_rfwwt22uh.s[12]++;for (var i = 0, l = lines.length; i < l; i++) {
        var line = (cov_rfwwt22uh.s[13]++, lines[i]);cov_rfwwt22uh.s[14]++;context.out('<li><div class="jsondiffpatch-textdiff-location">' + ('<span class="jsondiffpatch-textdiff-line-number">' + line.location.line + '</span><span class="jsondiffpatch-textdiff-char">' + line.location.chr + '</span></div><div class="jsondiffpatch-textdiff-line">'));var pieces = (cov_rfwwt22uh.s[15]++, line.pieces);cov_rfwwt22uh.s[16]++;for (var pieceIndex = 0, piecesLength = pieces.length; pieceIndex < piecesLength; pieceIndex++) {
          var piece = (cov_rfwwt22uh.s[17]++, pieces[pieceIndex]);cov_rfwwt22uh.s[18]++;context.out('<span class="jsondiffpatch-textdiff-' + piece.type + '">' + htmlEscape(decodeURI(piece.text)) + '</span>');
        }cov_rfwwt22uh.s[19]++;context.out('</div></li>');
      }cov_rfwwt22uh.s[20]++;context.out('</ul>');
    } }, { key: 'rootBegin', value: function rootBegin(context, type, nodeType) {
      cov_rfwwt22uh.f[6]++;var nodeClass = (cov_rfwwt22uh.s[21]++, 'jsondiffpatch-' + type + (nodeType ? (cov_rfwwt22uh.b[2][0]++, ' jsondiffpatch-child-node-type-' + nodeType) : (cov_rfwwt22uh.b[2][1]++, '')));cov_rfwwt22uh.s[22]++;context.out('<div class="jsondiffpatch-delta ' + nodeClass + '">');
    } }, { key: 'rootEnd', value: function rootEnd(context) {
      cov_rfwwt22uh.f[7]++;cov_rfwwt22uh.s[23]++;context.out('</div>' + (context.hasArrows ? (cov_rfwwt22uh.b[3][0]++, '<script type="text/javascript">setTimeout(' + (adjustArrows.toString() + ',10);</script>')) : (cov_rfwwt22uh.b[3][1]++, '')));
    } }, { key: 'nodeBegin', value: function nodeBegin(context, key, leftKey, type, nodeType) {
      cov_rfwwt22uh.f[8]++;var newLeftKey = (cov_rfwwt22uh.s[24]++, leftKey);cov_rfwwt22uh.s[25]++;if ((cov_rfwwt22uh.b[5][0]++, this.translationConfigMap) && (cov_rfwwt22uh.b[5][1]++, Object.prototype.toString.call(this.translationConfigMap) === '[object Object]')) {
        cov_rfwwt22uh.b[4][0]++;cov_rfwwt22uh.s[26]++;newLeftKey = (cov_rfwwt22uh.b[6][0]++, this.translationConfigMap[leftKey]) || (cov_rfwwt22uh.b[6][1]++, leftKey);
      } else {
        cov_rfwwt22uh.b[4][1]++;
      }var nodeClass = (cov_rfwwt22uh.s[27]++, 'jsondiffpatch-' + type + (nodeType ? (cov_rfwwt22uh.b[7][0]++, ' jsondiffpatch-child-node-type-' + nodeType) : (cov_rfwwt22uh.b[7][1]++, '')));cov_rfwwt22uh.s[28]++;context.out('<li class="' + nodeClass + '" data-key="' + leftKey + '">' + ('<div class="jsondiffpatch-property-name">' + newLeftKey + '</div>'));
    } }, { key: 'nodeEnd', value: function nodeEnd(context) {
      cov_rfwwt22uh.f[9]++;cov_rfwwt22uh.s[29]++;context.out('</li>');
    } }, { key: 'format_unchanged', value: function format_unchanged(context, delta, left) {
      cov_rfwwt22uh.f[10]++;cov_rfwwt22uh.s[30]++;if (typeof left === 'undefined') {
        cov_rfwwt22uh.b[8][0]++;cov_rfwwt22uh.s[31]++;return;
      } else {
        cov_rfwwt22uh.b[8][1]++;
      }cov_rfwwt22uh.s[32]++;context.out('<div class="jsondiffpatch-value">');cov_rfwwt22uh.s[33]++;this.formatValue(context, left);cov_rfwwt22uh.s[34]++;context.out('</div>');
    } }, { key: 'format_movedestination', value: function format_movedestination(context, delta, left) {
      cov_rfwwt22uh.f[11]++;cov_rfwwt22uh.s[35]++;if (typeof left === 'undefined') {
        cov_rfwwt22uh.b[9][0]++;cov_rfwwt22uh.s[36]++;return;
      } else {
        cov_rfwwt22uh.b[9][1]++;
      }cov_rfwwt22uh.s[37]++;context.out('<div class="jsondiffpatch-value">');cov_rfwwt22uh.s[38]++;this.formatValue(context, left);cov_rfwwt22uh.s[39]++;context.out('</div>');
    } }, { key: 'format_node', value: function format_node(context, delta, left) {
      cov_rfwwt22uh.f[12]++;var nodeType = (cov_rfwwt22uh.s[40]++, delta._t === 'a' ? (cov_rfwwt22uh.b[10][0]++, 'array') : (cov_rfwwt22uh.b[10][1]++, 'object'));cov_rfwwt22uh.s[41]++;context.out('<ul class="jsondiffpatch-node jsondiffpatch-node-type-' + nodeType + '">');cov_rfwwt22uh.s[42]++;this.formatDeltaChildren(context, delta, left);cov_rfwwt22uh.s[43]++;context.out('</ul>');
    } }, { key: 'format_added', value: function format_added(context, delta) {
      cov_rfwwt22uh.f[13]++;cov_rfwwt22uh.s[44]++;context.out('<div class="jsondiffpatch-value">');cov_rfwwt22uh.s[45]++;this.formatValue(context, delta[0]);cov_rfwwt22uh.s[46]++;context.out('</div>');
    } }, { key: 'format_modified', value: function format_modified(context, delta) {
      cov_rfwwt22uh.f[14]++;cov_rfwwt22uh.s[47]++;context.out('<div class="jsondiffpatch-value jsondiffpatch-left-value">');cov_rfwwt22uh.s[48]++;this.formatValue(context, delta[0]);cov_rfwwt22uh.s[49]++;context.out('</div>' + '<div class="jsondiffpatch-value jsondiffpatch-right-value">');cov_rfwwt22uh.s[50]++;this.formatValue(context, delta[1]);cov_rfwwt22uh.s[51]++;context.out('</div>');
    } }, { key: 'format_deleted', value: function format_deleted(context, delta) {
      cov_rfwwt22uh.f[15]++;cov_rfwwt22uh.s[52]++;context.out('<div class="jsondiffpatch-value">');cov_rfwwt22uh.s[53]++;this.formatValue(context, delta[0]);cov_rfwwt22uh.s[54]++;context.out('</div>');
    } }, { key: 'format_moved', value: function format_moved(context, delta) {
      cov_rfwwt22uh.f[16]++;cov_rfwwt22uh.s[55]++;context.out('<div class="jsondiffpatch-value">');cov_rfwwt22uh.s[56]++;this.formatValue(context, delta[0]);cov_rfwwt22uh.s[57]++;context.out('</div><div class="jsondiffpatch-moved-destination">' + delta[1] + '</div>');cov_rfwwt22uh.s[58]++;context.out('<div class="jsondiffpatch-arrow" ' + 'style="position: relative; left: -34px;">\n          <svg width="30" height="60" ' + 'style="position: absolute; display: none;">\n          <defs>\n              <marker id="markerArrow" markerWidth="8" markerHeight="8"\n                 refx="2" refy="4"\n                     orient="auto" markerUnits="userSpaceOnUse">\n                  <path d="M1,1 L1,7 L7,4 L1,1" style="fill: #339;" />\n              </marker>\n          </defs>\n          <path d="M30,0 Q-10,25 26,50"\n            style="stroke: #88f; stroke-width: 2px; fill: none; ' + 'stroke-opacity: 0.5; marker-end: url(#markerArrow);"\n          ></path>\n          </svg>\n      </div>');cov_rfwwt22uh.s[59]++;context.hasArrows = true;
    } }, { key: 'format_textdiff', value: function format_textdiff(context, delta) {
      cov_rfwwt22uh.f[17]++;cov_rfwwt22uh.s[60]++;context.out('<div class="jsondiffpatch-value">');cov_rfwwt22uh.s[61]++;this.formatTextDiffString(context, delta[0]);cov_rfwwt22uh.s[62]++;context.out('</div>');
    } }]);cov_rfwwt22uh.s[63]++;return HtmlFormatter;
}(BaseFormatter));function htmlEscape(text) {
  cov_rfwwt22uh.f[18]++;var html = (cov_rfwwt22uh.s[64]++, text);var bigints = (cov_rfwwt22uh.s[65]++, html.match(/"Bigint=.*?"/g));cov_rfwwt22uh.s[66]++;if ((cov_rfwwt22uh.b[12][0]++, bigints) && (cov_rfwwt22uh.b[12][1]++, bigints.length)) {
    cov_rfwwt22uh.b[11][0]++;cov_rfwwt22uh.s[67]++;for (var i = 0; i < bigints.length; i++) {
      var bi = (cov_rfwwt22uh.s[68]++, bigints[i]);var bi1 = (cov_rfwwt22uh.s[69]++, bi.replace('"Bigint=', '').replace('"', ''));cov_rfwwt22uh.s[70]++;html = html.split(bi).join(bi1);
    }
  } else {
    cov_rfwwt22uh.b[11][1]++;
  }var replacements = (cov_rfwwt22uh.s[71]++, [[/&/g, '&amp;'], [/</g, '&lt;'], [/>/g, '&gt;'], [/'/g, '&apos;'], [/"/g, '&quot;']]);cov_rfwwt22uh.s[72]++;for (var _i = 0; _i < replacements.length; _i++) {
    cov_rfwwt22uh.s[73]++;html = html.replace(replacements[_i][0], replacements[_i][1]);
  }cov_rfwwt22uh.s[74]++;return html;
}cov_rfwwt22uh.s[75]++;var adjustArrows = function jsondiffpatchHtmlFormatterAdjustArrows(nodeArg) {
  cov_rfwwt22uh.f[19]++;var node = (cov_rfwwt22uh.s[76]++, (cov_rfwwt22uh.b[13][0]++, nodeArg) || (cov_rfwwt22uh.b[13][1]++, document));cov_rfwwt22uh.s[77]++;var getElementText = function getElementText(_ref) {
    cov_rfwwt22uh.f[20]++;var textContent = (cov_rfwwt22uh.s[78]++, _ref.textContent),
        innerText = (cov_rfwwt22uh.s[79]++, _ref.innerText);cov_rfwwt22uh.s[80]++;return (cov_rfwwt22uh.b[14][0]++, textContent) || (cov_rfwwt22uh.b[14][1]++, innerText);
  };cov_rfwwt22uh.s[81]++;var eachByQuery = function eachByQuery(el, query, fn) {
    cov_rfwwt22uh.f[21]++;var elems = (cov_rfwwt22uh.s[82]++, el.querySelectorAll(query));cov_rfwwt22uh.s[83]++;for (var i = 0, l = elems.length; i < l; i++) {
      cov_rfwwt22uh.s[84]++;fn(elems[i]);
    }
  };cov_rfwwt22uh.s[85]++;var eachChildren = function eachChildren(_ref2, fn) {
    cov_rfwwt22uh.f[22]++;var children = (cov_rfwwt22uh.s[86]++, _ref2.children);cov_rfwwt22uh.s[87]++;for (var i = 0, l = children.length; i < l; i++) {
      cov_rfwwt22uh.s[88]++;fn(children[i], i);
    }
  };cov_rfwwt22uh.s[89]++;eachByQuery(node, '.jsondiffpatch-arrow', function (_ref3) {
    cov_rfwwt22uh.f[23]++;var parentNode = (cov_rfwwt22uh.s[90]++, _ref3.parentNode),
        children = (cov_rfwwt22uh.s[91]++, _ref3.children),
        style = (cov_rfwwt22uh.s[92]++, _ref3.style);var arrowParent = (cov_rfwwt22uh.s[93]++, parentNode);var svg = (cov_rfwwt22uh.s[94]++, children[0]);var path = (cov_rfwwt22uh.s[95]++, svg.children[1]);cov_rfwwt22uh.s[96]++;svg.style.display = 'none';var destination = (cov_rfwwt22uh.s[97]++, getElementText(arrowParent.querySelector('.jsondiffpatch-moved-destination')));var container = (cov_rfwwt22uh.s[98]++, arrowParent.parentNode);var destinationElem = (cov_rfwwt22uh.s[99]++, void 0);cov_rfwwt22uh.s[100]++;eachChildren(container, function (child) {
      cov_rfwwt22uh.f[24]++;cov_rfwwt22uh.s[101]++;if (child.getAttribute('data-key') === destination) {
        cov_rfwwt22uh.b[15][0]++;cov_rfwwt22uh.s[102]++;destinationElem = child;
      } else {
        cov_rfwwt22uh.b[15][1]++;
      }
    });cov_rfwwt22uh.s[103]++;if (!destinationElem) {
      cov_rfwwt22uh.b[16][0]++;cov_rfwwt22uh.s[104]++;return;
    } else {
      cov_rfwwt22uh.b[16][1]++;
    }cov_rfwwt22uh.s[105]++;try {
      var distance = (cov_rfwwt22uh.s[106]++, destinationElem.offsetTop - arrowParent.offsetTop);cov_rfwwt22uh.s[107]++;svg.setAttribute('height', Math.abs(distance) + 6);cov_rfwwt22uh.s[108]++;style.top = -8 + (distance > 0 ? (cov_rfwwt22uh.b[17][0]++, 0) : (cov_rfwwt22uh.b[17][1]++, distance)) + 'px';var curve = (cov_rfwwt22uh.s[109]++, distance > 0 ? (cov_rfwwt22uh.b[18][0]++, 'M30,0 Q-10,' + Math.round(distance / 2) + ' 26,' + (distance - 4)) : (cov_rfwwt22uh.b[18][1]++, 'M30,' + -distance + ' Q-10,' + Math.round(-distance / 2) + ' 26,4'));cov_rfwwt22uh.s[110]++;path.setAttribute('d', curve);cov_rfwwt22uh.s[111]++;svg.style.display = '';
    } catch (err) {}
  });
};cov_rfwwt22uh.s[112]++;var showUnchanged = function showUnchanged(show, node, delay) {
  cov_rfwwt22uh.f[25]++;var el = (cov_rfwwt22uh.s[113]++, (cov_rfwwt22uh.b[19][0]++, node) || (cov_rfwwt22uh.b[19][1]++, document.body));var prefix = (cov_rfwwt22uh.s[114]++, 'jsondiffpatch-unchanged-');var classes = (cov_rfwwt22uh.s[115]++, { showing: prefix + 'showing', hiding: prefix + 'hiding', visible: prefix + 'visible', hidden: prefix + 'hidden' });var list = (cov_rfwwt22uh.s[116]++, el.classList);cov_rfwwt22uh.s[117]++;if (!list) {
    cov_rfwwt22uh.b[20][0]++;cov_rfwwt22uh.s[118]++;return;
  } else {
    cov_rfwwt22uh.b[20][1]++;
  }cov_rfwwt22uh.s[119]++;if (!delay) {
    cov_rfwwt22uh.b[21][0]++;cov_rfwwt22uh.s[120]++;list.remove(classes.showing);cov_rfwwt22uh.s[121]++;list.remove(classes.hiding);cov_rfwwt22uh.s[122]++;list.remove(classes.visible);cov_rfwwt22uh.s[123]++;list.remove(classes.hidden);cov_rfwwt22uh.s[124]++;if (show === false) {
      cov_rfwwt22uh.b[22][0]++;cov_rfwwt22uh.s[125]++;list.add(classes.hidden);
    } else {
      cov_rfwwt22uh.b[22][1]++;
    }cov_rfwwt22uh.s[126]++;return;
  } else {
    cov_rfwwt22uh.b[21][1]++;
  }cov_rfwwt22uh.s[127]++;if (show === false) {
    cov_rfwwt22uh.b[23][0]++;cov_rfwwt22uh.s[128]++;list.remove(classes.showing);cov_rfwwt22uh.s[129]++;list.add(classes.visible);cov_rfwwt22uh.s[130]++;setTimeout(function () {
      cov_rfwwt22uh.f[26]++;cov_rfwwt22uh.s[131]++;list.add(classes.hiding);
    }, 10);
  } else {
    cov_rfwwt22uh.b[23][1]++;cov_rfwwt22uh.s[132]++;list.remove(classes.hiding);cov_rfwwt22uh.s[133]++;list.add(classes.showing);cov_rfwwt22uh.s[134]++;list.remove(classes.hidden);
  }var intervalId = (cov_rfwwt22uh.s[135]++, setInterval(function () {
    cov_rfwwt22uh.f[27]++;cov_rfwwt22uh.s[136]++;adjustArrows(el);
  }, 100));cov_rfwwt22uh.s[137]++;setTimeout(function () {
    cov_rfwwt22uh.f[28]++;cov_rfwwt22uh.s[138]++;list.remove(classes.showing);cov_rfwwt22uh.s[139]++;list.remove(classes.hiding);cov_rfwwt22uh.s[140]++;if (show === false) {
      cov_rfwwt22uh.b[24][0]++;cov_rfwwt22uh.s[141]++;list.add(classes.hidden);cov_rfwwt22uh.s[142]++;list.remove(classes.visible);
    } else {
      cov_rfwwt22uh.b[24][1]++;cov_rfwwt22uh.s[143]++;list.add(classes.visible);cov_rfwwt22uh.s[144]++;list.remove(classes.hidden);
    }cov_rfwwt22uh.s[145]++;setTimeout(function () {
      cov_rfwwt22uh.f[29]++;cov_rfwwt22uh.s[146]++;list.remove(classes.visible);cov_rfwwt22uh.s[147]++;clearInterval(intervalId);
    }, delay + 400);
  }, delay);
};cov_rfwwt22uh.s[148]++;var hideUnchanged = function hideUnchanged(node, delay) {
  cov_rfwwt22uh.f[30]++;cov_rfwwt22uh.s[149]++;return showUnchanged(false, node, delay);
};var defaultInstance = (cov_rfwwt22uh.s[150]++, void 0);function format(delta, left, translationConfigMap) {
  cov_rfwwt22uh.f[31]++;cov_rfwwt22uh.s[151]++;if (!defaultInstance) {
    cov_rfwwt22uh.b[25][0]++;cov_rfwwt22uh.s[152]++;defaultInstance = new HtmlFormatter();
  } else {
    cov_rfwwt22uh.b[25][1]++;
  }cov_rfwwt22uh.s[153]++;return defaultInstance.format(delta, left, translationConfigMap);
}

var html = Object.freeze({
  showUnchanged: showUnchanged,
  hideUnchanged: hideUnchanged,
  default: HtmlFormatter,
  format: format
});

var cov_2nk80jg2to = function () {
  var path = '/Users/wangjie/project/plugins/jsondiffpatch/src/formatters/annotated.js',
      hash = '6daa91735cc8d1f1c5c76aef9df5147229477937',
      Function = function () {}.constructor,
      global = new Function('return this')(),
      gcv = '__coverage__',
      coverageData = { path: '/Users/wangjie/project/plugins/jsondiffpatch/src/formatters/annotated.js', statementMap: { '0': { start: { line: 3, column: 25 }, end: { line: 114, column: 16 } }, '1': { start: { line: 4, column: 2 }, end: { line: 4, column: 60 } }, '2': { start: { line: 7, column: 4 }, end: { line: 7, column: 58 } }, '3': { start: { line: 9, column: 16 }, end: { line: 9, column: 148 } }, '4': { start: { line: 11, column: 4 }, end: { line: 11, column: 42 } }, '5': { start: { line: 12, column: 4 }, end: { line: 12, column: 17 } }, '6': { start: { line: 15, column: 2 }, end: { line: 112, column: 6 } }, '7': { start: { line: 18, column: 6 }, end: { line: 18, column: 162 } }, '8': { start: { line: 19, column: 6 }, end: { line: 22, column: 8 } }, '9': { start: { line: 20, column: 8 }, end: { line: 20, column: 98 } }, '10': { start: { line: 21, column: 8 }, end: { line: 21, column: 78 } }, '11': { start: { line: 23, column: 6 }, end: { line: 31, column: 8 } }, '12': { start: { line: 24, column: 8 }, end: { line: 24, column: 145 } }, '13': { start: { line: 25, column: 8 }, end: { line: 25, column: 39 } }, '14': { start: { line: 26, column: 8 }, end: { line: 26, column: 65 } }, '15': { start: { line: 27, column: 8 }, end: { line: 27, column: 26 } }, '16': { start: { line: 28, column: 8 }, end: { line: 28, column: 77 } }, '17': { start: { line: 29, column: 8 }, end: { line: 29, column: 30 } }, '18': { start: { line: 30, column: 8 }, end: { line: 30, column: 40 } }, '19': { start: { line: 36, column: 6 }, end: { line: 36, column: 76 } }, '20': { start: { line: 41, column: 18 }, end: { line: 41, column: 43 } }, '21': { start: { line: 42, column: 6 }, end: { line: 42, column: 57 } }, '22': { start: { line: 43, column: 6 }, end: { line: 52, column: 7 } }, '23': { start: { line: 44, column: 19 }, end: { line: 44, column: 27 } }, '24': { start: { line: 45, column: 8 }, end: { line: 45, column: 283 } }, '25': { start: { line: 46, column: 21 }, end: { line: 46, column: 32 } }, '26': { start: { line: 47, column: 8 }, end: { line: 50, column: 9 } }, '27': { start: { line: 48, column: 22 }, end: { line: 48, column: 40 } }, '28': { start: { line: 49, column: 10 }, end: { line: 49, column: 107 } }, '29': { start: { line: 51, column: 8 }, end: { line: 51, column: 35 } }, '30': { start: { line: 53, column: 6 }, end: { line: 53, column: 27 } }, '31': { start: { line: 58, column: 6 }, end: { line: 58, column: 67 } }, '32': { start: { line: 59, column: 6 }, end: { line: 62, column: 7 } }, '33': { start: { line: 60, column: 8 }, end: { line: 60, column: 25 } }, '34': { start: { line: 61, column: 8 }, end: { line: 61, column: 25 } }, '35': { start: { line: 63, column: 6 }, end: { line: 65, column: 7 } }, '36': { start: { line: 64, column: 8 }, end: { line: 64, column: 87 } }, '37': { start: { line: 70, column: 6 }, end: { line: 73, column: 7 } }, '38': { start: { line: 71, column: 8 }, end: { line: 71, column: 27 } }, '39': { start: { line: 72, column: 8 }, end: { line: 72, column: 25 } }, '40': { start: { line: 74, column: 6 }, end: { line: 74, column: 30 } }, '41': { start: { line: 79, column: 6 }, end: { line: 79, column: 48 } }, '42': { start: { line: 80, column: 6 }, end: { line: 82, column: 7 } }, '43': { start: { line: 81, column: 8 }, end: { line: 81, column: 25 } }, '44': { start: { line: 83, column: 6 }, end: { line: 85, column: 7 } }, '45': { start: { line: 84, column: 8 }, end: { line: 84, column: 87 } }, '46': { start: { line: 90, column: 6 }, end: { line: 92, column: 7 } }, '47': { start: { line: 91, column: 8 }, end: { line: 91, column: 27 } }, '48': { start: { line: 93, column: 6 }, end: { line: 93, column: 45 } }, '49': { start: { line: 110, column: 6 }, end: { line: 110, column: 53 } }, '50': { start: { line: 113, column: 2 }, end: { line: 113, column: 28 } }, '51': { start: { line: 118, column: 23 }, end: { line: 120, column: 1 } }, '52': { start: { line: 119, column: 2 }, end: { line: 119, column: 76 } }, '53': { start: { line: 122, column: 23 }, end: { line: 160, column: 1 } }, '54': { start: { line: 124, column: 23 }, end: { line: 124, column: 49 } }, '55': { start: { line: 125, column: 4 }, end: { line: 127, column: 5 } }, '56': { start: { line: 126, column: 6 }, end: { line: 126, column: 40 } }, '57': { start: { line: 128, column: 4 }, end: { line: 130, column: 5 } }, '58': { start: { line: 129, column: 6 }, end: { line: 129, column: 57 } }, '59': { start: { line: 131, column: 4 }, end: { line: 131, column: 70 } }, '60': { start: { line: 134, column: 23 }, end: { line: 134, column: 64 } }, '61': { start: { line: 135, column: 4 }, end: { line: 137, column: 5 } }, '62': { start: { line: 136, column: 6 }, end: { line: 136, column: 43 } }, '63': { start: { line: 138, column: 4 }, end: { line: 140, column: 5 } }, '64': { start: { line: 139, column: 6 }, end: { line: 139, column: 57 } }, '65': { start: { line: 141, column: 4 }, end: { line: 141, column: 73 } }, '66': { start: { line: 144, column: 23 }, end: { line: 144, column: 60 } }, '67': { start: { line: 145, column: 4 }, end: { line: 147, column: 5 } }, '68': { start: { line: 146, column: 6 }, end: { line: 146, column: 43 } }, '69': { start: { line: 148, column: 4 }, end: { line: 150, column: 5 } }, '70': { start: { line: 149, column: 6 }, end: { line: 149, column: 54 } }, '71': { start: { line: 151, column: 4 }, end: { line: 151, column: 73 } }, '72': { start: { line: 154, column: 4 }, end: { line: 154, column: 202 } }, '73': { start: { line: 157, column: 19 }, end: { line: 157, column: 155 } }, '74': { start: { line: 158, column: 4 }, end: { line: 158, column: 155 } }, '75': { start: { line: 162, column: 22 }, end: { line: 179, column: 1 } }, '76': { start: { line: 163, column: 18 }, end: { line: 163, column: 42 } }, '77': { start: { line: 164, column: 18 }, end: { line: 164, column: 45 } }, '78': { start: { line: 165, column: 17 }, end: { line: 165, column: 98 } }, '79': { start: { line: 166, column: 13 }, end: { line: 171, column: 7 } }, '80': { start: { line: 167, column: 4 }, end: { line: 169, column: 5 } }, '81': { start: { line: 168, column: 6 }, end: { line: 168, column: 38 } }, '82': { start: { line: 170, column: 4 }, end: { line: 170, column: 13 } }, '83': { start: { line: 172, column: 2 }, end: { line: 175, column: 3 } }, '84': { start: { line: 174, column: 4 }, end: { line: 174, column: 49 } }, '85': { start: { line: 176, column: 2 }, end: { line: 176, column: 19 } }, '86': { start: { line: 177, column: 2 }, end: { line: 177, column: 30 } }, '87': { start: { line: 178, column: 2 }, end: { line: 178, column: 21 } }, '88': { start: { line: 182, column: 0 }, end: { line: 182, column: 60 } }, '89': { start: { line: 183, column: 0 }, end: { line: 183, column: 63 } }, '90': { start: { line: 184, column: 0 }, end: { line: 184, column: 62 } }, '91': { start: { line: 185, column: 0 }, end: { line: 185, column: 60 } }, '92': { start: { line: 186, column: 0 }, end: { line: 186, column: 63 } }, '93': { start: { line: 193, column: 22 }, end: { line: 193, column: 28 } }, '94': { start: { line: 196, column: 2 }, end: { line: 198, column: 3 } }, '95': { start: { line: 197, column: 4 }, end: { line: 197, column: 47 } }, '96': { start: { line: 199, column: 2 }, end: { line: 199, column: 45 } } }, fnMap: { '0': { name: '(anonymous_0)', decl: { start: { line: 3, column: 25 }, end: { line: 3, column: 26 } }, loc: { start: { line: 3, column: 51 }, end: { line: 114, column: 1 } }, line: 3 }, '1': { name: 'AnnotatedFormatter', decl: { start: { line: 6, column: 11 }, end: { line: 6, column: 29 } }, loc: { start: { line: 6, column: 32 }, end: { line: 13, column: 3 } }, line: 6 }, '2': { name: 'prepareContext', decl: { start: { line: 17, column: 20 }, end: { line: 17, column: 34 } }, loc: { start: { line: 17, column: 44 }, end: { line: 32, column: 5 } }, line: 17 }, '3': { name: '(anonymous_3)', decl: { start: { line: 19, column: 23 }, end: { line: 19, column: 24 } }, loc: { start: { line: 19, column: 41 }, end: { line: 22, column: 7 } }, line: 19 }, '4': { name: '(anonymous_4)', decl: { start: { line: 23, column: 20 }, end: { line: 23, column: 21 } }, loc: { start: { line: 23, column: 46 }, end: { line: 31, column: 7 } }, line: 23 }, '5': { name: 'typeFormattterErrorFormatter', decl: { start: { line: 35, column: 20 }, end: { line: 35, column: 48 } }, loc: { start: { line: 35, column: 63 }, end: { line: 37, column: 5 } }, line: 35 }, '6': { name: 'formatTextDiffString', decl: { start: { line: 40, column: 20 }, end: { line: 40, column: 40 } }, loc: { start: { line: 40, column: 57 }, end: { line: 54, column: 5 } }, line: 40 }, '7': { name: 'rootBegin', decl: { start: { line: 57, column: 20 }, end: { line: 57, column: 29 } }, loc: { start: { line: 57, column: 55 }, end: { line: 66, column: 5 } }, line: 57 }, '8': { name: 'rootEnd', decl: { start: { line: 69, column: 20 }, end: { line: 69, column: 27 } }, loc: { start: { line: 69, column: 43 }, end: { line: 75, column: 5 } }, line: 69 }, '9': { name: 'nodeBegin', decl: { start: { line: 78, column: 20 }, end: { line: 78, column: 29 } }, loc: { start: { line: 78, column: 69 }, end: { line: 86, column: 5 } }, line: 78 }, '10': { name: 'nodeEnd', decl: { start: { line: 89, column: 20 }, end: { line: 89, column: 27 } }, loc: { start: { line: 89, column: 75 }, end: { line: 94, column: 5 } }, line: 89 }, '11': { name: 'format_unchanged', decl: { start: { line: 102, column: 20 }, end: { line: 102, column: 36 } }, loc: { start: { line: 102, column: 39 }, end: { line: 102, column: 41 } }, line: 102 }, '12': { name: 'format_movedestination', decl: { start: { line: 105, column: 20 }, end: { line: 105, column: 42 } }, loc: { start: { line: 105, column: 45 }, end: { line: 105, column: 47 } }, line: 105 }, '13': { name: 'format_node', decl: { start: { line: 108, column: 20 }, end: { line: 108, column: 31 } }, loc: { start: { line: 108, column: 54 }, end: { line: 111, column: 5 } }, line: 108 }, '14': { name: 'wrapPropertyName', decl: { start: { line: 118, column: 32 }, end: { line: 118, column: 48 } }, loc: { start: { line: 118, column: 55 }, end: { line: 120, column: 1 } }, line: 118 }, '15': { name: 'added', decl: { start: { line: 123, column: 18 }, end: { line: 123, column: 23 } }, loc: { start: { line: 123, column: 51 }, end: { line: 132, column: 3 } }, line: 123 }, '16': { name: 'modified', decl: { start: { line: 133, column: 21 }, end: { line: 133, column: 29 } }, loc: { start: { line: 133, column: 57 }, end: { line: 142, column: 3 } }, line: 133 }, '17': { name: 'deleted', decl: { start: { line: 143, column: 20 }, end: { line: 143, column: 27 } }, loc: { start: { line: 143, column: 55 }, end: { line: 152, column: 3 } }, line: 143 }, '18': { name: 'moved', decl: { start: { line: 153, column: 18 }, end: { line: 153, column: 23 } }, loc: { start: { line: 153, column: 51 }, end: { line: 155, column: 3 } }, line: 153 }, '19': { name: 'textdiff', decl: { start: { line: 156, column: 21 }, end: { line: 156, column: 29 } }, loc: { start: { line: 156, column: 57 }, end: { line: 159, column: 3 } }, line: 156 }, '20': { name: 'formatAnyChange', decl: { start: { line: 162, column: 31 }, end: { line: 162, column: 46 } }, loc: { start: { line: 162, column: 63 }, end: { line: 179, column: 1 } }, line: 162 }, '21': { name: '(anonymous_21)', decl: { start: { line: 166, column: 35 }, end: { line: 166, column: 36 } }, loc: { start: { line: 166, column: 51 }, end: { line: 171, column: 3 } }, line: 166 }, '22': { name: 'format', decl: { start: { line: 195, column: 16 }, end: { line: 195, column: 22 } }, loc: { start: { line: 195, column: 36 }, end: { line: 200, column: 1 } }, line: 195 } }, branchMap: { '0': { loc: { start: { line: 9, column: 62 }, end: { line: 9, column: 135 } }, type: 'binary-expr', locations: [{ start: { line: 9, column: 62 }, end: { line: 9, column: 90 } }, { start: { line: 9, column: 94 }, end: { line: 9, column: 135 } }], line: 9 }, '1': { loc: { start: { line: 18, column: 23 }, end: { line: 18, column: 116 } }, type: 'binary-expr', locations: [{ start: { line: 18, column: 23 }, end: { line: 18, column: 61 } }, { start: { line: 18, column: 65 }, end: { line: 18, column: 116 } }], line: 18 }, '2': { loc: { start: { line: 20, column: 28 }, end: { line: 20, column: 49 } }, type: 'binary-expr', locations: [{ start: { line: 20, column: 28 }, end: { line: 20, column: 44 } }, { start: { line: 20, column: 48 }, end: { line: 20, column: 49 } }], line: 20 }, '3': { loc: { start: { line: 20, column: 54 }, end: { line: 20, column: 96 } }, type: 'cond-expr', locations: [{ start: { line: 20, column: 86 }, end: { line: 20, column: 87 } }, { start: { line: 20, column: 90 }, end: { line: 20, column: 96 } }], line: 20 }, '4': { loc: { start: { line: 59, column: 6 }, end: { line: 62, column: 7 } }, type: 'if', locations: [{ start: { line: 59, column: 6 }, end: { line: 62, column: 7 } }, { start: { line: 59, column: 6 }, end: { line: 62, column: 7 } }], line: 59 }, '5': { loc: { start: { line: 63, column: 6 }, end: { line: 65, column: 7 } }, type: 'if', locations: [{ start: { line: 63, column: 6 }, end: { line: 65, column: 7 } }, { start: { line: 63, column: 6 }, end: { line: 65, column: 7 } }], line: 63 }, '6': { loc: { start: { line: 70, column: 6 }, end: { line: 73, column: 7 } }, type: 'if', locations: [{ start: { line: 70, column: 6 }, end: { line: 73, column: 7 } }, { start: { line: 70, column: 6 }, end: { line: 73, column: 7 } }], line: 70 }, '7': { loc: { start: { line: 80, column: 6 }, end: { line: 82, column: 7 } }, type: 'if', locations: [{ start: { line: 80, column: 6 }, end: { line: 82, column: 7 } }, { start: { line: 80, column: 6 }, end: { line: 82, column: 7 } }], line: 80 }, '8': { loc: { start: { line: 83, column: 6 }, end: { line: 85, column: 7 } }, type: 'if', locations: [{ start: { line: 83, column: 6 }, end: { line: 85, column: 7 } }, { start: { line: 83, column: 6 }, end: { line: 85, column: 7 } }], line: 83 }, '9': { loc: { start: { line: 90, column: 6 }, end: { line: 92, column: 7 } }, type: 'if', locations: [{ start: { line: 90, column: 6 }, end: { line: 92, column: 7 } }, { start: { line: 90, column: 6 }, end: { line: 92, column: 7 } }], line: 90 }, '10': { loc: { start: { line: 93, column: 25 }, end: { line: 93, column: 42 } }, type: 'cond-expr', locations: [{ start: { line: 93, column: 34 }, end: { line: 93, column: 36 } }, { start: { line: 93, column: 39 }, end: { line: 93, column: 42 } }], line: 93 }, '11': { loc: { start: { line: 125, column: 4 }, end: { line: 127, column: 5 } }, type: 'if', locations: [{ start: { line: 125, column: 4 }, end: { line: 127, column: 5 } }, { start: { line: 125, column: 4 }, end: { line: 127, column: 5 } }], line: 125 }, '12': { loc: { start: { line: 128, column: 4 }, end: { line: 130, column: 5 } }, type: 'if', locations: [{ start: { line: 128, column: 4 }, end: { line: 130, column: 5 } }, { start: { line: 128, column: 4 }, end: { line: 130, column: 5 } }], line: 128 }, '13': { loc: { start: { line: 135, column: 4 }, end: { line: 137, column: 5 } }, type: 'if', locations: [{ start: { line: 135, column: 4 }, end: { line: 137, column: 5 } }, { start: { line: 135, column: 4 }, end: { line: 137, column: 5 } }], line: 135 }, '14': { loc: { start: { line: 138, column: 4 }, end: { line: 140, column: 5 } }, type: 'if', locations: [{ start: { line: 138, column: 4 }, end: { line: 140, column: 5 } }, { start: { line: 138, column: 4 }, end: { line: 140, column: 5 } }], line: 138 }, '15': { loc: { start: { line: 145, column: 4 }, end: { line: 147, column: 5 } }, type: 'if', locations: [{ start: { line: 145, column: 4 }, end: { line: 147, column: 5 } }, { start: { line: 145, column: 4 }, end: { line: 147, column: 5 } }], line: 145 }, '16': { loc: { start: { line: 148, column: 4 }, end: { line: 150, column: 5 } }, type: 'if', locations: [{ start: { line: 148, column: 4 }, end: { line: 150, column: 5 } }, { start: { line: 148, column: 4 }, end: { line: 150, column: 5 } }], line: 148 }, '17': { loc: { start: { line: 157, column: 19 }, end: { line: 157, column: 155 } }, type: 'cond-expr', locations: [{ start: { line: 157, column: 52 }, end: { line: 157, column: 54 } }, { start: { line: 157, column: 57 }, end: { line: 157, column: 155 } }], line: 157 }, '18': { loc: { start: { line: 157, column: 57 }, end: { line: 157, column: 155 } }, type: 'cond-expr', locations: [{ start: { line: 157, column: 87 }, end: { line: 157, column: 109 } }, { start: { line: 157, column: 112 }, end: { line: 157, column: 155 } }], line: 157 }, '19': { loc: { start: { line: 165, column: 17 }, end: { line: 165, column: 98 } }, type: 'binary-expr', locations: [{ start: { line: 165, column: 17 }, end: { line: 165, column: 26 } }, { start: { line: 165, column: 30 }, end: { line: 165, column: 98 } }], line: 165 }, '20': { loc: { start: { line: 167, column: 4 }, end: { line: 169, column: 5 } }, type: 'if', locations: [{ start: { line: 167, column: 4 }, end: { line: 169, column: 5 } }, { start: { line: 167, column: 4 }, end: { line: 169, column: 5 } }], line: 167 }, '21': { loc: { start: { line: 172, column: 2 }, end: { line: 175, column: 3 } }, type: 'if', locations: [{ start: { line: 172, column: 2 }, end: { line: 175, column: 3 } }, { start: { line: 172, column: 2 }, end: { line: 175, column: 3 } }], line: 172 }, '22': { loc: { start: { line: 196, column: 2 }, end: { line: 198, column: 3 } }, type: 'if', locations: [{ start: { line: 196, column: 2 }, end: { line: 198, column: 3 } }, { start: { line: 196, column: 2 }, end: { line: 198, column: 3 } }], line: 196 } }, s: { '0': 0, '1': 0, '2': 0, '3': 0, '4': 0, '5': 0, '6': 0, '7': 0, '8': 0, '9': 0, '10': 0, '11': 0, '12': 0, '13': 0, '14': 0, '15': 0, '16': 0, '17': 0, '18': 0, '19': 0, '20': 0, '21': 0, '22': 0, '23': 0, '24': 0, '25': 0, '26': 0, '27': 0, '28': 0, '29': 0, '30': 0, '31': 0, '32': 0, '33': 0, '34': 0, '35': 0, '36': 0, '37': 0, '38': 0, '39': 0, '40': 0, '41': 0, '42': 0, '43': 0, '44': 0, '45': 0, '46': 0, '47': 0, '48': 0, '49': 0, '50': 0, '51': 0, '52': 0, '53': 0, '54': 0, '55': 0, '56': 0, '57': 0, '58': 0, '59': 0, '60': 0, '61': 0, '62': 0, '63': 0, '64': 0, '65': 0, '66': 0, '67': 0, '68': 0, '69': 0, '70': 0, '71': 0, '72': 0, '73': 0, '74': 0, '75': 0, '76': 0, '77': 0, '78': 0, '79': 0, '80': 0, '81': 0, '82': 0, '83': 0, '84': 0, '85': 0, '86': 0, '87': 0, '88': 0, '89': 0, '90': 0, '91': 0, '92': 0, '93': 0, '94': 0, '95': 0, '96': 0 }, f: { '0': 0, '1': 0, '2': 0, '3': 0, '4': 0, '5': 0, '6': 0, '7': 0, '8': 0, '9': 0, '10': 0, '11': 0, '12': 0, '13': 0, '14': 0, '15': 0, '16': 0, '17': 0, '18': 0, '19': 0, '20': 0, '21': 0, '22': 0 }, b: { '0': [0, 0], '1': [0, 0], '2': [0, 0], '3': [0, 0], '4': [0, 0], '5': [0, 0], '6': [0, 0], '7': [0, 0], '8': [0, 0], '9': [0, 0], '10': [0, 0], '11': [0, 0], '12': [0, 0], '13': [0, 0], '14': [0, 0], '15': [0, 0], '16': [0, 0], '17': [0, 0], '18': [0, 0], '19': [0, 0], '20': [0, 0], '21': [0, 0], '22': [0, 0] }, _coverageSchema: '332fd63041d2c1bcb487cc26dd0d5f7d97098a6c' },
      coverage = global[gcv] || (global[gcv] = {});if (coverage[path] && coverage[path].hash === hash) {
    return coverage[path];
  }coverageData.hash = hash;return coverage[path] = coverageData;
}();var AnnotatedFormatter = (cov_2nk80jg2to.s[0]++, function (_BaseFormatter) {
  cov_2nk80jg2to.f[0]++;cov_2nk80jg2to.s[1]++;inherits$1(AnnotatedFormatter, _BaseFormatter);function AnnotatedFormatter() {
    cov_2nk80jg2to.f[1]++;cov_2nk80jg2to.s[2]++;classCallCheck$1(this, AnnotatedFormatter);var _this = (cov_2nk80jg2to.s[3]++, possibleConstructorReturn$1(this, ((cov_2nk80jg2to.b[0][0]++, AnnotatedFormatter.__proto__) || (cov_2nk80jg2to.b[0][1]++, Object.getPrototypeOf(AnnotatedFormatter))).call(this)));cov_2nk80jg2to.s[4]++;_this.includeMoveDestinations = false;cov_2nk80jg2to.s[5]++;return _this;
  }cov_2nk80jg2to.s[6]++;createClass$1(AnnotatedFormatter, [{ key: 'prepareContext', value: function prepareContext(context) {
      cov_2nk80jg2to.f[2]++;cov_2nk80jg2to.s[7]++;get$1((cov_2nk80jg2to.b[1][0]++, AnnotatedFormatter.prototype.__proto__) || (cov_2nk80jg2to.b[1][1]++, Object.getPrototypeOf(AnnotatedFormatter.prototype)), 'prepareContext', this).call(this, context);cov_2nk80jg2to.s[8]++;context.indent = function (levels) {
        cov_2nk80jg2to.f[3]++;cov_2nk80jg2to.s[9]++;this.indentLevel = ((cov_2nk80jg2to.b[2][0]++, this.indentLevel) || (cov_2nk80jg2to.b[2][1]++, 0)) + (typeof levels === 'undefined' ? (cov_2nk80jg2to.b[3][0]++, 1) : (cov_2nk80jg2to.b[3][1]++, levels));cov_2nk80jg2to.s[10]++;this.indentPad = new Array(this.indentLevel + 1).join('&nbsp;&nbsp;');
      };cov_2nk80jg2to.s[11]++;context.row = function (json, htmlNote) {
        cov_2nk80jg2to.f[4]++;cov_2nk80jg2to.s[12]++;context.out('<tr><td style="white-space: nowrap;">' + '<pre class="jsondiffpatch-annotated-indent"' + ' style="display: inline-block">');cov_2nk80jg2to.s[13]++;context.out(context.indentPad);cov_2nk80jg2to.s[14]++;context.out('</pre><pre style="display: inline-block">');cov_2nk80jg2to.s[15]++;context.out(json);cov_2nk80jg2to.s[16]++;context.out('</pre></td><td class="jsondiffpatch-delta-note"><div>');cov_2nk80jg2to.s[17]++;context.out(htmlNote);cov_2nk80jg2to.s[18]++;context.out('</div></td></tr>');
      };
    } }, { key: 'typeFormattterErrorFormatter', value: function typeFormattterErrorFormatter(context, err) {
      cov_2nk80jg2to.f[5]++;cov_2nk80jg2to.s[19]++;context.row('', '<pre class="jsondiffpatch-error">' + err + '</pre>');
    } }, { key: 'formatTextDiffString', value: function formatTextDiffString(context, value) {
      cov_2nk80jg2to.f[6]++;var lines = (cov_2nk80jg2to.s[20]++, this.parseTextDiff(value));cov_2nk80jg2to.s[21]++;context.out('<ul class="jsondiffpatch-textdiff">');cov_2nk80jg2to.s[22]++;for (var i = 0, l = lines.length; i < l; i++) {
        var line = (cov_2nk80jg2to.s[23]++, lines[i]);cov_2nk80jg2to.s[24]++;context.out('<li><div class="jsondiffpatch-textdiff-location">' + ('<span class="jsondiffpatch-textdiff-line-number">' + line.location.line + '</span><span class="jsondiffpatch-textdiff-char">' + line.location.chr + '</span></div><div class="jsondiffpatch-textdiff-line">'));var pieces = (cov_2nk80jg2to.s[25]++, line.pieces);cov_2nk80jg2to.s[26]++;for (var pieceIndex = 0, piecesLength = pieces.length; pieceIndex < piecesLength; pieceIndex++) {
          var piece = (cov_2nk80jg2to.s[27]++, pieces[pieceIndex]);cov_2nk80jg2to.s[28]++;context.out('<span class="jsondiffpatch-textdiff-' + piece.type + '">' + piece.text + '</span>');
        }cov_2nk80jg2to.s[29]++;context.out('</div></li>');
      }cov_2nk80jg2to.s[30]++;context.out('</ul>');
    } }, { key: 'rootBegin', value: function rootBegin(context, type, nodeType) {
      cov_2nk80jg2to.f[7]++;cov_2nk80jg2to.s[31]++;context.out('<table class="jsondiffpatch-annotated-delta">');cov_2nk80jg2to.s[32]++;if (type === 'node') {
        cov_2nk80jg2to.b[4][0]++;cov_2nk80jg2to.s[33]++;context.row('{');cov_2nk80jg2to.s[34]++;context.indent();
      } else {
        cov_2nk80jg2to.b[4][1]++;
      }cov_2nk80jg2to.s[35]++;if (nodeType === 'array') {
        cov_2nk80jg2to.b[5][0]++;cov_2nk80jg2to.s[36]++;context.row('"_t": "a",', 'Array delta (member names indicate array indices)');
      } else {
        cov_2nk80jg2to.b[5][1]++;
      }
    } }, { key: 'rootEnd', value: function rootEnd(context, type) {
      cov_2nk80jg2to.f[8]++;cov_2nk80jg2to.s[37]++;if (type === 'node') {
        cov_2nk80jg2to.b[6][0]++;cov_2nk80jg2to.s[38]++;context.indent(-1);cov_2nk80jg2to.s[39]++;context.row('}');
      } else {
        cov_2nk80jg2to.b[6][1]++;
      }cov_2nk80jg2to.s[40]++;context.out('</table>');
    } }, { key: 'nodeBegin', value: function nodeBegin(context, key, leftKey, type, nodeType) {
      cov_2nk80jg2to.f[9]++;cov_2nk80jg2to.s[41]++;context.row('&quot;' + key + '&quot;: {');cov_2nk80jg2to.s[42]++;if (type === 'node') {
        cov_2nk80jg2to.b[7][0]++;cov_2nk80jg2to.s[43]++;context.indent();
      } else {
        cov_2nk80jg2to.b[7][1]++;
      }cov_2nk80jg2to.s[44]++;if (nodeType === 'array') {
        cov_2nk80jg2to.b[8][0]++;cov_2nk80jg2to.s[45]++;context.row('"_t": "a",', 'Array delta (member names indicate array indices)');
      } else {
        cov_2nk80jg2to.b[8][1]++;
      }
    } }, { key: 'nodeEnd', value: function nodeEnd(context, key, leftKey, type, nodeType, isLast) {
      cov_2nk80jg2to.f[10]++;cov_2nk80jg2to.s[46]++;if (type === 'node') {
        cov_2nk80jg2to.b[9][0]++;cov_2nk80jg2to.s[47]++;context.indent(-1);
      } else {
        cov_2nk80jg2to.b[9][1]++;
      }cov_2nk80jg2to.s[48]++;context.row('}' + (isLast ? (cov_2nk80jg2to.b[10][0]++, '') : (cov_2nk80jg2to.b[10][1]++, ',')));
    } }, { key: 'format_unchanged', value: function format_unchanged() {
      cov_2nk80jg2to.f[11]++;
    } }, { key: 'format_movedestination', value: function format_movedestination() {
      cov_2nk80jg2to.f[12]++;
    } }, { key: 'format_node', value: function format_node(context, delta, left) {
      cov_2nk80jg2to.f[13]++;cov_2nk80jg2to.s[49]++;this.formatDeltaChildren(context, delta, left);
    } }]);cov_2nk80jg2to.s[50]++;return AnnotatedFormatter;
}(BaseFormatter));cov_2nk80jg2to.s[51]++;var wrapPropertyName = function wrapPropertyName(name) {
  cov_2nk80jg2to.f[14]++;cov_2nk80jg2to.s[52]++;return '<pre style="display:inline-block">&quot;' + name + '&quot;</pre>';
};var deltaAnnotations = (cov_2nk80jg2to.s[53]++, { added: function added(delta, left, key, leftKey) {
    cov_2nk80jg2to.f[15]++;var formatLegend = (cov_2nk80jg2to.s[54]++, ' <pre>([newValue])</pre>');cov_2nk80jg2to.s[55]++;if (typeof leftKey === 'undefined') {
      cov_2nk80jg2to.b[11][0]++;cov_2nk80jg2to.s[56]++;return 'new value' + formatLegend;
    } else {
      cov_2nk80jg2to.b[11][1]++;
    }cov_2nk80jg2to.s[57]++;if (typeof leftKey === 'number') {
      cov_2nk80jg2to.b[12][0]++;cov_2nk80jg2to.s[58]++;return 'insert at index ' + leftKey + formatLegend;
    } else {
      cov_2nk80jg2to.b[12][1]++;
    }cov_2nk80jg2to.s[59]++;return 'add property ' + wrapPropertyName(leftKey) + formatLegend;
  }, modified: function modified(delta, left, key, leftKey) {
    cov_2nk80jg2to.f[16]++;var formatLegend = (cov_2nk80jg2to.s[60]++, ' <pre>([previousValue, newValue])</pre>');cov_2nk80jg2to.s[61]++;if (typeof leftKey === 'undefined') {
      cov_2nk80jg2to.b[13][0]++;cov_2nk80jg2to.s[62]++;return 'modify value' + formatLegend;
    } else {
      cov_2nk80jg2to.b[13][1]++;
    }cov_2nk80jg2to.s[63]++;if (typeof leftKey === 'number') {
      cov_2nk80jg2to.b[14][0]++;cov_2nk80jg2to.s[64]++;return 'modify at index ' + leftKey + formatLegend;
    } else {
      cov_2nk80jg2to.b[14][1]++;
    }cov_2nk80jg2to.s[65]++;return 'modify property ' + wrapPropertyName(leftKey) + formatLegend;
  }, deleted: function deleted(delta, left, key, leftKey) {
    cov_2nk80jg2to.f[17]++;var formatLegend = (cov_2nk80jg2to.s[66]++, ' <pre>([previousValue, 0, 0])</pre>');cov_2nk80jg2to.s[67]++;if (typeof leftKey === 'undefined') {
      cov_2nk80jg2to.b[15][0]++;cov_2nk80jg2to.s[68]++;return 'delete value' + formatLegend;
    } else {
      cov_2nk80jg2to.b[15][1]++;
    }cov_2nk80jg2to.s[69]++;if (typeof leftKey === 'number') {
      cov_2nk80jg2to.b[16][0]++;cov_2nk80jg2to.s[70]++;return 'remove index ' + leftKey + formatLegend;
    } else {
      cov_2nk80jg2to.b[16][1]++;
    }cov_2nk80jg2to.s[71]++;return 'delete property ' + wrapPropertyName(leftKey) + formatLegend;
  }, moved: function moved(delta, left, key, leftKey) {
    cov_2nk80jg2to.f[18]++;cov_2nk80jg2to.s[72]++;return 'move from <span title="(position to remove at original state)">' + ('index ' + leftKey + '</span> to <span title="(position to insert at final') + (' state)">index ' + delta[1] + '</span>');
  }, textdiff: function textdiff(delta, left, key, leftKey) {
    cov_2nk80jg2to.f[19]++;var location = (cov_2nk80jg2to.s[73]++, typeof leftKey === 'undefined' ? (cov_2nk80jg2to.b[17][0]++, '') : (cov_2nk80jg2to.b[17][1]++, typeof leftKey === 'number' ? (cov_2nk80jg2to.b[18][0]++, ' at index ' + leftKey) : (cov_2nk80jg2to.b[18][1]++, ' at property ' + wrapPropertyName(leftKey))));cov_2nk80jg2to.s[74]++;return 'text diff' + location + ', format is <a href="https://code.google.com/' + 'p/google-diff-match-patch/wiki/Unidiff">a variation of Unidiff</a>';
  } });cov_2nk80jg2to.s[75]++;var formatAnyChange = function formatAnyChange(context, delta) {
  cov_2nk80jg2to.f[20]++;var deltaType = (cov_2nk80jg2to.s[76]++, this.getDeltaType(delta));var annotator = (cov_2nk80jg2to.s[77]++, deltaAnnotations[deltaType]);var htmlNote = (cov_2nk80jg2to.s[78]++, (cov_2nk80jg2to.b[19][0]++, annotator) && (cov_2nk80jg2to.b[19][1]++, annotator.apply(annotator, Array.prototype.slice.call(arguments, 1))));var json = (cov_2nk80jg2to.s[79]++, JSON.stringify(delta, function (k, v) {
    cov_2nk80jg2to.f[21]++;cov_2nk80jg2to.s[80]++;if (typeof v === 'bigint') {
      cov_2nk80jg2to.b[20][0]++;cov_2nk80jg2to.s[81]++;return 'Bigint=' + v.toString();
    } else {
      cov_2nk80jg2to.b[20][1]++;
    }cov_2nk80jg2to.s[82]++;return v;
  }, 2));cov_2nk80jg2to.s[83]++;if (deltaType === 'textdiff') {
    cov_2nk80jg2to.b[21][0]++;cov_2nk80jg2to.s[84]++;json = json.split('\\n').join('\\n"+\n   "');
  } else {
    cov_2nk80jg2to.b[21][1]++;
  }cov_2nk80jg2to.s[85]++;context.indent();cov_2nk80jg2to.s[86]++;context.row(json, htmlNote);cov_2nk80jg2to.s[87]++;context.indent(-1);
};cov_2nk80jg2to.s[88]++;AnnotatedFormatter.prototype.format_added = formatAnyChange;cov_2nk80jg2to.s[89]++;AnnotatedFormatter.prototype.format_modified = formatAnyChange;cov_2nk80jg2to.s[90]++;AnnotatedFormatter.prototype.format_deleted = formatAnyChange;cov_2nk80jg2to.s[91]++;AnnotatedFormatter.prototype.format_moved = formatAnyChange;cov_2nk80jg2to.s[92]++;AnnotatedFormatter.prototype.format_textdiff = formatAnyChange;var defaultInstance$1 = (cov_2nk80jg2to.s[93]++, void 0);function format$1(delta, left) {
  cov_2nk80jg2to.f[22]++;cov_2nk80jg2to.s[94]++;if (!defaultInstance$1) {
    cov_2nk80jg2to.b[22][0]++;cov_2nk80jg2to.s[95]++;defaultInstance$1 = new AnnotatedFormatter();
  } else {
    cov_2nk80jg2to.b[22][1]++;
  }cov_2nk80jg2to.s[96]++;return defaultInstance$1.format(delta, left);
}

var annotated = Object.freeze({
  default: AnnotatedFormatter,
  format: format$1
});

var cov_2alqf5qvqe = function () {
  var path = '/Users/wangjie/project/plugins/jsondiffpatch/src/formatters/jsonpatch.js',
      hash = '8b4506dbf56030a19f74e77ada453367b25307f2',
      Function = function () {}.constructor,
      global = new Function('return this')(),
      gcv = '__coverage__',
      coverageData = { path: '/Users/wangjie/project/plugins/jsondiffpatch/src/formatters/jsonpatch.js', statementMap: { '0': { start: { line: 3, column: 17 }, end: { line: 8, column: 1 } }, '1': { start: { line: 10, column: 20 }, end: { line: 137, column: 16 } }, '2': { start: { line: 11, column: 2 }, end: { line: 11, column: 55 } }, '3': { start: { line: 14, column: 4 }, end: { line: 14, column: 53 } }, '4': { start: { line: 16, column: 16 }, end: { line: 16, column: 138 } }, '5': { start: { line: 18, column: 4 }, end: { line: 18, column: 41 } }, '6': { start: { line: 19, column: 4 }, end: { line: 19, column: 17 } }, '7': { start: { line: 22, column: 2 }, end: { line: 135, column: 6 } }, '8': { start: { line: 25, column: 6 }, end: { line: 25, column: 152 } }, '9': { start: { line: 26, column: 6 }, end: { line: 26, column: 26 } }, '10': { start: { line: 27, column: 6 }, end: { line: 27, column: 24 } }, '11': { start: { line: 28, column: 6 }, end: { line: 40, column: 8 } }, '12': { start: { line: 29, column: 17 }, end: { line: 29, column: 23 } }, '13': { start: { line: 30, column: 20 }, end: { line: 30, column: 29 } }, '14': { start: { line: 32, column: 18 }, end: { line: 35, column: 9 } }, '15': { start: { line: 36, column: 8 }, end: { line: 38, column: 9 } }, '16': { start: { line: 37, column: 10 }, end: { line: 37, column: 28 } }, '17': { start: { line: 39, column: 8 }, end: { line: 39, column: 30 } }, '18': { start: { line: 42, column: 6 }, end: { line: 49, column: 8 } }, '19': { start: { line: 43, column: 19 }, end: { line: 43, column: 37 } }, '20': { start: { line: 44, column: 8 }, end: { line: 48, column: 11 } }, '21': { start: { line: 51, column: 6 }, end: { line: 53, column: 8 } }, '22': { start: { line: 52, column: 8 }, end: { line: 52, column: 41 } }, '23': { start: { line: 55, column: 6 }, end: { line: 59, column: 8 } }, '24': { start: { line: 56, column: 17 }, end: { line: 56, column: 34 } }, '25': { start: { line: 57, column: 8 }, end: { line: 57, column: 35 } }, '26': { start: { line: 58, column: 8 }, end: { line: 58, column: 34 } }, '27': { start: { line: 64, column: 6 }, end: { line: 64, column: 36 } }, '28': { start: { line: 75, column: 17 }, end: { line: 75, column: 26 } }, '29': { start: { line: 77, column: 6 }, end: { line: 77, column: 25 } }, '30': { start: { line: 82, column: 17 }, end: { line: 82, column: 27 } }, '31': { start: { line: 84, column: 6 }, end: { line: 84, column: 17 } }, '32': { start: { line: 99, column: 6 }, end: { line: 99, column: 53 } }, '33': { start: { line: 104, column: 6 }, end: { line: 104, column: 69 } }, '34': { start: { line: 109, column: 6 }, end: { line: 109, column: 73 } }, '35': { start: { line: 114, column: 6 }, end: { line: 114, column: 55 } }, '36': { start: { line: 119, column: 15 }, end: { line: 119, column: 23 } }, '37': { start: { line: 120, column: 6 }, end: { line: 120, column: 29 } }, '38': { start: { line: 125, column: 6 }, end: { line: 125, column: 41 } }, '39': { start: { line: 130, column: 20 }, end: { line: 130, column: 22 } }, '40': { start: { line: 131, column: 6 }, end: { line: 131, column: 35 } }, '41': { start: { line: 132, column: 6 }, end: { line: 132, column: 41 } }, '42': { start: { line: 133, column: 6 }, end: { line: 133, column: 28 } }, '43': { start: { line: 136, column: 2 }, end: { line: 136, column: 23 } }, '44': { start: { line: 144, column: 11 }, end: { line: 146, column: 1 } }, '45': { start: { line: 145, column: 2 }, end: { line: 145, column: 29 } }, '46': { start: { line: 148, column: 13 }, end: { line: 151, column: 1 } }, '47': { start: { line: 149, column: 2 }, end: { line: 149, column: 17 } }, '48': { start: { line: 150, column: 2 }, end: { line: 150, column: 13 } }, '49': { start: { line: 153, column: 25 }, end: { line: 161, column: 1 } }, '50': { start: { line: 154, column: 14 }, end: { line: 154, column: 34 } }, '51': { start: { line: 155, column: 14 }, end: { line: 155, column: 34 } }, '52': { start: { line: 156, column: 2 }, end: { line: 160, column: 3 } }, '53': { start: { line: 157, column: 4 }, end: { line: 157, column: 25 } }, '54': { start: { line: 159, column: 4 }, end: { line: 159, column: 13 } }, '55': { start: { line: 163, column: 27 }, end: { line: 173, column: 1 } }, '56': { start: { line: 164, column: 2 }, end: { line: 172, column: 5 } }, '57': { start: { line: 165, column: 17 }, end: { line: 165, column: 34 } }, '58': { start: { line: 166, column: 17 }, end: { line: 166, column: 34 } }, '59': { start: { line: 167, column: 4 }, end: { line: 171, column: 5 } }, '60': { start: { line: 168, column: 6 }, end: { line: 168, column: 43 } }, '61': { start: { line: 170, column: 6 }, end: { line: 170, column: 60 } }, '62': { start: { line: 175, column: 26 }, end: { line: 191, column: 1 } }, '63': { start: { line: 176, column: 16 }, end: { line: 178, column: 4 } }, '64': { start: { line: 177, column: 4 }, end: { line: 177, column: 14 } }, '65': { start: { line: 179, column: 2 }, end: { line: 190, column: 14 } }, '66': { start: { line: 180, column: 19 }, end: { line: 182, column: 20 } }, '67': { start: { line: 181, column: 6 }, end: { line: 181, column: 22 } }, '68': { start: { line: 183, column: 4 }, end: { line: 185, column: 5 } }, '69': { start: { line: 184, column: 6 }, end: { line: 184, column: 28 } }, '70': { start: { line: 186, column: 4 }, end: { line: 186, column: 46 } }, '71': { start: { line: 188, column: 4 }, end: { line: 188, column: 39 } }, '72': { start: { line: 189, column: 4 }, end: { line: 189, column: 15 } }, '73': { start: { line: 192, column: 15 }, end: { line: 195, column: 1 } }, '74': { start: { line: 193, column: 11 }, end: { line: 193, column: 19 } }, '75': { start: { line: 194, column: 2 }, end: { line: 194, column: 23 } }, '76': { start: { line: 196, column: 17 }, end: { line: 199, column: 1 } }, '77': { start: { line: 197, column: 11 }, end: { line: 197, column: 19 } }, '78': { start: { line: 198, column: 2 }, end: { line: 198, column: 25 } }, '79': { start: { line: 201, column: 17 }, end: { line: 210, column: 1 } }, '80': { start: { line: 202, column: 22 }, end: { line: 202, column: 64 } }, '81': { start: { line: 203, column: 23 }, end: { line: 203, column: 67 } }, '82': { start: { line: 204, column: 16 }, end: { line: 204, column: 33 } }, '83': { start: { line: 205, column: 19 }, end: { line: 205, column: 36 } }, '84': { start: { line: 206, column: 16 }, end: { line: 206, column: 33 } }, '85': { start: { line: 208, column: 25 }, end: { line: 208, column: 57 } }, '86': { start: { line: 209, column: 2 }, end: { line: 209, column: 151 } }, '87': { start: { line: 212, column: 22 }, end: { line: 212, column: 28 } }, '88': { start: { line: 214, column: 20 }, end: { line: 219, column: 1 } }, '89': { start: { line: 215, column: 2 }, end: { line: 217, column: 3 } }, '90': { start: { line: 216, column: 4 }, end: { line: 216, column: 42 } }, '91': { start: { line: 218, column: 2 }, end: { line: 218, column: 57 } }, '92': { start: { line: 221, column: 17 }, end: { line: 223, column: 1 } }, '93': { start: { line: 222, column: 2 }, end: { line: 222, column: 35 } } }, fnMap: { '0': { name: '(anonymous_0)', decl: { start: { line: 10, column: 20 }, end: { line: 10, column: 21 } }, loc: { start: { line: 10, column: 46 }, end: { line: 137, column: 1 } }, line: 10 }, '1': { name: 'JSONFormatter', decl: { start: { line: 13, column: 11 }, end: { line: 13, column: 24 } }, loc: { start: { line: 13, column: 27 }, end: { line: 20, column: 3 } }, line: 13 }, '2': { name: 'prepareContext', decl: { start: { line: 24, column: 20 }, end: { line: 24, column: 34 } }, loc: { start: { line: 24, column: 44 }, end: { line: 60, column: 5 } }, line: 24 }, '3': { name: '(anonymous_3)', decl: { start: { line: 28, column: 30 }, end: { line: 28, column: 31 } }, loc: { start: { line: 28, column: 45 }, end: { line: 40, column: 7 } }, line: 28 }, '4': { name: '(anonymous_4)', decl: { start: { line: 42, column: 27 }, end: { line: 42, column: 28 } }, loc: { start: { line: 42, column: 41 }, end: { line: 49, column: 7 } }, line: 42 }, '5': { name: '(anonymous_5)', decl: { start: { line: 51, column: 28 }, end: { line: 51, column: 29 } }, loc: { start: { line: 51, column: 40 }, end: { line: 53, column: 7 } }, line: 51 }, '6': { name: '(anonymous_6)', decl: { start: { line: 55, column: 23 }, end: { line: 55, column: 24 } }, loc: { start: { line: 55, column: 41 }, end: { line: 59, column: 7 } }, line: 55 }, '7': { name: 'typeFormattterErrorFormatter', decl: { start: { line: 63, column: 20 }, end: { line: 63, column: 48 } }, loc: { start: { line: 63, column: 63 }, end: { line: 65, column: 5 } }, line: 63 }, '8': { name: 'rootBegin', decl: { start: { line: 68, column: 20 }, end: { line: 68, column: 29 } }, loc: { start: { line: 68, column: 32 }, end: { line: 68, column: 34 } }, line: 68 }, '9': { name: 'rootEnd', decl: { start: { line: 71, column: 20 }, end: { line: 71, column: 27 } }, loc: { start: { line: 71, column: 30 }, end: { line: 71, column: 32 } }, line: 71 }, '10': { name: 'nodeBegin', decl: { start: { line: 74, column: 20 }, end: { line: 74, column: 29 } }, loc: { start: { line: 74, column: 50 }, end: { line: 78, column: 5 } }, line: 74 }, '11': { name: 'nodeEnd', decl: { start: { line: 81, column: 20 }, end: { line: 81, column: 27 } }, loc: { start: { line: 81, column: 35 }, end: { line: 85, column: 5 } }, line: 81 }, '12': { name: 'format_unchanged', decl: { start: { line: 92, column: 20 }, end: { line: 92, column: 36 } }, loc: { start: { line: 92, column: 39 }, end: { line: 92, column: 41 } }, line: 92 }, '13': { name: 'format_movedestination', decl: { start: { line: 95, column: 20 }, end: { line: 95, column: 42 } }, loc: { start: { line: 95, column: 45 }, end: { line: 95, column: 47 } }, line: 95 }, '14': { name: 'format_node', decl: { start: { line: 98, column: 20 }, end: { line: 98, column: 31 } }, loc: { start: { line: 98, column: 54 }, end: { line: 100, column: 5 } }, line: 98 }, '15': { name: 'format_added', decl: { start: { line: 103, column: 20 }, end: { line: 103, column: 32 } }, loc: { start: { line: 103, column: 49 }, end: { line: 105, column: 5 } }, line: 103 }, '16': { name: 'format_modified', decl: { start: { line: 108, column: 20 }, end: { line: 108, column: 35 } }, loc: { start: { line: 108, column: 52 }, end: { line: 110, column: 5 } }, line: 108 }, '17': { name: 'format_deleted', decl: { start: { line: 113, column: 20 }, end: { line: 113, column: 34 } }, loc: { start: { line: 113, column: 44 }, end: { line: 115, column: 5 } }, line: 113 }, '18': { name: 'format_moved', decl: { start: { line: 118, column: 20 }, end: { line: 118, column: 32 } }, loc: { start: { line: 118, column: 49 }, end: { line: 121, column: 5 } }, line: 118 }, '19': { name: 'format_textdiff', decl: { start: { line: 124, column: 20 }, end: { line: 124, column: 35 } }, loc: { start: { line: 124, column: 38 }, end: { line: 126, column: 5 } }, line: 124 }, '20': { name: 'format', decl: { start: { line: 129, column: 20 }, end: { line: 129, column: 26 } }, loc: { start: { line: 129, column: 40 }, end: { line: 134, column: 5 } }, line: 129 }, '21': { name: 'last', decl: { start: { line: 144, column: 20 }, end: { line: 144, column: 24 } }, loc: { start: { line: 144, column: 30 }, end: { line: 146, column: 1 } }, line: 144 }, '22': { name: 'sortBy', decl: { start: { line: 148, column: 22 }, end: { line: 148, column: 28 } }, loc: { start: { line: 148, column: 40 }, end: { line: 151, column: 1 } }, line: 148 }, '23': { name: 'compareByIndexDesc', decl: { start: { line: 153, column: 34 }, end: { line: 153, column: 52 } }, loc: { start: { line: 153, column: 69 }, end: { line: 161, column: 1 } }, line: 153 }, '24': { name: 'opsByDescendingOrder', decl: { start: { line: 163, column: 36 }, end: { line: 163, column: 56 } }, loc: { start: { line: 163, column: 68 }, end: { line: 173, column: 1 } }, line: 163 }, '25': { name: '(anonymous_25)', decl: { start: { line: 164, column: 27 }, end: { line: 164, column: 28 } }, loc: { start: { line: 164, column: 43 }, end: { line: 172, column: 3 } }, line: 164 }, '26': { name: 'partitionOps', decl: { start: { line: 175, column: 35 }, end: { line: 175, column: 47 } }, loc: { start: { line: 175, column: 58 }, end: { line: 191, column: 1 } }, line: 175 }, '27': { name: '(anonymous_27)', decl: { start: { line: 176, column: 49 }, end: { line: 176, column: 50 } }, loc: { start: { line: 176, column: 61 }, end: { line: 178, column: 3 } }, line: 176 }, '28': { name: '(anonymous_28)', decl: { start: { line: 179, column: 17 }, end: { line: 179, column: 18 } }, loc: { start: { line: 179, column: 33 }, end: { line: 187, column: 3 } }, line: 179 }, '29': { name: '(anonymous_29)', decl: { start: { line: 180, column: 27 }, end: { line: 180, column: 28 } }, loc: { start: { line: 180, column: 41 }, end: { line: 182, column: 5 } }, line: 180 }, '30': { name: '(anonymous_30)', decl: { start: { line: 187, column: 12 }, end: { line: 187, column: 13 } }, loc: { start: { line: 187, column: 33 }, end: { line: 190, column: 3 } }, line: 187 }, '31': { name: 'isMoveOp', decl: { start: { line: 192, column: 24 }, end: { line: 192, column: 32 } }, loc: { start: { line: 192, column: 40 }, end: { line: 195, column: 1 } }, line: 192 }, '32': { name: 'isRemoveOp', decl: { start: { line: 196, column: 26 }, end: { line: 196, column: 36 } }, loc: { start: { line: 196, column: 44 }, end: { line: 199, column: 1 } }, line: 196 }, '33': { name: 'reorderOps', decl: { start: { line: 201, column: 26 }, end: { line: 201, column: 36 } }, loc: { start: { line: 201, column: 43 }, end: { line: 210, column: 1 } }, line: 201 }, '34': { name: 'format', decl: { start: { line: 214, column: 29 }, end: { line: 214, column: 35 } }, loc: { start: { line: 214, column: 49 }, end: { line: 219, column: 1 } }, line: 214 }, '35': { name: 'log', decl: { start: { line: 221, column: 26 }, end: { line: 221, column: 29 } }, loc: { start: { line: 221, column: 43 }, end: { line: 223, column: 1 } }, line: 221 } }, branchMap: { '0': { loc: { start: { line: 16, column: 62 }, end: { line: 16, column: 125 } }, type: 'binary-expr', locations: [{ start: { line: 16, column: 62 }, end: { line: 16, column: 85 } }, { start: { line: 16, column: 89 }, end: { line: 16, column: 125 } }], line: 16 }, '1': { loc: { start: { line: 25, column: 23 }, end: { line: 25, column: 106 } }, type: 'binary-expr', locations: [{ start: { line: 25, column: 23 }, end: { line: 25, column: 56 } }, { start: { line: 25, column: 60 }, end: { line: 25, column: 106 } }], line: 25 }, '2': { loc: { start: { line: 36, column: 8 }, end: { line: 38, column: 9 } }, type: 'if', locations: [{ start: { line: 36, column: 8 }, end: { line: 38, column: 9 } }, { start: { line: 36, column: 8 }, end: { line: 38, column: 9 } }], line: 36 }, '3': { loc: { start: { line: 156, column: 2 }, end: { line: 160, column: 3 } }, type: 'if', locations: [{ start: { line: 156, column: 2 }, end: { line: 160, column: 3 } }, { start: { line: 156, column: 2 }, end: { line: 160, column: 3 } }], line: 156 }, '4': { loc: { start: { line: 156, column: 8 }, end: { line: 156, column: 36 } }, type: 'binary-expr', locations: [{ start: { line: 156, column: 8 }, end: { line: 156, column: 20 } }, { start: { line: 156, column: 24 }, end: { line: 156, column: 36 } }], line: 156 }, '5': { loc: { start: { line: 167, column: 4 }, end: { line: 171, column: 5 } }, type: 'if', locations: [{ start: { line: 167, column: 4 }, end: { line: 171, column: 5 } }, { start: { line: 167, column: 4 }, end: { line: 171, column: 5 } }], line: 167 }, '6': { loc: { start: { line: 183, column: 4 }, end: { line: 185, column: 5 } }, type: 'if', locations: [{ start: { line: 183, column: 4 }, end: { line: 185, column: 5 } }, { start: { line: 183, column: 4 }, end: { line: 185, column: 5 } }], line: 183 }, '7': { loc: { start: { line: 215, column: 2 }, end: { line: 217, column: 3 } }, type: 'if', locations: [{ start: { line: 215, column: 2 }, end: { line: 217, column: 3 } }, { start: { line: 215, column: 2 }, end: { line: 217, column: 3 } }], line: 215 } }, s: { '0': 0, '1': 0, '2': 0, '3': 0, '4': 0, '5': 0, '6': 0, '7': 0, '8': 0, '9': 0, '10': 0, '11': 0, '12': 0, '13': 0, '14': 0, '15': 0, '16': 0, '17': 0, '18': 0, '19': 0, '20': 0, '21': 0, '22': 0, '23': 0, '24': 0, '25': 0, '26': 0, '27': 0, '28': 0, '29': 0, '30': 0, '31': 0, '32': 0, '33': 0, '34': 0, '35': 0, '36': 0, '37': 0, '38': 0, '39': 0, '40': 0, '41': 0, '42': 0, '43': 0, '44': 0, '45': 0, '46': 0, '47': 0, '48': 0, '49': 0, '50': 0, '51': 0, '52': 0, '53': 0, '54': 0, '55': 0, '56': 0, '57': 0, '58': 0, '59': 0, '60': 0, '61': 0, '62': 0, '63': 0, '64': 0, '65': 0, '66': 0, '67': 0, '68': 0, '69': 0, '70': 0, '71': 0, '72': 0, '73': 0, '74': 0, '75': 0, '76': 0, '77': 0, '78': 0, '79': 0, '80': 0, '81': 0, '82': 0, '83': 0, '84': 0, '85': 0, '86': 0, '87': 0, '88': 0, '89': 0, '90': 0, '91': 0, '92': 0, '93': 0 }, f: { '0': 0, '1': 0, '2': 0, '3': 0, '4': 0, '5': 0, '6': 0, '7': 0, '8': 0, '9': 0, '10': 0, '11': 0, '12': 0, '13': 0, '14': 0, '15': 0, '16': 0, '17': 0, '18': 0, '19': 0, '20': 0, '21': 0, '22': 0, '23': 0, '24': 0, '25': 0, '26': 0, '27': 0, '28': 0, '29': 0, '30': 0, '31': 0, '32': 0, '33': 0, '34': 0, '35': 0 }, b: { '0': [0, 0], '1': [0, 0], '2': [0, 0], '3': [0, 0], '4': [0, 0], '5': [0, 0], '6': [0, 0], '7': [0, 0] }, _coverageSchema: '332fd63041d2c1bcb487cc26dd0d5f7d97098a6c' },
      coverage = global[gcv] || (global[gcv] = {});if (coverage[path] && coverage[path].hash === hash) {
    return coverage[path];
  }coverageData.hash = hash;return coverage[path] = coverageData;
}();var OPERATIONS = (cov_2alqf5qvqe.s[0]++, { add: 'add', remove: 'remove', replace: 'replace', move: 'move' });var JSONFormatter = (cov_2alqf5qvqe.s[1]++, function (_BaseFormatter) {
  cov_2alqf5qvqe.f[0]++;cov_2alqf5qvqe.s[2]++;inherits$1(JSONFormatter, _BaseFormatter);function JSONFormatter() {
    cov_2alqf5qvqe.f[1]++;cov_2alqf5qvqe.s[3]++;classCallCheck$1(this, JSONFormatter);var _this = (cov_2alqf5qvqe.s[4]++, possibleConstructorReturn$1(this, ((cov_2alqf5qvqe.b[0][0]++, JSONFormatter.__proto__) || (cov_2alqf5qvqe.b[0][1]++, Object.getPrototypeOf(JSONFormatter))).call(this)));cov_2alqf5qvqe.s[5]++;_this.includeMoveDestinations = true;cov_2alqf5qvqe.s[6]++;return _this;
  }cov_2alqf5qvqe.s[7]++;createClass$1(JSONFormatter, [{ key: 'prepareContext', value: function prepareContext(context) {
      cov_2alqf5qvqe.f[2]++;cov_2alqf5qvqe.s[8]++;get$1((cov_2alqf5qvqe.b[1][0]++, JSONFormatter.prototype.__proto__) || (cov_2alqf5qvqe.b[1][1]++, Object.getPrototypeOf(JSONFormatter.prototype)), 'prepareContext', this).call(this, context);cov_2alqf5qvqe.s[9]++;context.result = [];cov_2alqf5qvqe.s[10]++;context.path = [];cov_2alqf5qvqe.s[11]++;context.pushCurrentOp = function (obj) {
        cov_2alqf5qvqe.f[3]++;var op = (cov_2alqf5qvqe.s[12]++, obj.op),
            value = (cov_2alqf5qvqe.s[13]++, obj.value);var val = (cov_2alqf5qvqe.s[14]++, { op: op, path: this.currentPath() });cov_2alqf5qvqe.s[15]++;if (typeof value !== 'undefined') {
          cov_2alqf5qvqe.b[2][0]++;cov_2alqf5qvqe.s[16]++;val.value = value;
        } else {
          cov_2alqf5qvqe.b[2][1]++;
        }cov_2alqf5qvqe.s[17]++;this.result.push(val);
      };cov_2alqf5qvqe.s[18]++;context.pushMoveOp = function (to) {
        cov_2alqf5qvqe.f[4]++;var from = (cov_2alqf5qvqe.s[19]++, this.currentPath());cov_2alqf5qvqe.s[20]++;this.result.push({ op: OPERATIONS.move, from: from, path: this.toPath(to) });
      };cov_2alqf5qvqe.s[21]++;context.currentPath = function () {
        cov_2alqf5qvqe.f[5]++;cov_2alqf5qvqe.s[22]++;return '/' + this.path.join('/');
      };cov_2alqf5qvqe.s[23]++;context.toPath = function (toPath) {
        cov_2alqf5qvqe.f[6]++;var to = (cov_2alqf5qvqe.s[24]++, this.path.slice());cov_2alqf5qvqe.s[25]++;to[to.length - 1] = toPath;cov_2alqf5qvqe.s[26]++;return '/' + to.join('/');
      };
    } }, { key: 'typeFormattterErrorFormatter', value: function typeFormattterErrorFormatter(context, err) {
      cov_2alqf5qvqe.f[7]++;cov_2alqf5qvqe.s[27]++;context.out('[ERROR] ' + err);
    } }, { key: 'rootBegin', value: function rootBegin() {
      cov_2alqf5qvqe.f[8]++;
    } }, { key: 'rootEnd', value: function rootEnd() {
      cov_2alqf5qvqe.f[9]++;
    } }, { key: 'nodeBegin', value: function nodeBegin(_ref, key, leftKey) {
      cov_2alqf5qvqe.f[10]++;var path = (cov_2alqf5qvqe.s[28]++, _ref.path);cov_2alqf5qvqe.s[29]++;path.push(leftKey);
    } }, { key: 'nodeEnd', value: function nodeEnd(_ref2) {
      cov_2alqf5qvqe.f[11]++;var path = (cov_2alqf5qvqe.s[30]++, _ref2.path);cov_2alqf5qvqe.s[31]++;path.pop();
    } }, { key: 'format_unchanged', value: function format_unchanged() {
      cov_2alqf5qvqe.f[12]++;
    } }, { key: 'format_movedestination', value: function format_movedestination() {
      cov_2alqf5qvqe.f[13]++;
    } }, { key: 'format_node', value: function format_node(context, delta, left) {
      cov_2alqf5qvqe.f[14]++;cov_2alqf5qvqe.s[32]++;this.formatDeltaChildren(context, delta, left);
    } }, { key: 'format_added', value: function format_added(context, delta) {
      cov_2alqf5qvqe.f[15]++;cov_2alqf5qvqe.s[33]++;context.pushCurrentOp({ op: OPERATIONS.add, value: delta[0] });
    } }, { key: 'format_modified', value: function format_modified(context, delta) {
      cov_2alqf5qvqe.f[16]++;cov_2alqf5qvqe.s[34]++;context.pushCurrentOp({ op: OPERATIONS.replace, value: delta[1] });
    } }, { key: 'format_deleted', value: function format_deleted(context) {
      cov_2alqf5qvqe.f[17]++;cov_2alqf5qvqe.s[35]++;context.pushCurrentOp({ op: OPERATIONS.remove });
    } }, { key: 'format_moved', value: function format_moved(context, delta) {
      cov_2alqf5qvqe.f[18]++;var to = (cov_2alqf5qvqe.s[36]++, delta[1]);cov_2alqf5qvqe.s[37]++;context.pushMoveOp(to);
    } }, { key: 'format_textdiff', value: function format_textdiff() {
      cov_2alqf5qvqe.f[19]++;cov_2alqf5qvqe.s[38]++;throw new Error('Not implemented');
    } }, { key: 'format', value: function format(delta, left) {
      cov_2alqf5qvqe.f[20]++;var context = (cov_2alqf5qvqe.s[39]++, {});cov_2alqf5qvqe.s[40]++;this.prepareContext(context);cov_2alqf5qvqe.s[41]++;this.recurse(context, delta, left);cov_2alqf5qvqe.s[42]++;return context.result;
    } }]);cov_2alqf5qvqe.s[43]++;return JSONFormatter;
}(BaseFormatter));cov_2alqf5qvqe.s[44]++;var last = function last(arr) {
  cov_2alqf5qvqe.f[21]++;cov_2alqf5qvqe.s[45]++;return arr[arr.length - 1];
};cov_2alqf5qvqe.s[46]++;var sortBy = function sortBy(arr, pred) {
  cov_2alqf5qvqe.f[22]++;cov_2alqf5qvqe.s[47]++;arr.sort(pred);cov_2alqf5qvqe.s[48]++;return arr;
};cov_2alqf5qvqe.s[49]++;var compareByIndexDesc = function compareByIndexDesc(indexA, indexB) {
  cov_2alqf5qvqe.f[23]++;var lastA = (cov_2alqf5qvqe.s[50]++, parseInt(indexA, 10));var lastB = (cov_2alqf5qvqe.s[51]++, parseInt(indexB, 10));cov_2alqf5qvqe.s[52]++;if (!((cov_2alqf5qvqe.b[4][0]++, isNaN(lastA)) || (cov_2alqf5qvqe.b[4][1]++, isNaN(lastB)))) {
    cov_2alqf5qvqe.b[3][0]++;cov_2alqf5qvqe.s[53]++;return lastB - lastA;
  } else {
    cov_2alqf5qvqe.b[3][1]++;cov_2alqf5qvqe.s[54]++;return 0;
  }
};cov_2alqf5qvqe.s[55]++;var opsByDescendingOrder = function opsByDescendingOrder(removeOps) {
  cov_2alqf5qvqe.f[24]++;cov_2alqf5qvqe.s[56]++;return sortBy(removeOps, function (a, b) {
    cov_2alqf5qvqe.f[25]++;var splitA = (cov_2alqf5qvqe.s[57]++, a.path.split('/'));var splitB = (cov_2alqf5qvqe.s[58]++, b.path.split('/'));cov_2alqf5qvqe.s[59]++;if (splitA.length !== splitB.length) {
      cov_2alqf5qvqe.b[5][0]++;cov_2alqf5qvqe.s[60]++;return splitA.length - splitB.length;
    } else {
      cov_2alqf5qvqe.b[5][1]++;cov_2alqf5qvqe.s[61]++;return compareByIndexDesc(last(splitA), last(splitB));
    }
  });
};cov_2alqf5qvqe.s[62]++;var partitionOps = function partitionOps(arr, fns) {
  cov_2alqf5qvqe.f[26]++;var initArr = (cov_2alqf5qvqe.s[63]++, Array(fns.length + 1).fill().map(function () {
    cov_2alqf5qvqe.f[27]++;cov_2alqf5qvqe.s[64]++;return [];
  }));cov_2alqf5qvqe.s[65]++;return arr.map(function (item) {
    cov_2alqf5qvqe.f[28]++;var position = (cov_2alqf5qvqe.s[66]++, fns.map(function (fn) {
      cov_2alqf5qvqe.f[29]++;cov_2alqf5qvqe.s[67]++;return fn(item);
    }).indexOf(true));cov_2alqf5qvqe.s[68]++;if (position < 0) {
      cov_2alqf5qvqe.b[6][0]++;cov_2alqf5qvqe.s[69]++;position = fns.length;
    } else {
      cov_2alqf5qvqe.b[6][1]++;
    }cov_2alqf5qvqe.s[70]++;return { item: item, position: position };
  }).reduce(function (acc, item) {
    cov_2alqf5qvqe.f[30]++;cov_2alqf5qvqe.s[71]++;acc[item.position].push(item.item);cov_2alqf5qvqe.s[72]++;return acc;
  }, initArr);
};cov_2alqf5qvqe.s[73]++;var isMoveOp = function isMoveOp(_ref3) {
  cov_2alqf5qvqe.f[31]++;var op = (cov_2alqf5qvqe.s[74]++, _ref3.op);cov_2alqf5qvqe.s[75]++;return op === 'move';
};cov_2alqf5qvqe.s[76]++;var isRemoveOp = function isRemoveOp(_ref4) {
  cov_2alqf5qvqe.f[32]++;var op = (cov_2alqf5qvqe.s[77]++, _ref4.op);cov_2alqf5qvqe.s[78]++;return op === 'remove';
};cov_2alqf5qvqe.s[79]++;var reorderOps = function reorderOps(diff) {
  cov_2alqf5qvqe.f[33]++;var _partitionOps = (cov_2alqf5qvqe.s[80]++, partitionOps(diff, [isMoveOp, isRemoveOp])),
      _partitionOps2 = (cov_2alqf5qvqe.s[81]++, slicedToArray$1(_partitionOps, 3)),
      moveOps = (cov_2alqf5qvqe.s[82]++, _partitionOps2[0]),
      removedOps = (cov_2alqf5qvqe.s[83]++, _partitionOps2[1]),
      restOps = (cov_2alqf5qvqe.s[84]++, _partitionOps2[2]);var removeOpsReverse = (cov_2alqf5qvqe.s[85]++, opsByDescendingOrder(removedOps));cov_2alqf5qvqe.s[86]++;return [].concat(toConsumableArray$1(removeOpsReverse), toConsumableArray$1(moveOps), toConsumableArray$1(restOps));
};var defaultInstance$2 = (cov_2alqf5qvqe.s[87]++, void 0);cov_2alqf5qvqe.s[88]++;var format$2 = function format(delta, left) {
  cov_2alqf5qvqe.f[34]++;cov_2alqf5qvqe.s[89]++;if (!defaultInstance$2) {
    cov_2alqf5qvqe.b[7][0]++;cov_2alqf5qvqe.s[90]++;defaultInstance$2 = new JSONFormatter();
  } else {
    cov_2alqf5qvqe.b[7][1]++;
  }cov_2alqf5qvqe.s[91]++;return reorderOps(defaultInstance$2.format(delta, left));
};cov_2alqf5qvqe.s[92]++;var log = function log(delta, left) {
  cov_2alqf5qvqe.f[35]++;cov_2alqf5qvqe.s[93]++;console.log(format$2(delta, left));
};

var jsonpatch = Object.freeze({
  default: JSONFormatter,
  partitionOps: partitionOps,
  format: format$2,
  log: log
});

var cov_dxdabeimf = function () {
  var path = '/Users/wangjie/project/plugins/jsondiffpatch/src/formatters/console.js',
      hash = 'dfaf5038306f84ffe78a4768c7ceba169ee22f22',
      Function = function () {}.constructor,
      global = new Function('return this')(),
      gcv = '__coverage__',
      coverageData = { path: '/Users/wangjie/project/plugins/jsondiffpatch/src/formatters/console.js', statementMap: { '0': { start: { line: 5, column: 2 }, end: { line: 11, column: 4 } }, '1': { start: { line: 6, column: 4 }, end: { line: 8, column: 5 } }, '2': { start: { line: 7, column: 6 }, end: { line: 7, column: 35 } }, '3': { start: { line: 10, column: 4 }, end: { line: 10, column: 16 } }, '4': { start: { line: 14, column: 13 }, end: { line: 22, column: 1 } }, '5': { start: { line: 24, column: 23 }, end: { line: 210, column: 16 } }, '6': { start: { line: 25, column: 2 }, end: { line: 25, column: 58 } }, '7': { start: { line: 28, column: 4 }, end: { line: 28, column: 56 } }, '8': { start: { line: 30, column: 16 }, end: { line: 30, column: 144 } }, '9': { start: { line: 32, column: 4 }, end: { line: 32, column: 42 } }, '10': { start: { line: 33, column: 4 }, end: { line: 33, column: 17 } }, '11': { start: { line: 36, column: 2 }, end: { line: 208, column: 6 } }, '12': { start: { line: 39, column: 6 }, end: { line: 39, column: 158 } }, '13': { start: { line: 40, column: 6 }, end: { line: 44, column: 8 } }, '14': { start: { line: 41, column: 8 }, end: { line: 41, column: 98 } }, '15': { start: { line: 42, column: 8 }, end: { line: 42, column: 68 } }, '16': { start: { line: 43, column: 8 }, end: { line: 43, column: 23 } }, '17': { start: { line: 45, column: 6 }, end: { line: 47, column: 8 } }, '18': { start: { line: 46, column: 8 }, end: { line: 46, column: 56 } }, '19': { start: { line: 48, column: 6 }, end: { line: 61, column: 8 } }, '20': { start: { line: 49, column: 8 }, end: { line: 51, column: 9 } }, '21': { start: { line: 50, column: 10 }, end: { line: 50, column: 41 } }, '22': { start: { line: 53, column: 8 }, end: { line: 60, column: 9 } }, '23': { start: { line: 54, column: 22 }, end: { line: 54, column: 41 } }, '24': { start: { line: 55, column: 21 }, end: { line: 55, column: 62 } }, '25': { start: { line: 56, column: 10 }, end: { line: 58, column: 11 } }, '26': { start: { line: 57, column: 12 }, end: { line: 57, column: 39 } }, '27': { start: { line: 59, column: 10 }, end: { line: 59, column: 33 } }, '28': { start: { line: 62, column: 6 }, end: { line: 65, column: 8 } }, '29': { start: { line: 63, column: 8 }, end: { line: 63, column: 38 } }, '30': { start: { line: 64, column: 8 }, end: { line: 64, column: 34 } }, '31': { start: { line: 66, column: 6 }, end: { line: 69, column: 8 } }, '32': { start: { line: 67, column: 8 }, end: { line: 67, column: 38 } }, '33': { start: { line: 68, column: 8 }, end: { line: 68, column: 27 } }, '34': { start: { line: 74, column: 6 }, end: { line: 74, column: 38 } }, '35': { start: { line: 75, column: 6 }, end: { line: 75, column: 35 } }, '36': { start: { line: 76, column: 6 }, end: { line: 76, column: 25 } }, '37': { start: { line: 81, column: 6 }, end: { line: 86, column: 13 } }, '38': { start: { line: 82, column: 8 }, end: { line: 84, column: 9 } }, '39': { start: { line: 83, column: 10 }, end: { line: 83, column: 42 } }, '40': { start: { line: 85, column: 8 }, end: { line: 85, column: 17 } }, '41': { start: { line: 91, column: 18 }, end: { line: 91, column: 43 } }, '42': { start: { line: 92, column: 6 }, end: { line: 92, column: 23 } }, '43': { start: { line: 93, column: 6 }, end: { line: 108, column: 7 } }, '44': { start: { line: 94, column: 19 }, end: { line: 94, column: 27 } }, '45': { start: { line: 95, column: 8 }, end: { line: 95, column: 47 } }, '46': { start: { line: 96, column: 8 }, end: { line: 96, column: 72 } }, '47': { start: { line: 97, column: 8 }, end: { line: 97, column: 27 } }, '48': { start: { line: 98, column: 21 }, end: { line: 98, column: 32 } }, '49': { start: { line: 99, column: 8 }, end: { line: 104, column: 9 } }, '50': { start: { line: 100, column: 22 }, end: { line: 100, column: 40 } }, '51': { start: { line: 101, column: 10 }, end: { line: 101, column: 48 } }, '52': { start: { line: 102, column: 10 }, end: { line: 102, column: 34 } }, '53': { start: { line: 103, column: 10 }, end: { line: 103, column: 29 } }, '54': { start: { line: 105, column: 8 }, end: { line: 107, column: 9 } }, '55': { start: { line: 106, column: 10 }, end: { line: 106, column: 28 } }, '56': { start: { line: 109, column: 6 }, end: { line: 109, column: 25 } }, '57': { start: { line: 114, column: 6 }, end: { line: 114, column: 38 } }, '58': { start: { line: 115, column: 6 }, end: { line: 118, column: 7 } }, '59': { start: { line: 116, column: 8 }, end: { line: 116, column: 54 } }, '60': { start: { line: 117, column: 8 }, end: { line: 117, column: 25 } }, '61': { start: { line: 123, column: 6 }, end: { line: 126, column: 7 } }, '62': { start: { line: 124, column: 8 }, end: { line: 124, column: 27 } }, '63': { start: { line: 125, column: 8 }, end: { line: 125, column: 54 } }, '64': { start: { line: 127, column: 6 }, end: { line: 127, column: 25 } }, '65': { start: { line: 132, column: 6 }, end: { line: 132, column: 38 } }, '66': { start: { line: 133, column: 6 }, end: { line: 133, column: 34 } }, '67': { start: { line: 134, column: 6 }, end: { line: 137, column: 7 } }, '68': { start: { line: 135, column: 8 }, end: { line: 135, column: 54 } }, '69': { start: { line: 136, column: 8 }, end: { line: 136, column: 25 } }, '70': { start: { line: 142, column: 6 }, end: { line: 145, column: 7 } }, '71': { start: { line: 143, column: 8 }, end: { line: 143, column: 27 } }, '72': { start: { line: 144, column: 8 }, end: { line: 144, column: 76 } }, '73': { start: { line: 146, column: 6 }, end: { line: 148, column: 7 } }, '74': { start: { line: 147, column: 8 }, end: { line: 147, column: 26 } }, '75': { start: { line: 149, column: 6 }, end: { line: 149, column: 25 } }, '76': { start: { line: 158, column: 6 }, end: { line: 160, column: 7 } }, '77': { start: { line: 159, column: 8 }, end: { line: 159, column: 15 } }, '78': { start: { line: 161, column: 6 }, end: { line: 161, column: 38 } }, '79': { start: { line: 166, column: 6 }, end: { line: 168, column: 7 } }, '80': { start: { line: 167, column: 8 }, end: { line: 167, column: 15 } }, '81': { start: { line: 169, column: 6 }, end: { line: 169, column: 38 } }, '82': { start: { line: 175, column: 6 }, end: { line: 175, column: 53 } }, '83': { start: { line: 180, column: 6 }, end: { line: 180, column: 42 } }, '84': { start: { line: 185, column: 6 }, end: { line: 185, column: 40 } }, '85': { start: { line: 186, column: 6 }, end: { line: 186, column: 42 } }, '86': { start: { line: 187, column: 6 }, end: { line: 187, column: 25 } }, '87': { start: { line: 188, column: 6 }, end: { line: 188, column: 26 } }, '88': { start: { line: 189, column: 6 }, end: { line: 189, column: 38 } }, '89': { start: { line: 190, column: 6 }, end: { line: 190, column: 42 } }, '90': { start: { line: 191, column: 6 }, end: { line: 191, column: 25 } }, '91': { start: { line: 196, column: 6 }, end: { line: 196, column: 42 } }, '92': { start: { line: 201, column: 6 }, end: { line: 201, column: 37 } }, '93': { start: { line: 206, column: 6 }, end: { line: 206, column: 51 } }, '94': { start: { line: 209, column: 2 }, end: { line: 209, column: 26 } }, '95': { start: { line: 218, column: 22 }, end: { line: 218, column: 28 } }, '96': { start: { line: 220, column: 20 }, end: { line: 225, column: 1 } }, '97': { start: { line: 221, column: 2 }, end: { line: 223, column: 3 } }, '98': { start: { line: 222, column: 4 }, end: { line: 222, column: 45 } }, '99': { start: { line: 224, column: 2 }, end: { line: 224, column: 45 } }, '100': { start: { line: 228, column: 2 }, end: { line: 228, column: 35 } } }, fnMap: { '0': { name: 'chalkColor', decl: { start: { line: 4, column: 9 }, end: { line: 4, column: 19 } }, loc: { start: { line: 4, column: 26 }, end: { line: 12, column: 1 } }, line: 4 }, '1': { name: '(anonymous_1)', decl: { start: { line: 5, column: 33 }, end: { line: 5, column: 34 } }, loc: { start: { line: 5, column: 45 }, end: { line: 11, column: 3 } }, line: 5 }, '2': { name: '(anonymous_2)', decl: { start: { line: 24, column: 23 }, end: { line: 24, column: 24 } }, loc: { start: { line: 24, column: 49 }, end: { line: 210, column: 1 } }, line: 24 }, '3': { name: 'ConsoleFormatter', decl: { start: { line: 27, column: 11 }, end: { line: 27, column: 27 } }, loc: { start: { line: 27, column: 30 }, end: { line: 34, column: 3 } }, line: 27 }, '4': { name: 'prepareContext', decl: { start: { line: 38, column: 20 }, end: { line: 38, column: 34 } }, loc: { start: { line: 38, column: 44 }, end: { line: 70, column: 5 } }, line: 38 }, '5': { name: '(anonymous_5)', decl: { start: { line: 40, column: 23 }, end: { line: 40, column: 24 } }, loc: { start: { line: 40, column: 41 }, end: { line: 44, column: 7 } }, line: 40 }, '6': { name: '(anonymous_6)', decl: { start: { line: 45, column: 24 }, end: { line: 45, column: 25 } }, loc: { start: { line: 45, column: 36 }, end: { line: 47, column: 7 } }, line: 45 }, '7': { name: '(anonymous_7)', decl: { start: { line: 48, column: 20 }, end: { line: 48, column: 21 } }, loc: { start: { line: 48, column: 32 }, end: { line: 61, column: 7 } }, line: 48 }, '8': { name: '(anonymous_8)', decl: { start: { line: 62, column: 26 }, end: { line: 62, column: 27 } }, loc: { start: { line: 62, column: 43 }, end: { line: 65, column: 7 } }, line: 62 }, '9': { name: '(anonymous_9)', decl: { start: { line: 66, column: 25 }, end: { line: 66, column: 26 } }, loc: { start: { line: 66, column: 37 }, end: { line: 69, column: 7 } }, line: 66 }, '10': { name: 'typeFormattterErrorFormatter', decl: { start: { line: 73, column: 20 }, end: { line: 73, column: 48 } }, loc: { start: { line: 73, column: 63 }, end: { line: 77, column: 5 } }, line: 73 }, '11': { name: 'formatValue', decl: { start: { line: 80, column: 20 }, end: { line: 80, column: 31 } }, loc: { start: { line: 80, column: 48 }, end: { line: 87, column: 5 } }, line: 80 }, '12': { name: '(anonymous_12)', decl: { start: { line: 81, column: 40 }, end: { line: 81, column: 41 } }, loc: { start: { line: 81, column: 56 }, end: { line: 86, column: 7 } }, line: 81 }, '13': { name: 'formatTextDiffString', decl: { start: { line: 90, column: 20 }, end: { line: 90, column: 40 } }, loc: { start: { line: 90, column: 57 }, end: { line: 110, column: 5 } }, line: 90 }, '14': { name: 'rootBegin', decl: { start: { line: 113, column: 20 }, end: { line: 113, column: 29 } }, loc: { start: { line: 113, column: 55 }, end: { line: 119, column: 5 } }, line: 113 }, '15': { name: 'rootEnd', decl: { start: { line: 122, column: 20 }, end: { line: 122, column: 27 } }, loc: { start: { line: 122, column: 53 }, end: { line: 128, column: 5 } }, line: 122 }, '16': { name: 'nodeBegin', decl: { start: { line: 131, column: 20 }, end: { line: 131, column: 29 } }, loc: { start: { line: 131, column: 69 }, end: { line: 138, column: 5 } }, line: 131 }, '17': { name: 'nodeEnd', decl: { start: { line: 141, column: 20 }, end: { line: 141, column: 27 } }, loc: { start: { line: 141, column: 75 }, end: { line: 150, column: 5 } }, line: 141 }, '18': { name: 'format_unchanged', decl: { start: { line: 157, column: 20 }, end: { line: 157, column: 36 } }, loc: { start: { line: 157, column: 59 }, end: { line: 162, column: 5 } }, line: 157 }, '19': { name: 'format_movedestination', decl: { start: { line: 165, column: 20 }, end: { line: 165, column: 42 } }, loc: { start: { line: 165, column: 65 }, end: { line: 170, column: 5 } }, line: 165 }, '20': { name: 'format_node', decl: { start: { line: 173, column: 20 }, end: { line: 173, column: 31 } }, loc: { start: { line: 173, column: 54 }, end: { line: 176, column: 5 } }, line: 173 }, '21': { name: 'format_added', decl: { start: { line: 179, column: 20 }, end: { line: 179, column: 32 } }, loc: { start: { line: 179, column: 49 }, end: { line: 181, column: 5 } }, line: 179 }, '22': { name: 'format_modified', decl: { start: { line: 184, column: 20 }, end: { line: 184, column: 35 } }, loc: { start: { line: 184, column: 52 }, end: { line: 192, column: 5 } }, line: 184 }, '23': { name: 'format_deleted', decl: { start: { line: 195, column: 20 }, end: { line: 195, column: 34 } }, loc: { start: { line: 195, column: 51 }, end: { line: 197, column: 5 } }, line: 195 }, '24': { name: 'format_moved', decl: { start: { line: 200, column: 20 }, end: { line: 200, column: 32 } }, loc: { start: { line: 200, column: 49 }, end: { line: 202, column: 5 } }, line: 200 }, '25': { name: 'format_textdiff', decl: { start: { line: 205, column: 20 }, end: { line: 205, column: 35 } }, loc: { start: { line: 205, column: 52 }, end: { line: 207, column: 5 } }, line: 205 }, '26': { name: 'format', decl: { start: { line: 220, column: 29 }, end: { line: 220, column: 35 } }, loc: { start: { line: 220, column: 49 }, end: { line: 225, column: 1 } }, line: 220 }, '27': { name: 'log', decl: { start: { line: 227, column: 16 }, end: { line: 227, column: 19 } }, loc: { start: { line: 227, column: 33 }, end: { line: 229, column: 1 } }, line: 227 } }, branchMap: { '0': { loc: { start: { line: 5, column: 9 }, end: { line: 11, column: 3 } }, type: 'binary-expr', locations: [{ start: { line: 5, column: 9 }, end: { line: 5, column: 14 } }, { start: { line: 5, column: 18 }, end: { line: 5, column: 29 } }, { start: { line: 5, column: 33 }, end: { line: 11, column: 3 } }], line: 5 }, '1': { loc: { start: { line: 30, column: 62 }, end: { line: 30, column: 131 } }, type: 'binary-expr', locations: [{ start: { line: 30, column: 62 }, end: { line: 30, column: 88 } }, { start: { line: 30, column: 92 }, end: { line: 30, column: 131 } }], line: 30 }, '2': { loc: { start: { line: 39, column: 23 }, end: { line: 39, column: 112 } }, type: 'binary-expr', locations: [{ start: { line: 39, column: 23 }, end: { line: 39, column: 59 } }, { start: { line: 39, column: 63 }, end: { line: 39, column: 112 } }], line: 39 }, '3': { loc: { start: { line: 41, column: 28 }, end: { line: 41, column: 49 } }, type: 'binary-expr', locations: [{ start: { line: 41, column: 28 }, end: { line: 41, column: 44 } }, { start: { line: 41, column: 48 }, end: { line: 41, column: 49 } }], line: 41 }, '4': { loc: { start: { line: 41, column: 54 }, end: { line: 41, column: 96 } }, type: 'cond-expr', locations: [{ start: { line: 41, column: 86 }, end: { line: 41, column: 87 } }, { start: { line: 41, column: 90 }, end: { line: 41, column: 96 } }], line: 41 }, '5': { loc: { start: { line: 46, column: 33 }, end: { line: 46, column: 53 } }, type: 'binary-expr', locations: [{ start: { line: 46, column: 33 }, end: { line: 46, column: 47 } }, { start: { line: 46, column: 51 }, end: { line: 46, column: 53 } }], line: 46 }, '6': { loc: { start: { line: 55, column: 40 }, end: { line: 55, column: 60 } }, type: 'binary-expr', locations: [{ start: { line: 55, column: 40 }, end: { line: 55, column: 54 } }, { start: { line: 55, column: 58 }, end: { line: 55, column: 60 } }], line: 55 }, '7': { loc: { start: { line: 56, column: 10 }, end: { line: 58, column: 11 } }, type: 'if', locations: [{ start: { line: 56, column: 10 }, end: { line: 58, column: 11 } }, { start: { line: 56, column: 10 }, end: { line: 58, column: 11 } }], line: 56 }, '8': { loc: { start: { line: 56, column: 14 }, end: { line: 56, column: 41 } }, type: 'binary-expr', locations: [{ start: { line: 56, column: 14 }, end: { line: 56, column: 24 } }, { start: { line: 56, column: 28 }, end: { line: 56, column: 41 } }], line: 56 }, '9': { loc: { start: { line: 63, column: 21 }, end: { line: 63, column: 37 } }, type: 'binary-expr', locations: [{ start: { line: 63, column: 21 }, end: { line: 63, column: 31 } }, { start: { line: 63, column: 35 }, end: { line: 63, column: 37 } }], line: 63 }, '10': { loc: { start: { line: 67, column: 21 }, end: { line: 67, column: 37 } }, type: 'binary-expr', locations: [{ start: { line: 67, column: 21 }, end: { line: 67, column: 31 } }, { start: { line: 67, column: 35 }, end: { line: 67, column: 37 } }], line: 67 }, '11': { loc: { start: { line: 82, column: 8 }, end: { line: 84, column: 9 } }, type: 'if', locations: [{ start: { line: 82, column: 8 }, end: { line: 84, column: 9 } }, { start: { line: 82, column: 8 }, end: { line: 84, column: 9 } }], line: 82 }, '12': { loc: { start: { line: 105, column: 8 }, end: { line: 107, column: 9 } }, type: 'if', locations: [{ start: { line: 105, column: 8 }, end: { line: 107, column: 9 } }, { start: { line: 105, column: 8 }, end: { line: 107, column: 9 } }], line: 105 }, '13': { loc: { start: { line: 115, column: 6 }, end: { line: 118, column: 7 } }, type: 'if', locations: [{ start: { line: 115, column: 6 }, end: { line: 118, column: 7 } }, { start: { line: 115, column: 6 }, end: { line: 118, column: 7 } }], line: 115 }, '14': { loc: { start: { line: 116, column: 20 }, end: { line: 116, column: 52 } }, type: 'cond-expr', locations: [{ start: { line: 116, column: 43 }, end: { line: 116, column: 46 } }, { start: { line: 116, column: 49 }, end: { line: 116, column: 52 } }], line: 116 }, '15': { loc: { start: { line: 123, column: 6 }, end: { line: 126, column: 7 } }, type: 'if', locations: [{ start: { line: 123, column: 6 }, end: { line: 126, column: 7 } }, { start: { line: 123, column: 6 }, end: { line: 126, column: 7 } }], line: 123 }, '16': { loc: { start: { line: 125, column: 20 }, end: { line: 125, column: 52 } }, type: 'cond-expr', locations: [{ start: { line: 125, column: 43 }, end: { line: 125, column: 46 } }, { start: { line: 125, column: 49 }, end: { line: 125, column: 52 } }], line: 125 }, '17': { loc: { start: { line: 134, column: 6 }, end: { line: 137, column: 7 } }, type: 'if', locations: [{ start: { line: 134, column: 6 }, end: { line: 137, column: 7 } }, { start: { line: 134, column: 6 }, end: { line: 137, column: 7 } }], line: 134 }, '18': { loc: { start: { line: 135, column: 20 }, end: { line: 135, column: 52 } }, type: 'cond-expr', locations: [{ start: { line: 135, column: 43 }, end: { line: 135, column: 46 } }, { start: { line: 135, column: 49 }, end: { line: 135, column: 52 } }], line: 135 }, '19': { loc: { start: { line: 142, column: 6 }, end: { line: 145, column: 7 } }, type: 'if', locations: [{ start: { line: 142, column: 6 }, end: { line: 145, column: 7 } }, { start: { line: 142, column: 6 }, end: { line: 145, column: 7 } }], line: 142 }, '20': { loc: { start: { line: 144, column: 20 }, end: { line: 144, column: 74 } }, type: 'cond-expr', locations: [{ start: { line: 144, column: 43 }, end: { line: 144, column: 46 } }, { start: { line: 144, column: 49 }, end: { line: 144, column: 74 } }], line: 144 }, '21': { loc: { start: { line: 144, column: 56 }, end: { line: 144, column: 73 } }, type: 'cond-expr', locations: [{ start: { line: 144, column: 65 }, end: { line: 144, column: 67 } }, { start: { line: 144, column: 70 }, end: { line: 144, column: 73 } }], line: 144 }, '22': { loc: { start: { line: 146, column: 6 }, end: { line: 148, column: 7 } }, type: 'if', locations: [{ start: { line: 146, column: 6 }, end: { line: 148, column: 7 } }, { start: { line: 146, column: 6 }, end: { line: 148, column: 7 } }], line: 146 }, '23': { loc: { start: { line: 158, column: 6 }, end: { line: 160, column: 7 } }, type: 'if', locations: [{ start: { line: 158, column: 6 }, end: { line: 160, column: 7 } }, { start: { line: 158, column: 6 }, end: { line: 160, column: 7 } }], line: 158 }, '24': { loc: { start: { line: 166, column: 6 }, end: { line: 168, column: 7 } }, type: 'if', locations: [{ start: { line: 166, column: 6 }, end: { line: 168, column: 7 } }, { start: { line: 166, column: 6 }, end: { line: 168, column: 7 } }], line: 166 }, '25': { loc: { start: { line: 221, column: 2 }, end: { line: 223, column: 3 } }, type: 'if', locations: [{ start: { line: 221, column: 2 }, end: { line: 223, column: 3 } }, { start: { line: 221, column: 2 }, end: { line: 223, column: 3 } }], line: 221 } }, s: { '0': 0, '1': 0, '2': 0, '3': 0, '4': 0, '5': 0, '6': 0, '7': 0, '8': 0, '9': 0, '10': 0, '11': 0, '12': 0, '13': 0, '14': 0, '15': 0, '16': 0, '17': 0, '18': 0, '19': 0, '20': 0, '21': 0, '22': 0, '23': 0, '24': 0, '25': 0, '26': 0, '27': 0, '28': 0, '29': 0, '30': 0, '31': 0, '32': 0, '33': 0, '34': 0, '35': 0, '36': 0, '37': 0, '38': 0, '39': 0, '40': 0, '41': 0, '42': 0, '43': 0, '44': 0, '45': 0, '46': 0, '47': 0, '48': 0, '49': 0, '50': 0, '51': 0, '52': 0, '53': 0, '54': 0, '55': 0, '56': 0, '57': 0, '58': 0, '59': 0, '60': 0, '61': 0, '62': 0, '63': 0, '64': 0, '65': 0, '66': 0, '67': 0, '68': 0, '69': 0, '70': 0, '71': 0, '72': 0, '73': 0, '74': 0, '75': 0, '76': 0, '77': 0, '78': 0, '79': 0, '80': 0, '81': 0, '82': 0, '83': 0, '84': 0, '85': 0, '86': 0, '87': 0, '88': 0, '89': 0, '90': 0, '91': 0, '92': 0, '93': 0, '94': 0, '95': 0, '96': 0, '97': 0, '98': 0, '99': 0, '100': 0 }, f: { '0': 0, '1': 0, '2': 0, '3': 0, '4': 0, '5': 0, '6': 0, '7': 0, '8': 0, '9': 0, '10': 0, '11': 0, '12': 0, '13': 0, '14': 0, '15': 0, '16': 0, '17': 0, '18': 0, '19': 0, '20': 0, '21': 0, '22': 0, '23': 0, '24': 0, '25': 0, '26': 0, '27': 0 }, b: { '0': [0, 0, 0], '1': [0, 0], '2': [0, 0], '3': [0, 0], '4': [0, 0], '5': [0, 0], '6': [0, 0], '7': [0, 0], '8': [0, 0], '9': [0, 0], '10': [0, 0], '11': [0, 0], '12': [0, 0], '13': [0, 0], '14': [0, 0], '15': [0, 0], '16': [0, 0], '17': [0, 0], '18': [0, 0], '19': [0, 0], '20': [0, 0], '21': [0, 0], '22': [0, 0], '23': [0, 0], '24': [0, 0], '25': [0, 0] }, _coverageSchema: '332fd63041d2c1bcb487cc26dd0d5f7d97098a6c' },
      coverage = global[gcv] || (global[gcv] = {});if (coverage[path] && coverage[path].hash === hash) {
    return coverage[path];
  }coverageData.hash = hash;return coverage[path] = coverageData;
}();function chalkColor(name) {
  cov_dxdabeimf.f[0]++;cov_dxdabeimf.s[0]++;return (cov_dxdabeimf.b[0][0]++, chalk) && (cov_dxdabeimf.b[0][1]++, chalk[name]) || (cov_dxdabeimf.b[0][2]++, function () {
    cov_dxdabeimf.f[1]++;cov_dxdabeimf.s[1]++;for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      cov_dxdabeimf.s[2]++;args[_key] = arguments[_key];
    }cov_dxdabeimf.s[3]++;return args;
  });
}var colors = (cov_dxdabeimf.s[4]++, { added: chalkColor('green'), deleted: chalkColor('red'), movedestination: chalkColor('gray'), moved: chalkColor('yellow'), unchanged: chalkColor('gray'), error: chalkColor('white.bgRed'), textDiffLine: chalkColor('gray') });var ConsoleFormatter = (cov_dxdabeimf.s[5]++, function (_BaseFormatter) {
  cov_dxdabeimf.f[2]++;cov_dxdabeimf.s[6]++;inherits$1(ConsoleFormatter, _BaseFormatter);function ConsoleFormatter() {
    cov_dxdabeimf.f[3]++;cov_dxdabeimf.s[7]++;classCallCheck$1(this, ConsoleFormatter);var _this = (cov_dxdabeimf.s[8]++, possibleConstructorReturn$1(this, ((cov_dxdabeimf.b[1][0]++, ConsoleFormatter.__proto__) || (cov_dxdabeimf.b[1][1]++, Object.getPrototypeOf(ConsoleFormatter))).call(this)));cov_dxdabeimf.s[9]++;_this.includeMoveDestinations = false;cov_dxdabeimf.s[10]++;return _this;
  }cov_dxdabeimf.s[11]++;createClass$1(ConsoleFormatter, [{ key: 'prepareContext', value: function prepareContext(context) {
      cov_dxdabeimf.f[4]++;cov_dxdabeimf.s[12]++;get$1((cov_dxdabeimf.b[2][0]++, ConsoleFormatter.prototype.__proto__) || (cov_dxdabeimf.b[2][1]++, Object.getPrototypeOf(ConsoleFormatter.prototype)), 'prepareContext', this).call(this, context);cov_dxdabeimf.s[13]++;context.indent = function (levels) {
        cov_dxdabeimf.f[5]++;cov_dxdabeimf.s[14]++;this.indentLevel = ((cov_dxdabeimf.b[3][0]++, this.indentLevel) || (cov_dxdabeimf.b[3][1]++, 0)) + (typeof levels === 'undefined' ? (cov_dxdabeimf.b[4][0]++, 1) : (cov_dxdabeimf.b[4][1]++, levels));cov_dxdabeimf.s[15]++;this.indentPad = new Array(this.indentLevel + 1).join('  ');cov_dxdabeimf.s[16]++;this.outLine();
      };cov_dxdabeimf.s[17]++;context.outLine = function () {
        cov_dxdabeimf.f[6]++;cov_dxdabeimf.s[18]++;this.buffer.push('\n' + ((cov_dxdabeimf.b[5][0]++, this.indentPad) || (cov_dxdabeimf.b[5][1]++, '')));
      };cov_dxdabeimf.s[19]++;context.out = function () {
        cov_dxdabeimf.f[7]++;cov_dxdabeimf.s[20]++;for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
          cov_dxdabeimf.s[21]++;args[_key2] = arguments[_key2];
        }cov_dxdabeimf.s[22]++;for (var i = 0, l = args.length; i < l; i++) {
          var lines = (cov_dxdabeimf.s[23]++, args[i].split('\n'));var text = (cov_dxdabeimf.s[24]++, lines.join('\n' + ((cov_dxdabeimf.b[6][0]++, this.indentPad) || (cov_dxdabeimf.b[6][1]++, ''))));cov_dxdabeimf.s[25]++;if ((cov_dxdabeimf.b[8][0]++, this.color) && (cov_dxdabeimf.b[8][1]++, this.color[0])) {
            cov_dxdabeimf.b[7][0]++;cov_dxdabeimf.s[26]++;text = this.color[0](text);
          } else {
            cov_dxdabeimf.b[7][1]++;
          }cov_dxdabeimf.s[27]++;this.buffer.push(text);
        }
      };cov_dxdabeimf.s[28]++;context.pushColor = function (color) {
        cov_dxdabeimf.f[8]++;cov_dxdabeimf.s[29]++;this.color = (cov_dxdabeimf.b[9][0]++, this.color) || (cov_dxdabeimf.b[9][1]++, []);cov_dxdabeimf.s[30]++;this.color.unshift(color);
      };cov_dxdabeimf.s[31]++;context.popColor = function () {
        cov_dxdabeimf.f[9]++;cov_dxdabeimf.s[32]++;this.color = (cov_dxdabeimf.b[10][0]++, this.color) || (cov_dxdabeimf.b[10][1]++, []);cov_dxdabeimf.s[33]++;this.color.shift();
      };
    } }, { key: 'typeFormattterErrorFormatter', value: function typeFormattterErrorFormatter(context, err) {
      cov_dxdabeimf.f[10]++;cov_dxdabeimf.s[34]++;context.pushColor(colors.error);cov_dxdabeimf.s[35]++;context.out('[ERROR]' + err);cov_dxdabeimf.s[36]++;context.popColor();
    } }, { key: 'formatValue', value: function formatValue(context, value) {
      cov_dxdabeimf.f[11]++;cov_dxdabeimf.s[37]++;context.out(JSON.stringify(value, function (k, v) {
        cov_dxdabeimf.f[12]++;cov_dxdabeimf.s[38]++;if (typeof v === "bigint") {
          cov_dxdabeimf.b[11][0]++;cov_dxdabeimf.s[39]++;return 'Bigint=' + v.toString();
        } else {
          cov_dxdabeimf.b[11][1]++;
        }cov_dxdabeimf.s[40]++;return v;
      }, 2));
    } }, { key: 'formatTextDiffString', value: function formatTextDiffString(context, value) {
      cov_dxdabeimf.f[13]++;var lines = (cov_dxdabeimf.s[41]++, this.parseTextDiff(value));cov_dxdabeimf.s[42]++;context.indent();cov_dxdabeimf.s[43]++;for (var i = 0, l = lines.length; i < l; i++) {
        var line = (cov_dxdabeimf.s[44]++, lines[i]);cov_dxdabeimf.s[45]++;context.pushColor(colors.textDiffLine);cov_dxdabeimf.s[46]++;context.out(line.location.line + ',' + line.location.chr + ' ');cov_dxdabeimf.s[47]++;context.popColor();var pieces = (cov_dxdabeimf.s[48]++, line.pieces);cov_dxdabeimf.s[49]++;for (var pieceIndex = 0, piecesLength = pieces.length; pieceIndex < piecesLength; pieceIndex++) {
          var piece = (cov_dxdabeimf.s[50]++, pieces[pieceIndex]);cov_dxdabeimf.s[51]++;context.pushColor(colors[piece.type]);cov_dxdabeimf.s[52]++;context.out(piece.text);cov_dxdabeimf.s[53]++;context.popColor();
        }cov_dxdabeimf.s[54]++;if (i < l - 1) {
          cov_dxdabeimf.b[12][0]++;cov_dxdabeimf.s[55]++;context.outLine();
        } else {
          cov_dxdabeimf.b[12][1]++;
        }
      }cov_dxdabeimf.s[56]++;context.indent(-1);
    } }, { key: 'rootBegin', value: function rootBegin(context, type, nodeType) {
      cov_dxdabeimf.f[14]++;cov_dxdabeimf.s[57]++;context.pushColor(colors[type]);cov_dxdabeimf.s[58]++;if (type === 'node') {
        cov_dxdabeimf.b[13][0]++;cov_dxdabeimf.s[59]++;context.out(nodeType === 'array' ? (cov_dxdabeimf.b[14][0]++, '[') : (cov_dxdabeimf.b[14][1]++, '{'));cov_dxdabeimf.s[60]++;context.indent();
      } else {
        cov_dxdabeimf.b[13][1]++;
      }
    } }, { key: 'rootEnd', value: function rootEnd(context, type, nodeType) {
      cov_dxdabeimf.f[15]++;cov_dxdabeimf.s[61]++;if (type === 'node') {
        cov_dxdabeimf.b[15][0]++;cov_dxdabeimf.s[62]++;context.indent(-1);cov_dxdabeimf.s[63]++;context.out(nodeType === 'array' ? (cov_dxdabeimf.b[16][0]++, ']') : (cov_dxdabeimf.b[16][1]++, '}'));
      } else {
        cov_dxdabeimf.b[15][1]++;
      }cov_dxdabeimf.s[64]++;context.popColor();
    } }, { key: 'nodeBegin', value: function nodeBegin(context, key, leftKey, type, nodeType) {
      cov_dxdabeimf.f[16]++;cov_dxdabeimf.s[65]++;context.pushColor(colors[type]);cov_dxdabeimf.s[66]++;context.out(leftKey + ': ');cov_dxdabeimf.s[67]++;if (type === 'node') {
        cov_dxdabeimf.b[17][0]++;cov_dxdabeimf.s[68]++;context.out(nodeType === 'array' ? (cov_dxdabeimf.b[18][0]++, '[') : (cov_dxdabeimf.b[18][1]++, '{'));cov_dxdabeimf.s[69]++;context.indent();
      } else {
        cov_dxdabeimf.b[17][1]++;
      }
    } }, { key: 'nodeEnd', value: function nodeEnd(context, key, leftKey, type, nodeType, isLast) {
      cov_dxdabeimf.f[17]++;cov_dxdabeimf.s[70]++;if (type === 'node') {
        cov_dxdabeimf.b[19][0]++;cov_dxdabeimf.s[71]++;context.indent(-1);cov_dxdabeimf.s[72]++;context.out(nodeType === 'array' ? (cov_dxdabeimf.b[20][0]++, ']') : (cov_dxdabeimf.b[20][1]++, '}' + (isLast ? (cov_dxdabeimf.b[21][0]++, '') : (cov_dxdabeimf.b[21][1]++, ','))));
      } else {
        cov_dxdabeimf.b[19][1]++;
      }cov_dxdabeimf.s[73]++;if (!isLast) {
        cov_dxdabeimf.b[22][0]++;cov_dxdabeimf.s[74]++;context.outLine();
      } else {
        cov_dxdabeimf.b[22][1]++;
      }cov_dxdabeimf.s[75]++;context.popColor();
    } }, { key: 'format_unchanged', value: function format_unchanged(context, delta, left) {
      cov_dxdabeimf.f[18]++;cov_dxdabeimf.s[76]++;if (typeof left === 'undefined') {
        cov_dxdabeimf.b[23][0]++;cov_dxdabeimf.s[77]++;return;
      } else {
        cov_dxdabeimf.b[23][1]++;
      }cov_dxdabeimf.s[78]++;this.formatValue(context, left);
    } }, { key: 'format_movedestination', value: function format_movedestination(context, delta, left) {
      cov_dxdabeimf.f[19]++;cov_dxdabeimf.s[79]++;if (typeof left === 'undefined') {
        cov_dxdabeimf.b[24][0]++;cov_dxdabeimf.s[80]++;return;
      } else {
        cov_dxdabeimf.b[24][1]++;
      }cov_dxdabeimf.s[81]++;this.formatValue(context, left);
    } }, { key: 'format_node', value: function format_node(context, delta, left) {
      cov_dxdabeimf.f[20]++;cov_dxdabeimf.s[82]++;this.formatDeltaChildren(context, delta, left);
    } }, { key: 'format_added', value: function format_added(context, delta) {
      cov_dxdabeimf.f[21]++;cov_dxdabeimf.s[83]++;this.formatValue(context, delta[0]);
    } }, { key: 'format_modified', value: function format_modified(context, delta) {
      cov_dxdabeimf.f[22]++;cov_dxdabeimf.s[84]++;context.pushColor(colors.deleted);cov_dxdabeimf.s[85]++;this.formatValue(context, delta[0]);cov_dxdabeimf.s[86]++;context.popColor();cov_dxdabeimf.s[87]++;context.out(' => ');cov_dxdabeimf.s[88]++;context.pushColor(colors.added);cov_dxdabeimf.s[89]++;this.formatValue(context, delta[1]);cov_dxdabeimf.s[90]++;context.popColor();
    } }, { key: 'format_deleted', value: function format_deleted(context, delta) {
      cov_dxdabeimf.f[23]++;cov_dxdabeimf.s[91]++;this.formatValue(context, delta[0]);
    } }, { key: 'format_moved', value: function format_moved(context, delta) {
      cov_dxdabeimf.f[24]++;cov_dxdabeimf.s[92]++;context.out('==> ' + delta[1]);
    } }, { key: 'format_textdiff', value: function format_textdiff(context, delta) {
      cov_dxdabeimf.f[25]++;cov_dxdabeimf.s[93]++;this.formatTextDiffString(context, delta[0]);
    } }]);cov_dxdabeimf.s[94]++;return ConsoleFormatter;
}(BaseFormatter));var defaultInstance$3 = (cov_dxdabeimf.s[95]++, void 0);cov_dxdabeimf.s[96]++;var format$3 = function format(delta, left) {
  cov_dxdabeimf.f[26]++;cov_dxdabeimf.s[97]++;if (!defaultInstance$3) {
    cov_dxdabeimf.b[25][0]++;cov_dxdabeimf.s[98]++;defaultInstance$3 = new ConsoleFormatter();
  } else {
    cov_dxdabeimf.b[25][1]++;
  }cov_dxdabeimf.s[99]++;return defaultInstance$3.format(delta, left);
};function log$1(delta, left) {
  cov_dxdabeimf.f[27]++;cov_dxdabeimf.s[100]++;console.log(format$3(delta, left));
}

var console$1 = Object.freeze({
  default: ConsoleFormatter,
  format: format$3,
  log: log$1
});

var cov_1bi9b6z1qx = function () {
  var path = '/Users/wangjie/project/plugins/jsondiffpatch/src/formatters/index.js',
      hash = '1c66de2d96efed5c71e22b87406e8e68414473f4',
      Function = function () {}.constructor,
      global = new Function('return this')(),
      gcv = '__coverage__',
      coverageData = { path: '/Users/wangjie/project/plugins/jsondiffpatch/src/formatters/index.js', statementMap: {}, fnMap: {}, branchMap: {}, s: {}, f: {}, b: {}, _coverageSchema: '332fd63041d2c1bcb487cc26dd0d5f7d97098a6c' },
      coverage = global[gcv] || (global[gcv] = {});if (coverage[path] && coverage[path].hash === hash) {
    return coverage[path];
  }coverageData.hash = hash;return coverage[path] = coverageData;
}();

var index = Object.freeze({
  base: base,
  html: html,
  annotated: annotated,
  jsonpatch: jsonpatch,
  console: console$1
});

var cov_280kanf0mq = function () {
  var path = '/Users/wangjie/project/plugins/jsondiffpatch/src/date-reviver.js',
      hash = '260cd8273198431dd107f6be31728f9e485d9e95',
      Function = function () {}.constructor,
      global = new Function('return this')(),
      gcv = '__coverage__',
      coverageData = { path: '/Users/wangjie/project/plugins/jsondiffpatch/src/date-reviver.js', statementMap: { '0': { start: { line: 3, column: 14 }, end: { line: 3, column: 20 } }, '1': { start: { line: 4, column: 2 }, end: { line: 10, column: 3 } }, '2': { start: { line: 6, column: 4 }, end: { line: 6, column: 113 } }, '3': { start: { line: 7, column: 4 }, end: { line: 9, column: 5 } }, '4': { start: { line: 8, column: 6 }, end: { line: 8, column: 120 } }, '5': { start: { line: 11, column: 2 }, end: { line: 11, column: 15 } } }, fnMap: { '0': { name: 'dateReviver', decl: { start: { line: 2, column: 24 }, end: { line: 2, column: 35 } }, loc: { start: { line: 2, column: 48 }, end: { line: 12, column: 1 } }, line: 2 } }, branchMap: { '0': { loc: { start: { line: 4, column: 2 }, end: { line: 10, column: 3 } }, type: 'if', locations: [{ start: { line: 4, column: 2 }, end: { line: 10, column: 3 } }, { start: { line: 4, column: 2 }, end: { line: 10, column: 3 } }], line: 4 }, '1': { loc: { start: { line: 7, column: 4 }, end: { line: 9, column: 5 } }, type: 'if', locations: [{ start: { line: 7, column: 4 }, end: { line: 9, column: 5 } }, { start: { line: 7, column: 4 }, end: { line: 9, column: 5 } }], line: 7 }, '2': { loc: { start: { line: 8, column: 103 }, end: { line: 8, column: 116 } }, type: 'binary-expr', locations: [{ start: { line: 8, column: 103 }, end: { line: 8, column: 111 } }, { start: { line: 8, column: 115 }, end: { line: 8, column: 116 } }], line: 8 } }, s: { '0': 0, '1': 0, '2': 0, '3': 0, '4': 0, '5': 0 }, f: { '0': 0 }, b: { '0': [0, 0], '1': [0, 0], '2': [0, 0] }, _coverageSchema: '332fd63041d2c1bcb487cc26dd0d5f7d97098a6c' },
      coverage = global[gcv] || (global[gcv] = {});if (coverage[path] && coverage[path].hash === hash) {
    return coverage[path];
  }coverageData.hash = hash;return coverage[path] = coverageData;
}();var cov_1abk1frsq9 = function () {
  var path = '/Users/wangjie/project/plugins/jsondiffpatch/src/main.js',
      hash = '1cd0c3a2bb11357d8481f7ef894e0032150a1ae2',
      Function = function () {}.constructor,
      global = new Function('return this')(),
      gcv = '__coverage__',
      coverageData = { path: '/Users/wangjie/project/plugins/jsondiffpatch/src/main.js', statementMap: { '0': { start: { line: 11, column: 2 }, end: { line: 11, column: 34 } }, '1': { start: { line: 18, column: 22 }, end: { line: 18, column: 28 } }, '2': { start: { line: 21, column: 2 }, end: { line: 23, column: 3 } }, '3': { start: { line: 22, column: 4 }, end: { line: 22, column: 40 } }, '4': { start: { line: 24, column: 2 }, end: { line: 24, column: 64 } }, '5': { start: { line: 28, column: 2 }, end: { line: 30, column: 3 } }, '6': { start: { line: 29, column: 4 }, end: { line: 29, column: 40 } }, '7': { start: { line: 31, column: 2 }, end: { line: 31, column: 65 } }, '8': { start: { line: 35, column: 2 }, end: { line: 37, column: 3 } }, '9': { start: { line: 36, column: 4 }, end: { line: 36, column: 40 } }, '10': { start: { line: 38, column: 2 }, end: { line: 38, column: 67 } }, '11': { start: { line: 42, column: 2 }, end: { line: 44, column: 3 } }, '12': { start: { line: 43, column: 4 }, end: { line: 43, column: 40 } }, '13': { start: { line: 45, column: 2 }, end: { line: 45, column: 67 } }, '14': { start: { line: 49, column: 2 }, end: { line: 51, column: 3 } }, '15': { start: { line: 50, column: 4 }, end: { line: 50, column: 40 } }, '16': { start: { line: 52, column: 2 }, end: { line: 52, column: 65 } } }, fnMap: { '0': { name: 'create', decl: { start: { line: 10, column: 16 }, end: { line: 10, column: 22 } }, loc: { start: { line: 10, column: 32 }, end: { line: 12, column: 1 } }, line: 10 }, '1': { name: 'diff', decl: { start: { line: 20, column: 16 }, end: { line: 20, column: 20 } }, loc: { start: { line: 20, column: 23 }, end: { line: 25, column: 1 } }, line: 20 }, '2': { name: 'patch', decl: { start: { line: 27, column: 16 }, end: { line: 27, column: 21 } }, loc: { start: { line: 27, column: 24 }, end: { line: 32, column: 1 } }, line: 27 }, '3': { name: 'unpatch', decl: { start: { line: 34, column: 16 }, end: { line: 34, column: 23 } }, loc: { start: { line: 34, column: 26 }, end: { line: 39, column: 1 } }, line: 34 }, '4': { name: 'reverse', decl: { start: { line: 41, column: 16 }, end: { line: 41, column: 23 } }, loc: { start: { line: 41, column: 26 }, end: { line: 46, column: 1 } }, line: 41 }, '5': { name: 'clone', decl: { start: { line: 48, column: 16 }, end: { line: 48, column: 21 } }, loc: { start: { line: 48, column: 24 }, end: { line: 53, column: 1 } }, line: 48 } }, branchMap: { '0': { loc: { start: { line: 21, column: 2 }, end: { line: 23, column: 3 } }, type: 'if', locations: [{ start: { line: 21, column: 2 }, end: { line: 23, column: 3 } }, { start: { line: 21, column: 2 }, end: { line: 23, column: 3 } }], line: 21 }, '1': { loc: { start: { line: 28, column: 2 }, end: { line: 30, column: 3 } }, type: 'if', locations: [{ start: { line: 28, column: 2 }, end: { line: 30, column: 3 } }, { start: { line: 28, column: 2 }, end: { line: 30, column: 3 } }], line: 28 }, '2': { loc: { start: { line: 35, column: 2 }, end: { line: 37, column: 3 } }, type: 'if', locations: [{ start: { line: 35, column: 2 }, end: { line: 37, column: 3 } }, { start: { line: 35, column: 2 }, end: { line: 37, column: 3 } }], line: 35 }, '3': { loc: { start: { line: 42, column: 2 }, end: { line: 44, column: 3 } }, type: 'if', locations: [{ start: { line: 42, column: 2 }, end: { line: 44, column: 3 } }, { start: { line: 42, column: 2 }, end: { line: 44, column: 3 } }], line: 42 }, '4': { loc: { start: { line: 49, column: 2 }, end: { line: 51, column: 3 } }, type: 'if', locations: [{ start: { line: 49, column: 2 }, end: { line: 51, column: 3 } }, { start: { line: 49, column: 2 }, end: { line: 51, column: 3 } }], line: 49 } }, s: { '0': 0, '1': 0, '2': 0, '3': 0, '4': 0, '5': 0, '6': 0, '7': 0, '8': 0, '9': 0, '10': 0, '11': 0, '12': 0, '13': 0, '14': 0, '15': 0, '16': 0 }, f: { '0': 0, '1': 0, '2': 0, '3': 0, '4': 0, '5': 0 }, b: { '0': [0, 0], '1': [0, 0], '2': [0, 0], '3': [0, 0], '4': [0, 0] }, _coverageSchema: '332fd63041d2c1bcb487cc26dd0d5f7d97098a6c' },
      coverage = global[gcv] || (global[gcv] = {});if (coverage[path] && coverage[path].hash === hash) {
    return coverage[path];
  }coverageData.hash = hash;return coverage[path] = coverageData;
}();var defaultInstance$4 = (cov_1abk1frsq9.s[1]++, void 0);function diff() {
  cov_1abk1frsq9.f[1]++;cov_1abk1frsq9.s[2]++;if (!defaultInstance$4) {
    cov_1abk1frsq9.b[0][0]++;cov_1abk1frsq9.s[3]++;defaultInstance$4 = new DiffPatcher();
  } else {
    cov_1abk1frsq9.b[0][1]++;
  }cov_1abk1frsq9.s[4]++;return defaultInstance$4.diff.apply(defaultInstance$4, arguments);
}function patch() {
  cov_1abk1frsq9.f[2]++;cov_1abk1frsq9.s[5]++;if (!defaultInstance$4) {
    cov_1abk1frsq9.b[1][0]++;cov_1abk1frsq9.s[6]++;defaultInstance$4 = new DiffPatcher();
  } else {
    cov_1abk1frsq9.b[1][1]++;
  }cov_1abk1frsq9.s[7]++;return defaultInstance$4.patch.apply(defaultInstance$4, arguments);
}function unpatch() {
  cov_1abk1frsq9.f[3]++;cov_1abk1frsq9.s[8]++;if (!defaultInstance$4) {
    cov_1abk1frsq9.b[2][0]++;cov_1abk1frsq9.s[9]++;defaultInstance$4 = new DiffPatcher();
  } else {
    cov_1abk1frsq9.b[2][1]++;
  }cov_1abk1frsq9.s[10]++;return defaultInstance$4.unpatch.apply(defaultInstance$4, arguments);
}function reverse() {
  cov_1abk1frsq9.f[4]++;cov_1abk1frsq9.s[11]++;if (!defaultInstance$4) {
    cov_1abk1frsq9.b[3][0]++;cov_1abk1frsq9.s[12]++;defaultInstance$4 = new DiffPatcher();
  } else {
    cov_1abk1frsq9.b[3][1]++;
  }cov_1abk1frsq9.s[13]++;return defaultInstance$4.reverse.apply(defaultInstance$4, arguments);
}function clone$1() {
  cov_1abk1frsq9.f[5]++;cov_1abk1frsq9.s[14]++;if (!defaultInstance$4) {
    cov_1abk1frsq9.b[4][0]++;cov_1abk1frsq9.s[15]++;defaultInstance$4 = new DiffPatcher();
  } else {
    cov_1abk1frsq9.b[4][1]++;
  }cov_1abk1frsq9.s[16]++;return defaultInstance$4.clone.apply(defaultInstance$4, arguments);
}

var examples = {};

var exampleDate = function exampleDate() {
  return new Date(2020, 10, 30, 15, 10, 3);
};

/* jshint camelcase: false */
/* jshint multistr: true */

examples.atomicValues = [
// undefined
{
  left: undefined,
  right: undefined,
  delta: undefined,
  reverse: undefined
}, {
  left: undefined,
  right: null,
  delta: [null],
  reverse: [null, 0, 0]
}, {
  left: undefined,
  right: false,
  delta: [false],
  reverse: [false, 0, 0]
}, {
  left: undefined,
  right: true,
  delta: [true],
  reverse: [true, 0, 0]
}, {
  left: undefined,
  right: 42,
  delta: [42],
  reverse: [42, 0, 0]
}, {
  left: undefined,
  right: 'some text',
  delta: ['some text'],
  reverse: ['some text', 0, 0]
}, {
  left: undefined,
  right: exampleDate(),
  delta: [exampleDate()],
  reverse: [exampleDate(), 0, 0]
}, {
  left: undefined,
  right: {
    a: 1,
    b: 2
  },
  delta: [{
    a: 1,
    b: 2
  }],
  reverse: [{
    a: 1,
    b: 2
  }, 0, 0]
}, {
  left: undefined,
  right: [1, 2, 3],
  delta: [[1, 2, 3]],
  reverse: [[1, 2, 3], 0, 0]
}, {
  left: undefined,
  right: function right(x) {
    return x * x;
  },

  error: /not supported/
},

// null
{
  left: null,
  right: null,
  delta: undefined,
  reverse: undefined
}, {
  left: null,
  right: false,
  delta: [null, false],
  reverse: [false, null]
}, {
  left: null,
  right: true,
  delta: [null, true],
  reverse: [true, null]
}, {
  left: null,
  right: 42,
  delta: [null, 42],
  reverse: [42, null]
}, {
  left: null,
  right: 'some text',
  delta: [null, 'some text'],
  reverse: ['some text', null]
}, {
  left: null,
  right: exampleDate(),
  delta: [null, exampleDate()],
  reverse: [exampleDate(), null]
}, {
  left: null,
  right: {
    a: 1,
    b: 2
  },
  delta: [null, {
    a: 1,
    b: 2
  }],
  reverse: [{
    a: 1,
    b: 2
  }, null]
}, {
  left: null,
  right: function right(x) {
    return x * x;
  },

  error: /not supported/
},

// false
{
  left: false,
  right: false,
  delta: undefined,
  reverse: undefined
}, {
  left: false,
  right: true,
  delta: [false, true],
  reverse: [true, false]
}, {
  left: false,
  right: 42,
  delta: [false, 42],
  reverse: [42, false]
}, {
  left: false,
  right: 'some text',
  delta: [false, 'some text'],
  reverse: ['some text', false]
}, {
  left: false,
  right: exampleDate(),
  delta: [false, exampleDate()],
  reverse: [exampleDate(), false]
}, {
  left: false,
  right: {
    a: 1,
    b: 2
  },
  delta: [false, {
    a: 1,
    b: 2
  }],
  reverse: [{
    a: 1,
    b: 2
  }, false]
}, {
  left: false,
  right: [1, 2, 3],
  delta: [false, [1, 2, 3]],
  reverse: [[1, 2, 3], false]
}, {
  left: false,
  right: function right(x) {
    return x * x;
  },

  error: /not supported/
},

// true
{
  left: true,
  right: true,
  delta: undefined,
  reverse: undefined
}, {
  left: true,
  right: 42,
  delta: [true, 42],
  reverse: [42, true]
}, {
  left: true,
  right: 'some text',
  delta: [true, 'some text'],
  reverse: ['some text', true]
}, {
  left: true,
  right: exampleDate(),
  delta: [true, exampleDate()],
  reverse: [exampleDate(), true]
}, {
  left: true,
  right: {
    a: 1,
    b: 2
  },
  delta: [true, {
    a: 1,
    b: 2
  }],
  reverse: [{
    a: 1,
    b: 2
  }, true]
}, {
  left: true,
  right: [1, 2, 3],
  delta: [true, [1, 2, 3]],
  reverse: [[1, 2, 3], true]
}, {
  left: true,
  right: function right(x) {
    return x * x;
  },

  error: /not supported/
},

// number
{
  name: 'number -> same number',
  left: 42,
  right: 42,
  delta: undefined,
  reverse: undefined
}, {
  left: 42,
  right: -1,
  delta: [42, -1],
  reverse: [-1, 42]
}, {
  left: 42,
  right: 'some text',
  delta: [42, 'some text'],
  reverse: ['some text', 42]
}, {
  left: 42,
  right: exampleDate(),
  delta: [42, exampleDate()],
  reverse: [exampleDate(), 42]
}, {
  left: 42,
  right: {
    a: 1,
    b: 2
  },
  delta: [42, {
    a: 1,
    b: 2
  }],
  reverse: [{
    a: 1,
    b: 2
  }, 42]
}, {
  left: 42,
  right: [1, 2, 3],
  delta: [42, [1, 2, 3]],
  reverse: [[1, 2, 3], 42]
}, {
  left: 42,
  right: function right(x) {
    return x * x;
  },

  error: /not supported/
},

// string
{
  name: 'string -> same string',
  left: 'some text',
  right: 'some text',
  delta: undefined,
  reverse: undefined
}, {
  left: 'some text',
  right: 'some fext',
  delta: ['some text', 'some fext'],
  reverse: ['some fext', 'some text']
}, {
  left: 'some text',
  right: exampleDate(),
  delta: ['some text', exampleDate()],
  reverse: [exampleDate(), 'some text']
}, {
  left: 'some text',
  right: {
    a: 1,
    b: 2
  },
  delta: ['some text', {
    a: 1,
    b: 2
  }],
  reverse: [{
    a: 1,
    b: 2
  }, 'some text']
}, {
  left: 'some text',
  right: [1, 2, 3],
  delta: ['some text', [1, 2, 3]],
  reverse: [[1, 2, 3], 'some text']
},

// Date
{
  name: 'Date -> same Date',
  left: exampleDate(),
  right: exampleDate(),
  delta: undefined,
  reverse: undefined
}, {
  left: exampleDate(),
  right: new Date(2020, 5, 31, 15, 12, 30),
  delta: [exampleDate(), new Date(2020, 5, 31, 15, 12, 30)],
  reverse: [new Date(2020, 5, 31, 15, 12, 30), exampleDate()]
}, {
  left: exampleDate(),
  right: {
    a: 1,
    b: 2
  },
  delta: [exampleDate(), {
    a: 1,
    b: 2
  }],
  reverse: [{
    a: 1,
    b: 2
  }, exampleDate()]
}, {
  left: exampleDate(),
  right: [1, 2, 3],
  delta: [exampleDate(), [1, 2, 3]],
  reverse: [[1, 2, 3], exampleDate()]
}, {
  left: exampleDate(),
  right: function right(x) {
    return x * x;
  },

  error: /not supported/
},

// Function
{
  name: 'string -> Function',
  left: 'some text',
  right: function right(x) {
    return x * x;
  },

  error: /not supported/
},

// RegExp
{
  name: 'RegExp -> RegExp',
  left: /regex/g,
  right: /another regex/gi,
  delta: ['/regex/g', '/another regex/gi'],
  reverse: ['/another regex/gi', '/regex/g']
},

// object
{
  name: 'object -> same object',
  left: {
    a: 1,
    b: 2
  },
  right: {
    a: 1,
    b: 2
  },
  delta: undefined,
  reverse: undefined
}, {
  left: {
    a: 1,
    b: 2
  },
  right: [1, 2, 3],
  delta: [{
    a: 1,
    b: 2
  }, [1, 2, 3]],
  reverse: [[1, 2, 3], {
    a: 1,
    b: 2
  }]
}, {
  left: {
    a: 1,
    b: 2
  },
  right: function right(x) {
    return x * x;
  },

  error: /not supported/
},

// array
{
  name: 'array -> same array',
  left: [1, 2, 3],
  right: [1, 2, 3],
  delta: undefined,
  reverse: undefined
}, {
  left: [1, 2, 3],
  right: function right(x) {
    return x * x;
  },

  error: /not supported/
}, 0];

var shortText = 'Madre,\ncuando yo sea grande\nquisiera hacer versos';
var largeText = '-Madre,\ncuando yo sea grande\nser\xE9 marinero.\n\nAhora estoy jugando\nque aquello es un puerto\ny que \xE9ste es un barco\ny \xE9stos son dos remos\ny por ese r\xEDo\nnavego y navego.\n\n(Agua, arena, piedras\ny dos palos viejos:\nun r\xEDo y un barco,\nun puerto y dos remos).\n\n-Madre,\ncuando yo sea grande\nser\xE9 jardinero.\n\nAhora estoy jugando\nque esto es un cantero,\naqu\xE9l un rosal,\n\xE9ste un jazminero\ny \xE9se es un camino\nque va por el medio.\n\n(Tierra, flores, hojas\ny unos tallos secos:\ncantero, camino,\nrosal, jazminero).\n\n-Madre,\ncuando yo sea grande\nquisiera hacer versos.\n\n-\xBFCon qu\xE9 est\xE1s jugando?\n\n-Madre, miro el cielo.\n\n(En dos ojos claros\ntodo el Universo).';

examples.text = [{
  left: shortText,
  right: largeText,
  delta: [shortText, largeText],
  reverse: [largeText, shortText]
}, {
  left: largeText,
  right: largeText.replace(/jazminero/g, 'rosal'),
  delta: ['@@ -360,25 +360,21 @@\n %C3%A9ste un \n-jazminero\n+rosal' + '\n %0Ay %C3%A9se e\n@@ -479,17 +479,13 @@\n' + ' al, \n-jazminero\n+rosal\n ).%0A%0A\n', 0, 2],
  reverse: ['@@ -360,21 +360,25 @@\n %C3%A9ste un \n-rosal\n+jazminero\n %0Ay' + ' %C3%A9se e\n@@ -479,21 +479,25 @@\n %0Arosal,' + ' \n-rosal\n+jazminero\n ).%0A%0A-Mad\n', 0, 2],
  exactReverse: false
}, {
  name: 'larger than min length',
  options: {
    textDiff: {
      minLength: 10
    }
  },
  left: largeText.substr(0, 10),
  right: largeText.substr(0, 11).replace(/Madre/g, 'Padre'),
  delta: ['@@ -1,10 +1,11 @@\n -\n-M\n+P\n adre,%0Acu\n+a\n', 0, 2],
  reverse: ['@@ -1,11 +1,10 @@\n -\n-P\n+M\n adre,%0Acu\n-a\n', 0, 2],
  exactReverse: false
}, {
  name: 'shorter than min length',
  options: {
    textDiff: {
      minLength: 10
    }
  },
  left: largeText.substr(0, 9),
  right: largeText.substr(0, 11).replace(/Madre/g, 'Padre'),
  delta: ['-Madre,\nc', '-Padre,\ncua'],
  reverse: ['-Padre,\ncua', '-Madre,\nc'],
  exactReverse: false
}, 0];

examples.objects = [{
  name: 'first level',
  left: {
    a: 1,
    b: 2
  },
  right: {
    a: 42,
    b: 2
  },
  delta: {
    a: [1, 42]
  },
  reverse: {
    a: [42, 1]
  }
}, {
  name: 'deep level',
  left: {
    a: {
      j: {
        k: {
          l: {
            m: {
              n: {
                o: 3
              }
            }
          }
        }
      }
    },
    b: 2
  },
  right: {
    a: {
      j: {
        k: {
          l: {
            m: {
              n: {
                o: true
              }
            }
          }
        }
      }
    },
    b: 2
  },
  delta: {
    a: {
      j: {
        k: {
          l: {
            m: {
              n: {
                o: [3, true]
              }
            }
          }
        }
      }
    }
  },
  reverse: {
    a: {
      j: {
        k: {
          l: {
            m: {
              n: {
                o: [true, 3]
              }
            }
          }
        }
      }
    }
  }
}, {
  name: 'multiple changes',
  left: {
    a: {
      j: {
        k: {
          l: {
            m: {
              n: {
                o: 3
              }
            }
          }
        }
      }
    },
    b: 2,
    c: 5
  },
  right: {
    a: {
      j: {
        k: {
          l: {
            m: {
              n: {
                o: 5,
                w: 12
              }
            }
          }
        }
      }
    },
    b: 2
  },
  delta: {
    a: {
      j: {
        k: {
          l: {
            m: {
              n: {
                o: [3, 5],
                w: [12]
              }
            }
          }
        }
      }
    },
    c: [5, 0, 0]
  },
  reverse: {
    a: {
      j: {
        k: {
          l: {
            m: {
              n: {
                o: [5, 3],
                w: [12, 0, 0]
              }
            }
          }
        }
      }
    },
    c: [5]
  }
}, {
  name: 'key removed',
  left: {
    a: 1,
    b: 2
  },
  right: {
    a: 1
  },
  delta: {
    b: [2, 0, 0]
  },
  reverse: {
    b: [2]
  }
}, {
  name: 'hasOwnProperty',
  /* jshint ignore:start */
  left: {
    hasOwnProperty: true
  },
  right: {
    hasOwnProperty: true
  }
  /* jshint ignore:end */
}, 0];

examples.arrays = [{
  name: 'simple values',
  left: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  right: [1, 3, 4, 5, 8, 9, 9.1, 10],
  delta: {
    _t: 'a',
    _1: [2, 0, 0],
    _5: [6, 0, 0],
    _6: [7, 0, 0],
    6: [9.1]
  },
  reverse: {
    _t: 'a',
    1: [2],
    5: [6],
    6: [7],
    _6: [9.1, 0, 0]
  }
}, {
  name: 'added block',
  left: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  right: [1, 2, 3, 4, 5, 5.1, 5.2, 5.3, 6, 7, 8, 9, 10],
  delta: {
    _t: 'a',
    5: [5.1],
    6: [5.2],
    7: [5.3]
  },
  reverse: {
    _t: 'a',
    _5: [5.1, 0, 0],
    _6: [5.2, 0, 0],
    _7: [5.3, 0, 0]
  }
}, {
  name: 'movements',
  left: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  right: [1, 2, 3, 7, 5, 6, 8, 9, 4, 10],
  delta: {
    _t: 'a',
    _3: ['', 8, 3],
    _6: ['', 3, 3]
  },
  reverse: {
    _t: 'a',
    _3: ['', 6, 3],
    _8: ['', 3, 3]
  }
}, {
  name: 'movements(2)',
  left: [1, 2, 3, 4],
  right: [2, 4, 1, 3],
  delta: {
    _t: 'a',
    _1: ['', 0, 3],
    _3: ['', 1, 3]
  },
  reverse: {
    _t: 'a',
    _2: ['', 0, 3],
    _3: ['', 2, 3]
  },
  exactReverse: false
}, {
  name: 'nested',
  options: {
    objectHash: function objectHash(obj) {
      if (obj && obj.id) {
        return obj.id;
      }
    }
  },
  left: [1, 2, {
    id: 4,
    width: 10
  }, 4, {
    id: 'five',
    width: 4
  }, 6, 7, 8, 9, 10],
  right: [1, 2, {
    id: 4,
    width: 12
  }, 4, {
    id: 'five',
    width: 4
  }, 6, 7, 8, 9, 10],
  delta: {
    _t: 'a',
    2: {
      width: [10, 12]
    }
  },
  reverse: {
    _t: 'a',
    2: {
      width: [12, 10]
    }
  }
}, {
  name: 'nested with movement',
  options: {
    objectHash: function objectHash(obj) {
      if (obj && obj.id) {
        return obj.id;
      }
    }
  },
  left: [1, 2, 4, {
    id: 'five',
    width: 4
  }, 6, 7, 8, {
    id: 4,
    width: 10,
    height: 3
  }, 9, 10],
  right: [1, 2, {
    id: 4,
    width: 12
  }, 4, {
    id: 'five',
    width: 4
  }, 6, 7, 8, 9, 10],
  delta: {
    _t: 'a',
    2: {
      width: [10, 12],
      height: [3, 0, 0]
    },
    _7: ['', 2, 3]
  },
  reverse: {
    _t: 'a',
    7: {
      width: [12, 10],
      height: [3]
    },
    _2: ['', 7, 3]
  }
}, {
  name: 'nested changes among array insertions and deletions',
  options: {
    objectHash: function objectHash(obj) {
      if (obj && obj.id) {
        return obj.id;
      }
    }
  },
  left: [{
    id: 1
  }, {
    id: 2
  }, {
    id: 4
  }, {
    id: 5
  }, {
    id: 6,
    inner: {
      property: 'abc'
    }
  }, {
    id: 7
  }, {
    id: 8
  }, {
    id: 10
  }, {
    id: 11
  }, {
    id: 12
  }],
  right: [{
    id: 3
  }, {
    id: 4
  }, {
    id: 6,
    inner: {
      property: 'abcd'
    }
  }, {
    id: 9
  }],
  delta: {
    _t: 'a',
    0: [{ id: 3 }],
    2: {
      inner: {
        property: ['abc', 'abcd']
      }
    },
    3: [{ id: 9 }],
    _0: [{ id: 1 }, 0, 0],
    _1: [{ id: 2 }, 0, 0],
    _3: [{ id: 5 }, 0, 0],
    _5: [{ id: 7 }, 0, 0],
    _6: [{ id: 8 }, 0, 0],
    _7: [{ id: 10 }, 0, 0],
    _8: [{ id: 11 }, 0, 0],
    _9: [{ id: 12 }, 0, 0]
  },
  reverse: {
    _t: 'a',
    0: [{ id: 1 }],
    1: [{ id: 2 }],
    3: [{ id: 5 }],
    4: {
      inner: {
        property: ['abcd', 'abc']
      }
    },
    5: [{ id: 7 }],
    6: [{ id: 8 }],
    7: [{ id: 10 }],
    8: [{ id: 11 }],
    9: [{ id: 12 }],
    _0: [{ id: 3 }, 0, 0],
    _3: [{ id: 9 }, 0, 0]
  }
}, {
  name: 'nested change with item moved above',
  options: {
    objectHash: function objectHash(obj) {
      if (obj && obj.id) {
        return obj.id;
      }
    }
  },
  left: [{
    id: 1
  }, {
    id: 2
  }, {
    id: 3,
    inner: {
      property: 'abc'
    }
  }, {
    id: 4
  }, {
    id: 5
  }, {
    id: 6
  }],
  right: [{
    id: 1
  }, {
    id: 2
  }, {
    id: 6
  }, {
    id: 3,
    inner: {
      property: 'abcd'
    }
  }, {
    id: 4
  }, {
    id: 5
  }],
  delta: {
    _t: 'a',
    3: {
      inner: {
        property: ['abc', 'abcd']
      }
    },
    _5: ['', 2, 3]
  },
  reverse: {
    _t: 'a',
    2: {
      inner: {
        property: ['abcd', 'abc']
      }
    },
    _2: ['', 5, 3]
  }
}, {
  name: 'nested change with item moved right above',
  options: {
    objectHash: function objectHash(obj) {
      if (obj && obj.id) {
        return obj.id;
      }
    }
  },
  left: [{
    id: 1
  }, {
    id: 2,
    inner: {
      property: 'abc'
    }
  }, {
    id: 3
  }],
  right: [{
    id: 1
  }, {
    id: 3
  }, {
    id: 2,
    inner: {
      property: 'abcd'
    }
  }],
  delta: {
    _t: 'a',
    2: {
      inner: {
        property: ['abc', 'abcd']
      }
    },
    _2: ['', 1, 3]
  },
  reverse: {
    _t: 'a',
    1: {
      inner: {
        property: ['abcd', 'abc']
      }
    },
    _2: ['', 1, 3]
  },
  exactReverse: false
}, {
  name: 'nested change with item moved right below',
  options: {
    objectHash: function objectHash(obj) {
      if (obj && obj.id) {
        return obj.id;
      }
    }
  },
  left: [{
    id: 1
  }, {
    id: 2
  }, {
    id: 3,
    inner: {
      property: 'abc'
    }
  }, {
    id: 4
  }],
  right: [{
    id: 2
  }, {
    id: 3,
    inner: {
      property: 'abcd'
    }
  }, {
    id: 1
  }, {
    id: 4
  }],
  delta: {
    _t: 'a',
    1: {
      inner: {
        property: ['abc', 'abcd']
      }
    },
    _0: ['', 2, 3]
  },
  reverse: {
    _t: 'a',
    2: {
      inner: {
        property: ['abcd', 'abc']
      }
    },
    _2: ['', 0, 3]
  }
}, {
  name: 'nested with movements using custom objectHash',
  options: {
    objectHash: function objectHash(obj) {
      if (obj && obj.itemKey) {
        return obj.itemKey;
      }
    }
  },
  left: [1, 2, 4, {
    itemKey: 'five',
    width: 4
  }, 6, 7, 8, {
    itemKey: 4,
    width: 10,
    height: 3
  }, 9, 10],
  right: [1, 2, {
    itemKey: 4,
    width: 12
  }, 4, {
    itemKey: 'five',
    width: 4
  }, 6, 7, 8, 9, 10],
  delta: {
    _t: 'a',
    2: {
      width: [10, 12],
      height: [3, 0, 0]
    },
    _7: ['', 2, 3]
  },
  reverse: {
    _t: 'a',
    7: {
      width: [12, 10],
      height: [3]
    },
    _2: ['', 7, 3]
  }
}, {
  name: 'using property filter',
  options: {
    propertyFilter: function propertyFilter(name /*, context */) {
      return name.slice(0, 1) !== '$';
    }
  },
  left: {
    inner: {
      $volatileData: 345,
      $oldVolatileData: 422,
      nonVolatile: 432
    }
  },
  right: {
    inner: {
      $volatileData: 346,
      $newVolatileData: 32,
      nonVolatile: 431
    }
  },
  delta: {
    inner: {
      nonVolatile: [432, 431]
    }
  },
  reverse: {
    inner: {
      nonVolatile: [431, 432]
    }
  },
  noPatch: true
}, 0];

var cov_2pglahz8hh$1=function(){var path='/Users/wangjie/project/plugins/jsondiffpatch/src/filters/lcs.js',hash='a924ebf506e7bba430f0b68b4b359e7a0138bbe7',Function=function(){}.constructor,global=new Function('return this')(),gcv='__coverage__',coverageData={path:'/Users/wangjie/project/plugins/jsondiffpatch/src/filters/lcs.js',statementMap:{'0':{start:{line:9,column:19},end:{line:11,column:1}},'1':{start:{line:10,column:2},end:{line:10,column:43}},'2':{start:{line:13,column:19},end:{line:39,column:1}},'3':{start:{line:14,column:13},end:{line:14,column:26}},'4':{start:{line:15,column:13},end:{line:15,column:26}},'5':{start:{line:16,column:10},end:{line:16,column:16}},'6':{start:{line:17,column:10},end:{line:17,column:16}},'7':{start:{line:20,column:15},end:{line:20,column:25}},'8':{start:{line:21,column:2},end:{line:26,column:3}},'9':{start:{line:22,column:4},end:{line:22,column:27}},'10':{start:{line:23,column:4},end:{line:25,column:5}},'11':{start:{line:24,column:6},end:{line:24,column:23}},'12':{start:{line:27,column:2},end:{line:27,column:23}},'13':{start:{line:29,column:2},end:{line:37,column:3}},'14':{start:{line:30,column:4},end:{line:36,column:5}},'15':{start:{line:31,column:6},end:{line:35,column:7}},'16':{start:{line:32,column:8},end:{line:32,column:48}},'17':{start:{line:34,column:8},end:{line:34,column:68}},'18':{start:{line:38,column:2},end:{line:38,column:16}},'19':{start:{line:41,column:16},end:{line:69,column:1}},'20':{start:{line:42,column:15},end:{line:42,column:28}},'21':{start:{line:43,column:15},end:{line:43,column:28}},'22':{start:{line:44,column:20},end:{line:48,column:3}},'23':{start:{line:50,column:2},end:{line:67,column:3}},'24':{start:{line:51,column:21},end:{line:51,column:82}},'25':{start:{line:52,column:4},end:{line:66,column:5}},'26':{start:{line:53,column:6},end:{line:53,column:55}},'27':{start:{line:54,column:6},end:{line:54,column:47}},'28':{start:{line:55,column:6},end:{line:55,column:47}},'29':{start:{line:56,column:6},end:{line:56,column:15}},'30':{start:{line:57,column:6},end:{line:57,column:15}},'31':{start:{line:59,column:31},end:{line:59,column:57}},'32':{start:{line:60,column:30},end:{line:60,column:56}},'33':{start:{line:61,column:6},end:{line:65,column:7}},'34':{start:{line:62,column:8},end:{line:62,column:17}},'35':{start:{line:64,column:8},end:{line:64,column:17}},'36':{start:{line:68,column:2},end:{line:68,column:21}},'37':{start:{line:71,column:10},end:{line:79,column:1}},'38':{start:{line:72,column:21},end:{line:72,column:34}},'39':{start:{line:73,column:15},end:{line:73,column:80}},'40':{start:{line:74,column:15},end:{line:74,column:62}},'41':{start:{line:75,column:2},end:{line:77,column:3}},'42':{start:{line:76,column:4},end:{line:76,column:47}},'43':{start:{line:78,column:2},end:{line:78,column:16}}},fnMap:{'0':{name:'defaultMatch',decl:{start:{line:9,column:28},end:{line:9,column:40}},loc:{start:{line:9,column:73},end:{line:11,column:1}},line:9},'1':{name:'lengthMatrix',decl:{start:{line:13,column:28},end:{line:13,column:40}},loc:{start:{line:13,column:73},end:{line:39,column:1}},line:13},'2':{name:'backtrack',decl:{start:{line:41,column:25},end:{line:41,column:34}},loc:{start:{line:41,column:68},end:{line:69,column:1}},line:41},'3':{name:'get',decl:{start:{line:71,column:19},end:{line:71,column:22}},loc:{start:{line:71,column:55},end:{line:79,column:1}},line:71}},branchMap:{'0':{loc:{start:{line:31,column:6},end:{line:35,column:7}},type:'if',locations:[{start:{line:31,column:6},end:{line:35,column:7}},{start:{line:31,column:6},end:{line:35,column:7}}],line:31},'1':{loc:{start:{line:50,column:9},end:{line:50,column:37}},type:'binary-expr',locations:[{start:{line:50,column:9},end:{line:50,column:21}},{start:{line:50,column:25},end:{line:50,column:37}}],line:50},'2':{loc:{start:{line:52,column:4},end:{line:66,column:5}},type:'if',locations:[{start:{line:52,column:4},end:{line:66,column:5}},{start:{line:52,column:4},end:{line:66,column:5}}],line:52},'3':{loc:{start:{line:61,column:6},end:{line:65,column:7}},type:'if',locations:[{start:{line:61,column:6},end:{line:65,column:7}},{start:{line:61,column:6},end:{line:65,column:7}}],line:61},'4':{loc:{start:{line:72,column:21},end:{line:72,column:34}},type:'binary-expr',locations:[{start:{line:72,column:21},end:{line:72,column:28}},{start:{line:72,column:32},end:{line:72,column:34}}],line:72},'5':{loc:{start:{line:73,column:44},end:{line:73,column:65}},type:'binary-expr',locations:[{start:{line:73,column:44},end:{line:73,column:49}},{start:{line:73,column:53},end:{line:73,column:65}}],line:73},'6':{loc:{start:{line:75,column:2},end:{line:77,column:3}},type:'if',locations:[{start:{line:75,column:2},end:{line:77,column:3}},{start:{line:75,column:2},end:{line:77,column:3}}],line:75},'7':{loc:{start:{line:75,column:6},end:{line:75,column:62}},type:'binary-expr',locations:[{start:{line:75,column:6},end:{line:75,column:32}},{start:{line:75,column:36},end:{line:75,column:62}}],line:75}},s:{'0':0,'1':0,'2':0,'3':0,'4':0,'5':0,'6':0,'7':0,'8':0,'9':0,'10':0,'11':0,'12':0,'13':0,'14':0,'15':0,'16':0,'17':0,'18':0,'19':0,'20':0,'21':0,'22':0,'23':0,'24':0,'25':0,'26':0,'27':0,'28':0,'29':0,'30':0,'31':0,'32':0,'33':0,'34':0,'35':0,'36':0,'37':0,'38':0,'39':0,'40':0,'41':0,'42':0,'43':0},f:{'0':0,'1':0,'2':0,'3':0},b:{'0':[0,0],'1':[0,0],'2':[0,0],'3':[0,0],'4':[0,0],'5':[0,0],'6':[0,0],'7':[0,0]},_coverageSchema:'332fd63041d2c1bcb487cc26dd0d5f7d97098a6c'},coverage=global[gcv]||(global[gcv]={});if(coverage[path]&&coverage[path].hash===hash){return coverage[path];}coverageData.hash=hash;return coverage[path]=coverageData;}();cov_2pglahz8hh$1.s[0]++;var defaultMatch$1=function defaultMatch(array1,array2,index1,index2){cov_2pglahz8hh$1.f[0]++;cov_2pglahz8hh$1.s[1]++;return array1[index1]===array2[index2];};cov_2pglahz8hh$1.s[2]++;var lengthMatrix$1=function lengthMatrix(array1,array2,match,context){cov_2pglahz8hh$1.f[1]++;var len1=(cov_2pglahz8hh$1.s[3]++, array1.length);var len2=(cov_2pglahz8hh$1.s[4]++, array2.length);var x=(cov_2pglahz8hh$1.s[5]++, void 0),y=(cov_2pglahz8hh$1.s[6]++, void 0);var matrix=(cov_2pglahz8hh$1.s[7]++, [len1+1]);cov_2pglahz8hh$1.s[8]++;for(x=0;x<len1+1;x++){cov_2pglahz8hh$1.s[9]++;matrix[x]=[len2+1];cov_2pglahz8hh$1.s[10]++;for(y=0;y<len2+1;y++){cov_2pglahz8hh$1.s[11]++;matrix[x][y]=0;}}cov_2pglahz8hh$1.s[12]++;matrix.match=match;cov_2pglahz8hh$1.s[13]++;for(x=1;x<len1+1;x++){cov_2pglahz8hh$1.s[14]++;for(y=1;y<len2+1;y++){cov_2pglahz8hh$1.s[15]++;if(match(array1,array2,x-1,y-1,context)){cov_2pglahz8hh$1.b[0][0]++;cov_2pglahz8hh$1.s[16]++;matrix[x][y]=matrix[x-1][y-1]+1;}else{cov_2pglahz8hh$1.b[0][1]++;cov_2pglahz8hh$1.s[17]++;matrix[x][y]=Math.max(matrix[x-1][y],matrix[x][y-1]);}}}cov_2pglahz8hh$1.s[18]++;return matrix;};cov_2pglahz8hh$1.s[19]++;var backtrack$1=function backtrack(matrix,array1,array2,context){cov_2pglahz8hh$1.f[2]++;var index1=(cov_2pglahz8hh$1.s[20]++, array1.length);var index2=(cov_2pglahz8hh$1.s[21]++, array2.length);var subsequence=(cov_2pglahz8hh$1.s[22]++, {sequence:[],indices1:[],indices2:[]});cov_2pglahz8hh$1.s[23]++;while((cov_2pglahz8hh$1.b[1][0]++, index1!==0)&&(cov_2pglahz8hh$1.b[1][1]++, index2!==0)){var sameLetter=(cov_2pglahz8hh$1.s[24]++, matrix.match(array1,array2,index1-1,index2-1,context));cov_2pglahz8hh$1.s[25]++;if(sameLetter){cov_2pglahz8hh$1.b[2][0]++;cov_2pglahz8hh$1.s[26]++;subsequence.sequence.unshift(array1[index1-1]);cov_2pglahz8hh$1.s[27]++;subsequence.indices1.unshift(index1-1);cov_2pglahz8hh$1.s[28]++;subsequence.indices2.unshift(index2-1);cov_2pglahz8hh$1.s[29]++;--index1;cov_2pglahz8hh$1.s[30]++;--index2;}else{cov_2pglahz8hh$1.b[2][1]++;var valueAtMatrixAbove=(cov_2pglahz8hh$1.s[31]++, matrix[index1][index2-1]);var valueAtMatrixLeft=(cov_2pglahz8hh$1.s[32]++, matrix[index1-1][index2]);cov_2pglahz8hh$1.s[33]++;if(valueAtMatrixAbove>valueAtMatrixLeft){cov_2pglahz8hh$1.b[3][0]++;cov_2pglahz8hh$1.s[34]++;--index2;}else{cov_2pglahz8hh$1.b[3][1]++;cov_2pglahz8hh$1.s[35]++;--index1;}}}cov_2pglahz8hh$1.s[36]++;return subsequence;};cov_2pglahz8hh$1.s[37]++;var get$2=function get(array1,array2,match,context){cov_2pglahz8hh$1.f[3]++;var innerContext=(cov_2pglahz8hh$1.s[38]++, (cov_2pglahz8hh$1.b[4][0]++, context)||(cov_2pglahz8hh$1.b[4][1]++, {}));var matrix=(cov_2pglahz8hh$1.s[39]++, lengthMatrix$1(array1,array2,(cov_2pglahz8hh$1.b[5][0]++, match)||(cov_2pglahz8hh$1.b[5][1]++, defaultMatch$1),innerContext));var result=(cov_2pglahz8hh$1.s[40]++, backtrack$1(matrix,array1,array2,innerContext));cov_2pglahz8hh$1.s[41]++;if((cov_2pglahz8hh$1.b[7][0]++, typeof array1==='string')&&(cov_2pglahz8hh$1.b[7][1]++, typeof array2==='string')){cov_2pglahz8hh$1.b[6][0]++;cov_2pglahz8hh$1.s[42]++;result.sequence=result.sequence.join('');}else{cov_2pglahz8hh$1.b[6][1]++;}cov_2pglahz8hh$1.s[43]++;return result;};var lcs$1 = {get:get$2};

/*
 * mocha's bdd syntax is inspired in RSpec
 *   please read: http://betterspecs.org/
 */
var expect = chai.expect;

describe('jsondiffpatch', function () {
  before(function () {});
  it('has a diff method', function () {
    expect(diff).to.be.a('function');
  });
});

var DiffPatcher$1 = DiffPatcher;

var isArray$1$1 = typeof Array.isArray === 'function' ? Array.isArray : function (a) {
  return (typeof a === 'undefined' ? 'undefined' : _typeof(a)) === 'object' && a instanceof Array;
};

var valueDescription = function valueDescription(value) {
  if (value === null) {
    return 'null';
  }
  if (typeof value === 'boolean') {
    return value.toString();
  }
  if (value instanceof Date) {
    return 'Date';
  }
  if (value instanceof RegExp) {
    return 'RegExp';
  }
  if (isArray$1$1(value)) {
    return 'array';
  }
  if (typeof value === 'string') {
    if (value.length >= 60) {
      return 'large text';
    }
  }
  return typeof value === 'undefined' ? 'undefined' : _typeof(value);
};

// Object.keys polyfill
var objectKeys = typeof Object.keys === 'function' ? function (obj) {
  return Object.keys(obj);
} : function (obj) {
  var keys = [];
  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      keys.push(key);
    }
  }
  return keys;
};

// Array.prototype.forEach polyfill
var arrayForEach = typeof Array.prototype.forEach === 'function' ? function (array, fn) {
  return array.forEach(fn);
} : function (array, fn) {
  for (var index$$1 = 0, length = array.length; index$$1 < length; index$$1++) {
    fn(array[index$$1], index$$1, array);
  }
};

describe('DiffPatcher', function () {
  arrayForEach(objectKeys(examples), function (groupName) {
    var group = examples[groupName];
    describe(groupName, function () {
      arrayForEach(group, function (example) {
        if (!example) {
          return;
        }
        var name = example.name || valueDescription(example.left) + ' -> ' + valueDescription(example.right);
        describe(name, function () {
          before(function () {
            this.instance = new DiffPatcher$1(example.options);
          });
          if (example.error) {
            it('diff should fail with: ' + example.error, function () {
              var instance = this.instance;
              expect(function () {
                instance.diff(example.left, example.right);
              }).to.throw(example.error);
            });
            return;
          }
          it('can diff', function () {
            var delta = this.instance.diff(example.left, example.right);
            expect(delta).to.deep.equal(example.delta);
          });
          it('can diff backwards', function () {
            var reverse$$1 = this.instance.diff(example.right, example.left);
            expect(reverse$$1).to.deep.equal(example.reverse);
          });
          if (!example.noPatch) {
            it('can patch', function () {
              var right = this.instance.patch(clone$1(example.left), example.delta);
              expect(right).to.deep.equal(example.right);
            });
            it('can reverse delta', function () {
              var reverse$$1 = this.instance.reverse(example.delta);
              if (example.exactReverse !== false) {
                expect(reverse$$1).to.deep.equal(example.reverse);
              } else {
                // reversed delta and the swapped-diff delta are
                // not always equal, to verify they're equivalent,
                // patch and compare the results
                expect(this.instance.patch(clone$1(example.right), reverse$$1)).to.deep.equal(example.left);
                reverse$$1 = this.instance.diff(example.right, example.left);
                expect(this.instance.patch(clone$1(example.right), reverse$$1)).to.deep.equal(example.left);
              }
            });
            it('can unpatch', function () {
              var left = this.instance.unpatch(clone$1(example.right), example.delta);
              expect(left).to.deep.equal(example.left);
            });
          }
        });
      });
    });
  });

  describe('.clone', function () {
    it('clones complex objects', function () {
      var obj = {
        name: 'a string',
        nested: {
          attributes: [{ name: 'one', value: 345, since: new Date(1934, 1, 1) }],
          another: 'property',
          enabled: true,
          nested2: {
            name: 'another string'
          }
        }
      };
      var cloned = clone$1(obj);
      expect(cloned).to.deep.equal(obj);
    });
    it('clones RegExp', function () {
      var obj = {
        pattern: /expr/gim
      };
      var cloned = clone$1(obj);
      expect(cloned).to.deep.equal({
        pattern: /expr/gim
      });
    });
  });

  describe('using cloneDiffValues', function () {
    before(function () {
      this.instance = new DiffPatcher$1({
        cloneDiffValues: true
      });
    });
    it("ensures deltas don't reference original objects", function () {
      var left = {
        oldProp: {
          value: 3
        }
      };
      var right = {
        newProp: {
          value: 5
        }
      };
      var delta = this.instance.diff(left, right);
      left.oldProp.value = 1;
      right.newProp.value = 8;
      expect(delta).to.deep.equal({
        oldProp: [{ value: 3 }, 0, 0],
        newProp: [{ value: 5 }]
      });
    });
  });

  describe('static shortcuts', function () {
    it('diff', function () {
      var delta = diff(4, 5);
      expect(delta).to.deep.equal([4, 5]);
    });
    it('patch', function () {
      var right = patch(4, [4, 5]);
      expect(right).to.eql(5);
    });
    it('unpatch', function () {
      var left = unpatch(5, [4, 5]);
      expect(left).to.eql(4);
    });
    it('reverse', function () {
      var reverseDelta = reverse([4, 5]);
      expect(reverseDelta).to.deep.equal([5, 4]);
    });
  });

  describe('plugins', function () {
    before(function () {
      this.instance = new DiffPatcher$1();
    });

    describe('getting pipe filter list', function () {
      it('returns builtin filters', function () {
        expect(this.instance.processor.pipes.diff.list()).to.deep.equal(['collectChildren', 'trivial', 'dates', 'texts', 'objects', 'arrays']);
      });
    });

    describe('supporting numeric deltas', function () {
      var NUMERIC_DIFFERENCE = -8;

      it('diff', function () {
        // a constant to identify the custom delta type
        function numericDiffFilter(context) {
          if (typeof context.left === 'number' && typeof context.right === 'number') {
            // store number delta, eg. useful for distributed counters
            context.setResult([0, context.right - context.left, NUMERIC_DIFFERENCE]).exit();
          }
        }
        // a filterName is useful if I want to allow other filters to
        // be inserted before/after this one
        numericDiffFilter.filterName = 'numeric';

        // insert new filter, right before trivial one
        this.instance.processor.pipes.diff.before('trivial', numericDiffFilter);

        var delta = this.instance.diff({ population: 400 }, { population: 403 });
        expect(delta).to.deep.equal({ population: [0, 3, NUMERIC_DIFFERENCE] });
      });

      it('patch', function () {
        function numericPatchFilter(context) {
          if (context.delta && Array.isArray(context.delta) && context.delta[2] === NUMERIC_DIFFERENCE) {
            context.setResult(context.left + context.delta[1]).exit();
          }
        }
        numericPatchFilter.filterName = 'numeric';
        this.instance.processor.pipes.patch.before('trivial', numericPatchFilter);

        var delta = { population: [0, 3, NUMERIC_DIFFERENCE] };
        var right = this.instance.patch({ population: 600 }, delta);
        expect(right).to.deep.equal({ population: 603 });
      });

      it('unpatch', function () {
        function numericReverseFilter(context) {
          if (context.nested) {
            return;
          }
          if (context.delta && Array.isArray(context.delta) && context.delta[2] === NUMERIC_DIFFERENCE) {
            context.setResult([0, -context.delta[1], NUMERIC_DIFFERENCE]).exit();
          }
        }
        numericReverseFilter.filterName = 'numeric';
        this.instance.processor.pipes.reverse.after('trivial', numericReverseFilter);

        var delta = { population: [0, 3, NUMERIC_DIFFERENCE] };
        var reverseDelta = this.instance.reverse(delta);
        expect(reverseDelta).to.deep.equal({
          population: [0, -3, NUMERIC_DIFFERENCE]
        });
        var right = { population: 703 };
        this.instance.unpatch(right, delta);
        expect(right).to.deep.equal({ population: 700 });
      });
    });

    describe('removing and replacing pipe filters', function () {
      it('removes specified filter', function () {
        expect(this.instance.processor.pipes.diff.list()).to.deep.equal(['collectChildren', 'numeric', 'trivial', 'dates', 'texts', 'objects', 'arrays']);
        this.instance.processor.pipes.diff.remove('dates');
        expect(this.instance.processor.pipes.diff.list()).to.deep.equal(['collectChildren', 'numeric', 'trivial', 'texts', 'objects', 'arrays']);
      });

      it('replaces specified filter', function () {
        function fooFilter(context) {
          context.setResult(['foo']).exit();
        }
        fooFilter.filterName = 'foo';
        expect(this.instance.processor.pipes.diff.list()).to.deep.equal(['collectChildren', 'numeric', 'trivial', 'texts', 'objects', 'arrays']);
        this.instance.processor.pipes.diff.replace('trivial', fooFilter);
        expect(this.instance.processor.pipes.diff.list()).to.deep.equal(['collectChildren', 'numeric', 'foo', 'texts', 'objects', 'arrays']);
      });
    });
  });

  describe('formatters', function () {
    describe('jsonpatch', function () {
      var instance = void 0;
      var formatter = void 0;

      before(function () {
        instance = new DiffPatcher$1();
        formatter = index.jsonpatch;
      });

      var expectFormat = function expectFormat(before, after, expected) {
        var diff$$1 = instance.diff(before, after);
        var format = formatter.format(diff$$1);
        expect(format).to.be.eql(expected);
      };

      var removeOp = function removeOp(path) {
        return {
          op: 'remove',
          path: path
        };
      };

      var moveOp = function moveOp(from, path) {
        return {
          op: 'move',
          from: from,
          path: path
        };
      };

      var addOp = function addOp(path, value) {
        return {
          op: 'add',
          path: path,
          value: value
        };
      };

      var replaceOp = function replaceOp(path, value) {
        return {
          op: 'replace',
          path: path,
          value: value
        };
      };

      it('should return empty format for empty diff', function () {
        expectFormat([], [], []);
      });

      it('should format an add operation for array insertion', function () {
        expectFormat([1, 2, 3], [1, 2, 3, 4], [addOp('/3', 4)]);
      });

      it('should format an add operation for object insertion', function () {
        expectFormat({ a: 'a', b: 'b' }, { a: 'a', b: 'b', c: 'c' }, [addOp('/c', 'c')]);
      });

      it('should format for deletion of array', function () {
        expectFormat([1, 2, 3, 4], [1, 2, 3], [removeOp('/3')]);
      });

      it('should format for deletion of object', function () {
        expectFormat({ a: 'a', b: 'b', c: 'c' }, { a: 'a', b: 'b' }, [removeOp('/c')]);
      });

      it('should format for replace of object', function () {
        expectFormat({ a: 'a', b: 'b' }, { a: 'a', b: 'c' }, [replaceOp('/b', 'c')]);
      });

      it('should put add/remove for array with primitive items', function () {
        expectFormat([1, 2, 3], [1, 2, 4], [removeOp('/2'), addOp('/2', 4)]);
      });

      it('should sort remove by desc order', function () {
        expectFormat([1, 2, 3], [1], [removeOp('/2'), removeOp('/1')]);
      });

      describe('patcher with comparator', function () {
        before(function () {
          instance = new DiffPatcher$1({
            objectHash: function objectHash(obj) {
              if (obj && obj.id) {
                return obj.id;
              }
            }
          });
        });

        var anObjectWithId = function anObjectWithId(id) {
          return {
            id: id
          };
        };

        it('should remove higher level first', function () {
          var before = [anObjectWithId('removed'), {
            id: 'remaining_outer',
            items: [anObjectWithId('removed_inner'), anObjectWithId('remaining_inner')]
          }];
          var after = [{
            id: 'remaining_outer',
            items: [anObjectWithId('remaining_inner')]
          }];
          var expectedDiff = [removeOp('/0'), removeOp('/0/items/0')];
          expectFormat(before, after, expectedDiff);
        });

        it('should annotate move', function () {
          var before = [anObjectWithId('first'), anObjectWithId('second')];
          var after = [anObjectWithId('second'), anObjectWithId('first')];
          var expectedDiff = [moveOp('/1', '/0')];
          expectFormat(before, after, expectedDiff);
        });

        it('should sort the ops', function () {
          expectFormat({ 'hl': [{ id: 1, bla: 'bla' }, { id: 2, bla: 'ga' }] }, { 'hl': [{ id: 2, bla: 'bla' }, { id: 1, bla: 'ga' }] }, [moveOp('/hl/1', '/hl/0'), replaceOp('/hl/0/bla', 'bla'), replaceOp('/hl/1/bla', 'ga')]);
        });
      });

      it('should annotate as moved op', function () {
        expectFormat([1, 2], [2, 1], [moveOp('/1', '/0')]);
      });

      it('should add full path for moved op', function () {
        expectFormat({ 'hl': [1, 2] }, { 'hl': [2, 1] }, [moveOp('/hl/1', '/hl/0')]);
      });

      it('should put the full path in move op and sort by HL - #230', function () {
        var before = {
          'middleName': 'z',
          'referenceNumbers': [{
            'id': 'id-3',
            'referenceNumber': '123',
            'index': 'index-0'
          }, {
            'id': 'id-1',
            'referenceNumber': '456',
            'index': 'index-1'
          }, {
            'id': 'id-2',
            'referenceNumber': '789',
            'index': 'index-2'
          }]
        };
        var after = {
          'middleName': 'x',
          'referenceNumbers': [{
            'id': 'id-1',
            'referenceNumber': '456',
            'index': 'index-0'
          }, {
            'id': 'id-3',
            'referenceNumber': '123',
            'index': 'index-1'
          }, {
            'id': 'id-2',
            'referenceNumber': '789',
            'index': 'index-2'
          }]
        };
        var diff$$1 = [{
          'op': 'move',
          'from': '/referenceNumbers/1',
          'path': '/referenceNumbers/0'
        }, {
          'op': 'replace',
          'path': '/middleName',
          'value': 'x'
        }, {
          'op': 'replace',
          'path': '/referenceNumbers/0/index',
          'value': 'index-0'
        }, {
          'op': 'replace',
          'path': '/referenceNumbers/1/index',
          'value': 'index-1'
        }];
        instance = new DiffPatcher$1({
          objectHash: function objectHash(obj) {
            return obj.id;
          }
        });
        expectFormat(before, after, diff$$1);
      });
    });

    describe('html', function () {
      var instance = void 0;
      var formatter = void 0;

      before(function () {
        instance = new DiffPatcher$1({ textDiff: { minLength: 10 } });
        formatter = index.html;
      });

      var expectFormat = function expectFormat(before, after, expected) {
        var diff$$1 = instance.diff(before, after);
        var format = formatter.format(diff$$1);
        expect(format).to.be.eql(expected);
      };

      var expectedHtml = function expectedHtml(expectedDiff) {
        var html = [];
        arrayForEach(expectedDiff, function (diff$$1) {
          html.push('<li>');
          html.push('<div class="jsondiffpatch-textdiff-location">');
          html.push('<span class="jsondiffpatch-textdiff-line-number">' + diff$$1.start + '</span>');
          html.push('<span class="jsondiffpatch-textdiff-char">' + diff$$1.length + '</span>');
          html.push('</div>');
          html.push('<div class="jsondiffpatch-textdiff-line">');

          arrayForEach(diff$$1.data, function (data) {
            html.push('<span class="jsondiffpatch-textdiff-' + data.type + '">' + data.text + '</span>');
          });

          html.push('</div>');
          html.push('</li>');
        });
        return '<div class="jsondiffpatch-delta jsondiffpatch-textdiff">' + '<div class="jsondiffpatch-value">' + '<ul class="jsondiffpatch-textdiff">' + (html.join('') + '</ul></div></div>');
      };

      it('should format Chinese', function () {
        var before = '喵星人最可爱最可爱最可爱喵星人最可爱最可爱最可爱';
        var after = '汪星人最可爱最可爱最可爱喵星人meow最可爱最可爱最可爱';
        var expectedDiff = [{
          start: 1,
          length: 17,
          data: [{
            type: 'deleted',
            text: '喵'
          }, {
            type: 'added',
            text: '汪'
          }, {
            type: 'context',
            text: '星人最可爱最可爱最可爱喵星人最可'
          }]
        }, {
          start: 8,
          length: 16,
          data: [{
            type: 'context',
            text: '可爱最可爱喵星人'
          }, {
            type: 'added',
            text: 'meow'
          }, {
            type: 'context',
            text: '最可爱最可爱最可'
          }]
        }];
        expectFormat(before, after, expectedHtml(expectedDiff));
      });

      it('should format Japanese', function () {
        var before = '猫が可愛いです猫が可愛いです';
        var after = '猫がmeow可愛いですいぬ可愛いです';
        var expectedDiff = [{
          start: 1,
          length: 13,
          data: [{
            type: 'context',
            text: '猫が'
          }, {
            type: 'added',
            text: 'meow'
          }, {
            type: 'context',
            text: '可愛いです'
          }, {
            type: 'deleted',
            text: '猫が'
          }, {
            type: 'added',
            text: 'いぬ'
          }, {
            type: 'context',
            text: '可愛いで'
          }]
        }];
        expectFormat(before, after, expectedHtml(expectedDiff));
      });
    });
  });
});

describe('lcs', function () {
  it('should lcs arrays ', function () {
    expect(lcs$1.get([], [])).to.deep.equal({
      sequence: [],
      indices1: [],
      indices2: []
    });

    expect(lcs$1.get([1], [2])).to.deep.equal({
      sequence: [],
      indices1: [],
      indices2: []
    });

    // indices1 and indices2 show where the sequence
    // elements are located in the original arrays
    expect(lcs$1.get([1], [-9, 1])).to.deep.equal({
      sequence: [1],
      indices1: [0],
      indices2: [1]
    });

    // indices1 and indices2 show where the sequence
    // elements are located in the original arrays
    expect(lcs$1.get([1, 9, 3, 4, 5], [-9, 1, 34, 3, 2, 1, 5, 93])).to.deep.equal({
      sequence: [1, 3, 5],
      indices1: [0, 2, 4],
      indices2: [1, 3, 6]
    });
  });

  it('should compute diff for large array', function () {
    var ARRAY_LENGTH = 5000; // js stack is about 50k
    function randomArray() {
      var result = [];
      for (var i = 0; i < ARRAY_LENGTH; i++) {
        if (Math.random() > 0.5) {
          result.push('A');
        } else {
          result.push('B');
        }
      }
      return result;
    }

    lcs$1.get(randomArray(), randomArray());
  });
});
//# sourceMappingURL=jsondiffpatch.cjs.test.js.map
