

function ___$insertStyle(css) {
  if (!css) {
    return;
  }
  if (typeof window === 'undefined') {
    return;
  }

  var style = document.createElement('style');

  style.setAttribute('type', 'text/css');
  style.innerHTML = css;
  document.head.appendChild(style);
  return css;
}

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var Box = require('@material-ui/core/Box');
var clsx = require('clsx');
var IconButton = require('@material-ui/core/IconButton');
var styles = require('@material-ui/core/styles');
var core = require('@material-ui/core');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var Box__default = /*#__PURE__*/_interopDefaultLegacy(Box);
var clsx__default = /*#__PURE__*/_interopDefaultLegacy(clsx);
var IconButton__default = /*#__PURE__*/_interopDefaultLegacy(IconButton);

var useDarkToggleStyles = styles.makeStyles(function (theme) { return ({
    iconButton: {
        overflow: "hidden",
        "&:hover": {
            backgroundColor: "transparent",
        },
    },
    root: {
        position: "absolute",
    },
    enterAnim: {
        animation: "$enterAnim 1000ms " + theme.transitions.easing.easeInOut,
        transform: "translateY(0)",
    },
    exitAnim: {
        animation: "$exitAnim 1000ms " + theme.transitions.easing.easeInOut,
        transform: "translateY(50px)",
    },
    "@keyframes enterAnim": {
        "0%": {
            transform: "translateY(50px)",
        },
        "100%": {
            transform: "translateY(0)",
        },
    },
    "@keyframes exitAnim": {
        "0%": {
            transform: "translateY(0)",
        },
        "100%": {
            transform: "translateY(50px)",
        },
    },
}); });
function usePrevious(value) {
    var ref = React.useRef();
    React.useEffect(function () {
        ref.current = value;
    });
    return ref.current;
}
function DarkModeToggle() {
    var _a, _b, _c, _d;
    var isMobileSize = false;
    var classes = useDarkToggleStyles();
    var isDarkMode = true;
    var prevMode = usePrevious(isDarkMode);
    var enableAnim = isDarkMode !== prevMode && isMobileSize;
    return (React.createElement(Box__default['default'], { position: "relative", display: "flex", justifyContent: "left" , alignItems: "center", marginLeft: 2, marginRight: 2, style: { cursor: "pointer" }, onClick: function () { } },
        React.createElement(IconButton__default['default'], { disableTouchRipple: true, disableRipple: true, disableFocusRipple: true, className: classes.iconButton },
            React.createElement(Box__default['default'], { style: {
                    transform: "translateY(0)",
                }, className: clsx__default['default'](classes.root, (_a = {},
                    _a[classes.enterAnim] = enableAnim,
                    _a), (_b = {},
                    _b[classes.exitAnim] = !isDarkMode ,
                    _b)) },
                React.createElement(core.Button, { style: { color: "#ffeb3b" } }, "Light")),
            React.createElement(Box__default['default'], { style: {
                    transform: "translateY(50px)",
                }, className: clsx__default['default'](classes.root, (_c = {},
                    _c[classes.enterAnim] = !isDarkMode ,
                    _c), (_d = {},
                    _d[classes.exitAnim] = enableAnim,
                    _d)) },
                React.createElement(core.Button, { color: "primary" }, "Light")))));
}

exports.default = DarkModeToggle;
//# sourceMappingURL=rollup.config.js.map
