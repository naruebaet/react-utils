"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Adaptive = Adaptive;

var _Context = require("./Context");

var _react = require("react");

function Adaptive(_ref) {
  var _ref$wide = _ref.wide,
      wide = _ref$wide === void 0 ? null : _ref$wide,
      _ref$narrow = _ref.narrow,
      narrow = _ref$narrow === void 0 ? null : _ref$narrow;

  var _useContext = (0, _react.useContext)(_Context.userAgentContext),
      isMobile = _useContext.isMobile;

  return isMobile ? narrow : wide;
}
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = require("react");

var _default = (0, _react.createContext)({});

exports["default"] = _default;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Fetch = Fetch;

var _react = _interopRequireDefault(require("react"));

var _reactAsync = _interopRequireDefault(require("react-async"));

var _lodash = require("lodash");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function Preloader() {
  return _react["default"].createElement("div", {
    css: {
      width: '100%',
      height: 300
    }
  }, "\xA0");
}

function Fetch(_ref) {
  var children = _ref.children,
      service = _ref.service,
      onError = _ref.onError,
      preloader = _ref.preloader;
  return _react["default"].createElement(_reactAsync["default"], {
    promiseFn: service
  }, function (_ref2) {
    var data = _ref2.data,
        error = _ref2.error,
        isLoading = _ref2.isLoading;

    if (isLoading) {
      return typeof preloader === 'function' ? _react["default"].createElement(preloader) : _react["default"].createElement(Preloader, null);
    }

    if (error) {
      if (typeof onError === 'function') {
        return onError(error);
      }

      return null;
    }

    if ((0, _lodash.isEmpty)(data)) {
      return null;
    }

    return children({
      data: data
    });
  });
}
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FetchMore = FetchMore;

var _react = require("react");

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function FetchMore(_ref) {
  var children = _ref.children,
      service = _ref.service,
      start = _ref.start,
      limit = _ref.limit;

  var _useState = (0, _react.useState)(start),
      _useState2 = _slicedToArray(_useState, 2),
      lastStart = _useState2[0],
      setLastStart = _useState2[1];

  var _useState3 = (0, _react.useState)(false),
      _useState4 = _slicedToArray(_useState3, 2),
      isLoading = _useState4[0],
      setIsLoading = _useState4[1];

  var _useState5 = (0, _react.useState)(false),
      _useState6 = _slicedToArray(_useState5, 2),
      isDone = _useState6[0],
      setIsDone = _useState6[1];

  var _useState7 = (0, _react.useState)([]),
      _useState8 = _slicedToArray(_useState7, 2),
      data = _useState8[0],
      setData = _useState8[1];

  var fetchMore =
  /*#__PURE__*/
  function () {
    var _ref2 = _asyncToGenerator(
    /*#__PURE__*/
    regeneratorRuntime.mark(function _callee() {
      var newData;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              setIsLoading(true);
              _context.next = 3;
              return service({
                start: lastStart,
                limit: limit
              });

            case 3:
              newData = _context.sent;
              setIsLoading(false);
              setLastStart(lastStart + newData.length);
              setData(data.concat(newData));

              if (newData.length < limit) {
                setIsDone(true);
              }

            case 8:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function fetchMore() {
      return _ref2.apply(this, arguments);
    };
  }();

  return children({
    data: data,
    fetchMore: fetchMore,
    isLoading: isLoading,
    isDone: isDone
  });
}
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.media = media;
Object.defineProperty(exports, "userAgentContext", {
  enumerable: true,
  get: function get() {
    return _context["default"];
  }
});
exports.breakpoints = void 0;

var _context = _interopRequireDefault(require("./context"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var breakpoints = {
  md: '48em',
  // 768px
  lg: '60em',
  // 960px
  xl: '80em' // 1280px

};
exports.breakpoints = breakpoints;

function media() {
  var bp = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'lg';
  return "@media (min-width: ".concat(breakpoints[bp], ")");
}
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.IfInview = IfInview;

var _react = _interopRequireWildcard(require("react"));

var _reactWaypoint = require("react-waypoint");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; return newObj; } }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function IfInview(_ref) {
  var children = _ref.children,
      _ref$offset = _ref.offset,
      offset = _ref$offset === void 0 ? 300 : _ref$offset;

  var _useState = (0, _react.useState)(false),
      _useState2 = _slicedToArray(_useState, 2),
      shouldLoad = _useState2[0],
      setshouldLoad = _useState2[1];

  if (shouldLoad === true) {
    return children;
  }

  return _react["default"].createElement(_reactWaypoint.Waypoint, {
    onEnter: function onEnter() {
      return setshouldLoad(true);
    },
    bottomOffset: "-".concat(offset, "px"),
    fireOnRapidScroll: false
  }, _react["default"].createElement("div", {
    css: {
      width: '100%',
      height: offset * 2
    }
  }, "\xA0"));
}
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LoadingHOC = void 0;

var _react = _interopRequireWildcard(require("react"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var isEmpty = function isEmpty(prop) {
  return prop === null || prop === undefined || prop.hasOwnProperty('length') && prop.length === 0 || prop.constructor === Object && Object.keys(prop).length === 0;
};

var LoadingHOC = function LoadingHOC(loadingProp) {
  return function (WrappedComponent) {
    return (
      /*#__PURE__*/
      function (_Component) {
        _inherits(LoadingHOC, _Component);

        function LoadingHOC() {
          _classCallCheck(this, LoadingHOC);

          return _possibleConstructorReturn(this, _getPrototypeOf(LoadingHOC).apply(this, arguments));
        }

        _createClass(LoadingHOC, [{
          key: "componentDidMount",
          value: function componentDidMount() {
            this.startTimer = Date.now();
          }
        }, {
          key: "componentWillUpdate",
          value: function componentWillUpdate(nextProps) {
            if (!isEmpty(nextProps[loadingProp])) {
              this.endTimer = Date.now();
            }
          }
        }, {
          key: "render",
          value: function render() {
            var myProps = {
              loadingTime: ((this.endTimer - this.startTimer) / 1000).toFixed(2)
            };

            if (isEmpty(this.props[loadingProp])) {
              return _react["default"].createElement("span", null, "Loading...");
            } else {
              return _react["default"].createElement(WrappedComponent, _extends({}, this.props, myProps));
            }
          }
        }]);

        return LoadingHOC;
      }(_react.Component)
    );
  };
};

exports.LoadingHOC = LoadingHOC;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Responsive = Responsive;

var _react = _interopRequireWildcard(require("react"));

var _Helper = require("./Helper");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; return newObj; } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function Responsive(_ref) {
  var _ref$breakpoint = _ref.breakpoint,
      breakpoint = _ref$breakpoint === void 0 ? 'md' : _ref$breakpoint,
      _ref$wideScreen = _ref.wideScreen,
      wideScreen = _ref$wideScreen === void 0 ? null : _ref$wideScreen,
      _ref$narrowScreen = _ref.narrowScreen,
      narrowScreen = _ref$narrowScreen === void 0 ? null : _ref$narrowScreen;
  return _react["default"].createElement(_react.Fragment, null, _react["default"].createElement("div", {
    css: _defineProperty({
      display: 'block'
    }, (0, _Helper.media)(breakpoint), {
      display: 'none'
    })
  }, narrowScreen), _react["default"].createElement("div", {
    css: _defineProperty({
      display: 'none'
    }, (0, _Helper.media)(breakpoint), {
      display: 'block'
    })
  }, wideScreen));
}
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "LoadingHOC", {
  enumerable: true,
  get: function get() {
    return _LoadingHOC.LoadingHOC;
  }
});
Object.defineProperty(exports, "Responsive", {
  enumerable: true,
  get: function get() {
    return _Responsive.Responsive;
  }
});
Object.defineProperty(exports, "Adaptive", {
  enumerable: true,
  get: function get() {
    return _Adaptive.Adaptive;
  }
});
Object.defineProperty(exports, "Fetch", {
  enumerable: true,
  get: function get() {
    return _Fetch.Fetch;
  }
});
Object.defineProperty(exports, "FetchMore", {
  enumerable: true,
  get: function get() {
    return _FetchMore.FetchMore;
  }
});
Object.defineProperty(exports, "IfInView", {
  enumerable: true,
  get: function get() {
    return _IfInView.IfInView;
  }
});

var _LoadingHOC = require("./src/LoadingHOC");

var _Responsive = require("./src/Responsive");

var _Adaptive = require("./src/Adaptive");

var _Fetch = require("./src/Fetch");

var _FetchMore = require("./src/FetchMore");

var _IfInView = require("./src/IfInView");
