webpackJsonp([1],{

/***/ 178:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.routes = exports.store = undefined;

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(28);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _reactRedux = __webpack_require__(10);

var _reactRouterRedux = __webpack_require__(12);

var _reactRouterDom = __webpack_require__(6);

var _routes = __webpack_require__(241);

var _routes2 = _interopRequireDefault(_routes);

__webpack_require__(277);

var _store = __webpack_require__(278);

var _store2 = _interopRequireDefault(_store);

var _browserHistory = __webpack_require__(51);

var _browserHistory2 = _interopRequireDefault(_browserHistory);

var _actionTypes = __webpack_require__(24);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var store = exports.store = (0, _store2.default)(_browserHistory2.default);
var history = (0, _reactRouterRedux.syncHistoryWithStore)(_browserHistory2.default, store);
var routes = exports.routes = (0, _routes2.default)(store);

if (false) {
  window.__store__ = store;
}

_reactDom2.default.render(_react2.default.createElement(
  _reactRedux.Provider,
  { store: store },
  _react2.default.createElement(
    _reactRouterDom.Router,
    { history: _browserHistory2.default },
    routes
  )
), document.getElementById('app'));

/***/ }),

/***/ 23:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.changeTempFormat = exports.getWeatherData = undefined;

var _browserHistory = __webpack_require__(51);

var _browserHistory2 = _interopRequireDefault(_browserHistory);

var _actionTypes = __webpack_require__(24);

var _api = __webpack_require__(251);

var _api2 = _interopRequireDefault(_api);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var getWeatherData = exports.getWeatherData = function getWeatherData(location) {
  return function (dispatch, getState) {
    dispatch({
      type: _actionTypes.GET_WEATHER_REQUEST
    });
    return _api2.default.getWeather(location).then(function (res) {
      dispatch({
        type: _actionTypes.GET_WEATHER_SUCCESS,
        payload: res.data
      });
      _browserHistory2.default.push('/search/' + res.data.city.toLowerCase());
    }).catch(function (e) {
      dispatch({
        type: _actionTypes.GET_WEATHER_FAILURE,
        payload: e.response.data.message
      });
    });
  };
};

var changeTempFormat = exports.changeTempFormat = function changeTempFormat() {
  return {
    type: _actionTypes.CHANGE_TEMP_FORMAT
  };
};

/***/ }),

/***/ 24:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var GET_WEATHER_REQUEST = exports.GET_WEATHER_REQUEST = 'GET_WEATHER_REQUEST';
var GET_WEATHER_SUCCESS = exports.GET_WEATHER_SUCCESS = 'GET_WEATHER_SUCCESS';
var GET_WEATHER_FAILURE = exports.GET_WEATHER_FAILURE = 'GET_WEATHER_FAILURE';

var CHANGE_TEMP_FORMAT = exports.CHANGE_TEMP_FORMAT = 'CHANGE_TEMP_FORMAT';

/***/ }),

/***/ 241:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(6);

var _Main = __webpack_require__(242);

var _Main2 = _interopRequireDefault(_Main);

var _NotFound = __webpack_require__(244);

var _NotFound2 = _interopRequireDefault(_NotFound);

var _Search = __webpack_require__(246);

var _Search2 = _interopRequireDefault(_Search);

var _WeatherInfo = __webpack_require__(271);

var _WeatherInfo2 = _interopRequireDefault(_WeatherInfo);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var createRoutes = function createRoutes() {
  return _react2.default.createElement(
    _Main2.default,
    null,
    _react2.default.createElement(
      _reactRouterDom.Switch,
      null,
      _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: '/', component: function component() {
          return _react2.default.createElement(_reactRouterDom.Redirect, { to: 'search' });
        } }),
      _react2.default.createElement(_reactRouterDom.Route, { path: '/search/:city', component: _WeatherInfo2.default }),
      _react2.default.createElement(_reactRouterDom.Route, { path: '/search', component: _Search2.default }),
      _react2.default.createElement(_reactRouterDom.Route, { component: _NotFound2.default })
    )
  );
};

exports.default = createRoutes;

/***/ }),

/***/ 242:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

__webpack_require__(243);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Home = function Home(_ref) {
  var children = _ref.children;
  return _react2.default.createElement(
    'div',
    { className: 'container' },
    _react2.default.createElement(
      'div',
      { className: 'content-wrapper' },
      children
    )
  );
};

exports.default = Home;

/***/ }),

/***/ 243:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 244:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(6);

__webpack_require__(245);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var NotFound = function NotFound() {
  return _react2.default.createElement(
    'section',
    { className: 'notfound-section' },
    _react2.default.createElement(
      'div',
      { className: 'notfound-content' },
      _react2.default.createElement(
        'h1',
        null,
        '404'
      ),
      _react2.default.createElement(
        'h2',
        null,
        'Sorry, we can\'t find the page!'
      ),
      _react2.default.createElement(
        'p',
        null,
        'Either something went wrong or the page doesn\'t exist anymore'
      ),
      _react2.default.createElement(
        _reactRouterDom.Link,
        { to: '/', className: 'btn' },
        'Take me home'
      )
    )
  );
};

exports.default = NotFound;

/***/ }),

/***/ 245:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 246:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reactRouterDom = __webpack_require__(6);

var _reactRedux = __webpack_require__(10);

var _Search = __webpack_require__(247);

var _Search2 = _interopRequireDefault(_Search);

var _searchActions = __webpack_require__(23);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var select = function select(_ref) {
  var weather = _ref.weather;
  return weather;
};

var actions = {
  getWeatherData: _searchActions.getWeatherData
};

exports.default = (0, _reactRouterDom.withRouter)((0, _reactRedux.connect)(select, actions)(_Search2.default));

/***/ }),

/***/ 247:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactRouterDom = __webpack_require__(6);

var _reactFontawesome = __webpack_require__(22);

var _reactFontawesome2 = _interopRequireDefault(_reactFontawesome);

var _Loader = __webpack_require__(50);

var _Loader2 = _interopRequireDefault(_Loader);

__webpack_require__(250);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Search = function (_Component) {
  _inherits(Search, _Component);

  function Search(props) {
    _classCallCheck(this, Search);

    var _this = _possibleConstructorReturn(this, (Search.__proto__ || Object.getPrototypeOf(Search)).call(this, props));

    _this.getLocalWeather = function () {
      var options = {
        enableHighAccuracy: true,
        timeout: 5000,
        maximumAge: 0
      };

      var success = function success(pos) {
        return _this.props.getWeatherData({ lat: pos.coords.latitude, lon: pos.coords.longitude });
      };

      var error = function error() {
        return console.warn('Sorry, cannot get your location');
      };

      navigator.geolocation.getCurrentPosition(success, error, options);
    };

    _this.handleChange = function (e) {
      _this.setState({ term: e.target.value });
    };

    _this.handleSubmit = function (e) {
      e.preventDefault();
      var term = _this.state.term;

      if (term) {
        _this.props.getWeatherData({ city: term });
      }
    };

    _this.state = {
      term: ''
    };
    return _this;
  }

  _createClass(Search, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.setState({
        term: this.props.term
      });
    }
  }, {
    key: 'render',
    value: function render() {
      if (this.props.gettingData) {
        return _react2.default.createElement(_Loader2.default, null);
      }

      var error = this.props.error;


      return _react2.default.createElement(
        'div',
        { className: 'search-wrapper' },
        _react2.default.createElement(
          'div',
          { className: 'search' },
          _react2.default.createElement(
            'div',
            { className: 'error' },
            error
          ),
          _react2.default.createElement(
            'form',
            { onSubmit: this.handleSubmit, className: 'search-form' },
            _react2.default.createElement('input', { type: 'search', value: this.state.term, onChange: this.handleChange, placeholder: 'City' }),
            _react2.default.createElement(
              'button',
              { className: 'btn-search' },
              _react2.default.createElement(_reactFontawesome2.default, { name: 'search', size: 'lg' })
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'current-location-cat' },
            _react2.default.createElement(
              'span',
              null,
              'or'
            ),
            'use my ',
            _react2.default.createElement(
              _reactRouterDom.Link,
              { to: '#', onClick: this.getLocalWeather },
              'current location'
            )
          )
        )
      );
    }
  }]);

  return Search;
}(_react.Component);

Search.propTypes = {
  error: _propTypes2.default.string,
  gettingData: _propTypes2.default.bool,
  term: _propTypes2.default.string,

  getWeatherData: _propTypes2.default.func.isRequired
};

Search.defaultProps = {
  error: '',
  gettingData: false,
  term: ''
};

exports.default = Search;

/***/ }),

/***/ 249:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 250:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 251:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getWeather = undefined;

var _axios = __webpack_require__(52);

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ROOT_URL = '/api/search/';

var getWeather = exports.getWeather = function getWeather(location) {
  if (location.city) {
    return _axios2.default.get(ROOT_URL + '?city=' + location.city);
  } else {
    return _axios2.default.get(ROOT_URL + '?lat=' + location.lat + '&lon=' + location.lon);
  }
};

exports.default = {
  getWeather: getWeather
};

/***/ }),

/***/ 271:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reactRouterDom = __webpack_require__(6);

var _reactRedux = __webpack_require__(10);

var _WeatherInfo = __webpack_require__(272);

var _WeatherInfo2 = _interopRequireDefault(_WeatherInfo);

var _searchActions = __webpack_require__(23);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var select = function select(_ref) {
  var _ref$weather = _ref.weather,
      gettingData = _ref$weather.gettingData,
      term = _ref$weather.term,
      weatherData = _ref$weather.weatherData,
      tempFormat = _ref$weather.tempFormat;
  return { gettingData: gettingData, term: term, weatherData: weatherData, tempFormat: tempFormat };
};

var actions = {
  changeTempFormat: _searchActions.changeTempFormat,
  getWeatherData: _searchActions.getWeatherData
};

exports.default = (0, _reactRouterDom.withRouter)((0, _reactRedux.connect)(select, actions)(_WeatherInfo2.default));

/***/ }),

/***/ 272:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(2);

var _reactRouterDom = __webpack_require__(6);

var _moment = __webpack_require__(0);

var _moment2 = _interopRequireDefault(_moment);

var _reactFontawesome = __webpack_require__(22);

var _reactFontawesome2 = _interopRequireDefault(_reactFontawesome);

var _Loader = __webpack_require__(50);

var _Loader2 = _interopRequireDefault(_Loader);

var _ToggleSwitch = __webpack_require__(274);

var _ToggleSwitch2 = _interopRequireDefault(_ToggleSwitch);

var _searchActions = __webpack_require__(23);

__webpack_require__(276);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var WeatherInfo = function (_Component) {
  _inherits(WeatherInfo, _Component);

  function WeatherInfo() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, WeatherInfo);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = WeatherInfo.__proto__ || Object.getPrototypeOf(WeatherInfo)).call.apply(_ref, [this].concat(args))), _this), _this.getActualTemp = function (temp) {
      var tempFormat = _this.props.tempFormat;

      temp = tempFormat === 'C' ? temp : temp * 9 / 5 + 32;
      return _react2.default.createElement(
        'span',
        null,
        Math.round(temp),
        '\xB0',
        tempFormat
      );
    }, _this.renderIcon = function (weatherStatus) {
      var suffix = weatherStatus.toLowerCase();
      switch (suffix) {
        case 'clear':
          suffix = 'day-sunny';
          break;
        case 'few clouds':
        case 'scattered clouds':
        case 'broken clouds':
        case 'clouds':
          suffix = 'cloudy';
          break;
        case 'rain':
        case 'light rain':
        case 'shower rain':
          suffix = 'showers';
          break;
        case 'mist':
          suffix = 'fog';
          break;
      }
      return _react2.default.createElement('i', { className: 'wi wi-' + suffix });
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(WeatherInfo, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _props = this.props,
          params = _props.match.params,
          getWeatherData = _props.getWeatherData;

      if (params && params.city) {
        var city = params.city;

        getWeatherData({ city: city });
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props2 = this.props,
          term = _props2.term,
          weatherData = _props2.weatherData,
          gettingData = _props2.gettingData,
          changeTempFormat = _props2.changeTempFormat;

      if (gettingData || !weatherData.length) {
        return _react2.default.createElement(_Loader2.default, null);
      }
      var currentData = weatherData[0];

      return _react2.default.createElement(
        'div',
        { className: 'weather-info' },
        _react2.default.createElement(
          'div',
          { className: 'header' },
          _react2.default.createElement(
            _reactRouterDom.Link,
            { to: '/' },
            _react2.default.createElement(_reactFontawesome2.default, { name: 'arrow-left', size: 'lg' })
          ),
          _react2.default.createElement(
            'h1',
            null,
            term
          ),
          _react2.default.createElement(_ToggleSwitch2.default, {
            options: {
              checked: '&deg; F',
              unchecked: '&deg C'
            },
            onChange: changeTempFormat,
            className: 'toggle-temp'
          })
        ),
        _react2.default.createElement(
          'div',
          { className: 'current-weather' },
          _react2.default.createElement(
            'h2',
            null,
            _moment2.default.unix(currentData.dt).format('dddd, MMMM Do YYYY')
          ),
          _react2.default.createElement(
            'h3',
            null,
            currentData.weather[0].main
          ),
          _react2.default.createElement(
            'div',
            { className: 'weather-data' },
            _react2.default.createElement(
              'span',
              { className: 'current-degree' },
              this.getActualTemp(currentData.temp.day)
            ),
            _react2.default.createElement(
              'span',
              { className: 'icon-wrapper' },
              this.renderIcon(currentData.weather[0].main)
            ),
            _react2.default.createElement(
              'ul',
              { className: 'temp-list' },
              _react2.default.createElement(
                'li',
                null,
                _react2.default.createElement(
                  'span',
                  null,
                  'Morning'
                ),
                this.getActualTemp(currentData.temp.morn)
              ),
              _react2.default.createElement(
                'li',
                null,
                _react2.default.createElement(
                  'span',
                  null,
                  'Day'
                ),
                this.getActualTemp(currentData.temp.day)
              ),
              _react2.default.createElement(
                'li',
                null,
                _react2.default.createElement(
                  'span',
                  null,
                  'Evening'
                ),
                currentData.temp.eve
              ),
              _react2.default.createElement(
                'li',
                null,
                _react2.default.createElement(
                  'span',
                  null,
                  'Night'
                ),
                currentData.temp.night
              )
            )
          )
        ),
        _react2.default.createElement(
          'ul',
          { className: 'forecast' },
          weatherData.map(function (data) {
            return _react2.default.createElement(
              'li',
              { key: data.dt },
              _react2.default.createElement(
                'span',
                { className: 'day' },
                _moment2.default.unix(data.dt).format('dddd')
              ),
              _react2.default.createElement(
                'span',
                { className: 'icon-wrapper' },
                _this2.renderIcon(data.weather[0].main)
              ),
              _this2.getActualTemp(data.temp.day)
            );
          })
        )
      );
    }
  }]);

  return WeatherInfo;
}(_react.Component);

WeatherInfo.propTypes = {
  gettingData: _propTypes.bool,
  term: _propTypes.string,
  tempFormat: _propTypes.string,
  weatherData: (0, _propTypes.arrayOf)((0, _propTypes.shape)({})),

  changeTempFormat: _propTypes.func.isRequired,
  getWeatherData: _propTypes.func.isRequired
};

WeatherInfo.defaultProps = {
  gettingData: false,
  term: '',
  tempFormat: 'C',
  weatherData: []
};

exports.default = WeatherInfo;

/***/ }),

/***/ 274:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

__webpack_require__(275);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Toggle = function (_Component) {
  _inherits(Toggle, _Component);

  function Toggle(props) {
    _classCallCheck(this, Toggle);

    var _this = _possibleConstructorReturn(this, (Toggle.__proto__ || Object.getPrototypeOf(Toggle)).call(this, props));

    _this.state = {
      checked: _this.props.checked
    };
    _this.handleChange = _this.handleChange.bind(_this);
    return _this;
  }

  _createClass(Toggle, [{
    key: 'handleChange',
    value: function handleChange(e) {
      var _this2 = this;

      this.setState({
        checked: !this.state.checked
      }, function () {
        return _this2.props.onChange(_this2.state.checked);
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          options = _props.options,
          className = _props.className;

      return _react2.default.createElement(
        'label',
        { className: 'switch ' + className },
        _react2.default.createElement('input', {
          type: 'checkbox',
          checked: this.state.checked,
          onChange: this.handleChange
        }),
        _react2.default.createElement(
          'span',
          { className: 'slider round' },
          _react2.default.createElement('span', {
            className: 'status-text',
            dangerouslySetInnerHTML: {
              __html: this.state.checked ? options.checked : options.unchecked
            }
          })
        )
      );
    }
  }]);

  return Toggle;
}(_react.Component);

Toggle.propTypes = {
  checked: _propTypes2.default.bool,
  className: _propTypes2.default.string,
  onChange: _propTypes2.default.func.isRequired,
  options: _propTypes2.default.shape({
    checked: _propTypes2.default.string,
    unchecked: _propTypes2.default.string
  })
};

Toggle.defaultProps = {
  checked: false,
  className: '',
  options: null
};

exports.default = Toggle;

/***/ }),

/***/ 275:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 276:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 277:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 278:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _redux = __webpack_require__(11);

var _reduxThunk = __webpack_require__(177);

var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

var _reactRouterRedux = __webpack_require__(12);

var _reducers = __webpack_require__(279);

var _reducers2 = _interopRequireDefault(_reducers);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var configureStore = function configureStore(history) {
  var middleware = [_reduxThunk2.default, (0, _reactRouterRedux.routerMiddleware)(history)];

  var store = (0, _redux.createStore)(_reducers2.default, (0, _redux.compose)(_redux.applyMiddleware.apply(undefined, middleware), window.devToolsExtension ? window.devToolsExtension() : function (f) {
    return f;
  }));

  return store;
};

exports.default = configureStore;

/***/ }),

/***/ 279:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _redux = __webpack_require__(11);

var _reactRouterRedux = __webpack_require__(12);

var _weatherDataReducer = __webpack_require__(280);

var _weatherDataReducer2 = _interopRequireDefault(_weatherDataReducer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var rootReducer = (0, _redux.combineReducers)({
  routing: _reactRouterRedux.routerReducer,
  weather: _weatherDataReducer2.default
});

exports.default = rootReducer;

/***/ }),

/***/ 280:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _actionTypes = __webpack_require__(24);

var initialState = {
  error: '',
  gettingData: false,
  term: localStorage.getItem('term') || '',
  weatherData: [],
  tempFormat: 'C'
};

var weatherReducer = function weatherReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments[1];

  switch (action.type) {
    case _actionTypes.GET_WEATHER_REQUEST:
      {
        return _extends({}, initialState, {
          gettingData: true
        });
      }

    case _actionTypes.GET_WEATHER_SUCCESS:
      {
        localStorage.setItem('term', action.payload.city);
        return _extends({}, state, {
          gettingData: false,
          weatherData: action.payload.list,
          term: action.payload.city
        });
      }
    case _actionTypes.GET_WEATHER_FAILURE:
      {
        return _extends({}, state, {
          gettingData: false,
          error: action.payload
        });
      }
    case _actionTypes.CHANGE_TEMP_FORMAT:
      {
        return _extends({}, state, {
          tempFormat: state.tempFormat === 'C' ? 'F' : 'C'
        });
      }
    default:
      {
        return state;
      }
  }
};

exports.default = weatherReducer;

/***/ }),

/***/ 50:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

__webpack_require__(249);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Loader = function Loader() {
  return _react2.default.createElement(
    'div',
    { className: 'loader-wrapper' },
    _react2.default.createElement(
      'div',
      { className: 'loader' },
      _react2.default.createElement('div', null),
      _react2.default.createElement('div', null),
      _react2.default.createElement('div', null),
      _react2.default.createElement('div', null),
      _react2.default.createElement('div', null),
      _react2.default.createElement('div', null),
      _react2.default.createElement('div', null),
      _react2.default.createElement('div', null),
      _react2.default.createElement('div', null)
    )
  );
};

exports.default = Loader;

/***/ }),

/***/ 51:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createBrowserHistory = __webpack_require__(42);

var _createBrowserHistory2 = _interopRequireDefault(_createBrowserHistory);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _createBrowserHistory2.default)();

/***/ })

},[178]);