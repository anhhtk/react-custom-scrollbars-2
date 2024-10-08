'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = getScrollbarWidth;

var _domCss = require('dom-css');

var _domCss2 = _interopRequireDefault(_domCss);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var scrollbarWidth = false;

function getScrollbarWidth() {
    var cacheEnabled = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

    if (cacheEnabled && scrollbarWidth !== false) return scrollbarWidth;
    /* istanbul ignore else */
    if (typeof document !== 'undefined') {
        var div = document.createElement('div');
        (0, _domCss2.default)(div, {
            width: 100,
            height: 100,
            position: 'absolute',
            top: -9999,
            overflow: 'scroll',
            MsOverflowStyle: 'scrollbar'
        });
        document.body.appendChild(div);
        scrollbarWidth = div.offsetWidth - div.clientWidth;
        document.body.removeChild(div);

        // fix scrollbars is missing in Mac
        if (scrollbarWidth === 0) {
            scrollbarWidth = 15;
        }
    } else {
        scrollbarWidth = 0;
    }
    return scrollbarWidth || 0;
}