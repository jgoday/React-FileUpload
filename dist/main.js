/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */

function makeEmptyFunction(arg) {
  return function () {
    return arg;
  };
}

/**
 * This function accepts and discards inputs; it has no side effects. This is
 * primarily useful idiomatically for overridable function endpoints which
 * always need to be callable, since JS lacks a null-call idiom ala Cocoa.
 */
var emptyFunction = function emptyFunction() {};

emptyFunction.thatReturns = makeEmptyFunction;
emptyFunction.thatReturnsFalse = makeEmptyFunction(false);
emptyFunction.thatReturnsTrue = makeEmptyFunction(true);
emptyFunction.thatReturnsNull = makeEmptyFunction(null);
emptyFunction.thatReturnsThis = function () {
  return this;
};
emptyFunction.thatReturnsArgument = function (arg) {
  return arg;
};

module.exports = emptyFunction;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */



/**
 * Use invariant() to assert state which your program assumes to be true.
 *
 * Provide sprintf-style format (only %s is supported) and arguments
 * to provide information about what broke and what you were
 * expecting.
 *
 * The invariant message will be stripped in production, but the invariant
 * will remain to ensure logic does not differ in production.
 */

var validateFormat = function validateFormat(format) {};

if (undefined !== 'production') {
  validateFormat = function validateFormat(format) {
    if (format === undefined) {
      throw new Error('invariant requires an error message argument');
    }
  };
}

function invariant(condition, format, a, b, c, d, e, f) {
  validateFormat(format);

  if (!condition) {
    var error;
    if (format === undefined) {
      error = new Error('Minified exception occurred; use the non-minified dev environment ' + 'for the full error message and additional helpful warnings.');
    } else {
      var args = [a, b, c, d, e, f];
      var argIndex = 0;
      error = new Error(format.replace(/%s/g, function () {
        return args[argIndex++];
      }));
      error.name = 'Invariant Violation';
    }

    error.framesToPop = 1; // we don't care about invariant's own frame
    throw error;
  }
}

module.exports = invariant;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

module.exports = ReactPropTypesSecret;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */



var emptyFunction = __webpack_require__(0);

/**
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */

var warning = emptyFunction;

if (undefined !== 'production') {
  var printWarning = function printWarning(format) {
    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    var argIndex = 0;
    var message = 'Warning: ' + format.replace(/%s/g, function () {
      return args[argIndex++];
    });
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };

  warning = function warning(condition, format) {
    if (format === undefined) {
      throw new Error('`warning(condition, format, ...args)` requires a warning ' + 'message argument');
    }

    if (format.indexOf('Failed Composite propType: ') === 0) {
      return; // Ignore CompositeComponent proptype check.
    }

    if (!condition) {
      for (var _len2 = arguments.length, args = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
        args[_key2 - 2] = arguments[_key2];
      }

      printWarning.apply(undefined, [format].concat(args));
    }
  };
}

module.exports = warning;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/**
 * Created by cheesu on 2015/8/17.
 */

/**
 * React文件上传组件，兼容IE8+
 * 现代浏览器采用AJAX（XHR2+File API）上传。低版本浏览器使用form+iframe上传。
 * 使用到ES6，需要经babel转译
 */

/*eslint indent: 0 */
var React = __webpack_require__(5);
var PT = __webpack_require__(6);

var emptyFunction = function emptyFunction() {};
/*当前IE上传组的id*/
var currentIEID = 0;
/*存放当前IE上传组的可用情况*/
var IEFormGroup = [true];
/*当前xhr的数组（仅有已开始上传之后的xhr）*/
var xhrList = [];
var currentXHRID = 0;

var FileUpload = React.createClass({
    displayName: 'FileUpload',


    /*类型验证*/
    propTypes: {
        options: PT.shape({
            /*basics*/
            baseUrl: PT.string.isRequired,
            param: PT.oneOfType([PT.object, PT.func]),
            dataType: PT.string,
            chooseAndUpload: PT.bool,
            paramAddToField: PT.oneOfType([PT.object, PT.func]),
            wrapperDisplay: PT.string,
            timeout: PT.number,
            accept: PT.string,
            multiple: PT.bool,
            numberLimit: PT.oneOfType([PT.number, PT.func]),
            fileFieldName: PT.oneOfType([PT.string, PT.func]),
            withCredentials: PT.bool,
            requestHeaders: PT.object,
            /*specials*/
            tag: PT.string,
            userAgent: PT.string,
            disabledIEChoose: PT.oneOfType([PT.bool, PT.func]),
            _withoutFileUpload: PT.bool,
            filesToUpload: PT.arrayOf(PT.object),
            textBeforeFiles: PT.bool,
            /*funcs*/
            beforeChoose: PT.func,
            chooseFile: PT.func,
            beforeUpload: PT.func,
            doUpload: PT.func,
            uploading: PT.func,
            uploadSuccess: PT.func,
            uploadError: PT.func,
            uploadFail: PT.func,
            onabort: PT.func
        }).isRequired,
        style: PT.object,
        className: PT.string
    },

    /*根据props更新组件*/
    _updateProps: function _updateProps(props) {
        var _this = this;

        this.isIE = !(this.checkIE() < 0 || this.checkIE() >= 10);
        var options = props.options;
        this.baseUrl = options.baseUrl; //域名
        this.param = options.param; //get参数
        this.chooseAndUpload = options.chooseAndUpload || false; //是否在用户选择了文件之后立刻上传
        this.paramAddToField = options.paramAddToField || undefined; //需要添加到FormData的对象。不支持IE
        /*upload success 返回resp的格式*/
        this.dataType = 'json';
        options.dataType && options.dataType.toLowerCase() == 'text' && (this.dataType = 'text');
        this.wrapperDisplay = options.wrapperDisplay || 'inline-block'; //包裹chooseBtn或uploadBtn的div的display
        this.timeout = typeof options.timeout == 'number' && options.timeout > 0 ? options.timeout : 0; //超时时间
        this.accept = options.accept || ''; //限制文件后缀
        this.multiple = options.multiple || false;
        this.numberLimit = options.numberLimit || false; //允许多文件上传时，选择文件数量的限制
        this.fileFieldName = options.fileFieldName || false; //文件附加到formData上时的key，传入string指定一个file的属性名，值为其属性的值。不支持IE
        this.withCredentials = options.withCredentials || false; //跨域时是否使用认证信息
        this.requestHeaders = options.requestHeaders || false; //要设置的请求头键值对

        /*生命周期函数*/
        /**
         * beforeChoose() : 用户选择之前执行，返回true继续，false阻止用户选择
         * @param  null
         * @return  {boolean} 是否允许用户进行选择
         */
        this.beforeChoose = options.beforeChoose || emptyFunction;
        /**
         * chooseFile(file) : 用户选择文件后的触发的回调函数
         * @param file {File | string} 现代浏览器返回File对象，IE返回文件名
         * @return
         */
        this.chooseFile = options.chooseFile || emptyFunction;
        /**
         * beforeUpload(file,mill) : 用户上传之前执行，返回true继续，false阻止用户选择
         * @param file {File | string} 现代浏览器返回File对象，IE返回文件名
         * @param mill {long} 毫秒数，如果File对象已有毫秒数则返回一样的
         * @return  {boolean || object} 是否允许用户进行上传 (hack:如果是obj{
         *     assign:boolean 默认true
         *     param:object
         * }), 则对本次的param进行处理
         */
        this.beforeUpload = options.beforeUpload || emptyFunction;
        /**
         * doUpload(file,mill) : 上传动作(xhr send | form submit)执行后调用
         * @param file {File | string} 现代浏览器返回File对象，IE返回文件名
         * @param mill {long} 毫秒数，如果File对象已有毫秒数则返回一样的
         * @return
         */
        this.doUpload = options.doUpload || emptyFunction;
        /**
         * uploading(progress) : 在文件上传中的时候，浏览器会不断触发此函数。IE中使用每200ms触发的假进度
         * @param progress {Progress} progress对象，里面存有例如上传进度loaded和文件大小total等属性
         * @return
         */
        this.uploading = options.uploading || emptyFunction;
        /**
         * uploadSuccess(resp) : 上传成功后执行的回调（针对AJAX而言）
         * @param resp {json | string} 根据options.dataType指定返回数据的格式
         * @return
         */
        this.uploadSuccess = options.uploadSuccess || emptyFunction;
        /**
         * uploadError(err) : 上传错误后执行的回调（针对AJAX而言）
         * @param err {Error | object} 如果返回catch到的error，其具有type和message属性
         * @return
         */
        this.uploadError = options.uploadError || emptyFunction;
        /**
         * uploadFail(resp) : 上传失败后执行的回调（针对AJAX而言）
         * @param resp {string} 失败信息
         */
        this.uploadFail = options.uploadFail || emptyFunction;
        /**
         * onabort(mill, xhrID) : 主动取消xhr进程的响应
         * @param mill {long} 毫秒数，本次上传时刻的时间
         * @param xhrID {int} 在doUpload时会返回的当次xhr代表ID
         */
        this.onabort = options.onabort || emptyFunction;

        this.files = options.files || this.files || false; //保存需要上传的文件
        /*特殊内容*/

        /*IE情况下，由于上传按钮被隐藏的input覆盖，不能进行disabled按钮处理。
         * 所以当disabledIEChoose为true（或者func返回值为true）时，禁止IE上传。
         */
        this.disabledIEChoose = options.disabledIEChoose || false;

        this._withoutFileUpload = options._withoutFileUpload || false; //不带文件上传，为了给秒传功能使用，不影响IE
        this.filesToUpload = options.filesToUpload || []; //使用filesToUpload()方法代替
        this.textBeforeFiles = options.textBeforeFiles || false; //make this true to add text fields before file data
        /*使用filesToUpload()方法代替*/
        if (this.filesToUpload.length && !this.isIE) {
            this.filesToUpload.forEach(function (file) {
                _this.files = [file];
                _this.commonUpload();
            });
        }

        /*放置虚拟DOM*/
        var chooseBtn = void 0,
            uploadBtn = void 0,
            flag = 0;
        var before = [],
            middle = [],
            after = [];
        if (this.chooseAndUpload) {
            React.Children.forEach(props.children, function (child) {
                if (child && child.ref == 'chooseAndUpload') {
                    chooseBtn = child;
                    flag++;
                } else {
                    flag == 0 ? before.push(child) : flag == 1 ? middle.push(child) : '';
                }
            });
        } else {
            React.Children.forEach(props.children, function (child) {
                if (child && child.ref == 'chooseBtn') {
                    chooseBtn = child;
                    flag++;
                } else if (child && child.ref == 'uploadBtn') {
                    uploadBtn = child;
                    flag++;
                } else {
                    flag == 0 ? before.push(child) : flag == 1 ? middle.push(child) : after.push(child);
                }
            });
        }
        this.setState({
            chooseBtn: chooseBtn,
            uploadBtn: uploadBtn,
            before: before,
            middle: middle,
            after: after
        });
    },


    /*触发隐藏的input框选择*/
    /*触发beforeChoose*/
    commonChooseFile: function commonChooseFile() {
        var jud = this.beforeChoose();
        if (jud != true && jud != undefined) return;
        this.refs['ajax_upload_file_input'].click();
    },

    /*现代浏览器input change事件。File API保存文件*/
    /*触发chooseFile*/
    commonChange: function commonChange(e) {
        var files = void 0;
        e.dataTransfer ? files = e.dataTransfer.files : e.target ? files = e.target.files : '';

        /*如果限制了多文件上传时的数量*/
        var numberLimit = typeof this.numberLimit === 'function' ? this.numberLimit() : this.numberLimit;
        if (this.multiple && numberLimit && files.length > numberLimit) {
            var newFiles = {};
            for (var i = 0; i < numberLimit; i++) {
                newFiles[i] = files[i];
            }newFiles.length = numberLimit;
            files = newFiles;
        }
        this.files = files;
        this.chooseFile(files);
        this.chooseAndUpload && this.commonUpload();
    },


    /*执行上传*/
    commonUpload: function commonUpload() {
        var _this2 = this;

        /*mill参数是当前时刻毫秒数，file第一次进行上传时会添加为file的属性，也可在beforeUpload为其添加，之后同一文件的mill不会更改，作为文件的识别id*/
        var mill = this.files.length && this.files[0].mill || new Date().getTime();
        var jud = this.beforeUpload(this.files, mill);
        if (jud != true && jud != undefined && (typeof jud === 'undefined' ? 'undefined' : _typeof(jud)) != 'object') {
            /*清除input的值*/
            this.refs['ajax_upload_file_input'].value = '';
            return;
        }

        if (!this.files) return;
        if (!this.baseUrl) throw new Error('baseUrl missing in options');

        /*用于存放当前作用域的东西*/
        var scope = {};
        /*组装FormData*/
        var formData = new FormData();
        /*If we need to add fields before file data append here*/
        if (this.textBeforeFiles) {
            formData = this.appendFieldsToFormData(formData);
        }
        if (!this._withoutFileUpload) {
            var fieldNameType = _typeof(this.fileFieldName);

            /*判断是用什么方式作为formdata item 的 name*/
            Object.keys(this.files).forEach(function (key) {
                if (key == 'length') return;

                if (fieldNameType == 'function') {
                    var file = _this2.files[key];
                    var fileFieldName = _this2.fileFieldName(file);
                    formData.append(fileFieldName, file);
                } else if (fieldNameType == 'string') {
                    var _file = _this2.files[key];
                    formData.append(_this2.fileFieldName, _file);
                } else {
                    var _file2 = _this2.files[key];
                    formData.append(_file2.name, _file2);
                }
            });
        }
        /*If we need to add fields after file data append here*/
        if (!this.textBeforeFiles) {
            formData = this.appendFieldsToFormData(formData);
        }
        var baseUrl = this.baseUrl;

        /*url参数*/
        /*如果param是一个函数*/
        var param = typeof this.param === 'function' ? this.param(this.files) : this.param;

        var paramStr = '';

        if (param) {
            var paramArr = [];
            param['_'] = mill;
            Object.keys(param).forEach(function (key) {
                return paramArr.push(key + '=' + param[key]);
            });
            paramStr = '?' + paramArr.join('&');
        }
        var targeturl = baseUrl + paramStr;

        /*AJAX上传部分*/
        var xhr = new XMLHttpRequest();
        xhr.open('POST', targeturl, true);

        /*跨域是否开启验证信息*/
        xhr.withCredentials = this.withCredentials;
        /*是否需要设置请求头*/
        var rh = this.requestHeaders;
        rh && Object.keys(rh).forEach(function (key) {
            return xhr.setRequestHeader(key, rh[key]);
        });

        /*处理超时。用定时器判断超时，不然xhr state=4 catch的错误无法判断是超时*/
        if (this.timeout) {
            xhr.timeout = this.timeout;
            xhr.ontimeout = function () {
                _this2.uploadError({ type: 'TIMEOUTERROR', message: 'timeout' });
                scope.isTimeout = false;
            };
            scope.isTimeout = false;
            setTimeout(function () {
                scope.isTimeout = true;
            }, this.timeout);
        }

        xhr.onreadystatechange = function () {
            /*xhr finish*/
            try {
                if (xhr.readyState == 4 && xhr.status >= 200 && xhr.status < 400) {
                    var resp = _this2.dataType == 'json' ? JSON.parse(xhr.responseText) : xhr.responseText;
                    _this2.uploadSuccess(resp);
                } else if (xhr.readyState == 4) {
                    /*xhr fail*/
                    var _resp = _this2.dataType == 'json' ? JSON.parse(xhr.responseText) : xhr.responseText;
                    _this2.uploadFail(_resp);
                }
            } catch (e) {
                /*超时抛出不一样的错误，不在这里处理*/
                !scope.isTimeout && _this2.uploadError({ type: 'FINISHERROR', message: e.message });
            }
        };
        /*xhr error*/
        xhr.onerror = function () {
            try {
                var resp = _this2.dataType == 'json' ? JSON.parse(xhr.responseText) : xhr.responseText;
                _this2.uploadError({ type: 'XHRERROR', message: resp });
            } catch (e) {
                _this2.uploadError({ type: 'XHRERROR', message: e.message });
            }
        };
        /*这里部分浏览器实现不一致，而且IE没有这个方法*/
        xhr.onprogress = xhr.upload.onprogress = function (progress) {
            _this2.uploading(progress, mill);
        };

        /*不带文件上传，给秒传使用*/
        this._withoutFileUpload ? xhr.send(null) : xhr.send(formData);

        /*保存xhr id*/
        xhrList.push(xhr);
        var cID = xhrList.length - 1;
        currentXHRID = cID;

        /*有响应abort的情况*/
        xhr.onabort = function () {
            return _this2.onabort(mill, cID);
        };

        /*trigger执行上传的用户回调*/
        this.doUpload(this.files, mill, currentXHRID);

        /*清除input的值*/
        this.refs['ajax_upload_file_input'].value = '';
    },


    /*组装自定义添加到FormData的对象*/
    appendFieldsToFormData: function appendFieldsToFormData(formData) {
        var field = typeof this.paramAddToField == 'function' ? this.paramAddToField() : this.paramAddToField;
        field && Object.keys(field).map(function (index) {
            return formData.append(index, field[index]);
        });
        return formData;
    },


    /*iE选择前验证*/
    /*触发beforeChoose*/
    IEBeforeChoose: function IEBeforeChoose(e) {
        var jud = this.beforeChoose();
        jud != true && jud != undefined && e.preventDefault();
    },

    /*IE需要用户真实点击上传按钮，所以使用透明按钮*/
    /*触发chooseFile*/
    IEChooseFile: function IEChooseFile(e) {
        this.fileName = e.target.value.substring(e.target.value.lastIndexOf('\\') + 1);
        this.chooseFile(this.fileName);
        /*先执行IEUpload，配置好action等参数，然后submit*/
        this.chooseAndUpload && this.IEUpload() !== false && document.getElementById('ajax_upload_file_form_' + this.IETag + currentIEID).submit();
        e.target.blur();
    },

    /*IE处理上传函数*/
    /*触发beforeUpload doUpload*/
    IEUpload: function IEUpload(e) {
        var _this3 = this;

        var mill = new Date().getTime();
        var jud = this.beforeUpload(this.fileName, mill);
        if (!this.fileName || jud != true && jud != undefined) {
            e && e.preventDefault();
            return false;
        }
        var that = this;

        /*url参数*/
        var baseUrl = this.baseUrl;

        var param = typeof this.param === 'function' ? this.param(this.fileName) : this.param;
        var paramStr = '';

        if (param) {
            var paramArr = [];
            param['_'] = mill;
            param['ie'] === undefined && (param['ie'] = 'true');
            for (var key in param) {
                if (param[key] != undefined) paramArr.push(key + '=' + param[key]);
            }
            paramStr = '?' + paramArr.join('&');
        }
        var targeturl = baseUrl + paramStr;

        document.getElementById('ajax_upload_file_form_' + this.IETag + currentIEID).setAttribute('action', targeturl);
        /*IE假的上传进度*/
        var getFakeProgress = this.fakeProgress();
        var loaded = 0,
            count = 0;

        var progressInterval = setInterval(function () {
            loaded = getFakeProgress(loaded);
            _this3.uploading({
                loaded: loaded,
                total: 100
            }, mill);
            /*防止永久执行，设定最大的次数。暂时为30秒(200*150)*/
            ++count >= 150 && clearInterval(progressInterval);
        }, 200);

        /*当前上传id*/
        var partIEID = currentIEID;
        /*回调函数*/
        window.attachEvent ? document.getElementById('ajax_upload_file_frame_' + this.IETag + partIEID).attachEvent('onload', handleOnLoad) : document.getElementById('ajax_upload_file_frame_' + this.IETag + partIEID).addEventListener('load', handleOnLoad);

        function handleOnLoad() {
            /*clear progress interval*/
            clearInterval(progressInterval);
            try {
                that.uploadSuccess(that.IECallback(that.dataType, partIEID));
            } catch (e) {
                that.uploadError(e);
            } finally {
                /*清除输入框的值*/
                var oInput = document.getElementById('ajax_upload_hidden_input_' + that.IETag + partIEID);
                oInput.outerHTML = oInput.outerHTML;
            }
        }
        this.doUpload(this.fileName, mill);
        /*置为非空闲*/
        IEFormGroup[currentIEID] = false;
    },

    /*IE回调函数*/
    //TODO 处理Timeout
    IECallback: function IECallback(dataType, frameId) {
        /*回复空闲状态*/
        IEFormGroup[frameId] = true;

        var frame = document.getElementById('ajax_upload_file_frame_' + this.IETag + frameId);
        var resp = {};
        var content = frame.contentWindow ? frame.contentWindow.document.body : frame.contentDocument.document.body;
        if (!content) throw new Error('Your browser does not support async upload');
        try {
            resp.responseText = content.innerHTML || 'null innerHTML';
            resp.json = JSON ? JSON.parse(resp.responseText) : eval('(' + resp.responseText + ')');
        } catch (e) {
            /*如果是包含了<pre>*/
            if (e.message && e.message.indexOf('Unexpected token') >= 0) {
                /*包含返回的json*/
                if (resp.responseText.indexOf('{') >= 0) {
                    var msg = resp.responseText.substring(resp.responseText.indexOf('{'), resp.responseText.lastIndexOf('}') + 1);
                    return JSON ? JSON.parse(msg) : eval('(' + msg + ')');
                }
                return { type: 'FINISHERROR', message: e.message };
            }
            throw e;
        }
        return dataType == 'json' ? resp.json : resp.responseText;
    },


    /*外部调用方法，主动触发选择文件（等同于调用btn.click()), 仅支持现代浏览器*/
    forwardChoose: function forwardChoose() {
        if (this.isIE) return false;
        this.commonChooseFile();
    },


    /**
     * 外部调用方法，当多文件上传时，用这个方法主动删除列表中某个文件
     * TODO: 此方法应为可以任意操作文件数组
     * @param func 用户调用时传入的函数，函数接收参数files（filesAPI 对象）
     * @return Obj File API 对象
     * File API Obj:
     * {
     *   0 : file,
     *   1 : file,
     *   length : 2
     * }
     */
    fowardRemoveFile: function fowardRemoveFile(func) {
        this.files = func(this.files);
    },


    /*外部调用方法，传入files（File API）对象可以立刻执行上传动作，IE不支持。调用随后会触发beforeUpload*/
    filesToUpload: function filesToUpload(files) {
        if (this.isIE) return;
        this.files = files;
        this.commonUpload();
    },


    /*外部调用方法，取消一个正在进行的xhr，传入id指定xhr（doupload时返回）或者默认取消最近一个。*/
    abort: function abort(id) {
        id === undefined ? xhrList[currentXHRID].abort() : xhrList[id].abort();
    },


    /*判断ie版本*/
    checkIE: function checkIE() {
        var userAgent = this.userAgent;
        var version = userAgent.indexOf('MSIE');
        if (version < 0) return -1;

        return parseFloat(userAgent.substring(version + 5, userAgent.indexOf(';', version)));
    },


    /*生成假的IE上传进度*/
    fakeProgress: function fakeProgress() {
        var add = 6;
        var decrease = 0.3,
            end = 98,
            min = 0.2;
        return function (lastTime) {
            var start = lastTime;
            if (start >= end) return start;

            start += add;
            add = add - decrease;
            add < min && (add = min);

            return start;
        };
    },
    getUserAgent: function getUserAgent() {
        var userAgentString = this.props.options && this.props.options.userAgent;
        var navigatorIsAvailable = typeof navigator !== 'undefined';
        if (!navigatorIsAvailable && !userAgentString) {
            throw new Error('\`options.userAgent\` must be set rendering react-fileuploader in situations when \`navigator\` is not defined in the global namespace. (on the server, for example)');
        }
        return navigatorIsAvailable ? navigator.userAgent : userAgentString;
    },
    getInitialState: function getInitialState() {
        return {
            chooseBtn: {}, //选择按钮。如果chooseAndUpload=true代表选择并上传。
            uploadBtn: {}, //上传按钮。如果chooseAndUpload=true则无效。
            before: [], //存放props.children中位于chooseBtn前的元素
            middle: [], //存放props.children中位于chooseBtn后，uploadBtn前的元素
            after: [] //存放props.children中位于uploadBtn后的元素,
        };
    },
    componentWillMount: function componentWillMount() {
        this.userAgent = this.getUserAgent();
        this.isIE = !(this.checkIE() < 0 || this.checkIE() >= 10);
        /*因为IE每次要用到很多form组，如果在同一页面需要用到多个<FileUpload>可以在options传入tag作为区分。并且不随后续props改变而改变*/
        var tag = this.props.options && this.props.options.tag;
        this.IETag = tag ? tag + '_' : '';

        this._updateProps(this.props);
    },
    componentDidMount: function componentDidMount() {},
    componentWillReceiveProps: function componentWillReceiveProps(newProps) {
        this._updateProps(newProps);
    },
    render: function render() {
        return this._packRender();
    },


    /*打包render函数*/
    _packRender: function _packRender() {
        /*IE用iframe表单上传，其他用ajax Formdata*/
        var render = '';
        if (this.isIE) {
            render = this._multiIEForm();
        } else {
            var restAttrs = {
                accept: this.accept,
                multiple: this.multiple
            };

            render = React.createElement(
                'div',
                { className: this.props.className, style: this.props.style },
                this.state.before,
                React.createElement(
                    'div',
                    { onClick: this.commonChooseFile,
                        style: { overflow: 'hidden', postion: 'relative', display: this.wrapperDisplay }
                    },
                    this.state.chooseBtn
                ),
                this.state.middle,
                React.createElement(
                    'div',
                    { onClick: this.commonUpload,
                        style: {
                            overflow: 'hidden',
                            postion: 'relative',
                            display: this.chooseAndUpload ? 'none' : this.wrapperDisplay
                        }
                    },
                    this.state.uploadBtn
                ),
                this.state.after,
                React.createElement('input', _extends({ type: 'file', name: 'ajax_upload_file_input', ref: 'ajax_upload_file_input',
                    style: { display: 'none' }, onChange: this.commonChange
                }, restAttrs))
            );
        }
        return render;
    },


    /*IE多文件同时上传，需要多个表单+多个form组合。根据currentIEID代表有多少个form。*/
    /*所有不在空闲（正在上传）的上传组都以display:none的形式插入，第一个空闲的上传组会display:block捕捉。*/
    _multiIEForm: function _multiIEForm() {
        var formArr = [];
        var hasFree = false;

        /* IE情况下，由于上传按钮被隐藏的input覆盖，不能进行disabled按钮处理。
         * 所以当disabledIEChoose为true（或者func返回值为true）时，禁止IE上传。
         */
        var isDisabled = typeof this.disabledIEChoose === 'function' ? this.disabledIEChoose() : this.disabledIEChoose;

        /*这里IEFormGroup的长度会变，所以不能存len*/
        for (var i = 0; i < IEFormGroup.length; i++) {
            _insertIEForm.call(this, formArr, i);
            /*如果当前上传组是空闲，hasFree=true，并且指定当前上传组ID*/
            if (IEFormGroup[i] && !hasFree) {
                hasFree = true;
                currentIEID = i;
            }
            /*如果所有上传组都不是空闲状态，push一个新增组*/
            i == IEFormGroup.length - 1 && !hasFree && IEFormGroup.push(true);
        }

        return React.createElement(
            'div',
            { className: this.props.className, style: this.props.style, id: 'react-file-uploader' },
            formArr
        );

        function _insertIEForm(formArr, i) {
            /*如果已经push了空闲组而当前也是空闲组*/
            if (IEFormGroup[i] && hasFree) return;
            /*是否display*/
            var isShow = IEFormGroup[i];
            /*Input内联样式*/
            var style = {
                position: 'absolute',
                left: '-30px',
                top: 0,
                zIndex: '50',
                fontSize: '80px',
                width: '200px',
                opacity: 0,
                filter: 'alpha(opacity=0)'

                /*是否限制了文件后缀，以及是否disabled*/
            };var restAttrs = {
                accept: this.accept,
                disabled: isDisabled
            };

            var input = React.createElement('input', _extends({ type: 'file', name: 'ajax_upload_hidden_input_' + i, id: 'ajax_upload_hidden_input_' + i,
                ref: 'ajax_upload_hidden_input_' + i, onChange: this.IEChooseFile, onClick: this.IEBeforeChoose,
                style: style }, restAttrs));

            i = '' + this.IETag + i;
            formArr.push(React.createElement(
                'form',
                { id: 'ajax_upload_file_form_' + i, method: 'post', target: 'ajax_upload_file_frame_' + i,
                    key: 'ajax_upload_file_form_' + i,
                    encType: 'multipart/form-data', ref: 'form_' + i, onSubmit: this.IEUpload,
                    style: { display: isShow ? 'block' : 'none' }
                },
                this.state.before,
                React.createElement(
                    'div',
                    { style: { overflow: 'hidden', position: 'relative', display: 'inline-block' } },
                    this.state.chooseBtn,
                    input
                ),
                this.state.middle,
                React.createElement(
                    'div',
                    { style: {
                            overflow: 'hidden',
                            position: 'relative',
                            display: this.chooseAndUpload ? 'none' : this.wrapperDisplay
                        }
                    },
                    this.state.uploadBtn,
                    React.createElement('input', { type: 'submit',
                        style: {
                            position: 'absolute',
                            left: 0,
                            top: 0,
                            fontSize: '50px',
                            width: '200px',
                            opacity: 0
                        }
                    })
                ),
                this.state.after
            ));
            formArr.push(React.createElement('iframe', { id: 'ajax_upload_file_frame_' + i,
                name: 'ajax_upload_file_frame_' + i,
                key: 'ajax_upload_file_frame_' + i,
                className: 'ajax_upload_file_frame',
                style: {
                    display: 'none',
                    width: 0,
                    height: 0,
                    margin: 0,
                    border: 0
                }
            }));
        }
    }
});

module.exports = FileUpload;

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = undefined;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

if (undefined !== 'production') {
  var REACT_ELEMENT_TYPE = typeof Symbol === 'function' && Symbol.for && Symbol.for('react.element') || 0xeac7;

  var isValidElement = function isValidElement(object) {
    return (typeof object === 'undefined' ? 'undefined' : _typeof(object)) === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
  };

  // By explicitly using `prop-types` you are opting into new development behavior.
  // http://fb.me/prop-types-in-prod
  var throwOnDirectAccess = true;
  module.exports = __webpack_require__(7)(isValidElement, throwOnDirectAccess);
} else {
  // By explicitly using `prop-types` you are opting into new production behavior.
  // http://fb.me/prop-types-in-prod
  module.exports = __webpack_require__(10)();
}

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var emptyFunction = __webpack_require__(0);
var invariant = __webpack_require__(1);
var warning = __webpack_require__(3);
var assign = __webpack_require__(8);

var ReactPropTypesSecret = __webpack_require__(2);
var checkPropTypes = __webpack_require__(9);

module.exports = function (isValidElement, throwOnDirectAccess) {
  /* global Symbol */
  var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
  var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.

  /**
   * Returns the iterator method function contained on the iterable object.
   *
   * Be sure to invoke the function with the iterable as context:
   *
   *     var iteratorFn = getIteratorFn(myIterable);
   *     if (iteratorFn) {
   *       var iterator = iteratorFn.call(myIterable);
   *       ...
   *     }
   *
   * @param {?object} maybeIterable
   * @return {?function}
   */
  function getIteratorFn(maybeIterable) {
    var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
    if (typeof iteratorFn === 'function') {
      return iteratorFn;
    }
  }

  /**
   * Collection of methods that allow declaration and validation of props that are
   * supplied to React components. Example usage:
   *
   *   var Props = require('ReactPropTypes');
   *   var MyArticle = React.createClass({
   *     propTypes: {
   *       // An optional string prop named "description".
   *       description: Props.string,
   *
   *       // A required enum prop named "category".
   *       category: Props.oneOf(['News','Photos']).isRequired,
   *
   *       // A prop named "dialog" that requires an instance of Dialog.
   *       dialog: Props.instanceOf(Dialog).isRequired
   *     },
   *     render: function() { ... }
   *   });
   *
   * A more formal specification of how these methods are used:
   *
   *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
   *   decl := ReactPropTypes.{type}(.isRequired)?
   *
   * Each and every declaration produces a function with the same signature. This
   * allows the creation of custom validation functions. For example:
   *
   *  var MyLink = React.createClass({
   *    propTypes: {
   *      // An optional string or URI prop named "href".
   *      href: function(props, propName, componentName) {
   *        var propValue = props[propName];
   *        if (propValue != null && typeof propValue !== 'string' &&
   *            !(propValue instanceof URI)) {
   *          return new Error(
   *            'Expected a string or an URI for ' + propName + ' in ' +
   *            componentName
   *          );
   *        }
   *      }
   *    },
   *    render: function() {...}
   *  });
   *
   * @internal
   */

  var ANONYMOUS = '<<anonymous>>';

  // Important!
  // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.
  var ReactPropTypes = {
    array: createPrimitiveTypeChecker('array'),
    bool: createPrimitiveTypeChecker('boolean'),
    func: createPrimitiveTypeChecker('function'),
    number: createPrimitiveTypeChecker('number'),
    object: createPrimitiveTypeChecker('object'),
    string: createPrimitiveTypeChecker('string'),
    symbol: createPrimitiveTypeChecker('symbol'),

    any: createAnyTypeChecker(),
    arrayOf: createArrayOfTypeChecker,
    element: createElementTypeChecker(),
    instanceOf: createInstanceTypeChecker,
    node: createNodeChecker(),
    objectOf: createObjectOfTypeChecker,
    oneOf: createEnumTypeChecker,
    oneOfType: createUnionTypeChecker,
    shape: createShapeTypeChecker,
    exact: createStrictShapeTypeChecker
  };

  /**
   * inlined Object.is polyfill to avoid requiring consumers ship their own
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
   */
  /*eslint-disable no-self-compare*/
  function is(x, y) {
    // SameValue algorithm
    if (x === y) {
      // Steps 1-5, 7-10
      // Steps 6.b-6.e: +0 != -0
      return x !== 0 || 1 / x === 1 / y;
    } else {
      // Step 6.a: NaN == NaN
      return x !== x && y !== y;
    }
  }
  /*eslint-enable no-self-compare*/

  /**
   * We use an Error-like object for backward compatibility as people may call
   * PropTypes directly and inspect their output. However, we don't use real
   * Errors anymore. We don't inspect their stack anyway, and creating them
   * is prohibitively expensive if they are created too often, such as what
   * happens in oneOfType() for any type before the one that matched.
   */
  function PropTypeError(message) {
    this.message = message;
    this.stack = '';
  }
  // Make `instanceof Error` still work for returned errors.
  PropTypeError.prototype = Error.prototype;

  function createChainableTypeChecker(validate) {
    if (undefined !== 'production') {
      var manualPropTypeCallCache = {};
      var manualPropTypeWarningCount = 0;
    }
    function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
      componentName = componentName || ANONYMOUS;
      propFullName = propFullName || propName;

      if (secret !== ReactPropTypesSecret) {
        if (throwOnDirectAccess) {
          // New behavior only for users of `prop-types` package
          invariant(false, 'Calling PropTypes validators directly is not supported by the `prop-types` package. ' + 'Use `PropTypes.checkPropTypes()` to call them. ' + 'Read more at http://fb.me/use-check-prop-types');
        } else if (undefined !== 'production' && typeof console !== 'undefined') {
          // Old behavior for people using React.PropTypes
          var cacheKey = componentName + ':' + propName;
          if (!manualPropTypeCallCache[cacheKey] &&
          // Avoid spamming the console because they are often not actionable except for lib authors
          manualPropTypeWarningCount < 3) {
            warning(false, 'You are manually calling a React.PropTypes validation ' + 'function for the `%s` prop on `%s`. This is deprecated ' + 'and will throw in the standalone `prop-types` package. ' + 'You may be seeing this warning due to a third-party PropTypes ' + 'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.', propFullName, componentName);
            manualPropTypeCallCache[cacheKey] = true;
            manualPropTypeWarningCount++;
          }
        }
      }
      if (props[propName] == null) {
        if (isRequired) {
          if (props[propName] === null) {
            return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));
          }
          return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));
        }
        return null;
      } else {
        return validate(props, propName, componentName, location, propFullName);
      }
    }

    var chainedCheckType = checkType.bind(null, false);
    chainedCheckType.isRequired = checkType.bind(null, true);

    return chainedCheckType;
  }

  function createPrimitiveTypeChecker(expectedType) {
    function validate(props, propName, componentName, location, propFullName, secret) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== expectedType) {
        // `propValue` being instance of, say, date/regexp, pass the 'object'
        // check, but we can offer a more precise error message here rather than
        // 'of type `object`'.
        var preciseType = getPreciseType(propValue);

        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createAnyTypeChecker() {
    return createChainableTypeChecker(emptyFunction.thatReturnsNull);
  }

  function createArrayOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
      }
      var propValue = props[propName];
      if (!Array.isArray(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
      }
      for (var i = 0; i < propValue.length; i++) {
        var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret);
        if (error instanceof Error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!isValidElement(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createInstanceTypeChecker(expectedClass) {
    function validate(props, propName, componentName, location, propFullName) {
      if (!(props[propName] instanceof expectedClass)) {
        var expectedClassName = expectedClass.name || ANONYMOUS;
        var actualClassName = getClassName(props[propName]);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createEnumTypeChecker(expectedValues) {
    if (!Array.isArray(expectedValues)) {
      undefined !== 'production' ? warning(false, 'Invalid argument supplied to oneOf, expected an instance of array.') : void 0;
      return emptyFunction.thatReturnsNull;
    }

    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      for (var i = 0; i < expectedValues.length; i++) {
        if (is(propValue, expectedValues[i])) {
          return null;
        }
      }

      var valuesString = JSON.stringify(expectedValues);
      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + propValue + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createObjectOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
      }
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
      }
      for (var key in propValue) {
        if (propValue.hasOwnProperty(key)) {
          var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
          if (error instanceof Error) {
            return error;
          }
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createUnionTypeChecker(arrayOfTypeCheckers) {
    if (!Array.isArray(arrayOfTypeCheckers)) {
      undefined !== 'production' ? warning(false, 'Invalid argument supplied to oneOfType, expected an instance of array.') : void 0;
      return emptyFunction.thatReturnsNull;
    }

    for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
      var checker = arrayOfTypeCheckers[i];
      if (typeof checker !== 'function') {
        warning(false, 'Invalid argument supplied to oneOfType. Expected an array of check functions, but ' + 'received %s at index %s.', getPostfixForTypeWarning(checker), i);
        return emptyFunction.thatReturnsNull;
      }
    }

    function validate(props, propName, componentName, location, propFullName) {
      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
        var checker = arrayOfTypeCheckers[i];
        if (checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret) == null) {
          return null;
        }
      }

      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createNodeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      if (!isNode(props[propName])) {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      for (var key in shapeTypes) {
        var checker = shapeTypes[key];
        if (!checker) {
          continue;
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createStrictShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      // We need to check all keys in case some are required but missing from
      // props.
      var allKeys = assign({}, props[propName], shapeTypes);
      for (var key in allKeys) {
        var checker = shapeTypes[key];
        if (!checker) {
          return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` key `' + key + '` supplied to `' + componentName + '`.' + '\nBad object: ' + JSON.stringify(props[propName], null, '  ') + '\nValid keys: ' + JSON.stringify(Object.keys(shapeTypes), null, '  '));
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function isNode(propValue) {
    switch (typeof propValue === 'undefined' ? 'undefined' : _typeof(propValue)) {
      case 'number':
      case 'string':
      case 'undefined':
        return true;
      case 'boolean':
        return !propValue;
      case 'object':
        if (Array.isArray(propValue)) {
          return propValue.every(isNode);
        }
        if (propValue === null || isValidElement(propValue)) {
          return true;
        }

        var iteratorFn = getIteratorFn(propValue);
        if (iteratorFn) {
          var iterator = iteratorFn.call(propValue);
          var step;
          if (iteratorFn !== propValue.entries) {
            while (!(step = iterator.next()).done) {
              if (!isNode(step.value)) {
                return false;
              }
            }
          } else {
            // Iterator will provide entry [k,v] tuples rather than values.
            while (!(step = iterator.next()).done) {
              var entry = step.value;
              if (entry) {
                if (!isNode(entry[1])) {
                  return false;
                }
              }
            }
          }
        } else {
          return false;
        }

        return true;
      default:
        return false;
    }
  }

  function isSymbol(propType, propValue) {
    // Native Symbol.
    if (propType === 'symbol') {
      return true;
    }

    // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
    if (propValue['@@toStringTag'] === 'Symbol') {
      return true;
    }

    // Fallback for non-spec compliant Symbols which are polyfilled.
    if (typeof Symbol === 'function' && propValue instanceof Symbol) {
      return true;
    }

    return false;
  }

  // Equivalent of `typeof` but with special handling for array and regexp.
  function getPropType(propValue) {
    var propType = typeof propValue === 'undefined' ? 'undefined' : _typeof(propValue);
    if (Array.isArray(propValue)) {
      return 'array';
    }
    if (propValue instanceof RegExp) {
      // Old webkits (at least until Android 4.0) return 'function' rather than
      // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
      // passes PropTypes.object.
      return 'object';
    }
    if (isSymbol(propType, propValue)) {
      return 'symbol';
    }
    return propType;
  }

  // This handles more types than `getPropType`. Only used for error messages.
  // See `createPrimitiveTypeChecker`.
  function getPreciseType(propValue) {
    if (typeof propValue === 'undefined' || propValue === null) {
      return '' + propValue;
    }
    var propType = getPropType(propValue);
    if (propType === 'object') {
      if (propValue instanceof Date) {
        return 'date';
      } else if (propValue instanceof RegExp) {
        return 'regexp';
      }
    }
    return propType;
  }

  // Returns a string that is postfixed to a warning about an invalid type.
  // For example, "undefined" or "of type array"
  function getPostfixForTypeWarning(value) {
    var type = getPreciseType(value);
    switch (type) {
      case 'array':
      case 'object':
        return 'an ' + type;
      case 'boolean':
      case 'date':
      case 'regexp':
        return 'a ' + type;
      default:
        return type;
    }
  }

  // Returns class name of the object, if any.
  function getClassName(propValue) {
    if (!propValue.constructor || !propValue.constructor.name) {
      return ANONYMOUS;
    }
    return propValue.constructor.name;
  }

  ReactPropTypes.checkPropTypes = checkPropTypes;
  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/


/* eslint-disable no-unused-vars */

var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
	if (val === null || val === undefined) {
		throw new TypeError('Object.assign cannot be called with null or undefined');
	}

	return Object(val);
}

function shouldUseNative() {
	try {
		if (!Object.assign) {
			return false;
		}

		// Detect buggy property enumeration order in older V8 versions.

		// https://bugs.chromium.org/p/v8/issues/detail?id=4118
		var test1 = new String('abc'); // eslint-disable-line no-new-wrappers
		test1[5] = 'de';
		if (Object.getOwnPropertyNames(test1)[0] === '5') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test2 = {};
		for (var i = 0; i < 10; i++) {
			test2['_' + String.fromCharCode(i)] = i;
		}
		var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
			return test2[n];
		});
		if (order2.join('') !== '0123456789') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test3 = {};
		'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
			test3[letter] = letter;
		});
		if (Object.keys(Object.assign({}, test3)).join('') !== 'abcdefghijklmnopqrst') {
			return false;
		}

		return true;
	} catch (err) {
		// We don't expect any of the above to throw, but better to be safe.
		return false;
	}
}

module.exports = shouldUseNative() ? Object.assign : function (target, source) {
	var from;
	var to = toObject(target);
	var symbols;

	for (var s = 1; s < arguments.length; s++) {
		from = Object(arguments[s]);

		for (var key in from) {
			if (hasOwnProperty.call(from, key)) {
				to[key] = from[key];
			}
		}

		if (getOwnPropertySymbols) {
			symbols = getOwnPropertySymbols(from);
			for (var i = 0; i < symbols.length; i++) {
				if (propIsEnumerable.call(from, symbols[i])) {
					to[symbols[i]] = from[symbols[i]];
				}
			}
		}
	}

	return to;
};

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

if (undefined !== 'production') {
  var invariant = __webpack_require__(1);
  var warning = __webpack_require__(3);
  var ReactPropTypesSecret = __webpack_require__(2);
  var loggedTypeFailures = {};
}

/**
 * Assert that the values match with the type specs.
 * Error messages are memorized and will only be shown once.
 *
 * @param {object} typeSpecs Map of name to a ReactPropType
 * @param {object} values Runtime values that need to be type-checked
 * @param {string} location e.g. "prop", "context", "child context"
 * @param {string} componentName Name of the component for error messages.
 * @param {?Function} getStack Returns the component stack.
 * @private
 */
function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
  if (undefined !== 'production') {
    for (var typeSpecName in typeSpecs) {
      if (typeSpecs.hasOwnProperty(typeSpecName)) {
        var error;
        // Prop type validation may throw. In case they do, we don't want to
        // fail the render phase where it didn't fail before. So we log it.
        // After these have been cleaned up, we'll let them throw.
        try {
          // This is intentionally an invariant that gets caught. It's the same
          // behavior as without this statement except with a better message.
          invariant(typeof typeSpecs[typeSpecName] === 'function', '%s: %s type `%s` is invalid; it must be a function, usually from ' + 'the `prop-types` package, but received `%s`.', componentName || 'React class', location, typeSpecName, _typeof(typeSpecs[typeSpecName]));
          error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret);
        } catch (ex) {
          error = ex;
        }
        warning(!error || error instanceof Error, '%s: type specification of %s `%s` is invalid; the type checker ' + 'function must return `null` or an `Error` but returned a %s. ' + 'You may have forgotten to pass an argument to the type checker ' + 'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' + 'shape all require an argument).', componentName || 'React class', location, typeSpecName, typeof error === 'undefined' ? 'undefined' : _typeof(error));
        if (error instanceof Error && !(error.message in loggedTypeFailures)) {
          // Only monitor this failure once because there tends to be a lot of the
          // same error.
          loggedTypeFailures[error.message] = true;

          var stack = getStack ? getStack() : '';

          warning(false, 'Failed %s type: %s%s', location, error.message, stack != null ? stack : '');
        }
      }
    }
  }
}

module.exports = checkPropTypes;

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var emptyFunction = __webpack_require__(0);
var invariant = __webpack_require__(1);
var ReactPropTypesSecret = __webpack_require__(2);

module.exports = function () {
  function shim(props, propName, componentName, location, propFullName, secret) {
    if (secret === ReactPropTypesSecret) {
      // It is still safe when called from React.
      return;
    }
    invariant(false, 'Calling PropTypes validators directly is not supported by the `prop-types` package. ' + 'Use PropTypes.checkPropTypes() to call them. ' + 'Read more at http://fb.me/use-check-prop-types');
  };
  shim.isRequired = shim;
  function getShim() {
    return shim;
  };
  // Important!
  // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.
  var ReactPropTypes = {
    array: shim,
    bool: shim,
    func: shim,
    number: shim,
    object: shim,
    string: shim,
    symbol: shim,

    any: shim,
    arrayOf: getShim,
    element: shim,
    instanceOf: getShim,
    node: shim,
    objectOf: getShim,
    oneOf: getShim,
    oneOfType: getShim,
    shape: getShim,
    exact: getShim
  };

  ReactPropTypes.checkPropTypes = emptyFunction;
  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};

/***/ })
/******/ ]);